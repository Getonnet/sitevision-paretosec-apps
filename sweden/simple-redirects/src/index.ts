import router from "@sitevision/api/common/router";
import redirectUtil from "@sitevision/api/server/RedirectUtil";
import storage from "@sitevision/api/server/storage";
import resourceLocatorUtil from "@sitevision/api/server/ResourceLocatorUtil";

type UrlsObject = {
  [key: string]: string | string[];
};

type Nodes = {
  nodes: string[];
};

const db = storage.getKeyValueDataStore("paretosec-dev");

router.get("/all", (req, res) => {
  const redirects: any = {};
  let existingNodes: Nodes = {
    nodes: [],
  };

  try {
    existingNodes = db.get("redirectNodes") as Nodes;
  } catch (e) {
    res.json({ redirects: "No redirects found" });
  }

  if (existingNodes.nodes.length) {
    existingNodes.nodes.map((n) => {
      redirects[n] = redirectUtil.getRedirectURIs(
        resourceLocatorUtil.getNodeByUrl(n)
      );
    });
    res.json({ redirects });
  } else {
    res.json({ redirects: "No redirects found" });
  }
});

router.get("/add-redirects", (req, res) => {
  const urlsObj: UrlsObject = req.params;
  const newNodes: string[] = [];
  const log: string[] = [];

  if (!Object.keys(urlsObj).length)
    return res.json({ message: "Please add proper data" });

  /**
   * Note: New path should include domain name
   */
  Object.keys(urlsObj).map((newPath) => {
    const targetNode = resourceLocatorUtil.getNodeByUrl(newPath);
    const oldPath = urlsObj[newPath];

    if (targetNode) {
      newNodes.indexOf(newPath) === -1 && newNodes.push(newPath);

      typeof oldPath === "string"
        ? redirectUtil.addRedirectURI(targetNode, oldPath)
        : redirectUtil.addRedirectURIs(targetNode, oldPath);
    } else {
      log.push(`No existing page found for ${newPath}`);
    }
  });

  // get old nodes
  let existingNodes: Nodes = {
    nodes: [],
  };

  try {
    existingNodes = db.get("redirectNodes") as Nodes;
  } catch (e) {
    // if key not found, add new key to store data
    db.put("redirectNodes", { nodes: [] });
  }

  // merge old nodes with new nodes
  let mergedNodes = {};

  if (existingNodes.nodes.length) {
    mergedNodes = {
      nodes: [...new Set([...newNodes, ...existingNodes.nodes])],
    };
  } else {
    mergedNodes = {
      nodes: newNodes,
    };
  }

  // save to db
  db.put("redirectNodes", mergedNodes);

  // send back response
  res.json({ message: "Success", errors: log, newNodes, mergedNodes });
});

router.get("/delete-one-redirect", (req, res) => {
  const node = resourceLocatorUtil.getNodeByUrl(req.params.url);
  const uri = req.params.path;
  redirectUtil.removeRedirectURI(node, uri);
  res.json({ message: `${uri} was deleted from ${node}` });
});

router.get("/delete-all-redirects-for-one-page-url", (req, res) => {
  const url = req.params.url;
  const node = resourceLocatorUtil.getNodeByUrl(url);
  redirectUtil.removeAllRedirectURIs(node);

  // update nodes
  const currentNodes = db.get("redirectNodes") as Nodes;
  const newNodes = currentNodes.nodes;
  delete newNodes[newNodes.indexOf(url)];
  db.put("redirectNodes", { nodes: newNodes });

  res.json({ message: `All redirects was deleted for: '${node}' ` });
});

// router.get("/delete-all-for-all-pages", (req, res) => {
// TODO: implement
// });

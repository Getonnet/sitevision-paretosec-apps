import router from "@sitevision/api/common/router";
import redirectUtil from "@sitevision/api/server/RedirectUtil";
import storage from "@sitevision/api/server/storage";
import resourceLocatorUtil from "@sitevision/api/server/ResourceLocatorUtil";
// import { getFormattedValues } from "./util";

type UrlsObject = {
  [key: string]: string | string[];
};

type Nodes = {
  nodes: string[];
};

const db = storage.getKeyValueDataStore("paretosec-dev");

router.get("/all", (req, res) => {
  const rs = redirectUtil.getRedirectURIs(
    resourceLocatorUtil.getNodeByUrl(
      "https://use-temp-pareto.sitevision-cloud.se/omoss"
    )
  );
  res.json({ redirects: rs });
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

// router.post("/add", (req, res) => {
//   const node = resourceLocatorUtil.getNodeByUrl(req.params.path);
//   if (node && node.isNode()) {
//     redirectUtil.addRedirectURI(node, req.params.target);
//     res.json("Success");
//   } else {
//     res.send("Not a node");
//     res.json(req.params);
//   }
// });

// router.put("/update", (req, res) => {
//   res.json({ message: "Hello from PUT" });
// });

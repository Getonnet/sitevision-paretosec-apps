// import router from "@sitevision/api/common/router";
// import resourceLocatorUtil from "@sitevision/api/server/ResourceLocatorUtil";
// import redirectUtil from "@sitevision/api/server/RedirectUtil";
// import resourceLocatorUtil from "@sitevision/api/server/ResourceLocatorUtil";

(() => {
  const router = require("router");
  const resourceLocatorUtil = require("ResourceLocatorUtil");
  const redirectUtil = require("RedirectUtil");
  const storage = require("Storage");

  // const mainPageNode = resourceLocatorUtil.getSitePage();
  const db = storage.getKeyValueDataStore("paretosec-dev");

  const getFormattedValues = (string) => {
    const mergedObject = {};
    const lines = string.split("\n");
    lines.map((line) => {
      const lineArr = line.split(",").map((item) => item.trim());
      if (mergedObject.hasOwnProperty(lineArr[1])) {
        mergedObject[lineArr[1]] = [...mergedObject[lineArr[1]], lineArr[0]];
      } else {
        mergedObject[lineArr[1]] = [lineArr[0]];
      }
    });
    return mergedObject;
  };

  router.get("/", (req, res) => {
    res.render({});
  });

  /**
   * TODO: Merge array of string into, {key$: [string]}
   * Current implementation will send too many request to same node
   * Redirect util lets us add multiple path to one node,
   * Lets add in bulks
   */
  router.post("/add-redirect-uris", (req, res) => {
    const urlsObj = getFormattedValues(req.params.value);
    const newNodes = [];

    async function addRedirectsWithDelay() {
      for (const key in urlsObj) {
        // console.log(`${key}: ${urlsObj[key]}`);
        const url = urlsObj[key];
        const targetNode = resourceLocatorUtil.getNodeByUrl(url[1]);
        if (targetNode) {
          newNodes.indexOf(url[1]) === -1 && newNodes.push(url[1]);
          redirectUtil.addRedirectURI(targetNode, url[0]);
          await delay(1000); // Adjust the delay time in milliseconds (e.g., 1000ms = 1s)
        }
      }
    }

    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    // Call the function with your urlArr
    try {
      addRedirectsWithDelay().then(() => {});
      // get old nodes
      const existingNodes = db.get("redirectNodes");

      // merge old nodes with new nodes
      let mergedNodes = {};
      if (existingNodes) {
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
      res.send("Success");
    } catch (e) {
      res.send(JSON.stringify(e));
    }
  });

  router.get("/all-redirects", () => {
    // redirectUtil.getRedirectURIs();
  });

  router.get("/remove-all-redirects", () => {
    // redirectUtil.removeAllRedirectURIs();
  });
})();

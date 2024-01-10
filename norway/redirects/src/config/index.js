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

  router.get("/", (req, res) => {
    res.render({});
  });

  const getFormattedValues = (string) => {
    const mergedObject = {};
    const lines = string.split("\n");
    lines.map((line) => {
      const lineArr = line.split(",").map((item) => item.trim());
      // removing domain name, so redirects will work even if domain changes
      let nodeUrl = lineArr[1].replace("https://www.paretosec.no/", "/");
      nodeUrl = nodeUrl.replace("https://paretosec.no/", "/");

      if (mergedObject.hasOwnProperty(lineArr[1])) {
        mergedObject[nodeUrl] = [...mergedObject[lineArr[1]], lineArr[0]];
      } else {
        mergedObject[nodeUrl] = [lineArr[0]];
      }
    });
    return mergedObject;
  };

  router.post("/add-redirect-uris", (req, res) => {
    const urlsObj = getFormattedValues(req.params.value);
    const newNodes = [];

    async function addRedirectsWithDelay() {
      for (const key in urlsObj) {
        const urlsArr = urlsObj[key];
        const targetNode = resourceLocatorUtil.getNodeByUrl(key);

        if (targetNode) {
          newNodes.indexOf(key) === -1 && newNodes.push(key);
          redirectUtil.addRedirectURIs(targetNode, urlsArr);
          await delay(500);
        }
      }
    }

    function delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    // Call the function with your urlArr
    try {
      addRedirectsWithDelay().then(() => {
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
      });
    } catch (e) {
      res.send(JSON.stringify(e));
    }
  });

  router.get("/all-redirects", () => {
    const existingNodes = db.get("redirectNodes");
    // redirectUtil.getRedirectURIs();
  });

  router.get("/remove-all-redirects", () => {
    // redirectUtil.removeAllRedirectURIs();
  });
})();

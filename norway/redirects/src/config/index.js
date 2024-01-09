// import router from "@sitevision/api/common/router";
// import resourceLocatorUtil from "@sitevision/api/server/ResourceLocatorUtil";
// import redirectUtil from "@sitevision/api/server/RedirectUtil";
// import resourceLocatorUtil from "@sitevision/api/server/ResourceLocatorUtil";

(() => {
  const router = require("router");
  const resourceLocatorUtil = require("ResourceLocatorUtil");
  const redirectUtil = require("RedirectUtil");

  const getFormattedValues = (string) => {
    const lines = string.split("\n");
    return lines.map((line) => line.split(",").map((item) => item.trim()));
  };

  // const mainPageNode = resourceLocatorUtil.getSitePage();

  router.get("/", (req, res) => {
    res.render({});
  });

  router.post("/add-redirect-uris", (req, res) => {
    const urlArr = getFormattedValues(req.params.value);

    async function addRedirectsWithDelay(urlArr) {
      for (let i = 0; i < urlArr.length; i++) {
        const url = urlArr[i];
        const targetNode = resourceLocatorUtil.getNodeByUrl(url[1]);
        if (targetNode) {
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
      addRedirectsWithDelay(urlArr);
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

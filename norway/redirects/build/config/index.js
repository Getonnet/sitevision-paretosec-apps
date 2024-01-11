"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// import router from "@sitevision/api/common/router";
// import resourceLocatorUtil from "@sitevision/api/server/ResourceLocatorUtil";
// import redirectUtil from "@sitevision/api/server/RedirectUtil";
// import resourceLocatorUtil from "@sitevision/api/server/ResourceLocatorUtil";

(function () {
  var router = require("router");
  var resourceLocatorUtil = require("ResourceLocatorUtil");
  var redirectUtil = require("RedirectUtil");
  var storage = require("Storage");

  // const mainPageNode = resourceLocatorUtil.getSitePage();
  console.log(storage);
  var db = storage && storage.getKeyValueDataStore("paretosec-dev");
  router.get("/", function (req, res) {
    res.render({});
  });
  var getFormattedValues = function getFormattedValues(string) {
    var mergedObject = {};
    var lines = string.split("\n");
    lines.map(function (line) {
      var lineArr = line.split(",").map(function (item) {
        return item.trim();
      });
      // removing domain name, so redirects will work even if domain changes
      var nodeUrl = lineArr[1].replace("https://www.paretosec.no/", "/");
      nodeUrl = nodeUrl.replace("https://paretosec.no/", "/");
      if (mergedObject.hasOwnProperty(lineArr[1])) {
        mergedObject[nodeUrl] = [].concat(_toConsumableArray(mergedObject[lineArr[1]]), [lineArr[0]]);
      } else {
        mergedObject[nodeUrl] = [lineArr[0]];
      }
    });
    return mergedObject;
  };
  router.post("/add-redirect-uris", function (req, res) {
    var urlsObj = getFormattedValues(req.params.value);
    var newNodes = [];
    function addRedirectsWithDelay() {
      for (var key in urlsObj) {
        var urlsArr = urlsObj[key];
        var targetNode = resourceLocatorUtil.getNodeByUrl(key);
        if (targetNode) {
          newNodes.indexOf(key) === -1 && newNodes.push(key);
          redirectUtil.addRedirectURIs(targetNode, urlsArr);
          // await delay(500);
        }
      }
    }

    // function delay(ms) {
    //   return new Promise((resolve) => setTimeout(resolve, ms));
    // }

    // Call the function with your urlArr
    try {
      addRedirectsWithDelay();
      // get old nodes
      var existingNodes = db.get("redirectNodes");

      // merge old nodes with new nodes
      var mergedNodes = {};
      if (existingNodes) {
        mergedNodes = {
          nodes: _toConsumableArray(new Set([].concat(newNodes, _toConsumableArray(existingNodes.nodes))))
        };
      } else {
        mergedNodes = {
          nodes: newNodes
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
  router.get("/all-redirects", function () {
    var existingNodes = db.get("redirectNodes");
    // redirectUtil.getRedirectURIs();
  });
  router.get("/remove-all-redirects", function () {
    // redirectUtil.removeAllRedirectURIs();
  });
})();
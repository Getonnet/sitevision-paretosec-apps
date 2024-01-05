import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import router from "@sitevision/api/common/router";
import redirectUtil from "@sitevision/api/server/RedirectUtil";
import resourceLocatorUtil from "@sitevision/api/server/ResourceLocatorUtil";
import App from "./components/App";
// import appData from "@sitevision/api/server/appData";

router.get("/", (req, res) => {
  // const name = appData.get("name") as string;
  const node = resourceLocatorUtil.getNodeByPath(
    "/Pareto Securities/Page Repository/Site Page/Övrigt/Login"
  );
  console.log("_________________________________");
  console.log("is a Node: " + node.getPath());
  const redirects = redirectUtil.getRedirectURIs(node);
  console.log(redirects);
  const message = "";

  res.send(
    renderToStaticMarkup(<App message={JSON.stringify(message)} name={""} />)
  );
});

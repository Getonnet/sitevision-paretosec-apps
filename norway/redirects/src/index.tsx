import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import router from "@sitevision/api/common/router";
// import redirectUtil from "@sitevision/api/server/RedirectUtil";
// import resourceLocatorUtil from "@sitevision/api/server/ResourceLocatorUtil";
import App from "./components/App";
// import appData from "@sitevision/api/server/appData";

router.get("/", (req, res) => {
  res.send(renderToStaticMarkup(<App message={"Check settings"} name={""} />));
});

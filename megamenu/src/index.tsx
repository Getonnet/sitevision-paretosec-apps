import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import router from "@sitevision/api/common/router";
import App from "./components/App";
// import appData from "@sitevision/api/server/appData";

router.get("/", (req, res) => {
  // const name = appData.get("name") as string;

  res.send(renderToStaticMarkup(<App name={"name"} />));
});

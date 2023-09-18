import * as React from "react";
import { renderToString } from "react-dom/server";
import router from "@sitevision/api/common/router";
import App from "./components/App";

router.get("/", (req, res) => {
  const protocol = req.protocol ? "https" : "http";
  const hostname = req.hostname;
  const fullURL = `${protocol}://${hostname}${req.uri}`;

  res.agnosticRender(renderToString(<App pageUrl={fullURL} />), {
    pageUrl: req.uri,
  });
});

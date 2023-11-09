import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import router from "@sitevision/api/common/router";
import appData from "@sitevision/api/server/appData";
import App from "./components/App";

router.get("/", (req, res) => {
  const message = "Hello, world!";
  const name = appData.get("name") as string;

  res.send(renderToStaticMarkup(<App message={message} name={name} />));
});

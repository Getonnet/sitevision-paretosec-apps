import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import router from "@sitevision/api/common/router";
import appData from "@sitevision/api/server/appData";
import App from "./components/App";

router.get("/", (req, res) => {
  const data = {
    bgImg: appData.get("bgImg", "URI") as string,
    imagePosition: appData.get("imagePosition") as "left" | "right",
    smallTitle: appData.get("smallTitle") as string,
    title: appData.get("title") as string,
    description: appData.get("description") as string,
    buttonText: appData.get("buttonText") as string,
    buttonLink: appData.get("buttonLink") as string,
    assertiveText: appData.get("assertiveText") as string,
    newTab: appData.get("newTab") as boolean,
    buttonStyle: appData.get("buttonStyle") as "button" | "text",
    backgroundColor: appData.get("backgroundColor", "htmlHexValue") as string,
    textColor: appData.get("backgroundColor", "htmlHexValue") as string,
  };

  res.send(renderToStaticMarkup(<App data={data} />));
});

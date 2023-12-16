import * as React from "react";
import { renderToString } from "react-dom/server";
import router from "@sitevision/api/common/router";
import appData from "@sitevision/api/server/appData";
import App from "./components/App";

router.get("/", (req, res) => {
  const data = {
    desktopLogo: appData.get("desktopLogo", "URI") as string,
    mobileLogo: appData.get("mobileLogo", "URI") as string,
    loginBtnText: appData.get("loginBtnText") as string,
    loginBtnLink: appData.get("loginBtnLink", "URI") as string,
    ctaBtnText: appData.get("ctaBtnText") as string,
    ctaLink: appData.get("ctaLink", "URI") as string,
  };

  res.agnosticRender(renderToString(<App data={data} />), {
    data,
  });
});

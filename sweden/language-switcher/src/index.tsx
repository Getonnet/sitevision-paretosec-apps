import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import router from "@sitevision/api/common/router";
import appData from "@sitevision/api/server/appData";
import App from "./components/App";

router.get("/", (req, res) => {
  const norwaySiteLink = appData.get("norwaySiteLink") as string;
  const swedenSiteLink = appData.get("swedenSiteLink") as string;
  res.send(
    renderToStaticMarkup(
      <App norwaySiteLink={norwaySiteLink} swedenSiteLink={swedenSiteLink} />
    )
  );
});

import * as React from "react";
import { renderToString } from "react-dom/server";
import router from "@sitevision/api/common/router";
import appData from "@sitevision/api/server/appData";
import App from "./components/App";
import ArticleUtil from "@sitevision/api/server/ArticleUtil";

// TODO: refactor all this, no server side rendering needed
router.get("/", (req, res) => {
  // const ticker = [{ feed: 26, ticker: "BMW" }];
  const tickers = appData.get("selectTickers") as string[];
  console.log("admin selected tickers: ", tickers);

  res.agnosticRender(
    renderToString(<App articleId={ArticleUtil.PROPERTY_SHORTID} />),
    {
      articleId: ArticleUtil.PROPERTY_SHORTID,
      // token: "",
      // tickers: tickers,
    }
  );
});

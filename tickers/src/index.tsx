import * as React from "react";
import { renderToString } from "react-dom/server";
import router from "@sitevision/api/common/router";
import appData from "@sitevision/api/server/appData";
import App from "./components/App";
import requester from "@sitevision/api/server/Requester";
import { TokenGenPayload, TokenGenUrl } from "./http.service";
import { useState } from "react";

router.get("/", (req, res) => {
  // const ticker = [{ feed: 26, ticker: "BMW" }];
  const tickers = appData.get("selectTickers") as string[];
  console.log("admin selected tickers: ", tickers);
  const [token, setToken] = useState("");

  requester
    .post(TokenGenUrl, TokenGenPayload)
    .done((data: any) => {
      // res.json({ message: data }); // output data to frontend
      setToken(data.access_token);
    })
    .fail((message: any) => {
      res.json({ message: message });
    });

  // app content render here
  res.agnosticRender(
    renderToString(
      <App
        token={token}
        tickers={tickers}
        // titleShort={"AAPL"}
        // title={"Apple inc"}
        // price={"180.25"}
        // growthNumber={"0.6202"}
        // growthPercent={"-0.89%"}
        // week={"0,07%"}
        // month={"12,50%"}
        // year={"-20,55%"}
        // yearToDate={"50,78%"}
        // newToken={"newToken"}
      />
    ),
    {
      token: token,
      tickers: tickers,
      // titleShort: "AAPL",
      // title: "Apple inc",
      // price: "180.25",
      // growthNumber: "0.6202",
      // growthPercent: "-0.89%",
      // week: "0,07%",
      // month: "12,50%",
      // year: "-20,55%",
      // yearToDate: "50,78%",
      // newToken: "newToken",
    }
  );
});

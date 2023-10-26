import * as React from "react";
import { renderToString } from "react-dom/server";
import router from "@sitevision/api/common/router";
import appData from "@sitevision/api/server/appData";
import App from "./components/App";
// import requester from "@sitevision/api/server/Requester";

router.get("/", (req, res) => {
  // const message = "Hello, world!";
  // const name = appData.get("name") as string;
  const tickers = appData.get("selectTickers") as string;
  // const ticker = [{ feed: 26, ticker: "BMW" }];
  console.log(tickers);

  /*const token = requester
    .post(
      "https://pareto.cloud.eu.infrontservices.com/auth/realms/pareto/protocol/openid-connect/token",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        form: {
          grant_type: "password",
          username: "Pareto_Sandbox",
          password: "Infront542!",
          client_id: "wtk-client",
          client_secret: "1e526587-0882-411d-9d59-ae2b7a75d608",
          scope: "openid",
        },
      }
    )
    .done((data: any) => data)
    .fail((e: any) => e);
   */

  res.agnosticRender(
    renderToString(
      <App
        token={tickers}
        titleShort={"AAPL"}
        title={"Apple inc"}
        price={"180.25"}
        growthNumber={"0.6202"}
        growthPercent={"-0.89%"}
        week={"0,07%"}
        month={"12,50%"}
        year={"-20,55%"}
        yearToDate={"50,78%"}
      />
    ),
    {
      token: { tickers },
      titleShort: "AAPL",
      title: "Apple inc",
      price: "180.25",
      growthNumber: "0.6202",
      growthPercent: "-0.89%",
      week: "0,07%",
      month: "12,50%",
      year: "-20,55%",
      yearToDate: "50,78%",
    }
  );
});

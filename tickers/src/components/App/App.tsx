import * as React from "react";
import styles from "./App.scss";
import { ArrowDown, ArrowUp } from "./icons";
import { useState } from "react";
import requester from "@sitevision/api/client/requester";
import { useEffect } from "react";
import { NORWAY_TICKERS } from "../norway-feed";
import { COUNTRY_FEED_CODE } from "../settings";
import { SWEDEN_FEED, SWEDEN_TICKERS } from "../sweden-feed";
import { FINLAND_FEED, FINLAND_TICKERS } from "../finland-feed";
import { DENMARK_TICKERS } from "../denmark-feed";
import { Ticker } from "./Ticker";

export interface AppProperties {
  // token: string;
  // tickers: string[];
  // articleId: string;
}

const options = {
  payload: {
    properties: ["ticker", "hide_tickers"],
  },
};

export interface FeedID {
  feed: string | number;
  ticker: string;
}

export interface ArticleProperties {
  ticker: string[];
  hide_tickers: "Show" | "Hide";
}

export interface TickerData {
  ticker: string;
  oneWeek: number;
  oneMonth: number;
  oneYear: number;
  yearToDate: number;
  price: number;
}

const App: React.FunctionComponent<AppProperties> = () => {
  // console.log(token);
  // const [tickersData, setTickersData] = useState([]);
  const [tickers, setTickers] = useState<string[]>([]);
  const [token, setToken] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [feedIDs, setFeedIDs] = useState<FeedID[]>([]);
  const [feedIDsAreReady, setFeedIDsAreReady] = useState<boolean>(false);
  const [finalData, setFinalData] = useState<TickerData[]>([]);

  const prepareFeedIDs = (tickers: string[]) => {
    const feedIDs: FeedID[] = [];

    tickers.forEach((ticker) => {
      if (NORWAY_TICKERS.includes(ticker)) {
        feedIDs.push({
          feed: COUNTRY_FEED_CODE.NORWAY,
          ticker: ticker,
        });
      } else if (SWEDEN_TICKERS.includes(ticker)) {
        feedIDs.push({
          feed: COUNTRY_FEED_CODE.SWEEDEN,
          ticker: ticker,
        });
      } else if (FINLAND_TICKERS.includes(ticker)) {
        feedIDs.push({
          feed: COUNTRY_FEED_CODE.FINLAND,
          ticker: ticker,
        });
      } else if (DENMARK_TICKERS.includes(ticker)) {
        feedIDs.push({
          feed: COUNTRY_FEED_CODE.DENMARK,
          ticker: ticker,
        });
      } else {
        console.log("Ticker did not match any country: ", ticker);
      }
    });

    setFeedIDs(feedIDs);
    setFeedIDsAreReady(true);
  };

  // fetch in-front token
  const getToken = () => {
    requester
      .doGet({
        url: "/rest-api/Infront%20token/token",
      })
      .then((response) => {
        console.log("Token: ", response);
        const data = response as { token: string };
        setToken(data.token);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  // fetch data then update tickers
  const getProperties = () => {
    requester
      .doGet({
        url:
          "/rest-api/1/0/" +
          //@ts-ignore
          window.sv.PageContext.pageId +
          "/properties" +
          "?format=json&json=%7B%22properties%22%3A%5B%22ticker%22%2C%22hide_tickers%22%5D%7D",
      })
      .then((response) => {
        console.log("Article properties: ", response);
        const data = response as ArticleProperties;
        if (data.hide_tickers === "Show") {
          setTickers(data.ticker);
          setLoading(true);
          prepareFeedIDs(data.ticker);
        } else {
          setTickers([]);
          setLoading(false);
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    // get token immediately
    getToken();

    if (typeof window !== "undefined") {
      getProperties();
    }
  }, []);

  /**
   * in-front SDK
   * Data fetching
   */
  // @ts-ignore
  useEffect(() => {
    if (!token) return;
    if (!feedIDsAreReady) return;
    if (!feedIDs.length) return;

    // @ts-ignore
    const sdk = new InfrontSDK.SDK({
      signedToken: token,
      onReady: () => {
        feedIDs.forEach((id: FeedID) => {
          SDKReady(sdk, id);
        });
      },
      onDisconnect: (event: any) => {
        console.warn("Disconnected:", event);
      },
    });
  }, [token, feedIDsAreReady]);

  // @ts-ignore
  function SDKReady(sdk: any, id: FeedID) {
    // const id = { feed: 26, ticker: "BMW" };
    const subscribe = false;

    const onData = (data: any) => {
      console.log(
        `Ticker: ${data.get(
          // @ts-ignore
          InfrontSDK.SymbolField.Ticker
          // @ts-ignore
        )}, Full name: ${data.get(InfrontSDK.SymbolField.FullName)}`
      );
      // @ts-ignore
      console.log(`1w:`, data.get(InfrontSDK.SymbolField.PreChange1W));
      // @ts-ignore
      console.log(`1M:`, data.get(InfrontSDK.SymbolField.PreChange1M));
      // @ts-ignore
      console.log(`1Y:`, data.get(InfrontSDK.SymbolField.PreChange1Y));
      console.log(
        `YTD:`,
        // @ts-ignore
        data.get(InfrontSDK.SymbolField.PreChangeYearToDate)
      );
      console.log(
        `Cost:`,
        // @ts-ignore
        data.get(InfrontSDK.SymbolField.PreMarketPrice)
      );

      setFinalData((prev) => [
        ...prev,
        {
          // @ts-ignore
          ticker: data.get(InfrontSDK.SymbolField.Ticker),
          // @ts-ignore
          oneWeek: data.get(InfrontSDK.SymbolField.PreChange1W),
          // @ts-ignore
          oneMonth: data.get(InfrontSDK.SymbolField.PreChange1M),
          // @ts-ignore
          oneYear: data.get(InfrontSDK.SymbolField.PreChange1Y),
          // @ts-ignore
          yearToDate: data.get(InfrontSDK.SymbolField.PreChangeYearToDate),
          // @ts-ignore
          price: data.get(InfrontSDK.SymbolField.PreMarketPrice),
        },
      ]);
    };

    const options = {
      content: {
        Basic: true,
        HistoricalPerformance: true,
      },
      id: id,
      subscribe: subscribe,
      onData: onData,
      currency: "USD",
    };

    // @ts-ignore
    sdk.get(InfrontSDK.symbolData(options));
  }

  return (
    <div style={{ paddingBottom: tickers.length ? "30px" : 0 }}>
      {tickers && tickers.length ? (
        <>
          {tickers.map((t: string) => (
            <Ticker key={t} data={finalData.filter((f) => f.ticker === t)[0]} />
          ))}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;

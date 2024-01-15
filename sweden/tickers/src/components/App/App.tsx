import * as React from "react";
import { useState } from "react";
import requester from "@sitevision/api/client/requester";
import { useEffect } from "react";
import { NORWAY_TICKERS } from "../norway-feed";
import { COUNTRY_FEED_CODE } from "../settings";
import { SWEDEN_TICKERS } from "../sweden-feed";
import { FINLAND_TICKERS } from "../finland-feed";
import { DENMARK_TICKERS } from "../denmark-feed";
import { Ticker } from "./Ticker";

export interface AppProperties {}

export interface FeedID {
  feed: string | number;
  ticker: string;
}

export interface ArticleProperties {
  ticker: string[];
  hide_tickers: "Show" | "Hide";
}

export interface TickerData {
  fullName: string;
  ticker: string;
  oneWeek: number;
  oneMonth: number;
  oneYear: number;
  yearToDate: number;
  price: number;
  Change: number;
  ChangePercent: number;
  currency: string;
}

const App: React.FunctionComponent<AppProperties> = () => {
  const [tickers, setTickers] = useState<string[]>([]);
  const [token, setToken] = useState<string>("");
  // const [loading, setLoading] = useState<boolean>(true);
  const [feedIDs, setFeedIDs] = useState<FeedID[]>([]);
  const [feedIDsAreReady, setFeedIDsAreReady] = useState<boolean>(false);
  const [finalData, setFinalData] = useState<Record<string, TickerData>>({});

  const prepareFeedIDs = (tickers: string[]) => {
    const feedIDs: FeedID[] = [];

    tickers.forEach((ticker) => {
      let upperCTicker = ticker.toUpperCase();
      if (NORWAY_TICKERS.includes(upperCTicker)) {
        feedIDs.push({
          feed: COUNTRY_FEED_CODE.NORWAY,
          ticker: upperCTicker,
        });
      } else if (SWEDEN_TICKERS.includes(upperCTicker)) {
        feedIDs.push({
          feed: COUNTRY_FEED_CODE.SWEEDEN,
          ticker: upperCTicker,
        });
      } else if (FINLAND_TICKERS.includes(upperCTicker)) {
        feedIDs.push({
          feed: COUNTRY_FEED_CODE.FINLAND,
          ticker: upperCTicker,
        });
      } else if (DENMARK_TICKERS.includes(upperCTicker)) {
        feedIDs.push({
          feed: COUNTRY_FEED_CODE.DENMARK,
          ticker: upperCTicker,
        });
      } else {
        console.log("Ticker did not match any country: ", upperCTicker);
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
          "/rest-api/1/1/" +
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
          // setLoading(true);
          prepareFeedIDs(data.ticker);
        } else {
          setTickers([]);
          // setLoading(false);
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
      console.log(`Change:`, data.get(InfrontSDK.SymbolField.Change));
      // @ts-ignore
      console.log(`ChangeP:`, data.get(InfrontSDK.SymbolField.ChangePercent));
      /*
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
      console.log(
        `Currency:`,
        // @ts-ignore
        data.get(InfrontSDK.SymbolField.Currency)
      );

       */

      setFinalData((prev) => ({
        ...prev,
        // @ts-ignore
        [data.get(InfrontSDK.SymbolField.Ticker)]: {
          // @ts-ignore
          ticker: data.get(InfrontSDK.SymbolField.Ticker),
          // @ts-ignore
          fullName: data.get(InfrontSDK.SymbolField.FullName),
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
          // @ts-ignore
          Change: data.get(InfrontSDK.SymbolField.Change),
          // @ts-ignore
          ChangePercent: data.get(InfrontSDK.SymbolField.ChangePercent),
          // @ts-ignore
          currency: data.get(InfrontSDK.SymbolField.Currency),
        },
      }));

      // @ts-ignore
      data.observe(InfrontSDK.SymbolField.FullName, (v) => {
        setFinalData((prev) => ({
          ...prev,
          // @ts-ignore
          [data.get(InfrontSDK.SymbolField.Ticker)]: {
            // @ts-ignore
            ...prev[data.get(InfrontSDK.SymbolField.Ticker)],
            fullName: v,
          },
        }));
      });

      // @ts-ignore
      data.observe(InfrontSDK.SymbolField.Currency, (v) => {
        setFinalData((prev) => ({
          ...prev,
          // @ts-ignore
          [data.get(InfrontSDK.SymbolField.Ticker)]: {
            // @ts-ignore
            ...prev[data.get(InfrontSDK.SymbolField.Ticker)],
            currency: v,
          },
        }));
      });

      // @ts-ignore
      data.observe(InfrontSDK.SymbolField.Change, (v) => {
        console.log("Change: ", v);
        setFinalData((prev) => ({
          ...prev,
          // @ts-ignore
          [data.get(InfrontSDK.SymbolField.Ticker)]: {
            // @ts-ignore
            ...prev[data.get(InfrontSDK.SymbolField.Ticker)],
            Change: v,
          },
        }));
      });

      // @ts-ignore
      data.observe(InfrontSDK.SymbolField.ChangePercent, (v) => {
        console.log("ChangePercent: ", v);
        setFinalData((prev) => ({
          ...prev,
          // @ts-ignore
          [data.get(InfrontSDK.SymbolField.Ticker)]: {
            // @ts-ignore
            ...prev[data.get(InfrontSDK.SymbolField.Ticker)],
            ChangePercent: v,
          },
        }));
      });
    };

    const options = {
      content: {
        Basic: true,
        HistoricalPerformance: true,
        Metadata: true,
        Currency: true,
      },
      id: id,
      subscribe: subscribe,
      onData: onData,
    };

    // @ts-ignore
    sdk.get(InfrontSDK.symbolData(options));
  }

  return (
    <div style={{ paddingBottom: tickers.length ? "30px" : 0 }}>
      {tickers && tickers.length ? (
        <>
          {tickers.map((t: string) => {
            const tData = Object.values(finalData).filter(
              (f) => f.ticker === t.toUpperCase()
            )[0];

            if (tData) {
              return <Ticker key={t} data={tData} />;
            }
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default App;

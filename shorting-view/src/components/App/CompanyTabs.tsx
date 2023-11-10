import React, { useEffect, useState } from "react";
import "./CompanyTabs.css";
import useTimeout from "../../hooks/useTimeOut"; // Assumes you have extracted the styles into a separate CSS file

// Extend the Window interface to include the infront property
declare global {
  interface Window {
    Infront: any;
    InfrontSDK: any;
  }
}

// Assuming you have installed the 'infront' SDK as a module
const Infront = window.Infront;
const InfrontSDK = window.InfrontSDK;
const marketFeed = 18177;

const CompanyTabs = ({ token }: { token: string }) => {
  const [infrontUI, setInfrontUI] = useState<any>(null);
  const [currentFeed, setCurrentFeed] = useState(0);
  const [loading, setLoading] = useState(false);
  const [widget, setWidget] = useState<any>(null);
  const [instruments, setInstruments] = useState<any[]>([]);
  const [listeners, setListeners] = useState([]); // TODO: can be removed?
  const [infSDK, setInfSDK] = useState<any>(null);
  const [timer, setTimer] = useState<any>(null);

  const timeoutRef = useTimeout(() => {
    initWidget();
  }, timer);

  useEffect(() => {
    if (token) {
      setLoading(true);
      const opts = new Infront.InfrontUIOptions();
      opts.language = "no";
      opts.routingUrl = "https://pareto-mws1.infrontservices.com/mws";
      opts.streaming = true;
      opts.signed_token = token;
      opts.token_type = "JWT";
      opts.client_application = "WEB";
      const ui = new Infront.UI(opts);
      ui.registerEventObserver("onReady", infrontReady);
      ui.init();

      setInfrontUI(ui);
      const sdk = new InfrontSDK.SDK({
        signedToken: token,
        onReady: infrontSDKReady,
      });
      setInfSDK(sdk);
    }
  }, [token]);

  const instrumentTradeLink = (isin: string, feed: string) => {
    return (
      "https://online.paretosec.com/trade/trade?isin=" +
      isin +
      "&market=" +
      feed
    );
  };

  const createBaseListOptions = (instruments: any) => {
    var cvOpts = new Infront.QuoteListWidgetOptions();
    cvOpts.columns = [
      {
        name: "TICKER",
        hover: "FULL_NAME",
        flag: true,
      },
      { name: "FULL_NAME" },
      { name: "LAST_VALID" },
      { name: "CHANGE" },
      { name: "PCT_CHANGE" },
      { name: "TURNOVER" },
      {
        name: "MCAP",
        heading: "MCap",
        shorten: true,
        type: Infront.FieldType.Computed,
        dataType: Infront.DataType.Integer,
        computeFields: ["NUM_SHARES", "LAST_VALID"],
        compute: function (rowId: any, args: any) {
          return args[0] * args[1];
        },
      },
      {
        name: "BROKER_IS_SHORTABLE",
      },
      "S_DATETIME",

      {
        name: "",
        type: Infront.FieldType.Computed,
        sortable: false,
        className: "cell-text-right",
        computeFields: ["ISIN"],
        compute: (rowId: any, args: any) => {
          return args[0];
        },
        translate: function (rowId: any, isin: any) {
          return (
            "<a href='" +
            instrumentTradeLink(isin, rowId.feed) +
            "'><img title='Trade this' alt='H' src='https://www.paretosec.no/Files/Templates/Designs/Pareto/images/tradebtn_mini_no.png' class='btnTrade'></a>"
          );
        },
      },
    ];
    if (
      [26, 19, 2008, 2012, 2047, 15, 14].includes(currentFeed) ||
      Array.isArray(currentFeed)
    ) {
      cvOpts.columns = cvOpts.columns.filter(
        (x: any) =>
          ![
            "TURNOVER",
            "MCAP",
            "TURNOVER",
            "LAST_VALID",
            "CHANGE",
            "PCT_CHANGE",
            "S_DATETIME",
          ].includes(x.name)
      );
    }
    cvOpts.instruments = instruments;
    cvOpts.sortable = true;
    cvOpts.enableChangeStatusColors = true;
    cvOpts.defaultSortedColumn = "TICKER";
    cvOpts.defaultSortOrder = 0;
    cvOpts.useChains = false;
    cvOpts.interactionHighlight = true;
    return cvOpts;
  };

  const infrontReady = () => {};

  const changeFeed = (feed: any) => {
    if (currentFeed == feed) {
      return;
    }
    setCurrentFeed(feed);
    if (widget) {
      widget.destroy();
    }

    setLoading(true);
    clearTimeout(timeoutRef.current);
    setInstruments([]);

    if (Array.isArray(feed)) {
      feed.forEach(loadFeed);
    } else {
      loadFeed(feed);
    }
  };

  const loadFeed = (feed: any) => {
    infSDK.get(
      InfrontSDK.feedContents({
        contentType: InfrontSDK.FeedContentType.SymbolIds,
        feed: feed,
        subscribe: false,
        limit: -1,
        fields: ["Ticker", "ISIN"],
        onData: function (results: any) {
          setListeners(
            results.map((id: any) => {
              return infSDK.get(
                InfrontSDK.symbolData({
                  subscribe: false,
                  content: {
                    AdditionalData: true,
                    Basic: true,
                  },
                  fields: ["Ticker", "IsShortable"],
                  id,

                  onData: function (item: any) {
                    if (item.get("IsShortable") === 1) {
                      update({
                        feed: item.get("Feed"),
                        ticker: item.get("Ticker"),
                      });
                    } else {
                      update();
                    }
                  },
                  onStatus: function (requestName: any, status: any) {
                    console.log(requestName, " : ", status);
                  },
                })
              );
            })
          );
        },
      })
    );
  };

  const update = (instrument?: any) => {
    if (instrument) {
      // instruments.push(instrument);
      setInstruments((prev) => [...prev, instrument]);
    }
    clearTimeout(timeoutRef.current);
    // setTimeout(initWidget, 500);
    setTimer(500);
  };

  const initWidget = () => {
    setLoading(false);
    if (widget) {
      widget.destroy();
    }
    const opts = createBaseListOptions(instruments);
    const wgt = infrontUI.quoteList("norwayLists", opts);
    setWidget(wgt);
  };

  const infrontSDKReady = () => {
    changeFeed(18177);
  };

  // Additional functions such as CompanyPageLink, GetCountryFlagImageUrl, setChart, etc.

  return (
    <div>
      <ul className="companyTabs customTabs">
        <li>
          <a onClick={() => changeFeed(18177)}>Norge</a>
        </li>
        <li>
          <a onClick={() => changeFeed(17665)}>Danmark</a>
        </li>
        <li>
          <a onClick={() => changeFeed(100)}>Finland</a>
        </li>
        <li>
          <a onClick={() => changeFeed(26)}>Tyskland</a>
        </li>
        <li>
          <a onClick={() => changeFeed(19)}>UK</a>
        </li>
        <li>
          <a onClick={() => changeFeed(2008)}>Frankrike</a>
        </li>
        <li>
          <a onClick={() => changeFeed(2012)}>Spania</a>
        </li>
        <li>
          <a onClick={() => changeFeed(2047)}>Italia</a>
        </li>
        <li>
          <a onClick={() => changeFeed(14)}>USA - NYSE</a>
        </li>
        <li>
          <a onClick={() => changeFeed(15)}>USA - NASDAQ</a>
        </li>
      </ul>

      {loading ? (
        <div id="loader">Loading...</div>
      ) : (
        <div id="norwayLists">{/* Render your lists or widgets here */}</div>
      )}
    </div>
  );
};

export default CompanyTabs;

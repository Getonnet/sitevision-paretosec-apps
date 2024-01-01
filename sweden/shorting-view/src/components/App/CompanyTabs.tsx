import React, { useEffect } from "react";
import useState from "react-usestateref";
import useTimeout from "../../hooks/useTimeOut"; // Assumes you have extracted the styles into a separate CSS file
// import "./CompanyTabs.css";

// Extend the Window interface to include the infront property
declare global {
  interface Window {
    Infront: any;
    InfrontSDK: any;
  }
}

const Infront = typeof window !== "undefined" && window.Infront;
const InfrontSDK = typeof window !== "undefined" && window.InfrontSDK;
const marketFeed = 18177;

const CompanyTabs = ({ token }: { token: string }) => {
  const [infrontUI, setInfrontUI, infrontUIRef] = useState<any>(null);
  const [currentFeed, setCurrentFeed, currentFeedRef] = useState(0);
  const [loading, setLoading, loadingRef] = useState(false);
  const [widget, setWidget, widgetRef] = useState<any>(null);
  const [instruments, setInstruments, instrumentsRef] = useState<any[]>([]);
  const [listeners, setListeners, listenersRef] = useState([]); // TODO: can be removed?
  const [infSDK, setInfSDK, infSDKRef] = useState<any>(null);
  const [timer, setTimer, timerRef] = useState<any>(null);

  const timeoutRef = useTimeout(() => {
    initWidget();
  }, timer);

  useEffect(() => {
    if (
      token &&
      typeof Infront !== "undefined" &&
      typeof InfrontSDK !== "undefined"
    ) {
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
    } else {
      console.log("Infront or InfrontSDK not loaded ->");
      console.log(Infront);
      console.log(InfrontSDK);
      console.log("-----------------------------------");
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
            "'><img title='Trade this' alt='H' src='/images/18.2c2f7afa18c8abb97cf4d9c/1703832132295/tradebtn_mini_no.png' class='btnTrade'></a>"
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
    console.log(infSDK);

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
          <button onClick={() => changeFeed(18177)}>Norge</button>
        </li>
        <li>
          <button onClick={() => changeFeed(17665)}>Danmark</button>
        </li>
        <li>
          <button onClick={() => changeFeed(100)}>Finland</button>
        </li>
        <li>
          <button onClick={() => changeFeed(26)}>Tyskland</button>
        </li>
        <li>
          <button onClick={() => changeFeed(19)}>UK</button>
        </li>
        <li>
          <button onClick={() => changeFeed(2008)}>Frankrike</button>
        </li>
        <li>
          <button onClick={() => changeFeed(2012)}>Spania</button>
        </li>
        <li>
          <button onClick={() => changeFeed(2047)}>Italia</button>
        </li>
        <li>
          <button onClick={() => changeFeed(14)}>USA - NYSE</button>
        </li>
        <li>
          <button onClick={() => changeFeed(15)}>USA - NASDAQ</button>
        </li>
      </ul>

      {loading ? <div id="loader">Loading...</div> : ""}
      <div id="norwayLists" />
    </div>
  );
};

export default CompanyTabs;

import * as React from "react";
import PropTypes from "prop-types";
import styles from "./App.scss";
import requester from "@sitevision/api/client/requester";

const App = () => {
  const [images, setImages] = React.useState({});
  const [tickerCode, setTickerCode] = React.useState("");
  const [first3Articles, setFirst3Articles] = React.useState([]);

  // fetch data then update tickers
  const getTickerCode = () => {
    requester
      .doGet({
        url: "/rest-api/1/0/" + window.sv.PageContext.pageId + "/properties",
        data: {
          properties: ["tickerCode", "countryCode"],
        },
      })
      .then((response) => {
        console.log("Ticker properties: ", response);
        setTickerCode(response.tickerCode);
        get20Articles(response.tickerCode);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  React.useEffect(() => {
    typeof window !== "undefined" && getTickerCode();
  }, []);

  const getFeaturedImageFromId = (imageId) => {
    requester
      .doGet({
        url: `/rest-api/1/0/${imageId}/properties?format=json&json=%7B%22properties%22%3A%5B%22URL%22%5D%7D`,
      })
      .then((res) => {
        setImages((images) => ({
          ...images,
          [imageId]: res.URL,
        }));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const get20Articles = (tickerId) => {
    requester
      .doGet({
        url: `/rest-api/1/0/3.113c8d5d18b5cf299b63922/nodes`,
        data: {
          properties: ["ticker", "SV.Image"],
          skip: 0,
          limit: 30,
        },
      })
      .then((res) => {
        console.log("Articles ---------", res);
        res.map((article) => {
          if (
            typeof article.properties.ticker !== "undefined" &&
            article.properties.ticker.includes(tickerId)
          ) {
            setFirst3Articles((oldArticles) => [...oldArticles, article]);
            console.count("matched ticker");
          } else {
            console.count("no match");
          }
        });
        console.log("mapping is done - - - - xx");
        if (first3Articles.length < 3) {
          get20Articles(tickerCode);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // React.useEffect(() => {}, [tickerCode]);

  return (
    <>
      <h2 className={styles.title}>
        Siste artikler om <span className={styles.bold}>{tickerCode}</span>
      </h2>
      <div className={styles.sta_grid}>
        <article className={styles.article}>
          <a
            href="/aktuelt/2023-11-14-otovo-selskapspresentasjon-og-qa"
            title="Otovo: Selskapspresentasjon og Q&A"
          >
            <div
              role="img"
              aria-label="Otovo"
              className="sv-newslist__gallery-item__image"
              style={{
                backgroundImage:
                  'url("https://use-pareto.sitevision-cloud.se/images/18.28cfbc6618bcbd0d13c76b/1699956765886/otovo-thumb.Png")',
                height: 260,
                minHeight: 260,
              }}
            />
          </a>

          <div className={styles.article_content}>
            <header>
              <small className={styles.date}>
                Pareto Securities, 14 november 2023
              </small>
              <h3 className="subheading3">
                <a href="/aktuelt/2023-11-14-otovo-selskapspresentasjon-og-qa">
                  Otovo: Selskapspresentasjon og Q&amp;A
                </a>
              </h3>
              <p className="normal">
                Når du handler i utenlandske aksjer uten valutakonto vil du få
                valutarisiko. Lær hvordan du...
              </p>
            </header>
          </div>
        </article>
      </div>
    </>
  );
};

App.propTypes = {
  message: PropTypes.string,
  name: PropTypes.string,
};

export default App;

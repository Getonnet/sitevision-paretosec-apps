import * as React from "react";
import PropTypes from "prop-types";
import styles from "./App.scss";
import requester from "@sitevision/api/client/requester";
import useState from "react-usestateref";
import {
  formatTimestampToNorwegianDate,
  limitSentenceTo15Words,
} from "../util";

const articlePerRequest = 20;
// const thumbnailPlaceholder =
//   "https://use-pareto.sitevision-cloud.se/images/18.4857b8d018b84b042083f70c/1699347304043/Valutarisiko-169.jpg";

const App = () => {
  const [, setImages, images] = useState({});
  const [, setPageTickerCode, pageTickerCode] = useState("");
  const [, setFirst3Articles, first3Articles] = useState([]);
  const [, setCurrentPage, currentPage] = useState(0);
  const [, setPaginationIsInLastPage, paginationIsInLastPage] = useState(false);

  // fetch data then update tickers
  const getTickerCode = () => {
    requester
      .doGet({
        url: `/rest-api/1/0/${window.sv.PageContext.pageId}/properties`,
        data: {
          properties: ["tickerCode", "countryCode"],
        },
      })
      .then((response) => {
        setPageTickerCode(response.tickerCode);
        get20Articles(response.tickerCode);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  React.useEffect(() => {
    typeof window !== "undefined" && getTickerCode();
  }, []);

  const getFeaturedImageFromId = (articleId, imageId) => {
    requester
      .doGet({
        url: `/rest-api/1/0/${imageId}/properties`,
        data: {
          properties: ["URL"],
        },
      })
      .then((res) => {
        setImages((images) => ({
          ...images,
          [articleId]: res.URL,
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
          properties: [
            "ticker",
            "SV.Image",
            "creationDate",
            "URL",
            "article_summary",
          ],
          skip: articlePerRequest * currentPage.current,
          limit: articlePerRequest,
        },
      })
      .then((res) => {
        // increase current page indicator
        setCurrentPage((oldPage) => oldPage + 1);
        if (!res.length) setPaginationIsInLastPage(true);

        // filter data
        res.map((article) => {
          if (
            typeof article.properties.ticker !== "undefined" &&
            article.properties.ticker.includes(tickerId)
          ) {
            setFirst3Articles((oldArticles) => [...oldArticles, article]);
            // console.count("matched ticker");
            // fetch featured image
            getFeaturedImageFromId(article.id, article.properties["SV.Image"]);
          } else {
            // console.count("no match");
          }
        });

        if (
          first3Articles.current.length < 3 &&
          !paginationIsInLastPage.current
        ) {
          get20Articles(pageTickerCode.current);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <h2 className={styles.title}>
        Siste artikler om{" "}
        <span className={styles.bold}>{pageTickerCode.current}</span>
      </h2>
      <div className={styles.sta_grid}>
        {first3Articles.current.length ? (
          first3Articles.current.slice(0, 3).map((a) => (
            <article className={styles.article} key={a.id} id={a.id}>
              <a href={a.properties.URL} title={a.name}>
                <div
                  role="img"
                  aria-label={pageTickerCode.current}
                  // className="sv-newslist__gallery-item__image"
                  style={{
                    backgroundImage: `url(${
                      images.current[a.id] ||
                      "https://use-pareto.sitevision-cloud.se/images/18.4857b8d018b84b042083f70c/1699347304043/Valutarisiko-169.jpg"
                    })`,
                    height: 260,
                    minHeight: 260,
                    backgroundSize: "cover",
                  }}
                />
              </a>

              <div className={styles.article_content}>
                <header>
                  <small className={styles.date}>
                    {formatTimestampToNorwegianDate(a.properties.creationDate)}{" "}
                    av Pareto Securities | Aktuelt
                  </small>
                  <h3 className="subheading3">
                    <a href={a.properties.URL}>{a.name}</a>
                  </h3>
                  <p className="normal">
                    {limitSentenceTo15Words(a.properties.article_summary)}
                    {"..."}
                  </p>
                </header>
              </div>
            </article>
          ))
        ) : (
          <>
            {paginationIsInLastPage ? (
              <div>Ingen artikler funnet.</div>
            ) : (
              <div>Laster inn...</div>
            )}
          </>
        )}
      </div>
    </>
  );
};

App.propTypes = {
  message: PropTypes.string,
  name: PropTypes.string,
};

export default App;

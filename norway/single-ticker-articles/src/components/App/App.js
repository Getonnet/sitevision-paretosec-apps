import * as React from "react";
import PropTypes from "prop-types";
import styles from "./App.scss";
import requester from "@sitevision/api/client/requester";
import useState from "react-usestateref";
import {
  formatTimestampToNorwegianDate,
  getArticleType,
  limitSentenceTo15Words,
} from "../util";
import {
  ARTICLE_COLLECTION_ID,
  PARETO_TV_COLLECTION_ID,
  REST_API_BASE,
  VISNING_COLLECTION_ID,
} from "../../settings";

const articlePerRequest = 20;

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
        url: `${REST_API_BASE}/${window.sv.PageContext.pageId}/properties`,
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
        url: `${REST_API_BASE}/${imageId}/properties`,
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

  const articleProperties = [
    "ticker",
    "SV.Image",
    "creationDate",
    "URL",
    "article_summary",
  ];

  const get20Articles = (tickerId) => {
    const articles = requester.doGet({
      url: `${REST_API_BASE}/${ARTICLE_COLLECTION_ID}/nodes`,
      data: {
        properties: articleProperties,
        skip: articlePerRequest * currentPage.current,
        limit: articlePerRequest,
      },
    });
    const paretoTvArticles = requester.doGet({
      url: `${REST_API_BASE}/${PARETO_TV_COLLECTION_ID}/nodes`,
      data: {
        properties: articleProperties,
        skip: articlePerRequest * currentPage.current,
        limit: articlePerRequest,
      },
    });
    const visningArticles = requester.doGet({
      url: `${REST_API_BASE}/${VISNING_COLLECTION_ID}/nodes`,
      data: {
        properties: articleProperties,
        skip: articlePerRequest * currentPage.current,
        limit: articlePerRequest,
      },
    });

    Promise.all([articles, paretoTvArticles, visningArticles])
      .then((res) => {
        console.log("res::: ", res);
        // res = [articles[], paretoTvArticles[], visningArticles[]]

        // increase current page indicator
        setCurrentPage((oldPage) => oldPage + 1);
        if (!res.length) setPaginationIsInLastPage(true);

        // filter data
        res.flat().map((post) => {
          if (
            typeof post.properties.ticker !== "undefined" &&
            post.properties.ticker.includes(tickerId)
          ) {
            setFirst3Articles((oldArticles) => [...oldArticles, post]);
            // console.count("matched ticker");
            // fetch featured image
            getFeaturedImageFromId(post.id, post.properties["SV.Image"]);
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
                      "/images/18.4857b8d018b84b042083f70c/1699347304043/Valutarisiko-169.jpg"
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
                    av Pareto Securities | {getArticleType(a.path)}
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

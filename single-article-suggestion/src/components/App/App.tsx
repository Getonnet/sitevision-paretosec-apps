import * as React from "react";
import styles from "./App.scss";
import requester from "@sitevision/api/client/requester";
import useState from "react-usestateref";

export interface AppProperties {
  articleId: string;
}

interface ArticleData {
  shortId: string;
  "SV.Title": string;
  "SV.Image": string;
}

interface ArticleImgData {
  URL: string;
}

const App: React.FunctionComponent<AppProperties> = ({ articleId }) => {
  console.log("article data =>");
  console.log(articleId);
  const [, setArticle, article] = useState<ArticleData | {}>({});
  const [, setArticleImg, articleImg] = useState("");

  const getFeaturedImageFromId = (aId: string, imgId: string) => {
    requester
      .doGet({
        url: `/rest-api/1/0/${imgId}/properties`,
        data: {
          properties: ["URL"],
        },
      })
      // @ts-ignore
      .then((res) => setArticleImg(res.URL))
      .catch((e) => {
        console.log(e);
      });
  };

  const fetchArticle = () => {
    requester
      .doGet({
        url: `/rest-api/1/0/${articleId}/properties`,
        data: {
          properties: ["shortId", "SV.Title", "SV.Image"],
        },
      })
      .then((res) => {
        const data = res as ArticleData;
        setArticle(data);
        getFeaturedImageFromId(data.shortId, data["SV.Image"]);
      })
      .catch((e) => console.log(e));
  };

  React.useEffect(() => {
    // fetch article data
    fetchArticle();
  }, []);

  return (
    <>
      {article.current ? (
        <article className={styles.container}>
          <div
            className={styles.thumbnail}
            style={{
              backgroundImage: `url(${
                articleImg.current ||
                "https://use-pareto.sitevision-cloud.se/images/18.4857b8d018b84b042083f70c/1699347304043/Valutarisiko-169.jpg"
              })`,
              backgroundSize: "cover",
            }}
          />

          <div className={styles.content}>
            <p className={styles.text}>Les også</p>
            <h2 className={styles.title}>
              Prøv oss ut i tre måneder med våre beste betingelser, full
              analysetilgang og populære Infront Web Trader.{" "}
              <span className={styles.icon}>→</span>
            </h2>
          </div>
        </article>
      ) : (
        <article className={styles.container}>Laster inn...</article>
      )}
    </>
  );
};

export default App;

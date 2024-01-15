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
  URL: string;
}

interface ArticleImgData {
  URL: string;
}

const App: React.FunctionComponent<AppProperties> = ({ articleId }) => {
  console.log("article data =>");
  console.log(articleId);
  const [, setArticle, article] = useState<ArticleData>({
    shortId: "",
    "SV.Title": "",
    "SV.Image": "",
    URL: "",
  });
  const [, setArticleImg, articleImg] = useState("");

  const getFeaturedImageFromId = (aId: string, imgId: string) => {
    requester
      .doGet({
        url: `/rest-api/1/1/${imgId}/properties`,
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
        url: `/rest-api/1/1/${articleId}/properties`,
        data: {
          properties: ["shortId", "SV.Title", "SV.Image", "URL"],
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
      {article.current.shortId ? (
        <article className={styles.container} key={article.current.shortId}>
          <a
            href={article.current.URL}
            className={styles.thumbnail}
            style={{
              backgroundImage: `url(${
                articleImg.current ||
                "https://use-pareto.sitevision-cloud.se/images/18.4857b8d018b84b042083f70c/1699347304043/Valutarisiko-169.jpg"
              })`,
              backgroundSize: "cover",
            }}
          />

          <a href={article.current.URL} className={styles.content}>
            <p className={styles.text}>Les også</p>

            <h2 className={styles.title}>
              {article.current["SV.Title"]}{" "}
              <span className={styles.icon}>→</span>
            </h2>
          </a>
        </article>
      ) : (
        <article className={styles.container}>Laster inn...</article>
      )}
    </>
  );
};

export default App;

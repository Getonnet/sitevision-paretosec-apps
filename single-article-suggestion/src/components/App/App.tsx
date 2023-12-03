import * as React from "react";
import styles from "./App.scss";

export interface AppProperties {
  articleId: string;
}

const App: React.FunctionComponent<AppProperties> = ({ articleId }) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.thumbnail}
        style={{
          backgroundImage: `url("https://use-pareto.sitevision-cloud.se/images/18.4857b8d018b84b042083f70c/1699347304043/Valutarisiko-169.jpg")`,
          backgroundSize: "cover",
        }}
      />

      <div className={styles.content}>
        <p className={styles.text}>Les også</p>
        <h2 className={styles.title}>
          Prøv oss ut i tre måneder med våre beste betingelser, full
          analysetilgang og populære Infront Web Trader. →
        </h2>
      </div>
    </div>
  );
};

export default App;

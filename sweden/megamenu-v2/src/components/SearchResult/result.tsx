import React from "react";
import styles from "../search_results.module.scss";

type ResultProps = {
  name: string;
};

const Result: React.FC<ResultProps> = ({ name }) => {
  const encodedString = encodeURIComponent(name).replace(/%20/g, "+");

  if (name === "Inga resultat.") {
    return (
      <li>
        <a style={{ pointerEvents: "none" }} href="#">
          {name}
        </a>
      </li>
    );
  }

  return (
    <li>
      <a
        href={`/ovrigt/sok?query=${encodedString}`}
        className={styles.resultLink}
      >
        {name}
      </a>
    </li>
  );
};

export default Result;

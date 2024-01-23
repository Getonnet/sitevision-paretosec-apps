import React, { useState } from "react";
import Result from "./result";
import styles from "../search_results.module.scss";
import Ticker from "./ticker";
import { SearchIcon } from "./SearchIcon";

interface ResultsProps {
  results: any;
  query: string;
}

const Results: React.FC<ResultsProps> = ({ results, query }) => {
  const { queryResult, queryTickers } = results;

  const QUERY_URL = "/ovrigt/sok?query=";

  const resultStyling = {
    borderTop:
      queryTickers && queryTickers.length !== 0 ? "1px solid #00325533" : "",
    borderBottom:
      queryResult && queryResult[0] !== "Inga resultat."
        ? "1px solid #00325533"
        : "",
  };

  const seeAllStyling = {
    display: "flex",
    alignItems: "center",
    gap: "7px",
  };

  return (
    <div className={styles.search_result__container}>
      <ul
        className="tickers__result"
        style={{
          display: queryTickers && queryTickers.length !== 0 ? "block" : "none",
        }}
      >
        {queryTickers &&
          queryTickers.length !== 0 &&
          queryTickers.map((ticker: any) => {
            return (
              <Ticker
                name={ticker.properties.fullName}
                country={ticker.properties.countryCode}
                URI={ticker.properties.URI}
              />
            );
          })}
      </ul>
      <ul className="query__result" style={resultStyling}>
        {queryResult &&
          queryResult.length !== 0 &&
          queryResult.map((result: any) => {
            return <Result name={result} />;
          })}
      </ul>
      <ul
        className="show-result"
        style={{
          display:
            queryResult && queryResult[0] !== "Inga resultat."
              ? "flex"
              : "none",
        }}
      >
        {queryResult && queryResult[0] !== "Inga resultat." && (
          <li>
            <a
              className="see-all-result"
              href={QUERY_URL + query}
              style={seeAllStyling}
            >
              <SearchIcon />

              <span className={styles.seeAllText}>
                Se fullstendig søkeresultat
              </span>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Results;

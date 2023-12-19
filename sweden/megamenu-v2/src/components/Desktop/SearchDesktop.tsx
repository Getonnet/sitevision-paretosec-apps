import React, { useEffect, useState } from "react";
import { getSearchResult } from "../../actions/getSearchResult";
import { getTickers } from "../../actions/getTickers";
import { filterTickers } from "../../utils/filterTickers";
import Results from "../SearchResult/results";

const SearchDesktop = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<any>({});

  useEffect(() => {
    const fetchResults = async () => {
      if (query !== "") {
        const tickers = await getTickers();

        const result = {
          queryResult: await getSearchResult(query),
          queryTickers: filterTickers(tickers, query),
        };

        setResults(result);
      }
    };
    fetchResults();
  }, [query]);

  console.log(results);
  return (
    <div style={{ position: "relative" }}>
      <form
        method="get"
        action="/sok.4.1ec403e918a983e77b927259.html"
        className="search w-form"
      >
        <input
          type="submit"
          defaultValue="SearchDesktop"
          className="search-button w-button"
        />
        <label
          htmlFor="search"
          className="field-label"
          style={{
            display: "none",
            position: "absolute",
            visibility: "hidden",
          }}
        >
          SearchDesktop
        </label>
        <input
          type="search"
          className="search-input w-input"
          maxLength={256}
          name="query"
          placeholder="Sök"
          id="search"
          autoComplete="off"
          required
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      {query !== "" && <Results results={results} query={query} />}
    </div>
  );
};

export default SearchDesktop;

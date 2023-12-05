import React, { useEffect, useState } from "react";
import styles from "../../../../header-static/search_results.module.scss";
import { getSearchResult } from "../../actions/getSearchResult";
import { getTickers } from "../../actions/getTickers";
import { filterTickers } from "../../utils/filterTickers";
import Results from "../SearchResult/results";

interface SearchMobileProps {
  isOpen: boolean;
}

const SearchMobile: React.FC<SearchMobileProps> = ({ isOpen }) => {
  const [ query, setQuery ] = useState<string>('');
  const [ results, setResults ] = useState<any>({});

  useEffect(() => {
    const fetchResults = async () => {
      if(query !== '') {
        const tickers = await getTickers();

        const result = {
          queryResult: await getSearchResult(query),
          queryTickers: filterTickers(tickers, query),
        }
  
        setResults(result);
      }
    } 
    fetchResults();
  }, [query]);

  return (
    <form
      method="get"
      action="/ovrigt/sok"
      style={{ display: isOpen ? "flex" : "none" }}
      className={`search-mob w-form ${styles.mobile_search}`}
    >
      <label htmlFor="search-mob" className="field-label">
        Search
      </label>
      <div className="search-box-mobile-wrapper">
        <input
          type="search"
          className="search-input is-mobile w-input"
          maxLength={256}
          name="query"
          placeholder="Søk"
          id="search-mob"
          required
          autoComplete="off"
          onChange={(e) => setQuery(e.target.value)}
        />
        <input
          type="submit"
          defaultValue=""
          className="search-button is-mobile w-button"
          style={{ fontSize: "0" }}
        />
      </div>
      {
        query !== '' && <Results results={results} query={query}/>
      }
    </form>
  );
};

export default SearchMobile;

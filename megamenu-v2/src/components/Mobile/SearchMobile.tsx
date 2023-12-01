import React, { useEffect, useState } from "react";
import styles from "../../../../header-static/search_results.module.scss";
import requester from "@sitevision/api/client/requester";
import Results from "../SearchResult/results";

interface SearchMobileProps {
  isOpen: boolean;
}

const SearchMobile: React.FC<SearchMobileProps> = ({ isOpen }) => {
  const [result, setResult] = useState<string[]>([]);
  const [term, setTerm] = useState<string>("");

  useEffect(() => {
    const getResult = (term: string) => {
      requester
        .doGet({
          url: `${window.location.origin}/2.54e1ff71188bd8464773cc67/12.4ca3d05b18bd10771975ec.json?state=autoComplete&term=${term}`,
        })
        .then((response: any) => {
          setResult(response);
        })
        .catch((error: any) => {
          if (term === "") {
            setResult([]);
          } else {
            setResult(["Ingen resultater."]);
          }
        });
    };

    getResult(term);
  }, [term]);

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
          onInput={(e: any) => setTerm(e.target.value)}
        />
        <input
          type="submit"
          defaultValue=""
          className="search-button is-mobile w-button"
          style={{ fontSize: "0" }}
        />
      </div>
      {result.length !== 0 && <Results results={result} query={term} />}
    </form>
  );
};

export default SearchMobile;

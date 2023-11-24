import React, { useEffect, useState } from "react";
import requester from "@sitevision/api/client/requester";
import Results from "../SearchResult/results";

const Search = () => {
  const [ result, setResult ] = useState<string[]>([]);
  const [ term, setTerm ] = useState<string>('');

  useEffect(() => {
    const getResult = (term: string) => {
      requester
        .doGet({
          url: `${window.location.origin}/2.54e1ff71188bd8464773cc67/12.4ca3d05b18bd10771975ec.json?state=autoComplete&term=${term}`,
        })
        .then((response : any) => {
          setResult(response);
        })
        .catch((error : any) => {
          if(term === '') {
            setResult([]);
          } else {
            setResult(['Ingen resultater.']);
          }
        })
    }

    getResult(term);
  }, [term])
  

  return (
    <form
      method="get"
      action="/ovrigt/sok"
      className="search w-form"
    >
      <input
        type="submit"
        defaultValue="Search"
        className="search-button w-button"
      />
      <label htmlFor="search" className="field-label">
        Search
      </label>
      <input
        type="search"
        className="search-input w-input"
        maxLength={256}
        name="query"
        placeholder="Søk"
        id="search"
        required
        autoComplete="off"
        onInput={(e: any) => setTerm(e.target.value)}
      />
      {
        result.length !== 0 &&  <Results results={result} query={term}/>
      }

    </form>
  );
};

export default Search;

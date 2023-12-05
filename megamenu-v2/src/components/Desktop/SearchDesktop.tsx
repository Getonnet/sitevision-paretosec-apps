import requester from "@sitevision/api/client/requester";
import React, { useEffect, useState } from "react";
import { getSearchResult } from "../../actions/getSearchResult";

const SearchDesktop = () => {
  const [ query, setQuery ] = useState<string>('');

  getSearchResult(query);
  
  return (
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
      <label htmlFor="search" className="field-label">
        SearchDesktop
      </label>
      <input
        type="search"
        className="search-input w-input"
        maxLength={256}
        name="query"
        placeholder="Søk"
        id="search"
        required
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

export default SearchDesktop;

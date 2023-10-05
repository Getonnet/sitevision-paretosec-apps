import React from "react";

const Search = () => {
  return (
    <form
      method="get"
      action="/sok.4.1ec403e918a983e77b927259.html"
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
      />
    </form>
  );
};

export default Search;

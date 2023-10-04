import React from "react";

const SearchMobile = () => {
  return (
    <form
      method="get"
      action="/sok.4.1ec403e918a983e77b927259.html"
      style={{ display: "none" }}
      className="search-mob w-form"
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
        />
        <input
          type="submit"
          defaultValue=""
          className="search-button is-mobile w-button"
        />
      </div>
    </form>
  );
};

export default SearchMobile;

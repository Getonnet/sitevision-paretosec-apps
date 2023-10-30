import * as React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

export default (initialState: any, el: HTMLElement) => {
  ReactDOM.hydrate(
    <App
      token={initialState.token}
      titleShort={initialState.titleShort}
      title={initialState.title}
      price={initialState.price}
      growthNumber={initialState.growthNumber}
      growthPercent={initialState.growthPercent}
      week={initialState.week}
      month={initialState.month}
      year={initialState.year}
      yearToDate={initialState.yearToDate}
      newToken={initialState.newToken}
    />,
    el
  );
};

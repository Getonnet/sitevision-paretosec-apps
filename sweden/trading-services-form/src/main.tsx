import * as React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

export default (initialState: any, el: HTMLElement) => {
  ReactDOM.hydrate(
    <App
      formType={initialState.formType}
      redirectPageUrl={initialState.redirectPageUrl}
    />,
    el
  );
};

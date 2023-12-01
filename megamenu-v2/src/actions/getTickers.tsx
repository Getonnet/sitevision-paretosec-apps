import requester from "@sitevision/api/client/requester";
import { useState } from "react";

export const getTickers = () => {
  const API_URL_PREFIX = window.location.origin;
  const REST_API = "/rest-api/1/0";
  const PAGE_REPOSITORY = "/2.54e1ff71188bd8464773cc67_sitePage";
  const API_URL_SUFFIX =
    "/nodes?format=json&json=%7B%22properties%22%3A%5B%22*%22%5D%7D";
  const PATH_TICKERS = "/Tickers";

  const [tickers, setTickers] = useState<any>();

  requester
    .doGet({
      url:
        API_URL_PREFIX +
        REST_API +
        PAGE_REPOSITORY +
        PATH_TICKERS +
        API_URL_SUFFIX,
    })
    .then((response) => {
      setTickers(response);
    })
    .catch((error) => {
      setTickers([]);
    });

  return tickers;
};

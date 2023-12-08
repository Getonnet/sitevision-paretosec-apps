import requester from "@sitevision/api/client/requester";

export const getTickers = async () => {
  const TICKER_ENDPOINT = "/rest-api/1/0/19.1dbe752318bf2416daa26d2/nodes";
  const PAYLOAD = { properties: ["*"] };

  let result: any = [];

  await requester
    .doGet({
      url: TICKER_ENDPOINT,
      data: PAYLOAD,
    })
    .then((response) => {
      result = response;
    })
    .catch((error) => {
      console.log(error);
    });

  return result;
};

// const REST_API = "/rest-api/1/0";
// const PAGE_REPOSITORY = "/19.1dbe752318bf2416daa26d2";
// const API_URL_SUFFIX = "/nodes?format=json&json=%7B%22properties%22%3A%5B%22*%22%5D%7D";
// const PATH_TICKERS = "/Tickers";

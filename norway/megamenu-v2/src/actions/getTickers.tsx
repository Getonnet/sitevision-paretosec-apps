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

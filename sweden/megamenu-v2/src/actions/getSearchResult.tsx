import requester from "@sitevision/api/client/requester";

export const getSearchResult = async (term: string) => {
  const SEARCH_URL = `/4.17e5c29718bfae2e601180d2/12.6e3d8d3718c8ad1173747564.json?state=autoComplete&term=${term}`;

  let result: any = [];

  await requester
    .doGet({
      url: SEARCH_URL,
    })
    .then((response) => {
      result = response;
    })
    .catch((error) => {
      result = ["Ingen resultater."];
    });

  return result;
};

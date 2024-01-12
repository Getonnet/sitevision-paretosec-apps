import requester from "@sitevision/api/client/requester";

export const getSearchResult = async (term: string) => {
  const SEARCH_URL = `/4.1ec403e918a983e77b927259/12.1ec403e918a983e77b927739.json?state=autoComplete&term${term}`;

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

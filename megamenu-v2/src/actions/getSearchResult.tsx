import requester from "@sitevision/api/client/requester";

export const getSearchResult = async (term: string) => {
    const SEARCH_URL = `/2.54e1ff71188bd8464773cc67/12.4ca3d05b18bd10771975ec.json?state=autoComplete&term=${term}`;

    let result: any = []

    await requester
        .doGet({
            url:  SEARCH_URL,
        })
        .then(response => {
            result = response;
        })
        .catch(error => {
            result = ['Ingen resultater.'];
        });

    return result
} 
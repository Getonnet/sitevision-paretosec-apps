import requester from "@sitevision/api/client/requester";

export const getSearchResult = (term: string) => {
    const API_URL_PREFIX = window.location.origin;
    const SEARCH_URL = `/4.49015fe118adb9b38ad15b6a/12.17e5c29718bfae2e60149c51.json?state=autoComplete&term={${term}`;
    
    requester
        .doGet({
            url: API_URL_PREFIX + SEARCH_URL,
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error)
        });
} 
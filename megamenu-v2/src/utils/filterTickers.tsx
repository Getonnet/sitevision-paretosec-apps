export const filterTickers = (tickers: any[], term: string) => {
    const filter = tickers.filter(ticker => {
        return ticker.displayName.toLowerCase().includes(term.toLowerCase());
    });

    return filter || [];
}
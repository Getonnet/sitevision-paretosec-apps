export const filterTickers =  (tickers: any[], term: string) => {
    const filter = tickers.filter(ticker => {
        return ticker.name.toLowerCase().includes(term.toLowerCase());
    });

    return filter || [];
}
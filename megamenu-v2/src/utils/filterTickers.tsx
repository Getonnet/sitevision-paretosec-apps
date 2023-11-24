type filterTickersArgs = {
    tickers: any[],
    term: string
}

const filterTickers = ({tickers, term}: filterTickersArgs) => {
    const filter = tickers.filter(ticker => ticker.displayName.toLowerCase() === term.toLowerCase());

    return filter ? filter : [];
}

export {filterTickers};
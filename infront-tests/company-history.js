var historyElement;

function getCompanyHistory(id, from, to) {
  clearEntries();
  sdk.get(
    InfrontSDK.history({
      id: id,
      from: from,
      to: to,
      onData: (companyHistory) => {
        const trades = companyHistory.trades;
        console.log(trades);
        let splits = companyHistory.splits;
        let dividends = companyHistory.dividends;
        const lower = trades[0];
        const upper = trades[trades.length - 1];
        while (splits[0]?.date < lower.date) {
          splits.shift();
        }
        while (dividends[0]?.date < lower.date) {
          dividends.shift();
        }
        for (let trade of trades) {
          if (trade.date >= splits[0]?.date && splits[0]?.date >= lower.date && splits[0]?.date <= upper.date) {
            addEntry(splits.shift(), "split");
          }

          if (
            trade.date >= dividends[0]?.date &&
            dividends[0]?.date >= lower.date &&
            dividends[0]?.date <= upper.date
          ) {
            addEntry(dividends.shift(), "dividend");
          }

          addEntry(trade, "trade");
        }
      },
    })
  );
}

function append(parentElement, value = undefined, type = "td", field = "innerText") {
  let cell = document.createElement(type);
  if (value !== undefined) {
    cell[field] = value;
  } else {
    cell[field] = "-";
  }
  parentElement.appendChild(cell);
  return cell;
}

function addEntry(entry, type) {
  if (!historyElement) historyElement = document.getElementById("history");
  let row = document.createElement("tr");
  append(row, InfrontUtil.formatDateTime(entry.date, "DD-MM-YYYY"));
  if (type == "trade") {
    append(row, InfrontUtil.formatNumber(entry.open, 2));
    append(row, InfrontUtil.formatNumber(entry.high, 2));
    append(row, InfrontUtil.formatNumber(entry.low, 2));
    append(row, InfrontUtil.formatNumber(entry.last, 2));
    append(row, InfrontUtil.formatNumber(entry.volume, 0));
    append(row, entry.trades);
    append(row, InfrontUtil.formatAndShortenInteger(entry.turnover));
    append(row, InfrontUtil.formatNumber(entry.orderbookMoves, 0));
    append(row, entry.bid);
    append(row, entry.ask);
    append(row, InfrontUtil.formatNumber(entry.onFloorVolume, 0));
  } else if (type == "split") {
    let cell = append(row, "Split: " + entry.factor);
    cell.colSpan = "11";
    cell.className = "center";
    row.style = "background-color: lightpink";
  } else if (type == "dividend") {
    let cell = append(row, `Dividend: ${entry.amount} (${entry.currency})`);
    cell.colSpan = "11";
    cell.className = "center";
    row.style = "background-color: bisque";
  }
  historyElement.insertBefore(row, historyElement.firstChild);
}

function clearEntries() {
  if (!historyElement) historyElement = document.getElementById("history");
  InfrontUtil.removeAllChildNodes(historyElement);
}

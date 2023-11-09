import React from "react";
import styles from "./App.scss";
import { ArrowDown, ArrowUp } from "./icons";
import { TickerData } from "./App";

interface TickerProps {
  data: TickerData;
}

export const Ticker = ({ data }: TickerProps) => {
  const t = data?.ticker || "";
  const {
    fullName,
    oneWeek,
    oneMonth,
    oneYear,
    yearToDate,
    price,
    Change,
    ChangePercent,
    currency,
  } = data || {};

  return (
    <div className={styles.tickerBtnWrap}>
      <div className={styles.tickerBtn}>
        <span className={styles.badge}>{t}</span>
        <span className={styles.text}>{fullName ?? t}</span>
      </div>

      <div className={`${styles.tickerTooltip} ${styles.hidden}`}>
        <div className={styles.ttHeader}>
          <div>
            <h2 className={styles.shortTitle}>{t}</h2>
            <p className={styles.title}>{fullName ?? t}</p>
          </div>
          <div className={styles.fetchTime}>
            {new Date().toLocaleTimeString()}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={"tt-body"}>
          <div className={styles.price}>
            {currency ?? "" + price.toFixed(2)}
          </div>

          <div
            className={`${styles.priceGrowth} ${
              ChangePercent === 0
                ? styles.normal
                : ChangePercent < 0
                ? styles.red
                : ""
            }`}
          >
            {ChangePercent === 0 ? (
              ""
            ) : ChangePercent > 0 ? (
              <ArrowUp />
            ) : (
              <ArrowDown />
            )}
            {Change.toFixed(2) + " " + " (" + ChangePercent.toFixed(2) + "%)"}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.ttFooter}>
          <HistoricalDataItem label={"7D"} value={oneWeek} />
          <HistoricalDataItem label={"1M"} value={oneMonth} />
          <HistoricalDataItem label={"1Y"} value={oneYear} />
          <HistoricalDataItem label={"YTD"} value={yearToDate} />
        </div>
      </div>
    </div>
  );
};

const HistoricalDataItem = ({
  label,
  value,
}: {
  label: string;
  value: number;
}) => (
  <div>
    <div className={styles.timeName}>{label}</div>
    <div className={`${styles.timeValue} ${value < 0 ? styles.red : ""}`}>
      {value.toFixed(2)}%
    </div>
  </div>
);

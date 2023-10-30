import * as React from "react";
import styles from "./App.scss";
import { ArrowDown, ArrowUp } from "./icons";
import { useState } from "react";

export interface AppProperties {
  token: string;
  tickers: string[];
  // titleShort: string;
  // title: string;
  // price: string;
  // growthNumber: string;
  // growthPercent: string;
  // week: string;
  // month: string;
  // year: string;
  // yearToDate: string;
  // newToken: any;
}

const App: React.FunctionComponent<AppProperties> = ({ token, tickers }) => {
  console.log(token);
  const [tickersData, setTickersData] = useState([]);

  // fetch data then update tickers

  return (
    <div style={{ paddingBottom: "30px" }}>
      {tickers && tickers.length
        ? tickers.map((t: string) => (
            <div className={styles.tickerBtnWrap}>
              <div className={styles.tickerBtn}>
                <span className={styles.badge}>
                  {t === "Apple" ? "APPL" : t === "DGA" ? "DOFG" : t}
                </span>
                <span className={styles.text}>
                  {t === "Apple"
                    ? "Apple inc"
                    : t === "DGA"
                    ? "Dof Group ASA"
                    : t}
                </span>
              </div>

              <div className={`${styles.tickerTooltip} ${styles.hidden}`}>
                <div className={styles.ttHeader}>
                  <div>
                    <h2 className={styles.shortTitle}>
                      {t === "Apple" ? "APPL" : t === "DGA" ? "DOFG" : t}
                    </h2>
                    <p className={styles.title}>
                      {t === "Apple"
                        ? "Apple inc"
                        : t === "DGA"
                        ? "Dof Group ASA"
                        : t}
                    </p>
                  </div>
                  <div className={styles.fetchTime}>15:59:25</div>
                </div>

                <div className={styles.divider} />

                <div className={"tt-body"}>
                  <div className={styles.price}>
                    ${(Math.random() * (300 - 120) + 120).toFixed(2)}
                  </div>
                  {/* TODO: update condition, it should not be always red */}
                  <div className={`${styles.priceGrowth} ${styles.red}`}>
                    <ArrowDown />
                    0.6202 (-0.89%)
                  </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.ttFooter}>
                  <div>
                    <div className={styles.timeName}>7D</div>
                    <div className={`${styles.timeValue} ${"ass"}`}>
                      {(Math.random() * (1 - 0.01) + 0.01)
                        .toFixed(2)
                        .replace(".", ",")}
                      %
                    </div>
                  </div>
                  <div>
                    <div className={styles.timeName}>1M</div>
                    <div className={`${styles.timeValue} ${"ass"}`}>
                      {(Math.random() * (30 - 10) + 10)
                        .toFixed(2)
                        .replace(".", ",")}
                      %
                    </div>
                  </div>
                  <div>
                    <div className={styles.timeName}>1Y</div>
                    <div className={`${styles.timeValue} ${styles.red}`}>
                      -28,50%
                    </div>
                  </div>
                  <div>
                    <div className={styles.timeName}>YTD</div>
                    <div className={`${styles.timeValue} ${"ass"}`}>
                      {(Math.random() * (60 - 40) + 40)
                        .toFixed(2)
                        .replace(".", ",")}
                      %
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        : "Loading ..."}
    </div>
  );
};

export default App;

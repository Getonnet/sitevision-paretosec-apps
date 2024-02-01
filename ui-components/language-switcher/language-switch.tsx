import React from "react";
import styles from "./lang-switcher.scss";
import { NorwayFlagIcon, SwedenFlagIcon } from "../icons";

export const LanguageSwitcher = ({
  norwaySiteLink,
  swedenSiteLink,
}: {
  norwaySiteLink: string;
  swedenSiteLink: string;
}) => {
  return (
    <div className={`${styles.language} lang-switch-wrap`}>
      <a
        className={styles.no}
        href={norwaySiteLink || "//www.paretosec.no"}
        title="Norsk"
        target="_blank"
        rel="noreferrer"
      >
        <span className={styles.srOnly}>Norsk</span>
        <NorwayFlagIcon />
      </a>

      <a
        className={styles.se}
        href={swedenSiteLink || "//www.paretosec.se"}
        title="Svensk"
        target="_blank"
        rel="noreferrer"
      >
        <span className={styles.srOnly}>Svensk</span>
        <SwedenFlagIcon />
      </a>
    </div>
  );
};

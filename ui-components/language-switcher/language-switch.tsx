import React from "react";
import styles from "./lang-switcher.scss";
import { NorwayFlagIcon, SwedenFlagIcon } from "../icons";

export const LanguageSwitcher = () => {
  return (
    <div className={styles.language}>
      <a className={styles.no} href="//www.paretosec.no" title="Norsk">
        <span className={styles.srOnly}>Norsk</span>
        <NorwayFlagIcon />
      </a>
      <a className={styles.se} href="//www.paretosec.se" title="Svensk">
        <span className={styles.srOnly}>Svensk</span>
        <SwedenFlagIcon />
      </a>
    </div>
  );
};

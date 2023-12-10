import React from "react";
import * as CountryFlags from "country-flag-icons/react/3x2";
import styles from "../search_results.module.scss";

interface CountryFlagProps {
  countryCode: string;
}
type CountryIcons = typeof CountryFlags & {
  [key: string]: React.ComponentType<any>;
};

const Ticker = ({ name, country, URI }: any) => {
  const CountryFlag = ({ countryCode }: CountryFlagProps) => {
    const CountryIcon = (CountryFlags as CountryIcons)[countryCode];

    if (!CountryIcon) {
      return null;
    }

    return <CountryIcon />;
  };

  const tickerStyling = {
    display: "flex",
    alignItems: "center",
    gap: "7px",
  };

  return (
    <li>
      <a
        className="ticker-item"
        href={URI}
        style={tickerStyling}
        aria-label={name}
      >
        <CountryFlag countryCode={country} />
        <div className={styles.tickerItemText}>{name}</div>
      </a>
    </li>
  );
};

export default Ticker;

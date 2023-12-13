import * as React from "react";
import { LanguageSwitcher } from "../../../../../ui-components/language-switcher/language-switch";

export interface AppProperties {
  norwaySiteLink: string;
  swedenSiteLink: string;
}

const App: React.FunctionComponent<AppProperties> = ({
  norwaySiteLink,
  swedenSiteLink,
}) => {
  return (
    <LanguageSwitcher
      norwaySiteLink={norwaySiteLink}
      swedenSiteLink={swedenSiteLink}
    />
  );
};

export default App;

import * as React from "react";
import { LanguageSwitcher } from "../../../../../ui-components/language-switcher/language-switch";

export interface AppProperties {}

const App: React.FunctionComponent<AppProperties> = () => {
  return <LanguageSwitcher />;
};

export default App;

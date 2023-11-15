import * as React from "react";
import styles from "./App.scss";
import { FormType } from "../../index";

export interface AppProperties {
  formType: FormType;
}

const App: React.FunctionComponent<AppProperties> = ({ formType }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>{formType}</p>
    </div>
  );
};

export default App;

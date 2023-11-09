import * as React from "react";
import styles from "./App.scss";
import requester from "@sitevision/api/client/requester";

export interface AppProperties {
  message: string;
  name: string;
}

const App: React.FunctionComponent<AppProperties> = ({ message, name }) => {
  const [token, setToken] = React.useState("");

  // fetch in-front token
  const getToken = () => {
    requester
      .doGet({
        url: "/rest-api/Infront%20token/token",
      })
      .then((response) => {
        console.log("Token: ", response);
        const data = response as { token: string };
        setToken(data.token);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  React.useEffect(() => {
    getToken();
  }, []);

  return <div className={styles.container}>{token}</div>;
};

export default App;

import * as React from "react";
// import requester from "@sitevision/api/client/requester";
// import styles from "./App.scss";
// import CompanyTabs from "./CompanyTabs";

export interface AppProperties {
  message: string;
  name: string;
}

const App: React.FunctionComponent<AppProperties> = ({ message, name }) => {
  // const [token, setToken] = React.useState("");

  /*
  React.useEffect(() => {
    // fetch in-front token
    const getToken = () => {
      requester
        .doGet({
          url: "/rest-api/Infront%20token/token",
        })
        .then((response) => {
          console.log("Token: ", response);
          const data = response as { token: string };
          // setToken(data.token);
        })
        .catch((response) => {
          console.log(response);
        });
    };

    // getToken();
  }, []);
  */

  return <div id="norwayLists" />;
};

export default App;

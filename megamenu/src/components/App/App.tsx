import * as React from "react";
// import styles from "./App.scss";
import SearchMobile from "./Mobile/SearchMobile";
import MobileMenuIcon from "./Mobile/MobileMenuIcon";
import MobileSearchFieldVisibilityTrigger from "./Mobile/MobileSearchFieldVisibilityTrigger";
import MobileLogin from "./Mobile/MobileLogin";
import MobileNavbar from "./Mobile/MobileNavbar";
import Navbar from "./Desktop/Navbar";
import Search from "./Desktop/Search";
import Login from "./Desktop/Login";
import requester from "@sitevision/api/client/requester";
import { useEffect } from "react/index";

export interface AppProperties {
  name: string;
}

const URL =
  "https://use-pareto.sitevision-cloud.se/rest-api/1/0/Pareto%20AS/Page%20Repository/Site%20Page/main-menu/nodes?format=json&json=%7B%22properties%22%3A%5B%22*%22%5D%7D";

const App: React.FunctionComponent<AppProperties> = ({ name }) => {
  const getMenuItems = () => {
    console.log("running data fetch  func");
    requester
      .doGet({
        url: URL,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((response) => {
        console.log(response);
      });
  };

  useEffect(() => {
    getMenuItems();
  }, []);

  return (
    <>
      {/*<p className={styles.text}>{name}</p>*/}
      {/* TODO: Add header markup here, with loaders for the menu items, static items should show on load */}
      {/* TODO: use the requested to fetch data from rest api, might need to do that in index.tsx? */}

      <div className="navigation-wrap">
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration={400}
          style={{ backgroundColor: "rgba(255,255,255,0)" }}
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navigation w-nav"
        >
          <div className="navigation-full">
            <div className="navigation-container">
              <div className="navigation-left">
                <a href="/" className="brand w-nav-brand">
                  {/*TODO: settings*/}
                  <img
                    src="https://use-pareto.sitevision-cloud.se/images/18.1411d29318a26018f962db38/1693492056924/pareto-Logo.svg"
                    loading="lazy"
                    alt="Pareto Securities Logo"
                  />
                </a>

                <Navbar />
              </div>

              <div className="navigation-right">
                <Search />

                <Login />

                {/*TODO: settings*/}
                <a
                  href="https://paretosec.com/no/bli-kunde"
                  target="_blank"
                  className="button w-button"
                >
                  Bli kunde
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* mobile nav */}
        <div
          data-collapse="all"
          data-animation="default"
          data-duration={400}
          data-easing="ease-out"
          data-easing2="ease-out"
          role="banner"
          className="navigation-mob w-nav"
        >
          <div className="navigation-container-mob">
            <a
              href="/"
              aria-current="page"
              className="brand-2 w-nav-brand w--current"
            >
              <img
                src="https://use-pareto.sitevision-cloud.se/images/18.1411d29318a26018f962db39/1693492056942/pareto-mobile-logo.svg"
                alt="Pareto Securities Logo"
                className="mobile-logo"
              />
            </a>

            <MobileNavbar />

            <div className="spacer-h" />

            <MobileLogin />

            <MobileSearchFieldVisibilityTrigger />

            <MobileMenuIcon />
          </div>
        </div>

        <SearchMobile />

        <div
          data-w-id="60fed403-f4fb-0814-b602-51d5dbefbbfd"
          className="mobile-search-underlay"
        />
      </div>
    </>
  );
};

export default App;

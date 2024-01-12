import * as React from "react";
import SearchMobile from "../Mobile/SearchMobile";
import MobileMenuIcon from "../Mobile/MobileMenuIcon";
import MobileSearchFieldVisibilityTrigger from "../Mobile/MobileSearchFieldVisibilityTrigger";
import MobileLogin from "../Mobile/MobileLogin";
import MobileNavbar from "../Mobile/MobileNavbar";
import Navbar from "../Desktop/Navbar";
import SearchDesktop from "../Desktop/SearchDesktop";
import Login from "../Desktop/Login";
import requester from "@sitevision/api/client/requester";

import useState from "react-usestateref";
import type {
  AppProperties,
  ILink,
  ISubMenuItems,
  MegaMenuMenu,
  LinkType,
} from "./types";

const URL_PREFIX = "/rest-api/1/0";
const MAIN_URL = URL_PREFIX + "/19.162ad65718a92ee55e3282e0/nodes?format=json&json=%7B%22properties%22%3A%5B%22*%22%5D%7D";
const URL_SUFFIX = "/nodes?format=json&json=%7B%22properties%22%3A%5B%22*%22%5D%7D";

const App: React.FunctionComponent<AppProperties> = ({ data }) => {
  const [, setTopMenuItems, topMenuItems] = useState<ILink[]>([]);
  const [, setChildMenuItems, childMenuItems] = useState<ISubMenuItems>({});
  const [mobileSearchToggle, setMobileSearchToggle] = useState(false);

  const fetchData = (url: string, type: LinkType, parentID?: string) => {
    return requester
      .doGet({
        url: url,
      })
      .then((response) => {
        const data = response as ILink[];
        /**
         * for top level, save to sate
         * then return all items
         */
        if (type === "Link") {
          setTopMenuItems(data);
          return response;
        } else if (type === "Dropdown") {
          /**
           * dropdowns are straight forward
           * just need to fetch once
           */
          if (!parentID) return;
          setChildMenuItems((prev) => ({
            ...prev,
            [parentID]: {
              type: "Dropdown",
              items: data,
            },
          }));
        } else if (type === "Megamenu") {
          /**
           * megamenu has columns
           * inside coluns are links
           */
          if (!parentID) return;
          if (Object.keys(childMenuItems.current).includes(parentID)) {
            const menuItem = childMenuItems.current[parentID] as MegaMenuMenu;
            setChildMenuItems((prev) => ({
              ...prev,
              [parentID]: {
                ...menuItem,
                columns: [
                  ...(Array.isArray(menuItem.columns) ? menuItem.columns : []),
                  data,
                ],
              },
            }));
          } else {
            setChildMenuItems((prev) => ({
              ...prev,
              [parentID]: {
                type: "Megamenu",
                columns: [data],
              },
            }));
          }
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getMenuItems = () => {
    // console.log("running data fetch  func");
    fetchData(MAIN_URL, "Link").then((res) => getSubMenuItems(res as ILink[]));
  };

  const getSubMenuItems = (res: ILink[]) => {
    res.map((r) => {
      if (r.type === "sv:folder") {
        // has submenu
        if (r.properties.ggLinkType === "Dropdown") {
          // fetch 1 level -> all dropdown items
          fetchData(
            URL_PREFIX + r.path + URL_SUFFIX,
            "Dropdown",
            r.properties.ggParentChildId
          );
          // .then(() => console.log(childMenuItems.current));
        } else if (r.properties.ggLinkType === "Megamenu") {
          // fetch 1 level to get columns
          requester
            .doGet({
              url: URL_PREFIX + r.path + "/nodes",
            })
            .then((res) => {
              const data = res as ILink[];
              // for each columns fetch again to get child
              data.map(
                (col) =>
                  fetchData(
                    URL_PREFIX + col.path + URL_SUFFIX,
                    "Megamenu",
                    r.properties.ggParentChildId
                  )
                // .then(() => console.log(childMenuItems.current))
              );
            })
            .catch((e) => console.log(e));
        }
      }
    });
  };

  React.useEffect(() => {
    getMenuItems();
  }, []);

  return (
    <>
      <div className="navigation-wrap">
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration={400}
          style={{ backgroundColor: "rgba(255,255,255,0)" }}
          data-easing="ease"
          data-easing2="ease"
          className="navigation w-nav"
        >
          <div className="navigation-full">
            <div className="navigation-container">
              <div className="navigation-left">
                <a
                  href="/"
                  className="brand w-nav-brand"
                  aria-label="Pareto Securities Logo"
                >
                  <img
                    src={data.desktopLogo}
                    loading="lazy"
                    alt="Pareto Securities Logo"
                  />
                </a>

                <Navbar
                  menuItems={topMenuItems.current}
                  subMenuItems={childMenuItems.current}
                />
              </div>

              <div className="navigation-right">
                <SearchDesktop />

                <Login
                  loginText={data.loginBtnText}
                  loginLink={data.loginBtnLink}
                />

                <a
                  href={data.ctaLink}
                  className="button w-button"
                  aria-label={data.ctaBtnText}
                >
                  {data.ctaBtnText}
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
          className="navigation-mob w-nav"
        >
          <div className="navigation-container-mob">
            <a
              href="/"
              aria-current="page"
              className="brand-2 w-nav-brand w--current"
              aria-label="Pareto Securities Logo"
            >
              <img
                src={data.mobileLogo}
                alt="Pareto Securities Logo"
                className="mobile-logo"
              />
            </a>

            <MobileNavbar
              menuItems={topMenuItems.current}
              subMenuItems={childMenuItems.current}
            />

            <div className="spacer-h" />

            <MobileLogin
              loginLink={data.loginBtnLink}
              loginText={data.loginBtnText}
            />

            <MobileSearchFieldVisibilityTrigger
              toggleMenu={() => setMobileSearchToggle(!mobileSearchToggle)}
            />

            <MobileMenuIcon />
          </div>
        </div>

        <SearchMobile isOpen={mobileSearchToggle} />

        <div
          data-w-id="60fed403-f4fb-0814-b602-51d5dbefbbfd"
          className="mobile-search-underlay"
        />
      </div>
    </>
  );
};

export default App;

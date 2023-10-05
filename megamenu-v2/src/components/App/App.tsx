import * as React from "react";
// import styles from "./App.scss";
import SearchMobile from "../Mobile/SearchMobile";
import MobileMenuIcon from "../Mobile/MobileMenuIcon";
import MobileSearchFieldVisibilityTrigger from "../Mobile/MobileSearchFieldVisibilityTrigger";
import MobileLogin from "../Mobile/MobileLogin";
import MobileNavbar from "../Mobile/MobileNavbar";
import Navbar from "../Desktop/Navbar";
import Search from "../Desktop/Search";
import Login from "../Desktop/Login";
import requester from "@sitevision/api/client/requester";
import useState from "react-usestateref";

type LinkType = "Megamenu" | "Dropdown" | "Link";

export interface AppProperties {
  message: string;
  name: string;
}

export interface ILink {
  id: string;
  type: "sv:folder" | "sv:link";
  name: string;
  path: string;
  properties: Properties;
}

export interface Properties {
  nofollow?: boolean;
  publishedBy: string;
  displayName: string;
  publishDate: number;
  ggLinkType: LinkType;
  "jcr:uuid": string;
  locale: string;
  URI: string;
  URL: string;
  lastPublishDate: number;
  visibleInMenus: boolean;
  useCustomWindowSize?: boolean;
  useDownload?: boolean;
  usePathName: boolean;
  comments: any[];
  lastModifiedDate: number;
  lastModifiedBy: string;
  customWindowHeight?: number;
  published: boolean;
  lastPublishedBy: string;
  creationDate: number;
  visibleCount: number;
  rawURI?: string;
  createdBy: string;
  "jcr:mixinTypes": string[];
  customWindowWidth?: number;
  linkType?: string;
  "jcr:primaryType": string;
  openInNewWindow?: boolean;
  ggParentChildId: string;
  robotsIndex?: boolean;
  resourcePriority?: number;
  downloadProtected?: boolean;
}

export type DropdownMenu = {
  type: "Dropdown";
  items: ILink[];
};

export type MegaMenuMenu = {
  type: "Megamenu";
  columns: Array<ILink[]>;
};

export interface ISubMenuItems {
  [key: string]: DropdownMenu | MegaMenuMenu;
}

const MAIN_URL =
  "https://use-pareto.sitevision-cloud.se/rest-api/1/0/Pareto%20AS/Page%20Repository/Site%20Page/main-menu/nodes?format=json&json=%7B%22properties%22%3A%5B%22*%22%5D%7D";
const URL_PREFIX = "https://use-pareto.sitevision-cloud.se/rest-api/1/0";
const URL_SUFFIX =
  "/nodes?format=json&json=%7B%22properties%22%3A%5B%22*%22%5D%7D";

const App: React.FunctionComponent<AppProperties> = ({ message, name }) => {
  const [, setTopMenuItems, topMenuItems] = useState<ILink[]>([]);
  const [, setChildMenuitems, childMenuitems] = useState<ISubMenuItems>({});

  const fetchData = (
    url: string,
    type: LinkType,
    parentID?: string,
    columnNo?: number
  ) => {
    return requester
      .doGet({
        url: url,
      })
      .then((response) => {
        console.log(response);
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
          setChildMenuitems((prev) => ({
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
          if (Object.keys(childMenuitems.current).includes(parentID)) {
            const menuItem = childMenuitems.current[parentID] as MegaMenuMenu;
            setChildMenuitems((prev) => ({
              ...prev,
              [parentID]: {
                ...menuItem,
                columns: [...menuItem.columns, data],
              },
            }));
          } else {
            setChildMenuitems((prev) => ({
              ...prev,
              [parentID]: {
                type: "Megamenu",
                columns: [data],
              },
            }));
          }
        }
      })
      .catch((response) => {
        console.log(response);
      });
  };

  const getMenuItems = () => {
    console.log("running data fetch  func");
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
          ).then(() => console.log(childMenuitems.current));
        } else if (r.properties.ggLinkType === "Megamenu") {
          // fetch 1 level to get columns
          requester
            .doGet({
              url: URL_PREFIX + r.path + "/nodes",
            })
            .then((res) => {
              const data = res as ILink[];
              // for each columns fetch again to get child
              data.map((col, i) =>
                fetchData(
                  URL_PREFIX + col.path + URL_SUFFIX,
                  "Megamenu",
                  r.properties.ggParentChildId,
                  i + 1
                ).then(() => console.log(childMenuitems.current))
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

                <Navbar
                  menuItems={topMenuItems.current}
                  subMenuItems={childMenuitems.current}
                />
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

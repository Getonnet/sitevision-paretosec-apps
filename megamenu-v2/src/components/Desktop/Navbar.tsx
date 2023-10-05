import React from "react";
import { ILink, ISubMenuItems } from "../App/App";
import MegaMenuFirstLink from "./megamenuFirstLink";

export interface INavBar {
  menuItems: ILink[];
  subMenuItems: ISubMenuItems;
}

const Navbar = ({ menuItems, subMenuItems }: INavBar) => {
  React.useEffect(() => {
    // @ts-ignore
    window.Webflow && window.Webflow.destroy();
    // @ts-ignore
    window.Webflow && window.Webflow.ready();
  }, [menuItems, subMenuItems]);

  return (
    <nav role="navigation" className="nav-menu w-nav-menu">
      {menuItems.map((item) => {
        const ddItem = subMenuItems[item.properties.ggParentChildId] || null;

        if (item.type !== "sv:link") return;

        return item.properties.ggLinkType === "Link" ? (
          <a href={item.properties.URL} className="navigation-link w-nav-link">
            {item.name}
          </a>
        ) : (
          <div
            data-hover="true"
            data-delay={150}
            className="dropdown w-dropdown"
          >
            <div className="dropdown-toggle w-dropdown-toggle">
              <div className="drop-arrow-plain w-icon-dropdown-toggle" />
              <div className="dropdown-trigger-text">{item.name}</div>
            </div>
            {ddItem && ddItem.type === "Dropdown" ? (
              <nav className="dropdown-list w-dropdown-list">
                {ddItem.items.map((di: ILink) => (
                  <a
                    href={di.properties.URL}
                    className="navigation-link-block w-inline-block"
                  >
                    <div className="nav-dd-link">{di.name}</div>
                  </a>
                ))}
              </nav>
            ) : ddItem && ddItem.type === "Megamenu" ? (
              <nav className="dropdown-list-megamenu w-dropdown-list">
                <div className="dropdown-list-full-wrapper">
                  <div className="navigation-drop-container">
                    {ddItem.columns.map((col) => (
                      <div className="navigation-column">
                        <MegaMenuFirstLink link={col[0]} />
                        <div className="nav-content-wrap">
                          {col.slice(1).map((linkItem) => (
                            <a
                              href={linkItem.properties.URL}
                              className="navigation-link-block w-inline-block"
                            >
                              <div className="nav-dd-link">{linkItem.name}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </nav>
            ) : (
              ""
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;

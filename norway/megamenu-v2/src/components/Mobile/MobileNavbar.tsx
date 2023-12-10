import React from "react";
import type { INavBar } from "../Desktop/Navbar";
import type { ILink } from "../App/types";
import MegaMenuFirstLinkMobile from "./megamenuFirstLinkMobile";

const MobileNavBar = ({ menuItems, subMenuItems }: INavBar) => {
  React.useEffect(() => {
    // @ts-ignore
    window.Webflow && window.Webflow.destroy();
    // @ts-ignore
    window.Webflow && window.Webflow.ready();
  }, [menuItems, subMenuItems]);

  return (
    <nav role="navigation" className="mobile-nav w-nav-menu">
      {menuItems.map((item) => {
        const ddItem = subMenuItems[item.properties.ggParentChildId] || null;

        if (item.type !== "sv:link") return;

        return item.properties.ggLinkType === "Link" ? (
          <a
            href={item.properties.URL}
            className="mobile-nav-link w-nav-link"
            aria-label={item.name}
          >
            {item.name}
          </a>
        ) : (
          <div
            data-delay={0}
            data-hover="false"
            className="mobile-dropdown w-dropdown"
          >
            <div className="mobile-toggle w-dropdown-toggle">
              <div className="w-icon-dropdown-toggle" />
              <div>{item.name}</div>
            </div>

            {ddItem && ddItem.type === "Dropdown" ? (
              <nav className="dropdown-list-simple-mob w-dropdown-list">
                {ddItem.items.map((di: ILink) => (
                  <a
                    href={di.properties.URL}
                    className="navigation-link-block-mob w-inline-block"
                    aria-label={di.name}
                  >
                    <div className="nav-dd-link">{di.name}</div>
                  </a>
                ))}
              </nav>
            ) : ddItem && ddItem.type === "Megamenu" ? (
              <nav className="dropdown-list-mob w-dropdown-list">
                <div className="dropdown-list-wrapper-mob">
                  {ddItem.columns.map((col: any) => (
                    <div className="navigation-column-mob">
                      <MegaMenuFirstLinkMobile link={col[0]} />
                      <div className="nav-content-wrap-mob">
                        {col.slice(1).map((linkItem: ILink) => (
                          <a
                            href={linkItem.properties.URL}
                            className="navigation-link-block-mob w-inline-block"
                            aria-label={linkItem.name}
                          >
                            <div className="nav-dd-link">{linkItem.name}</div>
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
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

export default MobileNavBar;

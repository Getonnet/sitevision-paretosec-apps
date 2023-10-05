import React from "react";

const MobileNavBar = () => {
  return (
    <nav role="navigation" className="mobile-nav w-nav-menu">
      <a href="#" className="mobile-nav-link w-nav-link">
        Home
      </a>
      <a href="#" className="mobile-nav-link w-nav-link">
        Projects
      </a>
      <div
        data-delay={0}
        data-hover="false"
        className="mobile-dropdown w-dropdown"
      >
        <div className="mobile-toggle w-dropdown-toggle">
          <div className="w-icon-dropdown-toggle" />
          <div>Om oss</div>
        </div>
        <nav className="dropdown-list-simple-mob w-dropdown-list">
          <a href="#" className="navigation-link-block-mob w-inline-block">
            <div className="nav-dd-link">ETF-handel</div>
          </a>
          <a href="#" className="navigation-link-block-mob w-inline-block">
            <div className="nav-dd-link">Obligasjonshandel</div>
          </a>
          <a href="#" className="navigation-link-block-mob w-inline-block">
            <div className="nav-dd-link">Aksjesparekonto</div>
          </a>
          <a href="#" className="navigation-link-block-mob w-inline-block">
            <div className="nav-dd-link">Prisliste</div>
          </a>
        </nav>
      </div>

      <div
        data-delay={0}
        data-hover="false"
        className="mobile-dropdown w-dropdown"
      >
        <div className="mobile-toggle w-dropdown-toggle">
          <div className="w-icon-dropdown-toggle" />
          <div>Services</div>
        </div>
        <nav className="dropdown-list-mob w-dropdown-list">
          <div className="dropdown-list-wrapper-mob">
            <div className="navigation-column-mob">
              <div className="navigation-column-title-mob">
                <div className="nav-title">Aksjehandel på nett</div>
                <div className="icon-embed-custom-4 w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 17 11"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      d="M12.1216 0.5L11.0405 1.58108L14.1486 4.82432H0.5V6.17567H14.1486L11.0405 9.41892L12.1216 10.5L16.0405 6.58108L16.9865 5.5L16.0405 4.55405L12.1216 0.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="nav-content-wrap-mob">
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Aksjehandel på nett</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">
                    Trading og avansert aksjehandel
                  </div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Handel i utlandet</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">
                    Handle unoterte aksjer i Norge
                  </div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Fondssenter</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">ETF-handel</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Obligasjonshandel</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Aksjesparekonto</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Prisliste</div>
                </a>
              </div>
            </div>
            <div className="navigation-column-mob">
              <div className="navigation-column-title-mob">
                <div className="nav-title">Megler Kontotyper</div>
                <div className="icon-embed-custom-4 w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 17 11"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      d="M12.1216 0.5L11.0405 1.58108L14.1486 4.82432H0.5V6.17567H14.1486L11.0405 9.41892L12.1216 10.5L16.0405 6.58108L16.9865 5.5L16.0405 4.55405L12.1216 0.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="nav-content-wrap-mob">
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Belåning av aksjer</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Aksjekreditt</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Intradagskreditt</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Shorthandel</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Lån ut dine aksjer</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Dynamiske belåningsgrader</div>
                </a>
              </div>
            </div>
            <div className="navigation-column-mob">
              <div className="navigation-column-title-mob">
                <div className="nav-title">Lån &amp; andre tjenester</div>
                <div className="icon-embed-custom-4 w-embed">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 17 11"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      d="M12.1216 0.5L11.0405 1.58108L14.1486 4.82432H0.5V6.17567H14.1486L11.0405 9.41892L12.1216 10.5L16.0405 6.58108L16.9865 5.5L16.0405 4.55405L12.1216 0.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              <div className="nav-content-wrap-mob">
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Analyse</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Investtech hos Pareto</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Investeringsrådgivning</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">VPS Investortjenester</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Kundeavtaler</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Prosjektfinansiering</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Kunnskapssenter</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Traders Corner</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Spørsmål og svar</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Paretopodden</div>
                </a>
                <a
                  href="#"
                  className="navigation-link-block-mob w-inline-block"
                >
                  <div className="nav-dd-link">Flytt til Pareto</div>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <a href="#" className="mobile-nav-link w-nav-link">
        Clients
      </a>
    </nav>
  );
};

export default MobileNavBar;

import * as React from "react";
import PropTypes from "prop-types";
import styles from "./App.scss";

const App = ({ message, name }) => {
  return (
    <div className={styles.container}>
      <div className="sv-newslist">
        <ul
          className="env-list env-list--horizontal--fixed sv-newslist-gallery"
          data-testid="gallery-container"
          data-cid="601ab12c-e918-6dc6-6fc5-4a90d0a6e51e"
        >
          <li
            className="env-list__item sv-newslist__gallery-item"
            data-testid="gallery-news-item"
            data-cid="f088009d-c250-58c7-01d4-1c856f3c97bc"
          >
            <article className="env-h--100 sv-newslist__gallery-article">
              <a
                href="/aktuelt/2023-11-14-otovo-selskapspresentasjon-og-qa"
                title="Otovo: Selskapspresentasjon og Q&A"
              >
                <div
                  role="img"
                  aria-label="Otovo"
                  className="sv-newslist__gallery-item__image"
                  style={{
                    backgroundImage:
                      'url("https://use-pareto.sitevision-cloud.se/images/18.28cfbc6618bcbd0d13c76b/1699956765886/otovo-thumb.Png")',
                    height: 260,
                    minHeight: 260,
                  }}
                />
              </a>
              <div className="env-p-around--xx-small env-h--100 env-d--flex env-flex--column">
                <header>
                  <small className="normal">
                    Pareto Securities, 14 november 2023
                  </small>
                  <h3 className="subheading3">
                    <a href="/aktuelt/2023-11-14-otovo-selskapspresentasjon-og-qa">
                      Otovo: Selskapspresentasjon og Q&amp;A
                    </a>
                  </h3>
                </header>
              </div>
            </article>
          </li>
          <li
            className="env-list__item sv-newslist__gallery-item"
            data-testid="gallery-news-item"
            data-cid="2f4b8d03-a3dd-09d2-ac08-ee257a8ad134"
          >
            <article className="env-h--100 sv-newslist__gallery-article">
              <a
                href="/aktuelt/2023-11-10-oslo-bors-apningstider-julen-2023"
                title="Oslo Børs åpningstider julen 2023"
              >
                <div
                  role="img"
                  aria-label="Article image"
                  className="sv-newslist__gallery-item__image"
                  style={{
                    backgroundImage:
                      'url("https://use-pareto.sitevision-cloud.se/images/18.f11e32b18b848c78592a534/1699347779380/DSC04112-%282%29.JPG")',
                    height: 260,
                    minHeight: 260,
                  }}
                />
              </a>
              <div className="env-p-around--xx-small env-h--100 env-d--flex env-flex--column">
                <header>
                  <small className="normal">
                    Pareto Securities, 10 november 2023
                  </small>
                  <h3 className="subheading3">
                    <a href="/aktuelt/2023-11-10-oslo-bors-apningstider-julen-2023">
                      Oslo Børs åpningstider julen 2023
                    </a>
                  </h3>
                </header>
              </div>
            </article>
          </li>
          <li
            className="env-list__item sv-newslist__gallery-item"
            data-testid="gallery-news-item"
            data-cid="6e18b796-54b5-b312-51f9-9d1e31ce9991"
          >
            <article className="env-h--100 sv-newslist__gallery-article">
              <a
                href="/aktuelt/2023-11-01-bytter-over-halve-paretoportefoljen-etter-solid-maned"
                title="Bytter over halve Paretoporteføljen etter solid måned"
              >
                <div
                  role="img"
                  aria-label="Article image"
                  className="sv-newslist__gallery-item__image"
                  style={{
                    backgroundImage:
                      'url("https://use-pareto.sitevision-cloud.se/images/18.4857b8d018b84b04208400fa/1699348088110/Nov23.png")',
                    height: 260,
                    minHeight: 260,
                  }}
                />
              </a>
              <div className="env-p-around--xx-small env-h--100 env-d--flex env-flex--column">
                <header>
                  <small className="normal">
                    Pareto Securities, 1 november 2023
                  </small>
                  <h3 className="subheading3">
                    <a href="/aktuelt/2023-11-01-bytter-over-halve-paretoportefoljen-etter-solid-maned">
                      Bytter over halve Paretoporteføljen etter solid måned
                    </a>
                  </h3>
                </header>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </div>
  );
};

App.propTypes = {
  message: PropTypes.string,
  name: PropTypes.string,
};

export default App;

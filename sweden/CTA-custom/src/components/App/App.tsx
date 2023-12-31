import * as React from "react";
// import styles from "./App.scss";
import { makeDarker } from "./utility";

export interface AppProperties {
  data: {
    bgImg: string;
    imagePosition: "left" | "right";
    smallTitle: string;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    assertiveText: string;
    newTab: boolean;
    buttonStyle: "button" | "text";
    backgroundColor: string;
    textColor: string;
  };
}

const App: React.FunctionComponent<AppProperties> = ({ data }) => {
  const [hover, setHover] = React.useState(false);

  const {
    bgImg,
    imagePosition,
    smallTitle,
    title,
    description,
    buttonText,
    buttonLink,
    assertiveText,
    newTab,
    buttonStyle,
    backgroundColor,
    textColor,
  } = data;

  const normalStyle = {
    backgroundColor: backgroundColor,
  };

  const hoverStyle = {
    backgroundColor: makeDarker(backgroundColor, 15),
  };

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <div className="sv-vertical sv-layout section-padding-full-width-mobile ielayoutfix sv-template-layout c21">
      {/*TODO: solve background color problem with inline css?*/}
      <div className="sv-fluid-grid sv-grid-desktop-1280px-12-col-30-px sv-layout sv-skip-spacer sv-template-layout">
        <div
          className="sv-row sv-layout pareto-cta-container sv-skip-spacer sv-template-layout"
          style={{
            flexDirection: imagePosition === "left" ? "row" : "row-reverse",
          }}
        >
          <div
            className="sv-layout pareto-cta-image sv-skip-spacer sv-column-7 sv-template-layout"
            style={{
              backgroundImage: `url(${
                bgImg ||
                "/images/18.77ae0016189943c42b183468/1692106251285/img-004.jpg"
              })`,
              minWidth: "50%",
            }}
          />

          <div
            className={`sv-layout sv-column-5 sv-template-layout ${
              imagePosition === "left"
                ? " pareto-cta-content"
                : " pareto-cta-content-left"
            }`}
            style={{ zIndex: 1 }}
          >
            <div className="sv-html-portlet sv-portlet sv-skip-spacer sv-template-portlet">
              <div id="entrydecorline" />
              <div className="entrydecorline" />
            </div>

            <div className="sv-text-portlet sv-use-margins sv-template-portlet">
              <div id="Subheading">{/* Subheading */}</div>
              <div className="sv-text-portlet-content">
                <p className="sv-font-cta-sub-heading">{smallTitle}</p>
              </div>
            </div>

            <div className="sv-text-portlet sv-use-margins sv-template-portlet">
              <div id="Heading-3">{/* Heading */}</div>
              <div className="sv-text-portlet-content">
                <h2 className="subheading">{title}</h2>
              </div>
            </div>

            <div className="sv-text-portlet sv-use-margins sv-template-portlet c14">
              <div id="Text-8" />
              <div className="sv-text-portlet-content">
                <p className="normal">{description}</p>
              </div>
            </div>

            <div className="sv-custom-module sv-marketplace-sitevision-button sv-template-portlet">
              <div id="Blikunde">{/* Bli kunde */}</div>
              <div className="env-d--flex  env-flex--row">
                {buttonStyle === "text" ? (
                  <a
                    className="env-button env-button--small env-button--link w--current"
                    href={buttonLink}
                    target={newTab ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    {buttonText}
                    <span className="env-assistive-text">{assertiveText}</span>
                  </a>
                ) : (
                  <a
                    className={`env-button env-button--primary`}
                    href={buttonLink}
                    target={newTab ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    style={hover ? hoverStyle : normalStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    {buttonText}
                    <span
                      className="env-assistive-text"
                      style={{
                        color: textColor,
                      }}
                    >
                      {assertiveText}
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<div>*/}
      {/*{JSON.stringify(backgroundColor)}*/}
      {/*{JSON.stringify(colorUtil.getColorByName(data.backgroundColor))}*/}
      {/*{JSON.stringify(colorUtil.getColorByHtmlHexValue(data.backgroundColor))}*/}
      {/*</div>*/}
    </div>
  );
};

export default App;

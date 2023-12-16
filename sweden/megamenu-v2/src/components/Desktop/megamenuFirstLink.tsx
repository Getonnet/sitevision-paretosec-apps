import React from "react";
import type { ILink } from "../App/types";

const MegaMenuFirstLink = ({ link }: { link: ILink }) => {
  return (
    <a
      href={link.properties.URL}
      className="navigation-column-title"
      aria-label={link.name}
    >
      <div className="nav-title">{link.name}</div>
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
          aria-label="Menu icon"
        >
          <path
            d="M12.1216 0.5L11.0405 1.58108L14.1486 4.82432H0.5V6.17567H14.1486L11.0405 9.41892L12.1216 10.5L16.0405 6.58108L16.9865 5.5L16.0405 4.55405L12.1216 0.5Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </a>
  );
};

export default MegaMenuFirstLink;

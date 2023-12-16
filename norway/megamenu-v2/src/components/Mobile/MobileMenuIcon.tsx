import React from "react";

const MobileMenuIcon = () => {
  return (
    <div className="menu-mob w-nav-button">
      <div className="icon-embed-custom-3 w-embed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 30 18"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          role="img"
          aria-label="Mobile menu toggle icon"
        >
          <path d="M0 1.2041H30" stroke="currentColor" strokeWidth={2} />
          <path d="M0 8.7041H30" stroke="currentColor" strokeWidth={2} />
          <path d="M0 16.2041H30" stroke="currentColor" strokeWidth={2} />
        </svg>
      </div>
    </div>
  );
};

export default MobileMenuIcon;

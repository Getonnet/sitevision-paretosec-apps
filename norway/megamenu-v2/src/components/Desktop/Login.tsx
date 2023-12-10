import React from "react";

// TODO: settings
const Login = ({
  loginText,
  loginLink,
}: {
  loginText: string;
  loginLink: string;
}) => {
  return (
    <a
      href={loginLink}
      className="button is-transparent w-inline-block"
      aria-label={loginText}
    >
      <div className="icon-embed-custom-2 w-embed">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 15 10"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
          role="img"
          aria-label="Mobile menu toggle icon"
        >
          <path
            d="M10.6542 0.5L9.6885 1.47297L12.465 4.39189H0.272705V5.60811H12.465L9.6885 8.52703L10.6542 9.5L14.155 5.97297L15 5L14.155 4.14865L10.6542 0.5Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div>{loginText}</div>
    </a>
  );
};

export default Login;

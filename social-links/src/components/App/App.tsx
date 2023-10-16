import * as React from "react";
import styles from "./App.scss";

export interface AppProperties {
  pageUrl: string;
}

const App = ({ pageUrl }: AppProperties) => {
  const url = encodeURIComponent(pageUrl);
  const pageTitle = typeof document !== "undefined" ? document.title : "";

  return (
    <div className={styles.wrapper}>
      {/* twitter */}
      <a
        href={
          "https://twitter.com/intent/tweet?url=" + url + "&text=" + pageTitle
        }
        target={"_blank"}
        rel="noreferrer"
        className={styles.icon}
        aria-label="Share article on twitter"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="19.5" stroke="#DE0080" />
          <path
            d="M12.039 12L18.2267 20.2734L12 27H13.4015L18.853 21.1106L23.2576 27H28.0266L21.4906 18.2614L27.2864 12H25.8849L20.8645 17.4239L16.808 12H12.039ZM14.0999 13.0322H16.2908L25.9654 25.9678H23.7745L14.0999 13.0322Z"
            fill="#003255"
          />
        </svg>
      </a>

      {/* linked in */}
      <a
        href={"https://www.linkedin.com/shareArticle?url=" + url}
        className={styles.icon}
        target={"_blank"}
        rel="noreferrer"
        aria-label="Share article on linkedin"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="19.5" stroke="#DE0080" />
          <path
            d="M16.2051 14.75C16.2049 15.1478 16.0467 15.5293 15.7652 15.8105C15.4838 16.0916 15.1022 16.2495 14.7043 16.2493C14.3065 16.2491 13.9251 16.0908 13.6439 15.8094C13.3627 15.528 13.2049 15.1463 13.2051 14.7485C13.2053 14.3507 13.3635 13.9692 13.6449 13.6881C13.9264 13.4069 14.308 13.2491 14.7058 13.2493C15.1037 13.2495 15.4851 13.4077 15.7663 13.6891C16.0474 13.9706 16.2053 14.3522 16.2051 14.75ZM16.2501 17.36H13.2501V26.75H16.2501V17.36ZM20.9901 17.36H18.0051V26.75H20.9601V21.8225C20.9601 19.0775 24.5376 18.8225 24.5376 21.8225V26.75H27.5001V20.8025C27.5001 16.175 22.2051 16.3475 20.9601 18.62L20.9901 17.36Z"
            fill="#003255"
          />
        </svg>
      </a>

      {/* facebook */}
      <a
        href={"https://www.facebook.com/sharer/sharer.php?u=" + url}
        className={styles.icon}
        target={"_blank"}
        rel="noreferrer"
        aria-label="Share article on facebook"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="19.5" stroke="#DE0080" />
          <path
            d="M21.5 21.125H23.375L24.125 18.125H21.5V16.625C21.5 15.8525 21.5 15.125 23 15.125H24.125V12.605C23.8805 12.5728 22.9572 12.5 21.9822 12.5C19.946 12.5 18.5 13.7427 18.5 16.025V18.125H16.25V21.125H18.5V27.5H21.5V21.125Z"
            fill="#003255"
          />
        </svg>
      </a>
    </div>
  );
};

export default App;

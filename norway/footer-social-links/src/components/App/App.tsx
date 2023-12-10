import * as React from "react";
import styles from "./App.scss";
import {
  TwitterIcon,
  LinkedinIcon,
  ThreadsIcon,
  YoutubeIcon,
  InstagramIcon,
  FacebookIcon,
} from "./icons";

export interface AppProperties {
  TwitterIconLink: string;
  LinkedinIconLink: string;
  ThreadsIconLink: string;
  YoutubeIconLink: string;
  InstagramIconLink: string;
  FacebookIconLink: string;
}

const App: React.FunctionComponent<AppProperties> = ({
  TwitterIconLink,
  LinkedinIconLink,
  ThreadsIconLink,
  InstagramIconLink,
  YoutubeIconLink,
  FacebookIconLink,
}) => {
  return (
    <div className={styles.container}>
      {FacebookIconLink ? (
        <a
          href={FacebookIconLink}
          target="_blank"
          className={styles.icon}
          aria-label={"FacebookIcon"}
        >
          <FacebookIcon />
        </a>
      ) : null}
      {TwitterIconLink ? (
        <a
          href={TwitterIconLink}
          target="_blank"
          className={styles.icon}
          aria-label={"TwitterIcon"}
        >
          <TwitterIcon />
        </a>
      ) : null}
      {LinkedinIconLink ? (
        <a
          href={LinkedinIconLink}
          target="_blank"
          className={styles.icon}
          aria-label={"LinkedinIcon"}
        >
          <LinkedinIcon />
        </a>
      ) : null}
      {ThreadsIconLink ? (
        <a
          href={ThreadsIconLink}
          target="_blank"
          className={styles.icon}
          aria-label={"ThreadsIcon"}
        >
          <ThreadsIcon />
        </a>
      ) : null}
      {InstagramIconLink ? (
        <a
          href={InstagramIconLink}
          target="_blank"
          className={styles.icon}
          aria-label={"InstagramIcon"}
        >
          <InstagramIcon />
        </a>
      ) : null}
      {YoutubeIconLink ? (
        <a
          href={YoutubeIconLink}
          target="_blank"
          className={styles.icon}
          aria-label={"YoutubeIcon"}
        >
          <YoutubeIcon />
        </a>
      ) : null}
    </div>
  );
};

export default App;

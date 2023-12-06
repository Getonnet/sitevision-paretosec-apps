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
        <a href={FacebookIconLink} className={styles.icon}>
          <FacebookIcon />
        </a>
      ) : null}
      {TwitterIconLink ? (
        <a href={TwitterIconLink} className={styles.icon}>
          <TwitterIcon />
        </a>
      ) : null}
      {LinkedinIconLink ? (
        <a href={LinkedinIconLink} className={styles.icon}>
          <LinkedinIcon />
        </a>
      ) : null}
      {ThreadsIconLink ? (
        <a href={ThreadsIconLink} className={styles.icon}>
          <ThreadsIcon />
        </a>
      ) : null}
      {InstagramIconLink ? (
        <a href={InstagramIconLink} className={styles.icon}>
          <InstagramIcon />
        </a>
      ) : null}
      {YoutubeIconLink ? (
        <a href={YoutubeIconLink} className={styles.icon}>
          <YoutubeIcon />
        </a>
      ) : null}
    </div>
  );
};

export default App;

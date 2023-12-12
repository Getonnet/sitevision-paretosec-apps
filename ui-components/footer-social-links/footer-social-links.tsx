import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  ThreadsIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../icons";
import styles from "./FooterSocialLinks.scss";

export interface SocialLinks {
  FacebookIconLink: string;
  TwitterIconLink: string;
  LinkedinIconLink: string;
  ThreadsIconLink: string;
  InstagramIconLink: string;
  YoutubeIconLink: string;
}

export const FooterSocialLinks = ({
  FacebookIconLink,
  TwitterIconLink,
  LinkedinIconLink,
  ThreadsIconLink,
  InstagramIconLink,
  YoutubeIconLink,
}: SocialLinks) => {
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

import * as React from "react";
import { FooterSocialLinks } from "../../../../../ui-components/footer-social-links/footer-social-links";

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
    <>
      <FooterSocialLinks
        FacebookIconLink={FacebookIconLink}
        TwitterIconLink={TwitterIconLink}
        LinkedinIconLink={LinkedinIconLink}
        ThreadsIconLink={ThreadsIconLink}
        InstagramIconLink={InstagramIconLink}
        YoutubeIconLink={YoutubeIconLink}
      />
    </>
  );
};

export default App;

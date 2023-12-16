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
    <FooterSocialLinks
      TwitterIconLink={TwitterIconLink}
      LinkedinIconLink={LinkedinIconLink}
      ThreadsIconLink={ThreadsIconLink}
      InstagramIconLink={InstagramIconLink}
      YoutubeIconLink={YoutubeIconLink}
      FacebookIconLink={FacebookIconLink}
    />
  );
};

export default App;

import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import router from "@sitevision/api/common/router";
import appData from "@sitevision/api/server/appData";
import App from "./components/App";

router.get("/", (req, res) => {
  const TwitterIconLink = appData.get("TwitterIconLink") as string;
  const LinkedinIconLink = appData.get("LinkedinIconLink") as string;
  const ThreadsIconLink = appData.get("ThreadsIconLink") as string;
  const InstagramIconLink = appData.get("InstagramIconLink") as string;
  const YoutubeIconLink = appData.get("YoutubeIconLink") as string;
  const FacebookIconLink = appData.get("FacebookIconLink") as string;

  res.send(
    renderToStaticMarkup(
      <App
        TwitterIconLink={TwitterIconLink}
        LinkedinIconLink={LinkedinIconLink}
        ThreadsIconLink={ThreadsIconLink}
        InstagramIconLink={InstagramIconLink}
        YoutubeIconLink={YoutubeIconLink}
        FacebookIconLink={FacebookIconLink}
      />
    )
  );
});

import * as React from "react";
import { renderToString } from "react-dom/server";
import router from "@sitevision/api/common/router";
import appData from "@sitevision/api/server/appData";
import App from "./components/App";

export type FormType = "mobile" | "web" | "active";

router.get("/", (req, res) => {
  const formType = appData.get("formType") as FormType;
  const redirectPageUrl = (appData.get("redirectPageUrl", "URI") ||
    "#") as string;

  res.agnosticRender(
    renderToString(
      <App formType={formType} redirectPageUrl={redirectPageUrl} />
    ),
    {
      formType,
      redirectPageUrl,
    }
  );
});

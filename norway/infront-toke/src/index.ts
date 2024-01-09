import router from "@sitevision/api/common/router";
import events from "@sitevision/api/common/events";
import log from "@sitevision/api/server/LogUtil";
import storage from "@sitevision/api/server/storage";
import requester from "@sitevision/api/server/Requester";
import { TokenGenPayload, TokenGenUrl } from "./http.service";

interface Token {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: string;
  id_token: string;
  "not-before-policy": number;
  session_state: string;
  scope: string;
}

interface ExpiryDateTime {
  dateTime: string;
}

/**
 * get database: key value store
 */
const db = storage.getKeyValueDataStore("paretosec-dev");

/**
 * fetch infront token here and save to database
 */
const fetchToken = () => {
  return requester
    .post(TokenGenUrl, TokenGenPayload)
    .done((tokenData: Token) => {
      db.put("token", tokenData);
      const date = new Date();
      const expiryDateTime = date.setSeconds(
        date.getSeconds() + (tokenData.expires_in - 4000)
      );
      db.put("expiry_date_time", { dateTime: expiryDateTime });
    })
    .fail((error: any) => {
      log.error(JSON.stringify(error));
    });
};

/**
 * run check every hour for token expiry, sitevision does not provide anything inbetween 1 hour and 1 day
 * https://developer.sitevision.se/docs/rest-api/restapps/events/system-event-options
 */
events.on("sv:every-hour", function (options) {
  try {
    const expiry_date_time = db.get("expiry_date_time") as ExpiryDateTime;
    // js add 9 hours to date
    const runTime = new Date();

    if (runTime > new Date(expiry_date_time.dateTime)) {
      // expired: renew token
      fetchToken();
    }
  } catch (e) {
    log.error(JSON.stringify(e));
  }
});

/**
 * get saved token form database and return it
 */
router.get("/token", (req, res) => {
  // get token from database
  const data = db.get("token") as Token;

  // make sure expiry date is not passed
  // const expiry_date_time = db.get("expiry_date_time") as ExpiryDateTime;

  // return token
  res.json({ token: data.access_token });
});

/**
 * manually refresh token, mainly for testing
 */
router.get("/token/refresh", (req, res) => {
  // fetch token and save to db
  fetchToken();
  // get token from database
  const data = db.get("token") as Token;
  // return token
  res.json({ token: data.access_token });
});

/*
db.put("token", {
  access_token:
    "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHQ3RhaXRJRElteW0wZzVreUlPLUdnWDlyeDJ3b1RVZlRiZFM1NnN4REFRIn0.eyJleHAiOjE2OTg3NDAzODgsImlhdCI6MTY5ODcwNDM4OCwianRpIjoiOTkzNTIxNTctNjQ3ZC00ZTcxLTk3ODQtODRjNTkzOTFhOTA0IiwiaXNzIjoiaHR0cHM6Ly9wYXJldG8uY2xvdWQuZXUuaW5mcm9udHNlcnZpY2VzLmNvbS9hdXRoL3JlYWxtcy9wYXJldG8iLCJhdWQiOlsiZG9jdW1lbnQtaHViLXNlcnZpY2UiLCJhY2NvdW50Il0sInN1YiI6ImY6MmU0OGI4YWYtMGNlZC00MTUxLWI2NzctYTU0MTgyMDM4ODdlOjUzOTI2MTA2MiIsInR5cCI6IkJlYXJlciIsImF6cCI6Ind0ay1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiNDAwMDk2OTEtYjY5OS00ODk3LThlMTctYWJiYmU2NjU3ZWViIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwczovL2dhdGV3YXkuZXUuaW5mcm9udGZpbmFuY2UuY29tIiwiaHR0cHM6Ly9wYXJldG8uZXUuaW5mcm9udGZpbmFuY2UuY29tIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiZG9jdW1lbnQtaHViLXNlcnZpY2UiOnsicm9sZXMiOlsiRE9DVU1FTlRfSFVCIiwiRE9DSFVCX0RJUkVDVCJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJvcGVuaWQgcHJvZmlsZSBlbWFpbCIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicHJlZmVycmVkX3VzZXJuYW1lIjoiUGFyZXRvX1NhbmRib3giLCJsb2NhbGUiOiJlbiIsInhucyI6InBhcmV0byJ9.CrbrCzoU9HRF7Xqp7VTPQeCrAGzte7vffMTddEvUIOZCu5sYADLN5Ym6GYUvnGx7nrcLDIZH2-bYKuNvOyfs51U4NLdvrfsuP11mn1AlhYAx63jbufnYMYes3CNnPFWas9KS-Ilkx5ouulUPgkqdMHmxemxPSduqMOecxE7lpDU8XAGOE6PWHk3ujNzrab8GoDCkjBGuazKgSLJ4W7LqUcbM0s-rKj-hCEc3aLnHsm8-WBJa_lWIffKcAUhMJhecx6nf0ocmXuf9NWW9tWgs16vkQxkAeC1uoKIW8gsgwal8P4h7FTmeBdgCxQvG3mm0wDZIxBTdLbLdzuapwXa2VQ",
  expires_in: 36000,
  refresh_expires_in: 50400,
  refresh_token:
    "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIyZWY0OTRiNy0xNDQzLTQ4MzYtOWQ3Yy01ZTg4ZjM0NWRjMjUifQ.eyJleHAiOjE2OTg3NTQ3ODgsImlhdCI6MTY5ODcwNDM4OCwianRpIjoiMjQ2NjA3YzItYmNmMS00M2QyLTgxOTQtN2UwYWQzNWZlOGQxIiwiaXNzIjoiaHR0cHM6Ly9wYXJldG8uY2xvdWQuZXUuaW5mcm9udHNlcnZpY2VzLmNvbS9hdXRoL3JlYWxtcy9wYXJldG8iLCJhdWQiOiJodHRwczovL3BhcmV0by5jbG91ZC5ldS5pbmZyb250c2VydmljZXMuY29tL2F1dGgvcmVhbG1zL3BhcmV0byIsInN1YiI6ImY6MmU0OGI4YWYtMGNlZC00MTUxLWI2NzctYTU0MTgyMDM4ODdlOjUzOTI2MTA2MiIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJ3dGstY2xpZW50Iiwic2Vzc2lvbl9zdGF0ZSI6IjQwMDA5NjkxLWI2OTktNDg5Ny04ZTE3LWFiYmJlNjY1N2VlYiIsInNjb3BlIjoib3BlbmlkIHByb2ZpbGUgZW1haWwifQ.ACdSXRkuvrfgxckj-B6ZqlTdVwDZC_oeFymc7Vc_HI8",
  token_type: "Bearer",
  id_token:
    "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHQ3RhaXRJRElteW0wZzVreUlPLUdnWDlyeDJ3b1RVZlRiZFM1NnN4REFRIn0.eyJleHAiOjE2OTg3NDAzODgsImlhdCI6MTY5ODcwNDM4OCwiYXV0aF90aW1lIjowLCJqdGkiOiI4YjFlMTI2MS1mZjUxLTQ4MjctYTc5Ni0yMDhlZjYyOTUxNmQiLCJpc3MiOiJodHRwczovL3BhcmV0by5jbG91ZC5ldS5pbmZyb250c2VydmljZXMuY29tL2F1dGgvcmVhbG1zL3BhcmV0byIsImF1ZCI6Ind0ay1jbGllbnQiLCJzdWIiOiJmOjJlNDhiOGFmLTBjZWQtNDE1MS1iNjc3LWE1NDE4MjAzODg3ZTo1MzkyNjEwNjIiLCJ0eXAiOiJJRCIsImF6cCI6Ind0ay1jbGllbnQiLCJzZXNzaW9uX3N0YXRlIjoiNDAwMDk2OTEtYjY5OS00ODk3LThlMTctYWJiYmU2NjU3ZWViIiwiYXRfaGFzaCI6InZ6cEJFYjBRNkJWSlVZQUxjU3VuQmciLCJhY3IiOiIxIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJQYXJldG9fU2FuZGJveCIsImxvY2FsZSI6ImVuIiwieG5zIjoicGFyZXRvIn0.fgTxQozRNKTpXv5qOSM9DlvfDMQ3GI90Q-PEClbzxblwyUr7TuRxeTRIB3vjuJT2mOOBBz6ToZEkdR9fo0L_EN7PszvDHXt_sI8CU9SqdP-0aCWhEG2Sa_SnOOL6Pnlj6cTCFV-ovHv2Q_8f6WiLTaoSIvfLOISprvzyRXFHS_MheYurIBZx0h04TiEgcK0xtiOS2zMmsyygC14kZaHD5QVGs_kbLPbJCkBhWGFAWfI_pTAPaw-Ue5FG1f16DzWTn1GPbiuwl8DimkrU1o6Pic935z4aGRH21YvvDAE2ue3nJPiwla0eEem2YkqYagjzVUNXCt6qIiQ3awKBXefllw",
  "not-before-policy": 0,
  session_state: "40009691-b699-4897-8e17-abbbe6657eeb",
  scope: "openid profile email",
});
*/

/**
 * ----------------------------------------------
 * fetch data for `Månedsportefølje table to module`
 * ----------------------------------------------
 */
router.get("/maanedsportefolje", (req, res) => {
  requester
    .get("https://online.paretosec.com/api/ModelPortfolio/no")
    .done((data: any) => {
      res.json(data);
    })
    .fail((error: any) => {
      log.error(JSON.stringify(error));
    });
});
// END fetch data for `Månedsportefølje table to module`

export const TokenGenUrl =
  "https://pareto.cloud.eu.infrontservices.com/auth/realms/pareto/protocol/openid-connect/token";

export const TokenGenPayload = {
  contentType: "application/x-www-form-urlencoded",
  data: {
    grant_type: "password",
    username: "Pareto_Sandbox",
    password: "Infront542!",
    client_id: "wtk-client",
    client_secret: "1e526587-0882-411d-9d59-ae2b7a75d608",
    scope: "openid",
  },
};

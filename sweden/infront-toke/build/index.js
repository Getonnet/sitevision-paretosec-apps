(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=require("router");var n=e.n(t);const o=require("events");var r=e.n(o);const a=require("LogUtil");var i=e.n(a);const s=require("storage");var c=e.n(s);const u=require("Requester");var d=e.n(u),p={contentType:"application/x-www-form-urlencoded",data:{grant_type:"password",username:"Pareto_Sandbox",password:"Infront542!",client_id:"wtk-client",client_secret:"1e526587-0882-411d-9d59-ae2b7a75d608",scope:"openid"}},f=c().getKeyValueDataStore("paretosec-dev"),l=function(){return d().post("https://pareto.cloud.eu.infrontservices.com/auth/realms/pareto/protocol/openid-connect/token",p).done((function(e){f.put("token",e);var t=new Date,n=t.setSeconds(t.getSeconds()+(e.expires_in-4e3));f.put("expiry_date_time",{dateTime:n})})).fail((function(e){i().error(JSON.stringify(e))}))};r().on("sv:every-hour",(function(e){try{var t=f.get("expiry_date_time");new Date>new Date(t.dateTime)&&l()}catch(e){i().error(JSON.stringify(e))}})),n().get("/token",(function(e,t){var n=f.get("token");t.json({token:n.access_token})})),n().get("/token/refresh",(function(e,t){l();var n=f.get("token");t.json({token:n.access_token})})),n().get("/maanedsportefolje",(function(e,t){d().get("https://online.paretosec.com/api/ModelPortfolio/no").done((function(e){t.json(e)})).fail((function(e){i().error(JSON.stringify(e))}))}))})();
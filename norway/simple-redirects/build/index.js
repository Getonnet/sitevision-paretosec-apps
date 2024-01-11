(()=>{"use strict";var e={n:r=>{var t=r&&r.__esModule?()=>r.default:()=>r;return e.d(t,{a:t}),t},d:(r,t)=>{for(var o in t)e.o(t,o)&&!e.o(r,o)&&Object.defineProperty(r,o,{enumerable:!0,get:t[o]})},o:(e,r)=>Object.prototype.hasOwnProperty.call(e,r)};const r=require("router");var t=e.n(r);const o=require("RedirectUtil");var n=e.n(o);const a=require("storage");var s=e.n(a);const c=require("ResourceLocatorUtil");var d=e.n(c),i=function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var o,n,a=t.call(e),s=[];try{for(;(void 0===r||r-- >0)&&!(o=a.next()).done;)s.push(o.value)}catch(e){n={error:e}}finally{try{o&&!o.done&&(t=a.return)&&t.call(a)}finally{if(n)throw n.error}}return s},l=function(e,r,t){if(t||2===arguments.length)for(var o,n=0,a=r.length;n<a;n++)!o&&n in r||(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return e.concat(o||Array.prototype.slice.call(r))},u=s().getKeyValueDataStore("paretosec-dev");t().get("/all",(function(e,r){var t=n().getRedirectURIs(d().getNodeByUrl("https://use-temp-pareto.sitevision-cloud.se/omoss"));r.json({redirects:t})})),t().get("/add-redirects",(function(e,r){var t=e.params,o=[],a=[];if(!Object.keys(t).length)return r.json({message:"Please add proper data"});Object.keys(t).map((function(e){var r=d().getNodeByUrl(e),s=t[e];r?(-1===o.indexOf(e)&&o.push(e),"string"==typeof s?n().addRedirectURI(r,s):n().addRedirectURIs(r,s)):a.push("No existing page found for ".concat(e))}));var s={nodes:[]};try{s=u.get("redirectNodes")}catch(e){u.put("redirectNodes",{nodes:[]})}var c={};c=s.nodes.length?{nodes:l([],i(new Set(l(l([],i(o),!1),i(s.nodes),!1))),!1)}:{nodes:o},u.put("redirectNodes",c),r.json({message:"Success",errors:a,newNodes:o,mergedNodes:c})}))})();
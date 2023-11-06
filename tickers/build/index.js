/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var e={257:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var c in a=Object(arguments[u]))r.call(a,c)&&(l[c]=a[c]);if(t){i=t(a);for(var s=0;s<i.length;s++)n.call(a,i[s])&&(l[i[s]]=a[i[s]])}}return l}},954:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=r(257),a=r(341);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=60106,u=60107,c=60108,s=60114,f=60109,p=60110,d=60112,h=60113,m=60120,y=60115,v=60116,w=60121,g=60117,x=60119,b=60129,k=60131;if("function"==typeof Symbol&&Symbol.for){var E=Symbol.for;l=E("react.portal"),u=E("react.fragment"),c=E("react.strict_mode"),s=E("react.profiler"),f=E("react.provider"),p=E("react.context"),d=E("react.forward_ref"),h=E("react.suspense"),m=E("react.suspense_list"),y=E("react.memo"),v=E("react.lazy"),w=E("react.block"),g=E("react.fundamental"),x=E("react.scope"),b=E("react.debug_trace_mode"),k=E("react.legacy_hidden")}function S(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case u:return"Fragment";case l:return"Portal";case s:return"Profiler";case c:return"StrictMode";case h:return"Suspense";case m:return"SuspenseList"}if("object"===n(e))switch(e.$$typeof){case p:return(e.displayName||"Context")+".Consumer";case f:return(e._context.displayName||"Context")+".Provider";case d:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case y:return S(e.type);case w:return S(e._render);case v:t=e._payload,e=e._init;try{return S(e(t))}catch(e){}}return null}var _=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C={};function F(e,t){for(var r=0|e._threadCount;r<=t;r++)e[r]=e._currentValue2,e._threadCount=r+1}for(var O=new Uint16Array(16),N=0;15>N;N++)O[N]=N+1;O[15]=0;var D=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I=Object.prototype.hasOwnProperty,P={},j={};function R(e){return!!I.call(j,e)||!I.call(P,e)&&(D.test(e)?j[e]=!0:(P[e]=!0,!1))}function M(e,t,r,o){if(null==t||function(e,t,r,o){if(null!==r&&0===r.type)return!1;switch(n(t)){case"function":case"symbol":return!0;case"boolean":return!o&&(null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,r,o))return!0;if(o)return!1;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function A(e,t,r,n,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){L[e]=new A(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];L[t]=new A(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){L[e]=new A(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){L[e]=new A(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){L[e]=new A(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){L[e]=new A(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){L[e]=new A(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){L[e]=new A(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){L[e]=new A(e,5,!1,e.toLowerCase(),null,!1,!1)}));var $=/[\-:]([a-z])/g;function T(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace($,T);L[t]=new A(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace($,T);L[t]=new A(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace($,T);L[t]=new A(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){L[e]=new A(e,1,!1,e.toLowerCase(),null,!1,!1)})),L.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){L[e]=new A(e,1,!1,e.toLowerCase(),null,!0,!0)}));var z=/["'&<>]/;function V(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=z.exec(e);if(t){var r,n="",o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}function q(e,t){var r,n=L.hasOwnProperty(e)?L[e]:null;return(r="style"!==e)&&(r=null!==n?0===n.type:2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])),r||M(e,t,n,!1)?"":null!==n?(e=n.attributeName,3===(r=n.type)||4===r&&!0===t?e+'=""':(n.sanitizeURL&&(t=""+t),e+'="'+V(t)+'"')):R(e)?e+'="'+V(t)+'"':""}var W="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},U=null,H=null,G=null,B=!1,Z=!1,Y=null,Q=0;function X(){if(null===U)throw Error(i(321));return U}function J(){if(0<Q)throw Error(i(312));return{memoizedState:null,queue:null,next:null}}function K(){return null===G?null===H?(B=!1,H=G=J()):(B=!0,G=H):null===G.next?(B=!1,G=G.next=J()):(B=!0,G=G.next),G}function ee(e,t,r,n){for(;Z;)Z=!1,Q+=1,G=null,r=e(t,n);return te(),r}function te(){U=null,Z=!1,H=null,Q=0,G=Y=null}function re(e,t){return"function"==typeof t?t(e):t}function ne(e,t,r){if(U=X(),G=K(),B){var n=G.queue;if(t=n.dispatch,null!==Y&&void 0!==(r=Y.get(n))){Y.delete(n),n=G.memoizedState;do{n=e(n,r.action),r=r.next}while(null!==r);return G.memoizedState=n,[n,t]}return[G.memoizedState,t]}return e=e===re?"function"==typeof t?t():t:void 0!==r?r(t):t,G.memoizedState=e,e=(e=G.queue={last:null,dispatch:null}).dispatch=ae.bind(null,U,e),[G.memoizedState,e]}function oe(e,t){if(U=X(),t=void 0===t?null:t,null!==(G=K())){var r=G.memoizedState;if(null!==r&&null!==t){var n=r[1];e:if(null===n)n=!1;else{for(var o=0;o<n.length&&o<t.length;o++)if(!W(t[o],n[o])){n=!1;break e}n=!0}if(n)return r[0]}}return e=e(),G.memoizedState=[e,t],e}function ae(e,t,r){if(!(25>Q))throw Error(i(301));if(e===U)if(Z=!0,e={action:r,next:null},null===Y&&(Y=new Map),void 0===(r=Y.get(t)))Y.set(t,e);else{for(t=r;null!==t.next;)t=t.next;t.next=e}}function ie(){}var le=null,ue={readContext:function(e){var t=le.threadID;return F(e,t),e[t]},useContext:function(e){X();var t=le.threadID;return F(e,t),e[t]},useMemo:oe,useReducer:ne,useRef:function(e){U=X();var t=(G=K()).memoizedState;return null===t?(e={current:e},G.memoizedState=e):t},useState:function(e){return ne(re,e)},useLayoutEffect:function(){},useCallback:function(e,t){return oe((function(){return e}),t)},useImperativeHandle:ie,useEffect:ie,useDebugValue:ie,useDeferredValue:function(e){return X(),e},useTransition:function(){return X(),[function(e){e()},!1]},useOpaqueIdentifier:function(){return(le.identifierPrefix||"")+"R:"+(le.uniqueID++).toString(36)},useMutableSource:function(e,t){return X(),t(e._source)}},ce="http://www.w3.org/1999/xhtml";function se(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var fe={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},pe=o({menuitem:!0},fe),de={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];Object.keys(de).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),de[t]=de[e]}))}));var me=/([A-Z])/g,ye=/^ms-/,ve=a.Children.toArray,we=_.ReactCurrentDispatcher,ge={listing:!0,pre:!0,textarea:!0},xe=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,be={},ke={};var Ee=Object.prototype.hasOwnProperty,Se={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function _e(e,t){if(void 0===e)throw Error(i(152,S(t)||"Component"))}function Ce(e,t,r){function l(a,l){var u=l.prototype&&l.prototype.isReactComponent,c=function(e,t,r,o){if(o&&"object"===n(o=e.contextType)&&null!==o)return F(o,r),o[r];if(e=e.contextTypes){for(var a in r={},e)r[a]=t[a];t=r}else t=C;return t}(l,t,r,u),s=[],f=!1,p={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===s)return null},enqueueReplaceState:function(e,t){f=!0,s=[t]},enqueueSetState:function(e,t){if(null===s)return null;s.push(t)}};if(u){if(u=new l(a.props,c,p),"function"==typeof l.getDerivedStateFromProps){var d=l.getDerivedStateFromProps.call(null,a.props,u.state);null!=d&&(u.state=o({},u.state,d))}}else if(U={},u=l(a.props,c,p),null==(u=ee(l,a.props,u,c))||null==u.render)return void _e(e=u,l);if(u.props=a.props,u.context=c,u.updater=p,void 0===(p=u.state)&&(u.state=p=null),"function"==typeof u.UNSAFE_componentWillMount||"function"==typeof u.componentWillMount)if("function"==typeof u.componentWillMount&&"function"!=typeof l.getDerivedStateFromProps&&u.componentWillMount(),"function"==typeof u.UNSAFE_componentWillMount&&"function"!=typeof l.getDerivedStateFromProps&&u.UNSAFE_componentWillMount(),s.length){p=s;var h=f;if(s=null,f=!1,h&&1===p.length)u.state=p[0];else{d=h?p[0]:u.state;var m=!0;for(h=h?1:0;h<p.length;h++){var y=p[h];null!=(y="function"==typeof y?y.call(u,d,a.props,c):y)&&(m?(m=!1,d=o({},d,y)):o(d,y))}u.state=d}}else s=null;if(_e(e=u.render(),l),"function"==typeof u.getChildContext&&"object"===n(a=l.childContextTypes)){var v=u.getChildContext();for(var w in v)if(!(w in a))throw Error(i(108,S(l)||"Unknown",w))}v&&(t=o({},t,v))}for(;a.isValidElement(e);){var u=e,c=u.type;if("function"!=typeof c)break;l(u,c)}return{child:e,context:t}}var Fe=function(){function e(e,t,r){a.isValidElement(e)?e.type!==u?e=[e]:(e=e.props.children,e=a.isValidElement(e)?[e]:ve(e)):e=ve(e),e={type:null,domNamespace:ce,children:e,childIndex:0,context:C,footer:""};var n=O[0];if(0===n){var o=O,l=2*(n=o.length);if(!(65536>=l))throw Error(i(304));var c=new Uint16Array(l);for(c.set(o),(O=c)[0]=n+1,o=n;o<l-1;o++)O[o]=o+1;O[l-1]=0}else O[0]=O[n];this.threadID=n,this.stack=[e],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=t,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[],this.uniqueID=0,this.identifierPrefix=r&&r.identifierPrefix||""}var t=e.prototype;return t.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;O[e]=O[0],O[0]=e}},t.pushProvider=function(e){var t=++this.contextIndex,r=e.type._context,n=this.threadID;F(r,n);var o=r[n];this.contextStack[t]=r,this.contextValueStack[t]=o,r[n]=e.props.value},t.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],r=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=r},t.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},t.read=function(e){if(this.exhausted)return null;var t=le;le=this;var r=we.current;we.current=ue;try{for(var n=[""],o=!1;n[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var a=this.threadID;O[a]=O[0],O[0]=a;break}var l=this.stack[this.stack.length-1];if(o||l.childIndex>=l.children.length){var u=l.footer;if(""!==u&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===l.type)this.currentSelectValue=null;else if(null!=l.type&&null!=l.type.type&&l.type.type.$$typeof===f)this.popProvider(l.type);else if(l.type===h){this.suspenseDepth--;var c=n.pop();if(o){o=!1;var s=l.fallbackFrame;if(!s)throw Error(i(303));this.stack.push(s),n[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}n[this.suspenseDepth]+=c}n[this.suspenseDepth]+=u}else{var p=l.children[l.childIndex++],d="";try{d+=this.render(p,l.context,l.domNamespace)}catch(e){if(null!=e&&"function"==typeof e.then)throw Error(i(294));throw e}n.length<=this.suspenseDepth&&n.push(""),n[this.suspenseDepth]+=d}}return n[0]}finally{we.current=r,le=t,te()}},t.render=function(e,t,r){if("string"==typeof e||"number"==typeof e)return""===(r=""+e)?"":this.makeStaticMarkup?V(r):this.previousWasTextNode?"\x3c!-- --\x3e"+V(r):(this.previousWasTextNode=!0,V(r));if(e=(t=Ce(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!a.isValidElement(e)){if(null!=e&&null!=e.$$typeof){if((r=e.$$typeof)===l)throw Error(i(257));throw Error(i(258,r.toString()))}return e=ve(e),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}var w=e.type;if("string"==typeof w)return this.renderDOM(e,t,r);switch(w){case k:case b:case c:case s:case m:case u:return e=ve(e.props.children),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case h:throw Error(i(294));case x:throw Error(i(343))}if("object"===n(w)&&null!==w)switch(w.$$typeof){case d:U={};var E=w.render(e.props,e.ref);return E=ee(w.render,e.props,E,e.ref),E=ve(E),this.stack.push({type:null,domNamespace:r,children:E,childIndex:0,context:t,footer:""}),"";case y:return e=[a.createElement(w.type,o({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case f:return r={type:e,domNamespace:r,children:w=ve(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(r),"";case p:w=e.type,E=e.props;var S=this.threadID;return F(w,S),w=ve(E.children(w[S])),this.stack.push({type:e,domNamespace:r,children:w,childIndex:0,context:t,footer:""}),"";case g:throw Error(i(338));case v:return w=(E=(w=e.type)._init)(w._payload),e=[a.createElement(w,o({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}throw Error(i(130,null==w?w:n(w),""))},t.renderDOM=function(e,t,r){var l=e.type.toLowerCase();if(r===ce&&se(l),!be.hasOwnProperty(l)){if(!xe.test(l))throw Error(i(65,l));be[l]=!0}var u=e.props;if("input"===l)u=o({type:void 0},u,{defaultChecked:void 0,defaultValue:void 0,value:null!=u.value?u.value:u.defaultValue,checked:null!=u.checked?u.checked:u.defaultChecked});else if("textarea"===l){var c=u.value;if(null==c){c=u.defaultValue;var s=u.children;if(null!=s){if(null!=c)throw Error(i(92));if(Array.isArray(s)){if(!(1>=s.length))throw Error(i(93));s=s[0]}c=""+s}null==c&&(c="")}u=o({},u,{value:void 0,children:""+c})}else if("select"===l)this.currentSelectValue=null!=u.value?u.value:u.defaultValue,u=o({},u,{value:void 0});else if("option"===l){s=this.currentSelectValue;var f=function(e){if(null==e)return e;var t="";return a.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(u.children);if(null!=s){var p=null!=u.value?u.value+"":f;if(c=!1,Array.isArray(s)){for(var d=0;d<s.length;d++)if(""+s[d]===p){c=!0;break}}else c=""+s===p;u=o({selected:void 0,children:void 0},u,{selected:c,children:f})}}if(c=u){if(pe[l]&&(null!=c.children||null!=c.dangerouslySetInnerHTML))throw Error(i(137,l));if(null!=c.dangerouslySetInnerHTML){if(null!=c.children)throw Error(i(60));if("object"!==n(c.dangerouslySetInnerHTML)||!("__html"in c.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=c.style&&"object"!==n(c.style))throw Error(i(62))}c=u,s=this.makeStaticMarkup,f=1===this.stack.length,p="<"+e.type;e:if(-1===l.indexOf("-"))d="string"==typeof c.is;else switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":d=!1;break e;default:d=!0}for(k in c)if(Ee.call(c,k)){var h=c[k];if(null!=h){if("style"===k){var m=void 0,y="",v="";for(m in h)if(h.hasOwnProperty(m)){var w=0===m.indexOf("--"),g=h[m];if(null!=g){if(w)var x=m;else if(x=m,ke.hasOwnProperty(x))x=ke[x];else{var b=x.replace(me,"-$1").toLowerCase().replace(ye,"-ms-");x=ke[x]=b}y+=v+x+":",v=m,y+=w=null==g||"boolean"==typeof g||""===g?"":w||"number"!=typeof g||0===g||de.hasOwnProperty(v)&&de[v]?(""+g).trim():g+"px",v=";"}}h=y||null}m=null,d?Se.hasOwnProperty(k)||(m=R(m=k)&&null!=h?m+'="'+V(h)+'"':""):m=q(k,h),m&&(p+=" "+m)}}s||f&&(p+=' data-reactroot=""');var k=p;c="",fe.hasOwnProperty(l)?k+="/>":(k+=">",c="</"+e.type+">");e:{if(null!=(s=u.dangerouslySetInnerHTML)){if(null!=s.__html){s=s.__html;break e}}else if("string"==typeof(s=u.children)||"number"==typeof s){s=V(s);break e}s=null}return null!=s?(u=[],ge.hasOwnProperty(l)&&"\n"===s.charAt(0)&&(k+="\n"),k+=s):u=ve(u.children),e=e.type,r=null==r||"http://www.w3.org/1999/xhtml"===r?se(e):"http://www.w3.org/2000/svg"===r&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":r,this.stack.push({domNamespace:r,type:l,children:u,childIndex:0,context:t,footer:c}),this.previousWasTextNode=!1,k},e}();t.renderToString=function(e,t){e=new Fe(e,!1,t);try{return e.read(1/0)}finally{e.destroy()}}},956:(e,t,r)=>{e.exports=r(954)},340:(e,t,r)=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var o=r(257),a=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var l=60109,u=60110,c=60112;t.Suspense=60113;var s=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),i=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),l=p("react.provider"),u=p("react.context"),c=p("react.forward_ref"),t.Suspense=p("react.suspense"),s=p("react.memo"),f=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function v(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}function w(){}function g(e,t,r){this.props=e,this.context=t,this.refs=y,this.updater=r||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==n(e)&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=v.prototype;var x=g.prototype=new w;x.constructor=g,o(x,v.prototype),x.isPureReactComponent=!0;var b={current:null},k=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,o={},i=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,n)&&!E.hasOwnProperty(n)&&(o[n]=t[n]);var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){for(var c=Array(u),s=0;s<u;s++)c[s]=arguments[s+2];o.children=c}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:b.current}}function _(e){return"object"===n(e)&&null!==e&&e.$$typeof===a}var C=/\/+/g;function F(e,t){return"object"===n(e)&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function O(e,t,r,o,l){var u=n(e);"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case i:c=!0}}if(c)return l=l(c=e),e=""===o?"."+F(c,0):o,Array.isArray(l)?(r="",null!=e&&(r=e.replace(C,"$&/")+"/"),O(l,t,r,"",(function(e){return e}))):null!=l&&(_(l)&&(l=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,r+(!l.key||c&&c.key===l.key?"":(""+l.key).replace(C,"$&/")+"/")+e)),t.push(l)),1;if(c=0,o=""===o?".":o+":",Array.isArray(e))for(var s=0;s<e.length;s++){var f=o+F(u=e[s],s);c+=O(u,t,r,f,l)}else if(f=function(e){return null===e||"object"!==n(e)?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),s=0;!(u=e.next()).done;)c+=O(u=u.value,t,r,f=o+F(u,s++),l);else if("object"===u)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return c}function N(e,t,r){if(null==e)return e;var n=[],o=0;return O(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function D(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function P(){var e=I.current;if(null===e)throw Error(h(321));return e}var j={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:o};t.Children={map:N,forEach:function(e,t,r){N(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return N(e,(function(){t++})),t},toArray:function(e){return N(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(h(143));return e}},t.Component=v,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,t.cloneElement=function(e,t,r){if(null==e)throw Error(h(267,e));var n=o({},e.props),i=e.key,l=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,u=b.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(s in t)k.call(t,s)&&!E.hasOwnProperty(s)&&(n[s]=void 0===t[s]&&void 0!==c?c[s]:t[s])}var s=arguments.length-2;if(1===s)n.children=r;else if(1<s){c=Array(s);for(var f=0;f<s;f++)c[f]=arguments[f+2];n.children=c}return{$$typeof:a,type:e.type,key:i,ref:l,props:n,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:D}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return P().useCallback(e,t)},t.useContext=function(e,t){return P().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return P().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return P().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return P().useLayoutEffect(e,t)},t.useMemo=function(e,t){return P().useMemo(e,t)},t.useReducer=function(e,t,r){return P().useReducer(e,t,r)},t.useRef=function(e){return P().useRef(e)},t.useState=function(e){return P().useState(e)},t.version="17.0.2"},341:(e,t,r)=>{e.exports=r(340)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=r(341),t=r(956);const n=require("router");var o=r.n(n);const a=require("appData");var i=r.n(a);const l="MdqmloQum59cSX6ES8v6",u="Pj2js7Ic2mBGxMxbOeiT",c="zhJbYmdBUnEjToIm4uw5",s="cbrx85Wi8mQwxxRqmQhb",f="GnTTQ5mGdThZR3mWdQLQ",p="H7Or9ToBsCkYTPdml5iE",d="seSnGG5orGbZj7pdi9w1",h="njOXVbhLr6qIWNrlhGRY",m="kQCVRZcUNvRnKYysB7Wy",y="zVag4Xpdrvcn9CbkqkHr",v="x7aL_yLDpgMz3Nn86FTu",w="RRXP7alBuiJV31Wjl1Ao",g="uZ1k7JHWxInDhlOIMNes",x="bo9xrwVuH27nIFZ1royC",b="iVBxcA7XxHCeHd1i7McK",k="m4zVSD7J5etKyixlIw9H",E="zW9NaJ5i3XqOnzjciu27";var S=function(){return e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:6,height:5,viewBox:"0 0 6 5",fill:"none"},e.createElement("path",{d:"M2.88669 5L-6.67175e-05 5.04736e-07L5.77344 0L2.88669 5Z",fill:"#D96967"}))};const _=function(t){var r=t.token,n=t.tickers;console.log(r);var o=(0,e.useState)([]);o[0],o[1];return e.createElement("div",{style:{paddingBottom:"30px"}},n&&n.length?n.map((function(t){return e.createElement("div",{className:l},e.createElement("div",{className:u},e.createElement("span",{className:s},"Apple"===t?"APPL":"DGA"===t?"DOFG":t),e.createElement("span",{className:f},"Apple"===t?"Apple inc":"DGA"===t?"Dof Group ASA":t)),e.createElement("div",{className:"".concat(c," ").concat(E)},e.createElement("div",{className:p},e.createElement("div",null,e.createElement("h2",{className:d},"Apple"===t?"APPL":"DGA"===t?"DOFG":t),e.createElement("p",{className:h},"Apple"===t?"Apple inc":"DGA"===t?"Dof Group ASA":t)),e.createElement("div",{className:m},"15:59:25")),e.createElement("div",{className:y}),e.createElement("div",{className:"tt-body"},e.createElement("div",{className:v},"$",(180*Math.random()+120).toFixed(2)),e.createElement("div",{className:"".concat(w," ").concat(k)},e.createElement(S,null),"0.6202 (-0.89%)")),e.createElement("div",{className:y}),e.createElement("div",{className:g},e.createElement("div",null,e.createElement("div",{className:x},"7D"),e.createElement("div",{className:"".concat(b," ").concat("ass")},(.99*Math.random()+.01).toFixed(2).replace(".",","),"%")),e.createElement("div",null,e.createElement("div",{className:x},"1M"),e.createElement("div",{className:"".concat(b," ").concat("ass")},(20*Math.random()+10).toFixed(2).replace(".",","),"%")),e.createElement("div",null,e.createElement("div",{className:x},"1Y"),e.createElement("div",{className:"".concat(b," ").concat(k)},"-28,50%")),e.createElement("div",null,e.createElement("div",{className:x},"YTD"),e.createElement("div",{className:"".concat(b," ").concat("ass")},(20*Math.random()+40).toFixed(2).replace(".",","),"%")))))})):"Loading ...")},C=require("Requester");var F=r.n(C),O={contentType:"application/x-www-form-urlencoded",data:{grant_type:"password",username:"Pareto_Sandbox",password:"Infront542!",client_id:"wtk-client",client_secret:"1e526587-0882-411d-9d59-ae2b7a75d608",scope:"openid"}};o().get("/",(function(r,n){var o=i().get("selectTickers");console.log("admin selected tickers: ",o),F().post("https://pareto.cloud.eu.infrontservices.com/auth/realms/pareto/protocol/openid-connect/token",O).done((function(r){n.agnosticRender((0,t.renderToString)(e.createElement(_,{token:r,tickers:o})),{token:r,tickers:o})})).fail((function(e){n.json({message:e})}))}))})()})();
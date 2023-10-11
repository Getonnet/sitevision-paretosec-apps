/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var e={257:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var a,i,l=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var s in a=Object(arguments[c]))n.call(a,s)&&(l[s]=a[s]);if(t){i=t(a);for(var u=0;u<i.length;u++)r.call(a,i[u])&&(l[i[u]]=a[i[u]])}}return l}},954:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var o=n(257),a=n(341);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=60106,c=60107,s=60108,u=60114,f=60109,p=60110,d=60112,m=60113,h=60120,v=60115,y=60116,w=60121,g=60117,b=60119,E=60129,k=60131;if("function"==typeof Symbol&&Symbol.for){var x=Symbol.for;l=x("react.portal"),c=x("react.fragment"),s=x("react.strict_mode"),u=x("react.profiler"),f=x("react.provider"),p=x("react.context"),d=x("react.forward_ref"),m=x("react.suspense"),h=x("react.suspense_list"),v=x("react.memo"),y=x("react.lazy"),w=x("react.block"),g=x("react.fundamental"),b=x("react.scope"),E=x("react.debug_trace_mode"),k=x("react.legacy_hidden")}function S(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case c:return"Fragment";case l:return"Portal";case u:return"Profiler";case s:return"StrictMode";case m:return"Suspense";case h:return"SuspenseList"}if("object"===r(e))switch(e.$$typeof){case p:return(e.displayName||"Context")+".Consumer";case f:return(e._context.displayName||"Context")+".Provider";case d:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case v:return S(e.type);case w:return S(e._render);case y:t=e._payload,e=e._init;try{return S(e(t))}catch(e){}}return null}var N=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C={};function L(e,t){for(var n=0|e._threadCount;n<=t;n++)e[n]=e._currentValue2,e._threadCount=n+1}for(var _=new Uint16Array(16),F=0;15>F;F++)_[F]=F+1;_[15]=0;var O=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,I=Object.prototype.hasOwnProperty,M={},D={};function P(e){return!!I.call(D,e)||!I.call(M,e)&&(O.test(e)?D[e]=!0:(M[e]=!0,!1))}function R(e,t,n,o){if(null==t||function(e,t,n,o){if(null!==n&&0===n.type)return!1;switch(r(t)){case"function":case"symbol":return!0;case"boolean":return!o&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,o))return!0;if(o)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function j(e,t,n,r,o,a,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){A[e]=new j(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];A[t]=new j(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){A[e]=new j(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){A[e]=new j(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){A[e]=new j(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){A[e]=new j(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){A[e]=new j(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){A[e]=new j(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){A[e]=new j(e,5,!1,e.toLowerCase(),null,!1,!1)}));var $=/[\-:]([a-z])/g;function V(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace($,V);A[t]=new j(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace($,V);A[t]=new j(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace($,V);A[t]=new j(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){A[e]=new j(e,1,!1,e.toLowerCase(),null,!1,!1)})),A.xlinkHref=new j("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){A[e]=new j(e,1,!1,e.toLowerCase(),null,!0,!0)}));var W=/["'&<>]/;function z(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=W.exec(e);if(t){var n,r="",o=0;for(n=t.index;n<e.length;n++){switch(e.charCodeAt(n)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==n&&(r+=e.substring(o,n)),o=n+1,r+=t}e=o!==n?r+e.substring(o,n):r}return e}function T(e,t){var n,r=A.hasOwnProperty(e)?A[e]:null;return(n="style"!==e)&&(n=null!==r?0===r.type:2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])),n||R(e,t,r,!1)?"":null!==r?(e=r.attributeName,3===(n=r.type)||4===n&&!0===t?e+'=""':(r.sanitizeURL&&(t=""+t),e+'="'+z(t)+'"')):P(e)?e+'="'+z(t)+'"':""}var U="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},q=null,H=null,B=null,Z=!1,Y=!1,G=null,X=0;function J(){if(null===q)throw Error(i(321));return q}function K(){if(0<X)throw Error(i(312));return{memoizedState:null,queue:null,next:null}}function Q(){return null===B?null===H?(Z=!1,H=B=K()):(Z=!0,B=H):null===B.next?(Z=!1,B=B.next=K()):(Z=!0,B=B.next),B}function ee(e,t,n,r){for(;Y;)Y=!1,X+=1,B=null,n=e(t,r);return te(),n}function te(){q=null,Y=!1,H=null,X=0,B=G=null}function ne(e,t){return"function"==typeof t?t(e):t}function re(e,t,n){if(q=J(),B=Q(),Z){var r=B.queue;if(t=r.dispatch,null!==G&&void 0!==(n=G.get(r))){G.delete(r),r=B.memoizedState;do{r=e(r,n.action),n=n.next}while(null!==n);return B.memoizedState=r,[r,t]}return[B.memoizedState,t]}return e=e===ne?"function"==typeof t?t():t:void 0!==n?n(t):t,B.memoizedState=e,e=(e=B.queue={last:null,dispatch:null}).dispatch=ae.bind(null,q,e),[B.memoizedState,e]}function oe(e,t){if(q=J(),t=void 0===t?null:t,null!==(B=Q())){var n=B.memoizedState;if(null!==n&&null!==t){var r=n[1];e:if(null===r)r=!1;else{for(var o=0;o<r.length&&o<t.length;o++)if(!U(t[o],r[o])){r=!1;break e}r=!0}if(r)return n[0]}}return e=e(),B.memoizedState=[e,t],e}function ae(e,t,n){if(!(25>X))throw Error(i(301));if(e===q)if(Y=!0,e={action:n,next:null},null===G&&(G=new Map),void 0===(n=G.get(t)))G.set(t,e);else{for(t=n;null!==t.next;)t=t.next;t.next=e}}function ie(){}var le=null,ce={readContext:function(e){var t=le.threadID;return L(e,t),e[t]},useContext:function(e){J();var t=le.threadID;return L(e,t),e[t]},useMemo:oe,useReducer:re,useRef:function(e){q=J();var t=(B=Q()).memoizedState;return null===t?(e={current:e},B.memoizedState=e):t},useState:function(e){return re(ne,e)},useLayoutEffect:function(){},useCallback:function(e,t){return oe((function(){return e}),t)},useImperativeHandle:ie,useEffect:ie,useDebugValue:ie,useDeferredValue:function(e){return J(),e},useTransition:function(){return J(),[function(e){e()},!1]},useOpaqueIdentifier:function(){return(le.identifierPrefix||"")+"R:"+(le.uniqueID++).toString(36)},useMutableSource:function(e,t){return J(),t(e._source)}},se="http://www.w3.org/1999/xhtml";function ue(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var fe={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},pe=o({menuitem:!0},fe),de={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];Object.keys(de).forEach((function(e){me.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),de[t]=de[e]}))}));var he=/([A-Z])/g,ve=/^ms-/,ye=a.Children.toArray,we=N.ReactCurrentDispatcher,ge={listing:!0,pre:!0,textarea:!0},be=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Ee={},ke={};var xe=Object.prototype.hasOwnProperty,Se={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Ne(e,t){if(void 0===e)throw Error(i(152,S(t)||"Component"))}function Ce(e,t,n){function l(a,l){var c=l.prototype&&l.prototype.isReactComponent,s=function(e,t,n,o){if(o&&"object"===r(o=e.contextType)&&null!==o)return L(o,n),o[n];if(e=e.contextTypes){for(var a in n={},e)n[a]=t[a];t=n}else t=C;return t}(l,t,n,c),u=[],f=!1,p={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===u)return null},enqueueReplaceState:function(e,t){f=!0,u=[t]},enqueueSetState:function(e,t){if(null===u)return null;u.push(t)}};if(c){if(c=new l(a.props,s,p),"function"==typeof l.getDerivedStateFromProps){var d=l.getDerivedStateFromProps.call(null,a.props,c.state);null!=d&&(c.state=o({},c.state,d))}}else if(q={},c=l(a.props,s,p),null==(c=ee(l,a.props,c,s))||null==c.render)return void Ne(e=c,l);if(c.props=a.props,c.context=s,c.updater=p,void 0===(p=c.state)&&(c.state=p=null),"function"==typeof c.UNSAFE_componentWillMount||"function"==typeof c.componentWillMount)if("function"==typeof c.componentWillMount&&"function"!=typeof l.getDerivedStateFromProps&&c.componentWillMount(),"function"==typeof c.UNSAFE_componentWillMount&&"function"!=typeof l.getDerivedStateFromProps&&c.UNSAFE_componentWillMount(),u.length){p=u;var m=f;if(u=null,f=!1,m&&1===p.length)c.state=p[0];else{d=m?p[0]:c.state;var h=!0;for(m=m?1:0;m<p.length;m++){var v=p[m];null!=(v="function"==typeof v?v.call(c,d,a.props,s):v)&&(h?(h=!1,d=o({},d,v)):o(d,v))}c.state=d}}else u=null;if(Ne(e=c.render(),l),"function"==typeof c.getChildContext&&"object"===r(a=l.childContextTypes)){var y=c.getChildContext();for(var w in y)if(!(w in a))throw Error(i(108,S(l)||"Unknown",w))}y&&(t=o({},t,y))}for(;a.isValidElement(e);){var c=e,s=c.type;if("function"!=typeof s)break;l(c,s)}return{child:e,context:t}}var Le=function(){function e(e,t,n){a.isValidElement(e)?e.type!==c?e=[e]:(e=e.props.children,e=a.isValidElement(e)?[e]:ye(e)):e=ye(e),e={type:null,domNamespace:se,children:e,childIndex:0,context:C,footer:""};var r=_[0];if(0===r){var o=_,l=2*(r=o.length);if(!(65536>=l))throw Error(i(304));var s=new Uint16Array(l);for(s.set(o),(_=s)[0]=r+1,o=r;o<l-1;o++)_[o]=o+1;_[l-1]=0}else _[0]=_[r];this.threadID=r,this.stack=[e],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=t,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[],this.uniqueID=0,this.identifierPrefix=n&&n.identifierPrefix||""}var t=e.prototype;return t.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;_[e]=_[0],_[0]=e}},t.pushProvider=function(e){var t=++this.contextIndex,n=e.type._context,r=this.threadID;L(n,r);var o=n[r];this.contextStack[t]=n,this.contextValueStack[t]=o,n[r]=e.props.value},t.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],n=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=n},t.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},t.read=function(e){if(this.exhausted)return null;var t=le;le=this;var n=we.current;we.current=ce;try{for(var r=[""],o=!1;r[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var a=this.threadID;_[a]=_[0],_[0]=a;break}var l=this.stack[this.stack.length-1];if(o||l.childIndex>=l.children.length){var c=l.footer;if(""!==c&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===l.type)this.currentSelectValue=null;else if(null!=l.type&&null!=l.type.type&&l.type.type.$$typeof===f)this.popProvider(l.type);else if(l.type===m){this.suspenseDepth--;var s=r.pop();if(o){o=!1;var u=l.fallbackFrame;if(!u)throw Error(i(303));this.stack.push(u),r[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}r[this.suspenseDepth]+=s}r[this.suspenseDepth]+=c}else{var p=l.children[l.childIndex++],d="";try{d+=this.render(p,l.context,l.domNamespace)}catch(e){if(null!=e&&"function"==typeof e.then)throw Error(i(294));throw e}r.length<=this.suspenseDepth&&r.push(""),r[this.suspenseDepth]+=d}}return r[0]}finally{we.current=n,le=t,te()}},t.render=function(e,t,n){if("string"==typeof e||"number"==typeof e)return""===(n=""+e)?"":this.makeStaticMarkup?z(n):this.previousWasTextNode?"\x3c!-- --\x3e"+z(n):(this.previousWasTextNode=!0,z(n));if(e=(t=Ce(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!a.isValidElement(e)){if(null!=e&&null!=e.$$typeof){if((n=e.$$typeof)===l)throw Error(i(257));throw Error(i(258,n.toString()))}return e=ye(e),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}var w=e.type;if("string"==typeof w)return this.renderDOM(e,t,n);switch(w){case k:case E:case s:case u:case h:case c:return e=ye(e.props.children),this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case m:throw Error(i(294));case b:throw Error(i(343))}if("object"===r(w)&&null!==w)switch(w.$$typeof){case d:q={};var x=w.render(e.props,e.ref);return x=ee(w.render,e.props,x,e.ref),x=ye(x),this.stack.push({type:null,domNamespace:n,children:x,childIndex:0,context:t,footer:""}),"";case v:return e=[a.createElement(w.type,o({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),"";case f:return n={type:e,domNamespace:n,children:w=ye(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(n),"";case p:w=e.type,x=e.props;var S=this.threadID;return L(w,S),w=ye(x.children(w[S])),this.stack.push({type:e,domNamespace:n,children:w,childIndex:0,context:t,footer:""}),"";case g:throw Error(i(338));case y:return w=(x=(w=e.type)._init)(w._payload),e=[a.createElement(w,o({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:n,children:e,childIndex:0,context:t,footer:""}),""}throw Error(i(130,null==w?w:r(w),""))},t.renderDOM=function(e,t,n){var l=e.type.toLowerCase();if(n===se&&ue(l),!Ee.hasOwnProperty(l)){if(!be.test(l))throw Error(i(65,l));Ee[l]=!0}var c=e.props;if("input"===l)c=o({type:void 0},c,{defaultChecked:void 0,defaultValue:void 0,value:null!=c.value?c.value:c.defaultValue,checked:null!=c.checked?c.checked:c.defaultChecked});else if("textarea"===l){var s=c.value;if(null==s){s=c.defaultValue;var u=c.children;if(null!=u){if(null!=s)throw Error(i(92));if(Array.isArray(u)){if(!(1>=u.length))throw Error(i(93));u=u[0]}s=""+u}null==s&&(s="")}c=o({},c,{value:void 0,children:""+s})}else if("select"===l)this.currentSelectValue=null!=c.value?c.value:c.defaultValue,c=o({},c,{value:void 0});else if("option"===l){u=this.currentSelectValue;var f=function(e){if(null==e)return e;var t="";return a.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(c.children);if(null!=u){var p=null!=c.value?c.value+"":f;if(s=!1,Array.isArray(u)){for(var d=0;d<u.length;d++)if(""+u[d]===p){s=!0;break}}else s=""+u===p;c=o({selected:void 0,children:void 0},c,{selected:s,children:f})}}if(s=c){if(pe[l]&&(null!=s.children||null!=s.dangerouslySetInnerHTML))throw Error(i(137,l));if(null!=s.dangerouslySetInnerHTML){if(null!=s.children)throw Error(i(60));if("object"!==r(s.dangerouslySetInnerHTML)||!("__html"in s.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=s.style&&"object"!==r(s.style))throw Error(i(62))}s=c,u=this.makeStaticMarkup,f=1===this.stack.length,p="<"+e.type;e:if(-1===l.indexOf("-"))d="string"==typeof s.is;else switch(l){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":d=!1;break e;default:d=!0}for(k in s)if(xe.call(s,k)){var m=s[k];if(null!=m){if("style"===k){var h=void 0,v="",y="";for(h in m)if(m.hasOwnProperty(h)){var w=0===h.indexOf("--"),g=m[h];if(null!=g){if(w)var b=h;else if(b=h,ke.hasOwnProperty(b))b=ke[b];else{var E=b.replace(he,"-$1").toLowerCase().replace(ve,"-ms-");b=ke[b]=E}v+=y+b+":",y=h,v+=w=null==g||"boolean"==typeof g||""===g?"":w||"number"!=typeof g||0===g||de.hasOwnProperty(y)&&de[y]?(""+g).trim():g+"px",y=";"}}m=v||null}h=null,d?Se.hasOwnProperty(k)||(h=P(h=k)&&null!=m?h+'="'+z(m)+'"':""):h=T(k,m),h&&(p+=" "+h)}}u||f&&(p+=' data-reactroot=""');var k=p;s="",fe.hasOwnProperty(l)?k+="/>":(k+=">",s="</"+e.type+">");e:{if(null!=(u=c.dangerouslySetInnerHTML)){if(null!=u.__html){u=u.__html;break e}}else if("string"==typeof(u=c.children)||"number"==typeof u){u=z(u);break e}u=null}return null!=u?(c=[],ge.hasOwnProperty(l)&&"\n"===u.charAt(0)&&(k+="\n"),k+=u):c=ye(c.children),e=e.type,n=null==n||"http://www.w3.org/1999/xhtml"===n?ue(e):"http://www.w3.org/2000/svg"===n&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":n,this.stack.push({domNamespace:n,type:l,children:c,childIndex:0,context:t,footer:s}),this.previousWasTextNode=!1,k},e}();t.renderToString=function(e,t){e=new Le(e,!1,t);try{return e.read(1/0)}finally{e.destroy()}}},956:(e,t,n)=>{e.exports=n(954)},758:(e,t,n)=>{var r=n(341);e.exports=function(e){var t=r.useState(e),n=t[0],o=t[1],a=r.useRef(n);return[n,r.useCallback((function(e){a.current=function(e){return"function"==typeof e}(e)?e(a.current):e,o(a.current)}),[]),a]}},340:(e,t,n)=>{function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}var o=n(257),a=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var l=60109,c=60110,s=60112;t.Suspense=60113;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),i=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),l=p("react.provider"),c=p("react.context"),s=p("react.forward_ref"),t.Suspense=p("react.suspense"),u=p("react.memo"),f=p("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function y(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||h}function w(){}function g(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==r(e)&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=y.prototype;var b=g.prototype=new w;b.constructor=g,o(b,y.prototype),b.isPureReactComponent=!0;var E={current:null},k=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var r,o={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,r)&&!x.hasOwnProperty(r)&&(o[r]=t[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var s=Array(c),u=0;u<c;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:a,type:e,key:i,ref:l,props:o,_owner:E.current}}function N(e){return"object"===r(e)&&null!==e&&e.$$typeof===a}var C=/\/+/g;function L(e,t){return"object"===r(e)&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,n,o,l){var c=r(e);"undefined"!==c&&"boolean"!==c||(e=null);var s=!1;if(null===e)s=!0;else switch(c){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case a:case i:s=!0}}if(s)return l=l(s=e),e=""===o?"."+L(s,0):o,Array.isArray(l)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),_(l,t,n,"",(function(e){return e}))):null!=l&&(N(l)&&(l=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(l,n+(!l.key||s&&s.key===l.key?"":(""+l.key).replace(C,"$&/")+"/")+e)),t.push(l)),1;if(s=0,o=""===o?".":o+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=o+L(c=e[u],u);s+=_(c,t,n,f,l)}else if(f=function(e){return null===e||"object"!==r(e)?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),u=0;!(c=e.next()).done;)s+=_(c=c.value,t,n,f=o+L(c,u++),l);else if("object"===c)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function F(e,t,n){if(null==e)return e;var r=[],o=0;return _(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function O(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var I={current:null};function M(){var e=I.current;if(null===e)throw Error(m(321));return e}var D={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:E,IsSomeRendererActing:{current:!1},assign:o};t.Children={map:F,forEach:function(e,t,n){F(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return F(e,(function(){t++})),t},toArray:function(e){return F(e,(function(e){return e}))||[]},only:function(e){if(!N(e))throw Error(m(143));return e}},t.Component=y,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,t.cloneElement=function(e,t,n){if(null==e)throw Error(m(267,e));var r=o({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=E.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)k.call(t,u)&&!x.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){s=Array(u);for(var f=0;f<u;f++)s[f]=arguments[f+2];r.children=s}return{$$typeof:a,type:e.type,key:i,ref:l,props:r,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:c,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=N,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return M().useCallback(e,t)},t.useContext=function(e,t){return M().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return M().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return M().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return M().useLayoutEffect(e,t)},t.useMemo=function(e,t){return M().useMemo(e,t)},t.useReducer=function(e,t,n){return M().useReducer(e,t,n)},t.useRef=function(e){return M().useRef(e)},t.useState=function(e){return M().useState(e)},t.version="17.0.2"},341:(e,t,n)=>{e.exports=n(340)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(341),t=n(956);const r=require("router");var o=n.n(r);const a=require("appData");var i=n.n(a);const l=function(){return e.createElement("form",{method:"get",action:"/sok.4.1ec403e918a983e77b927259.html",style:{display:"none"},className:"search-mob w-form"},e.createElement("label",{htmlFor:"search-mob",className:"field-label"},"Search"),e.createElement("div",{className:"search-box-mobile-wrapper"},e.createElement("input",{type:"search",className:"search-input is-mobile w-input",maxLength:256,name:"query",placeholder:"Søk",id:"search-mob",required:!0}),e.createElement("input",{type:"submit",defaultValue:"",className:"search-button is-mobile w-button"})))};const c=function(){return e.createElement("div",{className:"menu-mob w-nav-button"},e.createElement("div",{className:"icon-embed-custom-3 w-embed"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 30 18",fill:"none",preserveAspectRatio:"xMidYMid meet","aria-hidden":"true",role:"img"},e.createElement("path",{d:"M0 1.2041H30",stroke:"currentColor",strokeWidth:2}),e.createElement("path",{d:"M0 8.7041H30",stroke:"currentColor",strokeWidth:2}),e.createElement("path",{d:"M0 16.2041H30",stroke:"currentColor",strokeWidth:2}))))};const s=function(){return e.createElement("div",{"data-w-id":"348d40d7-fd14-b770-e6cd-1573ef073efe",className:"mobile_search-form-open"},e.createElement("div",{className:"icon-embed-custom-2 w-embed"},e.createElement("svg",{width:18,height:19,viewBox:"0 0 18 19",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M14.2049 13.6561L18 17.4503L16.7462 18.7041L12.952 14.909C11.5402 16.0407 9.78419 16.6563 7.9748 16.6537C3.57271 16.6537 0 13.081 0 8.6789C0 4.27681 3.57271 0.704102 7.9748 0.704102C12.3769 0.704102 15.9496 4.27681 15.9496 8.6789C15.9522 10.4883 15.3366 12.2443 14.2049 13.6561ZM12.4274 12.9986C13.5519 11.8421 14.18 10.292 14.1774 8.6789C14.1774 5.25239 11.4013 2.47628 7.9748 2.47628C4.54829 2.47628 1.77218 5.25239 1.77218 8.6789C1.77218 12.1054 4.54829 14.8815 7.9748 14.8815C9.58786 14.8841 11.138 14.256 12.2945 13.1315L12.4274 12.9986Z",fill:"currentColor"}))))};const u=function(){return e.createElement("a",{href:"#",className:"button is-transparent w-inline-block"},e.createElement("div",{className:"icon-embed-custom-2 w-embed"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 15 10",fill:"none",preserveAspectRatio:"xMidYMid meet","aria-hidden":"true",role:"img"},e.createElement("path",{d:"M10.6542 0.5L9.6885 1.47297L12.465 4.39189H0.272705V5.60811H12.465L9.6885 8.52703L10.6542 9.5L14.155 5.97297L15 5L14.155 4.14865L10.6542 0.5Z",fill:"currentColor"}))),e.createElement("div",null,"Logg inn"))};const f=function(t){var n=t.link;return e.createElement("a",{href:n.properties.URL,className:"navigation-column-title-mob"},e.createElement("div",{className:"nav-title"},"Aksjehandel på nett"),e.createElement("div",{className:"icon-embed-custom-4 w-embed"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 17 11",fill:"none",preserveAspectRatio:"xMidYMid meet","aria-hidden":"true",role:"img"},e.createElement("path",{d:"M12.1216 0.5L11.0405 1.58108L14.1486 4.82432H0.5V6.17567H14.1486L11.0405 9.41892L12.1216 10.5L16.0405 6.58108L16.9865 5.5L16.0405 4.55405L12.1216 0.5Z",fill:"currentColor"}))))};const p=function(t){var n=t.menuItems,r=t.subMenuItems;return e.useEffect((function(){window.Webflow&&window.Webflow.destroy(),window.Webflow&&window.Webflow.ready()}),[n,r]),e.createElement("nav",{role:"navigation",className:"mobile-nav w-nav-menu"},n.map((function(t){var n=r[t.properties.ggParentChildId]||null;if("sv:link"===t.type)return"Link"===t.properties.ggLinkType?e.createElement("a",{href:t.properties.URL,className:"mobile-nav-link w-nav-link"},t.name):e.createElement("div",{"data-delay":0,"data-hover":"false",className:"mobile-dropdown w-dropdown"},e.createElement("div",{className:"mobile-toggle w-dropdown-toggle"},e.createElement("div",{className:"w-icon-dropdown-toggle"}),e.createElement("div",null,t.name)),n&&"Dropdown"===n.type?e.createElement("nav",{className:"dropdown-list-simple-mob w-dropdown-list"},n.items.map((function(t){return e.createElement("a",{href:t.properties.URL,className:"navigation-link-block-mob w-inline-block"},e.createElement("div",{className:"nav-dd-link"},t.name))}))):n&&"Megamenu"===n.type?e.createElement("nav",{className:"dropdown-list-mob w-dropdown-list"},e.createElement("div",{className:"dropdown-list-wrapper-mob"},n.columns.map((function(t){return e.createElement("div",{className:"navigation-column-mob"},e.createElement(f,{link:t[0]}),e.createElement("div",{className:"nav-content-wrap-mob"},t.slice(1).map((function(t){return e.createElement("a",{href:t.properties.URL,className:"navigation-link-block-mob w-inline-block"},e.createElement("div",{className:"nav-dd-link"},t.name))}))))})))):"")})))};const d=function(t){var n=t.link;return e.createElement("a",{href:n.properties.URL,className:"navigation-column-title"},e.createElement("div",{className:"nav-title"},n.name),e.createElement("div",{className:"icon-embed-custom-4 w-embed"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 17 11",fill:"none",preserveAspectRatio:"xMidYMid meet","aria-hidden":"true",role:"img"},e.createElement("path",{d:"M12.1216 0.5L11.0405 1.58108L14.1486 4.82432H0.5V6.17567H14.1486L11.0405 9.41892L12.1216 10.5L16.0405 6.58108L16.9865 5.5L16.0405 4.55405L12.1216 0.5Z",fill:"currentColor"}))))};const m=function(t){var n=t.menuItems,r=t.subMenuItems;return e.useEffect((function(){window.Webflow&&window.Webflow.destroy(),window.Webflow&&window.Webflow.ready()}),[n,r]),e.createElement("nav",{role:"navigation",className:"nav-menu w-nav-menu"},n.map((function(t){var n=r[t.properties.ggParentChildId]||null;if("sv:link"===t.type)return"Link"===t.properties.ggLinkType?e.createElement("a",{href:t.properties.URL,className:"navigation-link w-nav-link"},t.name):e.createElement("div",{"data-hover":"true","data-delay":150,className:"dropdown w-dropdown"},e.createElement("div",{className:"dropdown-toggle w-dropdown-toggle"},e.createElement("div",{className:"drop-arrow-plain w-icon-dropdown-toggle"}),e.createElement("div",{className:"dropdown-trigger-text"},t.name)),n&&"Dropdown"===n.type?e.createElement("nav",{className:"dropdown-list w-dropdown-list"},n.items.map((function(t){return e.createElement("a",{href:t.properties.URL,className:"navigation-link-block w-inline-block"},e.createElement("div",{className:"nav-dd-link"},t.name))}))):n&&"Megamenu"===n.type?e.createElement("nav",{className:"dropdown-list-megamenu w-dropdown-list"},e.createElement("div",{className:"dropdown-list-full-wrapper"},e.createElement("div",{className:"navigation-drop-container"},n.columns.map((function(t){return e.createElement("div",{className:"navigation-column"},e.createElement(d,{link:t[0]}),e.createElement("div",{className:"nav-content-wrap"},t.slice(1).map((function(t){return e.createElement("a",{href:t.properties.URL,className:"navigation-link-block w-inline-block"},e.createElement("div",{className:"nav-dd-link"},t.name))}))))}))))):"")})))};const h=function(){return e.createElement("form",{method:"get",action:"/sok.4.1ec403e918a983e77b927259.html",className:"search w-form"},e.createElement("input",{type:"submit",defaultValue:"Search",className:"search-button w-button"}),e.createElement("label",{htmlFor:"search",className:"field-label"},"Search"),e.createElement("input",{type:"search",className:"search-input w-input",maxLength:256,name:"query",placeholder:"Søk",id:"search",required:!0}))};const v=function(){return e.createElement("a",{href:"https://login.paretosec.com/no/Account/Login",className:"button is-transparent w-inline-block"},e.createElement("div",{className:"icon-embed-custom-2 w-embed"},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",viewBox:"0 0 15 10",fill:"none",preserveAspectRatio:"xMidYMid meet","aria-hidden":"true",role:"img"},e.createElement("path",{d:"M10.6542 0.5L9.6885 1.47297L12.465 4.39189H0.272705V5.60811H12.465L9.6885 8.52703L10.6542 9.5L14.155 5.97297L15 5L14.155 4.14865L10.6542 0.5Z",fill:"currentColor"}))),e.createElement("div",null,"Logg inn"))},y=require("requester");var w=n.n(y),g=n(758),b=n.n(g),E=function(){return E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},E.apply(this,arguments)},k=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))},x="https://use-pareto.sitevision-cloud.se/rest-api/1/0",S="/nodes?format=json&json=%7B%22properties%22%3A%5B%22*%22%5D%7D";const N=function(t){t.message,t.name;var n=b()([]),r=n[1],o=n[2],a=b()({}),i=a[1],f=a[2],d=function(e,t,n){return w().doGet({url:e}).then((function(e){console.log(e);var o=e;if("Link"===t)return r(o),e;if("Dropdown"===t){if(!n)return;i((function(e){var t;return E(E({},e),((t={})[n]={type:"Dropdown",items:o},t))}))}else if("Megamenu"===t){if(!n)return;if(Object.keys(f.current).includes(n)){var a=f.current[n];i((function(e){var t;return E(E({},e),((t={})[n]=E(E({},a),{columns:k(k([],a.columns,!0),[o],!1)}),t))}))}else i((function(e){var t;return E(E({},e),((t={})[n]={type:"Megamenu",columns:[o]},t))}))}})).catch((function(e){console.log(e)}))},y=function(e){e.map((function(e){"sv:folder"===e.type&&("Dropdown"===e.properties.ggLinkType?d(x+e.path+S,"Dropdown",e.properties.ggParentChildId).then((function(){return console.log(f.current)})):"Megamenu"===e.properties.ggLinkType&&w().doGet({url:x+e.path+"/nodes"}).then((function(t){t.map((function(t){return d(x+t.path+S,"Megamenu",e.properties.ggParentChildId).then((function(){return console.log(f.current)}))}))})).catch((function(e){return console.log(e)})))}))};return e.useEffect((function(){d("https://use-pareto.sitevision-cloud.se/rest-api/1/0/Pareto%20AS/Page%20Repository/Site%20Page/main-menu/nodes?format=json&json=%7B%22properties%22%3A%5B%22*%22%5D%7D","Link").then((function(e){return y(e)}))}),[]),e.createElement(e.Fragment,null,e.createElement("div",{className:"navigation-wrap"},e.createElement("div",{"data-collapse":"medium","data-animation":"default","data-duration":400,style:{backgroundColor:"rgba(255,255,255,0)"},"data-easing":"ease","data-easing2":"ease",role:"banner",className:"navigation w-nav"},e.createElement("div",{className:"navigation-full"},e.createElement("div",{className:"navigation-container"},e.createElement("div",{className:"navigation-left"},e.createElement("a",{href:"/",className:"brand w-nav-brand"},e.createElement("img",{src:"https://use-pareto.sitevision-cloud.se/images/18.1411d29318a26018f962db38/1693492056924/pareto-Logo.svg",loading:"lazy",alt:"Pareto Securities Logo"})),e.createElement(m,{menuItems:o.current,subMenuItems:f.current})),e.createElement("div",{className:"navigation-right"},e.createElement(h,null),e.createElement(v,null),e.createElement("a",{href:"https://paretosec.com/no/bli-kunde",target:"_blank",className:"button w-button"},"Bli kunde"))))),e.createElement("div",{"data-collapse":"all","data-animation":"default","data-duration":400,"data-easing":"ease-out","data-easing2":"ease-out",role:"banner",className:"navigation-mob w-nav"},e.createElement("div",{className:"navigation-container-mob"},e.createElement("a",{href:"/","aria-current":"page",className:"brand-2 w-nav-brand w--current"},e.createElement("img",{src:"https://use-pareto.sitevision-cloud.se/images/18.1411d29318a26018f962db39/1693492056942/pareto-mobile-logo.svg",alt:"Pareto Securities Logo",className:"mobile-logo"})),e.createElement(p,{menuItems:o.current,subMenuItems:f.current}),e.createElement("div",{className:"spacer-h"}),e.createElement(u,null),e.createElement(s,null),e.createElement(c,null))),e.createElement(l,null),e.createElement("div",{"data-w-id":"60fed403-f4fb-0814-b602-51d5dbefbbfd",className:"mobile-search-underlay"})))};o().get("/",(function(n,r){var o="Hello, world!",a=i().get("name");r.agnosticRender((0,t.renderToString)(e.createElement(N,{message:o,name:a})),{message:o,name:a})}))})()})();
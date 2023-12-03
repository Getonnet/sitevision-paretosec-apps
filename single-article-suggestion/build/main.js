/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
define(["react","react-dom","requester"], function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__, __WEBPACK_EXTERNAL_MODULE__sitevision_api_client_requester__) { return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App/App.scss":
/*!*************************************!*\
  !*** ./src/components/App/App.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"container\":\"tbVCyJlW_OquAPeUHwRP\",\"text\":\"rXk4ZrCgI1f2zor11F3v\",\"title\":\"AkvL7G4dWfuMaSBOH853\",\"icon\":\"yFjKSQ7fdVHb5zlK_S3M\"});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHAvQXBwLnNjc3MiLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5nbGUtYXJ0aWNsZS1zdWdnZXN0aW9uLy4vc3JjL2NvbXBvbmVudHMvQXBwL0FwcC5zY3NzPzFiZGEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJjb250YWluZXJcIjpcInRiVkN5SmxXX09xdUFQZVVId1JQXCIsXCJ0ZXh0XCI6XCJyWGs0WnJDZ0kxZjJ6b3IxMUYzdlwiLFwidGl0bGVcIjpcIkFrdkw3RzRkV2Z1TWFTQk9IODUzXCIsXCJpY29uXCI6XCJ5RmpLU1E3ZmRWSGI1emxLX1MzTVwifTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/App/App.scss\n");

/***/ }),

/***/ "./node_modules/react-usestateref/dist/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-usestateref/dist/index.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar isFunction = function (setStateAction) {\n    return typeof setStateAction === \"function\";\n};\nvar useStateRef = function (initialState) {\n    var _a = react_1.useState(initialState), state = _a[0], setState = _a[1];\n    var ref = react_1.useRef(state);\n    var dispatch = react_1.useCallback(function (setStateAction) {\n        ref.current = isFunction(setStateAction) ? setStateAction(ref.current) : setStateAction;\n        setState(ref.current);\n    }, []);\n    return [state, dispatch, ref];\n};\nmodule.exports = useStateRef;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcmVhY3QtdXNlc3RhdGVyZWYvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5nbGUtYXJ0aWNsZS1zdWdnZXN0aW9uLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXVzZXN0YXRlcmVmL2Rpc3QvaW5kZXguanM/YjFhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbnZhciByZWFjdF8xID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAoc2V0U3RhdGVBY3Rpb24pIHtcbiAgICByZXR1cm4gdHlwZW9mIHNldFN0YXRlQWN0aW9uID09PSBcImZ1bmN0aW9uXCI7XG59O1xudmFyIHVzZVN0YXRlUmVmID0gZnVuY3Rpb24gKGluaXRpYWxTdGF0ZSkge1xuICAgIHZhciBfYSA9IHJlYWN0XzEudXNlU3RhdGUoaW5pdGlhbFN0YXRlKSwgc3RhdGUgPSBfYVswXSwgc2V0U3RhdGUgPSBfYVsxXTtcbiAgICB2YXIgcmVmID0gcmVhY3RfMS51c2VSZWYoc3RhdGUpO1xuICAgIHZhciBkaXNwYXRjaCA9IHJlYWN0XzEudXNlQ2FsbGJhY2soZnVuY3Rpb24gKHNldFN0YXRlQWN0aW9uKSB7XG4gICAgICAgIHJlZi5jdXJyZW50ID0gaXNGdW5jdGlvbihzZXRTdGF0ZUFjdGlvbikgPyBzZXRTdGF0ZUFjdGlvbihyZWYuY3VycmVudCkgOiBzZXRTdGF0ZUFjdGlvbjtcbiAgICAgICAgc2V0U3RhdGUocmVmLmN1cnJlbnQpO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gW3N0YXRlLCBkaXNwYXRjaCwgcmVmXTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHVzZVN0YXRlUmVmO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-usestateref/dist/index.js\n");

/***/ }),

/***/ "./src/components/App/App.tsx":
/*!************************************!*\
  !*** ./src/components/App/App.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.scss */ \"./src/components/App/App.scss\");\n/* harmony import */ var _sitevision_api_client_requester__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sitevision/api/client/requester */ \"@sitevision/api/client/requester\");\n/* harmony import */ var _sitevision_api_client_requester__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sitevision_api_client_requester__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_usestateref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-usestateref */ \"./node_modules/react-usestateref/dist/index.js\");\n/* harmony import */ var react_usestateref__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_usestateref__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst App = ({ articleId }) => {\n    console.log(\"article data =>\");\n    console.log(articleId);\n    const [, setArticle, article] = react_usestateref__WEBPACK_IMPORTED_MODULE_3___default()({});\n    const [, setArticleImg, articleImg] = react_usestateref__WEBPACK_IMPORTED_MODULE_3___default()(\"\");\n    const getFeaturedImageFromId = (aId, imgId) => {\n        _sitevision_api_client_requester__WEBPACK_IMPORTED_MODULE_2___default().doGet({\n            url: `/rest-api/1/0/${imgId}/properties`,\n            data: {\n                properties: [\"URL\"],\n            },\n        })\n            // @ts-ignore\n            .then((res) => setArticleImg(res.URL))\n            .catch((e) => {\n            console.log(e);\n        });\n    };\n    const fetchArticle = () => {\n        _sitevision_api_client_requester__WEBPACK_IMPORTED_MODULE_2___default().doGet({\n            url: `/rest-api/1/0/${articleId}/properties`,\n            data: {\n                properties: [\"shortId\", \"SV.Title\", \"SV.Image\"],\n            },\n        })\n            .then((res) => {\n            const data = res;\n            setArticle(data);\n            getFeaturedImageFromId(data.shortId, data[\"SV.Image\"]);\n        })\n            .catch((e) => console.log(e));\n    };\n    react__WEBPACK_IMPORTED_MODULE_0__.useEffect(() => {\n        // fetch article data\n        fetchArticle();\n    }, []);\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, article.current ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"article\", { className: _App_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].container },\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: _App_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].thumbnail, style: {\n                backgroundImage: `url(${articleImg.current ||\n                    \"https://use-pareto.sitevision-cloud.se/images/18.4857b8d018b84b042083f70c/1699347304043/Valutarisiko-169.jpg\"})`,\n                backgroundSize: \"cover\",\n            } }),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: _App_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].content },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", { className: _App_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].text }, \"Les ogs\\u00E5\"),\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h2\", { className: _App_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title },\n                \"Pr\\u00F8v oss ut i tre m\\u00E5neder med v\\u00E5re beste betingelser, full analysetilgang og popul\\u00E6re Infront Web Trader.\",\n                \" \",\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", { className: _App_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].icon }, \"\\u2192\"))))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"article\", { className: _App_scss__WEBPACK_IMPORTED_MODULE_1__[\"default\"].container }, \"Laster inn...\"))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHAvQXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NpbmdsZS1hcnRpY2xlLXN1Z2dlc3Rpb24vLi9zcmMvY29tcG9uZW50cy9BcHAvQXBwLnRzeD84Yzg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9BcHAuc2Nzc1wiO1xuaW1wb3J0IHJlcXVlc3RlciBmcm9tIFwiQHNpdGV2aXNpb24vYXBpL2NsaWVudC9yZXF1ZXN0ZXJcIjtcbmltcG9ydCB1c2VTdGF0ZSBmcm9tIFwicmVhY3QtdXNlc3RhdGVyZWZcIjtcbmNvbnN0IEFwcCA9ICh7IGFydGljbGVJZCB9KSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJhcnRpY2xlIGRhdGEgPT5cIik7XG4gICAgY29uc29sZS5sb2coYXJ0aWNsZUlkKTtcbiAgICBjb25zdCBbLCBzZXRBcnRpY2xlLCBhcnRpY2xlXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbLCBzZXRBcnRpY2xlSW1nLCBhcnRpY2xlSW1nXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IGdldEZlYXR1cmVkSW1hZ2VGcm9tSWQgPSAoYUlkLCBpbWdJZCkgPT4ge1xuICAgICAgICByZXF1ZXN0ZXJcbiAgICAgICAgICAgIC5kb0dldCh7XG4gICAgICAgICAgICB1cmw6IGAvcmVzdC1hcGkvMS8wLyR7aW1nSWR9L3Byb3BlcnRpZXNgLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcIlVSTFwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiBzZXRBcnRpY2xlSW1nKHJlcy5VUkwpKVxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBmZXRjaEFydGljbGUgPSAoKSA9PiB7XG4gICAgICAgIHJlcXVlc3RlclxuICAgICAgICAgICAgLmRvR2V0KHtcbiAgICAgICAgICAgIHVybDogYC9yZXN0LWFwaS8xLzAvJHthcnRpY2xlSWR9L3Byb3BlcnRpZXNgLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHByb3BlcnRpZXM6IFtcInNob3J0SWRcIiwgXCJTVi5UaXRsZVwiLCBcIlNWLkltYWdlXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXM7XG4gICAgICAgICAgICBzZXRBcnRpY2xlKGRhdGEpO1xuICAgICAgICAgICAgZ2V0RmVhdHVyZWRJbWFnZUZyb21JZChkYXRhLnNob3J0SWQsIGRhdGFbXCJTVi5JbWFnZVwiXSk7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUubG9nKGUpKTtcbiAgICB9O1xuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIGZldGNoIGFydGljbGUgZGF0YVxuICAgICAgICBmZXRjaEFydGljbGUoKTtcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCBhcnRpY2xlLmN1cnJlbnQgPyAoUmVhY3QuY3JlYXRlRWxlbWVudChcImFydGljbGVcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5jb250YWluZXIgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLnRodW1ibmFpbCwgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHthcnRpY2xlSW1nLmN1cnJlbnQgfHxcbiAgICAgICAgICAgICAgICAgICAgXCJodHRwczovL3VzZS1wYXJldG8uc2l0ZXZpc2lvbi1jbG91ZC5zZS9pbWFnZXMvMTguNDg1N2I4ZDAxOGI4NGIwNDIwODNmNzBjLzE2OTkzNDczMDQwNDMvVmFsdXRhcmlzaWtvLTE2OS5qcGdcIn0pYCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgICAgfSB9KSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLmNvbnRlbnQgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudGV4dCB9LCBcIkxlcyBvZ3NcXHUwMEU1XCIpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImgyXCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMudGl0bGUgfSxcbiAgICAgICAgICAgICAgICBcIlByXFx1MDBGOHYgb3NzIHV0IGkgdHJlIG1cXHUwMEU1bmVkZXIgbWVkIHZcXHUwMEU1cmUgYmVzdGUgYmV0aW5nZWxzZXIsIGZ1bGwgYW5hbHlzZXRpbGdhbmcgb2cgcG9wdWxcXHUwMEU2cmUgSW5mcm9udCBXZWIgVHJhZGVyLlwiLFxuICAgICAgICAgICAgICAgIFwiIFwiLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMuaWNvbiB9LCBcIlxcdTIxOTJcIikpKSkpIDogKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMuY29udGFpbmVyIH0sIFwiTGFzdGVyIGlubi4uLlwiKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/App/App.tsx\n");

/***/ }),

/***/ "./src/components/App/index.tsx":
/*!**************************************!*\
  !*** ./src/components/App/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/components/App/App.tsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHAvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaW5nbGUtYXJ0aWNsZS1zdWdnZXN0aW9uLy4vc3JjL2NvbXBvbmVudHMvQXBwL2luZGV4LnRzeD9lM2E2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9BcHBcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/App/index.tsx\n");

/***/ }),

/***/ "./src/main.tsx":
/*!**********************!*\
  !*** ./src/main.tsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ \"./src/components/App/index.tsx\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((initialState, el) => {\n    react_dom__WEBPACK_IMPORTED_MODULE_1___default().hydrate(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { articleId: initialState.articleId }), el);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2luZ2xlLWFydGljbGUtc3VnZ2VzdGlvbi8uL3NyYy9tYWluLnRzeD9iMDA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcbmV4cG9ydCBkZWZhdWx0IChpbml0aWFsU3RhdGUsIGVsKSA9PiB7XG4gICAgUmVhY3RET00uaHlkcmF0ZShSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwgeyBhcnRpY2xlSWQ6IGluaXRpYWxTdGF0ZS5hcnRpY2xlSWQgfSksIGVsKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ }),

/***/ "@sitevision/api/client/requester":
/*!****************************!*\
  !*** external "requester" ***!
  \****************************/
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__sitevision_api_client_requester__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.tsx");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});;
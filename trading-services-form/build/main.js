/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
define(["react","react-dom"], function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) { return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/App/App.tsx":
/*!************************************!*\
  !*** ./src/components/App/App.tsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\nconst APIurl = \"https://secure.infrontservices.com/cgi/IFMail.dll/DemoReg\";\nconst MobileDefaults = {\n    ReferrerPage: \"Pareto-appen til iPhone/iPad/Android\",\n    ProviderDir: \"PARL\",\n    OwnerBroker: \"PARB\",\n    BrokerCountry: \"47\",\n    Professional: \"1\",\n};\n// const MobileApiUrl =\n//   \"https://secure.infrontservices.com/cgi/IFMail.dll/DemoReg\";\nconst WebDefaults = {\n    ReferrerPage: \"Web Trader\",\n    ProviderDir: \"PARL\",\n    OwnerBroker: \"PARB\",\n    BrokerCountry: \"47\",\n    Professional: \"1\",\n};\n// const WebApiUrl = \"https://secure.infrontservices.com/cgi/IFMail.dll/DemoReg\";\n// const activeUrl = \"https://secure.infrontservices.com/cgi/IFMail.dll/DemoReg\";\nconst ActiveDefaults = {\n    ReferrerPage: \"Infront Active Trader\",\n    ProviderDir: \"PAR\",\n    OwnerBroker: \"PAR\",\n    BrokerCountry: \"47\",\n    Professional: \"1\",\n};\nconst App = ({ formType }) => {\n    const [formData, setFormData] = react__WEBPACK_IMPORTED_MODULE_0__.useState({\n        firstname: \"\",\n        lastname: \"\",\n        address: \"\",\n        country: \"\",\n        phone: \"\",\n        submit_by: \"\",\n        addinfo: \"\",\n    });\n    const handleChange = (e) => {\n        setFormData(Object.assign(Object.assign({}, formData), { [e.target.id]: e.target.value }));\n    };\n    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {\n        e.preventDefault();\n        try {\n            const response = yield fetch(APIurl, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/x-www-form-urlencoded\",\n                },\n                body: new URLSearchParams(Object.assign(Object.assign({}, formData), (formType === \"mobile\"\n                    ? MobileDefaults\n                    : formType === \"web\"\n                        ? WebDefaults\n                        : ActiveDefaults))),\n            });\n            if (response.ok) {\n                console.log(\"OK!\");\n                typeof window !== \"undefined\" &&\n                    (window.location.href = \"../../Default.aspx?ID=128\");\n            }\n            else {\n                console.log(\"Network response was not ok.\");\n            }\n        }\n        catch (error) {\n            console.error(\"There was a problem with your fetch operation:\", error);\n        }\n    });\n    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"env-flex\" },\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"env-flex__item env-flex__item--length-1\" },\n            react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", { onSubmit: handleSubmit },\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"form-group\" },\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", { htmlFor: \"firstname\", className: \"control-label\" }, \"Fornavn\"),\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", { id: \"firstname\", className: \"form-control\", required: true, onChange: handleChange, value: formData.firstname })),\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"form-group\" },\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", { htmlFor: \"lastname\", className: \"control-label\" }, \"Etternavn\"),\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", { id: \"lastname\", className: \"form-control\", required: true, onChange: handleChange, value: formData.lastname })),\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"form-group\" },\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", { htmlFor: \"address\", className: \"control-label\" }, \"Adresse\"),\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", { id: \"address\", className: \"form-control\", required: true, onChange: handleChange, value: formData.address })),\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"form-group\" },\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", { htmlFor: \"country\", className: \"control-label\" }, \"Land\"),\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", { id: \"country\", className: \"form-control\", required: true, onChange: handleChange, value: formData.country })),\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"form-group\" },\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", { htmlFor: \"phone\", className: \"control-label\" }, \"Telefon\"),\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", { id: \"phone\", className: \"form-control\", required: true, onChange: handleChange, value: formData.phone })),\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"form-group\" },\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", { htmlFor: \"submit_by\", className: \"control-label\" }, \"E-post\"),\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", { id: \"submit_by\", className: \"form-control\", required: true, onChange: handleChange, value: formData.submit_by })),\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"form-group\" },\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", { htmlFor: \"addinfo\", className: \"control-label\" }, \"Kommentar\"),\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"textarea\", { id: \"addinfo\", className: \"form-control\", onChange: handleChange, value: formData.addinfo })),\n                react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"form-group\" },\n                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", { id: \"btnSubmit\", className: \"btn btn-info\" }, \"Submit\")))),\n        react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", { className: \"env-flex__item env-flex__item--length-1\" })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHAvQXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFkaW5nLXNlcnZpY2VzLWZvcm0vLi9zcmMvY29tcG9uZW50cy9BcHAvQXBwLnRzeD84Yzg5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5jb25zdCBBUEl1cmwgPSBcImh0dHBzOi8vc2VjdXJlLmluZnJvbnRzZXJ2aWNlcy5jb20vY2dpL0lGTWFpbC5kbGwvRGVtb1JlZ1wiO1xuY29uc3QgTW9iaWxlRGVmYXVsdHMgPSB7XG4gICAgUmVmZXJyZXJQYWdlOiBcIlBhcmV0by1hcHBlbiB0aWwgaVBob25lL2lQYWQvQW5kcm9pZFwiLFxuICAgIFByb3ZpZGVyRGlyOiBcIlBBUkxcIixcbiAgICBPd25lckJyb2tlcjogXCJQQVJCXCIsXG4gICAgQnJva2VyQ291bnRyeTogXCI0N1wiLFxuICAgIFByb2Zlc3Npb25hbDogXCIxXCIsXG59O1xuLy8gY29uc3QgTW9iaWxlQXBpVXJsID1cbi8vICAgXCJodHRwczovL3NlY3VyZS5pbmZyb250c2VydmljZXMuY29tL2NnaS9JRk1haWwuZGxsL0RlbW9SZWdcIjtcbmNvbnN0IFdlYkRlZmF1bHRzID0ge1xuICAgIFJlZmVycmVyUGFnZTogXCJXZWIgVHJhZGVyXCIsXG4gICAgUHJvdmlkZXJEaXI6IFwiUEFSTFwiLFxuICAgIE93bmVyQnJva2VyOiBcIlBBUkJcIixcbiAgICBCcm9rZXJDb3VudHJ5OiBcIjQ3XCIsXG4gICAgUHJvZmVzc2lvbmFsOiBcIjFcIixcbn07XG4vLyBjb25zdCBXZWJBcGlVcmwgPSBcImh0dHBzOi8vc2VjdXJlLmluZnJvbnRzZXJ2aWNlcy5jb20vY2dpL0lGTWFpbC5kbGwvRGVtb1JlZ1wiO1xuLy8gY29uc3QgYWN0aXZlVXJsID0gXCJodHRwczovL3NlY3VyZS5pbmZyb250c2VydmljZXMuY29tL2NnaS9JRk1haWwuZGxsL0RlbW9SZWdcIjtcbmNvbnN0IEFjdGl2ZURlZmF1bHRzID0ge1xuICAgIFJlZmVycmVyUGFnZTogXCJJbmZyb250IEFjdGl2ZSBUcmFkZXJcIixcbiAgICBQcm92aWRlckRpcjogXCJQQVJcIixcbiAgICBPd25lckJyb2tlcjogXCJQQVJcIixcbiAgICBCcm9rZXJDb3VudHJ5OiBcIjQ3XCIsXG4gICAgUHJvZmVzc2lvbmFsOiBcIjFcIixcbn07XG5jb25zdCBBcHAgPSAoeyBmb3JtVHlwZSB9KSA9PiB7XG4gICAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgICAgIGZpcnN0bmFtZTogXCJcIixcbiAgICAgICAgbGFzdG5hbWU6IFwiXCIsXG4gICAgICAgIGFkZHJlc3M6IFwiXCIsXG4gICAgICAgIGNvdW50cnk6IFwiXCIsXG4gICAgICAgIHBob25lOiBcIlwiLFxuICAgICAgICBzdWJtaXRfYnk6IFwiXCIsXG4gICAgICAgIGFkZGluZm86IFwiXCIsXG4gICAgfSk7XG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgc2V0Rm9ybURhdGEoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBmb3JtRGF0YSksIHsgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWUgfSkpO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGZldGNoKEFQSXVybCwge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyhPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZvcm1EYXRhKSwgKGZvcm1UeXBlID09PSBcIm1vYmlsZVwiXG4gICAgICAgICAgICAgICAgICAgID8gTW9iaWxlRGVmYXVsdHNcbiAgICAgICAgICAgICAgICAgICAgOiBmb3JtVHlwZSA9PT0gXCJ3ZWJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBXZWJEZWZhdWx0c1xuICAgICAgICAgICAgICAgICAgICAgICAgOiBBY3RpdmVEZWZhdWx0cykpKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJPSyFcIik7XG4gICAgICAgICAgICAgICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgICAgICAgICAod2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi4uLy4uL0RlZmF1bHQuYXNweD9JRD0xMjhcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5ldHdvcmsgcmVzcG9uc2Ugd2FzIG5vdCBvay5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHlvdXIgZmV0Y2ggb3BlcmF0aW9uOlwiLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZW52LWZsZXhcIiB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImVudi1mbGV4X19pdGVtIGVudi1mbGV4X19pdGVtLS1sZW5ndGgtMVwiIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCB7IG9uU3VibWl0OiBoYW5kbGVTdWJtaXQgfSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcImZpcnN0bmFtZVwiLCBjbGFzc05hbWU6IFwiY29udHJvbC1sYWJlbFwiIH0sIFwiRm9ybmF2blwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgaWQ6IFwiZmlyc3RuYW1lXCIsIGNsYXNzTmFtZTogXCJmb3JtLWNvbnRyb2xcIiwgcmVxdWlyZWQ6IHRydWUsIG9uQ2hhbmdlOiBoYW5kbGVDaGFuZ2UsIHZhbHVlOiBmb3JtRGF0YS5maXJzdG5hbWUgfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IGh0bWxGb3I6IFwibGFzdG5hbWVcIiwgY2xhc3NOYW1lOiBcImNvbnRyb2wtbGFiZWxcIiB9LCBcIkV0dGVybmF2blwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgaWQ6IFwibGFzdG5hbWVcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCByZXF1aXJlZDogdHJ1ZSwgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSwgdmFsdWU6IGZvcm1EYXRhLmxhc3RuYW1lIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcImFkZHJlc3NcIiwgY2xhc3NOYW1lOiBcImNvbnRyb2wtbGFiZWxcIiB9LCBcIkFkcmVzc2VcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IGlkOiBcImFkZHJlc3NcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCByZXF1aXJlZDogdHJ1ZSwgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSwgdmFsdWU6IGZvcm1EYXRhLmFkZHJlc3MgfSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZm9ybS1ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCB7IGh0bWxGb3I6IFwiY291bnRyeVwiLCBjbGFzc05hbWU6IFwiY29udHJvbC1sYWJlbFwiIH0sIFwiTGFuZFwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgaWQ6IFwiY291bnRyeVwiLCBjbGFzc05hbWU6IFwiZm9ybS1jb250cm9sXCIsIHJlcXVpcmVkOiB0cnVlLCBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLCB2YWx1ZTogZm9ybURhdGEuY291bnRyeSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgaHRtbEZvcjogXCJwaG9uZVwiLCBjbGFzc05hbWU6IFwiY29udHJvbC1sYWJlbFwiIH0sIFwiVGVsZWZvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHsgaWQ6IFwicGhvbmVcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCByZXF1aXJlZDogdHJ1ZSwgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSwgdmFsdWU6IGZvcm1EYXRhLnBob25lIH0pKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBcImZvcm0tZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgeyBodG1sRm9yOiBcInN1Ym1pdF9ieVwiLCBjbGFzc05hbWU6IFwiY29udHJvbC1sYWJlbFwiIH0sIFwiRS1wb3N0XCIpLFxuICAgICAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgeyBpZDogXCJzdWJtaXRfYnlcIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCByZXF1aXJlZDogdHJ1ZSwgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSwgdmFsdWU6IGZvcm1EYXRhLnN1Ym1pdF9ieSB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIHsgaHRtbEZvcjogXCJhZGRpbmZvXCIsIGNsYXNzTmFtZTogXCJjb250cm9sLWxhYmVsXCIgfSwgXCJLb21tZW50YXJcIiksXG4gICAgICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7IGlkOiBcImFkZGluZm9cIiwgY2xhc3NOYW1lOiBcImZvcm0tY29udHJvbFwiLCBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLCB2YWx1ZTogZm9ybURhdGEuYWRkaW5mbyB9KSksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogXCJmb3JtLWdyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7IGlkOiBcImJ0blN1Ym1pdFwiLCBjbGFzc05hbWU6IFwiYnRuIGJ0bi1pbmZvXCIgfSwgXCJTdWJtaXRcIikpKSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwiZW52LWZsZXhfX2l0ZW0gZW52LWZsZXhfX2l0ZW0tLWxlbmd0aC0xXCIgfSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/App/App.tsx\n");

/***/ }),

/***/ "./src/components/App/index.tsx":
/*!**************************************!*\
  !*** ./src/components/App/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport safe */ _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/components/App/App.tsx\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BcHAvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmFkaW5nLXNlcnZpY2VzLWZvcm0vLi9zcmMvY29tcG9uZW50cy9BcHAvaW5kZXgudHN4P2UzYTYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL0FwcFwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/App/index.tsx\n");

/***/ }),

/***/ "./src/main.tsx":
/*!**********************!*\
  !*** ./src/main.tsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/App */ \"./src/components/App/index.tsx\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((initialState, el) => {\n    react_dom__WEBPACK_IMPORTED_MODULE_1___default().hydrate(react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], { formType: initialState.formType }), el);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJhZGluZy1zZXJ2aWNlcy1mb3JtLy4vc3JjL21haW4udHN4P2IwMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEFwcCBmcm9tIFwiLi9jb21wb25lbnRzL0FwcFwiO1xuZXhwb3J0IGRlZmF1bHQgKGluaXRpYWxTdGF0ZSwgZWwpID0+IHtcbiAgICBSZWFjdERPTS5oeWRyYXRlKFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCB7IGZvcm1UeXBlOiBpbml0aWFsU3RhdGUuZm9ybVR5cGUgfSksIGVsKTtcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/main.tsx\n");

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
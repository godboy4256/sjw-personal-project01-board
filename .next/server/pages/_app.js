/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firebaseApp\": () => (/* binding */ firebaseApp),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_commons_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/commons/layout */ \"./src/components/commons/layout/index.tsx\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_commons_styles_globalStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/commons/styles/globalStyles */ \"./src/commons/styles/globalStyles.ts\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! apollo-upload-client */ \"apollo-upload-client\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([apollo_upload_client__WEBPACK_IMPORTED_MODULE_7__, firebase_app__WEBPACK_IMPORTED_MODULE_6__]);\n([apollo_upload_client__WEBPACK_IMPORTED_MODULE_7__, firebase_app__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyDkKksE3jmPd6mQxsfpLTtJ8sNX57cSxUs\",\n    authDomain: \"mysite1234-9ba99.firebaseapp.com\",\n    projectId: \"mysite1234-9ba99\",\n    storageBucket: \"mysite1234-9ba99.appspot.com\",\n    messagingSenderId: \"486288941499\",\n    appId: \"1:486288941499:web:e45ae91f62e2141abea49e\"\n};\nconst firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_6__.initializeApp)(firebaseConfig);\nfunction MyApp({ Component , pageProps  }) {\n    const uploadLink = (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_7__.createUploadLink)({\n        uri: \"http://backend05.codebootcamp.co.kr/graphql\"\n    });\n    const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({\n        link: _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloLink.from([\n            uploadLink\n        ]),\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache(),\n        connectToDevTools: true\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: client,\n        __source: {\n            fileName: \"/Users/macbook/Desktop/notice_board_sjw_project/pages/_app.tsx\",\n            lineNumber: 40,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.Global, {\n                styles: _src_commons_styles_globalStyles__WEBPACK_IMPORTED_MODULE_5__.globalStyles,\n                __source: {\n                    fileName: \"/Users/macbook/Desktop/notice_board_sjw_project/pages/_app.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_commons_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/macbook/Desktop/notice_board_sjw_project/pages/_app.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                    ...pageProps,\n                    __source: {\n                        fileName: \"/Users/macbook/Desktop/notice_board_sjw_project/pages/_app.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    },\n                    __self: this\n                })\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkI7QUFNSjtBQUU4QjtBQUNkO0FBQzBCO0FBR3JCO0FBQ1c7QUFFdkQsS0FBSyxDQUFDUyxjQUFjLEdBQUcsQ0FBQztJQUN0QkMsTUFBTSxFQUFFLENBQXlDO0lBQ2pEQyxVQUFVLEVBQUUsQ0FBa0M7SUFDOUNDLFNBQVMsRUFBRSxDQUFrQjtJQUM3QkMsYUFBYSxFQUFFLENBQThCO0lBQzdDQyxpQkFBaUIsRUFBRSxDQUFjO0lBQ2pDQyxLQUFLLEVBQUUsQ0FBMkM7QUFDcEQsQ0FBQztBQUVNLEtBQUssQ0FBQ0MsV0FBVyxHQUFHVCwyREFBYSxDQUFDRSxjQUFjO1NBRTlDUSxLQUFLLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUVDLFNBQVMsRUFBVyxDQUFDLEVBQUUsQ0FBQztJQUNsRCxLQUFLLENBQUNDLFVBQVUsR0FBR1osc0VBQWdCLENBQUMsQ0FBQztRQUNuQ2EsR0FBRyxFQUFFLENBQTZDO0lBQ3BELENBQUM7SUFFRCxLQUFLLENBQUNDLE1BQU0sR0FBRyxHQUFHLENBQUN0Qix3REFBWSxDQUFDLENBQUM7UUFDL0J1QixJQUFJLEVBQUVwQiwyREFBZSxDQUFDLENBQUNpQjtZQUFBQSxVQUFVO1FBQXlCLENBQUM7UUFDM0RLLEtBQUssRUFBRSxHQUFHLENBQUN4Qix5REFBYTtRQUN4QnlCLGlCQUFpQixFQUFFLElBQUk7SUFDekIsQ0FBQztJQUVELE1BQU0sdUVBQ0h4QiwwREFBYztRQUFDb0IsTUFBTSxFQUFFQSxNQUFNOzs7Ozs7OztpRkFDM0JqQixrREFBTTtnQkFBQ3NCLE1BQU0sRUFBRXJCLDBFQUFZOzs7Ozs7OztpRkFDM0JGLHNFQUFNOzs7Ozs7OytGQUNKYyxTQUFTO3VCQUFLQyxTQUFTOzs7Ozs7Ozs7OztBQUloQyxDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyZWVib2FyZF9mcm9udGVuZC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XG5pbXBvcnQge1xuICBBcG9sbG9DbGllbnQsXG4gIEluTWVtb3J5Q2FjaGUsXG4gIEFwb2xsb1Byb3ZpZGVyLFxuICBBcG9sbG9MaW5rLFxufSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9jb21tb25zL2xheW91dFwiO1xuaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgeyBnbG9iYWxTdHlsZXMgfSBmcm9tIFwiLi4vc3JjL2NvbW1vbnMvc3R5bGVzL2dsb2JhbFN0eWxlc1wiO1xuXG5cbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBjcmVhdGVVcGxvYWRMaW5rIH0gZnJvbSBcImFwb2xsby11cGxvYWQtY2xpZW50XCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5RGtLa3NFM2ptUGQ2bVF4c2ZwTFR0SjhzTlg1N2NTeFVzXCIsXG4gIGF1dGhEb21haW46IFwibXlzaXRlMTIzNC05YmE5OS5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcIm15c2l0ZTEyMzQtOWJhOTlcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJteXNpdGUxMjM0LTliYTk5LmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjQ4NjI4ODk0MTQ5OVwiLFxuICBhcHBJZDogXCIxOjQ4NjI4ODk0MTQ5OTp3ZWI6ZTQ1YWU5MWY2MmUyMTQxYWJlYTQ5ZVwiLFxufTtcblxuZXhwb3J0IGNvbnN0IGZpcmViYXNlQXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgdXBsb2FkTGluayA9IGNyZWF0ZVVwbG9hZExpbmsoe1xuICAgIHVyaTogXCJodHRwOi8vYmFja2VuZDA1LmNvZGVib290Y2FtcC5jby5rci9ncmFwaHFsXCIsXG4gIH0pO1xuXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIGxpbms6IEFwb2xsb0xpbmsuZnJvbShbdXBsb2FkTGluayBhcyB1bmtub3duIGFzIEFwb2xsb0xpbmtdKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcbiAgICBjb25uZWN0VG9EZXZUb29sczogdHJ1ZSxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPEdsb2JhbCBzdHlsZXM9e2dsb2JhbFN0eWxlc30gLz5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvQXBvbGxvUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIkFwb2xsb0NsaWVudCIsIkluTWVtb3J5Q2FjaGUiLCJBcG9sbG9Qcm92aWRlciIsIkFwb2xsb0xpbmsiLCJMYXlvdXQiLCJHbG9iYWwiLCJnbG9iYWxTdHlsZXMiLCJpbml0aWFsaXplQXBwIiwiY3JlYXRlVXBsb2FkTGluayIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiZmlyZWJhc2VBcHAiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInVwbG9hZExpbmsiLCJ1cmkiLCJjbGllbnQiLCJsaW5rIiwiZnJvbSIsImNhY2hlIiwiY29ubmVjdFRvRGV2VG9vbHMiLCJzdHlsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./src/commons/styles/globalStyles.ts":
/*!********************************************!*\
  !*** ./src/commons/styles/globalStyles.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"globalStyles\": () => (/* binding */ globalStyles)\n/* harmony export */ });\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst globalStyles = _emotion_react__WEBPACK_IMPORTED_MODULE_0__.css`\n  * {\n    margin: 0px;\n    box-sizing: border-box;\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tbW9ucy9zdHlsZXMvZ2xvYmFsU3R5bGVzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvQztBQUU3QixLQUFLLENBQUNDLFlBQVksR0FBR0QsK0NBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyZWVib2FyZF9mcm9udGVuZC8uL3NyYy9jb21tb25zL3N0eWxlcy9nbG9iYWxTdHlsZXMudHM/Yzc3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tIFwiQGVtb3Rpb24vcmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IGdsb2JhbFN0eWxlcyA9IGNzc2BcbiAgKiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuYDtcbiJdLCJuYW1lcyI6WyJjc3MiLCJnbG9iYWxTdHlsZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/commons/styles/globalStyles.ts\n");

/***/ }),

/***/ "./src/components/commons/layout/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/commons/layout/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sidemenu_LayoutSideMenu_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidemenu/LayoutSideMenu.container */ \"./src/components/commons/layout/sidemenu/LayoutSideMenu.container.tsx\");\n\n\nfunction Layout(props) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_sidemenu_LayoutSideMenu_container__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                __source: {\n                    fileName: \"/Users/macbook/Desktop/notice_board_sjw_project/src/components/commons/layout/index.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                },\n                __self: this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/Users/macbook/Desktop/notice_board_sjw_project/src/components/commons/layout/index.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: props.children\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb25zL2xheW91dC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFZ0U7QUFLakQsUUFBUSxDQUFDQyxNQUFNLENBQUNDLEtBQW1CLEVBQUUsQ0FBQztJQUNuRCxNQUFNOztpRkFFREYsMEVBQWM7Ozs7Ozs7O2lGQUVkRyxDQUFHOzs7Ozs7OzBCQUFFRCxLQUFLLENBQUNFLFFBQVE7Ozs7QUFHMUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyZWVib2FyZF9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbnMvbGF5b3V0L2luZGV4LnRzeD9kOGVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXRCYW5uZXIgZnJvbSBcIi4vYmFubmVyL0xheW91dEJhbm5lci5jb250YWluZXJcIjtcbmltcG9ydCB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dFNpZGVNZW51IGZyb20gXCIuL3NpZGVtZW51L0xheW91dFNpZGVNZW51LmNvbnRhaW5lclwiO1xuXG5pbnRlcmZhY2UgSUxheW91dFByb3BzIHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dChwcm9wczogSUxheW91dFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXRTaWRlTWVudSAvPlxuICAgICAgey8qIDxMYXlvdXRCYW5uZXIgLz4gKi99XG4gICAgICA8ZGl2Pntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJMYXlvdXRTaWRlTWVudSIsIkxheW91dCIsInByb3BzIiwiZGl2IiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/commons/layout/index.tsx\n");

/***/ }),

/***/ "./src/components/commons/layout/sidemenu/LayoutSideMenu.container.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/commons/layout/sidemenu/LayoutSideMenu.container.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LayoutSideMenu)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LayoutSideMenu_presenter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayoutSideMenu.presenter */ \"./src/components/commons/layout/sidemenu/LayoutSideMenu.presenter.tsx\");\n\n\n\nfunction LayoutSideMenu() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const onClickHome = ()=>router.push('/')\n    ;\n    const onClickBoard = ()=>router.push('/board')\n    ;\n    const onClickWrite = ()=>router.push('/write')\n    ;\n    const onClickOpenApi = ()=>router.push('/openapi')\n    ;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_LayoutSideMenu_presenter__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        onClickHome: onClickHome,\n        onClickBoard: onClickBoard,\n        onClickWrite: onClickWrite,\n        onClickOpenApi: onClickOpenApi,\n        __source: {\n            fileName: \"/Users/macbook/Desktop/notice_board_sjw_project/src/components/commons/layout/sidemenu/LayoutSideMenu.container.tsx\",\n            lineNumber: 13,\n            columnNumber: 5\n        },\n        __self: this\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb25zL2xheW91dC9zaWRlbWVudS9MYXlvdXRTaWRlTWVudS5jb250YWluZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBdUM7QUFDa0I7QUFFMUMsUUFBUSxDQUFDRSxjQUFjLEdBQUcsQ0FBQztJQUN4QyxLQUFLLENBQUNDLE1BQU0sR0FBR0gsc0RBQVM7SUFFeEIsS0FBSyxDQUFDSSxXQUFXLE9BQVNELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLENBQUc7O0lBQ3pDLEtBQUssQ0FBQ0MsWUFBWSxPQUFTSCxNQUFNLENBQUNFLElBQUksQ0FBQyxDQUFROztJQUMvQyxLQUFLLENBQUNFLFlBQVksT0FBU0osTUFBTSxDQUFDRSxJQUFJLENBQUMsQ0FBUTs7SUFDL0MsS0FBSyxDQUFDRyxjQUFjLE9BQVNMLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDLENBQVU7O0lBRW5ELE1BQU0sc0VBQ0hKLGlFQUFnQjtRQUNmRyxXQUFXLEVBQUVBLFdBQVc7UUFDeEJFLFlBQVksRUFBRUEsWUFBWTtRQUMxQkMsWUFBWSxFQUFFQSxZQUFZO1FBQzFCQyxjQUFjLEVBQUVBLGNBQWM7Ozs7Ozs7O0FBR3BDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmVlYm9hcmRfZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9jb21tb25zL2xheW91dC9zaWRlbWVudS9MYXlvdXRTaWRlTWVudS5jb250YWluZXIudHN4PzZlNWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGF5b3V0U2lkZU1lbnVVSSBmcm9tIFwiLi9MYXlvdXRTaWRlTWVudS5wcmVzZW50ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0U2lkZU1lbnUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3Qgb25DbGlja0hvbWUgPSAoKSA9PiByb3V0ZXIucHVzaCgnLycpXG4gIGNvbnN0IG9uQ2xpY2tCb2FyZCA9ICgpID0+IHJvdXRlci5wdXNoKCcvYm9hcmQnKVxuICBjb25zdCBvbkNsaWNrV3JpdGUgPSAoKSA9PiByb3V0ZXIucHVzaCgnL3dyaXRlJylcbiAgY29uc3Qgb25DbGlja09wZW5BcGkgPSAoKSA9PiByb3V0ZXIucHVzaCgnL29wZW5hcGknKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dFNpZGVNZW51VUlcbiAgICAgIG9uQ2xpY2tIb21lPXtvbkNsaWNrSG9tZX1cbiAgICAgIG9uQ2xpY2tCb2FyZD17b25DbGlja0JvYXJkfVxuICAgICAgb25DbGlja1dyaXRlPXtvbkNsaWNrV3JpdGV9XG4gICAgICBvbkNsaWNrT3BlbkFwaT17b25DbGlja09wZW5BcGl9XG4gICAgLz5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkxheW91dFNpZGVNZW51VUkiLCJMYXlvdXRTaWRlTWVudSIsInJvdXRlciIsIm9uQ2xpY2tIb21lIiwicHVzaCIsIm9uQ2xpY2tCb2FyZCIsIm9uQ2xpY2tXcml0ZSIsIm9uQ2xpY2tPcGVuQXBpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/commons/layout/sidemenu/LayoutSideMenu.container.tsx\n");

/***/ }),

/***/ "./src/components/commons/layout/sidemenu/LayoutSideMenu.presenter.tsx":
/*!*****************************************************************************!*\
  !*** ./src/components/commons/layout/sidemenu/LayoutSideMenu.presenter.tsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LayoutSideMenuUI)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction LayoutSideMenuUI({ onClickHome , onClickBoard , onClickWrite , onClickOpenApi  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"ul\", {\n        __source: {\n            fileName: \"/Users/macbook/Desktop/notice_board_sjw_project/src/components/commons/layout/sidemenu/LayoutSideMenu.presenter.tsx\",\n            lineNumber: 8,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                onClick: onClickHome,\n                __source: {\n                    fileName: \"/Users/macbook/Desktop/notice_board_sjw_project/src/components/commons/layout/sidemenu/LayoutSideMenu.presenter.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"홈으로\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                onClick: onClickBoard,\n                __source: {\n                    fileName: \"/Users/macbook/Desktop/notice_board_sjw_project/src/components/commons/layout/sidemenu/LayoutSideMenu.presenter.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"자유 게시판\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                onClick: onClickWrite,\n                __source: {\n                    fileName: \"/Users/macbook/Desktop/notice_board_sjw_project/src/components/commons/layout/sidemenu/LayoutSideMenu.presenter.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"글 작성하기\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"li\", {\n                onClick: onClickOpenApi,\n                __source: {\n                    fileName: \"/Users/macbook/Desktop/notice_board_sjw_project/src/components/commons/layout/sidemenu/LayoutSideMenu.presenter.tsx\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: \"오픈 API\"\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb25zL2xheW91dC9zaWRlbWVudS9MYXlvdXRTaWRlTWVudS5wcmVzZW50ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZSxRQUFRLENBQUNBLGdCQUFnQixDQUFDLENBQUMsQ0FDeENDLFdBQVcsR0FDWEMsWUFBWSxHQUNaQyxZQUFZLEdBQ1pDLGNBQWMsRUFDaEIsQ0FBQyxFQUFFLENBQUM7SUFDRixNQUFNLHVFQUNIQyxDQUFFOzs7Ozs7OztpRkFDQUMsQ0FBRTtnQkFBQ0MsT0FBTyxFQUFFTixXQUFXOzs7Ozs7OzBCQUFFLENBQUc7O2lGQUN0QkssQ0FBSjtnQkFBQ0MsT0FBTyxFQUFFTCxZQUFZOzs7Ozs7OzBCQUFFLENBQU07O2lGQUN0QkksQ0FBUjtnQkFBQ0MsT0FBTyxFQUFFSixZQUFZOzs7Ozs7OzBCQUFFLENBQU07O2lGQUN0QkcsQ0FBUjtnQkFBQ0MsT0FBTyxFQUFFSCxjQUFjOzs7Ozs7OzBCQUFFLENBQU07Ozs7QUFHekMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyZWVib2FyZF9mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL2NvbW1vbnMvbGF5b3V0L3NpZGVtZW51L0xheW91dFNpZGVNZW51LnByZXNlbnRlci50c3g/MmI4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXRTaWRlTWVudVVJKHtcbiAgb25DbGlja0hvbWUsXG4gIG9uQ2xpY2tCb2FyZCxcbiAgb25DbGlja1dyaXRlLFxuICBvbkNsaWNrT3BlbkFwaVxufSkge1xuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrSG9tZX0+7ZmI7Jy866GcPC9saT5cbiAgICAgIDxsaSBvbkNsaWNrPXtvbkNsaWNrQm9hcmR9PuyekOycoCDqsozsi5ztjJA8L2xpPlxuICAgICAgPGxpIG9uQ2xpY2s9e29uQ2xpY2tXcml0ZX0+6riAIOyekeyEse2VmOq4sDwvbGk+XG4gICAgICA8bGkgb25DbGljaz17b25DbGlja09wZW5BcGl9PuyYpO2UiCBBUEk8L2xpPlxuICAgIDwvdWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGF5b3V0U2lkZU1lbnVVSSIsIm9uQ2xpY2tIb21lIiwib25DbGlja0JvYXJkIiwib25DbGlja1dyaXRlIiwib25DbGlja09wZW5BcGkiLCJ1bCIsImxpIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/commons/layout/sidemenu/LayoutSideMenu.presenter.tsx\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("apollo-upload-client");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
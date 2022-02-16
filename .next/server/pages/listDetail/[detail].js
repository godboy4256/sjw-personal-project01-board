"use strict";
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
exports.id = "pages/listDetail/[detail]";
exports.ids = ["pages/listDetail/[detail]"];
exports.modules = {

/***/ "./pages/listDetail/[detail]/index.tsx":
/*!*********************************************!*\
  !*** ./pages/listDetail/[detail]/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst FETCH_BOARD = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n   query fetchBoard($boardId:ID!){\n        fetchBoard(boardId:$boardId){\n            writer\n            title\n        }\n   }\n`;\nconst ListDetail = ()=>{\n    var ref;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const detailInfo = router === null || router === void 0 ? void 0 : (ref = router.query) === null || ref === void 0 ? void 0 : ref.detail;\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARD, {\n        variables: {\n            boardId: detailInfo\n        }\n    });\n    console.log(data);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/macbook/Desktop/notice_board_sjw_project/pages/listDetail/[detail]/index.tsx\",\n            lineNumber: 28,\n            columnNumber: 9\n        },\n        __self: undefined,\n        children: \"디테일 페이지\"\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListDetail);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXN0RGV0YWlsL1tkZXRhaWxdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QztBQUNQO0FBR3ZDLEtBQUssQ0FBQ0csV0FBVyxHQUFHSCwrQ0FBRyxDQUFDO0FBVXhCLEtBQUssQ0FBQ0ksVUFBVSxPQUFTLENBQUM7UUFFSEMsR0FBYTtJQURoQyxLQUFLLENBQUNBLE1BQU07SUFDWixLQUFLLENBQUNDO0lBRU4sS0FBSzs7O1FBR0QsQ0FBQztJQUNMLENBQUM7SUFFRE0sT0FBTyxDQUFDQyxHQUFHLENBQUNKLEdBQUFBLHNEQUFJO0lBRWhCLE1BQU0sb0JBQ0RLLENBQUc7Ozs7Ozs7a0JBQUMsQ0FBTzs7QUFFcEIsQ0FBQztBQUVELE1BQU0sU0FBU1YsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZyZWVib2FyZF9mcm9udGVuZC8uL3BhZ2VzL2xpc3REZXRhaWwvW2RldGFpbF0vaW5kZXgudHN4P2QxZDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgRkVUQ0hfQk9BUkQgPSBncWxgXG4gICBxdWVyeSBmZXRjaEJvYXJkKCRib2FyZElkOklEISl7XG4gICAgICAgIGZldGNoQm9hcmQoYm9hcmRJZDokYm9hcmRJZCl7XG4gICAgICAgICAgICB3cml0ZXJcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgIH1cbiAgIH1cbmBcblxuXG5jb25zdCBMaXN0RGV0YWlsID0gKCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgZGV0YWlsSW5mbyA9IHJvdXRlcj8ucXVlcnk/LmRldGFpbFxuXG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShGRVRDSF9CT0FSRCwge1xuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgIGJvYXJkSWQ6IGRldGFpbEluZm9cbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj7rlJTthYzsnbwg7Y6Y7J207KeAPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpc3REZXRhaWw7Il0sIm5hbWVzIjpbImdxbCIsInVzZVF1ZXJ5IiwidXNlUm91dGVyIiwiRkVUQ0hfQk9BUkQiLCJMaXN0RGV0YWlsIiwicm91dGVyIiwiZGV0YWlsSW5mbyIsInF1ZXJ5IiwiZGV0YWlsIiwiZGF0YSIsInZhcmlhYmxlcyIsImJvYXJkSWQiLCJjb25zb2xlIiwibG9nIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/listDetail/[detail]/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/listDetail/[detail]/index.tsx"));
module.exports = __webpack_exports__;

})();
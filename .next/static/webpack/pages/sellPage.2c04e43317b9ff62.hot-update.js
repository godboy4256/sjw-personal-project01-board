"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/sellPage",{

/***/ "./src/components/commons/withAuth/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/commons/withAuth/index.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withAuth\": function() { return /* binding */ withAuth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar withAuth = function(Component) {\n    return _s(function(props) {\n        _s();\n        var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n        console.log(1);\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n            if (!localStorage.getItem(\"accessToken\")) {\n                antd__WEBPACK_IMPORTED_MODULE_3__.Modal.error({\n                    content: \"로그인이 필요한 서비스입니다.\"\n                });\n                router.push(\"/login\");\n            }\n        }, []);\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, _objectSpread({\n        }, props, {\n            __source: {\n                fileName: \"/Users/macbook/Desktop/notice_board_sjw_project/src/components/commons/withAuth/index.tsx\",\n                lineNumber: 17,\n                columnNumber: 12\n            },\n            __self: _this\n        })));\n    }, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n        return [\n            next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n        ];\n    });\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb25zL3dpdGhBdXRoL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRCO0FBRVc7QUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsR0FBSyxDQUFDRyxRQUFRLEdBQUcsUUFBUSxDQUFQQyxTQUFTO2NBQUssUUFBUSxDQUFQQyxLQUFLLEVBQUssQ0FBQzs7UUFDL0MsR0FBSyxDQUFDQyxNQUFNLEdBQUdMLHNEQUFTO1FBQ3hCTSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDO1FBRWJOLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1lBQ2IsRUFBRSxHQUFHTyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFhLGVBQUcsQ0FBQztnQkFDdkNWLDZDQUFXLENBQUMsQ0FBQztvQkFBQ1ksT0FBTyxFQUFFLENBQWtCO2dCQUFDLENBQUM7Z0JBQzNDTixNQUFNLENBQUNPLElBQUksQ0FBQyxDQUFRO1lBQ3hCLENBQUM7UUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRUwsTUFBTSxzRUFBRVQsU0FBUztXQUFLQyxLQUFLOzs7Ozs7OztJQUMvQixDQUFDOztZQVhrQkosa0RBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29tbW9ucy93aXRoQXV0aC9pbmRleC50c3g/OGVlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyBxdWVyeSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmUvbGl0ZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IHdpdGhBdXRoID0gKENvbXBvbmVudCkgPT4gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc29sZS5sb2coMSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKSkge1xuICAgICAgICAgICAgTW9kYWwuZXJyb3IoeyBjb250ZW50OiBcIuuhnOq3uOyduOydtCDtlYTsmpTtlZwg7ISc67mE7Iqk7J6F64uI64ukLlwiIH0pXG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz47XG59OyJdLCJuYW1lcyI6WyJNb2RhbCIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIndpdGhBdXRoIiwiQ29tcG9uZW50IiwicHJvcHMiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImVycm9yIiwiY29udGVudCIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/commons/withAuth/index.tsx\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/listDetail/[detail]",{

/***/ "./pages/listDetail/[detail]/index.tsx":
/*!*********************************************!*\
  !*** ./pages/listDetail/[detail]/index.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_macbook_Desktop_notice_board_sjw_project_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_macbook_Desktop_notice_board_sjw_project_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_macbook_Desktop_notice_board_sjw_project_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n   query fetchBoard($boardId:ID!){\\n        fetchBoard(boardId:$boardId){\\n            writer\\n            title\\n        }\\n   }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar FETCH_BOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.gql)(_templateObject());\nvar ListDetail = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var detailInfo = router.query.detail;\n    var onDetailData = _asyncToGenerator(_Users_macbook_Desktop_notice_board_sjw_project_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var data;\n        return _Users_macbook_Desktop_notice_board_sjw_project_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    try {\n                        data = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(FETCH_BOARD, {\n                            variables: {\n                                boardId: detailInfo\n                            }\n                        }).data;\n                        data && console.log(data === null || data === void 0 ? void 0 : data.fetchBoard);\n                    } catch (error) {\n                        console.log(error);\n                    }\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        onDetailData();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n        __source: {\n            fileName: \"/Users/macbook/Desktop/notice_board_sjw_project/pages/listDetail/[detail]/index.tsx\",\n            lineNumber: 36,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: \"디테일 페이지\"\n    }));\n};\n_s(ListDetail, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ListDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ListDetail);\nvar _c;\n$RefreshReg$(_c, \"ListDetail\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9saXN0RGV0YWlsL1tkZXRhaWxdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ1A7QUFDTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUVULENBT3hCOzs7Ozs7OztBQVBBLEdBQUssQ0FBQ0ksV0FBVyxHQUFHSixtREFBRztBQVV2QixHQUFLLENBQUNLLFVBQVUsR0FBRyxRQUNuQixHQUR5QixDQUFDOztJQUN0QixHQUFLLENBQUNDLE1BQU0sR0FBR0osc0RBQVM7SUFDeEIsR0FBSyxDQUFDSyxVQUFVLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxNQUFNO0lBQ3RDLEdBQUssQ0FBQ0MsWUFBWSwrS0FBRyxRQUFRLFdBQUksQ0FBQztZQUVsQkMsSUFBSTs7OztvQkFEaEIsR0FBRyxDQUFDLENBQUM7d0JBQ09BLElBQUksR0FBS1Ysd0RBQVEsQ0FBQ0csV0FBVyxFQUFFLENBQUM7NEJBQ3BDUSxTQUFTLEVBQUUsQ0FBQztnQ0FDUkMsT0FBTyxFQUFFTixVQUFVOzRCQUN2QixDQUFDO3dCQUNMLENBQUMsRUFKT0ksSUFBSTt3QkFLWkEsSUFBSSxJQUFJRyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0osSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBRUssVUFBVTtvQkFDeEMsQ0FBQyxDQUFDLEtBQUssRUFBRUMsS0FBSyxFQUFFLENBQUM7d0JBQ2JILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRSxLQUFLO29CQUNyQixDQUFDOzs7Ozs7SUFFTCxDQUFDO0lBRURkLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2JPLFlBQVk7SUFDaEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLE1BQU0sc0VBQ0RRLENBQUc7Ozs7Ozs7a0JBQUMsQ0FBTzs7QUFFcEIsQ0FBQztHQXZCS2IsVUFBVTs7UUFDR0gsa0RBQVM7OztLQUR0QkcsVUFBVTtBQXlCaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9saXN0RGV0YWlsL1tkZXRhaWxdL2luZGV4LnRzeD9kMWQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEZFVENIX0JPQVJEID0gZ3FsYFxuICAgcXVlcnkgZmV0Y2hCb2FyZCgkYm9hcmRJZDpJRCEpe1xuICAgICAgICBmZXRjaEJvYXJkKGJvYXJkSWQ6JGJvYXJkSWQpe1xuICAgICAgICAgICAgd3JpdGVyXG4gICAgICAgICAgICB0aXRsZVxuICAgICAgICB9XG4gICB9XG5gXG5cblxuY29uc3QgTGlzdERldGFpbCA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IGRldGFpbEluZm8gPSByb3V0ZXIucXVlcnkuZGV0YWlsXG4gICAgY29uc3Qgb25EZXRhaWxEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeShGRVRDSF9CT0FSRCwge1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICBib2FyZElkOiBkZXRhaWxJbmZvXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGRhdGEgJiYgY29uc29sZS5sb2coZGF0YT8uZmV0Y2hCb2FyZClcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBvbkRldGFpbERhdGEoKVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+65SU7YWM7J28IO2OmOydtOyngDwvZGl2PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0RGV0YWlsOyJdLCJuYW1lcyI6WyJncWwiLCJ1c2VRdWVyeSIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIkZFVENIX0JPQVJEIiwiTGlzdERldGFpbCIsInJvdXRlciIsImRldGFpbEluZm8iLCJxdWVyeSIsImRldGFpbCIsIm9uRGV0YWlsRGF0YSIsImRhdGEiLCJ2YXJpYWJsZXMiLCJib2FyZElkIiwiY29uc29sZSIsImxvZyIsImZldGNoQm9hcmQiLCJlcnJvciIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/listDetail/[detail]/index.tsx\n");

/***/ })

});
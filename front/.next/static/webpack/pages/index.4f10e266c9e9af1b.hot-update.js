"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_shigetamasaya_go_next_porkar_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_shigetamasaya_go_next_porkar_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_shigetamasaya_go_next_porkar_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), message = ref[0], setMessage = ref[1];\n    // const getMessage = useCallback(async () => {\n    //   const res = await fetch(\"/api/porker\")\n    //   const json = await res.json()\n    //   setMessage(json.text)\n    // }, [])\n    var submitValue = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_shigetamasaya_go_next_porkar_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var res, json;\n            return _Users_shigetamasaya_go_next_porkar_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(event);\n                        event.preventDefault();\n                        _ctx.next = 4;\n                        return fetch(\"/api/porker\", {\n                            method: \"POST\",\n                            body: JSON.stringify({\n                                text: \"ddd\"\n                            }),\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            }\n                        });\n                    case 4:\n                        res = _ctx.sent;\n                        _ctx.next = 7;\n                        return res.json();\n                    case 7:\n                        json = _ctx.sent;\n                        setMessage(json.text);\n                    case 9:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function submitValue(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                className: \"flex flex-col\",\n                onSubmit: submitValue,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            id: \"text\",\n                            name: \"text\",\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"\\u9001\\u4FE1\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE2QztBQUNDOztBQUUvQixTQUFTRyxJQUFJLEdBQUc7O0lBQzdCLElBQThCRixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQW5DRyxPQUFPLEdBQWdCSCxHQUFZLEdBQTVCLEVBQUVJLFVBQVUsR0FBSUosR0FBWSxHQUFoQjtJQUUxQiwrQ0FBK0M7SUFDL0MsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsU0FBUztJQUVULElBQU1LLFdBQVc7bUJBQUcsMFBBQU9DLEtBQUssRUFBSztnQkFHN0JDLEdBQUcsRUFLSEMsSUFBSTs7Ozt3QkFQVkMsT0FBTyxDQUFDQyxHQUFHLENBQUNKLEtBQUssQ0FBQzt3QkFDbEJBLEtBQUssQ0FBQ0ssY0FBYyxFQUFFLENBQUM7OytCQUNMQyxLQUFLLENBQUMsYUFBYSxFQUFFOzRCQUNyQ0MsTUFBTSxFQUFFLE1BQU07NEJBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7Z0NBQUNDLElBQUksRUFBRSxLQUFLOzZCQUFDLENBQUM7NEJBQ25DQyxPQUFPLEVBQUU7Z0NBQUUsY0FBYyxFQUFFLGtCQUFrQjs2QkFBRTt5QkFDaEQsQ0FBQzs7d0JBSklYLEdBQUcsWUFJUDs7K0JBQ2lCQSxHQUFHLENBQUNDLElBQUksRUFBRTs7d0JBQXZCQSxJQUFJLFlBQW1CO3dCQUM3QkosVUFBVSxDQUFDSSxJQUFJLENBQUNTLElBQUksQ0FBQzs7Ozs7O1NBQ3RCO3dCQVZLWixXQUFXLENBQVVDLEtBQUs7OztPQVUvQjtJQUVELHFCQUNFLDhEQUFDYSxLQUFHO1FBQUNDLFNBQVMsRUFBRW5CLDBFQUFnQjs7MEJBQzlCLDhEQUFDa0IsS0FBRzswQkFBRWhCLE9BQU87Ozs7O29CQUFPOzBCQUNwQiw4REFBQ21CLE1BQUk7Z0JBQUNGLFNBQVMsRUFBQyxlQUFlO2dCQUFDRyxRQUFRLEVBQUVsQixXQUFXOztrQ0FDbkQsOERBQUNtQixHQUFDO2tDQUNBLDRFQUFDQyxPQUFLOzRCQUFDQyxFQUFFLEVBQUMsTUFBTTs0QkFBQ0MsSUFBSSxFQUFDLE1BQU07NEJBQUNDLElBQUksRUFBQyxNQUFNOzs7OztnQ0FBRzs7Ozs7NEJBQ3pDO2tDQUNKLDhEQUFDSixHQUFDO2tDQUNBLDRFQUFDSyxRQUFNOzRCQUFDRCxJQUFJLEVBQUMsUUFBUTtzQ0FBQyxjQUFFOzs7OztnQ0FBUzs7Ozs7NEJBQy9COzs7Ozs7b0JBQ0M7Ozs7OztZQUNILENBQ1A7Q0FDRjtHQWxDdUIxQixJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIilcblxuICAvLyBjb25zdCBnZXRNZXNzYWdlID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuICAvLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiL2FwaS9wb3JrZXJcIilcbiAgLy8gICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuICAvLyAgIHNldE1lc3NhZ2UoanNvbi50ZXh0KVxuICAvLyB9LCBbXSlcblxuICBjb25zdCBzdWJtaXRWYWx1ZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL3BvcmtlclwiLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt0ZXh0OiBcImRkZFwifSksXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICB9KVxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgc2V0TWVzc2FnZShqc29uLnRleHQpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXY+e21lc3NhZ2V9PC9kaXY+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCIgb25TdWJtaXQ9e3N1Ym1pdFZhbHVlfT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGlucHV0IGlkPVwidGV4dFwiIG5hbWU9XCJ0ZXh0XCIgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPumAgeS/oTwvYnV0dG9uPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwic3R5bGVzIiwiSG9tZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic3VibWl0VmFsdWUiLCJldmVudCIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGV4dCIsImhlYWRlcnMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJmb3JtIiwib25TdWJtaXQiLCJwIiwiaW5wdXQiLCJpZCIsIm5hbWUiLCJ0eXBlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
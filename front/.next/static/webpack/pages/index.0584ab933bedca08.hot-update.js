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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_shigetamasaya_go_next_porkar_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_shigetamasaya_go_next_porkar_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_shigetamasaya_go_next_porkar_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), text = ref[0], setMessage = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), errors = ref1[0], setErrors = ref1[1];\n    var submitValue = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_shigetamasaya_go_next_porkar_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var text, res, json;\n            return _Users_shigetamasaya_go_next_porkar_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        text = event.target.text.value;\n                        event.preventDefault();\n                        _ctx.next = 4;\n                        return fetch(\"/api/porker\", {\n                            method: \"POST\",\n                            body: JSON.stringify({\n                                text: text\n                            }),\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            }\n                        });\n                    case 4:\n                        res = _ctx.sent;\n                        _ctx.next = 7;\n                        return res.json();\n                    case 7:\n                        json = _ctx.sent;\n                        setMessage(json.text);\n                        setErrors(json.erros);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function submitValue(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: text\n            }, void 0, false, {\n                fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: errors\n            }, void 0, false, {\n                fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                className: \"flex flex-col\",\n                onSubmit: submitValue,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            id: \"text\",\n                            name: \"text\",\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                            lineNumber: 27,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"\\u9001\\u4FE1\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"/YxVmfZku2946ChKMnddCR+VCYM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE2QztBQUNDOztBQUUvQixTQUFTRyxJQUFJLEdBQUc7O0lBQzdCLElBQTJCRixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQWhDRyxJQUFJLEdBQWdCSCxHQUFZLEdBQTVCLEVBQUVJLFVBQVUsR0FBSUosR0FBWSxHQUFoQjtJQUN2QixJQUE0QkEsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUFqQ0ssTUFBTSxHQUFlTCxJQUFZLEdBQTNCLEVBQUVNLFNBQVMsR0FBSU4sSUFBWSxHQUFoQjtJQUV4QixJQUFNTyxXQUFXO21CQUFHLDBQQUFPQyxLQUFLLEVBQUs7Z0JBQzdCTCxJQUFJLEVBRUpNLEdBQUcsRUFLSEMsSUFBSTs7Ozt3QkFQSlAsSUFBSSxHQUFHSyxLQUFLLENBQUNHLE1BQU0sQ0FBQ1IsSUFBSSxDQUFDUyxLQUFLO3dCQUNwQ0osS0FBSyxDQUFDSyxjQUFjLEVBQUU7OytCQUNKQyxLQUFLLENBQUMsYUFBYSxFQUFFOzRCQUNyQ0MsTUFBTSxFQUFFLE1BQU07NEJBQ2RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7Z0NBQUNmLElBQUksRUFBRUEsSUFBSTs2QkFBQyxDQUFDOzRCQUNsQ2dCLE9BQU8sRUFBRTtnQ0FBRSxjQUFjLEVBQUUsa0JBQWtCOzZCQUFFO3lCQUNoRCxDQUFDOzt3QkFKSVYsR0FBRyxZQUlQOzsrQkFDaUJBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFOzt3QkFBdkJBLElBQUksWUFBbUI7d0JBQzdCTixVQUFVLENBQUNNLElBQUksQ0FBQ1AsSUFBSSxDQUFDO3dCQUNyQkcsU0FBUyxDQUFDSSxJQUFJLENBQUNVLEtBQUssQ0FBQzs7Ozs7O1NBQ3RCO3dCQVhLYixXQUFXLENBQVVDLEtBQUs7OztPQVcvQjtJQUVELHFCQUNFLDhEQUFDYSxLQUFHO1FBQUNDLFNBQVMsRUFBRXJCLDBFQUFnQjs7MEJBQzlCLDhEQUFDb0IsS0FBRzswQkFBRWxCLElBQUk7Ozs7O29CQUFPOzBCQUNqQiw4REFBQ2tCLEtBQUc7MEJBQUVoQixNQUFNOzs7OztvQkFBTzswQkFDbkIsOERBQUNtQixNQUFJO2dCQUFDRixTQUFTLEVBQUMsZUFBZTtnQkFBQ0csUUFBUSxFQUFFbEIsV0FBVzs7a0NBQ25ELDhEQUFDbUIsR0FBQztrQ0FDQSw0RUFBQ0MsT0FBSzs0QkFBQ0MsRUFBRSxFQUFDLE1BQU07NEJBQUNDLElBQUksRUFBQyxNQUFNOzRCQUFDQyxJQUFJLEVBQUMsTUFBTTs7Ozs7Z0NBQUc7Ozs7OzRCQUN6QztrQ0FDSiw4REFBQ0osR0FBQztrQ0FDQSw0RUFBQ0ssUUFBTTs0QkFBQ0QsSUFBSSxFQUFDLFFBQVE7c0NBQUMsY0FBRTs7Ozs7Z0NBQVM7Ozs7OzRCQUMvQjs7Ozs7O29CQUNDOzs7Ozs7WUFDSCxDQUNQO0NBQ0Y7R0EvQnVCNUIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt0ZXh0LCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtlcnJvcnMsIHNldEVycm9yc10gPSB1c2VTdGF0ZShbXSlcblxuICBjb25zdCBzdWJtaXRWYWx1ZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRleHQgPSBldmVudC50YXJnZXQudGV4dC52YWx1ZVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvcG9ya2VyXCIsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3RleHQ6IHRleHR9KSxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIH0pXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBzZXRNZXNzYWdlKGpzb24udGV4dClcbiAgICBzZXRFcnJvcnMoanNvbi5lcnJvcylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdj57dGV4dH08L2Rpdj5cbiAgICAgIDxkaXY+e2Vycm9yc308L2Rpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIiBvblN1Ym1pdD17c3VibWl0VmFsdWV9PlxuICAgICAgICA8cD5cbiAgICAgICAgICA8aW5wdXQgaWQ9XCJ0ZXh0XCIgbmFtZT1cInRleHRcIiB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+6YCB5L+hPC9idXR0b24+XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJIb21lIiwidGV4dCIsInNldE1lc3NhZ2UiLCJlcnJvcnMiLCJzZXRFcnJvcnMiLCJzdWJtaXRWYWx1ZSIsImV2ZW50IiwicmVzIiwianNvbiIsInRhcmdldCIsInZhbHVlIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsImVycm9zIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiZm9ybSIsIm9uU3VibWl0IiwicCIsImlucHV0IiwiaWQiLCJuYW1lIiwidHlwZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
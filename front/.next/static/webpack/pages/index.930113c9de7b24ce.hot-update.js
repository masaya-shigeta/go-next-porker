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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _Users_shigetamasaya_go_next_porkar_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_shigetamasaya_go_next_porkar_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_shigetamasaya_go_next_porkar_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), message = ref[0], setMessage = ref[1];\n    // const getMessage = useCallback(async () => {\n    //   const res = await fetch(\"/api/porker\")\n    //   const json = await res.json()\n    //   setMessage(json.text)\n    // }, [])\n    var submitValue = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_Users_shigetamasaya_go_next_porkar_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var res, json;\n            return _Users_shigetamasaya_go_next_porkar_front_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        _ctx.next = 3;\n                        return fetch(\"/api/porker\", {\n                            method: \"POST\",\n                            body: JSON.stringify({\n                                text: \"ddd\"\n                            }),\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            }\n                        });\n                    case 3:\n                        res = _ctx.sent;\n                        _ctx.next = 6;\n                        return res.json();\n                    case 6:\n                        json = _ctx.sent;\n                        setMessage(json.text);\n                    case 8:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function submitValue(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: message\n            }, void 0, false, {\n                fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                className: \"flex flex-col\",\n                onSubmit: submitValue,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        id: \"text\",\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"\\u9001\\u4FE1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"zh+HvXX3zxuqMkvNfneES9FE1vU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE2QztBQUNDOztBQUUvQixTQUFTRyxJQUFJLEdBQUc7O0lBQzdCLElBQThCRixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQW5DRyxPQUFPLEdBQWdCSCxHQUFZLEdBQTVCLEVBQUVJLFVBQVUsR0FBSUosR0FBWSxHQUFoQjtJQUUxQiwrQ0FBK0M7SUFDL0MsMkNBQTJDO0lBQzNDLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsU0FBUztJQUVULElBQU1LLFdBQVc7bUJBQUcsMFBBQU9DLEtBQUssRUFBSztnQkFFN0JDLEdBQUcsRUFLSEMsSUFBSTs7Ozt3QkFOVkYsS0FBSyxDQUFDRyxjQUFjLEVBQUUsQ0FBQzs7K0JBQ0xDLEtBQUssQ0FBQyxhQUFhLEVBQUU7NEJBQ3JDQyxNQUFNLEVBQUUsTUFBTTs0QkFDZEMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQ0FBQ0MsSUFBSSxFQUFFLEtBQUs7NkJBQUMsQ0FBQzs0QkFDbkNDLE9BQU8sRUFBRTtnQ0FBRSxjQUFjLEVBQUUsa0JBQWtCOzZCQUFFO3lCQUNoRCxDQUFDOzt3QkFKSVQsR0FBRyxZQUlQOzsrQkFDaUJBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFOzt3QkFBdkJBLElBQUksWUFBbUI7d0JBQzdCSixVQUFVLENBQUNJLElBQUksQ0FBQ08sSUFBSSxDQUFDOzs7Ozs7U0FDdEI7d0JBVEtWLFdBQVcsQ0FBVUMsS0FBSzs7O09BUy9CO0lBRUQscUJBQ0UsOERBQUNXLEtBQUc7UUFBQ0MsU0FBUyxFQUFFakIsMEVBQWdCOzswQkFDOUIsOERBQUNnQixLQUFHOzBCQUFFZCxPQUFPOzs7OztvQkFBTzswQkFDcEIsOERBQUNpQixNQUFJO2dCQUFDRixTQUFTLEVBQUMsZUFBZTtnQkFBQ0csUUFBUSxFQUFFaEIsV0FBVzs7a0NBQ25ELDhEQUFDaUIsT0FBSzt3QkFDSkMsRUFBRSxFQUFDLE1BQU07d0JBQ1RDLElBQUksRUFBQyxNQUFNOzs7Ozs0QkFDWDtrQ0FDRiw4REFBQ0MsUUFBTTt3QkFDTEQsSUFBSSxFQUFDLFFBQVE7a0NBQ2QsY0FBRTs7Ozs7NEJBQVM7Ozs7OztvQkFDUDs7Ozs7O1lBQ0gsQ0FDUDtDQUNGO0dBbEN1QnRCLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKVxuXG4gIC8vIGNvbnN0IGdldE1lc3NhZ2UgPSB1c2VDYWxsYmFjayhhc3luYyAoKSA9PiB7XG4gIC8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL3BvcmtlclwiKVxuICAvLyAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gIC8vICAgc2V0TWVzc2FnZShqc29uLnRleHQpXG4gIC8vIH0sIFtdKVxuXG4gIGNvbnN0IHN1Ym1pdFZhbHVlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcIi9hcGkvcG9ya2VyXCIsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe3RleHQ6IFwiZGRkXCJ9KSxcbiAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgIH0pXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKClcbiAgICBzZXRNZXNzYWdlKGpzb24udGV4dClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdj57bWVzc2FnZX08L2Rpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIiBvblN1Ym1pdD17c3VibWl0VmFsdWV9PlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cInRleHRcIlxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICA+6YCB5L+hPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwic3R5bGVzIiwiSG9tZSIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwic3VibWl0VmFsdWUiLCJldmVudCIsInJlcyIsImpzb24iLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0ZXh0IiwiaGVhZGVycyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwiaWQiLCJ0eXBlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
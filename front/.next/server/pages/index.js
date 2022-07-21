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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcz83MTI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX19iQ09oWVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fX25MamlRXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfX19fVDdLXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX19UMDloRFwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Home() {\n    const { 0: ruleText , 1: setRuleText  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: errors , 1: setErrors  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const submitValue = async (event)=>{\n        const text = event.target.text.value;\n        event.preventDefault();\n        const res = await fetch(\"/api/porker\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                text: text\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const json = await res.json();\n        setRuleText(json.text);\n        setErrors(json.errors);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col\",\n                onSubmit: submitValue,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            id: \"text\",\n                            name: \"text\",\n                            type: \"text\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                            lineNumber: 25,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"\\u9001\\u4FE1\"\n                        }, void 0, false, {\n                            fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: ruleText\n            }, void 0, false, {\n                fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: errors\n            }, void 0, false, {\n                fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shigetamasaya/go-next-porkar/front/pages/index.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBNkM7QUFDQztBQUUvQixTQUFTRyxJQUFJLEdBQUc7SUFDN0IsTUFBTSxLQUFDQyxRQUFRLE1BQUVDLFdBQVcsTUFBSUosK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDNUMsTUFBTSxLQUFDSyxNQUFNLE1BQUVDLFNBQVMsTUFBSU4sK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFeEMsTUFBTU8sV0FBVyxHQUFHLE9BQU9DLEtBQUssR0FBSztRQUNuQyxNQUFNQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsTUFBTSxDQUFDRCxJQUFJLENBQUNFLEtBQUs7UUFDcENILEtBQUssQ0FBQ0ksY0FBYyxFQUFFO1FBQ3RCLE1BQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUMsYUFBYSxFQUFFO1lBQ3JDQyxNQUFNLEVBQUUsTUFBTTtZQUNkQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2dCQUFDVCxJQUFJLEVBQUVBLElBQUk7YUFBQyxDQUFDO1lBQ2xDVSxPQUFPLEVBQUU7Z0JBQUUsY0FBYyxFQUFFLGtCQUFrQjthQUFFO1NBQ2hELENBQUM7UUFDRixNQUFNQyxJQUFJLEdBQUcsTUFBTVAsR0FBRyxDQUFDTyxJQUFJLEVBQUU7UUFDN0JoQixXQUFXLENBQUNnQixJQUFJLENBQUNYLElBQUksQ0FBQztRQUN0QkgsU0FBUyxDQUFDYyxJQUFJLENBQUNmLE1BQU0sQ0FBQztLQUN2QjtJQUVELHFCQUNFLDhEQUFDZ0IsS0FBRztRQUFDQyxTQUFTLEVBQUVyQiwwRUFBZ0I7OzBCQUM5Qiw4REFBQ3VCLE1BQUk7Z0JBQUNGLFNBQVMsRUFBQyxlQUFlO2dCQUFDRyxRQUFRLEVBQUVsQixXQUFXOztrQ0FDbkQsOERBQUNtQixHQUFDO2tDQUNBLDRFQUFDQyxPQUFLOzRCQUFDQyxFQUFFLEVBQUMsTUFBTTs0QkFBQ0MsSUFBSSxFQUFDLE1BQU07NEJBQUNDLElBQUksRUFBQyxNQUFNOzs7OztnQ0FBRzs7Ozs7NEJBQ3pDO2tDQUNKLDhEQUFDSixHQUFDO2tDQUNBLDRFQUFDSyxRQUFNOzRCQUFDRCxJQUFJLEVBQUMsUUFBUTtzQ0FBQyxjQUFFOzs7OztnQ0FBUzs7Ozs7NEJBQy9COzs7Ozs7b0JBQ0M7MEJBQ1AsOERBQUNKLEdBQUM7MEJBQUV2QixRQUFROzs7OztvQkFBSzswQkFDakIsOERBQUN1QixHQUFDOzBCQUFFckIsTUFBTTs7Ozs7b0JBQUs7Ozs7OztZQUNYLENBQ1A7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW3J1bGVUZXh0LCBzZXRSdWxlVGV4dF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbZXJyb3JzLCBzZXRFcnJvcnNdID0gdXNlU3RhdGUoW10pXG5cbiAgY29uc3Qgc3VibWl0VmFsdWUgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0ZXh0ID0gZXZlbnQudGFyZ2V0LnRleHQudmFsdWVcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCIvYXBpL3BvcmtlclwiLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHt0ZXh0OiB0ZXh0fSksXG4gICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICB9KVxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpXG4gICAgc2V0UnVsZVRleHQoanNvbi50ZXh0KVxuICAgIHNldEVycm9ycyhqc29uLmVycm9ycylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiIG9uU3VibWl0PXtzdWJtaXRWYWx1ZX0+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxpbnB1dCBpZD1cInRleHRcIiBuYW1lPVwidGV4dFwiIHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj7pgIHkv6E8L2J1dHRvbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9mb3JtPlxuICAgICAgPHA+e3J1bGVUZXh0fTwvcD5cbiAgICAgIDxwPntlcnJvcnN9PC9wPlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkhvbWUiLCJydWxlVGV4dCIsInNldFJ1bGVUZXh0IiwiZXJyb3JzIiwic2V0RXJyb3JzIiwic3VibWl0VmFsdWUiLCJldmVudCIsInRleHQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiZm9ybSIsIm9uU3VibWl0IiwicCIsImlucHV0IiwiaWQiLCJuYW1lIiwidHlwZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
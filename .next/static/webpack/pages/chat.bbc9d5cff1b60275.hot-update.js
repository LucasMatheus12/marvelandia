"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chat",{

/***/ "./src/ButtonSendSticker.js":
/*!**********************************!*\
  !*** ./src/ButtonSendSticker.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ButtonSendSticker\": function() { return /* binding */ ButtonSendSticker; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\n'';\nfunction ButtonSendSticker(props) {\n    var _this = this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(''), 2), isOpen = ref[0], setOpenState = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        styleSheet: {\n            position: 'relative'\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                styleSheet: {\n                    borderRadius: '50%',\n                    padding: '0 3px 0 0',\n                    minWidth: '50px',\n                    minHeight: '50px',\n                    fontSize: '20px',\n                    marginBottom: '8px',\n                    lineHeight: '0',\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[300],\n                    filter: isOpen ? 'grayscale(0)' : 'grayscale(1)',\n                    hover: {\n                        filter: 'grayscale(0)'\n                    }\n                },\n                label: \"😋\",\n                onClick: function() {\n                    return setOpenState(!isOpen);\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Documents\\\\aluracord\\\\src\\\\ButtonSendSticker.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    flexDirection: 'column',\n                    borderRadius: '5px',\n                    position: 'absolute',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[800],\n                    width: {\n                        xs: '200px',\n                        sm: '290px'\n                    },\n                    height: '300px',\n                    right: '30px',\n                    bottom: '30px',\n                    padding: '16px',\n                    boxShadow: 'rgba(4, 4, 5, 0.15) 0px 0px 0px 1px, rgba(0, 0, 0, 0.24) 0px 8px 16px 0px'\n                },\n                onClick: function() {\n                    return setOpenState(false);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        styleSheet: {\n                            color: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[\"000\"],\n                            fontWeight: 'bold'\n                        },\n                        children: \"Stickers\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Documents\\\\aluracord\\\\src\\\\ButtonSendSticker.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        tag: \"ul\",\n                        styleSheet: {\n                            display: 'flex',\n                            flexWrap: 'wrap',\n                            justifyContent: 'space-between',\n                            flex: 1,\n                            paddingTop: '16px',\n                            overflow: 'scroll'\n                        },\n                        children: _config_json__WEBPACK_IMPORTED_MODULE_3__.stickers.map(function(sticker) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                onClick: function() {\n                                    // console.log('[DENTRO DO COMPONENTE] Clicou no sticker:', sticker);\n                                    if (Boolean(props.onStickerClick)) {\n                                        props.onStickerClick(sticker);\n                                    }\n                                },\n                                tag: \"li\",\n                                styleSheet: {\n                                    width: '5-0%',\n                                    borderRadius: '5px',\n                                    padding: '10px',\n                                    focus: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                                    },\n                                    hover: {\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_3__.theme.colors.neutrals[600]\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                    st: true,\n                                    src: sticker\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lucas\\\\Documents\\\\aluracord\\\\src\\\\ButtonSendSticker.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 17\n                                }, _this)\n                            }, sticker, false, {\n                                fileName: \"C:\\\\Users\\\\lucas\\\\Documents\\\\aluracord\\\\src\\\\ButtonSendSticker.js\",\n                                lineNumber: 76,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lucas\\\\Documents\\\\aluracord\\\\src\\\\ButtonSendSticker.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lucas\\\\Documents\\\\aluracord\\\\src\\\\ButtonSendSticker.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lucas\\\\Documents\\\\aluracord\\\\src\\\\ButtonSendSticker.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this));\n}\n_s(ButtonSendSticker, \"M1dH4yD9ZrZglAXGglbASSKS3GM=\");\n_c = ButtonSendSticker;\nvar _c;\n$RefreshReg$(_c, \"ButtonSendSticker\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YyxDQUFDRixPQUFPO29DQUM5QixDQUFDO2dDQUNILENBQUM7Z0NBQ0RQLEdBQUcsRUFBQyxDQUFJO2dDQUNSOUIsVUFBVSxFQUFFLENBQUM7b0NBQ1hxQixLQUFLLEVBQUUsQ0FBTTtvQ0FDYm5CLFlBQVksRUFBRSxDQUFLO29DQUNuQkMsT0FBTyxFQUFFLENBQU07b0NBQ2ZxQyxLQUFLLEVBQUUsQ0FBQzt3Q0FDTjVCLGVBQWUsRUFBRWxCLG9FQUFvQztvQ0FDdkQsQ0FBQztvQ0FDRHVCLEtBQUssRUFBRSxDQUFDO3dDQUNOTCxlQUFlLEVBQUVsQixvRUFBb0M7b0NBQ3ZELENBQUM7Z0NBQ0gsQ0FBQztzSEFFQUQsdURBQUs7b0NBQ05nRCxFQUFFO29DQUNGQyxHQUFHLEVBQUVMLE9BQU87Ozs7OzsrQkFmRUEsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QnJDLENBQUM7R0FyR2UxQyxpQkFBaUI7S0FBakJBLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvQnV0dG9uU2VuZFN0aWNrZXIuanM/NjgwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCwgSW1hZ2UgfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XHJcbmltcG9ydCBhcHBDb25maWcgZnJvbSAnLi4vY29uZmlnLmpzb24nOycnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uU2VuZFN0aWNrZXIocHJvcHMpIHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRPcGVuU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgcGFkZGluZzogJzAgM3B4IDAgMCcsXHJcbiAgICAgICAgICBtaW5XaWR0aDogJzUwcHgnLFxyXG4gICAgICAgICAgbWluSGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICAgICAgbWFyZ2luQm90dG9tOiAnOHB4JyxcclxuICAgICAgICAgIGxpbmVIZWlnaHQ6ICcwJyxcclxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0sXHJcbiAgICAgICAgICBmaWx0ZXI6IGlzT3BlbiA/ICdncmF5c2NhbGUoMCknIDogJ2dyYXlzY2FsZSgxKScsXHJcbiAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICBmaWx0ZXI6ICdncmF5c2NhbGUoMCknLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH19XHJcbiAgICAgICAgbGFiZWw9XCLwn5iLXCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuU3RhdGUoIWlzT3Blbil9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICB3aWR0aDoge1xyXG4gICAgICAgICAgICAgIHhzOiAnMjAwcHgnLFxyXG4gICAgICAgICAgICAgIHNtOiAnMjkwcHgnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICczMDBweCcsXHJcbiAgICAgICAgICAgIHJpZ2h0OiAnMzBweCcsXHJcbiAgICAgICAgICAgIGJvdHRvbTogJzMwcHgnLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTZweCcsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogJ3JnYmEoNCwgNCwgNSwgMC4xNSkgMHB4IDBweCAwcHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCA4cHggMTZweCAwcHgnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlblN0YXRlKGZhbHNlKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdGlja2Vyc1xyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICB0YWc9XCJ1bFwiXHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgcGFkZGluZ1RvcDogJzE2cHgnLFxyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiAnc2Nyb2xsJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2FwcENvbmZpZy5zdGlja2Vycy5tYXAoKHN0aWNrZXIpID0+IChcclxuICAgICAgICAgICAgICA8VGV4dFxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnW0RFTlRSTyBETyBDT01QT05FTlRFXSBDbGljb3Ugbm8gc3RpY2tlcjonLCBzdGlja2VyKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKEJvb2xlYW4ocHJvcHMub25TdGlja2VyQ2xpY2spKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMub25TdGlja2VyQ2xpY2soc3RpY2tlcik7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB0YWc9XCJsaVwiIGtleT17c3RpY2tlcn1cclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICc1LTAlJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgICBmb2N1czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBob3Zlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s2MDBdLFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgICAgIHN0XHJcbiAgICAgICAgICAgICAgICBzcmM9e3N0aWNrZXJ9IC8+XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiQm94IiwiQnV0dG9uIiwiVGV4dCIsIkltYWdlIiwiYXBwQ29uZmlnIiwiQnV0dG9uU2VuZFN0aWNrZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwiaXNPcGVuIiwic2V0T3BlblN0YXRlIiwic3R5bGVTaGVldCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiZm9udFNpemUiLCJtYXJnaW5Cb3R0b20iLCJsaW5lSGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInRoZW1lIiwiY29sb3JzIiwibmV1dHJhbHMiLCJmaWx0ZXIiLCJob3ZlciIsImxhYmVsIiwib25DbGljayIsImZsZXhEaXJlY3Rpb24iLCJ3aWR0aCIsInhzIiwic20iLCJoZWlnaHQiLCJyaWdodCIsImJvdHRvbSIsImJveFNoYWRvdyIsImNvbG9yIiwiZm9udFdlaWdodCIsInRhZyIsImZsZXhXcmFwIiwiZmxleCIsInBhZGRpbmdUb3AiLCJvdmVyZmxvdyIsInN0aWNrZXJzIiwibWFwIiwic3RpY2tlciIsIkJvb2xlYW4iLCJvblN0aWNrZXJDbGljayIsImZvY3VzIiwic3QiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ButtonSendSticker.js\n");

/***/ })

});
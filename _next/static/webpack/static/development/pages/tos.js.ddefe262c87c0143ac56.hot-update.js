webpackHotUpdate("static/development/pages/tos.js",{

/***/ "./lib/components/LinkList.js":
/*!************************************!*\
  !*** ./lib/components/LinkList.js ***!
  \************************************/
/*! exports provided: LinkList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkList", function() { return LinkList; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Icon */ "./lib/components/Icon.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/wyattkirby/Dev/projects/hotroutes_website/lib/components/LinkList.js";



var LinkList = function LinkList(_ref) {
  var links = _ref.links,
      className = _ref.className,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? "_blank" : _ref$target,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["links", "className", "target"]);

  var classNames = classnames__WEBPACK_IMPORTED_MODULE_4___default()("list-inline", className);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classNames
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), links.map(function (l, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      className: "list-inline-item",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
      href: l.href,
      target: target,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, l.icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      className: "".concat(l.icon, " mr-1"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), l.label && l.label));
  }));
};

/***/ })

})
//# sourceMappingURL=tos.js.ddefe262c87c0143ac56.hot-update.js.map
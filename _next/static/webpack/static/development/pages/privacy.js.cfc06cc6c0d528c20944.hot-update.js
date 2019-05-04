webpackHotUpdate("static/development/pages/privacy.js",{

/***/ "./lib/components/Footer.js":
/*!**********************************!*\
  !*** ./lib/components/Footer.js ***!
  \**********************************/
/*! exports provided: Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return Footer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Section */ "./lib/components/Section.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LinkList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinkList */ "./lib/components/LinkList.js");


var _jsxFileName = "/Users/wyattkirby/Dev/projects/hotroutes_website/lib/components/Footer.js";




var Footer = function Footer(_ref) {
  var className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className"]);

  var classNames = classnames__WEBPACK_IMPORTED_MODULE_4___default()("footer", className);
  var thisYear = new Date().getFullYear();
  var footerLinks = [{
    href: "/tos",
    label: "Terms of Service"
  }, {
    href: "/privacy",
    label: "Privacy Policy"
  }];
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("footer", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: "footer",
    className: classNames
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Section__WEBPACK_IMPORTED_MODULE_3__["Section"], {
    className: "text-center small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Copyright \xA9 ", thisYear, " SCREAMING_SNAKE_GAMES"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_LinkList__WEBPACK_IMPORTED_MODULE_5__["LinkList"], {
    links: footerLinks,
    target: "_self",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=privacy.js.cfc06cc6c0d528c20944.hot-update.js.map
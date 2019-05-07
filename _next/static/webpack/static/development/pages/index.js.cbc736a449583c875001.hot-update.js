webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/components/Layout.js":
/*!**********************************!*\
  !*** ./lib/components/Layout.js ***!
  \**********************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/sass/main.scss */ "./assets/sass/main.scss");
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_site_yaml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/site.yaml */ "./data/site.yaml");
/* harmony import */ var _data_site_yaml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_data_site_yaml__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Footer */ "./lib/components/Footer.js");


var _jsxFileName = "/Users/wyattkirby/Dev/projects/hotroutes_website/lib/components/Layout.js";






var Favicon = function Favicon(_ref) {
  var href = _ref.href;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "shortcut icon",
    href: href,
    type: "image/x-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "icon",
    href: href,
    type: "image/x-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

var Layout = function Layout(_ref2) {
  var heroImage = _ref2.heroImage,
      pageTitle = _ref2.pageTitle,
      children = _ref2.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["heroImage", "pageTitle", "children"]);

  var image = heroImage ? heroImage : _data_site_yaml__WEBPACK_IMPORTED_MODULE_5___default.a.og_image;
  var title = pageTitle ? "".concat(pageTitle, " | ").concat(_data_site_yaml__WEBPACK_IMPORTED_MODULE_5___default.a.page_title) : _data_site_yaml__WEBPACK_IMPORTED_MODULE_5___default.a.page_title;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Favicon, {
    href: "/static/img/favicon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "description",
    content: _data_site_yaml__WEBPACK_IMPORTED_MODULE_5___default.a.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    property: "og:type",
    content: "website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    property: "og:title",
    content: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    property: "og:image",
    content: "".concat(_data_site_yaml__WEBPACK_IMPORTED_MODULE_5___default.a.root_url).concat(image),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    property: "og:url",
    content: _data_site_yaml__WEBPACK_IMPORTED_MODULE_5___default.a.root_url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    property: "og:description",
    content: _data_site_yaml__WEBPACK_IMPORTED_MODULE_5___default.a.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: "main"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), children, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_6__["Footer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.cbc736a449583c875001.hot-update.js.map
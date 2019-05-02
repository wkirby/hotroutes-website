webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/components/ImageGrid.js":
/*!*************************************!*\
  !*** ./lib/components/ImageGrid.js ***!
  \*************************************/
/*! exports provided: ImageGrid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGrid", function() { return ImageGrid; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nishanths_zoom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nishanths/zoom.js */ "./node_modules/@nishanths/zoom.js/dist/zoom.js");
/* harmony import */ var _nishanths_zoom_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nishanths_zoom_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/Users/wyattkirby/Dev/projects/hotroutes_website/lib/components/ImageGrid.js";




var ZoomImage = function ZoomImage(props) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

var ImageGrid = function ImageGrid(_ref) {
  var images = _ref.images,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["images", "className"]);

  var classNames = classnames__WEBPACK_IMPORTED_MODULE_4___default()("images", className);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: classNames
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), images.map(function (image, i) {
    var imgSrc = typeof image === "string" ? image : image.src;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "screenshot",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ZoomImage, {
      src: imgSrc,
      className: "img-fluid rounded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }));
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.ea4bfa4ae5bbb3eaee4f.hot-update.js.map
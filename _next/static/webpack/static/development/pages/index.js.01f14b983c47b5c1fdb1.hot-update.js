webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _lib_components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/components/Layout */ "./lib/components/Layout.js");
/* harmony import */ var _lib_components_Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/components/Hero */ "./lib/components/Hero.js");
/* harmony import */ var _lib_components_MailChimpForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/components/MailChimpForm */ "./lib/components/MailChimpForm.js");
/* harmony import */ var _lib_components_Title__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/components/Title */ "./lib/components/Title.js");
/* harmony import */ var _lib_components_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/components/Section */ "./lib/components/Section.js");
/* harmony import */ var _lib_components_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/components/Icon */ "./lib/components/Icon.js");


var _jsxFileName = "/Users/wyattkirby/Dev/projects/hotroutes_website/pages/index.js";








var screenshots = ["/static/img/screenshots/stadium_1.png", "/static/img/screenshots/menu_1.png", "/static/img/screenshots/menu_2.png", "/static/img/screenshots/gameplay_1.png", "/static/img/screenshots/gameplay_2.png", "/static/img/screenshots/gameplay_3.png"];

var ImageGrid = function ImageGrid(_ref) {
  var images = _ref.images,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["images"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "images"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), images.map(function (image, i) {
    var imgSrc = typeof image === "string" ? image : image.src;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "screenshot",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
      src: imgSrc,
      className: "img-fluid rounded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib_components_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
    pageTitle: "Welcome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib_components_Hero__WEBPACK_IMPORTED_MODULE_5__["Hero"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib_components_Section__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    id: "copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: {
      size: 6,
      offset: 3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib_components_Title__WEBPACK_IMPORTED_MODULE_7__["Title"], {
    size: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Let's Play Ball"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Hot Routes: Virtual Football brings the fun and excitement of America's favorite game to a VR headset near you. Take the field and test your arm against an increasingly difficult set of routes."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "images",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/static/img/logos/unity.png",
    alt: "Made with Unity",
    className: "img-fluid d-inline-block mx-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/static/img/logos/vive.png",
    alt: "HTC Vive",
    className: "img-fluid d-inline-block mx-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: "/static/img/logos/steam.png",
    alt: "Made with Steam VR",
    className: "img-fluid d-inline-block mx-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib_components_Title__WEBPACK_IMPORTED_MODULE_7__["Subtitle"], {
    priority: "2",
    size: "4",
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Stay up to Date"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib_components_MailChimpForm__WEBPACK_IMPORTED_MODULE_6__["MailChimpForm"], {
    url: "https://twitter.us14.list-manage.com/subscribe/post?u=c995eaf6129ecf4b13d8ae469&id=dd2d98db0f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib_components_Section__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    id: "trailer",
    className: "has-background lg text-white",
    style: {
      backgroundImage: "url(/static/img/screenshots/gameplay_3.png)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "embed-responsive embed-responsive-16by9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("iframe", {
    className: "embed-responsive-item",
    src: "https://www.youtube-nocookie.com/embed/SmtEFYRiVrw?rel=0&showinfo=0",
    frameBorder: "0",
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib_components_Section__WEBPACK_IMPORTED_MODULE_8__["Section"], {
    id: "screenshots",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    className: "container-narrow text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_lib_components_Title__WEBPACK_IMPORTED_MODULE_7__["Subtitle"], {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Screenshots"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageGrid, {
    images: screenshots,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.01f14b983c47b5c1fdb1.hot-update.js.map
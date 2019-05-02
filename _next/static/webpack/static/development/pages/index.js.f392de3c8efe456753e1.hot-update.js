webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _lib_components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/components/Layout */ "./lib/components/Layout.js");
/* harmony import */ var _lib_components_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/components/Hero */ "./lib/components/Hero.js");
/* harmony import */ var _lib_components_MailChimpForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/components/MailChimpForm */ "./lib/components/MailChimpForm.js");
/* harmony import */ var _lib_components_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/components/Title */ "./lib/components/Title.js");
/* harmony import */ var _lib_components_Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/components/Section */ "./lib/components/Section.js");
/* harmony import */ var _lib_components_Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/components/Icon */ "./lib/components/Icon.js");

var _jsxFileName = "/Users/wyattkirby/Dev/projects/hotroutes_website/pages/index.js";








var screenshots = ["assets/img/screenshots/stadium_1.png", "assets/img/screenshots/menu_1.png", "assets/img/screenshots/menu_2.png", "assets/img/screenshots/gameplay_1.png", "assets/img/screenshots/gameplay_2.png", "assets/img/screenshots/gameplay_3.png"];

var ImageGrid = function ImageGrid(_ref) {
  var images = _ref.images,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["images"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "images",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, images.map(function (im, i) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "screenshot",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: im.src,
      className: "img-fluid img-rounded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_components_Layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
    pageTitle: "Welcome",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_components_Hero__WEBPACK_IMPORTED_MODULE_4__["Hero"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_components_Section__WEBPACK_IMPORTED_MODULE_7__["Section"], {
    id: "copy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    md: {
      size: 6,
      offset: 3
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_components_Title__WEBPACK_IMPORTED_MODULE_6__["Title"], {
    size: "4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Let's Play Ball"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Hot Routes: Virtual Football brings the fun and excitement of America's favorite game to a VR headset near you. Take the field and test your arm against an increasingly difficult set of routes."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "images",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/img/logos/unity.png",
    alt: "Made with Unity",
    className: "img-fluid d-inline-block mx-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/img/logos/vive.png",
    alt: "HTC Vive",
    className: "img-fluid d-inline-block mx-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/img/logos/steam.png",
    alt: "Made with Steam VR",
    className: "img-fluid d-inline-block mx-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_components_Title__WEBPACK_IMPORTED_MODULE_6__["Subtitle"], {
    priority: "2",
    size: "4",
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Stay up to Date"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_components_MailChimpForm__WEBPACK_IMPORTED_MODULE_5__["MailChimpForm"], {
    url: "https://twitter.us14.list-manage.com/subscribe/post?u=c995eaf6129ecf4b13d8ae469&id=dd2d98db0f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_components_Section__WEBPACK_IMPORTED_MODULE_7__["Section"], {
    id: "trailer",
    className: "has-background lg text-white",
    style: {
      backgroundImage: "url(/static/img/screenshots/gameplay_3.png)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "embed-responsive embed-responsive-16by9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("iframe", {
    className: "embed-responsive-item",
    src: "https://www.youtube-nocookie.com/embed/SmtEFYRiVrw?rel=0&showinfo=0",
    frameBorder: "0",
    allowFullScreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_lib_components_Section__WEBPACK_IMPORTED_MODULE_7__["Section"], {
    id: "screenshots",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImageGrid, {
    images: screenshots,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.f392de3c8efe456753e1.hot-update.js.map
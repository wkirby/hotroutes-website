webpackHotUpdate("static/development/pages/index.js",{

/***/ "./lib/components/MailChimpForm.js":
/*!*****************************************!*\
  !*** ./lib/components/MailChimpForm.js ***!
  \*****************************************/
/*! exports provided: MailChimpForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailChimpForm", function() { return MailChimpForm; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-mailchimp-subscribe */ "./node_modules/react-mailchimp-subscribe/es/index.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");



var _jsxFileName = "/Users/wyattkirby/Dev/projects/hotroutes_website/lib/components/MailChimpForm.js";





var CustomForm = function CustomForm(_ref) {
  var status = _ref.status,
      message = _ref.message,
      _onSubmit = _ref.onSubmit,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["status", "message", "onSubmit"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, status), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, message), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_6__["Formik"], {
    initialValues: {
      email: ""
    },
    onSubmit: function onSubmit(values, _a) {
      return _onSubmit(values);
    },
    render: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        onSubmit: props.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
        placeholder: "joe@example.com",
        type: "email",
        onChange: props.handleChange,
        onBlur: props.handleBlur,
        value: props.values.email,
        name: "email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), props.errors.email && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        id: "feedback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, props.errors.email), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        color: "primary",
        block: true,
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Subscribe"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }));
};

var MailChimpForm = function MailChimpForm(props) {
  var url = "https://twitter.us14.list-manage.com/subscribe/post?u=c995eaf6129ecf4b13d8ae469&id=dd2d98db0f";
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_5__["default"], {
    url: url,
    render: function render(_ref2) {
      var subscribe = _ref2.subscribe,
          status = _ref2.status,
          message = _ref2.message;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CustomForm, {
        status: status,
        message: message,
        onSubmit:
        /*#__PURE__*/
        function () {
          var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(formData) {
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return subscribe(formData);

                  case 2:
                    return _context.abrupt("return", _context.sent);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref3.apply(this, arguments);
          };
        }(),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.254444aacc3e718d0c15.hot-update.js.map
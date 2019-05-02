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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-mailchimp-subscribe */ "./node_modules/react-mailchimp-subscribe/es/index.js");





var _jsxFileName = "/Users/wyattkirby/Dev/projects/hotroutes_website/lib/components/MailChimpForm.js";


 // const submitForm = (email, onValidated) => {
//     return (email &&
//     email.value &&
//     email.value.indexOf("@") > -1 &&
//     onValidated({
//       EMAIL: email
//     }));
// }

var CustomForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CustomForm, _React$Component);

  function CustomForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CustomForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CustomForm).call(this, props));
    _this.email = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CustomForm, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          status = _this$props.status,
          message = _this$props.message,
          onValidated = _this$props.onValidated;
      var email;
      var submitting = status === "sending";
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Label"], {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Email Address"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
        ref: this.email,
        type: "email",
        placeholder: "joe@example.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["FormText"], {
        color: "muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "We won't sell your email. We hate that."), status === "sending" && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          color: "blue"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "sending..."), status === "error" && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          color: "red"
        },
        dangerouslySetInnerHTML: {
          __html: message
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), status === "success" && react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        style: {
          color: "green"
        },
        dangerouslySetInnerHTML: {
          __html: message
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        disabled: submitting,
        block: true,
        color: "primary",
        onClick: submitForm,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Subscribe"));
    }
  }]);

  return CustomForm;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var MailChimpForm = function MailChimpForm(props) {
  var url = "//twitter.us14.list-manage.com/subscribe/post?u=c995eaf6129ecf4b13d8ae469&id=dd2d98db0f";
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_7__["default"], {
    url: url,
    render: function render(_ref) {
      var subscribe = _ref.subscribe,
          status = _ref.status,
          message = _ref.message;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(CustomForm, {
        status: status,
        message: message,
        onValidated: function onValidated(formData) {
          return subscribe(formData);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.6daced3a0462acb941f8.hot-update.js.map
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-mailchimp-subscribe */ "./node_modules/react-mailchimp-subscribe/es/index.js");
var _jsxFileName = "/Users/wyattkirby/Dev/projects/hotroutes_website/lib/components/MailChimpForm.js";




var CustomForm = function CustomForm(_ref) {
  var status = _ref.status,
      message = _ref.message,
      onValidated = _ref.onValidated;
  var email, name;

  var submit = function submit() {
    return email && name && email.value.indexOf("@") > -1 && onValidated({
      EMAIL: email.value,
      NAME: name.value
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Label"], {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Email Address"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    ref: function ref(node) {
      return email = node;
    },
    type: "email",
    placeholder: "Your email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Submit")) // <div
  //   style={{
  //     background: "#efefef",
  //     borderRadius: 2,
  //     padding: 10,
  //     display: "inline-block"
  //   }}
  // >
  //   {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
  //   {status === "error" && (
  //     <div
  //       style={{ color: "red" }}
  //       dangerouslySetInnerHTML={{ __html: message }}
  //     />
  //   )}
  //   {status === "success" && (
  //     <div
  //       style={{ color: "green" }}
  //       dangerouslySetInnerHTML={{ __html: message }}
  //     />
  //   )}
  //   <br />
  //   <input
  //     style={{ fontSize: "2em", padding: 5 }}
  //     ref={node => (email = node)}
  //     type="email"
  //     placeholder="Your email"
  //   />
  //   <br />
  //   <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
  //     Submit
  //   </button>
  // </div>
  ;
};

var MailChimpForm = function MailChimpForm(props) {
  var url = "//twitter.us14.list-manage.com/subscribe/post?u=c995eaf6129ecf4b13d8ae469&id=dd2d98db0f";
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_2__["default"], {
    url: url,
    render: function render(_ref2) {
      var subscribe = _ref2.subscribe,
          status = _ref2.status,
          message = _ref2.message;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomForm, {
        status: status,
        message: message,
        onValidated: function onValidated(formData) {
          return subscribe(formData);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.1a6ce7696d13412afdeb.hot-update.js.map
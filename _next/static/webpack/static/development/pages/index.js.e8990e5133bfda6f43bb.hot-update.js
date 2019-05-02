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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");

var _jsxFileName = "/Users/wyattkirby/Dev/projects/hotroutes_website/lib/components/MailChimpForm.js";




var MailChimpForm = function MailChimpForm(props) {
  var url = "//twitter.us14.list-manage.com/subscribe/post-json?u=c995eaf6129ecf4b13d8ae469&id=dd2d98db0f";

  var handleSubmit = function handleSubmit(values, actions) {
    jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
      type: "POST",
      url: url,
      data: values,
      success: function success(d) {
        console.log(data);
        actions.setSubmitting(false);
      },
      error: function error(request, _error) {
        alert("Request: " + _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(request));
      },
      dataType: 'json'
    }); // jsonp(
    //   url,
    //   {
    //     param: "c"
    //   },
    //   (err, data) => {
    //
    //     if (err) {
    //       this.setState({
    //         status: "error",
    //         message: err
    //       });
    //     } else if (data.result !== "success") {
    //       this.setState({
    //         status: "error",
    //         message: data.msg
    //       });
    //     } else {
    //       this.setState({
    //         status: "success",
    //         message: data.msg
    //       });
    //     }
    //   }
    // );
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
    initialValues: {
      EMAIL: ""
    },
    onSubmit: handleSubmit,
    render: function render(props) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        onSubmit: props.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, props.errors.EMAIL && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "feedback",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, props.errors.EMAIL), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        name: "b_c995eaf6129ecf4b13d8ae469_dd2d98db0f",
        tabindex: "-1",
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Label"], {
        className: "sr-only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, "Email Address"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Input"], {
        name: "EMAIL",
        onChange: props.handleChange,
        onBlur: props.handleBlur,
        value: props.values.EMAIL,
        type: "email",
        placeholder: "joe@example.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormText"], {
        color: "muted",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "We won't sell your email. We hate that.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        block: true,
        color: "primary",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Subscribe"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }));
};

/***/ })

})
//# sourceMappingURL=index.js.e8990e5133bfda6f43bb.hot-update.js.map
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_medium_image_zoom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-medium-image-zoom */ "./node_modules/react-medium-image-zoom/lib/index.js");
/* harmony import */ var react_medium_image_zoom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_medium_image_zoom__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/Users/wyattkirby/Dev/projects/hotroutes_website/lib/components/ImageGrid.js";




var ZoomImage =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ZoomImage, _React$Component);

  function ZoomImage() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, ZoomImage);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(ZoomImage).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(ZoomImage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          src = _this$props.src,
          alt = _this$props.alt,
          className = _this$props.className,
          style = _this$props.style;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_medium_image_zoom__WEBPACK_IMPORTED_MODULE_9___default.a, {
        image: {
          src: src,
          alt: alt,
          className: className,
          style: style
        },
        zoomImage: {
          src: "bridge-big.jpg",
          alt: "Golden Gate Bridge"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      });
    }
  }]);

  return ZoomImage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var ImageGrid = function ImageGrid(_ref) {
  var images = _ref.images,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["images", "className"]);

  var classNames = classnames__WEBPACK_IMPORTED_MODULE_8___default()("images", className);
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classNames
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), images.map(function (image, i) {
    var imgSrc = typeof image === "string" ? image : image.src;
    return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
      className: "screenshot",
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(ZoomImage, {
      src: imgSrc,
      className: "img-fluid rounded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }));
  }));
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/medium-zoom/dist/medium-zoom.esm.js":
false,

/***/ "./node_modules/react-medium-image-zoom/lib/EventsWrapper.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-medium-image-zoom/lib/EventsWrapper.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _defaults = __webpack_require__(/*! ./defaults */ "./node_modules/react-medium-image-zoom/lib/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/react-medium-image-zoom/lib/helpers.js");

var _keyboardEvents = __webpack_require__(/*! ./keyboardEvents */ "./node_modules/react-medium-image-zoom/lib/keyboardEvents.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventsWrapper = function (_Component) {
  _inherits(EventsWrapper, _Component);

  function EventsWrapper() {
    _classCallCheck(this, EventsWrapper);

    var _this = _possibleConstructorReturn(this, (EventsWrapper.__proto__ || Object.getPrototypeOf(EventsWrapper)).call(this));

    _this.portal = (0, _helpers.createPortalContainer)('div');
    _this.unzoom = _this.unzoom.bind(_this);
    _this._handleScroll = _this._handleScroll.bind(_this);
    _this._handleKeyDown = _this._handleKeyDown.bind(_this);
    _this._handleResize = _this._handleResize.bind(_this);
    _this._handleTouchStart = _this._handleTouchStart.bind(_this);
    _this._handleTouchMove = _this._handleTouchMove.bind(_this);
    _this._handleTouchEnd = _this._handleTouchEnd.bind(_this);
    return _this;
  }

  _createClass(EventsWrapper, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.pageYOffset = window.pageYOffset;
      this.loadTimeout = setTimeout(function () {
        window.addEventListener('scroll', _this2._handleScroll);
        window.addEventListener('keydown', _this2._handleKeyDown);
        window.addEventListener('ontouchstart', _this2._handleTouchStart);
        window.addEventListener('ontouchmove', _this2._handleTouchMove);
        window.addEventListener('ontouchend', _this2._handleTouchEnd);
        window.addEventListener('ontouchcancel', _this2._handleTouchEnd);
        window.addEventListener('resize', _this2._handleResize);
      }, _defaults2.default.transitionDuration);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.loadTimeout);
      window.removeEventListener('scroll', this._handleScroll);
      window.removeEventListener('keydown', this._handleKeyDown);
      window.removeEventListener('ontouchstart', this._handleTouchStart);
      window.removeEventListener('ontouchmove', this._handleTouchMove);
      window.removeEventListener('ontouchend', this._handleTouchEnd);
      window.removeEventListener('ontouchcancel', this._handleTouchEnd);
      window.removeEventListener('resize', this._handleResize);
      (0, _helpers.removePortalContainer)(this.portal);
    }
  }, {
    key: 'render',
    value: function render() {
      return this.portal ? (0, _reactDom.createPortal)(_react2.default.createElement(
        'div',
        { onClick: this.unzoom },
        this._cloneChild()
      ), this.portal) : null;
    }
  }, {
    key: 'unzoom',
    value: function unzoom() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          force = _ref.force,
          allowRefocus = _ref.allowRefocus;

      if (this.props.controlledEventFn && !force) {
        return this.props.controlledEventFn();
      }

      return this.child.unzoom(allowRefocus);
    }
  }, {
    key: '_cloneChild',
    value: function _cloneChild() {
      var _this3 = this;

      return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), {
        ref: function ref(child) {
          _this3.child = child;
        }
      });
    }
  }, {
    key: '_handleKeyDown',
    value: function _handleKeyDown(e) {
      if ((0, _keyboardEvents.isTabKey)(e)) {
        e.preventDefault(); // prevent in-behind controls from grabbing focus
        return;
      }

      var allowAccessibilityClose = this.props.allowAccessibilityClose;

      var unzoomForEnterOrSpace = allowAccessibilityClose && (0, _keyboardEvents.isEnterOrSpaceBarKey)(e);
      var unzoomForEscape = (0, _keyboardEvents.isEscapeKey)(e);

      if (unzoomForEnterOrSpace) {
        e.preventDefault(); // prevent space bar from scrolling
      }

      if (unzoomForEnterOrSpace || unzoomForEscape) {
        this.unzoom({ allowRefocus: true });
      }
    }
  }, {
    key: '_handleResize',
    value: function _handleResize() {
      this.forceUpdate();
    }
  }, {
    key: '_handleScroll',
    value: function _handleScroll() {
      this.forceUpdate();
      var scrollChange = Math.abs(window.pageYOffset - this.pageYOffset);
      if (scrollChange > 10) {
        this.unzoom();
      }
    }
  }, {
    key: '_handleTouchStart',
    value: function _handleTouchStart(e) {
      this.yTouchPosition = e.touches[0].clientY;
    }
  }, {
    key: '_handleTouchMove',
    value: function _handleTouchMove(e) {
      this.forceUpdate();
      var touchChange = Math.abs(e.touches[0].clientY - this.yTouchPosition);
      if (touchChange > 10) {
        this.unzoom();
      }
    }
  }, {
    key: '_handleTouchEnd',
    value: function _handleTouchEnd() {
      delete this.yTouchPosition;
    }
  }]);

  return EventsWrapper;
}(_react.Component);

exports.default = EventsWrapper;


EventsWrapper.propTypes = {
  children: _propTypes.element.isRequired,
  getControlledEventFn: _propTypes.func
};

/***/ }),

/***/ "./node_modules/react-medium-image-zoom/lib/ImageZoom.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-medium-image-zoom/lib/ImageZoom.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _defaults = __webpack_require__(/*! ./defaults */ "./node_modules/react-medium-image-zoom/lib/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/react-medium-image-zoom/lib/helpers.js");

var _keyboardEvents = __webpack_require__(/*! ./keyboardEvents */ "./node_modules/react-medium-image-zoom/lib/keyboardEvents.js");

var _EventsWrapper = __webpack_require__(/*! ./EventsWrapper */ "./node_modules/react-medium-image-zoom/lib/EventsWrapper.js");

var _EventsWrapper2 = _interopRequireDefault(_EventsWrapper);

var _Zoom = __webpack_require__(/*! ./Zoom */ "./node_modules/react-medium-image-zoom/lib/Zoom.js");

var _Zoom2 = _interopRequireDefault(_Zoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isControlled = function isControlled(isZoomed) {
  return isZoomed !== null && isZoomed !== undefined;
};
var focusableTabIndex = 0;
var unfocusableTabIndex = -1;

var ImageZoom = function (_Component) {
  _inherits(ImageZoom, _Component);

  function ImageZoom(props) {
    _classCallCheck(this, ImageZoom);

    var _this = _possibleConstructorReturn(this, (ImageZoom.__proto__ || Object.getPrototypeOf(ImageZoom)).call(this, props));

    _this.state = {
      isDisabled: false,
      isZoomed: false,
      src: props.image.src
    };

    _this._handleKeyDown = _this._handleKeyDown.bind(_this);
    _this._handleLoad = _this._handleLoad.bind(_this);
    _this._handleLoadError = _this._handleLoadError.bind(_this);
    _this._handleUnzoom = _this._handleUnzoom.bind(_this);
    _this._handleZoom = _this._handleZoom.bind(_this);
    return _this;
  }

  _createClass(ImageZoom, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!isControlled(this.props.isZoomed) && isControlled(nextProps.isZoomed)) {
        throw new Error(_defaults2.default.errors.uncontrolled);
      } else if (isControlled(this.props.isZoomed) && !isControlled(nextProps.isZoomed)) {
        throw new Error(_defaults2.default.errors.controlled);
      }

      /**
       * When component is controlled, we need a flag
       * set when it's about to close in order to keep
       * hiding the original image on the page until the
       * unzooming is complete
       */
      if (this.props.isZoomed && !nextProps.isZoomed) {
        this.isClosing = true;
      }

      var src = this.props.image.src;
      var nextSrc = nextProps.image.src;

      // If the consumer wants to change the image's src, then so be it.

      if (src !== nextSrc) {
        this.setState({ src: nextSrc });
      }
    }

    /**
     * When the component's state updates, check for changes
     * and either zoom or start the unzoom procedure.
     * NOTE: We need to differentiate whether this is a
     * controlled or uncontrolled component and do the check
     * based off of that.
     */

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var prevIsZoomed = isControlled(prevProps.isZoomed) ? prevProps.isZoomed : prevState.isZoomed;
      var isZoomed = isControlled(this.props.isZoomed) ? this.props.isZoomed : this.state.isZoomed;
      if (prevIsZoomed !== isZoomed && !isZoomed && this.portalInstance) {
        this.portalInstance.unzoom({ force: true });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          defaultStyles = _props.defaultStyles,
          image = _props.image,
          propsIsZoomed = _props.isZoomed,
          shouldRespectMaxDimension = _props.shouldRespectMaxDimension,
          zoomImage = _props.zoomImage,
          zoomMargin = _props.zoomMargin,
          _state = this.state,
          isDisabled = _state.isDisabled,
          stateIsZoomed = _state.isZoomed,
          src = _state.src;

      /**
       * Take whatever attributes you want to pass the image
       * and then override with the properties we need,
       * including using state as source of truth for hi/low-res
       * version img src.
       * Also, disable any clicking if the component is
       * already at its maximum dimensions.
       */

      var attrs = _extends({}, !isDisabled && { tabIndex: focusableTabIndex }, image, { src: src, style: this._getImageStyle() }, !isDisabled && {
        onMouseDown: this._preventFocus,
        onClick: this._handleZoom,
        onKeyDown: this._handleKeyDown
      });
      var isZoomed = isControlled(propsIsZoomed) ? propsIsZoomed : stateIsZoomed;

      return [_react2.default.createElement('img', _extends({}, attrs, {
        key: 'image',
        ref: function ref(x) {
          _this2.image = x;
        },
        onLoad: this._handleLoad,
        onError: this._handleLoadError
      })), this.image && (isZoomed || this.isClosing) ? _react2.default.createElement(
        _EventsWrapper2.default,
        {
          key: 'portal',
          ref: function ref(node) {
            _this2.portalInstance = node;
          },
          controlledEventFn: this._getControlledEventFn(),
          allowAccessibilityClose: this._allowTabNavigation()
        },
        _react2.default.createElement(_Zoom2.default, {
          defaultStyles: defaultStyles,
          image: this.image,
          shouldRespectMaxDimension: shouldRespectMaxDimension,
          zoomImage: zoomImage,
          zoomMargin: Number(zoomMargin),
          onUnzoom: this._handleUnzoom
        })
      ) : null];
    }

    /**
     * If the image should not exceed its original
     * dimensions AND there is no zoomImage AND the
     * image is already rendered at its maximum dimensions,
     * then we shouldn't try to zoom it at all. We currently
     * only do this on componentDidMount, though on window
     * resize could be something to consider if necessary.
     */

  }, {
    key: '_checkShouldDisableComponent',
    value: function _checkShouldDisableComponent() {
      var _props2 = this.props,
          shouldRespectMaxDimension = _props2.shouldRespectMaxDimension,
          zoomImage = _props2.zoomImage;

      var isDisabled = shouldRespectMaxDimension && !zoomImage && (0, _helpers.isMaxDimension)(this.image);

      this.setState({ isDisabled: isDisabled });
    }
  }, {
    key: '_getImageStyle',
    value: function _getImageStyle() {
      var isClosing = this.isClosing,
          _props3 = this.props,
          defaultStyles = _props3.defaultStyles,
          image = _props3.image,
          isZoomedP = _props3.isZoomed,
          _state2 = this.state,
          isDisabled = _state2.isDisabled,
          isZoomedSt = _state2.isZoomed;


      var isHidden = isZoomedSt || isZoomedP || isClosing;

      return _extends({}, _defaults2.default.styles.image, isHidden && { visibility: 'hidden' }, defaultStyles.image, image.style, isDisabled && { cursor: 'inherit' });
    }

    /**
     * We need to wait for the main image
     * to load before we can do any width/height
     * checks on it.
     */

  }, {
    key: '_handleLoad',
    value: function _handleLoad(e) {
      this._checkShouldDisableComponent();

      var cb = this.props.image.onLoad || Function.prototype;
      cb(e);
    }
  }, {
    key: '_handleLoadError',
    value: function _handleLoadError(e) {
      this.setState({ isDisabled: true });

      var cb = this.props.image.onError || Function.prototype;
      cb(e);
    }
  }, {
    key: '_handleKeyDown',
    value: function _handleKeyDown(e) {
      if ((0, _keyboardEvents.isEnterOrSpaceBarKey)(e)) {
        e.preventDefault();
        this._handleZoom(e);
      }
    }
  }, {
    key: '_preventFocus',
    value: function _preventFocus(e) {
      e.preventDefault();
    }
  }, {
    key: '_handleZoom',
    value: function _handleZoom(e) {
      if (!isControlled(this.props.isZoomed) && this.props.shouldHandleZoom(e)) {
        this.setState({ isZoomed: true }, this.props.onZoom);
      } else {
        this.props.onZoom();
      }
    }

    /**
     * This gets passed to the zoomed component as a callback
     * to trigger when the time is right to shut down the zoom.
     * If `shouldReplaceImage`, update the normal image we're showing
     * with the zoomed image -- useful when wanting to replace a low-res
     * image with a high-res one once it's already been downloaded.
     * It also cleans up the zoom references and then updates state.
     */

  }, {
    key: '_handleUnzoom',
    value: function _handleUnzoom(src, allowRefocus) {
      var _this3 = this;

      return function () {
        var changes = _extends({ isZoomed: false }, _this3.props.shouldReplaceImage && { src: src });

        /**
         * Lamentable but necessary right now in order to
         * remove the portal instance before the next
         * `componentDidUpdate` check for the portalInstance.
         * The reasoning is so we can differentiate between an
         * external `isZoomed` command and an internal one.
         */
        delete _this3.isClosing;

        _this3.setState(changes, _this3.props.onUnzoom);

        if (allowRefocus && _this3._allowTabNavigation()) {
          _this3.image.focus();
        }
      };
    }
  }, {
    key: '_getControlledEventFn',
    value: function _getControlledEventFn() {
      return isControlled(this.props.isZoomed) ? this.props.onUnzoom : null;
    }
  }, {
    key: '_allowTabNavigation',
    value: function _allowTabNavigation() {
      return this.image && this.image.tabIndex !== unfocusableTabIndex;
    }
  }], [{
    key: 'defaultProps',
    get: function get() {
      return {
        shouldReplaceImage: true,
        shouldRespectMaxDimension: false,
        zoomMargin: 40,
        defaultStyles: {
          zoomContainer: {},
          overlay: {},
          image: {},
          zoomImage: {}
        },
        shouldHandleZoom: function shouldHandleZoom() {
          return true;
        },
        onZoom: function onZoom() {},
        onUnzoom: function onUnzoom() {}
      };
    }
  }]);

  return ImageZoom;
}(_react.Component);

exports.default = ImageZoom;


ImageZoom.propTypes = {
  image: (0, _propTypes.shape)({
    src: _propTypes.string.isRequired,
    alt: _propTypes.string,
    className: _propTypes.string,
    style: _propTypes.object
  }).isRequired,
  zoomImage: (0, _propTypes.shape)({
    src: _propTypes.string,
    alt: _propTypes.string,
    className: _propTypes.string,
    style: _propTypes.object
  }),
  defaultStyles: _propTypes.object,
  isZoomed: _propTypes.bool,
  shouldHandleZoom: _propTypes.func,
  shouldReplaceImage: _propTypes.bool,
  shouldRespectMaxDimension: _propTypes.bool,
  onZoom: _propTypes.func,
  onUnzoom: _propTypes.func
};

/***/ }),

/***/ "./node_modules/react-medium-image-zoom/lib/Overlay.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-medium-image-zoom/lib/Overlay.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _defaults = __webpack_require__(/*! ./defaults */ "./node_modules/react-medium-image-zoom/lib/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = function (_Component) {
  _inherits(Overlay, _Component);

  function Overlay(props) {
    _classCallCheck(this, Overlay);

    var _this = _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call(this, props));

    _this.state = {
      isVisible: false
    };
    return _this;
  }

  _createClass(Overlay, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.setState({ isVisible: true });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!nextProps.isVisible) this.setState({ isVisible: false });
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props.isVisible !== nextProps.isVisible || this.state.isVisible !== nextProps.isVisible;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { style: this._getStyle() });
    }
  }, {
    key: '_getStyle',
    value: function _getStyle() {
      var opacity = this.state.isVisible & 1; // bitwise and; converts bool to 0 or 1
      return _extends({}, _defaults2.default.styles.overlay, { opacity: opacity }, this.props.defaultStyles.overlay);
    }
  }]);

  return Overlay;
}(_react.Component);

exports.default = Overlay;


Overlay.propTypes = {
  isVisible: _propTypes.bool.isRequired,
  defaultStyles: _propTypes.object.isRequired
};

/***/ }),

/***/ "./node_modules/react-medium-image-zoom/lib/Zoom.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-medium-image-zoom/lib/Zoom.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _defaults = __webpack_require__(/*! ./defaults */ "./node_modules/react-medium-image-zoom/lib/defaults.js");

var _defaults2 = _interopRequireDefault(_defaults);

var _helpers = __webpack_require__(/*! ./helpers */ "./node_modules/react-medium-image-zoom/lib/helpers.js");

var _Overlay = __webpack_require__(/*! ./Overlay */ "./node_modules/react-medium-image-zoom/lib/Overlay.js");

var _Overlay2 = _interopRequireDefault(_Overlay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * The `tmpSrc` and `TmpImg` code here is a workaround
 * for a longstanding Firefox issue where replacing the
 * `src` of an `<img>` tag requires calculations and
 * results in a "flicker" of sorts.
 *
 * See https://github.com/rpearce/react-medium-image-zoom/issues/96
 * for further details.
 */

var Zoom = function (_Component) {
  _inherits(Zoom, _Component);

  function Zoom(props) {
    _classCallCheck(this, Zoom);

    var _this = _possibleConstructorReturn(this, (Zoom.__proto__ || Object.getPrototypeOf(Zoom)).call(this, props));

    _this.state = {
      hasLoaded: false,
      isZoomed: true,
      src: props.image.currentSrc || props.image.src,
      tmpSrc: null
    };

    _this.unzoom = _this.unzoom.bind(_this);
    _this._handleImageLoad = _this._handleImageLoad.bind(_this);
    return _this;
  }

  _createClass(Zoom, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props$zoomImage = this.props.zoomImage,
          src = _props$zoomImage.src,
          srcSet = _props$zoomImage.srcSet;


      this.setState({ hasLoaded: true });

      if (src || srcSet) {
        (0, _helpers.fetchImage)(this.props.zoomImage, this._handleImageLoad);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      // If we have a `tmpSrc`, wait and then give it to `src`
      if (!prevState.tmpSrc && this.state.tmpSrc) {
        setTimeout(function () {
          _this2.setState({ src: _this2.state.tmpSrc, tmpSrc: null });
        }, 100);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          defaultStyles = _props.defaultStyles,
          zoomImage = _props.zoomImage,
          _state = this.state,
          tmpSrc = _state.tmpSrc,
          isZoomed = _state.isZoomed,
          src = _state.src;


      var style = this._getZoomImageStyle();

      return _react2.default.createElement(
        'div',
        { style: this._getZoomContainerStyle() },
        _react2.default.createElement(_Overlay2.default, { isVisible: isZoomed, defaultStyles: defaultStyles }),
        _react2.default.createElement('img', _extends({}, zoomImage, { src: src, style: style })),
        _react2.default.createElement(TmpImg, _extends({}, zoomImage, { src: tmpSrc, style: style }))
      );
    }
  }, {
    key: 'unzoom',
    value: function unzoom(allowRefocus) {
      var onUnzoom = this.props.onUnzoom(this.state.src, allowRefocus);
      this.setState({ isZoomed: false }, function () {
        return setTimeout(onUnzoom, _defaults2.default.transitionDuration);
      });
    }
  }, {
    key: '_handleImageLoad',
    value: function _handleImageLoad(img) {
      // Only set state if component is still mounted
      if (this.state.isZoomed) {
        this.setState({ tmpSrc: img.currentSrc || img.src });
      }
    }
  }, {
    key: '_getZoomContainerStyle',
    value: function _getZoomContainerStyle() {
      return _extends({}, _defaults2.default.styles.zoomContainer, this.props.defaultStyles.zoomContainer);
    }
  }, {
    key: '_getZoomImageStyle',
    value: function _getZoomImageStyle() {
      var _props2 = this.props,
          image = _props2.image,
          shouldRespectMaxDimension = _props2.shouldRespectMaxDimension,
          src = _props2.src,
          zoomMargin = _props2.zoomMargin;

      var imageOffset = image.getBoundingClientRect();

      var top = imageOffset.top,
          left = imageOffset.left;
      var width = image.width,
          height = image.height,
          naturalWidth = image.naturalWidth,
          naturalHeight = image.naturalHeight;


      var style = { top: top, left: left, width: width, height: height };

      if (!this.state.hasLoaded || !this.state.isZoomed) {
        return _extends({}, _defaults2.default.styles.zoomImage, this.props.defaultStyles.zoomImage, this.props.style, style);
      }

      // Get the the coords for center of the viewport
      var viewportX = document.body.clientWidth / 2;
      var viewportY = window.innerHeight / 2;

      // Get the coords for center of the original image
      var imageCenterX = imageOffset.left + width / 2;
      var imageCenterY = imageOffset.top + height / 2;

      // Get offset amounts for image coords to be centered on screen
      var translateX = viewportX - imageCenterX;
      var translateY = viewportY - imageCenterY;

      // Figure out how much to scale the image
      var scale = shouldRespectMaxDimension && !src ? (0, _helpers.getMaxDimensionScale)({
        width: width,
        height: height,
        naturalWidth: naturalWidth,
        naturalHeight: naturalHeight,
        zoomMargin: zoomMargin
      }) : (0, _helpers.getScale)({ width: width, height: height, zoomMargin: zoomMargin });

      var zoomStyle = {
        transform: 'translate3d(' + translateX + 'px, ' + translateY + 'px, 0) scale(' + scale + ')'
      };

      return _extends({}, _defaults2.default.styles.zoomImage, this.props.defaultStyles.zoomImage, this.props.style, style, zoomStyle);
    }
  }], [{
    key: 'defaultProps',
    get: function get() {
      return {
        zoomImage: {}
      };
    }
  }]);

  return Zoom;
}(_react.Component);

exports.default = Zoom;


Zoom.propTypes = {
  defaultStyles: _propTypes.object.isRequired,
  image: _propTypes.object.isRequired,
  shouldRespectMaxDimension: _propTypes.bool,
  zoomImage: (0, _propTypes.shape)({
    src: _propTypes.string,
    alt: _propTypes.string,
    className: _propTypes.string,
    style: _propTypes.object
  }).isRequired,
  zoomMargin: _propTypes.number.isRequired,
  onUnzoom: _propTypes.func.isRequired
};

var TmpImg = function TmpImg(_ref) {
  var src = _ref.src,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ['src', 'style']);

  return src ? _react2.default.createElement('img', _extends({}, props, { src: src, style: getTmpStyle(style) })) : null;
};

var tmpStyle = {
  position: 'fixed',
  visibility: 'hidden'
};

var getTmpStyle = function getTmpStyle(style) {
  return _extends({}, style, tmpStyle);
};

/***/ }),

/***/ "./node_modules/react-medium-image-zoom/lib/defaults.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-medium-image-zoom/lib/defaults.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var transitionDuration = 300;

var defaults = {
  errors: {
    controlled: 'A component is changing a react-medium-image-zoom component from a controlled component to an uncontrolled one. ImageZoom elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled image zoom element for the lifetime of the component.',
    uncontrolled: 'A component is changing a react-medium-image-zoom component from an uncontrolled component to a controlled one. ImageZoom elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled image zoom element for the lifetime of the component.'
  },
  styles: {
    image: {
      cursor: 'zoom-in'
    },
    zoomImage: {
      cursor: 'zoom-out',
      position: 'absolute',
      transition: 'transform ' + transitionDuration + 'ms',
      transform: 'translate3d(0, 0, 0) scale(1)',
      transformOrigin: 'center center',
      willChange: 'transform, top, left'
    },
    zoomContainer: {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 999
    },
    overlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundColor: '#fff',
      opacity: 0,
      transition: 'opacity ' + transitionDuration + 'ms'
    }
  },
  transitionDuration: transitionDuration
};

exports.default = defaults;

/***/ }),

/***/ "./node_modules/react-medium-image-zoom/lib/helpers.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-medium-image-zoom/lib/helpers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createPortalContainer = exports.createPortalContainer = function createPortalContainer(tag) {
  var portal = document.createElement(tag);
  document.body.appendChild(portal);
  return portal;
};

var removePortalContainer = exports.removePortalContainer = function removePortalContainer(portal) {
  document.body.removeChild(portal);
};

var fetchImage = exports.fetchImage = function fetchImage(image, cb) {
  var src = image.src,
      srcSet = image.srcSet,
      sizes = image.sizes;

  var img = new Image();
  var onLoad = function onLoad() {
    cb(img);

    /**
     * If using srcset, future resize events can trigger
     * additional onload events to fire.
     * Remove listener after first load
     */
    img.removeEventListener('load', onLoad);
  };
  img.addEventListener('load', onLoad);
  img.src = src;
  if (srcSet) img.srcset = srcSet;
  if (sizes) img.sizes = sizes;
};

/**
 * Figure out how much to scale based
 * solely on no maxing out the browser
 */
var getScale = exports.getScale = function getScale(_ref) {
  var width = _ref.width,
      height = _ref.height,
      zoomMargin = _ref.zoomMargin;

  var scaleX = window.innerWidth / (width + zoomMargin);
  var scaleY = window.innerHeight / (height + zoomMargin);
  return Math.min(scaleX, scaleY);
};

/**
 * Figure out how much to scale so you're
 * not larger than the original image
 */
var getMaxDimensionScale = exports.getMaxDimensionScale = function getMaxDimensionScale(_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      naturalWidth = _ref2.naturalWidth,
      naturalHeight = _ref2.naturalHeight,
      zoomMargin = _ref2.zoomMargin;

  var scale = getScale({
    width: naturalWidth,
    height: naturalHeight,
    zoomMargin: zoomMargin
  });
  var ratio = naturalWidth > naturalHeight ? naturalWidth / width : naturalHeight / height;
  return scale > 1 ? ratio : scale * ratio;
};

var isMaxDimension = exports.isMaxDimension = function isMaxDimension(img) {
  return img.clientWidth >= img.naturalWidth || img.clientHeight >= img.naturalHeight;
};

/***/ }),

/***/ "./node_modules/react-medium-image-zoom/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-medium-image-zoom/lib/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ImageZoom = __webpack_require__(/*! ./ImageZoom */ "./node_modules/react-medium-image-zoom/lib/ImageZoom.js");

var _ImageZoom2 = _interopRequireDefault(_ImageZoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ImageZoom2.default;

/***/ }),

/***/ "./node_modules/react-medium-image-zoom/lib/keyboardEvents.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-medium-image-zoom/lib/keyboardEvents.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var enterKey = {
  keys: ['Enter'],
  keyCode: 13
};

var tabKey = {
  keys: ['Tab'],
  keyCode: 9
};

var spaceBarKey = {
  keys: [' '],
  keyCode: 32
};

var escapeKey = {
  keys: ['Escape', 'Esc'],
  keyCode: 27

  /**
   * Per the MDN, KeyboardEvent.keyCode and KeyboardEvent.which
   * are deprecated. KeyboardEvent.code is not to be used to
   * determine what character corresponds with a key event
   * and is also not supported on Edge. KeyboardEvent.key is the
   * preferred method, but seems less reliable than keyCode given
   * it returns different strings for different browsers; ex: "Escape"
   * in Chrome, but "Esc" in Edge. This function future proofs
   * against deprecation, while still giving preference to the more
   * reliable keyCode.
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/which
   *
   * KeyMap : { keyCode: Number, keys: [ String ] }
   * isKey : KeyMap -> KeyboardEvent -> Boolean
   */
};var isKey = function isKey(_ref) {
  var keyCode = _ref.keyCode,
      keys = _ref.keys;
  return function (e) {
    return e.keyCode ? e.keyCode === keyCode : keys.indexOf(e.key) !== -1;
  };
};

// is<X>Key : KeyboardEvent -> Boolean
var isEnterOrSpaceBarKey = exports.isEnterOrSpaceBarKey = function isEnterOrSpaceBarKey(e) {
  return isKey(enterKey)(e) || isSpaceBarKey(e);
};
var isTabKey = exports.isTabKey = isKey(tabKey);
var isSpaceBarKey = exports.isSpaceBarKey = isKey(spaceBarKey);
var isEscapeKey = exports.isEscapeKey = isKey(escapeKey);

/***/ })

})
//# sourceMappingURL=index.js.ef171ea870d35d0f692a.hot-update.js.map
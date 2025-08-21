"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _Link = require("../../../utils/Link");

var _excluded = ["element", "href", "to", "isStartButton", "disabled", "className", "preventDoubleClick", "name", "type", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var Button = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
  var element = props.element,
      href = props.href,
      to = props.to,
      isStartButton = props.isStartButton,
      disabled = props.disabled,
      className = props.className,
      preventDoubleClick = props.preventDoubleClick,
      name = props.name,
      type = props.type,
      children = props.children,
      attributes = (0, _objectWithoutProperties2["default"])(props, _excluded);

  var buttonRef = ref || /*#__PURE__*/_react["default"].createRef();

  var el = '';

  var buttonAttributes = _objectSpread(_objectSpread({
    name: name,
    type: type
  }, attributes), {}, {
    'data-module': 'govuk-button'
  });

  var button;
  (0, _react.useEffect)(function () {
    (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var _yield$import, ButtonJS;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof document !== 'undefined')) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return import(
              /* webpackChunkName: "govuk-frontend-button" */

              /* webpackMode: "lazy" */

              /* webpackPrefetch: true */
              'govuk-frontend/govuk/components/button/button');

            case 3:
              _yield$import = _context.sent;
              ButtonJS = _yield$import["default"];

              if (buttonRef.current) {
                new ButtonJS(buttonRef.current).init();
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [buttonRef]);

  if (element) {
    el = element;
  } else if (href || to) {
    el = 'a';
  } else {
    el = 'button';
  }

  var iconHtml;

  if (isStartButton) {
    iconHtml = /*#__PURE__*/_react["default"].createElement("svg", {
      className: "govuk-button__start-icon",
      xmlns: "http://www.w3.org/2000/svg",
      width: "17.5",
      height: "19",
      viewBox: "0 0 33 40",
      "aria-hidden": "true",
      focusable: "false"
    }, /*#__PURE__*/_react["default"].createElement("path", {
      fill: "currentColor",
      d: "M0 0h13l20 20-20 20H0l20-20z"
    }));
  }

  var commonAttributes = {
    className: "govuk-button ".concat(className || '').concat(disabled ? ' govuk-button--disabled' : '', " ").concat(isStartButton ? 'govuk-button--start' : ''),
    ref: buttonRef
  };

  if (preventDoubleClick) {
    buttonAttributes['data-prevent-double-click'] = preventDoubleClick;
  }

  if (disabled) {
    buttonAttributes = _objectSpread(_objectSpread({}, buttonAttributes), {}, {
      'aria-disabled': true,
      disabled: 'disabled'
    });
  }

  if (el === 'a') {
    var linkAttributes = _objectSpread(_objectSpread(_objectSpread({}, commonAttributes), {}, {
      role: 'button',
      draggable: 'false'
    }, attributes), {}, {
      'data-module': 'govuk-button',
      href: href,
      to: to
    });

    button = /*#__PURE__*/_react["default"].createElement(_Link.Link, linkAttributes, children, iconHtml);
  } else if (el === 'button') {
    button =
    /*#__PURE__*/
    // Disabling linting of button type, because the button _does_ have an explicit type
    // It is defined in the defaultProps of the component, which gets added
    // to the buttonAttributes. eslint fails to detect this, and so we need to
    // disable the linting rule
    //
    // eslint-disable-next-line react/button-has-type
    _react["default"].createElement("button", (0, _extends2["default"])({}, buttonAttributes, commonAttributes), children, iconHtml);
  } else if (el === 'input') {
    if (!type) {
      buttonAttributes.type = 'submit';
    }

    button = /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
      value: children
    }, buttonAttributes, commonAttributes));
  }

  return button;
});

exports.Button = Button;
Button.displayName = 'Button';
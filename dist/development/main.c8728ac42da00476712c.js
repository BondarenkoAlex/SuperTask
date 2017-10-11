webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  Object(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}



/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(89);


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createProvider", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });






/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(69);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ADD_PROJECT = exports.ADD_PROJECT = 'ADD_PROJECT';
var REMOVE_PROJECT = exports.REMOVE_PROJECT = 'REMOVE_PROJECT';

var OPEN_CLOSE_PROJECT = exports.OPEN_CLOSE_PROJECT = 'OPEN_CLOSE_PROJECT';

var ADD_VACANCY = exports.ADD_VACANCY = 'ADD_VACANCY';
var REMOVE_VACANCY = exports.REMOVE_VACANCY = 'REMOVE_VACANCY';

var OPEN_CLOSE_VACANCY = exports.OPEN_CLOSE_VACANCY = 'OPEN_CLOSE_VACANCY';

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = __webpack_require__(99);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function ButtonFull(props) {
  var children = props.children,
      onClick = props.onClick,
      type = props.type;

  return _react2['default'].createElement(
    'button',
    {
      className: _style2['default'].buttonBg,
      type: type,
      onClick: onClick
    },
    children
  );
}

ButtonFull.propTypes = {
  children: _propTypes2['default'].string.isRequired,
  onClick: _propTypes2['default'].func.isRequired,
  type: _propTypes2['default'].string
};
ButtonFull.defaultProps = {
  type: 'button'
};

exports['default'] = ButtonFull;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProject = addProject;
exports.removeProject = removeProject;
exports.openCloseProject = openCloseProject;
exports.addVacancy = addVacancy;
exports.removeVacancy = removeVacancy;
exports.openCloseVacancies = openCloseVacancies;

var _constants = __webpack_require__(13);

var _generateID = __webpack_require__(107);

var _generateID2 = _interopRequireDefault(_generateID);

var _check = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /* eslint-disable no-use-before-define */


function addProject(value) {
  var id = (0, _generateID2['default'])();
  var payload = _defineProperty({}, id, {
    id: id,
    title: value,
    isClosed: false,
    items: []
  });
  return actionCreater(_constants.ADD_PROJECT, payload);
}

function removeProject(id) {
  return function (dispatch, getState) {
    var _getState = getState(),
        projects = _getState.projects;

    var items = projects[id].items;

    var payload = {
      projectId: id,
      vacancies: items
    };
    dispatch(actionCreater(_constants.REMOVE_PROJECT, payload));
  };
}

function openCloseProject(id) {
  return function (dispatch, getState) {
    var _getState2 = getState(),
        projects = _getState2.projects;

    var _projects$id = projects[id],
        isClosed = _projects$id.isClosed,
        items = _projects$id.items;


    dispatch(actionCreater(_constants.OPEN_CLOSE_PROJECT, id));
    if (!isClosed) {
      // закрыть все вакансии в проекте
      dispatch(openCloseVacancies(items));
    }
  };
}

function addVacancy(projectId, value) {
  var id = (0, _generateID2['default'])();
  var payload = _defineProperty({}, id, {
    id: id,
    title: value,
    isClosed: false,
    projectId: projectId
  });
  return actionCreater(_constants.ADD_VACANCY, payload);
}

function removeVacancy(id) {
  // return actionCreater(REMOVE_VACANCY, vacancy);
  return function (dispatch, getState) {
    var _getState3 = getState(),
        vacancies = _getState3.vacancies;

    var vacancy = vacancies[id];
    var vacancyId = vacancy.id,
        projectId = vacancy.projectId;

    var payload = {
      projectId: projectId,
      vacancyId: vacancyId
    };
    dispatch(actionCreater(_constants.REMOVE_VACANCY, payload));
  };
}

function openCloseVacancies(ids) {
  return function (dispatch, getState) {
    var _getState4 = getState(),
        vacancies = _getState4.vacancies;

    var payload = void 0;
    if ((0, _check.isArray)(ids)) {
      payload = {
        ids: ids,
        status: true
      };
    } else {
      var isClosed = vacancies[ids].isClosed;

      payload = {
        ids: [ids],
        status: !isClosed
      };
    }
    dispatch(actionCreater(_constants.OPEN_CLOSE_VACANCY, payload));
  };
}

function actionCreater(type, payload) {
  return {
    type: type,
    payload: payload
  };
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = __webpack_require__(17);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function Button(props) {
  var children = props.children,
      onClick = props.onClick,
      className = props.className;

  var stl = className !== undefined ? className : _style2['default'].buttonCommon;
  return _react2['default'].createElement(
    'button',
    {
      className: stl,
      type: 'button',
      onClick: onClick
    },
    children
  );
} /* eslint-disable react/require-default-props */


Button.propTypes = {
  children: _propTypes2['default'].string.isRequired,
  onClick: _propTypes2['default'].func.isRequired,
  className: _propTypes2['default'].string
};
Button.defaultProps = {};

exports['default'] = Button;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"_2pl33p34AnM-IL2gdD_KZC","ButtonText":"_1XM5jWAkq4IyZp_C-ppmuT","White-text-button":"_3IGOCNwZFrbopfNumCOwGs","buttonCommon":"F3CyX7FbJq35Mos6_zrk- _1XM5jWAkq4IyZp_C-ppmuT"};

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);


var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
  getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(21);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (true) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
  };
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(63);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
/* unused harmony export getDependsOnOwnProps */
/* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(29);


function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (true) Object(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifyPlainObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(11);



function verifyPlainObject(value, displayName, methodName) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = __webpack_require__(96);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function InputText(props) {
  var value = props.value,
      placeholder = props.placeholder,
      onChange = props.onChange;

  return _react2['default'].createElement('input', {
    type: 'text',
    value: value,
    className: _style2['default'].inputText,
    placeholder: placeholder,
    onChange: onChange
  });
}

InputText.propTypes = {
  value: _propTypes2['default'].string,
  placeholder: _propTypes2['default'].string,
  onChange: _propTypes2['default'].func.isRequired
};
InputText.defaultProps = {
  value: '',
  placeholder: '[*placeholder*]'
};

exports['default'] = InputText;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAutobind = __webpack_require__(3);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _AddProjectVacancy = __webpack_require__(101);

var _AddProjectVacancy2 = _interopRequireDefault(_AddProjectVacancy);

var _DialogWindow = __webpack_require__(32);

var _DialogWindow2 = _interopRequireDefault(_DialogWindow);

var _Modal = __webpack_require__(33);

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddProjectVacancyContainer = function (_Component) {
  _inherits(AddProjectVacancyContainer, _Component);

  function AddProjectVacancyContainer(props, context) {
    _classCallCheck(this, AddProjectVacancyContainer);

    var _this = _possibleConstructorReturn(this, (AddProjectVacancyContainer.__proto__ || Object.getPrototypeOf(AddProjectVacancyContainer)).call(this, props, context));

    (0, _reactAutobind2['default'])(_this);
    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(AddProjectVacancyContainer, [{
    key: 'onChange',
    value: function () {
      function onChange(e) {
        var value = e.target.value;
        this.setState(Object.assign({}, this.state, {
          value: value
        }));
      }

      return onChange;
    }()
  }, {
    key: 'onSubmit',
    value: function () {
      function onSubmit(e) {
        e.preventDefault();
        var value = this.state.value;
        var onSubmit = this.props.onSubmit;

        onSubmit(value);
      }

      return onSubmit;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            onClose = _props.onClose,
            title = _props.title;

        return _react2['default'].createElement(
          _Modal2['default'],
          null,
          _react2['default'].createElement(
            _DialogWindow2['default'],
            {
              onClose: onClose,
              title: title
            },
            _react2['default'].createElement(_AddProjectVacancy2['default'], {
              onSubmit: this.onSubmit,
              onChangeName: this.onChange,
              value: this.state.value,
              placeholder: title
            })
          )
        );
      }

      return render;
    }()
  }]);

  return AddProjectVacancyContainer;
}(_react.Component);

AddProjectVacancyContainer.propTypes = {
  title: _propTypes2['default'].string.isRequired,
  onSubmit: _propTypes2['default'].func.isRequired,
  onClose: _propTypes2['default'].func.isRequired
};
AddProjectVacancyContainer.defaultProps = {};

exports['default'] = AddProjectVacancyContainer;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ButtonClose = __webpack_require__(103);

var _ButtonClose2 = _interopRequireDefault(_ButtonClose);

var _style = __webpack_require__(105);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function DialogWindow(props) {
  var title = props.title,
      children = props.children,
      onClose = props.onClose;

  return _react2['default'].createElement(
    'section',
    { className: _style2['default'].dialogWindow },
    _react2['default'].createElement(
      'header',
      null,
      _react2['default'].createElement(
        'h3',
        null,
        title
      ),
      _react2['default'].createElement(
        'div',
        {
          className: _style2['default'].buttonClose,
          onClick: onClose,
          role: 'button',
          tabIndex: '0'
        },
        _react2['default'].createElement(_ButtonClose2['default'], null)
      )
    ),
    _react2['default'].createElement('div', { className: _style2['default'].hr }),
    _react2['default'].createElement(
      'article',
      null,
      children
    )
  );
}

DialogWindow.propTypes = {
  onClose: _propTypes2['default'].func.isRequired,
  title: _propTypes2['default'].string,
  children: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].element])
};
DialogWindow.defaultProps = {
  title: '[*title*]',
  children: '[*children*]'
};

exports['default'] = DialogWindow;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAutobind = __webpack_require__(3);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

__webpack_require__(106);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal(props, context) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props, context));

    (0, _reactAutobind2['default'])(_this);
    _this.modalRoot = document.getElementById('modal-root');
    _this.el = document.createElement('div');
    _this.el.classList.add('modal-window');
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        this.modalRoot.appendChild(this.el);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function () {
      function componentWillUnmount() {
        this.modalRoot.removeChild(this.el);
      }

      return componentWillUnmount;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        return _reactDom2['default'].createPortal(this.props.children, this.el);
      }

      return render;
    }()
  }]);

  return Modal;
}(_react.Component);

Modal.propTypes = {
  children: _propTypes2['default'].element
};
Modal.defaultProps = {
  children: null
};

exports['default'] = Modal;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isObject = exports.isObject = function () {
  function isObject(obj) {
    return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.constructor === Object;
  }

  return isObject;
}();

var isArray = exports.isArray = function () {
  function isArray(obj) {
    return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.constructor === Array;
  }

  return isArray;
}();

var isFloat = exports.isFloat = function () {
  function isFloat(obj) {
    return String(parseFloat(obj, 10)) === String(obj);
  }

  return isFloat;
}();

var isInteger = exports.isInteger = function () {
  function isInteger(obj) {
    return String(parseInt(obj, 10)) === String(obj);
  }

  return isInteger;
}();

var isEmpty = exports.isEmpty = function () {
  function isEmpty(obj) {
    if (obj === null || obj === undefined) {
      return true;
    } else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.constructor === Array) {
      return obj.length === 0;
    } else if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.constructor === Object) {
      return Object.getOwnPropertyNames(obj).length === 0;
    } else if (typeof obj === 'string' || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj.constructor === String) {
      return obj.length === 0;
    }

    /*isNumber*/
    else if (String(parseFloat(obj, 10)) === String(obj)) {
        return obj === 0;
      } else if (!obj) {
        return obj;
      }

    return false;
  }

  return isEmpty;
}();

var isString = exports.isString = function () {
  function isString(obj) {
    return typeof obj == 'string' || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) == 'object' && obj.constructor === String;
  }

  return isString;
}();

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = __webpack_require__(115);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function SearchIcon(props) {
  return _react2['default'].createElement(
    'svg',
    {
      viewBox: '0 0 20 20',
      className: _style2['default'].checkIcon
    },
    _react2['default'].createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
    _react2['default'].createElement('path', { d: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' })
  );
} /* eslint-disable max-len */


SearchIcon.propTypes = {};
SearchIcon.defaultProps = {};

exports['default'] = SearchIcon;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grey = __webpack_require__(118);

var _Grey2 = _interopRequireDefault(_Grey);

var _Button = __webpack_require__(16);

var _Button2 = _interopRequireDefault(_Button);

var _style = __webpack_require__(119);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function SideButtons(props) {
  var onClick = props.onClick,
      onDelete = props.onDelete,
      children = props.children,
      isClosed = props.isClosed;

  var cls = isClosed ? 'green' : 'gray';
  return _react2['default'].createElement(
    'aside',
    { className: _style2['default'].buttonSet },
    _react2['default'].createElement(
      'div',
      { className: _style2['default'].buttonClick },
      _react2['default'].createElement(
        _Grey2['default'],
        { onClick: onClick },
        children
      )
    ),
    _react2['default'].createElement(
      'div',
      { className: [_style2['default'].buttonDelete, cls].join(' ') },
      _react2['default'].createElement(
        _Button2['default'],
        { onClick: onDelete },
        '\u0423\u0434\u0430\u043B\u0438\u0442\u044C'
      )
    )
  );
}

SideButtons.propTypes = {
  onClick: _propTypes2['default'].func.isRequired,
  onDelete: _propTypes2['default'].func.isRequired,
  children: _propTypes2['default'].string.isRequired,
  isClosed: _propTypes2['default'].bool
};
SideButtons.defaultProps = {
  isClosed: false
};

exports['default'] = SideButtons;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ButtonFull = __webpack_require__(14);

var _ButtonFull2 = _interopRequireDefault(_ButtonFull);

var _DialogWindow = __webpack_require__(32);

var _DialogWindow2 = _interopRequireDefault(_DialogWindow);

var _Modal = __webpack_require__(33);

var _Modal2 = _interopRequireDefault(_Modal);

var _style = __webpack_require__(129);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function DeleteProjectVacancy(props) {
  var onSubmit = props.onSubmit,
      onClose = props.onClose,
      name = props.name,
      title = props.title,
      type = props.type;

  return _react2['default'].createElement(
    _Modal2['default'],
    null,
    _react2['default'].createElement(
      _DialogWindow2['default'],
      {
        onClose: onClose,
        title: title
      },
      _react2['default'].createElement(
        'form',
        { onSubmit: onSubmit },
        _react2['default'].createElement(
          'div',
          { className: _style2['default'].button },
          _react2['default'].createElement(
            _ButtonFull2['default'],
            {
              onClick: onSubmit,
              type: type
            },
            name
          )
        )
      )
    )
  );
}

DeleteProjectVacancy.propTypes = {
  name: _propTypes2['default'].string.isRequired,
  title: _propTypes2['default'].string.isRequired,
  onSubmit: _propTypes2['default'].func.isRequired,
  onClose: _propTypes2['default'].func.isRequired
};
DeleteProjectVacancy.defaultProps = {
  type: 'submit'
};

exports['default'] = DeleteProjectVacancy;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _reactRedux = __webpack_require__(7);

var _configureStore = __webpack_require__(81);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _AppContainer = __webpack_require__(88);

var _AppContainer2 = _interopRequireDefault(_AppContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var store = (0, _configureStore2['default'])(); /* eslint-disable react/jsx-filename-extension */


(0, _reactDom.render)(_react2['default'].createElement(
  _reactRedux.Provider,
  { store: store },
  _react2['default'].createElement(_AppContainer2['default'], null)
), document.getElementById('root'));

/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createProvider;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(11);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    };

    return Provider;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

  if (true) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
    children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);

  return Provider;
}

/* harmony default export */ __webpack_exports__["b"] = (createProvider());

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try { // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createConnect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(79);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (createConnect());

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(28);



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(66);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(64);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(25)))

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(24);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(68);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(73);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(25), __webpack_require__(72)(module)))

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(26);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(27);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapStateToPropsIsFunction */
/* unused harmony export whenMapStateToPropsIsMissing */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(28);


function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function () {
    return {};
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export defaultMergeProps */
/* unused harmony export wrapMergePropsFunc */
/* unused harmony export whenMergePropsIsFunction */
/* unused harmony export whenMergePropsIsOmitted */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(29);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (true) Object(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export impureFinalPropsSelectorFactory */
/* unused harmony export pureFinalPropsSelectorFactory */
/* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(80);
function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }



function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (true) {
    Object(__WEBPACK_IMPORTED_MODULE_0__verifySubselectors__["a" /* default */])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = verifySubselectors;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(11);


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable global-require */
if (false) {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = __webpack_require__(82);
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = configureStore;

var _redux = __webpack_require__(2);

var _reduxDevtoolsExtension = __webpack_require__(83);

var _reduxThunk = __webpack_require__(84);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(85);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// import { routerMiddleware } from 'react-router-redux';
// import createHistory from 'history/createBrowserHistory';
var composeEnhancers = (0, _reduxDevtoolsExtension.composeWithDevTools)({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

// Create a history of your choosing (we're using a browser history in this case)
// const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
// const routermiddleware = routerMiddleware(history);

var enhancer = composeEnhancers((0, _redux.applyMiddleware)( /* routermiddleware, */_reduxThunk2['default']));

function configureStore(initialState) {
  return (0, _redux.createStore)(_reducers2['default'], initialState, enhancer);
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__(2).compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(2);

var _projects = __webpack_require__(86);

var _projects2 = _interopRequireDefault(_projects);

var _vacancies = __webpack_require__(87);

var _vacancies2 = _interopRequireDefault(_vacancies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*
* Example store
*
rootReducer = {
  projects: {
    kki1h2v0n: {
      id: 'kki1h2v0n',
      title: 'New project',
      isClosed: false,
      items: [
        'jmeuwtedn',
        'x3vp0g5wp',
      ],
    },
  },
  vacancies: {
    jmeuwtedn: {
      id: 'jmeuwtedn',
      title: 'New vacancy 1',
      isClosed: true,
      projectId: 'kki1h2v0n',
    },
    x3vp0g5wp: {
      id: 'x3vp0g5wp',
      title: 'New vacancy 2',
      isClosed: false,
      projectId: 'kki1h2v0n',
    },
  },
};
*/
var rootReducer = (0, _redux.combineReducers)({
  projects: _projects2['default'],
  vacancies: _vacancies2['default']
});

exports['default'] = rootReducer;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(13);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* eslint-disable no-shadow */


var initialState = {};

function projects() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.ADD_PROJECT:
      {
        return Object.assign({}, state, action.payload);
      }

    case _constants.REMOVE_PROJECT:
      {
        var _projects = state;
        var projectId = action.payload.projectId;

        delete _projects[projectId];
        return _projects;
      }

    case _constants.ADD_VACANCY:
      {
        var vacancy = Object.keys(action.payload).map(function (key) {
          return action.payload[key];
        }).pop();
        var id = vacancy.id,
            _projectId = vacancy.projectId;

        var project = state[_projectId];
        var items = project.items;

        var newItems = [].concat(_toConsumableArray(items), [id]);
        return Object.assign({}, state, _defineProperty({}, _projectId, Object.assign({}, project, {
          items: newItems
        })));
      }

    case _constants.REMOVE_VACANCY:
      {
        var _action$payload = action.payload,
            _projectId2 = _action$payload.projectId,
            vacancyId = _action$payload.vacancyId;

        var _project = state[_projectId2];
        var _items = _project.items;

        var _newItems = _items.filter(function (key) {
          return key !== vacancyId;
        });
        return Object.assign({}, state, _defineProperty({}, _projectId2, Object.assign({}, _project, {
          items: _newItems
        })));
      }

    case _constants.OPEN_CLOSE_PROJECT:
      {
        var _id = action.payload;
        var _project2 = state[_id];
        var isClosed = _project2.isClosed;

        return Object.assign({}, state, _defineProperty({}, _id, Object.assign({}, _project2, {
          isClosed: !isClosed
        })));
      }

    default:
      return state;
  }
}

exports['default'] = projects;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(13);

var initialState = {}; /* eslint-disable no-shadow */


function vacancies() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.ADD_VACANCY:
      {
        return Object.assign({}, state, action.payload);
      }

    case _constants.REMOVE_VACANCY:
      {
        var vacs = Object.assign({}, state);
        var vacancyId = action.payload.vacancyId;

        delete vacs[vacancyId];
        return vacs;
      }

    case _constants.REMOVE_PROJECT:
      {
        var _vacs = Object.assign({}, state);
        var _vacancies = action.payload.vacancies;

        _vacancies.forEach(function (id) {
          delete _vacs[id];
        });
        return _vacs;
      }

    case _constants.OPEN_CLOSE_VACANCY:
      {
        var _vacs2 = Object.assign({}, state);
        var _action$payload = action.payload,
            ids = _action$payload.ids,
            status = _action$payload.status;

        ids.forEach(function (id) {
          _vacs2[id].isClosed = status;
        });
        return _vacs2;
      }

    case '':
      {
        return Object.assign({}, state, {
          isFetching: false,
          error: action.payload
        });
      }

    default:
      return state;
  }
}

exports['default'] = vacancies;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAutobind = __webpack_require__(3);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _index = __webpack_require__(90);

var _index2 = _interopRequireDefault(_index);

var _HeaderContainer = __webpack_require__(94);

var _HeaderContainer2 = _interopRequireDefault(_HeaderContainer);

var _ProjectListContainer = __webpack_require__(108);

var _ProjectListContainer2 = _interopRequireDefault(_ProjectListContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppContainer = function (_Component) {
  _inherits(AppContainer, _Component);

  function AppContainer(props, context) {
    _classCallCheck(this, AppContainer);

    var _this = _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).call(this, props, context));

    (0, _reactAutobind2['default'])(_this);
    _this.state = {
      searchValue: undefined,
      isOnlyOpen: false
    };
    return _this;
  }

  _createClass(AppContainer, [{
    key: 'onOnlyOpen',
    value: function () {
      function onOnlyOpen(e) {
        var checked = e.target.checked;
        // const isOnlyOpen = this.state;
        this.updateState({ isOnlyOpen: checked });
      }

      return onOnlyOpen;
    }()
  }, {
    key: 'onChangeSearch',
    value: function () {
      function onChangeSearch(e) {
        var value = e.target.value;
        this.updateState({ searchValue: value });
      }

      return onChangeSearch;
    }()
  }, {
    key: 'updateState',
    value: function () {
      function updateState(payload) {
        this.setState(Object.assign({}, this.state, payload));
      }

      return updateState;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _state = this.state,
            searchValue = _state.searchValue,
            isOnlyOpen = _state.isOnlyOpen;

        return _react2['default'].createElement(
          _index2['default'],
          null,
          _react2['default'].createElement(_HeaderContainer2['default'], {
            onOnlyOpen: this.onOnlyOpen,
            onChangeSearch: this.onChangeSearch,
            searchValue: searchValue,
            isOnlyOpen: isOnlyOpen
          }),
          _react2['default'].createElement(_ProjectListContainer2['default'], {
            searchValue: searchValue,
            isOnlyOpen: isOnlyOpen
          })
        );
      }

      return render;
    }()
  }]);

  return AppContainer;
}(_react.Component);

AppContainer.propTypes = {};
AppContainer.defaultProps = {};

exports['default'] = AppContainer;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = autoBind;
var wontBind = ['constructor', 'render', 'componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'componentDidUpdate', 'componentWillUnmount'];

var toBind = [];

function autoBind(context) {
  if (context === undefined) {
    console.error('Autobind error: No context provided.');
    return;
  }

  var objPrototype = Object.getPrototypeOf(context);

  if (arguments.length > 1) {
    // If a list of methods to bind is provided, use it.
    toBind = Array.prototype.slice.call(arguments, 1);
  } else {
    // If no list of methods to bind is provided, bind all available methods in class.
    toBind = Object.getOwnPropertyNames(objPrototype);
  }

  toBind.forEach(function (method) {
    var descriptor = Object.getOwnPropertyDescriptor(objPrototype, method);

    if (descriptor === undefined) {
      console.warn('Autobind: "' + method + '" method not found in class.');
      return;
    }

    // Return if it's special case function or if not a function at all
    if (wontBind.indexOf(method) !== -1 || typeof descriptor.value !== 'function') {
      return;
    }

    Object.defineProperty(objPrototype, method, boundMethod(objPrototype, method, descriptor));
  });
}

/**
* From autobind-decorator (https://github.com/andreypopp/autobind-decorator/tree/master)
* Return a descriptor removing the value and returning a getter
* The getter will return a .bind version of the function
* and memoize the result against a symbol on the instance
*/
function boundMethod(objPrototype, method, descriptor) {
  var fn = descriptor.value;

  return {
    configurable: true,
    get: function get() {
      if (this === objPrototype || this.hasOwnProperty(method)) {
        return fn;
      }

      var boundFn = fn.bind(this);
      Object.defineProperty(this, method, {
        value: boundFn,
        configurable: true,
        writable: true
      });
      return boundFn;
    }
  };
}
module.exports = exports['default'];


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(91);

__webpack_require__(92);

var _style = __webpack_require__(93);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function App(props) {
  var children = props.children;

  return _react2['default'].createElement(
    'div',
    { className: _style2['default'].project },
    _react2['default'].createElement(
      'h1',
      null,
      '\u0421\u043F\u0438\u0441\u043E\u043A \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432'
    ),
    children
  );
}

App.propTypes = {
  children: _propTypes2['default'].oneOfType([_propTypes2['default'].element, _propTypes2['default'].node]).isRequired
};
App.defaultProps = {};

exports['default'] = App;

/***/ }),
/* 91 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 92 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"_24-8WRZ_q785O0dw_-8naz","ButtonText":"_3ReSVj_oKAgk7iEqn68ux7","White-text-button":"_2v5G138n9UC0vtjM8KjE1a"};

/***/ }),
/* 93 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"_1X9nKpG17r8gnTV_bazFm-","ButtonText":"_1FQfzrIvkh0MSPG14HXiUy","White-text-button":"_2aH66YlVly-_mWOA3NH4K2","project":"_1e1-0ISpPYRU5Aj9XRh0uC"};

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(7);

var _redux = __webpack_require__(2);

var _reactAutobind = __webpack_require__(3);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _Header = __webpack_require__(95);

var _Header2 = _interopRequireDefault(_Header);

var _AddProjectVacancyContainer = __webpack_require__(31);

var _AddProjectVacancyContainer2 = _interopRequireDefault(_AddProjectVacancyContainer);

var _actions = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable class-methods-use-this */


var HeaderContainer = function (_Component) {
  _inherits(HeaderContainer, _Component);

  function HeaderContainer(props, context) {
    _classCallCheck(this, HeaderContainer);

    var _this = _possibleConstructorReturn(this, (HeaderContainer.__proto__ || Object.getPrototypeOf(HeaderContainer)).call(this, props, context));

    (0, _reactAutobind2['default'])(_this);
    _this.state = {
      isModalOpen: false
    };
    return _this;
  }

  _createClass(HeaderContainer, [{
    key: 'onAddProject',
    value: function () {
      function onAddProject() {
        this.updateState({
          isModalOpen: true
        });
      }

      return onAddProject;
    }()
  }, {
    key: 'onCloseModal',
    value: function () {
      function onCloseModal() {
        this.updateState({
          isModalOpen: false
        });
      }

      return onCloseModal;
    }()
  }, {
    key: 'onCreateProject',
    value: function () {
      function onCreateProject(value) {
        this.onCloseModal();
        this.props.addProject(value);
      }

      return onCreateProject;
    }()
  }, {
    key: 'updateState',
    value: function () {
      function updateState(payload) {
        this.setState(Object.assign({}, this.state, payload));
      }

      return updateState;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var isModalOpen = this.state.isModalOpen;
        var _props = this.props,
            onChangeSearch = _props.onChangeSearch,
            onOnlyOpen = _props.onOnlyOpen,
            isOnlyOpen = _props.isOnlyOpen,
            searchValue = _props.searchValue;

        return [_react2['default'].createElement(_Header2['default'], {
          onAddProject: this.onAddProject,
          onChangeSearch: onChangeSearch,
          onOnlyOpen: onOnlyOpen,
          isOnlyOpen: isOnlyOpen,
          searchValue: searchValue,
          key: 'header-container'
        }), isModalOpen && _react2['default'].createElement(_AddProjectVacancyContainer2['default'], {
          onSubmit: this.onCreateProject,
          onClose: this.onCloseModal,
          title: '\u041D\u043E\u0432\u044B\u0439 \u043F\u0440\u043E\u0435\u043A\u0442',
          key: 'add-header-container'
        })];
      }

      return render;
    }()
  }]);

  return HeaderContainer;
}(_react.Component);

HeaderContainer.propTypes = {
  addProject: _propTypes2['default'].func.isRequired,
  onChangeSearch: _propTypes2['default'].func.isRequired,
  onOnlyOpen: _propTypes2['default'].func.isRequired,
  isOnlyOpen: _propTypes2['default'].bool.isRequired,
  searchValue: _propTypes2['default'].string
};
HeaderContainer.defaultProps = {};

// const mapStateToProps = state => ({});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    addProject: _actions.addProject
  }, dispatch);
};

exports['default'] = (0, _reactRedux.connect)( /* mapStateToProps */null, mapDispatchToProps)(HeaderContainer);

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InputText = __webpack_require__(30);

var _InputText2 = _interopRequireDefault(_InputText);

var _Checkbox = __webpack_require__(97);

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _ButtonFull = __webpack_require__(14);

var _ButtonFull2 = _interopRequireDefault(_ButtonFull);

var _style = __webpack_require__(100);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/require-default-props */


var Header = function (_PureComponent) {
  _inherits(Header, _PureComponent);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            onAddProject = _props.onAddProject,
            onOnlyOpen = _props.onOnlyOpen,
            onChangeSearch = _props.onChangeSearch,
            isOnlyOpen = _props.isOnlyOpen,
            searchValue = _props.searchValue,
            placeholder = _props.placeholder;

        return _react2['default'].createElement(
          'div',
          { className: _style2['default'].header },
          _react2['default'].createElement(
            'div',
            { className: _style2['default'].wrapInput },
            _react2['default'].createElement(_InputText2['default'], {
              onChange: onChangeSearch,
              value: searchValue,
              placeholder: placeholder
            })
          ),
          _react2['default'].createElement(
            _Checkbox2['default'],
            {
              onClick: onOnlyOpen,
              checked: isOnlyOpen
            },
            '\u0422\u043E\u043B\u044C\u043A\u043E \u043E\u0442\u043A\u0440\u044B\u0442\u044B\u0435'
          ),
          _react2['default'].createElement(
            _ButtonFull2['default'],
            { onClick: onAddProject },
            '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442'
          )
        );
      }

      return render;
    }()
  }]);

  return Header;
}(_react.PureComponent);

Header.propTypes = {
  onAddProject: _propTypes2['default'].func,
  onOnlyOpen: _propTypes2['default'].func,
  onChangeSearch: _propTypes2['default'].func,
  isOnlyOpen: _propTypes2['default'].bool.isRequired,
  searchValue: _propTypes2['default'].string,
  placeholder: _propTypes2['default'].string
};
Header.defaultProps = {
  placeholder: 'поиск'
};

exports['default'] = Header;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"oH9S-m9nPrF7j5kk46BDM","ButtonText":"K9mtMzmF449zAbrSaEpD0","White-text-button":"P3W57CyDI-o8TkrjhzQQ9","inputText":"Kba-7Kh4rYpWIjbnVujSC oH9S-m9nPrF7j5kk46BDM"};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _style = __webpack_require__(98);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function Checkbox(props) {
  var children = props.children,
      checked = props.checked,
      onClick = props.onClick;

  return _react2['default'].createElement(
    'div',
    { className: [_style2['default'].checkbox, _style2['default'].checkboxGlobal] },
    _react2['default'].createElement('input', {
      type: 'checkbox',
      id: 'auth_block_save_for',
      onClick: onClick,
      checked: checked
    }),
    _react2['default'].createElement(
      'label',
      { htmlFor: 'auth_block_save_for' },
      children
    )
  );
} /* eslint-disable jsx-a11y/label-has-for */


Checkbox.propTypes = {
  onClick: _propTypes2['default'].func.isRequired,
  children: _propTypes2['default'].string,
  checked: _propTypes2['default'].bool
};
Checkbox.defaultProps = {
  children: '[*checkbox*]',
  checked: false
};

exports['default'] = Checkbox;

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"_2ye0v5OB1TKynl2PsioEga","ButtonText":"_3NBG5zmFVXJ3j5Zkdx93vz","White-text-button":"_1x4wU4OEU9eg1mUlcQaHIa","checkbox":"_3_Sw7wlOQ0aFgXVjblYak3 _3NBG5zmFVXJ3j5Zkdx93vz"};

/***/ }),
/* 99 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"_3y3DMLnrn0vo-ETjyYaA31","ButtonText":"k4CoXZltH51Jir2um08k3","White-text-button":"_2jhnps68wAuPIgacPAYO1v","buttonBg":"_1i-wuGkQuFbNkkbl6AGOLs k4CoXZltH51Jir2um08k3"};

/***/ }),
/* 100 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"_2F1Ji30eCo3_aJUjPkGvEq","ButtonText":"_3AoRf_2xgNUmm5KR87YOmC","White-text-button":"_2140eiGLRz9Ma9dxmvSK58","header":"_5BAbIH7XPo_KpBzzlSCKT","wrapInput":"_1tRav49x6FeRqe1bN9fnZc"};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _InputText = __webpack_require__(30);

var _InputText2 = _interopRequireDefault(_InputText);

var _ButtonFull = __webpack_require__(14);

var _ButtonFull2 = _interopRequireDefault(_ButtonFull);

var _style = __webpack_require__(102);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function AddProjectVacancy(props) {
  var onSubmit = props.onSubmit,
      onChangeName = props.onChangeName,
      value = props.value,
      placeholder = props.placeholder,
      type = props.type;

  return _react2['default'].createElement(
    'form',
    { onSubmit: onSubmit },
    _react2['default'].createElement(
      'div',
      { className: _style2['default'].button },
      _react2['default'].createElement(
        _ButtonFull2['default'],
        {
          onClick: onSubmit,
          type: type
        },
        '\u0421\u043E\u0437\u0434\u0430\u0442\u044C'
      )
    ),
    _react2['default'].createElement(
      'div',
      { className: _style2['default'].input },
      _react2['default'].createElement(_InputText2['default'], {
        onChange: onChangeName,
        placeholder: placeholder,
        value: value
      })
    )
  );
}

AddProjectVacancy.propTypes = {
  onSubmit: _propTypes2['default'].func.isRequired,
  onChangeName: _propTypes2['default'].func.isRequired,
  placeholder: _propTypes2['default'].string.isRequired,
  value: _propTypes2['default'].string.isRequired
};
AddProjectVacancy.defaultProps = {
  type: 'submit'
};

exports['default'] = AddProjectVacancy;

/***/ }),
/* 102 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"_2hRQkmx7h_iNioyyGiexST","ButtonText":"_3XbLrvv4cfM4wNN1oPN6Rw","White-text-button":"_1YOipUCzZ8L2XN5ibo9HC5","button":"_2_tK2Va0ztTagLcr_usumo","input":"_3OlDQyaY-6yezlEJVnyfmG"};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(104);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint-disable max-len */
function ButtonClose() {
  return _react2['default'].createElement(
    'svg',
    {
      viewBox: '0 0 14 14',
      className: _style2['default'].buttonClose
    },
    _react2['default'].createElement('path', {
      fillRule: 'evenodd',
      d: 'M13.969 1.406L8.39 6.984l5.578 5.579-1.406 1.406L6.984 8.39l-5.578 5.578L0 12.563l5.578-5.579L0 1.406 1.406 0l5.578 5.578L12.563 0z'
    })
  );
}

ButtonClose.propTypes = {};
ButtonClose.defaultProps = {};

exports['default'] = ButtonClose;

/***/ }),
/* 104 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"_3qqiB8l-W45hGN0d6twzPw","ButtonText":"_1YXA3CqvsFVBuwi_4tWN-U","White-text-button":"_2iAM1JpZKBSTDbfslKxiO9","buttonClose":"_2j_UladtNcvUK8cXqX0Z41"};

/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"_2hAy8SaRZK1yfZa5Svvf3G","ButtonText":"_3rrjMflCqGR8Z8K0qrrGNW","White-text-button":"MQwf_eTJ5CCmr3ou9OuAD","dialogWindow":"_3IHW1xjngXxP8NReGPixiS","buttonClose":"_39BNztNrMEbjwzwRhksifK","hr":"_3FdIuU1FLT4d70s1sFgWBi"};

/***/ }),
/* 106 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"_2TbmaLIMqKk7j0Jph3U47U","ButtonText":"_2ueckNNY5tgCr9-nCyCTjq","White-text-button":"_2kYF4eHFokX7-VqY0Jh1Zb"};

/***/ }),
/* 107 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var generateID = function () {
  function generateID() {
    return "" + String(Math.random().toString(36).substr(2, 9));
  }

  return generateID;
}();

exports["default"] = generateID;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(7);

var _redux = __webpack_require__(2);

var _reactAutobind = __webpack_require__(3);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _ProjectList = __webpack_require__(109);

var _ProjectList2 = _interopRequireDefault(_ProjectList);

var _AddProjectVacancyContainer = __webpack_require__(31);

var _AddProjectVacancyContainer2 = _interopRequireDefault(_AddProjectVacancyContainer);

var _DeleteProjectVacancy = __webpack_require__(37);

var _DeleteProjectVacancy2 = _interopRequireDefault(_DeleteProjectVacancy);

var _actions = __webpack_require__(15);

var _selectors = __webpack_require__(132);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/forbid-prop-types,react/no-unused-prop-types */


var ProjectListContainer = function (_Component) {
  _inherits(ProjectListContainer, _Component);

  function ProjectListContainer(props, context) {
    _classCallCheck(this, ProjectListContainer);

    var _this = _possibleConstructorReturn(this, (ProjectListContainer.__proto__ || Object.getPrototypeOf(ProjectListContainer)).call(this, props, context));

    (0, _reactAutobind2['default'])(_this);
    _this.id = null;
    _this.state = {
      isModalOpen: false,
      isModalOpenDelete: false
    };
    return _this;
  }

  _createClass(ProjectListContainer, [{
    key: 'onAdd',
    value: function () {
      function onAdd(id) {
        this.id = id;
        this.updateState({
          isModalOpen: true
        });
      }

      return onAdd;
    }()
  }, {
    key: 'onDelete',
    value: function () {
      function onDelete(id) {
        this.id = id;
        this.updateState({
          isModalOpenDelete: true
        });
      }

      return onDelete;
    }()
  }, {
    key: 'onOpenClose',
    value: function () {
      function onOpenClose(id) {
        this.props.openCloseProject(id);
      }

      return onOpenClose;
    }()
  }, {
    key: 'onCloseModal',
    value: function () {
      function onCloseModal() {
        this.updateState({
          isModalOpen: false,
          isModalOpenDelete: false
        });
      }

      return onCloseModal;
    }()
  }, {
    key: 'onCreateVacancy',
    value: function () {
      function onCreateVacancy(value) {
        var id = this.id;
        this.resetId();
        this.onCloseModal();
        this.props.addVacancy(id, value);
      }

      return onCreateVacancy;
    }()
  }, {
    key: 'onDeleteSubmit',
    value: function () {
      function onDeleteSubmit() {
        var id = this.id;
        this.resetId();
        this.onCloseModal();
        this.props.removeProject(id);
      }

      return onDeleteSubmit;
    }()
  }, {
    key: 'resetId',
    value: function () {
      function resetId() {
        this.id = null;
      }

      return resetId;
    }()
  }, {
    key: 'onClickHeader',
    value: function () {
      function onClickHeader() {}

      return onClickHeader;
    }()
  }, {
    key: 'updateState',
    value: function () {
      function updateState(payload) {
        this.setState(Object.assign({}, this.state, payload));
      }

      return updateState;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            projects = _props.projects,
            vacancies = _props.vacancies,
            titleModal = _props.titleModal,
            nameButtonModal = _props.nameButtonModal;
        var _state = this.state,
            isModalOpen = _state.isModalOpen,
            isModalOpenDelete = _state.isModalOpenDelete;

        return [_react2['default'].createElement(_ProjectList2['default'], {
          projects: projects,
          vacancies: vacancies,
          onDelete: this.onDelete,
          onOpenClose: this.onOpenClose,
          onAdd: this.onAdd,
          onClickHeader: this.onClickHeader,
          key: 'project-list'
        }), isModalOpen && _react2['default'].createElement(_AddProjectVacancyContainer2['default'], {
          onSubmit: this.onCreateVacancy,
          onClose: this.onCloseModal,
          title: '\u041D\u043E\u0432\u0430\u044F \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u044F',
          key: 'add-header-container'
        }), isModalOpenDelete && _react2['default'].createElement(_DeleteProjectVacancy2['default'], {
          title: titleModal,
          name: nameButtonModal,
          onSubmit: this.onDeleteSubmit,
          onClose: this.onCloseModal,
          key: 'modal-delete'
        })];
      }

      return render;
    }()
  }]);

  return ProjectListContainer;
}(_react.Component);

ProjectListContainer.propTypes = {
  projects: _propTypes2['default'].object.isRequired,
  vacancies: _propTypes2['default'].object.isRequired,
  addVacancy: _propTypes2['default'].func.isRequired,
  removeProject: _propTypes2['default'].func.isRequired,
  openCloseProject: _propTypes2['default'].func.isRequired,
  isOnlyOpen: _propTypes2['default'].bool.isRequired,
  // eslint-disable-next-line react/require-default-props
  searchValue: _propTypes2['default'].string
};
ProjectListContainer.defaultProps = {
  titleModal: 'Удалить проект',
  nameButtonModal: 'Да'
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var projects = (0, _selectors.projectSelector)(state, ownProps);
  return {
    projects: projects,
    vacancies: state.vacancies
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    addVacancy: _actions.addVacancy,
    removeProject: _actions.removeProject,
    openCloseProject: _actions.openCloseProject
  }, dispatch);
};

exports['default'] = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ProjectListContainer);

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ProjectContainer = __webpack_require__(110);

var _ProjectContainer2 = _interopRequireDefault(_ProjectContainer);

__webpack_require__(131);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/forbid-prop-types */


var ProjectList = function (_PureComponent) {
  _inherits(ProjectList, _PureComponent);

  function ProjectList() {
    _classCallCheck(this, ProjectList);

    return _possibleConstructorReturn(this, (ProjectList.__proto__ || Object.getPrototypeOf(ProjectList)).apply(this, arguments));
  }

  _createClass(ProjectList, [{
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            projects = _props.projects,
            vacancies = _props.vacancies,
            onAdd = _props.onAdd,
            onDelete = _props.onDelete,
            onOpenClose = _props.onOpenClose,
            onClickHeader = _props.onClickHeader;


        return _react2['default'].createElement(
          'div',
          null,
          Object.keys(projects).map(function (key) {
            var _projects$key = projects[key],
                id = _projects$key.id,
                title = _projects$key.title,
                isClosed = _projects$key.isClosed,
                items = _projects$key.items;

            var vacs = items.map(function (k) {
              return vacancies[k];
            });
            var onAddLoc = function () {
              function onAddLoc() {
                onAdd(id);
              }

              return onAddLoc;
            }();
            var onDeleteLoc = function () {
              function onDeleteLoc() {
                onDelete(id);
              }

              return onDeleteLoc;
            }();
            var onOpenCloseLoc = function () {
              function onOpenCloseLoc() {
                onOpenClose(id);
              }

              return onOpenCloseLoc;
            }();
            return _react2['default'].createElement(_ProjectContainer2['default'], {
              key: id,
              vacancies: vacs,
              isClosed: isClosed,
              title: title,
              onAdd: onAddLoc,
              onDelete: onDeleteLoc,
              onOpenClose: onOpenCloseLoc,
              onClickHeader: onClickHeader
            });
          })
        );
      }

      return render;
    }()
  }]);

  return ProjectList;
}(_react.PureComponent);

ProjectList.propTypes = {
  projects: _propTypes2['default'].object.isRequired,
  vacancies: _propTypes2['default'].object.isRequired,
  onAdd: _propTypes2['default'].func.isRequired,
  onDelete: _propTypes2['default'].func.isRequired,
  onOpenClose: _propTypes2['default'].func.isRequired,
  onClickHeader: _propTypes2['default'].func.isRequired
};
ProjectList.defaultProps = {};

exports['default'] = ProjectList;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactAutobind = __webpack_require__(3);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _Project = __webpack_require__(111);

var _Project2 = _interopRequireDefault(_Project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/forbid-prop-types */


var ProjectContainer = function (_Component) {
  _inherits(ProjectContainer, _Component);

  function ProjectContainer(props, context) {
    _classCallCheck(this, ProjectContainer);

    var _this = _possibleConstructorReturn(this, (ProjectContainer.__proto__ || Object.getPrototypeOf(ProjectContainer)).call(this, props, context));

    (0, _reactAutobind2['default'])(_this);
    _this.state = {
      isToogle: true
    };
    return _this;
  }

  _createClass(ProjectContainer, [{
    key: 'onClickHeader',
    value: function () {
      function onClickHeader() {
        this.setState({
          isToogle: !this.state.isToogle
        });
      }

      return onClickHeader;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            vacancies = _props.vacancies,
            isClosed = _props.isClosed,
            title = _props.title,
            onAdd = _props.onAdd,
            onDelete = _props.onDelete,
            onOpenClose = _props.onOpenClose;

        return _react2['default'].createElement(_Project2['default'], {
          vacancies: vacancies,
          isClosed: isClosed,
          title: title,
          onAdd: onAdd,
          onDelete: onDelete,
          onOpenClose: onOpenClose,
          onClickHeader: this.onClickHeader,
          isToogle: this.state.isToogle
        });
      }

      return render;
    }()
  }]);

  return ProjectContainer;
}(_react.Component);

ProjectContainer.propTypes = {
  vacancies: _propTypes2['default'].array.isRequired,
  isClosed: _propTypes2['default'].bool.isRequired,
  title: _propTypes2['default'].string.isRequired,
  onAdd: _propTypes2['default'].func.isRequired,
  onDelete: _propTypes2['default'].func.isRequired,
  onOpenClose: _propTypes2['default'].func.isRequired,
  onClickHeader: _propTypes2['default'].func.isRequired
};
ProjectContainer.defaultProps = {};

exports['default'] = ProjectContainer;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(112);

var _Header2 = _interopRequireDefault(_Header);

var _VacancyListContainer = __webpack_require__(121);

var _VacancyListContainer2 = _interopRequireDefault(_VacancyListContainer);

var _style = __webpack_require__(130);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/forbid-prop-types */


var Project = function (_PureComponent) {
  _inherits(Project, _PureComponent);

  function Project() {
    _classCallCheck(this, Project);

    return _possibleConstructorReturn(this, (Project.__proto__ || Object.getPrototypeOf(Project)).apply(this, arguments));
  }

  _createClass(Project, [{
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            vacancies = _props.vacancies,
            isClosed = _props.isClosed,
            title = _props.title,
            onAdd = _props.onAdd,
            onDelete = _props.onDelete,
            onOpenClose = _props.onOpenClose,
            isToogle = _props.isToogle,
            onClickHeader = _props.onClickHeader;

        var activeClass = isToogle ? 'active' : '';
        return _react2['default'].createElement(
          'article',
          { className: [_style2['default'].project, activeClass].join(' ') },
          _react2['default'].createElement(_Header2['default'], {
            title: title,
            count: vacancies.length,
            isClosed: isClosed,
            onAdd: onAdd,
            onDelete: onDelete,
            onOpenClose: onOpenClose,
            onClickHeader: onClickHeader
          }),
          isToogle && _react2['default'].createElement(_VacancyListContainer2['default'], { vacancies: vacancies })
        );
      }

      return render;
    }()
  }]);

  return Project;
}(_react.PureComponent);

Project.propTypes = {
  vacancies: _propTypes2['default'].array.isRequired,
  isClosed: _propTypes2['default'].bool.isRequired,
  isToogle: _propTypes2['default'].bool.isRequired,
  title: _propTypes2['default'].string.isRequired,
  onAdd: _propTypes2['default'].func.isRequired,
  onDelete: _propTypes2['default'].func.isRequired,
  onOpenClose: _propTypes2['default'].func.isRequired,
  onClickHeader: _propTypes2['default'].func.isRequired
};
Project.defaultProps = {};

exports['default'] = Project;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = __webpack_require__(113);

var _index2 = _interopRequireDefault(_index);

var _SideButtons = __webpack_require__(36);

var _SideButtons2 = _interopRequireDefault(_SideButtons);

var _style = __webpack_require__(120);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable jsx-a11y/no-static-element-interactions */


var ProjectHeader = function (_PureComponent) {
  _inherits(ProjectHeader, _PureComponent);

  function ProjectHeader() {
    _classCallCheck(this, ProjectHeader);

    return _possibleConstructorReturn(this, (ProjectHeader.__proto__ || Object.getPrototypeOf(ProjectHeader)).apply(this, arguments));
  }

  _createClass(ProjectHeader, [{
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            title = _props.title,
            count = _props.count,
            isClosed = _props.isClosed,
            onAdd = _props.onAdd,
            onDelete = _props.onDelete,
            onOpenClose = _props.onOpenClose,
            onClickHeader = _props.onClickHeader;

        return _react2['default'].createElement(
          'section',
          { className: _style2['default'].sectionProject },
          _react2['default'].createElement(
            'header',
            { onClick: onClickHeader },
            _react2['default'].createElement(
              'h2',
              null,
              title
            )
          ),
          _react2['default'].createElement(_index2['default'], {
            count: count,
            isClosed: isClosed,
            onAdd: onAdd
          }),
          _react2['default'].createElement(
            _SideButtons2['default'],
            {
              onDelete: onDelete,
              onClick: onOpenClose,
              isClosed: isClosed
            },
            {
              'false': 'Закрыть проект',
              'true': 'Открыть проект'
            }[isClosed]
          )
        );
      }

      return render;
    }()
  }]);

  return ProjectHeader;
}(_react.PureComponent);

ProjectHeader.propTypes = {
  title: _propTypes2['default'].string.isRequired,
  count: _propTypes2['default'].number.isRequired,
  isClosed: _propTypes2['default'].bool.isRequired,
  onAdd: _propTypes2['default'].func.isRequired,
  onDelete: _propTypes2['default'].func.isRequired,
  onOpenClose: _propTypes2['default'].func.isRequired,
  onClickHeader: _propTypes2['default'].func.isRequired
};
ProjectHeader.defaultProps = {};

exports['default'] = ProjectHeader;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Green = __webpack_require__(114);

var _Green2 = _interopRequireDefault(_Green);

var _CkeckIcon = __webpack_require__(35);

var _CkeckIcon2 = _interopRequireDefault(_CkeckIcon);

var _declOfNum = __webpack_require__(116);

var _declOfNum2 = _interopRequireDefault(_declOfNum);

var _style = __webpack_require__(117);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Body = function (_PureComponent) {
  _inherits(Body, _PureComponent);

  function Body() {
    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
  }

  _createClass(Body, [{
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            count = _props.count,
            isClosed = _props.isClosed,
            onAdd = _props.onAdd;

        var title = (0, _declOfNum2['default'])(count, ['вакансия', 'вакансии', 'вакансий']);
        return _react2['default'].createElement(
          'article',
          { className: _style2['default'].articleBody },
          _react2['default'].createElement(
            'span',
            { className: _style2['default'].articleSpan },
            count,
            ' ',
            title
          ),
          {
            'false': _react2['default'].createElement(
              _Green2['default'],
              { onClick: onAdd },
              '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u044E'
            ),
            'true': _react2['default'].createElement(
              'div',
              { className: _style2['default'].closed },
              _react2['default'].createElement(_CkeckIcon2['default'], null),
              _react2['default'].createElement(
                'span',
                null,
                '\u041F\u0440\u043E\u0435\u043A\u0442 \u0437\u0430\u043A\u0440\u044B\u0442, \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0438 \u043D\u0430\u043D\u044F\u0442\u044B'
              )
            )
          }[isClosed]
        );
      }

      return render;
    }()
  }]);

  return Body;
}(_react.PureComponent);

Body.propTypes = {
  count: _propTypes2['default'].number.isRequired,
  isClosed: _propTypes2['default'].bool.isRequired,
  onAdd: _propTypes2['default'].func.isRequired
};
Body.defaultProps = {};

exports['default'] = Body;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(16);

var _Button2 = _interopRequireDefault(_Button);

var _style = __webpack_require__(17);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function Green(props) {
  var children = props.children,
      onClick = props.onClick;

  return _react2['default'].createElement(
    _Button2['default'],
    {
      className: _style2['default'].buttonGreenOutline,
      onClick: onClick
    },
    children
  );
}

Green.propTypes = {
  children: _propTypes2['default'].string.isRequired,
  onClick: _propTypes2['default'].func.isRequired
};
Green.defaultProps = {};

exports['default'] = Green;

/***/ }),
/* 115 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"_3wPi98dFBJCU-1zP2iW2qp","ButtonText":"_2ZL-yYDN9SsoAiKboZkLMI","White-text-button":"_3Jn40e5dBeWNLlbwLdGKFe","checkIcon":"_2hdVOHxouaVYeSHr2_vyE8"};

/***/ }),
/* 116 */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = declOfNum;
function declOfNum(number, titles) {
  var cases = [2, 0, 1, 1, 1, 2];
  return titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
}

/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"_3ygcNVNuNRDHiD0X8EWops","ButtonText":"ImW3pNPQql_Zb2mGSSglr","White-text-button":"HdweMtbGoSl2HAjIbRghq","closed":"_1t7pQjS7GRcjvxE_Gxfrwp","articleSpan":"_18QWb02sxnL2XV08cE_T3Q ImW3pNPQql_Zb2mGSSglr"};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = __webpack_require__(16);

var _Button2 = _interopRequireDefault(_Button);

var _style = __webpack_require__(17);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function Gray(props) {
  var children = props.children,
      onClick = props.onClick;

  return _react2['default'].createElement(
    _Button2['default'],
    {
      className: _style2['default'].buttonBlackOutline,
      onClick: onClick
    },
    children
  );
}

Gray.propTypes = {
  children: _propTypes2['default'].string.isRequired,
  onClick: _propTypes2['default'].func.isRequired
};
Gray.defaultProps = {};

exports['default'] = Gray;

/***/ }),
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"_14k_0hBFQOsGgDs2oRer37","ButtonText":"_1TzYaZXrpMDbpIlErwYKua","White-text-button":"_1L7oW1C0opY-AkjRe6emts","buttonSet":"p2XO686FCkLSYImCYVCm5","buttonClick":"vSoaz7SFxLrdDYXjfikFC","buttonDelete":"_1HgywZtST135w53yVSC4DK"};

/***/ }),
/* 120 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"_3VaVSTT09rFMLJwaDl4K3q","ButtonText":"_18neTh-zyriRmGPidHKESc","White-text-button":"EK7ymF-83Tlv_qGAhJwNA","sectionProject":"_3N66-E5SEgjxyAgyFy07Hp"};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(7);

var _redux = __webpack_require__(2);

var _reactAutobind = __webpack_require__(3);

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

var _VacancyList = __webpack_require__(122);

var _VacancyList2 = _interopRequireDefault(_VacancyList);

var _DeleteProjectVacancy = __webpack_require__(37);

var _DeleteProjectVacancy2 = _interopRequireDefault(_DeleteProjectVacancy);

var _actions = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/forbid-prop-types */


var VacancyListContainer = function (_Component) {
  _inherits(VacancyListContainer, _Component);

  function VacancyListContainer(props, context) {
    _classCallCheck(this, VacancyListContainer);

    var _this = _possibleConstructorReturn(this, (VacancyListContainer.__proto__ || Object.getPrototypeOf(VacancyListContainer)).call(this, props, context));

    (0, _reactAutobind2['default'])(_this);
    _this.id = null;
    _this.state = {
      isModalOpen: false
    };
    return _this;
  }

  _createClass(VacancyListContainer, [{
    key: 'onOpenClose',
    value: function () {
      function onOpenClose(id) {
        this.props.openCloseVacancies(id);
      }

      return onOpenClose;
    }()
  }, {
    key: 'onCloseModal',
    value: function () {
      function onCloseModal() {
        this.updateState({
          isModalOpen: false
        });
      }

      return onCloseModal;
    }()
  }, {
    key: 'onDelete',
    value: function () {
      function onDelete(id) {
        this.id = id;
        this.updateState({
          isModalOpen: true
        });
      }

      return onDelete;
    }()
  }, {
    key: 'onDeleteSubmit',
    value: function () {
      function onDeleteSubmit(e) {
        e.preventDefault();
        this.onCloseModal();
        var vacancy = this.vacancy;
        this.resetVacancy();
        this.props.removeVacancy(vacancy);
      }

      return onDeleteSubmit;
    }()
  }, {
    key: 'resetVacancy',
    value: function () {
      function resetVacancy() {
        this.id = null;
      }

      return resetVacancy;
    }()
  }, {
    key: 'updateState',
    value: function () {
      function updateState(payload) {
        this.setState(Object.assign({}, this.state, payload));
      }

      return updateState;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var isModalOpen = this.state.isModalOpen;
        var _props = this.props,
            vacancies = _props.vacancies,
            titleModal = _props.titleModal,
            nameButtonModal = _props.nameButtonModal;

        return [_react2['default'].createElement(_VacancyList2['default'], {
          vacancies: vacancies,
          onDelete: this.onDelete,
          onOpenClose: this.onOpenClose,
          key: 'vacancy-list'
        }), isModalOpen && _react2['default'].createElement(_DeleteProjectVacancy2['default'], {
          title: titleModal,
          name: nameButtonModal,
          onSubmit: this.onDeleteSubmit,
          onClose: this.onCloseModal,
          key: 'modal-delete'
        })];
      }

      return render;
    }()
  }]);

  return VacancyListContainer;
}(_react.Component);

VacancyListContainer.propTypes = {
  vacancies: _propTypes2['default'].array.isRequired,
  removeVacancy: _propTypes2['default'].func.isRequired,
  openCloseVacancies: _propTypes2['default'].func.isRequired
};
VacancyListContainer.defaultProps = {
  titleModal: 'Удалить вакансию',
  nameButtonModal: 'Да'
};

// const mapStateToProps = state => ({});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    removeVacancy: _actions.removeVacancy,
    openCloseVacancies: _actions.openCloseVacancies
  }, dispatch);
};

exports['default'] = (0, _reactRedux.connect)( /* mapStateToProps */null, mapDispatchToProps)(VacancyListContainer);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Vacancy = __webpack_require__(123);

var _Vacancy2 = _interopRequireDefault(_Vacancy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/forbid-prop-types */


var VacancyList = function (_PureComponent) {
  _inherits(VacancyList, _PureComponent);

  function VacancyList() {
    _classCallCheck(this, VacancyList);

    return _possibleConstructorReturn(this, (VacancyList.__proto__ || Object.getPrototypeOf(VacancyList)).apply(this, arguments));
  }

  _createClass(VacancyList, [{
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            vacancies = _props.vacancies,
            onDelete = _props.onDelete,
            onOpenClose = _props.onOpenClose;

        return _react2['default'].createElement(
          'div',
          null,
          Object.keys(vacancies).map(function (key) {
            var vacancy = vacancies[key];
            var id = vacancy.id,
                title = vacancy.title,
                isClosed = vacancy.isClosed;

            var onDeleteLoc = function () {
              function onDeleteLoc() {
                onDelete(id);
              }

              return onDeleteLoc;
            }();
            var onOpenCloseLoc = function () {
              function onOpenCloseLoc() {
                onOpenClose(id);
              }

              return onOpenCloseLoc;
            }();
            return _react2['default'].createElement(_Vacancy2['default'], {
              key: id,
              isClosed: isClosed,
              title: title,
              onOpenClose: onOpenCloseLoc,
              onDelete: onDeleteLoc
            });
          })
        );
      }

      return render;
    }()
  }]);

  return VacancyList;
}(_react.PureComponent);

VacancyList.propTypes = {
  vacancies: _propTypes2['default'].array.isRequired,
  onDelete: _propTypes2['default'].func.isRequired,
  onOpenClose: _propTypes2['default'].func.isRequired
};
VacancyList.defaultProps = {};

exports['default'] = VacancyList;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SideButtons = __webpack_require__(36);

var _SideButtons2 = _interopRequireDefault(_SideButtons);

var _Body = __webpack_require__(124);

var _Body2 = _interopRequireDefault(_Body);

var _style = __webpack_require__(128);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Vacancy = function (_PureComponent) {
  _inherits(Vacancy, _PureComponent);

  function Vacancy() {
    _classCallCheck(this, Vacancy);

    return _possibleConstructorReturn(this, (Vacancy.__proto__ || Object.getPrototypeOf(Vacancy)).apply(this, arguments));
  }

  _createClass(Vacancy, [{
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            title = _props.title,
            isClosed = _props.isClosed,
            onDelete = _props.onDelete,
            onOpenClose = _props.onOpenClose;

        return _react2['default'].createElement(
          'article',
          { className: _style2['default'].articleProject },
          _react2['default'].createElement(
            'header',
            null,
            _react2['default'].createElement(
              'h4',
              null,
              title
            )
          ),
          _react2['default'].createElement(_Body2['default'], { isClosed: isClosed }),
          _react2['default'].createElement(
            _SideButtons2['default'],
            {
              onDelete: onDelete,
              onClick: onOpenClose
            },
            {
              'false': 'Закрыть вакансию',
              'true': 'Открыть вакансию'
            }[isClosed]
          )
        );
      }

      return render;
    }()
  }]);

  return Vacancy;
}(_react.PureComponent);

Vacancy.propTypes = {
  title: _propTypes2['default'].string,
  isClosed: _propTypes2['default'].bool,
  onDelete: _propTypes2['default'].func,
  onOpenClose: _propTypes2['default'].func
};
Vacancy.defaultProps = {};

exports['default'] = Vacancy;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _SearchIcon = __webpack_require__(125);

var _SearchIcon2 = _interopRequireDefault(_SearchIcon);

var _CkeckIcon = __webpack_require__(35);

var _CkeckIcon2 = _interopRequireDefault(_CkeckIcon);

var _style = __webpack_require__(127);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Body = function (_PureComponent) {
  _inherits(Body, _PureComponent);

  function Body() {
    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
  }

  _createClass(Body, [{
    key: 'render',
    value: function () {
      function render() {
        var isClosed = this.props.isClosed;

        return _react2['default'].createElement(
          'section',
          { className: _style2['default'].vacancy },
          {
            'false': _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(_SearchIcon2['default'], null),
              _react2['default'].createElement(
                'span',
                null,
                '\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u044F \u043E\u0442\u043A\u0440\u044B\u0442\u0430, \u0438\u0434\u0435\u0442 \u043F\u043E\u0434\u0431\u043E\u0440 \u043A\u0430\u043D\u0434\u0438\u0434\u0430\u0442\u043E\u0432'
              )
            ),
            'true': _react2['default'].createElement(
              'div',
              null,
              _react2['default'].createElement(_CkeckIcon2['default'], null),
              _react2['default'].createElement(
                'span',
                null,
                '\u0412\u0430\u043A\u0430\u043D\u0441\u0438\u044F \u0437\u0430\u043A\u0440\u044B\u0442\u0430, \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A \u043D\u0430\u043D\u044F\u0442'
              )
            )
          }[isClosed]
        );
      }

      return render;
    }()
  }]);

  return Body;
}(_react.PureComponent);

Body.propTypes = {
  isClosed: _propTypes2['default'].bool
};
Body.defaultProps = {
  isClosed: true
};

exports['default'] = Body;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _style = __webpack_require__(126);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/* eslint-disable max-len */
function SearchIcon(props) {
  return _react2['default'].createElement(
    'svg',
    {
      viewBox: '0 0 20 20',
      className: _style2['default'].searchIcon
    },
    _react2['default'].createElement('path', { d: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' }),
    _react2['default'].createElement('path', {
      d: 'M0 0h24v24H0z',
      fill: 'none'
    })
  );
}

SearchIcon.propTypes = {};
SearchIcon.defaultProps = {};

exports['default'] = SearchIcon;

/***/ }),
/* 126 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"_1NthrJEWjSI-fNKAAbOiy6","ButtonText":"_3F0PNg8IxXvm8RXpbsRqEM","White-text-button":"_3oqYSVTfCaVQo7Yyq12wVF","searchIcon":"_1s6j0DsKTRdZGAyGLdg4Qs"};

/***/ }),
/* 127 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"_1EZfhL5gdrDhgevcFsV13P","ButtonText":"_3gQiDHUsl_bBFfblLzFlqa","White-text-button":"_3WCUjoWNXHnVopkchyD_LI","vacancy":"_3r6HZH-OL___lo6Iot9VnO"};

/***/ }),
/* 128 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"X3H628gJS5Nz97IICof3U","ButtonText":"_1znsnfE3qv4i7wRwHeJqer","White-text-button":"_1EgF_vgigE36swtX_zK64e","articleProject":"_y1beOKqjNSOkSCLH_s4Y"};

/***/ }),
/* 129 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"XigapnYgAAAR3AVmsVMoc","ButtonText":"_1yuRpBJnLX44IIJDKseKCW","White-text-button":"_2zSxaZP8cboy_NOl_OLItt","button":"_1Dv66lxgknJKNNE9hmR26w"};

/***/ }),
/* 130 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"Placeholder":"_1tRfQwJHcouMEh2aXWiZpV","ButtonText":"bIptfkOVhY5gtbRjxp3OT","White-text-button":"_29jhhvklJ77NdfOBbr8hZG","project":"_30t0A2WAabvjhuFeyQ0D1v"};

/***/ }),
/* 131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projectSelector = undefined;

var _reselect = __webpack_require__(133);

var _check = __webpack_require__(34);

/* eslint-disable import/prefer-default-export */
var projectsSelector = function projectsSelector(state) {
  return state.projects;
};
var vacanciesSelector = function vacanciesSelector(state) {
  return state.vacancies;
};
var searchSelector = function searchSelector(_, props) {
  return {
    searchValue: props.searchValue,
    isOnlyOpen: props.isOnlyOpen
  };
};

var projectSelector = exports.projectSelector = (0, _reselect.createSelector)(projectsSelector, vacanciesSelector, searchSelector, function (projects, vacancies, searchObj) {
  var searchValue = searchObj.searchValue,
      isOnlyOpen = searchObj.isOnlyOpen;

  if ((0, _check.isEmpty)(searchValue)) {
    return projects;
  }
  var result = {};
  Object.keys(projects).forEach(function (keyProject) {
    var project = projects[keyProject];
    var items = project.items;

    var newItems = items.filter(function (id) {
      var vacancy = vacancies[id];
      var title = vacancy.title,
          isClosed = vacancy.isClosed;

      var isSearch = title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
      return isOnlyOpen ? isSearch && !isClosed : isSearch;
    });
    if (!(0, _check.isEmpty)(newItems)) {
      // есть вакансии удовлетворяющие условиям
      result[keyProject] = Object.assign({}, project, {
        items: newItems
      });
    }
  });
  debugger;
  return result;
});

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  }

  // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
  var length = prev.length;
  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;

  var lastArgs = null;
  var lastResult = null;
  // we reference arguments instead of spreading them for performance reasons
  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);

    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++;
      // apply arguments instead of spreading for performance.
      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions));

    // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
    var selector = defaultMemoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      }

      // apply arguments instead of spreading for performance.
      return memoizedResultFunc.apply(null, params);
    });

    selector.resultFunc = resultFunc;
    selector.recomputations = function () {
      return recomputations;
    };
    selector.resetRecomputations = function () {
      return recomputations = 0;
    };
    return selector;
  };
}

var createSelector = exports.createSelector = createSelectorCreator(defaultMemoize);

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}

/***/ })
],[38]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jODcyOGFjNDJkYTAwNDc2NzEyYy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1hdXRvYmluZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvd2FybmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy9zcmMvY29uc3RhbnRzL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9jb21tb24vQnV0dG9uRnVsbC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9jb21tb24vQnV0dG9uT3V0bGluZS9CdXR0b24uanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbk91dGxpbmUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY3JlYXRlU3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy91dGlscy93YXJuaW5nLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3Qvd3JhcE1hcFRvUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy92ZXJpZnlQbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9uL0lucHV0VGV4dC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb250YWluZXJzL0FkZFByb2plY3RWYWNhbmN5Q29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9uL0RpYWxvZ1dpbmRvdy9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL01vZGFsL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL3V0aWxzL2NoZWNrLmpzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9jb21tb24vQ2tlY2tJY29uL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9uL1NpZGVCdXR0b25zL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9uL0RlbGV0ZVByb2plY3RWYWNhbmN5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9Qcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvaW52YXJpYW50L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9TdWJzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L2Nvbm5lY3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9zaGFsbG93RXF1YWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L21hcERpc3BhdGNoVG9Qcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUdldFRhZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fcm9vdC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UHJvdG90eXBlLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2xpYi9wb255ZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2NvbWJpbmVSZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2JpbmRBY3Rpb25DcmVhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2FwcGx5TWlkZGxld2FyZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWFwU3RhdGVUb1Byb3BzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tZXJnZVByb3BzLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9zZWxlY3RvckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3ZlcmlmeVN1YnNlbGVjdG9ycy5qcyIsIndlYnBhY2s6Ly8vc3JjL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9zcmMvc3RvcmUvY29uZmlndXJlU3RvcmUuZGV2LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVkdXgtdGh1bmsvbGliL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9yZWR1Y2Vycy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly8vc3JjL3JlZHVjZXJzL3ZhY2FuY2llcy5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbnRhaW5lcnMvQXBwQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWF1dG9iaW5kL2xpYi9hdXRvQmluZC5qcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvQXBwL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlL2ZvbnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3N0eWxlL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC9zdHlsZS5zY3NzIiwid2VicGFjazovLy9zcmMvY29udGFpbmVycy9IZWFkZXJDb250YWluZXIuanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0lucHV0VGV4dC9zdHlsZS5zY3NzIiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9jb21tb24vQ2hlY2tib3gvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0NoZWNrYm94L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vQnV0dG9uRnVsbC9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2NvbW1vbi9BZGRQcm9qZWN0VmFjYW5jeS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vQWRkUHJvamVjdFZhY2FuY3kvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbkNsb3NlL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9CdXR0b25DbG9zZS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0RpYWxvZ1dpbmRvdy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9kYWwvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL3V0aWxzL2dlbmVyYXRlSUQuanMiLCJ3ZWJwYWNrOi8vL3NyYy9jb250YWluZXJzL1Byb2plY3RMaXN0Q29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUHJvamVjdExpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy9zcmMvY29udGFpbmVycy9Qcm9qZWN0Q29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUHJvamVjdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL1Byb2plY3QvSGVhZGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvUHJvamVjdC9IZWFkZXIvQm9keS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vL3NyYy9jb21wb25lbnRzL2NvbW1vbi9CdXR0b25PdXRsaW5lL0dyZWVuLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbW1vbi9Da2Vja0ljb24vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL3V0aWxzL2RlY2xPZk51bS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3QvSGVhZGVyL0JvZHkvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbk91dGxpbmUvR3JleS5qc3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vU2lkZUJ1dHRvbnMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2plY3QvSGVhZGVyL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vL3NyYy9jb250YWluZXJzL1ZhY2FuY3lMaXN0Q29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVmFjYW5jeUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9WYWNhbmN5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVmFjYW5jeS9Cb2R5L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9uL1NlYXJjaEljb24vaW5kZXguanN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL1NlYXJjaEljb24vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZhY2FuY3kvQm9keS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVmFjYW5jeS9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29tbW9uL0RlbGV0ZVByb2plY3RWYWNhbmN5L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9qZWN0L3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9qZWN0TGlzdC9zdHlsZS5zY3NzIiwid2VicGFjazovLy9zcmMvc2VsZWN0b3JzL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvcmVzZWxlY3QvbGliL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVTdG9yZSBmcm9tICcuL2NyZWF0ZVN0b3JlJztcbmltcG9ydCBjb21iaW5lUmVkdWNlcnMgZnJvbSAnLi9jb21iaW5lUmVkdWNlcnMnO1xuaW1wb3J0IGJpbmRBY3Rpb25DcmVhdG9ycyBmcm9tICcuL2JpbmRBY3Rpb25DcmVhdG9ycyc7XG5pbXBvcnQgYXBwbHlNaWRkbGV3YXJlIGZyb20gJy4vYXBwbHlNaWRkbGV3YXJlJztcbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5pbXBvcnQgd2FybmluZyBmcm9tICcuL3V0aWxzL3dhcm5pbmcnO1xuXG4vKlxuKiBUaGlzIGlzIGEgZHVtbXkgZnVuY3Rpb24gdG8gY2hlY2sgaWYgdGhlIGZ1bmN0aW9uIG5hbWUgaGFzIGJlZW4gYWx0ZXJlZCBieSBtaW5pZmljYXRpb24uXG4qIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiovXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICB3YXJuaW5nKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFxcJ3Byb2R1Y3Rpb25cXCcuICcgKyAnVGhpcyBtZWFucyB0aGF0IHlvdSBhcmUgcnVubmluZyBhIHNsb3dlciBkZXZlbG9wbWVudCBidWlsZCBvZiBSZWR1eC4gJyArICdZb3UgY2FuIHVzZSBsb29zZS1lbnZpZnkgKGh0dHBzOi8vZ2l0aHViLmNvbS96ZXJ0b3NoL2xvb3NlLWVudmlmeSkgZm9yIGJyb3dzZXJpZnkgJyArICdvciBEZWZpbmVQbHVnaW4gZm9yIHdlYnBhY2sgKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzAwMzAwMzEpICcgKyAndG8gZW5zdXJlIHlvdSBoYXZlIHRoZSBjb3JyZWN0IGNvZGUgZm9yIHlvdXIgcHJvZHVjdGlvbiBidWlsZC4nKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU3RvcmUsIGNvbWJpbmVSZWR1Y2VycywgYmluZEFjdGlvbkNyZWF0b3JzLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9hdXRvQmluZCcpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWF1dG9iaW5kL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBQcm92aWRlciwgeyBjcmVhdGVQcm92aWRlciB9IGZyb20gJy4vY29tcG9uZW50cy9Qcm92aWRlcic7XG5pbXBvcnQgY29ubmVjdEFkdmFuY2VkIGZyb20gJy4vY29tcG9uZW50cy9jb25uZWN0QWR2YW5jZWQnO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSAnLi9jb25uZWN0L2Nvbm5lY3QnO1xuXG5leHBvcnQgeyBQcm92aWRlciwgY3JlYXRlUHJvdmlkZXIsIGNvbm5lY3RBZHZhbmNlZCwgY29ubmVjdCB9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy93YXJuaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgYmFzZUdldFRhZyBmcm9tICcuL19iYXNlR2V0VGFnLmpzJztcbmltcG9ydCBnZXRQcm90b3R5cGUgZnJvbSAnLi9fZ2V0UHJvdG90eXBlLmpzJztcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UuanMnO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0VGFnID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBmdW5jUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGUsXG4gICAgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogVXNlZCB0byBpbmZlciB0aGUgYE9iamVjdGAgY29uc3RydWN0b3IuICovXG52YXIgb2JqZWN0Q3RvclN0cmluZyA9IGZ1bmNUb1N0cmluZy5jYWxsKE9iamVjdCk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC44LjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QobmV3IEZvbyk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoeyAneCc6IDAsICd5JzogMCB9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoT2JqZWN0LmNyZWF0ZShudWxsKSk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdExpa2UodmFsdWUpIHx8IGJhc2VHZXRUYWcodmFsdWUpICE9IG9iamVjdFRhZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBnZXRQcm90b3R5cGUodmFsdWUpO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgQ3RvciA9IGhhc093blByb3BlcnR5LmNhbGwocHJvdG8sICdjb25zdHJ1Y3RvcicpICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yIGluc3RhbmNlb2YgQ3RvciAmJlxuICAgIGZ1bmNUb1N0cmluZy5jYWxsKEN0b3IpID09IG9iamVjdEN0b3JTdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzUGxhaW5PYmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjb25zdCBBRERfUFJPSkVDVCA9ICdBRERfUFJPSkVDVCc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1BST0pFQ1QgPSAnUkVNT1ZFX1BST0pFQ1QnO1xuXG5leHBvcnQgY29uc3QgT1BFTl9DTE9TRV9QUk9KRUNUID0gJ09QRU5fQ0xPU0VfUFJPSkVDVCc7XG5cbmV4cG9ydCBjb25zdCBBRERfVkFDQU5DWSA9ICdBRERfVkFDQU5DWSc7XG5leHBvcnQgY29uc3QgUkVNT1ZFX1ZBQ0FOQ1kgPSAnUkVNT1ZFX1ZBQ0FOQ1knO1xuXG5leHBvcnQgY29uc3QgT1BFTl9DTE9TRV9WQUNBTkNZID0gJ09QRU5fQ0xPU0VfVkFDQU5DWSc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbnN0YW50cy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuc2Nzcyc7XG5cbmZ1bmN0aW9uIEJ1dHRvbkZ1bGwocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIGNoaWxkcmVuLFxuICAgIG9uQ2xpY2ssXG4gICAgdHlwZSxcbiAgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uQmd9XG4gICAgICB0eXBlPXt0eXBlfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9idXR0b24+XG4gICk7XG59XG5cbkJ1dHRvbkZ1bGwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbkJ1dHRvbkZ1bGwuZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAnYnV0dG9uJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkZ1bGw7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbkZ1bGwvaW5kZXguanN4IiwiLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUgKi9cbmltcG9ydCB7XG4gIEFERF9QUk9KRUNULFxuICBPUEVOX0NMT1NFX1BST0pFQ1QsXG4gIFJFTU9WRV9QUk9KRUNULFxuICBBRERfVkFDQU5DWSxcbiAgT1BFTl9DTE9TRV9WQUNBTkNZLFxuICBSRU1PVkVfVkFDQU5DWSxcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCBnZW5lcmF0ZUlEIGZyb20gJy4uL3V0aWxzL2dlbmVyYXRlSUQnO1xuaW1wb3J0IHsgaXNBcnJheSB9IGZyb20gJy4uL3V0aWxzL2NoZWNrJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QodmFsdWUpIHtcbiAgY29uc3QgaWQgPSBnZW5lcmF0ZUlEKCk7XG4gIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgW2lkXToge1xuICAgICAgaWQsXG4gICAgICB0aXRsZTogdmFsdWUsXG4gICAgICBpc0Nsb3NlZDogZmFsc2UsXG4gICAgICBpdGVtczogW10sXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGFjdGlvbkNyZWF0ZXIoQUREX1BST0pFQ1QsIHBheWxvYWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChpZCkge1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgcHJvamVjdHMgfSA9IGdldFN0YXRlKCk7XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gcHJvamVjdHNbaWRdO1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBwcm9qZWN0SWQ6IGlkLFxuICAgICAgdmFjYW5jaWVzOiBpdGVtcyxcbiAgICB9O1xuICAgIGRpc3BhdGNoKGFjdGlvbkNyZWF0ZXIoUkVNT1ZFX1BST0pFQ1QsIHBheWxvYWQpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5DbG9zZVByb2plY3QoaWQpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICBjb25zdCB7IHByb2plY3RzIH0gPSBnZXRTdGF0ZSgpO1xuICAgIGNvbnN0IHsgaXNDbG9zZWQsIGl0ZW1zIH0gPSBwcm9qZWN0c1tpZF07XG5cbiAgICBkaXNwYXRjaChhY3Rpb25DcmVhdGVyKE9QRU5fQ0xPU0VfUFJPSkVDVCwgaWQpKTtcbiAgICBpZiAoIWlzQ2xvc2VkKSB7XG4gICAgICAvLyDQt9Cw0LrRgNGL0YLRjCDQstGB0LUg0LLQsNC60LDQvdGB0LjQuCDQsiDQv9GA0L7QtdC60YLQtVxuICAgICAgZGlzcGF0Y2gob3BlbkNsb3NlVmFjYW5jaWVzKGl0ZW1zKSk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVmFjYW5jeShwcm9qZWN0SWQsIHZhbHVlKSB7XG4gIGNvbnN0IGlkID0gZ2VuZXJhdGVJRCgpO1xuICBjb25zdCBwYXlsb2FkID0ge1xuICAgIFtpZF06IHtcbiAgICAgIGlkLFxuICAgICAgdGl0bGU6IHZhbHVlLFxuICAgICAgaXNDbG9zZWQ6IGZhbHNlLFxuICAgICAgcHJvamVjdElkLFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBhY3Rpb25DcmVhdGVyKEFERF9WQUNBTkNZLCBwYXlsb2FkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVZhY2FuY3koaWQpIHtcbiAgLy8gcmV0dXJuIGFjdGlvbkNyZWF0ZXIoUkVNT1ZFX1ZBQ0FOQ1ksIHZhY2FuY3kpO1xuICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgIGNvbnN0IHsgdmFjYW5jaWVzIH0gPSBnZXRTdGF0ZSgpO1xuICAgIGNvbnN0IHZhY2FuY3kgPSB2YWNhbmNpZXNbaWRdO1xuICAgIGNvbnN0IHsgaWQ6IHZhY2FuY3lJZCwgcHJvamVjdElkIH0gPSB2YWNhbmN5O1xuICAgIGNvbnN0IHBheWxvYWQgPSB7XG4gICAgICBwcm9qZWN0SWQsXG4gICAgICB2YWNhbmN5SWQsXG4gICAgfTtcbiAgICBkaXNwYXRjaChhY3Rpb25DcmVhdGVyKFJFTU9WRV9WQUNBTkNZLCBwYXlsb2FkKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuQ2xvc2VWYWNhbmNpZXMoaWRzKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gsIGdldFN0YXRlKSA9PiB7XG4gICAgY29uc3QgeyB2YWNhbmNpZXMgfSA9IGdldFN0YXRlKCk7XG4gICAgbGV0IHBheWxvYWQ7XG4gICAgaWYgKGlzQXJyYXkoaWRzKSkge1xuICAgICAgcGF5bG9hZCA9IHtcbiAgICAgICAgaWRzLFxuICAgICAgICBzdGF0dXM6IHRydWUsXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IGlzQ2xvc2VkIH0gPSB2YWNhbmNpZXNbaWRzXTtcbiAgICAgIHBheWxvYWQgPSB7XG4gICAgICAgIGlkczogW2lkc10sXG4gICAgICAgIHN0YXR1czogIWlzQ2xvc2VkLFxuICAgICAgfTtcbiAgICB9XG4gICAgZGlzcGF0Y2goYWN0aW9uQ3JlYXRlcihPUEVOX0NMT1NFX1ZBQ0FOQ1ksIHBheWxvYWQpKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWN0aW9uQ3JlYXRlcih0eXBlLCBwYXlsb2FkKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZSxcbiAgICBwYXlsb2FkLFxuICB9O1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2FjdGlvbnMvaW5kZXguanMiLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9yZXF1aXJlLWRlZmF1bHQtcHJvcHMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuc2Nzcyc7XG5cbmZ1bmN0aW9uIEJ1dHRvbihwcm9wcykge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgb25DbGljayxcbiAgICBjbGFzc05hbWUsXG4gIH0gPSBwcm9wcztcbiAgY29uc3Qgc3RsID0gKGNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkKVxuICAgID8gY2xhc3NOYW1lXG4gICAgOiBzdHlsZS5idXR0b25Db21tb247XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtzdGx9XG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvYnV0dG9uPlxuICApO1xufVxuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbk91dGxpbmUvQnV0dG9uLmpzeCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlBsYWNlaG9sZGVyXCI6XCJfMnBsMzNwMzRBbk0tSUwyZ2REX0taQ1wiLFwiQnV0dG9uVGV4dFwiOlwiXzFYTTVqV0FrcTRJeVpwX0MtcHBtdVRcIixcIldoaXRlLXRleHQtYnV0dG9uXCI6XCJfM0lHT0NOd1pGcmJvcGZOdW1DT3dHc1wiLFwiYnV0dG9uQ29tbW9uXCI6XCJGM0N5WDdGYkpxMzVNb3M2X3pyay0gXzFYTTVqV0FrcTRJeVpwX0MtcHBtdVRcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2NvbW1vbi9CdXR0b25PdXRsaW5lL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCB2YXIgc3Vic2NyaXB0aW9uU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICB0cnlTdWJzY3JpYmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRyeVVuc3Vic2NyaWJlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBub3RpZnlOZXN0ZWRTdWJzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpc1N1YnNjcmliZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbn0pO1xuXG5leHBvcnQgdmFyIHN0b3JlU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBzdWJzY3JpYmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRpc3BhdGNoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL1Byb3BUeXBlcy5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IGludmFyaWFudCBmcm9tICdpbnZhcmlhbnQnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgU3Vic2NyaXB0aW9uIGZyb20gJy4uL3V0aWxzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBzdG9yZVNoYXBlLCBzdWJzY3JpcHRpb25TaGFwZSB9IGZyb20gJy4uL3V0aWxzL1Byb3BUeXBlcyc7XG5cbnZhciBob3RSZWxvYWRpbmdWZXJzaW9uID0gMDtcbnZhciBkdW1teVN0YXRlID0ge307XG5mdW5jdGlvbiBub29wKCkge31cbmZ1bmN0aW9uIG1ha2VTZWxlY3RvclN0YXRlZnVsKHNvdXJjZVNlbGVjdG9yLCBzdG9yZSkge1xuICAvLyB3cmFwIHRoZSBzZWxlY3RvciBpbiBhbiBvYmplY3QgdGhhdCB0cmFja3MgaXRzIHJlc3VsdHMgYmV0d2VlbiBydW5zLlxuICB2YXIgc2VsZWN0b3IgPSB7XG4gICAgcnVuOiBmdW5jdGlvbiBydW5Db21wb25lbnRTZWxlY3Rvcihwcm9wcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG5leHRQcm9wcyA9IHNvdXJjZVNlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCksIHByb3BzKTtcbiAgICAgICAgaWYgKG5leHRQcm9wcyAhPT0gc2VsZWN0b3IucHJvcHMgfHwgc2VsZWN0b3IuZXJyb3IpIHtcbiAgICAgICAgICBzZWxlY3Rvci5zaG91bGRDb21wb25lbnRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgIHNlbGVjdG9yLnByb3BzID0gbmV4dFByb3BzO1xuICAgICAgICAgIHNlbGVjdG9yLmVycm9yID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgc2VsZWN0b3IuZXJyb3IgPSBlcnJvcjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHNlbGVjdG9yO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25uZWN0QWR2YW5jZWQoXG4vKlxuICBzZWxlY3RvckZhY3RvcnkgaXMgYSBmdW5jIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIHJldHVybmluZyB0aGUgc2VsZWN0b3IgZnVuY3Rpb24gdXNlZCB0b1xuICBjb21wdXRlIG5ldyBwcm9wcyBmcm9tIHN0YXRlLCBwcm9wcywgYW5kIGRpc3BhdGNoLiBGb3IgZXhhbXBsZTpcbiAgICAgZXhwb3J0IGRlZmF1bHQgY29ubmVjdEFkdmFuY2VkKChkaXNwYXRjaCwgb3B0aW9ucykgPT4gKHN0YXRlLCBwcm9wcykgPT4gKHtcbiAgICAgIHRoaW5nOiBzdGF0ZS50aGluZ3NbcHJvcHMudGhpbmdJZF0sXG4gICAgICBzYXZlVGhpbmc6IGZpZWxkcyA9PiBkaXNwYXRjaChhY3Rpb25DcmVhdG9ycy5zYXZlVGhpbmcocHJvcHMudGhpbmdJZCwgZmllbGRzKSksXG4gICAgfSkpKFlvdXJDb21wb25lbnQpXG4gICBBY2Nlc3MgdG8gZGlzcGF0Y2ggaXMgcHJvdmlkZWQgdG8gdGhlIGZhY3Rvcnkgc28gc2VsZWN0b3JGYWN0b3JpZXMgY2FuIGJpbmQgYWN0aW9uQ3JlYXRvcnNcbiAgb3V0c2lkZSBvZiB0aGVpciBzZWxlY3RvciBhcyBhbiBvcHRpbWl6YXRpb24uIE9wdGlvbnMgcGFzc2VkIHRvIGNvbm5lY3RBZHZhbmNlZCBhcmUgcGFzc2VkIHRvXG4gIHRoZSBzZWxlY3RvckZhY3RvcnksIGFsb25nIHdpdGggZGlzcGxheU5hbWUgYW5kIFdyYXBwZWRDb21wb25lbnQsIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gICBOb3RlIHRoYXQgc2VsZWN0b3JGYWN0b3J5IGlzIHJlc3BvbnNpYmxlIGZvciBhbGwgY2FjaGluZy9tZW1vaXphdGlvbiBvZiBpbmJvdW5kIGFuZCBvdXRib3VuZFxuICBwcm9wcy4gRG8gbm90IHVzZSBjb25uZWN0QWR2YW5jZWQgZGlyZWN0bHkgd2l0aG91dCBtZW1vaXppbmcgcmVzdWx0cyBiZXR3ZWVuIGNhbGxzIHRvIHlvdXJcbiAgc2VsZWN0b3IsIG90aGVyd2lzZSB0aGUgQ29ubmVjdCBjb21wb25lbnQgd2lsbCByZS1yZW5kZXIgb24gZXZlcnkgc3RhdGUgb3IgcHJvcHMgY2hhbmdlLlxuKi9cbnNlbGVjdG9yRmFjdG9yeSkge1xuICB2YXIgX2NvbnRleHRUeXBlcywgX2NoaWxkQ29udGV4dFR5cGVzO1xuXG4gIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fSxcbiAgICAgIF9yZWYkZ2V0RGlzcGxheU5hbWUgPSBfcmVmLmdldERpc3BsYXlOYW1lLFxuICAgICAgZ2V0RGlzcGxheU5hbWUgPSBfcmVmJGdldERpc3BsYXlOYW1lID09PSB1bmRlZmluZWQgPyBmdW5jdGlvbiAobmFtZSkge1xuICAgIHJldHVybiAnQ29ubmVjdEFkdmFuY2VkKCcgKyBuYW1lICsgJyknO1xuICB9IDogX3JlZiRnZXREaXNwbGF5TmFtZSxcbiAgICAgIF9yZWYkbWV0aG9kTmFtZSA9IF9yZWYubWV0aG9kTmFtZSxcbiAgICAgIG1ldGhvZE5hbWUgPSBfcmVmJG1ldGhvZE5hbWUgPT09IHVuZGVmaW5lZCA/ICdjb25uZWN0QWR2YW5jZWQnIDogX3JlZiRtZXRob2ROYW1lLFxuICAgICAgX3JlZiRyZW5kZXJDb3VudFByb3AgPSBfcmVmLnJlbmRlckNvdW50UHJvcCxcbiAgICAgIHJlbmRlckNvdW50UHJvcCA9IF9yZWYkcmVuZGVyQ291bnRQcm9wID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBfcmVmJHJlbmRlckNvdW50UHJvcCxcbiAgICAgIF9yZWYkc2hvdWxkSGFuZGxlU3RhdCA9IF9yZWYuc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLFxuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzID0gX3JlZiRzaG91bGRIYW5kbGVTdGF0ID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3JlZiRzaG91bGRIYW5kbGVTdGF0LFxuICAgICAgX3JlZiRzdG9yZUtleSA9IF9yZWYuc3RvcmVLZXksXG4gICAgICBzdG9yZUtleSA9IF9yZWYkc3RvcmVLZXkgPT09IHVuZGVmaW5lZCA/ICdzdG9yZScgOiBfcmVmJHN0b3JlS2V5LFxuICAgICAgX3JlZiR3aXRoUmVmID0gX3JlZi53aXRoUmVmLFxuICAgICAgd2l0aFJlZiA9IF9yZWYkd2l0aFJlZiA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiBfcmVmJHdpdGhSZWYsXG4gICAgICBjb25uZWN0T3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbJ2dldERpc3BsYXlOYW1lJywgJ21ldGhvZE5hbWUnLCAncmVuZGVyQ291bnRQcm9wJywgJ3Nob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcycsICdzdG9yZUtleScsICd3aXRoUmVmJ10pO1xuXG4gIHZhciBzdWJzY3JpcHRpb25LZXkgPSBzdG9yZUtleSArICdTdWJzY3JpcHRpb24nO1xuICB2YXIgdmVyc2lvbiA9IGhvdFJlbG9hZGluZ1ZlcnNpb24rKztcblxuICB2YXIgY29udGV4dFR5cGVzID0gKF9jb250ZXh0VHlwZXMgPSB7fSwgX2NvbnRleHRUeXBlc1tzdG9yZUtleV0gPSBzdG9yZVNoYXBlLCBfY29udGV4dFR5cGVzW3N1YnNjcmlwdGlvbktleV0gPSBzdWJzY3JpcHRpb25TaGFwZSwgX2NvbnRleHRUeXBlcyk7XG4gIHZhciBjaGlsZENvbnRleHRUeXBlcyA9IChfY2hpbGRDb250ZXh0VHlwZXMgPSB7fSwgX2NoaWxkQ29udGV4dFR5cGVzW3N1YnNjcmlwdGlvbktleV0gPSBzdWJzY3JpcHRpb25TaGFwZSwgX2NoaWxkQ29udGV4dFR5cGVzKTtcblxuICByZXR1cm4gZnVuY3Rpb24gd3JhcFdpdGhDb25uZWN0KFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICBpbnZhcmlhbnQodHlwZW9mIFdyYXBwZWRDb21wb25lbnQgPT0gJ2Z1bmN0aW9uJywgJ1lvdSBtdXN0IHBhc3MgYSBjb21wb25lbnQgdG8gdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5ICcgKyAoJ2Nvbm5lY3QuIEluc3RlYWQgcmVjZWl2ZWQgJyArIEpTT04uc3RyaW5naWZ5KFdyYXBwZWRDb21wb25lbnQpKSk7XG5cbiAgICB2YXIgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBXcmFwcGVkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IFdyYXBwZWRDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50JztcblxuICAgIHZhciBkaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lKHdyYXBwZWRDb21wb25lbnROYW1lKTtcblxuICAgIHZhciBzZWxlY3RvckZhY3RvcnlPcHRpb25zID0gX2V4dGVuZHMoe30sIGNvbm5lY3RPcHRpb25zLCB7XG4gICAgICBnZXREaXNwbGF5TmFtZTogZ2V0RGlzcGxheU5hbWUsXG4gICAgICBtZXRob2ROYW1lOiBtZXRob2ROYW1lLFxuICAgICAgcmVuZGVyQ291bnRQcm9wOiByZW5kZXJDb3VudFByb3AsXG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXM6IHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgIHN0b3JlS2V5OiBzdG9yZUtleSxcbiAgICAgIHdpdGhSZWY6IHdpdGhSZWYsXG4gICAgICBkaXNwbGF5TmFtZTogZGlzcGxheU5hbWUsXG4gICAgICB3cmFwcGVkQ29tcG9uZW50TmFtZTogd3JhcHBlZENvbXBvbmVudE5hbWUsXG4gICAgICBXcmFwcGVkQ29tcG9uZW50OiBXcmFwcGVkQ29tcG9uZW50XG4gICAgfSk7XG5cbiAgICB2YXIgQ29ubmVjdCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoQ29ubmVjdCwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIENvbm5lY3QocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENvbm5lY3QpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgICAgIF90aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICBfdGhpcy5zdGF0ZSA9IHt9O1xuICAgICAgICBfdGhpcy5yZW5kZXJDb3VudCA9IDA7XG4gICAgICAgIF90aGlzLnN0b3JlID0gcHJvcHNbc3RvcmVLZXldIHx8IGNvbnRleHRbc3RvcmVLZXldO1xuICAgICAgICBfdGhpcy5wcm9wc01vZGUgPSBCb29sZWFuKHByb3BzW3N0b3JlS2V5XSk7XG4gICAgICAgIF90aGlzLnNldFdyYXBwZWRJbnN0YW5jZSA9IF90aGlzLnNldFdyYXBwZWRJbnN0YW5jZS5iaW5kKF90aGlzKTtcblxuICAgICAgICBpbnZhcmlhbnQoX3RoaXMuc3RvcmUsICdDb3VsZCBub3QgZmluZCBcIicgKyBzdG9yZUtleSArICdcIiBpbiBlaXRoZXIgdGhlIGNvbnRleHQgb3IgcHJvcHMgb2YgJyArICgnXCInICsgZGlzcGxheU5hbWUgKyAnXCIuIEVpdGhlciB3cmFwIHRoZSByb290IGNvbXBvbmVudCBpbiBhIDxQcm92aWRlcj4sICcpICsgKCdvciBleHBsaWNpdGx5IHBhc3MgXCInICsgc3RvcmVLZXkgKyAnXCIgYXMgYSBwcm9wIHRvIFwiJyArIGRpc3BsYXlOYW1lICsgJ1wiLicpKTtcblxuICAgICAgICBfdGhpcy5pbml0U2VsZWN0b3IoKTtcbiAgICAgICAgX3RoaXMuaW5pdFN1YnNjcmlwdGlvbigpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIENvbm5lY3QucHJvdG90eXBlLmdldENoaWxkQ29udGV4dCA9IGZ1bmN0aW9uIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICAgICAgdmFyIF9yZWYyO1xuXG4gICAgICAgIC8vIElmIHRoaXMgY29tcG9uZW50IHJlY2VpdmVkIHN0b3JlIGZyb20gcHJvcHMsIGl0cyBzdWJzY3JpcHRpb24gc2hvdWxkIGJlIHRyYW5zcGFyZW50XG4gICAgICAgIC8vIHRvIGFueSBkZXNjZW5kYW50cyByZWNlaXZpbmcgc3RvcmUrc3Vic2NyaXB0aW9uIGZyb20gY29udGV4dDsgaXQgcGFzc2VzIGFsb25nXG4gICAgICAgIC8vIHN1YnNjcmlwdGlvbiBwYXNzZWQgdG8gaXQuIE90aGVyd2lzZSwgaXQgc2hhZG93cyB0aGUgcGFyZW50IHN1YnNjcmlwdGlvbiwgd2hpY2ggYWxsb3dzXG4gICAgICAgIC8vIENvbm5lY3QgdG8gY29udHJvbCBvcmRlcmluZyBvZiBub3RpZmljYXRpb25zIHRvIGZsb3cgdG9wLWRvd24uXG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSB0aGlzLnByb3BzTW9kZSA/IG51bGwgOiB0aGlzLnN1YnNjcmlwdGlvbjtcbiAgICAgICAgcmV0dXJuIF9yZWYyID0ge30sIF9yZWYyW3N1YnNjcmlwdGlvbktleV0gPSBzdWJzY3JpcHRpb24gfHwgdGhpcy5jb250ZXh0W3N1YnNjcmlwdGlvbktleV0sIF9yZWYyO1xuICAgICAgfTtcblxuICAgICAgQ29ubmVjdC5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgaWYgKCFzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXMpIHJldHVybjtcblxuICAgICAgICAvLyBjb21wb25lbnRXaWxsTW91bnQgZmlyZXMgZHVyaW5nIHNlcnZlciBzaWRlIHJlbmRlcmluZywgYnV0IGNvbXBvbmVudERpZE1vdW50IGFuZFxuICAgICAgICAvLyBjb21wb25lbnRXaWxsVW5tb3VudCBkbyBub3QuIEJlY2F1c2Ugb2YgdGhpcywgdHJ5U3Vic2NyaWJlIGhhcHBlbnMgZHVyaW5nIC4uLmRpZE1vdW50LlxuICAgICAgICAvLyBPdGhlcndpc2UsIHVuc3Vic2NyaXB0aW9uIHdvdWxkIG5ldmVyIHRha2UgcGxhY2UgZHVyaW5nIFNTUiwgY2F1c2luZyBhIG1lbW9yeSBsZWFrLlxuICAgICAgICAvLyBUbyBoYW5kbGUgdGhlIGNhc2Ugd2hlcmUgYSBjaGlsZCBjb21wb25lbnQgbWF5IGhhdmUgdHJpZ2dlcmVkIGEgc3RhdGUgY2hhbmdlIGJ5XG4gICAgICAgIC8vIGRpc3BhdGNoaW5nIGFuIGFjdGlvbiBpbiBpdHMgY29tcG9uZW50V2lsbE1vdW50LCB3ZSBoYXZlIHRvIHJlLXJ1biB0aGUgc2VsZWN0IGFuZCBtYXliZVxuICAgICAgICAvLyByZS1yZW5kZXIuXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnRyeVN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnJ1bih0aGlzLnByb3BzKTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlKSB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICB9O1xuXG4gICAgICBDb25uZWN0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rvci5ydW4obmV4dFByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIENvbm5lY3QucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZSA9IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlO1xuICAgICAgfTtcblxuICAgICAgQ29ubmVjdC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uKSB0aGlzLnN1YnNjcmlwdGlvbi50cnlVbnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMubm90aWZ5TmVzdGVkU3VicyA9IG5vb3A7XG4gICAgICAgIHRoaXMuc3RvcmUgPSBudWxsO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnJ1biA9IG5vb3A7XG4gICAgICAgIHRoaXMuc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZmFsc2U7XG4gICAgICB9O1xuXG4gICAgICBDb25uZWN0LnByb3RvdHlwZS5nZXRXcmFwcGVkSW5zdGFuY2UgPSBmdW5jdGlvbiBnZXRXcmFwcGVkSW5zdGFuY2UoKSB7XG4gICAgICAgIGludmFyaWFudCh3aXRoUmVmLCAnVG8gYWNjZXNzIHRoZSB3cmFwcGVkIGluc3RhbmNlLCB5b3UgbmVlZCB0byBzcGVjaWZ5ICcgKyAoJ3sgd2l0aFJlZjogdHJ1ZSB9IGluIHRoZSBvcHRpb25zIGFyZ3VtZW50IG9mIHRoZSAnICsgbWV0aG9kTmFtZSArICcoKSBjYWxsLicpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMud3JhcHBlZEluc3RhbmNlO1xuICAgICAgfTtcblxuICAgICAgQ29ubmVjdC5wcm90b3R5cGUuc2V0V3JhcHBlZEluc3RhbmNlID0gZnVuY3Rpb24gc2V0V3JhcHBlZEluc3RhbmNlKHJlZikge1xuICAgICAgICB0aGlzLndyYXBwZWRJbnN0YW5jZSA9IHJlZjtcbiAgICAgIH07XG5cbiAgICAgIENvbm5lY3QucHJvdG90eXBlLmluaXRTZWxlY3RvciA9IGZ1bmN0aW9uIGluaXRTZWxlY3RvcigpIHtcbiAgICAgICAgdmFyIHNvdXJjZVNlbGVjdG9yID0gc2VsZWN0b3JGYWN0b3J5KHRoaXMuc3RvcmUuZGlzcGF0Y2gsIHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yID0gbWFrZVNlbGVjdG9yU3RhdGVmdWwoc291cmNlU2VsZWN0b3IsIHRoaXMuc3RvcmUpO1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnJ1bih0aGlzLnByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIENvbm5lY3QucHJvdG90eXBlLmluaXRTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiBpbml0U3Vic2NyaXB0aW9uKCkge1xuICAgICAgICBpZiAoIXNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykgcmV0dXJuO1xuXG4gICAgICAgIC8vIHBhcmVudFN1YidzIHNvdXJjZSBzaG91bGQgbWF0Y2ggd2hlcmUgc3RvcmUgY2FtZSBmcm9tOiBwcm9wcyB2cy4gY29udGV4dC4gQSBjb21wb25lbnRcbiAgICAgICAgLy8gY29ubmVjdGVkIHRvIHRoZSBzdG9yZSB2aWEgcHJvcHMgc2hvdWxkbid0IHVzZSBzdWJzY3JpcHRpb24gZnJvbSBjb250ZXh0LCBvciB2aWNlIHZlcnNhLlxuICAgICAgICB2YXIgcGFyZW50U3ViID0gKHRoaXMucHJvcHNNb2RlID8gdGhpcy5wcm9wcyA6IHRoaXMuY29udGV4dClbc3Vic2NyaXB0aW9uS2V5XTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKHRoaXMuc3RvcmUsIHBhcmVudFN1YiwgdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcykpO1xuXG4gICAgICAgIC8vIGBub3RpZnlOZXN0ZWRTdWJzYCBpcyBkdXBsaWNhdGVkIHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB0aGUgY29tcG9uZW50IGlzICB1bm1vdW50ZWQgaW5cbiAgICAgICAgLy8gdGhlIG1pZGRsZSBvZiB0aGUgbm90aWZpY2F0aW9uIGxvb3AsIHdoZXJlIGB0aGlzLnN1YnNjcmlwdGlvbmAgd2lsbCB0aGVuIGJlIG51bGwuIEFuXG4gICAgICAgIC8vIGV4dHJhIG51bGwgY2hlY2sgZXZlcnkgY2hhbmdlIGNhbiBiZSBhdm9pZGVkIGJ5IGNvcHlpbmcgdGhlIG1ldGhvZCBvbnRvIGB0aGlzYCBhbmQgdGhlblxuICAgICAgICAvLyByZXBsYWNpbmcgaXQgd2l0aCBhIG5vLW9wIG9uIHVubW91bnQuIFRoaXMgY2FuIHByb2JhYmx5IGJlIGF2b2lkZWQgaWYgU3Vic2NyaXB0aW9uJ3NcbiAgICAgICAgLy8gbGlzdGVuZXJzIGxvZ2ljIGlzIGNoYW5nZWQgdG8gbm90IGNhbGwgbGlzdGVuZXJzIHRoYXQgaGF2ZSBiZWVuIHVuc3Vic2NyaWJlZCBpbiB0aGVcbiAgICAgICAgLy8gbWlkZGxlIG9mIHRoZSBub3RpZmljYXRpb24gbG9vcC5cbiAgICAgICAgdGhpcy5ub3RpZnlOZXN0ZWRTdWJzID0gdGhpcy5zdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3Vicy5iaW5kKHRoaXMuc3Vic2NyaXB0aW9uKTtcbiAgICAgIH07XG5cbiAgICAgIENvbm5lY3QucHJvdG90eXBlLm9uU3RhdGVDaGFuZ2UgPSBmdW5jdGlvbiBvblN0YXRlQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnNlbGVjdG9yLnJ1bih0aGlzLnByb3BzKTtcblxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlKSB7XG4gICAgICAgICAgdGhpcy5ub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUgPSB0aGlzLm5vdGlmeU5lc3RlZFN1YnNPbkNvbXBvbmVudERpZFVwZGF0ZTtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKGR1bW15U3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBDb25uZWN0LnByb3RvdHlwZS5ub3RpZnlOZXN0ZWRTdWJzT25Db21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBub3RpZnlOZXN0ZWRTdWJzT25Db21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIC8vIGBjb21wb25lbnREaWRVcGRhdGVgIGlzIGNvbmRpdGlvbmFsbHkgaW1wbGVtZW50ZWQgd2hlbiBgb25TdGF0ZUNoYW5nZWAgZGV0ZXJtaW5lcyBpdFxuICAgICAgICAvLyBuZWVkcyB0byBub3RpZnkgbmVzdGVkIHN1YnMuIE9uY2UgY2FsbGVkLCBpdCB1bmltcGxlbWVudHMgaXRzZWxmIHVudGlsIGZ1cnRoZXIgc3RhdGVcbiAgICAgICAgLy8gY2hhbmdlcyBvY2N1ci4gRG9pbmcgaXQgdGhpcyB3YXkgdnMgaGF2aW5nIGEgcGVybWFuZW50IGBjb21wb25lbnREaWRVcGRhdGVgIHRoYXQgZG9lc1xuICAgICAgICAvLyBhIGJvb2xlYW4gY2hlY2sgZXZlcnkgdGltZSBhdm9pZHMgYW4gZXh0cmEgbWV0aG9kIGNhbGwgbW9zdCBvZiB0aGUgdGltZSwgcmVzdWx0aW5nXG4gICAgICAgIC8vIGluIHNvbWUgcGVyZiBib29zdC5cbiAgICAgICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMubm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgfTtcblxuICAgICAgQ29ubmVjdC5wcm90b3R5cGUuaXNTdWJzY3JpYmVkID0gZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbih0aGlzLnN1YnNjcmlwdGlvbikgJiYgdGhpcy5zdWJzY3JpcHRpb24uaXNTdWJzY3JpYmVkKCk7XG4gICAgICB9O1xuXG4gICAgICBDb25uZWN0LnByb3RvdHlwZS5hZGRFeHRyYVByb3BzID0gZnVuY3Rpb24gYWRkRXh0cmFQcm9wcyhwcm9wcykge1xuICAgICAgICBpZiAoIXdpdGhSZWYgJiYgIXJlbmRlckNvdW50UHJvcCAmJiAhKHRoaXMucHJvcHNNb2RlICYmIHRoaXMuc3Vic2NyaXB0aW9uKSkgcmV0dXJuIHByb3BzO1xuICAgICAgICAvLyBtYWtlIGEgc2hhbGxvdyBjb3B5IHNvIHRoYXQgZmllbGRzIGFkZGVkIGRvbid0IGxlYWsgdG8gdGhlIG9yaWdpbmFsIHNlbGVjdG9yLlxuICAgICAgICAvLyB0aGlzIGlzIGVzcGVjaWFsbHkgaW1wb3J0YW50IGZvciAncmVmJyBzaW5jZSB0aGF0J3MgYSByZWZlcmVuY2UgYmFjayB0byB0aGUgY29tcG9uZW50XG4gICAgICAgIC8vIGluc3RhbmNlLiBhIHNpbmdsZXRvbiBtZW1vaXplZCBzZWxlY3RvciB3b3VsZCB0aGVuIGJlIGhvbGRpbmcgYSByZWZlcmVuY2UgdG8gdGhlXG4gICAgICAgIC8vIGluc3RhbmNlLCBwcmV2ZW50aW5nIHRoZSBpbnN0YW5jZSBmcm9tIGJlaW5nIGdhcmJhZ2UgY29sbGVjdGVkLCBhbmQgdGhhdCB3b3VsZCBiZSBiYWRcbiAgICAgICAgdmFyIHdpdGhFeHRyYXMgPSBfZXh0ZW5kcyh7fSwgcHJvcHMpO1xuICAgICAgICBpZiAod2l0aFJlZikgd2l0aEV4dHJhcy5yZWYgPSB0aGlzLnNldFdyYXBwZWRJbnN0YW5jZTtcbiAgICAgICAgaWYgKHJlbmRlckNvdW50UHJvcCkgd2l0aEV4dHJhc1tyZW5kZXJDb3VudFByb3BdID0gdGhpcy5yZW5kZXJDb3VudCsrO1xuICAgICAgICBpZiAodGhpcy5wcm9wc01vZGUgJiYgdGhpcy5zdWJzY3JpcHRpb24pIHdpdGhFeHRyYXNbc3Vic2NyaXB0aW9uS2V5XSA9IHRoaXMuc3Vic2NyaXB0aW9uO1xuICAgICAgICByZXR1cm4gd2l0aEV4dHJhcztcbiAgICAgIH07XG5cbiAgICAgIENvbm5lY3QucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHNlbGVjdG9yID0gdGhpcy5zZWxlY3RvcjtcbiAgICAgICAgc2VsZWN0b3Iuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yLmVycm9yKSB7XG4gICAgICAgICAgdGhyb3cgc2VsZWN0b3IuZXJyb3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgdGhpcy5hZGRFeHRyYVByb3BzKHNlbGVjdG9yLnByb3BzKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb25uZWN0O1xuICAgIH0oQ29tcG9uZW50KTtcblxuICAgIENvbm5lY3QuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgQ29ubmVjdC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIENvbm5lY3QuY2hpbGRDb250ZXh0VHlwZXMgPSBjaGlsZENvbnRleHRUeXBlcztcbiAgICBDb25uZWN0LmNvbnRleHRUeXBlcyA9IGNvbnRleHRUeXBlcztcbiAgICBDb25uZWN0LnByb3BUeXBlcyA9IGNvbnRleHRUeXBlcztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBDb25uZWN0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVwZGF0ZSgpIHtcbiAgICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgICAgLy8gV2UgYXJlIGhvdCByZWxvYWRpbmchXG4gICAgICAgIGlmICh0aGlzLnZlcnNpb24gIT09IHZlcnNpb24pIHtcbiAgICAgICAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICAgIHRoaXMuaW5pdFNlbGVjdG9yKCk7XG5cbiAgICAgICAgICAvLyBJZiBhbnkgY29ubmVjdGVkIGRlc2NlbmRhbnRzIGRvbid0IGhvdCByZWxvYWQgKGFuZCByZXN1YnNjcmliZSBpbiB0aGUgcHJvY2VzcyksIHRoZWlyXG4gICAgICAgICAgLy8gbGlzdGVuZXJzIHdpbGwgYmUgbG9zdCB3aGVuIHdlIHVuc3Vic2NyaWJlLiBVbmZvcnR1bmF0ZWx5LCBieSBjb3B5aW5nIG92ZXIgYWxsXG4gICAgICAgICAgLy8gbGlzdGVuZXJzLCB0aGlzIGRvZXMgbWVhbiB0aGF0IHRoZSBvbGQgdmVyc2lvbnMgb2YgY29ubmVjdGVkIGRlc2NlbmRhbnRzIHdpbGwgc3RpbGwgYmVcbiAgICAgICAgICAvLyBub3RpZmllZCBvZiBzdGF0ZSBjaGFuZ2VzOyBob3dldmVyLCB0aGVpciBvblN0YXRlQ2hhbmdlIGZ1bmN0aW9uIGlzIGEgbm8tb3Agc28gdGhpc1xuICAgICAgICAgIC8vIGlzbid0IGEgaHVnZSBkZWFsLlxuICAgICAgICAgIHZhciBvbGRMaXN0ZW5lcnMgPSBbXTtcblxuICAgICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgb2xkTGlzdGVuZXJzID0gdGhpcy5zdWJzY3JpcHRpb24ubGlzdGVuZXJzLmdldCgpO1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5pbml0U3Vic2NyaXB0aW9uKCk7XG4gICAgICAgICAgaWYgKHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcykge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG4gICAgICAgICAgICBvbGRMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMi5zdWJzY3JpcHRpb24ubGlzdGVuZXJzLnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGhvaXN0U3RhdGljcyhDb25uZWN0LCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9jb25uZWN0QWR2YW5jZWQuanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBpc1BsYWluT2JqZWN0IGZyb20gJ2xvZGFzaC1lcy9pc1BsYWluT2JqZWN0JztcbmltcG9ydCAkJG9ic2VydmFibGUgZnJvbSAnc3ltYm9sLW9ic2VydmFibGUnO1xuXG4vKipcbiAqIFRoZXNlIGFyZSBwcml2YXRlIGFjdGlvbiB0eXBlcyByZXNlcnZlZCBieSBSZWR1eC5cbiAqIEZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB5b3UgbXVzdCByZXR1cm4gdGhlIGN1cnJlbnQgc3RhdGUuXG4gKiBJZiB0aGUgY3VycmVudCBzdGF0ZSBpcyB1bmRlZmluZWQsIHlvdSBtdXN0IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS5cbiAqIERvIG5vdCByZWZlcmVuY2UgdGhlc2UgYWN0aW9uIHR5cGVzIGRpcmVjdGx5IGluIHlvdXIgY29kZS5cbiAqL1xuZXhwb3J0IHZhciBBY3Rpb25UeXBlcyA9IHtcbiAgSU5JVDogJ0BAcmVkdXgvSU5JVCdcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIFJlZHV4IHN0b3JlIHRoYXQgaG9sZHMgdGhlIHN0YXRlIHRyZWUuXG4gICAqIFRoZSBvbmx5IHdheSB0byBjaGFuZ2UgdGhlIGRhdGEgaW4gdGhlIHN0b3JlIGlzIHRvIGNhbGwgYGRpc3BhdGNoKClgIG9uIGl0LlxuICAgKlxuICAgKiBUaGVyZSBzaG91bGQgb25seSBiZSBhIHNpbmdsZSBzdG9yZSBpbiB5b3VyIGFwcC4gVG8gc3BlY2lmeSBob3cgZGlmZmVyZW50XG4gICAqIHBhcnRzIG9mIHRoZSBzdGF0ZSB0cmVlIHJlc3BvbmQgdG8gYWN0aW9ucywgeW91IG1heSBjb21iaW5lIHNldmVyYWwgcmVkdWNlcnNcbiAgICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWR1Y2VyIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBuZXh0IHN0YXRlIHRyZWUsIGdpdmVuXG4gICAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICAgKlxuICAgKiBAcGFyYW0ge2FueX0gW3ByZWxvYWRlZFN0YXRlXSBUaGUgaW5pdGlhbCBzdGF0ZS4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAgICogdG8gaHlkcmF0ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGFcbiAgICogcHJldmlvdXNseSBzZXJpYWxpemVkIHVzZXIgc2Vzc2lvbi5cbiAgICogSWYgeW91IHVzZSBgY29tYmluZVJlZHVjZXJzYCB0byBwcm9kdWNlIHRoZSByb290IHJlZHVjZXIgZnVuY3Rpb24sIHRoaXMgbXVzdCBiZVxuICAgKiBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgY29tYmluZVJlZHVjZXJzYCBrZXlzLlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbZW5oYW5jZXJdIFRoZSBzdG9yZSBlbmhhbmNlci4gWW91IG1heSBvcHRpb25hbGx5IHNwZWNpZnkgaXRcbiAgICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICAgKiB0aW1lIHRyYXZlbCwgcGVyc2lzdGVuY2UsIGV0Yy4gVGhlIG9ubHkgc3RvcmUgZW5oYW5jZXIgdGhhdCBzaGlwcyB3aXRoIFJlZHV4XG4gICAqIGlzIGBhcHBseU1pZGRsZXdhcmUoKWAuXG4gICAqXG4gICAqIEByZXR1cm5zIHtTdG9yZX0gQSBSZWR1eCBzdG9yZSB0aGF0IGxldHMgeW91IHJlYWQgdGhlIHN0YXRlLCBkaXNwYXRjaCBhY3Rpb25zXG4gICAqIGFuZCBzdWJzY3JpYmUgdG8gY2hhbmdlcy5cbiAgICovXG59O2V4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICB2YXIgX3JlZjI7XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZW5oYW5jZXIgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgICBwcmVsb2FkZWRTdGF0ZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaWYgKHR5cGVvZiBlbmhhbmNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgZW5oYW5jZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZW5oYW5jZXIoY3JlYXRlU3RvcmUpKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIHJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciBjdXJyZW50UmVkdWNlciA9IHJlZHVjZXI7XG4gIHZhciBjdXJyZW50U3RhdGUgPSBwcmVsb2FkZWRTdGF0ZTtcbiAgdmFyIGN1cnJlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgdmFyIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzO1xuICB2YXIgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKG5leHRMaXN0ZW5lcnMgPT09IGN1cnJlbnRMaXN0ZW5lcnMpIHtcbiAgICAgIG5leHRMaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzLnNsaWNlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuICBmdW5jdGlvbiBnZXRTdGF0ZSgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaGFuZ2UgbGlzdGVuZXIuIEl0IHdpbGwgYmUgY2FsbGVkIGFueSB0aW1lIGFuIGFjdGlvbiBpcyBkaXNwYXRjaGVkLFxuICAgKiBhbmQgc29tZSBwYXJ0IG9mIHRoZSBzdGF0ZSB0cmVlIG1heSBwb3RlbnRpYWxseSBoYXZlIGNoYW5nZWQuIFlvdSBtYXkgdGhlblxuICAgKiBjYWxsIGBnZXRTdGF0ZSgpYCB0byByZWFkIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgaW5zaWRlIHRoZSBjYWxsYmFjay5cbiAgICpcbiAgICogWW91IG1heSBjYWxsIGBkaXNwYXRjaCgpYCBmcm9tIGEgY2hhbmdlIGxpc3RlbmVyLCB3aXRoIHRoZSBmb2xsb3dpbmdcbiAgICogY2F2ZWF0czpcbiAgICpcbiAgICogMS4gVGhlIHN1YnNjcmlwdGlvbnMgYXJlIHNuYXBzaG90dGVkIGp1c3QgYmVmb3JlIGV2ZXJ5IGBkaXNwYXRjaCgpYCBjYWxsLlxuICAgKiBJZiB5b3Ugc3Vic2NyaWJlIG9yIHVuc3Vic2NyaWJlIHdoaWxlIHRoZSBsaXN0ZW5lcnMgYXJlIGJlaW5nIGludm9rZWQsIHRoaXNcbiAgICogd2lsbCBub3QgaGF2ZSBhbnkgZWZmZWN0IG9uIHRoZSBgZGlzcGF0Y2goKWAgdGhhdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3MuXG4gICAqIEhvd2V2ZXIsIHRoZSBuZXh0IGBkaXNwYXRjaCgpYCBjYWxsLCB3aGV0aGVyIG5lc3RlZCBvciBub3QsIHdpbGwgdXNlIGEgbW9yZVxuICAgKiByZWNlbnQgc25hcHNob3Qgb2YgdGhlIHN1YnNjcmlwdGlvbiBsaXN0LlxuICAgKlxuICAgKiAyLiBUaGUgbGlzdGVuZXIgc2hvdWxkIG5vdCBleHBlY3QgdG8gc2VlIGFsbCBzdGF0ZSBjaGFuZ2VzLCBhcyB0aGUgc3RhdGVcbiAgICogbWlnaHQgaGF2ZSBiZWVuIHVwZGF0ZWQgbXVsdGlwbGUgdGltZXMgZHVyaW5nIGEgbmVzdGVkIGBkaXNwYXRjaCgpYCBiZWZvcmVcbiAgICogdGhlIGxpc3RlbmVyIGlzIGNhbGxlZC4gSXQgaXMsIGhvd2V2ZXIsIGd1YXJhbnRlZWQgdGhhdCBhbGwgc3Vic2NyaWJlcnNcbiAgICogcmVnaXN0ZXJlZCBiZWZvcmUgdGhlIGBkaXNwYXRjaCgpYCBzdGFydGVkIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGxhdGVzdFxuICAgKiBzdGF0ZSBieSB0aGUgdGltZSBpdCBleGl0cy5cbiAgICpcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgQSBjYWxsYmFjayB0byBiZSBpbnZva2VkIG9uIGV2ZXJ5IGRpc3BhdGNoLlxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdG8gcmVtb3ZlIHRoaXMgY2hhbmdlIGxpc3RlbmVyLlxuICAgKi9cbiAgZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuXG4gICAgZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpO1xuICAgIG5leHRMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICBpZiAoIWlzU3Vic2NyaWJlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuXG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBhY3Rpb24uIEl0IGlzIHRoZSBvbmx5IHdheSB0byB0cmlnZ2VyIGEgc3RhdGUgY2hhbmdlLlxuICAgKlxuICAgKiBUaGUgYHJlZHVjZXJgIGZ1bmN0aW9uLCB1c2VkIHRvIGNyZWF0ZSB0aGUgc3RvcmUsIHdpbGwgYmUgY2FsbGVkIHdpdGggdGhlXG4gICAqIGN1cnJlbnQgc3RhdGUgdHJlZSBhbmQgdGhlIGdpdmVuIGBhY3Rpb25gLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAgICogYmUgY29uc2lkZXJlZCB0aGUgKipuZXh0Kiogc3RhdGUgb2YgdGhlIHRyZWUsIGFuZCB0aGUgY2hhbmdlIGxpc3RlbmVyc1xuICAgKiB3aWxsIGJlIG5vdGlmaWVkLlxuICAgKlxuICAgKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvbmx5IHN1cHBvcnRzIHBsYWluIG9iamVjdCBhY3Rpb25zLiBJZiB5b3Ugd2FudCB0b1xuICAgKiBkaXNwYXRjaCBhIFByb21pc2UsIGFuIE9ic2VydmFibGUsIGEgdGh1bmssIG9yIHNvbWV0aGluZyBlbHNlLCB5b3UgbmVlZCB0b1xuICAgKiB3cmFwIHlvdXIgc3RvcmUgY3JlYXRpbmcgZnVuY3Rpb24gaW50byB0aGUgY29ycmVzcG9uZGluZyBtaWRkbGV3YXJlLiBGb3JcbiAgICogZXhhbXBsZSwgc2VlIHRoZSBkb2N1bWVudGF0aW9uIGZvciB0aGUgYHJlZHV4LXRodW5rYCBwYWNrYWdlLiBFdmVuIHRoZVxuICAgKiBtaWRkbGV3YXJlIHdpbGwgZXZlbnR1YWxseSBkaXNwYXRjaCBwbGFpbiBvYmplY3QgYWN0aW9ucyB1c2luZyB0aGlzIG1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IGFjdGlvbiBBIHBsYWluIG9iamVjdCByZXByZXNlbnRpbmcg4oCcd2hhdCBjaGFuZ2Vk4oCdLiBJdCBpc1xuICAgKiBhIGdvb2QgaWRlYSB0byBrZWVwIGFjdGlvbnMgc2VyaWFsaXphYmxlIHNvIHlvdSBjYW4gcmVjb3JkIGFuZCByZXBsYXkgdXNlclxuICAgKiBzZXNzaW9ucywgb3IgdXNlIHRoZSB0aW1lIHRyYXZlbGxpbmcgYHJlZHV4LWRldnRvb2xzYC4gQW4gYWN0aW9uIG11c3QgaGF2ZVxuICAgKiBhIGB0eXBlYCBwcm9wZXJ0eSB3aGljaCBtYXkgbm90IGJlIGB1bmRlZmluZWRgLiBJdCBpcyBhIGdvb2QgaWRlYSB0byB1c2VcbiAgICogc3RyaW5nIGNvbnN0YW50cyBmb3IgYWN0aW9uIHR5cGVzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBGb3IgY29udmVuaWVuY2UsIHRoZSBzYW1lIGFjdGlvbiBvYmplY3QgeW91IGRpc3BhdGNoZWQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCwgaWYgeW91IHVzZSBhIGN1c3RvbSBtaWRkbGV3YXJlLCBpdCBtYXkgd3JhcCBgZGlzcGF0Y2goKWAgdG9cbiAgICogcmV0dXJuIHNvbWV0aGluZyBlbHNlIChmb3IgZXhhbXBsZSwgYSBQcm9taXNlIHlvdSBjYW4gYXdhaXQpLlxuICAgKi9cbiAgZnVuY3Rpb24gZGlzcGF0Y2goYWN0aW9uKSB7XG4gICAgaWYgKCFpc1BsYWluT2JqZWN0KGFjdGlvbikpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtdXN0IGJlIHBsYWluIG9iamVjdHMuICcgKyAnVXNlIGN1c3RvbSBtaWRkbGV3YXJlIGZvciBhc3luYyBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYWN0aW9uLnR5cGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FjdGlvbnMgbWF5IG5vdCBoYXZlIGFuIHVuZGVmaW5lZCBcInR5cGVcIiBwcm9wZXJ0eS4gJyArICdIYXZlIHlvdSBtaXNzcGVsbGVkIGEgY29uc3RhbnQ/Jyk7XG4gICAgfVxuXG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlcnMgbWF5IG5vdCBkaXNwYXRjaCBhY3Rpb25zLicpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gdHJ1ZTtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IGN1cnJlbnRSZWR1Y2VyKGN1cnJlbnRTdGF0ZSwgYWN0aW9uKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaXNEaXNwYXRjaGluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSBjdXJyZW50TGlzdGVuZXJzID0gbmV4dExpc3RlbmVycztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgICAgbGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VzIHRoZSByZWR1Y2VyIGN1cnJlbnRseSB1c2VkIGJ5IHRoZSBzdG9yZSB0byBjYWxjdWxhdGUgdGhlIHN0YXRlLlxuICAgKlxuICAgKiBZb3UgbWlnaHQgbmVlZCB0aGlzIGlmIHlvdXIgYXBwIGltcGxlbWVudHMgY29kZSBzcGxpdHRpbmcgYW5kIHlvdSB3YW50IHRvXG4gICAqIGxvYWQgc29tZSBvZiB0aGUgcmVkdWNlcnMgZHluYW1pY2FsbHkuIFlvdSBtaWdodCBhbHNvIG5lZWQgdGhpcyBpZiB5b3VcbiAgICogaW1wbGVtZW50IGEgaG90IHJlbG9hZGluZyBtZWNoYW5pc20gZm9yIFJlZHV4LlxuICAgKlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBuZXh0UmVkdWNlciBUaGUgcmVkdWNlciBmb3IgdGhlIHN0b3JlIHRvIHVzZSBpbnN0ZWFkLlxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyO1xuICAgIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG4gIGZ1bmN0aW9uIG9ic2VydmFibGUoKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgb3V0ZXJTdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgcmV0dXJuIF9yZWYgPSB7XG4gICAgICAvKipcbiAgICAgICAqIFRoZSBtaW5pbWFsIG9ic2VydmFibGUgc3Vic2NyaXB0aW9uIG1ldGhvZC5cbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvYnNlcnZlciBBbnkgb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgYXMgYW4gb2JzZXJ2ZXIuXG4gICAgICAgKiBUaGUgb2JzZXJ2ZXIgb2JqZWN0IHNob3VsZCBoYXZlIGEgYG5leHRgIG1ldGhvZC5cbiAgICAgICAqIEByZXR1cm5zIHtzdWJzY3JpcHRpb259IEFuIG9iamVjdCB3aXRoIGFuIGB1bnN1YnNjcmliZWAgbWV0aG9kIHRoYXQgY2FuXG4gICAgICAgKiBiZSB1c2VkIHRvIHVuc3Vic2NyaWJlIHRoZSBvYnNlcnZhYmxlIGZyb20gdGhlIHN0b3JlLCBhbmQgcHJldmVudCBmdXJ0aGVyXG4gICAgICAgKiBlbWlzc2lvbiBvZiB2YWx1ZXMgZnJvbSB0aGUgb2JzZXJ2YWJsZS5cbiAgICAgICAqL1xuICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiBzdWJzY3JpYmUob2JzZXJ2ZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBvYnNlcnZlciAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCB0aGUgb2JzZXJ2ZXIgdG8gYmUgYW4gb2JqZWN0LicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gb2JzZXJ2ZVN0YXRlKCkge1xuICAgICAgICAgIGlmIChvYnNlcnZlci5uZXh0KSB7XG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0KGdldFN0YXRlKCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG9ic2VydmVTdGF0ZSgpO1xuICAgICAgICB2YXIgdW5zdWJzY3JpYmUgPSBvdXRlclN1YnNjcmliZShvYnNlcnZlU3RhdGUpO1xuICAgICAgICByZXR1cm4geyB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmUgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9XG5cbiAgLy8gV2hlbiBhIHN0b3JlIGlzIGNyZWF0ZWQsIGFuIFwiSU5JVFwiIGFjdGlvbiBpcyBkaXNwYXRjaGVkIHNvIHRoYXQgZXZlcnlcbiAgLy8gcmVkdWNlciByZXR1cm5zIHRoZWlyIGluaXRpYWwgc3RhdGUuIFRoaXMgZWZmZWN0aXZlbHkgcG9wdWxhdGVzXG4gIC8vIHRoZSBpbml0aWFsIHN0YXRlIHRyZWUuXG4gIGRpc3BhdGNoKHsgdHlwZTogQWN0aW9uVHlwZXMuSU5JVCB9KTtcblxuICByZXR1cm4gX3JlZjIgPSB7XG4gICAgZGlzcGF0Y2g6IGRpc3BhdGNoLFxuICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICByZXBsYWNlUmVkdWNlcjogcmVwbGFjZVJlZHVjZXJcbiAgfSwgX3JlZjJbJCRvYnNlcnZhYmxlXSA9IG9ic2VydmFibGUsIF9yZWYyO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9jcmVhdGVTdG9yZS5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHJvb3QgZnJvbSAnLi9fcm9vdC5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5leHBvcnQgZGVmYXVsdCBTeW1ib2w7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19TeW1ib2wuanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcztcclxufSkoKTtcclxuXHJcbnRyeSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXHJcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLGV2YWwpKFwidGhpc1wiKTtcclxufSBjYXRjaChlKSB7XHJcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcclxuXHRpZih0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKVxyXG5cdFx0ZyA9IHdpbmRvdztcclxufVxyXG5cclxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxyXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xyXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGc7XHJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2J1aWxkaW4vZ2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIFByaW50cyBhIHdhcm5pbmcgaW4gdGhlIGNvbnNvbGUgaWYgaXQgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2FybmluZyhtZXNzYWdlKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSBuby1jb25zb2xlICovXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbiAgfSBjYXRjaCAoZSkge31cbiAgLyogZXNsaW50LWVuYWJsZSBuby1lbXB0eSAqL1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy91dGlscy93YXJuaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvbXBvc2VzIHNpbmdsZS1hcmd1bWVudCBmdW5jdGlvbnMgZnJvbSByaWdodCB0byBsZWZ0LiBUaGUgcmlnaHRtb3N0XG4gKiBmdW5jdGlvbiBjYW4gdGFrZSBtdWx0aXBsZSBhcmd1bWVudHMgYXMgaXQgcHJvdmlkZXMgdGhlIHNpZ25hdHVyZSBmb3JcbiAqIHRoZSByZXN1bHRpbmcgY29tcG9zaXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGZ1bmNzIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiBvYnRhaW5lZCBieSBjb21wb3NpbmcgdGhlIGFyZ3VtZW50IGZ1bmN0aW9uc1xuICogZnJvbSByaWdodCB0byBsZWZ0LiBGb3IgZXhhbXBsZSwgY29tcG9zZShmLCBnLCBoKSBpcyBpZGVudGljYWwgdG8gZG9pbmdcbiAqICguLi5hcmdzKSA9PiBmKGcoaCguLi5hcmdzKSkpLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBmdW5jcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGZ1bmNzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGZ1bmNzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICByZXR1cm4gYXJnO1xuICAgIH07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGZ1bmNzWzBdO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZShmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYShiLmFwcGx5KHVuZGVmaW5lZCwgYXJndW1lbnRzKSk7XG4gICAgfTtcbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL2NvbXBvc2UuanNcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB2ZXJpZnlQbGFpbk9iamVjdCBmcm9tICcuLi91dGlscy92ZXJpZnlQbGFpbk9iamVjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGdldENvbnN0YW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0Q29uc3RhbnRTZWxlY3RvcihkaXNwYXRjaCwgb3B0aW9ucykge1xuICAgIHZhciBjb25zdGFudCA9IGdldENvbnN0YW50KGRpc3BhdGNoLCBvcHRpb25zKTtcblxuICAgIGZ1bmN0aW9uIGNvbnN0YW50U2VsZWN0b3IoKSB7XG4gICAgICByZXR1cm4gY29uc3RhbnQ7XG4gICAgfVxuICAgIGNvbnN0YW50U2VsZWN0b3IuZGVwZW5kc09uT3duUHJvcHMgPSBmYWxzZTtcbiAgICByZXR1cm4gY29uc3RhbnRTZWxlY3RvcjtcbiAgfTtcbn1cblxuLy8gZGVwZW5kc09uT3duUHJvcHMgaXMgdXNlZCBieSBjcmVhdGVNYXBUb1Byb3BzUHJveHkgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdG8gcGFzcyBwcm9wcyBhcyBhcmdzXG4vLyB0byB0aGUgbWFwVG9Qcm9wcyBmdW5jdGlvbiBiZWluZyB3cmFwcGVkLiBJdCBpcyBhbHNvIHVzZWQgYnkgbWFrZVB1cmVQcm9wc1NlbGVjdG9yIHRvIGRldGVybWluZVxuLy8gd2hldGhlciBtYXBUb1Byb3BzIG5lZWRzIHRvIGJlIGludm9rZWQgd2hlbiBwcm9wcyBoYXZlIGNoYW5nZWQuXG4vLyBcbi8vIEEgbGVuZ3RoIG9mIG9uZSBzaWduYWxzIHRoYXQgbWFwVG9Qcm9wcyBkb2VzIG5vdCBkZXBlbmQgb24gcHJvcHMgZnJvbSB0aGUgcGFyZW50IGNvbXBvbmVudC5cbi8vIEEgbGVuZ3RoIG9mIHplcm8gaXMgYXNzdW1lZCB0byBtZWFuIG1hcFRvUHJvcHMgaXMgZ2V0dGluZyBhcmdzIHZpYSBhcmd1bWVudHMgb3IgLi4uYXJncyBhbmRcbi8vIHRoZXJlZm9yZSBub3QgcmVwb3J0aW5nIGl0cyBsZW5ndGggYWNjdXJhdGVseS4uXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVwZW5kc09uT3duUHJvcHMobWFwVG9Qcm9wcykge1xuICByZXR1cm4gbWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcyAhPT0gbnVsbCAmJiBtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzICE9PSB1bmRlZmluZWQgPyBCb29sZWFuKG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIDogbWFwVG9Qcm9wcy5sZW5ndGggIT09IDE7XG59XG5cbi8vIFVzZWQgYnkgd2hlbk1hcFN0YXRlVG9Qcm9wc0lzRnVuY3Rpb24gYW5kIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc0Z1bmN0aW9uLFxuLy8gdGhpcyBmdW5jdGlvbiB3cmFwcyBtYXBUb1Byb3BzIGluIGEgcHJveHkgZnVuY3Rpb24gd2hpY2ggZG9lcyBzZXZlcmFsIHRoaW5nczpcbi8vIFxuLy8gICogRGV0ZWN0cyB3aGV0aGVyIHRoZSBtYXBUb1Byb3BzIGZ1bmN0aW9uIGJlaW5nIGNhbGxlZCBkZXBlbmRzIG9uIHByb3BzLCB3aGljaFxuLy8gICAgaXMgdXNlZCBieSBzZWxlY3RvckZhY3RvcnkgdG8gZGVjaWRlIGlmIGl0IHNob3VsZCByZWludm9rZSBvbiBwcm9wcyBjaGFuZ2VzLlxuLy8gICAgXG4vLyAgKiBPbiBmaXJzdCBjYWxsLCBoYW5kbGVzIG1hcFRvUHJvcHMgaWYgcmV0dXJucyBhbm90aGVyIGZ1bmN0aW9uLCBhbmQgdHJlYXRzIHRoYXRcbi8vICAgIG5ldyBmdW5jdGlvbiBhcyB0aGUgdHJ1ZSBtYXBUb1Byb3BzIGZvciBzdWJzZXF1ZW50IGNhbGxzLlxuLy8gICAgXG4vLyAgKiBPbiBmaXJzdCBjYWxsLCB2ZXJpZmllcyB0aGUgZmlyc3QgcmVzdWx0IGlzIGEgcGxhaW4gb2JqZWN0LCBpbiBvcmRlciB0byB3YXJuXG4vLyAgICB0aGUgZGV2ZWxvcGVyIHRoYXQgdGhlaXIgbWFwVG9Qcm9wcyBmdW5jdGlvbiBpcyBub3QgcmV0dXJuaW5nIGEgdmFsaWQgcmVzdWx0LlxuLy8gICAgXG5leHBvcnQgZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcFRvUHJvcHMsIG1ldGhvZE5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGluaXRQcm94eVNlbGVjdG9yKGRpc3BhdGNoLCBfcmVmKSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gX3JlZi5kaXNwbGF5TmFtZTtcblxuICAgIHZhciBwcm94eSA9IGZ1bmN0aW9uIG1hcFRvUHJvcHNQcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKSB7XG4gICAgICByZXR1cm4gcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPyBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIDogcHJveHkubWFwVG9Qcm9wcyhzdGF0ZU9yRGlzcGF0Y2gpO1xuICAgIH07XG5cbiAgICAvLyBhbGxvdyBkZXRlY3RGYWN0b3J5QW5kVmVyaWZ5IHRvIGdldCBvd25Qcm9wc1xuICAgIHByb3h5LmRlcGVuZHNPbk93blByb3BzID0gdHJ1ZTtcblxuICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBmdW5jdGlvbiBkZXRlY3RGYWN0b3J5QW5kVmVyaWZ5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBtYXBUb1Byb3BzO1xuICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhtYXBUb1Byb3BzKTtcbiAgICAgIHZhciBwcm9wcyA9IHByb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpO1xuXG4gICAgICBpZiAodHlwZW9mIHByb3BzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByb3h5Lm1hcFRvUHJvcHMgPSBwcm9wcztcbiAgICAgICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSBnZXREZXBlbmRzT25Pd25Qcm9wcyhwcm9wcyk7XG4gICAgICAgIHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB2ZXJpZnlQbGFpbk9iamVjdChwcm9wcywgZGlzcGxheU5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcblxuICAgIHJldHVybiBwcm94eTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC93cmFwTWFwVG9Qcm9wcy5qc1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi93YXJuaW5nJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5UGxhaW5PYmplY3QodmFsdWUsIGRpc3BsYXlOYW1lLCBtZXRob2ROYW1lKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICB3YXJuaW5nKG1ldGhvZE5hbWUgKyAnKCkgaW4gJyArIGRpc3BsYXlOYW1lICsgJyBtdXN0IHJldHVybiBhIHBsYWluIG9iamVjdC4gSW5zdGVhZCByZWNlaXZlZCAnICsgdmFsdWUgKyAnLicpO1xuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLnNjc3MnO1xuXG5mdW5jdGlvbiBJbnB1dFRleHQocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHZhbHVlLFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIG9uQ2hhbmdlLFxuICB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGlucHV0XG4gICAgICB0eXBlPVwidGV4dFwiXG4gICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICBjbGFzc05hbWU9e3N0eWxlLmlucHV0VGV4dH1cbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAvPlxuICApO1xufVxuXG5JbnB1dFRleHQucHJvcFR5cGVzID0ge1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbklucHV0VGV4dC5kZWZhdWx0UHJvcHMgPSB7XG4gIHZhbHVlOiAnJyxcbiAgcGxhY2Vob2xkZXI6ICdbKnBsYWNlaG9sZGVyKl0nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRUZXh0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2NvbW1vbi9JbnB1dFRleHQvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgYXV0b0JpbmQgZnJvbSAncmVhY3QtYXV0b2JpbmQnO1xuaW1wb3J0IEFkZFByb2plY3RWYWNhbmN5IGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL0FkZFByb2plY3RWYWNhbmN5JztcbmltcG9ydCBEaWFsb2dXaW5kb3cgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vRGlhbG9nV2luZG93JztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL01vZGFsJztcblxuY2xhc3MgQWRkUHJvamVjdFZhY2FuY3lDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICBhdXRvQmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnLFxuICAgIH07XG4gIH1cblxuICBvbkNoYW5nZShlKSB7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICB2YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IG9uU3VibWl0IH0gPSB0aGlzLnByb3BzO1xuICAgIG9uU3VibWl0KHZhbHVlKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9uQ2xvc2UsIHRpdGxlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8TW9kYWw+XG4gICAgICAgIDxEaWFsb2dXaW5kb3dcbiAgICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxBZGRQcm9qZWN0VmFjYW5jeVxuICAgICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9XG4gICAgICAgICAgICBvbkNoYW5nZU5hbWU9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aXRsZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0RpYWxvZ1dpbmRvdz5cbiAgICAgIDwvTW9kYWw+XG4gICAgKTtcbiAgfVxufVxuXG5BZGRQcm9qZWN0VmFjYW5jeUNvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbkFkZFByb2plY3RWYWNhbmN5Q29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRQcm9qZWN0VmFjYW5jeUNvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29udGFpbmVycy9BZGRQcm9qZWN0VmFjYW5jeUNvbnRhaW5lci5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCdXR0b25DbG9zZSBmcm9tICcuLi9CdXR0b25DbG9zZSc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5zY3NzJztcblxuZnVuY3Rpb24gRGlhbG9nV2luZG93KHByb3BzKSB7XG4gIGNvbnN0IHsgdGl0bGUsIGNoaWxkcmVuLCBvbkNsb3NlIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3N0eWxlLmRpYWxvZ1dpbmRvd30+XG4gICAgICA8aGVhZGVyPlxuICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkNsb3NlfVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XG4gICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGFiSW5kZXg9XCIwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25DbG9zZSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhyfSAvPlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbkRpYWxvZ1dpbmRvdy5wcm9wVHlwZXMgPSB7XG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgXSksXG59O1xuRGlhbG9nV2luZG93LmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6ICdbKnRpdGxlKl0nLFxuICBjaGlsZHJlbjogJ1sqY2hpbGRyZW4qXScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEaWFsb2dXaW5kb3c7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvY29tbW9uL0RpYWxvZ1dpbmRvdy9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGF1dG9CaW5kIGZyb20gJ3JlYWN0LWF1dG9iaW5kJztcblxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5jbGFzcyBNb2RhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIGF1dG9CaW5kKHRoaXMpO1xuICAgIHRoaXMubW9kYWxSb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLXJvb3QnKTtcbiAgICB0aGlzLmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGhpcy5lbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3cnKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMubW9kYWxSb290LmFwcGVuZENoaWxkKHRoaXMuZWwpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5tb2RhbFJvb3QucmVtb3ZlQ2hpbGQodGhpcy5lbCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0RE9NLmNyZWF0ZVBvcnRhbChcbiAgICAgIHRoaXMucHJvcHMuY2hpbGRyZW4sXG4gICAgICB0aGlzLmVsLFxuICAgICk7XG4gIH1cbn1cblxuTW9kYWwucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQsXG59O1xuTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICBjaGlsZHJlbjogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvTW9kYWwvaW5kZXguanN4IiwiZXhwb3J0IGNvbnN0IGlzT2JqZWN0ID0gZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBPYmplY3Q7XG59O1xuXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBBcnJheTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0Zsb2F0ID0gZnVuY3Rpb24gaXNGbG9hdChvYmopIHtcbiAgcmV0dXJuIFN0cmluZyhwYXJzZUZsb2F0KG9iaiwgMTApKSA9PT0gU3RyaW5nKG9iaik7XG59O1xuXG5leHBvcnQgY29uc3QgaXNJbnRlZ2VyID0gZnVuY3Rpb24gaXNJbnRlZ2VyKG9iaikge1xuICByZXR1cm4gU3RyaW5nKHBhcnNlSW50KG9iaiwgMTApKSA9PT0gU3RyaW5nKG9iaik7XG59O1xuXG5leHBvcnQgY29uc3QgaXNFbXB0eSA9IGZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XG4gIGlmIChvYmogPT09IG51bGwgfHwgb2JqID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChvYmogJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBBcnJheSkge1xuICAgIHJldHVybiBvYmoubGVuZ3RoID09PSAwO1xuICB9IGVsc2UgaWYgKG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouY29uc3RydWN0b3IgPT09IE9iamVjdCkge1xuICAgIHJldHVybiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMob2JqKS5sZW5ndGggPT09IDApO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdzdHJpbmcnIHx8ICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmouY29uc3RydWN0b3IgPT09IFN0cmluZykpIHtcbiAgICByZXR1cm4gb2JqLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIC8qaXNOdW1iZXIqL1xuICBlbHNlIGlmIChTdHJpbmcocGFyc2VGbG9hdChvYmosIDEwKSkgPT09IFN0cmluZyhvYmopKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gMDtcbiAgfSBlbHNlIGlmICghb2JqKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZyA9IGZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PSAnc3RyaW5nJyB8fCAodHlwZW9mIG9iaiA9PSAnb2JqZWN0JyAmJiBvYmouY29uc3RydWN0b3IgPT09IFN0cmluZyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy91dGlscy9jaGVjay5qcyIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuc2Nzcyc7XG5cbmZ1bmN0aW9uIFNlYXJjaEljb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB2aWV3Qm94PVwiMCAwIDIwIDIwXCJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGUuY2hlY2tJY29ufVxuICAgID5cbiAgICAgIDxwYXRoIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgICA8cGF0aCBkPVwiTTkgMTYuMTdMNC44MyAxMmwtMS40MiAxLjQxTDkgMTkgMjEgN2wtMS40MS0xLjQxelwiLz5cbiAgICA8L3N2Zz5cbiAgKTtcbn1cblxuU2VhcmNoSWNvbi5wcm9wVHlwZXMgPSB7fTtcblNlYXJjaEljb24uZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXJjaEljb247XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvY29tbW9uL0NrZWNrSWNvbi9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IEdyZXkgZnJvbSAnLi4vQnV0dG9uT3V0bGluZS9HcmV5JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uT3V0bGluZS9CdXR0b24nO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuc2Nzcyc7XG5cbmZ1bmN0aW9uIFNpZGVCdXR0b25zKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBvbkNsaWNrLFxuICAgIG9uRGVsZXRlLFxuICAgIGNoaWxkcmVuLFxuICAgIGlzQ2xvc2VkLFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IGNscyA9IGlzQ2xvc2VkID8gJ2dyZWVuJyA6ICdncmF5JztcbiAgcmV0dXJuIChcbiAgICA8YXNpZGUgY2xhc3NOYW1lPXtzdHlsZS5idXR0b25TZXR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbkNsaWNrfT5cbiAgICAgICAgPEdyZXkgb25DbGljaz17b25DbGlja30+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0dyZXk+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtbc3R5bGUuYnV0dG9uRGVsZXRlLCBjbHNdLmpvaW4oJyAnKX0+XG4gICAgICAgIDxCdXR0b24gb25DbGljaz17b25EZWxldGV9PlxuICAgICAgICAgINCj0LTQsNC70LjRgtGMXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9hc2lkZT5cbiAgKTtcbn1cblxuU2lkZUJ1dHRvbnMucHJvcFR5cGVzID0ge1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkRlbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaXNDbG9zZWQ6IFByb3BUeXBlcy5ib29sLFxufTtcblNpZGVCdXR0b25zLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNDbG9zZWQ6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZUJ1dHRvbnM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvY29tbW9uL1NpZGVCdXR0b25zL2luZGV4LmpzeCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJ1dHRvbkZ1bGwgZnJvbSAnLi4vQnV0dG9uRnVsbCc7XG5pbXBvcnQgRGlhbG9nV2luZG93IGZyb20gJy4uL0RpYWxvZ1dpbmRvdyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vTW9kYWwnO1xuXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5zY3NzJztcblxuZnVuY3Rpb24gRGVsZXRlUHJvamVjdFZhY2FuY3kocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIG9uU3VibWl0LFxuICAgIG9uQ2xvc2UsXG4gICAgbmFtZSxcbiAgICB0aXRsZSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgIHR5cGUsXG4gIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8TW9kYWw+XG4gICAgICA8RGlhbG9nV2luZG93XG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgID5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYnV0dG9ufT5cbiAgICAgICAgICAgIDxCdXR0b25GdWxsXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uU3VibWl0fVxuICAgICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgIDwvQnV0dG9uRnVsbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9EaWFsb2dXaW5kb3c+XG4gICAgPC9Nb2RhbD5cblxuXG4gICk7XG59XG5cbkRlbGV0ZVByb2plY3RWYWNhbmN5LnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5EZWxldGVQcm9qZWN0VmFjYW5jeS5kZWZhdWx0UHJvcHMgPSB7XG4gIHR5cGU6ICdzdWJtaXQnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlUHJvamVjdFZhY2FuY3k7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvY29tbW9uL0RlbGV0ZVByb2plY3RWYWNhbmN5L2luZGV4LmpzeCIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1maWxlbmFtZS1leHRlbnNpb24gKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XG5pbXBvcnQgQXBwQ29udGFpbmVyIGZyb20gJy4vY29udGFpbmVycy9BcHBDb250YWluZXInO1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG5cbnJlbmRlcihcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEFwcENvbnRhaW5lciAvPlxuICA8L1Byb3ZpZGVyPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSxcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHN0b3JlU2hhcGUsIHN1YnNjcmlwdGlvblNoYXBlIH0gZnJvbSAnLi4vdXRpbHMvUHJvcFR5cGVzJztcbmltcG9ydCB3YXJuaW5nIGZyb20gJy4uL3V0aWxzL3dhcm5pbmcnO1xuXG52YXIgZGlkV2FybkFib3V0UmVjZWl2aW5nU3RvcmUgPSBmYWxzZTtcbmZ1bmN0aW9uIHdhcm5BYm91dFJlY2VpdmluZ1N0b3JlKCkge1xuICBpZiAoZGlkV2FybkFib3V0UmVjZWl2aW5nU3RvcmUpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZGlkV2FybkFib3V0UmVjZWl2aW5nU3RvcmUgPSB0cnVlO1xuXG4gIHdhcm5pbmcoJzxQcm92aWRlcj4gZG9lcyBub3Qgc3VwcG9ydCBjaGFuZ2luZyBgc3RvcmVgIG9uIHRoZSBmbHkuICcgKyAnSXQgaXMgbW9zdCBsaWtlbHkgdGhhdCB5b3Ugc2VlIHRoaXMgZXJyb3IgYmVjYXVzZSB5b3UgdXBkYXRlZCB0byAnICsgJ1JlZHV4IDIueCBhbmQgUmVhY3QgUmVkdXggMi54IHdoaWNoIG5vIGxvbmdlciBob3QgcmVsb2FkIHJlZHVjZXJzICcgKyAnYXV0b21hdGljYWxseS4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXJlZHV4L3JlbGVhc2VzLycgKyAndGFnL3YyLjAuMCBmb3IgdGhlIG1pZ3JhdGlvbiBpbnN0cnVjdGlvbnMuJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm92aWRlcigpIHtcbiAgdmFyIF9Qcm92aWRlciRjaGlsZENvbnRleDtcblxuICB2YXIgc3RvcmVLZXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6ICdzdG9yZSc7XG4gIHZhciBzdWJLZXkgPSBhcmd1bWVudHNbMV07XG5cbiAgdmFyIHN1YnNjcmlwdGlvbktleSA9IHN1YktleSB8fCBzdG9yZUtleSArICdTdWJzY3JpcHRpb24nO1xuXG4gIHZhciBQcm92aWRlciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFByb3ZpZGVyLCBfQ29tcG9uZW50KTtcblxuICAgIFByb3ZpZGVyLnByb3RvdHlwZS5nZXRDaGlsZENvbnRleHQgPSBmdW5jdGlvbiBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgICB2YXIgX3JlZjtcblxuICAgICAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltzdG9yZUtleV0gPSB0aGlzW3N0b3JlS2V5XSwgX3JlZltzdWJzY3JpcHRpb25LZXldID0gbnVsbCwgX3JlZjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gUHJvdmlkZXIocHJvcHMsIGNvbnRleHQpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQcm92aWRlcik7XG5cbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkpO1xuXG4gICAgICBfdGhpc1tzdG9yZUtleV0gPSBwcm9wcy5zdG9yZTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBQcm92aWRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIENoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbik7XG4gICAgfTtcblxuICAgIHJldHVybiBQcm92aWRlcjtcbiAgfShDb21wb25lbnQpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgUHJvdmlkZXIucHJvdG90eXBlLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiAobmV4dFByb3BzKSB7XG4gICAgICBpZiAodGhpc1tzdG9yZUtleV0gIT09IG5leHRQcm9wcy5zdG9yZSkge1xuICAgICAgICB3YXJuQWJvdXRSZWNlaXZpbmdTdG9yZSgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBQcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gICAgc3RvcmU6IHN0b3JlU2hhcGUuaXNSZXF1aXJlZCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZFxuICB9O1xuICBQcm92aWRlci5jaGlsZENvbnRleHRUeXBlcyA9IChfUHJvdmlkZXIkY2hpbGRDb250ZXggPSB7fSwgX1Byb3ZpZGVyJGNoaWxkQ29udGV4W3N0b3JlS2V5XSA9IHN0b3JlU2hhcGUuaXNSZXF1aXJlZCwgX1Byb3ZpZGVyJGNoaWxkQ29udGV4W3N1YnNjcmlwdGlvbktleV0gPSBzdWJzY3JpcHRpb25TaGFwZSwgX1Byb3ZpZGVyJGNoaWxkQ29udGV4KTtcblxuICByZXR1cm4gUHJvdmlkZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb3ZpZGVyKCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2NvbXBvbmVudHMvUHJvdmlkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbid1c2Ugc3RyaWN0JztcblxudmFyIFJFQUNUX1NUQVRJQ1MgPSB7XG4gICAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gICAgY29udGV4dFR5cGVzOiB0cnVlLFxuICAgIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgICBnZXREZWZhdWx0UHJvcHM6IHRydWUsXG4gICAgbWl4aW5zOiB0cnVlLFxuICAgIHByb3BUeXBlczogdHJ1ZSxcbiAgICB0eXBlOiB0cnVlXG59O1xuXG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZiAmJiBnZXRQcm90b3R5cGVPZihPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHsgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcblxuICAgICAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcbiAgICAgICAgICAgIGlmIChpbmhlcml0ZWRDb21wb25lbnQgJiYgaW5oZXJpdGVkQ29tcG9uZW50ICE9PSBvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgICAgICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgaWYgKCFSRUFDVF9TVEFUSUNTW2tleV0gJiYgIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAoIWJsYWNrbGlzdCB8fCAhYmxhY2tsaXN0W2tleV0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuICAgICAgICAgICAgICAgIHRyeSB7IC8vIEF2b2lkIGZhaWx1cmVzIGZyb20gcmVhZC1vbmx5IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKipcbiAqIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vLyBlbmNhcHN1bGF0ZXMgdGhlIHN1YnNjcmlwdGlvbiBsb2dpYyBmb3IgY29ubmVjdGluZyBhIGNvbXBvbmVudCB0byB0aGUgcmVkdXggc3RvcmUsIGFzXG4vLyB3ZWxsIGFzIG5lc3Rpbmcgc3Vic2NyaXB0aW9ucyBvZiBkZXNjZW5kYW50IGNvbXBvbmVudHMsIHNvIHRoYXQgd2UgY2FuIGVuc3VyZSB0aGVcbi8vIGFuY2VzdG9yIGNvbXBvbmVudHMgcmUtcmVuZGVyIGJlZm9yZSBkZXNjZW5kYW50c1xuXG52YXIgQ0xFQVJFRCA9IG51bGw7XG52YXIgbnVsbExpc3RlbmVycyA9IHtcbiAgbm90aWZ5OiBmdW5jdGlvbiBub3RpZnkoKSB7fVxufTtcblxuZnVuY3Rpb24gY3JlYXRlTGlzdGVuZXJDb2xsZWN0aW9uKCkge1xuICAvLyB0aGUgY3VycmVudC9uZXh0IHBhdHRlcm4gaXMgY29waWVkIGZyb20gcmVkdXgncyBjcmVhdGVTdG9yZSBjb2RlLlxuICAvLyBUT0RPOiByZWZhY3RvcitleHBvc2UgdGhhdCBjb2RlIHRvIGJlIHJldXNhYmxlIGhlcmU/XG4gIHZhciBjdXJyZW50ID0gW107XG4gIHZhciBuZXh0ID0gW107XG5cbiAgcmV0dXJuIHtcbiAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBuZXh0ID0gQ0xFQVJFRDtcbiAgICAgIGN1cnJlbnQgPSBDTEVBUkVEO1xuICAgIH0sXG4gICAgbm90aWZ5OiBmdW5jdGlvbiBub3RpZnkoKSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gY3VycmVudCA9IG5leHQ7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsaXN0ZW5lcnNbaV0oKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICBpZiAobmV4dCA9PT0gY3VycmVudCkgbmV4dCA9IGN1cnJlbnQuc2xpY2UoKTtcbiAgICAgIG5leHQucHVzaChsaXN0ZW5lcik7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgICAgaWYgKCFpc1N1YnNjcmliZWQgfHwgY3VycmVudCA9PT0gQ0xFQVJFRCkgcmV0dXJuO1xuICAgICAgICBpc1N1YnNjcmliZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAobmV4dCA9PT0gY3VycmVudCkgbmV4dCA9IGN1cnJlbnQuc2xpY2UoKTtcbiAgICAgICAgbmV4dC5zcGxpY2UobmV4dC5pbmRleE9mKGxpc3RlbmVyKSwgMSk7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1cblxudmFyIFN1YnNjcmlwdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3Vic2NyaXB0aW9uKHN0b3JlLCBwYXJlbnRTdWIsIG9uU3RhdGVDaGFuZ2UpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU3Vic2NyaXB0aW9uKTtcblxuICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgICB0aGlzLnBhcmVudFN1YiA9IHBhcmVudFN1YjtcbiAgICB0aGlzLm9uU3RhdGVDaGFuZ2UgPSBvblN0YXRlQ2hhbmdlO1xuICAgIHRoaXMudW5zdWJzY3JpYmUgPSBudWxsO1xuICAgIHRoaXMubGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgfVxuXG4gIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuYWRkTmVzdGVkU3ViID0gZnVuY3Rpb24gYWRkTmVzdGVkU3ViKGxpc3RlbmVyKSB7XG4gICAgdGhpcy50cnlTdWJzY3JpYmUoKTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lcnMuc3Vic2NyaWJlKGxpc3RlbmVyKTtcbiAgfTtcblxuICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLm5vdGlmeU5lc3RlZFN1YnMgPSBmdW5jdGlvbiBub3RpZnlOZXN0ZWRTdWJzKCkge1xuICAgIHRoaXMubGlzdGVuZXJzLm5vdGlmeSgpO1xuICB9O1xuXG4gIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuaXNTdWJzY3JpYmVkID0gZnVuY3Rpb24gaXNTdWJzY3JpYmVkKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMudW5zdWJzY3JpYmUpO1xuICB9O1xuXG4gIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUudHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gdHJ5U3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHRoaXMucGFyZW50U3ViID8gdGhpcy5wYXJlbnRTdWIuYWRkTmVzdGVkU3ViKHRoaXMub25TdGF0ZUNoYW5nZSkgOiB0aGlzLnN0b3JlLnN1YnNjcmliZSh0aGlzLm9uU3RhdGVDaGFuZ2UpO1xuXG4gICAgICB0aGlzLmxpc3RlbmVycyA9IGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpO1xuICAgIH1cbiAgfTtcblxuICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLnRyeVVuc3Vic2NyaWJlID0gZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmUoKSB7XG4gICAgaWYgKHRoaXMudW5zdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBudWxsO1xuICAgICAgdGhpcy5saXN0ZW5lcnMuY2xlYXIoKTtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFN1YnNjcmlwdGlvbjtcbn0oKTtcblxuZXhwb3J0IHsgU3Vic2NyaXB0aW9uIGFzIGRlZmF1bHQgfTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvU3Vic2NyaXB0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmltcG9ydCBjb25uZWN0QWR2YW5jZWQgZnJvbSAnLi4vY29tcG9uZW50cy9jb25uZWN0QWR2YW5jZWQnO1xuaW1wb3J0IHNoYWxsb3dFcXVhbCBmcm9tICcuLi91dGlscy9zaGFsbG93RXF1YWwnO1xuaW1wb3J0IGRlZmF1bHRNYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMgZnJvbSAnLi9tYXBEaXNwYXRjaFRvUHJvcHMnO1xuaW1wb3J0IGRlZmF1bHRNYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMgZnJvbSAnLi9tYXBTdGF0ZVRvUHJvcHMnO1xuaW1wb3J0IGRlZmF1bHRNZXJnZVByb3BzRmFjdG9yaWVzIGZyb20gJy4vbWVyZ2VQcm9wcyc7XG5pbXBvcnQgZGVmYXVsdFNlbGVjdG9yRmFjdG9yeSBmcm9tICcuL3NlbGVjdG9yRmFjdG9yeSc7XG5cbi8qXG4gIGNvbm5lY3QgaXMgYSBmYWNhZGUgb3ZlciBjb25uZWN0QWR2YW5jZWQuIEl0IHR1cm5zIGl0cyBhcmdzIGludG8gYSBjb21wYXRpYmxlXG4gIHNlbGVjdG9yRmFjdG9yeSwgd2hpY2ggaGFzIHRoZSBzaWduYXR1cmU6XG5cbiAgICAoZGlzcGF0Y2gsIG9wdGlvbnMpID0+IChuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykgPT4gbmV4dEZpbmFsUHJvcHNcbiAgXG4gIGNvbm5lY3QgcGFzc2VzIGl0cyBhcmdzIHRvIGNvbm5lY3RBZHZhbmNlZCBhcyBvcHRpb25zLCB3aGljaCB3aWxsIGluIHR1cm4gcGFzcyB0aGVtIHRvXG4gIHNlbGVjdG9yRmFjdG9yeSBlYWNoIHRpbWUgYSBDb25uZWN0IGNvbXBvbmVudCBpbnN0YW5jZSBpcyBpbnN0YW50aWF0ZWQgb3IgaG90IHJlbG9hZGVkLlxuXG4gIHNlbGVjdG9yRmFjdG9yeSByZXR1cm5zIGEgZmluYWwgcHJvcHMgc2VsZWN0b3IgZnJvbSBpdHMgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBTdGF0ZVRvUHJvcHNGYWN0b3JpZXMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzLCBtZXJnZVByb3BzLFxuICBtZXJnZVByb3BzRmFjdG9yaWVzLCBhbmQgcHVyZSBhcmdzLlxuXG4gIFRoZSByZXN1bHRpbmcgZmluYWwgcHJvcHMgc2VsZWN0b3IgaXMgY2FsbGVkIGJ5IHRoZSBDb25uZWN0IGNvbXBvbmVudCBpbnN0YW5jZSB3aGVuZXZlclxuICBpdCByZWNlaXZlcyBuZXcgcHJvcHMgb3Igc3RvcmUgc3RhdGUuXG4gKi9cblxuZnVuY3Rpb24gbWF0Y2goYXJnLCBmYWN0b3JpZXMsIG5hbWUpIHtcbiAgZm9yICh2YXIgaSA9IGZhY3Rvcmllcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciByZXN1bHQgPSBmYWN0b3JpZXNbaV0oYXJnKTtcbiAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCwgb3B0aW9ucykge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB2YWx1ZSBvZiB0eXBlICcgKyB0eXBlb2YgYXJnICsgJyBmb3IgJyArIG5hbWUgKyAnIGFyZ3VtZW50IHdoZW4gY29ubmVjdGluZyBjb21wb25lbnQgJyArIG9wdGlvbnMud3JhcHBlZENvbXBvbmVudE5hbWUgKyAnLicpO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHJpY3RFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhID09PSBiO1xufVxuXG4vLyBjcmVhdGVDb25uZWN0IHdpdGggZGVmYXVsdCBhcmdzIGJ1aWxkcyB0aGUgJ29mZmljaWFsJyBjb25uZWN0IGJlaGF2aW9yLiBDYWxsaW5nIGl0IHdpdGhcbi8vIGRpZmZlcmVudCBvcHRpb25zIG9wZW5zIHVwIHNvbWUgdGVzdGluZyBhbmQgZXh0ZW5zaWJpbGl0eSBzY2VuYXJpb3NcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb25uZWN0KCkge1xuICB2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge30sXG4gICAgICBfcmVmJGNvbm5lY3RIT0MgPSBfcmVmLmNvbm5lY3RIT0MsXG4gICAgICBjb25uZWN0SE9DID0gX3JlZiRjb25uZWN0SE9DID09PSB1bmRlZmluZWQgPyBjb25uZWN0QWR2YW5jZWQgOiBfcmVmJGNvbm5lY3RIT0MsXG4gICAgICBfcmVmJG1hcFN0YXRlVG9Qcm9wc0YgPSBfcmVmLm1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcyxcbiAgICAgIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcyA9IF9yZWYkbWFwU3RhdGVUb1Byb3BzRiA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdE1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcyA6IF9yZWYkbWFwU3RhdGVUb1Byb3BzRixcbiAgICAgIF9yZWYkbWFwRGlzcGF0Y2hUb1BybyA9IF9yZWYubWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzLFxuICAgICAgbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzID0gX3JlZiRtYXBEaXNwYXRjaFRvUHJvID09PSB1bmRlZmluZWQgPyBkZWZhdWx0TWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzIDogX3JlZiRtYXBEaXNwYXRjaFRvUHJvLFxuICAgICAgX3JlZiRtZXJnZVByb3BzRmFjdG9yID0gX3JlZi5tZXJnZVByb3BzRmFjdG9yaWVzLFxuICAgICAgbWVyZ2VQcm9wc0ZhY3RvcmllcyA9IF9yZWYkbWVyZ2VQcm9wc0ZhY3RvciA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdE1lcmdlUHJvcHNGYWN0b3JpZXMgOiBfcmVmJG1lcmdlUHJvcHNGYWN0b3IsXG4gICAgICBfcmVmJHNlbGVjdG9yRmFjdG9yeSA9IF9yZWYuc2VsZWN0b3JGYWN0b3J5LFxuICAgICAgc2VsZWN0b3JGYWN0b3J5ID0gX3JlZiRzZWxlY3RvckZhY3RvcnkgPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRTZWxlY3RvckZhY3RvcnkgOiBfcmVmJHNlbGVjdG9yRmFjdG9yeTtcblxuICByZXR1cm4gZnVuY3Rpb24gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcykge1xuICAgIHZhciBfcmVmMiA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDoge30sXG4gICAgICAgIF9yZWYyJHB1cmUgPSBfcmVmMi5wdXJlLFxuICAgICAgICBwdXJlID0gX3JlZjIkcHVyZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF9yZWYyJHB1cmUsXG4gICAgICAgIF9yZWYyJGFyZVN0YXRlc0VxdWFsID0gX3JlZjIuYXJlU3RhdGVzRXF1YWwsXG4gICAgICAgIGFyZVN0YXRlc0VxdWFsID0gX3JlZjIkYXJlU3RhdGVzRXF1YWwgPT09IHVuZGVmaW5lZCA/IHN0cmljdEVxdWFsIDogX3JlZjIkYXJlU3RhdGVzRXF1YWwsXG4gICAgICAgIF9yZWYyJGFyZU93blByb3BzRXF1YSA9IF9yZWYyLmFyZU93blByb3BzRXF1YWwsXG4gICAgICAgIGFyZU93blByb3BzRXF1YWwgPSBfcmVmMiRhcmVPd25Qcm9wc0VxdWEgPT09IHVuZGVmaW5lZCA/IHNoYWxsb3dFcXVhbCA6IF9yZWYyJGFyZU93blByb3BzRXF1YSxcbiAgICAgICAgX3JlZjIkYXJlU3RhdGVQcm9wc0VxID0gX3JlZjIuYXJlU3RhdGVQcm9wc0VxdWFsLFxuICAgICAgICBhcmVTdGF0ZVByb3BzRXF1YWwgPSBfcmVmMiRhcmVTdGF0ZVByb3BzRXEgPT09IHVuZGVmaW5lZCA/IHNoYWxsb3dFcXVhbCA6IF9yZWYyJGFyZVN0YXRlUHJvcHNFcSxcbiAgICAgICAgX3JlZjIkYXJlTWVyZ2VkUHJvcHNFID0gX3JlZjIuYXJlTWVyZ2VkUHJvcHNFcXVhbCxcbiAgICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbCA9IF9yZWYyJGFyZU1lcmdlZFByb3BzRSA9PT0gdW5kZWZpbmVkID8gc2hhbGxvd0VxdWFsIDogX3JlZjIkYXJlTWVyZ2VkUHJvcHNFLFxuICAgICAgICBleHRyYU9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZjIsIFsncHVyZScsICdhcmVTdGF0ZXNFcXVhbCcsICdhcmVPd25Qcm9wc0VxdWFsJywgJ2FyZVN0YXRlUHJvcHNFcXVhbCcsICdhcmVNZXJnZWRQcm9wc0VxdWFsJ10pO1xuXG4gICAgdmFyIGluaXRNYXBTdGF0ZVRvUHJvcHMgPSBtYXRjaChtYXBTdGF0ZVRvUHJvcHMsIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcywgJ21hcFN0YXRlVG9Qcm9wcycpO1xuICAgIHZhciBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzID0gbWF0Y2gobWFwRGlzcGF0Y2hUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMsICdtYXBEaXNwYXRjaFRvUHJvcHMnKTtcbiAgICB2YXIgaW5pdE1lcmdlUHJvcHMgPSBtYXRjaChtZXJnZVByb3BzLCBtZXJnZVByb3BzRmFjdG9yaWVzLCAnbWVyZ2VQcm9wcycpO1xuXG4gICAgcmV0dXJuIGNvbm5lY3RIT0Moc2VsZWN0b3JGYWN0b3J5LCBfZXh0ZW5kcyh7XG4gICAgICAvLyB1c2VkIGluIGVycm9yIG1lc3NhZ2VzXG4gICAgICBtZXRob2ROYW1lOiAnY29ubmVjdCcsXG5cbiAgICAgIC8vIHVzZWQgdG8gY29tcHV0ZSBDb25uZWN0J3MgZGlzcGxheU5hbWUgZnJvbSB0aGUgd3JhcHBlZCBjb21wb25lbnQncyBkaXNwbGF5TmFtZS5cbiAgICAgIGdldERpc3BsYXlOYW1lOiBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZShuYW1lKSB7XG4gICAgICAgIHJldHVybiAnQ29ubmVjdCgnICsgbmFtZSArICcpJztcbiAgICAgIH0sXG5cbiAgICAgIC8vIGlmIG1hcFN0YXRlVG9Qcm9wcyBpcyBmYWxzeSwgdGhlIENvbm5lY3QgY29tcG9uZW50IGRvZXNuJ3Qgc3Vic2NyaWJlIHRvIHN0b3JlIHN0YXRlIGNoYW5nZXNcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlczogQm9vbGVhbihtYXBTdGF0ZVRvUHJvcHMpLFxuXG4gICAgICAvLyBwYXNzZWQgdGhyb3VnaCB0byBzZWxlY3RvckZhY3RvcnlcbiAgICAgIGluaXRNYXBTdGF0ZVRvUHJvcHM6IGluaXRNYXBTdGF0ZVRvUHJvcHMsXG4gICAgICBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzOiBpbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAgICAgaW5pdE1lcmdlUHJvcHM6IGluaXRNZXJnZVByb3BzLFxuICAgICAgcHVyZTogcHVyZSxcbiAgICAgIGFyZVN0YXRlc0VxdWFsOiBhcmVTdGF0ZXNFcXVhbCxcbiAgICAgIGFyZU93blByb3BzRXF1YWw6IGFyZU93blByb3BzRXF1YWwsXG4gICAgICBhcmVTdGF0ZVByb3BzRXF1YWw6IGFyZVN0YXRlUHJvcHNFcXVhbCxcbiAgICAgIGFyZU1lcmdlZFByb3BzRXF1YWw6IGFyZU1lcmdlZFByb3BzRXF1YWxcblxuICAgIH0sIGV4dHJhT3B0aW9ucykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb25uZWN0KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvY29ubmVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4geCAhPT0gMCB8fCB5ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNoYWxsb3dFcXVhbChvYmpBLCBvYmpCKSB7XG4gIGlmIChpcyhvYmpBLCBvYmpCKSkgcmV0dXJuIHRydWU7XG5cbiAgaWYgKHR5cGVvZiBvYmpBICE9PSAnb2JqZWN0JyB8fCBvYmpBID09PSBudWxsIHx8IHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCBvYmpCID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIHZhciBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWhhc093bi5jYWxsKG9iakIsIGtleXNBW2ldKSB8fCAhaXMob2JqQVtrZXlzQVtpXV0sIG9iakJba2V5c0FbaV1dKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9zaGFsbG93RXF1YWwuanNcbi8vIG1vZHVsZSBpZCA9IDYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQsIHdyYXBNYXBUb1Byb3BzRnVuYyB9IGZyb20gJy4vd3JhcE1hcFRvUHJvcHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzRnVuY3Rpb24obWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSAnZnVuY3Rpb24nID8gd3JhcE1hcFRvUHJvcHNGdW5jKG1hcERpc3BhdGNoVG9Qcm9wcywgJ21hcERpc3BhdGNoVG9Qcm9wcycpIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzTWlzc2luZyhtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuICFtYXBEaXNwYXRjaFRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIHJldHVybiB7IGRpc3BhdGNoOiBkaXNwYXRjaCB9O1xuICB9KSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBEaXNwYXRjaFRvUHJvcHNJc09iamVjdChtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcERpc3BhdGNoVG9Qcm9wcyAmJiB0eXBlb2YgbWFwRGlzcGF0Y2hUb1Byb3BzID09PSAnb2JqZWN0JyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgcmV0dXJuIGJpbmRBY3Rpb25DcmVhdG9ycyhtYXBEaXNwYXRjaFRvUHJvcHMsIGRpc3BhdGNoKTtcbiAgfSkgOiB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFt3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbiwgd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzTWlzc2luZywgd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzT2JqZWN0XTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tYXBEaXNwYXRjaFRvUHJvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBTeW1ib2wgZnJvbSAnLi9fU3ltYm9sLmpzJztcbmltcG9ydCBnZXRSYXdUYWcgZnJvbSAnLi9fZ2V0UmF3VGFnLmpzJztcbmltcG9ydCBvYmplY3RUb1N0cmluZyBmcm9tICcuL19vYmplY3RUb1N0cmluZy5qcyc7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBudWxsVGFnID0gJ1tvYmplY3QgTnVsbF0nLFxuICAgIHVuZGVmaW5lZFRhZyA9ICdbb2JqZWN0IFVuZGVmaW5lZF0nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0VGFnYCB3aXRob3V0IGZhbGxiYWNrcyBmb3IgYnVnZ3kgZW52aXJvbm1lbnRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGB0b1N0cmluZ1RhZ2AuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRUYWcodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZFRhZyA6IG51bGxUYWc7XG4gIH1cbiAgcmV0dXJuIChzeW1Ub1N0cmluZ1RhZyAmJiBzeW1Ub1N0cmluZ1RhZyBpbiBPYmplY3QodmFsdWUpKVxuICAgID8gZ2V0UmF3VGFnKHZhbHVlKVxuICAgIDogb2JqZWN0VG9TdHJpbmcodmFsdWUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlR2V0VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYmFzZUdldFRhZy5qc1xuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGZyZWVHbG9iYWwgZnJvbSAnLi9fZnJlZUdsb2JhbC5qcyc7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX3Jvb3QuanNcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZyZWVHbG9iYWw7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19mcmVlR2xvYmFsLmpzXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgU3ltYm9sIGZyb20gJy4vX1N5bWJvbC5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0UmF3VGFnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fZ2V0UmF3VGFnLmpzXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIHVzaW5nIGBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIG9iamVjdFRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JqZWN0VG9TdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19vYmplY3RUb1N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG92ZXJBcmcgZnJvbSAnLi9fb3ZlckFyZy5qcyc7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIGdldFByb3RvdHlwZSA9IG92ZXJBcmcoT2JqZWN0LmdldFByb3RvdHlwZU9mLCBPYmplY3QpO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRQcm90b3R5cGU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19nZXRQcm90b3R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKlxuICogQ3JlYXRlcyBhIHVuYXJ5IGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCBpdHMgYXJndW1lbnQgdHJhbnNmb3JtZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB0cmFuc2Zvcm0gVGhlIGFyZ3VtZW50IHRyYW5zZm9ybS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBvdmVyQXJnKGZ1bmMsIHRyYW5zZm9ybSkge1xuICByZXR1cm4gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGZ1bmModHJhbnNmb3JtKGFyZykpO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBvdmVyQXJnO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fb3ZlckFyZy5qc1xuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvaXNPYmplY3RMaWtlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2luZGV4Jyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9wb255ZmlsbCA9IHJlcXVpcmUoJy4vcG9ueWZpbGwnKTtcblxudmFyIF9wb255ZmlsbDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wb255ZmlsbCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIHJvb3Q7IC8qIGdsb2JhbCB3aW5kb3cgKi9cblxuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gIHJvb3QgPSBzZWxmO1xufSBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gd2luZG93O1xufSBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gZ2xvYmFsO1xufSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gbW9kdWxlO1xufSBlbHNlIHtcbiAgcm9vdCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG59XG5cbnZhciByZXN1bHQgPSAoMCwgX3BvbnlmaWxsMlsnZGVmYXVsdCddKShyb290KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJlc3VsdDtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvd2VicGFjay9idWlsZGluL21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0dmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsO1xuZnVuY3Rpb24gc3ltYm9sT2JzZXJ2YWJsZVBvbnlmaWxsKHJvb3QpIHtcblx0dmFyIHJlc3VsdDtcblx0dmFyIF9TeW1ib2wgPSByb290LlN5bWJvbDtcblxuXHRpZiAodHlwZW9mIF9TeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoX1N5bWJvbC5vYnNlcnZhYmxlKSB7XG5cdFx0XHRyZXN1bHQgPSBfU3ltYm9sLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IF9TeW1ib2woJ29ic2VydmFibGUnKTtcblx0XHRcdF9TeW1ib2wub2JzZXJ2YWJsZSA9IHJlc3VsdDtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmVzdWx0ID0gJ0BAb2JzZXJ2YWJsZSc7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvbGliL3BvbnlmaWxsLmpzXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBBY3Rpb25UeXBlcyB9IGZyb20gJy4vY3JlYXRlU3RvcmUnO1xuaW1wb3J0IGlzUGxhaW5PYmplY3QgZnJvbSAnbG9kYXNoLWVzL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi91dGlscy93YXJuaW5nJztcblxuZnVuY3Rpb24gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2Uoa2V5LCBhY3Rpb24pIHtcbiAgdmFyIGFjdGlvblR5cGUgPSBhY3Rpb24gJiYgYWN0aW9uLnR5cGU7XG4gIHZhciBhY3Rpb25OYW1lID0gYWN0aW9uVHlwZSAmJiAnXCInICsgYWN0aW9uVHlwZS50b1N0cmluZygpICsgJ1wiJyB8fCAnYW4gYWN0aW9uJztcblxuICByZXR1cm4gJ0dpdmVuIGFjdGlvbiAnICsgYWN0aW9uTmFtZSArICcsIHJlZHVjZXIgXCInICsga2V5ICsgJ1wiIHJldHVybmVkIHVuZGVmaW5lZC4gJyArICdUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuICcgKyAnSWYgeW91IHdhbnQgdGhpcyByZWR1Y2VyIHRvIGhvbGQgbm8gdmFsdWUsIHlvdSBjYW4gcmV0dXJuIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuJztcbn1cblxuZnVuY3Rpb24gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShpbnB1dFN0YXRlLCByZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgYXJndW1lbnROYW1lID0gYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5JTklUID8gJ3ByZWxvYWRlZFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZScgOiAncHJldmlvdXMgc3RhdGUgcmVjZWl2ZWQgYnkgdGhlIHJlZHVjZXInO1xuXG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnICsgJ3RvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy4nO1xuICB9XG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGlucHV0U3RhdGUpKSB7XG4gICAgcmV0dXJuICdUaGUgJyArIGFyZ3VtZW50TmFtZSArICcgaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcIicgKyB7fS50b1N0cmluZy5jYWxsKGlucHV0U3RhdGUpLm1hdGNoKC9cXHMoW2EtenxBLVpdKykvKVsxXSArICdcIi4gRXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyAnICsgKCdrZXlzOiBcIicgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArICdcIicpO1xuICB9XG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlzID0gT2JqZWN0LmtleXMoaW5wdXRTdGF0ZSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gIXJlZHVjZXJzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldO1xuICB9KTtcblxuICB1bmV4cGVjdGVkS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGVba2V5XSA9IHRydWU7XG4gIH0pO1xuXG4gIGlmICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuICdVbmV4cGVjdGVkICcgKyAodW5leHBlY3RlZEtleXMubGVuZ3RoID4gMSA/ICdrZXlzJyA6ICdrZXknKSArICcgJyArICgnXCInICsgdW5leHBlY3RlZEtleXMuam9pbignXCIsIFwiJykgKyAnXCIgZm91bmQgaW4gJyArIGFyZ3VtZW50TmFtZSArICcuICcpICsgJ0V4cGVjdGVkIHRvIGZpbmQgb25lIG9mIHRoZSBrbm93biByZWR1Y2VyIGtleXMgaW5zdGVhZDogJyArICgnXCInICsgcmVkdWNlcktleXMuam9pbignXCIsIFwiJykgKyAnXCIuIFVuZXhwZWN0ZWQga2V5cyB3aWxsIGJlIGlnbm9yZWQuJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0UmVkdWNlclNoYXBlKHJlZHVjZXJzKSB7XG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodW5kZWZpbmVkLCB7IHR5cGU6IEFjdGlvblR5cGVzLklOSVQgfSk7XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVkdWNlciBcIicgKyBrZXkgKyAnXCIgcmV0dXJuZWQgdW5kZWZpbmVkIGR1cmluZyBpbml0aWFsaXphdGlvbi4gJyArICdJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgJyArICdleHBsaWNpdGx5IHJldHVybiB0aGUgaW5pdGlhbCBzdGF0ZS4gVGhlIGluaXRpYWwgc3RhdGUgbWF5ICcgKyAnbm90IGJlIHVuZGVmaW5lZC4gSWYgeW91IGRvblxcJ3Qgd2FudCB0byBzZXQgYSB2YWx1ZSBmb3IgdGhpcyByZWR1Y2VyLCAnICsgJ3lvdSBjYW4gdXNlIG51bGwgaW5zdGVhZCBvZiB1bmRlZmluZWQuJyk7XG4gICAgfVxuXG4gICAgdmFyIHR5cGUgPSAnQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTl8nICsgTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KCcnKS5qb2luKCcuJyk7XG4gICAgaWYgKHR5cGVvZiByZWR1Y2VyKHVuZGVmaW5lZCwgeyB0eXBlOiB0eXBlIH0pID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VyIFwiJyArIGtleSArICdcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiAnICsgKCdEb25cXCd0IHRyeSB0byBoYW5kbGUgJyArIEFjdGlvblR5cGVzLklOSVQgKyAnIG9yIG90aGVyIGFjdGlvbnMgaW4gXCJyZWR1eC8qXCIgJykgKyAnbmFtZXNwYWNlLiBUaGV5IGFyZSBjb25zaWRlcmVkIHByaXZhdGUuIEluc3RlYWQsIHlvdSBtdXN0IHJldHVybiB0aGUgJyArICdjdXJyZW50IHN0YXRlIGZvciBhbnkgdW5rbm93biBhY3Rpb25zLCB1bmxlc3MgaXQgaXMgdW5kZWZpbmVkLCAnICsgJ2luIHdoaWNoIGNhc2UgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLCByZWdhcmRsZXNzIG9mIHRoZSAnICsgJ2FjdGlvbiB0eXBlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgbm90IGJlIHVuZGVmaW5lZCwgYnV0IGNhbiBiZSBudWxsLicpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogVHVybnMgYW4gb2JqZWN0IHdob3NlIHZhbHVlcyBhcmUgZGlmZmVyZW50IHJlZHVjZXIgZnVuY3Rpb25zLCBpbnRvIGEgc2luZ2xlXG4gKiByZWR1Y2VyIGZ1bmN0aW9uLiBJdCB3aWxsIGNhbGwgZXZlcnkgY2hpbGQgcmVkdWNlciwgYW5kIGdhdGhlciB0aGVpciByZXN1bHRzXG4gKiBpbnRvIGEgc2luZ2xlIHN0YXRlIG9iamVjdCwgd2hvc2Uga2V5cyBjb3JyZXNwb25kIHRvIHRoZSBrZXlzIG9mIHRoZSBwYXNzZWRcbiAqIHJlZHVjZXIgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWR1Y2VycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGNvcnJlc3BvbmQgdG8gZGlmZmVyZW50XG4gKiByZWR1Y2VyIGZ1bmN0aW9ucyB0aGF0IG5lZWQgdG8gYmUgY29tYmluZWQgaW50byBvbmUuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluXG4gKiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhcyByZWR1Y2Vyc2Agc3ludGF4LiBUaGUgcmVkdWNlcnMgbWF5IG5ldmVyIHJldHVyblxuICogdW5kZWZpbmVkIGZvciBhbnkgYWN0aW9uLiBJbnN0ZWFkLCB0aGV5IHNob3VsZCByZXR1cm4gdGhlaXIgaW5pdGlhbCBzdGF0ZVxuICogaWYgdGhlIHN0YXRlIHBhc3NlZCB0byB0aGVtIHdhcyB1bmRlZmluZWQsIGFuZCB0aGUgY3VycmVudCBzdGF0ZSBmb3IgYW55XG4gKiB1bnJlY29nbml6ZWQgYWN0aW9uLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSByZWR1Y2VyIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBldmVyeSByZWR1Y2VyIGluc2lkZSB0aGVcbiAqIHBhc3NlZCBvYmplY3QsIGFuZCBidWlsZHMgYSBzdGF0ZSBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tYmluZVJlZHVjZXJzKHJlZHVjZXJzKSB7XG4gIHZhciByZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKHJlZHVjZXJzKTtcbiAgdmFyIGZpbmFsUmVkdWNlcnMgPSB7fTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHdhcm5pbmcoJ05vIHJlZHVjZXIgcHJvdmlkZWQgZm9yIGtleSBcIicgKyBrZXkgKyAnXCInKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG4gIHZhciBmaW5hbFJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMoZmluYWxSZWR1Y2Vycyk7XG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlDYWNoZSA9IHZvaWQgMDtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICB1bmV4cGVjdGVkS2V5Q2FjaGUgPSB7fTtcbiAgfVxuXG4gIHZhciBzaGFwZUFzc2VydGlvbkVycm9yID0gdm9pZCAwO1xuICB0cnkge1xuICAgIGFzc2VydFJlZHVjZXJTaGFwZShmaW5hbFJlZHVjZXJzKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHNoYXBlQXNzZXJ0aW9uRXJyb3IgPSBlO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbWJpbmF0aW9uKCkge1xuICAgIHZhciBzdGF0ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgdmFyIGFjdGlvbiA9IGFyZ3VtZW50c1sxXTtcblxuICAgIGlmIChzaGFwZUFzc2VydGlvbkVycm9yKSB7XG4gICAgICB0aHJvdyBzaGFwZUFzc2VydGlvbkVycm9yO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgd2FybmluZ01lc3NhZ2UgPSBnZXRVbmV4cGVjdGVkU3RhdGVTaGFwZVdhcm5pbmdNZXNzYWdlKHN0YXRlLCBmaW5hbFJlZHVjZXJzLCBhY3Rpb24sIHVuZXhwZWN0ZWRLZXlDYWNoZSk7XG4gICAgICBpZiAod2FybmluZ01lc3NhZ2UpIHtcbiAgICAgICAgd2FybmluZyh3YXJuaW5nTWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0YXRlID0ge307XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2tleSA9IGZpbmFsUmVkdWNlcktleXNbX2ldO1xuICAgICAgdmFyIHJlZHVjZXIgPSBmaW5hbFJlZHVjZXJzW19rZXldO1xuICAgICAgdmFyIHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtfa2V5XTtcbiAgICAgIHZhciBuZXh0U3RhdGVGb3JLZXkgPSByZWR1Y2VyKHByZXZpb3VzU3RhdGVGb3JLZXksIGFjdGlvbik7XG4gICAgICBpZiAodHlwZW9mIG5leHRTdGF0ZUZvcktleSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGdldFVuZGVmaW5lZFN0YXRlRXJyb3JNZXNzYWdlKF9rZXksIGFjdGlvbik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgbmV4dFN0YXRlW19rZXldID0gbmV4dFN0YXRlRm9yS2V5O1xuICAgICAgaGFzQ2hhbmdlZCA9IGhhc0NoYW5nZWQgfHwgbmV4dFN0YXRlRm9yS2V5ICE9PSBwcmV2aW91c1N0YXRlRm9yS2V5O1xuICAgIH1cbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9jb21iaW5lUmVkdWNlcnMuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRpc3BhdGNoKGFjdGlvbkNyZWF0b3IuYXBwbHkodW5kZWZpbmVkLCBhcmd1bWVudHMpKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZnVuY3Rpb24gaW4gcmV0dXJuLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fSBhY3Rpb25DcmVhdG9ycyBBbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb25cbiAqIGNyZWF0b3IgZnVuY3Rpb25zLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpbiBpdCBpcyB0byB1c2UgRVM2IGBpbXBvcnQgKiBhc2BcbiAqIHN5bnRheC4gWW91IG1heSBhbHNvIHBhc3MgYSBzaW5nbGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZGlzcGF0Y2ggVGhlIGBkaXNwYXRjaGAgZnVuY3Rpb24gYXZhaWxhYmxlIG9uIHlvdXIgUmVkdXhcbiAqIHN0b3JlLlxuICpcbiAqIEByZXR1cm5zIHtGdW5jdGlvbnxPYmplY3R9IFRoZSBvYmplY3QgbWltaWNraW5nIHRoZSBvcmlnaW5hbCBvYmplY3QsIGJ1dCB3aXRoXG4gKiBldmVyeSBhY3Rpb24gY3JlYXRvciB3cmFwcGVkIGludG8gdGhlIGBkaXNwYXRjaGAgY2FsbC4gSWYgeW91IHBhc3NlZCBhXG4gKiBmdW5jdGlvbiBhcyBgYWN0aW9uQ3JlYXRvcnNgLCB0aGUgcmV0dXJuIHZhbHVlIHdpbGwgYWxzbyBiZSBhIHNpbmdsZVxuICogZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2JpbmRBY3Rpb25DcmVhdG9ycyBleHBlY3RlZCBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvbiwgaW5zdGVhZCByZWNlaXZlZCAnICsgKGFjdGlvbkNyZWF0b3JzID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGFjdGlvbkNyZWF0b3JzKSArICcuICcgKyAnRGlkIHlvdSB3cml0ZSBcImltcG9ydCBBY3Rpb25DcmVhdG9ycyBmcm9tXCIgaW5zdGVhZCBvZiBcImltcG9ydCAqIGFzIEFjdGlvbkNyZWF0b3JzIGZyb21cIj8nKTtcbiAgfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoYWN0aW9uQ3JlYXRvcnMpO1xuICB2YXIgYm91bmRBY3Rpb25DcmVhdG9ycyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG4gICAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBib3VuZEFjdGlvbkNyZWF0b3JzW2tleV0gPSBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBib3VuZEFjdGlvbkNyZWF0b3JzO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWR1eC9lcy9iaW5kQWN0aW9uQ3JlYXRvcnMuanNcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmltcG9ydCBjb21wb3NlIGZyb20gJy4vY29tcG9zZSc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0b3JlIGVuaGFuY2VyIHRoYXQgYXBwbGllcyBtaWRkbGV3YXJlIHRvIHRoZSBkaXNwYXRjaCBtZXRob2RcbiAqIG9mIHRoZSBSZWR1eCBzdG9yZS4gVGhpcyBpcyBoYW5keSBmb3IgYSB2YXJpZXR5IG9mIHRhc2tzLCBzdWNoIGFzIGV4cHJlc3NpbmdcbiAqIGFzeW5jaHJvbm91cyBhY3Rpb25zIGluIGEgY29uY2lzZSBtYW5uZXIsIG9yIGxvZ2dpbmcgZXZlcnkgYWN0aW9uIHBheWxvYWQuXG4gKlxuICogU2VlIGByZWR1eC10aHVua2AgcGFja2FnZSBhcyBhbiBleGFtcGxlIG9mIHRoZSBSZWR1eCBtaWRkbGV3YXJlLlxuICpcbiAqIEJlY2F1c2UgbWlkZGxld2FyZSBpcyBwb3RlbnRpYWxseSBhc3luY2hyb25vdXMsIHRoaXMgc2hvdWxkIGJlIHRoZSBmaXJzdFxuICogc3RvcmUgZW5oYW5jZXIgaW4gdGhlIGNvbXBvc2l0aW9uIGNoYWluLlxuICpcbiAqIE5vdGUgdGhhdCBlYWNoIG1pZGRsZXdhcmUgd2lsbCBiZSBnaXZlbiB0aGUgYGRpc3BhdGNoYCBhbmQgYGdldFN0YXRlYCBmdW5jdGlvbnNcbiAqIGFzIG5hbWVkIGFyZ3VtZW50cy5cbiAqXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBtaWRkbGV3YXJlcyBUaGUgbWlkZGxld2FyZSBjaGFpbiB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIHN0b3JlIGVuaGFuY2VyIGFwcGx5aW5nIHRoZSBtaWRkbGV3YXJlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhcHBseU1pZGRsZXdhcmUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtaWRkbGV3YXJlcyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIG1pZGRsZXdhcmVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChjcmVhdGVTdG9yZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAocmVkdWNlciwgcHJlbG9hZGVkU3RhdGUsIGVuaGFuY2VyKSB7XG4gICAgICB2YXIgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSwgZW5oYW5jZXIpO1xuICAgICAgdmFyIF9kaXNwYXRjaCA9IHN0b3JlLmRpc3BhdGNoO1xuICAgICAgdmFyIGNoYWluID0gW107XG5cbiAgICAgIHZhciBtaWRkbGV3YXJlQVBJID0ge1xuICAgICAgICBnZXRTdGF0ZTogc3RvcmUuZ2V0U3RhdGUsXG4gICAgICAgIGRpc3BhdGNoOiBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICAgICAgICByZXR1cm4gX2Rpc3BhdGNoKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBjaGFpbiA9IG1pZGRsZXdhcmVzLm1hcChmdW5jdGlvbiAobWlkZGxld2FyZSkge1xuICAgICAgICByZXR1cm4gbWlkZGxld2FyZShtaWRkbGV3YXJlQVBJKTtcbiAgICAgIH0pO1xuICAgICAgX2Rpc3BhdGNoID0gY29tcG9zZS5hcHBseSh1bmRlZmluZWQsIGNoYWluKShzdG9yZS5kaXNwYXRjaCk7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RvcmUsIHtcbiAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcmVkdXgvZXMvYXBwbHlNaWRkbGV3YXJlLmpzXG4vLyBtb2R1bGUgaWQgPSA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50LCB3cmFwTWFwVG9Qcm9wc0Z1bmMgfSBmcm9tICcuL3dyYXBNYXBUb1Byb3BzJztcblxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uKG1hcFN0YXRlVG9Qcm9wcykge1xuICByZXR1cm4gdHlwZW9mIG1hcFN0YXRlVG9Qcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBTdGF0ZVRvUHJvcHMsICdtYXBTdGF0ZVRvUHJvcHMnKSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBTdGF0ZVRvUHJvcHNJc01pc3NpbmcobWFwU3RhdGVUb1Byb3BzKSB7XG4gIHJldHVybiAhbWFwU3RhdGVUb1Byb3BzID8gd3JhcE1hcFRvUHJvcHNDb25zdGFudChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9KSA6IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW3doZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uLCB3aGVuTWFwU3RhdGVUb1Byb3BzSXNNaXNzaW5nXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tYXBTdGF0ZVRvUHJvcHMuanNcbi8vIG1vZHVsZSBpZCA9IDc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmltcG9ydCB2ZXJpZnlQbGFpbk9iamVjdCBmcm9tICcuLi91dGlscy92ZXJpZnlQbGFpbk9iamVjdCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIG93blByb3BzLCBzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0TWVyZ2VQcm9wc1Byb3h5KGRpc3BhdGNoLCBfcmVmKSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gX3JlZi5kaXNwbGF5TmFtZSxcbiAgICAgICAgcHVyZSA9IF9yZWYucHVyZSxcbiAgICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbCA9IF9yZWYuYXJlTWVyZ2VkUHJvcHNFcXVhbDtcblxuICAgIHZhciBoYXNSdW5PbmNlID0gZmFsc2U7XG4gICAgdmFyIG1lcmdlZFByb3BzID0gdm9pZCAwO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlUHJvcHNQcm94eShzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICAgICAgdmFyIG5leHRNZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuXG4gICAgICBpZiAoaGFzUnVuT25jZSkge1xuICAgICAgICBpZiAoIXB1cmUgfHwgIWFyZU1lcmdlZFByb3BzRXF1YWwobmV4dE1lcmdlZFByb3BzLCBtZXJnZWRQcm9wcykpIG1lcmdlZFByb3BzID0gbmV4dE1lcmdlZFByb3BzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFzUnVuT25jZSA9IHRydWU7XG4gICAgICAgIG1lcmdlZFByb3BzID0gbmV4dE1lcmdlZFByb3BzO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB2ZXJpZnlQbGFpbk9iamVjdChtZXJnZWRQcm9wcywgZGlzcGxheU5hbWUsICdtZXJnZVByb3BzJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2hlbk1lcmdlUHJvcHNJc0Z1bmN0aW9uKG1lcmdlUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtZXJnZVByb3BzID09PSAnZnVuY3Rpb24nID8gd3JhcE1lcmdlUHJvcHNGdW5jKG1lcmdlUHJvcHMpIDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2hlbk1lcmdlUHJvcHNJc09taXR0ZWQobWVyZ2VQcm9wcykge1xuICByZXR1cm4gIW1lcmdlUHJvcHMgPyBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNZXJnZVByb3BzO1xuICB9IDogdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBbd2hlbk1lcmdlUHJvcHNJc0Z1bmN0aW9uLCB3aGVuTWVyZ2VQcm9wc0lzT21pdHRlZF07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWVyZ2VQcm9wcy5qc1xuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgdmVyaWZ5U3Vic2VsZWN0b3JzIGZyb20gJy4vdmVyaWZ5U3Vic2VsZWN0b3JzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGltcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbXB1cmVGaW5hbFByb3BzU2VsZWN0b3Ioc3RhdGUsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIG1lcmdlUHJvcHMobWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyksIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpLCBvd25Qcm9wcyk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIF9yZWYpIHtcbiAgdmFyIGFyZVN0YXRlc0VxdWFsID0gX3JlZi5hcmVTdGF0ZXNFcXVhbCxcbiAgICAgIGFyZU93blByb3BzRXF1YWwgPSBfcmVmLmFyZU93blByb3BzRXF1YWwsXG4gICAgICBhcmVTdGF0ZVByb3BzRXF1YWwgPSBfcmVmLmFyZVN0YXRlUHJvcHNFcXVhbDtcblxuICB2YXIgaGFzUnVuQXRMZWFzdE9uY2UgPSBmYWxzZTtcbiAgdmFyIHN0YXRlID0gdm9pZCAwO1xuICB2YXIgb3duUHJvcHMgPSB2b2lkIDA7XG4gIHZhciBzdGF0ZVByb3BzID0gdm9pZCAwO1xuICB2YXIgZGlzcGF0Y2hQcm9wcyA9IHZvaWQgMDtcbiAgdmFyIG1lcmdlZFByb3BzID0gdm9pZCAwO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUZpcnN0Q2FsbChmaXJzdFN0YXRlLCBmaXJzdE93blByb3BzKSB7XG4gICAgc3RhdGUgPSBmaXJzdFN0YXRlO1xuICAgIG93blByb3BzID0gZmlyc3RPd25Qcm9wcztcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgaGFzUnVuQXRMZWFzdE9uY2UgPSB0cnVlO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1Byb3BzQW5kTmV3U3RhdGUoKSB7XG4gICAgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuXG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuXG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICByZXR1cm4gbWVyZ2VkUHJvcHM7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXdQcm9wcygpIHtcbiAgICBpZiAobWFwU3RhdGVUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG5cbiAgICBpZiAobWFwRGlzcGF0Y2hUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG5cbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1N0YXRlKCkge1xuICAgIHZhciBuZXh0U3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIHZhciBzdGF0ZVByb3BzQ2hhbmdlZCA9ICFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsIHN0YXRlUHJvcHMpO1xuICAgIHN0YXRlUHJvcHMgPSBuZXh0U3RhdGVQcm9wcztcblxuICAgIGlmIChzdGF0ZVByb3BzQ2hhbmdlZCkgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcblxuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN1YnNlcXVlbnRDYWxscyhuZXh0U3RhdGUsIG5leHRPd25Qcm9wcykge1xuICAgIHZhciBwcm9wc0NoYW5nZWQgPSAhYXJlT3duUHJvcHNFcXVhbChuZXh0T3duUHJvcHMsIG93blByb3BzKTtcbiAgICB2YXIgc3RhdGVDaGFuZ2VkID0gIWFyZVN0YXRlc0VxdWFsKG5leHRTdGF0ZSwgc3RhdGUpO1xuICAgIHN0YXRlID0gbmV4dFN0YXRlO1xuICAgIG93blByb3BzID0gbmV4dE93blByb3BzO1xuXG4gICAgaWYgKHByb3BzQ2hhbmdlZCAmJiBzdGF0ZUNoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCk7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1Byb3BzKCk7XG4gICAgaWYgKHN0YXRlQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1N0YXRlKCk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3IobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICByZXR1cm4gaGFzUnVuQXRMZWFzdE9uY2UgPyBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIDogaGFuZGxlRmlyc3RDYWxsKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKTtcbiAgfTtcbn1cblxuLy8gVE9ETzogQWRkIG1vcmUgY29tbWVudHNcblxuLy8gSWYgcHVyZSBpcyB0cnVlLCB0aGUgc2VsZWN0b3IgcmV0dXJuZWQgYnkgc2VsZWN0b3JGYWN0b3J5IHdpbGwgbWVtb2l6ZSBpdHMgcmVzdWx0cyxcbi8vIGFsbG93aW5nIGNvbm5lY3RBZHZhbmNlZCdzIHNob3VsZENvbXBvbmVudFVwZGF0ZSB0byByZXR1cm4gZmFsc2UgaWYgZmluYWxcbi8vIHByb3BzIGhhdmUgbm90IGNoYW5nZWQuIElmIGZhbHNlLCB0aGUgc2VsZWN0b3Igd2lsbCBhbHdheXMgcmV0dXJuIGEgbmV3XG4vLyBvYmplY3QgYW5kIHNob3VsZENvbXBvbmVudFVwZGF0ZSB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeShkaXNwYXRjaCwgX3JlZjIpIHtcbiAgdmFyIGluaXRNYXBTdGF0ZVRvUHJvcHMgPSBfcmVmMi5pbml0TWFwU3RhdGVUb1Byb3BzLFxuICAgICAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyA9IF9yZWYyLmluaXRNYXBEaXNwYXRjaFRvUHJvcHMsXG4gICAgICBpbml0TWVyZ2VQcm9wcyA9IF9yZWYyLmluaXRNZXJnZVByb3BzLFxuICAgICAgb3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmMiwgWydpbml0TWFwU3RhdGVUb1Byb3BzJywgJ2luaXRNYXBEaXNwYXRjaFRvUHJvcHMnLCAnaW5pdE1lcmdlUHJvcHMnXSk7XG5cbiAgdmFyIG1hcFN0YXRlVG9Qcm9wcyA9IGluaXRNYXBTdGF0ZVRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICB2YXIgbWFwRGlzcGF0Y2hUb1Byb3BzID0gaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIHZhciBtZXJnZVByb3BzID0gaW5pdE1lcmdlUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBvcHRpb25zLmRpc3BsYXlOYW1lKTtcbiAgfVxuXG4gIHZhciBzZWxlY3RvckZhY3RvcnkgPSBvcHRpb25zLnB1cmUgPyBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeSA6IGltcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3Rvcnk7XG5cbiAgcmV0dXJuIHNlbGVjdG9yRmFjdG9yeShtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgZGlzcGF0Y2gsIG9wdGlvbnMpO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3NlbGVjdG9yRmFjdG9yeS5qc1xuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vdXRpbHMvd2FybmluZyc7XG5cbmZ1bmN0aW9uIHZlcmlmeShzZWxlY3RvciwgbWV0aG9kTmFtZSwgZGlzcGxheU5hbWUpIHtcbiAgaWYgKCFzZWxlY3Rvcikge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCB2YWx1ZSBmb3IgJyArIG1ldGhvZE5hbWUgKyAnIGluICcgKyBkaXNwbGF5TmFtZSArICcuJyk7XG4gIH0gZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gJ21hcFN0YXRlVG9Qcm9wcycgfHwgbWV0aG9kTmFtZSA9PT0gJ21hcERpc3BhdGNoVG9Qcm9wcycpIHtcbiAgICBpZiAoIXNlbGVjdG9yLmhhc093blByb3BlcnR5KCdkZXBlbmRzT25Pd25Qcm9wcycpKSB7XG4gICAgICB3YXJuaW5nKCdUaGUgc2VsZWN0b3IgZm9yICcgKyBtZXRob2ROYW1lICsgJyBvZiAnICsgZGlzcGxheU5hbWUgKyAnIGRpZCBub3Qgc3BlY2lmeSBhIHZhbHVlIGZvciBkZXBlbmRzT25Pd25Qcm9wcy4nKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB2ZXJpZnkobWFwU3RhdGVUb1Byb3BzLCAnbWFwU3RhdGVUb1Byb3BzJywgZGlzcGxheU5hbWUpO1xuICB2ZXJpZnkobWFwRGlzcGF0Y2hUb1Byb3BzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJywgZGlzcGxheU5hbWUpO1xuICB2ZXJpZnkobWVyZ2VQcm9wcywgJ21lcmdlUHJvcHMnLCBkaXNwbGF5TmFtZSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvdmVyaWZ5U3Vic2VsZWN0b3JzLmpzXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBlc2xpbnQtZGlzYWJsZSBnbG9iYWwtcmVxdWlyZSAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2NvbmZpZ3VyZVN0b3JlLnByb2QnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9jb25maWd1cmVTdG9yZS5kZXYnKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc3RvcmUvY29uZmlndXJlU3RvcmUuanMiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG4vLyBpbXBvcnQgeyByb3V0ZXJNaWRkbGV3YXJlIH0gZnJvbSAncmVhY3Qtcm91dGVyLXJlZHV4Jztcbi8vIGltcG9ydCBjcmVhdGVIaXN0b3J5IGZyb20gJ2hpc3RvcnkvY3JlYXRlQnJvd3Nlckhpc3RvcnknO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XG5cbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSBjb21wb3NlV2l0aERldlRvb2xzKHtcbiAgLy8gU3BlY2lmeSBuYW1lIGhlcmUsIGFjdGlvbnNCbGFja2xpc3QsIGFjdGlvbnNDcmVhdG9ycyBhbmQgb3RoZXIgb3B0aW9ucyBpZiBuZWVkZWRcbn0pO1xuXG4vLyBDcmVhdGUgYSBoaXN0b3J5IG9mIHlvdXIgY2hvb3NpbmcgKHdlJ3JlIHVzaW5nIGEgYnJvd3NlciBoaXN0b3J5IGluIHRoaXMgY2FzZSlcbi8vIGNvbnN0IGhpc3RvcnkgPSBjcmVhdGVIaXN0b3J5KCk7XG5cbi8vIEJ1aWxkIHRoZSBtaWRkbGV3YXJlIGZvciBpbnRlcmNlcHRpbmcgYW5kIGRpc3BhdGNoaW5nIG5hdmlnYXRpb24gYWN0aW9uc1xuLy8gY29uc3Qgcm91dGVybWlkZGxld2FyZSA9IHJvdXRlck1pZGRsZXdhcmUoaGlzdG9yeSk7XG5cbmNvbnN0IGVuaGFuY2VyID0gY29tcG9zZUVuaGFuY2VycyhcbiAgYXBwbHlNaWRkbGV3YXJlKC8qIHJvdXRlcm1pZGRsZXdhcmUsICovIHRodW5rKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgZW5oYW5jZXIpO1xufVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmRldi5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY29tcG9zZSA9IHJlcXVpcmUoJ3JlZHV4JykuY29tcG9zZTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuY29tcG9zZVdpdGhEZXZUb29scyA9IChcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA/XG4gICAgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyA6XG4gICAgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIGlmICh0eXBlb2YgYXJndW1lbnRzWzBdID09PSAnb2JqZWN0JykgcmV0dXJuIGNvbXBvc2U7XG4gICAgICByZXR1cm4gY29tcG9zZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIH1cbik7XG5cbmV4cG9ydHMuZGV2VG9vbHNFbmhhbmNlciA9IChcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18gP1xuICAgIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIDpcbiAgICBmdW5jdGlvbigpIHsgcmV0dXJuIGZ1bmN0aW9uKG5vb3ApIHsgcmV0dXJuIG5vb3A7IH0gfVxuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL25vZGVfbW9kdWxlcy9yZWR1eC1kZXZ0b29scy1leHRlbnNpb24vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGNyZWF0ZVRodW5rTWlkZGxld2FyZShleHRyYUFyZ3VtZW50KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBkaXNwYXRjaCA9IF9yZWYuZGlzcGF0Y2gsXG4gICAgICAgIGdldFN0YXRlID0gX3JlZi5nZXRTdGF0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5leHQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbihkaXNwYXRjaCwgZ2V0U3RhdGUsIGV4dHJhQXJndW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn1cblxudmFyIHRodW5rID0gY3JlYXRlVGh1bmtNaWRkbGV3YXJlKCk7XG50aHVuay53aXRoRXh0cmFBcmd1bWVudCA9IGNyZWF0ZVRodW5rTWlkZGxld2FyZTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gdGh1bms7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3JlZHV4LXRodW5rL2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHByb2plY3RzIGZyb20gJy4vcHJvamVjdHMnO1xuaW1wb3J0IHZhY2FuY2llcyBmcm9tICcuL3ZhY2FuY2llcyc7XG4vKlxuKiBFeGFtcGxlIHN0b3JlXG4qXG5yb290UmVkdWNlciA9IHtcbiAgcHJvamVjdHM6IHtcbiAgICBra2kxaDJ2MG46IHtcbiAgICAgIGlkOiAna2tpMWgydjBuJyxcbiAgICAgIHRpdGxlOiAnTmV3IHByb2plY3QnLFxuICAgICAgaXNDbG9zZWQ6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAgJ2ptZXV3dGVkbicsXG4gICAgICAgICd4M3ZwMGc1d3AnLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxuICB2YWNhbmNpZXM6IHtcbiAgICBqbWV1d3RlZG46IHtcbiAgICAgIGlkOiAnam1ldXd0ZWRuJyxcbiAgICAgIHRpdGxlOiAnTmV3IHZhY2FuY3kgMScsXG4gICAgICBpc0Nsb3NlZDogdHJ1ZSxcbiAgICAgIHByb2plY3RJZDogJ2traTFoMnYwbicsXG4gICAgfSxcbiAgICB4M3ZwMGc1d3A6IHtcbiAgICAgIGlkOiAneDN2cDBnNXdwJyxcbiAgICAgIHRpdGxlOiAnTmV3IHZhY2FuY3kgMicsXG4gICAgICBpc0Nsb3NlZDogZmFsc2UsXG4gICAgICBwcm9qZWN0SWQ6ICdra2kxaDJ2MG4nLFxuICAgIH0sXG4gIH0sXG59O1xuKi9cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgcHJvamVjdHMsXG4gIHZhY2FuY2llcyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcmVkdWNlcnMvaW5kZXguanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cbmltcG9ydCB7XG4gIEFERF9QUk9KRUNULFxuICBPUEVOX0NMT1NFX1BST0pFQ1QsXG4gIFJFTU9WRV9QUk9KRUNULFxuICBBRERfVkFDQU5DWSxcbiAgUkVNT1ZFX1ZBQ0FOQ1ksXG59IGZyb20gJy4uL2NvbnN0YW50cyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHt9O1xuXG5mdW5jdGlvbiBwcm9qZWN0cyhzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9QUk9KRUNUOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgUkVNT1ZFX1BST0pFQ1Q6IHtcbiAgICAgIGNvbnN0IHByb2plY3RzID0gc3RhdGU7XG4gICAgICBjb25zdCB7IHByb2plY3RJZCB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBkZWxldGUgcHJvamVjdHNbcHJvamVjdElkXTtcbiAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9XG5cbiAgICBjYXNlIEFERF9WQUNBTkNZOiB7XG4gICAgICBjb25zdCB2YWNhbmN5ID0gT2JqZWN0LmtleXMoYWN0aW9uLnBheWxvYWQpLm1hcChrZXkgPT4gYWN0aW9uLnBheWxvYWRba2V5XSkucG9wKCk7XG4gICAgICBjb25zdCB7IGlkLCBwcm9qZWN0SWQgfSA9IHZhY2FuY3k7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gc3RhdGVbcHJvamVjdElkXTtcbiAgICAgIGNvbnN0IHsgaXRlbXMgfSA9IHByb2plY3Q7XG4gICAgICBjb25zdCBuZXdJdGVtcyA9IFsuLi5pdGVtcywgaWRdO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFtwcm9qZWN0SWRdOiB7XG4gICAgICAgICAgLi4ucHJvamVjdCxcbiAgICAgICAgICBpdGVtczogbmV3SXRlbXMsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgUkVNT1ZFX1ZBQ0FOQ1k6IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcHJvamVjdElkLFxuICAgICAgICB2YWNhbmN5SWQsXG4gICAgICB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gc3RhdGVbcHJvamVjdElkXTtcbiAgICAgIGNvbnN0IHsgaXRlbXMgfSA9IHByb2plY3Q7XG4gICAgICBjb25zdCBuZXdJdGVtcyA9IGl0ZW1zLmZpbHRlcihrZXkgPT4ga2V5ICE9PSB2YWNhbmN5SWQpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFtwcm9qZWN0SWRdOiB7XG4gICAgICAgICAgLi4ucHJvamVjdCxcbiAgICAgICAgICBpdGVtczogbmV3SXRlbXMsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgT1BFTl9DTE9TRV9QUk9KRUNUOiB7XG4gICAgICBjb25zdCBpZCA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgcHJvamVjdCA9IHN0YXRlW2lkXTtcbiAgICAgIGNvbnN0IHsgaXNDbG9zZWQgfSA9IHByb2plY3Q7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgW2lkXToge1xuICAgICAgICAgIC4uLnByb2plY3QsXG4gICAgICAgICAgaXNDbG9zZWQ6ICFpc0Nsb3NlZCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0cztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvcmVkdWNlcnMvcHJvamVjdHMuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1zaGFkb3cgKi9cbmltcG9ydCB7XG4gIFJFTU9WRV9QUk9KRUNULFxuICBBRERfVkFDQU5DWSxcbiAgT1BFTl9DTE9TRV9WQUNBTkNZLFxuICBSRU1PVkVfVkFDQU5DWSxcbn0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmZ1bmN0aW9uIHZhY2FuY2llcyhzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEFERF9WQUNBTkNZOiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgUkVNT1ZFX1ZBQ0FOQ1k6IHtcbiAgICAgIGNvbnN0IHZhY3MgPSB7IC4uLnN0YXRlIH07XG4gICAgICBjb25zdCB7IHZhY2FuY3lJZCB9ID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBkZWxldGUgdmFjc1t2YWNhbmN5SWRdO1xuICAgICAgcmV0dXJuIHZhY3M7XG4gICAgfVxuXG4gICAgY2FzZSBSRU1PVkVfUFJPSkVDVDoge1xuICAgICAgY29uc3QgdmFjcyA9IHsgLi4uc3RhdGUgfTtcbiAgICAgIGNvbnN0IHsgdmFjYW5jaWVzIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHZhY2FuY2llcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICBkZWxldGUgdmFjc1tpZF07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB2YWNzO1xuICAgIH1cblxuICAgIGNhc2UgT1BFTl9DTE9TRV9WQUNBTkNZOiB7XG4gICAgICBjb25zdCB2YWNzID0geyAuLi5zdGF0ZSB9O1xuICAgICAgY29uc3Qge1xuICAgICAgICBpZHMsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgIH0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGlkcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICB2YWNzW2lkXS5pc0Nsb3NlZCA9IHN0YXR1cztcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHZhY3M7XG4gICAgfVxuXG4gICAgY2FzZSAnJzoge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdmFjYW5jaWVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9yZWR1Y2Vycy92YWNhbmNpZXMuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF1dG9CaW5kIGZyb20gJ3JlYWN0LWF1dG9iaW5kJztcbmltcG9ydCBBcHAgZnJvbSAnLi4vY29tcG9uZW50cy9BcHAvaW5kZXgnO1xuaW1wb3J0IEhlYWRlckNvbnRhaW5lciBmcm9tICcuLi9jb250YWluZXJzL0hlYWRlckNvbnRhaW5lcic7XG5pbXBvcnQgUHJvamVjdExpc3RDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVycy9Qcm9qZWN0TGlzdENvbnRhaW5lcic7XG5cbmNsYXNzIEFwcENvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIGF1dG9CaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hWYWx1ZTogdW5kZWZpbmVkLFxuICAgICAgaXNPbmx5T3BlbjogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIG9uT25seU9wZW4oZSkge1xuICAgIGNvbnN0IGNoZWNrZWQgPSBlLnRhcmdldC5jaGVja2VkO1xuICAgIC8vIGNvbnN0IGlzT25seU9wZW4gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMudXBkYXRlU3RhdGUoeyBpc09ubHlPcGVuOiBjaGVja2VkIH0pO1xuICB9XG5cbiAgb25DaGFuZ2VTZWFyY2goZSkge1xuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7IHNlYXJjaFZhbHVlOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKHBheWxvYWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAuLi5wYXlsb2FkLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlYXJjaFZhbHVlLFxuICAgICAgaXNPbmx5T3BlbixcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPEFwcD5cbiAgICAgICAgPEhlYWRlckNvbnRhaW5lclxuICAgICAgICAgIG9uT25seU9wZW49e3RoaXMub25Pbmx5T3Blbn1cbiAgICAgICAgICBvbkNoYW5nZVNlYXJjaD17dGhpcy5vbkNoYW5nZVNlYXJjaH1cbiAgICAgICAgICBzZWFyY2hWYWx1ZT17c2VhcmNoVmFsdWV9XG4gICAgICAgICAgaXNPbmx5T3Blbj17aXNPbmx5T3Blbn1cbiAgICAgICAgLz5cbiAgICAgICAgPFByb2plY3RMaXN0Q29udGFpbmVyXG4gICAgICAgICAgc2VhcmNoVmFsdWU9e3NlYXJjaFZhbHVlfVxuICAgICAgICAgIGlzT25seU9wZW49e2lzT25seU9wZW59XG4gICAgICAgIC8+XG4gICAgICA8L0FwcD5cbiAgICApO1xuICB9XG59XG5cbkFwcENvbnRhaW5lci5wcm9wVHlwZXMgPSB7fTtcbkFwcENvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGFpbmVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb250YWluZXJzL0FwcENvbnRhaW5lci5qc3giLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gYXV0b0JpbmQ7XG52YXIgd29udEJpbmQgPSBbJ2NvbnN0cnVjdG9yJywgJ3JlbmRlcicsICdjb21wb25lbnRXaWxsTW91bnQnLCAnY29tcG9uZW50RGlkTW91bnQnLCAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsICdzaG91bGRDb21wb25lbnRVcGRhdGUnLCAnY29tcG9uZW50V2lsbFVwZGF0ZScsICdjb21wb25lbnREaWRVcGRhdGUnLCAnY29tcG9uZW50V2lsbFVubW91bnQnXTtcblxudmFyIHRvQmluZCA9IFtdO1xuXG5mdW5jdGlvbiBhdXRvQmluZChjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBdXRvYmluZCBlcnJvcjogTm8gY29udGV4dCBwcm92aWRlZC4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgb2JqUHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGNvbnRleHQpO1xuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgIC8vIElmIGEgbGlzdCBvZiBtZXRob2RzIHRvIGJpbmQgaXMgcHJvdmlkZWQsIHVzZSBpdC5cbiAgICB0b0JpbmQgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIG5vIGxpc3Qgb2YgbWV0aG9kcyB0byBiaW5kIGlzIHByb3ZpZGVkLCBiaW5kIGFsbCBhdmFpbGFibGUgbWV0aG9kcyBpbiBjbGFzcy5cbiAgICB0b0JpbmQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmpQcm90b3R5cGUpO1xuICB9XG5cbiAgdG9CaW5kLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmpQcm90b3R5cGUsIG1ldGhvZCk7XG5cbiAgICBpZiAoZGVzY3JpcHRvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0F1dG9iaW5kOiBcIicgKyBtZXRob2QgKyAnXCIgbWV0aG9kIG5vdCBmb3VuZCBpbiBjbGFzcy4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gaWYgaXQncyBzcGVjaWFsIGNhc2UgZnVuY3Rpb24gb3IgaWYgbm90IGEgZnVuY3Rpb24gYXQgYWxsXG4gICAgaWYgKHdvbnRCaW5kLmluZGV4T2YobWV0aG9kKSAhPT0gLTEgfHwgdHlwZW9mIGRlc2NyaXB0b3IudmFsdWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqUHJvdG90eXBlLCBtZXRob2QsIGJvdW5kTWV0aG9kKG9ialByb3RvdHlwZSwgbWV0aG9kLCBkZXNjcmlwdG9yKSk7XG4gIH0pO1xufVxuXG4vKipcbiogRnJvbSBhdXRvYmluZC1kZWNvcmF0b3IgKGh0dHBzOi8vZ2l0aHViLmNvbS9hbmRyZXlwb3BwL2F1dG9iaW5kLWRlY29yYXRvci90cmVlL21hc3RlcilcbiogUmV0dXJuIGEgZGVzY3JpcHRvciByZW1vdmluZyB0aGUgdmFsdWUgYW5kIHJldHVybmluZyBhIGdldHRlclxuKiBUaGUgZ2V0dGVyIHdpbGwgcmV0dXJuIGEgLmJpbmQgdmVyc2lvbiBvZiB0aGUgZnVuY3Rpb25cbiogYW5kIG1lbW9pemUgdGhlIHJlc3VsdCBhZ2FpbnN0IGEgc3ltYm9sIG9uIHRoZSBpbnN0YW5jZVxuKi9cbmZ1bmN0aW9uIGJvdW5kTWV0aG9kKG9ialByb3RvdHlwZSwgbWV0aG9kLCBkZXNjcmlwdG9yKSB7XG4gIHZhciBmbiA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgcmV0dXJuIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICBpZiAodGhpcyA9PT0gb2JqUHJvdG90eXBlIHx8IHRoaXMuaGFzT3duUHJvcGVydHkobWV0aG9kKSkge1xuICAgICAgICByZXR1cm4gZm47XG4gICAgICB9XG5cbiAgICAgIHZhciBib3VuZEZuID0gZm4uYmluZCh0aGlzKTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBtZXRob2QsIHtcbiAgICAgICAgdmFsdWU6IGJvdW5kRm4sXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGJvdW5kRm47XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuLi9ub2RlX21vZHVsZXMvcmVhY3QtYXV0b2JpbmQvbGliL2F1dG9CaW5kLmpzXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICcuLi9zdHlsZS9mb250LnNjc3MnO1xuaW1wb3J0ICcuLi9zdHlsZS9tYWluLnNjc3MnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuc2Nzcyc7XG5cbmZ1bmN0aW9uIEFwcChwcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvamVjdH0+XG4gICAgICA8aDE+0KHQv9C40YHQvtC6INC/0YDQvtC10LrRgtC+0LI8L2gxPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5BcHAucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gIF0pLmlzUmVxdWlyZWQsXG59O1xuQXBwLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9BcHAvaW5kZXguanN4IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvc3R5bGUvZm9udC5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJQbGFjZWhvbGRlclwiOlwiXzI0LThXUlpfcTc4NU8wZHdfLThuYXpcIixcIkJ1dHRvblRleHRcIjpcIl8zUmVTVmpfb0tBZ2s3aUVxbjY4dXg3XCIsXCJXaGl0ZS10ZXh0LWJ1dHRvblwiOlwiXzJ2NUcxMzhuOVVDMHZ0ak04S2pFMWFcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL3N0eWxlL21haW4uc2Nzc1xuLy8gbW9kdWxlIGlkID0gOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiUGxhY2Vob2xkZXJcIjpcIl8xWDluS3BHMTdyOGduVFZfYmF6Rm0tXCIsXCJCdXR0b25UZXh0XCI6XCJfMUZRZnpySXZraDBNU1BHMTRIWGlVeVwiLFwiV2hpdGUtdGV4dC1idXR0b25cIjpcIl8yYUg2NllsVmx5LV9tV09BM05INEsyXCIsXCJwcm9qZWN0XCI6XCJfMWUxLTBJU3BQWVJVNUFqOVhSaDB1Q1wifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvQXBwL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBhdXRvQmluZCBmcm9tICdyZWFjdC1hdXRvYmluZCc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEFkZFByb2plY3RWYWNhbmN5Q29udGFpbmVyIGZyb20gJy4vQWRkUHJvamVjdFZhY2FuY3lDb250YWluZXInO1xuXG5pbXBvcnQgeyBhZGRQcm9qZWN0IH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmNsYXNzIEhlYWRlckNvbnRhaW5lciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgc3VwZXIocHJvcHMsIGNvbnRleHQpO1xuICAgIGF1dG9CaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc01vZGFsT3BlbjogZmFsc2UsXG4gICAgfTtcbiAgfVxuXG4gIG9uQWRkUHJvamVjdCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGlzTW9kYWxPcGVuOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgb25DbG9zZU1vZGFsKCkge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgaXNNb2RhbE9wZW46IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgb25DcmVhdGVQcm9qZWN0KHZhbHVlKSB7XG4gICAgdGhpcy5vbkNsb3NlTW9kYWwoKTtcbiAgICB0aGlzLnByb3BzLmFkZFByb2plY3QodmFsdWUpO1xuICB9XG5cbiAgdXBkYXRlU3RhdGUocGF5bG9hZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICAgIC4uLnBheWxvYWQsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc01vZGFsT3BlbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IG9uQ2hhbmdlU2VhcmNoLCBvbk9ubHlPcGVuLCBpc09ubHlPcGVuLCBzZWFyY2hWYWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFtcbiAgICAgIDxIZWFkZXJcbiAgICAgICAgb25BZGRQcm9qZWN0PXt0aGlzLm9uQWRkUHJvamVjdH1cbiAgICAgICAgb25DaGFuZ2VTZWFyY2g9e29uQ2hhbmdlU2VhcmNofVxuICAgICAgICBvbk9ubHlPcGVuPXtvbk9ubHlPcGVufVxuICAgICAgICBpc09ubHlPcGVuPXtpc09ubHlPcGVufVxuICAgICAgICBzZWFyY2hWYWx1ZT17c2VhcmNoVmFsdWV9XG4gICAgICAgIGtleT1cImhlYWRlci1jb250YWluZXJcIlxuICAgICAgLz4sXG4gICAgICBpc01vZGFsT3BlbiAmJiAoXG4gICAgICAgIDxBZGRQcm9qZWN0VmFjYW5jeUNvbnRhaW5lclxuICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uQ3JlYXRlUHJvamVjdH1cbiAgICAgICAgICBvbkNsb3NlPXt0aGlzLm9uQ2xvc2VNb2RhbH1cbiAgICAgICAgICB0aXRsZT1cItCd0L7QstGL0Lkg0L/RgNC+0LXQutGCXCJcbiAgICAgICAgICBrZXk9XCJhZGQtaGVhZGVyLWNvbnRhaW5lclwiXG4gICAgICAgIC8+KSxcbiAgICBdKTtcbiAgfVxufVxuXG5IZWFkZXJDb250YWluZXIucHJvcFR5cGVzID0ge1xuICBhZGRQcm9qZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZVNlYXJjaDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25Pbmx5T3BlbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaXNPbmx5T3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgc2VhcmNoVmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuSGVhZGVyQ29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe30pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoXG4gIGJpbmRBY3Rpb25DcmVhdG9ycyh7XG4gICAgYWRkUHJvamVjdCxcbiAgfSwgZGlzcGF0Y2gpXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KC8qIG1hcFN0YXRlVG9Qcm9wcyAqLyBudWxsLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEhlYWRlckNvbnRhaW5lcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbnRhaW5lcnMvSGVhZGVyQ29udGFpbmVyLmpzeCIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3JlcXVpcmUtZGVmYXVsdC1wcm9wcyAqL1xuaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgSW5wdXRUZXh0IGZyb20gJy4uL2NvbW1vbi9JbnB1dFRleHQnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJy4uL2NvbW1vbi9DaGVja2JveCc7XG5pbXBvcnQgQnV0dG9uRnVsbCBmcm9tICcuLi9jb21tb24vQnV0dG9uRnVsbCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5zY3NzJztcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvbkFkZFByb2plY3QsXG4gICAgICBvbk9ubHlPcGVuLFxuICAgICAgb25DaGFuZ2VTZWFyY2gsXG4gICAgICBpc09ubHlPcGVuLFxuICAgICAgc2VhcmNoVmFsdWUsXG4gICAgICBwbGFjZWhvbGRlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmhlYWRlcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwSW5wdXR9PlxuICAgICAgICAgIDxJbnB1dFRleHRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVNlYXJjaH1cbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgb25DbGljaz17b25Pbmx5T3Blbn1cbiAgICAgICAgICBjaGVja2VkPXtpc09ubHlPcGVufVxuICAgICAgICA+XG4gICAgICAgICAg0KLQvtC70YzQutC+INC+0YLQutGA0YvRgtGL0LVcbiAgICAgICAgPC9DaGVja2JveD5cbiAgICAgICAgPEJ1dHRvbkZ1bGwgb25DbGljaz17b25BZGRQcm9qZWN0fT5cbiAgICAgICAgICDQlNC+0LHQsNCy0LjRgtGMINC/0YDQvtC10LrRglxuICAgICAgICA8L0J1dHRvbkZ1bGw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIG9uQWRkUHJvamVjdDogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uT25seU9wZW46IFByb3BUeXBlcy5mdW5jLFxuICBvbkNoYW5nZVNlYXJjaDogUHJvcFR5cGVzLmZ1bmMsXG4gIGlzT25seU9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHNlYXJjaFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5IZWFkZXIuZGVmYXVsdFByb3BzID0ge1xuICBwbGFjZWhvbGRlcjogJ9C/0L7QuNGB0LonLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qc3giLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJQbGFjZWhvbGRlclwiOlwib0g5Uy1tOW5QckY3ajVrazQ2QkRNXCIsXCJCdXR0b25UZXh0XCI6XCJLOW10TXptRjQ0OXpBYnJTYUVwRDBcIixcIldoaXRlLXRleHQtYnV0dG9uXCI6XCJQM1c1N0N5REktbzhUa3JqaHpRUTlcIixcImlucHV0VGV4dFwiOlwiS2JhLTdLaDRyWXBXSWpiblZ1alNDIG9IOVMtbTluUHJGN2o1a2s0NkJETVwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvY29tbW9uL0lucHV0VGV4dC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9sYWJlbC1oYXMtZm9yICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLnNjc3MnO1xuXG5mdW5jdGlvbiBDaGVja2JveChwcm9wcykge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgY2hlY2tlZCxcbiAgICBvbkNsaWNrLFxuICB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1tzdHlsZS5jaGVja2JveCwgc3R5bGUuY2hlY2tib3hHbG9iYWxdfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICBpZD1cImF1dGhfYmxvY2tfc2F2ZV9mb3JcIlxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgLz5cbiAgICAgIDxsYWJlbCBodG1sRm9yPVwiYXV0aF9ibG9ja19zYXZlX2ZvclwiPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2xhYmVsPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cbkNoZWNrYm94LnByb3BUeXBlcyA9IHtcbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxufTtcbkNoZWNrYm94LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46ICdbKmNoZWNrYm94Kl0nLFxuICBjaGVja2VkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrYm94O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2NvbW1vbi9DaGVja2JveC9pbmRleC5qc3giLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJQbGFjZWhvbGRlclwiOlwiXzJ5ZTB2NU9CMVRLeW5sMlBzaW9FZ2FcIixcIkJ1dHRvblRleHRcIjpcIl8zTkJHNXptRlZYSjNqNVprZHg5M3Z6XCIsXCJXaGl0ZS10ZXh0LWJ1dHRvblwiOlwiXzF4NHdVNE9FVTllZzFtVWxjUWFISWFcIixcImNoZWNrYm94XCI6XCJfM19Tdzd3bE9RMGFGZ1hWamJsWWFrMyBfM05CRzV6bUZWWEozajVaa2R4OTN2elwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvY29tbW9uL0NoZWNrYm94L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlBsYWNlaG9sZGVyXCI6XCJfM3kzRE1MbnJuMHZvLUVUanlZYUEzMVwiLFwiQnV0dG9uVGV4dFwiOlwiazRDb1habHRINTFKaXIydW0wOGszXCIsXCJXaGl0ZS10ZXh0LWJ1dHRvblwiOlwiXzJqaG5wczY4d0F1UElnYWNQQVlPMXZcIixcImJ1dHRvbkJnXCI6XCJfMWktd3VHa1F1RmJOa2tibDZBR09McyBrNENvWFpsdEg1MUppcjJ1bTA4azNcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2NvbW1vbi9CdXR0b25GdWxsL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlBsYWNlaG9sZGVyXCI6XCJfMkYxSmkzMGVDbzNfYUpValBrR3ZFcVwiLFwiQnV0dG9uVGV4dFwiOlwiXzNBb1JmXzJ4Z05VbW01S1I4N1lPbUNcIixcIldoaXRlLXRleHQtYnV0dG9uXCI6XCJfMjE0MGVpR0xSejlNYTlkeG12U0s1OFwiLFwiaGVhZGVyXCI6XCJfNUJBYklIN1hQb19LcEJ6emxTQ0tUXCIsXCJ3cmFwSW5wdXRcIjpcIl8xdFJhdjQ5eDZGZVJxZTFiTjlmblpjXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9IZWFkZXIvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IElucHV0VGV4dCBmcm9tICcuLi9JbnB1dFRleHQnO1xuaW1wb3J0IEJ1dHRvbkZ1bGwgZnJvbSAnLi4vQnV0dG9uRnVsbCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5zY3NzJztcblxuZnVuY3Rpb24gQWRkUHJvamVjdFZhY2FuY3kocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIG9uU3VibWl0LFxuICAgIG9uQ2hhbmdlTmFtZSxcbiAgICB2YWx1ZSxcbiAgICBwbGFjZWhvbGRlcixcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgIHR5cGUsXG4gIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmJ1dHRvbn0+XG4gICAgICAgIDxCdXR0b25GdWxsXG4gICAgICAgICAgb25DbGljaz17b25TdWJtaXR9XG4gICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgPlxuICAgICAgICAgINCh0L7Qt9C00LDRgtGMXG4gICAgICAgIDwvQnV0dG9uRnVsbD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmlucHV0fT5cbiAgICAgICAgPElucHV0VGV4dFxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZU5hbWV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn1cblxuQWRkUHJvamVjdFZhY2FuY3kucHJvcFR5cGVzID0ge1xuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2VOYW1lOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcbkFkZFByb2plY3RWYWNhbmN5LmRlZmF1bHRQcm9wcyA9IHtcbiAgdHlwZTogJ3N1Ym1pdCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRQcm9qZWN0VmFjYW5jeTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9jb21tb24vQWRkUHJvamVjdFZhY2FuY3kvaW5kZXguanN4IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiUGxhY2Vob2xkZXJcIjpcIl8yaFJRa214N2hfaU5pb3l5R2lleFNUXCIsXCJCdXR0b25UZXh0XCI6XCJfM1hiTHJ2djRjZk00d05OMW9QTjZSd1wiLFwiV2hpdGUtdGV4dC1idXR0b25cIjpcIl8xWU9pcFVDelo4TDJYTjVpYm85SEM1XCIsXCJidXR0b25cIjpcIl8yX3RLMlZhMHp0VGFnTGNyX3VzdW1vXCIsXCJpbnB1dFwiOlwiXzNPbERReWFZLTZ5ZXpsRUpWbnlmbUdcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2NvbW1vbi9BZGRQcm9qZWN0VmFjYW5jeS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLnNjc3MnO1xuXG5mdW5jdGlvbiBCdXR0b25DbG9zZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICB2aWV3Qm94PVwiMCAwIDE0IDE0XCJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uQ2xvc2V9XG4gICAgPlxuICAgICAgPHBhdGhcbiAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgZD1cIk0xMy45NjkgMS40MDZMOC4zOSA2Ljk4NGw1LjU3OCA1LjU3OS0xLjQwNiAxLjQwNkw2Ljk4NCA4LjM5bC01LjU3OCA1LjU3OEwwIDEyLjU2M2w1LjU3OC01LjU3OUwwIDEuNDA2IDEuNDA2IDBsNS41NzggNS41NzhMMTIuNTYzIDB6XCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cbkJ1dHRvbkNsb3NlLnByb3BUeXBlcyA9IHt9O1xuQnV0dG9uQ2xvc2UuZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkNsb3NlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2NvbW1vbi9CdXR0b25DbG9zZS9pbmRleC5qc3giLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJQbGFjZWhvbGRlclwiOlwiXzNxcWlCOGwtVzQ1aEdOMGQ2dHd6UHdcIixcIkJ1dHRvblRleHRcIjpcIl8xWVhBM0NxdnNGVkJ1d2lfNHRXTi1VXCIsXCJXaGl0ZS10ZXh0LWJ1dHRvblwiOlwiXzJpQU0xSnBaS0JTVERiZnNsS3hpTzlcIixcImJ1dHRvbkNsb3NlXCI6XCJfMmpfVWxhZHROY3ZVSzhjWHFYMFo0MVwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbkNsb3NlL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJQbGFjZWhvbGRlclwiOlwiXzJoQXk4U2FSWksxeWZaYTVTdnZmM0dcIixcIkJ1dHRvblRleHRcIjpcIl8zcnJqTWZsQ3FHUjhaOEswcXJyR05XXCIsXCJXaGl0ZS10ZXh0LWJ1dHRvblwiOlwiTVF3Zl9lVEo1Q0NtcjNvdTlPdUFEXCIsXCJkaWFsb2dXaW5kb3dcIjpcIl8zSUhXMXhqbmdYeFA4TlJlR1BpeGlTXCIsXCJidXR0b25DbG9zZVwiOlwiXzM5Qk56dE5yTUViand6d1Joa3NpZktcIixcImhyXCI6XCJfM0ZkSXVVMUZMVDRkNzBzMXNGZ1dCaVwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvY29tbW9uL0RpYWxvZ1dpbmRvdy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiUGxhY2Vob2xkZXJcIjpcIl8yVGJtYUxJTXFLazdqMEpwaDNVNDdVXCIsXCJCdXR0b25UZXh0XCI6XCJfMnVlY2tOTlk1dGdDcjktbkN5Q1RqcVwiLFwiV2hpdGUtdGV4dC1idXR0b25cIjpcIl8ya1lGNGVIRm9rWDctVnFZMEpoMVpiXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9Nb2RhbC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgZ2VuZXJhdGVJRCA9IGZ1bmN0aW9uIGdlbmVyYXRlSUQoKSB7XG4gIHJldHVybiBgJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSl9YDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdlbmVyYXRlSUQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3V0aWxzL2dlbmVyYXRlSUQuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtcHJvcC10eXBlcyxyZWFjdC9uby11bnVzZWQtcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IGF1dG9CaW5kIGZyb20gJ3JlYWN0LWF1dG9iaW5kJztcblxuaW1wb3J0IFByb2plY3RMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvUHJvamVjdExpc3QnO1xuaW1wb3J0IEFkZFByb2plY3RWYWNhbmN5Q29udGFpbmVyIGZyb20gJy4vQWRkUHJvamVjdFZhY2FuY3lDb250YWluZXInO1xuaW1wb3J0IERlbGV0ZVByb2plY3RWYWNhbmN5IGZyb20gJy4uL2NvbXBvbmVudHMvY29tbW9uL0RlbGV0ZVByb2plY3RWYWNhbmN5JztcbmltcG9ydCB7XG4gIGFkZFZhY2FuY3ksXG4gIG9wZW5DbG9zZVByb2plY3QsXG4gIHJlbW92ZVByb2plY3QsXG59IGZyb20gJy4uL2FjdGlvbnMnO1xuaW1wb3J0IHsgcHJvamVjdFNlbGVjdG9yIH0gZnJvbSAnLi4vc2VsZWN0b3JzJztcblxuY2xhc3MgUHJvamVjdExpc3RDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICBhdXRvQmluZCh0aGlzKTtcbiAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNNb2RhbE9wZW46IGZhbHNlLFxuICAgICAgaXNNb2RhbE9wZW5EZWxldGU6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBvbkFkZChpZCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGlzTW9kYWxPcGVuOiB0cnVlLFxuICAgIH0pO1xuICB9XG5cbiAgb25EZWxldGUoaWQpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XG4gICAgICBpc01vZGFsT3BlbkRlbGV0ZTogdHJ1ZSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uT3BlbkNsb3NlKGlkKSB7XG4gICAgdGhpcy5wcm9wcy5vcGVuQ2xvc2VQcm9qZWN0KGlkKTtcbiAgfVxuXG4gIG9uQ2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGlzTW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgIGlzTW9kYWxPcGVuRGVsZXRlOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ3JlYXRlVmFjYW5jeSh2YWx1ZSkge1xuICAgIGNvbnN0IGlkID0gdGhpcy5pZDtcbiAgICB0aGlzLnJlc2V0SWQoKTtcbiAgICB0aGlzLm9uQ2xvc2VNb2RhbCgpO1xuICAgIHRoaXMucHJvcHMuYWRkVmFjYW5jeShpZCwgdmFsdWUpO1xuICB9XG5cbiAgb25EZWxldGVTdWJtaXQoKSB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmlkO1xuICAgIHRoaXMucmVzZXRJZCgpO1xuICAgIHRoaXMub25DbG9zZU1vZGFsKCk7XG4gICAgdGhpcy5wcm9wcy5yZW1vdmVQcm9qZWN0KGlkKTtcbiAgfVxuXG4gIHJlc2V0SWQoKSB7XG4gICAgdGhpcy5pZCA9IG51bGw7XG4gIH1cblxuICBvbkNsaWNrSGVhZGVyKCkge1xuXG4gIH1cblxuICB1cGRhdGVTdGF0ZShwYXlsb2FkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgICAgLi4ucGF5bG9hZCxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwcm9qZWN0cyxcbiAgICAgIHZhY2FuY2llcyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9wcm9wLXR5cGVzXG4gICAgICB0aXRsZU1vZGFsLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbiAgICAgIG5hbWVCdXR0b25Nb2RhbCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IGlzTW9kYWxPcGVuLCBpc01vZGFsT3BlbkRlbGV0ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFtcbiAgICAgIDxQcm9qZWN0TGlzdFxuICAgICAgICBwcm9qZWN0cz17cHJvamVjdHN9XG4gICAgICAgIHZhY2FuY2llcz17dmFjYW5jaWVzfVxuICAgICAgICBvbkRlbGV0ZT17dGhpcy5vbkRlbGV0ZX1cbiAgICAgICAgb25PcGVuQ2xvc2U9e3RoaXMub25PcGVuQ2xvc2V9XG4gICAgICAgIG9uQWRkPXt0aGlzLm9uQWRkfVxuICAgICAgICBvbkNsaWNrSGVhZGVyPXt0aGlzLm9uQ2xpY2tIZWFkZXJ9XG4gICAgICAgIGtleT1cInByb2plY3QtbGlzdFwiXG4gICAgICAvPixcbiAgICAgIGlzTW9kYWxPcGVuICYmIChcbiAgICAgICAgPEFkZFByb2plY3RWYWNhbmN5Q29udGFpbmVyXG4gICAgICAgICAgb25TdWJtaXQ9e3RoaXMub25DcmVhdGVWYWNhbmN5fVxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMub25DbG9zZU1vZGFsfVxuICAgICAgICAgIHRpdGxlPVwi0J3QvtCy0LDRjyDQstCw0LrQsNC90YHQuNGPXCJcbiAgICAgICAgICBrZXk9XCJhZGQtaGVhZGVyLWNvbnRhaW5lclwiXG4gICAgICAgIC8+KSxcbiAgICAgIGlzTW9kYWxPcGVuRGVsZXRlICYmIChcbiAgICAgICAgPERlbGV0ZVByb2plY3RWYWNhbmN5XG4gICAgICAgICAgdGl0bGU9e3RpdGxlTW9kYWx9XG4gICAgICAgICAgbmFtZT17bmFtZUJ1dHRvbk1vZGFsfVxuICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uRGVsZXRlU3VibWl0fVxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMub25DbG9zZU1vZGFsfVxuICAgICAgICAgIGtleT1cIm1vZGFsLWRlbGV0ZVwiXG4gICAgICAgIC8+KSxcbiAgICBdKTtcbiAgfVxufVxuXG5Qcm9qZWN0TGlzdENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIHByb2plY3RzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHZhY2FuY2llczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBhZGRWYWNhbmN5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICByZW1vdmVQcm9qZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvcGVuQ2xvc2VQcm9qZWN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpc09ubHlPcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzXG4gIHNlYXJjaFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblByb2plY3RMaXN0Q29udGFpbmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGVNb2RhbDogJ9Cj0LTQsNC70LjRgtGMINC/0YDQvtC10LrRgicsXG4gIG5hbWVCdXR0b25Nb2RhbDogJ9CU0LAnLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlLCBvd25Qcm9wcykgPT4ge1xuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RTZWxlY3RvcihzdGF0ZSwgb3duUHJvcHMpO1xuICByZXR1cm4gKHtcbiAgICBwcm9qZWN0cyxcbiAgICB2YWNhbmNpZXM6IHN0YXRlLnZhY2FuY2llcyxcbiAgfSk7XG59O1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoXG4gIGJpbmRBY3Rpb25DcmVhdG9ycyh7XG4gICAgYWRkVmFjYW5jeSxcbiAgICByZW1vdmVQcm9qZWN0LFxuICAgIG9wZW5DbG9zZVByb2plY3QsXG4gIH0sIGRpc3BhdGNoKVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoUHJvamVjdExpc3RDb250YWluZXIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb250YWluZXJzL1Byb2plY3RMaXN0Q29udGFpbmVyLmpzeCIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUHJvamVjdENvbnRhaW5lciBmcm9tICcuLi8uLi9jb250YWluZXJzL1Byb2plY3RDb250YWluZXInO1xuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbmNsYXNzIFByb2plY3RMaXN0IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwcm9qZWN0cyxcbiAgICAgIHZhY2FuY2llcyxcbiAgICAgIG9uQWRkLFxuICAgICAgb25EZWxldGUsXG4gICAgICBvbk9wZW5DbG9zZSxcbiAgICAgIG9uQ2xpY2tIZWFkZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge09iamVjdC5rZXlzKHByb2plY3RzKS5tYXAoKGtleSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBpc0Nsb3NlZCxcbiAgICAgICAgICAgIGl0ZW1zLFxuICAgICAgICAgIH0gPSBwcm9qZWN0c1trZXldO1xuICAgICAgICAgIGNvbnN0IHZhY3MgPSBpdGVtcy5tYXAoayA9PiB2YWNhbmNpZXNba10pO1xuICAgICAgICAgIGNvbnN0IG9uQWRkTG9jID0gKCkgPT4geyBvbkFkZChpZCk7IH07XG4gICAgICAgICAgY29uc3Qgb25EZWxldGVMb2MgPSAoKSA9PiB7IG9uRGVsZXRlKGlkKTsgfTtcbiAgICAgICAgICBjb25zdCBvbk9wZW5DbG9zZUxvYyA9ICgpID0+IHsgb25PcGVuQ2xvc2UoaWQpOyB9O1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UHJvamVjdENvbnRhaW5lclxuICAgICAgICAgICAgICBrZXk9e2lkfVxuICAgICAgICAgICAgICB2YWNhbmNpZXM9e3ZhY3N9XG4gICAgICAgICAgICAgIGlzQ2xvc2VkPXtpc0Nsb3NlZH1cbiAgICAgICAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICAgICAgICBvbkFkZD17b25BZGRMb2N9XG4gICAgICAgICAgICAgIG9uRGVsZXRlPXtvbkRlbGV0ZUxvY31cbiAgICAgICAgICAgICAgb25PcGVuQ2xvc2U9e29uT3BlbkNsb3NlTG9jfVxuICAgICAgICAgICAgICBvbkNsaWNrSGVhZGVyPXtvbkNsaWNrSGVhZGVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cblxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Qcm9qZWN0TGlzdC5wcm9wVHlwZXMgPSB7XG4gIHByb2plY3RzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHZhY2FuY2llczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBvbkFkZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25EZWxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uT3BlbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkNsaWNrSGVhZGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblByb2plY3RMaXN0LmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0TGlzdDtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL1Byb2plY3RMaXN0L2luZGV4LmpzeCIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBhdXRvQmluZCBmcm9tICdyZWFjdC1hdXRvYmluZCc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3QnO1xuXG5jbGFzcyBQcm9qZWN0Q29udGFpbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMsIGNvbnRleHQpIHtcbiAgICBzdXBlcihwcm9wcywgY29udGV4dCk7XG4gICAgYXV0b0JpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzVG9vZ2xlOiB0cnVlLFxuICAgIH07XG4gIH1cblxuICBvbkNsaWNrSGVhZGVyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaXNUb29nbGU6ICF0aGlzLnN0YXRlLmlzVG9vZ2xlLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhY2FuY2llcyxcbiAgICAgIGlzQ2xvc2VkLFxuICAgICAgdGl0bGUsXG4gICAgICBvbkFkZCxcbiAgICAgIG9uRGVsZXRlLFxuICAgICAgb25PcGVuQ2xvc2UsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxQcm9qZWN0XG4gICAgICAgIHZhY2FuY2llcz17dmFjYW5jaWVzfVxuICAgICAgICBpc0Nsb3NlZD17aXNDbG9zZWR9XG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgb25BZGQ9e29uQWRkfVxuICAgICAgICBvbkRlbGV0ZT17b25EZWxldGV9XG4gICAgICAgIG9uT3BlbkNsb3NlPXtvbk9wZW5DbG9zZX1cbiAgICAgICAgb25DbGlja0hlYWRlcj17dGhpcy5vbkNsaWNrSGVhZGVyfVxuICAgICAgICBpc1Rvb2dsZT17dGhpcy5zdGF0ZS5pc1Rvb2dsZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufVxuXG5Qcm9qZWN0Q29udGFpbmVyLnByb3BUeXBlcyA9IHtcbiAgdmFjYW5jaWVzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgaXNDbG9zZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9uQWRkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkRlbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25PcGVuQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2tIZWFkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuUHJvamVjdENvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdENvbnRhaW5lcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29udGFpbmVycy9Qcm9qZWN0Q29udGFpbmVyLmpzeCIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IFZhY2FuY3lMaXN0Q29udGFpbmVyIGZyb20gJy4uLy4uL2NvbnRhaW5lcnMvVmFjYW5jeUxpc3RDb250YWluZXInO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuc2Nzcyc7XG5cbmNsYXNzIFByb2plY3QgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHZhY2FuY2llcyxcbiAgICAgIGlzQ2xvc2VkLFxuICAgICAgdGl0bGUsXG4gICAgICBvbkFkZCxcbiAgICAgIG9uRGVsZXRlLFxuICAgICAgb25PcGVuQ2xvc2UsXG4gICAgICBpc1Rvb2dsZSxcbiAgICAgIG9uQ2xpY2tIZWFkZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYWN0aXZlQ2xhc3MgPSBpc1Rvb2dsZVxuICAgICAgPyAnYWN0aXZlJ1xuICAgICAgOiAnJztcbiAgICByZXR1cm4gKFxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtbc3R5bGUucHJvamVjdCwgYWN0aXZlQ2xhc3NdLmpvaW4oJyAnKX0+XG4gICAgICAgIDxIZWFkZXJcbiAgICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgICAgY291bnQ9e3ZhY2FuY2llcy5sZW5ndGh9XG4gICAgICAgICAgaXNDbG9zZWQ9e2lzQ2xvc2VkfVxuICAgICAgICAgIG9uQWRkPXtvbkFkZH1cbiAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGV9XG4gICAgICAgICAgb25PcGVuQ2xvc2U9e29uT3BlbkNsb3NlfVxuICAgICAgICAgIG9uQ2xpY2tIZWFkZXI9e29uQ2xpY2tIZWFkZXJ9XG4gICAgICAgIC8+XG4gICAgICAgIHtpc1Rvb2dsZSAmJiAoXG4gICAgICAgICAgPFZhY2FuY3lMaXN0Q29udGFpbmVyIHZhY2FuY2llcz17dmFjYW5jaWVzfSAvPlxuICAgICAgICApfVxuICAgICAgPC9hcnRpY2xlPlxuICAgICk7XG4gIH1cbn1cblxuUHJvamVjdC5wcm9wVHlwZXMgPSB7XG4gIHZhY2FuY2llczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGlzQ2xvc2VkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBpc1Rvb2dsZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgb25BZGQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uRGVsZXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbk9wZW5DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25DbGlja0hlYWRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5Qcm9qZWN0LmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL1Byb2plY3QvaW5kZXguanN4IiwiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBCb2R5IGZyb20gJy4vQm9keS9pbmRleCc7XG5pbXBvcnQgU2lkZUJ1dHRvbnMgZnJvbSAnLi4vLi4vY29tbW9uL1NpZGVCdXR0b25zJztcblxuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuc2Nzcyc7XG5cbmNsYXNzIFByb2plY3RIZWFkZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRpdGxlLFxuICAgICAgY291bnQsXG4gICAgICBpc0Nsb3NlZCxcbiAgICAgIG9uQWRkLFxuICAgICAgb25EZWxldGUsXG4gICAgICBvbk9wZW5DbG9zZSxcbiAgICAgIG9uQ2xpY2tIZWFkZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGUuc2VjdGlvblByb2plY3R9PlxuICAgICAgICA8aGVhZGVyIG9uQ2xpY2s9e29uQ2xpY2tIZWFkZXJ9PlxuICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxCb2R5XG4gICAgICAgICAgY291bnQ9e2NvdW50fVxuICAgICAgICAgIGlzQ2xvc2VkPXtpc0Nsb3NlZH1cbiAgICAgICAgICBvbkFkZD17b25BZGR9XG4gICAgICAgIC8+XG4gICAgICAgIDxTaWRlQnV0dG9uc1xuICAgICAgICAgIG9uRGVsZXRlPXtvbkRlbGV0ZX1cbiAgICAgICAgICBvbkNsaWNrPXtvbk9wZW5DbG9zZX1cbiAgICAgICAgICBpc0Nsb3NlZD17aXNDbG9zZWR9XG4gICAgICAgID5cbiAgICAgICAgICB7e1xuICAgICAgICAgICAgZmFsc2U6ICfQl9Cw0LrRgNGL0YLRjCDQv9GA0L7QtdC60YInLFxuICAgICAgICAgICAgdHJ1ZTogJ9Ce0YLQutGA0YvRgtGMINC/0YDQvtC10LrRgicsXG4gICAgICAgICAgfVtpc0Nsb3NlZF19XG4gICAgICAgIDwvU2lkZUJ1dHRvbnM+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5Qcm9qZWN0SGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaXNDbG9zZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQWRkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvbkRlbGV0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25PcGVuQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uQ2xpY2tIZWFkZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuUHJvamVjdEhlYWRlci5kZWZhdWx0UHJvcHMgPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdEhlYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9Qcm9qZWN0L0hlYWRlci9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBHcmVlbiBmcm9tICcuLi8uLi8uLi9jb21tb24vQnV0dG9uT3V0bGluZS9HcmVlbic7XG5pbXBvcnQgQ2tlY2tJY29uIGZyb20gJy4uLy4uLy4uL2NvbW1vbi9Da2Vja0ljb24nO1xuaW1wb3J0IGRlY2xPZk51bSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9kZWNsT2ZOdW0nO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuc2Nzcyc7XG5cbmNsYXNzIEJvZHkgZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNvdW50LFxuICAgICAgaXNDbG9zZWQsXG4gICAgICBvbkFkZCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB0aXRsZSA9IGRlY2xPZk51bShjb3VudCwgWyfQstCw0LrQsNC90YHQuNGPJywgJ9Cy0LDQutCw0L3RgdC40LgnLCAn0LLQsNC60LDQvdGB0LjQuSddKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZS5hcnRpY2xlQm9keX0+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUuYXJ0aWNsZVNwYW59PlxuICAgICAgICAgIHtjb3VudH0ge3RpdGxlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHt7XG4gICAgICAgICAgZmFsc2U6IChcbiAgICAgICAgICAgIDxHcmVlbiBvbkNsaWNrPXtvbkFkZH0+XG4gICAgICAgICAgICAgINCU0L7QsdCw0LLQuNGC0Ywg0LLQsNC60LDQvdGB0LjRjlxuICAgICAgICAgICAgPC9HcmVlbj4pLFxuICAgICAgICAgIHRydWU6IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jbG9zZWR9PlxuICAgICAgICAgICAgICA8Q2tlY2tJY29uIC8+XG4gICAgICAgICAgICAgIDxzcGFuPtCf0YDQvtC10LrRgiDQt9Cw0LrRgNGL0YIsINGB0L7RgtGA0YPQtNC90LjQutC4INC90LDQvdGP0YLRizwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PiksXG4gICAgICAgIH1baXNDbG9zZWRdfVxuXG4gICAgICA8L2FydGljbGU+XG4gICAgKTtcbiAgfVxufVxuXG5Cb2R5LnByb3BUeXBlcyA9IHtcbiAgY291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgaXNDbG9zZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG9uQWRkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbkJvZHkuZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IEJvZHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvUHJvamVjdC9IZWFkZXIvQm9keS9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vc3R5bGUuc2Nzcyc7XG5cbmZ1bmN0aW9uIEdyZWVuKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBjaGlsZHJlbixcbiAgICBvbkNsaWNrLFxuICB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPEJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtzdHlsZS5idXR0b25HcmVlbk91dGxpbmV9XG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0J1dHRvbj5cbiAgKTtcbn1cblxuR3JlZW4ucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbkdyZWVuLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBHcmVlbjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9jb21tb24vQnV0dG9uT3V0bGluZS9HcmVlbi5qc3giLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJQbGFjZWhvbGRlclwiOlwiXzN3UGk5OGRGQkpDVS0xelAyaVcycXBcIixcIkJ1dHRvblRleHRcIjpcIl8yWkwteVlETjlTc29BaUtib1prTE1JXCIsXCJXaGl0ZS10ZXh0LWJ1dHRvblwiOlwiXzNKbjQwZTVkQmVXTkxsYndMZEdLRmVcIixcImNoZWNrSWNvblwiOlwiXzJoZFZPSHhvdWFWWWVTSHIyX3Z5RThcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2NvbW1vbi9Da2Vja0ljb24vc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlY2xPZk51bShudW1iZXIsIHRpdGxlcykge1xuICBjb25zdCBjYXNlcyA9IFsyLCAwLCAxLCAxLCAxLCAyXTtcbiAgcmV0dXJuIHRpdGxlc1sobnVtYmVyICUgMTAwID4gNCAmJiBudW1iZXIgJSAxMDAgPCAyMClcbiAgICA/IDJcbiAgICA6IGNhc2VzWyhudW1iZXIgJSAxMCA8IDUpXG4gICAgICA/IG51bWJlciAlIDEwXG4gICAgICA6IDVdXTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvdXRpbHMvZGVjbE9mTnVtLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiUGxhY2Vob2xkZXJcIjpcIl8zeWdjTlZOdU5SREhpRDBYOEVXb3BzXCIsXCJCdXR0b25UZXh0XCI6XCJJbVczcE5QUXFsX1piMm1HU1NnbHJcIixcIldoaXRlLXRleHQtYnV0dG9uXCI6XCJIZHdlTXRiR29TbDJIQWpJYlJnaHFcIixcImNsb3NlZFwiOlwiXzF0N3BRalM3R1JjanZ4RV9HeGZyd3BcIixcImFydGljbGVTcGFuXCI6XCJfMThRV2IwMnN4bkwyWFYwOGNFX1QzUSBJbVczcE5QUXFsX1piMm1HU1NnbHJcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL1Byb2plY3QvSGVhZGVyL0JvZHkvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbic7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5zY3NzJztcblxuZnVuY3Rpb24gR3JheShwcm9wcykge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgb25DbGljayxcbiAgfSA9IHByb3BzO1xuICByZXR1cm4gKFxuICAgIDxCdXR0b25cbiAgICAgIGNsYXNzTmFtZT17c3R5bGUuYnV0dG9uQmxhY2tPdXRsaW5lfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9CdXR0b24+XG4gICk7XG59XG5cbkdyYXkucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbkdyYXkuZGVmYXVsdFByb3BzID0ge307XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvY29tbW9uL0J1dHRvbk91dGxpbmUvR3JleS5qc3giLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJQbGFjZWhvbGRlclwiOlwiXzE0a18waEJGUU9zR2dEczJvUmVyMzdcIixcIkJ1dHRvblRleHRcIjpcIl8xVHpZYVpYcnBNRGJwSWxFcndZS3VhXCIsXCJXaGl0ZS10ZXh0LWJ1dHRvblwiOlwiXzFMN29XMUMwb3BZLUFralJlNmVtdHNcIixcImJ1dHRvblNldFwiOlwicDJYTzY4NkZDa0xTWUltQ1lWQ201XCIsXCJidXR0b25DbGlja1wiOlwidlNvYXo3U0Z4THJkRFlYamZpa0ZDXCIsXCJidXR0b25EZWxldGVcIjpcIl8xSGd5d1p0U1QxMzV3NTN5VlNDNERLXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9jb21tb24vU2lkZUJ1dHRvbnMvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlBsYWNlaG9sZGVyXCI6XCJfM1ZhVlNUVDA5ckZNTEp3YURsNEszcVwiLFwiQnV0dG9uVGV4dFwiOlwiXzE4bmVUaC16eXJpUm1HUGlkSEtFU2NcIixcIldoaXRlLXRleHQtYnV0dG9uXCI6XCJFSzd5bUYtODNUbHZfcUdBaEp3TkFcIixcInNlY3Rpb25Qcm9qZWN0XCI6XCJfM042Ni1FNVNFZ2p4eUFneUZ5MDdIcFwifTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbXBvbmVudHMvUHJvamVjdC9IZWFkZXIvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgYXV0b0JpbmQgZnJvbSAncmVhY3QtYXV0b2JpbmQnO1xuXG5pbXBvcnQgVmFjYW5jeUxpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9WYWNhbmN5TGlzdCc7XG5pbXBvcnQgRGVsZXRlUHJvamVjdFZhY2FuY3kgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vRGVsZXRlUHJvamVjdFZhY2FuY3knO1xuaW1wb3J0IHtcbiAgb3BlbkNsb3NlVmFjYW5jaWVzLFxuICByZW1vdmVWYWNhbmN5LFxufSBmcm9tICcuLi9hY3Rpb25zJztcblxuY2xhc3MgVmFjYW5jeUxpc3RDb250YWluZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgIHN1cGVyKHByb3BzLCBjb250ZXh0KTtcbiAgICBhdXRvQmluZCh0aGlzKTtcbiAgICB0aGlzLmlkID0gbnVsbDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNNb2RhbE9wZW46IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBvbk9wZW5DbG9zZShpZCkge1xuICAgIHRoaXMucHJvcHMub3BlbkNsb3NlVmFjYW5jaWVzKGlkKTtcbiAgfVxuXG4gIG9uQ2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHtcbiAgICAgIGlzTW9kYWxPcGVuOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIG9uRGVsZXRlKGlkKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudXBkYXRlU3RhdGUoe1xuICAgICAgaXNNb2RhbE9wZW46IHRydWUsXG4gICAgfSk7XG4gIH1cblxuICBvbkRlbGV0ZVN1Ym1pdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMub25DbG9zZU1vZGFsKCk7XG4gICAgY29uc3QgdmFjYW5jeSA9IHRoaXMudmFjYW5jeTtcbiAgICB0aGlzLnJlc2V0VmFjYW5jeSgpO1xuICAgIHRoaXMucHJvcHMucmVtb3ZlVmFjYW5jeSh2YWNhbmN5KTtcbiAgfVxuXG4gIHJlc2V0VmFjYW5jeSgpIHtcbiAgICB0aGlzLmlkID0gbnVsbDtcbiAgfVxuXG4gIHVwZGF0ZVN0YXRlKHBheWxvYWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgICAuLi5wYXlsb2FkLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNNb2RhbE9wZW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgdmFjYW5jaWVzLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L3Byb3AtdHlwZXNcbiAgICAgIHRpdGxlTW9kYWwsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgICAgbmFtZUJ1dHRvbk1vZGFsLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoW1xuICAgICAgPFZhY2FuY3lMaXN0XG4gICAgICAgIHZhY2FuY2llcz17dmFjYW5jaWVzfVxuICAgICAgICBvbkRlbGV0ZT17dGhpcy5vbkRlbGV0ZX1cbiAgICAgICAgb25PcGVuQ2xvc2U9e3RoaXMub25PcGVuQ2xvc2V9XG4gICAgICAgIGtleT1cInZhY2FuY3ktbGlzdFwiXG4gICAgICAvPixcbiAgICAgIGlzTW9kYWxPcGVuICYmIChcbiAgICAgICAgPERlbGV0ZVByb2plY3RWYWNhbmN5XG4gICAgICAgICAgdGl0bGU9e3RpdGxlTW9kYWx9XG4gICAgICAgICAgbmFtZT17bmFtZUJ1dHRvbk1vZGFsfVxuICAgICAgICAgIG9uU3VibWl0PXt0aGlzLm9uRGVsZXRlU3VibWl0fVxuICAgICAgICAgIG9uQ2xvc2U9e3RoaXMub25DbG9zZU1vZGFsfVxuICAgICAgICAgIGtleT1cIm1vZGFsLWRlbGV0ZVwiXG4gICAgICAgIC8+KSxcbiAgICBdKTtcbiAgfVxufVxuXG5WYWNhbmN5TGlzdENvbnRhaW5lci5wcm9wVHlwZXMgPSB7XG4gIHZhY2FuY2llczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHJlbW92ZVZhY2FuY3k6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9wZW5DbG9zZVZhY2FuY2llczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5WYWNhbmN5TGlzdENvbnRhaW5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIHRpdGxlTW9kYWw6ICfQo9C00LDQu9C40YLRjCDQstCw0LrQsNC90YHQuNGOJyxcbiAgbmFtZUJ1dHRvbk1vZGFsOiAn0JTQsCcsXG59O1xuXG4vLyBjb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe30pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoXG4gIGJpbmRBY3Rpb25DcmVhdG9ycyh7XG4gICAgcmVtb3ZlVmFjYW5jeSxcbiAgICBvcGVuQ2xvc2VWYWNhbmNpZXMsXG4gIH0sIGRpc3BhdGNoKVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgvKiBtYXBTdGF0ZVRvUHJvcHMgKi8gbnVsbCwgbWFwRGlzcGF0Y2hUb1Byb3BzKShWYWNhbmN5TGlzdENvbnRhaW5lcik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbnRhaW5lcnMvVmFjYW5jeUxpc3RDb250YWluZXIuanN4IiwiLyogZXNsaW50LWRpc2FibGUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBWYWNhbmN5IGZyb20gJy4uL1ZhY2FuY3knO1xuXG5jbGFzcyBWYWNhbmN5TGlzdCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdmFjYW5jaWVzLFxuICAgICAgb25EZWxldGUsXG4gICAgICBvbk9wZW5DbG9zZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge1xuICAgICAgICAgIE9iamVjdC5rZXlzKHZhY2FuY2llcykubWFwKChrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhY2FuY3kgPSB2YWNhbmNpZXNba2V5XTtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICBpc0Nsb3NlZCxcbiAgICAgICAgICAgIH0gPSB2YWNhbmN5O1xuICAgICAgICAgICAgY29uc3Qgb25EZWxldGVMb2MgPSAoKSA9PiB7IG9uRGVsZXRlKGlkKTsgfTtcbiAgICAgICAgICAgIGNvbnN0IG9uT3BlbkNsb3NlTG9jID0gKCkgPT4geyBvbk9wZW5DbG9zZShpZCk7IH07XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8VmFjYW5jeVxuICAgICAgICAgICAgICAgIGtleT17aWR9XG4gICAgICAgICAgICAgICAgaXNDbG9zZWQ9e2lzQ2xvc2VkfVxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICBvbk9wZW5DbG9zZT17b25PcGVuQ2xvc2VMb2N9XG4gICAgICAgICAgICAgICAgb25EZWxldGU9e29uRGVsZXRlTG9jfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblZhY2FuY3lMaXN0LnByb3BUeXBlcyA9IHtcbiAgdmFjYW5jaWVzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgb25EZWxldGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uT3BlbkNsb3NlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblZhY2FuY3lMaXN0LmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBWYWNhbmN5TGlzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9WYWNhbmN5TGlzdC9pbmRleC5qc3giLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU2lkZUJ1dHRvbnMgZnJvbSAnLi4vY29tbW9uL1NpZGVCdXR0b25zJztcbmltcG9ydCBCb2R5IGZyb20gJy4vQm9keSc7XG5cbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLnNjc3MnO1xuXG5jbGFzcyBWYWNhbmN5IGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSxcbiAgICAgIGlzQ2xvc2VkLFxuICAgICAgb25EZWxldGUsXG4gICAgICBvbk9wZW5DbG9zZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtzdHlsZS5hcnRpY2xlUHJvamVjdH0+XG4gICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPEJvZHkgaXNDbG9zZWQ9e2lzQ2xvc2VkfSAvPlxuICAgICAgICA8U2lkZUJ1dHRvbnNcbiAgICAgICAgICBvbkRlbGV0ZT17b25EZWxldGV9XG4gICAgICAgICAgb25DbGljaz17b25PcGVuQ2xvc2V9XG4gICAgICAgID5cbiAgICAgICAgICB7e1xuICAgICAgICAgICAgZmFsc2U6ICfQl9Cw0LrRgNGL0YLRjCDQstCw0LrQsNC90YHQuNGOJyxcbiAgICAgICAgICAgIHRydWU6ICfQntGC0LrRgNGL0YLRjCDQstCw0LrQsNC90YHQuNGOJyxcbiAgICAgICAgICB9W2lzQ2xvc2VkXX1cbiAgICAgICAgPC9TaWRlQnV0dG9ucz5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICApO1xuICB9XG59XG5cblZhY2FuY3kucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaXNDbG9zZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkRlbGV0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uT3BlbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5WYWNhbmN5LmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBWYWNhbmN5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL1ZhY2FuY3kvaW5kZXguanN4IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICcuLi8uLi9jb21tb24vU2VhcmNoSWNvbic7XG5pbXBvcnQgQ2tlY2tJY29uIGZyb20gJy4uLy4uL2NvbW1vbi9Da2Vja0ljb24nO1xuXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9zdHlsZS5zY3NzJztcblxuY2xhc3MgQm9keSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0Nsb3NlZCB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZS52YWNhbmN5fT5cbiAgICAgICAge3tcbiAgICAgICAgICBmYWxzZTogKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPFNlYXJjaEljb24gLz5cbiAgICAgICAgICAgICAgPHNwYW4+0JLQsNC60LDQvdGB0LjRjyDQvtGC0LrRgNGL0YLQsCwg0LjQtNC10YIg0L/QvtC00LHQvtGAINC60LDQvdC00LjQtNCw0YLQvtCyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+KSxcbiAgICAgICAgICB0cnVlOiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8Q2tlY2tJY29uIC8+XG4gICAgICAgICAgICAgIDxzcGFuPtCS0LDQutCw0L3RgdC40Y8g0LfQsNC60YDRi9GC0LAsINGB0L7RgtGA0YPQtNC90LjQuiDQvdCw0L3Rj9GCPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+KSxcbiAgICAgICAgfVtpc0Nsb3NlZF19XG4gICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbiAgfVxufVxuXG5Cb2R5LnByb3BUeXBlcyA9IHtcbiAgaXNDbG9zZWQ6IFByb3BUeXBlcy5ib29sLFxufTtcbkJvZHkuZGVmYXVsdFByb3BzID0ge1xuICBpc0Nsb3NlZDogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJvZHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvVmFjYW5jeS9Cb2R5L2luZGV4LmpzeCIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCBSZWFjdCwge1xuICBQcm9wVHlwZXMsXG59IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZSBmcm9tICcuL3N0eWxlLnNjc3MnO1xuXG5mdW5jdGlvbiBTZWFyY2hJY29uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPHN2Z1xuICAgICAgdmlld0JveD1cIjAgMCAyMCAyMFwiXG4gICAgICBjbGFzc05hbWU9e3N0eWxlLnNlYXJjaEljb259XG4gICAgPlxuICAgICAgPHBhdGggZD1cIk0xNS41IDE0aC0uNzlsLS4yOC0uMjdDMTUuNDEgMTIuNTkgMTYgMTEuMTEgMTYgOS41IDE2IDUuOTEgMTMuMDkgMyA5LjUgM1MzIDUuOTEgMyA5LjUgNS45MSAxNiA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0elwiIC8+XG4gICAgICA8cGF0aFxuICAgICAgICBkPVwiTTAgMGgyNHYyNEgwelwiXG4gICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG5cblNlYXJjaEljb24ucHJvcFR5cGVzID0ge307XG5TZWFyY2hJY29uLmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hJY29uO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL2NvbW1vbi9TZWFyY2hJY29uL2luZGV4LmpzeCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlBsYWNlaG9sZGVyXCI6XCJfMU50aHJKRVdqU0ktZk5LQUFiT2l5NlwiLFwiQnV0dG9uVGV4dFwiOlwiXzNGMFBOZzhJeFh2bThSWHBic1JxRU1cIixcIldoaXRlLXRleHQtYnV0dG9uXCI6XCJfM29xWVNWVGZDYVZRbzdZeXExMndWRlwiLFwic2VhcmNoSWNvblwiOlwiXzFzNmowRHNLVFJkWkdBeUdMZGc0UXNcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2NvbW1vbi9TZWFyY2hJY29uL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxubW9kdWxlLmV4cG9ydHMgPSB7XCJQbGFjZWhvbGRlclwiOlwiXzFFWmZoTDVnZHJEaGdldmNGc1YxM1BcIixcIkJ1dHRvblRleHRcIjpcIl8zZ1FpREhVc2xfYkJGZmJsTHpGbHFhXCIsXCJXaGl0ZS10ZXh0LWJ1dHRvblwiOlwiXzNXQ1Vqb1dOWEhuVm9wa2NoeURfTElcIixcInZhY2FuY3lcIjpcIl8zcjZIWkgtT0xfX19sbzZJb3Q5Vm5PXCJ9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29tcG9uZW50cy9WYWNhbmN5L0JvZHkvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlBsYWNlaG9sZGVyXCI6XCJYM0g2MjhnSlM1Tno5N0lJQ29mM1VcIixcIkJ1dHRvblRleHRcIjpcIl8xem5zbmZFM3F2NGk3d1J3SGVKcWVyXCIsXCJXaGl0ZS10ZXh0LWJ1dHRvblwiOlwiXzFFZ0ZfdmdpZ0UzNnN3dFhfeks2NGVcIixcImFydGljbGVQcm9qZWN0XCI6XCJfeTFiZU9LcWpOU09rU0NMSF9zNFlcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL1ZhY2FuY3kvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5tb2R1bGUuZXhwb3J0cyA9IHtcIlBsYWNlaG9sZGVyXCI6XCJYaWdhcG5ZZ0FBQVIzQVZtc1ZNb2NcIixcIkJ1dHRvblRleHRcIjpcIl8xeXVScEJKbkxYNDRJSUpES3NlS0NXXCIsXCJXaGl0ZS10ZXh0LWJ1dHRvblwiOlwiXzJ6U3hhWlA4Y2JveV9OT2xfT0xJdHRcIixcImJ1dHRvblwiOlwiXzFEdjY2bHhna25KS05ORTlobVIyNndcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL2NvbW1vbi9EZWxldGVQcm9qZWN0VmFjYW5jeS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wiUGxhY2Vob2xkZXJcIjpcIl8xdFJmUXdKSGNvdU1FaDJhWFdpWnBWXCIsXCJCdXR0b25UZXh0XCI6XCJiSXB0ZmtPVmhZNWd0YlJqeHAzT1RcIixcIldoaXRlLXRleHQtYnV0dG9uXCI6XCJfMjlqaGh2a2xKNzdOZGZPQmJyOGhaR1wiLFwicHJvamVjdFwiOlwiXzMwdDBBMldBYWJ2amh1RmV5UTBEMXZcIn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL1Byb2plY3Qvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb21wb25lbnRzL1Byb2plY3RMaXN0L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBjcmVhdGVTZWxlY3RvciB9IGZyb20gJ3Jlc2VsZWN0JztcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICcuLi91dGlscy9jaGVjayc7XG5cbmNvbnN0IHByb2plY3RzU2VsZWN0b3IgPSBzdGF0ZSA9PiBzdGF0ZS5wcm9qZWN0cztcbmNvbnN0IHZhY2FuY2llc1NlbGVjdG9yID0gc3RhdGUgPT4gc3RhdGUudmFjYW5jaWVzO1xuY29uc3Qgc2VhcmNoU2VsZWN0b3IgPSAoXywgcHJvcHMpID0+ICh7XG4gIHNlYXJjaFZhbHVlOiBwcm9wcy5zZWFyY2hWYWx1ZSxcbiAgaXNPbmx5T3BlbjogcHJvcHMuaXNPbmx5T3Blbixcbn0pO1xuXG5leHBvcnQgY29uc3QgcHJvamVjdFNlbGVjdG9yID0gY3JlYXRlU2VsZWN0b3IoXG4gIHByb2plY3RzU2VsZWN0b3IsXG4gIHZhY2FuY2llc1NlbGVjdG9yLFxuICBzZWFyY2hTZWxlY3RvcixcbiAgKHByb2plY3RzLCB2YWNhbmNpZXMsIHNlYXJjaE9iaikgPT4ge1xuICAgIGNvbnN0IHsgc2VhcmNoVmFsdWUsIGlzT25seU9wZW4gfSA9IHNlYXJjaE9iajtcbiAgICBpZiAoaXNFbXB0eShzZWFyY2hWYWx1ZSkpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgT2JqZWN0LmtleXMocHJvamVjdHMpLmZvckVhY2goKGtleVByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0c1trZXlQcm9qZWN0XTtcbiAgICAgIGNvbnN0IHsgaXRlbXMgfSA9IHByb2plY3Q7XG4gICAgICBjb25zdCBuZXdJdGVtcyA9IGl0ZW1zLmZpbHRlcigoaWQpID0+IHtcbiAgICAgICAgY29uc3QgdmFjYW5jeSA9IHZhY2FuY2llc1tpZF07XG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIGlzQ2xvc2VkIH0gPSB2YWNhbmN5O1xuICAgICAgICBjb25zdCBpc1NlYXJjaCA9IHRpdGxlLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hWYWx1ZS50b0xvd2VyQ2FzZSgpKSA+IC0xO1xuICAgICAgICByZXR1cm4gaXNPbmx5T3BlblxuICAgICAgICAgID8gaXNTZWFyY2ggJiYgIWlzQ2xvc2VkXG4gICAgICAgICAgOiBpc1NlYXJjaDtcbiAgICAgIH0pO1xuICAgICAgaWYgKCFpc0VtcHR5KG5ld0l0ZW1zKSkge1xuICAgICAgICAvLyDQtdGB0YLRjCDQstCw0LrQsNC90YHQuNC4INGD0LTQvtCy0LvQtdGC0LLQvtGA0Y/RjtGJ0LjQtSDRg9GB0LvQvtCy0LjRj9C8XG4gICAgICAgIHJlc3VsdFtrZXlQcm9qZWN0XSA9IHtcbiAgICAgICAgICAuLi5wcm9qZWN0LFxuICAgICAgICAgIGl0ZW1zOiBuZXdJdGVtcyxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkZWJ1Z2dlcjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2VsZWN0b3JzL2luZGV4LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5kZWZhdWx0TWVtb2l6ZSA9IGRlZmF1bHRNZW1vaXplO1xuZXhwb3J0cy5jcmVhdGVTZWxlY3RvckNyZWF0b3IgPSBjcmVhdGVTZWxlY3RvckNyZWF0b3I7XG5leHBvcnRzLmNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvciA9IGNyZWF0ZVN0cnVjdHVyZWRTZWxlY3RvcjtcbmZ1bmN0aW9uIGRlZmF1bHRFcXVhbGl0eUNoZWNrKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59XG5cbmZ1bmN0aW9uIGFyZUFyZ3VtZW50c1NoYWxsb3dseUVxdWFsKGVxdWFsaXR5Q2hlY2ssIHByZXYsIG5leHQpIHtcbiAgaWYgKHByZXYgPT09IG51bGwgfHwgbmV4dCA9PT0gbnVsbCB8fCBwcmV2Lmxlbmd0aCAhPT0gbmV4dC5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBEbyB0aGlzIGluIGEgZm9yIGxvb3AgKGFuZCBub3QgYSBgZm9yRWFjaGAgb3IgYW4gYGV2ZXJ5YCkgc28gd2UgY2FuIGRldGVybWluZSBlcXVhbGl0eSBhcyBmYXN0IGFzIHBvc3NpYmxlLlxuICB2YXIgbGVuZ3RoID0gcHJldi5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIWVxdWFsaXR5Q2hlY2socHJldltpXSwgbmV4dFtpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdE1lbW9pemUoZnVuYykge1xuICB2YXIgZXF1YWxpdHlDaGVjayA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZGVmYXVsdEVxdWFsaXR5Q2hlY2s7XG5cbiAgdmFyIGxhc3RBcmdzID0gbnVsbDtcbiAgdmFyIGxhc3RSZXN1bHQgPSBudWxsO1xuICAvLyB3ZSByZWZlcmVuY2UgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIHRoZW0gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnNcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWFyZUFyZ3VtZW50c1NoYWxsb3dseUVxdWFsKGVxdWFsaXR5Q2hlY2ssIGxhc3RBcmdzLCBhcmd1bWVudHMpKSB7XG4gICAgICAvLyBhcHBseSBhcmd1bWVudHMgaW5zdGVhZCBvZiBzcHJlYWRpbmcgZm9yIHBlcmZvcm1hbmNlLlxuICAgICAgbGFzdFJlc3VsdCA9IGZ1bmMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGVwZW5kZW5jaWVzKGZ1bmNzKSB7XG4gIHZhciBkZXBlbmRlbmNpZXMgPSBBcnJheS5pc0FycmF5KGZ1bmNzWzBdKSA/IGZ1bmNzWzBdIDogZnVuY3M7XG5cbiAgaWYgKCFkZXBlbmRlbmNpZXMuZXZlcnkoZnVuY3Rpb24gKGRlcCkge1xuICAgIHJldHVybiB0eXBlb2YgZGVwID09PSAnZnVuY3Rpb24nO1xuICB9KSkge1xuICAgIHZhciBkZXBlbmRlbmN5VHlwZXMgPSBkZXBlbmRlbmNpZXMubWFwKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIHJldHVybiB0eXBlb2YgZGVwO1xuICAgIH0pLmpvaW4oJywgJyk7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTZWxlY3RvciBjcmVhdG9ycyBleHBlY3QgYWxsIGlucHV0LXNlbGVjdG9ycyB0byBiZSBmdW5jdGlvbnMsICcgKyAoJ2luc3RlYWQgcmVjZWl2ZWQgdGhlIGZvbGxvd2luZyB0eXBlczogWycgKyBkZXBlbmRlbmN5VHlwZXMgKyAnXScpKTtcbiAgfVxuXG4gIHJldHVybiBkZXBlbmRlbmNpZXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNlbGVjdG9yQ3JlYXRvcihtZW1vaXplKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBtZW1vaXplT3B0aW9ucyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBtZW1vaXplT3B0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgZnVuY3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgcmVjb21wdXRhdGlvbnMgPSAwO1xuICAgIHZhciByZXN1bHRGdW5jID0gZnVuY3MucG9wKCk7XG4gICAgdmFyIGRlcGVuZGVuY2llcyA9IGdldERlcGVuZGVuY2llcyhmdW5jcyk7XG5cbiAgICB2YXIgbWVtb2l6ZWRSZXN1bHRGdW5jID0gbWVtb2l6ZS5hcHBseSh1bmRlZmluZWQsIFtmdW5jdGlvbiAoKSB7XG4gICAgICByZWNvbXB1dGF0aW9ucysrO1xuICAgICAgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGZvciBwZXJmb3JtYW5jZS5cbiAgICAgIHJldHVybiByZXN1bHRGdW5jLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfV0uY29uY2F0KG1lbW9pemVPcHRpb25zKSk7XG5cbiAgICAvLyBJZiBhIHNlbGVjdG9yIGlzIGNhbGxlZCB3aXRoIHRoZSBleGFjdCBzYW1lIGFyZ3VtZW50cyB3ZSBkb24ndCBuZWVkIHRvIHRyYXZlcnNlIG91ciBkZXBlbmRlbmNpZXMgYWdhaW4uXG4gICAgdmFyIHNlbGVjdG9yID0gZGVmYXVsdE1lbW9pemUoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgdmFyIGxlbmd0aCA9IGRlcGVuZGVuY2llcy5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGFuZCBtdXRhdGUgYSBsb2NhbCBsaXN0IG9mIHBhcmFtcyBmb3IgcGVyZm9ybWFuY2UuXG4gICAgICAgIHBhcmFtcy5wdXNoKGRlcGVuZGVuY2llc1tpXS5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgICAgIH1cblxuICAgICAgLy8gYXBwbHkgYXJndW1lbnRzIGluc3RlYWQgb2Ygc3ByZWFkaW5nIGZvciBwZXJmb3JtYW5jZS5cbiAgICAgIHJldHVybiBtZW1vaXplZFJlc3VsdEZ1bmMuYXBwbHkobnVsbCwgcGFyYW1zKTtcbiAgICB9KTtcblxuICAgIHNlbGVjdG9yLnJlc3VsdEZ1bmMgPSByZXN1bHRGdW5jO1xuICAgIHNlbGVjdG9yLnJlY29tcHV0YXRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHJlY29tcHV0YXRpb25zO1xuICAgIH07XG4gICAgc2VsZWN0b3IucmVzZXRSZWNvbXB1dGF0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZWNvbXB1dGF0aW9ucyA9IDA7XG4gICAgfTtcbiAgICByZXR1cm4gc2VsZWN0b3I7XG4gIH07XG59XG5cbnZhciBjcmVhdGVTZWxlY3RvciA9IGV4cG9ydHMuY3JlYXRlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3RvckNyZWF0b3IoZGVmYXVsdE1lbW9pemUpO1xuXG5mdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmVkU2VsZWN0b3Ioc2VsZWN0b3JzKSB7XG4gIHZhciBzZWxlY3RvckNyZWF0b3IgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGNyZWF0ZVNlbGVjdG9yO1xuXG4gIGlmICh0eXBlb2Ygc2VsZWN0b3JzICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignY3JlYXRlU3RydWN0dXJlZFNlbGVjdG9yIGV4cGVjdHMgZmlyc3QgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0ICcgKyAoJ3doZXJlIGVhY2ggcHJvcGVydHkgaXMgYSBzZWxlY3RvciwgaW5zdGVhZCByZWNlaXZlZCBhICcgKyB0eXBlb2Ygc2VsZWN0b3JzKSk7XG4gIH1cbiAgdmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyhzZWxlY3RvcnMpO1xuICByZXR1cm4gc2VsZWN0b3JDcmVhdG9yKG9iamVjdEtleXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gc2VsZWN0b3JzW2tleV07XG4gIH0pLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZXMgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgdmFsdWVzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcy5yZWR1Y2UoZnVuY3Rpb24gKGNvbXBvc2l0aW9uLCB2YWx1ZSwgaW5kZXgpIHtcbiAgICAgIGNvbXBvc2l0aW9uW29iamVjdEtleXNbaW5kZXhdXSA9IHZhbHVlO1xuICAgICAgcmV0dXJuIGNvbXBvc2l0aW9uO1xuICAgIH0sIHt9KTtcbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi4vbm9kZV9tb2R1bGVzL3Jlc2VsZWN0L2xpYi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoQkE7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDUkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7QUNsQkE7QUFhQTtBQVlBO0FBYUE7QUFhQTtBQWNBO0FBQ0E7QUE3RUE7QUFDQTtBQU9BO0FBQ0E7OztBQUFBO0FBQ0E7OztBQVhBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7Ozs7Ozs7OztBQ3JHQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7Ozs7OztBQ2hDQTtBQUNBOzs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2UEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcEJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQy9CQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbEVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNQQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFKQTtBQURBO0FBY0E7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDMURBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFOQTtBQUZBO0FBV0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBYkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFNQTtBQUNBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7QUN2Q0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBQUE7QUFDQTtBQW9CQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTs7Ozs7Ozs7OztBQ3BDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQU5BO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFEQTtBQURBO0FBSkE7QUFEQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7O0FDakRBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3RHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25CQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVCQTs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqSUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMvQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDckdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNnQkE7QUFDQTtBQXRCQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBSkE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdEJBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7OztBQ3RDQTtBQUNBOzs7QUFGQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFIQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFMQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBO0FBSUE7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBN0RBO0FBK0RBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQTdDQTtBQStDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzVEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBT0E7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUlBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBYUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNyRUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFDQTs7Ozs7O0FDekJBOzs7Ozs7QUNBQTtBQUNBOzs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7Ozs7Ozs7QUFYQTtBQUNBO0FBQ0E7QUFVQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFEQTtBQURBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQVJBO0FBQ0E7QUFDQTtBQU9BOzs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRBO0FBbUJBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7OztBQ3REQTtBQUNBOzs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7O0FDckNBO0FBQ0E7Ozs7OztBQ0RBO0FBQ0E7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7Ozs7QUNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBVEE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7OztBQzlDQTtBQUNBOzs7Ozs7Ozs7O0FDQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFIQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckJBO0FBQ0E7Ozs7OztBQ0RBO0FBQ0E7Ozs7OztBQ0RBO0FBQ0E7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBSUE7QUFDQTs7Ozs7OztBQWhCQTtBQUNBO0FBQ0E7QUFlQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUpBO0FBUUE7QUFDQTs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTtBQUNBOzs7Ozs7QUFHQTtBQUNBO0FBSUE7QUFDQTs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFDQTtBQU9BOzs7Ozs7Ozs7Ozs7QUN2SkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7OztBQU5BO0FBQ0E7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFXQTtBQXhCQTtBQTRCQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFMQTtBQUNBO0FBQ0E7QUFJQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSEE7QUFNQTtBQUNBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7O0FBUEE7QUFDQTtBQUNBO0FBTUE7Ozs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVNBO0FBVkE7QUFlQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBUkE7QUFDQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFMQTtBQVRBO0FBcUJBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBU0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBTkE7QUFKQTtBQWtCQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7Ozs7OztBQzFCQTtBQUNBOzs7Ozs7Ozs7QUNEQTtBQUFBO0FBQ0E7QUFDQTtBQUtBOzs7Ozs7QUNQQTtBQUNBOzs7Ozs7Ozs7O0FDREE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7Ozs7OztBQzFCQTtBQUNBOzs7Ozs7QUNEQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFWQTtBQUNBO0FBQ0E7QUFZQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFKQTtBQU9BO0FBQ0E7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUNBO0FBQ0E7QUFJQTtBQUNBOzs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFGQTtBQURBO0FBQ0E7QUFNQTs7Ozs7Ozs7Ozs7O0FDMUdBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7OztBQUpBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQXBCQTtBQXdCQTtBQUNBOzs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9DQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFKQTtBQUxBO0FBZ0JBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBUEE7QUFEQTtBQWVBO0FBQ0E7Ozs7Ozs7O0FBRUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7OztBQ3BDQTtBQUNBOzs7QUFFQTtBQUNBOzs7OztBQUxBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3hCQTtBQUNBOzs7Ozs7QUNEQTtBQUNBOzs7Ozs7QUNEQTtBQUNBOzs7Ozs7QUNEQTtBQUNBOzs7Ozs7QUNEQTtBQUNBOzs7Ozs7QUNEQTs7Ozs7Ozs7Ozs7QUNDQTtBQUNBO0FBQUE7QUFDQTtBQUhBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQ0E7QUFJQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=
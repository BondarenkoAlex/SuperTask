webpackJsonp([ 0 ], [ , function(e, t, n) {
    e.exports = n(45)();
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(18), o = n(65), u = n(66), i = n(67), a = n(22);
    n(21);
    n.d(t, "createStore", function() {
        return r.b;
    }), n.d(t, "combineReducers", function() {
        return o.a;
    }), n.d(t, "bindActionCreators", function() {
        return u.a;
    }), n.d(t, "applyMiddleware", function() {
        return i.a;
    }), n.d(t, "compose", function() {
        return a.a;
    });
}, function(e, t, n) {
    e.exports = n(82);
}, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(44), o = n(17), u = n(50);
    n.d(t, "Provider", function() {
        return r.b;
    }), n.d(t, "createProvider", function() {
        return r.a;
    }), n.d(t, "connectAdvanced", function() {
        return o.a;
    }), n.d(t, "connect", function() {
        return u.a;
    });
}, , , function(e, t, n) {
    "use strict";
    function r(e) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(e);
        try {
            throw new Error(e);
        } catch (e) {}
    }
    t.a = r;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        if (!Object(i.a)(e) || Object(o.a)(e) != a) return !1;
        var t = Object(u.a)(e);
        if (null === t) return !0;
        var n = f.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && s.call(n) == d;
    }
    var o = n(53), u = n(58), i = n(60), a = "[object Object]", c = Function.prototype, l = Object.prototype, s = c.toString, f = l.hasOwnProperty, d = s.call(Object);
    t.a = r;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.ADD_PROJECT = "ADD_PROJECT", t.REMOVE_PROJECT = "REMOVE_PROJECT", t.OPEN_CLOSE_PROJECT = "OPEN_CLOSE_PROJECT", 
    t.ADD_VACANCY = "ADD_VACANCY", t.REMOVE_VACANCY = "REMOVE_VACANCY", t.OPEN_CLOSE_VACANCY = "OPEN_CLOSE_VACANCY";
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };
    t.isObject = function() {
        function e(e) {
            return e && "object" === (void 0 === e ? "undefined" : n(e)) && e.constructor === Object;
        }
        return e;
    }(), t.isArray = function() {
        function e(e) {
            return e && "object" === (void 0 === e ? "undefined" : n(e)) && e.constructor === Array;
        }
        return e;
    }(), t.isFloat = function() {
        function e(e) {
            return String(parseFloat(e, 10)) === String(e);
        }
        return e;
    }(), t.isInteger = function() {
        function e(e) {
            return String(parseInt(e, 10)) === String(e);
        }
        return e;
    }(), t.isEmpty = function() {
        function e(e) {
            return null === e || void 0 === e || (e && "object" === (void 0 === e ? "undefined" : n(e)) && e.constructor === Array ? 0 === e.length : e && "object" === (void 0 === e ? "undefined" : n(e)) && e.constructor === Object ? 0 === Object.getOwnPropertyNames(e).length : "string" == typeof e || "object" === (void 0 === e ? "undefined" : n(e)) && e.constructor === String ? 0 === e.length : String(parseFloat(e, 10)) === String(e) ? 0 === e : !e && e);
        }
        return e;
    }(), t.isString = function() {
        function e(e) {
            return "string" == typeof e || "object" == (void 0 === e ? "undefined" : n(e)) && e.constructor === String;
        }
        return e;
    }();
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        var t = e.children, n = e.onClick, r = e.type;
        return i.default.createElement("button", {
            className: s.default.buttonBg,
            type: r,
            onClick: n
        }, t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(92), s = r(l);
    o.propTypes = {
        children: c.default.string.isRequired,
        onClick: c.default.func.isRequired,
        type: c.default.string
    }, o.defaultProps = {
        type: "button"
    }, t.default = o;
}, function(e, t, n) {
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function o(e) {
        if ((0, y.isEmpty)(e)) return null;
        var t = (0, p.default)(), n = r({}, t, {
            id: t,
            title: e,
            isClosed: !1,
            items: []
        });
        return s(f.ADD_PROJECT, n);
    }
    function u(e) {
        return function(t, n) {
            var r = n(), o = r.projects, u = o[e].items, i = {
                projectId: e,
                vacancies: u
            };
            t(s(f.REMOVE_PROJECT, i));
        };
    }
    function i(e) {
        return function(t, n) {
            var r = n(), o = r.projects, u = o[e], i = u.isClosed, a = u.items;
            t(s(f.OPEN_CLOSE_PROJECT, e)), i || t(l(a));
        };
    }
    function a(e, t) {
        if ((0, y.isEmpty)(t)) return null;
        var n = (0, p.default)(), o = r({}, n, {
            id: n,
            title: t,
            isClosed: !1,
            projectId: e
        });
        return s(f.ADD_VACANCY, o);
    }
    function c(e) {
        return function(t, n) {
            var r = n(), o = r.vacancies, u = o[e], i = u.id, a = u.projectId, c = {
                projectId: a,
                vacancyId: i
            };
            t(s(f.REMOVE_VACANCY, c));
        };
    }
    function l(e) {
        return function(t, n) {
            var r = n(), o = r.vacancies, u = r.projects, i = void 0;
            if ((0, y.isArray)(e)) i = {
                ids: e,
                status: !0
            }; else {
                var a = o[e], c = a.isClosed;
                if (u[a.projectId].isClosed) return null;
                i = {
                    ids: [ e ],
                    status: !c
                };
            }
            t(s(f.OPEN_CLOSE_VACANCY, i));
        };
    }
    function s(e, t) {
        return {
            type: e,
            payload: t
        };
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.addProject = o, t.removeProject = u, t.openCloseProject = i, t.addVacancy = a, 
    t.removeVacancy = c, t.openCloseVacancies = l;
    var f = n(10), d = n(100), p = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(d), y = n(11);
}, , , function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return u;
    }), n.d(t, "a", function() {
        return i;
    });
    var r = n(1), o = n.n(r), u = o.a.shape({
        trySubscribe: o.a.func.isRequired,
        tryUnsubscribe: o.a.func.isRequired,
        notifyNestedSubs: o.a.func.isRequired,
        isSubscribed: o.a.func.isRequired
    }), i = o.a.shape({
        subscribe: o.a.func.isRequired,
        dispatch: o.a.func.isRequired,
        getState: o.a.func.isRequired
    });
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function u(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    function i(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n;
    }
    function a() {}
    function c(e, t) {
        var n = {
            run: function(r) {
                try {
                    var o = e(t.getState(), r);
                    (o !== n.props || n.error) && (n.shouldComponentUpdate = !0, n.props = o, n.error = null);
                } catch (e) {
                    n.shouldComponentUpdate = !0, n.error = e;
                }
            }
        };
        return n;
    }
    function l(e) {
        var t, n, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, s = l.getDisplayName, d = void 0 === s ? function(e) {
            return "ConnectAdvanced(" + e + ")";
        } : s, _ = l.methodName, P = void 0 === _ ? "connectAdvanced" : _, j = l.renderCountProp, C = void 0 === j ? void 0 : j, E = l.shouldHandleStateChanges, w = void 0 === E || E, g = l.storeKey, T = void 0 === g ? "store" : g, S = l.withRef, M = void 0 !== S && S, k = i(l, [ "getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef" ]), R = T + "Subscription", x = O++, q = (t = {}, 
        t[T] = b.a, t[R] = b.b, t), N = (n = {}, n[R] = b.b, n);
        return function(t) {
            p()("function" == typeof t, "You must pass a component to the function returned by connect. Instead received " + JSON.stringify(t));
            var n = t.displayName || t.name || "Component", i = d(n), l = v({}, k, {
                getDisplayName: d,
                methodName: P,
                renderCountProp: C,
                shouldHandleStateChanges: w,
                storeKey: T,
                withRef: M,
                displayName: i,
                wrappedComponentName: n,
                WrappedComponent: t
            }), s = function(n) {
                function s(e, t) {
                    r(this, s);
                    var u = o(this, n.call(this, e, t));
                    return u.version = x, u.state = {}, u.renderCount = 0, u.store = e[T] || t[T], u.propsMode = Boolean(e[T]), 
                    u.setWrappedInstance = u.setWrappedInstance.bind(u), p()(u.store, 'Could not find "' + T + '" in either the context or props of "' + i + '". Either wrap the root component in a <Provider>, or explicitly pass "' + T + '" as a prop to "' + i + '".'), 
                    u.initSelector(), u.initSubscription(), u;
                }
                return u(s, n), s.prototype.getChildContext = function() {
                    var e, t = this.propsMode ? null : this.subscription;
                    return e = {}, e[R] = t || this.context[R], e;
                }, s.prototype.componentDidMount = function() {
                    w && (this.subscription.trySubscribe(), this.selector.run(this.props), this.selector.shouldComponentUpdate && this.forceUpdate());
                }, s.prototype.componentWillReceiveProps = function(e) {
                    this.selector.run(e);
                }, s.prototype.shouldComponentUpdate = function() {
                    return this.selector.shouldComponentUpdate;
                }, s.prototype.componentWillUnmount = function() {
                    this.subscription && this.subscription.tryUnsubscribe(), this.subscription = null, 
                    this.notifyNestedSubs = a, this.store = null, this.selector.run = a, this.selector.shouldComponentUpdate = !1;
                }, s.prototype.getWrappedInstance = function() {
                    return p()(M, "To access the wrapped instance, you need to specify { withRef: true } in the options argument of the " + P + "() call."), 
                    this.wrappedInstance;
                }, s.prototype.setWrappedInstance = function(e) {
                    this.wrappedInstance = e;
                }, s.prototype.initSelector = function() {
                    var t = e(this.store.dispatch, l);
                    this.selector = c(t, this.store), this.selector.run(this.props);
                }, s.prototype.initSubscription = function() {
                    if (w) {
                        var e = (this.propsMode ? this.props : this.context)[R];
                        this.subscription = new h.a(this.store, e, this.onStateChange.bind(this)), this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
                    }
                }, s.prototype.onStateChange = function() {
                    this.selector.run(this.props), this.selector.shouldComponentUpdate ? (this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate, 
                    this.setState(m)) : this.notifyNestedSubs();
                }, s.prototype.notifyNestedSubsOnComponentDidUpdate = function() {
                    this.componentDidUpdate = void 0, this.notifyNestedSubs();
                }, s.prototype.isSubscribed = function() {
                    return Boolean(this.subscription) && this.subscription.isSubscribed();
                }, s.prototype.addExtraProps = function(e) {
                    if (!(M || C || this.propsMode && this.subscription)) return e;
                    var t = v({}, e);
                    return M && (t.ref = this.setWrappedInstance), C && (t[C] = this.renderCount++), 
                    this.propsMode && this.subscription && (t[R] = this.subscription), t;
                }, s.prototype.render = function() {
                    var e = this.selector;
                    if (e.shouldComponentUpdate = !1, e.error) throw e.error;
                    return Object(y.createElement)(t, this.addExtraProps(e.props));
                }, s;
            }(y.Component);
            return s.WrappedComponent = t, s.displayName = i, s.childContextTypes = N, s.contextTypes = q, 
            s.propTypes = q, f()(s, t);
        };
    }
    t.a = l;
    var s = n(47), f = n.n(s), d = n(48), p = n.n(d), y = n(0), h = (n.n(y), n(49)), b = n(16), v = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, O = 0, m = {};
}, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        function u() {
            v === b && (v = b.slice());
        }
        function c() {
            return h;
        }
        function l(e) {
            if ("function" != typeof e) throw new Error("Expected listener to be a function.");
            var t = !0;
            return u(), v.push(e), function() {
                if (t) {
                    t = !1, u();
                    var n = v.indexOf(e);
                    v.splice(n, 1);
                }
            };
        }
        function s(e) {
            if (!Object(o.a)(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (O) throw new Error("Reducers may not dispatch actions.");
            try {
                O = !0, h = y(h, e);
            } finally {
                O = !1;
            }
            for (var t = b = v, n = 0; n < t.length; n++) {
                (0, t[n])();
            }
            return e;
        }
        function f(e) {
            if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
            y = e, s({
                type: a.INIT
            });
        }
        function d() {
            var e, t = l;
            return e = {
                subscribe: function(e) {
                    function n() {
                        e.next && e.next(c());
                    }
                    if ("object" != typeof e) throw new TypeError("Expected the observer to be an object.");
                    return n(), {
                        unsubscribe: t(n)
                    };
                }
            }, e[i.a] = function() {
                return this;
            }, e;
        }
        var p;
        if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(r)(e, t);
        }
        if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
        var y = e, h = t, b = [], v = b, O = !1;
        return s({
            type: a.INIT
        }), p = {
            dispatch: s,
            subscribe: l,
            getState: c,
            replaceReducer: f
        }, p[i.a] = d, p;
    }
    n.d(t, "a", function() {
        return a;
    }), t.b = r;
    var o = n(9), u = n(61), i = n.n(u), a = {
        INIT: "@@redux/INIT"
    };
}, function(e, t, n) {
    "use strict";
    var r = n(54), o = r.a.Symbol;
    t.a = o;
}, function(e, t) {
    var n;
    n = function() {
        return this;
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
        "object" == typeof window && (n = window);
    }
    e.exports = n;
}, function(e, t, n) {
    "use strict";
}, function(e, t, n) {
    "use strict";
    function r() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return 0 === t.length ? function(e) {
            return e;
        } : 1 === t.length ? t[0] : t.reduce(function(e, t) {
            return function() {
                return e(t.apply(void 0, arguments));
            };
        });
    }
    t.a = r;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return function(t, n) {
            function r() {
                return o;
            }
            var o = e(t, n);
            return r.dependsOnOwnProps = !1, r;
        };
    }
    function o(e) {
        return null !== e.dependsOnOwnProps && void 0 !== e.dependsOnOwnProps ? Boolean(e.dependsOnOwnProps) : 1 !== e.length;
    }
    function u(e, t) {
        return function(t, n) {
            var r = (n.displayName, function(e, t) {
                return r.dependsOnOwnProps ? r.mapToProps(e, t) : r.mapToProps(e);
            });
            return r.dependsOnOwnProps = !0, r.mapToProps = function(t, n) {
                r.mapToProps = e, r.dependsOnOwnProps = o(e);
                var u = r(t, n);
                return "function" == typeof u && (r.mapToProps = u, r.dependsOnOwnProps = o(u), 
                u = r(t, n)), u;
            }, r;
        };
    }
    t.a = r, t.b = u;
    n(24);
}, function(e, t, n) {
    "use strict";
    n(9), n(8);
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        var t = e.value, n = e.placeholder, r = e.onChange;
        return i.default.createElement("input", {
            type: "text",
            value: t,
            className: s.default.inputText,
            placeholder: n,
            onChange: r
        });
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(89), s = r(l);
    o.propTypes = {
        value: c.default.string,
        placeholder: c.default.string,
        onChange: c.default.func.isRequired
    }, o.defaultProps = {
        value: "",
        placeholder: "[*placeholder*]"
    }, t.default = o;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(3), p = r(d), y = n(94), h = r(y), b = n(27), v = r(b), O = n(28), m = r(O), _ = function(e) {
        function t(e, n) {
            o(this, t);
            var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return (0, p.default)(r), r.state = {
                value: ""
            }, r;
        }
        return i(t, e), a(t, [ {
            key: "componentWillMount",
            value: function() {
                function e() {
                    document.addEventListener("keydown", this.onKeyEsc);
                }
                return e;
            }()
        }, {
            key: "componentWillUnmount",
            value: function() {
                function e() {
                    document.removeEventListener("keydown", this.onKeyEsc);
                }
                return e;
            }()
        }, {
            key: "onKeyEsc",
            value: function() {
                function e(e) {
                    var t = this.props.onClose, n = void 0;
                    null === e.which && (n = e.keyCode), 0 !== e.which && (n = e.keyCode), 27 === n && t();
                }
                return e;
            }()
        }, {
            key: "onChange",
            value: function() {
                function e(e) {
                    var t = e.target.value;
                    this.setState({
                        value: t
                    });
                }
                return e;
            }()
        }, {
            key: "onSubmit",
            value: function() {
                function e(e) {
                    e.preventDefault();
                    var t = this.state.value;
                    (0, this.props.onSubmit)(t);
                }
                return e;
            }()
        }, {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props, t = e.onClose, n = e.title;
                    return l.default.createElement(m.default, null, l.default.createElement(v.default, {
                        onClose: t,
                        title: n
                    }, l.default.createElement(h.default, {
                        onSubmit: this.onSubmit,
                        onChangeName: this.onChange,
                        value: this.state.value,
                        placeholder: n
                    })));
                }
                return e;
            }()
        } ]), t;
    }(c.Component);
    _.propTypes = {
        title: f.default.string.isRequired,
        onSubmit: f.default.func.isRequired,
        onClose: f.default.func.isRequired
    }, _.defaultProps = {}, t.default = _;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        var t = e.title, n = e.children, r = e.onClose;
        return i.default.createElement("section", {
            className: d.default.dialogWindow
        }, i.default.createElement("header", null, i.default.createElement("h3", null, t), i.default.createElement("div", {
            className: d.default.buttonClose,
            onClick: r,
            role: "button",
            tabIndex: "0"
        }, i.default.createElement(s.default, null))), i.default.createElement("div", {
            className: d.default.hr
        }), i.default.createElement("article", null, n));
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(96), s = r(l), f = n(98), d = r(f);
    o.propTypes = {
        onClose: c.default.func.isRequired,
        title: c.default.string,
        children: c.default.oneOfType([ c.default.string, c.default.element ])
    }, o.defaultProps = {
        title: "[*title*]",
        children: "[*children*]"
    }, t.default = o;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), c = n(0), l = (r(c), n(7)), s = r(l), f = n(1), d = r(f), p = n(3), y = r(p);
    n(99);
    var h = function(e) {
        function t(e, n) {
            o(this, t);
            var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return (0, y.default)(r), r.modalRoot = document.getElementById("modal-root"), r.el = document.createElement("div"), 
            r.el.classList.add("modal-window"), r;
        }
        return i(t, e), a(t, [ {
            key: "componentDidMount",
            value: function() {
                function e() {
                    this.modalRoot.appendChild(this.el);
                }
                return e;
            }()
        }, {
            key: "componentWillUnmount",
            value: function() {
                function e() {
                    this.modalRoot.removeChild(this.el);
                }
                return e;
            }()
        }, {
            key: "render",
            value: function() {
                function e() {
                    return s.default.createPortal(this.props.children, this.el);
                }
                return e;
            }()
        } ]), t;
    }(c.Component);
    h.propTypes = {
        children: d.default.element
    }, h.defaultProps = {
        children: null
    }, t.default = h;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        var t = e.children, n = e.onClick, r = e.className, o = void 0 !== r ? r : s.default.buttonCommon;
        return i.default.createElement("button", {
            className: o,
            type: "button",
            onClick: n
        }, t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(107), s = r(l);
    o.propTypes = {
        children: c.default.string.isRequired,
        onClick: c.default.func.isRequired,
        className: c.default.string
    }, o.defaultProps = {}, t.default = o;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        return i.default.createElement("svg", {
            viewBox: "0 0 20 20",
            className: l.default.checkIcon
        }, i.default.createElement("path", {
            d: "M0 0h24v24H0z",
            fill: "none"
        }), i.default.createElement("path", {
            d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
        }));
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0), i = r(u), a = n(1), c = (r(a), n(108)), l = r(c);
    o.propTypes = {}, o.defaultProps = {}, t.default = o;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        var t = e.onClick, n = e.onDelete, r = e.children, o = e.isClosed, u = o ? "green" : "gray";
        return i.default.createElement("aside", {
            className: d.default.buttonSet
        }, i.default.createElement("div", {
            className: [ d.default.buttonClick, u ].join(" ")
        }, i.default.createElement(s.default, {
            onClick: t
        }, r)), i.default.createElement("div", {
            className: d.default.buttonDelete
        }, i.default.createElement(s.default, {
            onClick: n
        }, "Удалить")));
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(29), s = r(l), f = n(111), d = r(f);
    o.propTypes = {
        onClick: c.default.func.isRequired,
        onDelete: c.default.func.isRequired,
        children: c.default.string.isRequired,
        isClosed: c.default.bool
    }, o.defaultProps = {
        isClosed: !1
    }, t.default = o;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        var t = e.onSubmit, n = e.onClose, r = e.name, o = e.title, u = e.type;
        return i.default.createElement(y.default, null, i.default.createElement(d.default, {
            onClose: n,
            title: o
        }, i.default.createElement("form", {
            onSubmit: t
        }, i.default.createElement("div", {
            className: b.default.button
        }, i.default.createElement(s.default, {
            onClick: t,
            type: u
        }, r)))));
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(12), s = r(l), f = n(27), d = r(f), p = n(28), y = r(p), h = n(121), b = r(h);
    o.propTypes = {
        name: c.default.string.isRequired,
        title: c.default.string.isRequired,
        onSubmit: c.default.func.isRequired,
        onClose: c.default.func.isRequired
    }, o.defaultProps = {
        type: "submit"
    }, t.default = o;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    var o = n(0), u = r(o), i = n(7), a = n(5), c = n(72), l = r(c), s = n(81), f = r(s), d = (0, 
    l.default)();
    (0, i.render)(u.default.createElement(a.Provider, {
        store: d
    }, u.default.createElement(f.default, null)), document.getElementById("root"));
}, , , , , , , , , , , function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function u(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    function i() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "store", n = arguments[1], i = n || t + "Subscription", c = function(e) {
            function n(u, i) {
                r(this, n);
                var a = o(this, e.call(this, u, i));
                return a[t] = u.store, a;
            }
            return u(n, e), n.prototype.getChildContext = function() {
                var e;
                return e = {}, e[t] = this[t], e[i] = null, e;
            }, n.prototype.render = function() {
                return a.Children.only(this.props.children);
            }, n;
        }(a.Component);
        return c.propTypes = {
            store: s.a.isRequired,
            children: l.a.element.isRequired
        }, c.childContextTypes = (e = {}, e[t] = s.a.isRequired, e[i] = s.b, e), c;
    }
    t.a = i;
    var a = n(0), c = (n.n(a), n(1)), l = n.n(c), s = n(16);
    n(8);
    t.b = i();
}, function(e, t, n) {
    "use strict";
    var r = n(4), o = n(6), u = n(46);
    e.exports = function() {
        function e(e, t, n, r, i, a) {
            a !== u && o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        }
        function t() {
            return e;
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t
        };
        return n.checkPropTypes = r, n.PropTypes = n, n;
    };
}, function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}, function(e, t, n) {
    "use strict";
    var r = {
        childContextTypes: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0
    }, o = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0
    }, u = Object.defineProperty, i = Object.getOwnPropertyNames, a = Object.getOwnPropertySymbols, c = Object.getOwnPropertyDescriptor, l = Object.getPrototypeOf, s = l && l(Object);
    e.exports = function e(t, n, f) {
        if ("string" != typeof n) {
            if (s) {
                var d = l(n);
                d && d !== s && e(t, d, f);
            }
            var p = i(n);
            a && (p = p.concat(a(n)));
            for (var y = 0; y < p.length; ++y) {
                var h = p[y];
                if (!(r[h] || o[h] || f && f[h])) {
                    var b = c(n, h);
                    try {
                        u(t, h, b);
                    } catch (e) {}
                }
            }
            return t;
        }
        return t;
    };
}, function(e, t, n) {
    "use strict";
    var r = function(e, t, n, r, o, u, i, a) {
        if (!e) {
            var c;
            if (void 0 === t) c = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                var l = [ n, r, o, u, i, a ], s = 0;
                c = new Error(t.replace(/%s/g, function() {
                    return l[s++];
                })), c.name = "Invariant Violation";
            }
            throw c.framesToPop = 1, c;
        }
    };
    e.exports = r;
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function o() {
        var e = [], t = [];
        return {
            clear: function() {
                t = u, e = u;
            },
            notify: function() {
                for (var n = e = t, r = 0; r < n.length; r++) n[r]();
            },
            get: function() {
                return t;
            },
            subscribe: function(n) {
                var r = !0;
                return t === e && (t = e.slice()), t.push(n), function() {
                    r && e !== u && (r = !1, t === e && (t = e.slice()), t.splice(t.indexOf(n), 1));
                };
            }
        };
    }
    n.d(t, "a", function() {
        return a;
    });
    var u = null, i = {
        notify: function() {}
    }, a = function() {
        function e(t, n, o) {
            r(this, e), this.store = t, this.parentSub = n, this.onStateChange = o, this.unsubscribe = null, 
            this.listeners = i;
        }
        return e.prototype.addNestedSub = function(e) {
            return this.trySubscribe(), this.listeners.subscribe(e);
        }, e.prototype.notifyNestedSubs = function() {
            this.listeners.notify();
        }, e.prototype.isSubscribed = function() {
            return Boolean(this.unsubscribe);
        }, e.prototype.trySubscribe = function() {
            this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange), 
            this.listeners = o());
        }, e.prototype.tryUnsubscribe = function() {
            this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), 
            this.listeners = i);
        }, e;
    }();
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n;
    }
    function o(e, t, n) {
        for (var r = t.length - 1; r >= 0; r--) {
            var o = t[r](e);
            if (o) return o;
        }
        return function(t, r) {
            throw new Error("Invalid value of type " + typeof e + " for " + n + " argument when connecting component " + r.wrappedComponentName + ".");
        };
    }
    function u(e, t) {
        return e === t;
    }
    var i = n(17), a = n(51), c = n(52), l = n(68), s = n(69), f = n(70), d = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    };
    t.a = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.connectHOC, n = void 0 === t ? i.a : t, p = e.mapStateToPropsFactories, y = void 0 === p ? l.a : p, h = e.mapDispatchToPropsFactories, b = void 0 === h ? c.a : h, v = e.mergePropsFactories, O = void 0 === v ? s.a : v, m = e.selectorFactory, _ = void 0 === m ? f.a : m;
        return function(e, t, i) {
            var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, l = c.pure, s = void 0 === l || l, f = c.areStatesEqual, p = void 0 === f ? u : f, h = c.areOwnPropsEqual, v = void 0 === h ? a.a : h, m = c.areStatePropsEqual, P = void 0 === m ? a.a : m, j = c.areMergedPropsEqual, C = void 0 === j ? a.a : j, E = r(c, [ "pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual" ]), w = o(e, y, "mapStateToProps"), g = o(t, b, "mapDispatchToProps"), T = o(i, O, "mergeProps");
            return n(_, d({
                methodName: "connect",
                getDisplayName: function(e) {
                    return "Connect(" + e + ")";
                },
                shouldHandleStateChanges: Boolean(e),
                initMapStateToProps: w,
                initMapDispatchToProps: g,
                initMergeProps: T,
                pure: s,
                areStatesEqual: p,
                areOwnPropsEqual: v,
                areStatePropsEqual: P,
                areMergedPropsEqual: C
            }, E));
        };
    }();
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e !== e && t !== t;
    }
    function o(e, t) {
        if (r(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e), o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (var i = 0; i < n.length; i++) if (!u.call(t, n[i]) || !r(e[n[i]], t[n[i]])) return !1;
        return !0;
    }
    t.a = o;
    var u = Object.prototype.hasOwnProperty;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return "function" == typeof e ? Object(a.b)(e, "mapDispatchToProps") : void 0;
    }
    function o(e) {
        return e ? void 0 : Object(a.a)(function(e) {
            return {
                dispatch: e
            };
        });
    }
    function u(e) {
        return e && "object" == typeof e ? Object(a.a)(function(t) {
            return Object(i.bindActionCreators)(e, t);
        }) : void 0;
    }
    var i = n(2), a = n(23);
    t.a = [ r, o, u ];
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return null == e ? void 0 === e ? c : a : l && l in Object(e) ? Object(u.a)(e) : Object(i.a)(e);
    }
    var o = n(19), u = n(56), i = n(57), a = "[object Null]", c = "[object Undefined]", l = o.a ? o.a.toStringTag : void 0;
    t.a = r;
}, function(e, t, n) {
    "use strict";
    var r = n(55), o = "object" == typeof self && self && self.Object === Object && self, u = r.a || o || Function("return this")();
    t.a = u;
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.a = n;
    }).call(t, n(20));
}, function(e, t, n) {
    "use strict";
    function r(e) {
        var t = i.call(e, c), n = e[c];
        try {
            e[c] = void 0;
            var r = !0;
        } catch (e) {}
        var o = a.call(e);
        return r && (t ? e[c] = n : delete e[c]), o;
    }
    var o = n(19), u = Object.prototype, i = u.hasOwnProperty, a = u.toString, c = o.a ? o.a.toStringTag : void 0;
    t.a = r;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return u.call(e);
    }
    var o = Object.prototype, u = o.toString;
    t.a = r;
}, function(e, t, n) {
    "use strict";
    var r = n(59), o = Object(r.a)(Object.getPrototypeOf, Object);
    t.a = o;
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        return function(n) {
            return e(t(n));
        };
    }
    t.a = r;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return null != e && "object" == typeof e;
    }
    t.a = r;
}, function(e, t, n) {
    e.exports = n(62);
}, function(e, t, n) {
    "use strict";
    (function(e, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o, u = n(64), i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(u);
        o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : r;
        var a = (0, i.default)(o);
        t.default = a;
    }).call(t, n(20), n(63)(e));
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), 
        Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l;
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i;
            }
        }), e.webpackPolyfill = 1), e;
    };
}, function(e, t, n) {
    "use strict";
    function r(e) {
        var t, n = e.Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), 
        n.observable = t) : t = "@@observable", t;
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r;
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        var n = t && t.type;
        return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.';
    }
    function o(e) {
        Object.keys(e).forEach(function(t) {
            var n = e[t];
            if (void 0 === n(void 0, {
                type: i.a.INIT
            })) throw new Error('Reducer "' + t + "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");
            if (void 0 === n(void 0, {
                type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
            })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + i.a.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.');
        });
    }
    function u(e) {
        for (var t = Object.keys(e), n = {}, u = 0; u < t.length; u++) {
            var i = t[u];
            "function" == typeof e[i] && (n[i] = e[i]);
        }
        var a = Object.keys(n), c = void 0;
        try {
            o(n);
        } catch (e) {
            c = e;
        }
        return function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
            if (c) throw c;
            for (var o = !1, u = {}, i = 0; i < a.length; i++) {
                var l = a[i], s = n[l], f = e[l], d = s(f, t);
                if (void 0 === d) {
                    var p = r(l, t);
                    throw new Error(p);
                }
                u[l] = d, o = o || d !== f;
            }
            return o ? u : e;
        };
    }
    t.a = u;
    var i = n(18);
    n(9), n(21);
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        return function() {
            return t(e.apply(void 0, arguments));
        };
    }
    function o(e, t) {
        if ("function" == typeof e) return r(e, t);
        if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var n = Object.keys(e), o = {}, u = 0; u < n.length; u++) {
            var i = n[u], a = e[i];
            "function" == typeof a && (o[i] = r(a, t));
        }
        return o;
    }
    t.a = o;
}, function(e, t, n) {
    "use strict";
    function r() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function(e) {
            return function(n, r, i) {
                var a = e(n, r, i), c = a.dispatch, l = [], s = {
                    getState: a.getState,
                    dispatch: function(e) {
                        return c(e);
                    }
                };
                return l = t.map(function(e) {
                    return e(s);
                }), c = o.a.apply(void 0, l)(a.dispatch), u({}, a, {
                    dispatch: c
                });
            };
        };
    }
    t.a = r;
    var o = n(22), u = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    };
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return "function" == typeof e ? Object(u.b)(e, "mapStateToProps") : void 0;
    }
    function o(e) {
        return e ? void 0 : Object(u.a)(function() {
            return {};
        });
    }
    var u = n(23);
    t.a = [ r, o ];
}, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        return a({}, n, e, t);
    }
    function o(e) {
        return function(t, n) {
            var r = (n.displayName, n.pure), o = n.areMergedPropsEqual, u = !1, i = void 0;
            return function(t, n, a) {
                var c = e(t, n, a);
                return u ? r && o(c, i) || (i = c) : (u = !0, i = c), i;
            };
        };
    }
    function u(e) {
        return "function" == typeof e ? o(e) : void 0;
    }
    function i(e) {
        return e ? void 0 : function() {
            return r;
        };
    }
    var a = (n(24), Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    });
    t.a = [ u, i ];
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        var n = {};
        for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
        return n;
    }
    function o(e, t, n, r) {
        return function(o, u) {
            return n(e(o, u), t(r, u), u);
        };
    }
    function u(e, t, n, r, o) {
        function u(o, u) {
            return y = o, h = u, b = e(y, h), v = t(r, h), O = n(b, v, h), p = !0, O;
        }
        function i() {
            return b = e(y, h), t.dependsOnOwnProps && (v = t(r, h)), O = n(b, v, h);
        }
        function a() {
            return e.dependsOnOwnProps && (b = e(y, h)), t.dependsOnOwnProps && (v = t(r, h)), 
            O = n(b, v, h);
        }
        function c() {
            var t = e(y, h), r = !d(t, b);
            return b = t, r && (O = n(b, v, h)), O;
        }
        function l(e, t) {
            var n = !f(t, h), r = !s(e, y);
            return y = e, h = t, n && r ? i() : n ? a() : r ? c() : O;
        }
        var s = o.areStatesEqual, f = o.areOwnPropsEqual, d = o.areStatePropsEqual, p = !1, y = void 0, h = void 0, b = void 0, v = void 0, O = void 0;
        return function(e, t) {
            return p ? l(e, t) : u(e, t);
        };
    }
    function i(e, t) {
        var n = t.initMapStateToProps, i = t.initMapDispatchToProps, a = t.initMergeProps, c = r(t, [ "initMapStateToProps", "initMapDispatchToProps", "initMergeProps" ]), l = n(e, c), s = i(e, c), f = a(e, c);
        return (c.pure ? u : o)(l, s, f, e, c);
    }
    t.a = i;
    n(71);
}, function(e, t, n) {
    "use strict";
    n(8);
}, function(e, t, n) {
    e.exports = n(73);
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        return (0, u.createStore)(s.default, e, d);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = o;
    var u = n(2), i = n(74), a = n(77), c = r(a), l = n(78), s = r(l), f = (0, i.composeWithDevTools)({}), d = f((0, 
    u.applyMiddleware)(c.default));
}, function(e, t, n) {
    "use strict";
    var r = (n(2).compose, n(75));
    t.__esModule = !0, t.composeWithDevTools = r.composeWithDevTools, t.devToolsEnhancer = r.devToolsEnhancer;
}, function(e, t, n) {
    "use strict";
    function r() {
        var e = arguments[0] || {};
        return e.features = {
            pause: !0,
            export: !0,
            test: !0
        }, e.type = "redux", void 0 === e.autoPause && (e.autoPause = !0), void 0 === e.latency && (e.latency = 500), 
        function(t) {
            return function(n, r, o) {
                var i = t(n, r, o), a = i.dispatch, c = window.__REDUX_DEVTOOLS_EXTENSION__.connect(e);
                c.init(i.getState());
                var l = function(e) {
                    var t = a(e);
                    return c.send(e, i.getState()), t;
                };
                return Object.assign ? Object.assign(i, {
                    dispatch: l
                }) : u(i, "dispatch", l);
            };
        };
    }
    function o(e) {
        return function() {
            return i(i.apply(null, arguments), r(e));
        };
    }
    var u = n(76), i = n(2).compose;
    t.__esModule = !0, t.composeWithDevTools = function() {
        if ("undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__) return 0 === arguments.length ? r() : "object" == typeof arguments[0] ? o(arguments[0]) : o().apply(null, arguments);
        if (0 !== arguments.length) return "object" == typeof arguments[0] ? i : i.apply(null, arguments);
    }, t.devToolsEnhancer = "undefined" != typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ ? r : function() {
        return function(e) {
            return e;
        };
    };
}, function(e, t) {
    function n(e, t, n) {
        for (var o = r(e), u = {}, i = 0, a = o.length; i < a; i++) {
            var c = o[i];
            u[c] = e[c];
        }
        return u[t] = n, u;
    }
    var r = Object.keys || function(e) {
        var t = [];
        for (var n in e) ({}).hasOwnProperty.call(e, n) && t.push(n);
        return t;
    };
    e.exports = n;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return function(t) {
            var n = t.dispatch, r = t.getState;
            return function(t) {
                return function(o) {
                    return "function" == typeof o ? o(n, r, e) : t(o);
                };
            };
        };
    }
    t.__esModule = !0;
    var o = r();
    o.withExtraArgument = r, t.default = o;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(2), u = n(79), i = r(u), a = n(80), c = r(a), l = (0, o.combineReducers)({
        projects: i.default,
        vacancies: c.default
    });
    t.default = l;
}, function(e, t, n) {
    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    function o(e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
            return n;
        }
        return Array.from(e);
    }
    function u() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c, t = arguments[1];
        switch (t.type) {
          case a.ADD_PROJECT:
            return i({}, e, t.payload);

          case a.REMOVE_PROJECT:
            var n = i({}, e);
            return delete n[t.payload.projectId], n;

          case a.ADD_VACANCY:
            var u = Object.keys(t.payload).map(function(e) {
                return t.payload[e];
            }).pop(), l = u.id, s = u.projectId, f = e[s], d = f.items, p = [].concat(o(d), [ l ]);
            return i({}, e, r({}, s, i({}, f, {
                items: p
            })));

          case a.REMOVE_VACANCY:
            var y = t.payload, h = y.projectId, b = y.vacancyId, v = e[h], O = v.items, m = O.filter(function(e) {
                return e !== b;
            });
            return i({}, e, r({}, h, i({}, v, {
                items: m
            })));

          case a.OPEN_CLOSE_PROJECT:
            var _ = t.payload, P = e[_], j = P.isClosed;
            return i({}, e, r({}, _, i({}, P, {
                isClosed: !j
            })));

          default:
            return e;
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, a = n(10), c = {};
    t.default = u;
}, function(e, t, n) {
    function r() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a, t = arguments[1];
        switch (t.type) {
          case u.ADD_VACANCY:
            return o({}, e, t.payload);

          case u.REMOVE_VACANCY:
            var n = o({}, e);
            return delete n[t.payload.vacancyId], n;

          case u.REMOVE_PROJECT:
            var r = t.payload.vacancies;
            if ((0, i.isEmpty)(r)) return e;
            var c = o({}, e);
            return r.forEach(function(e) {
                delete c[e];
            }), c;

          case u.OPEN_CLOSE_VACANCY:
            var l = o({}, e), s = t.payload, f = s.ids, d = s.status;
            return f.forEach(function(e) {
                l[e].isClosed = d;
            }), l;

          default:
            return e;
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, u = n(10), i = n(11), a = {};
    t.default = r;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, c = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), l = n(0), s = r(l), f = n(3), d = r(f), p = n(83), y = r(p), h = n(87), b = r(h), v = n(101), O = r(v), m = function(e) {
        function t(e, n) {
            o(this, t);
            var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return (0, d.default)(r), r.state = {
                searchValue: void 0,
                isOnlyOpen: !1
            }, r;
        }
        return i(t, e), c(t, [ {
            key: "onOnlyOpen",
            value: function() {
                function e(e) {
                    var t = e.target.checked;
                    this.updateState({
                        isOnlyOpen: t
                    });
                }
                return e;
            }()
        }, {
            key: "onChangeSearch",
            value: function() {
                function e(e) {
                    var t = e.target.value;
                    this.updateState({
                        searchValue: t
                    });
                }
                return e;
            }()
        }, {
            key: "updateState",
            value: function() {
                function e(e) {
                    this.setState(a({}, e));
                }
                return e;
            }()
        }, {
            key: "render",
            value: function() {
                function e() {
                    var e = this.state, t = e.searchValue, n = e.isOnlyOpen;
                    return s.default.createElement(y.default, null, s.default.createElement(b.default, {
                        onOnlyOpen: this.onOnlyOpen,
                        onChangeSearch: this.onChangeSearch,
                        searchValue: t,
                        isOnlyOpen: n
                    }), s.default.createElement(O.default, {
                        searchValue: t,
                        isOnlyOpen: n
                    }));
                }
                return e;
            }()
        } ]), t;
    }(l.Component);
    m.propTypes = {}, m.defaultProps = {}, t.default = m;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        if (void 0 === e) return void console.error("Autobind error: No context provided.");
        var t = Object.getPrototypeOf(e);
        i = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : Object.getOwnPropertyNames(t), 
        i.forEach(function(e) {
            var n = Object.getOwnPropertyDescriptor(t, e);
            if (void 0 === n) return void console.warn('Autobind: "' + e + '" method not found in class.');
            -1 === u.indexOf(e) && "function" == typeof n.value && Object.defineProperty(t, e, o(t, e, n));
        });
    }
    function o(e, t, n) {
        var r = n.value;
        return {
            configurable: !0,
            get: function() {
                if (this === e || this.hasOwnProperty(t)) return r;
                var n = r.bind(this);
                return Object.defineProperty(this, t, {
                    value: n,
                    configurable: !0,
                    writable: !0
                }), n;
            }
        };
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = r;
    var u = [ "constructor", "render", "componentWillMount", "componentDidMount", "componentWillReceiveProps", "shouldComponentUpdate", "componentWillUpdate", "componentDidUpdate", "componentWillUnmount" ], i = [];
    e.exports = t.default;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        var t = e.children;
        return i.default.createElement("div", {
            className: s.default.project
        }, i.default.createElement("h1", null, "Список проектов"), t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0), i = r(u), a = n(1), c = r(a);
    n(84), n(85);
    var l = n(86), s = r(l);
    o.propTypes = {
        children: c.default.oneOfType([ c.default.element, c.default.node ]).isRequired
    }, o.defaultProps = {}, t.default = o;
}, function(e, t) {}, function(e, t) {
    e.exports = {
        Placeholder: "_2DUHtGUr998LviRpv2Ehr-",
        ButtonText16: "_37s0RLzaL4lcViXkM6I8iV",
        ButtonText14: "_38HCkHGmVBfrobCNGR0Nuy",
        Error: "sUiRFSQMYc734VTLds4_o"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_3EVzRMG2nxq5sCAMuFaiHY",
        ButtonText16: "_3VIQr8ZlwCJY5yNjspsUY8",
        ButtonText14: "O7VMw2B-g7P_QWQMfpdwg",
        Error: "_7emR8_tXLCwogASvX_0kb",
        project: "_10BlMp8aTxKMThoYiR6oBb"
    };
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, c = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), l = n(0), s = r(l), f = n(1), d = r(f), p = n(5), y = n(2), h = n(3), b = r(h), v = n(88), O = r(v), m = n(26), _ = r(m), P = n(13), j = function(e) {
        function t(e, n) {
            o(this, t);
            var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return (0, b.default)(r), r.state = {
                isModalOpen: !1
            }, r;
        }
        return i(t, e), c(t, [ {
            key: "onAddProject",
            value: function() {
                function e() {
                    this.updateState({
                        isModalOpen: !0
                    });
                }
                return e;
            }()
        }, {
            key: "onCloseModal",
            value: function() {
                function e() {
                    this.updateState({
                        isModalOpen: !1
                    });
                }
                return e;
            }()
        }, {
            key: "onCreateProject",
            value: function() {
                function e(e) {
                    this.onCloseModal(), this.props.addProject(e);
                }
                return e;
            }()
        }, {
            key: "updateState",
            value: function() {
                function e(e) {
                    this.setState(a({}, e));
                }
                return e;
            }()
        }, {
            key: "render",
            value: function() {
                function e() {
                    var e = this.state.isModalOpen, t = this.props, n = t.onChangeSearch, r = t.onOnlyOpen, o = t.isOnlyOpen, u = t.searchValue;
                    return [ s.default.createElement(O.default, {
                        onAddProject: this.onAddProject,
                        onChangeSearch: n,
                        onOnlyOpen: r,
                        isOnlyOpen: o,
                        searchValue: u,
                        key: "header-container"
                    }), e && s.default.createElement(_.default, {
                        onSubmit: this.onCreateProject,
                        onClose: this.onCloseModal,
                        title: "Новый проект",
                        key: "add-header-container"
                    }) ];
                }
                return e;
            }()
        } ]), t;
    }(l.Component);
    j.propTypes = {
        addProject: d.default.func.isRequired,
        onChangeSearch: d.default.func.isRequired,
        onOnlyOpen: d.default.func.isRequired,
        isOnlyOpen: d.default.bool.isRequired,
        searchValue: d.default.string
    }, j.defaultProps = {};
    var C = function(e) {
        return (0, y.bindActionCreators)({
            addProject: P.addProject
        }, e);
    };
    t.default = (0, p.connect)(null, C)(j);
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(25), p = r(d), y = n(90), h = r(y), b = n(12), v = r(b), O = n(93), m = r(O), _ = function(e) {
        function t() {
            return o(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return i(t, e), a(t, [ {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props, t = e.onAddProject, n = e.onOnlyOpen, r = e.onChangeSearch, o = e.isOnlyOpen, u = e.searchValue, i = e.placeholder;
                    return l.default.createElement("div", {
                        className: m.default.header
                    }, l.default.createElement("div", {
                        className: m.default.wrapInput
                    }, l.default.createElement(p.default, {
                        onChange: r,
                        value: u,
                        placeholder: i
                    })), l.default.createElement(h.default, {
                        onClick: n,
                        checked: o
                    }, "Только открытые"), l.default.createElement(v.default, {
                        onClick: t
                    }, "Добавить проект"));
                }
                return e;
            }()
        } ]), t;
    }(c.PureComponent);
    _.propTypes = {
        onAddProject: f.default.func,
        onOnlyOpen: f.default.func,
        onChangeSearch: f.default.func,
        isOnlyOpen: f.default.bool.isRequired,
        searchValue: f.default.string,
        placeholder: f.default.string
    }, _.defaultProps = {
        placeholder: "Поиск по вакансиям"
    }, t.default = _;
}, function(e, t) {
    e.exports = {
        Placeholder: "VDzVWzvEbByZldF3rXflZ",
        ButtonText16: "L3FgCOj4VB2-TbulAma0V",
        ButtonText14: "_98nS1_Xep-a8og3ti8l34",
        Error: "_3sm64C0eN0_066u3euseUa",
        inputText: "_1ZbfyuCPqCxBy2EW5kPgNE VDzVWzvEbByZldF3rXflZ"
    };
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        var t = e.children, n = e.checked, r = e.onClick;
        return i.default.createElement("div", {
            className: [ s.default.checkbox, s.default.checkboxGlobal ]
        }, i.default.createElement("input", {
            type: "checkbox",
            id: "auth_block_save_for",
            onClick: r,
            checked: n,
            autoFocus: !0
        }), i.default.createElement("label", {
            htmlFor: "auth_block_save_for"
        }, t));
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(91), s = r(l);
    o.propTypes = {
        onClick: c.default.func.isRequired,
        children: c.default.string,
        checked: c.default.bool
    }, o.defaultProps = {
        children: "[*checkbox*]",
        checked: !1
    }, t.default = o;
}, function(e, t) {
    e.exports = {
        Placeholder: "iiGg0u6iAbOu85saC_QoV",
        ButtonText16: "_3uxaqAR2O9YUSfcV-WlNPG",
        ButtonText14: "_2I315t9npqpPdKHqANZdJn",
        Error: "_1XiVGt7tIYWrOxbHTsQmhI",
        checkbox: "_1rkP9q9q81IJ7sB8MLMWXL _3uxaqAR2O9YUSfcV-WlNPG"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_1MCpZa18fD3XPS7V8Qg5LV",
        ButtonText16: "_3yt2A5102k-jvrUuvTjann",
        ButtonText14: "_2bt4M515RODUM99wZOs18h",
        Error: "_1nMM13F8qjjCmN36IPkzvs",
        buttonBg: "_3nUXcsqJiWEHxkw79w1kR1 _2bt4M515RODUM99wZOs18h"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_1awVFG8kWvk8UGl6LsoUuZ",
        ButtonText16: "_29B43uTUm7w-lsvgtAwxuY",
        ButtonText14: "_2kmPkRTfcCGZp_RFb6waya",
        Error: "_2ys7Pq-LcLWYdqc51qEgMh",
        header: "_2uRHSimRJ3erVz9-duWHGo",
        wrapInput: "_3E9QPR-OsKw2za2eifHefa"
    };
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        var t = e.onSubmit, n = e.onChangeName, r = e.value, o = e.placeholder, u = e.type;
        return i.default.createElement("form", {
            onSubmit: t
        }, i.default.createElement("div", {
            className: y.default.button
        }, i.default.createElement(d.default, {
            onClick: t,
            type: u
        }, "Создать")), i.default.createElement("div", {
            className: y.default.input
        }, i.default.createElement(s.default, {
            onChange: n,
            placeholder: o,
            value: r
        })));
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(25), s = r(l), f = n(12), d = r(f), p = n(95), y = r(p);
    o.propTypes = {
        onSubmit: c.default.func.isRequired,
        onChangeName: c.default.func.isRequired,
        placeholder: c.default.string.isRequired,
        value: c.default.string.isRequired
    }, o.defaultProps = {
        type: "submit"
    }, t.default = o;
}, function(e, t) {
    e.exports = {
        Placeholder: "_3curYILd3PXcx9fPa0Hqf-",
        ButtonText16: "_2laI5L3nUaaK_YXdWS3xFf",
        ButtonText14: "_2rBb1tevowpgm8CK3C9_mq",
        Error: "_3cjK3cUxxWxre95YoZGnLz",
        button: "_2NQw-jGtzh0FM4iu2IMoFD",
        input: "_2a29fEGPIAWt8h535il-p8"
    };
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o() {
        return i.default.createElement("svg", {
            viewBox: "0 0 14 14",
            className: c.default.buttonClose
        }, i.default.createElement("path", {
            fillRule: "evenodd",
            d: "M13.969 1.406L8.39 6.984l5.578 5.579-1.406 1.406L6.984 8.39l-5.578 5.578L0 12.563l5.578-5.579L0 1.406 1.406 0l5.578 5.578L12.563 0z"
        }));
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0), i = r(u), a = n(97), c = r(a);
    o.propTypes = {}, o.defaultProps = {}, t.default = o;
}, function(e, t) {
    e.exports = {
        Placeholder: "_3P1wr9ibsn8ml-m5m3kn-s",
        ButtonText16: "_1UBMnwHDZ6VOnPlHywq-F0",
        ButtonText14: "_2x-fE5ScpyuuTfD8WKTFjP",
        Error: "_1cQRQERHK8y2fcsmOnZuDa",
        buttonClose: "WS7ZDkTDJt6J81ov18JLV"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_1YHguH4zqIKIaCoQtznsB9",
        ButtonText16: "ZGoKwy6sWSH9DmGIXFZkD",
        ButtonText14: "_3H39PZN7mvStv40nKeo9Ys",
        Error: "_1FkHHWPpQq2nuCFUdDPuGf",
        dialogWindow: "_1wCChJx8YHRpPj5ytuegqC",
        buttonClose: "_1IwbvU0fnjk9FAXgIUrITY",
        hr: "_1kh7mpoV5985wIruoULBJ2"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_1i2fokLKkUCVmgDSZHbWuW",
        ButtonText16: "_3EMeriupKlxElCL-Ghgf8t",
        ButtonText14: "lQYOCv5LnMbyxA8j6FFpI",
        Error: "_2rMhhOidgVl499mMVUAZW8"
    };
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e() {
            return "" + String(Math.random().toString(36).substr(2, 9));
        }
        return e;
    }();
    t.default = n;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, c = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), l = n(0), s = r(l), f = n(1), d = r(f), p = n(5), y = n(2), h = n(3), b = r(h), v = n(102), O = r(v), m = n(26), _ = r(m), P = n(32), j = r(P), C = n(13), E = n(124), w = function(e) {
        function t(e, n) {
            o(this, t);
            var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return (0, b.default)(r), r.id = null, r.state = {
                isModalOpen: !1,
                isModalOpenDelete: !1
            }, r;
        }
        return i(t, e), c(t, [ {
            key: "onAdd",
            value: function() {
                function e(e) {
                    this.id = e, this.updateState({
                        isModalOpen: !0
                    });
                }
                return e;
            }()
        }, {
            key: "onDelete",
            value: function() {
                function e(e) {
                    this.id = e, this.updateState({
                        isModalOpenDelete: !0
                    });
                }
                return e;
            }()
        }, {
            key: "onOpenClose",
            value: function() {
                function e(e) {
                    this.props.openCloseProject(e);
                }
                return e;
            }()
        }, {
            key: "onCloseModal",
            value: function() {
                function e() {
                    this.updateState({
                        isModalOpen: !1,
                        isModalOpenDelete: !1
                    });
                }
                return e;
            }()
        }, {
            key: "onCreateVacancy",
            value: function() {
                function e(e) {
                    var t = this.id;
                    this.resetId(), this.onCloseModal(), this.props.addVacancy(t, e);
                }
                return e;
            }()
        }, {
            key: "onDeleteSubmit",
            value: function() {
                function e() {
                    var e = this.id;
                    this.resetId(), this.onCloseModal(), this.props.removeProject(e);
                }
                return e;
            }()
        }, {
            key: "resetId",
            value: function() {
                function e() {
                    this.id = null;
                }
                return e;
            }()
        }, {
            key: "updateState",
            value: function() {
                function e(e) {
                    this.setState(a({}, e));
                }
                return e;
            }()
        }, {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props, t = e.projects, n = e.vacancies, r = e.titleModal, o = e.nameButtonModal, u = this.state, i = u.isModalOpen, a = u.isModalOpenDelete;
                    return [ s.default.createElement(O.default, {
                        projects: t,
                        vacancies: n,
                        onDelete: this.onDelete,
                        onOpenClose: this.onOpenClose,
                        onAdd: this.onAdd,
                        onClickHeader: this.onClickHeader,
                        key: "project-list"
                    }), i && s.default.createElement(_.default, {
                        onSubmit: this.onCreateVacancy,
                        onClose: this.onCloseModal,
                        title: "Новая вакансия",
                        key: "add-header-container"
                    }), a && s.default.createElement(j.default, {
                        title: String(r) + ' "' + String(t[this.id].title) + '"',
                        name: o,
                        onSubmit: this.onDeleteSubmit,
                        onClose: this.onCloseModal,
                        key: "modal-delete"
                    }) ];
                }
                return e;
            }()
        } ]), t;
    }(l.Component);
    w.propTypes = {
        projects: d.default.object.isRequired,
        vacancies: d.default.object.isRequired,
        addVacancy: d.default.func.isRequired,
        removeProject: d.default.func.isRequired,
        openCloseProject: d.default.func.isRequired,
        isOnlyOpen: d.default.bool.isRequired,
        searchValue: d.default.string
    }, w.defaultProps = {
        titleModal: "Удалить проект",
        nameButtonModal: "Да"
    };
    var g = function(e, t) {
        return {
            projects: (0, E.projectSelector)(e, t),
            vacancies: e.vacancies
        };
    }, T = function(e) {
        return (0, y.bindActionCreators)({
            addVacancy: C.addVacancy,
            removeProject: C.removeProject,
            openCloseProject: C.openCloseProject
        }, e);
    };
    t.default = (0, p.connect)(g, T)(w);
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(103), p = r(d);
    n(123);
    var y = function(e) {
        function t() {
            return o(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return i(t, e), a(t, [ {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props, t = e.projects, n = e.vacancies, r = e.onAdd, o = e.onDelete, u = e.onOpenClose;
                    return l.default.createElement("div", null, Object.keys(t).map(function(e) {
                        var i = t[e], a = i.id, c = i.title, s = i.isClosed, f = i.items, d = f.map(function(e) {
                            return n[e];
                        }), y = function() {
                            function e() {
                                r(a);
                            }
                            return e;
                        }(), h = function() {
                            function e() {
                                o(a);
                            }
                            return e;
                        }(), b = function() {
                            function e() {
                                u(a);
                            }
                            return e;
                        }();
                        return l.default.createElement(p.default, {
                            key: a,
                            vacancies: d,
                            isClosed: s,
                            title: c,
                            onAdd: y,
                            onDelete: h,
                            onOpenClose: b
                        });
                    }));
                }
                return e;
            }()
        } ]), t;
    }(c.PureComponent);
    y.propTypes = {
        projects: f.default.object.isRequired,
        vacancies: f.default.object.isRequired,
        onAdd: f.default.func.isRequired,
        onDelete: f.default.func.isRequired,
        onOpenClose: f.default.func.isRequired
    }, y.defaultProps = {}, t.default = y;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(3), p = r(d), y = n(104), h = r(y), b = function(e) {
        function t(e, n) {
            o(this, t);
            var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return (0, p.default)(r), r.state = {
                isToogle: !1
            }, r;
        }
        return i(t, e), a(t, [ {
            key: "componentWillReceiveProps",
            value: function() {
                function e(e) {
                    var t = e.vacancies, n = this.props.vacancies, r = this.state.isToogle;
                    0 === n.length && t.length > 0 && !r && this.setState({
                        isToogle: !0
                    });
                }
                return e;
            }()
        }, {
            key: "onClickHeader",
            value: function() {
                function e() {
                    this.setState(function(e) {
                        return {
                            isToogle: !e.isToogle
                        };
                    });
                }
                return e;
            }()
        }, {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props, t = e.vacancies, n = e.isClosed, r = e.title, o = e.onAdd, u = e.onDelete, i = e.onOpenClose;
                    return l.default.createElement(h.default, {
                        vacancies: t,
                        isClosed: n,
                        title: r,
                        onAdd: o,
                        onDelete: u,
                        onOpenClose: i,
                        onClickHeader: this.onClickHeader,
                        isToogle: this.state.isToogle
                    });
                }
                return e;
            }()
        } ]), t;
    }(c.Component);
    b.propTypes = {
        vacancies: f.default.array.isRequired,
        isClosed: f.default.bool.isRequired,
        title: f.default.string.isRequired,
        onAdd: f.default.func.isRequired,
        onDelete: f.default.func.isRequired,
        onOpenClose: f.default.func.isRequired
    }, b.defaultProps = {}, t.default = b;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(105), p = r(d), y = n(113), h = r(y), b = n(122), v = r(b), O = function(e) {
        function t() {
            return o(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return i(t, e), a(t, [ {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props, t = e.vacancies, n = e.isClosed, r = e.title, o = e.onAdd, u = e.onDelete, i = e.onOpenClose, a = e.isToogle, c = e.onClickHeader, s = a ? "active" : "";
                    return l.default.createElement("article", {
                        className: [ v.default.project, s ].join(" ")
                    }, l.default.createElement(p.default, {
                        title: r,
                        count: t.length,
                        isClosed: n,
                        onAdd: o,
                        onDelete: u,
                        onOpenClose: i,
                        onClickHeader: c
                    }), a && l.default.createElement(h.default, {
                        vacancies: t
                    }));
                }
                return e;
            }()
        } ]), t;
    }(c.PureComponent);
    O.propTypes = {
        vacancies: f.default.array.isRequired,
        isClosed: f.default.bool.isRequired,
        isToogle: f.default.bool.isRequired,
        title: f.default.string.isRequired,
        onAdd: f.default.func.isRequired,
        onDelete: f.default.func.isRequired,
        onOpenClose: f.default.func.isRequired,
        onClickHeader: f.default.func.isRequired
    }, O.defaultProps = {}, t.default = O;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(106), p = r(d), y = n(31), h = r(y), b = n(112), v = r(b), O = function(e) {
        function t() {
            return o(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return i(t, e), a(t, [ {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props, t = e.title, n = e.count, r = e.isClosed, o = e.onAdd, u = e.onDelete, i = e.onOpenClose, a = e.onClickHeader;
                    return l.default.createElement("section", {
                        className: v.default.sectionProject
                    }, l.default.createElement("header", {
                        onClick: a
                    }, l.default.createElement("h2", null, t)), l.default.createElement(p.default, {
                        count: n,
                        isClosed: r,
                        onAdd: o
                    }), l.default.createElement(h.default, {
                        onDelete: u,
                        onClick: i,
                        isClosed: r
                    }, r ? "Открыть проект" : "Закрыть проект"));
                }
                return e;
            }()
        } ]), t;
    }(c.PureComponent);
    O.propTypes = {
        title: f.default.string.isRequired,
        count: f.default.number.isRequired,
        isClosed: f.default.bool.isRequired,
        onAdd: f.default.func.isRequired,
        onDelete: f.default.func.isRequired,
        onOpenClose: f.default.func.isRequired,
        onClickHeader: f.default.func.isRequired
    }, O.defaultProps = {}, t.default = O;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(29), p = r(d), y = n(30), h = r(y), b = n(109), v = r(b), O = n(110), m = r(O), _ = function(e) {
        function t() {
            return o(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return i(t, e), a(t, [ {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props, t = e.count, n = e.isClosed, r = e.onAdd, o = (0, v.default)(t, [ "вакансия", "вакансии", "вакансий" ]);
                    return l.default.createElement("article", {
                        className: m.default.articleBody
                    }, l.default.createElement("div", null, l.default.createElement("span", {
                        className: m.default.articleSpan
                    }, t, " ", o), n ? l.default.createElement("div", {
                        className: m.default.closed
                    }, l.default.createElement(h.default, null), l.default.createElement("span", null, "Проект закрыт, сотрудники наняты")) : l.default.createElement("div", {
                        className: [ m.default.addVacancy, "green" ].join(" ")
                    }, l.default.createElement(p.default, {
                        onClick: r
                    }, "Добавить вакансию"))));
                }
                return e;
            }()
        } ]), t;
    }(c.PureComponent);
    _.propTypes = {
        count: f.default.number.isRequired,
        isClosed: f.default.bool.isRequired,
        onAdd: f.default.func.isRequired
    }, _.defaultProps = {}, t.default = _;
}, function(e, t) {
    e.exports = {
        Placeholder: "_2HO65DH31m98NVTtvw16G-",
        ButtonText16: "_25URQD9LJeEjf6P2k547LN",
        ButtonText14: "_2MepfOcyx5ZeeHNPUc8HFL",
        Error: "_2oJ1Tn5tBsjPIozBvFGeaz",
        buttonCommon: "_3-7EJCJ8qM0CJ_VhX5zFEY _2MepfOcyx5ZeeHNPUc8HFL"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_34omg6Ths7OlpE3Ggt_Jxg",
        ButtonText16: "rUuPzxIMyh-4JUK_NWbVu",
        ButtonText14: "_2sC3VGzuz7Qc6RjDNNPicZ",
        Error: "_3ZFpFfdycWnq1mQdJqGnJH",
        checkIcon: "_31y3ftm5AbmlGDp7cZR52U"
    };
}, function(e, t) {
    function n(e, t) {
        var n = [ 2, 0, 1, 1, 1, 2 ];
        return t[e % 100 > 4 && e % 100 < 20 ? 2 : n[e % 10 < 5 ? e % 10 : 5]];
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = n;
}, function(e, t) {
    e.exports = {
        Placeholder: "_1M8RuVc7VhIIZoxhsw-u6l",
        ButtonText16: "_3nMIHeAgI_jDp0uTxWJbYw",
        ButtonText14: "_3PvPWLiW3IFCJBeekLx0qr",
        Error: "_2O5Btg3STbHQC-bSdXXaHG",
        articleSpan: "_1-oiRzgO2ELd1Dqmrp6Xfp _3nMIHeAgI_jDp0uTxWJbYw",
        closed: "_1JKmPJXGMjYawQdXYQvWX3",
        addVacancy: "_1uEbE5E8emExw_-NGKauQL"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_1KdCPvUkzAmUYr8Ztwd8uV",
        ButtonText16: "_18xkWo7IyRWHnwvZWJa0_L",
        ButtonText14: "_21IRcAU_rTwwwMWSyIYC7Z",
        Error: "_1XknYe58vkPjsKM6hykN4t",
        buttonSet: "_2s2L7NxIAdJX6WW72V4z_h",
        buttonClick: "_186-9b42pDTUoW2-9tmkNJ",
        buttonDelete: "_1sIeyHsnbvKo3GYrGAQtyi"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_2-NUGjQcehSO3JqDp23IAp",
        ButtonText16: "_3tEa90R14mZUC8L9R7PEuX",
        ButtonText14: "_2TlyjyluralvhpaltPxBy0",
        Error: "_3a-m9sM_Ar4znoykSK_IZm",
        sectionProject: "Oj3O5aYmew69yVmsj7x1y"
    };
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, c = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), l = n(0), s = r(l), f = n(1), d = r(f), p = n(5), y = n(2), h = n(3), b = r(h), v = n(114), O = r(v), m = n(32), _ = r(m), P = n(13), j = function(e) {
        function t(e, n) {
            o(this, t);
            var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return (0, b.default)(r), r.id = null, r.state = {
                isModalOpen: !1
            }, r;
        }
        return i(t, e), c(t, [ {
            key: "onOpenClose",
            value: function() {
                function e(e) {
                    this.props.openCloseVacancies(e);
                }
                return e;
            }()
        }, {
            key: "onCloseModal",
            value: function() {
                function e() {
                    this.updateState({
                        isModalOpen: !1
                    });
                }
                return e;
            }()
        }, {
            key: "onDelete",
            value: function() {
                function e(e) {
                    this.id = e, this.updateState({
                        isModalOpen: !0
                    });
                }
                return e;
            }()
        }, {
            key: "onDeleteSubmit",
            value: function() {
                function e(e) {
                    e.preventDefault(), this.onCloseModal();
                    var t = this.id;
                    this.resetId(), this.props.removeVacancy(t);
                }
                return e;
            }()
        }, {
            key: "resetId",
            value: function() {
                function e() {
                    this.id = null;
                }
                return e;
            }()
        }, {
            key: "updateState",
            value: function() {
                function e(e) {
                    this.setState(a({}, e));
                }
                return e;
            }()
        }, {
            key: "render",
            value: function() {
                function e() {
                    var e = this, t = this.state.isModalOpen, n = this.props, r = n.vacancies, o = n.titleModal, u = n.nameButtonModal, i = void 0;
                    if (t) {
                        var a = Object.keys(r).filter(function(t) {
                            return r[t].id === e.id;
                        });
                        i = r[a].title;
                    }
                    return [ s.default.createElement(O.default, {
                        vacancies: r,
                        onDelete: this.onDelete,
                        onOpenClose: this.onOpenClose,
                        key: "vacancy-list"
                    }), t && s.default.createElement(_.default, {
                        title: String(o) + ' "' + String(i) + '"',
                        name: u,
                        onSubmit: this.onDeleteSubmit,
                        onClose: this.onCloseModal,
                        key: "modal-delete"
                    }) ];
                }
                return e;
            }()
        } ]), t;
    }(l.Component);
    j.propTypes = {
        vacancies: d.default.array.isRequired,
        removeVacancy: d.default.func.isRequired,
        openCloseVacancies: d.default.func.isRequired
    }, j.defaultProps = {
        titleModal: "Удалить вакансию",
        nameButtonModal: "Да"
    };
    var C = function(e) {
        return (0, y.bindActionCreators)({
            removeVacancy: P.removeVacancy,
            openCloseVacancies: P.openCloseVacancies
        }, e);
    };
    t.default = (0, p.connect)(null, C)(j);
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(115), p = r(d), y = function(e) {
        function t() {
            return o(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return i(t, e), a(t, [ {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props, t = e.vacancies, n = e.onDelete, r = e.onOpenClose;
                    return l.default.createElement("div", null, Object.keys(t).map(function(e) {
                        var o = t[e], u = o.id, i = o.title, a = o.isClosed, c = function() {
                            function e() {
                                n(u);
                            }
                            return e;
                        }(), s = function() {
                            function e() {
                                r(u);
                            }
                            return e;
                        }();
                        return l.default.createElement(p.default, {
                            key: u,
                            isClosed: a,
                            title: i,
                            onOpenClose: s,
                            onDelete: c
                        });
                    }));
                }
                return e;
            }()
        } ]), t;
    }(c.PureComponent);
    y.propTypes = {
        vacancies: f.default.array.isRequired,
        onDelete: f.default.func.isRequired,
        onOpenClose: f.default.func.isRequired
    }, y.defaultProps = {}, t.default = y;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(31), p = r(d), y = n(116), h = r(y), b = n(120), v = r(b), O = function(e) {
        function t() {
            return o(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return i(t, e), a(t, [ {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props, t = e.title, n = e.isClosed, r = e.onDelete, o = e.onOpenClose;
                    return l.default.createElement("article", {
                        className: v.default.articleProject
                    }, l.default.createElement("header", null, l.default.createElement("h4", null, t)), l.default.createElement(h.default, {
                        isClosed: n
                    }), l.default.createElement(p.default, {
                        onDelete: r,
                        onClick: o,
                        isClosed: n
                    }, n ? "Открыть вакансию" : "Закрыть вакансию"));
                }
                return e;
            }()
        } ]), t;
    }(c.PureComponent);
    O.propTypes = {
        title: f.default.string.isRequired,
        isClosed: f.default.bool.isRequired,
        onDelete: f.default.func.isRequired,
        onOpenClose: f.default.func.isRequired
    }, O.defaultProps = {}, t.default = O;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function i(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                Object.defineProperty(e, r.key, r);
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(117), p = r(d), y = n(30), h = r(y), b = n(119), v = r(b), O = function(e) {
        function t() {
            return o(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return i(t, e), a(t, [ {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props.isClosed;
                    return l.default.createElement("section", {
                        className: v.default.vacancy
                    }, e ? l.default.createElement("div", null, l.default.createElement(h.default, null), l.default.createElement("span", null, "Вакансия закрыта, сотрудник нанят")) : l.default.createElement("div", null, l.default.createElement(p.default, null), l.default.createElement("span", null, "Вакансия открыта, идет подбор кандидатов")));
                }
                return e;
            }()
        } ]), t;
    }(c.PureComponent);
    O.propTypes = {
        isClosed: f.default.bool
    }, O.defaultProps = {
        isClosed: !0
    }, t.default = O;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        return i.default.createElement("svg", {
            viewBox: "0 0 20 20",
            className: c.default.searchIcon
        }, i.default.createElement("path", {
            d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
        }), i.default.createElement("path", {
            d: "M0 0h24v24H0z",
            fill: "none"
        }));
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0), i = r(u), a = n(118), c = r(a);
    o.propTypes = {}, o.defaultProps = {}, t.default = o;
}, function(e, t) {
    e.exports = {
        Placeholder: "_2F6ucfJFkE5wHS4UiIhumv",
        ButtonText16: "TkoHOjGm4ibsmPbZtwUvo",
        ButtonText14: "_1W_99_8GuWKxglJ2XhEmyH",
        Error: "_2siVUTaERw8orSlc2JbxbI",
        searchIcon: "_1uFDKbErizpVwHyEaPkWOK"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_2SyIUPsn4aPefrOCamG-8n",
        ButtonText16: "_30biOcOemy9-ukBCd7Ze-",
        ButtonText14: "Rg_8F9FFYop8KZvH3EoO4",
        Error: "qDjtSXV-8buj7a-wZgJbL",
        vacancy: "_3zSa9k3xcO3fHyjlWidJk8"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_3rlWFHwGtmPOifXwRw-V8V",
        ButtonText16: "tiUAjkFU69nHiwQzD6dv0",
        ButtonText14: "_1sy_Zegu8KlFlyZnnEZnLC",
        Error: "_3M-IGu0QpYnq_jAWWmzpS_",
        articleProject: "I90uwYjT_QoDuOtcjvMD9"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "hqlmtWZqU_i5uYbGcS3cn",
        ButtonText16: "_3tO4ZyZOOv8DRy1GJSfmco",
        ButtonText14: "_2utVTPaKUyunt-eGKkOYq1",
        Error: "_16EZt8asTAiTs9vfwZts1g",
        button: "_2F1gS1sMlZk0STuG2eMMDy"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_1PK3W700FQrxgT5zRcZMA1",
        ButtonText16: "_36ceu_Wcn-Ny39t_VjTDcj",
        ButtonText14: "_3_VNalMDpLpgOFkDqt_9yx",
        Error: "CyuE28BwrXMB8Jobkwp36",
        project: "_1zqvaKZdYfauHw2sdQ3vWe"
    };
}, function(e, t) {}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.projectSelector = void 0;
    var r = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, o = n(125), u = n(11), i = function(e) {
        return e.projects;
    }, a = function(e) {
        return e.vacancies;
    }, c = function(e, t) {
        return {
            searchValue: t.searchValue,
            isOnlyOpen: t.isOnlyOpen
        };
    };
    t.projectSelector = (0, o.createSelector)(i, a, c, function(e, t, n) {
        var o = n.searchValue, i = n.isOnlyOpen;
        if ((0, u.isEmpty)(o) && !i) return e;
        var a = {};
        return Object.keys(e).forEach(function(n) {
            var c = e[n], l = c.items, s = l.filter(function(e) {
                var n = t[e], r = n.title, a = n.isClosed, c = i && !a, l = !!(0, u.isEmpty)(o) || r.toLowerCase().indexOf(o.toLowerCase()) > -1;
                return !(0, u.isEmpty)(o) && i ? c && l : (0, u.isEmpty)(o) && i ? c : l;
            });
            (0, u.isEmpty)(s) || (a[n] = r({}, c, {
                items: s
            }));
        }), a;
    });
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        return e === t;
    }
    function o(e, t, n) {
        if (null === t || null === n || t.length !== n.length) return !1;
        for (var r = t.length, o = 0; o < r; o++) if (!e(t[o], n[o])) return !1;
        return !0;
    }
    function u(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r, n = null, u = null;
        return function() {
            return o(t, n, arguments) || (u = e.apply(null, arguments)), n = arguments, u;
        };
    }
    function i(e) {
        var t = Array.isArray(e[0]) ? e[0] : e;
        if (!t.every(function(e) {
            return "function" == typeof e;
        })) {
            var n = t.map(function(e) {
                return typeof e;
            }).join(", ");
            throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + n + "]");
        }
        return t;
    }
    function a(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        return function() {
            for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
            var a = 0, c = r.pop(), l = i(r), s = e.apply(void 0, [ function() {
                return a++, c.apply(null, arguments);
            } ].concat(n)), f = u(function() {
                for (var e = [], t = l.length, n = 0; n < t; n++) e.push(l[n].apply(null, arguments));
                return s.apply(null, e);
            });
            return f.resultFunc = c, f.recomputations = function() {
                return a;
            }, f.resetRecomputations = function() {
                return a = 0;
            }, f;
        };
    }
    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l;
        if ("object" != typeof e) throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof e);
        var n = Object.keys(e);
        return t(n.map(function(t) {
            return e[t];
        }), function() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return t.reduce(function(e, t, r) {
                return e[n[r]] = t, e;
            }, {});
        });
    }
    t.__esModule = !0, t.defaultMemoize = u, t.createSelectorCreator = a, t.createStructuredSelector = c;
    var l = t.createSelector = a(u);
} ], [ 33 ]);
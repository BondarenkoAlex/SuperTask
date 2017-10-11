webpackJsonp([ 0 ], [ , function(e, t, n) {
    e.exports = n(46)();
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(18), o = n(66), u = n(67), i = n(68), a = n(22);
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
    e.exports = n(83);
}, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(45), o = n(17), u = n(51);
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
    var o = n(54), u = n(59), i = n(61), a = "[object Object]", c = Function.prototype, l = Object.prototype, s = c.toString, f = l.hasOwnProperty, d = s.call(Object);
    t.a = r;
}, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.ADD_PROJECT = "ADD_PROJECT", t.REMOVE_PROJECT = "REMOVE_PROJECT", t.OPEN_CLOSE_PROJECT = "OPEN_CLOSE_PROJECT", 
    t.ADD_VACANCY = "ADD_VACANCY", t.REMOVE_VACANCY = "REMOVE_VACANCY", t.OPEN_CLOSE_VACANCY = "OPEN_CLOSE_VACANCY";
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
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(93), s = r(l);
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
            var r = n(), o = r.vacancies, u = void 0;
            if ((0, h.isArray)(e)) u = {
                ids: e,
                status: !0
            }; else {
                var i = o[e].isClosed;
                u = {
                    ids: [ e ],
                    status: !i
                };
            }
            t(s(f.OPEN_CLOSE_VACANCY, u));
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
    var f = n(10), d = n(101), p = function(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }(d), h = n(29);
}, function(e, t) {
    e.exports = {
        Placeholder: "_2pl33p34AnM-IL2gdD_KZC",
        ButtonText: "_1XM5jWAkq4IyZp_C-ppmuT",
        "White-text-button": "_3IGOCNwZFrbopfNumCOwGs",
        buttonCommon: "F3CyX7FbJq35Mos6_zrk- _1XM5jWAkq4IyZp_C-ppmuT",
        buttonBlackOutline: "_1wjJb-8dwb1IQDmxPblmNV F3CyX7FbJq35Mos6_zrk- _1XM5jWAkq4IyZp_C-ppmuT",
        buttonGreenOutline: "_16jLc2UP_t-N95YkKqCU3k F3CyX7FbJq35Mos6_zrk- _1XM5jWAkq4IyZp_C-ppmuT"
    };
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
        } : s, m = l.methodName, j = void 0 === m ? "connectAdvanced" : m, C = l.renderCountProp, P = void 0 === C ? void 0 : C, g = l.shouldHandleStateChanges, w = void 0 === g || g, E = l.storeKey, S = void 0 === E ? "store" : E, T = l.withRef, k = void 0 !== T && T, M = i(l, [ "getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef" ]), R = S + "Subscription", x = O++, N = (t = {}, 
        t[S] = b.a, t[R] = b.b, t), q = (n = {}, n[R] = b.b, n);
        return function(t) {
            p()("function" == typeof t, "You must pass a component to the function returned by connect. Instead received " + JSON.stringify(t));
            var n = t.displayName || t.name || "Component", i = d(n), l = v({}, M, {
                getDisplayName: d,
                methodName: j,
                renderCountProp: P,
                shouldHandleStateChanges: w,
                storeKey: S,
                withRef: k,
                displayName: i,
                wrappedComponentName: n,
                WrappedComponent: t
            }), s = function(n) {
                function s(e, t) {
                    r(this, s);
                    var u = o(this, n.call(this, e, t));
                    return u.version = x, u.state = {}, u.renderCount = 0, u.store = e[S] || t[S], u.propsMode = Boolean(e[S]), 
                    u.setWrappedInstance = u.setWrappedInstance.bind(u), p()(u.store, 'Could not find "' + S + '" in either the context or props of "' + i + '". Either wrap the root component in a <Provider>, or explicitly pass "' + S + '" as a prop to "' + i + '".'), 
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
                    return p()(k, "To access the wrapped instance, you need to specify { withRef: true } in the options argument of the " + j + "() call."), 
                    this.wrappedInstance;
                }, s.prototype.setWrappedInstance = function(e) {
                    this.wrappedInstance = e;
                }, s.prototype.initSelector = function() {
                    var t = e(this.store.dispatch, l);
                    this.selector = c(t, this.store), this.selector.run(this.props);
                }, s.prototype.initSubscription = function() {
                    if (w) {
                        var e = (this.propsMode ? this.props : this.context)[R];
                        this.subscription = new y.a(this.store, e, this.onStateChange.bind(this)), this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
                    }
                }, s.prototype.onStateChange = function() {
                    this.selector.run(this.props), this.selector.shouldComponentUpdate ? (this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate, 
                    this.setState(_)) : this.notifyNestedSubs();
                }, s.prototype.notifyNestedSubsOnComponentDidUpdate = function() {
                    this.componentDidUpdate = void 0, this.notifyNestedSubs();
                }, s.prototype.isSubscribed = function() {
                    return Boolean(this.subscription) && this.subscription.isSubscribed();
                }, s.prototype.addExtraProps = function(e) {
                    if (!(k || P || this.propsMode && this.subscription)) return e;
                    var t = v({}, e);
                    return k && (t.ref = this.setWrappedInstance), P && (t[P] = this.renderCount++), 
                    this.propsMode && this.subscription && (t[R] = this.subscription), t;
                }, s.prototype.render = function() {
                    var e = this.selector;
                    if (e.shouldComponentUpdate = !1, e.error) throw e.error;
                    return Object(h.createElement)(t, this.addExtraProps(e.props));
                }, s;
            }(h.Component);
            return s.WrappedComponent = t, s.displayName = i, s.childContextTypes = q, s.contextTypes = N, 
            s.propTypes = N, f()(s, t);
        };
    }
    t.a = l;
    var s = n(48), f = n.n(s), d = n(49), p = n.n(d), h = n(0), y = (n.n(h), n(50)), b = n(16), v = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, O = 0, _ = {};
}, function(e, t, n) {
    "use strict";
    function r(e, t, n) {
        function u() {
            v === b && (v = b.slice());
        }
        function c() {
            return y;
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
                O = !0, y = h(y, e);
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
            h = e, s({
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
        var h = e, y = t, b = [], v = b, O = !1;
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
    var o = n(9), u = n(62), i = n.n(u), a = {
        INIT: "@@redux/INIT"
    };
}, function(e, t, n) {
    "use strict";
    var r = n(55), o = r.a.Symbol;
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
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(90), s = r(l);
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
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(3), p = r(d), h = n(95), y = r(h), b = n(27), v = r(b), O = n(28), _ = r(O), m = function(e) {
        function t(e, n) {
            o(this, t);
            var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return (0, p.default)(r), r.state = {
                value: ""
            }, r;
        }
        return i(t, e), a(t, [ {
            key: "onChange",
            value: function() {
                function e(e) {
                    var t = e.target.value;
                    this.setState(Object.assign({}, this.state, {
                        value: t
                    }));
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
                    return l.default.createElement(_.default, null, l.default.createElement(v.default, {
                        onClose: t,
                        title: n
                    }, l.default.createElement(y.default, {
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
    m.propTypes = {
        title: f.default.string.isRequired,
        onSubmit: f.default.func.isRequired,
        onClose: f.default.func.isRequired
    }, m.defaultProps = {}, t.default = m;
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
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(97), s = r(l), f = n(99), d = r(f);
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
    }(), c = n(0), l = (r(c), n(7)), s = r(l), f = n(1), d = r(f), p = n(3), h = r(p);
    n(100);
    var y = function(e) {
        function t(e, n) {
            o(this, t);
            var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return (0, h.default)(r), r.modalRoot = document.getElementById("modal-root"), r.el = document.createElement("div"), 
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
    y.propTypes = {
        children: d.default.element
    }, y.defaultProps = {
        children: null
    }, t.default = y;
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
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(13), s = r(l);
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
    var u = n(0), i = r(u), a = n(1), c = (r(a), n(109)), l = r(c);
    o.propTypes = {}, o.defaultProps = {}, t.default = o;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        var t = e.onClick, n = e.onDelete, r = e.children;
        return i.default.createElement("aside", {
            className: d.default.buttonSet
        }, i.default.createElement("div", {
            className: d.default.buttonClick
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
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(112), s = r(l), f = n(113), d = r(f);
    o.propTypes = {
        onClick: c.default.func.isRequired,
        onDelete: c.default.func.isRequired,
        children: c.default.string.isRequired
    }, o.defaultProps = {}, t.default = o;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        var t = e.onSubmit, n = e.onClose, r = e.name, o = e.title, u = e.type;
        return i.default.createElement(h.default, null, i.default.createElement(d.default, {
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
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(11), s = r(l), f = n(27), d = r(f), p = n(28), h = r(p), y = n(123), b = r(y);
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
    var o = n(0), u = r(o), i = n(7), a = n(5), c = n(73), l = r(c), s = n(82), f = r(s), d = (0, 
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
    var r = n(4), o = n(6), u = n(47);
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
            for (var h = 0; h < p.length; ++h) {
                var y = p[h];
                if (!(r[y] || o[y] || f && f[y])) {
                    var b = c(n, y);
                    try {
                        u(t, y, b);
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
    var i = n(17), a = n(52), c = n(53), l = n(69), s = n(70), f = n(71), d = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    };
    t.a = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.connectHOC, n = void 0 === t ? i.a : t, p = e.mapStateToPropsFactories, h = void 0 === p ? l.a : p, y = e.mapDispatchToPropsFactories, b = void 0 === y ? c.a : y, v = e.mergePropsFactories, O = void 0 === v ? s.a : v, _ = e.selectorFactory, m = void 0 === _ ? f.a : _;
        return function(e, t, i) {
            var c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, l = c.pure, s = void 0 === l || l, f = c.areStatesEqual, p = void 0 === f ? u : f, y = c.areOwnPropsEqual, v = void 0 === y ? a.a : y, _ = c.areStatePropsEqual, j = void 0 === _ ? a.a : _, C = c.areMergedPropsEqual, P = void 0 === C ? a.a : C, g = r(c, [ "pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual" ]), w = o(e, h, "mapStateToProps"), E = o(t, b, "mapDispatchToProps"), S = o(i, O, "mergeProps");
            return n(m, d({
                methodName: "connect",
                getDisplayName: function(e) {
                    return "Connect(" + e + ")";
                },
                shouldHandleStateChanges: Boolean(e),
                initMapStateToProps: w,
                initMapDispatchToProps: E,
                initMergeProps: S,
                pure: s,
                areStatesEqual: p,
                areOwnPropsEqual: v,
                areStatePropsEqual: j,
                areMergedPropsEqual: P
            }, g));
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
    var o = n(19), u = n(57), i = n(58), a = "[object Null]", c = "[object Undefined]", l = o.a ? o.a.toStringTag : void 0;
    t.a = r;
}, function(e, t, n) {
    "use strict";
    var r = n(56), o = "object" == typeof self && self && self.Object === Object && self, u = r.a || o || Function("return this")();
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
    var r = n(60), o = Object(r.a)(Object.getPrototypeOf, Object);
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
    e.exports = n(63);
}, function(e, t, n) {
    "use strict";
    (function(e, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o, u = n(65), i = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }(u);
        o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : r;
        var a = (0, i.default)(o);
        t.default = a;
    }).call(t, n(20), n(64)(e));
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
            return h = o, y = u, b = e(h, y), v = t(r, y), O = n(b, v, y), p = !0, O;
        }
        function i() {
            return b = e(h, y), t.dependsOnOwnProps && (v = t(r, y)), O = n(b, v, y);
        }
        function a() {
            return e.dependsOnOwnProps && (b = e(h, y)), t.dependsOnOwnProps && (v = t(r, y)), 
            O = n(b, v, y);
        }
        function c() {
            var t = e(h, y), r = !d(t, b);
            return b = t, r && (O = n(b, v, y)), O;
        }
        function l(e, t) {
            var n = !f(t, y), r = !s(e, h);
            return h = e, y = t, n && r ? i() : n ? a() : r ? c() : O;
        }
        var s = o.areStatesEqual, f = o.areOwnPropsEqual, d = o.areStatePropsEqual, p = !1, h = void 0, y = void 0, b = void 0, v = void 0, O = void 0;
        return function(e, t) {
            return p ? l(e, t) : u(e, t);
        };
    }
    function i(e, t) {
        var n = t.initMapStateToProps, i = t.initMapDispatchToProps, a = t.initMergeProps, c = r(t, [ "initMapStateToProps", "initMapDispatchToProps", "initMergeProps" ]), l = n(e, c), s = i(e, c), f = a(e, c);
        return (c.pure ? u : o)(l, s, f, e, c);
    }
    t.a = i;
    n(72);
}, function(e, t, n) {
    "use strict";
    n(8);
}, function(e, t, n) {
    e.exports = n(74);
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
    var u = n(2), i = n(75), a = n(78), c = r(a), l = n(79), s = r(l), f = (0, i.composeWithDevTools)({}), d = f((0, 
    u.applyMiddleware)(c.default));
}, function(e, t, n) {
    "use strict";
    var r = (n(2).compose, n(76));
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
    var u = n(77), i = n(2).compose;
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
    var o = n(2), u = n(80), i = r(u), a = n(81), c = r(a), l = (0, o.combineReducers)({
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
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a, t = arguments[1];
        switch (t.type) {
          case i.ADD_PROJECT:
            return Object.assign({}, e, t.payload);

          case i.REMOVE_PROJECT:
            var n = e;
            return delete n[t.payload.projectId], n;

          case i.ADD_VACANCY:
            var u = Object.keys(t.payload).map(function(e) {
                return t.payload[e];
            }).pop(), c = u.id, l = u.projectId, s = e[l], f = s.items, d = [].concat(o(f), [ c ]);
            return Object.assign({}, e, r({}, l, Object.assign({}, s, {
                items: d
            })));

          case i.REMOVE_VACANCY:
            var p = t.payload, h = p.projectId, y = p.vacancyId, b = e[h], v = b.items, O = v.filter(function(e) {
                return e !== y;
            });
            return Object.assign({}, e, r({}, h, Object.assign({}, b, {
                items: O
            })));

          case i.OPEN_CLOSE_PROJECT:
            var _ = t.payload, m = e[_], j = m.isClosed;
            return Object.assign({}, e, r({}, _, Object.assign({}, m, {
                isClosed: !j
            })));

          default:
            return e;
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(10), a = {};
    t.default = u;
}, function(e, t, n) {
    function r() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u, t = arguments[1];
        switch (t.type) {
          case o.ADD_VACANCY:
            return Object.assign({}, e, t.payload);

          case o.REMOVE_VACANCY:
            var n = Object.assign({}, e);
            return delete n[t.payload.vacancyId], n;

          case o.REMOVE_PROJECT:
            var r = Object.assign({}, e);
            return t.payload.vacancies.forEach(function(e) {
                delete r[e];
            }), r;

          case o.OPEN_CLOSE_VACANCY:
            var i = Object.assign({}, e), a = t.payload, c = a.ids, l = a.status;
            return c.forEach(function(e) {
                i[e].isClosed = l;
            }), i;

          case "":
            return Object.assign({}, e, {
                isFetching: !1,
                error: t.payload
            });

          default:
            return e;
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o = n(10), u = {};
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
    }(), c = n(0), l = r(c), s = n(3), f = r(s), d = n(84), p = r(d), h = n(88), y = r(h), b = n(102), v = r(b), O = function(e) {
        function t(e, n) {
            o(this, t);
            var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return (0, f.default)(r), r.state = {
                searchValue: void 0,
                isOnlyOpen: !1
            }, r;
        }
        return i(t, e), a(t, [ {
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
                    this.setState(Object.assign({}, this.state, e));
                }
                return e;
            }()
        }, {
            key: "render",
            value: function() {
                function e() {
                    var e = this.state, t = e.searchValue, n = e.isOnlyOpen;
                    return l.default.createElement(p.default, null, l.default.createElement(y.default, {
                        onOnlyOpen: this.onOnlyOpen,
                        onChangeSearch: this.onChangeSearch,
                        searchValue: t,
                        isOnlyOpen: n
                    }), l.default.createElement(v.default, {
                        searchValue: t,
                        isOnlyOpen: n
                    }));
                }
                return e;
            }()
        } ]), t;
    }(c.Component);
    O.propTypes = {}, O.defaultProps = {}, t.default = O;
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
    n(85), n(86);
    var l = n(87), s = r(l);
    o.propTypes = {
        children: c.default.oneOfType([ c.default.element, c.default.node ]).isRequired
    }, o.defaultProps = {}, t.default = o;
}, function(e, t) {}, function(e, t) {
    e.exports = {
        Placeholder: "_24-8WRZ_q785O0dw_-8naz",
        ButtonText: "_3ReSVj_oKAgk7iEqn68ux7",
        "White-text-button": "_2v5G138n9UC0vtjM8KjE1a"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_1X9nKpG17r8gnTV_bazFm-",
        ButtonText: "_1FQfzrIvkh0MSPG14HXiUy",
        "White-text-button": "_2aH66YlVly-_mWOA3NH4K2",
        project: "_1e1-0ISpPYRU5Aj9XRh0uC"
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
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(5), p = n(2), h = n(3), y = r(h), b = n(89), v = r(b), O = n(26), _ = r(O), m = n(12), j = function(e) {
        function t(e, n) {
            o(this, t);
            var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return (0, y.default)(r), r.state = {
                isModalOpen: !1
            }, r;
        }
        return i(t, e), a(t, [ {
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
                    this.setState(Object.assign({}, this.state, e));
                }
                return e;
            }()
        }, {
            key: "render",
            value: function() {
                function e() {
                    var e = this.state.isModalOpen, t = this.props, n = t.onChangeSearch, r = t.onOnlyOpen, o = t.isOnlyOpen, u = t.searchValue;
                    return [ l.default.createElement(v.default, {
                        onAddProject: this.onAddProject,
                        onChangeSearch: n,
                        onOnlyOpen: r,
                        isOnlyOpen: o,
                        searchValue: u,
                        key: "header-container"
                    }), e && l.default.createElement(_.default, {
                        onSubmit: this.onCreateProject,
                        onClose: this.onCloseModal,
                        title: "Новый проект",
                        key: "add-header-container"
                    }) ];
                }
                return e;
            }()
        } ]), t;
    }(c.Component);
    j.propTypes = {
        addProject: f.default.func.isRequired,
        onChangeSearch: f.default.func.isRequired,
        onOnlyOpen: f.default.func.isRequired,
        isOnlyOpen: f.default.bool.isRequired,
        searchValue: f.default.string
    }, j.defaultProps = {};
    var C = function(e) {
        return (0, p.bindActionCreators)({
            addProject: m.addProject
        }, e);
    };
    t.default = (0, d.connect)(null, C)(j);
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
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(25), p = r(d), h = n(91), y = r(h), b = n(11), v = r(b), O = n(94), _ = r(O), m = function(e) {
        function t() {
            return o(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return i(t, e), a(t, [ {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props, t = e.onAddProject, n = e.onOnlyOpen, r = e.onChangeSearch, o = e.isOnlyOpen, u = e.searchValue, i = e.placeholder;
                    return l.default.createElement("div", {
                        className: _.default.header
                    }, l.default.createElement("div", {
                        className: _.default.wrapInput
                    }, l.default.createElement(p.default, {
                        onChange: r,
                        value: u,
                        placeholder: i
                    })), l.default.createElement(y.default, {
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
    m.propTypes = {
        onAddProject: f.default.func,
        onOnlyOpen: f.default.func,
        onChangeSearch: f.default.func,
        isOnlyOpen: f.default.bool.isRequired,
        searchValue: f.default.string,
        placeholder: f.default.string
    }, m.defaultProps = {
        placeholder: "поиск"
    }, t.default = m;
}, function(e, t) {
    e.exports = {
        Placeholder: "oH9S-m9nPrF7j5kk46BDM",
        ButtonText: "K9mtMzmF449zAbrSaEpD0",
        "White-text-button": "P3W57CyDI-o8TkrjhzQQ9",
        inputText: "Kba-7Kh4rYpWIjbnVujSC oH9S-m9nPrF7j5kk46BDM"
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
            checked: n
        }), i.default.createElement("label", {
            htmlFor: "auth_block_save_for"
        }, t));
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(92), s = r(l);
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
        Placeholder: "_2ye0v5OB1TKynl2PsioEga",
        ButtonText: "_3NBG5zmFVXJ3j5Zkdx93vz",
        "White-text-button": "_1x4wU4OEU9eg1mUlcQaHIa",
        checkbox: "_3_Sw7wlOQ0aFgXVjblYak3 _3NBG5zmFVXJ3j5Zkdx93vz"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_3y3DMLnrn0vo-ETjyYaA31",
        ButtonText: "k4CoXZltH51Jir2um08k3",
        "White-text-button": "_2jhnps68wAuPIgacPAYO1v",
        buttonBg: "_1i-wuGkQuFbNkkbl6AGOLs k4CoXZltH51Jir2um08k3"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_2F1Ji30eCo3_aJUjPkGvEq",
        ButtonText: "_3AoRf_2xgNUmm5KR87YOmC",
        "White-text-button": "_2140eiGLRz9Ma9dxmvSK58",
        header: "_5BAbIH7XPo_KpBzzlSCKT",
        wrapInput: "_1tRav49x6FeRqe1bN9fnZc"
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
            className: h.default.button
        }, i.default.createElement(d.default, {
            onClick: t,
            type: u
        }, "Создать")), i.default.createElement("div", {
            className: h.default.input
        }, i.default.createElement(s.default, {
            onChange: n,
            placeholder: o,
            value: r
        })));
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(25), s = r(l), f = n(11), d = r(f), p = n(96), h = r(p);
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
        Placeholder: "_2hRQkmx7h_iNioyyGiexST",
        ButtonText: "_3XbLrvv4cfM4wNN1oPN6Rw",
        "White-text-button": "_1YOipUCzZ8L2XN5ibo9HC5",
        button: "_2_tK2Va0ztTagLcr_usumo",
        input: "_3OlDQyaY-6yezlEJVnyfmG"
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
    var u = n(0), i = r(u), a = n(98), c = r(a);
    o.propTypes = {}, o.defaultProps = {}, t.default = o;
}, function(e, t) {
    e.exports = {
        Placeholder: "_3qqiB8l-W45hGN0d6twzPw",
        ButtonText: "_1YXA3CqvsFVBuwi_4tWN-U",
        "White-text-button": "_2iAM1JpZKBSTDbfslKxiO9",
        buttonClose: "_2j_UladtNcvUK8cXqX0Z41"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_2hAy8SaRZK1yfZa5Svvf3G",
        ButtonText: "_3rrjMflCqGR8Z8K0qrrGNW",
        "White-text-button": "MQwf_eTJ5CCmr3ou9OuAD",
        dialogWindow: "_3IHW1xjngXxP8NReGPixiS",
        buttonClose: "_39BNztNrMEbjwzwRhksifK",
        hr: "_3FdIuU1FLT4d70s1sFgWBi"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_2TbmaLIMqKk7j0Jph3U47U",
        ButtonText: "_2ueckNNY5tgCr9-nCyCTjq",
        "White-text-button": "_2kYF4eHFokX7-VqY0Jh1Zb"
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
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(5), p = n(2), h = n(3), y = r(h), b = n(103), v = r(b), O = n(26), _ = r(O), m = n(33), j = r(m), C = n(12), P = n(126), g = function(e) {
        function t(e, n) {
            o(this, t);
            var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return (0, y.default)(r), r.id = null, r.state = {
                isModalOpen: !1,
                isModalOpenDelete: !1
            }, r;
        }
        return i(t, e), a(t, [ {
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
            key: "onClickHeader",
            value: function() {
                function e() {}
                return e;
            }()
        }, {
            key: "updateState",
            value: function() {
                function e(e) {
                    this.setState(Object.assign({}, this.state, e));
                }
                return e;
            }()
        }, {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props, t = e.projects, n = e.vacancies, r = e.titleModal, o = e.nameButtonModal, u = this.state, i = u.isModalOpen, a = u.isModalOpenDelete;
                    return [ l.default.createElement(v.default, {
                        projects: t,
                        vacancies: n,
                        onDelete: this.onDelete,
                        onOpenClose: this.onOpenClose,
                        onAdd: this.onAdd,
                        onClickHeader: this.onClickHeader,
                        key: "project-list"
                    }), i && l.default.createElement(_.default, {
                        onSubmit: this.onCreateVacancy,
                        onClose: this.onCloseModal,
                        title: "Новая вакансия",
                        key: "add-header-container"
                    }), a && l.default.createElement(j.default, {
                        title: r,
                        name: o,
                        onSubmit: this.onDeleteSubmit,
                        onClose: this.onCloseModal,
                        key: "modal-delete"
                    }) ];
                }
                return e;
            }()
        } ]), t;
    }(c.Component);
    g.propTypes = {
        projects: f.default.object.isRequired,
        vacancies: f.default.object.isRequired,
        addVacancy: f.default.func.isRequired,
        removeProject: f.default.func.isRequired,
        openCloseProject: f.default.func.isRequired,
        isOnlyOpen: f.default.bool.isRequired,
        searchValue: f.default.string
    }, g.defaultProps = {
        titleModal: "Удалить проект",
        nameButtonModal: "Да"
    };
    var w = function(e, t) {
        return {
            projects: (0, P.projectSelector)(e, t),
            vacancies: e.vacancies
        };
    }, E = function(e) {
        return (0, p.bindActionCreators)({
            addVacancy: C.addVacancy,
            removeProject: C.removeProject,
            openCloseProject: C.openCloseProject
        }, e);
    };
    t.default = (0, d.connect)(w, E)(g);
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
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(104), p = r(d);
    n(125);
    var h = function(e) {
        function t() {
            return o(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return i(t, e), a(t, [ {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props, t = e.projects, n = e.vacancies, r = e.onAdd, o = e.onDelete, u = e.onOpenClose, i = e.onClickHeader;
                    return l.default.createElement("div", null, Object.keys(t).map(function(e) {
                        var a = t[e], c = a.id, s = a.title, f = a.isClosed, d = a.items, h = d.map(function(e) {
                            return n[e];
                        }), y = function() {
                            function e() {
                                r(c);
                            }
                            return e;
                        }(), b = function() {
                            function e() {
                                o(c);
                            }
                            return e;
                        }(), v = function() {
                            function e() {
                                u(c);
                            }
                            return e;
                        }();
                        return l.default.createElement(p.default, {
                            key: c,
                            vacancies: h,
                            isClosed: f,
                            title: s,
                            onAdd: y,
                            onDelete: b,
                            onOpenClose: v,
                            onClickHeader: i
                        });
                    }));
                }
                return e;
            }()
        } ]), t;
    }(c.PureComponent);
    h.propTypes = {
        projects: f.default.object.isRequired,
        vacancies: f.default.object.isRequired,
        onAdd: f.default.func.isRequired,
        onDelete: f.default.func.isRequired,
        onOpenClose: f.default.func.isRequired,
        onClickHeader: f.default.func.isRequired
    }, h.defaultProps = {}, t.default = h;
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
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(3), p = r(d), h = n(105), y = r(h), b = function(e) {
        function t(e, n) {
            o(this, t);
            var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return (0, p.default)(r), r.state = {
                isToogle: !0
            }, r;
        }
        return i(t, e), a(t, [ {
            key: "onClickHeader",
            value: function() {
                function e() {
                    this.setState({
                        isToogle: !this.state.isToogle
                    });
                }
                return e;
            }()
        }, {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props, t = e.vacancies, n = e.isClosed, r = e.title, o = e.onAdd, u = e.onDelete, i = e.onOpenClose;
                    return l.default.createElement(y.default, {
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
        onOpenClose: f.default.func.isRequired,
        onClickHeader: f.default.func.isRequired
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
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(106), p = r(d), h = n(115), y = r(h), b = n(124), v = r(b), O = function(e) {
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
                    }), a && l.default.createElement(y.default, {
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
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(107), p = r(d), h = n(32), y = r(h), b = n(114), v = r(b), O = function(e) {
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
                    }), l.default.createElement(y.default, {
                        onDelete: u,
                        onClick: i
                    }, {
                        false: "Закрыть проект",
                        true: "Открыть проект"
                    }[r]));
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
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(108), p = r(d), h = n(31), y = r(h), b = n(110), v = r(b), O = n(111), _ = r(O), m = function(e) {
        function t() {
            return o(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
        }
        return i(t, e), a(t, [ {
            key: "render",
            value: function() {
                function e() {
                    var e = this.props, t = e.count, n = e.isClosed, r = e.onAdd, o = (0, v.default)(t, [ "вакансия", "вакансии", "вакансий" ]);
                    return l.default.createElement("article", {
                        className: _.default.articleBody
                    }, l.default.createElement("span", {
                        className: _.default.articleSpan
                    }, t, " ", o), {
                        false: l.default.createElement(p.default, {
                            onClick: r
                        }, "Добавить вакансию"),
                        true: l.default.createElement("div", {
                            className: _.default.closed
                        }, l.default.createElement(y.default, null), l.default.createElement("span", null, "Проект закрыт, сотрудники наняты"))
                    }[n]);
                }
                return e;
            }()
        } ]), t;
    }(c.PureComponent);
    m.propTypes = {
        count: f.default.number.isRequired,
        isClosed: f.default.bool.isRequired,
        onAdd: f.default.func.isRequired
    }, m.defaultProps = {}, t.default = m;
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        var t = e.children, n = e.onClick;
        return i.default.createElement(s.default, {
            className: d.default.buttonGreenOutline,
            onClick: n
        }, t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(30), s = r(l), f = n(13), d = r(f);
    o.propTypes = {
        children: c.default.string.isRequired,
        onClick: c.default.func.isRequired
    }, o.defaultProps = {}, t.default = o;
}, function(e, t) {
    e.exports = {
        Placeholder: "_3wPi98dFBJCU-1zP2iW2qp",
        ButtonText: "_2ZL-yYDN9SsoAiKboZkLMI",
        "White-text-button": "_3Jn40e5dBeWNLlbwLdGKFe",
        checkIcon: "_2hdVOHxouaVYeSHr2_vyE8"
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
        Placeholder: "_3ygcNVNuNRDHiD0X8EWops",
        ButtonText: "ImW3pNPQql_Zb2mGSSglr",
        "White-text-button": "HdweMtbGoSl2HAjIbRghq",
        closed: "_1t7pQjS7GRcjvxE_Gxfrwp",
        articleSpan: "_18QWb02sxnL2XV08cE_T3Q ImW3pNPQql_Zb2mGSSglr"
    };
}, function(e, t, n) {
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e) {
        var t = e.children, n = e.onClick;
        return i.default.createElement(s.default, {
            className: d.default.buttonBlackOutline,
            onClick: n
        }, t);
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = n(0), i = r(u), a = n(1), c = r(a), l = n(30), s = r(l), f = n(13), d = r(f);
    o.propTypes = {
        children: c.default.string.isRequired,
        onClick: c.default.func.isRequired
    }, o.defaultProps = {}, t.default = o;
}, function(e, t) {
    e.exports = {
        Placeholder: "_14k_0hBFQOsGgDs2oRer37",
        ButtonText: "_1TzYaZXrpMDbpIlErwYKua",
        "White-text-button": "_1L7oW1C0opY-AkjRe6emts",
        buttonSet: "p2XO686FCkLSYImCYVCm5",
        buttonClick: "vSoaz7SFxLrdDYXjfikFC",
        buttonDelete: "_1HgywZtST135w53yVSC4DK"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_3VaVSTT09rFMLJwaDl4K3q",
        ButtonText: "_18neTh-zyriRmGPidHKESc",
        "White-text-button": "EK7ymF-83Tlv_qGAhJwNA",
        sectionProject: "_3N66-E5SEgjxyAgyFy07Hp"
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
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(5), p = n(2), h = n(3), y = r(h), b = n(116), v = r(b), O = n(33), _ = r(O), m = n(12), j = function(e) {
        function t(e, n) {
            o(this, t);
            var r = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n));
            return (0, y.default)(r), r.id = null, r.state = {
                isModalOpen: !1
            }, r;
        }
        return i(t, e), a(t, [ {
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
                    var t = this.vacancy;
                    this.resetVacancy(), this.props.removeVacancy(t);
                }
                return e;
            }()
        }, {
            key: "resetVacancy",
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
                    this.setState(Object.assign({}, this.state, e));
                }
                return e;
            }()
        }, {
            key: "render",
            value: function() {
                function e() {
                    var e = this.state.isModalOpen, t = this.props, n = t.vacancies, r = t.titleModal, o = t.nameButtonModal;
                    return [ l.default.createElement(v.default, {
                        vacancies: n,
                        onDelete: this.onDelete,
                        onOpenClose: this.onOpenClose,
                        key: "vacancy-list"
                    }), e && l.default.createElement(_.default, {
                        title: r,
                        name: o,
                        onSubmit: this.onDeleteSubmit,
                        onClose: this.onCloseModal,
                        key: "modal-delete"
                    }) ];
                }
                return e;
            }()
        } ]), t;
    }(c.Component);
    j.propTypes = {
        vacancies: f.default.array.isRequired,
        removeVacancy: f.default.func.isRequired,
        openCloseVacancies: f.default.func.isRequired
    }, j.defaultProps = {
        titleModal: "Удалить вакансию",
        nameButtonModal: "Да"
    };
    var C = function(e) {
        return (0, p.bindActionCreators)({
            removeVacancy: m.removeVacancy,
            openCloseVacancies: m.openCloseVacancies
        }, e);
    };
    t.default = (0, d.connect)(null, C)(j);
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
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(117), p = r(d), h = function(e) {
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
    h.propTypes = {
        vacancies: f.default.array.isRequired,
        onDelete: f.default.func.isRequired,
        onOpenClose: f.default.func.isRequired
    }, h.defaultProps = {}, t.default = h;
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
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(32), p = r(d), h = n(118), y = r(h), b = n(122), v = r(b), O = function(e) {
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
                    }, l.default.createElement("header", null, l.default.createElement("h4", null, t)), l.default.createElement(y.default, {
                        isClosed: n
                    }), l.default.createElement(p.default, {
                        onDelete: r,
                        onClick: o
                    }, {
                        false: "Закрыть вакансию",
                        true: "Открыть вакансию"
                    }[n]));
                }
                return e;
            }()
        } ]), t;
    }(c.PureComponent);
    O.propTypes = {
        title: f.default.string,
        isClosed: f.default.bool,
        onDelete: f.default.func,
        onOpenClose: f.default.func
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
    }(), c = n(0), l = r(c), s = n(1), f = r(s), d = n(119), p = r(d), h = n(31), y = r(h), b = n(121), v = r(b), O = function(e) {
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
                    }, {
                        false: l.default.createElement("div", null, l.default.createElement(p.default, null), l.default.createElement("span", null, "Вакансия открыта, идет подбор кандидатов")),
                        true: l.default.createElement("div", null, l.default.createElement(y.default, null), l.default.createElement("span", null, "Вакансия закрыта, сотрудник нанят"))
                    }[e]);
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
    var u = n(0), i = r(u), a = n(120), c = r(a);
    o.propTypes = {}, o.defaultProps = {}, t.default = o;
}, function(e, t) {
    e.exports = {
        Placeholder: "_1NthrJEWjSI-fNKAAbOiy6",
        ButtonText: "_3F0PNg8IxXvm8RXpbsRqEM",
        "White-text-button": "_3oqYSVTfCaVQo7Yyq12wVF",
        searchIcon: "_1s6j0DsKTRdZGAyGLdg4Qs"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_1EZfhL5gdrDhgevcFsV13P",
        ButtonText: "_3gQiDHUsl_bBFfblLzFlqa",
        "White-text-button": "_3WCUjoWNXHnVopkchyD_LI",
        vacancy: "_3r6HZH-OL___lo6Iot9VnO"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "X3H628gJS5Nz97IICof3U",
        ButtonText: "_1znsnfE3qv4i7wRwHeJqer",
        "White-text-button": "_1EgF_vgigE36swtX_zK64e",
        articleProject: "_y1beOKqjNSOkSCLH_s4Y"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "XigapnYgAAAR3AVmsVMoc",
        ButtonText: "_1yuRpBJnLX44IIJDKseKCW",
        "White-text-button": "_2zSxaZP8cboy_NOl_OLItt",
        button: "_1Dv66lxgknJKNNE9hmR26w"
    };
}, function(e, t) {
    e.exports = {
        Placeholder: "_1tRfQwJHcouMEh2aXWiZpV",
        ButtonText: "bIptfkOVhY5gtbRjxp3OT",
        "White-text-button": "_29jhhvklJ77NdfOBbr8hZG",
        project: "_30t0A2WAabvjhuFeyQ0D1v"
    };
}, function(e, t) {}, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.projectSelector = void 0;
    var r = n(127), o = n(29), u = function(e) {
        return e.projects;
    }, i = function(e) {
        return e.vacancies;
    }, a = function(e, t) {
        return {
            searchValue: t.searchValue,
            isOnlyOpen: t.isOnlyOpen
        };
    };
    t.projectSelector = (0, r.createSelector)(u, i, a, function(e, t, n) {
        var r = n.searchValue, u = n.isOnlyOpen;
        if ((0, o.isEmpty)(r)) return e;
        var i = {};
        return Object.keys(e).forEach(function(n) {
            var a = e[n], c = a.items, l = c.filter(function(e) {
                var n = t[e], o = n.title, i = n.isClosed, a = o.toLowerCase().indexOf(r.toLowerCase()) > -1;
                return u ? a && !i : a;
            });
            (0, o.isEmpty)(l) || (i[n] = Object.assign({}, a, {
                items: l
            }));
        }), i;
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
} ], [ 34 ]);
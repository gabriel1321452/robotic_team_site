(() => {
  // icons.js
  function et(c) {
    return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
  }
  var S = { exports: {} };
  var n = {};
  var D;
  function nt() {
    if (D) return n;
    D = 1;
    var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), p = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.fragment"), l = /* @__PURE__ */ Symbol.for("react.strict_mode"), E = /* @__PURE__ */ Symbol.for("react.profiler"), _2 = /* @__PURE__ */ Symbol.for("react.consumer"), w = /* @__PURE__ */ Symbol.for("react.context"), g = /* @__PURE__ */ Symbol.for("react.forward_ref"), M = /* @__PURE__ */ Symbol.for("react.suspense"), x = /* @__PURE__ */ Symbol.for("react.memo"), C = /* @__PURE__ */ Symbol.for("react.lazy"), W = /* @__PURE__ */ Symbol.for("react.activity"), O = Symbol.iterator;
    function G(t) {
      return t === null || typeof t != "object" ? null : (t = O && t[O] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var P = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, b = Object.assign, L = {};
    function v(t, e, o2) {
      this.props = t, this.context = e, this.refs = L, this.updater = o2 || P;
    }
    v.prototype.isReactComponent = {}, v.prototype.setState = function(t, e) {
      if (typeof t != "object" && typeof t != "function" && t != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, t, e, "setState");
    }, v.prototype.forceUpdate = function(t) {
      this.updater.enqueueForceUpdate(this, t, "forceUpdate");
    };
    function I() {
    }
    I.prototype = v.prototype;
    function T2(t, e, o2) {
      this.props = t, this.context = e, this.refs = L, this.updater = o2 || P;
    }
    var A = T2.prototype = new I();
    A.constructor = T2, b(A, v.prototype), A.isPureReactComponent = true;
    var q = Array.isArray;
    function $() {
    }
    var a = { H: null, A: null, T: null, S: null }, Y = Object.prototype.hasOwnProperty;
    function N(t, e, o2) {
      var r = o2.ref;
      return { $$typeof: c, type: t, key: e, ref: r !== void 0 ? r : null, props: o2 };
    }
    function Z(t, e) {
      return N(t.type, e, t.props);
    }
    function j(t) {
      return typeof t == "object" && t !== null && t.$$typeof === c;
    }
    function X(t) {
      var e = { "=": "=0", ":": "=2" };
      return "$" + t.replace(/[=:]/g, function(o2) {
        return e[o2];
      });
    }
    var U = /\/+/g;
    function H(t, e) {
      return typeof t == "object" && t !== null && t.key != null ? X("" + t.key) : e.toString(36);
    }
    function Q(t) {
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw t.reason;
        default:
          switch (typeof t.status == "string" ? t.then($, $) : (t.status = "pending", t.then(function(e) {
            t.status === "pending" && (t.status = "fulfilled", t.value = e);
          }, function(e) {
            t.status === "pending" && (t.status = "rejected", t.reason = e);
          })), t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw t.reason;
          }
      }
      throw t;
    }
    function k(t, e, o2, r, s) {
      var u = typeof t;
      (u === "undefined" || u === "boolean") && (t = null);
      var i2 = false;
      if (t === null) i2 = true;
      else switch (u) {
        case "bigint":
        case "string":
        case "number":
          i2 = true;
          break;
        case "object":
          switch (t.$$typeof) {
            case c:
            case p:
              i2 = true;
              break;
            case C:
              return i2 = t._init, k(i2(t._payload), e, o2, r, s);
          }
      }
      if (i2) return s = s(t), i2 = r === "" ? "." + H(t, 0) : r, q(s) ? (o2 = "", i2 != null && (o2 = i2.replace(U, "$&/") + "/"), k(s, e, o2, "", function(tt) {
        return tt;
      })) : s != null && (j(s) && (s = Z(s, o2 + (s.key == null || t && t.key === s.key ? "" : ("" + s.key).replace(U, "$&/") + "/") + i2)), e.push(s)), 1;
      i2 = 0;
      var d = r === "" ? "." : r + ":";
      if (q(t)) for (var y2 = 0; y2 < t.length; y2++) r = t[y2], u = d + H(r, y2), i2 += k(r, e, o2, u, s);
      else if (y2 = G(t), typeof y2 == "function") for (t = y2.call(t), y2 = 0; !(r = t.next()).done; ) r = r.value, u = d + H(r, y2++), i2 += k(r, e, o2, u, s);
      else if (u === "object") {
        if (typeof t.then == "function") return k(Q(t), e, o2, r, s);
        throw e = String(t), Error("Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead.");
      }
      return i2;
    }
    function R(t, e, o2) {
      if (t == null) return t;
      var r = [], s = 0;
      return k(t, r, "", "", function(u) {
        return e.call(o2, u, s++);
      }), r;
    }
    function J(t) {
      if (t._status === -1) {
        var e = t._result;
        e = e(), e.then(function(o2) {
          (t._status === 0 || t._status === -1) && (t._status = 1, t._result = o2);
        }, function(o2) {
          (t._status === 0 || t._status === -1) && (t._status = 2, t._result = o2);
        }), t._status === -1 && (t._status = 0, t._result = e);
      }
      if (t._status === 1) return t._result.default;
      throw t._result;
    }
    var z = typeof reportError == "function" ? reportError : function(t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t });
        if (!window.dispatchEvent(e)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return;
      }
      console.error(t);
    }, F = { map: R, forEach: function(t, e, o2) {
      R(t, function() {
        e.apply(this, arguments);
      }, o2);
    }, count: function(t) {
      var e = 0;
      return R(t, function() {
        e++;
      }), e;
    }, toArray: function(t) {
      return R(t, function(e) {
        return e;
      }) || [];
    }, only: function(t) {
      if (!j(t)) throw Error("React.Children.only expected to receive a single React element child.");
      return t;
    } };
    return n.Activity = W, n.Children = F, n.Component = v, n.Fragment = h, n.Profiler = E, n.PureComponent = T2, n.StrictMode = l, n.Suspense = M, n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a, n.__COMPILER_RUNTIME = { __proto__: null, c: function(t) {
      return a.H.useMemoCache(t);
    } }, n.cache = function(t) {
      return function() {
        return t.apply(null, arguments);
      };
    }, n.cacheSignal = function() {
      return null;
    }, n.cloneElement = function(t, e, o2) {
      if (t == null) throw Error("The argument must be a React element, but you passed " + t + ".");
      var r = b({}, t.props), s = t.key;
      if (e != null) for (u in e.key !== void 0 && (s = "" + e.key), e) !Y.call(e, u) || u === "key" || u === "__self" || u === "__source" || u === "ref" && e.ref === void 0 || (r[u] = e[u]);
      var u = arguments.length - 2;
      if (u === 1) r.children = o2;
      else if (1 < u) {
        for (var i2 = Array(u), d = 0; d < u; d++) i2[d] = arguments[d + 2];
        r.children = i2;
      }
      return N(t.type, s, r);
    }, n.createContext = function(t) {
      return t = { $$typeof: w, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null }, t.Provider = t, t.Consumer = { $$typeof: _2, _context: t }, t;
    }, n.createElement = function(t, e, o2) {
      var r, s = {}, u = null;
      if (e != null) for (r in e.key !== void 0 && (u = "" + e.key), e) Y.call(e, r) && r !== "key" && r !== "__self" && r !== "__source" && (s[r] = e[r]);
      var i2 = arguments.length - 2;
      if (i2 === 1) s.children = o2;
      else if (1 < i2) {
        for (var d = Array(i2), y2 = 0; y2 < i2; y2++) d[y2] = arguments[y2 + 2];
        s.children = d;
      }
      if (t && t.defaultProps) for (r in i2 = t.defaultProps, i2) s[r] === void 0 && (s[r] = i2[r]);
      return N(t, u, s);
    }, n.createRef = function() {
      return { current: null };
    }, n.forwardRef = function(t) {
      return { $$typeof: g, render: t };
    }, n.isValidElement = j, n.lazy = function(t) {
      return { $$typeof: C, _payload: { _status: -1, _result: t }, _init: J };
    }, n.memo = function(t, e) {
      return { $$typeof: x, type: t, compare: e === void 0 ? null : e };
    }, n.startTransition = function(t) {
      var e = a.T, o2 = {};
      a.T = o2;
      try {
        var r = t(), s = a.S;
        s !== null && s(o2, r), typeof r == "object" && r !== null && typeof r.then == "function" && r.then($, z);
      } catch (u) {
        z(u);
      } finally {
        e !== null && o2.types !== null && (e.types = o2.types), a.T = e;
      }
    }, n.unstable_useCacheRefresh = function() {
      return a.H.useCacheRefresh();
    }, n.use = function(t) {
      return a.H.use(t);
    }, n.useActionState = function(t, e, o2) {
      return a.H.useActionState(t, e, o2);
    }, n.useCallback = function(t, e) {
      return a.H.useCallback(t, e);
    }, n.useContext = function(t) {
      return a.H.useContext(t);
    }, n.useDebugValue = function() {
    }, n.useDeferredValue = function(t, e) {
      return a.H.useDeferredValue(t, e);
    }, n.useEffect = function(t, e) {
      return a.H.useEffect(t, e);
    }, n.useEffectEvent = function(t) {
      return a.H.useEffectEvent(t);
    }, n.useId = function() {
      return a.H.useId();
    }, n.useImperativeHandle = function(t, e, o2) {
      return a.H.useImperativeHandle(t, e, o2);
    }, n.useInsertionEffect = function(t, e) {
      return a.H.useInsertionEffect(t, e);
    }, n.useLayoutEffect = function(t, e) {
      return a.H.useLayoutEffect(t, e);
    }, n.useMemo = function(t, e) {
      return a.H.useMemo(t, e);
    }, n.useOptimistic = function(t, e) {
      return a.H.useOptimistic(t, e);
    }, n.useReducer = function(t, e, o2) {
      return a.H.useReducer(t, e, o2);
    }, n.useRef = function(t) {
      return a.H.useRef(t);
    }, n.useState = function(t) {
      return a.H.useState(t);
    }, n.useSyncExternalStore = function(t, e, o2) {
      return a.H.useSyncExternalStore(t, e, o2);
    }, n.useTransition = function() {
      return a.H.useTransition();
    }, n.version = "19.2.4", n;
  }
  var B;
  function rt() {
    return B || (B = 1, S.exports = nt()), S.exports;
  }
  var m = rt();
  var St = et(m);
  var K = (...c) => c.filter((p, h, l) => !!p && p.trim() !== "" && l.indexOf(p) === h).join(" ").trim();
  var ot = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  var st = (c) => c.replace(/^([A-Z])|[\s-_]+(\w)/g, (p, h, l) => l ? l.toUpperCase() : h.toLowerCase());
  var V = (c) => {
    const p = st(c);
    return p.charAt(0).toUpperCase() + p.slice(1);
  };
  var ut = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
  var ct = (c) => {
    for (const p in c) if (p.startsWith("aria-") || p === "role" || p === "title") return true;
    return false;
  };
  var at = m.forwardRef(({ color: c = "currentColor", size: p = 24, strokeWidth: h = 2, absoluteStrokeWidth: l, className: E = "", children: _2, iconNode: w, ...g }, M) => m.createElement("svg", { ref: M, ...ut, width: p, height: p, stroke: c, strokeWidth: l ? Number(h) * 24 / Number(p) : h, className: K("lucide", E), ...!_2 && !ct(g) && { "aria-hidden": "true" }, ...g }, [...w.map(([x, C]) => m.createElement(x, C)), ...Array.isArray(_2) ? _2 : [_2]]));
  var f = (c, p) => {
    const h = m.forwardRef(({ className: l, ...E }, _2) => m.createElement(at, { ref: _2, iconNode: p, className: K(`lucide-${ot(V(c))}`, `lucide-${c}`, l), ...E }));
    return h.displayName = V(c), h;
  };
  var it = [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]];
  var Ot = f("arrow-right", it);
  var ft = [["path", { d: "M12 7v14", key: "1akyts" }], ["path", { d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z", key: "ruj8y" }]];
  var Pt = f("book-open", ft);
  var pt = [["path", { d: "M12 8V4H8", key: "hb8ula" }], ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }], ["path", { d: "M2 14h2", key: "vft8re" }], ["path", { d: "M20 14h2", key: "4cs60a" }], ["path", { d: "M15 13v2", key: "1xurst" }], ["path", { d: "M9 13v2", key: "rq6x2g" }]];
  var bt = f("bot", pt);
  var yt = [["path", { d: "M8 2v4", key: "1cmpym" }], ["path", { d: "M16 2v4", key: "4m81vk" }], ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }], ["path", { d: "M3 10h18", key: "8toen8" }]];
  var Lt = f("calendar", yt);
  var ht = [["path", { d: "M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z", key: "18u6gg" }], ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }]];
  var It = f("camera", ht);
  var lt = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
  var qt = f("chevron-down", lt);
  var dt = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
  var Yt = f("chevron-left", dt);
  var _t = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
  var Ut = f("chevron-right", _t);
  var vt = [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }], ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]];
  var zt = f("circle-alert", vt);
  var kt = [["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }], ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }]];
  var Dt = f("circle-check-big", kt);
  var mt = [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }], ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }], ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]];
  var Bt = f("image", mt);
  var Et = [["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }], ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }], ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]];
  var Vt = f("instagram", Et);
  var gt = [["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }], ["rect", { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" }], ["rect", { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" }], ["rect", { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" }]];
  var Kt = f("layout-dashboard", gt);
  var Ct = [["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }], ["path", { d: "M21 12H9", key: "dn1m92" }], ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]];
  var Wt = f("log-out", Ct);
  var Rt = [["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }], ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]];
  var Gt = f("mail", Rt);
  var wt = [["path", { d: "M4 5h16", key: "1tepv9" }], ["path", { d: "M4 12h16", key: "1lakjw" }], ["path", { d: "M4 19h16", key: "1djgab" }]];
  var Zt = f("menu", wt);
  var Mt = [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "M12 5v14", key: "s699le" }]];
  var Xt = f("plus", Mt);
  var xt = [["path", { d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z", key: "1c8476" }], ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }], ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]];
  var Qt = f("save", xt);
  var Tt = [["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }], ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]];
  var Jt = f("search", Tt);
  var At = [["path", { d: "M10 11v6", key: "nco0om" }], ["path", { d: "M14 11v6", key: "outv1u" }], ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }], ["path", { d: "M3 6h18", key: "d0wm0j" }], ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]];
  var Ft = f("trash-2", At);
  var $t = [["path", { d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978", key: "1n3hpd" }], ["path", { d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978", key: "rfe1zi" }], ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }], ["path", { d: "M4 22h16", key: "57wxv0" }], ["path", { d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z", key: "1mhfuq" }], ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }]];
  var te = f("trophy", $t);
  var Nt = [["path", { d: "M12 3v12", key: "1x0j5s" }], ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }], ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]];
  var ee = f("upload", Nt);
  var jt = [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]];
  var ne = f("users", jt);
  var Ht = [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]];
  var re = f("x", Ht);

  // vendor.js
  var y = { exports: {} };
  var n2 = {};
  var o;
  function S2() {
    if (o) return n2;
    o = 1;
    var u = rt();
    function g(r) {
      var e = "https://react.dev/errors/" + r;
      if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var t = 2; t < arguments.length; t++) e += "&args[]=" + encodeURIComponent(arguments[t]);
      }
      return "Minified React error #" + r + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function c() {
    }
    var i2 = { d: { f: c, r: function() {
      throw Error(g(522));
    }, D: c, C: c, L: c, m: c, X: c, S: c, M: c }, p: 0, findDOMNode: null }, m2 = /* @__PURE__ */ Symbol.for("react.portal");
    function v(r, e, t) {
      var a = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return { $$typeof: m2, key: a == null ? null : "" + a, children: r, containerInfo: e, implementation: t };
    }
    var f2 = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function d(r, e) {
      if (r === "font") return "";
      if (typeof e == "string") return e === "use-credentials" ? e : "";
    }
    return n2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i2, n2.createPortal = function(r, e) {
      var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11) throw Error(g(299));
      return v(r, e, null, t);
    }, n2.flushSync = function(r) {
      var e = f2.T, t = i2.p;
      try {
        if (f2.T = null, i2.p = 2, r) return r();
      } finally {
        f2.T = e, i2.p = t, i2.d.f();
      }
    }, n2.preconnect = function(r, e) {
      typeof r == "string" && (e ? (e = e.crossOrigin, e = typeof e == "string" ? e === "use-credentials" ? e : "" : void 0) : e = null, i2.d.C(r, e));
    }, n2.prefetchDNS = function(r) {
      typeof r == "string" && i2.d.D(r);
    }, n2.preinit = function(r, e) {
      if (typeof r == "string" && e && typeof e.as == "string") {
        var t = e.as, a = d(t, e.crossOrigin), s = typeof e.integrity == "string" ? e.integrity : void 0, l = typeof e.fetchPriority == "string" ? e.fetchPriority : void 0;
        t === "style" ? i2.d.S(r, typeof e.precedence == "string" ? e.precedence : void 0, { crossOrigin: a, integrity: s, fetchPriority: l }) : t === "script" && i2.d.X(r, { crossOrigin: a, integrity: s, fetchPriority: l, nonce: typeof e.nonce == "string" ? e.nonce : void 0 });
      }
    }, n2.preinitModule = function(r, e) {
      if (typeof r == "string") if (typeof e == "object" && e !== null) {
        if (e.as == null || e.as === "script") {
          var t = d(e.as, e.crossOrigin);
          i2.d.M(r, { crossOrigin: t, integrity: typeof e.integrity == "string" ? e.integrity : void 0, nonce: typeof e.nonce == "string" ? e.nonce : void 0 });
        }
      } else e == null && i2.d.M(r);
    }, n2.preload = function(r, e) {
      if (typeof r == "string" && typeof e == "object" && e !== null && typeof e.as == "string") {
        var t = e.as, a = d(t, e.crossOrigin);
        i2.d.L(r, t, { crossOrigin: a, integrity: typeof e.integrity == "string" ? e.integrity : void 0, nonce: typeof e.nonce == "string" ? e.nonce : void 0, type: typeof e.type == "string" ? e.type : void 0, fetchPriority: typeof e.fetchPriority == "string" ? e.fetchPriority : void 0, referrerPolicy: typeof e.referrerPolicy == "string" ? e.referrerPolicy : void 0, imageSrcSet: typeof e.imageSrcSet == "string" ? e.imageSrcSet : void 0, imageSizes: typeof e.imageSizes == "string" ? e.imageSizes : void 0, media: typeof e.media == "string" ? e.media : void 0 });
      }
    }, n2.preloadModule = function(r, e) {
      if (typeof r == "string") if (e) {
        var t = d(e.as, e.crossOrigin);
        i2.d.m(r, { as: typeof e.as == "string" && e.as !== "script" ? e.as : void 0, crossOrigin: t, integrity: typeof e.integrity == "string" ? e.integrity : void 0 });
      } else i2.d.m(r);
    }, n2.requestFormReset = function(r) {
      i2.d.r(r);
    }, n2.unstable_batchedUpdates = function(r, e) {
      return r(e);
    }, n2.useFormState = function(r, e, t) {
      return f2.H.useFormState(r, e, t);
    }, n2.useFormStatus = function() {
      return f2.H.useHostTransitionStatus();
    }, n2.version = "19.2.4", n2;
  }
  var _;
  function T() {
    if (_) return y.exports;
    _ = 1;
    function u() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (g) {
        console.error(g);
      }
    }
    return u(), y.exports = S2(), y.exports;
  }

  // script.js
  (function() {
    const p = document.createElement("link").relList;
    if (p && p.supports && p.supports("modulepreload")) return;
    for (const z of document.querySelectorAll('link[rel="modulepreload"]')) d(z);
    new MutationObserver((z) => {
      for (const T2 of z) if (T2.type === "childList") for (const w of T2.addedNodes) w.tagName === "LINK" && w.rel === "modulepreload" && d(w);
    }).observe(document, { childList: true, subtree: true });
    function D2(z) {
      const T2 = {};
      return z.integrity && (T2.integrity = z.integrity), z.referrerPolicy && (T2.referrerPolicy = z.referrerPolicy), z.crossOrigin === "use-credentials" ? T2.credentials = "include" : z.crossOrigin === "anonymous" ? T2.credentials = "omit" : T2.credentials = "same-origin", T2;
    }
    function d(z) {
      if (z.ep) return;
      z.ep = true;
      const T2 = D2(z);
      fetch(z.href, T2);
    }
  })();
  var Ms = { exports: {} };
  var Gn = {};
  var Gr;
  function _0() {
    if (Gr) return Gn;
    Gr = 1;
    var o2 = /* @__PURE__ */ Symbol.for("react.transitional.element"), p = /* @__PURE__ */ Symbol.for("react.fragment");
    function D2(d, z, T2) {
      var w = null;
      if (T2 !== void 0 && (w = "" + T2), z.key !== void 0 && (w = "" + z.key), "key" in z) {
        T2 = {};
        for (var Z in z) Z !== "key" && (T2[Z] = z[Z]);
      } else T2 = z;
      return z = T2.ref, { $$typeof: o2, type: d, key: w, ref: z !== void 0 ? z : null, props: T2 };
    }
    return Gn.Fragment = p, Gn.jsx = D2, Gn.jsxs = D2, Gn;
  }
  var Xr;
  function q0() {
    return Xr || (Xr = 1, Ms.exports = _0()), Ms.exports;
  }
  var i = q0();
  var Cs = { exports: {} };
  var Xn = {};
  var Us = { exports: {} };
  var _s = {};
  var Qr;
  function w0() {
    return Qr || (Qr = 1, (function(o2) {
      function p(j, A) {
        var _2 = j.length;
        j.push(A);
        e: for (; 0 < _2; ) {
          var fe = _2 - 1 >>> 1, oe = j[fe];
          if (0 < z(oe, A)) j[fe] = A, j[_2] = oe, _2 = fe;
          else break e;
        }
      }
      function D2(j) {
        return j.length === 0 ? null : j[0];
      }
      function d(j) {
        if (j.length === 0) return null;
        var A = j[0], _2 = j.pop();
        if (_2 !== A) {
          j[0] = _2;
          e: for (var fe = 0, oe = j.length, ke = oe >>> 1; fe < ke; ) {
            var xe = 2 * (fe + 1) - 1, W = j[xe], ze = xe + 1, de = j[ze];
            if (0 > z(W, _2)) ze < oe && 0 > z(de, W) ? (j[fe] = de, j[ze] = _2, fe = ze) : (j[fe] = W, j[xe] = _2, fe = xe);
            else if (ze < oe && 0 > z(de, _2)) j[fe] = de, j[ze] = _2, fe = ze;
            else break e;
          }
        }
        return A;
      }
      function z(j, A) {
        var _2 = j.sortIndex - A.sortIndex;
        return _2 !== 0 ? _2 : j.id - A.id;
      }
      if (o2.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var T2 = performance;
        o2.unstable_now = function() {
          return T2.now();
        };
      } else {
        var w = Date, Z = w.now();
        o2.unstable_now = function() {
          return w.now() - Z;
        };
      }
      var Se = [], se = [], gl = 1, U = null, me = 3, Oe = false, Ne = false, H = false, Ml = false, he = typeof setTimeout == "function" ? setTimeout : null, we = typeof clearTimeout == "function" ? clearTimeout : null, K2 = typeof setImmediate < "u" ? setImmediate : null;
      function Ge(j) {
        for (var A = D2(se); A !== null; ) {
          if (A.callback === null) d(se);
          else if (A.startTime <= j) d(se), A.sortIndex = A.expirationTime, p(Se, A);
          else break;
          A = D2(se);
        }
      }
      function ee2(j) {
        if (H = false, Ge(j), !Ne) if (D2(Se) !== null) Ne = true, Me || (Me = true, Ke());
        else {
          var A = D2(se);
          A !== null && sl(ee2, A.startTime - j);
        }
      }
      var Me = false, be = -1, Be = 5, je = -1;
      function Bl() {
        return Ml ? true : !(o2.unstable_now() - je < Be);
      }
      function ft2() {
        if (Ml = false, Me) {
          var j = o2.unstable_now();
          je = j;
          var A = true;
          try {
            e: {
              Ne = false, H && (H = false, we(be), be = -1), Oe = true;
              var _2 = me;
              try {
                l: {
                  for (Ge(j), U = D2(Se); U !== null && !(U.expirationTime > j && Bl()); ) {
                    var fe = U.callback;
                    if (typeof fe == "function") {
                      U.callback = null, me = U.priorityLevel;
                      var oe = fe(U.expirationTime <= j);
                      if (j = o2.unstable_now(), typeof oe == "function") {
                        U.callback = oe, Ge(j), A = true;
                        break l;
                      }
                      U === D2(Se) && d(Se), Ge(j);
                    } else d(Se);
                    U = D2(Se);
                  }
                  if (U !== null) A = true;
                  else {
                    var ke = D2(se);
                    ke !== null && sl(ee2, ke.startTime - j), A = false;
                  }
                }
                break e;
              } finally {
                U = null, me = _2, Oe = false;
              }
              A = void 0;
            }
          } finally {
            A ? Ke() : Me = false;
          }
        }
      }
      var Ke;
      if (typeof K2 == "function") Ke = function() {
        K2(ft2);
      };
      else if (typeof MessageChannel < "u") {
        var ot2 = new MessageChannel(), Ql = ot2.port2;
        ot2.port1.onmessage = ft2, Ke = function() {
          Ql.postMessage(null);
        };
      } else Ke = function() {
        he(ft2, 0);
      };
      function sl(j, A) {
        be = he(function() {
          j(o2.unstable_now());
        }, A);
      }
      o2.unstable_IdlePriority = 5, o2.unstable_ImmediatePriority = 1, o2.unstable_LowPriority = 4, o2.unstable_NormalPriority = 3, o2.unstable_Profiling = null, o2.unstable_UserBlockingPriority = 2, o2.unstable_cancelCallback = function(j) {
        j.callback = null;
      }, o2.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Be = 0 < j ? Math.floor(1e3 / j) : 5;
      }, o2.unstable_getCurrentPriorityLevel = function() {
        return me;
      }, o2.unstable_next = function(j) {
        switch (me) {
          case 1:
          case 2:
          case 3:
            var A = 3;
            break;
          default:
            A = me;
        }
        var _2 = me;
        me = A;
        try {
          return j();
        } finally {
          me = _2;
        }
      }, o2.unstable_requestPaint = function() {
        Ml = true;
      }, o2.unstable_runWithPriority = function(j, A) {
        switch (j) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            j = 3;
        }
        var _2 = me;
        me = j;
        try {
          return A();
        } finally {
          me = _2;
        }
      }, o2.unstable_scheduleCallback = function(j, A, _2) {
        var fe = o2.unstable_now();
        switch (typeof _2 == "object" && _2 !== null ? (_2 = _2.delay, _2 = typeof _2 == "number" && 0 < _2 ? fe + _2 : fe) : _2 = fe, j) {
          case 1:
            var oe = -1;
            break;
          case 2:
            oe = 250;
            break;
          case 5:
            oe = 1073741823;
            break;
          case 4:
            oe = 1e4;
            break;
          default:
            oe = 5e3;
        }
        return oe = _2 + oe, j = { id: gl++, callback: A, priorityLevel: j, startTime: _2, expirationTime: oe, sortIndex: -1 }, _2 > fe ? (j.sortIndex = _2, p(se, j), D2(Se) === null && j === D2(se) && (H ? (we(be), be = -1) : H = true, sl(ee2, _2 - fe))) : (j.sortIndex = oe, p(Se, j), Ne || Oe || (Ne = true, Me || (Me = true, Ke()))), j;
      }, o2.unstable_shouldYield = Bl, o2.unstable_wrapCallback = function(j) {
        var A = me;
        return function() {
          var _2 = me;
          me = A;
          try {
            return j.apply(this, arguments);
          } finally {
            me = _2;
          }
        };
      };
    })(_s)), _s;
  }
  var Lr;
  function B0() {
    return Lr || (Lr = 1, Us.exports = w0()), Us.exports;
  }
  var Zr;
  function H0() {
    if (Zr) return Xn;
    Zr = 1;
    var o2 = B0(), p = rt(), D2 = T();
    function d(e) {
      var l = "https://react.dev/errors/" + e;
      if (1 < arguments.length) {
        l += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var t = 2; t < arguments.length; t++) l += "&args[]=" + encodeURIComponent(arguments[t]);
      }
      return "Minified React error #" + e + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function z(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function T2(e) {
      var l = e, t = e;
      if (e.alternate) for (; l.return; ) l = l.return;
      else {
        e = l;
        do
          l = e, (l.flags & 4098) !== 0 && (t = l.return), e = l.return;
        while (e);
      }
      return l.tag === 3 ? t : null;
    }
    function w(e) {
      if (e.tag === 13) {
        var l = e.memoizedState;
        if (l === null && (e = e.alternate, e !== null && (l = e.memoizedState)), l !== null) return l.dehydrated;
      }
      return null;
    }
    function Z(e) {
      if (e.tag === 31) {
        var l = e.memoizedState;
        if (l === null && (e = e.alternate, e !== null && (l = e.memoizedState)), l !== null) return l.dehydrated;
      }
      return null;
    }
    function Se(e) {
      if (T2(e) !== e) throw Error(d(188));
    }
    function se(e) {
      var l = e.alternate;
      if (!l) {
        if (l = T2(e), l === null) throw Error(d(188));
        return l !== e ? null : e;
      }
      for (var t = e, a = l; ; ) {
        var n3 = t.return;
        if (n3 === null) break;
        var u = n3.alternate;
        if (u === null) {
          if (a = n3.return, a !== null) {
            t = a;
            continue;
          }
          break;
        }
        if (n3.child === u.child) {
          for (u = n3.child; u; ) {
            if (u === t) return Se(n3), e;
            if (u === a) return Se(n3), l;
            u = u.sibling;
          }
          throw Error(d(188));
        }
        if (t.return !== a.return) t = n3, a = u;
        else {
          for (var c = false, s = n3.child; s; ) {
            if (s === t) {
              c = true, t = n3, a = u;
              break;
            }
            if (s === a) {
              c = true, a = n3, t = u;
              break;
            }
            s = s.sibling;
          }
          if (!c) {
            for (s = u.child; s; ) {
              if (s === t) {
                c = true, t = u, a = n3;
                break;
              }
              if (s === a) {
                c = true, a = u, t = n3;
                break;
              }
              s = s.sibling;
            }
            if (!c) throw Error(d(189));
          }
        }
        if (t.alternate !== a) throw Error(d(190));
      }
      if (t.tag !== 3) throw Error(d(188));
      return t.stateNode.current === t ? e : l;
    }
    function gl(e) {
      var l = e.tag;
      if (l === 5 || l === 26 || l === 27 || l === 6) return e;
      for (e = e.child; e !== null; ) {
        if (l = gl(e), l !== null) return l;
        e = e.sibling;
      }
      return null;
    }
    var U = Object.assign, me = /* @__PURE__ */ Symbol.for("react.element"), Oe = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ne = /* @__PURE__ */ Symbol.for("react.portal"), H = /* @__PURE__ */ Symbol.for("react.fragment"), Ml = /* @__PURE__ */ Symbol.for("react.strict_mode"), he = /* @__PURE__ */ Symbol.for("react.profiler"), we = /* @__PURE__ */ Symbol.for("react.consumer"), K2 = /* @__PURE__ */ Symbol.for("react.context"), Ge = /* @__PURE__ */ Symbol.for("react.forward_ref"), ee2 = /* @__PURE__ */ Symbol.for("react.suspense"), Me = /* @__PURE__ */ Symbol.for("react.suspense_list"), be = /* @__PURE__ */ Symbol.for("react.memo"), Be = /* @__PURE__ */ Symbol.for("react.lazy"), je = /* @__PURE__ */ Symbol.for("react.activity"), Bl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ft2 = Symbol.iterator;
    function Ke(e) {
      return e === null || typeof e != "object" ? null : (e = ft2 && e[ft2] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var ot2 = /* @__PURE__ */ Symbol.for("react.client.reference");
    function Ql(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.$$typeof === ot2 ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case H:
          return "Fragment";
        case he:
          return "Profiler";
        case Ml:
          return "StrictMode";
        case ee2:
          return "Suspense";
        case Me:
          return "SuspenseList";
        case je:
          return "Activity";
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case Ne:
          return "Portal";
        case K2:
          return e.displayName || "Context";
        case we:
          return (e._context.displayName || "Context") + ".Consumer";
        case Ge:
          var l = e.render;
          return e = e.displayName, e || (e = l.displayName || l.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case be:
          return l = e.displayName || null, l !== null ? l : Ql(e.type) || "Memo";
        case Be:
          l = e._payload, e = e._init;
          try {
            return Ql(e(l));
          } catch {
          }
      }
      return null;
    }
    var sl = Array.isArray, j = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = D2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, _2 = { pending: false, data: null, method: null, action: null }, fe = [], oe = -1;
    function ke(e) {
      return { current: e };
    }
    function xe(e) {
      0 > oe || (e.current = fe[oe], fe[oe] = null, oe--);
    }
    function W(e, l) {
      oe++, fe[oe] = e.current, e.current = l;
    }
    var ze = ke(null), de = ke(null), G = ke(null), Qa = ke(null);
    function La(e, l) {
      switch (W(G, l), W(de, e), W(ze, null), l.nodeType) {
        case 9:
        case 11:
          e = (e = l.documentElement) && (e = e.namespaceURI) ? ir(e) : 0;
          break;
        default:
          if (e = l.tagName, l = l.namespaceURI) l = ir(l), e = cr(l, e);
          else switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
      }
      xe(ze), W(ze, e);
    }
    function Ll() {
      xe(ze), xe(de), xe(G);
    }
    function Cl(e) {
      e.memoizedState !== null && W(Qa, e);
      var l = ze.current, t = cr(l, e.type);
      l !== t && (W(de, e), W(ze, t));
    }
    function fl(e) {
      de.current === e && (xe(ze), xe(de)), Qa.current === e && (xe(Qa), wn._currentValue = _2);
    }
    var Za, $e;
    function Zl(e) {
      if (Za === void 0) try {
        throw Error();
      } catch (t) {
        var l = t.stack.trim().match(/\n( *(at )?)/);
        Za = l && l[1] || "", $e = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + Za + e + $e;
    }
    var bl = false;
    function k(e, l) {
      if (!e || bl) return "";
      bl = true;
      var t = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = { DetermineComponentFrameRoot: function() {
          try {
            if (l) {
              var N = function() {
                throw Error();
              };
              if (Object.defineProperty(N.prototype, "props", { set: function() {
                throw Error();
              } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(N, []);
                } catch (b) {
                  var g = b;
                }
                Reflect.construct(e, [], N);
              } else {
                try {
                  N.call();
                } catch (b) {
                  g = b;
                }
                e.call(N.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                g = b;
              }
              (N = e()) && typeof N.catch == "function" && N.catch(function() {
              });
            }
          } catch (b) {
            if (b && g && typeof b.stack == "string") return [b.stack, g.stack];
          }
          return [null, null];
        } };
        a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var n3 = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
        n3 && n3.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" });
        var u = a.DetermineComponentFrameRoot(), c = u[0], s = u[1];
        if (c && s) {
          var f2 = c.split(`
`), v = s.split(`
`);
          for (n3 = a = 0; a < f2.length && !f2[a].includes("DetermineComponentFrameRoot"); ) a++;
          for (; n3 < v.length && !v[n3].includes("DetermineComponentFrameRoot"); ) n3++;
          if (a === f2.length || n3 === v.length) for (a = f2.length - 1, n3 = v.length - 1; 1 <= a && 0 <= n3 && f2[a] !== v[n3]; ) n3--;
          for (; 1 <= a && 0 <= n3; a--, n3--) if (f2[a] !== v[n3]) {
            if (a !== 1 || n3 !== 1) do
              if (a--, n3--, 0 > n3 || f2[a] !== v[n3]) {
                var y2 = `
` + f2[a].replace(" at new ", " at ");
                return e.displayName && y2.includes("<anonymous>") && (y2 = y2.replace("<anonymous>", e.displayName)), y2;
              }
            while (1 <= a && 0 <= n3);
            break;
          }
        }
      } finally {
        bl = false, Error.prepareStackTrace = t;
      }
      return (t = e ? e.displayName || e.name : "") ? Zl(t) : "";
    }
    function fi(e, l) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Zl(e.type);
        case 16:
          return Zl("Lazy");
        case 13:
          return e.child !== l && l !== null ? Zl("Suspense Fallback") : Zl("Suspense");
        case 19:
          return Zl("SuspenseList");
        case 0:
        case 15:
          return k(e.type, false);
        case 11:
          return k(e.type.render, false);
        case 1:
          return k(e.type, true);
        case 31:
          return Zl("Activity");
        default:
          return "";
      }
    }
    function Ln(e) {
      try {
        var l = "", t = null;
        do
          l += fi(e, t), t = e, e = e.return;
        while (e);
        return l;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var Va = Object.prototype.hasOwnProperty, Ja = o2.unstable_scheduleCallback, Ka = o2.unstable_cancelCallback, oi = o2.unstable_shouldYield, di = o2.unstable_requestPaint, We = o2.unstable_now, ri = o2.unstable_getCurrentPriorityLevel, Zn = o2.unstable_ImmediatePriority, Vn = o2.unstable_UserBlockingPriority, wt2 = o2.unstable_NormalPriority, mi = o2.unstable_LowPriority, Jn = o2.unstable_IdlePriority, hi = o2.log, xi = o2.unstable_setDisableYieldValue, Bt2 = null, Fe = null;
    function Hl(e) {
      if (typeof hi == "function" && xi(e), Fe && typeof Fe.setStrictMode == "function") try {
        Fe.setStrictMode(Bt2, e);
      } catch {
      }
    }
    var Ie = Math.clz32 ? Math.clz32 : h, vi = Math.log, gi = Math.LN2;
    function h(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (vi(e) / gi | 0) | 0;
    }
    var M = 256, X = 262144, re2 = 4194304;
    function pe(e) {
      var l = e & 42;
      if (l !== 0) return l;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function ie(e, l, t) {
      var a = e.pendingLanes;
      if (a === 0) return 0;
      var n3 = 0, u = e.suspendedLanes, c = e.pingedLanes;
      e = e.warmLanes;
      var s = a & 134217727;
      return s !== 0 ? (a = s & ~u, a !== 0 ? n3 = pe(a) : (c &= s, c !== 0 ? n3 = pe(c) : t || (t = s & ~e, t !== 0 && (n3 = pe(t))))) : (s = a & ~u, s !== 0 ? n3 = pe(s) : c !== 0 ? n3 = pe(c) : t || (t = a & ~e, t !== 0 && (n3 = pe(t)))), n3 === 0 ? 0 : l !== 0 && l !== n3 && (l & u) === 0 && (u = n3 & -n3, t = l & -l, u >= t || u === 32 && (t & 4194048) !== 0) ? l : n3;
    }
    function pl(e, l) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & l) === 0;
    }
    function um(e, l) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return l + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return l + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Ys() {
      var e = re2;
      return re2 <<= 1, (re2 & 62914560) === 0 && (re2 = 4194304), e;
    }
    function bi(e) {
      for (var l = [], t = 0; 31 > t; t++) l.push(e);
      return l;
    }
    function ka(e, l) {
      e.pendingLanes |= l, l !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function im(e, l, t, a, n3, u) {
      var c = e.pendingLanes;
      e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= t, e.entangledLanes &= t, e.errorRecoveryDisabledLanes &= t, e.shellSuspendCounter = 0;
      var s = e.entanglements, f2 = e.expirationTimes, v = e.hiddenUpdates;
      for (t = c & ~t; 0 < t; ) {
        var y2 = 31 - Ie(t), N = 1 << y2;
        s[y2] = 0, f2[y2] = -1;
        var g = v[y2];
        if (g !== null) for (v[y2] = null, y2 = 0; y2 < g.length; y2++) {
          var b = g[y2];
          b !== null && (b.lane &= -536870913);
        }
        t &= ~N;
      }
      a !== 0 && Gs(e, a, 0), u !== 0 && n3 === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~l));
    }
    function Gs(e, l, t) {
      e.pendingLanes |= l, e.suspendedLanes &= ~l;
      var a = 31 - Ie(l);
      e.entangledLanes |= l, e.entanglements[a] = e.entanglements[a] | 1073741824 | t & 261930;
    }
    function Xs(e, l) {
      var t = e.entangledLanes |= l;
      for (e = e.entanglements; t; ) {
        var a = 31 - Ie(t), n3 = 1 << a;
        n3 & l | e[a] & l && (e[a] |= l), t &= ~n3;
      }
    }
    function Qs(e, l) {
      var t = l & -l;
      return t = (t & 42) !== 0 ? 1 : pi(t), (t & (e.suspendedLanes | l)) !== 0 ? 0 : t;
    }
    function pi(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function yi(e) {
      return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Ls() {
      var e = A.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Mr(e.type));
    }
    function Zs(e, l) {
      var t = A.p;
      try {
        return A.p = e, l();
      } finally {
        A.p = t;
      }
    }
    var dt2 = Math.random().toString(36).slice(2), Xe = "__reactFiber$" + dt2, ll = "__reactProps$" + dt2, la = "__reactContainer$" + dt2, ji = "__reactEvents$" + dt2, cm = "__reactListeners$" + dt2, sm = "__reactHandles$" + dt2, Vs = "__reactResources$" + dt2, $a = "__reactMarker$" + dt2;
    function Si(e) {
      delete e[Xe], delete e[ll], delete e[ji], delete e[cm], delete e[sm];
    }
    function ta(e) {
      var l = e[Xe];
      if (l) return l;
      for (var t = e.parentNode; t; ) {
        if (l = t[la] || t[Xe]) {
          if (t = l.alternate, l.child !== null || t !== null && t.child !== null) for (e = hr(e); e !== null; ) {
            if (t = e[Xe]) return t;
            e = hr(e);
          }
          return l;
        }
        e = t, t = e.parentNode;
      }
      return null;
    }
    function aa(e) {
      if (e = e[Xe] || e[la]) {
        var l = e.tag;
        if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3) return e;
      }
      return null;
    }
    function Wa(e) {
      var l = e.tag;
      if (l === 5 || l === 26 || l === 27 || l === 6) return e.stateNode;
      throw Error(d(33));
    }
    function na(e) {
      var l = e[Vs];
      return l || (l = e[Vs] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), l;
    }
    function Re(e) {
      e[$a] = true;
    }
    var Js = /* @__PURE__ */ new Set(), Ks = {};
    function Ht2(e, l) {
      ua(e, l), ua(e + "Capture", l);
    }
    function ua(e, l) {
      for (Ks[e] = l, e = 0; e < l.length; e++) Js.add(l[e]);
    }
    var fm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), ks = {}, $s = {};
    function om(e) {
      return Va.call($s, e) ? true : Va.call(ks, e) ? false : fm.test(e) ? $s[e] = true : (ks[e] = true, false);
    }
    function Kn(e, l, t) {
      if (om(l)) if (t === null) e.removeAttribute(l);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(l);
              return;
            }
        }
        e.setAttribute(l, "" + t);
      }
    }
    function kn(e, l, t) {
      if (t === null) e.removeAttribute(l);
      else {
        switch (typeof t) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(l);
            return;
        }
        e.setAttribute(l, "" + t);
      }
    }
    function Vl(e, l, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        e.setAttributeNS(l, t, "" + a);
      }
    }
    function yl(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function Ws(e) {
      var l = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
    }
    function dm(e, l, t) {
      var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, l);
      if (!e.hasOwnProperty(l) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var n3 = a.get, u = a.set;
        return Object.defineProperty(e, l, { configurable: true, get: function() {
          return n3.call(this);
        }, set: function(c) {
          t = "" + c, u.call(this, c);
        } }), Object.defineProperty(e, l, { enumerable: a.enumerable }), { getValue: function() {
          return t;
        }, setValue: function(c) {
          t = "" + c;
        }, stopTracking: function() {
          e._valueTracker = null, delete e[l];
        } };
      }
    }
    function Ni(e) {
      if (!e._valueTracker) {
        var l = Ws(e) ? "checked" : "value";
        e._valueTracker = dm(e, l, "" + e[l]);
      }
    }
    function Fs(e) {
      if (!e) return false;
      var l = e._valueTracker;
      if (!l) return true;
      var t = l.getValue(), a = "";
      return e && (a = Ws(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== t ? (l.setValue(e), true) : false;
    }
    function $n(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var rm = /[\n"\\]/g;
    function jl(e) {
      return e.replace(rm, function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      });
    }
    function zi(e, l, t, a, n3, u, c, s) {
      e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), l != null ? c === "number" ? (l === 0 && e.value === "" || e.value != l) && (e.value = "" + yl(l)) : e.value !== "" + yl(l) && (e.value = "" + yl(l)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), l != null ? Di(e, c, yl(l)) : t != null ? Di(e, c, yl(t)) : a != null && e.removeAttribute("value"), n3 == null && u != null && (e.defaultChecked = !!u), n3 != null && (e.checked = n3 && typeof n3 != "function" && typeof n3 != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.name = "" + yl(s) : e.removeAttribute("name");
    }
    function Is(e, l, t, a, n3, u, c, s) {
      if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), l != null || t != null) {
        if (!(u !== "submit" && u !== "reset" || l != null)) {
          Ni(e);
          return;
        }
        t = t != null ? "" + yl(t) : "", l = l != null ? "" + yl(l) : t, s || l === e.value || (e.value = l), e.defaultValue = l;
      }
      a = a ?? n3, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = s ? e.checked : !!a, e.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), Ni(e);
    }
    function Di(e, l, t) {
      l === "number" && $n(e.ownerDocument) === e || e.defaultValue === "" + t || (e.defaultValue = "" + t);
    }
    function ia(e, l, t, a) {
      if (e = e.options, l) {
        l = {};
        for (var n3 = 0; n3 < t.length; n3++) l["$" + t[n3]] = true;
        for (t = 0; t < e.length; t++) n3 = l.hasOwnProperty("$" + e[t].value), e[t].selected !== n3 && (e[t].selected = n3), n3 && a && (e[t].defaultSelected = true);
      } else {
        for (t = "" + yl(t), l = null, n3 = 0; n3 < e.length; n3++) {
          if (e[n3].value === t) {
            e[n3].selected = true, a && (e[n3].defaultSelected = true);
            return;
          }
          l !== null || e[n3].disabled || (l = e[n3]);
        }
        l !== null && (l.selected = true);
      }
    }
    function Ps(e, l, t) {
      if (l != null && (l = "" + yl(l), l !== e.value && (e.value = l), t == null)) {
        e.defaultValue !== l && (e.defaultValue = l);
        return;
      }
      e.defaultValue = t != null ? "" + yl(t) : "";
    }
    function ef(e, l, t, a) {
      if (l == null) {
        if (a != null) {
          if (t != null) throw Error(d(92));
          if (sl(a)) {
            if (1 < a.length) throw Error(d(93));
            a = a[0];
          }
          t = a;
        }
        t == null && (t = ""), l = t;
      }
      t = yl(l), e.defaultValue = t, a = e.textContent, a === t && a !== "" && a !== null && (e.value = a), Ni(e);
    }
    function ca(e, l) {
      if (l) {
        var t = e.firstChild;
        if (t && t === e.lastChild && t.nodeType === 3) {
          t.nodeValue = l;
          return;
        }
      }
      e.textContent = l;
    }
    var mm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function lf(e, l, t) {
      var a = l.indexOf("--") === 0;
      t == null || typeof t == "boolean" || t === "" ? a ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "" : a ? e.setProperty(l, t) : typeof t != "number" || t === 0 || mm.has(l) ? l === "float" ? e.cssFloat = t : e[l] = ("" + t).trim() : e[l] = t + "px";
    }
    function tf(e, l, t) {
      if (l != null && typeof l != "object") throw Error(d(62));
      if (e = e.style, t != null) {
        for (var a in t) !t.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
        for (var n3 in l) a = l[n3], l.hasOwnProperty(n3) && t[n3] !== a && lf(e, n3, a);
      } else for (var u in l) l.hasOwnProperty(u) && lf(e, u, l[u]);
    }
    function Ai(e) {
      if (e.indexOf("-") === -1) return false;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var hm = /* @__PURE__ */ new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), xm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Wn(e) {
      return xm.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Jl() {
    }
    var Ti = null;
    function Ei(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var sa = null, fa = null;
    function af(e) {
      var l = aa(e);
      if (l && (e = l.stateNode)) {
        var t = e[ll] || null;
        e: switch (e = l.stateNode, l.type) {
          case "input":
            if (zi(e, t.value, t.defaultValue, t.defaultValue, t.checked, t.defaultChecked, t.type, t.name), l = t.name, t.type === "radio" && l != null) {
              for (t = e; t.parentNode; ) t = t.parentNode;
              for (t = t.querySelectorAll('input[name="' + jl("" + l) + '"][type="radio"]'), l = 0; l < t.length; l++) {
                var a = t[l];
                if (a !== e && a.form === e.form) {
                  var n3 = a[ll] || null;
                  if (!n3) throw Error(d(90));
                  zi(a, n3.value, n3.defaultValue, n3.defaultValue, n3.checked, n3.defaultChecked, n3.type, n3.name);
                }
              }
              for (l = 0; l < t.length; l++) a = t[l], a.form === e.form && Fs(a);
            }
            break e;
          case "textarea":
            Ps(e, t.value, t.defaultValue);
            break e;
          case "select":
            l = t.value, l != null && ia(e, !!t.multiple, l, false);
        }
      }
    }
    var Oi = false;
    function nf(e, l, t) {
      if (Oi) return e(l, t);
      Oi = true;
      try {
        var a = e(l);
        return a;
      } finally {
        if (Oi = false, (sa !== null || fa !== null) && (Hu(), sa && (l = sa, e = fa, fa = sa = null, af(l), e))) for (l = 0; l < e.length; l++) af(e[l]);
      }
    }
    function Fa(e, l) {
      var t = e.stateNode;
      if (t === null) return null;
      var a = t[ll] || null;
      if (a === null) return null;
      t = a[l];
      e: switch (l) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
          break e;
        default:
          e = false;
      }
      if (e) return null;
      if (t && typeof t != "function") throw Error(d(231, l, typeof t));
      return t;
    }
    var Kl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Mi = false;
    if (Kl) try {
      var Ia = {};
      Object.defineProperty(Ia, "passive", { get: function() {
        Mi = true;
      } }), window.addEventListener("test", Ia, Ia), window.removeEventListener("test", Ia, Ia);
    } catch {
      Mi = false;
    }
    var rt2 = null, Ci = null, Fn = null;
    function uf() {
      if (Fn) return Fn;
      var e, l = Ci, t = l.length, a, n3 = "value" in rt2 ? rt2.value : rt2.textContent, u = n3.length;
      for (e = 0; e < t && l[e] === n3[e]; e++) ;
      var c = t - e;
      for (a = 1; a <= c && l[t - a] === n3[u - a]; a++) ;
      return Fn = n3.slice(e, 1 < a ? 1 - a : void 0);
    }
    function In(e) {
      var l = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && l === 13 && (e = 13)) : e = l, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Pn() {
      return true;
    }
    function cf() {
      return false;
    }
    function tl(e) {
      function l(t, a, n3, u, c) {
        this._reactName = t, this._targetInst = n3, this.type = a, this.nativeEvent = u, this.target = c, this.currentTarget = null;
        for (var s in e) e.hasOwnProperty(s) && (t = e[s], this[s] = t ? t(u) : u[s]);
        return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? Pn : cf, this.isPropagationStopped = cf, this;
      }
      return U(l.prototype, { preventDefault: function() {
        this.defaultPrevented = true;
        var t = this.nativeEvent;
        t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = false), this.isDefaultPrevented = Pn);
      }, stopPropagation: function() {
        var t = this.nativeEvent;
        t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = true), this.isPropagationStopped = Pn);
      }, persist: function() {
      }, isPersistent: Pn }), l;
    }
    var Rt2 = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
      return e.timeStamp || Date.now();
    }, defaultPrevented: 0, isTrusted: 0 }, eu = tl(Rt2), Pa = U({}, Rt2, { view: 0, detail: 0 }), vm = tl(Pa), Ui, _i, en, lu = U({}, Pa, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: wi, button: 0, buttons: 0, relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    }, movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== en && (en && e.type === "mousemove" ? (Ui = e.screenX - en.screenX, _i = e.screenY - en.screenY) : _i = Ui = 0, en = e), Ui);
    }, movementY: function(e) {
      return "movementY" in e ? e.movementY : _i;
    } }), sf = tl(lu), gm = U({}, lu, { dataTransfer: 0 }), bm = tl(gm), pm = U({}, Pa, { relatedTarget: 0 }), qi = tl(pm), ym = U({}, Rt2, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), jm = tl(ym), Sm = U({}, Rt2, { clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    } }), Nm = tl(Sm), zm = U({}, Rt2, { data: 0 }), ff = tl(zm), Dm = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, Am = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, Tm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
    function Em(e) {
      var l = this.nativeEvent;
      return l.getModifierState ? l.getModifierState(e) : (e = Tm[e]) ? !!l[e] : false;
    }
    function wi() {
      return Em;
    }
    var Om = U({}, Pa, { key: function(e) {
      if (e.key) {
        var l = Dm[e.key] || e.key;
        if (l !== "Unidentified") return l;
      }
      return e.type === "keypress" ? (e = In(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Am[e.keyCode] || "Unidentified" : "";
    }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: wi, charCode: function(e) {
      return e.type === "keypress" ? In(e) : 0;
    }, keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }, which: function(e) {
      return e.type === "keypress" ? In(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    } }), Mm = tl(Om), Cm = U({}, lu, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), of = tl(Cm), Um = U({}, Pa, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: wi }), _m = tl(Um), qm = U({}, Rt2, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), wm = tl(qm), Bm = U({}, lu, { deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    }, deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    }, deltaZ: 0, deltaMode: 0 }), Hm = tl(Bm), Rm = U({}, Rt2, { newState: 0, oldState: 0 }), Ym = tl(Rm), Gm = [9, 13, 27, 32], Bi = Kl && "CompositionEvent" in window, ln = null;
    Kl && "documentMode" in document && (ln = document.documentMode);
    var Xm = Kl && "TextEvent" in window && !ln, df = Kl && (!Bi || ln && 8 < ln && 11 >= ln), rf = " ", mf = false;
    function hf(e, l) {
      switch (e) {
        case "keyup":
          return Gm.indexOf(l.keyCode) !== -1;
        case "keydown":
          return l.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function xf(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var oa = false;
    function Qm(e, l) {
      switch (e) {
        case "compositionend":
          return xf(l);
        case "keypress":
          return l.which !== 32 ? null : (mf = true, rf);
        case "textInput":
          return e = l.data, e === rf && mf ? null : e;
        default:
          return null;
      }
    }
    function Lm(e, l) {
      if (oa) return e === "compositionend" || !Bi && hf(e, l) ? (e = uf(), Fn = Ci = rt2 = null, oa = false, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
            if (l.char && 1 < l.char.length) return l.char;
            if (l.which) return String.fromCharCode(l.which);
          }
          return null;
        case "compositionend":
          return df && l.locale !== "ko" ? null : l.data;
        default:
          return null;
      }
    }
    var Zm = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
    function vf(e) {
      var l = e && e.nodeName && e.nodeName.toLowerCase();
      return l === "input" ? !!Zm[e.type] : l === "textarea";
    }
    function gf(e, l, t, a) {
      sa ? fa ? fa.push(a) : fa = [a] : sa = a, l = Zu(l, "onChange"), 0 < l.length && (t = new eu("onChange", "change", null, t, a), e.push({ event: t, listeners: l }));
    }
    var tn = null, an = null;
    function Vm(e) {
      er(e, 0);
    }
    function tu(e) {
      var l = Wa(e);
      if (Fs(l)) return e;
    }
    function bf(e, l) {
      if (e === "change") return l;
    }
    var pf = false;
    if (Kl) {
      var Hi;
      if (Kl) {
        var Ri = "oninput" in document;
        if (!Ri) {
          var yf = document.createElement("div");
          yf.setAttribute("oninput", "return;"), Ri = typeof yf.oninput == "function";
        }
        Hi = Ri;
      } else Hi = false;
      pf = Hi && (!document.documentMode || 9 < document.documentMode);
    }
    function jf() {
      tn && (tn.detachEvent("onpropertychange", Sf), an = tn = null);
    }
    function Sf(e) {
      if (e.propertyName === "value" && tu(an)) {
        var l = [];
        gf(l, an, e, Ei(e)), nf(Vm, l);
      }
    }
    function Jm(e, l, t) {
      e === "focusin" ? (jf(), tn = l, an = t, tn.attachEvent("onpropertychange", Sf)) : e === "focusout" && jf();
    }
    function Km(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return tu(an);
    }
    function km(e, l) {
      if (e === "click") return tu(l);
    }
    function $m(e, l) {
      if (e === "input" || e === "change") return tu(l);
    }
    function Wm(e, l) {
      return e === l && (e !== 0 || 1 / e === 1 / l) || e !== e && l !== l;
    }
    var ol = typeof Object.is == "function" ? Object.is : Wm;
    function nn(e, l) {
      if (ol(e, l)) return true;
      if (typeof e != "object" || e === null || typeof l != "object" || l === null) return false;
      var t = Object.keys(e), a = Object.keys(l);
      if (t.length !== a.length) return false;
      for (a = 0; a < t.length; a++) {
        var n3 = t[a];
        if (!Va.call(l, n3) || !ol(e[n3], l[n3])) return false;
      }
      return true;
    }
    function Nf(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function zf(e, l) {
      var t = Nf(e);
      e = 0;
      for (var a; t; ) {
        if (t.nodeType === 3) {
          if (a = e + t.textContent.length, e <= l && a >= l) return { node: t, offset: l - e };
          e = a;
        }
        e: {
          for (; t; ) {
            if (t.nextSibling) {
              t = t.nextSibling;
              break e;
            }
            t = t.parentNode;
          }
          t = void 0;
        }
        t = Nf(t);
      }
    }
    function Df(e, l) {
      return e && l ? e === l ? true : e && e.nodeType === 3 ? false : l && l.nodeType === 3 ? Df(e, l.parentNode) : "contains" in e ? e.contains(l) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(l) & 16) : false : false;
    }
    function Af(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var l = $n(e.document); l instanceof e.HTMLIFrameElement; ) {
        try {
          var t = typeof l.contentWindow.location.href == "string";
        } catch {
          t = false;
        }
        if (t) e = l.contentWindow;
        else break;
        l = $n(e.document);
      }
      return l;
    }
    function Yi(e) {
      var l = e && e.nodeName && e.nodeName.toLowerCase();
      return l && (l === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || l === "textarea" || e.contentEditable === "true");
    }
    var Fm = Kl && "documentMode" in document && 11 >= document.documentMode, da = null, Gi = null, un = null, Xi = false;
    function Tf(e, l, t) {
      var a = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
      Xi || da == null || da !== $n(a) || (a = da, "selectionStart" in a && Yi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), un && nn(un, a) || (un = a, a = Zu(Gi, "onSelect"), 0 < a.length && (l = new eu("onSelect", "select", null, l, t), e.push({ event: l, listeners: a }), l.target = da)));
    }
    function Yt2(e, l) {
      var t = {};
      return t[e.toLowerCase()] = l.toLowerCase(), t["Webkit" + e] = "webkit" + l, t["Moz" + e] = "moz" + l, t;
    }
    var ra = { animationend: Yt2("Animation", "AnimationEnd"), animationiteration: Yt2("Animation", "AnimationIteration"), animationstart: Yt2("Animation", "AnimationStart"), transitionrun: Yt2("Transition", "TransitionRun"), transitionstart: Yt2("Transition", "TransitionStart"), transitioncancel: Yt2("Transition", "TransitionCancel"), transitionend: Yt2("Transition", "TransitionEnd") }, Qi = {}, Ef = {};
    Kl && (Ef = document.createElement("div").style, "AnimationEvent" in window || (delete ra.animationend.animation, delete ra.animationiteration.animation, delete ra.animationstart.animation), "TransitionEvent" in window || delete ra.transitionend.transition);
    function Gt2(e) {
      if (Qi[e]) return Qi[e];
      if (!ra[e]) return e;
      var l = ra[e], t;
      for (t in l) if (l.hasOwnProperty(t) && t in Ef) return Qi[e] = l[t];
      return e;
    }
    var Of = Gt2("animationend"), Mf = Gt2("animationiteration"), Cf = Gt2("animationstart"), Im = Gt2("transitionrun"), Pm = Gt2("transitionstart"), eh = Gt2("transitioncancel"), Uf = Gt2("transitionend"), _f = /* @__PURE__ */ new Map(), Li = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Li.push("scrollEnd");
    function Ul(e, l) {
      _f.set(e, l), Ht2(l, [e]);
    }
    var au = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var l = new window.ErrorEvent("error", { bubbles: true, cancelable: true, message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e), error: e });
        if (!window.dispatchEvent(l)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, Sl = [], ma = 0, Zi = 0;
    function nu() {
      for (var e = ma, l = Zi = ma = 0; l < e; ) {
        var t = Sl[l];
        Sl[l++] = null;
        var a = Sl[l];
        Sl[l++] = null;
        var n3 = Sl[l];
        Sl[l++] = null;
        var u = Sl[l];
        if (Sl[l++] = null, a !== null && n3 !== null) {
          var c = a.pending;
          c === null ? n3.next = n3 : (n3.next = c.next, c.next = n3), a.pending = n3;
        }
        u !== 0 && qf(t, n3, u);
      }
    }
    function uu(e, l, t, a) {
      Sl[ma++] = e, Sl[ma++] = l, Sl[ma++] = t, Sl[ma++] = a, Zi |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
    }
    function Vi(e, l, t, a) {
      return uu(e, l, t, a), iu(e);
    }
    function Xt2(e, l) {
      return uu(e, null, null, l), iu(e);
    }
    function qf(e, l, t) {
      e.lanes |= t;
      var a = e.alternate;
      a !== null && (a.lanes |= t);
      for (var n3 = false, u = e.return; u !== null; ) u.childLanes |= t, a = u.alternate, a !== null && (a.childLanes |= t), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n3 = true)), e = u, u = u.return;
      return e.tag === 3 ? (u = e.stateNode, n3 && l !== null && (n3 = 31 - Ie(t), e = u.hiddenUpdates, a = e[n3], a === null ? e[n3] = [l] : a.push(l), l.lane = t | 536870912), u) : null;
    }
    function iu(e) {
      if (50 < En) throw En = 0, es = null, Error(d(185));
      for (var l = e.return; l !== null; ) e = l, l = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    var ha = {};
    function lh(e, l, t, a) {
      this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function dl(e, l, t, a) {
      return new lh(e, l, t, a);
    }
    function Ji(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function kl(e, l) {
      var t = e.alternate;
      return t === null ? (t = dl(e.tag, l, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = l, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 65011712, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, l = e.dependencies, t.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t.refCleanup = e.refCleanup, t;
    }
    function wf(e, l) {
      e.flags &= 65011714;
      var t = e.alternate;
      return t === null ? (e.childLanes = 0, e.lanes = l, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, e.type = t.type, l = t.dependencies, e.dependencies = l === null ? null : { lanes: l.lanes, firstContext: l.firstContext }), e;
    }
    function cu(e, l, t, a, n3, u) {
      var c = 0;
      if (a = e, typeof e == "function") Ji(e) && (c = 1);
      else if (typeof e == "string") c = i0(e, t, ze.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else e: switch (e) {
        case je:
          return e = dl(31, t, l, n3), e.elementType = je, e.lanes = u, e;
        case H:
          return Qt2(t.children, n3, u, l);
        case Ml:
          c = 8, n3 |= 24;
          break;
        case he:
          return e = dl(12, t, l, n3 | 2), e.elementType = he, e.lanes = u, e;
        case ee2:
          return e = dl(13, t, l, n3), e.elementType = ee2, e.lanes = u, e;
        case Me:
          return e = dl(19, t, l, n3), e.elementType = Me, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case K2:
              c = 10;
              break e;
            case we:
              c = 9;
              break e;
            case Ge:
              c = 11;
              break e;
            case be:
              c = 14;
              break e;
            case Be:
              c = 16, a = null;
              break e;
          }
          c = 29, t = Error(d(130, e === null ? "null" : typeof e, "")), a = null;
      }
      return l = dl(c, t, l, n3), l.elementType = e, l.type = a, l.lanes = u, l;
    }
    function Qt2(e, l, t, a) {
      return e = dl(7, e, a, l), e.lanes = t, e;
    }
    function Ki(e, l, t) {
      return e = dl(6, e, null, l), e.lanes = t, e;
    }
    function Bf(e) {
      var l = dl(18, null, null, 0);
      return l.stateNode = e, l;
    }
    function ki(e, l, t) {
      return l = dl(4, e.children !== null ? e.children : [], e.key, l), l.lanes = t, l.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, l;
    }
    var Hf = /* @__PURE__ */ new WeakMap();
    function Nl(e, l) {
      if (typeof e == "object" && e !== null) {
        var t = Hf.get(e);
        return t !== void 0 ? t : (l = { value: e, source: l, stack: Ln(l) }, Hf.set(e, l), l);
      }
      return { value: e, source: l, stack: Ln(l) };
    }
    var xa = [], va = 0, su = null, cn = 0, zl = [], Dl = 0, mt2 = null, Rl = 1, Yl = "";
    function $l(e, l) {
      xa[va++] = cn, xa[va++] = su, su = e, cn = l;
    }
    function Rf(e, l, t) {
      zl[Dl++] = Rl, zl[Dl++] = Yl, zl[Dl++] = mt2, mt2 = e;
      var a = Rl;
      e = Yl;
      var n3 = 32 - Ie(a) - 1;
      a &= ~(1 << n3), t += 1;
      var u = 32 - Ie(l) + n3;
      if (30 < u) {
        var c = n3 - n3 % 5;
        u = (a & (1 << c) - 1).toString(32), a >>= c, n3 -= c, Rl = 1 << 32 - Ie(l) + n3 | t << n3 | a, Yl = u + e;
      } else Rl = 1 << u | t << n3 | a, Yl = e;
    }
    function $i(e) {
      e.return !== null && ($l(e, 1), Rf(e, 1, 0));
    }
    function Wi(e) {
      for (; e === su; ) su = xa[--va], xa[va] = null, cn = xa[--va], xa[va] = null;
      for (; e === mt2; ) mt2 = zl[--Dl], zl[Dl] = null, Yl = zl[--Dl], zl[Dl] = null, Rl = zl[--Dl], zl[Dl] = null;
    }
    function Yf(e, l) {
      zl[Dl++] = Rl, zl[Dl++] = Yl, zl[Dl++] = mt2, Rl = l.id, Yl = l.overflow, mt2 = e;
    }
    var Qe = null, ve = null, $ = false, ht2 = null, Al = false, Fi = Error(d(519));
    function xt2(e) {
      var l = Error(d(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw sn(Nl(l, e)), Fi;
    }
    function Gf(e) {
      var l = e.stateNode, t = e.type, a = e.memoizedProps;
      switch (l[Xe] = e, l[ll] = a, t) {
        case "dialog":
          L("cancel", l), L("close", l);
          break;
        case "iframe":
        case "object":
        case "embed":
          L("load", l);
          break;
        case "video":
        case "audio":
          for (t = 0; t < Mn.length; t++) L(Mn[t], l);
          break;
        case "source":
          L("error", l);
          break;
        case "img":
        case "image":
        case "link":
          L("error", l), L("load", l);
          break;
        case "details":
          L("toggle", l);
          break;
        case "input":
          L("invalid", l), Is(l, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          L("invalid", l);
          break;
        case "textarea":
          L("invalid", l), ef(l, a.value, a.defaultValue, a.children);
      }
      t = a.children, typeof t != "string" && typeof t != "number" && typeof t != "bigint" || l.textContent === "" + t || a.suppressHydrationWarning === true || nr(l.textContent, t) ? (a.popover != null && (L("beforetoggle", l), L("toggle", l)), a.onScroll != null && L("scroll", l), a.onScrollEnd != null && L("scrollend", l), a.onClick != null && (l.onclick = Jl), l = true) : l = false, l || xt2(e, true);
    }
    function Xf(e) {
      for (Qe = e.return; Qe; ) switch (Qe.tag) {
        case 5:
        case 31:
        case 13:
          Al = false;
          return;
        case 27:
        case 3:
          Al = true;
          return;
        default:
          Qe = Qe.return;
      }
    }
    function ga(e) {
      if (e !== Qe) return false;
      if (!$) return Xf(e), $ = true, false;
      var l = e.tag, t;
      if ((t = l !== 3 && l !== 27) && ((t = l === 5) && (t = e.type, t = !(t !== "form" && t !== "button") || xs(e.type, e.memoizedProps)), t = !t), t && ve && xt2(e), Xf(e), l === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317));
        ve = mr(e);
      } else if (l === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(317));
        ve = mr(e);
      } else l === 27 ? (l = ve, Ot2(e.type) ? (e = ys, ys = null, ve = e) : ve = l) : ve = Qe ? El(e.stateNode.nextSibling) : null;
      return true;
    }
    function Lt2() {
      ve = Qe = null, $ = false;
    }
    function Ii() {
      var e = ht2;
      return e !== null && (il === null ? il = e : il.push.apply(il, e), ht2 = null), e;
    }
    function sn(e) {
      ht2 === null ? ht2 = [e] : ht2.push(e);
    }
    var Pi = ke(null), Zt2 = null, Wl = null;
    function vt2(e, l, t) {
      W(Pi, l._currentValue), l._currentValue = t;
    }
    function Fl(e) {
      e._currentValue = Pi.current, xe(Pi);
    }
    function ec(e, l, t) {
      for (; e !== null; ) {
        var a = e.alternate;
        if ((e.childLanes & l) !== l ? (e.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), e === t) break;
        e = e.return;
      }
    }
    function lc(e, l, t, a) {
      var n3 = e.child;
      for (n3 !== null && (n3.return = e); n3 !== null; ) {
        var u = n3.dependencies;
        if (u !== null) {
          var c = n3.child;
          u = u.firstContext;
          e: for (; u !== null; ) {
            var s = u;
            u = n3;
            for (var f2 = 0; f2 < l.length; f2++) if (s.context === l[f2]) {
              u.lanes |= t, s = u.alternate, s !== null && (s.lanes |= t), ec(u.return, t, e), a || (c = null);
              break e;
            }
            u = s.next;
          }
        } else if (n3.tag === 18) {
          if (c = n3.return, c === null) throw Error(d(341));
          c.lanes |= t, u = c.alternate, u !== null && (u.lanes |= t), ec(c, t, e), c = null;
        } else c = n3.child;
        if (c !== null) c.return = n3;
        else for (c = n3; c !== null; ) {
          if (c === e) {
            c = null;
            break;
          }
          if (n3 = c.sibling, n3 !== null) {
            n3.return = c.return, c = n3;
            break;
          }
          c = c.return;
        }
        n3 = c;
      }
    }
    function ba(e, l, t, a) {
      e = null;
      for (var n3 = l, u = false; n3 !== null; ) {
        if (!u) {
          if ((n3.flags & 524288) !== 0) u = true;
          else if ((n3.flags & 262144) !== 0) break;
        }
        if (n3.tag === 10) {
          var c = n3.alternate;
          if (c === null) throw Error(d(387));
          if (c = c.memoizedProps, c !== null) {
            var s = n3.type;
            ol(n3.pendingProps.value, c.value) || (e !== null ? e.push(s) : e = [s]);
          }
        } else if (n3 === Qa.current) {
          if (c = n3.alternate, c === null) throw Error(d(387));
          c.memoizedState.memoizedState !== n3.memoizedState.memoizedState && (e !== null ? e.push(wn) : e = [wn]);
        }
        n3 = n3.return;
      }
      e !== null && lc(l, e, t, a), l.flags |= 262144;
    }
    function fu(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!ol(e.context._currentValue, e.memoizedValue)) return true;
        e = e.next;
      }
      return false;
    }
    function Vt2(e) {
      Zt2 = e, Wl = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Le(e) {
      return Qf(Zt2, e);
    }
    function ou(e, l) {
      return Zt2 === null && Vt2(e), Qf(e, l);
    }
    function Qf(e, l) {
      var t = l._currentValue;
      if (l = { context: l, memoizedValue: t, next: null }, Wl === null) {
        if (e === null) throw Error(d(308));
        Wl = l, e.dependencies = { lanes: 0, firstContext: l }, e.flags |= 524288;
      } else Wl = Wl.next = l;
      return t;
    }
    var th = typeof AbortController < "u" ? AbortController : function() {
      var e = [], l = this.signal = { aborted: false, addEventListener: function(t, a) {
        e.push(a);
      } };
      this.abort = function() {
        l.aborted = true, e.forEach(function(t) {
          return t();
        });
      };
    }, ah = o2.unstable_scheduleCallback, nh = o2.unstable_NormalPriority, Ce = { $$typeof: K2, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 };
    function tc() {
      return { controller: new th(), data: /* @__PURE__ */ new Map(), refCount: 0 };
    }
    function fn(e) {
      e.refCount--, e.refCount === 0 && ah(nh, function() {
        e.controller.abort();
      });
    }
    var on = null, ac = 0, pa = 0, ya = null;
    function uh(e, l) {
      if (on === null) {
        var t = on = [];
        ac = 0, pa = is(), ya = { status: "pending", value: void 0, then: function(a) {
          t.push(a);
        } };
      }
      return ac++, l.then(Lf, Lf), l;
    }
    function Lf() {
      if (--ac === 0 && on !== null) {
        ya !== null && (ya.status = "fulfilled");
        var e = on;
        on = null, pa = 0, ya = null;
        for (var l = 0; l < e.length; l++) (0, e[l])();
      }
    }
    function ih(e, l) {
      var t = [], a = { status: "pending", value: null, reason: null, then: function(n3) {
        t.push(n3);
      } };
      return e.then(function() {
        a.status = "fulfilled", a.value = l;
        for (var n3 = 0; n3 < t.length; n3++) (0, t[n3])(l);
      }, function(n3) {
        for (a.status = "rejected", a.reason = n3, n3 = 0; n3 < t.length; n3++) (0, t[n3])(void 0);
      }), a;
    }
    var Zf = j.S;
    j.S = function(e, l) {
      Ed = We(), typeof l == "object" && l !== null && typeof l.then == "function" && uh(e, l), Zf !== null && Zf(e, l);
    };
    var Jt2 = ke(null);
    function nc() {
      var e = Jt2.current;
      return e !== null ? e : ce.pooledCache;
    }
    function du(e, l) {
      l === null ? W(Jt2, Jt2.current) : W(Jt2, l.pool);
    }
    function Vf() {
      var e = nc();
      return e === null ? null : { parent: Ce._currentValue, pool: e };
    }
    var ja = Error(d(460)), uc = Error(d(474)), ru = Error(d(542)), mu = { then: function() {
    } };
    function Jf(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Kf(e, l, t) {
      switch (t = e[t], t === void 0 ? e.push(l) : t !== l && (l.then(Jl, Jl), l = t), l.status) {
        case "fulfilled":
          return l.value;
        case "rejected":
          throw e = l.reason, $f(e), e;
        default:
          if (typeof l.status == "string") l.then(Jl, Jl);
          else {
            if (e = ce, e !== null && 100 < e.shellSuspendCounter) throw Error(d(482));
            e = l, e.status = "pending", e.then(function(a) {
              if (l.status === "pending") {
                var n3 = l;
                n3.status = "fulfilled", n3.value = a;
              }
            }, function(a) {
              if (l.status === "pending") {
                var n3 = l;
                n3.status = "rejected", n3.reason = a;
              }
            });
          }
          switch (l.status) {
            case "fulfilled":
              return l.value;
            case "rejected":
              throw e = l.reason, $f(e), e;
          }
          throw kt2 = l, ja;
      }
    }
    function Kt2(e) {
      try {
        var l = e._init;
        return l(e._payload);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (kt2 = t, ja) : t;
      }
    }
    var kt2 = null;
    function kf() {
      if (kt2 === null) throw Error(d(459));
      var e = kt2;
      return kt2 = null, e;
    }
    function $f(e) {
      if (e === ja || e === ru) throw Error(d(483));
    }
    var Sa = null, dn = 0;
    function hu(e) {
      var l = dn;
      return dn += 1, Sa === null && (Sa = []), Kf(Sa, e, l);
    }
    function rn(e, l) {
      l = l.props.ref, e.ref = l !== void 0 ? l : null;
    }
    function xu(e, l) {
      throw l.$$typeof === me ? Error(d(525)) : (e = Object.prototype.toString.call(l), Error(d(31, e === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : e)));
    }
    function Wf(e) {
      function l(m2, r) {
        if (e) {
          var x = m2.deletions;
          x === null ? (m2.deletions = [r], m2.flags |= 16) : x.push(r);
        }
      }
      function t(m2, r) {
        if (!e) return null;
        for (; r !== null; ) l(m2, r), r = r.sibling;
        return null;
      }
      function a(m2) {
        for (var r = /* @__PURE__ */ new Map(); m2 !== null; ) m2.key !== null ? r.set(m2.key, m2) : r.set(m2.index, m2), m2 = m2.sibling;
        return r;
      }
      function n3(m2, r) {
        return m2 = kl(m2, r), m2.index = 0, m2.sibling = null, m2;
      }
      function u(m2, r, x) {
        return m2.index = x, e ? (x = m2.alternate, x !== null ? (x = x.index, x < r ? (m2.flags |= 67108866, r) : x) : (m2.flags |= 67108866, r)) : (m2.flags |= 1048576, r);
      }
      function c(m2) {
        return e && m2.alternate === null && (m2.flags |= 67108866), m2;
      }
      function s(m2, r, x, S3) {
        return r === null || r.tag !== 6 ? (r = Ki(x, m2.mode, S3), r.return = m2, r) : (r = n3(r, x), r.return = m2, r);
      }
      function f2(m2, r, x, S3) {
        var C = x.type;
        return C === H ? y2(m2, r, x.props.children, S3, x.key) : r !== null && (r.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Be && Kt2(C) === r.type) ? (r = n3(r, x.props), rn(r, x), r.return = m2, r) : (r = cu(x.type, x.key, x.props, null, m2.mode, S3), rn(r, x), r.return = m2, r);
      }
      function v(m2, r, x, S3) {
        return r === null || r.tag !== 4 || r.stateNode.containerInfo !== x.containerInfo || r.stateNode.implementation !== x.implementation ? (r = ki(x, m2.mode, S3), r.return = m2, r) : (r = n3(r, x.children || []), r.return = m2, r);
      }
      function y2(m2, r, x, S3, C) {
        return r === null || r.tag !== 7 ? (r = Qt2(x, m2.mode, S3, C), r.return = m2, r) : (r = n3(r, x), r.return = m2, r);
      }
      function N(m2, r, x) {
        if (typeof r == "string" && r !== "" || typeof r == "number" || typeof r == "bigint") return r = Ki("" + r, m2.mode, x), r.return = m2, r;
        if (typeof r == "object" && r !== null) {
          switch (r.$$typeof) {
            case Oe:
              return x = cu(r.type, r.key, r.props, null, m2.mode, x), rn(x, r), x.return = m2, x;
            case Ne:
              return r = ki(r, m2.mode, x), r.return = m2, r;
            case Be:
              return r = Kt2(r), N(m2, r, x);
          }
          if (sl(r) || Ke(r)) return r = Qt2(r, m2.mode, x, null), r.return = m2, r;
          if (typeof r.then == "function") return N(m2, hu(r), x);
          if (r.$$typeof === K2) return N(m2, ou(m2, r), x);
          xu(m2, r);
        }
        return null;
      }
      function g(m2, r, x, S3) {
        var C = r !== null ? r.key : null;
        if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint") return C !== null ? null : s(m2, r, "" + x, S3);
        if (typeof x == "object" && x !== null) {
          switch (x.$$typeof) {
            case Oe:
              return x.key === C ? f2(m2, r, x, S3) : null;
            case Ne:
              return x.key === C ? v(m2, r, x, S3) : null;
            case Be:
              return x = Kt2(x), g(m2, r, x, S3);
          }
          if (sl(x) || Ke(x)) return C !== null ? null : y2(m2, r, x, S3, null);
          if (typeof x.then == "function") return g(m2, r, hu(x), S3);
          if (x.$$typeof === K2) return g(m2, r, ou(m2, x), S3);
          xu(m2, x);
        }
        return null;
      }
      function b(m2, r, x, S3, C) {
        if (typeof S3 == "string" && S3 !== "" || typeof S3 == "number" || typeof S3 == "bigint") return m2 = m2.get(x) || null, s(r, m2, "" + S3, C);
        if (typeof S3 == "object" && S3 !== null) {
          switch (S3.$$typeof) {
            case Oe:
              return m2 = m2.get(S3.key === null ? x : S3.key) || null, f2(r, m2, S3, C);
            case Ne:
              return m2 = m2.get(S3.key === null ? x : S3.key) || null, v(r, m2, S3, C);
            case Be:
              return S3 = Kt2(S3), b(m2, r, x, S3, C);
          }
          if (sl(S3) || Ke(S3)) return m2 = m2.get(x) || null, y2(r, m2, S3, C, null);
          if (typeof S3.then == "function") return b(m2, r, x, hu(S3), C);
          if (S3.$$typeof === K2) return b(m2, r, x, ou(r, S3), C);
          xu(r, S3);
        }
        return null;
      }
      function E(m2, r, x, S3) {
        for (var C = null, F = null, O = r, Y = r = 0, J = null; O !== null && Y < x.length; Y++) {
          O.index > Y ? (J = O, O = null) : J = O.sibling;
          var I = g(m2, O, x[Y], S3);
          if (I === null) {
            O === null && (O = J);
            break;
          }
          e && O && I.alternate === null && l(m2, O), r = u(I, r, Y), F === null ? C = I : F.sibling = I, F = I, O = J;
        }
        if (Y === x.length) return t(m2, O), $ && $l(m2, Y), C;
        if (O === null) {
          for (; Y < x.length; Y++) O = N(m2, x[Y], S3), O !== null && (r = u(O, r, Y), F === null ? C = O : F.sibling = O, F = O);
          return $ && $l(m2, Y), C;
        }
        for (O = a(O); Y < x.length; Y++) J = b(O, m2, Y, x[Y], S3), J !== null && (e && J.alternate !== null && O.delete(J.key === null ? Y : J.key), r = u(J, r, Y), F === null ? C = J : F.sibling = J, F = J);
        return e && O.forEach(function(qt2) {
          return l(m2, qt2);
        }), $ && $l(m2, Y), C;
      }
      function q(m2, r, x, S3) {
        if (x == null) throw Error(d(151));
        for (var C = null, F = null, O = r, Y = r = 0, J = null, I = x.next(); O !== null && !I.done; Y++, I = x.next()) {
          O.index > Y ? (J = O, O = null) : J = O.sibling;
          var qt2 = g(m2, O, I.value, S3);
          if (qt2 === null) {
            O === null && (O = J);
            break;
          }
          e && O && qt2.alternate === null && l(m2, O), r = u(qt2, r, Y), F === null ? C = qt2 : F.sibling = qt2, F = qt2, O = J;
        }
        if (I.done) return t(m2, O), $ && $l(m2, Y), C;
        if (O === null) {
          for (; !I.done; Y++, I = x.next()) I = N(m2, I.value, S3), I !== null && (r = u(I, r, Y), F === null ? C = I : F.sibling = I, F = I);
          return $ && $l(m2, Y), C;
        }
        for (O = a(O); !I.done; Y++, I = x.next()) I = b(O, m2, Y, I.value, S3), I !== null && (e && I.alternate !== null && O.delete(I.key === null ? Y : I.key), r = u(I, r, Y), F === null ? C = I : F.sibling = I, F = I);
        return e && O.forEach(function(g0) {
          return l(m2, g0);
        }), $ && $l(m2, Y), C;
      }
      function ue(m2, r, x, S3) {
        if (typeof x == "object" && x !== null && x.type === H && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
          switch (x.$$typeof) {
            case Oe:
              e: {
                for (var C = x.key; r !== null; ) {
                  if (r.key === C) {
                    if (C = x.type, C === H) {
                      if (r.tag === 7) {
                        t(m2, r.sibling), S3 = n3(r, x.props.children), S3.return = m2, m2 = S3;
                        break e;
                      }
                    } else if (r.elementType === C || typeof C == "object" && C !== null && C.$$typeof === Be && Kt2(C) === r.type) {
                      t(m2, r.sibling), S3 = n3(r, x.props), rn(S3, x), S3.return = m2, m2 = S3;
                      break e;
                    }
                    t(m2, r);
                    break;
                  } else l(m2, r);
                  r = r.sibling;
                }
                x.type === H ? (S3 = Qt2(x.props.children, m2.mode, S3, x.key), S3.return = m2, m2 = S3) : (S3 = cu(x.type, x.key, x.props, null, m2.mode, S3), rn(S3, x), S3.return = m2, m2 = S3);
              }
              return c(m2);
            case Ne:
              e: {
                for (C = x.key; r !== null; ) {
                  if (r.key === C) if (r.tag === 4 && r.stateNode.containerInfo === x.containerInfo && r.stateNode.implementation === x.implementation) {
                    t(m2, r.sibling), S3 = n3(r, x.children || []), S3.return = m2, m2 = S3;
                    break e;
                  } else {
                    t(m2, r);
                    break;
                  }
                  else l(m2, r);
                  r = r.sibling;
                }
                S3 = ki(x, m2.mode, S3), S3.return = m2, m2 = S3;
              }
              return c(m2);
            case Be:
              return x = Kt2(x), ue(m2, r, x, S3);
          }
          if (sl(x)) return E(m2, r, x, S3);
          if (Ke(x)) {
            if (C = Ke(x), typeof C != "function") throw Error(d(150));
            return x = C.call(x), q(m2, r, x, S3);
          }
          if (typeof x.then == "function") return ue(m2, r, hu(x), S3);
          if (x.$$typeof === K2) return ue(m2, r, ou(m2, x), S3);
          xu(m2, x);
        }
        return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, r !== null && r.tag === 6 ? (t(m2, r.sibling), S3 = n3(r, x), S3.return = m2, m2 = S3) : (t(m2, r), S3 = Ki(x, m2.mode, S3), S3.return = m2, m2 = S3), c(m2)) : t(m2, r);
      }
      return function(m2, r, x, S3) {
        try {
          dn = 0;
          var C = ue(m2, r, x, S3);
          return Sa = null, C;
        } catch (O) {
          if (O === ja || O === ru) throw O;
          var F = dl(29, O, null, m2.mode);
          return F.lanes = S3, F.return = m2, F;
        } finally {
        }
      };
    }
    var $t2 = Wf(true), Ff = Wf(false), gt2 = false;
    function ic(e) {
      e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null };
    }
    function cc(e, l) {
      e = e.updateQueue, l.updateQueue === e && (l.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, callbacks: null });
    }
    function bt2(e) {
      return { lane: e, tag: 0, payload: null, callback: null, next: null };
    }
    function pt2(e, l, t) {
      var a = e.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (P & 2) !== 0) {
        var n3 = a.pending;
        return n3 === null ? l.next = l : (l.next = n3.next, n3.next = l), a.pending = l, l = iu(e), qf(e, null, t), l;
      }
      return uu(e, a, l, t), iu(e);
    }
    function mn(e, l, t) {
      if (l = l.updateQueue, l !== null && (l = l.shared, (t & 4194048) !== 0)) {
        var a = l.lanes;
        a &= e.pendingLanes, t |= a, l.lanes = t, Xs(e, t);
      }
    }
    function sc(e, l) {
      var t = e.updateQueue, a = e.alternate;
      if (a !== null && (a = a.updateQueue, t === a)) {
        var n3 = null, u = null;
        if (t = t.firstBaseUpdate, t !== null) {
          do {
            var c = { lane: t.lane, tag: t.tag, payload: t.payload, callback: null, next: null };
            u === null ? n3 = u = c : u = u.next = c, t = t.next;
          } while (t !== null);
          u === null ? n3 = u = l : u = u.next = l;
        } else n3 = u = l;
        t = { baseState: a.baseState, firstBaseUpdate: n3, lastBaseUpdate: u, shared: a.shared, callbacks: a.callbacks }, e.updateQueue = t;
        return;
      }
      e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = l : e.next = l, t.lastBaseUpdate = l;
    }
    var fc = false;
    function hn() {
      if (fc) {
        var e = ya;
        if (e !== null) throw e;
      }
    }
    function xn(e, l, t, a) {
      fc = false;
      var n3 = e.updateQueue;
      gt2 = false;
      var u = n3.firstBaseUpdate, c = n3.lastBaseUpdate, s = n3.shared.pending;
      if (s !== null) {
        n3.shared.pending = null;
        var f2 = s, v = f2.next;
        f2.next = null, c === null ? u = v : c.next = v, c = f2;
        var y2 = e.alternate;
        y2 !== null && (y2 = y2.updateQueue, s = y2.lastBaseUpdate, s !== c && (s === null ? y2.firstBaseUpdate = v : s.next = v, y2.lastBaseUpdate = f2));
      }
      if (u !== null) {
        var N = n3.baseState;
        c = 0, y2 = v = f2 = null, s = u;
        do {
          var g = s.lane & -536870913, b = g !== s.lane;
          if (b ? (V2 & g) === g : (a & g) === g) {
            g !== 0 && g === pa && (fc = true), y2 !== null && (y2 = y2.next = { lane: 0, tag: s.tag, payload: s.payload, callback: null, next: null });
            e: {
              var E = e, q = s;
              g = l;
              var ue = t;
              switch (q.tag) {
                case 1:
                  if (E = q.payload, typeof E == "function") {
                    N = E.call(ue, N, g);
                    break e;
                  }
                  N = E;
                  break e;
                case 3:
                  E.flags = E.flags & -65537 | 128;
                case 0:
                  if (E = q.payload, g = typeof E == "function" ? E.call(ue, N, g) : E, g == null) break e;
                  N = U({}, N, g);
                  break e;
                case 2:
                  gt2 = true;
              }
            }
            g = s.callback, g !== null && (e.flags |= 64, b && (e.flags |= 8192), b = n3.callbacks, b === null ? n3.callbacks = [g] : b.push(g));
          } else b = { lane: g, tag: s.tag, payload: s.payload, callback: s.callback, next: null }, y2 === null ? (v = y2 = b, f2 = N) : y2 = y2.next = b, c |= g;
          if (s = s.next, s === null) {
            if (s = n3.shared.pending, s === null) break;
            b = s, s = b.next, b.next = null, n3.lastBaseUpdate = b, n3.shared.pending = null;
          }
        } while (true);
        y2 === null && (f2 = N), n3.baseState = f2, n3.firstBaseUpdate = v, n3.lastBaseUpdate = y2, u === null && (n3.shared.lanes = 0), zt2 |= c, e.lanes = c, e.memoizedState = N;
      }
    }
    function If(e, l) {
      if (typeof e != "function") throw Error(d(191, e));
      e.call(l);
    }
    function Pf(e, l) {
      var t = e.callbacks;
      if (t !== null) for (e.callbacks = null, e = 0; e < t.length; e++) If(t[e], l);
    }
    var Na = ke(null), vu = ke(0);
    function eo(e, l) {
      e = it2, W(vu, e), W(Na, l), it2 = e | l.baseLanes;
    }
    function oc() {
      W(vu, it2), W(Na, Na.current);
    }
    function dc() {
      it2 = vu.current, xe(Na), xe(vu);
    }
    var rl = ke(null), Tl = null;
    function yt2(e) {
      var l = e.alternate;
      W(Te, Te.current & 1), W(rl, e), Tl === null && (l === null || Na.current !== null || l.memoizedState !== null) && (Tl = e);
    }
    function rc(e) {
      W(Te, Te.current), W(rl, e), Tl === null && (Tl = e);
    }
    function lo(e) {
      e.tag === 22 ? (W(Te, Te.current), W(rl, e), Tl === null && (Tl = e)) : jt2();
    }
    function jt2() {
      W(Te, Te.current), W(rl, rl.current);
    }
    function ml(e) {
      xe(rl), Tl === e && (Tl = null), xe(Te);
    }
    var Te = ke(0);
    function gu(e) {
      for (var l = e; l !== null; ) {
        if (l.tag === 13) {
          var t = l.memoizedState;
          if (t !== null && (t = t.dehydrated, t === null || bs(t) || ps(t))) return l;
        } else if (l.tag === 19 && (l.memoizedProps.revealOrder === "forwards" || l.memoizedProps.revealOrder === "backwards" || l.memoizedProps.revealOrder === "unstable_legacy-backwards" || l.memoizedProps.revealOrder === "together")) {
          if ((l.flags & 128) !== 0) return l;
        } else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === e) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === e) return null;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
      return null;
    }
    var Il = 0, R = null, ae = null, Ue = null, bu = false, za = false, Wt2 = false, pu = 0, vn = 0, Da = null, ch = 0;
    function De() {
      throw Error(d(321));
    }
    function mc(e, l) {
      if (l === null) return false;
      for (var t = 0; t < l.length && t < e.length; t++) if (!ol(e[t], l[t])) return false;
      return true;
    }
    function hc(e, l, t, a, n3, u) {
      return Il = u, R = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, j.H = e === null || e.memoizedState === null ? Yo : Oc, Wt2 = false, u = t(a, n3), Wt2 = false, za && (u = ao(l, t, a, n3)), to(e), u;
    }
    function to(e) {
      j.H = pn;
      var l = ae !== null && ae.next !== null;
      if (Il = 0, Ue = ae = R = null, bu = false, vn = 0, Da = null, l) throw Error(d(300));
      e === null || _e || (e = e.dependencies, e !== null && fu(e) && (_e = true));
    }
    function ao(e, l, t, a) {
      R = e;
      var n3 = 0;
      do {
        if (za && (Da = null), vn = 0, za = false, 25 <= n3) throw Error(d(301));
        if (n3 += 1, Ue = ae = null, e.updateQueue != null) {
          var u = e.updateQueue;
          u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
        }
        j.H = Go, u = l(t, a);
      } while (za);
      return u;
    }
    function sh() {
      var e = j.H, l = e.useState()[0];
      return l = typeof l.then == "function" ? gn(l) : l, e = e.useState()[0], (ae !== null ? ae.memoizedState : null) !== e && (R.flags |= 1024), l;
    }
    function xc() {
      var e = pu !== 0;
      return pu = 0, e;
    }
    function vc(e, l, t) {
      l.updateQueue = e.updateQueue, l.flags &= -2053, e.lanes &= ~t;
    }
    function gc(e) {
      if (bu) {
        for (e = e.memoizedState; e !== null; ) {
          var l = e.queue;
          l !== null && (l.pending = null), e = e.next;
        }
        bu = false;
      }
      Il = 0, Ue = ae = R = null, za = false, vn = pu = 0, Da = null;
    }
    function Pe() {
      var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
      return Ue === null ? R.memoizedState = Ue = e : Ue = Ue.next = e, Ue;
    }
    function Ee() {
      if (ae === null) {
        var e = R.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = ae.next;
      var l = Ue === null ? R.memoizedState : Ue.next;
      if (l !== null) Ue = l, ae = e;
      else {
        if (e === null) throw R.alternate === null ? Error(d(467)) : Error(d(310));
        ae = e, e = { memoizedState: ae.memoizedState, baseState: ae.baseState, baseQueue: ae.baseQueue, queue: ae.queue, next: null }, Ue === null ? R.memoizedState = Ue = e : Ue = Ue.next = e;
      }
      return Ue;
    }
    function yu() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function gn(e) {
      var l = vn;
      return vn += 1, Da === null && (Da = []), e = Kf(Da, e, l), l = R, (Ue === null ? l.memoizedState : Ue.next) === null && (l = l.alternate, j.H = l === null || l.memoizedState === null ? Yo : Oc), e;
    }
    function ju(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return gn(e);
        if (e.$$typeof === K2) return Le(e);
      }
      throw Error(d(438, String(e)));
    }
    function bc(e) {
      var l = null, t = R.updateQueue;
      if (t !== null && (l = t.memoCache), l == null) {
        var a = R.alternate;
        a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = { data: a.data.map(function(n3) {
          return n3.slice();
        }), index: 0 })));
      }
      if (l == null && (l = { data: [], index: 0 }), t === null && (t = yu(), R.updateQueue = t), t.memoCache = l, t = l.data[l.index], t === void 0) for (t = l.data[l.index] = Array(e), a = 0; a < e; a++) t[a] = Bl;
      return l.index++, t;
    }
    function Pl(e, l) {
      return typeof l == "function" ? l(e) : l;
    }
    function Su(e) {
      var l = Ee();
      return pc(l, ae, e);
    }
    function pc(e, l, t) {
      var a = e.queue;
      if (a === null) throw Error(d(311));
      a.lastRenderedReducer = t;
      var n3 = e.baseQueue, u = a.pending;
      if (u !== null) {
        if (n3 !== null) {
          var c = n3.next;
          n3.next = u.next, u.next = c;
        }
        l.baseQueue = n3 = u, a.pending = null;
      }
      if (u = e.baseState, n3 === null) e.memoizedState = u;
      else {
        l = n3.next;
        var s = c = null, f2 = null, v = l, y2 = false;
        do {
          var N = v.lane & -536870913;
          if (N !== v.lane ? (V2 & N) === N : (Il & N) === N) {
            var g = v.revertLane;
            if (g === 0) f2 !== null && (f2 = f2.next = { lane: 0, revertLane: 0, gesture: null, action: v.action, hasEagerState: v.hasEagerState, eagerState: v.eagerState, next: null }), N === pa && (y2 = true);
            else if ((Il & g) === g) {
              v = v.next, g === pa && (y2 = true);
              continue;
            } else N = { lane: 0, revertLane: v.revertLane, gesture: null, action: v.action, hasEagerState: v.hasEagerState, eagerState: v.eagerState, next: null }, f2 === null ? (s = f2 = N, c = u) : f2 = f2.next = N, R.lanes |= g, zt2 |= g;
            N = v.action, Wt2 && t(u, N), u = v.hasEagerState ? v.eagerState : t(u, N);
          } else g = { lane: N, revertLane: v.revertLane, gesture: v.gesture, action: v.action, hasEagerState: v.hasEagerState, eagerState: v.eagerState, next: null }, f2 === null ? (s = f2 = g, c = u) : f2 = f2.next = g, R.lanes |= N, zt2 |= N;
          v = v.next;
        } while (v !== null && v !== l);
        if (f2 === null ? c = u : f2.next = s, !ol(u, e.memoizedState) && (_e = true, y2 && (t = ya, t !== null))) throw t;
        e.memoizedState = u, e.baseState = c, e.baseQueue = f2, a.lastRenderedState = u;
      }
      return n3 === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
    }
    function yc(e) {
      var l = Ee(), t = l.queue;
      if (t === null) throw Error(d(311));
      t.lastRenderedReducer = e;
      var a = t.dispatch, n3 = t.pending, u = l.memoizedState;
      if (n3 !== null) {
        t.pending = null;
        var c = n3 = n3.next;
        do
          u = e(u, c.action), c = c.next;
        while (c !== n3);
        ol(u, l.memoizedState) || (_e = true), l.memoizedState = u, l.baseQueue === null && (l.baseState = u), t.lastRenderedState = u;
      }
      return [u, a];
    }
    function no(e, l, t) {
      var a = R, n3 = Ee(), u = $;
      if (u) {
        if (t === void 0) throw Error(d(407));
        t = t();
      } else t = l();
      var c = !ol((ae || n3).memoizedState, t);
      if (c && (n3.memoizedState = t, _e = true), n3 = n3.queue, Nc(co.bind(null, a, n3, e), [e]), n3.getSnapshot !== l || c || Ue !== null && Ue.memoizedState.tag & 1) {
        if (a.flags |= 2048, Aa(9, { destroy: void 0 }, io.bind(null, a, n3, t, l), null), ce === null) throw Error(d(349));
        u || (Il & 127) !== 0 || uo(a, l, t);
      }
      return t;
    }
    function uo(e, l, t) {
      e.flags |= 16384, e = { getSnapshot: l, value: t }, l = R.updateQueue, l === null ? (l = yu(), R.updateQueue = l, l.stores = [e]) : (t = l.stores, t === null ? l.stores = [e] : t.push(e));
    }
    function io(e, l, t, a) {
      l.value = t, l.getSnapshot = a, so(l) && fo(e);
    }
    function co(e, l, t) {
      return t(function() {
        so(l) && fo(e);
      });
    }
    function so(e) {
      var l = e.getSnapshot;
      e = e.value;
      try {
        var t = l();
        return !ol(e, t);
      } catch {
        return true;
      }
    }
    function fo(e) {
      var l = Xt2(e, 2);
      l !== null && cl(l, e, 2);
    }
    function jc(e) {
      var l = Pe();
      if (typeof e == "function") {
        var t = e;
        if (e = t(), Wt2) {
          Hl(true);
          try {
            t();
          } finally {
            Hl(false);
          }
        }
      }
      return l.memoizedState = l.baseState = e, l.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Pl, lastRenderedState: e }, l;
    }
    function oo(e, l, t, a) {
      return e.baseState = t, pc(e, ae, typeof a == "function" ? a : Pl);
    }
    function fh(e, l, t, a, n3) {
      if (Du(e)) throw Error(d(485));
      if (e = l.action, e !== null) {
        var u = { payload: n3, action: e, next: null, isTransition: true, status: "pending", value: null, reason: null, listeners: [], then: function(c) {
          u.listeners.push(c);
        } };
        j.T !== null ? t(true) : u.isTransition = false, a(u), t = l.pending, t === null ? (u.next = l.pending = u, ro(l, u)) : (u.next = t.next, l.pending = t.next = u);
      }
    }
    function ro(e, l) {
      var t = l.action, a = l.payload, n3 = e.state;
      if (l.isTransition) {
        var u = j.T, c = {};
        j.T = c;
        try {
          var s = t(n3, a), f2 = j.S;
          f2 !== null && f2(c, s), mo(e, l, s);
        } catch (v) {
          Sc(e, l, v);
        } finally {
          u !== null && c.types !== null && (u.types = c.types), j.T = u;
        }
      } else try {
        u = t(n3, a), mo(e, l, u);
      } catch (v) {
        Sc(e, l, v);
      }
    }
    function mo(e, l, t) {
      t !== null && typeof t == "object" && typeof t.then == "function" ? t.then(function(a) {
        ho(e, l, a);
      }, function(a) {
        return Sc(e, l, a);
      }) : ho(e, l, t);
    }
    function ho(e, l, t) {
      l.status = "fulfilled", l.value = t, xo(l), e.state = t, l = e.pending, l !== null && (t = l.next, t === l ? e.pending = null : (t = t.next, l.next = t, ro(e, t)));
    }
    function Sc(e, l, t) {
      var a = e.pending;
      if (e.pending = null, a !== null) {
        a = a.next;
        do
          l.status = "rejected", l.reason = t, xo(l), l = l.next;
        while (l !== a);
      }
      e.action = null;
    }
    function xo(e) {
      e = e.listeners;
      for (var l = 0; l < e.length; l++) (0, e[l])();
    }
    function vo(e, l) {
      return l;
    }
    function go(e, l) {
      if ($) {
        var t = ce.formState;
        if (t !== null) {
          e: {
            var a = R;
            if ($) {
              if (ve) {
                l: {
                  for (var n3 = ve, u = Al; n3.nodeType !== 8; ) {
                    if (!u) {
                      n3 = null;
                      break l;
                    }
                    if (n3 = El(n3.nextSibling), n3 === null) {
                      n3 = null;
                      break l;
                    }
                  }
                  u = n3.data, n3 = u === "F!" || u === "F" ? n3 : null;
                }
                if (n3) {
                  ve = El(n3.nextSibling), a = n3.data === "F!";
                  break e;
                }
              }
              xt2(a);
            }
            a = false;
          }
          a && (l = t[0]);
        }
      }
      return t = Pe(), t.memoizedState = t.baseState = l, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: vo, lastRenderedState: l }, t.queue = a, t = Bo.bind(null, R, a), a.dispatch = t, a = jc(false), u = Ec.bind(null, R, false, a.queue), a = Pe(), n3 = { state: l, dispatch: null, action: e, pending: null }, a.queue = n3, t = fh.bind(null, R, n3, u, t), n3.dispatch = t, a.memoizedState = e, [l, t, false];
    }
    function bo(e) {
      var l = Ee();
      return po(l, ae, e);
    }
    function po(e, l, t) {
      if (l = pc(e, l, vo)[0], e = Su(Pl)[0], typeof l == "object" && l !== null && typeof l.then == "function") try {
        var a = gn(l);
      } catch (c) {
        throw c === ja ? ru : c;
      }
      else a = l;
      l = Ee();
      var n3 = l.queue, u = n3.dispatch;
      return t !== l.memoizedState && (R.flags |= 2048, Aa(9, { destroy: void 0 }, oh.bind(null, n3, t), null)), [a, u, e];
    }
    function oh(e, l) {
      e.action = l;
    }
    function yo(e) {
      var l = Ee(), t = ae;
      if (t !== null) return po(l, t, e);
      Ee(), l = l.memoizedState, t = Ee();
      var a = t.queue.dispatch;
      return t.memoizedState = e, [l, a, false];
    }
    function Aa(e, l, t, a) {
      return e = { tag: e, create: t, deps: a, inst: l, next: null }, l = R.updateQueue, l === null && (l = yu(), R.updateQueue = l), t = l.lastEffect, t === null ? l.lastEffect = e.next = e : (a = t.next, t.next = e, e.next = a, l.lastEffect = e), e;
    }
    function jo() {
      return Ee().memoizedState;
    }
    function Nu(e, l, t, a) {
      var n3 = Pe();
      R.flags |= e, n3.memoizedState = Aa(1 | l, { destroy: void 0 }, t, a === void 0 ? null : a);
    }
    function zu(e, l, t, a) {
      var n3 = Ee();
      a = a === void 0 ? null : a;
      var u = n3.memoizedState.inst;
      ae !== null && a !== null && mc(a, ae.memoizedState.deps) ? n3.memoizedState = Aa(l, u, t, a) : (R.flags |= e, n3.memoizedState = Aa(1 | l, u, t, a));
    }
    function So(e, l) {
      Nu(8390656, 8, e, l);
    }
    function Nc(e, l) {
      zu(2048, 8, e, l);
    }
    function dh(e) {
      R.flags |= 4;
      var l = R.updateQueue;
      if (l === null) l = yu(), R.updateQueue = l, l.events = [e];
      else {
        var t = l.events;
        t === null ? l.events = [e] : t.push(e);
      }
    }
    function No(e) {
      var l = Ee().memoizedState;
      return dh({ ref: l, nextImpl: e }), function() {
        if ((P & 2) !== 0) throw Error(d(440));
        return l.impl.apply(void 0, arguments);
      };
    }
    function zo(e, l) {
      return zu(4, 2, e, l);
    }
    function Do(e, l) {
      return zu(4, 4, e, l);
    }
    function Ao(e, l) {
      if (typeof l == "function") {
        e = e();
        var t = l(e);
        return function() {
          typeof t == "function" ? t() : l(null);
        };
      }
      if (l != null) return e = e(), l.current = e, function() {
        l.current = null;
      };
    }
    function To(e, l, t) {
      t = t != null ? t.concat([e]) : null, zu(4, 4, Ao.bind(null, l, e), t);
    }
    function zc() {
    }
    function Eo(e, l) {
      var t = Ee();
      l = l === void 0 ? null : l;
      var a = t.memoizedState;
      return l !== null && mc(l, a[1]) ? a[0] : (t.memoizedState = [e, l], e);
    }
    function Oo(e, l) {
      var t = Ee();
      l = l === void 0 ? null : l;
      var a = t.memoizedState;
      if (l !== null && mc(l, a[1])) return a[0];
      if (a = e(), Wt2) {
        Hl(true);
        try {
          e();
        } finally {
          Hl(false);
        }
      }
      return t.memoizedState = [a, l], a;
    }
    function Dc(e, l, t) {
      return t === void 0 || (Il & 1073741824) !== 0 && (V2 & 261930) === 0 ? e.memoizedState = l : (e.memoizedState = t, e = Md(), R.lanes |= e, zt2 |= e, t);
    }
    function Mo(e, l, t, a) {
      return ol(t, l) ? t : Na.current !== null ? (e = Dc(e, t, a), ol(e, l) || (_e = true), e) : (Il & 42) === 0 || (Il & 1073741824) !== 0 && (V2 & 261930) === 0 ? (_e = true, e.memoizedState = t) : (e = Md(), R.lanes |= e, zt2 |= e, l);
    }
    function Co(e, l, t, a, n3) {
      var u = A.p;
      A.p = u !== 0 && 8 > u ? u : 8;
      var c = j.T, s = {};
      j.T = s, Ec(e, false, l, t);
      try {
        var f2 = n3(), v = j.S;
        if (v !== null && v(s, f2), f2 !== null && typeof f2 == "object" && typeof f2.then == "function") {
          var y2 = ih(f2, a);
          bn(e, l, y2, vl(e));
        } else bn(e, l, a, vl(e));
      } catch (N) {
        bn(e, l, { then: function() {
        }, status: "rejected", reason: N }, vl());
      } finally {
        A.p = u, c !== null && s.types !== null && (c.types = s.types), j.T = c;
      }
    }
    function rh() {
    }
    function Ac(e, l, t, a) {
      if (e.tag !== 5) throw Error(d(476));
      var n3 = Uo(e).queue;
      Co(e, n3, l, _2, t === null ? rh : function() {
        return _o(e), t(a);
      });
    }
    function Uo(e) {
      var l = e.memoizedState;
      if (l !== null) return l;
      l = { memoizedState: _2, baseState: _2, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Pl, lastRenderedState: _2 }, next: null };
      var t = {};
      return l.next = { memoizedState: t, baseState: t, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Pl, lastRenderedState: t }, next: null }, e.memoizedState = l, e = e.alternate, e !== null && (e.memoizedState = l), l;
    }
    function _o(e) {
      var l = Uo(e);
      l.next === null && (l = e.alternate.memoizedState), bn(e, l.next.queue, {}, vl());
    }
    function Tc() {
      return Le(wn);
    }
    function qo() {
      return Ee().memoizedState;
    }
    function wo() {
      return Ee().memoizedState;
    }
    function mh(e) {
      for (var l = e.return; l !== null; ) {
        switch (l.tag) {
          case 24:
          case 3:
            var t = vl();
            e = bt2(t);
            var a = pt2(l, e, t);
            a !== null && (cl(a, l, t), mn(a, l, t)), l = { cache: tc() }, e.payload = l;
            return;
        }
        l = l.return;
      }
    }
    function hh(e, l, t) {
      var a = vl();
      t = { lane: a, revertLane: 0, gesture: null, action: t, hasEagerState: false, eagerState: null, next: null }, Du(e) ? Ho(l, t) : (t = Vi(e, l, t, a), t !== null && (cl(t, e, a), Ro(t, l, a)));
    }
    function Bo(e, l, t) {
      var a = vl();
      bn(e, l, t, a);
    }
    function bn(e, l, t, a) {
      var n3 = { lane: a, revertLane: 0, gesture: null, action: t, hasEagerState: false, eagerState: null, next: null };
      if (Du(e)) Ho(l, n3);
      else {
        var u = e.alternate;
        if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = l.lastRenderedReducer, u !== null)) try {
          var c = l.lastRenderedState, s = u(c, t);
          if (n3.hasEagerState = true, n3.eagerState = s, ol(s, c)) return uu(e, l, n3, 0), ce === null && nu(), false;
        } catch {
        } finally {
        }
        if (t = Vi(e, l, n3, a), t !== null) return cl(t, e, a), Ro(t, l, a), true;
      }
      return false;
    }
    function Ec(e, l, t, a) {
      if (a = { lane: 2, revertLane: is(), gesture: null, action: a, hasEagerState: false, eagerState: null, next: null }, Du(e)) {
        if (l) throw Error(d(479));
      } else l = Vi(e, t, a, 2), l !== null && cl(l, e, 2);
    }
    function Du(e) {
      var l = e.alternate;
      return e === R || l !== null && l === R;
    }
    function Ho(e, l) {
      za = bu = true;
      var t = e.pending;
      t === null ? l.next = l : (l.next = t.next, t.next = l), e.pending = l;
    }
    function Ro(e, l, t) {
      if ((t & 4194048) !== 0) {
        var a = l.lanes;
        a &= e.pendingLanes, t |= a, l.lanes = t, Xs(e, t);
      }
    }
    var pn = { readContext: Le, use: ju, useCallback: De, useContext: De, useEffect: De, useImperativeHandle: De, useLayoutEffect: De, useInsertionEffect: De, useMemo: De, useReducer: De, useRef: De, useState: De, useDebugValue: De, useDeferredValue: De, useTransition: De, useSyncExternalStore: De, useId: De, useHostTransitionStatus: De, useFormState: De, useActionState: De, useOptimistic: De, useMemoCache: De, useCacheRefresh: De };
    pn.useEffectEvent = De;
    var Yo = { readContext: Le, use: ju, useCallback: function(e, l) {
      return Pe().memoizedState = [e, l === void 0 ? null : l], e;
    }, useContext: Le, useEffect: So, useImperativeHandle: function(e, l, t) {
      t = t != null ? t.concat([e]) : null, Nu(4194308, 4, Ao.bind(null, l, e), t);
    }, useLayoutEffect: function(e, l) {
      return Nu(4194308, 4, e, l);
    }, useInsertionEffect: function(e, l) {
      Nu(4, 2, e, l);
    }, useMemo: function(e, l) {
      var t = Pe();
      l = l === void 0 ? null : l;
      var a = e();
      if (Wt2) {
        Hl(true);
        try {
          e();
        } finally {
          Hl(false);
        }
      }
      return t.memoizedState = [a, l], a;
    }, useReducer: function(e, l, t) {
      var a = Pe();
      if (t !== void 0) {
        var n3 = t(l);
        if (Wt2) {
          Hl(true);
          try {
            t(l);
          } finally {
            Hl(false);
          }
        }
      } else n3 = l;
      return a.memoizedState = a.baseState = n3, e = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n3 }, a.queue = e, e = e.dispatch = hh.bind(null, R, e), [a.memoizedState, e];
    }, useRef: function(e) {
      var l = Pe();
      return e = { current: e }, l.memoizedState = e;
    }, useState: function(e) {
      e = jc(e);
      var l = e.queue, t = Bo.bind(null, R, l);
      return l.dispatch = t, [e.memoizedState, t];
    }, useDebugValue: zc, useDeferredValue: function(e, l) {
      var t = Pe();
      return Dc(t, e, l);
    }, useTransition: function() {
      var e = jc(false);
      return e = Co.bind(null, R, e.queue, true, false), Pe().memoizedState = e, [false, e];
    }, useSyncExternalStore: function(e, l, t) {
      var a = R, n3 = Pe();
      if ($) {
        if (t === void 0) throw Error(d(407));
        t = t();
      } else {
        if (t = l(), ce === null) throw Error(d(349));
        (V2 & 127) !== 0 || uo(a, l, t);
      }
      n3.memoizedState = t;
      var u = { value: t, getSnapshot: l };
      return n3.queue = u, So(co.bind(null, a, u, e), [e]), a.flags |= 2048, Aa(9, { destroy: void 0 }, io.bind(null, a, u, t, l), null), t;
    }, useId: function() {
      var e = Pe(), l = ce.identifierPrefix;
      if ($) {
        var t = Yl, a = Rl;
        t = (a & ~(1 << 32 - Ie(a) - 1)).toString(32) + t, l = "_" + l + "R_" + t, t = pu++, 0 < t && (l += "H" + t.toString(32)), l += "_";
      } else t = ch++, l = "_" + l + "r_" + t.toString(32) + "_";
      return e.memoizedState = l;
    }, useHostTransitionStatus: Tc, useFormState: go, useActionState: go, useOptimistic: function(e) {
      var l = Pe();
      l.memoizedState = l.baseState = e;
      var t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null };
      return l.queue = t, l = Ec.bind(null, R, true, t), t.dispatch = l, [e, l];
    }, useMemoCache: bc, useCacheRefresh: function() {
      return Pe().memoizedState = mh.bind(null, R);
    }, useEffectEvent: function(e) {
      var l = Pe(), t = { impl: e };
      return l.memoizedState = t, function() {
        if ((P & 2) !== 0) throw Error(d(440));
        return t.impl.apply(void 0, arguments);
      };
    } }, Oc = { readContext: Le, use: ju, useCallback: Eo, useContext: Le, useEffect: Nc, useImperativeHandle: To, useInsertionEffect: zo, useLayoutEffect: Do, useMemo: Oo, useReducer: Su, useRef: jo, useState: function() {
      return Su(Pl);
    }, useDebugValue: zc, useDeferredValue: function(e, l) {
      var t = Ee();
      return Mo(t, ae.memoizedState, e, l);
    }, useTransition: function() {
      var e = Su(Pl)[0], l = Ee().memoizedState;
      return [typeof e == "boolean" ? e : gn(e), l];
    }, useSyncExternalStore: no, useId: qo, useHostTransitionStatus: Tc, useFormState: bo, useActionState: bo, useOptimistic: function(e, l) {
      var t = Ee();
      return oo(t, ae, e, l);
    }, useMemoCache: bc, useCacheRefresh: wo };
    Oc.useEffectEvent = No;
    var Go = { readContext: Le, use: ju, useCallback: Eo, useContext: Le, useEffect: Nc, useImperativeHandle: To, useInsertionEffect: zo, useLayoutEffect: Do, useMemo: Oo, useReducer: yc, useRef: jo, useState: function() {
      return yc(Pl);
    }, useDebugValue: zc, useDeferredValue: function(e, l) {
      var t = Ee();
      return ae === null ? Dc(t, e, l) : Mo(t, ae.memoizedState, e, l);
    }, useTransition: function() {
      var e = yc(Pl)[0], l = Ee().memoizedState;
      return [typeof e == "boolean" ? e : gn(e), l];
    }, useSyncExternalStore: no, useId: qo, useHostTransitionStatus: Tc, useFormState: yo, useActionState: yo, useOptimistic: function(e, l) {
      var t = Ee();
      return ae !== null ? oo(t, ae, e, l) : (t.baseState = e, [e, t.queue.dispatch]);
    }, useMemoCache: bc, useCacheRefresh: wo };
    Go.useEffectEvent = No;
    function Mc(e, l, t, a) {
      l = e.memoizedState, t = t(a, l), t = t == null ? l : U({}, l, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
    }
    var Cc = { enqueueSetState: function(e, l, t) {
      e = e._reactInternals;
      var a = vl(), n3 = bt2(a);
      n3.payload = l, t != null && (n3.callback = t), l = pt2(e, n3, a), l !== null && (cl(l, e, a), mn(l, e, a));
    }, enqueueReplaceState: function(e, l, t) {
      e = e._reactInternals;
      var a = vl(), n3 = bt2(a);
      n3.tag = 1, n3.payload = l, t != null && (n3.callback = t), l = pt2(e, n3, a), l !== null && (cl(l, e, a), mn(l, e, a));
    }, enqueueForceUpdate: function(e, l) {
      e = e._reactInternals;
      var t = vl(), a = bt2(t);
      a.tag = 2, l != null && (a.callback = l), l = pt2(e, a, t), l !== null && (cl(l, e, t), mn(l, e, t));
    } };
    function Xo(e, l, t, a, n3, u, c) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, c) : l.prototype && l.prototype.isPureReactComponent ? !nn(t, a) || !nn(n3, u) : true;
    }
    function Qo(e, l, t, a) {
      e = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(t, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(t, a), l.state !== e && Cc.enqueueReplaceState(l, l.state, null);
    }
    function Ft2(e, l) {
      var t = l;
      if ("ref" in l) {
        t = {};
        for (var a in l) a !== "ref" && (t[a] = l[a]);
      }
      if (e = e.defaultProps) {
        t === l && (t = U({}, t));
        for (var n3 in e) t[n3] === void 0 && (t[n3] = e[n3]);
      }
      return t;
    }
    function Lo(e) {
      au(e);
    }
    function Zo(e) {
      console.error(e);
    }
    function Vo(e) {
      au(e);
    }
    function Au(e, l) {
      try {
        var t = e.onUncaughtError;
        t(l.value, { componentStack: l.stack });
      } catch (a) {
        setTimeout(function() {
          throw a;
        });
      }
    }
    function Jo(e, l, t) {
      try {
        var a = e.onCaughtError;
        a(t.value, { componentStack: t.stack, errorBoundary: l.tag === 1 ? l.stateNode : null });
      } catch (n3) {
        setTimeout(function() {
          throw n3;
        });
      }
    }
    function Uc(e, l, t) {
      return t = bt2(t), t.tag = 3, t.payload = { element: null }, t.callback = function() {
        Au(e, l);
      }, t;
    }
    function Ko(e) {
      return e = bt2(e), e.tag = 3, e;
    }
    function ko(e, l, t, a) {
      var n3 = t.type.getDerivedStateFromError;
      if (typeof n3 == "function") {
        var u = a.value;
        e.payload = function() {
          return n3(u);
        }, e.callback = function() {
          Jo(l, t, a);
        };
      }
      var c = t.stateNode;
      c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
        Jo(l, t, a), typeof n3 != "function" && (Dt2 === null ? Dt2 = /* @__PURE__ */ new Set([this]) : Dt2.add(this));
        var s = a.stack;
        this.componentDidCatch(a.value, { componentStack: s !== null ? s : "" });
      });
    }
    function xh(e, l, t, a, n3) {
      if (t.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (l = t.alternate, l !== null && ba(l, t, n3, true), t = rl.current, t !== null) {
          switch (t.tag) {
            case 31:
            case 13:
              return Tl === null ? Ru() : t.alternate === null && Ae === 0 && (Ae = 3), t.flags &= -257, t.flags |= 65536, t.lanes = n3, a === mu ? t.flags |= 16384 : (l = t.updateQueue, l === null ? t.updateQueue = /* @__PURE__ */ new Set([a]) : l.add(a), as(e, a, n3)), false;
            case 22:
              return t.flags |= 65536, a === mu ? t.flags |= 16384 : (l = t.updateQueue, l === null ? (l = { transitions: null, markerInstances: null, retryQueue: /* @__PURE__ */ new Set([a]) }, t.updateQueue = l) : (t = l.retryQueue, t === null ? l.retryQueue = /* @__PURE__ */ new Set([a]) : t.add(a)), as(e, a, n3)), false;
          }
          throw Error(d(435, t.tag));
        }
        return as(e, a, n3), Ru(), false;
      }
      if ($) return l = rl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = n3, a !== Fi && (e = Error(d(422), { cause: a }), sn(Nl(e, t)))) : (a !== Fi && (l = Error(d(423), { cause: a }), sn(Nl(l, t))), e = e.current.alternate, e.flags |= 65536, n3 &= -n3, e.lanes |= n3, a = Nl(a, t), n3 = Uc(e.stateNode, a, n3), sc(e, n3), Ae !== 4 && (Ae = 2)), false;
      var u = Error(d(520), { cause: a });
      if (u = Nl(u, t), Tn === null ? Tn = [u] : Tn.push(u), Ae !== 4 && (Ae = 2), l === null) return true;
      a = Nl(a, t), t = l;
      do {
        switch (t.tag) {
          case 3:
            return t.flags |= 65536, e = n3 & -n3, t.lanes |= e, e = Uc(t.stateNode, a, e), sc(t, e), false;
          case 1:
            if (l = t.type, u = t.stateNode, (t.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Dt2 === null || !Dt2.has(u)))) return t.flags |= 65536, n3 &= -n3, t.lanes |= n3, n3 = Ko(n3), ko(n3, e, t, a), sc(t, n3), false;
        }
        t = t.return;
      } while (t !== null);
      return false;
    }
    var _c = Error(d(461)), _e = false;
    function Ze(e, l, t, a) {
      l.child = e === null ? Ff(l, null, t, a) : $t2(l, e.child, t, a);
    }
    function $o(e, l, t, a, n3) {
      t = t.render;
      var u = l.ref;
      if ("ref" in a) {
        var c = {};
        for (var s in a) s !== "ref" && (c[s] = a[s]);
      } else c = a;
      return Vt2(l), a = hc(e, l, t, c, u, n3), s = xc(), e !== null && !_e ? (vc(e, l, n3), et2(e, l, n3)) : ($ && s && $i(l), l.flags |= 1, Ze(e, l, a, n3), l.child);
    }
    function Wo(e, l, t, a, n3) {
      if (e === null) {
        var u = t.type;
        return typeof u == "function" && !Ji(u) && u.defaultProps === void 0 && t.compare === null ? (l.tag = 15, l.type = u, Fo(e, l, u, a, n3)) : (e = cu(t.type, null, a, l, l.mode, n3), e.ref = l.ref, e.return = l, l.child = e);
      }
      if (u = e.child, !Xc(e, n3)) {
        var c = u.memoizedProps;
        if (t = t.compare, t = t !== null ? t : nn, t(c, a) && e.ref === l.ref) return et2(e, l, n3);
      }
      return l.flags |= 1, e = kl(u, a), e.ref = l.ref, e.return = l, l.child = e;
    }
    function Fo(e, l, t, a, n3) {
      if (e !== null) {
        var u = e.memoizedProps;
        if (nn(u, a) && e.ref === l.ref) if (_e = false, l.pendingProps = a = u, Xc(e, n3)) (e.flags & 131072) !== 0 && (_e = true);
        else return l.lanes = e.lanes, et2(e, l, n3);
      }
      return qc(e, l, t, a, n3);
    }
    function Io(e, l, t, a) {
      var n3 = a.children, u = e !== null ? e.memoizedState : null;
      if (e === null && l.stateNode === null && (l.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") {
        if ((l.flags & 128) !== 0) {
          if (u = u !== null ? u.baseLanes | t : t, e !== null) {
            for (a = l.child = e.child, n3 = 0; a !== null; ) n3 = n3 | a.lanes | a.childLanes, a = a.sibling;
            a = n3 & ~u;
          } else a = 0, l.child = null;
          return Po(e, l, u, t, a);
        }
        if ((t & 536870912) !== 0) l.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && du(l, u !== null ? u.cachePool : null), u !== null ? eo(l, u) : oc(), lo(l);
        else return a = l.lanes = 536870912, Po(e, l, u !== null ? u.baseLanes | t : t, t, a);
      } else u !== null ? (du(l, u.cachePool), eo(l, u), jt2(), l.memoizedState = null) : (e !== null && du(l, null), oc(), jt2());
      return Ze(e, l, n3, t), l.child;
    }
    function yn(e, l) {
      return e !== null && e.tag === 22 || l.stateNode !== null || (l.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), l.sibling;
    }
    function Po(e, l, t, a, n3) {
      var u = nc();
      return u = u === null ? null : { parent: Ce._currentValue, pool: u }, l.memoizedState = { baseLanes: t, cachePool: u }, e !== null && du(l, null), oc(), lo(l), e !== null && ba(e, l, a, true), l.childLanes = n3, null;
    }
    function Tu(e, l) {
      return l = Ou({ mode: l.mode, children: l.children }, e.mode), l.ref = e.ref, e.child = l, l.return = e, l;
    }
    function ed(e, l, t) {
      return $t2(l, e.child, null, t), e = Tu(l, l.pendingProps), e.flags |= 2, ml(l), l.memoizedState = null, e;
    }
    function vh(e, l, t) {
      var a = l.pendingProps, n3 = (l.flags & 128) !== 0;
      if (l.flags &= -129, e === null) {
        if ($) {
          if (a.mode === "hidden") return e = Tu(l, a), l.lanes = 536870912, yn(null, e);
          if (rc(l), (e = ve) ? (e = rr(e, Al), e = e !== null && e.data === "&" ? e : null, e !== null && (l.memoizedState = { dehydrated: e, treeContext: mt2 !== null ? { id: Rl, overflow: Yl } : null, retryLane: 536870912, hydrationErrors: null }, t = Bf(e), t.return = l, l.child = t, Qe = l, ve = null)) : e = null, e === null) throw xt2(l);
          return l.lanes = 536870912, null;
        }
        return Tu(l, a);
      }
      var u = e.memoizedState;
      if (u !== null) {
        var c = u.dehydrated;
        if (rc(l), n3) if (l.flags & 256) l.flags &= -257, l = ed(e, l, t);
        else if (l.memoizedState !== null) l.child = e.child, l.flags |= 128, l = null;
        else throw Error(d(558));
        else if (_e || ba(e, l, t, false), n3 = (t & e.childLanes) !== 0, _e || n3) {
          if (a = ce, a !== null && (c = Qs(a, t), c !== 0 && c !== u.retryLane)) throw u.retryLane = c, Xt2(e, c), cl(a, e, c), _c;
          Ru(), l = ed(e, l, t);
        } else e = u.treeContext, ve = El(c.nextSibling), Qe = l, $ = true, ht2 = null, Al = false, e !== null && Yf(l, e), l = Tu(l, a), l.flags |= 4096;
        return l;
      }
      return e = kl(e.child, { mode: a.mode, children: a.children }), e.ref = l.ref, l.child = e, e.return = l, e;
    }
    function Eu(e, l) {
      var t = l.ref;
      if (t === null) e !== null && e.ref !== null && (l.flags |= 4194816);
      else {
        if (typeof t != "function" && typeof t != "object") throw Error(d(284));
        (e === null || e.ref !== t) && (l.flags |= 4194816);
      }
    }
    function qc(e, l, t, a, n3) {
      return Vt2(l), t = hc(e, l, t, a, void 0, n3), a = xc(), e !== null && !_e ? (vc(e, l, n3), et2(e, l, n3)) : ($ && a && $i(l), l.flags |= 1, Ze(e, l, t, n3), l.child);
    }
    function ld(e, l, t, a, n3, u) {
      return Vt2(l), l.updateQueue = null, t = ao(l, a, t, n3), to(e), a = xc(), e !== null && !_e ? (vc(e, l, u), et2(e, l, u)) : ($ && a && $i(l), l.flags |= 1, Ze(e, l, t, u), l.child);
    }
    function td(e, l, t, a, n3) {
      if (Vt2(l), l.stateNode === null) {
        var u = ha, c = t.contextType;
        typeof c == "object" && c !== null && (u = Le(c)), u = new t(a, u), l.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Cc, l.stateNode = u, u._reactInternals = l, u = l.stateNode, u.props = a, u.state = l.memoizedState, u.refs = {}, ic(l), c = t.contextType, u.context = typeof c == "object" && c !== null ? Le(c) : ha, u.state = l.memoizedState, c = t.getDerivedStateFromProps, typeof c == "function" && (Mc(l, t, c, a), u.state = l.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && Cc.enqueueReplaceState(u, u.state, null), xn(l, a, u, n3), hn(), u.state = l.memoizedState), typeof u.componentDidMount == "function" && (l.flags |= 4194308), a = true;
      } else if (e === null) {
        u = l.stateNode;
        var s = l.memoizedProps, f2 = Ft2(t, s);
        u.props = f2;
        var v = u.context, y2 = t.contextType;
        c = ha, typeof y2 == "object" && y2 !== null && (c = Le(y2));
        var N = t.getDerivedStateFromProps;
        y2 = typeof N == "function" || typeof u.getSnapshotBeforeUpdate == "function", s = l.pendingProps !== s, y2 || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s || v !== c) && Qo(l, u, a, c), gt2 = false;
        var g = l.memoizedState;
        u.state = g, xn(l, a, u, n3), hn(), v = l.memoizedState, s || g !== v || gt2 ? (typeof N == "function" && (Mc(l, t, N, a), v = l.memoizedState), (f2 = gt2 || Xo(l, t, f2, a, g, v, c)) ? (y2 || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = v), u.props = a, u.state = v, u.context = c, a = f2) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), a = false);
      } else {
        u = l.stateNode, cc(e, l), c = l.memoizedProps, y2 = Ft2(t, c), u.props = y2, N = l.pendingProps, g = u.context, v = t.contextType, f2 = ha, typeof v == "object" && v !== null && (f2 = Le(v)), s = t.getDerivedStateFromProps, (v = typeof s == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== N || g !== f2) && Qo(l, u, a, f2), gt2 = false, g = l.memoizedState, u.state = g, xn(l, a, u, n3), hn();
        var b = l.memoizedState;
        c !== N || g !== b || gt2 || e !== null && e.dependencies !== null && fu(e.dependencies) ? (typeof s == "function" && (Mc(l, t, s, a), b = l.memoizedState), (y2 = gt2 || Xo(l, t, y2, a, g, b, f2) || e !== null && e.dependencies !== null && fu(e.dependencies)) ? (v || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, b, f2), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, b, f2)), typeof u.componentDidUpdate == "function" && (l.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && g === e.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && g === e.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = b), u.props = a, u.state = b, u.context = f2, a = y2) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && g === e.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && g === e.memoizedState || (l.flags |= 1024), a = false);
      }
      return u = a, Eu(e, l), a = (l.flags & 128) !== 0, u || a ? (u = l.stateNode, t = a && typeof t.getDerivedStateFromError != "function" ? null : u.render(), l.flags |= 1, e !== null && a ? (l.child = $t2(l, e.child, null, n3), l.child = $t2(l, null, t, n3)) : Ze(e, l, t, n3), l.memoizedState = u.state, e = l.child) : e = et2(e, l, n3), e;
    }
    function ad(e, l, t, a) {
      return Lt2(), l.flags |= 256, Ze(e, l, t, a), l.child;
    }
    var wc = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null };
    function Bc(e) {
      return { baseLanes: e, cachePool: Vf() };
    }
    function Hc(e, l, t) {
      return e = e !== null ? e.childLanes & ~t : 0, l && (e |= xl), e;
    }
    function nd(e, l, t) {
      var a = l.pendingProps, n3 = false, u = (l.flags & 128) !== 0, c;
      if ((c = u) || (c = e !== null && e.memoizedState === null ? false : (Te.current & 2) !== 0), c && (n3 = true, l.flags &= -129), c = (l.flags & 32) !== 0, l.flags &= -33, e === null) {
        if ($) {
          if (n3 ? yt2(l) : jt2(), (e = ve) ? (e = rr(e, Al), e = e !== null && e.data !== "&" ? e : null, e !== null && (l.memoizedState = { dehydrated: e, treeContext: mt2 !== null ? { id: Rl, overflow: Yl } : null, retryLane: 536870912, hydrationErrors: null }, t = Bf(e), t.return = l, l.child = t, Qe = l, ve = null)) : e = null, e === null) throw xt2(l);
          return ps(e) ? l.lanes = 32 : l.lanes = 536870912, null;
        }
        var s = a.children;
        return a = a.fallback, n3 ? (jt2(), n3 = l.mode, s = Ou({ mode: "hidden", children: s }, n3), a = Qt2(a, n3, t, null), s.return = l, a.return = l, s.sibling = a, l.child = s, a = l.child, a.memoizedState = Bc(t), a.childLanes = Hc(e, c, t), l.memoizedState = wc, yn(null, a)) : (yt2(l), Rc(l, s));
      }
      var f2 = e.memoizedState;
      if (f2 !== null && (s = f2.dehydrated, s !== null)) {
        if (u) l.flags & 256 ? (yt2(l), l.flags &= -257, l = Yc(e, l, t)) : l.memoizedState !== null ? (jt2(), l.child = e.child, l.flags |= 128, l = null) : (jt2(), s = a.fallback, n3 = l.mode, a = Ou({ mode: "visible", children: a.children }, n3), s = Qt2(s, n3, t, null), s.flags |= 2, a.return = l, s.return = l, a.sibling = s, l.child = a, $t2(l, e.child, null, t), a = l.child, a.memoizedState = Bc(t), a.childLanes = Hc(e, c, t), l.memoizedState = wc, l = yn(null, a));
        else if (yt2(l), ps(s)) {
          if (c = s.nextSibling && s.nextSibling.dataset, c) var v = c.dgst;
          c = v, a = Error(d(419)), a.stack = "", a.digest = c, sn({ value: a, source: null, stack: null }), l = Yc(e, l, t);
        } else if (_e || ba(e, l, t, false), c = (t & e.childLanes) !== 0, _e || c) {
          if (c = ce, c !== null && (a = Qs(c, t), a !== 0 && a !== f2.retryLane)) throw f2.retryLane = a, Xt2(e, a), cl(c, e, a), _c;
          bs(s) || Ru(), l = Yc(e, l, t);
        } else bs(s) ? (l.flags |= 192, l.child = e.child, l = null) : (e = f2.treeContext, ve = El(s.nextSibling), Qe = l, $ = true, ht2 = null, Al = false, e !== null && Yf(l, e), l = Rc(l, a.children), l.flags |= 4096);
        return l;
      }
      return n3 ? (jt2(), s = a.fallback, n3 = l.mode, f2 = e.child, v = f2.sibling, a = kl(f2, { mode: "hidden", children: a.children }), a.subtreeFlags = f2.subtreeFlags & 65011712, v !== null ? s = kl(v, s) : (s = Qt2(s, n3, t, null), s.flags |= 2), s.return = l, a.return = l, a.sibling = s, l.child = a, yn(null, a), a = l.child, s = e.child.memoizedState, s === null ? s = Bc(t) : (n3 = s.cachePool, n3 !== null ? (f2 = Ce._currentValue, n3 = n3.parent !== f2 ? { parent: f2, pool: f2 } : n3) : n3 = Vf(), s = { baseLanes: s.baseLanes | t, cachePool: n3 }), a.memoizedState = s, a.childLanes = Hc(e, c, t), l.memoizedState = wc, yn(e.child, a)) : (yt2(l), t = e.child, e = t.sibling, t = kl(t, { mode: "visible", children: a.children }), t.return = l, t.sibling = null, e !== null && (c = l.deletions, c === null ? (l.deletions = [e], l.flags |= 16) : c.push(e)), l.child = t, l.memoizedState = null, t);
    }
    function Rc(e, l) {
      return l = Ou({ mode: "visible", children: l }, e.mode), l.return = e, e.child = l;
    }
    function Ou(e, l) {
      return e = dl(22, e, null, l), e.lanes = 0, e;
    }
    function Yc(e, l, t) {
      return $t2(l, e.child, null, t), e = Rc(l, l.pendingProps.children), e.flags |= 2, l.memoizedState = null, e;
    }
    function ud(e, l, t) {
      e.lanes |= l;
      var a = e.alternate;
      a !== null && (a.lanes |= l), ec(e.return, l, t);
    }
    function Gc(e, l, t, a, n3, u) {
      var c = e.memoizedState;
      c === null ? e.memoizedState = { isBackwards: l, rendering: null, renderingStartTime: 0, last: a, tail: t, tailMode: n3, treeForkCount: u } : (c.isBackwards = l, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = t, c.tailMode = n3, c.treeForkCount = u);
    }
    function id(e, l, t) {
      var a = l.pendingProps, n3 = a.revealOrder, u = a.tail;
      a = a.children;
      var c = Te.current, s = (c & 2) !== 0;
      if (s ? (c = c & 1 | 2, l.flags |= 128) : c &= 1, W(Te, c), Ze(e, l, a, t), a = $ ? cn : 0, !s && e !== null && (e.flags & 128) !== 0) e: for (e = l.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ud(e, t, l);
        else if (e.tag === 19) ud(e, t, l);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === l) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === l) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      switch (n3) {
        case "forwards":
          for (t = l.child, n3 = null; t !== null; ) e = t.alternate, e !== null && gu(e) === null && (n3 = t), t = t.sibling;
          t = n3, t === null ? (n3 = l.child, l.child = null) : (n3 = t.sibling, t.sibling = null), Gc(l, false, n3, t, u, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (t = null, n3 = l.child, l.child = null; n3 !== null; ) {
            if (e = n3.alternate, e !== null && gu(e) === null) {
              l.child = n3;
              break;
            }
            e = n3.sibling, n3.sibling = t, t = n3, n3 = e;
          }
          Gc(l, true, t, null, u, a);
          break;
        case "together":
          Gc(l, false, null, null, void 0, a);
          break;
        default:
          l.memoizedState = null;
      }
      return l.child;
    }
    function et2(e, l, t) {
      if (e !== null && (l.dependencies = e.dependencies), zt2 |= l.lanes, (t & l.childLanes) === 0) if (e !== null) {
        if (ba(e, l, t, false), (t & l.childLanes) === 0) return null;
      } else return null;
      if (e !== null && l.child !== e.child) throw Error(d(153));
      if (l.child !== null) {
        for (e = l.child, t = kl(e, e.pendingProps), l.child = t, t.return = l; e.sibling !== null; ) e = e.sibling, t = t.sibling = kl(e, e.pendingProps), t.return = l;
        t.sibling = null;
      }
      return l.child;
    }
    function Xc(e, l) {
      return (e.lanes & l) !== 0 ? true : (e = e.dependencies, !!(e !== null && fu(e)));
    }
    function gh(e, l, t) {
      switch (l.tag) {
        case 3:
          La(l, l.stateNode.containerInfo), vt2(l, Ce, e.memoizedState.cache), Lt2();
          break;
        case 27:
        case 5:
          Cl(l);
          break;
        case 4:
          La(l, l.stateNode.containerInfo);
          break;
        case 10:
          vt2(l, l.type, l.memoizedProps.value);
          break;
        case 31:
          if (l.memoizedState !== null) return l.flags |= 128, rc(l), null;
          break;
        case 13:
          var a = l.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (yt2(l), l.flags |= 128, null) : (t & l.child.childLanes) !== 0 ? nd(e, l, t) : (yt2(l), e = et2(e, l, t), e !== null ? e.sibling : null);
          yt2(l);
          break;
        case 19:
          var n3 = (e.flags & 128) !== 0;
          if (a = (t & l.childLanes) !== 0, a || (ba(e, l, t, false), a = (t & l.childLanes) !== 0), n3) {
            if (a) return id(e, l, t);
            l.flags |= 128;
          }
          if (n3 = l.memoizedState, n3 !== null && (n3.rendering = null, n3.tail = null, n3.lastEffect = null), W(Te, Te.current), a) break;
          return null;
        case 22:
          return l.lanes = 0, Io(e, l, t, l.pendingProps);
        case 24:
          vt2(l, Ce, e.memoizedState.cache);
      }
      return et2(e, l, t);
    }
    function cd(e, l, t) {
      if (e !== null) if (e.memoizedProps !== l.pendingProps) _e = true;
      else {
        if (!Xc(e, t) && (l.flags & 128) === 0) return _e = false, gh(e, l, t);
        _e = (e.flags & 131072) !== 0;
      }
      else _e = false, $ && (l.flags & 1048576) !== 0 && Rf(l, cn, l.index);
      switch (l.lanes = 0, l.tag) {
        case 16:
          e: {
            var a = l.pendingProps;
            if (e = Kt2(l.elementType), l.type = e, typeof e == "function") Ji(e) ? (a = Ft2(e, a), l.tag = 1, l = td(null, l, e, a, t)) : (l.tag = 0, l = qc(null, l, e, a, t));
            else {
              if (e != null) {
                var n3 = e.$$typeof;
                if (n3 === Ge) {
                  l.tag = 11, l = $o(null, l, e, a, t);
                  break e;
                } else if (n3 === be) {
                  l.tag = 14, l = Wo(null, l, e, a, t);
                  break e;
                }
              }
              throw l = Ql(e) || e, Error(d(306, l, ""));
            }
          }
          return l;
        case 0:
          return qc(e, l, l.type, l.pendingProps, t);
        case 1:
          return a = l.type, n3 = Ft2(a, l.pendingProps), td(e, l, a, n3, t);
        case 3:
          e: {
            if (La(l, l.stateNode.containerInfo), e === null) throw Error(d(387));
            a = l.pendingProps;
            var u = l.memoizedState;
            n3 = u.element, cc(e, l), xn(l, a, null, t);
            var c = l.memoizedState;
            if (a = c.cache, vt2(l, Ce, a), a !== u.cache && lc(l, [Ce], t, true), hn(), a = c.element, u.isDehydrated) if (u = { element: a, isDehydrated: false, cache: c.cache }, l.updateQueue.baseState = u, l.memoizedState = u, l.flags & 256) {
              l = ad(e, l, a, t);
              break e;
            } else if (a !== n3) {
              n3 = Nl(Error(d(424)), l), sn(n3), l = ad(e, l, a, t);
              break e;
            } else {
              switch (e = l.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (ve = El(e.firstChild), Qe = l, $ = true, ht2 = null, Al = true, t = Ff(l, null, a, t), l.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
            }
            else {
              if (Lt2(), a === n3) {
                l = et2(e, l, t);
                break e;
              }
              Ze(e, l, a, t);
            }
            l = l.child;
          }
          return l;
        case 26:
          return Eu(e, l), e === null ? (t = br(l.type, null, l.pendingProps, null)) ? l.memoizedState = t : $ || (t = l.type, e = l.pendingProps, a = Vu(G.current).createElement(t), a[Xe] = l, a[ll] = e, Ve(a, t, e), Re(a), l.stateNode = a) : l.memoizedState = br(l.type, e.memoizedProps, l.pendingProps, e.memoizedState), null;
        case 27:
          return Cl(l), e === null && $ && (a = l.stateNode = xr(l.type, l.pendingProps, G.current), Qe = l, Al = true, n3 = ve, Ot2(l.type) ? (ys = n3, ve = El(a.firstChild)) : ve = n3), Ze(e, l, l.pendingProps.children, t), Eu(e, l), e === null && (l.flags |= 4194304), l.child;
        case 5:
          return e === null && $ && ((n3 = a = ve) && (a = Kh(a, l.type, l.pendingProps, Al), a !== null ? (l.stateNode = a, Qe = l, ve = El(a.firstChild), Al = false, n3 = true) : n3 = false), n3 || xt2(l)), Cl(l), n3 = l.type, u = l.pendingProps, c = e !== null ? e.memoizedProps : null, a = u.children, xs(n3, u) ? a = null : c !== null && xs(n3, c) && (l.flags |= 32), l.memoizedState !== null && (n3 = hc(e, l, sh, null, null, t), wn._currentValue = n3), Eu(e, l), Ze(e, l, a, t), l.child;
        case 6:
          return e === null && $ && ((e = t = ve) && (t = kh(t, l.pendingProps, Al), t !== null ? (l.stateNode = t, Qe = l, ve = null, e = true) : e = false), e || xt2(l)), null;
        case 13:
          return nd(e, l, t);
        case 4:
          return La(l, l.stateNode.containerInfo), a = l.pendingProps, e === null ? l.child = $t2(l, null, a, t) : Ze(e, l, a, t), l.child;
        case 11:
          return $o(e, l, l.type, l.pendingProps, t);
        case 7:
          return Ze(e, l, l.pendingProps, t), l.child;
        case 8:
          return Ze(e, l, l.pendingProps.children, t), l.child;
        case 12:
          return Ze(e, l, l.pendingProps.children, t), l.child;
        case 10:
          return a = l.pendingProps, vt2(l, l.type, a.value), Ze(e, l, a.children, t), l.child;
        case 9:
          return n3 = l.type._context, a = l.pendingProps.children, Vt2(l), n3 = Le(n3), a = a(n3), l.flags |= 1, Ze(e, l, a, t), l.child;
        case 14:
          return Wo(e, l, l.type, l.pendingProps, t);
        case 15:
          return Fo(e, l, l.type, l.pendingProps, t);
        case 19:
          return id(e, l, t);
        case 31:
          return vh(e, l, t);
        case 22:
          return Io(e, l, t, l.pendingProps);
        case 24:
          return Vt2(l), a = Le(Ce), e === null ? (n3 = nc(), n3 === null && (n3 = ce, u = tc(), n3.pooledCache = u, u.refCount++, u !== null && (n3.pooledCacheLanes |= t), n3 = u), l.memoizedState = { parent: a, cache: n3 }, ic(l), vt2(l, Ce, n3)) : ((e.lanes & t) !== 0 && (cc(e, l), xn(l, null, null, t), hn()), n3 = e.memoizedState, u = l.memoizedState, n3.parent !== a ? (n3 = { parent: a, cache: a }, l.memoizedState = n3, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = n3), vt2(l, Ce, a)) : (a = u.cache, vt2(l, Ce, a), a !== n3.cache && lc(l, [Ce], t, true))), Ze(e, l, l.pendingProps.children, t), l.child;
        case 29:
          throw l.pendingProps;
      }
      throw Error(d(156, l.tag));
    }
    function lt2(e) {
      e.flags |= 4;
    }
    function Qc(e, l, t, a, n3) {
      if ((l = (e.mode & 32) !== 0) && (l = false), l) {
        if (e.flags |= 16777216, (n3 & 335544128) === n3) if (e.stateNode.complete) e.flags |= 8192;
        else if (qd()) e.flags |= 8192;
        else throw kt2 = mu, uc;
      } else e.flags &= -16777217;
    }
    function sd(e, l) {
      if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0) e.flags &= -16777217;
      else if (e.flags |= 16777216, !Nr(l)) if (qd()) e.flags |= 8192;
      else throw kt2 = mu, uc;
    }
    function Mu(e, l) {
      l !== null && (e.flags |= 4), e.flags & 16384 && (l = e.tag !== 22 ? Ys() : 536870912, e.lanes |= l, Ma |= l);
    }
    function jn(e, l) {
      if (!$) switch (e.tailMode) {
        case "hidden":
          l = e.tail;
          for (var t = null; l !== null; ) l.alternate !== null && (t = l), l = l.sibling;
          t === null ? e.tail = null : t.sibling = null;
          break;
        case "collapsed":
          t = e.tail;
          for (var a = null; t !== null; ) t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
    }
    function ge(e) {
      var l = e.alternate !== null && e.alternate.child === e.child, t = 0, a = 0;
      if (l) for (var n3 = e.child; n3 !== null; ) t |= n3.lanes | n3.childLanes, a |= n3.subtreeFlags & 65011712, a |= n3.flags & 65011712, n3.return = e, n3 = n3.sibling;
      else for (n3 = e.child; n3 !== null; ) t |= n3.lanes | n3.childLanes, a |= n3.subtreeFlags, a |= n3.flags, n3.return = e, n3 = n3.sibling;
      return e.subtreeFlags |= a, e.childLanes = t, l;
    }
    function bh(e, l, t) {
      var a = l.pendingProps;
      switch (Wi(l), l.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return ge(l), null;
        case 1:
          return ge(l), null;
        case 3:
          return t = l.stateNode, a = null, e !== null && (a = e.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Fl(Ce), Ll(), t.pendingContext && (t.context = t.pendingContext, t.pendingContext = null), (e === null || e.child === null) && (ga(l) ? lt2(l) : e === null || e.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Ii())), ge(l), null;
        case 26:
          var n3 = l.type, u = l.memoizedState;
          return e === null ? (lt2(l), u !== null ? (ge(l), sd(l, u)) : (ge(l), Qc(l, n3, null, a, t))) : u ? u !== e.memoizedState ? (lt2(l), ge(l), sd(l, u)) : (ge(l), l.flags &= -16777217) : (e = e.memoizedProps, e !== a && lt2(l), ge(l), Qc(l, n3, e, a, t)), null;
        case 27:
          if (fl(l), t = G.current, n3 = l.type, e !== null && l.stateNode != null) e.memoizedProps !== a && lt2(l);
          else {
            if (!a) {
              if (l.stateNode === null) throw Error(d(166));
              return ge(l), null;
            }
            e = ze.current, ga(l) ? Gf(l) : (e = xr(n3, a, t), l.stateNode = e, lt2(l));
          }
          return ge(l), null;
        case 5:
          if (fl(l), n3 = l.type, e !== null && l.stateNode != null) e.memoizedProps !== a && lt2(l);
          else {
            if (!a) {
              if (l.stateNode === null) throw Error(d(166));
              return ge(l), null;
            }
            if (u = ze.current, ga(l)) Gf(l);
            else {
              var c = Vu(G.current);
              switch (u) {
                case 1:
                  u = c.createElementNS("http://www.w3.org/2000/svg", n3);
                  break;
                case 2:
                  u = c.createElementNS("http://www.w3.org/1998/Math/MathML", n3);
                  break;
                default:
                  switch (n3) {
                    case "svg":
                      u = c.createElementNS("http://www.w3.org/2000/svg", n3);
                      break;
                    case "math":
                      u = c.createElementNS("http://www.w3.org/1998/Math/MathML", n3);
                      break;
                    case "script":
                      u = c.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                      break;
                    case "select":
                      u = typeof a.is == "string" ? c.createElement("select", { is: a.is }) : c.createElement("select"), a.multiple ? u.multiple = true : a.size && (u.size = a.size);
                      break;
                    default:
                      u = typeof a.is == "string" ? c.createElement(n3, { is: a.is }) : c.createElement(n3);
                  }
              }
              u[Xe] = l, u[ll] = a;
              e: for (c = l.child; c !== null; ) {
                if (c.tag === 5 || c.tag === 6) u.appendChild(c.stateNode);
                else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                  c.child.return = c, c = c.child;
                  continue;
                }
                if (c === l) break e;
                for (; c.sibling === null; ) {
                  if (c.return === null || c.return === l) break e;
                  c = c.return;
                }
                c.sibling.return = c.return, c = c.sibling;
              }
              l.stateNode = u;
              e: switch (Ve(u, n3, a), n3) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break e;
                case "img":
                  a = true;
                  break e;
                default:
                  a = false;
              }
              a && lt2(l);
            }
          }
          return ge(l), Qc(l, l.type, e === null ? null : e.memoizedProps, l.pendingProps, t), null;
        case 6:
          if (e && l.stateNode != null) e.memoizedProps !== a && lt2(l);
          else {
            if (typeof a != "string" && l.stateNode === null) throw Error(d(166));
            if (e = G.current, ga(l)) {
              if (e = l.stateNode, t = l.memoizedProps, a = null, n3 = Qe, n3 !== null) switch (n3.tag) {
                case 27:
                case 5:
                  a = n3.memoizedProps;
              }
              e[Xe] = l, e = !!(e.nodeValue === t || a !== null && a.suppressHydrationWarning === true || nr(e.nodeValue, t)), e || xt2(l, true);
            } else e = Vu(e).createTextNode(a), e[Xe] = l, l.stateNode = e;
          }
          return ge(l), null;
        case 31:
          if (t = l.memoizedState, e === null || e.memoizedState !== null) {
            if (a = ga(l), t !== null) {
              if (e === null) {
                if (!a) throw Error(d(318));
                if (e = l.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(d(557));
                e[Xe] = l;
              } else Lt2(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
              ge(l), e = false;
            } else t = Ii(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = t), e = true;
            if (!e) return l.flags & 256 ? (ml(l), l) : (ml(l), null);
            if ((l.flags & 128) !== 0) throw Error(d(558));
          }
          return ge(l), null;
        case 13:
          if (a = l.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (n3 = ga(l), a !== null && a.dehydrated !== null) {
              if (e === null) {
                if (!n3) throw Error(d(318));
                if (n3 = l.memoizedState, n3 = n3 !== null ? n3.dehydrated : null, !n3) throw Error(d(317));
                n3[Xe] = l;
              } else Lt2(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
              ge(l), n3 = false;
            } else n3 = Ii(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n3), n3 = true;
            if (!n3) return l.flags & 256 ? (ml(l), l) : (ml(l), null);
          }
          return ml(l), (l.flags & 128) !== 0 ? (l.lanes = t, l) : (t = a !== null, e = e !== null && e.memoizedState !== null, t && (a = l.child, n3 = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n3 = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n3 && (a.flags |= 2048)), t !== e && t && (l.child.flags |= 8192), Mu(l, l.updateQueue), ge(l), null);
        case 4:
          return Ll(), e === null && os(l.stateNode.containerInfo), ge(l), null;
        case 10:
          return Fl(l.type), ge(l), null;
        case 19:
          if (xe(Te), a = l.memoizedState, a === null) return ge(l), null;
          if (n3 = (l.flags & 128) !== 0, u = a.rendering, u === null) if (n3) jn(a, false);
          else {
            if (Ae !== 0 || e !== null && (e.flags & 128) !== 0) for (e = l.child; e !== null; ) {
              if (u = gu(e), u !== null) {
                for (l.flags |= 128, jn(a, false), e = u.updateQueue, l.updateQueue = e, Mu(l, e), l.subtreeFlags = 0, e = t, t = l.child; t !== null; ) wf(t, e), t = t.sibling;
                return W(Te, Te.current & 1 | 2), $ && $l(l, a.treeForkCount), l.child;
              }
              e = e.sibling;
            }
            a.tail !== null && We() > wu && (l.flags |= 128, n3 = true, jn(a, false), l.lanes = 4194304);
          }
          else {
            if (!n3) if (e = gu(u), e !== null) {
              if (l.flags |= 128, n3 = true, e = e.updateQueue, l.updateQueue = e, Mu(l, e), jn(a, true), a.tail === null && a.tailMode === "hidden" && !u.alternate && !$) return ge(l), null;
            } else 2 * We() - a.renderingStartTime > wu && t !== 536870912 && (l.flags |= 128, n3 = true, jn(a, false), l.lanes = 4194304);
            a.isBackwards ? (u.sibling = l.child, l.child = u) : (e = a.last, e !== null ? e.sibling = u : l.child = u, a.last = u);
          }
          return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = We(), e.sibling = null, t = Te.current, W(Te, n3 ? t & 1 | 2 : t & 1), $ && $l(l, a.treeForkCount), e) : (ge(l), null);
        case 22:
        case 23:
          return ml(l), dc(), a = l.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (t & 536870912) !== 0 && (l.flags & 128) === 0 && (ge(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : ge(l), t = l.updateQueue, t !== null && Mu(l, t.retryQueue), t = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== t && (l.flags |= 2048), e !== null && xe(Jt2), null;
        case 24:
          return t = null, e !== null && (t = e.memoizedState.cache), l.memoizedState.cache !== t && (l.flags |= 2048), Fl(Ce), ge(l), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(d(156, l.tag));
    }
    function ph(e, l) {
      switch (Wi(l), l.tag) {
        case 1:
          return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
        case 3:
          return Fl(Ce), Ll(), e = l.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (l.flags = e & -65537 | 128, l) : null;
        case 26:
        case 27:
        case 5:
          return fl(l), null;
        case 31:
          if (l.memoizedState !== null) {
            if (ml(l), l.alternate === null) throw Error(d(340));
            Lt2();
          }
          return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
        case 13:
          if (ml(l), e = l.memoizedState, e !== null && e.dehydrated !== null) {
            if (l.alternate === null) throw Error(d(340));
            Lt2();
          }
          return e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
        case 19:
          return xe(Te), null;
        case 4:
          return Ll(), null;
        case 10:
          return Fl(l.type), null;
        case 22:
        case 23:
          return ml(l), dc(), e !== null && xe(Jt2), e = l.flags, e & 65536 ? (l.flags = e & -65537 | 128, l) : null;
        case 24:
          return Fl(Ce), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function fd(e, l) {
      switch (Wi(l), l.tag) {
        case 3:
          Fl(Ce), Ll();
          break;
        case 26:
        case 27:
        case 5:
          fl(l);
          break;
        case 4:
          Ll();
          break;
        case 31:
          l.memoizedState !== null && ml(l);
          break;
        case 13:
          ml(l);
          break;
        case 19:
          xe(Te);
          break;
        case 10:
          Fl(l.type);
          break;
        case 22:
        case 23:
          ml(l), dc(), e !== null && xe(Jt2);
          break;
        case 24:
          Fl(Ce);
      }
    }
    function Sn(e, l) {
      try {
        var t = l.updateQueue, a = t !== null ? t.lastEffect : null;
        if (a !== null) {
          var n3 = a.next;
          t = n3;
          do {
            if ((t.tag & e) === e) {
              a = void 0;
              var u = t.create, c = t.inst;
              a = u(), c.destroy = a;
            }
            t = t.next;
          } while (t !== n3);
        }
      } catch (s) {
        te2(l, l.return, s);
      }
    }
    function St2(e, l, t) {
      try {
        var a = l.updateQueue, n3 = a !== null ? a.lastEffect : null;
        if (n3 !== null) {
          var u = n3.next;
          a = u;
          do {
            if ((a.tag & e) === e) {
              var c = a.inst, s = c.destroy;
              if (s !== void 0) {
                c.destroy = void 0, n3 = l;
                var f2 = t, v = s;
                try {
                  v();
                } catch (y2) {
                  te2(n3, f2, y2);
                }
              }
            }
            a = a.next;
          } while (a !== u);
        }
      } catch (y2) {
        te2(l, l.return, y2);
      }
    }
    function od(e) {
      var l = e.updateQueue;
      if (l !== null) {
        var t = e.stateNode;
        try {
          Pf(l, t);
        } catch (a) {
          te2(e, e.return, a);
        }
      }
    }
    function dd(e, l, t) {
      t.props = Ft2(e.type, e.memoizedProps), t.state = e.memoizedState;
      try {
        t.componentWillUnmount();
      } catch (a) {
        te2(e, l, a);
      }
    }
    function Nn(e, l) {
      try {
        var t = e.ref;
        if (t !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var a = e.stateNode;
              break;
            case 30:
              a = e.stateNode;
              break;
            default:
              a = e.stateNode;
          }
          typeof t == "function" ? e.refCleanup = t(a) : t.current = a;
        }
      } catch (n3) {
        te2(e, l, n3);
      }
    }
    function Gl(e, l) {
      var t = e.ref, a = e.refCleanup;
      if (t !== null) if (typeof a == "function") try {
        a();
      } catch (n3) {
        te2(e, l, n3);
      } finally {
        e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
      }
      else if (typeof t == "function") try {
        t(null);
      } catch (n3) {
        te2(e, l, n3);
      }
      else t.current = null;
    }
    function rd(e) {
      var l = e.type, t = e.memoizedProps, a = e.stateNode;
      try {
        e: switch (l) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            t.autoFocus && a.focus();
            break e;
          case "img":
            t.src ? a.src = t.src : t.srcSet && (a.srcset = t.srcSet);
        }
      } catch (n3) {
        te2(e, e.return, n3);
      }
    }
    function Lc(e, l, t) {
      try {
        var a = e.stateNode;
        Xh(a, e.type, t, l), a[ll] = l;
      } catch (n3) {
        te2(e, e.return, n3);
      }
    }
    function md(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ot2(e.type) || e.tag === 4;
    }
    function Zc(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || md(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Ot2(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Vc(e, l, t) {
      var a = e.tag;
      if (a === 5 || a === 6) e = e.stateNode, l ? (t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t).insertBefore(e, l) : (l = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.appendChild(e), t = t._reactRootContainer, t != null || l.onclick !== null || (l.onclick = Jl));
      else if (a !== 4 && (a === 27 && Ot2(e.type) && (t = e.stateNode, l = null), e = e.child, e !== null)) for (Vc(e, l, t), e = e.sibling; e !== null; ) Vc(e, l, t), e = e.sibling;
    }
    function Cu(e, l, t) {
      var a = e.tag;
      if (a === 5 || a === 6) e = e.stateNode, l ? t.insertBefore(e, l) : t.appendChild(e);
      else if (a !== 4 && (a === 27 && Ot2(e.type) && (t = e.stateNode), e = e.child, e !== null)) for (Cu(e, l, t), e = e.sibling; e !== null; ) Cu(e, l, t), e = e.sibling;
    }
    function hd(e) {
      var l = e.stateNode, t = e.memoizedProps;
      try {
        for (var a = e.type, n3 = l.attributes; n3.length; ) l.removeAttributeNode(n3[0]);
        Ve(l, a, t), l[Xe] = e, l[ll] = t;
      } catch (u) {
        te2(e, e.return, u);
      }
    }
    var tt = false, qe = false, Jc = false, xd = typeof WeakSet == "function" ? WeakSet : Set, Ye = null;
    function yh(e, l) {
      if (e = e.containerInfo, ms = Iu, e = Af(e), Yi(e)) {
        if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
        else e: {
          t = (t = e.ownerDocument) && t.defaultView || window;
          var a = t.getSelection && t.getSelection();
          if (a && a.rangeCount !== 0) {
            t = a.anchorNode;
            var n3 = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              t.nodeType, u.nodeType;
            } catch {
              t = null;
              break e;
            }
            var c = 0, s = -1, f2 = -1, v = 0, y2 = 0, N = e, g = null;
            l: for (; ; ) {
              for (var b; N !== t || n3 !== 0 && N.nodeType !== 3 || (s = c + n3), N !== u || a !== 0 && N.nodeType !== 3 || (f2 = c + a), N.nodeType === 3 && (c += N.nodeValue.length), (b = N.firstChild) !== null; ) g = N, N = b;
              for (; ; ) {
                if (N === e) break l;
                if (g === t && ++v === n3 && (s = c), g === u && ++y2 === a && (f2 = c), (b = N.nextSibling) !== null) break;
                N = g, g = N.parentNode;
              }
              N = b;
            }
            t = s === -1 || f2 === -1 ? null : { start: s, end: f2 };
          } else t = null;
        }
        t = t || { start: 0, end: 0 };
      } else t = null;
      for (hs = { focusedElem: e, selectionRange: t }, Iu = false, Ye = l; Ye !== null; ) if (l = Ye, e = l.child, (l.subtreeFlags & 1028) !== 0 && e !== null) e.return = l, Ye = e;
      else for (; Ye !== null; ) {
        switch (l = Ye, u = l.alternate, e = l.flags, l.tag) {
          case 0:
            if ((e & 4) !== 0 && (e = l.updateQueue, e = e !== null ? e.events : null, e !== null)) for (t = 0; t < e.length; t++) n3 = e[t], n3.ref.impl = n3.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((e & 1024) !== 0 && u !== null) {
              e = void 0, t = l, n3 = u.memoizedProps, u = u.memoizedState, a = t.stateNode;
              try {
                var E = Ft2(t.type, n3);
                e = a.getSnapshotBeforeUpdate(E, u), a.__reactInternalSnapshotBeforeUpdate = e;
              } catch (q) {
                te2(t, t.return, q);
              }
            }
            break;
          case 3:
            if ((e & 1024) !== 0) {
              if (e = l.stateNode.containerInfo, t = e.nodeType, t === 9) gs(e);
              else if (t === 1) switch (e.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  gs(e);
                  break;
                default:
                  e.textContent = "";
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if ((e & 1024) !== 0) throw Error(d(163));
        }
        if (e = l.sibling, e !== null) {
          e.return = l.return, Ye = e;
          break;
        }
        Ye = l.return;
      }
    }
    function vd(e, l, t) {
      var a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          nt2(e, t), a & 4 && Sn(5, t);
          break;
        case 1:
          if (nt2(e, t), a & 4) if (e = t.stateNode, l === null) try {
            e.componentDidMount();
          } catch (c) {
            te2(t, t.return, c);
          }
          else {
            var n3 = Ft2(t.type, l.memoizedProps);
            l = l.memoizedState;
            try {
              e.componentDidUpdate(n3, l, e.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              te2(t, t.return, c);
            }
          }
          a & 64 && od(t), a & 512 && Nn(t, t.return);
          break;
        case 3:
          if (nt2(e, t), a & 64 && (e = t.updateQueue, e !== null)) {
            if (l = null, t.child !== null) switch (t.child.tag) {
              case 27:
              case 5:
                l = t.child.stateNode;
                break;
              case 1:
                l = t.child.stateNode;
            }
            try {
              Pf(e, l);
            } catch (c) {
              te2(t, t.return, c);
            }
          }
          break;
        case 27:
          l === null && a & 4 && hd(t);
        case 26:
        case 5:
          nt2(e, t), l === null && a & 4 && rd(t), a & 512 && Nn(t, t.return);
          break;
        case 12:
          nt2(e, t);
          break;
        case 31:
          nt2(e, t), a & 4 && pd(e, t);
          break;
        case 13:
          nt2(e, t), a & 4 && yd(e, t), a & 64 && (e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null && (t = Oh.bind(null, t), $h(e, t))));
          break;
        case 22:
          if (a = t.memoizedState !== null || tt, !a) {
            l = l !== null && l.memoizedState !== null || qe, n3 = tt;
            var u = qe;
            tt = a, (qe = l) && !u ? ut2(e, t, (t.subtreeFlags & 8772) !== 0) : nt2(e, t), tt = n3, qe = u;
          }
          break;
        case 30:
          break;
        default:
          nt2(e, t);
      }
    }
    function gd(e) {
      var l = e.alternate;
      l !== null && (e.alternate = null, gd(l)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (l = e.stateNode, l !== null && Si(l)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    var ye = null, al = false;
    function at2(e, l, t) {
      for (t = t.child; t !== null; ) bd(e, l, t), t = t.sibling;
    }
    function bd(e, l, t) {
      if (Fe && typeof Fe.onCommitFiberUnmount == "function") try {
        Fe.onCommitFiberUnmount(Bt2, t);
      } catch {
      }
      switch (t.tag) {
        case 26:
          qe || Gl(t, l), at2(e, l, t), t.memoizedState ? t.memoizedState.count-- : t.stateNode && (t = t.stateNode, t.parentNode.removeChild(t));
          break;
        case 27:
          qe || Gl(t, l);
          var a = ye, n3 = al;
          Ot2(t.type) && (ye = t.stateNode, al = false), at2(e, l, t), Un(t.stateNode), ye = a, al = n3;
          break;
        case 5:
          qe || Gl(t, l);
        case 6:
          if (a = ye, n3 = al, ye = null, at2(e, l, t), ye = a, al = n3, ye !== null) if (al) try {
            (ye.nodeType === 9 ? ye.body : ye.nodeName === "HTML" ? ye.ownerDocument.body : ye).removeChild(t.stateNode);
          } catch (u) {
            te2(t, l, u);
          }
          else try {
            ye.removeChild(t.stateNode);
          } catch (u) {
            te2(t, l, u);
          }
          break;
        case 18:
          ye !== null && (al ? (e = ye, or(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.stateNode), Ra(e)) : or(ye, t.stateNode));
          break;
        case 4:
          a = ye, n3 = al, ye = t.stateNode.containerInfo, al = true, at2(e, l, t), ye = a, al = n3;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          St2(2, t, l), qe || St2(4, t, l), at2(e, l, t);
          break;
        case 1:
          qe || (Gl(t, l), a = t.stateNode, typeof a.componentWillUnmount == "function" && dd(t, l, a)), at2(e, l, t);
          break;
        case 21:
          at2(e, l, t);
          break;
        case 22:
          qe = (a = qe) || t.memoizedState !== null, at2(e, l, t), qe = a;
          break;
        default:
          at2(e, l, t);
      }
    }
    function pd(e, l) {
      if (l.memoizedState === null && (e = l.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          Ra(e);
        } catch (t) {
          te2(l, l.return, t);
        }
      }
    }
    function yd(e, l) {
      if (l.memoizedState === null && (e = l.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
        Ra(e);
      } catch (t) {
        te2(l, l.return, t);
      }
    }
    function jh(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var l = e.stateNode;
          return l === null && (l = e.stateNode = new xd()), l;
        case 22:
          return e = e.stateNode, l = e._retryCache, l === null && (l = e._retryCache = new xd()), l;
        default:
          throw Error(d(435, e.tag));
      }
    }
    function Uu(e, l) {
      var t = jh(e);
      l.forEach(function(a) {
        if (!t.has(a)) {
          t.add(a);
          var n3 = Mh.bind(null, e, a);
          a.then(n3, n3);
        }
      });
    }
    function nl(e, l) {
      var t = l.deletions;
      if (t !== null) for (var a = 0; a < t.length; a++) {
        var n3 = t[a], u = e, c = l, s = c;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (Ot2(s.type)) {
                ye = s.stateNode, al = false;
                break e;
              }
              break;
            case 5:
              ye = s.stateNode, al = false;
              break e;
            case 3:
            case 4:
              ye = s.stateNode.containerInfo, al = true;
              break e;
          }
          s = s.return;
        }
        if (ye === null) throw Error(d(160));
        bd(u, c, n3), ye = null, al = false, u = n3.alternate, u !== null && (u.return = null), n3.return = null;
      }
      if (l.subtreeFlags & 13886) for (l = l.child; l !== null; ) jd(l, e), l = l.sibling;
    }
    var _l = null;
    function jd(e, l) {
      var t = e.alternate, a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          nl(l, e), ul(e), a & 4 && (St2(3, e, e.return), Sn(3, e), St2(5, e, e.return));
          break;
        case 1:
          nl(l, e), ul(e), a & 512 && (qe || t === null || Gl(t, t.return)), a & 64 && tt && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (t = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = t === null ? a : t.concat(a))));
          break;
        case 26:
          var n3 = _l;
          if (nl(l, e), ul(e), a & 512 && (qe || t === null || Gl(t, t.return)), a & 4) {
            var u = t !== null ? t.memoizedState : null;
            if (a = e.memoizedState, t === null) if (a === null) if (e.stateNode === null) {
              e: {
                a = e.type, t = e.memoizedProps, n3 = n3.ownerDocument || n3;
                l: switch (a) {
                  case "title":
                    u = n3.getElementsByTagName("title")[0], (!u || u[$a] || u[Xe] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n3.createElement(a), n3.head.insertBefore(u, n3.querySelector("head > title"))), Ve(u, a, t), u[Xe] = e, Re(u), a = u;
                    break e;
                  case "link":
                    var c = jr("link", "href", n3).get(a + (t.href || ""));
                    if (c) {
                      for (var s = 0; s < c.length; s++) if (u = c[s], u.getAttribute("href") === (t.href == null || t.href === "" ? null : t.href) && u.getAttribute("rel") === (t.rel == null ? null : t.rel) && u.getAttribute("title") === (t.title == null ? null : t.title) && u.getAttribute("crossorigin") === (t.crossOrigin == null ? null : t.crossOrigin)) {
                        c.splice(s, 1);
                        break l;
                      }
                    }
                    u = n3.createElement(a), Ve(u, a, t), n3.head.appendChild(u);
                    break;
                  case "meta":
                    if (c = jr("meta", "content", n3).get(a + (t.content || ""))) {
                      for (s = 0; s < c.length; s++) if (u = c[s], u.getAttribute("content") === (t.content == null ? null : "" + t.content) && u.getAttribute("name") === (t.name == null ? null : t.name) && u.getAttribute("property") === (t.property == null ? null : t.property) && u.getAttribute("http-equiv") === (t.httpEquiv == null ? null : t.httpEquiv) && u.getAttribute("charset") === (t.charSet == null ? null : t.charSet)) {
                        c.splice(s, 1);
                        break l;
                      }
                    }
                    u = n3.createElement(a), Ve(u, a, t), n3.head.appendChild(u);
                    break;
                  default:
                    throw Error(d(468, a));
                }
                u[Xe] = e, Re(u), a = u;
              }
              e.stateNode = a;
            } else Sr(n3, e.type, e.stateNode);
            else e.stateNode = yr(n3, a, e.memoizedProps);
            else u !== a ? (u === null ? t.stateNode !== null && (t = t.stateNode, t.parentNode.removeChild(t)) : u.count--, a === null ? Sr(n3, e.type, e.stateNode) : yr(n3, a, e.memoizedProps)) : a === null && e.stateNode !== null && Lc(e, e.memoizedProps, t.memoizedProps);
          }
          break;
        case 27:
          nl(l, e), ul(e), a & 512 && (qe || t === null || Gl(t, t.return)), t !== null && a & 4 && Lc(e, e.memoizedProps, t.memoizedProps);
          break;
        case 5:
          if (nl(l, e), ul(e), a & 512 && (qe || t === null || Gl(t, t.return)), e.flags & 32) {
            n3 = e.stateNode;
            try {
              ca(n3, "");
            } catch (E) {
              te2(e, e.return, E);
            }
          }
          a & 4 && e.stateNode != null && (n3 = e.memoizedProps, Lc(e, n3, t !== null ? t.memoizedProps : n3)), a & 1024 && (Jc = true);
          break;
        case 6:
          if (nl(l, e), ul(e), a & 4) {
            if (e.stateNode === null) throw Error(d(162));
            a = e.memoizedProps, t = e.stateNode;
            try {
              t.nodeValue = a;
            } catch (E) {
              te2(e, e.return, E);
            }
          }
          break;
        case 3:
          if (ku = null, n3 = _l, _l = Ju(l.containerInfo), nl(l, e), _l = n3, ul(e), a & 4 && t !== null && t.memoizedState.isDehydrated) try {
            Ra(l.containerInfo);
          } catch (E) {
            te2(e, e.return, E);
          }
          Jc && (Jc = false, Sd(e));
          break;
        case 4:
          a = _l, _l = Ju(e.stateNode.containerInfo), nl(l, e), ul(e), _l = a;
          break;
        case 12:
          nl(l, e), ul(e);
          break;
        case 31:
          nl(l, e), ul(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Uu(e, a)));
          break;
        case 13:
          nl(l, e), ul(e), e.child.flags & 8192 && e.memoizedState !== null != (t !== null && t.memoizedState !== null) && (qu = We()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Uu(e, a)));
          break;
        case 22:
          n3 = e.memoizedState !== null;
          var f2 = t !== null && t.memoizedState !== null, v = tt, y2 = qe;
          if (tt = v || n3, qe = y2 || f2, nl(l, e), qe = y2, tt = v, ul(e), a & 8192) e: for (l = e.stateNode, l._visibility = n3 ? l._visibility & -2 : l._visibility | 1, n3 && (t === null || f2 || tt || qe || It2(e)), t = null, l = e; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (t === null) {
                f2 = t = l;
                try {
                  if (u = f2.stateNode, n3) c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    s = f2.stateNode;
                    var N = f2.memoizedProps.style, g = N != null && N.hasOwnProperty("display") ? N.display : null;
                    s.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (E) {
                  te2(f2, f2.return, E);
                }
              }
            } else if (l.tag === 6) {
              if (t === null) {
                f2 = l;
                try {
                  f2.stateNode.nodeValue = n3 ? "" : f2.memoizedProps;
                } catch (E) {
                  te2(f2, f2.return, E);
                }
              }
            } else if (l.tag === 18) {
              if (t === null) {
                f2 = l;
                try {
                  var b = f2.stateNode;
                  n3 ? dr(b, true) : dr(f2.stateNode, false);
                } catch (E) {
                  te2(f2, f2.return, E);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === e) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === e) break e;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === e) break e;
              t === l && (t = null), l = l.return;
            }
            t === l && (t = null), l.sibling.return = l.return, l = l.sibling;
          }
          a & 4 && (a = e.updateQueue, a !== null && (t = a.retryQueue, t !== null && (a.retryQueue = null, Uu(e, t))));
          break;
        case 19:
          nl(l, e), ul(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Uu(e, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          nl(l, e), ul(e);
      }
    }
    function ul(e) {
      var l = e.flags;
      if (l & 2) {
        try {
          for (var t, a = e.return; a !== null; ) {
            if (md(a)) {
              t = a;
              break;
            }
            a = a.return;
          }
          if (t == null) throw Error(d(160));
          switch (t.tag) {
            case 27:
              var n3 = t.stateNode, u = Zc(e);
              Cu(e, u, n3);
              break;
            case 5:
              var c = t.stateNode;
              t.flags & 32 && (ca(c, ""), t.flags &= -33);
              var s = Zc(e);
              Cu(e, s, c);
              break;
            case 3:
            case 4:
              var f2 = t.stateNode.containerInfo, v = Zc(e);
              Vc(e, v, f2);
              break;
            default:
              throw Error(d(161));
          }
        } catch (y2) {
          te2(e, e.return, y2);
        }
        e.flags &= -3;
      }
      l & 4096 && (e.flags &= -4097);
    }
    function Sd(e) {
      if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
        var l = e;
        Sd(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), e = e.sibling;
      }
    }
    function nt2(e, l) {
      if (l.subtreeFlags & 8772) for (l = l.child; l !== null; ) vd(e, l.alternate, l), l = l.sibling;
    }
    function It2(e) {
      for (e = e.child; e !== null; ) {
        var l = e;
        switch (l.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            St2(4, l, l.return), It2(l);
            break;
          case 1:
            Gl(l, l.return);
            var t = l.stateNode;
            typeof t.componentWillUnmount == "function" && dd(l, l.return, t), It2(l);
            break;
          case 27:
            Un(l.stateNode);
          case 26:
          case 5:
            Gl(l, l.return), It2(l);
            break;
          case 22:
            l.memoizedState === null && It2(l);
            break;
          case 30:
            It2(l);
            break;
          default:
            It2(l);
        }
        e = e.sibling;
      }
    }
    function ut2(e, l, t) {
      for (t = t && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
        var a = l.alternate, n3 = e, u = l, c = u.flags;
        switch (u.tag) {
          case 0:
          case 11:
          case 15:
            ut2(n3, u, t), Sn(4, u);
            break;
          case 1:
            if (ut2(n3, u, t), a = u, n3 = a.stateNode, typeof n3.componentDidMount == "function") try {
              n3.componentDidMount();
            } catch (v) {
              te2(a, a.return, v);
            }
            if (a = u, n3 = a.updateQueue, n3 !== null) {
              var s = a.stateNode;
              try {
                var f2 = n3.shared.hiddenCallbacks;
                if (f2 !== null) for (n3.shared.hiddenCallbacks = null, n3 = 0; n3 < f2.length; n3++) If(f2[n3], s);
              } catch (v) {
                te2(a, a.return, v);
              }
            }
            t && c & 64 && od(u), Nn(u, u.return);
            break;
          case 27:
            hd(u);
          case 26:
          case 5:
            ut2(n3, u, t), t && a === null && c & 4 && rd(u), Nn(u, u.return);
            break;
          case 12:
            ut2(n3, u, t);
            break;
          case 31:
            ut2(n3, u, t), t && c & 4 && pd(n3, u);
            break;
          case 13:
            ut2(n3, u, t), t && c & 4 && yd(n3, u);
            break;
          case 22:
            u.memoizedState === null && ut2(n3, u, t), Nn(u, u.return);
            break;
          case 30:
            break;
          default:
            ut2(n3, u, t);
        }
        l = l.sibling;
      }
    }
    function Kc(e, l) {
      var t = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), e = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), e !== t && (e != null && e.refCount++, t != null && fn(t));
    }
    function kc(e, l) {
      e = null, l.alternate !== null && (e = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== e && (l.refCount++, e != null && fn(e));
    }
    function ql(e, l, t, a) {
      if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) Nd(e, l, t, a), l = l.sibling;
    }
    function Nd(e, l, t, a) {
      var n3 = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ql(e, l, t, a), n3 & 2048 && Sn(9, l);
          break;
        case 1:
          ql(e, l, t, a);
          break;
        case 3:
          ql(e, l, t, a), n3 & 2048 && (e = null, l.alternate !== null && (e = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== e && (l.refCount++, e != null && fn(e)));
          break;
        case 12:
          if (n3 & 2048) {
            ql(e, l, t, a), e = l.stateNode;
            try {
              var u = l.memoizedProps, c = u.id, s = u.onPostCommit;
              typeof s == "function" && s(c, l.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
            } catch (f2) {
              te2(l, l.return, f2);
            }
          } else ql(e, l, t, a);
          break;
        case 31:
          ql(e, l, t, a);
          break;
        case 13:
          ql(e, l, t, a);
          break;
        case 23:
          break;
        case 22:
          u = l.stateNode, c = l.alternate, l.memoizedState !== null ? u._visibility & 2 ? ql(e, l, t, a) : zn(e, l) : u._visibility & 2 ? ql(e, l, t, a) : (u._visibility |= 2, Ta(e, l, t, a, (l.subtreeFlags & 10256) !== 0 || false)), n3 & 2048 && Kc(c, l);
          break;
        case 24:
          ql(e, l, t, a), n3 & 2048 && kc(l.alternate, l);
          break;
        default:
          ql(e, l, t, a);
      }
    }
    function Ta(e, l, t, a, n3) {
      for (n3 = n3 && ((l.subtreeFlags & 10256) !== 0 || false), l = l.child; l !== null; ) {
        var u = e, c = l, s = t, f2 = a, v = c.flags;
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            Ta(u, c, s, f2, n3), Sn(8, c);
            break;
          case 23:
            break;
          case 22:
            var y2 = c.stateNode;
            c.memoizedState !== null ? y2._visibility & 2 ? Ta(u, c, s, f2, n3) : zn(u, c) : (y2._visibility |= 2, Ta(u, c, s, f2, n3)), n3 && v & 2048 && Kc(c.alternate, c);
            break;
          case 24:
            Ta(u, c, s, f2, n3), n3 && v & 2048 && kc(c.alternate, c);
            break;
          default:
            Ta(u, c, s, f2, n3);
        }
        l = l.sibling;
      }
    }
    function zn(e, l) {
      if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) {
        var t = e, a = l, n3 = a.flags;
        switch (a.tag) {
          case 22:
            zn(t, a), n3 & 2048 && Kc(a.alternate, a);
            break;
          case 24:
            zn(t, a), n3 & 2048 && kc(a.alternate, a);
            break;
          default:
            zn(t, a);
        }
        l = l.sibling;
      }
    }
    var Dn = 8192;
    function Ea(e, l, t) {
      if (e.subtreeFlags & Dn) for (e = e.child; e !== null; ) zd(e, l, t), e = e.sibling;
    }
    function zd(e, l, t) {
      switch (e.tag) {
        case 26:
          Ea(e, l, t), e.flags & Dn && e.memoizedState !== null && c0(t, _l, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          Ea(e, l, t);
          break;
        case 3:
        case 4:
          var a = _l;
          _l = Ju(e.stateNode.containerInfo), Ea(e, l, t), _l = a;
          break;
        case 22:
          e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = Dn, Dn = 16777216, Ea(e, l, t), Dn = a) : Ea(e, l, t));
          break;
        default:
          Ea(e, l, t);
      }
    }
    function Dd(e) {
      var l = e.alternate;
      if (l !== null && (e = l.child, e !== null)) {
        l.child = null;
        do
          l = e.sibling, e.sibling = null, e = l;
        while (e !== null);
      }
    }
    function An(e) {
      var l = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (l !== null) for (var t = 0; t < l.length; t++) {
          var a = l[t];
          Ye = a, Td(a, e);
        }
        Dd(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Ad(e), e = e.sibling;
    }
    function Ad(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          An(e), e.flags & 2048 && St2(9, e, e.return);
          break;
        case 3:
          An(e);
          break;
        case 12:
          An(e);
          break;
        case 22:
          var l = e.stateNode;
          e.memoizedState !== null && l._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (l._visibility &= -3, _u(e)) : An(e);
          break;
        default:
          An(e);
      }
    }
    function _u(e) {
      var l = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (l !== null) for (var t = 0; t < l.length; t++) {
          var a = l[t];
          Ye = a, Td(a, e);
        }
        Dd(e);
      }
      for (e = e.child; e !== null; ) {
        switch (l = e, l.tag) {
          case 0:
          case 11:
          case 15:
            St2(8, l, l.return), _u(l);
            break;
          case 22:
            t = l.stateNode, t._visibility & 2 && (t._visibility &= -3, _u(l));
            break;
          default:
            _u(l);
        }
        e = e.sibling;
      }
    }
    function Td(e, l) {
      for (; Ye !== null; ) {
        var t = Ye;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            St2(8, t, l);
            break;
          case 23:
          case 22:
            if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
              var a = t.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            fn(t.memoizedState.cache);
        }
        if (a = t.child, a !== null) a.return = t, Ye = a;
        else e: for (t = e; Ye !== null; ) {
          a = Ye;
          var n3 = a.sibling, u = a.return;
          if (gd(a), a === t) {
            Ye = null;
            break e;
          }
          if (n3 !== null) {
            n3.return = u, Ye = n3;
            break e;
          }
          Ye = u;
        }
      }
    }
    var Sh = { getCacheForType: function(e) {
      var l = Le(Ce), t = l.data.get(e);
      return t === void 0 && (t = e(), l.data.set(e, t)), t;
    }, cacheSignal: function() {
      return Le(Ce).controller.signal;
    } }, Nh = typeof WeakMap == "function" ? WeakMap : Map, P = 0, ce = null, Q = null, V2 = 0, le = 0, hl = null, Nt2 = false, Oa = false, $c = false, it2 = 0, Ae = 0, zt2 = 0, Pt2 = 0, Wc = 0, xl = 0, Ma = 0, Tn = null, il = null, Fc = false, qu = 0, Ed = 0, wu = 1 / 0, Bu = null, Dt2 = null, He = 0, At2 = null, Ca = null, ct2 = 0, Ic = 0, Pc = null, Od = null, En = 0, es = null;
    function vl() {
      return (P & 2) !== 0 && V2 !== 0 ? V2 & -V2 : j.T !== null ? is() : Ls();
    }
    function Md() {
      if (xl === 0) if ((V2 & 536870912) === 0 || $) {
        var e = X;
        X <<= 1, (X & 3932160) === 0 && (X = 262144), xl = e;
      } else xl = 536870912;
      return e = rl.current, e !== null && (e.flags |= 32), xl;
    }
    function cl(e, l, t) {
      (e === ce && (le === 2 || le === 9) || e.cancelPendingCommit !== null) && (Ua(e, 0), Tt2(e, V2, xl, false)), ka(e, t), ((P & 2) === 0 || e !== ce) && (e === ce && ((P & 2) === 0 && (Pt2 |= t), Ae === 4 && Tt2(e, V2, xl, false)), Xl(e));
    }
    function Cd(e, l, t) {
      if ((P & 6) !== 0) throw Error(d(327));
      var a = !t && (l & 127) === 0 && (l & e.expiredLanes) === 0 || pl(e, l), n3 = a ? Ah(e, l) : ts(e, l, true), u = a;
      do {
        if (n3 === 0) {
          Oa && !a && Tt2(e, l, 0, false);
          break;
        } else {
          if (t = e.current.alternate, u && !zh(t)) {
            n3 = ts(e, l, false), u = false;
            continue;
          }
          if (n3 === 2) {
            if (u = l, e.errorRecoveryDisabledLanes & u) var c = 0;
            else c = e.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
            if (c !== 0) {
              l = c;
              e: {
                var s = e;
                n3 = Tn;
                var f2 = s.current.memoizedState.isDehydrated;
                if (f2 && (Ua(s, c).flags |= 256), c = ts(s, c, false), c !== 2) {
                  if ($c && !f2) {
                    s.errorRecoveryDisabledLanes |= u, Pt2 |= u, n3 = 4;
                    break e;
                  }
                  u = il, il = n3, u !== null && (il === null ? il = u : il.push.apply(il, u));
                }
                n3 = c;
              }
              if (u = false, n3 !== 2) continue;
            }
          }
          if (n3 === 1) {
            Ua(e, 0), Tt2(e, l, 0, true);
            break;
          }
          e: {
            switch (a = e, u = n3, u) {
              case 0:
              case 1:
                throw Error(d(345));
              case 4:
                if ((l & 4194048) !== l) break;
              case 6:
                Tt2(a, l, xl, !Nt2);
                break e;
              case 2:
                il = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(d(329));
            }
            if ((l & 62914560) === l && (n3 = qu + 300 - We(), 10 < n3)) {
              if (Tt2(a, l, xl, !Nt2), ie(a, 0, true) !== 0) break e;
              ct2 = l, a.timeoutHandle = sr(Ud.bind(null, a, t, il, Bu, Fc, l, xl, Pt2, Ma, Nt2, u, "Throttled", -0, 0), n3);
              break e;
            }
            Ud(a, t, il, Bu, Fc, l, xl, Pt2, Ma, Nt2, u, null, -0, 0);
          }
        }
        break;
      } while (true);
      Xl(e);
    }
    function Ud(e, l, t, a, n3, u, c, s, f2, v, y2, N, g, b) {
      if (e.timeoutHandle = -1, N = l.subtreeFlags, N & 8192 || (N & 16785408) === 16785408) {
        N = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: true, waitingForViewTransition: false, unsuspend: Jl }, zd(l, u, N);
        var E = (u & 62914560) === u ? qu - We() : (u & 4194048) === u ? Ed - We() : 0;
        if (E = s0(N, E), E !== null) {
          ct2 = u, e.cancelPendingCommit = E(Gd.bind(null, e, l, u, t, a, n3, c, s, f2, y2, N, null, g, b)), Tt2(e, u, c, !v);
          return;
        }
      }
      Gd(e, l, u, t, a, n3, c, s, f2);
    }
    function zh(e) {
      for (var l = e; ; ) {
        var t = l.tag;
        if ((t === 0 || t === 11 || t === 15) && l.flags & 16384 && (t = l.updateQueue, t !== null && (t = t.stores, t !== null))) for (var a = 0; a < t.length; a++) {
          var n3 = t[a], u = n3.getSnapshot;
          n3 = n3.value;
          try {
            if (!ol(u(), n3)) return false;
          } catch {
            return false;
          }
        }
        if (t = l.child, l.subtreeFlags & 16384 && t !== null) t.return = l, l = t;
        else {
          if (l === e) break;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === e) return true;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      }
      return true;
    }
    function Tt2(e, l, t, a) {
      l &= ~Wc, l &= ~Pt2, e.suspendedLanes |= l, e.pingedLanes &= ~l, a && (e.warmLanes |= l), a = e.expirationTimes;
      for (var n3 = l; 0 < n3; ) {
        var u = 31 - Ie(n3), c = 1 << u;
        a[u] = -1, n3 &= ~c;
      }
      t !== 0 && Gs(e, t, l);
    }
    function Hu() {
      return (P & 6) === 0 ? (On(0), false) : true;
    }
    function ls() {
      if (Q !== null) {
        if (le === 0) var e = Q.return;
        else e = Q, Wl = Zt2 = null, gc(e), Sa = null, dn = 0, e = Q;
        for (; e !== null; ) fd(e.alternate, e), e = e.return;
        Q = null;
      }
    }
    function Ua(e, l) {
      var t = e.timeoutHandle;
      t !== -1 && (e.timeoutHandle = -1, Zh(t)), t = e.cancelPendingCommit, t !== null && (e.cancelPendingCommit = null, t()), ct2 = 0, ls(), ce = e, Q = t = kl(e.current, null), V2 = l, le = 0, hl = null, Nt2 = false, Oa = pl(e, l), $c = false, Ma = xl = Wc = Pt2 = zt2 = Ae = 0, il = Tn = null, Fc = false, (l & 8) !== 0 && (l |= l & 32);
      var a = e.entangledLanes;
      if (a !== 0) for (e = e.entanglements, a &= l; 0 < a; ) {
        var n3 = 31 - Ie(a), u = 1 << n3;
        l |= e[n3], a &= ~u;
      }
      return it2 = l, nu(), t;
    }
    function _d(e, l) {
      R = null, j.H = pn, l === ja || l === ru ? (l = kf(), le = 3) : l === uc ? (l = kf(), le = 4) : le = l === _c ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, hl = l, Q === null && (Ae = 1, Au(e, Nl(l, e.current)));
    }
    function qd() {
      var e = rl.current;
      return e === null ? true : (V2 & 4194048) === V2 ? Tl === null : (V2 & 62914560) === V2 || (V2 & 536870912) !== 0 ? e === Tl : false;
    }
    function wd() {
      var e = j.H;
      return j.H = pn, e === null ? pn : e;
    }
    function Bd() {
      var e = j.A;
      return j.A = Sh, e;
    }
    function Ru() {
      Ae = 4, Nt2 || (V2 & 4194048) !== V2 && rl.current !== null || (Oa = true), (zt2 & 134217727) === 0 && (Pt2 & 134217727) === 0 || ce === null || Tt2(ce, V2, xl, false);
    }
    function ts(e, l, t) {
      var a = P;
      P |= 2;
      var n3 = wd(), u = Bd();
      (ce !== e || V2 !== l) && (Bu = null, Ua(e, l)), l = false;
      var c = Ae;
      e: do
        try {
          if (le !== 0 && Q !== null) {
            var s = Q, f2 = hl;
            switch (le) {
              case 8:
                ls(), c = 6;
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                rl.current === null && (l = true);
                var v = le;
                if (le = 0, hl = null, _a(e, s, f2, v), t && Oa) {
                  c = 0;
                  break e;
                }
                break;
              default:
                v = le, le = 0, hl = null, _a(e, s, f2, v);
            }
          }
          Dh(), c = Ae;
          break;
        } catch (y2) {
          _d(e, y2);
        }
      while (true);
      return l && e.shellSuspendCounter++, Wl = Zt2 = null, P = a, j.H = n3, j.A = u, Q === null && (ce = null, V2 = 0, nu()), c;
    }
    function Dh() {
      for (; Q !== null; ) Hd(Q);
    }
    function Ah(e, l) {
      var t = P;
      P |= 2;
      var a = wd(), n3 = Bd();
      ce !== e || V2 !== l ? (Bu = null, wu = We() + 500, Ua(e, l)) : Oa = pl(e, l);
      e: do
        try {
          if (le !== 0 && Q !== null) {
            l = Q;
            var u = hl;
            l: switch (le) {
              case 1:
                le = 0, hl = null, _a(e, l, u, 1);
                break;
              case 2:
              case 9:
                if (Jf(u)) {
                  le = 0, hl = null, Rd(l);
                  break;
                }
                l = function() {
                  le !== 2 && le !== 9 || ce !== e || (le = 7), Xl(e);
                }, u.then(l, l);
                break e;
              case 3:
                le = 7;
                break e;
              case 4:
                le = 5;
                break e;
              case 7:
                Jf(u) ? (le = 0, hl = null, Rd(l)) : (le = 0, hl = null, _a(e, l, u, 7));
                break;
              case 5:
                var c = null;
                switch (Q.tag) {
                  case 26:
                    c = Q.memoizedState;
                  case 5:
                  case 27:
                    var s = Q;
                    if (c ? Nr(c) : s.stateNode.complete) {
                      le = 0, hl = null;
                      var f2 = s.sibling;
                      if (f2 !== null) Q = f2;
                      else {
                        var v = s.return;
                        v !== null ? (Q = v, Yu(v)) : Q = null;
                      }
                      break l;
                    }
                }
                le = 0, hl = null, _a(e, l, u, 5);
                break;
              case 6:
                le = 0, hl = null, _a(e, l, u, 6);
                break;
              case 8:
                ls(), Ae = 6;
                break e;
              default:
                throw Error(d(462));
            }
          }
          Th();
          break;
        } catch (y2) {
          _d(e, y2);
        }
      while (true);
      return Wl = Zt2 = null, j.H = a, j.A = n3, P = t, Q !== null ? 0 : (ce = null, V2 = 0, nu(), Ae);
    }
    function Th() {
      for (; Q !== null && !oi(); ) Hd(Q);
    }
    function Hd(e) {
      var l = cd(e.alternate, e, it2);
      e.memoizedProps = e.pendingProps, l === null ? Yu(e) : Q = l;
    }
    function Rd(e) {
      var l = e, t = l.alternate;
      switch (l.tag) {
        case 15:
        case 0:
          l = ld(t, l, l.pendingProps, l.type, void 0, V2);
          break;
        case 11:
          l = ld(t, l, l.pendingProps, l.type.render, l.ref, V2);
          break;
        case 5:
          gc(l);
        default:
          fd(t, l), l = Q = wf(l, it2), l = cd(t, l, it2);
      }
      e.memoizedProps = e.pendingProps, l === null ? Yu(e) : Q = l;
    }
    function _a(e, l, t, a) {
      Wl = Zt2 = null, gc(l), Sa = null, dn = 0;
      var n3 = l.return;
      try {
        if (xh(e, n3, l, t, V2)) {
          Ae = 1, Au(e, Nl(t, e.current)), Q = null;
          return;
        }
      } catch (u) {
        if (n3 !== null) throw Q = n3, u;
        Ae = 1, Au(e, Nl(t, e.current)), Q = null;
        return;
      }
      l.flags & 32768 ? ($ || a === 1 ? e = true : Oa || (V2 & 536870912) !== 0 ? e = false : (Nt2 = e = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = rl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Yd(l, e)) : Yu(l);
    }
    function Yu(e) {
      var l = e;
      do {
        if ((l.flags & 32768) !== 0) {
          Yd(l, Nt2);
          return;
        }
        e = l.return;
        var t = bh(l.alternate, l, it2);
        if (t !== null) {
          Q = t;
          return;
        }
        if (l = l.sibling, l !== null) {
          Q = l;
          return;
        }
        Q = l = e;
      } while (l !== null);
      Ae === 0 && (Ae = 5);
    }
    function Yd(e, l) {
      do {
        var t = ph(e.alternate, e);
        if (t !== null) {
          t.flags &= 32767, Q = t;
          return;
        }
        if (t = e.return, t !== null && (t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null), !l && (e = e.sibling, e !== null)) {
          Q = e;
          return;
        }
        Q = e = t;
      } while (e !== null);
      Ae = 6, Q = null;
    }
    function Gd(e, l, t, a, n3, u, c, s, f2) {
      e.cancelPendingCommit = null;
      do
        Gu();
      while (He !== 0);
      if ((P & 6) !== 0) throw Error(d(327));
      if (l !== null) {
        if (l === e.current) throw Error(d(177));
        if (u = l.lanes | l.childLanes, u |= Zi, im(e, t, u, c, s, f2), e === ce && (Q = ce = null, V2 = 0), Ca = l, At2 = e, ct2 = t, Ic = u, Pc = n3, Od = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Ch(wt2, function() {
          return Vd(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
          a = j.T, j.T = null, n3 = A.p, A.p = 2, c = P, P |= 4;
          try {
            yh(e, l, t);
          } finally {
            P = c, A.p = n3, j.T = a;
          }
        }
        He = 1, Xd(), Qd(), Ld();
      }
    }
    function Xd() {
      if (He === 1) {
        He = 0;
        var e = At2, l = Ca, t = (l.flags & 13878) !== 0;
        if ((l.subtreeFlags & 13878) !== 0 || t) {
          t = j.T, j.T = null;
          var a = A.p;
          A.p = 2;
          var n3 = P;
          P |= 4;
          try {
            jd(l, e);
            var u = hs, c = Af(e.containerInfo), s = u.focusedElem, f2 = u.selectionRange;
            if (c !== s && s && s.ownerDocument && Df(s.ownerDocument.documentElement, s)) {
              if (f2 !== null && Yi(s)) {
                var v = f2.start, y2 = f2.end;
                if (y2 === void 0 && (y2 = v), "selectionStart" in s) s.selectionStart = v, s.selectionEnd = Math.min(y2, s.value.length);
                else {
                  var N = s.ownerDocument || document, g = N && N.defaultView || window;
                  if (g.getSelection) {
                    var b = g.getSelection(), E = s.textContent.length, q = Math.min(f2.start, E), ue = f2.end === void 0 ? q : Math.min(f2.end, E);
                    !b.extend && q > ue && (c = ue, ue = q, q = c);
                    var m2 = zf(s, q), r = zf(s, ue);
                    if (m2 && r && (b.rangeCount !== 1 || b.anchorNode !== m2.node || b.anchorOffset !== m2.offset || b.focusNode !== r.node || b.focusOffset !== r.offset)) {
                      var x = N.createRange();
                      x.setStart(m2.node, m2.offset), b.removeAllRanges(), q > ue ? (b.addRange(x), b.extend(r.node, r.offset)) : (x.setEnd(r.node, r.offset), b.addRange(x));
                    }
                  }
                }
              }
              for (N = [], b = s; b = b.parentNode; ) b.nodeType === 1 && N.push({ element: b, left: b.scrollLeft, top: b.scrollTop });
              for (typeof s.focus == "function" && s.focus(), s = 0; s < N.length; s++) {
                var S3 = N[s];
                S3.element.scrollLeft = S3.left, S3.element.scrollTop = S3.top;
              }
            }
            Iu = !!ms, hs = ms = null;
          } finally {
            P = n3, A.p = a, j.T = t;
          }
        }
        e.current = l, He = 2;
      }
    }
    function Qd() {
      if (He === 2) {
        He = 0;
        var e = At2, l = Ca, t = (l.flags & 8772) !== 0;
        if ((l.subtreeFlags & 8772) !== 0 || t) {
          t = j.T, j.T = null;
          var a = A.p;
          A.p = 2;
          var n3 = P;
          P |= 4;
          try {
            vd(e, l.alternate, l);
          } finally {
            P = n3, A.p = a, j.T = t;
          }
        }
        He = 3;
      }
    }
    function Ld() {
      if (He === 4 || He === 3) {
        He = 0, di();
        var e = At2, l = Ca, t = ct2, a = Od;
        (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? He = 5 : (He = 0, Ca = At2 = null, Zd(e, e.pendingLanes));
        var n3 = e.pendingLanes;
        if (n3 === 0 && (Dt2 = null), yi(t), l = l.stateNode, Fe && typeof Fe.onCommitFiberRoot == "function") try {
          Fe.onCommitFiberRoot(Bt2, l, void 0, (l.current.flags & 128) === 128);
        } catch {
        }
        if (a !== null) {
          l = j.T, n3 = A.p, A.p = 2, j.T = null;
          try {
            for (var u = e.onRecoverableError, c = 0; c < a.length; c++) {
              var s = a[c];
              u(s.value, { componentStack: s.stack });
            }
          } finally {
            j.T = l, A.p = n3;
          }
        }
        (ct2 & 3) !== 0 && Gu(), Xl(e), n3 = e.pendingLanes, (t & 261930) !== 0 && (n3 & 42) !== 0 ? e === es ? En++ : (En = 0, es = e) : En = 0, On(0);
      }
    }
    function Zd(e, l) {
      (e.pooledCacheLanes &= l) === 0 && (l = e.pooledCache, l != null && (e.pooledCache = null, fn(l)));
    }
    function Gu() {
      return Xd(), Qd(), Ld(), Vd();
    }
    function Vd() {
      if (He !== 5) return false;
      var e = At2, l = Ic;
      Ic = 0;
      var t = yi(ct2), a = j.T, n3 = A.p;
      try {
        A.p = 32 > t ? 32 : t, j.T = null, t = Pc, Pc = null;
        var u = At2, c = ct2;
        if (He = 0, Ca = At2 = null, ct2 = 0, (P & 6) !== 0) throw Error(d(331));
        var s = P;
        if (P |= 4, Ad(u.current), Nd(u, u.current, c, t), P = s, On(0, false), Fe && typeof Fe.onPostCommitFiberRoot == "function") try {
          Fe.onPostCommitFiberRoot(Bt2, u);
        } catch {
        }
        return true;
      } finally {
        A.p = n3, j.T = a, Zd(e, l);
      }
    }
    function Jd(e, l, t) {
      l = Nl(t, l), l = Uc(e.stateNode, l, 2), e = pt2(e, l, 2), e !== null && (ka(e, 2), Xl(e));
    }
    function te2(e, l, t) {
      if (e.tag === 3) Jd(e, e, t);
      else for (; l !== null; ) {
        if (l.tag === 3) {
          Jd(l, e, t);
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Dt2 === null || !Dt2.has(a))) {
            e = Nl(t, e), t = Ko(2), a = pt2(l, t, 2), a !== null && (ko(t, a, l, e), ka(a, 2), Xl(a));
            break;
          }
        }
        l = l.return;
      }
    }
    function as(e, l, t) {
      var a = e.pingCache;
      if (a === null) {
        a = e.pingCache = new Nh();
        var n3 = /* @__PURE__ */ new Set();
        a.set(l, n3);
      } else n3 = a.get(l), n3 === void 0 && (n3 = /* @__PURE__ */ new Set(), a.set(l, n3));
      n3.has(t) || ($c = true, n3.add(t), e = Eh.bind(null, e, l, t), l.then(e, e));
    }
    function Eh(e, l, t) {
      var a = e.pingCache;
      a !== null && a.delete(l), e.pingedLanes |= e.suspendedLanes & t, e.warmLanes &= ~t, ce === e && (V2 & t) === t && (Ae === 4 || Ae === 3 && (V2 & 62914560) === V2 && 300 > We() - qu ? (P & 2) === 0 && Ua(e, 0) : Wc |= t, Ma === V2 && (Ma = 0)), Xl(e);
    }
    function Kd(e, l) {
      l === 0 && (l = Ys()), e = Xt2(e, l), e !== null && (ka(e, l), Xl(e));
    }
    function Oh(e) {
      var l = e.memoizedState, t = 0;
      l !== null && (t = l.retryLane), Kd(e, t);
    }
    function Mh(e, l) {
      var t = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var a = e.stateNode, n3 = e.memoizedState;
          n3 !== null && (t = n3.retryLane);
          break;
        case 19:
          a = e.stateNode;
          break;
        case 22:
          a = e.stateNode._retryCache;
          break;
        default:
          throw Error(d(314));
      }
      a !== null && a.delete(l), Kd(e, t);
    }
    function Ch(e, l) {
      return Ja(e, l);
    }
    var Xu = null, qa = null, ns = false, Qu = false, us = false, Et2 = 0;
    function Xl(e) {
      e !== qa && e.next === null && (qa === null ? Xu = qa = e : qa = qa.next = e), Qu = true, ns || (ns = true, _h());
    }
    function On(e, l) {
      if (!us && Qu) {
        us = true;
        do
          for (var t = false, a = Xu; a !== null; ) {
            if (e !== 0) {
              var n3 = a.pendingLanes;
              if (n3 === 0) var u = 0;
              else {
                var c = a.suspendedLanes, s = a.pingedLanes;
                u = (1 << 31 - Ie(42 | e) + 1) - 1, u &= n3 & ~(c & ~s), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
              }
              u !== 0 && (t = true, Fd(a, u));
            } else u = V2, u = ie(a, a === ce ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || pl(a, u) || (t = true, Fd(a, u));
            a = a.next;
          }
        while (t);
        us = false;
      }
    }
    function Uh() {
      kd();
    }
    function kd() {
      Qu = ns = false;
      var e = 0;
      Et2 !== 0 && Lh() && (e = Et2);
      for (var l = We(), t = null, a = Xu; a !== null; ) {
        var n3 = a.next, u = $d(a, l);
        u === 0 ? (a.next = null, t === null ? Xu = n3 : t.next = n3, n3 === null && (qa = t)) : (t = a, (e !== 0 || (u & 3) !== 0) && (Qu = true)), a = n3;
      }
      He !== 0 && He !== 5 || On(e), Et2 !== 0 && (Et2 = 0);
    }
    function $d(e, l) {
      for (var t = e.suspendedLanes, a = e.pingedLanes, n3 = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
        var c = 31 - Ie(u), s = 1 << c, f2 = n3[c];
        f2 === -1 ? ((s & t) === 0 || (s & a) !== 0) && (n3[c] = um(s, l)) : f2 <= l && (e.expiredLanes |= s), u &= ~s;
      }
      if (l = ce, t = V2, t = ie(e, e === l ? t : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, t === 0 || e === l && (le === 2 || le === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && Ka(a), e.callbackNode = null, e.callbackPriority = 0;
      if ((t & 3) === 0 || pl(e, t)) {
        if (l = t & -t, l === e.callbackPriority) return l;
        switch (a !== null && Ka(a), yi(t)) {
          case 2:
          case 8:
            t = Vn;
            break;
          case 32:
            t = wt2;
            break;
          case 268435456:
            t = Jn;
            break;
          default:
            t = wt2;
        }
        return a = Wd.bind(null, e), t = Ja(t, a), e.callbackPriority = l, e.callbackNode = t, l;
      }
      return a !== null && a !== null && Ka(a), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Wd(e, l) {
      if (He !== 0 && He !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
      var t = e.callbackNode;
      if (Gu() && e.callbackNode !== t) return null;
      var a = V2;
      return a = ie(e, e === ce ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (Cd(e, a, l), $d(e, We()), e.callbackNode != null && e.callbackNode === t ? Wd.bind(null, e) : null);
    }
    function Fd(e, l) {
      if (Gu()) return null;
      Cd(e, l, true);
    }
    function _h() {
      Vh(function() {
        (P & 6) !== 0 ? Ja(Zn, Uh) : kd();
      });
    }
    function is() {
      if (Et2 === 0) {
        var e = pa;
        e === 0 && (e = M, M <<= 1, (M & 261888) === 0 && (M = 256)), Et2 = e;
      }
      return Et2;
    }
    function Id(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Wn("" + e);
    }
    function Pd(e, l) {
      var t = l.ownerDocument.createElement("input");
      return t.name = l.name, t.value = l.value, e.id && t.setAttribute("form", e.id), l.parentNode.insertBefore(t, l), e = new FormData(e), t.parentNode.removeChild(t), e;
    }
    function qh(e, l, t, a, n3) {
      if (l === "submit" && t && t.stateNode === n3) {
        var u = Id((n3[ll] || null).action), c = a.submitter;
        c && (l = (l = c[ll] || null) ? Id(l.formAction) : c.getAttribute("formAction"), l !== null && (u = l, c = null));
        var s = new eu("action", "action", null, a, n3);
        e.push({ event: s, listeners: [{ instance: null, listener: function() {
          if (a.defaultPrevented) {
            if (Et2 !== 0) {
              var f2 = c ? Pd(n3, c) : new FormData(n3);
              Ac(t, { pending: true, data: f2, method: n3.method, action: u }, null, f2);
            }
          } else typeof u == "function" && (s.preventDefault(), f2 = c ? Pd(n3, c) : new FormData(n3), Ac(t, { pending: true, data: f2, method: n3.method, action: u }, u, f2));
        }, currentTarget: n3 }] });
      }
    }
    for (var cs = 0; cs < Li.length; cs++) {
      var ss = Li[cs], wh = ss.toLowerCase(), Bh = ss[0].toUpperCase() + ss.slice(1);
      Ul(wh, "on" + Bh);
    }
    Ul(Of, "onAnimationEnd"), Ul(Mf, "onAnimationIteration"), Ul(Cf, "onAnimationStart"), Ul("dblclick", "onDoubleClick"), Ul("focusin", "onFocus"), Ul("focusout", "onBlur"), Ul(Im, "onTransitionRun"), Ul(Pm, "onTransitionStart"), Ul(eh, "onTransitionCancel"), Ul(Uf, "onTransitionEnd"), ua("onMouseEnter", ["mouseout", "mouseover"]), ua("onMouseLeave", ["mouseout", "mouseover"]), ua("onPointerEnter", ["pointerout", "pointerover"]), ua("onPointerLeave", ["pointerout", "pointerover"]), Ht2("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ht2("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ht2("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ht2("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ht2("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ht2("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Mn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Hh = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mn));
    function er(e, l) {
      l = (l & 4) !== 0;
      for (var t = 0; t < e.length; t++) {
        var a = e[t], n3 = a.event;
        a = a.listeners;
        e: {
          var u = void 0;
          if (l) for (var c = a.length - 1; 0 <= c; c--) {
            var s = a[c], f2 = s.instance, v = s.currentTarget;
            if (s = s.listener, f2 !== u && n3.isPropagationStopped()) break e;
            u = s, n3.currentTarget = v;
            try {
              u(n3);
            } catch (y2) {
              au(y2);
            }
            n3.currentTarget = null, u = f2;
          }
          else for (c = 0; c < a.length; c++) {
            if (s = a[c], f2 = s.instance, v = s.currentTarget, s = s.listener, f2 !== u && n3.isPropagationStopped()) break e;
            u = s, n3.currentTarget = v;
            try {
              u(n3);
            } catch (y2) {
              au(y2);
            }
            n3.currentTarget = null, u = f2;
          }
        }
      }
    }
    function L(e, l) {
      var t = l[ji];
      t === void 0 && (t = l[ji] = /* @__PURE__ */ new Set());
      var a = e + "__bubble";
      t.has(a) || (lr(l, e, 2, false), t.add(a));
    }
    function fs(e, l, t) {
      var a = 0;
      l && (a |= 4), lr(t, e, a, l);
    }
    var Lu = "_reactListening" + Math.random().toString(36).slice(2);
    function os(e) {
      if (!e[Lu]) {
        e[Lu] = true, Js.forEach(function(t) {
          t !== "selectionchange" && (Hh.has(t) || fs(t, false, e), fs(t, true, e));
        });
        var l = e.nodeType === 9 ? e : e.ownerDocument;
        l === null || l[Lu] || (l[Lu] = true, fs("selectionchange", false, l));
      }
    }
    function lr(e, l, t, a) {
      switch (Mr(l)) {
        case 2:
          var n3 = d0;
          break;
        case 8:
          n3 = r0;
          break;
        default:
          n3 = Ds;
      }
      t = n3.bind(null, l, t, e), n3 = void 0, !Mi || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (n3 = true), a ? n3 !== void 0 ? e.addEventListener(l, t, { capture: true, passive: n3 }) : e.addEventListener(l, t, true) : n3 !== void 0 ? e.addEventListener(l, t, { passive: n3 }) : e.addEventListener(l, t, false);
    }
    function ds(e, l, t, a, n3) {
      var u = a;
      if ((l & 1) === 0 && (l & 2) === 0 && a !== null) e: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n3) break;
          if (c === 4) for (c = a.return; c !== null; ) {
            var f2 = c.tag;
            if ((f2 === 3 || f2 === 4) && c.stateNode.containerInfo === n3) return;
            c = c.return;
          }
          for (; s !== null; ) {
            if (c = ta(s), c === null) return;
            if (f2 = c.tag, f2 === 5 || f2 === 6 || f2 === 26 || f2 === 27) {
              a = u = c;
              continue e;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
      nf(function() {
        var v = u, y2 = Ei(t), N = [];
        e: {
          var g = _f.get(e);
          if (g !== void 0) {
            var b = eu, E = e;
            switch (e) {
              case "keypress":
                if (In(t) === 0) break e;
              case "keydown":
              case "keyup":
                b = Mm;
                break;
              case "focusin":
                E = "focus", b = qi;
                break;
              case "focusout":
                E = "blur", b = qi;
                break;
              case "beforeblur":
              case "afterblur":
                b = qi;
                break;
              case "click":
                if (t.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                b = sf;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                b = bm;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                b = _m;
                break;
              case Of:
              case Mf:
              case Cf:
                b = jm;
                break;
              case Uf:
                b = wm;
                break;
              case "scroll":
              case "scrollend":
                b = vm;
                break;
              case "wheel":
                b = Hm;
                break;
              case "copy":
              case "cut":
              case "paste":
                b = Nm;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                b = of;
                break;
              case "toggle":
              case "beforetoggle":
                b = Ym;
            }
            var q = (l & 4) !== 0, ue = !q && (e === "scroll" || e === "scrollend"), m2 = q ? g !== null ? g + "Capture" : null : g;
            q = [];
            for (var r = v, x; r !== null; ) {
              var S3 = r;
              if (x = S3.stateNode, S3 = S3.tag, S3 !== 5 && S3 !== 26 && S3 !== 27 || x === null || m2 === null || (S3 = Fa(r, m2), S3 != null && q.push(Cn(r, S3, x))), ue) break;
              r = r.return;
            }
            0 < q.length && (g = new b(g, E, null, t, y2), N.push({ event: g, listeners: q }));
          }
        }
        if ((l & 7) === 0) {
          e: {
            if (g = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", g && t !== Ti && (E = t.relatedTarget || t.fromElement) && (ta(E) || E[la])) break e;
            if ((b || g) && (g = y2.window === y2 ? y2 : (g = y2.ownerDocument) ? g.defaultView || g.parentWindow : window, b ? (E = t.relatedTarget || t.toElement, b = v, E = E ? ta(E) : null, E !== null && (ue = T2(E), q = E.tag, E !== ue || q !== 5 && q !== 27 && q !== 6) && (E = null)) : (b = null, E = v), b !== E)) {
              if (q = sf, S3 = "onMouseLeave", m2 = "onMouseEnter", r = "mouse", (e === "pointerout" || e === "pointerover") && (q = of, S3 = "onPointerLeave", m2 = "onPointerEnter", r = "pointer"), ue = b == null ? g : Wa(b), x = E == null ? g : Wa(E), g = new q(S3, r + "leave", b, t, y2), g.target = ue, g.relatedTarget = x, S3 = null, ta(y2) === v && (q = new q(m2, r + "enter", E, t, y2), q.target = x, q.relatedTarget = ue, S3 = q), ue = S3, b && E) l: {
                for (q = Rh, m2 = b, r = E, x = 0, S3 = m2; S3; S3 = q(S3)) x++;
                S3 = 0;
                for (var C = r; C; C = q(C)) S3++;
                for (; 0 < x - S3; ) m2 = q(m2), x--;
                for (; 0 < S3 - x; ) r = q(r), S3--;
                for (; x--; ) {
                  if (m2 === r || r !== null && m2 === r.alternate) {
                    q = m2;
                    break l;
                  }
                  m2 = q(m2), r = q(r);
                }
                q = null;
              }
              else q = null;
              b !== null && tr(N, g, b, q, false), E !== null && ue !== null && tr(N, ue, E, q, true);
            }
          }
          e: {
            if (g = v ? Wa(v) : window, b = g.nodeName && g.nodeName.toLowerCase(), b === "select" || b === "input" && g.type === "file") var F = bf;
            else if (vf(g)) if (pf) F = $m;
            else {
              F = Km;
              var O = Jm;
            }
            else b = g.nodeName, !b || b.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? v && Ai(v.elementType) && (F = bf) : F = km;
            if (F && (F = F(e, v))) {
              gf(N, F, t, y2);
              break e;
            }
            O && O(e, g, v), e === "focusout" && v && g.type === "number" && v.memoizedProps.value != null && Di(g, "number", g.value);
          }
          switch (O = v ? Wa(v) : window, e) {
            case "focusin":
              (vf(O) || O.contentEditable === "true") && (da = O, Gi = v, un = null);
              break;
            case "focusout":
              un = Gi = da = null;
              break;
            case "mousedown":
              Xi = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Xi = false, Tf(N, t, y2);
              break;
            case "selectionchange":
              if (Fm) break;
            case "keydown":
            case "keyup":
              Tf(N, t, y2);
          }
          var Y;
          if (Bi) e: {
            switch (e) {
              case "compositionstart":
                var J = "onCompositionStart";
                break e;
              case "compositionend":
                J = "onCompositionEnd";
                break e;
              case "compositionupdate":
                J = "onCompositionUpdate";
                break e;
            }
            J = void 0;
          }
          else oa ? hf(e, t) && (J = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (J = "onCompositionStart");
          J && (df && t.locale !== "ko" && (oa || J !== "onCompositionStart" ? J === "onCompositionEnd" && oa && (Y = uf()) : (rt2 = y2, Ci = "value" in rt2 ? rt2.value : rt2.textContent, oa = true)), O = Zu(v, J), 0 < O.length && (J = new ff(J, e, null, t, y2), N.push({ event: J, listeners: O }), Y ? J.data = Y : (Y = xf(t), Y !== null && (J.data = Y)))), (Y = Xm ? Qm(e, t) : Lm(e, t)) && (J = Zu(v, "onBeforeInput"), 0 < J.length && (O = new ff("onBeforeInput", "beforeinput", null, t, y2), N.push({ event: O, listeners: J }), O.data = Y)), qh(N, e, v, t, y2);
        }
        er(N, l);
      });
    }
    function Cn(e, l, t) {
      return { instance: e, listener: l, currentTarget: t };
    }
    function Zu(e, l) {
      for (var t = l + "Capture", a = []; e !== null; ) {
        var n3 = e, u = n3.stateNode;
        if (n3 = n3.tag, n3 !== 5 && n3 !== 26 && n3 !== 27 || u === null || (n3 = Fa(e, t), n3 != null && a.unshift(Cn(e, n3, u)), n3 = Fa(e, l), n3 != null && a.push(Cn(e, n3, u))), e.tag === 3) return a;
        e = e.return;
      }
      return [];
    }
    function Rh(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function tr(e, l, t, a, n3) {
      for (var u = l._reactName, c = []; t !== null && t !== a; ) {
        var s = t, f2 = s.alternate, v = s.stateNode;
        if (s = s.tag, f2 !== null && f2 === a) break;
        s !== 5 && s !== 26 && s !== 27 || v === null || (f2 = v, n3 ? (v = Fa(t, u), v != null && c.unshift(Cn(t, v, f2))) : n3 || (v = Fa(t, u), v != null && c.push(Cn(t, v, f2)))), t = t.return;
      }
      c.length !== 0 && e.push({ event: l, listeners: c });
    }
    var Yh = /\r\n?/g, Gh = /\u0000|\uFFFD/g;
    function ar(e) {
      return (typeof e == "string" ? e : "" + e).replace(Yh, `
`).replace(Gh, "");
    }
    function nr(e, l) {
      return l = ar(l), ar(e) === l;
    }
    function ne2(e, l, t, a, n3, u) {
      switch (t) {
        case "children":
          typeof a == "string" ? l === "body" || l === "textarea" && a === "" || ca(e, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && ca(e, "" + a);
          break;
        case "className":
          kn(e, "class", a);
          break;
        case "tabIndex":
          kn(e, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          kn(e, t, a);
          break;
        case "style":
          tf(e, a, u);
          break;
        case "data":
          if (l !== "object") {
            kn(e, "data", a);
            break;
          }
        case "src":
        case "href":
          if (a === "" && (l !== "a" || t !== "href")) {
            e.removeAttribute(t);
            break;
          }
          if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
            e.removeAttribute(t);
            break;
          }
          a = Wn("" + a), e.setAttribute(t, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            e.setAttribute(t, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof u == "function" && (t === "formAction" ? (l !== "input" && ne2(e, l, "name", n3.name, n3, null), ne2(e, l, "formEncType", n3.formEncType, n3, null), ne2(e, l, "formMethod", n3.formMethod, n3, null), ne2(e, l, "formTarget", n3.formTarget, n3, null)) : (ne2(e, l, "encType", n3.encType, n3, null), ne2(e, l, "method", n3.method, n3, null), ne2(e, l, "target", n3.target, n3, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            e.removeAttribute(t);
            break;
          }
          a = Wn("" + a), e.setAttribute(t, a);
          break;
        case "onClick":
          a != null && (e.onclick = Jl);
          break;
        case "onScroll":
          a != null && L("scroll", e);
          break;
        case "onScrollEnd":
          a != null && L("scrollend", e);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
            if (t = a.__html, t != null) {
              if (n3.children != null) throw Error(d(60));
              e.innerHTML = t;
            }
          }
          break;
        case "multiple":
          e.multiple = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "muted":
          e.muted = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          t = Wn("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", t);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(t, "" + a) : e.removeAttribute(t);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(t, "") : e.removeAttribute(t);
          break;
        case "capture":
        case "download":
          a === true ? e.setAttribute(t, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(t, a) : e.removeAttribute(t);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(t, a) : e.removeAttribute(t);
          break;
        case "rowSpan":
        case "start":
          a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(t) : e.setAttribute(t, a);
          break;
        case "popover":
          L("beforetoggle", e), L("toggle", e), Kn(e, "popover", a);
          break;
        case "xlinkActuate":
          Vl(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          Vl(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          Vl(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          Vl(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          Vl(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          Vl(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          Vl(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          Vl(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          Vl(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          Kn(e, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (t = hm.get(t) || t, Kn(e, t, a));
      }
    }
    function rs(e, l, t, a, n3, u) {
      switch (t) {
        case "style":
          tf(e, a, u);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(d(61));
            if (t = a.__html, t != null) {
              if (n3.children != null) throw Error(d(60));
              e.innerHTML = t;
            }
          }
          break;
        case "children":
          typeof a == "string" ? ca(e, a) : (typeof a == "number" || typeof a == "bigint") && ca(e, "" + a);
          break;
        case "onScroll":
          a != null && L("scroll", e);
          break;
        case "onScrollEnd":
          a != null && L("scrollend", e);
          break;
        case "onClick":
          a != null && (e.onclick = Jl);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!Ks.hasOwnProperty(t)) e: {
            if (t[0] === "o" && t[1] === "n" && (n3 = t.endsWith("Capture"), l = t.slice(2, n3 ? t.length - 7 : void 0), u = e[ll] || null, u = u != null ? u[t] : null, typeof u == "function" && e.removeEventListener(l, u, n3), typeof a == "function")) {
              typeof u != "function" && u !== null && (t in e ? e[t] = null : e.hasAttribute(t) && e.removeAttribute(t)), e.addEventListener(l, a, n3);
              break e;
            }
            t in e ? e[t] = a : a === true ? e.setAttribute(t, "") : Kn(e, t, a);
          }
      }
    }
    function Ve(e, l, t) {
      switch (l) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          L("error", e), L("load", e);
          var a = false, n3 = false, u;
          for (u in t) if (t.hasOwnProperty(u)) {
            var c = t[u];
            if (c != null) switch (u) {
              case "src":
                a = true;
                break;
              case "srcSet":
                n3 = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(d(137, l));
              default:
                ne2(e, l, u, c, t, null);
            }
          }
          n3 && ne2(e, l, "srcSet", t.srcSet, t, null), a && ne2(e, l, "src", t.src, t, null);
          return;
        case "input":
          L("invalid", e);
          var s = u = c = n3 = null, f2 = null, v = null;
          for (a in t) if (t.hasOwnProperty(a)) {
            var y2 = t[a];
            if (y2 != null) switch (a) {
              case "name":
                n3 = y2;
                break;
              case "type":
                c = y2;
                break;
              case "checked":
                f2 = y2;
                break;
              case "defaultChecked":
                v = y2;
                break;
              case "value":
                u = y2;
                break;
              case "defaultValue":
                s = y2;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (y2 != null) throw Error(d(137, l));
                break;
              default:
                ne2(e, l, a, y2, t, null);
            }
          }
          Is(e, u, s, f2, v, c, n3, false);
          return;
        case "select":
          L("invalid", e), a = c = u = null;
          for (n3 in t) if (t.hasOwnProperty(n3) && (s = t[n3], s != null)) switch (n3) {
            case "value":
              u = s;
              break;
            case "defaultValue":
              c = s;
              break;
            case "multiple":
              a = s;
            default:
              ne2(e, l, n3, s, t, null);
          }
          l = u, t = c, e.multiple = !!a, l != null ? ia(e, !!a, l, false) : t != null && ia(e, !!a, t, true);
          return;
        case "textarea":
          L("invalid", e), u = n3 = a = null;
          for (c in t) if (t.hasOwnProperty(c) && (s = t[c], s != null)) switch (c) {
            case "value":
              a = s;
              break;
            case "defaultValue":
              n3 = s;
              break;
            case "children":
              u = s;
              break;
            case "dangerouslySetInnerHTML":
              if (s != null) throw Error(d(91));
              break;
            default:
              ne2(e, l, c, s, t, null);
          }
          ef(e, a, n3, u);
          return;
        case "option":
          for (f2 in t) if (t.hasOwnProperty(f2) && (a = t[f2], a != null)) switch (f2) {
            case "selected":
              e.selected = a && typeof a != "function" && typeof a != "symbol";
              break;
            default:
              ne2(e, l, f2, a, t, null);
          }
          return;
        case "dialog":
          L("beforetoggle", e), L("toggle", e), L("cancel", e), L("close", e);
          break;
        case "iframe":
        case "object":
          L("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Mn.length; a++) L(Mn[a], e);
          break;
        case "image":
          L("error", e), L("load", e);
          break;
        case "details":
          L("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          L("error", e), L("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (v in t) if (t.hasOwnProperty(v) && (a = t[v], a != null)) switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(d(137, l));
            default:
              ne2(e, l, v, a, t, null);
          }
          return;
        default:
          if (Ai(l)) {
            for (y2 in t) t.hasOwnProperty(y2) && (a = t[y2], a !== void 0 && rs(e, l, y2, a, t, void 0));
            return;
          }
      }
      for (s in t) t.hasOwnProperty(s) && (a = t[s], a != null && ne2(e, l, s, a, t, null));
    }
    function Xh(e, l, t, a) {
      switch (l) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var n3 = null, u = null, c = null, s = null, f2 = null, v = null, y2 = null;
          for (b in t) {
            var N = t[b];
            if (t.hasOwnProperty(b) && N != null) switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f2 = N;
              default:
                a.hasOwnProperty(b) || ne2(e, l, b, null, a, N);
            }
          }
          for (var g in a) {
            var b = a[g];
            if (N = t[g], a.hasOwnProperty(g) && (b != null || N != null)) switch (g) {
              case "type":
                u = b;
                break;
              case "name":
                n3 = b;
                break;
              case "checked":
                v = b;
                break;
              case "defaultChecked":
                y2 = b;
                break;
              case "value":
                c = b;
                break;
              case "defaultValue":
                s = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(d(137, l));
                break;
              default:
                b !== N && ne2(e, l, g, b, a, N);
            }
          }
          zi(e, c, s, f2, v, y2, u, n3);
          return;
        case "select":
          b = c = s = g = null;
          for (u in t) if (f2 = t[u], t.hasOwnProperty(u) && f2 != null) switch (u) {
            case "value":
              break;
            case "multiple":
              b = f2;
            default:
              a.hasOwnProperty(u) || ne2(e, l, u, null, a, f2);
          }
          for (n3 in a) if (u = a[n3], f2 = t[n3], a.hasOwnProperty(n3) && (u != null || f2 != null)) switch (n3) {
            case "value":
              g = u;
              break;
            case "defaultValue":
              s = u;
              break;
            case "multiple":
              c = u;
            default:
              u !== f2 && ne2(e, l, n3, u, a, f2);
          }
          l = s, t = c, a = b, g != null ? ia(e, !!t, g, false) : !!a != !!t && (l != null ? ia(e, !!t, l, true) : ia(e, !!t, t ? [] : "", false));
          return;
        case "textarea":
          b = g = null;
          for (s in t) if (n3 = t[s], t.hasOwnProperty(s) && n3 != null && !a.hasOwnProperty(s)) switch (s) {
            case "value":
              break;
            case "children":
              break;
            default:
              ne2(e, l, s, null, a, n3);
          }
          for (c in a) if (n3 = a[c], u = t[c], a.hasOwnProperty(c) && (n3 != null || u != null)) switch (c) {
            case "value":
              g = n3;
              break;
            case "defaultValue":
              b = n3;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (n3 != null) throw Error(d(91));
              break;
            default:
              n3 !== u && ne2(e, l, c, n3, a, u);
          }
          Ps(e, g, b);
          return;
        case "option":
          for (var E in t) if (g = t[E], t.hasOwnProperty(E) && g != null && !a.hasOwnProperty(E)) switch (E) {
            case "selected":
              e.selected = false;
              break;
            default:
              ne2(e, l, E, null, a, g);
          }
          for (f2 in a) if (g = a[f2], b = t[f2], a.hasOwnProperty(f2) && g !== b && (g != null || b != null)) switch (f2) {
            case "selected":
              e.selected = g && typeof g != "function" && typeof g != "symbol";
              break;
            default:
              ne2(e, l, f2, g, a, b);
          }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var q in t) g = t[q], t.hasOwnProperty(q) && g != null && !a.hasOwnProperty(q) && ne2(e, l, q, null, a, g);
          for (v in a) if (g = a[v], b = t[v], a.hasOwnProperty(v) && g !== b && (g != null || b != null)) switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (g != null) throw Error(d(137, l));
              break;
            default:
              ne2(e, l, v, g, a, b);
          }
          return;
        default:
          if (Ai(l)) {
            for (var ue in t) g = t[ue], t.hasOwnProperty(ue) && g !== void 0 && !a.hasOwnProperty(ue) && rs(e, l, ue, void 0, a, g);
            for (y2 in a) g = a[y2], b = t[y2], !a.hasOwnProperty(y2) || g === b || g === void 0 && b === void 0 || rs(e, l, y2, g, a, b);
            return;
          }
      }
      for (var m2 in t) g = t[m2], t.hasOwnProperty(m2) && g != null && !a.hasOwnProperty(m2) && ne2(e, l, m2, null, a, g);
      for (N in a) g = a[N], b = t[N], !a.hasOwnProperty(N) || g === b || g == null && b == null || ne2(e, l, N, g, a, b);
    }
    function ur(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return true;
        default:
          return false;
      }
    }
    function Qh() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, l = 0, t = performance.getEntriesByType("resource"), a = 0; a < t.length; a++) {
          var n3 = t[a], u = n3.transferSize, c = n3.initiatorType, s = n3.duration;
          if (u && s && ur(c)) {
            for (c = 0, s = n3.responseEnd, a += 1; a < t.length; a++) {
              var f2 = t[a], v = f2.startTime;
              if (v > s) break;
              var y2 = f2.transferSize, N = f2.initiatorType;
              y2 && ur(N) && (f2 = f2.responseEnd, c += y2 * (f2 < s ? 1 : (s - v) / (f2 - v)));
            }
            if (--a, l += 8 * (u + c) / (n3.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return l / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    var ms = null, hs = null;
    function Vu(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function ir(e) {
      switch (e) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function cr(e, l) {
      if (e === 0) switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return e === 1 && l === "foreignObject" ? 0 : e;
    }
    function xs(e, l) {
      return e === "textarea" || e === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
    }
    var vs = null;
    function Lh() {
      var e = window.event;
      return e && e.type === "popstate" ? e === vs ? false : (vs = e, true) : (vs = null, false);
    }
    var sr = typeof setTimeout == "function" ? setTimeout : void 0, Zh = typeof clearTimeout == "function" ? clearTimeout : void 0, fr = typeof Promise == "function" ? Promise : void 0, Vh = typeof queueMicrotask == "function" ? queueMicrotask : typeof fr < "u" ? function(e) {
      return fr.resolve(null).then(e).catch(Jh);
    } : sr;
    function Jh(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Ot2(e) {
      return e === "head";
    }
    function or(e, l) {
      var t = l, a = 0;
      do {
        var n3 = t.nextSibling;
        if (e.removeChild(t), n3 && n3.nodeType === 8) if (t = n3.data, t === "/$" || t === "/&") {
          if (a === 0) {
            e.removeChild(n3), Ra(l);
            return;
          }
          a--;
        } else if (t === "$" || t === "$?" || t === "$~" || t === "$!" || t === "&") a++;
        else if (t === "html") Un(e.ownerDocument.documentElement);
        else if (t === "head") {
          t = e.ownerDocument.head, Un(t);
          for (var u = t.firstChild; u; ) {
            var c = u.nextSibling, s = u.nodeName;
            u[$a] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && u.rel.toLowerCase() === "stylesheet" || t.removeChild(u), u = c;
          }
        } else t === "body" && Un(e.ownerDocument.body);
        t = n3;
      } while (t);
      Ra(l);
    }
    function dr(e, l) {
      var t = e;
      e = 0;
      do {
        var a = t.nextSibling;
        if (t.nodeType === 1 ? l ? (t._stashedDisplay = t.style.display, t.style.display = "none") : (t.style.display = t._stashedDisplay || "", t.getAttribute("style") === "" && t.removeAttribute("style")) : t.nodeType === 3 && (l ? (t._stashedText = t.nodeValue, t.nodeValue = "") : t.nodeValue = t._stashedText || ""), a && a.nodeType === 8) if (t = a.data, t === "/$") {
          if (e === 0) break;
          e--;
        } else t !== "$" && t !== "$?" && t !== "$~" && t !== "$!" || e++;
        t = a;
      } while (t);
    }
    function gs(e) {
      var l = e.firstChild;
      for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
        var t = l;
        switch (l = l.nextSibling, t.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            gs(t), Si(t);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (t.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(t);
      }
    }
    function Kh(e, l, t, a) {
      for (; e.nodeType === 1; ) {
        var n3 = t;
        if (e.nodeName.toLowerCase() !== l.toLowerCase()) {
          if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
        } else if (a) {
          if (!e[$a]) switch (l) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence")) break;
              if (u !== n3.rel || e.getAttribute("href") !== (n3.href == null || n3.href === "" ? null : n3.href) || e.getAttribute("crossorigin") !== (n3.crossOrigin == null ? null : n3.crossOrigin) || e.getAttribute("title") !== (n3.title == null ? null : n3.title)) break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (n3.src == null ? null : n3.src) || e.getAttribute("type") !== (n3.type == null ? null : n3.type) || e.getAttribute("crossorigin") !== (n3.crossOrigin == null ? null : n3.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
              return e;
            default:
              return e;
          }
        } else if (l === "input" && e.type === "hidden") {
          var u = n3.name == null ? null : "" + n3.name;
          if (n3.type === "hidden" && e.getAttribute("name") === u) return e;
        } else return e;
        if (e = El(e.nextSibling), e === null) break;
      }
      return null;
    }
    function kh(e, l, t) {
      if (l === "") return null;
      for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = El(e.nextSibling), e === null)) return null;
      return e;
    }
    function rr(e, l) {
      for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = El(e.nextSibling), e === null)) return null;
      return e;
    }
    function bs(e) {
      return e.data === "$?" || e.data === "$~";
    }
    function ps(e) {
      return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
    }
    function $h(e, l) {
      var t = e.ownerDocument;
      if (e.data === "$~") e._reactRetry = l;
      else if (e.data !== "$?" || t.readyState !== "loading") l();
      else {
        var a = function() {
          l(), t.removeEventListener("DOMContentLoaded", a);
        };
        t.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
      }
    }
    function El(e) {
      for (; e != null; e = e.nextSibling) {
        var l = e.nodeType;
        if (l === 1 || l === 3) break;
        if (l === 8) {
          if (l = e.data, l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F") break;
          if (l === "/$" || l === "/&") return null;
        }
      }
      return e;
    }
    var ys = null;
    function mr(e) {
      e = e.nextSibling;
      for (var l = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$" || t === "/&") {
            if (l === 0) return El(e.nextSibling);
            l--;
          } else t !== "$" && t !== "$!" && t !== "$?" && t !== "$~" && t !== "&" || l++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function hr(e) {
      e = e.previousSibling;
      for (var l = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&") {
            if (l === 0) return e;
            l--;
          } else t !== "/$" && t !== "/&" || l++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function xr(e, l, t) {
      switch (l = Vu(t), e) {
        case "html":
          if (e = l.documentElement, !e) throw Error(d(452));
          return e;
        case "head":
          if (e = l.head, !e) throw Error(d(453));
          return e;
        case "body":
          if (e = l.body, !e) throw Error(d(454));
          return e;
        default:
          throw Error(d(451));
      }
    }
    function Un(e) {
      for (var l = e.attributes; l.length; ) e.removeAttributeNode(l[0]);
      Si(e);
    }
    var Ol = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Set();
    function Ju(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var st2 = A.d;
    A.d = { f: Wh, r: Fh, D: Ih, C: Ph, L: e0, m: l0, X: a0, S: t0, M: n0 };
    function Wh() {
      var e = st2.f(), l = Hu();
      return e || l;
    }
    function Fh(e) {
      var l = aa(e);
      l !== null && l.tag === 5 && l.type === "form" ? _o(l) : st2.r(e);
    }
    var wa = typeof document > "u" ? null : document;
    function gr(e, l, t) {
      var a = wa;
      if (a && typeof l == "string" && l) {
        var n3 = jl(l);
        n3 = 'link[rel="' + e + '"][href="' + n3 + '"]', typeof t == "string" && (n3 += '[crossorigin="' + t + '"]'), vr.has(n3) || (vr.add(n3), e = { rel: e, crossOrigin: t, href: l }, a.querySelector(n3) === null && (l = a.createElement("link"), Ve(l, "link", e), Re(l), a.head.appendChild(l)));
      }
    }
    function Ih(e) {
      st2.D(e), gr("dns-prefetch", e, null);
    }
    function Ph(e, l) {
      st2.C(e, l), gr("preconnect", e, l);
    }
    function e0(e, l, t) {
      st2.L(e, l, t);
      var a = wa;
      if (a && e && l) {
        var n3 = 'link[rel="preload"][as="' + jl(l) + '"]';
        l === "image" && t && t.imageSrcSet ? (n3 += '[imagesrcset="' + jl(t.imageSrcSet) + '"]', typeof t.imageSizes == "string" && (n3 += '[imagesizes="' + jl(t.imageSizes) + '"]')) : n3 += '[href="' + jl(e) + '"]';
        var u = n3;
        switch (l) {
          case "style":
            u = Ba(e);
            break;
          case "script":
            u = Ha(e);
        }
        Ol.has(u) || (e = U({ rel: "preload", href: l === "image" && t && t.imageSrcSet ? void 0 : e, as: l }, t), Ol.set(u, e), a.querySelector(n3) !== null || l === "style" && a.querySelector(_n(u)) || l === "script" && a.querySelector(qn(u)) || (l = a.createElement("link"), Ve(l, "link", e), Re(l), a.head.appendChild(l)));
      }
    }
    function l0(e, l) {
      st2.m(e, l);
      var t = wa;
      if (t && e) {
        var a = l && typeof l.as == "string" ? l.as : "script", n3 = 'link[rel="modulepreload"][as="' + jl(a) + '"][href="' + jl(e) + '"]', u = n3;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            u = Ha(e);
        }
        if (!Ol.has(u) && (e = U({ rel: "modulepreload", href: e }, l), Ol.set(u, e), t.querySelector(n3) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (t.querySelector(qn(u))) return;
          }
          a = t.createElement("link"), Ve(a, "link", e), Re(a), t.head.appendChild(a);
        }
      }
    }
    function t0(e, l, t) {
      st2.S(e, l, t);
      var a = wa;
      if (a && e) {
        var n3 = na(a).hoistableStyles, u = Ba(e);
        l = l || "default";
        var c = n3.get(u);
        if (!c) {
          var s = { loading: 0, preload: null };
          if (c = a.querySelector(_n(u))) s.loading = 5;
          else {
            e = U({ rel: "stylesheet", href: e, "data-precedence": l }, t), (t = Ol.get(u)) && js(e, t);
            var f2 = c = a.createElement("link");
            Re(f2), Ve(f2, "link", e), f2._p = new Promise(function(v, y2) {
              f2.onload = v, f2.onerror = y2;
            }), f2.addEventListener("load", function() {
              s.loading |= 1;
            }), f2.addEventListener("error", function() {
              s.loading |= 2;
            }), s.loading |= 4, Ku(c, l, a);
          }
          c = { type: "stylesheet", instance: c, count: 1, state: s }, n3.set(u, c);
        }
      }
    }
    function a0(e, l) {
      st2.X(e, l);
      var t = wa;
      if (t && e) {
        var a = na(t).hoistableScripts, n3 = Ha(e), u = a.get(n3);
        u || (u = t.querySelector(qn(n3)), u || (e = U({ src: e, async: true }, l), (l = Ol.get(n3)) && Ss(e, l), u = t.createElement("script"), Re(u), Ve(u, "link", e), t.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, a.set(n3, u));
      }
    }
    function n0(e, l) {
      st2.M(e, l);
      var t = wa;
      if (t && e) {
        var a = na(t).hoistableScripts, n3 = Ha(e), u = a.get(n3);
        u || (u = t.querySelector(qn(n3)), u || (e = U({ src: e, async: true, type: "module" }, l), (l = Ol.get(n3)) && Ss(e, l), u = t.createElement("script"), Re(u), Ve(u, "link", e), t.head.appendChild(u)), u = { type: "script", instance: u, count: 1, state: null }, a.set(n3, u));
      }
    }
    function br(e, l, t, a) {
      var n3 = (n3 = G.current) ? Ju(n3) : null;
      if (!n3) throw Error(d(446));
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof t.precedence == "string" && typeof t.href == "string" ? (l = Ba(t.href), t = na(n3).hoistableStyles, a = t.get(l), a || (a = { type: "style", instance: null, count: 0, state: null }, t.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (t.rel === "stylesheet" && typeof t.href == "string" && typeof t.precedence == "string") {
            e = Ba(t.href);
            var u = na(n3).hoistableStyles, c = u.get(e);
            if (c || (n3 = n3.ownerDocument || n3, c = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, u.set(e, c), (u = n3.querySelector(_n(e))) && !u._p && (c.instance = u, c.state.loading = 5), Ol.has(e) || (t = { rel: "preload", as: "style", href: t.href, crossOrigin: t.crossOrigin, integrity: t.integrity, media: t.media, hrefLang: t.hrefLang, referrerPolicy: t.referrerPolicy }, Ol.set(e, t), u || u0(n3, e, t, c.state))), l && a === null) throw Error(d(528, ""));
            return c;
          }
          if (l && a !== null) throw Error(d(529, ""));
          return null;
        case "script":
          return l = t.async, t = t.src, typeof t == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Ha(t), t = na(n3).hoistableScripts, a = t.get(l), a || (a = { type: "script", instance: null, count: 0, state: null }, t.set(l, a)), a) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(d(444, e));
      }
    }
    function Ba(e) {
      return 'href="' + jl(e) + '"';
    }
    function _n(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function pr(e) {
      return U({}, e, { "data-precedence": e.precedence, precedence: null });
    }
    function u0(e, l, t, a) {
      e.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = e.createElement("link"), a.preload = l, l.addEventListener("load", function() {
        return a.loading |= 1;
      }), l.addEventListener("error", function() {
        return a.loading |= 2;
      }), Ve(l, "link", t), Re(l), e.head.appendChild(l));
    }
    function Ha(e) {
      return '[src="' + jl(e) + '"]';
    }
    function qn(e) {
      return "script[async]" + e;
    }
    function yr(e, l, t) {
      if (l.count++, l.instance === null) switch (l.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + jl(t.href) + '"]');
          if (a) return l.instance = a, Re(a), a;
          var n3 = U({}, t, { "data-href": t.href, "data-precedence": t.precedence, href: null, precedence: null });
          return a = (e.ownerDocument || e).createElement("style"), Re(a), Ve(a, "style", n3), Ku(a, t.precedence, e), l.instance = a;
        case "stylesheet":
          n3 = Ba(t.href);
          var u = e.querySelector(_n(n3));
          if (u) return l.state.loading |= 4, l.instance = u, Re(u), u;
          a = pr(t), (n3 = Ol.get(n3)) && js(a, n3), u = (e.ownerDocument || e).createElement("link"), Re(u);
          var c = u;
          return c._p = new Promise(function(s, f2) {
            c.onload = s, c.onerror = f2;
          }), Ve(u, "link", a), l.state.loading |= 4, Ku(u, t.precedence, e), l.instance = u;
        case "script":
          return u = Ha(t.src), (n3 = e.querySelector(qn(u))) ? (l.instance = n3, Re(n3), n3) : (a = t, (n3 = Ol.get(u)) && (a = U({}, t), Ss(a, n3)), e = e.ownerDocument || e, n3 = e.createElement("script"), Re(n3), Ve(n3, "link", a), e.head.appendChild(n3), l.instance = n3);
        case "void":
          return null;
        default:
          throw Error(d(443, l.type));
      }
      else l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, Ku(a, t.precedence, e));
      return l.instance;
    }
    function Ku(e, l, t) {
      for (var a = t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n3 = a.length ? a[a.length - 1] : null, u = n3, c = 0; c < a.length; c++) {
        var s = a[c];
        if (s.dataset.precedence === l) u = s;
        else if (u !== n3) break;
      }
      u ? u.parentNode.insertBefore(e, u.nextSibling) : (l = t.nodeType === 9 ? t.head : t, l.insertBefore(e, l.firstChild));
    }
    function js(e, l) {
      e.crossOrigin == null && (e.crossOrigin = l.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = l.referrerPolicy), e.title == null && (e.title = l.title);
    }
    function Ss(e, l) {
      e.crossOrigin == null && (e.crossOrigin = l.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = l.referrerPolicy), e.integrity == null && (e.integrity = l.integrity);
    }
    var ku = null;
    function jr(e, l, t) {
      if (ku === null) {
        var a = /* @__PURE__ */ new Map(), n3 = ku = /* @__PURE__ */ new Map();
        n3.set(t, a);
      } else n3 = ku, a = n3.get(t), a || (a = /* @__PURE__ */ new Map(), n3.set(t, a));
      if (a.has(e)) return a;
      for (a.set(e, null), t = t.getElementsByTagName(e), n3 = 0; n3 < t.length; n3++) {
        var u = t[n3];
        if (!(u[$a] || u[Xe] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
          var c = u.getAttribute(l) || "";
          c = e + c;
          var s = a.get(c);
          s ? s.push(u) : a.set(c, [u]);
        }
      }
      return a;
    }
    function Sr(e, l, t) {
      e = e.ownerDocument || e, e.head.insertBefore(t, l === "title" ? e.querySelector("head > title") : null);
    }
    function i0(e, l, t) {
      if (t === 1 || l.itemProp != null) return false;
      switch (e) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "") break;
          return true;
        case "link":
          if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError) break;
          switch (l.rel) {
            case "stylesheet":
              return e = l.disabled, typeof l.precedence == "string" && e == null;
            default:
              return true;
          }
        case "script":
          if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string") return true;
      }
      return false;
    }
    function Nr(e) {
      return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
    }
    function c0(e, l, t, a) {
      if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (t.state.loading & 4) === 0) {
        if (t.instance === null) {
          var n3 = Ba(a.href), u = l.querySelector(_n(n3));
          if (u) {
            l = u._p, l !== null && typeof l == "object" && typeof l.then == "function" && (e.count++, e = $u.bind(e), l.then(e, e)), t.state.loading |= 4, t.instance = u, Re(u);
            return;
          }
          u = l.ownerDocument || l, a = pr(a), (n3 = Ol.get(n3)) && js(a, n3), u = u.createElement("link"), Re(u);
          var c = u;
          c._p = new Promise(function(s, f2) {
            c.onload = s, c.onerror = f2;
          }), Ve(u, "link", a), t.instance = u;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(t, l), (l = t.state.preload) && (t.state.loading & 3) === 0 && (e.count++, t = $u.bind(e), l.addEventListener("load", t), l.addEventListener("error", t));
      }
    }
    var Ns = 0;
    function s0(e, l) {
      return e.stylesheets && e.count === 0 && Fu(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(t) {
        var a = setTimeout(function() {
          if (e.stylesheets && Fu(e, e.stylesheets), e.unsuspend) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        }, 6e4 + l);
        0 < e.imgBytes && Ns === 0 && (Ns = 62500 * Qh());
        var n3 = setTimeout(function() {
          if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && Fu(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        }, (e.imgBytes > Ns ? 50 : 800) + l);
        return e.unsuspend = t, function() {
          e.unsuspend = null, clearTimeout(a), clearTimeout(n3);
        };
      } : null;
    }
    function $u() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) Fu(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    var Wu = null;
    function Fu(e, l) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Wu = /* @__PURE__ */ new Map(), l.forEach(f0, e), Wu = null, $u.call(e));
    }
    function f0(e, l) {
      if (!(l.state.loading & 4)) {
        var t = Wu.get(e);
        if (t) var a = t.get(null);
        else {
          t = /* @__PURE__ */ new Map(), Wu.set(e, t);
          for (var n3 = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n3.length; u++) {
            var c = n3[u];
            (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (t.set(c.dataset.precedence, c), a = c);
          }
          a && t.set(null, a);
        }
        n3 = l.instance, c = n3.getAttribute("data-precedence"), u = t.get(c) || a, u === a && t.set(null, n3), t.set(c, n3), this.count++, a = $u.bind(this), n3.addEventListener("load", a), n3.addEventListener("error", a), u ? u.parentNode.insertBefore(n3, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n3, e.firstChild)), l.state.loading |= 4;
      }
    }
    var wn = { $$typeof: K2, Provider: null, Consumer: null, _currentValue: _2, _currentValue2: _2, _threadCount: 0 };
    function o0(e, l, t, a, n3, u, c, s, f2) {
      this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = bi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bi(0), this.hiddenUpdates = bi(null), this.identifierPrefix = a, this.onUncaughtError = n3, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f2, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function zr(e, l, t, a, n3, u, c, s, f2, v, y2, N) {
      return e = new o0(e, l, t, c, f2, v, y2, N, s), l = 1, u === true && (l |= 24), u = dl(3, null, null, l), e.current = u, u.stateNode = e, l = tc(), l.refCount++, e.pooledCache = l, l.refCount++, u.memoizedState = { element: a, isDehydrated: t, cache: l }, ic(u), e;
    }
    function Dr(e) {
      return e ? (e = ha, e) : ha;
    }
    function Ar(e, l, t, a, n3, u) {
      n3 = Dr(n3), a.context === null ? a.context = n3 : a.pendingContext = n3, a = bt2(l), a.payload = { element: t }, u = u === void 0 ? null : u, u !== null && (a.callback = u), t = pt2(e, a, l), t !== null && (cl(t, e, l), mn(t, e, l));
    }
    function Tr(e, l) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var t = e.retryLane;
        e.retryLane = t !== 0 && t < l ? t : l;
      }
    }
    function zs(e, l) {
      Tr(e, l), (e = e.alternate) && Tr(e, l);
    }
    function Er(e) {
      if (e.tag === 13 || e.tag === 31) {
        var l = Xt2(e, 67108864);
        l !== null && cl(l, e, 67108864), zs(e, 67108864);
      }
    }
    function Or(e) {
      if (e.tag === 13 || e.tag === 31) {
        var l = vl();
        l = pi(l);
        var t = Xt2(e, l);
        t !== null && cl(t, e, l), zs(e, l);
      }
    }
    var Iu = true;
    function d0(e, l, t, a) {
      var n3 = j.T;
      j.T = null;
      var u = A.p;
      try {
        A.p = 2, Ds(e, l, t, a);
      } finally {
        A.p = u, j.T = n3;
      }
    }
    function r0(e, l, t, a) {
      var n3 = j.T;
      j.T = null;
      var u = A.p;
      try {
        A.p = 8, Ds(e, l, t, a);
      } finally {
        A.p = u, j.T = n3;
      }
    }
    function Ds(e, l, t, a) {
      if (Iu) {
        var n3 = As(a);
        if (n3 === null) ds(e, l, a, Pu, t), Cr(e, a);
        else if (h0(n3, e, l, t, a)) a.stopPropagation();
        else if (Cr(e, a), l & 4 && -1 < m0.indexOf(e)) {
          for (; n3 !== null; ) {
            var u = aa(n3);
            if (u !== null) switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = pe(u.pendingLanes);
                  if (c !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; c; ) {
                      var f2 = 1 << 31 - Ie(c);
                      s.entanglements[1] |= f2, c &= ~f2;
                    }
                    Xl(u), (P & 6) === 0 && (wu = We() + 500, On(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Xt2(u, 2), s !== null && cl(s, u, 2), Hu(), zs(u, 2);
            }
            if (u = As(a), u === null && ds(e, l, a, Pu, t), u === n3) break;
            n3 = u;
          }
          n3 !== null && a.stopPropagation();
        } else ds(e, l, a, null, t);
      }
    }
    function As(e) {
      return e = Ei(e), Ts(e);
    }
    var Pu = null;
    function Ts(e) {
      if (Pu = null, e = ta(e), e !== null) {
        var l = T2(e);
        if (l === null) e = null;
        else {
          var t = l.tag;
          if (t === 13) {
            if (e = w(l), e !== null) return e;
            e = null;
          } else if (t === 31) {
            if (e = Z(l), e !== null) return e;
            e = null;
          } else if (t === 3) {
            if (l.stateNode.current.memoizedState.isDehydrated) return l.tag === 3 ? l.stateNode.containerInfo : null;
            e = null;
          } else l !== e && (e = null);
        }
      }
      return Pu = e, null;
    }
    function Mr(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (ri()) {
            case Zn:
              return 2;
            case Vn:
              return 8;
            case wt2:
            case mi:
              return 32;
            case Jn:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Es = false, Mt2 = null, Ct2 = null, Ut2 = null, Bn = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), _t2 = [], m0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Cr(e, l) {
      switch (e) {
        case "focusin":
        case "focusout":
          Mt2 = null;
          break;
        case "dragenter":
        case "dragleave":
          Ct2 = null;
          break;
        case "mouseover":
        case "mouseout":
          Ut2 = null;
          break;
        case "pointerover":
        case "pointerout":
          Bn.delete(l.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Hn.delete(l.pointerId);
      }
    }
    function Rn(e, l, t, a, n3, u) {
      return e === null || e.nativeEvent !== u ? (e = { blockedOn: l, domEventName: t, eventSystemFlags: a, nativeEvent: u, targetContainers: [n3] }, l !== null && (l = aa(l), l !== null && Er(l)), e) : (e.eventSystemFlags |= a, l = e.targetContainers, n3 !== null && l.indexOf(n3) === -1 && l.push(n3), e);
    }
    function h0(e, l, t, a, n3) {
      switch (l) {
        case "focusin":
          return Mt2 = Rn(Mt2, e, l, t, a, n3), true;
        case "dragenter":
          return Ct2 = Rn(Ct2, e, l, t, a, n3), true;
        case "mouseover":
          return Ut2 = Rn(Ut2, e, l, t, a, n3), true;
        case "pointerover":
          var u = n3.pointerId;
          return Bn.set(u, Rn(Bn.get(u) || null, e, l, t, a, n3)), true;
        case "gotpointercapture":
          return u = n3.pointerId, Hn.set(u, Rn(Hn.get(u) || null, e, l, t, a, n3)), true;
      }
      return false;
    }
    function Ur(e) {
      var l = ta(e.target);
      if (l !== null) {
        var t = T2(l);
        if (t !== null) {
          if (l = t.tag, l === 13) {
            if (l = w(t), l !== null) {
              e.blockedOn = l, Zs(e.priority, function() {
                Or(t);
              });
              return;
            }
          } else if (l === 31) {
            if (l = Z(t), l !== null) {
              e.blockedOn = l, Zs(e.priority, function() {
                Or(t);
              });
              return;
            }
          } else if (l === 3 && t.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function ei(e) {
      if (e.blockedOn !== null) return false;
      for (var l = e.targetContainers; 0 < l.length; ) {
        var t = As(e.nativeEvent);
        if (t === null) {
          t = e.nativeEvent;
          var a = new t.constructor(t.type, t);
          Ti = a, t.target.dispatchEvent(a), Ti = null;
        } else return l = aa(t), l !== null && Er(l), e.blockedOn = t, false;
        l.shift();
      }
      return true;
    }
    function _r(e, l, t) {
      ei(e) && t.delete(l);
    }
    function x0() {
      Es = false, Mt2 !== null && ei(Mt2) && (Mt2 = null), Ct2 !== null && ei(Ct2) && (Ct2 = null), Ut2 !== null && ei(Ut2) && (Ut2 = null), Bn.forEach(_r), Hn.forEach(_r);
    }
    function li(e, l) {
      e.blockedOn === l && (e.blockedOn = null, Es || (Es = true, o2.unstable_scheduleCallback(o2.unstable_NormalPriority, x0)));
    }
    var ti = null;
    function qr(e) {
      ti !== e && (ti = e, o2.unstable_scheduleCallback(o2.unstable_NormalPriority, function() {
        ti === e && (ti = null);
        for (var l = 0; l < e.length; l += 3) {
          var t = e[l], a = e[l + 1], n3 = e[l + 2];
          if (typeof a != "function") {
            if (Ts(a || t) === null) continue;
            break;
          }
          var u = aa(t);
          u !== null && (e.splice(l, 3), l -= 3, Ac(u, { pending: true, data: n3, method: t.method, action: a }, a, n3));
        }
      }));
    }
    function Ra(e) {
      function l(f2) {
        return li(f2, e);
      }
      Mt2 !== null && li(Mt2, e), Ct2 !== null && li(Ct2, e), Ut2 !== null && li(Ut2, e), Bn.forEach(l), Hn.forEach(l);
      for (var t = 0; t < _t2.length; t++) {
        var a = _t2[t];
        a.blockedOn === e && (a.blockedOn = null);
      }
      for (; 0 < _t2.length && (t = _t2[0], t.blockedOn === null); ) Ur(t), t.blockedOn === null && _t2.shift();
      if (t = (e.ownerDocument || e).$$reactFormReplay, t != null) for (a = 0; a < t.length; a += 3) {
        var n3 = t[a], u = t[a + 1], c = n3[ll] || null;
        if (typeof u == "function") c || qr(t);
        else if (c) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (n3 = u, c = u[ll] || null) s = c.formAction;
            else if (Ts(n3) !== null) continue;
          } else s = c.action;
          typeof s == "function" ? t[a + 1] = s : (t.splice(a, 3), a -= 3), qr(t);
        }
      }
    }
    function wr() {
      function e(u) {
        u.canIntercept && u.info === "react-transition" && u.intercept({ handler: function() {
          return new Promise(function(c) {
            return n3 = c;
          });
        }, focusReset: "manual", scroll: "manual" });
      }
      function l() {
        n3 !== null && (n3(), n3 = null), a || setTimeout(t, 20);
      }
      function t() {
        if (!a && !navigation.transition) {
          var u = navigation.currentEntry;
          u && u.url != null && navigation.navigate(u.url, { state: u.getState(), info: "react-transition", history: "replace" });
        }
      }
      if (typeof navigation == "object") {
        var a = false, n3 = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(t, 100), function() {
          a = true, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), n3 !== null && (n3(), n3 = null);
        };
      }
    }
    function Os(e) {
      this._internalRoot = e;
    }
    ai.prototype.render = Os.prototype.render = function(e) {
      var l = this._internalRoot;
      if (l === null) throw Error(d(409));
      var t = l.current, a = vl();
      Ar(t, a, e, l, null, null);
    }, ai.prototype.unmount = Os.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var l = e.containerInfo;
        Ar(e.current, 2, null, e, null, null), Hu(), l[la] = null;
      }
    };
    function ai(e) {
      this._internalRoot = e;
    }
    ai.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var l = Ls();
        e = { blockedOn: null, target: e, priority: l };
        for (var t = 0; t < _t2.length && l !== 0 && l < _t2[t].priority; t++) ;
        _t2.splice(t, 0, e), t === 0 && Ur(e);
      }
    };
    var Br = p.version;
    if (Br !== "19.2.4") throw Error(d(527, Br, "19.2.4"));
    A.findDOMNode = function(e) {
      var l = e._reactInternals;
      if (l === void 0) throw typeof e.render == "function" ? Error(d(188)) : (e = Object.keys(e).join(","), Error(d(268, e)));
      return e = se(l), e = e !== null ? gl(e) : null, e = e === null ? null : e.stateNode, e;
    };
    var v0 = { bundleType: 0, version: "19.2.4", rendererPackageName: "react-dom", currentDispatcherRef: j, reconcilerVersion: "19.2.4" };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var ni = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!ni.isDisabled && ni.supportsFiber) try {
        Bt2 = ni.inject(v0), Fe = ni;
      } catch {
      }
    }
    return Xn.createRoot = function(e, l) {
      if (!z(e)) throw Error(d(299));
      var t = false, a = "", n3 = Lo, u = Zo, c = Vo;
      return l != null && (l.unstable_strictMode === true && (t = true), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (n3 = l.onUncaughtError), l.onCaughtError !== void 0 && (u = l.onCaughtError), l.onRecoverableError !== void 0 && (c = l.onRecoverableError)), l = zr(e, 1, false, null, null, t, a, null, n3, u, c, wr), e[la] = l.current, os(e), new Os(l);
    }, Xn.hydrateRoot = function(e, l, t) {
      if (!z(e)) throw Error(d(299));
      var a = false, n3 = "", u = Lo, c = Zo, s = Vo, f2 = null;
      return t != null && (t.unstable_strictMode === true && (a = true), t.identifierPrefix !== void 0 && (n3 = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (c = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.formState !== void 0 && (f2 = t.formState)), l = zr(e, 1, true, l, t ?? null, a, n3, f2, u, c, s, wr), l.context = Dr(null), t = l.current, a = vl(), a = pi(a), n3 = bt2(a), n3.callback = null, pt2(t, n3, a), t = a, l.current.lanes = t, ka(l, t), Xl(l), e[la] = l.current, os(e), new ai(l);
    }, Xn.version = "19.2.4", Xn;
  }
  var Vr;
  function R0() {
    if (Vr) return Cs.exports;
    Vr = 1;
    function o2() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o2);
      } catch (p) {
        console.error(p);
      }
    }
    return o2(), Cs.exports = H0(), Cs.exports;
  }
  var Y0 = R0();
  var G0 = et(Y0);
  var X0 = ({ onNavigate: o2 }) => {
    const [p, D2] = m.useState(false), d = (z, T2) => {
      T2.preventDefault(), o2 && o2(z), D2(false);
    };
    return i.jsx("header", { className: "font-sans sticky top-0 z-50 bg-[#00338D] text-white shadow-lg h-20 md:h-24", children: i.jsxs("div", { className: "container mx-auto px-4 h-full flex items-center justify-between relative", children: [i.jsxs("div", { className: "flex items-center h-full flex-shrink-0 lg:flex-initial z-20", children: [i.jsxs("a", { href: "/", onClick: (z) => {
      z.preventDefault(), d("home", z);
    }, className: "h-full flex items-center gap-2 group lg:mr-8", "aria-label": "Ir para p\xE1gina inicial", children: [i.jsx("img", { src: "./logo.png", alt: "DamerBots Logo", className: "h-16 w-auto md:h-16 drop-shadow-md group-hover:scale-105 transition-transform object-contain flex-shrink-0", width: "64", height: "64" }), i.jsx("span", { className: "font-display font-black text-xl tracking-tighter text-white lg:hidden", children: "DAMERBOTS" })] }), i.jsx("a", { href: "https://instagram.com/damerbots", target: "_blank", rel: "noopener noreferrer", className: "lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors text-white", "aria-label": "Instagram", children: i.jsx(Vt, { size: 22 }) }), i.jsxs("nav", { className: "hidden lg:flex items-center space-x-8 h-full", children: [i.jsx("a", { href: "#", onClick: (z) => d("home", z), className: "font-slab font-bold text-lg uppercase tracking-wide hover:text-white transition-colors", children: "In\xEDcio" }), i.jsxs("div", { className: "relative group flex items-center h-full", children: [i.jsxs("a", { href: "#", className: "flex items-center gap-1 font-slab font-bold text-lg uppercase tracking-wide hover:text-white transition-colors py-2", children: ["Sobre N\xF3s ", i.jsx(qt, { size: 14, strokeWidth: 3 })] }), i.jsxs("div", { className: "absolute top-full left-0 w-56 bg-white border-t-4 border-[#00338D] shadow-xl py-2 hidden group-hover:block z-50 rounded-b-sm", children: [i.jsx("a", { href: "#", onClick: (z) => d("story", z), className: "block px-4 py-3 text-sm text-[#00338D] hover:bg-[#00338D]/10 font-bold uppercase", children: "Nossa Hist\xF3ria" }), i.jsx("a", { href: "#", onClick: (z) => d("leadership", z), className: "block px-4 py-3 text-sm text-[#00338D] hover:bg-[#00338D]/10 font-bold uppercase", children: "Equipe de Lideran\xE7a" }), i.jsx("a", { href: "#", onClick: (z) => d("teams", z), className: "block px-4 py-3 text-sm text-[#00338D] hover:bg-[#00338D]/10 font-bold uppercase", children: "Rob\xF4s" }), i.jsx("a", { href: "#", onClick: (z) => d("conquistas", z), className: "block px-4 py-3 text-sm text-[#00338D] hover:bg-[#00338D]/10 font-bold uppercase", children: "Conquistas" })] })] }), i.jsx("a", { href: "#", onClick: (z) => d("photos", z), className: "font-slab font-bold text-lg uppercase tracking-wide hover:text-white transition-colors", children: "Fotos" }), i.jsx("a", { href: "#", onClick: (z) => d("blog", z), className: "font-slab font-bold text-lg uppercase tracking-wide hover:text-white transition-colors", children: "Blog" }), i.jsx("a", { href: "#", onClick: (z) => d("support", z), className: "font-slab font-bold text-lg uppercase tracking-wide hover:text-white transition-colors", children: "Apoie" }), i.jsx("a", { href: "https://instagram.com/damerbots", target: "_blank", rel: "noopener noreferrer", className: "flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors text-white", "aria-label": "Instagram", children: i.jsx(Vt, { size: 22 }) })] })] }), i.jsx("div", { className: "hidden md:block absolute right-0 top-0 bottom-0 w-[100px] bg-white skew-x-[-12deg] mr-[-40px] opacity-90 border-l-4 border-white" }), i.jsx("button", { className: "lg:hidden p-2 text-white ml-auto z-30", onClick: () => D2(!p), children: p ? i.jsx(re, { size: 28 }) : i.jsx(Zt, { size: 28 }) }), p && i.jsxs("div", { className: "absolute top-full left-0 right-0 bg-[#00338D] border-t border-white/20 p-6 flex flex-col space-y-4 lg:hidden shadow-xl", children: [i.jsx("a", { href: "#", onClick: (z) => d("home", z), className: "text-white font-slab font-bold uppercase hover:text-white/80", children: "In\xEDcio" }), i.jsx("a", { href: "#", onClick: (z) => d("story", z), className: "text-white font-slab font-bold uppercase pl-4 hover:text-white/80", children: "Nossa Hist\xF3ria" }), i.jsx("a", { href: "#", onClick: (z) => d("leadership", z), className: "text-white font-slab font-bold uppercase pl-4 hover:text-white/80", children: "Lideran\xE7a" }), i.jsx("a", { href: "#", onClick: (z) => d("teams", z), className: "text-white font-slab font-bold uppercase pl-4 hover:text-white/80", children: "Rob\xF4s" }), i.jsx("a", { href: "#", onClick: (z) => d("photos", z), className: "text-white font-slab font-bold uppercase hover:text-white/80", children: "Fotos" }), i.jsx("a", { href: "#", onClick: (z) => d("conquistas", z), className: "text-white font-slab font-bold uppercase pl-4 hover:text-white/80", children: "Conquistas" }), i.jsx("a", { href: "#", onClick: (z) => d("blog", z), className: "text-white font-slab font-bold uppercase hover:text-white/80", children: "Blog" }), i.jsx("a", { href: "#", onClick: (z) => d("support", z), className: "text-white font-slab font-bold uppercase hover:text-white/80", children: "Apoie" })] })] }) });
  };
  var Q0 = () => {
    var Ml;
    const [o2, p] = m.useState(0), [D2, d] = m.useState(false), [z, T2] = m.useState(0), [w, Z] = m.useState(0), [Se, se] = m.useState(0), gl = m.useRef(null), U = [{ image: "./foto1.png.jpg", title: "Damer", subtitle: "Bots", description: "Construindo o futuro com treinamento de elite, disciplina e cultura vencedora." }, { image: "./foto2.png.jpg", title: "Ci\xEAncia", subtitle: "Inova\xE7\xE3o & Tecnologia", description: "Evento com nossa equipe." }, { image: "/foto3.png.jpg", title: "Todos", subtitle: "Juntos", description: "Celebrando juntos." }], me = (he) => {
      he.preventDefault(), d(true), T2(he.clientX), Z(he.clientX);
    }, Oe = (he) => {
      if (!D2) return;
      Z(he.clientX);
      const we = z - he.clientX;
      se(we);
    }, Ne = () => {
      if (!D2) return;
      const he = z - w;
      Math.abs(he) > 50 && (he > 0 ? p((K2) => (K2 + 1) % U.length) : p((K2) => (K2 - 1 + U.length) % U.length)), d(false), T2(0), Z(0), se(0);
    }, H = () => {
      D2 && (d(false), T2(0), Z(0), se(0));
    };
    return i.jsx("div", { className: "flex flex-col font-sans", children: i.jsxs("div", { ref: gl, className: `relative w-full h-[550px] md:h-[700px] flex items-center overflow-hidden select-none ${D2 ? "cursor-grabbing" : "cursor-grab"}`, onMouseDown: me, onMouseMove: Oe, onMouseUp: Ne, onMouseLeave: H, children: [i.jsx("div", { className: "absolute inset-0 flex", style: { transform: `translateX(${-o2 * 100 + Se / (((Ml = gl.current) == null ? void 0 : Ml.offsetWidth) || 1) * 100}%)`, transition: D2 ? "none" : "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)" }, children: U.map((he, we) => i.jsxs("div", { className: "min-w-full h-full relative", children: [i.jsx("img", { src: he.image, alt: `${he.title} ${he.subtitle}`, className: "w-full h-full object-cover object-center", loading: we === 0 ? "eager" : "lazy", fetchPriority: we === 0 ? "high" : void 0 }), i.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-[#00338D]/90 via-[#00338D]/40 to-transparent" })] }, we)) }), i.jsxs("div", { className: "relative container mx-auto px-6 md:px-12 flex flex-col items-start justify-center h-full z-10", children: [i.jsx("div", { className: "w-24 h-2 bg-white mb-8" }), i.jsx("div", { className: "overflow-hidden", children: i.jsxs("h1", { className: "text-5xl md:text-7xl lg:text-8xl font-slab font-bold text-white uppercase tracking-tight mb-4 leading-tight shadow-sm animate-slideIn select-none", children: [U[o2].title, i.jsx("br", {}), U[o2].subtitle] }, o2) }), i.jsx("div", { className: "overflow-hidden", children: i.jsx("p", { className: "text-xl md:text-2xl font-medium text-white/90 max-w-lg leading-relaxed animate-slideIn select-none", children: U[o2].description }, `desc-${o2}`) })] }), i.jsx("div", { className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3", children: U.map((he, we) => i.jsx("button", { onClick: () => p(we), className: `w-3 h-3 rounded-full transition-all duration-300 ${o2 === we ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"}`, "aria-label": `Ir para slide ${we + 1}` }, we)) })] }) });
  };
  var L0 = [{ value: "25+", label: "Campeonatos Nacionais", description: "Competindo e vencendo nos mais altos n\xEDveis", image: "./foto1.png.jpg" }, { value: "100+", label: "Vit\xF3rias em Torneios", description: "Desempenho consistente em grandes eventos", image: "./foto2.png.jpg" }, { value: "10+", label: "Equipes Rankeadas", description: "Reconhecimento como um dos melhores programas", image: "./foto2.png.jpg" }, { value: "50+", label: "Atletas Selecionados", description: "Destaque em competi\xE7\xF5es de elite", image: "./foto1.png.jpg" }];
  var Z0 = [{ title: "Cultura vencedora da DamerBots: li\xE7\xF5es al\xE9m do campo", date: "22 de janeiro de 2024", category: "ARTIGO", image: "https://images.unsplash.com/photo-1589579234096-258066bb74b4?auto=format&fit=crop&q=80&w=600" }, { title: "O futuro do recrutamento: insights da DamerBots", date: "20 de janeiro de 2024", category: "ARTIGO", image: "https://images.unsplash.com/photo-1504124611568-154df6373e86?auto=format&fit=crop&q=80&w=600" }, { title: "A ci\xEAncia do sucesso: como a DamerBots forma campe\xF5es", date: "15 de janeiro de 2024", category: "ARTIGO", image: "https://images.unsplash.com/photo-1593510955909-51a43d937a09?auto=format&fit=crop&q=80&w=600" }];
  var Ir = { coCaptains: [{ name: "Taseer Badar", title: "CO-CAPTAINS", image: "./perfil.png", instagram: "https://instagram.com" }, { name: "Mohsin Malik", title: "CO-CAPTAINS", image: "./perfil.png", instagram: "https://instagram.com" }], team: [], primaryLeads: [{ name: "Carlos Avila", title: "HARDWARE DESIGN", image: "./perfil.png", instagram: "https://instagram.com" }, { name: "Jillian Robbins", title: "HARDWARE ELECTRICAL", image: "./perfil.png", instagram: "https://instagram.com" }, { name: "Adam Kermally", title: "HARDWARE FABRICATION", image: "./perfil.png", instagram: "https://instagram.com" }, { name: "Sarah O-H", title: "SOFTWARE ROBOT", image: "./perfil.png", instagram: "https://instagram.com" }, { name: "Liam S", title: "SOFTWARE SCOUTING: FRONT-END", image: "./perfil.png", instagram: "https://instagram.com" }, { name: "Andy Z", title: "SOFTWARE SCOUTING: BACK-END", image: "./perfil.png", instagram: "https://instagram.com" }, { name: "Kyle L", title: "BUSINESS AND MEDIA", image: "./perfil.png", instagram: "https://instagram.com" }], secondaryLeads: [{ name: "Neeraj C", title: "STRATEGY", image: "./perfil.png", instagram: "https://instagram.com" }, { name: "Amy S", title: "IMPACT AWARD", image: "./perfil.png", instagram: "https://instagram.com" }] };
  var Jr = () => i.jsx("section", { className: "bg-[#00338D] border-y border-white/20 hidden md:block", children: i.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4", children: L0.map((o2, p) => i.jsxs("div", { className: "relative h-64 px-1 py-px bg-white", children: [i.jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: { backgroundImage: `url(${o2.image})` } }), i.jsx("div", { className: "absolute inset-0 bg-[#00338D]/10 hidden md:block" })] }, p)) }) });
  var V0 = () => i.jsx("section", { className: "py-20 md:py-32 bg-white font-sans", children: i.jsx("div", { className: "container mx-auto px-6 md:px-12", children: i.jsxs("div", { className: "flex flex-row lg:flex-row items-center gap-4 lg:gap-16", children: [i.jsx("div", { className: "w-1/2 flex-shrink-0 lg:w-1/2 min-w-0", children: i.jsxs("div", { className: "relative", children: [i.jsx("div", { className: "absolute -inset-4 border-2 border-[#00338D] hidden md:block" }), i.jsx("img", { src: "./foto1.png.jpg", alt: "Nossa equipe DamerBots", className: "relative w-full h-auto shadow-2xl z-10", loading: "lazy", width: "600", height: "400" })] }) }), i.jsxs("div", { className: "w-1/2 flex-1 min-w-0 lg:w-1/2 lg:flex-initial", children: [i.jsx("h2", { className: "text-xl md:text-4xl md:text-6xl font-slab font-bold text-[#00338D] mb-2 lg:mb-8", children: "Nossa Miss\xE3o" }), i.jsxs("p", { className: "text-sm lg:text-xl text-[#00338D] leading-relaxed font-light", children: [i.jsx("span", { className: "font-bold text-[#00338D]", children: "DamerBots" }), " \xE9 dedicada a desenvolver a pr\xF3xima gera\xE7\xE3o de ", i.jsx("span", { className: "font-bold text-[#00338D]", children: "campe\xF5es" }), ", dentro e fora do campo. Oferecemos aos jovens atletas acesso a ", i.jsx("span", { className: "font-bold text-[#00338D]", children: "treinamento de elite" }), ", ", i.jsx("span", { className: "font-bold text-[#00338D]", children: "competi\xE7\xF5es nacionais" }), " e uma cultura baseada em ", i.jsx("span", { className: "font-bold text-[#00338D]", children: "disciplina" }), ", ", i.jsx("span", { className: "font-bold text-[#00338D]", children: "trabalho em equipe" }), " e ", i.jsx("span", { className: "font-bold text-[#00338D]", children: "lideran\xE7a" }), ", preparando-os para ", i.jsx("span", { className: "font-bold text-[#00338D]", children: "sucesso no esporte e na vida" }), "."] }), i.jsx("div", { className: "mt-4 lg:mt-10", children: i.jsx("div", { className: "h-1 w-16 lg:w-24 bg-[#00338D]" }) })] })] }) }) });
  var Je = { BLOG_POSTS: "damerbots_blog_posts", SUBSCRIBERS: "damerbots_subscribers", LEADERSHIP_TEAM: "damerbots_leadership_team", ROBOTS: "damerbots_robots", OUR_STORY: "damerbots_our_story", ACHIEVEMENTS: "damerbots_achievements", GALLERY_PHOTOS: "damerbots_gallery_photos" };
  var Qn = () => {
    if (typeof window > "u") return [];
    const o2 = localStorage.getItem(Je.BLOG_POSTS);
    return o2 ? JSON.parse(o2) : [];
  };
  var J0 = (o2) => {
    const p = Qn(), D2 = p.findIndex((d) => d.id === o2.id);
    D2 >= 0 ? p[D2] = o2 : p.push(o2), localStorage.setItem(Je.BLOG_POSTS, JSON.stringify(p));
  };
  var K0 = (o2) => {
    const p = Qn().filter((D2) => D2.id !== o2);
    localStorage.setItem(Je.BLOG_POSTS, JSON.stringify(p));
  };
  var Hs = () => {
    if (typeof window > "u") return [];
    const o2 = localStorage.getItem(Je.SUBSCRIBERS);
    return o2 ? JSON.parse(o2) : [];
  };
  var k0 = (o2) => {
    const p = Hs();
    p.find((D2) => D2.email.toLowerCase() === o2.toLowerCase()) || (p.push({ email: o2, subscribedAt: Date.now() }), localStorage.setItem(Je.SUBSCRIBERS, JSON.stringify(p)));
  };
  var Kr = async (o2, p) => {
    const D2 = Hs();
    console.log(`\u{1F4E7} Enviando email para ${D2.length} assinantes:`), console.log(`Assunto: ${o2}`), console.log(`Mensagem: ${p}`), D2.forEach((d) => {
      console.log(`  \u2192 ${d.email}`);
    });
  };
  var Pr = () => {
    if (typeof window > "u") return null;
    const o2 = localStorage.getItem(Je.LEADERSHIP_TEAM);
    return o2 ? JSON.parse(o2) : null;
  };
  var $0 = (o2) => {
    localStorage.setItem(Je.LEADERSHIP_TEAM, JSON.stringify(o2));
  };
  var si = () => {
    if (typeof window > "u") return [];
    const o2 = localStorage.getItem(Je.ROBOTS);
    return o2 ? JSON.parse(o2) : [];
  };
  var W0 = (o2) => {
    const p = si(), D2 = p.findIndex((d) => d.id === o2.id);
    D2 >= 0 ? p[D2] = o2 : p.push(o2), localStorage.setItem(Je.ROBOTS, JSON.stringify(p));
  };
  var F0 = (o2) => {
    const p = si().filter((D2) => D2.id !== o2);
    localStorage.setItem(Je.ROBOTS, JSON.stringify(p));
  };
  var em = () => {
    if (typeof window > "u") return null;
    const o2 = localStorage.getItem(Je.OUR_STORY);
    return o2 ? JSON.parse(o2) : null;
  };
  var I0 = (o2) => {
    localStorage.setItem(Je.OUR_STORY, JSON.stringify(o2));
  };
  var Rs = () => {
    if (typeof window > "u") return [];
    const o2 = localStorage.getItem(Je.ACHIEVEMENTS);
    return o2 ? JSON.parse(o2) : [];
  };
  var P0 = (o2) => {
    const p = Rs(), D2 = p.findIndex((d) => d.id === o2.id);
    D2 >= 0 ? p[D2] = o2 : p.push(o2), localStorage.setItem(Je.ACHIEVEMENTS, JSON.stringify(p));
  };
  var ex = (o2) => {
    const p = Rs().filter((D2) => D2.id !== o2);
    localStorage.setItem(Je.ACHIEVEMENTS, JSON.stringify(p));
  };
  var ci = () => {
    if (typeof window > "u") return [];
    const o2 = localStorage.getItem(Je.GALLERY_PHOTOS);
    return o2 ? JSON.parse(o2) : [];
  };
  var lx = (o2) => {
    localStorage.setItem(Je.GALLERY_PHOTOS, JSON.stringify(o2));
  };
  function lm(o2) {
    if (!o2 || typeof o2 != "string") return null;
    const p = o2.trim(), D2 = p.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (D2) return D2[1];
    const d = p.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
    return d ? d[1] : null;
  }
  function tm(o2) {
    const p = lm(o2);
    return p ? `https://www.youtube.com/embed/${p}` : null;
  }
  function qs(o2) {
    return !!lm(o2);
  }
  var tx = { since: "Desde 2017", title: "Construindo Oportunidades, Desenvolvendo Campe\xF5es", paragraphs: ["Inspirados pelo amor ao jogo, DamerBots foi fundada. O que come\xE7ou como uma \xFAnica equipe juvenil cresceu e se tornou uma plataforma que oferece aos jovens atletas a oportunidade de crescer dentro e fora do campo.", "Hoje, DamerBots conta com 140+ equipes, impactando mais de 1.000 fam\xEDlias, formando atletas, construindo l\xEDderes e criando um legado de campe\xF5es."] };
  var kr = ({ onNavigate: o2, showReadMore: p = true }) => {
    const d = em() || tx, z = d.video ? tm(d.video) : null;
    return i.jsx("section", { className: "py-20 md:py-32 bg-gray-50 font-sans", children: i.jsx("div", { className: "container mx-auto px-6 md:px-12", children: i.jsxs("div", { className: "flex flex-col lg:flex-row items-start gap-16", children: [i.jsxs("div", { className: "w-full lg:w-2/3 max-w-3xl", children: [i.jsx("span", { className: "block text-[#00338D] font-bold uppercase tracking-widest text-sm mb-2", children: d.since }), i.jsx("h2", { className: "text-4xl md:text-6xl font-slab font-bold text-[#00338D] mb-8", children: d.title }), i.jsx("div", { className: "text-lg md:text-xl text-gray-600 leading-relaxed font-light space-y-6", children: d.paragraphs.map((T2, w) => i.jsx("p", { children: T2 }, w)) }), p && o2 && i.jsx("div", { className: "mt-10", children: i.jsx("button", { onClick: () => o2("story"), className: "text-[#00338D] font-bold uppercase tracking-widest border-b-2 border-[#00338D] pb-1 hover:text-[#C60C30] hover:border-[#C60C30] transition-colors", children: "Ler hist\xF3ria completa" }) })] }), z && i.jsx("div", { className: "w-full lg:w-1/3 flex-shrink-0", children: i.jsx("div", { className: "relative w-full aspect-video rounded-lg overflow-hidden bg-black shadow-lg", children: i.jsx("iframe", { src: z, title: "Nossa Hist\xF3ria", className: "absolute inset-0 w-full h-full", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }) }) }), d.image && !z && i.jsx("div", { className: "w-full lg:w-1/3 flex-shrink-0", children: i.jsx("img", { src: d.image, alt: "Nossa Hist\xF3ria", className: "w-full h-auto object-cover rounded-lg shadow-lg", loading: "lazy" }) })] }) }) });
  };
  var ax = ({ onReadMore: o2 }) => {
    const [p, D2] = m.useState([]);
    return m.useEffect(() => {
      const z = Qn().filter((T2) => T2.title && T2.title.trim() !== "").sort((T2, w) => (w.createdAt || 0) - (T2.createdAt || 0)).slice(0, 3);
      D2(z);
    }, []), p.length === 0 ? null : i.jsx("section", { className: "py-24 bg-white", children: i.jsxs("div", { className: "container mx-auto px-6 md:px-12", children: [i.jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center md:items-end mb-16 border-b border-[#00338D]/20 pb-8", children: [i.jsxs("div", { className: "w-full md:w-auto text-center md:text-left", children: [i.jsx("h2", { className: "text-4xl md:text-5xl font-slab font-bold text-[#00338D] mb-4", children: "\xDAltimas Not\xEDcias" }), i.jsx("div", { className: "w-24 h-1 bg-[#00338D] mx-auto md:mx-0" })] }), i.jsx("button", { onClick: o2, className: "hidden md:block bg-transparent border-2 border-[#00338D] text-[#00338D] px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-[#00338D] hover:text-white transition-colors", children: "Ver Mais" })] }), i.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10", children: p.map((d, z) => i.jsxs("div", { className: `group cursor-pointer flex flex-col h-full ${z >= 2 ? "hidden md:flex" : ""}`, onClick: o2, children: [i.jsxs("div", { className: "relative mb-3 md:mb-6", children: [i.jsx("div", { className: "absolute inset-0 border-2 border-[#00338D] translate-x-2 translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block" }), i.jsx("div", { className: "relative overflow-hidden h-28 md:h-64 shadow-md bg-white", children: i.jsx("img", { src: d.image, alt: d.title, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105", loading: "lazy", width: "600", height: "256" }) })] }), i.jsxs("div", { className: "flex flex-col flex-grow min-w-0", children: [i.jsxs("div", { className: "flex items-center gap-2 mb-1 md:mb-3 text-[#00338D] text-[10px] md:text-xs font-bold uppercase tracking-widest", children: [i.jsx(Lt, { size: 10, className: "text-[#00338D] flex-shrink-0 md:w-auto md:h-auto" }), i.jsx("span", { className: "truncate", children: d.date })] }), i.jsx("h3", { className: "text-sm md:text-xl font-slab font-bold text-[#00338D] mb-2 md:mb-3 leading-snug group-hover:text-[#002266] transition-colors line-clamp-2 md:line-clamp-none", children: d.title }), i.jsx("div", { className: "mt-auto pt-2 md:pt-4", children: i.jsxs("span", { className: "inline-flex items-center text-[#00338D] font-bold text-xs md:text-sm uppercase tracking-wider group-hover:text-[#002266] transition-colors", children: ["Ler mais ", i.jsx(Ot, { size: 12, className: "ml-1 flex-shrink-0 md:ml-2 md:w-4 md:h-4" })] }) })] })] }, d.id || z)) }), i.jsx("div", { className: "mt-12 text-center md:hidden", children: i.jsx("button", { onClick: o2, className: "bg-[#00338D] text-white px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-widest w-full", children: "Ver Mais" }) })] }) });
  };
  var el = (o2) => typeof o2 != "string" ? "" : o2.replace(/[<>]/g, "").replace(/javascript:/gi, "").replace(/on\w+=/gi, "").trim();
  var nx = (o2) => {
    if (!o2 || typeof o2 != "string") return false;
    try {
      const p = new URL(o2), D2 = ["http:", "https:"];
      return !(p.protocol && !D2.includes(p.protocol) || o2.toLowerCase().startsWith("javascript:") || o2.toLowerCase().startsWith("data:"));
    } catch {
      return o2.startsWith("/") || o2.startsWith("./");
    }
  };
  var ea = (o2) => !o2 || typeof o2 != "string" ? "" : nx(o2) ? o2 : "";
  var am = (o2) => !o2 || typeof o2 != "string" ? false : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o2.toLowerCase());
  var ux = (o2) => {
    if (!o2 || typeof o2 != "string") return "";
    const p = o2.toLowerCase().trim();
    return am(p) ? p : "";
  };
  var wl = (o2, p = 5, D2 = 6e4) => {
    if (typeof window > "u") return true;
    const d = `rate_limit_${o2}`, z = Date.now(), T2 = localStorage.getItem(d);
    if (!T2) return localStorage.setItem(d, JSON.stringify({ count: 1, resetAt: z + D2 })), true;
    try {
      const w = JSON.parse(T2);
      return z > w.resetAt ? (localStorage.setItem(d, JSON.stringify({ count: 1, resetAt: z + D2 })), true) : w.count >= p ? false : (w.count++, localStorage.setItem(d, JSON.stringify(w)), true);
    } catch {
      return true;
    }
  };
  var ix = (o2) => {
    if (!o2 || typeof o2 != "string") return "";
    let p = o2.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
    return p = p.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, ""), p = p.replace(/javascript:/gi, "").replace(/data:/gi, ""), p;
  };
  async function cx(o2) {
    const D2 = new TextEncoder().encode(o2), d = await crypto.subtle.digest("SHA-256", D2);
    return Array.from(new Uint8Array(d)).map((T2) => T2.toString(16).padStart(2, "0")).join("");
  }
  async function sx(o2) {
    if (!o2 || typeof o2 != "string") return false;
    const p = o2.trim();
    if (p.length < 3) return false;
    try {
      return await cx(p) === "033ecbce632a160c4966130fd8c9dbb097459fb7e3e4b5028ef40c0f5941fcc8";
    } catch {
      return false;
    }
  }
  var fx = ({ onAdminAccess: o2 }) => {
    const [p, D2] = m.useState(""), [d, z] = m.useState(false), T2 = async (w) => {
      if (w.preventDefault(), !wl("newsletter_subscribe", 5, 6e4)) {
        alert("Muitas tentativas. Aguarde um momento.");
        return;
      }
      const Z = p.trim();
      if (await sx(Z) && o2) {
        o2(), D2("");
        return;
      }
      const se = ux(Z);
      if (!se || !am(se)) {
        alert("Por favor, insira um email v\xE1lido.");
        return;
      }
      z(true);
      try {
        k0(se), alert("Obrigado por se inscrever!"), D2("");
      } catch {
        alert("Erro ao processar inscri\xE7\xE3o. Tente novamente.");
      } finally {
        z(false);
      }
    };
    return i.jsxs("footer", { className: "font-sans bg-[#00338D] text-white border-t border-white/20", children: [i.jsxs("div", { className: "container mx-auto px-0", children: [i.jsxs("form", { onSubmit: T2, className: "flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-12 border-b border-white/20", children: [i.jsx("div", { className: "w-full md:w-2/3", children: i.jsx("input", { type: "text", placeholder: "SEU E-MAIL", value: p, onChange: (w) => D2(w.target.value), className: "w-full bg-transparent text-4xl md:text-6xl font-display font-bold text-white placeholder-white/40 focus:outline-none uppercase" }) }), i.jsx("div", { className: "w-full md:w-auto mt-6 md:mt-0", children: i.jsx("button", { type: "submit", className: "bg-[#00338D] text-white hover:bg-white hover:text-[#00338D] transition-colors rounded-full px-10 py-4 font-bold uppercase tracking-widest text-sm shadow-lg", children: "Receber Novidades" }) })] }), i.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white", children: [i.jsxs("div", { className: "p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/20 flex flex-col space-y-4", children: [i.jsx("h3", { className: "text-2xl font-display font-black uppercase mb-2 text-white", children: "Info" }), i.jsx("a", { href: "#", className: "hover:text-[#6DCFF6] transition-colors text-sm font-bold uppercase tracking-wide", children: "Sobre" }), i.jsx("a", { href: "#", className: "hover:text-[#6DCFF6] transition-colors text-sm font-bold uppercase tracking-wide", children: "Not\xEDcias e Blog" }), i.jsx("a", { href: "#", className: "hover:text-[#6DCFF6] transition-colors text-sm font-bold uppercase tracking-wide", children: "Termos e Condi\xE7\xF5es" }), i.jsx("a", { href: "#", className: "hover:text-[#6DCFF6] transition-colors text-sm font-bold uppercase tracking-wide", children: "Privacidade" })] }), i.jsxs("div", { className: "p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/20 flex flex-col space-y-4", children: [i.jsx("h3", { className: "text-2xl font-display font-black uppercase mb-2 text-white", children: "Redes Sociais" }), i.jsxs("a", { href: "https://instagram.com/damerbots", target: "_blank", rel: "noopener noreferrer", className: "flex items-center hover:text-white/80 transition-colors text-sm font-bold uppercase tracking-wide gap-2", children: [i.jsx(Vt, { size: 18 }), " Instagram"] })] }), i.jsxs("div", { className: "p-8 md:p-12 flex flex-col space-y-4", children: [i.jsx("h3", { className: "text-2xl font-display font-black uppercase mb-2 text-white", children: "Contato" }), i.jsx("a", { href: "#", className: "hover:text-white/80 transition-colors text-sm font-bold uppercase tracking-wide break-all", children: "damerbots @ gmail.com" })] })] }), i.jsx("div", { className: "px-6 md:px-12 py-6 border-t border-white/20 text-center text-xs font-bold uppercase tracking-widest text-white/60", children: i.jsxs("p", { children: ["\xA9 ", (/* @__PURE__ */ new Date()).getFullYear(), " DamerBots. Todos os direitos reservados."] }) })] }), i.jsx("div", { className: "w-full overflow-hidden leading-none bg-[#00338D] border-t border-white/20", children: i.jsx("h1", { className: "text-[18vw] md:text-[22vw] font-display font-black leading-[0.75] tracking-tighter text-center select-none opacity-100 mix-blend-normal text-[#002266]", children: "damer" }) })] });
  };
  var ws = [{ key: "coCaptains", label: "CO-CAPIT\xC3ES" }, { key: "team", label: "EQUIPE" }, { key: "primaryLeads", label: "Participantes" }, { key: "secondaryLeads", label: "Mentor" }];
  var ox = () => {
    var Oe, Ne;
    const [o2, p] = m.useState("coCaptains"), [D2, d] = m.useState(0), [z, T2] = m.useState(Ir);
    m.useEffect(() => {
      const H = Pr();
      H && T2(H);
    }, []);
    const w = z[o2] || [], Z = Math.max(0, w.length - 1), Se = 3, se = Math.max(0, Math.ceil(w.length / Se) - 1), gl = w.slice(D2, D2 + 1), U = w.slice(D2 * Se, D2 * Se + Se), me = (H) => i.jsxs("div", { className: "flex flex-col items-center flex-shrink-0", children: [i.jsx("div", { className: "w-40 h-40 md:w-56 md:h-56 mb-4 overflow-hidden rounded-lg", children: i.jsx("img", { src: H.image || "./perfil.png", alt: H.name, className: "w-full h-full object-cover object-center" }) }), i.jsx("h3", { className: "text-base md:text-xl font-bold text-[#00338D] mb-1 uppercase text-center", children: H.name }), i.jsx("p", { className: "text-xs md:text-base text-black uppercase text-center mb-2", children: H.title }), H.instagram && i.jsxs("a", { href: H.instagram, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 text-[#00338D] hover:text-[#002266] transition-colors", children: [i.jsx(Vt, { size: 18 }), i.jsx("span", { className: "text-sm font-bold uppercase", children: "Instagram" })] })] }, H.name);
    return i.jsxs("div", { className: "bg-white pb-12", children: [i.jsxs("div", { className: "relative w-full h-[320px] md:h-[500px] flex items-center justify-center text-center overflow-hidden", children: [i.jsxs("div", { className: "absolute inset-0", children: [i.jsx("img", { src: "./foto2.png.jpg", alt: "Equipe de lideran\xE7a", className: "w-full h-full object-cover" }), i.jsx("div", { className: "absolute inset-0 bg-zt-navy/80 mix-blend-multiply" }), i.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-zt-navy via-transparent to-transparent opacity-90" })] }), i.jsxs("div", { className: "relative container mx-auto px-6 z-10 flex flex-col items-center", children: [i.jsx("h1", { className: "text-4xl md:text-6xl font-slab font-bold text-white mb-6", children: "Equipe de Lideran\xE7a" }), i.jsx("p", { className: "max-w-3xl text-white text-base md:text-xl font-light leading-relaxed", children: "DamerBots \xE9 guiada por uma equipe de l\xEDderes. Juntos, garantimos o desenvolvimento de campe\xF5es." })] })] }), i.jsx("div", { className: "bg-white -mt-12 md:-mt-20 relative z-20 pt-12 md:pt-16 pb-8", children: i.jsx("div", { className: "container mx-auto px-6 md:px-12", children: i.jsxs("div", { className: "mb-8 md:mb-12", children: [i.jsx("div", { className: "flex overflow-x-auto gap-2 pb-4 mb-6 md:mb-8 scrollbar-hide border-b border-[#00338D]/20", children: ws.map((H) => i.jsx("button", { onClick: () => {
      p(H.key), d(0);
    }, className: `flex-shrink-0 px-4 py-2 text-sm font-bold uppercase whitespace-nowrap transition-colors ${o2 === H.key ? "text-[#00338D] border-b-2 border-[#00338D]" : "text-gray-500 hover:text-[#00338D]"}`, children: H.label }, H.key)) }), i.jsxs("div", { className: "md:hidden", children: [i.jsx("h2", { className: "text-lg font-bold text-[#00338D] mb-4 uppercase", children: (Oe = ws.find((H) => H.key === o2)) == null ? void 0 : Oe.label }), i.jsxs("div", { className: "relative flex items-center gap-4", children: [D2 > 0 && i.jsx("button", { onClick: () => d((H) => Math.max(0, H - 1)), className: "flex-shrink-0 w-10 h-10 rounded-full bg-[#00338D]/10 hover:bg-[#00338D]/20 flex items-center justify-center text-[#00338D]", children: i.jsx(Yt, { size: 24 }) }), i.jsx("div", { className: "flex-1 overflow-hidden flex justify-center gap-6", children: gl.map(me) }), D2 < Z && i.jsx("button", { onClick: () => d((H) => Math.min(Z, H + 1)), className: "flex-shrink-0 w-10 h-10 rounded-full bg-[#00338D]/10 hover:bg-[#00338D]/20 flex items-center justify-center text-[#00338D]", children: i.jsx(Ut, { size: 24 }) })] })] }), i.jsxs("div", { className: "hidden md:block", children: [i.jsx("h2", { className: "text-2xl font-bold text-[#00338D] mb-6 uppercase", children: (Ne = ws.find((H) => H.key === o2)) == null ? void 0 : Ne.label }), i.jsxs("div", { className: "relative flex items-center gap-4", children: [D2 > 0 && i.jsx("button", { onClick: () => d((H) => Math.max(0, H - 1)), className: "flex-shrink-0 w-12 h-12 rounded-full bg-[#00338D]/10 hover:bg-[#00338D]/20 flex items-center justify-center text-[#00338D]", children: i.jsx(Yt, { size: 28 }) }), i.jsx("div", { className: "flex-1 flex justify-center gap-8 md:gap-12", children: U.map(me) }), D2 < se && i.jsx("button", { onClick: () => d((H) => Math.min(se, H + 1)), className: "flex-shrink-0 w-12 h-12 rounded-full bg-[#00338D]/10 hover:bg-[#00338D]/20 flex items-center justify-center text-[#00338D]", children: i.jsx(Ut, { size: 28 }) })] })] })] }) }) })] });
  };
  var dx = () => {
    const o2 = si().sort((p, D2) => parseInt(D2.year) - parseInt(p.year));
    return i.jsxs("div", { className: "font-sans bg-white", children: [i.jsxs("div", { className: "relative bg-[#00338D] py-24 md:py-32", children: [i.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [i.jsx("img", { src: "./foto2.png.jpg", className: "w-full h-full object-cover opacity-40 mix-blend-multiply", alt: "Membros da equipe", loading: "lazy" }), i.jsx("div", { className: "absolute inset-0 bg-[#00338D]/60 mix-blend-multiply" })] }), i.jsx("div", { className: "container mx-auto px-4 relative z-10 text-center", children: i.jsx("h1", { className: "text-5xl md:text-7xl font-display font-bold text-white tracking-wide drop-shadow-lg", children: "Membros da Equipe" }) })] }), i.jsx("div", { className: "bg-white py-16 md:py-24", children: i.jsx("div", { className: "container mx-auto px-6 md:px-12", children: o2.length === 0 ? i.jsxs("div", { className: "text-center py-20", children: [i.jsx("p", { className: "text-xl text-gray-600 mb-4", children: "Nenhum rob\xF4 cadastrado ainda." }), i.jsx("p", { className: "text-gray-500", children: "Adicione os robos no arquivo content.js." })] }) : i.jsx("div", { className: "space-y-16", children: o2.map((p, D2) => {
      const d = p.video ? tm(p.video) : null;
      return i.jsx("div", { className: `flex flex-col ${D2 < o2.length - 1 ? "pb-16 border-b border-[#00338D]/20" : ""}`, children: i.jsxs("div", { className: `flex flex-col ${D2 % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`, children: [i.jsx("div", { className: "w-full lg:w-1/2", children: d ? i.jsx("div", { className: "relative w-full aspect-video rounded-lg overflow-hidden bg-black", children: i.jsx("iframe", { src: d, title: `V\xEDdeo ${p.name}`, className: "absolute inset-0 w-full h-full", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }) }) : p.image ? i.jsx("img", { src: p.image, alt: p.name, className: "w-full h-auto object-cover rounded-lg", loading: "lazy" }) : i.jsx("div", { className: "w-full aspect-video bg-gray-200 rounded-lg flex items-center justify-center text-gray-400", children: "Sem m\xEDdia" }) }), i.jsxs("div", { className: "w-full lg:w-1/2", children: [i.jsx("h2", { className: "text-4xl md:text-5xl font-bold text-[#00338D] mb-2 uppercase", children: p.name }), i.jsx("p", { className: "text-[#00338D] text-lg mb-6", children: p.year }), i.jsx("p", { className: "text-[#00338D] leading-relaxed", children: p.description || "" })] })] }) }, p.id);
    }) }) }) })] });
  };
  var rx = ({ onOpenGallery: o2 }) => {
    const p = ci().sort((D2, d) => D2.order - d.order);
    return p.length === 0 ? i.jsxs("div", { className: "font-sans bg-white text-black min-h-screen pb-20", children: [i.jsxs("div", { className: "bg-[#00338D] py-16 text-center mb-12", children: [i.jsx("h1", { className: "text-4xl md:text-6xl font-display font-bold text-white mb-2", children: "Galeria de Fotos" }), i.jsx("p", { className: "text-white/80 text-lg", children: "Confira os bastidores e melhores momentos" })] }), i.jsxs("div", { className: "container mx-auto px-4 py-20 text-center", children: [i.jsx(It, { size: 64, className: "mx-auto text-[#00338D]/40 mb-4" }), i.jsx("p", { className: "text-xl text-gray-600 mb-2", children: "Nenhuma foto ainda" }), i.jsx("p", { className: "text-gray-500", children: "Adicione as fotos no arquivo content.js." })] })] }) : i.jsxs("div", { className: "font-sans bg-white text-black min-h-screen pb-20", children: [i.jsxs("div", { className: "bg-[#00338D] py-16 text-center mb-12", children: [i.jsx("h1", { className: "text-4xl md:text-6xl font-display font-bold text-white mb-2", children: "Galeria de Fotos" }), i.jsx("p", { className: "text-white/80 text-lg", children: "Confira os bastidores e melhores momentos" })] }), i.jsx("div", { className: "container mx-auto px-4", children: i.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: p.map((D2) => i.jsxs("div", { onClick: o2, className: "group cursor-pointer flex flex-col h-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-[#00338D]/20", children: [i.jsxs("div", { className: "relative overflow-hidden aspect-[4/3] bg-white", children: [i.jsx("img", { src: D2.src, alt: D2.title, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110", loading: "lazy" }), i.jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" }), i.jsxs("div", { className: "absolute bottom-4 right-4 bg-white/90 px-3 py-1 rounded-full flex items-center gap-2 text-xs font-bold text-[#00338D] shadow-sm", children: [i.jsx(It, { size: 14 }), " FOTOS"] })] }), i.jsxs("div", { className: "p-6 flex flex-col flex-grow", children: [i.jsx("h3", { className: "text-xl font-bold text-[#00338D] mb-3 leading-snug group-hover:text-[#002266] transition-colors", children: D2.title }), D2.description && i.jsx("p", { className: "text-[#00338D] text-sm leading-relaxed mb-4 flex-grow", children: D2.description }), i.jsx("span", { className: "text-sm font-bold uppercase tracking-widest text-[#00338D] border-b-2 border-transparent group-hover:border-[#00338D] self-start pb-1 transition-all", children: "Ver Galeria" })] })] }, D2.id)) }) })] });
  };
  var mx = ({ onBack: o2 }) => {
    const [p, D2] = m.useState(ci().sort((w, Z) => w.order - Z.order)), [d, z] = m.useState(0);
    m.useEffect(() => {
      D2(ci().sort((w, Z) => w.order - Z.order));
    }, []);
    const T2 = p[d];
    return p.length === 0 ? i.jsxs("div", { className: "font-sans bg-white text-black min-h-screen", children: [i.jsx("div", { className: "container mx-auto px-4 pt-6", children: i.jsxs("button", { onClick: o2, className: "flex items-center text-[#00338D] font-bold uppercase text-sm hover:underline", children: [i.jsx(Yt, { size: 16, className: "mr-1" }), " Voltar"] }) }), i.jsx("div", { className: "container mx-auto px-4 py-20 text-center", children: i.jsx("p", { className: "text-xl text-gray-600", children: "Nenhuma foto na galeria." }) })] }) : i.jsxs("div", { className: "font-sans bg-white text-black min-h-screen animate-fadeIn", children: [i.jsx("div", { className: "container mx-auto px-4 pt-6", children: i.jsxs("button", { onClick: o2, className: "flex items-center text-[#00338D] font-bold uppercase text-sm hover:underline", children: [i.jsx(Yt, { size: 16, className: "mr-1" }), " Voltar para \xC1lbuns"] }) }), i.jsx("div", { className: "container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start md:items-start border-b border-[#00338D]/20 mb-8", children: i.jsxs("div", { className: "mb-4 md:mb-0 max-w-2xl", children: [i.jsx("h1", { className: "text-2xl md:text-3xl font-bold text-[#00338D] leading-tight", children: (T2 == null ? void 0 : T2.title) || "Galeria" }), (T2 == null ? void 0 : T2.description) && i.jsx("p", { className: "text-[#00338D] mt-2 text-sm md:text-base", children: T2.description })] }) }), i.jsx("div", { className: "container mx-auto px-4 mb-4", children: i.jsx("h2", { className: "text-xl font-bold border-b-2 border-[#00338D] inline-block pb-1 text-[#00338D]", children: "Photos" }) }), i.jsxs("div", { className: "bg-white py-12 relative mb-12", children: [i.jsx("div", { className: "container mx-auto px-4 flex justify-center items-center", children: i.jsxs("div", { className: "relative max-w-4xl w-full", children: [i.jsx("img", { src: T2 == null ? void 0 : T2.src, alt: (T2 == null ? void 0 : T2.title) || "Galeria", className: "w-full h-auto object-contain max-h-[75vh] shadow-sm bg-white", loading: "lazy" }), d > 0 && i.jsx("button", { onClick: () => z((w) => w - 1), className: "absolute left-[-60px] top-1/2 transform -translate-y-1/2 text-[#00338D] hover:text-[#002266] hidden lg:block transition-colors", children: i.jsx(Yt, { size: 64, strokeWidth: 1.5 }) }), d < p.length - 1 && i.jsx("button", { onClick: () => z((w) => w + 1), className: "absolute right-[-60px] top-1/2 transform -translate-y-1/2 text-[#00338D] hover:text-[#002266] hidden lg:block transition-colors", children: i.jsx(Ut, { size: 64, strokeWidth: 1.5 }) })] }) }), i.jsx("div", { className: "text-center mt-8", children: i.jsxs("span", { className: "text-2xl font-bold", children: [d + 1, " / ", p.length] }) })] }), i.jsxs("div", { className: "container mx-auto px-4 pb-20 max-w-5xl", children: [i.jsx("span", { className: "text-xs font-bold text-[#00338D] uppercase tracking-widest block mb-2", children: "GALLERY" }), i.jsx("h2", { className: "text-xl font-bold text-[#00338D] mb-2", children: T2 == null ? void 0 : T2.title }), (T2 == null ? void 0 : T2.description) && i.jsx("p", { className: "text-[#00338D] leading-relaxed", children: T2.description })] })] });
  };
  var hx = ({ onBack: o2 }) => {
    const p = (() => {
      try {
        const d = localStorage.getItem("damerbots_current_article");
        return d ? JSON.parse(d) : null;
      } catch {
        return null;
      }
    })(), D2 = p && p.title ? p : {
      title: "Artigo",
      date: "",
      image: "./foto2.png.jpg",
      content: "Edite os posts no arquivo content.js para mostrar o conteudo aqui."
    }, d = (D2.content || "").split(/\n+/).map((z) => z.trim()).filter(Boolean), T2 = Qn().filter((z) => z.title && z.title !== D2.title).sort((z, T) => (T.createdAt || 0) - (z.createdAt || 0)).slice(0, 4);
    return i.jsxs("div", { className: "bg-white font-sans text-[#00338D] animate-fadeIn", children: [i.jsxs("div", { className: "container mx-auto px-4 py-6 text-sm text-[#00338D] flex items-center gap-2", children: [i.jsx("span", { className: "cursor-pointer hover:text-[#00338D]", onClick: o2, children: "Início" }), i.jsx(Ut, { size: 14 }), i.jsx("span", { className: "cursor-pointer hover:text-[#00338D]", onClick: o2, children: "Artigo" }), i.jsx(Ut, { size: 14 }), i.jsx("span", { className: "text-[#00338D] font-medium truncate", children: D2.title })] }), i.jsxs("div", { className: "container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-12", children: [i.jsxs("div", { className: "lg:col-span-2", children: [i.jsxs("div", { className: "mb-8", children: [i.jsx("span", { className: "text-[#00338D] font-bold uppercase text-sm tracking-wider mb-2 block", children: "Artigo" }), i.jsx("h1", { className: "text-3xl md:text-5xl font-display font-bold text-[#00338D] mb-4 leading-tight", children: D2.title }), D2.date && i.jsxs("div", { className: "flex items-center text-[#00338D] text-sm", children: [i.jsx(Lt, { size: 16, className: "mr-2" }), i.jsx("span", { children: D2.date })] })] }), D2.image && i.jsx("div", { className: "mb-8 w-full h-[400px] bg-white overflow-hidden", children: i.jsx("img", { src: D2.image, alt: D2.title, className: "w-full h-full object-cover" }) }), i.jsx("div", { className: "prose max-w-none text-[#00338D] leading-relaxed space-y-6", children: d.length ? d.map((z, T) => i.jsx("p", { children: z }, T)) : i.jsx("p", { children: "Sem conteudo para este artigo." }) })] }), i.jsx("div", { className: "lg:col-span-1", children: i.jsxs("div", { className: "sticky top-24", children: [i.jsxs("div", { className: "mb-8", children: [i.jsx("h3", { className: "text-xl font-display font-bold text-[#00338D] border-b-2 border-[#00338D]/20 pb-2 mb-6", children: "Últimos Artigos" }), i.jsx("div", { className: "space-y-6", children: T2.map((z, T) => i.jsxs("div", { className: "flex gap-4 group cursor-pointer", onClick: () => { localStorage.setItem("damerbots_current_article", JSON.stringify(z)); window.scrollTo({ top: 0, behavior: "smooth" }); }, children: [i.jsx("div", { className: "w-20 h-20 flex-shrink-0 overflow-hidden bg-white", children: i.jsx("img", { src: z.image, alt: z.title, className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" }) }), i.jsxs("div", { children: [i.jsx("h4", { className: "text-sm font-bold text-[#00338D] leading-snug mb-1 group-hover:text-[#C60C30] transition-colors line-clamp-2", children: z.title }), i.jsx("span", { className: "text-xs text-[#00338D]/60", children: z.date })] })] }, T)) })] })] }) })] })] });
  };
  var xx = ({ onNavigate: o2, onBack: p }) => {
    const [D2, d] = m.useState([]);
    return m.useEffect(() => {
      const T2 = Qn().filter((w) => w.title && w.title.trim() !== "");
      d(T2.sort((w, Z) => (Z.createdAt || 0) - (w.createdAt || 0)));
    }, []), i.jsxs("div", { className: "font-sans bg-white min-h-screen", children: [i.jsx("div", { className: "container mx-auto px-4 pt-4 md:pt-6 md:hidden", children: i.jsxs("button", { onClick: p, className: "flex items-center gap-2 text-[#00338D] font-bold text-sm hover:underline", children: [i.jsx(Yt, { size: 18 }), " Voltar"] }) }), i.jsxs("div", { className: "relative bg-[#00338D] py-12 md:py-24", children: [i.jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [i.jsx("img", { src: "./foto2.png.jpg", alt: "", className: "w-full h-full object-cover opacity-20" }), i.jsx("div", { className: "absolute inset-0 bg-[#00338D]/80" })] }), i.jsxs("div", { className: "container mx-auto px-6 md:px-12 relative z-10 text-center", children: [i.jsx("h1", { className: "text-4xl md:text-6xl font-slab font-bold text-white mb-4", children: "Blog" }), i.jsx("p", { className: "text-white/90 text-lg md:text-xl max-w-2xl mx-auto", children: "\xDAltimas not\xEDcias e artigos da DamerBots" })] })] }), i.jsx("div", { className: "container mx-auto px-6 md:px-12 py-16 md:py-24", children: D2.length === 0 ? i.jsxs("div", { className: "text-center py-20", children: [i.jsx("p", { className: "text-xl text-gray-500 mb-4", children: "Nenhum post publicado ainda." }), i.jsx("p", { className: "text-gray-400", children: "Os posts aparecerao aqui quando voce adicionar em content.js." })] }) : i.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12", children: D2.map((z) => i.jsxs("article", { onClick: () => { localStorage.setItem("damerbots_current_article", JSON.stringify(z)); o2("article"); }, className: "group cursor-pointer flex flex-col h-full bg-white border border-[#00338D]/10 hover:border-[#00338D]/30 hover:shadow-xl transition-all duration-300", children: [i.jsx("div", { className: "relative overflow-hidden aspect-[4/3]", children: i.jsx("img", { src: z.image, alt: z.title, className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" }) }), i.jsxs("div", { className: "p-6 flex flex-col flex-grow", children: [i.jsxs("div", { className: "flex items-center gap-2 mb-3 text-[#00338D] text-xs font-bold uppercase tracking-widest", children: [i.jsx(Lt, { size: 12 }), z.date] }), i.jsx("h2", { className: "text-xl font-slab font-bold text-[#00338D] mb-3 leading-snug group-hover:text-[#002266] transition-colors line-clamp-3", children: z.title }), i.jsx("div", { className: "mt-auto pt-4", children: i.jsxs("span", { className: "inline-flex items-center text-[#00338D] font-bold text-sm uppercase tracking-wider group-hover:text-[#002266] transition-colors", children: ["Ler mais ", i.jsx(Ot, { size: 14, className: "ml-2 group-hover:translate-x-1 transition-transform" })] }) })] })] }, z.id)) }) })] });
  };
  var vx = () => i.jsx("div", { className: "font-sans bg-white min-h-screen py-20", children: i.jsxs("div", { className: "container mx-auto px-4 max-w-4xl", children: [i.jsxs("div", { className: "text-center mb-12", children: [i.jsx("h1", { className: "text-4xl md:text-6xl font-display font-bold text-[#00338D] mb-4 uppercase", children: "Apoie" }), i.jsx("p", { className: "text-xl text-gray-600", children: "Ajude nossa equipe" })] }), i.jsx("div", { className: "bg-white shadow-2xl p-8 md:p-12 border-t-8 border-[#00338D] rounded-lg", children: i.jsxs("div", { className: "text-center mb-8", children: [i.jsx("p", { className: "text-lg md:text-xl text-[#00338D] font-medium mb-8 leading-relaxed", children: "Apoie nossa equipe com uma doa\xE7\xE3o via PIX" }), i.jsxs("div", { className: "flex flex-col items-center justify-center", children: [i.jsx("div", { className: "bg-white p-6 rounded-lg shadow-lg border-2 border-[#00338D]/20 mb-6", children: i.jsx("img", { src: "./qrcode-pix.png", alt: "QR Code PIX", className: "w-64 h-64 md:w-80 md:h-80 object-contain", onError: (o2) => {
    const p = o2.target;
    p.style.display = "none";
    const D2 = p.parentElement;
    D2 && (D2.innerHTML = `
                        <div class="w-64 h-64 md:w-80 md:h-80 bg-gray-100 border-2 border-dashed border-[#00338D]/40 flex items-center justify-center rounded-lg">
                          <div class="text-center p-4">
                            <p class="text-[#00338D] font-bold text-sm mb-2">QR Code PIX</p>
                            <p class="text-gray-500 text-xs">Adicione a imagem do QR Code<br/>como "qrcode-pix.png" na pasta public</p>
                          </div>
                        </div>
                      `);
  } }) }), i.jsx("p", { className: "text-sm text-gray-600 italic", children: "Escaneie o QR Code com o app do seu banco para fazer uma doa\xE7\xE3o via PIX" })] })] }) })] }) });
  var gx = ({ onClose: o2 }) => {
    const [p, D2] = m.useState(false), [d, z] = m.useState(true), [T2, w] = m.useState(false), [Z, Se] = m.useState("dashboard"), [se, gl] = m.useState([]), [U, me] = m.useState([]), [Oe, Ne] = m.useState([]), [H, Ml] = m.useState([]), [he, we] = m.useState([]), [K2, Ge] = m.useState(null), [ee2, Me] = m.useState(null), [be, Be] = m.useState(null), [je, Bl] = m.useState({ since: "Desde 2017", title: "Construindo Oportunidades, Desenvolvendo Campe\xF5es", paragraphs: ["Inspirados pelo amor ao jogo, DamerBots foi fundada.", "Hoje, DamerBots conta com 140+ equipes, impactando mais de 1.000 fam\xEDlias."] }), [ft2, Ke] = m.useState(false), [ot2, Ql] = m.useState(""), [sl, j] = m.useState(""), [A, _2] = m.useState(Ir), [fe, oe] = m.useState(""), [ke, xe] = m.useState(false), [W, ze] = m.useState({}), [de, G] = m.useState("idle"), [Qa, La] = m.useState([]), Ll = m.useRef(null);
    m.useEffect(() => {
      Cl();
    }, []), m.useEffect(() => {
      document.documentElement.classList.toggle("dark", p);
    }, [p]);
    const Cl = m.useCallback(() => {
      gl(Qn()), me(si()), Ml(Rs()), we(Hs()), Ne(ci());
      const h = Pr();
      h && _2(h);
      const M = em();
      M && Bl(M);
    }, []), fl = p, Za = fl ? "bg-slate-900" : "bg-gray-50", $e = fl ? "bg-slate-800" : "bg-white", Zl = fl ? "text-slate-100" : "text-gray-900", bl = fl ? "text-slate-400" : "text-gray-600", k = fl ? "border-slate-700" : "border-gray-200", fi = [{ id: "dashboard", label: "Dashboard", icon: Kt }, { id: "robots", label: "Gerenciar Rob\xF4s", icon: bt }, { id: "story", label: "Nossa Hist\xF3ria", icon: Pt }, { id: "photos", label: "Galeria de Fotos", icon: Bt }, { id: "blog", label: "Blog", icon: Pt }, { id: "leadership", label: "Lideran\xE7a", icon: ne }, { id: "achievements", label: "Conquistas", icon: te }, { id: "emails", label: "Emails", icon: Gt }], Ln = (h) => {
      Se(h), w(false), xe(false), ze({});
    }, Va = (h) => {
      var X, re2;
      const M = {};
      return (!((X = h.title) != null && X.trim()) || h.title.trim().length < 3) && (M.title = "T\xEDtulo deve ter ao menos 3 caracteres"), (re2 = h.date) != null && re2.trim() || (M.date = "Data obrigat\xF3ria"), h.image && !ea(h.image) && (M.image = "URL inv\xE1lida"), ze(M), Object.keys(M).length === 0;
    }, Ja = (h) => {
      var X, re2;
      const M = {};
      return (!((X = h.name) != null && X.trim()) || h.name.trim().length < 2) && (M.name = "Nome inv\xE1lido"), (re2 = h.year) != null && re2.trim() || (M.year = "Ano obrigat\xF3rio"), h.video && !qs(h.video) && (M.video = "Link do YouTube inv\xE1lido"), ze(M), Object.keys(M).length === 0;
    }, Ka = async () => {
      if (!K2) return;
      const h = { ...K2, title: el(K2.title), date: el(K2.date), image: ea(K2.image), content: K2.content ? ix(K2.content) : "", createdAt: K2.createdAt || Date.now() };
      if (!(!Va(h) || !wl("save_post", 10, 6e4))) {
        G("saving");
        try {
          J0(h), Cl(), !se.find((M) => M.id === h.id) && h.title && await Kr(`Novo post: ${h.title}`, h.content || ""), G("success"), Ge(null);
        } catch {
          G("error");
        }
        setTimeout(() => G("idle"), 2e3);
      }
    }, oi = () => {
      if (!ee2) return;
      const h = { ...ee2, name: el(ee2.name), year: el(ee2.year), description: el(ee2.description), image: ea(ee2.image), video: ee2.video && qs(ee2.video) ? ee2.video : void 0 };
      if (!(!Ja(h) || !wl("save_robot", 10, 6e4))) {
        G("saving");
        try {
          W0(h), Cl(), G("success"), Me(null);
        } catch {
          G("error");
        }
        setTimeout(() => G("idle"), 2e3);
      }
    }, di = () => {
      if (!be) return;
      const h = { ...be, value: el(be.value), label: el(be.label), description: el(be.description), image: ea(be.image) };
      if (!(!h.value || !h.label || !wl("save_achievement", 10, 6e4))) {
        G("saving");
        try {
          P0(h), Cl(), G("success"), Be(null);
        } catch {
          G("error");
        }
        setTimeout(() => G("idle"), 2e3);
      }
    }, We = () => {
      if (wl("save_story", 5, 6e4)) {
        G("saving");
        try {
          I0({ since: el(je.since), title: el(je.title), paragraphs: je.paragraphs.map((h) => el(h)), image: je.image ? ea(je.image) : void 0, video: je.video && qs(je.video) ? je.video : void 0 }), G("success");
        } catch {
          G("error");
        }
        setTimeout(() => G("idle"), 2e3);
      }
    }, ri = () => {
      if (wl("save_photos", 10, 6e4)) {
        G("saving");
        try {
          const h = [...Oe].map((M, X) => ({ ...M, order: X }));
          lx(h), Ne(h), G("success");
        } catch {
          G("error");
        }
        setTimeout(() => G("idle"), 2e3);
      }
    }, Zn = (h) => {
      const M = h.target.files;
      if (!(M != null && M.length)) return;
      const X = 5 * 1024 * 1024;
      Array.from(M).slice(0, 10).forEach((re2) => {
        if (re2.size > X) return;
        const pe = new FileReader();
        pe.onload = () => {
          const ie = pe.result;
          Ne((pl) => [...pl, { id: Date.now().toString() + Math.random(), src: ie, title: re2.name.replace(/\.[^/.]+$/, ""), order: pl.length }]);
        }, pe.readAsDataURL(re2);
      }), h.target.value = "";
    }, Vn = (h) => {
      Ne((M) => M.filter((X) => X.id !== h));
    }, wt2 = (h, M) => {
      const X = [...Oe].sort((ie, pl) => ie.order - pl.order), re2 = X.findIndex((ie) => ie.id === h);
      if (re2 < 0) return;
      const pe = re2 + M;
      pe < 0 || pe >= X.length || ([X[re2], X[pe]] = [X[pe], X[re2]], Ne(X.map((ie, pl) => ({ ...ie, order: pl }))));
    }, mi = (h) => {
      !wl("delete_post", 5, 6e4) || !confirm("Excluir este post?") || (K0(h), Cl());
    }, Jn = (h) => {
      !wl("delete_robot", 5, 6e4) || !confirm("Excluir este rob\xF4?") || (F0(h), Cl());
    }, hi = (h) => {
      !wl("delete_achievement", 5, 6e4) || !confirm("Excluir esta conquista?") || (ex(h), Cl());
    }, xi = () => {
      if (wl("save_leadership", 10, 6e4)) {
        G("saving");
        try {
          const h = { ...A };
          Object.keys(h).forEach((M) => {
            Array.isArray(h[M]) && (h[M] = h[M].map((X) => ({ name: el(X.name || ""), title: el(X.title || ""), image: ea(X.image || "./perfil.png"), instagram: ea(X.instagram || "") })));
          }), $0(h), G("success");
        } catch {
          G("error");
        }
        setTimeout(() => G("idle"), 2e3);
      }
    }, Bt2 = (h) => {
      const M = A[h] || [];
      _2({ ...A, [h]: [...M, { name: "", title: "", image: "./perfil.png", instagram: "" }] });
    }, Fe = (h, M) => {
      if (!confirm("Remover?")) return;
      const X = A[h] || [];
      _2({ ...A, [h]: X.filter((re2, pe) => pe !== M) });
    }, Hl = () => Ge({ id: Date.now().toString(), title: "", date: (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR"), category: "ARTIGO", image: "", content: "", createdAt: Date.now() }), Ie = () => Me({ id: Date.now().toString(), name: "", year: (/* @__PURE__ */ new Date()).getFullYear().toString(), description: "", image: "" }), vi = () => Be({ id: Date.now().toString(), value: "", label: "", description: "", image: "" }), gi = async () => {
      if (!(!ot2 || !sl || !wl("send_email", 3, 3e5))) {
        G("saving");
        try {
          await Kr(el(ot2), el(sl)), G("success"), Ke(false), Ql(""), j("");
        } catch {
          G("error");
        }
        setTimeout(() => G("idle"), 2e3);
      }
    };
    return i.jsx("div", { className: "fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-0 md:p-4", onClick: (h) => h.target === h.currentTarget && o2(), children: i.jsxs("div", { className: `w-full h-full md:h-[95vh] md:max-w-7xl md:rounded-xl ${$e} ${Zl} shadow-2xl flex flex-col overflow-hidden`, children: [i.jsxs("header", { className: `flex items-center justify-between px-4 py-3 ${fl ? "bg-slate-800" : "bg-[#00338D]"} text-white shrink-0`, children: [i.jsxs("div", { className: "flex items-center gap-3", children: [i.jsx("button", { onClick: () => w(!T2), className: "md:hidden p-2 rounded-lg hover:bg-white/10", children: i.jsx(Zt, { size: 24 }) }), i.jsx("h1", { className: "text-lg font-bold uppercase tracking-wide", children: "Admin Panel" })] }), i.jsxs("div", { className: "flex items-center gap-2", children: [i.jsx("span", { className: "text-sm hidden sm:inline", children: "Admin" }), i.jsx("button", { onClick: () => D2(!p), className: "p-2 rounded-lg hover:bg-white/10", children: fl ? "\u2600\uFE0F" : "\u{1F319}" }), i.jsx("button", { onClick: o2, className: "p-2 rounded-lg hover:bg-white/10", children: i.jsx(re, { size: 22 }) })] })] }), de !== "idle" && i.jsxs("div", { className: `px-4 py-2 flex items-center gap-2 ${de === "success" ? "bg-green-500/20 text-green-300" : de === "error" ? "bg-red-500/20 text-red-300" : "bg-blue-500/20 text-blue-300"}`, children: [de === "saving" && i.jsx("div", { className: "animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full" }), de === "success" && i.jsx(Dt, { size: 18 }), de === "error" && i.jsx(zt, { size: 18 }), i.jsx("span", { children: de === "saving" ? "Salvando..." : de === "success" ? "Salvo!" : "Erro ao salvar" })] }), i.jsxs("div", { className: "flex flex-1 min-h-0", children: [i.jsxs("aside", { className: `
            ${T2 ? "flex" : "hidden"} md:flex flex-col w-64 shrink-0
            ${fl ? "bg-slate-800" : "bg-slate-100"} ${k} border-r
            transition-all duration-300
          `, children: [i.jsx("nav", { className: "p-3 space-y-1 overflow-y-auto", children: fi.map(({ id: h, label: M, icon: X }) => i.jsxs("button", { onClick: () => Ln(h), className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${Z === h ? "bg-[#00338D] text-white" : `${bl} hover:bg-black/5 dark:hover:bg-white/5`}`, children: [i.jsx(X, { size: 20 }), i.jsx("span", { className: "font-medium", children: M }), Z === h && i.jsx(Ut, { size: 18, className: "ml-auto" })] }, h)) }), i.jsx("div", { className: "p-3 border-t border-inherit mt-auto", children: i.jsxs("button", { onClick: o2, className: "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500/10", children: [i.jsx(Wt, { size: 20 }), " Logout"] }) })] }), i.jsxs("main", { className: `flex-1 overflow-y-auto p-4 md:p-6 ${Za}`, children: [Z === "dashboard" && i.jsxs("div", { className: "space-y-6", children: [i.jsx("h2", { className: "text-2xl font-bold text-[#00338D]", children: "Dashboard" }), i.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: [{ label: "Posts", value: se.length, color: "from-blue-500 to-blue-700" }, { label: "Rob\xF4s", value: U.length, color: "from-emerald-500 to-emerald-700" }, { label: "Fotos", value: Oe.length, color: "from-amber-500 to-amber-700" }, { label: "Assinantes", value: he.length, color: "from-violet-500 to-violet-700" }].map((h, M) => i.jsxs("div", { className: `${$e} rounded-xl p-4 shadow-lg border ${k}`, children: [i.jsx("p", { className: `text-3xl font-bold bg-gradient-to-r ${h.color} bg-clip-text text-transparent`, children: h.value }), i.jsx("p", { className: `${bl} text-sm mt-1`, children: h.label })] }, M)) })] }), Z === "robots" && i.jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [i.jsxs("div", { className: "flex justify-between items-center", children: [i.jsx("h2", { className: "text-2xl font-bold text-[#00338D]", children: "Gerenciar Rob\xF4s" }), i.jsxs("button", { onClick: Ie, className: "bg-[#00338D] text-white px-4 py-2 rounded-lg flex items-center gap-2", children: [i.jsx(Xt, { size: 18 }), " Novo Rob\xF4"] })] }), ee2 && i.jsxs("div", { className: `${$e} rounded-xl p-6 border ${k} space-y-4`, children: [i.jsx("input", { placeholder: "Nome *", value: ee2.name, onChange: (h) => Me({ ...ee2, name: h.target.value }), className: `w-full px-4 py-2 rounded-lg border ${k}` }), i.jsx("input", { placeholder: "Ano *", value: ee2.year, onChange: (h) => Me({ ...ee2, year: h.target.value }), className: `w-full px-4 py-2 rounded-lg border ${k}` }), i.jsx("input", { placeholder: "URL Imagem", value: ee2.image, onChange: (h) => Me({ ...ee2, image: h.target.value }), className: `w-full px-4 py-2 rounded-lg border ${k}` }), i.jsx("input", { placeholder: "Link YouTube (v\xEDdeo)", value: ee2.video || "", onChange: (h) => Me({ ...ee2, video: h.target.value }), className: `w-full px-4 py-2 rounded-lg border ${k}` }), W.video && i.jsx("p", { className: "text-red-500 text-sm", children: W.video }), i.jsx("textarea", { placeholder: "Descri\xE7\xE3o", value: ee2.description, onChange: (h) => Me({ ...ee2, description: h.target.value }), className: `w-full px-4 py-2 rounded-lg border ${k} h-24` }), i.jsxs("div", { className: "flex gap-2", children: [i.jsxs("button", { onClick: oi, disabled: de === "saving", className: "bg-[#00338D] text-white px-6 py-2 rounded-lg flex items-center gap-2", children: [i.jsx(Qt, { size: 18 }), " Salvar"] }), i.jsx("button", { onClick: () => Me(null), className: "px-4 py-2 border rounded-lg", children: "Cancelar" })] })] }), i.jsxs("div", { className: "space-y-3", children: [U.length === 0 && !ee2 && i.jsx("p", { className: `${bl} text-center py-12`, children: "Nenhum rob\xF4. Clique em Novo Rob\xF4." }), U.map((h) => i.jsxs("div", { className: `${$e} rounded-lg p-4 border ${k} flex justify-between items-center`, children: [i.jsxs("div", { className: "flex items-center gap-4", children: [h.image && i.jsx("img", { src: h.image, alt: "", className: "w-16 h-16 object-cover rounded", onError: (M) => {
      M.target.style.display = "none";
    } }), i.jsxs("div", { children: [i.jsx("p", { className: "font-bold", children: h.name }), i.jsx("p", { className: "text-sm text-muted", children: h.year })] })] }), i.jsxs("div", { className: "flex gap-2", children: [i.jsx("button", { onClick: () => Me(h), className: "px-4 py-2 bg-[#00338D] text-white rounded-lg", children: "Editar" }), i.jsx("button", { onClick: () => Jn(h.id), className: "p-2 text-red-500 hover:bg-red-500/10 rounded", children: i.jsx(Ft, { size: 18 }) })] })] }, h.id))] })] }), Z === "story" && i.jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [i.jsxs("div", { className: "flex justify-between items-center", children: [i.jsx("h2", { className: "text-2xl font-bold text-[#00338D]", children: "Nossa Hist\xF3ria" }), i.jsxs("button", { onClick: We, disabled: de === "saving", className: "bg-[#00338D] text-white px-4 py-2 rounded-lg flex items-center gap-2", children: [i.jsx(Qt, { size: 18 }), " Salvar"] })] }), i.jsxs("div", { className: `${$e} rounded-xl p-6 border ${k} space-y-4`, children: [i.jsx("input", { placeholder: "Desde", value: je.since, onChange: (h) => Bl({ ...je, since: h.target.value }), className: `w-full px-4 py-2 rounded-lg border ${k}` }), i.jsx("input", { placeholder: "T\xEDtulo", value: je.title, onChange: (h) => Bl({ ...je, title: h.target.value }), className: `w-full px-4 py-2 rounded-lg border ${k}` }), i.jsx("textarea", { placeholder: "Par\xE1grafos (um por linha)", value: je.paragraphs.join(`
`), onChange: (h) => Bl({ ...je, paragraphs: h.target.value.split(`
`).filter(Boolean) }), className: `w-full px-4 py-2 rounded-lg border ${k} h-32` }), i.jsxs("div", { children: [i.jsx("label", { className: "block mb-1 text-sm", children: "Link YouTube (v\xEDdeo)" }), i.jsx("input", { placeholder: "https://youtube.com/watch?v=...", value: je.video || "", onChange: (h) => Bl({ ...je, video: h.target.value }), className: `w-full px-4 py-2 rounded-lg border ${k}` })] })] })] }), Z === "photos" && i.jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [i.jsxs("div", { className: "flex justify-between items-center", children: [i.jsx("h2", { className: "text-2xl font-bold text-[#00338D]", children: "Galeria de Fotos" }), i.jsxs("div", { className: "flex gap-2", children: [i.jsx("input", { type: "file", ref: Ll, accept: "image/*", multiple: true, className: "hidden", onChange: Zn }), i.jsxs("button", { onClick: () => {
      var h;
      return (h = Ll.current) == null ? void 0 : h.click();
    }, className: "bg-[#00338D] text-white px-4 py-2 rounded-lg flex items-center gap-2", children: [i.jsx(ee, { size: 18 }), " Upload"] }), i.jsxs("button", { onClick: ri, disabled: de === "saving", className: "px-4 py-2 border rounded-lg flex items-center gap-2", children: [i.jsx(Qt, { size: 18 }), " Salvar ordem"] })] })] }), i.jsx("p", { className: bl, children: "Arraste para reordenar. Fotos s\xF3 aparecem no site ap\xF3s salvar." }), i.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: Oe.sort((h, M) => h.order - M.order).map((h, M) => i.jsxs("div", { className: `${$e} rounded-lg overflow-hidden border ${k} group relative`, children: [i.jsx("img", { src: h.src, alt: h.title, className: "w-full aspect-square object-cover" }), i.jsxs("div", { className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2", children: [i.jsx("button", { onClick: () => wt2(h.id, -1), disabled: M === 0, className: "p-2 bg-white rounded", children: "\u2190" }), i.jsx("button", { onClick: () => Vn(h.id), className: "p-2 bg-red-500 text-white rounded", children: i.jsx(Ft, { size: 18 }) }), i.jsx("button", { onClick: () => wt2(h.id, 1), disabled: M === Oe.length - 1, className: "p-2 bg-white rounded", children: "\u2192" })] }), i.jsx("p", { className: "p-2 text-sm truncate", children: h.title })] }, h.id)) }), Oe.length === 0 && i.jsx("p", { className: `${bl} text-center py-12`, children: "Nenhuma foto. Use Upload para adicionar." })] }), Z === "blog" && i.jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [i.jsxs("div", { className: "flex justify-between items-center", children: [i.jsx("h2", { className: "text-2xl font-bold text-[#00338D]", children: "Blog" }), i.jsxs("button", { onClick: Hl, className: "bg-[#00338D] text-white px-4 py-2 rounded-lg flex items-center gap-2", children: [i.jsx(Xt, { size: 18 }), " Novo Post"] })] }), K2 && i.jsxs("div", { className: `${$e} rounded-xl p-6 border ${k} space-y-4`, children: [i.jsx("input", { placeholder: "T\xEDtulo *", value: K2.title, onChange: (h) => Ge({ ...K2, title: h.target.value }), className: `w-full px-4 py-2 rounded-lg border ${k}` }), i.jsx("input", { placeholder: "Data *", value: K2.date, onChange: (h) => Ge({ ...K2, date: h.target.value }), className: `w-full px-4 py-2 rounded-lg border ${k}` }), i.jsx("input", { placeholder: "URL Imagem", value: K2.image, onChange: (h) => Ge({ ...K2, image: h.target.value }), className: `w-full px-4 py-2 rounded-lg border ${k}` }), i.jsx("textarea", { placeholder: "Conte\xFAdo", value: K2.content || "", onChange: (h) => Ge({ ...K2, content: h.target.value }), className: `w-full px-4 py-2 rounded-lg border ${k} h-32` }), i.jsxs("div", { className: "flex gap-2", children: [i.jsxs("button", { onClick: Ka, disabled: de === "saving", className: "bg-[#00338D] text-white px-6 py-2 rounded-lg flex items-center gap-2", children: [i.jsx(Qt, { size: 18 }), " Salvar"] }), i.jsx("button", { onClick: () => Ge(null), className: "px-4 py-2 border rounded-lg", children: "Cancelar" })] })] }), se.map((h) => i.jsxs("div", { className: `${$e} rounded-lg p-4 border ${k} flex justify-between`, children: [i.jsxs("div", { children: [i.jsx("p", { className: "font-bold", children: h.title }), i.jsx("p", { className: "text-sm text-muted", children: h.date })] }), i.jsxs("div", { className: "flex gap-2", children: [i.jsx("button", { onClick: () => Ge(h), className: "px-4 py-2 bg-[#00338D] text-white rounded-lg", children: "Editar" }), i.jsx("button", { onClick: () => mi(h.id), className: "p-2 text-red-500 hover:bg-red-500/10 rounded", children: i.jsx(Ft, { size: 18 }) })] })] }, h.id)), se.length === 0 && !K2 && i.jsx("p", { className: `${bl} text-center py-12`, children: "Nenhum post." })] }), Z === "leadership" && i.jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [i.jsxs("div", { className: "flex justify-between items-center", children: [i.jsx("h2", { className: "text-2xl font-bold text-[#00338D]", children: "Lideran\xE7a" }), i.jsxs("button", { onClick: xi, disabled: de === "saving", className: "bg-[#00338D] text-white px-4 py-2 rounded-lg flex items-center gap-2", children: [i.jsx(Qt, { size: 18 }), " Salvar"] })] }), ["coCaptains", "team", "primaryLeads", "secondaryLeads", ...Object.keys(A).filter((h) => !["coCaptains", "team", "primaryLeads", "secondaryLeads"].includes(h))].map((h) => {
      const M = A[h] || [];
      return i.jsxs("div", { className: `${$e} rounded-xl p-6 border ${k}`, children: [i.jsxs("div", { className: "flex justify-between items-center mb-4", children: [i.jsx("h3", { className: "font-bold uppercase", children: h }), i.jsxs("button", { onClick: () => Bt2(h), className: "text-[#00338D] flex items-center gap-1", children: [i.jsx(Xt, { size: 16 }), " Adicionar"] })] }), M.map((X, re2) => i.jsxs("div", { className: "flex gap-4 mb-4 p-3 rounded-lg border", children: [i.jsx("input", { placeholder: "Nome", value: X.name, onChange: (pe) => {
        const ie = { ...A };
        ie[h] || (ie[h] = []), ie[h][re2].name = pe.target.value, _2(ie);
      }, className: "flex-1 px-3 py-2 rounded border" }), i.jsx("input", { placeholder: "Cargo", value: X.title, onChange: (pe) => {
        const ie = { ...A };
        ie[h] || (ie[h] = []), ie[h][re2].title = pe.target.value, _2(ie);
      }, className: "flex-1 px-3 py-2 rounded border" }), i.jsx("input", { placeholder: "URL Imagem", value: X.image || "", onChange: (pe) => {
        const ie = { ...A };
        ie[h] || (ie[h] = []), ie[h][re2].image = pe.target.value, _2(ie);
      }, className: "flex-1 px-3 py-2 rounded border" }), i.jsx("button", { onClick: () => Fe(h, re2), className: "p-2 text-red-500", children: i.jsx(Ft, { size: 18 }) })] }, re2))] }, h);
    })] }), Z === "achievements" && i.jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [i.jsxs("div", { className: "flex justify-between items-center", children: [i.jsx("h2", { className: "text-2xl font-bold text-[#00338D]", children: "Conquistas" }), i.jsxs("button", { onClick: vi, className: "bg-[#00338D] text-white px-4 py-2 rounded-lg flex items-center gap-2", children: [i.jsx(Xt, { size: 18 }), " Nova"] })] }), be && i.jsxs("div", { className: `${$e} rounded-xl p-6 border ${k} space-y-4`, children: [i.jsx("input", { placeholder: "Valor", value: be.value, onChange: (h) => Be({ ...be, value: h.target.value }), className: `w-full px-4 py-2 rounded-lg border ${k}` }), i.jsx("input", { placeholder: "Label", value: be.label, onChange: (h) => Be({ ...be, label: h.target.value }), className: `w-full px-4 py-2 rounded-lg border ${k}` }), i.jsx("input", { placeholder: "URL Imagem", value: be.image, onChange: (h) => Be({ ...be, image: h.target.value }), className: `w-full px-4 py-2 rounded-lg border ${k}` }), i.jsxs("div", { className: "flex gap-2", children: [i.jsxs("button", { onClick: di, disabled: de === "saving", className: "bg-[#00338D] text-white px-6 py-2 rounded-lg flex items-center gap-2", children: [i.jsx(Qt, { size: 18 }), " Salvar"] }), i.jsx("button", { onClick: () => Be(null), className: "px-4 py-2 border rounded-lg", children: "Cancelar" })] })] }), H.map((h) => i.jsxs("div", { className: `${$e} rounded-lg p-4 border ${k} flex justify-between`, children: [i.jsx("div", { children: i.jsxs("p", { className: "font-bold", children: [h.value, " - ", h.label] }) }), i.jsxs("div", { className: "flex gap-2", children: [i.jsx("button", { onClick: () => Be(h), className: "px-4 py-2 bg-[#00338D] text-white rounded-lg", children: "Editar" }), i.jsx("button", { onClick: () => hi(h.id), className: "p-2 text-red-500", children: i.jsx(Ft, { size: 18 }) })] })] }, h.id)), H.length === 0 && !be && i.jsx("p", { className: `${bl} text-center py-12`, children: "Nenhuma conquista." })] }), Z === "emails" && i.jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [i.jsxs("div", { className: "flex justify-between items-center", children: [i.jsx("h2", { className: "text-2xl font-bold text-[#00338D]", children: "Assinantes" }), i.jsxs("button", { onClick: () => Ke(true), className: "bg-[#00338D] text-white px-4 py-2 rounded-lg flex items-center gap-2", children: [i.jsx(Gt, { size: 18 }), " Enviar Email"] })] }), ft2 && i.jsxs("div", { className: `${$e} rounded-xl p-6 border ${k} space-y-4`, children: [i.jsx("input", { placeholder: "Assunto", value: ot2, onChange: (h) => Ql(h.target.value), className: `w-full px-4 py-2 rounded-lg border ${k}` }), i.jsx("textarea", { placeholder: "Mensagem", value: sl, onChange: (h) => j(h.target.value), className: `w-full px-4 py-2 rounded-lg border ${k} h-32` }), i.jsxs("div", { className: "flex gap-2", children: [i.jsx("button", { onClick: gi, disabled: de === "saving", className: "bg-[#00338D] text-white px-6 py-2 rounded-lg", children: "Enviar" }), i.jsx("button", { onClick: () => {
      Ke(false), Ql(""), j("");
    }, className: "px-4 py-2 border rounded-lg", children: "Cancelar" })] })] }), i.jsx("div", { className: "space-y-2", children: he.map((h, M) => i.jsxs("div", { className: `${$e} rounded-lg p-4 border ${k} flex justify-between`, children: [i.jsx("span", { children: h.email }), i.jsx("span", { className: "text-sm text-muted", children: new Date(h.subscribedAt).toLocaleDateString("pt-BR") })] }, M)) }), he.length === 0 && i.jsx("p", { className: `${bl} text-center py-12`, children: "Nenhum assinante." })] })] })] })] }) });
  };
  function bx() {
    const [o2, p] = m.useState("home"), [D2, d] = m.useState(false);
    return m.useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [o2]), i.jsxs("div", { className: "min-h-screen bg-white flex flex-col", children: [i.jsx(X0, { onNavigate: p }), i.jsxs("main", { className: "flex-grow", children: [o2 === "home" && i.jsxs(i.Fragment, { children: [i.jsx(Q0, {}), i.jsx(Jr, {}), i.jsx(V0, {}), i.jsx(kr, { onNavigate: p, showReadMore: true }), i.jsx(ax, { onReadMore: () => p("blog") })] }), o2 === "leadership" && i.jsx(ox, {}), o2 === "teams" && i.jsx(dx, {}), o2 === "story" && i.jsx(kr, { onNavigate: p, showReadMore: false }), o2 === "photos" && i.jsx(rx, { onOpenGallery: () => p("photo-gallery") }), o2 === "photo-gallery" && i.jsx(mx, { onBack: () => p("photos") }), o2 === "blog" && i.jsx(xx, { onNavigate: (z) => p(z), onBack: () => p("home") }), o2 === "article" && i.jsx(hx, { onBack: () => p("blog") }), o2 === "conquistas" && i.jsxs("div", { className: "font-sans", children: [i.jsxs("div", { className: "bg-[#00338D] py-20 text-center", children: [i.jsx("h1", { className: "text-4xl md:text-6xl font-display font-bold text-white mb-4", children: "Conquistas" }), i.jsx("p", { className: "text-xl text-white/80", children: "Nossas vit\xF3rias e campeonatos" })] }), i.jsx(Jr, {}), i.jsx("div", { className: "py-20 text-center container mx-auto px-4", children: i.jsx("p", { className: "text-xl text-gray-600", children: "Mais detalhes em breve..." }) })] }), o2 === "support" && i.jsx(vx, {})] }), i.jsx(fx, {}), D2 && i.jsx(gx, { onClose: () => d(false) })] });
  }
  var nm = document.getElementById("root");
  if (!nm) throw new Error("Could not find root element to mount to");
  var px = G0.createRoot(nm);
  px.render(i.jsx(St.StrictMode, { children: i.jsx(bx, {}) }));
})();
/**
* @license React
* react.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license lucide-react v0.563.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react-dom.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react-jsx-runtime.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* scheduler.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
/**
* @license React
* react-dom-client.production.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/

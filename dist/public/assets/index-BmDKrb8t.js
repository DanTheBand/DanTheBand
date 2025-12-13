function Fy(i, s) {
  for (var c = 0; c < s.length; c++) {
    const r = s[c];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const f in r)
        if (f !== "default" && !(f in i)) {
          const d = Object.getOwnPropertyDescriptor(r, f);
          d &&
            Object.defineProperty(
              i,
              f,
              d.get ? d : { enumerable: !0, get: () => r[f] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const f of document.querySelectorAll('link[rel="modulepreload"]')) r(f);
  new MutationObserver((f) => {
    for (const d of f)
      if (d.type === "childList")
        for (const p of d.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && r(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(f) {
    const d = {};
    return (
      f.integrity && (d.integrity = f.integrity),
      f.referrerPolicy && (d.referrerPolicy = f.referrerPolicy),
      f.crossOrigin === "use-credentials"
        ? (d.credentials = "include")
        : f.crossOrigin === "anonymous"
          ? (d.credentials = "omit")
          : (d.credentials = "same-origin"),
      d
    );
  }
  function r(f) {
    if (f.ep) return;
    f.ep = !0;
    const d = c(f);
    fetch(f.href, d);
  }
})();
function up(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default")
    ? i.default
    : i;
}
var Vc = { exports: {} },
  Bi = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wh;
function Wy() {
  if (wh) return Bi;
  wh = 1;
  var i = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.fragment");
  function c(r, f, d) {
    var p = null;
    if (
      (d !== void 0 && (p = "" + d),
      f.key !== void 0 && (p = "" + f.key),
      "key" in f)
    ) {
      d = {};
      for (var x in f) x !== "key" && (d[x] = f[x]);
    } else d = f;
    return (
      (f = d.ref),
      { $$typeof: i, type: r, key: p, ref: f !== void 0 ? f : null, props: d }
    );
  }
  return ((Bi.Fragment = s), (Bi.jsx = c), (Bi.jsxs = c), Bi);
}
var Eh;
function Py() {
  return (Eh || ((Eh = 1), (Vc.exports = Wy())), Vc.exports);
}
var y = Py(),
  Xc = { exports: {} },
  Li = {},
  Qc = { exports: {} },
  Zc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Th;
function Iy() {
  return (
    Th ||
      ((Th = 1),
      (function (i) {
        function s(A, k) {
          var j = A.length;
          A.push(k);
          t: for (; 0 < j; ) {
            var it = (j - 1) >>> 1,
              rt = A[it];
            if (0 < f(rt, k)) ((A[it] = k), (A[j] = rt), (j = it));
            else break t;
          }
        }
        function c(A) {
          return A.length === 0 ? null : A[0];
        }
        function r(A) {
          if (A.length === 0) return null;
          var k = A[0],
            j = A.pop();
          if (j !== k) {
            A[0] = j;
            t: for (var it = 0, rt = A.length, w = rt >>> 1; it < w; ) {
              var Y = 2 * (it + 1) - 1,
                L = A[Y],
                Q = Y + 1,
                W = A[Q];
              if (0 > f(L, j))
                Q < rt && 0 > f(W, L)
                  ? ((A[it] = W), (A[Q] = j), (it = Q))
                  : ((A[it] = L), (A[Y] = j), (it = Y));
              else if (Q < rt && 0 > f(W, j))
                ((A[it] = W), (A[Q] = j), (it = Q));
              else break t;
            }
          }
          return k;
        }
        function f(A, k) {
          var j = A.sortIndex - k.sortIndex;
          return j !== 0 ? j : A.id - k.id;
        }
        if (
          ((i.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var d = performance;
          i.unstable_now = function () {
            return d.now();
          };
        } else {
          var p = Date,
            x = p.now();
          i.unstable_now = function () {
            return p.now() - x;
          };
        }
        var v = [],
          h = [],
          b = 1,
          m = null,
          N = 3,
          O = !1,
          R = !1,
          H = !1,
          U = !1,
          q = typeof setTimeout == "function" ? setTimeout : null,
          F = typeof clearTimeout == "function" ? clearTimeout : null,
          K = typeof setImmediate < "u" ? setImmediate : null;
        function $(A) {
          for (var k = c(h); k !== null; ) {
            if (k.callback === null) r(h);
            else if (k.startTime <= A)
              (r(h), (k.sortIndex = k.expirationTime), s(v, k));
            else break;
            k = c(h);
          }
        }
        function P(A) {
          if (((H = !1), $(A), !R))
            if (c(v) !== null) ((R = !0), I || ((I = !0), ht()));
            else {
              var k = c(h);
              k !== null && xt(P, k.startTime - A);
            }
        }
        var I = !1,
          Z = -1,
          X = 5,
          dt = -1;
        function bt() {
          return U ? !0 : !(i.unstable_now() - dt < X);
        }
        function wt() {
          if (((U = !1), I)) {
            var A = i.unstable_now();
            dt = A;
            var k = !0;
            try {
              t: {
                ((R = !1), H && ((H = !1), F(Z), (Z = -1)), (O = !0));
                var j = N;
                try {
                  e: {
                    for (
                      $(A), m = c(v);
                      m !== null && !(m.expirationTime > A && bt());

                    ) {
                      var it = m.callback;
                      if (typeof it == "function") {
                        ((m.callback = null), (N = m.priorityLevel));
                        var rt = it(m.expirationTime <= A);
                        if (((A = i.unstable_now()), typeof rt == "function")) {
                          ((m.callback = rt), $(A), (k = !0));
                          break e;
                        }
                        (m === c(v) && r(v), $(A));
                      } else r(v);
                      m = c(v);
                    }
                    if (m !== null) k = !0;
                    else {
                      var w = c(h);
                      (w !== null && xt(P, w.startTime - A), (k = !1));
                    }
                  }
                  break t;
                } finally {
                  ((m = null), (N = j), (O = !1));
                }
                k = void 0;
              }
            } finally {
              k ? ht() : (I = !1);
            }
          }
        }
        var ht;
        if (typeof K == "function")
          ht = function () {
            K(wt);
          };
        else if (typeof MessageChannel < "u") {
          var pt = new MessageChannel(),
            vt = pt.port2;
          ((pt.port1.onmessage = wt),
            (ht = function () {
              vt.postMessage(null);
            }));
        } else
          ht = function () {
            q(wt, 0);
          };
        function xt(A, k) {
          Z = q(function () {
            A(i.unstable_now());
          }, k);
        }
        ((i.unstable_IdlePriority = 5),
          (i.unstable_ImmediatePriority = 1),
          (i.unstable_LowPriority = 4),
          (i.unstable_NormalPriority = 3),
          (i.unstable_Profiling = null),
          (i.unstable_UserBlockingPriority = 2),
          (i.unstable_cancelCallback = function (A) {
            A.callback = null;
          }),
          (i.unstable_forceFrameRate = function (A) {
            0 > A || 125 < A
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (X = 0 < A ? Math.floor(1e3 / A) : 5);
          }),
          (i.unstable_getCurrentPriorityLevel = function () {
            return N;
          }),
          (i.unstable_next = function (A) {
            switch (N) {
              case 1:
              case 2:
              case 3:
                var k = 3;
                break;
              default:
                k = N;
            }
            var j = N;
            N = k;
            try {
              return A();
            } finally {
              N = j;
            }
          }),
          (i.unstable_requestPaint = function () {
            U = !0;
          }),
          (i.unstable_runWithPriority = function (A, k) {
            switch (A) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                A = 3;
            }
            var j = N;
            N = A;
            try {
              return k();
            } finally {
              N = j;
            }
          }),
          (i.unstable_scheduleCallback = function (A, k, j) {
            var it = i.unstable_now();
            switch (
              (typeof j == "object" && j !== null
                ? ((j = j.delay),
                  (j = typeof j == "number" && 0 < j ? it + j : it))
                : (j = it),
              A)
            ) {
              case 1:
                var rt = -1;
                break;
              case 2:
                rt = 250;
                break;
              case 5:
                rt = 1073741823;
                break;
              case 4:
                rt = 1e4;
                break;
              default:
                rt = 5e3;
            }
            return (
              (rt = j + rt),
              (A = {
                id: b++,
                callback: k,
                priorityLevel: A,
                startTime: j,
                expirationTime: rt,
                sortIndex: -1,
              }),
              j > it
                ? ((A.sortIndex = j),
                  s(h, A),
                  c(v) === null &&
                    A === c(h) &&
                    (H ? (F(Z), (Z = -1)) : (H = !0), xt(P, j - it)))
                : ((A.sortIndex = rt),
                  s(v, A),
                  R || O || ((R = !0), I || ((I = !0), ht()))),
              A
            );
          }),
          (i.unstable_shouldYield = bt),
          (i.unstable_wrapCallback = function (A) {
            var k = N;
            return function () {
              var j = N;
              N = k;
              try {
                return A.apply(this, arguments);
              } finally {
                N = j;
              }
            };
          }));
      })(Zc)),
    Zc
  );
}
var Ah;
function t0() {
  return (Ah || ((Ah = 1), (Qc.exports = Iy())), Qc.exports);
}
var Kc = { exports: {} },
  mt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Nh;
function e0() {
  if (Nh) return mt;
  Nh = 1;
  var i = Symbol.for("react.transitional.element"),
    s = Symbol.for("react.portal"),
    c = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    f = Symbol.for("react.profiler"),
    d = Symbol.for("react.consumer"),
    p = Symbol.for("react.context"),
    x = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    h = Symbol.for("react.memo"),
    b = Symbol.for("react.lazy"),
    m = Symbol.for("react.activity"),
    N = Symbol.iterator;
  function O(w) {
    return w === null || typeof w != "object"
      ? null
      : ((w = (N && w[N]) || w["@@iterator"]),
        typeof w == "function" ? w : null);
  }
  var R = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    H = Object.assign,
    U = {};
  function q(w, Y, L) {
    ((this.props = w),
      (this.context = Y),
      (this.refs = U),
      (this.updater = L || R));
  }
  ((q.prototype.isReactComponent = {}),
    (q.prototype.setState = function (w, Y) {
      if (typeof w != "object" && typeof w != "function" && w != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, w, Y, "setState");
    }),
    (q.prototype.forceUpdate = function (w) {
      this.updater.enqueueForceUpdate(this, w, "forceUpdate");
    }));
  function F() {}
  F.prototype = q.prototype;
  function K(w, Y, L) {
    ((this.props = w),
      (this.context = Y),
      (this.refs = U),
      (this.updater = L || R));
  }
  var $ = (K.prototype = new F());
  (($.constructor = K), H($, q.prototype), ($.isPureReactComponent = !0));
  var P = Array.isArray;
  function I() {}
  var Z = { H: null, A: null, T: null, S: null },
    X = Object.prototype.hasOwnProperty;
  function dt(w, Y, L) {
    var Q = L.ref;
    return {
      $$typeof: i,
      type: w,
      key: Y,
      ref: Q !== void 0 ? Q : null,
      props: L,
    };
  }
  function bt(w, Y) {
    return dt(w.type, Y, w.props);
  }
  function wt(w) {
    return typeof w == "object" && w !== null && w.$$typeof === i;
  }
  function ht(w) {
    var Y = { "=": "=0", ":": "=2" };
    return (
      "$" +
      w.replace(/[=:]/g, function (L) {
        return Y[L];
      })
    );
  }
  var pt = /\/+/g;
  function vt(w, Y) {
    return typeof w == "object" && w !== null && w.key != null
      ? ht("" + w.key)
      : Y.toString(36);
  }
  function xt(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (
          (typeof w.status == "string"
            ? w.then(I, I)
            : ((w.status = "pending"),
              w.then(
                function (Y) {
                  w.status === "pending" &&
                    ((w.status = "fulfilled"), (w.value = Y));
                },
                function (Y) {
                  w.status === "pending" &&
                    ((w.status = "rejected"), (w.reason = Y));
                },
              )),
          w.status)
        ) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
        }
    }
    throw w;
  }
  function A(w, Y, L, Q, W) {
    var ot = typeof w;
    (ot === "undefined" || ot === "boolean") && (w = null);
    var at = !1;
    if (w === null) at = !0;
    else
      switch (ot) {
        case "bigint":
        case "string":
        case "number":
          at = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case i:
            case s:
              at = !0;
              break;
            case b:
              return ((at = w._init), A(at(w._payload), Y, L, Q, W));
          }
      }
    if (at)
      return (
        (W = W(w)),
        (at = Q === "" ? "." + vt(w, 0) : Q),
        P(W)
          ? ((L = ""),
            at != null && (L = at.replace(pt, "$&/") + "/"),
            A(W, Y, L, "", function (ae) {
              return ae;
            }))
          : W != null &&
            (wt(W) &&
              (W = bt(
                W,
                L +
                  (W.key == null || (w && w.key === W.key)
                    ? ""
                    : ("" + W.key).replace(pt, "$&/") + "/") +
                  at,
              )),
            Y.push(W)),
        1
      );
    at = 0;
    var ut = Q === "" ? "." : Q + ":";
    if (P(w))
      for (var Ct = 0; Ct < w.length; Ct++)
        ((Q = w[Ct]), (ot = ut + vt(Q, Ct)), (at += A(Q, Y, L, ot, W)));
    else if (((Ct = O(w)), typeof Ct == "function"))
      for (w = Ct.call(w), Ct = 0; !(Q = w.next()).done; )
        ((Q = Q.value), (ot = ut + vt(Q, Ct++)), (at += A(Q, Y, L, ot, W)));
    else if (ot === "object") {
      if (typeof w.then == "function") return A(xt(w), Y, L, Q, W);
      throw (
        (Y = String(w)),
        Error(
          "Objects are not valid as a React child (found: " +
            (Y === "[object Object]"
              ? "object with keys {" + Object.keys(w).join(", ") + "}"
              : Y) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return at;
  }
  function k(w, Y, L) {
    if (w == null) return w;
    var Q = [],
      W = 0;
    return (
      A(w, Q, "", "", function (ot) {
        return Y.call(L, ot, W++);
      }),
      Q
    );
  }
  function j(w) {
    if (w._status === -1) {
      var Y = w._result;
      ((Y = Y()),
        Y.then(
          function (L) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 1), (w._result = L));
          },
          function (L) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 2), (w._result = L));
          },
        ),
        w._status === -1 && ((w._status = 0), (w._result = Y)));
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var it =
      typeof reportError == "function"
        ? reportError
        : function (w) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var Y = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof w == "object" &&
                  w !== null &&
                  typeof w.message == "string"
                    ? String(w.message)
                    : String(w),
                error: w,
              });
              if (!window.dispatchEvent(Y)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", w);
              return;
            }
            console.error(w);
          },
    rt = {
      map: k,
      forEach: function (w, Y, L) {
        k(
          w,
          function () {
            Y.apply(this, arguments);
          },
          L,
        );
      },
      count: function (w) {
        var Y = 0;
        return (
          k(w, function () {
            Y++;
          }),
          Y
        );
      },
      toArray: function (w) {
        return (
          k(w, function (Y) {
            return Y;
          }) || []
        );
      },
      only: function (w) {
        if (!wt(w))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return w;
      },
    };
  return (
    (mt.Activity = m),
    (mt.Children = rt),
    (mt.Component = q),
    (mt.Fragment = c),
    (mt.Profiler = f),
    (mt.PureComponent = K),
    (mt.StrictMode = r),
    (mt.Suspense = v),
    (mt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Z),
    (mt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (w) {
        return Z.H.useMemoCache(w);
      },
    }),
    (mt.cache = function (w) {
      return function () {
        return w.apply(null, arguments);
      };
    }),
    (mt.cacheSignal = function () {
      return null;
    }),
    (mt.cloneElement = function (w, Y, L) {
      if (w == null)
        throw Error(
          "The argument must be a React element, but you passed " + w + ".",
        );
      var Q = H({}, w.props),
        W = w.key;
      if (Y != null)
        for (ot in (Y.key !== void 0 && (W = "" + Y.key), Y))
          !X.call(Y, ot) ||
            ot === "key" ||
            ot === "__self" ||
            ot === "__source" ||
            (ot === "ref" && Y.ref === void 0) ||
            (Q[ot] = Y[ot]);
      var ot = arguments.length - 2;
      if (ot === 1) Q.children = L;
      else if (1 < ot) {
        for (var at = Array(ot), ut = 0; ut < ot; ut++)
          at[ut] = arguments[ut + 2];
        Q.children = at;
      }
      return dt(w.type, W, Q);
    }),
    (mt.createContext = function (w) {
      return (
        (w = {
          $$typeof: p,
          _currentValue: w,
          _currentValue2: w,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (w.Provider = w),
        (w.Consumer = { $$typeof: d, _context: w }),
        w
      );
    }),
    (mt.createElement = function (w, Y, L) {
      var Q,
        W = {},
        ot = null;
      if (Y != null)
        for (Q in (Y.key !== void 0 && (ot = "" + Y.key), Y))
          X.call(Y, Q) &&
            Q !== "key" &&
            Q !== "__self" &&
            Q !== "__source" &&
            (W[Q] = Y[Q]);
      var at = arguments.length - 2;
      if (at === 1) W.children = L;
      else if (1 < at) {
        for (var ut = Array(at), Ct = 0; Ct < at; Ct++)
          ut[Ct] = arguments[Ct + 2];
        W.children = ut;
      }
      if (w && w.defaultProps)
        for (Q in ((at = w.defaultProps), at))
          W[Q] === void 0 && (W[Q] = at[Q]);
      return dt(w, ot, W);
    }),
    (mt.createRef = function () {
      return { current: null };
    }),
    (mt.forwardRef = function (w) {
      return { $$typeof: x, render: w };
    }),
    (mt.isValidElement = wt),
    (mt.lazy = function (w) {
      return { $$typeof: b, _payload: { _status: -1, _result: w }, _init: j };
    }),
    (mt.memo = function (w, Y) {
      return { $$typeof: h, type: w, compare: Y === void 0 ? null : Y };
    }),
    (mt.startTransition = function (w) {
      var Y = Z.T,
        L = {};
      Z.T = L;
      try {
        var Q = w(),
          W = Z.S;
        (W !== null && W(L, Q),
          typeof Q == "object" &&
            Q !== null &&
            typeof Q.then == "function" &&
            Q.then(I, it));
      } catch (ot) {
        it(ot);
      } finally {
        (Y !== null && L.types !== null && (Y.types = L.types), (Z.T = Y));
      }
    }),
    (mt.unstable_useCacheRefresh = function () {
      return Z.H.useCacheRefresh();
    }),
    (mt.use = function (w) {
      return Z.H.use(w);
    }),
    (mt.useActionState = function (w, Y, L) {
      return Z.H.useActionState(w, Y, L);
    }),
    (mt.useCallback = function (w, Y) {
      return Z.H.useCallback(w, Y);
    }),
    (mt.useContext = function (w) {
      return Z.H.useContext(w);
    }),
    (mt.useDebugValue = function () {}),
    (mt.useDeferredValue = function (w, Y) {
      return Z.H.useDeferredValue(w, Y);
    }),
    (mt.useEffect = function (w, Y) {
      return Z.H.useEffect(w, Y);
    }),
    (mt.useEffectEvent = function (w) {
      return Z.H.useEffectEvent(w);
    }),
    (mt.useId = function () {
      return Z.H.useId();
    }),
    (mt.useImperativeHandle = function (w, Y, L) {
      return Z.H.useImperativeHandle(w, Y, L);
    }),
    (mt.useInsertionEffect = function (w, Y) {
      return Z.H.useInsertionEffect(w, Y);
    }),
    (mt.useLayoutEffect = function (w, Y) {
      return Z.H.useLayoutEffect(w, Y);
    }),
    (mt.useMemo = function (w, Y) {
      return Z.H.useMemo(w, Y);
    }),
    (mt.useOptimistic = function (w, Y) {
      return Z.H.useOptimistic(w, Y);
    }),
    (mt.useReducer = function (w, Y, L) {
      return Z.H.useReducer(w, Y, L);
    }),
    (mt.useRef = function (w) {
      return Z.H.useRef(w);
    }),
    (mt.useState = function (w) {
      return Z.H.useState(w);
    }),
    (mt.useSyncExternalStore = function (w, Y, L) {
      return Z.H.useSyncExternalStore(w, Y, L);
    }),
    (mt.useTransition = function () {
      return Z.H.useTransition();
    }),
    (mt.version = "19.2.1"),
    mt
  );
}
var Ch;
function ws() {
  return (Ch || ((Ch = 1), (Kc.exports = e0())), Kc.exports);
}
var Jc = { exports: {} },
  de = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oh;
function n0() {
  if (Oh) return de;
  Oh = 1;
  var i = ws();
  function s(v) {
    var h = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      h += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        h += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return (
      "Minified React error #" +
      v +
      "; visit " +
      h +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c() {}
  var r = {
      d: {
        f: c,
        r: function () {
          throw Error(s(522));
        },
        D: c,
        C: c,
        L: c,
        m: c,
        X: c,
        S: c,
        M: c,
      },
      p: 0,
      findDOMNode: null,
    },
    f = Symbol.for("react.portal");
  function d(v, h, b) {
    var m =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: f,
      key: m == null ? null : "" + m,
      children: v,
      containerInfo: h,
      implementation: b,
    };
  }
  var p = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function x(v, h) {
    if (v === "font") return "";
    if (typeof h == "string") return h === "use-credentials" ? h : "";
  }
  return (
    (de.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (de.createPortal = function (v, h) {
      var b =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!h || (h.nodeType !== 1 && h.nodeType !== 9 && h.nodeType !== 11))
        throw Error(s(299));
      return d(v, h, null, b);
    }),
    (de.flushSync = function (v) {
      var h = p.T,
        b = r.p;
      try {
        if (((p.T = null), (r.p = 2), v)) return v();
      } finally {
        ((p.T = h), (r.p = b), r.d.f());
      }
    }),
    (de.preconnect = function (v, h) {
      typeof v == "string" &&
        (h
          ? ((h = h.crossOrigin),
            (h =
              typeof h == "string"
                ? h === "use-credentials"
                  ? h
                  : ""
                : void 0))
          : (h = null),
        r.d.C(v, h));
    }),
    (de.prefetchDNS = function (v) {
      typeof v == "string" && r.d.D(v);
    }),
    (de.preinit = function (v, h) {
      if (typeof v == "string" && h && typeof h.as == "string") {
        var b = h.as,
          m = x(b, h.crossOrigin),
          N = typeof h.integrity == "string" ? h.integrity : void 0,
          O = typeof h.fetchPriority == "string" ? h.fetchPriority : void 0;
        b === "style"
          ? r.d.S(v, typeof h.precedence == "string" ? h.precedence : void 0, {
              crossOrigin: m,
              integrity: N,
              fetchPriority: O,
            })
          : b === "script" &&
            r.d.X(v, {
              crossOrigin: m,
              integrity: N,
              fetchPriority: O,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
      }
    }),
    (de.preinitModule = function (v, h) {
      if (typeof v == "string")
        if (typeof h == "object" && h !== null) {
          if (h.as == null || h.as === "script") {
            var b = x(h.as, h.crossOrigin);
            r.d.M(v, {
              crossOrigin: b,
              integrity: typeof h.integrity == "string" ? h.integrity : void 0,
              nonce: typeof h.nonce == "string" ? h.nonce : void 0,
            });
          }
        } else h == null && r.d.M(v);
    }),
    (de.preload = function (v, h) {
      if (
        typeof v == "string" &&
        typeof h == "object" &&
        h !== null &&
        typeof h.as == "string"
      ) {
        var b = h.as,
          m = x(b, h.crossOrigin);
        r.d.L(v, b, {
          crossOrigin: m,
          integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          nonce: typeof h.nonce == "string" ? h.nonce : void 0,
          type: typeof h.type == "string" ? h.type : void 0,
          fetchPriority:
            typeof h.fetchPriority == "string" ? h.fetchPriority : void 0,
          referrerPolicy:
            typeof h.referrerPolicy == "string" ? h.referrerPolicy : void 0,
          imageSrcSet:
            typeof h.imageSrcSet == "string" ? h.imageSrcSet : void 0,
          imageSizes: typeof h.imageSizes == "string" ? h.imageSizes : void 0,
          media: typeof h.media == "string" ? h.media : void 0,
        });
      }
    }),
    (de.preloadModule = function (v, h) {
      if (typeof v == "string")
        if (h) {
          var b = x(h.as, h.crossOrigin);
          r.d.m(v, {
            as: typeof h.as == "string" && h.as !== "script" ? h.as : void 0,
            crossOrigin: b,
            integrity: typeof h.integrity == "string" ? h.integrity : void 0,
          });
        } else r.d.m(v);
    }),
    (de.requestFormReset = function (v) {
      r.d.r(v);
    }),
    (de.unstable_batchedUpdates = function (v, h) {
      return v(h);
    }),
    (de.useFormState = function (v, h, b) {
      return p.H.useFormState(v, h, b);
    }),
    (de.useFormStatus = function () {
      return p.H.useHostTransitionStatus();
    }),
    (de.version = "19.2.1"),
    de
  );
}
var Rh;
function fp() {
  if (Rh) return Jc.exports;
  Rh = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return (i(), (Jc.exports = n0()), Jc.exports);
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zh;
function a0() {
  if (zh) return Li;
  zh = 1;
  var i = t0(),
    s = ws(),
    c = fp();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function f(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function d(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return; ) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function p(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function x(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function v(t) {
    if (d(t) !== t) throw Error(r(188));
  }
  function h(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = d(t)), e === null)) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var l = n.return;
      if (l === null) break;
      var o = l.alternate;
      if (o === null) {
        if (((a = l.return), a !== null)) {
          n = a;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === n) return (v(l), t);
          if (o === a) return (v(l), e);
          o = o.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== a.return) ((n = l), (a = o));
      else {
        for (var u = !1, g = l.child; g; ) {
          if (g === n) {
            ((u = !0), (n = l), (a = o));
            break;
          }
          if (g === a) {
            ((u = !0), (a = l), (n = o));
            break;
          }
          g = g.sibling;
        }
        if (!u) {
          for (g = o.child; g; ) {
            if (g === n) {
              ((u = !0), (n = o), (a = l));
              break;
            }
            if (g === a) {
              ((u = !0), (a = o), (n = l));
              break;
            }
            g = g.sibling;
          }
          if (!u) throw Error(r(189));
        }
      }
      if (n.alternate !== a) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function b(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (((e = b(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var m = Object.assign,
    N = Symbol.for("react.element"),
    O = Symbol.for("react.transitional.element"),
    R = Symbol.for("react.portal"),
    H = Symbol.for("react.fragment"),
    U = Symbol.for("react.strict_mode"),
    q = Symbol.for("react.profiler"),
    F = Symbol.for("react.consumer"),
    K = Symbol.for("react.context"),
    $ = Symbol.for("react.forward_ref"),
    P = Symbol.for("react.suspense"),
    I = Symbol.for("react.suspense_list"),
    Z = Symbol.for("react.memo"),
    X = Symbol.for("react.lazy"),
    dt = Symbol.for("react.activity"),
    bt = Symbol.for("react.memo_cache_sentinel"),
    wt = Symbol.iterator;
  function ht(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (wt && t[wt]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var pt = Symbol.for("react.client.reference");
  function vt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === pt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case H:
        return "Fragment";
      case q:
        return "Profiler";
      case U:
        return "StrictMode";
      case P:
        return "Suspense";
      case I:
        return "SuspenseList";
      case dt:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case R:
          return "Portal";
        case K:
          return t.displayName || "Context";
        case F:
          return (t._context.displayName || "Context") + ".Consumer";
        case $:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case Z:
          return (
            (e = t.displayName || null),
            e !== null ? e : vt(t.type) || "Memo"
          );
        case X:
          ((e = t._payload), (t = t._init));
          try {
            return vt(t(e));
          } catch {}
      }
    return null;
  }
  var xt = Array.isArray,
    A = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    k = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    j = { pending: !1, data: null, method: null, action: null },
    it = [],
    rt = -1;
  function w(t) {
    return { current: t };
  }
  function Y(t) {
    0 > rt || ((t.current = it[rt]), (it[rt] = null), rt--);
  }
  function L(t, e) {
    (rt++, (it[rt] = t.current), (t.current = e));
  }
  var Q = w(null),
    W = w(null),
    ot = w(null),
    at = w(null);
  function ut(t, e) {
    switch ((L(ot, e), L(W, t), L(Q, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Qm(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = Qm(e)), (t = Zm(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (Y(Q), L(Q, t));
  }
  function Ct() {
    (Y(Q), Y(W), Y(ot));
  }
  function ae(t) {
    t.memoizedState !== null && L(at, t);
    var e = Q.current,
      n = Zm(e, t.type);
    e !== n && (L(W, t), L(Q, n));
  }
  function me(t) {
    (W.current === t && (Y(Q), Y(W)),
      at.current === t && (Y(at), (ji._currentValue = j)));
  }
  var le, yn;
  function We(t) {
    if (le === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((le = (e && e[1]) || ""),
          (yn =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      le +
      t +
      yn
    );
  }
  var Gl = !1;
  function Xa(t, e) {
    if (!t || Gl) return "";
    Gl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var V = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(V.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(V, []);
                } catch (D) {
                  var M = D;
                }
                Reflect.construct(t, [], V);
              } else {
                try {
                  V.call();
                } catch (D) {
                  M = D;
                }
                t.call(V.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (D) {
                M = D;
              }
              (V = t()) &&
                typeof V.catch == "function" &&
                V.catch(function () {});
            }
          } catch (D) {
            if (D && M && typeof D.stack == "string") return [D.stack, M.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name",
      );
      l &&
        l.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var o = a.DetermineComponentFrameRoot(),
        u = o[0],
        g = o[1];
      if (u && g) {
        var S = u.split(`
`),
          _ = g.split(`
`);
        for (
          l = a = 0;
          a < S.length && !S[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; l < _.length && !_[l].includes("DetermineComponentFrameRoot"); )
          l++;
        if (a === S.length || l === _.length)
          for (
            a = S.length - 1, l = _.length - 1;
            1 <= a && 0 <= l && S[a] !== _[l];

          )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (S[a] !== _[l]) {
            if (a !== 1 || l !== 1)
              do
                if ((a--, l--, 0 > l || S[a] !== _[l])) {
                  var B =
                    `
` + S[a].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      B.includes("<anonymous>") &&
                      (B = B.replace("<anonymous>", t.displayName)),
                    B
                  );
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      ((Gl = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? We(n) : "";
  }
  function ya(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return We(t.type);
      case 16:
        return We("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? We("Suspense Fallback")
          : We("Suspense");
      case 19:
        return We("SuspenseList");
      case 0:
      case 15:
        return Xa(t.type, !1);
      case 11:
        return Xa(t.type.render, !1);
      case 1:
        return Xa(t.type, !0);
      case 31:
        return We("Activity");
      default:
        return "";
    }
  }
  function Vl(t) {
    try {
      var e = "",
        n = null;
      do ((e += ya(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  var ze = Object.prototype.hasOwnProperty,
    Xl = i.unstable_scheduleCallback,
    Ql = i.unstable_cancelCallback,
    he = i.unstable_shouldYield,
    Gn = i.unstable_requestPaint,
    pe = i.unstable_now,
    _s = i.unstable_getCurrentPriorityLevel,
    ba = i.unstable_ImmediatePriority,
    Ki = i.unstable_UserBlockingPriority,
    xa = i.unstable_NormalPriority,
    Zl = i.unstable_LowPriority,
    bn = i.unstable_IdlePriority,
    Ji = i.log,
    Vn = i.unstable_setDisableYieldValue,
    Sa = null,
    ge = null;
  function Pe(t) {
    if (
      (typeof Ji == "function" && Vn(t),
      ge && typeof ge.setStrictMode == "function")
    )
      try {
        ge.setStrictMode(Sa, t);
      } catch {}
  }
  var ue = Math.clz32 ? Math.clz32 : on,
    Ms = Math.log,
    Kl = Math.LN2;
  function on(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((Ms(t) / Kl) | 0)) | 0);
  }
  var Qa = 256,
    Za = 262144,
    wa = 4194304;
  function sn(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function ft(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var l = 0,
      o = t.suspendedLanes,
      u = t.pingedLanes;
    t = t.warmLanes;
    var g = a & 134217727;
    return (
      g !== 0
        ? ((a = g & ~o),
          a !== 0
            ? (l = sn(a))
            : ((u &= g),
              u !== 0
                ? (l = sn(u))
                : n || ((n = g & ~t), n !== 0 && (l = sn(n)))))
        : ((g = a & ~o),
          g !== 0
            ? (l = sn(g))
            : u !== 0
              ? (l = sn(u))
              : n || ((n = a & ~t), n !== 0 && (l = sn(n)))),
      l === 0
        ? 0
        : e !== 0 &&
            e !== l &&
            (e & o) === 0 &&
            ((o = l & -l),
            (n = e & -e),
            o >= n || (o === 32 && (n & 4194048) !== 0))
          ? e
          : l
    );
  }
  function qt(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function It(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function fe() {
    var t = wa;
    return ((wa <<= 1), (wa & 62914560) === 0 && (wa = 4194304), t);
  }
  function Xn(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Gt(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function be(t, e, n, a, l, o) {
    var u = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var g = t.entanglements,
      S = t.expirationTimes,
      _ = t.hiddenUpdates;
    for (n = u & ~n; 0 < n; ) {
      var B = 31 - ue(n),
        V = 1 << B;
      ((g[B] = 0), (S[B] = -1));
      var M = _[B];
      if (M !== null)
        for (_[B] = null, B = 0; B < M.length; B++) {
          var D = M[B];
          D !== null && (D.lane &= -536870913);
        }
      n &= ~V;
    }
    (a !== 0 && Ea(t, a, 0),
      o !== 0 && l === 0 && t.tag !== 0 && (t.suspendedLanes |= o & ~(u & ~e)));
  }
  function Ea(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var a = 31 - ue(e);
    ((t.entangledLanes |= e),
      (t.entanglements[a] = t.entanglements[a] | 1073741824 | (n & 261930)));
  }
  function xe(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n; ) {
      var a = 31 - ue(n),
        l = 1 << a;
      ((l & e) | (t[a] & e) && (t[a] |= e), (n &= ~l));
    }
  }
  function Se(t, e) {
    var n = e & -e;
    return (
      (n = (n & 42) !== 0 ? 1 : Ka(n)),
      (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    );
  }
  function Ka(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Ie(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function js() {
    var t = k.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : ph(t.type));
  }
  function zu(t, e) {
    var n = k.p;
    try {
      return ((k.p = t), e());
    } finally {
      k.p = n;
    }
  }
  var Qn = Math.random().toString(36).slice(2),
    ie = "__reactFiber$" + Qn,
    we = "__reactProps$" + Qn,
    Ja = "__reactContainer$" + Qn,
    Ds = "__reactEvents$" + Qn,
    Yg = "__reactListeners$" + Qn,
    qg = "__reactHandles$" + Qn,
    _u = "__reactResources$" + Qn,
    Jl = "__reactMarker$" + Qn;
  function Hs(t) {
    (delete t[ie], delete t[we], delete t[Ds], delete t[Yg], delete t[qg]);
  }
  function $a(t) {
    var e = t[ie];
    if (e) return e;
    for (var n = t.parentNode; n; ) {
      if ((e = n[Ja] || n[ie])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = Im(t); t !== null; ) {
            if ((n = t[ie])) return n;
            t = Im(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function Fa(t) {
    if ((t = t[ie] || t[Ja])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function $l(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function Wa(t) {
    var e = t[_u];
    return (
      e ||
        (e = t[_u] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function te(t) {
    t[Jl] = !0;
  }
  var Mu = new Set(),
    ju = {};
  function Ta(t, e) {
    (Pa(t, e), Pa(t + "Capture", e));
  }
  function Pa(t, e) {
    for (ju[t] = e, t = 0; t < e.length; t++) Mu.add(e[t]);
  }
  var kg = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Du = {},
    Hu = {};
  function Gg(t) {
    return ze.call(Hu, t)
      ? !0
      : ze.call(Du, t)
        ? !1
        : kg.test(t)
          ? (Hu[t] = !0)
          : ((Du[t] = !0), !1);
  }
  function $i(t, e, n) {
    if (Gg(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Fi(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function xn(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + a);
    }
  }
  function ke(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Uu(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function Vg(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var l = a.get,
        o = a.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (u) {
            ((n = "" + u), o.call(this, u));
          },
        }),
        Object.defineProperty(t, e, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (u) {
            n = "" + u;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Us(t) {
    if (!t._valueTracker) {
      var e = Uu(t) ? "checked" : "value";
      t._valueTracker = Vg(t, e, "" + t[e]);
    }
  }
  function Bu(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      a = "";
    return (
      t && (a = Uu(t) ? (t.checked ? "true" : "false") : t.value),
      (t = a),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Wi(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var Xg = /[\n"\\]/g;
  function Ge(t) {
    return t.replace(Xg, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Bs(t, e, n, a, l, o, u, g) {
    ((t.name = ""),
      u != null &&
      typeof u != "function" &&
      typeof u != "symbol" &&
      typeof u != "boolean"
        ? (t.type = u)
        : t.removeAttribute("type"),
      e != null
        ? u === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + ke(e))
          : t.value !== "" + ke(e) && (t.value = "" + ke(e))
        : (u !== "submit" && u !== "reset") || t.removeAttribute("value"),
      e != null
        ? Ls(t, u, ke(e))
        : n != null
          ? Ls(t, u, ke(n))
          : a != null && t.removeAttribute("value"),
      l == null && o != null && (t.defaultChecked = !!o),
      l != null &&
        (t.checked = l && typeof l != "function" && typeof l != "symbol"),
      g != null &&
      typeof g != "function" &&
      typeof g != "symbol" &&
      typeof g != "boolean"
        ? (t.name = "" + ke(g))
        : t.removeAttribute("name"));
  }
  function Lu(t, e, n, a, l, o, u, g) {
    if (
      (o != null &&
        typeof o != "function" &&
        typeof o != "symbol" &&
        typeof o != "boolean" &&
        (t.type = o),
      e != null || n != null)
    ) {
      if (!((o !== "submit" && o !== "reset") || e != null)) {
        Us(t);
        return;
      }
      ((n = n != null ? "" + ke(n) : ""),
        (e = e != null ? "" + ke(e) : n),
        g || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((a = a ?? l),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (t.checked = g ? t.checked : !!a),
      (t.defaultChecked = !!a),
      u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (t.name = u),
      Us(t));
  }
  function Ls(t, e, n) {
    (e === "number" && Wi(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function Ia(t, e, n, a) {
    if (((t = t.options), e)) {
      e = {};
      for (var l = 0; l < n.length; l++) e["$" + n[l]] = !0;
      for (n = 0; n < t.length; n++)
        ((l = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== l && (t[n].selected = l),
          l && a && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + ke(n), e = null, l = 0; l < t.length; l++) {
        if (t[l].value === n) {
          ((t[l].selected = !0), a && (t[l].defaultSelected = !0));
          return;
        }
        e !== null || t[l].disabled || (e = t[l]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Yu(t, e, n) {
    if (
      e != null &&
      ((e = "" + ke(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + ke(n) : "";
  }
  function qu(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(r(92));
        if (xt(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        n = a;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = ke(e)),
      (t.defaultValue = n),
      (a = t.textContent),
      a === n && a !== "" && a !== null && (t.value = a),
      Us(t));
  }
  function tl(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var Qg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function ku(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? a
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : a
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || Qg.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function Gu(t, e, n) {
    if (e != null && typeof e != "object") throw Error(r(62));
    if (((t = t.style), n != null)) {
      for (var a in n)
        !n.hasOwnProperty(a) ||
          (e != null && e.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? t.setProperty(a, "")
            : a === "float"
              ? (t.cssFloat = "")
              : (t[a] = ""));
      for (var l in e)
        ((a = e[l]), e.hasOwnProperty(l) && n[l] !== a && ku(t, l, a));
    } else for (var o in e) e.hasOwnProperty(o) && ku(t, o, e[o]);
  }
  function Ys(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Zg = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Kg =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Pi(t) {
    return Kg.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function Sn() {}
  var qs = null;
  function ks(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var el = null,
    nl = null;
  function Vu(t) {
    var e = Fa(t);
    if (e && (t = e.stateNode)) {
      var n = t[we] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Bs(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + Ge("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var l = a[we] || null;
                if (!l) throw Error(r(90));
                Bs(
                  a,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name,
                );
              }
            }
            for (e = 0; e < n.length; e++)
              ((a = n[e]), a.form === t.form && Bu(a));
          }
          break t;
        case "textarea":
          Yu(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && Ia(t, !!n.multiple, e, !1));
      }
    }
  }
  var Gs = !1;
  function Xu(t, e, n) {
    if (Gs) return t(e, n);
    Gs = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (
        ((Gs = !1),
        (el !== null || nl !== null) &&
          (qo(), el && ((e = el), (t = nl), (nl = el = null), Vu(e), t)))
      )
        for (e = 0; e < t.length; e++) Vu(t[e]);
    }
  }
  function Fl(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[we] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
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
        ((a = !a.disabled) ||
          ((t = t.type),
          (a = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !a));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(r(231, e, typeof n));
    return n;
  }
  var wn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Vs = !1;
  if (wn)
    try {
      var Wl = {};
      (Object.defineProperty(Wl, "passive", {
        get: function () {
          Vs = !0;
        },
      }),
        window.addEventListener("test", Wl, Wl),
        window.removeEventListener("test", Wl, Wl));
    } catch {
      Vs = !1;
    }
  var Zn = null,
    Xs = null,
    Ii = null;
  function Qu() {
    if (Ii) return Ii;
    var t,
      e = Xs,
      n = e.length,
      a,
      l = "value" in Zn ? Zn.value : Zn.textContent,
      o = l.length;
    for (t = 0; t < n && e[t] === l[t]; t++);
    var u = n - t;
    for (a = 1; a <= u && e[n - a] === l[o - a]; a++);
    return (Ii = l.slice(t, 1 < a ? 1 - a : void 0));
  }
  function to(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function eo() {
    return !0;
  }
  function Zu() {
    return !1;
  }
  function Ee(t) {
    function e(n, a, l, o, u) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = a),
        (this.nativeEvent = o),
        (this.target = u),
        (this.currentTarget = null));
      for (var g in t)
        t.hasOwnProperty(g) && ((n = t[g]), (this[g] = n ? n(o) : o[g]));
      return (
        (this.isDefaultPrevented = (
          o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
        )
          ? eo
          : Zu),
        (this.isPropagationStopped = Zu),
        this
      );
    }
    return (
      m(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = eo));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = eo));
        },
        persist: function () {},
        isPersistent: eo,
      }),
      e
    );
  }
  var Aa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    no = Ee(Aa),
    Pl = m({}, Aa, { view: 0, detail: 0 }),
    Jg = Ee(Pl),
    Qs,
    Zs,
    Il,
    ao = m({}, Pl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Js,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Il &&
              (Il && t.type === "mousemove"
                ? ((Qs = t.screenX - Il.screenX), (Zs = t.screenY - Il.screenY))
                : (Zs = Qs = 0),
              (Il = t)),
            Qs);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : Zs;
      },
    }),
    Ku = Ee(ao),
    $g = m({}, ao, { dataTransfer: 0 }),
    Fg = Ee($g),
    Wg = m({}, Pl, { relatedTarget: 0 }),
    Ks = Ee(Wg),
    Pg = m({}, Aa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ig = Ee(Pg),
    tv = m({}, Aa, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    ev = Ee(tv),
    nv = m({}, Aa, { data: 0 }),
    Ju = Ee(nv),
    av = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    lv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    iv = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function ov(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = iv[t])
        ? !!e[t]
        : !1;
  }
  function Js() {
    return ov;
  }
  var sv = m({}, Pl, {
      key: function (t) {
        if (t.key) {
          var e = av[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = to(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? lv[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Js,
      charCode: function (t) {
        return t.type === "keypress" ? to(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? to(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    rv = Ee(sv),
    cv = m({}, ao, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    $u = Ee(cv),
    uv = m({}, Pl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Js,
    }),
    fv = Ee(uv),
    dv = m({}, Aa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    mv = Ee(dv),
    hv = m({}, ao, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    pv = Ee(hv),
    gv = m({}, Aa, { newState: 0, oldState: 0 }),
    vv = Ee(gv),
    yv = [9, 13, 27, 32],
    $s = wn && "CompositionEvent" in window,
    ti = null;
  wn && "documentMode" in document && (ti = document.documentMode);
  var bv = wn && "TextEvent" in window && !ti,
    Fu = wn && (!$s || (ti && 8 < ti && 11 >= ti)),
    Wu = " ",
    Pu = !1;
  function Iu(t, e) {
    switch (t) {
      case "keyup":
        return yv.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function tf(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var al = !1;
  function xv(t, e) {
    switch (t) {
      case "compositionend":
        return tf(e);
      case "keypress":
        return e.which !== 32 ? null : ((Pu = !0), Wu);
      case "textInput":
        return ((t = e.data), t === Wu && Pu ? null : t);
      default:
        return null;
    }
  }
  function Sv(t, e) {
    if (al)
      return t === "compositionend" || (!$s && Iu(t, e))
        ? ((t = Qu()), (Ii = Xs = Zn = null), (al = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return Fu && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var wv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ef(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!wv[t.type] : e === "textarea";
  }
  function nf(t, e, n, a) {
    (el ? (nl ? nl.push(a) : (nl = [a])) : (el = a),
      (e = Ko(e, "onChange")),
      0 < e.length &&
        ((n = new no("onChange", "change", null, n, a)),
        t.push({ event: n, listeners: e })));
  }
  var ei = null,
    ni = null;
  function Ev(t) {
    Ym(t, 0);
  }
  function lo(t) {
    var e = $l(t);
    if (Bu(e)) return t;
  }
  function af(t, e) {
    if (t === "change") return e;
  }
  var lf = !1;
  if (wn) {
    var Fs;
    if (wn) {
      var Ws = "oninput" in document;
      if (!Ws) {
        var of = document.createElement("div");
        (of.setAttribute("oninput", "return;"),
          (Ws = typeof of.oninput == "function"));
      }
      Fs = Ws;
    } else Fs = !1;
    lf = Fs && (!document.documentMode || 9 < document.documentMode);
  }
  function sf() {
    ei && (ei.detachEvent("onpropertychange", rf), (ni = ei = null));
  }
  function rf(t) {
    if (t.propertyName === "value" && lo(ni)) {
      var e = [];
      (nf(e, ni, t, ks(t)), Xu(Ev, e));
    }
  }
  function Tv(t, e, n) {
    t === "focusin"
      ? (sf(), (ei = e), (ni = n), ei.attachEvent("onpropertychange", rf))
      : t === "focusout" && sf();
  }
  function Av(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return lo(ni);
  }
  function Nv(t, e) {
    if (t === "click") return lo(e);
  }
  function Cv(t, e) {
    if (t === "input" || t === "change") return lo(e);
  }
  function Ov(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var _e = typeof Object.is == "function" ? Object.is : Ov;
  function ai(t, e) {
    if (_e(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!ze.call(e, l) || !_e(t[l], e[l])) return !1;
    }
    return !0;
  }
  function cf(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function uf(t, e) {
    var n = cf(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (((a = t + n.textContent.length), t <= e && a >= e))
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = cf(n);
    }
  }
  function ff(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? ff(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function df(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Wi(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Wi(t.document);
    }
    return e;
  }
  function Ps(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var Rv = wn && "documentMode" in document && 11 >= document.documentMode,
    ll = null,
    Is = null,
    li = null,
    tr = !1;
  function mf(t, e, n) {
    var a =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    tr ||
      ll == null ||
      ll !== Wi(a) ||
      ((a = ll),
      "selectionStart" in a && Ps(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (li && ai(li, a)) ||
        ((li = a),
        (a = Ko(Is, "onSelect")),
        0 < a.length &&
          ((e = new no("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: a }),
          (e.target = ll))));
  }
  function Na(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var il = {
      animationend: Na("Animation", "AnimationEnd"),
      animationiteration: Na("Animation", "AnimationIteration"),
      animationstart: Na("Animation", "AnimationStart"),
      transitionrun: Na("Transition", "TransitionRun"),
      transitionstart: Na("Transition", "TransitionStart"),
      transitioncancel: Na("Transition", "TransitionCancel"),
      transitionend: Na("Transition", "TransitionEnd"),
    },
    er = {},
    hf = {};
  wn &&
    ((hf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete il.animationend.animation,
      delete il.animationiteration.animation,
      delete il.animationstart.animation),
    "TransitionEvent" in window || delete il.transitionend.transition);
  function Ca(t) {
    if (er[t]) return er[t];
    if (!il[t]) return t;
    var e = il[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in hf) return (er[t] = e[n]);
    return t;
  }
  var pf = Ca("animationend"),
    gf = Ca("animationiteration"),
    vf = Ca("animationstart"),
    zv = Ca("transitionrun"),
    _v = Ca("transitionstart"),
    Mv = Ca("transitioncancel"),
    yf = Ca("transitionend"),
    bf = new Map(),
    nr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  nr.push("scrollEnd");
  function tn(t, e) {
    (bf.set(t, e), Ta(e, [t]));
  }
  var io =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    Ve = [],
    ol = 0,
    ar = 0;
  function oo() {
    for (var t = ol, e = (ar = ol = 0); e < t; ) {
      var n = Ve[e];
      Ve[e++] = null;
      var a = Ve[e];
      Ve[e++] = null;
      var l = Ve[e];
      Ve[e++] = null;
      var o = Ve[e];
      if (((Ve[e++] = null), a !== null && l !== null)) {
        var u = a.pending;
        (u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)),
          (a.pending = l));
      }
      o !== 0 && xf(n, l, o);
    }
  }
  function so(t, e, n, a) {
    ((Ve[ol++] = t),
      (Ve[ol++] = e),
      (Ve[ol++] = n),
      (Ve[ol++] = a),
      (ar |= a),
      (t.lanes |= a),
      (t = t.alternate),
      t !== null && (t.lanes |= a));
  }
  function lr(t, e, n, a) {
    return (so(t, e, n, a), ro(t));
  }
  function Oa(t, e) {
    return (so(t, null, null, e), ro(t));
  }
  function xf(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, o = t.return; o !== null; )
      ((o.childLanes |= n),
        (a = o.alternate),
        a !== null && (a.childLanes |= n),
        o.tag === 22 &&
          ((t = o.stateNode), t === null || t._visibility & 1 || (l = !0)),
        (t = o),
        (o = o.return));
    return t.tag === 3
      ? ((o = t.stateNode),
        l &&
          e !== null &&
          ((l = 31 - ue(n)),
          (t = o.hiddenUpdates),
          (a = t[l]),
          a === null ? (t[l] = [e]) : a.push(e),
          (e.lane = n | 536870912)),
        o)
      : null;
  }
  function ro(t) {
    if (50 < Ni) throw ((Ni = 0), (mc = null), Error(r(185)));
    for (var e = t.return; e !== null; ) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var sl = {};
  function jv(t, e, n, a) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function Me(t, e, n, a) {
    return new jv(t, e, n, a);
  }
  function ir(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function En(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = Me(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function Sf(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function co(t, e, n, a, l, o) {
    var u = 0;
    if (((a = t), typeof t == "function")) ir(t) && (u = 1);
    else if (typeof t == "string")
      u = Ly(t, n, Q.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case dt:
          return (
            (t = Me(31, n, e, l)),
            (t.elementType = dt),
            (t.lanes = o),
            t
          );
        case H:
          return Ra(n.children, l, o, e);
        case U:
          ((u = 8), (l |= 24));
          break;
        case q:
          return (
            (t = Me(12, n, e, l | 2)),
            (t.elementType = q),
            (t.lanes = o),
            t
          );
        case P:
          return ((t = Me(13, n, e, l)), (t.elementType = P), (t.lanes = o), t);
        case I:
          return ((t = Me(19, n, e, l)), (t.elementType = I), (t.lanes = o), t);
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case K:
                u = 10;
                break t;
              case F:
                u = 9;
                break t;
              case $:
                u = 11;
                break t;
              case Z:
                u = 14;
                break t;
              case X:
                ((u = 16), (a = null));
                break t;
            }
          ((u = 29),
            (n = Error(r(130, t === null ? "null" : typeof t, ""))),
            (a = null));
      }
    return (
      (e = Me(u, n, e, l)),
      (e.elementType = t),
      (e.type = a),
      (e.lanes = o),
      e
    );
  }
  function Ra(t, e, n, a) {
    return ((t = Me(7, t, a, e)), (t.lanes = n), t);
  }
  function or(t, e, n) {
    return ((t = Me(6, t, null, e)), (t.lanes = n), t);
  }
  function wf(t) {
    var e = Me(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function sr(t, e, n) {
    return (
      (e = Me(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Ef = new WeakMap();
  function Xe(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Ef.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: Vl(e) }), Ef.set(t, e), e);
    }
    return { value: t, source: e, stack: Vl(e) };
  }
  var rl = [],
    cl = 0,
    uo = null,
    ii = 0,
    Qe = [],
    Ze = 0,
    Kn = null,
    rn = 1,
    cn = "";
  function Tn(t, e) {
    ((rl[cl++] = ii), (rl[cl++] = uo), (uo = t), (ii = e));
  }
  function Tf(t, e, n) {
    ((Qe[Ze++] = rn), (Qe[Ze++] = cn), (Qe[Ze++] = Kn), (Kn = t));
    var a = rn;
    t = cn;
    var l = 32 - ue(a) - 1;
    ((a &= ~(1 << l)), (n += 1));
    var o = 32 - ue(e) + l;
    if (30 < o) {
      var u = l - (l % 5);
      ((o = (a & ((1 << u) - 1)).toString(32)),
        (a >>= u),
        (l -= u),
        (rn = (1 << (32 - ue(e) + l)) | (n << l) | a),
        (cn = o + t));
    } else ((rn = (1 << o) | (n << l) | a), (cn = t));
  }
  function rr(t) {
    t.return !== null && (Tn(t, 1), Tf(t, 1, 0));
  }
  function cr(t) {
    for (; t === uo; )
      ((uo = rl[--cl]), (rl[cl] = null), (ii = rl[--cl]), (rl[cl] = null));
    for (; t === Kn; )
      ((Kn = Qe[--Ze]),
        (Qe[Ze] = null),
        (cn = Qe[--Ze]),
        (Qe[Ze] = null),
        (rn = Qe[--Ze]),
        (Qe[Ze] = null));
  }
  function Af(t, e) {
    ((Qe[Ze++] = rn),
      (Qe[Ze++] = cn),
      (Qe[Ze++] = Kn),
      (rn = e.id),
      (cn = e.overflow),
      (Kn = t));
  }
  var oe = null,
    Lt = null,
    Ot = !1,
    Jn = null,
    Ke = !1,
    ur = Error(r(519));
  function $n(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (oi(Xe(e, t)), ur);
  }
  function Nf(t) {
    var e = t.stateNode,
      n = t.type,
      a = t.memoizedProps;
    switch (((e[ie] = t), (e[we] = a), n)) {
      case "dialog":
        (Tt("cancel", e), Tt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        Tt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Oi.length; n++) Tt(Oi[n], e);
        break;
      case "source":
        Tt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (Tt("error", e), Tt("load", e));
        break;
      case "details":
        Tt("toggle", e);
        break;
      case "input":
        (Tt("invalid", e),
          Lu(
            e,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0,
          ));
        break;
      case "select":
        Tt("invalid", e);
        break;
      case "textarea":
        (Tt("invalid", e), qu(e, a.value, a.defaultValue, a.children));
    }
    ((n = a.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      a.suppressHydrationWarning === !0 ||
      Vm(e.textContent, n)
        ? (a.popover != null && (Tt("beforetoggle", e), Tt("toggle", e)),
          a.onScroll != null && Tt("scroll", e),
          a.onScrollEnd != null && Tt("scrollend", e),
          a.onClick != null && (e.onclick = Sn),
          (e = !0))
        : (e = !1),
      e || $n(t, !0));
  }
  function Cf(t) {
    for (oe = t.return; oe; )
      switch (oe.tag) {
        case 5:
        case 31:
        case 13:
          Ke = !1;
          return;
        case 27:
        case 3:
          Ke = !0;
          return;
        default:
          oe = oe.return;
      }
  }
  function ul(t) {
    if (t !== oe) return !1;
    if (!Ot) return (Cf(t), (Ot = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || Oc(t.type, t.memoizedProps))),
        (n = !n)),
      n && Lt && $n(t),
      Cf(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      Lt = Pm(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(r(317));
      Lt = Pm(t);
    } else
      e === 27
        ? ((e = Lt), ca(t.type) ? ((t = jc), (jc = null), (Lt = t)) : (Lt = e))
        : (Lt = oe ? $e(t.stateNode.nextSibling) : null);
    return !0;
  }
  function za() {
    ((Lt = oe = null), (Ot = !1));
  }
  function fr() {
    var t = Jn;
    return (
      t !== null &&
        (Ce === null ? (Ce = t) : Ce.push.apply(Ce, t), (Jn = null)),
      t
    );
  }
  function oi(t) {
    Jn === null ? (Jn = [t]) : Jn.push(t);
  }
  var dr = w(null),
    _a = null,
    An = null;
  function Fn(t, e, n) {
    (L(dr, e._currentValue), (e._currentValue = n));
  }
  function Nn(t) {
    ((t._currentValue = dr.current), Y(dr));
  }
  function mr(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), a !== null && (a.childLanes |= e))
          : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function hr(t, e, n, a) {
    var l = t.child;
    for (l !== null && (l.return = t); l !== null; ) {
      var o = l.dependencies;
      if (o !== null) {
        var u = l.child;
        o = o.firstContext;
        t: for (; o !== null; ) {
          var g = o;
          o = l;
          for (var S = 0; S < e.length; S++)
            if (g.context === e[S]) {
              ((o.lanes |= n),
                (g = o.alternate),
                g !== null && (g.lanes |= n),
                mr(o.return, n, t),
                a || (u = null));
              break t;
            }
          o = g.next;
        }
      } else if (l.tag === 18) {
        if (((u = l.return), u === null)) throw Error(r(341));
        ((u.lanes |= n),
          (o = u.alternate),
          o !== null && (o.lanes |= n),
          mr(u, n, t),
          (u = null));
      } else u = l.child;
      if (u !== null) u.return = l;
      else
        for (u = l; u !== null; ) {
          if (u === t) {
            u = null;
            break;
          }
          if (((l = u.sibling), l !== null)) {
            ((l.return = u.return), (u = l));
            break;
          }
          u = u.return;
        }
      l = u;
    }
  }
  function fl(t, e, n, a) {
    t = null;
    for (var l = e, o = !1; l !== null; ) {
      if (!o) {
        if ((l.flags & 524288) !== 0) o = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var u = l.alternate;
        if (u === null) throw Error(r(387));
        if (((u = u.memoizedProps), u !== null)) {
          var g = l.type;
          _e(l.pendingProps.value, u.value) ||
            (t !== null ? t.push(g) : (t = [g]));
        }
      } else if (l === at.current) {
        if (((u = l.alternate), u === null)) throw Error(r(387));
        u.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
          (t !== null ? t.push(ji) : (t = [ji]));
      }
      l = l.return;
    }
    (t !== null && hr(e, t, n, a), (e.flags |= 262144));
  }
  function fo(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!_e(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function Ma(t) {
    ((_a = t),
      (An = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function se(t) {
    return Of(_a, t);
  }
  function mo(t, e) {
    return (_a === null && Ma(t), Of(t, e));
  }
  function Of(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), An === null)) {
      if (t === null) throw Error(r(308));
      ((An = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else An = An.next = e;
    return n;
  }
  var Dv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, a) {
                  t.push(a);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    Hv = i.unstable_scheduleCallback,
    Uv = i.unstable_NormalPriority,
    Kt = {
      $$typeof: K,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function pr() {
    return { controller: new Dv(), data: new Map(), refCount: 0 };
  }
  function si(t) {
    (t.refCount--,
      t.refCount === 0 &&
        Hv(Uv, function () {
          t.controller.abort();
        }));
  }
  var ri = null,
    gr = 0,
    dl = 0,
    ml = null;
  function Bv(t, e) {
    if (ri === null) {
      var n = (ri = []);
      ((gr = 0),
        (dl = bc()),
        (ml = {
          status: "pending",
          value: void 0,
          then: function (a) {
            n.push(a);
          },
        }));
    }
    return (gr++, e.then(Rf, Rf), e);
  }
  function Rf() {
    if (--gr === 0 && ri !== null) {
      ml !== null && (ml.status = "fulfilled");
      var t = ri;
      ((ri = null), (dl = 0), (ml = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function Lv(t, e) {
    var n = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (l) {
          n.push(l);
        },
      };
    return (
      t.then(
        function () {
          ((a.status = "fulfilled"), (a.value = e));
          for (var l = 0; l < n.length; l++) (0, n[l])(e);
        },
        function (l) {
          for (a.status = "rejected", a.reason = l, l = 0; l < n.length; l++)
            (0, n[l])(void 0);
        },
      ),
      a
    );
  }
  var zf = A.S;
  A.S = function (t, e) {
    ((mm = pe()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        Bv(t, e),
      zf !== null && zf(t, e));
  };
  var ja = w(null);
  function vr() {
    var t = ja.current;
    return t !== null ? t : Bt.pooledCache;
  }
  function ho(t, e) {
    e === null ? L(ja, ja.current) : L(ja, e.pool);
  }
  function _f() {
    var t = vr();
    return t === null ? null : { parent: Kt._currentValue, pool: t };
  }
  var hl = Error(r(460)),
    yr = Error(r(474)),
    po = Error(r(542)),
    go = { then: function () {} };
  function Mf(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function jf(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(Sn, Sn), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Hf(t), t);
      default:
        if (typeof e.status == "string") e.then(Sn, Sn);
        else {
          if (((t = Bt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(r(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (a) {
                if (e.status === "pending") {
                  var l = e;
                  ((l.status = "fulfilled"), (l.value = a));
                }
              },
              function (a) {
                if (e.status === "pending") {
                  var l = e;
                  ((l.status = "rejected"), (l.reason = a));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Hf(t), t);
        }
        throw ((Ha = e), hl);
    }
  }
  function Da(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((Ha = n), hl)
        : n;
    }
  }
  var Ha = null;
  function Df() {
    if (Ha === null) throw Error(r(459));
    var t = Ha;
    return ((Ha = null), t);
  }
  function Hf(t) {
    if (t === hl || t === po) throw Error(r(483));
  }
  var pl = null,
    ci = 0;
  function vo(t) {
    var e = ci;
    return ((ci += 1), pl === null && (pl = []), jf(pl, t, e));
  }
  function ui(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function yo(t, e) {
    throw e.$$typeof === N
      ? Error(r(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          r(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Uf(t) {
    function e(C, E) {
      if (t) {
        var z = C.deletions;
        z === null ? ((C.deletions = [E]), (C.flags |= 16)) : z.push(E);
      }
    }
    function n(C, E) {
      if (!t) return null;
      for (; E !== null; ) (e(C, E), (E = E.sibling));
      return null;
    }
    function a(C) {
      for (var E = new Map(); C !== null; )
        (C.key !== null ? E.set(C.key, C) : E.set(C.index, C), (C = C.sibling));
      return E;
    }
    function l(C, E) {
      return ((C = En(C, E)), (C.index = 0), (C.sibling = null), C);
    }
    function o(C, E, z) {
      return (
        (C.index = z),
        t
          ? ((z = C.alternate),
            z !== null
              ? ((z = z.index), z < E ? ((C.flags |= 67108866), E) : z)
              : ((C.flags |= 67108866), E))
          : ((C.flags |= 1048576), E)
      );
    }
    function u(C) {
      return (t && C.alternate === null && (C.flags |= 67108866), C);
    }
    function g(C, E, z, G) {
      return E === null || E.tag !== 6
        ? ((E = or(z, C.mode, G)), (E.return = C), E)
        : ((E = l(E, z)), (E.return = C), E);
    }
    function S(C, E, z, G) {
      var st = z.type;
      return st === H
        ? B(C, E, z.props.children, G, z.key)
        : E !== null &&
            (E.elementType === st ||
              (typeof st == "object" &&
                st !== null &&
                st.$$typeof === X &&
                Da(st) === E.type))
          ? ((E = l(E, z.props)), ui(E, z), (E.return = C), E)
          : ((E = co(z.type, z.key, z.props, null, C.mode, G)),
            ui(E, z),
            (E.return = C),
            E);
    }
    function _(C, E, z, G) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== z.containerInfo ||
        E.stateNode.implementation !== z.implementation
        ? ((E = sr(z, C.mode, G)), (E.return = C), E)
        : ((E = l(E, z.children || [])), (E.return = C), E);
    }
    function B(C, E, z, G, st) {
      return E === null || E.tag !== 7
        ? ((E = Ra(z, C.mode, G, st)), (E.return = C), E)
        : ((E = l(E, z)), (E.return = C), E);
    }
    function V(C, E, z) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return ((E = or("" + E, C.mode, z)), (E.return = C), E);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case O:
            return (
              (z = co(E.type, E.key, E.props, null, C.mode, z)),
              ui(z, E),
              (z.return = C),
              z
            );
          case R:
            return ((E = sr(E, C.mode, z)), (E.return = C), E);
          case X:
            return ((E = Da(E)), V(C, E, z));
        }
        if (xt(E) || ht(E))
          return ((E = Ra(E, C.mode, z, null)), (E.return = C), E);
        if (typeof E.then == "function") return V(C, vo(E), z);
        if (E.$$typeof === K) return V(C, mo(C, E), z);
        yo(C, E);
      }
      return null;
    }
    function M(C, E, z, G) {
      var st = E !== null ? E.key : null;
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return st !== null ? null : g(C, E, "" + z, G);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case O:
            return z.key === st ? S(C, E, z, G) : null;
          case R:
            return z.key === st ? _(C, E, z, G) : null;
          case X:
            return ((z = Da(z)), M(C, E, z, G));
        }
        if (xt(z) || ht(z)) return st !== null ? null : B(C, E, z, G, null);
        if (typeof z.then == "function") return M(C, E, vo(z), G);
        if (z.$$typeof === K) return M(C, E, mo(C, z), G);
        yo(C, z);
      }
      return null;
    }
    function D(C, E, z, G, st) {
      if (
        (typeof G == "string" && G !== "") ||
        typeof G == "number" ||
        typeof G == "bigint"
      )
        return ((C = C.get(z) || null), g(E, C, "" + G, st));
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case O:
            return (
              (C = C.get(G.key === null ? z : G.key) || null),
              S(E, C, G, st)
            );
          case R:
            return (
              (C = C.get(G.key === null ? z : G.key) || null),
              _(E, C, G, st)
            );
          case X:
            return ((G = Da(G)), D(C, E, z, G, st));
        }
        if (xt(G) || ht(G))
          return ((C = C.get(z) || null), B(E, C, G, st, null));
        if (typeof G.then == "function") return D(C, E, z, vo(G), st);
        if (G.$$typeof === K) return D(C, E, z, mo(E, G), st);
        yo(E, G);
      }
      return null;
    }
    function tt(C, E, z, G) {
      for (
        var st = null, Rt = null, lt = E, yt = (E = 0), Nt = null;
        lt !== null && yt < z.length;
        yt++
      ) {
        lt.index > yt ? ((Nt = lt), (lt = null)) : (Nt = lt.sibling);
        var zt = M(C, lt, z[yt], G);
        if (zt === null) {
          lt === null && (lt = Nt);
          break;
        }
        (t && lt && zt.alternate === null && e(C, lt),
          (E = o(zt, E, yt)),
          Rt === null ? (st = zt) : (Rt.sibling = zt),
          (Rt = zt),
          (lt = Nt));
      }
      if (yt === z.length) return (n(C, lt), Ot && Tn(C, yt), st);
      if (lt === null) {
        for (; yt < z.length; yt++)
          ((lt = V(C, z[yt], G)),
            lt !== null &&
              ((E = o(lt, E, yt)),
              Rt === null ? (st = lt) : (Rt.sibling = lt),
              (Rt = lt)));
        return (Ot && Tn(C, yt), st);
      }
      for (lt = a(lt); yt < z.length; yt++)
        ((Nt = D(lt, C, yt, z[yt], G)),
          Nt !== null &&
            (t &&
              Nt.alternate !== null &&
              lt.delete(Nt.key === null ? yt : Nt.key),
            (E = o(Nt, E, yt)),
            Rt === null ? (st = Nt) : (Rt.sibling = Nt),
            (Rt = Nt)));
      return (
        t &&
          lt.forEach(function (ha) {
            return e(C, ha);
          }),
        Ot && Tn(C, yt),
        st
      );
    }
    function ct(C, E, z, G) {
      if (z == null) throw Error(r(151));
      for (
        var st = null,
          Rt = null,
          lt = E,
          yt = (E = 0),
          Nt = null,
          zt = z.next();
        lt !== null && !zt.done;
        yt++, zt = z.next()
      ) {
        lt.index > yt ? ((Nt = lt), (lt = null)) : (Nt = lt.sibling);
        var ha = M(C, lt, zt.value, G);
        if (ha === null) {
          lt === null && (lt = Nt);
          break;
        }
        (t && lt && ha.alternate === null && e(C, lt),
          (E = o(ha, E, yt)),
          Rt === null ? (st = ha) : (Rt.sibling = ha),
          (Rt = ha),
          (lt = Nt));
      }
      if (zt.done) return (n(C, lt), Ot && Tn(C, yt), st);
      if (lt === null) {
        for (; !zt.done; yt++, zt = z.next())
          ((zt = V(C, zt.value, G)),
            zt !== null &&
              ((E = o(zt, E, yt)),
              Rt === null ? (st = zt) : (Rt.sibling = zt),
              (Rt = zt)));
        return (Ot && Tn(C, yt), st);
      }
      for (lt = a(lt); !zt.done; yt++, zt = z.next())
        ((zt = D(lt, C, yt, zt.value, G)),
          zt !== null &&
            (t &&
              zt.alternate !== null &&
              lt.delete(zt.key === null ? yt : zt.key),
            (E = o(zt, E, yt)),
            Rt === null ? (st = zt) : (Rt.sibling = zt),
            (Rt = zt)));
      return (
        t &&
          lt.forEach(function ($y) {
            return e(C, $y);
          }),
        Ot && Tn(C, yt),
        st
      );
    }
    function Ut(C, E, z, G) {
      if (
        (typeof z == "object" &&
          z !== null &&
          z.type === H &&
          z.key === null &&
          (z = z.props.children),
        typeof z == "object" && z !== null)
      ) {
        switch (z.$$typeof) {
          case O:
            t: {
              for (var st = z.key; E !== null; ) {
                if (E.key === st) {
                  if (((st = z.type), st === H)) {
                    if (E.tag === 7) {
                      (n(C, E.sibling),
                        (G = l(E, z.props.children)),
                        (G.return = C),
                        (C = G));
                      break t;
                    }
                  } else if (
                    E.elementType === st ||
                    (typeof st == "object" &&
                      st !== null &&
                      st.$$typeof === X &&
                      Da(st) === E.type)
                  ) {
                    (n(C, E.sibling),
                      (G = l(E, z.props)),
                      ui(G, z),
                      (G.return = C),
                      (C = G));
                    break t;
                  }
                  n(C, E);
                  break;
                } else e(C, E);
                E = E.sibling;
              }
              z.type === H
                ? ((G = Ra(z.props.children, C.mode, G, z.key)),
                  (G.return = C),
                  (C = G))
                : ((G = co(z.type, z.key, z.props, null, C.mode, G)),
                  ui(G, z),
                  (G.return = C),
                  (C = G));
            }
            return u(C);
          case R:
            t: {
              for (st = z.key; E !== null; ) {
                if (E.key === st)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === z.containerInfo &&
                    E.stateNode.implementation === z.implementation
                  ) {
                    (n(C, E.sibling),
                      (G = l(E, z.children || [])),
                      (G.return = C),
                      (C = G));
                    break t;
                  } else {
                    n(C, E);
                    break;
                  }
                else e(C, E);
                E = E.sibling;
              }
              ((G = sr(z, C.mode, G)), (G.return = C), (C = G));
            }
            return u(C);
          case X:
            return ((z = Da(z)), Ut(C, E, z, G));
        }
        if (xt(z)) return tt(C, E, z, G);
        if (ht(z)) {
          if (((st = ht(z)), typeof st != "function")) throw Error(r(150));
          return ((z = st.call(z)), ct(C, E, z, G));
        }
        if (typeof z.then == "function") return Ut(C, E, vo(z), G);
        if (z.$$typeof === K) return Ut(C, E, mo(C, z), G);
        yo(C, z);
      }
      return (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
        ? ((z = "" + z),
          E !== null && E.tag === 6
            ? (n(C, E.sibling), (G = l(E, z)), (G.return = C), (C = G))
            : (n(C, E), (G = or(z, C.mode, G)), (G.return = C), (C = G)),
          u(C))
        : n(C, E);
    }
    return function (C, E, z, G) {
      try {
        ci = 0;
        var st = Ut(C, E, z, G);
        return ((pl = null), st);
      } catch (lt) {
        if (lt === hl || lt === po) throw lt;
        var Rt = Me(29, lt, null, C.mode);
        return ((Rt.lanes = G), (Rt.return = C), Rt);
      } finally {
      }
    };
  }
  var Ua = Uf(!0),
    Bf = Uf(!1),
    Wn = !1;
  function br(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function xr(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function Pn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function In(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (_t & 2) !== 0)) {
      var l = a.pending;
      return (
        l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
        (a.pending = e),
        (e = ro(t)),
        xf(t, null, n),
        e
      );
    }
    return (so(t, a, e, n), ro(t));
  }
  function fi(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (n |= a), (e.lanes = n), xe(t, n));
    }
  }
  function Sr(t, e) {
    var n = t.updateQueue,
      a = t.alternate;
    if (a !== null && ((a = a.updateQueue), n === a)) {
      var l = null,
        o = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var u = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (o === null ? (l = o = u) : (o = o.next = u), (n = n.next));
        } while (n !== null);
        o === null ? (l = o = e) : (o = o.next = e);
      } else l = o = e;
      ((n = {
        baseState: a.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: o,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var wr = !1;
  function di() {
    if (wr) {
      var t = ml;
      if (t !== null) throw t;
    }
  }
  function mi(t, e, n, a) {
    wr = !1;
    var l = t.updateQueue;
    Wn = !1;
    var o = l.firstBaseUpdate,
      u = l.lastBaseUpdate,
      g = l.shared.pending;
    if (g !== null) {
      l.shared.pending = null;
      var S = g,
        _ = S.next;
      ((S.next = null), u === null ? (o = _) : (u.next = _), (u = S));
      var B = t.alternate;
      B !== null &&
        ((B = B.updateQueue),
        (g = B.lastBaseUpdate),
        g !== u &&
          (g === null ? (B.firstBaseUpdate = _) : (g.next = _),
          (B.lastBaseUpdate = S)));
    }
    if (o !== null) {
      var V = l.baseState;
      ((u = 0), (B = _ = S = null), (g = o));
      do {
        var M = g.lane & -536870913,
          D = M !== g.lane;
        if (D ? (At & M) === M : (a & M) === M) {
          (M !== 0 && M === dl && (wr = !0),
            B !== null &&
              (B = B.next =
                {
                  lane: 0,
                  tag: g.tag,
                  payload: g.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var tt = t,
              ct = g;
            M = e;
            var Ut = n;
            switch (ct.tag) {
              case 1:
                if (((tt = ct.payload), typeof tt == "function")) {
                  V = tt.call(Ut, V, M);
                  break t;
                }
                V = tt;
                break t;
              case 3:
                tt.flags = (tt.flags & -65537) | 128;
              case 0:
                if (
                  ((tt = ct.payload),
                  (M = typeof tt == "function" ? tt.call(Ut, V, M) : tt),
                  M == null)
                )
                  break t;
                V = m({}, V, M);
                break t;
              case 2:
                Wn = !0;
            }
          }
          ((M = g.callback),
            M !== null &&
              ((t.flags |= 64),
              D && (t.flags |= 8192),
              (D = l.callbacks),
              D === null ? (l.callbacks = [M]) : D.push(M)));
        } else
          ((D = {
            lane: M,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null,
          }),
            B === null ? ((_ = B = D), (S = V)) : (B = B.next = D),
            (u |= M));
        if (((g = g.next), g === null)) {
          if (((g = l.shared.pending), g === null)) break;
          ((D = g),
            (g = D.next),
            (D.next = null),
            (l.lastBaseUpdate = D),
            (l.shared.pending = null));
        }
      } while (!0);
      (B === null && (S = V),
        (l.baseState = S),
        (l.firstBaseUpdate = _),
        (l.lastBaseUpdate = B),
        o === null && (l.shared.lanes = 0),
        (la |= u),
        (t.lanes = u),
        (t.memoizedState = V));
    }
  }
  function Lf(t, e) {
    if (typeof t != "function") throw Error(r(191, t));
    t.call(e);
  }
  function Yf(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Lf(n[t], e);
  }
  var gl = w(null),
    bo = w(0);
  function qf(t, e) {
    ((t = Hn), L(bo, t), L(gl, e), (Hn = t | e.baseLanes));
  }
  function Er() {
    (L(bo, Hn), L(gl, gl.current));
  }
  function Tr() {
    ((Hn = bo.current), Y(gl), Y(bo));
  }
  var je = w(null),
    Je = null;
  function ta(t) {
    var e = t.alternate;
    (L(Qt, Qt.current & 1),
      L(je, t),
      Je === null &&
        (e === null || gl.current !== null || e.memoizedState !== null) &&
        (Je = t));
  }
  function Ar(t) {
    (L(Qt, Qt.current), L(je, t), Je === null && (Je = t));
  }
  function kf(t) {
    t.tag === 22
      ? (L(Qt, Qt.current), L(je, t), Je === null && (Je = t))
      : ea();
  }
  function ea() {
    (L(Qt, Qt.current), L(je, je.current));
  }
  function De(t) {
    (Y(je), Je === t && (Je = null), Y(Qt));
  }
  var Qt = w(0);
  function xo(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || _c(n) || Mc(n)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var Cn = 0,
    gt = null,
    Dt = null,
    Jt = null,
    So = !1,
    vl = !1,
    Ba = !1,
    wo = 0,
    hi = 0,
    yl = null,
    Yv = 0;
  function Vt() {
    throw Error(r(321));
  }
  function Nr(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!_e(t[n], e[n])) return !1;
    return !0;
  }
  function Cr(t, e, n, a, l, o) {
    return (
      (Cn = o),
      (gt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (A.H = t === null || t.memoizedState === null ? Td : Gr),
      (Ba = !1),
      (o = n(a, l)),
      (Ba = !1),
      vl && (o = Vf(e, n, a, l)),
      Gf(t),
      o
    );
  }
  function Gf(t) {
    A.H = vi;
    var e = Dt !== null && Dt.next !== null;
    if (((Cn = 0), (Jt = Dt = gt = null), (So = !1), (hi = 0), (yl = null), e))
      throw Error(r(300));
    t === null ||
      $t ||
      ((t = t.dependencies), t !== null && fo(t) && ($t = !0));
  }
  function Vf(t, e, n, a) {
    gt = t;
    var l = 0;
    do {
      if ((vl && (yl = null), (hi = 0), (vl = !1), 25 <= l))
        throw Error(r(301));
      if (((l += 1), (Jt = Dt = null), t.updateQueue != null)) {
        var o = t.updateQueue;
        ((o.lastEffect = null),
          (o.events = null),
          (o.stores = null),
          o.memoCache != null && (o.memoCache.index = 0));
      }
      ((A.H = Ad), (o = e(n, a)));
    } while (vl);
    return o;
  }
  function qv() {
    var t = A.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? pi(e) : e),
      (t = t.useState()[0]),
      (Dt !== null ? Dt.memoizedState : null) !== t && (gt.flags |= 1024),
      e
    );
  }
  function Or() {
    var t = wo !== 0;
    return ((wo = 0), t);
  }
  function Rr(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function zr(t) {
    if (So) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      So = !1;
    }
    ((Cn = 0), (Jt = Dt = gt = null), (vl = !1), (hi = wo = 0), (yl = null));
  }
  function ve() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Jt === null ? (gt.memoizedState = Jt = t) : (Jt = Jt.next = t), Jt);
  }
  function Zt() {
    if (Dt === null) {
      var t = gt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Dt.next;
    var e = Jt === null ? gt.memoizedState : Jt.next;
    if (e !== null) ((Jt = e), (Dt = t));
    else {
      if (t === null)
        throw gt.alternate === null ? Error(r(467)) : Error(r(310));
      ((Dt = t),
        (t = {
          memoizedState: Dt.memoizedState,
          baseState: Dt.baseState,
          baseQueue: Dt.baseQueue,
          queue: Dt.queue,
          next: null,
        }),
        Jt === null ? (gt.memoizedState = Jt = t) : (Jt = Jt.next = t));
    }
    return Jt;
  }
  function Eo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function pi(t) {
    var e = hi;
    return (
      (hi += 1),
      yl === null && (yl = []),
      (t = jf(yl, t, e)),
      (e = gt),
      (Jt === null ? e.memoizedState : Jt.next) === null &&
        ((e = e.alternate),
        (A.H = e === null || e.memoizedState === null ? Td : Gr)),
      t
    );
  }
  function To(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return pi(t);
      if (t.$$typeof === K) return se(t);
    }
    throw Error(r(438, String(t)));
  }
  function _r(t) {
    var e = null,
      n = gt.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var a = gt.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (l) {
                return l.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = Eo()), (gt.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++) n[a] = bt;
    return (e.index++, n);
  }
  function On(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ao(t) {
    var e = Zt();
    return Mr(e, Dt, t);
  }
  function Mr(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var l = t.baseQueue,
      o = a.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        ((l.next = o.next), (o.next = u));
      }
      ((e.baseQueue = l = o), (a.pending = null));
    }
    if (((o = t.baseState), l === null)) t.memoizedState = o;
    else {
      e = l.next;
      var g = (u = null),
        S = null,
        _ = e,
        B = !1;
      do {
        var V = _.lane & -536870913;
        if (V !== _.lane ? (At & V) === V : (Cn & V) === V) {
          var M = _.revertLane;
          if (M === 0)
            (S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: _.action,
                  hasEagerState: _.hasEagerState,
                  eagerState: _.eagerState,
                  next: null,
                }),
              V === dl && (B = !0));
          else if ((Cn & M) === M) {
            ((_ = _.next), M === dl && (B = !0));
            continue;
          } else
            ((V = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null,
            }),
              S === null ? ((g = S = V), (u = o)) : (S = S.next = V),
              (gt.lanes |= M),
              (la |= M));
          ((V = _.action),
            Ba && n(o, V),
            (o = _.hasEagerState ? _.eagerState : n(o, V)));
        } else
          ((M = {
            lane: V,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null,
          }),
            S === null ? ((g = S = M), (u = o)) : (S = S.next = M),
            (gt.lanes |= V),
            (la |= V));
        _ = _.next;
      } while (_ !== null && _ !== e);
      if (
        (S === null ? (u = o) : (S.next = g),
        !_e(o, t.memoizedState) && (($t = !0), B && ((n = ml), n !== null)))
      )
        throw n;
      ((t.memoizedState = o),
        (t.baseState = u),
        (t.baseQueue = S),
        (a.lastRenderedState = o));
    }
    return (l === null && (a.lanes = 0), [t.memoizedState, a.dispatch]);
  }
  function jr(t) {
    var e = Zt(),
      n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch,
      l = n.pending,
      o = e.memoizedState;
    if (l !== null) {
      n.pending = null;
      var u = (l = l.next);
      do ((o = t(o, u.action)), (u = u.next));
      while (u !== l);
      (_e(o, e.memoizedState) || ($t = !0),
        (e.memoizedState = o),
        e.baseQueue === null && (e.baseState = o),
        (n.lastRenderedState = o));
    }
    return [o, a];
  }
  function Xf(t, e, n) {
    var a = gt,
      l = Zt(),
      o = Ot;
    if (o) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var u = !_e((Dt || l).memoizedState, n);
    if (
      (u && ((l.memoizedState = n), ($t = !0)),
      (l = l.queue),
      Ur(Kf.bind(null, a, l, t), [t]),
      l.getSnapshot !== e || u || (Jt !== null && Jt.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        bl(9, { destroy: void 0 }, Zf.bind(null, a, l, n, e), null),
        Bt === null)
      )
        throw Error(r(349));
      o || (Cn & 127) !== 0 || Qf(a, e, n);
    }
    return n;
  }
  function Qf(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = gt.updateQueue),
      e === null
        ? ((e = Eo()), (gt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function Zf(t, e, n, a) {
    ((e.value = n), (e.getSnapshot = a), Jf(e) && $f(t));
  }
  function Kf(t, e, n) {
    return n(function () {
      Jf(e) && $f(t);
    });
  }
  function Jf(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !_e(t, n);
    } catch {
      return !0;
    }
  }
  function $f(t) {
    var e = Oa(t, 2);
    e !== null && Oe(e, t, 2);
  }
  function Dr(t) {
    var e = ve();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), Ba)) {
        Pe(!0);
        try {
          n();
        } finally {
          Pe(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: On,
        lastRenderedState: t,
      }),
      e
    );
  }
  function Ff(t, e, n, a) {
    return ((t.baseState = n), Mr(t, Dt, typeof a == "function" ? a : On));
  }
  function kv(t, e, n, a, l) {
    if (Oo(t)) throw Error(r(485));
    if (((t = e.action), t !== null)) {
      var o = {
        payload: l,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (u) {
          o.listeners.push(u);
        },
      };
      (A.T !== null ? n(!0) : (o.isTransition = !1),
        a(o),
        (n = e.pending),
        n === null
          ? ((o.next = e.pending = o), Wf(e, o))
          : ((o.next = n.next), (e.pending = n.next = o)));
    }
  }
  function Wf(t, e) {
    var n = e.action,
      a = e.payload,
      l = t.state;
    if (e.isTransition) {
      var o = A.T,
        u = {};
      A.T = u;
      try {
        var g = n(l, a),
          S = A.S;
        (S !== null && S(u, g), Pf(t, e, g));
      } catch (_) {
        Hr(t, e, _);
      } finally {
        (o !== null && u.types !== null && (o.types = u.types), (A.T = o));
      }
    } else
      try {
        ((o = n(l, a)), Pf(t, e, o));
      } catch (_) {
        Hr(t, e, _);
      }
  }
  function Pf(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (a) {
            If(t, e, a);
          },
          function (a) {
            return Hr(t, e, a);
          },
        )
      : If(t, e, n);
  }
  function If(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      td(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), Wf(t, n))));
  }
  function Hr(t, e, n) {
    var a = t.pending;
    if (((t.pending = null), a !== null)) {
      a = a.next;
      do ((e.status = "rejected"), (e.reason = n), td(e), (e = e.next));
      while (e !== a);
    }
    t.action = null;
  }
  function td(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function ed(t, e) {
    return e;
  }
  function nd(t, e) {
    if (Ot) {
      var n = Bt.formState;
      if (n !== null) {
        t: {
          var a = gt;
          if (Ot) {
            if (Lt) {
              e: {
                for (var l = Lt, o = Ke; l.nodeType !== 8; ) {
                  if (!o) {
                    l = null;
                    break e;
                  }
                  if (((l = $e(l.nextSibling)), l === null)) {
                    l = null;
                    break e;
                  }
                }
                ((o = l.data), (l = o === "F!" || o === "F" ? l : null));
              }
              if (l) {
                ((Lt = $e(l.nextSibling)), (a = l.data === "F!"));
                break t;
              }
            }
            $n(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return (
      (n = ve()),
      (n.memoizedState = n.baseState = e),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ed,
        lastRenderedState: e,
      }),
      (n.queue = a),
      (n = Sd.bind(null, gt, a)),
      (a.dispatch = n),
      (a = Dr(!1)),
      (o = kr.bind(null, gt, !1, a.queue)),
      (a = ve()),
      (l = { state: e, dispatch: null, action: t, pending: null }),
      (a.queue = l),
      (n = kv.bind(null, gt, l, o, n)),
      (l.dispatch = n),
      (a.memoizedState = t),
      [e, n, !1]
    );
  }
  function ad(t) {
    var e = Zt();
    return ld(e, Dt, t);
  }
  function ld(t, e, n) {
    if (
      ((e = Mr(t, e, ed)[0]),
      (t = Ao(On)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var a = pi(e);
      } catch (u) {
        throw u === hl ? po : u;
      }
    else a = e;
    e = Zt();
    var l = e.queue,
      o = l.dispatch;
    return (
      n !== e.memoizedState &&
        ((gt.flags |= 2048),
        bl(9, { destroy: void 0 }, Gv.bind(null, l, n), null)),
      [a, o, t]
    );
  }
  function Gv(t, e) {
    t.action = e;
  }
  function id(t) {
    var e = Zt(),
      n = Dt;
    if (n !== null) return ld(e, n, t);
    (Zt(), (e = e.memoizedState), (n = Zt()));
    var a = n.queue.dispatch;
    return ((n.memoizedState = t), [e, a, !1]);
  }
  function bl(t, e, n, a) {
    return (
      (t = { tag: t, create: n, deps: a, inst: e, next: null }),
      (e = gt.updateQueue),
      e === null && ((e = Eo()), (gt.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((a = n.next), (n.next = t), (t.next = a), (e.lastEffect = t)),
      t
    );
  }
  function od() {
    return Zt().memoizedState;
  }
  function No(t, e, n, a) {
    var l = ve();
    ((gt.flags |= t),
      (l.memoizedState = bl(
        1 | e,
        { destroy: void 0 },
        n,
        a === void 0 ? null : a,
      )));
  }
  function Co(t, e, n, a) {
    var l = Zt();
    a = a === void 0 ? null : a;
    var o = l.memoizedState.inst;
    Dt !== null && a !== null && Nr(a, Dt.memoizedState.deps)
      ? (l.memoizedState = bl(e, o, n, a))
      : ((gt.flags |= t), (l.memoizedState = bl(1 | e, o, n, a)));
  }
  function sd(t, e) {
    No(8390656, 8, t, e);
  }
  function Ur(t, e) {
    Co(2048, 8, t, e);
  }
  function Vv(t) {
    gt.flags |= 4;
    var e = gt.updateQueue;
    if (e === null) ((e = Eo()), (gt.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function rd(t) {
    var e = Zt().memoizedState;
    return (
      Vv({ ref: e, nextImpl: t }),
      function () {
        if ((_t & 2) !== 0) throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function cd(t, e) {
    return Co(4, 2, t, e);
  }
  function ud(t, e) {
    return Co(4, 4, t, e);
  }
  function fd(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function dd(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), Co(4, 4, fd.bind(null, e, t), n));
  }
  function Br() {}
  function md(t, e) {
    var n = Zt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && Nr(e, a[1]) ? a[0] : ((n.memoizedState = [t, e]), t);
  }
  function hd(t, e) {
    var n = Zt();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && Nr(e, a[1])) return a[0];
    if (((a = t()), Ba)) {
      Pe(!0);
      try {
        t();
      } finally {
        Pe(!1);
      }
    }
    return ((n.memoizedState = [a, e]), a);
  }
  function Lr(t, e, n) {
    return n === void 0 || ((Cn & 1073741824) !== 0 && (At & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = pm()), (gt.lanes |= t), (la |= t), n);
  }
  function pd(t, e, n, a) {
    return _e(n, e)
      ? n
      : gl.current !== null
        ? ((t = Lr(t, n, a)), _e(t, e) || ($t = !0), t)
        : (Cn & 42) === 0 || ((Cn & 1073741824) !== 0 && (At & 261930) === 0)
          ? (($t = !0), (t.memoizedState = n))
          : ((t = pm()), (gt.lanes |= t), (la |= t), e);
  }
  function gd(t, e, n, a, l) {
    var o = k.p;
    k.p = o !== 0 && 8 > o ? o : 8;
    var u = A.T,
      g = {};
    ((A.T = g), kr(t, !1, e, n));
    try {
      var S = l(),
        _ = A.S;
      if (
        (_ !== null && _(g, S),
        S !== null && typeof S == "object" && typeof S.then == "function")
      ) {
        var B = Lv(S, a);
        gi(t, e, B, Be(t));
      } else gi(t, e, a, Be(t));
    } catch (V) {
      gi(t, e, { then: function () {}, status: "rejected", reason: V }, Be());
    } finally {
      ((k.p = o),
        u !== null && g.types !== null && (u.types = g.types),
        (A.T = u));
    }
  }
  function Xv() {}
  function Yr(t, e, n, a) {
    if (t.tag !== 5) throw Error(r(476));
    var l = vd(t).queue;
    gd(
      t,
      l,
      e,
      j,
      n === null
        ? Xv
        : function () {
            return (yd(t), n(a));
          },
    );
  }
  function vd(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: j,
      baseState: j,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: On,
        lastRenderedState: j,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: On,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function yd(t) {
    var e = vd(t);
    (e.next === null && (e = t.alternate.memoizedState),
      gi(t, e.next.queue, {}, Be()));
  }
  function qr() {
    return se(ji);
  }
  function bd() {
    return Zt().memoizedState;
  }
  function xd() {
    return Zt().memoizedState;
  }
  function Qv(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Be();
          t = Pn(n);
          var a = In(e, t, n);
          (a !== null && (Oe(a, e, n), fi(a, e, n)),
            (e = { cache: pr() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function Zv(t, e, n) {
    var a = Be();
    ((n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Oo(t)
        ? wd(e, n)
        : ((n = lr(t, e, n, a)), n !== null && (Oe(n, t, a), Ed(n, e, a))));
  }
  function Sd(t, e, n) {
    var a = Be();
    gi(t, e, n, a);
  }
  function gi(t, e, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Oo(t)) wd(e, l);
    else {
      var o = t.alternate;
      if (
        t.lanes === 0 &&
        (o === null || o.lanes === 0) &&
        ((o = e.lastRenderedReducer), o !== null)
      )
        try {
          var u = e.lastRenderedState,
            g = o(u, n);
          if (((l.hasEagerState = !0), (l.eagerState = g), _e(g, u)))
            return (so(t, e, l, 0), Bt === null && oo(), !1);
        } catch {
        } finally {
        }
      if (((n = lr(t, e, l, a)), n !== null))
        return (Oe(n, t, a), Ed(n, e, a), !0);
    }
    return !1;
  }
  function kr(t, e, n, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: bc(),
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Oo(t))
    ) {
      if (e) throw Error(r(479));
    } else ((e = lr(t, n, a, 2)), e !== null && Oe(e, t, 2));
  }
  function Oo(t) {
    var e = t.alternate;
    return t === gt || (e !== null && e === gt);
  }
  function wd(t, e) {
    vl = So = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e));
  }
  function Ed(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      ((a &= t.pendingLanes), (n |= a), (e.lanes = n), xe(t, n));
    }
  }
  var vi = {
    readContext: se,
    use: To,
    useCallback: Vt,
    useContext: Vt,
    useEffect: Vt,
    useImperativeHandle: Vt,
    useLayoutEffect: Vt,
    useInsertionEffect: Vt,
    useMemo: Vt,
    useReducer: Vt,
    useRef: Vt,
    useState: Vt,
    useDebugValue: Vt,
    useDeferredValue: Vt,
    useTransition: Vt,
    useSyncExternalStore: Vt,
    useId: Vt,
    useHostTransitionStatus: Vt,
    useFormState: Vt,
    useActionState: Vt,
    useOptimistic: Vt,
    useMemoCache: Vt,
    useCacheRefresh: Vt,
  };
  vi.useEffectEvent = Vt;
  var Td = {
      readContext: se,
      use: To,
      useCallback: function (t, e) {
        return ((ve().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: se,
      useEffect: sd,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null),
          No(4194308, 4, fd.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return No(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        No(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = ve();
        e = e === void 0 ? null : e;
        var a = t();
        if (Ba) {
          Pe(!0);
          try {
            t();
          } finally {
            Pe(!1);
          }
        }
        return ((n.memoizedState = [a, e]), a);
      },
      useReducer: function (t, e, n) {
        var a = ve();
        if (n !== void 0) {
          var l = n(e);
          if (Ba) {
            Pe(!0);
            try {
              n(e);
            } finally {
              Pe(!1);
            }
          }
        } else l = e;
        return (
          (a.memoizedState = a.baseState = l),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: l,
          }),
          (a.queue = t),
          (t = t.dispatch = Zv.bind(null, gt, t)),
          [a.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = ve();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Dr(t);
        var e = t.queue,
          n = Sd.bind(null, gt, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: Br,
      useDeferredValue: function (t, e) {
        var n = ve();
        return Lr(n, t, e);
      },
      useTransition: function () {
        var t = Dr(!1);
        return (
          (t = gd.bind(null, gt, t.queue, !0, !1)),
          (ve().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var a = gt,
          l = ve();
        if (Ot) {
          if (n === void 0) throw Error(r(407));
          n = n();
        } else {
          if (((n = e()), Bt === null)) throw Error(r(349));
          (At & 127) !== 0 || Qf(a, e, n);
        }
        l.memoizedState = n;
        var o = { value: n, getSnapshot: e };
        return (
          (l.queue = o),
          sd(Kf.bind(null, a, o, t), [t]),
          (a.flags |= 2048),
          bl(9, { destroy: void 0 }, Zf.bind(null, a, o, n, e), null),
          n
        );
      },
      useId: function () {
        var t = ve(),
          e = Bt.identifierPrefix;
        if (Ot) {
          var n = cn,
            a = rn;
          ((n = (a & ~(1 << (32 - ue(a) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = wo++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_"));
        } else ((n = Yv++), (e = "_" + e + "r_" + n.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: qr,
      useFormState: nd,
      useActionState: nd,
      useOptimistic: function (t) {
        var e = ve();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = kr.bind(null, gt, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: _r,
      useCacheRefresh: function () {
        return (ve().memoizedState = Qv.bind(null, gt));
      },
      useEffectEvent: function (t) {
        var e = ve(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((_t & 2) !== 0) throw Error(r(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Gr = {
      readContext: se,
      use: To,
      useCallback: md,
      useContext: se,
      useEffect: Ur,
      useImperativeHandle: dd,
      useInsertionEffect: cd,
      useLayoutEffect: ud,
      useMemo: hd,
      useReducer: Ao,
      useRef: od,
      useState: function () {
        return Ao(On);
      },
      useDebugValue: Br,
      useDeferredValue: function (t, e) {
        var n = Zt();
        return pd(n, Dt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Ao(On)[0],
          e = Zt().memoizedState;
        return [typeof t == "boolean" ? t : pi(t), e];
      },
      useSyncExternalStore: Xf,
      useId: bd,
      useHostTransitionStatus: qr,
      useFormState: ad,
      useActionState: ad,
      useOptimistic: function (t, e) {
        var n = Zt();
        return Ff(n, Dt, t, e);
      },
      useMemoCache: _r,
      useCacheRefresh: xd,
    };
  Gr.useEffectEvent = rd;
  var Ad = {
    readContext: se,
    use: To,
    useCallback: md,
    useContext: se,
    useEffect: Ur,
    useImperativeHandle: dd,
    useInsertionEffect: cd,
    useLayoutEffect: ud,
    useMemo: hd,
    useReducer: jr,
    useRef: od,
    useState: function () {
      return jr(On);
    },
    useDebugValue: Br,
    useDeferredValue: function (t, e) {
      var n = Zt();
      return Dt === null ? Lr(n, t, e) : pd(n, Dt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = jr(On)[0],
        e = Zt().memoizedState;
      return [typeof t == "boolean" ? t : pi(t), e];
    },
    useSyncExternalStore: Xf,
    useId: bd,
    useHostTransitionStatus: qr,
    useFormState: id,
    useActionState: id,
    useOptimistic: function (t, e) {
      var n = Zt();
      return Dt !== null
        ? Ff(n, Dt, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: _r,
    useCacheRefresh: xd,
  };
  Ad.useEffectEvent = rd;
  function Vr(t, e, n, a) {
    ((e = t.memoizedState),
      (n = n(a, e)),
      (n = n == null ? e : m({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var Xr = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var a = Be(),
        l = Pn(a);
      ((l.payload = e),
        n != null && (l.callback = n),
        (e = In(t, l, a)),
        e !== null && (Oe(e, t, a), fi(e, t, a)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var a = Be(),
        l = Pn(a);
      ((l.tag = 1),
        (l.payload = e),
        n != null && (l.callback = n),
        (e = In(t, l, a)),
        e !== null && (Oe(e, t, a), fi(e, t, a)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Be(),
        a = Pn(n);
      ((a.tag = 2),
        e != null && (a.callback = e),
        (e = In(t, a, n)),
        e !== null && (Oe(e, t, n), fi(e, t, n)));
    },
  };
  function Nd(t, e, n, a, l, o, u) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(a, o, u)
        : e.prototype && e.prototype.isPureReactComponent
          ? !ai(n, a) || !ai(l, o)
          : !0
    );
  }
  function Cd(t, e, n, a) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, a),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, a),
      e.state !== t && Xr.enqueueReplaceState(e, e.state, null));
  }
  function La(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e) a !== "ref" && (n[a] = e[a]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = m({}, n));
      for (var l in t) n[l] === void 0 && (n[l] = t[l]);
    }
    return n;
  }
  function Od(t) {
    io(t);
  }
  function Rd(t) {
    console.error(t);
  }
  function zd(t) {
    io(t);
  }
  function Ro(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function _d(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function Qr(t, e, n) {
    return (
      (n = Pn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        Ro(t, e);
      }),
      n
    );
  }
  function Md(t) {
    return ((t = Pn(t)), (t.tag = 3), t);
  }
  function jd(t, e, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var o = a.value;
      ((t.payload = function () {
        return l(o);
      }),
        (t.callback = function () {
          _d(e, n, a);
        }));
    }
    var u = n.stateNode;
    u !== null &&
      typeof u.componentDidCatch == "function" &&
      (t.callback = function () {
        (_d(e, n, a),
          typeof l != "function" &&
            (ia === null ? (ia = new Set([this])) : ia.add(this)));
        var g = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: g !== null ? g : "",
        });
      });
  }
  function Kv(t, e, n, a, l) {
    if (
      ((n.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && fl(e, n, l, !0),
        (n = je.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              Je === null ? ko() : n.alternate === null && Xt === 0 && (Xt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = l),
              a === go
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([a])) : e.add(a),
                  gc(t, a, l)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              a === go
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([a])) : n.add(a)),
                  gc(t, a, l)),
              !1
            );
        }
        throw Error(r(435, n.tag));
      }
      return (gc(t, a, l), ko(), !1);
    }
    if (Ot)
      return (
        (e = je.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = l),
            a !== ur && ((t = Error(r(422), { cause: a })), oi(Xe(t, n))))
          : (a !== ur && ((e = Error(r(423), { cause: a })), oi(Xe(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (l &= -l),
            (t.lanes |= l),
            (a = Xe(a, n)),
            (l = Qr(t.stateNode, a, l)),
            Sr(t, l),
            Xt !== 4 && (Xt = 2)),
        !1
      );
    var o = Error(r(520), { cause: a });
    if (
      ((o = Xe(o, n)),
      Ai === null ? (Ai = [o]) : Ai.push(o),
      Xt !== 4 && (Xt = 2),
      e === null)
    )
      return !0;
    ((a = Xe(a, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = l & -l),
            (n.lanes |= t),
            (t = Qr(n.stateNode, a, t)),
            Sr(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (o = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (o !== null &&
                  typeof o.componentDidCatch == "function" &&
                  (ia === null || !ia.has(o)))))
          )
            return (
              (n.flags |= 65536),
              (l &= -l),
              (n.lanes |= l),
              (l = Md(l)),
              jd(l, t, n, a),
              Sr(n, l),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Zr = Error(r(461)),
    $t = !1;
  function re(t, e, n, a) {
    e.child = t === null ? Bf(e, null, n, a) : Ua(e, t.child, n, a);
  }
  function Dd(t, e, n, a, l) {
    n = n.render;
    var o = e.ref;
    if ("ref" in a) {
      var u = {};
      for (var g in a) g !== "ref" && (u[g] = a[g]);
    } else u = a;
    return (
      Ma(e),
      (a = Cr(t, e, n, u, o, l)),
      (g = Or()),
      t !== null && !$t
        ? (Rr(t, e, l), Rn(t, e, l))
        : (Ot && g && rr(e), (e.flags |= 1), re(t, e, a, l), e.child)
    );
  }
  function Hd(t, e, n, a, l) {
    if (t === null) {
      var o = n.type;
      return typeof o == "function" &&
        !ir(o) &&
        o.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = o), Ud(t, e, o, a, l))
        : ((t = co(n.type, null, a, e, e.mode, l)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((o = t.child), !tc(t, l))) {
      var u = o.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : ai), n(u, a) && t.ref === e.ref)
      )
        return Rn(t, e, l);
    }
    return (
      (e.flags |= 1),
      (t = En(o, a)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Ud(t, e, n, a, l) {
    if (t !== null) {
      var o = t.memoizedProps;
      if (ai(o, a) && t.ref === e.ref)
        if ((($t = !1), (e.pendingProps = a = o), tc(t, l)))
          (t.flags & 131072) !== 0 && ($t = !0);
        else return ((e.lanes = t.lanes), Rn(t, e, l));
    }
    return Kr(t, e, n, a, l);
  }
  function Bd(t, e, n, a) {
    var l = a.children,
      o = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((o = o !== null ? o.baseLanes | n : n), t !== null)) {
          for (a = e.child = t.child, l = 0; a !== null; )
            ((l = l | a.lanes | a.childLanes), (a = a.sibling));
          a = l & ~o;
        } else ((a = 0), (e.child = null));
        return Ld(t, e, o, n, a);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && ho(e, o !== null ? o.cachePool : null),
          o !== null ? qf(e, o) : Er(),
          kf(e));
      else
        return (
          (a = e.lanes = 536870912),
          Ld(t, e, o !== null ? o.baseLanes | n : n, n, a)
        );
    } else
      o !== null
        ? (ho(e, o.cachePool), qf(e, o), ea(), (e.memoizedState = null))
        : (t !== null && ho(e, null), Er(), ea());
    return (re(t, e, l, n), e.child);
  }
  function yi(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Ld(t, e, n, a, l) {
    var o = vr();
    return (
      (o = o === null ? null : { parent: Kt._currentValue, pool: o }),
      (e.memoizedState = { baseLanes: n, cachePool: o }),
      t !== null && ho(e, null),
      Er(),
      kf(e),
      t !== null && fl(t, e, a, !0),
      (e.childLanes = l),
      null
    );
  }
  function zo(t, e) {
    return (
      (e = Mo({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Yd(t, e, n) {
    return (
      Ua(e, t.child, null, n),
      (t = zo(e, e.pendingProps)),
      (t.flags |= 2),
      De(e),
      (e.memoizedState = null),
      t
    );
  }
  function Jv(t, e, n) {
    var a = e.pendingProps,
      l = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (Ot) {
        if (a.mode === "hidden")
          return ((t = zo(e, a)), (e.lanes = 536870912), yi(null, t));
        if (
          (Ar(e),
          (t = Lt)
            ? ((t = Wm(t, Ke)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Kn !== null ? { id: rn, overflow: cn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = wf(t)),
                (n.return = e),
                (e.child = n),
                (oe = e),
                (Lt = null)))
            : (t = null),
          t === null)
        )
          throw $n(e);
        return ((e.lanes = 536870912), null);
      }
      return zo(e, a);
    }
    var o = t.memoizedState;
    if (o !== null) {
      var u = o.dehydrated;
      if ((Ar(e), l))
        if (e.flags & 256) ((e.flags &= -257), (e = Yd(t, e, n)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(r(558));
      else if (
        ($t || fl(t, e, n, !1), (l = (n & t.childLanes) !== 0), $t || l)
      ) {
        if (
          ((a = Bt),
          a !== null && ((u = Se(a, n)), u !== 0 && u !== o.retryLane))
        )
          throw ((o.retryLane = u), Oa(t, u), Oe(a, t, u), Zr);
        (ko(), (e = Yd(t, e, n)));
      } else
        ((t = o.treeContext),
          (Lt = $e(u.nextSibling)),
          (oe = e),
          (Ot = !0),
          (Jn = null),
          (Ke = !1),
          t !== null && Af(e, t),
          (e = zo(e, a)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = En(t.child, { mode: a.mode, children: a.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function _o(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Kr(t, e, n, a, l) {
    return (
      Ma(e),
      (n = Cr(t, e, n, a, void 0, l)),
      (a = Or()),
      t !== null && !$t
        ? (Rr(t, e, l), Rn(t, e, l))
        : (Ot && a && rr(e), (e.flags |= 1), re(t, e, n, l), e.child)
    );
  }
  function qd(t, e, n, a, l, o) {
    return (
      Ma(e),
      (e.updateQueue = null),
      (n = Vf(e, a, n, l)),
      Gf(t),
      (a = Or()),
      t !== null && !$t
        ? (Rr(t, e, o), Rn(t, e, o))
        : (Ot && a && rr(e), (e.flags |= 1), re(t, e, n, o), e.child)
    );
  }
  function kd(t, e, n, a, l) {
    if ((Ma(e), e.stateNode === null)) {
      var o = sl,
        u = n.contextType;
      (typeof u == "object" && u !== null && (o = se(u)),
        (o = new n(a, o)),
        (e.memoizedState =
          o.state !== null && o.state !== void 0 ? o.state : null),
        (o.updater = Xr),
        (e.stateNode = o),
        (o._reactInternals = e),
        (o = e.stateNode),
        (o.props = a),
        (o.state = e.memoizedState),
        (o.refs = {}),
        br(e),
        (u = n.contextType),
        (o.context = typeof u == "object" && u !== null ? se(u) : sl),
        (o.state = e.memoizedState),
        (u = n.getDerivedStateFromProps),
        typeof u == "function" && (Vr(e, n, u, a), (o.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function" ||
          (typeof o.UNSAFE_componentWillMount != "function" &&
            typeof o.componentWillMount != "function") ||
          ((u = o.state),
          typeof o.componentWillMount == "function" && o.componentWillMount(),
          typeof o.UNSAFE_componentWillMount == "function" &&
            o.UNSAFE_componentWillMount(),
          u !== o.state && Xr.enqueueReplaceState(o, o.state, null),
          mi(e, a, o, l),
          di(),
          (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308),
        (a = !0));
    } else if (t === null) {
      o = e.stateNode;
      var g = e.memoizedProps,
        S = La(n, g);
      o.props = S;
      var _ = o.context,
        B = n.contextType;
      ((u = sl), typeof B == "object" && B !== null && (u = se(B)));
      var V = n.getDerivedStateFromProps;
      ((B =
        typeof V == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function"),
        (g = e.pendingProps !== g),
        B ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((g || _ !== u) && Cd(e, o, a, u)),
        (Wn = !1));
      var M = e.memoizedState;
      ((o.state = M),
        mi(e, a, o, l),
        di(),
        (_ = e.memoizedState),
        g || M !== _ || Wn
          ? (typeof V == "function" && (Vr(e, n, V, a), (_ = e.memoizedState)),
            (S = Wn || Nd(e, n, S, a, M, _, u))
              ? (B ||
                  (typeof o.UNSAFE_componentWillMount != "function" &&
                    typeof o.componentWillMount != "function") ||
                  (typeof o.componentWillMount == "function" &&
                    o.componentWillMount(),
                  typeof o.UNSAFE_componentWillMount == "function" &&
                    o.UNSAFE_componentWillMount()),
                typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof o.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = a),
                (e.memoizedState = _)),
            (o.props = a),
            (o.state = _),
            (o.context = u),
            (a = S))
          : (typeof o.componentDidMount == "function" && (e.flags |= 4194308),
            (a = !1)));
    } else {
      ((o = e.stateNode),
        xr(t, e),
        (u = e.memoizedProps),
        (B = La(n, u)),
        (o.props = B),
        (V = e.pendingProps),
        (M = o.context),
        (_ = n.contextType),
        (S = sl),
        typeof _ == "object" && _ !== null && (S = se(_)),
        (g = n.getDerivedStateFromProps),
        (_ =
          typeof g == "function" ||
          typeof o.getSnapshotBeforeUpdate == "function") ||
          (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
          ((u !== V || M !== S) && Cd(e, o, a, S)),
        (Wn = !1),
        (M = e.memoizedState),
        (o.state = M),
        mi(e, a, o, l),
        di());
      var D = e.memoizedState;
      u !== V ||
      M !== D ||
      Wn ||
      (t !== null && t.dependencies !== null && fo(t.dependencies))
        ? (typeof g == "function" && (Vr(e, n, g, a), (D = e.memoizedState)),
          (B =
            Wn ||
            Nd(e, n, B, a, M, D, S) ||
            (t !== null && t.dependencies !== null && fo(t.dependencies)))
            ? (_ ||
                (typeof o.UNSAFE_componentWillUpdate != "function" &&
                  typeof o.componentWillUpdate != "function") ||
                (typeof o.componentWillUpdate == "function" &&
                  o.componentWillUpdate(a, D, S),
                typeof o.UNSAFE_componentWillUpdate == "function" &&
                  o.UNSAFE_componentWillUpdate(a, D, S)),
              typeof o.componentDidUpdate == "function" && (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof o.componentDidUpdate != "function" ||
                (u === t.memoizedProps && M === t.memoizedState) ||
                (e.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != "function" ||
                (u === t.memoizedProps && M === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = a),
              (e.memoizedState = D)),
          (o.props = a),
          (o.state = D),
          (o.context = S),
          (a = B))
        : (typeof o.componentDidUpdate != "function" ||
            (u === t.memoizedProps && M === t.memoizedState) ||
            (e.flags |= 4),
          typeof o.getSnapshotBeforeUpdate != "function" ||
            (u === t.memoizedProps && M === t.memoizedState) ||
            (e.flags |= 1024),
          (a = !1));
    }
    return (
      (o = a),
      _o(t, e),
      (a = (e.flags & 128) !== 0),
      o || a
        ? ((o = e.stateNode),
          (n =
            a && typeof n.getDerivedStateFromError != "function"
              ? null
              : o.render()),
          (e.flags |= 1),
          t !== null && a
            ? ((e.child = Ua(e, t.child, null, l)),
              (e.child = Ua(e, null, n, l)))
            : re(t, e, n, l),
          (e.memoizedState = o.state),
          (t = e.child))
        : (t = Rn(t, e, l)),
      t
    );
  }
  function Gd(t, e, n, a) {
    return (za(), (e.flags |= 256), re(t, e, n, a), e.child);
  }
  var Jr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function $r(t) {
    return { baseLanes: t, cachePool: _f() };
  }
  function Fr(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= Ue), t);
  }
  function Vd(t, e, n) {
    var a = e.pendingProps,
      l = !1,
      o = (e.flags & 128) !== 0,
      u;
    if (
      ((u = o) ||
        (u =
          t !== null && t.memoizedState === null ? !1 : (Qt.current & 2) !== 0),
      u && ((l = !0), (e.flags &= -129)),
      (u = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (Ot) {
        if (
          (l ? ta(e) : ea(),
          (t = Lt)
            ? ((t = Wm(t, Ke)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Kn !== null ? { id: rn, overflow: cn } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = wf(t)),
                (n.return = e),
                (e.child = n),
                (oe = e),
                (Lt = null)))
            : (t = null),
          t === null)
        )
          throw $n(e);
        return (Mc(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var g = a.children;
      return (
        (a = a.fallback),
        l
          ? (ea(),
            (l = e.mode),
            (g = Mo({ mode: "hidden", children: g }, l)),
            (a = Ra(a, l, n, null)),
            (g.return = e),
            (a.return = e),
            (g.sibling = a),
            (e.child = g),
            (a = e.child),
            (a.memoizedState = $r(n)),
            (a.childLanes = Fr(t, u, n)),
            (e.memoizedState = Jr),
            yi(null, a))
          : (ta(e), Wr(e, g))
      );
    }
    var S = t.memoizedState;
    if (S !== null && ((g = S.dehydrated), g !== null)) {
      if (o)
        e.flags & 256
          ? (ta(e), (e.flags &= -257), (e = Pr(t, e, n)))
          : e.memoizedState !== null
            ? (ea(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (ea(),
              (g = a.fallback),
              (l = e.mode),
              (a = Mo({ mode: "visible", children: a.children }, l)),
              (g = Ra(g, l, n, null)),
              (g.flags |= 2),
              (a.return = e),
              (g.return = e),
              (a.sibling = g),
              (e.child = a),
              Ua(e, t.child, null, n),
              (a = e.child),
              (a.memoizedState = $r(n)),
              (a.childLanes = Fr(t, u, n)),
              (e.memoizedState = Jr),
              (e = yi(null, a)));
      else if ((ta(e), Mc(g))) {
        if (((u = g.nextSibling && g.nextSibling.dataset), u)) var _ = u.dgst;
        ((u = _),
          (a = Error(r(419))),
          (a.stack = ""),
          (a.digest = u),
          oi({ value: a, source: null, stack: null }),
          (e = Pr(t, e, n)));
      } else if (
        ($t || fl(t, e, n, !1), (u = (n & t.childLanes) !== 0), $t || u)
      ) {
        if (
          ((u = Bt),
          u !== null && ((a = Se(u, n)), a !== 0 && a !== S.retryLane))
        )
          throw ((S.retryLane = a), Oa(t, a), Oe(u, t, a), Zr);
        (_c(g) || ko(), (e = Pr(t, e, n)));
      } else
        _c(g)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = S.treeContext),
            (Lt = $e(g.nextSibling)),
            (oe = e),
            (Ot = !0),
            (Jn = null),
            (Ke = !1),
            t !== null && Af(e, t),
            (e = Wr(e, a.children)),
            (e.flags |= 4096));
      return e;
    }
    return l
      ? (ea(),
        (g = a.fallback),
        (l = e.mode),
        (S = t.child),
        (_ = S.sibling),
        (a = En(S, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = S.subtreeFlags & 65011712),
        _ !== null ? (g = En(_, g)) : ((g = Ra(g, l, n, null)), (g.flags |= 2)),
        (g.return = e),
        (a.return = e),
        (a.sibling = g),
        (e.child = a),
        yi(null, a),
        (a = e.child),
        (g = t.child.memoizedState),
        g === null
          ? (g = $r(n))
          : ((l = g.cachePool),
            l !== null
              ? ((S = Kt._currentValue),
                (l = l.parent !== S ? { parent: S, pool: S } : l))
              : (l = _f()),
            (g = { baseLanes: g.baseLanes | n, cachePool: l })),
        (a.memoizedState = g),
        (a.childLanes = Fr(t, u, n)),
        (e.memoizedState = Jr),
        yi(t.child, a))
      : (ta(e),
        (n = t.child),
        (t = n.sibling),
        (n = En(n, { mode: "visible", children: a.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((u = e.deletions),
          u === null ? ((e.deletions = [t]), (e.flags |= 16)) : u.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function Wr(t, e) {
    return (
      (e = Mo({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function Mo(t, e) {
    return ((t = Me(22, t, null, e)), (t.lanes = 0), t);
  }
  function Pr(t, e, n) {
    return (
      Ua(e, t.child, null, n),
      (t = Wr(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Xd(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    (a !== null && (a.lanes |= e), mr(t.return, e, n));
  }
  function Ir(t, e, n, a, l, o) {
    var u = t.memoizedState;
    u === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: n,
          tailMode: l,
          treeForkCount: o,
        })
      : ((u.isBackwards = e),
        (u.rendering = null),
        (u.renderingStartTime = 0),
        (u.last = a),
        (u.tail = n),
        (u.tailMode = l),
        (u.treeForkCount = o));
  }
  function Qd(t, e, n) {
    var a = e.pendingProps,
      l = a.revealOrder,
      o = a.tail;
    a = a.children;
    var u = Qt.current,
      g = (u & 2) !== 0;
    if (
      (g ? ((u = (u & 1) | 2), (e.flags |= 128)) : (u &= 1),
      L(Qt, u),
      re(t, e, a, n),
      (a = Ot ? ii : 0),
      !g && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Xd(t, n, e);
        else if (t.tag === 19) Xd(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (l) {
      case "forwards":
        for (n = e.child, l = null; n !== null; )
          ((t = n.alternate),
            t !== null && xo(t) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = e.child), (e.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Ir(e, !1, l, n, o, a));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, l = e.child, e.child = null; l !== null; ) {
          if (((t = l.alternate), t !== null && xo(t) === null)) {
            e.child = l;
            break;
          }
          ((t = l.sibling), (l.sibling = n), (n = l), (l = t));
        }
        Ir(e, !0, n, null, o, a);
        break;
      case "together":
        Ir(e, !1, null, null, void 0, a);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function Rn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (la |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((fl(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(r(153));
    if (e.child !== null) {
      for (
        t = e.child, n = En(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;

      )
        ((t = t.sibling),
          (n = n.sibling = En(t, t.pendingProps)),
          (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function tc(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && fo(t)));
  }
  function $v(t, e, n) {
    switch (e.tag) {
      case 3:
        (ut(e, e.stateNode.containerInfo),
          Fn(e, Kt, t.memoizedState.cache),
          za());
        break;
      case 27:
      case 5:
        ae(e);
        break;
      case 4:
        ut(e, e.stateNode.containerInfo);
        break;
      case 10:
        Fn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), Ar(e), null);
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (ta(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? Vd(t, e, n)
              : (ta(e), (t = Rn(t, e, n)), t !== null ? t.sibling : null);
        ta(e);
        break;
      case 19:
        var l = (t.flags & 128) !== 0;
        if (
          ((a = (n & e.childLanes) !== 0),
          a || (fl(t, e, n, !1), (a = (n & e.childLanes) !== 0)),
          l)
        ) {
          if (a) return Qd(t, e, n);
          e.flags |= 128;
        }
        if (
          ((l = e.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          L(Qt, Qt.current),
          a)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), Bd(t, e, n, e.pendingProps));
      case 24:
        Fn(e, Kt, t.memoizedState.cache);
    }
    return Rn(t, e, n);
  }
  function Zd(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) $t = !0;
      else {
        if (!tc(t, n) && (e.flags & 128) === 0) return (($t = !1), $v(t, e, n));
        $t = (t.flags & 131072) !== 0;
      }
    else (($t = !1), Ot && (e.flags & 1048576) !== 0 && Tf(e, ii, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (((t = Da(e.elementType)), (e.type = t), typeof t == "function"))
            ir(t)
              ? ((a = La(t, a)), (e.tag = 1), (e = kd(null, e, t, a, n)))
              : ((e.tag = 0), (e = Kr(null, e, t, a, n)));
          else {
            if (t != null) {
              var l = t.$$typeof;
              if (l === $) {
                ((e.tag = 11), (e = Dd(null, e, t, a, n)));
                break t;
              } else if (l === Z) {
                ((e.tag = 14), (e = Hd(null, e, t, a, n)));
                break t;
              }
            }
            throw ((e = vt(t) || t), Error(r(306, e, "")));
          }
        }
        return e;
      case 0:
        return Kr(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((a = e.type), (l = La(a, e.pendingProps)), kd(t, e, a, l, n));
      case 3:
        t: {
          if ((ut(e, e.stateNode.containerInfo), t === null))
            throw Error(r(387));
          a = e.pendingProps;
          var o = e.memoizedState;
          ((l = o.element), xr(t, e), mi(e, a, null, n));
          var u = e.memoizedState;
          if (
            ((a = u.cache),
            Fn(e, Kt, a),
            a !== o.cache && hr(e, [Kt], n, !0),
            di(),
            (a = u.element),
            o.isDehydrated)
          )
            if (
              ((o = { element: a, isDehydrated: !1, cache: u.cache }),
              (e.updateQueue.baseState = o),
              (e.memoizedState = o),
              e.flags & 256)
            ) {
              e = Gd(t, e, a, n);
              break t;
            } else if (a !== l) {
              ((l = Xe(Error(r(424)), e)), oi(l), (e = Gd(t, e, a, n)));
              break t;
            } else {
              switch (((t = e.stateNode.containerInfo), t.nodeType)) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (
                Lt = $e(t.firstChild),
                  oe = e,
                  Ot = !0,
                  Jn = null,
                  Ke = !0,
                  n = Bf(e, null, a, n),
                  e.child = n;
                n;

              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
            }
          else {
            if ((za(), a === l)) {
              e = Rn(t, e, n);
              break t;
            }
            re(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          _o(t, e),
          t === null
            ? (n = ah(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : Ot ||
                ((n = e.type),
                (t = e.pendingProps),
                (a = Jo(ot.current).createElement(n)),
                (a[ie] = e),
                (a[we] = t),
                ce(a, n, t),
                te(a),
                (e.stateNode = a))
            : (e.memoizedState = ah(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          ae(e),
          t === null &&
            Ot &&
            ((a = e.stateNode = th(e.type, e.pendingProps, ot.current)),
            (oe = e),
            (Ke = !0),
            (l = Lt),
            ca(e.type) ? ((jc = l), (Lt = $e(a.firstChild))) : (Lt = l)),
          re(t, e, e.pendingProps.children, n),
          _o(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            Ot &&
            ((l = a = Lt) &&
              ((a = Ay(a, e.type, e.pendingProps, Ke)),
              a !== null
                ? ((e.stateNode = a),
                  (oe = e),
                  (Lt = $e(a.firstChild)),
                  (Ke = !1),
                  (l = !0))
                : (l = !1)),
            l || $n(e)),
          ae(e),
          (l = e.type),
          (o = e.pendingProps),
          (u = t !== null ? t.memoizedProps : null),
          (a = o.children),
          Oc(l, o) ? (a = null) : u !== null && Oc(l, u) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((l = Cr(t, e, qv, null, null, n)), (ji._currentValue = l)),
          _o(t, e),
          re(t, e, a, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            Ot &&
            ((t = n = Lt) &&
              ((n = Ny(n, e.pendingProps, Ke)),
              n !== null
                ? ((e.stateNode = n), (oe = e), (Lt = null), (t = !0))
                : (t = !1)),
            t || $n(e)),
          null
        );
      case 13:
        return Vd(t, e, n);
      case 4:
        return (
          ut(e, e.stateNode.containerInfo),
          (a = e.pendingProps),
          t === null ? (e.child = Ua(e, null, a, n)) : re(t, e, a, n),
          e.child
        );
      case 11:
        return Dd(t, e, e.type, e.pendingProps, n);
      case 7:
        return (re(t, e, e.pendingProps, n), e.child);
      case 8:
        return (re(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (re(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return (
          (a = e.pendingProps),
          Fn(e, e.type, a.value),
          re(t, e, a.children, n),
          e.child
        );
      case 9:
        return (
          (l = e.type._context),
          (a = e.pendingProps.children),
          Ma(e),
          (l = se(l)),
          (a = a(l)),
          (e.flags |= 1),
          re(t, e, a, n),
          e.child
        );
      case 14:
        return Hd(t, e, e.type, e.pendingProps, n);
      case 15:
        return Ud(t, e, e.type, e.pendingProps, n);
      case 19:
        return Qd(t, e, n);
      case 31:
        return Jv(t, e, n);
      case 22:
        return Bd(t, e, n, e.pendingProps);
      case 24:
        return (
          Ma(e),
          (a = se(Kt)),
          t === null
            ? ((l = vr()),
              l === null &&
                ((l = Bt),
                (o = pr()),
                (l.pooledCache = o),
                o.refCount++,
                o !== null && (l.pooledCacheLanes |= n),
                (l = o)),
              (e.memoizedState = { parent: a, cache: l }),
              br(e),
              Fn(e, Kt, l))
            : ((t.lanes & n) !== 0 && (xr(t, e), mi(e, null, null, n), di()),
              (l = t.memoizedState),
              (o = e.memoizedState),
              l.parent !== a
                ? ((l = { parent: a, cache: a }),
                  (e.memoizedState = l),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = l),
                  Fn(e, Kt, a))
                : ((a = o.cache),
                  Fn(e, Kt, a),
                  a !== l.cache && hr(e, [Kt], n, !0))),
          re(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function zn(t) {
    t.flags |= 4;
  }
  function ec(t, e, n, a, l) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (l & 335544128) === l))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (bm()) t.flags |= 8192;
        else throw ((Ha = go), yr);
    } else t.flags &= -16777217;
  }
  function Kd(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !rh(e)))
      if (bm()) t.flags |= 8192;
      else throw ((Ha = go), yr);
  }
  function jo(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? fe() : 536870912), (t.lanes |= e), (El |= e)));
  }
  function bi(t, e) {
    if (!Ot)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null; )
            (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var a = null; n !== null; )
            (n.alternate !== null && (a = n), (n = n.sibling));
          a === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function Yt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      a = 0;
    if (e)
      for (var l = t.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (a |= l.subtreeFlags & 65011712),
          (a |= l.flags & 65011712),
          (l.return = t),
          (l = l.sibling));
    else
      for (l = t.child; l !== null; )
        ((n |= l.lanes | l.childLanes),
          (a |= l.subtreeFlags),
          (a |= l.flags),
          (l.return = t),
          (l = l.sibling));
    return ((t.subtreeFlags |= a), (t.childLanes = n), e);
  }
  function Fv(t, e, n) {
    var a = e.pendingProps;
    switch ((cr(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Yt(e), null);
      case 1:
        return (Yt(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (a = null),
          t !== null && (a = t.memoizedState.cache),
          e.memoizedState.cache !== a && (e.flags |= 2048),
          Nn(Kt),
          Ct(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (ul(e)
              ? zn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), fr())),
          Yt(e),
          null
        );
      case 26:
        var l = e.type,
          o = e.memoizedState;
        return (
          t === null
            ? (zn(e),
              o !== null ? (Yt(e), Kd(e, o)) : (Yt(e), ec(e, l, null, a, n)))
            : o
              ? o !== t.memoizedState
                ? (zn(e), Yt(e), Kd(e, o))
                : (Yt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== a && zn(e),
                Yt(e),
                ec(e, l, t, a, n)),
          null
        );
      case 27:
        if (
          (me(e),
          (n = ot.current),
          (l = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== a && zn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return (Yt(e), null);
          }
          ((t = Q.current),
            ul(e) ? Nf(e) : ((t = th(l, a, n)), (e.stateNode = t), zn(e)));
        }
        return (Yt(e), null);
      case 5:
        if ((me(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== a && zn(e);
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166));
            return (Yt(e), null);
          }
          if (((o = Q.current), ul(e))) Nf(e);
          else {
            var u = Jo(ot.current);
            switch (o) {
              case 1:
                o = u.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                o = u.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    o = u.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    o = u.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l,
                    );
                    break;
                  case "script":
                    ((o = u.createElement("div")),
                      (o.innerHTML = "<script><\/script>"),
                      (o = o.removeChild(o.firstChild)));
                    break;
                  case "select":
                    ((o =
                      typeof a.is == "string"
                        ? u.createElement("select", { is: a.is })
                        : u.createElement("select")),
                      a.multiple
                        ? (o.multiple = !0)
                        : a.size && (o.size = a.size));
                    break;
                  default:
                    o =
                      typeof a.is == "string"
                        ? u.createElement(l, { is: a.is })
                        : u.createElement(l);
                }
            }
            ((o[ie] = e), (o[we] = a));
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) o.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                ((u.child.return = u), (u = u.child));
                continue;
              }
              if (u === e) break t;
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e) break t;
                u = u.return;
              }
              ((u.sibling.return = u.return), (u = u.sibling));
            }
            e.stateNode = o;
            t: switch ((ce(o, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && zn(e);
          }
        }
        return (
          Yt(e),
          ec(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && zn(e);
        else {
          if (typeof a != "string" && e.stateNode === null) throw Error(r(166));
          if (((t = ot.current), ul(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (a = null),
              (l = oe),
              l !== null)
            )
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            ((t[ie] = e),
              (t = !!(
                t.nodeValue === n ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                Vm(t.nodeValue, n)
              )),
              t || $n(e, !0));
          } else
            ((t = Jo(t).createTextNode(a)), (t[ie] = e), (e.stateNode = t));
        }
        return (Yt(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((a = ul(e)), n !== null)) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(r(557));
              t[ie] = e;
            } else
              (za(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Yt(e), (t = !1));
          } else
            ((n = fr()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0));
          if (!t) return e.flags & 256 ? (De(e), e) : (De(e), null);
          if ((e.flags & 128) !== 0) throw Error(r(558));
        }
        return (Yt(e), null);
      case 13:
        if (
          ((a = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((l = ul(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!l) throw Error(r(318));
              if (
                ((l = e.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(r(317));
              l[ie] = e;
            } else
              (za(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Yt(e), (l = !1));
          } else
            ((l = fr()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (l = !0));
          if (!l) return e.flags & 256 ? (De(e), e) : (De(e), null);
        }
        return (
          De(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = a !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((a = e.child),
                (l = null),
                a.alternate !== null &&
                  a.alternate.memoizedState !== null &&
                  a.alternate.memoizedState.cachePool !== null &&
                  (l = a.alternate.memoizedState.cachePool.pool),
                (o = null),
                a.memoizedState !== null &&
                  a.memoizedState.cachePool !== null &&
                  (o = a.memoizedState.cachePool.pool),
                o !== l && (a.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              jo(e, e.updateQueue),
              Yt(e),
              null)
        );
      case 4:
        return (Ct(), t === null && Ec(e.stateNode.containerInfo), Yt(e), null);
      case 10:
        return (Nn(e.type), Yt(e), null);
      case 19:
        if ((Y(Qt), (a = e.memoizedState), a === null)) return (Yt(e), null);
        if (((l = (e.flags & 128) !== 0), (o = a.rendering), o === null))
          if (l) bi(a, !1);
          else {
            if (Xt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null; ) {
                if (((o = xo(t)), o !== null)) {
                  for (
                    e.flags |= 128,
                      bi(a, !1),
                      t = o.updateQueue,
                      e.updateQueue = t,
                      jo(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;

                  )
                    (Sf(n, t), (n = n.sibling));
                  return (
                    L(Qt, (Qt.current & 1) | 2),
                    Ot && Tn(e, a.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            a.tail !== null &&
              pe() > Lo &&
              ((e.flags |= 128), (l = !0), bi(a, !1), (e.lanes = 4194304));
          }
        else {
          if (!l)
            if (((t = xo(o)), t !== null)) {
              if (
                ((e.flags |= 128),
                (l = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                jo(e, t),
                bi(a, !0),
                a.tail === null &&
                  a.tailMode === "hidden" &&
                  !o.alternate &&
                  !Ot)
              )
                return (Yt(e), null);
            } else
              2 * pe() - a.renderingStartTime > Lo &&
                n !== 536870912 &&
                ((e.flags |= 128), (l = !0), bi(a, !1), (e.lanes = 4194304));
          a.isBackwards
            ? ((o.sibling = e.child), (e.child = o))
            : ((t = a.last),
              t !== null ? (t.sibling = o) : (e.child = o),
              (a.last = o));
        }
        return a.tail !== null
          ? ((t = a.tail),
            (a.rendering = t),
            (a.tail = t.sibling),
            (a.renderingStartTime = pe()),
            (t.sibling = null),
            (n = Qt.current),
            L(Qt, l ? (n & 1) | 2 : n & 1),
            Ot && Tn(e, a.treeForkCount),
            t)
          : (Yt(e), null);
      case 22:
      case 23:
        return (
          De(e),
          Tr(),
          (a = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== a && (e.flags |= 8192)
            : a && (e.flags |= 8192),
          a
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Yt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Yt(e),
          (n = e.updateQueue),
          n !== null && jo(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (a = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          a !== n && (e.flags |= 2048),
          t !== null && Y(ja),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          Nn(Kt),
          Yt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, e.tag));
  }
  function Wv(t, e) {
    switch ((cr(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          Nn(Kt),
          Ct(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (me(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((De(e), e.alternate === null)) throw Error(r(340));
          za();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (De(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(r(340));
          za();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (Y(Qt), null);
      case 4:
        return (Ct(), null);
      case 10:
        return (Nn(e.type), null);
      case 22:
      case 23:
        return (
          De(e),
          Tr(),
          t !== null && Y(ja),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (Nn(Kt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Jd(t, e) {
    switch ((cr(e), e.tag)) {
      case 3:
        (Nn(Kt), Ct());
        break;
      case 26:
      case 27:
      case 5:
        me(e);
        break;
      case 4:
        Ct();
        break;
      case 31:
        e.memoizedState !== null && De(e);
        break;
      case 13:
        De(e);
        break;
      case 19:
        Y(Qt);
        break;
      case 10:
        Nn(e.type);
        break;
      case 22:
      case 23:
        (De(e), Tr(), t !== null && Y(ja));
        break;
      case 24:
        Nn(Kt);
    }
  }
  function xi(t, e) {
    try {
      var n = e.updateQueue,
        a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var l = a.next;
        n = l;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var o = n.create,
              u = n.inst;
            ((a = o()), (u.destroy = a));
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (g) {
      jt(e, e.return, g);
    }
  }
  function na(t, e, n) {
    try {
      var a = e.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var o = l.next;
        a = o;
        do {
          if ((a.tag & t) === t) {
            var u = a.inst,
              g = u.destroy;
            if (g !== void 0) {
              ((u.destroy = void 0), (l = e));
              var S = n,
                _ = g;
              try {
                _();
              } catch (B) {
                jt(l, S, B);
              }
            }
          }
          a = a.next;
        } while (a !== o);
      }
    } catch (B) {
      jt(e, e.return, B);
    }
  }
  function $d(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Yf(e, n);
      } catch (a) {
        jt(t, t.return, a);
      }
    }
  }
  function Fd(t, e, n) {
    ((n.props = La(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (a) {
      jt(t, e, a);
    }
  }
  function Si(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(a)) : (n.current = a);
      }
    } catch (l) {
      jt(t, e, l);
    }
  }
  function un(t, e) {
    var n = t.ref,
      a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (l) {
          jt(t, e, l);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          jt(t, e, l);
        }
      else n.current = null;
  }
  function Wd(t) {
    var e = t.type,
      n = t.memoizedProps,
      a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? (a.src = n.src) : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (l) {
      jt(t, t.return, l);
    }
  }
  function nc(t, e, n) {
    try {
      var a = t.stateNode;
      (by(a, t.type, n, e), (a[we] = e));
    } catch (l) {
      jt(t, t.return, l);
    }
  }
  function Pd(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && ca(t.type)) ||
      t.tag === 4
    );
  }
  function ac(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || Pd(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

      ) {
        if (
          (t.tag === 27 && ca(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function lc(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = Sn)));
    else if (
      a !== 4 &&
      (a === 27 && ca(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (lc(t, e, n), t = t.sibling; t !== null; )
        (lc(t, e, n), (t = t.sibling));
  }
  function Do(t, e, n) {
    var a = t.tag;
    if (a === 5 || a === 6)
      ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (
      a !== 4 &&
      (a === 27 && ca(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (Do(t, e, n), t = t.sibling; t !== null; )
        (Do(t, e, n), (t = t.sibling));
  }
  function Id(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var a = t.type, l = e.attributes; l.length; )
        e.removeAttributeNode(l[0]);
      (ce(e, a, n), (e[ie] = t), (e[we] = n));
    } catch (o) {
      jt(t, t.return, o);
    }
  }
  var _n = !1,
    Ft = !1,
    ic = !1,
    tm = typeof WeakSet == "function" ? WeakSet : Set,
    ee = null;
  function Pv(t, e) {
    if (((t = t.containerInfo), (Nc = es), (t = df(t)), Ps(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var a = n.getSelection && n.getSelection();
          if (a && a.rangeCount !== 0) {
            n = a.anchorNode;
            var l = a.anchorOffset,
              o = a.focusNode;
            a = a.focusOffset;
            try {
              (n.nodeType, o.nodeType);
            } catch {
              n = null;
              break t;
            }
            var u = 0,
              g = -1,
              S = -1,
              _ = 0,
              B = 0,
              V = t,
              M = null;
            e: for (;;) {
              for (
                var D;
                V !== n || (l !== 0 && V.nodeType !== 3) || (g = u + l),
                  V !== o || (a !== 0 && V.nodeType !== 3) || (S = u + a),
                  V.nodeType === 3 && (u += V.nodeValue.length),
                  (D = V.firstChild) !== null;

              )
                ((M = V), (V = D));
              for (;;) {
                if (V === t) break e;
                if (
                  (M === n && ++_ === l && (g = u),
                  M === o && ++B === a && (S = u),
                  (D = V.nextSibling) !== null)
                )
                  break;
                ((V = M), (M = V.parentNode));
              }
              V = D;
            }
            n = g === -1 || S === -1 ? null : { start: g, end: S };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Cc = { focusedElem: t, selectionRange: n }, es = !1, ee = e;
      ee !== null;

    )
      if (
        ((e = ee), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (ee = t));
      else
        for (; ee !== null; ) {
          switch (((e = ee), (o = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (n = 0; n < t.length; n++)
                  ((l = t[n]), (l.ref.impl = l.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && o !== null) {
                ((t = void 0),
                  (n = e),
                  (l = o.memoizedProps),
                  (o = o.memoizedState),
                  (a = n.stateNode));
                try {
                  var tt = La(n.type, l);
                  ((t = a.getSnapshotBeforeUpdate(tt, o)),
                    (a.__reactInternalSnapshotBeforeUpdate = t));
                } catch (ct) {
                  jt(n, n.return, ct);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  zc(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      zc(t);
                      break;
                    default:
                      t.textContent = "";
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
              if ((t & 1024) !== 0) throw Error(r(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (ee = t));
            break;
          }
          ee = e.return;
        }
  }
  function em(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (jn(t, n), a & 4 && xi(5, n));
        break;
      case 1:
        if ((jn(t, n), a & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (u) {
              jt(n, n.return, u);
            }
          else {
            var l = La(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(l, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (u) {
              jt(n, n.return, u);
            }
          }
        (a & 64 && $d(n), a & 512 && Si(n, n.return));
        break;
      case 3:
        if ((jn(t, n), a & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Yf(t, e);
          } catch (u) {
            jt(n, n.return, u);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Id(n);
      case 26:
      case 5:
        (jn(t, n), e === null && a & 4 && Wd(n), a & 512 && Si(n, n.return));
        break;
      case 12:
        jn(t, n);
        break;
      case 31:
        (jn(t, n), a & 4 && lm(t, n));
        break;
      case 13:
        (jn(t, n),
          a & 4 && im(t, n),
          a & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = sy.bind(null, n)), Cy(t, n)))));
        break;
      case 22:
        if (((a = n.memoizedState !== null || _n), !a)) {
          ((e = (e !== null && e.memoizedState !== null) || Ft), (l = _n));
          var o = Ft;
          ((_n = a),
            (Ft = e) && !o ? Dn(t, n, (n.subtreeFlags & 8772) !== 0) : jn(t, n),
            (_n = l),
            (Ft = o));
        }
        break;
      case 30:
        break;
      default:
        jn(t, n);
    }
  }
  function nm(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), nm(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Hs(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var kt = null,
    Te = !1;
  function Mn(t, e, n) {
    for (n = n.child; n !== null; ) (am(t, e, n), (n = n.sibling));
  }
  function am(t, e, n) {
    if (ge && typeof ge.onCommitFiberUnmount == "function")
      try {
        ge.onCommitFiberUnmount(Sa, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Ft || un(n, e),
          Mn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Ft || un(n, e);
        var a = kt,
          l = Te;
        (ca(n.type) && ((kt = n.stateNode), (Te = !1)),
          Mn(t, e, n),
          zi(n.stateNode),
          (kt = a),
          (Te = l));
        break;
      case 5:
        Ft || un(n, e);
      case 6:
        if (
          ((a = kt),
          (l = Te),
          (kt = null),
          Mn(t, e, n),
          (kt = a),
          (Te = l),
          kt !== null)
        )
          if (Te)
            try {
              (kt.nodeType === 9
                ? kt.body
                : kt.nodeName === "HTML"
                  ? kt.ownerDocument.body
                  : kt
              ).removeChild(n.stateNode);
            } catch (o) {
              jt(n, e, o);
            }
          else
            try {
              kt.removeChild(n.stateNode);
            } catch (o) {
              jt(n, e, o);
            }
        break;
      case 18:
        kt !== null &&
          (Te
            ? ((t = kt),
              $m(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              _l(t))
            : $m(kt, n.stateNode));
        break;
      case 4:
        ((a = kt),
          (l = Te),
          (kt = n.stateNode.containerInfo),
          (Te = !0),
          Mn(t, e, n),
          (kt = a),
          (Te = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (na(2, n, e), Ft || na(4, n, e), Mn(t, e, n));
        break;
      case 1:
        (Ft ||
          (un(n, e),
          (a = n.stateNode),
          typeof a.componentWillUnmount == "function" && Fd(n, e, a)),
          Mn(t, e, n));
        break;
      case 21:
        Mn(t, e, n);
        break;
      case 22:
        ((Ft = (a = Ft) || n.memoizedState !== null), Mn(t, e, n), (Ft = a));
        break;
      default:
        Mn(t, e, n);
    }
  }
  function lm(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        _l(t);
      } catch (n) {
        jt(e, e.return, n);
      }
    }
  }
  function im(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        _l(t);
      } catch (n) {
        jt(e, e.return, n);
      }
  }
  function Iv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new tm()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new tm()),
          e
        );
      default:
        throw Error(r(435, t.tag));
    }
  }
  function Ho(t, e) {
    var n = Iv(t);
    e.forEach(function (a) {
      if (!n.has(a)) {
        n.add(a);
        var l = ry.bind(null, t, a);
        a.then(l, l);
      }
    });
  }
  function Ae(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a],
          o = t,
          u = e,
          g = u;
        t: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (ca(g.type)) {
                ((kt = g.stateNode), (Te = !1));
                break t;
              }
              break;
            case 5:
              ((kt = g.stateNode), (Te = !1));
              break t;
            case 3:
            case 4:
              ((kt = g.stateNode.containerInfo), (Te = !0));
              break t;
          }
          g = g.return;
        }
        if (kt === null) throw Error(r(160));
        (am(o, u, l),
          (kt = null),
          (Te = !1),
          (o = l.alternate),
          o !== null && (o.return = null),
          (l.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; ) (om(e, t), (e = e.sibling));
  }
  var en = null;
  function om(t, e) {
    var n = t.alternate,
      a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ae(e, t),
          Ne(t),
          a & 4 && (na(3, t, t.return), xi(3, t), na(5, t, t.return)));
        break;
      case 1:
        (Ae(e, t),
          Ne(t),
          a & 512 && (Ft || n === null || un(n, n.return)),
          a & 64 &&
            _n &&
            ((t = t.updateQueue),
            t !== null &&
              ((a = t.callbacks),
              a !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? a : n.concat(a))))));
        break;
      case 26:
        var l = en;
        if (
          (Ae(e, t),
          Ne(t),
          a & 512 && (Ft || n === null || un(n, n.return)),
          a & 4)
        ) {
          var o = n !== null ? n.memoizedState : null;
          if (((a = t.memoizedState), n === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  ((a = t.type),
                    (n = t.memoizedProps),
                    (l = l.ownerDocument || l));
                  e: switch (a) {
                    case "title":
                      ((o = l.getElementsByTagName("title")[0]),
                        (!o ||
                          o[Jl] ||
                          o[ie] ||
                          o.namespaceURI === "http://www.w3.org/2000/svg" ||
                          o.hasAttribute("itemprop")) &&
                          ((o = l.createElement(a)),
                          l.head.insertBefore(
                            o,
                            l.querySelector("head > title"),
                          )),
                        ce(o, a, n),
                        (o[ie] = t),
                        te(o),
                        (a = o));
                      break t;
                    case "link":
                      var u = oh("link", "href", l).get(a + (n.href || ""));
                      if (u) {
                        for (var g = 0; g < u.length; g++)
                          if (
                            ((o = u[g]),
                            o.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              o.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              o.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              o.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            u.splice(g, 1);
                            break e;
                          }
                      }
                      ((o = l.createElement(a)),
                        ce(o, a, n),
                        l.head.appendChild(o));
                      break;
                    case "meta":
                      if (
                        (u = oh("meta", "content", l).get(
                          a + (n.content || ""),
                        ))
                      ) {
                        for (g = 0; g < u.length; g++)
                          if (
                            ((o = u[g]),
                            o.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              o.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              o.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              o.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              o.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            u.splice(g, 1);
                            break e;
                          }
                      }
                      ((o = l.createElement(a)),
                        ce(o, a, n),
                        l.head.appendChild(o));
                      break;
                    default:
                      throw Error(r(468, a));
                  }
                  ((o[ie] = t), te(o), (a = o));
                }
                t.stateNode = a;
              } else sh(l, t.type, t.stateNode);
            else t.stateNode = ih(l, a, t.memoizedProps);
          else
            o !== a
              ? (o === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : o.count--,
                a === null
                  ? sh(l, t.type, t.stateNode)
                  : ih(l, a, t.memoizedProps))
              : a === null &&
                t.stateNode !== null &&
                nc(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (Ae(e, t),
          Ne(t),
          a & 512 && (Ft || n === null || un(n, n.return)),
          n !== null && a & 4 && nc(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (Ae(e, t),
          Ne(t),
          a & 512 && (Ft || n === null || un(n, n.return)),
          t.flags & 32)
        ) {
          l = t.stateNode;
          try {
            tl(l, "");
          } catch (tt) {
            jt(t, t.return, tt);
          }
        }
        (a & 4 &&
          t.stateNode != null &&
          ((l = t.memoizedProps), nc(t, l, n !== null ? n.memoizedProps : l)),
          a & 1024 && (ic = !0));
        break;
      case 6:
        if ((Ae(e, t), Ne(t), a & 4)) {
          if (t.stateNode === null) throw Error(r(162));
          ((a = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = a;
          } catch (tt) {
            jt(t, t.return, tt);
          }
        }
        break;
      case 3:
        if (
          ((Wo = null),
          (l = en),
          (en = $o(e.containerInfo)),
          Ae(e, t),
          (en = l),
          Ne(t),
          a & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            _l(e.containerInfo);
          } catch (tt) {
            jt(t, t.return, tt);
          }
        ic && ((ic = !1), sm(t));
        break;
      case 4:
        ((a = en),
          (en = $o(t.stateNode.containerInfo)),
          Ae(e, t),
          Ne(t),
          (en = a));
        break;
      case 12:
        (Ae(e, t), Ne(t));
        break;
      case 31:
        (Ae(e, t),
          Ne(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Ho(t, a))));
        break;
      case 13:
        (Ae(e, t),
          Ne(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Bo = pe()),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Ho(t, a))));
        break;
      case 22:
        l = t.memoizedState !== null;
        var S = n !== null && n.memoizedState !== null,
          _ = _n,
          B = Ft;
        if (
          ((_n = _ || l),
          (Ft = B || S),
          Ae(e, t),
          (Ft = B),
          (_n = _),
          Ne(t),
          a & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = l ? e._visibility & -2 : e._visibility | 1,
              l && (n === null || S || _n || Ft || Ya(t)),
              n = null,
              e = t;
            ;

          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                S = n = e;
                try {
                  if (((o = S.stateNode), l))
                    ((u = o.style),
                      typeof u.setProperty == "function"
                        ? u.setProperty("display", "none", "important")
                        : (u.display = "none"));
                  else {
                    g = S.stateNode;
                    var V = S.memoizedProps.style,
                      M =
                        V != null && V.hasOwnProperty("display")
                          ? V.display
                          : null;
                    g.style.display =
                      M == null || typeof M == "boolean" ? "" : ("" + M).trim();
                  }
                } catch (tt) {
                  jt(S, S.return, tt);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                S = e;
                try {
                  S.stateNode.nodeValue = l ? "" : S.memoizedProps;
                } catch (tt) {
                  jt(S, S.return, tt);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                S = e;
                try {
                  var D = S.stateNode;
                  l ? Fm(D, !0) : Fm(S.stateNode, !1);
                } catch (tt) {
                  jt(S, S.return, tt);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              (n === e && (n = null), (e = e.return));
            }
            (n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        a & 4 &&
          ((a = t.updateQueue),
          a !== null &&
            ((n = a.retryQueue),
            n !== null && ((a.retryQueue = null), Ho(t, n))));
        break;
      case 19:
        (Ae(e, t),
          Ne(t),
          a & 4 &&
            ((a = t.updateQueue),
            a !== null && ((t.updateQueue = null), Ho(t, a))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ae(e, t), Ne(t));
    }
  }
  function Ne(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (Pd(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode,
              o = ac(t);
            Do(t, o, l);
            break;
          case 5:
            var u = n.stateNode;
            n.flags & 32 && (tl(u, ""), (n.flags &= -33));
            var g = ac(t);
            Do(t, g, u);
            break;
          case 3:
          case 4:
            var S = n.stateNode.containerInfo,
              _ = ac(t);
            lc(t, _, S);
            break;
          default:
            throw Error(r(161));
        }
      } catch (B) {
        jt(t, t.return, B);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function sm(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        (sm(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function jn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; ) (em(t, e.alternate, e), (e = e.sibling));
  }
  function Ya(t) {
    for (t = t.child; t !== null; ) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (na(4, e, e.return), Ya(e));
          break;
        case 1:
          un(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == "function" && Fd(e, e.return, n),
            Ya(e));
          break;
        case 27:
          zi(e.stateNode);
        case 26:
        case 5:
          (un(e, e.return), Ya(e));
          break;
        case 22:
          e.memoizedState === null && Ya(e);
          break;
        case 30:
          Ya(e);
          break;
        default:
          Ya(e);
      }
      t = t.sibling;
    }
  }
  function Dn(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        l = t,
        o = e,
        u = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          (Dn(l, o, n), xi(4, o));
          break;
        case 1:
          if (
            (Dn(l, o, n),
            (a = o),
            (l = a.stateNode),
            typeof l.componentDidMount == "function")
          )
            try {
              l.componentDidMount();
            } catch (_) {
              jt(a, a.return, _);
            }
          if (((a = o), (l = a.updateQueue), l !== null)) {
            var g = a.stateNode;
            try {
              var S = l.shared.hiddenCallbacks;
              if (S !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < S.length; l++)
                  Lf(S[l], g);
            } catch (_) {
              jt(a, a.return, _);
            }
          }
          (n && u & 64 && $d(o), Si(o, o.return));
          break;
        case 27:
          Id(o);
        case 26:
        case 5:
          (Dn(l, o, n), n && a === null && u & 4 && Wd(o), Si(o, o.return));
          break;
        case 12:
          Dn(l, o, n);
          break;
        case 31:
          (Dn(l, o, n), n && u & 4 && lm(l, o));
          break;
        case 13:
          (Dn(l, o, n), n && u & 4 && im(l, o));
          break;
        case 22:
          (o.memoizedState === null && Dn(l, o, n), Si(o, o.return));
          break;
        case 30:
          break;
        default:
          Dn(l, o, n);
      }
      e = e.sibling;
    }
  }
  function oc(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && si(n)));
  }
  function sc(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && si(t)));
  }
  function nn(t, e, n, a) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (rm(t, e, n, a), (e = e.sibling));
  }
  function rm(t, e, n, a) {
    var l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (nn(t, e, n, a), l & 2048 && xi(9, e));
        break;
      case 1:
        nn(t, e, n, a);
        break;
      case 3:
        (nn(t, e, n, a),
          l & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && si(t))));
        break;
      case 12:
        if (l & 2048) {
          (nn(t, e, n, a), (t = e.stateNode));
          try {
            var o = e.memoizedProps,
              u = o.id,
              g = o.onPostCommit;
            typeof g == "function" &&
              g(
                u,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (S) {
            jt(e, e.return, S);
          }
        } else nn(t, e, n, a);
        break;
      case 31:
        nn(t, e, n, a);
        break;
      case 13:
        nn(t, e, n, a);
        break;
      case 23:
        break;
      case 22:
        ((o = e.stateNode),
          (u = e.alternate),
          e.memoizedState !== null
            ? o._visibility & 2
              ? nn(t, e, n, a)
              : wi(t, e)
            : o._visibility & 2
              ? nn(t, e, n, a)
              : ((o._visibility |= 2),
                xl(t, e, n, a, (e.subtreeFlags & 10256) !== 0 || !1)),
          l & 2048 && oc(u, e));
        break;
      case 24:
        (nn(t, e, n, a), l & 2048 && sc(e.alternate, e));
        break;
      default:
        nn(t, e, n, a);
    }
  }
  function xl(t, e, n, a, l) {
    for (
      l = l && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;

    ) {
      var o = t,
        u = e,
        g = n,
        S = a,
        _ = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (xl(o, u, g, S, l), xi(8, u));
          break;
        case 23:
          break;
        case 22:
          var B = u.stateNode;
          (u.memoizedState !== null
            ? B._visibility & 2
              ? xl(o, u, g, S, l)
              : wi(o, u)
            : ((B._visibility |= 2), xl(o, u, g, S, l)),
            l && _ & 2048 && oc(u.alternate, u));
          break;
        case 24:
          (xl(o, u, g, S, l), l && _ & 2048 && sc(u.alternate, u));
          break;
        default:
          xl(o, u, g, S, l);
      }
      e = e.sibling;
    }
  }
  function wi(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t,
          a = e,
          l = a.flags;
        switch (a.tag) {
          case 22:
            (wi(n, a), l & 2048 && oc(a.alternate, a));
            break;
          case 24:
            (wi(n, a), l & 2048 && sc(a.alternate, a));
            break;
          default:
            wi(n, a);
        }
        e = e.sibling;
      }
  }
  var Ei = 8192;
  function Sl(t, e, n) {
    if (t.subtreeFlags & Ei)
      for (t = t.child; t !== null; ) (cm(t, e, n), (t = t.sibling));
  }
  function cm(t, e, n) {
    switch (t.tag) {
      case 26:
        (Sl(t, e, n),
          t.flags & Ei &&
            t.memoizedState !== null &&
            Yy(n, en, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        Sl(t, e, n);
        break;
      case 3:
      case 4:
        var a = en;
        ((en = $o(t.stateNode.containerInfo)), Sl(t, e, n), (en = a));
        break;
      case 22:
        t.memoizedState === null &&
          ((a = t.alternate),
          a !== null && a.memoizedState !== null
            ? ((a = Ei), (Ei = 16777216), Sl(t, e, n), (Ei = a))
            : Sl(t, e, n));
        break;
      default:
        Sl(t, e, n);
    }
  }
  function um(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function Ti(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ((ee = a), dm(a, t));
        }
      um(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (fm(t), (t = t.sibling));
  }
  function fm(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (Ti(t), t.flags & 2048 && na(9, t, t.return));
        break;
      case 3:
        Ti(t);
        break;
      case 12:
        Ti(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Uo(t))
          : Ti(t);
        break;
      default:
        Ti(t);
    }
  }
  function Uo(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ((ee = a), dm(a, t));
        }
      um(t);
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (na(8, e, e.return), Uo(e));
          break;
        case 22:
          ((n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Uo(e)));
          break;
        default:
          Uo(e);
      }
      t = t.sibling;
    }
  }
  function dm(t, e) {
    for (; ee !== null; ) {
      var n = ee;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          na(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          si(n.memoizedState.cache);
      }
      if (((a = n.child), a !== null)) ((a.return = n), (ee = a));
      else
        t: for (n = t; ee !== null; ) {
          a = ee;
          var l = a.sibling,
            o = a.return;
          if ((nm(a), a === n)) {
            ee = null;
            break t;
          }
          if (l !== null) {
            ((l.return = o), (ee = l));
            break t;
          }
          ee = o;
        }
    }
  }
  var ty = {
      getCacheForType: function (t) {
        var e = se(Kt),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return se(Kt).controller.signal;
      },
    },
    ey = typeof WeakMap == "function" ? WeakMap : Map,
    _t = 0,
    Bt = null,
    Et = null,
    At = 0,
    Mt = 0,
    He = null,
    aa = !1,
    wl = !1,
    rc = !1,
    Hn = 0,
    Xt = 0,
    la = 0,
    qa = 0,
    cc = 0,
    Ue = 0,
    El = 0,
    Ai = null,
    Ce = null,
    uc = !1,
    Bo = 0,
    mm = 0,
    Lo = 1 / 0,
    Yo = null,
    ia = null,
    Wt = 0,
    oa = null,
    Tl = null,
    Un = 0,
    fc = 0,
    dc = null,
    hm = null,
    Ni = 0,
    mc = null;
  function Be() {
    return (_t & 2) !== 0 && At !== 0 ? At & -At : A.T !== null ? bc() : js();
  }
  function pm() {
    if (Ue === 0)
      if ((At & 536870912) === 0 || Ot) {
        var t = Za;
        ((Za <<= 1), (Za & 3932160) === 0 && (Za = 262144), (Ue = t));
      } else Ue = 536870912;
    return ((t = je.current), t !== null && (t.flags |= 32), Ue);
  }
  function Oe(t, e, n) {
    (((t === Bt && (Mt === 2 || Mt === 9)) || t.cancelPendingCommit !== null) &&
      (Al(t, 0), sa(t, At, Ue, !1)),
      Gt(t, n),
      ((_t & 2) === 0 || t !== Bt) &&
        (t === Bt &&
          ((_t & 2) === 0 && (qa |= n), Xt === 4 && sa(t, At, Ue, !1)),
        fn(t)));
  }
  function gm(t, e, n) {
    if ((_t & 6) !== 0) throw Error(r(327));
    var a = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || qt(t, e),
      l = a ? ly(t, e) : pc(t, e, !0),
      o = a;
    do {
      if (l === 0) {
        wl && !a && sa(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), o && !ny(n))) {
          ((l = pc(t, e, !1)), (o = !1));
          continue;
        }
        if (l === 2) {
          if (((o = e), t.errorRecoveryDisabledLanes & o)) var u = 0;
          else
            ((u = t.pendingLanes & -536870913),
              (u = u !== 0 ? u : u & 536870912 ? 536870912 : 0));
          if (u !== 0) {
            e = u;
            t: {
              var g = t;
              l = Ai;
              var S = g.current.memoizedState.isDehydrated;
              if ((S && (Al(g, u).flags |= 256), (u = pc(g, u, !1)), u !== 2)) {
                if (rc && !S) {
                  ((g.errorRecoveryDisabledLanes |= o), (qa |= o), (l = 4));
                  break t;
                }
                ((o = Ce),
                  (Ce = l),
                  o !== null &&
                    (Ce === null ? (Ce = o) : Ce.push.apply(Ce, o)));
              }
              l = u;
            }
            if (((o = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          (Al(t, 0), sa(t, e, 0, !0));
          break;
        }
        t: {
          switch (((a = t), (o = l), o)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              sa(a, e, Ue, !aa);
              break t;
            case 2:
              Ce = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && ((l = Bo + 300 - pe()), 10 < l)) {
            if ((sa(a, e, Ue, !aa), ft(a, 0, !0) !== 0)) break t;
            ((Un = e),
              (a.timeoutHandle = Km(
                vm.bind(
                  null,
                  a,
                  n,
                  Ce,
                  Yo,
                  uc,
                  e,
                  Ue,
                  qa,
                  El,
                  aa,
                  o,
                  "Throttled",
                  -0,
                  0,
                ),
                l,
              )));
            break t;
          }
          vm(a, n, Ce, Yo, uc, e, Ue, qa, El, aa, o, null, -0, 0);
        }
      }
      break;
    } while (!0);
    fn(t);
  }
  function vm(t, e, n, a, l, o, u, g, S, _, B, V, M, D) {
    if (
      ((t.timeoutHandle = -1),
      (V = e.subtreeFlags),
      V & 8192 || (V & 16785408) === 16785408)
    ) {
      ((V = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Sn,
      }),
        cm(e, o, V));
      var tt =
        (o & 62914560) === o ? Bo - pe() : (o & 4194048) === o ? mm - pe() : 0;
      if (((tt = qy(V, tt)), tt !== null)) {
        ((Un = o),
          (t.cancelPendingCommit = tt(
            Am.bind(null, t, e, o, n, a, l, u, g, S, B, V, null, M, D),
          )),
          sa(t, o, u, !_));
        return;
      }
    }
    Am(t, e, o, n, a, l, u, g, S);
  }
  function ny(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var a = 0; a < n.length; a++) {
          var l = n[a],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!_e(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function sa(t, e, n, a) {
    ((e &= ~cc),
      (e &= ~qa),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      a && (t.warmLanes |= e),
      (a = t.expirationTimes));
    for (var l = e; 0 < l; ) {
      var o = 31 - ue(l),
        u = 1 << o;
      ((a[o] = -1), (l &= ~u));
    }
    n !== 0 && Ea(t, n, e);
  }
  function qo() {
    return (_t & 6) === 0 ? (Ci(0), !1) : !0;
  }
  function hc() {
    if (Et !== null) {
      if (Mt === 0) var t = Et.return;
      else ((t = Et), (An = _a = null), zr(t), (pl = null), (ci = 0), (t = Et));
      for (; t !== null; ) (Jd(t.alternate, t), (t = t.return));
      Et = null;
    }
  }
  function Al(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), wy(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (Un = 0),
      hc(),
      (Bt = t),
      (Et = n = En(t.current, null)),
      (At = e),
      (Mt = 0),
      (He = null),
      (aa = !1),
      (wl = qt(t, e)),
      (rc = !1),
      (El = Ue = cc = qa = la = Xt = 0),
      (Ce = Ai = null),
      (uc = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var a = t.entangledLanes;
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var l = 31 - ue(a),
          o = 1 << l;
        ((e |= t[l]), (a &= ~o));
      }
    return ((Hn = e), oo(), n);
  }
  function ym(t, e) {
    ((gt = null),
      (A.H = vi),
      e === hl || e === po
        ? ((e = Df()), (Mt = 3))
        : e === yr
          ? ((e = Df()), (Mt = 4))
          : (Mt =
              e === Zr
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (He = e),
      Et === null && ((Xt = 1), Ro(t, Xe(e, t.current))));
  }
  function bm() {
    var t = je.current;
    return t === null
      ? !0
      : (At & 4194048) === At
        ? Je === null
        : (At & 62914560) === At || (At & 536870912) !== 0
          ? t === Je
          : !1;
  }
  function xm() {
    var t = A.H;
    return ((A.H = vi), t === null ? vi : t);
  }
  function Sm() {
    var t = A.A;
    return ((A.A = ty), t);
  }
  function ko() {
    ((Xt = 4),
      aa || ((At & 4194048) !== At && je.current !== null) || (wl = !0),
      ((la & 134217727) === 0 && (qa & 134217727) === 0) ||
        Bt === null ||
        sa(Bt, At, Ue, !1));
  }
  function pc(t, e, n) {
    var a = _t;
    _t |= 2;
    var l = xm(),
      o = Sm();
    ((Bt !== t || At !== e) && ((Yo = null), Al(t, e)), (e = !1));
    var u = Xt;
    t: do
      try {
        if (Mt !== 0 && Et !== null) {
          var g = Et,
            S = He;
          switch (Mt) {
            case 8:
              (hc(), (u = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              je.current === null && (e = !0);
              var _ = Mt;
              if (((Mt = 0), (He = null), Nl(t, g, S, _), n && wl)) {
                u = 0;
                break t;
              }
              break;
            default:
              ((_ = Mt), (Mt = 0), (He = null), Nl(t, g, S, _));
          }
        }
        (ay(), (u = Xt));
        break;
      } catch (B) {
        ym(t, B);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (An = _a = null),
      (_t = a),
      (A.H = l),
      (A.A = o),
      Et === null && ((Bt = null), (At = 0), oo()),
      u
    );
  }
  function ay() {
    for (; Et !== null; ) wm(Et);
  }
  function ly(t, e) {
    var n = _t;
    _t |= 2;
    var a = xm(),
      l = Sm();
    Bt !== t || At !== e
      ? ((Yo = null), (Lo = pe() + 500), Al(t, e))
      : (wl = qt(t, e));
    t: do
      try {
        if (Mt !== 0 && Et !== null) {
          e = Et;
          var o = He;
          e: switch (Mt) {
            case 1:
              ((Mt = 0), (He = null), Nl(t, e, o, 1));
              break;
            case 2:
            case 9:
              if (Mf(o)) {
                ((Mt = 0), (He = null), Em(e));
                break;
              }
              ((e = function () {
                ((Mt !== 2 && Mt !== 9) || Bt !== t || (Mt = 7), fn(t));
              }),
                o.then(e, e));
              break t;
            case 3:
              Mt = 7;
              break t;
            case 4:
              Mt = 5;
              break t;
            case 7:
              Mf(o)
                ? ((Mt = 0), (He = null), Em(e))
                : ((Mt = 0), (He = null), Nl(t, e, o, 7));
              break;
            case 5:
              var u = null;
              switch (Et.tag) {
                case 26:
                  u = Et.memoizedState;
                case 5:
                case 27:
                  var g = Et;
                  if (u ? rh(u) : g.stateNode.complete) {
                    ((Mt = 0), (He = null));
                    var S = g.sibling;
                    if (S !== null) Et = S;
                    else {
                      var _ = g.return;
                      _ !== null ? ((Et = _), Go(_)) : (Et = null);
                    }
                    break e;
                  }
              }
              ((Mt = 0), (He = null), Nl(t, e, o, 5));
              break;
            case 6:
              ((Mt = 0), (He = null), Nl(t, e, o, 6));
              break;
            case 8:
              (hc(), (Xt = 6));
              break t;
            default:
              throw Error(r(462));
          }
        }
        iy();
        break;
      } catch (B) {
        ym(t, B);
      }
    while (!0);
    return (
      (An = _a = null),
      (A.H = a),
      (A.A = l),
      (_t = n),
      Et !== null ? 0 : ((Bt = null), (At = 0), oo(), Xt)
    );
  }
  function iy() {
    for (; Et !== null && !he(); ) wm(Et);
  }
  function wm(t) {
    var e = Zd(t.alternate, t, Hn);
    ((t.memoizedProps = t.pendingProps), e === null ? Go(t) : (Et = e));
  }
  function Em(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = qd(n, e, e.pendingProps, e.type, void 0, At);
        break;
      case 11:
        e = qd(n, e, e.pendingProps, e.type.render, e.ref, At);
        break;
      case 5:
        zr(e);
      default:
        (Jd(n, e), (e = Et = Sf(e, Hn)), (e = Zd(n, e, Hn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Go(t) : (Et = e));
  }
  function Nl(t, e, n, a) {
    ((An = _a = null), zr(e), (pl = null), (ci = 0));
    var l = e.return;
    try {
      if (Kv(t, l, e, n, At)) {
        ((Xt = 1), Ro(t, Xe(n, t.current)), (Et = null));
        return;
      }
    } catch (o) {
      if (l !== null) throw ((Et = l), o);
      ((Xt = 1), Ro(t, Xe(n, t.current)), (Et = null));
      return;
    }
    e.flags & 32768
      ? (Ot || a === 1
          ? (t = !0)
          : wl || (At & 536870912) !== 0
            ? (t = !1)
            : ((aa = t = !0),
              (a === 2 || a === 9 || a === 3 || a === 6) &&
                ((a = je.current),
                a !== null && a.tag === 13 && (a.flags |= 16384))),
        Tm(e, t))
      : Go(e);
  }
  function Go(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Tm(e, aa);
        return;
      }
      t = e.return;
      var n = Fv(e.alternate, e, Hn);
      if (n !== null) {
        Et = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        Et = e;
        return;
      }
      Et = e = t;
    } while (e !== null);
    Xt === 0 && (Xt = 5);
  }
  function Tm(t, e) {
    do {
      var n = Wv(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (Et = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        Et = t;
        return;
      }
      Et = t = n;
    } while (t !== null);
    ((Xt = 6), (Et = null));
  }
  function Am(t, e, n, a, l, o, u, g, S) {
    t.cancelPendingCommit = null;
    do Vo();
    while (Wt !== 0);
    if ((_t & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      if (
        ((o = e.lanes | e.childLanes),
        (o |= ar),
        be(t, n, o, u, g, S),
        t === Bt && ((Et = Bt = null), (At = 0)),
        (Tl = e),
        (oa = t),
        (Un = n),
        (fc = o),
        (dc = l),
        (hm = a),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            cy(xa, function () {
              return (zm(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (a = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || a)
      ) {
        ((a = A.T), (A.T = null), (l = k.p), (k.p = 2), (u = _t), (_t |= 4));
        try {
          Pv(t, e, n);
        } finally {
          ((_t = u), (k.p = l), (A.T = a));
        }
      }
      ((Wt = 1), Nm(), Cm(), Om());
    }
  }
  function Nm() {
    if (Wt === 1) {
      Wt = 0;
      var t = oa,
        e = Tl,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = A.T), (A.T = null));
        var a = k.p;
        k.p = 2;
        var l = _t;
        _t |= 4;
        try {
          om(e, t);
          var o = Cc,
            u = df(t.containerInfo),
            g = o.focusedElem,
            S = o.selectionRange;
          if (
            u !== g &&
            g &&
            g.ownerDocument &&
            ff(g.ownerDocument.documentElement, g)
          ) {
            if (S !== null && Ps(g)) {
              var _ = S.start,
                B = S.end;
              if ((B === void 0 && (B = _), "selectionStart" in g))
                ((g.selectionStart = _),
                  (g.selectionEnd = Math.min(B, g.value.length)));
              else {
                var V = g.ownerDocument || document,
                  M = (V && V.defaultView) || window;
                if (M.getSelection) {
                  var D = M.getSelection(),
                    tt = g.textContent.length,
                    ct = Math.min(S.start, tt),
                    Ut = S.end === void 0 ? ct : Math.min(S.end, tt);
                  !D.extend && ct > Ut && ((u = Ut), (Ut = ct), (ct = u));
                  var C = uf(g, ct),
                    E = uf(g, Ut);
                  if (
                    C &&
                    E &&
                    (D.rangeCount !== 1 ||
                      D.anchorNode !== C.node ||
                      D.anchorOffset !== C.offset ||
                      D.focusNode !== E.node ||
                      D.focusOffset !== E.offset)
                  ) {
                    var z = V.createRange();
                    (z.setStart(C.node, C.offset),
                      D.removeAllRanges(),
                      ct > Ut
                        ? (D.addRange(z), D.extend(E.node, E.offset))
                        : (z.setEnd(E.node, E.offset), D.addRange(z)));
                  }
                }
              }
            }
            for (V = [], D = g; (D = D.parentNode); )
              D.nodeType === 1 &&
                V.push({ element: D, left: D.scrollLeft, top: D.scrollTop });
            for (
              typeof g.focus == "function" && g.focus(), g = 0;
              g < V.length;
              g++
            ) {
              var G = V[g];
              ((G.element.scrollLeft = G.left), (G.element.scrollTop = G.top));
            }
          }
          ((es = !!Nc), (Cc = Nc = null));
        } finally {
          ((_t = l), (k.p = a), (A.T = n));
        }
      }
      ((t.current = e), (Wt = 2));
    }
  }
  function Cm() {
    if (Wt === 2) {
      Wt = 0;
      var t = oa,
        e = Tl,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = A.T), (A.T = null));
        var a = k.p;
        k.p = 2;
        var l = _t;
        _t |= 4;
        try {
          em(t, e.alternate, e);
        } finally {
          ((_t = l), (k.p = a), (A.T = n));
        }
      }
      Wt = 3;
    }
  }
  function Om() {
    if (Wt === 4 || Wt === 3) {
      ((Wt = 0), Gn());
      var t = oa,
        e = Tl,
        n = Un,
        a = hm;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Wt = 5)
        : ((Wt = 0), (Tl = oa = null), Rm(t, t.pendingLanes));
      var l = t.pendingLanes;
      if (
        (l === 0 && (ia = null),
        Ie(n),
        (e = e.stateNode),
        ge && typeof ge.onCommitFiberRoot == "function")
      )
        try {
          ge.onCommitFiberRoot(Sa, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        ((e = A.T), (l = k.p), (k.p = 2), (A.T = null));
        try {
          for (var o = t.onRecoverableError, u = 0; u < a.length; u++) {
            var g = a[u];
            o(g.value, { componentStack: g.stack });
          }
        } finally {
          ((A.T = e), (k.p = l));
        }
      }
      ((Un & 3) !== 0 && Vo(),
        fn(t),
        (l = t.pendingLanes),
        (n & 261930) !== 0 && (l & 42) !== 0
          ? t === mc
            ? Ni++
            : ((Ni = 0), (mc = t))
          : (Ni = 0),
        Ci(0));
    }
  }
  function Rm(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), si(e)));
  }
  function Vo() {
    return (Nm(), Cm(), Om(), zm());
  }
  function zm() {
    if (Wt !== 5) return !1;
    var t = oa,
      e = fc;
    fc = 0;
    var n = Ie(Un),
      a = A.T,
      l = k.p;
    try {
      ((k.p = 32 > n ? 32 : n), (A.T = null), (n = dc), (dc = null));
      var o = oa,
        u = Un;
      if (((Wt = 0), (Tl = oa = null), (Un = 0), (_t & 6) !== 0))
        throw Error(r(331));
      var g = _t;
      if (
        ((_t |= 4),
        fm(o.current),
        rm(o, o.current, u, n),
        (_t = g),
        Ci(0, !1),
        ge && typeof ge.onPostCommitFiberRoot == "function")
      )
        try {
          ge.onPostCommitFiberRoot(Sa, o);
        } catch {}
      return !0;
    } finally {
      ((k.p = l), (A.T = a), Rm(t, e));
    }
  }
  function _m(t, e, n) {
    ((e = Xe(n, e)),
      (e = Qr(t.stateNode, e, 2)),
      (t = In(t, e, 2)),
      t !== null && (Gt(t, 2), fn(t)));
  }
  function jt(t, e, n) {
    if (t.tag === 3) _m(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          _m(e, t, n);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (ia === null || !ia.has(a)))
          ) {
            ((t = Xe(n, t)),
              (n = Md(2)),
              (a = In(e, n, 2)),
              a !== null && (jd(n, a, e, t), Gt(a, 2), fn(a)));
            break;
          }
        }
        e = e.return;
      }
  }
  function gc(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new ey();
      var l = new Set();
      a.set(e, l);
    } else ((l = a.get(e)), l === void 0 && ((l = new Set()), a.set(e, l)));
    l.has(n) ||
      ((rc = !0), l.add(n), (t = oy.bind(null, t, e, n)), e.then(t, t));
  }
  function oy(t, e, n) {
    var a = t.pingCache;
    (a !== null && a.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      Bt === t &&
        (At & n) === n &&
        (Xt === 4 || (Xt === 3 && (At & 62914560) === At && 300 > pe() - Bo)
          ? (_t & 2) === 0 && Al(t, 0)
          : (cc |= n),
        El === At && (El = 0)),
      fn(t));
  }
  function Mm(t, e) {
    (e === 0 && (e = fe()), (t = Oa(t, e)), t !== null && (Gt(t, e), fn(t)));
  }
  function sy(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), Mm(t, n));
  }
  function ry(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode,
          l = t.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (a !== null && a.delete(e), Mm(t, n));
  }
  function cy(t, e) {
    return Xl(t, e);
  }
  var Xo = null,
    Cl = null,
    vc = !1,
    Qo = !1,
    yc = !1,
    ra = 0;
  function fn(t) {
    (t !== Cl &&
      t.next === null &&
      (Cl === null ? (Xo = Cl = t) : (Cl = Cl.next = t)),
      (Qo = !0),
      vc || ((vc = !0), fy()));
  }
  function Ci(t, e) {
    if (!yc && Qo) {
      yc = !0;
      do
        for (var n = !1, a = Xo; a !== null; ) {
          if (t !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var o = 0;
            else {
              var u = a.suspendedLanes,
                g = a.pingedLanes;
              ((o = (1 << (31 - ue(42 | t) + 1)) - 1),
                (o &= l & ~(u & ~g)),
                (o = o & 201326741 ? (o & 201326741) | 1 : o ? o | 2 : 0));
            }
            o !== 0 && ((n = !0), Um(a, o));
          } else
            ((o = At),
              (o = ft(
                a,
                a === Bt ? o : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1,
              )),
              (o & 3) === 0 || qt(a, o) || ((n = !0), Um(a, o)));
          a = a.next;
        }
      while (n);
      yc = !1;
    }
  }
  function uy() {
    jm();
  }
  function jm() {
    Qo = vc = !1;
    var t = 0;
    ra !== 0 && Sy() && (t = ra);
    for (var e = pe(), n = null, a = Xo; a !== null; ) {
      var l = a.next,
        o = Dm(a, e);
      (o === 0
        ? ((a.next = null),
          n === null ? (Xo = l) : (n.next = l),
          l === null && (Cl = n))
        : ((n = a), (t !== 0 || (o & 3) !== 0) && (Qo = !0)),
        (a = l));
    }
    ((Wt !== 0 && Wt !== 5) || Ci(t), ra !== 0 && (ra = 0));
  }
  function Dm(t, e) {
    for (
      var n = t.suspendedLanes,
        a = t.pingedLanes,
        l = t.expirationTimes,
        o = t.pendingLanes & -62914561;
      0 < o;

    ) {
      var u = 31 - ue(o),
        g = 1 << u,
        S = l[u];
      (S === -1
        ? ((g & n) === 0 || (g & a) !== 0) && (l[u] = It(g, e))
        : S <= e && (t.expiredLanes |= g),
        (o &= ~g));
    }
    if (
      ((e = Bt),
      (n = At),
      (n = ft(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (a = t.callbackNode),
      n === 0 ||
        (t === e && (Mt === 2 || Mt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Ql(a),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || qt(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((a !== null && Ql(a), Ie(n))) {
        case 2:
        case 8:
          n = Ki;
          break;
        case 32:
          n = xa;
          break;
        case 268435456:
          n = bn;
          break;
        default:
          n = xa;
      }
      return (
        (a = Hm.bind(null, t)),
        (n = Xl(n, a)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      a !== null && a !== null && Ql(a),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Hm(t, e) {
    if (Wt !== 0 && Wt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (Vo() && t.callbackNode !== n) return null;
    var a = At;
    return (
      (a = ft(
        t,
        t === Bt ? a : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      a === 0
        ? null
        : (gm(t, a, e),
          Dm(t, pe()),
          t.callbackNode != null && t.callbackNode === n
            ? Hm.bind(null, t)
            : null)
    );
  }
  function Um(t, e) {
    if (Vo()) return null;
    gm(t, e, !0);
  }
  function fy() {
    Ey(function () {
      (_t & 6) !== 0 ? Xl(ba, uy) : jm();
    });
  }
  function bc() {
    if (ra === 0) {
      var t = dl;
      (t === 0 && ((t = Qa), (Qa <<= 1), (Qa & 261888) === 0 && (Qa = 256)),
        (ra = t));
    }
    return ra;
  }
  function Bm(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Pi("" + t);
  }
  function Lm(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function dy(t, e, n, a, l) {
    if (e === "submit" && n && n.stateNode === l) {
      var o = Bm((l[we] || null).action),
        u = a.submitter;
      u &&
        ((e = (e = u[we] || null)
          ? Bm(e.formAction)
          : u.getAttribute("formAction")),
        e !== null && ((o = e), (u = null)));
      var g = new no("action", "action", null, a, l);
      t.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (ra !== 0) {
                  var S = u ? Lm(l, u) : new FormData(l);
                  Yr(
                    n,
                    { pending: !0, data: S, method: l.method, action: o },
                    null,
                    S,
                  );
                }
              } else
                typeof o == "function" &&
                  (g.preventDefault(),
                  (S = u ? Lm(l, u) : new FormData(l)),
                  Yr(
                    n,
                    { pending: !0, data: S, method: l.method, action: o },
                    o,
                    S,
                  ));
            },
            currentTarget: l,
          },
        ],
      });
    }
  }
  for (var xc = 0; xc < nr.length; xc++) {
    var Sc = nr[xc],
      my = Sc.toLowerCase(),
      hy = Sc[0].toUpperCase() + Sc.slice(1);
    tn(my, "on" + hy);
  }
  (tn(pf, "onAnimationEnd"),
    tn(gf, "onAnimationIteration"),
    tn(vf, "onAnimationStart"),
    tn("dblclick", "onDoubleClick"),
    tn("focusin", "onFocus"),
    tn("focusout", "onBlur"),
    tn(zv, "onTransitionRun"),
    tn(_v, "onTransitionStart"),
    tn(Mv, "onTransitionCancel"),
    tn(yf, "onTransitionEnd"),
    Pa("onMouseEnter", ["mouseout", "mouseover"]),
    Pa("onMouseLeave", ["mouseout", "mouseover"]),
    Pa("onPointerEnter", ["pointerout", "pointerover"]),
    Pa("onPointerLeave", ["pointerout", "pointerover"]),
    Ta(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ta(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ta("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ta(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ta(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ta(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Oi =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    py = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Oi),
    );
  function Ym(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n],
        l = a.event;
      a = a.listeners;
      t: {
        var o = void 0;
        if (e)
          for (var u = a.length - 1; 0 <= u; u--) {
            var g = a[u],
              S = g.instance,
              _ = g.currentTarget;
            if (((g = g.listener), S !== o && l.isPropagationStopped()))
              break t;
            ((o = g), (l.currentTarget = _));
            try {
              o(l);
            } catch (B) {
              io(B);
            }
            ((l.currentTarget = null), (o = S));
          }
        else
          for (u = 0; u < a.length; u++) {
            if (
              ((g = a[u]),
              (S = g.instance),
              (_ = g.currentTarget),
              (g = g.listener),
              S !== o && l.isPropagationStopped())
            )
              break t;
            ((o = g), (l.currentTarget = _));
            try {
              o(l);
            } catch (B) {
              io(B);
            }
            ((l.currentTarget = null), (o = S));
          }
      }
    }
  }
  function Tt(t, e) {
    var n = e[Ds];
    n === void 0 && (n = e[Ds] = new Set());
    var a = t + "__bubble";
    n.has(a) || (qm(e, t, 2, !1), n.add(a));
  }
  function wc(t, e, n) {
    var a = 0;
    (e && (a |= 4), qm(n, t, a, e));
  }
  var Zo = "_reactListening" + Math.random().toString(36).slice(2);
  function Ec(t) {
    if (!t[Zo]) {
      ((t[Zo] = !0),
        Mu.forEach(function (n) {
          n !== "selectionchange" && (py.has(n) || wc(n, !1, t), wc(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Zo] || ((e[Zo] = !0), wc("selectionchange", !1, e));
    }
  }
  function qm(t, e, n, a) {
    switch (ph(e)) {
      case 2:
        var l = Vy;
        break;
      case 8:
        l = Xy;
        break;
      default:
        l = Lc;
    }
    ((n = l.bind(null, e, n, t)),
      (l = void 0),
      !Vs ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (l = !0),
      a
        ? l !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: l })
          : t.addEventListener(e, n, !0)
        : l !== void 0
          ? t.addEventListener(e, n, { passive: l })
          : t.addEventListener(e, n, !1));
  }
  function Tc(t, e, n, a, l) {
    var o = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (;;) {
        if (a === null) return;
        var u = a.tag;
        if (u === 3 || u === 4) {
          var g = a.stateNode.containerInfo;
          if (g === l) break;
          if (u === 4)
            for (u = a.return; u !== null; ) {
              var S = u.tag;
              if ((S === 3 || S === 4) && u.stateNode.containerInfo === l)
                return;
              u = u.return;
            }
          for (; g !== null; ) {
            if (((u = $a(g)), u === null)) return;
            if (((S = u.tag), S === 5 || S === 6 || S === 26 || S === 27)) {
              a = o = u;
              continue t;
            }
            g = g.parentNode;
          }
        }
        a = a.return;
      }
    Xu(function () {
      var _ = o,
        B = ks(n),
        V = [];
      t: {
        var M = bf.get(t);
        if (M !== void 0) {
          var D = no,
            tt = t;
          switch (t) {
            case "keypress":
              if (to(n) === 0) break t;
            case "keydown":
            case "keyup":
              D = rv;
              break;
            case "focusin":
              ((tt = "focus"), (D = Ks));
              break;
            case "focusout":
              ((tt = "blur"), (D = Ks));
              break;
            case "beforeblur":
            case "afterblur":
              D = Ks;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              D = Ku;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = Fg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = fv;
              break;
            case pf:
            case gf:
            case vf:
              D = Ig;
              break;
            case yf:
              D = mv;
              break;
            case "scroll":
            case "scrollend":
              D = Jg;
              break;
            case "wheel":
              D = pv;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = ev;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = $u;
              break;
            case "toggle":
            case "beforetoggle":
              D = vv;
          }
          var ct = (e & 4) !== 0,
            Ut = !ct && (t === "scroll" || t === "scrollend"),
            C = ct ? (M !== null ? M + "Capture" : null) : M;
          ct = [];
          for (var E = _, z; E !== null; ) {
            var G = E;
            if (
              ((z = G.stateNode),
              (G = G.tag),
              (G !== 5 && G !== 26 && G !== 27) ||
                z === null ||
                C === null ||
                ((G = Fl(E, C)), G != null && ct.push(Ri(E, G, z))),
              Ut)
            )
              break;
            E = E.return;
          }
          0 < ct.length &&
            ((M = new D(M, tt, null, n, B)),
            V.push({ event: M, listeners: ct }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((M = t === "mouseover" || t === "pointerover"),
            (D = t === "mouseout" || t === "pointerout"),
            M &&
              n !== qs &&
              (tt = n.relatedTarget || n.fromElement) &&
              ($a(tt) || tt[Ja]))
          )
            break t;
          if (
            (D || M) &&
            ((M =
              B.window === B
                ? B
                : (M = B.ownerDocument)
                  ? M.defaultView || M.parentWindow
                  : window),
            D
              ? ((tt = n.relatedTarget || n.toElement),
                (D = _),
                (tt = tt ? $a(tt) : null),
                tt !== null &&
                  ((Ut = d(tt)),
                  (ct = tt.tag),
                  tt !== Ut || (ct !== 5 && ct !== 27 && ct !== 6)) &&
                  (tt = null))
              : ((D = null), (tt = _)),
            D !== tt)
          ) {
            if (
              ((ct = Ku),
              (G = "onMouseLeave"),
              (C = "onMouseEnter"),
              (E = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((ct = $u),
                (G = "onPointerLeave"),
                (C = "onPointerEnter"),
                (E = "pointer")),
              (Ut = D == null ? M : $l(D)),
              (z = tt == null ? M : $l(tt)),
              (M = new ct(G, E + "leave", D, n, B)),
              (M.target = Ut),
              (M.relatedTarget = z),
              (G = null),
              $a(B) === _ &&
                ((ct = new ct(C, E + "enter", tt, n, B)),
                (ct.target = z),
                (ct.relatedTarget = Ut),
                (G = ct)),
              (Ut = G),
              D && tt)
            )
              e: {
                for (ct = gy, C = D, E = tt, z = 0, G = C; G; G = ct(G)) z++;
                G = 0;
                for (var st = E; st; st = ct(st)) G++;
                for (; 0 < z - G; ) ((C = ct(C)), z--);
                for (; 0 < G - z; ) ((E = ct(E)), G--);
                for (; z--; ) {
                  if (C === E || (E !== null && C === E.alternate)) {
                    ct = C;
                    break e;
                  }
                  ((C = ct(C)), (E = ct(E)));
                }
                ct = null;
              }
            else ct = null;
            (D !== null && km(V, M, D, ct, !1),
              tt !== null && Ut !== null && km(V, Ut, tt, ct, !0));
          }
        }
        t: {
          if (
            ((M = _ ? $l(_) : window),
            (D = M.nodeName && M.nodeName.toLowerCase()),
            D === "select" || (D === "input" && M.type === "file"))
          )
            var Rt = af;
          else if (ef(M))
            if (lf) Rt = Cv;
            else {
              Rt = Av;
              var lt = Tv;
            }
          else
            ((D = M.nodeName),
              !D ||
              D.toLowerCase() !== "input" ||
              (M.type !== "checkbox" && M.type !== "radio")
                ? _ && Ys(_.elementType) && (Rt = af)
                : (Rt = Nv));
          if (Rt && (Rt = Rt(t, _))) {
            nf(V, Rt, n, B);
            break t;
          }
          (lt && lt(t, M, _),
            t === "focusout" &&
              _ &&
              M.type === "number" &&
              _.memoizedProps.value != null &&
              Ls(M, "number", M.value));
        }
        switch (((lt = _ ? $l(_) : window), t)) {
          case "focusin":
            (ef(lt) || lt.contentEditable === "true") &&
              ((ll = lt), (Is = _), (li = null));
            break;
          case "focusout":
            li = Is = ll = null;
            break;
          case "mousedown":
            tr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((tr = !1), mf(V, n, B));
            break;
          case "selectionchange":
            if (Rv) break;
          case "keydown":
          case "keyup":
            mf(V, n, B);
        }
        var yt;
        if ($s)
          t: {
            switch (t) {
              case "compositionstart":
                var Nt = "onCompositionStart";
                break t;
              case "compositionend":
                Nt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Nt = "onCompositionUpdate";
                break t;
            }
            Nt = void 0;
          }
        else
          al
            ? Iu(t, n) && (Nt = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (Nt = "onCompositionStart");
        (Nt &&
          (Fu &&
            n.locale !== "ko" &&
            (al || Nt !== "onCompositionStart"
              ? Nt === "onCompositionEnd" && al && (yt = Qu())
              : ((Zn = B),
                (Xs = "value" in Zn ? Zn.value : Zn.textContent),
                (al = !0))),
          (lt = Ko(_, Nt)),
          0 < lt.length &&
            ((Nt = new Ju(Nt, t, null, n, B)),
            V.push({ event: Nt, listeners: lt }),
            yt
              ? (Nt.data = yt)
              : ((yt = tf(n)), yt !== null && (Nt.data = yt)))),
          (yt = bv ? xv(t, n) : Sv(t, n)) &&
            ((Nt = Ko(_, "onBeforeInput")),
            0 < Nt.length &&
              ((lt = new Ju("onBeforeInput", "beforeinput", null, n, B)),
              V.push({ event: lt, listeners: Nt }),
              (lt.data = yt))),
          dy(V, t, _, n, B));
      }
      Ym(V, e);
    });
  }
  function Ri(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function Ko(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var l = t,
        o = l.stateNode;
      if (
        ((l = l.tag),
        (l !== 5 && l !== 26 && l !== 27) ||
          o === null ||
          ((l = Fl(t, n)),
          l != null && a.unshift(Ri(t, l, o)),
          (l = Fl(t, e)),
          l != null && a.push(Ri(t, l, o))),
        t.tag === 3)
      )
        return a;
      t = t.return;
    }
    return [];
  }
  function gy(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function km(t, e, n, a, l) {
    for (var o = e._reactName, u = []; n !== null && n !== a; ) {
      var g = n,
        S = g.alternate,
        _ = g.stateNode;
      if (((g = g.tag), S !== null && S === a)) break;
      ((g !== 5 && g !== 26 && g !== 27) ||
        _ === null ||
        ((S = _),
        l
          ? ((_ = Fl(n, o)), _ != null && u.unshift(Ri(n, _, S)))
          : l || ((_ = Fl(n, o)), _ != null && u.push(Ri(n, _, S)))),
        (n = n.return));
    }
    u.length !== 0 && t.push({ event: e, listeners: u });
  }
  var vy = /\r\n?/g,
    yy = /\u0000|\uFFFD/g;
  function Gm(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        vy,
        `
`,
      )
      .replace(yy, "");
  }
  function Vm(t, e) {
    return ((e = Gm(e)), Gm(t) === e);
  }
  function Ht(t, e, n, a, l, o) {
    switch (n) {
      case "children":
        typeof a == "string"
          ? e === "body" || (e === "textarea" && a === "") || tl(t, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            e !== "body" &&
            tl(t, "" + a);
        break;
      case "className":
        Fi(t, "class", a);
        break;
      case "tabIndex":
        Fi(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Fi(t, n, a);
        break;
      case "style":
        Gu(t, a, o);
        break;
      case "data":
        if (e !== "object") {
          Fi(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        ((a = Pi("" + a)), t.setAttribute(n, a));
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof o == "function" &&
            (n === "formAction"
              ? (e !== "input" && Ht(t, e, "name", l.name, l, null),
                Ht(t, e, "formEncType", l.formEncType, l, null),
                Ht(t, e, "formMethod", l.formMethod, l, null),
                Ht(t, e, "formTarget", l.formTarget, l, null))
              : (Ht(t, e, "encType", l.encType, l, null),
                Ht(t, e, "method", l.method, l, null),
                Ht(t, e, "target", l.target, l, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((a = Pi("" + a)), t.setAttribute(n, a));
        break;
      case "onClick":
        a != null && (t.onclick = Sn);
        break;
      case "onScroll":
        a != null && Tt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && Tt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((n = a.__html), n != null)) {
            if (l.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = Pi("" + a)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "" + a)
          : t.removeAttribute(n);
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
        a && typeof a != "function" && typeof a != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0
          ? t.setAttribute(n, "")
          : a !== !1 &&
              a != null &&
              typeof a != "function" &&
              typeof a != "symbol"
            ? t.setAttribute(n, a)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? t.setAttribute(n, a)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? t.removeAttribute(n)
          : t.setAttribute(n, a);
        break;
      case "popover":
        (Tt("beforetoggle", t), Tt("toggle", t), $i(t, "popover", a));
        break;
      case "xlinkActuate":
        xn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        xn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        xn(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        xn(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        xn(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        xn(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        xn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        xn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        xn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        $i(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = Zg.get(n) || n), $i(t, n, a));
    }
  }
  function Ac(t, e, n, a, l, o) {
    switch (n) {
      case "style":
        Gu(t, a, o);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
          if (((n = a.__html), n != null)) {
            if (l.children != null) throw Error(r(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? tl(t, a)
          : (typeof a == "number" || typeof a == "bigint") && tl(t, "" + a);
        break;
      case "onScroll":
        a != null && Tt("scroll", t);
        break;
      case "onScrollEnd":
        a != null && Tt("scrollend", t);
        break;
      case "onClick":
        a != null && (t.onclick = Sn);
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
        if (!ju.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((l = n.endsWith("Capture")),
              (e = n.slice(2, l ? n.length - 7 : void 0)),
              (o = t[we] || null),
              (o = o != null ? o[n] : null),
              typeof o == "function" && t.removeEventListener(e, o, l),
              typeof a == "function")
            ) {
              (typeof o != "function" &&
                o !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, a, l));
              break t;
            }
            n in t
              ? (t[n] = a)
              : a === !0
                ? t.setAttribute(n, "")
                : $i(t, n, a);
          }
    }
  }
  function ce(t, e, n) {
    switch (e) {
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
        (Tt("error", t), Tt("load", t));
        var a = !1,
          l = !1,
          o;
        for (o in n)
          if (n.hasOwnProperty(o)) {
            var u = n[o];
            if (u != null)
              switch (o) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Ht(t, e, o, u, n, null);
              }
          }
        (l && Ht(t, e, "srcSet", n.srcSet, n, null),
          a && Ht(t, e, "src", n.src, n, null));
        return;
      case "input":
        Tt("invalid", t);
        var g = (o = u = l = null),
          S = null,
          _ = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var B = n[a];
            if (B != null)
              switch (a) {
                case "name":
                  l = B;
                  break;
                case "type":
                  u = B;
                  break;
                case "checked":
                  S = B;
                  break;
                case "defaultChecked":
                  _ = B;
                  break;
                case "value":
                  o = B;
                  break;
                case "defaultValue":
                  g = B;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (B != null) throw Error(r(137, e));
                  break;
                default:
                  Ht(t, e, a, B, n, null);
              }
          }
        Lu(t, o, g, S, _, u, l, !1);
        return;
      case "select":
        (Tt("invalid", t), (a = u = o = null));
        for (l in n)
          if (n.hasOwnProperty(l) && ((g = n[l]), g != null))
            switch (l) {
              case "value":
                o = g;
                break;
              case "defaultValue":
                u = g;
                break;
              case "multiple":
                a = g;
              default:
                Ht(t, e, l, g, n, null);
            }
        ((e = o),
          (n = u),
          (t.multiple = !!a),
          e != null ? Ia(t, !!a, e, !1) : n != null && Ia(t, !!a, n, !0));
        return;
      case "textarea":
        (Tt("invalid", t), (o = l = a = null));
        for (u in n)
          if (n.hasOwnProperty(u) && ((g = n[u]), g != null))
            switch (u) {
              case "value":
                a = g;
                break;
              case "defaultValue":
                l = g;
                break;
              case "children":
                o = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(r(91));
                break;
              default:
                Ht(t, e, u, g, n, null);
            }
        qu(t, a, l, o);
        return;
      case "option":
        for (S in n)
          if (n.hasOwnProperty(S) && ((a = n[S]), a != null))
            switch (S) {
              case "selected":
                t.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                Ht(t, e, S, a, n, null);
            }
        return;
      case "dialog":
        (Tt("beforetoggle", t),
          Tt("toggle", t),
          Tt("cancel", t),
          Tt("close", t));
        break;
      case "iframe":
      case "object":
        Tt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Oi.length; a++) Tt(Oi[a], t);
        break;
      case "image":
        (Tt("error", t), Tt("load", t));
        break;
      case "details":
        Tt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (Tt("error", t), Tt("load", t));
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
        for (_ in n)
          if (n.hasOwnProperty(_) && ((a = n[_]), a != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Ht(t, e, _, a, n, null);
            }
        return;
      default:
        if (Ys(e)) {
          for (B in n)
            n.hasOwnProperty(B) &&
              ((a = n[B]), a !== void 0 && Ac(t, e, B, a, n, void 0));
          return;
        }
    }
    for (g in n)
      n.hasOwnProperty(g) && ((a = n[g]), a != null && Ht(t, e, g, a, n, null));
  }
  function by(t, e, n, a) {
    switch (e) {
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
        var l = null,
          o = null,
          u = null,
          g = null,
          S = null,
          _ = null,
          B = null;
        for (D in n) {
          var V = n[D];
          if (n.hasOwnProperty(D) && V != null)
            switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                S = V;
              default:
                a.hasOwnProperty(D) || Ht(t, e, D, null, a, V);
            }
        }
        for (var M in a) {
          var D = a[M];
          if (((V = n[M]), a.hasOwnProperty(M) && (D != null || V != null)))
            switch (M) {
              case "type":
                o = D;
                break;
              case "name":
                l = D;
                break;
              case "checked":
                _ = D;
                break;
              case "defaultChecked":
                B = D;
                break;
              case "value":
                u = D;
                break;
              case "defaultValue":
                g = D;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(r(137, e));
                break;
              default:
                D !== V && Ht(t, e, M, D, a, V);
            }
        }
        Bs(t, u, g, S, _, B, o, l);
        return;
      case "select":
        D = u = g = M = null;
        for (o in n)
          if (((S = n[o]), n.hasOwnProperty(o) && S != null))
            switch (o) {
              case "value":
                break;
              case "multiple":
                D = S;
              default:
                a.hasOwnProperty(o) || Ht(t, e, o, null, a, S);
            }
        for (l in a)
          if (
            ((o = a[l]),
            (S = n[l]),
            a.hasOwnProperty(l) && (o != null || S != null))
          )
            switch (l) {
              case "value":
                M = o;
                break;
              case "defaultValue":
                g = o;
                break;
              case "multiple":
                u = o;
              default:
                o !== S && Ht(t, e, l, o, a, S);
            }
        ((e = g),
          (n = u),
          (a = D),
          M != null
            ? Ia(t, !!n, M, !1)
            : !!a != !!n &&
              (e != null ? Ia(t, !!n, e, !0) : Ia(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        D = M = null;
        for (g in n)
          if (
            ((l = n[g]),
            n.hasOwnProperty(g) && l != null && !a.hasOwnProperty(g))
          )
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ht(t, e, g, null, a, l);
            }
        for (u in a)
          if (
            ((l = a[u]),
            (o = n[u]),
            a.hasOwnProperty(u) && (l != null || o != null))
          )
            switch (u) {
              case "value":
                M = l;
                break;
              case "defaultValue":
                D = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(r(91));
                break;
              default:
                l !== o && Ht(t, e, u, l, a, o);
            }
        Yu(t, M, D);
        return;
      case "option":
        for (var tt in n)
          if (
            ((M = n[tt]),
            n.hasOwnProperty(tt) && M != null && !a.hasOwnProperty(tt))
          )
            switch (tt) {
              case "selected":
                t.selected = !1;
                break;
              default:
                Ht(t, e, tt, null, a, M);
            }
        for (S in a)
          if (
            ((M = a[S]),
            (D = n[S]),
            a.hasOwnProperty(S) && M !== D && (M != null || D != null))
          )
            switch (S) {
              case "selected":
                t.selected =
                  M && typeof M != "function" && typeof M != "symbol";
                break;
              default:
                Ht(t, e, S, M, a, D);
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
        for (var ct in n)
          ((M = n[ct]),
            n.hasOwnProperty(ct) &&
              M != null &&
              !a.hasOwnProperty(ct) &&
              Ht(t, e, ct, null, a, M));
        for (_ in a)
          if (
            ((M = a[_]),
            (D = n[_]),
            a.hasOwnProperty(_) && M !== D && (M != null || D != null))
          )
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (M != null) throw Error(r(137, e));
                break;
              default:
                Ht(t, e, _, M, a, D);
            }
        return;
      default:
        if (Ys(e)) {
          for (var Ut in n)
            ((M = n[Ut]),
              n.hasOwnProperty(Ut) &&
                M !== void 0 &&
                !a.hasOwnProperty(Ut) &&
                Ac(t, e, Ut, void 0, a, M));
          for (B in a)
            ((M = a[B]),
              (D = n[B]),
              !a.hasOwnProperty(B) ||
                M === D ||
                (M === void 0 && D === void 0) ||
                Ac(t, e, B, M, a, D));
          return;
        }
    }
    for (var C in n)
      ((M = n[C]),
        n.hasOwnProperty(C) &&
          M != null &&
          !a.hasOwnProperty(C) &&
          Ht(t, e, C, null, a, M));
    for (V in a)
      ((M = a[V]),
        (D = n[V]),
        !a.hasOwnProperty(V) ||
          M === D ||
          (M == null && D == null) ||
          Ht(t, e, V, M, a, D));
  }
  function Xm(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function xy() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0;
        a < n.length;
        a++
      ) {
        var l = n[a],
          o = l.transferSize,
          u = l.initiatorType,
          g = l.duration;
        if (o && g && Xm(u)) {
          for (u = 0, g = l.responseEnd, a += 1; a < n.length; a++) {
            var S = n[a],
              _ = S.startTime;
            if (_ > g) break;
            var B = S.transferSize,
              V = S.initiatorType;
            B &&
              Xm(V) &&
              ((S = S.responseEnd), (u += B * (S < g ? 1 : (g - _) / (S - _))));
          }
          if ((--a, (e += (8 * (o + u)) / (l.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Nc = null,
    Cc = null;
  function Jo(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Qm(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Zm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Oc(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Rc = null;
  function Sy() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Rc
        ? !1
        : ((Rc = t), !0)
      : ((Rc = null), !1);
  }
  var Km = typeof setTimeout == "function" ? setTimeout : void 0,
    wy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Jm = typeof Promise == "function" ? Promise : void 0,
    Ey =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Jm < "u"
          ? function (t) {
              return Jm.resolve(null).then(t).catch(Ty);
            }
          : Km;
  function Ty(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function ca(t) {
    return t === "head";
  }
  function $m(t, e) {
    var n = e,
      a = 0;
    do {
      var l = n.nextSibling;
      if ((t.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$" || n === "/&")) {
          if (a === 0) {
            (t.removeChild(l), _l(e));
            return;
          }
          a--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          a++;
        else if (n === "html") zi(t.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = t.ownerDocument.head), zi(n));
          for (var o = n.firstChild; o; ) {
            var u = o.nextSibling,
              g = o.nodeName;
            (o[Jl] ||
              g === "SCRIPT" ||
              g === "STYLE" ||
              (g === "LINK" && o.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(o),
              (o = u));
          }
        } else n === "body" && zi(t.ownerDocument.body);
      n = l;
    } while (n);
    _l(e);
  }
  function Fm(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        a && a.nodeType === 8)
      )
        if (((n = a.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = a;
    } while (n);
  }
  function zc(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (zc(n), Hs(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function Ay(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var l = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (a) {
        if (!t[Jl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((o = t.getAttribute("rel")),
                o === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                o !== l.rel ||
                t.getAttribute("href") !==
                  (l.href == null || l.href === "" ? null : l.href) ||
                t.getAttribute("crossorigin") !==
                  (l.crossOrigin == null ? null : l.crossOrigin) ||
                t.getAttribute("title") !== (l.title == null ? null : l.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((o = t.getAttribute("src")),
                (o !== (l.src == null ? null : l.src) ||
                  t.getAttribute("type") !== (l.type == null ? null : l.type) ||
                  t.getAttribute("crossorigin") !==
                    (l.crossOrigin == null ? null : l.crossOrigin)) &&
                  o &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var o = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && t.getAttribute("name") === o) return t;
      } else return t;
      if (((t = $e(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Ny(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = $e(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function Wm(t, e) {
    for (; t.nodeType !== 8; )
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = $e(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function _c(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Mc(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function Cy(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var a = function () {
        (e(), n.removeEventListener("DOMContentLoaded", a));
      };
      (n.addEventListener("DOMContentLoaded", a), (t._reactRetry = a));
    }
  }
  function $e(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var jc = null;
  function Pm(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return $e(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Im(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function th(t, e, n) {
    switch (((e = Jo(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(r(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(r(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function zi(t) {
    for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
    Hs(t);
  }
  var Fe = new Map(),
    eh = new Set();
  function $o(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Bn = k.d;
  k.d = { f: Oy, r: Ry, D: zy, C: _y, L: My, m: jy, X: Hy, S: Dy, M: Uy };
  function Oy() {
    var t = Bn.f(),
      e = qo();
    return t || e;
  }
  function Ry(t) {
    var e = Fa(t);
    e !== null && e.tag === 5 && e.type === "form" ? yd(e) : Bn.r(t);
  }
  var Ol = typeof document > "u" ? null : document;
  function nh(t, e, n) {
    var a = Ol;
    if (a && typeof e == "string" && e) {
      var l = Ge(e);
      ((l = 'link[rel="' + t + '"][href="' + l + '"]'),
        typeof n == "string" && (l += '[crossorigin="' + n + '"]'),
        eh.has(l) ||
          (eh.add(l),
          (t = { rel: t, crossOrigin: n, href: e }),
          a.querySelector(l) === null &&
            ((e = a.createElement("link")),
            ce(e, "link", t),
            te(e),
            a.head.appendChild(e))));
    }
  }
  function zy(t) {
    (Bn.D(t), nh("dns-prefetch", t, null));
  }
  function _y(t, e) {
    (Bn.C(t, e), nh("preconnect", t, e));
  }
  function My(t, e, n) {
    Bn.L(t, e, n);
    var a = Ol;
    if (a && t && e) {
      var l = 'link[rel="preload"][as="' + Ge(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((l += '[imagesrcset="' + Ge(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (l += '[imagesizes="' + Ge(n.imageSizes) + '"]'))
        : (l += '[href="' + Ge(t) + '"]');
      var o = l;
      switch (e) {
        case "style":
          o = Rl(t);
          break;
        case "script":
          o = zl(t);
      }
      Fe.has(o) ||
        ((t = m(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        Fe.set(o, t),
        a.querySelector(l) !== null ||
          (e === "style" && a.querySelector(_i(o))) ||
          (e === "script" && a.querySelector(Mi(o))) ||
          ((e = a.createElement("link")),
          ce(e, "link", t),
          te(e),
          a.head.appendChild(e)));
    }
  }
  function jy(t, e) {
    Bn.m(t, e);
    var n = Ol;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script",
        l =
          'link[rel="modulepreload"][as="' + Ge(a) + '"][href="' + Ge(t) + '"]',
        o = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          o = zl(t);
      }
      if (
        !Fe.has(o) &&
        ((t = m({ rel: "modulepreload", href: t }, e)),
        Fe.set(o, t),
        n.querySelector(l) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Mi(o))) return;
        }
        ((a = n.createElement("link")),
          ce(a, "link", t),
          te(a),
          n.head.appendChild(a));
      }
    }
  }
  function Dy(t, e, n) {
    Bn.S(t, e, n);
    var a = Ol;
    if (a && t) {
      var l = Wa(a).hoistableStyles,
        o = Rl(t);
      e = e || "default";
      var u = l.get(o);
      if (!u) {
        var g = { loading: 0, preload: null };
        if ((u = a.querySelector(_i(o)))) g.loading = 5;
        else {
          ((t = m({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = Fe.get(o)) && Dc(t, n));
          var S = (u = a.createElement("link"));
          (te(S),
            ce(S, "link", t),
            (S._p = new Promise(function (_, B) {
              ((S.onload = _), (S.onerror = B));
            })),
            S.addEventListener("load", function () {
              g.loading |= 1;
            }),
            S.addEventListener("error", function () {
              g.loading |= 2;
            }),
            (g.loading |= 4),
            Fo(u, e, a));
        }
        ((u = { type: "stylesheet", instance: u, count: 1, state: g }),
          l.set(o, u));
      }
    }
  }
  function Hy(t, e) {
    Bn.X(t, e);
    var n = Ol;
    if (n && t) {
      var a = Wa(n).hoistableScripts,
        l = zl(t),
        o = a.get(l);
      o ||
        ((o = n.querySelector(Mi(l))),
        o ||
          ((t = m({ src: t, async: !0 }, e)),
          (e = Fe.get(l)) && Hc(t, e),
          (o = n.createElement("script")),
          te(o),
          ce(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        a.set(l, o));
    }
  }
  function Uy(t, e) {
    Bn.M(t, e);
    var n = Ol;
    if (n && t) {
      var a = Wa(n).hoistableScripts,
        l = zl(t),
        o = a.get(l);
      o ||
        ((o = n.querySelector(Mi(l))),
        o ||
          ((t = m({ src: t, async: !0, type: "module" }, e)),
          (e = Fe.get(l)) && Hc(t, e),
          (o = n.createElement("script")),
          te(o),
          ce(o, "link", t),
          n.head.appendChild(o)),
        (o = { type: "script", instance: o, count: 1, state: null }),
        a.set(l, o));
    }
  }
  function ah(t, e, n, a) {
    var l = (l = ot.current) ? $o(l) : null;
    if (!l) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = Rl(n.href)),
            (n = Wa(l).hoistableStyles),
            (a = n.get(e)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = Rl(n.href);
          var o = Wa(l).hoistableStyles,
            u = o.get(t);
          if (
            (u ||
              ((l = l.ownerDocument || l),
              (u = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              o.set(t, u),
              (o = l.querySelector(_i(t))) &&
                !o._p &&
                ((u.instance = o), (u.state.loading = 5)),
              Fe.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                Fe.set(t, n),
                o || By(l, t, n, u.state))),
            e && a === null)
          )
            throw Error(r(528, ""));
          return u;
        }
        if (e && a !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = zl(n)),
              (n = Wa(l).hoistableScripts),
              (a = n.get(e)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, t));
    }
  }
  function Rl(t) {
    return 'href="' + Ge(t) + '"';
  }
  function _i(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function lh(t) {
    return m({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function By(t, e, n, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (a.loading = 1)
      : ((e = t.createElement("link")),
        (a.preload = e),
        e.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        ce(e, "link", n),
        te(e),
        t.head.appendChild(e));
  }
  function zl(t) {
    return '[src="' + Ge(t) + '"]';
  }
  function Mi(t) {
    return "script[async]" + t;
  }
  function ih(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + Ge(n.href) + '"]');
          if (a) return ((e.instance = a), te(a), a);
          var l = m({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (t.ownerDocument || t).createElement("style")),
            te(a),
            ce(a, "style", l),
            Fo(a, n.precedence, t),
            (e.instance = a)
          );
        case "stylesheet":
          l = Rl(n.href);
          var o = t.querySelector(_i(l));
          if (o) return ((e.state.loading |= 4), (e.instance = o), te(o), o);
          ((a = lh(n)),
            (l = Fe.get(l)) && Dc(a, l),
            (o = (t.ownerDocument || t).createElement("link")),
            te(o));
          var u = o;
          return (
            (u._p = new Promise(function (g, S) {
              ((u.onload = g), (u.onerror = S));
            })),
            ce(o, "link", a),
            (e.state.loading |= 4),
            Fo(o, n.precedence, t),
            (e.instance = o)
          );
        case "script":
          return (
            (o = zl(n.src)),
            (l = t.querySelector(Mi(o)))
              ? ((e.instance = l), te(l), l)
              : ((a = n),
                (l = Fe.get(o)) && ((a = m({}, n)), Hc(a, l)),
                (t = t.ownerDocument || t),
                (l = t.createElement("script")),
                te(l),
                ce(l, "link", a),
                t.head.appendChild(l),
                (e.instance = l))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((a = e.instance), (e.state.loading |= 4), Fo(a, n.precedence, t));
    return e.instance;
  }
  function Fo(t, e, n) {
    for (
      var a = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        l = a.length ? a[a.length - 1] : null,
        o = l,
        u = 0;
      u < a.length;
      u++
    ) {
      var g = a[u];
      if (g.dataset.precedence === e) o = g;
      else if (o !== l) break;
    }
    o
      ? o.parentNode.insertBefore(t, o.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Dc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Hc(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Wo = null;
  function oh(t, e, n) {
    if (Wo === null) {
      var a = new Map(),
        l = (Wo = new Map());
      l.set(n, a);
    } else ((l = Wo), (a = l.get(n)), a || ((a = new Map()), l.set(n, a)));
    if (a.has(t)) return a;
    for (
      a.set(t, null), n = n.getElementsByTagName(t), l = 0;
      l < n.length;
      l++
    ) {
      var o = n[l];
      if (
        !(
          o[Jl] ||
          o[ie] ||
          (t === "link" && o.getAttribute("rel") === "stylesheet")
        ) &&
        o.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var u = o.getAttribute(e) || "";
        u = t + u;
        var g = a.get(u);
        g ? g.push(o) : a.set(u, [o]);
      }
    }
    return a;
  }
  function sh(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function Ly(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        switch (e.rel) {
          case "stylesheet":
            return (
              (t = e.disabled),
              typeof e.precedence == "string" && t == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function rh(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Yy(t, e, n, a) {
    if (
      n.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var l = Rl(a.href),
          o = e.querySelector(_i(l));
        if (o) {
          ((e = o._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Po.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = o),
            te(o));
          return;
        }
        ((o = e.ownerDocument || e),
          (a = lh(a)),
          (l = Fe.get(l)) && Dc(a, l),
          (o = o.createElement("link")),
          te(o));
        var u = o;
        ((u._p = new Promise(function (g, S) {
          ((u.onload = g), (u.onerror = S));
        })),
          ce(o, "link", a),
          (n.instance = o));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = Po.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n)));
    }
  }
  var Uc = 0;
  function qy(t, e) {
    return (
      t.stylesheets && t.count === 0 && ts(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var a = setTimeout(function () {
              if ((t.stylesheets && ts(t, t.stylesheets), t.unsuspend)) {
                var o = t.unsuspend;
                ((t.unsuspend = null), o());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Uc === 0 && (Uc = 62500 * xy());
            var l = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && ts(t, t.stylesheets), t.unsuspend))
                ) {
                  var o = t.unsuspend;
                  ((t.unsuspend = null), o());
                }
              },
              (t.imgBytes > Uc ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(a), clearTimeout(l));
              }
            );
          }
        : null
    );
  }
  function Po() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) ts(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Io = null;
  function ts(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Io = new Map()),
        e.forEach(ky, t),
        (Io = null),
        Po.call(t)));
  }
  function ky(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Io.get(t);
      if (n) var a = n.get(null);
      else {
        ((n = new Map()), Io.set(t, n));
        for (
          var l = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            o = 0;
          o < l.length;
          o++
        ) {
          var u = l[o];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") &&
            (n.set(u.dataset.precedence, u), (a = u));
        }
        a && n.set(null, a);
      }
      ((l = e.instance),
        (u = l.getAttribute("data-precedence")),
        (o = n.get(u) || a),
        o === a && n.set(null, l),
        n.set(u, l),
        this.count++,
        (a = Po.bind(this)),
        l.addEventListener("load", a),
        l.addEventListener("error", a),
        o
          ? o.parentNode.insertBefore(l, o.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(l, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var ji = {
    $$typeof: K,
    Provider: null,
    Consumer: null,
    _currentValue: j,
    _currentValue2: j,
    _threadCount: 0,
  };
  function Gy(t, e, n, a, l, o, u, g, S) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Xn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Xn(0)),
      (this.hiddenUpdates = Xn(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = l),
      (this.onCaughtError = o),
      (this.onRecoverableError = u),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = S),
      (this.incompleteTransitions = new Map()));
  }
  function ch(t, e, n, a, l, o, u, g, S, _, B, V) {
    return (
      (t = new Gy(t, e, n, u, S, _, B, V, g)),
      (e = 1),
      o === !0 && (e |= 24),
      (o = Me(3, null, null, e)),
      (t.current = o),
      (o.stateNode = t),
      (e = pr()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (o.memoizedState = { element: a, isDehydrated: n, cache: e }),
      br(o),
      t
    );
  }
  function uh(t) {
    return t ? ((t = sl), t) : sl;
  }
  function fh(t, e, n, a, l, o) {
    ((l = uh(l)),
      a.context === null ? (a.context = l) : (a.pendingContext = l),
      (a = Pn(e)),
      (a.payload = { element: n }),
      (o = o === void 0 ? null : o),
      o !== null && (a.callback = o),
      (n = In(t, a, e)),
      n !== null && (Oe(n, t, e), fi(n, t, e)));
  }
  function dh(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Bc(t, e) {
    (dh(t, e), (t = t.alternate) && dh(t, e));
  }
  function mh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Oa(t, 67108864);
      (e !== null && Oe(e, t, 67108864), Bc(t, 67108864));
    }
  }
  function hh(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Be();
      e = Ka(e);
      var n = Oa(t, e);
      (n !== null && Oe(n, t, e), Bc(t, e));
    }
  }
  var es = !0;
  function Vy(t, e, n, a) {
    var l = A.T;
    A.T = null;
    var o = k.p;
    try {
      ((k.p = 2), Lc(t, e, n, a));
    } finally {
      ((k.p = o), (A.T = l));
    }
  }
  function Xy(t, e, n, a) {
    var l = A.T;
    A.T = null;
    var o = k.p;
    try {
      ((k.p = 8), Lc(t, e, n, a));
    } finally {
      ((k.p = o), (A.T = l));
    }
  }
  function Lc(t, e, n, a) {
    if (es) {
      var l = Yc(a);
      if (l === null) (Tc(t, e, a, ns, n), gh(t, a));
      else if (Zy(l, t, e, n, a)) a.stopPropagation();
      else if ((gh(t, a), e & 4 && -1 < Qy.indexOf(t))) {
        for (; l !== null; ) {
          var o = Fa(l);
          if (o !== null)
            switch (o.tag) {
              case 3:
                if (((o = o.stateNode), o.current.memoizedState.isDehydrated)) {
                  var u = sn(o.pendingLanes);
                  if (u !== 0) {
                    var g = o;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; u; ) {
                      var S = 1 << (31 - ue(u));
                      ((g.entanglements[1] |= S), (u &= ~S));
                    }
                    (fn(o), (_t & 6) === 0 && ((Lo = pe() + 500), Ci(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((g = Oa(o, 2)), g !== null && Oe(g, o, 2), qo(), Bc(o, 2));
            }
          if (((o = Yc(a)), o === null && Tc(t, e, a, ns, n), o === l)) break;
          l = o;
        }
        l !== null && a.stopPropagation();
      } else Tc(t, e, a, null, n);
    }
  }
  function Yc(t) {
    return ((t = ks(t)), qc(t));
  }
  var ns = null;
  function qc(t) {
    if (((ns = null), (t = $a(t)), t !== null)) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = p(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = x(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((ns = t), null);
  }
  function ph(t) {
    switch (t) {
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
        switch (_s()) {
          case ba:
            return 2;
          case Ki:
            return 8;
          case xa:
          case Zl:
            return 32;
          case bn:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var kc = !1,
    ua = null,
    fa = null,
    da = null,
    Di = new Map(),
    Hi = new Map(),
    ma = [],
    Qy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function gh(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        ua = null;
        break;
      case "dragenter":
      case "dragleave":
        fa = null;
        break;
      case "mouseover":
      case "mouseout":
        da = null;
        break;
      case "pointerover":
      case "pointerout":
        Di.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hi.delete(e.pointerId);
    }
  }
  function Ui(t, e, n, a, l, o) {
    return t === null || t.nativeEvent !== o
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: a,
          nativeEvent: o,
          targetContainers: [l],
        }),
        e !== null && ((e = Fa(e)), e !== null && mh(e)),
        t)
      : ((t.eventSystemFlags |= a),
        (e = t.targetContainers),
        l !== null && e.indexOf(l) === -1 && e.push(l),
        t);
  }
  function Zy(t, e, n, a, l) {
    switch (e) {
      case "focusin":
        return ((ua = Ui(ua, t, e, n, a, l)), !0);
      case "dragenter":
        return ((fa = Ui(fa, t, e, n, a, l)), !0);
      case "mouseover":
        return ((da = Ui(da, t, e, n, a, l)), !0);
      case "pointerover":
        var o = l.pointerId;
        return (Di.set(o, Ui(Di.get(o) || null, t, e, n, a, l)), !0);
      case "gotpointercapture":
        return (
          (o = l.pointerId),
          Hi.set(o, Ui(Hi.get(o) || null, t, e, n, a, l)),
          !0
        );
    }
    return !1;
  }
  function vh(t) {
    var e = $a(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = p(n)), e !== null)) {
            ((t.blockedOn = e),
              zu(t.priority, function () {
                hh(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = x(n)), e !== null)) {
            ((t.blockedOn = e),
              zu(t.priority, function () {
                hh(n);
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function as(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Yc(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(n.type, n);
        ((qs = a), n.target.dispatchEvent(a), (qs = null));
      } else return ((e = Fa(n)), e !== null && mh(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function yh(t, e, n) {
    as(t) && n.delete(e);
  }
  function Ky() {
    ((kc = !1),
      ua !== null && as(ua) && (ua = null),
      fa !== null && as(fa) && (fa = null),
      da !== null && as(da) && (da = null),
      Di.forEach(yh),
      Hi.forEach(yh));
  }
  function ls(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      kc ||
        ((kc = !0),
        i.unstable_scheduleCallback(i.unstable_NormalPriority, Ky)));
  }
  var is = null;
  function bh(t) {
    is !== t &&
      ((is = t),
      i.unstable_scheduleCallback(i.unstable_NormalPriority, function () {
        is === t && (is = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            a = t[e + 1],
            l = t[e + 2];
          if (typeof a != "function") {
            if (qc(a || n) === null) continue;
            break;
          }
          var o = Fa(n);
          o !== null &&
            (t.splice(e, 3),
            (e -= 3),
            Yr(o, { pending: !0, data: l, method: n.method, action: a }, a, l));
        }
      }));
  }
  function _l(t) {
    function e(S) {
      return ls(S, t);
    }
    (ua !== null && ls(ua, t),
      fa !== null && ls(fa, t),
      da !== null && ls(da, t),
      Di.forEach(e),
      Hi.forEach(e));
    for (var n = 0; n < ma.length; n++) {
      var a = ma[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < ma.length && ((n = ma[0]), n.blockedOn === null); )
      (vh(n), n.blockedOn === null && ma.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (a = 0; a < n.length; a += 3) {
        var l = n[a],
          o = n[a + 1],
          u = l[we] || null;
        if (typeof o == "function") u || bh(n);
        else if (u) {
          var g = null;
          if (o && o.hasAttribute("formAction")) {
            if (((l = o), (u = o[we] || null))) g = u.formAction;
            else if (qc(l) !== null) continue;
          } else g = u.action;
          (typeof g == "function" ? (n[a + 1] = g) : (n.splice(a, 3), (a -= 3)),
            bh(n));
        }
      }
  }
  function xh() {
    function t(o) {
      o.canIntercept &&
        o.info === "react-transition" &&
        o.intercept({
          handler: function () {
            return new Promise(function (u) {
              return (l = u);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (l !== null && (l(), (l = null)), a || setTimeout(n, 20));
    }
    function n() {
      if (!a && !navigation.transition) {
        var o = navigation.currentEntry;
        o &&
          o.url != null &&
          navigation.navigate(o.url, {
            state: o.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var a = !1,
        l = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          ((a = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            l !== null && (l(), (l = null)));
        }
      );
    }
  }
  function Gc(t) {
    this._internalRoot = t;
  }
  ((os.prototype.render = Gc.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var n = e.current,
        a = Be();
      fh(n, a, t, e, null, null);
    }),
    (os.prototype.unmount = Gc.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (fh(t.current, 2, null, t, null, null), qo(), (e[Ja] = null));
        }
      }));
  function os(t) {
    this._internalRoot = t;
  }
  os.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = js();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < ma.length && e !== 0 && e < ma[n].priority; n++);
      (ma.splice(n, 0, t), n === 0 && vh(t));
    }
  };
  var Sh = s.version;
  if (Sh !== "19.2.1") throw Error(r(527, Sh, "19.2.1"));
  k.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(r(188))
        : ((t = Object.keys(t).join(",")), Error(r(268, t)));
    return (
      (t = h(e)),
      (t = t !== null ? b(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var Jy = {
    bundleType: 0,
    version: "19.2.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: A,
    reconcilerVersion: "19.2.1",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ss.isDisabled && ss.supportsFiber)
      try {
        ((Sa = ss.inject(Jy)), (ge = ss));
      } catch {}
  }
  return (
    (Li.createRoot = function (t, e) {
      if (!f(t)) throw Error(r(299));
      var n = !1,
        a = "",
        l = Od,
        o = Rd,
        u = zd;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (a = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (l = e.onUncaughtError),
          e.onCaughtError !== void 0 && (o = e.onCaughtError),
          e.onRecoverableError !== void 0 && (u = e.onRecoverableError)),
        (e = ch(t, 1, !1, null, null, n, a, null, l, o, u, xh)),
        (t[Ja] = e.current),
        Ec(t),
        new Gc(e)
      );
    }),
    (Li.hydrateRoot = function (t, e, n) {
      if (!f(t)) throw Error(r(299));
      var a = !1,
        l = "",
        o = Od,
        u = Rd,
        g = zd,
        S = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (a = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (o = n.onUncaughtError),
          n.onCaughtError !== void 0 && (u = n.onCaughtError),
          n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
          n.formState !== void 0 && (S = n.formState)),
        (e = ch(t, 1, !0, e, n ?? null, a, l, S, o, u, g, xh)),
        (e.context = uh(null)),
        (n = e.current),
        (a = Be()),
        (a = Ka(a)),
        (l = Pn(a)),
        (l.callback = null),
        In(n, l, a),
        (n = a),
        (e.current.lanes = n),
        Gt(e, n),
        fn(e),
        (t[Ja] = e.current),
        Ec(t),
        new os(e)
      );
    }),
    (Li.version = "19.2.1"),
    Li
  );
}
var _h;
function l0() {
  if (_h) return Xc.exports;
  _h = 1;
  function i() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return (i(), (Xc.exports = a0()), Xc.exports);
}
var i0 = l0(),
  T = ws();
const J = up(T),
  hu = Fy({ __proto__: null, default: J }, [T]);
var o0 = (i, s, c, r, f, d, p, x) => {
    let v = document.documentElement,
      h = ["light", "dark"];
    function b(O) {
      ((Array.isArray(i) ? i : [i]).forEach((R) => {
        let H = R === "class",
          U = H && d ? f.map((q) => d[q] || q) : f;
        H
          ? (v.classList.remove(...U), v.classList.add(d && d[O] ? d[O] : O))
          : v.setAttribute(R, O);
      }),
        m(O));
    }
    function m(O) {
      x && h.includes(O) && (v.style.colorScheme = O);
    }
    function N() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    if (r) b(r);
    else
      try {
        let O = localStorage.getItem(s) || c,
          R = p && O === "system" ? N() : O;
        b(R);
      } catch {}
  },
  s0 = T.createContext(void 0),
  r0 = { setTheme: (i) => {}, themes: [] },
  c0 = () => {
    var i;
    return (i = T.useContext(s0)) != null ? i : r0;
  };
T.memo(
  ({
    forcedTheme: i,
    storageKey: s,
    attribute: c,
    enableSystem: r,
    enableColorScheme: f,
    defaultTheme: d,
    value: p,
    themes: x,
    nonce: v,
    scriptProps: h,
  }) => {
    let b = JSON.stringify([c, s, d, i, x, p, r, f]).slice(1, -1);
    return T.createElement("script", {
      ...h,
      suppressHydrationWarning: !0,
      nonce: typeof window > "u" ? v : "",
      dangerouslySetInnerHTML: { __html: `(${o0.toString()})(${b})` },
    });
  },
);
var pu = fp();
const u0 = up(pu);
function f0(i) {
  if (typeof document > "u") return;
  let s = document.head || document.getElementsByTagName("head")[0],
    c = document.createElement("style");
  ((c.type = "text/css"),
    s.appendChild(c),
    c.styleSheet
      ? (c.styleSheet.cssText = i)
      : c.appendChild(document.createTextNode(i)));
}
const d0 = (i) => {
    switch (i) {
      case "success":
        return p0;
      case "info":
        return v0;
      case "warning":
        return g0;
      case "error":
        return y0;
      default:
        return null;
    }
  },
  m0 = Array(12).fill(0),
  h0 = ({ visible: i, className: s }) =>
    J.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", s].filter(Boolean).join(" "),
        "data-visible": i,
      },
      J.createElement(
        "div",
        { className: "sonner-spinner" },
        m0.map((c, r) =>
          J.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          }),
        ),
      ),
    ),
  p0 = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    J.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    }),
  ),
  g0 = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    J.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    }),
  ),
  v0 = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    J.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    }),
  ),
  y0 = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    J.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    }),
  ),
  b0 = J.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    J.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    J.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }),
  ),
  x0 = () => {
    const [i, s] = J.useState(document.hidden);
    return (
      J.useEffect(() => {
        const c = () => {
          s(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", c),
          () => window.removeEventListener("visibilitychange", c)
        );
      }, []),
      i
    );
  };
let au = 1;
class S0 {
  constructor() {
    ((this.subscribe = (s) => (
      this.subscribers.push(s),
      () => {
        const c = this.subscribers.indexOf(s);
        this.subscribers.splice(c, 1);
      }
    )),
      (this.publish = (s) => {
        this.subscribers.forEach((c) => c(s));
      }),
      (this.addToast = (s) => {
        (this.publish(s), (this.toasts = [...this.toasts, s]));
      }),
      (this.create = (s) => {
        var c;
        const { message: r, ...f } = s,
          d =
            typeof s?.id == "number" ||
            ((c = s.id) == null ? void 0 : c.length) > 0
              ? s.id
              : au++,
          p = this.toasts.find((v) => v.id === d),
          x = s.dismissible === void 0 ? !0 : s.dismissible;
        return (
          this.dismissedToasts.has(d) && this.dismissedToasts.delete(d),
          p
            ? (this.toasts = this.toasts.map((v) =>
                v.id === d
                  ? (this.publish({ ...v, ...s, id: d, title: r }),
                    { ...v, ...s, id: d, dismissible: x, title: r })
                  : v,
              ))
            : this.addToast({ title: r, ...f, dismissible: x, id: d }),
          d
        );
      }),
      (this.dismiss = (s) => (
        s
          ? (this.dismissedToasts.add(s),
            requestAnimationFrame(() =>
              this.subscribers.forEach((c) => c({ id: s, dismiss: !0 })),
            ))
          : this.toasts.forEach((c) => {
              this.subscribers.forEach((r) => r({ id: c.id, dismiss: !0 }));
            }),
        s
      )),
      (this.message = (s, c) => this.create({ ...c, message: s })),
      (this.error = (s, c) => this.create({ ...c, message: s, type: "error" })),
      (this.success = (s, c) =>
        this.create({ ...c, type: "success", message: s })),
      (this.info = (s, c) => this.create({ ...c, type: "info", message: s })),
      (this.warning = (s, c) =>
        this.create({ ...c, type: "warning", message: s })),
      (this.loading = (s, c) =>
        this.create({ ...c, type: "loading", message: s })),
      (this.promise = (s, c) => {
        if (!c) return;
        let r;
        c.loading !== void 0 &&
          (r = this.create({
            ...c,
            promise: s,
            type: "loading",
            message: c.loading,
            description:
              typeof c.description != "function" ? c.description : void 0,
          }));
        const f = Promise.resolve(s instanceof Function ? s() : s);
        let d = r !== void 0,
          p;
        const x = f
            .then(async (h) => {
              if (((p = ["resolve", h]), J.isValidElement(h)))
                ((d = !1), this.create({ id: r, type: "default", message: h }));
              else if (E0(h) && !h.ok) {
                d = !1;
                const m =
                    typeof c.error == "function"
                      ? await c.error(`HTTP error! status: ${h.status}`)
                      : c.error,
                  N =
                    typeof c.description == "function"
                      ? await c.description(`HTTP error! status: ${h.status}`)
                      : c.description,
                  R =
                    typeof m == "object" && !J.isValidElement(m)
                      ? m
                      : { message: m };
                this.create({ id: r, type: "error", description: N, ...R });
              } else if (h instanceof Error) {
                d = !1;
                const m =
                    typeof c.error == "function" ? await c.error(h) : c.error,
                  N =
                    typeof c.description == "function"
                      ? await c.description(h)
                      : c.description,
                  R =
                    typeof m == "object" && !J.isValidElement(m)
                      ? m
                      : { message: m };
                this.create({ id: r, type: "error", description: N, ...R });
              } else if (c.success !== void 0) {
                d = !1;
                const m =
                    typeof c.success == "function"
                      ? await c.success(h)
                      : c.success,
                  N =
                    typeof c.description == "function"
                      ? await c.description(h)
                      : c.description,
                  R =
                    typeof m == "object" && !J.isValidElement(m)
                      ? m
                      : { message: m };
                this.create({ id: r, type: "success", description: N, ...R });
              }
            })
            .catch(async (h) => {
              if (((p = ["reject", h]), c.error !== void 0)) {
                d = !1;
                const b =
                    typeof c.error == "function" ? await c.error(h) : c.error,
                  m =
                    typeof c.description == "function"
                      ? await c.description(h)
                      : c.description,
                  O =
                    typeof b == "object" && !J.isValidElement(b)
                      ? b
                      : { message: b };
                this.create({ id: r, type: "error", description: m, ...O });
              }
            })
            .finally(() => {
              (d && (this.dismiss(r), (r = void 0)),
                c.finally == null || c.finally.call(c));
            }),
          v = () =>
            new Promise((h, b) =>
              x.then(() => (p[0] === "reject" ? b(p[1]) : h(p[1]))).catch(b),
            );
        return typeof r != "string" && typeof r != "number"
          ? { unwrap: v }
          : Object.assign(r, { unwrap: v });
      }),
      (this.custom = (s, c) => {
        const r = c?.id || au++;
        return (this.create({ jsx: s(r), id: r, ...c }), r);
      }),
      (this.getActiveToasts = () =>
        this.toasts.filter((s) => !this.dismissedToasts.has(s.id))),
      (this.subscribers = []),
      (this.toasts = []),
      (this.dismissedToasts = new Set()));
  }
}
const Re = new S0(),
  w0 = (i, s) => {
    const c = s?.id || au++;
    return (Re.addToast({ title: i, ...s, id: c }), c);
  },
  E0 = (i) =>
    i &&
    typeof i == "object" &&
    "ok" in i &&
    typeof i.ok == "boolean" &&
    "status" in i &&
    typeof i.status == "number",
  T0 = w0,
  A0 = () => Re.toasts,
  N0 = () => Re.getActiveToasts();
Object.assign(
  T0,
  {
    success: Re.success,
    info: Re.info,
    warning: Re.warning,
    error: Re.error,
    custom: Re.custom,
    message: Re.message,
    promise: Re.promise,
    dismiss: Re.dismiss,
    loading: Re.loading,
  },
  { getHistory: A0, getToasts: N0 },
);
f0(
  "[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}",
);
function rs(i) {
  return i.label !== void 0;
}
const C0 = 3,
  O0 = "24px",
  R0 = "16px",
  Mh = 4e3,
  z0 = 356,
  _0 = 14,
  M0 = 45,
  j0 = 200;
function dn(...i) {
  return i.filter(Boolean).join(" ");
}
function D0(i) {
  const [s, c] = i.split("-"),
    r = [];
  return (s && r.push(s), c && r.push(c), r);
}
const H0 = (i) => {
  var s, c, r, f, d, p, x, v, h;
  const {
      invert: b,
      toast: m,
      unstyled: N,
      interacting: O,
      setHeights: R,
      visibleToasts: H,
      heights: U,
      index: q,
      toasts: F,
      expanded: K,
      removeToast: $,
      defaultRichColors: P,
      closeButton: I,
      style: Z,
      cancelButtonStyle: X,
      actionButtonStyle: dt,
      className: bt = "",
      descriptionClassName: wt = "",
      duration: ht,
      position: pt,
      gap: vt,
      expandByDefault: xt,
      classNames: A,
      icons: k,
      closeButtonAriaLabel: j = "Close toast",
    } = i,
    [it, rt] = J.useState(null),
    [w, Y] = J.useState(null),
    [L, Q] = J.useState(!1),
    [W, ot] = J.useState(!1),
    [at, ut] = J.useState(!1),
    [Ct, ae] = J.useState(!1),
    [me, le] = J.useState(!1),
    [yn, We] = J.useState(0),
    [Gl, Xa] = J.useState(0),
    ya = J.useRef(m.duration || ht || Mh),
    Vl = J.useRef(null),
    ze = J.useRef(null),
    Xl = q === 0,
    Ql = q + 1 <= H,
    he = m.type,
    Gn = m.dismissible !== !1,
    pe = m.className || "",
    _s = m.descriptionClassName || "",
    ba = J.useMemo(
      () => U.findIndex((ft) => ft.toastId === m.id) || 0,
      [U, m.id],
    ),
    Ki = J.useMemo(() => {
      var ft;
      return (ft = m.closeButton) != null ? ft : I;
    }, [m.closeButton, I]),
    xa = J.useMemo(() => m.duration || ht || Mh, [m.duration, ht]),
    Zl = J.useRef(0),
    bn = J.useRef(0),
    Ji = J.useRef(0),
    Vn = J.useRef(null),
    [Sa, ge] = pt.split("-"),
    Pe = J.useMemo(
      () => U.reduce((ft, qt, It) => (It >= ba ? ft : ft + qt.height), 0),
      [U, ba],
    ),
    ue = x0(),
    Ms = m.invert || b,
    Kl = he === "loading";
  ((bn.current = J.useMemo(() => ba * vt + Pe, [ba, Pe])),
    J.useEffect(() => {
      ya.current = xa;
    }, [xa]),
    J.useEffect(() => {
      Q(!0);
    }, []),
    J.useEffect(() => {
      const ft = ze.current;
      if (ft) {
        const qt = ft.getBoundingClientRect().height;
        return (
          Xa(qt),
          R((It) => [
            { toastId: m.id, height: qt, position: m.position },
            ...It,
          ]),
          () => R((It) => It.filter((fe) => fe.toastId !== m.id))
        );
      }
    }, [R, m.id]),
    J.useLayoutEffect(() => {
      if (!L) return;
      const ft = ze.current,
        qt = ft.style.height;
      ft.style.height = "auto";
      const It = ft.getBoundingClientRect().height;
      ((ft.style.height = qt),
        Xa(It),
        R((fe) =>
          fe.find((Gt) => Gt.toastId === m.id)
            ? fe.map((Gt) => (Gt.toastId === m.id ? { ...Gt, height: It } : Gt))
            : [{ toastId: m.id, height: It, position: m.position }, ...fe],
        ));
    }, [L, m.title, m.description, R, m.id, m.jsx, m.action, m.cancel]));
  const on = J.useCallback(() => {
    (ot(!0),
      We(bn.current),
      R((ft) => ft.filter((qt) => qt.toastId !== m.id)),
      setTimeout(() => {
        $(m);
      }, j0));
  }, [m, $, R, bn]);
  (J.useEffect(() => {
    if (
      (m.promise && he === "loading") ||
      m.duration === 1 / 0 ||
      m.type === "loading"
    )
      return;
    let ft;
    return (
      K || O || ue
        ? (() => {
            if (Ji.current < Zl.current) {
              const fe = new Date().getTime() - Zl.current;
              ya.current = ya.current - fe;
            }
            Ji.current = new Date().getTime();
          })()
        : (() => {
            ya.current !== 1 / 0 &&
              ((Zl.current = new Date().getTime()),
              (ft = setTimeout(() => {
                (m.onAutoClose == null || m.onAutoClose.call(m, m), on());
              }, ya.current)));
          })(),
      () => clearTimeout(ft)
    );
  }, [K, O, m, he, ue, on]),
    J.useEffect(() => {
      m.delete && (on(), m.onDismiss == null || m.onDismiss.call(m, m));
    }, [on, m.delete]));
  function Qa() {
    var ft;
    if (k?.loading) {
      var qt;
      return J.createElement(
        "div",
        {
          className: dn(
            A?.loader,
            m == null || (qt = m.classNames) == null ? void 0 : qt.loader,
            "sonner-loader",
          ),
          "data-visible": he === "loading",
        },
        k.loading,
      );
    }
    return J.createElement(h0, {
      className: dn(
        A?.loader,
        m == null || (ft = m.classNames) == null ? void 0 : ft.loader,
      ),
      visible: he === "loading",
    });
  }
  const Za = m.icon || k?.[he] || d0(he);
  var wa, sn;
  return J.createElement(
    "li",
    {
      tabIndex: 0,
      ref: ze,
      className: dn(
        bt,
        pe,
        A?.toast,
        m == null || (s = m.classNames) == null ? void 0 : s.toast,
        A?.default,
        A?.[he],
        m == null || (c = m.classNames) == null ? void 0 : c[he],
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (wa = m.richColors) != null ? wa : P,
      "data-styled": !(m.jsx || m.unstyled || N),
      "data-mounted": L,
      "data-promise": !!m.promise,
      "data-swiped": me,
      "data-removed": W,
      "data-visible": Ql,
      "data-y-position": Sa,
      "data-x-position": ge,
      "data-index": q,
      "data-front": Xl,
      "data-swiping": at,
      "data-dismissible": Gn,
      "data-type": he,
      "data-invert": Ms,
      "data-swipe-out": Ct,
      "data-swipe-direction": w,
      "data-expanded": !!(K || (xt && L)),
      "data-testid": m.testId,
      style: {
        "--index": q,
        "--toasts-before": q,
        "--z-index": F.length - q,
        "--offset": `${W ? yn : bn.current}px`,
        "--initial-height": xt ? "auto" : `${Gl}px`,
        ...Z,
        ...m.style,
      },
      onDragEnd: () => {
        (ut(!1), rt(null), (Vn.current = null));
      },
      onPointerDown: (ft) => {
        ft.button !== 2 &&
          (Kl ||
            !Gn ||
            ((Vl.current = new Date()),
            We(bn.current),
            ft.target.setPointerCapture(ft.pointerId),
            ft.target.tagName !== "BUTTON" &&
              (ut(!0), (Vn.current = { x: ft.clientX, y: ft.clientY }))));
      },
      onPointerUp: () => {
        var ft, qt, It;
        if (Ct || !Gn) return;
        Vn.current = null;
        const fe = Number(
            ((ft = ze.current) == null
              ? void 0
              : ft.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0,
          ),
          Xn = Number(
            ((qt = ze.current) == null
              ? void 0
              : qt.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0,
          ),
          Gt =
            new Date().getTime() -
            ((It = Vl.current) == null ? void 0 : It.getTime()),
          be = it === "x" ? fe : Xn,
          Ea = Math.abs(be) / Gt;
        if (Math.abs(be) >= M0 || Ea > 0.11) {
          (We(bn.current),
            m.onDismiss == null || m.onDismiss.call(m, m),
            Y(
              it === "x" ? (fe > 0 ? "right" : "left") : Xn > 0 ? "down" : "up",
            ),
            on(),
            ae(!0));
          return;
        } else {
          var xe, Se;
          ((xe = ze.current) == null ||
            xe.style.setProperty("--swipe-amount-x", "0px"),
            (Se = ze.current) == null ||
              Se.style.setProperty("--swipe-amount-y", "0px"));
        }
        (le(!1), ut(!1), rt(null));
      },
      onPointerMove: (ft) => {
        var qt, It, fe;
        if (
          !Vn.current ||
          !Gn ||
          ((qt = window.getSelection()) == null
            ? void 0
            : qt.toString().length) > 0
        )
          return;
        const Gt = ft.clientY - Vn.current.y,
          be = ft.clientX - Vn.current.x;
        var Ea;
        const xe = (Ea = i.swipeDirections) != null ? Ea : D0(pt);
        !it &&
          (Math.abs(be) > 1 || Math.abs(Gt) > 1) &&
          rt(Math.abs(be) > Math.abs(Gt) ? "x" : "y");
        let Se = { x: 0, y: 0 };
        const Ka = (Ie) => 1 / (1.5 + Math.abs(Ie) / 20);
        if (it === "y") {
          if (xe.includes("top") || xe.includes("bottom"))
            if (
              (xe.includes("top") && Gt < 0) ||
              (xe.includes("bottom") && Gt > 0)
            )
              Se.y = Gt;
            else {
              const Ie = Gt * Ka(Gt);
              Se.y = Math.abs(Ie) < Math.abs(Gt) ? Ie : Gt;
            }
        } else if (it === "x" && (xe.includes("left") || xe.includes("right")))
          if (
            (xe.includes("left") && be < 0) ||
            (xe.includes("right") && be > 0)
          )
            Se.x = be;
          else {
            const Ie = be * Ka(be);
            Se.x = Math.abs(Ie) < Math.abs(be) ? Ie : be;
          }
        ((Math.abs(Se.x) > 0 || Math.abs(Se.y) > 0) && le(!0),
          (It = ze.current) == null ||
            It.style.setProperty("--swipe-amount-x", `${Se.x}px`),
          (fe = ze.current) == null ||
            fe.style.setProperty("--swipe-amount-y", `${Se.y}px`));
      },
    },
    Ki && !m.jsx && he !== "loading"
      ? J.createElement(
          "button",
          {
            "aria-label": j,
            "data-disabled": Kl,
            "data-close-button": !0,
            onClick:
              Kl || !Gn
                ? () => {}
                : () => {
                    (on(), m.onDismiss == null || m.onDismiss.call(m, m));
                  },
            className: dn(
              A?.closeButton,
              m == null || (r = m.classNames) == null ? void 0 : r.closeButton,
            ),
          },
          (sn = k?.close) != null ? sn : b0,
        )
      : null,
    (he || m.icon || m.promise) &&
      m.icon !== null &&
      (k?.[he] !== null || m.icon)
      ? J.createElement(
          "div",
          {
            "data-icon": "",
            className: dn(
              A?.icon,
              m == null || (f = m.classNames) == null ? void 0 : f.icon,
            ),
          },
          m.promise || (m.type === "loading" && !m.icon)
            ? m.icon || Qa()
            : null,
          m.type !== "loading" ? Za : null,
        )
      : null,
    J.createElement(
      "div",
      {
        "data-content": "",
        className: dn(
          A?.content,
          m == null || (d = m.classNames) == null ? void 0 : d.content,
        ),
      },
      J.createElement(
        "div",
        {
          "data-title": "",
          className: dn(
            A?.title,
            m == null || (p = m.classNames) == null ? void 0 : p.title,
          ),
        },
        m.jsx ? m.jsx : typeof m.title == "function" ? m.title() : m.title,
      ),
      m.description
        ? J.createElement(
            "div",
            {
              "data-description": "",
              className: dn(
                wt,
                _s,
                A?.description,
                m == null || (x = m.classNames) == null
                  ? void 0
                  : x.description,
              ),
            },
            typeof m.description == "function"
              ? m.description()
              : m.description,
          )
        : null,
    ),
    J.isValidElement(m.cancel)
      ? m.cancel
      : m.cancel && rs(m.cancel)
        ? J.createElement(
            "button",
            {
              "data-button": !0,
              "data-cancel": !0,
              style: m.cancelButtonStyle || X,
              onClick: (ft) => {
                rs(m.cancel) &&
                  Gn &&
                  (m.cancel.onClick == null ||
                    m.cancel.onClick.call(m.cancel, ft),
                  on());
              },
              className: dn(
                A?.cancelButton,
                m == null || (v = m.classNames) == null
                  ? void 0
                  : v.cancelButton,
              ),
            },
            m.cancel.label,
          )
        : null,
    J.isValidElement(m.action)
      ? m.action
      : m.action && rs(m.action)
        ? J.createElement(
            "button",
            {
              "data-button": !0,
              "data-action": !0,
              style: m.actionButtonStyle || dt,
              onClick: (ft) => {
                rs(m.action) &&
                  (m.action.onClick == null ||
                    m.action.onClick.call(m.action, ft),
                  !ft.defaultPrevented && on());
              },
              className: dn(
                A?.actionButton,
                m == null || (h = m.classNames) == null
                  ? void 0
                  : h.actionButton,
              ),
            },
            m.action.label,
          )
        : null,
  );
};
function jh() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  const i = document.documentElement.getAttribute("dir");
  return i === "auto" || !i
    ? window.getComputedStyle(document.documentElement).direction
    : i;
}
function U0(i, s) {
  const c = {};
  return (
    [i, s].forEach((r, f) => {
      const d = f === 1,
        p = d ? "--mobile-offset" : "--offset",
        x = d ? R0 : O0;
      function v(h) {
        ["top", "right", "bottom", "left"].forEach((b) => {
          c[`${p}-${b}`] = typeof h == "number" ? `${h}px` : h;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? v(r)
        : typeof r == "object"
          ? ["top", "right", "bottom", "left"].forEach((h) => {
              r[h] === void 0
                ? (c[`${p}-${h}`] = x)
                : (c[`${p}-${h}`] =
                    typeof r[h] == "number" ? `${r[h]}px` : r[h]);
            })
          : v(x);
    }),
    c
  );
}
const B0 = J.forwardRef(function (s, c) {
    const {
        id: r,
        invert: f,
        position: d = "bottom-right",
        hotkey: p = ["altKey", "KeyT"],
        expand: x,
        closeButton: v,
        className: h,
        offset: b,
        mobileOffset: m,
        theme: N = "light",
        richColors: O,
        duration: R,
        style: H,
        visibleToasts: U = C0,
        toastOptions: q,
        dir: F = jh(),
        gap: K = _0,
        icons: $,
        containerAriaLabel: P = "Notifications",
      } = s,
      [I, Z] = J.useState([]),
      X = J.useMemo(
        () =>
          r
            ? I.filter((L) => L.toasterId === r)
            : I.filter((L) => !L.toasterId),
        [I, r],
      ),
      dt = J.useMemo(
        () =>
          Array.from(
            new Set(
              [d].concat(X.filter((L) => L.position).map((L) => L.position)),
            ),
          ),
        [X, d],
      ),
      [bt, wt] = J.useState([]),
      [ht, pt] = J.useState(!1),
      [vt, xt] = J.useState(!1),
      [A, k] = J.useState(
        N !== "system"
          ? N
          : typeof window < "u" &&
              window.matchMedia &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light",
      ),
      j = J.useRef(null),
      it = p.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      rt = J.useRef(null),
      w = J.useRef(!1),
      Y = J.useCallback((L) => {
        Z((Q) => {
          var W;
          return (
            ((W = Q.find((ot) => ot.id === L.id)) != null && W.delete) ||
              Re.dismiss(L.id),
            Q.filter(({ id: ot }) => ot !== L.id)
          );
        });
      }, []);
    return (
      J.useEffect(
        () =>
          Re.subscribe((L) => {
            if (L.dismiss) {
              requestAnimationFrame(() => {
                Z((Q) =>
                  Q.map((W) => (W.id === L.id ? { ...W, delete: !0 } : W)),
                );
              });
              return;
            }
            setTimeout(() => {
              u0.flushSync(() => {
                Z((Q) => {
                  const W = Q.findIndex((ot) => ot.id === L.id);
                  return W !== -1
                    ? [...Q.slice(0, W), { ...Q[W], ...L }, ...Q.slice(W + 1)]
                    : [L, ...Q];
                });
              });
            });
          }),
        [I],
      ),
      J.useEffect(() => {
        if (N !== "system") {
          k(N);
          return;
        }
        if (
          (N === "system" &&
            (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
              ? k("dark")
              : k("light")),
          typeof window > "u")
        )
          return;
        const L = window.matchMedia("(prefers-color-scheme: dark)");
        try {
          L.addEventListener("change", ({ matches: Q }) => {
            k(Q ? "dark" : "light");
          });
        } catch {
          L.addListener(({ matches: W }) => {
            try {
              k(W ? "dark" : "light");
            } catch (ot) {
              console.error(ot);
            }
          });
        }
      }, [N]),
      J.useEffect(() => {
        I.length <= 1 && pt(!1);
      }, [I]),
      J.useEffect(() => {
        const L = (Q) => {
          var W;
          if (p.every((ut) => Q[ut] || Q.code === ut)) {
            var at;
            (pt(!0), (at = j.current) == null || at.focus());
          }
          Q.code === "Escape" &&
            (document.activeElement === j.current ||
              ((W = j.current) != null &&
                W.contains(document.activeElement))) &&
            pt(!1);
        };
        return (
          document.addEventListener("keydown", L),
          () => document.removeEventListener("keydown", L)
        );
      }, [p]),
      J.useEffect(() => {
        if (j.current)
          return () => {
            rt.current &&
              (rt.current.focus({ preventScroll: !0 }),
              (rt.current = null),
              (w.current = !1));
          };
      }, [j.current]),
      J.createElement(
        "section",
        {
          ref: c,
          "aria-label": `${P} ${it}`,
          tabIndex: -1,
          "aria-live": "polite",
          "aria-relevant": "additions text",
          "aria-atomic": "false",
          suppressHydrationWarning: !0,
        },
        dt.map((L, Q) => {
          var W;
          const [ot, at] = L.split("-");
          return X.length
            ? J.createElement(
                "ol",
                {
                  key: L,
                  dir: F === "auto" ? jh() : F,
                  tabIndex: -1,
                  ref: j,
                  className: h,
                  "data-sonner-toaster": !0,
                  "data-sonner-theme": A,
                  "data-y-position": ot,
                  "data-x-position": at,
                  style: {
                    "--front-toast-height": `${((W = bt[0]) == null ? void 0 : W.height) || 0}px`,
                    "--width": `${z0}px`,
                    "--gap": `${K}px`,
                    ...H,
                    ...U0(b, m),
                  },
                  onBlur: (ut) => {
                    w.current &&
                      !ut.currentTarget.contains(ut.relatedTarget) &&
                      ((w.current = !1),
                      rt.current &&
                        (rt.current.focus({ preventScroll: !0 }),
                        (rt.current = null)));
                  },
                  onFocus: (ut) => {
                    (ut.target instanceof HTMLElement &&
                      ut.target.dataset.dismissible === "false") ||
                      w.current ||
                      ((w.current = !0), (rt.current = ut.relatedTarget));
                  },
                  onMouseEnter: () => pt(!0),
                  onMouseMove: () => pt(!0),
                  onMouseLeave: () => {
                    vt || pt(!1);
                  },
                  onDragEnd: () => pt(!1),
                  onPointerDown: (ut) => {
                    (ut.target instanceof HTMLElement &&
                      ut.target.dataset.dismissible === "false") ||
                      xt(!0);
                  },
                  onPointerUp: () => xt(!1),
                },
                X.filter(
                  (ut) => (!ut.position && Q === 0) || ut.position === L,
                ).map((ut, Ct) => {
                  var ae, me;
                  return J.createElement(H0, {
                    key: ut.id,
                    icons: $,
                    index: Ct,
                    toast: ut,
                    defaultRichColors: O,
                    duration: (ae = q?.duration) != null ? ae : R,
                    className: q?.className,
                    descriptionClassName: q?.descriptionClassName,
                    invert: f,
                    visibleToasts: U,
                    closeButton: (me = q?.closeButton) != null ? me : v,
                    interacting: vt,
                    position: L,
                    style: q?.style,
                    unstyled: q?.unstyled,
                    classNames: q?.classNames,
                    cancelButtonStyle: q?.cancelButtonStyle,
                    actionButtonStyle: q?.actionButtonStyle,
                    closeButtonAriaLabel: q?.closeButtonAriaLabel,
                    removeToast: Y,
                    toasts: X.filter((le) => le.position == ut.position),
                    heights: bt.filter((le) => le.position == ut.position),
                    setHeights: wt,
                    expandByDefault: x,
                    gap: K,
                    expanded: ht,
                    swipeDirections: s.swipeDirections,
                  });
                }),
              )
            : null;
        }),
      )
    );
  }),
  L0 = ({ ...i }) => {
    const { theme: s = "system" } = c0();
    return y.jsx(B0, {
      "data-loc": "client/src/components/ui/sonner.tsx:8",
      theme: s,
      className: "toaster group",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
      },
      ...i,
    });
  };
function ne(i, s, { checkForDefaultPrevented: c = !0 } = {}) {
  return function (f) {
    if ((i?.(f), c === !1 || !f.defaultPrevented)) return s?.(f);
  };
}
function Dh(i, s) {
  if (typeof i == "function") return i(s);
  i != null && (i.current = s);
}
function dp(...i) {
  return (s) => {
    let c = !1;
    const r = i.map((f) => {
      const d = Dh(f, s);
      return (!c && typeof d == "function" && (c = !0), d);
    });
    if (c)
      return () => {
        for (let f = 0; f < r.length; f++) {
          const d = r[f];
          typeof d == "function" ? d() : Dh(i[f], null);
        }
      };
  };
}
function qe(...i) {
  return T.useCallback(dp(...i), i);
}
function Bl(i, s = []) {
  let c = [];
  function r(d, p) {
    const x = T.createContext(p),
      v = c.length;
    c = [...c, p];
    const h = (m) => {
      const { scope: N, children: O, ...R } = m,
        H = N?.[i]?.[v] || x,
        U = T.useMemo(() => R, Object.values(R));
      return y.jsx(H.Provider, { value: U, children: O });
    };
    h.displayName = d + "Provider";
    function b(m, N) {
      const O = N?.[i]?.[v] || x,
        R = T.useContext(O);
      if (R) return R;
      if (p !== void 0) return p;
      throw new Error(`\`${m}\` must be used within \`${d}\``);
    }
    return [h, b];
  }
  const f = () => {
    const d = c.map((p) => T.createContext(p));
    return function (x) {
      const v = x?.[i] || d;
      return T.useMemo(() => ({ [`__scope${i}`]: { ...x, [i]: v } }), [x, v]);
    };
  };
  return ((f.scopeName = i), [r, Y0(f, ...s)]);
}
function Y0(...i) {
  const s = i[0];
  if (i.length === 1) return s;
  const c = () => {
    const r = i.map((f) => ({ useScope: f(), scopeName: f.scopeName }));
    return function (d) {
      const p = r.reduce((x, { useScope: v, scopeName: h }) => {
        const m = v(d)[`__scope${h}`];
        return { ...x, ...m };
      }, {});
      return T.useMemo(() => ({ [`__scope${s.scopeName}`]: p }), [p]);
    };
  };
  return ((c.scopeName = s.scopeName), c);
}
function ps(i) {
  const s = k0(i),
    c = T.forwardRef((r, f) => {
      const { children: d, ...p } = r,
        x = T.Children.toArray(d),
        v = x.find(V0);
      if (v) {
        const h = v.props.children,
          b = x.map((m) =>
            m === v
              ? T.Children.count(h) > 1
                ? T.Children.only(null)
                : T.isValidElement(h)
                  ? h.props.children
                  : null
              : m,
          );
        return y.jsx(s, {
          ...p,
          ref: f,
          children: T.isValidElement(h) ? T.cloneElement(h, void 0, b) : null,
        });
      }
      return y.jsx(s, { ...p, ref: f, children: d });
    });
  return ((c.displayName = `${i}.Slot`), c);
}
var q0 = ps("Slot");
function k0(i) {
  const s = T.forwardRef((c, r) => {
    const { children: f, ...d } = c;
    if (T.isValidElement(f)) {
      const p = Q0(f),
        x = X0(d, f.props);
      return (
        f.type !== T.Fragment && (x.ref = r ? dp(r, p) : p),
        T.cloneElement(f, x)
      );
    }
    return T.Children.count(f) > 1 ? T.Children.only(null) : null;
  });
  return ((s.displayName = `${i}.SlotClone`), s);
}
var mp = Symbol("radix.slottable");
function G0(i) {
  const s = ({ children: c }) => y.jsx(y.Fragment, { children: c });
  return ((s.displayName = `${i}.Slottable`), (s.__radixId = mp), s);
}
function V0(i) {
  return (
    T.isValidElement(i) &&
    typeof i.type == "function" &&
    "__radixId" in i.type &&
    i.type.__radixId === mp
  );
}
function X0(i, s) {
  const c = { ...s };
  for (const r in s) {
    const f = i[r],
      d = s[r];
    /^on[A-Z]/.test(r)
      ? f && d
        ? (c[r] = (...x) => {
            const v = d(...x);
            return (f(...x), v);
          })
        : f && (c[r] = f)
      : r === "style"
        ? (c[r] = { ...f, ...d })
        : r === "className" && (c[r] = [f, d].filter(Boolean).join(" "));
  }
  return { ...i, ...c };
}
function Q0(i) {
  let s = Object.getOwnPropertyDescriptor(i.props, "ref")?.get,
    c = s && "isReactWarning" in s && s.isReactWarning;
  return c
    ? i.ref
    : ((s = Object.getOwnPropertyDescriptor(i, "ref")?.get),
      (c = s && "isReactWarning" in s && s.isReactWarning),
      c ? i.props.ref : i.props.ref || i.ref);
}
var Z0 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  ye = Z0.reduce((i, s) => {
    const c = ps(`Primitive.${s}`),
      r = T.forwardRef((f, d) => {
        const { asChild: p, ...x } = f,
          v = p ? c : s;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          y.jsx(v, { ...x, ref: d })
        );
      });
    return ((r.displayName = `Primitive.${s}`), { ...i, [s]: r });
  }, {});
function K0(i, s) {
  i && pu.flushSync(() => i.dispatchEvent(s));
}
function Vi(i) {
  const s = T.useRef(i);
  return (
    T.useEffect(() => {
      s.current = i;
    }),
    T.useMemo(
      () =>
        (...c) =>
          s.current?.(...c),
      [],
    )
  );
}
function J0(i, s = globalThis?.document) {
  const c = Vi(i);
  T.useEffect(() => {
    const r = (f) => {
      f.key === "Escape" && c(f);
    };
    return (
      s.addEventListener("keydown", r, { capture: !0 }),
      () => s.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [c, s]);
}
var $0 = "DismissableLayer",
  lu = "dismissableLayer.update",
  F0 = "dismissableLayer.pointerDownOutside",
  W0 = "dismissableLayer.focusOutside",
  Hh,
  hp = T.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  pp = T.forwardRef((i, s) => {
    const {
        disableOutsidePointerEvents: c = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: f,
        onFocusOutside: d,
        onInteractOutside: p,
        onDismiss: x,
        ...v
      } = i,
      h = T.useContext(hp),
      [b, m] = T.useState(null),
      N = b?.ownerDocument ?? globalThis?.document,
      [, O] = T.useState({}),
      R = qe(s, (Z) => m(Z)),
      H = Array.from(h.layers),
      [U] = [...h.layersWithOutsidePointerEventsDisabled].slice(-1),
      q = H.indexOf(U),
      F = b ? H.indexOf(b) : -1,
      K = h.layersWithOutsidePointerEventsDisabled.size > 0,
      $ = F >= q,
      P = tb((Z) => {
        const X = Z.target,
          dt = [...h.branches].some((bt) => bt.contains(X));
        !$ || dt || (f?.(Z), p?.(Z), Z.defaultPrevented || x?.());
      }, N),
      I = eb((Z) => {
        const X = Z.target;
        [...h.branches].some((bt) => bt.contains(X)) ||
          (d?.(Z), p?.(Z), Z.defaultPrevented || x?.());
      }, N);
    return (
      J0((Z) => {
        F === h.layers.size - 1 &&
          (r?.(Z), !Z.defaultPrevented && x && (Z.preventDefault(), x()));
      }, N),
      T.useEffect(() => {
        if (b)
          return (
            c &&
              (h.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((Hh = N.body.style.pointerEvents),
                (N.body.style.pointerEvents = "none")),
              h.layersWithOutsidePointerEventsDisabled.add(b)),
            h.layers.add(b),
            Uh(),
            () => {
              c &&
                h.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (N.body.style.pointerEvents = Hh);
            }
          );
      }, [b, N, c, h]),
      T.useEffect(
        () => () => {
          b &&
            (h.layers.delete(b),
            h.layersWithOutsidePointerEventsDisabled.delete(b),
            Uh());
        },
        [b, h],
      ),
      T.useEffect(() => {
        const Z = () => O({});
        return (
          document.addEventListener(lu, Z),
          () => document.removeEventListener(lu, Z)
        );
      }, []),
      y.jsx(ye.div, {
        ...v,
        ref: R,
        style: {
          pointerEvents: K ? ($ ? "auto" : "none") : void 0,
          ...i.style,
        },
        onFocusCapture: ne(i.onFocusCapture, I.onFocusCapture),
        onBlurCapture: ne(i.onBlurCapture, I.onBlurCapture),
        onPointerDownCapture: ne(
          i.onPointerDownCapture,
          P.onPointerDownCapture,
        ),
      })
    );
  });
pp.displayName = $0;
var P0 = "DismissableLayerBranch",
  I0 = T.forwardRef((i, s) => {
    const c = T.useContext(hp),
      r = T.useRef(null),
      f = qe(s, r);
    return (
      T.useEffect(() => {
        const d = r.current;
        if (d)
          return (
            c.branches.add(d),
            () => {
              c.branches.delete(d);
            }
          );
      }, [c.branches]),
      y.jsx(ye.div, { ...i, ref: f })
    );
  });
I0.displayName = P0;
function tb(i, s = globalThis?.document) {
  const c = Vi(i),
    r = T.useRef(!1),
    f = T.useRef(() => {});
  return (
    T.useEffect(() => {
      const d = (x) => {
          if (x.target && !r.current) {
            let v = function () {
              gp(F0, c, h, { discrete: !0 });
            };
            const h = { originalEvent: x };
            x.pointerType === "touch"
              ? (s.removeEventListener("click", f.current),
                (f.current = v),
                s.addEventListener("click", f.current, { once: !0 }))
              : v();
          } else s.removeEventListener("click", f.current);
          r.current = !1;
        },
        p = window.setTimeout(() => {
          s.addEventListener("pointerdown", d);
        }, 0);
      return () => {
        (window.clearTimeout(p),
          s.removeEventListener("pointerdown", d),
          s.removeEventListener("click", f.current));
      };
    }, [s, c]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function eb(i, s = globalThis?.document) {
  const c = Vi(i),
    r = T.useRef(!1);
  return (
    T.useEffect(() => {
      const f = (d) => {
        d.target &&
          !r.current &&
          gp(W0, c, { originalEvent: d }, { discrete: !1 });
      };
      return (
        s.addEventListener("focusin", f),
        () => s.removeEventListener("focusin", f)
      );
    }, [s, c]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Uh() {
  const i = new CustomEvent(lu);
  document.dispatchEvent(i);
}
function gp(i, s, c, { discrete: r }) {
  const f = c.originalEvent.target,
    d = new CustomEvent(i, { bubbles: !1, cancelable: !0, detail: c });
  (s && f.addEventListener(i, s, { once: !0 }),
    r ? K0(f, d) : f.dispatchEvent(d));
}
var Ga = globalThis?.document ? T.useLayoutEffect : () => {},
  nb = hu[" useId ".trim().toString()] || (() => {}),
  ab = 0;
function lb(i) {
  const [s, c] = T.useState(nb());
  return (
    Ga(() => {
      c((r) => r ?? String(ab++));
    }, [i]),
    s ? `radix-${s}` : ""
  );
}
const ib = ["top", "right", "bottom", "left"],
  ga = Math.min,
  Le = Math.max,
  gs = Math.round,
  cs = Math.floor,
  hn = (i) => ({ x: i, y: i }),
  ob = { left: "right", right: "left", bottom: "top", top: "bottom" },
  sb = { start: "end", end: "start" };
function iu(i, s, c) {
  return Le(i, ga(s, c));
}
function Yn(i, s) {
  return typeof i == "function" ? i(s) : i;
}
function qn(i) {
  return i.split("-")[0];
}
function Ll(i) {
  return i.split("-")[1];
}
function gu(i) {
  return i === "x" ? "y" : "x";
}
function vu(i) {
  return i === "y" ? "height" : "width";
}
const rb = new Set(["top", "bottom"]);
function mn(i) {
  return rb.has(qn(i)) ? "y" : "x";
}
function yu(i) {
  return gu(mn(i));
}
function cb(i, s, c) {
  c === void 0 && (c = !1);
  const r = Ll(i),
    f = yu(i),
    d = vu(f);
  let p =
    f === "x"
      ? r === (c ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
        ? "bottom"
        : "top";
  return (s.reference[d] > s.floating[d] && (p = vs(p)), [p, vs(p)]);
}
function ub(i) {
  const s = vs(i);
  return [ou(i), s, ou(s)];
}
function ou(i) {
  return i.replace(/start|end/g, (s) => sb[s]);
}
const Bh = ["left", "right"],
  Lh = ["right", "left"],
  fb = ["top", "bottom"],
  db = ["bottom", "top"];
function mb(i, s, c) {
  switch (i) {
    case "top":
    case "bottom":
      return c ? (s ? Lh : Bh) : s ? Bh : Lh;
    case "left":
    case "right":
      return s ? fb : db;
    default:
      return [];
  }
}
function hb(i, s, c, r) {
  const f = Ll(i);
  let d = mb(qn(i), c === "start", r);
  return (
    f && ((d = d.map((p) => p + "-" + f)), s && (d = d.concat(d.map(ou)))),
    d
  );
}
function vs(i) {
  return i.replace(/left|right|bottom|top/g, (s) => ob[s]);
}
function pb(i) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...i };
}
function vp(i) {
  return typeof i != "number"
    ? pb(i)
    : { top: i, right: i, bottom: i, left: i };
}
function ys(i) {
  const { x: s, y: c, width: r, height: f } = i;
  return {
    width: r,
    height: f,
    top: c,
    left: s,
    right: s + r,
    bottom: c + f,
    x: s,
    y: c,
  };
}
function Yh(i, s, c) {
  let { reference: r, floating: f } = i;
  const d = mn(s),
    p = yu(s),
    x = vu(p),
    v = qn(s),
    h = d === "y",
    b = r.x + r.width / 2 - f.width / 2,
    m = r.y + r.height / 2 - f.height / 2,
    N = r[x] / 2 - f[x] / 2;
  let O;
  switch (v) {
    case "top":
      O = { x: b, y: r.y - f.height };
      break;
    case "bottom":
      O = { x: b, y: r.y + r.height };
      break;
    case "right":
      O = { x: r.x + r.width, y: m };
      break;
    case "left":
      O = { x: r.x - f.width, y: m };
      break;
    default:
      O = { x: r.x, y: r.y };
  }
  switch (Ll(s)) {
    case "start":
      O[p] -= N * (c && h ? -1 : 1);
      break;
    case "end":
      O[p] += N * (c && h ? -1 : 1);
      break;
  }
  return O;
}
const gb = async (i, s, c) => {
  const {
      placement: r = "bottom",
      strategy: f = "absolute",
      middleware: d = [],
      platform: p,
    } = c,
    x = d.filter(Boolean),
    v = await (p.isRTL == null ? void 0 : p.isRTL(s));
  let h = await p.getElementRects({ reference: i, floating: s, strategy: f }),
    { x: b, y: m } = Yh(h, r, v),
    N = r,
    O = {},
    R = 0;
  for (let H = 0; H < x.length; H++) {
    const { name: U, fn: q } = x[H],
      {
        x: F,
        y: K,
        data: $,
        reset: P,
      } = await q({
        x: b,
        y: m,
        initialPlacement: r,
        placement: N,
        strategy: f,
        middlewareData: O,
        rects: h,
        platform: p,
        elements: { reference: i, floating: s },
      });
    ((b = F ?? b),
      (m = K ?? m),
      (O = { ...O, [U]: { ...O[U], ...$ } }),
      P &&
        R <= 50 &&
        (R++,
        typeof P == "object" &&
          (P.placement && (N = P.placement),
          P.rects &&
            (h =
              P.rects === !0
                ? await p.getElementRects({
                    reference: i,
                    floating: s,
                    strategy: f,
                  })
                : P.rects),
          ({ x: b, y: m } = Yh(h, N, v))),
        (H = -1)));
  }
  return { x: b, y: m, placement: N, strategy: f, middlewareData: O };
};
async function ki(i, s) {
  var c;
  s === void 0 && (s = {});
  const { x: r, y: f, platform: d, rects: p, elements: x, strategy: v } = i,
    {
      boundary: h = "clippingAncestors",
      rootBoundary: b = "viewport",
      elementContext: m = "floating",
      altBoundary: N = !1,
      padding: O = 0,
    } = Yn(s, i),
    R = vp(O),
    U = x[N ? (m === "floating" ? "reference" : "floating") : m],
    q = ys(
      await d.getClippingRect({
        element:
          (c = await (d.isElement == null ? void 0 : d.isElement(U))) == null ||
          c
            ? U
            : U.contextElement ||
              (await (d.getDocumentElement == null
                ? void 0
                : d.getDocumentElement(x.floating))),
        boundary: h,
        rootBoundary: b,
        strategy: v,
      }),
    ),
    F =
      m === "floating"
        ? { x: r, y: f, width: p.floating.width, height: p.floating.height }
        : p.reference,
    K = await (d.getOffsetParent == null
      ? void 0
      : d.getOffsetParent(x.floating)),
    $ = (await (d.isElement == null ? void 0 : d.isElement(K)))
      ? (await (d.getScale == null ? void 0 : d.getScale(K))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    P = ys(
      d.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await d.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: x,
            rect: F,
            offsetParent: K,
            strategy: v,
          })
        : F,
    );
  return {
    top: (q.top - P.top + R.top) / $.y,
    bottom: (P.bottom - q.bottom + R.bottom) / $.y,
    left: (q.left - P.left + R.left) / $.x,
    right: (P.right - q.right + R.right) / $.x,
  };
}
const vb = (i) => ({
    name: "arrow",
    options: i,
    async fn(s) {
      const {
          x: c,
          y: r,
          placement: f,
          rects: d,
          platform: p,
          elements: x,
          middlewareData: v,
        } = s,
        { element: h, padding: b = 0 } = Yn(i, s) || {};
      if (h == null) return {};
      const m = vp(b),
        N = { x: c, y: r },
        O = yu(f),
        R = vu(O),
        H = await p.getDimensions(h),
        U = O === "y",
        q = U ? "top" : "left",
        F = U ? "bottom" : "right",
        K = U ? "clientHeight" : "clientWidth",
        $ = d.reference[R] + d.reference[O] - N[O] - d.floating[R],
        P = N[O] - d.reference[O],
        I = await (p.getOffsetParent == null ? void 0 : p.getOffsetParent(h));
      let Z = I ? I[K] : 0;
      (!Z || !(await (p.isElement == null ? void 0 : p.isElement(I)))) &&
        (Z = x.floating[K] || d.floating[R]);
      const X = $ / 2 - P / 2,
        dt = Z / 2 - H[R] / 2 - 1,
        bt = ga(m[q], dt),
        wt = ga(m[F], dt),
        ht = bt,
        pt = Z - H[R] - wt,
        vt = Z / 2 - H[R] / 2 + X,
        xt = iu(ht, vt, pt),
        A =
          !v.arrow &&
          Ll(f) != null &&
          vt !== xt &&
          d.reference[R] / 2 - (vt < ht ? bt : wt) - H[R] / 2 < 0,
        k = A ? (vt < ht ? vt - ht : vt - pt) : 0;
      return {
        [O]: N[O] + k,
        data: {
          [O]: xt,
          centerOffset: vt - xt - k,
          ...(A && { alignmentOffset: k }),
        },
        reset: A,
      };
    },
  }),
  yb = function (i) {
    return (
      i === void 0 && (i = {}),
      {
        name: "flip",
        options: i,
        async fn(s) {
          var c, r;
          const {
              placement: f,
              middlewareData: d,
              rects: p,
              initialPlacement: x,
              platform: v,
              elements: h,
            } = s,
            {
              mainAxis: b = !0,
              crossAxis: m = !0,
              fallbackPlacements: N,
              fallbackStrategy: O = "bestFit",
              fallbackAxisSideDirection: R = "none",
              flipAlignment: H = !0,
              ...U
            } = Yn(i, s);
          if ((c = d.arrow) != null && c.alignmentOffset) return {};
          const q = qn(f),
            F = mn(x),
            K = qn(x) === x,
            $ = await (v.isRTL == null ? void 0 : v.isRTL(h.floating)),
            P = N || (K || !H ? [vs(x)] : ub(x)),
            I = R !== "none";
          !N && I && P.push(...hb(x, H, R, $));
          const Z = [x, ...P],
            X = await ki(s, U),
            dt = [];
          let bt = ((r = d.flip) == null ? void 0 : r.overflows) || [];
          if ((b && dt.push(X[q]), m)) {
            const vt = cb(f, p, $);
            dt.push(X[vt[0]], X[vt[1]]);
          }
          if (
            ((bt = [...bt, { placement: f, overflows: dt }]),
            !dt.every((vt) => vt <= 0))
          ) {
            var wt, ht;
            const vt = (((wt = d.flip) == null ? void 0 : wt.index) || 0) + 1,
              xt = Z[vt];
            if (
              xt &&
              (!(m === "alignment" ? F !== mn(xt) : !1) ||
                bt.every((j) =>
                  mn(j.placement) === F ? j.overflows[0] > 0 : !0,
                ))
            )
              return {
                data: { index: vt, overflows: bt },
                reset: { placement: xt },
              };
            let A =
              (ht = bt
                .filter((k) => k.overflows[0] <= 0)
                .sort((k, j) => k.overflows[1] - j.overflows[1])[0]) == null
                ? void 0
                : ht.placement;
            if (!A)
              switch (O) {
                case "bestFit": {
                  var pt;
                  const k =
                    (pt = bt
                      .filter((j) => {
                        if (I) {
                          const it = mn(j.placement);
                          return it === F || it === "y";
                        }
                        return !0;
                      })
                      .map((j) => [
                        j.placement,
                        j.overflows
                          .filter((it) => it > 0)
                          .reduce((it, rt) => it + rt, 0),
                      ])
                      .sort((j, it) => j[1] - it[1])[0]) == null
                      ? void 0
                      : pt[0];
                  k && (A = k);
                  break;
                }
                case "initialPlacement":
                  A = x;
                  break;
              }
            if (f !== A) return { reset: { placement: A } };
          }
          return {};
        },
      }
    );
  };
function qh(i, s) {
  return {
    top: i.top - s.height,
    right: i.right - s.width,
    bottom: i.bottom - s.height,
    left: i.left - s.width,
  };
}
function kh(i) {
  return ib.some((s) => i[s] >= 0);
}
const bb = function (i) {
    return (
      i === void 0 && (i = {}),
      {
        name: "hide",
        options: i,
        async fn(s) {
          const { rects: c } = s,
            { strategy: r = "referenceHidden", ...f } = Yn(i, s);
          switch (r) {
            case "referenceHidden": {
              const d = await ki(s, { ...f, elementContext: "reference" }),
                p = qh(d, c.reference);
              return {
                data: { referenceHiddenOffsets: p, referenceHidden: kh(p) },
              };
            }
            case "escaped": {
              const d = await ki(s, { ...f, altBoundary: !0 }),
                p = qh(d, c.floating);
              return { data: { escapedOffsets: p, escaped: kh(p) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  yp = new Set(["left", "top"]);
async function xb(i, s) {
  const { placement: c, platform: r, elements: f } = i,
    d = await (r.isRTL == null ? void 0 : r.isRTL(f.floating)),
    p = qn(c),
    x = Ll(c),
    v = mn(c) === "y",
    h = yp.has(p) ? -1 : 1,
    b = d && v ? -1 : 1,
    m = Yn(s, i);
  let {
    mainAxis: N,
    crossAxis: O,
    alignmentAxis: R,
  } = typeof m == "number"
    ? { mainAxis: m, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: m.mainAxis || 0,
        crossAxis: m.crossAxis || 0,
        alignmentAxis: m.alignmentAxis,
      };
  return (
    x && typeof R == "number" && (O = x === "end" ? R * -1 : R),
    v ? { x: O * b, y: N * h } : { x: N * h, y: O * b }
  );
}
const Sb = function (i) {
    return (
      i === void 0 && (i = 0),
      {
        name: "offset",
        options: i,
        async fn(s) {
          var c, r;
          const { x: f, y: d, placement: p, middlewareData: x } = s,
            v = await xb(s, i);
          return p === ((c = x.offset) == null ? void 0 : c.placement) &&
            (r = x.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: f + v.x, y: d + v.y, data: { ...v, placement: p } };
        },
      }
    );
  },
  wb = function (i) {
    return (
      i === void 0 && (i = {}),
      {
        name: "shift",
        options: i,
        async fn(s) {
          const { x: c, y: r, placement: f } = s,
            {
              mainAxis: d = !0,
              crossAxis: p = !1,
              limiter: x = {
                fn: (U) => {
                  let { x: q, y: F } = U;
                  return { x: q, y: F };
                },
              },
              ...v
            } = Yn(i, s),
            h = { x: c, y: r },
            b = await ki(s, v),
            m = mn(qn(f)),
            N = gu(m);
          let O = h[N],
            R = h[m];
          if (d) {
            const U = N === "y" ? "top" : "left",
              q = N === "y" ? "bottom" : "right",
              F = O + b[U],
              K = O - b[q];
            O = iu(F, O, K);
          }
          if (p) {
            const U = m === "y" ? "top" : "left",
              q = m === "y" ? "bottom" : "right",
              F = R + b[U],
              K = R - b[q];
            R = iu(F, R, K);
          }
          const H = x.fn({ ...s, [N]: O, [m]: R });
          return {
            ...H,
            data: { x: H.x - c, y: H.y - r, enabled: { [N]: d, [m]: p } },
          };
        },
      }
    );
  },
  Eb = function (i) {
    return (
      i === void 0 && (i = {}),
      {
        options: i,
        fn(s) {
          const { x: c, y: r, placement: f, rects: d, middlewareData: p } = s,
            { offset: x = 0, mainAxis: v = !0, crossAxis: h = !0 } = Yn(i, s),
            b = { x: c, y: r },
            m = mn(f),
            N = gu(m);
          let O = b[N],
            R = b[m];
          const H = Yn(x, s),
            U =
              typeof H == "number"
                ? { mainAxis: H, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...H };
          if (v) {
            const K = N === "y" ? "height" : "width",
              $ = d.reference[N] - d.floating[K] + U.mainAxis,
              P = d.reference[N] + d.reference[K] - U.mainAxis;
            O < $ ? (O = $) : O > P && (O = P);
          }
          if (h) {
            var q, F;
            const K = N === "y" ? "width" : "height",
              $ = yp.has(qn(f)),
              P =
                d.reference[m] -
                d.floating[K] +
                (($ && ((q = p.offset) == null ? void 0 : q[m])) || 0) +
                ($ ? 0 : U.crossAxis),
              I =
                d.reference[m] +
                d.reference[K] +
                ($ ? 0 : ((F = p.offset) == null ? void 0 : F[m]) || 0) -
                ($ ? U.crossAxis : 0);
            R < P ? (R = P) : R > I && (R = I);
          }
          return { [N]: O, [m]: R };
        },
      }
    );
  },
  Tb = function (i) {
    return (
      i === void 0 && (i = {}),
      {
        name: "size",
        options: i,
        async fn(s) {
          var c, r;
          const { placement: f, rects: d, platform: p, elements: x } = s,
            { apply: v = () => {}, ...h } = Yn(i, s),
            b = await ki(s, h),
            m = qn(f),
            N = Ll(f),
            O = mn(f) === "y",
            { width: R, height: H } = d.floating;
          let U, q;
          m === "top" || m === "bottom"
            ? ((U = m),
              (q =
                N ===
                ((await (p.isRTL == null ? void 0 : p.isRTL(x.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((q = m), (U = N === "end" ? "top" : "bottom"));
          const F = H - b.top - b.bottom,
            K = R - b.left - b.right,
            $ = ga(H - b[U], F),
            P = ga(R - b[q], K),
            I = !s.middlewareData.shift;
          let Z = $,
            X = P;
          if (
            ((c = s.middlewareData.shift) != null && c.enabled.x && (X = K),
            (r = s.middlewareData.shift) != null && r.enabled.y && (Z = F),
            I && !N)
          ) {
            const bt = Le(b.left, 0),
              wt = Le(b.right, 0),
              ht = Le(b.top, 0),
              pt = Le(b.bottom, 0);
            O
              ? (X =
                  R -
                  2 * (bt !== 0 || wt !== 0 ? bt + wt : Le(b.left, b.right)))
              : (Z =
                  H -
                  2 * (ht !== 0 || pt !== 0 ? ht + pt : Le(b.top, b.bottom)));
          }
          await v({ ...s, availableWidth: X, availableHeight: Z });
          const dt = await p.getDimensions(x.floating);
          return R !== dt.width || H !== dt.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function Es() {
  return typeof window < "u";
}
function Yl(i) {
  return bp(i) ? (i.nodeName || "").toLowerCase() : "#document";
}
function Ye(i) {
  var s;
  return (
    (i == null || (s = i.ownerDocument) == null ? void 0 : s.defaultView) ||
    window
  );
}
function gn(i) {
  var s;
  return (s = (bp(i) ? i.ownerDocument : i.document) || window.document) == null
    ? void 0
    : s.documentElement;
}
function bp(i) {
  return Es() ? i instanceof Node || i instanceof Ye(i).Node : !1;
}
function an(i) {
  return Es() ? i instanceof Element || i instanceof Ye(i).Element : !1;
}
function pn(i) {
  return Es() ? i instanceof HTMLElement || i instanceof Ye(i).HTMLElement : !1;
}
function Gh(i) {
  return !Es() || typeof ShadowRoot > "u"
    ? !1
    : i instanceof ShadowRoot || i instanceof Ye(i).ShadowRoot;
}
const Ab = new Set(["inline", "contents"]);
function Xi(i) {
  const { overflow: s, overflowX: c, overflowY: r, display: f } = ln(i);
  return /auto|scroll|overlay|hidden|clip/.test(s + r + c) && !Ab.has(f);
}
const Nb = new Set(["table", "td", "th"]);
function Cb(i) {
  return Nb.has(Yl(i));
}
const Ob = [":popover-open", ":modal"];
function Ts(i) {
  return Ob.some((s) => {
    try {
      return i.matches(s);
    } catch {
      return !1;
    }
  });
}
const Rb = ["transform", "translate", "scale", "rotate", "perspective"],
  zb = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  _b = ["paint", "layout", "strict", "content"];
function bu(i) {
  const s = xu(),
    c = an(i) ? ln(i) : i;
  return (
    Rb.some((r) => (c[r] ? c[r] !== "none" : !1)) ||
    (c.containerType ? c.containerType !== "normal" : !1) ||
    (!s && (c.backdropFilter ? c.backdropFilter !== "none" : !1)) ||
    (!s && (c.filter ? c.filter !== "none" : !1)) ||
    zb.some((r) => (c.willChange || "").includes(r)) ||
    _b.some((r) => (c.contain || "").includes(r))
  );
}
function Mb(i) {
  let s = va(i);
  for (; pn(s) && !Hl(s); ) {
    if (bu(s)) return s;
    if (Ts(s)) return null;
    s = va(s);
  }
  return null;
}
function xu() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const jb = new Set(["html", "body", "#document"]);
function Hl(i) {
  return jb.has(Yl(i));
}
function ln(i) {
  return Ye(i).getComputedStyle(i);
}
function As(i) {
  return an(i)
    ? { scrollLeft: i.scrollLeft, scrollTop: i.scrollTop }
    : { scrollLeft: i.scrollX, scrollTop: i.scrollY };
}
function va(i) {
  if (Yl(i) === "html") return i;
  const s = i.assignedSlot || i.parentNode || (Gh(i) && i.host) || gn(i);
  return Gh(s) ? s.host : s;
}
function xp(i) {
  const s = va(i);
  return Hl(s)
    ? i.ownerDocument
      ? i.ownerDocument.body
      : i.body
    : pn(s) && Xi(s)
      ? s
      : xp(s);
}
function Gi(i, s, c) {
  var r;
  (s === void 0 && (s = []), c === void 0 && (c = !0));
  const f = xp(i),
    d = f === ((r = i.ownerDocument) == null ? void 0 : r.body),
    p = Ye(f);
  if (d) {
    const x = su(p);
    return s.concat(
      p,
      p.visualViewport || [],
      Xi(f) ? f : [],
      x && c ? Gi(x) : [],
    );
  }
  return s.concat(f, Gi(f, [], c));
}
function su(i) {
  return i.parent && Object.getPrototypeOf(i.parent) ? i.frameElement : null;
}
function Sp(i) {
  const s = ln(i);
  let c = parseFloat(s.width) || 0,
    r = parseFloat(s.height) || 0;
  const f = pn(i),
    d = f ? i.offsetWidth : c,
    p = f ? i.offsetHeight : r,
    x = gs(c) !== d || gs(r) !== p;
  return (x && ((c = d), (r = p)), { width: c, height: r, $: x });
}
function Su(i) {
  return an(i) ? i : i.contextElement;
}
function Dl(i) {
  const s = Su(i);
  if (!pn(s)) return hn(1);
  const c = s.getBoundingClientRect(),
    { width: r, height: f, $: d } = Sp(s);
  let p = (d ? gs(c.width) : c.width) / r,
    x = (d ? gs(c.height) : c.height) / f;
  return (
    (!p || !Number.isFinite(p)) && (p = 1),
    (!x || !Number.isFinite(x)) && (x = 1),
    { x: p, y: x }
  );
}
const Db = hn(0);
function wp(i) {
  const s = Ye(i);
  return !xu() || !s.visualViewport
    ? Db
    : { x: s.visualViewport.offsetLeft, y: s.visualViewport.offsetTop };
}
function Hb(i, s, c) {
  return (s === void 0 && (s = !1), !c || (s && c !== Ye(i)) ? !1 : s);
}
function Va(i, s, c, r) {
  (s === void 0 && (s = !1), c === void 0 && (c = !1));
  const f = i.getBoundingClientRect(),
    d = Su(i);
  let p = hn(1);
  s && (r ? an(r) && (p = Dl(r)) : (p = Dl(i)));
  const x = Hb(d, c, r) ? wp(d) : hn(0);
  let v = (f.left + x.x) / p.x,
    h = (f.top + x.y) / p.y,
    b = f.width / p.x,
    m = f.height / p.y;
  if (d) {
    const N = Ye(d),
      O = r && an(r) ? Ye(r) : r;
    let R = N,
      H = su(R);
    for (; H && r && O !== R; ) {
      const U = Dl(H),
        q = H.getBoundingClientRect(),
        F = ln(H),
        K = q.left + (H.clientLeft + parseFloat(F.paddingLeft)) * U.x,
        $ = q.top + (H.clientTop + parseFloat(F.paddingTop)) * U.y;
      ((v *= U.x),
        (h *= U.y),
        (b *= U.x),
        (m *= U.y),
        (v += K),
        (h += $),
        (R = Ye(H)),
        (H = su(R)));
    }
  }
  return ys({ width: b, height: m, x: v, y: h });
}
function Ns(i, s) {
  const c = As(i).scrollLeft;
  return s ? s.left + c : Va(gn(i)).left + c;
}
function Ep(i, s) {
  const c = i.getBoundingClientRect(),
    r = c.left + s.scrollLeft - Ns(i, c),
    f = c.top + s.scrollTop;
  return { x: r, y: f };
}
function Ub(i) {
  let { elements: s, rect: c, offsetParent: r, strategy: f } = i;
  const d = f === "fixed",
    p = gn(r),
    x = s ? Ts(s.floating) : !1;
  if (r === p || (x && d)) return c;
  let v = { scrollLeft: 0, scrollTop: 0 },
    h = hn(1);
  const b = hn(0),
    m = pn(r);
  if (
    (m || (!m && !d)) &&
    ((Yl(r) !== "body" || Xi(p)) && (v = As(r)), pn(r))
  ) {
    const O = Va(r);
    ((h = Dl(r)), (b.x = O.x + r.clientLeft), (b.y = O.y + r.clientTop));
  }
  const N = p && !m && !d ? Ep(p, v) : hn(0);
  return {
    width: c.width * h.x,
    height: c.height * h.y,
    x: c.x * h.x - v.scrollLeft * h.x + b.x + N.x,
    y: c.y * h.y - v.scrollTop * h.y + b.y + N.y,
  };
}
function Bb(i) {
  return Array.from(i.getClientRects());
}
function Lb(i) {
  const s = gn(i),
    c = As(i),
    r = i.ownerDocument.body,
    f = Le(s.scrollWidth, s.clientWidth, r.scrollWidth, r.clientWidth),
    d = Le(s.scrollHeight, s.clientHeight, r.scrollHeight, r.clientHeight);
  let p = -c.scrollLeft + Ns(i);
  const x = -c.scrollTop;
  return (
    ln(r).direction === "rtl" && (p += Le(s.clientWidth, r.clientWidth) - f),
    { width: f, height: d, x: p, y: x }
  );
}
const Vh = 25;
function Yb(i, s) {
  const c = Ye(i),
    r = gn(i),
    f = c.visualViewport;
  let d = r.clientWidth,
    p = r.clientHeight,
    x = 0,
    v = 0;
  if (f) {
    ((d = f.width), (p = f.height));
    const b = xu();
    (!b || (b && s === "fixed")) && ((x = f.offsetLeft), (v = f.offsetTop));
  }
  const h = Ns(r);
  if (h <= 0) {
    const b = r.ownerDocument,
      m = b.body,
      N = getComputedStyle(m),
      O =
        (b.compatMode === "CSS1Compat" &&
          parseFloat(N.marginLeft) + parseFloat(N.marginRight)) ||
        0,
      R = Math.abs(r.clientWidth - m.clientWidth - O);
    R <= Vh && (d -= R);
  } else h <= Vh && (d += h);
  return { width: d, height: p, x, y: v };
}
const qb = new Set(["absolute", "fixed"]);
function kb(i, s) {
  const c = Va(i, !0, s === "fixed"),
    r = c.top + i.clientTop,
    f = c.left + i.clientLeft,
    d = pn(i) ? Dl(i) : hn(1),
    p = i.clientWidth * d.x,
    x = i.clientHeight * d.y,
    v = f * d.x,
    h = r * d.y;
  return { width: p, height: x, x: v, y: h };
}
function Xh(i, s, c) {
  let r;
  if (s === "viewport") r = Yb(i, c);
  else if (s === "document") r = Lb(gn(i));
  else if (an(s)) r = kb(s, c);
  else {
    const f = wp(i);
    r = { x: s.x - f.x, y: s.y - f.y, width: s.width, height: s.height };
  }
  return ys(r);
}
function Tp(i, s) {
  const c = va(i);
  return c === s || !an(c) || Hl(c)
    ? !1
    : ln(c).position === "fixed" || Tp(c, s);
}
function Gb(i, s) {
  const c = s.get(i);
  if (c) return c;
  let r = Gi(i, [], !1).filter((x) => an(x) && Yl(x) !== "body"),
    f = null;
  const d = ln(i).position === "fixed";
  let p = d ? va(i) : i;
  for (; an(p) && !Hl(p); ) {
    const x = ln(p),
      v = bu(p);
    (!v && x.position === "fixed" && (f = null),
      (
        d
          ? !v && !f
          : (!v && x.position === "static" && !!f && qb.has(f.position)) ||
            (Xi(p) && !v && Tp(i, p))
      )
        ? (r = r.filter((b) => b !== p))
        : (f = x),
      (p = va(p)));
  }
  return (s.set(i, r), r);
}
function Vb(i) {
  let { element: s, boundary: c, rootBoundary: r, strategy: f } = i;
  const p = [
      ...(c === "clippingAncestors"
        ? Ts(s)
          ? []
          : Gb(s, this._c)
        : [].concat(c)),
      r,
    ],
    x = p[0],
    v = p.reduce(
      (h, b) => {
        const m = Xh(s, b, f);
        return (
          (h.top = Le(m.top, h.top)),
          (h.right = ga(m.right, h.right)),
          (h.bottom = ga(m.bottom, h.bottom)),
          (h.left = Le(m.left, h.left)),
          h
        );
      },
      Xh(s, x, f),
    );
  return {
    width: v.right - v.left,
    height: v.bottom - v.top,
    x: v.left,
    y: v.top,
  };
}
function Xb(i) {
  const { width: s, height: c } = Sp(i);
  return { width: s, height: c };
}
function Qb(i, s, c) {
  const r = pn(s),
    f = gn(s),
    d = c === "fixed",
    p = Va(i, !0, d, s);
  let x = { scrollLeft: 0, scrollTop: 0 };
  const v = hn(0);
  function h() {
    v.x = Ns(f);
  }
  if (r || (!r && !d))
    if (((Yl(s) !== "body" || Xi(f)) && (x = As(s)), r)) {
      const O = Va(s, !0, d, s);
      ((v.x = O.x + s.clientLeft), (v.y = O.y + s.clientTop));
    } else f && h();
  d && !r && f && h();
  const b = f && !r && !d ? Ep(f, x) : hn(0),
    m = p.left + x.scrollLeft - v.x - b.x,
    N = p.top + x.scrollTop - v.y - b.y;
  return { x: m, y: N, width: p.width, height: p.height };
}
function $c(i) {
  return ln(i).position === "static";
}
function Qh(i, s) {
  if (!pn(i) || ln(i).position === "fixed") return null;
  if (s) return s(i);
  let c = i.offsetParent;
  return (gn(i) === c && (c = c.ownerDocument.body), c);
}
function Ap(i, s) {
  const c = Ye(i);
  if (Ts(i)) return c;
  if (!pn(i)) {
    let f = va(i);
    for (; f && !Hl(f); ) {
      if (an(f) && !$c(f)) return f;
      f = va(f);
    }
    return c;
  }
  let r = Qh(i, s);
  for (; r && Cb(r) && $c(r); ) r = Qh(r, s);
  return r && Hl(r) && $c(r) && !bu(r) ? c : r || Mb(i) || c;
}
const Zb = async function (i) {
  const s = this.getOffsetParent || Ap,
    c = this.getDimensions,
    r = await c(i.floating);
  return {
    reference: Qb(i.reference, await s(i.floating), i.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function Kb(i) {
  return ln(i).direction === "rtl";
}
const Jb = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Ub,
  getDocumentElement: gn,
  getClippingRect: Vb,
  getOffsetParent: Ap,
  getElementRects: Zb,
  getClientRects: Bb,
  getDimensions: Xb,
  getScale: Dl,
  isElement: an,
  isRTL: Kb,
};
function Np(i, s) {
  return (
    i.x === s.x && i.y === s.y && i.width === s.width && i.height === s.height
  );
}
function $b(i, s) {
  let c = null,
    r;
  const f = gn(i);
  function d() {
    var x;
    (clearTimeout(r), (x = c) == null || x.disconnect(), (c = null));
  }
  function p(x, v) {
    (x === void 0 && (x = !1), v === void 0 && (v = 1), d());
    const h = i.getBoundingClientRect(),
      { left: b, top: m, width: N, height: O } = h;
    if ((x || s(), !N || !O)) return;
    const R = cs(m),
      H = cs(f.clientWidth - (b + N)),
      U = cs(f.clientHeight - (m + O)),
      q = cs(b),
      K = {
        rootMargin: -R + "px " + -H + "px " + -U + "px " + -q + "px",
        threshold: Le(0, ga(1, v)) || 1,
      };
    let $ = !0;
    function P(I) {
      const Z = I[0].intersectionRatio;
      if (Z !== v) {
        if (!$) return p();
        Z
          ? p(!1, Z)
          : (r = setTimeout(() => {
              p(!1, 1e-7);
            }, 1e3));
      }
      (Z === 1 && !Np(h, i.getBoundingClientRect()) && p(), ($ = !1));
    }
    try {
      c = new IntersectionObserver(P, { ...K, root: f.ownerDocument });
    } catch {
      c = new IntersectionObserver(P, K);
    }
    c.observe(i);
  }
  return (p(!0), d);
}
function Fb(i, s, c, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: f = !0,
      ancestorResize: d = !0,
      elementResize: p = typeof ResizeObserver == "function",
      layoutShift: x = typeof IntersectionObserver == "function",
      animationFrame: v = !1,
    } = r,
    h = Su(i),
    b = f || d ? [...(h ? Gi(h) : []), ...Gi(s)] : [];
  b.forEach((q) => {
    (f && q.addEventListener("scroll", c, { passive: !0 }),
      d && q.addEventListener("resize", c));
  });
  const m = h && x ? $b(h, c) : null;
  let N = -1,
    O = null;
  p &&
    ((O = new ResizeObserver((q) => {
      let [F] = q;
      (F &&
        F.target === h &&
        O &&
        (O.unobserve(s),
        cancelAnimationFrame(N),
        (N = requestAnimationFrame(() => {
          var K;
          (K = O) == null || K.observe(s);
        }))),
        c());
    })),
    h && !v && O.observe(h),
    O.observe(s));
  let R,
    H = v ? Va(i) : null;
  v && U();
  function U() {
    const q = Va(i);
    (H && !Np(H, q) && c(), (H = q), (R = requestAnimationFrame(U)));
  }
  return (
    c(),
    () => {
      var q;
      (b.forEach((F) => {
        (f && F.removeEventListener("scroll", c),
          d && F.removeEventListener("resize", c));
      }),
        m?.(),
        (q = O) == null || q.disconnect(),
        (O = null),
        v && cancelAnimationFrame(R));
    }
  );
}
const Wb = Sb,
  Pb = wb,
  Ib = yb,
  tx = Tb,
  ex = bb,
  Zh = vb,
  nx = Eb,
  ax = (i, s, c) => {
    const r = new Map(),
      f = { platform: Jb, ...c },
      d = { ...f.platform, _c: r };
    return gb(i, s, { ...f, platform: d });
  };
var lx = typeof document < "u",
  ix = function () {},
  hs = lx ? T.useLayoutEffect : ix;
function bs(i, s) {
  if (i === s) return !0;
  if (typeof i != typeof s) return !1;
  if (typeof i == "function" && i.toString() === s.toString()) return !0;
  let c, r, f;
  if (i && s && typeof i == "object") {
    if (Array.isArray(i)) {
      if (((c = i.length), c !== s.length)) return !1;
      for (r = c; r-- !== 0; ) if (!bs(i[r], s[r])) return !1;
      return !0;
    }
    if (((f = Object.keys(i)), (c = f.length), c !== Object.keys(s).length))
      return !1;
    for (r = c; r-- !== 0; ) if (!{}.hasOwnProperty.call(s, f[r])) return !1;
    for (r = c; r-- !== 0; ) {
      const d = f[r];
      if (!(d === "_owner" && i.$$typeof) && !bs(i[d], s[d])) return !1;
    }
    return !0;
  }
  return i !== i && s !== s;
}
function Cp(i) {
  return typeof window > "u"
    ? 1
    : (i.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Kh(i, s) {
  const c = Cp(i);
  return Math.round(s * c) / c;
}
function Fc(i) {
  const s = T.useRef(i);
  return (
    hs(() => {
      s.current = i;
    }),
    s
  );
}
function ox(i) {
  i === void 0 && (i = {});
  const {
      placement: s = "bottom",
      strategy: c = "absolute",
      middleware: r = [],
      platform: f,
      elements: { reference: d, floating: p } = {},
      transform: x = !0,
      whileElementsMounted: v,
      open: h,
    } = i,
    [b, m] = T.useState({
      x: 0,
      y: 0,
      strategy: c,
      placement: s,
      middlewareData: {},
      isPositioned: !1,
    }),
    [N, O] = T.useState(r);
  bs(N, r) || O(r);
  const [R, H] = T.useState(null),
    [U, q] = T.useState(null),
    F = T.useCallback((j) => {
      j !== I.current && ((I.current = j), H(j));
    }, []),
    K = T.useCallback((j) => {
      j !== Z.current && ((Z.current = j), q(j));
    }, []),
    $ = d || R,
    P = p || U,
    I = T.useRef(null),
    Z = T.useRef(null),
    X = T.useRef(b),
    dt = v != null,
    bt = Fc(v),
    wt = Fc(f),
    ht = Fc(h),
    pt = T.useCallback(() => {
      if (!I.current || !Z.current) return;
      const j = { placement: s, strategy: c, middleware: N };
      (wt.current && (j.platform = wt.current),
        ax(I.current, Z.current, j).then((it) => {
          const rt = { ...it, isPositioned: ht.current !== !1 };
          vt.current &&
            !bs(X.current, rt) &&
            ((X.current = rt),
            pu.flushSync(() => {
              m(rt);
            }));
        }));
    }, [N, s, c, wt, ht]);
  hs(() => {
    h === !1 &&
      X.current.isPositioned &&
      ((X.current.isPositioned = !1), m((j) => ({ ...j, isPositioned: !1 })));
  }, [h]);
  const vt = T.useRef(!1);
  (hs(
    () => (
      (vt.current = !0),
      () => {
        vt.current = !1;
      }
    ),
    [],
  ),
    hs(() => {
      if (($ && (I.current = $), P && (Z.current = P), $ && P)) {
        if (bt.current) return bt.current($, P, pt);
        pt();
      }
    }, [$, P, pt, bt, dt]));
  const xt = T.useMemo(
      () => ({ reference: I, floating: Z, setReference: F, setFloating: K }),
      [F, K],
    ),
    A = T.useMemo(() => ({ reference: $, floating: P }), [$, P]),
    k = T.useMemo(() => {
      const j = { position: c, left: 0, top: 0 };
      if (!A.floating) return j;
      const it = Kh(A.floating, b.x),
        rt = Kh(A.floating, b.y);
      return x
        ? {
            ...j,
            transform: "translate(" + it + "px, " + rt + "px)",
            ...(Cp(A.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: c, left: it, top: rt };
    }, [c, x, A.floating, b.x, b.y]);
  return T.useMemo(
    () => ({ ...b, update: pt, refs: xt, elements: A, floatingStyles: k }),
    [b, pt, xt, A, k],
  );
}
const sx = (i) => {
    function s(c) {
      return {}.hasOwnProperty.call(c, "current");
    }
    return {
      name: "arrow",
      options: i,
      fn(c) {
        const { element: r, padding: f } = typeof i == "function" ? i(c) : i;
        return r && s(r)
          ? r.current != null
            ? Zh({ element: r.current, padding: f }).fn(c)
            : {}
          : r
            ? Zh({ element: r, padding: f }).fn(c)
            : {};
      },
    };
  },
  rx = (i, s) => ({ ...Wb(i), options: [i, s] }),
  cx = (i, s) => ({ ...Pb(i), options: [i, s] }),
  ux = (i, s) => ({ ...nx(i), options: [i, s] }),
  fx = (i, s) => ({ ...Ib(i), options: [i, s] }),
  dx = (i, s) => ({ ...tx(i), options: [i, s] }),
  mx = (i, s) => ({ ...ex(i), options: [i, s] }),
  hx = (i, s) => ({ ...sx(i), options: [i, s] });
var px = "Arrow",
  Op = T.forwardRef((i, s) => {
    const { children: c, width: r = 10, height: f = 5, ...d } = i;
    return y.jsx(ye.svg, {
      ...d,
      ref: s,
      width: r,
      height: f,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: i.asChild ? c : y.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Op.displayName = px;
var gx = Op;
function Rp(i) {
  const [s, c] = T.useState(void 0);
  return (
    Ga(() => {
      if (i) {
        c({ width: i.offsetWidth, height: i.offsetHeight });
        const r = new ResizeObserver((f) => {
          if (!Array.isArray(f) || !f.length) return;
          const d = f[0];
          let p, x;
          if ("borderBoxSize" in d) {
            const v = d.borderBoxSize,
              h = Array.isArray(v) ? v[0] : v;
            ((p = h.inlineSize), (x = h.blockSize));
          } else ((p = i.offsetWidth), (x = i.offsetHeight));
          c({ width: p, height: x });
        });
        return (r.observe(i, { box: "border-box" }), () => r.unobserve(i));
      } else c(void 0);
    }, [i]),
    s
  );
}
var zp = "Popper",
  [_p, Mp] = Bl(zp),
  [uS, jp] = _p(zp),
  Dp = "PopperAnchor",
  Hp = T.forwardRef((i, s) => {
    const { __scopePopper: c, virtualRef: r, ...f } = i,
      d = jp(Dp, c),
      p = T.useRef(null),
      x = qe(s, p),
      v = T.useRef(null);
    return (
      T.useEffect(() => {
        const h = v.current;
        ((v.current = r?.current || p.current),
          h !== v.current && d.onAnchorChange(v.current));
      }),
      r ? null : y.jsx(ye.div, { ...f, ref: x })
    );
  });
Hp.displayName = Dp;
var wu = "PopperContent",
  [vx, yx] = _p(wu),
  Up = T.forwardRef((i, s) => {
    const {
        __scopePopper: c,
        side: r = "bottom",
        sideOffset: f = 0,
        align: d = "center",
        alignOffset: p = 0,
        arrowPadding: x = 0,
        avoidCollisions: v = !0,
        collisionBoundary: h = [],
        collisionPadding: b = 0,
        sticky: m = "partial",
        hideWhenDetached: N = !1,
        updatePositionStrategy: O = "optimized",
        onPlaced: R,
        ...H
      } = i,
      U = jp(wu, c),
      [q, F] = T.useState(null),
      K = qe(s, (at) => F(at)),
      [$, P] = T.useState(null),
      I = Rp($),
      Z = I?.width ?? 0,
      X = I?.height ?? 0,
      dt = r + (d !== "center" ? "-" + d : ""),
      bt =
        typeof b == "number"
          ? b
          : { top: 0, right: 0, bottom: 0, left: 0, ...b },
      wt = Array.isArray(h) ? h : [h],
      ht = wt.length > 0,
      pt = { padding: bt, boundary: wt.filter(xx), altBoundary: ht },
      {
        refs: vt,
        floatingStyles: xt,
        placement: A,
        isPositioned: k,
        middlewareData: j,
      } = ox({
        strategy: "fixed",
        placement: dt,
        whileElementsMounted: (...at) =>
          Fb(...at, { animationFrame: O === "always" }),
        elements: { reference: U.anchor },
        middleware: [
          rx({ mainAxis: f + X, alignmentAxis: p }),
          v &&
            cx({
              mainAxis: !0,
              crossAxis: !1,
              limiter: m === "partial" ? ux() : void 0,
              ...pt,
            }),
          v && fx({ ...pt }),
          dx({
            ...pt,
            apply: ({
              elements: at,
              rects: ut,
              availableWidth: Ct,
              availableHeight: ae,
            }) => {
              const { width: me, height: le } = ut.reference,
                yn = at.floating.style;
              (yn.setProperty("--radix-popper-available-width", `${Ct}px`),
                yn.setProperty("--radix-popper-available-height", `${ae}px`),
                yn.setProperty("--radix-popper-anchor-width", `${me}px`),
                yn.setProperty("--radix-popper-anchor-height", `${le}px`));
            },
          }),
          $ && hx({ element: $, padding: x }),
          Sx({ arrowWidth: Z, arrowHeight: X }),
          N && mx({ strategy: "referenceHidden", ...pt }),
        ],
      }),
      [it, rt] = Yp(A),
      w = Vi(R);
    Ga(() => {
      k && w?.();
    }, [k, w]);
    const Y = j.arrow?.x,
      L = j.arrow?.y,
      Q = j.arrow?.centerOffset !== 0,
      [W, ot] = T.useState();
    return (
      Ga(() => {
        q && ot(window.getComputedStyle(q).zIndex);
      }, [q]),
      y.jsx("div", {
        ref: vt.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...xt,
          transform: k ? xt.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: W,
          "--radix-popper-transform-origin": [
            j.transformOrigin?.x,
            j.transformOrigin?.y,
          ].join(" "),
          ...(j.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: i.dir,
        children: y.jsx(vx, {
          scope: c,
          placedSide: it,
          onArrowChange: P,
          arrowX: Y,
          arrowY: L,
          shouldHideArrow: Q,
          children: y.jsx(ye.div, {
            "data-side": it,
            "data-align": rt,
            ...H,
            ref: K,
            style: { ...H.style, animation: k ? void 0 : "none" },
          }),
        }),
      })
    );
  });
Up.displayName = wu;
var Bp = "PopperArrow",
  bx = { top: "bottom", right: "left", bottom: "top", left: "right" },
  Lp = T.forwardRef(function (s, c) {
    const { __scopePopper: r, ...f } = s,
      d = yx(Bp, r),
      p = bx[d.placedSide];
    return y.jsx("span", {
      ref: d.onArrowChange,
      style: {
        position: "absolute",
        left: d.arrowX,
        top: d.arrowY,
        [p]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[d.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[d.placedSide],
        visibility: d.shouldHideArrow ? "hidden" : void 0,
      },
      children: y.jsx(gx, {
        ...f,
        ref: c,
        style: { ...f.style, display: "block" },
      }),
    });
  });
Lp.displayName = Bp;
function xx(i) {
  return i !== null;
}
var Sx = (i) => ({
  name: "transformOrigin",
  options: i,
  fn(s) {
    const { placement: c, rects: r, middlewareData: f } = s,
      p = f.arrow?.centerOffset !== 0,
      x = p ? 0 : i.arrowWidth,
      v = p ? 0 : i.arrowHeight,
      [h, b] = Yp(c),
      m = { start: "0%", center: "50%", end: "100%" }[b],
      N = (f.arrow?.x ?? 0) + x / 2,
      O = (f.arrow?.y ?? 0) + v / 2;
    let R = "",
      H = "";
    return (
      h === "bottom"
        ? ((R = p ? m : `${N}px`), (H = `${-v}px`))
        : h === "top"
          ? ((R = p ? m : `${N}px`), (H = `${r.floating.height + v}px`))
          : h === "right"
            ? ((R = `${-v}px`), (H = p ? m : `${O}px`))
            : h === "left" &&
              ((R = `${r.floating.width + v}px`), (H = p ? m : `${O}px`)),
      { data: { x: R, y: H } }
    );
  },
});
function Yp(i) {
  const [s, c = "center"] = i.split("-");
  return [s, c];
}
var wx = Hp,
  Ex = Up,
  Tx = Lp;
function Ax(i, s) {
  return T.useReducer((c, r) => s[c][r] ?? c, i);
}
var Eu = (i) => {
  const { present: s, children: c } = i,
    r = Nx(s),
    f =
      typeof c == "function" ? c({ present: r.isPresent }) : T.Children.only(c),
    d = qe(r.ref, Cx(f));
  return typeof c == "function" || r.isPresent
    ? T.cloneElement(f, { ref: d })
    : null;
};
Eu.displayName = "Presence";
function Nx(i) {
  const [s, c] = T.useState(),
    r = T.useRef(null),
    f = T.useRef(i),
    d = T.useRef("none"),
    p = i ? "mounted" : "unmounted",
    [x, v] = Ax(p, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    T.useEffect(() => {
      const h = us(r.current);
      d.current = x === "mounted" ? h : "none";
    }, [x]),
    Ga(() => {
      const h = r.current,
        b = f.current;
      if (b !== i) {
        const N = d.current,
          O = us(h);
        (i
          ? v("MOUNT")
          : O === "none" || h?.display === "none"
            ? v("UNMOUNT")
            : v(b && N !== O ? "ANIMATION_OUT" : "UNMOUNT"),
          (f.current = i));
      }
    }, [i, v]),
    Ga(() => {
      if (s) {
        let h;
        const b = s.ownerDocument.defaultView ?? window,
          m = (O) => {
            const H = us(r.current).includes(CSS.escape(O.animationName));
            if (O.target === s && H && (v("ANIMATION_END"), !f.current)) {
              const U = s.style.animationFillMode;
              ((s.style.animationFillMode = "forwards"),
                (h = b.setTimeout(() => {
                  s.style.animationFillMode === "forwards" &&
                    (s.style.animationFillMode = U);
                })));
            }
          },
          N = (O) => {
            O.target === s && (d.current = us(r.current));
          };
        return (
          s.addEventListener("animationstart", N),
          s.addEventListener("animationcancel", m),
          s.addEventListener("animationend", m),
          () => {
            (b.clearTimeout(h),
              s.removeEventListener("animationstart", N),
              s.removeEventListener("animationcancel", m),
              s.removeEventListener("animationend", m));
          }
        );
      } else v("ANIMATION_END");
    }, [s, v]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(x),
      ref: T.useCallback((h) => {
        ((r.current = h ? getComputedStyle(h) : null), c(h));
      }, []),
    }
  );
}
function us(i) {
  return i?.animationName || "none";
}
function Cx(i) {
  let s = Object.getOwnPropertyDescriptor(i.props, "ref")?.get,
    c = s && "isReactWarning" in s && s.isReactWarning;
  return c
    ? i.ref
    : ((s = Object.getOwnPropertyDescriptor(i, "ref")?.get),
      (c = s && "isReactWarning" in s && s.isReactWarning),
      c ? i.props.ref : i.props.ref || i.ref);
}
var Ox = hu[" useInsertionEffect ".trim().toString()] || Ga;
function qp({ prop: i, defaultProp: s, onChange: c = () => {}, caller: r }) {
  const [f, d, p] = Rx({ defaultProp: s, onChange: c }),
    x = i !== void 0,
    v = x ? i : f;
  {
    const b = T.useRef(i !== void 0);
    T.useEffect(() => {
      const m = b.current;
      (m !== x &&
        console.warn(
          `${r} is changing from ${m ? "controlled" : "uncontrolled"} to ${x ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`,
        ),
        (b.current = x));
    }, [x, r]);
  }
  const h = T.useCallback(
    (b) => {
      if (x) {
        const m = zx(b) ? b(i) : b;
        m !== i && p.current?.(m);
      } else d(b);
    },
    [x, i, d, p],
  );
  return [v, h];
}
function Rx({ defaultProp: i, onChange: s }) {
  const [c, r] = T.useState(i),
    f = T.useRef(c),
    d = T.useRef(s);
  return (
    Ox(() => {
      d.current = s;
    }, [s]),
    T.useEffect(() => {
      f.current !== c && (d.current?.(c), (f.current = c));
    }, [c, f]),
    [c, r, d]
  );
}
function zx(i) {
  return typeof i == "function";
}
var _x = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  Mx = "VisuallyHidden",
  kp = T.forwardRef((i, s) =>
    y.jsx(ye.span, { ...i, ref: s, style: { ..._x, ...i.style } }),
  );
kp.displayName = Mx;
var jx = kp,
  [Cs] = Bl("Tooltip", [Mp]),
  Tu = Mp(),
  Gp = "TooltipProvider",
  Dx = 700,
  Jh = "tooltip.open",
  [Hx, Vp] = Cs(Gp),
  Xp = (i) => {
    const {
        __scopeTooltip: s,
        delayDuration: c = Dx,
        skipDelayDuration: r = 300,
        disableHoverableContent: f = !1,
        children: d,
      } = i,
      p = T.useRef(!0),
      x = T.useRef(!1),
      v = T.useRef(0);
    return (
      T.useEffect(() => {
        const h = v.current;
        return () => window.clearTimeout(h);
      }, []),
      y.jsx(Hx, {
        scope: s,
        isOpenDelayedRef: p,
        delayDuration: c,
        onOpen: T.useCallback(() => {
          (window.clearTimeout(v.current), (p.current = !1));
        }, []),
        onClose: T.useCallback(() => {
          (window.clearTimeout(v.current),
            (v.current = window.setTimeout(() => (p.current = !0), r)));
        }, [r]),
        isPointerInTransitRef: x,
        onPointerInTransitChange: T.useCallback((h) => {
          x.current = h;
        }, []),
        disableHoverableContent: f,
        children: d,
      })
    );
  };
Xp.displayName = Gp;
var Qp = "Tooltip",
  [fS, Os] = Cs(Qp),
  ru = "TooltipTrigger",
  Ux = T.forwardRef((i, s) => {
    const { __scopeTooltip: c, ...r } = i,
      f = Os(ru, c),
      d = Vp(ru, c),
      p = Tu(c),
      x = T.useRef(null),
      v = qe(s, x, f.onTriggerChange),
      h = T.useRef(!1),
      b = T.useRef(!1),
      m = T.useCallback(() => (h.current = !1), []);
    return (
      T.useEffect(
        () => () => document.removeEventListener("pointerup", m),
        [m],
      ),
      y.jsx(wx, {
        asChild: !0,
        ...p,
        children: y.jsx(ye.button, {
          "aria-describedby": f.open ? f.contentId : void 0,
          "data-state": f.stateAttribute,
          ...r,
          ref: v,
          onPointerMove: ne(i.onPointerMove, (N) => {
            N.pointerType !== "touch" &&
              !b.current &&
              !d.isPointerInTransitRef.current &&
              (f.onTriggerEnter(), (b.current = !0));
          }),
          onPointerLeave: ne(i.onPointerLeave, () => {
            (f.onTriggerLeave(), (b.current = !1));
          }),
          onPointerDown: ne(i.onPointerDown, () => {
            (f.open && f.onClose(),
              (h.current = !0),
              document.addEventListener("pointerup", m, { once: !0 }));
          }),
          onFocus: ne(i.onFocus, () => {
            h.current || f.onOpen();
          }),
          onBlur: ne(i.onBlur, f.onClose),
          onClick: ne(i.onClick, f.onClose),
        }),
      })
    );
  });
Ux.displayName = ru;
var Bx = "TooltipPortal",
  [dS, Lx] = Cs(Bx, { forceMount: void 0 }),
  Ul = "TooltipContent",
  Yx = T.forwardRef((i, s) => {
    const c = Lx(Ul, i.__scopeTooltip),
      { forceMount: r = c.forceMount, side: f = "top", ...d } = i,
      p = Os(Ul, i.__scopeTooltip);
    return y.jsx(Eu, {
      present: r || p.open,
      children: p.disableHoverableContent
        ? y.jsx(Zp, { side: f, ...d, ref: s })
        : y.jsx(qx, { side: f, ...d, ref: s }),
    });
  }),
  qx = T.forwardRef((i, s) => {
    const c = Os(Ul, i.__scopeTooltip),
      r = Vp(Ul, i.__scopeTooltip),
      f = T.useRef(null),
      d = qe(s, f),
      [p, x] = T.useState(null),
      { trigger: v, onClose: h } = c,
      b = f.current,
      { onPointerInTransitChange: m } = r,
      N = T.useCallback(() => {
        (x(null), m(!1));
      }, [m]),
      O = T.useCallback(
        (R, H) => {
          const U = R.currentTarget,
            q = { x: R.clientX, y: R.clientY },
            F = Qx(q, U.getBoundingClientRect()),
            K = Zx(q, F),
            $ = Kx(H.getBoundingClientRect()),
            P = $x([...K, ...$]);
          (x(P), m(!0));
        },
        [m],
      );
    return (
      T.useEffect(() => () => N(), [N]),
      T.useEffect(() => {
        if (v && b) {
          const R = (U) => O(U, b),
            H = (U) => O(U, v);
          return (
            v.addEventListener("pointerleave", R),
            b.addEventListener("pointerleave", H),
            () => {
              (v.removeEventListener("pointerleave", R),
                b.removeEventListener("pointerleave", H));
            }
          );
        }
      }, [v, b, O, N]),
      T.useEffect(() => {
        if (p) {
          const R = (H) => {
            const U = H.target,
              q = { x: H.clientX, y: H.clientY },
              F = v?.contains(U) || b?.contains(U),
              K = !Jx(q, p);
            F ? N() : K && (N(), h());
          };
          return (
            document.addEventListener("pointermove", R),
            () => document.removeEventListener("pointermove", R)
          );
        }
      }, [v, b, p, h, N]),
      y.jsx(Zp, { ...i, ref: d })
    );
  }),
  [kx, Gx] = Cs(Qp, { isInside: !1 }),
  Vx = G0("TooltipContent"),
  Zp = T.forwardRef((i, s) => {
    const {
        __scopeTooltip: c,
        children: r,
        "aria-label": f,
        onEscapeKeyDown: d,
        onPointerDownOutside: p,
        ...x
      } = i,
      v = Os(Ul, c),
      h = Tu(c),
      { onClose: b } = v;
    return (
      T.useEffect(
        () => (
          document.addEventListener(Jh, b),
          () => document.removeEventListener(Jh, b)
        ),
        [b],
      ),
      T.useEffect(() => {
        if (v.trigger) {
          const m = (N) => {
            N.target?.contains(v.trigger) && b();
          };
          return (
            window.addEventListener("scroll", m, { capture: !0 }),
            () => window.removeEventListener("scroll", m, { capture: !0 })
          );
        }
      }, [v.trigger, b]),
      y.jsx(pp, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: d,
        onPointerDownOutside: p,
        onFocusOutside: (m) => m.preventDefault(),
        onDismiss: b,
        children: y.jsxs(Ex, {
          "data-state": v.stateAttribute,
          ...h,
          ...x,
          ref: s,
          style: {
            ...x.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            y.jsx(Vx, { children: r }),
            y.jsx(kx, {
              scope: c,
              isInside: !0,
              children: y.jsx(jx, {
                id: v.contentId,
                role: "tooltip",
                children: f || r,
              }),
            }),
          ],
        }),
      })
    );
  });
Yx.displayName = Ul;
var Kp = "TooltipArrow",
  Xx = T.forwardRef((i, s) => {
    const { __scopeTooltip: c, ...r } = i,
      f = Tu(c);
    return Gx(Kp, c).isInside ? null : y.jsx(Tx, { ...f, ...r, ref: s });
  });
Xx.displayName = Kp;
function Qx(i, s) {
  const c = Math.abs(s.top - i.y),
    r = Math.abs(s.bottom - i.y),
    f = Math.abs(s.right - i.x),
    d = Math.abs(s.left - i.x);
  switch (Math.min(c, r, f, d)) {
    case d:
      return "left";
    case f:
      return "right";
    case c:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function Zx(i, s, c = 5) {
  const r = [];
  switch (s) {
    case "top":
      r.push({ x: i.x - c, y: i.y + c }, { x: i.x + c, y: i.y + c });
      break;
    case "bottom":
      r.push({ x: i.x - c, y: i.y - c }, { x: i.x + c, y: i.y - c });
      break;
    case "left":
      r.push({ x: i.x + c, y: i.y - c }, { x: i.x + c, y: i.y + c });
      break;
    case "right":
      r.push({ x: i.x - c, y: i.y - c }, { x: i.x - c, y: i.y + c });
      break;
  }
  return r;
}
function Kx(i) {
  const { top: s, right: c, bottom: r, left: f } = i;
  return [
    { x: f, y: s },
    { x: c, y: s },
    { x: c, y: r },
    { x: f, y: r },
  ];
}
function Jx(i, s) {
  const { x: c, y: r } = i;
  let f = !1;
  for (let d = 0, p = s.length - 1; d < s.length; p = d++) {
    const x = s[d],
      v = s[p],
      h = x.x,
      b = x.y,
      m = v.x,
      N = v.y;
    b > r != N > r && c < ((m - h) * (r - b)) / (N - b) + h && (f = !f);
  }
  return f;
}
function $x(i) {
  const s = i.slice();
  return (
    s.sort((c, r) =>
      c.x < r.x ? -1 : c.x > r.x ? 1 : c.y < r.y ? -1 : c.y > r.y ? 1 : 0,
    ),
    Fx(s)
  );
}
function Fx(i) {
  if (i.length <= 1) return i.slice();
  const s = [];
  for (let r = 0; r < i.length; r++) {
    const f = i[r];
    for (; s.length >= 2; ) {
      const d = s[s.length - 1],
        p = s[s.length - 2];
      if ((d.x - p.x) * (f.y - p.y) >= (d.y - p.y) * (f.x - p.x)) s.pop();
      else break;
    }
    s.push(f);
  }
  s.pop();
  const c = [];
  for (let r = i.length - 1; r >= 0; r--) {
    const f = i[r];
    for (; c.length >= 2; ) {
      const d = c[c.length - 1],
        p = c[c.length - 2];
      if ((d.x - p.x) * (f.y - p.y) >= (d.y - p.y) * (f.x - p.x)) c.pop();
      else break;
    }
    c.push(f);
  }
  return (
    c.pop(),
    s.length === 1 && c.length === 1 && s[0].x === c[0].x && s[0].y === c[0].y
      ? s
      : s.concat(c)
  );
}
var Wx = Xp;
function Jp(i) {
  var s,
    c,
    r = "";
  if (typeof i == "string" || typeof i == "number") r += i;
  else if (typeof i == "object")
    if (Array.isArray(i)) {
      var f = i.length;
      for (s = 0; s < f; s++)
        i[s] && (c = Jp(i[s])) && (r && (r += " "), (r += c));
    } else for (c in i) i[c] && (r && (r += " "), (r += c));
  return r;
}
function $p() {
  for (var i, s, c = 0, r = "", f = arguments.length; c < f; c++)
    (i = arguments[c]) && (s = Jp(i)) && (r && (r += " "), (r += s));
  return r;
}
const Au = "-",
  Px = (i) => {
    const s = t1(i),
      { conflictingClassGroups: c, conflictingClassGroupModifiers: r } = i;
    return {
      getClassGroupId: (p) => {
        const x = p.split(Au);
        return (x[0] === "" && x.length !== 1 && x.shift(), Fp(x, s) || Ix(p));
      },
      getConflictingClassGroupIds: (p, x) => {
        const v = c[p] || [];
        return x && r[p] ? [...v, ...r[p]] : v;
      },
    };
  },
  Fp = (i, s) => {
    if (i.length === 0) return s.classGroupId;
    const c = i[0],
      r = s.nextPart.get(c),
      f = r ? Fp(i.slice(1), r) : void 0;
    if (f) return f;
    if (s.validators.length === 0) return;
    const d = i.join(Au);
    return s.validators.find(({ validator: p }) => p(d))?.classGroupId;
  },
  $h = /^\[(.+)\]$/,
  Ix = (i) => {
    if ($h.test(i)) {
      const s = $h.exec(i)[1],
        c = s?.substring(0, s.indexOf(":"));
      if (c) return "arbitrary.." + c;
    }
  },
  t1 = (i) => {
    const { theme: s, classGroups: c } = i,
      r = { nextPart: new Map(), validators: [] };
    for (const f in c) cu(c[f], r, f, s);
    return r;
  },
  cu = (i, s, c, r) => {
    i.forEach((f) => {
      if (typeof f == "string") {
        const d = f === "" ? s : Fh(s, f);
        d.classGroupId = c;
        return;
      }
      if (typeof f == "function") {
        if (e1(f)) {
          cu(f(r), s, c, r);
          return;
        }
        s.validators.push({ validator: f, classGroupId: c });
        return;
      }
      Object.entries(f).forEach(([d, p]) => {
        cu(p, Fh(s, d), c, r);
      });
    });
  },
  Fh = (i, s) => {
    let c = i;
    return (
      s.split(Au).forEach((r) => {
        (c.nextPart.has(r) ||
          c.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (c = c.nextPart.get(r)));
      }),
      c
    );
  },
  e1 = (i) => i.isThemeGetter,
  n1 = (i) => {
    if (i < 1) return { get: () => {}, set: () => {} };
    let s = 0,
      c = new Map(),
      r = new Map();
    const f = (d, p) => {
      (c.set(d, p), s++, s > i && ((s = 0), (r = c), (c = new Map())));
    };
    return {
      get(d) {
        let p = c.get(d);
        if (p !== void 0) return p;
        if ((p = r.get(d)) !== void 0) return (f(d, p), p);
      },
      set(d, p) {
        c.has(d) ? c.set(d, p) : f(d, p);
      },
    };
  },
  uu = "!",
  fu = ":",
  a1 = fu.length,
  l1 = (i) => {
    const { prefix: s, experimentalParseClassName: c } = i;
    let r = (f) => {
      const d = [];
      let p = 0,
        x = 0,
        v = 0,
        h;
      for (let R = 0; R < f.length; R++) {
        let H = f[R];
        if (p === 0 && x === 0) {
          if (H === fu) {
            (d.push(f.slice(v, R)), (v = R + a1));
            continue;
          }
          if (H === "/") {
            h = R;
            continue;
          }
        }
        H === "[" ? p++ : H === "]" ? p-- : H === "(" ? x++ : H === ")" && x--;
      }
      const b = d.length === 0 ? f : f.substring(v),
        m = i1(b),
        N = m !== b,
        O = h && h > v ? h - v : void 0;
      return {
        modifiers: d,
        hasImportantModifier: N,
        baseClassName: m,
        maybePostfixModifierPosition: O,
      };
    };
    if (s) {
      const f = s + fu,
        d = r;
      r = (p) =>
        p.startsWith(f)
          ? d(p.substring(f.length))
          : {
              isExternal: !0,
              modifiers: [],
              hasImportantModifier: !1,
              baseClassName: p,
              maybePostfixModifierPosition: void 0,
            };
    }
    if (c) {
      const f = r;
      r = (d) => c({ className: d, parseClassName: f });
    }
    return r;
  },
  i1 = (i) =>
    i.endsWith(uu)
      ? i.substring(0, i.length - 1)
      : i.startsWith(uu)
        ? i.substring(1)
        : i,
  o1 = (i) => {
    const s = Object.fromEntries(i.orderSensitiveModifiers.map((r) => [r, !0]));
    return (r) => {
      if (r.length <= 1) return r;
      const f = [];
      let d = [];
      return (
        r.forEach((p) => {
          p[0] === "[" || s[p] ? (f.push(...d.sort(), p), (d = [])) : d.push(p);
        }),
        f.push(...d.sort()),
        f
      );
    };
  },
  s1 = (i) => ({
    cache: n1(i.cacheSize),
    parseClassName: l1(i),
    sortModifiers: o1(i),
    ...Px(i),
  }),
  r1 = /\s+/,
  c1 = (i, s) => {
    const {
        parseClassName: c,
        getClassGroupId: r,
        getConflictingClassGroupIds: f,
        sortModifiers: d,
      } = s,
      p = [],
      x = i.trim().split(r1);
    let v = "";
    for (let h = x.length - 1; h >= 0; h -= 1) {
      const b = x[h],
        {
          isExternal: m,
          modifiers: N,
          hasImportantModifier: O,
          baseClassName: R,
          maybePostfixModifierPosition: H,
        } = c(b);
      if (m) {
        v = b + (v.length > 0 ? " " + v : v);
        continue;
      }
      let U = !!H,
        q = r(U ? R.substring(0, H) : R);
      if (!q) {
        if (!U) {
          v = b + (v.length > 0 ? " " + v : v);
          continue;
        }
        if (((q = r(R)), !q)) {
          v = b + (v.length > 0 ? " " + v : v);
          continue;
        }
        U = !1;
      }
      const F = d(N).join(":"),
        K = O ? F + uu : F,
        $ = K + q;
      if (p.includes($)) continue;
      p.push($);
      const P = f(q, U);
      for (let I = 0; I < P.length; ++I) {
        const Z = P[I];
        p.push(K + Z);
      }
      v = b + (v.length > 0 ? " " + v : v);
    }
    return v;
  };
function u1() {
  let i = 0,
    s,
    c,
    r = "";
  for (; i < arguments.length; )
    (s = arguments[i++]) && (c = Wp(s)) && (r && (r += " "), (r += c));
  return r;
}
const Wp = (i) => {
  if (typeof i == "string") return i;
  let s,
    c = "";
  for (let r = 0; r < i.length; r++)
    i[r] && (s = Wp(i[r])) && (c && (c += " "), (c += s));
  return c;
};
function f1(i, ...s) {
  let c,
    r,
    f,
    d = p;
  function p(v) {
    const h = s.reduce((b, m) => m(b), i());
    return ((c = s1(h)), (r = c.cache.get), (f = c.cache.set), (d = x), x(v));
  }
  function x(v) {
    const h = r(v);
    if (h) return h;
    const b = c1(v, c);
    return (f(v, b), b);
  }
  return function () {
    return d(u1.apply(null, arguments));
  };
}
const Pt = (i) => {
    const s = (c) => c[i] || [];
    return ((s.isThemeGetter = !0), s);
  },
  Pp = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  Ip = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  d1 = /^\d+\/\d+$/,
  m1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  h1 =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  p1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  g1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  v1 =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ml = (i) => d1.test(i),
  St = (i) => !!i && !Number.isNaN(Number(i)),
  pa = (i) => !!i && Number.isInteger(Number(i)),
  Wc = (i) => i.endsWith("%") && St(i.slice(0, -1)),
  Ln = (i) => m1.test(i),
  y1 = () => !0,
  b1 = (i) => h1.test(i) && !p1.test(i),
  tg = () => !1,
  x1 = (i) => g1.test(i),
  S1 = (i) => v1.test(i),
  w1 = (i) => !et(i) && !nt(i),
  E1 = (i) => ql(i, ag, tg),
  et = (i) => Pp.test(i),
  ka = (i) => ql(i, lg, b1),
  Pc = (i) => ql(i, O1, St),
  Wh = (i) => ql(i, eg, tg),
  T1 = (i) => ql(i, ng, S1),
  fs = (i) => ql(i, ig, x1),
  nt = (i) => Ip.test(i),
  Yi = (i) => kl(i, lg),
  A1 = (i) => kl(i, R1),
  Ph = (i) => kl(i, eg),
  N1 = (i) => kl(i, ag),
  C1 = (i) => kl(i, ng),
  ds = (i) => kl(i, ig, !0),
  ql = (i, s, c) => {
    const r = Pp.exec(i);
    return r ? (r[1] ? s(r[1]) : c(r[2])) : !1;
  },
  kl = (i, s, c = !1) => {
    const r = Ip.exec(i);
    return r ? (r[1] ? s(r[1]) : c) : !1;
  },
  eg = (i) => i === "position" || i === "percentage",
  ng = (i) => i === "image" || i === "url",
  ag = (i) => i === "length" || i === "size" || i === "bg-size",
  lg = (i) => i === "length",
  O1 = (i) => i === "number",
  R1 = (i) => i === "family-name",
  ig = (i) => i === "shadow",
  z1 = () => {
    const i = Pt("color"),
      s = Pt("font"),
      c = Pt("text"),
      r = Pt("font-weight"),
      f = Pt("tracking"),
      d = Pt("leading"),
      p = Pt("breakpoint"),
      x = Pt("container"),
      v = Pt("spacing"),
      h = Pt("radius"),
      b = Pt("shadow"),
      m = Pt("inset-shadow"),
      N = Pt("text-shadow"),
      O = Pt("drop-shadow"),
      R = Pt("blur"),
      H = Pt("perspective"),
      U = Pt("aspect"),
      q = Pt("ease"),
      F = Pt("animate"),
      K = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      $ = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      P = () => [...$(), nt, et],
      I = () => ["auto", "hidden", "clip", "visible", "scroll"],
      Z = () => ["auto", "contain", "none"],
      X = () => [nt, et, v],
      dt = () => [Ml, "full", "auto", ...X()],
      bt = () => [pa, "none", "subgrid", nt, et],
      wt = () => ["auto", { span: ["full", pa, nt, et] }, pa, nt, et],
      ht = () => [pa, "auto", nt, et],
      pt = () => ["auto", "min", "max", "fr", nt, et],
      vt = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      xt = () => [
        "start",
        "end",
        "center",
        "stretch",
        "center-safe",
        "end-safe",
      ],
      A = () => ["auto", ...X()],
      k = () => [
        Ml,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...X(),
      ],
      j = () => [i, nt, et],
      it = () => [...$(), Ph, Wh, { position: [nt, et] }],
      rt = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      w = () => ["auto", "cover", "contain", N1, E1, { size: [nt, et] }],
      Y = () => [Wc, Yi, ka],
      L = () => ["", "none", "full", h, nt, et],
      Q = () => ["", St, Yi, ka],
      W = () => ["solid", "dashed", "dotted", "double"],
      ot = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      at = () => [St, Wc, Ph, Wh],
      ut = () => ["", "none", R, nt, et],
      Ct = () => ["none", St, nt, et],
      ae = () => ["none", St, nt, et],
      me = () => [St, nt, et],
      le = () => [Ml, "full", ...X()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [Ln],
        breakpoint: [Ln],
        color: [y1],
        container: [Ln],
        "drop-shadow": [Ln],
        ease: ["in", "out", "in-out"],
        font: [w1],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [Ln],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: [
          "dramatic",
          "near",
          "normal",
          "midrange",
          "distant",
          "none",
        ],
        radius: [Ln],
        shadow: [Ln],
        spacing: ["px", St],
        text: [Ln],
        "text-shadow": [Ln],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", Ml, et, nt, U] }],
        container: ["container"],
        columns: [{ columns: [St, et, nt, x] }],
        "break-after": [{ "break-after": K() }],
        "break-before": [{ "break-before": K() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: P() }],
        overflow: [{ overflow: I() }],
        "overflow-x": [{ "overflow-x": I() }],
        "overflow-y": [{ "overflow-y": I() }],
        overscroll: [{ overscroll: Z() }],
        "overscroll-x": [{ "overscroll-x": Z() }],
        "overscroll-y": [{ "overscroll-y": Z() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: dt() }],
        "inset-x": [{ "inset-x": dt() }],
        "inset-y": [{ "inset-y": dt() }],
        start: [{ start: dt() }],
        end: [{ end: dt() }],
        top: [{ top: dt() }],
        right: [{ right: dt() }],
        bottom: [{ bottom: dt() }],
        left: [{ left: dt() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [pa, "auto", nt, et] }],
        basis: [{ basis: [Ml, "full", "auto", x, ...X()] }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [St, Ml, "auto", "initial", "none", et] }],
        grow: [{ grow: ["", St, nt, et] }],
        shrink: [{ shrink: ["", St, nt, et] }],
        order: [{ order: [pa, "first", "last", "none", nt, et] }],
        "grid-cols": [{ "grid-cols": bt() }],
        "col-start-end": [{ col: wt() }],
        "col-start": [{ "col-start": ht() }],
        "col-end": [{ "col-end": ht() }],
        "grid-rows": [{ "grid-rows": bt() }],
        "row-start-end": [{ row: wt() }],
        "row-start": [{ "row-start": ht() }],
        "row-end": [{ "row-end": ht() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": pt() }],
        "auto-rows": [{ "auto-rows": pt() }],
        gap: [{ gap: X() }],
        "gap-x": [{ "gap-x": X() }],
        "gap-y": [{ "gap-y": X() }],
        "justify-content": [{ justify: [...vt(), "normal"] }],
        "justify-items": [{ "justify-items": [...xt(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...xt()] }],
        "align-content": [{ content: ["normal", ...vt()] }],
        "align-items": [{ items: [...xt(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...xt(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": vt() }],
        "place-items": [{ "place-items": [...xt(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...xt()] }],
        p: [{ p: X() }],
        px: [{ px: X() }],
        py: [{ py: X() }],
        ps: [{ ps: X() }],
        pe: [{ pe: X() }],
        pt: [{ pt: X() }],
        pr: [{ pr: X() }],
        pb: [{ pb: X() }],
        pl: [{ pl: X() }],
        m: [{ m: A() }],
        mx: [{ mx: A() }],
        my: [{ my: A() }],
        ms: [{ ms: A() }],
        me: [{ me: A() }],
        mt: [{ mt: A() }],
        mr: [{ mr: A() }],
        mb: [{ mb: A() }],
        ml: [{ ml: A() }],
        "space-x": [{ "space-x": X() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": X() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: k() }],
        w: [{ w: [x, "screen", ...k()] }],
        "min-w": [{ "min-w": [x, "screen", "none", ...k()] }],
        "max-w": [
          { "max-w": [x, "screen", "none", "prose", { screen: [p] }, ...k()] },
        ],
        h: [{ h: ["screen", "lh", ...k()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ...k()] }],
        "max-h": [{ "max-h": ["screen", "lh", ...k()] }],
        "font-size": [{ text: ["base", c, Yi, ka] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [r, nt, Pc] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              Wc,
              et,
            ],
          },
        ],
        "font-family": [{ font: [A1, et, s] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [f, nt, et] }],
        "line-clamp": [{ "line-clamp": [St, "none", nt, Pc] }],
        leading: [{ leading: [d, ...X()] }],
        "list-image": [{ "list-image": ["none", nt, et] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", nt, et] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "placeholder-color": [{ placeholder: j() }],
        "text-color": [{ text: j() }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...W(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: [St, "from-font", "auto", nt, ka] },
        ],
        "text-decoration-color": [{ decoration: j() }],
        "underline-offset": [{ "underline-offset": [St, "auto", nt, et] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: X() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              nt,
              et,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", nt, et] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: it() }],
        "bg-repeat": [{ bg: rt() }],
        "bg-size": [{ bg: w() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [
                  { to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
                  pa,
                  nt,
                  et,
                ],
                radial: ["", nt, et],
                conic: [pa, nt, et],
              },
              C1,
              T1,
            ],
          },
        ],
        "bg-color": [{ bg: j() }],
        "gradient-from-pos": [{ from: Y() }],
        "gradient-via-pos": [{ via: Y() }],
        "gradient-to-pos": [{ to: Y() }],
        "gradient-from": [{ from: j() }],
        "gradient-via": [{ via: j() }],
        "gradient-to": [{ to: j() }],
        rounded: [{ rounded: L() }],
        "rounded-s": [{ "rounded-s": L() }],
        "rounded-e": [{ "rounded-e": L() }],
        "rounded-t": [{ "rounded-t": L() }],
        "rounded-r": [{ "rounded-r": L() }],
        "rounded-b": [{ "rounded-b": L() }],
        "rounded-l": [{ "rounded-l": L() }],
        "rounded-ss": [{ "rounded-ss": L() }],
        "rounded-se": [{ "rounded-se": L() }],
        "rounded-ee": [{ "rounded-ee": L() }],
        "rounded-es": [{ "rounded-es": L() }],
        "rounded-tl": [{ "rounded-tl": L() }],
        "rounded-tr": [{ "rounded-tr": L() }],
        "rounded-br": [{ "rounded-br": L() }],
        "rounded-bl": [{ "rounded-bl": L() }],
        "border-w": [{ border: Q() }],
        "border-w-x": [{ "border-x": Q() }],
        "border-w-y": [{ "border-y": Q() }],
        "border-w-s": [{ "border-s": Q() }],
        "border-w-e": [{ "border-e": Q() }],
        "border-w-t": [{ "border-t": Q() }],
        "border-w-r": [{ "border-r": Q() }],
        "border-w-b": [{ "border-b": Q() }],
        "border-w-l": [{ "border-l": Q() }],
        "divide-x": [{ "divide-x": Q() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": Q() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...W(), "hidden", "none"] }],
        "divide-style": [{ divide: [...W(), "hidden", "none"] }],
        "border-color": [{ border: j() }],
        "border-color-x": [{ "border-x": j() }],
        "border-color-y": [{ "border-y": j() }],
        "border-color-s": [{ "border-s": j() }],
        "border-color-e": [{ "border-e": j() }],
        "border-color-t": [{ "border-t": j() }],
        "border-color-r": [{ "border-r": j() }],
        "border-color-b": [{ "border-b": j() }],
        "border-color-l": [{ "border-l": j() }],
        "divide-color": [{ divide: j() }],
        "outline-style": [{ outline: [...W(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [St, nt, et] }],
        "outline-w": [{ outline: ["", St, Yi, ka] }],
        "outline-color": [{ outline: j() }],
        shadow: [{ shadow: ["", "none", b, ds, fs] }],
        "shadow-color": [{ shadow: j() }],
        "inset-shadow": [{ "inset-shadow": ["none", m, ds, fs] }],
        "inset-shadow-color": [{ "inset-shadow": j() }],
        "ring-w": [{ ring: Q() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: j() }],
        "ring-offset-w": [{ "ring-offset": [St, ka] }],
        "ring-offset-color": [{ "ring-offset": j() }],
        "inset-ring-w": [{ "inset-ring": Q() }],
        "inset-ring-color": [{ "inset-ring": j() }],
        "text-shadow": [{ "text-shadow": ["none", N, ds, fs] }],
        "text-shadow-color": [{ "text-shadow": j() }],
        opacity: [{ opacity: [St, nt, et] }],
        "mix-blend": [
          { "mix-blend": [...ot(), "plus-darker", "plus-lighter"] },
        ],
        "bg-blend": [{ "bg-blend": ot() }],
        "mask-clip": [
          {
            "mask-clip": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
          "mask-no-clip",
        ],
        "mask-composite": [
          { mask: ["add", "subtract", "intersect", "exclude"] },
        ],
        "mask-image-linear-pos": [{ "mask-linear": [St] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": at() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": at() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": j() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": j() }],
        "mask-image-t-from-pos": [{ "mask-t-from": at() }],
        "mask-image-t-to-pos": [{ "mask-t-to": at() }],
        "mask-image-t-from-color": [{ "mask-t-from": j() }],
        "mask-image-t-to-color": [{ "mask-t-to": j() }],
        "mask-image-r-from-pos": [{ "mask-r-from": at() }],
        "mask-image-r-to-pos": [{ "mask-r-to": at() }],
        "mask-image-r-from-color": [{ "mask-r-from": j() }],
        "mask-image-r-to-color": [{ "mask-r-to": j() }],
        "mask-image-b-from-pos": [{ "mask-b-from": at() }],
        "mask-image-b-to-pos": [{ "mask-b-to": at() }],
        "mask-image-b-from-color": [{ "mask-b-from": j() }],
        "mask-image-b-to-color": [{ "mask-b-to": j() }],
        "mask-image-l-from-pos": [{ "mask-l-from": at() }],
        "mask-image-l-to-pos": [{ "mask-l-to": at() }],
        "mask-image-l-from-color": [{ "mask-l-from": j() }],
        "mask-image-l-to-color": [{ "mask-l-to": j() }],
        "mask-image-x-from-pos": [{ "mask-x-from": at() }],
        "mask-image-x-to-pos": [{ "mask-x-to": at() }],
        "mask-image-x-from-color": [{ "mask-x-from": j() }],
        "mask-image-x-to-color": [{ "mask-x-to": j() }],
        "mask-image-y-from-pos": [{ "mask-y-from": at() }],
        "mask-image-y-to-pos": [{ "mask-y-to": at() }],
        "mask-image-y-from-color": [{ "mask-y-from": j() }],
        "mask-image-y-to-color": [{ "mask-y-to": j() }],
        "mask-image-radial": [{ "mask-radial": [nt, et] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": at() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": at() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": j() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": j() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          {
            "mask-radial": [
              { closest: ["side", "corner"], farthest: ["side", "corner"] },
            ],
          },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": $() }],
        "mask-image-conic-pos": [{ "mask-conic": [St] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": at() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": at() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": j() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": j() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          {
            "mask-origin": [
              "border",
              "padding",
              "content",
              "fill",
              "stroke",
              "view",
            ],
          },
        ],
        "mask-position": [{ mask: it() }],
        "mask-repeat": [{ mask: rt() }],
        "mask-size": [{ mask: w() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", nt, et] }],
        filter: [{ filter: ["", "none", nt, et] }],
        blur: [{ blur: ut() }],
        brightness: [{ brightness: [St, nt, et] }],
        contrast: [{ contrast: [St, nt, et] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", O, ds, fs] }],
        "drop-shadow-color": [{ "drop-shadow": j() }],
        grayscale: [{ grayscale: ["", St, nt, et] }],
        "hue-rotate": [{ "hue-rotate": [St, nt, et] }],
        invert: [{ invert: ["", St, nt, et] }],
        saturate: [{ saturate: [St, nt, et] }],
        sepia: [{ sepia: ["", St, nt, et] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", nt, et] }],
        "backdrop-blur": [{ "backdrop-blur": ut() }],
        "backdrop-brightness": [{ "backdrop-brightness": [St, nt, et] }],
        "backdrop-contrast": [{ "backdrop-contrast": [St, nt, et] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", St, nt, et] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [St, nt, et] }],
        "backdrop-invert": [{ "backdrop-invert": ["", St, nt, et] }],
        "backdrop-opacity": [{ "backdrop-opacity": [St, nt, et] }],
        "backdrop-saturate": [{ "backdrop-saturate": [St, nt, et] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", St, nt, et] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": X() }],
        "border-spacing-x": [{ "border-spacing-x": X() }],
        "border-spacing-y": [{ "border-spacing-y": X() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "",
              "all",
              "colors",
              "opacity",
              "shadow",
              "transform",
              "none",
              nt,
              et,
            ],
          },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [St, "initial", nt, et] }],
        ease: [{ ease: ["linear", "initial", q, nt, et] }],
        delay: [{ delay: [St, nt, et] }],
        animate: [{ animate: ["none", F, nt, et] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [H, nt, et] }],
        "perspective-origin": [{ "perspective-origin": P() }],
        rotate: [{ rotate: Ct() }],
        "rotate-x": [{ "rotate-x": Ct() }],
        "rotate-y": [{ "rotate-y": Ct() }],
        "rotate-z": [{ "rotate-z": Ct() }],
        scale: [{ scale: ae() }],
        "scale-x": [{ "scale-x": ae() }],
        "scale-y": [{ "scale-y": ae() }],
        "scale-z": [{ "scale-z": ae() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: me() }],
        "skew-x": [{ "skew-x": me() }],
        "skew-y": [{ "skew-y": me() }],
        transform: [{ transform: [nt, et, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: P() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: le() }],
        "translate-x": [{ "translate-x": le() }],
        "translate-y": [{ "translate-y": le() }],
        "translate-z": [{ "translate-z": le() }],
        "translate-none": ["translate-none"],
        accent: [{ accent: j() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: j() }],
        "color-scheme": [
          {
            scheme: [
              "normal",
              "dark",
              "light",
              "light-dark",
              "only-dark",
              "only-light",
            ],
          },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              nt,
              et,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": X() }],
        "scroll-mx": [{ "scroll-mx": X() }],
        "scroll-my": [{ "scroll-my": X() }],
        "scroll-ms": [{ "scroll-ms": X() }],
        "scroll-me": [{ "scroll-me": X() }],
        "scroll-mt": [{ "scroll-mt": X() }],
        "scroll-mr": [{ "scroll-mr": X() }],
        "scroll-mb": [{ "scroll-mb": X() }],
        "scroll-ml": [{ "scroll-ml": X() }],
        "scroll-p": [{ "scroll-p": X() }],
        "scroll-px": [{ "scroll-px": X() }],
        "scroll-py": [{ "scroll-py": X() }],
        "scroll-ps": [{ "scroll-ps": X() }],
        "scroll-pe": [{ "scroll-pe": X() }],
        "scroll-pt": [{ "scroll-pt": X() }],
        "scroll-pr": [{ "scroll-pr": X() }],
        "scroll-pb": [{ "scroll-pb": X() }],
        "scroll-pl": [{ "scroll-pl": X() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          {
            "will-change": ["auto", "scroll", "contents", "transform", nt, et],
          },
        ],
        fill: [{ fill: ["none", ...j()] }],
        "stroke-w": [{ stroke: [St, Yi, ka, Pc] }],
        stroke: [{ stroke: ["none", ...j()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": [
          "translate",
          "translate-x",
          "translate-y",
          "translate-z",
        ],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  _1 = f1(z1);
function vn(...i) {
  return _1($p(i));
}
function M1({ delayDuration: i = 0, ...s }) {
  return y.jsx(Wx, {
    "data-loc": "client/src/components/ui/tooltip.tsx:11",
    "data-slot": "tooltip-provider",
    delayDuration: i,
    ...s,
  });
}
const Ih = (i) => (typeof i == "boolean" ? `${i}` : i === 0 ? "0" : i),
  tp = $p,
  j1 = (i, s) => (c) => {
    var r;
    if (s?.variants == null) return tp(i, c?.class, c?.className);
    const { variants: f, defaultVariants: d } = s,
      p = Object.keys(f).map((h) => {
        const b = c?.[h],
          m = d?.[h];
        if (b === null) return null;
        const N = Ih(b) || Ih(m);
        return f[h][N];
      }),
      x =
        c &&
        Object.entries(c).reduce((h, b) => {
          let [m, N] = b;
          return (N === void 0 || (h[m] = N), h);
        }, {}),
      v =
        s == null || (r = s.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((h, b) => {
              let { class: m, className: N, ...O } = b;
              return Object.entries(O).every((R) => {
                let [H, U] = R;
                return Array.isArray(U)
                  ? U.includes({ ...d, ...x }[H])
                  : { ...d, ...x }[H] === U;
              })
                ? [...h, m, N]
                : h;
            }, []);
    return tp(i, p, v, c?.class, c?.className);
  },
  D1 = j1(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
          outline:
            "border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent dark:hover:bg-accent/50",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-9 px-4 py-2 has-[>svg]:px-3",
          sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
          lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
          icon: "size-9",
          "icon-sm": "size-8",
          "icon-lg": "size-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  );
function xs({ className: i, variant: s, size: c, asChild: r = !1, ...f }) {
  const d = r ? q0 : "button";
  return y.jsx(d, {
    "data-loc": "client/src/components/ui/button.tsx:52",
    "data-slot": "button",
    className: vn(D1({ variant: s, size: c, className: i })),
    ...f,
  });
}
function H1({ className: i, ...s }) {
  return y.jsx("div", {
    "data-loc": "client/src/components/ui/card.tsx:7",
    "data-slot": "card",
    className: vn(
      "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
      i,
    ),
    ...s,
  });
}
function U1({ className: i, ...s }) {
  return y.jsx("div", {
    "data-loc": "client/src/components/ui/card.tsx:66",
    "data-slot": "card-content",
    className: vn("px-6", i),
    ...s,
  });
}
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B1 = (i) => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  og = (...i) => i.filter((s, c, r) => !!s && r.indexOf(s) === c).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var L1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y1 = T.forwardRef(
  (
    {
      color: i = "currentColor",
      size: s = 24,
      strokeWidth: c = 2,
      absoluteStrokeWidth: r,
      className: f = "",
      children: d,
      iconNode: p,
      ...x
    },
    v,
  ) =>
    T.createElement(
      "svg",
      {
        ref: v,
        ...L1,
        width: s,
        height: s,
        stroke: i,
        strokeWidth: r ? (Number(c) * 24) / Number(s) : c,
        className: og("lucide", f),
        ...x,
      },
      [
        ...p.map(([h, b]) => T.createElement(h, b)),
        ...(Array.isArray(d) ? d : [d]),
      ],
    ),
);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kn = (i, s) => {
  const c = T.forwardRef(({ className: r, ...f }, d) =>
    T.createElement(Y1, {
      ref: d,
      iconNode: s,
      className: og(`lucide-${B1(i)}`, r),
      ...f,
    }),
  );
  return ((c.displayName = `${i}`), c);
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sg = kn("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q1 = kn("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k1 = kn("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G1 = kn("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V1 = kn("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X1 = kn("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q1 = kn("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z1 = kn("RotateCcw", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K1 = kn("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
function J1(i, s) {
  if (i instanceof RegExp) return { keys: !1, pattern: i };
  var c,
    r,
    f,
    d,
    p = [],
    x = "",
    v = i.split("/");
  for (v[0] || v.shift(); (f = v.shift()); )
    ((c = f[0]),
      c === "*"
        ? (p.push(c), (x += f[1] === "?" ? "(?:/(.*))?" : "/(.*)"))
        : c === ":"
          ? ((r = f.indexOf("?", 1)),
            (d = f.indexOf(".", 1)),
            p.push(f.substring(1, ~r ? r : ~d ? d : f.length)),
            (x += ~r && !~d ? "(?:/([^/]+?))?" : "/([^/]+?)"),
            ~d && (x += (~r ? "?" : "") + "\\" + f.substring(d)))
          : (x += "/" + f));
  return {
    keys: p,
    pattern: new RegExp("^" + x + (s ? "(?=$|/)" : "/?$"), "i"),
  };
}
var Ic = { exports: {} },
  tu = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ep;
function $1() {
  if (ep) return tu;
  ep = 1;
  var i = ws();
  function s(m, N) {
    return (m === N && (m !== 0 || 1 / m === 1 / N)) || (m !== m && N !== N);
  }
  var c = typeof Object.is == "function" ? Object.is : s,
    r = i.useState,
    f = i.useEffect,
    d = i.useLayoutEffect,
    p = i.useDebugValue;
  function x(m, N) {
    var O = N(),
      R = r({ inst: { value: O, getSnapshot: N } }),
      H = R[0].inst,
      U = R[1];
    return (
      d(
        function () {
          ((H.value = O), (H.getSnapshot = N), v(H) && U({ inst: H }));
        },
        [m, O, N],
      ),
      f(
        function () {
          return (
            v(H) && U({ inst: H }),
            m(function () {
              v(H) && U({ inst: H });
            })
          );
        },
        [m],
      ),
      p(O),
      O
    );
  }
  function v(m) {
    var N = m.getSnapshot;
    m = m.value;
    try {
      var O = N();
      return !c(m, O);
    } catch {
      return !0;
    }
  }
  function h(m, N) {
    return N();
  }
  var b =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? h
      : x;
  return (
    (tu.useSyncExternalStore =
      i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : b),
    tu
  );
}
var np;
function F1() {
  return (np || ((np = 1), (Ic.exports = $1())), Ic.exports);
}
var W1 = F1();
const P1 = hu.useInsertionEffect,
  I1 =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  t2 = I1 ? T.useLayoutEffect : T.useEffect,
  e2 = P1 || t2,
  rg = (i) => {
    const s = T.useRef([i, (...c) => s[0](...c)]).current;
    return (
      e2(() => {
        s[0] = i;
      }),
      s[1]
    );
  },
  n2 = "popstate",
  Nu = "pushState",
  Cu = "replaceState",
  a2 = "hashchange",
  ap = [n2, Nu, Cu, a2],
  l2 = (i) => {
    for (const s of ap) addEventListener(s, i);
    return () => {
      for (const s of ap) removeEventListener(s, i);
    };
  },
  cg = (i, s) => W1.useSyncExternalStore(l2, i, s),
  i2 = () => location.search,
  o2 = ({ ssrSearch: i = "" } = {}) => cg(i2, () => i),
  lp = () => location.pathname,
  s2 = ({ ssrPath: i } = {}) => cg(lp, i ? () => i : lp),
  r2 = (i, { replace: s = !1, state: c = null } = {}) =>
    history[s ? Cu : Nu](c, "", i),
  c2 = (i = {}) => [s2(i), r2],
  ip = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[ip] > "u") {
  for (const i of [Nu, Cu]) {
    const s = history[i];
    history[i] = function () {
      const c = s.apply(this, arguments),
        r = new Event(i);
      return ((r.arguments = arguments), dispatchEvent(r), c);
    };
  }
  Object.defineProperty(window, ip, { value: !0 });
}
const u2 = (i, s) =>
    s.toLowerCase().indexOf(i.toLowerCase())
      ? "~" + s
      : s.slice(i.length) || "/",
  ug = (i = "") => (i === "/" ? "" : i),
  f2 = (i, s) => (i[0] === "~" ? i.slice(1) : ug(s) + i),
  d2 = (i = "", s) => u2(op(ug(i)), op(s)),
  op = (i) => {
    try {
      return decodeURI(i);
    } catch {
      return i;
    }
  },
  fg = {
    hook: c2,
    searchHook: o2,
    parser: J1,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: (i) => i,
  },
  dg = T.createContext(fg),
  Qi = () => T.useContext(dg),
  mg = {},
  hg = T.createContext(mg),
  m2 = () => T.useContext(hg),
  Rs = (i) => {
    const [s, c] = i.hook(i);
    return [d2(i.base, s), rg((r, f) => c(f2(r, i.base), f))];
  },
  h2 = () => Rs(Qi()),
  pg = (i, s, c, r) => {
    const { pattern: f, keys: d } =
        s instanceof RegExp ? { keys: !1, pattern: s } : i(s || "*", r),
      p = f.exec(c) || [],
      [x, ...v] = p;
    return x !== void 0
      ? [
          !0,
          (() => {
            const h =
              d !== !1
                ? Object.fromEntries(d.map((m, N) => [m, v[N]]))
                : p.groups;
            let b = { ...v };
            return (h && Object.assign(b, h), b);
          })(),
          ...(r ? [x] : []),
        ]
      : [!1, null];
  },
  p2 = ({ children: i, ...s }) => {
    const c = Qi(),
      r = s.hook ? fg : c;
    let f = r;
    const [d, p] = s.ssrPath?.split("?") ?? [];
    (p && ((s.ssrSearch = p), (s.ssrPath = d)),
      (s.hrefs = s.hrefs ?? s.hook?.hrefs));
    let x = T.useRef({}),
      v = x.current,
      h = v;
    for (let b in r) {
      const m = b === "base" ? r[b] + (s[b] || "") : s[b] || r[b];
      (v === h && m !== h[b] && (x.current = h = { ...h }),
        (h[b] = m),
        (m !== r[b] || m !== f[b]) && (f = h));
    }
    return T.createElement(dg.Provider, { value: f, children: i });
  },
  sp = ({ children: i, component: s }, c) =>
    s ? T.createElement(s, { params: c }) : typeof i == "function" ? i(c) : i,
  g2 = (i) => {
    let s = T.useRef(mg);
    const c = s.current;
    return (s.current =
      Object.keys(i).length !== Object.keys(c).length ||
      Object.entries(i).some(([r, f]) => f !== c[r])
        ? i
        : c);
  },
  qi = ({ path: i, nest: s, match: c, ...r }) => {
    const f = Qi(),
      [d] = Rs(f),
      [p, x, v] = c ?? pg(f.parser, i, d, s),
      h = g2({ ...m2(), ...x });
    if (!p) return null;
    const b = v ? T.createElement(p2, { base: v }, sp(r, h)) : sp(r, h);
    return T.createElement(hg.Provider, { value: h, children: b });
  },
  Ss = T.forwardRef((i, s) => {
    const c = Qi(),
      [r, f] = Rs(c),
      {
        to: d = "",
        href: p = d,
        onClick: x,
        asChild: v,
        children: h,
        className: b,
        replace: m,
        state: N,
        ...O
      } = i,
      R = rg((U) => {
        U.ctrlKey ||
          U.metaKey ||
          U.altKey ||
          U.shiftKey ||
          U.button !== 0 ||
          (x?.(U), U.defaultPrevented || (U.preventDefault(), f(p, i)));
      }),
      H = c.hrefs(p[0] === "~" ? p.slice(1) : c.base + p, c);
    return v && T.isValidElement(h)
      ? T.cloneElement(h, { onClick: R, href: H })
      : T.createElement("a", {
          ...O,
          onClick: R,
          href: H,
          className: b?.call ? b(r === p) : b,
          children: h,
          ref: s,
        });
  }),
  du = (i) =>
    Array.isArray(i)
      ? i.flatMap((s) => du(s && s.type === T.Fragment ? s.props.children : s))
      : [i],
  v2 = ({ children: i, location: s }) => {
    const c = Qi(),
      [r] = Rs(c);
    typeof window < "u" &&
      (window.__WOUTER_ROUTES__ || (window.__WOUTER_ROUTES__ = []),
      du(i).forEach((d) => {
        if (T.isValidElement(d) && d.props.path) {
          const p = d.props.path;
          window.__WOUTER_ROUTES__.includes(p) ||
            window.__WOUTER_ROUTES__.push(p);
        }
      }));
    for (const f of du(i)) {
      let d = 0;
      if (
        T.isValidElement(f) &&
        (d = pg(c.parser, f.props.path, s || r, f.props.nest))[0]
      )
        return T.cloneElement(f, { match: d });
    }
    return null;
  };
function rp() {
  const [, i] = h2(),
    s = () => {
      i("/");
    };
  return y.jsx("div", {
    "data-loc": "client/src/pages/NotFound.tsx:14",
    className:
      "min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100",
    children: y.jsx(H1, {
      "data-loc": "client/src/pages/NotFound.tsx:15",
      className:
        "w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm",
      children: y.jsxs(U1, {
        "data-loc": "client/src/pages/NotFound.tsx:16",
        className: "pt-8 pb-8 text-center",
        children: [
          y.jsx("div", {
            "data-loc": "client/src/pages/NotFound.tsx:17",
            className: "flex justify-center mb-6",
            children: y.jsxs("div", {
              "data-loc": "client/src/pages/NotFound.tsx:18",
              className: "relative",
              children: [
                y.jsx("div", {
                  "data-loc": "client/src/pages/NotFound.tsx:19",
                  className:
                    "absolute inset-0 bg-red-100 rounded-full animate-pulse",
                }),
                y.jsx(V1, {
                  "data-loc": "client/src/pages/NotFound.tsx:20",
                  className: "relative h-16 w-16 text-red-500",
                }),
              ],
            }),
          }),
          y.jsx("h1", {
            "data-loc": "client/src/pages/NotFound.tsx:24",
            className: "text-4xl font-bold text-slate-900 mb-2",
            children: "404",
          }),
          y.jsx("h2", {
            "data-loc": "client/src/pages/NotFound.tsx:26",
            className: "text-xl font-semibold text-slate-700 mb-4",
            children: "Page Not Found",
          }),
          y.jsxs("p", {
            "data-loc": "client/src/pages/NotFound.tsx:30",
            className: "text-slate-600 mb-8 leading-relaxed",
            children: [
              "Sorry, the page you are looking for doesn't exist.",
              y.jsx("br", { "data-loc": "client/src/pages/NotFound.tsx:32" }),
              "It may have been moved or deleted.",
            ],
          }),
          y.jsx("div", {
            "data-loc": "client/src/pages/NotFound.tsx:36",
            className: "flex flex-col sm:flex-row gap-3 justify-center",
            children: y.jsxs(xs, {
              "data-loc": "client/src/pages/NotFound.tsx:37",
              onClick: s,
              className:
                "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg",
              children: [
                y.jsx(Q1, {
                  "data-loc": "client/src/pages/NotFound.tsx:41",
                  className: "w-4 h-4 mr-2",
                }),
                "Go Home",
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
class y2 extends T.Component {
  constructor(s) {
    (super(s), (this.state = { hasError: !1, error: null }));
  }
  static getDerivedStateFromError(s) {
    return { hasError: !0, error: s };
  }
  render() {
    return this.state.hasError
      ? y.jsx("div", {
          "data-loc": "client/src/components/ErrorBoundary.tsx:27",
          className:
            "flex items-center justify-center min-h-screen p-8 bg-background",
          children: y.jsxs("div", {
            "data-loc": "client/src/components/ErrorBoundary.tsx:28",
            className: "flex flex-col items-center w-full max-w-2xl p-8",
            children: [
              y.jsx(K1, {
                "data-loc": "client/src/components/ErrorBoundary.tsx:29",
                size: 48,
                className: "text-destructive mb-6 flex-shrink-0",
              }),
              y.jsx("h2", {
                "data-loc": "client/src/components/ErrorBoundary.tsx:34",
                className: "text-xl mb-4",
                children: "An unexpected error occurred.",
              }),
              y.jsx("div", {
                "data-loc": "client/src/components/ErrorBoundary.tsx:36",
                className: "p-4 w-full rounded bg-muted overflow-auto mb-6",
                children: y.jsx("pre", {
                  "data-loc": "client/src/components/ErrorBoundary.tsx:37",
                  className:
                    "text-sm text-muted-foreground whitespace-break-spaces",
                  children: this.state.error?.stack,
                }),
              }),
              y.jsxs("button", {
                "data-loc": "client/src/components/ErrorBoundary.tsx:42",
                onClick: () => window.location.reload(),
                className: vn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg",
                  "bg-primary text-primary-foreground",
                  "hover:opacity-90 cursor-pointer",
                ),
                children: [
                  y.jsx(Z1, {
                    "data-loc": "client/src/components/ErrorBoundary.tsx:50",
                    size: 16,
                  }),
                  "Reload Page",
                ],
              }),
            ],
          }),
        })
      : this.props.children;
  }
}
const b2 = T.createContext(void 0);
function x2({ children: i, defaultTheme: s = "light", switchable: c = !1 }) {
  const [r, f] = T.useState(() => (c && localStorage.getItem("theme")) || s);
  T.useEffect(() => {
    const p = document.documentElement;
    (r === "dark" ? p.classList.add("dark") : p.classList.remove("dark"),
      c && localStorage.setItem("theme", r));
  }, [r, c]);
  const d = c
    ? () => {
        f((p) => (p === "light" ? "dark" : "light"));
      }
    : void 0;
  return y.jsx(b2.Provider, {
    "data-loc": "client/src/contexts/ThemeContext.tsx:52",
    value: { theme: r, toggleTheme: d, switchable: c },
    children: i,
  });
}
const S2 = T.createContext({
    isComposing: () => !1,
    setComposing: () => {},
    justEndedComposing: () => !1,
    markCompositionEnd: () => {},
  }),
  gg = () => T.useContext(S2);
function ms(i) {
  const s = T.useRef(i);
  s.current = i;
  const c = T.useRef(null);
  return (
    c.current ||
      (c.current = function (...r) {
        return s.current.apply(this, r);
      }),
    c.current
  );
}
function vg(i = {}) {
  const { onKeyDown: s, onCompositionStart: c, onCompositionEnd: r } = i,
    f = T.useRef(!1),
    d = T.useRef(null),
    p = T.useRef(null),
    x = ms((m) => {
      (d.current && (clearTimeout(d.current), (d.current = null)),
        p.current && (clearTimeout(p.current), (p.current = null)),
        (f.current = !0),
        c?.(m));
    }),
    v = ms((m) => {
      ((d.current = setTimeout(() => {
        p.current = setTimeout(() => {
          f.current = !1;
        });
      })),
        r?.(m));
    }),
    h = ms((m) => {
      if (
        f.current &&
        (m.key === "Escape" || (m.key === "Enter" && !m.shiftKey))
      ) {
        m.stopPropagation();
        return;
      }
      s?.(m);
    }),
    b = ms(() => f.current);
  return {
    onCompositionStart: x,
    onCompositionEnd: v,
    onKeyDown: h,
    isComposing: b,
  };
}
function eu({
  className: i,
  type: s,
  onKeyDown: c,
  onCompositionStart: r,
  onCompositionEnd: f,
  ...d
}) {
  const p = gg(),
    {
      onCompositionStart: x,
      onCompositionEnd: v,
      onKeyDown: h,
    } = vg({
      onKeyDown: (b) => {
        const m = b.nativeEvent.isComposing || p.justEndedComposing();
        (b.key === "Enter" && m) || c?.(b);
      },
      onCompositionStart: (b) => {
        (p.setComposing(!0), r?.(b));
      },
      onCompositionEnd: (b) => {
        (p.markCompositionEnd(),
          setTimeout(() => {
            p.setComposing(!1);
          }, 100),
          f?.(b));
      },
    });
  return y.jsx("input", {
    "data-loc": "client/src/components/ui/input.tsx:53",
    type: s,
    "data-slot": "input",
    className: vn(
      "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
      "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
      i,
    ),
    onCompositionStart: x,
    onCompositionEnd: v,
    onKeyDown: h,
    ...d,
  });
}
var w2 = "Label",
  yg = T.forwardRef((i, s) =>
    y.jsx(ye.label, {
      ...i,
      ref: s,
      onMouseDown: (c) => {
        c.target.closest("button, input, select, textarea") ||
          (i.onMouseDown?.(c),
          !c.defaultPrevented && c.detail > 1 && c.preventDefault());
      },
    }),
  );
yg.displayName = w2;
var E2 = yg;
function jl({ className: i, ...s }) {
  return y.jsx(E2, {
    "data-loc": "client/src/components/ui/label.tsx:11",
    "data-slot": "label",
    className: vn(
      "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
      i,
    ),
    ...s,
  });
}
function T2(i) {
  const s = i + "CollectionProvider",
    [c, r] = Bl(s),
    [f, d] = c(s, { collectionRef: { current: null }, itemMap: new Map() }),
    p = (H) => {
      const { scope: U, children: q } = H,
        F = J.useRef(null),
        K = J.useRef(new Map()).current;
      return y.jsx(f, { scope: U, itemMap: K, collectionRef: F, children: q });
    };
  p.displayName = s;
  const x = i + "CollectionSlot",
    v = ps(x),
    h = J.forwardRef((H, U) => {
      const { scope: q, children: F } = H,
        K = d(x, q),
        $ = qe(U, K.collectionRef);
      return y.jsx(v, { ref: $, children: F });
    });
  h.displayName = x;
  const b = i + "CollectionItemSlot",
    m = "data-radix-collection-item",
    N = ps(b),
    O = J.forwardRef((H, U) => {
      const { scope: q, children: F, ...K } = H,
        $ = J.useRef(null),
        P = qe(U, $),
        I = d(b, q);
      return (
        J.useEffect(
          () => (
            I.itemMap.set($, { ref: $, ...K }),
            () => void I.itemMap.delete($)
          ),
        ),
        y.jsx(N, { [m]: "", ref: P, children: F })
      );
    });
  O.displayName = b;
  function R(H) {
    const U = d(i + "CollectionConsumer", H);
    return J.useCallback(() => {
      const F = U.collectionRef.current;
      if (!F) return [];
      const K = Array.from(F.querySelectorAll(`[${m}]`));
      return Array.from(U.itemMap.values()).sort(
        (I, Z) => K.indexOf(I.ref.current) - K.indexOf(Z.ref.current),
      );
    }, [U.collectionRef, U.itemMap]);
  }
  return [{ Provider: p, Slot: h, ItemSlot: O }, R, r];
}
var A2 = T.createContext(void 0);
function bg(i) {
  const s = T.useContext(A2);
  return i || s || "ltr";
}
var nu = "rovingFocusGroup.onEntryFocus",
  N2 = { bubbles: !1, cancelable: !0 },
  Zi = "RovingFocusGroup",
  [mu, xg, C2] = T2(Zi),
  [O2, Sg] = Bl(Zi, [C2]),
  [R2, z2] = O2(Zi),
  wg = T.forwardRef((i, s) =>
    y.jsx(mu.Provider, {
      scope: i.__scopeRovingFocusGroup,
      children: y.jsx(mu.Slot, {
        scope: i.__scopeRovingFocusGroup,
        children: y.jsx(_2, { ...i, ref: s }),
      }),
    }),
  );
wg.displayName = Zi;
var _2 = T.forwardRef((i, s) => {
    const {
        __scopeRovingFocusGroup: c,
        orientation: r,
        loop: f = !1,
        dir: d,
        currentTabStopId: p,
        defaultCurrentTabStopId: x,
        onCurrentTabStopIdChange: v,
        onEntryFocus: h,
        preventScrollOnEntryFocus: b = !1,
        ...m
      } = i,
      N = T.useRef(null),
      O = qe(s, N),
      R = bg(d),
      [H, U] = qp({ prop: p, defaultProp: x ?? null, onChange: v, caller: Zi }),
      [q, F] = T.useState(!1),
      K = Vi(h),
      $ = xg(c),
      P = T.useRef(!1),
      [I, Z] = T.useState(0);
    return (
      T.useEffect(() => {
        const X = N.current;
        if (X)
          return (
            X.addEventListener(nu, K),
            () => X.removeEventListener(nu, K)
          );
      }, [K]),
      y.jsx(R2, {
        scope: c,
        orientation: r,
        dir: R,
        loop: f,
        currentTabStopId: H,
        onItemFocus: T.useCallback((X) => U(X), [U]),
        onItemShiftTab: T.useCallback(() => F(!0), []),
        onFocusableItemAdd: T.useCallback(() => Z((X) => X + 1), []),
        onFocusableItemRemove: T.useCallback(() => Z((X) => X - 1), []),
        children: y.jsx(ye.div, {
          tabIndex: q || I === 0 ? -1 : 0,
          "data-orientation": r,
          ...m,
          ref: O,
          style: { outline: "none", ...i.style },
          onMouseDown: ne(i.onMouseDown, () => {
            P.current = !0;
          }),
          onFocus: ne(i.onFocus, (X) => {
            const dt = !P.current;
            if (X.target === X.currentTarget && dt && !q) {
              const bt = new CustomEvent(nu, N2);
              if ((X.currentTarget.dispatchEvent(bt), !bt.defaultPrevented)) {
                const wt = $().filter((A) => A.focusable),
                  ht = wt.find((A) => A.active),
                  pt = wt.find((A) => A.id === H),
                  xt = [ht, pt, ...wt]
                    .filter(Boolean)
                    .map((A) => A.ref.current);
                Ag(xt, b);
              }
            }
            P.current = !1;
          }),
          onBlur: ne(i.onBlur, () => F(!1)),
        }),
      })
    );
  }),
  Eg = "RovingFocusGroupItem",
  Tg = T.forwardRef((i, s) => {
    const {
        __scopeRovingFocusGroup: c,
        focusable: r = !0,
        active: f = !1,
        tabStopId: d,
        children: p,
        ...x
      } = i,
      v = lb(),
      h = d || v,
      b = z2(Eg, c),
      m = b.currentTabStopId === h,
      N = xg(c),
      {
        onFocusableItemAdd: O,
        onFocusableItemRemove: R,
        currentTabStopId: H,
      } = b;
    return (
      T.useEffect(() => {
        if (r) return (O(), () => R());
      }, [r, O, R]),
      y.jsx(mu.ItemSlot, {
        scope: c,
        id: h,
        focusable: r,
        active: f,
        children: y.jsx(ye.span, {
          tabIndex: m ? 0 : -1,
          "data-orientation": b.orientation,
          ...x,
          ref: s,
          onMouseDown: ne(i.onMouseDown, (U) => {
            r ? b.onItemFocus(h) : U.preventDefault();
          }),
          onFocus: ne(i.onFocus, () => b.onItemFocus(h)),
          onKeyDown: ne(i.onKeyDown, (U) => {
            if (U.key === "Tab" && U.shiftKey) {
              b.onItemShiftTab();
              return;
            }
            if (U.target !== U.currentTarget) return;
            const q = D2(U, b.orientation, b.dir);
            if (q !== void 0) {
              if (U.metaKey || U.ctrlKey || U.altKey || U.shiftKey) return;
              U.preventDefault();
              let K = N()
                .filter(($) => $.focusable)
                .map(($) => $.ref.current);
              if (q === "last") K.reverse();
              else if (q === "prev" || q === "next") {
                q === "prev" && K.reverse();
                const $ = K.indexOf(U.currentTarget);
                K = b.loop ? H2(K, $ + 1) : K.slice($ + 1);
              }
              setTimeout(() => Ag(K));
            }
          }),
          children:
            typeof p == "function"
              ? p({ isCurrentTabStop: m, hasTabStop: H != null })
              : p,
        }),
      })
    );
  });
Tg.displayName = Eg;
var M2 = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function j2(i, s) {
  return s !== "rtl"
    ? i
    : i === "ArrowLeft"
      ? "ArrowRight"
      : i === "ArrowRight"
        ? "ArrowLeft"
        : i;
}
function D2(i, s, c) {
  const r = j2(i.key, c);
  if (
    !(s === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(s === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return M2[r];
}
function Ag(i, s = !1) {
  const c = document.activeElement;
  for (const r of i)
    if (
      r === c ||
      (r.focus({ preventScroll: s }), document.activeElement !== c)
    )
      return;
}
function H2(i, s) {
  return i.map((c, r) => i[(s + r) % i.length]);
}
var U2 = wg,
  B2 = Tg;
function L2(i) {
  const s = T.useRef({ value: i, previous: i });
  return T.useMemo(
    () => (
      s.current.value !== i &&
        ((s.current.previous = s.current.value), (s.current.value = i)),
      s.current.previous
    ),
    [i],
  );
}
var Ou = "Radio",
  [Y2, Ng] = Bl(Ou),
  [q2, k2] = Y2(Ou),
  Cg = T.forwardRef((i, s) => {
    const {
        __scopeRadio: c,
        name: r,
        checked: f = !1,
        required: d,
        disabled: p,
        value: x = "on",
        onCheck: v,
        form: h,
        ...b
      } = i,
      [m, N] = T.useState(null),
      O = qe(s, (U) => N(U)),
      R = T.useRef(!1),
      H = m ? h || !!m.closest("form") : !0;
    return y.jsxs(q2, {
      scope: c,
      checked: f,
      disabled: p,
      children: [
        y.jsx(ye.button, {
          type: "button",
          role: "radio",
          "aria-checked": f,
          "data-state": _g(f),
          "data-disabled": p ? "" : void 0,
          disabled: p,
          value: x,
          ...b,
          ref: O,
          onClick: ne(i.onClick, (U) => {
            (f || v?.(),
              H &&
                ((R.current = U.isPropagationStopped()),
                R.current || U.stopPropagation()));
          }),
        }),
        H &&
          y.jsx(zg, {
            control: m,
            bubbles: !R.current,
            name: r,
            value: x,
            checked: f,
            required: d,
            disabled: p,
            form: h,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
Cg.displayName = Ou;
var Og = "RadioIndicator",
  Rg = T.forwardRef((i, s) => {
    const { __scopeRadio: c, forceMount: r, ...f } = i,
      d = k2(Og, c);
    return y.jsx(Eu, {
      present: r || d.checked,
      children: y.jsx(ye.span, {
        "data-state": _g(d.checked),
        "data-disabled": d.disabled ? "" : void 0,
        ...f,
        ref: s,
      }),
    });
  });
Rg.displayName = Og;
var G2 = "RadioBubbleInput",
  zg = T.forwardRef(
    ({ __scopeRadio: i, control: s, checked: c, bubbles: r = !0, ...f }, d) => {
      const p = T.useRef(null),
        x = qe(p, d),
        v = L2(c),
        h = Rp(s);
      return (
        T.useEffect(() => {
          const b = p.current;
          if (!b) return;
          const m = window.HTMLInputElement.prototype,
            O = Object.getOwnPropertyDescriptor(m, "checked").set;
          if (v !== c && O) {
            const R = new Event("click", { bubbles: r });
            (O.call(b, c), b.dispatchEvent(R));
          }
        }, [v, c, r]),
        y.jsx(ye.input, {
          type: "radio",
          "aria-hidden": !0,
          defaultChecked: c,
          ...f,
          tabIndex: -1,
          ref: x,
          style: {
            ...f.style,
            ...h,
            position: "absolute",
            pointerEvents: "none",
            opacity: 0,
            margin: 0,
          },
        })
      );
    },
  );
zg.displayName = G2;
function _g(i) {
  return i ? "checked" : "unchecked";
}
var V2 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  zs = "RadioGroup",
  [X2] = Bl(zs, [Sg, Ng]),
  Mg = Sg(),
  jg = Ng(),
  [Q2, Z2] = X2(zs),
  Dg = T.forwardRef((i, s) => {
    const {
        __scopeRadioGroup: c,
        name: r,
        defaultValue: f,
        value: d,
        required: p = !1,
        disabled: x = !1,
        orientation: v,
        dir: h,
        loop: b = !0,
        onValueChange: m,
        ...N
      } = i,
      O = Mg(c),
      R = bg(h),
      [H, U] = qp({ prop: d, defaultProp: f ?? null, onChange: m, caller: zs });
    return y.jsx(Q2, {
      scope: c,
      name: r,
      required: p,
      disabled: x,
      value: H,
      onValueChange: U,
      children: y.jsx(U2, {
        asChild: !0,
        ...O,
        orientation: v,
        dir: R,
        loop: b,
        children: y.jsx(ye.div, {
          role: "radiogroup",
          "aria-required": p,
          "aria-orientation": v,
          "data-disabled": x ? "" : void 0,
          dir: R,
          ...N,
          ref: s,
        }),
      }),
    });
  });
Dg.displayName = zs;
var Hg = "RadioGroupItem",
  Ug = T.forwardRef((i, s) => {
    const { __scopeRadioGroup: c, disabled: r, ...f } = i,
      d = Z2(Hg, c),
      p = d.disabled || r,
      x = Mg(c),
      v = jg(c),
      h = T.useRef(null),
      b = qe(s, h),
      m = d.value === f.value,
      N = T.useRef(!1);
    return (
      T.useEffect(() => {
        const O = (H) => {
            V2.includes(H.key) && (N.current = !0);
          },
          R = () => (N.current = !1);
        return (
          document.addEventListener("keydown", O),
          document.addEventListener("keyup", R),
          () => {
            (document.removeEventListener("keydown", O),
              document.removeEventListener("keyup", R));
          }
        );
      }, []),
      y.jsx(B2, {
        asChild: !0,
        ...x,
        focusable: !p,
        active: m,
        children: y.jsx(Cg, {
          disabled: p,
          required: d.required,
          checked: m,
          ...v,
          ...f,
          name: d.name,
          ref: b,
          onCheck: () => d.onValueChange(f.value),
          onKeyDown: ne((O) => {
            O.key === "Enter" && O.preventDefault();
          }),
          onFocus: ne(f.onFocus, () => {
            N.current && h.current?.click();
          }),
        }),
      })
    );
  });
Ug.displayName = Hg;
var K2 = "RadioGroupIndicator",
  Bg = T.forwardRef((i, s) => {
    const { __scopeRadioGroup: c, ...r } = i,
      f = jg(c);
    return y.jsx(Rg, { ...f, ...r, ref: s });
  });
Bg.displayName = K2;
var J2 = Dg,
  $2 = Ug,
  F2 = Bg;
function W2({ className: i, ...s }) {
  return y.jsx(J2, {
    "data-loc": "client/src/components/ui/radio-group.tsx:12",
    "data-slot": "radio-group",
    className: vn("grid gap-3", i),
    ...s,
  });
}
function P2({ className: i, ...s }) {
  return y.jsx($2, {
    "data-loc": "client/src/components/ui/radio-group.tsx:25",
    "data-slot": "radio-group-item",
    className: vn(
      "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
      i,
    ),
    ...s,
    children: y.jsx(F2, {
      "data-loc": "client/src/components/ui/radio-group.tsx:33",
      "data-slot": "radio-group-indicator",
      className: "relative flex items-center justify-center",
      children: y.jsx(X1, {
        "data-loc": "client/src/components/ui/radio-group.tsx:37",
        className:
          "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2",
      }),
    }),
  });
}
var I2 = "Separator",
  cp = "horizontal",
  tS = ["horizontal", "vertical"],
  Lg = T.forwardRef((i, s) => {
    const { decorative: c, orientation: r = cp, ...f } = i,
      d = eS(r) ? r : cp,
      x = c
        ? { role: "none" }
        : {
            "aria-orientation": d === "vertical" ? d : void 0,
            role: "separator",
          };
    return y.jsx(ye.div, { "data-orientation": d, ...x, ...f, ref: s });
  });
Lg.displayName = I2;
function eS(i) {
  return tS.includes(i);
}
var nS = Lg;
function Ru({
  className: i,
  orientation: s = "horizontal",
  decorative: c = !0,
  ...r
}) {
  return y.jsx(nS, {
    "data-loc": "client/src/components/ui/separator.tsx:13",
    "data-slot": "separator",
    decorative: c,
    orientation: s,
    className: vn(
      "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
      i,
    ),
    ...r,
  });
}
function aS({
  className: i,
  onKeyDown: s,
  onCompositionStart: c,
  onCompositionEnd: r,
  ...f
}) {
  const d = gg(),
    {
      onCompositionStart: p,
      onCompositionEnd: x,
      onKeyDown: v,
    } = vg({
      onKeyDown: (h) => {
        const b = h.nativeEvent.isComposing || d.justEndedComposing();
        (h.key === "Enter" && !h.shiftKey && b) || s?.(h);
      },
      onCompositionStart: (h) => {
        (d.setComposing(!0), c?.(h));
      },
      onCompositionEnd: (h) => {
        (d.markCompositionEnd(),
          setTimeout(() => {
            d.setComposing(!1);
          }, 100),
          r?.(h));
      },
    });
  return y.jsx("textarea", {
    "data-loc": "client/src/components/ui/textarea.tsx:53",
    "data-slot": "textarea",
    className: vn(
      "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      i,
    ),
    onCompositionStart: p,
    onCompositionEnd: x,
    onKeyDown: v,
    ...f,
  });
}
function lS() {
  return y.jsxs("main", {
    "data-loc": "client/src/pages/Home.tsx:13",
    className:
      "min-h-screen flex flex-col bg-background text-foreground selection:bg-white/20",
    children: [
      y.jsxs("section", {
        "data-loc": "client/src/pages/Home.tsx:15",
        className:
          "relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden",
        children: [
          y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:17",
            className: "absolute inset-0 z-0",
            children: [
              y.jsx("img", {
                "data-loc": "client/src/pages/Home.tsx:18",
                src: "/images/hero-bg.png",
                alt: "Dark atmospheric recording studio background texture",
                className: "w-full h-full object-cover opacity-40",
                role: "presentation",
              }),
              y.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:24",
                className:
                  "absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background",
              }),
            ],
          }),
          y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:27",
            className: "relative z-10 max-w-5xl mx-auto space-y-12",
            children: [
              y.jsxs("h1", {
                "data-loc": "client/src/pages/Home.tsx:28",
                className:
                  "text-5xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight leading-[1.05] text-white",
                children: [
                  "Artist Development ",
                  y.jsx("br", { "data-loc": "client/src/pages/Home.tsx:29" }),
                  y.jsx("span", {
                    "data-loc": "client/src/pages/Home.tsx:30",
                    className: "italic text-white/70",
                    children: "and Management",
                  }),
                  " ",
                  y.jsx("br", { "data-loc": "client/src/pages/Home.tsx:30" }),
                  "Services.",
                ],
              }),
              y.jsx("p", {
                "data-loc": "client/src/pages/Home.tsx:34",
                className:
                  "text-lg md:text-xl font-sans text-muted-foreground max-w-2xl mx-auto tracking-wide",
                children:
                  "Professional guidance for early-stage career establishment.",
              }),
              y.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:38",
                className: "pt-12",
                children: y.jsx(xs, {
                  "data-loc": "client/src/pages/Home.tsx:39",
                  size: "lg",
                  className:
                    "bg-white text-black hover:bg-white/90 rounded-none px-12 py-8 text-sm uppercase tracking-widest font-bold transition-colors duration-300",
                  onClick: () =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" }),
                  children: "Consultation Request",
                }),
              }),
            ],
          }),
        ],
      }),
      y.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:51",
        className: "py-24 md:py-32 px-6 border-t border-white/5",
        children: y.jsx("div", {
          "data-loc": "client/src/pages/Home.tsx:52",
          className: "container max-w-3xl mx-auto space-y-16",
          children: y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:53",
            className: "space-y-10",
            children: [
              y.jsx("p", {
                "data-loc": "client/src/pages/Home.tsx:54",
                className:
                  "text-2xl md:text-3xl font-serif leading-relaxed text-white/90",
                children:
                  "Services are designed for long-term career planning and infrastructure.",
              }),
              y.jsx("p", {
                "data-loc": "client/src/pages/Home.tsx:57",
                className:
                  "text-2xl md:text-3xl font-serif leading-relaxed text-white/70",
                children:
                  "Consultation is available for specific industry sectors and territories.",
              }),
              y.jsx("p", {
                "data-loc": "client/src/pages/Home.tsx:60",
                className:
                  "text-2xl md:text-3xl font-serif leading-relaxed text-white/50",
                children:
                  "Client intake is limited to qualified applicants meeting specific criteria.",
              }),
            ],
          }),
        }),
      }),
      y.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:68",
        className: "py-24 bg-white/5",
        children: y.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:69",
          className: "container mx-auto px-6",
          children: [
            y.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:70",
              className: "grid grid-cols-1 md:grid-cols-12 gap-12 items-center",
              children: [
                y.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:71",
                  className:
                    "md:col-span-4 flex flex-col justify-center items-start",
                  children: [
                    y.jsx("img", {
                      "data-loc": "client/src/pages/Home.tsx:72",
                      src: "/images/brand-mark.png",
                      alt: "Artist Development Company Logo",
                      className: "w-24 h-24 mb-8 opacity-80 invert",
                    }),
                    y.jsx("div", {
                      "data-loc": "client/src/pages/Home.tsx:73",
                      className: "text-6xl font-serif text-white mb-2",
                      children: "20+",
                    }),
                    y.jsx("div", {
                      "data-loc": "client/src/pages/Home.tsx:74",
                      className:
                        "text-sm font-sans uppercase tracking-widest text-muted-foreground",
                      children: "Years Duration",
                    }),
                  ],
                }),
                y.jsx("div", {
                  "data-loc": "client/src/pages/Home.tsx:77",
                  className:
                    "md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500",
                  children: [1, 2, 3, 4].map((i) =>
                    y.jsx(
                      "div",
                      {
                        "data-loc": "client/src/pages/Home.tsx:80",
                        className:
                          "h-24 border border-white/10 flex items-center justify-center bg-black/20",
                        children: y.jsxs("span", {
                          "data-loc": "client/src/pages/Home.tsx:81",
                          className: "font-sans text-xs tracking-widest",
                          children: ["PARTNER ", i],
                        }),
                      },
                      i,
                    ),
                  ),
                }),
              ],
            }),
            y.jsx("div", {
              "data-loc": "client/src/pages/Home.tsx:87",
              className: "mt-24 grid grid-cols-1 md:grid-cols-3 gap-8",
              children: [
                "Strategic Planning",
                "Tour Logistics",
                "Contract Negotiation",
              ].map((i, s) =>
                y.jsx(
                  "div",
                  {
                    "data-loc": "client/src/pages/Home.tsx:93",
                    className: "border-t border-white/20 pt-6",
                    children: y.jsx("h3", {
                      "data-loc": "client/src/pages/Home.tsx:94",
                      className: "text-xl font-serif text-white/90",
                      children: i,
                    }),
                  },
                  s,
                ),
              ),
            }),
          ],
        }),
      }),
      y.jsxs("section", {
        "data-loc": "client/src/pages/Home.tsx:102",
        className: "py-32 px-6 relative",
        children: [
          y.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:103",
            className: "absolute inset-0 z-0",
            children: y.jsx("img", {
              "data-loc": "client/src/pages/Home.tsx:104",
              src: "/images/studio-abstract.png",
              alt: "Studio Abstract",
              className:
                "w-full h-full object-cover opacity-20 mix-blend-overlay",
            }),
          }),
          y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:111",
            className: "container relative z-10 mx-auto",
            children: [
              y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:112",
                className: "mb-20",
                children: [
                  y.jsx("h2", {
                    "data-loc": "client/src/pages/Home.tsx:113",
                    className:
                      "text-sm font-sans uppercase tracking-[0.2em] text-muted-foreground mb-4",
                    children: "Methodology",
                  }),
                  y.jsx(Ru, {
                    "data-loc": "client/src/pages/Home.tsx:114",
                    className: "bg-white/20",
                  }),
                ],
              }),
              y.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:117",
                className: "grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-20",
                children: [
                  {
                    title: "Creative Direction",
                    desc: "Focus on artistic output and brand consistency.",
                  },
                  {
                    title: "Market Analysis",
                    desc: "Utilization of current industry data points.",
                  },
                  {
                    title: "Industry Network",
                    desc: "Access to relevant professional contacts.",
                  },
                  {
                    title: "Personal Development",
                    desc: "Support for non-musical career aspects.",
                  },
                ].map((i, s) =>
                  y.jsxs(
                    "div",
                    {
                      "data-loc": "client/src/pages/Home.tsx:124",
                      className: "group",
                      children: [
                        y.jsxs("div", {
                          "data-loc": "client/src/pages/Home.tsx:125",
                          className: "text-xs font-sans text-white/30 mb-4",
                          children: ["0", s + 1],
                        }),
                        y.jsx("h3", {
                          "data-loc": "client/src/pages/Home.tsx:126",
                          className:
                            "text-3xl font-serif text-white mb-4 group-hover:text-white/80 transition-colors",
                          children: i.title,
                        }),
                        y.jsx("p", {
                          "data-loc": "client/src/pages/Home.tsx:127",
                          className:
                            "text-muted-foreground font-sans leading-relaxed max-w-md",
                          children: i.desc,
                        }),
                      ],
                    },
                    s,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
      y.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:135",
        className: "py-32 bg-black text-white px-6",
        children: y.jsx("div", {
          "data-loc": "client/src/pages/Home.tsx:136",
          className: "container mx-auto",
          children: y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:137",
            className: "grid grid-cols-1 lg:grid-cols-12 gap-16",
            children: [
              y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:139",
                className: "lg:col-span-7 space-y-10",
                children: [
                  y.jsx("div", {
                    "data-loc": "client/src/pages/Home.tsx:140",
                    className:
                      "inline-block border border-white/20 px-4 py-2 text-xs font-sans uppercase tracking-widest mb-4",
                    children: "Primary Service",
                  }),
                  y.jsxs("h2", {
                    "data-loc": "client/src/pages/Home.tsx:141",
                    className: "text-5xl md:text-6xl font-serif leading-tight",
                    children: [
                      "Management ",
                      y.jsx("br", {
                        "data-loc": "client/src/pages/Home.tsx:142",
                      }),
                      " Overview",
                    ],
                  }),
                  y.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:144",
                    className:
                      "text-xl text-white/60 font-sans max-w-xl leading-relaxed",
                    children:
                      "Comprehensive oversight of all career verticals including administration, creative, and logistics.",
                  }),
                  y.jsx("ul", {
                    "data-loc": "client/src/pages/Home.tsx:148",
                    className: "space-y-6 mt-8",
                    children: [
                      "Brand Identity",
                      "Repertoire Selection",
                      "Digital Assets",
                      "Team Structure",
                    ].map((i) =>
                      y.jsxs(
                        "li",
                        {
                          "data-loc": "client/src/pages/Home.tsx:150",
                          className:
                            "flex items-center gap-4 text-white/80 font-sans text-lg",
                          children: [
                            y.jsx("div", {
                              "data-loc": "client/src/pages/Home.tsx:151",
                              className: "w-1.5 h-1.5 bg-white rounded-full",
                            }),
                            i,
                          ],
                        },
                        i,
                      ),
                    ),
                  }),
                ],
              }),
              y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:159",
                className:
                  "lg:col-span-5 space-y-16 border-l border-white/10 pl-0 lg:pl-12 pt-12 lg:pt-0",
                children: [
                  y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:160",
                    children: [
                      y.jsx("h3", {
                        "data-loc": "client/src/pages/Home.tsx:161",
                        className: "text-2xl font-serif mb-6 text-white/90",
                        children: "Advisory Services",
                      }),
                      y.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:162",
                        className: "text-sm text-white/50 font-sans mb-6",
                        children: "Service available for existing teams.",
                      }),
                      y.jsx("ul", {
                        "data-loc": "client/src/pages/Home.tsx:163",
                        className: "space-y-4",
                        children: [
                          "Document Review",
                          "Risk Assessment",
                          "Logistics Planning",
                        ].map((i) =>
                          y.jsx(
                            "li",
                            {
                              "data-loc": "client/src/pages/Home.tsx:165",
                              className:
                                "text-white/70 font-sans text-sm border-b border-white/5 pb-3",
                              children: i,
                            },
                            i,
                          ),
                        ),
                      }),
                    ],
                  }),
                  y.jsxs("div", {
                    "data-loc": "client/src/pages/Home.tsx:170",
                    children: [
                      y.jsx("h3", {
                        "data-loc": "client/src/pages/Home.tsx:171",
                        className: "text-2xl font-serif mb-6 text-white/90",
                        children: "Project Consultation",
                      }),
                      y.jsx("p", {
                        "data-loc": "client/src/pages/Home.tsx:172",
                        className: "text-sm text-white/50 font-sans mb-6",
                        children: "Service available for specific campaigns.",
                      }),
                      y.jsx("ul", {
                        "data-loc": "client/src/pages/Home.tsx:173",
                        className: "space-y-4",
                        children: [
                          "Release Coordination",
                          "Production Oversight",
                          "Media Relations",
                        ].map((i) =>
                          y.jsx(
                            "li",
                            {
                              "data-loc": "client/src/pages/Home.tsx:175",
                              className:
                                "text-white/70 font-sans text-sm border-b border-white/5 pb-3",
                              children: i,
                            },
                            i,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      }),
      y.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:185",
        className: "py-32 px-6 border-y border-white/5 bg-white/[0.02]",
        children: y.jsx("div", {
          "data-loc": "client/src/pages/Home.tsx:186",
          className: "container mx-auto max-w-4xl text-center",
          children: y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:187",
            className: "mb-12",
            children: [
              y.jsx("img", {
                "data-loc": "client/src/pages/Home.tsx:188",
                src: "/images/brand-mark.png",
                alt: "",
                className: "w-12 h-12 mx-auto opacity-50 invert mb-8",
                "aria-hidden": "true",
              }),
              y.jsx("blockquote", {
                "data-loc": "client/src/pages/Home.tsx:189",
                className:
                  "text-3xl md:text-4xl font-serif leading-relaxed text-white/90 italic",
                children:
                  '"Statement regarding the effectiveness and professional nature of the provided consultation services."',
              }),
              y.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:192",
                className:
                  "mt-10 font-sans text-sm tracking-widest text-white/50 uppercase",
                children: "— Client Reference, 2024",
              }),
            ],
          }),
        }),
      }),
      y.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:200",
        className: "py-32 px-6 text-center",
        children: y.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:201",
          className: "container mx-auto max-w-2xl space-y-8",
          children: [
            y.jsx("h2", {
              "data-loc": "client/src/pages/Home.tsx:202",
              className: "text-4xl md:text-5xl font-serif text-white",
              children: "Application Process",
            }),
            y.jsx("p", {
              "data-loc": "client/src/pages/Home.tsx:203",
              className: "text-muted-foreground font-sans text-lg",
              children:
                "New client intake is conducted quarterly based on capacity.",
            }),
            y.jsx("div", {
              "data-loc": "client/src/pages/Home.tsx:206",
              className: "pt-8",
              children: y.jsx(q1, {
                "data-loc": "client/src/pages/Home.tsx:207",
                className: "w-6 h-6 mx-auto text-white/50",
                "aria-hidden": "true",
              }),
            }),
          ],
        }),
      }),
      y.jsx("section", {
        "data-loc": "client/src/pages/Home.tsx:213",
        id: "contact",
        className: "py-24 px-6 bg-white text-black",
        children: y.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:214",
          className: "container mx-auto max-w-3xl",
          children: [
            y.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:215",
              className: "mb-16",
              children: [
                y.jsx("h2", {
                  "data-loc": "client/src/pages/Home.tsx:216",
                  className: "text-4xl font-serif mb-4",
                  children: "Consultation Request",
                }),
                y.jsx("p", {
                  "data-loc": "client/src/pages/Home.tsx:217",
                  className:
                    "text-muted-foreground font-sans text-sm uppercase tracking-wider",
                  children: "Submit required information.",
                }),
              ],
            }),
            y.jsx(iS, { "data-loc": "client/src/pages/Home.tsx:220" }),
          ],
        }),
      }),
      y.jsx("footer", {
        "data-loc": "client/src/pages/Home.tsx:224",
        role: "contentinfo",
        className:
          "py-12 bg-black text-white/30 text-center text-xs font-sans uppercase tracking-widest border-t border-white/10",
        children: y.jsxs("div", {
          "data-loc": "client/src/pages/Home.tsx:225",
          className:
            "flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12",
          children: [
            y.jsx("p", {
              "data-loc": "client/src/pages/Home.tsx:226",
              children: "© 2025 Artist Development. All Rights Reserved.",
            }),
            y.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:227",
              className: "flex gap-6",
              children: [
                y.jsx(Ss, {
                  "data-loc": "client/src/pages/Home.tsx:228",
                  href: "/privacy",
                  className: "hover:text-white transition-colors",
                  children: "Privacy Policy",
                }),
                y.jsx(Ss, {
                  "data-loc": "client/src/pages/Home.tsx:229",
                  href: "/terms",
                  className: "hover:text-white transition-colors",
                  children: "Terms of Service",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
function iS() {
  const [i, s] = T.useState(1),
    [c, r] = T.useState(!1),
    [f, d] = T.useState(null),
    [p, x] = T.useState({
      parentName: "",
      artistName: "",
      email: "",
      budget: "",
      goals: "",
    }),
    v = () => s(i + 1),
    h = () => s(i - 1),
    b = async () => {
      (r(!0), d(null));
      try {
        const N = await (
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: "YOUR_ACCESS_KEY_HERE",
              ...p,
              subject: `New Artist Application: ${p.artistName}`,
              from_name: "Artist Development Site",
            }),
          })
        ).json();
        N.success
          ? s(4)
          : d(N.message || "Something went wrong. Please try again.");
      } catch {
        d("Failed to submit form. Please check your connection and try again.");
      } finally {
        r(!1);
      }
    };
  return i === 4
    ? y.jsxs("div", {
        "data-loc": "client/src/pages/Home.tsx:287",
        className: "text-center py-12 space-y-6",
        children: [
          y.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:288",
            className:
              "w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto",
            children: y.jsx(k1, {
              "data-loc": "client/src/pages/Home.tsx:289",
              className: "w-8 h-8",
              "aria-hidden": "true",
            }),
          }),
          y.jsx("h3", {
            "data-loc": "client/src/pages/Home.tsx:291",
            className: "text-3xl font-serif",
            children: "Submission Received",
          }),
          y.jsx("p", {
            "data-loc": "client/src/pages/Home.tsx:292",
            className: "text-muted-foreground font-sans max-w-md mx-auto",
            children:
              "Information has been recorded. A representative will contact you if the profile matches current requirements.",
          }),
        ],
      })
    : y.jsxs("div", {
        "data-loc": "client/src/pages/Home.tsx:300",
        className: "space-y-12",
        children: [
          y.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:302",
            className: "flex gap-2 mb-12",
            children: [1, 2, 3].map((m) =>
              y.jsx(
                "div",
                {
                  "data-loc": "client/src/pages/Home.tsx:304",
                  className: `h-0.5 flex-1 transition-colors duration-300 ${m <= i ? "bg-black" : "bg-gray-200"}`,
                },
                m,
              ),
            ),
          }),
          i === 1 &&
            y.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:309",
              className: "space-y-8",
              children: [
                y.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:310",
                  className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                  children: [
                    y.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:311",
                      className: "space-y-3",
                      children: [
                        y.jsx(jl, {
                          "data-loc": "client/src/pages/Home.tsx:312",
                          htmlFor: "parentName",
                          className:
                            "font-sans text-xs uppercase tracking-wider text-gray-500",
                          children: "Parent / Guardian Name",
                        }),
                        y.jsx(eu, {
                          "data-loc": "client/src/pages/Home.tsx:313",
                          id: "parentName",
                          placeholder: "Full Name",
                          className:
                            "rounded-none border-0 border-b border-black/20 focus:border-black px-0 h-12 font-serif text-xl placeholder:text-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent",
                          value: p.parentName,
                          onChange: (m) =>
                            x({ ...p, parentName: m.target.value }),
                        }),
                      ],
                    }),
                    y.jsxs("div", {
                      "data-loc": "client/src/pages/Home.tsx:321",
                      className: "space-y-3",
                      children: [
                        y.jsx(jl, {
                          "data-loc": "client/src/pages/Home.tsx:322",
                          htmlFor: "artistName",
                          className:
                            "font-sans text-xs uppercase tracking-wider text-gray-500",
                          children: "Artist Name",
                        }),
                        y.jsx(eu, {
                          "data-loc": "client/src/pages/Home.tsx:323",
                          id: "artistName",
                          placeholder: "Stage or Real Name",
                          className:
                            "rounded-none border-0 border-b border-black/20 focus:border-black px-0 h-12 font-serif text-xl placeholder:text-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent",
                          value: p.artistName,
                          onChange: (m) =>
                            x({ ...p, artistName: m.target.value }),
                        }),
                      ],
                    }),
                  ],
                }),
                y.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:332",
                  className: "space-y-3",
                  children: [
                    y.jsx(jl, {
                      "data-loc": "client/src/pages/Home.tsx:333",
                      htmlFor: "email",
                      className:
                        "font-sans text-xs uppercase tracking-wider text-gray-500",
                      children: "Email Address",
                    }),
                    y.jsx(eu, {
                      "data-loc": "client/src/pages/Home.tsx:334",
                      id: "email",
                      type: "email",
                      placeholder: "name@example.com",
                      className:
                        "rounded-none border-0 border-b border-black/20 focus:border-black px-0 h-12 font-serif text-xl placeholder:text-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent",
                      value: p.email,
                      onChange: (m) => x({ ...p, email: m.target.value }),
                    }),
                  ],
                }),
              ],
            }),
          i === 2 &&
            y.jsx("div", {
              "data-loc": "client/src/pages/Home.tsx:347",
              className: "space-y-8",
              children: y.jsxs("div", {
                "data-loc": "client/src/pages/Home.tsx:348",
                className: "space-y-6",
                children: [
                  y.jsx(jl, {
                    "data-loc": "client/src/pages/Home.tsx:349",
                    className:
                      "font-sans text-xs uppercase tracking-wider text-gray-500",
                    children: "Budget Allocation (Monthly)",
                  }),
                  y.jsx("p", {
                    "data-loc": "client/src/pages/Home.tsx:350",
                    className:
                      "text-sm text-muted-foreground mb-4 font-serif italic",
                    children: "Select the applicable monthly budget range.",
                  }),
                  y.jsx(W2, {
                    "data-loc": "client/src/pages/Home.tsx:351",
                    value: p.budget,
                    onValueChange: (m) => x({ ...p, budget: m }),
                    className: "grid grid-cols-1 gap-4",
                    children: [
                      "$2,500 - $5,000",
                      "$5,000 - $10,000",
                      "$10,000+",
                    ].map((m) =>
                      y.jsxs(
                        "div",
                        {
                          "data-loc": "client/src/pages/Home.tsx:357",
                          className: `flex items-center space-x-4 border p-6 transition-colors cursor-pointer ${p.budget === m ? "border-black bg-black text-white" : "border-black/10 hover:border-black/30"}`,
                          children: [
                            y.jsx(P2, {
                              "data-loc": "client/src/pages/Home.tsx:358",
                              value: m,
                              id: m,
                              className: `border-current ${p.budget === m ? "text-white" : "text-black"}`,
                            }),
                            y.jsx(jl, {
                              "data-loc": "client/src/pages/Home.tsx:359",
                              htmlFor: m,
                              className:
                                "flex-1 cursor-pointer font-serif text-xl",
                              children: m,
                            }),
                          ],
                        },
                        m,
                      ),
                    ),
                  }),
                ],
              }),
            }),
          i === 3 &&
            y.jsxs("div", {
              "data-loc": "client/src/pages/Home.tsx:368",
              className: "space-y-8",
              children: [
                y.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:369",
                  className: "space-y-3",
                  children: [
                    y.jsx(jl, {
                      "data-loc": "client/src/pages/Home.tsx:370",
                      htmlFor: "goals",
                      className:
                        "font-sans text-xs uppercase tracking-wider text-gray-500",
                      children: "Objectives (Next 12 Months)",
                    }),
                    y.jsx(aS, {
                      "data-loc": "client/src/pages/Home.tsx:371",
                      id: "goals",
                      placeholder: "List primary objectives...",
                      className:
                        "rounded-none border-0 border-b border-black/20 focus:border-black min-h-[150px] font-serif text-lg resize-none p-0 placeholder:text-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent",
                      value: p.goals,
                      onChange: (m) => x({ ...p, goals: m.target.value }),
                    }),
                  ],
                }),
                y.jsxs("div", {
                  "data-loc": "client/src/pages/Home.tsx:380",
                  className:
                    "bg-gray-50 p-8 text-sm text-muted-foreground font-sans border-l-2 border-black",
                  children: [
                    y.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:381",
                      className:
                        "mb-2 font-bold text-black uppercase tracking-wider text-xs",
                      children: "Confirmation",
                    }),
                    y.jsx("p", {
                      "data-loc": "client/src/pages/Home.tsx:382",
                      children:
                        "Submission acknowledges this is a request for information, not a guarantee of service.",
                    }),
                  ],
                }),
                f &&
                  y.jsx("div", {
                    "data-loc": "client/src/pages/Home.tsx:386",
                    className: "bg-red-50 text-red-600 p-4 text-sm font-sans",
                    children: f,
                  }),
              ],
            }),
          y.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:393",
            className: "flex justify-between pt-8",
            children: [
              i > 1
                ? y.jsx(xs, {
                    "data-loc": "client/src/pages/Home.tsx:395",
                    variant: "ghost",
                    onClick: h,
                    disabled: c,
                    className:
                      "rounded-none hover:bg-transparent hover:text-black/60 text-black font-sans uppercase tracking-wider text-xs h-12 px-0 pl-0",
                    children: "Back",
                  })
                : y.jsx("div", { "data-loc": "client/src/pages/Home.tsx:398" }),
              y.jsxs(xs, {
                "data-loc": "client/src/pages/Home.tsx:400",
                onClick: i === 3 ? b : v,
                disabled: c,
                className:
                  "rounded-none bg-black text-white hover:bg-black/80 font-sans uppercase tracking-wider text-xs h-14 px-10 ml-auto",
                children: [
                  c
                    ? "Submitting..."
                    : i === 3
                      ? "Submit Request"
                      : "Next Step",
                  !c &&
                    y.jsx(G1, {
                      "data-loc": "client/src/pages/Home.tsx:406",
                      className: "ml-2 w-4 h-4",
                      "aria-hidden": "true",
                    }),
                ],
              }),
            ],
          }),
        ],
      });
}
function oS() {
  return y.jsx("div", {
    "data-loc": "client/src/pages/PrivacyPolicy.tsx:7",
    className:
      "min-h-screen bg-background text-foreground font-sans selection:bg-white/20",
    children: y.jsxs("div", {
      "data-loc": "client/src/pages/PrivacyPolicy.tsx:8",
      className: "container mx-auto max-w-3xl px-6 py-12 md:py-24",
      children: [
        y.jsxs("div", {
          "data-loc": "client/src/pages/PrivacyPolicy.tsx:9",
          className: "mb-12",
          children: [
            y.jsxs(Ss, {
              "data-loc": "client/src/pages/PrivacyPolicy.tsx:10",
              href: "/",
              className:
                "inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors mb-8 uppercase tracking-widest",
              children: [
                y.jsx(sg, {
                  "data-loc": "client/src/pages/PrivacyPolicy.tsx:11",
                  className: "w-4 h-4 mr-2",
                }),
                " Back to Home",
              ],
            }),
            y.jsx("h1", {
              "data-loc": "client/src/pages/PrivacyPolicy.tsx:13",
              className: "text-4xl md:text-5xl font-serif mb-4",
              children: "Privacy Policy",
            }),
            y.jsx("p", {
              "data-loc": "client/src/pages/PrivacyPolicy.tsx:14",
              className: "text-muted-foreground text-sm",
              children: "Last Updated: January 1, 2025",
            }),
          ],
        }),
        y.jsx(Ru, {
          "data-loc": "client/src/pages/PrivacyPolicy.tsx:17",
          className: "bg-white/10 mb-12",
        }),
        y.jsxs("div", {
          "data-loc": "client/src/pages/PrivacyPolicy.tsx:19",
          className: "space-y-12 text-white/80 leading-relaxed",
          children: [
            y.jsxs("section", {
              "data-loc": "client/src/pages/PrivacyPolicy.tsx:20",
              children: [
                y.jsx("h2", {
                  "data-loc": "client/src/pages/PrivacyPolicy.tsx:21",
                  className: "text-xl font-serif text-white mb-4",
                  children: "1. Introduction",
                }),
                y.jsx("p", {
                  "data-loc": "client/src/pages/PrivacyPolicy.tsx:22",
                  children:
                    'This Privacy Policy describes how Artist Development ("we," "our," or "us") collects, uses, and discloses your information when you use our website and services. By accessing or using our services, you consent to the data practices described in this policy.',
                }),
              ],
            }),
            y.jsxs("section", {
              "data-loc": "client/src/pages/PrivacyPolicy.tsx:27",
              children: [
                y.jsx("h2", {
                  "data-loc": "client/src/pages/PrivacyPolicy.tsx:28",
                  className: "text-xl font-serif text-white mb-4",
                  children: "2. Information We Collect",
                }),
                y.jsx("p", {
                  "data-loc": "client/src/pages/PrivacyPolicy.tsx:29",
                  className: "mb-4",
                  children:
                    "We collect information that you provide directly to us, including but not limited to:",
                }),
                y.jsxs("ul", {
                  "data-loc": "client/src/pages/PrivacyPolicy.tsx:32",
                  className: "list-disc pl-5 space-y-2 text-white/70",
                  children: [
                    y.jsx("li", {
                      "data-loc": "client/src/pages/PrivacyPolicy.tsx:33",
                      children:
                        "Contact information (such as name, email address, and phone number)",
                    }),
                    y.jsx("li", {
                      "data-loc": "client/src/pages/PrivacyPolicy.tsx:34",
                      children:
                        "Professional information (such as artist name, career goals, and budget)",
                    }),
                    y.jsx("li", {
                      "data-loc": "client/src/pages/PrivacyPolicy.tsx:35",
                      children: "Communications you send to us",
                    }),
                  ],
                }),
              ],
            }),
            y.jsxs("section", {
              "data-loc": "client/src/pages/PrivacyPolicy.tsx:39",
              children: [
                y.jsx("h2", {
                  "data-loc": "client/src/pages/PrivacyPolicy.tsx:40",
                  className: "text-xl font-serif text-white mb-4",
                  children: "3. How We Use Your Information",
                }),
                y.jsx("p", {
                  "data-loc": "client/src/pages/PrivacyPolicy.tsx:41",
                  className: "mb-4",
                  children:
                    "We use the information we collect for the following purposes:",
                }),
                y.jsxs("ul", {
                  "data-loc": "client/src/pages/PrivacyPolicy.tsx:44",
                  className: "list-disc pl-5 space-y-2 text-white/70",
                  children: [
                    y.jsx("li", {
                      "data-loc": "client/src/pages/PrivacyPolicy.tsx:45",
                      children:
                        "To provide, maintain, and improve our services",
                    }),
                    y.jsx("li", {
                      "data-loc": "client/src/pages/PrivacyPolicy.tsx:46",
                      children:
                        "To communicate with you about your application or inquiry",
                    }),
                    y.jsx("li", {
                      "data-loc": "client/src/pages/PrivacyPolicy.tsx:47",
                      children: "To comply with legal obligations",
                    }),
                    y.jsx("li", {
                      "data-loc": "client/src/pages/PrivacyPolicy.tsx:48",
                      children:
                        "To protect our rights and the safety of our users",
                    }),
                  ],
                }),
              ],
            }),
            y.jsxs("section", {
              "data-loc": "client/src/pages/PrivacyPolicy.tsx:52",
              children: [
                y.jsx("h2", {
                  "data-loc": "client/src/pages/PrivacyPolicy.tsx:53",
                  className: "text-xl font-serif text-white mb-4",
                  children: "4. Information Sharing",
                }),
                y.jsx("p", {
                  "data-loc": "client/src/pages/PrivacyPolicy.tsx:54",
                  children:
                    "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.",
                }),
              ],
            }),
            y.jsxs("section", {
              "data-loc": "client/src/pages/PrivacyPolicy.tsx:59",
              children: [
                y.jsx("h2", {
                  "data-loc": "client/src/pages/PrivacyPolicy.tsx:60",
                  className: "text-xl font-serif text-white mb-4",
                  children: "5. Data Security",
                }),
                y.jsx("p", {
                  "data-loc": "client/src/pages/PrivacyPolicy.tsx:61",
                  children:
                    "We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.",
                }),
              ],
            }),
            y.jsxs("section", {
              "data-loc": "client/src/pages/PrivacyPolicy.tsx:66",
              children: [
                y.jsx("h2", {
                  "data-loc": "client/src/pages/PrivacyPolicy.tsx:67",
                  className: "text-xl font-serif text-white mb-4",
                  children: "6. Changes to This Policy",
                }),
                y.jsx("p", {
                  "data-loc": "client/src/pages/PrivacyPolicy.tsx:68",
                  children:
                    "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.",
                }),
              ],
            }),
            y.jsxs("section", {
              "data-loc": "client/src/pages/PrivacyPolicy.tsx:73",
              children: [
                y.jsx("h2", {
                  "data-loc": "client/src/pages/PrivacyPolicy.tsx:74",
                  className: "text-xl font-serif text-white mb-4",
                  children: "7. Contact Us",
                }),
                y.jsx("p", {
                  "data-loc": "client/src/pages/PrivacyPolicy.tsx:75",
                  children:
                    "If you have any questions about this Privacy Policy, please contact us via the consultation form on our homepage.",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function sS() {
  return y.jsx("div", {
    "data-loc": "client/src/pages/TermsOfService.tsx:7",
    className:
      "min-h-screen bg-background text-foreground font-sans selection:bg-white/20",
    children: y.jsxs("div", {
      "data-loc": "client/src/pages/TermsOfService.tsx:8",
      className: "container mx-auto max-w-3xl px-6 py-12 md:py-24",
      children: [
        y.jsxs("div", {
          "data-loc": "client/src/pages/TermsOfService.tsx:9",
          className: "mb-12",
          children: [
            y.jsxs(Ss, {
              "data-loc": "client/src/pages/TermsOfService.tsx:10",
              href: "/",
              className:
                "inline-flex items-center text-sm text-muted-foreground hover:text-white transition-colors mb-8 uppercase tracking-widest",
              children: [
                y.jsx(sg, {
                  "data-loc": "client/src/pages/TermsOfService.tsx:11",
                  className: "w-4 h-4 mr-2",
                }),
                " Back to Home",
              ],
            }),
            y.jsx("h1", {
              "data-loc": "client/src/pages/TermsOfService.tsx:13",
              className: "text-4xl md:text-5xl font-serif mb-4",
              children: "Terms of Service",
            }),
            y.jsx("p", {
              "data-loc": "client/src/pages/TermsOfService.tsx:14",
              className: "text-muted-foreground text-sm",
              children: "Last Updated: January 1, 2025",
            }),
          ],
        }),
        y.jsx(Ru, {
          "data-loc": "client/src/pages/TermsOfService.tsx:17",
          className: "bg-white/10 mb-12",
        }),
        y.jsxs("div", {
          "data-loc": "client/src/pages/TermsOfService.tsx:19",
          className: "space-y-12 text-white/80 leading-relaxed",
          children: [
            y.jsxs("section", {
              "data-loc": "client/src/pages/TermsOfService.tsx:20",
              children: [
                y.jsx("h2", {
                  "data-loc": "client/src/pages/TermsOfService.tsx:21",
                  className: "text-xl font-serif text-white mb-4",
                  children: "1. Acceptance of Terms",
                }),
                y.jsx("p", {
                  "data-loc": "client/src/pages/TermsOfService.tsx:22",
                  children:
                    'By accessing and using the website of Artist Development ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.',
                }),
              ],
            }),
            y.jsxs("section", {
              "data-loc": "client/src/pages/TermsOfService.tsx:27",
              children: [
                y.jsx("h2", {
                  "data-loc": "client/src/pages/TermsOfService.tsx:28",
                  className: "text-xl font-serif text-white mb-4",
                  children: "2. Description of Service",
                }),
                y.jsx("p", {
                  "data-loc": "client/src/pages/TermsOfService.tsx:29",
                  children:
                    "We provide artist development and management consultation services. The content on this website is for informational purposes only and does not constitute a binding offer of representation or employment.",
                }),
              ],
            }),
            y.jsxs("section", {
              "data-loc": "client/src/pages/TermsOfService.tsx:34",
              children: [
                y.jsx("h2", {
                  "data-loc": "client/src/pages/TermsOfService.tsx:35",
                  className: "text-xl font-serif text-white mb-4",
                  children: "3. User Conduct",
                }),
                y.jsx("p", {
                  "data-loc": "client/src/pages/TermsOfService.tsx:36",
                  children:
                    "You agree to use the website only for lawful purposes. You are prohibited from posting on or transmitting through the website any material that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, sexually explicit, profane, hateful, racially, ethnically, or otherwise objectionable.",
                }),
              ],
            }),
            y.jsxs("section", {
              "data-loc": "client/src/pages/TermsOfService.tsx:41",
              children: [
                y.jsx("h2", {
                  "data-loc": "client/src/pages/TermsOfService.tsx:42",
                  className: "text-xl font-serif text-white mb-4",
                  children: "4. Intellectual Property",
                }),
                y.jsx("p", {
                  "data-loc": "client/src/pages/TermsOfService.tsx:43",
                  children:
                    "All content included on this site, such as text, graphics, logos, images, as well as the compilation thereof, is the property of Artist Development or its suppliers and protected by copyright and other laws that protect intellectual property and proprietary rights.",
                }),
              ],
            }),
            y.jsxs("section", {
              "data-loc": "client/src/pages/TermsOfService.tsx:48",
              children: [
                y.jsx("h2", {
                  "data-loc": "client/src/pages/TermsOfService.tsx:49",
                  className: "text-xl font-serif text-white mb-4",
                  children: "5. Disclaimer of Warranties",
                }),
                y.jsx("p", {
                  "data-loc": "client/src/pages/TermsOfService.tsx:50",
                  children:
                    'The website and its content are provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of the website or the information, content, materials, or products included on this site.',
                }),
              ],
            }),
            y.jsxs("section", {
              "data-loc": "client/src/pages/TermsOfService.tsx:55",
              children: [
                y.jsx("h2", {
                  "data-loc": "client/src/pages/TermsOfService.tsx:56",
                  className: "text-xl font-serif text-white mb-4",
                  children: "6. Limitation of Liability",
                }),
                y.jsx("p", {
                  "data-loc": "client/src/pages/TermsOfService.tsx:57",
                  children:
                    "In no event shall Artist Development be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from the use or the inability to use the website or services.",
                }),
              ],
            }),
            y.jsxs("section", {
              "data-loc": "client/src/pages/TermsOfService.tsx:62",
              children: [
                y.jsx("h2", {
                  "data-loc": "client/src/pages/TermsOfService.tsx:63",
                  className: "text-xl font-serif text-white mb-4",
                  children: "7. Governing Law",
                }),
                y.jsx("p", {
                  "data-loc": "client/src/pages/TermsOfService.tsx:64",
                  children:
                    "These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.",
                }),
              ],
            }),
            y.jsxs("section", {
              "data-loc": "client/src/pages/TermsOfService.tsx:69",
              children: [
                y.jsx("h2", {
                  "data-loc": "client/src/pages/TermsOfService.tsx:70",
                  className: "text-xl font-serif text-white mb-4",
                  children: "8. Changes to Terms",
                }),
                y.jsx("p", {
                  "data-loc": "client/src/pages/TermsOfService.tsx:71",
                  children:
                    "We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function rS() {
  return y.jsxs(v2, {
    "data-loc": "client/src/App.tsx:14",
    children: [
      y.jsx(qi, {
        "data-loc": "client/src/App.tsx:15",
        path: "/",
        component: lS,
      }),
      y.jsx(qi, {
        "data-loc": "client/src/App.tsx:16",
        path: "/privacy",
        component: oS,
      }),
      y.jsx(qi, {
        "data-loc": "client/src/App.tsx:17",
        path: "/terms",
        component: sS,
      }),
      y.jsx(qi, {
        "data-loc": "client/src/App.tsx:18",
        path: "/404",
        component: rp,
      }),
      y.jsx(qi, { "data-loc": "client/src/App.tsx:20", component: rp }),
    ],
  });
}
function cS() {
  return y.jsx(y2, {
    "data-loc": "client/src/App.tsx:32",
    children: y.jsx(x2, {
      "data-loc": "client/src/App.tsx:33",
      defaultTheme: "dark",
      children: y.jsxs(M1, {
        "data-loc": "client/src/App.tsx:37",
        children: [
          y.jsx(L0, { "data-loc": "client/src/App.tsx:38" }),
          y.jsx(rS, { "data-loc": "client/src/App.tsx:39" }),
        ],
      }),
    }),
  });
}
i0.createRoot(document.getElementById("root")).render(
  y.jsx(cS, { "data-loc": "client/src/main.tsx:5" }),
);

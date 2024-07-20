var D3 = Object.defineProperty;
var N3 = (s, r, e) => r in s ? D3(s, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[r] = e;
var Y0 = (s, r, e) => (N3(s, typeof r != "symbol" ? r + "" : r, e), e), yu = (s, r, e) => {
  if (!r.has(s))
    throw TypeError("Cannot " + e);
};
var u = (s, r, e) => (yu(s, r, "read from private field"), e ? e.call(s) : r.get(s)), E = (s, r, e) => {
  if (r.has(s))
    throw TypeError("Cannot add the same private member more than once");
  r instanceof WeakSet ? r.add(s) : r.set(s, e);
}, R = (s, r, e, a) => (yu(s, r, "write to private field"), a ? a.call(s, e) : r.set(s, e), e), pe = (s, r, e, a) => ({
  set _(t) {
    R(s, r, t, e);
  },
  get _() {
    return u(s, r, a);
  }
}), S = (s, r, e) => (yu(s, r, "access private method"), e);
import H4, { useRef as fe, useEffect as ut } from "react";
var V3 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function j4(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Ju = { exports: {} }, cn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nh;
function P3() {
  if (Nh)
    return cn;
  Nh = 1;
  var s = H4, r = Symbol.for("react.element"), e = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, t = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function A(n, o, f) {
    var l, c = {}, h = null, d = null;
    f !== void 0 && (h = "" + f), o.key !== void 0 && (h = "" + o.key), o.ref !== void 0 && (d = o.ref);
    for (l in o)
      a.call(o, l) && !i.hasOwnProperty(l) && (c[l] = o[l]);
    if (n && n.defaultProps)
      for (l in o = n.defaultProps, o)
        c[l] === void 0 && (c[l] = o[l]);
    return { $$typeof: r, type: n, key: h, ref: d, props: c, _owner: t.current };
  }
  return cn.Fragment = e, cn.jsx = A, cn.jsxs = A, cn;
}
var hn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vh;
function O3() {
  return Vh || (Vh = 1, process.env.NODE_ENV !== "production" && function() {
    var s = H4, r = Symbol.for("react.element"), e = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), t = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), A = Symbol.for("react.provider"), n = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), c = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), b = Symbol.iterator, g = "@@iterator";
    function v(O) {
      if (O === null || typeof O != "object")
        return null;
      var s0 = b && O[b] || O[g];
      return typeof s0 == "function" ? s0 : null;
    }
    var m = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(O) {
      {
        for (var s0 = arguments.length, p0 = new Array(s0 > 1 ? s0 - 1 : 0), I0 = 1; I0 < s0; I0++)
          p0[I0 - 1] = arguments[I0];
        k("error", O, p0);
      }
    }
    function k(O, s0, p0) {
      {
        var I0 = m.ReactDebugCurrentFrame, H0 = I0.getStackAddendum();
        H0 !== "" && (s0 += "%s", p0 = p0.concat([H0]));
        var z0 = p0.map(function(J0) {
          return String(J0);
        });
        z0.unshift("Warning: " + s0), Function.prototype.apply.call(console[O], console, z0);
      }
    }
    var C = !1, y = !1, B = !1, F = !1, G = !1, V;
    V = Symbol.for("react.module.reference");
    function M(O) {
      return !!(typeof O == "string" || typeof O == "function" || O === a || O === i || G || O === t || O === f || O === l || F || O === d || C || y || B || typeof O == "object" && O !== null && (O.$$typeof === h || O.$$typeof === c || O.$$typeof === A || O.$$typeof === n || O.$$typeof === o || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      O.$$typeof === V || O.getModuleId !== void 0));
    }
    function T(O, s0, p0) {
      var I0 = O.displayName;
      if (I0)
        return I0;
      var H0 = s0.displayName || s0.name || "";
      return H0 !== "" ? p0 + "(" + H0 + ")" : p0;
    }
    function Q(O) {
      return O.displayName || "Context";
    }
    function L(O) {
      if (O == null)
        return null;
      if (typeof O.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof O == "function")
        return O.displayName || O.name || null;
      if (typeof O == "string")
        return O;
      switch (O) {
        case a:
          return "Fragment";
        case e:
          return "Portal";
        case i:
          return "Profiler";
        case t:
          return "StrictMode";
        case f:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case n:
            var s0 = O;
            return Q(s0) + ".Consumer";
          case A:
            var p0 = O;
            return Q(p0._context) + ".Provider";
          case o:
            return T(O, O.render, "ForwardRef");
          case c:
            var I0 = O.displayName || null;
            return I0 !== null ? I0 : L(O.type) || "Memo";
          case h: {
            var H0 = O, z0 = H0._payload, J0 = H0._init;
            try {
              return L(J0(z0));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, r0 = 0, e0, q, _, x, N, D, Y;
    function z() {
    }
    z.__reactDisabledLog = !0;
    function j() {
      {
        if (r0 === 0) {
          e0 = console.log, q = console.info, _ = console.warn, x = console.error, N = console.group, D = console.groupCollapsed, Y = console.groupEnd;
          var O = {
            configurable: !0,
            enumerable: !0,
            value: z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: O,
            log: O,
            warn: O,
            error: O,
            group: O,
            groupCollapsed: O,
            groupEnd: O
          });
        }
        r0++;
      }
    }
    function A0() {
      {
        if (r0--, r0 === 0) {
          var O = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, O, {
              value: e0
            }),
            info: J({}, O, {
              value: q
            }),
            warn: J({}, O, {
              value: _
            }),
            error: J({}, O, {
              value: x
            }),
            group: J({}, O, {
              value: N
            }),
            groupCollapsed: J({}, O, {
              value: D
            }),
            groupEnd: J({}, O, {
              value: Y
            })
          });
        }
        r0 < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var l0 = m.ReactCurrentDispatcher, n0;
    function m0(O, s0, p0) {
      {
        if (n0 === void 0)
          try {
            throw Error();
          } catch (H0) {
            var I0 = H0.stack.trim().match(/\n( *(at )?)/);
            n0 = I0 && I0[1] || "";
          }
        return `
` + n0 + O;
      }
    }
    var G0 = !1, R0;
    {
      var _0 = typeof WeakMap == "function" ? WeakMap : Map;
      R0 = new _0();
    }
    function k0(O, s0) {
      if (!O || G0)
        return "";
      {
        var p0 = R0.get(O);
        if (p0 !== void 0)
          return p0;
      }
      var I0;
      G0 = !0;
      var H0 = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var z0;
      z0 = l0.current, l0.current = null, j();
      try {
        if (s0) {
          var J0 = function() {
            throw Error();
          };
          if (Object.defineProperty(J0.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(J0, []);
            } catch (Ia) {
              I0 = Ia;
            }
            Reflect.construct(O, [], J0);
          } else {
            try {
              J0.call();
            } catch (Ia) {
              I0 = Ia;
            }
            O.call(J0.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ia) {
            I0 = Ia;
          }
          O();
        }
      } catch (Ia) {
        if (Ia && I0 && typeof Ia.stack == "string") {
          for (var K0 = Ia.stack.split(`
`), Ae = I0.stack.split(`
`), Er = K0.length - 1, Ir = Ae.length - 1; Er >= 1 && Ir >= 0 && K0[Er] !== Ae[Ir]; )
            Ir--;
          for (; Er >= 1 && Ir >= 0; Er--, Ir--)
            if (K0[Er] !== Ae[Ir]) {
              if (Er !== 1 || Ir !== 1)
                do
                  if (Er--, Ir--, Ir < 0 || K0[Er] !== Ae[Ir]) {
                    var Fe = `
` + K0[Er].replace(" at new ", " at ");
                    return O.displayName && Fe.includes("<anonymous>") && (Fe = Fe.replace("<anonymous>", O.displayName)), typeof O == "function" && R0.set(O, Fe), Fe;
                  }
                while (Er >= 1 && Ir >= 0);
              break;
            }
        }
      } finally {
        G0 = !1, l0.current = z0, A0(), Error.prepareStackTrace = H0;
      }
      var R2 = O ? O.displayName || O.name : "", Dh = R2 ? m0(R2) : "";
      return typeof O == "function" && R0.set(O, Dh), Dh;
    }
    function C0(O, s0, p0) {
      return k0(O, !1);
    }
    function q0(O) {
      var s0 = O.prototype;
      return !!(s0 && s0.isReactComponent);
    }
    function N0(O, s0, p0) {
      if (O == null)
        return "";
      if (typeof O == "function")
        return k0(O, q0(O));
      if (typeof O == "string")
        return m0(O);
      switch (O) {
        case f:
          return m0("Suspense");
        case l:
          return m0("SuspenseList");
      }
      if (typeof O == "object")
        switch (O.$$typeof) {
          case o:
            return C0(O.render);
          case c:
            return N0(O.type, s0, p0);
          case h: {
            var I0 = O, H0 = I0._payload, z0 = I0._init;
            try {
              return N0(z0(H0), s0, p0);
            } catch {
            }
          }
        }
      return "";
    }
    var Z0 = Object.prototype.hasOwnProperty, d0 = {}, y0 = m.ReactDebugCurrentFrame;
    function W0(O) {
      if (O) {
        var s0 = O._owner, p0 = N0(O.type, O._source, s0 ? s0.type : null);
        y0.setExtraStackFrame(p0);
      } else
        y0.setExtraStackFrame(null);
    }
    function D0(O, s0, p0, I0, H0) {
      {
        var z0 = Function.call.bind(Z0);
        for (var J0 in O)
          if (z0(O, J0)) {
            var K0 = void 0;
            try {
              if (typeof O[J0] != "function") {
                var Ae = Error((I0 || "React class") + ": " + p0 + " type `" + J0 + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof O[J0] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ae.name = "Invariant Violation", Ae;
              }
              K0 = O[J0](s0, J0, I0, p0, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Er) {
              K0 = Er;
            }
            K0 && !(K0 instanceof Error) && (W0(H0), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I0 || "React class", p0, J0, typeof K0), W0(null)), K0 instanceof Error && !(K0.message in d0) && (d0[K0.message] = !0, W0(H0), w("Failed %s type: %s", p0, K0.message), W0(null));
          }
      }
    }
    var V0 = Array.isArray;
    function j0(O) {
      return V0(O);
    }
    function Ar(O) {
      {
        var s0 = typeof Symbol == "function" && Symbol.toStringTag, p0 = s0 && O[Symbol.toStringTag] || O.constructor.name || "Object";
        return p0;
      }
    }
    function sr(O) {
      try {
        return fr(O), !1;
      } catch {
        return !0;
      }
    }
    function fr(O) {
      return "" + O;
    }
    function br(O) {
      if (sr(O))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ar(O)), fr(O);
    }
    var gr = m.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, kr, Or, W;
    W = {};
    function u0(O) {
      if (Z0.call(O, "ref")) {
        var s0 = Object.getOwnPropertyDescriptor(O, "ref").get;
        if (s0 && s0.isReactWarning)
          return !1;
      }
      return O.ref !== void 0;
    }
    function h0(O) {
      if (Z0.call(O, "key")) {
        var s0 = Object.getOwnPropertyDescriptor(O, "key").get;
        if (s0 && s0.isReactWarning)
          return !1;
      }
      return O.key !== void 0;
    }
    function E0(O, s0) {
      if (typeof O.ref == "string" && gr.current && s0 && gr.current.stateNode !== s0) {
        var p0 = L(gr.current.type);
        W[p0] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(gr.current.type), O.ref), W[p0] = !0);
      }
    }
    function U(O, s0) {
      {
        var p0 = function() {
          kr || (kr = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s0));
        };
        p0.isReactWarning = !0, Object.defineProperty(O, "key", {
          get: p0,
          configurable: !0
        });
      }
    }
    function t0(O, s0) {
      {
        var p0 = function() {
          Or || (Or = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s0));
        };
        p0.isReactWarning = !0, Object.defineProperty(O, "ref", {
          get: p0,
          configurable: !0
        });
      }
    }
    var Z = function(O, s0, p0, I0, H0, z0, J0) {
      var K0 = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: O,
        key: s0,
        ref: p0,
        props: J0,
        // Record the component responsible for creating this element.
        _owner: z0
      };
      return K0._store = {}, Object.defineProperty(K0._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(K0, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I0
      }), Object.defineProperty(K0, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H0
      }), Object.freeze && (Object.freeze(K0.props), Object.freeze(K0)), K0;
    };
    function f0(O, s0, p0, I0, H0) {
      {
        var z0, J0 = {}, K0 = null, Ae = null;
        p0 !== void 0 && (br(p0), K0 = "" + p0), h0(s0) && (br(s0.key), K0 = "" + s0.key), u0(s0) && (Ae = s0.ref, E0(s0, H0));
        for (z0 in s0)
          Z0.call(s0, z0) && !lr.hasOwnProperty(z0) && (J0[z0] = s0[z0]);
        if (O && O.defaultProps) {
          var Er = O.defaultProps;
          for (z0 in Er)
            J0[z0] === void 0 && (J0[z0] = Er[z0]);
        }
        if (K0 || Ae) {
          var Ir = typeof O == "function" ? O.displayName || O.name || "Unknown" : O;
          K0 && U(J0, Ir), Ae && t0(J0, Ir);
        }
        return Z(O, K0, Ae, H0, I0, gr.current, J0);
      }
    }
    var S0 = m.ReactCurrentOwner, p = m.ReactDebugCurrentFrame;
    function $(O) {
      if (O) {
        var s0 = O._owner, p0 = N0(O.type, O._source, s0 ? s0.type : null);
        p.setExtraStackFrame(p0);
      } else
        p.setExtraStackFrame(null);
    }
    var a0;
    a0 = !1;
    function I(O) {
      return typeof O == "object" && O !== null && O.$$typeof === r;
    }
    function X() {
      {
        if (S0.current) {
          var O = L(S0.current.type);
          if (O)
            return `

Check the render method of \`` + O + "`.";
        }
        return "";
      }
    }
    function H(O) {
      {
        if (O !== void 0) {
          var s0 = O.fileName.replace(/^.*[\\\/]/, ""), p0 = O.lineNumber;
          return `

Check your code at ` + s0 + ":" + p0 + ".";
        }
        return "";
      }
    }
    var g0 = {};
    function i0(O) {
      {
        var s0 = X();
        if (!s0) {
          var p0 = typeof O == "string" ? O : O.displayName || O.name;
          p0 && (s0 = `

Check the top-level render call using <` + p0 + ">.");
        }
        return s0;
      }
    }
    function o0(O, s0) {
      {
        if (!O._store || O._store.validated || O.key != null)
          return;
        O._store.validated = !0;
        var p0 = i0(s0);
        if (g0[p0])
          return;
        g0[p0] = !0;
        var I0 = "";
        O && O._owner && O._owner !== S0.current && (I0 = " It was passed a child from " + L(O._owner.type) + "."), $(O), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p0, I0), $(null);
      }
    }
    function c0(O, s0) {
      {
        if (typeof O != "object")
          return;
        if (j0(O))
          for (var p0 = 0; p0 < O.length; p0++) {
            var I0 = O[p0];
            I(I0) && o0(I0, s0);
          }
        else if (I(O))
          O._store && (O._store.validated = !0);
        else if (O) {
          var H0 = v(O);
          if (typeof H0 == "function" && H0 !== O.entries)
            for (var z0 = H0.call(O), J0; !(J0 = z0.next()).done; )
              I(J0.value) && o0(J0.value, s0);
        }
      }
    }
    function B0(O) {
      {
        var s0 = O.type;
        if (s0 == null || typeof s0 == "string")
          return;
        var p0;
        if (typeof s0 == "function")
          p0 = s0.propTypes;
        else if (typeof s0 == "object" && (s0.$$typeof === o || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s0.$$typeof === c))
          p0 = s0.propTypes;
        else
          return;
        if (p0) {
          var I0 = L(s0);
          D0(p0, O.props, "prop", I0, O);
        } else if (s0.PropTypes !== void 0 && !a0) {
          a0 = !0;
          var H0 = L(s0);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", H0 || "Unknown");
        }
        typeof s0.getDefaultProps == "function" && !s0.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function X0(O) {
      {
        for (var s0 = Object.keys(O.props), p0 = 0; p0 < s0.length; p0++) {
          var I0 = s0[p0];
          if (I0 !== "children" && I0 !== "key") {
            $(O), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I0), $(null);
            break;
          }
        }
        O.ref !== null && ($(O), w("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    function x0(O, s0, p0, I0, H0, z0) {
      {
        var J0 = M(O);
        if (!J0) {
          var K0 = "";
          (O === void 0 || typeof O == "object" && O !== null && Object.keys(O).length === 0) && (K0 += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ae = H(H0);
          Ae ? K0 += Ae : K0 += X();
          var Er;
          O === null ? Er = "null" : j0(O) ? Er = "array" : O !== void 0 && O.$$typeof === r ? (Er = "<" + (L(O.type) || "Unknown") + " />", K0 = " Did you accidentally export a JSX literal instead of a component?") : Er = typeof O, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Er, K0);
        }
        var Ir = f0(O, s0, p0, H0, z0);
        if (Ir == null)
          return Ir;
        if (J0) {
          var Fe = s0.children;
          if (Fe !== void 0)
            if (I0)
              if (j0(Fe)) {
                for (var R2 = 0; R2 < Fe.length; R2++)
                  c0(Fe[R2], O);
                Object.freeze && Object.freeze(Fe);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              c0(Fe, O);
        }
        return O === a ? X0(Ir) : B0(Ir), Ir;
      }
    }
    function L0(O, s0, p0) {
      return x0(O, s0, p0, !0);
    }
    function ir(O, s0, p0) {
      return x0(O, s0, p0, !1);
    }
    var U0 = ir, _r = L0;
    hn.Fragment = a, hn.jsx = U0, hn.jsxs = _r;
  }()), hn;
}
process.env.NODE_ENV === "production" ? Ju.exports = P3() : Ju.exports = O3();
var U4 = Ju.exports, L3 = Math.PI / 180;
function Y3() {
  return typeof window < "u" && ({}.toString.call(window) === "[object Window]" || {}.toString.call(window) === "[object global]");
}
const P2 = typeof global < "u" ? global : typeof window < "u" ? window : typeof WorkerGlobalScope < "u" ? self : {}, F0 = {
  _global: P2,
  version: "8.1.3",
  isBrowser: Y3(),
  isUnminified: /param/.test(function(s) {
  }.toString()),
  dblClickWindow: 400,
  getAngle(s) {
    return F0.angleDeg ? s * L3 : s;
  },
  enableTrace: !1,
  pointerEventsEnabled: !0,
  autoDrawEnabled: !0,
  hitOnDragEnabled: !1,
  capturePointerEventsEnabled: !1,
  _mouseListenClick: !1,
  _touchListenClick: !1,
  _pointerListenClick: !1,
  _mouseInDblClickWindow: !1,
  _touchInDblClickWindow: !1,
  _pointerInDblClickWindow: !1,
  pixelRatio: typeof window < "u" && window.devicePixelRatio || 1,
  dragDistance: 3,
  angleDeg: !0,
  showWarnings: !0,
  dragButtons: [0, 1],
  isDragging() {
    return F0.DD.isDragging;
  },
  isDragReady() {
    return !!F0.DD.node;
  },
  document: P2.document,
  _injectGlobal(s) {
    P2.Konva = s;
  }
}, mr = (s) => {
  F0[s.prototype.getClassName()] = s;
};
F0._injectGlobal(F0);
class Ie {
  constructor(r = [1, 0, 0, 1, 0, 0]) {
    this.dirty = !1, this.m = r && r.slice() || [1, 0, 0, 1, 0, 0];
  }
  reset() {
    this.m[0] = 1, this.m[1] = 0, this.m[2] = 0, this.m[3] = 1, this.m[4] = 0, this.m[5] = 0;
  }
  copy() {
    return new Ie(this.m);
  }
  copyInto(r) {
    r.m[0] = this.m[0], r.m[1] = this.m[1], r.m[2] = this.m[2], r.m[3] = this.m[3], r.m[4] = this.m[4], r.m[5] = this.m[5];
  }
  point(r) {
    var e = this.m;
    return {
      x: e[0] * r.x + e[2] * r.y + e[4],
      y: e[1] * r.x + e[3] * r.y + e[5]
    };
  }
  translate(r, e) {
    return this.m[4] += this.m[0] * r + this.m[2] * e, this.m[5] += this.m[1] * r + this.m[3] * e, this;
  }
  scale(r, e) {
    return this.m[0] *= r, this.m[1] *= r, this.m[2] *= e, this.m[3] *= e, this;
  }
  rotate(r) {
    var e = Math.cos(r), a = Math.sin(r), t = this.m[0] * e + this.m[2] * a, i = this.m[1] * e + this.m[3] * a, A = this.m[0] * -a + this.m[2] * e, n = this.m[1] * -a + this.m[3] * e;
    return this.m[0] = t, this.m[1] = i, this.m[2] = A, this.m[3] = n, this;
  }
  getTranslation() {
    return {
      x: this.m[4],
      y: this.m[5]
    };
  }
  skew(r, e) {
    var a = this.m[0] + this.m[2] * e, t = this.m[1] + this.m[3] * e, i = this.m[2] + this.m[0] * r, A = this.m[3] + this.m[1] * r;
    return this.m[0] = a, this.m[1] = t, this.m[2] = i, this.m[3] = A, this;
  }
  multiply(r) {
    var e = this.m[0] * r.m[0] + this.m[2] * r.m[1], a = this.m[1] * r.m[0] + this.m[3] * r.m[1], t = this.m[0] * r.m[2] + this.m[2] * r.m[3], i = this.m[1] * r.m[2] + this.m[3] * r.m[3], A = this.m[0] * r.m[4] + this.m[2] * r.m[5] + this.m[4], n = this.m[1] * r.m[4] + this.m[3] * r.m[5] + this.m[5];
    return this.m[0] = e, this.m[1] = a, this.m[2] = t, this.m[3] = i, this.m[4] = A, this.m[5] = n, this;
  }
  invert() {
    var r = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]), e = this.m[3] * r, a = -this.m[1] * r, t = -this.m[2] * r, i = this.m[0] * r, A = r * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), n = r * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
    return this.m[0] = e, this.m[1] = a, this.m[2] = t, this.m[3] = i, this.m[4] = A, this.m[5] = n, this;
  }
  getMatrix() {
    return this.m;
  }
  setAbsolutePosition(r, e) {
    var a = this.m[0], t = this.m[1], i = this.m[2], A = this.m[3], n = this.m[4], o = this.m[5], f = (a * (e - o) - t * (r - n)) / (a * A - t * i), l = (r - n - i * f) / a;
    return this.translate(l, f);
  }
  decompose() {
    var r = this.m[0], e = this.m[1], a = this.m[2], t = this.m[3], i = this.m[4], A = this.m[5], n = r * t - e * a;
    let o = {
      x: i,
      y: A,
      rotation: 0,
      scaleX: 0,
      scaleY: 0,
      skewX: 0,
      skewY: 0
    };
    if (r != 0 || e != 0) {
      var f = Math.sqrt(r * r + e * e);
      o.rotation = e > 0 ? Math.acos(r / f) : -Math.acos(r / f), o.scaleX = f, o.scaleY = n / f, o.skewX = (r * a + e * t) / n, o.skewY = 0;
    } else if (a != 0 || t != 0) {
      var l = Math.sqrt(a * a + t * t);
      o.rotation = Math.PI / 2 - (t > 0 ? Math.acos(-a / l) : -Math.acos(a / l)), o.scaleX = n / l, o.scaleY = l, o.skewX = 0, o.skewY = (r * a + e * t) / n;
    }
    return o.rotation = K._getRotation(o.rotation), o;
  }
}
var H3 = "[object Array]", j3 = "[object Number]", U3 = "[object String]", z3 = "[object Boolean]", Q3 = Math.PI / 180, J3 = 180 / Math.PI, _u = "#", K3 = "", q3 = "0", $3 = "Konva warning: ", Ph = "Konva error: ", r8 = "rgb(", Eu = {
  aliceblue: [240, 248, 255],
  antiquewhite: [250, 235, 215],
  aqua: [0, 255, 255],
  aquamarine: [127, 255, 212],
  azure: [240, 255, 255],
  beige: [245, 245, 220],
  bisque: [255, 228, 196],
  black: [0, 0, 0],
  blanchedalmond: [255, 235, 205],
  blue: [0, 0, 255],
  blueviolet: [138, 43, 226],
  brown: [165, 42, 42],
  burlywood: [222, 184, 135],
  cadetblue: [95, 158, 160],
  chartreuse: [127, 255, 0],
  chocolate: [210, 105, 30],
  coral: [255, 127, 80],
  cornflowerblue: [100, 149, 237],
  cornsilk: [255, 248, 220],
  crimson: [220, 20, 60],
  cyan: [0, 255, 255],
  darkblue: [0, 0, 139],
  darkcyan: [0, 139, 139],
  darkgoldenrod: [184, 132, 11],
  darkgray: [169, 169, 169],
  darkgreen: [0, 100, 0],
  darkgrey: [169, 169, 169],
  darkkhaki: [189, 183, 107],
  darkmagenta: [139, 0, 139],
  darkolivegreen: [85, 107, 47],
  darkorange: [255, 140, 0],
  darkorchid: [153, 50, 204],
  darkred: [139, 0, 0],
  darksalmon: [233, 150, 122],
  darkseagreen: [143, 188, 143],
  darkslateblue: [72, 61, 139],
  darkslategray: [47, 79, 79],
  darkslategrey: [47, 79, 79],
  darkturquoise: [0, 206, 209],
  darkviolet: [148, 0, 211],
  deeppink: [255, 20, 147],
  deepskyblue: [0, 191, 255],
  dimgray: [105, 105, 105],
  dimgrey: [105, 105, 105],
  dodgerblue: [30, 144, 255],
  firebrick: [178, 34, 34],
  floralwhite: [255, 255, 240],
  forestgreen: [34, 139, 34],
  fuchsia: [255, 0, 255],
  gainsboro: [220, 220, 220],
  ghostwhite: [248, 248, 255],
  gold: [255, 215, 0],
  goldenrod: [218, 165, 32],
  gray: [128, 128, 128],
  green: [0, 128, 0],
  greenyellow: [173, 255, 47],
  grey: [128, 128, 128],
  honeydew: [240, 255, 240],
  hotpink: [255, 105, 180],
  indianred: [205, 92, 92],
  indigo: [75, 0, 130],
  ivory: [255, 255, 240],
  khaki: [240, 230, 140],
  lavender: [230, 230, 250],
  lavenderblush: [255, 240, 245],
  lawngreen: [124, 252, 0],
  lemonchiffon: [255, 250, 205],
  lightblue: [173, 216, 230],
  lightcoral: [240, 128, 128],
  lightcyan: [224, 255, 255],
  lightgoldenrodyellow: [250, 250, 210],
  lightgray: [211, 211, 211],
  lightgreen: [144, 238, 144],
  lightgrey: [211, 211, 211],
  lightpink: [255, 182, 193],
  lightsalmon: [255, 160, 122],
  lightseagreen: [32, 178, 170],
  lightskyblue: [135, 206, 250],
  lightslategray: [119, 136, 153],
  lightslategrey: [119, 136, 153],
  lightsteelblue: [176, 196, 222],
  lightyellow: [255, 255, 224],
  lime: [0, 255, 0],
  limegreen: [50, 205, 50],
  linen: [250, 240, 230],
  magenta: [255, 0, 255],
  maroon: [128, 0, 0],
  mediumaquamarine: [102, 205, 170],
  mediumblue: [0, 0, 205],
  mediumorchid: [186, 85, 211],
  mediumpurple: [147, 112, 219],
  mediumseagreen: [60, 179, 113],
  mediumslateblue: [123, 104, 238],
  mediumspringgreen: [0, 250, 154],
  mediumturquoise: [72, 209, 204],
  mediumvioletred: [199, 21, 133],
  midnightblue: [25, 25, 112],
  mintcream: [245, 255, 250],
  mistyrose: [255, 228, 225],
  moccasin: [255, 228, 181],
  navajowhite: [255, 222, 173],
  navy: [0, 0, 128],
  oldlace: [253, 245, 230],
  olive: [128, 128, 0],
  olivedrab: [107, 142, 35],
  orange: [255, 165, 0],
  orangered: [255, 69, 0],
  orchid: [218, 112, 214],
  palegoldenrod: [238, 232, 170],
  palegreen: [152, 251, 152],
  paleturquoise: [175, 238, 238],
  palevioletred: [219, 112, 147],
  papayawhip: [255, 239, 213],
  peachpuff: [255, 218, 185],
  peru: [205, 133, 63],
  pink: [255, 192, 203],
  plum: [221, 160, 203],
  powderblue: [176, 224, 230],
  purple: [128, 0, 128],
  rebeccapurple: [102, 51, 153],
  red: [255, 0, 0],
  rosybrown: [188, 143, 143],
  royalblue: [65, 105, 225],
  saddlebrown: [139, 69, 19],
  salmon: [250, 128, 114],
  sandybrown: [244, 164, 96],
  seagreen: [46, 139, 87],
  seashell: [255, 245, 238],
  sienna: [160, 82, 45],
  silver: [192, 192, 192],
  skyblue: [135, 206, 235],
  slateblue: [106, 90, 205],
  slategray: [119, 128, 144],
  slategrey: [119, 128, 144],
  snow: [255, 255, 250],
  springgreen: [0, 255, 127],
  steelblue: [70, 130, 180],
  tan: [210, 180, 140],
  teal: [0, 128, 128],
  thistle: [216, 191, 216],
  transparent: [255, 255, 255, 0],
  tomato: [255, 99, 71],
  turquoise: [64, 224, 208],
  violet: [238, 130, 238],
  wheat: [245, 222, 179],
  white: [255, 255, 255],
  whitesmoke: [245, 245, 245],
  yellow: [255, 255, 0],
  yellowgreen: [154, 205, 5]
}, e8 = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/, yf = [];
const a8 = typeof requestAnimationFrame < "u" && requestAnimationFrame || function(s) {
  setTimeout(s, 60);
}, K = {
  _isElement(s) {
    return !!(s && s.nodeType == 1);
  },
  _isFunction(s) {
    return !!(s && s.constructor && s.call && s.apply);
  },
  _isPlainObject(s) {
    return !!s && s.constructor === Object;
  },
  _isArray(s) {
    return Object.prototype.toString.call(s) === H3;
  },
  _isNumber(s) {
    return Object.prototype.toString.call(s) === j3 && !isNaN(s) && isFinite(s);
  },
  _isString(s) {
    return Object.prototype.toString.call(s) === U3;
  },
  _isBoolean(s) {
    return Object.prototype.toString.call(s) === z3;
  },
  isObject(s) {
    return s instanceof Object;
  },
  isValidSelector(s) {
    if (typeof s != "string")
      return !1;
    var r = s[0];
    return r === "#" || r === "." || r === r.toUpperCase();
  },
  _sign(s) {
    return s === 0 || s > 0 ? 1 : -1;
  },
  requestAnimFrame(s) {
    yf.push(s), yf.length === 1 && a8(function() {
      const r = yf;
      yf = [], r.forEach(function(e) {
        e();
      });
    });
  },
  createCanvasElement() {
    var s = document.createElement("canvas");
    try {
      s.style = s.style || {};
    } catch {
    }
    return s;
  },
  createImageElement() {
    return document.createElement("img");
  },
  _isInDocument(s) {
    for (; s = s.parentNode; )
      if (s == document)
        return !0;
    return !1;
  },
  _urlToImage(s, r) {
    var e = K.createImageElement();
    e.onload = function() {
      r(e);
    }, e.src = s;
  },
  _rgbToHex(s, r, e) {
    return ((1 << 24) + (s << 16) + (r << 8) + e).toString(16).slice(1);
  },
  _hexToRgb(s) {
    s = s.replace(_u, K3);
    var r = parseInt(s, 16);
    return {
      r: r >> 16 & 255,
      g: r >> 8 & 255,
      b: r & 255
    };
  },
  getRandomColor() {
    for (var s = (Math.random() * 16777215 << 0).toString(16); s.length < 6; )
      s = q3 + s;
    return _u + s;
  },
  getRGB(s) {
    var r;
    return s in Eu ? (r = Eu[s], {
      r: r[0],
      g: r[1],
      b: r[2]
    }) : s[0] === _u ? this._hexToRgb(s.substring(1)) : s.substr(0, 4) === r8 ? (r = e8.exec(s.replace(/ /g, "")), {
      r: parseInt(r[1], 10),
      g: parseInt(r[2], 10),
      b: parseInt(r[3], 10)
    }) : {
      r: 0,
      g: 0,
      b: 0
    };
  },
  colorToRGBA(s) {
    return s = s || "black", K._namedColorToRBA(s) || K._hex3ColorToRGBA(s) || K._hex6ColorToRGBA(s) || K._rgbColorToRGBA(s) || K._rgbaColorToRGBA(s) || K._hslColorToRGBA(s);
  },
  _namedColorToRBA(s) {
    var r = Eu[s.toLowerCase()];
    return r ? {
      r: r[0],
      g: r[1],
      b: r[2],
      a: 1
    } : null;
  },
  _rgbColorToRGBA(s) {
    if (s.indexOf("rgb(") === 0) {
      s = s.match(/rgb\(([^)]+)\)/)[1];
      var r = s.split(/ *, */).map(Number);
      return {
        r: r[0],
        g: r[1],
        b: r[2],
        a: 1
      };
    }
  },
  _rgbaColorToRGBA(s) {
    if (s.indexOf("rgba(") === 0) {
      s = s.match(/rgba\(([^)]+)\)/)[1];
      var r = s.split(/ *, */).map(Number);
      return {
        r: r[0],
        g: r[1],
        b: r[2],
        a: r[3]
      };
    }
  },
  _hex6ColorToRGBA(s) {
    if (s[0] === "#" && s.length === 7)
      return {
        r: parseInt(s.slice(1, 3), 16),
        g: parseInt(s.slice(3, 5), 16),
        b: parseInt(s.slice(5, 7), 16),
        a: 1
      };
  },
  _hex3ColorToRGBA(s) {
    if (s[0] === "#" && s.length === 4)
      return {
        r: parseInt(s[1] + s[1], 16),
        g: parseInt(s[2] + s[2], 16),
        b: parseInt(s[3] + s[3], 16),
        a: 1
      };
  },
  _hslColorToRGBA(s) {
    if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(s)) {
      const [r, ...e] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(s), a = Number(e[0]) / 360, t = Number(e[1]) / 100, i = Number(e[2]) / 100;
      let A, n, o;
      if (t === 0)
        return o = i * 255, {
          r: Math.round(o),
          g: Math.round(o),
          b: Math.round(o),
          a: 1
        };
      i < 0.5 ? A = i * (1 + t) : A = i + t - i * t;
      const f = 2 * i - A, l = [0, 0, 0];
      for (let c = 0; c < 3; c++)
        n = a + 1 / 3 * -(c - 1), n < 0 && n++, n > 1 && n--, 6 * n < 1 ? o = f + (A - f) * 6 * n : 2 * n < 1 ? o = A : 3 * n < 2 ? o = f + (A - f) * (2 / 3 - n) * 6 : o = f, l[c] = o * 255;
      return {
        r: Math.round(l[0]),
        g: Math.round(l[1]),
        b: Math.round(l[2]),
        a: 1
      };
    }
  },
  haveIntersection(s, r) {
    return !(r.x > s.x + s.width || r.x + r.width < s.x || r.y > s.y + s.height || r.y + r.height < s.y);
  },
  cloneObject(s) {
    var r = {};
    for (var e in s)
      this._isPlainObject(s[e]) ? r[e] = this.cloneObject(s[e]) : this._isArray(s[e]) ? r[e] = this.cloneArray(s[e]) : r[e] = s[e];
    return r;
  },
  cloneArray(s) {
    return s.slice(0);
  },
  degToRad(s) {
    return s * Q3;
  },
  radToDeg(s) {
    return s * J3;
  },
  _degToRad(s) {
    return K.warn("Util._degToRad is removed. Please use public Util.degToRad instead."), K.degToRad(s);
  },
  _radToDeg(s) {
    return K.warn("Util._radToDeg is removed. Please use public Util.radToDeg instead."), K.radToDeg(s);
  },
  _getRotation(s) {
    return F0.angleDeg ? K.radToDeg(s) : s;
  },
  _capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  },
  throw(s) {
    throw new Error(Ph + s);
  },
  error(s) {
    console.error(Ph + s);
  },
  warn(s) {
    F0.showWarnings && console.warn($3 + s);
  },
  each(s, r) {
    for (var e in s)
      r(e, s[e]);
  },
  _inRange(s, r, e) {
    return r <= s && s < e;
  },
  _getProjectionToSegment(s, r, e, a, t, i) {
    var A, n, o, f = (s - e) * (s - e) + (r - a) * (r - a);
    if (f == 0)
      A = s, n = r, o = (t - e) * (t - e) + (i - a) * (i - a);
    else {
      var l = ((t - s) * (e - s) + (i - r) * (a - r)) / f;
      l < 0 ? (A = s, n = r, o = (s - t) * (s - t) + (r - i) * (r - i)) : l > 1 ? (A = e, n = a, o = (e - t) * (e - t) + (a - i) * (a - i)) : (A = s + l * (e - s), n = r + l * (a - r), o = (A - t) * (A - t) + (n - i) * (n - i));
    }
    return [A, n, o];
  },
  _getProjectionToLine(s, r, e) {
    var a = K.cloneObject(s), t = Number.MAX_VALUE;
    return r.forEach(function(i, A) {
      if (!(!e && A === r.length - 1)) {
        var n = r[(A + 1) % r.length], o = K._getProjectionToSegment(i.x, i.y, n.x, n.y, s.x, s.y), f = o[0], l = o[1], c = o[2];
        c < t && (a.x = f, a.y = l, t = c);
      }
    }), a;
  },
  _prepareArrayForTween(s, r, e) {
    var a, t = [], i = [];
    if (s.length > r.length) {
      var A = r;
      r = s, s = A;
    }
    for (a = 0; a < s.length; a += 2)
      t.push({
        x: s[a],
        y: s[a + 1]
      });
    for (a = 0; a < r.length; a += 2)
      i.push({
        x: r[a],
        y: r[a + 1]
      });
    var n = [];
    return i.forEach(function(o) {
      var f = K._getProjectionToLine(o, t, e);
      n.push(f.x), n.push(f.y);
    }), n;
  },
  _prepareToStringify(s) {
    var r;
    s.visitedByCircularReferenceRemoval = !0;
    for (var e in s)
      if (s.hasOwnProperty(e) && s[e] && typeof s[e] == "object") {
        if (r = Object.getOwnPropertyDescriptor(s, e), s[e].visitedByCircularReferenceRemoval || K._isElement(s[e]))
          if (r.configurable)
            delete s[e];
          else
            return null;
        else if (K._prepareToStringify(s[e]) === null)
          if (r.configurable)
            delete s[e];
          else
            return null;
      }
    return delete s.visitedByCircularReferenceRemoval, s;
  },
  _assign(s, r) {
    for (var e in r)
      s[e] = r[e];
    return s;
  },
  _getFirstPointerId(s) {
    return s.touches ? s.changedTouches[0].identifier : 999;
  }
};
function $t(s) {
  return K._isString(s) ? '"' + s + '"' : Object.prototype.toString.call(s) === "[object Number]" || K._isBoolean(s) ? s : Object.prototype.toString.call(s);
}
function z4(s) {
  return s > 255 ? 255 : s < 0 ? 0 : Math.round(s);
}
function v0() {
  if (F0.isUnminified)
    return function(s, r) {
      return K._isNumber(s) || K.warn($t(s) + ' is a not valid value for "' + r + '" attribute. The value should be a number.'), s;
    };
}
function Q4(s) {
  if (F0.isUnminified)
    return function(r, e) {
      let a = K._isNumber(r), t = K._isArray(r) && r.length == s;
      return !a && !t && K.warn($t(r) + ' is a not valid value for "' + e + '" attribute. The value should be a number or Array<number>(' + s + ")"), r;
    };
}
function hh() {
  if (F0.isUnminified)
    return function(s, r) {
      var e = K._isNumber(s), a = s === "auto";
      return e || a || K.warn($t(s) + ' is a not valid value for "' + r + '" attribute. The value should be a number or "auto".'), s;
    };
}
function ln() {
  if (F0.isUnminified)
    return function(s, r) {
      return K._isString(s) || K.warn($t(s) + ' is a not valid value for "' + r + '" attribute. The value should be a string.'), s;
    };
}
function J4() {
  if (F0.isUnminified)
    return function(s, r) {
      const e = K._isString(s), a = Object.prototype.toString.call(s) === "[object CanvasGradient]" || s && s.addColorStop;
      return e || a || K.warn($t(s) + ' is a not valid value for "' + r + '" attribute. The value should be a string or a native gradient.'), s;
    };
}
function t8() {
  if (F0.isUnminified)
    return function(s, r) {
      return K._isArray(s) ? s.forEach(function(e) {
        K._isNumber(e) || K.warn('"' + r + '" attribute has non numeric element ' + e + ". Make sure that all elements are numbers.");
      }) : K.warn($t(s) + ' is a not valid value for "' + r + '" attribute. The value should be a array of numbers.'), s;
    };
}
function oa() {
  if (F0.isUnminified)
    return function(s, r) {
      var e = s === !0 || s === !1;
      return e || K.warn($t(s) + ' is a not valid value for "' + r + '" attribute. The value should be a boolean.'), s;
    };
}
function i8(s) {
  if (F0.isUnminified)
    return function(r, e) {
      return K.isObject(r) || K.warn($t(r) + ' is a not valid value for "' + e + '" attribute. The value should be an object with properties ' + s), r;
    };
}
var dn = "get", bn = "set";
const P = {
  addGetterSetter(s, r, e, a, t) {
    P.addGetter(s, r, e), P.addSetter(s, r, a, t), P.addOverloadedGetterSetter(s, r);
  },
  addGetter(s, r, e) {
    var a = dn + K._capitalize(r);
    s.prototype[a] = s.prototype[a] || function() {
      var t = this.attrs[r];
      return t === void 0 ? e : t;
    };
  },
  addSetter(s, r, e, a) {
    var t = bn + K._capitalize(r);
    s.prototype[t] || P.overWriteSetter(s, r, e, a);
  },
  overWriteSetter(s, r, e, a) {
    var t = bn + K._capitalize(r);
    s.prototype[t] = function(i) {
      return e && i !== void 0 && i !== null && (i = e.call(this, i, r)), this._setAttr(r, i), a && a.call(this), this;
    };
  },
  addComponentsGetterSetter(s, r, e, a, t) {
    var i = e.length, A = K._capitalize, n = dn + A(r), o = bn + A(r), f, l;
    s.prototype[n] = function() {
      var h = {};
      for (f = 0; f < i; f++)
        l = e[f], h[l] = this.getAttr(r + A(l));
      return h;
    };
    var c = i8(e);
    s.prototype[o] = function(h) {
      var d = this.attrs[r], b;
      a && (h = a.call(this, h)), c && c.call(this, h, r);
      for (b in h)
        h.hasOwnProperty(b) && this._setAttr(r + A(b), h[b]);
      return this._fireChangeEvent(r, d, h), t && t.call(this), this;
    }, P.addOverloadedGetterSetter(s, r);
  },
  addOverloadedGetterSetter(s, r) {
    var e = K._capitalize(r), a = bn + e, t = dn + e;
    s.prototype[r] = function() {
      return arguments.length ? (this[a](arguments[0]), this) : this[t]();
    };
  },
  addDeprecatedGetterSetter(s, r, e, a) {
    K.error("Adding deprecated " + r);
    var t = dn + K._capitalize(r), i = r + " property is deprecated and will be removed soon. Look at Konva change log for more information.";
    s.prototype[t] = function() {
      K.error(i);
      var A = this.attrs[r];
      return A === void 0 ? e : A;
    }, P.addSetter(s, r, a, function() {
      K.error(i);
    }), P.addOverloadedGetterSetter(s, r);
  },
  backCompat(s, r) {
    K.each(r, function(e, a) {
      var t = s.prototype[a], i = dn + K._capitalize(e), A = bn + K._capitalize(e);
      function n() {
        t.apply(this, arguments), K.error('"' + e + '" method is deprecated and will be removed soon. Use ""' + a + '" instead.');
      }
      s.prototype[e] = n, s.prototype[i] = n, s.prototype[A] = n;
    });
  },
  afterSetFilter() {
    this._filterUpToDate = !1;
  }
};
function A8(s) {
  var r = [], e = s.length, a = K, t, i;
  for (t = 0; t < e; t++)
    i = s[t], a._isNumber(i) ? i = Math.round(i * 1e3) / 1e3 : a._isString(i) || (i = i + ""), r.push(i);
  return r;
}
var Oh = ",", n8 = "(", o8 = ")", s8 = "([", f8 = "])", l8 = ";", u8 = "()", c8 = "=", Lh = [
  "arc",
  "arcTo",
  "beginPath",
  "bezierCurveTo",
  "clearRect",
  "clip",
  "closePath",
  "createLinearGradient",
  "createPattern",
  "createRadialGradient",
  "drawImage",
  "ellipse",
  "fill",
  "fillText",
  "getImageData",
  "createImageData",
  "lineTo",
  "moveTo",
  "putImageData",
  "quadraticCurveTo",
  "rect",
  "restore",
  "rotate",
  "save",
  "scale",
  "setLineDash",
  "setTransform",
  "stroke",
  "strokeText",
  "transform",
  "translate"
], h8 = [
  "fillStyle",
  "strokeStyle",
  "shadowColor",
  "shadowBlur",
  "shadowOffsetX",
  "shadowOffsetY",
  "lineCap",
  "lineDashOffset",
  "lineJoin",
  "lineWidth",
  "miterLimit",
  "font",
  "textAlign",
  "textBaseline",
  "globalAlpha",
  "globalCompositeOperation",
  "imageSmoothingEnabled"
];
const d8 = 100;
class fu {
  constructor(r) {
    this.canvas = r, this._context = r._canvas.getContext("2d"), F0.enableTrace && (this.traceArr = [], this._enableTrace());
  }
  fillShape(r) {
    r.fillEnabled() && this._fill(r);
  }
  _fill(r) {
  }
  strokeShape(r) {
    r.hasStroke() && this._stroke(r);
  }
  _stroke(r) {
  }
  fillStrokeShape(r) {
    r.attrs.fillAfterStrokeEnabled ? (this.strokeShape(r), this.fillShape(r)) : (this.fillShape(r), this.strokeShape(r));
  }
  getTrace(r, e) {
    var a = this.traceArr, t = a.length, i = "", A, n, o, f;
    for (A = 0; A < t; A++)
      n = a[A], o = n.method, o ? (f = n.args, i += o, r ? i += u8 : K._isArray(f[0]) ? i += s8 + f.join(Oh) + f8 : (e && (f = f.map((l) => typeof l == "number" ? Math.floor(l) : l)), i += n8 + f.join(Oh) + o8)) : (i += n.property, r || (i += c8 + n.val)), i += l8;
    return i;
  }
  clearTrace() {
    this.traceArr = [];
  }
  _trace(r) {
    var e = this.traceArr, a;
    e.push(r), a = e.length, a >= d8 && e.shift();
  }
  reset() {
    var r = this.getCanvas().getPixelRatio();
    this.setTransform(1 * r, 0, 0, 1 * r, 0, 0);
  }
  getCanvas() {
    return this.canvas;
  }
  clear(r) {
    var e = this.getCanvas();
    r ? this.clearRect(r.x || 0, r.y || 0, r.width || 0, r.height || 0) : this.clearRect(0, 0, e.getWidth() / e.pixelRatio, e.getHeight() / e.pixelRatio);
  }
  _applyLineCap(r) {
    var e = r.getLineCap();
    e && this.setAttr("lineCap", e);
  }
  _applyOpacity(r) {
    var e = r.getAbsoluteOpacity();
    e !== 1 && this.setAttr("globalAlpha", e);
  }
  _applyLineJoin(r) {
    var e = r.attrs.lineJoin;
    e && this.setAttr("lineJoin", e);
  }
  setAttr(r, e) {
    this._context[r] = e;
  }
  arc(r, e, a, t, i, A) {
    this._context.arc(r, e, a, t, i, A);
  }
  arcTo(r, e, a, t, i) {
    this._context.arcTo(r, e, a, t, i);
  }
  beginPath() {
    this._context.beginPath();
  }
  bezierCurveTo(r, e, a, t, i, A) {
    this._context.bezierCurveTo(r, e, a, t, i, A);
  }
  clearRect(r, e, a, t) {
    this._context.clearRect(r, e, a, t);
  }
  clip() {
    this._context.clip();
  }
  closePath() {
    this._context.closePath();
  }
  createImageData(r, e) {
    var a = arguments;
    if (a.length === 2)
      return this._context.createImageData(r, e);
    if (a.length === 1)
      return this._context.createImageData(r);
  }
  createLinearGradient(r, e, a, t) {
    return this._context.createLinearGradient(r, e, a, t);
  }
  createPattern(r, e) {
    return this._context.createPattern(r, e);
  }
  createRadialGradient(r, e, a, t, i, A) {
    return this._context.createRadialGradient(r, e, a, t, i, A);
  }
  drawImage(r, e, a, t, i, A, n, o, f) {
    var l = arguments, c = this._context;
    l.length === 3 ? c.drawImage(r, e, a) : l.length === 5 ? c.drawImage(r, e, a, t, i) : l.length === 9 && c.drawImage(r, e, a, t, i, A, n, o, f);
  }
  ellipse(r, e, a, t, i, A, n, o) {
    this._context.ellipse(r, e, a, t, i, A, n, o);
  }
  isPointInPath(r, e) {
    return this._context.isPointInPath(r, e);
  }
  fill(r) {
    r ? this._context.fill(r) : this._context.fill();
  }
  fillRect(r, e, a, t) {
    this._context.fillRect(r, e, a, t);
  }
  strokeRect(r, e, a, t) {
    this._context.strokeRect(r, e, a, t);
  }
  fillText(r, e, a, t) {
    t ? this._context.fillText(r, e, a, t) : this._context.fillText(r, e, a);
  }
  measureText(r) {
    return this._context.measureText(r);
  }
  getImageData(r, e, a, t) {
    return this._context.getImageData(r, e, a, t);
  }
  lineTo(r, e) {
    this._context.lineTo(r, e);
  }
  moveTo(r, e) {
    this._context.moveTo(r, e);
  }
  rect(r, e, a, t) {
    this._context.rect(r, e, a, t);
  }
  putImageData(r, e, a) {
    this._context.putImageData(r, e, a);
  }
  quadraticCurveTo(r, e, a, t) {
    this._context.quadraticCurveTo(r, e, a, t);
  }
  restore() {
    this._context.restore();
  }
  rotate(r) {
    this._context.rotate(r);
  }
  save() {
    this._context.save();
  }
  scale(r, e) {
    this._context.scale(r, e);
  }
  setLineDash(r) {
    this._context.setLineDash ? this._context.setLineDash(r) : "mozDash" in this._context ? this._context.mozDash = r : "webkitLineDash" in this._context && (this._context.webkitLineDash = r);
  }
  getLineDash() {
    return this._context.getLineDash();
  }
  setTransform(r, e, a, t, i, A) {
    this._context.setTransform(r, e, a, t, i, A);
  }
  stroke(r) {
    r ? this._context.stroke(r) : this._context.stroke();
  }
  strokeText(r, e, a, t) {
    this._context.strokeText(r, e, a, t);
  }
  transform(r, e, a, t, i, A) {
    this._context.transform(r, e, a, t, i, A);
  }
  translate(r, e) {
    this._context.translate(r, e);
  }
  _enableTrace() {
    var r = this, e = Lh.length, a = this.setAttr, t, i, A = function(n) {
      var o = r[n], f;
      r[n] = function() {
        return i = A8(Array.prototype.slice.call(arguments, 0)), f = o.apply(r, arguments), r._trace({
          method: n,
          args: i
        }), f;
      };
    };
    for (t = 0; t < e; t++)
      A(Lh[t]);
    r.setAttr = function() {
      a.apply(r, arguments);
      var n = arguments[0], o = arguments[1];
      (n === "shadowOffsetX" || n === "shadowOffsetY" || n === "shadowBlur") && (o = o / this.canvas.getPixelRatio()), r._trace({
        property: n,
        val: o
      });
    };
  }
  _applyGlobalCompositeOperation(r) {
    const e = r.attrs.globalCompositeOperation;
    var a = !e || e === "source-over";
    a || this.setAttr("globalCompositeOperation", e);
  }
}
h8.forEach(function(s) {
  Object.defineProperty(fu.prototype, s, {
    get() {
      return this._context[s];
    },
    set(r) {
      this._context[s] = r;
    }
  });
});
class b8 extends fu {
  _fillColor(r) {
    var e = r.fill();
    this.setAttr("fillStyle", e), r._fillFunc(this);
  }
  _fillPattern(r) {
    this.setAttr("fillStyle", r._getFillPattern()), r._fillFunc(this);
  }
  _fillLinearGradient(r) {
    var e = r._getLinearGradient();
    e && (this.setAttr("fillStyle", e), r._fillFunc(this));
  }
  _fillRadialGradient(r) {
    var e = r._getRadialGradient();
    e && (this.setAttr("fillStyle", e), r._fillFunc(this));
  }
  _fill(r) {
    var e = r.fill(), a = r.getFillPriority();
    if (e && a === "color") {
      this._fillColor(r);
      return;
    }
    var t = r.getFillPatternImage();
    if (t && a === "pattern") {
      this._fillPattern(r);
      return;
    }
    var i = r.getFillLinearGradientColorStops();
    if (i && a === "linear-gradient") {
      this._fillLinearGradient(r);
      return;
    }
    var A = r.getFillRadialGradientColorStops();
    if (A && a === "radial-gradient") {
      this._fillRadialGradient(r);
      return;
    }
    e ? this._fillColor(r) : t ? this._fillPattern(r) : i ? this._fillLinearGradient(r) : A && this._fillRadialGradient(r);
  }
  _strokeLinearGradient(r) {
    var e = r.getStrokeLinearGradientStartPoint(), a = r.getStrokeLinearGradientEndPoint(), t = r.getStrokeLinearGradientColorStops(), i = this.createLinearGradient(e.x, e.y, a.x, a.y);
    if (t) {
      for (var A = 0; A < t.length; A += 2)
        i.addColorStop(t[A], t[A + 1]);
      this.setAttr("strokeStyle", i);
    }
  }
  _stroke(r) {
    var e = r.dash(), a = r.getStrokeScaleEnabled();
    if (r.hasStroke()) {
      if (!a) {
        this.save();
        var t = this.getCanvas().getPixelRatio();
        this.setTransform(t, 0, 0, t, 0, 0);
      }
      this._applyLineCap(r), e && r.dashEnabled() && (this.setLineDash(e), this.setAttr("lineDashOffset", r.dashOffset())), this.setAttr("lineWidth", r.strokeWidth()), r.getShadowForStrokeEnabled() || this.setAttr("shadowColor", "rgba(0,0,0,0)");
      var i = r.getStrokeLinearGradientColorStops();
      i ? this._strokeLinearGradient(r) : this.setAttr("strokeStyle", r.stroke()), r._strokeFunc(this), a || this.restore();
    }
  }
  _applyShadow(r) {
    var e, a, t, i = (e = r.getShadowRGBA()) !== null && e !== void 0 ? e : "black", A = (a = r.getShadowBlur()) !== null && a !== void 0 ? a : 5, n = (t = r.getShadowOffset()) !== null && t !== void 0 ? t : {
      x: 0,
      y: 0
    }, o = r.getAbsoluteScale(), f = this.canvas.getPixelRatio(), l = o.x * f, c = o.y * f;
    this.setAttr("shadowColor", i), this.setAttr("shadowBlur", A * Math.min(Math.abs(l), Math.abs(c))), this.setAttr("shadowOffsetX", n.x * l), this.setAttr("shadowOffsetY", n.y * c);
  }
}
class g8 extends fu {
  _fill(r) {
    this.save(), this.setAttr("fillStyle", r.colorKey), r._fillFuncHit(this), this.restore();
  }
  strokeShape(r) {
    r.hasHitStroke() && this._stroke(r);
  }
  _stroke(r) {
    if (r.hasHitStroke()) {
      var e = r.getStrokeScaleEnabled();
      if (!e) {
        this.save();
        var a = this.getCanvas().getPixelRatio();
        this.setTransform(a, 0, 0, a, 0, 0);
      }
      this._applyLineCap(r);
      var t = r.hitStrokeWidth(), i = t === "auto" ? r.strokeWidth() : t;
      this.setAttr("lineWidth", i), this.setAttr("strokeStyle", r.colorKey), r._strokeFuncHit(this), e || this.restore();
    }
  }
}
var _f;
function v8() {
  if (_f)
    return _f;
  var s = K.createCanvasElement(), r = s.getContext("2d");
  return _f = function() {
    var e = F0._global.devicePixelRatio || 1, a = r.webkitBackingStorePixelRatio || r.mozBackingStorePixelRatio || r.msBackingStorePixelRatio || r.oBackingStorePixelRatio || r.backingStorePixelRatio || 1;
    return e / a;
  }(), _f;
}
class lu {
  constructor(r) {
    this.pixelRatio = 1, this.width = 0, this.height = 0, this.isCache = !1;
    var e = r || {}, a = e.pixelRatio || F0.pixelRatio || v8();
    this.pixelRatio = a, this._canvas = K.createCanvasElement(), this._canvas.style.padding = "0", this._canvas.style.margin = "0", this._canvas.style.border = "0", this._canvas.style.background = "transparent", this._canvas.style.position = "absolute", this._canvas.style.top = "0", this._canvas.style.left = "0";
  }
  getContext() {
    return this.context;
  }
  getPixelRatio() {
    return this.pixelRatio;
  }
  setPixelRatio(r) {
    var e = this.pixelRatio;
    this.pixelRatio = r, this.setSize(this.getWidth() / e, this.getHeight() / e);
  }
  setWidth(r) {
    this.width = this._canvas.width = r * this.pixelRatio, this._canvas.style.width = r + "px";
    var e = this.pixelRatio, a = this.getContext()._context;
    a.scale(e, e);
  }
  setHeight(r) {
    this.height = this._canvas.height = r * this.pixelRatio, this._canvas.style.height = r + "px";
    var e = this.pixelRatio, a = this.getContext()._context;
    a.scale(e, e);
  }
  getWidth() {
    return this.width;
  }
  getHeight() {
    return this.height;
  }
  setSize(r, e) {
    this.setWidth(r || 0), this.setHeight(e || 0);
  }
  toDataURL(r, e) {
    try {
      return this._canvas.toDataURL(r, e);
    } catch {
      try {
        return this._canvas.toDataURL();
      } catch (t) {
        return K.error("Unable to get data URL. " + t.message + " For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html."), "";
      }
    }
  }
}
P.addGetterSetter(lu, "pixelRatio", void 0, v0());
class O2 extends lu {
  constructor(r = { width: 0, height: 0 }) {
    super(r), this.context = new b8(this), this.setSize(r.width, r.height);
  }
}
class dh extends lu {
  constructor(r = { width: 0, height: 0 }) {
    super(r), this.hitCanvas = !0, this.context = new g8(this), this.setSize(r.width, r.height);
  }
}
const tr = {
  get isDragging() {
    var s = !1;
    return tr._dragElements.forEach((r) => {
      r.dragStatus === "dragging" && (s = !0);
    }), s;
  },
  justDragged: !1,
  get node() {
    var s;
    return tr._dragElements.forEach((r) => {
      s = r.node;
    }), s;
  },
  _dragElements: /* @__PURE__ */ new Map(),
  _drag(s) {
    const r = [];
    tr._dragElements.forEach((e, a) => {
      const { node: t } = e, i = t.getStage();
      i.setPointersPositions(s), e.pointerId === void 0 && (e.pointerId = K._getFirstPointerId(s));
      const A = i._changedPointerPositions.find((f) => f.id === e.pointerId);
      if (A) {
        if (e.dragStatus !== "dragging") {
          var n = t.dragDistance(), o = Math.max(Math.abs(A.x - e.startPointerPos.x), Math.abs(A.y - e.startPointerPos.y));
          if (o < n || (t.startDrag({ evt: s }), !t.isDragging()))
            return;
        }
        t._setDragPosition(s, e), r.push(t);
      }
    }), r.forEach((e) => {
      e.fire("dragmove", {
        type: "dragmove",
        target: e,
        evt: s
      }, !0);
    });
  },
  _endDragBefore(s) {
    tr._dragElements.forEach((r) => {
      const { node: e } = r, a = e.getStage();
      if (s && a.setPointersPositions(s), !a._changedPointerPositions.find((A) => A.id === r.pointerId))
        return;
      (r.dragStatus === "dragging" || r.dragStatus === "stopped") && (tr.justDragged = !0, F0._mouseListenClick = !1, F0._touchListenClick = !1, F0._pointerListenClick = !1, r.dragStatus = "stopped");
      const i = r.node.getLayer() || r.node instanceof F0.Stage && r.node;
      i && i.batchDraw();
    });
  },
  _endDragAfter(s) {
    tr._dragElements.forEach((r, e) => {
      r.dragStatus === "stopped" && r.node.fire("dragend", {
        type: "dragend",
        target: r.node,
        evt: s
      }, !0), r.dragStatus !== "dragging" && tr._dragElements.delete(e);
    });
  }
};
F0.isBrowser && (window.addEventListener("mouseup", tr._endDragBefore, !0), window.addEventListener("touchend", tr._endDragBefore, !0), window.addEventListener("mousemove", tr._drag), window.addEventListener("touchmove", tr._drag), window.addEventListener("mouseup", tr._endDragAfter, !1), window.addEventListener("touchend", tr._endDragAfter, !1));
var Vf = "absoluteOpacity", Ef = "allEventListeners", Wa = "absoluteTransform", Yh = "absoluteScale", gn = "canvas", p8 = "Change", m8 = "children", k8 = "konva", Ku = "listening", Hh = "mouseenter", jh = "mouseleave", Uh = "set", zh = "Shape", Pf = " ", Qh = "stage", mt = "transform", w8 = "Stage", qu = "visible", y8 = [
  "xChange.konva",
  "yChange.konva",
  "scaleXChange.konva",
  "scaleYChange.konva",
  "skewXChange.konva",
  "skewYChange.konva",
  "rotationChange.konva",
  "offsetXChange.konva",
  "offsetYChange.konva",
  "transformsEnabledChange.konva"
].join(Pf);
let _8 = 1, w0 = class $u {
  constructor(r) {
    this._id = _8++, this.eventListeners = {}, this.attrs = {}, this.index = 0, this._allEventListeners = null, this.parent = null, this._cache = /* @__PURE__ */ new Map(), this._attachedDepsListeners = /* @__PURE__ */ new Map(), this._lastPos = null, this._batchingTransformChange = !1, this._needClearTransformCache = !1, this._filterUpToDate = !1, this._isUnderCache = !1, this._dragEventId = null, this._shouldFireChangeEvents = !1, this.setAttrs(r), this._shouldFireChangeEvents = !0;
  }
  hasChildren() {
    return !1;
  }
  _clearCache(r) {
    (r === mt || r === Wa) && this._cache.get(r) ? this._cache.get(r).dirty = !0 : r ? this._cache.delete(r) : this._cache.clear();
  }
  _getCache(r, e) {
    var a = this._cache.get(r), t = r === mt || r === Wa, i = a === void 0 || t && a.dirty === !0;
    return i && (a = e.call(this), this._cache.set(r, a)), a;
  }
  _calculate(r, e, a) {
    if (!this._attachedDepsListeners.get(r)) {
      const t = e.map((i) => i + "Change.konva").join(Pf);
      this.on(t, () => {
        this._clearCache(r);
      }), this._attachedDepsListeners.set(r, !0);
    }
    return this._getCache(r, a);
  }
  _getCanvasCache() {
    return this._cache.get(gn);
  }
  _clearSelfAndDescendantCache(r) {
    this._clearCache(r), r === Wa && this.fire("absoluteTransformChange");
  }
  clearCache() {
    return this._cache.delete(gn), this._clearSelfAndDescendantCache(), this._requestDraw(), this;
  }
  cache(r) {
    var e = r || {}, a = {};
    (e.x === void 0 || e.y === void 0 || e.width === void 0 || e.height === void 0) && (a = this.getClientRect({
      skipTransform: !0,
      relativeTo: this.getParent()
    }));
    var t = Math.ceil(e.width || a.width), i = Math.ceil(e.height || a.height), A = e.pixelRatio, n = e.x === void 0 ? a.x : e.x, o = e.y === void 0 ? a.y : e.y, f = e.offset || 0, l = e.drawBorder || !1, c = e.hitCanvasPixelRatio || 1;
    if (!t || !i) {
      K.error("Can not cache the node. Width or height of the node equals 0. Caching is skipped.");
      return;
    }
    t += f * 2, i += f * 2, n -= f, o -= f;
    var h = new O2({
      pixelRatio: A,
      width: t,
      height: i
    }), d = new O2({
      pixelRatio: A,
      width: 0,
      height: 0
    }), b = new dh({
      pixelRatio: c,
      width: t,
      height: i
    }), g = h.getContext(), v = b.getContext();
    return b.isCache = !0, h.isCache = !0, this._cache.delete(gn), this._filterUpToDate = !1, e.imageSmoothingEnabled === !1 && (h.getContext()._context.imageSmoothingEnabled = !1, d.getContext()._context.imageSmoothingEnabled = !1), g.save(), v.save(), g.translate(-n, -o), v.translate(-n, -o), this._isUnderCache = !0, this._clearSelfAndDescendantCache(Vf), this._clearSelfAndDescendantCache(Yh), this.drawScene(h, this), this.drawHit(b, this), this._isUnderCache = !1, g.restore(), v.restore(), l && (g.save(), g.beginPath(), g.rect(0, 0, t, i), g.closePath(), g.setAttr("strokeStyle", "red"), g.setAttr("lineWidth", 5), g.stroke(), g.restore()), this._cache.set(gn, {
      scene: h,
      filter: d,
      hit: b,
      x: n,
      y: o
    }), this._requestDraw(), this;
  }
  isCached() {
    return this._cache.has(gn);
  }
  getClientRect(r) {
    throw new Error('abstract "getClientRect" method call');
  }
  _transformedRect(r, e) {
    var a = [
      { x: r.x, y: r.y },
      { x: r.x + r.width, y: r.y },
      { x: r.x + r.width, y: r.y + r.height },
      { x: r.x, y: r.y + r.height }
    ], t, i, A, n, o = this.getAbsoluteTransform(e);
    return a.forEach(function(f) {
      var l = o.point(f);
      t === void 0 && (t = A = l.x, i = n = l.y), t = Math.min(t, l.x), i = Math.min(i, l.y), A = Math.max(A, l.x), n = Math.max(n, l.y);
    }), {
      x: t,
      y: i,
      width: A - t,
      height: n - i
    };
  }
  _drawCachedSceneCanvas(r) {
    r.save(), r._applyOpacity(this), r._applyGlobalCompositeOperation(this);
    const e = this._getCanvasCache();
    r.translate(e.x, e.y);
    var a = this._getCachedSceneCanvas(), t = a.pixelRatio;
    r.drawImage(a._canvas, 0, 0, a.width / t, a.height / t), r.restore();
  }
  _drawCachedHitCanvas(r) {
    var e = this._getCanvasCache(), a = e.hit;
    r.save(), r.translate(e.x, e.y), r.drawImage(a._canvas, 0, 0, a.width / a.pixelRatio, a.height / a.pixelRatio), r.restore();
  }
  _getCachedSceneCanvas() {
    var r = this.filters(), e = this._getCanvasCache(), a = e.scene, t = e.filter, i = t.getContext(), A, n, o, f;
    if (r) {
      if (!this._filterUpToDate) {
        var l = a.pixelRatio;
        t.setSize(a.width / a.pixelRatio, a.height / a.pixelRatio);
        try {
          for (A = r.length, i.clear(), i.drawImage(a._canvas, 0, 0, a.getWidth() / l, a.getHeight() / l), n = i.getImageData(0, 0, t.getWidth(), t.getHeight()), o = 0; o < A; o++) {
            if (f = r[o], typeof f != "function") {
              K.error("Filter should be type of function, but got " + typeof f + " instead. Please check correct filters");
              continue;
            }
            f.call(this, n), i.putImageData(n, 0, 0);
          }
        } catch (c) {
          K.error("Unable to apply filter. " + c.message + " This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.");
        }
        this._filterUpToDate = !0;
      }
      return t;
    }
    return a;
  }
  on(r, e) {
    if (this._cache && this._cache.delete(Ef), arguments.length === 3)
      return this._delegate.apply(this, arguments);
    var a = r.split(Pf), t = a.length, i, A, n, o, f;
    for (i = 0; i < t; i++)
      A = a[i], n = A.split("."), o = n[0], f = n[1] || "", this.eventListeners[o] || (this.eventListeners[o] = []), this.eventListeners[o].push({
        name: f,
        handler: e
      });
    return this;
  }
  off(r, e) {
    var a = (r || "").split(Pf), t = a.length, i, A, n, o, f, l;
    if (this._cache && this._cache.delete(Ef), !r)
      for (A in this.eventListeners)
        this._off(A);
    for (i = 0; i < t; i++)
      if (n = a[i], o = n.split("."), f = o[0], l = o[1], f)
        this.eventListeners[f] && this._off(f, l, e);
      else
        for (A in this.eventListeners)
          this._off(A, l, e);
    return this;
  }
  dispatchEvent(r) {
    var e = {
      target: this,
      type: r.type,
      evt: r
    };
    return this.fire(r.type, e), this;
  }
  addEventListener(r, e) {
    return this.on(r, function(a) {
      e.call(this, a.evt);
    }), this;
  }
  removeEventListener(r) {
    return this.off(r), this;
  }
  _delegate(r, e, a) {
    var t = this;
    this.on(r, function(i) {
      for (var A = i.target.findAncestors(e, !0, t), n = 0; n < A.length; n++)
        i = K.cloneObject(i), i.currentTarget = A[n], a.call(A[n], i);
    });
  }
  remove() {
    return this.isDragging() && this.stopDrag(), tr._dragElements.delete(this._id), this._remove(), this;
  }
  _clearCaches() {
    this._clearSelfAndDescendantCache(Wa), this._clearSelfAndDescendantCache(Vf), this._clearSelfAndDescendantCache(Yh), this._clearSelfAndDescendantCache(Qh), this._clearSelfAndDescendantCache(qu), this._clearSelfAndDescendantCache(Ku);
  }
  _remove() {
    this._clearCaches();
    var r = this.getParent();
    r && r.children && (r.children.splice(this.index, 1), r._setChildrenIndices(), this.parent = null);
  }
  destroy() {
    return this.remove(), this;
  }
  getAttr(r) {
    var e = "get" + K._capitalize(r);
    return K._isFunction(this[e]) ? this[e]() : this.attrs[r];
  }
  getAncestors() {
    for (var r = this.getParent(), e = []; r; )
      e.push(r), r = r.getParent();
    return e;
  }
  getAttrs() {
    return this.attrs || {};
  }
  setAttrs(r) {
    return this._batchTransformChanges(() => {
      var e, a;
      if (!r)
        return this;
      for (e in r)
        e !== m8 && (a = Uh + K._capitalize(e), K._isFunction(this[a]) ? this[a](r[e]) : this._setAttr(e, r[e]));
    }), this;
  }
  isListening() {
    return this._getCache(Ku, this._isListening);
  }
  _isListening(r) {
    if (!this.listening())
      return !1;
    const a = this.getParent();
    return a && a !== r && this !== r ? a._isListening(r) : !0;
  }
  isVisible() {
    return this._getCache(qu, this._isVisible);
  }
  _isVisible(r) {
    if (!this.visible())
      return !1;
    const a = this.getParent();
    return a && a !== r && this !== r ? a._isVisible(r) : !0;
  }
  shouldDrawHit(r, e = !1) {
    if (r)
      return this._isVisible(r) && this._isListening(r);
    var a = this.getLayer(), t = !1;
    tr._dragElements.forEach((A) => {
      A.dragStatus === "dragging" && (A.node.nodeType === "Stage" || A.node.getLayer() === a) && (t = !0);
    });
    var i = !e && !F0.hitOnDragEnabled && t;
    return this.isListening() && this.isVisible() && !i;
  }
  show() {
    return this.visible(!0), this;
  }
  hide() {
    return this.visible(!1), this;
  }
  getZIndex() {
    return this.index || 0;
  }
  getAbsoluteZIndex() {
    var r = this.getDepth(), e = this, a = 0, t, i, A, n;
    function o(f) {
      for (t = [], i = f.length, A = 0; A < i; A++)
        n = f[A], a++, n.nodeType !== zh && (t = t.concat(n.getChildren().slice())), n._id === e._id && (A = i);
      t.length > 0 && t[0].getDepth() <= r && o(t);
    }
    return e.nodeType !== w8 && o(e.getStage().getChildren()), a;
  }
  getDepth() {
    for (var r = 0, e = this.parent; e; )
      r++, e = e.parent;
    return r;
  }
  _batchTransformChanges(r) {
    this._batchingTransformChange = !0, r(), this._batchingTransformChange = !1, this._needClearTransformCache && (this._clearCache(mt), this._clearSelfAndDescendantCache(Wa)), this._needClearTransformCache = !1;
  }
  setPosition(r) {
    return this._batchTransformChanges(() => {
      this.x(r.x), this.y(r.y);
    }), this;
  }
  getPosition() {
    return {
      x: this.x(),
      y: this.y()
    };
  }
  getRelativePointerPosition() {
    if (!this.getStage())
      return null;
    var r = this.getStage().getPointerPosition();
    if (!r)
      return null;
    var e = this.getAbsoluteTransform().copy();
    return e.invert(), e.point(r);
  }
  getAbsolutePosition(r) {
    let e = !1, a = this.parent;
    for (; a; ) {
      if (a.isCached()) {
        e = !0;
        break;
      }
      a = a.parent;
    }
    e && !r && (r = !0);
    var t = this.getAbsoluteTransform(r).getMatrix(), i = new Ie(), A = this.offset();
    return i.m = t.slice(), i.translate(A.x, A.y), i.getTranslation();
  }
  setAbsolutePosition(r) {
    var e = this._clearTransform();
    this.attrs.x = e.x, this.attrs.y = e.y, delete e.x, delete e.y, this._clearCache(mt);
    var a = this._getAbsoluteTransform().copy();
    return a.invert(), a.translate(r.x, r.y), r = {
      x: this.attrs.x + a.getTranslation().x,
      y: this.attrs.y + a.getTranslation().y
    }, this._setTransform(e), this.setPosition({ x: r.x, y: r.y }), this._clearCache(mt), this._clearSelfAndDescendantCache(Wa), this;
  }
  _setTransform(r) {
    var e;
    for (e in r)
      this.attrs[e] = r[e];
  }
  _clearTransform() {
    var r = {
      x: this.x(),
      y: this.y(),
      rotation: this.rotation(),
      scaleX: this.scaleX(),
      scaleY: this.scaleY(),
      offsetX: this.offsetX(),
      offsetY: this.offsetY(),
      skewX: this.skewX(),
      skewY: this.skewY()
    };
    return this.attrs.x = 0, this.attrs.y = 0, this.attrs.rotation = 0, this.attrs.scaleX = 1, this.attrs.scaleY = 1, this.attrs.offsetX = 0, this.attrs.offsetY = 0, this.attrs.skewX = 0, this.attrs.skewY = 0, r;
  }
  move(r) {
    var e = r.x, a = r.y, t = this.x(), i = this.y();
    return e !== void 0 && (t += e), a !== void 0 && (i += a), this.setPosition({ x: t, y: i }), this;
  }
  _eachAncestorReverse(r, e) {
    var a = [], t = this.getParent(), i, A;
    if (!(e && e._id === this._id)) {
      for (a.unshift(this); t && (!e || t._id !== e._id); )
        a.unshift(t), t = t.parent;
      for (i = a.length, A = 0; A < i; A++)
        r(a[A]);
    }
  }
  rotate(r) {
    return this.rotation(this.rotation() + r), this;
  }
  moveToTop() {
    if (!this.parent)
      return K.warn("Node has no parent. moveToTop function is ignored."), !1;
    var r = this.index;
    return this.parent.children.splice(r, 1), this.parent.children.push(this), this.parent._setChildrenIndices(), !0;
  }
  moveUp() {
    if (!this.parent)
      return K.warn("Node has no parent. moveUp function is ignored."), !1;
    var r = this.index, e = this.parent.getChildren().length;
    return r < e - 1 ? (this.parent.children.splice(r, 1), this.parent.children.splice(r + 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveDown() {
    if (!this.parent)
      return K.warn("Node has no parent. moveDown function is ignored."), !1;
    var r = this.index;
    return r > 0 ? (this.parent.children.splice(r, 1), this.parent.children.splice(r - 1, 0, this), this.parent._setChildrenIndices(), !0) : !1;
  }
  moveToBottom() {
    if (!this.parent)
      return K.warn("Node has no parent. moveToBottom function is ignored."), !1;
    var r = this.index;
    return r > 0 ? (this.parent.children.splice(r, 1), this.parent.children.unshift(this), this.parent._setChildrenIndices(), !0) : !1;
  }
  setZIndex(r) {
    if (!this.parent)
      return K.warn("Node has no parent. zIndex parameter is ignored."), this;
    (r < 0 || r >= this.parent.children.length) && K.warn("Unexpected value " + r + " for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to " + (this.parent.children.length - 1) + ".");
    var e = this.index;
    return this.parent.children.splice(e, 1), this.parent.children.splice(r, 0, this), this.parent._setChildrenIndices(), this;
  }
  getAbsoluteOpacity() {
    return this._getCache(Vf, this._getAbsoluteOpacity);
  }
  _getAbsoluteOpacity() {
    var r = this.opacity(), e = this.getParent();
    return e && !e._isUnderCache && (r *= e.getAbsoluteOpacity()), r;
  }
  moveTo(r) {
    return this.getParent() !== r && (this._remove(), r.add(this)), this;
  }
  toObject() {
    var r = {}, e = this.getAttrs(), a, t, i, A, n;
    r.attrs = {};
    for (a in e)
      t = e[a], n = K.isObject(t) && !K._isPlainObject(t) && !K._isArray(t), !n && (i = typeof this[a] == "function" && this[a], delete e[a], A = i ? i.call(this) : null, e[a] = t, A !== t && (r.attrs[a] = t));
    return r.className = this.getClassName(), K._prepareToStringify(r);
  }
  toJSON() {
    return JSON.stringify(this.toObject());
  }
  getParent() {
    return this.parent;
  }
  findAncestors(r, e, a) {
    var t = [];
    e && this._isMatch(r) && t.push(this);
    for (var i = this.parent; i; ) {
      if (i === a)
        return t;
      i._isMatch(r) && t.push(i), i = i.parent;
    }
    return t;
  }
  isAncestorOf(r) {
    return !1;
  }
  findAncestor(r, e, a) {
    return this.findAncestors(r, e, a)[0];
  }
  _isMatch(r) {
    if (!r)
      return !1;
    if (typeof r == "function")
      return r(this);
    var e = r.replace(/ /g, "").split(","), a = e.length, t, i;
    for (t = 0; t < a; t++)
      if (i = e[t], K.isValidSelector(i) || (K.warn('Selector "' + i + '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".'), K.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".'), K.warn("Konva is awesome, right?")), i.charAt(0) === "#") {
        if (this.id() === i.slice(1))
          return !0;
      } else if (i.charAt(0) === ".") {
        if (this.hasName(i.slice(1)))
          return !0;
      } else if (this.className === i || this.nodeType === i)
        return !0;
    return !1;
  }
  getLayer() {
    var r = this.getParent();
    return r ? r.getLayer() : null;
  }
  getStage() {
    return this._getCache(Qh, this._getStage);
  }
  _getStage() {
    var r = this.getParent();
    if (r)
      return r.getStage();
  }
  fire(r, e = {}, a) {
    return e.target = e.target || this, a ? this._fireAndBubble(r, e) : this._fire(r, e), this;
  }
  getAbsoluteTransform(r) {
    return r ? this._getAbsoluteTransform(r) : this._getCache(Wa, this._getAbsoluteTransform);
  }
  _getAbsoluteTransform(r) {
    var e;
    if (r)
      return e = new Ie(), this._eachAncestorReverse(function(t) {
        var i = t.transformsEnabled();
        i === "all" ? e.multiply(t.getTransform()) : i === "position" && e.translate(t.x() - t.offsetX(), t.y() - t.offsetY());
      }, r), e;
    e = this._cache.get(Wa) || new Ie(), this.parent ? this.parent.getAbsoluteTransform().copyInto(e) : e.reset();
    var a = this.transformsEnabled();
    if (a === "all")
      e.multiply(this.getTransform());
    else if (a === "position") {
      const t = this.attrs.x || 0, i = this.attrs.y || 0, A = this.attrs.offsetX || 0, n = this.attrs.offsetY || 0;
      e.translate(t - A, i - n);
    }
    return e.dirty = !1, e;
  }
  getAbsoluteScale(r) {
    for (var e = this; e; )
      e._isUnderCache && (r = e), e = e.getParent();
    const t = this.getAbsoluteTransform(r).decompose();
    return {
      x: t.scaleX,
      y: t.scaleY
    };
  }
  getAbsoluteRotation() {
    return this.getAbsoluteTransform().decompose().rotation;
  }
  getTransform() {
    return this._getCache(mt, this._getTransform);
  }
  _getTransform() {
    var r, e, a = this._cache.get(mt) || new Ie();
    a.reset();
    var t = this.x(), i = this.y(), A = F0.getAngle(this.rotation()), n = (r = this.attrs.scaleX) !== null && r !== void 0 ? r : 1, o = (e = this.attrs.scaleY) !== null && e !== void 0 ? e : 1, f = this.attrs.skewX || 0, l = this.attrs.skewY || 0, c = this.attrs.offsetX || 0, h = this.attrs.offsetY || 0;
    return (t !== 0 || i !== 0) && a.translate(t, i), A !== 0 && a.rotate(A), (f !== 0 || l !== 0) && a.skew(f, l), (n !== 1 || o !== 1) && a.scale(n, o), (c !== 0 || h !== 0) && a.translate(-1 * c, -1 * h), a.dirty = !1, a;
  }
  clone(r) {
    var e = K.cloneObject(this.attrs), a, t, i, A, n;
    for (a in r)
      e[a] = r[a];
    var o = new this.constructor(e);
    for (a in this.eventListeners)
      for (t = this.eventListeners[a], i = t.length, A = 0; A < i; A++)
        n = t[A], n.name.indexOf(k8) < 0 && (o.eventListeners[a] || (o.eventListeners[a] = []), o.eventListeners[a].push(n));
    return o;
  }
  _toKonvaCanvas(r) {
    r = r || {};
    var e = this.getClientRect(), a = this.getStage(), t = r.x !== void 0 ? r.x : e.x, i = r.y !== void 0 ? r.y : e.y, A = r.pixelRatio || 1, n = new O2({
      width: r.width || e.width || (a ? a.width() : 0),
      height: r.height || e.height || (a ? a.height() : 0),
      pixelRatio: A
    }), o = n.getContext();
    return o.save(), (t || i) && o.translate(-1 * t, -1 * i), this.drawScene(n), o.restore(), n;
  }
  toCanvas(r) {
    return this._toKonvaCanvas(r)._canvas;
  }
  toDataURL(r) {
    r = r || {};
    var e = r.mimeType || null, a = r.quality || null, t = this._toKonvaCanvas(r).toDataURL(e, a);
    return r.callback && r.callback(t), t;
  }
  toImage(r) {
    if (!r || !r.callback)
      throw "callback required for toImage method config argument";
    var e = r.callback;
    delete r.callback, K._urlToImage(this.toDataURL(r), function(a) {
      e(a);
    });
  }
  setSize(r) {
    return this.width(r.width), this.height(r.height), this;
  }
  getSize() {
    return {
      width: this.width(),
      height: this.height()
    };
  }
  getClassName() {
    return this.className || this.nodeType;
  }
  getType() {
    return this.nodeType;
  }
  getDragDistance() {
    return this.attrs.dragDistance !== void 0 ? this.attrs.dragDistance : this.parent ? this.parent.getDragDistance() : F0.dragDistance;
  }
  _off(r, e, a) {
    var t = this.eventListeners[r], i, A, n;
    for (i = 0; i < t.length; i++)
      if (A = t[i].name, n = t[i].handler, (A !== "konva" || e === "konva") && (!e || A === e) && (!a || a === n)) {
        if (t.splice(i, 1), t.length === 0) {
          delete this.eventListeners[r];
          break;
        }
        i--;
      }
  }
  _fireChangeEvent(r, e, a) {
    this._fire(r + p8, {
      oldVal: e,
      newVal: a
    });
  }
  addName(r) {
    if (!this.hasName(r)) {
      var e = this.name(), a = e ? e + " " + r : r;
      this.name(a);
    }
    return this;
  }
  hasName(r) {
    if (!r)
      return !1;
    const e = this.name();
    if (!e)
      return !1;
    var a = (e || "").split(/\s/g);
    return a.indexOf(r) !== -1;
  }
  removeName(r) {
    var e = (this.name() || "").split(/\s/g), a = e.indexOf(r);
    return a !== -1 && (e.splice(a, 1), this.name(e.join(" "))), this;
  }
  setAttr(r, e) {
    var a = this[Uh + K._capitalize(r)];
    return K._isFunction(a) ? a.call(this, e) : this._setAttr(r, e), this;
  }
  _requestDraw() {
    if (F0.autoDrawEnabled) {
      const r = this.getLayer() || this.getStage();
      r == null || r.batchDraw();
    }
  }
  _setAttr(r, e) {
    var a = this.attrs[r];
    a === e && !K.isObject(e) || (e == null ? delete this.attrs[r] : this.attrs[r] = e, this._shouldFireChangeEvents && this._fireChangeEvent(r, a, e), this._requestDraw());
  }
  _setComponentAttr(r, e, a) {
    var t;
    a !== void 0 && (t = this.attrs[r], t || (this.attrs[r] = this.getAttr(r)), this.attrs[r][e] = a, this._fireChangeEvent(r, t, a));
  }
  _fireAndBubble(r, e, a) {
    e && this.nodeType === zh && (e.target = this);
    var t = (r === Hh || r === jh) && (a && (this === a || this.isAncestorOf && this.isAncestorOf(a)) || this.nodeType === "Stage" && !a);
    if (!t) {
      this._fire(r, e);
      var i = (r === Hh || r === jh) && a && a.isAncestorOf && a.isAncestorOf(this) && !a.isAncestorOf(this.parent);
      (e && !e.cancelBubble || !e) && this.parent && this.parent.isListening() && !i && (a && a.parent ? this._fireAndBubble.call(this.parent, r, e, a) : this._fireAndBubble.call(this.parent, r, e));
    }
  }
  _getProtoListeners(r) {
    let e = this._cache.get(Ef);
    if (!e) {
      e = {};
      let t = Object.getPrototypeOf(this);
      for (; t; ) {
        if (!t.eventListeners) {
          t = Object.getPrototypeOf(t);
          continue;
        }
        for (var a in t.eventListeners) {
          const i = t.eventListeners[a], A = e[a] || [];
          e[a] = i.concat(A);
        }
        t = Object.getPrototypeOf(t);
      }
      this._cache.set(Ef, e);
    }
    return e[r];
  }
  _fire(r, e) {
    e = e || {}, e.currentTarget = this, e.type = r;
    const a = this._getProtoListeners(r);
    if (a)
      for (var t = 0; t < a.length; t++)
        a[t].handler.call(this, e);
    const i = this.eventListeners[r];
    if (i)
      for (var t = 0; t < i.length; t++)
        i[t].handler.call(this, e);
  }
  draw() {
    return this.drawScene(), this.drawHit(), this;
  }
  _createDragElement(r) {
    var e = r ? r.pointerId : void 0, a = this.getStage(), t = this.getAbsolutePosition(), i = a._getPointerById(e) || a._changedPointerPositions[0] || t;
    tr._dragElements.set(this._id, {
      node: this,
      startPointerPos: i,
      offset: {
        x: i.x - t.x,
        y: i.y - t.y
      },
      dragStatus: "ready",
      pointerId: e
    });
  }
  startDrag(r, e = !0) {
    tr._dragElements.has(this._id) || this._createDragElement(r);
    const a = tr._dragElements.get(this._id);
    a.dragStatus = "dragging", this.fire("dragstart", {
      type: "dragstart",
      target: this,
      evt: r && r.evt
    }, e);
  }
  _setDragPosition(r, e) {
    const a = this.getStage()._getPointerById(e.pointerId);
    if (a) {
      var t = {
        x: a.x - e.offset.x,
        y: a.y - e.offset.y
      }, i = this.dragBoundFunc();
      if (i !== void 0) {
        const A = i.call(this, t, r);
        A ? t = A : K.warn("dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.");
      }
      (!this._lastPos || this._lastPos.x !== t.x || this._lastPos.y !== t.y) && (this.setAbsolutePosition(t), this._requestDraw()), this._lastPos = t;
    }
  }
  stopDrag(r) {
    const e = tr._dragElements.get(this._id);
    e && (e.dragStatus = "stopped"), tr._endDragBefore(r), tr._endDragAfter(r);
  }
  setDraggable(r) {
    this._setAttr("draggable", r), this._dragChange();
  }
  isDragging() {
    const r = tr._dragElements.get(this._id);
    return r ? r.dragStatus === "dragging" : !1;
  }
  _listenDrag() {
    this._dragCleanup(), this.on("mousedown.konva touchstart.konva", function(r) {
      var e = r.evt.button !== void 0, a = !e || F0.dragButtons.indexOf(r.evt.button) >= 0;
      if (a && !this.isDragging()) {
        var t = !1;
        tr._dragElements.forEach((i) => {
          this.isAncestorOf(i.node) && (t = !0);
        }), t || this._createDragElement(r);
      }
    });
  }
  _dragChange() {
    if (this.attrs.draggable)
      this._listenDrag();
    else {
      this._dragCleanup();
      var r = this.getStage();
      if (!r)
        return;
      const e = tr._dragElements.get(this._id), a = e && e.dragStatus === "dragging", t = e && e.dragStatus === "ready";
      a ? this.stopDrag() : t && tr._dragElements.delete(this._id);
    }
  }
  _dragCleanup() {
    this.off("mousedown.konva"), this.off("touchstart.konva");
  }
  isClientRectOnScreen(r = { x: 0, y: 0 }) {
    const e = this.getStage();
    if (!e)
      return !1;
    const a = {
      x: -r.x,
      y: -r.y,
      width: e.width() + r.x,
      height: e.height() + r.y
    };
    return K.haveIntersection(a, this.getClientRect());
  }
  static create(r, e) {
    return K._isString(r) && (r = JSON.parse(r)), this._createNode(r, e);
  }
  static _createNode(r, e) {
    var a = $u.prototype.getClassName.call(r), t = r.children, i, A, n;
    e && (r.attrs.container = e), F0[a] || (K.warn('Can not find a node with class name "' + a + '". Fallback to "Shape".'), a = "Shape");
    const o = F0[a];
    if (i = new o(r.attrs), t)
      for (A = t.length, n = 0; n < A; n++)
        i.add($u._createNode(t[n]));
    return i;
  }
};
w0.prototype.nodeType = "Node";
w0.prototype._attrsAffectingSize = [];
w0.prototype.eventListeners = {};
w0.prototype.on.call(w0.prototype, y8, function() {
  if (this._batchingTransformChange) {
    this._needClearTransformCache = !0;
    return;
  }
  this._clearCache(mt), this._clearSelfAndDescendantCache(Wa);
});
w0.prototype.on.call(w0.prototype, "visibleChange.konva", function() {
  this._clearSelfAndDescendantCache(qu);
});
w0.prototype.on.call(w0.prototype, "listeningChange.konva", function() {
  this._clearSelfAndDescendantCache(Ku);
});
w0.prototype.on.call(w0.prototype, "opacityChange.konva", function() {
  this._clearSelfAndDescendantCache(Vf);
});
const dr = P.addGetterSetter;
dr(w0, "zIndex");
dr(w0, "absolutePosition");
dr(w0, "position");
dr(w0, "x", 0, v0());
dr(w0, "y", 0, v0());
dr(w0, "globalCompositeOperation", "source-over", ln());
dr(w0, "opacity", 1, v0());
dr(w0, "name", "", ln());
dr(w0, "id", "", ln());
dr(w0, "rotation", 0, v0());
P.addComponentsGetterSetter(w0, "scale", ["x", "y"]);
dr(w0, "scaleX", 1, v0());
dr(w0, "scaleY", 1, v0());
P.addComponentsGetterSetter(w0, "skew", ["x", "y"]);
dr(w0, "skewX", 0, v0());
dr(w0, "skewY", 0, v0());
P.addComponentsGetterSetter(w0, "offset", ["x", "y"]);
dr(w0, "offsetX", 0, v0());
dr(w0, "offsetY", 0, v0());
dr(w0, "dragDistance", null, v0());
dr(w0, "width", 0, v0());
dr(w0, "height", 0, v0());
dr(w0, "listening", !0, oa());
dr(w0, "preventDefault", !0, oa());
dr(w0, "filters", null, function(s) {
  return this._filterUpToDate = !1, s;
});
dr(w0, "visible", !0, oa());
dr(w0, "transformsEnabled", "all", ln());
dr(w0, "size");
dr(w0, "dragBoundFunc");
dr(w0, "draggable", !1, oa());
P.backCompat(w0, {
  rotateDeg: "rotate",
  setRotationDeg: "setRotation",
  getRotationDeg: "getRotation"
});
class Se extends w0 {
  constructor() {
    super(...arguments), this.children = [];
  }
  getChildren(r) {
    if (!r)
      return this.children || [];
    const e = this.children || [];
    var a = [];
    return e.forEach(function(t) {
      r(t) && a.push(t);
    }), a;
  }
  hasChildren() {
    return this.getChildren().length > 0;
  }
  removeChildren() {
    return this.getChildren().forEach((r) => {
      r.parent = null, r.index = 0, r.remove();
    }), this.children = [], this._requestDraw(), this;
  }
  destroyChildren() {
    return this.getChildren().forEach((r) => {
      r.parent = null, r.index = 0, r.destroy();
    }), this.children = [], this._requestDraw(), this;
  }
  add(...r) {
    if (arguments.length > 1) {
      for (var e = 0; e < arguments.length; e++)
        this.add(arguments[e]);
      return this;
    }
    var a = r[0];
    return a.getParent() ? (a.moveTo(this), this) : (this._validateAdd(a), a.index = this.getChildren().length, a.parent = this, a._clearCaches(), this.getChildren().push(a), this._fire("add", {
      child: a
    }), this._requestDraw(), this);
  }
  destroy() {
    return this.hasChildren() && this.destroyChildren(), super.destroy(), this;
  }
  find(r) {
    return this._generalFind(r, !1);
  }
  findOne(r) {
    var e = this._generalFind(r, !0);
    return e.length > 0 ? e[0] : void 0;
  }
  _generalFind(r, e) {
    var a = [];
    return this._descendants((t) => {
      const i = t._isMatch(r);
      return i && a.push(t), !!(i && e);
    }), a;
  }
  _descendants(r) {
    let e = !1;
    const a = this.getChildren();
    for (const t of a) {
      if (e = r(t), e)
        return !0;
      if (t.hasChildren() && (e = t._descendants(r), e))
        return !0;
    }
    return !1;
  }
  toObject() {
    var r = w0.prototype.toObject.call(this);
    return r.children = [], this.getChildren().forEach((e) => {
      r.children.push(e.toObject());
    }), r;
  }
  isAncestorOf(r) {
    for (var e = r.getParent(); e; ) {
      if (e._id === this._id)
        return !0;
      e = e.getParent();
    }
    return !1;
  }
  clone(r) {
    var e = w0.prototype.clone.call(this, r);
    return this.getChildren().forEach(function(a) {
      e.add(a.clone());
    }), e;
  }
  getAllIntersections(r) {
    var e = [];
    return this.find("Shape").forEach(function(a) {
      a.isVisible() && a.intersects(r) && e.push(a);
    }), e;
  }
  _clearSelfAndDescendantCache(r) {
    var e;
    super._clearSelfAndDescendantCache(r), !this.isCached() && ((e = this.children) === null || e === void 0 || e.forEach(function(a) {
      a._clearSelfAndDescendantCache(r);
    }));
  }
  _setChildrenIndices() {
    var r;
    (r = this.children) === null || r === void 0 || r.forEach(function(e, a) {
      e.index = a;
    }), this._requestDraw();
  }
  drawScene(r, e) {
    var a = this.getLayer(), t = r || a && a.getCanvas(), i = t && t.getContext(), A = this._getCanvasCache(), n = A && A.scene, o = t && t.isCache;
    if (!this.isVisible() && !o)
      return this;
    if (n) {
      i.save();
      var f = this.getAbsoluteTransform(e).getMatrix();
      i.transform(f[0], f[1], f[2], f[3], f[4], f[5]), this._drawCachedSceneCanvas(i), i.restore();
    } else
      this._drawChildren("drawScene", t, e);
    return this;
  }
  drawHit(r, e) {
    if (!this.shouldDrawHit(e))
      return this;
    var a = this.getLayer(), t = r || a && a.hitCanvas, i = t && t.getContext(), A = this._getCanvasCache(), n = A && A.hit;
    if (n) {
      i.save();
      var o = this.getAbsoluteTransform(e).getMatrix();
      i.transform(o[0], o[1], o[2], o[3], o[4], o[5]), this._drawCachedHitCanvas(i), i.restore();
    } else
      this._drawChildren("drawHit", t, e);
    return this;
  }
  _drawChildren(r, e, a) {
    var t, i = e && e.getContext(), A = this.clipWidth(), n = this.clipHeight(), o = this.clipFunc(), f = A && n || o;
    const l = a === this;
    if (f) {
      i.save();
      var c = this.getAbsoluteTransform(a), h = c.getMatrix();
      if (i.transform(h[0], h[1], h[2], h[3], h[4], h[5]), i.beginPath(), o)
        o.call(this, i, this);
      else {
        var d = this.clipX(), b = this.clipY();
        i.rect(d, b, A, n);
      }
      i.clip(), h = c.copy().invert().getMatrix(), i.transform(h[0], h[1], h[2], h[3], h[4], h[5]);
    }
    var g = !l && this.globalCompositeOperation() !== "source-over" && r === "drawScene";
    g && (i.save(), i._applyGlobalCompositeOperation(this)), (t = this.children) === null || t === void 0 || t.forEach(function(v) {
      v[r](e, a);
    }), g && i.restore(), f && i.restore();
  }
  getClientRect(r) {
    var e;
    r = r || {};
    var a = r.skipTransform, t = r.relativeTo, i, A, n, o, f = {
      x: 1 / 0,
      y: 1 / 0,
      width: 0,
      height: 0
    }, l = this;
    (e = this.children) === null || e === void 0 || e.forEach(function(g) {
      if (g.visible()) {
        var v = g.getClientRect({
          relativeTo: l,
          skipShadow: r.skipShadow,
          skipStroke: r.skipStroke
        });
        v.width === 0 && v.height === 0 || (i === void 0 ? (i = v.x, A = v.y, n = v.x + v.width, o = v.y + v.height) : (i = Math.min(i, v.x), A = Math.min(A, v.y), n = Math.max(n, v.x + v.width), o = Math.max(o, v.y + v.height)));
      }
    });
    for (var c = this.find("Shape"), h = !1, d = 0; d < c.length; d++) {
      var b = c[d];
      if (b._isVisible(this)) {
        h = !0;
        break;
      }
    }
    return h && i !== void 0 ? f = {
      x: i,
      y: A,
      width: n - i,
      height: o - A
    } : f = {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    }, a ? f : this._transformedRect(f, t);
  }
}
P.addComponentsGetterSetter(Se, "clip", [
  "x",
  "y",
  "width",
  "height"
]);
P.addGetterSetter(Se, "clipX", void 0, v0());
P.addGetterSetter(Se, "clipY", void 0, v0());
P.addGetterSetter(Se, "clipWidth", void 0, v0());
P.addGetterSetter(Se, "clipHeight", void 0, v0());
P.addGetterSetter(Se, "clipFunc");
const Qn = /* @__PURE__ */ new Map(), K4 = F0._global.PointerEvent !== void 0;
function Cu(s) {
  return Qn.get(s);
}
function bh(s) {
  return {
    evt: s,
    pointerId: s.pointerId
  };
}
function q4(s, r) {
  return Qn.get(s) === r;
}
function $4(s, r) {
  Ln(s), r.getStage() && (Qn.set(s, r), K4 && r._fire("gotpointercapture", bh(new PointerEvent("gotpointercapture"))));
}
function Ln(s, r) {
  const e = Qn.get(s);
  if (!e)
    return;
  const a = e.getStage();
  a && a.content, Qn.delete(s), K4 && e._fire("lostpointercapture", bh(new PointerEvent("lostpointercapture")));
}
var E8 = "Stage", C8 = "string", Jh = "px", B8 = "mouseout", rd = "mouseleave", ed = "mouseover", ad = "mouseenter", td = "mousemove", id = "mousedown", Ad = "mouseup", yn = "pointermove", _n = "pointerdown", D2 = "pointerup", En = "pointercancel", Z8 = "lostpointercapture", Cf = "pointerout", Bf = "pointerleave", Zf = "pointerover", Rf = "pointerenter", rc = "contextmenu", nd = "touchstart", od = "touchend", sd = "touchmove", fd = "touchcancel", ec = "wheel", R8 = 5, I8 = [
  [ad, "_pointerenter"],
  [id, "_pointerdown"],
  [td, "_pointermove"],
  [Ad, "_pointerup"],
  [rd, "_pointerleave"],
  [nd, "_pointerdown"],
  [sd, "_pointermove"],
  [od, "_pointerup"],
  [fd, "_pointercancel"],
  [ed, "_pointerover"],
  [ec, "_wheel"],
  [rc, "_contextmenu"],
  [_n, "_pointerdown"],
  [yn, "_pointermove"],
  [D2, "_pointerup"],
  [En, "_pointercancel"],
  [Z8, "_lostpointercapture"]
];
const Bu = {
  mouse: {
    [Cf]: B8,
    [Bf]: rd,
    [Zf]: ed,
    [Rf]: ad,
    [yn]: td,
    [_n]: id,
    [D2]: Ad,
    [En]: "mousecancel",
    pointerclick: "click",
    pointerdblclick: "dblclick"
  },
  touch: {
    [Cf]: "touchout",
    [Bf]: "touchleave",
    [Zf]: "touchover",
    [Rf]: "touchenter",
    [yn]: sd,
    [_n]: nd,
    [D2]: od,
    [En]: fd,
    pointerclick: "tap",
    pointerdblclick: "dbltap"
  },
  pointer: {
    [Cf]: Cf,
    [Bf]: Bf,
    [Zf]: Zf,
    [Rf]: Rf,
    [yn]: yn,
    [_n]: _n,
    [D2]: D2,
    [En]: En,
    pointerclick: "pointerclick",
    pointerdblclick: "pointerdblclick"
  }
}, Cn = (s) => s.indexOf("pointer") >= 0 ? "pointer" : s.indexOf("touch") >= 0 ? "touch" : "mouse", I2 = (s) => {
  const r = Cn(s);
  if (r === "pointer")
    return F0.pointerEventsEnabled && Bu.pointer;
  if (r === "touch")
    return Bu.touch;
  if (r === "mouse")
    return Bu.mouse;
};
function Kh(s = {}) {
  return (s.clipFunc || s.clipWidth || s.clipHeight) && K.warn("Stage does not support clipping. Please use clip for Layers or Groups."), s;
}
const S8 = "Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);", Of = [];
class uu extends Se {
  constructor(r) {
    super(Kh(r)), this._pointerPositions = [], this._changedPointerPositions = [], this._buildDOM(), this._bindContentEvents(), Of.push(this), this.on("widthChange.konva heightChange.konva", this._resizeDOM), this.on("visibleChange.konva", this._checkVisibility), this.on("clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva", () => {
      Kh(this.attrs);
    }), this._checkVisibility();
  }
  _validateAdd(r) {
    const e = r.getType() === "Layer", a = r.getType() === "FastLayer";
    e || a || K.throw("You may only add layers to the stage.");
  }
  _checkVisibility() {
    if (!this.content)
      return;
    const r = this.visible() ? "" : "none";
    this.content.style.display = r;
  }
  setContainer(r) {
    if (typeof r === C8) {
      if (r.charAt(0) === ".") {
        var e = r.slice(1);
        r = document.getElementsByClassName(e)[0];
      } else {
        var a;
        r.charAt(0) !== "#" ? a = r : a = r.slice(1), r = document.getElementById(a);
      }
      if (!r)
        throw "Can not find container in document with id " + a;
    }
    return this._setAttr("container", r), this.content && (this.content.parentElement && this.content.parentElement.removeChild(this.content), r.appendChild(this.content)), this;
  }
  shouldDrawHit() {
    return !0;
  }
  clear() {
    var r = this.children, e = r.length, a;
    for (a = 0; a < e; a++)
      r[a].clear();
    return this;
  }
  clone(r) {
    return r || (r = {}), r.container = typeof document < "u" && document.createElement("div"), Se.prototype.clone.call(this, r);
  }
  destroy() {
    super.destroy();
    var r = this.content;
    r && K._isInDocument(r) && this.container().removeChild(r);
    var e = Of.indexOf(this);
    return e > -1 && Of.splice(e, 1), this;
  }
  getPointerPosition() {
    const r = this._pointerPositions[0] || this._changedPointerPositions[0];
    return r ? {
      x: r.x,
      y: r.y
    } : (K.warn(S8), null);
  }
  _getPointerById(r) {
    return this._pointerPositions.find((e) => e.id === r);
  }
  getPointersPositions() {
    return this._pointerPositions;
  }
  getStage() {
    return this;
  }
  getContent() {
    return this.content;
  }
  _toKonvaCanvas(r) {
    r = r || {}, r.x = r.x || 0, r.y = r.y || 0, r.width = r.width || this.width(), r.height = r.height || this.height();
    var e = new O2({
      width: r.width,
      height: r.height,
      pixelRatio: r.pixelRatio || 1
    }), a = e.getContext()._context, t = this.children;
    return (r.x || r.y) && a.translate(-1 * r.x, -1 * r.y), t.forEach(function(i) {
      if (i.isVisible()) {
        var A = i._toKonvaCanvas(r);
        a.drawImage(A._canvas, r.x, r.y, A.getWidth() / A.getPixelRatio(), A.getHeight() / A.getPixelRatio());
      }
    }), e;
  }
  getIntersection(r) {
    if (!r)
      return null;
    var e = this.children, a = e.length, t = a - 1, i;
    for (i = t; i >= 0; i--) {
      const A = e[i].getIntersection(r);
      if (A)
        return A;
    }
    return null;
  }
  _resizeDOM() {
    var r = this.width(), e = this.height();
    this.content && (this.content.style.width = r + Jh, this.content.style.height = e + Jh), this.bufferCanvas.setSize(r, e), this.bufferHitCanvas.setSize(r, e), this.children.forEach((a) => {
      a.setSize({ width: r, height: e }), a.draw();
    });
  }
  add(r, ...e) {
    if (arguments.length > 1) {
      for (var a = 0; a < arguments.length; a++)
        this.add(arguments[a]);
      return this;
    }
    super.add(r);
    var t = this.children.length;
    return t > R8 && K.warn("The stage has " + t + " layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group."), r.setSize({ width: this.width(), height: this.height() }), r.draw(), F0.isBrowser && this.content.appendChild(r.canvas._canvas), this;
  }
  getParent() {
    return null;
  }
  getLayer() {
    return null;
  }
  hasPointerCapture(r) {
    return q4(r, this);
  }
  setPointerCapture(r) {
    $4(r, this);
  }
  releaseCapture(r) {
    Ln(r);
  }
  getLayers() {
    return this.children;
  }
  _bindContentEvents() {
    F0.isBrowser && I8.forEach(([r, e]) => {
      this.content.addEventListener(r, (a) => {
        this[e](a);
      });
    });
  }
  _pointerenter(r) {
    this.setPointersPositions(r);
    const e = I2(r.type);
    this._fire(e.pointerenter, {
      evt: r,
      target: this,
      currentTarget: this
    });
  }
  _pointerover(r) {
    this.setPointersPositions(r);
    const e = I2(r.type);
    this._fire(e.pointerover, {
      evt: r,
      target: this,
      currentTarget: this
    });
  }
  _getTargetShape(r) {
    let e = this[r + "targetShape"];
    return e && !e.getStage() && (e = null), e;
  }
  _pointerleave(r) {
    const e = I2(r.type), a = Cn(r.type);
    if (e) {
      this.setPointersPositions(r);
      var t = this._getTargetShape(a), i = !tr.isDragging || F0.hitOnDragEnabled;
      t && i ? (t._fireAndBubble(e.pointerout, { evt: r }), t._fireAndBubble(e.pointerleave, { evt: r }), this._fire(e.pointerleave, {
        evt: r,
        target: this,
        currentTarget: this
      }), this[a + "targetShape"] = null) : i && (this._fire(e.pointerleave, {
        evt: r,
        target: this,
        currentTarget: this
      }), this._fire(e.pointerout, {
        evt: r,
        target: this,
        currentTarget: this
      })), this.pointerPos = void 0, this._pointerPositions = [];
    }
  }
  _pointerdown(r) {
    const e = I2(r.type), a = Cn(r.type);
    if (e) {
      this.setPointersPositions(r);
      var t = !1;
      this._changedPointerPositions.forEach((i) => {
        var A = this.getIntersection(i);
        if (tr.justDragged = !1, F0["_" + a + "ListenClick"] = !0, !(A && A.isListening()))
          return;
        F0.capturePointerEventsEnabled && A.setPointerCapture(i.id), this[a + "ClickStartShape"] = A, A._fireAndBubble(e.pointerdown, {
          evt: r,
          pointerId: i.id
        }), t = !0;
        const o = r.type.indexOf("touch") >= 0;
        A.preventDefault() && r.cancelable && o && r.preventDefault();
      }), t || this._fire(e.pointerdown, {
        evt: r,
        target: this,
        currentTarget: this,
        pointerId: this._pointerPositions[0].id
      });
    }
  }
  _pointermove(r) {
    const e = I2(r.type), a = Cn(r.type);
    if (!e)
      return;
    tr.isDragging && tr.node.preventDefault() && r.cancelable && r.preventDefault(), this.setPointersPositions(r);
    var t = !tr.isDragging || F0.hitOnDragEnabled;
    if (!t)
      return;
    var i = {};
    let A = !1;
    var n = this._getTargetShape(a);
    this._changedPointerPositions.forEach((o) => {
      const f = Cu(o.id) || this.getIntersection(o), l = o.id, c = { evt: r, pointerId: l };
      var h = n !== f;
      if (h && n && (n._fireAndBubble(e.pointerout, c, f), n._fireAndBubble(e.pointerleave, c, f)), f) {
        if (i[f._id])
          return;
        i[f._id] = !0;
      }
      f && f.isListening() ? (A = !0, h && (f._fireAndBubble(e.pointerover, c, n), f._fireAndBubble(e.pointerenter, c, n), this[a + "targetShape"] = f), f._fireAndBubble(e.pointermove, c)) : n && (this._fire(e.pointerover, {
        evt: r,
        target: this,
        currentTarget: this,
        pointerId: l
      }), this[a + "targetShape"] = null);
    }), A || this._fire(e.pointermove, {
      evt: r,
      target: this,
      currentTarget: this,
      pointerId: this._changedPointerPositions[0].id
    });
  }
  _pointerup(r) {
    const e = I2(r.type), a = Cn(r.type);
    if (!e)
      return;
    this.setPointersPositions(r);
    const t = this[a + "ClickStartShape"], i = this[a + "ClickEndShape"];
    var A = {};
    let n = !1;
    this._changedPointerPositions.forEach((o) => {
      const f = Cu(o.id) || this.getIntersection(o);
      if (f) {
        if (f.releaseCapture(o.id), A[f._id])
          return;
        A[f._id] = !0;
      }
      const l = o.id, c = { evt: r, pointerId: l };
      let h = !1;
      F0["_" + a + "InDblClickWindow"] ? (h = !0, clearTimeout(this[a + "DblTimeout"])) : tr.justDragged || (F0["_" + a + "InDblClickWindow"] = !0, clearTimeout(this[a + "DblTimeout"])), this[a + "DblTimeout"] = setTimeout(function() {
        F0["_" + a + "InDblClickWindow"] = !1;
      }, F0.dblClickWindow), f && f.isListening() ? (n = !0, this[a + "ClickEndShape"] = f, f._fireAndBubble(e.pointerup, c), F0["_" + a + "ListenClick"] && t && t === f && (f._fireAndBubble(e.pointerclick, c), h && i && i === f && f._fireAndBubble(e.pointerdblclick, c))) : (this[a + "ClickEndShape"] = null, F0["_" + a + "ListenClick"] && this._fire(e.pointerclick, {
        evt: r,
        target: this,
        currentTarget: this,
        pointerId: l
      }), h && this._fire(e.pointerdblclick, {
        evt: r,
        target: this,
        currentTarget: this,
        pointerId: l
      }));
    }), n || this._fire(e.pointerup, {
      evt: r,
      target: this,
      currentTarget: this,
      pointerId: this._changedPointerPositions[0].id
    }), F0["_" + a + "ListenClick"] = !1, r.cancelable && r.preventDefault();
  }
  _contextmenu(r) {
    this.setPointersPositions(r);
    var e = this.getIntersection(this.getPointerPosition());
    e && e.isListening() ? e._fireAndBubble(rc, { evt: r }) : this._fire(rc, {
      evt: r,
      target: this,
      currentTarget: this
    });
  }
  _wheel(r) {
    this.setPointersPositions(r);
    var e = this.getIntersection(this.getPointerPosition());
    e && e.isListening() ? e._fireAndBubble(ec, { evt: r }) : this._fire(ec, {
      evt: r,
      target: this,
      currentTarget: this
    });
  }
  _pointercancel(r) {
    this.setPointersPositions(r);
    const e = Cu(r.pointerId) || this.getIntersection(this.getPointerPosition());
    e && e._fireAndBubble(D2, bh(r)), Ln(r.pointerId);
  }
  _lostpointercapture(r) {
    Ln(r.pointerId);
  }
  setPointersPositions(r) {
    var e = this._getContentPosition(), a = null, t = null;
    r = r || window.event, r.touches !== void 0 ? (this._pointerPositions = [], this._changedPointerPositions = [], Array.prototype.forEach.call(r.touches, (i) => {
      this._pointerPositions.push({
        id: i.identifier,
        x: (i.clientX - e.left) / e.scaleX,
        y: (i.clientY - e.top) / e.scaleY
      });
    }), Array.prototype.forEach.call(r.changedTouches || r.touches, (i) => {
      this._changedPointerPositions.push({
        id: i.identifier,
        x: (i.clientX - e.left) / e.scaleX,
        y: (i.clientY - e.top) / e.scaleY
      });
    })) : (a = (r.clientX - e.left) / e.scaleX, t = (r.clientY - e.top) / e.scaleY, this.pointerPos = {
      x: a,
      y: t
    }, this._pointerPositions = [{ x: a, y: t, id: K._getFirstPointerId(r) }], this._changedPointerPositions = [
      { x: a, y: t, id: K._getFirstPointerId(r) }
    ]);
  }
  _setPointerPosition(r) {
    K.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.'), this.setPointersPositions(r);
  }
  _getContentPosition() {
    if (!this.content || !this.content.getBoundingClientRect)
      return {
        top: 0,
        left: 0,
        scaleX: 1,
        scaleY: 1
      };
    var r = this.content.getBoundingClientRect();
    return {
      top: r.top,
      left: r.left,
      scaleX: r.width / this.content.clientWidth || 1,
      scaleY: r.height / this.content.clientHeight || 1
    };
  }
  _buildDOM() {
    if (this.bufferCanvas = new O2({
      width: this.width(),
      height: this.height()
    }), this.bufferHitCanvas = new dh({
      pixelRatio: 1,
      width: this.width(),
      height: this.height()
    }), !!F0.isBrowser) {
      var r = this.container();
      if (!r)
        throw "Stage has no container. A container is required.";
      r.innerHTML = "", this.content = document.createElement("div"), this.content.style.position = "relative", this.content.style.userSelect = "none", this.content.className = "konvajs-content", this.content.setAttribute("role", "presentation"), r.appendChild(this.content), this._resizeDOM();
    }
  }
  cache() {
    return K.warn("Cache function is not allowed for stage. You may use cache only for layers, groups and shapes."), this;
  }
  clearCache() {
    return this;
  }
  batchDraw() {
    return this.getChildren().forEach(function(r) {
      r.batchDraw();
    }), this;
  }
}
uu.prototype.nodeType = E8;
mr(uu);
P.addGetterSetter(uu, "container");
var ld = "hasShadow", ud = "shadowRGBA", cd = "patternImage", hd = "linearGradient", dd = "radialGradient";
let If;
function Zu() {
  return If || (If = K.createCanvasElement().getContext("2d"), If);
}
const Yn = {};
function F8(s) {
  s.fill();
}
function W8(s) {
  s.stroke();
}
function x8(s) {
  s.fill();
}
function G8(s) {
  s.stroke();
}
function T8() {
  this._clearCache(ld);
}
function X8() {
  this._clearCache(ud);
}
function M8() {
  this._clearCache(cd);
}
function D8() {
  this._clearCache(hd);
}
function N8() {
  this._clearCache(dd);
}
class b0 extends w0 {
  constructor(r) {
    super(r);
    let e;
    for (; e = K.getRandomColor(), !(e && !(e in Yn)); )
      ;
    this.colorKey = e, Yn[e] = this;
  }
  getContext() {
    return K.warn("shape.getContext() method is deprecated. Please do not use it."), this.getLayer().getContext();
  }
  getCanvas() {
    return K.warn("shape.getCanvas() method is deprecated. Please do not use it."), this.getLayer().getCanvas();
  }
  getSceneFunc() {
    return this.attrs.sceneFunc || this._sceneFunc;
  }
  getHitFunc() {
    return this.attrs.hitFunc || this._hitFunc;
  }
  hasShadow() {
    return this._getCache(ld, this._hasShadow);
  }
  _hasShadow() {
    return this.shadowEnabled() && this.shadowOpacity() !== 0 && !!(this.shadowColor() || this.shadowBlur() || this.shadowOffsetX() || this.shadowOffsetY());
  }
  _getFillPattern() {
    return this._getCache(cd, this.__getFillPattern);
  }
  __getFillPattern() {
    if (this.fillPatternImage()) {
      var r = Zu();
      const e = r.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || "repeat");
      if (e && e.setTransform) {
        const a = new Ie();
        a.translate(this.fillPatternX(), this.fillPatternY()), a.rotate(F0.getAngle(this.fillPatternRotation())), a.scale(this.fillPatternScaleX(), this.fillPatternScaleY()), a.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
        const t = a.getMatrix();
        e.setTransform({
          a: t[0],
          b: t[1],
          c: t[2],
          d: t[3],
          e: t[4],
          f: t[5]
        });
      }
      return e;
    }
  }
  _getLinearGradient() {
    return this._getCache(hd, this.__getLinearGradient);
  }
  __getLinearGradient() {
    var r = this.fillLinearGradientColorStops();
    if (r) {
      for (var e = Zu(), a = this.fillLinearGradientStartPoint(), t = this.fillLinearGradientEndPoint(), i = e.createLinearGradient(a.x, a.y, t.x, t.y), A = 0; A < r.length; A += 2)
        i.addColorStop(r[A], r[A + 1]);
      return i;
    }
  }
  _getRadialGradient() {
    return this._getCache(dd, this.__getRadialGradient);
  }
  __getRadialGradient() {
    var r = this.fillRadialGradientColorStops();
    if (r) {
      for (var e = Zu(), a = this.fillRadialGradientStartPoint(), t = this.fillRadialGradientEndPoint(), i = e.createRadialGradient(a.x, a.y, this.fillRadialGradientStartRadius(), t.x, t.y, this.fillRadialGradientEndRadius()), A = 0; A < r.length; A += 2)
        i.addColorStop(r[A], r[A + 1]);
      return i;
    }
  }
  getShadowRGBA() {
    return this._getCache(ud, this._getShadowRGBA);
  }
  _getShadowRGBA() {
    if (this.hasShadow()) {
      var r = K.colorToRGBA(this.shadowColor());
      return "rgba(" + r.r + "," + r.g + "," + r.b + "," + r.a * (this.shadowOpacity() || 1) + ")";
    }
  }
  hasFill() {
    return this._calculate("hasFill", [
      "fillEnabled",
      "fill",
      "fillPatternImage",
      "fillLinearGradientColorStops",
      "fillRadialGradientColorStops"
    ], () => this.fillEnabled() && !!(this.fill() || this.fillPatternImage() || this.fillLinearGradientColorStops() || this.fillRadialGradientColorStops()));
  }
  hasStroke() {
    return this._calculate("hasStroke", [
      "strokeEnabled",
      "strokeWidth",
      "stroke",
      "strokeLinearGradientColorStops"
    ], () => this.strokeEnabled() && this.strokeWidth() && !!(this.stroke() || this.strokeLinearGradientColorStops()));
  }
  hasHitStroke() {
    const r = this.hitStrokeWidth();
    return r === "auto" ? this.hasStroke() : this.strokeEnabled() && !!r;
  }
  intersects(r) {
    var e = this.getStage(), a = e.bufferHitCanvas, t;
    return a.getContext().clear(), this.drawHit(a, null, !0), t = a.context.getImageData(Math.round(r.x), Math.round(r.y), 1, 1).data, t[3] > 0;
  }
  destroy() {
    return w0.prototype.destroy.call(this), delete Yn[this.colorKey], delete this.colorKey, this;
  }
  _useBufferCanvas(r) {
    var e;
    if (!this.getStage() || !((e = this.attrs.perfectDrawEnabled) !== null && e !== void 0 ? e : !0))
      return !1;
    const t = r || this.hasFill(), i = this.hasStroke(), A = this.getAbsoluteOpacity() !== 1;
    if (t && i && A)
      return !0;
    const n = this.hasShadow(), o = this.shadowForStrokeEnabled();
    return !!(t && i && n && o);
  }
  setStrokeHitEnabled(r) {
    K.warn("strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead."), r ? this.hitStrokeWidth("auto") : this.hitStrokeWidth(0);
  }
  getStrokeHitEnabled() {
    return this.hitStrokeWidth() !== 0;
  }
  getSelfRect() {
    var r = this.size();
    return {
      x: this._centroid ? -r.width / 2 : 0,
      y: this._centroid ? -r.height / 2 : 0,
      width: r.width,
      height: r.height
    };
  }
  getClientRect(r = {}) {
    const e = r.skipTransform, a = r.relativeTo, t = this.getSelfRect(), A = !r.skipStroke && this.hasStroke() && this.strokeWidth() || 0, n = t.width + A, o = t.height + A, f = !r.skipShadow && this.hasShadow(), l = f ? this.shadowOffsetX() : 0, c = f ? this.shadowOffsetY() : 0, h = n + Math.abs(l), d = o + Math.abs(c), b = f && this.shadowBlur() || 0, g = h + b * 2, v = d + b * 2;
    let m = 0;
    Math.round(A / 2) !== A / 2 && (m = 1);
    const w = {
      width: g + m,
      height: v + m,
      x: -Math.round(A / 2 + b) + Math.min(l, 0) + t.x,
      y: -Math.round(A / 2 + b) + Math.min(c, 0) + t.y
    };
    return e ? w : this._transformedRect(w, a);
  }
  drawScene(r, e) {
    var a = this.getLayer(), t = r || a.getCanvas(), i = t.getContext(), A = this._getCanvasCache(), n = this.getSceneFunc(), o = this.hasShadow(), f, l, c, h = t.isCache, d = e === this;
    if (!this.isVisible() && !d)
      return this;
    if (A) {
      i.save();
      var b = this.getAbsoluteTransform(e).getMatrix();
      return i.transform(b[0], b[1], b[2], b[3], b[4], b[5]), this._drawCachedSceneCanvas(i), i.restore(), this;
    }
    if (!n)
      return this;
    if (i.save(), this._useBufferCanvas() && !h) {
      f = this.getStage(), l = f.bufferCanvas, c = l.getContext(), c.clear(), c.save(), c._applyLineJoin(this);
      var g = this.getAbsoluteTransform(e).getMatrix();
      c.transform(g[0], g[1], g[2], g[3], g[4], g[5]), n.call(this, c, this), c.restore();
      var v = l.pixelRatio;
      o && i._applyShadow(this), i._applyOpacity(this), i._applyGlobalCompositeOperation(this), i.drawImage(l._canvas, 0, 0, l.width / v, l.height / v);
    } else {
      if (i._applyLineJoin(this), !d) {
        var g = this.getAbsoluteTransform(e).getMatrix();
        i.transform(g[0], g[1], g[2], g[3], g[4], g[5]), i._applyOpacity(this), i._applyGlobalCompositeOperation(this);
      }
      o && i._applyShadow(this), n.call(this, i, this);
    }
    return i.restore(), this;
  }
  drawHit(r, e, a = !1) {
    if (!this.shouldDrawHit(e, a))
      return this;
    var t = this.getLayer(), i = r || t.hitCanvas, A = i && i.getContext(), n = this.hitFunc() || this.sceneFunc(), o = this._getCanvasCache(), f = o && o.hit;
    if (this.colorKey || K.warn("Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()"), f) {
      A.save();
      var l = this.getAbsoluteTransform(e).getMatrix();
      return A.transform(l[0], l[1], l[2], l[3], l[4], l[5]), this._drawCachedHitCanvas(A), A.restore(), this;
    }
    if (!n)
      return this;
    if (A.save(), A._applyLineJoin(this), !(this === e)) {
      var h = this.getAbsoluteTransform(e).getMatrix();
      A.transform(h[0], h[1], h[2], h[3], h[4], h[5]);
    }
    return n.call(this, A, this), A.restore(), this;
  }
  drawHitFromCache(r = 0) {
    var e = this._getCanvasCache(), a = this._getCachedSceneCanvas(), t = e.hit, i = t.getContext(), A = t.getWidth(), n = t.getHeight(), o, f, l, c, h, d;
    i.clear(), i.drawImage(a._canvas, 0, 0, A, n);
    try {
      for (o = i.getImageData(0, 0, A, n), f = o.data, l = f.length, c = K._hexToRgb(this.colorKey), h = 0; h < l; h += 4)
        d = f[h + 3], d > r ? (f[h] = c.r, f[h + 1] = c.g, f[h + 2] = c.b, f[h + 3] = 255) : f[h + 3] = 0;
      i.putImageData(o, 0, 0);
    } catch (b) {
      K.error("Unable to draw hit graph from cached scene canvas. " + b.message);
    }
    return this;
  }
  hasPointerCapture(r) {
    return q4(r, this);
  }
  setPointerCapture(r) {
    $4(r, this);
  }
  releaseCapture(r) {
    Ln(r);
  }
}
b0.prototype._fillFunc = F8;
b0.prototype._strokeFunc = W8;
b0.prototype._fillFuncHit = x8;
b0.prototype._strokeFuncHit = G8;
b0.prototype._centroid = !1;
b0.prototype.nodeType = "Shape";
mr(b0);
b0.prototype.eventListeners = {};
b0.prototype.on.call(b0.prototype, "shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", T8);
b0.prototype.on.call(b0.prototype, "shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva", X8);
b0.prototype.on.call(b0.prototype, "fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva", M8);
b0.prototype.on.call(b0.prototype, "fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva", D8);
b0.prototype.on.call(b0.prototype, "fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva", N8);
P.addGetterSetter(b0, "stroke", void 0, J4());
P.addGetterSetter(b0, "strokeWidth", 2, v0());
P.addGetterSetter(b0, "fillAfterStrokeEnabled", !1);
P.addGetterSetter(b0, "hitStrokeWidth", "auto", hh());
P.addGetterSetter(b0, "strokeHitEnabled", !0, oa());
P.addGetterSetter(b0, "perfectDrawEnabled", !0, oa());
P.addGetterSetter(b0, "shadowForStrokeEnabled", !0, oa());
P.addGetterSetter(b0, "lineJoin");
P.addGetterSetter(b0, "lineCap");
P.addGetterSetter(b0, "sceneFunc");
P.addGetterSetter(b0, "hitFunc");
P.addGetterSetter(b0, "dash");
P.addGetterSetter(b0, "dashOffset", 0, v0());
P.addGetterSetter(b0, "shadowColor", void 0, ln());
P.addGetterSetter(b0, "shadowBlur", 0, v0());
P.addGetterSetter(b0, "shadowOpacity", 1, v0());
P.addComponentsGetterSetter(b0, "shadowOffset", ["x", "y"]);
P.addGetterSetter(b0, "shadowOffsetX", 0, v0());
P.addGetterSetter(b0, "shadowOffsetY", 0, v0());
P.addGetterSetter(b0, "fillPatternImage");
P.addGetterSetter(b0, "fill", void 0, J4());
P.addGetterSetter(b0, "fillPatternX", 0, v0());
P.addGetterSetter(b0, "fillPatternY", 0, v0());
P.addGetterSetter(b0, "fillLinearGradientColorStops");
P.addGetterSetter(b0, "strokeLinearGradientColorStops");
P.addGetterSetter(b0, "fillRadialGradientStartRadius", 0);
P.addGetterSetter(b0, "fillRadialGradientEndRadius", 0);
P.addGetterSetter(b0, "fillRadialGradientColorStops");
P.addGetterSetter(b0, "fillPatternRepeat", "repeat");
P.addGetterSetter(b0, "fillEnabled", !0);
P.addGetterSetter(b0, "strokeEnabled", !0);
P.addGetterSetter(b0, "shadowEnabled", !0);
P.addGetterSetter(b0, "dashEnabled", !0);
P.addGetterSetter(b0, "strokeScaleEnabled", !0);
P.addGetterSetter(b0, "fillPriority", "color");
P.addComponentsGetterSetter(b0, "fillPatternOffset", ["x", "y"]);
P.addGetterSetter(b0, "fillPatternOffsetX", 0, v0());
P.addGetterSetter(b0, "fillPatternOffsetY", 0, v0());
P.addComponentsGetterSetter(b0, "fillPatternScale", ["x", "y"]);
P.addGetterSetter(b0, "fillPatternScaleX", 1, v0());
P.addGetterSetter(b0, "fillPatternScaleY", 1, v0());
P.addComponentsGetterSetter(b0, "fillLinearGradientStartPoint", [
  "x",
  "y"
]);
P.addComponentsGetterSetter(b0, "strokeLinearGradientStartPoint", [
  "x",
  "y"
]);
P.addGetterSetter(b0, "fillLinearGradientStartPointX", 0);
P.addGetterSetter(b0, "strokeLinearGradientStartPointX", 0);
P.addGetterSetter(b0, "fillLinearGradientStartPointY", 0);
P.addGetterSetter(b0, "strokeLinearGradientStartPointY", 0);
P.addComponentsGetterSetter(b0, "fillLinearGradientEndPoint", [
  "x",
  "y"
]);
P.addComponentsGetterSetter(b0, "strokeLinearGradientEndPoint", [
  "x",
  "y"
]);
P.addGetterSetter(b0, "fillLinearGradientEndPointX", 0);
P.addGetterSetter(b0, "strokeLinearGradientEndPointX", 0);
P.addGetterSetter(b0, "fillLinearGradientEndPointY", 0);
P.addGetterSetter(b0, "strokeLinearGradientEndPointY", 0);
P.addComponentsGetterSetter(b0, "fillRadialGradientStartPoint", [
  "x",
  "y"
]);
P.addGetterSetter(b0, "fillRadialGradientStartPointX", 0);
P.addGetterSetter(b0, "fillRadialGradientStartPointY", 0);
P.addComponentsGetterSetter(b0, "fillRadialGradientEndPoint", [
  "x",
  "y"
]);
P.addGetterSetter(b0, "fillRadialGradientEndPointX", 0);
P.addGetterSetter(b0, "fillRadialGradientEndPointY", 0);
P.addGetterSetter(b0, "fillPatternRotation", 0);
P.backCompat(b0, {
  dashArray: "dash",
  getDashArray: "getDash",
  setDashArray: "getDash",
  drawFunc: "sceneFunc",
  getDrawFunc: "getSceneFunc",
  setDrawFunc: "setSceneFunc",
  drawHitFunc: "hitFunc",
  getDrawHitFunc: "getHitFunc",
  setDrawHitFunc: "setHitFunc"
});
var V8 = "#", P8 = "beforeDraw", O8 = "draw", bd = [
  { x: 0, y: 0 },
  { x: -1, y: -1 },
  { x: 1, y: -1 },
  { x: 1, y: 1 },
  { x: -1, y: 1 }
], L8 = bd.length;
class m2 extends Se {
  constructor(r) {
    super(r), this.canvas = new O2(), this.hitCanvas = new dh({
      pixelRatio: 1
    }), this._waitingForDraw = !1, this.on("visibleChange.konva", this._checkVisibility), this._checkVisibility(), this.on("imageSmoothingEnabledChange.konva", this._setSmoothEnabled), this._setSmoothEnabled();
  }
  createPNGStream() {
    return this.canvas._canvas.createPNGStream();
  }
  getCanvas() {
    return this.canvas;
  }
  getNativeCanvasElement() {
    return this.canvas._canvas;
  }
  getHitCanvas() {
    return this.hitCanvas;
  }
  getContext() {
    return this.getCanvas().getContext();
  }
  clear(r) {
    return this.getContext().clear(r), this.getHitCanvas().getContext().clear(r), this;
  }
  setZIndex(r) {
    super.setZIndex(r);
    var e = this.getStage();
    return e && e.content && (e.content.removeChild(this.getNativeCanvasElement()), r < e.children.length - 1 ? e.content.insertBefore(this.getNativeCanvasElement(), e.children[r + 1].getCanvas()._canvas) : e.content.appendChild(this.getNativeCanvasElement())), this;
  }
  moveToTop() {
    w0.prototype.moveToTop.call(this);
    var r = this.getStage();
    return r && r.content && (r.content.removeChild(this.getNativeCanvasElement()), r.content.appendChild(this.getNativeCanvasElement())), !0;
  }
  moveUp() {
    var r = w0.prototype.moveUp.call(this);
    if (!r)
      return !1;
    var e = this.getStage();
    return !e || !e.content ? !1 : (e.content.removeChild(this.getNativeCanvasElement()), this.index < e.children.length - 1 ? e.content.insertBefore(this.getNativeCanvasElement(), e.children[this.index + 1].getCanvas()._canvas) : e.content.appendChild(this.getNativeCanvasElement()), !0);
  }
  moveDown() {
    if (w0.prototype.moveDown.call(this)) {
      var r = this.getStage();
      if (r) {
        var e = r.children;
        r.content && (r.content.removeChild(this.getNativeCanvasElement()), r.content.insertBefore(this.getNativeCanvasElement(), e[this.index + 1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  moveToBottom() {
    if (w0.prototype.moveToBottom.call(this)) {
      var r = this.getStage();
      if (r) {
        var e = r.children;
        r.content && (r.content.removeChild(this.getNativeCanvasElement()), r.content.insertBefore(this.getNativeCanvasElement(), e[1].getCanvas()._canvas));
      }
      return !0;
    }
    return !1;
  }
  getLayer() {
    return this;
  }
  remove() {
    var r = this.getNativeCanvasElement();
    return w0.prototype.remove.call(this), r && r.parentNode && K._isInDocument(r) && r.parentNode.removeChild(r), this;
  }
  getStage() {
    return this.parent;
  }
  setSize({ width: r, height: e }) {
    return this.canvas.setSize(r, e), this.hitCanvas.setSize(r, e), this._setSmoothEnabled(), this;
  }
  _validateAdd(r) {
    var e = r.getType();
    e !== "Group" && e !== "Shape" && K.throw("You may only add groups and shapes to a layer.");
  }
  _toKonvaCanvas(r) {
    return r = r || {}, r.width = r.width || this.getWidth(), r.height = r.height || this.getHeight(), r.x = r.x !== void 0 ? r.x : this.x(), r.y = r.y !== void 0 ? r.y : this.y(), w0.prototype._toKonvaCanvas.call(this, r);
  }
  _checkVisibility() {
    this.visible() ? this.canvas._canvas.style.display = "block" : this.canvas._canvas.style.display = "none";
  }
  _setSmoothEnabled() {
    this.getContext()._context.imageSmoothingEnabled = this.imageSmoothingEnabled();
  }
  getWidth() {
    if (this.parent)
      return this.parent.width();
  }
  setWidth() {
    K.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
  }
  getHeight() {
    if (this.parent)
      return this.parent.height();
  }
  setHeight() {
    K.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
  }
  batchDraw() {
    return this._waitingForDraw || (this._waitingForDraw = !0, K.requestAnimFrame(() => {
      this.draw(), this._waitingForDraw = !1;
    })), this;
  }
  getIntersection(r) {
    if (!this.isListening() || !this.isVisible())
      return null;
    for (var e = 1, a = !1; ; ) {
      for (let t = 0; t < L8; t++) {
        const i = bd[t], A = this._getIntersection({
          x: r.x + i.x * e,
          y: r.y + i.y * e
        }), n = A.shape;
        if (n)
          return n;
        if (a = !!A.antialiased, !A.antialiased)
          break;
      }
      if (a)
        e += 1;
      else
        return null;
    }
  }
  _getIntersection(r) {
    const e = this.hitCanvas.pixelRatio, a = this.hitCanvas.context.getImageData(Math.round(r.x * e), Math.round(r.y * e), 1, 1).data, t = a[3];
    if (t === 255) {
      const i = K._rgbToHex(a[0], a[1], a[2]), A = Yn[V8 + i];
      return A ? {
        shape: A
      } : {
        antialiased: !0
      };
    } else if (t > 0)
      return {
        antialiased: !0
      };
    return {};
  }
  drawScene(r, e) {
    var a = this.getLayer(), t = r || a && a.getCanvas();
    return this._fire(P8, {
      node: this
    }), this.clearBeforeDraw() && t.getContext().clear(), Se.prototype.drawScene.call(this, t, e), this._fire(O8, {
      node: this
    }), this;
  }
  drawHit(r, e) {
    var a = this.getLayer(), t = r || a && a.hitCanvas;
    return a && a.clearBeforeDraw() && a.getHitCanvas().getContext().clear(), Se.prototype.drawHit.call(this, t, e), this;
  }
  enableHitGraph() {
    return this.hitGraphEnabled(!0), this;
  }
  disableHitGraph() {
    return this.hitGraphEnabled(!1), this;
  }
  setHitGraphEnabled(r) {
    K.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening(r);
  }
  getHitGraphEnabled(r) {
    return K.warn("hitGraphEnabled method is deprecated. Please use layer.listening() instead."), this.listening();
  }
  toggleHitCanvas() {
    if (!(!this.parent || !this.parent.content)) {
      var r = this.parent, e = !!this.hitCanvas._canvas.parentNode;
      e ? r.content.removeChild(this.hitCanvas._canvas) : r.content.appendChild(this.hitCanvas._canvas);
    }
  }
}
m2.prototype.nodeType = "Layer";
mr(m2);
P.addGetterSetter(m2, "imageSmoothingEnabled", !0);
P.addGetterSetter(m2, "clearBeforeDraw", !0);
P.addGetterSetter(m2, "hitGraphEnabled", !0, oa());
class gh extends m2 {
  constructor(r) {
    super(r), this.listening(!1), K.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
  }
}
gh.prototype.nodeType = "FastLayer";
mr(gh);
class fn extends Se {
  _validateAdd(r) {
    var e = r.getType();
    e !== "Group" && e !== "Shape" && K.throw("You may only add groups and shapes to groups.");
  }
}
fn.prototype.nodeType = "Group";
mr(fn);
var Ru = function() {
  return P2.performance && P2.performance.now ? function() {
    return P2.performance.now();
  } : function() {
    return (/* @__PURE__ */ new Date()).getTime();
  };
}();
class Ne {
  constructor(r, e) {
    this.id = Ne.animIdCounter++, this.frame = {
      time: 0,
      timeDiff: 0,
      lastTime: Ru(),
      frameRate: 0
    }, this.func = r, this.setLayers(e);
  }
  setLayers(r) {
    var e = [];
    return r ? r.length > 0 ? e = r : e = [r] : e = [], this.layers = e, this;
  }
  getLayers() {
    return this.layers;
  }
  addLayer(r) {
    var e = this.layers, a = e.length, t;
    for (t = 0; t < a; t++)
      if (e[t]._id === r._id)
        return !1;
    return this.layers.push(r), !0;
  }
  isRunning() {
    var r = Ne, e = r.animations, a = e.length, t;
    for (t = 0; t < a; t++)
      if (e[t].id === this.id)
        return !0;
    return !1;
  }
  start() {
    return this.stop(), this.frame.timeDiff = 0, this.frame.lastTime = Ru(), Ne._addAnimation(this), this;
  }
  stop() {
    return Ne._removeAnimation(this), this;
  }
  _updateFrameObject(r) {
    this.frame.timeDiff = r - this.frame.lastTime, this.frame.lastTime = r, this.frame.time += this.frame.timeDiff, this.frame.frameRate = 1e3 / this.frame.timeDiff;
  }
  static _addAnimation(r) {
    this.animations.push(r), this._handleAnimation();
  }
  static _removeAnimation(r) {
    var e = r.id, a = this.animations, t = a.length, i;
    for (i = 0; i < t; i++)
      if (a[i].id === e) {
        this.animations.splice(i, 1);
        break;
      }
  }
  static _runFrames() {
    var r = {}, e = this.animations, a, t, i, A, n, o, f, l, c;
    for (A = 0; A < e.length; A++)
      if (a = e[A], t = a.layers, i = a.func, a._updateFrameObject(Ru()), o = t.length, i ? c = i.call(a, a.frame) !== !1 : c = !0, !!c)
        for (n = 0; n < o; n++)
          f = t[n], f._id !== void 0 && (r[f._id] = f);
    for (l in r)
      r.hasOwnProperty(l) && r[l].batchDraw();
  }
  static _animationLoop() {
    var r = Ne;
    r.animations.length ? (r._runFrames(), K.requestAnimFrame(r._animationLoop)) : r.animRunning = !1;
  }
  static _handleAnimation() {
    this.animRunning || (this.animRunning = !0, K.requestAnimFrame(this._animationLoop));
  }
}
Ne.animations = [];
Ne.animIdCounter = 0;
Ne.animRunning = !1;
var Y8 = {
  node: 1,
  duration: 1,
  easing: 1,
  onFinish: 1,
  yoyo: 1
}, H8 = 1, qh = 2, $h = 3, j8 = 0, r4 = ["fill", "stroke", "shadowColor"];
class U8 {
  constructor(r, e, a, t, i, A, n) {
    this.prop = r, this.propFunc = e, this.begin = t, this._pos = t, this.duration = A, this._change = 0, this.prevPos = 0, this.yoyo = n, this._time = 0, this._position = 0, this._startTime = 0, this._finish = 0, this.func = a, this._change = i - this.begin, this.pause();
  }
  fire(r) {
    var e = this[r];
    e && e();
  }
  setTime(r) {
    r > this.duration ? this.yoyo ? (this._time = this.duration, this.reverse()) : this.finish() : r < 0 ? this.yoyo ? (this._time = 0, this.play()) : this.reset() : (this._time = r, this.update());
  }
  getTime() {
    return this._time;
  }
  setPosition(r) {
    this.prevPos = this._pos, this.propFunc(r), this._pos = r;
  }
  getPosition(r) {
    return r === void 0 && (r = this._time), this.func(r, this.begin, this._change, this.duration);
  }
  play() {
    this.state = qh, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onPlay");
  }
  reverse() {
    this.state = $h, this._time = this.duration - this._time, this._startTime = this.getTimer() - this._time, this.onEnterFrame(), this.fire("onReverse");
  }
  seek(r) {
    this.pause(), this._time = r, this.update(), this.fire("onSeek");
  }
  reset() {
    this.pause(), this._time = 0, this.update(), this.fire("onReset");
  }
  finish() {
    this.pause(), this._time = this.duration, this.update(), this.fire("onFinish");
  }
  update() {
    this.setPosition(this.getPosition(this._time)), this.fire("onUpdate");
  }
  onEnterFrame() {
    var r = this.getTimer() - this._startTime;
    this.state === qh ? this.setTime(r) : this.state === $h && this.setTime(this.duration - r);
  }
  pause() {
    this.state = H8, this.fire("onPause");
  }
  getTimer() {
    return (/* @__PURE__ */ new Date()).getTime();
  }
}
class Zr {
  constructor(r) {
    var e = this, a = r.node, t = a._id, i, A = r.easing || Hn.Linear, n = !!r.yoyo, o;
    typeof r.duration > "u" ? i = 0.3 : r.duration === 0 ? i = 1e-3 : i = r.duration, this.node = a, this._id = j8++;
    var f = a.getLayer() || (a instanceof F0.Stage ? a.getLayers() : null);
    f || K.error("Tween constructor have `node` that is not in a layer. Please add node into layer first."), this.anim = new Ne(function() {
      e.tween.onEnterFrame();
    }, f), this.tween = new U8(o, function(l) {
      e._tweenFunc(l);
    }, A, 0, 1, i * 1e3, n), this._addListeners(), Zr.attrs[t] || (Zr.attrs[t] = {}), Zr.attrs[t][this._id] || (Zr.attrs[t][this._id] = {}), Zr.tweens[t] || (Zr.tweens[t] = {});
    for (o in r)
      Y8[o] === void 0 && this._addAttr(o, r[o]);
    this.reset(), this.onFinish = r.onFinish, this.onReset = r.onReset, this.onUpdate = r.onUpdate;
  }
  _addAttr(r, e) {
    var a = this.node, t = a._id, i, A, n, o, f, l, c, h;
    if (n = Zr.tweens[t][r], n && delete Zr.attrs[t][n][r], i = a.getAttr(r), K._isArray(e))
      if (A = [], f = Math.max(e.length, i.length), r === "points" && e.length !== i.length && (e.length > i.length ? (c = i, i = K._prepareArrayForTween(i, e, a.closed())) : (l = e, e = K._prepareArrayForTween(e, i, a.closed()))), r.indexOf("fill") === 0)
        for (o = 0; o < f; o++)
          if (o % 2 === 0)
            A.push(e[o] - i[o]);
          else {
            var d = K.colorToRGBA(i[o]);
            h = K.colorToRGBA(e[o]), i[o] = d, A.push({
              r: h.r - d.r,
              g: h.g - d.g,
              b: h.b - d.b,
              a: h.a - d.a
            });
          }
      else
        for (o = 0; o < f; o++)
          A.push(e[o] - i[o]);
    else
      r4.indexOf(r) !== -1 ? (i = K.colorToRGBA(i), h = K.colorToRGBA(e), A = {
        r: h.r - i.r,
        g: h.g - i.g,
        b: h.b - i.b,
        a: h.a - i.a
      }) : A = e - i;
    Zr.attrs[t][this._id][r] = {
      start: i,
      diff: A,
      end: e,
      trueEnd: l,
      trueStart: c
    }, Zr.tweens[t][r] = this._id;
  }
  _tweenFunc(r) {
    var e = this.node, a = Zr.attrs[e._id][this._id], t, i, A, n, o, f, l, c;
    for (t in a) {
      if (i = a[t], A = i.start, n = i.diff, c = i.end, K._isArray(A))
        if (o = [], l = Math.max(A.length, c.length), t.indexOf("fill") === 0)
          for (f = 0; f < l; f++)
            f % 2 === 0 ? o.push((A[f] || 0) + n[f] * r) : o.push("rgba(" + Math.round(A[f].r + n[f].r * r) + "," + Math.round(A[f].g + n[f].g * r) + "," + Math.round(A[f].b + n[f].b * r) + "," + (A[f].a + n[f].a * r) + ")");
        else
          for (f = 0; f < l; f++)
            o.push((A[f] || 0) + n[f] * r);
      else
        r4.indexOf(t) !== -1 ? o = "rgba(" + Math.round(A.r + n.r * r) + "," + Math.round(A.g + n.g * r) + "," + Math.round(A.b + n.b * r) + "," + (A.a + n.a * r) + ")" : o = A + n * r;
      e.setAttr(t, o);
    }
  }
  _addListeners() {
    this.tween.onPlay = () => {
      this.anim.start();
    }, this.tween.onReverse = () => {
      this.anim.start();
    }, this.tween.onPause = () => {
      this.anim.stop();
    }, this.tween.onFinish = () => {
      var r = this.node, e = Zr.attrs[r._id][this._id];
      e.points && e.points.trueEnd && r.setAttr("points", e.points.trueEnd), this.onFinish && this.onFinish.call(this);
    }, this.tween.onReset = () => {
      var r = this.node, e = Zr.attrs[r._id][this._id];
      e.points && e.points.trueStart && r.points(e.points.trueStart), this.onReset && this.onReset();
    }, this.tween.onUpdate = () => {
      this.onUpdate && this.onUpdate.call(this);
    };
  }
  play() {
    return this.tween.play(), this;
  }
  reverse() {
    return this.tween.reverse(), this;
  }
  reset() {
    return this.tween.reset(), this;
  }
  seek(r) {
    return this.tween.seek(r * 1e3), this;
  }
  pause() {
    return this.tween.pause(), this;
  }
  finish() {
    return this.tween.finish(), this;
  }
  destroy() {
    var r = this.node._id, e = this._id, a = Zr.tweens[r], t;
    this.pause();
    for (t in a)
      delete Zr.tweens[r][t];
    delete Zr.attrs[r][e];
  }
}
Zr.attrs = {};
Zr.tweens = {};
w0.prototype.to = function(s) {
  var r = s.onFinish;
  s.node = this, s.onFinish = function() {
    this.destroy(), r && r();
  };
  var e = new Zr(s);
  e.play();
};
const Hn = {
  BackEaseIn(s, r, e, a) {
    var t = 1.70158;
    return e * (s /= a) * s * ((t + 1) * s - t) + r;
  },
  BackEaseOut(s, r, e, a) {
    var t = 1.70158;
    return e * ((s = s / a - 1) * s * ((t + 1) * s + t) + 1) + r;
  },
  BackEaseInOut(s, r, e, a) {
    var t = 1.70158;
    return (s /= a / 2) < 1 ? e / 2 * (s * s * (((t *= 1.525) + 1) * s - t)) + r : e / 2 * ((s -= 2) * s * (((t *= 1.525) + 1) * s + t) + 2) + r;
  },
  ElasticEaseIn(s, r, e, a, t, i) {
    var A = 0;
    return s === 0 ? r : (s /= a) === 1 ? r + e : (i || (i = a * 0.3), !t || t < Math.abs(e) ? (t = e, A = i / 4) : A = i / (2 * Math.PI) * Math.asin(e / t), -(t * Math.pow(2, 10 * (s -= 1)) * Math.sin((s * a - A) * (2 * Math.PI) / i)) + r);
  },
  ElasticEaseOut(s, r, e, a, t, i) {
    var A = 0;
    return s === 0 ? r : (s /= a) === 1 ? r + e : (i || (i = a * 0.3), !t || t < Math.abs(e) ? (t = e, A = i / 4) : A = i / (2 * Math.PI) * Math.asin(e / t), t * Math.pow(2, -10 * s) * Math.sin((s * a - A) * (2 * Math.PI) / i) + e + r);
  },
  ElasticEaseInOut(s, r, e, a, t, i) {
    var A = 0;
    return s === 0 ? r : (s /= a / 2) === 2 ? r + e : (i || (i = a * (0.3 * 1.5)), !t || t < Math.abs(e) ? (t = e, A = i / 4) : A = i / (2 * Math.PI) * Math.asin(e / t), s < 1 ? -0.5 * (t * Math.pow(2, 10 * (s -= 1)) * Math.sin((s * a - A) * (2 * Math.PI) / i)) + r : t * Math.pow(2, -10 * (s -= 1)) * Math.sin((s * a - A) * (2 * Math.PI) / i) * 0.5 + e + r);
  },
  BounceEaseOut(s, r, e, a) {
    return (s /= a) < 1 / 2.75 ? e * (7.5625 * s * s) + r : s < 2 / 2.75 ? e * (7.5625 * (s -= 1.5 / 2.75) * s + 0.75) + r : s < 2.5 / 2.75 ? e * (7.5625 * (s -= 2.25 / 2.75) * s + 0.9375) + r : e * (7.5625 * (s -= 2.625 / 2.75) * s + 0.984375) + r;
  },
  BounceEaseIn(s, r, e, a) {
    return e - Hn.BounceEaseOut(a - s, 0, e, a) + r;
  },
  BounceEaseInOut(s, r, e, a) {
    return s < a / 2 ? Hn.BounceEaseIn(s * 2, 0, e, a) * 0.5 + r : Hn.BounceEaseOut(s * 2 - a, 0, e, a) * 0.5 + e * 0.5 + r;
  },
  EaseIn(s, r, e, a) {
    return e * (s /= a) * s + r;
  },
  EaseOut(s, r, e, a) {
    return -e * (s /= a) * (s - 2) + r;
  },
  EaseInOut(s, r, e, a) {
    return (s /= a / 2) < 1 ? e / 2 * s * s + r : -e / 2 * (--s * (s - 2) - 1) + r;
  },
  StrongEaseIn(s, r, e, a) {
    return e * (s /= a) * s * s * s * s + r;
  },
  StrongEaseOut(s, r, e, a) {
    return e * ((s = s / a - 1) * s * s * s * s + 1) + r;
  },
  StrongEaseInOut(s, r, e, a) {
    return (s /= a / 2) < 1 ? e / 2 * s * s * s * s * s + r : e / 2 * ((s -= 2) * s * s * s * s + 2) + r;
  },
  Linear(s, r, e, a) {
    return e * s / a + r;
  }
}, e4 = K._assign(F0, {
  Util: K,
  Transform: Ie,
  Node: w0,
  Container: Se,
  Stage: uu,
  stages: Of,
  Layer: m2,
  FastLayer: gh,
  Group: fn,
  DD: tr,
  Shape: b0,
  shapes: Yn,
  Animation: Ne,
  Tween: Zr,
  Easings: Hn,
  Context: fu,
  Canvas: lu
});
class bt extends b0 {
  _sceneFunc(r) {
    var e = F0.getAngle(this.angle()), a = this.clockwise();
    r.beginPath(), r.arc(0, 0, this.outerRadius(), 0, e, a), r.arc(0, 0, this.innerRadius(), e, 0, !a), r.closePath(), r.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(r) {
    this.outerRadius(r / 2);
  }
  setHeight(r) {
    this.outerRadius(r / 2);
  }
}
bt.prototype._centroid = !0;
bt.prototype.className = "Arc";
bt.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
mr(bt);
P.addGetterSetter(bt, "innerRadius", 0, v0());
P.addGetterSetter(bt, "outerRadius", 0, v0());
P.addGetterSetter(bt, "angle", 0, v0());
P.addGetterSetter(bt, "clockwise", !1, oa());
function ac(s, r, e, a, t, i, A) {
  var n = Math.sqrt(Math.pow(e - s, 2) + Math.pow(a - r, 2)), o = Math.sqrt(Math.pow(t - e, 2) + Math.pow(i - a, 2)), f = A * n / (n + o), l = A * o / (n + o), c = e - f * (t - s), h = a - f * (i - r), d = e + l * (t - s), b = a + l * (i - r);
  return [c, h, d, b];
}
function a4(s, r) {
  var e = s.length, a = [], t, i;
  for (t = 2; t < e - 2; t += 2)
    i = ac(s[t - 2], s[t - 1], s[t], s[t + 1], s[t + 2], s[t + 3], r), !isNaN(i[0]) && (a.push(i[0]), a.push(i[1]), a.push(s[t]), a.push(s[t + 1]), a.push(i[2]), a.push(i[3]));
  return a;
}
class gt extends b0 {
  constructor(r) {
    super(r), this.on("pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva", function() {
      this._clearCache("tensionPoints");
    });
  }
  _sceneFunc(r) {
    var e = this.points(), a = e.length, t = this.tension(), i = this.closed(), A = this.bezier(), n, o, f;
    if (a) {
      if (r.beginPath(), r.moveTo(e[0], e[1]), t !== 0 && a > 4) {
        for (n = this.getTensionPoints(), o = n.length, f = i ? 0 : 4, i || r.quadraticCurveTo(n[0], n[1], n[2], n[3]); f < o - 2; )
          r.bezierCurveTo(n[f++], n[f++], n[f++], n[f++], n[f++], n[f++]);
        i || r.quadraticCurveTo(n[o - 2], n[o - 1], e[a - 2], e[a - 1]);
      } else if (A)
        for (f = 2; f < a; )
          r.bezierCurveTo(e[f++], e[f++], e[f++], e[f++], e[f++], e[f++]);
      else
        for (f = 2; f < a; f += 2)
          r.lineTo(e[f], e[f + 1]);
      i ? (r.closePath(), r.fillStrokeShape(this)) : r.strokeShape(this);
    }
  }
  getTensionPoints() {
    return this._getCache("tensionPoints", this._getTensionPoints);
  }
  _getTensionPoints() {
    return this.closed() ? this._getTensionPointsClosed() : a4(this.points(), this.tension());
  }
  _getTensionPointsClosed() {
    var r = this.points(), e = r.length, a = this.tension(), t = ac(r[e - 2], r[e - 1], r[0], r[1], r[2], r[3], a), i = ac(r[e - 4], r[e - 3], r[e - 2], r[e - 1], r[0], r[1], a), A = a4(r, a), n = [t[2], t[3]].concat(A).concat([
      i[0],
      i[1],
      r[e - 2],
      r[e - 1],
      i[2],
      i[3],
      t[0],
      t[1],
      r[0],
      r[1]
    ]);
    return n;
  }
  getWidth() {
    return this.getSelfRect().width;
  }
  getHeight() {
    return this.getSelfRect().height;
  }
  getSelfRect() {
    var r = this.points();
    if (r.length < 4)
      return {
        x: r[0] || 0,
        y: r[1] || 0,
        width: 0,
        height: 0
      };
    this.tension() !== 0 ? r = [
      r[0],
      r[1],
      ...this._getTensionPoints(),
      r[r.length - 2],
      r[r.length - 1]
    ] : r = this.points();
    for (var e = r[0], a = r[0], t = r[1], i = r[1], A, n, o = 0; o < r.length / 2; o++)
      A = r[o * 2], n = r[o * 2 + 1], e = Math.min(e, A), a = Math.max(a, A), t = Math.min(t, n), i = Math.max(i, n);
    return {
      x: e,
      y: t,
      width: a - e,
      height: i - t
    };
  }
}
gt.prototype.className = "Line";
gt.prototype._attrsAffectingSize = ["points", "bezier", "tension"];
mr(gt);
P.addGetterSetter(gt, "closed", !1);
P.addGetterSetter(gt, "bezier", !1);
P.addGetterSetter(gt, "tension", 0, v0());
P.addGetterSetter(gt, "points", [], t8());
class cr extends b0 {
  constructor(r) {
    super(r), this.dataArray = [], this.pathLength = 0, this.dataArray = cr.parsePathData(this.data()), this.pathLength = 0;
    for (var e = 0; e < this.dataArray.length; ++e)
      this.pathLength += this.dataArray[e].pathLength;
    this.on("dataChange.konva", function() {
      this.dataArray = cr.parsePathData(this.data()), this.pathLength = 0;
      for (var a = 0; a < this.dataArray.length; ++a)
        this.pathLength += this.dataArray[a].pathLength;
    });
  }
  _sceneFunc(r) {
    var e = this.dataArray;
    r.beginPath();
    for (var a = !1, t = 0; t < e.length; t++) {
      var i = e[t].command, A = e[t].points;
      switch (i) {
        case "L":
          r.lineTo(A[0], A[1]);
          break;
        case "M":
          r.moveTo(A[0], A[1]);
          break;
        case "C":
          r.bezierCurveTo(A[0], A[1], A[2], A[3], A[4], A[5]);
          break;
        case "Q":
          r.quadraticCurveTo(A[0], A[1], A[2], A[3]);
          break;
        case "A":
          var n = A[0], o = A[1], f = A[2], l = A[3], c = A[4], h = A[5], d = A[6], b = A[7], g = f > l ? f : l, v = f > l ? 1 : f / l, m = f > l ? l / f : 1;
          r.translate(n, o), r.rotate(d), r.scale(v, m), r.arc(0, 0, g, c, c + h, 1 - b), r.scale(1 / v, 1 / m), r.rotate(-d), r.translate(-n, -o);
          break;
        case "z":
          a = !0, r.closePath();
          break;
      }
    }
    !a && !this.hasFill() ? r.strokeShape(this) : r.fillStrokeShape(this);
  }
  getSelfRect() {
    var r = [];
    this.dataArray.forEach(function(f) {
      if (f.command === "A") {
        var l = f.points[4], c = f.points[5], h = f.points[4] + c, d = Math.PI / 180;
        if (Math.abs(l - h) < d && (d = Math.abs(l - h)), c < 0)
          for (let b = l - d; b > h; b -= d) {
            const g = cr.getPointOnEllipticalArc(f.points[0], f.points[1], f.points[2], f.points[3], b, 0);
            r.push(g.x, g.y);
          }
        else
          for (let b = l + d; b < h; b += d) {
            const g = cr.getPointOnEllipticalArc(f.points[0], f.points[1], f.points[2], f.points[3], b, 0);
            r.push(g.x, g.y);
          }
      } else if (f.command === "C")
        for (let b = 0; b <= 1; b += 0.01) {
          const g = cr.getPointOnCubicBezier(b, f.start.x, f.start.y, f.points[0], f.points[1], f.points[2], f.points[3], f.points[4], f.points[5]);
          r.push(g.x, g.y);
        }
      else
        r = r.concat(f.points);
    });
    for (var e = r[0], a = r[0], t = r[1], i = r[1], A, n, o = 0; o < r.length / 2; o++)
      A = r[o * 2], n = r[o * 2 + 1], isNaN(A) || (e = Math.min(e, A), a = Math.max(a, A)), isNaN(n) || (t = Math.min(t, n), i = Math.max(i, n));
    return {
      x: Math.round(e),
      y: Math.round(t),
      width: Math.round(a - e),
      height: Math.round(i - t)
    };
  }
  getLength() {
    return this.pathLength;
  }
  getPointAtLength(r) {
    var e, a = 0, t = this.dataArray.length;
    if (!t)
      return null;
    for (; a < t && r > this.dataArray[a].pathLength; )
      r -= this.dataArray[a].pathLength, ++a;
    if (a === t)
      return e = this.dataArray[a - 1].points.slice(-2), {
        x: e[0],
        y: e[1]
      };
    if (r < 0.01)
      return e = this.dataArray[a].points.slice(0, 2), {
        x: e[0],
        y: e[1]
      };
    var i = this.dataArray[a], A = i.points;
    switch (i.command) {
      case "L":
        return cr.getPointOnLine(r, i.start.x, i.start.y, A[0], A[1]);
      case "C":
        return cr.getPointOnCubicBezier(r / i.pathLength, i.start.x, i.start.y, A[0], A[1], A[2], A[3], A[4], A[5]);
      case "Q":
        return cr.getPointOnQuadraticBezier(r / i.pathLength, i.start.x, i.start.y, A[0], A[1], A[2], A[3]);
      case "A":
        var n = A[0], o = A[1], f = A[2], l = A[3], c = A[4], h = A[5], d = A[6];
        return c += h * r / i.pathLength, cr.getPointOnEllipticalArc(n, o, f, l, c, d);
    }
    return null;
  }
  static getLineLength(r, e, a, t) {
    return Math.sqrt((a - r) * (a - r) + (t - e) * (t - e));
  }
  static getPointOnLine(r, e, a, t, i, A, n) {
    A === void 0 && (A = e), n === void 0 && (n = a);
    var o = (i - a) / (t - e + 1e-8), f = Math.sqrt(r * r / (1 + o * o));
    t < e && (f *= -1);
    var l = o * f, c;
    if (t === e)
      c = {
        x: A,
        y: n + l
      };
    else if ((n - a) / (A - e + 1e-8) === o)
      c = {
        x: A + f,
        y: n + l
      };
    else {
      var h, d, b = this.getLineLength(e, a, t, i), g = (A - e) * (t - e) + (n - a) * (i - a);
      g = g / (b * b), h = e + g * (t - e), d = a + g * (i - a);
      var v = this.getLineLength(A, n, h, d), m = Math.sqrt(r * r - v * v);
      f = Math.sqrt(m * m / (1 + o * o)), t < e && (f *= -1), l = o * f, c = {
        x: h + f,
        y: d + l
      };
    }
    return c;
  }
  static getPointOnCubicBezier(r, e, a, t, i, A, n, o, f) {
    function l(v) {
      return v * v * v;
    }
    function c(v) {
      return 3 * v * v * (1 - v);
    }
    function h(v) {
      return 3 * v * (1 - v) * (1 - v);
    }
    function d(v) {
      return (1 - v) * (1 - v) * (1 - v);
    }
    var b = o * l(r) + A * c(r) + t * h(r) + e * d(r), g = f * l(r) + n * c(r) + i * h(r) + a * d(r);
    return {
      x: b,
      y: g
    };
  }
  static getPointOnQuadraticBezier(r, e, a, t, i, A, n) {
    function o(d) {
      return d * d;
    }
    function f(d) {
      return 2 * d * (1 - d);
    }
    function l(d) {
      return (1 - d) * (1 - d);
    }
    var c = A * o(r) + t * f(r) + e * l(r), h = n * o(r) + i * f(r) + a * l(r);
    return {
      x: c,
      y: h
    };
  }
  static getPointOnEllipticalArc(r, e, a, t, i, A) {
    var n = Math.cos(A), o = Math.sin(A), f = {
      x: a * Math.cos(i),
      y: t * Math.sin(i)
    };
    return {
      x: r + (f.x * n - f.y * o),
      y: e + (f.x * o + f.y * n)
    };
  }
  static parsePathData(r) {
    if (!r)
      return [];
    var e = r, a = [
      "m",
      "M",
      "l",
      "L",
      "v",
      "V",
      "h",
      "H",
      "z",
      "Z",
      "c",
      "C",
      "q",
      "Q",
      "t",
      "T",
      "s",
      "S",
      "a",
      "A"
    ];
    e = e.replace(new RegExp(" ", "g"), ",");
    for (var t = 0; t < a.length; t++)
      e = e.replace(new RegExp(a[t], "g"), "|" + a[t]);
    var i = e.split("|"), A = [], n = [], o = 0, f = 0, l = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi, c;
    for (t = 1; t < i.length; t++) {
      var h = i[t], d = h.charAt(0);
      for (h = h.slice(1), n.length = 0; c = l.exec(h); )
        n.push(c[0]);
      for (var b = [], g = 0, v = n.length; g < v; g++) {
        if (n[g] === "00") {
          b.push(0, 0);
          continue;
        }
        var m = parseFloat(n[g]);
        isNaN(m) ? b.push(0) : b.push(m);
      }
      for (; b.length > 0 && !isNaN(b[0]); ) {
        var w = null, k = [], C = o, y = f, B, F, G, V, M, T, Q, L, J, r0;
        switch (d) {
          case "l":
            o += b.shift(), f += b.shift(), w = "L", k.push(o, f);
            break;
          case "L":
            o = b.shift(), f = b.shift(), k.push(o, f);
            break;
          case "m":
            var e0 = b.shift(), q = b.shift();
            if (o += e0, f += q, w = "M", A.length > 2 && A[A.length - 1].command === "z") {
              for (var _ = A.length - 2; _ >= 0; _--)
                if (A[_].command === "M") {
                  o = A[_].points[0] + e0, f = A[_].points[1] + q;
                  break;
                }
            }
            k.push(o, f), d = "l";
            break;
          case "M":
            o = b.shift(), f = b.shift(), w = "M", k.push(o, f), d = "L";
            break;
          case "h":
            o += b.shift(), w = "L", k.push(o, f);
            break;
          case "H":
            o = b.shift(), w = "L", k.push(o, f);
            break;
          case "v":
            f += b.shift(), w = "L", k.push(o, f);
            break;
          case "V":
            f = b.shift(), w = "L", k.push(o, f);
            break;
          case "C":
            k.push(b.shift(), b.shift(), b.shift(), b.shift()), o = b.shift(), f = b.shift(), k.push(o, f);
            break;
          case "c":
            k.push(o + b.shift(), f + b.shift(), o + b.shift(), f + b.shift()), o += b.shift(), f += b.shift(), w = "C", k.push(o, f);
            break;
          case "S":
            F = o, G = f, B = A[A.length - 1], B.command === "C" && (F = o + (o - B.points[2]), G = f + (f - B.points[3])), k.push(F, G, b.shift(), b.shift()), o = b.shift(), f = b.shift(), w = "C", k.push(o, f);
            break;
          case "s":
            F = o, G = f, B = A[A.length - 1], B.command === "C" && (F = o + (o - B.points[2]), G = f + (f - B.points[3])), k.push(F, G, o + b.shift(), f + b.shift()), o += b.shift(), f += b.shift(), w = "C", k.push(o, f);
            break;
          case "Q":
            k.push(b.shift(), b.shift()), o = b.shift(), f = b.shift(), k.push(o, f);
            break;
          case "q":
            k.push(o + b.shift(), f + b.shift()), o += b.shift(), f += b.shift(), w = "Q", k.push(o, f);
            break;
          case "T":
            F = o, G = f, B = A[A.length - 1], B.command === "Q" && (F = o + (o - B.points[0]), G = f + (f - B.points[1])), o = b.shift(), f = b.shift(), w = "Q", k.push(F, G, o, f);
            break;
          case "t":
            F = o, G = f, B = A[A.length - 1], B.command === "Q" && (F = o + (o - B.points[0]), G = f + (f - B.points[1])), o += b.shift(), f += b.shift(), w = "Q", k.push(F, G, o, f);
            break;
          case "A":
            V = b.shift(), M = b.shift(), T = b.shift(), Q = b.shift(), L = b.shift(), J = o, r0 = f, o = b.shift(), f = b.shift(), w = "A", k = this.convertEndpointToCenterParameterization(J, r0, o, f, Q, L, V, M, T);
            break;
          case "a":
            V = b.shift(), M = b.shift(), T = b.shift(), Q = b.shift(), L = b.shift(), J = o, r0 = f, o += b.shift(), f += b.shift(), w = "A", k = this.convertEndpointToCenterParameterization(J, r0, o, f, Q, L, V, M, T);
            break;
        }
        A.push({
          command: w || d,
          points: k,
          start: {
            x: C,
            y
          },
          pathLength: this.calcLength(C, y, w || d, k)
        });
      }
      (d === "z" || d === "Z") && A.push({
        command: "z",
        points: [],
        start: void 0,
        pathLength: 0
      });
    }
    return A;
  }
  static calcLength(r, e, a, t) {
    var i, A, n, o, f = cr;
    switch (a) {
      case "L":
        return f.getLineLength(r, e, t[0], t[1]);
      case "C":
        for (i = 0, A = f.getPointOnCubicBezier(0, r, e, t[0], t[1], t[2], t[3], t[4], t[5]), o = 0.01; o <= 1; o += 0.01)
          n = f.getPointOnCubicBezier(o, r, e, t[0], t[1], t[2], t[3], t[4], t[5]), i += f.getLineLength(A.x, A.y, n.x, n.y), A = n;
        return i;
      case "Q":
        for (i = 0, A = f.getPointOnQuadraticBezier(0, r, e, t[0], t[1], t[2], t[3]), o = 0.01; o <= 1; o += 0.01)
          n = f.getPointOnQuadraticBezier(o, r, e, t[0], t[1], t[2], t[3]), i += f.getLineLength(A.x, A.y, n.x, n.y), A = n;
        return i;
      case "A":
        i = 0;
        var l = t[4], c = t[5], h = t[4] + c, d = Math.PI / 180;
        if (Math.abs(l - h) < d && (d = Math.abs(l - h)), A = f.getPointOnEllipticalArc(t[0], t[1], t[2], t[3], l, 0), c < 0)
          for (o = l - d; o > h; o -= d)
            n = f.getPointOnEllipticalArc(t[0], t[1], t[2], t[3], o, 0), i += f.getLineLength(A.x, A.y, n.x, n.y), A = n;
        else
          for (o = l + d; o < h; o += d)
            n = f.getPointOnEllipticalArc(t[0], t[1], t[2], t[3], o, 0), i += f.getLineLength(A.x, A.y, n.x, n.y), A = n;
        return n = f.getPointOnEllipticalArc(t[0], t[1], t[2], t[3], h, 0), i += f.getLineLength(A.x, A.y, n.x, n.y), i;
    }
    return 0;
  }
  static convertEndpointToCenterParameterization(r, e, a, t, i, A, n, o, f) {
    var l = f * (Math.PI / 180), c = Math.cos(l) * (r - a) / 2 + Math.sin(l) * (e - t) / 2, h = -1 * Math.sin(l) * (r - a) / 2 + Math.cos(l) * (e - t) / 2, d = c * c / (n * n) + h * h / (o * o);
    d > 1 && (n *= Math.sqrt(d), o *= Math.sqrt(d));
    var b = Math.sqrt((n * n * (o * o) - n * n * (h * h) - o * o * (c * c)) / (n * n * (h * h) + o * o * (c * c)));
    i === A && (b *= -1), isNaN(b) && (b = 0);
    var g = b * n * h / o, v = b * -o * c / n, m = (r + a) / 2 + Math.cos(l) * g - Math.sin(l) * v, w = (e + t) / 2 + Math.sin(l) * g + Math.cos(l) * v, k = function(M) {
      return Math.sqrt(M[0] * M[0] + M[1] * M[1]);
    }, C = function(M, T) {
      return (M[0] * T[0] + M[1] * T[1]) / (k(M) * k(T));
    }, y = function(M, T) {
      return (M[0] * T[1] < M[1] * T[0] ? -1 : 1) * Math.acos(C(M, T));
    }, B = y([1, 0], [(c - g) / n, (h - v) / o]), F = [(c - g) / n, (h - v) / o], G = [(-1 * c - g) / n, (-1 * h - v) / o], V = y(F, G);
    return C(F, G) <= -1 && (V = Math.PI), C(F, G) >= 1 && (V = 0), A === 0 && V > 0 && (V = V - 2 * Math.PI), A === 1 && V < 0 && (V = V + 2 * Math.PI), [m, w, n, o, B, V, l, A];
  }
}
cr.prototype.className = "Path";
cr.prototype._attrsAffectingSize = ["data"];
mr(cr);
P.addGetterSetter(cr, "data");
class k2 extends gt {
  _sceneFunc(r) {
    super._sceneFunc(r);
    var e = Math.PI * 2, a = this.points(), t = a, i = this.tension() !== 0 && a.length > 4;
    i && (t = this.getTensionPoints());
    var A = this.pointerLength(), n = a.length, o, f;
    if (i) {
      const d = [
        t[t.length - 4],
        t[t.length - 3],
        t[t.length - 2],
        t[t.length - 1],
        a[n - 2],
        a[n - 1]
      ], b = cr.calcLength(t[t.length - 4], t[t.length - 3], "C", d), g = cr.getPointOnQuadraticBezier(Math.min(1, 1 - A / b), d[0], d[1], d[2], d[3], d[4], d[5]);
      o = a[n - 2] - g.x, f = a[n - 1] - g.y;
    } else
      o = a[n - 2] - a[n - 4], f = a[n - 1] - a[n - 3];
    var l = (Math.atan2(f, o) + e) % e, c = this.pointerWidth();
    this.pointerAtEnding() && (r.save(), r.beginPath(), r.translate(a[n - 2], a[n - 1]), r.rotate(l), r.moveTo(0, 0), r.lineTo(-A, c / 2), r.lineTo(-A, -c / 2), r.closePath(), r.restore()), this.pointerAtBeginning() && (r.save(), r.translate(a[0], a[1]), i ? (o = (t[0] + t[2]) / 2 - a[0], f = (t[1] + t[3]) / 2 - a[1]) : (o = a[2] - a[0], f = a[3] - a[1]), r.rotate((Math.atan2(-f, -o) + e) % e), r.moveTo(0, 0), r.lineTo(-A, c / 2), r.lineTo(-A, -c / 2), r.closePath(), r.restore());
    var h = this.dashEnabled();
    h && (this.attrs.dashEnabled = !1, r.setLineDash([])), r.fillStrokeShape(this), h && (this.attrs.dashEnabled = !0);
  }
  getSelfRect() {
    const r = super.getSelfRect(), e = this.pointerWidth() / 2;
    return {
      x: r.x - e,
      y: r.y - e,
      width: r.width + e * 2,
      height: r.height + e * 2
    };
  }
}
k2.prototype.className = "Arrow";
mr(k2);
P.addGetterSetter(k2, "pointerLength", 10, v0());
P.addGetterSetter(k2, "pointerWidth", 10, v0());
P.addGetterSetter(k2, "pointerAtBeginning", !1);
P.addGetterSetter(k2, "pointerAtEnding", !0);
class un extends b0 {
  _sceneFunc(r) {
    r.beginPath(), r.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, !1), r.closePath(), r.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(r) {
    this.radius() !== r / 2 && this.radius(r / 2);
  }
  setHeight(r) {
    this.radius() !== r / 2 && this.radius(r / 2);
  }
}
un.prototype._centroid = !0;
un.prototype.className = "Circle";
un.prototype._attrsAffectingSize = ["radius"];
mr(un);
P.addGetterSetter(un, "radius", 0, v0());
class ri extends b0 {
  _sceneFunc(r) {
    var e = this.radiusX(), a = this.radiusY();
    r.beginPath(), r.save(), e !== a && r.scale(1, a / e), r.arc(0, 0, e, 0, Math.PI * 2, !1), r.restore(), r.closePath(), r.fillStrokeShape(this);
  }
  getWidth() {
    return this.radiusX() * 2;
  }
  getHeight() {
    return this.radiusY() * 2;
  }
  setWidth(r) {
    this.radiusX(r / 2);
  }
  setHeight(r) {
    this.radiusY(r / 2);
  }
}
ri.prototype.className = "Ellipse";
ri.prototype._centroid = !0;
ri.prototype._attrsAffectingSize = ["radiusX", "radiusY"];
mr(ri);
P.addComponentsGetterSetter(ri, "radius", ["x", "y"]);
P.addGetterSetter(ri, "radiusX", 0, v0());
P.addGetterSetter(ri, "radiusY", 0, v0());
let vt = class gd extends b0 {
  constructor(r) {
    super(r), this.on("imageChange.konva", () => {
      this._setImageLoad();
    }), this._setImageLoad();
  }
  _setImageLoad() {
    const r = this.image();
    r && r.complete || r && r.readyState === 4 || r && r.addEventListener && r.addEventListener("load", () => {
      this._requestDraw();
    });
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _sceneFunc(r) {
    const e = this.getWidth(), a = this.getHeight(), t = this.attrs.image;
    let i;
    if (t) {
      const A = this.attrs.cropWidth, n = this.attrs.cropHeight;
      A && n ? i = [
        t,
        this.cropX(),
        this.cropY(),
        A,
        n,
        0,
        0,
        e,
        a
      ] : i = [t, 0, 0, e, a];
    }
    (this.hasFill() || this.hasStroke()) && (r.beginPath(), r.rect(0, 0, e, a), r.closePath(), r.fillStrokeShape(this)), t && r.drawImage.apply(r, i);
  }
  _hitFunc(r) {
    var e = this.width(), a = this.height();
    r.beginPath(), r.rect(0, 0, e, a), r.closePath(), r.fillStrokeShape(this);
  }
  getWidth() {
    var r, e;
    return (r = this.attrs.width) !== null && r !== void 0 ? r : (e = this.image()) === null || e === void 0 ? void 0 : e.width;
  }
  getHeight() {
    var r, e;
    return (r = this.attrs.height) !== null && r !== void 0 ? r : (e = this.image()) === null || e === void 0 ? void 0 : e.height;
  }
  static fromURL(r, e) {
    var a = K.createImageElement();
    a.onload = function() {
      var t = new gd({
        image: a
      });
      e(t);
    }, a.crossOrigin = "Anonymous", a.src = r;
  }
};
vt.prototype.className = "Image";
mr(vt);
P.addGetterSetter(vt, "image");
P.addComponentsGetterSetter(vt, "crop", ["x", "y", "width", "height"]);
P.addGetterSetter(vt, "cropX", 0, v0());
P.addGetterSetter(vt, "cropY", 0, v0());
P.addGetterSetter(vt, "cropWidth", 0, v0());
P.addGetterSetter(vt, "cropHeight", 0, v0());
var vd = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "padding",
  "lineHeight",
  "text",
  "width",
  "height"
], z8 = "Change.konva", Q8 = "none", tc = "up", ic = "right", Ac = "down", nc = "left", J8 = vd.length;
class vh extends fn {
  constructor(r) {
    super(r), this.on("add.konva", function(e) {
      this._addListeners(e.child), this._sync();
    });
  }
  getText() {
    return this.find("Text")[0];
  }
  getTag() {
    return this.find("Tag")[0];
  }
  _addListeners(r) {
    var e = this, a, t = function() {
      e._sync();
    };
    for (a = 0; a < J8; a++)
      r.on(vd[a] + z8, t);
  }
  getWidth() {
    return this.getText().width();
  }
  getHeight() {
    return this.getText().height();
  }
  _sync() {
    var r = this.getText(), e = this.getTag(), a, t, i, A, n, o, f;
    if (r && e) {
      switch (a = r.width(), t = r.height(), i = e.pointerDirection(), A = e.pointerWidth(), f = e.pointerHeight(), n = 0, o = 0, i) {
        case tc:
          n = a / 2, o = -1 * f;
          break;
        case ic:
          n = a + A, o = t / 2;
          break;
        case Ac:
          n = a / 2, o = t + f;
          break;
        case nc:
          n = -1 * A, o = t / 2;
          break;
      }
      e.setAttrs({
        x: -1 * n,
        y: -1 * o,
        width: a,
        height: t
      }), r.setAttrs({
        x: -1 * n,
        y: -1 * o
      });
    }
  }
}
vh.prototype.className = "Label";
mr(vh);
class w2 extends b0 {
  _sceneFunc(r) {
    var e = this.width(), a = this.height(), t = this.pointerDirection(), i = this.pointerWidth(), A = this.pointerHeight(), n = this.cornerRadius();
    let o = 0, f = 0, l = 0, c = 0;
    typeof n == "number" ? o = f = l = c = Math.min(n, e / 2, a / 2) : (o = Math.min(n[0] || 0, e / 2, a / 2), f = Math.min(n[1] || 0, e / 2, a / 2), c = Math.min(n[2] || 0, e / 2, a / 2), l = Math.min(n[3] || 0, e / 2, a / 2)), r.beginPath(), r.moveTo(o, 0), t === tc && (r.lineTo((e - i) / 2, 0), r.lineTo(e / 2, -1 * A), r.lineTo((e + i) / 2, 0)), r.lineTo(e - f, 0), r.arc(e - f, f, f, Math.PI * 3 / 2, 0, !1), t === ic && (r.lineTo(e, (a - A) / 2), r.lineTo(e + i, a / 2), r.lineTo(e, (a + A) / 2)), r.lineTo(e, a - c), r.arc(e - c, a - c, c, 0, Math.PI / 2, !1), t === Ac && (r.lineTo((e + i) / 2, a), r.lineTo(e / 2, a + A), r.lineTo((e - i) / 2, a)), r.lineTo(l, a), r.arc(l, a - l, l, Math.PI / 2, Math.PI, !1), t === nc && (r.lineTo(0, (a + A) / 2), r.lineTo(-1 * i, a / 2), r.lineTo(0, (a - A) / 2)), r.lineTo(0, o), r.arc(o, o, o, Math.PI, Math.PI * 3 / 2, !1), r.closePath(), r.fillStrokeShape(this);
  }
  getSelfRect() {
    var r = 0, e = 0, a = this.pointerWidth(), t = this.pointerHeight(), i = this.pointerDirection(), A = this.width(), n = this.height();
    return i === tc ? (e -= t, n += t) : i === Ac ? n += t : i === nc ? (r -= a * 1.5, A += a) : i === ic && (A += a * 1.5), {
      x: r,
      y: e,
      width: A,
      height: n
    };
  }
}
w2.prototype.className = "Tag";
mr(w2);
P.addGetterSetter(w2, "pointerDirection", Q8);
P.addGetterSetter(w2, "pointerWidth", 0, v0());
P.addGetterSetter(w2, "pointerHeight", 0, v0());
P.addGetterSetter(w2, "cornerRadius", 0, Q4(4));
class vf extends b0 {
  _sceneFunc(r) {
    var e = this.cornerRadius(), a = this.width(), t = this.height();
    if (r.beginPath(), !e)
      r.rect(0, 0, a, t);
    else {
      let i = 0, A = 0, n = 0, o = 0;
      typeof e == "number" ? i = A = n = o = Math.min(e, a / 2, t / 2) : (i = Math.min(e[0] || 0, a / 2, t / 2), A = Math.min(e[1] || 0, a / 2, t / 2), o = Math.min(e[2] || 0, a / 2, t / 2), n = Math.min(e[3] || 0, a / 2, t / 2)), r.moveTo(i, 0), r.lineTo(a - A, 0), r.arc(a - A, A, A, Math.PI * 3 / 2, 0, !1), r.lineTo(a, t - o), r.arc(a - o, t - o, o, 0, Math.PI / 2, !1), r.lineTo(n, t), r.arc(n, t - n, n, Math.PI / 2, Math.PI, !1), r.lineTo(0, i), r.arc(i, i, i, Math.PI, Math.PI * 3 / 2, !1);
    }
    r.closePath(), r.fillStrokeShape(this);
  }
}
vf.prototype.className = "Rect";
mr(vf);
P.addGetterSetter(vf, "cornerRadius", 0, Q4(4));
class y2 extends b0 {
  _sceneFunc(r) {
    const e = this._getPoints();
    r.beginPath(), r.moveTo(e[0].x, e[0].y);
    for (var a = 1; a < e.length; a++)
      r.lineTo(e[a].x, e[a].y);
    r.closePath(), r.fillStrokeShape(this);
  }
  _getPoints() {
    const r = this.attrs.sides, e = this.attrs.radius || 0, a = [];
    for (var t = 0; t < r; t++)
      a.push({
        x: e * Math.sin(t * 2 * Math.PI / r),
        y: -1 * e * Math.cos(t * 2 * Math.PI / r)
      });
    return a;
  }
  getSelfRect() {
    const r = this._getPoints();
    var e = r[0].x, a = r[0].y, t = r[0].x, i = r[0].y;
    return r.forEach((A) => {
      e = Math.min(e, A.x), a = Math.max(a, A.x), t = Math.min(t, A.y), i = Math.max(i, A.y);
    }), {
      x: e,
      y: t,
      width: a - e,
      height: i - t
    };
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(r) {
    this.radius(r / 2);
  }
  setHeight(r) {
    this.radius(r / 2);
  }
}
y2.prototype.className = "RegularPolygon";
y2.prototype._centroid = !0;
y2.prototype._attrsAffectingSize = ["radius"];
mr(y2);
P.addGetterSetter(y2, "radius", 0, v0());
P.addGetterSetter(y2, "sides", 0, v0());
var t4 = Math.PI * 2;
class _2 extends b0 {
  _sceneFunc(r) {
    r.beginPath(), r.arc(0, 0, this.innerRadius(), 0, t4, !1), r.moveTo(this.outerRadius(), 0), r.arc(0, 0, this.outerRadius(), t4, 0, !0), r.closePath(), r.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(r) {
    this.outerRadius(r / 2);
  }
  setHeight(r) {
    this.outerRadius(r / 2);
  }
}
_2.prototype.className = "Ring";
_2.prototype._centroid = !0;
_2.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
mr(_2);
P.addGetterSetter(_2, "innerRadius", 0, v0());
P.addGetterSetter(_2, "outerRadius", 0, v0());
class Ra extends b0 {
  constructor(r) {
    super(r), this._updated = !0, this.anim = new Ne(() => {
      var e = this._updated;
      return this._updated = !1, e;
    }), this.on("animationChange.konva", function() {
      this.frameIndex(0);
    }), this.on("frameIndexChange.konva", function() {
      this._updated = !0;
    }), this.on("frameRateChange.konva", function() {
      this.anim.isRunning() && (clearInterval(this.interval), this._setInterval());
    });
  }
  _sceneFunc(r) {
    var e = this.animation(), a = this.frameIndex(), t = a * 4, i = this.animations()[e], A = this.frameOffsets(), n = i[t + 0], o = i[t + 1], f = i[t + 2], l = i[t + 3], c = this.image();
    if ((this.hasFill() || this.hasStroke()) && (r.beginPath(), r.rect(0, 0, f, l), r.closePath(), r.fillStrokeShape(this)), c)
      if (A) {
        var h = A[e], d = a * 2;
        r.drawImage(c, n, o, f, l, h[d + 0], h[d + 1], f, l);
      } else
        r.drawImage(c, n, o, f, l, 0, 0, f, l);
  }
  _hitFunc(r) {
    var e = this.animation(), a = this.frameIndex(), t = a * 4, i = this.animations()[e], A = this.frameOffsets(), n = i[t + 2], o = i[t + 3];
    if (r.beginPath(), A) {
      var f = A[e], l = a * 2;
      r.rect(f[l + 0], f[l + 1], n, o);
    } else
      r.rect(0, 0, n, o);
    r.closePath(), r.fillShape(this);
  }
  _useBufferCanvas() {
    return super._useBufferCanvas(!0);
  }
  _setInterval() {
    var r = this;
    this.interval = setInterval(function() {
      r._updateIndex();
    }, 1e3 / this.frameRate());
  }
  start() {
    if (!this.isRunning()) {
      var r = this.getLayer();
      this.anim.setLayers(r), this._setInterval(), this.anim.start();
    }
  }
  stop() {
    this.anim.stop(), clearInterval(this.interval);
  }
  isRunning() {
    return this.anim.isRunning();
  }
  _updateIndex() {
    var r = this.frameIndex(), e = this.animation(), a = this.animations(), t = a[e], i = t.length / 4;
    r < i - 1 ? this.frameIndex(r + 1) : this.frameIndex(0);
  }
}
Ra.prototype.className = "Sprite";
mr(Ra);
P.addGetterSetter(Ra, "animation");
P.addGetterSetter(Ra, "animations");
P.addGetterSetter(Ra, "frameOffsets");
P.addGetterSetter(Ra, "image");
P.addGetterSetter(Ra, "frameIndex", 0, v0());
P.addGetterSetter(Ra, "frameRate", 17, v0());
P.backCompat(Ra, {
  index: "frameIndex",
  getIndex: "getFrameIndex",
  setIndex: "setFrameIndex"
});
class ei extends b0 {
  _sceneFunc(r) {
    var e = this.innerRadius(), a = this.outerRadius(), t = this.numPoints();
    r.beginPath(), r.moveTo(0, 0 - a);
    for (var i = 1; i < t * 2; i++) {
      var A = i % 2 === 0 ? a : e, n = A * Math.sin(i * Math.PI / t), o = -1 * A * Math.cos(i * Math.PI / t);
      r.lineTo(n, o);
    }
    r.closePath(), r.fillStrokeShape(this);
  }
  getWidth() {
    return this.outerRadius() * 2;
  }
  getHeight() {
    return this.outerRadius() * 2;
  }
  setWidth(r) {
    this.outerRadius(r / 2);
  }
  setHeight(r) {
    this.outerRadius(r / 2);
  }
}
ei.prototype.className = "Star";
ei.prototype._centroid = !0;
ei.prototype._attrsAffectingSize = ["innerRadius", "outerRadius"];
mr(ei);
P.addGetterSetter(ei, "numPoints", 5, v0());
P.addGetterSetter(ei, "innerRadius", 0, v0());
P.addGetterSetter(ei, "outerRadius", 0, v0());
function pd(s) {
  return Array.from(s);
}
var Sf = "auto", K8 = "center", vn = "justify", q8 = "Change.konva", $8 = "2d", i4 = "-", md = "left", r6 = "text", e6 = "Text", a6 = "top", t6 = "bottom", A4 = "middle", kd = "normal", i6 = "px ", Ff = " ", A6 = "right", n6 = "word", o6 = "char", s6 = "none", Iu = "…", wd = [
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontVariant",
  "padding",
  "align",
  "verticalAlign",
  "lineHeight",
  "text",
  "width",
  "height",
  "wrap",
  "ellipsis",
  "letterSpacing"
], f6 = wd.length;
function l6(s) {
  return s.split(",").map((r) => {
    r = r.trim();
    const e = r.indexOf(" ") >= 0, a = r.indexOf('"') >= 0 || r.indexOf("'") >= 0;
    return e && !a && (r = `"${r}"`), r;
  }).join(", ");
}
var Wf;
function Su() {
  return Wf || (Wf = K.createCanvasElement().getContext($8), Wf);
}
function u6(s) {
  s.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function c6(s) {
  s.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function h6(s) {
  return s = s || {}, !s.fillLinearGradientColorStops && !s.fillRadialGradientColorStops && !s.fillPatternImage && (s.fill = s.fill || "black"), s;
}
class pr extends b0 {
  constructor(r) {
    super(h6(r)), this._partialTextX = 0, this._partialTextY = 0;
    for (var e = 0; e < f6; e++)
      this.on(wd[e] + q8, this._setTextData);
    this._setTextData();
  }
  _sceneFunc(r) {
    var e = this.textArr, a = e.length;
    if (this.text()) {
      var t = this.padding(), i = this.fontSize(), A = this.lineHeight() * i, n = this.verticalAlign(), o = 0, f = this.align(), l = this.getWidth(), c = this.letterSpacing(), h = this.fill(), d = this.textDecoration(), b = d.indexOf("underline") !== -1, g = d.indexOf("line-through") !== -1, v, m = 0, m = A / 2, w = 0, k = 0;
      for (r.setAttr("font", this._getContextFont()), r.setAttr("textBaseline", A4), r.setAttr("textAlign", md), n === A4 ? o = (this.getHeight() - a * A - t * 2) / 2 : n === t6 && (o = this.getHeight() - a * A - t * 2), r.translate(t, o + t), v = 0; v < a; v++) {
        var w = 0, k = 0, C = e[v], y = C.text, B = C.width, F = v !== a - 1, G, V, M;
        if (r.save(), f === A6 ? w += l - B - t * 2 : f === K8 && (w += (l - B - t * 2) / 2), b && (r.save(), r.beginPath(), r.moveTo(w, m + k + Math.round(i / 2)), G = y.split(" ").length - 1, V = G === 0, M = f === vn && F && !V ? l - t * 2 : B, r.lineTo(w + Math.round(M), m + k + Math.round(i / 2)), r.lineWidth = i / 15, r.strokeStyle = h, r.stroke(), r.restore()), g && (r.save(), r.beginPath(), r.moveTo(w, m + k), G = y.split(" ").length - 1, V = G === 0, M = f === vn && F && !V ? l - t * 2 : B, r.lineTo(w + Math.round(M), m + k), r.lineWidth = i / 15, r.strokeStyle = h, r.stroke(), r.restore()), c !== 0 || f === vn) {
          G = y.split(" ").length - 1;
          for (var T = pd(y), Q = 0; Q < T.length; Q++) {
            var L = T[Q];
            L === " " && v !== a - 1 && f === vn && (w += (l - t * 2 - B) / G), this._partialTextX = w, this._partialTextY = m + k, this._partialText = L, r.fillStrokeShape(this), w += this.measureSize(L).width + c;
          }
        } else
          this._partialTextX = w, this._partialTextY = m + k, this._partialText = y, r.fillStrokeShape(this);
        r.restore(), a > 1 && (m += A);
      }
    }
  }
  _hitFunc(r) {
    var e = this.getWidth(), a = this.getHeight();
    r.beginPath(), r.rect(0, 0, e, a), r.closePath(), r.fillStrokeShape(this);
  }
  setText(r) {
    var e = K._isString(r) ? r : r == null ? "" : r + "";
    return this._setAttr(r6, e), this;
  }
  getWidth() {
    var r = this.attrs.width === Sf || this.attrs.width === void 0;
    return r ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
  }
  getHeight() {
    var r = this.attrs.height === Sf || this.attrs.height === void 0;
    return r ? this.fontSize() * this.textArr.length * this.lineHeight() + this.padding() * 2 : this.attrs.height;
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return K.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  measureSize(r) {
    var e = Su(), a = this.fontSize(), t;
    return e.save(), e.font = this._getContextFont(), t = e.measureText(r), e.restore(), {
      width: t.width,
      height: a
    };
  }
  _getContextFont() {
    return this.fontStyle() + Ff + this.fontVariant() + Ff + (this.fontSize() + i6) + l6(this.fontFamily());
  }
  _addTextLine(r) {
    this.align() === vn && (r = r.trim());
    var e = this._getTextWidth(r);
    return this.textArr.push({ text: r, width: e });
  }
  _getTextWidth(r) {
    var e = this.letterSpacing(), a = r.length;
    return Su().measureText(r).width + (a ? e * (a - 1) : 0);
  }
  _setTextData() {
    var r = this.text().split(`
`), e = +this.fontSize(), a = 0, t = this.lineHeight() * e, i = this.attrs.width, A = this.attrs.height, n = i !== Sf && i !== void 0, o = A !== Sf && A !== void 0, f = this.padding(), l = i - f * 2, c = A - f * 2, h = 0, d = this.wrap(), b = d !== s6, g = d !== o6 && b, v = this.ellipsis();
    this.textArr = [], Su().font = this._getContextFont();
    for (var m = v ? this._getTextWidth(Iu) : 0, w = 0, k = r.length; w < k; ++w) {
      var C = r[w], y = this._getTextWidth(C);
      if (n && y > l)
        for (; C.length > 0; ) {
          for (var B = 0, F = C.length, G = "", V = 0; B < F; ) {
            var M = B + F >>> 1, T = C.slice(0, M + 1), Q = this._getTextWidth(T) + m;
            Q <= l ? (B = M + 1, G = T, V = Q) : F = M;
          }
          if (G) {
            if (g) {
              var L, J = C[G.length], r0 = J === Ff || J === i4;
              r0 && V <= l ? L = G.length : L = Math.max(G.lastIndexOf(Ff), G.lastIndexOf(i4)) + 1, L > 0 && (B = L, G = G.slice(0, B), V = this._getTextWidth(G));
            }
            if (G = G.trimRight(), this._addTextLine(G), a = Math.max(a, V), h += t, !b || o && h + t > c) {
              var e0 = this.textArr[this.textArr.length - 1];
              if (e0 && v) {
                var q = this._getTextWidth(e0.text + Iu) < l;
                q || (e0.text = e0.text.slice(0, e0.text.length - 3)), this.textArr.splice(this.textArr.length - 1, 1), this._addTextLine(e0.text + Iu);
              }
              break;
            }
            if (C = C.slice(B), C = C.trimLeft(), C.length > 0 && (y = this._getTextWidth(C), y <= l)) {
              this._addTextLine(C), h += t, a = Math.max(a, y);
              break;
            }
          } else
            break;
        }
      else
        this._addTextLine(C), h += t, a = Math.max(a, y);
      if (o && h + t > c)
        break;
    }
    this.textHeight = e, this.textWidth = a;
  }
  getStrokeScaleEnabled() {
    return !0;
  }
}
pr.prototype._fillFunc = u6;
pr.prototype._strokeFunc = c6;
pr.prototype.className = e6;
pr.prototype._attrsAffectingSize = [
  "text",
  "fontSize",
  "padding",
  "wrap",
  "lineHeight",
  "letterSpacing"
];
mr(pr);
P.overWriteSetter(pr, "width", hh());
P.overWriteSetter(pr, "height", hh());
P.addGetterSetter(pr, "fontFamily", "Arial");
P.addGetterSetter(pr, "fontSize", 12, v0());
P.addGetterSetter(pr, "fontStyle", kd);
P.addGetterSetter(pr, "fontVariant", kd);
P.addGetterSetter(pr, "padding", 0, v0());
P.addGetterSetter(pr, "align", md);
P.addGetterSetter(pr, "verticalAlign", a6);
P.addGetterSetter(pr, "lineHeight", 1, v0());
P.addGetterSetter(pr, "wrap", n6);
P.addGetterSetter(pr, "ellipsis", !1, oa());
P.addGetterSetter(pr, "letterSpacing", 0, v0());
P.addGetterSetter(pr, "text", "", ln());
P.addGetterSetter(pr, "textDecoration", "");
var d6 = "", yd = "normal";
function _d(s) {
  s.fillText(this.partialText, 0, 0);
}
function Ed(s) {
  s.strokeText(this.partialText, 0, 0);
}
class Dr extends b0 {
  constructor(r) {
    super(r), this.dummyCanvas = K.createCanvasElement(), this.dataArray = [], this.dataArray = cr.parsePathData(this.attrs.data), this.on("dataChange.konva", function() {
      this.dataArray = cr.parsePathData(this.attrs.data), this._setTextData();
    }), this.on("textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva", this._setTextData), this._setTextData();
  }
  _sceneFunc(r) {
    r.setAttr("font", this._getContextFont()), r.setAttr("textBaseline", this.textBaseline()), r.setAttr("textAlign", "left"), r.save();
    var e = this.textDecoration(), a = this.fill(), t = this.fontSize(), i = this.glyphInfo;
    e === "underline" && r.beginPath();
    for (var A = 0; A < i.length; A++) {
      r.save();
      var n = i[A].p0;
      r.translate(n.x, n.y), r.rotate(i[A].rotation), this.partialText = i[A].text, r.fillStrokeShape(this), e === "underline" && (A === 0 && r.moveTo(0, t / 2 + 1), r.lineTo(t, t / 2 + 1)), r.restore();
    }
    e === "underline" && (r.strokeStyle = a, r.lineWidth = t / 20, r.stroke()), r.restore();
  }
  _hitFunc(r) {
    r.beginPath();
    var e = this.glyphInfo;
    if (e.length >= 1) {
      var a = e[0].p0;
      r.moveTo(a.x, a.y);
    }
    for (var t = 0; t < e.length; t++) {
      var i = e[t].p1;
      r.lineTo(i.x, i.y);
    }
    r.setAttr("lineWidth", this.fontSize()), r.setAttr("strokeStyle", this.colorKey), r.stroke();
  }
  getTextWidth() {
    return this.textWidth;
  }
  getTextHeight() {
    return K.warn("text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height."), this.textHeight;
  }
  setText(r) {
    return pr.prototype.setText.call(this, r);
  }
  _getContextFont() {
    return pr.prototype._getContextFont.call(this);
  }
  _getTextSize(r) {
    var e = this.dummyCanvas, a = e.getContext("2d");
    a.save(), a.font = this._getContextFont();
    var t = a.measureText(r);
    return a.restore(), {
      width: t.width,
      height: parseInt(this.attrs.fontSize, 10)
    };
  }
  _setTextData() {
    var r = this, e = this._getTextSize(this.attrs.text), a = this.letterSpacing(), t = this.align(), i = this.kerningFunc();
    this.textWidth = e.width, this.textHeight = e.height;
    var A = Math.max(this.textWidth + ((this.attrs.text || "").length - 1) * a, 0);
    this.glyphInfo = [];
    for (var n = 0, o = 0; o < r.dataArray.length; o++)
      r.dataArray[o].pathLength > 0 && (n += r.dataArray[o].pathLength);
    var f = 0;
    t === "center" && (f = Math.max(0, n / 2 - A / 2)), t === "right" && (f = Math.max(0, n - A));
    for (var l = pd(this.text()), c = this.text().split(" ").length - 1, h, d, b, g = -1, v = 0, m = function() {
      v = 0;
      for (var Q = r.dataArray, L = g + 1; L < Q.length; L++) {
        if (Q[L].pathLength > 0)
          return g = L, Q[L];
        Q[L].command === "M" && (h = {
          x: Q[L].points[0],
          y: Q[L].points[1]
        });
      }
      return {};
    }, w = function(Q) {
      var L = r._getTextSize(Q).width + a;
      Q === " " && t === "justify" && (L += (n - A) / c);
      var J = 0, r0 = 0;
      for (d = void 0; Math.abs(L - J) / L > 0.01 && r0 < 20; ) {
        r0++;
        for (var e0 = J; b === void 0; )
          b = m(), b && e0 + b.pathLength < L && (e0 += b.pathLength, b = void 0);
        if (b === {} || h === void 0)
          return;
        var q = !1;
        switch (b.command) {
          case "L":
            cr.getLineLength(h.x, h.y, b.points[0], b.points[1]) > L ? d = cr.getPointOnLine(L, h.x, h.y, b.points[0], b.points[1], h.x, h.y) : b = void 0;
            break;
          case "A":
            var _ = b.points[4], x = b.points[5], N = b.points[4] + x;
            v === 0 ? v = _ + 1e-8 : L > J ? v += Math.PI / 180 * x / Math.abs(x) : v -= Math.PI / 360 * x / Math.abs(x), (x < 0 && v < N || x >= 0 && v > N) && (v = N, q = !0), d = cr.getPointOnEllipticalArc(b.points[0], b.points[1], b.points[2], b.points[3], v, b.points[6]);
            break;
          case "C":
            v === 0 ? L > b.pathLength ? v = 1e-8 : v = L / b.pathLength : L > J ? v += (L - J) / b.pathLength / 2 : v = Math.max(v - (J - L) / b.pathLength / 2, 0), v > 1 && (v = 1, q = !0), d = cr.getPointOnCubicBezier(v, b.start.x, b.start.y, b.points[0], b.points[1], b.points[2], b.points[3], b.points[4], b.points[5]);
            break;
          case "Q":
            v === 0 ? v = L / b.pathLength : L > J ? v += (L - J) / b.pathLength : v -= (J - L) / b.pathLength, v > 1 && (v = 1, q = !0), d = cr.getPointOnQuadraticBezier(v, b.start.x, b.start.y, b.points[0], b.points[1], b.points[2], b.points[3]);
            break;
        }
        d !== void 0 && (J = cr.getLineLength(h.x, h.y, d.x, d.y)), q && (q = !1, b = void 0);
      }
    }, k = "C", C = r._getTextSize(k).width + a, y = f / C - 1, B = 0; B < y && (w(k), !(h === void 0 || d === void 0)); B++)
      h = d;
    for (var F = 0; F < l.length && (w(l[F]), !(h === void 0 || d === void 0)); F++) {
      var G = cr.getLineLength(h.x, h.y, d.x, d.y), V = 0;
      if (i)
        try {
          V = i(l[F - 1], l[F]) * this.fontSize();
        } catch {
          V = 0;
        }
      h.x += V, d.x += V, this.textWidth += V;
      var M = cr.getPointOnLine(V + G / 2, h.x, h.y, d.x, d.y), T = Math.atan2(d.y - h.y, d.x - h.x);
      this.glyphInfo.push({
        transposeX: M.x,
        transposeY: M.y,
        text: l[F],
        rotation: T,
        p0: h,
        p1: d
      }), h = d;
    }
  }
  getSelfRect() {
    if (!this.glyphInfo.length)
      return {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    var r = [];
    this.glyphInfo.forEach(function(l) {
      r.push(l.p0.x), r.push(l.p0.y), r.push(l.p1.x), r.push(l.p1.y);
    });
    for (var e = r[0] || 0, a = r[0] || 0, t = r[1] || 0, i = r[1] || 0, A, n, o = 0; o < r.length / 2; o++)
      A = r[o * 2], n = r[o * 2 + 1], e = Math.min(e, A), a = Math.max(a, A), t = Math.min(t, n), i = Math.max(i, n);
    var f = this.fontSize();
    return {
      x: e - f / 2,
      y: t - f / 2,
      width: a - e + f,
      height: i - t + f
    };
  }
}
Dr.prototype._fillFunc = _d;
Dr.prototype._strokeFunc = Ed;
Dr.prototype._fillFuncHit = _d;
Dr.prototype._strokeFuncHit = Ed;
Dr.prototype.className = "TextPath";
Dr.prototype._attrsAffectingSize = ["text", "fontSize", "data"];
mr(Dr);
P.addGetterSetter(Dr, "data");
P.addGetterSetter(Dr, "fontFamily", "Arial");
P.addGetterSetter(Dr, "fontSize", 12, v0());
P.addGetterSetter(Dr, "fontStyle", yd);
P.addGetterSetter(Dr, "align", "left");
P.addGetterSetter(Dr, "letterSpacing", 0, v0());
P.addGetterSetter(Dr, "textBaseline", "middle");
P.addGetterSetter(Dr, "fontVariant", yd);
P.addGetterSetter(Dr, "text", d6);
P.addGetterSetter(Dr, "textDecoration", null);
P.addGetterSetter(Dr, "kerningFunc", null);
var Ga = "tr-konva", b6 = [
  "resizeEnabledChange",
  "rotateAnchorOffsetChange",
  "rotateEnabledChange",
  "enabledAnchorsChange",
  "anchorSizeChange",
  "borderEnabledChange",
  "borderStrokeChange",
  "borderStrokeWidthChange",
  "borderDashChange",
  "anchorStrokeChange",
  "anchorStrokeWidthChange",
  "anchorFillChange",
  "anchorCornerRadiusChange",
  "ignoreStrokeChange"
].map((s) => s + `.${Ga}`).join(" "), n4 = "nodesRect", g6 = [
  "widthChange",
  "heightChange",
  "scaleXChange",
  "scaleYChange",
  "skewXChange",
  "skewYChange",
  "rotationChange",
  "offsetXChange",
  "offsetYChange",
  "transformsEnabledChange",
  "strokeWidthChange"
].map((s) => s + `.${Ga}`).join(" "), v6 = {
  "top-left": -45,
  "top-center": 0,
  "top-right": 45,
  "middle-right": -90,
  "middle-left": 90,
  "bottom-left": -135,
  "bottom-center": 180,
  "bottom-right": 135
};
const p6 = "ontouchstart" in F0._global;
function m6(s, r) {
  if (s === "rotater")
    return "crosshair";
  r += K.degToRad(v6[s] || 0);
  var e = (K.radToDeg(r) % 360 + 360) % 360;
  return K._inRange(e, 315 + 22.5, 360) || K._inRange(e, 0, 22.5) ? "ns-resize" : K._inRange(e, 45 - 22.5, 45 + 22.5) ? "nesw-resize" : K._inRange(e, 90 - 22.5, 90 + 22.5) ? "ew-resize" : K._inRange(e, 135 - 22.5, 135 + 22.5) ? "nwse-resize" : K._inRange(e, 180 - 22.5, 180 + 22.5) ? "ns-resize" : K._inRange(e, 225 - 22.5, 225 + 22.5) ? "nesw-resize" : K._inRange(e, 270 - 22.5, 270 + 22.5) ? "ew-resize" : K._inRange(e, 315 - 22.5, 315 + 22.5) ? "nwse-resize" : (K.error("Transformer has unknown angle for cursor detection: " + e), "pointer");
}
var w1 = [
  "top-left",
  "top-center",
  "top-right",
  "middle-right",
  "middle-left",
  "bottom-left",
  "bottom-center",
  "bottom-right"
], o4 = 1e8;
function k6(s) {
  return {
    x: s.x + s.width / 2 * Math.cos(s.rotation) + s.height / 2 * Math.sin(-s.rotation),
    y: s.y + s.height / 2 * Math.cos(s.rotation) + s.width / 2 * Math.sin(s.rotation)
  };
}
function Cd(s, r, e) {
  const a = e.x + (s.x - e.x) * Math.cos(r) - (s.y - e.y) * Math.sin(r), t = e.y + (s.x - e.x) * Math.sin(r) + (s.y - e.y) * Math.cos(r);
  return Object.assign(Object.assign({}, s), {
    rotation: s.rotation + r,
    x: a,
    y: t
  });
}
function w6(s, r) {
  const e = k6(s);
  return Cd(s, r, e);
}
function y6(s, r, e) {
  let a = r;
  for (let t = 0; t < s.length; t++) {
    const i = F0.getAngle(s[t]), A = Math.abs(i - r) % (Math.PI * 2);
    Math.min(A, Math.PI * 2 - A) < e && (a = i);
  }
  return a;
}
class or extends fn {
  constructor(r) {
    super(r), this._transforming = !1, this._createElements(), this._handleMouseMove = this._handleMouseMove.bind(this), this._handleMouseUp = this._handleMouseUp.bind(this), this.update = this.update.bind(this), this.on(b6, this.update), this.getNode() && this.update();
  }
  attachTo(r) {
    return this.setNode(r), this;
  }
  setNode(r) {
    return K.warn("tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead."), this.setNodes([r]);
  }
  getNode() {
    return this._nodes && this._nodes[0];
  }
  setNodes(r = []) {
    this._nodes && this._nodes.length && this.detach(), this._nodes = r, r.length === 1 && this.useSingleNodeRotation() ? this.rotation(r[0].getAbsoluteRotation()) : this.rotation(0), this._nodes.forEach((a) => {
      const t = a._attrsAffectingSize.map((A) => A + "Change." + Ga).join(" "), i = () => {
        this.nodes().length === 1 && this.useSingleNodeRotation() && this.rotation(this.nodes()[0].getAbsoluteRotation()), this._resetTransformCache(), !this._transforming && !this.isDragging() && this.update();
      };
      a.on(t, i), a.on(g6, i), a.on(`absoluteTransformChange.${Ga}`, i), a.on(`xChange.${Ga} yChange.${Ga}`, i), this._proxyDrag(a);
    }), this._resetTransformCache();
    var e = !!this.findOne(".top-left");
    return e && this.update(), this;
  }
  _proxyDrag(r) {
    let e;
    r.on(`dragstart.${Ga}`, (a) => {
      e = r.getAbsolutePosition(), !this.isDragging() && r !== this.findOne(".back") && this.startDrag(a, !1);
    }), r.on(`dragmove.${Ga}`, (a) => {
      if (!e)
        return;
      const t = r.getAbsolutePosition(), i = t.x - e.x, A = t.y - e.y;
      this.nodes().forEach((n) => {
        if (n === r || n.isDragging())
          return;
        const o = n.getAbsolutePosition();
        n.setAbsolutePosition({
          x: o.x + i,
          y: o.y + A
        }), n.startDrag(a);
      }), e = null;
    });
  }
  getNodes() {
    return this._nodes || [];
  }
  getActiveAnchor() {
    return this._movingAnchorName;
  }
  detach() {
    this._nodes && this._nodes.forEach((r) => {
      r.off("." + Ga);
    }), this._nodes = [], this._resetTransformCache();
  }
  _resetTransformCache() {
    this._clearCache(n4), this._clearCache("transform"), this._clearSelfAndDescendantCache("absoluteTransform");
  }
  _getNodeRect() {
    return this._getCache(n4, this.__getNodeRect);
  }
  __getNodeShape(r, e = this.rotation(), a) {
    var t = r.getClientRect({
      skipTransform: !0,
      skipShadow: !0,
      skipStroke: this.ignoreStroke()
    }), i = r.getAbsoluteScale(a), A = r.getAbsolutePosition(a), n = t.x * i.x - r.offsetX() * i.x, o = t.y * i.y - r.offsetY() * i.y;
    const f = (F0.getAngle(r.getAbsoluteRotation()) + Math.PI * 2) % (Math.PI * 2), l = {
      x: A.x + n * Math.cos(f) + o * Math.sin(-f),
      y: A.y + o * Math.cos(f) + n * Math.sin(f),
      width: t.width * i.x,
      height: t.height * i.y,
      rotation: f
    };
    return Cd(l, -F0.getAngle(e), {
      x: 0,
      y: 0
    });
  }
  __getNodeRect() {
    var r = this.getNode();
    if (!r)
      return {
        x: -o4,
        y: -o4,
        width: 0,
        height: 0,
        rotation: 0
      };
    const e = [];
    this.nodes().map((f) => {
      const l = f.getClientRect({
        skipTransform: !0,
        skipShadow: !0,
        skipStroke: this.ignoreStroke()
      });
      var c = [
        { x: l.x, y: l.y },
        { x: l.x + l.width, y: l.y },
        { x: l.x + l.width, y: l.y + l.height },
        { x: l.x, y: l.y + l.height }
      ], h = f.getAbsoluteTransform();
      c.forEach(function(d) {
        var b = h.point(d);
        e.push(b);
      });
    });
    const a = new Ie();
    a.rotate(-F0.getAngle(this.rotation()));
    var t, i, A, n;
    e.forEach(function(f) {
      var l = a.point(f);
      t === void 0 && (t = A = l.x, i = n = l.y), t = Math.min(t, l.x), i = Math.min(i, l.y), A = Math.max(A, l.x), n = Math.max(n, l.y);
    }), a.invert();
    const o = a.point({ x: t, y: i });
    return {
      x: o.x,
      y: o.y,
      width: A - t,
      height: n - i,
      rotation: F0.getAngle(this.rotation())
    };
  }
  getX() {
    return this._getNodeRect().x;
  }
  getY() {
    return this._getNodeRect().y;
  }
  getWidth() {
    return this._getNodeRect().width;
  }
  getHeight() {
    return this._getNodeRect().height;
  }
  _createElements() {
    this._createBack(), w1.forEach(function(r) {
      this._createAnchor(r);
    }.bind(this)), this._createAnchor("rotater");
  }
  _createAnchor(r) {
    var e = new vf({
      stroke: "rgb(0, 161, 255)",
      fill: "white",
      strokeWidth: 1,
      name: r + " _anchor",
      dragDistance: 0,
      draggable: !0,
      hitStrokeWidth: p6 ? 10 : "auto"
    }), a = this;
    e.on("mousedown touchstart", function(t) {
      a._handleMouseDown(t);
    }), e.on("dragstart", (t) => {
      e.stopDrag(), t.cancelBubble = !0;
    }), e.on("dragend", (t) => {
      t.cancelBubble = !0;
    }), e.on("mouseenter", () => {
      var t = F0.getAngle(this.rotation()), i = m6(r, t);
      e.getStage().content && (e.getStage().content.style.cursor = i), this._cursorChange = !0;
    }), e.on("mouseout", () => {
      e.getStage().content && (e.getStage().content.style.cursor = ""), this._cursorChange = !1;
    }), this.add(e);
  }
  _createBack() {
    var r = new b0({
      name: "back",
      width: 0,
      height: 0,
      draggable: !0,
      sceneFunc(e) {
        var a = this.getParent(), t = a.padding();
        e.beginPath(), e.rect(-t, -t, this.width() + t * 2, this.height() + t * 2), e.moveTo(this.width() / 2, -t), a.rotateEnabled() && e.lineTo(this.width() / 2, -a.rotateAnchorOffset() * K._sign(this.height()) - t), e.fillStrokeShape(this);
      },
      hitFunc: (e, a) => {
        if (this.shouldOverdrawWholeArea()) {
          var t = this.padding();
          e.beginPath(), e.rect(-t, -t, a.width() + t * 2, a.height() + t * 2), e.fillStrokeShape(a);
        }
      }
    });
    this.add(r), this._proxyDrag(r), r.on("dragstart", (e) => {
      e.cancelBubble = !0;
    }), r.on("dragmove", (e) => {
      e.cancelBubble = !0;
    }), r.on("dragend", (e) => {
      e.cancelBubble = !0;
    }), this.on("dragmove", (e) => {
      this.update();
    });
  }
  _handleMouseDown(r) {
    this._movingAnchorName = r.target.name().split(" ")[0];
    var e = this._getNodeRect(), a = e.width, t = e.height, i = Math.sqrt(Math.pow(a, 2) + Math.pow(t, 2));
    this.sin = Math.abs(t / i), this.cos = Math.abs(a / i), typeof window < "u" && (window.addEventListener("mousemove", this._handleMouseMove), window.addEventListener("touchmove", this._handleMouseMove), window.addEventListener("mouseup", this._handleMouseUp, !0), window.addEventListener("touchend", this._handleMouseUp, !0)), this._transforming = !0;
    var A = r.target.getAbsolutePosition(), n = r.target.getStage().getPointerPosition();
    this._anchorDragOffset = {
      x: n.x - A.x,
      y: n.y - A.y
    }, this._fire("transformstart", { evt: r, target: this.getNode() }), this._nodes.forEach((o) => {
      o._fire("transformstart", { evt: r, target: o });
    });
  }
  _handleMouseMove(r) {
    var e, a, t, i = this.findOne("." + this._movingAnchorName), A = i.getStage();
    A.setPointersPositions(r);
    const n = A.getPointerPosition();
    var o = {
      x: n.x - this._anchorDragOffset.x,
      y: n.y - this._anchorDragOffset.y
    };
    const f = i.getAbsolutePosition();
    i.setAbsolutePosition(o);
    const l = i.getAbsolutePosition();
    if (!(f.x === l.x && f.y === l.y)) {
      if (this._movingAnchorName === "rotater") {
        var c = this._getNodeRect();
        e = i.x() - c.width / 2, a = -i.y() + c.height / 2;
        let Q = Math.atan2(-a, e) + Math.PI / 2;
        c.height < 0 && (Q -= Math.PI);
        var h = F0.getAngle(this.rotation());
        const L = h + Q, J = F0.getAngle(this.rotationSnapTolerance()), e0 = y6(this.rotationSnaps(), L, J) - c.rotation, q = w6(c, e0);
        this._fitNodesInto(q, r);
        return;
      }
      var d = this.keepRatio() || r.shiftKey, w = this.centeredScaling() || r.altKey;
      if (this._movingAnchorName === "top-left") {
        if (d) {
          var b = w ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-right").x(),
            y: this.findOne(".bottom-right").y()
          };
          t = Math.sqrt(Math.pow(b.x - i.x(), 2) + Math.pow(b.y - i.y(), 2));
          var g = this.findOne(".top-left").x() > b.x ? -1 : 1, v = this.findOne(".top-left").y() > b.y ? -1 : 1;
          e = t * this.cos * g, a = t * this.sin * v, this.findOne(".top-left").x(b.x - e), this.findOne(".top-left").y(b.y - a);
        }
      } else if (this._movingAnchorName === "top-center")
        this.findOne(".top-left").y(i.y());
      else if (this._movingAnchorName === "top-right") {
        if (d) {
          var b = w ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".bottom-left").x(),
            y: this.findOne(".bottom-left").y()
          };
          t = Math.sqrt(Math.pow(i.x() - b.x, 2) + Math.pow(b.y - i.y(), 2));
          var g = this.findOne(".top-right").x() < b.x ? -1 : 1, v = this.findOne(".top-right").y() > b.y ? -1 : 1;
          e = t * this.cos * g, a = t * this.sin * v, this.findOne(".top-right").x(b.x + e), this.findOne(".top-right").y(b.y - a);
        }
        var m = i.position();
        this.findOne(".top-left").y(m.y), this.findOne(".bottom-right").x(m.x);
      } else if (this._movingAnchorName === "middle-left")
        this.findOne(".top-left").x(i.x());
      else if (this._movingAnchorName === "middle-right")
        this.findOne(".bottom-right").x(i.x());
      else if (this._movingAnchorName === "bottom-left") {
        if (d) {
          var b = w ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-right").x(),
            y: this.findOne(".top-right").y()
          };
          t = Math.sqrt(Math.pow(b.x - i.x(), 2) + Math.pow(i.y() - b.y, 2));
          var g = b.x < i.x() ? -1 : 1, v = i.y() < b.y ? -1 : 1;
          e = t * this.cos * g, a = t * this.sin * v, i.x(b.x - e), i.y(b.y + a);
        }
        m = i.position(), this.findOne(".top-left").x(m.x), this.findOne(".bottom-right").y(m.y);
      } else if (this._movingAnchorName === "bottom-center")
        this.findOne(".bottom-right").y(i.y());
      else if (this._movingAnchorName === "bottom-right") {
        if (d) {
          var b = w ? {
            x: this.width() / 2,
            y: this.height() / 2
          } : {
            x: this.findOne(".top-left").x(),
            y: this.findOne(".top-left").y()
          };
          t = Math.sqrt(Math.pow(i.x() - b.x, 2) + Math.pow(i.y() - b.y, 2));
          var g = this.findOne(".bottom-right").x() < b.x ? -1 : 1, v = this.findOne(".bottom-right").y() < b.y ? -1 : 1;
          e = t * this.cos * g, a = t * this.sin * v, this.findOne(".bottom-right").x(b.x + e), this.findOne(".bottom-right").y(b.y + a);
        }
      } else
        console.error(new Error("Wrong position argument of selection resizer: " + this._movingAnchorName));
      var w = this.centeredScaling() || r.altKey;
      if (w) {
        var k = this.findOne(".top-left"), C = this.findOne(".bottom-right"), y = k.x(), B = k.y(), F = this.getWidth() - C.x(), G = this.getHeight() - C.y();
        C.move({
          x: -y,
          y: -B
        }), k.move({
          x: F,
          y: G
        });
      }
      var V = this.findOne(".top-left").getAbsolutePosition();
      e = V.x, a = V.y;
      var M = this.findOne(".bottom-right").x() - this.findOne(".top-left").x(), T = this.findOne(".bottom-right").y() - this.findOne(".top-left").y();
      this._fitNodesInto({
        x: e,
        y: a,
        width: M,
        height: T,
        rotation: F0.getAngle(this.rotation())
      }, r);
    }
  }
  _handleMouseUp(r) {
    this._removeEvents(r);
  }
  getAbsoluteTransform() {
    return this.getTransform();
  }
  _removeEvents(r) {
    if (this._transforming) {
      this._transforming = !1, typeof window < "u" && (window.removeEventListener("mousemove", this._handleMouseMove), window.removeEventListener("touchmove", this._handleMouseMove), window.removeEventListener("mouseup", this._handleMouseUp, !0), window.removeEventListener("touchend", this._handleMouseUp, !0));
      var e = this.getNode();
      this._fire("transformend", { evt: r, target: e }), e && this._nodes.forEach((a) => {
        a._fire("transformend", { evt: r, target: a });
      }), this._movingAnchorName = null;
    }
  }
  _fitNodesInto(r, e) {
    var a = this._getNodeRect();
    const t = 1;
    if (K._inRange(r.width, -this.padding() * 2 - t, t)) {
      this.update();
      return;
    }
    if (K._inRange(r.height, -this.padding() * 2 - t, t)) {
      this.update();
      return;
    }
    const i = this.flipEnabled();
    var A = new Ie();
    if (A.rotate(F0.getAngle(this.rotation())), this._movingAnchorName && r.width < 0 && this._movingAnchorName.indexOf("left") >= 0) {
      const c = A.point({
        x: -this.padding() * 2,
        y: 0
      });
      if (r.x += c.x, r.y += c.y, r.width += this.padding() * 2, this._movingAnchorName = this._movingAnchorName.replace("left", "right"), this._anchorDragOffset.x -= c.x, this._anchorDragOffset.y -= c.y, !i) {
        this.update();
        return;
      }
    } else if (this._movingAnchorName && r.width < 0 && this._movingAnchorName.indexOf("right") >= 0) {
      const c = A.point({
        x: this.padding() * 2,
        y: 0
      });
      if (this._movingAnchorName = this._movingAnchorName.replace("right", "left"), this._anchorDragOffset.x -= c.x, this._anchorDragOffset.y -= c.y, r.width += this.padding() * 2, !i) {
        this.update();
        return;
      }
    }
    if (this._movingAnchorName && r.height < 0 && this._movingAnchorName.indexOf("top") >= 0) {
      const c = A.point({
        x: 0,
        y: -this.padding() * 2
      });
      if (r.x += c.x, r.y += c.y, this._movingAnchorName = this._movingAnchorName.replace("top", "bottom"), this._anchorDragOffset.x -= c.x, this._anchorDragOffset.y -= c.y, r.height += this.padding() * 2, !i) {
        this.update();
        return;
      }
    } else if (this._movingAnchorName && r.height < 0 && this._movingAnchorName.indexOf("bottom") >= 0) {
      const c = A.point({
        x: 0,
        y: this.padding() * 2
      });
      if (this._movingAnchorName = this._movingAnchorName.replace("bottom", "top"), this._anchorDragOffset.x -= c.x, this._anchorDragOffset.y -= c.y, r.height += this.padding() * 2, !i) {
        this.update();
        return;
      }
    }
    if (this.boundBoxFunc()) {
      const c = this.boundBoxFunc()(a, r);
      c ? r = c : K.warn("boundBoxFunc returned falsy. You should return new bound rect from it!");
    }
    const n = 1e7, o = new Ie();
    o.translate(a.x, a.y), o.rotate(a.rotation), o.scale(a.width / n, a.height / n);
    const f = new Ie();
    f.translate(r.x, r.y), f.rotate(r.rotation), f.scale(r.width / n, r.height / n);
    const l = f.multiply(o.invert());
    this._nodes.forEach((c) => {
      var h;
      const d = c.getParent().getAbsoluteTransform(), b = c.getTransform().copy();
      b.translate(c.offsetX(), c.offsetY());
      const g = new Ie();
      g.multiply(d.copy().invert()).multiply(l).multiply(d).multiply(b);
      const v = g.decompose();
      c.setAttrs(v), this._fire("transform", { evt: e, target: c }), c._fire("transform", { evt: e, target: c }), (h = c.getLayer()) === null || h === void 0 || h.batchDraw();
    }), this.rotation(K._getRotation(r.rotation)), this._resetTransformCache(), this.update(), this.getLayer().batchDraw();
  }
  forceUpdate() {
    this._resetTransformCache(), this.update();
  }
  _batchChangeChild(r, e) {
    this.findOne(r).setAttrs(e);
  }
  update() {
    var r, e = this._getNodeRect();
    this.rotation(K._getRotation(e.rotation));
    var a = e.width, t = e.height, i = this.enabledAnchors(), A = this.resizeEnabled(), n = this.padding(), o = this.anchorSize();
    this.find("._anchor").forEach((f) => {
      f.setAttrs({
        width: o,
        height: o,
        offsetX: o / 2,
        offsetY: o / 2,
        stroke: this.anchorStroke(),
        strokeWidth: this.anchorStrokeWidth(),
        fill: this.anchorFill(),
        cornerRadius: this.anchorCornerRadius()
      });
    }), this._batchChangeChild(".top-left", {
      x: 0,
      y: 0,
      offsetX: o / 2 + n,
      offsetY: o / 2 + n,
      visible: A && i.indexOf("top-left") >= 0
    }), this._batchChangeChild(".top-center", {
      x: a / 2,
      y: 0,
      offsetY: o / 2 + n,
      visible: A && i.indexOf("top-center") >= 0
    }), this._batchChangeChild(".top-right", {
      x: a,
      y: 0,
      offsetX: o / 2 - n,
      offsetY: o / 2 + n,
      visible: A && i.indexOf("top-right") >= 0
    }), this._batchChangeChild(".middle-left", {
      x: 0,
      y: t / 2,
      offsetX: o / 2 + n,
      visible: A && i.indexOf("middle-left") >= 0
    }), this._batchChangeChild(".middle-right", {
      x: a,
      y: t / 2,
      offsetX: o / 2 - n,
      visible: A && i.indexOf("middle-right") >= 0
    }), this._batchChangeChild(".bottom-left", {
      x: 0,
      y: t,
      offsetX: o / 2 + n,
      offsetY: o / 2 - n,
      visible: A && i.indexOf("bottom-left") >= 0
    }), this._batchChangeChild(".bottom-center", {
      x: a / 2,
      y: t,
      offsetY: o / 2 - n,
      visible: A && i.indexOf("bottom-center") >= 0
    }), this._batchChangeChild(".bottom-right", {
      x: a,
      y: t,
      offsetX: o / 2 - n,
      offsetY: o / 2 - n,
      visible: A && i.indexOf("bottom-right") >= 0
    }), this._batchChangeChild(".rotater", {
      x: a / 2,
      y: -this.rotateAnchorOffset() * K._sign(t) - n,
      visible: this.rotateEnabled()
    }), this._batchChangeChild(".back", {
      width: a,
      height: t,
      visible: this.borderEnabled(),
      stroke: this.borderStroke(),
      strokeWidth: this.borderStrokeWidth(),
      dash: this.borderDash(),
      x: 0,
      y: 0
    }), (r = this.getLayer()) === null || r === void 0 || r.batchDraw();
  }
  isTransforming() {
    return this._transforming;
  }
  stopTransform() {
    if (this._transforming) {
      this._removeEvents();
      var r = this.findOne("." + this._movingAnchorName);
      r && r.stopDrag();
    }
  }
  destroy() {
    return this.getStage() && this._cursorChange && this.getStage().content && (this.getStage().content.style.cursor = ""), fn.prototype.destroy.call(this), this.detach(), this._removeEvents(), this;
  }
  toObject() {
    return w0.prototype.toObject.call(this);
  }
}
function _6(s) {
  return s instanceof Array || K.warn("enabledAnchors value should be an array"), s instanceof Array && s.forEach(function(r) {
    w1.indexOf(r) === -1 && K.warn("Unknown anchor name: " + r + ". Available names are: " + w1.join(", "));
  }), s || [];
}
or.prototype.className = "Transformer";
mr(or);
P.addGetterSetter(or, "enabledAnchors", w1, _6);
P.addGetterSetter(or, "flipEnabled", !0, oa());
P.addGetterSetter(or, "resizeEnabled", !0);
P.addGetterSetter(or, "anchorSize", 10, v0());
P.addGetterSetter(or, "rotateEnabled", !0);
P.addGetterSetter(or, "rotationSnaps", []);
P.addGetterSetter(or, "rotateAnchorOffset", 50, v0());
P.addGetterSetter(or, "rotationSnapTolerance", 5, v0());
P.addGetterSetter(or, "borderEnabled", !0);
P.addGetterSetter(or, "anchorStroke", "rgb(0, 161, 255)");
P.addGetterSetter(or, "anchorStrokeWidth", 1, v0());
P.addGetterSetter(or, "anchorFill", "white");
P.addGetterSetter(or, "anchorCornerRadius", 0, v0());
P.addGetterSetter(or, "borderStroke", "rgb(0, 161, 255)");
P.addGetterSetter(or, "borderStrokeWidth", 1, v0());
P.addGetterSetter(or, "borderDash");
P.addGetterSetter(or, "keepRatio", !0);
P.addGetterSetter(or, "centeredScaling", !1);
P.addGetterSetter(or, "ignoreStroke", !1);
P.addGetterSetter(or, "padding", 0, v0());
P.addGetterSetter(or, "node");
P.addGetterSetter(or, "nodes");
P.addGetterSetter(or, "boundBoxFunc");
P.addGetterSetter(or, "shouldOverdrawWholeArea", !1);
P.addGetterSetter(or, "useSingleNodeRotation", !0);
P.backCompat(or, {
  lineEnabled: "borderEnabled",
  rotateHandlerOffset: "rotateAnchorOffset",
  enabledHandlers: "enabledAnchors"
});
class pt extends b0 {
  _sceneFunc(r) {
    r.beginPath(), r.arc(0, 0, this.radius(), 0, F0.getAngle(this.angle()), this.clockwise()), r.lineTo(0, 0), r.closePath(), r.fillStrokeShape(this);
  }
  getWidth() {
    return this.radius() * 2;
  }
  getHeight() {
    return this.radius() * 2;
  }
  setWidth(r) {
    this.radius(r / 2);
  }
  setHeight(r) {
    this.radius(r / 2);
  }
}
pt.prototype.className = "Wedge";
pt.prototype._centroid = !0;
pt.prototype._attrsAffectingSize = ["radius"];
mr(pt);
P.addGetterSetter(pt, "radius", 0, v0());
P.addGetterSetter(pt, "angle", 0, v0());
P.addGetterSetter(pt, "clockwise", !1);
P.backCompat(pt, {
  angleDeg: "angle",
  getAngleDeg: "getAngle",
  setAngleDeg: "setAngle"
});
function s4() {
  this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null;
}
var E6 = [
  512,
  512,
  456,
  512,
  328,
  456,
  335,
  512,
  405,
  328,
  271,
  456,
  388,
  335,
  292,
  512,
  454,
  405,
  364,
  328,
  298,
  271,
  496,
  456,
  420,
  388,
  360,
  335,
  312,
  292,
  273,
  512,
  482,
  454,
  428,
  405,
  383,
  364,
  345,
  328,
  312,
  298,
  284,
  271,
  259,
  496,
  475,
  456,
  437,
  420,
  404,
  388,
  374,
  360,
  347,
  335,
  323,
  312,
  302,
  292,
  282,
  273,
  265,
  512,
  497,
  482,
  468,
  454,
  441,
  428,
  417,
  405,
  394,
  383,
  373,
  364,
  354,
  345,
  337,
  328,
  320,
  312,
  305,
  298,
  291,
  284,
  278,
  271,
  265,
  259,
  507,
  496,
  485,
  475,
  465,
  456,
  446,
  437,
  428,
  420,
  412,
  404,
  396,
  388,
  381,
  374,
  367,
  360,
  354,
  347,
  341,
  335,
  329,
  323,
  318,
  312,
  307,
  302,
  297,
  292,
  287,
  282,
  278,
  273,
  269,
  265,
  261,
  512,
  505,
  497,
  489,
  482,
  475,
  468,
  461,
  454,
  447,
  441,
  435,
  428,
  422,
  417,
  411,
  405,
  399,
  394,
  389,
  383,
  378,
  373,
  368,
  364,
  359,
  354,
  350,
  345,
  341,
  337,
  332,
  328,
  324,
  320,
  316,
  312,
  309,
  305,
  301,
  298,
  294,
  291,
  287,
  284,
  281,
  278,
  274,
  271,
  268,
  265,
  262,
  259,
  257,
  507,
  501,
  496,
  491,
  485,
  480,
  475,
  470,
  465,
  460,
  456,
  451,
  446,
  442,
  437,
  433,
  428,
  424,
  420,
  416,
  412,
  408,
  404,
  400,
  396,
  392,
  388,
  385,
  381,
  377,
  374,
  370,
  367,
  363,
  360,
  357,
  354,
  350,
  347,
  344,
  341,
  338,
  335,
  332,
  329,
  326,
  323,
  320,
  318,
  315,
  312,
  310,
  307,
  304,
  302,
  299,
  297,
  294,
  292,
  289,
  287,
  285,
  282,
  280,
  278,
  275,
  273,
  271,
  269,
  267,
  265,
  263,
  261,
  259
], C6 = [
  9,
  11,
  12,
  13,
  13,
  14,
  14,
  15,
  15,
  15,
  15,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  21,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  22,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  23,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24,
  24
];
function B6(s, r) {
  var e = s.data, a = s.width, t = s.height, i, A, n, o, f, l, c, h, d, b, g, v, m, w, k, C, y, B, F, G, V, M, T, Q, L = r + r + 1, J = a - 1, r0 = t - 1, e0 = r + 1, q = e0 * (e0 + 1) / 2, _ = new s4(), x = null, N = _, D = null, Y = null, z = E6[r], j = C6[r];
  for (n = 1; n < L; n++)
    N = N.next = new s4(), n === e0 && (x = N);
  for (N.next = _, c = l = 0, A = 0; A < t; A++) {
    for (C = y = B = F = h = d = b = g = 0, v = e0 * (G = e[l]), m = e0 * (V = e[l + 1]), w = e0 * (M = e[l + 2]), k = e0 * (T = e[l + 3]), h += q * G, d += q * V, b += q * M, g += q * T, N = _, n = 0; n < e0; n++)
      N.r = G, N.g = V, N.b = M, N.a = T, N = N.next;
    for (n = 1; n < e0; n++)
      o = l + ((J < n ? J : n) << 2), h += (N.r = G = e[o]) * (Q = e0 - n), d += (N.g = V = e[o + 1]) * Q, b += (N.b = M = e[o + 2]) * Q, g += (N.a = T = e[o + 3]) * Q, C += G, y += V, B += M, F += T, N = N.next;
    for (D = _, Y = x, i = 0; i < a; i++)
      e[l + 3] = T = g * z >> j, T !== 0 ? (T = 255 / T, e[l] = (h * z >> j) * T, e[l + 1] = (d * z >> j) * T, e[l + 2] = (b * z >> j) * T) : e[l] = e[l + 1] = e[l + 2] = 0, h -= v, d -= m, b -= w, g -= k, v -= D.r, m -= D.g, w -= D.b, k -= D.a, o = c + ((o = i + r + 1) < J ? o : J) << 2, C += D.r = e[o], y += D.g = e[o + 1], B += D.b = e[o + 2], F += D.a = e[o + 3], h += C, d += y, b += B, g += F, D = D.next, v += G = Y.r, m += V = Y.g, w += M = Y.b, k += T = Y.a, C -= G, y -= V, B -= M, F -= T, Y = Y.next, l += 4;
    c += a;
  }
  for (i = 0; i < a; i++) {
    for (y = B = F = C = d = b = g = h = 0, l = i << 2, v = e0 * (G = e[l]), m = e0 * (V = e[l + 1]), w = e0 * (M = e[l + 2]), k = e0 * (T = e[l + 3]), h += q * G, d += q * V, b += q * M, g += q * T, N = _, n = 0; n < e0; n++)
      N.r = G, N.g = V, N.b = M, N.a = T, N = N.next;
    for (f = a, n = 1; n <= r; n++)
      l = f + i << 2, h += (N.r = G = e[l]) * (Q = e0 - n), d += (N.g = V = e[l + 1]) * Q, b += (N.b = M = e[l + 2]) * Q, g += (N.a = T = e[l + 3]) * Q, C += G, y += V, B += M, F += T, N = N.next, n < r0 && (f += a);
    for (l = i, D = _, Y = x, A = 0; A < t; A++)
      o = l << 2, e[o + 3] = T = g * z >> j, T > 0 ? (T = 255 / T, e[o] = (h * z >> j) * T, e[o + 1] = (d * z >> j) * T, e[o + 2] = (b * z >> j) * T) : e[o] = e[o + 1] = e[o + 2] = 0, h -= v, d -= m, b -= w, g -= k, v -= D.r, m -= D.g, w -= D.b, k -= D.a, o = i + ((o = A + e0) < r0 ? o : r0) * a << 2, h += C += D.r = e[o], d += y += D.g = e[o + 1], b += B += D.b = e[o + 2], g += F += D.a = e[o + 3], D = D.next, v += G = Y.r, m += V = Y.g, w += M = Y.b, k += T = Y.a, C -= G, y -= V, B -= M, F -= T, Y = Y.next, l += a;
  }
}
const Z6 = function(r) {
  var e = Math.round(this.blurRadius());
  e > 0 && B6(r, e);
};
P.addGetterSetter(w0, "blurRadius", 0, v0(), P.afterSetFilter);
const R6 = function(s) {
  var r = this.brightness() * 255, e = s.data, a = e.length, t;
  for (t = 0; t < a; t += 4)
    e[t] += r, e[t + 1] += r, e[t + 2] += r;
};
P.addGetterSetter(w0, "brightness", 0, v0(), P.afterSetFilter);
const I6 = function(s) {
  var r = Math.pow((this.contrast() + 100) / 100, 2), e = s.data, a = e.length, t = 150, i = 150, A = 150, n;
  for (n = 0; n < a; n += 4)
    t = e[n], i = e[n + 1], A = e[n + 2], t /= 255, t -= 0.5, t *= r, t += 0.5, t *= 255, i /= 255, i -= 0.5, i *= r, i += 0.5, i *= 255, A /= 255, A -= 0.5, A *= r, A += 0.5, A *= 255, t = t < 0 ? 0 : t > 255 ? 255 : t, i = i < 0 ? 0 : i > 255 ? 255 : i, A = A < 0 ? 0 : A > 255 ? 255 : A, e[n] = t, e[n + 1] = i, e[n + 2] = A;
};
P.addGetterSetter(w0, "contrast", 0, v0(), P.afterSetFilter);
const S6 = function(s) {
  var r = this.embossStrength() * 10, e = this.embossWhiteLevel() * 255, a = this.embossDirection(), t = this.embossBlend(), i = 0, A = 0, n = s.data, o = s.width, f = s.height, l = o * 4, c = f;
  switch (a) {
    case "top-left":
      i = -1, A = -1;
      break;
    case "top":
      i = -1, A = 0;
      break;
    case "top-right":
      i = -1, A = 1;
      break;
    case "right":
      i = 0, A = 1;
      break;
    case "bottom-right":
      i = 1, A = 1;
      break;
    case "bottom":
      i = 1, A = 0;
      break;
    case "bottom-left":
      i = 1, A = -1;
      break;
    case "left":
      i = 0, A = -1;
      break;
    default:
      K.error("Unknown emboss direction: " + a);
  }
  do {
    var h = (c - 1) * l, d = i;
    c + d < 1 && (d = 0), c + d > f && (d = 0);
    var b = (c - 1 + d) * o * 4, g = o;
    do {
      var v = h + (g - 1) * 4, m = A;
      g + m < 1 && (m = 0), g + m > o && (m = 0);
      var w = b + (g - 1 + m) * 4, k = n[v] - n[w], C = n[v + 1] - n[w + 1], y = n[v + 2] - n[w + 2], B = k, F = B > 0 ? B : -B, G = C > 0 ? C : -C, V = y > 0 ? y : -y;
      if (G > F && (B = C), V > F && (B = y), B *= r, t) {
        var M = n[v] + B, T = n[v + 1] + B, Q = n[v + 2] + B;
        n[v] = M > 255 ? 255 : M < 0 ? 0 : M, n[v + 1] = T > 255 ? 255 : T < 0 ? 0 : T, n[v + 2] = Q > 255 ? 255 : Q < 0 ? 0 : Q;
      } else {
        var L = e - B;
        L < 0 ? L = 0 : L > 255 && (L = 255), n[v] = n[v + 1] = n[v + 2] = L;
      }
    } while (--g);
  } while (--c);
};
P.addGetterSetter(w0, "embossStrength", 0.5, v0(), P.afterSetFilter);
P.addGetterSetter(w0, "embossWhiteLevel", 0.5, v0(), P.afterSetFilter);
P.addGetterSetter(w0, "embossDirection", "top-left", null, P.afterSetFilter);
P.addGetterSetter(w0, "embossBlend", !1, null, P.afterSetFilter);
function Fu(s, r, e, a, t) {
  var i = e - r, A = t - a, n;
  return i === 0 ? a + A / 2 : A === 0 ? a : (n = (s - r) / i, n = A * n + a, n);
}
const F6 = function(s) {
  var r = s.data, e = r.length, a = r[0], t = a, i, A = r[1], n = A, o, f = r[2], l = f, c, h, d = this.enhance();
  if (d !== 0) {
    for (h = 0; h < e; h += 4)
      i = r[h + 0], i < a ? a = i : i > t && (t = i), o = r[h + 1], o < A ? A = o : o > n && (n = o), c = r[h + 2], c < f ? f = c : c > l && (l = c);
    t === a && (t = 255, a = 0), n === A && (n = 255, A = 0), l === f && (l = 255, f = 0);
    var b, g, v, m, w, k, C, y, B;
    for (d > 0 ? (g = t + d * (255 - t), v = a - d * (a - 0), w = n + d * (255 - n), k = A - d * (A - 0), y = l + d * (255 - l), B = f - d * (f - 0)) : (b = (t + a) * 0.5, g = t + d * (t - b), v = a + d * (a - b), m = (n + A) * 0.5, w = n + d * (n - m), k = A + d * (A - m), C = (l + f) * 0.5, y = l + d * (l - C), B = f + d * (f - C)), h = 0; h < e; h += 4)
      r[h + 0] = Fu(r[h + 0], a, t, v, g), r[h + 1] = Fu(r[h + 1], A, n, k, w), r[h + 2] = Fu(r[h + 2], f, l, B, y);
  }
};
P.addGetterSetter(w0, "enhance", 0, v0(), P.afterSetFilter);
const W6 = function(s) {
  var r = s.data, e = r.length, a, t;
  for (a = 0; a < e; a += 4)
    t = 0.34 * r[a] + 0.5 * r[a + 1] + 0.16 * r[a + 2], r[a] = t, r[a + 1] = t, r[a + 2] = t;
};
P.addGetterSetter(w0, "hue", 0, v0(), P.afterSetFilter);
P.addGetterSetter(w0, "saturation", 0, v0(), P.afterSetFilter);
P.addGetterSetter(w0, "luminance", 0, v0(), P.afterSetFilter);
const x6 = function(s) {
  var r = s.data, e = r.length, a = 1, t = Math.pow(2, this.saturation()), i = Math.abs(this.hue() + 360) % 360, A = this.luminance() * 127, n, o = a * t * Math.cos(i * Math.PI / 180), f = a * t * Math.sin(i * Math.PI / 180), l = 0.299 * a + 0.701 * o + 0.167 * f, c = 0.587 * a - 0.587 * o + 0.33 * f, h = 0.114 * a - 0.114 * o - 0.497 * f, d = 0.299 * a - 0.299 * o - 0.328 * f, b = 0.587 * a + 0.413 * o + 0.035 * f, g = 0.114 * a - 0.114 * o + 0.293 * f, v = 0.299 * a - 0.3 * o + 1.25 * f, m = 0.587 * a - 0.586 * o - 1.05 * f, w = 0.114 * a + 0.886 * o - 0.2 * f, k, C, y, B;
  for (n = 0; n < e; n += 4)
    k = r[n + 0], C = r[n + 1], y = r[n + 2], B = r[n + 3], r[n + 0] = l * k + c * C + h * y + A, r[n + 1] = d * k + b * C + g * y + A, r[n + 2] = v * k + m * C + w * y + A, r[n + 3] = B;
}, G6 = function(s) {
  var r = s.data, e = r.length, a = Math.pow(2, this.value()), t = Math.pow(2, this.saturation()), i = Math.abs(this.hue() + 360) % 360, A, n = a * t * Math.cos(i * Math.PI / 180), o = a * t * Math.sin(i * Math.PI / 180), f = 0.299 * a + 0.701 * n + 0.167 * o, l = 0.587 * a - 0.587 * n + 0.33 * o, c = 0.114 * a - 0.114 * n - 0.497 * o, h = 0.299 * a - 0.299 * n - 0.328 * o, d = 0.587 * a + 0.413 * n + 0.035 * o, b = 0.114 * a - 0.114 * n + 0.293 * o, g = 0.299 * a - 0.3 * n + 1.25 * o, v = 0.587 * a - 0.586 * n - 1.05 * o, m = 0.114 * a + 0.886 * n - 0.2 * o, w, k, C, y;
  for (A = 0; A < e; A += 4)
    w = r[A + 0], k = r[A + 1], C = r[A + 2], y = r[A + 3], r[A + 0] = f * w + l * k + c * C, r[A + 1] = h * w + d * k + b * C, r[A + 2] = g * w + v * k + m * C, r[A + 3] = y;
};
P.addGetterSetter(w0, "hue", 0, v0(), P.afterSetFilter);
P.addGetterSetter(w0, "saturation", 0, v0(), P.afterSetFilter);
P.addGetterSetter(w0, "value", 0, v0(), P.afterSetFilter);
const T6 = function(s) {
  var r = s.data, e = r.length, a;
  for (a = 0; a < e; a += 4)
    r[a] = 255 - r[a], r[a + 1] = 255 - r[a + 1], r[a + 2] = 255 - r[a + 2];
};
var X6 = function(s, r, e) {
  var a = s.data, t = r.data, i = s.width, A = s.height, n = e.polarCenterX || i / 2, o = e.polarCenterY || A / 2, f, l, c, h = 0, d = 0, b = 0, g = 0, v, m = Math.sqrt(n * n + o * o);
  l = i - n, c = A - o, v = Math.sqrt(l * l + c * c), m = v > m ? v : m;
  var w = A, k = i, C, y, B = 360 / k * Math.PI / 180, F, G;
  for (y = 0; y < k; y += 1)
    for (F = Math.sin(y * B), G = Math.cos(y * B), C = 0; C < w; C += 1)
      l = Math.floor(n + m * C / w * G), c = Math.floor(o + m * C / w * F), f = (c * i + l) * 4, h = a[f + 0], d = a[f + 1], b = a[f + 2], g = a[f + 3], f = (y + C * i) * 4, t[f + 0] = h, t[f + 1] = d, t[f + 2] = b, t[f + 3] = g;
}, M6 = function(s, r, e) {
  var a = s.data, t = r.data, i = s.width, A = s.height, n = e.polarCenterX || i / 2, o = e.polarCenterY || A / 2, f, l, c, h, d, b = 0, g = 0, v = 0, m = 0, w, k = Math.sqrt(n * n + o * o);
  l = i - n, c = A - o, w = Math.sqrt(l * l + c * c), k = w > k ? w : k;
  var C = A, y = i, B, F, G = e.polarRotation || 0, V, M;
  for (l = 0; l < i; l += 1)
    for (c = 0; c < A; c += 1)
      h = l - n, d = c - o, B = Math.sqrt(h * h + d * d) * C / k, F = (Math.atan2(d, h) * 180 / Math.PI + 360 + G) % 360, F = F * y / 360, V = Math.floor(F), M = Math.floor(B), f = (M * i + V) * 4, b = a[f + 0], g = a[f + 1], v = a[f + 2], m = a[f + 3], f = (c * i + l) * 4, t[f + 0] = b, t[f + 1] = g, t[f + 2] = v, t[f + 3] = m;
};
const D6 = function(s) {
  var r = s.width, e = s.height, a, t, i, A, n, o, f, l, c, h, d = Math.round(this.kaleidoscopePower()), b = Math.round(this.kaleidoscopeAngle()), g = Math.floor(r * (b % 360) / 360);
  if (!(d < 1)) {
    var v = K.createCanvasElement();
    v.width = r, v.height = e;
    var m = v.getContext("2d").getImageData(0, 0, r, e);
    X6(s, m, {
      polarCenterX: r / 2,
      polarCenterY: e / 2
    });
    for (var w = r / Math.pow(2, d); w <= 8; )
      w = w * 2, d -= 1;
    w = Math.ceil(w);
    var k = w, C = 0, y = k, B = 1;
    for (g + w > r && (C = k, y = 0, B = -1), t = 0; t < e; t += 1)
      for (a = C; a !== y; a += B)
        i = Math.round(a + g) % r, c = (r * t + i) * 4, n = m.data[c + 0], o = m.data[c + 1], f = m.data[c + 2], l = m.data[c + 3], h = (r * t + a) * 4, m.data[h + 0] = n, m.data[h + 1] = o, m.data[h + 2] = f, m.data[h + 3] = l;
    for (t = 0; t < e; t += 1)
      for (k = Math.floor(w), A = 0; A < d; A += 1) {
        for (a = 0; a < k + 1; a += 1)
          c = (r * t + a) * 4, n = m.data[c + 0], o = m.data[c + 1], f = m.data[c + 2], l = m.data[c + 3], h = (r * t + k * 2 - a - 1) * 4, m.data[h + 0] = n, m.data[h + 1] = o, m.data[h + 2] = f, m.data[h + 3] = l;
        k *= 2;
      }
    M6(m, s, { polarRotation: 0 });
  }
};
P.addGetterSetter(w0, "kaleidoscopePower", 2, v0(), P.afterSetFilter);
P.addGetterSetter(w0, "kaleidoscopeAngle", 0, v0(), P.afterSetFilter);
function xf(s, r, e) {
  var a = (e * s.width + r) * 4, t = [];
  return t.push(s.data[a++], s.data[a++], s.data[a++], s.data[a++]), t;
}
function pn(s, r) {
  return Math.sqrt(Math.pow(s[0] - r[0], 2) + Math.pow(s[1] - r[1], 2) + Math.pow(s[2] - r[2], 2));
}
function N6(s) {
  for (var r = [0, 0, 0], e = 0; e < s.length; e++)
    r[0] += s[e][0], r[1] += s[e][1], r[2] += s[e][2];
  return r[0] /= s.length, r[1] /= s.length, r[2] /= s.length, r;
}
function V6(s, r) {
  var e = xf(s, 0, 0), a = xf(s, s.width - 1, 0), t = xf(s, 0, s.height - 1), i = xf(s, s.width - 1, s.height - 1), A = r || 10;
  if (pn(e, a) < A && pn(a, i) < A && pn(i, t) < A && pn(t, e) < A) {
    for (var n = N6([a, e, i, t]), o = [], f = 0; f < s.width * s.height; f++) {
      var l = pn(n, [
        s.data[f * 4],
        s.data[f * 4 + 1],
        s.data[f * 4 + 2]
      ]);
      o[f] = l < A ? 0 : 255;
    }
    return o;
  }
}
function P6(s, r) {
  for (var e = 0; e < s.width * s.height; e++)
    s.data[4 * e + 3] = r[e];
}
function O6(s, r, e) {
  for (var a = [1, 1, 1, 1, 0, 1, 1, 1, 1], t = Math.round(Math.sqrt(a.length)), i = Math.floor(t / 2), A = [], n = 0; n < e; n++)
    for (var o = 0; o < r; o++) {
      for (var f = n * r + o, l = 0, c = 0; c < t; c++)
        for (var h = 0; h < t; h++) {
          var d = n + c - i, b = o + h - i;
          if (d >= 0 && d < e && b >= 0 && b < r) {
            var g = d * r + b, v = a[c * t + h];
            l += s[g] * v;
          }
        }
      A[f] = l === 255 * 8 ? 255 : 0;
    }
  return A;
}
function L6(s, r, e) {
  for (var a = [1, 1, 1, 1, 1, 1, 1, 1, 1], t = Math.round(Math.sqrt(a.length)), i = Math.floor(t / 2), A = [], n = 0; n < e; n++)
    for (var o = 0; o < r; o++) {
      for (var f = n * r + o, l = 0, c = 0; c < t; c++)
        for (var h = 0; h < t; h++) {
          var d = n + c - i, b = o + h - i;
          if (d >= 0 && d < e && b >= 0 && b < r) {
            var g = d * r + b, v = a[c * t + h];
            l += s[g] * v;
          }
        }
      A[f] = l >= 255 * 4 ? 255 : 0;
    }
  return A;
}
function Y6(s, r, e) {
  for (var a = [0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111, 0.1111111111111111], t = Math.round(Math.sqrt(a.length)), i = Math.floor(t / 2), A = [], n = 0; n < e; n++)
    for (var o = 0; o < r; o++) {
      for (var f = n * r + o, l = 0, c = 0; c < t; c++)
        for (var h = 0; h < t; h++) {
          var d = n + c - i, b = o + h - i;
          if (d >= 0 && d < e && b >= 0 && b < r) {
            var g = d * r + b, v = a[c * t + h];
            l += s[g] * v;
          }
        }
      A[f] = l;
    }
  return A;
}
const H6 = function(s) {
  var r = this.threshold(), e = V6(s, r);
  return e && (e = O6(e, s.width, s.height), e = L6(e, s.width, s.height), e = Y6(e, s.width, s.height), P6(s, e)), s;
};
P.addGetterSetter(w0, "threshold", 0, v0(), P.afterSetFilter);
const j6 = function(s) {
  var r = this.noise() * 255, e = s.data, a = e.length, t = r / 2, i;
  for (i = 0; i < a; i += 4)
    e[i + 0] += t - 2 * t * Math.random(), e[i + 1] += t - 2 * t * Math.random(), e[i + 2] += t - 2 * t * Math.random();
};
P.addGetterSetter(w0, "noise", 0.2, v0(), P.afterSetFilter);
const U6 = function(s) {
  var r = Math.ceil(this.pixelSize()), e = s.width, a = s.height, t, i, A, n, o, f, l, c = Math.ceil(e / r), h = Math.ceil(a / r), d, b, g, v, m, w, k, C = s.data;
  if (r <= 0) {
    K.error("pixelSize value can not be <= 0");
    return;
  }
  for (m = 0; m < c; m += 1)
    for (w = 0; w < h; w += 1) {
      for (n = 0, o = 0, f = 0, l = 0, d = m * r, b = d + r, g = w * r, v = g + r, k = 0, t = d; t < b; t += 1)
        if (!(t >= e))
          for (i = g; i < v; i += 1)
            i >= a || (A = (e * i + t) * 4, n += C[A + 0], o += C[A + 1], f += C[A + 2], l += C[A + 3], k += 1);
      for (n = n / k, o = o / k, f = f / k, l = l / k, t = d; t < b; t += 1)
        if (!(t >= e))
          for (i = g; i < v; i += 1)
            i >= a || (A = (e * i + t) * 4, C[A + 0] = n, C[A + 1] = o, C[A + 2] = f, C[A + 3] = l);
    }
};
P.addGetterSetter(w0, "pixelSize", 8, v0(), P.afterSetFilter);
const z6 = function(s) {
  var r = Math.round(this.levels() * 254) + 1, e = s.data, a = e.length, t = 255 / r, i;
  for (i = 0; i < a; i += 1)
    e[i] = Math.floor(e[i] / t) * t;
};
P.addGetterSetter(w0, "levels", 0.5, v0(), P.afterSetFilter);
const Q6 = function(s) {
  var r = s.data, e = r.length, a = this.red(), t = this.green(), i = this.blue(), A, n;
  for (A = 0; A < e; A += 4)
    n = (0.34 * r[A] + 0.5 * r[A + 1] + 0.16 * r[A + 2]) / 255, r[A] = n * a, r[A + 1] = n * t, r[A + 2] = n * i, r[A + 3] = r[A + 3];
};
P.addGetterSetter(w0, "red", 0, function(s) {
  return this._filterUpToDate = !1, s > 255 ? 255 : s < 0 ? 0 : Math.round(s);
});
P.addGetterSetter(w0, "green", 0, function(s) {
  return this._filterUpToDate = !1, s > 255 ? 255 : s < 0 ? 0 : Math.round(s);
});
P.addGetterSetter(w0, "blue", 0, z4, P.afterSetFilter);
const J6 = function(s) {
  var r = s.data, e = r.length, a = this.red(), t = this.green(), i = this.blue(), A = this.alpha(), n, o;
  for (n = 0; n < e; n += 4)
    o = 1 - A, r[n] = a * A + r[n] * o, r[n + 1] = t * A + r[n + 1] * o, r[n + 2] = i * A + r[n + 2] * o;
};
P.addGetterSetter(w0, "red", 0, function(s) {
  return this._filterUpToDate = !1, s > 255 ? 255 : s < 0 ? 0 : Math.round(s);
});
P.addGetterSetter(w0, "green", 0, function(s) {
  return this._filterUpToDate = !1, s > 255 ? 255 : s < 0 ? 0 : Math.round(s);
});
P.addGetterSetter(w0, "blue", 0, z4, P.afterSetFilter);
P.addGetterSetter(w0, "alpha", 1, function(s) {
  return this._filterUpToDate = !1, s > 1 ? 1 : s < 0 ? 0 : s;
});
const K6 = function(s) {
  var r = s.data, e = r.length, a, t, i, A;
  for (a = 0; a < e; a += 4)
    t = r[a + 0], i = r[a + 1], A = r[a + 2], r[a + 0] = Math.min(255, t * 0.393 + i * 0.769 + A * 0.189), r[a + 1] = Math.min(255, t * 0.349 + i * 0.686 + A * 0.168), r[a + 2] = Math.min(255, t * 0.272 + i * 0.534 + A * 0.131);
}, q6 = function(s) {
  var r = s.data, e = s.width, a = s.height, t = e * 4, i = a;
  do {
    var A = (i - 1) * t, n = e;
    do {
      var o = A + (n - 1) * 4, f = r[o], l = r[o + 1], c = r[o + 2];
      f > 127 && (f = 255 - f), l > 127 && (l = 255 - l), c > 127 && (c = 255 - c), r[o] = f, r[o + 1] = l, r[o + 2] = c;
    } while (--n);
  } while (--i);
}, $6 = function(s) {
  var r = this.threshold() * 255, e = s.data, a = e.length, t;
  for (t = 0; t < a; t += 1)
    e[t] = e[t] < r ? 0 : 255;
};
P.addGetterSetter(w0, "threshold", 0.5, v0(), P.afterSetFilter);
const na = e4.Util._assign(e4, {
  Arc: bt,
  Arrow: k2,
  Circle: un,
  Ellipse: ri,
  Image: vt,
  Label: vh,
  Tag: w2,
  Line: gt,
  Path: cr,
  Rect: vf,
  RegularPolygon: y2,
  Ring: _2,
  Sprite: Ra,
  Star: ei,
  Text: pr,
  TextPath: Dr,
  Transformer: or,
  Wedge: pt,
  Filters: {
    Blur: Z6,
    Brighten: R6,
    Contrast: I6,
    Emboss: S6,
    Enhance: F6,
    Grayscale: W6,
    HSL: x6,
    HSV: G6,
    Invert: T6,
    Kaleidoscope: D6,
    Mask: H6,
    Noise: j6,
    Pixelate: U6,
    Posterize: z6,
    RGB: Q6,
    RGBA: J6,
    Sepia: K6,
    Solarize: q6,
    Threshold: $6
  }
});
var Gf, r5 = new Uint8Array(16);
function e5() {
  if (!Gf && (Gf = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Gf))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Gf(r5);
}
const a5 = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function t5(s) {
  return typeof s == "string" && a5.test(s);
}
var Lr = [];
for (var Wu = 0; Wu < 256; ++Wu)
  Lr.push((Wu + 256).toString(16).substr(1));
function i5(s) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, e = (Lr[s[r + 0]] + Lr[s[r + 1]] + Lr[s[r + 2]] + Lr[s[r + 3]] + "-" + Lr[s[r + 4]] + Lr[s[r + 5]] + "-" + Lr[s[r + 6]] + Lr[s[r + 7]] + "-" + Lr[s[r + 8]] + Lr[s[r + 9]] + "-" + Lr[s[r + 10]] + Lr[s[r + 11]] + Lr[s[r + 12]] + Lr[s[r + 13]] + Lr[s[r + 14]] + Lr[s[r + 15]]).toLowerCase();
  if (!t5(e))
    throw TypeError("Stringified UUID is invalid");
  return e;
}
function Bd(s, r, e) {
  s = s || {};
  var a = s.random || (s.rng || e5)();
  if (a[6] = a[6] & 15 | 64, a[8] = a[8] & 63 | 128, r) {
    e = e || 0;
    for (var t = 0; t < 16; ++t)
      r[e + t] = a[t];
    return r;
  }
  return i5(a);
}
const Zd = {
  height: 300,
  width: 300,
  display: "flex",
  backgroundColor: "#001429"
};
var E2 = /* @__PURE__ */ ((s) => (s.shapesLayer = "shapes-layer", s.shape = "shape", s))(E2 || {});
const Rd = "#FF0000", A5 = "rgba(0,0,255,0.5)", Id = 3 / 2, n5 = { x: 0.5, y: 0.5 }, o5 = 1.5 * 10 ** 6, s5 = 5.5, y1 = {
  image: null,
  shapes: [],
  orientation: 0
}, f5 = {
  enableSelection: !1,
  selectionRectConfig: {
    fill: A5
  },
  onMouseLeave: (s) => {
    const r = s.getLayer();
    s.setAttr("fill", "transparent"), r == null || r.batchDraw();
  },
  onMouseEnter: (s) => {
    const r = s.getAttr("stroke");
    s.setAttr("fill", `${r}40`), s.draw();
  },
  shapeConfig: {
    stroke: Rd,
    strokeWidth: 2,
    listening: !0
  },
  zoom: {
    modifier: 1.2,
    max: 10,
    defaultZoom: 1
  }
}, l5 = {
  shapeConfig: {
    stroke: Rd,
    strokeWidth: 1,
    listening: !1
  }
}, ge = (s, r = 0) => {
  const e = Math.pow(10, r), a = parseFloat((Math.abs(s) * e).toFixed(11));
  return Math.round(a) / e * Math.sign(s);
}, Sd = (s, r = [], e = !0, a, t, i, A, n) => {
  a && r.forEach((o) => {
    const f = new na.Line({
      id: o.id,
      name: E2.shape,
      points: h5(o.coordinates, a),
      closed: !0,
      ...(t == null ? void 0 : t.shapeConfig) || {},
      ...o.config,
      shape: o
    });
    s.add(f), e && u5(
      f,
      t,
      i,
      A,
      n
    );
  });
}, u5 = (s, r, e, a, t) => {
  const i = s.getStage(), A = s.getAttr("shape");
  s.on("mousedown", (n) => {
    var o;
    n.cancelBubble = !0, e == null || e(A), (o = r == null ? void 0 : r.onClick) == null || o.call(r, s);
  }), s.on("mouseleave", function(n) {
    var o;
    n.cancelBubble = !0, i.container().style.cursor = "inherit", (o = r == null ? void 0 : r.onMouseLeave) == null || o.call(r, s), t == null || t(A);
  }), s.on("mouseenter", function(n) {
    var o;
    n.cancelBubble = !0, (o = r == null ? void 0 : r.onMouseEnter) == null || o.call(r, s), i.container().style.cursor = "pointer", a == null || a(A);
  });
}, c5 = (s, r) => {
  const { width: e, height: a, scale: t } = r;
  return {
    x: ge(Math.min(s.x, 1) * e / t, 2),
    y: ge(Math.min(s.y, 1) * a / t, 2)
  };
}, h5 = (s, r) => s.reduce((e, a) => {
  const { x: t, y: i } = c5(
    { x: a[0], y: a[1] },
    r
  );
  return e = e.concat([t, i]), e;
}, []), d5 = (s, r) => {
  if (!s || !r)
    return;
  const { x: e, y: a } = s.getPointerPosition() || {
    x: 0,
    y: 0
  }, t = s.scaleX(), i = s.x(), A = s.y();
  return {
    x: ge(
      (e - i) * r.scale / (t * r.width),
      2
    ),
    y: ge(
      (a - A) * r.scale / (t * r.height),
      2
    )
  };
};
var Fd = { exports: {} };
(function(s, r) {
  (function(e, a, t, i) {
    function A() {
      return F.isValid();
    }
    function n() {
      return F.isValid();
    }
    function o() {
      var _ = { getUserMedia: !0 };
      return F.isValid(_);
    }
    function f(_) {
      var x = !1;
      if (y.isArray(_) && _.length) {
        if (y.each(_, function(N, D) {
          y.isSupported.videoCodecs[D] && (x = !0);
        }), !x)
          return !1;
      } else if (y.isString(_) && _.length && !y.isSupported.videoCodecs[_])
        return !1;
      return F.isValid({ getUserMedia: !0 });
    }
    function l() {
      function _(X, H, g0) {
        var i0, o0;
        for (G0 = X, R0 = H, _0 = g0, k0 = new Array(C0), i0 = 0; C0 > i0; i0++)
          k0[i0] = new Array(4), o0 = k0[i0], o0[0] = o0[1] = o0[2] = (i0 << D0 + 8) / C0 | 0, $[i0] = Ar / C0 | 0, p[i0] = 0;
      }
      function x() {
        for (var X = [], H = new Array(C0), g0 = 0; C0 > g0; g0++)
          H[k0[g0][3]] = g0;
        for (var i0 = 0, o0 = 0; C0 > o0; o0++) {
          var c0 = H[o0];
          X[i0++] = k0[c0][0], X[i0++] = k0[c0][1], X[i0++] = k0[c0][2];
        }
        return X;
      }
      function N() {
        var X, H, g0, i0, o0, c0, B0, X0;
        for (B0 = 0, X0 = 0, X = 0; C0 > X; X++) {
          for (o0 = k0[X], g0 = X, i0 = o0[1], H = X + 1; C0 > H; H++)
            c0 = k0[H], c0[1] < i0 && (g0 = H, i0 = c0[1]);
          if (c0 = k0[g0], X != g0 && (H = c0[0], c0[0] = o0[0], o0[0] = H, H = c0[1], c0[1] = o0[1], o0[1] = H, H = c0[2], c0[2] = o0[2], o0[2] = H, H = c0[3], c0[3] = o0[3], o0[3] = H), i0 != B0) {
            for (S0[B0] = X0 + X >> 1, H = B0 + 1; i0 > H; H++)
              S0[H] = X;
            B0 = i0, X0 = X;
          }
        }
        for (S0[B0] = X0 + W0 >> 1, H = B0 + 1; 256 > H; H++)
          S0[H] = W0;
      }
      function D() {
        var X, H, g0, i0, o0, c0, B0, X0, x0, L0, ir, U0, _r, O;
        for (y0 > R0 && (_0 = 1), m0 = 30 + (_0 - 1) / 3, U0 = G0, _r = 0, O = R0, ir = R0 / (3 * _0), L0 = ir / V0 | 0, X0 = E0, c0 = W, B0 = c0 >> kr, 1 >= B0 && (B0 = 0), X = 0; B0 > X; X++)
          a0[X] = X0 * ((B0 * B0 - X * X) * t0 / (B0 * B0));
        for (x0 = y0 > R0 ? 3 : R0 % q0 !== 0 ? 3 * q0 : R0 % N0 !== 0 ? 3 * N0 : R0 % Z0 !== 0 ? 3 * Z0 : 3 * d0, X = 0; ir > X; )
          if (g0 = (255 & U0[_r + 0]) << D0, i0 = (255 & U0[_r + 1]) << D0, o0 = (255 & U0[_r + 2]) << D0, H = n0(g0, i0, o0), l0(X0, H, g0, i0, o0), B0 !== 0 && A0(B0, H, g0, i0, o0), _r += x0, _r >= O && (_r -= R0), X++, L0 === 0 && (L0 = 1), X % L0 === 0)
            for (X0 -= X0 / m0, c0 -= c0 / u0, B0 = c0 >> kr, 1 >= B0 && (B0 = 0), H = 0; B0 > H; H++)
              a0[H] = X0 * ((B0 * B0 - H * H) * t0 / (B0 * B0));
      }
      function Y(X, H, g0) {
        var i0, o0, c0, B0, X0, x0, L0;
        for (X0 = 1e3, L0 = -1, i0 = S0[H], o0 = i0 - 1; C0 > i0 || o0 >= 0; )
          C0 > i0 && (x0 = k0[i0], c0 = x0[1] - H, c0 >= X0 ? i0 = C0 : (i0++, 0 > c0 && (c0 = -c0), B0 = x0[0] - X, 0 > B0 && (B0 = -B0), c0 += B0, X0 > c0 && (B0 = x0[2] - g0, 0 > B0 && (B0 = -B0), c0 += B0, X0 > c0 && (X0 = c0, L0 = x0[3])))), o0 >= 0 && (x0 = k0[o0], c0 = H - x0[1], c0 >= X0 ? o0 = -1 : (o0--, 0 > c0 && (c0 = -c0), B0 = x0[0] - X, 0 > B0 && (B0 = -B0), c0 += B0, X0 > c0 && (B0 = x0[2] - g0, 0 > B0 && (B0 = -B0), c0 += B0, X0 > c0 && (X0 = c0, L0 = x0[3]))));
        return L0;
      }
      function z() {
        return D(), j(), N(), x();
      }
      function j() {
        var X;
        for (X = 0; C0 > X; X++)
          k0[X][0] >>= D0, k0[X][1] >>= D0, k0[X][2] >>= D0, k0[X][3] = X;
      }
      function A0(X, H, g0, i0, o0) {
        var c0, B0, X0, x0, L0, ir, U0;
        for (X0 = H - X, -1 > X0 && (X0 = -1), x0 = H + X, x0 > C0 && (x0 = C0), c0 = H + 1, B0 = H - 1, ir = 1; x0 > c0 || B0 > X0; ) {
          if (L0 = a0[ir++], x0 > c0) {
            U0 = k0[c0++];
            try {
              U0[0] -= L0 * (U0[0] - g0) / f0 | 0, U0[1] -= L0 * (U0[1] - i0) / f0 | 0, U0[2] -= L0 * (U0[2] - o0) / f0 | 0;
            } catch {
            }
          }
          if (B0 > X0) {
            U0 = k0[B0--];
            try {
              U0[0] -= L0 * (U0[0] - g0) / f0 | 0, U0[1] -= L0 * (U0[1] - i0) / f0 | 0, U0[2] -= L0 * (U0[2] - o0) / f0 | 0;
            } catch {
            }
          }
        }
      }
      function l0(X, H, g0, i0, o0) {
        var c0 = k0[H], B0 = X / E0;
        c0[0] -= B0 * (c0[0] - g0) | 0, c0[1] -= B0 * (c0[1] - i0) | 0, c0[2] -= B0 * (c0[2] - o0) | 0;
      }
      function n0(X, H, g0) {
        var i0, o0, c0, B0, X0, x0, L0, ir, U0, _r;
        for (ir = ~(1 << 31), U0 = ir, x0 = -1, L0 = x0, i0 = 0; C0 > i0; i0++)
          _r = k0[i0], o0 = _r[0] - X, 0 > o0 && (o0 = -o0), c0 = _r[1] - H, 0 > c0 && (c0 = -c0), o0 += c0, c0 = _r[2] - g0, 0 > c0 && (c0 = -c0), o0 += c0, ir > o0 && (ir = o0, x0 = i0), B0 = o0 - (p[i0] >> j0 - D0), U0 > B0 && (U0 = B0, L0 = i0), X0 = $[i0] >> fr, $[i0] -= X0, p[i0] += X0 << sr;
        return $[x0] += br, p[x0] -= gr, L0;
      }
      var m0, G0, R0, _0, k0, C0 = 256, q0 = 499, N0 = 491, Z0 = 487, d0 = 503, y0 = 3 * d0, W0 = C0 - 1, D0 = 4, V0 = 100, j0 = 16, Ar = 1 << j0, sr = 10, fr = 10, br = Ar >> fr, gr = Ar << sr - fr, lr = C0 >> 3, kr = 6, Or = 1 << kr, W = lr * Or, u0 = 30, h0 = 10, E0 = 1 << h0, U = 8, t0 = 1 << U, Z = h0 + U, f0 = 1 << Z, S0 = [], p = [], $ = [], a0 = [];
      _.apply(this, arguments);
      var I = {};
      return I.map = Y, I.process = z, I;
    }
    function c() {
      var _ = this;
      try {
        _.onmessage = function(N) {
          var D, Y = N.data || {};
          Y.gifshot && (D = x.run(Y), postMessage(D));
        };
      } catch {
      }
      var x = { dataToRGB: function(N, D, Y) {
        for (var z = D * Y * 4, j = 0, A0 = []; z > j; )
          A0.push(N[j++]), A0.push(N[j++]), A0.push(N[j++]), j++;
        return A0;
      }, componentizedPaletteToArray: function(N) {
        N = N || [];
        for (var D = [], Y = 0; Y < N.length; Y += 3) {
          var z = N[Y], j = N[Y + 1], A0 = N[Y + 2];
          D.push(z << 16 | j << 8 | A0);
        }
        return D;
      }, processFrameWithQuantizer: function(N, D, Y, z) {
        for (var j = this.dataToRGB(N, D, Y), A0 = new l(j, j.length, z), l0 = A0.process(), n0 = new Uint32Array(this.componentizedPaletteToArray(l0)), m0 = D * Y, G0 = new Uint8Array(m0), R0 = 0, _0 = 0; m0 > _0; _0++) {
          var k0 = j[R0++], C0 = j[R0++], q0 = j[R0++];
          G0[_0] = A0.map(k0, C0, q0);
        }
        return { pixels: G0, palette: n0 };
      }, run: function(N) {
        N = N || {};
        var D = N, Y = D.height, z = (D.palette, D.sampleInterval), j = D.width, A0 = N.data;
        return this.processFrameWithQuantizer(A0, j, Y, z);
      } };
      return x;
    }
    function h(_, x, N, D) {
      function Y(R0) {
        var _0 = R0.length;
        if (2 > _0 || _0 > 256 || _0 & _0 - 1)
          throw "Invalid code/color length, must be power of 2 and 2 .. 256.";
        return _0;
      }
      function z(R0, _0, k0, C0) {
        function q0(W) {
          for (; j0 >= W; )
            R0[_0++] = 255 & Ar, Ar >>= 8, j0 -= 8, _0 === Z0 + 256 && (R0[Z0] = 255, Z0 = _0++);
        }
        function N0(W) {
          Ar |= W << j0, j0 += V0, q0(8);
        }
        R0[_0++] = k0;
        var Z0 = _0++, d0 = 1 << k0, y0 = d0 - 1, W0 = d0 + 1, D0 = W0 + 1, V0 = k0 + 1, j0 = 0, Ar = 0, sr = C0[0] & y0, fr = {};
        N0(d0);
        for (var br = 1, gr = C0.length; gr > br; ++br) {
          var lr = C0[br] & y0, kr = sr << 8 | lr, Or = fr[kr];
          if (Or === i) {
            for (Ar |= sr << j0, j0 += V0; j0 >= 8; )
              R0[_0++] = 255 & Ar, Ar >>= 8, j0 -= 8, _0 === Z0 + 256 && (R0[Z0] = 255, Z0 = _0++);
            D0 === 4096 ? (N0(d0), D0 = W0 + 1, V0 = k0 + 1, fr = {}) : (D0 >= 1 << V0 && ++V0, fr[kr] = D0++), sr = lr;
          } else
            sr = Or;
        }
        return N0(sr), N0(W0), q0(1), Z0 + 1 === _0 ? R0[Z0] = 0 : (R0[Z0] = _0 - Z0 - 1, R0[_0++] = 0), _0;
      }
      var j = 0;
      D = D === i ? {} : D;
      var A0 = D.loop === i ? null : D.loop, l0 = D.palette === i ? null : D.palette;
      if (0 >= x || 0 >= N || x > 65535 || N > 65535)
        throw "Width/Height invalid.";
      _[j++] = 71, _[j++] = 73, _[j++] = 70, _[j++] = 56, _[j++] = 57, _[j++] = 97;
      var n0 = 0, m0 = 0;
      if (_[j++] = 255 & x, _[j++] = x >> 8 & 255, _[j++] = 255 & N, _[j++] = N >> 8 & 255, _[j++] = (l0 !== null ? 128 : 0) | n0, _[j++] = m0, _[j++] = 0, A0 !== null) {
        if (0 > A0 || A0 > 65535)
          throw "Loop count invalid.";
        _[j++] = 33, _[j++] = 255, _[j++] = 11, _[j++] = 78, _[j++] = 69, _[j++] = 84, _[j++] = 83, _[j++] = 67, _[j++] = 65, _[j++] = 80, _[j++] = 69, _[j++] = 50, _[j++] = 46, _[j++] = 48, _[j++] = 3, _[j++] = 1, _[j++] = 255 & A0, _[j++] = A0 >> 8 & 255, _[j++] = 0;
      }
      var G0 = !1;
      this.addFrame = function(R0, _0, k0, C0, q0, N0) {
        if (G0 === !0 && (--j, G0 = !1), N0 = N0 === i ? {} : N0, 0 > R0 || 0 > _0 || R0 > 65535 || _0 > 65535)
          throw "x/y invalid.";
        if (0 >= k0 || 0 >= C0 || k0 > 65535 || C0 > 65535)
          throw "Width/Height invalid.";
        if (q0.length < k0 * C0)
          throw "Not enough pixels for the frame size.";
        var Z0 = !0, d0 = N0.palette;
        if ((d0 === i || d0 === null) && (Z0 = !1, d0 = l0), d0 === i || d0 === null)
          throw "Must supply either a local or global palette.";
        for (var y0 = Y(d0), W0 = 0; y0 >>= 1; )
          ++W0;
        y0 = 1 << W0;
        var D0 = N0.delay === i ? 0 : N0.delay, V0 = N0.disposal === i ? 0 : N0.disposal;
        if (0 > V0 || V0 > 3)
          throw "Disposal out of range.";
        var j0 = !1, Ar = 0;
        if (N0.transparent !== i && N0.transparent !== null && (j0 = !0, Ar = N0.transparent, 0 > Ar || Ar >= y0))
          throw "Transparent color index.";
        if ((V0 !== 0 || j0 || D0 !== 0) && (_[j++] = 33, _[j++] = 249, _[j++] = 4, _[j++] = V0 << 2 | (j0 === !0 ? 1 : 0), _[j++] = 255 & D0, _[j++] = D0 >> 8 & 255, _[j++] = Ar, _[j++] = 0), _[j++] = 44, _[j++] = 255 & R0, _[j++] = R0 >> 8 & 255, _[j++] = 255 & _0, _[j++] = _0 >> 8 & 255, _[j++] = 255 & k0, _[j++] = k0 >> 8 & 255, _[j++] = 255 & C0, _[j++] = C0 >> 8 & 255, _[j++] = Z0 === !0 ? 128 | W0 - 1 : 0, Z0 === !0)
          for (var sr = 0, fr = d0.length; fr > sr; ++sr) {
            var br = d0[sr];
            _[j++] = br >> 16 & 255, _[j++] = br >> 8 & 255, _[j++] = 255 & br;
          }
        j = z(_, j, 2 > W0 ? 2 : W0, q0);
      }, this.end = function() {
        return G0 === !1 && (_[j++] = 59, G0 = !0), j;
      };
    }
    function d(_, x) {
      _.getBase64GIF(function(N) {
        x({ error: !1, errorCode: "", errorMsg: "", image: N });
      });
    }
    function b() {
      function _() {
        y.each(l0, function(R0, _0) {
          _0 && (_0.text ? G0.addFrame(_0.img, Y, _0.text) : G0.addFrame(_0, Y));
        }), d(G0, N);
      }
      var x = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {}, N = x.callback, D = x.images, Y = x.options, z = x.imagesLength, j = { getUserMedia: !0, "window.URL": !0 }, A0 = F.validate(j), l0 = [], n0 = 0, m0 = void 0, G0 = void 0;
      return A0.error ? N(A0) : (G0 = new L(Y), y.each(D, function(R0, _0) {
        var k0 = _0;
        _0.src && (k0 = k0.src), y.isElement(k0) ? (Y.crossOrigin && (k0.crossOrigin = Y.crossOrigin), l0[R0] = k0, n0 += 1, n0 === z && _()) : y.isString(k0) && (m0 = new Image(), Y.crossOrigin && (m0.crossOrigin = Y.crossOrigin), function(C0) {
          _0.text && (C0.text = _0.text), C0.onerror = function() {
            var q0 = void 0;
            return --z, z === 0 ? (q0 = {}, q0.error = "None of the requested images was capable of being retrieved", N(q0)) : void 0;
          }, C0.onload = function() {
            l0[R0] = _0.text ? { img: C0, text: C0.text } : C0, n0 += 1, n0 === z && _(), y.removeElement(C0);
          }, C0.src = k0;
        }(m0), y.setCSSAttr(m0, { position: "fixed", opacity: "0" }), a.body.appendChild(m0));
      }), void 0);
    }
    function g(_) {
      _ = y.isObject(_) ? _ : {}, e0.stopVideoStreaming(_);
    }
    function v(_, x) {
      var N = _.options || {}, D = N.images, Y = N.video, z = Number(N.gifWidth), j = Number(N.gifHeight), A0 = (Number(N.numFrames), _.cameraStream), l0 = _.videoElement, n0 = _.videoWidth, m0 = _.videoHeight, G0 = r0.getCropDimensions({ videoWidth: n0, videoHeight: m0, gifHeight: j, gifWidth: z }), R0 = x;
      N.crop = G0, N.videoElement = l0, N.videoWidth = n0, N.videoHeight = m0, N.cameraStream = A0, y.isElement(l0) && (l0.width = z + G0.width, l0.height = j + G0.height, N.webcamVideoElement || (y.setCSSAttr(l0, { position: "fixed", opacity: "0" }), a.body.appendChild(l0)), l0.play(), r0.getGIF(N, function(_0) {
        D && D.length || Y && Y.length || g(_0), R0(_0);
      }));
    }
    function m() {
      var _ = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {}, x = _.callback, N = _.existingVideo, D = _.options, Y = { getUserMedia: !0, "window.URL": !0 }, z = F.validate(Y), j = void 0, A0 = void 0;
      if (z.error)
        return x(z);
      if (y.isElement(N) && N.src) {
        if (A0 = N.src, j = y.getExtension(A0), !y.isSupported.videoCodecs[j])
          return x(F.messages.videoCodecs);
      } else
        y.isArray(N) && y.each(N, function(l0, n0) {
          return j = n0 instanceof Blob ? n0.type.substr(n0.type.lastIndexOf("/") + 1, n0.length) : n0.substr(n0.lastIndexOf(".") + 1, n0.length), y.isSupported.videoCodecs[j] ? (N = n0, !1) : void 0;
        });
      e0.startStreaming({ completed: function(l0) {
        l0.options = D || {}, v(l0, x);
      }, existingVideo: N, crossOrigin: D.crossOrigin, options: D });
    }
    function w() {
      var _ = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {}, x = _.callback, N = _.lastCameraStream, D = _.options, Y = _.webcamVideoElement;
      return n() ? D.savedRenderingContexts.length ? (r0.getGIF(D, function(z) {
        x(z);
      }), void 0) : (e0.startVideoStreaming(function() {
        var z = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {};
        z.options = D || {}, v(z, x);
      }, { lastCameraStream: N, callback: x, webcamVideoElement: Y, crossOrigin: D.crossOrigin }), void 0) : x(F.validate());
    }
    function k(_, x) {
      if (x = y.isFunction(_) ? _ : x, _ = y.isObject(_) ? _ : {}, y.isFunction(x)) {
        var N = y.mergeOptions(M, _) || {}, D = _.cameraStream, Y = N.images, z = Y ? Y.length : 0, j = N.video, A0 = N.webcamVideoElement;
        N = y.mergeOptions(N, { gifWidth: Math.floor(N.gifWidth), gifHeight: Math.floor(N.gifHeight) }), z ? b({ images: Y, imagesLength: z, callback: x, options: N }) : j ? m({ existingVideo: j, callback: x, options: N }) : w({ lastCameraStream: D, callback: x, webcamVideoElement: A0, options: N });
      }
    }
    function C(_, x) {
      if (x = y.isFunction(_) ? _ : x, _ = y.isObject(_) ? _ : {}, y.isFunction(x)) {
        var N = y.mergeOptions(M, _), D = y.mergeOptions(N, { interval: 0.1, numFrames: 1, gifWidth: Math.floor(N.gifWidth), gifHeight: Math.floor(N.gifHeight) });
        k(D, x);
      }
    }
    var y = { URL: e.URL || e.webkitURL || e.mozURL || e.msURL, getUserMedia: function() {
      var _ = t.getUserMedia || t.webkitGetUserMedia || t.mozGetUserMedia || t.msGetUserMedia;
      return _ && _.bind(t);
    }(), requestAnimFrame: e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame, requestTimeout: function(_, x) {
      if (_ = _ || y.noop, x = x || 0, !y.requestAnimFrame)
        return setTimeout(_, x);
      var N = (/* @__PURE__ */ new Date()).getTime(), D = new Object(), Y = y.requestAnimFrame, z = function j() {
        var A0 = (/* @__PURE__ */ new Date()).getTime(), l0 = A0 - N;
        l0 >= x ? _.call() : D.value = Y(j);
      };
      return D.value = Y(z), D;
    }, Blob: e.Blob || e.BlobBuilder || e.WebKitBlobBuilder || e.MozBlobBuilder || e.MSBlobBuilder, btoa: function() {
      var _ = e.btoa || function(x) {
        for (var N = "", D = 0, Y = x.length, z = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", j = void 0, A0 = void 0, l0 = void 0, n0 = void 0, m0 = void 0, G0 = void 0, R0 = void 0; Y > D; )
          j = x.charCodeAt(D++), A0 = x.charCodeAt(D++), l0 = x.charCodeAt(D++), n0 = j >> 2, m0 = (3 & j) << 4 | A0 >> 4, G0 = (15 & A0) << 2 | l0 >> 6, R0 = 63 & l0, isNaN(A0) ? G0 = R0 = 64 : isNaN(l0) && (R0 = 64), N = N + z.charAt(n0) + z.charAt(m0) + z.charAt(G0) + z.charAt(R0);
        return N;
      };
      return _ ? _.bind(e) : y.noop;
    }(), isObject: function(_) {
      return _ && Object.prototype.toString.call(_) === "[object Object]";
    }, isEmptyObject: function(_) {
      return y.isObject(_) && !Object.keys(_).length;
    }, isArray: function(_) {
      return _ && Array.isArray(_);
    }, isFunction: function(_) {
      return _ && typeof _ == "function";
    }, isElement: function(_) {
      return _ && _.nodeType === 1;
    }, isString: function(_) {
      return typeof _ == "string" || Object.prototype.toString.call(_) === "[object String]";
    }, isSupported: { canvas: function() {
      var _ = a.createElement("canvas");
      return _ && _.getContext && _.getContext("2d");
    }, webworkers: function() {
      return e.Worker;
    }, blob: function() {
      return y.Blob;
    }, Uint8Array: function() {
      return e.Uint8Array;
    }, Uint32Array: function() {
      return e.Uint32Array;
    }, videoCodecs: function() {
      var _ = a.createElement("video"), x = { mp4: !1, h264: !1, ogv: !1, ogg: !1, webm: !1 };
      try {
        _ && _.canPlayType && (x.mp4 = _.canPlayType('video/mp4; codecs="mp4v.20.8"') !== "", x.h264 = (_.canPlayType('video/mp4; codecs="avc1.42E01E"') || _.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"')) !== "", x.ogv = _.canPlayType('video/ogg; codecs="theora"') !== "", x.ogg = _.canPlayType('video/ogg; codecs="theora"') !== "", x.webm = _.canPlayType('video/webm; codecs="vp8, vorbis"') !== -1);
      } catch {
      }
      return x;
    }() }, noop: function() {
    }, each: function(_, x) {
      var N = void 0, D = void 0;
      if (y.isArray(_))
        for (N = -1, D = _.length; ++N < D && x(N, _[N]) !== !1; )
          ;
      else if (y.isObject(_)) {
        for (N in _)
          if (_.hasOwnProperty(N) && x(N, _[N]) === !1)
            break;
      }
    }, mergeOptions: function(_, x) {
      if (y.isObject(_) && y.isObject(x) && Object.keys) {
        var N = {};
        return y.each(_, function(D) {
          N[D] = _[D];
        }), y.each(x, function(D) {
          var Y = x[D];
          N[D] = y.isObject(Y) && _[D] ? y.mergeOptions(_[D], Y) : Y;
        }), N;
      }
    }, setCSSAttr: function(_, x, N) {
      y.isElement(_) && (y.isString(x) && y.isString(N) ? _.style[x] = N : y.isObject(x) && y.each(x, function(D, Y) {
        _.style[D] = Y;
      }));
    }, removeElement: function(_) {
      y.isElement(_) && _.parentNode && _.parentNode.removeChild(_);
    }, createWebWorker: function(_) {
      if (!y.isString(_))
        return {};
      try {
        var x = new y.Blob([_], { type: "text/javascript" }), N = y.URL.createObjectURL(x), D = new Worker(N);
        return { objectUrl: N, worker: D };
      } catch (Y) {
        return "" + Y;
      }
    }, getExtension: function(_) {
      return _.substr(_.lastIndexOf(".") + 1, _.length);
    }, getFontSize: function() {
      var _ = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {};
      if (!a.body || _.resizeFont === !1)
        return _.fontSize;
      var x = _.text, N = _.gifWidth, D = parseInt(_.fontSize, 10), Y = parseInt(_.minFontSize, 10), z = a.createElement("div"), j = a.createElement("span");
      for (z.setAttribute("width", N), z.appendChild(j), j.innerHTML = x, j.style.fontSize = D + "px", j.style.textIndent = "-9999px", j.style.visibility = "hidden", a.body.appendChild(j); j.offsetWidth > N && D >= Y; )
        j.style.fontSize = --D + "px";
      return a.body.removeChild(j), D + "px";
    }, webWorkerError: !1 }, B = Object.freeze({ default: y }), F = { validate: function(_) {
      _ = y.isObject(_) ? _ : {};
      var x = {};
      return y.each(F.validators, function(N, D) {
        var Y = D.errorCode;
        return _[Y] || D.condition ? void 0 : (x = D, x.error = !0, !1);
      }), delete x.condition, x;
    }, isValid: function(x) {
      var N = F.validate(x), D = N.error !== !0;
      return D;
    }, validators: [{ condition: y.isFunction(y.getUserMedia), errorCode: "getUserMedia", errorMsg: "The getUserMedia API is not supported in your browser" }, { condition: y.isSupported.canvas(), errorCode: "canvas", errorMsg: "Canvas elements are not supported in your browser" }, { condition: y.isSupported.webworkers(), errorCode: "webworkers", errorMsg: "The Web Workers API is not supported in your browser" }, { condition: y.isFunction(y.URL), errorCode: "window.URL", errorMsg: "The window.URL API is not supported in your browser" }, { condition: y.isSupported.blob(), errorCode: "window.Blob", errorMsg: "The window.Blob File API is not supported in your browser" }, { condition: y.isSupported.Uint8Array(), errorCode: "window.Uint8Array", errorMsg: "The window.Uint8Array function constructor is not supported in your browser" }, { condition: y.isSupported.Uint32Array(), errorCode: "window.Uint32Array", errorMsg: "The window.Uint32Array function constructor is not supported in your browser" }], messages: { videoCodecs: { errorCode: "videocodec", errorMsg: "The video codec you are trying to use is not supported in your browser" } } }, G = Object.freeze({ default: F }), V = function() {
    }, M = { sampleInterval: 10, numWorkers: 2, filter: "", gifWidth: 200, gifHeight: 200, interval: 0.1, numFrames: 10, frameDuration: 1, keepCameraOn: !1, images: [], video: null, webcamVideoElement: null, cameraStream: null, text: "", fontWeight: "normal", fontSize: "16px", minFontSize: "10px", resizeFont: !1, fontFamily: "sans-serif", fontColor: "#ffffff", textAlign: "center", textBaseline: "bottom", textXCoordinate: null, textYCoordinate: null, progressCallback: V, completeCallback: V, saveRenderingContexts: !1, savedRenderingContexts: [], showFrameText: !0, crossOrigin: "Anonymous", waterMark: null, waterMarkHeight: null, waterMarkWidth: null, waterMarkXCoordinate: 1, waterMarkYCoordinate: 1 }, T = Object.freeze({ default: M }), Q = function() {
    }, L = function(_) {
      this.canvas = null, this.ctx = null, this.repeat = 0, this.frames = [], this.numRenderedFrames = 0, this.onRenderCompleteCallback = Q, this.onRenderProgressCallback = Q, this.workers = [], this.availableWorkers = [], this.generatingGIF = !1, this.options = _, this.initializeWebWorkers(_);
    };
    L.prototype = { workerMethods: c(), initializeWebWorkers: function(_) {
      var x = this, N = l.toString() + "(" + c.toString() + "());", D = void 0, Y = void 0, z = void 0, j = void 0, A0 = -1, l0 = "";
      for (j = _.numWorkers; ++A0 < j; )
        D = y.createWebWorker(N), y.isObject(D) ? (Y = D.objectUrl, z = D.worker, x.workers.push({ worker: z, objectUrl: Y }), x.availableWorkers.push(z)) : (l0 = D, y.webWorkerError = !!D);
      this.workerError = l0, this.canvas = a.createElement("canvas"), this.canvas.width = _.gifWidth, this.canvas.height = _.gifHeight, this.ctx = this.canvas.getContext("2d"), this.frames = [];
    }, getWorker: function() {
      return this.availableWorkers.pop();
    }, freeWorker: function(_) {
      this.availableWorkers.push(_);
    }, byteMap: function() {
      for (var _ = [], x = 0; 256 > x; x++)
        _[x] = String.fromCharCode(x);
      return _;
    }(), bufferToString: function(_) {
      for (var x = _.length, N = "", D = -1; ++D < x; )
        N += this.byteMap[_[D]];
      return N;
    }, onFrameFinished: function(_) {
      var x = this, N = x.frames, D = x.options, Y = !!(D.images || []).length, z = N.every(function(j) {
        return !j.beingProcessed && j.done;
      });
      x.numRenderedFrames++, Y && _(x.numRenderedFrames / N.length), x.onRenderProgressCallback(0.75 * x.numRenderedFrames / N.length), z ? x.generatingGIF || x.generateGIF(N, x.onRenderCompleteCallback) : y.requestTimeout(function() {
        x.processNextFrame();
      }, 1);
    }, processFrame: function(_) {
      var x = this, N = (this.options, this.options), D = N.progressCallback, Y = N.sampleInterval, z = this.frames, j = void 0, A0 = void 0, l0 = function() {
        var n0 = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {}, m0 = n0.data;
        delete j.data, j.pixels = Array.prototype.slice.call(m0.pixels), j.palette = Array.prototype.slice.call(m0.palette), j.done = !0, j.beingProcessed = !1, x.freeWorker(A0), x.onFrameFinished(D);
      };
      return j = z[_], j.beingProcessed || j.done ? (this.onFrameFinished(), void 0) : (j.sampleInterval = Y, j.beingProcessed = !0, j.gifshot = !0, A0 = this.getWorker(), A0 ? (A0.onmessage = l0, A0.postMessage(j)) : l0({ data: x.workerMethods.run(j) }), void 0);
    }, startRendering: function(_) {
      this.onRenderCompleteCallback = _;
      for (var x = 0; x < this.options.numWorkers && x < this.frames.length; x++)
        this.processFrame(x);
    }, processNextFrame: function() {
      for (var _ = -1, x = 0; x < this.frames.length; x++) {
        var N = this.frames[x];
        if (!N.done && !N.beingProcessed) {
          _ = x;
          break;
        }
      }
      _ >= 0 && this.processFrame(_);
    }, generateGIF: function(_, x) {
      var N = [], D = { loop: this.repeat }, Y = this.options, z = Y.interval, j = Y.frameDuration, A0 = Y.images, l0 = !!A0.length, n0 = Y.gifHeight, m0 = Y.gifWidth, G0 = new h(N, m0, n0, D), R0 = this.onRenderProgressCallback, _0 = l0 ? 100 * z : 0, k0 = void 0, C0 = void 0;
      this.generatingGIF = !0, y.each(_, function(q0, N0) {
        var Z0 = N0.palette;
        R0(0.75 + 0.25 * N0.position * 1 / _.length);
        for (var d0 = 0; j > d0; d0++)
          G0.addFrame(0, 0, m0, n0, N0.pixels, { palette: Z0, delay: _0 });
      }), G0.end(), R0(1), this.frames = [], this.generatingGIF = !1, y.isFunction(x) && (k0 = this.bufferToString(N), C0 = "data:image/gif;base64," + y.btoa(k0), x(C0));
    }, setRepeat: function(_) {
      this.repeat = _;
    }, addFrame: function(_, x, N) {
      x = y.isObject(x) ? x : {};
      var D = this, Y = D.ctx, z = D.options, j = z.gifWidth, A0 = z.gifHeight, l0 = y.getFontSize(x), n0 = x, m0 = n0.filter, G0 = n0.fontColor, R0 = n0.fontFamily, _0 = n0.fontWeight, k0 = (n0.gifHeight, n0.gifWidth, n0.text), C0 = n0.textAlign, q0 = n0.textBaseline, N0 = n0.waterMark, Z0 = n0.waterMarkHeight, d0 = n0.waterMarkWidth, y0 = n0.waterMarkXCoordinate, W0 = n0.waterMarkYCoordinate, D0 = x.textXCoordinate ? x.textXCoordinate : C0 === "left" ? 1 : C0 === "right" ? j : j / 2, V0 = x.textYCoordinate ? x.textYCoordinate : q0 === "top" ? 1 : q0 === "center" ? A0 / 2 : A0, j0 = _0 + " " + l0 + " " + R0, Ar = N && x.showFrameText ? N : k0, sr = void 0;
      try {
        Y.filter = m0, Y.drawImage(_, 0, 0, j, A0), Ar && (Y.font = j0, Y.fillStyle = G0, Y.textAlign = C0, Y.textBaseline = q0, Y.fillText(Ar, D0, V0)), N0 && Y.drawImage(N0, y0, W0, d0, Z0), sr = Y.getImageData(0, 0, j, A0), D.addFrameImageData(sr);
      } catch (fr) {
        return "" + fr;
      }
    }, addFrameImageData: function() {
      var _ = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {}, x = this.frames, N = _.data;
      this.frames.push({ data: N, width: _.width, height: _.height, palette: null, dithering: null, done: !1, beingProcessed: !1, position: x.length });
    }, onRenderProgress: function(_) {
      this.onRenderProgressCallback = _;
    }, isRendering: function() {
      return this.generatingGIF;
    }, getBase64GIF: function(_) {
      var x = this, N = function(D) {
        x.destroyWorkers(), y.requestTimeout(function() {
          _(D);
        }, 0);
      };
      x.startRendering(N);
    }, destroyWorkers: function() {
      if (!this.workerError) {
        var _ = this.workers;
        y.each(_, function(x, N) {
          var D = N.worker, Y = N.objectUrl;
          D.terminate(), y.URL.revokeObjectURL(Y);
        });
      }
    } };
    var J = function() {
    }, r0 = { getGIF: function() {
      var _ = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {}, x = arguments[1];
      x = y.isFunction(x) ? x : J;
      var N = a.createElement("canvas"), D = void 0, Y = _.images, z = !!Y.length, j = _.cameraStream, A0 = _.crop, l0 = _.filter, n0 = _.fontColor, m0 = _.fontFamily, G0 = _.fontWeight, R0 = _.keepCameraOn, _0 = (_.numWorkers, _.progressCallback), k0 = _.saveRenderingContexts, C0 = _.savedRenderingContexts, q0 = _.text, N0 = _.textAlign, Z0 = _.textBaseline, d0 = _.videoElement, y0 = _.videoHeight, W0 = _.videoWidth, D0 = _.webcamVideoElement, V0 = _.waterMark, j0 = _.waterMarkHeight, Ar = _.waterMarkWidth, sr = _.waterMarkXCoordinate, fr = _.waterMarkYCoordinate, br = Number(_.gifWidth), gr = Number(_.gifHeight), lr = Number(_.interval), kr = (Number(_.sampleInterval), z ? 0 : 1e3 * lr), Or = [], W = C0.length ? C0.length : _.numFrames, u0 = W, h0 = new L(_), E0 = y.getFontSize(_), U = _.textXCoordinate ? _.textXCoordinate : N0 === "left" ? 1 : N0 === "right" ? br : br / 2, t0 = _.textYCoordinate ? _.textYCoordinate : Z0 === "top" ? 1 : Z0 === "center" ? gr / 2 : gr, Z = G0 + " " + E0 + " " + m0, f0 = A0 ? Math.floor(A0.scaledWidth / 2) : 0, S0 = A0 ? W0 - A0.scaledWidth : 0, p = A0 ? Math.floor(A0.scaledHeight / 2) : 0, $ = A0 ? y0 - A0.scaledHeight : 0, a0 = function I() {
        function X() {
          try {
            S0 > W0 && (S0 = W0), $ > y0 && ($ = y0), 0 > f0 && (f0 = 0), 0 > p && (p = 0), D.filter = l0, D.drawImage(d0, f0, p, S0, $, 0, 0, br, gr), H();
          } catch (i0) {
            if (i0.name !== "NS_ERROR_NOT_AVAILABLE")
              throw i0;
            y.requestTimeout(X, 100);
          }
        }
        function H() {
          var i0 = void 0;
          k0 && Or.push(D.getImageData(0, 0, br, gr)), V0 && D.drawImage(V0, sr, fr, Ar, j0), q0 && (D.font = Z, D.fillStyle = n0, D.textAlign = N0, D.textBaseline = Z0, D.fillText(q0, U, t0)), i0 = D.getImageData(0, 0, br, gr), h0.addFrameImageData(i0), u0 = g0, _0((W - u0) / W), g0 > 0 && y.requestTimeout(I, kr), u0 || h0.getBase64GIF(function(o0) {
            x({ error: !1, errorCode: "", errorMsg: "", image: o0, cameraStream: j, videoElement: d0, webcamVideoElement: D0, savedRenderingContexts: Or, keepCameraOn: R0 });
          });
        }
        var g0 = u0 - 1;
        C0.length ? (D.putImageData(C0[W - u0], 0, 0), H()) : X();
      };
      W = W !== i ? W : 10, lr = lr !== i ? lr : 0.1, N.width = br, N.height = gr, D = N.getContext("2d"), function I() {
        return C0.length || d0.currentTime !== 0 ? (a0(), void 0) : (y.requestTimeout(I, 100), void 0);
      }();
    }, getCropDimensions: function() {
      var _ = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {}, x = _.videoWidth, N = _.videoHeight, D = _.gifWidth, Y = _.gifHeight, z = { width: 0, height: 0, scaledWidth: 0, scaledHeight: 0 };
      return x > N ? (z.width = Math.round(x * (Y / N)) - D, z.scaledWidth = Math.round(z.width * (N / Y))) : (z.height = Math.round(N * (D / x)) - Y, z.scaledHeight = Math.round(z.height * (x / D))), z;
    } }, e0 = { loadedData: !1, defaultVideoDimensions: { width: 640, height: 480 }, findVideoSize: function _(x) {
      _.attempts = _.attempts || 0;
      var N = x.cameraStream, D = x.completedCallback, Y = x.videoElement;
      Y && (Y.videoWidth > 0 && Y.videoHeight > 0 ? (Y.removeEventListener("loadeddata", e0.findVideoSize), D({ videoElement: Y, cameraStream: N, videoWidth: Y.videoWidth, videoHeight: Y.videoHeight })) : _.attempts < 10 ? (_.attempts += 1, y.requestTimeout(function() {
        e0.findVideoSize(x);
      }, 400)) : D({ videoElement: Y, cameraStream: N, videoWidth: e0.defaultVideoDimensions.width, videoHeight: e0.defaultVideoDimensions.height }));
    }, onStreamingTimeout: function(_) {
      y.isFunction(_) && _({ error: !0, errorCode: "getUserMedia", errorMsg: "There was an issue with the getUserMedia API - Timed out while trying to start streaming", image: null, cameraStream: {} });
    }, stream: function(_) {
      var x = y.isArray(_.existingVideo) ? _.existingVideo[0] : _.existingVideo, N = _.cameraStream, D = _.completedCallback, Y = _.streamedCallback, z = _.videoElement;
      if (y.isFunction(Y) && Y(), x) {
        if (y.isString(x))
          z.src = x, z.innerHTML = '<source src="' + x + '" type="video/' + y.getExtension(x) + '" />';
        else if (x instanceof Blob) {
          try {
            z.src = y.URL.createObjectURL(x);
          } catch {
          }
          z.innerHTML = '<source src="' + x + '" type="' + x.type + '" />';
        }
      } else if (z.mozSrcObject)
        z.mozSrcObject = N;
      else if (y.URL)
        try {
          z.srcObject = N, z.src = y.URL.createObjectURL(N);
        } catch {
          z.srcObject = N;
        }
      z.play(), y.requestTimeout(function j() {
        j.count = j.count || 0, e0.loadedData === !0 ? (e0.findVideoSize({ videoElement: z, cameraStream: N, completedCallback: D }), e0.loadedData = !1) : (j.count += 1, j.count > 10 ? e0.findVideoSize({ videoElement: z, cameraStream: N, completedCallback: D }) : j());
      }, 0);
    }, startStreaming: function(_) {
      var x = y.isFunction(_.error) ? _.error : y.noop, N = y.isFunction(_.streamed) ? _.streamed : y.noop, D = y.isFunction(_.completed) ? _.completed : y.noop, Y = _.crossOrigin, z = _.existingVideo, j = _.lastCameraStream, A0 = _.options, l0 = _.webcamVideoElement, n0 = y.isElement(z) ? z : l0 || a.createElement("video");
      Y && (n0.crossOrigin = A0.crossOrigin), n0.autoplay = !0, n0.loop = !0, n0.muted = !0, n0.addEventListener("loadeddata", function() {
        e0.loadedData = !0, A0.offset && (n0.currentTime = A0.offset);
      }), z ? e0.stream({ videoElement: n0, existingVideo: z, completedCallback: D }) : j ? e0.stream({ videoElement: n0, cameraStream: j, streamedCallback: N, completedCallback: D }) : y.getUserMedia({ video: !0 }, function(m0) {
        e0.stream({ videoElement: n0, cameraStream: m0, streamedCallback: N, completedCallback: D });
      }, x);
    }, startVideoStreaming: function(_) {
      var x = arguments.length > 1 && arguments[1] !== i ? arguments[1] : {}, N = x.timeout !== i ? x.timeout : 0, D = x.callback, Y = x.webcamVideoElement, z = void 0;
      N > 0 && (z = y.requestTimeout(function() {
        e0.onStreamingTimeout(D);
      }, 1e4)), e0.startStreaming({ error: function() {
        D({ error: !0, errorCode: "getUserMedia", errorMsg: "There was an issue with the getUserMedia API - the user probably denied permission", image: null, cameraStream: {} });
      }, streamed: function() {
        clearTimeout(z);
      }, completed: function() {
        var j = arguments.length > 0 && arguments[0] !== i ? arguments[0] : {}, A0 = j.cameraStream, l0 = j.videoElement, n0 = j.videoHeight, m0 = j.videoWidth;
        _({ cameraStream: A0, videoElement: l0, videoHeight: n0, videoWidth: m0 });
      }, lastCameraStream: x.lastCameraStream, webcamVideoElement: Y, crossOrigin: x.crossOrigin, options: x });
    }, stopVideoStreaming: function(_) {
      _ = y.isObject(_) ? _ : {};
      var x = _, N = x.keepCameraOn, D = x.videoElement, Y = x.webcamVideoElement, z = _.cameraStream || {}, j = z.getTracks ? z.getTracks() || [] : [], A0 = !!j.length, l0 = j[0];
      !N && A0 && y.isFunction(l0.stop) && l0.stop(), y.isElement(D) && !Y && (D.pause(), y.isFunction(y.URL.revokeObjectURL) && !y.webWorkerError && D.src && y.URL.revokeObjectURL(D.src), y.removeElement(D));
    } }, q = { utils: B, error: G, defaultOptions: T, createGIF: k, takeSnapShot: C, stopVideoStreaming: g, isSupported: A, isWebCamGIFSupported: n, isExistingVideoGIFSupported: f, isExistingImagesGIFSupported: o, VERSION: "0.4.5" };
    s.exports = q;
  })(typeof window < "u" ? window : {}, typeof document < "u" ? document : { createElement: function() {
  } }, typeof window < "u" ? window.navigator : {}), function(e, a) {
    s.exports = a(), s.exports.default = a();
  }(V3, function() {
    var e = `
;
function processSingleImage(image) {
    return new Promise((resolve, reject) => {
        const w = image.get_width();
        const h = image.get_height();
        const whiteImage = new ImageData(w, h);
        for (let i = 0; i < w * h; i++) {
            whiteImage.data[i * 4 + 3] = 255;
        }
        image.display(whiteImage, (imageData) => {
            if (!imageData) {
                return reject("ERR_LIBHEIF Error while processing single image and generating image data, could not ensure image");
            }
            resolve(imageData);
        });
    });
}
onmessage = (message) => {
    const id = message.data.id;
    try {
        const decoder = new libheif.HeifDecoder();
        let imagesArr = decoder.decode(message.data.buffer);
        if (!imagesArr || !imagesArr.length) {
            throw "ERR_LIBHEIF format not supported";
        }
        imagesArr = imagesArr.filter((x) => {
            let valid = true;
            try {
                /*
                sometimes the heic container is valid
                yet the images themselves are corrupt
                */
                x.get_height();
            }
            catch (e) {
                valid = false;
            }
            return valid;
        });
        if (!imagesArr.length) {
            throw "ERR_LIBHEIF Heic doesn't contain valid images";
        }
        Promise.all(imagesArr.map((image) => processSingleImage(image)))
            .then((imageDataArr) => {
            postMessage({ id, imageDataArr, error: "" });
        })
            .catch((e) => {
            postMessage({
                id,
                imageDataArr: [],
                error: e && e.toString ? e.toString() : e,
            });
        });
    }
    catch (e) {
        postMessage({
            id,
            imageDataArr: [],
            error: e && e.toString ? e.toString() : e,
        });
    }
};

`, a = new Blob([e], { type: "application/javascript" });
    window.__heic2any__worker = new Worker(URL.createObjectURL(a));
    var t = ["image/png", "image/jpeg", "image/gif"], i = {
      blobToDataURL: function(o) {
        return new Promise(function(f, l) {
          var c = new FileReader();
          c.onerror = function() {
            l("ERR_DOM Error on converting blob to data URL");
          }, c.onload = function(h) {
            f(c.result);
          }, c.readAsDataURL(o);
        });
      },
      dataURItoBlob: function(o) {
        try {
          for (var f = atob(o.split(",")[1]), l = o.split(",")[0].split(":")[1].split(";")[0], c = new ArrayBuffer(f.length), h = new Uint8Array(c), d = 0; d < f.length; d++)
            h[d] = f.charCodeAt(d);
          var b = new Blob([c], { type: l });
          return b;
        } catch (g) {
          return "ERR_DOM Error on converting data URI to blob " + g && g.toString ? g.toString() : g;
        }
      },
      imageDataToBlob: function(o) {
        var f = o.imageData, l = o.toType;
        l === void 0 && (l = "image/png");
        var c = o.quality;
        return c === void 0 && (c = 0.92), (c > 1 || c < 0) && (c = 0.92), t.indexOf(l) === -1 && (l = "image/png"), new Promise(function(h, d) {
          var b = null;
          try {
            b = document.createElement("canvas");
          } catch {
          }
          if (!b)
            return d("ERR_CANVAS Error on converting imagedata to blob: Could not create canvas element");
          b.width = f.width, b.height = f.height;
          var g = b.getContext("2d");
          if (!g)
            return d("ERR_CANVAS Error on converting imagedata to blob: Could not get canvas context");
          g.putImageData(f, 0, 0), b.toBlob(function(v) {
            return v ? h(v) : d("ERR_CANVAS Error on converting imagedata to blob: Could not get blob from canvas");
          }, l, c);
        });
      },
      imagesToGif: function(o) {
        var f = o.images, l = o.interval, c = o.gifHeight, h = o.gifWidth;
        return new Promise(function(d, b) {
          gifshot.createGIF({
            images: f,
            interval: l,
            gifHeight: c,
            gifWidth: h
          }, function(g) {
            return g.error && b("ERR_GIF " + g.errorCode + " " + g.errorMessage), d(g.image);
          });
        });
      },
      otherImageType: function(o) {
        for (var f = new Uint8Array(o).subarray(0, 4), l = "", c = 0; c < f.length; c++)
          l = l + f[c].toString(16);
        switch (l) {
          case "89504e47":
            return "image/png";
          case "47494638":
            return "image/gif";
          case "ffd8ffe0":
          case "ffd8ffe1":
          case "ffd8ffe2":
          case "ffd8ffe3":
          case "ffd8ffe8":
            return "image/jpeg";
          default:
            return !1;
        }
      },
      error: function(o) {
        var f = 0;
        o ? typeof o != "string" && (o.toString ? o = o.toString() : o = JSON.stringify(o)) : o = "ERR_UNKNOWN";
        for (var l = [
          "ERR_USER",
          "ERR_LIBHEIF",
          "ERR_GIF",
          "ERR_DOM",
          "ERR_CANVAS"
        ], c = 0; c < l.length; c++) {
          var h = l[c];
          o.indexOf(h) === 0 && (f = c + 1);
        }
        return {
          code: f,
          message: o
        };
      }
    };
    function A(o) {
      return new Promise(function(f, l) {
        var c = (Math.random() * (/* @__PURE__ */ new Date()).getTime()).toString(), h = { id: c, buffer: o };
        window.__heic2any__worker.postMessage(h), window.__heic2any__worker.addEventListener("message", function(d) {
          if (d.data.id === c)
            return d.data.error ? l(d.data.error) : f(d.data.imageDataArr);
        });
      });
    }
    function n(o) {
      var f = o.blob, l = o.toType;
      l === void 0 && (l = "image/png");
      var c = o.quality;
      c === void 0 && (c = 0.92);
      var h = o.gifInterval;
      h === void 0 && (h = 0.4);
      var d = o.multiple;
      return d === void 0 && (d = void 0), new Promise(function(b, g) {
        f instanceof Blob || i.error("ERR_USER library only accepts BLOBs as input"), typeof d != "boolean" && i.error('ERR_USER "multiple" parameter should be of type "boolean"'), typeof c != "number" && i.error('ERR_USER "quality" parameter should be of type "number"'), typeof h != "number" && i.error('ERR_USER "gifInterval" parameter should be of type "number"');
        var v = new FileReader();
        v.onload = function(m) {
          var w = 0, k = 0, C = m.target.result, y = i.otherImageType(C);
          if (y)
            return g(i.error("ERR_USER Image is already browser readable: " + y));
          A(C).then(function(B) {
            return w = B[0].width, k = B[0].height, Promise.all(B.map(function(F) {
              return i.imageDataToBlob({
                imageData: F,
                toType: l,
                quality: c
              });
            }));
          }).then(function(B) {
            return l === "image/gif" ? Promise.all(B.map(function(F) {
              return i.blobToDataURL(F);
            })) : d ? (b(B), [""]) : (b(B[0]), [""]);
          }).then(function(B) {
            return l === "image/gif" && B ? i.imagesToGif({
              images: B,
              interval: h,
              gifWidth: w,
              gifHeight: k
            }) : "";
          }).then(function(B) {
            if (l === "image/gif" && B) {
              var F = i.dataURItoBlob(B);
              typeof F == "string" ? g(i.error(F)) : b(F);
            }
          }).catch(function(B) {
            g(i.error(B));
          });
        }, v.readAsArrayBuffer(f);
      });
    }
    return n;
  });
})(Fd);
var b5 = Fd.exports;
const g5 = /* @__PURE__ */ j4(b5);
function v5(s) {
  throw new Error('Could not dynamically require "' + s + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Wd = { exports: {} }, xu = {}, f4;
function ai() {
  return f4 || (f4 = 1, function(s) {
    var r = typeof Uint8Array < "u" && typeof Uint16Array < "u" && typeof Int32Array < "u";
    function e(i, A) {
      return Object.prototype.hasOwnProperty.call(i, A);
    }
    s.assign = function(i) {
      for (var A = Array.prototype.slice.call(arguments, 1); A.length; ) {
        var n = A.shift();
        if (n) {
          if (typeof n != "object")
            throw new TypeError(n + "must be non-object");
          for (var o in n)
            e(n, o) && (i[o] = n[o]);
        }
      }
      return i;
    }, s.shrinkBuf = function(i, A) {
      return i.length === A ? i : i.subarray ? i.subarray(0, A) : (i.length = A, i);
    };
    var a = {
      arraySet: function(i, A, n, o, f) {
        if (A.subarray && i.subarray) {
          i.set(A.subarray(n, n + o), f);
          return;
        }
        for (var l = 0; l < o; l++)
          i[f + l] = A[n + l];
      },
      // Join array of chunks to single array.
      flattenChunks: function(i) {
        var A, n, o, f, l, c;
        for (o = 0, A = 0, n = i.length; A < n; A++)
          o += i[A].length;
        for (c = new Uint8Array(o), f = 0, A = 0, n = i.length; A < n; A++)
          l = i[A], c.set(l, f), f += l.length;
        return c;
      }
    }, t = {
      arraySet: function(i, A, n, o, f) {
        for (var l = 0; l < o; l++)
          i[f + l] = A[n + l];
      },
      // Join array of chunks to single array.
      flattenChunks: function(i) {
        return [].concat.apply([], i);
      }
    };
    s.setTyped = function(i) {
      i ? (s.Buf8 = Uint8Array, s.Buf16 = Uint16Array, s.Buf32 = Int32Array, s.assign(s, a)) : (s.Buf8 = Array, s.Buf16 = Array, s.Buf32 = Array, s.assign(s, t));
    }, s.setTyped(r);
  }(xu)), xu;
}
var S2 = {}, Ve = {}, ii = {}, l4;
function p5() {
  if (l4)
    return ii;
  l4 = 1;
  var s = ai(), r = 4, e = 0, a = 1, t = 2;
  function i(W) {
    for (var u0 = W.length; --u0 >= 0; )
      W[u0] = 0;
  }
  var A = 0, n = 1, o = 2, f = 3, l = 258, c = 29, h = 256, d = h + 1 + c, b = 30, g = 19, v = 2 * d + 1, m = 15, w = 16, k = 7, C = 256, y = 16, B = 17, F = 18, G = (
    /* extra bits for each length code */
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
  ), V = (
    /* extra bits for each distance code */
    [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
  ), M = (
    /* extra bits for each bit length code */
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
  ), T = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], Q = 512, L = new Array((d + 2) * 2);
  i(L);
  var J = new Array(b * 2);
  i(J);
  var r0 = new Array(Q);
  i(r0);
  var e0 = new Array(l - f + 1);
  i(e0);
  var q = new Array(c);
  i(q);
  var _ = new Array(b);
  i(_);
  function x(W, u0, h0, E0, U) {
    this.static_tree = W, this.extra_bits = u0, this.extra_base = h0, this.elems = E0, this.max_length = U, this.has_stree = W && W.length;
  }
  var N, D, Y;
  function z(W, u0) {
    this.dyn_tree = W, this.max_code = 0, this.stat_desc = u0;
  }
  function j(W) {
    return W < 256 ? r0[W] : r0[256 + (W >>> 7)];
  }
  function A0(W, u0) {
    W.pending_buf[W.pending++] = u0 & 255, W.pending_buf[W.pending++] = u0 >>> 8 & 255;
  }
  function l0(W, u0, h0) {
    W.bi_valid > w - h0 ? (W.bi_buf |= u0 << W.bi_valid & 65535, A0(W, W.bi_buf), W.bi_buf = u0 >> w - W.bi_valid, W.bi_valid += h0 - w) : (W.bi_buf |= u0 << W.bi_valid & 65535, W.bi_valid += h0);
  }
  function n0(W, u0, h0) {
    l0(
      W,
      h0[u0 * 2],
      h0[u0 * 2 + 1]
      /*.Len*/
    );
  }
  function m0(W, u0) {
    var h0 = 0;
    do
      h0 |= W & 1, W >>>= 1, h0 <<= 1;
    while (--u0 > 0);
    return h0 >>> 1;
  }
  function G0(W) {
    W.bi_valid === 16 ? (A0(W, W.bi_buf), W.bi_buf = 0, W.bi_valid = 0) : W.bi_valid >= 8 && (W.pending_buf[W.pending++] = W.bi_buf & 255, W.bi_buf >>= 8, W.bi_valid -= 8);
  }
  function R0(W, u0) {
    var h0 = u0.dyn_tree, E0 = u0.max_code, U = u0.stat_desc.static_tree, t0 = u0.stat_desc.has_stree, Z = u0.stat_desc.extra_bits, f0 = u0.stat_desc.extra_base, S0 = u0.stat_desc.max_length, p, $, a0, I, X, H, g0 = 0;
    for (I = 0; I <= m; I++)
      W.bl_count[I] = 0;
    for (h0[W.heap[W.heap_max] * 2 + 1] = 0, p = W.heap_max + 1; p < v; p++)
      $ = W.heap[p], I = h0[h0[$ * 2 + 1] * 2 + 1] + 1, I > S0 && (I = S0, g0++), h0[$ * 2 + 1] = I, !($ > E0) && (W.bl_count[I]++, X = 0, $ >= f0 && (X = Z[$ - f0]), H = h0[$ * 2], W.opt_len += H * (I + X), t0 && (W.static_len += H * (U[$ * 2 + 1] + X)));
    if (g0 !== 0) {
      do {
        for (I = S0 - 1; W.bl_count[I] === 0; )
          I--;
        W.bl_count[I]--, W.bl_count[I + 1] += 2, W.bl_count[S0]--, g0 -= 2;
      } while (g0 > 0);
      for (I = S0; I !== 0; I--)
        for ($ = W.bl_count[I]; $ !== 0; )
          a0 = W.heap[--p], !(a0 > E0) && (h0[a0 * 2 + 1] !== I && (W.opt_len += (I - h0[a0 * 2 + 1]) * h0[a0 * 2], h0[a0 * 2 + 1] = I), $--);
    }
  }
  function _0(W, u0, h0) {
    var E0 = new Array(m + 1), U = 0, t0, Z;
    for (t0 = 1; t0 <= m; t0++)
      E0[t0] = U = U + h0[t0 - 1] << 1;
    for (Z = 0; Z <= u0; Z++) {
      var f0 = W[Z * 2 + 1];
      f0 !== 0 && (W[Z * 2] = m0(E0[f0]++, f0));
    }
  }
  function k0() {
    var W, u0, h0, E0, U, t0 = new Array(m + 1);
    for (h0 = 0, E0 = 0; E0 < c - 1; E0++)
      for (q[E0] = h0, W = 0; W < 1 << G[E0]; W++)
        e0[h0++] = E0;
    for (e0[h0 - 1] = E0, U = 0, E0 = 0; E0 < 16; E0++)
      for (_[E0] = U, W = 0; W < 1 << V[E0]; W++)
        r0[U++] = E0;
    for (U >>= 7; E0 < b; E0++)
      for (_[E0] = U << 7, W = 0; W < 1 << V[E0] - 7; W++)
        r0[256 + U++] = E0;
    for (u0 = 0; u0 <= m; u0++)
      t0[u0] = 0;
    for (W = 0; W <= 143; )
      L[W * 2 + 1] = 8, W++, t0[8]++;
    for (; W <= 255; )
      L[W * 2 + 1] = 9, W++, t0[9]++;
    for (; W <= 279; )
      L[W * 2 + 1] = 7, W++, t0[7]++;
    for (; W <= 287; )
      L[W * 2 + 1] = 8, W++, t0[8]++;
    for (_0(L, d + 1, t0), W = 0; W < b; W++)
      J[W * 2 + 1] = 5, J[W * 2] = m0(W, 5);
    N = new x(L, G, h + 1, d, m), D = new x(J, V, 0, b, m), Y = new x(new Array(0), M, 0, g, k);
  }
  function C0(W) {
    var u0;
    for (u0 = 0; u0 < d; u0++)
      W.dyn_ltree[u0 * 2] = 0;
    for (u0 = 0; u0 < b; u0++)
      W.dyn_dtree[u0 * 2] = 0;
    for (u0 = 0; u0 < g; u0++)
      W.bl_tree[u0 * 2] = 0;
    W.dyn_ltree[C * 2] = 1, W.opt_len = W.static_len = 0, W.last_lit = W.matches = 0;
  }
  function q0(W) {
    W.bi_valid > 8 ? A0(W, W.bi_buf) : W.bi_valid > 0 && (W.pending_buf[W.pending++] = W.bi_buf), W.bi_buf = 0, W.bi_valid = 0;
  }
  function N0(W, u0, h0, E0) {
    q0(W), E0 && (A0(W, h0), A0(W, ~h0)), s.arraySet(W.pending_buf, W.window, u0, h0, W.pending), W.pending += h0;
  }
  function Z0(W, u0, h0, E0) {
    var U = u0 * 2, t0 = h0 * 2;
    return W[U] < W[t0] || W[U] === W[t0] && E0[u0] <= E0[h0];
  }
  function d0(W, u0, h0) {
    for (var E0 = W.heap[h0], U = h0 << 1; U <= W.heap_len && (U < W.heap_len && Z0(u0, W.heap[U + 1], W.heap[U], W.depth) && U++, !Z0(u0, E0, W.heap[U], W.depth)); )
      W.heap[h0] = W.heap[U], h0 = U, U <<= 1;
    W.heap[h0] = E0;
  }
  function y0(W, u0, h0) {
    var E0, U, t0 = 0, Z, f0;
    if (W.last_lit !== 0)
      do
        E0 = W.pending_buf[W.d_buf + t0 * 2] << 8 | W.pending_buf[W.d_buf + t0 * 2 + 1], U = W.pending_buf[W.l_buf + t0], t0++, E0 === 0 ? n0(W, U, u0) : (Z = e0[U], n0(W, Z + h + 1, u0), f0 = G[Z], f0 !== 0 && (U -= q[Z], l0(W, U, f0)), E0--, Z = j(E0), n0(W, Z, h0), f0 = V[Z], f0 !== 0 && (E0 -= _[Z], l0(W, E0, f0)));
      while (t0 < W.last_lit);
    n0(W, C, u0);
  }
  function W0(W, u0) {
    var h0 = u0.dyn_tree, E0 = u0.stat_desc.static_tree, U = u0.stat_desc.has_stree, t0 = u0.stat_desc.elems, Z, f0, S0 = -1, p;
    for (W.heap_len = 0, W.heap_max = v, Z = 0; Z < t0; Z++)
      h0[Z * 2] !== 0 ? (W.heap[++W.heap_len] = S0 = Z, W.depth[Z] = 0) : h0[Z * 2 + 1] = 0;
    for (; W.heap_len < 2; )
      p = W.heap[++W.heap_len] = S0 < 2 ? ++S0 : 0, h0[p * 2] = 1, W.depth[p] = 0, W.opt_len--, U && (W.static_len -= E0[p * 2 + 1]);
    for (u0.max_code = S0, Z = W.heap_len >> 1; Z >= 1; Z--)
      d0(W, h0, Z);
    p = t0;
    do
      Z = W.heap[
        1
        /*SMALLEST*/
      ], W.heap[
        1
        /*SMALLEST*/
      ] = W.heap[W.heap_len--], d0(
        W,
        h0,
        1
        /*SMALLEST*/
      ), f0 = W.heap[
        1
        /*SMALLEST*/
      ], W.heap[--W.heap_max] = Z, W.heap[--W.heap_max] = f0, h0[p * 2] = h0[Z * 2] + h0[f0 * 2], W.depth[p] = (W.depth[Z] >= W.depth[f0] ? W.depth[Z] : W.depth[f0]) + 1, h0[Z * 2 + 1] = h0[f0 * 2 + 1] = p, W.heap[
        1
        /*SMALLEST*/
      ] = p++, d0(
        W,
        h0,
        1
        /*SMALLEST*/
      );
    while (W.heap_len >= 2);
    W.heap[--W.heap_max] = W.heap[
      1
      /*SMALLEST*/
    ], R0(W, u0), _0(h0, S0, W.bl_count);
  }
  function D0(W, u0, h0) {
    var E0, U = -1, t0, Z = u0[0 * 2 + 1], f0 = 0, S0 = 7, p = 4;
    for (Z === 0 && (S0 = 138, p = 3), u0[(h0 + 1) * 2 + 1] = 65535, E0 = 0; E0 <= h0; E0++)
      t0 = Z, Z = u0[(E0 + 1) * 2 + 1], !(++f0 < S0 && t0 === Z) && (f0 < p ? W.bl_tree[t0 * 2] += f0 : t0 !== 0 ? (t0 !== U && W.bl_tree[t0 * 2]++, W.bl_tree[y * 2]++) : f0 <= 10 ? W.bl_tree[B * 2]++ : W.bl_tree[F * 2]++, f0 = 0, U = t0, Z === 0 ? (S0 = 138, p = 3) : t0 === Z ? (S0 = 6, p = 3) : (S0 = 7, p = 4));
  }
  function V0(W, u0, h0) {
    var E0, U = -1, t0, Z = u0[0 * 2 + 1], f0 = 0, S0 = 7, p = 4;
    for (Z === 0 && (S0 = 138, p = 3), E0 = 0; E0 <= h0; E0++)
      if (t0 = Z, Z = u0[(E0 + 1) * 2 + 1], !(++f0 < S0 && t0 === Z)) {
        if (f0 < p)
          do
            n0(W, t0, W.bl_tree);
          while (--f0 !== 0);
        else
          t0 !== 0 ? (t0 !== U && (n0(W, t0, W.bl_tree), f0--), n0(W, y, W.bl_tree), l0(W, f0 - 3, 2)) : f0 <= 10 ? (n0(W, B, W.bl_tree), l0(W, f0 - 3, 3)) : (n0(W, F, W.bl_tree), l0(W, f0 - 11, 7));
        f0 = 0, U = t0, Z === 0 ? (S0 = 138, p = 3) : t0 === Z ? (S0 = 6, p = 3) : (S0 = 7, p = 4);
      }
  }
  function j0(W) {
    var u0;
    for (D0(W, W.dyn_ltree, W.l_desc.max_code), D0(W, W.dyn_dtree, W.d_desc.max_code), W0(W, W.bl_desc), u0 = g - 1; u0 >= 3 && W.bl_tree[T[u0] * 2 + 1] === 0; u0--)
      ;
    return W.opt_len += 3 * (u0 + 1) + 5 + 5 + 4, u0;
  }
  function Ar(W, u0, h0, E0) {
    var U;
    for (l0(W, u0 - 257, 5), l0(W, h0 - 1, 5), l0(W, E0 - 4, 4), U = 0; U < E0; U++)
      l0(W, W.bl_tree[T[U] * 2 + 1], 3);
    V0(W, W.dyn_ltree, u0 - 1), V0(W, W.dyn_dtree, h0 - 1);
  }
  function sr(W) {
    var u0 = 4093624447, h0;
    for (h0 = 0; h0 <= 31; h0++, u0 >>>= 1)
      if (u0 & 1 && W.dyn_ltree[h0 * 2] !== 0)
        return e;
    if (W.dyn_ltree[9 * 2] !== 0 || W.dyn_ltree[10 * 2] !== 0 || W.dyn_ltree[13 * 2] !== 0)
      return a;
    for (h0 = 32; h0 < h; h0++)
      if (W.dyn_ltree[h0 * 2] !== 0)
        return a;
    return e;
  }
  var fr = !1;
  function br(W) {
    fr || (k0(), fr = !0), W.l_desc = new z(W.dyn_ltree, N), W.d_desc = new z(W.dyn_dtree, D), W.bl_desc = new z(W.bl_tree, Y), W.bi_buf = 0, W.bi_valid = 0, C0(W);
  }
  function gr(W, u0, h0, E0) {
    l0(W, (A << 1) + (E0 ? 1 : 0), 3), N0(W, u0, h0, !0);
  }
  function lr(W) {
    l0(W, n << 1, 3), n0(W, C, L), G0(W);
  }
  function kr(W, u0, h0, E0) {
    var U, t0, Z = 0;
    W.level > 0 ? (W.strm.data_type === t && (W.strm.data_type = sr(W)), W0(W, W.l_desc), W0(W, W.d_desc), Z = j0(W), U = W.opt_len + 3 + 7 >>> 3, t0 = W.static_len + 3 + 7 >>> 3, t0 <= U && (U = t0)) : U = t0 = h0 + 5, h0 + 4 <= U && u0 !== -1 ? gr(W, u0, h0, E0) : W.strategy === r || t0 === U ? (l0(W, (n << 1) + (E0 ? 1 : 0), 3), y0(W, L, J)) : (l0(W, (o << 1) + (E0 ? 1 : 0), 3), Ar(W, W.l_desc.max_code + 1, W.d_desc.max_code + 1, Z + 1), y0(W, W.dyn_ltree, W.dyn_dtree)), C0(W), E0 && q0(W);
  }
  function Or(W, u0, h0) {
    return W.pending_buf[W.d_buf + W.last_lit * 2] = u0 >>> 8 & 255, W.pending_buf[W.d_buf + W.last_lit * 2 + 1] = u0 & 255, W.pending_buf[W.l_buf + W.last_lit] = h0 & 255, W.last_lit++, u0 === 0 ? W.dyn_ltree[h0 * 2]++ : (W.matches++, u0--, W.dyn_ltree[(e0[h0] + h + 1) * 2]++, W.dyn_dtree[j(u0) * 2]++), W.last_lit === W.lit_bufsize - 1;
  }
  return ii._tr_init = br, ii._tr_stored_block = gr, ii._tr_flush_block = kr, ii._tr_tally = Or, ii._tr_align = lr, ii;
}
var Gu, u4;
function xd() {
  if (u4)
    return Gu;
  u4 = 1;
  function s(r, e, a, t) {
    for (var i = r & 65535 | 0, A = r >>> 16 & 65535 | 0, n = 0; a !== 0; ) {
      n = a > 2e3 ? 2e3 : a, a -= n;
      do
        i = i + e[t++] | 0, A = A + i | 0;
      while (--n);
      i %= 65521, A %= 65521;
    }
    return i | A << 16 | 0;
  }
  return Gu = s, Gu;
}
var Tu, c4;
function Gd() {
  if (c4)
    return Tu;
  c4 = 1;
  function s() {
    for (var a, t = [], i = 0; i < 256; i++) {
      a = i;
      for (var A = 0; A < 8; A++)
        a = a & 1 ? 3988292384 ^ a >>> 1 : a >>> 1;
      t[i] = a;
    }
    return t;
  }
  var r = s();
  function e(a, t, i, A) {
    var n = r, o = A + i;
    a ^= -1;
    for (var f = A; f < o; f++)
      a = a >>> 8 ^ n[(a ^ t[f]) & 255];
    return a ^ -1;
  }
  return Tu = e, Tu;
}
var Xu, h4;
function ph() {
  return h4 || (h4 = 1, Xu = {
    2: "need dictionary",
    /* Z_NEED_DICT       2  */
    1: "stream end",
    /* Z_STREAM_END      1  */
    0: "",
    /* Z_OK              0  */
    "-1": "file error",
    /* Z_ERRNO         (-1) */
    "-2": "stream error",
    /* Z_STREAM_ERROR  (-2) */
    "-3": "data error",
    /* Z_DATA_ERROR    (-3) */
    "-4": "insufficient memory",
    /* Z_MEM_ERROR     (-4) */
    "-5": "buffer error",
    /* Z_BUF_ERROR     (-5) */
    "-6": "incompatible version"
    /* Z_VERSION_ERROR (-6) */
  }), Xu;
}
var d4;
function m5() {
  if (d4)
    return Ve;
  d4 = 1;
  var s = ai(), r = p5(), e = xd(), a = Gd(), t = ph(), i = 0, A = 1, n = 3, o = 4, f = 5, l = 0, c = 1, h = -2, d = -3, b = -5, g = -1, v = 1, m = 2, w = 3, k = 4, C = 0, y = 2, B = 8, F = 9, G = 15, V = 8, M = 29, T = 256, Q = T + 1 + M, L = 30, J = 19, r0 = 2 * Q + 1, e0 = 15, q = 3, _ = 258, x = _ + q + 1, N = 32, D = 42, Y = 69, z = 73, j = 91, A0 = 103, l0 = 113, n0 = 666, m0 = 1, G0 = 2, R0 = 3, _0 = 4, k0 = 3;
  function C0(p, $) {
    return p.msg = t[$], $;
  }
  function q0(p) {
    return (p << 1) - (p > 4 ? 9 : 0);
  }
  function N0(p) {
    for (var $ = p.length; --$ >= 0; )
      p[$] = 0;
  }
  function Z0(p) {
    var $ = p.state, a0 = $.pending;
    a0 > p.avail_out && (a0 = p.avail_out), a0 !== 0 && (s.arraySet(p.output, $.pending_buf, $.pending_out, a0, p.next_out), p.next_out += a0, $.pending_out += a0, p.total_out += a0, p.avail_out -= a0, $.pending -= a0, $.pending === 0 && ($.pending_out = 0));
  }
  function d0(p, $) {
    r._tr_flush_block(p, p.block_start >= 0 ? p.block_start : -1, p.strstart - p.block_start, $), p.block_start = p.strstart, Z0(p.strm);
  }
  function y0(p, $) {
    p.pending_buf[p.pending++] = $;
  }
  function W0(p, $) {
    p.pending_buf[p.pending++] = $ >>> 8 & 255, p.pending_buf[p.pending++] = $ & 255;
  }
  function D0(p, $, a0, I) {
    var X = p.avail_in;
    return X > I && (X = I), X === 0 ? 0 : (p.avail_in -= X, s.arraySet($, p.input, p.next_in, X, a0), p.state.wrap === 1 ? p.adler = e(p.adler, $, X, a0) : p.state.wrap === 2 && (p.adler = a(p.adler, $, X, a0)), p.next_in += X, p.total_in += X, X);
  }
  function V0(p, $) {
    var a0 = p.max_chain_length, I = p.strstart, X, H, g0 = p.prev_length, i0 = p.nice_match, o0 = p.strstart > p.w_size - x ? p.strstart - (p.w_size - x) : 0, c0 = p.window, B0 = p.w_mask, X0 = p.prev, x0 = p.strstart + _, L0 = c0[I + g0 - 1], ir = c0[I + g0];
    p.prev_length >= p.good_match && (a0 >>= 2), i0 > p.lookahead && (i0 = p.lookahead);
    do
      if (X = $, !(c0[X + g0] !== ir || c0[X + g0 - 1] !== L0 || c0[X] !== c0[I] || c0[++X] !== c0[I + 1])) {
        I += 2, X++;
        do
          ;
        while (c0[++I] === c0[++X] && c0[++I] === c0[++X] && c0[++I] === c0[++X] && c0[++I] === c0[++X] && c0[++I] === c0[++X] && c0[++I] === c0[++X] && c0[++I] === c0[++X] && c0[++I] === c0[++X] && I < x0);
        if (H = _ - (x0 - I), I = x0 - _, H > g0) {
          if (p.match_start = $, g0 = H, H >= i0)
            break;
          L0 = c0[I + g0 - 1], ir = c0[I + g0];
        }
      }
    while (($ = X0[$ & B0]) > o0 && --a0 !== 0);
    return g0 <= p.lookahead ? g0 : p.lookahead;
  }
  function j0(p) {
    var $ = p.w_size, a0, I, X, H, g0;
    do {
      if (H = p.window_size - p.lookahead - p.strstart, p.strstart >= $ + ($ - x)) {
        s.arraySet(p.window, p.window, $, $, 0), p.match_start -= $, p.strstart -= $, p.block_start -= $, I = p.hash_size, a0 = I;
        do
          X = p.head[--a0], p.head[a0] = X >= $ ? X - $ : 0;
        while (--I);
        I = $, a0 = I;
        do
          X = p.prev[--a0], p.prev[a0] = X >= $ ? X - $ : 0;
        while (--I);
        H += $;
      }
      if (p.strm.avail_in === 0)
        break;
      if (I = D0(p.strm, p.window, p.strstart + p.lookahead, H), p.lookahead += I, p.lookahead + p.insert >= q)
        for (g0 = p.strstart - p.insert, p.ins_h = p.window[g0], p.ins_h = (p.ins_h << p.hash_shift ^ p.window[g0 + 1]) & p.hash_mask; p.insert && (p.ins_h = (p.ins_h << p.hash_shift ^ p.window[g0 + q - 1]) & p.hash_mask, p.prev[g0 & p.w_mask] = p.head[p.ins_h], p.head[p.ins_h] = g0, g0++, p.insert--, !(p.lookahead + p.insert < q)); )
          ;
    } while (p.lookahead < x && p.strm.avail_in !== 0);
  }
  function Ar(p, $) {
    var a0 = 65535;
    for (a0 > p.pending_buf_size - 5 && (a0 = p.pending_buf_size - 5); ; ) {
      if (p.lookahead <= 1) {
        if (j0(p), p.lookahead === 0 && $ === i)
          return m0;
        if (p.lookahead === 0)
          break;
      }
      p.strstart += p.lookahead, p.lookahead = 0;
      var I = p.block_start + a0;
      if ((p.strstart === 0 || p.strstart >= I) && (p.lookahead = p.strstart - I, p.strstart = I, d0(p, !1), p.strm.avail_out === 0) || p.strstart - p.block_start >= p.w_size - x && (d0(p, !1), p.strm.avail_out === 0))
        return m0;
    }
    return p.insert = 0, $ === o ? (d0(p, !0), p.strm.avail_out === 0 ? R0 : _0) : (p.strstart > p.block_start && (d0(p, !1), p.strm.avail_out === 0), m0);
  }
  function sr(p, $) {
    for (var a0, I; ; ) {
      if (p.lookahead < x) {
        if (j0(p), p.lookahead < x && $ === i)
          return m0;
        if (p.lookahead === 0)
          break;
      }
      if (a0 = 0, p.lookahead >= q && (p.ins_h = (p.ins_h << p.hash_shift ^ p.window[p.strstart + q - 1]) & p.hash_mask, a0 = p.prev[p.strstart & p.w_mask] = p.head[p.ins_h], p.head[p.ins_h] = p.strstart), a0 !== 0 && p.strstart - a0 <= p.w_size - x && (p.match_length = V0(p, a0)), p.match_length >= q)
        if (I = r._tr_tally(p, p.strstart - p.match_start, p.match_length - q), p.lookahead -= p.match_length, p.match_length <= p.max_lazy_match && p.lookahead >= q) {
          p.match_length--;
          do
            p.strstart++, p.ins_h = (p.ins_h << p.hash_shift ^ p.window[p.strstart + q - 1]) & p.hash_mask, a0 = p.prev[p.strstart & p.w_mask] = p.head[p.ins_h], p.head[p.ins_h] = p.strstart;
          while (--p.match_length !== 0);
          p.strstart++;
        } else
          p.strstart += p.match_length, p.match_length = 0, p.ins_h = p.window[p.strstart], p.ins_h = (p.ins_h << p.hash_shift ^ p.window[p.strstart + 1]) & p.hash_mask;
      else
        I = r._tr_tally(p, 0, p.window[p.strstart]), p.lookahead--, p.strstart++;
      if (I && (d0(p, !1), p.strm.avail_out === 0))
        return m0;
    }
    return p.insert = p.strstart < q - 1 ? p.strstart : q - 1, $ === o ? (d0(p, !0), p.strm.avail_out === 0 ? R0 : _0) : p.last_lit && (d0(p, !1), p.strm.avail_out === 0) ? m0 : G0;
  }
  function fr(p, $) {
    for (var a0, I, X; ; ) {
      if (p.lookahead < x) {
        if (j0(p), p.lookahead < x && $ === i)
          return m0;
        if (p.lookahead === 0)
          break;
      }
      if (a0 = 0, p.lookahead >= q && (p.ins_h = (p.ins_h << p.hash_shift ^ p.window[p.strstart + q - 1]) & p.hash_mask, a0 = p.prev[p.strstart & p.w_mask] = p.head[p.ins_h], p.head[p.ins_h] = p.strstart), p.prev_length = p.match_length, p.prev_match = p.match_start, p.match_length = q - 1, a0 !== 0 && p.prev_length < p.max_lazy_match && p.strstart - a0 <= p.w_size - x && (p.match_length = V0(p, a0), p.match_length <= 5 && (p.strategy === v || p.match_length === q && p.strstart - p.match_start > 4096) && (p.match_length = q - 1)), p.prev_length >= q && p.match_length <= p.prev_length) {
        X = p.strstart + p.lookahead - q, I = r._tr_tally(p, p.strstart - 1 - p.prev_match, p.prev_length - q), p.lookahead -= p.prev_length - 1, p.prev_length -= 2;
        do
          ++p.strstart <= X && (p.ins_h = (p.ins_h << p.hash_shift ^ p.window[p.strstart + q - 1]) & p.hash_mask, a0 = p.prev[p.strstart & p.w_mask] = p.head[p.ins_h], p.head[p.ins_h] = p.strstart);
        while (--p.prev_length !== 0);
        if (p.match_available = 0, p.match_length = q - 1, p.strstart++, I && (d0(p, !1), p.strm.avail_out === 0))
          return m0;
      } else if (p.match_available) {
        if (I = r._tr_tally(p, 0, p.window[p.strstart - 1]), I && d0(p, !1), p.strstart++, p.lookahead--, p.strm.avail_out === 0)
          return m0;
      } else
        p.match_available = 1, p.strstart++, p.lookahead--;
    }
    return p.match_available && (I = r._tr_tally(p, 0, p.window[p.strstart - 1]), p.match_available = 0), p.insert = p.strstart < q - 1 ? p.strstart : q - 1, $ === o ? (d0(p, !0), p.strm.avail_out === 0 ? R0 : _0) : p.last_lit && (d0(p, !1), p.strm.avail_out === 0) ? m0 : G0;
  }
  function br(p, $) {
    for (var a0, I, X, H, g0 = p.window; ; ) {
      if (p.lookahead <= _) {
        if (j0(p), p.lookahead <= _ && $ === i)
          return m0;
        if (p.lookahead === 0)
          break;
      }
      if (p.match_length = 0, p.lookahead >= q && p.strstart > 0 && (X = p.strstart - 1, I = g0[X], I === g0[++X] && I === g0[++X] && I === g0[++X])) {
        H = p.strstart + _;
        do
          ;
        while (I === g0[++X] && I === g0[++X] && I === g0[++X] && I === g0[++X] && I === g0[++X] && I === g0[++X] && I === g0[++X] && I === g0[++X] && X < H);
        p.match_length = _ - (H - X), p.match_length > p.lookahead && (p.match_length = p.lookahead);
      }
      if (p.match_length >= q ? (a0 = r._tr_tally(p, 1, p.match_length - q), p.lookahead -= p.match_length, p.strstart += p.match_length, p.match_length = 0) : (a0 = r._tr_tally(p, 0, p.window[p.strstart]), p.lookahead--, p.strstart++), a0 && (d0(p, !1), p.strm.avail_out === 0))
        return m0;
    }
    return p.insert = 0, $ === o ? (d0(p, !0), p.strm.avail_out === 0 ? R0 : _0) : p.last_lit && (d0(p, !1), p.strm.avail_out === 0) ? m0 : G0;
  }
  function gr(p, $) {
    for (var a0; ; ) {
      if (p.lookahead === 0 && (j0(p), p.lookahead === 0)) {
        if ($ === i)
          return m0;
        break;
      }
      if (p.match_length = 0, a0 = r._tr_tally(p, 0, p.window[p.strstart]), p.lookahead--, p.strstart++, a0 && (d0(p, !1), p.strm.avail_out === 0))
        return m0;
    }
    return p.insert = 0, $ === o ? (d0(p, !0), p.strm.avail_out === 0 ? R0 : _0) : p.last_lit && (d0(p, !1), p.strm.avail_out === 0) ? m0 : G0;
  }
  function lr(p, $, a0, I, X) {
    this.good_length = p, this.max_lazy = $, this.nice_length = a0, this.max_chain = I, this.func = X;
  }
  var kr;
  kr = [
    /*      good lazy nice chain */
    new lr(0, 0, 0, 0, Ar),
    /* 0 store only */
    new lr(4, 4, 8, 4, sr),
    /* 1 max speed, no lazy matches */
    new lr(4, 5, 16, 8, sr),
    /* 2 */
    new lr(4, 6, 32, 32, sr),
    /* 3 */
    new lr(4, 4, 16, 16, fr),
    /* 4 lazy matches */
    new lr(8, 16, 32, 32, fr),
    /* 5 */
    new lr(8, 16, 128, 128, fr),
    /* 6 */
    new lr(8, 32, 128, 256, fr),
    /* 7 */
    new lr(32, 128, 258, 1024, fr),
    /* 8 */
    new lr(32, 258, 258, 4096, fr)
    /* 9 max compression */
  ];
  function Or(p) {
    p.window_size = 2 * p.w_size, N0(p.head), p.max_lazy_match = kr[p.level].max_lazy, p.good_match = kr[p.level].good_length, p.nice_match = kr[p.level].nice_length, p.max_chain_length = kr[p.level].max_chain, p.strstart = 0, p.block_start = 0, p.lookahead = 0, p.insert = 0, p.match_length = p.prev_length = q - 1, p.match_available = 0, p.ins_h = 0;
  }
  function W() {
    this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = B, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new s.Buf16(r0 * 2), this.dyn_dtree = new s.Buf16((2 * L + 1) * 2), this.bl_tree = new s.Buf16((2 * J + 1) * 2), N0(this.dyn_ltree), N0(this.dyn_dtree), N0(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new s.Buf16(e0 + 1), this.heap = new s.Buf16(2 * Q + 1), N0(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new s.Buf16(2 * Q + 1), N0(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
  }
  function u0(p) {
    var $;
    return !p || !p.state ? C0(p, h) : (p.total_in = p.total_out = 0, p.data_type = y, $ = p.state, $.pending = 0, $.pending_out = 0, $.wrap < 0 && ($.wrap = -$.wrap), $.status = $.wrap ? D : l0, p.adler = $.wrap === 2 ? 0 : 1, $.last_flush = i, r._tr_init($), l);
  }
  function h0(p) {
    var $ = u0(p);
    return $ === l && Or(p.state), $;
  }
  function E0(p, $) {
    return !p || !p.state || p.state.wrap !== 2 ? h : (p.state.gzhead = $, l);
  }
  function U(p, $, a0, I, X, H) {
    if (!p)
      return h;
    var g0 = 1;
    if ($ === g && ($ = 6), I < 0 ? (g0 = 0, I = -I) : I > 15 && (g0 = 2, I -= 16), X < 1 || X > F || a0 !== B || I < 8 || I > 15 || $ < 0 || $ > 9 || H < 0 || H > k)
      return C0(p, h);
    I === 8 && (I = 9);
    var i0 = new W();
    return p.state = i0, i0.strm = p, i0.wrap = g0, i0.gzhead = null, i0.w_bits = I, i0.w_size = 1 << i0.w_bits, i0.w_mask = i0.w_size - 1, i0.hash_bits = X + 7, i0.hash_size = 1 << i0.hash_bits, i0.hash_mask = i0.hash_size - 1, i0.hash_shift = ~~((i0.hash_bits + q - 1) / q), i0.window = new s.Buf8(i0.w_size * 2), i0.head = new s.Buf16(i0.hash_size), i0.prev = new s.Buf16(i0.w_size), i0.lit_bufsize = 1 << X + 6, i0.pending_buf_size = i0.lit_bufsize * 4, i0.pending_buf = new s.Buf8(i0.pending_buf_size), i0.d_buf = 1 * i0.lit_bufsize, i0.l_buf = (1 + 2) * i0.lit_bufsize, i0.level = $, i0.strategy = H, i0.method = a0, h0(p);
  }
  function t0(p, $) {
    return U(p, $, B, G, V, C);
  }
  function Z(p, $) {
    var a0, I, X, H;
    if (!p || !p.state || $ > f || $ < 0)
      return p ? C0(p, h) : h;
    if (I = p.state, !p.output || !p.input && p.avail_in !== 0 || I.status === n0 && $ !== o)
      return C0(p, p.avail_out === 0 ? b : h);
    if (I.strm = p, a0 = I.last_flush, I.last_flush = $, I.status === D)
      if (I.wrap === 2)
        p.adler = 0, y0(I, 31), y0(I, 139), y0(I, 8), I.gzhead ? (y0(
          I,
          (I.gzhead.text ? 1 : 0) + (I.gzhead.hcrc ? 2 : 0) + (I.gzhead.extra ? 4 : 0) + (I.gzhead.name ? 8 : 0) + (I.gzhead.comment ? 16 : 0)
        ), y0(I, I.gzhead.time & 255), y0(I, I.gzhead.time >> 8 & 255), y0(I, I.gzhead.time >> 16 & 255), y0(I, I.gzhead.time >> 24 & 255), y0(I, I.level === 9 ? 2 : I.strategy >= m || I.level < 2 ? 4 : 0), y0(I, I.gzhead.os & 255), I.gzhead.extra && I.gzhead.extra.length && (y0(I, I.gzhead.extra.length & 255), y0(I, I.gzhead.extra.length >> 8 & 255)), I.gzhead.hcrc && (p.adler = a(p.adler, I.pending_buf, I.pending, 0)), I.gzindex = 0, I.status = Y) : (y0(I, 0), y0(I, 0), y0(I, 0), y0(I, 0), y0(I, 0), y0(I, I.level === 9 ? 2 : I.strategy >= m || I.level < 2 ? 4 : 0), y0(I, k0), I.status = l0);
      else {
        var g0 = B + (I.w_bits - 8 << 4) << 8, i0 = -1;
        I.strategy >= m || I.level < 2 ? i0 = 0 : I.level < 6 ? i0 = 1 : I.level === 6 ? i0 = 2 : i0 = 3, g0 |= i0 << 6, I.strstart !== 0 && (g0 |= N), g0 += 31 - g0 % 31, I.status = l0, W0(I, g0), I.strstart !== 0 && (W0(I, p.adler >>> 16), W0(I, p.adler & 65535)), p.adler = 1;
      }
    if (I.status === Y)
      if (I.gzhead.extra) {
        for (X = I.pending; I.gzindex < (I.gzhead.extra.length & 65535) && !(I.pending === I.pending_buf_size && (I.gzhead.hcrc && I.pending > X && (p.adler = a(p.adler, I.pending_buf, I.pending - X, X)), Z0(p), X = I.pending, I.pending === I.pending_buf_size)); )
          y0(I, I.gzhead.extra[I.gzindex] & 255), I.gzindex++;
        I.gzhead.hcrc && I.pending > X && (p.adler = a(p.adler, I.pending_buf, I.pending - X, X)), I.gzindex === I.gzhead.extra.length && (I.gzindex = 0, I.status = z);
      } else
        I.status = z;
    if (I.status === z)
      if (I.gzhead.name) {
        X = I.pending;
        do {
          if (I.pending === I.pending_buf_size && (I.gzhead.hcrc && I.pending > X && (p.adler = a(p.adler, I.pending_buf, I.pending - X, X)), Z0(p), X = I.pending, I.pending === I.pending_buf_size)) {
            H = 1;
            break;
          }
          I.gzindex < I.gzhead.name.length ? H = I.gzhead.name.charCodeAt(I.gzindex++) & 255 : H = 0, y0(I, H);
        } while (H !== 0);
        I.gzhead.hcrc && I.pending > X && (p.adler = a(p.adler, I.pending_buf, I.pending - X, X)), H === 0 && (I.gzindex = 0, I.status = j);
      } else
        I.status = j;
    if (I.status === j)
      if (I.gzhead.comment) {
        X = I.pending;
        do {
          if (I.pending === I.pending_buf_size && (I.gzhead.hcrc && I.pending > X && (p.adler = a(p.adler, I.pending_buf, I.pending - X, X)), Z0(p), X = I.pending, I.pending === I.pending_buf_size)) {
            H = 1;
            break;
          }
          I.gzindex < I.gzhead.comment.length ? H = I.gzhead.comment.charCodeAt(I.gzindex++) & 255 : H = 0, y0(I, H);
        } while (H !== 0);
        I.gzhead.hcrc && I.pending > X && (p.adler = a(p.adler, I.pending_buf, I.pending - X, X)), H === 0 && (I.status = A0);
      } else
        I.status = A0;
    if (I.status === A0 && (I.gzhead.hcrc ? (I.pending + 2 > I.pending_buf_size && Z0(p), I.pending + 2 <= I.pending_buf_size && (y0(I, p.adler & 255), y0(I, p.adler >> 8 & 255), p.adler = 0, I.status = l0)) : I.status = l0), I.pending !== 0) {
      if (Z0(p), p.avail_out === 0)
        return I.last_flush = -1, l;
    } else if (p.avail_in === 0 && q0($) <= q0(a0) && $ !== o)
      return C0(p, b);
    if (I.status === n0 && p.avail_in !== 0)
      return C0(p, b);
    if (p.avail_in !== 0 || I.lookahead !== 0 || $ !== i && I.status !== n0) {
      var o0 = I.strategy === m ? gr(I, $) : I.strategy === w ? br(I, $) : kr[I.level].func(I, $);
      if ((o0 === R0 || o0 === _0) && (I.status = n0), o0 === m0 || o0 === R0)
        return p.avail_out === 0 && (I.last_flush = -1), l;
      if (o0 === G0 && ($ === A ? r._tr_align(I) : $ !== f && (r._tr_stored_block(I, 0, 0, !1), $ === n && (N0(I.head), I.lookahead === 0 && (I.strstart = 0, I.block_start = 0, I.insert = 0))), Z0(p), p.avail_out === 0))
        return I.last_flush = -1, l;
    }
    return $ !== o ? l : I.wrap <= 0 ? c : (I.wrap === 2 ? (y0(I, p.adler & 255), y0(I, p.adler >> 8 & 255), y0(I, p.adler >> 16 & 255), y0(I, p.adler >> 24 & 255), y0(I, p.total_in & 255), y0(I, p.total_in >> 8 & 255), y0(I, p.total_in >> 16 & 255), y0(I, p.total_in >> 24 & 255)) : (W0(I, p.adler >>> 16), W0(I, p.adler & 65535)), Z0(p), I.wrap > 0 && (I.wrap = -I.wrap), I.pending !== 0 ? l : c);
  }
  function f0(p) {
    var $;
    return !p || !p.state ? h : ($ = p.state.status, $ !== D && $ !== Y && $ !== z && $ !== j && $ !== A0 && $ !== l0 && $ !== n0 ? C0(p, h) : (p.state = null, $ === l0 ? C0(p, d) : l));
  }
  function S0(p, $) {
    var a0 = $.length, I, X, H, g0, i0, o0, c0, B0;
    if (!p || !p.state || (I = p.state, g0 = I.wrap, g0 === 2 || g0 === 1 && I.status !== D || I.lookahead))
      return h;
    for (g0 === 1 && (p.adler = e(p.adler, $, a0, 0)), I.wrap = 0, a0 >= I.w_size && (g0 === 0 && (N0(I.head), I.strstart = 0, I.block_start = 0, I.insert = 0), B0 = new s.Buf8(I.w_size), s.arraySet(B0, $, a0 - I.w_size, I.w_size, 0), $ = B0, a0 = I.w_size), i0 = p.avail_in, o0 = p.next_in, c0 = p.input, p.avail_in = a0, p.next_in = 0, p.input = $, j0(I); I.lookahead >= q; ) {
      X = I.strstart, H = I.lookahead - (q - 1);
      do
        I.ins_h = (I.ins_h << I.hash_shift ^ I.window[X + q - 1]) & I.hash_mask, I.prev[X & I.w_mask] = I.head[I.ins_h], I.head[I.ins_h] = X, X++;
      while (--H);
      I.strstart = X, I.lookahead = q - 1, j0(I);
    }
    return I.strstart += I.lookahead, I.block_start = I.strstart, I.insert = I.lookahead, I.lookahead = 0, I.match_length = I.prev_length = q - 1, I.match_available = 0, p.next_in = o0, p.input = c0, p.avail_in = i0, I.wrap = g0, l;
  }
  return Ve.deflateInit = t0, Ve.deflateInit2 = U, Ve.deflateReset = h0, Ve.deflateResetKeep = u0, Ve.deflateSetHeader = E0, Ve.deflate = Z, Ve.deflateEnd = f0, Ve.deflateSetDictionary = S0, Ve.deflateInfo = "pako deflate (from Nodeca project)", Ve;
}
var Ai = {}, b4;
function Td() {
  if (b4)
    return Ai;
  b4 = 1;
  var s = ai(), r = !0, e = !0;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch {
    r = !1;
  }
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch {
    e = !1;
  }
  for (var a = new s.Buf8(256), t = 0; t < 256; t++)
    a[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
  a[254] = a[254] = 1, Ai.string2buf = function(A) {
    var n, o, f, l, c, h = A.length, d = 0;
    for (l = 0; l < h; l++)
      o = A.charCodeAt(l), (o & 64512) === 55296 && l + 1 < h && (f = A.charCodeAt(l + 1), (f & 64512) === 56320 && (o = 65536 + (o - 55296 << 10) + (f - 56320), l++)), d += o < 128 ? 1 : o < 2048 ? 2 : o < 65536 ? 3 : 4;
    for (n = new s.Buf8(d), c = 0, l = 0; c < d; l++)
      o = A.charCodeAt(l), (o & 64512) === 55296 && l + 1 < h && (f = A.charCodeAt(l + 1), (f & 64512) === 56320 && (o = 65536 + (o - 55296 << 10) + (f - 56320), l++)), o < 128 ? n[c++] = o : o < 2048 ? (n[c++] = 192 | o >>> 6, n[c++] = 128 | o & 63) : o < 65536 ? (n[c++] = 224 | o >>> 12, n[c++] = 128 | o >>> 6 & 63, n[c++] = 128 | o & 63) : (n[c++] = 240 | o >>> 18, n[c++] = 128 | o >>> 12 & 63, n[c++] = 128 | o >>> 6 & 63, n[c++] = 128 | o & 63);
    return n;
  };
  function i(A, n) {
    if (n < 65534 && (A.subarray && e || !A.subarray && r))
      return String.fromCharCode.apply(null, s.shrinkBuf(A, n));
    for (var o = "", f = 0; f < n; f++)
      o += String.fromCharCode(A[f]);
    return o;
  }
  return Ai.buf2binstring = function(A) {
    return i(A, A.length);
  }, Ai.binstring2buf = function(A) {
    for (var n = new s.Buf8(A.length), o = 0, f = n.length; o < f; o++)
      n[o] = A.charCodeAt(o);
    return n;
  }, Ai.buf2string = function(A, n) {
    var o, f, l, c, h = n || A.length, d = new Array(h * 2);
    for (f = 0, o = 0; o < h; ) {
      if (l = A[o++], l < 128) {
        d[f++] = l;
        continue;
      }
      if (c = a[l], c > 4) {
        d[f++] = 65533, o += c - 1;
        continue;
      }
      for (l &= c === 2 ? 31 : c === 3 ? 15 : 7; c > 1 && o < h; )
        l = l << 6 | A[o++] & 63, c--;
      if (c > 1) {
        d[f++] = 65533;
        continue;
      }
      l < 65536 ? d[f++] = l : (l -= 65536, d[f++] = 55296 | l >> 10 & 1023, d[f++] = 56320 | l & 1023);
    }
    return i(d, f);
  }, Ai.utf8border = function(A, n) {
    var o;
    for (n = n || A.length, n > A.length && (n = A.length), o = n - 1; o >= 0 && (A[o] & 192) === 128; )
      o--;
    return o < 0 || o === 0 ? n : o + a[A[o]] > n ? o : n;
  }, Ai;
}
var Mu, g4;
function Xd() {
  if (g4)
    return Mu;
  g4 = 1;
  function s() {
    this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
  }
  return Mu = s, Mu;
}
var v4;
function k5() {
  if (v4)
    return S2;
  v4 = 1;
  var s = m5(), r = ai(), e = Td(), a = ph(), t = Xd(), i = Object.prototype.toString, A = 0, n = 4, o = 0, f = 1, l = 2, c = -1, h = 0, d = 8;
  function b(w) {
    if (!(this instanceof b))
      return new b(w);
    this.options = r.assign({
      level: c,
      method: d,
      chunkSize: 16384,
      windowBits: 15,
      memLevel: 8,
      strategy: h,
      to: ""
    }, w || {});
    var k = this.options;
    k.raw && k.windowBits > 0 ? k.windowBits = -k.windowBits : k.gzip && k.windowBits > 0 && k.windowBits < 16 && (k.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new t(), this.strm.avail_out = 0;
    var C = s.deflateInit2(
      this.strm,
      k.level,
      k.method,
      k.windowBits,
      k.memLevel,
      k.strategy
    );
    if (C !== o)
      throw new Error(a[C]);
    if (k.header && s.deflateSetHeader(this.strm, k.header), k.dictionary) {
      var y;
      if (typeof k.dictionary == "string" ? y = e.string2buf(k.dictionary) : i.call(k.dictionary) === "[object ArrayBuffer]" ? y = new Uint8Array(k.dictionary) : y = k.dictionary, C = s.deflateSetDictionary(this.strm, y), C !== o)
        throw new Error(a[C]);
      this._dict_set = !0;
    }
  }
  b.prototype.push = function(w, k) {
    var C = this.strm, y = this.options.chunkSize, B, F;
    if (this.ended)
      return !1;
    F = k === ~~k ? k : k === !0 ? n : A, typeof w == "string" ? C.input = e.string2buf(w) : i.call(w) === "[object ArrayBuffer]" ? C.input = new Uint8Array(w) : C.input = w, C.next_in = 0, C.avail_in = C.input.length;
    do {
      if (C.avail_out === 0 && (C.output = new r.Buf8(y), C.next_out = 0, C.avail_out = y), B = s.deflate(C, F), B !== f && B !== o)
        return this.onEnd(B), this.ended = !0, !1;
      (C.avail_out === 0 || C.avail_in === 0 && (F === n || F === l)) && (this.options.to === "string" ? this.onData(e.buf2binstring(r.shrinkBuf(C.output, C.next_out))) : this.onData(r.shrinkBuf(C.output, C.next_out)));
    } while ((C.avail_in > 0 || C.avail_out === 0) && B !== f);
    return F === n ? (B = s.deflateEnd(this.strm), this.onEnd(B), this.ended = !0, B === o) : (F === l && (this.onEnd(o), C.avail_out = 0), !0);
  }, b.prototype.onData = function(w) {
    this.chunks.push(w);
  }, b.prototype.onEnd = function(w) {
    w === o && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = r.flattenChunks(this.chunks)), this.chunks = [], this.err = w, this.msg = this.strm.msg;
  };
  function g(w, k) {
    var C = new b(k);
    if (C.push(w, !0), C.err)
      throw C.msg || a[C.err];
    return C.result;
  }
  function v(w, k) {
    return k = k || {}, k.raw = !0, g(w, k);
  }
  function m(w, k) {
    return k = k || {}, k.gzip = !0, g(w, k);
  }
  return S2.Deflate = b, S2.deflate = g, S2.deflateRaw = v, S2.gzip = m, S2;
}
var F2 = {}, We = {}, Du, p4;
function w5() {
  if (p4)
    return Du;
  p4 = 1;
  var s = 30, r = 12;
  return Du = function(a, t) {
    var i, A, n, o, f, l, c, h, d, b, g, v, m, w, k, C, y, B, F, G, V, M, T, Q, L;
    i = a.state, A = a.next_in, Q = a.input, n = A + (a.avail_in - 5), o = a.next_out, L = a.output, f = o - (t - a.avail_out), l = o + (a.avail_out - 257), c = i.dmax, h = i.wsize, d = i.whave, b = i.wnext, g = i.window, v = i.hold, m = i.bits, w = i.lencode, k = i.distcode, C = (1 << i.lenbits) - 1, y = (1 << i.distbits) - 1;
    r:
      do {
        m < 15 && (v += Q[A++] << m, m += 8, v += Q[A++] << m, m += 8), B = w[v & C];
        e:
          for (; ; ) {
            if (F = B >>> 24, v >>>= F, m -= F, F = B >>> 16 & 255, F === 0)
              L[o++] = B & 65535;
            else if (F & 16) {
              G = B & 65535, F &= 15, F && (m < F && (v += Q[A++] << m, m += 8), G += v & (1 << F) - 1, v >>>= F, m -= F), m < 15 && (v += Q[A++] << m, m += 8, v += Q[A++] << m, m += 8), B = k[v & y];
              a:
                for (; ; ) {
                  if (F = B >>> 24, v >>>= F, m -= F, F = B >>> 16 & 255, F & 16) {
                    if (V = B & 65535, F &= 15, m < F && (v += Q[A++] << m, m += 8, m < F && (v += Q[A++] << m, m += 8)), V += v & (1 << F) - 1, V > c) {
                      a.msg = "invalid distance too far back", i.mode = s;
                      break r;
                    }
                    if (v >>>= F, m -= F, F = o - f, V > F) {
                      if (F = V - F, F > d && i.sane) {
                        a.msg = "invalid distance too far back", i.mode = s;
                        break r;
                      }
                      if (M = 0, T = g, b === 0) {
                        if (M += h - F, F < G) {
                          G -= F;
                          do
                            L[o++] = g[M++];
                          while (--F);
                          M = o - V, T = L;
                        }
                      } else if (b < F) {
                        if (M += h + b - F, F -= b, F < G) {
                          G -= F;
                          do
                            L[o++] = g[M++];
                          while (--F);
                          if (M = 0, b < G) {
                            F = b, G -= F;
                            do
                              L[o++] = g[M++];
                            while (--F);
                            M = o - V, T = L;
                          }
                        }
                      } else if (M += b - F, F < G) {
                        G -= F;
                        do
                          L[o++] = g[M++];
                        while (--F);
                        M = o - V, T = L;
                      }
                      for (; G > 2; )
                        L[o++] = T[M++], L[o++] = T[M++], L[o++] = T[M++], G -= 3;
                      G && (L[o++] = T[M++], G > 1 && (L[o++] = T[M++]));
                    } else {
                      M = o - V;
                      do
                        L[o++] = L[M++], L[o++] = L[M++], L[o++] = L[M++], G -= 3;
                      while (G > 2);
                      G && (L[o++] = L[M++], G > 1 && (L[o++] = L[M++]));
                    }
                  } else if (F & 64) {
                    a.msg = "invalid distance code", i.mode = s;
                    break r;
                  } else {
                    B = k[(B & 65535) + (v & (1 << F) - 1)];
                    continue a;
                  }
                  break;
                }
            } else if (F & 64)
              if (F & 32) {
                i.mode = r;
                break r;
              } else {
                a.msg = "invalid literal/length code", i.mode = s;
                break r;
              }
            else {
              B = w[(B & 65535) + (v & (1 << F) - 1)];
              continue e;
            }
            break;
          }
      } while (A < n && o < l);
    G = m >> 3, A -= G, m -= G << 3, v &= (1 << m) - 1, a.next_in = A, a.next_out = o, a.avail_in = A < n ? 5 + (n - A) : 5 - (A - n), a.avail_out = o < l ? 257 + (l - o) : 257 - (o - l), i.hold = v, i.bits = m;
  }, Du;
}
var Nu, m4;
function y5() {
  if (m4)
    return Nu;
  m4 = 1;
  var s = ai(), r = 15, e = 852, a = 592, t = 0, i = 1, A = 2, n = [
    /* Length codes 257..285 base */
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
  ], o = [
    /* Length codes 257..285 extra */
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    16,
    72,
    78
  ], f = [
    /* Distance codes 0..29 base */
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577,
    0,
    0
  ], l = [
    /* Distance codes 0..29 extra */
    16,
    16,
    16,
    16,
    17,
    17,
    18,
    18,
    19,
    19,
    20,
    20,
    21,
    21,
    22,
    22,
    23,
    23,
    24,
    24,
    25,
    25,
    26,
    26,
    27,
    27,
    28,
    28,
    29,
    29,
    64,
    64
  ];
  return Nu = function(h, d, b, g, v, m, w, k) {
    var C = k.bits, y = 0, B = 0, F = 0, G = 0, V = 0, M = 0, T = 0, Q = 0, L = 0, J = 0, r0, e0, q, _, x, N = null, D = 0, Y, z = new s.Buf16(r + 1), j = new s.Buf16(r + 1), A0 = null, l0 = 0, n0, m0, G0;
    for (y = 0; y <= r; y++)
      z[y] = 0;
    for (B = 0; B < g; B++)
      z[d[b + B]]++;
    for (V = C, G = r; G >= 1 && z[G] === 0; G--)
      ;
    if (V > G && (V = G), G === 0)
      return v[m++] = 1 << 24 | 64 << 16 | 0, v[m++] = 1 << 24 | 64 << 16 | 0, k.bits = 1, 0;
    for (F = 1; F < G && z[F] === 0; F++)
      ;
    for (V < F && (V = F), Q = 1, y = 1; y <= r; y++)
      if (Q <<= 1, Q -= z[y], Q < 0)
        return -1;
    if (Q > 0 && (h === t || G !== 1))
      return -1;
    for (j[1] = 0, y = 1; y < r; y++)
      j[y + 1] = j[y] + z[y];
    for (B = 0; B < g; B++)
      d[b + B] !== 0 && (w[j[d[b + B]]++] = B);
    if (h === t ? (N = A0 = w, Y = 19) : h === i ? (N = n, D -= 257, A0 = o, l0 -= 257, Y = 256) : (N = f, A0 = l, Y = -1), J = 0, B = 0, y = F, x = m, M = V, T = 0, q = -1, L = 1 << V, _ = L - 1, h === i && L > e || h === A && L > a)
      return 1;
    for (; ; ) {
      n0 = y - T, w[B] < Y ? (m0 = 0, G0 = w[B]) : w[B] > Y ? (m0 = A0[l0 + w[B]], G0 = N[D + w[B]]) : (m0 = 32 + 64, G0 = 0), r0 = 1 << y - T, e0 = 1 << M, F = e0;
      do
        e0 -= r0, v[x + (J >> T) + e0] = n0 << 24 | m0 << 16 | G0 | 0;
      while (e0 !== 0);
      for (r0 = 1 << y - 1; J & r0; )
        r0 >>= 1;
      if (r0 !== 0 ? (J &= r0 - 1, J += r0) : J = 0, B++, --z[y] === 0) {
        if (y === G)
          break;
        y = d[b + w[B]];
      }
      if (y > V && (J & _) !== q) {
        for (T === 0 && (T = V), x += F, M = y - T, Q = 1 << M; M + T < G && (Q -= z[M + T], !(Q <= 0)); )
          M++, Q <<= 1;
        if (L += 1 << M, h === i && L > e || h === A && L > a)
          return 1;
        q = J & _, v[q] = V << 24 | M << 16 | x - m | 0;
      }
    }
    return J !== 0 && (v[x + J] = y - T << 24 | 64 << 16 | 0), k.bits = V, 0;
  }, Nu;
}
var k4;
function _5() {
  if (k4)
    return We;
  k4 = 1;
  var s = ai(), r = xd(), e = Gd(), a = w5(), t = y5(), i = 0, A = 1, n = 2, o = 4, f = 5, l = 6, c = 0, h = 1, d = 2, b = -2, g = -3, v = -4, m = -5, w = 8, k = 1, C = 2, y = 3, B = 4, F = 5, G = 6, V = 7, M = 8, T = 9, Q = 10, L = 11, J = 12, r0 = 13, e0 = 14, q = 15, _ = 16, x = 17, N = 18, D = 19, Y = 20, z = 21, j = 22, A0 = 23, l0 = 24, n0 = 25, m0 = 26, G0 = 27, R0 = 28, _0 = 29, k0 = 30, C0 = 31, q0 = 32, N0 = 852, Z0 = 592, d0 = 15, y0 = d0;
  function W0(U) {
    return (U >>> 24 & 255) + (U >>> 8 & 65280) + ((U & 65280) << 8) + ((U & 255) << 24);
  }
  function D0() {
    this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new s.Buf16(320), this.work = new s.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
  }
  function V0(U) {
    var t0;
    return !U || !U.state ? b : (t0 = U.state, U.total_in = U.total_out = t0.total = 0, U.msg = "", t0.wrap && (U.adler = t0.wrap & 1), t0.mode = k, t0.last = 0, t0.havedict = 0, t0.dmax = 32768, t0.head = null, t0.hold = 0, t0.bits = 0, t0.lencode = t0.lendyn = new s.Buf32(N0), t0.distcode = t0.distdyn = new s.Buf32(Z0), t0.sane = 1, t0.back = -1, c);
  }
  function j0(U) {
    var t0;
    return !U || !U.state ? b : (t0 = U.state, t0.wsize = 0, t0.whave = 0, t0.wnext = 0, V0(U));
  }
  function Ar(U, t0) {
    var Z, f0;
    return !U || !U.state || (f0 = U.state, t0 < 0 ? (Z = 0, t0 = -t0) : (Z = (t0 >> 4) + 1, t0 < 48 && (t0 &= 15)), t0 && (t0 < 8 || t0 > 15)) ? b : (f0.window !== null && f0.wbits !== t0 && (f0.window = null), f0.wrap = Z, f0.wbits = t0, j0(U));
  }
  function sr(U, t0) {
    var Z, f0;
    return U ? (f0 = new D0(), U.state = f0, f0.window = null, Z = Ar(U, t0), Z !== c && (U.state = null), Z) : b;
  }
  function fr(U) {
    return sr(U, y0);
  }
  var br = !0, gr, lr;
  function kr(U) {
    if (br) {
      var t0;
      for (gr = new s.Buf32(512), lr = new s.Buf32(32), t0 = 0; t0 < 144; )
        U.lens[t0++] = 8;
      for (; t0 < 256; )
        U.lens[t0++] = 9;
      for (; t0 < 280; )
        U.lens[t0++] = 7;
      for (; t0 < 288; )
        U.lens[t0++] = 8;
      for (t(A, U.lens, 0, 288, gr, 0, U.work, { bits: 9 }), t0 = 0; t0 < 32; )
        U.lens[t0++] = 5;
      t(n, U.lens, 0, 32, lr, 0, U.work, { bits: 5 }), br = !1;
    }
    U.lencode = gr, U.lenbits = 9, U.distcode = lr, U.distbits = 5;
  }
  function Or(U, t0, Z, f0) {
    var S0, p = U.state;
    return p.window === null && (p.wsize = 1 << p.wbits, p.wnext = 0, p.whave = 0, p.window = new s.Buf8(p.wsize)), f0 >= p.wsize ? (s.arraySet(p.window, t0, Z - p.wsize, p.wsize, 0), p.wnext = 0, p.whave = p.wsize) : (S0 = p.wsize - p.wnext, S0 > f0 && (S0 = f0), s.arraySet(p.window, t0, Z - f0, S0, p.wnext), f0 -= S0, f0 ? (s.arraySet(p.window, t0, Z - f0, f0, 0), p.wnext = f0, p.whave = p.wsize) : (p.wnext += S0, p.wnext === p.wsize && (p.wnext = 0), p.whave < p.wsize && (p.whave += S0))), 0;
  }
  function W(U, t0) {
    var Z, f0, S0, p, $, a0, I, X, H, g0, i0, o0, c0, B0, X0 = 0, x0, L0, ir, U0, _r, O, s0, p0, I0 = new s.Buf8(4), H0, z0, J0 = (
      /* permutation of code lengths */
      [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
    );
    if (!U || !U.state || !U.output || !U.input && U.avail_in !== 0)
      return b;
    Z = U.state, Z.mode === J && (Z.mode = r0), $ = U.next_out, S0 = U.output, I = U.avail_out, p = U.next_in, f0 = U.input, a0 = U.avail_in, X = Z.hold, H = Z.bits, g0 = a0, i0 = I, p0 = c;
    r:
      for (; ; )
        switch (Z.mode) {
          case k:
            if (Z.wrap === 0) {
              Z.mode = r0;
              break;
            }
            for (; H < 16; ) {
              if (a0 === 0)
                break r;
              a0--, X += f0[p++] << H, H += 8;
            }
            if (Z.wrap & 2 && X === 35615) {
              Z.check = 0, I0[0] = X & 255, I0[1] = X >>> 8 & 255, Z.check = e(Z.check, I0, 2, 0), X = 0, H = 0, Z.mode = C;
              break;
            }
            if (Z.flags = 0, Z.head && (Z.head.done = !1), !(Z.wrap & 1) || /* check if zlib header allowed */
            (((X & 255) << 8) + (X >> 8)) % 31) {
              U.msg = "incorrect header check", Z.mode = k0;
              break;
            }
            if ((X & 15) !== w) {
              U.msg = "unknown compression method", Z.mode = k0;
              break;
            }
            if (X >>>= 4, H -= 4, s0 = (X & 15) + 8, Z.wbits === 0)
              Z.wbits = s0;
            else if (s0 > Z.wbits) {
              U.msg = "invalid window size", Z.mode = k0;
              break;
            }
            Z.dmax = 1 << s0, U.adler = Z.check = 1, Z.mode = X & 512 ? Q : J, X = 0, H = 0;
            break;
          case C:
            for (; H < 16; ) {
              if (a0 === 0)
                break r;
              a0--, X += f0[p++] << H, H += 8;
            }
            if (Z.flags = X, (Z.flags & 255) !== w) {
              U.msg = "unknown compression method", Z.mode = k0;
              break;
            }
            if (Z.flags & 57344) {
              U.msg = "unknown header flags set", Z.mode = k0;
              break;
            }
            Z.head && (Z.head.text = X >> 8 & 1), Z.flags & 512 && (I0[0] = X & 255, I0[1] = X >>> 8 & 255, Z.check = e(Z.check, I0, 2, 0)), X = 0, H = 0, Z.mode = y;
          case y:
            for (; H < 32; ) {
              if (a0 === 0)
                break r;
              a0--, X += f0[p++] << H, H += 8;
            }
            Z.head && (Z.head.time = X), Z.flags & 512 && (I0[0] = X & 255, I0[1] = X >>> 8 & 255, I0[2] = X >>> 16 & 255, I0[3] = X >>> 24 & 255, Z.check = e(Z.check, I0, 4, 0)), X = 0, H = 0, Z.mode = B;
          case B:
            for (; H < 16; ) {
              if (a0 === 0)
                break r;
              a0--, X += f0[p++] << H, H += 8;
            }
            Z.head && (Z.head.xflags = X & 255, Z.head.os = X >> 8), Z.flags & 512 && (I0[0] = X & 255, I0[1] = X >>> 8 & 255, Z.check = e(Z.check, I0, 2, 0)), X = 0, H = 0, Z.mode = F;
          case F:
            if (Z.flags & 1024) {
              for (; H < 16; ) {
                if (a0 === 0)
                  break r;
                a0--, X += f0[p++] << H, H += 8;
              }
              Z.length = X, Z.head && (Z.head.extra_len = X), Z.flags & 512 && (I0[0] = X & 255, I0[1] = X >>> 8 & 255, Z.check = e(Z.check, I0, 2, 0)), X = 0, H = 0;
            } else
              Z.head && (Z.head.extra = null);
            Z.mode = G;
          case G:
            if (Z.flags & 1024 && (o0 = Z.length, o0 > a0 && (o0 = a0), o0 && (Z.head && (s0 = Z.head.extra_len - Z.length, Z.head.extra || (Z.head.extra = new Array(Z.head.extra_len)), s.arraySet(
              Z.head.extra,
              f0,
              p,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              o0,
              /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
              s0
            )), Z.flags & 512 && (Z.check = e(Z.check, f0, o0, p)), a0 -= o0, p += o0, Z.length -= o0), Z.length))
              break r;
            Z.length = 0, Z.mode = V;
          case V:
            if (Z.flags & 2048) {
              if (a0 === 0)
                break r;
              o0 = 0;
              do
                s0 = f0[p + o0++], Z.head && s0 && Z.length < 65536 && (Z.head.name += String.fromCharCode(s0));
              while (s0 && o0 < a0);
              if (Z.flags & 512 && (Z.check = e(Z.check, f0, o0, p)), a0 -= o0, p += o0, s0)
                break r;
            } else
              Z.head && (Z.head.name = null);
            Z.length = 0, Z.mode = M;
          case M:
            if (Z.flags & 4096) {
              if (a0 === 0)
                break r;
              o0 = 0;
              do
                s0 = f0[p + o0++], Z.head && s0 && Z.length < 65536 && (Z.head.comment += String.fromCharCode(s0));
              while (s0 && o0 < a0);
              if (Z.flags & 512 && (Z.check = e(Z.check, f0, o0, p)), a0 -= o0, p += o0, s0)
                break r;
            } else
              Z.head && (Z.head.comment = null);
            Z.mode = T;
          case T:
            if (Z.flags & 512) {
              for (; H < 16; ) {
                if (a0 === 0)
                  break r;
                a0--, X += f0[p++] << H, H += 8;
              }
              if (X !== (Z.check & 65535)) {
                U.msg = "header crc mismatch", Z.mode = k0;
                break;
              }
              X = 0, H = 0;
            }
            Z.head && (Z.head.hcrc = Z.flags >> 9 & 1, Z.head.done = !0), U.adler = Z.check = 0, Z.mode = J;
            break;
          case Q:
            for (; H < 32; ) {
              if (a0 === 0)
                break r;
              a0--, X += f0[p++] << H, H += 8;
            }
            U.adler = Z.check = W0(X), X = 0, H = 0, Z.mode = L;
          case L:
            if (Z.havedict === 0)
              return U.next_out = $, U.avail_out = I, U.next_in = p, U.avail_in = a0, Z.hold = X, Z.bits = H, d;
            U.adler = Z.check = 1, Z.mode = J;
          case J:
            if (t0 === f || t0 === l)
              break r;
          case r0:
            if (Z.last) {
              X >>>= H & 7, H -= H & 7, Z.mode = G0;
              break;
            }
            for (; H < 3; ) {
              if (a0 === 0)
                break r;
              a0--, X += f0[p++] << H, H += 8;
            }
            switch (Z.last = X & 1, X >>>= 1, H -= 1, X & 3) {
              case 0:
                Z.mode = e0;
                break;
              case 1:
                if (kr(Z), Z.mode = Y, t0 === l) {
                  X >>>= 2, H -= 2;
                  break r;
                }
                break;
              case 2:
                Z.mode = x;
                break;
              case 3:
                U.msg = "invalid block type", Z.mode = k0;
            }
            X >>>= 2, H -= 2;
            break;
          case e0:
            for (X >>>= H & 7, H -= H & 7; H < 32; ) {
              if (a0 === 0)
                break r;
              a0--, X += f0[p++] << H, H += 8;
            }
            if ((X & 65535) !== (X >>> 16 ^ 65535)) {
              U.msg = "invalid stored block lengths", Z.mode = k0;
              break;
            }
            if (Z.length = X & 65535, X = 0, H = 0, Z.mode = q, t0 === l)
              break r;
          case q:
            Z.mode = _;
          case _:
            if (o0 = Z.length, o0) {
              if (o0 > a0 && (o0 = a0), o0 > I && (o0 = I), o0 === 0)
                break r;
              s.arraySet(S0, f0, p, o0, $), a0 -= o0, p += o0, I -= o0, $ += o0, Z.length -= o0;
              break;
            }
            Z.mode = J;
            break;
          case x:
            for (; H < 14; ) {
              if (a0 === 0)
                break r;
              a0--, X += f0[p++] << H, H += 8;
            }
            if (Z.nlen = (X & 31) + 257, X >>>= 5, H -= 5, Z.ndist = (X & 31) + 1, X >>>= 5, H -= 5, Z.ncode = (X & 15) + 4, X >>>= 4, H -= 4, Z.nlen > 286 || Z.ndist > 30) {
              U.msg = "too many length or distance symbols", Z.mode = k0;
              break;
            }
            Z.have = 0, Z.mode = N;
          case N:
            for (; Z.have < Z.ncode; ) {
              for (; H < 3; ) {
                if (a0 === 0)
                  break r;
                a0--, X += f0[p++] << H, H += 8;
              }
              Z.lens[J0[Z.have++]] = X & 7, X >>>= 3, H -= 3;
            }
            for (; Z.have < 19; )
              Z.lens[J0[Z.have++]] = 0;
            if (Z.lencode = Z.lendyn, Z.lenbits = 7, H0 = { bits: Z.lenbits }, p0 = t(i, Z.lens, 0, 19, Z.lencode, 0, Z.work, H0), Z.lenbits = H0.bits, p0) {
              U.msg = "invalid code lengths set", Z.mode = k0;
              break;
            }
            Z.have = 0, Z.mode = D;
          case D:
            for (; Z.have < Z.nlen + Z.ndist; ) {
              for (; X0 = Z.lencode[X & (1 << Z.lenbits) - 1], x0 = X0 >>> 24, L0 = X0 >>> 16 & 255, ir = X0 & 65535, !(x0 <= H); ) {
                if (a0 === 0)
                  break r;
                a0--, X += f0[p++] << H, H += 8;
              }
              if (ir < 16)
                X >>>= x0, H -= x0, Z.lens[Z.have++] = ir;
              else {
                if (ir === 16) {
                  for (z0 = x0 + 2; H < z0; ) {
                    if (a0 === 0)
                      break r;
                    a0--, X += f0[p++] << H, H += 8;
                  }
                  if (X >>>= x0, H -= x0, Z.have === 0) {
                    U.msg = "invalid bit length repeat", Z.mode = k0;
                    break;
                  }
                  s0 = Z.lens[Z.have - 1], o0 = 3 + (X & 3), X >>>= 2, H -= 2;
                } else if (ir === 17) {
                  for (z0 = x0 + 3; H < z0; ) {
                    if (a0 === 0)
                      break r;
                    a0--, X += f0[p++] << H, H += 8;
                  }
                  X >>>= x0, H -= x0, s0 = 0, o0 = 3 + (X & 7), X >>>= 3, H -= 3;
                } else {
                  for (z0 = x0 + 7; H < z0; ) {
                    if (a0 === 0)
                      break r;
                    a0--, X += f0[p++] << H, H += 8;
                  }
                  X >>>= x0, H -= x0, s0 = 0, o0 = 11 + (X & 127), X >>>= 7, H -= 7;
                }
                if (Z.have + o0 > Z.nlen + Z.ndist) {
                  U.msg = "invalid bit length repeat", Z.mode = k0;
                  break;
                }
                for (; o0--; )
                  Z.lens[Z.have++] = s0;
              }
            }
            if (Z.mode === k0)
              break;
            if (Z.lens[256] === 0) {
              U.msg = "invalid code -- missing end-of-block", Z.mode = k0;
              break;
            }
            if (Z.lenbits = 9, H0 = { bits: Z.lenbits }, p0 = t(A, Z.lens, 0, Z.nlen, Z.lencode, 0, Z.work, H0), Z.lenbits = H0.bits, p0) {
              U.msg = "invalid literal/lengths set", Z.mode = k0;
              break;
            }
            if (Z.distbits = 6, Z.distcode = Z.distdyn, H0 = { bits: Z.distbits }, p0 = t(n, Z.lens, Z.nlen, Z.ndist, Z.distcode, 0, Z.work, H0), Z.distbits = H0.bits, p0) {
              U.msg = "invalid distances set", Z.mode = k0;
              break;
            }
            if (Z.mode = Y, t0 === l)
              break r;
          case Y:
            Z.mode = z;
          case z:
            if (a0 >= 6 && I >= 258) {
              U.next_out = $, U.avail_out = I, U.next_in = p, U.avail_in = a0, Z.hold = X, Z.bits = H, a(U, i0), $ = U.next_out, S0 = U.output, I = U.avail_out, p = U.next_in, f0 = U.input, a0 = U.avail_in, X = Z.hold, H = Z.bits, Z.mode === J && (Z.back = -1);
              break;
            }
            for (Z.back = 0; X0 = Z.lencode[X & (1 << Z.lenbits) - 1], x0 = X0 >>> 24, L0 = X0 >>> 16 & 255, ir = X0 & 65535, !(x0 <= H); ) {
              if (a0 === 0)
                break r;
              a0--, X += f0[p++] << H, H += 8;
            }
            if (L0 && !(L0 & 240)) {
              for (U0 = x0, _r = L0, O = ir; X0 = Z.lencode[O + ((X & (1 << U0 + _r) - 1) >> U0)], x0 = X0 >>> 24, L0 = X0 >>> 16 & 255, ir = X0 & 65535, !(U0 + x0 <= H); ) {
                if (a0 === 0)
                  break r;
                a0--, X += f0[p++] << H, H += 8;
              }
              X >>>= U0, H -= U0, Z.back += U0;
            }
            if (X >>>= x0, H -= x0, Z.back += x0, Z.length = ir, L0 === 0) {
              Z.mode = m0;
              break;
            }
            if (L0 & 32) {
              Z.back = -1, Z.mode = J;
              break;
            }
            if (L0 & 64) {
              U.msg = "invalid literal/length code", Z.mode = k0;
              break;
            }
            Z.extra = L0 & 15, Z.mode = j;
          case j:
            if (Z.extra) {
              for (z0 = Z.extra; H < z0; ) {
                if (a0 === 0)
                  break r;
                a0--, X += f0[p++] << H, H += 8;
              }
              Z.length += X & (1 << Z.extra) - 1, X >>>= Z.extra, H -= Z.extra, Z.back += Z.extra;
            }
            Z.was = Z.length, Z.mode = A0;
          case A0:
            for (; X0 = Z.distcode[X & (1 << Z.distbits) - 1], x0 = X0 >>> 24, L0 = X0 >>> 16 & 255, ir = X0 & 65535, !(x0 <= H); ) {
              if (a0 === 0)
                break r;
              a0--, X += f0[p++] << H, H += 8;
            }
            if (!(L0 & 240)) {
              for (U0 = x0, _r = L0, O = ir; X0 = Z.distcode[O + ((X & (1 << U0 + _r) - 1) >> U0)], x0 = X0 >>> 24, L0 = X0 >>> 16 & 255, ir = X0 & 65535, !(U0 + x0 <= H); ) {
                if (a0 === 0)
                  break r;
                a0--, X += f0[p++] << H, H += 8;
              }
              X >>>= U0, H -= U0, Z.back += U0;
            }
            if (X >>>= x0, H -= x0, Z.back += x0, L0 & 64) {
              U.msg = "invalid distance code", Z.mode = k0;
              break;
            }
            Z.offset = ir, Z.extra = L0 & 15, Z.mode = l0;
          case l0:
            if (Z.extra) {
              for (z0 = Z.extra; H < z0; ) {
                if (a0 === 0)
                  break r;
                a0--, X += f0[p++] << H, H += 8;
              }
              Z.offset += X & (1 << Z.extra) - 1, X >>>= Z.extra, H -= Z.extra, Z.back += Z.extra;
            }
            if (Z.offset > Z.dmax) {
              U.msg = "invalid distance too far back", Z.mode = k0;
              break;
            }
            Z.mode = n0;
          case n0:
            if (I === 0)
              break r;
            if (o0 = i0 - I, Z.offset > o0) {
              if (o0 = Z.offset - o0, o0 > Z.whave && Z.sane) {
                U.msg = "invalid distance too far back", Z.mode = k0;
                break;
              }
              o0 > Z.wnext ? (o0 -= Z.wnext, c0 = Z.wsize - o0) : c0 = Z.wnext - o0, o0 > Z.length && (o0 = Z.length), B0 = Z.window;
            } else
              B0 = S0, c0 = $ - Z.offset, o0 = Z.length;
            o0 > I && (o0 = I), I -= o0, Z.length -= o0;
            do
              S0[$++] = B0[c0++];
            while (--o0);
            Z.length === 0 && (Z.mode = z);
            break;
          case m0:
            if (I === 0)
              break r;
            S0[$++] = Z.length, I--, Z.mode = z;
            break;
          case G0:
            if (Z.wrap) {
              for (; H < 32; ) {
                if (a0 === 0)
                  break r;
                a0--, X |= f0[p++] << H, H += 8;
              }
              if (i0 -= I, U.total_out += i0, Z.total += i0, i0 && (U.adler = Z.check = /*UPDATE(state.check, put - _out, _out);*/
              Z.flags ? e(Z.check, S0, i0, $ - i0) : r(Z.check, S0, i0, $ - i0)), i0 = I, (Z.flags ? X : W0(X)) !== Z.check) {
                U.msg = "incorrect data check", Z.mode = k0;
                break;
              }
              X = 0, H = 0;
            }
            Z.mode = R0;
          case R0:
            if (Z.wrap && Z.flags) {
              for (; H < 32; ) {
                if (a0 === 0)
                  break r;
                a0--, X += f0[p++] << H, H += 8;
              }
              if (X !== (Z.total & 4294967295)) {
                U.msg = "incorrect length check", Z.mode = k0;
                break;
              }
              X = 0, H = 0;
            }
            Z.mode = _0;
          case _0:
            p0 = h;
            break r;
          case k0:
            p0 = g;
            break r;
          case C0:
            return v;
          case q0:
          default:
            return b;
        }
    return U.next_out = $, U.avail_out = I, U.next_in = p, U.avail_in = a0, Z.hold = X, Z.bits = H, (Z.wsize || i0 !== U.avail_out && Z.mode < k0 && (Z.mode < G0 || t0 !== o)) && Or(U, U.output, U.next_out, i0 - U.avail_out), g0 -= U.avail_in, i0 -= U.avail_out, U.total_in += g0, U.total_out += i0, Z.total += i0, Z.wrap && i0 && (U.adler = Z.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
    Z.flags ? e(Z.check, S0, i0, U.next_out - i0) : r(Z.check, S0, i0, U.next_out - i0)), U.data_type = Z.bits + (Z.last ? 64 : 0) + (Z.mode === J ? 128 : 0) + (Z.mode === Y || Z.mode === q ? 256 : 0), (g0 === 0 && i0 === 0 || t0 === o) && p0 === c && (p0 = m), p0;
  }
  function u0(U) {
    if (!U || !U.state)
      return b;
    var t0 = U.state;
    return t0.window && (t0.window = null), U.state = null, c;
  }
  function h0(U, t0) {
    var Z;
    return !U || !U.state || (Z = U.state, !(Z.wrap & 2)) ? b : (Z.head = t0, t0.done = !1, c);
  }
  function E0(U, t0) {
    var Z = t0.length, f0, S0, p;
    return !U || !U.state || (f0 = U.state, f0.wrap !== 0 && f0.mode !== L) ? b : f0.mode === L && (S0 = 1, S0 = r(S0, t0, Z, 0), S0 !== f0.check) ? g : (p = Or(U, t0, Z, Z), p ? (f0.mode = C0, v) : (f0.havedict = 1, c));
  }
  return We.inflateReset = j0, We.inflateReset2 = Ar, We.inflateResetKeep = V0, We.inflateInit = fr, We.inflateInit2 = sr, We.inflate = W, We.inflateEnd = u0, We.inflateGetHeader = h0, We.inflateSetDictionary = E0, We.inflateInfo = "pako inflate (from Nodeca project)", We;
}
var Vu, w4;
function Md() {
  return w4 || (w4 = 1, Vu = {
    /* Allowed flush values; see deflate() and inflate() below for details */
    Z_NO_FLUSH: 0,
    Z_PARTIAL_FLUSH: 1,
    Z_SYNC_FLUSH: 2,
    Z_FULL_FLUSH: 3,
    Z_FINISH: 4,
    Z_BLOCK: 5,
    Z_TREES: 6,
    /* Return codes for the compression/decompression functions. Negative values
    * are errors, positive values are used for special but normal events.
    */
    Z_OK: 0,
    Z_STREAM_END: 1,
    Z_NEED_DICT: 2,
    Z_ERRNO: -1,
    Z_STREAM_ERROR: -2,
    Z_DATA_ERROR: -3,
    //Z_MEM_ERROR:     -4,
    Z_BUF_ERROR: -5,
    //Z_VERSION_ERROR: -6,
    /* compression levels */
    Z_NO_COMPRESSION: 0,
    Z_BEST_SPEED: 1,
    Z_BEST_COMPRESSION: 9,
    Z_DEFAULT_COMPRESSION: -1,
    Z_FILTERED: 1,
    Z_HUFFMAN_ONLY: 2,
    Z_RLE: 3,
    Z_FIXED: 4,
    Z_DEFAULT_STRATEGY: 0,
    /* Possible values of the data_type field (though see inflate()) */
    Z_BINARY: 0,
    Z_TEXT: 1,
    //Z_ASCII:                1, // = Z_TEXT (deprecated)
    Z_UNKNOWN: 2,
    /* The deflate compression method */
    Z_DEFLATED: 8
    //Z_NULL:                 null // Use -1 or null inline, depending on var type
  }), Vu;
}
var Pu, y4;
function E5() {
  if (y4)
    return Pu;
  y4 = 1;
  function s() {
    this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
  }
  return Pu = s, Pu;
}
var _4;
function C5() {
  if (_4)
    return F2;
  _4 = 1;
  var s = _5(), r = ai(), e = Td(), a = Md(), t = ph(), i = Xd(), A = E5(), n = Object.prototype.toString;
  function o(c) {
    if (!(this instanceof o))
      return new o(c);
    this.options = r.assign({
      chunkSize: 16384,
      windowBits: 0,
      to: ""
    }, c || {});
    var h = this.options;
    h.raw && h.windowBits >= 0 && h.windowBits < 16 && (h.windowBits = -h.windowBits, h.windowBits === 0 && (h.windowBits = -15)), h.windowBits >= 0 && h.windowBits < 16 && !(c && c.windowBits) && (h.windowBits += 32), h.windowBits > 15 && h.windowBits < 48 && (h.windowBits & 15 || (h.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new i(), this.strm.avail_out = 0;
    var d = s.inflateInit2(
      this.strm,
      h.windowBits
    );
    if (d !== a.Z_OK)
      throw new Error(t[d]);
    if (this.header = new A(), s.inflateGetHeader(this.strm, this.header), h.dictionary && (typeof h.dictionary == "string" ? h.dictionary = e.string2buf(h.dictionary) : n.call(h.dictionary) === "[object ArrayBuffer]" && (h.dictionary = new Uint8Array(h.dictionary)), h.raw && (d = s.inflateSetDictionary(this.strm, h.dictionary), d !== a.Z_OK)))
      throw new Error(t[d]);
  }
  o.prototype.push = function(c, h) {
    var d = this.strm, b = this.options.chunkSize, g = this.options.dictionary, v, m, w, k, C, y = !1;
    if (this.ended)
      return !1;
    m = h === ~~h ? h : h === !0 ? a.Z_FINISH : a.Z_NO_FLUSH, typeof c == "string" ? d.input = e.binstring2buf(c) : n.call(c) === "[object ArrayBuffer]" ? d.input = new Uint8Array(c) : d.input = c, d.next_in = 0, d.avail_in = d.input.length;
    do {
      if (d.avail_out === 0 && (d.output = new r.Buf8(b), d.next_out = 0, d.avail_out = b), v = s.inflate(d, a.Z_NO_FLUSH), v === a.Z_NEED_DICT && g && (v = s.inflateSetDictionary(this.strm, g)), v === a.Z_BUF_ERROR && y === !0 && (v = a.Z_OK, y = !1), v !== a.Z_STREAM_END && v !== a.Z_OK)
        return this.onEnd(v), this.ended = !0, !1;
      d.next_out && (d.avail_out === 0 || v === a.Z_STREAM_END || d.avail_in === 0 && (m === a.Z_FINISH || m === a.Z_SYNC_FLUSH)) && (this.options.to === "string" ? (w = e.utf8border(d.output, d.next_out), k = d.next_out - w, C = e.buf2string(d.output, w), d.next_out = k, d.avail_out = b - k, k && r.arraySet(d.output, d.output, w, k, 0), this.onData(C)) : this.onData(r.shrinkBuf(d.output, d.next_out))), d.avail_in === 0 && d.avail_out === 0 && (y = !0);
    } while ((d.avail_in > 0 || d.avail_out === 0) && v !== a.Z_STREAM_END);
    return v === a.Z_STREAM_END && (m = a.Z_FINISH), m === a.Z_FINISH ? (v = s.inflateEnd(this.strm), this.onEnd(v), this.ended = !0, v === a.Z_OK) : (m === a.Z_SYNC_FLUSH && (this.onEnd(a.Z_OK), d.avail_out = 0), !0);
  }, o.prototype.onData = function(c) {
    this.chunks.push(c);
  }, o.prototype.onEnd = function(c) {
    c === a.Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = r.flattenChunks(this.chunks)), this.chunks = [], this.err = c, this.msg = this.strm.msg;
  };
  function f(c, h) {
    var d = new o(h);
    if (d.push(c, !0), d.err)
      throw d.msg || t[d.err];
    return d.result;
  }
  function l(c, h) {
    return h = h || {}, h.raw = !0, f(c, h);
  }
  return F2.Inflate = o, F2.inflate = f, F2.inflateRaw = l, F2.ungzip = f, F2;
}
var Ou, E4;
function B5() {
  if (E4)
    return Ou;
  E4 = 1;
  var s = ai().assign, r = k5(), e = C5(), a = Md(), t = {};
  return s(t, r, e, a), Ou = t, Ou;
}
(function(s) {
  (function() {
    var r = {};
    s.exports = r;
    var e;
    typeof v5 == "function" ? e = B5() : e = self.pako;
    function a() {
      (typeof process > "u" || process.env.NODE_ENV == "development") && console.log.apply(console, arguments);
    }
    (function(t, i) {
      (function() {
        var A = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(f) {
          return typeof f;
        } : function(f) {
          return f && typeof Symbol == "function" && f.constructor === Symbol && f !== Symbol.prototype ? "symbol" : typeof f;
        }, n = function() {
          function f(l) {
            this.message = "JPEG error: " + l;
          }
          return f.prototype = Error(), f.prototype.name = "JpegError", f.constructor = f;
        }(), o = function() {
          function f(l, c) {
            this.message = l, this.g = c;
          }
          return f.prototype = Error(), f.prototype.name = "DNLMarkerError", f.constructor = f;
        }();
        (function() {
          function f() {
            this.M = null, this.B = -1;
          }
          function l(g, v) {
            for (var m = 0, w = [], k, C, y = 16; 0 < y && !g[y - 1]; )
              y--;
            w.push({ children: [], index: 0 });
            var B = w[0], F;
            for (k = 0; k < y; k++) {
              for (C = 0; C < g[k]; C++) {
                for (B = w.pop(), B.children[B.index] = v[m]; 0 < B.index; )
                  B = w.pop();
                for (B.index++, w.push(B); w.length <= k; )
                  w.push(F = { children: [], index: 0 }), B.children[B.index] = F.children, B = F;
                m++;
              }
              k + 1 < y && (w.push(F = { children: [], index: 0 }), B.children[B.index] = F.children, B = F);
            }
            return w[0].children;
          }
          function c(g, v, m, w, k, C, y, B, F) {
            function G() {
              if (0 < D)
                return D--, N >> D & 1;
              if (N = g[v++], N === 255) {
                var d0 = g[v++];
                if (d0) {
                  if (d0 === 220 && q) {
                    v += 2;
                    var y0 = g[v++] << 8 | g[v++];
                    if (0 < y0 && y0 !== m.g)
                      throw new o("Found DNL marker (0xFFDC) while parsing scan data", y0);
                  }
                  throw new n("unexpected marker " + (N << 8 | d0).toString(16));
                }
              }
              return D = 7, N >>> 7;
            }
            function V(d0) {
              for (; ; ) {
                if (d0 = d0[G()], typeof d0 == "number")
                  return d0;
                if ((typeof d0 > "u" ? "undefined" : A(d0)) !== "object")
                  throw new n("invalid huffman sequence");
              }
            }
            function M(d0) {
              for (var y0 = 0; 0 < d0; )
                y0 = y0 << 1 | G(), d0--;
              return y0;
            }
            function T(d0) {
              if (d0 === 1)
                return G() === 1 ? 1 : -1;
              var y0 = M(d0);
              return y0 >= 1 << d0 - 1 ? y0 : y0 + (-1 << d0) + 1;
            }
            function Q(d0, y0) {
              var W0 = V(d0.D);
              for (W0 = W0 === 0 ? 0 : T(W0), d0.a[y0] = d0.m += W0, W0 = 1; 64 > W0; ) {
                var D0 = V(d0.o), V0 = D0 & 15;
                if (D0 >>= 4, V0 === 0) {
                  if (15 > D0)
                    break;
                  W0 += 16;
                } else
                  W0 += D0, d0.a[y0 + b[W0]] = T(V0), W0++;
              }
            }
            function L(d0, y0) {
              var W0 = V(d0.D);
              W0 = W0 === 0 ? 0 : T(W0) << F, d0.a[y0] = d0.m += W0;
            }
            function J(d0, y0) {
              d0.a[y0] |= G() << F;
            }
            function r0(d0, y0) {
              if (0 < Y)
                Y--;
              else
                for (var W0 = C; W0 <= y; ) {
                  var D0 = V(d0.o), V0 = D0 & 15;
                  if (D0 >>= 4, V0 === 0) {
                    if (15 > D0) {
                      Y = M(D0) + (1 << D0) - 1;
                      break;
                    }
                    W0 += 16;
                  } else
                    W0 += D0, d0.a[y0 + b[W0]] = T(V0) * (1 << F), W0++;
                }
            }
            function e0(d0, y0) {
              for (var W0 = C, D0 = 0, V0; W0 <= y; ) {
                V0 = y0 + b[W0];
                var j0 = 0 > d0.a[V0] ? -1 : 1;
                switch (z) {
                  case 0:
                    if (D0 = V(d0.o), V0 = D0 & 15, D0 >>= 4, V0 === 0)
                      15 > D0 ? (Y = M(D0) + (1 << D0), z = 4) : (D0 = 16, z = 1);
                    else {
                      if (V0 !== 1)
                        throw new n("invalid ACn encoding");
                      j = T(V0), z = D0 ? 2 : 3;
                    }
                    continue;
                  case 1:
                  case 2:
                    d0.a[V0] ? d0.a[V0] += j0 * (G() << F) : (D0--, D0 === 0 && (z = z === 2 ? 3 : 0));
                    break;
                  case 3:
                    d0.a[V0] ? d0.a[V0] += j0 * (G() << F) : (d0.a[V0] = j << F, z = 0);
                    break;
                  case 4:
                    d0.a[V0] && (d0.a[V0] += j0 * (G() << F));
                }
                W0++;
              }
              z === 4 && (Y--, Y === 0 && (z = 0));
            }
            for (var q = 9 < arguments.length && arguments[9] !== void 0 ? arguments[9] : !1, _ = m.P, x = v, N = 0, D = 0, Y = 0, z = 0, j, A0 = w.length, l0, n0, m0, G0, R0 = m.S ? C === 0 ? B === 0 ? L : J : B === 0 ? r0 : e0 : Q, _0 = 0, k0 = A0 === 1 ? w[0].c * w[0].l : _ * m.O, C0, q0; _0 < k0; ) {
              var N0 = k ? Math.min(k0 - _0, k) : k0;
              for (l0 = 0; l0 < A0; l0++)
                w[l0].m = 0;
              if (Y = 0, A0 === 1) {
                var Z0 = w[0];
                for (G0 = 0; G0 < N0; G0++)
                  R0(Z0, 64 * ((Z0.c + 1) * (_0 / Z0.c | 0) + _0 % Z0.c)), _0++;
              } else
                for (G0 = 0; G0 < N0; G0++) {
                  for (l0 = 0; l0 < A0; l0++)
                    for (Z0 = w[l0], C0 = Z0.h, q0 = Z0.j, n0 = 0; n0 < q0; n0++)
                      for (m0 = 0; m0 < C0; m0++)
                        R0(Z0, 64 * ((Z0.c + 1) * ((_0 / _ | 0) * Z0.j + n0) + (_0 % _ * Z0.h + m0)));
                  _0++;
                }
              if (D = 0, (Z0 = d(g, v)) && Z0.f && ((0, _util.warn)("decodeScan - unexpected MCU data, current marker is: " + Z0.f), v = Z0.offset), Z0 = Z0 && Z0.F, !Z0 || 65280 >= Z0)
                throw new n("marker was not found");
              if (65488 <= Z0 && 65495 >= Z0)
                v += 2;
              else
                break;
            }
            return (Z0 = d(g, v)) && Z0.f && ((0, _util.warn)("decodeScan - unexpected Scan data, current marker is: " + Z0.f), v = Z0.offset), v - x;
          }
          function h(g, v) {
            for (var m = v.c, w = v.l, k = new Int16Array(64), C = 0; C < w; C++)
              for (var y = 0; y < m; y++) {
                var B = 64 * ((v.c + 1) * C + y), F = k, G = v.G, V = v.a;
                if (!G)
                  throw new n("missing required Quantization Table.");
                for (var M = 0; 64 > M; M += 8) {
                  var T = V[B + M], Q = V[B + M + 1], L = V[B + M + 2], J = V[B + M + 3], r0 = V[B + M + 4], e0 = V[B + M + 5], q = V[B + M + 6], _ = V[B + M + 7];
                  if (T *= G[M], !(Q | L | J | r0 | e0 | q | _))
                    T = 5793 * T + 512 >> 10, F[M] = T, F[M + 1] = T, F[M + 2] = T, F[M + 3] = T, F[M + 4] = T, F[M + 5] = T, F[M + 6] = T, F[M + 7] = T;
                  else {
                    Q *= G[M + 1], L *= G[M + 2], J *= G[M + 3], r0 *= G[M + 4], e0 *= G[M + 5], q *= G[M + 6], _ *= G[M + 7];
                    var x = 5793 * T + 128 >> 8, N = 5793 * r0 + 128 >> 8, D = L, Y = q;
                    r0 = 2896 * (Q - _) + 128 >> 8, _ = 2896 * (Q + _) + 128 >> 8, J <<= 4, e0 <<= 4, x = x + N + 1 >> 1, N = x - N, T = 3784 * D + 1567 * Y + 128 >> 8, D = 1567 * D - 3784 * Y + 128 >> 8, Y = T, r0 = r0 + e0 + 1 >> 1, e0 = r0 - e0, _ = _ + J + 1 >> 1, J = _ - J, x = x + Y + 1 >> 1, Y = x - Y, N = N + D + 1 >> 1, D = N - D, T = 2276 * r0 + 3406 * _ + 2048 >> 12, r0 = 3406 * r0 - 2276 * _ + 2048 >> 12, _ = T, T = 799 * J + 4017 * e0 + 2048 >> 12, J = 4017 * J - 799 * e0 + 2048 >> 12, e0 = T, F[M] = x + _, F[M + 7] = x - _, F[M + 1] = N + e0, F[M + 6] = N - e0, F[M + 2] = D + J, F[M + 5] = D - J, F[M + 3] = Y + r0, F[M + 4] = Y - r0;
                  }
                }
                for (G = 0; 8 > G; ++G)
                  T = F[G], Q = F[G + 8], L = F[G + 16], J = F[G + 24], r0 = F[G + 32], e0 = F[G + 40], q = F[G + 48], _ = F[G + 56], Q | L | J | r0 | e0 | q | _ ? (x = 5793 * T + 2048 >> 12, N = 5793 * r0 + 2048 >> 12, D = L, Y = q, r0 = 2896 * (Q - _) + 2048 >> 12, _ = 2896 * (Q + _) + 2048 >> 12, x = (x + N + 1 >> 1) + 4112, N = x - N, T = 3784 * D + 1567 * Y + 2048 >> 12, D = 1567 * D - 3784 * Y + 2048 >> 12, Y = T, r0 = r0 + e0 + 1 >> 1, e0 = r0 - e0, _ = _ + J + 1 >> 1, J = _ - J, x = x + Y + 1 >> 1, Y = x - Y, N = N + D + 1 >> 1, D = N - D, T = 2276 * r0 + 3406 * _ + 2048 >> 12, r0 = 3406 * r0 - 2276 * _ + 2048 >> 12, _ = T, T = 799 * J + 4017 * e0 + 2048 >> 12, J = 4017 * J - 799 * e0 + 2048 >> 12, e0 = T, T = x + _, _ = x - _, Q = N + e0, q = N - e0, L = D + J, e0 = D - J, J = Y + r0, r0 = Y - r0, T = 16 > T ? 0 : 4080 <= T ? 255 : T >> 4, Q = 16 > Q ? 0 : 4080 <= Q ? 255 : Q >> 4, L = 16 > L ? 0 : 4080 <= L ? 255 : L >> 4, J = 16 > J ? 0 : 4080 <= J ? 255 : J >> 4, r0 = 16 > r0 ? 0 : 4080 <= r0 ? 255 : r0 >> 4, e0 = 16 > e0 ? 0 : 4080 <= e0 ? 255 : e0 >> 4, q = 16 > q ? 0 : 4080 <= q ? 255 : q >> 4, _ = 16 > _ ? 0 : 4080 <= _ ? 255 : _ >> 4, V[B + G] = T, V[B + G + 8] = Q, V[B + G + 16] = L, V[B + G + 24] = J, V[B + G + 32] = r0, V[B + G + 40] = e0, V[B + G + 48] = q, V[B + G + 56] = _) : (T = 5793 * T + 8192 >> 14, T = -2040 > T ? 0 : 2024 <= T ? 255 : T + 2056 >> 4, V[B + G] = T, V[B + G + 8] = T, V[B + G + 16] = T, V[B + G + 24] = T, V[B + G + 32] = T, V[B + G + 40] = T, V[B + G + 48] = T, V[B + G + 56] = T);
              }
            return v.a;
          }
          function d(g, v) {
            var m = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : v, w = g.length - 1;
            if (m = m < v ? m : v, v >= w)
              return null;
            var k = g[v] << 8 | g[v + 1];
            if (65472 <= k && 65534 >= k)
              return { f: null, F: k, offset: v };
            for (var C = g[m] << 8 | g[m + 1]; !(65472 <= C && 65534 >= C); ) {
              if (++m >= w)
                return null;
              C = g[m] << 8 | g[m + 1];
            }
            return { f: k.toString(16), F: C, offset: m };
          }
          var b = new Uint8Array([
            0,
            1,
            8,
            16,
            9,
            2,
            3,
            10,
            17,
            24,
            32,
            25,
            18,
            11,
            4,
            5,
            12,
            19,
            26,
            33,
            40,
            48,
            41,
            34,
            27,
            20,
            13,
            6,
            7,
            14,
            21,
            28,
            35,
            42,
            49,
            56,
            57,
            50,
            43,
            36,
            29,
            22,
            15,
            23,
            30,
            37,
            44,
            51,
            58,
            59,
            52,
            45,
            38,
            31,
            39,
            46,
            53,
            60,
            61,
            54,
            47,
            55,
            62,
            63
          ]);
          f.prototype = { parse: function(g) {
            function v() {
              var D = g[y] << 8 | g[y + 1];
              return y += 2, D;
            }
            function m() {
              var D = v();
              D = y + D - 2;
              var Y = d(g, D, y);
              return Y && Y.f && ((0, _util.warn)("readDataBlock - incorrect length, current marker is: " + Y.f), D = Y.offset), D = g.subarray(y, D), y += D.length, D;
            }
            function w(D) {
              for (var Y = Math.ceil(D.v / 8 / D.s), z = Math.ceil(D.g / 8 / D.u), j = 0; j < D.b.length; j++) {
                x = D.b[j];
                var A0 = Math.ceil(Math.ceil(D.v / 8) * x.h / D.s), l0 = Math.ceil(Math.ceil(D.g / 8) * x.j / D.u);
                x.a = new Int16Array(64 * z * x.j * (Y * x.h + 1)), x.c = A0, x.l = l0;
              }
              D.P = Y, D.O = z;
            }
            var k = (1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : {}).N, C = k === void 0 ? null : k, y = 0, B = null, F = 0;
            k = [];
            var G = [], V = [], M = v();
            if (M !== 65496)
              throw new n("SOI not found");
            for (M = v(); M !== 65497; ) {
              switch (M) {
                case 65504:
                case 65505:
                case 65506:
                case 65507:
                case 65508:
                case 65509:
                case 65510:
                case 65511:
                case 65512:
                case 65513:
                case 65514:
                case 65515:
                case 65516:
                case 65517:
                case 65518:
                case 65519:
                case 65534:
                  var T = m();
                  M === 65518 && T[0] === 65 && T[1] === 100 && T[2] === 111 && T[3] === 98 && T[4] === 101 && (B = { version: T[5] << 8 | T[6], Y: T[7] << 8 | T[8], Z: T[9] << 8 | T[10], W: T[11] });
                  break;
                case 65499:
                  M = v() + y - 2;
                  for (var Q; y < M; ) {
                    var L = g[y++], J = new Uint16Array(64);
                    if (L >> 4)
                      if (L >> 4 === 1)
                        for (T = 0; 64 > T; T++)
                          Q = b[T], J[Q] = v();
                      else
                        throw new n("DQT - invalid table spec");
                    else
                      for (T = 0; 64 > T; T++)
                        Q = b[T], J[Q] = g[y++];
                    k[L & 15] = J;
                  }
                  break;
                case 65472:
                case 65473:
                case 65474:
                  if (r0)
                    throw new n("Only single frame JPEGs supported");
                  v();
                  var r0 = {};
                  for (r0.X = M === 65473, r0.S = M === 65474, r0.precision = g[y++], M = v(), r0.g = C || M, r0.v = v(), r0.b = [], r0.C = {}, T = g[y++], M = J = L = 0; M < T; M++) {
                    Q = g[y];
                    var e0 = g[y + 1] >> 4, q = g[y + 1] & 15;
                    L < e0 && (L = e0), J < q && (J = q), e0 = r0.b.push({ h: e0, j: q, T: g[y + 2], G: null }), r0.C[Q] = e0 - 1, y += 3;
                  }
                  r0.s = L, r0.u = J, w(r0);
                  break;
                case 65476:
                  for (Q = v(), M = 2; M < Q; ) {
                    for (L = g[y++], J = new Uint8Array(16), T = e0 = 0; 16 > T; T++, y++)
                      e0 += J[T] = g[y];
                    for (q = new Uint8Array(e0), T = 0; T < e0; T++, y++)
                      q[T] = g[y];
                    M += 17 + e0, (L >> 4 ? G : V)[L & 15] = l(J, q);
                  }
                  break;
                case 65501:
                  v();
                  var _ = v();
                  break;
                case 65498:
                  for (T = ++F === 1 && !C, v(), L = g[y++], Q = [], M = 0; M < L; M++) {
                    J = r0.C[g[y++]];
                    var x = r0.b[J];
                    J = g[y++], x.D = V[J >> 4], x.o = G[J & 15], Q.push(x);
                  }
                  M = g[y++], L = g[y++], J = g[y++];
                  try {
                    var N = c(g, y, r0, Q, _, M, L, J >> 4, J & 15, T);
                    y += N;
                  } catch (D) {
                    if (D instanceof o)
                      return (0, _util.warn)('Attempting to re-parse JPEG image using "scanLines" parameter found in DNL marker (0xFFDC) segment.'), this.parse(g, { N: D.g });
                    throw D;
                  }
                  break;
                case 65500:
                  y += 4;
                  break;
                case 65535:
                  g[y] !== 255 && y--;
                  break;
                default:
                  if (g[y - 3] === 255 && 192 <= g[y - 2] && 254 >= g[y - 2])
                    y -= 3;
                  else if ((T = d(g, y - 2)) && T.f)
                    (0, _util.warn)("JpegImage.parse - unexpected data, current marker is: " + T.f), y = T.offset;
                  else
                    throw new n("unknown marker " + M.toString(16));
              }
              M = v();
            }
            for (this.width = r0.v, this.height = r0.g, this.A = B, this.b = [], M = 0; M < r0.b.length; M++)
              x = r0.b[M], (_ = k[x.T]) && (x.G = _), this.b.push({ R: h(r0, x), U: x.h / r0.s, V: x.j / r0.u, c: x.c, l: x.l });
            this.i = this.b.length;
          }, L: function(g, v) {
            var m = this.width / g, w = this.height / v, k, C, y = this.b.length, B = g * v * y, F = new Uint8ClampedArray(B), G = new Uint32Array(g);
            for (C = 0; C < y; C++) {
              var V = this.b[C], M = V.U * m, T = V.V * w, Q = C, L = V.R, J = V.c + 1 << 3;
              for (k = 0; k < g; k++)
                V = 0 | k * M, G[k] = (V & 4294967288) << 3 | V & 7;
              for (M = 0; M < v; M++)
                for (V = 0 | M * T, V = J * (V & 4294967288) | (V & 7) << 3, k = 0; k < g; k++)
                  F[Q] = L[V + G[k]], Q += y;
            }
            if (w = this.M)
              for (C = 0; C < B; )
                for (m = V = 0; V < y; V++, C++, m += 2)
                  F[C] = (F[C] * w[m] >> 8) + w[m + 1];
            return F;
          }, w: function() {
            return this.A ? !!this.A.W : this.i === 3 ? this.B !== 0 : this.B === 1;
          }, I: function(g) {
            for (var v, m, w, k = 0, C = g.length; k < C; k += 3)
              v = g[k], m = g[k + 1], w = g[k + 2], g[k] = v - 179.456 + 1.402 * w, g[k + 1] = v + 135.459 - 0.344 * m - 0.714 * w, g[k + 2] = v - 226.816 + 1.772 * m;
            return g;
          }, K: function(g) {
            for (var v, m, w, k, C = 0, y = 0, B = g.length; y < B; y += 4)
              v = g[y], m = g[y + 1], w = g[y + 2], k = g[y + 3], g[C++] = -122.67195406894 + m * (-660635669420364e-19 * m + 437130475926232e-18 * w - 54080610064599e-18 * v + 48449797120281e-17 * k - 0.154362151871126) + w * (-957964378445773e-18 * w + 817076911346625e-18 * v - 0.00477271405408747 * k + 1.53380253221734) + v * (961250184130688e-18 * v - 0.00266257332283933 * k + 0.48357088451265) + k * (-336197177618394e-18 * k + 0.484791561490776), g[C++] = 107.268039397724 + m * (219927104525741e-19 * m - 640992018297945e-18 * w + 659397001245577e-18 * v + 426105652938837e-18 * k - 0.176491792462875) + w * (-778269941513683e-18 * w + 0.00130872261408275 * v + 770482631801132e-18 * k - 0.151051492775562) + v * (0.00126935368114843 * v - 0.00265090189010898 * k + 0.25802910206845) + k * (-318913117588328e-18 * k - 0.213742400323665), g[C++] = -20.810012546947 + m * (-570115196973677e-18 * m - 263409051004589e-19 * w + 0.0020741088115012 * v - 0.00288260236853442 * k + 0.814272968359295) + w * (-153496057440975e-19 * w - 132689043961446e-18 * v + 560833691242812e-18 * k - 0.195152027534049) + v * (0.00174418132927582 * v - 0.00255243321439347 * k + 0.116935020465145) + k * (-343531996510555e-18 * k + 0.24165260232407);
            return g.subarray(
              0,
              C
            );
          }, J: function(g) {
            for (var v, m, w, k = 0, C = g.length; k < C; k += 4)
              v = g[k], m = g[k + 1], w = g[k + 2], g[k] = 434.456 - v - 1.402 * w, g[k + 1] = 119.541 - v + 0.344 * m + 0.714 * w, g[k + 2] = 481.816 - v - 1.772 * m;
            return g;
          }, H: function(g) {
            for (var v, m, w, k, C = 0, y = 1 / 255, B = 0, F = g.length; B < F; B += 4)
              v = g[B] * y, m = g[B + 1] * y, w = g[B + 2] * y, k = g[B + 3] * y, g[C++] = 255 + v * (-4.387332384609988 * v + 54.48615194189176 * m + 18.82290502165302 * w + 212.25662451639585 * k - 285.2331026137004) + m * (1.7149763477362134 * m - 5.6096736904047315 * w - 17.873870861415444 * k - 5.497006427196366) + w * (-2.5217340131683033 * w - 21.248923337353073 * k + 17.5119270841813) - k * (21.86122147463605 * k + 189.48180835922747), g[C++] = 255 + v * (8.841041422036149 * v + 60.118027045597366 * m + 6.871425592049007 * w + 31.159100130055922 * k - 79.2970844816548) + m * (-15.310361306967817 * m + 17.575251261109482 * w + 131.35250912493976 * k - 190.9453302588951) + w * (4.444339102852739 * w + 9.8632861493405 * k - 24.86741582555878) - k * (20.737325471181034 * k + 187.80453709719578), g[C++] = 255 + v * (0.8842522430003296 * v + 8.078677503112928 * m + 30.89978309703729 * w - 0.23883238689178934 * k - 14.183576799673286) + m * (10.49593273432072 * m + 63.02378494754052 * w + 50.606957656360734 * k - 112.23884253719248) + w * (0.03296041114873217 * w + 115.60384449646641 * k - 193.58209356861505) - k * (22.33816807309886 * k + 180.12613974708367);
            return g.subarray(0, C);
          }, getData: function(g, v, m) {
            if (4 < this.i)
              throw new n("Unsupported color mode");
            if (g = this.L(g, v), this.i === 1 && m) {
              m = g.length, v = new Uint8ClampedArray(3 * m);
              for (var w = 0, k = 0; k < m; k++) {
                var C = g[k];
                v[w++] = C, v[w++] = C, v[w++] = C;
              }
              return v;
            }
            if (this.i === 3 && this.w())
              return this.I(g);
            if (this.i === 4) {
              if (this.w())
                return m ? this.K(g) : this.J(g);
              if (m)
                return this.H(g);
            }
            return g;
          } }, t.JpegDecoder = f;
        })();
      })(), t.encodeImage = function(A, n, o, f) {
        var l = {
          t256: [n],
          t257: [o],
          t258: [8, 8, 8, 8],
          t259: [1],
          t262: [2],
          t273: [1e3],
          // strips offset
          t277: [4],
          t278: [o],
          /* rows per strip */
          t279: [n * o * 4],
          // strip byte counts
          t282: [1],
          t283: [1],
          t284: [1],
          t286: [0],
          t287: [0],
          t296: [1],
          t305: ["Photopea (UTIF.js)"],
          t338: [1]
        };
        if (f)
          for (var c in f)
            l[c] = f[c];
        for (var h = new Uint8Array(t.encode([l])), d = new Uint8Array(A), b = new Uint8Array(1e3 + n * o * 4), c = 0; c < h.length; c++)
          b[c] = h[c];
        for (var c = 0; c < d.length; c++)
          b[1e3 + c] = d[c];
        return b.buffer;
      }, t.encode = function(A) {
        var n = new Uint8Array(2e4), o = 4, f = t._binBE;
        n[0] = 77, n[1] = 77, n[3] = 42;
        var l = 8;
        f.writeUint(n, o, l), o += 4;
        for (var c = 0; c < A.length; c++) {
          var h = t._writeIFD(f, n, l, A[c]);
          l = h[1], c < A.length - 1 && f.writeUint(n, h[0], l);
        }
        return n.slice(0, l).buffer;
      }, t.decode = function(A) {
        t.decode._decodeG3.allow2D = null;
        var n = new Uint8Array(A), o = 0, f = t._binBE.readASCII(n, o, 2);
        o += 2;
        var l = f == "II" ? t._binLE : t._binBE;
        l.readUshort(n, o), o += 2;
        var c = l.readUint(n, o);
        o += 4;
        for (var h = []; ; ) {
          var d = t._readIFD(l, n, c, h, 0, !1);
          if (c = l.readUint(n, d), c == 0)
            break;
        }
        return h;
      }, t.decodeImage = function(A, n, o) {
        var f = new Uint8Array(A), l = t._binBE.readASCII(f, 0, 2);
        if (n.t256 != null) {
          n.isLE = l == "II", n.width = n.t256[0], n.height = n.t257[0];
          var c = n.t259 ? n.t259[0] : 1, h = n.t266 ? n.t266[0] : 1;
          n.t284 && n.t284[0] == 2 && a("PlanarConfiguration 2 should not be used!");
          var d;
          n.t258 ? d = Math.min(32, n.t258[0]) * n.t258.length : d = n.t277 ? n.t277[0] : 1, c == 1 && n.t279 != null && n.t278 && n.t262[0] == 32803 && (d = Math.round(n.t279[0] * 8 / (n.width * n.t278[0])));
          var b = Math.ceil(n.width * d / 8) * 8, g = n.t273;
          g == null && (g = n.t324);
          var v = n.t279;
          c == 1 && g.length == 1 && (v = [n.height * (b >>> 3)]), v == null && (v = n.t325);
          var m = new Uint8Array(n.height * (b >>> 3)), w = 0;
          if (n.t322 != null) {
            for (var k = n.t322[0], C = n.t323[0], y = Math.floor((n.width + k - 1) / k), B = Math.floor((n.height + C - 1) / C), F = new Uint8Array(Math.ceil(k * C * d / 8) | 0), G = 0; G < B; G++)
              for (var V = 0; V < y; V++) {
                for (var M = G * y + V, T = 0; T < F.length; T++)
                  F[T] = 0;
                t.decode._decompress(n, o, f, g[M], v[M], c, F, 0, h), c == 6 ? m = F : t._copyTile(F, Math.ceil(k * d / 8) | 0, C, m, Math.ceil(n.width * d / 8) | 0, n.height, Math.ceil(V * k * d / 8) | 0, G * C);
              }
            w = m.length * 8;
          } else {
            var Q = n.t278 ? n.t278[0] : n.height;
            Q = Math.min(Q, n.height);
            for (var M = 0; M < g.length; M++)
              t.decode._decompress(n, o, f, g[M], v[M], c, m, Math.ceil(w / 8) | 0, h), w += b * Q;
            w = Math.min(w, m.length * 8);
          }
          n.data = new Uint8Array(m.buffer, 0, Math.ceil(w / 8) | 0);
        }
      }, t.decode._decompress = function(A, n, o, f, l, c, h, d, b) {
        if (c == 1 || l == h.length && c != 32767)
          for (var g = 0; g < l; g++)
            h[d + g] = o[f + g];
        else if (c == 3)
          t.decode._decodeG3(o, f, l, h, d, A.width, b);
        else if (c == 4)
          t.decode._decodeG4(o, f, l, h, d, A.width, b);
        else if (c == 5)
          t.decode._decodeLZW(o, f, h, d);
        else if (c == 6)
          t.decode._decodeOldJPEG(A, o, f, l, h, d);
        else if (c == 7)
          t.decode._decodeNewJPEG(A, o, f, l, h, d);
        else if (c == 8)
          for (var v = new Uint8Array(o.buffer, f, l), m = i.inflate(v), w = 0; w < m.length; w++)
            h[d + w] = m[w];
        else
          c == 32767 ? t.decode._decodeARW(A, o, f, l, h, d) : c == 32773 ? t.decode._decodePackBits(o, f, l, h, d) : c == 32809 ? t.decode._decodeThunder(o, f, l, h, d) : c == 34713 ? t.decode._decodeNikon(A, n, o, f, l, h, d) : a("Unknown compression", c);
        var k = A.t258 ? Math.min(32, A.t258[0]) : 1, C = A.t277 ? A.t277[0] : 1, y = k * C >>> 3, B = A.t278 ? A.t278[0] : A.height, F = Math.ceil(k * C * A.width / 8);
        if (k == 16 && !A.isLE && A.t33422 == null)
          for (var G = 0; G < B; G++)
            for (var V = d + G * F, M = 1; M < F; M += 2) {
              var T = h[V + M];
              h[V + M] = h[V + M - 1], h[V + M - 1] = T;
            }
        if (A.t317 && A.t317[0] == 2)
          for (var G = 0; G < B; G++) {
            var Q = d + G * F;
            if (k == 16)
              for (var g = y; g < F; g += 2) {
                var L = (h[Q + g + 1] << 8 | h[Q + g]) + (h[Q + g - y + 1] << 8 | h[Q + g - y]);
                h[Q + g] = L & 255, h[Q + g + 1] = L >>> 8 & 255;
              }
            else if (C == 3)
              for (var g = 3; g < F; g += 3)
                h[Q + g] = h[Q + g] + h[Q + g - 3] & 255, h[Q + g + 1] = h[Q + g + 1] + h[Q + g - 2] & 255, h[Q + g + 2] = h[Q + g + 2] + h[Q + g - 1] & 255;
            else
              for (var g = y; g < F; g++)
                h[Q + g] = h[Q + g] + h[Q + g - y] & 255;
          }
      }, t.decode._ljpeg_diff = function(A, n, o) {
        var f = t.decode._getbithuff, l, c;
        return l = f(A, n, o[0], o), c = f(A, n, l, 0), c & 1 << l - 1 || (c -= (1 << l) - 1), c;
      }, t.decode._decodeARW = function(A, n, o, f, l, c) {
        var h = A.t256[0], d = A.t257[0], b = A.t258[0], g = A.isLE ? t._binLE : t._binBE, v = h * d == f || h * d * 1.5 == f;
        if (!v) {
          d += 8;
          var m = [o, 0, 0, 0], w = new Uint16Array(32770), k = [
            3857,
            3856,
            3599,
            3342,
            3085,
            2828,
            2571,
            2314,
            2057,
            1800,
            1543,
            1286,
            1029,
            772,
            771,
            768,
            514,
            513
          ], z, C, y, r0, J, B = 0, F = t.decode._ljpeg_diff;
          for (w[0] = 15, y = z = 0; z < 18; z++)
            for (var G = 32768 >>> (k[z] >>> 8), C = 0; C < G; C++)
              w[++y] = k[z];
          for (r0 = h; r0--; )
            for (J = 0; J < d + 1; J += 2)
              if (J == d && (J = 1), B += F(n, m, w), J < d) {
                var V = B & 4095;
                t.decode._putsF(l, (J * h + r0) * b, V << 16 - b);
              }
          return;
        }
        if (h * d * 1.5 == f) {
          for (var z = 0; z < f; z += 3) {
            var M = n[o + z + 0], T = n[o + z + 1], Q = n[o + z + 2];
            l[c + z] = T << 4 | M >>> 4, l[c + z + 1] = M << 4 | Q >>> 4, l[c + z + 2] = Q << 4 | T >>> 4;
          }
          return;
        }
        var L = new Uint16Array(16), J, r0, e0, q, _, x, N, D, Y, z, j, A0 = new Uint8Array(h + 1);
        for (J = 0; J < d; J++) {
          for (var l0 = 0; l0 < h; l0++)
            A0[l0] = n[o++];
          for (j = 0, r0 = 0; r0 < h - 30; j += 16) {
            for (q = 2047 & (e0 = g.readUint(A0, j)), _ = 2047 & e0 >>> 11, x = 15 & e0 >>> 22, N = 15 & e0 >>> 26, D = 0; D < 4 && 128 << D <= q - _; D++)
              ;
            for (Y = 30, z = 0; z < 16; z++)
              z == x ? L[z] = q : z == N ? L[z] = _ : (L[z] = ((g.readUshort(A0, j + (Y >> 3)) >>> (Y & 7) & 127) << D) + _, L[z] > 2047 && (L[z] = 2047), Y += 7);
            for (z = 0; z < 16; z++, r0 += 2) {
              var V = L[z] << 1;
              t.decode._putsF(l, (J * h + r0) * b, V << 16 - b);
            }
            r0 -= r0 & 1 ? 1 : 31;
          }
        }
      }, t.decode._decodeNikon = function(A, n, o, f, l, c, h) {
        var d = [
          [
            0,
            0,
            1,
            5,
            1,
            1,
            1,
            1,
            1,
            1,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            /* 12-bit lossy */
            5,
            4,
            3,
            6,
            2,
            7,
            1,
            0,
            8,
            9,
            11,
            10,
            12
          ],
          [
            0,
            0,
            1,
            5,
            1,
            1,
            1,
            1,
            1,
            1,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            /* 12-bit lossy after split */
            57,
            90,
            56,
            39,
            22,
            5,
            4,
            3,
            2,
            1,
            0,
            11,
            12,
            12
          ],
          [
            0,
            0,
            1,
            4,
            2,
            3,
            1,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            /* 12-bit lossless */
            5,
            4,
            6,
            3,
            7,
            2,
            8,
            1,
            9,
            0,
            10,
            11,
            12
          ],
          [
            0,
            0,
            1,
            4,
            3,
            1,
            1,
            1,
            1,
            1,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            /* 14-bit lossy */
            5,
            6,
            4,
            7,
            8,
            3,
            9,
            2,
            1,
            0,
            10,
            11,
            12,
            13,
            14
          ],
          [
            0,
            0,
            1,
            5,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            2,
            0,
            0,
            0,
            0,
            0,
            /* 14-bit lossy after split */
            8,
            92,
            75,
            58,
            41,
            7,
            6,
            5,
            4,
            3,
            2,
            1,
            0,
            13,
            14
          ],
          [
            0,
            0,
            1,
            4,
            2,
            2,
            3,
            1,
            2,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            /* 14-bit lossless */
            7,
            6,
            8,
            5,
            9,
            4,
            10,
            3,
            11,
            12,
            2,
            0,
            1,
            13,
            14
          ]
        ], b = A.t256[0], g = A.t257[0], v = A.t258[0], m = 0, w = 0, k = t.decode._make_decoder, C = t.decode._getbithuff, y = n[0].exifIFD.makerNote, B = y.t150 ? y.t150 : y.t140, F = 0, G = B[F++], V = B[F++];
        (G == 73 || V == 88) && (F += 2110), G == 70 && (m = 2), v == 14 && (m += 3);
        for (var M = [[0, 0], [0, 0]], T = A.isLE ? t._binLE : t._binBE, e0 = 0; e0 < 2; e0++)
          for (var Q = 0; Q < 2; Q++)
            M[e0][Q] = T.readShort(B, F), F += 2;
        var L = 1 << v & 32767, J = 0, r0 = T.readShort(B, F);
        F += 2, r0 > 1 && (J = Math.floor(L / (r0 - 1))), G == 68 && V == 32 && J > 0 && (w = T.readShort(B, 562));
        var e0, q, _, x, N, D, Y = [0, 0], z = k(d[m]), j = [f, 0, 0, 0];
        for (q = 0; q < g; q++)
          for (w && q == w && (z = k(d[m + 1])), _ = 0; _ < b; _++) {
            e0 = C(o, j, z[0], z), x = e0 & 15, N = e0 >>> 4, D = (C(o, j, x - N, 0) << 1) + 1 << N >>> 1, D & 1 << x - 1 || (D -= (1 << x) - (N == 0 ? 1 : 0)), _ < 2 ? Y[_] = M[q & 1][_] += D : Y[_ & 1] += D;
            var A0 = Math.min(Math.max(Y[_ & 1], 0), (1 << v) - 1), l0 = (q * b + _) * v;
            t.decode._putsF(c, l0, A0 << 16 - v);
          }
      }, t.decode._putsF = function(A, n, o) {
        o = o << 8 - (n & 7);
        var f = n >>> 3;
        A[f] |= o >>> 16, A[f + 1] |= o >>> 8, A[f + 2] |= o;
      }, t.decode._getbithuff = function(A, n, o, f) {
        var l = 0;
        t.decode._get_byte;
        var c, h = n[0], d = n[1], b = n[2], g = n[3];
        if (o == 0 || b < 0)
          return 0;
        for (; !g && b < o && (c = A[h++]) != -1 && !(g = l); )
          d = (d << 8) + c, b += 8;
        if (c = d << 32 - b >>> 32 - o, f ? (b -= f[c + 1] >>> 8, c = f[c + 1] & 255) : b -= o, b < 0)
          throw "e";
        return n[0] = h, n[1] = d, n[2] = b, n[3] = g, c;
      }, t.decode._make_decoder = function(A) {
        var n, o, f, l, c, h = [];
        for (n = 16; n != 0 && !A[n]; n--)
          ;
        var d = 17;
        for (h[0] = n, f = o = 1; o <= n; o++)
          for (l = 0; l < A[o]; l++, ++d)
            for (c = 0; c < 1 << n - o; c++)
              f <= 1 << n && (h[f++] = o << 8 | A[d]);
        return h;
      }, t.decode._decodeNewJPEG = function(A, n, o, f, l, c) {
        var h = A.t347, d = h ? h.length : 0, b = new Uint8Array(d + f);
        if (h) {
          for (var g = 216, v = 217, m = 0, w = 0; w < d - 1 && !(h[w] == 255 && h[w + 1] == v); w++)
            b[m++] = h[w];
          var k = n[o], C = n[o + 1];
          (k != 255 || C != g) && (b[m++] = k, b[m++] = C);
          for (var w = 2; w < f; w++)
            b[m++] = n[o + w];
        } else
          for (var w = 0; w < f; w++)
            b[w] = n[o + w];
        if (A.t262[0] == 32803 || A.t262[0] == 34892) {
          var y = A.t258[0], B = t.LosslessJpegDecode(b), F = B.length;
          if (y == 16)
            if (A.isLE)
              for (var w = 0; w < F; w++)
                l[c + (w << 1)] = B[w] & 255, l[c + (w << 1) + 1] = B[w] >>> 8;
            else
              for (var w = 0; w < F; w++)
                l[c + (w << 1)] = B[w] >>> 8, l[c + (w << 1) + 1] = B[w] & 255;
          else if (y == 14 || y == 12)
            for (var G = 16 - y, w = 0; w < F; w++)
              t.decode._putsF(l, w * y, B[w] << G);
          else
            throw new Error("unsupported bit depth " + y);
        } else {
          var V = new t.JpegDecoder();
          V.parse(b);
          for (var M = V.getData(V.width, V.height), w = 0; w < M.length; w++)
            l[c + w] = M[w];
        }
        A.t262[0] == 6 && (A.t262[0] = 2);
      }, t.decode._decodeOldJPEGInit = function(A, n, o, f) {
        var l = 216, c = 219, h = 196, d = 221, b = 192, g = 218, v = 0, m = 0, w, k, C = !1, y, B, F, G = A.t513, V = G ? G[0] : 0, M = A.t514, T = M ? M[0] : 0, Q = A.t324 || A.t273 || G, L = A.t530, J = 0, r0 = 0, e0 = A.t277 ? A.t277[0] : 1, q = A.t515;
        if (Q && (m = Q[0], C = Q.length > 1), !C) {
          if (n[o] == 255 && n[o + 1] == l)
            return { jpegOffset: o };
          if (G != null && (n[o + V] == 255 && n[o + V + 1] == l ? v = o + V : a("JPEGInterchangeFormat does not point to SOI"), M == null ? a("JPEGInterchangeFormatLength field is missing") : (V >= m || V + T <= m) && a("JPEGInterchangeFormatLength field value is invalid"), v != null))
            return { jpegOffset: v };
        }
        if (L != null && (J = L[0], r0 = L[1]), G != null && M != null)
          if (T >= 2 && V + T <= m) {
            for (n[o + V + T - 2] == 255 && n[o + V + T - 1] == l ? w = new Uint8Array(T - 2) : w = new Uint8Array(T), y = 0; y < w.length; y++)
              w[y] = n[o + V + y];
            a("Incorrect JPEG interchange format: using JPEGInterchangeFormat offset to derive tables");
          } else
            a("JPEGInterchangeFormat+JPEGInterchangeFormatLength > offset to first strip or tile");
        if (w == null) {
          var _ = 0, x = [];
          x[_++] = 255, x[_++] = l;
          var N = A.t519;
          if (N == null)
            throw new Error("JPEGQTables tag is missing");
          for (y = 0; y < N.length; y++)
            for (x[_++] = 255, x[_++] = c, x[_++] = 0, x[_++] = 67, x[_++] = y, B = 0; B < 64; B++)
              x[_++] = n[o + N[y] + B];
          for (F = 0; F < 2; F++) {
            var D = A[F == 0 ? "t520" : "t521"];
            if (D == null)
              throw new Error((F == 0 ? "JPEGDCTables" : "JPEGACTables") + " tag is missing");
            for (y = 0; y < D.length; y++) {
              x[_++] = 255, x[_++] = h;
              var Y = 19;
              for (B = 0; B < 16; B++)
                Y += n[o + D[y] + B];
              for (x[_++] = Y >>> 8, x[_++] = Y & 255, x[_++] = y | F << 4, B = 0; B < 16; B++)
                x[_++] = n[o + D[y] + B];
              for (B = 0; B < Y; B++)
                x[_++] = n[o + D[y] + 16 + B];
            }
          }
          if (x[_++] = 255, x[_++] = b, x[_++] = 0, x[_++] = 8 + 3 * e0, x[_++] = 8, x[_++] = A.height >>> 8 & 255, x[_++] = A.height & 255, x[_++] = A.width >>> 8 & 255, x[_++] = A.width & 255, x[_++] = e0, e0 == 1)
            x[_++] = 1, x[_++] = 17, x[_++] = 0;
          else
            for (y = 0; y < 3; y++)
              x[_++] = y + 1, x[_++] = y != 0 ? 17 : (J & 15) << 4 | r0 & 15, x[_++] = y;
          q != null && q[0] != 0 && (x[_++] = 255, x[_++] = d, x[_++] = 0, x[_++] = 4, x[_++] = q[0] >>> 8 & 255, x[_++] = q[0] & 255), w = new Uint8Array(x);
        }
        var z = -1;
        for (y = 0; y < w.length - 1; ) {
          if (w[y] == 255 && w[y + 1] == b) {
            z = y;
            break;
          }
          y++;
        }
        if (z == -1) {
          var j = new Uint8Array(w.length + 10 + 3 * e0);
          j.set(w);
          var A0 = w.length;
          if (z = w.length, w = j, w[A0++] = 255, w[A0++] = b, w[A0++] = 0, w[A0++] = 8 + 3 * e0, w[A0++] = 8, w[A0++] = A.height >>> 8 & 255, w[A0++] = A.height & 255, w[A0++] = A.width >>> 8 & 255, w[A0++] = A.width & 255, w[A0++] = e0, e0 == 1)
            w[A0++] = 1, w[A0++] = 17, w[A0++] = 0;
          else
            for (y = 0; y < 3; y++)
              w[A0++] = y + 1, w[A0++] = y != 0 ? 17 : (J & 15) << 4 | r0 & 15, w[A0++] = y;
        }
        if (n[m] == 255 && n[m + 1] == g) {
          var l0 = n[m + 2] << 8 | n[m + 3];
          for (k = new Uint8Array(l0 + 2), k[0] = n[m], k[1] = n[m + 1], k[2] = n[m + 2], k[3] = n[m + 3], y = 0; y < l0 - 2; y++)
            k[y + 4] = n[m + y + 4];
        } else {
          k = new Uint8Array(2 + 6 + 2 * e0);
          var n0 = 0;
          if (k[n0++] = 255, k[n0++] = g, k[n0++] = 0, k[n0++] = 6 + 2 * e0, k[n0++] = e0, e0 == 1)
            k[n0++] = 1, k[n0++] = 0;
          else
            for (y = 0; y < 3; y++)
              k[n0++] = y + 1, k[n0++] = y << 4 | y;
          k[n0++] = 0, k[n0++] = 63, k[n0++] = 0;
        }
        return { jpegOffset: o, tables: w, sosMarker: k, sofPosition: z };
      }, t.decode._decodeOldJPEG = function(A, n, o, f, l, c) {
        var h, d, b, g, v, m = t.decode._decodeOldJPEGInit(A, n, o, f);
        if (m.jpegOffset != null)
          for (d = o + f - m.jpegOffset, g = new Uint8Array(d), h = 0; h < d; h++)
            g[h] = n[m.jpegOffset + h];
        else {
          for (b = m.tables.length, g = new Uint8Array(b + m.sosMarker.length + f + 2), g.set(m.tables), v = b, g[m.sofPosition + 5] = A.height >>> 8 & 255, g[m.sofPosition + 6] = A.height & 255, g[m.sofPosition + 7] = A.width >>> 8 & 255, g[m.sofPosition + 8] = A.width & 255, (n[o] != 255 || n[o + 1] != SOS) && (g.set(m.sosMarker, v), v += sosMarker.length), h = 0; h < f; h++)
            g[v++] = n[o + h];
          g[v++] = 255, g[v++] = EOI;
        }
        var w = new t.JpegDecoder();
        w.parse(g);
        for (var k = w.getData(w.width, w.height), h = 0; h < k.length; h++)
          l[c + h] = k[h];
        A.t262 && A.t262[0] == 6 && (A.t262[0] = 2);
      }, t.decode._decodePackBits = function(A, n, o, f, l) {
        for (var c = new Int8Array(A.buffer), h = new Int8Array(f.buffer), d = n + o; n < d; ) {
          var b = c[n];
          if (n++, b >= 0 && b < 128)
            for (var g = 0; g < b + 1; g++)
              h[l] = c[n], l++, n++;
          if (b >= -127 && b < 0) {
            for (var g = 0; g < -b + 1; g++)
              h[l] = c[n], l++;
            n++;
          }
        }
      }, t.decode._decodeThunder = function(A, n, o, f, l) {
        for (var c = [0, 1, 0, -1], h = [0, 1, 2, 3, 0, -3, -2, -1], d = n + o, b = l * 2, g = 0; n < d; ) {
          var v = A[n], m = v >>> 6, w = v & 63;
          if (n++, m == 3 && (g = w & 15, f[b >>> 1] |= g << 4 * (1 - b & 1), b++), m == 0)
            for (var k = 0; k < w; k++)
              f[b >>> 1] |= g << 4 * (1 - b & 1), b++;
          if (m == 2)
            for (var k = 0; k < 2; k++) {
              var C = w >>> 3 * (1 - k) & 7;
              C != 4 && (g += h[C], f[b >>> 1] |= g << 4 * (1 - b & 1), b++);
            }
          if (m == 1)
            for (var k = 0; k < 3; k++) {
              var C = w >>> 2 * (2 - k) & 3;
              C != 2 && (g += c[C], f[b >>> 1] |= g << 4 * (1 - b & 1), b++);
            }
        }
      }, t.decode._dmap = { 1: 0, "011": 1, "000011": 2, "0000011": 3, "010": -1, "000010": -2, "0000010": -3 }, t.decode._lens = function() {
        var A = function(b, g, v, m) {
          for (var w = 0; w < g.length; w++)
            b[g[w]] = v + w * m;
        }, n = "00110101,000111,0111,1000,1011,1100,1110,1111,10011,10100,00111,01000,001000,000011,110100,110101,101010,101011,0100111,0001100,0001000,0010111,0000011,0000100,0101000,0101011,0010011,0100100,0011000,00000010,00000011,00011010,00011011,00010010,00010011,00010100,00010101,00010110,00010111,00101000,00101001,00101010,00101011,00101100,00101101,00000100,00000101,00001010,00001011,01010010,01010011,01010100,01010101,00100100,00100101,01011000,01011001,01011010,01011011,01001010,01001011,00110010,00110011,00110100", o = "0000110111,010,11,10,011,0011,0010,00011,000101,000100,0000100,0000101,0000111,00000100,00000111,000011000,0000010111,0000011000,0000001000,00001100111,00001101000,00001101100,00000110111,00000101000,00000010111,00000011000,000011001010,000011001011,000011001100,000011001101,000001101000,000001101001,000001101010,000001101011,000011010010,000011010011,000011010100,000011010101,000011010110,000011010111,000001101100,000001101101,000011011010,000011011011,000001010100,000001010101,000001010110,000001010111,000001100100,000001100101,000001010010,000001010011,000000100100,000000110111,000000111000,000000100111,000000101000,000001011000,000001011001,000000101011,000000101100,000001011010,000001100110,000001100111", f = "11011,10010,010111,0110111,00110110,00110111,01100100,01100101,01101000,01100111,011001100,011001101,011010010,011010011,011010100,011010101,011010110,011010111,011011000,011011001,011011010,011011011,010011000,010011001,010011010,011000,010011011", l = "0000001111,000011001000,000011001001,000001011011,000000110011,000000110100,000000110101,0000001101100,0000001101101,0000001001010,0000001001011,0000001001100,0000001001101,0000001110010,0000001110011,0000001110100,0000001110101,0000001110110,0000001110111,0000001010010,0000001010011,0000001010100,0000001010101,0000001011010,0000001011011,0000001100100,0000001100101", c = "00000001000,00000001100,00000001101,000000010010,000000010011,000000010100,000000010101,000000010110,000000010111,000000011100,000000011101,000000011110,000000011111";
        n = n.split(","), o = o.split(","), f = f.split(","), l = l.split(","), c = c.split(",");
        var h = {}, d = {};
        return A(h, n, 0, 1), A(h, f, 64, 64), A(h, c, 1792, 64), A(d, o, 0, 1), A(d, l, 64, 64), A(d, c, 1792, 64), [h, d];
      }(), t.decode._decodeG4 = function(A, n, o, f, l, c, h) {
        for (var d = t.decode, b = n << 3, g = 0, v = "", m = [], w = [], k = 0; k < c; k++)
          w.push(0);
        w = d._makeDiff(w);
        for (var C = 0, y = 0, B = 0, F = 0, G = 0, V = 0, M = "", T = 0, Q = Math.ceil(c / 8) * 8; b >>> 3 < n + o; ) {
          B = d._findDiff(w, C + (C == 0 ? 0 : 1), 1 - G), F = d._findDiff(w, B, G);
          var L = 0;
          if (h == 1 && (L = A[b >>> 3] >>> 7 - (b & 7) & 1), h == 2 && (L = A[b >>> 3] >>> (b & 7) & 1), b++, v += L, M == "H") {
            if (d._lens[G][v] != null) {
              var J = d._lens[G][v];
              v = "", g += J, J < 64 && (d._addNtimes(m, g, G), C += g, G = 1 - G, g = 0, T--, T == 0 && (M = ""));
            }
          } else
            v == "0001" && (v = "", d._addNtimes(m, F - C, G), C = F), v == "001" && (v = "", M = "H", T = 2), d._dmap[v] != null && (y = B + d._dmap[v], d._addNtimes(m, y - C, G), C = y, v = "", G = 1 - G);
          m.length == c && M == "" && (d._writeBits(m, f, l * 8 + V * Q), G = 0, V++, C = 0, w = d._makeDiff(m), m = []);
        }
      }, t.decode._findDiff = function(A, n, o) {
        for (var f = 0; f < A.length; f += 2)
          if (A[f] >= n && A[f + 1] == o)
            return A[f];
      }, t.decode._makeDiff = function(A) {
        var n = [];
        A[0] == 1 && n.push(0, 1);
        for (var o = 1; o < A.length; o++)
          A[o - 1] != A[o] && n.push(o, A[o]);
        return n.push(A.length, 0, A.length, 1), n;
      }, t.decode._decodeG3 = function(A, n, o, f, l, c, h) {
        for (var d = t.decode, b = n << 3, g = 0, v = "", m = [], w = [], k = 0; k < c; k++)
          m.push(0);
        for (var C = 0, y = 0, B = 0, F = 0, G = 0, V = -1, M = "", T = 0, Q = !1, L = Math.ceil(c / 8) * 8; b >>> 3 < n + o; ) {
          B = d._findDiff(w, C + (C == 0 ? 0 : 1), 1 - G), F = d._findDiff(w, B, G);
          var J = 0;
          if (h == 1 && (J = A[b >>> 3] >>> 7 - (b & 7) & 1), h == 2 && (J = A[b >>> 3] >>> (b & 7) & 1), b++, v += J, Q) {
            if (d._lens[G][v] != null) {
              var r0 = d._lens[G][v];
              v = "", g += r0, r0 < 64 && (d._addNtimes(m, g, G), G = 1 - G, g = 0);
            }
          } else if (M == "H") {
            if (d._lens[G][v] != null) {
              var r0 = d._lens[G][v];
              v = "", g += r0, r0 < 64 && (d._addNtimes(m, g, G), C += g, G = 1 - G, g = 0, T--, T == 0 && (M = ""));
            }
          } else
            v == "0001" && (v = "", d._addNtimes(m, F - C, G), C = F), v == "001" && (v = "", M = "H", T = 2), d._dmap[v] != null && (y = B + d._dmap[v], d._addNtimes(m, y - C, G), C = y, v = "", G = 1 - G);
          v.endsWith("000000000001") && (V >= 0 && d._writeBits(m, f, l * 8 + V * L), h == 1 && (Q = (A[b >>> 3] >>> 7 - (b & 7) & 1) == 1), h == 2 && (Q = (A[b >>> 3] >>> (b & 7) & 1) == 1), b++, d._decodeG3.allow2D == null && (d._decodeG3.allow2D = Q), d._decodeG3.allow2D || (Q = !0, b--), v = "", G = 0, V++, C = 0, w = d._makeDiff(m), m = []);
        }
        m.length == c && d._writeBits(m, f, l * 8 + V * L);
      }, t.decode._addNtimes = function(A, n, o) {
        for (var f = 0; f < n; f++)
          A.push(o);
      }, t.decode._writeBits = function(A, n, o) {
        for (var f = 0; f < A.length; f++)
          n[o + f >>> 3] |= A[f] << 7 - (o + f & 7);
      }, t.decode._decodeLZW = function(A, n, o, f) {
        if (t.decode._lzwTab == null) {
          for (var l = new Uint32Array(65535), c = new Uint16Array(65535), v = new Uint8Array(2e6), h = 0; h < 256; h++)
            v[h << 2] = h, l[h] = h << 2, c[h] = 1;
          t.decode._lzwTab = [l, c, v];
        }
        for (var d = t.decode._copyData, b = t.decode._lzwTab[0], g = t.decode._lzwTab[1], v = t.decode._lzwTab[2], m = 258, w = 1032, k = 9, C = n << 3, y = 256, B = 257, F = 0, G = 0, V = 0; F = A[C >>> 3] << 16 | A[C + 8 >>> 3] << 8 | A[C + 16 >>> 3], G = F >> 24 - (C & 7) - k & (1 << k) - 1, C += k, G != B; ) {
          if (G == y) {
            if (k = 9, m = 258, w = 1032, F = A[C >>> 3] << 16 | A[C + 8 >>> 3] << 8 | A[C + 16 >>> 3], G = F >> 24 - (C & 7) - k & (1 << k) - 1, C += k, G == B)
              break;
            o[f] = G, f++;
          } else if (G < m) {
            var M = b[G], T = g[G];
            if (d(v, M, o, f, T), f += T, V >= m)
              b[m] = w, v[b[m]] = M[0], g[m] = 1, w = w + 1 + 3 & -4, m++;
            else {
              b[m] = w;
              var Q = b[V], L = g[V];
              d(v, Q, v, w, L), v[w + L] = v[M], L++, g[m] = L, m++, w = w + L + 3 & -4;
            }
            m + 1 == 1 << k && k++;
          } else {
            if (V >= m)
              b[m] = w, g[m] = 0, m++;
            else {
              b[m] = w;
              var Q = b[V], L = g[V];
              d(v, Q, v, w, L), v[w + L] = v[w], L++, g[m] = L, m++, d(v, w, o, f, L), f += L, w = w + L + 3 & -4;
            }
            m + 1 == 1 << k && k++;
          }
          V = G;
        }
      }, t.decode._copyData = function(A, n, o, f, l) {
        for (var c = 0; c < l; c += 4)
          o[f + c] = A[n + c], o[f + c + 1] = A[n + c + 1], o[f + c + 2] = A[n + c + 2], o[f + c + 3] = A[n + c + 3];
      }, t.tags = {}, t.ttypes = { 256: 3, 257: 3, 258: 3, 259: 3, 262: 3, 273: 4, 274: 3, 277: 3, 278: 4, 279: 4, 282: 5, 283: 5, 284: 3, 286: 5, 287: 5, 296: 3, 305: 2, 306: 2, 338: 3, 513: 4, 514: 4, 34665: 4 }, t._readIFD = function(A, n, o, f, l, c) {
        var h = A.readUshort(n, o);
        o += 2;
        var d = {};
        f.push(d), c && a("   ".repeat(l), f.length - 1, ">>>----------------");
        for (var b = 0; b < h; b++) {
          var g = A.readUshort(n, o);
          o += 2;
          var v = A.readUshort(n, o);
          o += 2;
          var m = A.readUint(n, o);
          o += 4;
          var w = A.readUint(n, o);
          o += 4;
          var k = [];
          if ((v == 1 || v == 7) && (k = new Uint8Array(n.buffer, m < 5 ? o - 4 : w, m)), v == 2) {
            var C = m < 5 ? o - 4 : w, y = n[C];
            y < 128 ? k.push(A.readASCII(n, C, m - 1)) : k = new Uint8Array(n.buffer, C, m - 1);
          }
          if (v == 3)
            for (var B = 0; B < m; B++)
              k.push(A.readUshort(n, (m < 3 ? o - 4 : w) + 2 * B));
          if (v == 4)
            for (var B = 0; B < m; B++)
              k.push(A.readUint(n, (m < 2 ? o - 4 : w) + 4 * B));
          if (v == 5)
            for (var B = 0; B < m; B++)
              k.push(A.readUint(n, w + B * 8) / A.readUint(n, w + B * 8 + 4));
          if (v == 8)
            for (var B = 0; B < m; B++)
              k.push(A.readShort(n, (m < 3 ? o - 4 : w) + 2 * B));
          if (v == 9)
            for (var B = 0; B < m; B++)
              k.push(A.readInt(n, (m < 2 ? o - 4 : w) + 4 * B));
          if (v == 10)
            for (var B = 0; B < m; B++)
              k.push(A.readInt(n, w + B * 8) / A.readInt(n, w + B * 8 + 4));
          if (v == 11)
            for (var B = 0; B < m; B++)
              k.push(A.readFloat(n, w + B * 4));
          if (v == 12)
            for (var B = 0; B < m; B++)
              k.push(A.readDouble(n, w + B * 8));
          if (d["t" + g] = k, m != 0 && k.length == 0 && a("unknown TIFF tag type: ", v, "num:", m), c && a("   ".repeat(l), g, v, t.tags[g], k), !(g == 330 && d.t272 && d.t272[0] == "DSLR-A100")) {
            if (g == 330 || g == 34665 || g == 50740 && A.readUshort(n, A.readUint(k, 0)) < 300) {
              for (var F = g == 50740 ? [A.readUint(k, 0)] : k, G = [], B = 0; B < F.length; B++)
                t._readIFD(A, n, F[B], G, l + 1, c);
              g == 330 && (d.subIFD = G), g == 34665 && (d.exifIFD = G[0]), g == 50740 && (d.dngPrvt = G[0]);
            }
          }
          if (g == 37500) {
            var V = k;
            if (A.readASCII(V, 0, 5) == "Nikon")
              d.makerNote = t.decode(V.slice(10).buffer)[0];
            else if (A.readUshort(n, w) < 300) {
              var M = [];
              t._readIFD(A, n, w, M, l + 1, c), d.makerNote = M[0];
            }
          }
        }
        return c && a("   ".repeat(l), "<<<---------------"), o;
      }, t._writeIFD = function(A, n, o, f) {
        var l = Object.keys(f);
        A.writeUshort(n, o, l.length), o += 2;
        for (var c = o + l.length * 12 + 4, h = 0; h < l.length; h++) {
          var d = l[h], b = parseInt(d.slice(1)), g = t.ttypes[b];
          if (g == null)
            throw new Error("unknown type of tag: " + b);
          var v = f[d];
          g == 2 && (v = v[0] + "\0");
          var m = v.length;
          A.writeUshort(n, o, b), o += 2, A.writeUshort(n, o, g), o += 2, A.writeUint(n, o, m), o += 4;
          var w = [-1, 1, 1, 2, 4, 8, 0, 0, 0, 0, 0, 0, 8][g] * m, k = o;
          if (w > 4 && (A.writeUint(n, o, c), k = c), g == 2 && A.writeASCII(n, k, v), g == 3)
            for (var C = 0; C < m; C++)
              A.writeUshort(n, k + 2 * C, v[C]);
          if (g == 4)
            for (var C = 0; C < m; C++)
              A.writeUint(n, k + 4 * C, v[C]);
          if (g == 5)
            for (var C = 0; C < m; C++)
              A.writeUint(n, k + 8 * C, Math.round(v[C] * 1e4)), A.writeUint(n, k + 8 * C + 4, 1e4);
          if (g == 12)
            for (var C = 0; C < m; C++)
              A.writeDouble(n, k + 8 * C, v[C]);
          w > 4 && (w += w & 1, c += w), o += 4;
        }
        return [o, c];
      }, t.toRGBA8 = function(A) {
        var n = A.width, o = A.height, f = n * o, l = f * 4, c = A.data, h = new Uint8Array(f * 4), d = A.t262 ? A.t262[0] : 2, b = A.t258 ? Math.min(32, A.t258[0]) : 1;
        if (d == 0)
          for (var g = Math.ceil(b * n / 8), v = 0; v < o; v++) {
            var m = v * g, w = v * n;
            if (b == 1)
              for (var k = 0; k < n; k++) {
                var C = w + k << 2, y = c[m + (k >> 3)] >> 7 - (k & 7) & 1;
                h[C] = h[C + 1] = h[C + 2] = (1 - y) * 255, h[C + 3] = 255;
              }
            if (b == 4)
              for (var k = 0; k < n; k++) {
                var C = w + k << 2, y = c[m + (k >> 1)] >> 4 - 4 * (k & 1) & 15;
                h[C] = h[C + 1] = h[C + 2] = (15 - y) * 17, h[C + 3] = 255;
              }
            if (b == 8)
              for (var k = 0; k < n; k++) {
                var C = w + k << 2, y = c[m + k];
                h[C] = h[C + 1] = h[C + 2] = 255 - y, h[C + 3] = 255;
              }
          }
        else if (d == 1)
          for (var g = Math.ceil(b * n / 8), v = 0; v < o; v++) {
            var m = v * g, w = v * n;
            if (b == 1)
              for (var k = 0; k < n; k++) {
                var C = w + k << 2, y = c[m + (k >> 3)] >> 7 - (k & 7) & 1;
                h[C] = h[C + 1] = h[C + 2] = y * 255, h[C + 3] = 255;
              }
            if (b == 2)
              for (var k = 0; k < n; k++) {
                var C = w + k << 2, y = c[m + (k >> 2)] >> 6 - 2 * (k & 3) & 3;
                h[C] = h[C + 1] = h[C + 2] = y * 85, h[C + 3] = 255;
              }
            if (b == 8)
              for (var k = 0; k < n; k++) {
                var C = w + k << 2, y = c[m + k];
                h[C] = h[C + 1] = h[C + 2] = y, h[C + 3] = 255;
              }
            if (b == 16)
              for (var k = 0; k < n; k++) {
                var C = w + k << 2, y = c[m + (2 * k + 1)];
                h[C] = h[C + 1] = h[C + 2] = Math.min(255, y), h[C + 3] = 255;
              }
          }
        else if (d == 2) {
          var B = A.t258 ? A.t258.length : 3;
          if (b == 8) {
            if (B == 4)
              for (var k = 0; k < l; k++)
                h[k] = c[k];
            if (B == 3)
              for (var k = 0; k < f; k++) {
                var C = k << 2, F = k * 3;
                h[C] = c[F], h[C + 1] = c[F + 1], h[C + 2] = c[F + 2], h[C + 3] = 255;
              }
          } else {
            if (B == 4)
              for (var k = 0; k < f; k++) {
                var C = k << 2, F = k * 8 + 1;
                h[C] = c[F], h[C + 1] = c[F + 2], h[C + 2] = c[F + 4], h[C + 3] = c[F + 6];
              }
            if (B == 3)
              for (var k = 0; k < f; k++) {
                var C = k << 2, F = k * 6 + 1;
                h[C] = c[F], h[C + 1] = c[F + 2], h[C + 2] = c[F + 4], h[C + 3] = 255;
              }
          }
        } else if (d == 3)
          for (var G = A.t320, k = 0; k < f; k++) {
            var C = k << 2, V = c[k];
            h[C] = G[V] >> 8, h[C + 1] = G[256 + V] >> 8, h[C + 2] = G[512 + V] >> 8, h[C + 3] = 255;
          }
        else if (d == 5)
          for (var B = A.t258 ? A.t258.length : 4, M = B > 4 ? 1 : 0, k = 0; k < f; k++) {
            var C = k << 2, T = k * B, Q = 255 - c[T], L = 255 - c[T + 1], J = 255 - c[T + 2], r0 = (255 - c[T + 3]) * (1 / 255);
            h[C] = ~~(Q * r0 + 0.5), h[C + 1] = ~~(L * r0 + 0.5), h[C + 2] = ~~(J * r0 + 0.5), h[C + 3] = 255 * (1 - M) + c[T + 4] * M;
          }
        else
          a("Unknown Photometric interpretation: " + d);
        return h;
      }, t.replaceIMG = function(A) {
        A == null && (A = document.getElementsByTagName("img"));
        for (var n = ["tif", "tiff", "dng", "cr2", "nef"], o = 0; o < A.length; o++) {
          var f = A[o], l = f.getAttribute("src");
          if (l != null) {
            var c = l.split(".").pop().toLowerCase();
            if (n.indexOf(c) != -1) {
              var h = new XMLHttpRequest();
              t._xhrs.push(h), t._imgs.push(f), h.open("GET", l), h.responseType = "arraybuffer", h.onload = t._imgLoaded, h.send();
            }
          }
        }
      }, t._xhrs = [], t._imgs = [], t._imgLoaded = function(A) {
        var n = A.target.response, o = t.decode(n), f = o, l = 0, c = f[0];
        o[0].subIFD && (f = f.concat(o[0].subIFD));
        for (var h = 0; h < f.length; h++) {
          var w = f[h];
          if (!(w.t258 == null || w.t258.length < 3)) {
            var d = w.t256 * w.t257;
            d > l && (l = d, c = w);
          }
        }
        t.decodeImage(n, c, o);
        var b = t.toRGBA8(c), g = c.width, v = c.height, m = t._xhrs.indexOf(A.target), w = t._imgs[m];
        t._xhrs.splice(m, 1), t._imgs.splice(m, 1);
        var k = document.createElement("canvas");
        k.width = g, k.height = v;
        for (var C = k.getContext("2d"), y = C.createImageData(g, v), h = 0; h < b.length; h++)
          y.data[h] = b[h];
        C.putImageData(y, 0, 0), w.setAttribute("src", k.toDataURL());
      }, t._binBE = {
        nextZero: function(A, n) {
          for (; A[n] != 0; )
            n++;
          return n;
        },
        readUshort: function(A, n) {
          return A[n] << 8 | A[n + 1];
        },
        readShort: function(A, n) {
          var o = t._binBE.ui8;
          return o[0] = A[n + 1], o[1] = A[n + 0], t._binBE.i16[0];
        },
        readInt: function(A, n) {
          var o = t._binBE.ui8;
          return o[0] = A[n + 3], o[1] = A[n + 2], o[2] = A[n + 1], o[3] = A[n + 0], t._binBE.i32[0];
        },
        readUint: function(A, n) {
          var o = t._binBE.ui8;
          return o[0] = A[n + 3], o[1] = A[n + 2], o[2] = A[n + 1], o[3] = A[n + 0], t._binBE.ui32[0];
        },
        readASCII: function(A, n, o) {
          for (var f = "", l = 0; l < o; l++)
            f += String.fromCharCode(A[n + l]);
          return f;
        },
        readFloat: function(A, n) {
          for (var o = t._binBE.ui8, f = 0; f < 4; f++)
            o[f] = A[n + 3 - f];
          return t._binBE.fl32[0];
        },
        readDouble: function(A, n) {
          for (var o = t._binBE.ui8, f = 0; f < 8; f++)
            o[f] = A[n + 7 - f];
          return t._binBE.fl64[0];
        },
        writeUshort: function(A, n, o) {
          A[n] = o >> 8 & 255, A[n + 1] = o & 255;
        },
        writeUint: function(A, n, o) {
          A[n] = o >> 24 & 255, A[n + 1] = o >> 16 & 255, A[n + 2] = o >> 8 & 255, A[n + 3] = o >> 0 & 255;
        },
        writeASCII: function(A, n, o) {
          for (var f = 0; f < o.length; f++)
            A[n + f] = o.charCodeAt(f);
        },
        writeDouble: function(A, n, o) {
          t._binBE.fl64[0] = o;
          for (var f = 0; f < 8; f++)
            A[n + f] = t._binBE.ui8[7 - f];
        }
      }, t._binBE.ui8 = new Uint8Array(8), t._binBE.i16 = new Int16Array(t._binBE.ui8.buffer), t._binBE.i32 = new Int32Array(t._binBE.ui8.buffer), t._binBE.ui32 = new Uint32Array(t._binBE.ui8.buffer), t._binBE.fl32 = new Float32Array(t._binBE.ui8.buffer), t._binBE.fl64 = new Float64Array(t._binBE.ui8.buffer), t._binLE = {
        nextZero: t._binBE.nextZero,
        readUshort: function(A, n) {
          return A[n + 1] << 8 | A[n];
        },
        readShort: function(A, n) {
          var o = t._binBE.ui8;
          return o[0] = A[n + 0], o[1] = A[n + 1], t._binBE.i16[0];
        },
        readInt: function(A, n) {
          var o = t._binBE.ui8;
          return o[0] = A[n + 0], o[1] = A[n + 1], o[2] = A[n + 2], o[3] = A[n + 3], t._binBE.i32[0];
        },
        readUint: function(A, n) {
          var o = t._binBE.ui8;
          return o[0] = A[n + 0], o[1] = A[n + 1], o[2] = A[n + 2], o[3] = A[n + 3], t._binBE.ui32[0];
        },
        readASCII: t._binBE.readASCII,
        readFloat: function(A, n) {
          for (var o = t._binBE.ui8, f = 0; f < 4; f++)
            o[f] = A[n + f];
          return t._binBE.fl32[0];
        },
        readDouble: function(A, n) {
          for (var o = t._binBE.ui8, f = 0; f < 8; f++)
            o[f] = A[n + f];
          return t._binBE.fl64[0];
        }
      }, t._copyTile = function(A, n, o, f, l, c, h, d) {
        for (var b = Math.min(n, l - h), g = Math.min(o, c - d), v = 0; v < g; v++)
          for (var m = (d + v) * l + h, w = v * n, k = 0; k < b; k++)
            f[m + k] = A[w + k];
      }, t.LosslessJpegDecode = function() {
        function A(l) {
          this.w = l, this.N = 0, this._ = 0, this.G = 0;
        }
        A.prototype = { t: function(l) {
          this.N = Math.max(0, Math.min(this.w.length, l));
        }, i: function() {
          return this.w[this.N++];
        }, l: function() {
          var l = this.N;
          return this.N += 2, this.w[l] << 8 | this.w[l + 1];
        }, J: function() {
          return this._ == 0 && (this.G = this.w[this.N], this.N += 1 + (this.G + 1 >>> 8), this._ = 8), this.G >>> --this._ & 1;
        }, Z: function(l) {
          var c = this._, h = this.G, d = Math.min(c, l);
          l -= d, c -= d;
          for (var b = h >>> c & (1 << d) - 1; l > 0; )
            h = this.w[this.N], this.N += 1 + (h + 1 >>> 8), d = Math.min(8, l), l -= d, c = 8 - d, b <<= d, b |= h >>> c & (1 << d) - 1;
          return this._ = c, this.G = h, b;
        } };
        var n = {};
        n.X = function() {
          return [0, 0, -1];
        }, n.s = function(l, c, h) {
          l[n.Y(l, 0, h) + 2] = c;
        }, n.Y = function(l, c, h) {
          if (l[c + 2] != -1)
            return 0;
          if (h == 0)
            return c;
          for (var d = 0; d < 2; d++) {
            l[c + d] == 0 && (l[c + d] = l.length, l.push(0), l.push(0), l.push(-1));
            var b = n.Y(l, l[c + d], h - 1);
            if (b != 0)
              return b;
          }
          return 0;
        }, n.B = function(l, c) {
          for (var h = 0, d = 0, b = 0, g = c._, v = c.G, m = c.N; ; )
            if (g == 0 && (v = c.w[m], m += 1 + (v + 1 >>> 8), g = 8), b = v >>> --g & 1, h = l[h + b], d = l[h + 2], d != -1)
              return c._ = g, c.G = v, c.N = m, d;
          return -1;
        };
        function o(l) {
          this.z = new A(l), this.D(this.z);
        }
        o.prototype = { $: function(l, c) {
          this.Q = l.i(), this.F = l.l(), this.o = l.l();
          var h = this.O = l.i();
          this.L = [];
          for (var d = 0; d < h; d++) {
            var b = l.i();
            l.i(), l.i(), this.L[b] = d;
          }
          l.t(l.N + c - (6 + h * 3));
        }, e: function() {
          var l = 0, c = this.z.i();
          this.H == null && (this.H = {});
          for (var h = this.H[c] = n.X(), d = [], b = 0; b < 16; b++)
            d[b] = this.z.i(), l += d[b];
          for (var b = 0; b < 16; b++)
            for (var g = 0; g < d[b]; g++)
              n.s(h, this.z.i(), b + 1);
          return l + 17;
        }, W: function(l) {
          for (; l > 0; )
            l -= this.e();
        }, p: function(l, c) {
          var h = l.i();
          this.U || (this.U = []);
          for (var d = 0; d < h; d++) {
            var b = l.i(), g = l.i();
            this.U[this.L[b]] = this.H[g >>> 4];
          }
          this.g = l.i(), l.t(l.N + c - (2 + h * 2));
        }, D: function(l) {
          var c = !1, h = l.l();
          if (h === o.q)
            do {
              var h = l.l(), d = l.l() - 2;
              switch (h) {
                case o.m:
                  this.$(l, d);
                  break;
                case o.K:
                  this.W(d);
                  break;
                case o.V:
                  this.p(l, d), c = !0;
                  break;
                default:
                  l.t(l.N + d);
                  break;
              }
            } while (!c);
        }, I: function(l, c) {
          var h = n.B(c, l);
          if (h == 16)
            return -32768;
          var d = l.Z(h);
          return d & 1 << h - 1 || (d -= (1 << h) - 1), d;
        }, B: function(l, c) {
          for (var h = this.z, d = this.O, b = this.F, g = this.I, v = this.g, m = this.o * d, w = this.U, k = 0; k < d; k++)
            l[k] = g(h, w[k]) + (1 << this.Q - 1);
          for (var C = d; C < m; C += d)
            for (var k = 0; k < d; k++)
              l[C + k] = g(h, w[k]) + l[C + k - d];
          for (var y = c, B = 1; B < b; B++) {
            for (var k = 0; k < d; k++)
              l[y + k] = g(h, w[k]) + l[y + k - c];
            for (var C = d; C < m; C += d)
              for (var k = 0; k < d; k++) {
                var F = y + C + k, G = l[F - d];
                v == 6 && (G = l[F - c] + (G - l[F - d - c] >>> 1)), l[F] = G + g(h, w[k]);
              }
            y += c;
          }
        } }, o.m = 65475, o.K = 65476, o.q = 65496, o.V = 65498;
        function f(l) {
          var c = new o(l), h = c.Q > 8 ? Uint16Array : Uint8Array, d = new h(c.o * c.F * c.O), b = c.o * c.O;
          return c.B(d, b), d;
        }
        return f;
      }();
    })(r, e);
  })();
})(Wd);
var Z5 = Wd.exports;
const Lu = /* @__PURE__ */ j4(Z5), $v = (s) => {
  let r;
  const e = s.split(",");
  e[0].indexOf("base64") >= 0 ? r = atob(e[1]) : r = decodeURI(s.split(",")[1]);
  const a = e[0].split(":")[1].split(";")[0], t = new Uint8Array(r.length);
  for (let i = 0; i < r.length; i++)
    t[i] = r.charCodeAt(i);
  return new Blob([t], { type: a });
}, R5 = async (s) => {
  const r = await I5(s);
  return r.type === "image/heic" ? await F5(r) : r.type === "image/tiff" ? await S5(r) : s;
}, I5 = async (s) => await fetch(s, {
  method: "GET",
  cache: "no-cache"
}).then((r) => r.blob()), S5 = async (s) => {
  const r = await s.arrayBuffer(), a = Lu.decode(r)[0];
  Lu.decodeImage(r, a);
  const t = Lu.toRGBA8(a), i = a.width, A = a.height, n = document.createElement("canvas");
  n.width = i, n.height = A;
  const o = n.getContext("2d"), f = o.createImageData(i, A);
  for (let l = 0; l < t.length; l++)
    f.data[l] = t[l];
  return o.putImageData(f, 0, 0), new Promise((l, c) => {
    n.toBlob((h) => {
      h ? l(URL.createObjectURL(h)) : c("Error getting Blob");
    });
  });
}, F5 = async (s) => {
  const r = await g5({ blob: s });
  return URL.createObjectURL(r);
}, W5 = ({ clientWidth: s, clientHeight: r }, e) => {
  const a = e.width / e.height, t = s / r;
  let i, A, n, o;
  return n = 0, o = 0, i = r, A = s, a < t ? (A = e.width * (i / e.height), n = Math.round((s - A) / 2)) : a > t && (i = e.height * (A / e.width), o = Math.round((r - i) / 2)), {
    scale: Number(Number(A / e.width).toFixed(3)),
    x: n,
    y: o,
    width: Math.round(A),
    height: Math.round(i)
  };
}, x5 = (s, r) => {
  s.width(r.clientWidth), s.height(r.clientHeight);
}, Dd = (s, r, { element: e, shape: a }) => {
  if (!r || !s)
    return;
  x5(s, r);
  const t = W5(r, e), { x: i, y: A, width: n, height: o, scale: f } = t;
  return s == null || s.scale({
    x: f,
    y: f
  }), s.setAttr("zoomScale", 1), s.position({ x: i, y: A }), a.width(n / f), a.height(o / f), t;
}, G5 = ({
  imageBoundingBox: s,
  stage: r,
  newPosition: e
}) => {
  const { x: a, y: t, width: i, height: A } = s, n = r.getAttr("zoomScale");
  let o = r.x(), f = r.y();
  const { x: l, y: c } = e;
  (l < a * n || l < o) && (l > r.width() - (i + a) * n || l > o) && (o = l), (c < t * n || c < f) && (c > r.height() - (A + t) * n || c > f) && (f = c), r.position({
    x: o,
    y: f
  }), r.batchDraw();
}, Nd = (s) => {
  s.shapes.destroyChildren(), s.image.batchDraw(), s.shapes.batchDraw();
}, Vd = ({
  image: s,
  orientation: r
}) => {
  let e = 1;
  switch (r) {
    case 0:
      e = 1;
      break;
    case 90:
      e = 6;
      break;
    case 180:
      e = 3;
      break;
    case 270:
      e = 8;
      break;
  }
  return T5(s, e);
}, T5 = (s, r) => new Promise((e) => {
  const a = new Image();
  a.crossOrigin = "", a.onload = () => {
    const t = document.createElement("canvas"), i = t.getContext("2d", {
      alpha: !1
    }), { width: A, height: n } = a, [o, f] = r > 4 && r < 9 ? [n, A] : [A, n], l = Math.max(A, n);
    t.width = l, t.height = l;
    let c = !1, h = !1;
    switch (r) {
      case 2:
        i.transform(-1, 0, 0, 1, l, 0), c = !0;
        break;
      case 3:
        i.transform(-1, 0, 0, -1, l, l), c = !0, h = !0;
        break;
      case 4:
        i.transform(1, 0, 0, -1, 0, l), h = !0;
        break;
      case 5:
        i.transform(0, 1, 1, 0, 0, 0);
        break;
      case 6:
        i.transform(0, 1, -1, 0, l, 0), c = !0;
        break;
      case 7:
        i.transform(0, -1, -1, 0, l, l), c = !0, h = !0;
        break;
      case 8:
        i.transform(0, -1, 1, 0, 0, l), h = !0;
        break;
    }
    i.drawImage(a, 0, 0, A, n);
    const d = document.createElement("canvas");
    d.width = o, d.height = f;
    const b = d.getContext("2d", { alpha: !1 }), g = c ? t.width - d.width : 0, v = h ? t.height - d.height : 0;
    b.drawImage(
      t,
      g,
      v,
      d.width,
      d.height,
      0,
      0,
      d.width,
      d.height
    ), e(d.toDataURL("image/jpeg"));
  }, a.src = s;
}), X5 = (s, r, e) => {
  const a = s.scaleX(), t = s.position(), i = {
    x: 0.5 * e.width + e.x,
    y: 0.5 * e.height + e.y
  }, A = {
    x: (i.x - t.x) / a,
    y: (i.y - t.y) / a
  }, n = r * e.scale, o = {
    x: ge(i.x - A.x * n, 2),
    y: ge(i.y - A.y * n, 2)
  };
  return { newScale: ge(n, 2), newPos: o };
}, M5 = (s, r, e) => {
  if (!s || !e)
    return;
  const { newScale: a, newPos: t } = X5(
    s,
    r,
    e
  );
  a < e.scale ? (s.draggable(!1), s.scale({ x: e.scale, y: e.scale }), s.position({ x: e.x, y: e.y }), s.setAttr("zoomScale", 1)) : (s.draggable(!0), s.scale({ x: a, y: a }), s.setAttr("zoomScale", a / e.scale), s.position(t)), s.batchDraw();
}, D5 = (s, r, e) => {
  const a = s.scaleX(), t = s.position(), i = s.getPointerPosition() || { x: 0, y: 0 }, A = {
    x: (i.x - t.x) / a,
    y: (i.y - t.y) / a
  }, { modifier: n } = e.zoom, o = r < 0 ? a * n : a / n, f = {
    x: ge(i.x - A.x * o, 2),
    y: ge(i.y - A.y * o, 2)
  };
  return { newScale: ge(o, 2), newPos: f };
}, N5 = (s, r, e, a) => {
  if (!s || !r)
    return;
  e.evt.preventDefault();
  const { max: t } = a.zoom, { newScale: i, newPos: A } = D5(
    s,
    e.evt.deltaY,
    a
  );
  i > t || (i < r.scale ? (s.draggable(!1), s.scale({ x: r.scale, y: r.scale }), s.position({ x: r.x, y: r.y }), s.setAttr("zoomScale", 1)) : (s.draggable(!0), s.scale({ x: i, y: i }), s.setAttr("zoomScale", i / r.scale), s.position(A)), s.batchDraw());
}, V5 = (s, r, e, a) => {
  const t = s.x * r.width / r.scale, i = s.y * r.height / r.scale;
  return {
    x: ge(-t * a + e.width() / 2, 2),
    y: ge(-i * a + e.height() / 2, 2)
  };
}, P5 = (s, r, e, a = Id) => {
  if (!s || !r)
    return;
  const t = V5(
    e,
    r,
    s,
    a
  );
  s.scale({ x: a, y: a }), s.position(t), s.batchDraw();
};
function rp({
  id: s = Bd(),
  zoomLevel: r = Id,
  pointerPosition: e = n5,
  getStage: a,
  style: t = {},
  options: i = {},
  data: A = y1
}) {
  const n = {
    ...l5,
    ...i
  }, o = fe(y1), f = fe({
    element: new Image(),
    shape: new na.Image({ image: new Image() })
  }), l = fe(null), c = fe({
    shapes: new na.Layer({ id: E2.shapesLayer, listening: !1 }),
    image: new na.Layer({ listening: !1 })
  }), h = fe(null), d = fe(null);
  ut(() => {
    h.current = new na.Stage({
      container: s,
      listening: !1
    }), a == null || a(h.current), h.current.add(
      c.current.image,
      c.current.shapes
    ), c.current.image.add(f.current.shape);
  }, []);
  const b = () => {
    P5(
      h.current,
      d.current,
      e,
      r
    );
  };
  ut(() => {
    b();
  }, [e, r]), ut(() => {
    if (!A.image) {
      Nd(c.current), f.current.element = new Image(), f.current.shape.image(f.current.element), o.current = A;
      return;
    }
    o.current.image !== A.image || A.orientation !== o.current.orientation ? (o.current = A, g()) : (o.current = A, v());
  }, [A]);
  const g = async () => {
    if (f.current.element.onload = () => {
      f.current.shape.image(f.current.element), m();
    }, o.current.orientation)
      try {
        const w = await Vd(o.current);
        f.current.element.src = w;
      } catch (w) {
        console.error(w);
      }
    else
      f.current.element.src = o.current.image;
  }, v = () => {
    c.current.shapes.destroyChildren(), o.current.shapes && (Sd(
      c.current.shapes,
      o.current.shapes,
      !1,
      d.current,
      n
    ), c.current.shapes.batchDraw());
  }, m = () => {
    const w = Dd(
      h.current,
      l.current,
      f.current
    );
    w && (d.current = w, b(), v());
  };
  return /* @__PURE__ */ U4.jsx(
    "div",
    {
      style: { ...Zd, ...t },
      id: s,
      ref: l
    }
  );
}
const O5 = (s) => new na.Rect({
  visible: !1,
  ...s.selectionRectConfig
}), Pd = (s) => {
  const r = s.position(), e = s.getPointerPosition();
  if (!e)
    return;
  const a = ge((e.x - r.x) / s.scaleX(), 2), t = ge((e.y - r.y) / s.scaleX(), 2);
  return { x: a, y: t };
}, L5 = (s, r, e, a) => {
  if (!a || !r || !e || !s)
    return;
  const t = r.getStage(), i = Pd(t);
  i && (e.setAttrs({ x1: i.x, y1: i.y }), e.visible(!0), e.width(0), e.height(0), r.draw());
}, Y5 = (s, r) => {
  const e = s == null ? void 0 : s.getStage();
  if (!e || !r || !s || !r.visible())
    return;
  const { x1: a, y1: t } = r.getAttrs(), i = Pd(e);
  i && (r.setAttrs({
    x: Math.min(a, i.x),
    y: Math.min(t, i.y),
    width: Math.abs(i.x - a),
    height: Math.abs(i.y - t)
  }), s.batchDraw());
}, H5 = (s, r, e) => {
  const a = s == null ? void 0 : s.getStage();
  if (!a || !r || !s || !r.visible())
    return;
  setTimeout(() => {
    r.visible(!1), s.batchDraw();
  });
  const t = a.find(`.${E2.shape}`) || [], i = r.getClientRect(), A = t.filter((n) => na.Util.haveIntersection(i, n.getClientRect())).map((n) => n.getAttr("shape"));
  A.length && (e == null || e(A)), s.batchDraw();
};
function C4(s, r, e) {
  const a = fe();
  ut(() => {
    const t = (e == null ? void 0 : e.current) || window;
    if (!(t && t.addEventListener))
      return;
    a.current !== r && (a.current = r);
    const i = (A) => {
      a != null && a.current && a.current(A);
    };
    return t.addEventListener(s, i), () => {
      t.removeEventListener(s, i);
    };
  }, [s, e, r]);
}
function j5({
  stage: s,
  isSelectionActiveRef: r
}) {
  C4(
    "keydown",
    (e) => {
      e.stopPropagation(), (e.ctrlKey || e.altKey || e.key === "Control" || e.key === "Alt" || e.metaKey) && (s == null || s.draggable(!1), r.current = !0);
    }
  ), C4(
    "keyup",
    (e) => {
      e.stopPropagation(), (e.ctrlKey || e.altKey || e.key === "Control" || e.key === "Alt" || e.metaKey) && (s == null || s.draggable(!0), r.current = !1);
    }
  );
}
function ep({
  id: s = Bd(),
  getPointerPosition: r,
  onShapeMouseEnter: e,
  onShapeMultiSelect: a,
  onShapeMouseLeave: t,
  customZoomLevel: i,
  customStagePosition: A,
  getStage: n,
  style: o = {},
  onShapeClick: f,
  options: l = {},
  data: c = y1
}) {
  const h = {
    ...f5,
    ...l
  }, d = fe(y1), b = fe(!1), g = fe(null), v = fe(O5(h)), m = fe({
    element: new Image(),
    shape: new na.Image({ image: new Image() })
  }), w = fe({
    shapes: new na.Layer({ id: E2.shapesLayer }),
    image: new na.Layer({ listening: !1 })
  }), k = fe(null), C = fe(null);
  j5({ stage: k.current, isSelectionActiveRef: b }), ut(() => {
    B();
  }, []), ut(() => (window.addEventListener("resize", V), () => {
    window.removeEventListener("resize", V);
  }), [c]), ut(() => {
    if (A && k.current && C.current) {
      const T = k.current.x(), Q = k.current.y(), L = k.current.getAttr("zoomScale"), J = {
        x: T + A.x * L,
        y: Q + A.y * L
      };
      G5({
        imageBoundingBox: C.current,
        stage: k.current,
        newPosition: J
      });
    }
  }, [A]);
  const y = () => {
    i && M5(
      k.current,
      i,
      C.current
    );
  };
  ut(() => y(), [i]), ut(() => {
    if (!c.image) {
      Nd(w.current), m.current.element = new Image(), m.current.shape.image(m.current.element), d.current = c;
      return;
    }
    d.current.image !== c.image || c.orientation !== d.current.orientation ? (d.current = c, F()) : (d.current = c, G());
  }, [c]);
  const B = () => {
    k.current = new na.Stage({
      container: s
    }), n == null || n(k.current), k.current.add(
      w.current.image,
      w.current.shapes
    ), k.current.on("wheel", M), w.current.image.add(m.current.shape), r && k.current.on("mousemove", () => {
      const T = d5(
        k.current,
        C.current
      );
      T && r(T);
    }), h.enableSelection && (w.current.shapes.add(v.current), k.current.on(
      "mousedown touchstart",
      (T) => L5(
        T,
        w.current.shapes,
        v.current,
        b.current
      )
    ), k.current.on(
      "mousemove touchmove",
      () => Y5(
        w.current.shapes,
        v.current
      )
    ), k.current.on(
      "mouseup touchend",
      () => H5(
        w.current.shapes,
        v.current,
        a
      )
    ));
  }, F = async () => {
    if (d.current.image = await R5(
      d.current.image
    ), m.current.element.onload = () => {
      m.current.shape.image(m.current.element), V(), y();
    }, d.current.orientation)
      try {
        const T = await Vd(d.current);
        m.current.element.src = T;
      } catch (T) {
        console.error(T);
      }
    else
      m.current.element.src = d.current.image;
  }, G = () => {
    w.current.shapes.destroyChildren(), h.enableSelection && w.current.shapes.add(v.current), d.current.shapes && (Sd(
      w.current.shapes,
      d.current.shapes,
      !0,
      C.current,
      h,
      f,
      e,
      t
    ), w.current.shapes.batchDraw());
  }, V = () => {
    const T = Dd(
      k.current,
      g.current,
      m.current
    );
    T && (C.current = T, w.current.image.batchDraw(), G());
  }, M = (T) => {
    N5(
      k.current,
      C.current,
      T,
      h
    );
  };
  return /* @__PURE__ */ U4.jsx(
    "div",
    {
      style: { ...Zd, ...o },
      id: s,
      ref: g
    }
  );
}
const U5 = (s) => {
  const r = s.findOne(`#${E2.shapesLayer}`);
  r ? r.batchDraw() : console.error("drawLayer : the layer is not found");
}, ap = (s, r, e) => {
  const a = s.findOne(`#${r}`);
  a ? (a.setAttrs(e), a.draw()) : console.error("drawShape : The provided shape id is not valid");
}, tp = (s, r) => {
  const e = s.find(`.${E2.shape}`);
  e.length && (e.forEach((a) => {
    a.setAttrs(r);
  }), U5(s));
}, ip = (s, r, e) => {
  const a = s.findOne(`#${r}`);
  a ? a.setAttrs(e) : console.error("setShapeConfig : The provided shape id is not valid");
}, Ap = (s, r = "image/jpeg") => `data:${r};base64,${s}`;
var jn = {};
jn.d = (s, r) => {
  for (var e in r)
    jn.o(r, e) && !jn.o(s, e) && Object.defineProperty(s, e, { enumerable: !0, get: r[e] });
};
jn.o = (s, r) => Object.prototype.hasOwnProperty.call(s, r);
var P0 = globalThis.pdfjsLib = {};
jn.d(P0, {
  AbortException: () => (
    /* reexport */
    B2
  ),
  AnnotationEditorLayer: () => (
    /* reexport */
    On
  ),
  AnnotationEditorParamsType: () => (
    /* reexport */
    O0
  ),
  AnnotationEditorType: () => (
    /* reexport */
    rr
  ),
  AnnotationEditorUIManager: () => (
    /* reexport */
    ct
  ),
  AnnotationLayer: () => (
    /* reexport */
    Hv
  ),
  AnnotationMode: () => (
    /* reexport */
    Et
  ),
  CMapCompressionType: () => (
    /* reexport */
    sc
  ),
  ColorPicker: () => (
    /* reexport */
    B1
  ),
  DOMSVGFactory: () => (
    /* reexport */
    wh
  ),
  DrawLayer: () => (
    /* reexport */
    k1
  ),
  FeatureTest: () => (
    /* reexport */
    be
  ),
  GlobalWorkerOptions: () => (
    /* reexport */
    ht
  ),
  ImageKind: () => (
    /* reexport */
    Lf
  ),
  InvalidPDFException: () => (
    /* reexport */
    Ld
  ),
  MissingPDFException: () => (
    /* reexport */
    C2
  ),
  OPS: () => (
    /* reexport */
    He
  ),
  Outliner: () => (
    /* reexport */
    Hc
  ),
  PDFDataRangeTransport: () => (
    /* reexport */
    Db
  ),
  PDFDateString: () => (
    /* reexport */
    Jd
  ),
  PDFWorker: () => (
    /* reexport */
    qt
  ),
  PasswordResponses: () => (
    /* reexport */
    K5
  ),
  PermissionFlag: () => (
    /* reexport */
    J5
  ),
  PixelsPerInch: () => (
    /* reexport */
    Aa
  ),
  RenderingCancelledException: () => (
    /* reexport */
    yh
  ),
  TextLayer: () => (
    /* reexport */
    Re
  ),
  UnexpectedResponseException: () => (
    /* reexport */
    bu
  ),
  Util: () => (
    /* reexport */
    T0
  ),
  VerbosityLevel: () => (
    /* reexport */
    cu
  ),
  XfaLayer: () => (
    /* reexport */
    Vb
  ),
  build: () => (
    /* reexport */
    Cv
  ),
  createValidAbsoluteUrl: () => (
    /* reexport */
    eg
  ),
  fetchData: () => (
    /* reexport */
    ku
  ),
  getDocument: () => (
    /* reexport */
    gv
  ),
  getFilenameFromUrl: () => (
    /* reexport */
    ug
  ),
  getPdfFilenameFromUrl: () => (
    /* reexport */
    cg
  ),
  getXfaPageViewport: () => (
    /* reexport */
    hg
  ),
  isDataScheme: () => (
    /* reexport */
    _h
  ),
  isPdfFile: () => (
    /* reexport */
    Eh
  ),
  noContextMenu: () => (
    /* reexport */
    ve
  ),
  normalizeUnicode: () => (
    /* reexport */
    og
  ),
  renderTextLayer: () => (
    /* reexport */
    ov
  ),
  setLayerDimensions: () => (
    /* reexport */
    v2
  ),
  shadow: () => (
    /* reexport */
    ar
  ),
  updateTextLayer: () => (
    /* reexport */
    sv
  ),
  version: () => (
    /* reexport */
    Ev
  )
});
const ie = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), Od = [1, 0, 0, 1, 0, 0], oc = [1e-3, 0, 0, 1e-3, 0, 0], z5 = 1e7, Yu = 1.35, De = {
  ANY: 1,
  DISPLAY: 2,
  PRINT: 4,
  SAVE: 8,
  ANNOTATIONS_FORMS: 16,
  ANNOTATIONS_STORAGE: 32,
  ANNOTATIONS_DISABLE: 64,
  OPLIST: 256
}, Et = {
  DISABLE: 0,
  ENABLE: 1,
  ENABLE_FORMS: 2,
  ENABLE_STORAGE: 3
}, Q5 = "pdfjs_internal_editor_", rr = {
  DISABLE: -1,
  NONE: 0,
  FREETEXT: 3,
  HIGHLIGHT: 9,
  STAMP: 13,
  INK: 15
}, O0 = {
  RESIZE: 1,
  CREATE: 2,
  FREETEXT_SIZE: 11,
  FREETEXT_COLOR: 12,
  FREETEXT_OPACITY: 13,
  INK_COLOR: 21,
  INK_THICKNESS: 22,
  INK_OPACITY: 23,
  HIGHLIGHT_COLOR: 31,
  HIGHLIGHT_DEFAULT_COLOR: 32,
  HIGHLIGHT_THICKNESS: 33,
  HIGHLIGHT_FREE: 34,
  HIGHLIGHT_SHOW_ALL: 35
}, J5 = {
  PRINT: 4,
  MODIFY_CONTENTS: 8,
  COPY: 16,
  MODIFY_ANNOTATIONS: 32,
  FILL_INTERACTIVE_FORMS: 256,
  COPY_FOR_ACCESSIBILITY: 512,
  ASSEMBLE: 1024,
  PRINT_HIGH_QUALITY: 2048
}, qr = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
}, Lf = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
}, Fr = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
}, mn = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
}, cu = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
}, sc = {
  NONE: 0,
  BINARY: 1
}, He = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91
}, K5 = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
let hu = cu.WARNINGS;
function q5(s) {
  Number.isInteger(s) && (hu = s);
}
function $5() {
  return hu;
}
function du(s) {
  hu >= cu.INFOS && console.log(`Info: ${s}`);
}
function Q0(s) {
  hu >= cu.WARNINGS && console.log(`Warning: ${s}`);
}
function hr(s) {
  throw new Error(s);
}
function Mr(s, r) {
  s || hr(r);
}
function rg(s) {
  switch (s == null ? void 0 : s.protocol) {
    case "http:":
    case "https:":
    case "ftp:":
    case "mailto:":
    case "tel:":
      return !0;
    default:
      return !1;
  }
}
function eg(s, r = null, e = null) {
  if (!s)
    return null;
  try {
    if (e && typeof s == "string") {
      if (e.addDefaultProtocol && s.startsWith("www.")) {
        const t = s.match(/\./g);
        (t == null ? void 0 : t.length) >= 2 && (s = `http://${s}`);
      }
      if (e.tryConvertEncoding)
        try {
          s = ng(s);
        } catch {
        }
    }
    const a = r ? new URL(s, r) : new URL(s);
    if (rg(a))
      return a;
  } catch {
  }
  return null;
}
function ar(s, r, e, a = !1) {
  return Object.defineProperty(s, r, {
    value: e,
    enumerable: !a,
    configurable: !0,
    writable: !1
  }), e;
}
const ti = function() {
  function r(e, a) {
    this.constructor === r && hr("Cannot initialize BaseException."), this.message = e, this.name = a;
  }
  return r.prototype = new Error(), r.constructor = r, r;
}();
class fc extends ti {
  constructor(r, e) {
    super(r, "PasswordException"), this.code = e;
  }
}
class lc extends ti {
  constructor(r, e) {
    super(r, "UnknownErrorException"), this.details = e;
  }
}
class Ld extends ti {
  constructor(r) {
    super(r, "InvalidPDFException");
  }
}
class C2 extends ti {
  constructor(r) {
    super(r, "MissingPDFException");
  }
}
class bu extends ti {
  constructor(r, e) {
    super(r, "UnexpectedResponseException"), this.status = e;
  }
}
class ag extends ti {
  constructor(r) {
    super(r, "FormatError");
  }
}
class B2 extends ti {
  constructor(r) {
    super(r, "AbortException");
  }
}
function Yd(s) {
  (typeof s != "object" || (s == null ? void 0 : s.length) === void 0) && hr("Invalid argument for bytesToString");
  const r = s.length, e = 8192;
  if (r < e)
    return String.fromCharCode.apply(null, s);
  const a = [];
  for (let t = 0; t < r; t += e) {
    const i = Math.min(t + e, r), A = s.subarray(t, i);
    a.push(String.fromCharCode.apply(null, A));
  }
  return a.join("");
}
function gu(s) {
  typeof s != "string" && hr("Invalid argument for stringToBytes");
  const r = s.length, e = new Uint8Array(r);
  for (let a = 0; a < r; ++a)
    e[a] = s.charCodeAt(a) & 255;
  return e;
}
function tg(s) {
  return String.fromCharCode(s >> 24 & 255, s >> 16 & 255, s >> 8 & 255, s & 255);
}
function mh(s) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const [e, a] of s)
    r[e] = a;
  return r;
}
function ig() {
  const s = new Uint8Array(4);
  return s[0] = 1, new Uint32Array(s.buffer, 0, 1)[0] === 1;
}
function Ag() {
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
}
class be {
  static get isLittleEndian() {
    return ar(this, "isLittleEndian", ig());
  }
  static get isEvalSupported() {
    return ar(this, "isEvalSupported", Ag());
  }
  static get isOffscreenCanvasSupported() {
    return ar(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
  }
  static get platform() {
    return typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.platform) == "string" ? ar(this, "platform", {
      isMac: navigator.platform.includes("Mac")
    }) : ar(this, "platform", {
      isMac: !1
    });
  }
  static get isCSSRoundSupported() {
    var r, e;
    return ar(this, "isCSSRoundSupported", (e = (r = globalThis.CSS) == null ? void 0 : r.supports) == null ? void 0 : e.call(r, "width: round(1.5px, 1px)"));
  }
}
const Hu = Array.from(Array(256).keys(), (s) => s.toString(16).padStart(2, "0"));
var Y2, Yf, Kn, uc;
class T0 {
  static makeHexColor(r, e, a) {
    return `#${Hu[r]}${Hu[e]}${Hu[a]}`;
  }
  static scaleMinMax(r, e) {
    let a;
    r[0] ? (r[0] < 0 && (a = e[0], e[0] = e[2], e[2] = a), e[0] *= r[0], e[2] *= r[0], r[3] < 0 && (a = e[1], e[1] = e[3], e[3] = a), e[1] *= r[3], e[3] *= r[3]) : (a = e[0], e[0] = e[1], e[1] = a, a = e[2], e[2] = e[3], e[3] = a, r[1] < 0 && (a = e[1], e[1] = e[3], e[3] = a), e[1] *= r[1], e[3] *= r[1], r[2] < 0 && (a = e[0], e[0] = e[2], e[2] = a), e[0] *= r[2], e[2] *= r[2]), e[0] += r[4], e[1] += r[5], e[2] += r[4], e[3] += r[5];
  }
  static transform(r, e) {
    return [r[0] * e[0] + r[2] * e[1], r[1] * e[0] + r[3] * e[1], r[0] * e[2] + r[2] * e[3], r[1] * e[2] + r[3] * e[3], r[0] * e[4] + r[2] * e[5] + r[4], r[1] * e[4] + r[3] * e[5] + r[5]];
  }
  static applyTransform(r, e) {
    const a = r[0] * e[0] + r[1] * e[2] + e[4], t = r[0] * e[1] + r[1] * e[3] + e[5];
    return [a, t];
  }
  static applyInverseTransform(r, e) {
    const a = e[0] * e[3] - e[1] * e[2], t = (r[0] * e[3] - r[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / a, i = (-r[0] * e[1] + r[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / a;
    return [t, i];
  }
  static getAxialAlignedBoundingBox(r, e) {
    const a = this.applyTransform(r, e), t = this.applyTransform(r.slice(2, 4), e), i = this.applyTransform([r[0], r[3]], e), A = this.applyTransform([r[2], r[1]], e);
    return [Math.min(a[0], t[0], i[0], A[0]), Math.min(a[1], t[1], i[1], A[1]), Math.max(a[0], t[0], i[0], A[0]), Math.max(a[1], t[1], i[1], A[1])];
  }
  static inverseTransform(r) {
    const e = r[0] * r[3] - r[1] * r[2];
    return [r[3] / e, -r[1] / e, -r[2] / e, r[0] / e, (r[2] * r[5] - r[4] * r[3]) / e, (r[4] * r[1] - r[5] * r[0]) / e];
  }
  static singularValueDecompose2dScale(r) {
    const e = [r[0], r[2], r[1], r[3]], a = r[0] * e[0] + r[1] * e[2], t = r[0] * e[1] + r[1] * e[3], i = r[2] * e[0] + r[3] * e[2], A = r[2] * e[1] + r[3] * e[3], n = (a + A) / 2, o = Math.sqrt((a + A) ** 2 - 4 * (a * A - i * t)) / 2, f = n + o || 1, l = n - o || 1;
    return [Math.sqrt(f), Math.sqrt(l)];
  }
  static normalizeRect(r) {
    const e = r.slice(0);
    return r[0] > r[2] && (e[0] = r[2], e[2] = r[0]), r[1] > r[3] && (e[1] = r[3], e[3] = r[1]), e;
  }
  static intersect(r, e) {
    const a = Math.max(Math.min(r[0], r[2]), Math.min(e[0], e[2])), t = Math.min(Math.max(r[0], r[2]), Math.max(e[0], e[2]));
    if (a > t)
      return null;
    const i = Math.max(Math.min(r[1], r[3]), Math.min(e[1], e[3])), A = Math.min(Math.max(r[1], r[3]), Math.max(e[1], e[3]));
    return i > A ? null : [a, i, t, A];
  }
  static bezierBoundingBox(r, e, a, t, i, A, n, o, f) {
    return f ? (f[0] = Math.min(f[0], r, n), f[1] = Math.min(f[1], e, o), f[2] = Math.max(f[2], r, n), f[3] = Math.max(f[3], e, o)) : f = [Math.min(r, n), Math.min(e, o), Math.max(r, n), Math.max(e, o)], S(this, Kn, uc).call(this, r, a, i, n, e, t, A, o, 3 * (-r + 3 * (a - i) + n), 6 * (r - 2 * a + i), 3 * (a - r), f), S(this, Kn, uc).call(this, r, a, i, n, e, t, A, o, 3 * (-e + 3 * (t - A) + o), 6 * (e - 2 * t + A), 3 * (t - e), f), f;
  }
}
Y2 = new WeakSet(), Yf = function(r, e, a, t, i, A, n, o, f, l) {
  if (f <= 0 || f >= 1)
    return;
  const c = 1 - f, h = f * f, d = h * f, b = c * (c * (c * r + 3 * f * e) + 3 * h * a) + d * t, g = c * (c * (c * i + 3 * f * A) + 3 * h * n) + d * o;
  l[0] = Math.min(l[0], b), l[1] = Math.min(l[1], g), l[2] = Math.max(l[2], b), l[3] = Math.max(l[3], g);
}, Kn = new WeakSet(), uc = function(r, e, a, t, i, A, n, o, f, l, c, h) {
  if (Math.abs(f) < 1e-12) {
    Math.abs(l) >= 1e-12 && S(this, Y2, Yf).call(this, r, e, a, t, i, A, n, o, -c / l, h);
    return;
  }
  const d = l ** 2 - 4 * c * f;
  if (d < 0)
    return;
  const b = Math.sqrt(d), g = 2 * f;
  S(this, Y2, Yf).call(this, r, e, a, t, i, A, n, o, (-l + b) / g, h), S(this, Y2, Yf).call(this, r, e, a, t, i, A, n, o, (-l - b) / g, h);
}, E(T0, Y2), E(T0, Kn);
function ng(s) {
  return decodeURIComponent(escape(s));
}
let ju = null, B4 = null;
function og(s) {
  return ju || (ju = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, B4 = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), s.replaceAll(ju, (r, e, a) => e ? e.normalize("NFKC") : B4.get(a));
}
function sg() {
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.randomUUID) == "function")
    return crypto.randomUUID();
  const s = new Uint8Array(32);
  if (typeof crypto < "u" && typeof (crypto == null ? void 0 : crypto.getRandomValues) == "function")
    crypto.getRandomValues(s);
  else
    for (let r = 0; r < 32; r++)
      s[r] = Math.floor(Math.random() * 255);
  return Yd(s);
}
const Hd = "pdfjs_internal_id_", Sa = {
  BEZIER_CURVE_TO: 0,
  MOVE_TO: 1,
  LINE_TO: 2,
  QUADRATIC_CURVE_TO: 3,
  RESTORE: 4,
  SAVE: 5,
  SCALE: 6,
  TRANSFORM: 7,
  TRANSLATE: 8
};
class vu {
  constructor() {
    this.constructor === vu && hr("Cannot initialize BaseFilterFactory.");
  }
  addFilter(r) {
    return "none";
  }
  addHCMFilter(r, e) {
    return "none";
  }
  addAlphaFilter(r) {
    return "none";
  }
  addLuminosityFilter(r) {
    return "none";
  }
  addHighlightHCMFilter(r, e, a, t, i) {
    return "none";
  }
  destroy(r = !1) {
  }
}
var qn;
const Ih = class {
  constructor({
    enableHWA: r = !1
  } = {}) {
    E(this, qn, !1);
    this.constructor === Ih && hr("Cannot initialize BaseCanvasFactory."), R(this, qn, r);
  }
  create(r, e) {
    if (r <= 0 || e <= 0)
      throw new Error("Invalid canvas size");
    const a = this._createCanvas(r, e);
    return {
      canvas: a,
      context: a.getContext("2d", {
        willReadFrequently: !u(this, qn)
      })
    };
  }
  reset(r, e, a) {
    if (!r.canvas)
      throw new Error("Canvas is not specified");
    if (e <= 0 || a <= 0)
      throw new Error("Invalid canvas size");
    r.canvas.width = e, r.canvas.height = a;
  }
  destroy(r) {
    if (!r.canvas)
      throw new Error("Canvas is not specified");
    r.canvas.width = 0, r.canvas.height = 0, r.canvas = null, r.context = null;
  }
  _createCanvas(r, e) {
    hr("Abstract method `_createCanvas` called.");
  }
};
let _1 = Ih;
qn = new WeakMap();
class pu {
  constructor({
    baseUrl: r = null,
    isCompressed: e = !0
  }) {
    this.constructor === pu && hr("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = r, this.isCompressed = e;
  }
  async fetch({
    name: r
  }) {
    if (!this.baseUrl)
      throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
    if (!r)
      throw new Error("CMap name must be specified.");
    const e = this.baseUrl + r + (this.isCompressed ? ".bcmap" : ""), a = this.isCompressed ? sc.BINARY : sc.NONE;
    return this._fetchData(e, a).catch((t) => {
      throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`);
    });
  }
  _fetchData(r, e) {
    hr("Abstract method `_fetchData` called.");
  }
}
class mu {
  constructor({
    baseUrl: r = null
  }) {
    this.constructor === mu && hr("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = r;
  }
  async fetch({
    filename: r
  }) {
    if (!this.baseUrl)
      throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
    if (!r)
      throw new Error("Font filename must be specified.");
    const e = `${this.baseUrl}${r}`;
    return this._fetchData(e).catch((a) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }
  _fetchData(r) {
    hr("Abstract method `_fetchData` called.");
  }
}
class kh {
  constructor() {
    this.constructor === kh && hr("Cannot initialize BaseSVGFactory.");
  }
  create(r, e, a = !1) {
    if (r <= 0 || e <= 0)
      throw new Error("Invalid SVG dimensions");
    const t = this._createSVG("svg:svg");
    return t.setAttribute("version", "1.1"), a || (t.setAttribute("width", `${r}px`), t.setAttribute("height", `${e}px`)), t.setAttribute("preserveAspectRatio", "none"), t.setAttribute("viewBox", `0 0 ${r} ${e}`), t;
  }
  createElement(r) {
    if (typeof r != "string")
      throw new Error("Invalid SVG element type");
    return this._createSVG(r);
  }
  _createSVG(r) {
    hr("Abstract method `_createSVG` called.");
  }
}
const xa = "http://www.w3.org/2000/svg", Z1 = class {
};
let Aa = Z1;
Y0(Aa, "CSS", 96), Y0(Aa, "PDF", 72), Y0(Aa, "PDF_TO_CSS_UNITS", Z1.CSS / Z1.PDF);
var li, fa, Da, ce, R1, ui, Nr, $r, Ct, W2, Bt, x2, H2, Hf, I1, jd, $n, cc, Zt, G2, ci, Bn, hi, Zn, ro, hc, di, Rn;
class fg extends vu {
  constructor({
    docId: e,
    ownerDocument: a = globalThis.document
  } = {}) {
    super();
    E(this, Nr);
    E(this, Ct);
    E(this, Bt);
    E(this, H2);
    E(this, I1);
    E(this, $n);
    E(this, Zt);
    E(this, ci);
    E(this, hi);
    E(this, ro);
    E(this, di);
    E(this, li, void 0);
    E(this, fa, void 0);
    E(this, Da, void 0);
    E(this, ce, void 0);
    E(this, R1, void 0);
    E(this, ui, 0);
    R(this, Da, e), R(this, ce, a);
  }
  addFilter(e) {
    if (!e)
      return "none";
    let a = u(this, Nr, $r).get(e);
    if (a)
      return a;
    const [t, i, A] = S(this, H2, Hf).call(this, e), n = e.length === 1 ? t : `${t}${i}${A}`;
    if (a = u(this, Nr, $r).get(n), a)
      return u(this, Nr, $r).set(e, a), a;
    const o = `g_${u(this, Da)}_transfer_map_${pe(this, ui)._++}`, f = `url(#${o})`;
    u(this, Nr, $r).set(e, f), u(this, Nr, $r).set(n, f);
    const l = S(this, Zt, G2).call(this, o);
    return S(this, hi, Zn).call(this, t, i, A, l), f;
  }
  addHCMFilter(e, a) {
    var b;
    const t = `${e}-${a}`, i = "base";
    let A = u(this, Ct, W2).get(i);
    if ((A == null ? void 0 : A.key) === t || (A ? ((b = A.filter) == null || b.remove(), A.key = t, A.url = "none", A.filter = null) : (A = {
      key: t,
      url: "none",
      filter: null
    }, u(this, Ct, W2).set(i, A)), !e || !a))
      return A.url;
    const n = S(this, di, Rn).call(this, e);
    e = T0.makeHexColor(...n);
    const o = S(this, di, Rn).call(this, a);
    if (a = T0.makeHexColor(...o), u(this, Bt, x2).style.color = "", e === "#000000" && a === "#ffffff" || e === a)
      return A.url;
    const f = new Array(256);
    for (let g = 0; g <= 255; g++) {
      const v = g / 255;
      f[g] = v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
    }
    const l = f.join(","), c = `g_${u(this, Da)}_hcm_filter`, h = A.filter = S(this, Zt, G2).call(this, c);
    S(this, hi, Zn).call(this, l, l, l, h), S(this, $n, cc).call(this, h);
    const d = (g, v) => {
      const m = n[g] / 255, w = o[g] / 255, k = new Array(v + 1);
      for (let C = 0; C <= v; C++)
        k[C] = m + C / v * (w - m);
      return k.join(",");
    };
    return S(this, hi, Zn).call(this, d(0, 5), d(1, 5), d(2, 5), h), A.url = `url(#${c})`, A.url;
  }
  addAlphaFilter(e) {
    let a = u(this, Nr, $r).get(e);
    if (a)
      return a;
    const [t] = S(this, H2, Hf).call(this, [e]), i = `alpha_${t}`;
    if (a = u(this, Nr, $r).get(i), a)
      return u(this, Nr, $r).set(e, a), a;
    const A = `g_${u(this, Da)}_alpha_map_${pe(this, ui)._++}`, n = `url(#${A})`;
    u(this, Nr, $r).set(e, n), u(this, Nr, $r).set(i, n);
    const o = S(this, Zt, G2).call(this, A);
    return S(this, ro, hc).call(this, t, o), n;
  }
  addLuminosityFilter(e) {
    let a = u(this, Nr, $r).get(e || "luminosity");
    if (a)
      return a;
    let t, i;
    if (e ? ([t] = S(this, H2, Hf).call(this, [e]), i = `luminosity_${t}`) : i = "luminosity", a = u(this, Nr, $r).get(i), a)
      return u(this, Nr, $r).set(e, a), a;
    const A = `g_${u(this, Da)}_luminosity_map_${pe(this, ui)._++}`, n = `url(#${A})`;
    u(this, Nr, $r).set(e, n), u(this, Nr, $r).set(i, n);
    const o = S(this, Zt, G2).call(this, A);
    return S(this, I1, jd).call(this, o), e && S(this, ro, hc).call(this, t, o), n;
  }
  addHighlightHCMFilter(e, a, t, i, A) {
    var w;
    const n = `${a}-${t}-${i}-${A}`;
    let o = u(this, Ct, W2).get(e);
    if ((o == null ? void 0 : o.key) === n || (o ? ((w = o.filter) == null || w.remove(), o.key = n, o.url = "none", o.filter = null) : (o = {
      key: n,
      url: "none",
      filter: null
    }, u(this, Ct, W2).set(e, o)), !a || !t))
      return o.url;
    const [f, l] = [a, t].map(S(this, di, Rn).bind(this));
    let c = Math.round(0.2126 * f[0] + 0.7152 * f[1] + 0.0722 * f[2]), h = Math.round(0.2126 * l[0] + 0.7152 * l[1] + 0.0722 * l[2]), [d, b] = [i, A].map(S(this, di, Rn).bind(this));
    h < c && ([c, h, d, b] = [h, c, b, d]), u(this, Bt, x2).style.color = "";
    const g = (k, C, y) => {
      const B = new Array(256), F = (h - c) / y, G = k / 255, V = (C - k) / (255 * y);
      let M = 0;
      for (let T = 0; T <= y; T++) {
        const Q = Math.round(c + T * F), L = G + T * V;
        for (let J = M; J <= Q; J++)
          B[J] = L;
        M = Q + 1;
      }
      for (let T = M; T < 256; T++)
        B[T] = B[M - 1];
      return B.join(",");
    }, v = `g_${u(this, Da)}_hcm_${e}_filter`, m = o.filter = S(this, Zt, G2).call(this, v);
    return S(this, $n, cc).call(this, m), S(this, hi, Zn).call(this, g(d[0], b[0], 5), g(d[1], b[1], 5), g(d[2], b[2], 5), m), o.url = `url(#${v})`, o.url;
  }
  destroy(e = !1) {
    e && u(this, Ct, W2).size !== 0 || (u(this, fa) && (u(this, fa).parentNode.parentNode.remove(), R(this, fa, null)), u(this, li) && (u(this, li).clear(), R(this, li, null)), R(this, ui, 0));
  }
}
li = new WeakMap(), fa = new WeakMap(), Da = new WeakMap(), ce = new WeakMap(), R1 = new WeakMap(), ui = new WeakMap(), Nr = new WeakSet(), $r = function() {
  return u(this, li) || R(this, li, /* @__PURE__ */ new Map());
}, Ct = new WeakSet(), W2 = function() {
  return u(this, R1) || R(this, R1, /* @__PURE__ */ new Map());
}, Bt = new WeakSet(), x2 = function() {
  if (!u(this, fa)) {
    const e = u(this, ce).createElement("div"), {
      style: a
    } = e;
    a.visibility = "hidden", a.contain = "strict", a.width = a.height = 0, a.position = "absolute", a.top = a.left = 0, a.zIndex = -1;
    const t = u(this, ce).createElementNS(xa, "svg");
    t.setAttribute("width", 0), t.setAttribute("height", 0), R(this, fa, u(this, ce).createElementNS(xa, "defs")), e.append(t), t.append(u(this, fa)), u(this, ce).body.append(e);
  }
  return u(this, fa);
}, H2 = new WeakSet(), Hf = function(e) {
  if (e.length === 1) {
    const f = e[0], l = new Array(256);
    for (let h = 0; h < 256; h++)
      l[h] = f[h] / 255;
    const c = l.join(",");
    return [c, c, c];
  }
  const [a, t, i] = e, A = new Array(256), n = new Array(256), o = new Array(256);
  for (let f = 0; f < 256; f++)
    A[f] = a[f] / 255, n[f] = t[f] / 255, o[f] = i[f] / 255;
  return [A.join(","), n.join(","), o.join(",")];
}, I1 = new WeakSet(), jd = function(e) {
  const a = u(this, ce).createElementNS(xa, "feColorMatrix");
  a.setAttribute("type", "matrix"), a.setAttribute("values", "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0"), e.append(a);
}, $n = new WeakSet(), cc = function(e) {
  const a = u(this, ce).createElementNS(xa, "feColorMatrix");
  a.setAttribute("type", "matrix"), a.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), e.append(a);
}, Zt = new WeakSet(), G2 = function(e) {
  const a = u(this, ce).createElementNS(xa, "filter");
  return a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("id", e), u(this, Bt, x2).append(a), a;
}, ci = new WeakSet(), Bn = function(e, a, t) {
  const i = u(this, ce).createElementNS(xa, a);
  i.setAttribute("type", "discrete"), i.setAttribute("tableValues", t), e.append(i);
}, hi = new WeakSet(), Zn = function(e, a, t, i) {
  const A = u(this, ce).createElementNS(xa, "feComponentTransfer");
  i.append(A), S(this, ci, Bn).call(this, A, "feFuncR", e), S(this, ci, Bn).call(this, A, "feFuncG", a), S(this, ci, Bn).call(this, A, "feFuncB", t);
}, ro = new WeakSet(), hc = function(e, a) {
  const t = u(this, ce).createElementNS(xa, "feComponentTransfer");
  a.append(t), S(this, ci, Bn).call(this, t, "feFuncA", e);
}, di = new WeakSet(), Rn = function(e) {
  return u(this, Bt, x2).style.color = e, Ch(getComputedStyle(u(this, Bt, x2)).getPropertyValue("color"));
};
class lg extends _1 {
  constructor({
    ownerDocument: r = globalThis.document,
    enableHWA: e = !1
  } = {}) {
    super({
      enableHWA: e
    }), this._document = r;
  }
  _createCanvas(r, e) {
    const a = this._document.createElement("canvas");
    return a.width = r, a.height = e, a;
  }
}
async function ku(s, r = "text") {
  if (In(s, document.baseURI)) {
    const e = await fetch(s);
    if (!e.ok)
      throw new Error(e.statusText);
    switch (r) {
      case "arraybuffer":
        return e.arrayBuffer();
      case "blob":
        return e.blob();
      case "json":
        return e.json();
    }
    return e.text();
  }
  return new Promise((e, a) => {
    const t = new XMLHttpRequest();
    t.open("GET", s, !0), t.responseType = r, t.onreadystatechange = () => {
      if (t.readyState === XMLHttpRequest.DONE) {
        if (t.status === 200 || t.status === 0) {
          switch (r) {
            case "arraybuffer":
            case "blob":
            case "json":
              e(t.response);
              return;
          }
          e(t.responseText);
          return;
        }
        a(new Error(t.statusText));
      }
    }, t.send(null);
  });
}
class Ud extends pu {
  _fetchData(r, e) {
    return ku(r, this.isCompressed ? "arraybuffer" : "text").then((a) => ({
      cMapData: a instanceof ArrayBuffer ? new Uint8Array(a) : gu(a),
      compressionType: e
    }));
  }
}
class zd extends mu {
  _fetchData(r) {
    return ku(r, "arraybuffer").then((e) => new Uint8Array(e));
  }
}
class wh extends kh {
  _createSVG(r) {
    return document.createElementNS(xa, r);
  }
}
class pf {
  constructor({
    viewBox: r,
    scale: e,
    rotation: a,
    offsetX: t = 0,
    offsetY: i = 0,
    dontFlip: A = !1
  }) {
    this.viewBox = r, this.scale = e, this.rotation = a, this.offsetX = t, this.offsetY = i;
    const n = (r[2] + r[0]) / 2, o = (r[3] + r[1]) / 2;
    let f, l, c, h;
    switch (a %= 360, a < 0 && (a += 360), a) {
      case 180:
        f = -1, l = 0, c = 0, h = 1;
        break;
      case 90:
        f = 0, l = 1, c = 1, h = 0;
        break;
      case 270:
        f = 0, l = -1, c = -1, h = 0;
        break;
      case 0:
        f = 1, l = 0, c = 0, h = -1;
        break;
      default:
        throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
    }
    A && (c = -c, h = -h);
    let d, b, g, v;
    f === 0 ? (d = Math.abs(o - r[1]) * e + t, b = Math.abs(n - r[0]) * e + i, g = (r[3] - r[1]) * e, v = (r[2] - r[0]) * e) : (d = Math.abs(n - r[0]) * e + t, b = Math.abs(o - r[1]) * e + i, g = (r[2] - r[0]) * e, v = (r[3] - r[1]) * e), this.transform = [f * e, l * e, c * e, h * e, d - f * e * n - c * e * o, b - l * e * n - h * e * o], this.width = g, this.height = v;
  }
  get rawDims() {
    const {
      viewBox: r
    } = this;
    return ar(this, "rawDims", {
      pageWidth: r[2] - r[0],
      pageHeight: r[3] - r[1],
      pageX: r[0],
      pageY: r[1]
    });
  }
  clone({
    scale: r = this.scale,
    rotation: e = this.rotation,
    offsetX: a = this.offsetX,
    offsetY: t = this.offsetY,
    dontFlip: i = !1
  } = {}) {
    return new pf({
      viewBox: this.viewBox.slice(),
      scale: r,
      rotation: e,
      offsetX: a,
      offsetY: t,
      dontFlip: i
    });
  }
  convertToViewportPoint(r, e) {
    return T0.applyTransform([r, e], this.transform);
  }
  convertToViewportRectangle(r) {
    const e = T0.applyTransform([r[0], r[1]], this.transform), a = T0.applyTransform([r[2], r[3]], this.transform);
    return [e[0], e[1], a[0], a[1]];
  }
  convertToPdfPoint(r, e) {
    return T0.applyInverseTransform([r, e], this.transform);
  }
}
class yh extends ti {
  constructor(r, e = 0) {
    super(r, "RenderingCancelledException"), this.extraDelay = e;
  }
}
function _h(s) {
  const r = s.length;
  let e = 0;
  for (; e < r && s[e].trim() === ""; )
    e++;
  return s.substring(e, e + 5).toLowerCase() === "data:";
}
function Eh(s) {
  return typeof s == "string" && /\.pdf$/i.test(s);
}
function ug(s) {
  return [s] = s.split(/[#?]/, 1), s.substring(s.lastIndexOf("/") + 1);
}
function cg(s, r = "document.pdf") {
  if (typeof s != "string")
    return r;
  if (_h(s))
    return Q0('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), r;
  const e = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, a = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, t = e.exec(s);
  let i = a.exec(t[1]) || a.exec(t[2]) || a.exec(t[3]);
  if (i && (i = i[0], i.includes("%")))
    try {
      i = a.exec(decodeURIComponent(i))[0];
    } catch {
    }
  return i || r;
}
class Z4 {
  constructor() {
    Y0(this, "started", /* @__PURE__ */ Object.create(null));
    Y0(this, "times", []);
  }
  time(r) {
    r in this.started && Q0(`Timer is already running for ${r}`), this.started[r] = Date.now();
  }
  timeEnd(r) {
    r in this.started || Q0(`Timer has not been started for ${r}`), this.times.push({
      name: r,
      start: this.started[r],
      end: Date.now()
    }), delete this.started[r];
  }
  toString() {
    const r = [];
    let e = 0;
    for (const {
      name: a
    } of this.times)
      e = Math.max(a.length, e);
    for (const {
      name: a,
      start: t,
      end: i
    } of this.times)
      r.push(`${a.padEnd(e)} ${i - t}ms
`);
    return r.join("");
  }
}
function In(s, r) {
  try {
    const {
      protocol: e
    } = r ? new URL(s, r) : new URL(s);
    return e === "http:" || e === "https:";
  } catch {
    return !1;
  }
}
function ve(s) {
  s.preventDefault();
}
function Qd(s) {
  console.log("Deprecated API usage: " + s);
}
let R4;
class Jd {
  static toDateObject(r) {
    if (!r || typeof r != "string")
      return null;
    R4 || (R4 = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
    const e = R4.exec(r);
    if (!e)
      return null;
    const a = parseInt(e[1], 10);
    let t = parseInt(e[2], 10);
    t = t >= 1 && t <= 12 ? t - 1 : 0;
    let i = parseInt(e[3], 10);
    i = i >= 1 && i <= 31 ? i : 1;
    let A = parseInt(e[4], 10);
    A = A >= 0 && A <= 23 ? A : 0;
    let n = parseInt(e[5], 10);
    n = n >= 0 && n <= 59 ? n : 0;
    let o = parseInt(e[6], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    const f = e[7] || "Z";
    let l = parseInt(e[8], 10);
    l = l >= 0 && l <= 23 ? l : 0;
    let c = parseInt(e[9], 10) || 0;
    return c = c >= 0 && c <= 59 ? c : 0, f === "-" ? (A += l, n += c) : f === "+" && (A -= l, n -= c), new Date(Date.UTC(a, t, i, A, n, o));
  }
}
function hg(s, {
  scale: r = 1,
  rotation: e = 0
}) {
  const {
    width: a,
    height: t
  } = s.attributes.style, i = [0, 0, parseInt(a), parseInt(t)];
  return new pf({
    viewBox: i,
    scale: r,
    rotation: e
  });
}
function Ch(s) {
  if (s.startsWith("#")) {
    const r = parseInt(s.slice(1), 16);
    return [(r & 16711680) >> 16, (r & 65280) >> 8, r & 255];
  }
  return s.startsWith("rgb(") ? s.slice(4, -1).split(",").map((r) => parseInt(r)) : s.startsWith("rgba(") ? s.slice(5, -1).split(",").map((r) => parseInt(r)).slice(0, 3) : (Q0(`Not a valid color format: "${s}"`), [0, 0, 0]);
}
function dg(s) {
  const r = document.createElement("span");
  r.style.visibility = "hidden", document.body.append(r);
  for (const e of s.keys()) {
    r.style.color = e;
    const a = window.getComputedStyle(r).color;
    s.set(e, Ch(a));
  }
  r.remove();
}
function vr(s) {
  const {
    a: r,
    b: e,
    c: a,
    d: t,
    e: i,
    f: A
  } = s.getTransform();
  return [r, e, a, t, i, A];
}
function Fa(s) {
  const {
    a: r,
    b: e,
    c: a,
    d: t,
    e: i,
    f: A
  } = s.getTransform().invertSelf();
  return [r, e, a, t, i, A];
}
function v2(s, r, e = !1, a = !0) {
  if (r instanceof pf) {
    const {
      pageWidth: t,
      pageHeight: i
    } = r.rawDims, {
      style: A
    } = s, n = be.isCSSRoundSupported, o = `var(--scale-factor) * ${t}px`, f = `var(--scale-factor) * ${i}px`, l = n ? `round(${o}, 1px)` : `calc(${o})`, c = n ? `round(${f}, 1px)` : `calc(${f})`;
    !e || r.rotation % 180 === 0 ? (A.width = l, A.height = c) : (A.width = c, A.height = l);
  }
  a && s.setAttribute("data-main-rotation", r.rotation);
}
var bi, gi, ke, vi, S1, Kd, F1, qd, W1, $d, j2, Uf, x1, rb, eo, dc;
const Sh = class {
  constructor(r) {
    E(this, F1);
    E(this, W1);
    E(this, j2);
    E(this, x1);
    E(this, eo);
    E(this, bi, null);
    E(this, gi, null);
    E(this, ke, void 0);
    E(this, vi, null);
    R(this, ke, r);
  }
  render() {
    const r = R(this, bi, document.createElement("div"));
    r.className = "editToolbar", r.setAttribute("role", "toolbar");
    const e = u(this, ke)._uiManager._signal;
    r.addEventListener("contextmenu", ve, {
      signal: e
    }), r.addEventListener("pointerdown", S(Sh, S1, Kd), {
      signal: e
    });
    const a = R(this, vi, document.createElement("div"));
    a.className = "buttons", r.append(a);
    const t = u(this, ke).toolbarPosition;
    if (t) {
      const {
        style: i
      } = r, A = u(this, ke)._uiManager.direction === "ltr" ? 1 - t[0] : t[0];
      i.insetInlineEnd = `${100 * A}%`, i.top = `calc(${100 * t[1]}% + var(--editor-toolbar-vert-offset))`;
    }
    return S(this, x1, rb).call(this), r;
  }
  hide() {
    var r;
    u(this, bi).classList.add("hidden"), (r = u(this, gi)) == null || r.hideDropdown();
  }
  show() {
    u(this, bi).classList.remove("hidden");
  }
  addAltTextButton(r) {
    S(this, j2, Uf).call(this, r), u(this, vi).prepend(r, u(this, eo, dc));
  }
  addColorPicker(r) {
    R(this, gi, r);
    const e = r.renderButton();
    S(this, j2, Uf).call(this, e), u(this, vi).prepend(e, u(this, eo, dc));
  }
  remove() {
    var r;
    u(this, bi).remove(), (r = u(this, gi)) == null || r.destroy(), R(this, gi, null);
  }
};
let jf = Sh;
bi = new WeakMap(), gi = new WeakMap(), ke = new WeakMap(), vi = new WeakMap(), S1 = new WeakSet(), Kd = function(r) {
  r.stopPropagation();
}, F1 = new WeakSet(), qd = function(r) {
  u(this, ke)._focusEventsAllowed = !1, r.preventDefault(), r.stopPropagation();
}, W1 = new WeakSet(), $d = function(r) {
  u(this, ke)._focusEventsAllowed = !0, r.preventDefault(), r.stopPropagation();
}, j2 = new WeakSet(), Uf = function(r) {
  const e = u(this, ke)._uiManager._signal;
  r.addEventListener("focusin", S(this, F1, qd).bind(this), {
    capture: !0,
    signal: e
  }), r.addEventListener("focusout", S(this, W1, $d).bind(this), {
    capture: !0,
    signal: e
  }), r.addEventListener("contextmenu", ve, {
    signal: e
  });
}, x1 = new WeakSet(), rb = function() {
  const r = document.createElement("button");
  r.className = "delete", r.tabIndex = 0, r.setAttribute("data-l10n-id", `pdfjs-editor-remove-${u(this, ke).editorType}-button`), S(this, j2, Uf).call(this, r), r.addEventListener("click", (e) => {
    u(this, ke)._uiManager.delete();
  }, {
    signal: u(this, ke)._uiManager._signal
  }), u(this, vi).append(r);
}, eo = new WeakSet(), dc = function() {
  const r = document.createElement("div");
  return r.className = "divider", r;
}, E(jf, S1);
var ao, pi, mi, G1, eb, T1, ab, X1, tb;
class bg {
  constructor(r) {
    E(this, G1);
    E(this, T1);
    E(this, X1);
    E(this, ao, null);
    E(this, pi, null);
    E(this, mi, void 0);
    R(this, mi, r);
  }
  show(r, e, a) {
    const [t, i] = S(this, T1, ab).call(this, e, a), {
      style: A
    } = u(this, pi) || R(this, pi, S(this, G1, eb).call(this));
    r.append(u(this, pi)), A.insetInlineEnd = `${100 * t}%`, A.top = `calc(${100 * i}% + var(--editor-toolbar-vert-offset))`;
  }
  hide() {
    u(this, pi).remove();
  }
}
ao = new WeakMap(), pi = new WeakMap(), mi = new WeakMap(), G1 = new WeakSet(), eb = function() {
  const r = R(this, pi, document.createElement("div"));
  r.className = "editToolbar", r.setAttribute("role", "toolbar"), r.addEventListener("contextmenu", ve, {
    signal: u(this, mi)._signal
  });
  const e = R(this, ao, document.createElement("div"));
  return e.className = "buttons", r.append(e), S(this, X1, tb).call(this), r;
}, T1 = new WeakSet(), ab = function(r, e) {
  let a = 0, t = 0;
  for (const i of r) {
    const A = i.y + i.height;
    if (A < a)
      continue;
    const n = i.x + (e ? i.width : 0);
    if (A > a) {
      t = n, a = A;
      continue;
    }
    e ? n > t && (t = n) : n < t && (t = n);
  }
  return [e ? 1 - t : t, a];
}, X1 = new WeakSet(), tb = function() {
  const r = document.createElement("button");
  r.className = "highlightButton", r.tabIndex = 0, r.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1");
  const e = document.createElement("span");
  r.append(e), e.className = "visuallyHidden", e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label");
  const a = u(this, mi)._signal;
  r.addEventListener("contextmenu", ve, {
    signal: a
  }), r.addEventListener("click", () => {
    u(this, mi).highlightSelection("floating_button");
  }, {
    signal: a
  }), u(this, ao).append(r);
};
function E1(s, r, e) {
  for (const a of e)
    r.addEventListener(a, s[a].bind(s));
}
function gg(s) {
  return Math.round(Math.min(255, Math.max(1, 255 * s))).toString(16).padStart(2, "0");
}
var M1;
class vg {
  constructor() {
    E(this, M1, 0);
  }
  get id() {
    return `${Q5}${pe(this, M1)._++}`;
  }
}
M1 = new WeakMap();
var to, D1, Ge, io, gc;
const Fh = class {
  constructor() {
    E(this, io);
    E(this, to, sg());
    E(this, D1, 0);
    E(this, Ge, null);
  }
  static get _isSVGFittingCanvas() {
    const r = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', a = new OffscreenCanvas(1, 3).getContext("2d", {
      willReadFrequently: !0
    }), t = new Image();
    t.src = r;
    const i = t.decode().then(() => (a.drawImage(t, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(a.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
    return ar(this, "_isSVGFittingCanvas", i);
  }
  async getFromFile(r) {
    const {
      lastModified: e,
      name: a,
      size: t,
      type: i
    } = r;
    return S(this, io, gc).call(this, `${e}_${a}_${t}_${i}`, r);
  }
  async getFromUrl(r) {
    return S(this, io, gc).call(this, r, r);
  }
  async getFromId(r) {
    u(this, Ge) || R(this, Ge, /* @__PURE__ */ new Map());
    const e = u(this, Ge).get(r);
    return e ? e.bitmap ? (e.refCounter += 1, e) : e.file ? this.getFromFile(e.file) : this.getFromUrl(e.url) : null;
  }
  getSvgUrl(r) {
    const e = u(this, Ge).get(r);
    return e != null && e.isSvg ? e.svgUrl : null;
  }
  deleteId(r) {
    u(this, Ge) || R(this, Ge, /* @__PURE__ */ new Map());
    const e = u(this, Ge).get(r);
    e && (e.refCounter -= 1, e.refCounter === 0 && (e.bitmap = null));
  }
  isValidId(r) {
    return r.startsWith(`image_${u(this, to)}_`);
  }
};
let bc = Fh;
to = new WeakMap(), D1 = new WeakMap(), Ge = new WeakMap(), io = new WeakSet(), gc = async function(r, e) {
  u(this, Ge) || R(this, Ge, /* @__PURE__ */ new Map());
  let a = u(this, Ge).get(r);
  if (a === null)
    return null;
  if (a != null && a.bitmap)
    return a.refCounter += 1, a;
  try {
    a || (a = {
      bitmap: null,
      id: `image_${u(this, to)}_${pe(this, D1)._++}`,
      refCounter: 0,
      isSvg: !1
    });
    let t;
    if (typeof e == "string" ? (a.url = e, t = await ku(e, "blob")) : t = a.file = e, t.type === "image/svg+xml") {
      const i = Fh._isSVGFittingCanvas, A = new FileReader(), n = new Image(), o = new Promise((f, l) => {
        n.onload = () => {
          a.bitmap = n, a.isSvg = !0, f();
        }, A.onload = async () => {
          const c = a.svgUrl = A.result;
          n.src = await i ? `${c}#svgView(preserveAspectRatio(none))` : c;
        }, n.onerror = A.onerror = l;
      });
      A.readAsDataURL(t), await o;
    } else
      a.bitmap = await createImageBitmap(t);
    a.refCounter = 1;
  } catch (t) {
    console.error(t), a = null;
  }
  return u(this, Ge).set(r, a), a && u(this, Ge).set(a.id, a), a;
};
var Vr, Rt, Ao, Pr;
class pg {
  constructor(r = 128) {
    E(this, Vr, []);
    E(this, Rt, !1);
    E(this, Ao, void 0);
    E(this, Pr, -1);
    R(this, Ao, r);
  }
  add({
    cmd: r,
    undo: e,
    post: a,
    mustExec: t,
    type: i = NaN,
    overwriteIfSameType: A = !1,
    keepUndo: n = !1
  }) {
    if (t && r(), u(this, Rt))
      return;
    const o = {
      cmd: r,
      undo: e,
      post: a,
      type: i
    };
    if (u(this, Pr) === -1) {
      u(this, Vr).length > 0 && (u(this, Vr).length = 0), R(this, Pr, 0), u(this, Vr).push(o);
      return;
    }
    if (A && u(this, Vr)[u(this, Pr)].type === i) {
      n && (o.undo = u(this, Vr)[u(this, Pr)].undo), u(this, Vr)[u(this, Pr)] = o;
      return;
    }
    const f = u(this, Pr) + 1;
    f === u(this, Ao) ? u(this, Vr).splice(0, 1) : (R(this, Pr, f), f < u(this, Vr).length && u(this, Vr).splice(f)), u(this, Vr).push(o);
  }
  undo() {
    if (u(this, Pr) === -1)
      return;
    R(this, Rt, !0);
    const {
      undo: r,
      post: e
    } = u(this, Vr)[u(this, Pr)];
    r(), e == null || e(), R(this, Rt, !1), R(this, Pr, u(this, Pr) - 1);
  }
  redo() {
    if (u(this, Pr) < u(this, Vr).length - 1) {
      R(this, Pr, u(this, Pr) + 1), R(this, Rt, !0);
      const {
        cmd: r,
        post: e
      } = u(this, Vr)[u(this, Pr)];
      r(), e == null || e(), R(this, Rt, !1);
    }
  }
  hasSomethingToUndo() {
    return u(this, Pr) !== -1;
  }
  hasSomethingToRedo() {
    return u(this, Pr) < u(this, Vr).length - 1;
  }
  destroy() {
    R(this, Vr, null);
  }
}
Vr = new WeakMap(), Rt = new WeakMap(), Ao = new WeakMap(), Pr = new WeakMap();
var N1, ib;
class mf {
  constructor(r) {
    E(this, N1);
    this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
    const {
      isMac: e
    } = be.platform;
    for (const [a, t, i = {}] of r)
      for (const A of a) {
        const n = A.startsWith("mac+");
        e && n ? (this.callbacks.set(A.slice(4), {
          callback: t,
          options: i
        }), this.allKeys.add(A.split("+").at(-1))) : !e && !n && (this.callbacks.set(A, {
          callback: t,
          options: i
        }), this.allKeys.add(A.split("+").at(-1)));
      }
  }
  exec(r, e) {
    if (!this.allKeys.has(e.key))
      return;
    const a = this.callbacks.get(S(this, N1, ib).call(this, e));
    if (!a)
      return;
    const {
      callback: t,
      options: {
        bubbles: i = !1,
        args: A = [],
        checker: n = null
      }
    } = a;
    n && !n(r, e) || (t.bind(r, ...A, e)(), i || (e.stopPropagation(), e.preventDefault()));
  }
}
N1 = new WeakSet(), ib = function(r) {
  r.altKey && this.buffer.push("alt"), r.ctrlKey && this.buffer.push("ctrl"), r.metaKey && this.buffer.push("meta"), r.shiftKey && this.buffer.push("shift"), this.buffer.push(r.key);
  const e = this.buffer.join("+");
  return this.buffer.length = 0, e;
};
const Wh = class {
  get _colors() {
    const r = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
    return dg(r), ar(this, "_colors", r);
  }
  convert(r) {
    const e = Ch(r);
    if (!window.matchMedia("(forced-colors: active)").matches)
      return e;
    for (const [a, t] of this._colors)
      if (t.every((i, A) => i === e[A]))
        return Wh._colorsMapping.get(a);
    return e;
  }
  getHexCode(r) {
    const e = this._colors.get(r);
    return e ? T0.makeHexColor(...e) : r;
  }
};
let zf = Wh;
Y0(zf, "_colorsMapping", /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]));
var U2, we, xr, Hr, z2, Na, Q2, je, J2, ki, la, Ue, wi, no, oo, ua, K2, It, ca, V1, St, so, yi, fo, q2, jr, nr, Va, _i, lo, uo, co, ho, bo, go, vo, po, mo, ko, wo, yo, _o, Ft, ha, Pa, Eo, $2, Qf, P1, Ab, O1, nb, rA, Jf, L1, ob, Y1, sb, H1, fb, Co, vc, j1, lb, Bo, pc, Zo, mc, U1, ub, Ur, ne, da, kt, z1, cb, Q1, hb, Ro, kc, J1, db, Ei, Sn, Io, wc;
const K1 = class {
  constructor(r, e, a, t, i, A, n, o, f) {
    E(this, $2);
    E(this, P1);
    E(this, O1);
    E(this, rA);
    E(this, L1);
    E(this, Y1);
    E(this, H1);
    E(this, Co);
    E(this, j1);
    E(this, Bo);
    E(this, Zo);
    E(this, U1);
    E(this, Ur);
    E(this, da);
    E(this, z1);
    E(this, Q1);
    E(this, Ro);
    E(this, J1);
    E(this, Ei);
    E(this, Io);
    E(this, U2, new AbortController());
    E(this, we, null);
    E(this, xr, /* @__PURE__ */ new Map());
    E(this, Hr, /* @__PURE__ */ new Map());
    E(this, z2, null);
    E(this, Na, null);
    E(this, Q2, null);
    E(this, je, new pg());
    E(this, J2, 0);
    E(this, ki, /* @__PURE__ */ new Set());
    E(this, la, null);
    E(this, Ue, null);
    E(this, wi, /* @__PURE__ */ new Set());
    E(this, no, !1);
    E(this, oo, null);
    E(this, ua, null);
    E(this, K2, null);
    E(this, It, !1);
    E(this, ca, null);
    E(this, V1, new vg());
    E(this, St, !1);
    E(this, so, !1);
    E(this, yi, null);
    E(this, fo, null);
    E(this, q2, null);
    E(this, jr, rr.NONE);
    E(this, nr, /* @__PURE__ */ new Set());
    E(this, Va, null);
    E(this, _i, null);
    E(this, lo, null);
    E(this, uo, this.blur.bind(this));
    E(this, co, this.focus.bind(this));
    E(this, ho, this.copy.bind(this));
    E(this, bo, this.cut.bind(this));
    E(this, go, this.paste.bind(this));
    E(this, vo, this.keydown.bind(this));
    E(this, po, this.keyup.bind(this));
    E(this, mo, this.onEditingAction.bind(this));
    E(this, ko, this.onPageChanging.bind(this));
    E(this, wo, this.onScaleChanging.bind(this));
    E(this, yo, this.onRotationChanging.bind(this));
    E(this, _o, {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1
    });
    E(this, Ft, [0, 0]);
    E(this, ha, null);
    E(this, Pa, null);
    E(this, Eo, null);
    this._signal = u(this, U2).signal, R(this, Pa, r), R(this, Eo, e), R(this, z2, a), this._eventBus = t, this._eventBus._on("editingaction", u(this, mo)), this._eventBus._on("pagechanging", u(this, ko)), this._eventBus._on("scalechanging", u(this, wo)), this._eventBus._on("rotationchanging", u(this, yo)), S(this, L1, ob).call(this), S(this, U1, ub).call(this), S(this, Co, vc).call(this), R(this, Na, i.annotationStorage), R(this, oo, i.filterFactory), R(this, _i, A), R(this, K2, n || null), R(this, no, o), R(this, q2, f || null), this.viewParameters = {
      realScale: Aa.PDF_TO_CSS_UNITS,
      rotation: 0
    }, this.isShiftKeyDown = !1;
  }
  static get _keyboardManager() {
    const r = K1.prototype, e = (A) => u(A, Pa).contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && A.hasSomethingToControl(), a = (A, {
      target: n
    }) => {
      if (n instanceof HTMLInputElement) {
        const {
          type: o
        } = n;
        return o !== "text" && o !== "number";
      }
      return !0;
    }, t = this.TRANSLATE_SMALL, i = this.TRANSLATE_BIG;
    return ar(this, "_keyboardManager", new mf([[["ctrl+a", "mac+meta+a"], r.selectAll, {
      checker: a
    }], [["ctrl+z", "mac+meta+z"], r.undo, {
      checker: a
    }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], r.redo, {
      checker: a
    }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], r.delete, {
      checker: a
    }], [["Enter", "mac+Enter"], r.addNewEditorFromKeyboard, {
      checker: (A, {
        target: n
      }) => !(n instanceof HTMLButtonElement) && u(A, Pa).contains(n) && !A.isEnterHandled
    }], [[" ", "mac+ "], r.addNewEditorFromKeyboard, {
      checker: (A, {
        target: n
      }) => !(n instanceof HTMLButtonElement) && u(A, Pa).contains(document.activeElement)
    }], [["Escape", "mac+Escape"], r.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], r.translateSelectedEditors, {
      args: [-t, 0],
      checker: e
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], r.translateSelectedEditors, {
      args: [-i, 0],
      checker: e
    }], [["ArrowRight", "mac+ArrowRight"], r.translateSelectedEditors, {
      args: [t, 0],
      checker: e
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], r.translateSelectedEditors, {
      args: [i, 0],
      checker: e
    }], [["ArrowUp", "mac+ArrowUp"], r.translateSelectedEditors, {
      args: [0, -t],
      checker: e
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], r.translateSelectedEditors, {
      args: [0, -i],
      checker: e
    }], [["ArrowDown", "mac+ArrowDown"], r.translateSelectedEditors, {
      args: [0, t],
      checker: e
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], r.translateSelectedEditors, {
      args: [0, i],
      checker: e
    }]]));
  }
  destroy() {
    var r, e, a;
    (r = u(this, U2)) == null || r.abort(), R(this, U2, null), this._signal = null, this._eventBus._off("editingaction", u(this, mo)), this._eventBus._off("pagechanging", u(this, ko)), this._eventBus._off("scalechanging", u(this, wo)), this._eventBus._off("rotationchanging", u(this, yo));
    for (const t of u(this, Hr).values())
      t.destroy();
    u(this, Hr).clear(), u(this, xr).clear(), u(this, wi).clear(), R(this, we, null), u(this, nr).clear(), u(this, je).destroy(), (e = u(this, z2)) == null || e.destroy(), (a = u(this, ca)) == null || a.hide(), R(this, ca, null), u(this, ua) && (clearTimeout(u(this, ua)), R(this, ua, null)), u(this, ha) && (clearTimeout(u(this, ha)), R(this, ha, null));
  }
  async mlGuess(r) {
    var e;
    return ((e = u(this, q2)) == null ? void 0 : e.guess(r)) || null;
  }
  get hasMLManager() {
    return !!u(this, q2);
  }
  get hcmFilter() {
    return ar(this, "hcmFilter", u(this, _i) ? u(this, oo).addHCMFilter(u(this, _i).foreground, u(this, _i).background) : "none");
  }
  get direction() {
    return ar(this, "direction", getComputedStyle(u(this, Pa)).direction);
  }
  get highlightColors() {
    return ar(this, "highlightColors", u(this, K2) ? new Map(u(this, K2).split(",").map((r) => r.split("=").map((e) => e.trim()))) : null);
  }
  get highlightColorNames() {
    return ar(this, "highlightColorNames", this.highlightColors ? new Map(Array.from(this.highlightColors, (r) => r.reverse())) : null);
  }
  setMainHighlightColorPicker(r) {
    R(this, fo, r);
  }
  editAltText(r) {
    var e;
    (e = u(this, z2)) == null || e.editAltText(this, r);
  }
  onPageChanging({
    pageNumber: r
  }) {
    R(this, J2, r - 1);
  }
  focusMainContainer() {
    u(this, Pa).focus();
  }
  findParent(r, e) {
    for (const a of u(this, Hr).values()) {
      const {
        x: t,
        y: i,
        width: A,
        height: n
      } = a.div.getBoundingClientRect();
      if (r >= t && r <= t + A && e >= i && e <= i + n)
        return a;
    }
    return null;
  }
  disableUserSelect(r = !1) {
    u(this, Eo).classList.toggle("noUserSelect", r);
  }
  addShouldRescale(r) {
    u(this, wi).add(r);
  }
  removeShouldRescale(r) {
    u(this, wi).delete(r);
  }
  onScaleChanging({
    scale: r
  }) {
    this.commitOrRemove(), this.viewParameters.realScale = r * Aa.PDF_TO_CSS_UNITS;
    for (const e of u(this, wi))
      e.onScaleChanging();
  }
  onRotationChanging({
    pagesRotation: r
  }) {
    this.commitOrRemove(), this.viewParameters.rotation = r;
  }
  highlightSelection(r = "") {
    const e = document.getSelection();
    if (!e || e.isCollapsed)
      return;
    const {
      anchorNode: a,
      anchorOffset: t,
      focusNode: i,
      focusOffset: A
    } = e, n = e.toString(), f = S(this, $2, Qf).call(this, e).closest(".textLayer"), l = this.getSelectionBoxes(f);
    if (l) {
      e.empty(), u(this, jr) === rr.NONE && (this._eventBus.dispatch("showannotationeditorui", {
        source: this,
        mode: rr.HIGHLIGHT
      }), this.showAllEditors("highlight", !0, !0));
      for (const c of u(this, Hr).values())
        if (c.hasTextLayer(f)) {
          c.createAndAddNewEditor({
            x: 0,
            y: 0
          }, !1, {
            methodOfCreation: r,
            boxes: l,
            anchorNode: a,
            anchorOffset: t,
            focusNode: i,
            focusOffset: A,
            text: n
          });
          break;
        }
    }
  }
  addToAnnotationStorage(r) {
    !r.isEmpty() && u(this, Na) && !u(this, Na).has(r.id) && u(this, Na).setValue(r.id, r);
  }
  blur() {
    if (this.isShiftKeyDown = !1, u(this, It) && (R(this, It, !1), S(this, rA, Jf).call(this, "main_toolbar")), !this.hasSelection)
      return;
    const {
      activeElement: r
    } = document;
    for (const e of u(this, nr))
      if (e.div.contains(r)) {
        R(this, yi, [e, r]), e._focusEventsAllowed = !1;
        break;
      }
  }
  focus() {
    if (!u(this, yi))
      return;
    const [r, e] = u(this, yi);
    R(this, yi, null), e.addEventListener("focusin", () => {
      r._focusEventsAllowed = !0;
    }, {
      once: !0,
      signal: this._signal
    }), e.focus();
  }
  addEditListeners() {
    S(this, Co, vc).call(this), S(this, Bo, pc).call(this);
  }
  removeEditListeners() {
    S(this, j1, lb).call(this), S(this, Zo, mc).call(this);
  }
  dragOver(r) {
    for (const {
      type: e
    } of r.dataTransfer.items)
      for (const a of u(this, Ue))
        if (a.isHandlingMimeForPasting(e)) {
          r.dataTransfer.dropEffect = "copy", r.preventDefault();
          return;
        }
  }
  drop(r) {
    for (const e of r.dataTransfer.items)
      for (const a of u(this, Ue))
        if (a.isHandlingMimeForPasting(e.type)) {
          a.paste(e, this.currentLayer), r.preventDefault();
          return;
        }
  }
  copy(r) {
    var a;
    if (r.preventDefault(), (a = u(this, we)) == null || a.commitOrRemove(), !this.hasSelection)
      return;
    const e = [];
    for (const t of u(this, nr)) {
      const i = t.serialize(!0);
      i && e.push(i);
    }
    e.length !== 0 && r.clipboardData.setData("application/pdfjs", JSON.stringify(e));
  }
  cut(r) {
    this.copy(r), this.delete();
  }
  paste(r) {
    r.preventDefault();
    const {
      clipboardData: e
    } = r;
    for (const i of e.items)
      for (const A of u(this, Ue))
        if (A.isHandlingMimeForPasting(i.type)) {
          A.paste(i, this.currentLayer);
          return;
        }
    let a = e.getData("application/pdfjs");
    if (!a)
      return;
    try {
      a = JSON.parse(a);
    } catch (i) {
      Q0(`paste: "${i.message}".`);
      return;
    }
    if (!Array.isArray(a))
      return;
    this.unselectAll();
    const t = this.currentLayer;
    try {
      const i = [];
      for (const o of a) {
        const f = t.deserialize(o);
        if (!f)
          return;
        i.push(f);
      }
      const A = () => {
        for (const o of i)
          S(this, Ro, kc).call(this, o);
        S(this, Io, wc).call(this, i);
      }, n = () => {
        for (const o of i)
          o.remove();
      };
      this.addCommands({
        cmd: A,
        undo: n,
        mustExec: !0
      });
    } catch (i) {
      Q0(`paste: "${i.message}".`);
    }
  }
  keydown(r) {
    !this.isShiftKeyDown && r.key === "Shift" && (this.isShiftKeyDown = !0), u(this, jr) !== rr.NONE && !this.isEditorHandlingKeyboard && K1._keyboardManager.exec(this, r);
  }
  keyup(r) {
    this.isShiftKeyDown && r.key === "Shift" && (this.isShiftKeyDown = !1, u(this, It) && (R(this, It, !1), S(this, rA, Jf).call(this, "main_toolbar")));
  }
  onEditingAction({
    name: r
  }) {
    switch (r) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[r]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
        break;
    }
  }
  setEditingState(r) {
    r ? (S(this, Y1, sb).call(this), S(this, Bo, pc).call(this), S(this, Ur, ne).call(this, {
      isEditing: u(this, jr) !== rr.NONE,
      isEmpty: S(this, Ei, Sn).call(this),
      hasSomethingToUndo: u(this, je).hasSomethingToUndo(),
      hasSomethingToRedo: u(this, je).hasSomethingToRedo(),
      hasSelectedEditor: !1
    })) : (S(this, H1, fb).call(this), S(this, Zo, mc).call(this), S(this, Ur, ne).call(this, {
      isEditing: !1
    }), this.disableUserSelect(!1));
  }
  registerEditorTypes(r) {
    if (!u(this, Ue)) {
      R(this, Ue, r);
      for (const e of u(this, Ue))
        S(this, da, kt).call(this, e.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return u(this, V1).id;
  }
  get currentLayer() {
    return u(this, Hr).get(u(this, J2));
  }
  getLayer(r) {
    return u(this, Hr).get(r);
  }
  get currentPageIndex() {
    return u(this, J2);
  }
  addLayer(r) {
    u(this, Hr).set(r.pageIndex, r), u(this, St) ? r.enable() : r.disable();
  }
  removeLayer(r) {
    u(this, Hr).delete(r.pageIndex);
  }
  updateMode(r, e = null, a = !1) {
    if (u(this, jr) !== r) {
      if (R(this, jr, r), r === rr.NONE) {
        this.setEditingState(!1), S(this, Q1, hb).call(this);
        return;
      }
      this.setEditingState(!0), S(this, z1, cb).call(this), this.unselectAll();
      for (const t of u(this, Hr).values())
        t.updateMode(r);
      if (!e && a) {
        this.addNewEditorFromKeyboard();
        return;
      }
      if (e) {
        for (const t of u(this, xr).values())
          if (t.annotationElementId === e) {
            this.setSelected(t), t.enterInEditMode();
            break;
          }
      }
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
  }
  updateToolbar(r) {
    r !== u(this, jr) && this._eventBus.dispatch("switchannotationeditormode", {
      source: this,
      mode: r
    });
  }
  updateParams(r, e) {
    var a;
    if (u(this, Ue)) {
      switch (r) {
        case O0.CREATE:
          this.currentLayer.addNewEditor();
          return;
        case O0.HIGHLIGHT_DEFAULT_COLOR:
          (a = u(this, fo)) == null || a.updateColor(e);
          break;
        case O0.HIGHLIGHT_SHOW_ALL:
          this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: {
                type: "highlight",
                action: "toggle_visibility"
              }
            }
          }), (u(this, lo) || R(this, lo, /* @__PURE__ */ new Map())).set(r, e), this.showAllEditors("highlight", e);
          break;
      }
      for (const t of u(this, nr))
        t.updateParams(r, e);
      for (const t of u(this, Ue))
        t.updateDefaultParams(r, e);
    }
  }
  showAllEditors(r, e, a = !1) {
    var i;
    for (const A of u(this, xr).values())
      A.editorType === r && A.show(e);
    (((i = u(this, lo)) == null ? void 0 : i.get(O0.HIGHLIGHT_SHOW_ALL)) ?? !0) !== e && S(this, da, kt).call(this, [[O0.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(r = !1) {
    if (u(this, so) !== r) {
      R(this, so, r);
      for (const e of u(this, Hr).values())
        r ? e.disableClick() : e.enableClick(), e.div.classList.toggle("waiting", r);
    }
  }
  getEditors(r) {
    const e = [];
    for (const a of u(this, xr).values())
      a.pageIndex === r && e.push(a);
    return e;
  }
  getEditor(r) {
    return u(this, xr).get(r);
  }
  addEditor(r) {
    u(this, xr).set(r.id, r);
  }
  removeEditor(r) {
    var e;
    r.div.contains(document.activeElement) && (u(this, ua) && clearTimeout(u(this, ua)), R(this, ua, setTimeout(() => {
      this.focusMainContainer(), R(this, ua, null);
    }, 0))), u(this, xr).delete(r.id), this.unselect(r), (!r.annotationElementId || !u(this, ki).has(r.annotationElementId)) && ((e = u(this, Na)) == null || e.remove(r.id));
  }
  addDeletedAnnotationElement(r) {
    u(this, ki).add(r.annotationElementId), this.addChangedExistingAnnotation(r), r.deleted = !0;
  }
  isDeletedAnnotationElement(r) {
    return u(this, ki).has(r);
  }
  removeDeletedAnnotationElement(r) {
    u(this, ki).delete(r.annotationElementId), this.removeChangedExistingAnnotation(r), r.deleted = !1;
  }
  setActiveEditor(r) {
    u(this, we) !== r && (R(this, we, r), r && S(this, da, kt).call(this, r.propertiesToUpdate));
  }
  updateUI(r) {
    u(this, J1, db) === r && S(this, da, kt).call(this, r.propertiesToUpdate);
  }
  toggleSelected(r) {
    if (u(this, nr).has(r)) {
      u(this, nr).delete(r), r.unselect(), S(this, Ur, ne).call(this, {
        hasSelectedEditor: this.hasSelection
      });
      return;
    }
    u(this, nr).add(r), r.select(), S(this, da, kt).call(this, r.propertiesToUpdate), S(this, Ur, ne).call(this, {
      hasSelectedEditor: !0
    });
  }
  setSelected(r) {
    for (const e of u(this, nr))
      e !== r && e.unselect();
    u(this, nr).clear(), u(this, nr).add(r), r.select(), S(this, da, kt).call(this, r.propertiesToUpdate), S(this, Ur, ne).call(this, {
      hasSelectedEditor: !0
    });
  }
  isSelected(r) {
    return u(this, nr).has(r);
  }
  get firstSelectedEditor() {
    return u(this, nr).values().next().value;
  }
  unselect(r) {
    r.unselect(), u(this, nr).delete(r), S(this, Ur, ne).call(this, {
      hasSelectedEditor: this.hasSelection
    });
  }
  get hasSelection() {
    return u(this, nr).size !== 0;
  }
  get isEnterHandled() {
    return u(this, nr).size === 1 && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    u(this, je).undo(), S(this, Ur, ne).call(this, {
      hasSomethingToUndo: u(this, je).hasSomethingToUndo(),
      hasSomethingToRedo: !0,
      isEmpty: S(this, Ei, Sn).call(this)
    });
  }
  redo() {
    u(this, je).redo(), S(this, Ur, ne).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: u(this, je).hasSomethingToRedo(),
      isEmpty: S(this, Ei, Sn).call(this)
    });
  }
  addCommands(r) {
    u(this, je).add(r), S(this, Ur, ne).call(this, {
      hasSomethingToUndo: !0,
      hasSomethingToRedo: !1,
      isEmpty: S(this, Ei, Sn).call(this)
    });
  }
  delete() {
    if (this.commitOrRemove(), !this.hasSelection)
      return;
    const r = [...u(this, nr)], e = () => {
      for (const t of r)
        t.remove();
    }, a = () => {
      for (const t of r)
        S(this, Ro, kc).call(this, t);
    };
    this.addCommands({
      cmd: e,
      undo: a,
      mustExec: !0
    });
  }
  commitOrRemove() {
    var r;
    (r = u(this, we)) == null || r.commitOrRemove();
  }
  hasSomethingToControl() {
    return u(this, we) || this.hasSelection;
  }
  selectAll() {
    for (const r of u(this, nr))
      r.commit();
    S(this, Io, wc).call(this, u(this, xr).values());
  }
  unselectAll() {
    if (!(u(this, we) && (u(this, we).commitOrRemove(), u(this, jr) !== rr.NONE)) && this.hasSelection) {
      for (const r of u(this, nr))
        r.unselect();
      u(this, nr).clear(), S(this, Ur, ne).call(this, {
        hasSelectedEditor: !1
      });
    }
  }
  translateSelectedEditors(r, e, a = !1) {
    if (a || this.commitOrRemove(), !this.hasSelection)
      return;
    u(this, Ft)[0] += r, u(this, Ft)[1] += e;
    const [t, i] = u(this, Ft), A = [...u(this, nr)], n = 1e3;
    u(this, ha) && clearTimeout(u(this, ha)), R(this, ha, setTimeout(() => {
      R(this, ha, null), u(this, Ft)[0] = u(this, Ft)[1] = 0, this.addCommands({
        cmd: () => {
          for (const o of A)
            u(this, xr).has(o.id) && o.translateInPage(t, i);
        },
        undo: () => {
          for (const o of A)
            u(this, xr).has(o.id) && o.translateInPage(-t, -i);
        },
        mustExec: !1
      });
    }, n));
    for (const o of A)
      o.translateInPage(r, e);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      this.disableUserSelect(!0), R(this, la, /* @__PURE__ */ new Map());
      for (const r of u(this, nr))
        u(this, la).set(r, {
          savedX: r.x,
          savedY: r.y,
          savedPageIndex: r.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1
        });
    }
  }
  endDragSession() {
    if (!u(this, la))
      return !1;
    this.disableUserSelect(!1);
    const r = u(this, la);
    R(this, la, null);
    let e = !1;
    for (const [{
      x: t,
      y: i,
      pageIndex: A
    }, n] of r)
      n.newX = t, n.newY = i, n.newPageIndex = A, e || (e = t !== n.savedX || i !== n.savedY || A !== n.savedPageIndex);
    if (!e)
      return !1;
    const a = (t, i, A, n) => {
      if (u(this, xr).has(t.id)) {
        const o = u(this, Hr).get(n);
        o ? t._setParentAndPosition(o, i, A) : (t.pageIndex = n, t.x = i, t.y = A);
      }
    };
    return this.addCommands({
      cmd: () => {
        for (const [t, {
          newX: i,
          newY: A,
          newPageIndex: n
        }] of r)
          a(t, i, A, n);
      },
      undo: () => {
        for (const [t, {
          savedX: i,
          savedY: A,
          savedPageIndex: n
        }] of r)
          a(t, i, A, n);
      },
      mustExec: !0
    }), !0;
  }
  dragSelectedEditors(r, e) {
    if (u(this, la))
      for (const a of u(this, la).keys())
        a.drag(r, e);
  }
  rebuild(r) {
    if (r.parent === null) {
      const e = this.getLayer(r.pageIndex);
      e ? (e.changeParent(r), e.addOrRebuild(r)) : (this.addEditor(r), this.addToAnnotationStorage(r), r.rebuild());
    } else
      r.parent.addOrRebuild(r);
  }
  get isEditorHandlingKeyboard() {
    var r;
    return ((r = this.getActive()) == null ? void 0 : r.shouldGetKeyboardEvents()) || u(this, nr).size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
  }
  isActive(r) {
    return u(this, we) === r;
  }
  getActive() {
    return u(this, we);
  }
  getMode() {
    return u(this, jr);
  }
  get imageManager() {
    return ar(this, "imageManager", new bc());
  }
  getSelectionBoxes(r) {
    if (!r)
      return null;
    const e = document.getSelection();
    for (let f = 0, l = e.rangeCount; f < l; f++)
      if (!r.contains(e.getRangeAt(f).commonAncestorContainer))
        return null;
    const {
      x: a,
      y: t,
      width: i,
      height: A
    } = r.getBoundingClientRect();
    let n;
    switch (r.getAttribute("data-main-rotation")) {
      case "90":
        n = (f, l, c, h) => ({
          x: (l - t) / A,
          y: 1 - (f + c - a) / i,
          width: h / A,
          height: c / i
        });
        break;
      case "180":
        n = (f, l, c, h) => ({
          x: 1 - (f + c - a) / i,
          y: 1 - (l + h - t) / A,
          width: c / i,
          height: h / A
        });
        break;
      case "270":
        n = (f, l, c, h) => ({
          x: 1 - (l + h - t) / A,
          y: (f - a) / i,
          width: h / A,
          height: c / i
        });
        break;
      default:
        n = (f, l, c, h) => ({
          x: (f - a) / i,
          y: (l - t) / A,
          width: c / i,
          height: h / A
        });
        break;
    }
    const o = [];
    for (let f = 0, l = e.rangeCount; f < l; f++) {
      const c = e.getRangeAt(f);
      if (!c.collapsed)
        for (const {
          x: h,
          y: d,
          width: b,
          height: g
        } of c.getClientRects())
          b === 0 || g === 0 || o.push(n(h, d, b, g));
    }
    return o.length === 0 ? null : o;
  }
  addChangedExistingAnnotation({
    annotationElementId: r,
    id: e
  }) {
    (u(this, Q2) || R(this, Q2, /* @__PURE__ */ new Map())).set(r, e);
  }
  removeChangedExistingAnnotation({
    annotationElementId: r
  }) {
    var e;
    (e = u(this, Q2)) == null || e.delete(r);
  }
  renderAnnotationElement(r) {
    var t;
    const e = (t = u(this, Q2)) == null ? void 0 : t.get(r.data.id);
    if (!e)
      return;
    const a = u(this, Na).getRawValue(e);
    a && (u(this, jr) === rr.NONE && !a.hasBeenModified || a.renderAnnotationElement(r));
  }
};
let ct = K1;
U2 = new WeakMap(), we = new WeakMap(), xr = new WeakMap(), Hr = new WeakMap(), z2 = new WeakMap(), Na = new WeakMap(), Q2 = new WeakMap(), je = new WeakMap(), J2 = new WeakMap(), ki = new WeakMap(), la = new WeakMap(), Ue = new WeakMap(), wi = new WeakMap(), no = new WeakMap(), oo = new WeakMap(), ua = new WeakMap(), K2 = new WeakMap(), It = new WeakMap(), ca = new WeakMap(), V1 = new WeakMap(), St = new WeakMap(), so = new WeakMap(), yi = new WeakMap(), fo = new WeakMap(), q2 = new WeakMap(), jr = new WeakMap(), nr = new WeakMap(), Va = new WeakMap(), _i = new WeakMap(), lo = new WeakMap(), uo = new WeakMap(), co = new WeakMap(), ho = new WeakMap(), bo = new WeakMap(), go = new WeakMap(), vo = new WeakMap(), po = new WeakMap(), mo = new WeakMap(), ko = new WeakMap(), wo = new WeakMap(), yo = new WeakMap(), _o = new WeakMap(), Ft = new WeakMap(), ha = new WeakMap(), Pa = new WeakMap(), Eo = new WeakMap(), $2 = new WeakSet(), Qf = function({
  anchorNode: r
}) {
  return r.nodeType === Node.TEXT_NODE ? r.parentElement : r;
}, P1 = new WeakSet(), Ab = function() {
  const r = document.getSelection();
  if (!r || r.isCollapsed)
    return;
  const a = S(this, $2, Qf).call(this, r).closest(".textLayer"), t = this.getSelectionBoxes(a);
  t && (u(this, ca) || R(this, ca, new bg(this)), u(this, ca).show(a, t, this.direction === "ltr"));
}, O1 = new WeakSet(), nb = function() {
  var i, A, n;
  const r = document.getSelection();
  if (!r || r.isCollapsed) {
    u(this, Va) && ((i = u(this, ca)) == null || i.hide(), R(this, Va, null), S(this, Ur, ne).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  const {
    anchorNode: e
  } = r;
  if (e === u(this, Va))
    return;
  if (!S(this, $2, Qf).call(this, r).closest(".textLayer")) {
    u(this, Va) && ((A = u(this, ca)) == null || A.hide(), R(this, Va, null), S(this, Ur, ne).call(this, {
      hasSelectedText: !1
    }));
    return;
  }
  if ((n = u(this, ca)) == null || n.hide(), R(this, Va, e), S(this, Ur, ne).call(this, {
    hasSelectedText: !0
  }), !(u(this, jr) !== rr.HIGHLIGHT && u(this, jr) !== rr.NONE) && (u(this, jr) === rr.HIGHLIGHT && this.showAllEditors("highlight", !0, !0), R(this, It, this.isShiftKeyDown), !this.isShiftKeyDown)) {
    const o = this._signal, f = (l) => {
      l.type === "pointerup" && l.button !== 0 || (window.removeEventListener("pointerup", f), window.removeEventListener("blur", f), l.type === "pointerup" && S(this, rA, Jf).call(this, "main_toolbar"));
    };
    window.addEventListener("pointerup", f, {
      signal: o
    }), window.addEventListener("blur", f, {
      signal: o
    });
  }
}, rA = new WeakSet(), Jf = function(r = "") {
  u(this, jr) === rr.HIGHLIGHT ? this.highlightSelection(r) : u(this, no) && S(this, P1, Ab).call(this);
}, L1 = new WeakSet(), ob = function() {
  document.addEventListener("selectionchange", S(this, O1, nb).bind(this), {
    signal: this._signal
  });
}, Y1 = new WeakSet(), sb = function() {
  const r = this._signal;
  window.addEventListener("focus", u(this, co), {
    signal: r
  }), window.addEventListener("blur", u(this, uo), {
    signal: r
  });
}, H1 = new WeakSet(), fb = function() {
  window.removeEventListener("focus", u(this, co)), window.removeEventListener("blur", u(this, uo));
}, Co = new WeakSet(), vc = function() {
  const r = this._signal;
  window.addEventListener("keydown", u(this, vo), {
    signal: r
  }), window.addEventListener("keyup", u(this, po), {
    signal: r
  });
}, j1 = new WeakSet(), lb = function() {
  window.removeEventListener("keydown", u(this, vo)), window.removeEventListener("keyup", u(this, po));
}, Bo = new WeakSet(), pc = function() {
  const r = this._signal;
  document.addEventListener("copy", u(this, ho), {
    signal: r
  }), document.addEventListener("cut", u(this, bo), {
    signal: r
  }), document.addEventListener("paste", u(this, go), {
    signal: r
  });
}, Zo = new WeakSet(), mc = function() {
  document.removeEventListener("copy", u(this, ho)), document.removeEventListener("cut", u(this, bo)), document.removeEventListener("paste", u(this, go));
}, U1 = new WeakSet(), ub = function() {
  const r = this._signal;
  document.addEventListener("dragover", this.dragOver.bind(this), {
    signal: r
  }), document.addEventListener("drop", this.drop.bind(this), {
    signal: r
  });
}, Ur = new WeakSet(), ne = function(r) {
  Object.entries(r).some(([a, t]) => u(this, _o)[a] !== t) && (this._eventBus.dispatch("annotationeditorstateschanged", {
    source: this,
    details: Object.assign(u(this, _o), r)
  }), u(this, jr) === rr.HIGHLIGHT && r.hasSelectedEditor === !1 && S(this, da, kt).call(this, [[O0.HIGHLIGHT_FREE, !0]]));
}, da = new WeakSet(), kt = function(r) {
  this._eventBus.dispatch("annotationeditorparamschanged", {
    source: this,
    details: r
  });
}, z1 = new WeakSet(), cb = function() {
  if (!u(this, St)) {
    R(this, St, !0);
    for (const r of u(this, Hr).values())
      r.enable();
    for (const r of u(this, xr).values())
      r.enable();
  }
}, Q1 = new WeakSet(), hb = function() {
  if (this.unselectAll(), u(this, St)) {
    R(this, St, !1);
    for (const r of u(this, Hr).values())
      r.disable();
    for (const r of u(this, xr).values())
      r.disable();
  }
}, Ro = new WeakSet(), kc = function(r) {
  const e = u(this, Hr).get(r.pageIndex);
  e ? e.addOrRebuild(r) : (this.addEditor(r), this.addToAnnotationStorage(r));
}, J1 = new WeakSet(), db = function() {
  let r = null;
  for (r of u(this, nr))
    ;
  return r;
}, Ei = new WeakSet(), Sn = function() {
  if (u(this, xr).size === 0)
    return !0;
  if (u(this, xr).size === 1)
    for (const r of u(this, xr).values())
      return r.isEmpty();
  return !1;
}, Io = new WeakSet(), wc = function(r) {
  for (const e of u(this, nr))
    e.unselect();
  u(this, nr).clear();
  for (const e of r)
    e.isEmpty() || (u(this, nr).add(e), e.select());
  S(this, Ur, ne).call(this, {
    hasSelectedEditor: this.hasSelection
  });
}, Y0(ct, "TRANSLATE_SMALL", 1), Y0(ct, "TRANSLATE_BIG", 10);
var Oa, La, ze, Ya, ye, eA, Qe, So, yc;
const _t = class {
  constructor(r) {
    E(this, So);
    E(this, Oa, "");
    E(this, La, !1);
    E(this, ze, null);
    E(this, Ya, null);
    E(this, ye, null);
    E(this, eA, !1);
    E(this, Qe, null);
    R(this, Qe, r);
  }
  static initialize(r) {
    _t._l10nPromise || (_t._l10nPromise = r);
  }
  async render() {
    const r = R(this, ze, document.createElement("button"));
    r.className = "altText";
    const e = await _t._l10nPromise.get("pdfjs-editor-alt-text-button-label");
    r.textContent = e, r.setAttribute("aria-label", e), r.tabIndex = "0";
    const a = u(this, Qe)._uiManager._signal;
    r.addEventListener("contextmenu", ve, {
      signal: a
    }), r.addEventListener("pointerdown", (i) => i.stopPropagation(), {
      signal: a
    });
    const t = (i) => {
      i.preventDefault(), u(this, Qe)._uiManager.editAltText(u(this, Qe));
    };
    return r.addEventListener("click", t, {
      capture: !0,
      signal: a
    }), r.addEventListener("keydown", (i) => {
      i.target === r && i.key === "Enter" && (R(this, eA, !0), t(i));
    }, {
      signal: a
    }), await S(this, So, yc).call(this), r;
  }
  finish() {
    u(this, ze) && (u(this, ze).focus({
      focusVisible: u(this, eA)
    }), R(this, eA, !1));
  }
  isEmpty() {
    return !u(this, Oa) && !u(this, La);
  }
  get data() {
    return {
      altText: u(this, Oa),
      decorative: u(this, La)
    };
  }
  set data({
    altText: r,
    decorative: e
  }) {
    u(this, Oa) === r && u(this, La) === e || (R(this, Oa, r), R(this, La, e), S(this, So, yc).call(this));
  }
  toggle(r = !1) {
    u(this, ze) && (!r && u(this, ye) && (clearTimeout(u(this, ye)), R(this, ye, null)), u(this, ze).disabled = !r);
  }
  destroy() {
    var r;
    (r = u(this, ze)) == null || r.remove(), R(this, ze, null), R(this, Ya, null);
  }
};
let Un = _t;
Oa = new WeakMap(), La = new WeakMap(), ze = new WeakMap(), Ya = new WeakMap(), ye = new WeakMap(), eA = new WeakMap(), Qe = new WeakMap(), So = new WeakSet(), yc = async function() {
  var t;
  const r = u(this, ze);
  if (!r)
    return;
  if (!u(this, Oa) && !u(this, La)) {
    r.classList.remove("done"), (t = u(this, Ya)) == null || t.remove();
    return;
  }
  r.classList.add("done"), _t._l10nPromise.get("pdfjs-editor-alt-text-edit-button-label").then((i) => {
    r.setAttribute("aria-label", i);
  });
  let e = u(this, Ya);
  if (!e) {
    R(this, Ya, e = document.createElement("span")), e.className = "tooltip", e.setAttribute("role", "tooltip");
    const i = e.id = `alt-text-tooltip-${u(this, Qe).id}`;
    r.setAttribute("aria-describedby", i);
    const A = 100, n = u(this, Qe)._uiManager._signal;
    n.addEventListener("abort", () => {
      clearTimeout(u(this, ye)), R(this, ye, null);
    }, {
      once: !0
    }), r.addEventListener("mouseenter", () => {
      R(this, ye, setTimeout(() => {
        R(this, ye, null), u(this, Ya).classList.add("show"), u(this, Qe)._reportTelemetry({
          action: "alt_text_tooltip"
        });
      }, A));
    }, {
      signal: n
    }), r.addEventListener("mouseleave", () => {
      var o;
      u(this, ye) && (clearTimeout(u(this, ye)), R(this, ye, null)), (o = u(this, Ya)) == null || o.classList.remove("show");
    }, {
      signal: n
    });
  }
  e.innerText = u(this, La) ? await _t._l10nPromise.get("pdfjs-editor-alt-text-decorative-tooltip") : u(this, Oa), e.parentNode || r.append(e);
  const a = u(this, Qe).getImageForAltText();
  a == null || a.setAttribute("aria-describedby", e.id);
}, Y0(Un, "_l10nPromise", null);
var Ci, Je, ae, aA, Bi, zr, Zi, tA, iA, te, Fo, Ri, Wt, Wo, Ii, Ha, ba, AA, nA, Te, xo, q1, Go, _c, To, Ec, Xo, Cc, $1, bb, rl, gb, Mo, Bc, Do, Zc, No, Rc, el, vb, al, pb, tl, mb, il, kb, Vo, Ic, Si, Fn;
const wr = class {
  constructor(r) {
    E(this, Go);
    E(this, Xo);
    E(this, $1);
    E(this, rl);
    E(this, Mo);
    E(this, Do);
    E(this, No);
    E(this, el);
    E(this, al);
    E(this, tl);
    E(this, il);
    E(this, Vo);
    E(this, Si);
    E(this, Ci, null);
    E(this, Je, null);
    E(this, ae, null);
    E(this, aA, !1);
    E(this, Bi, !1);
    E(this, zr, null);
    E(this, Zi, null);
    E(this, tA, this.focusin.bind(this));
    E(this, iA, this.focusout.bind(this));
    E(this, te, null);
    E(this, Fo, "");
    E(this, Ri, !1);
    E(this, Wt, null);
    E(this, Wo, !1);
    E(this, Ii, !1);
    E(this, Ha, !1);
    E(this, ba, null);
    E(this, AA, 0);
    E(this, nA, 0);
    E(this, Te, null);
    Y0(this, "_initialOptions", /* @__PURE__ */ Object.create(null));
    Y0(this, "_isVisible", !0);
    Y0(this, "_uiManager", null);
    Y0(this, "_focusEventsAllowed", !0);
    Y0(this, "_l10nPromise", null);
    E(this, xo, !1);
    E(this, q1, wr._zIndex++);
    this.constructor === wr && hr("Cannot initialize AnnotationEditor."), this.parent = r.parent, this.id = r.id, this.width = this.height = null, this.pageIndex = r.parent.pageIndex, this.name = r.name, this.div = null, this._uiManager = r.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = r.isCentered, this._structTreeParentId = null;
    const {
      rotation: e,
      rawDims: {
        pageWidth: a,
        pageHeight: t,
        pageX: i,
        pageY: A
      }
    } = this.parent.viewport;
    this.rotation = e, this.pageRotation = (360 + e - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [a, t], this.pageTranslation = [i, A];
    const [n, o] = this.parentDimensions;
    this.x = r.x / n, this.y = r.y / o, this.isAttachedToDOM = !1, this.deleted = !1;
  }
  static get _resizerKeyboardManager() {
    const r = wr.prototype._resizeWithKeyboard, e = ct.TRANSLATE_SMALL, a = ct.TRANSLATE_BIG;
    return ar(this, "_resizerKeyboardManager", new mf([[["ArrowLeft", "mac+ArrowLeft"], r, {
      args: [-e, 0]
    }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], r, {
      args: [-a, 0]
    }], [["ArrowRight", "mac+ArrowRight"], r, {
      args: [e, 0]
    }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], r, {
      args: [a, 0]
    }], [["ArrowUp", "mac+ArrowUp"], r, {
      args: [0, -e]
    }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], r, {
      args: [0, -a]
    }], [["ArrowDown", "mac+ArrowDown"], r, {
      args: [0, e]
    }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], r, {
      args: [0, a]
    }], [["Escape", "mac+Escape"], wr.prototype._stopResizingWithKeyboard]]));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get _defaultLineColor() {
    return ar(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
  }
  static deleteAnnotationElement(r) {
    const e = new mg({
      id: r.parent.getNextId(),
      parent: r.parent,
      uiManager: r._uiManager
    });
    e.annotationElementId = r.annotationElementId, e.deleted = !0, e._uiManager.addToAnnotationStorage(e);
  }
  static initialize(r, e, a) {
    if (wr._l10nPromise || (wr._l10nPromise = new Map(["pdfjs-editor-alt-text-button-label", "pdfjs-editor-alt-text-edit-button-label", "pdfjs-editor-alt-text-decorative-tooltip", "pdfjs-editor-resizer-label-topLeft", "pdfjs-editor-resizer-label-topMiddle", "pdfjs-editor-resizer-label-topRight", "pdfjs-editor-resizer-label-middleRight", "pdfjs-editor-resizer-label-bottomRight", "pdfjs-editor-resizer-label-bottomMiddle", "pdfjs-editor-resizer-label-bottomLeft", "pdfjs-editor-resizer-label-middleLeft"].map((i) => [i, r.get(i.replaceAll(/([A-Z])/g, (A) => `-${A.toLowerCase()}`))]))), a != null && a.strings)
      for (const i of a.strings)
        wr._l10nPromise.set(i, r.get(i));
    if (wr._borderLineWidth !== -1)
      return;
    const t = getComputedStyle(document.documentElement);
    wr._borderLineWidth = parseFloat(t.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(r, e) {
  }
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(r) {
    return !1;
  }
  static paste(r, e) {
    hr("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return u(this, xo);
  }
  set _isDraggable(r) {
    var e;
    R(this, xo, r), (e = this.div) == null || e.classList.toggle("draggable", r);
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [r, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        this.x -= this.height * e / (r * 2), this.y += this.width * r / (e * 2);
        break;
      case 180:
        this.x += this.width / 2, this.y += this.height / 2;
        break;
      case 270:
        this.x += this.height * e / (r * 2), this.y -= this.width * r / (e * 2);
        break;
      default:
        this.x -= this.width / 2, this.y -= this.height / 2;
        break;
    }
    this.fixAndSetPosition();
  }
  addCommands(r) {
    this._uiManager.addCommands(r);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = u(this, q1);
  }
  setParent(r) {
    r !== null ? (this.pageIndex = r.pageIndex, this.pageDimensions = r.pageDimensions) : S(this, Si, Fn).call(this), this.parent = r;
  }
  focusin(r) {
    this._focusEventsAllowed && (u(this, Ri) ? R(this, Ri, !1) : this.parent.setSelected(this));
  }
  focusout(r) {
    var a;
    if (!this._focusEventsAllowed || !this.isAttachedToDOM)
      return;
    const e = r.relatedTarget;
    e != null && e.closest(`#${this.id}`) || (r.preventDefault(), (a = this.parent) != null && a.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(r, e, a, t) {
    const [i, A] = this.parentDimensions;
    [a, t] = this.screenToPageTranslation(a, t), this.x = (r + a) / i, this.y = (e + t) / A, this.fixAndSetPosition();
  }
  translate(r, e) {
    S(this, Go, _c).call(this, this.parentDimensions, r, e);
  }
  translateInPage(r, e) {
    u(this, Wt) || R(this, Wt, [this.x, this.y]), S(this, Go, _c).call(this, this.pageDimensions, r, e), this.div.scrollIntoView({
      block: "nearest"
    });
  }
  drag(r, e) {
    u(this, Wt) || R(this, Wt, [this.x, this.y]);
    const [a, t] = this.parentDimensions;
    if (this.x += r / a, this.y += e / t, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
      const {
        x: f,
        y: l
      } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, f, l) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
    }
    let {
      x: i,
      y: A
    } = this;
    const [n, o] = this.getBaseTranslation();
    i += n, A += o, this.div.style.left = `${(100 * i).toFixed(2)}%`, this.div.style.top = `${(100 * A).toFixed(2)}%`, this.div.scrollIntoView({
      block: "nearest"
    });
  }
  get _hasBeenMoved() {
    return !!u(this, Wt) && (u(this, Wt)[0] !== this.x || u(this, Wt)[1] !== this.y);
  }
  getBaseTranslation() {
    const [r, e] = this.parentDimensions, {
      _borderLineWidth: a
    } = wr, t = a / r, i = a / e;
    switch (this.rotation) {
      case 90:
        return [-t, i];
      case 180:
        return [t, i];
      case 270:
        return [t, -i];
      default:
        return [-t, -i];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(r = this.rotation) {
    const [e, a] = this.pageDimensions;
    let {
      x: t,
      y: i,
      width: A,
      height: n
    } = this;
    if (A *= e, n *= a, t *= e, i *= a, this._mustFixPosition)
      switch (r) {
        case 0:
          t = Math.max(0, Math.min(e - A, t)), i = Math.max(0, Math.min(a - n, i));
          break;
        case 90:
          t = Math.max(0, Math.min(e - n, t)), i = Math.min(a, Math.max(A, i));
          break;
        case 180:
          t = Math.min(e, Math.max(A, t)), i = Math.min(a, Math.max(n, i));
          break;
        case 270:
          t = Math.min(e, Math.max(n, t)), i = Math.max(0, Math.min(a - A, i));
          break;
      }
    this.x = t /= e, this.y = i /= a;
    const [o, f] = this.getBaseTranslation();
    t += o, i += f;
    const {
      style: l
    } = this.div;
    l.left = `${(100 * t).toFixed(2)}%`, l.top = `${(100 * i).toFixed(2)}%`, this.moveInDOM();
  }
  screenToPageTranslation(r, e) {
    var a;
    return S(a = wr, To, Ec).call(a, r, e, this.parentRotation);
  }
  pageTranslationToScreen(r, e) {
    var a;
    return S(a = wr, To, Ec).call(a, r, e, 360 - this.parentRotation);
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: r,
      pageDimensions: [e, a]
    } = this, t = e * r, i = a * r;
    return be.isCSSRoundSupported ? [Math.round(t), Math.round(i)] : [t, i];
  }
  setDims(r, e) {
    const [a, t] = this.parentDimensions;
    this.div.style.width = `${(100 * r / a).toFixed(2)}%`, u(this, Bi) || (this.div.style.height = `${(100 * e / t).toFixed(2)}%`);
  }
  fixDims() {
    const {
      style: r
    } = this.div, {
      height: e,
      width: a
    } = r, t = a.endsWith("%"), i = !u(this, Bi) && e.endsWith("%");
    if (t && i)
      return;
    const [A, n] = this.parentDimensions;
    t || (r.width = `${(100 * parseFloat(a) / A).toFixed(2)}%`), !u(this, Bi) && !i && (r.height = `${(100 * parseFloat(e) / n).toFixed(2)}%`);
  }
  getInitialTranslation() {
    return [0, 0];
  }
  altTextFinish() {
    var r;
    (r = u(this, ae)) == null || r.finish();
  }
  async addEditToolbar() {
    return u(this, te) || u(this, Ii) ? u(this, te) : (R(this, te, new jf(this)), this.div.append(u(this, te).render()), u(this, ae) && u(this, te).addAltTextButton(await u(this, ae).render()), u(this, te));
  }
  removeEditToolbar() {
    var r;
    u(this, te) && (u(this, te).remove(), R(this, te, null), (r = u(this, ae)) == null || r.destroy());
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    u(this, ae) || (Un.initialize(wr._l10nPromise), R(this, ae, new Un(this)), u(this, Ci) && (u(this, ae).data = u(this, Ci), R(this, Ci, null)), await this.addEditToolbar());
  }
  get altTextData() {
    var r;
    return (r = u(this, ae)) == null ? void 0 : r.data;
  }
  set altTextData(r) {
    u(this, ae) && (u(this, ae).data = r);
  }
  hasAltText() {
    var r;
    return !((r = u(this, ae)) != null && r.isEmpty());
  }
  render() {
    this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.tabIndex = u(this, aA) ? -1 : 0, this._isVisible || this.div.classList.add("hidden"), this.setInForeground();
    const r = this._uiManager._signal;
    this.div.addEventListener("focusin", u(this, tA), {
      signal: r
    }), this.div.addEventListener("focusout", u(this, iA), {
      signal: r
    });
    const [e, a] = this.parentDimensions;
    this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * a / e).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * e / a).toFixed(2)}%`);
    const [t, i] = this.getInitialTranslation();
    return this.translate(t, i), E1(this, this.div, ["pointerdown"]), this.div;
  }
  pointerdown(r) {
    const {
      isMac: e
    } = be.platform;
    if (r.button !== 0 || r.ctrlKey && e) {
      r.preventDefault();
      return;
    }
    if (R(this, Ri, !0), this._isDraggable) {
      S(this, el, vb).call(this, r);
      return;
    }
    S(this, No, Rc).call(this, r);
  }
  moveInDOM() {
    u(this, ba) && clearTimeout(u(this, ba)), R(this, ba, setTimeout(() => {
      var r;
      R(this, ba, null), (r = this.parent) == null || r.moveEditorInDOM(this);
    }, 0));
  }
  _setParentAndPosition(r, e, a) {
    r.changeParent(this), this.x = e, this.y = a, this.fixAndSetPosition();
  }
  getRect(r, e, a = this.rotation) {
    const t = this.parentScale, [i, A] = this.pageDimensions, [n, o] = this.pageTranslation, f = r / t, l = e / t, c = this.x * i, h = this.y * A, d = this.width * i, b = this.height * A;
    switch (a) {
      case 0:
        return [c + f + n, A - h - l - b + o, c + f + d + n, A - h - l + o];
      case 90:
        return [c + l + n, A - h + f + o, c + l + b + n, A - h + f + d + o];
      case 180:
        return [c - f - d + n, A - h + l + o, c - f + n, A - h + l + b + o];
      case 270:
        return [c - l - b + n, A - h - f - d + o, c - l + n, A - h - f + o];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(r, e) {
    const [a, t, i, A] = r, n = i - a, o = A - t;
    switch (this.rotation) {
      case 0:
        return [a, e - A, n, o];
      case 90:
        return [a, e - t, o, n];
      case 180:
        return [i, e - t, n, o];
      case 270:
        return [i, e - A, o, n];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded() {
  }
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    R(this, Ii, !0);
  }
  disableEditMode() {
    R(this, Ii, !1);
  }
  isInEditMode() {
    return u(this, Ii);
  }
  shouldGetKeyboardEvents() {
    return u(this, Ha);
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  rebuild() {
    var e, a;
    const r = this._uiManager._signal;
    (e = this.div) == null || e.addEventListener("focusin", u(this, tA), {
      signal: r
    }), (a = this.div) == null || a.addEventListener("focusout", u(this, iA), {
      signal: r
    });
  }
  rotate(r) {
  }
  serialize(r = !1, e = null) {
    hr("An editor must be serializable");
  }
  static deserialize(r, e, a) {
    const t = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: a
    });
    t.rotation = r.rotation, R(t, Ci, r.accessibilityData);
    const [i, A] = t.pageDimensions, [n, o, f, l] = t.getRectInCurrentCoords(r.rect, A);
    return t.x = n / i, t.y = o / A, t.width = f / i, t.height = l / A, t;
  }
  get hasBeenModified() {
    return !!this.annotationElementId && (this.deleted || this.serialize() !== null);
  }
  remove() {
    if (this.div.removeEventListener("focusin", u(this, tA)), this.div.removeEventListener("focusout", u(this, iA)), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), u(this, ba) && (clearTimeout(u(this, ba)), R(this, ba, null)), S(this, Si, Fn).call(this), this.removeEditToolbar(), u(this, Te)) {
      for (const r of u(this, Te).values())
        clearTimeout(r);
      R(this, Te, null);
    }
    this.parent = null;
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable && (S(this, $1, bb).call(this), u(this, zr).classList.remove("hidden"), E1(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(r) {
    if (!this.isResizable || r.target !== this.div || r.key !== "Enter")
      return;
    this._uiManager.setSelected(this), R(this, Zi, {
      savedX: this.x,
      savedY: this.y,
      savedWidth: this.width,
      savedHeight: this.height
    });
    const e = u(this, zr).children;
    if (!u(this, Je)) {
      R(this, Je, Array.from(e));
      const A = S(this, al, pb).bind(this), n = S(this, tl, mb).bind(this), o = this._uiManager._signal;
      for (const f of u(this, Je)) {
        const l = f.getAttribute("data-resizer-name");
        f.setAttribute("role", "spinbutton"), f.addEventListener("keydown", A, {
          signal: o
        }), f.addEventListener("blur", n, {
          signal: o
        }), f.addEventListener("focus", S(this, il, kb).bind(this, l), {
          signal: o
        }), wr._l10nPromise.get(`pdfjs-editor-resizer-label-${l}`).then((c) => f.setAttribute("aria-label", c));
      }
    }
    const a = u(this, Je)[0];
    let t = 0;
    for (const A of e) {
      if (A === a)
        break;
      t++;
    }
    const i = (360 - this.rotation + this.parentRotation) % 360 / 90 * (u(this, Je).length / 4);
    if (i !== t) {
      if (i < t)
        for (let n = 0; n < t - i; n++)
          u(this, zr).append(u(this, zr).firstChild);
      else if (i > t)
        for (let n = 0; n < i - t; n++)
          u(this, zr).firstChild.before(u(this, zr).lastChild);
      let A = 0;
      for (const n of e) {
        const f = u(this, Je)[A++].getAttribute("data-resizer-name");
        wr._l10nPromise.get(`pdfjs-editor-resizer-label-${f}`).then((l) => n.setAttribute("aria-label", l));
      }
    }
    S(this, Vo, Ic).call(this, 0), R(this, Ha, !0), u(this, zr).firstChild.focus({
      focusVisible: !0
    }), r.preventDefault(), r.stopImmediatePropagation();
  }
  _resizeWithKeyboard(r, e) {
    u(this, Ha) && S(this, Do, Zc).call(this, u(this, Fo), {
      movementX: r,
      movementY: e
    });
  }
  _stopResizingWithKeyboard() {
    S(this, Si, Fn).call(this), this.div.focus();
  }
  select() {
    var r, e;
    if (this.makeResizable(), (r = this.div) == null || r.classList.add("selectedEditor"), !u(this, te)) {
      this.addEditToolbar().then(() => {
        var a, t;
        (a = this.div) != null && a.classList.contains("selectedEditor") && ((t = u(this, te)) == null || t.show());
      });
      return;
    }
    (e = u(this, te)) == null || e.show();
  }
  unselect() {
    var r, e, a, t;
    (r = u(this, zr)) == null || r.classList.add("hidden"), (e = this.div) == null || e.classList.remove("selectedEditor"), (a = this.div) != null && a.contains(document.activeElement) && this._uiManager.currentLayer.div.focus({
      preventScroll: !0
    }), (t = u(this, te)) == null || t.hide();
  }
  updateParams(r, e) {
  }
  disableEditing() {
  }
  enableEditing() {
  }
  enterInEditMode() {
  }
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return u(this, Wo);
  }
  set isEditing(r) {
    R(this, Wo, r), this.parent && (r ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
  }
  setAspectRatio(r, e) {
    R(this, Bi, !0);
    const a = r / e, {
      style: t
    } = this.div;
    t.aspectRatio = a, t.height = "auto";
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return {
      action: "added"
    };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(r, e = !1) {
    if (e) {
      u(this, Te) || R(this, Te, /* @__PURE__ */ new Map());
      const {
        action: a
      } = r;
      let t = u(this, Te).get(a);
      t && clearTimeout(t), t = setTimeout(() => {
        this._reportTelemetry(r), u(this, Te).delete(a), u(this, Te).size === 0 && R(this, Te, null);
      }, wr._telemetryTimeout), u(this, Te).set(a, t);
      return;
    }
    r.type || (r.type = this.editorType), this._uiManager._eventBus.dispatch("reporttelemetry", {
      source: this,
      details: {
        type: "editing",
        data: r
      }
    });
  }
  show(r = this._isVisible) {
    this.div.classList.toggle("hidden", !r), this._isVisible = r;
  }
  enable() {
    this.div && (this.div.tabIndex = 0), R(this, aA, !1);
  }
  disable() {
    this.div && (this.div.tabIndex = -1), R(this, aA, !0);
  }
  renderAnnotationElement(r) {
    let e = r.container.querySelector(".annotationContent");
    if (!e)
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), r.container.prepend(e);
    else if (e.nodeName === "CANVAS") {
      const a = e;
      e = document.createElement("div"), e.classList.add("annotationContent", this.editorType), a.before(e);
    }
    return e;
  }
  resetAnnotationElement(r) {
    const {
      firstChild: e
    } = r.container;
    e.nodeName === "DIV" && e.classList.contains("annotationContent") && e.remove();
  }
};
let er = wr;
Ci = new WeakMap(), Je = new WeakMap(), ae = new WeakMap(), aA = new WeakMap(), Bi = new WeakMap(), zr = new WeakMap(), Zi = new WeakMap(), tA = new WeakMap(), iA = new WeakMap(), te = new WeakMap(), Fo = new WeakMap(), Ri = new WeakMap(), Wt = new WeakMap(), Wo = new WeakMap(), Ii = new WeakMap(), Ha = new WeakMap(), ba = new WeakMap(), AA = new WeakMap(), nA = new WeakMap(), Te = new WeakMap(), xo = new WeakMap(), q1 = new WeakMap(), Go = new WeakSet(), _c = function([r, e], a, t) {
  [a, t] = this.screenToPageTranslation(a, t), this.x += a / r, this.y += t / e, this.fixAndSetPosition();
}, To = new WeakSet(), Ec = function(r, e, a) {
  switch (a) {
    case 90:
      return [e, -r];
    case 180:
      return [-r, -e];
    case 270:
      return [-e, r];
    default:
      return [r, e];
  }
}, Xo = new WeakSet(), Cc = function(r) {
  switch (r) {
    case 90: {
      const [e, a] = this.pageDimensions;
      return [0, -e / a, a / e, 0];
    }
    case 180:
      return [-1, 0, 0, -1];
    case 270: {
      const [e, a] = this.pageDimensions;
      return [0, e / a, -a / e, 0];
    }
    default:
      return [1, 0, 0, 1];
  }
}, $1 = new WeakSet(), bb = function() {
  if (u(this, zr))
    return;
  R(this, zr, document.createElement("div")), u(this, zr).classList.add("resizers");
  const r = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"], e = this._uiManager._signal;
  for (const a of r) {
    const t = document.createElement("div");
    u(this, zr).append(t), t.classList.add("resizer", a), t.setAttribute("data-resizer-name", a), t.addEventListener("pointerdown", S(this, rl, gb).bind(this, a), {
      signal: e
    }), t.addEventListener("contextmenu", ve, {
      signal: e
    }), t.tabIndex = -1;
  }
  this.div.prepend(u(this, zr));
}, rl = new WeakSet(), gb = function(r, e) {
  var g;
  e.preventDefault();
  const {
    isMac: a
  } = be.platform;
  if (e.button !== 0 || e.ctrlKey && a)
    return;
  (g = u(this, ae)) == null || g.toggle(!1);
  const t = S(this, Do, Zc).bind(this, r), i = this._isDraggable;
  this._isDraggable = !1;
  const A = this._uiManager._signal, n = {
    passive: !0,
    capture: !0,
    signal: A
  };
  this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", t, n), window.addEventListener("contextmenu", ve, {
    signal: A
  });
  const o = this.x, f = this.y, l = this.width, c = this.height, h = this.parent.div.style.cursor, d = this.div.style.cursor;
  this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(e.target).cursor;
  const b = () => {
    var v;
    this.parent.togglePointerEvents(!0), (v = u(this, ae)) == null || v.toggle(!0), this._isDraggable = i, window.removeEventListener("pointerup", b), window.removeEventListener("blur", b), window.removeEventListener("pointermove", t, n), window.removeEventListener("contextmenu", ve), this.parent.div.style.cursor = h, this.div.style.cursor = d, S(this, Mo, Bc).call(this, o, f, l, c);
  };
  window.addEventListener("pointerup", b, {
    signal: A
  }), window.addEventListener("blur", b, {
    signal: A
  });
}, Mo = new WeakSet(), Bc = function(r, e, a, t) {
  const i = this.x, A = this.y, n = this.width, o = this.height;
  i === r && A === e && n === a && o === t || this.addCommands({
    cmd: () => {
      this.width = n, this.height = o, this.x = i, this.y = A;
      const [f, l] = this.parentDimensions;
      this.setDims(f * n, l * o), this.fixAndSetPosition();
    },
    undo: () => {
      this.width = a, this.height = t, this.x = r, this.y = e;
      const [f, l] = this.parentDimensions;
      this.setDims(f * a, l * t), this.fixAndSetPosition();
    },
    mustExec: !0
  });
}, Do = new WeakSet(), Zc = function(r, e) {
  const [a, t] = this.parentDimensions, i = this.x, A = this.y, n = this.width, o = this.height, f = wr.MIN_SIZE / a, l = wr.MIN_SIZE / t, c = (q) => Math.round(q * 1e4) / 1e4, h = S(this, Xo, Cc).call(this, this.rotation), d = (q, _) => [h[0] * q + h[2] * _, h[1] * q + h[3] * _], b = S(this, Xo, Cc).call(this, 360 - this.rotation), g = (q, _) => [b[0] * q + b[2] * _, b[1] * q + b[3] * _];
  let v, m, w = !1, k = !1;
  switch (r) {
    case "topLeft":
      w = !0, v = (q, _) => [0, 0], m = (q, _) => [q, _];
      break;
    case "topMiddle":
      v = (q, _) => [q / 2, 0], m = (q, _) => [q / 2, _];
      break;
    case "topRight":
      w = !0, v = (q, _) => [q, 0], m = (q, _) => [0, _];
      break;
    case "middleRight":
      k = !0, v = (q, _) => [q, _ / 2], m = (q, _) => [0, _ / 2];
      break;
    case "bottomRight":
      w = !0, v = (q, _) => [q, _], m = (q, _) => [0, 0];
      break;
    case "bottomMiddle":
      v = (q, _) => [q / 2, _], m = (q, _) => [q / 2, 0];
      break;
    case "bottomLeft":
      w = !0, v = (q, _) => [0, _], m = (q, _) => [q, 0];
      break;
    case "middleLeft":
      k = !0, v = (q, _) => [0, _ / 2], m = (q, _) => [q, _ / 2];
      break;
  }
  const C = v(n, o), y = m(n, o);
  let B = d(...y);
  const F = c(i + B[0]), G = c(A + B[1]);
  let V = 1, M = 1, [T, Q] = this.screenToPageTranslation(e.movementX, e.movementY);
  if ([T, Q] = g(T / a, Q / t), w) {
    const q = Math.hypot(n, o);
    V = M = Math.max(Math.min(Math.hypot(y[0] - C[0] - T, y[1] - C[1] - Q) / q, 1 / n, 1 / o), f / n, l / o);
  } else
    k ? V = Math.max(f, Math.min(1, Math.abs(y[0] - C[0] - T))) / n : M = Math.max(l, Math.min(1, Math.abs(y[1] - C[1] - Q))) / o;
  const L = c(n * V), J = c(o * M);
  B = d(...m(L, J));
  const r0 = F - B[0], e0 = G - B[1];
  this.width = L, this.height = J, this.x = r0, this.y = e0, this.setDims(a * L, t * J), this.fixAndSetPosition();
}, No = new WeakSet(), Rc = function(r) {
  const {
    isMac: e
  } = be.platform;
  r.ctrlKey && !e || r.shiftKey || r.metaKey && e ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
}, el = new WeakSet(), vb = function(r) {
  const e = this._uiManager.isSelected(this);
  this._uiManager.setUpDragSession();
  let a, t;
  const i = this._uiManager._signal;
  e && (this.div.classList.add("moving"), a = {
    passive: !0,
    capture: !0,
    signal: i
  }, R(this, AA, r.clientX), R(this, nA, r.clientY), t = (n) => {
    const {
      clientX: o,
      clientY: f
    } = n, [l, c] = this.screenToPageTranslation(o - u(this, AA), f - u(this, nA));
    R(this, AA, o), R(this, nA, f), this._uiManager.dragSelectedEditors(l, c);
  }, window.addEventListener("pointermove", t, a));
  const A = () => {
    window.removeEventListener("pointerup", A), window.removeEventListener("blur", A), e && (this.div.classList.remove("moving"), window.removeEventListener("pointermove", t, a)), R(this, Ri, !1), this._uiManager.endDragSession() || S(this, No, Rc).call(this, r);
  };
  window.addEventListener("pointerup", A, {
    signal: i
  }), window.addEventListener("blur", A, {
    signal: i
  });
}, al = new WeakSet(), pb = function(r) {
  wr._resizerKeyboardManager.exec(this, r);
}, tl = new WeakSet(), mb = function(r) {
  var e;
  u(this, Ha) && ((e = r.relatedTarget) == null ? void 0 : e.parentNode) !== u(this, zr) && S(this, Si, Fn).call(this);
}, il = new WeakSet(), kb = function(r) {
  R(this, Fo, u(this, Ha) ? r : "");
}, Vo = new WeakSet(), Ic = function(r) {
  if (u(this, Je))
    for (const e of u(this, Je))
      e.tabIndex = r;
}, Si = new WeakSet(), Fn = function() {
  if (R(this, Ha, !1), S(this, Vo, Ic).call(this, -1), u(this, Zi)) {
    const {
      savedX: r,
      savedY: e,
      savedWidth: a,
      savedHeight: t
    } = u(this, Zi);
    S(this, Mo, Bc).call(this, r, e, a, t), R(this, Zi, null);
  }
}, E(er, To), Y0(er, "_borderLineWidth", -1), Y0(er, "_colorManager", new zf()), Y0(er, "_zIndex", 1), Y0(er, "_telemetryTimeout", 1e3);
class mg extends er {
  constructor(r) {
    super(r), this.annotationElementId = r.annotationElementId, this.deleted = !0;
  }
  serialize() {
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex
    };
  }
}
const I4 = 3285377520, xe = 4294901760, sa = 65535;
class wb {
  constructor(r) {
    this.h1 = r ? r & 4294967295 : I4, this.h2 = r ? r & 4294967295 : I4;
  }
  update(r) {
    let e, a;
    if (typeof r == "string") {
      e = new Uint8Array(r.length * 2), a = 0;
      for (let g = 0, v = r.length; g < v; g++) {
        const m = r.charCodeAt(g);
        m <= 255 ? e[a++] = m : (e[a++] = m >>> 8, e[a++] = m & 255);
      }
    } else if (ArrayBuffer.isView(r))
      e = r.slice(), a = e.byteLength;
    else
      throw new Error("Invalid data format, must be a string or TypedArray.");
    const t = a >> 2, i = a - t * 4, A = new Uint32Array(e.buffer, 0, t);
    let n = 0, o = 0, f = this.h1, l = this.h2;
    const c = 3432918353, h = 461845907, d = c & sa, b = h & sa;
    for (let g = 0; g < t; g++)
      g & 1 ? (n = A[g], n = n * c & xe | n * d & sa, n = n << 15 | n >>> 17, n = n * h & xe | n * b & sa, f ^= n, f = f << 13 | f >>> 19, f = f * 5 + 3864292196) : (o = A[g], o = o * c & xe | o * d & sa, o = o << 15 | o >>> 17, o = o * h & xe | o * b & sa, l ^= o, l = l << 13 | l >>> 19, l = l * 5 + 3864292196);
    switch (n = 0, i) {
      case 3:
        n ^= e[t * 4 + 2] << 16;
      case 2:
        n ^= e[t * 4 + 1] << 8;
      case 1:
        n ^= e[t * 4], n = n * c & xe | n * d & sa, n = n << 15 | n >>> 17, n = n * h & xe | n * b & sa, t & 1 ? f ^= n : l ^= n;
    }
    this.h1 = f, this.h2 = l;
  }
  hexdigest() {
    let r = this.h1, e = this.h2;
    return r ^= e >>> 1, r = r * 3981806797 & xe | r * 36045 & sa, e = e * 4283543511 & xe | ((e << 16 | r >>> 16) * 2950163797 & xe) >>> 16, r ^= e >>> 1, r = r * 444984403 & xe | r * 60499 & sa, e = e * 3301882366 & xe | ((e << 16 | r >>> 16) * 3120437893 & xe) >>> 16, r ^= e >>> 1, (r >>> 0).toString(16).padStart(8, "0") + (e >>> 0).toString(16).padStart(8, "0");
  }
}
const Sc = Object.freeze({
  map: null,
  hash: "",
  transfer: void 0
});
var Fi, Qr, Al, yb;
class Bh {
  constructor() {
    E(this, Al);
    E(this, Fi, !1);
    E(this, Qr, /* @__PURE__ */ new Map());
    this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
  }
  getValue(r, e) {
    const a = u(this, Qr).get(r);
    return a === void 0 ? e : Object.assign(e, a);
  }
  getRawValue(r) {
    return u(this, Qr).get(r);
  }
  remove(r) {
    if (u(this, Qr).delete(r), u(this, Qr).size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
      for (const e of u(this, Qr).values())
        if (e instanceof er)
          return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(r, e) {
    const a = u(this, Qr).get(r);
    let t = !1;
    if (a !== void 0)
      for (const [i, A] of Object.entries(e))
        a[i] !== A && (t = !0, a[i] = A);
    else
      t = !0, u(this, Qr).set(r, e);
    t && S(this, Al, yb).call(this), e instanceof er && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(e.constructor._type);
  }
  has(r) {
    return u(this, Qr).has(r);
  }
  getAll() {
    return u(this, Qr).size > 0 ? mh(u(this, Qr)) : null;
  }
  setAll(r) {
    for (const [e, a] of Object.entries(r))
      this.setValue(e, a);
  }
  get size() {
    return u(this, Qr).size;
  }
  resetModified() {
    u(this, Fi) && (R(this, Fi, !1), typeof this.onResetModified == "function" && this.onResetModified());
  }
  get print() {
    return new _b(this);
  }
  get serializable() {
    if (u(this, Qr).size === 0)
      return Sc;
    const r = /* @__PURE__ */ new Map(), e = new wb(), a = [], t = /* @__PURE__ */ Object.create(null);
    let i = !1;
    for (const [A, n] of u(this, Qr)) {
      const o = n instanceof er ? n.serialize(!1, t) : n;
      o && (r.set(A, o), e.update(`${A}:${JSON.stringify(o)}`), i || (i = !!o.bitmap));
    }
    if (i)
      for (const A of r.values())
        A.bitmap && a.push(A.bitmap);
    return r.size > 0 ? {
      map: r,
      hash: e.hexdigest(),
      transfer: a
    } : Sc;
  }
  get editorStats() {
    let r = null;
    const e = /* @__PURE__ */ new Map();
    for (const a of u(this, Qr).values()) {
      if (!(a instanceof er))
        continue;
      const t = a.telemetryFinalData;
      if (!t)
        continue;
      const {
        type: i
      } = t;
      e.has(i) || e.set(i, Object.getPrototypeOf(a).constructor), r || (r = /* @__PURE__ */ Object.create(null));
      const A = r[i] || (r[i] = /* @__PURE__ */ new Map());
      for (const [n, o] of Object.entries(t)) {
        if (n === "type")
          continue;
        let f = A.get(n);
        f || (f = /* @__PURE__ */ new Map(), A.set(n, f));
        const l = f.get(o) ?? 0;
        f.set(o, l + 1);
      }
    }
    for (const [a, t] of e)
      r[a] = t.computeTelemetryFinalData(r[a]);
    return r;
  }
}
Fi = new WeakMap(), Qr = new WeakMap(), Al = new WeakSet(), yb = function() {
  u(this, Fi) || (R(this, Fi, !0), typeof this.onSetModified == "function" && this.onSetModified());
};
var Po;
class _b extends Bh {
  constructor(e) {
    super();
    E(this, Po, void 0);
    const {
      map: a,
      hash: t,
      transfer: i
    } = e.serializable, A = structuredClone(a, i ? {
      transfer: i
    } : null);
    R(this, Po, {
      map: A,
      hash: t,
      transfer: i
    });
  }
  get print() {
    hr("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return u(this, Po);
  }
}
Po = new WeakMap();
var oA;
class kg {
  constructor({
    ownerDocument: r = globalThis.document,
    styleElement: e = null
  }) {
    E(this, oA, /* @__PURE__ */ new Set());
    this._document = r, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
  }
  addNativeFontFace(r) {
    this.nativeFontFaces.add(r), this._document.fonts.add(r);
  }
  removeNativeFontFace(r) {
    this.nativeFontFaces.delete(r), this._document.fonts.delete(r);
  }
  insertRule(r) {
    this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(r, e.cssRules.length);
  }
  clear() {
    for (const r of this.nativeFontFaces)
      this._document.fonts.delete(r);
    this.nativeFontFaces.clear(), u(this, oA).clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
  }
  async loadSystemFont({
    systemFontInfo: r,
    _inspectFont: e
  }) {
    if (!(!r || u(this, oA).has(r.loadedName))) {
      if (Mr(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
        const {
          loadedName: a,
          src: t,
          style: i
        } = r, A = new FontFace(a, t, i);
        this.addNativeFontFace(A);
        try {
          await A.load(), u(this, oA).add(a), e == null || e(r);
        } catch {
          Q0(`Cannot load system font: ${r.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(A);
        }
        return;
      }
      hr("Not implemented: loadSystemFont without the Font Loading API.");
    }
  }
  async bind(r) {
    if (r.attached || r.missingFile && !r.systemFontInfo)
      return;
    if (r.attached = !0, r.systemFontInfo) {
      await this.loadSystemFont(r);
      return;
    }
    if (this.isFontLoadingAPISupported) {
      const a = r.createNativeFontFace();
      if (a) {
        this.addNativeFontFace(a);
        try {
          await a.loaded;
        } catch (t) {
          throw Q0(`Failed to load font '${a.family}': '${t}'.`), r.disableFontFace = !0, t;
        }
      }
      return;
    }
    const e = r.createFontFaceRule();
    if (e) {
      if (this.insertRule(e), this.isSyncFontLoadingSupported)
        return;
      await new Promise((a) => {
        const t = this._queueLoadingCallback(a);
        this._prepareFontLoadEvent(r, t);
      });
    }
  }
  get isFontLoadingAPISupported() {
    var e;
    const r = !!((e = this._document) != null && e.fonts);
    return ar(this, "isFontLoadingAPISupported", r);
  }
  get isSyncFontLoadingSupported() {
    let r = !1;
    return (ie || typeof navigator < "u" && typeof (navigator == null ? void 0 : navigator.userAgent) == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (r = !0), ar(this, "isSyncFontLoadingSupported", r);
  }
  _queueLoadingCallback(r) {
    function e() {
      for (Mr(!t.done, "completeRequest() cannot be called twice."), t.done = !0; a.length > 0 && a[0].done; ) {
        const i = a.shift();
        setTimeout(i.callback, 0);
      }
    }
    const {
      loadingRequests: a
    } = this, t = {
      done: !1,
      complete: e,
      callback: r
    };
    return a.push(t), t;
  }
  get _loadTestFont() {
    const r = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
    return ar(this, "_loadTestFont", r);
  }
  _prepareFontLoadEvent(r, e) {
    function a(C, y) {
      return C.charCodeAt(y) << 24 | C.charCodeAt(y + 1) << 16 | C.charCodeAt(y + 2) << 8 | C.charCodeAt(y + 3) & 255;
    }
    function t(C, y, B, F) {
      const G = C.substring(0, y), V = C.substring(y + B);
      return G + F + V;
    }
    let i, A;
    const n = this._document.createElement("canvas");
    n.width = 1, n.height = 1;
    const o = n.getContext("2d");
    let f = 0;
    function l(C, y) {
      if (++f > 30) {
        Q0("Load test font never loaded."), y();
        return;
      }
      if (o.font = "30px " + C, o.fillText(".", 0, 20), o.getImageData(0, 0, 1, 1).data[3] > 0) {
        y();
        return;
      }
      setTimeout(l.bind(null, C, y));
    }
    const c = `lt${Date.now()}${this.loadTestFontId++}`;
    let h = this._loadTestFont;
    h = t(h, 976, c.length, c);
    const b = 16, g = 1482184792;
    let v = a(h, b);
    for (i = 0, A = c.length - 3; i < A; i += 4)
      v = v - g + a(c, i) | 0;
    i < c.length && (v = v - g + a(c + "XXX", i) | 0), h = t(h, b, 4, tg(v));
    const m = `url(data:font/opentype;base64,${btoa(h)});`, w = `@font-face {font-family:"${c}";src:${m}}`;
    this.insertRule(w);
    const k = this._document.createElement("div");
    k.style.visibility = "hidden", k.style.width = k.style.height = "10px", k.style.position = "absolute", k.style.top = k.style.left = "0px";
    for (const C of [r.loadedName, c]) {
      const y = this._document.createElement("span");
      y.textContent = "Hi", y.style.fontFamily = C, k.append(y);
    }
    this._document.body.append(k), l(c, () => {
      k.remove(), e.complete();
    });
  }
}
oA = new WeakMap();
class wg {
  constructor(r, {
    disableFontFace: e = !1,
    inspectFont: a = null
  }) {
    this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
    for (const t in r)
      this[t] = r[t];
    this.disableFontFace = e === !0, this._inspectFont = a;
  }
  createNativeFontFace() {
    var e;
    if (!this.data || this.disableFontFace)
      return null;
    let r;
    if (!this.cssFontInfo)
      r = new FontFace(this.loadedName, this.data, {});
    else {
      const a = {
        weight: this.cssFontInfo.fontWeight
      };
      this.cssFontInfo.italicAngle && (a.style = `oblique ${this.cssFontInfo.italicAngle}deg`), r = new FontFace(this.cssFontInfo.fontFamily, this.data, a);
    }
    return (e = this._inspectFont) == null || e.call(this, this), r;
  }
  createFontFaceRule() {
    var t;
    if (!this.data || this.disableFontFace)
      return null;
    const r = Yd(this.data), e = `url(data:${this.mimetype};base64,${btoa(r)});`;
    let a;
    if (!this.cssFontInfo)
      a = `@font-face {font-family:"${this.loadedName}";src:${e}}`;
    else {
      let i = `font-weight: ${this.cssFontInfo.fontWeight};`;
      this.cssFontInfo.italicAngle && (i += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), a = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${i}src:${e}}`;
    }
    return (t = this._inspectFont) == null || t.call(this, this, e), a;
  }
  getPathGenerator(r, e) {
    if (this.compiledGlyphs[e] !== void 0)
      return this.compiledGlyphs[e];
    let a;
    try {
      a = r.get(this.loadedName + "_path_" + e);
    } catch (i) {
      Q0(`getPathGenerator - ignoring character: "${i}".`);
    }
    if (!Array.isArray(a) || a.length === 0)
      return this.compiledGlyphs[e] = function(i, A) {
      };
    const t = [];
    for (let i = 0, A = a.length; i < A; )
      switch (a[i++]) {
        case Sa.BEZIER_CURVE_TO:
          {
            const [n, o, f, l, c, h] = a.slice(i, i + 6);
            t.push((d) => d.bezierCurveTo(n, o, f, l, c, h)), i += 6;
          }
          break;
        case Sa.MOVE_TO:
          {
            const [n, o] = a.slice(i, i + 2);
            t.push((f) => f.moveTo(n, o)), i += 2;
          }
          break;
        case Sa.LINE_TO:
          {
            const [n, o] = a.slice(i, i + 2);
            t.push((f) => f.lineTo(n, o)), i += 2;
          }
          break;
        case Sa.QUADRATIC_CURVE_TO:
          {
            const [n, o, f, l] = a.slice(i, i + 4);
            t.push((c) => c.quadraticCurveTo(n, o, f, l)), i += 4;
          }
          break;
        case Sa.RESTORE:
          t.push((n) => n.restore());
          break;
        case Sa.SAVE:
          t.push((n) => n.save());
          break;
        case Sa.SCALE:
          Mr(t.length === 2, "Scale command is only valid at the third position.");
          break;
        case Sa.TRANSFORM:
          {
            const [n, o, f, l, c, h] = a.slice(i, i + 6);
            t.push((d) => d.transform(n, o, f, l, c, h)), i += 6;
          }
          break;
        case Sa.TRANSLATE:
          {
            const [n, o] = a.slice(i, i + 2);
            t.push((f) => f.translate(n, o)), i += 2;
          }
          break;
      }
    return this.compiledGlyphs[e] = function(A, n) {
      t[0](A), t[1](A), A.scale(n, -n);
      for (let o = 2, f = t.length; o < f; o++)
        t[o](A);
    };
  }
}
if (ie) {
  var Fc = Promise.withResolvers(), zn = null;
  (async () => {
    const r = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-2447137e.mjs"
    ), e = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-2447137e.mjs"
    ), a = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-2447137e.mjs"
    ), t = await import(
      /*webpackIgnore: true*/
      "./__vite-browser-external-2447137e.mjs"
    );
    let i, A;
    return new Map(Object.entries({
      fs: r,
      http: e,
      https: a,
      url: t,
      canvas: i,
      path2d: A
    }));
  })().then((r) => {
    zn = r, Fc.resolve();
  }, (r) => {
    Q0(`loadPackages: ${r}`), zn = /* @__PURE__ */ new Map(), Fc.resolve();
  });
}
class Za {
  static get promise() {
    return Fc.promise;
  }
  static get(r) {
    return zn == null ? void 0 : zn.get(r);
  }
}
const Eb = function(s) {
  return Za.get("fs").promises.readFile(s).then((e) => new Uint8Array(e));
};
class yg extends vu {
}
class _g extends _1 {
  _createCanvas(r, e) {
    return Za.get("canvas").createCanvas(r, e);
  }
}
class Eg extends pu {
  _fetchData(r, e) {
    return Eb(r).then((a) => ({
      cMapData: a,
      compressionType: e
    }));
  }
}
class Cg extends mu {
  _fetchData(r) {
    return Eb(r);
  }
}
const le = {
  FILL: "Fill",
  STROKE: "Stroke",
  SHADING: "Shading"
};
function Wc(s, r) {
  if (!r)
    return;
  const e = r[2] - r[0], a = r[3] - r[1], t = new Path2D();
  t.rect(r[0], r[1], e, a), s.clip(t);
}
class kf {
  constructor() {
    this.constructor === kf && hr("Cannot initialize BaseShadingPattern.");
  }
  getPattern() {
    hr("Abstract method `getPattern` called.");
  }
}
class Bg extends kf {
  constructor(r) {
    super(), this._type = r[1], this._bbox = r[2], this._colorStops = r[3], this._p0 = r[4], this._p1 = r[5], this._r0 = r[6], this._r1 = r[7], this.matrix = null;
  }
  _createGradient(r) {
    let e;
    this._type === "axial" ? e = r.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (e = r.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
    for (const a of this._colorStops)
      e.addColorStop(a[0], a[1]);
    return e;
  }
  getPattern(r, e, a, t) {
    let i;
    if (t === le.STROKE || t === le.FILL) {
      const A = e.current.getClippedPathBoundingBox(t, vr(r)) || [0, 0, 0, 0], n = Math.ceil(A[2] - A[0]) || 1, o = Math.ceil(A[3] - A[1]) || 1, f = e.cachedCanvases.getCanvas("pattern", n, o, !0), l = f.context;
      l.clearRect(0, 0, l.canvas.width, l.canvas.height), l.beginPath(), l.rect(0, 0, l.canvas.width, l.canvas.height), l.translate(-A[0], -A[1]), a = T0.transform(a, [1, 0, 0, 1, A[0], A[1]]), l.transform(...e.baseTransform), this.matrix && l.transform(...this.matrix), Wc(l, this._bbox), l.fillStyle = this._createGradient(l), l.fill(), i = r.createPattern(f.canvas, "no-repeat");
      const c = new DOMMatrix(a);
      i.setTransform(c);
    } else
      Wc(r, this._bbox), i = this._createGradient(r);
    return i;
  }
}
function Uu(s, r, e, a, t, i, A, n) {
  const o = r.coords, f = r.colors, l = s.data, c = s.width * 4;
  let h;
  o[e + 1] > o[a + 1] && (h = e, e = a, a = h, h = i, i = A, A = h), o[a + 1] > o[t + 1] && (h = a, a = t, t = h, h = A, A = n, n = h), o[e + 1] > o[a + 1] && (h = e, e = a, a = h, h = i, i = A, A = h);
  const d = (o[e] + r.offsetX) * r.scaleX, b = (o[e + 1] + r.offsetY) * r.scaleY, g = (o[a] + r.offsetX) * r.scaleX, v = (o[a + 1] + r.offsetY) * r.scaleY, m = (o[t] + r.offsetX) * r.scaleX, w = (o[t + 1] + r.offsetY) * r.scaleY;
  if (b >= w)
    return;
  const k = f[i], C = f[i + 1], y = f[i + 2], B = f[A], F = f[A + 1], G = f[A + 2], V = f[n], M = f[n + 1], T = f[n + 2], Q = Math.round(b), L = Math.round(w);
  let J, r0, e0, q, _, x, N, D;
  for (let Y = Q; Y <= L; Y++) {
    if (Y < v) {
      const n0 = Y < b ? 0 : (b - Y) / (b - v);
      J = d - (d - g) * n0, r0 = k - (k - B) * n0, e0 = C - (C - F) * n0, q = y - (y - G) * n0;
    } else {
      let n0;
      Y > w ? n0 = 1 : v === w ? n0 = 0 : n0 = (v - Y) / (v - w), J = g - (g - m) * n0, r0 = B - (B - V) * n0, e0 = F - (F - M) * n0, q = G - (G - T) * n0;
    }
    let z;
    Y < b ? z = 0 : Y > w ? z = 1 : z = (b - Y) / (b - w), _ = d - (d - m) * z, x = k - (k - V) * z, N = C - (C - M) * z, D = y - (y - T) * z;
    const j = Math.round(Math.min(J, _)), A0 = Math.round(Math.max(J, _));
    let l0 = c * Y + j * 4;
    for (let n0 = j; n0 <= A0; n0++)
      z = (J - n0) / (J - _), z < 0 ? z = 0 : z > 1 && (z = 1), l[l0++] = r0 - (r0 - x) * z | 0, l[l0++] = e0 - (e0 - N) * z | 0, l[l0++] = q - (q - D) * z | 0, l[l0++] = 255;
  }
}
function Zg(s, r, e) {
  const a = r.coords, t = r.colors;
  let i, A;
  switch (r.type) {
    case "lattice":
      const n = r.verticesPerRow, o = Math.floor(a.length / n) - 1, f = n - 1;
      for (i = 0; i < o; i++) {
        let l = i * n;
        for (let c = 0; c < f; c++, l++)
          Uu(s, e, a[l], a[l + 1], a[l + n], t[l], t[l + 1], t[l + n]), Uu(s, e, a[l + n + 1], a[l + 1], a[l + n], t[l + n + 1], t[l + 1], t[l + n]);
      }
      break;
    case "triangles":
      for (i = 0, A = a.length; i < A; i += 3)
        Uu(s, e, a[i], a[i + 1], a[i + 2], t[i], t[i + 1], t[i + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class Rg extends kf {
  constructor(r) {
    super(), this._coords = r[2], this._colors = r[3], this._figures = r[4], this._bounds = r[5], this._bbox = r[7], this._background = r[8], this.matrix = null;
  }
  _createMeshCanvas(r, e, a) {
    const n = Math.floor(this._bounds[0]), o = Math.floor(this._bounds[1]), f = Math.ceil(this._bounds[2]) - n, l = Math.ceil(this._bounds[3]) - o, c = Math.min(Math.ceil(Math.abs(f * r[0] * 1.1)), 3e3), h = Math.min(Math.ceil(Math.abs(l * r[1] * 1.1)), 3e3), d = f / c, b = l / h, g = {
      coords: this._coords,
      colors: this._colors,
      offsetX: -n,
      offsetY: -o,
      scaleX: 1 / d,
      scaleY: 1 / b
    }, v = c + 2 * 2, m = h + 2 * 2, w = a.getCanvas("mesh", v, m, !1), k = w.context, C = k.createImageData(c, h);
    if (e) {
      const B = C.data;
      for (let F = 0, G = B.length; F < G; F += 4)
        B[F] = e[0], B[F + 1] = e[1], B[F + 2] = e[2], B[F + 3] = 255;
    }
    for (const B of this._figures)
      Zg(C, B, g);
    return k.putImageData(C, 2, 2), {
      canvas: w.canvas,
      offsetX: n - 2 * d,
      offsetY: o - 2 * b,
      scaleX: d,
      scaleY: b
    };
  }
  getPattern(r, e, a, t) {
    Wc(r, this._bbox);
    let i;
    if (t === le.SHADING)
      i = T0.singularValueDecompose2dScale(vr(r));
    else if (i = T0.singularValueDecompose2dScale(e.baseTransform), this.matrix) {
      const n = T0.singularValueDecompose2dScale(this.matrix);
      i = [i[0] * n[0], i[1] * n[1]];
    }
    const A = this._createMeshCanvas(i, t === le.SHADING ? null : this._background, e.cachedCanvases);
    return t !== le.SHADING && (r.setTransform(...e.baseTransform), this.matrix && r.transform(...this.matrix)), r.translate(A.offsetX, A.offsetY), r.scale(A.scaleX, A.scaleY), r.createPattern(A.canvas, "no-repeat");
  }
}
class Ig extends kf {
  getPattern() {
    return "hotpink";
  }
}
function Sg(s) {
  switch (s[0]) {
    case "RadialAxial":
      return new Bg(s);
    case "Mesh":
      return new Rg(s);
    case "Dummy":
      return new Ig();
  }
  throw new Error(`Unknown IR type: ${s[0]}`);
}
const S4 = {
  COLORED: 1,
  UNCOLORED: 2
}, xh = class {
  constructor(r, e, a, t, i) {
    this.operatorList = r[2], this.matrix = r[3], this.bbox = r[4], this.xstep = r[5], this.ystep = r[6], this.paintType = r[7], this.tilingType = r[8], this.color = e, this.ctx = a, this.canvasGraphicsFactory = t, this.baseTransform = i;
  }
  createPatternCanvas(r) {
    const e = this.operatorList, a = this.bbox, t = this.xstep, i = this.ystep, A = this.paintType, n = this.tilingType, o = this.color, f = this.canvasGraphicsFactory;
    du("TilingType: " + n);
    const l = a[0], c = a[1], h = a[2], d = a[3], b = T0.singularValueDecompose2dScale(this.matrix), g = T0.singularValueDecompose2dScale(this.baseTransform), v = [b[0] * g[0], b[1] * g[1]], m = this.getSizeAndScale(t, this.ctx.canvas.width, v[0]), w = this.getSizeAndScale(i, this.ctx.canvas.height, v[1]), k = r.cachedCanvases.getCanvas("pattern", m.size, w.size, !0), C = k.context, y = f.createCanvasGraphics(C);
    y.groupLevel = r.groupLevel, this.setFillAndStrokeStyleToContext(y, A, o);
    let B = l, F = c, G = h, V = d;
    return l < 0 && (B = 0, G += Math.abs(l)), c < 0 && (F = 0, V += Math.abs(c)), C.translate(-(m.scale * B), -(w.scale * F)), y.transform(m.scale, 0, 0, w.scale, 0, 0), C.save(), this.clipBbox(y, B, F, G, V), y.baseTransform = vr(y.ctx), y.executeOperatorList(e), y.endDrawing(), {
      canvas: k.canvas,
      scaleX: m.scale,
      scaleY: w.scale,
      offsetX: B,
      offsetY: F
    };
  }
  getSizeAndScale(r, e, a) {
    r = Math.abs(r);
    const t = Math.max(xh.MAX_PATTERN_SIZE, e);
    let i = Math.ceil(r * a);
    return i >= t ? i = t : a = i / r, {
      scale: a,
      size: i
    };
  }
  clipBbox(r, e, a, t, i) {
    const A = t - e, n = i - a;
    r.ctx.rect(e, a, A, n), r.current.updateRectMinMax(vr(r.ctx), [e, a, t, i]), r.clip(), r.endPath();
  }
  setFillAndStrokeStyleToContext(r, e, a) {
    const t = r.ctx, i = r.current;
    switch (e) {
      case S4.COLORED:
        const A = this.ctx;
        t.fillStyle = A.fillStyle, t.strokeStyle = A.strokeStyle, i.fillColor = A.fillStyle, i.strokeColor = A.strokeStyle;
        break;
      case S4.UNCOLORED:
        const n = T0.makeHexColor(a[0], a[1], a[2]);
        t.fillStyle = n, t.strokeStyle = n, i.fillColor = n, i.strokeColor = n;
        break;
      default:
        throw new ag(`Unsupported paint type: ${e}`);
    }
  }
  getPattern(r, e, a, t) {
    let i = a;
    t !== le.SHADING && (i = T0.transform(i, e.baseTransform), this.matrix && (i = T0.transform(i, this.matrix)));
    const A = this.createPatternCanvas(e);
    let n = new DOMMatrix(i);
    n = n.translate(A.offsetX, A.offsetY), n = n.scale(1 / A.scaleX, 1 / A.scaleY);
    const o = r.createPattern(A.canvas, "repeat");
    return o.setTransform(n), o;
  }
};
let Kf = xh;
Y0(Kf, "MAX_PATTERN_SIZE", 3e3);
function Fg({
  src: s,
  srcPos: r = 0,
  dest: e,
  width: a,
  height: t,
  nonBlackColor: i = 4294967295,
  inverseDecode: A = !1
}) {
  const n = be.isLittleEndian ? 4278190080 : 255, [o, f] = A ? [i, n] : [n, i], l = a >> 3, c = a & 7, h = s.length;
  e = new Uint32Array(e.buffer);
  let d = 0;
  for (let b = 0; b < t; b++) {
    for (const v = r + l; r < v; r++) {
      const m = r < h ? s[r] : 255;
      e[d++] = m & 128 ? f : o, e[d++] = m & 64 ? f : o, e[d++] = m & 32 ? f : o, e[d++] = m & 16 ? f : o, e[d++] = m & 8 ? f : o, e[d++] = m & 4 ? f : o, e[d++] = m & 2 ? f : o, e[d++] = m & 1 ? f : o;
    }
    if (c === 0)
      continue;
    const g = r < h ? s[r++] : 255;
    for (let v = 0; v < c; v++)
      e[d++] = g & 1 << 7 - v ? f : o;
  }
  return {
    srcPos: r,
    destPos: d
  };
}
const F4 = 16, W4 = 100, Wg = 15, x4 = 10, G4 = 1e3, de = 16;
function xg(s, r) {
  if (s._removeMirroring)
    throw new Error("Context is already forwarding operations.");
  s.__originalSave = s.save, s.__originalRestore = s.restore, s.__originalRotate = s.rotate, s.__originalScale = s.scale, s.__originalTranslate = s.translate, s.__originalTransform = s.transform, s.__originalSetTransform = s.setTransform, s.__originalResetTransform = s.resetTransform, s.__originalClip = s.clip, s.__originalMoveTo = s.moveTo, s.__originalLineTo = s.lineTo, s.__originalBezierCurveTo = s.bezierCurveTo, s.__originalRect = s.rect, s.__originalClosePath = s.closePath, s.__originalBeginPath = s.beginPath, s._removeMirroring = () => {
    s.save = s.__originalSave, s.restore = s.__originalRestore, s.rotate = s.__originalRotate, s.scale = s.__originalScale, s.translate = s.__originalTranslate, s.transform = s.__originalTransform, s.setTransform = s.__originalSetTransform, s.resetTransform = s.__originalResetTransform, s.clip = s.__originalClip, s.moveTo = s.__originalMoveTo, s.lineTo = s.__originalLineTo, s.bezierCurveTo = s.__originalBezierCurveTo, s.rect = s.__originalRect, s.closePath = s.__originalClosePath, s.beginPath = s.__originalBeginPath, delete s._removeMirroring;
  }, s.save = function() {
    r.save(), this.__originalSave();
  }, s.restore = function() {
    r.restore(), this.__originalRestore();
  }, s.translate = function(a, t) {
    r.translate(a, t), this.__originalTranslate(a, t);
  }, s.scale = function(a, t) {
    r.scale(a, t), this.__originalScale(a, t);
  }, s.transform = function(a, t, i, A, n, o) {
    r.transform(a, t, i, A, n, o), this.__originalTransform(a, t, i, A, n, o);
  }, s.setTransform = function(a, t, i, A, n, o) {
    r.setTransform(a, t, i, A, n, o), this.__originalSetTransform(a, t, i, A, n, o);
  }, s.resetTransform = function() {
    r.resetTransform(), this.__originalResetTransform();
  }, s.rotate = function(a) {
    r.rotate(a), this.__originalRotate(a);
  }, s.clip = function(a) {
    r.clip(a), this.__originalClip(a);
  }, s.moveTo = function(e, a) {
    r.moveTo(e, a), this.__originalMoveTo(e, a);
  }, s.lineTo = function(e, a) {
    r.lineTo(e, a), this.__originalLineTo(e, a);
  }, s.bezierCurveTo = function(e, a, t, i, A, n) {
    r.bezierCurveTo(e, a, t, i, A, n), this.__originalBezierCurveTo(e, a, t, i, A, n);
  }, s.rect = function(e, a, t, i) {
    r.rect(e, a, t, i), this.__originalRect(e, a, t, i);
  }, s.closePath = function() {
    r.closePath(), this.__originalClosePath();
  }, s.beginPath = function() {
    r.beginPath(), this.__originalBeginPath();
  };
}
class Gg {
  constructor(r) {
    this.canvasFactory = r, this.cache = /* @__PURE__ */ Object.create(null);
  }
  getCanvas(r, e, a) {
    let t;
    return this.cache[r] !== void 0 ? (t = this.cache[r], this.canvasFactory.reset(t, e, a)) : (t = this.canvasFactory.create(e, a), this.cache[r] = t), t;
  }
  delete(r) {
    delete this.cache[r];
  }
  clear() {
    for (const r in this.cache) {
      const e = this.cache[r];
      this.canvasFactory.destroy(e), delete this.cache[r];
    }
  }
}
function Tf(s, r, e, a, t, i, A, n, o, f) {
  const [l, c, h, d, b, g] = vr(s);
  if (c === 0 && h === 0) {
    const w = A * l + b, k = Math.round(w), C = n * d + g, y = Math.round(C), B = (A + o) * l + b, F = Math.abs(Math.round(B) - k) || 1, G = (n + f) * d + g, V = Math.abs(Math.round(G) - y) || 1;
    return s.setTransform(Math.sign(l), 0, 0, Math.sign(d), k, y), s.drawImage(r, e, a, t, i, 0, 0, F, V), s.setTransform(l, c, h, d, b, g), [F, V];
  }
  if (l === 0 && d === 0) {
    const w = n * h + b, k = Math.round(w), C = A * c + g, y = Math.round(C), B = (n + f) * h + b, F = Math.abs(Math.round(B) - k) || 1, G = (A + o) * c + g, V = Math.abs(Math.round(G) - y) || 1;
    return s.setTransform(0, Math.sign(c), Math.sign(h), 0, k, y), s.drawImage(r, e, a, t, i, 0, 0, V, F), s.setTransform(l, c, h, d, b, g), [V, F];
  }
  s.drawImage(r, e, a, t, i, A, n, o, f);
  const v = Math.hypot(l, c), m = Math.hypot(h, d);
  return [v * o, m * f];
}
function Tg(s) {
  const {
    width: r,
    height: e
  } = s;
  if (r > G4 || e > G4)
    return null;
  const a = 1e3, t = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), i = r + 1;
  let A = new Uint8Array(i * (e + 1)), n, o, f;
  const l = r + 7 & -8;
  let c = new Uint8Array(l * e), h = 0;
  for (const m of s.data) {
    let w = 128;
    for (; w > 0; )
      c[h++] = m & w ? 0 : 255, w >>= 1;
  }
  let d = 0;
  for (h = 0, c[h] !== 0 && (A[0] = 1, ++d), o = 1; o < r; o++)
    c[h] !== c[h + 1] && (A[o] = c[h] ? 2 : 1, ++d), h++;
  for (c[h] !== 0 && (A[o] = 2, ++d), n = 1; n < e; n++) {
    h = n * l, f = n * i, c[h - l] !== c[h] && (A[f] = c[h] ? 1 : 8, ++d);
    let m = (c[h] ? 4 : 0) + (c[h - l] ? 8 : 0);
    for (o = 1; o < r; o++)
      m = (m >> 2) + (c[h + 1] ? 4 : 0) + (c[h - l + 1] ? 8 : 0), t[m] && (A[f + o] = t[m], ++d), h++;
    if (c[h - l] !== c[h] && (A[f + o] = c[h] ? 2 : 4, ++d), d > a)
      return null;
  }
  for (h = l * (e - 1), f = n * i, c[h] !== 0 && (A[f] = 8, ++d), o = 1; o < r; o++)
    c[h] !== c[h + 1] && (A[f + o] = c[h] ? 4 : 8, ++d), h++;
  if (c[h] !== 0 && (A[f + o] = 4, ++d), d > a)
    return null;
  const b = new Int32Array([0, i, -1, 0, -i, 0, 0, 0, 1]), g = new Path2D();
  for (n = 0; d && n <= e; n++) {
    let m = n * i;
    const w = m + r;
    for (; m < w && !A[m]; )
      m++;
    if (m === w)
      continue;
    g.moveTo(m % i, n);
    const k = m;
    let C = A[m];
    do {
      const y = b[C];
      do
        m += y;
      while (!A[m]);
      const B = A[m];
      B !== 5 && B !== 10 ? (C = B, A[m] = 0) : (C = B & 51 * C >> 4, A[m] &= C >> 2 | C << 2), g.lineTo(m % i, m / i | 0), A[m] || --d;
    } while (k !== m);
    --n;
  }
  return c = null, A = null, function(m) {
    m.save(), m.scale(1 / r, -1 / e), m.translate(0, -e), m.fill(g), m.beginPath(), m.restore();
  };
}
class T4 {
  constructor(r, e) {
    this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = Od, this.textMatrixScale = 1, this.fontMatrix = oc, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = qr.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, r, e]);
  }
  clone() {
    const r = Object.create(this);
    return r.clipBox = this.clipBox.slice(), r;
  }
  setCurrentPoint(r, e) {
    this.x = r, this.y = e;
  }
  updatePathMinMax(r, e, a) {
    [e, a] = T0.applyTransform([e, a], r), this.minX = Math.min(this.minX, e), this.minY = Math.min(this.minY, a), this.maxX = Math.max(this.maxX, e), this.maxY = Math.max(this.maxY, a);
  }
  updateRectMinMax(r, e) {
    const a = T0.applyTransform(e, r), t = T0.applyTransform(e.slice(2), r), i = T0.applyTransform([e[0], e[3]], r), A = T0.applyTransform([e[2], e[1]], r);
    this.minX = Math.min(this.minX, a[0], t[0], i[0], A[0]), this.minY = Math.min(this.minY, a[1], t[1], i[1], A[1]), this.maxX = Math.max(this.maxX, a[0], t[0], i[0], A[0]), this.maxY = Math.max(this.maxY, a[1], t[1], i[1], A[1]);
  }
  updateScalingPathMinMax(r, e) {
    T0.scaleMinMax(r, e), this.minX = Math.min(this.minX, e[0]), this.minY = Math.min(this.minY, e[1]), this.maxX = Math.max(this.maxX, e[2]), this.maxY = Math.max(this.maxY, e[3]);
  }
  updateCurvePathMinMax(r, e, a, t, i, A, n, o, f, l) {
    const c = T0.bezierBoundingBox(e, a, t, i, A, n, o, f, l);
    l || this.updateRectMinMax(r, c);
  }
  getPathBoundingBox(r = le.FILL, e = null) {
    const a = [this.minX, this.minY, this.maxX, this.maxY];
    if (r === le.STROKE) {
      e || hr("Stroke bounding box must include transform.");
      const t = T0.singularValueDecompose2dScale(e), i = t[0] * this.lineWidth / 2, A = t[1] * this.lineWidth / 2;
      a[0] -= i, a[1] -= A, a[2] += i, a[3] += A;
    }
    return a;
  }
  updateClipFromPath() {
    const r = T0.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(r || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(r) {
    this.clipBox = r, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
  }
  getClippedPathBoundingBox(r = le.FILL, e = null) {
    return T0.intersect(this.clipBox, this.getPathBoundingBox(r, e));
  }
}
function X4(s, r) {
  if (typeof ImageData < "u" && r instanceof ImageData) {
    s.putImageData(r, 0, 0);
    return;
  }
  const e = r.height, a = r.width, t = e % de, i = (e - t) / de, A = t === 0 ? i : i + 1, n = s.createImageData(a, de);
  let o = 0, f;
  const l = r.data, c = n.data;
  let h, d, b, g;
  if (r.kind === Lf.GRAYSCALE_1BPP) {
    const v = l.byteLength, m = new Uint32Array(c.buffer, 0, c.byteLength >> 2), w = m.length, k = a + 7 >> 3, C = 4294967295, y = be.isLittleEndian ? 4278190080 : 255;
    for (h = 0; h < A; h++) {
      for (b = h < i ? de : t, f = 0, d = 0; d < b; d++) {
        const B = v - o;
        let F = 0;
        const G = B > k ? a : B * 8 - 7, V = G & -8;
        let M = 0, T = 0;
        for (; F < V; F += 8)
          T = l[o++], m[f++] = T & 128 ? C : y, m[f++] = T & 64 ? C : y, m[f++] = T & 32 ? C : y, m[f++] = T & 16 ? C : y, m[f++] = T & 8 ? C : y, m[f++] = T & 4 ? C : y, m[f++] = T & 2 ? C : y, m[f++] = T & 1 ? C : y;
        for (; F < G; F++)
          M === 0 && (T = l[o++], M = 128), m[f++] = T & M ? C : y, M >>= 1;
      }
      for (; f < w; )
        m[f++] = 0;
      s.putImageData(n, 0, h * de);
    }
  } else if (r.kind === Lf.RGBA_32BPP) {
    for (d = 0, g = a * de * 4, h = 0; h < i; h++)
      c.set(l.subarray(o, o + g)), o += g, s.putImageData(n, 0, d), d += de;
    h < A && (g = a * t * 4, c.set(l.subarray(o, o + g)), s.putImageData(n, 0, d));
  } else if (r.kind === Lf.RGB_24BPP)
    for (b = de, g = a * b, h = 0; h < A; h++) {
      for (h >= i && (b = t, g = a * b), f = 0, d = g; d--; )
        c[f++] = l[o++], c[f++] = l[o++], c[f++] = l[o++], c[f++] = 255;
      s.putImageData(n, 0, h * de);
    }
  else
    throw new Error(`bad image kind: ${r.kind}`);
}
function M4(s, r) {
  if (r.bitmap) {
    s.drawImage(r.bitmap, 0, 0);
    return;
  }
  const e = r.height, a = r.width, t = e % de, i = (e - t) / de, A = t === 0 ? i : i + 1, n = s.createImageData(a, de);
  let o = 0;
  const f = r.data, l = n.data;
  for (let c = 0; c < A; c++) {
    const h = c < i ? de : t;
    ({
      srcPos: o
    } = Fg({
      src: f,
      srcPos: o,
      dest: l,
      width: a,
      height: h,
      nonBlackColor: 0
    })), s.putImageData(n, 0, c * de);
  }
}
function kn(s, r) {
  const e = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
  for (const a of e)
    s[a] !== void 0 && (r[a] = s[a]);
  s.setLineDash !== void 0 && (r.setLineDash(s.getLineDash()), r.lineDashOffset = s.lineDashOffset);
}
function Xf(s) {
  if (s.strokeStyle = s.fillStyle = "#000000", s.fillRule = "nonzero", s.globalAlpha = 1, s.lineWidth = 1, s.lineCap = "butt", s.lineJoin = "miter", s.miterLimit = 10, s.globalCompositeOperation = "source-over", s.font = "10px sans-serif", s.setLineDash !== void 0 && (s.setLineDash([]), s.lineDashOffset = 0), !ie) {
    const {
      filter: r
    } = s;
    r !== "none" && r !== "" && (s.filter = "none");
  }
}
function D4(s, r) {
  if (r)
    return !0;
  const e = T0.singularValueDecompose2dScale(s);
  e[0] = Math.fround(e[0]), e[1] = Math.fround(e[1]);
  const a = Math.fround((globalThis.devicePixelRatio || 1) * Aa.PDF_TO_CSS_UNITS);
  return e[0] <= a && e[1] <= a;
}
const Xg = ["butt", "round", "square"], Mg = ["miter", "round", "bevel"], Dg = {}, N4 = {};
var Oo, xc, Lo, Gc;
const Gh = class {
  constructor(r, e, a, t, i, {
    optionalContentConfig: A,
    markedContentStack: n = null
  }, o, f) {
    E(this, Oo);
    E(this, Lo);
    this.ctx = r, this.current = new T4(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = e, this.objs = a, this.canvasFactory = t, this.filterFactory = i, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = n || [], this.optionalContentConfig = A, this.cachedCanvases = new Gg(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = o, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = f, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
  }
  getObject(r, e = null) {
    return typeof r == "string" ? r.startsWith("g_") ? this.commonObjs.get(r) : this.objs.get(r) : e;
  }
  beginDrawing({
    transform: r,
    viewport: e,
    transparency: a = !1,
    background: t = null
  }) {
    const i = this.ctx.canvas.width, A = this.ctx.canvas.height, n = this.ctx.fillStyle;
    if (this.ctx.fillStyle = t || "#ffffff", this.ctx.fillRect(0, 0, i, A), this.ctx.fillStyle = n, a) {
      const o = this.cachedCanvases.getCanvas("transparent", i, A);
      this.compositeCtx = this.ctx, this.transparentCanvas = o.canvas, this.ctx = o.context, this.ctx.save(), this.ctx.transform(...vr(this.compositeCtx));
    }
    this.ctx.save(), Xf(this.ctx), r && (this.ctx.transform(...r), this.outputScaleX = r[0], this.outputScaleY = r[0]), this.ctx.transform(...e.transform), this.viewportScale = e.scale, this.baseTransform = vr(this.ctx);
  }
  executeOperatorList(r, e, a, t) {
    const i = r.argsArray, A = r.fnArray;
    let n = e || 0;
    const o = i.length;
    if (o === n)
      return n;
    const f = o - n > x4 && typeof a == "function", l = f ? Date.now() + Wg : 0;
    let c = 0;
    const h = this.commonObjs, d = this.objs;
    let b;
    for (; ; ) {
      if (t !== void 0 && n === t.nextBreakPoint)
        return t.breakIt(n, a), n;
      if (b = A[n], b !== He.dependency)
        this[b].apply(this, i[n]);
      else
        for (const g of i[n]) {
          const v = g.startsWith("g_") ? h : d;
          if (!v.has(g))
            return v.get(g, a), n;
        }
      if (n++, n === o)
        return n;
      if (f && ++c > x4) {
        if (Date.now() > l)
          return a(), n;
        c = 0;
      }
    }
  }
  endDrawing() {
    S(this, Oo, xc).call(this), this.cachedCanvases.clear(), this.cachedPatterns.clear();
    for (const r of this._cachedBitmapsMap.values()) {
      for (const e of r.values())
        typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement && (e.width = e.height = 0);
      r.clear();
    }
    this._cachedBitmapsMap.clear(), S(this, Lo, Gc).call(this);
  }
  _scaleImage(r, e) {
    const a = r.width, t = r.height;
    let i = Math.max(Math.hypot(e[0], e[1]), 1), A = Math.max(Math.hypot(e[2], e[3]), 1), n = a, o = t, f = "prescale1", l, c;
    for (; i > 2 && n > 1 || A > 2 && o > 1; ) {
      let h = n, d = o;
      i > 2 && n > 1 && (h = n >= 16384 ? Math.floor(n / 2) - 1 || 1 : Math.ceil(n / 2), i /= n / h), A > 2 && o > 1 && (d = o >= 16384 ? Math.floor(o / 2) - 1 || 1 : Math.ceil(o) / 2, A /= o / d), l = this.cachedCanvases.getCanvas(f, h, d), c = l.context, c.clearRect(0, 0, h, d), c.drawImage(r, 0, 0, n, o, 0, 0, h, d), r = l.canvas, n = h, o = d, f = f === "prescale1" ? "prescale2" : "prescale1";
    }
    return {
      img: r,
      paintWidth: n,
      paintHeight: o
    };
  }
  _createMaskCanvas(r) {
    const e = this.ctx, {
      width: a,
      height: t
    } = r, i = this.current.fillColor, A = this.current.patternFill, n = vr(e);
    let o, f, l, c;
    if ((r.bitmap || r.data) && r.count > 1) {
      const G = r.bitmap || r.data.buffer;
      f = JSON.stringify(A ? n : [n.slice(0, 4), i]), o = this._cachedBitmapsMap.get(G), o || (o = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(G, o));
      const V = o.get(f);
      if (V && !A) {
        const M = Math.round(Math.min(n[0], n[2]) + n[4]), T = Math.round(Math.min(n[1], n[3]) + n[5]);
        return {
          canvas: V,
          offsetX: M,
          offsetY: T
        };
      }
      l = V;
    }
    l || (c = this.cachedCanvases.getCanvas("maskCanvas", a, t), M4(c.context, r));
    let h = T0.transform(n, [1 / a, 0, 0, -1 / t, 0, 0]);
    h = T0.transform(h, [1, 0, 0, 1, 0, -t]);
    const [d, b, g, v] = T0.getAxialAlignedBoundingBox([0, 0, a, t], h), m = Math.round(g - d) || 1, w = Math.round(v - b) || 1, k = this.cachedCanvases.getCanvas("fillCanvas", m, w), C = k.context, y = d, B = b;
    C.translate(-y, -B), C.transform(...h), l || (l = this._scaleImage(c.canvas, Fa(C)), l = l.img, o && A && o.set(f, l)), C.imageSmoothingEnabled = D4(vr(C), r.interpolate), Tf(C, l, 0, 0, l.width, l.height, 0, 0, a, t), C.globalCompositeOperation = "source-in";
    const F = T0.transform(Fa(C), [1, 0, 0, 1, -y, -B]);
    return C.fillStyle = A ? i.getPattern(e, this, F, le.FILL) : i, C.fillRect(0, 0, a, t), o && !A && (this.cachedCanvases.delete("fillCanvas"), o.set(f, k.canvas)), {
      canvas: k.canvas,
      offsetX: Math.round(y),
      offsetY: Math.round(B)
    };
  }
  setLineWidth(r) {
    r !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = r, this.ctx.lineWidth = r;
  }
  setLineCap(r) {
    this.ctx.lineCap = Xg[r];
  }
  setLineJoin(r) {
    this.ctx.lineJoin = Mg[r];
  }
  setMiterLimit(r) {
    this.ctx.miterLimit = r;
  }
  setDash(r, e) {
    const a = this.ctx;
    a.setLineDash !== void 0 && (a.setLineDash(r), a.lineDashOffset = e);
  }
  setRenderingIntent(r) {
  }
  setFlatness(r) {
  }
  setGState(r) {
    for (const [e, a] of r)
      switch (e) {
        case "LW":
          this.setLineWidth(a);
          break;
        case "LC":
          this.setLineCap(a);
          break;
        case "LJ":
          this.setLineJoin(a);
          break;
        case "ML":
          this.setMiterLimit(a);
          break;
        case "D":
          this.setDash(a[0], a[1]);
          break;
        case "RI":
          this.setRenderingIntent(a);
          break;
        case "FL":
          this.setFlatness(a);
          break;
        case "Font":
          this.setFont(a[0], a[1]);
          break;
        case "CA":
          this.current.strokeAlpha = a;
          break;
        case "ca":
          this.current.fillAlpha = a, this.ctx.globalAlpha = a;
          break;
        case "BM":
          this.ctx.globalCompositeOperation = a;
          break;
        case "SMask":
          this.current.activeSMask = a ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(a);
          break;
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const r = this.inSMaskMode;
    this.current.activeSMask && !r ? this.beginSMaskMode() : !this.current.activeSMask && r && this.endSMaskMode();
  }
  beginSMaskMode() {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const r = this.ctx.canvas.width, e = this.ctx.canvas.height, a = "smaskGroupAt" + this.groupLevel, t = this.cachedCanvases.getCanvas(a, r, e);
    this.suspendedCtx = this.ctx, this.ctx = t.context;
    const i = this.ctx;
    i.setTransform(...vr(this.suspendedCtx)), kn(this.suspendedCtx, i), xg(i, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    this.ctx._removeMirroring(), kn(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
  }
  compose(r) {
    if (!this.current.activeSMask)
      return;
    r ? (r[0] = Math.floor(r[0]), r[1] = Math.floor(r[1]), r[2] = Math.ceil(r[2]), r[3] = Math.ceil(r[3])) : r = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
    const e = this.current.activeSMask, a = this.suspendedCtx;
    this.composeSMask(a, e, this.ctx, r), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
  }
  composeSMask(r, e, a, t) {
    const i = t[0], A = t[1], n = t[2] - i, o = t[3] - A;
    n === 0 || o === 0 || (this.genericComposeSMask(e.context, a, n, o, e.subtype, e.backdrop, e.transferMap, i, A, e.offsetX, e.offsetY), r.save(), r.globalAlpha = 1, r.globalCompositeOperation = "source-over", r.setTransform(1, 0, 0, 1, 0, 0), r.drawImage(a.canvas, 0, 0), r.restore());
  }
  genericComposeSMask(r, e, a, t, i, A, n, o, f, l, c) {
    let h = r.canvas, d = o - l, b = f - c;
    if (A) {
      if (d < 0 || b < 0 || d + a > h.width || b + t > h.height) {
        const v = this.cachedCanvases.getCanvas("maskExtension", a, t), m = v.context;
        m.drawImage(h, -d, -b), A.some((w) => w !== 0) && (m.globalCompositeOperation = "destination-atop", m.fillStyle = T0.makeHexColor(...A), m.fillRect(0, 0, a, t), m.globalCompositeOperation = "source-over"), h = v.canvas, d = b = 0;
      } else if (A.some((v) => v !== 0)) {
        r.save(), r.globalAlpha = 1, r.setTransform(1, 0, 0, 1, 0, 0);
        const v = new Path2D();
        v.rect(d, b, a, t), r.clip(v), r.globalCompositeOperation = "destination-atop", r.fillStyle = T0.makeHexColor(...A), r.fillRect(d, b, a, t), r.restore();
      }
    }
    e.save(), e.globalAlpha = 1, e.setTransform(1, 0, 0, 1, 0, 0), i === "Alpha" && n ? e.filter = this.filterFactory.addAlphaFilter(n) : i === "Luminosity" && (e.filter = this.filterFactory.addLuminosityFilter(n));
    const g = new Path2D();
    g.rect(o, f, a, t), e.clip(g), e.globalCompositeOperation = "destination-in", e.drawImage(h, d, b, a, t, o, f, a, t), e.restore();
  }
  save() {
    this.inSMaskMode ? (kn(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
    const r = this.current;
    this.stateStack.push(r), this.current = r.clone();
  }
  restore() {
    this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), kn(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
  }
  transform(r, e, a, t, i, A) {
    this.ctx.transform(r, e, a, t, i, A), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
  }
  constructPath(r, e, a) {
    const t = this.ctx, i = this.current;
    let A = i.x, n = i.y, o, f;
    const l = vr(t), c = l[0] === 0 && l[3] === 0 || l[1] === 0 && l[2] === 0, h = c ? a.slice(0) : null;
    for (let d = 0, b = 0, g = r.length; d < g; d++)
      switch (r[d] | 0) {
        case He.rectangle:
          A = e[b++], n = e[b++];
          const v = e[b++], m = e[b++], w = A + v, k = n + m;
          t.moveTo(A, n), v === 0 || m === 0 ? t.lineTo(w, k) : (t.lineTo(w, n), t.lineTo(w, k), t.lineTo(A, k)), c || i.updateRectMinMax(l, [A, n, w, k]), t.closePath();
          break;
        case He.moveTo:
          A = e[b++], n = e[b++], t.moveTo(A, n), c || i.updatePathMinMax(l, A, n);
          break;
        case He.lineTo:
          A = e[b++], n = e[b++], t.lineTo(A, n), c || i.updatePathMinMax(l, A, n);
          break;
        case He.curveTo:
          o = A, f = n, A = e[b + 4], n = e[b + 5], t.bezierCurveTo(e[b], e[b + 1], e[b + 2], e[b + 3], A, n), i.updateCurvePathMinMax(l, o, f, e[b], e[b + 1], e[b + 2], e[b + 3], A, n, h), b += 6;
          break;
        case He.curveTo2:
          o = A, f = n, t.bezierCurveTo(A, n, e[b], e[b + 1], e[b + 2], e[b + 3]), i.updateCurvePathMinMax(l, o, f, A, n, e[b], e[b + 1], e[b + 2], e[b + 3], h), A = e[b + 2], n = e[b + 3], b += 4;
          break;
        case He.curveTo3:
          o = A, f = n, A = e[b + 2], n = e[b + 3], t.bezierCurveTo(e[b], e[b + 1], A, n, A, n), i.updateCurvePathMinMax(l, o, f, e[b], e[b + 1], A, n, A, n, h), b += 4;
          break;
        case He.closePath:
          t.closePath();
          break;
      }
    c && i.updateScalingPathMinMax(l, h), i.setCurrentPoint(A, n);
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(r = !0) {
    const e = this.ctx, a = this.current.strokeColor;
    e.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof a == "object" && (a != null && a.getPattern) ? (e.save(), e.strokeStyle = a.getPattern(e, this, Fa(e), le.STROKE), this.rescaleAndStroke(!1), e.restore()) : this.rescaleAndStroke(!0)), r && this.consumePath(this.current.getClippedPathBoundingBox()), e.globalAlpha = this.current.fillAlpha;
  }
  closeStroke() {
    this.closePath(), this.stroke();
  }
  fill(r = !0) {
    const e = this.ctx, a = this.current.fillColor, t = this.current.patternFill;
    let i = !1;
    t && (e.save(), e.fillStyle = a.getPattern(e, this, Fa(e), le.FILL), i = !0);
    const A = this.current.getClippedPathBoundingBox();
    this.contentVisible && A !== null && (this.pendingEOFill ? (e.fill("evenodd"), this.pendingEOFill = !1) : e.fill()), i && e.restore(), r && this.consumePath(A);
  }
  eoFill() {
    this.pendingEOFill = !0, this.fill();
  }
  fillStroke() {
    this.fill(!1), this.stroke(!1), this.consumePath();
  }
  eoFillStroke() {
    this.pendingEOFill = !0, this.fillStroke();
  }
  closeFillStroke() {
    this.closePath(), this.fillStroke();
  }
  closeEOFillStroke() {
    this.pendingEOFill = !0, this.closePath(), this.fillStroke();
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = Dg;
  }
  eoClip() {
    this.pendingClip = N4;
  }
  beginText() {
    this.current.textMatrix = Od, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  endText() {
    const r = this.pendingTextPaths, e = this.ctx;
    if (r === void 0) {
      e.beginPath();
      return;
    }
    e.save(), e.beginPath();
    for (const a of r)
      e.setTransform(...a.transform), e.translate(a.x, a.y), a.addToPath(e, a.fontSize);
    e.restore(), e.clip(), e.beginPath(), delete this.pendingTextPaths;
  }
  setCharSpacing(r) {
    this.current.charSpacing = r;
  }
  setWordSpacing(r) {
    this.current.wordSpacing = r;
  }
  setHScale(r) {
    this.current.textHScale = r / 100;
  }
  setLeading(r) {
    this.current.leading = -r;
  }
  setFont(r, e) {
    var l;
    const a = this.commonObjs.get(r), t = this.current;
    if (!a)
      throw new Error(`Can't find font for ${r}`);
    if (t.fontMatrix = a.fontMatrix || oc, (t.fontMatrix[0] === 0 || t.fontMatrix[3] === 0) && Q0("Invalid font matrix for font " + r), e < 0 ? (e = -e, t.fontDirection = -1) : t.fontDirection = 1, this.current.font = a, this.current.fontSize = e, a.isType3Font)
      return;
    const i = a.loadedName || "sans-serif", A = ((l = a.systemFontInfo) == null ? void 0 : l.css) || `"${i}", ${a.fallbackName}`;
    let n = "normal";
    a.black ? n = "900" : a.bold && (n = "bold");
    const o = a.italic ? "italic" : "normal";
    let f = e;
    e < F4 ? f = F4 : e > W4 && (f = W4), this.current.fontSizeScale = e / f, this.ctx.font = `${o} ${n} ${f}px ${A}`;
  }
  setTextRenderingMode(r) {
    this.current.textRenderingMode = r;
  }
  setTextRise(r) {
    this.current.textRise = r;
  }
  moveText(r, e) {
    this.current.x = this.current.lineX += r, this.current.y = this.current.lineY += e;
  }
  setLeadingMoveText(r, e) {
    this.setLeading(-e), this.moveText(r, e);
  }
  setTextMatrix(r, e, a, t, i, A) {
    this.current.textMatrix = [r, e, a, t, i, A], this.current.textMatrixScale = Math.hypot(r, e), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(r, e, a, t) {
    const i = this.ctx, A = this.current, n = A.font, o = A.textRenderingMode, f = A.fontSize / A.fontSizeScale, l = o & qr.FILL_STROKE_MASK, c = !!(o & qr.ADD_TO_PATH_FLAG), h = A.patternFill && !n.missingFile;
    let d;
    (n.disableFontFace || c || h) && (d = n.getPathGenerator(this.commonObjs, r)), n.disableFontFace || h ? (i.save(), i.translate(e, a), i.beginPath(), d(i, f), t && i.setTransform(...t), (l === qr.FILL || l === qr.FILL_STROKE) && i.fill(), (l === qr.STROKE || l === qr.FILL_STROKE) && i.stroke(), i.restore()) : ((l === qr.FILL || l === qr.FILL_STROKE) && i.fillText(r, e, a), (l === qr.STROKE || l === qr.FILL_STROKE) && i.strokeText(r, e, a)), c && (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
      transform: vr(i),
      x: e,
      y: a,
      fontSize: f,
      addToPath: d
    });
  }
  get isFontSubpixelAAEnabled() {
    const {
      context: r
    } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
    r.scale(1.5, 1), r.fillText("I", 0, 10);
    const e = r.getImageData(0, 0, 10, 10).data;
    let a = !1;
    for (let t = 3; t < e.length; t += 4)
      if (e[t] > 0 && e[t] < 255) {
        a = !0;
        break;
      }
    return ar(this, "isFontSubpixelAAEnabled", a);
  }
  showText(r) {
    const e = this.current, a = e.font;
    if (a.isType3Font)
      return this.showType3Text(r);
    const t = e.fontSize;
    if (t === 0)
      return;
    const i = this.ctx, A = e.fontSizeScale, n = e.charSpacing, o = e.wordSpacing, f = e.fontDirection, l = e.textHScale * f, c = r.length, h = a.vertical, d = h ? 1 : -1, b = a.defaultVMetrics, g = t * e.fontMatrix[0], v = e.textRenderingMode === qr.FILL && !a.disableFontFace && !e.patternFill;
    i.save(), i.transform(...e.textMatrix), i.translate(e.x, e.y + e.textRise), f > 0 ? i.scale(l, -1) : i.scale(l, 1);
    let m;
    if (e.patternFill) {
      i.save();
      const B = e.fillColor.getPattern(i, this, Fa(i), le.FILL);
      m = vr(i), i.restore(), i.fillStyle = B;
    }
    let w = e.lineWidth;
    const k = e.textMatrixScale;
    if (k === 0 || w === 0) {
      const B = e.textRenderingMode & qr.FILL_STROKE_MASK;
      (B === qr.STROKE || B === qr.FILL_STROKE) && (w = this.getSinglePixelWidth());
    } else
      w /= k;
    if (A !== 1 && (i.scale(A, A), w /= A), i.lineWidth = w, a.isInvalidPDFjsFont) {
      const B = [];
      let F = 0;
      for (const G of r)
        B.push(G.unicode), F += G.width;
      i.fillText(B.join(""), 0, 0), e.x += F * g * l, i.restore(), this.compose();
      return;
    }
    let C = 0, y;
    for (y = 0; y < c; ++y) {
      const B = r[y];
      if (typeof B == "number") {
        C += d * B * t / 1e3;
        continue;
      }
      let F = !1;
      const G = (B.isSpace ? o : 0) + n, V = B.fontChar, M = B.accent;
      let T, Q, L = B.width;
      if (h) {
        const r0 = B.vmetric || b, e0 = -(B.vmetric ? r0[1] : L * 0.5) * g, q = r0[2] * g;
        L = r0 ? -r0[0] : L, T = e0 / A, Q = (C + q) / A;
      } else
        T = C / A, Q = 0;
      if (a.remeasure && L > 0) {
        const r0 = i.measureText(V).width * 1e3 / t * A;
        if (L < r0 && this.isFontSubpixelAAEnabled) {
          const e0 = L / r0;
          F = !0, i.save(), i.scale(e0, 1), T /= e0;
        } else
          L !== r0 && (T += (L - r0) / 2e3 * t / A);
      }
      if (this.contentVisible && (B.isInFont || a.missingFile)) {
        if (v && !M)
          i.fillText(V, T, Q);
        else if (this.paintChar(V, T, Q, m), M) {
          const r0 = T + t * M.offset.x / A, e0 = Q - t * M.offset.y / A;
          this.paintChar(M.fontChar, r0, e0, m);
        }
      }
      const J = h ? L * g - G * f : L * g + G * f;
      C += J, F && i.restore();
    }
    h ? e.y -= C : e.x += C * l, i.restore(), this.compose();
  }
  showType3Text(r) {
    const e = this.ctx, a = this.current, t = a.font, i = a.fontSize, A = a.fontDirection, n = t.vertical ? 1 : -1, o = a.charSpacing, f = a.wordSpacing, l = a.textHScale * A, c = a.fontMatrix || oc, h = r.length, d = a.textRenderingMode === qr.INVISIBLE;
    let b, g, v, m;
    if (!(d || i === 0)) {
      for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, e.save(), e.transform(...a.textMatrix), e.translate(a.x, a.y), e.scale(l, A), b = 0; b < h; ++b) {
        if (g = r[b], typeof g == "number") {
          m = n * g * i / 1e3, this.ctx.translate(m, 0), a.x += m * l;
          continue;
        }
        const w = (g.isSpace ? f : 0) + o, k = t.charProcOperatorList[g.operatorListId];
        if (!k) {
          Q0(`Type3 character "${g.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible && (this.processingType3 = g, this.save(), e.scale(i, i), e.transform(...c), this.executeOperatorList(k), this.restore()), v = T0.applyTransform([g.width, 0], c)[0] * i + w, e.translate(v, 0), a.x += v * l;
      }
      e.restore(), this.processingType3 = null;
    }
  }
  setCharWidth(r, e) {
  }
  setCharWidthAndBounds(r, e, a, t, i, A) {
    this.ctx.rect(a, t, i - a, A - t), this.ctx.clip(), this.endPath();
  }
  getColorN_Pattern(r) {
    let e;
    if (r[0] === "TilingPattern") {
      const a = r[1], t = this.baseTransform || vr(this.ctx), i = {
        createCanvasGraphics: (A) => new Gh(A, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
          optionalContentConfig: this.optionalContentConfig,
          markedContentStack: this.markedContentStack
        })
      };
      e = new Kf(r, a, this.ctx, i, t);
    } else
      e = this._getPattern(r[1], r[2]);
    return e;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments);
  }
  setFillColorN() {
    this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
  }
  setStrokeRGBColor(r, e, a) {
    const t = T0.makeHexColor(r, e, a);
    this.ctx.strokeStyle = t, this.current.strokeColor = t;
  }
  setFillRGBColor(r, e, a) {
    const t = T0.makeHexColor(r, e, a);
    this.ctx.fillStyle = t, this.current.fillColor = t, this.current.patternFill = !1;
  }
  _getPattern(r, e = null) {
    let a;
    return this.cachedPatterns.has(r) ? a = this.cachedPatterns.get(r) : (a = Sg(this.getObject(r)), this.cachedPatterns.set(r, a)), e && (a.matrix = e), a;
  }
  shadingFill(r) {
    if (!this.contentVisible)
      return;
    const e = this.ctx;
    this.save();
    const a = this._getPattern(r);
    e.fillStyle = a.getPattern(e, this, Fa(e), le.SHADING);
    const t = Fa(e);
    if (t) {
      const {
        width: i,
        height: A
      } = e.canvas, [n, o, f, l] = T0.getAxialAlignedBoundingBox([0, 0, i, A], t);
      this.ctx.fillRect(n, o, f - n, l - o);
    } else
      this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    this.compose(this.current.getClippedPathBoundingBox()), this.restore();
  }
  beginInlineImage() {
    hr("Should not call beginInlineImage");
  }
  beginImageData() {
    hr("Should not call beginImageData");
  }
  paintFormXObjectBegin(r, e) {
    if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), r && this.transform(...r), this.baseTransform = vr(this.ctx), e)) {
      const a = e[2] - e[0], t = e[3] - e[1];
      this.ctx.rect(e[0], e[1], a, t), this.current.updateRectMinMax(vr(this.ctx), e), this.clip(), this.endPath();
    }
  }
  paintFormXObjectEnd() {
    this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
  }
  beginGroup(r) {
    if (!this.contentVisible)
      return;
    this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
    const e = this.ctx;
    r.isolated || du("TODO: Support non-isolated groups."), r.knockout && Q0("Knockout groups not supported.");
    const a = vr(e);
    if (r.matrix && e.transform(...r.matrix), !r.bbox)
      throw new Error("Bounding box is required.");
    let t = T0.getAxialAlignedBoundingBox(r.bbox, vr(e));
    const i = [0, 0, e.canvas.width, e.canvas.height];
    t = T0.intersect(t, i) || [0, 0, 0, 0];
    const A = Math.floor(t[0]), n = Math.floor(t[1]), o = Math.max(Math.ceil(t[2]) - A, 1), f = Math.max(Math.ceil(t[3]) - n, 1);
    this.current.startNewPathAndClipBox([0, 0, o, f]);
    let l = "groupAt" + this.groupLevel;
    r.smask && (l += "_smask_" + this.smaskCounter++ % 2);
    const c = this.cachedCanvases.getCanvas(l, o, f), h = c.context;
    h.translate(-A, -n), h.transform(...a), r.smask ? this.smaskStack.push({
      canvas: c.canvas,
      context: h,
      offsetX: A,
      offsetY: n,
      subtype: r.smask.subtype,
      backdrop: r.smask.backdrop,
      transferMap: r.smask.transferMap || null,
      startTransformInverse: null
    }) : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(A, n), e.save()), kn(e, h), this.ctx = h, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(e), this.groupLevel++;
  }
  endGroup(r) {
    if (!this.contentVisible)
      return;
    this.groupLevel--;
    const e = this.ctx, a = this.groupStack.pop();
    if (this.ctx = a, this.ctx.imageSmoothingEnabled = !1, r.smask)
      this.tempSMask = this.smaskStack.pop(), this.restore();
    else {
      this.ctx.restore();
      const t = vr(this.ctx);
      this.restore(), this.ctx.save(), this.ctx.setTransform(...t);
      const i = T0.getAxialAlignedBoundingBox([0, 0, e.canvas.width, e.canvas.height], t);
      this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(i);
    }
  }
  beginAnnotation(r, e, a, t, i) {
    if (S(this, Oo, xc).call(this), Xf(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), e) {
      const A = e[2] - e[0], n = e[3] - e[1];
      if (i && this.annotationCanvasMap) {
        a = a.slice(), a[4] -= e[0], a[5] -= e[1], e = e.slice(), e[0] = e[1] = 0, e[2] = A, e[3] = n;
        const [o, f] = T0.singularValueDecompose2dScale(vr(this.ctx)), {
          viewportScale: l
        } = this, c = Math.ceil(A * this.outputScaleX * l), h = Math.ceil(n * this.outputScaleY * l);
        this.annotationCanvas = this.canvasFactory.create(c, h);
        const {
          canvas: d,
          context: b
        } = this.annotationCanvas;
        this.annotationCanvasMap.set(r, d), this.annotationCanvas.savedCtx = this.ctx, this.ctx = b, this.ctx.save(), this.ctx.setTransform(o, 0, 0, -f, 0, n * f), Xf(this.ctx);
      } else
        Xf(this.ctx), this.ctx.rect(e[0], e[1], A, n), this.ctx.clip(), this.endPath();
    }
    this.current = new T4(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...a), this.transform(...t);
  }
  endAnnotation() {
    this.annotationCanvas && (this.ctx.restore(), S(this, Lo, Gc).call(this), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
  }
  paintImageMaskXObject(r) {
    if (!this.contentVisible)
      return;
    const e = r.count;
    r = this.getObject(r.data, r), r.count = e;
    const a = this.ctx, t = this.processingType3;
    if (t && (t.compiled === void 0 && (t.compiled = Tg(r)), t.compiled)) {
      t.compiled(a);
      return;
    }
    const i = this._createMaskCanvas(r), A = i.canvas;
    a.save(), a.setTransform(1, 0, 0, 1, 0, 0), a.drawImage(A, i.offsetX, i.offsetY), a.restore(), this.compose();
  }
  paintImageMaskXObjectRepeat(r, e, a = 0, t = 0, i, A) {
    if (!this.contentVisible)
      return;
    r = this.getObject(r.data, r);
    const n = this.ctx;
    n.save();
    const o = vr(n);
    n.transform(e, a, t, i, 0, 0);
    const f = this._createMaskCanvas(r);
    n.setTransform(1, 0, 0, 1, f.offsetX - o[4], f.offsetY - o[5]);
    for (let l = 0, c = A.length; l < c; l += 2) {
      const h = T0.transform(o, [e, a, t, i, A[l], A[l + 1]]), [d, b] = T0.applyTransform([0, 0], h);
      n.drawImage(f.canvas, d, b);
    }
    n.restore(), this.compose();
  }
  paintImageMaskXObjectGroup(r) {
    if (!this.contentVisible)
      return;
    const e = this.ctx, a = this.current.fillColor, t = this.current.patternFill;
    for (const i of r) {
      const {
        data: A,
        width: n,
        height: o,
        transform: f
      } = i, l = this.cachedCanvases.getCanvas("maskCanvas", n, o), c = l.context;
      c.save();
      const h = this.getObject(A, i);
      M4(c, h), c.globalCompositeOperation = "source-in", c.fillStyle = t ? a.getPattern(c, this, Fa(e), le.FILL) : a, c.fillRect(0, 0, n, o), c.restore(), e.save(), e.transform(...f), e.scale(1, -1), Tf(e, l.canvas, 0, 0, n, o, 0, -1, 1, 1), e.restore();
    }
    this.compose();
  }
  paintImageXObject(r) {
    if (!this.contentVisible)
      return;
    const e = this.getObject(r);
    if (!e) {
      Q0("Dependent image isn't ready yet");
      return;
    }
    this.paintInlineImageXObject(e);
  }
  paintImageXObjectRepeat(r, e, a, t) {
    if (!this.contentVisible)
      return;
    const i = this.getObject(r);
    if (!i) {
      Q0("Dependent image isn't ready yet");
      return;
    }
    const A = i.width, n = i.height, o = [];
    for (let f = 0, l = t.length; f < l; f += 2)
      o.push({
        transform: [e, 0, 0, a, t[f], t[f + 1]],
        x: 0,
        y: 0,
        w: A,
        h: n
      });
    this.paintInlineImageXObjectGroup(i, o);
  }
  applyTransferMapsToCanvas(r) {
    return this.current.transferMaps !== "none" && (r.filter = this.current.transferMaps, r.drawImage(r.canvas, 0, 0), r.filter = "none"), r.canvas;
  }
  applyTransferMapsToBitmap(r) {
    if (this.current.transferMaps === "none")
      return r.bitmap;
    const {
      bitmap: e,
      width: a,
      height: t
    } = r, i = this.cachedCanvases.getCanvas("inlineImage", a, t), A = i.context;
    return A.filter = this.current.transferMaps, A.drawImage(e, 0, 0), A.filter = "none", i.canvas;
  }
  paintInlineImageXObject(r) {
    if (!this.contentVisible)
      return;
    const e = r.width, a = r.height, t = this.ctx;
    if (this.save(), !ie) {
      const {
        filter: n
      } = t;
      n !== "none" && n !== "" && (t.filter = "none");
    }
    t.scale(1 / e, -1 / a);
    let i;
    if (r.bitmap)
      i = this.applyTransferMapsToBitmap(r);
    else if (typeof HTMLElement == "function" && r instanceof HTMLElement || !r.data)
      i = r;
    else {
      const o = this.cachedCanvases.getCanvas("inlineImage", e, a).context;
      X4(o, r), i = this.applyTransferMapsToCanvas(o);
    }
    const A = this._scaleImage(i, Fa(t));
    t.imageSmoothingEnabled = D4(vr(t), r.interpolate), Tf(t, A.img, 0, 0, A.paintWidth, A.paintHeight, 0, -a, e, a), this.compose(), this.restore();
  }
  paintInlineImageXObjectGroup(r, e) {
    if (!this.contentVisible)
      return;
    const a = this.ctx;
    let t;
    if (r.bitmap)
      t = r.bitmap;
    else {
      const i = r.width, A = r.height, o = this.cachedCanvases.getCanvas("inlineImage", i, A).context;
      X4(o, r), t = this.applyTransferMapsToCanvas(o);
    }
    for (const i of e)
      a.save(), a.transform(...i.transform), a.scale(1, -1), Tf(a, t, i.x, i.y, i.w, i.h, 0, -1, 1, 1), a.restore();
    this.compose();
  }
  paintSolidColorImageMask() {
    this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(r) {
  }
  markPointProps(r, e) {
  }
  beginMarkedContent(r) {
    this.markedContentStack.push({
      visible: !0
    });
  }
  beginMarkedContentProps(r, e) {
    r === "OC" ? this.markedContentStack.push({
      visible: this.optionalContentConfig.isVisible(e)
    }) : this.markedContentStack.push({
      visible: !0
    }), this.contentVisible = this.isContentVisible();
  }
  endMarkedContent() {
    this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
  }
  beginCompat() {
  }
  endCompat() {
  }
  consumePath(r) {
    const e = this.current.isEmptyClip();
    this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(r);
    const a = this.ctx;
    this.pendingClip && (e || (this.pendingClip === N4 ? a.clip("evenodd") : a.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), a.beginPath();
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const r = vr(this.ctx);
      if (r[1] === 0 && r[2] === 0)
        this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(r[0]), Math.abs(r[3]));
      else {
        const e = Math.abs(r[0] * r[3] - r[2] * r[1]), a = Math.hypot(r[0], r[2]), t = Math.hypot(r[1], r[3]);
        this._cachedGetSinglePixelWidth = Math.max(a, t) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (this._cachedScaleForStroking[0] === -1) {
      const {
        lineWidth: r
      } = this.current, {
        a: e,
        b: a,
        c: t,
        d: i
      } = this.ctx.getTransform();
      let A, n;
      if (a === 0 && t === 0) {
        const o = Math.abs(e), f = Math.abs(i);
        if (o === f)
          if (r === 0)
            A = n = 1 / o;
          else {
            const l = o * r;
            A = n = l < 1 ? 1 / l : 1;
          }
        else if (r === 0)
          A = 1 / o, n = 1 / f;
        else {
          const l = o * r, c = f * r;
          A = l < 1 ? 1 / l : 1, n = c < 1 ? 1 / c : 1;
        }
      } else {
        const o = Math.abs(e * i - a * t), f = Math.hypot(e, a), l = Math.hypot(t, i);
        if (r === 0)
          A = l / o, n = f / o;
        else {
          const c = r * o;
          A = l > c ? l / c : 1, n = f > c ? f / c : 1;
        }
      }
      this._cachedScaleForStroking[0] = A, this._cachedScaleForStroking[1] = n;
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(r) {
    const {
      ctx: e
    } = this, {
      lineWidth: a
    } = this.current, [t, i] = this.getScaleForStroking();
    if (e.lineWidth = a || 1, t === 1 && i === 1) {
      e.stroke();
      return;
    }
    const A = e.getLineDash();
    if (r && e.save(), e.scale(t, i), A.length > 0) {
      const n = Math.max(t, i);
      e.setLineDash(A.map((o) => o / n)), e.lineDashOffset /= n;
    }
    e.stroke(), r && e.restore();
  }
  isContentVisible() {
    for (let r = this.markedContentStack.length - 1; r >= 0; r--)
      if (!this.markedContentStack[r].visible)
        return !1;
    return !0;
  }
};
let L2 = Gh;
Oo = new WeakSet(), xc = function() {
  for (; this.stateStack.length || this.inSMaskMode; )
    this.restore();
  this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
}, Lo = new WeakSet(), Gc = function() {
  if (this.pageColors) {
    const r = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
    if (r !== "none") {
      const e = this.ctx.filter;
      this.ctx.filter = r, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = e;
    }
  }
};
for (const s in He)
  L2.prototype[s] !== void 0 && (L2.prototype[He[s]] = L2.prototype[s]);
var Yo, Ho;
class ht {
  static get workerPort() {
    return u(this, Yo);
  }
  static set workerPort(r) {
    if (!(typeof Worker < "u" && r instanceof Worker) && r !== null)
      throw new Error("Invalid `workerPort` type.");
    R(this, Yo, r);
  }
  static get workerSrc() {
    return u(this, Ho);
  }
  static set workerSrc(r) {
    if (typeof r != "string")
      throw new Error("Invalid `workerSrc` type.");
    R(this, Ho, r);
  }
}
Yo = new WeakMap(), Ho = new WeakMap(), E(ht, Yo, null), E(ht, Ho, "");
const Mf = {
  UNKNOWN: 0,
  DATA: 1,
  ERROR: 2
}, Sr = {
  UNKNOWN: 0,
  CANCEL: 1,
  CANCEL_COMPLETE: 2,
  CLOSE: 3,
  ENQUEUE: 4,
  ERROR: 5,
  PULL: 6,
  PULL_COMPLETE: 7,
  START_COMPLETE: 8
};
function me(s) {
  switch (s instanceof Error || typeof s == "object" && s !== null || hr('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), s.name) {
    case "AbortException":
      return new B2(s.message);
    case "MissingPDFException":
      return new C2(s.message);
    case "PasswordException":
      return new fc(s.message, s.code);
    case "UnexpectedResponseException":
      return new bu(s.message, s.status);
    case "UnknownErrorException":
      return new lc(s.message, s.details);
    default:
      return new lc(s.message, s.toString());
  }
}
var nl, Cb, ol, Bb, sA, qf;
class Wn {
  constructor(r, e, a) {
    E(this, nl);
    E(this, ol);
    E(this, sA);
    this.sourceName = r, this.targetName = e, this.comObj = a, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (t) => {
      const i = t.data;
      if (i.targetName !== this.sourceName)
        return;
      if (i.stream) {
        S(this, ol, Bb).call(this, i);
        return;
      }
      if (i.callback) {
        const n = i.callbackId, o = this.callbackCapabilities[n];
        if (!o)
          throw new Error(`Cannot resolve callback ${n}`);
        if (delete this.callbackCapabilities[n], i.callback === Mf.DATA)
          o.resolve(i.data);
        else if (i.callback === Mf.ERROR)
          o.reject(me(i.reason));
        else
          throw new Error("Unexpected callback case");
        return;
      }
      const A = this.actionHandler[i.action];
      if (!A)
        throw new Error(`Unknown action from worker: ${i.action}`);
      if (i.callbackId) {
        const n = this.sourceName, o = i.sourceName;
        new Promise(function(f) {
          f(A(i.data));
        }).then(function(f) {
          a.postMessage({
            sourceName: n,
            targetName: o,
            callback: Mf.DATA,
            callbackId: i.callbackId,
            data: f
          });
        }, function(f) {
          a.postMessage({
            sourceName: n,
            targetName: o,
            callback: Mf.ERROR,
            callbackId: i.callbackId,
            reason: me(f)
          });
        });
        return;
      }
      if (i.streamId) {
        S(this, nl, Cb).call(this, i);
        return;
      }
      A(i.data);
    }, a.addEventListener("message", this._onComObjOnMessage);
  }
  on(r, e) {
    const a = this.actionHandler;
    if (a[r])
      throw new Error(`There is already an actionName called "${r}"`);
    a[r] = e;
  }
  send(r, e, a) {
    this.comObj.postMessage({
      sourceName: this.sourceName,
      targetName: this.targetName,
      action: r,
      data: e
    }, a);
  }
  sendWithPromise(r, e, a) {
    const t = this.callbackId++, i = Promise.withResolvers();
    this.callbackCapabilities[t] = i;
    try {
      this.comObj.postMessage({
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: r,
        callbackId: t,
        data: e
      }, a);
    } catch (A) {
      i.reject(A);
    }
    return i.promise;
  }
  sendWithStream(r, e, a, t) {
    const i = this.streamId++, A = this.sourceName, n = this.targetName, o = this.comObj;
    return new ReadableStream({
      start: (f) => {
        const l = Promise.withResolvers();
        return this.streamControllers[i] = {
          controller: f,
          startCall: l,
          pullCall: null,
          cancelCall: null,
          isClosed: !1
        }, o.postMessage({
          sourceName: A,
          targetName: n,
          action: r,
          streamId: i,
          data: e,
          desiredSize: f.desiredSize
        }, t), l.promise;
      },
      pull: (f) => {
        const l = Promise.withResolvers();
        return this.streamControllers[i].pullCall = l, o.postMessage({
          sourceName: A,
          targetName: n,
          stream: Sr.PULL,
          streamId: i,
          desiredSize: f.desiredSize
        }), l.promise;
      },
      cancel: (f) => {
        Mr(f instanceof Error, "cancel must have a valid reason");
        const l = Promise.withResolvers();
        return this.streamControllers[i].cancelCall = l, this.streamControllers[i].isClosed = !0, o.postMessage({
          sourceName: A,
          targetName: n,
          stream: Sr.CANCEL,
          streamId: i,
          reason: me(f)
        }), l.promise;
      }
    }, a);
  }
  destroy() {
    this.comObj.removeEventListener("message", this._onComObjOnMessage);
  }
}
nl = new WeakSet(), Cb = function(r) {
  const e = r.streamId, a = this.sourceName, t = r.sourceName, i = this.comObj, A = this, n = this.actionHandler[r.action], o = {
    enqueue(f, l = 1, c) {
      if (this.isCancelled)
        return;
      const h = this.desiredSize;
      this.desiredSize -= l, h > 0 && this.desiredSize <= 0 && (this.sinkCapability = Promise.withResolvers(), this.ready = this.sinkCapability.promise), i.postMessage({
        sourceName: a,
        targetName: t,
        stream: Sr.ENQUEUE,
        streamId: e,
        chunk: f
      }, c);
    },
    close() {
      this.isCancelled || (this.isCancelled = !0, i.postMessage({
        sourceName: a,
        targetName: t,
        stream: Sr.CLOSE,
        streamId: e
      }), delete A.streamSinks[e]);
    },
    error(f) {
      Mr(f instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, i.postMessage({
        sourceName: a,
        targetName: t,
        stream: Sr.ERROR,
        streamId: e,
        reason: me(f)
      }));
    },
    sinkCapability: Promise.withResolvers(),
    onPull: null,
    onCancel: null,
    isCancelled: !1,
    desiredSize: r.desiredSize,
    ready: null
  };
  o.sinkCapability.resolve(), o.ready = o.sinkCapability.promise, this.streamSinks[e] = o, new Promise(function(f) {
    f(n(r.data, o));
  }).then(function() {
    i.postMessage({
      sourceName: a,
      targetName: t,
      stream: Sr.START_COMPLETE,
      streamId: e,
      success: !0
    });
  }, function(f) {
    i.postMessage({
      sourceName: a,
      targetName: t,
      stream: Sr.START_COMPLETE,
      streamId: e,
      reason: me(f)
    });
  });
}, ol = new WeakSet(), Bb = function(r) {
  const e = r.streamId, a = this.sourceName, t = r.sourceName, i = this.comObj, A = this.streamControllers[e], n = this.streamSinks[e];
  switch (r.stream) {
    case Sr.START_COMPLETE:
      r.success ? A.startCall.resolve() : A.startCall.reject(me(r.reason));
      break;
    case Sr.PULL_COMPLETE:
      r.success ? A.pullCall.resolve() : A.pullCall.reject(me(r.reason));
      break;
    case Sr.PULL:
      if (!n) {
        i.postMessage({
          sourceName: a,
          targetName: t,
          stream: Sr.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
        break;
      }
      n.desiredSize <= 0 && r.desiredSize > 0 && n.sinkCapability.resolve(), n.desiredSize = r.desiredSize, new Promise(function(o) {
        var f;
        o((f = n.onPull) == null ? void 0 : f.call(n));
      }).then(function() {
        i.postMessage({
          sourceName: a,
          targetName: t,
          stream: Sr.PULL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(o) {
        i.postMessage({
          sourceName: a,
          targetName: t,
          stream: Sr.PULL_COMPLETE,
          streamId: e,
          reason: me(o)
        });
      });
      break;
    case Sr.ENQUEUE:
      if (Mr(A, "enqueue should have stream controller"), A.isClosed)
        break;
      A.controller.enqueue(r.chunk);
      break;
    case Sr.CLOSE:
      if (Mr(A, "close should have stream controller"), A.isClosed)
        break;
      A.isClosed = !0, A.controller.close(), S(this, sA, qf).call(this, A, e);
      break;
    case Sr.ERROR:
      Mr(A, "error should have stream controller"), A.controller.error(me(r.reason)), S(this, sA, qf).call(this, A, e);
      break;
    case Sr.CANCEL_COMPLETE:
      r.success ? A.cancelCall.resolve() : A.cancelCall.reject(me(r.reason)), S(this, sA, qf).call(this, A, e);
      break;
    case Sr.CANCEL:
      if (!n)
        break;
      new Promise(function(o) {
        var f;
        o((f = n.onCancel) == null ? void 0 : f.call(n, me(r.reason)));
      }).then(function() {
        i.postMessage({
          sourceName: a,
          targetName: t,
          stream: Sr.CANCEL_COMPLETE,
          streamId: e,
          success: !0
        });
      }, function(o) {
        i.postMessage({
          sourceName: a,
          targetName: t,
          stream: Sr.CANCEL_COMPLETE,
          streamId: e,
          reason: me(o)
        });
      }), n.sinkCapability.reject(me(r.reason)), n.isCancelled = !0, delete this.streamSinks[e];
      break;
    default:
      throw new Error("Unexpected stream case");
  }
}, sA = new WeakSet(), qf = async function(r, e) {
  var a, t, i;
  await Promise.allSettled([(a = r.startCall) == null ? void 0 : a.promise, (t = r.pullCall) == null ? void 0 : t.promise, (i = r.cancelCall) == null ? void 0 : i.promise]), delete this.streamControllers[e];
};
var Wi, jo;
class Ng {
  constructor({
    parsedData: r,
    rawData: e
  }) {
    E(this, Wi, void 0);
    E(this, jo, void 0);
    R(this, Wi, r), R(this, jo, e);
  }
  getRaw() {
    return u(this, jo);
  }
  get(r) {
    return u(this, Wi).get(r) ?? null;
  }
  getAll() {
    return mh(u(this, Wi));
  }
  has(r) {
    return u(this, Wi).has(r);
  }
}
Wi = new WeakMap(), jo = new WeakMap();
const wt = Symbol("INTERNAL");
var Uo, zo, Qo, fA;
class Vg {
  constructor(r, {
    name: e,
    intent: a,
    usage: t
  }) {
    E(this, Uo, !1);
    E(this, zo, !1);
    E(this, Qo, !1);
    E(this, fA, !0);
    R(this, Uo, !!(r & De.DISPLAY)), R(this, zo, !!(r & De.PRINT)), this.name = e, this.intent = a, this.usage = t;
  }
  get visible() {
    if (u(this, Qo))
      return u(this, fA);
    if (!u(this, fA))
      return !1;
    const {
      print: r,
      view: e
    } = this.usage;
    return u(this, Uo) ? (e == null ? void 0 : e.viewState) !== "OFF" : u(this, zo) ? (r == null ? void 0 : r.printState) !== "OFF" : !0;
  }
  _setVisible(r, e, a = !1) {
    r !== wt && hr("Internal method `_setVisible` called."), R(this, Qo, a), R(this, fA, e);
  }
}
Uo = new WeakMap(), zo = new WeakMap(), Qo = new WeakMap(), fA = new WeakMap();
var xt, ur, lA, uA, Jo, Tc;
class Pg {
  constructor(r, e = De.DISPLAY) {
    E(this, Jo);
    E(this, xt, null);
    E(this, ur, /* @__PURE__ */ new Map());
    E(this, lA, null);
    E(this, uA, null);
    if (this.renderingIntent = e, this.name = null, this.creator = null, r !== null) {
      this.name = r.name, this.creator = r.creator, R(this, uA, r.order);
      for (const a of r.groups)
        u(this, ur).set(a.id, new Vg(e, a));
      if (r.baseState === "OFF")
        for (const a of u(this, ur).values())
          a._setVisible(wt, !1);
      for (const a of r.on)
        u(this, ur).get(a)._setVisible(wt, !0);
      for (const a of r.off)
        u(this, ur).get(a)._setVisible(wt, !1);
      R(this, lA, this.getHash());
    }
  }
  isVisible(r) {
    if (u(this, ur).size === 0)
      return !0;
    if (!r)
      return du("Optional content group not defined."), !0;
    if (r.type === "OCG")
      return u(this, ur).has(r.id) ? u(this, ur).get(r.id).visible : (Q0(`Optional content group not found: ${r.id}`), !0);
    if (r.type === "OCMD") {
      if (r.expression)
        return S(this, Jo, Tc).call(this, r.expression);
      if (!r.policy || r.policy === "AnyOn") {
        for (const e of r.ids) {
          if (!u(this, ur).has(e))
            return Q0(`Optional content group not found: ${e}`), !0;
          if (u(this, ur).get(e).visible)
            return !0;
        }
        return !1;
      } else if (r.policy === "AllOn") {
        for (const e of r.ids) {
          if (!u(this, ur).has(e))
            return Q0(`Optional content group not found: ${e}`), !0;
          if (!u(this, ur).get(e).visible)
            return !1;
        }
        return !0;
      } else if (r.policy === "AnyOff") {
        for (const e of r.ids) {
          if (!u(this, ur).has(e))
            return Q0(`Optional content group not found: ${e}`), !0;
          if (!u(this, ur).get(e).visible)
            return !0;
        }
        return !1;
      } else if (r.policy === "AllOff") {
        for (const e of r.ids) {
          if (!u(this, ur).has(e))
            return Q0(`Optional content group not found: ${e}`), !0;
          if (u(this, ur).get(e).visible)
            return !1;
        }
        return !0;
      }
      return Q0(`Unknown optional content policy ${r.policy}.`), !0;
    }
    return Q0(`Unknown group type ${r.type}.`), !0;
  }
  setVisibility(r, e = !0) {
    const a = u(this, ur).get(r);
    if (!a) {
      Q0(`Optional content group not found: ${r}`);
      return;
    }
    a._setVisible(wt, !!e, !0), R(this, xt, null);
  }
  setOCGState({
    state: r,
    preserveRB: e
  }) {
    let a;
    for (const t of r) {
      switch (t) {
        case "ON":
        case "OFF":
        case "Toggle":
          a = t;
          continue;
      }
      const i = u(this, ur).get(t);
      if (i)
        switch (a) {
          case "ON":
            i._setVisible(wt, !0);
            break;
          case "OFF":
            i._setVisible(wt, !1);
            break;
          case "Toggle":
            i._setVisible(wt, !i.visible);
            break;
        }
    }
    R(this, xt, null);
  }
  get hasInitialVisibility() {
    return u(this, lA) === null || this.getHash() === u(this, lA);
  }
  getOrder() {
    return u(this, ur).size ? u(this, uA) ? u(this, uA).slice() : [...u(this, ur).keys()] : null;
  }
  getGroups() {
    return u(this, ur).size > 0 ? mh(u(this, ur)) : null;
  }
  getGroup(r) {
    return u(this, ur).get(r) || null;
  }
  getHash() {
    if (u(this, xt) !== null)
      return u(this, xt);
    const r = new wb();
    for (const [e, a] of u(this, ur))
      r.update(`${e}:${a.visible}`);
    return R(this, xt, r.hexdigest());
  }
}
xt = new WeakMap(), ur = new WeakMap(), lA = new WeakMap(), uA = new WeakMap(), Jo = new WeakSet(), Tc = function(r) {
  const e = r.length;
  if (e < 2)
    return !0;
  const a = r[0];
  for (let t = 1; t < e; t++) {
    const i = r[t];
    let A;
    if (Array.isArray(i))
      A = S(this, Jo, Tc).call(this, i);
    else if (u(this, ur).has(i))
      A = u(this, ur).get(i).visible;
    else
      return Q0(`Optional content group not found: ${i}`), !0;
    switch (a) {
      case "And":
        if (!A)
          return !1;
        break;
      case "Or":
        if (A)
          return !0;
        break;
      case "Not":
        return !A;
      default:
        return !0;
    }
  }
  return a === "And";
};
class Og {
  constructor(r, {
    disableRange: e = !1,
    disableStream: a = !1
  }) {
    Mr(r, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
    const {
      length: t,
      initialData: i,
      progressiveDone: A,
      contentDispositionFilename: n
    } = r;
    if (this._queuedChunks = [], this._progressiveDone = A, this._contentDispositionFilename = n, (i == null ? void 0 : i.length) > 0) {
      const o = i instanceof Uint8Array && i.byteLength === i.buffer.byteLength ? i.buffer : new Uint8Array(i).buffer;
      this._queuedChunks.push(o);
    }
    this._pdfDataRangeTransport = r, this._isStreamingSupported = !a, this._isRangeSupported = !e, this._contentLength = t, this._fullRequestReader = null, this._rangeReaders = [], r.addRangeListener((o, f) => {
      this._onReceiveData({
        begin: o,
        chunk: f
      });
    }), r.addProgressListener((o, f) => {
      this._onProgress({
        loaded: o,
        total: f
      });
    }), r.addProgressiveReadListener((o) => {
      this._onReceiveData({
        chunk: o
      });
    }), r.addProgressiveDoneListener(() => {
      this._onProgressiveDone();
    }), r.transportReady();
  }
  _onReceiveData({
    begin: r,
    chunk: e
  }) {
    const a = e instanceof Uint8Array && e.byteLength === e.buffer.byteLength ? e.buffer : new Uint8Array(e).buffer;
    if (r === void 0)
      this._fullRequestReader ? this._fullRequestReader._enqueue(a) : this._queuedChunks.push(a);
    else {
      const t = this._rangeReaders.some(function(i) {
        return i._begin !== r ? !1 : (i._enqueue(a), !0);
      });
      Mr(t, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
    }
  }
  get _progressiveDataLength() {
    var r;
    return ((r = this._fullRequestReader) == null ? void 0 : r._loaded) ?? 0;
  }
  _onProgress(r) {
    var e, a, t, i;
    r.total === void 0 ? (a = (e = this._rangeReaders[0]) == null ? void 0 : e.onProgress) == null || a.call(e, {
      loaded: r.loaded
    }) : (i = (t = this._fullRequestReader) == null ? void 0 : t.onProgress) == null || i.call(t, {
      loaded: r.loaded,
      total: r.total
    });
  }
  _onProgressiveDone() {
    var r;
    (r = this._fullRequestReader) == null || r.progressiveDone(), this._progressiveDone = !0;
  }
  _removeRangeReader(r) {
    const e = this._rangeReaders.indexOf(r);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }
  getFullReader() {
    Mr(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
    const r = this._queuedChunks;
    return this._queuedChunks = null, new Lg(this, r, this._progressiveDone, this._contentDispositionFilename);
  }
  getRangeReader(r, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const a = new Yg(this, r, e);
    return this._pdfDataRangeTransport.requestDataRange(r, e), this._rangeReaders.push(a), a;
  }
  cancelAllRequests(r) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(r);
    for (const a of this._rangeReaders.slice(0))
      a.cancel(r);
    this._pdfDataRangeTransport.abort();
  }
}
class Lg {
  constructor(r, e, a = !1, t = null) {
    this._stream = r, this._done = a || !1, this._filename = Eh(t) ? t : null, this._queuedChunks = e || [], this._loaded = 0;
    for (const i of this._queuedChunks)
      this._loaded += i.byteLength;
    this._requests = [], this._headersReady = Promise.resolve(), r._fullRequestReader = this, this.onProgress = null;
  }
  _enqueue(r) {
    this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
      value: r,
      done: !1
    }) : this._queuedChunks.push(r), this._loaded += r.byteLength);
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0)
      return {
        value: this._queuedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const r = Promise.withResolvers();
    return this._requests.push(r), r.promise;
  }
  cancel(r) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class Yg {
  constructor(r, e, a) {
    this._stream = r, this._begin = e, this._end = a, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
  }
  _enqueue(r) {
    if (!this._done) {
      if (this._requests.length === 0)
        this._queuedChunk = r;
      else {
        this._requests.shift().resolve({
          value: r,
          done: !1
        });
        for (const a of this._requests)
          a.resolve({
            value: void 0,
            done: !0
          });
        this._requests.length = 0;
      }
      this._done = !0, this._stream._removeRangeReader(this);
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const r = Promise.withResolvers();
    return this._requests.push(r), r.promise;
  }
  cancel(r) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._stream._removeRangeReader(this);
  }
}
function Hg(s) {
  let r = !0, e = a("filename\\*", "i").exec(s);
  if (e) {
    e = e[1];
    let l = n(e);
    return l = unescape(l), l = o(l), l = f(l), i(l);
  }
  if (e = A(s), e) {
    const l = f(e);
    return i(l);
  }
  if (e = a("filename", "i").exec(s), e) {
    e = e[1];
    let l = n(e);
    return l = f(l), i(l);
  }
  function a(l, c) {
    return new RegExp("(?:^|;)\\s*" + l + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', c);
  }
  function t(l, c) {
    if (l) {
      if (!/^[\x00-\xFF]+$/.test(c))
        return c;
      try {
        const h = new TextDecoder(l, {
          fatal: !0
        }), d = gu(c);
        c = h.decode(d), r = !1;
      } catch {
      }
    }
    return c;
  }
  function i(l) {
    return r && /[\x80-\xff]/.test(l) && (l = t("utf-8", l), r && (l = t("iso-8859-1", l))), l;
  }
  function A(l) {
    const c = [];
    let h;
    const d = a("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
    for (; (h = d.exec(l)) !== null; ) {
      let [, g, v, m] = h;
      if (g = parseInt(g, 10), g in c) {
        if (g === 0)
          break;
        continue;
      }
      c[g] = [v, m];
    }
    const b = [];
    for (let g = 0; g < c.length && g in c; ++g) {
      let [v, m] = c[g];
      m = n(m), v && (m = unescape(m), g === 0 && (m = o(m))), b.push(m);
    }
    return b.join("");
  }
  function n(l) {
    if (l.startsWith('"')) {
      const c = l.slice(1).split('\\"');
      for (let h = 0; h < c.length; ++h) {
        const d = c[h].indexOf('"');
        d !== -1 && (c[h] = c[h].slice(0, d), c.length = h + 1), c[h] = c[h].replaceAll(/\\(.)/g, "$1");
      }
      l = c.join('"');
    }
    return l;
  }
  function o(l) {
    const c = l.indexOf("'");
    if (c === -1)
      return l;
    const h = l.slice(0, c), b = l.slice(c + 1).replace(/^[^']*'/, "");
    return t(h, b);
  }
  function f(l) {
    return !l.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(l) ? l : l.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(c, h, d, b) {
      if (d === "q" || d === "Q")
        return b = b.replaceAll("_", " "), b = b.replaceAll(/=([0-9a-fA-F]{2})/g, function(g, v) {
          return String.fromCharCode(parseInt(v, 16));
        }), t(h, b);
      try {
        b = atob(b);
      } catch {
      }
      return t(h, b);
    });
  }
  return "";
}
function Zh({
  getResponseHeader: s,
  isHttp: r,
  rangeChunkSize: e,
  disableRange: a
}) {
  const t = {
    allowRangeRequests: !1,
    suggestedLength: void 0
  }, i = parseInt(s("Content-Length"), 10);
  return !Number.isInteger(i) || (t.suggestedLength = i, i <= 2 * e) || a || !r || s("Accept-Ranges") !== "bytes" || (s("Content-Encoding") || "identity") !== "identity" || (t.allowRangeRequests = !0), t;
}
function Rh(s) {
  const r = s("Content-Disposition");
  if (r) {
    let e = Hg(r);
    if (e.includes("%"))
      try {
        e = decodeURIComponent(e);
      } catch {
      }
    if (Eh(e))
      return e;
  }
  return null;
}
function wu(s, r) {
  return s === 404 || s === 0 && r.startsWith("file:") ? new C2('Missing PDF "' + r + '".') : new bu(`Unexpected server response (${s}) while retrieving PDF "${r}".`, s);
}
function Zb(s) {
  return s === 200 || s === 206;
}
function Rb(s, r, e) {
  return {
    method: "GET",
    headers: s,
    signal: e.signal,
    mode: "cors",
    credentials: r ? "include" : "same-origin",
    redirect: "follow"
  };
}
function Ib(s) {
  const r = new Headers();
  for (const e in s) {
    const a = s[e];
    a !== void 0 && r.append(e, a);
  }
  return r;
}
function Sb(s) {
  return s instanceof Uint8Array ? s.buffer : s instanceof ArrayBuffer ? s : (Q0(`getArrayBuffer - unexpected data format: ${s}`), new Uint8Array(s).buffer);
}
class V4 {
  constructor(r) {
    this.source = r, this.isHttp = /^https?:/i.test(r.url), this.httpHeaders = this.isHttp && r.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var r;
    return ((r = this._fullRequestReader) == null ? void 0 : r._loaded) ?? 0;
  }
  getFullReader() {
    return Mr(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new jg(this), this._fullRequestReader;
  }
  getRangeReader(r, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const a = new Ug(this, r, e);
    return this._rangeRequestReaders.push(a), a;
  }
  cancelAllRequests(r) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(r);
    for (const a of this._rangeRequestReaders.slice(0))
      a.cancel(r);
  }
}
class jg {
  constructor(r) {
    this._stream = r, this._reader = null, this._loaded = 0, this._filename = null;
    const e = r.source;
    this._withCredentials = e.withCredentials || !1, this._contentLength = e.length, this._headersCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._headers = Ib(this._stream.httpHeaders);
    const a = e.url;
    fetch(a, Rb(this._headers, this._withCredentials, this._abortController)).then((t) => {
      if (!Zb(t.status))
        throw wu(t.status, a);
      this._reader = t.body.getReader(), this._headersCapability.resolve();
      const i = (o) => t.headers.get(o), {
        allowRangeRequests: A,
        suggestedLength: n
      } = Zh({
        getResponseHeader: i,
        isHttp: this._stream.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = A, this._contentLength = n || this._contentLength, this._filename = Rh(i), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new B2("Streaming is disabled."));
    }).catch(this._headersCapability.reject), this.onProgress = null;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var a;
    await this._headersCapability.promise;
    const {
      value: r,
      done: e
    } = await this._reader.read();
    return e ? {
      value: r,
      done: e
    } : (this._loaded += r.byteLength, (a = this.onProgress) == null || a.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: Sb(r),
      done: !1
    });
  }
  cancel(r) {
    var e;
    (e = this._reader) == null || e.cancel(r), this._abortController.abort();
  }
}
class Ug {
  constructor(r, e, a) {
    this._stream = r, this._reader = null, this._loaded = 0;
    const t = r.source;
    this._withCredentials = t.withCredentials || !1, this._readCapability = Promise.withResolvers(), this._isStreamingSupported = !t.disableStream, this._abortController = new AbortController(), this._headers = Ib(this._stream.httpHeaders), this._headers.append("Range", `bytes=${e}-${a - 1}`);
    const i = t.url;
    fetch(i, Rb(this._headers, this._withCredentials, this._abortController)).then((A) => {
      if (!Zb(A.status))
        throw wu(A.status, i);
      this._readCapability.resolve(), this._reader = A.body.getReader();
    }).catch(this._readCapability.reject), this.onProgress = null;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var a;
    await this._readCapability.promise;
    const {
      value: r,
      done: e
    } = await this._reader.read();
    return e ? {
      value: r,
      done: e
    } : (this._loaded += r.byteLength, (a = this.onProgress) == null || a.call(this, {
      loaded: this._loaded
    }), {
      value: Sb(r),
      done: !1
    });
  }
  cancel(r) {
    var e;
    (e = this._reader) == null || e.cancel(r), this._abortController.abort();
  }
}
const zu = 200, Qu = 206;
function zg(s) {
  const r = s.response;
  return typeof r != "string" ? r : gu(r).buffer;
}
class Qg {
  constructor(r, e = {}) {
    this.url = r, this.isHttp = /^https?:/i.test(r), this.httpHeaders = this.isHttp && e.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = e.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
  }
  requestRange(r, e, a) {
    const t = {
      begin: r,
      end: e
    };
    for (const i in a)
      t[i] = a[i];
    return this.request(t);
  }
  requestFull(r) {
    return this.request(r);
  }
  request(r) {
    const e = new XMLHttpRequest(), a = this.currXhrId++, t = this.pendingRequests[a] = {
      xhr: e
    };
    e.open("GET", this.url), e.withCredentials = this.withCredentials;
    for (const i in this.httpHeaders) {
      const A = this.httpHeaders[i];
      A !== void 0 && e.setRequestHeader(i, A);
    }
    return this.isHttp && "begin" in r && "end" in r ? (e.setRequestHeader("Range", `bytes=${r.begin}-${r.end - 1}`), t.expectedStatus = Qu) : t.expectedStatus = zu, e.responseType = "arraybuffer", r.onError && (e.onerror = function(i) {
      r.onError(e.status);
    }), e.onreadystatechange = this.onStateChange.bind(this, a), e.onprogress = this.onProgress.bind(this, a), t.onHeadersReceived = r.onHeadersReceived, t.onDone = r.onDone, t.onError = r.onError, t.onProgress = r.onProgress, e.send(null), a;
  }
  onProgress(r, e) {
    var t;
    const a = this.pendingRequests[r];
    a && ((t = a.onProgress) == null || t.call(a, e));
  }
  onStateChange(r, e) {
    var o, f, l;
    const a = this.pendingRequests[r];
    if (!a)
      return;
    const t = a.xhr;
    if (t.readyState >= 2 && a.onHeadersReceived && (a.onHeadersReceived(), delete a.onHeadersReceived), t.readyState !== 4 || !(r in this.pendingRequests))
      return;
    if (delete this.pendingRequests[r], t.status === 0 && this.isHttp) {
      (o = a.onError) == null || o.call(a, t.status);
      return;
    }
    const i = t.status || zu;
    if (!(i === zu && a.expectedStatus === Qu) && i !== a.expectedStatus) {
      (f = a.onError) == null || f.call(a, t.status);
      return;
    }
    const n = zg(t);
    if (i === Qu) {
      const c = t.getResponseHeader("Content-Range"), h = /bytes (\d+)-(\d+)\/(\d+)/.exec(c);
      a.onDone({
        begin: parseInt(h[1], 10),
        chunk: n
      });
    } else
      n ? a.onDone({
        begin: 0,
        chunk: n
      }) : (l = a.onError) == null || l.call(a, t.status);
  }
  getRequestXhr(r) {
    return this.pendingRequests[r].xhr;
  }
  isPendingRequest(r) {
    return r in this.pendingRequests;
  }
  abortRequest(r) {
    const e = this.pendingRequests[r].xhr;
    delete this.pendingRequests[r], e.abort();
  }
}
class Jg {
  constructor(r) {
    this._source = r, this._manager = new Qg(r.url, {
      httpHeaders: r.httpHeaders,
      withCredentials: r.withCredentials
    }), this._rangeChunkSize = r.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  _onRangeRequestReaderClosed(r) {
    const e = this._rangeRequestReaders.indexOf(r);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return Mr(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new Kg(this._manager, this._source), this._fullRequestReader;
  }
  getRangeReader(r, e) {
    const a = new qg(this._manager, r, e);
    return a.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(a), a;
  }
  cancelAllRequests(r) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(r);
    for (const a of this._rangeRequestReaders.slice(0))
      a.cancel(r);
  }
}
class Kg {
  constructor(r, e) {
    this._manager = r;
    const a = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = e.url, this._fullRequestId = r.requestFull(a), this._headersReceivedCapability = Promise.withResolvers(), this._disableRange = e.disableRange || !1, this._contentLength = e.length, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
  }
  _onHeadersReceived() {
    const r = this._fullRequestId, e = this._manager.getRequestXhr(r), a = (A) => e.getResponseHeader(A), {
      allowRangeRequests: t,
      suggestedLength: i
    } = Zh({
      getResponseHeader: a,
      isHttp: this._manager.isHttp,
      rangeChunkSize: this._rangeChunkSize,
      disableRange: this._disableRange
    });
    t && (this._isRangeSupported = !0), this._contentLength = i || this._contentLength, this._filename = Rh(a), this._isRangeSupported && this._manager.abortRequest(r), this._headersReceivedCapability.resolve();
  }
  _onDone(r) {
    if (r && (this._requests.length > 0 ? this._requests.shift().resolve({
      value: r.chunk,
      done: !1
    }) : this._cachedChunks.push(r.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
      for (const e of this._requests)
        e.resolve({
          value: void 0,
          done: !0
        });
      this._requests.length = 0;
    }
  }
  _onError(r) {
    this._storedError = wu(r, this._url), this._headersReceivedCapability.reject(this._storedError);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._cachedChunks.length = 0;
  }
  _onProgress(r) {
    var e;
    (e = this.onProgress) == null || e.call(this, {
      loaded: r.loaded,
      total: r.lengthComputable ? r.total : this._contentLength
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersReceivedCapability.promise;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._cachedChunks.length > 0)
      return {
        value: this._cachedChunks.shift(),
        done: !1
      };
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const r = Promise.withResolvers();
    return this._requests.push(r), r.promise;
  }
  cancel(r) {
    this._done = !0, this._headersReceivedCapability.reject(r);
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
  }
}
class qg {
  constructor(r, e, a) {
    this._manager = r;
    const t = {
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this)
    };
    this._url = r.url, this._requestId = r.requestRange(e, a, t), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
  }
  _close() {
    var r;
    (r = this.onClosed) == null || r.call(this, this);
  }
  _onDone(r) {
    const e = r.chunk;
    this._requests.length > 0 ? this._requests.shift().resolve({
      value: e,
      done: !1
    }) : this._queuedChunk = e, this._done = !0;
    for (const a of this._requests)
      a.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._close();
  }
  _onError(r) {
    this._storedError = wu(r, this._url);
    for (const e of this._requests)
      e.reject(this._storedError);
    this._requests.length = 0, this._queuedChunk = null;
  }
  _onProgress(r) {
    var e;
    this.isStreamingSupported || (e = this.onProgress) == null || e.call(this, {
      loaded: r.loaded
    });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError)
      throw this._storedError;
    if (this._queuedChunk !== null) {
      const e = this._queuedChunk;
      return this._queuedChunk = null, {
        value: e,
        done: !1
      };
    }
    if (this._done)
      return {
        value: void 0,
        done: !0
      };
    const r = Promise.withResolvers();
    return this._requests.push(r), r.promise;
  }
  cancel(r) {
    this._done = !0;
    for (const e of this._requests)
      e.resolve({
        value: void 0,
        done: !0
      });
    this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
  }
}
const Fb = /^file:\/\/\/[a-zA-Z]:\//;
function $g(s) {
  const r = Za.get("url"), e = r.parse(s);
  return e.protocol === "file:" || e.host ? e : /^[a-z]:[/\\]/i.test(s) ? r.parse(`file:///${s}`) : (e.host || (e.protocol = "file:"), e);
}
class rv {
  constructor(r) {
    this.source = r, this.url = $g(r.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && r.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
  }
  get _progressiveDataLength() {
    var r;
    return ((r = this._fullRequestReader) == null ? void 0 : r._loaded) ?? 0;
  }
  getFullReader() {
    return Mr(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new tv(this) : new ev(this), this._fullRequestReader;
  }
  getRangeReader(r, e) {
    if (e <= this._progressiveDataLength)
      return null;
    const a = this.isFsUrl ? new iv(this, r, e) : new av(this, r, e);
    return this._rangeRequestReaders.push(a), a;
  }
  cancelAllRequests(r) {
    var e;
    (e = this._fullRequestReader) == null || e.cancel(r);
    for (const a of this._rangeRequestReaders.slice(0))
      a.cancel(r);
  }
}
class Wb {
  constructor(r) {
    this._url = r.url, this._done = !1, this._storedError = null, this.onProgress = null;
    const e = r.source;
    this._contentLength = e.length, this._loaded = 0, this._filename = null, this._disableRange = e.disableRange || !1, this._rangeChunkSize = e.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !e.disableStream, this._isRangeSupported = !e.disableRange, this._readableStream = null, this._readCapability = Promise.withResolvers(), this._headersCapability = Promise.withResolvers();
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var a;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const r = this._readableStream.read();
    return r === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += r.length, (a = this.onProgress) == null || a.call(this, {
      loaded: this._loaded,
      total: this._contentLength
    }), {
      value: new Uint8Array(r).buffer,
      done: !1
    });
  }
  cancel(r) {
    if (!this._readableStream) {
      this._error(r);
      return;
    }
    this._readableStream.destroy(r);
  }
  _error(r) {
    this._storedError = r, this._readCapability.resolve();
  }
  _setReadableStream(r) {
    this._readableStream = r, r.on("readable", () => {
      this._readCapability.resolve();
    }), r.on("end", () => {
      r.destroy(), this._done = !0, this._readCapability.resolve();
    }), r.on("error", (e) => {
      this._error(e);
    }), !this._isStreamingSupported && this._isRangeSupported && this._error(new B2("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
class xb {
  constructor(r) {
    this._url = r.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = Promise.withResolvers();
    const e = r.source;
    this._isStreamingSupported = !e.disableStream;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    var a;
    if (await this._readCapability.promise, this._done)
      return {
        value: void 0,
        done: !0
      };
    if (this._storedError)
      throw this._storedError;
    const r = this._readableStream.read();
    return r === null ? (this._readCapability = Promise.withResolvers(), this.read()) : (this._loaded += r.length, (a = this.onProgress) == null || a.call(this, {
      loaded: this._loaded
    }), {
      value: new Uint8Array(r).buffer,
      done: !1
    });
  }
  cancel(r) {
    if (!this._readableStream) {
      this._error(r);
      return;
    }
    this._readableStream.destroy(r);
  }
  _error(r) {
    this._storedError = r, this._readCapability.resolve();
  }
  _setReadableStream(r) {
    this._readableStream = r, r.on("readable", () => {
      this._readCapability.resolve();
    }), r.on("end", () => {
      r.destroy(), this._done = !0, this._readCapability.resolve();
    }), r.on("error", (e) => {
      this._error(e);
    }), this._storedError && this._readableStream.destroy(this._storedError);
  }
}
function C1(s, r) {
  return {
    protocol: s.protocol,
    auth: s.auth,
    host: s.hostname,
    port: s.port,
    path: s.path,
    method: "GET",
    headers: r
  };
}
class ev extends Wb {
  constructor(r) {
    super(r);
    const e = (a) => {
      if (a.statusCode === 404) {
        const n = new C2(`Missing PDF "${this._url}".`);
        this._storedError = n, this._headersCapability.reject(n);
        return;
      }
      this._headersCapability.resolve(), this._setReadableStream(a);
      const t = (n) => this._readableStream.headers[n.toLowerCase()], {
        allowRangeRequests: i,
        suggestedLength: A
      } = Zh({
        getResponseHeader: t,
        isHttp: r.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange
      });
      this._isRangeSupported = i, this._contentLength = A || this._contentLength, this._filename = Rh(t);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const a = Za.get("http");
      this._request = a.request(C1(this._url, r.httpHeaders), e);
    } else {
      const a = Za.get("https");
      this._request = a.request(C1(this._url, r.httpHeaders), e);
    }
    this._request.on("error", (a) => {
      this._storedError = a, this._headersCapability.reject(a);
    }), this._request.end();
  }
}
class av extends xb {
  constructor(r, e, a) {
    super(r), this._httpHeaders = {};
    for (const i in r.httpHeaders) {
      const A = r.httpHeaders[i];
      A !== void 0 && (this._httpHeaders[i] = A);
    }
    this._httpHeaders.Range = `bytes=${e}-${a - 1}`;
    const t = (i) => {
      if (i.statusCode === 404) {
        const A = new C2(`Missing PDF "${this._url}".`);
        this._storedError = A;
        return;
      }
      this._setReadableStream(i);
    };
    if (this._request = null, this._url.protocol === "http:") {
      const i = Za.get("http");
      this._request = i.request(C1(this._url, this._httpHeaders), t);
    } else {
      const i = Za.get("https");
      this._request = i.request(C1(this._url, this._httpHeaders), t);
    }
    this._request.on("error", (i) => {
      this._storedError = i;
    }), this._request.end();
  }
}
class tv extends Wb {
  constructor(r) {
    super(r);
    let e = decodeURIComponent(this._url.path);
    Fb.test(this._url.href) && (e = e.replace(/^\//, ""));
    const a = Za.get("fs");
    a.promises.lstat(e).then((t) => {
      this._contentLength = t.size, this._setReadableStream(a.createReadStream(e)), this._headersCapability.resolve();
    }, (t) => {
      t.code === "ENOENT" && (t = new C2(`Missing PDF "${e}".`)), this._storedError = t, this._headersCapability.reject(t);
    });
  }
}
class iv extends xb {
  constructor(r, e, a) {
    super(r);
    let t = decodeURIComponent(this._url.path);
    Fb.test(this._url.href) && (t = t.replace(/^\//, ""));
    const i = Za.get("fs");
    this._setReadableStream(i.createReadStream(t, {
      start: e,
      end: a - 1
    }));
  }
}
const Av = 1e5, ue = 30, nv = 0.8;
var Y4, Gt, he, Ko, qo, xi, ja, $o, rs, Gi, cA, hA, Tt, dA, es, bA, Ti, as, ts, Xi, Mi, Xt, gA, sl, Gb, fl, Tb, is, Xc, vA, $f, ll, Xb, ul, Mb;
const Le = class {
  constructor({
    textContentSource: r,
    container: e,
    viewport: a
  }) {
    E(this, sl);
    E(this, fl);
    E(this, is);
    E(this, Gt, Promise.withResolvers());
    E(this, he, null);
    E(this, Ko, !1);
    E(this, qo, !!((Y4 = globalThis.FontInspector) != null && Y4.enabled));
    E(this, xi, null);
    E(this, ja, null);
    E(this, $o, 0);
    E(this, rs, 0);
    E(this, Gi, null);
    E(this, cA, null);
    E(this, hA, 0);
    E(this, Tt, 0);
    E(this, dA, /* @__PURE__ */ Object.create(null));
    E(this, es, []);
    E(this, bA, null);
    E(this, Ti, []);
    E(this, as, /* @__PURE__ */ new WeakMap());
    E(this, ts, null);
    var o;
    if (r instanceof ReadableStream)
      R(this, bA, r);
    else if (typeof r == "object")
      R(this, bA, new ReadableStream({
        start(f) {
          f.enqueue(r), f.close();
        }
      }));
    else
      throw new Error('No "textContentSource" parameter specified.');
    R(this, he, R(this, cA, e)), R(this, Tt, a.scale * (globalThis.devicePixelRatio || 1)), R(this, hA, a.rotation), R(this, ja, {
      prevFontSize: null,
      prevFontFamily: null,
      div: null,
      properties: null,
      ctx: null
    });
    const {
      pageWidth: t,
      pageHeight: i,
      pageX: A,
      pageY: n
    } = a.rawDims;
    R(this, ts, [1, 0, 0, -1, -A, n + i]), R(this, rs, t), R(this, $o, i), S(o = Le, ll, Xb).call(o), v2(e, a), u(this, Gt).promise.catch(() => {
    }).then(() => {
      u(Le, gA).delete(this), R(this, ja, null), R(this, dA, null);
    });
  }
  render() {
    const r = () => {
      u(this, Gi).read().then(({
        value: e,
        done: a
      }) => {
        if (a) {
          u(this, Gt).resolve();
          return;
        }
        u(this, xi) ?? R(this, xi, e.lang), Object.assign(u(this, dA), e.styles), S(this, sl, Gb).call(this, e.items), r();
      }, u(this, Gt).reject);
    };
    return R(this, Gi, u(this, bA).getReader()), u(Le, gA).add(this), r(), u(this, Gt).promise;
  }
  update({
    viewport: r,
    onBefore: e = null
  }) {
    var i;
    const a = r.scale * (globalThis.devicePixelRatio || 1), t = r.rotation;
    if (t !== u(this, hA) && (e == null || e(), R(this, hA, t), v2(u(this, cA), {
      rotation: t
    })), a !== u(this, Tt)) {
      e == null || e(), R(this, Tt, a);
      const A = {
        prevFontSize: null,
        prevFontFamily: null,
        div: null,
        properties: null,
        ctx: S(i = Le, vA, $f).call(i, u(this, xi))
      };
      for (const n of u(this, Ti))
        A.properties = u(this, as).get(n), A.div = n, S(this, is, Xc).call(this, A);
    }
  }
  cancel() {
    var e;
    const r = new B2("TextLayer task cancelled.");
    (e = u(this, Gi)) == null || e.cancel(r).catch(() => {
    }), R(this, Gi, null), u(this, Gt).reject(r);
  }
  get textDivs() {
    return u(this, Ti);
  }
  get textContentItemsStr() {
    return u(this, es);
  }
  static cleanup() {
    if (!(u(this, gA).size > 0)) {
      u(this, Xi).clear();
      for (const {
        canvas: r
      } of u(this, Mi).values())
        r.remove();
      u(this, Mi).clear();
    }
  }
};
let Re = Le;
Gt = new WeakMap(), he = new WeakMap(), Ko = new WeakMap(), qo = new WeakMap(), xi = new WeakMap(), ja = new WeakMap(), $o = new WeakMap(), rs = new WeakMap(), Gi = new WeakMap(), cA = new WeakMap(), hA = new WeakMap(), Tt = new WeakMap(), dA = new WeakMap(), es = new WeakMap(), bA = new WeakMap(), Ti = new WeakMap(), as = new WeakMap(), ts = new WeakMap(), Xi = new WeakMap(), Mi = new WeakMap(), Xt = new WeakMap(), gA = new WeakMap(), sl = new WeakSet(), Gb = function(r) {
  var t, i;
  if (u(this, Ko))
    return;
  (i = u(this, ja)).ctx ?? (i.ctx = S(t = Le, vA, $f).call(t, u(this, xi)));
  const e = u(this, Ti), a = u(this, es);
  for (const A of r) {
    if (e.length > Av) {
      Q0("Ignoring additional textDivs for performance reasons."), R(this, Ko, !0);
      return;
    }
    if (A.str === void 0) {
      if (A.type === "beginMarkedContentProps" || A.type === "beginMarkedContent") {
        const n = u(this, he);
        R(this, he, document.createElement("span")), u(this, he).classList.add("markedContent"), A.id !== null && u(this, he).setAttribute("id", `${A.id}`), n.append(u(this, he));
      } else
        A.type === "endMarkedContent" && R(this, he, u(this, he).parentNode);
      continue;
    }
    a.push(A.str), S(this, fl, Tb).call(this, A);
  }
}, fl = new WeakSet(), Tb = function(r) {
  var g;
  const e = document.createElement("span"), a = {
    angle: 0,
    canvasWidth: 0,
    hasText: r.str !== "",
    hasEOL: r.hasEOL,
    fontSize: 0
  };
  u(this, Ti).push(e);
  const t = T0.transform(u(this, ts), r.transform);
  let i = Math.atan2(t[1], t[0]);
  const A = u(this, dA)[r.fontName];
  A.vertical && (i += Math.PI / 2);
  const n = u(this, qo) && A.fontSubstitution || A.fontFamily, o = Math.hypot(t[2], t[3]), f = o * S(g = Le, ul, Mb).call(g, n, u(this, xi));
  let l, c;
  i === 0 ? (l = t[4], c = t[5] - f) : (l = t[4] + f * Math.sin(i), c = t[5] - f * Math.cos(i));
  const h = "calc(var(--scale-factor)*", d = e.style;
  u(this, he) === u(this, cA) ? (d.left = `${(100 * l / u(this, rs)).toFixed(2)}%`, d.top = `${(100 * c / u(this, $o)).toFixed(2)}%`) : (d.left = `${h}${l.toFixed(2)}px)`, d.top = `${h}${c.toFixed(2)}px)`), d.fontSize = `${h}${(u(Le, Xt) * o).toFixed(2)}px)`, d.fontFamily = n, a.fontSize = o, e.setAttribute("role", "presentation"), e.textContent = r.str, e.dir = r.dir, u(this, qo) && (e.dataset.fontName = A.fontSubstitutionLoadedName || r.fontName), i !== 0 && (a.angle = i * (180 / Math.PI));
  let b = !1;
  if (r.str.length > 1)
    b = !0;
  else if (r.str !== " " && r.transform[0] !== r.transform[3]) {
    const v = Math.abs(r.transform[0]), m = Math.abs(r.transform[3]);
    v !== m && Math.max(v, m) / Math.min(v, m) > 1.5 && (b = !0);
  }
  if (b && (a.canvasWidth = A.vertical ? r.height : r.width), u(this, as).set(e, a), u(this, ja).div = e, u(this, ja).properties = a, S(this, is, Xc).call(this, u(this, ja)), a.hasText && u(this, he).append(e), a.hasEOL) {
    const v = document.createElement("br");
    v.setAttribute("role", "presentation"), u(this, he).append(v);
  }
}, is = new WeakSet(), Xc = function(r) {
  const {
    div: e,
    properties: a,
    ctx: t,
    prevFontSize: i,
    prevFontFamily: A
  } = r, {
    style: n
  } = e;
  let o = "";
  if (u(Le, Xt) > 1 && (o = `scale(${1 / u(Le, Xt)})`), a.canvasWidth !== 0 && a.hasText) {
    const {
      fontFamily: f
    } = n, {
      canvasWidth: l,
      fontSize: c
    } = a;
    (i !== c || A !== f) && (t.font = `${c * u(this, Tt)}px ${f}`, r.prevFontSize = c, r.prevFontFamily = f);
    const {
      width: h
    } = t.measureText(e.textContent);
    h > 0 && (o = `scaleX(${l * u(this, Tt) / h}) ${o}`);
  }
  a.angle !== 0 && (o = `rotate(${a.angle}deg) ${o}`), o.length > 0 && (n.transform = o);
}, vA = new WeakSet(), $f = function(r = null) {
  let e = u(this, Mi).get(r || (r = ""));
  if (!e) {
    const a = document.createElement("canvas");
    a.className = "hiddenCanvasElement", a.lang = r, document.body.append(a), e = a.getContext("2d", {
      alpha: !1,
      willReadFrequently: !0
    }), u(this, Mi).set(r, e);
  }
  return e;
}, ll = new WeakSet(), Xb = function() {
  if (u(this, Xt) !== null)
    return;
  const r = document.createElement("div");
  r.style.opacity = 0, r.style.lineHeight = 1, r.style.fontSize = "1px", r.textContent = "X", document.body.append(r), R(this, Xt, r.getBoundingClientRect().height), r.remove();
}, ul = new WeakSet(), Mb = function(r, e) {
  const a = u(this, Xi).get(r);
  if (a)
    return a;
  const t = S(this, vA, $f).call(this, e), i = t.font;
  t.canvas.width = t.canvas.height = ue, t.font = `${ue}px ${r}`;
  const A = t.measureText("");
  let n = A.fontBoundingBoxAscent, o = Math.abs(A.fontBoundingBoxDescent);
  if (n) {
    const c = n / (n + o);
    return u(this, Xi).set(r, c), t.canvas.width = t.canvas.height = 0, t.font = i, c;
  }
  t.strokeStyle = "red", t.clearRect(0, 0, ue, ue), t.strokeText("g", 0, 0);
  let f = t.getImageData(0, 0, ue, ue).data;
  o = 0;
  for (let c = f.length - 1 - 3; c >= 0; c -= 4)
    if (f[c] > 0) {
      o = Math.ceil(c / 4 / ue);
      break;
    }
  t.clearRect(0, 0, ue, ue), t.strokeText("A", 0, ue), f = t.getImageData(0, 0, ue, ue).data, n = 0;
  for (let c = 0, h = f.length; c < h; c += 4)
    if (f[c] > 0) {
      n = ue - Math.floor(c / 4 / ue);
      break;
    }
  t.canvas.width = t.canvas.height = 0, t.font = i;
  const l = n ? n / (n + o) : nv;
  return u(this, Xi).set(r, l), l;
}, E(Re, vA), E(Re, ll), E(Re, ul), E(Re, Xi, /* @__PURE__ */ new Map()), E(Re, Mi, /* @__PURE__ */ new Map()), E(Re, Xt, null), E(Re, gA, /* @__PURE__ */ new Set());
function ov() {
  Qd("`renderTextLayer`, please use `TextLayer` instead.");
  const {
    textContentSource: s,
    container: r,
    viewport: e,
    ...a
  } = arguments[0], t = Object.keys(a);
  t.length > 0 && Q0("Ignoring `renderTextLayer` parameters: " + t.join(", "));
  const i = new Re({
    textContentSource: s,
    container: r,
    viewport: e
  }), {
    textDivs: A,
    textContentItemsStr: n
  } = i;
  return {
    promise: i.render(),
    textDivs: A,
    textContentItemsStr: n
  };
}
function sv() {
  Qd("`updateTextLayer`, please use `TextLayer` instead.");
}
class Jn {
  static textContent(r) {
    const e = [], a = {
      items: e,
      styles: /* @__PURE__ */ Object.create(null)
    };
    function t(i) {
      var o;
      if (!i)
        return;
      let A = null;
      const n = i.name;
      if (n === "#text")
        A = i.value;
      else if (Jn.shouldBuildText(n))
        (o = i == null ? void 0 : i.attributes) != null && o.textContent ? A = i.attributes.textContent : i.value && (A = i.value);
      else
        return;
      if (A !== null && e.push({
        str: A
      }), !!i.children)
        for (const f of i.children)
          t(f);
    }
    return t(r), a;
  }
  static shouldBuildText(r) {
    return !(r === "textarea" || r === "input" || r === "option" || r === "select");
  }
}
const fv = 65536, lv = 100, uv = 5e3, cv = ie ? _g : lg, hv = ie ? Eg : Ud, dv = ie ? yg : fg, bv = ie ? Cg : zd;
function gv(s = {}) {
  typeof s == "string" || s instanceof URL ? s = {
    url: s
  } : (s instanceof ArrayBuffer || ArrayBuffer.isView(s)) && (s = {
    data: s
  });
  const r = new r1(), {
    docId: e
  } = r, a = s.url ? vv(s.url) : null, t = s.data ? pv(s.data) : null, i = s.httpHeaders || null, A = s.withCredentials === !0, n = s.password ?? null, o = s.range instanceof Db ? s.range : null, f = Number.isInteger(s.rangeChunkSize) && s.rangeChunkSize > 0 ? s.rangeChunkSize : fv;
  let l = s.worker instanceof qt ? s.worker : null;
  const c = s.verbosity, h = typeof s.docBaseUrl == "string" && !_h(s.docBaseUrl) ? s.docBaseUrl : null, d = typeof s.cMapUrl == "string" ? s.cMapUrl : null, b = s.cMapPacked !== !1, g = s.CMapReaderFactory || hv, v = typeof s.standardFontDataUrl == "string" ? s.standardFontDataUrl : null, m = s.StandardFontDataFactory || bv, w = s.stopAtErrors !== !0, k = Number.isInteger(s.maxImageSize) && s.maxImageSize > -1 ? s.maxImageSize : -1, C = s.isEvalSupported !== !1, y = typeof s.isOffscreenCanvasSupported == "boolean" ? s.isOffscreenCanvasSupported : !ie, B = Number.isInteger(s.canvasMaxAreaInBytes) ? s.canvasMaxAreaInBytes : -1, F = typeof s.disableFontFace == "boolean" ? s.disableFontFace : ie, G = s.fontExtraProperties === !0, V = s.enableXfa === !0, M = s.ownerDocument || globalThis.document, T = s.disableRange === !0, Q = s.disableStream === !0, L = s.disableAutoFetch === !0, J = s.pdfBug === !0, r0 = s.enableHWA === !0, e0 = o ? o.length : s.length ?? NaN, q = typeof s.useSystemFonts == "boolean" ? s.useSystemFonts : !ie && !F, _ = typeof s.useWorkerFetch == "boolean" ? s.useWorkerFetch : g === Ud && m === zd && d && v && In(d, document.baseURI) && In(v, document.baseURI), x = s.canvasFactory || new cv({
    ownerDocument: M,
    enableHWA: r0
  }), N = s.filterFactory || new dv({
    docId: e,
    ownerDocument: M
  }), D = null;
  q5(c);
  const Y = {
    canvasFactory: x,
    filterFactory: N
  };
  if (_ || (Y.cMapReaderFactory = new g({
    baseUrl: d,
    isCompressed: b
  }), Y.standardFontDataFactory = new m({
    baseUrl: v
  })), !l) {
    const A0 = {
      verbosity: c,
      port: ht.workerPort
    };
    l = A0.port ? qt.fromPort(A0) : new qt(A0), r._worker = l;
  }
  const z = {
    docId: e,
    apiVersion: "4.4.168",
    data: t,
    password: n,
    disableAutoFetch: L,
    rangeChunkSize: f,
    length: e0,
    docBaseUrl: h,
    enableXfa: V,
    evaluatorOptions: {
      maxImageSize: k,
      disableFontFace: F,
      ignoreErrors: w,
      isEvalSupported: C,
      isOffscreenCanvasSupported: y,
      canvasMaxAreaInBytes: B,
      fontExtraProperties: G,
      useSystemFonts: q,
      cMapUrl: _ ? d : null,
      standardFontDataUrl: _ ? v : null
    }
  }, j = {
    disableFontFace: F,
    fontExtraProperties: G,
    ownerDocument: M,
    pdfBug: J,
    styleElement: D,
    loadingParams: {
      disableAutoFetch: L,
      enableXfa: V
    }
  };
  return l.promise.then(function() {
    if (r.destroyed)
      throw new Error("Loading aborted");
    if (l.destroyed)
      throw new Error("Worker was destroyed");
    const A0 = l.messageHandler.sendWithPromise("GetDocRequest", z, t ? [t.buffer] : null);
    let l0;
    if (o)
      l0 = new Og(o, {
        disableRange: T,
        disableStream: Q
      });
    else if (!t) {
      if (!a)
        throw new Error("getDocument - no `url` parameter provided.");
      l0 = ((m0) => ie ? function() {
        return typeof fetch < "u" && typeof Response < "u" && "body" in Response.prototype;
      }() && In(m0.url) ? new V4(m0) : new rv(m0) : In(m0.url) ? new V4(m0) : new Jg(m0))({
        url: a,
        length: e0,
        httpHeaders: i,
        withCredentials: A,
        rangeChunkSize: f,
        disableRange: T,
        disableStream: Q
      });
    }
    return A0.then((n0) => {
      if (r.destroyed)
        throw new Error("Loading aborted");
      if (l.destroyed)
        throw new Error("Worker was destroyed");
      const m0 = new Wn(e, n0, l.port), G0 = new yv(m0, r, l0, j, Y);
      r._transport = G0, m0.send("Ready", null);
    });
  }).catch(r._capability.reject), r;
}
function vv(s) {
  if (s instanceof URL)
    return s.href;
  try {
    return new URL(s, window.location).href;
  } catch {
    if (ie && typeof s == "string")
      return s;
  }
  throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
}
function pv(s) {
  if (ie && typeof Buffer < "u" && s instanceof Buffer)
    throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
  if (s instanceof Uint8Array && s.byteLength === s.buffer.byteLength)
    return s;
  if (typeof s == "string")
    return gu(s);
  if (s instanceof ArrayBuffer || ArrayBuffer.isView(s) || typeof s == "object" && !isNaN(s == null ? void 0 : s.length))
    return new Uint8Array(s);
  throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
}
function P4(s) {
  return typeof s == "object" && Number.isInteger(s == null ? void 0 : s.num) && s.num >= 0 && Number.isInteger(s == null ? void 0 : s.gen) && s.gen >= 0;
}
var cl;
const Th = class {
  constructor() {
    this._capability = Promise.withResolvers(), this._transport = null, this._worker = null, this.docId = `d${pe(Th, cl)._++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    var r, e, a;
    this.destroyed = !0;
    try {
      (r = this._worker) != null && r.port && (this._worker._pendingDestroy = !0), await ((e = this._transport) == null ? void 0 : e.destroy());
    } catch (t) {
      throw (a = this._worker) != null && a.port && delete this._worker._pendingDestroy, t;
    }
    this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
  }
};
let r1 = Th;
cl = new WeakMap(), E(r1, cl, 0);
class Db {
  constructor(r, e, a = !1, t = null) {
    this.length = r, this.initialData = e, this.progressiveDone = a, this.contentDispositionFilename = t, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = Promise.withResolvers();
  }
  addRangeListener(r) {
    this._rangeListeners.push(r);
  }
  addProgressListener(r) {
    this._progressListeners.push(r);
  }
  addProgressiveReadListener(r) {
    this._progressiveReadListeners.push(r);
  }
  addProgressiveDoneListener(r) {
    this._progressiveDoneListeners.push(r);
  }
  onDataRange(r, e) {
    for (const a of this._rangeListeners)
      a(r, e);
  }
  onDataProgress(r, e) {
    this._readyCapability.promise.then(() => {
      for (const a of this._progressListeners)
        a(r, e);
    });
  }
  onDataProgressiveRead(r) {
    this._readyCapability.promise.then(() => {
      for (const e of this._progressiveReadListeners)
        e(r);
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const r of this._progressiveDoneListeners)
        r();
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(r, e) {
    hr("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {
  }
}
class mv {
  constructor(r, e) {
    this._pdfInfo = r, this._transport = e;
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return ar(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(r) {
    return this._transport.getPage(r);
  }
  getPageIndex(r) {
    return this._transport.getPageIndex(r);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(r) {
    return this._transport.getDestination(r);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({
    intent: r = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(r);
    return this._transport.getOptionalContentConfig(e);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(r = !1) {
    return this._transport.startCleanup(r || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(r) {
    return this._transport.cachedPageNumber(r);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
var Mt, Ua, Dt, T2, pA, e1;
class kv {
  constructor(r, e, a, t = !1) {
    E(this, Dt);
    E(this, pA);
    E(this, Mt, null);
    E(this, Ua, !1);
    this._pageIndex = r, this._pageInfo = e, this._transport = a, this._stats = t ? new Z4() : null, this._pdfBug = t, this.commonObjs = a.commonObjs, this.objs = new Nb(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: r,
    rotation: e = this.rotate,
    offsetX: a = 0,
    offsetY: t = 0,
    dontFlip: i = !1
  } = {}) {
    return new pf({
      viewBox: this.view,
      scale: r,
      rotation: e,
      offsetX: a,
      offsetY: t,
      dontFlip: i
    });
  }
  getAnnotations({
    intent: r = "display"
  } = {}) {
    const {
      renderingIntent: e
    } = this._transport.getRenderingIntent(r);
    return this._transport.getAnnotations(this._pageIndex, e);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return ar(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    var r;
    return ((r = this._transport._htmlForXfa) == null ? void 0 : r.children[this._pageIndex]) || null;
  }
  render({
    canvasContext: r,
    viewport: e,
    intent: a = "display",
    annotationMode: t = Et.ENABLE,
    transform: i = null,
    background: A = null,
    optionalContentConfigPromise: n = null,
    annotationCanvasMap: o = null,
    pageColors: f = null,
    printAnnotationStorage: l = null
  }) {
    var k, C;
    (k = this._stats) == null || k.time("Overall");
    const c = this._transport.getRenderingIntent(a, t, l), {
      renderingIntent: h,
      cacheKey: d
    } = c;
    R(this, Ua, !1), S(this, pA, e1).call(this), n || (n = this._transport.getOptionalContentConfig(h));
    let b = this._intentStates.get(d);
    b || (b = /* @__PURE__ */ Object.create(null), this._intentStates.set(d, b)), b.streamReaderCancelTimeout && (clearTimeout(b.streamReaderCancelTimeout), b.streamReaderCancelTimeout = null);
    const g = !!(h & De.PRINT);
    b.displayReadyCapability || (b.displayReadyCapability = Promise.withResolvers(), b.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (C = this._stats) == null || C.time("Page Request"), this._pumpOperatorList(c));
    const v = (y) => {
      var B;
      b.renderTasks.delete(m), (this._maybeCleanupAfterRender || g) && R(this, Ua, !0), S(this, Dt, T2).call(this, !g), y ? (m.capability.reject(y), this._abortOperatorList({
        intentState: b,
        reason: y instanceof Error ? y : new Error(y)
      })) : m.capability.resolve(), this._stats && (this._stats.timeEnd("Rendering"), this._stats.timeEnd("Overall"), (B = globalThis.Stats) != null && B.enabled && globalThis.Stats.add(this.pageNumber, this._stats));
    }, m = new i1({
      callback: v,
      params: {
        canvasContext: r,
        viewport: e,
        transform: i,
        background: A
      },
      objs: this.objs,
      commonObjs: this.commonObjs,
      annotationCanvasMap: o,
      operatorList: b.operatorList,
      pageIndex: this._pageIndex,
      canvasFactory: this._transport.canvasFactory,
      filterFactory: this._transport.filterFactory,
      useRequestAnimationFrame: !g,
      pdfBug: this._pdfBug,
      pageColors: f
    });
    (b.renderTasks || (b.renderTasks = /* @__PURE__ */ new Set())).add(m);
    const w = m.task;
    return Promise.all([b.displayReadyCapability.promise, n]).then(([y, B]) => {
      var F;
      if (this.destroyed) {
        v();
        return;
      }
      if ((F = this._stats) == null || F.time("Rendering"), !(B.renderingIntent & h))
        throw new Error("Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.");
      m.initializeGraphics({
        transparency: y,
        optionalContentConfig: B
      }), m.operatorListChanged();
    }).catch(v), w;
  }
  getOperatorList({
    intent: r = "display",
    annotationMode: e = Et.ENABLE,
    printAnnotationStorage: a = null
  } = {}) {
    var o;
    function t() {
      A.operatorList.lastChunk && (A.opListReadCapability.resolve(A.operatorList), A.renderTasks.delete(n));
    }
    const i = this._transport.getRenderingIntent(r, e, a, !0);
    let A = this._intentStates.get(i.cacheKey);
    A || (A = /* @__PURE__ */ Object.create(null), this._intentStates.set(i.cacheKey, A));
    let n;
    return A.opListReadCapability || (n = /* @__PURE__ */ Object.create(null), n.operatorListChanged = t, A.opListReadCapability = Promise.withResolvers(), (A.renderTasks || (A.renderTasks = /* @__PURE__ */ new Set())).add(n), A.operatorList = {
      fnArray: [],
      argsArray: [],
      lastChunk: !1,
      separateAnnots: null
    }, (o = this._stats) == null || o.time("Page Request"), this._pumpOperatorList(i)), A.opListReadCapability.promise;
  }
  streamTextContent({
    includeMarkedContent: r = !1,
    disableNormalization: e = !1
  } = {}) {
    return this._transport.messageHandler.sendWithStream("GetTextContent", {
      pageIndex: this._pageIndex,
      includeMarkedContent: r === !0,
      disableNormalization: e === !0
    }, {
      highWaterMark: 100,
      size(t) {
        return t.items.length;
      }
    });
  }
  getTextContent(r = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((a) => Jn.textContent(a));
    const e = this.streamTextContent(r);
    return new Promise(function(a, t) {
      function i() {
        A.read().then(function({
          value: o,
          done: f
        }) {
          if (f) {
            a(n);
            return;
          }
          n.lang ?? (n.lang = o.lang), Object.assign(n.styles, o.styles), n.items.push(...o.items), i();
        }, t);
      }
      const A = e.getReader(), n = {
        items: [],
        styles: /* @__PURE__ */ Object.create(null),
        lang: null
      };
      i();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const r = [];
    for (const e of this._intentStates.values())
      if (this._abortOperatorList({
        intentState: e,
        reason: new Error("Page was destroyed."),
        force: !0
      }), !e.opListReadCapability)
        for (const a of e.renderTasks)
          r.push(a.completed), a.cancel();
    return this.objs.clear(), R(this, Ua, !1), S(this, pA, e1).call(this), Promise.all(r);
  }
  cleanup(r = !1) {
    R(this, Ua, !0);
    const e = S(this, Dt, T2).call(this, !1);
    return r && e && this._stats && (this._stats = new Z4()), e;
  }
  _startRenderPage(r, e) {
    var t, i;
    const a = this._intentStates.get(e);
    a && ((t = this._stats) == null || t.timeEnd("Page Request"), (i = a.displayReadyCapability) == null || i.resolve(r));
  }
  _renderPageChunk(r, e) {
    for (let a = 0, t = r.length; a < t; a++)
      e.operatorList.fnArray.push(r.fnArray[a]), e.operatorList.argsArray.push(r.argsArray[a]);
    e.operatorList.lastChunk = r.lastChunk, e.operatorList.separateAnnots = r.separateAnnots;
    for (const a of e.renderTasks)
      a.operatorListChanged();
    r.lastChunk && S(this, Dt, T2).call(this, !0);
  }
  _pumpOperatorList({
    renderingIntent: r,
    cacheKey: e,
    annotationStorageSerializable: a
  }) {
    const {
      map: t,
      transfer: i
    } = a, n = this._transport.messageHandler.sendWithStream("GetOperatorList", {
      pageIndex: this._pageIndex,
      intent: r,
      cacheKey: e,
      annotationStorage: t
    }, i).getReader(), o = this._intentStates.get(e);
    o.streamReader = n;
    const f = () => {
      n.read().then(({
        value: l,
        done: c
      }) => {
        if (c) {
          o.streamReader = null;
          return;
        }
        this._transport.destroyed || (this._renderPageChunk(l, o), f());
      }, (l) => {
        if (o.streamReader = null, !this._transport.destroyed) {
          if (o.operatorList) {
            o.operatorList.lastChunk = !0;
            for (const c of o.renderTasks)
              c.operatorListChanged();
            S(this, Dt, T2).call(this, !0);
          }
          if (o.displayReadyCapability)
            o.displayReadyCapability.reject(l);
          else if (o.opListReadCapability)
            o.opListReadCapability.reject(l);
          else
            throw l;
        }
      });
    };
    f();
  }
  _abortOperatorList({
    intentState: r,
    reason: e,
    force: a = !1
  }) {
    if (r.streamReader) {
      if (r.streamReaderCancelTimeout && (clearTimeout(r.streamReaderCancelTimeout), r.streamReaderCancelTimeout = null), !a) {
        if (r.renderTasks.size > 0)
          return;
        if (e instanceof yh) {
          let t = lv;
          e.extraDelay > 0 && e.extraDelay < 1e3 && (t += e.extraDelay), r.streamReaderCancelTimeout = setTimeout(() => {
            r.streamReaderCancelTimeout = null, this._abortOperatorList({
              intentState: r,
              reason: e,
              force: !0
            });
          }, t);
          return;
        }
      }
      if (r.streamReader.cancel(new B2(e.message)).catch(() => {
      }), r.streamReader = null, !this._transport.destroyed) {
        for (const [t, i] of this._intentStates)
          if (i === r) {
            this._intentStates.delete(t);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
Mt = new WeakMap(), Ua = new WeakMap(), Dt = new WeakSet(), T2 = function(r = !1) {
  if (S(this, pA, e1).call(this), !u(this, Ua) || this.destroyed)
    return !1;
  if (r)
    return R(this, Mt, setTimeout(() => {
      R(this, Mt, null), S(this, Dt, T2).call(this, !1);
    }, uv)), !1;
  for (const {
    renderTasks: e,
    operatorList: a
  } of this._intentStates.values())
    if (e.size > 0 || !a.lastChunk)
      return !1;
  return this._intentStates.clear(), this.objs.clear(), R(this, Ua, !1), !0;
}, pA = new WeakSet(), e1 = function() {
  u(this, Mt) && (clearTimeout(u(this, Mt)), R(this, Mt, null));
};
var Di, hl;
class wv {
  constructor() {
    E(this, Di, /* @__PURE__ */ new Set());
    E(this, hl, Promise.resolve());
  }
  postMessage(r, e) {
    const a = {
      data: structuredClone(r, e ? {
        transfer: e
      } : null)
    };
    u(this, hl).then(() => {
      for (const t of u(this, Di))
        t.call(this, a);
    });
  }
  addEventListener(r, e) {
    u(this, Di).add(e);
  }
  removeEventListener(r, e) {
    u(this, Di).delete(e);
  }
  terminate() {
    u(this, Di).clear();
  }
}
Di = new WeakMap(), hl = new WeakMap();
const Ma = {
  isWorkerDisabled: !1,
  fakeWorkerId: 0
};
ie && (Ma.isWorkerDisabled = !0, ht.workerSrc || (ht.workerSrc = "./pdf.worker.mjs")), Ma.isSameOrigin = function(s, r) {
  let e;
  try {
    if (e = new URL(s), !e.origin || e.origin === "null")
      return !1;
  } catch {
    return !1;
  }
  const a = new URL(r, e);
  return e.origin === a.origin;
}, Ma.createCDNWrapper = function(s) {
  const r = `await import("${s}");`;
  return URL.createObjectURL(new Blob([r], {
    type: "text/javascript"
  }));
};
var Ni, mA, a1, kA, t1;
const Ye = class {
  constructor({
    name: r = null,
    port: e = null,
    verbosity: a = $5()
  } = {}) {
    E(this, mA);
    var t;
    if (this.name = r, this.destroyed = !1, this.verbosity = a, this._readyCapability = Promise.withResolvers(), this._port = null, this._webWorker = null, this._messageHandler = null, e) {
      if ((t = u(Ye, Ni)) != null && t.has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      (u(Ye, Ni) || R(Ye, Ni, /* @__PURE__ */ new WeakMap())).set(e, this), this._initializeFromPort(e);
      return;
    }
    this._initialize();
  }
  get promise() {
    return ie ? Promise.all([Za.promise, this._readyCapability.promise]) : this._readyCapability.promise;
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(r) {
    this._port = r, this._messageHandler = new Wn("main", "worker", r), this._messageHandler.on("ready", function() {
    }), S(this, mA, a1).call(this);
  }
  _initialize() {
    if (Ma.isWorkerDisabled || u(Ye, kA, t1)) {
      this._setupFakeWorker();
      return;
    }
    let {
      workerSrc: r
    } = Ye;
    try {
      Ma.isSameOrigin(window.location.href, r) || (r = Ma.createCDNWrapper(new URL(r, window.location).href));
      const e = new Worker(r, {
        type: "module"
      }), a = new Wn("main", "worker", e), t = () => {
        i.abort(), a.destroy(), e.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
      }, i = new AbortController();
      e.addEventListener("error", () => {
        this._webWorker || t();
      }, {
        signal: i.signal
      }), a.on("test", (n) => {
        if (i.abort(), this.destroyed || !n) {
          t();
          return;
        }
        this._messageHandler = a, this._port = e, this._webWorker = e, S(this, mA, a1).call(this);
      }), a.on("ready", (n) => {
        if (i.abort(), this.destroyed) {
          t();
          return;
        }
        try {
          A();
        } catch {
          this._setupFakeWorker();
        }
      });
      const A = () => {
        const n = new Uint8Array();
        a.send("test", n, [n.buffer]);
      };
      A();
      return;
    } catch {
      du("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    Ma.isWorkerDisabled || (Q0("Setting up fake worker."), Ma.isWorkerDisabled = !0), Ye._setupFakeWorkerGlobal.then((r) => {
      if (this.destroyed) {
        this._readyCapability.reject(new Error("Worker was destroyed"));
        return;
      }
      const e = new wv();
      this._port = e;
      const a = `fake${Ma.fakeWorkerId++}`, t = new Wn(a + "_worker", a, e);
      r.setup(t, e), this._messageHandler = new Wn(a, a + "_worker", e), S(this, mA, a1).call(this);
    }).catch((r) => {
      this._readyCapability.reject(new Error(`Setting up fake worker failed: "${r.message}".`));
    });
  }
  destroy() {
    var r;
    this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), (r = u(Ye, Ni)) == null || r.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
  }
  static fromPort(r) {
    var a;
    if (!(r != null && r.port))
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const e = (a = u(this, Ni)) == null ? void 0 : a.get(r.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
      return e;
    }
    return new Ye(r);
  }
  static get workerSrc() {
    if (ht.workerSrc)
      return ht.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get _setupFakeWorkerGlobal() {
    return ar(this, "_setupFakeWorkerGlobal", (async () => u(this, kA, t1) ? u(this, kA, t1) : (await import(
      /*webpackIgnore: true*/
      this.workerSrc
    )).WorkerMessageHandler)());
  }
};
let qt = Ye;
Ni = new WeakMap(), mA = new WeakSet(), a1 = function() {
  this._readyCapability.resolve(), this._messageHandler.send("configure", {
    verbosity: this.verbosity
  });
}, kA = new WeakSet(), t1 = function() {
  var r;
  try {
    return ((r = globalThis.pdfjsWorker) == null ? void 0 : r.WorkerMessageHandler) || null;
  } catch {
    return null;
  }
}, E(qt, kA), E(qt, Ni, void 0);
var za, ga, wA, yA, va, Vi, xn;
class yv {
  constructor(r, e, a, t, i) {
    E(this, Vi);
    E(this, za, /* @__PURE__ */ new Map());
    E(this, ga, /* @__PURE__ */ new Map());
    E(this, wA, /* @__PURE__ */ new Map());
    E(this, yA, /* @__PURE__ */ new Map());
    E(this, va, null);
    this.messageHandler = r, this.loadingTask = e, this.commonObjs = new Nb(), this.fontLoader = new kg({
      ownerDocument: t.ownerDocument,
      styleElement: t.styleElement
    }), this.loadingParams = t.loadingParams, this._params = t, this.canvasFactory = i.canvasFactory, this.filterFactory = i.filterFactory, this.cMapReaderFactory = i.cMapReaderFactory, this.standardFontDataFactory = i.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = a, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = Promise.withResolvers(), this.setupMessageHandler();
  }
  get annotationStorage() {
    return ar(this, "annotationStorage", new Bh());
  }
  getRenderingIntent(r, e = Et.ENABLE, a = null, t = !1) {
    let i = De.DISPLAY, A = Sc;
    switch (r) {
      case "any":
        i = De.ANY;
        break;
      case "display":
        break;
      case "print":
        i = De.PRINT;
        break;
      default:
        Q0(`getRenderingIntent - invalid intent: ${r}`);
    }
    switch (e) {
      case Et.DISABLE:
        i += De.ANNOTATIONS_DISABLE;
        break;
      case Et.ENABLE:
        break;
      case Et.ENABLE_FORMS:
        i += De.ANNOTATIONS_FORMS;
        break;
      case Et.ENABLE_STORAGE:
        i += De.ANNOTATIONS_STORAGE, A = (i & De.PRINT && a instanceof _b ? a : this.annotationStorage).serializable;
        break;
      default:
        Q0(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    return t && (i += De.OPLIST), {
      renderingIntent: i,
      cacheKey: `${i}_${A.hash}`,
      annotationStorageSerializable: A
    };
  }
  destroy() {
    var a;
    if (this.destroyCapability)
      return this.destroyCapability.promise;
    this.destroyed = !0, this.destroyCapability = Promise.withResolvers(), (a = u(this, va)) == null || a.reject(new Error("Worker was destroyed during onPassword callback"));
    const r = [];
    for (const t of u(this, ga).values())
      r.push(t._destroy());
    u(this, ga).clear(), u(this, wA).clear(), u(this, yA).clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return r.push(e), Promise.all(r).then(() => {
      var t;
      this.commonObjs.clear(), this.fontLoader.clear(), u(this, za).clear(), this.filterFactory.destroy(), Re.cleanup(), (t = this._networkStream) == null || t.cancelAllRequests(new B2("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
    }, this.destroyCapability.reject), this.destroyCapability.promise;
  }
  setupMessageHandler() {
    const {
      messageHandler: r,
      loadingTask: e
    } = this;
    r.on("GetReader", (a, t) => {
      Mr(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (i) => {
        this._lastProgress = {
          loaded: i.loaded,
          total: i.total
        };
      }, t.onPull = () => {
        this._fullReader.read().then(function({
          value: i,
          done: A
        }) {
          if (A) {
            t.close();
            return;
          }
          Mr(i instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), t.enqueue(new Uint8Array(i), 1, [i]);
        }).catch((i) => {
          t.error(i);
        });
      }, t.onCancel = (i) => {
        this._fullReader.cancel(i), t.ready.catch((A) => {
          if (!this.destroyed)
            throw A;
        });
      };
    }), r.on("ReaderHeadersReady", (a) => {
      const t = Promise.withResolvers(), i = this._fullReader;
      return i.headersReady.then(() => {
        var A;
        (!i.isStreamingSupported || !i.isRangeSupported) && (this._lastProgress && ((A = e.onProgress) == null || A.call(e, this._lastProgress)), i.onProgress = (n) => {
          var o;
          (o = e.onProgress) == null || o.call(e, {
            loaded: n.loaded,
            total: n.total
          });
        }), t.resolve({
          isStreamingSupported: i.isStreamingSupported,
          isRangeSupported: i.isRangeSupported,
          contentLength: i.contentLength
        });
      }, t.reject), t.promise;
    }), r.on("GetRangeReader", (a, t) => {
      Mr(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
      const i = this._networkStream.getRangeReader(a.begin, a.end);
      if (!i) {
        t.close();
        return;
      }
      t.onPull = () => {
        i.read().then(function({
          value: A,
          done: n
        }) {
          if (n) {
            t.close();
            return;
          }
          Mr(A instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), t.enqueue(new Uint8Array(A), 1, [A]);
        }).catch((A) => {
          t.error(A);
        });
      }, t.onCancel = (A) => {
        i.cancel(A), t.ready.catch((n) => {
          if (!this.destroyed)
            throw n;
        });
      };
    }), r.on("GetDoc", ({
      pdfInfo: a
    }) => {
      this._numPages = a.numPages, this._htmlForXfa = a.htmlForXfa, delete a.htmlForXfa, e._capability.resolve(new mv(a, this));
    }), r.on("DocException", function(a) {
      let t;
      switch (a.name) {
        case "PasswordException":
          t = new fc(a.message, a.code);
          break;
        case "InvalidPDFException":
          t = new Ld(a.message);
          break;
        case "MissingPDFException":
          t = new C2(a.message);
          break;
        case "UnexpectedResponseException":
          t = new bu(a.message, a.status);
          break;
        case "UnknownErrorException":
          t = new lc(a.message, a.details);
          break;
        default:
          hr("DocException - expected a valid Error.");
      }
      e._capability.reject(t);
    }), r.on("PasswordRequest", (a) => {
      if (R(this, va, Promise.withResolvers()), e.onPassword) {
        const t = (i) => {
          i instanceof Error ? u(this, va).reject(i) : u(this, va).resolve({
            password: i
          });
        };
        try {
          e.onPassword(t, a.code);
        } catch (i) {
          u(this, va).reject(i);
        }
      } else
        u(this, va).reject(new fc(a.message, a.code));
      return u(this, va).promise;
    }), r.on("DataLoaded", (a) => {
      var t;
      (t = e.onProgress) == null || t.call(e, {
        loaded: a.length,
        total: a.length
      }), this.downloadInfoCapability.resolve(a);
    }), r.on("StartRenderPage", (a) => {
      if (this.destroyed)
        return;
      u(this, ga).get(a.pageIndex)._startRenderPage(a.transparency, a.cacheKey);
    }), r.on("commonobj", ([a, t, i]) => {
      var A;
      if (this.destroyed || this.commonObjs.has(a))
        return null;
      switch (t) {
        case "Font":
          const {
            disableFontFace: n,
            fontExtraProperties: o,
            pdfBug: f
          } = this._params;
          if ("error" in i) {
            const d = i.error;
            Q0(`Error during font loading: ${d}`), this.commonObjs.resolve(a, d);
            break;
          }
          const l = f && ((A = globalThis.FontInspector) != null && A.enabled) ? (d, b) => globalThis.FontInspector.fontAdded(d, b) : null, c = new wg(i, {
            disableFontFace: n,
            inspectFont: l
          });
          this.fontLoader.bind(c).catch(() => r.sendWithPromise("FontFallback", {
            id: a
          })).finally(() => {
            !o && c.data && (c.data = null), this.commonObjs.resolve(a, c);
          });
          break;
        case "CopyLocalImage":
          const {
            imageRef: h
          } = i;
          Mr(h, "The imageRef must be defined.");
          for (const d of u(this, ga).values())
            for (const [, b] of d.objs)
              if ((b == null ? void 0 : b.ref) === h)
                return b.dataLen ? (this.commonObjs.resolve(a, structuredClone(b)), b.dataLen) : null;
          break;
        case "FontPath":
        case "Image":
        case "Pattern":
          this.commonObjs.resolve(a, i);
          break;
        default:
          throw new Error(`Got unknown common object type ${t}`);
      }
      return null;
    }), r.on("obj", ([a, t, i, A]) => {
      var o;
      if (this.destroyed)
        return;
      const n = u(this, ga).get(t);
      if (!n.objs.has(a)) {
        if (n._intentStates.size === 0) {
          (o = A == null ? void 0 : A.bitmap) == null || o.close();
          return;
        }
        switch (i) {
          case "Image":
            n.objs.resolve(a, A), (A == null ? void 0 : A.dataLen) > z5 && (n._maybeCleanupAfterRender = !0);
            break;
          case "Pattern":
            n.objs.resolve(a, A);
            break;
          default:
            throw new Error(`Got unknown object type ${i}`);
        }
      }
    }), r.on("DocProgress", (a) => {
      var t;
      this.destroyed || (t = e.onProgress) == null || t.call(e, {
        loaded: a.loaded,
        total: a.total
      });
    }), r.on("FetchBuiltInCMap", (a) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(a) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), r.on("FetchStandardFontData", (a) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(a) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    var a;
    this.annotationStorage.size <= 0 && Q0("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
    const {
      map: r,
      transfer: e
    } = this.annotationStorage.serializable;
    return this.messageHandler.sendWithPromise("SaveDocument", {
      isPureXfa: !!this._htmlForXfa,
      numPages: this._numPages,
      annotationStorage: r,
      filename: ((a = this._fullReader) == null ? void 0 : a.filename) ?? null
    }, e).finally(() => {
      this.annotationStorage.resetModified();
    });
  }
  getPage(r) {
    if (!Number.isInteger(r) || r <= 0 || r > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const e = r - 1, a = u(this, wA).get(e);
    if (a)
      return a;
    const t = this.messageHandler.sendWithPromise("GetPage", {
      pageIndex: e
    }).then((i) => {
      if (this.destroyed)
        throw new Error("Transport destroyed");
      i.refStr && u(this, yA).set(i.refStr, r);
      const A = new kv(e, i, this, this._params.pdfBug);
      return u(this, ga).set(e, A), A;
    });
    return u(this, wA).set(e, t), t;
  }
  getPageIndex(r) {
    return P4(r) ? this.messageHandler.sendWithPromise("GetPageIndex", {
      num: r.num,
      gen: r.gen
    }) : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(r, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: r,
      intent: e
    });
  }
  getFieldObjects() {
    return S(this, Vi, xn).call(this, "GetFieldObjects");
  }
  hasJSActions() {
    return S(this, Vi, xn).call(this, "HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(r) {
    return typeof r != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
      id: r
    });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    return S(this, Vi, xn).call(this, "GetDocJSActions");
  }
  getPageJSActions(r) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: r
    });
  }
  getStructTree(r) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: r
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(r) {
    return S(this, Vi, xn).call(this, "GetOptionalContentConfig").then((e) => new Pg(e, r));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const r = "GetMetadata", e = u(this, za).get(r);
    if (e)
      return e;
    const a = this.messageHandler.sendWithPromise(r, null).then((t) => {
      var i, A;
      return {
        info: t[0],
        metadata: t[1] ? new Ng(t[1]) : null,
        contentDispositionFilename: ((i = this._fullReader) == null ? void 0 : i.filename) ?? null,
        contentLength: ((A = this._fullReader) == null ? void 0 : A.contentLength) ?? null
      };
    });
    return u(this, za).set(r, a), a;
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(r = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const e of u(this, ga).values())
        if (!e.cleanup())
          throw new Error(`startCleanup: Page ${e.pageNumber} is currently rendering.`);
      this.commonObjs.clear(), r || this.fontLoader.clear(), u(this, za).clear(), this.filterFactory.destroy(!0), Re.cleanup();
    }
  }
  cachedPageNumber(r) {
    if (!P4(r))
      return null;
    const e = r.gen === 0 ? `${r.num}R` : `${r.num}R${r.gen}`;
    return u(this, yA).get(e) ?? null;
  }
}
za = new WeakMap(), ga = new WeakMap(), wA = new WeakMap(), yA = new WeakMap(), va = new WeakMap(), Vi = new WeakSet(), xn = function(r, e = null) {
  const a = u(this, za).get(r);
  if (a)
    return a;
  const t = this.messageHandler.sendWithPromise(r, e);
  return u(this, za).set(r, t), t;
};
const Df = Symbol("INITIAL_DATA");
var Ke, As, Mc;
class Nb {
  constructor() {
    E(this, As);
    E(this, Ke, /* @__PURE__ */ Object.create(null));
  }
  get(r, e = null) {
    if (e) {
      const t = S(this, As, Mc).call(this, r);
      return t.promise.then(() => e(t.data)), null;
    }
    const a = u(this, Ke)[r];
    if (!a || a.data === Df)
      throw new Error(`Requesting object that isn't resolved yet ${r}.`);
    return a.data;
  }
  has(r) {
    const e = u(this, Ke)[r];
    return !!e && e.data !== Df;
  }
  resolve(r, e = null) {
    const a = S(this, As, Mc).call(this, r);
    a.data = e, a.resolve();
  }
  clear() {
    var r;
    for (const e in u(this, Ke)) {
      const {
        data: a
      } = u(this, Ke)[e];
      (r = a == null ? void 0 : a.bitmap) == null || r.close();
    }
    R(this, Ke, /* @__PURE__ */ Object.create(null));
  }
  *[Symbol.iterator]() {
    for (const r in u(this, Ke)) {
      const {
        data: e
      } = u(this, Ke)[r];
      e !== Df && (yield [r, e]);
    }
  }
}
Ke = new WeakMap(), As = new WeakSet(), Mc = function(r) {
  var e;
  return (e = u(this, Ke))[r] || (e[r] = {
    ...Promise.withResolvers(),
    data: Df
  });
};
var Nt;
class _v {
  constructor(r) {
    E(this, Nt, null);
    R(this, Nt, r), this.onContinue = null;
  }
  get promise() {
    return u(this, Nt).capability.promise;
  }
  cancel(r = 0) {
    u(this, Nt).cancel(null, r);
  }
  get separateAnnots() {
    const {
      separateAnnots: r
    } = u(this, Nt).operatorList;
    if (!r)
      return !1;
    const {
      annotationCanvasMap: e
    } = u(this, Nt);
    return r.form || r.canvas && (e == null ? void 0 : e.size) > 0;
  }
}
Nt = new WeakMap();
var Vt, Pi;
const N2 = class {
  constructor({
    callback: r,
    params: e,
    objs: a,
    commonObjs: t,
    annotationCanvasMap: i,
    operatorList: A,
    pageIndex: n,
    canvasFactory: o,
    filterFactory: f,
    useRequestAnimationFrame: l = !1,
    pdfBug: c = !1,
    pageColors: h = null
  }) {
    E(this, Vt, null);
    this.callback = r, this.params = e, this.objs = a, this.commonObjs = t, this.annotationCanvasMap = i, this.operatorListIdx = null, this.operatorList = A, this._pageIndex = n, this.canvasFactory = o, this.filterFactory = f, this._pdfBug = c, this.pageColors = h, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = l === !0 && typeof window < "u", this.cancelled = !1, this.capability = Promise.withResolvers(), this.task = new _v(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = e.canvasContext.canvas;
  }
  get completed() {
    return this.capability.promise.catch(function() {
    });
  }
  initializeGraphics({
    transparency: r = !1,
    optionalContentConfig: e
  }) {
    var n, o;
    if (this.cancelled)
      return;
    if (this._canvas) {
      if (u(N2, Pi).has(this._canvas))
        throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
      u(N2, Pi).add(this._canvas);
    }
    this._pdfBug && ((n = globalThis.StepperManager) != null && n.enabled) && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
    const {
      canvasContext: a,
      viewport: t,
      transform: i,
      background: A
    } = this.params;
    this.gfx = new L2(a, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
      optionalContentConfig: e
    }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
      transform: i,
      viewport: t,
      transparency: r,
      background: A
    }), this.operatorListIdx = 0, this.graphicsReady = !0, (o = this.graphicsReadyCallback) == null || o.call(this);
  }
  cancel(r = null, e = 0) {
    var a;
    this.running = !1, this.cancelled = !0, (a = this.gfx) == null || a.endDrawing(), u(this, Vt) && (window.cancelAnimationFrame(u(this, Vt)), R(this, Vt, null)), u(N2, Pi).delete(this._canvas), this.callback(r || new yh(`Rendering cancelled, page ${this._pageIndex + 1}`, e));
  }
  operatorListChanged() {
    var r;
    if (!this.graphicsReady) {
      this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound);
      return;
    }
    (r = this.stepper) == null || r.updateOperatorList(this.operatorList), !this.running && this._continue();
  }
  _continue() {
    this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
  }
  _scheduleNext() {
    this._useRequestAnimationFrame ? R(this, Vt, window.requestAnimationFrame(() => {
      R(this, Vt, null), this._nextBound().catch(this._cancelBound);
    })) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), u(N2, Pi).delete(this._canvas), this.callback())));
  }
};
let i1 = N2;
Vt = new WeakMap(), Pi = new WeakMap(), E(i1, Pi, /* @__PURE__ */ new WeakSet());
const Ev = "4.4.168", Cv = "19fbc8998";
function O4(s) {
  return Math.floor(Math.max(0, Math.min(1, s)) * 255).toString(16).padStart(2, "0");
}
function wn(s) {
  return Math.max(0, Math.min(255, 255 * s));
}
class L4 {
  static CMYK_G([r, e, a, t]) {
    return ["G", 1 - Math.min(1, 0.3 * r + 0.59 * a + 0.11 * e + t)];
  }
  static G_CMYK([r]) {
    return ["CMYK", 0, 0, 0, 1 - r];
  }
  static G_RGB([r]) {
    return ["RGB", r, r, r];
  }
  static G_rgb([r]) {
    return r = wn(r), [r, r, r];
  }
  static G_HTML([r]) {
    const e = O4(r);
    return `#${e}${e}${e}`;
  }
  static RGB_G([r, e, a]) {
    return ["G", 0.3 * r + 0.59 * e + 0.11 * a];
  }
  static RGB_rgb(r) {
    return r.map(wn);
  }
  static RGB_HTML(r) {
    return `#${r.map(O4).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([r, e, a, t]) {
    return ["RGB", 1 - Math.min(1, r + t), 1 - Math.min(1, a + t), 1 - Math.min(1, e + t)];
  }
  static CMYK_rgb([r, e, a, t]) {
    return [wn(1 - Math.min(1, r + t)), wn(1 - Math.min(1, a + t)), wn(1 - Math.min(1, e + t))];
  }
  static CMYK_HTML(r) {
    const e = this.CMYK_RGB(r).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([r, e, a]) {
    const t = 1 - r, i = 1 - e, A = 1 - a, n = Math.min(t, i, A);
    return ["CMYK", t, i, A, n];
  }
}
class Vb {
  static setupStorage(r, e, a, t, i) {
    const A = t.getValue(e, {
      value: null
    });
    switch (a.name) {
      case "textarea":
        if (A.value !== null && (r.textContent = A.value), i === "print")
          break;
        r.addEventListener("input", (n) => {
          t.setValue(e, {
            value: n.target.value
          });
        });
        break;
      case "input":
        if (a.attributes.type === "radio" || a.attributes.type === "checkbox") {
          if (A.value === a.attributes.xfaOn ? r.setAttribute("checked", !0) : A.value === a.attributes.xfaOff && r.removeAttribute("checked"), i === "print")
            break;
          r.addEventListener("change", (n) => {
            t.setValue(e, {
              value: n.target.checked ? n.target.getAttribute("xfaOn") : n.target.getAttribute("xfaOff")
            });
          });
        } else {
          if (A.value !== null && r.setAttribute("value", A.value), i === "print")
            break;
          r.addEventListener("input", (n) => {
            t.setValue(e, {
              value: n.target.value
            });
          });
        }
        break;
      case "select":
        if (A.value !== null) {
          r.setAttribute("value", A.value);
          for (const n of a.children)
            n.attributes.value === A.value ? n.attributes.selected = !0 : n.attributes.hasOwnProperty("selected") && delete n.attributes.selected;
        }
        r.addEventListener("input", (n) => {
          const o = n.target.options, f = o.selectedIndex === -1 ? "" : o[o.selectedIndex].value;
          t.setValue(e, {
            value: f
          });
        });
        break;
    }
  }
  static setAttributes({
    html: r,
    element: e,
    storage: a = null,
    intent: t,
    linkService: i
  }) {
    const {
      attributes: A
    } = e, n = r instanceof HTMLAnchorElement;
    A.type === "radio" && (A.name = `${A.name}-${t}`);
    for (const [o, f] of Object.entries(A))
      if (f != null)
        switch (o) {
          case "class":
            f.length && r.setAttribute(o, f.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            r.setAttribute("data-element-id", f);
            break;
          case "style":
            Object.assign(r.style, f);
            break;
          case "textContent":
            r.textContent = f;
            break;
          default:
            (!n || o !== "href" && o !== "newWindow") && r.setAttribute(o, f);
        }
    n && i.addLinkAttributes(r, A.href, A.newWindow), a && A.dataId && this.setupStorage(r, A.dataId, e, a);
  }
  static render(r) {
    var c, h;
    const e = r.annotationStorage, a = r.linkService, t = r.xfaHtml, i = r.intent || "display", A = document.createElement(t.name);
    t.attributes && this.setAttributes({
      html: A,
      element: t,
      intent: i,
      linkService: a
    });
    const n = i !== "richText", o = r.div;
    if (o.append(A), r.viewport) {
      const d = `matrix(${r.viewport.transform.join(",")})`;
      o.style.transform = d;
    }
    n && o.setAttribute("class", "xfaLayer xfaFont");
    const f = [];
    if (t.children.length === 0) {
      if (t.value) {
        const d = document.createTextNode(t.value);
        A.append(d), n && Jn.shouldBuildText(t.name) && f.push(d);
      }
      return {
        textDivs: f
      };
    }
    const l = [[t, -1, A]];
    for (; l.length > 0; ) {
      const [d, b, g] = l.at(-1);
      if (b + 1 === d.children.length) {
        l.pop();
        continue;
      }
      const v = d.children[++l.at(-1)[1]];
      if (v === null)
        continue;
      const {
        name: m
      } = v;
      if (m === "#text") {
        const k = document.createTextNode(v.value);
        f.push(k), g.append(k);
        continue;
      }
      const w = (c = v == null ? void 0 : v.attributes) != null && c.xmlns ? document.createElementNS(v.attributes.xmlns, m) : document.createElement(m);
      if (g.append(w), v.attributes && this.setAttributes({
        html: w,
        element: v,
        storage: e,
        intent: i,
        linkService: a
      }), ((h = v.children) == null ? void 0 : h.length) > 0)
        l.push([v, -1, w]);
      else if (v.value) {
        const k = document.createTextNode(v.value);
        n && Jn.shouldBuildText(m) && f.push(k), w.append(k);
      }
    }
    for (const d of o.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
      d.setAttribute("readOnly", !0);
    return {
      textDivs: f
    };
  }
  static update(r) {
    const e = `matrix(${r.viewport.transform.join(",")})`;
    r.div.style.transform = e, r.div.hidden = !1;
  }
}
const wf = 1e3, Bv = 9, p2 = /* @__PURE__ */ new WeakSet();
function dt(s) {
  return {
    width: s[2] - s[0],
    height: s[3] - s[1]
  };
}
class Zv {
  static create(r) {
    switch (r.data.annotationType) {
      case Fr.LINK:
        return new Pb(r);
      case Fr.TEXT:
        return new Rv(r);
      case Fr.WIDGET:
        switch (r.data.fieldType) {
          case "Tx":
            return new Iv(r);
          case "Btn":
            return r.data.radioButton ? new Yb(r) : r.data.checkBox ? new Fv(r) : new Wv(r);
          case "Ch":
            return new xv(r);
          case "Sig":
            return new Sv(r);
        }
        return new Z2(r);
      case Fr.POPUP:
        return new Nc(r);
      case Fr.FREETEXT:
        return new Qb(r);
      case Fr.LINE:
        return new Tv(r);
      case Fr.SQUARE:
        return new Xv(r);
      case Fr.CIRCLE:
        return new Mv(r);
      case Fr.POLYLINE:
        return new Jb(r);
      case Fr.CARET:
        return new Nv(r);
      case Fr.INK:
        return new Kb(r);
      case Fr.POLYGON:
        return new Dv(r);
      case Fr.HIGHLIGHT:
        return new Vv(r);
      case Fr.UNDERLINE:
        return new Pv(r);
      case Fr.SQUIGGLY:
        return new Ov(r);
      case Fr.STRIKEOUT:
        return new Lv(r);
      case Fr.STAMP:
        return new qb(r);
      case Fr.FILEATTACHMENT:
        return new Yv(r);
      default:
        return new Rr(r);
    }
  }
}
var Oi, _A, EA, ns, Dc;
const Xh = class {
  constructor(r, {
    isRenderable: e = !1,
    ignoreBorder: a = !1,
    createQuadrilaterals: t = !1
  } = {}) {
    E(this, ns);
    E(this, Oi, null);
    E(this, _A, !1);
    E(this, EA, null);
    this.isRenderable = e, this.data = r.data, this.layer = r.layer, this.linkService = r.linkService, this.downloadManager = r.downloadManager, this.imageResourcesPath = r.imageResourcesPath, this.renderForms = r.renderForms, this.svgFactory = r.svgFactory, this.annotationStorage = r.annotationStorage, this.enableScripting = r.enableScripting, this.hasJSActions = r.hasJSActions, this._fieldObjects = r.fieldObjects, this.parent = r.parent, e && (this.container = this._createContainer(a)), t && this._createQuadrilaterals();
  }
  static _hasPopupData({
    titleObj: r,
    contentsObj: e,
    richText: a
  }) {
    return !!(r != null && r.str || e != null && e.str || a != null && a.str);
  }
  get hasPopupData() {
    return Xh._hasPopupData(this.data);
  }
  updateEdited(r) {
    var a;
    if (!this.container)
      return;
    u(this, Oi) || R(this, Oi, {
      rect: this.data.rect.slice(0)
    });
    const {
      rect: e
    } = r;
    e && S(this, ns, Dc).call(this, e), (a = u(this, EA)) == null || a.popup.updateEdited(r);
  }
  resetEdited() {
    var r;
    u(this, Oi) && (S(this, ns, Dc).call(this, u(this, Oi).rect), (r = u(this, EA)) == null || r.popup.resetEdited(), R(this, Oi, null));
  }
  _createContainer(r) {
    const {
      data: e,
      parent: {
        page: a,
        viewport: t
      }
    } = this, i = document.createElement("section");
    i.setAttribute("data-annotation-id", e.id), this instanceof Z2 || (i.tabIndex = wf);
    const {
      style: A
    } = i;
    if (A.zIndex = this.parent.zIndex++, e.popupRef && i.setAttribute("aria-haspopup", "dialog"), e.alternativeText && (i.title = e.alternativeText), e.noRotate && i.classList.add("norotate"), !e.rect || this instanceof Nc) {
      const {
        rotation: g
      } = e;
      return !e.hasOwnCanvas && g !== 0 && this.setRotation(g, i), i;
    }
    const {
      width: n,
      height: o
    } = dt(e.rect);
    if (!r && e.borderStyle.width > 0) {
      A.borderWidth = `${e.borderStyle.width}px`;
      const g = e.borderStyle.horizontalCornerRadius, v = e.borderStyle.verticalCornerRadius;
      if (g > 0 || v > 0) {
        const w = `calc(${g}px * var(--scale-factor)) / calc(${v}px * var(--scale-factor))`;
        A.borderRadius = w;
      } else if (this instanceof Yb) {
        const w = `calc(${n}px * var(--scale-factor)) / calc(${o}px * var(--scale-factor))`;
        A.borderRadius = w;
      }
      switch (e.borderStyle.style) {
        case mn.SOLID:
          A.borderStyle = "solid";
          break;
        case mn.DASHED:
          A.borderStyle = "dashed";
          break;
        case mn.BEVELED:
          Q0("Unimplemented border style: beveled");
          break;
        case mn.INSET:
          Q0("Unimplemented border style: inset");
          break;
        case mn.UNDERLINE:
          A.borderBottomStyle = "solid";
          break;
      }
      const m = e.borderColor || null;
      m ? (R(this, _A, !0), A.borderColor = T0.makeHexColor(m[0] | 0, m[1] | 0, m[2] | 0)) : A.borderWidth = 0;
    }
    const f = T0.normalizeRect([e.rect[0], a.view[3] - e.rect[1] + a.view[1], e.rect[2], a.view[3] - e.rect[3] + a.view[1]]), {
      pageWidth: l,
      pageHeight: c,
      pageX: h,
      pageY: d
    } = t.rawDims;
    A.left = `${100 * (f[0] - h) / l}%`, A.top = `${100 * (f[1] - d) / c}%`;
    const {
      rotation: b
    } = e;
    return e.hasOwnCanvas || b === 0 ? (A.width = `${100 * n / l}%`, A.height = `${100 * o / c}%`) : this.setRotation(b, i), i;
  }
  setRotation(r, e = this.container) {
    if (!this.data.rect)
      return;
    const {
      pageWidth: a,
      pageHeight: t
    } = this.parent.viewport.rawDims, {
      width: i,
      height: A
    } = dt(this.data.rect);
    let n, o;
    r % 180 === 0 ? (n = 100 * i / a, o = 100 * A / t) : (n = 100 * A / a, o = 100 * i / t), e.style.width = `${n}%`, e.style.height = `${o}%`, e.setAttribute("data-main-rotation", (360 - r) % 360);
  }
  get _commonActions() {
    const r = (e, a, t) => {
      const i = t.detail[e], A = i[0], n = i.slice(1);
      t.target.style[a] = L4[`${A}_HTML`](n), this.annotationStorage.setValue(this.data.id, {
        [a]: L4[`${A}_rgb`](n)
      });
    };
    return ar(this, "_commonActions", {
      display: (e) => {
        const {
          display: a
        } = e.detail, t = a % 2 === 1;
        this.container.style.visibility = t ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noView: t,
          noPrint: a === 1 || a === 2
        });
      },
      print: (e) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !e.detail.print
        });
      },
      hidden: (e) => {
        const {
          hidden: a
        } = e.detail;
        this.container.style.visibility = a ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
          noPrint: a,
          noView: a
        });
      },
      focus: (e) => {
        setTimeout(() => e.target.focus({
          preventScroll: !1
        }), 0);
      },
      userName: (e) => {
        e.target.title = e.detail.userName;
      },
      readonly: (e) => {
        e.target.disabled = e.detail.readonly;
      },
      required: (e) => {
        this._setRequired(e.target, e.detail.required);
      },
      bgColor: (e) => {
        r("bgColor", "backgroundColor", e);
      },
      fillColor: (e) => {
        r("fillColor", "backgroundColor", e);
      },
      fgColor: (e) => {
        r("fgColor", "color", e);
      },
      textColor: (e) => {
        r("textColor", "color", e);
      },
      borderColor: (e) => {
        r("borderColor", "borderColor", e);
      },
      strokeColor: (e) => {
        r("strokeColor", "borderColor", e);
      },
      rotation: (e) => {
        const a = e.detail.rotation;
        this.setRotation(a), this.annotationStorage.setValue(this.data.id, {
          rotation: a
        });
      }
    });
  }
  _dispatchEventFromSandbox(r, e) {
    const a = this._commonActions;
    for (const t of Object.keys(e.detail)) {
      const i = r[t] || a[t];
      i == null || i(e);
    }
  }
  _setDefaultPropertiesFromJS(r) {
    if (!this.enableScripting)
      return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e)
      return;
    const a = this._commonActions;
    for (const [t, i] of Object.entries(e)) {
      const A = a[t];
      if (A) {
        const n = {
          detail: {
            [t]: i
          },
          target: r
        };
        A(n), delete e[t];
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container)
      return;
    const {
      quadPoints: r
    } = this.data;
    if (!r)
      return;
    const [e, a, t, i] = this.data.rect.map((g) => Math.fround(g));
    if (r.length === 8) {
      const [g, v, m, w] = r.subarray(2, 6);
      if (t === g && i === v && e === m && a === w)
        return;
    }
    const {
      style: A
    } = this.container;
    let n;
    if (u(this, _A)) {
      const {
        borderColor: g,
        borderWidth: v
      } = A;
      A.borderWidth = 0, n = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${g}" stroke-width="${v}">`], this.container.classList.add("hasBorder");
    }
    const o = t - e, f = i - a, {
      svgFactory: l
    } = this, c = l.createElement("svg");
    c.classList.add("quadrilateralsContainer"), c.setAttribute("width", 0), c.setAttribute("height", 0);
    const h = l.createElement("defs");
    c.append(h);
    const d = l.createElement("clipPath"), b = `clippath_${this.data.id}`;
    d.setAttribute("id", b), d.setAttribute("clipPathUnits", "objectBoundingBox"), h.append(d);
    for (let g = 2, v = r.length; g < v; g += 8) {
      const m = r[g], w = r[g + 1], k = r[g + 2], C = r[g + 3], y = l.createElement("rect"), B = (k - e) / o, F = (i - w) / f, G = (m - k) / o, V = (w - C) / f;
      y.setAttribute("x", B), y.setAttribute("y", F), y.setAttribute("width", G), y.setAttribute("height", V), d.append(y), n == null || n.push(`<rect vector-effect="non-scaling-stroke" x="${B}" y="${F}" width="${G}" height="${V}"/>`);
    }
    u(this, _A) && (n.push("</g></svg>')"), A.backgroundImage = n.join("")), this.container.append(c), this.container.style.clipPath = `url(#${b})`;
  }
  _createPopup() {
    const {
      container: r,
      data: e
    } = this;
    r.setAttribute("aria-haspopup", "dialog");
    const a = R(this, EA, new Nc({
      data: {
        color: e.color,
        titleObj: e.titleObj,
        modificationDate: e.modificationDate,
        contentsObj: e.contentsObj,
        richText: e.richText,
        parentRect: e.rect,
        borderStyle: 0,
        id: `popup_${e.id}`,
        rotation: e.rotation
      },
      parent: this.parent,
      elements: [this]
    }));
    this.parent.div.append(a.render());
  }
  render() {
    hr("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(r, e = null) {
    const a = [];
    if (this._fieldObjects) {
      const t = this._fieldObjects[r];
      if (t)
        for (const {
          page: i,
          id: A,
          exportValues: n
        } of t) {
          if (i === -1 || A === e)
            continue;
          const o = typeof n == "string" ? n : null, f = document.querySelector(`[data-element-id="${A}"]`);
          if (f && !p2.has(f)) {
            Q0(`_getElementsByName - element not allowed: ${A}`);
            continue;
          }
          a.push({
            id: A,
            exportValue: o,
            domElement: f
          });
        }
      return a;
    }
    for (const t of document.getElementsByName(r)) {
      const {
        exportValue: i
      } = t, A = t.getAttribute("data-element-id");
      A !== e && p2.has(t) && a.push({
        id: A,
        exportValue: i,
        domElement: t
      });
    }
    return a;
  }
  show() {
    var r;
    this.container && (this.container.hidden = !1), (r = this.popup) == null || r.maybeShow();
  }
  hide() {
    var r;
    this.container && (this.container.hidden = !0), (r = this.popup) == null || r.forceHide();
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const r = this.getElementsToTriggerPopup();
    if (Array.isArray(r))
      for (const e of r)
        e.classList.add("highlightArea");
    else
      r.classList.add("highlightArea");
  }
  get _isEditable() {
    return !1;
  }
  _editOnDoubleClick() {
    if (!this._isEditable)
      return;
    const {
      annotationEditorType: r,
      data: {
        id: e
      }
    } = this;
    this.container.addEventListener("dblclick", () => {
      var a;
      (a = this.linkService.eventBus) == null || a.dispatch("switchannotationeditormode", {
        source: this,
        mode: r,
        editId: e
      });
    });
  }
};
let Rr = Xh;
Oi = new WeakMap(), _A = new WeakMap(), EA = new WeakMap(), ns = new WeakSet(), Dc = function(r) {
  const {
    container: {
      style: e
    },
    data: {
      rect: a,
      rotation: t
    },
    parent: {
      viewport: {
        rawDims: {
          pageWidth: i,
          pageHeight: A,
          pageX: n,
          pageY: o
        }
      }
    }
  } = this;
  a == null || a.splice(0, 4, ...r);
  const {
    width: f,
    height: l
  } = dt(r);
  e.left = `${100 * (r[0] - n) / i}%`, e.top = `${100 * (A - r[3] + o) / A}%`, t === 0 ? (e.width = `${100 * f / i}%`, e.height = `${100 * l / A}%`) : this.setRotation(t);
};
var Qa, ni, dl, Ob, bl, Lb;
class Pb extends Rr {
  constructor(e, a = null) {
    super(e, {
      isRenderable: !0,
      ignoreBorder: !!(a != null && a.ignoreBorder),
      createQuadrilaterals: !0
    });
    E(this, Qa);
    E(this, dl);
    E(this, bl);
    this.isTooltipOnly = e.data.isTooltipOnly;
  }
  render() {
    const {
      data: e,
      linkService: a
    } = this, t = document.createElement("a");
    t.setAttribute("data-element-id", e.id);
    let i = !1;
    return e.url ? (a.addLinkAttributes(t, e.url, e.newWindow), i = !0) : e.action ? (this._bindNamedAction(t, e.action), i = !0) : e.attachment ? (S(this, dl, Ob).call(this, t, e.attachment, e.attachmentDest), i = !0) : e.setOCGState ? (S(this, bl, Lb).call(this, t, e.setOCGState), i = !0) : e.dest ? (this._bindLink(t, e.dest), i = !0) : (e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(t, e), i = !0), e.resetForm ? (this._bindResetFormAction(t, e.resetForm), i = !0) : this.isTooltipOnly && !i && (this._bindLink(t, ""), i = !0)), this.container.classList.add("linkAnnotation"), i && this.container.append(t), this.container;
  }
  _bindLink(e, a) {
    e.href = this.linkService.getDestinationHash(a), e.onclick = () => (a && this.linkService.goToDestination(a), !1), (a || a === "") && S(this, Qa, ni).call(this);
  }
  _bindNamedAction(e, a) {
    e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeNamedAction(a), !1), S(this, Qa, ni).call(this);
  }
  _bindJSAction(e, a) {
    e.href = this.linkService.getAnchorUrl("");
    const t = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
    for (const i of Object.keys(a.actions)) {
      const A = t.get(i);
      A && (e[A] = () => {
        var n;
        return (n = this.linkService.eventBus) == null || n.dispatch("dispatcheventinsandbox", {
          source: this,
          detail: {
            id: a.id,
            name: i
          }
        }), !1;
      });
    }
    e.onclick || (e.onclick = () => !1), S(this, Qa, ni).call(this);
  }
  _bindResetFormAction(e, a) {
    const t = e.onclick;
    if (t || (e.href = this.linkService.getAnchorUrl("")), S(this, Qa, ni).call(this), !this._fieldObjects) {
      Q0('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), t || (e.onclick = () => !1);
      return;
    }
    e.onclick = () => {
      var c;
      t == null || t();
      const {
        fields: i,
        refs: A,
        include: n
      } = a, o = [];
      if (i.length !== 0 || A.length !== 0) {
        const h = new Set(A);
        for (const d of i) {
          const b = this._fieldObjects[d] || [];
          for (const {
            id: g
          } of b)
            h.add(g);
        }
        for (const d of Object.values(this._fieldObjects))
          for (const b of d)
            h.has(b.id) === n && o.push(b);
      } else
        for (const h of Object.values(this._fieldObjects))
          o.push(...h);
      const f = this.annotationStorage, l = [];
      for (const h of o) {
        const {
          id: d
        } = h;
        switch (l.push(d), h.type) {
          case "text": {
            const g = h.defaultValue || "";
            f.setValue(d, {
              value: g
            });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const g = h.defaultValue === h.exportValues;
            f.setValue(d, {
              value: g
            });
            break;
          }
          case "combobox":
          case "listbox": {
            const g = h.defaultValue || "";
            f.setValue(d, {
              value: g
            });
            break;
          }
          default:
            continue;
        }
        const b = document.querySelector(`[data-element-id="${d}"]`);
        if (b) {
          if (!p2.has(b)) {
            Q0(`_bindResetFormAction - element not allowed: ${d}`);
            continue;
          }
        } else
          continue;
        b.dispatchEvent(new Event("resetform"));
      }
      return this.enableScripting && ((c = this.linkService.eventBus) == null || c.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: "app",
          ids: l,
          name: "ResetForm"
        }
      })), !1;
    };
  }
}
Qa = new WeakSet(), ni = function() {
  this.container.setAttribute("data-internal-link", "");
}, dl = new WeakSet(), Ob = function(e, a, t = null) {
  e.href = this.linkService.getAnchorUrl(""), a.description && (e.title = a.description), e.onclick = () => {
    var i;
    return (i = this.downloadManager) == null || i.openOrDownloadData(a.content, a.filename, t), !1;
  }, S(this, Qa, ni).call(this);
}, bl = new WeakSet(), Lb = function(e, a) {
  e.href = this.linkService.getAnchorUrl(""), e.onclick = () => (this.linkService.executeSetOCGState(a), !1), S(this, Qa, ni).call(this);
};
class Rv extends Rr {
  constructor(r) {
    super(r, {
      isRenderable: !0
    });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const r = document.createElement("img");
    return r.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", r.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), r.setAttribute("data-l10n-args", JSON.stringify({
      type: this.data.name
    })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(r), this.container;
  }
}
class Z2 extends Rr {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(r) {
    var e;
    this.data.hasOwnCanvas && (((e = r.previousSibling) == null ? void 0 : e.nodeName) === "CANVAS" && (r.previousSibling.hidden = !0), r.hidden = !1);
  }
  _getKeyModifier(r) {
    return be.platform.isMac ? r.metaKey : r.ctrlKey;
  }
  _setEventListener(r, e, a, t, i) {
    a.includes("mouse") ? r.addEventListener(a, (A) => {
      var n;
      (n = this.linkService.eventBus) == null || n.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: t,
          value: i(A),
          shift: A.shiftKey,
          modifier: this._getKeyModifier(A)
        }
      });
    }) : r.addEventListener(a, (A) => {
      var n;
      if (a === "blur") {
        if (!e.focused || !A.relatedTarget)
          return;
        e.focused = !1;
      } else if (a === "focus") {
        if (e.focused)
          return;
        e.focused = !0;
      }
      i && ((n = this.linkService.eventBus) == null || n.dispatch("dispatcheventinsandbox", {
        source: this,
        detail: {
          id: this.data.id,
          name: t,
          value: i(A)
        }
      }));
    });
  }
  _setEventListeners(r, e, a, t) {
    var i, A, n;
    for (const [o, f] of a)
      (f === "Action" || (i = this.data.actions) != null && i[f]) && ((f === "Focus" || f === "Blur") && (e || (e = {
        focused: !1
      })), this._setEventListener(r, e, o, f, t), f === "Focus" && !((A = this.data.actions) != null && A.Blur) ? this._setEventListener(r, e, "blur", "Blur", null) : f === "Blur" && !((n = this.data.actions) != null && n.Focus) && this._setEventListener(r, e, "focus", "Focus", null));
  }
  _setBackgroundColor(r) {
    const e = this.data.backgroundColor || null;
    r.style.backgroundColor = e === null ? "transparent" : T0.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(r) {
    const e = ["left", "center", "right"], {
      fontColor: a
    } = this.data.defaultAppearanceData, t = this.data.defaultAppearanceData.fontSize || Bv, i = r.style;
    let A;
    const n = 2, o = (f) => Math.round(10 * f) / 10;
    if (this.data.multiLine) {
      const f = Math.abs(this.data.rect[3] - this.data.rect[1] - n), l = Math.round(f / (Yu * t)) || 1, c = f / l;
      A = Math.min(t, o(c / Yu));
    } else {
      const f = Math.abs(this.data.rect[3] - this.data.rect[1] - n);
      A = Math.min(t, o(f / Yu));
    }
  }
  _setRequired(r, e) {
  }
}
class Iv extends Z2 {
  constructor(r) {
  }
}
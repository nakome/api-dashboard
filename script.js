function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import { c as _c } from "react/compiler-runtime";
import React, { useState, useEffect, Fragment } from "react";
import { createPortal } from "react-dom";
import { Home as HomeIcon, LogOut as LogOutIcon, Menu as MenuIcon, X as XIcon, Plus as PlusIcon, Edit as EditIcon, Trash2 as Trash2Icon, List as ListIcon, Sun as SunIcon, Moon as MoonIcon, Laptop as LaptopIcon, Settings as SettingsIcon } from "lucide-react";

// Incluir @custom-variant dark (&:where(.dark, .dark *)); en el css

// Clase ApiClient genérica para interactuar con la API REST
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var ApiClient = /*#__PURE__*/function () {
  function ApiClient(baseUrl) {
    var token = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, ApiClient);
    this.baseUrl = baseUrl;
    this.token = token;
  }
  return _createClass(ApiClient, [{
    key: "setToken",
    value: function setToken(token) {
      this.token = token;
    }
  }, {
    key: "request",
    value: function () {
      var _request = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(endpoint) {
        var options,
          headers,
          response,
          errorData,
          text,
          _args = arguments;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              options = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              _context.prev = 1;
              headers = _objectSpread({}, options.headers);
              if (this.token) {
                headers["Authorization"] = this.token;
              }
              _context.next = 6;
              return fetch("".concat(this.baseUrl).concat(endpoint), _objectSpread(_objectSpread({}, options), {}, {
                headers: headers
              }));
            case 6:
              response = _context.sent;
              if (response.ok) {
                _context.next = 19;
                break;
              }
              errorData = {};
              _context.prev = 9;
              _context.next = 12;
              return response.json();
            case 12:
              errorData = _context.sent;
              _context.next = 18;
              break;
            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](9);
              errorData = {
                message: response.statusText
              };
            case 18:
              throw new Error("HTTP error! Status: ".concat(response.status, ". Message: ").concat(errorData.message || "No message provided."));
            case 19:
              if (!(response.status === 204)) {
                _context.next = 21;
                break;
              }
              return _context.abrupt("return", null);
            case 21:
              _context.next = 23;
              return response.text();
            case 23:
              text = _context.sent;
              return _context.abrupt("return", text ? JSON.parse(text) : {});
            case 27:
              _context.prev = 27;
              _context.t1 = _context["catch"](1);
              console.error("Fetch error:", _context.t1);
              throw _context.t1;
            case 31:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 27], [9, 15]]);
      }));
      function request(_x) {
        return _request.apply(this, arguments);
      }
      return request;
    }() // Métodos genéricos para cualquier entidad
  }, {
    key: "getCollections",
    value: function getCollections() {
      return this.request("/");
    }
  }, {
    key: "getCollection",
    value: function getCollection(entity) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var query = new URLSearchParams(params).toString();
      return this.request("/".concat(entity).concat(query ? "?" + query : ""));
    }
  }, {
    key: "getItem",
    value: function getItem(entity, id) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var query = new URLSearchParams(params).toString();
      return this.request("/".concat(entity, "/").concat(id).concat(query ? "?" + query : ""));
    }
  }, {
    key: "createItem",
    value: function createItem(entity, data) {
      return this.request("/".concat(entity), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    }
  }, {
    key: "updateItem",
    value: function updateItem(entity, id, data) {
      var partial = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var endpoint = id !== null ? "/".concat(entity, "/").concat(id) : "/".concat(entity);
      return this.request(endpoint, {
        method: partial ? "PATCH" : "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    }
  }, {
    key: "deleteItem",
    value: function deleteItem(entity, id) {
      return this.request("/".concat(entity, "/").concat(id), {
        method: "DELETE"
      });
    }
  }]);
}(); // URL base de la API
var API_BASE_URL = "https://monchovarela.es/_proyectos/api/v6/api";
var apiClient = new ApiClient(API_BASE_URL);

// Componente para la notificación
var Notification = function Notification(t0) {
  var $ = _c(9);
  var message = t0.message,
    type = t0.type,
    onClose = t0.onClose;
  var bgColor = type === "success" ? "border-green-500" : "border-red-500";
  var t1 = "".concat(bgColor, " bg-slate-800 border-l-6 text-white p-4 rounded-sm shadow-lg flex items-center space-x-4 animate-fade-in-up transition-transform duration-300 transform-gpu");
  var t2;
  if ($[0] !== message) {
    t2 = /*#__PURE__*/_jsx("span", {
      children: message
    });
    $[0] = message;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  var t3;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t3 = /*#__PURE__*/_jsx(XIcon, {
      size: 20
    });
    $[2] = t3;
  } else {
    t3 = $[2];
  }
  var t4;
  if ($[3] !== onClose) {
    t4 = /*#__PURE__*/_jsx("button", {
      onClick: onClose,
      className: "text-white opacity-75 hover:opacity-100",
      children: t3
    });
    $[3] = onClose;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  var t5;
  if ($[5] !== t1 || $[6] !== t2 || $[7] !== t4) {
    t5 = /*#__PURE__*/createPortal(/*#__PURE__*/_jsx("div", {
      className: "fixed bottom-6 right-6 z-50",
      children: /*#__PURE__*/_jsxs("div", {
        className: t1,
        children: [t2, t4]
      })
    }), document.body);
    $[5] = t1;
    $[6] = t2;
    $[7] = t4;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  return t5;
};

// Componente para la ventana modal
var Modal = function Modal(t0) {
  var $ = _c(11);
  var title = t0.title,
    onClose = t0.onClose,
    children = t0.children;
  var t1;
  if ($[0] !== title) {
    t1 = /*#__PURE__*/_jsx("h2", {
      className: "text-2xl font-bold text-slate-900 dark:text-white relative",
      children: title
    });
    $[0] = title;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  var t2;
  if ($[2] === Symbol["for"]("react.memo_cache_sentinel")) {
    t2 = /*#__PURE__*/_jsx(XIcon, {});
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  var t3;
  if ($[3] !== onClose) {
    t3 = /*#__PURE__*/_jsx("button", {
      onClick: onClose,
      className: "absolute top-4 right-4 cursor-pointer text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors",
      children: t2
    });
    $[3] = onClose;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  var t4;
  if ($[5] !== t1 || $[6] !== t3) {
    t4 = /*#__PURE__*/_jsxs("div", {
      className: "flex justify-between items-center mb-6",
      children: [t1, t3]
    });
    $[5] = t1;
    $[6] = t3;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  var t5;
  if ($[8] !== children || $[9] !== t4) {
    t5 = /*#__PURE__*/createPortal(/*#__PURE__*/_jsx("div", {
      className: "fixed inset-0 bg-black/85 bg-opacity-50 flex items-center justify-center z-40",
      children: /*#__PURE__*/_jsxs("div", {
        className: "bg-white dark:bg-slate-800 p-8 rounded-2xl w-full max-w-lg mx-4 animate-fade-in-up",
        children: [t4, children]
      })
    }), document.body);
    $[8] = children;
    $[9] = t4;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  return t5;
};

// Componente genérico para formularios
var DynamicForm = function DynamicForm(t0) {
  var $ = _c(19);
  var formData = t0.formData,
    handleChange = t0.handleChange,
    handleSubmit = t0.handleSubmit,
    isSubmitting = t0.isSubmitting;
  var t1;
  if ($[0] !== formData || $[1] !== handleChange) {
    t1 = function t1(key, value) {
      var type = typeof value === "number" ? "number" : "text";
      if (["description", "text", "bio"].includes(key)) {
        return /*#__PURE__*/_jsx("textarea", {
          name: key,
          placeholder: key.charAt(0).toUpperCase() + key.slice(1),
          value: formData[key] || "",
          onChange: handleChange,
          rows: "2",
          className: "col-span-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500",
          required: true
        }, key);
      } else {
        if (typeof value === "boolean") {
          return /*#__PURE__*/_jsxs("div", {
            className: "flex items-center col-span-2",
            children: [/*#__PURE__*/_jsx("input", {
              type: "checkbox",
              name: key,
              checked: !!formData[key],
              onChange: function onChange(e) {
                return handleChange({
                  target: {
                    name: key,
                    value: e.target.checked
                  }
                });
              },
              className: "mr-2"
            }), /*#__PURE__*/_jsx("label", {
              className: "text-slate-700 dark:text-slate-300",
              children: key.charAt(0).toUpperCase() + key.slice(1)
            })]
          }, key);
        } else {
          if (["image", "url"].includes(key)) {
            return /*#__PURE__*/_jsx("input", {
              type: "url",
              name: key,
              placeholder: key.charAt(0).toUpperCase() + key.slice(1),
              value: formData[key] || "",
              onChange: handleChange,
              className: "px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500",
              required: true
            }, key);
          } else {
            if (key === "email") {
              return /*#__PURE__*/_jsx("input", {
                type: "email",
                name: key,
                placeholder: key.charAt(0).toUpperCase() + key.slice(1),
                value: formData[key] || "",
                onChange: handleChange,
                className: "px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500",
                required: true
              }, key);
            } else {
              return /*#__PURE__*/_jsx("input", {
                type: type,
                name: key,
                placeholder: key.charAt(0).toUpperCase() + key.slice(1),
                value: formData[key] || "",
                onChange: handleChange,
                className: "px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500",
                required: true
              }, key);
            }
          }
        }
      }
    };
    $[0] = formData;
    $[1] = handleChange;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  var renderInput = t1;
  var t2;
  var t3;
  var t4;
  if ($[3] !== formData || $[4] !== handleSubmit || $[5] !== renderInput) {
    var keys = Object.keys(formData).filter(_temp);
    t4 = handleSubmit;
    t2 = "grid grid-cols-1 sm:grid-cols-2 gap-4";
    t3 = keys.map(function (key_0) {
      return renderInput(key_0, formData[key_0]);
    });
    $[3] = formData;
    $[4] = handleSubmit;
    $[5] = renderInput;
    $[6] = t2;
    $[7] = t3;
    $[8] = t4;
  } else {
    t2 = $[6];
    t3 = $[7];
    t4 = $[8];
  }
  var t5;
  if ($[9] !== t2 || $[10] !== t3) {
    t5 = /*#__PURE__*/_jsx("div", {
      className: t2,
      children: t3
    });
    $[9] = t2;
    $[10] = t3;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  var t6 = isSubmitting ? "Guardando..." : "Guardar";
  var t7;
  if ($[12] !== isSubmitting || $[13] !== t6) {
    t7 = /*#__PURE__*/_jsx("div", {
      className: "mt-6 flex justify-end space-x-4",
      children: /*#__PURE__*/_jsx("button", {
        type: "submit",
        disabled: isSubmitting,
        className: "px-6 py-2 bg-slate-900 text-white font-semibold rounded-full shadow-md hover:bg-slate-800 transition-colors duration-300 disabled:opacity-50",
        children: t6
      })
    });
    $[12] = isSubmitting;
    $[13] = t6;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  var t8;
  if ($[15] !== t4 || $[16] !== t5 || $[17] !== t7) {
    t8 = /*#__PURE__*/_jsxs("form", {
      onSubmit: t4,
      children: [t5, t7]
    });
    $[15] = t4;
    $[16] = t5;
    $[17] = t7;
    $[18] = t8;
  } else {
    t8 = $[18];
  }
  return t8;
};
var EntityList = function EntityList(t0) {
  var $ = _c(94);
  var entityName = t0.entityName,
    items = t0.items,
    handleOpenModal = t0.handleOpenModal,
    handleDelete = t0.handleDelete,
    isSubmitting = t0.isSubmitting,
    page = t0.page,
    limit = t0.limit,
    sort = t0.sort,
    order = t0.order,
    setPage = t0.setPage,
    setLimit = t0.setLimit,
    setSort = t0.setSort,
    setOrder = t0.setOrder;
  var t1;
  if ($[0] !== items) {
    t1 = function t1() {
      if (!items || items.length === 0) {
        return ["id"];
      }
      var firstItem = items[0];
      var keys = Object.keys(firstItem).filter(function (k) {
        return _typeof(firstItem[k]) !== "object" && !Array.isArray(firstItem[k]);
      });
      return ["id"].concat(_toConsumableArray(keys));
    };
    $[0] = items;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  var getSortOptions = t1;
  var renderDefaultCard;
  var t2;
  var t3;
  var t4;
  var t5;
  var t6;
  var t7;
  var t8;
  if ($[2] !== entityName || $[3] !== getSortOptions || $[4] !== handleDelete || $[5] !== handleOpenModal || $[6] !== isSubmitting || $[7] !== limit || $[8] !== setLimit || $[9] !== setPage || $[10] !== setSort || $[11] !== sort) {
    var currentSortOptions = getSortOptions();
    var _t;
    if ($[20] !== entityName || $[21] !== handleDelete || $[22] !== handleOpenModal || $[23] !== isSubmitting) {
      _t = function _t(item) {
        var keys_0 = Object.keys(item).filter(function (k_0) {
          return k_0 !== "id" && _typeof(item[k_0]) !== "object" && !Array.isArray(item[k_0]);
        });
        return /*#__PURE__*/_jsxs("div", {
          className: "border-t-5 p-5 rounded-sm shadow-md border-slate-500 bg-white dark:bg-gray-800",
          children: [/*#__PURE__*/_jsxs("h3", {
            className: "text-xl font-bold mb-2 leading-tight text-slate-900 dark:text-white",
            children: ["ID: ", item.id]
          }), keys_0.map(function (key) {
            return /*#__PURE__*/_jsxs("p", {
              className: "truncate text-sm text-slate-600 dark:text-slate-300 break-words",
              children: [/*#__PURE__*/_jsxs("span", {
                className: "font-semibold",
                children: [key.charAt(0).toUpperCase() + key.slice(1), ":"]
              }), " ", String(item[key])]
            }, key);
          }), /*#__PURE__*/_jsxs("div", {
            className: "mt-4 flex space-x-2",
            children: [/*#__PURE__*/_jsxs("button", {
              onClick: function onClick() {
                return handleOpenModal(entityName, item);
              },
              className: "px-3 py-2 text-xs bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors flex items-center",
              children: [/*#__PURE__*/_jsx(EditIcon, {
                size: 14,
                className: "mr-2"
              }), " Editar"]
            }), /*#__PURE__*/_jsxs("button", {
              onClick: function onClick() {
                return handleDelete(entityName, item.id);
              },
              className: "px-3 py-2 text-xs bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors flex items-center",
              disabled: isSubmitting,
              children: [/*#__PURE__*/_jsx(Trash2Icon, {
                size: 14,
                className: "mr-2"
              }), " Eliminar"]
            })]
          })]
        }, item.id);
      };
      $[20] = entityName;
      $[21] = handleDelete;
      $[22] = handleOpenModal;
      $[23] = isSubmitting;
      $[24] = _t;
    } else {
      _t = $[24];
    }
    renderDefaultCard = _t;
    t7 = "p-6";
    var _t2 = entityName.charAt(0).toUpperCase() + entityName.slice(1);
    var _t3;
    if ($[25] !== _t2) {
      _t3 = /*#__PURE__*/_jsx("h2", {
        className: "text-3xl font-bold mb-6 flex items-center",
        children: _t2
      });
      $[25] = _t2;
      $[26] = _t3;
    } else {
      _t3 = $[26];
    }
    var _t4 = API_BASE_URL + "/" + entityName.charAt(0) + entityName.slice(1);
    var _t5;
    if ($[27] !== _t4) {
      _t5 = /*#__PURE__*/_jsx("div", {
        className: "text-sm text-right",
        children: /*#__PURE__*/_jsx("a", {
          href: _t4,
          target: "_blank",
          className: "text-blue-500 hover:text-blue-600 dark:text-blue-400",
          children: "Ver en la API"
        })
      });
      $[27] = _t4;
      $[28] = _t5;
    } else {
      _t5 = $[28];
    }
    if ($[29] !== _t3 || $[30] !== _t5) {
      t8 = /*#__PURE__*/_jsxs("div", {
        className: "flex items-center justify-between",
        children: [_t3, _t5]
      });
      $[29] = _t3;
      $[30] = _t5;
      $[31] = t8;
    } else {
      t8 = $[31];
    }
    t5 = "flex flex-wrap items-center justify-between gap-4 mb-6";
    var _t6;
    if ($[32] !== entityName || $[33] !== handleOpenModal) {
      _t6 = function _t6() {
        return handleOpenModal(entityName);
      };
      $[32] = entityName;
      $[33] = handleOpenModal;
      $[34] = _t6;
    } else {
      _t6 = $[34];
    }
    var _t7;
    if ($[35] === Symbol["for"]("react.memo_cache_sentinel")) {
      _t7 = /*#__PURE__*/_jsx(PlusIcon, {
        size: 20,
        className: "mr-2"
      });
      $[35] = _t7;
    } else {
      _t7 = $[35];
    }
    if ($[36] !== _t6) {
      t6 = /*#__PURE__*/_jsxs("button", {
        onClick: _t6,
        className: "px-6 py-2 bg-slate-900 text-white font-semibold rounded-full shadow-md hover:bg-slate-600 transition-colors duration-300 flex items-center",
        children: [_t7, " Crear Nuevo"]
      });
      $[36] = _t6;
      $[37] = t6;
    } else {
      t6 = $[37];
    }
    t2 = "flex items-center justify-center gap-3";
    var _t8;
    if ($[38] === Symbol["for"]("react.memo_cache_sentinel")) {
      _t8 = /*#__PURE__*/_jsx("label", {
        className: "hidden lg:inline-flex text-slate-700 dark:text-slate-300  text-sm font-semibold",
        children: "L\xEDmite:"
      });
      $[38] = _t8;
    } else {
      _t8 = $[38];
    }
    var _t9;
    if ($[39] !== setLimit || $[40] !== setPage) {
      _t9 = function _t9(e) {
        setLimit(Number(e.target.value));
        setPage(1);
      };
      $[39] = setLimit;
      $[40] = setPage;
      $[41] = _t9;
    } else {
      _t9 = $[41];
    }
    var _t10;
    var _t11;
    var _t12;
    var _t13;
    if ($[42] === Symbol["for"]("react.memo_cache_sentinel")) {
      _t10 = /*#__PURE__*/_jsx("option", {
        value: "5",
        children: "5"
      });
      _t11 = /*#__PURE__*/_jsx("option", {
        value: "10",
        children: "10"
      });
      _t12 = /*#__PURE__*/_jsx("option", {
        value: "20",
        children: "20"
      });
      _t13 = /*#__PURE__*/_jsx("option", {
        value: "50",
        children: "50"
      });
      $[42] = _t10;
      $[43] = _t11;
      $[44] = _t12;
      $[45] = _t13;
    } else {
      _t10 = $[42];
      _t11 = $[43];
      _t12 = $[44];
      _t13 = $[45];
    }
    if ($[46] !== limit || $[47] !== _t9) {
      t3 = /*#__PURE__*/_jsxs("div", {
        className: "flex items-center gap-2",
        children: [_t8, /*#__PURE__*/_jsxs("select", {
          value: limit,
          onChange: _t9,
          className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          children: [_t10, _t11, _t12, _t13]
        })]
      });
      $[46] = limit;
      $[47] = _t9;
      $[48] = t3;
    } else {
      t3 = $[48];
    }
    t4 = currentSortOptions.length > 0 && /*#__PURE__*/_jsxs("div", {
      className: "flex items-center gap-2",
      children: [/*#__PURE__*/_jsx("label", {
        className: "hidden lg:inline-flex text-slate-700 dark:text-slate-300 text-sm font-semibold",
        children: "Ordenar:"
      }), /*#__PURE__*/_jsx("select", {
        value: sort,
        onChange: function onChange(e_0) {
          setSort(e_0.target.value);
          setPage(1);
        },
        className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
        children: currentSortOptions.map(_temp2)
      })]
    });
    $[2] = entityName;
    $[3] = getSortOptions;
    $[4] = handleDelete;
    $[5] = handleOpenModal;
    $[6] = isSubmitting;
    $[7] = limit;
    $[8] = setLimit;
    $[9] = setPage;
    $[10] = setSort;
    $[11] = sort;
    $[12] = renderDefaultCard;
    $[13] = t2;
    $[14] = t3;
    $[15] = t4;
    $[16] = t5;
    $[17] = t6;
    $[18] = t7;
    $[19] = t8;
  } else {
    renderDefaultCard = $[12];
    t2 = $[13];
    t3 = $[14];
    t4 = $[15];
    t5 = $[16];
    t6 = $[17];
    t7 = $[18];
    t8 = $[19];
  }
  var t9;
  if ($[49] !== order || $[50] !== setOrder || $[51] !== setPage) {
    t9 = function t9() {
      setOrder(order === "asc" ? "desc" : "asc");
      setPage(1);
    };
    $[49] = order;
    $[50] = setOrder;
    $[51] = setPage;
    $[52] = t9;
  } else {
    t9 = $[52];
  }
  var t10 = order === "asc" ? "ASC" : "DESC";
  var t11;
  if ($[53] !== t10 || $[54] !== t9) {
    t11 = /*#__PURE__*/_jsx("button", {
      onClick: t9,
      className: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
      children: t10
    });
    $[53] = t10;
    $[54] = t9;
    $[55] = t11;
  } else {
    t11 = $[55];
  }
  var t12;
  if ($[56] !== t11 || $[57] !== t2 || $[58] !== t3 || $[59] !== t4) {
    t12 = /*#__PURE__*/_jsxs("div", {
      className: t2,
      children: [t3, t4, t11]
    });
    $[56] = t11;
    $[57] = t2;
    $[58] = t3;
    $[59] = t4;
    $[60] = t12;
  } else {
    t12 = $[60];
  }
  var t13;
  if ($[61] !== t12 || $[62] !== t5 || $[63] !== t6) {
    t13 = /*#__PURE__*/_jsxs("div", {
      className: t5,
      children: [t6, t12]
    });
    $[61] = t12;
    $[62] = t5;
    $[63] = t6;
    $[64] = t13;
  } else {
    t13 = $[64];
  }
  var t14;
  if ($[65] !== items || $[66] !== renderDefaultCard) {
    t14 = items.length > 0 ? items.map(renderDefaultCard) : /*#__PURE__*/_jsx("p", {
      className: "col-span-full text-center text-slate-500 dark:text-slate-400",
      children: "No se encontraron \xEDtems."
    });
    $[65] = items;
    $[66] = renderDefaultCard;
    $[67] = t14;
  } else {
    t14 = $[67];
  }
  var t15;
  if ($[68] !== t14) {
    t15 = /*#__PURE__*/_jsx("div", {
      className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3",
      children: t14
    });
    $[68] = t14;
    $[69] = t15;
  } else {
    t15 = $[69];
  }
  var t16;
  if ($[70] !== page || $[71] !== setPage) {
    t16 = function t16() {
      return setPage(page - 1);
    };
    $[70] = page;
    $[71] = setPage;
    $[72] = t16;
  } else {
    t16 = $[72];
  }
  var t17 = page === 1;
  var t18;
  if ($[73] !== t16 || $[74] !== t17) {
    t18 = /*#__PURE__*/_jsx("button", {
      onClick: t16,
      disabled: t17,
      className: "px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-800 dark:text-white disabled:opacity-50 transition-colors hover:bg-slate-300 dark:hover:bg-slate-600",
      children: "Anterior"
    });
    $[73] = t16;
    $[74] = t17;
    $[75] = t18;
  } else {
    t18 = $[75];
  }
  var t19;
  if ($[76] !== page) {
    t19 = /*#__PURE__*/_jsxs("span", {
      className: "text-sm font-semibold text-slate-700 dark:text-slate-300",
      children: ["P\xE1gina ", page]
    });
    $[76] = page;
    $[77] = t19;
  } else {
    t19 = $[77];
  }
  var t20;
  if ($[78] !== page || $[79] !== setPage) {
    t20 = function t20() {
      return setPage(page + 1);
    };
    $[78] = page;
    $[79] = setPage;
    $[80] = t20;
  } else {
    t20 = $[80];
  }
  var t21 = items.length < limit;
  var t22;
  if ($[81] !== t20 || $[82] !== t21) {
    t22 = /*#__PURE__*/_jsx("button", {
      onClick: t20,
      disabled: t21,
      className: "px-4 py-2 bg-slate-200 dark:bg-slate-700 rounded-full text-slate-800 dark:text-white disabled:opacity-50 transition-colors hover:bg-slate-300 dark:hover:bg-slate-600",
      children: "Siguiente"
    });
    $[81] = t20;
    $[82] = t21;
    $[83] = t22;
  } else {
    t22 = $[83];
  }
  var t23;
  if ($[84] !== t18 || $[85] !== t19 || $[86] !== t22) {
    t23 = /*#__PURE__*/_jsxs("div", {
      className: "flex justify-center items-center gap-4 mt-6",
      children: [t18, t19, t22]
    });
    $[84] = t18;
    $[85] = t19;
    $[86] = t22;
    $[87] = t23;
  } else {
    t23 = $[87];
  }
  var t24;
  if ($[88] !== t13 || $[89] !== t15 || $[90] !== t23 || $[91] !== t7 || $[92] !== t8) {
    t24 = /*#__PURE__*/_jsxs("div", {
      className: t7,
      children: [t8, t13, t15, t23]
    });
    $[88] = t13;
    $[89] = t15;
    $[90] = t23;
    $[91] = t7;
    $[92] = t8;
    $[93] = t24;
  } else {
    t24 = $[93];
  }
  return t24;
};
var App = function App() {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    collections = _useState2[0],
    setCollections = _useState2[1];
  var _useState3 = useState({}),
    _useState4 = _slicedToArray(_useState3, 2),
    data = _useState4[0],
    setData = _useState4[1];
  var _useState5 = useState({}),
    _useState6 = _slicedToArray(_useState5, 2),
    profile = _useState6[0],
    setProfile = _useState6[1];
  var _useState7 = useState(true),
    _useState8 = _slicedToArray(_useState7, 2),
    loading = _useState8[0],
    setLoading = _useState8[1];
  var _useState9 = useState(null),
    _useState10 = _slicedToArray(_useState9, 2),
    error = _useState10[0],
    setError = _useState10[1];
  var _useState11 = useState(false),
    _useState12 = _slicedToArray(_useState11, 2),
    isSubmitting = _useState12[0],
    setIsSubmitting = _useState12[1];
  var _useState13 = useState(false),
    _useState14 = _slicedToArray(_useState13, 2),
    showModal = _useState14[0],
    setShowModal = _useState14[1];
  var _useState15 = useState(""),
    _useState16 = _slicedToArray(_useState15, 2),
    modalType = _useState16[0],
    setModalType = _useState16[1];
  var _useState17 = useState(null),
    _useState18 = _slicedToArray(_useState17, 2),
    editingItem = _useState18[0],
    setEditingItem = _useState18[1];
  var _useState19 = useState(null),
    _useState20 = _slicedToArray(_useState19, 2),
    notification = _useState20[0],
    setNotification = _useState20[1];
  var _useState21 = useState(""),
    _useState22 = _slicedToArray(_useState21, 2),
    activeView = _useState22[0],
    setActiveView = _useState22[1];
  var _useState23 = useState(false),
    _useState24 = _slicedToArray(_useState23, 2),
    isSidebarOpen = _useState24[0],
    setIsSidebarOpen = _useState24[1];
  var _useState25 = useState({}),
    _useState26 = _slicedToArray(_useState25, 2),
    formData = _useState26[0],
    setFormData = _useState26[1];
  var _useState27 = useState(false),
    _useState28 = _slicedToArray(_useState27, 2),
    isAuthenticated = _useState28[0],
    setIsAuthenticated = _useState28[1];
  var _useState29 = useState(""),
    _useState30 = _slicedToArray(_useState29, 2),
    token = _useState30[0],
    setToken = _useState30[1];
  var _useState31 = useState(false),
    _useState32 = _slicedToArray(_useState31, 2),
    isAuthenticating = _useState32[0],
    setIsAuthenticating = _useState32[1];

  // NUEVOS ESTADOS PARA PAGINACIÓN Y FILTROS
  var _useState33 = useState(1),
    _useState34 = _slicedToArray(_useState33, 2),
    page = _useState34[0],
    setPage = _useState34[1];
  var _useState35 = useState(10),
    _useState36 = _slicedToArray(_useState35, 2),
    limit = _useState36[0],
    setLimit = _useState36[1];
  var _useState37 = useState("id"),
    _useState38 = _slicedToArray(_useState37, 2),
    sort = _useState38[0],
    setSort = _useState38[1];
  var _useState39 = useState("desc"),
    _useState40 = _slicedToArray(_useState39, 2),
    order = _useState40[0],
    setOrder = _useState40[1];

  // NUEVO ESTADO PARA EL TEMA
  var _useState41 = useState("system"),
    _useState42 = _slicedToArray(_useState41, 2),
    theme = _useState42[0],
    setTheme = _useState42[1];

  // Función para aplicar la clase 'dark' al <html>
  var applyTheme = function applyTheme(currentTheme) {
    var root = window.document.documentElement;
    var isDark = currentTheme === "dark" || currentTheme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    root.classList.remove("light", "dark");
    root.classList.add(isDark ? "dark" : "light");
  };

  // Hook para gestionar el tema del sistema
  useEffect(function () {
    var savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme("system");
    }
  }, []);

  // Hook para actualizar el tema cuando cambia el estado
  useEffect(function () {
    if (theme) {
      applyTheme(theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  // Función para mostrar notificaciones
  var showNotification = function showNotification(message, type) {
    setNotification({
      message: message,
      type: type
    });
    setTimeout(function () {
      return setNotification(null);
    }, 3000);
  };
  var handleLogin = function handleLogin(e) {
    e.preventDefault();
    setIsAuthenticating(true);
    localStorage.setItem("auth_token", token);
    apiClient.setToken(token);
    setIsAuthenticated(true);
    setIsAuthenticating(false);
    showNotification("¡Autenticación exitosa!", "success");
  };
  var handleLogout = function handleLogout() {
    localStorage.removeItem("auth_token");
    apiClient.setToken(null);
    setIsAuthenticated(false);
    setCollections([]);
    setData({});
    setProfile({});
    setActiveView("");
    showNotification("Sesión cerrada.", "success");
  };

  // Función para obtener las entidades disponibles
  var getAvailableCollections = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var entities, collectionNames;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setLoading(true);
            setError(null);
            _context2.prev = 2;
            _context2.next = 5;
            return apiClient.getCollections();
          case 5:
            entities = _context2.sent;
            collectionNames = entities.filter(function (e_0) {
              return e_0 !== "profile";
            });
            setCollections(collectionNames);
            if (!activeView && collectionNames.length > 0) {
              setActiveView(collectionNames[0]);
            }
            _context2.next = 15;
            break;
          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](2);
            console.error("Error al obtener colecciones:", _context2.t0);
            setError("Error al obtener las colecciones. Asegúrate de que el servidor PHP esté en ejecución y accesible.");
          case 15:
            _context2.prev = 15;
            setLoading(false);
            return _context2.finish(15);
          case 18:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[2, 11, 15, 18]]);
    }));
    return function getAvailableCollections() {
      return _ref.apply(this, arguments);
    };
  }();

  // Nueva función para obtener los datos de la colección activa con filtros
  var fetchActiveCollectionData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var profileData, params, result;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (activeView) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            setLoading(true);
            setError(null);
            _context3.prev = 4;
            if (!(activeView === "profile")) {
              _context3.next = 12;
              break;
            }
            _context3.next = 8;
            return apiClient.getCollection("profile", {});
          case 8:
            profileData = _context3.sent;
            setProfile(profileData);
            _context3.next = 17;
            break;
          case 12:
            params = {
              _page: page,
              _limit: limit,
              _sort: sort,
              _order: order
            };
            _context3.next = 15;
            return apiClient.getCollection(activeView, params);
          case 15:
            result = _context3.sent;
            setData(function (prevData) {
              return _objectSpread(_objectSpread({}, prevData), {}, _defineProperty({}, activeView, result));
            });
          case 17:
            _context3.next = 24;
            break;
          case 19:
            _context3.prev = 19;
            _context3.t0 = _context3["catch"](4);
            console.error("Error fetching data for ".concat(activeView, ":"), _context3.t0);
            setError("Error al cargar los datos para ".concat(activeView, "."));
            showNotification("Error al cargar los datos para ".concat(activeView, "."), "error");
          case 24:
            _context3.prev = 24;
            setLoading(false);
            return _context3.finish(24);
          case 27:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[4, 19, 24, 27]]);
    }));
    return function fetchActiveCollectionData() {
      return _ref2.apply(this, arguments);
    };
  }();
  var handleViewChange = function handleViewChange(view) {
    setActiveView(view);
    setPage(1);
    setLimit(10);
    setSort("id");
    setOrder("desc");
    setIsSidebarOpen(false);
  };
  var handleDelete = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(entity, id) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            // Reemplazamos window.confirm con un modal
            showConfirmationModal("¿Estás seguro de que quieres eliminar este elemento?", /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    setIsSubmitting(true);
                    _context4.prev = 1;
                    _context4.next = 4;
                    return apiClient.deleteItem(entity, id);
                  case 4:
                    showNotification("\xCDtem eliminado de ".concat(entity, "."), "success");
                    fetchActiveCollectionData();
                    _context4.next = 11;
                    break;
                  case 8:
                    _context4.prev = 8;
                    _context4.t0 = _context4["catch"](1);
                    showNotification("Error al eliminar el ítem.", "error");
                  case 11:
                    _context4.prev = 11;
                    setIsSubmitting(false);
                    return _context4.finish(11);
                  case 14:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, null, [[1, 8, 11, 14]]);
            })));
          case 1:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function handleDelete(_x2, _x3) {
      return _ref3.apply(this, arguments);
    };
  }();
  var showConfirmationModal = function showConfirmationModal(message_0, onConfirm) {
    setShowModal(true);
    setModalType("confirm");
    setFormData({
      message: message_0,
      onConfirm: onConfirm
    });
  };
  var handleConfirm = function handleConfirm() {
    if (formData.onConfirm) {
      formData.onConfirm();
    }
    handleCloseModal();
  };
  var handleOpenModal = function handleOpenModal(entity_0) {
    var item = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var type_0 = item ? "edit" : "create";
    setModalType(type_0);
    setEditingItem(item);
    if (item) {
      setFormData(item);
    } else {
      var currentCollectionData = data[entity_0];
      if (currentCollectionData && currentCollectionData.length > 0) {
        var firstItem = currentCollectionData[0];
        var dynamicFormState = Object.keys(firstItem).reduce(function (acc, key) {
          if (key !== "id") {
            if (typeof firstItem[key] === "number") {
              acc[key] = 0;
            } else if (typeof firstItem[key] === "boolean") {
              acc[key] = false;
            } else {
              acc[key] = "";
            }
          }
          return acc;
        }, {});
        setFormData(dynamicFormState);
      } else {
        setFormData({});
      }
    }
    setShowModal(true);
  };
  var handleCloseModal = function handleCloseModal() {
    setShowModal(false);
    setModalType("");
    setEditingItem(null);
    setFormData({});
  };
  var handleChange = function handleChange(e_1) {
    var _e_1$target = e_1.target,
      name = _e_1$target.name,
      value = _e_1$target.value,
      type_1 = _e_1$target.type,
      checked = _e_1$target.checked;
    setFormData(function (prevData_0) {
      return _objectSpread(_objectSpread({}, prevData_0), {}, _defineProperty({}, name, type_1 === "checkbox" ? checked : value));
    });
  };
  var handleSubmit = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(e_2) {
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            e_2.preventDefault();
            setIsSubmitting(true);
            _context6.prev = 2;
            if (!(modalType === "create")) {
              _context6.next = 9;
              break;
            }
            _context6.next = 6;
            return apiClient.createItem(activeView, formData);
          case 6:
            showNotification("\xCDtem creado en ".concat(activeView, "."), "success");
            _context6.next = 12;
            break;
          case 9:
            _context6.next = 11;
            return apiClient.updateItem(activeView, editingItem.id, formData);
          case 11:
            showNotification("\xCDtem actualizado en ".concat(activeView, "."), "success");
          case 12:
            fetchActiveCollectionData(); // Recargar los datos después de la operación
            handleCloseModal();
            _context6.next = 19;
            break;
          case 16:
            _context6.prev = 16;
            _context6.t0 = _context6["catch"](2);
            showNotification("Error al guardar el ítem.", "error");
          case 19:
            _context6.prev = 19;
            setIsSubmitting(false);
            return _context6.finish(19);
          case 22:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[2, 16, 19, 22]]);
    }));
    return function handleSubmit(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();
  useEffect(function () {
    var storedToken = localStorage.getItem("auth_token");
    if (storedToken) {
      apiClient.setToken(storedToken);
      setIsAuthenticated(true);
    }
  }, []);
  useEffect(function () {
    if (isAuthenticated) {
      getAvailableCollections();
    }
  }, [isAuthenticated]);
  useEffect(function () {
    if (isAuthenticated && activeView) {
      fetchActiveCollectionData();
    }
  }, [isAuthenticated, activeView, page, limit, sort, order]);
  var renderView = function renderView() {
    if (loading) return /*#__PURE__*/_jsx("div", {
      className: "text-center py-10 text-slate-500",
      children: "Cargando..."
    });
    if (error) return /*#__PURE__*/_jsx("div", {
      className: "text-center py-10 text-red-500 font-bold",
      children: error
    });
    if (activeView === "profile") {
      return /*#__PURE__*/_jsxs("div", {
        className: "p-2",
        children: [/*#__PURE__*/_jsxs("h2", {
          className: "text-3xl font-bold mb-6 gap-3 flex items-center",
          children: [/*#__PURE__*/_jsx(SettingsIcon, {
            className: "mr-3"
          }), " Perfil"]
        }), profile && /*#__PURE__*/_jsx(Fragment, {
          children: Object.keys(profile).map(function (key_0) {
            return /*#__PURE__*/_jsxs("div", {
              className: "bg-slate-100 dark:bg-slate-700 rounded-md p-6 shadow-inner text-sm text-slate-600 dark:text-slate-300 break-words mb-2",
              children: [/*#__PURE__*/_jsxs("span", {
                className: "font-bold",
                children: [key_0.charAt(0).toUpperCase() + key_0.slice(1), ":"]
              }), " ", String(profile[key_0])]
            }, key_0);
          })
        })]
      });
    }
    if (data[activeView]) {
      return /*#__PURE__*/_jsx(EntityList, {
        entityName: activeView,
        items: data[activeView],
        handleOpenModal: handleOpenModal,
        handleDelete: handleDelete,
        isSubmitting: isSubmitting,
        page: page,
        limit: limit,
        sort: sort,
        order: order,
        setPage: setPage,
        setLimit: setLimit,
        setSort: setSort,
        setOrder: setOrder
      });
    }
    return /*#__PURE__*/_jsx("div", {
      className: "text-center py-10 text-slate-500",
      children: "Selecciona una entidad de la barra lateral."
    });
  };
  if (!isAuthenticated) {
    return /*#__PURE__*/_jsxs("div", {
      className: "flex items-center justify-center min-h-screen bg-slate-100 dark:bg-slate-900",
      children: [/*#__PURE__*/_jsxs("div", {
        className: "w-full max-w-sm p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-xl",
        children: [/*#__PURE__*/_jsx("h2", {
          className: "text-2xl font-bold text-center text-slate-900 dark:text-white mb-6",
          children: "Iniciar Sesi\xF3n"
        }), /*#__PURE__*/_jsxs("form", {
          onSubmit: handleLogin,
          className: "space-y-4",
          children: [/*#__PURE__*/_jsxs("div", {
            children: [/*#__PURE__*/_jsx("label", {
              htmlFor: "token",
              className: "block text-sm font-medium text-slate-700 dark:text-slate-300",
              children: "Token de Seguridad"
            }), /*#__PURE__*/_jsx("input", {
              type: "text",
              id: "token",
              value: token,
              onChange: function onChange(e_3) {
                return setToken(e_3.target.value);
              },
              className: "mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-slate-700 dark:border-slate-600 dark:text-white",
              placeholder: "Ingresa tu token aqu\xED...",
              required: true
            })]
          }), /*#__PURE__*/_jsx("button", {
            type: "submit",
            disabled: isAuthenticating,
            className: "w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50",
            children: isAuthenticating ? "Autenticando..." : "Ingresar"
          })]
        })]
      }), notification && /*#__PURE__*/_jsx(Notification, {
        message: notification.message,
        type: notification.type,
        onClose: function onClose() {
          return setNotification(null);
        }
      })]
    });
  }
  return /*#__PURE__*/_jsxs("div", {
    className: "flex flex-col md:flex-row min-h-screen",
    children: [/*#__PURE__*/_jsx("button", {
      onClick: function onClick() {
        return setIsSidebarOpen(!isSidebarOpen);
      },
      className: "".concat(isSidebarOpen ? "hidden" : "", " md:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-full shadow-lg"),
      children: /*#__PURE__*/_jsx(MenuIcon, {
        size: 24
      })
    }), /*#__PURE__*/_jsx("div", {
      className: "fixed inset-y-0 left-0 transform ".concat(isSidebarOpen ? "translate-x-0" : "-translate-x-full", " md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-30 w-60 bg-slate-800 shadow-xl"),
      children: /*#__PURE__*/_jsxs("div", {
        className: "p-6 flex flex-col h-full",
        children: [/*#__PURE__*/_jsxs("div", {
          className: "flex justify-between items-center mb-6 md:hidden",
          children: [/*#__PURE__*/_jsx("h1", {
            className: "text-2xl font-bold text-slate-100",
            children: "Panel"
          }), /*#__PURE__*/_jsx("button", {
            onClick: function onClick() {
              return setIsSidebarOpen(false);
            },
            className: "text-slate-400 hover:text-white",
            children: /*#__PURE__*/_jsx(XIcon, {
              size: 24
            })
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "hidden md:block",
          children: /*#__PURE__*/_jsx("h1", {
            className: "text-3xl font-bold text-slate-100 mb-8",
            children: "Panel"
          })
        }), /*#__PURE__*/_jsx("div", {
          className: "mb-8",
          children: /*#__PURE__*/_jsxs("div", {
            className: "flex justify-between gap-2 p-1 bg-slate-700 rounded-full",
            children: [/*#__PURE__*/_jsx("button", {
              onClick: function onClick() {
                return setTheme("light");
              },
              className: "w-1/3 p-2 rounded-full transition-colors duration-200 ".concat(theme === "light" ? "bg-white text-slate-900 shadow-lg" : "text-slate-300 hover:text-white"),
              title: "Modo Claro",
              children: /*#__PURE__*/_jsx(SunIcon, {
                size: 20,
                className: "mx-auto"
              })
            }), /*#__PURE__*/_jsx("button", {
              onClick: function onClick() {
                return setTheme("system");
              },
              className: "w-1/3 p-2 rounded-full transition-colors duration-200 ".concat(theme === "system" ? "bg-white text-slate-900 shadow-lg" : "text-slate-300 hover:text-white"),
              title: "Sistema",
              children: /*#__PURE__*/_jsx(LaptopIcon, {
                size: 20,
                className: "mx-auto"
              })
            }), /*#__PURE__*/_jsx("button", {
              onClick: function onClick() {
                return setTheme("dark");
              },
              className: "w-1/3 p-2 rounded-full transition-colors duration-200 ".concat(theme === "dark" ? "bg-slate-900 text-white shadow-lg" : "text-slate-300 hover:text-white"),
              title: "Modo Oscuro",
              children: /*#__PURE__*/_jsx(MoonIcon, {
                size: 20,
                className: "mx-auto"
              })
            })]
          })
        }), /*#__PURE__*/_jsxs("nav", {
          className: "flex-grow",
          children: [/*#__PURE__*/_jsx("h2", {
            className: "text-lg font-semibold text-slate-400 uppercase mb-4",
            children: "Entidades"
          }), /*#__PURE__*/_jsxs("ul", {
            className: "space-y-2 text-white",
            children: [/*#__PURE__*/_jsx("li", {
              className: "list-none",
              children: /*#__PURE__*/_jsxs("button", {
                onClick: function onClick() {
                  return handleViewChange("profile");
                },
                className: "w-full text-left flex items-center p-3 rounded-md transition-colors duration-200 ".concat(activeView === "profile" ? "bg-blue-600 text-white shadow-md" : "hover:bg-slate-700"),
                children: [/*#__PURE__*/_jsx(HomeIcon, {
                  className: "mr-3"
                }), " Perfil"]
              })
            }), collections.map(function (collection) {
              return /*#__PURE__*/_jsx("li", {
                className: "list-none",
                children: /*#__PURE__*/_jsxs("button", {
                  onClick: function onClick() {
                    return handleViewChange(collection);
                  },
                  className: "w-full text-left flex items-center p-3 rounded-md transition-colors duration-200 ".concat(activeView === collection ? "bg-blue-600 text-white shadow-md" : "hover:bg-slate-700"),
                  children: [/*#__PURE__*/_jsx(ListIcon, {
                    className: "mr-3"
                  }), " ", collection.charAt(0).toUpperCase() + collection.slice(1)]
                })
              }, collection);
            })]
          })]
        }), /*#__PURE__*/_jsx("div", {
          className: "mt-auto",
          children: /*#__PURE__*/_jsxs("button", {
            onClick: handleLogout,
            className: "w-full text-left flex items-center p-3 mt-6 rounded-md transition-colors duration-200 text-white hover:bg-slate-700",
            children: [/*#__PURE__*/_jsx(LogOutIcon, {
              className: "mr-3"
            }), " Cerrar Sesi\xF3n"]
          })
        })]
      })
    }), /*#__PURE__*/_jsx("main", {
      className: "flex-1 p-4 bg-white dark:bg-slate-700",
      children: renderView()
    }), showModal && /*#__PURE__*/_jsx(Modal, {
      title: modalType === "confirm" ? formData.message : editingItem ? "Editar ".concat(activeView.charAt(0).toUpperCase() + activeView.slice(1)) : "Crear ".concat(activeView.charAt(0).toUpperCase() + activeView.slice(1)),
      onClose: handleCloseModal,
      children: modalType === "confirm" ? /*#__PURE__*/_jsxs("div", {
        className: "flex justify-end space-x-4",
        children: [/*#__PURE__*/_jsx("button", {
          onClick: handleCloseModal,
          className: "px-6 py-2 bg-slate-200 text-slate-900 font-semibold rounded-full hover:bg-slate-300 transition-colors",
          children: "Cancelar"
        }), /*#__PURE__*/_jsx("button", {
          onClick: handleConfirm,
          className: "px-6 py-2 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-colors",
          children: "Confirmar"
        })]
      }) : /*#__PURE__*/_jsx(DynamicForm, {
        formData: formData,
        handleChange: handleChange,
        handleSubmit: handleSubmit,
        isSubmitting: isSubmitting
      })
    }), notification && /*#__PURE__*/_jsx(Notification, {
      message: notification.message,
      type: notification.type,
      onClose: function onClose() {
        return setNotification(null);
      }
    })]
  });
};
export default App;
function _temp(k) {
  return k !== "id";
}
function _temp2(option) {
  return /*#__PURE__*/_jsx("option", {
    value: option,
    children: option.charAt(0).toUpperCase() + option.slice(1)
  }, option);
}
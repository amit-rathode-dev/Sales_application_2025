import {
  __spreadProps,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// node_modules/apexcharts/dist/apexcharts.esm.js
function t(t2, e2) {
  (null == e2 || e2 > t2.length) && (e2 = t2.length);
  for (var i2 = 0, a2 = Array(e2); i2 < e2; i2++) a2[i2] = t2[i2];
  return a2;
}
function e(t2) {
  if (void 0 === t2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t2;
}
function i(t2, e2) {
  if (!(t2 instanceof e2)) throw new TypeError("Cannot call a class as a function");
}
function a(t2, e2) {
  for (var i2 = 0; i2 < e2.length; i2++) {
    var a2 = e2[i2];
    a2.enumerable = a2.enumerable || false, a2.configurable = true, "value" in a2 && (a2.writable = true), Object.defineProperty(t2, x(a2.key), a2);
  }
}
function s(t2, e2, i2) {
  return e2 && a(t2.prototype, e2), i2 && a(t2, i2), Object.defineProperty(t2, "prototype", {
    writable: false
  }), t2;
}
function r(t2, e2) {
  var i2 = "undefined" != typeof Symbol && t2[Symbol.iterator] || t2["@@iterator"];
  if (!i2) {
    if (Array.isArray(t2) || (i2 = m(t2)) || e2 && t2 && "number" == typeof t2.length) {
      i2 && (t2 = i2);
      var a2 = 0, s2 = function() {
      };
      return {
        s: s2,
        n: function() {
          return a2 >= t2.length ? {
            done: true
          } : {
            done: false,
            value: t2[a2++]
          };
        },
        e: function(t3) {
          throw t3;
        },
        f: s2
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var r2, n2 = true, o2 = false;
  return {
    s: function() {
      i2 = i2.call(t2);
    },
    n: function() {
      var t3 = i2.next();
      return n2 = t3.done, t3;
    },
    e: function(t3) {
      o2 = true, r2 = t3;
    },
    f: function() {
      try {
        n2 || null == i2.return || i2.return();
      } finally {
        if (o2) throw r2;
      }
    }
  };
}
function n(t2) {
  var i2 = c();
  return function() {
    var a2, s2 = l(t2);
    if (i2) {
      var r2 = l(this).constructor;
      a2 = Reflect.construct(s2, arguments, r2);
    } else a2 = s2.apply(this, arguments);
    return function(t3, i3) {
      if (i3 && ("object" == typeof i3 || "function" == typeof i3)) return i3;
      if (void 0 !== i3) throw new TypeError("Derived constructors may only return object or undefined");
      return e(t3);
    }(this, a2);
  };
}
function o(t2, e2, i2) {
  return (e2 = x(e2)) in t2 ? Object.defineProperty(t2, e2, {
    value: i2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : t2[e2] = i2, t2;
}
function l(t2) {
  return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t3) {
    return t3.__proto__ || Object.getPrototypeOf(t3);
  }, l(t2);
}
function h(t2, e2) {
  if ("function" != typeof e2 && null !== e2) throw new TypeError("Super expression must either be null or a function");
  t2.prototype = Object.create(e2 && e2.prototype, {
    constructor: {
      value: t2,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t2, "prototype", {
    writable: false
  }), e2 && g(t2, e2);
}
function c() {
  try {
    var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t3) {
  }
  return (c = function() {
    return !!t2;
  })();
}
function d(t2, e2) {
  var i2 = Object.keys(t2);
  if (Object.getOwnPropertySymbols) {
    var a2 = Object.getOwnPropertySymbols(t2);
    e2 && (a2 = a2.filter(function(e3) {
      return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
    })), i2.push.apply(i2, a2);
  }
  return i2;
}
function u(t2) {
  for (var e2 = 1; e2 < arguments.length; e2++) {
    var i2 = null != arguments[e2] ? arguments[e2] : {};
    e2 % 2 ? d(Object(i2), true).forEach(function(e3) {
      o(t2, e3, i2[e3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(i2)) : d(Object(i2)).forEach(function(e3) {
      Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(i2, e3));
    });
  }
  return t2;
}
function g(t2, e2) {
  return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t3, e3) {
    return t3.__proto__ = e3, t3;
  }, g(t2, e2);
}
function p(t2, e2) {
  return function(t3) {
    if (Array.isArray(t3)) return t3;
  }(t2) || function(t3, e3) {
    var i2 = null == t3 ? null : "undefined" != typeof Symbol && t3[Symbol.iterator] || t3["@@iterator"];
    if (null != i2) {
      var a2, s2, r2, n2, o2 = [], l2 = true, h2 = false;
      try {
        if (r2 = (i2 = i2.call(t3)).next, 0 === e3) {
          if (Object(i2) !== i2) return;
          l2 = false;
        } else for (; !(l2 = (a2 = r2.call(i2)).done) && (o2.push(a2.value), o2.length !== e3); l2 = true) ;
      } catch (t4) {
        h2 = true, s2 = t4;
      } finally {
        try {
          if (!l2 && null != i2.return && (n2 = i2.return(), Object(n2) !== n2)) return;
        } finally {
          if (h2) throw s2;
        }
      }
      return o2;
    }
  }(t2, e2) || m(t2, e2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function f(e2) {
  return function(e3) {
    if (Array.isArray(e3)) return t(e3);
  }(e2) || function(t2) {
    if ("undefined" != typeof Symbol && null != t2[Symbol.iterator] || null != t2["@@iterator"]) return Array.from(t2);
  }(e2) || m(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function x(t2) {
  var e2 = function(t3, e3) {
    if ("object" != typeof t3 || !t3) return t3;
    var i2 = t3[Symbol.toPrimitive];
    if (void 0 !== i2) {
      var a2 = i2.call(t3, e3 || "default");
      if ("object" != typeof a2) return a2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === e3 ? String : Number)(t3);
  }(t2, "string");
  return "symbol" == typeof e2 ? e2 : e2 + "";
}
function b(t2) {
  return b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
    return typeof t3;
  } : function(t3) {
    return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
  }, b(t2);
}
function m(e2, i2) {
  if (e2) {
    if ("string" == typeof e2) return t(e2, i2);
    var a2 = {}.toString.call(e2).slice(8, -1);
    return "Object" === a2 && e2.constructor && (a2 = e2.constructor.name), "Map" === a2 || "Set" === a2 ? Array.from(e2) : "Arguments" === a2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a2) ? t(e2, i2) : void 0;
  }
}
var v = function() {
  function t2() {
    i(this, t2);
  }
  return s(t2, [{
    key: "shadeRGBColor",
    value: function(t3, e2) {
      var i2 = e2.split(","), a2 = t3 < 0 ? 0 : 255, s2 = t3 < 0 ? -1 * t3 : t3, r2 = parseInt(i2[0].slice(4), 10), n2 = parseInt(i2[1], 10), o2 = parseInt(i2[2], 10);
      return "rgb(" + (Math.round((a2 - r2) * s2) + r2) + "," + (Math.round((a2 - n2) * s2) + n2) + "," + (Math.round((a2 - o2) * s2) + o2) + ")";
    }
  }, {
    key: "shadeHexColor",
    value: function(t3, e2) {
      var i2 = parseInt(e2.slice(1), 16), a2 = t3 < 0 ? 0 : 255, s2 = t3 < 0 ? -1 * t3 : t3, r2 = i2 >> 16, n2 = i2 >> 8 & 255, o2 = 255 & i2;
      return "#" + (16777216 + 65536 * (Math.round((a2 - r2) * s2) + r2) + 256 * (Math.round((a2 - n2) * s2) + n2) + (Math.round((a2 - o2) * s2) + o2)).toString(16).slice(1);
    }
  }, {
    key: "shadeColor",
    value: function(e2, i2) {
      return t2.isColorHex(i2) ? this.shadeHexColor(e2, i2) : this.shadeRGBColor(e2, i2);
    }
  }], [{
    key: "bind",
    value: function(t3, e2) {
      return function() {
        return t3.apply(e2, arguments);
      };
    }
  }, {
    key: "isObject",
    value: function(t3) {
      return t3 && "object" === b(t3) && !Array.isArray(t3) && null != t3;
    }
  }, {
    key: "is",
    value: function(t3, e2) {
      return Object.prototype.toString.call(e2) === "[object " + t3 + "]";
    }
  }, {
    key: "listToArray",
    value: function(t3) {
      var e2, i2 = [];
      for (e2 = 0; e2 < t3.length; e2++) i2[e2] = t3[e2];
      return i2;
    }
  }, {
    key: "extend",
    value: function(t3, e2) {
      var i2 = this;
      "function" != typeof Object.assign && (Object.assign = function(t4) {
        if (null == t4) throw new TypeError("Cannot convert undefined or null to object");
        for (var e3 = Object(t4), i3 = 1; i3 < arguments.length; i3++) {
          var a3 = arguments[i3];
          if (null != a3) for (var s2 in a3) a3.hasOwnProperty(s2) && (e3[s2] = a3[s2]);
        }
        return e3;
      });
      var a2 = Object.assign({}, t3);
      return this.isObject(t3) && this.isObject(e2) && Object.keys(e2).forEach(function(s2) {
        i2.isObject(e2[s2]) && s2 in t3 ? a2[s2] = i2.extend(t3[s2], e2[s2]) : Object.assign(a2, o({}, s2, e2[s2]));
      }), a2;
    }
  }, {
    key: "extendArray",
    value: function(e2, i2) {
      var a2 = [];
      return e2.map(function(e3) {
        a2.push(t2.extend(i2, e3));
      }), e2 = a2;
    }
  }, {
    key: "monthMod",
    value: function(t3) {
      return t3 % 12;
    }
  }, {
    key: "clone",
    value: function(t3) {
      var e2, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /* @__PURE__ */ new WeakMap();
      if (null === t3 || "object" !== b(t3)) return t3;
      if (i2.has(t3)) return i2.get(t3);
      if (Array.isArray(t3)) {
        e2 = [], i2.set(t3, e2);
        for (var a2 = 0; a2 < t3.length; a2++) e2[a2] = this.clone(t3[a2], i2);
      } else if (t3 instanceof Date) e2 = new Date(t3.getTime());
      else for (var s2 in e2 = {}, i2.set(t3, e2), t3) t3.hasOwnProperty(s2) && (e2[s2] = this.clone(t3[s2], i2));
      return e2;
    }
  }, {
    key: "log10",
    value: function(t3) {
      return Math.log(t3) / Math.LN10;
    }
  }, {
    key: "roundToBase10",
    value: function(t3) {
      return Math.pow(10, Math.floor(Math.log10(t3)));
    }
  }, {
    key: "roundToBase",
    value: function(t3, e2) {
      return Math.pow(e2, Math.floor(Math.log(t3) / Math.log(e2)));
    }
  }, {
    key: "parseNumber",
    value: function(t3) {
      return null === t3 ? t3 : parseFloat(t3);
    }
  }, {
    key: "stripNumber",
    value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
      return Number.isInteger(t3) ? t3 : parseFloat(t3.toPrecision(e2));
    }
  }, {
    key: "randomId",
    value: function() {
      return (Math.random() + 1).toString(36).substring(4);
    }
  }, {
    key: "noExponents",
    value: function(t3) {
      return t3.toString().includes("e") ? Math.round(t3) : t3;
    }
  }, {
    key: "elementExists",
    value: function(t3) {
      return !(!t3 || !t3.isConnected);
    }
  }, {
    key: "getDimensions",
    value: function(t3) {
      var e2 = getComputedStyle(t3, null), i2 = t3.clientHeight, a2 = t3.clientWidth;
      return i2 -= parseFloat(e2.paddingTop) + parseFloat(e2.paddingBottom), [a2 -= parseFloat(e2.paddingLeft) + parseFloat(e2.paddingRight), i2];
    }
  }, {
    key: "getBoundingClientRect",
    value: function(t3) {
      var e2 = t3.getBoundingClientRect();
      return {
        top: e2.top,
        right: e2.right,
        bottom: e2.bottom,
        left: e2.left,
        width: t3.clientWidth,
        height: t3.clientHeight,
        x: e2.left,
        y: e2.top
      };
    }
  }, {
    key: "getLargestStringFromArr",
    value: function(t3) {
      return t3.reduce(function(t4, e2) {
        return Array.isArray(e2) && (e2 = e2.reduce(function(t5, e3) {
          return t5.length > e3.length ? t5 : e3;
        })), t4.length > e2.length ? t4 : e2;
      }, 0);
    }
  }, {
    key: "hexToRgba",
    value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "#999999", e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0.6;
      "#" !== t3.substring(0, 1) && (t3 = "#999999");
      var i2 = t3.replace("#", "");
      i2 = i2.match(new RegExp("(.{" + i2.length / 3 + "})", "g"));
      for (var a2 = 0; a2 < i2.length; a2++) i2[a2] = parseInt(1 === i2[a2].length ? i2[a2] + i2[a2] : i2[a2], 16);
      return void 0 !== e2 && i2.push(e2), "rgba(" + i2.join(",") + ")";
    }
  }, {
    key: "getOpacityFromRGBA",
    value: function(t3) {
      return parseFloat(t3.replace(/^.*,(.+)\)/, "$1"));
    }
  }, {
    key: "rgb2hex",
    value: function(t3) {
      return (t3 = t3.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t3.length ? "#" + ("0" + parseInt(t3[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t3[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t3[3], 10).toString(16)).slice(-2) : "";
    }
  }, {
    key: "isColorHex",
    value: function(t3) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t3);
    }
  }, {
    key: "getPolygonPos",
    value: function(t3, e2) {
      for (var i2 = [], a2 = 2 * Math.PI / e2, s2 = 0; s2 < e2; s2++) {
        var r2 = {};
        r2.x = t3 * Math.sin(s2 * a2), r2.y = -t3 * Math.cos(s2 * a2), i2.push(r2);
      }
      return i2;
    }
  }, {
    key: "polarToCartesian",
    value: function(t3, e2, i2, a2) {
      var s2 = (a2 - 90) * Math.PI / 180;
      return {
        x: t3 + i2 * Math.cos(s2),
        y: e2 + i2 * Math.sin(s2)
      };
    }
  }, {
    key: "escapeString",
    value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x", i2 = t3.toString().slice();
      return i2 = i2.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi, e2);
    }
  }, {
    key: "negToZero",
    value: function(t3) {
      return t3 < 0 ? 0 : t3;
    }
  }, {
    key: "moveIndexInArray",
    value: function(t3, e2, i2) {
      if (i2 >= t3.length) for (var a2 = i2 - t3.length + 1; a2--; ) t3.push(void 0);
      return t3.splice(i2, 0, t3.splice(e2, 1)[0]), t3;
    }
  }, {
    key: "extractNumber",
    value: function(t3) {
      return parseFloat(t3.replace(/[^\d.]*/g, ""));
    }
  }, {
    key: "findAncestor",
    value: function(t3, e2) {
      for (; (t3 = t3.parentElement) && !t3.classList.contains(e2); ) ;
      return t3;
    }
  }, {
    key: "setELstyles",
    value: function(t3, e2) {
      for (var i2 in e2) e2.hasOwnProperty(i2) && (t3.style.key = e2[i2]);
    }
  }, {
    key: "preciseAddition",
    value: function(t3, e2) {
      var i2 = (String(t3).split(".")[1] || "").length, a2 = (String(e2).split(".")[1] || "").length, s2 = Math.pow(10, Math.max(i2, a2));
      return (Math.round(t3 * s2) + Math.round(e2 * s2)) / s2;
    }
  }, {
    key: "isNumber",
    value: function(t3) {
      return !isNaN(t3) && parseFloat(Number(t3)) === t3 && !isNaN(parseInt(t3, 10));
    }
  }, {
    key: "isFloat",
    value: function(t3) {
      return Number(t3) === t3 && t3 % 1 != 0;
    }
  }, {
    key: "isMsEdge",
    value: function() {
      var t3 = window.navigator.userAgent, e2 = t3.indexOf("Edge/");
      return e2 > 0 && parseInt(t3.substring(e2 + 5, t3.indexOf(".", e2)), 10);
    }
  }, {
    key: "getGCD",
    value: function(t3, e2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 7, a2 = Math.pow(10, i2 - Math.floor(Math.log10(Math.max(t3, e2))));
      for (t3 = Math.round(Math.abs(t3) * a2), e2 = Math.round(Math.abs(e2) * a2); e2; ) {
        var s2 = e2;
        e2 = t3 % e2, t3 = s2;
      }
      return t3 / a2;
    }
  }, {
    key: "getPrimeFactors",
    value: function(t3) {
      for (var e2 = [], i2 = 2; t3 >= 2; ) t3 % i2 == 0 ? (e2.push(i2), t3 /= i2) : i2++;
      return e2;
    }
  }, {
    key: "mod",
    value: function(t3, e2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 7, a2 = Math.pow(10, i2 - Math.floor(Math.log10(Math.max(t3, e2))));
      return (t3 = Math.round(Math.abs(t3) * a2)) % (e2 = Math.round(Math.abs(e2) * a2)) / a2;
    }
  }]), t2;
}();
var y = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "animateLine",
    value: function(t3, e2, i2, a2) {
      t3.attr(e2).animate(a2).attr(i2);
    }
  }, {
    key: "animateMarker",
    value: function(t3, e2, i2, a2) {
      t3.attr({
        opacity: 0
      }).animate(e2).attr({
        opacity: 1
      }).after(function() {
        a2();
      });
    }
  }, {
    key: "animateRect",
    value: function(t3, e2, i2, a2, s2) {
      t3.attr(e2).animate(a2).attr(i2).after(function() {
        return s2();
      });
    }
  }, {
    key: "animatePathsGradually",
    value: function(t3) {
      var e2 = t3.el, i2 = t3.realIndex, a2 = t3.j, s2 = t3.fill, r2 = t3.pathFrom, n2 = t3.pathTo, o2 = t3.speed, l2 = t3.delay, h2 = this.w, c2 = 0;
      h2.config.chart.animations.animateGradually.enabled && (c2 = h2.config.chart.animations.animateGradually.delay), h2.config.chart.animations.dynamicAnimation.enabled && h2.globals.dataChanged && "bar" !== h2.config.chart.type && (c2 = 0), this.morphSVG(e2, i2, a2, "line" !== h2.config.chart.type || h2.globals.comboCharts ? s2 : "stroke", r2, n2, o2, l2 * c2);
    }
  }, {
    key: "showDelayedElements",
    value: function() {
      this.w.globals.delayedElements.forEach(function(t3) {
        var e2 = t3.el;
        e2.classList.remove("apexcharts-element-hidden"), e2.classList.add("apexcharts-hidden-element-shown");
      });
    }
  }, {
    key: "animationCompleted",
    value: function(t3) {
      var e2 = this.w;
      e2.globals.animationEnded || (e2.globals.animationEnded = true, this.showDelayedElements(), "function" == typeof e2.config.chart.events.animationEnd && e2.config.chart.events.animationEnd(this.ctx, {
        el: t3,
        w: e2
      }));
    }
  }, {
    key: "morphSVG",
    value: function(t3, e2, i2, a2, s2, r2, n2, o2) {
      var l2 = this, h2 = this.w;
      s2 || (s2 = t3.attr("pathFrom")), r2 || (r2 = t3.attr("pathTo"));
      var c2 = function(t4) {
        return "radar" === h2.config.chart.type && (n2 = 1), "M 0 ".concat(h2.globals.gridHeight);
      };
      (!s2 || s2.indexOf("undefined") > -1 || s2.indexOf("NaN") > -1) && (s2 = c2()), (!r2.trim() || r2.indexOf("undefined") > -1 || r2.indexOf("NaN") > -1) && (r2 = c2()), h2.globals.shouldAnimate || (n2 = 1), t3.plot(s2).animate(1, o2).plot(s2).animate(n2, o2).plot(r2).after(function() {
        v.isNumber(i2) ? i2 === h2.globals.series[h2.globals.maxValsInArrayIndex].length - 2 && h2.globals.shouldAnimate && l2.animationCompleted(t3) : "none" !== a2 && h2.globals.shouldAnimate && (!h2.globals.comboCharts && e2 === h2.globals.series.length - 1 || h2.globals.comboCharts) && l2.animationCompleted(t3), l2.showDelayedElements();
      });
    }
  }]), t2;
}();
var w = {};
var k = [];
function A(t2, e2) {
  if (Array.isArray(t2)) for (const i2 of t2) A(i2, e2);
  else if ("object" != typeof t2) S(Object.getOwnPropertyNames(e2)), w[t2] = Object.assign(w[t2] || {}, e2);
  else for (const e3 in t2) A(e3, t2[e3]);
}
function C(t2) {
  return w[t2] || {};
}
function S(t2) {
  k.push(...t2);
}
function L(t2, e2) {
  let i2;
  const a2 = t2.length, s2 = [];
  for (i2 = 0; i2 < a2; i2++) s2.push(e2(t2[i2]));
  return s2;
}
function M(t2) {
  return t2 % 360 * Math.PI / 180;
}
function P(t2) {
  return t2.charAt(0).toUpperCase() + t2.slice(1);
}
function I(t2, e2, i2, a2) {
  return null != e2 && null != i2 || (a2 = a2 || t2.bbox(), null == e2 ? e2 = a2.width / a2.height * i2 : null == i2 && (i2 = a2.height / a2.width * e2)), {
    width: e2,
    height: i2
  };
}
function T(t2, e2) {
  const i2 = t2.origin;
  let a2 = null != t2.ox ? t2.ox : null != t2.originX ? t2.originX : "center", s2 = null != t2.oy ? t2.oy : null != t2.originY ? t2.originY : "center";
  null != i2 && ([a2, s2] = Array.isArray(i2) ? i2 : "object" == typeof i2 ? [i2.x, i2.y] : [i2, i2]);
  const r2 = "string" == typeof a2, n2 = "string" == typeof s2;
  if (r2 || n2) {
    const {
      height: t3,
      width: i3,
      x: o2,
      y: l2
    } = e2.bbox();
    r2 && (a2 = a2.includes("left") ? o2 : a2.includes("right") ? o2 + i3 : o2 + i3 / 2), n2 && (s2 = s2.includes("top") ? l2 : s2.includes("bottom") ? l2 + t3 : l2 + t3 / 2);
  }
  return [a2, s2];
}
var z = /* @__PURE__ */ new Set(["desc", "metadata", "title"]);
var X = (t2) => z.has(t2.nodeName);
var R = (t2, e2, i2 = {}) => {
  const a2 = __spreadValues({}, e2);
  for (const t3 in a2) a2[t3].valueOf() === i2[t3] && delete a2[t3];
  Object.keys(a2).length ? t2.node.setAttribute("data-svgjs", JSON.stringify(a2)) : (t2.node.removeAttribute("data-svgjs"), t2.node.removeAttribute("svgjs:data"));
};
var E = "http://www.w3.org/2000/svg";
var Y = "http://www.w3.org/2000/xmlns/";
var H = "http://www.w3.org/1999/xlink";
var O = {
  window: "undefined" == typeof window ? null : window,
  document: "undefined" == typeof document ? null : document
};
function F() {
  return O.window;
}
var D = class {
};
var _ = {};
var N = "___SYMBOL___ROOT___";
function W(t2, e2 = E) {
  return O.document.createElementNS(e2, t2);
}
function B(t2, e2 = false) {
  if (t2 instanceof D) return t2;
  if ("object" == typeof t2) return U(t2);
  if (null == t2) return new _[N]();
  if ("string" == typeof t2 && "<" !== t2.charAt(0)) return U(O.document.querySelector(t2));
  const i2 = e2 ? O.document.createElement("div") : W("svg");
  return i2.innerHTML = t2, t2 = U(i2.firstChild), i2.removeChild(i2.firstChild), t2;
}
function G(t2, e2) {
  return e2 && (e2 instanceof O.window.Node || e2.ownerDocument && e2 instanceof e2.ownerDocument.defaultView.Node) ? e2 : W(t2);
}
function V(t2) {
  if (!t2) return null;
  if (t2.instance instanceof D) return t2.instance;
  if ("#document-fragment" === t2.nodeName) return new _.Fragment(t2);
  let e2 = P(t2.nodeName || "Dom");
  return "LinearGradient" === e2 || "RadialGradient" === e2 ? e2 = "Gradient" : _[e2] || (e2 = "Dom"), new _[e2](t2);
}
var U = V;
function q(t2, e2 = t2.name, i2 = false) {
  return _[e2] = t2, i2 && (_[N] = t2), S(Object.getOwnPropertyNames(t2.prototype)), t2;
}
var Z = 1e3;
function $(t2) {
  return "Svgjs" + P(t2) + Z++;
}
function J(t2) {
  for (let e2 = t2.children.length - 1; e2 >= 0; e2--) J(t2.children[e2]);
  return t2.id ? (t2.id = $(t2.nodeName), t2) : t2;
}
function Q(t2, e2) {
  let i2, a2;
  for (a2 = (t2 = Array.isArray(t2) ? t2 : [t2]).length - 1; a2 >= 0; a2--) for (i2 in e2) t2[a2].prototype[i2] = e2[i2];
}
function K(t2) {
  return function(...e2) {
    const i2 = e2[e2.length - 1];
    return !i2 || i2.constructor !== Object || i2 instanceof Array ? t2.apply(this, e2) : t2.apply(this, e2.slice(0, -1)).attr(i2);
  };
}
A("Dom", {
  siblings: function() {
    return this.parent().children();
  },
  position: function() {
    return this.parent().index(this);
  },
  next: function() {
    return this.siblings()[this.position() + 1];
  },
  prev: function() {
    return this.siblings()[this.position() - 1];
  },
  forward: function() {
    const t2 = this.position();
    return this.parent().add(this.remove(), t2 + 1), this;
  },
  backward: function() {
    const t2 = this.position();
    return this.parent().add(this.remove(), t2 ? t2 - 1 : 0), this;
  },
  front: function() {
    return this.parent().add(this.remove()), this;
  },
  back: function() {
    return this.parent().add(this.remove(), 0), this;
  },
  before: function(t2) {
    (t2 = B(t2)).remove();
    const e2 = this.position();
    return this.parent().add(t2, e2), this;
  },
  after: function(t2) {
    (t2 = B(t2)).remove();
    const e2 = this.position();
    return this.parent().add(t2, e2 + 1), this;
  },
  insertBefore: function(t2) {
    return (t2 = B(t2)).before(this), this;
  },
  insertAfter: function(t2) {
    return (t2 = B(t2)).after(this), this;
  }
});
var tt = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i;
var et = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
var it = /rgb\((\d+),(\d+),(\d+)\)/;
var at = /(#[a-z_][a-z0-9\-_]*)/i;
var st = /\)\s*,?\s*/;
var rt = /\s/g;
var nt = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i;
var ot = /^rgb\(/;
var lt = /^(\s+)?$/;
var ht = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
var ct = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i;
var dt = /[\s,]+/;
var ut = /[MLHVCSQTAZ]/i;
function gt(t2) {
  const e2 = Math.round(t2), i2 = Math.max(0, Math.min(255, e2)).toString(16);
  return 1 === i2.length ? "0" + i2 : i2;
}
function pt(t2, e2) {
  for (let i2 = e2.length; i2--; ) if (null == t2[e2[i2]]) return false;
  return true;
}
function ft(t2, e2, i2) {
  return i2 < 0 && (i2 += 1), i2 > 1 && (i2 -= 1), i2 < 1 / 6 ? t2 + 6 * (e2 - t2) * i2 : i2 < 0.5 ? e2 : i2 < 2 / 3 ? t2 + (e2 - t2) * (2 / 3 - i2) * 6 : t2;
}
A("Dom", {
  classes: function() {
    const t2 = this.attr("class");
    return null == t2 ? [] : t2.trim().split(dt);
  },
  hasClass: function(t2) {
    return -1 !== this.classes().indexOf(t2);
  },
  addClass: function(t2) {
    if (!this.hasClass(t2)) {
      const e2 = this.classes();
      e2.push(t2), this.attr("class", e2.join(" "));
    }
    return this;
  },
  removeClass: function(t2) {
    return this.hasClass(t2) && this.attr("class", this.classes().filter(function(e2) {
      return e2 !== t2;
    }).join(" ")), this;
  },
  toggleClass: function(t2) {
    return this.hasClass(t2) ? this.removeClass(t2) : this.addClass(t2);
  }
}), A("Dom", {
  css: function(t2, e2) {
    const i2 = {};
    if (0 === arguments.length) return this.node.style.cssText.split(/\s*;\s*/).filter(function(t3) {
      return !!t3.length;
    }).forEach(function(t3) {
      const e3 = t3.split(/\s*:\s*/);
      i2[e3[0]] = e3[1];
    }), i2;
    if (arguments.length < 2) {
      if (Array.isArray(t2)) {
        for (const e3 of t2) {
          const t3 = e3;
          i2[e3] = this.node.style.getPropertyValue(t3);
        }
        return i2;
      }
      if ("string" == typeof t2) return this.node.style.getPropertyValue(t2);
      if ("object" == typeof t2) for (const e3 in t2) this.node.style.setProperty(e3, null == t2[e3] || lt.test(t2[e3]) ? "" : t2[e3]);
    }
    return 2 === arguments.length && this.node.style.setProperty(t2, null == e2 || lt.test(e2) ? "" : e2), this;
  },
  show: function() {
    return this.css("display", "");
  },
  hide: function() {
    return this.css("display", "none");
  },
  visible: function() {
    return "none" !== this.css("display");
  }
}), A("Dom", {
  data: function(t2, e2, i2) {
    if (null == t2) return this.data(L(function(t3, e3) {
      let i3;
      const a2 = t3.length, s2 = [];
      for (i3 = 0; i3 < a2; i3++) e3(t3[i3]) && s2.push(t3[i3]);
      return s2;
    }(this.node.attributes, (t3) => 0 === t3.nodeName.indexOf("data-")), (t3) => t3.nodeName.slice(5)));
    if (t2 instanceof Array) {
      const e3 = {};
      for (const i3 of t2) e3[i3] = this.data(i3);
      return e3;
    }
    if ("object" == typeof t2) for (e2 in t2) this.data(e2, t2[e2]);
    else if (arguments.length < 2) try {
      return JSON.parse(this.attr("data-" + t2));
    } catch (e3) {
      return this.attr("data-" + t2);
    }
    else this.attr("data-" + t2, null === e2 ? null : true === i2 || "string" == typeof e2 || "number" == typeof e2 ? e2 : JSON.stringify(e2));
    return this;
  }
}), A("Dom", {
  remember: function(t2, e2) {
    if ("object" == typeof arguments[0]) for (const e3 in t2) this.remember(e3, t2[e3]);
    else {
      if (1 === arguments.length) return this.memory()[t2];
      this.memory()[t2] = e2;
    }
    return this;
  },
  forget: function() {
    if (0 === arguments.length) this._memory = {};
    else for (let t2 = arguments.length - 1; t2 >= 0; t2--) delete this.memory()[arguments[t2]];
    return this;
  },
  memory: function() {
    return this._memory = this._memory || {};
  }
});
var xt = class _xt {
  constructor(...t2) {
    this.init(...t2);
  }
  static isColor(t2) {
    return t2 && (t2 instanceof _xt || this.isRgb(t2) || this.test(t2));
  }
  static isRgb(t2) {
    return t2 && "number" == typeof t2.r && "number" == typeof t2.g && "number" == typeof t2.b;
  }
  static random(t2 = "vibrant", e2) {
    const {
      random: i2,
      round: a2,
      sin: s2,
      PI: r2
    } = Math;
    if ("vibrant" === t2) {
      const t3 = 24 * i2() + 57, e3 = 38 * i2() + 45, a3 = 360 * i2();
      return new _xt(t3, e3, a3, "lch");
    }
    if ("sine" === t2) {
      const t3 = a2(80 * s2(2 * r2 * (e2 = null == e2 ? i2() : e2) / 0.5 + 0.01) + 150), n2 = a2(50 * s2(2 * r2 * e2 / 0.5 + 4.6) + 200), o2 = a2(100 * s2(2 * r2 * e2 / 0.5 + 2.3) + 150);
      return new _xt(t3, n2, o2);
    }
    if ("pastel" === t2) {
      const t3 = 8 * i2() + 86, e3 = 17 * i2() + 9, a3 = 360 * i2();
      return new _xt(t3, e3, a3, "lch");
    }
    if ("dark" === t2) {
      const t3 = 10 + 10 * i2(), e3 = 50 * i2() + 86, a3 = 360 * i2();
      return new _xt(t3, e3, a3, "lch");
    }
    if ("rgb" === t2) {
      const t3 = 255 * i2(), e3 = 255 * i2(), a3 = 255 * i2();
      return new _xt(t3, e3, a3);
    }
    if ("lab" === t2) {
      const t3 = 100 * i2(), e3 = 256 * i2() - 128, a3 = 256 * i2() - 128;
      return new _xt(t3, e3, a3, "lab");
    }
    if ("grey" === t2) {
      const t3 = 255 * i2();
      return new _xt(t3, t3, t3);
    }
    throw new Error("Unsupported random color mode");
  }
  static test(t2) {
    return "string" == typeof t2 && (nt.test(t2) || ot.test(t2));
  }
  cmyk() {
    const {
      _a: t2,
      _b: e2,
      _c: i2
    } = this.rgb(), [a2, s2, r2] = [t2, e2, i2].map((t3) => t3 / 255), n2 = Math.min(1 - a2, 1 - s2, 1 - r2);
    if (1 === n2) return new _xt(0, 0, 0, 1, "cmyk");
    return new _xt((1 - a2 - n2) / (1 - n2), (1 - s2 - n2) / (1 - n2), (1 - r2 - n2) / (1 - n2), n2, "cmyk");
  }
  hsl() {
    const {
      _a: t2,
      _b: e2,
      _c: i2
    } = this.rgb(), [a2, s2, r2] = [t2, e2, i2].map((t3) => t3 / 255), n2 = Math.max(a2, s2, r2), o2 = Math.min(a2, s2, r2), l2 = (n2 + o2) / 2, h2 = n2 === o2, c2 = n2 - o2;
    return new _xt(360 * (h2 ? 0 : n2 === a2 ? ((s2 - r2) / c2 + (s2 < r2 ? 6 : 0)) / 6 : n2 === s2 ? ((r2 - a2) / c2 + 2) / 6 : n2 === r2 ? ((a2 - s2) / c2 + 4) / 6 : 0), 100 * (h2 ? 0 : l2 > 0.5 ? c2 / (2 - n2 - o2) : c2 / (n2 + o2)), 100 * l2, "hsl");
  }
  init(t2 = 0, e2 = 0, i2 = 0, a2 = 0, s2 = "rgb") {
    if (t2 = t2 || 0, this.space) for (const t3 in this.space) delete this[this.space[t3]];
    if ("number" == typeof t2) s2 = "string" == typeof a2 ? a2 : s2, a2 = "string" == typeof a2 ? 0 : a2, Object.assign(this, {
      _a: t2,
      _b: e2,
      _c: i2,
      _d: a2,
      space: s2
    });
    else if (t2 instanceof Array) this.space = e2 || ("string" == typeof t2[3] ? t2[3] : t2[4]) || "rgb", Object.assign(this, {
      _a: t2[0],
      _b: t2[1],
      _c: t2[2],
      _d: t2[3] || 0
    });
    else if (t2 instanceof Object) {
      const i3 = function(t3, e3) {
        const i4 = pt(t3, "rgb") ? {
          _a: t3.r,
          _b: t3.g,
          _c: t3.b,
          _d: 0,
          space: "rgb"
        } : pt(t3, "xyz") ? {
          _a: t3.x,
          _b: t3.y,
          _c: t3.z,
          _d: 0,
          space: "xyz"
        } : pt(t3, "hsl") ? {
          _a: t3.h,
          _b: t3.s,
          _c: t3.l,
          _d: 0,
          space: "hsl"
        } : pt(t3, "lab") ? {
          _a: t3.l,
          _b: t3.a,
          _c: t3.b,
          _d: 0,
          space: "lab"
        } : pt(t3, "lch") ? {
          _a: t3.l,
          _b: t3.c,
          _c: t3.h,
          _d: 0,
          space: "lch"
        } : pt(t3, "cmyk") ? {
          _a: t3.c,
          _b: t3.m,
          _c: t3.y,
          _d: t3.k,
          space: "cmyk"
        } : {
          _a: 0,
          _b: 0,
          _c: 0,
          space: "rgb"
        };
        return i4.space = e3 || i4.space, i4;
      }(t2, e2);
      Object.assign(this, i3);
    } else if ("string" == typeof t2) if (ot.test(t2)) {
      const e3 = t2.replace(rt, ""), [i3, a3, s3] = it.exec(e3).slice(1, 4).map((t3) => parseInt(t3));
      Object.assign(this, {
        _a: i3,
        _b: a3,
        _c: s3,
        _d: 0,
        space: "rgb"
      });
    } else {
      if (!nt.test(t2)) throw Error("Unsupported string format, can't construct Color");
      {
        const e3 = (t3) => parseInt(t3, 16), [, i3, a3, s3] = et.exec(function(t3) {
          return 4 === t3.length ? ["#", t3.substring(1, 2), t3.substring(1, 2), t3.substring(2, 3), t3.substring(2, 3), t3.substring(3, 4), t3.substring(3, 4)].join("") : t3;
        }(t2)).map(e3);
        Object.assign(this, {
          _a: i3,
          _b: a3,
          _c: s3,
          _d: 0,
          space: "rgb"
        });
      }
    }
    const {
      _a: r2,
      _b: n2,
      _c: o2,
      _d: l2
    } = this, h2 = "rgb" === this.space ? {
      r: r2,
      g: n2,
      b: o2
    } : "xyz" === this.space ? {
      x: r2,
      y: n2,
      z: o2
    } : "hsl" === this.space ? {
      h: r2,
      s: n2,
      l: o2
    } : "lab" === this.space ? {
      l: r2,
      a: n2,
      b: o2
    } : "lch" === this.space ? {
      l: r2,
      c: n2,
      h: o2
    } : "cmyk" === this.space ? {
      c: r2,
      m: n2,
      y: o2,
      k: l2
    } : {};
    Object.assign(this, h2);
  }
  lab() {
    const {
      x: t2,
      y: e2,
      z: i2
    } = this.xyz();
    return new _xt(116 * e2 - 16, 500 * (t2 - e2), 200 * (e2 - i2), "lab");
  }
  lch() {
    const {
      l: t2,
      a: e2,
      b: i2
    } = this.lab(), a2 = Math.sqrt(e2 ** 2 + i2 ** 2);
    let s2 = 180 * Math.atan2(i2, e2) / Math.PI;
    s2 < 0 && (s2 *= -1, s2 = 360 - s2);
    return new _xt(t2, a2, s2, "lch");
  }
  rgb() {
    if ("rgb" === this.space) return this;
    if ("lab" === (t2 = this.space) || "xyz" === t2 || "lch" === t2) {
      let {
        x: t3,
        y: e2,
        z: i2
      } = this;
      if ("lab" === this.space || "lch" === this.space) {
        let {
          l: a3,
          a: s3,
          b: r3
        } = this;
        if ("lch" === this.space) {
          const {
            c: t4,
            h: e3
          } = this, i3 = Math.PI / 180;
          s3 = t4 * Math.cos(i3 * e3), r3 = t4 * Math.sin(i3 * e3);
        }
        const n3 = (a3 + 16) / 116, o3 = s3 / 500 + n3, l3 = n3 - r3 / 200, h3 = 16 / 116, c3 = 8856e-6, d2 = 7.787;
        t3 = 0.95047 * (o3 ** 3 > c3 ? o3 ** 3 : (o3 - h3) / d2), e2 = 1 * (n3 ** 3 > c3 ? n3 ** 3 : (n3 - h3) / d2), i2 = 1.08883 * (l3 ** 3 > c3 ? l3 ** 3 : (l3 - h3) / d2);
      }
      const a2 = 3.2406 * t3 + -1.5372 * e2 + -0.4986 * i2, s2 = -0.9689 * t3 + 1.8758 * e2 + 0.0415 * i2, r2 = 0.0557 * t3 + -0.204 * e2 + 1.057 * i2, n2 = Math.pow, o2 = 31308e-7, l2 = a2 > o2 ? 1.055 * n2(a2, 1 / 2.4) - 0.055 : 12.92 * a2, h2 = s2 > o2 ? 1.055 * n2(s2, 1 / 2.4) - 0.055 : 12.92 * s2, c2 = r2 > o2 ? 1.055 * n2(r2, 1 / 2.4) - 0.055 : 12.92 * r2;
      return new _xt(255 * l2, 255 * h2, 255 * c2);
    }
    if ("hsl" === this.space) {
      let {
        h: t3,
        s: e2,
        l: i2
      } = this;
      if (t3 /= 360, e2 /= 100, i2 /= 100, 0 === e2) {
        i2 *= 255;
        return new _xt(i2, i2, i2);
      }
      const a2 = i2 < 0.5 ? i2 * (1 + e2) : i2 + e2 - i2 * e2, s2 = 2 * i2 - a2, r2 = 255 * ft(s2, a2, t3 + 1 / 3), n2 = 255 * ft(s2, a2, t3), o2 = 255 * ft(s2, a2, t3 - 1 / 3);
      return new _xt(r2, n2, o2);
    }
    if ("cmyk" === this.space) {
      const {
        c: t3,
        m: e2,
        y: i2,
        k: a2
      } = this, s2 = 255 * (1 - Math.min(1, t3 * (1 - a2) + a2)), r2 = 255 * (1 - Math.min(1, e2 * (1 - a2) + a2)), n2 = 255 * (1 - Math.min(1, i2 * (1 - a2) + a2));
      return new _xt(s2, r2, n2);
    }
    return this;
    var t2;
  }
  toArray() {
    const {
      _a: t2,
      _b: e2,
      _c: i2,
      _d: a2,
      space: s2
    } = this;
    return [t2, e2, i2, a2, s2];
  }
  toHex() {
    const [t2, e2, i2] = this._clamped().map(gt);
    return `#${t2}${e2}${i2}`;
  }
  toRgb() {
    const [t2, e2, i2] = this._clamped();
    return `rgb(${t2},${e2},${i2})`;
  }
  toString() {
    return this.toHex();
  }
  xyz() {
    const {
      _a: t2,
      _b: e2,
      _c: i2
    } = this.rgb(), [a2, s2, r2] = [t2, e2, i2].map((t3) => t3 / 255), n2 = a2 > 0.04045 ? Math.pow((a2 + 0.055) / 1.055, 2.4) : a2 / 12.92, o2 = s2 > 0.04045 ? Math.pow((s2 + 0.055) / 1.055, 2.4) : s2 / 12.92, l2 = r2 > 0.04045 ? Math.pow((r2 + 0.055) / 1.055, 2.4) : r2 / 12.92, h2 = (0.4124 * n2 + 0.3576 * o2 + 0.1805 * l2) / 0.95047, c2 = (0.2126 * n2 + 0.7152 * o2 + 0.0722 * l2) / 1, d2 = (0.0193 * n2 + 0.1192 * o2 + 0.9505 * l2) / 1.08883, u2 = h2 > 8856e-6 ? Math.pow(h2, 1 / 3) : 7.787 * h2 + 16 / 116, g2 = c2 > 8856e-6 ? Math.pow(c2, 1 / 3) : 7.787 * c2 + 16 / 116, p2 = d2 > 8856e-6 ? Math.pow(d2, 1 / 3) : 7.787 * d2 + 16 / 116;
    return new _xt(u2, g2, p2, "xyz");
  }
  _clamped() {
    const {
      _a: t2,
      _b: e2,
      _c: i2
    } = this.rgb(), {
      max: a2,
      min: s2,
      round: r2
    } = Math;
    return [t2, e2, i2].map((t3) => a2(0, s2(r2(t3), 255)));
  }
};
var bt = class _bt {
  constructor(...t2) {
    this.init(...t2);
  }
  clone() {
    return new _bt(this);
  }
  init(t2, e2) {
    const i2 = 0, a2 = 0, s2 = Array.isArray(t2) ? {
      x: t2[0],
      y: t2[1]
    } : "object" == typeof t2 ? {
      x: t2.x,
      y: t2.y
    } : {
      x: t2,
      y: e2
    };
    return this.x = null == s2.x ? i2 : s2.x, this.y = null == s2.y ? a2 : s2.y, this;
  }
  toArray() {
    return [this.x, this.y];
  }
  transform(t2) {
    return this.clone().transformO(t2);
  }
  transformO(t2) {
    vt.isMatrixLike(t2) || (t2 = new vt(t2));
    const {
      x: e2,
      y: i2
    } = this;
    return this.x = t2.a * e2 + t2.c * i2 + t2.e, this.y = t2.b * e2 + t2.d * i2 + t2.f, this;
  }
};
function mt(t2, e2, i2) {
  return Math.abs(e2 - t2) < (i2 || 1e-6);
}
var vt = class _vt {
  constructor(...t2) {
    this.init(...t2);
  }
  static formatTransforms(t2) {
    const e2 = "both" === t2.flip || true === t2.flip, i2 = t2.flip && (e2 || "x" === t2.flip) ? -1 : 1, a2 = t2.flip && (e2 || "y" === t2.flip) ? -1 : 1, s2 = t2.skew && t2.skew.length ? t2.skew[0] : isFinite(t2.skew) ? t2.skew : isFinite(t2.skewX) ? t2.skewX : 0, r2 = t2.skew && t2.skew.length ? t2.skew[1] : isFinite(t2.skew) ? t2.skew : isFinite(t2.skewY) ? t2.skewY : 0, n2 = t2.scale && t2.scale.length ? t2.scale[0] * i2 : isFinite(t2.scale) ? t2.scale * i2 : isFinite(t2.scaleX) ? t2.scaleX * i2 : i2, o2 = t2.scale && t2.scale.length ? t2.scale[1] * a2 : isFinite(t2.scale) ? t2.scale * a2 : isFinite(t2.scaleY) ? t2.scaleY * a2 : a2, l2 = t2.shear || 0, h2 = t2.rotate || t2.theta || 0, c2 = new bt(t2.origin || t2.around || t2.ox || t2.originX, t2.oy || t2.originY), d2 = c2.x, u2 = c2.y, g2 = new bt(t2.position || t2.px || t2.positionX || NaN, t2.py || t2.positionY || NaN), p2 = g2.x, f2 = g2.y, x2 = new bt(t2.translate || t2.tx || t2.translateX, t2.ty || t2.translateY), b2 = x2.x, m2 = x2.y, v2 = new bt(t2.relative || t2.rx || t2.relativeX, t2.ry || t2.relativeY);
    return {
      scaleX: n2,
      scaleY: o2,
      skewX: s2,
      skewY: r2,
      shear: l2,
      theta: h2,
      rx: v2.x,
      ry: v2.y,
      tx: b2,
      ty: m2,
      ox: d2,
      oy: u2,
      px: p2,
      py: f2
    };
  }
  static fromArray(t2) {
    return {
      a: t2[0],
      b: t2[1],
      c: t2[2],
      d: t2[3],
      e: t2[4],
      f: t2[5]
    };
  }
  static isMatrixLike(t2) {
    return null != t2.a || null != t2.b || null != t2.c || null != t2.d || null != t2.e || null != t2.f;
  }
  static matrixMultiply(t2, e2, i2) {
    const a2 = t2.a * e2.a + t2.c * e2.b, s2 = t2.b * e2.a + t2.d * e2.b, r2 = t2.a * e2.c + t2.c * e2.d, n2 = t2.b * e2.c + t2.d * e2.d, o2 = t2.e + t2.a * e2.e + t2.c * e2.f, l2 = t2.f + t2.b * e2.e + t2.d * e2.f;
    return i2.a = a2, i2.b = s2, i2.c = r2, i2.d = n2, i2.e = o2, i2.f = l2, i2;
  }
  around(t2, e2, i2) {
    return this.clone().aroundO(t2, e2, i2);
  }
  aroundO(t2, e2, i2) {
    const a2 = t2 || 0, s2 = e2 || 0;
    return this.translateO(-a2, -s2).lmultiplyO(i2).translateO(a2, s2);
  }
  clone() {
    return new _vt(this);
  }
  decompose(t2 = 0, e2 = 0) {
    const i2 = this.a, a2 = this.b, s2 = this.c, r2 = this.d, n2 = this.e, o2 = this.f, l2 = i2 * r2 - a2 * s2, h2 = l2 > 0 ? 1 : -1, c2 = h2 * Math.sqrt(i2 * i2 + a2 * a2), d2 = Math.atan2(h2 * a2, h2 * i2), u2 = 180 / Math.PI * d2, g2 = Math.cos(d2), p2 = Math.sin(d2), f2 = (i2 * s2 + a2 * r2) / l2, x2 = s2 * c2 / (f2 * i2 - a2) || r2 * c2 / (f2 * a2 + i2);
    return {
      scaleX: c2,
      scaleY: x2,
      shear: f2,
      rotate: u2,
      translateX: n2 - t2 + t2 * g2 * c2 + e2 * (f2 * g2 * c2 - p2 * x2),
      translateY: o2 - e2 + t2 * p2 * c2 + e2 * (f2 * p2 * c2 + g2 * x2),
      originX: t2,
      originY: e2,
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  }
  equals(t2) {
    if (t2 === this) return true;
    const e2 = new _vt(t2);
    return mt(this.a, e2.a) && mt(this.b, e2.b) && mt(this.c, e2.c) && mt(this.d, e2.d) && mt(this.e, e2.e) && mt(this.f, e2.f);
  }
  flip(t2, e2) {
    return this.clone().flipO(t2, e2);
  }
  flipO(t2, e2) {
    return "x" === t2 ? this.scaleO(-1, 1, e2, 0) : "y" === t2 ? this.scaleO(1, -1, 0, e2) : this.scaleO(-1, -1, t2, e2 || t2);
  }
  init(t2) {
    const e2 = _vt.fromArray([1, 0, 0, 1, 0, 0]);
    return t2 = t2 instanceof Gt ? t2.matrixify() : "string" == typeof t2 ? _vt.fromArray(t2.split(dt).map(parseFloat)) : Array.isArray(t2) ? _vt.fromArray(t2) : "object" == typeof t2 && _vt.isMatrixLike(t2) ? t2 : "object" == typeof t2 ? new _vt().transform(t2) : 6 === arguments.length ? _vt.fromArray([].slice.call(arguments)) : e2, this.a = null != t2.a ? t2.a : e2.a, this.b = null != t2.b ? t2.b : e2.b, this.c = null != t2.c ? t2.c : e2.c, this.d = null != t2.d ? t2.d : e2.d, this.e = null != t2.e ? t2.e : e2.e, this.f = null != t2.f ? t2.f : e2.f, this;
  }
  inverse() {
    return this.clone().inverseO();
  }
  inverseO() {
    const t2 = this.a, e2 = this.b, i2 = this.c, a2 = this.d, s2 = this.e, r2 = this.f, n2 = t2 * a2 - e2 * i2;
    if (!n2) throw new Error("Cannot invert " + this);
    const o2 = a2 / n2, l2 = -e2 / n2, h2 = -i2 / n2, c2 = t2 / n2, d2 = -(o2 * s2 + h2 * r2), u2 = -(l2 * s2 + c2 * r2);
    return this.a = o2, this.b = l2, this.c = h2, this.d = c2, this.e = d2, this.f = u2, this;
  }
  lmultiply(t2) {
    return this.clone().lmultiplyO(t2);
  }
  lmultiplyO(t2) {
    const e2 = t2 instanceof _vt ? t2 : new _vt(t2);
    return _vt.matrixMultiply(e2, this, this);
  }
  multiply(t2) {
    return this.clone().multiplyO(t2);
  }
  multiplyO(t2) {
    const e2 = t2 instanceof _vt ? t2 : new _vt(t2);
    return _vt.matrixMultiply(this, e2, this);
  }
  rotate(t2, e2, i2) {
    return this.clone().rotateO(t2, e2, i2);
  }
  rotateO(t2, e2 = 0, i2 = 0) {
    t2 = M(t2);
    const a2 = Math.cos(t2), s2 = Math.sin(t2), {
      a: r2,
      b: n2,
      c: o2,
      d: l2,
      e: h2,
      f: c2
    } = this;
    return this.a = r2 * a2 - n2 * s2, this.b = n2 * a2 + r2 * s2, this.c = o2 * a2 - l2 * s2, this.d = l2 * a2 + o2 * s2, this.e = h2 * a2 - c2 * s2 + i2 * s2 - e2 * a2 + e2, this.f = c2 * a2 + h2 * s2 - e2 * s2 - i2 * a2 + i2, this;
  }
  scale() {
    return this.clone().scaleO(...arguments);
  }
  scaleO(t2, e2 = t2, i2 = 0, a2 = 0) {
    3 === arguments.length && (a2 = i2, i2 = e2, e2 = t2);
    const {
      a: s2,
      b: r2,
      c: n2,
      d: o2,
      e: l2,
      f: h2
    } = this;
    return this.a = s2 * t2, this.b = r2 * e2, this.c = n2 * t2, this.d = o2 * e2, this.e = l2 * t2 - i2 * t2 + i2, this.f = h2 * e2 - a2 * e2 + a2, this;
  }
  shear(t2, e2, i2) {
    return this.clone().shearO(t2, e2, i2);
  }
  shearO(t2, e2 = 0, i2 = 0) {
    const {
      a: a2,
      b: s2,
      c: r2,
      d: n2,
      e: o2,
      f: l2
    } = this;
    return this.a = a2 + s2 * t2, this.c = r2 + n2 * t2, this.e = o2 + l2 * t2 - i2 * t2, this;
  }
  skew() {
    return this.clone().skewO(...arguments);
  }
  skewO(t2, e2 = t2, i2 = 0, a2 = 0) {
    3 === arguments.length && (a2 = i2, i2 = e2, e2 = t2), t2 = M(t2), e2 = M(e2);
    const s2 = Math.tan(t2), r2 = Math.tan(e2), {
      a: n2,
      b: o2,
      c: l2,
      d: h2,
      e: c2,
      f: d2
    } = this;
    return this.a = n2 + o2 * s2, this.b = o2 + n2 * r2, this.c = l2 + h2 * s2, this.d = h2 + l2 * r2, this.e = c2 + d2 * s2 - a2 * s2, this.f = d2 + c2 * r2 - i2 * r2, this;
  }
  skewX(t2, e2, i2) {
    return this.skew(t2, 0, e2, i2);
  }
  skewY(t2, e2, i2) {
    return this.skew(0, t2, e2, i2);
  }
  toArray() {
    return [this.a, this.b, this.c, this.d, this.e, this.f];
  }
  toString() {
    return "matrix(" + this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.e + "," + this.f + ")";
  }
  transform(t2) {
    if (_vt.isMatrixLike(t2)) {
      return new _vt(t2).multiplyO(this);
    }
    const e2 = _vt.formatTransforms(t2), {
      x: i2,
      y: a2
    } = new bt(e2.ox, e2.oy).transform(this), s2 = new _vt().translateO(e2.rx, e2.ry).lmultiplyO(this).translateO(-i2, -a2).scaleO(e2.scaleX, e2.scaleY).skewO(e2.skewX, e2.skewY).shearO(e2.shear).rotateO(e2.theta).translateO(i2, a2);
    if (isFinite(e2.px) || isFinite(e2.py)) {
      const t3 = new bt(i2, a2).transform(s2), r2 = isFinite(e2.px) ? e2.px - t3.x : 0, n2 = isFinite(e2.py) ? e2.py - t3.y : 0;
      s2.translateO(r2, n2);
    }
    return s2.translateO(e2.tx, e2.ty), s2;
  }
  translate(t2, e2) {
    return this.clone().translateO(t2, e2);
  }
  translateO(t2, e2) {
    return this.e += t2 || 0, this.f += e2 || 0, this;
  }
  valueOf() {
    return {
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  }
};
function yt() {
  if (!yt.nodes) {
    const t2 = B().size(2, 0);
    t2.node.style.cssText = ["opacity: 0", "position: absolute", "left: -100%", "top: -100%", "overflow: hidden"].join(";"), t2.attr("focusable", "false"), t2.attr("aria-hidden", "true");
    const e2 = t2.path().node;
    yt.nodes = {
      svg: t2,
      path: e2
    };
  }
  if (!yt.nodes.svg.node.parentNode) {
    const t2 = O.document.body || O.document.documentElement;
    yt.nodes.svg.addTo(t2);
  }
  return yt.nodes;
}
function wt(t2) {
  return !(t2.width || t2.height || t2.x || t2.y);
}
q(vt, "Matrix");
var kt = class _kt {
  constructor(...t2) {
    this.init(...t2);
  }
  addOffset() {
    return this.x += O.window.pageXOffset, this.y += O.window.pageYOffset, new _kt(this);
  }
  init(t2) {
    return t2 = "string" == typeof t2 ? t2.split(dt).map(parseFloat) : Array.isArray(t2) ? t2 : "object" == typeof t2 ? [null != t2.left ? t2.left : t2.x, null != t2.top ? t2.top : t2.y, t2.width, t2.height] : 4 === arguments.length ? [].slice.call(arguments) : [0, 0, 0, 0], this.x = t2[0] || 0, this.y = t2[1] || 0, this.width = this.w = t2[2] || 0, this.height = this.h = t2[3] || 0, this.x2 = this.x + this.w, this.y2 = this.y + this.h, this.cx = this.x + this.w / 2, this.cy = this.y + this.h / 2, this;
  }
  isNulled() {
    return wt(this);
  }
  merge(t2) {
    const e2 = Math.min(this.x, t2.x), i2 = Math.min(this.y, t2.y), a2 = Math.max(this.x + this.width, t2.x + t2.width) - e2, s2 = Math.max(this.y + this.height, t2.y + t2.height) - i2;
    return new _kt(e2, i2, a2, s2);
  }
  toArray() {
    return [this.x, this.y, this.width, this.height];
  }
  toString() {
    return this.x + " " + this.y + " " + this.width + " " + this.height;
  }
  transform(t2) {
    t2 instanceof vt || (t2 = new vt(t2));
    let e2 = 1 / 0, i2 = -1 / 0, a2 = 1 / 0, s2 = -1 / 0;
    return [new bt(this.x, this.y), new bt(this.x2, this.y), new bt(this.x, this.y2), new bt(this.x2, this.y2)].forEach(function(r2) {
      r2 = r2.transform(t2), e2 = Math.min(e2, r2.x), i2 = Math.max(i2, r2.x), a2 = Math.min(a2, r2.y), s2 = Math.max(s2, r2.y);
    }), new _kt(e2, a2, i2 - e2, s2 - a2);
  }
};
function At(t2, e2, i2) {
  let a2;
  try {
    if (a2 = e2(t2.node), wt(a2) && (s2 = t2.node) !== O.document && !(O.document.documentElement.contains || function(t3) {
      for (; t3.parentNode; ) t3 = t3.parentNode;
      return t3 === O.document;
    }).call(O.document.documentElement, s2)) throw new Error("Element not in the dom");
  } catch (e3) {
    a2 = i2(t2);
  }
  var s2;
  return a2;
}
A({
  viewbox: {
    viewbox(t2, e2, i2, a2) {
      return null == t2 ? new kt(this.attr("viewBox")) : this.attr("viewBox", new kt(t2, e2, i2, a2));
    },
    zoom(t2, e2) {
      let {
        width: i2,
        height: a2
      } = this.attr(["width", "height"]);
      if ((i2 || a2) && "string" != typeof i2 && "string" != typeof a2 || (i2 = this.node.clientWidth, a2 = this.node.clientHeight), !i2 || !a2) throw new Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");
      const s2 = this.viewbox(), r2 = i2 / s2.width, n2 = a2 / s2.height, o2 = Math.min(r2, n2);
      if (null == t2) return o2;
      let l2 = o2 / t2;
      l2 === 1 / 0 && (l2 = Number.MAX_SAFE_INTEGER / 100), e2 = e2 || new bt(i2 / 2 / r2 + s2.x, a2 / 2 / n2 + s2.y);
      const h2 = new kt(s2).transform(new vt({
        scale: l2,
        origin: e2
      }));
      return this.viewbox(h2);
    }
  }
}), q(kt, "Box");
var Ct = class extends Array {
  constructor(t2 = [], ...e2) {
    if (super(t2, ...e2), "number" == typeof t2) return this;
    this.length = 0, this.push(...t2);
  }
};
Q([Ct], {
  each(t2, ...e2) {
    return "function" == typeof t2 ? this.map((e3, i2, a2) => t2.call(e3, e3, i2, a2)) : this.map((i2) => i2[t2](...e2));
  },
  toArray() {
    return Array.prototype.concat.apply([], this);
  }
});
var St = ["toArray", "constructor", "each"];
function Lt(t2, e2) {
  return new Ct(L((e2 || O.document).querySelectorAll(t2), function(t3) {
    return V(t3);
  }));
}
Ct.extend = function(t2) {
  t2 = t2.reduce((t3, e2) => (St.includes(e2) || "_" === e2[0] || (e2 in Array.prototype && (t3["$" + e2] = Array.prototype[e2]), t3[e2] = function(...t4) {
    return this.each(e2, ...t4);
  }), t3), {}), Q([Ct], t2);
};
var Mt = 0;
var Pt = {};
function It(t2) {
  let e2 = t2.getEventHolder();
  return e2 === O.window && (e2 = Pt), e2.events || (e2.events = {}), e2.events;
}
function Tt(t2) {
  return t2.getEventTarget();
}
function zt(t2, e2, i2, a2, s2) {
  const r2 = i2.bind(a2 || t2), n2 = B(t2), o2 = It(n2), l2 = Tt(n2);
  e2 = Array.isArray(e2) ? e2 : e2.split(dt), i2._svgjsListenerId || (i2._svgjsListenerId = ++Mt), e2.forEach(function(t3) {
    const e3 = t3.split(".")[0], a3 = t3.split(".")[1] || "*";
    o2[e3] = o2[e3] || {}, o2[e3][a3] = o2[e3][a3] || {}, o2[e3][a3][i2._svgjsListenerId] = r2, l2.addEventListener(e3, r2, s2 || false);
  });
}
function Xt(t2, e2, i2, a2) {
  const s2 = B(t2), r2 = It(s2), n2 = Tt(s2);
  ("function" != typeof i2 || (i2 = i2._svgjsListenerId)) && (e2 = Array.isArray(e2) ? e2 : (e2 || "").split(dt)).forEach(function(t3) {
    const e3 = t3 && t3.split(".")[0], o2 = t3 && t3.split(".")[1];
    let l2, h2;
    if (i2) r2[e3] && r2[e3][o2 || "*"] && (n2.removeEventListener(e3, r2[e3][o2 || "*"][i2], a2 || false), delete r2[e3][o2 || "*"][i2]);
    else if (e3 && o2) {
      if (r2[e3] && r2[e3][o2]) {
        for (h2 in r2[e3][o2]) Xt(n2, [e3, o2].join("."), h2);
        delete r2[e3][o2];
      }
    } else if (o2) for (t3 in r2) for (l2 in r2[t3]) o2 === l2 && Xt(n2, [t3, o2].join("."));
    else if (e3) {
      if (r2[e3]) {
        for (l2 in r2[e3]) Xt(n2, [e3, l2].join("."));
        delete r2[e3];
      }
    } else {
      for (t3 in r2) Xt(n2, t3);
      !function(t4) {
        let e4 = t4.getEventHolder();
        e4 === O.window && (e4 = Pt), e4.events && (e4.events = {});
      }(s2);
    }
  });
}
var Rt = class extends D {
  addEventListener() {
  }
  dispatch(t2, e2, i2) {
    return function(t3, e3, i3, a2) {
      const s2 = Tt(t3);
      return e3 instanceof O.window.Event || (e3 = new O.window.CustomEvent(e3, __spreadValues({
        detail: i3,
        cancelable: true
      }, a2))), s2.dispatchEvent(e3), e3;
    }(this, t2, e2, i2);
  }
  dispatchEvent(t2) {
    const e2 = this.getEventHolder().events;
    if (!e2) return true;
    const i2 = e2[t2.type];
    for (const e3 in i2) for (const a2 in i2[e3]) i2[e3][a2](t2);
    return !t2.defaultPrevented;
  }
  fire(t2, e2, i2) {
    return this.dispatch(t2, e2, i2), this;
  }
  getEventHolder() {
    return this;
  }
  getEventTarget() {
    return this;
  }
  off(t2, e2, i2) {
    return Xt(this, t2, e2, i2), this;
  }
  on(t2, e2, i2, a2) {
    return zt(this, t2, e2, i2, a2), this;
  }
  removeEventListener() {
  }
};
function Et() {
}
q(Rt, "EventTarget");
var Yt = 400;
var Ht = ">";
var Ot = 0;
var Ft = {
  "fill-opacity": 1,
  "stroke-opacity": 1,
  "stroke-width": 0,
  "stroke-linejoin": "miter",
  "stroke-linecap": "butt",
  fill: "#000000",
  stroke: "#000000",
  opacity: 1,
  x: 0,
  y: 0,
  cx: 0,
  cy: 0,
  width: 0,
  height: 0,
  r: 0,
  rx: 0,
  ry: 0,
  offset: 0,
  "stop-opacity": 1,
  "stop-color": "#000000",
  "text-anchor": "start"
};
var Dt = class extends Array {
  constructor(...t2) {
    super(...t2), this.init(...t2);
  }
  clone() {
    return new this.constructor(this);
  }
  init(t2) {
    return "number" == typeof t2 || (this.length = 0, this.push(...this.parse(t2))), this;
  }
  parse(t2 = []) {
    return t2 instanceof Array ? t2 : t2.trim().split(dt).map(parseFloat);
  }
  toArray() {
    return Array.prototype.concat.apply([], this);
  }
  toSet() {
    return new Set(this);
  }
  toString() {
    return this.join(" ");
  }
  valueOf() {
    const t2 = [];
    return t2.push(...this), t2;
  }
};
var _t = class __t {
  constructor(...t2) {
    this.init(...t2);
  }
  convert(t2) {
    return new __t(this.value, t2);
  }
  divide(t2) {
    return t2 = new __t(t2), new __t(this / t2, this.unit || t2.unit);
  }
  init(t2, e2) {
    return e2 = Array.isArray(t2) ? t2[1] : e2, t2 = Array.isArray(t2) ? t2[0] : t2, this.value = 0, this.unit = e2 || "", "number" == typeof t2 ? this.value = isNaN(t2) ? 0 : isFinite(t2) ? t2 : t2 < 0 ? -34e37 : 34e37 : "string" == typeof t2 ? (e2 = t2.match(tt)) && (this.value = parseFloat(e2[1]), "%" === e2[5] ? this.value /= 100 : "s" === e2[5] && (this.value *= 1e3), this.unit = e2[5]) : t2 instanceof __t && (this.value = t2.valueOf(), this.unit = t2.unit), this;
  }
  minus(t2) {
    return t2 = new __t(t2), new __t(this - t2, this.unit || t2.unit);
  }
  plus(t2) {
    return t2 = new __t(t2), new __t(this + t2, this.unit || t2.unit);
  }
  times(t2) {
    return t2 = new __t(t2), new __t(this * t2, this.unit || t2.unit);
  }
  toArray() {
    return [this.value, this.unit];
  }
  toJSON() {
    return this.toString();
  }
  toString() {
    return ("%" === this.unit ? ~~(1e8 * this.value) / 1e6 : "s" === this.unit ? this.value / 1e3 : this.value) + this.unit;
  }
  valueOf() {
    return this.value;
  }
};
var Nt = /* @__PURE__ */ new Set(["fill", "stroke", "color", "bgcolor", "stop-color", "flood-color", "lighting-color"]);
var Wt = [];
var Bt = class _Bt extends Rt {
  constructor(t2, e2) {
    super(), this.node = t2, this.type = t2.nodeName, e2 && t2 !== e2 && this.attr(e2);
  }
  add(t2, e2) {
    return (t2 = B(t2)).removeNamespace && this.node instanceof O.window.SVGElement && t2.removeNamespace(), null == e2 ? this.node.appendChild(t2.node) : t2.node !== this.node.childNodes[e2] && this.node.insertBefore(t2.node, this.node.childNodes[e2]), this;
  }
  addTo(t2, e2) {
    return B(t2).put(this, e2);
  }
  children() {
    return new Ct(L(this.node.children, function(t2) {
      return V(t2);
    }));
  }
  clear() {
    for (; this.node.hasChildNodes(); ) this.node.removeChild(this.node.lastChild);
    return this;
  }
  clone(t2 = true, e2 = true) {
    this.writeDataToDom();
    let i2 = this.node.cloneNode(t2);
    return e2 && (i2 = J(i2)), new this.constructor(i2);
  }
  each(t2, e2) {
    const i2 = this.children();
    let a2, s2;
    for (a2 = 0, s2 = i2.length; a2 < s2; a2++) t2.apply(i2[a2], [a2, i2]), e2 && i2[a2].each(t2, e2);
    return this;
  }
  element(t2, e2) {
    return this.put(new _Bt(W(t2), e2));
  }
  first() {
    return V(this.node.firstChild);
  }
  get(t2) {
    return V(this.node.childNodes[t2]);
  }
  getEventHolder() {
    return this.node;
  }
  getEventTarget() {
    return this.node;
  }
  has(t2) {
    return this.index(t2) >= 0;
  }
  html(t2, e2) {
    return this.xml(t2, e2, "http://www.w3.org/1999/xhtml");
  }
  id(t2) {
    return void 0 !== t2 || this.node.id || (this.node.id = $(this.type)), this.attr("id", t2);
  }
  index(t2) {
    return [].slice.call(this.node.childNodes).indexOf(t2.node);
  }
  last() {
    return V(this.node.lastChild);
  }
  matches(t2) {
    const e2 = this.node, i2 = e2.matches || e2.matchesSelector || e2.msMatchesSelector || e2.mozMatchesSelector || e2.webkitMatchesSelector || e2.oMatchesSelector || null;
    return i2 && i2.call(e2, t2);
  }
  parent(t2) {
    let e2 = this;
    if (!e2.node.parentNode) return null;
    if (e2 = V(e2.node.parentNode), !t2) return e2;
    do {
      if ("string" == typeof t2 ? e2.matches(t2) : e2 instanceof t2) return e2;
    } while (e2 = V(e2.node.parentNode));
    return e2;
  }
  put(t2, e2) {
    return t2 = B(t2), this.add(t2, e2), t2;
  }
  putIn(t2, e2) {
    return B(t2).add(this, e2);
  }
  remove() {
    return this.parent() && this.parent().removeElement(this), this;
  }
  removeElement(t2) {
    return this.node.removeChild(t2.node), this;
  }
  replace(t2) {
    return t2 = B(t2), this.node.parentNode && this.node.parentNode.replaceChild(t2.node, this.node), t2;
  }
  round(t2 = 2, e2 = null) {
    const i2 = 10 ** t2, a2 = this.attr(e2);
    for (const t3 in a2) "number" == typeof a2[t3] && (a2[t3] = Math.round(a2[t3] * i2) / i2);
    return this.attr(a2), this;
  }
  svg(t2, e2) {
    return this.xml(t2, e2, E);
  }
  toString() {
    return this.id();
  }
  words(t2) {
    return this.node.textContent = t2, this;
  }
  wrap(t2) {
    const e2 = this.parent();
    if (!e2) return this.addTo(t2);
    const i2 = e2.index(this);
    return e2.put(t2, i2).put(this);
  }
  writeDataToDom() {
    return this.each(function() {
      this.writeDataToDom();
    }), this;
  }
  xml(t2, e2, i2) {
    if ("boolean" == typeof t2 && (i2 = e2, e2 = t2, t2 = null), null == t2 || "function" == typeof t2) {
      e2 = null == e2 || e2, this.writeDataToDom();
      let i3 = this;
      if (null != t2) {
        if (i3 = V(i3.node.cloneNode(true)), e2) {
          const e3 = t2(i3);
          if (i3 = e3 || i3, false === e3) return "";
        }
        i3.each(function() {
          const e3 = t2(this), i4 = e3 || this;
          false === e3 ? this.remove() : e3 && this !== i4 && this.replace(i4);
        }, true);
      }
      return e2 ? i3.node.outerHTML : i3.node.innerHTML;
    }
    e2 = null != e2 && e2;
    const a2 = W("wrapper", i2), s2 = O.document.createDocumentFragment();
    a2.innerHTML = t2;
    for (let t3 = a2.children.length; t3--; ) s2.appendChild(a2.firstElementChild);
    const r2 = this.parent();
    return e2 ? this.replace(s2) && r2 : this.add(s2);
  }
};
Q(Bt, {
  attr: function(t2, e2, i2) {
    if (null == t2) {
      t2 = {}, e2 = this.node.attributes;
      for (const i3 of e2) t2[i3.nodeName] = ht.test(i3.nodeValue) ? parseFloat(i3.nodeValue) : i3.nodeValue;
      return t2;
    }
    if (t2 instanceof Array) return t2.reduce((t3, e3) => (t3[e3] = this.attr(e3), t3), {});
    if ("object" == typeof t2 && t2.constructor === Object) for (e2 in t2) this.attr(e2, t2[e2]);
    else if (null === e2) this.node.removeAttribute(t2);
    else {
      if (null == e2) return null == (e2 = this.node.getAttribute(t2)) ? Ft[t2] : ht.test(e2) ? parseFloat(e2) : e2;
      "number" == typeof (e2 = Wt.reduce((e3, i3) => i3(t2, e3, this), e2)) ? e2 = new _t(e2) : Nt.has(t2) && xt.isColor(e2) ? e2 = new xt(e2) : e2.constructor === Array && (e2 = new Dt(e2)), "leading" === t2 ? this.leading && this.leading(e2) : "string" == typeof i2 ? this.node.setAttributeNS(i2, t2, e2.toString()) : this.node.setAttribute(t2, e2.toString()), !this.rebuild || "font-size" !== t2 && "x" !== t2 || this.rebuild();
    }
    return this;
  },
  find: function(t2) {
    return Lt(t2, this.node);
  },
  findOne: function(t2) {
    return V(this.node.querySelector(t2));
  }
}), q(Bt, "Dom");
var Gt = class extends Bt {
  constructor(t2, e2) {
    super(t2, e2), this.dom = {}, this.node.instance = this, (t2.hasAttribute("data-svgjs") || t2.hasAttribute("svgjs:data")) && this.setData(JSON.parse(t2.getAttribute("data-svgjs")) ?? JSON.parse(t2.getAttribute("svgjs:data")) ?? {});
  }
  center(t2, e2) {
    return this.cx(t2).cy(e2);
  }
  cx(t2) {
    return null == t2 ? this.x() + this.width() / 2 : this.x(t2 - this.width() / 2);
  }
  cy(t2) {
    return null == t2 ? this.y() + this.height() / 2 : this.y(t2 - this.height() / 2);
  }
  defs() {
    const t2 = this.root();
    return t2 && t2.defs();
  }
  dmove(t2, e2) {
    return this.dx(t2).dy(e2);
  }
  dx(t2 = 0) {
    return this.x(new _t(t2).plus(this.x()));
  }
  dy(t2 = 0) {
    return this.y(new _t(t2).plus(this.y()));
  }
  getEventHolder() {
    return this;
  }
  height(t2) {
    return this.attr("height", t2);
  }
  move(t2, e2) {
    return this.x(t2).y(e2);
  }
  parents(t2 = this.root()) {
    const e2 = "string" == typeof t2;
    e2 || (t2 = B(t2));
    const i2 = new Ct();
    let a2 = this;
    for (; (a2 = a2.parent()) && a2.node !== O.document && "#document-fragment" !== a2.nodeName && (i2.push(a2), e2 || a2.node !== t2.node) && (!e2 || !a2.matches(t2)); ) if (a2.node === this.root().node) return null;
    return i2;
  }
  reference(t2) {
    if (!(t2 = this.attr(t2))) return null;
    const e2 = (t2 + "").match(at);
    return e2 ? B(e2[1]) : null;
  }
  root() {
    const t2 = this.parent(function(t3) {
      return _[t3];
    }(N));
    return t2 && t2.root();
  }
  setData(t2) {
    return this.dom = t2, this;
  }
  size(t2, e2) {
    const i2 = I(this, t2, e2);
    return this.width(new _t(i2.width)).height(new _t(i2.height));
  }
  width(t2) {
    return this.attr("width", t2);
  }
  writeDataToDom() {
    return R(this, this.dom), super.writeDataToDom();
  }
  x(t2) {
    return this.attr("x", t2);
  }
  y(t2) {
    return this.attr("y", t2);
  }
};
Q(Gt, {
  bbox: function() {
    const t2 = At(this, (t3) => t3.getBBox(), (t3) => {
      try {
        const e2 = t3.clone().addTo(yt().svg).show(), i2 = e2.node.getBBox();
        return e2.remove(), i2;
      } catch (e2) {
        throw new Error(`Getting bbox of element "${t3.node.nodeName}" is not possible: ${e2.toString()}`);
      }
    });
    return new kt(t2);
  },
  rbox: function(t2) {
    const e2 = At(this, (t3) => t3.getBoundingClientRect(), (t3) => {
      throw new Error(`Getting rbox of element "${t3.node.nodeName}" is not possible`);
    }), i2 = new kt(e2);
    return t2 ? i2.transform(t2.screenCTM().inverseO()) : i2.addOffset();
  },
  inside: function(t2, e2) {
    const i2 = this.bbox();
    return t2 > i2.x && e2 > i2.y && t2 < i2.x + i2.width && e2 < i2.y + i2.height;
  },
  point: function(t2, e2) {
    return new bt(t2, e2).transformO(this.screenCTM().inverseO());
  },
  ctm: function() {
    return new vt(this.node.getCTM());
  },
  screenCTM: function() {
    try {
      if ("function" == typeof this.isRoot && !this.isRoot()) {
        const t2 = this.rect(1, 1), e2 = t2.node.getScreenCTM();
        return t2.remove(), new vt(e2);
      }
      return new vt(this.node.getScreenCTM());
    } catch (t2) {
      return console.warn(`Cannot get CTM from SVG node ${this.node.nodeName}. Is the element rendered?`), new vt();
    }
  }
}), q(Gt, "Element");
var jt = {
  stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
  fill: ["color", "opacity", "rule"],
  prefix: function(t2, e2) {
    return "color" === e2 ? t2 : t2 + "-" + e2;
  }
};
["fill", "stroke"].forEach(function(t2) {
  const e2 = {};
  let i2;
  e2[t2] = function(e3) {
    if (void 0 === e3) return this.attr(t2);
    if ("string" == typeof e3 || e3 instanceof xt || xt.isRgb(e3) || e3 instanceof Gt) this.attr(t2, e3);
    else for (i2 = jt[t2].length - 1; i2 >= 0; i2--) null != e3[jt[t2][i2]] && this.attr(jt.prefix(t2, jt[t2][i2]), e3[jt[t2][i2]]);
    return this;
  }, A(["Element", "Runner"], e2);
}), A(["Element", "Runner"], {
  matrix: function(t2, e2, i2, a2, s2, r2) {
    return null == t2 ? new vt(this) : this.attr("transform", new vt(t2, e2, i2, a2, s2, r2));
  },
  rotate: function(t2, e2, i2) {
    return this.transform({
      rotate: t2,
      ox: e2,
      oy: i2
    }, true);
  },
  skew: function(t2, e2, i2, a2) {
    return 1 === arguments.length || 3 === arguments.length ? this.transform({
      skew: t2,
      ox: e2,
      oy: i2
    }, true) : this.transform({
      skew: [t2, e2],
      ox: i2,
      oy: a2
    }, true);
  },
  shear: function(t2, e2, i2) {
    return this.transform({
      shear: t2,
      ox: e2,
      oy: i2
    }, true);
  },
  scale: function(t2, e2, i2, a2) {
    return 1 === arguments.length || 3 === arguments.length ? this.transform({
      scale: t2,
      ox: e2,
      oy: i2
    }, true) : this.transform({
      scale: [t2, e2],
      ox: i2,
      oy: a2
    }, true);
  },
  translate: function(t2, e2) {
    return this.transform({
      translate: [t2, e2]
    }, true);
  },
  relative: function(t2, e2) {
    return this.transform({
      relative: [t2, e2]
    }, true);
  },
  flip: function(t2 = "both", e2 = "center") {
    return -1 === "xybothtrue".indexOf(t2) && (e2 = t2, t2 = "both"), this.transform({
      flip: t2,
      origin: e2
    }, true);
  },
  opacity: function(t2) {
    return this.attr("opacity", t2);
  }
}), A("radius", {
  radius: function(t2, e2 = t2) {
    return "radialGradient" === (this._element || this).type ? this.attr("r", new _t(t2)) : this.rx(t2).ry(e2);
  }
}), A("Path", {
  length: function() {
    return this.node.getTotalLength();
  },
  pointAt: function(t2) {
    return new bt(this.node.getPointAtLength(t2));
  }
}), A(["Element", "Runner"], {
  font: function(t2, e2) {
    if ("object" == typeof t2) {
      for (e2 in t2) this.font(e2, t2[e2]);
      return this;
    }
    return "leading" === t2 ? this.leading(e2) : "anchor" === t2 ? this.attr("text-anchor", e2) : "size" === t2 || "family" === t2 || "weight" === t2 || "stretch" === t2 || "variant" === t2 || "style" === t2 ? this.attr("font-" + t2, e2) : this.attr(t2, e2);
  }
});
A("Element", ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "mouseenter", "mouseleave", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel", "contextmenu", "wheel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel"].reduce(function(t2, e2) {
  return t2[e2] = function(t3) {
    return null === t3 ? this.off(e2) : this.on(e2, t3), this;
  }, t2;
}, {})), A("Element", {
  untransform: function() {
    return this.attr("transform", null);
  },
  matrixify: function() {
    const t2 = (this.attr("transform") || "").split(st).slice(0, -1).map(function(t3) {
      const e2 = t3.trim().split("(");
      return [e2[0], e2[1].split(dt).map(function(t4) {
        return parseFloat(t4);
      })];
    }).reverse().reduce(function(t3, e2) {
      return "matrix" === e2[0] ? t3.lmultiply(vt.fromArray(e2[1])) : t3[e2[0]].apply(t3, e2[1]);
    }, new vt());
    return t2;
  },
  toParent: function(t2, e2) {
    if (this === t2) return this;
    if (X(this.node)) return this.addTo(t2, e2);
    const i2 = this.screenCTM(), a2 = t2.screenCTM().inverse();
    return this.addTo(t2, e2).untransform().transform(a2.multiply(i2)), this;
  },
  toRoot: function(t2) {
    return this.toParent(this.root(), t2);
  },
  transform: function(t2, e2) {
    if (null == t2 || "string" == typeof t2) {
      const e3 = new vt(this).decompose();
      return null == t2 ? e3 : e3[t2];
    }
    vt.isMatrixLike(t2) || (t2 = __spreadProps(__spreadValues({}, t2), {
      origin: T(t2, this)
    }));
    const i2 = new vt(true === e2 ? this : e2 || false).transform(t2);
    return this.attr("transform", i2);
  }
});
var Vt = class _Vt extends Gt {
  flatten() {
    return this.each(function() {
      if (this instanceof _Vt) return this.flatten().ungroup();
    }), this;
  }
  ungroup(t2 = this.parent(), e2 = t2.index(this)) {
    return e2 = -1 === e2 ? t2.children().length : e2, this.each(function(i2, a2) {
      return a2[a2.length - i2 - 1].toParent(t2, e2);
    }), this.remove();
  }
};
q(Vt, "Container");
var Ut = class extends Vt {
  constructor(t2, e2 = t2) {
    super(G("defs", t2), e2);
  }
  flatten() {
    return this;
  }
  ungroup() {
    return this;
  }
};
q(Ut, "Defs");
var qt = class extends Gt {
};
function Zt(t2) {
  return this.attr("rx", t2);
}
function $t(t2) {
  return this.attr("ry", t2);
}
function Jt(t2) {
  return null == t2 ? this.cx() - this.rx() : this.cx(t2 + this.rx());
}
function Qt(t2) {
  return null == t2 ? this.cy() - this.ry() : this.cy(t2 + this.ry());
}
function Kt(t2) {
  return this.attr("cx", t2);
}
function te(t2) {
  return this.attr("cy", t2);
}
function ee(t2) {
  return null == t2 ? 2 * this.rx() : this.rx(new _t(t2).divide(2));
}
function ie(t2) {
  return null == t2 ? 2 * this.ry() : this.ry(new _t(t2).divide(2));
}
q(qt, "Shape");
var ae = Object.freeze({
  __proto__: null,
  cx: Kt,
  cy: te,
  height: ie,
  rx: Zt,
  ry: $t,
  width: ee,
  x: Jt,
  y: Qt
});
var se = class extends qt {
  constructor(t2, e2 = t2) {
    super(G("ellipse", t2), e2);
  }
  size(t2, e2) {
    const i2 = I(this, t2, e2);
    return this.rx(new _t(i2.width).divide(2)).ry(new _t(i2.height).divide(2));
  }
};
Q(se, ae), A("Container", {
  ellipse: K(function(t2 = 0, e2 = t2) {
    return this.put(new se()).size(t2, e2).move(0, 0);
  })
}), q(se, "Ellipse");
var re = class extends Bt {
  constructor(t2 = O.document.createDocumentFragment()) {
    super(t2);
  }
  xml(t2, e2, i2) {
    if ("boolean" == typeof t2 && (i2 = e2, e2 = t2, t2 = null), null == t2 || "function" == typeof t2) {
      const t3 = new Bt(W("wrapper", i2));
      return t3.add(this.node.cloneNode(true)), t3.xml(false, i2);
    }
    return super.xml(t2, false, i2);
  }
};
function ne(t2, e2) {
  return "radialGradient" === (this._element || this).type ? this.attr({
    fx: new _t(t2),
    fy: new _t(e2)
  }) : this.attr({
    x1: new _t(t2),
    y1: new _t(e2)
  });
}
function oe(t2, e2) {
  return "radialGradient" === (this._element || this).type ? this.attr({
    cx: new _t(t2),
    cy: new _t(e2)
  }) : this.attr({
    x2: new _t(t2),
    y2: new _t(e2)
  });
}
q(re, "Fragment");
var le = Object.freeze({
  __proto__: null,
  from: ne,
  to: oe
});
var he = class extends Vt {
  constructor(t2, e2) {
    super(G(t2 + "Gradient", "string" == typeof t2 ? null : t2), e2);
  }
  attr(t2, e2, i2) {
    return "transform" === t2 && (t2 = "gradientTransform"), super.attr(t2, e2, i2);
  }
  bbox() {
    return new kt();
  }
  targets() {
    return Lt("svg [fill*=" + this.id() + "]");
  }
  toString() {
    return this.url();
  }
  update(t2) {
    return this.clear(), "function" == typeof t2 && t2.call(this, this), this;
  }
  url() {
    return "url(#" + this.id() + ")";
  }
};
Q(he, le), A({
  Container: {
    gradient(...t2) {
      return this.defs().gradient(...t2);
    }
  },
  Defs: {
    gradient: K(function(t2, e2) {
      return this.put(new he(t2)).update(e2);
    })
  }
}), q(he, "Gradient");
var ce = class extends Vt {
  constructor(t2, e2 = t2) {
    super(G("pattern", t2), e2);
  }
  attr(t2, e2, i2) {
    return "transform" === t2 && (t2 = "patternTransform"), super.attr(t2, e2, i2);
  }
  bbox() {
    return new kt();
  }
  targets() {
    return Lt("svg [fill*=" + this.id() + "]");
  }
  toString() {
    return this.url();
  }
  update(t2) {
    return this.clear(), "function" == typeof t2 && t2.call(this, this), this;
  }
  url() {
    return "url(#" + this.id() + ")";
  }
};
A({
  Container: {
    pattern(...t2) {
      return this.defs().pattern(...t2);
    }
  },
  Defs: {
    pattern: K(function(t2, e2, i2) {
      return this.put(new ce()).update(i2).attr({
        x: 0,
        y: 0,
        width: t2,
        height: e2,
        patternUnits: "userSpaceOnUse"
      });
    })
  }
}), q(ce, "Pattern");
var de = class extends qt {
  constructor(t2, e2 = t2) {
    super(G("image", t2), e2);
  }
  load(t2, e2) {
    if (!t2) return this;
    const i2 = new O.window.Image();
    return zt(i2, "load", function(t3) {
      const a2 = this.parent(ce);
      0 === this.width() && 0 === this.height() && this.size(i2.width, i2.height), a2 instanceof ce && 0 === a2.width() && 0 === a2.height() && a2.size(this.width(), this.height()), "function" == typeof e2 && e2.call(this, t3);
    }, this), zt(i2, "load error", function() {
      Xt(i2);
    }), this.attr("href", i2.src = t2, H);
  }
};
var ue;
ue = function(t2, e2, i2) {
  return "fill" !== t2 && "stroke" !== t2 || ct.test(e2) && (e2 = i2.root().defs().image(e2)), e2 instanceof de && (e2 = i2.root().defs().pattern(0, 0, (t3) => {
    t3.add(e2);
  })), e2;
}, Wt.push(ue), A({
  Container: {
    image: K(function(t2, e2) {
      return this.put(new de()).size(0, 0).load(t2, e2);
    })
  }
}), q(de, "Image");
var ge = class extends Dt {
  bbox() {
    let t2 = -1 / 0, e2 = -1 / 0, i2 = 1 / 0, a2 = 1 / 0;
    return this.forEach(function(s2) {
      t2 = Math.max(s2[0], t2), e2 = Math.max(s2[1], e2), i2 = Math.min(s2[0], i2), a2 = Math.min(s2[1], a2);
    }), new kt(i2, a2, t2 - i2, e2 - a2);
  }
  move(t2, e2) {
    const i2 = this.bbox();
    if (t2 -= i2.x, e2 -= i2.y, !isNaN(t2) && !isNaN(e2)) for (let i3 = this.length - 1; i3 >= 0; i3--) this[i3] = [this[i3][0] + t2, this[i3][1] + e2];
    return this;
  }
  parse(t2 = [0, 0]) {
    const e2 = [];
    (t2 = t2 instanceof Array ? Array.prototype.concat.apply([], t2) : t2.trim().split(dt).map(parseFloat)).length % 2 != 0 && t2.pop();
    for (let i2 = 0, a2 = t2.length; i2 < a2; i2 += 2) e2.push([t2[i2], t2[i2 + 1]]);
    return e2;
  }
  size(t2, e2) {
    let i2;
    const a2 = this.bbox();
    for (i2 = this.length - 1; i2 >= 0; i2--) a2.width && (this[i2][0] = (this[i2][0] - a2.x) * t2 / a2.width + a2.x), a2.height && (this[i2][1] = (this[i2][1] - a2.y) * e2 / a2.height + a2.y);
    return this;
  }
  toLine() {
    return {
      x1: this[0][0],
      y1: this[0][1],
      x2: this[1][0],
      y2: this[1][1]
    };
  }
  toString() {
    const t2 = [];
    for (let e2 = 0, i2 = this.length; e2 < i2; e2++) t2.push(this[e2].join(","));
    return t2.join(" ");
  }
  transform(t2) {
    return this.clone().transformO(t2);
  }
  transformO(t2) {
    vt.isMatrixLike(t2) || (t2 = new vt(t2));
    for (let e2 = this.length; e2--; ) {
      const [i2, a2] = this[e2];
      this[e2][0] = t2.a * i2 + t2.c * a2 + t2.e, this[e2][1] = t2.b * i2 + t2.d * a2 + t2.f;
    }
    return this;
  }
};
var pe = ge;
var fe = Object.freeze({
  __proto__: null,
  MorphArray: pe,
  height: function(t2) {
    const e2 = this.bbox();
    return null == t2 ? e2.height : this.size(e2.width, t2);
  },
  width: function(t2) {
    const e2 = this.bbox();
    return null == t2 ? e2.width : this.size(t2, e2.height);
  },
  x: function(t2) {
    return null == t2 ? this.bbox().x : this.move(t2, this.bbox().y);
  },
  y: function(t2) {
    return null == t2 ? this.bbox().y : this.move(this.bbox().x, t2);
  }
});
var xe = class extends qt {
  constructor(t2, e2 = t2) {
    super(G("line", t2), e2);
  }
  array() {
    return new ge([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
  }
  move(t2, e2) {
    return this.attr(this.array().move(t2, e2).toLine());
  }
  plot(t2, e2, i2, a2) {
    return null == t2 ? this.array() : (t2 = void 0 !== e2 ? {
      x1: t2,
      y1: e2,
      x2: i2,
      y2: a2
    } : new ge(t2).toLine(), this.attr(t2));
  }
  size(t2, e2) {
    const i2 = I(this, t2, e2);
    return this.attr(this.array().size(i2.width, i2.height).toLine());
  }
};
Q(xe, fe), A({
  Container: {
    line: K(function(...t2) {
      return xe.prototype.plot.apply(this.put(new xe()), null != t2[0] ? t2 : [0, 0, 0, 0]);
    })
  }
}), q(xe, "Line");
var be = class extends Vt {
  constructor(t2, e2 = t2) {
    super(G("marker", t2), e2);
  }
  height(t2) {
    return this.attr("markerHeight", t2);
  }
  orient(t2) {
    return this.attr("orient", t2);
  }
  ref(t2, e2) {
    return this.attr("refX", t2).attr("refY", e2);
  }
  toString() {
    return "url(#" + this.id() + ")";
  }
  update(t2) {
    return this.clear(), "function" == typeof t2 && t2.call(this, this), this;
  }
  width(t2) {
    return this.attr("markerWidth", t2);
  }
};
function me(t2, e2) {
  return function(i2) {
    return null == i2 ? this[t2] : (this[t2] = i2, e2 && e2.call(this), this);
  };
}
A({
  Container: {
    marker(...t2) {
      return this.defs().marker(...t2);
    }
  },
  Defs: {
    marker: K(function(t2, e2, i2) {
      return this.put(new be()).size(t2, e2).ref(t2 / 2, e2 / 2).viewbox(0, 0, t2, e2).attr("orient", "auto").update(i2);
    })
  },
  marker: {
    marker(t2, e2, i2, a2) {
      let s2 = ["marker"];
      return "all" !== t2 && s2.push(t2), s2 = s2.join("-"), t2 = arguments[1] instanceof be ? arguments[1] : this.defs().marker(e2, i2, a2), this.attr(s2, t2);
    }
  }
}), q(be, "Marker");
var ve = {
  "-": function(t2) {
    return t2;
  },
  "<>": function(t2) {
    return -Math.cos(t2 * Math.PI) / 2 + 0.5;
  },
  ">": function(t2) {
    return Math.sin(t2 * Math.PI / 2);
  },
  "<": function(t2) {
    return 1 - Math.cos(t2 * Math.PI / 2);
  },
  bezier: function(t2, e2, i2, a2) {
    return function(s2) {
      return s2 < 0 ? t2 > 0 ? e2 / t2 * s2 : i2 > 0 ? a2 / i2 * s2 : 0 : s2 > 1 ? i2 < 1 ? (1 - a2) / (1 - i2) * s2 + (a2 - i2) / (1 - i2) : t2 < 1 ? (1 - e2) / (1 - t2) * s2 + (e2 - t2) / (1 - t2) : 1 : 3 * s2 * (1 - s2) ** 2 * e2 + 3 * s2 ** 2 * (1 - s2) * a2 + s2 ** 3;
    };
  },
  steps: function(t2, e2 = "end") {
    e2 = e2.split("-").reverse()[0];
    let i2 = t2;
    return "none" === e2 ? --i2 : "both" === e2 && ++i2, (a2, s2 = false) => {
      let r2 = Math.floor(a2 * t2);
      const n2 = a2 * r2 % 1 == 0;
      return "start" !== e2 && "both" !== e2 || ++r2, s2 && n2 && --r2, a2 >= 0 && r2 < 0 && (r2 = 0), a2 <= 1 && r2 > i2 && (r2 = i2), r2 / i2;
    };
  }
};
var ye = class {
  done() {
    return false;
  }
};
var we = class extends ye {
  constructor(t2 = Ht) {
    super(), this.ease = ve[t2] || t2;
  }
  step(t2, e2, i2) {
    return "number" != typeof t2 ? i2 < 1 ? t2 : e2 : t2 + (e2 - t2) * this.ease(i2);
  }
};
var ke = class extends ye {
  constructor(t2) {
    super(), this.stepper = t2;
  }
  done(t2) {
    return t2.done;
  }
  step(t2, e2, i2, a2) {
    return this.stepper(t2, e2, i2, a2);
  }
};
function Ae() {
  const t2 = (this._duration || 500) / 1e3, e2 = this._overshoot || 0, i2 = Math.PI, a2 = Math.log(e2 / 100 + 1e-10), s2 = -a2 / Math.sqrt(i2 * i2 + a2 * a2), r2 = 3.9 / (s2 * t2);
  this.d = 2 * s2 * r2, this.k = r2 * r2;
}
Q(class extends ke {
  constructor(t2 = 500, e2 = 0) {
    super(), this.duration(t2).overshoot(e2);
  }
  step(t2, e2, i2, a2) {
    if ("string" == typeof t2) return t2;
    if (a2.done = i2 === 1 / 0, i2 === 1 / 0) return e2;
    if (0 === i2) return t2;
    i2 > 100 && (i2 = 16), i2 /= 1e3;
    const s2 = a2.velocity || 0, r2 = -this.d * s2 - this.k * (t2 - e2), n2 = t2 + s2 * i2 + r2 * i2 * i2 / 2;
    return a2.velocity = s2 + r2 * i2, a2.done = Math.abs(e2 - n2) + Math.abs(s2) < 2e-3, a2.done ? e2 : n2;
  }
}, {
  duration: me("_duration", Ae),
  overshoot: me("_overshoot", Ae)
});
Q(class extends ke {
  constructor(t2 = 0.1, e2 = 0.01, i2 = 0, a2 = 1e3) {
    super(), this.p(t2).i(e2).d(i2).windup(a2);
  }
  step(t2, e2, i2, a2) {
    if ("string" == typeof t2) return t2;
    if (a2.done = i2 === 1 / 0, i2 === 1 / 0) return e2;
    if (0 === i2) return t2;
    const s2 = e2 - t2;
    let r2 = (a2.integral || 0) + s2 * i2;
    const n2 = (s2 - (a2.error || 0)) / i2, o2 = this._windup;
    return false !== o2 && (r2 = Math.max(-o2, Math.min(r2, o2))), a2.error = s2, a2.integral = r2, a2.done = Math.abs(s2) < 1e-3, a2.done ? e2 : t2 + (this.P * s2 + this.I * r2 + this.D * n2);
  }
}, {
  windup: me("_windup"),
  p: me("P"),
  i: me("I"),
  d: me("D")
});
var Ce = {
  M: 2,
  L: 2,
  H: 1,
  V: 1,
  C: 6,
  S: 4,
  Q: 4,
  T: 2,
  A: 7,
  Z: 0
};
var Se = {
  M: function(t2, e2, i2) {
    return e2.x = i2.x = t2[0], e2.y = i2.y = t2[1], ["M", e2.x, e2.y];
  },
  L: function(t2, e2) {
    return e2.x = t2[0], e2.y = t2[1], ["L", t2[0], t2[1]];
  },
  H: function(t2, e2) {
    return e2.x = t2[0], ["H", t2[0]];
  },
  V: function(t2, e2) {
    return e2.y = t2[0], ["V", t2[0]];
  },
  C: function(t2, e2) {
    return e2.x = t2[4], e2.y = t2[5], ["C", t2[0], t2[1], t2[2], t2[3], t2[4], t2[5]];
  },
  S: function(t2, e2) {
    return e2.x = t2[2], e2.y = t2[3], ["S", t2[0], t2[1], t2[2], t2[3]];
  },
  Q: function(t2, e2) {
    return e2.x = t2[2], e2.y = t2[3], ["Q", t2[0], t2[1], t2[2], t2[3]];
  },
  T: function(t2, e2) {
    return e2.x = t2[0], e2.y = t2[1], ["T", t2[0], t2[1]];
  },
  Z: function(t2, e2, i2) {
    return e2.x = i2.x, e2.y = i2.y, ["Z"];
  },
  A: function(t2, e2) {
    return e2.x = t2[5], e2.y = t2[6], ["A", t2[0], t2[1], t2[2], t2[3], t2[4], t2[5], t2[6]];
  }
};
var Le = "mlhvqtcsaz".split("");
for (let t2 = 0, e2 = Le.length; t2 < e2; ++t2) Se[Le[t2]] = /* @__PURE__ */ function(t3) {
  return function(e3, i2, a2) {
    if ("H" === t3) e3[0] = e3[0] + i2.x;
    else if ("V" === t3) e3[0] = e3[0] + i2.y;
    else if ("A" === t3) e3[5] = e3[5] + i2.x, e3[6] = e3[6] + i2.y;
    else for (let t4 = 0, a3 = e3.length; t4 < a3; ++t4) e3[t4] = e3[t4] + (t4 % 2 ? i2.y : i2.x);
    return Se[t3](e3, i2, a2);
  };
}(Le[t2].toUpperCase());
function Me(t2) {
  return t2.segment.length && t2.segment.length - 1 === Ce[t2.segment[0].toUpperCase()];
}
function Pe(t2, e2) {
  t2.inNumber && Ie(t2, false);
  const i2 = ut.test(e2);
  if (i2) t2.segment = [e2];
  else {
    const e3 = t2.lastCommand, i3 = e3.toLowerCase(), a2 = e3 === i3;
    t2.segment = ["m" === i3 ? a2 ? "l" : "L" : e3];
  }
  return t2.inSegment = true, t2.lastCommand = t2.segment[0], i2;
}
function Ie(t2, e2) {
  if (!t2.inNumber) throw new Error("Parser Error");
  t2.number && t2.segment.push(parseFloat(t2.number)), t2.inNumber = e2, t2.number = "", t2.pointSeen = false, t2.hasExponent = false, Me(t2) && Te(t2);
}
function Te(t2) {
  t2.inSegment = false, t2.absolute && (t2.segment = function(t3) {
    const e2 = t3.segment[0];
    return Se[e2](t3.segment.slice(1), t3.p, t3.p0);
  }(t2)), t2.segments.push(t2.segment);
}
function ze(t2) {
  if (!t2.segment.length) return false;
  const e2 = "A" === t2.segment[0].toUpperCase(), i2 = t2.segment.length;
  return e2 && (4 === i2 || 5 === i2);
}
function Xe(t2) {
  return "E" === t2.lastToken.toUpperCase();
}
var Re = /* @__PURE__ */ new Set([" ", ",", "	", "\n", "\r", "\f"]);
var Ee = class extends Dt {
  bbox() {
    return yt().path.setAttribute("d", this.toString()), new kt(yt.nodes.path.getBBox());
  }
  move(t2, e2) {
    const i2 = this.bbox();
    if (t2 -= i2.x, e2 -= i2.y, !isNaN(t2) && !isNaN(e2)) for (let i3, a2 = this.length - 1; a2 >= 0; a2--) i3 = this[a2][0], "M" === i3 || "L" === i3 || "T" === i3 ? (this[a2][1] += t2, this[a2][2] += e2) : "H" === i3 ? this[a2][1] += t2 : "V" === i3 ? this[a2][1] += e2 : "C" === i3 || "S" === i3 || "Q" === i3 ? (this[a2][1] += t2, this[a2][2] += e2, this[a2][3] += t2, this[a2][4] += e2, "C" === i3 && (this[a2][5] += t2, this[a2][6] += e2)) : "A" === i3 && (this[a2][6] += t2, this[a2][7] += e2);
    return this;
  }
  parse(t2 = "M0 0") {
    return Array.isArray(t2) && (t2 = Array.prototype.concat.apply([], t2).toString()), function(t3, e2 = true) {
      let i2 = 0, a2 = "";
      const s2 = {
        segment: [],
        inNumber: false,
        number: "",
        lastToken: "",
        inSegment: false,
        segments: [],
        pointSeen: false,
        hasExponent: false,
        absolute: e2,
        p0: new bt(),
        p: new bt()
      };
      for (; s2.lastToken = a2, a2 = t3.charAt(i2++); ) if (s2.inSegment || !Pe(s2, a2)) if ("." !== a2) {
        if (isNaN(parseInt(a2))) {
          if (Re.has(a2)) s2.inNumber && Ie(s2, false);
          else if ("-" !== a2 && "+" !== a2) {
            if ("E" !== a2.toUpperCase()) {
              if (ut.test(a2)) {
                if (s2.inNumber) Ie(s2, false);
                else {
                  if (!Me(s2)) throw new Error("parser Error");
                  Te(s2);
                }
                --i2;
              }
            } else s2.number += a2, s2.hasExponent = true;
          } else {
            if (s2.inNumber && !Xe(s2)) {
              Ie(s2, false), --i2;
              continue;
            }
            s2.number += a2, s2.inNumber = true;
          }
        } else {
          if ("0" === s2.number || ze(s2)) {
            s2.inNumber = true, s2.number = a2, Ie(s2, true);
            continue;
          }
          s2.inNumber = true, s2.number += a2;
        }
      } else {
        if (s2.pointSeen || s2.hasExponent) {
          Ie(s2, false), --i2;
          continue;
        }
        s2.inNumber = true, s2.pointSeen = true, s2.number += a2;
      }
      return s2.inNumber && Ie(s2, false), s2.inSegment && Me(s2) && Te(s2), s2.segments;
    }(t2);
  }
  size(t2, e2) {
    const i2 = this.bbox();
    let a2, s2;
    for (i2.width = 0 === i2.width ? 1 : i2.width, i2.height = 0 === i2.height ? 1 : i2.height, a2 = this.length - 1; a2 >= 0; a2--) s2 = this[a2][0], "M" === s2 || "L" === s2 || "T" === s2 ? (this[a2][1] = (this[a2][1] - i2.x) * t2 / i2.width + i2.x, this[a2][2] = (this[a2][2] - i2.y) * e2 / i2.height + i2.y) : "H" === s2 ? this[a2][1] = (this[a2][1] - i2.x) * t2 / i2.width + i2.x : "V" === s2 ? this[a2][1] = (this[a2][1] - i2.y) * e2 / i2.height + i2.y : "C" === s2 || "S" === s2 || "Q" === s2 ? (this[a2][1] = (this[a2][1] - i2.x) * t2 / i2.width + i2.x, this[a2][2] = (this[a2][2] - i2.y) * e2 / i2.height + i2.y, this[a2][3] = (this[a2][3] - i2.x) * t2 / i2.width + i2.x, this[a2][4] = (this[a2][4] - i2.y) * e2 / i2.height + i2.y, "C" === s2 && (this[a2][5] = (this[a2][5] - i2.x) * t2 / i2.width + i2.x, this[a2][6] = (this[a2][6] - i2.y) * e2 / i2.height + i2.y)) : "A" === s2 && (this[a2][1] = this[a2][1] * t2 / i2.width, this[a2][2] = this[a2][2] * e2 / i2.height, this[a2][6] = (this[a2][6] - i2.x) * t2 / i2.width + i2.x, this[a2][7] = (this[a2][7] - i2.y) * e2 / i2.height + i2.y);
    return this;
  }
  toString() {
    return function(t2) {
      let e2 = "";
      for (let i2 = 0, a2 = t2.length; i2 < a2; i2++) e2 += t2[i2][0], null != t2[i2][1] && (e2 += t2[i2][1], null != t2[i2][2] && (e2 += " ", e2 += t2[i2][2], null != t2[i2][3] && (e2 += " ", e2 += t2[i2][3], e2 += " ", e2 += t2[i2][4], null != t2[i2][5] && (e2 += " ", e2 += t2[i2][5], e2 += " ", e2 += t2[i2][6], null != t2[i2][7] && (e2 += " ", e2 += t2[i2][7])))));
      return e2 + " ";
    }(this);
  }
};
var Ye = (t2) => {
  const e2 = typeof t2;
  return "number" === e2 ? _t : "string" === e2 ? xt.isColor(t2) ? xt : dt.test(t2) ? ut.test(t2) ? Ee : Dt : tt.test(t2) ? _t : Oe : Ne.indexOf(t2.constructor) > -1 ? t2.constructor : Array.isArray(t2) ? Dt : "object" === e2 ? _e : Oe;
};
var He = class {
  constructor(t2) {
    this._stepper = t2 || new we("-"), this._from = null, this._to = null, this._type = null, this._context = null, this._morphObj = null;
  }
  at(t2) {
    return this._morphObj.morph(this._from, this._to, t2, this._stepper, this._context);
  }
  done() {
    return this._context.map(this._stepper.done).reduce(function(t2, e2) {
      return t2 && e2;
    }, true);
  }
  from(t2) {
    return null == t2 ? this._from : (this._from = this._set(t2), this);
  }
  stepper(t2) {
    return null == t2 ? this._stepper : (this._stepper = t2, this);
  }
  to(t2) {
    return null == t2 ? this._to : (this._to = this._set(t2), this);
  }
  type(t2) {
    return null == t2 ? this._type : (this._type = t2, this);
  }
  _set(t2) {
    this._type || this.type(Ye(t2));
    let e2 = new this._type(t2);
    return this._type === xt && (e2 = this._to ? e2[this._to[4]]() : this._from ? e2[this._from[4]]() : e2), this._type === _e && (e2 = this._to ? e2.align(this._to) : this._from ? e2.align(this._from) : e2), e2 = e2.toConsumable(), this._morphObj = this._morphObj || new this._type(), this._context = this._context || Array.apply(null, Array(e2.length)).map(Object).map(function(t3) {
      return t3.done = true, t3;
    }), e2;
  }
};
var Oe = class {
  constructor(...t2) {
    this.init(...t2);
  }
  init(t2) {
    return t2 = Array.isArray(t2) ? t2[0] : t2, this.value = t2, this;
  }
  toArray() {
    return [this.value];
  }
  valueOf() {
    return this.value;
  }
};
var Fe = class _Fe {
  constructor(...t2) {
    this.init(...t2);
  }
  init(t2) {
    return Array.isArray(t2) && (t2 = {
      scaleX: t2[0],
      scaleY: t2[1],
      shear: t2[2],
      rotate: t2[3],
      translateX: t2[4],
      translateY: t2[5],
      originX: t2[6],
      originY: t2[7]
    }), Object.assign(this, _Fe.defaults, t2), this;
  }
  toArray() {
    const t2 = this;
    return [t2.scaleX, t2.scaleY, t2.shear, t2.rotate, t2.translateX, t2.translateY, t2.originX, t2.originY];
  }
};
Fe.defaults = {
  scaleX: 1,
  scaleY: 1,
  shear: 0,
  rotate: 0,
  translateX: 0,
  translateY: 0,
  originX: 0,
  originY: 0
};
var De = (t2, e2) => t2[0] < e2[0] ? -1 : t2[0] > e2[0] ? 1 : 0;
var _e = class {
  constructor(...t2) {
    this.init(...t2);
  }
  align(t2) {
    const e2 = this.values;
    for (let i2 = 0, a2 = e2.length; i2 < a2; ++i2) {
      if (e2[i2 + 1] === t2[i2 + 1]) {
        if (e2[i2 + 1] === xt && t2[i2 + 7] !== e2[i2 + 7]) {
          const e3 = t2[i2 + 7], a4 = new xt(this.values.splice(i2 + 3, 5))[e3]().toArray();
          this.values.splice(i2 + 3, 0, ...a4);
        }
        i2 += e2[i2 + 2] + 2;
        continue;
      }
      if (!t2[i2 + 1]) return this;
      const a3 = new t2[i2 + 1]().toArray(), s2 = e2[i2 + 2] + 3;
      e2.splice(i2, s2, t2[i2], t2[i2 + 1], t2[i2 + 2], ...a3), i2 += e2[i2 + 2] + 2;
    }
    return this;
  }
  init(t2) {
    if (this.values = [], Array.isArray(t2)) return void (this.values = t2.slice());
    t2 = t2 || {};
    const e2 = [];
    for (const i2 in t2) {
      const a2 = Ye(t2[i2]), s2 = new a2(t2[i2]).toArray();
      e2.push([i2, a2, s2.length, ...s2]);
    }
    return e2.sort(De), this.values = e2.reduce((t3, e3) => t3.concat(e3), []), this;
  }
  toArray() {
    return this.values;
  }
  valueOf() {
    const t2 = {}, e2 = this.values;
    for (; e2.length; ) {
      const i2 = e2.shift(), a2 = e2.shift(), s2 = e2.shift(), r2 = e2.splice(0, s2);
      t2[i2] = new a2(r2);
    }
    return t2;
  }
};
var Ne = [Oe, Fe, _e];
var We = class extends qt {
  constructor(t2, e2 = t2) {
    super(G("path", t2), e2);
  }
  array() {
    return this._array || (this._array = new Ee(this.attr("d")));
  }
  clear() {
    return delete this._array, this;
  }
  height(t2) {
    return null == t2 ? this.bbox().height : this.size(this.bbox().width, t2);
  }
  move(t2, e2) {
    return this.attr("d", this.array().move(t2, e2));
  }
  plot(t2) {
    return null == t2 ? this.array() : this.clear().attr("d", "string" == typeof t2 ? t2 : this._array = new Ee(t2));
  }
  size(t2, e2) {
    const i2 = I(this, t2, e2);
    return this.attr("d", this.array().size(i2.width, i2.height));
  }
  width(t2) {
    return null == t2 ? this.bbox().width : this.size(t2, this.bbox().height);
  }
  x(t2) {
    return null == t2 ? this.bbox().x : this.move(t2, this.bbox().y);
  }
  y(t2) {
    return null == t2 ? this.bbox().y : this.move(this.bbox().x, t2);
  }
};
We.prototype.MorphArray = Ee, A({
  Container: {
    path: K(function(t2) {
      return this.put(new We()).plot(t2 || new Ee());
    })
  }
}), q(We, "Path");
var Be = Object.freeze({
  __proto__: null,
  array: function() {
    return this._array || (this._array = new ge(this.attr("points")));
  },
  clear: function() {
    return delete this._array, this;
  },
  move: function(t2, e2) {
    return this.attr("points", this.array().move(t2, e2));
  },
  plot: function(t2) {
    return null == t2 ? this.array() : this.clear().attr("points", "string" == typeof t2 ? t2 : this._array = new ge(t2));
  },
  size: function(t2, e2) {
    const i2 = I(this, t2, e2);
    return this.attr("points", this.array().size(i2.width, i2.height));
  }
});
var Ge = class extends qt {
  constructor(t2, e2 = t2) {
    super(G("polygon", t2), e2);
  }
};
A({
  Container: {
    polygon: K(function(t2) {
      return this.put(new Ge()).plot(t2 || new ge());
    })
  }
}), Q(Ge, fe), Q(Ge, Be), q(Ge, "Polygon");
var je = class extends qt {
  constructor(t2, e2 = t2) {
    super(G("polyline", t2), e2);
  }
};
A({
  Container: {
    polyline: K(function(t2) {
      return this.put(new je()).plot(t2 || new ge());
    })
  }
}), Q(je, fe), Q(je, Be), q(je, "Polyline");
var Ve = class extends qt {
  constructor(t2, e2 = t2) {
    super(G("rect", t2), e2);
  }
};
Q(Ve, {
  rx: Zt,
  ry: $t
}), A({
  Container: {
    rect: K(function(t2, e2) {
      return this.put(new Ve()).size(t2, e2);
    })
  }
}), q(Ve, "Rect");
var Ue = class {
  constructor() {
    this._first = null, this._last = null;
  }
  first() {
    return this._first && this._first.value;
  }
  last() {
    return this._last && this._last.value;
  }
  push(t2) {
    const e2 = void 0 !== t2.next ? t2 : {
      value: t2,
      next: null,
      prev: null
    };
    return this._last ? (e2.prev = this._last, this._last.next = e2, this._last = e2) : (this._last = e2, this._first = e2), e2;
  }
  remove(t2) {
    t2.prev && (t2.prev.next = t2.next), t2.next && (t2.next.prev = t2.prev), t2 === this._last && (this._last = t2.prev), t2 === this._first && (this._first = t2.next), t2.prev = null, t2.next = null;
  }
  shift() {
    const t2 = this._first;
    return t2 ? (this._first = t2.next, this._first && (this._first.prev = null), this._last = this._first ? this._last : null, t2.value) : null;
  }
};
var qe = {
  nextDraw: null,
  frames: new Ue(),
  timeouts: new Ue(),
  immediates: new Ue(),
  timer: () => O.window.performance || O.window.Date,
  transforms: [],
  frame(t2) {
    const e2 = qe.frames.push({
      run: t2
    });
    return null === qe.nextDraw && (qe.nextDraw = O.window.requestAnimationFrame(qe._draw)), e2;
  },
  timeout(t2, e2) {
    e2 = e2 || 0;
    const i2 = qe.timer().now() + e2, a2 = qe.timeouts.push({
      run: t2,
      time: i2
    });
    return null === qe.nextDraw && (qe.nextDraw = O.window.requestAnimationFrame(qe._draw)), a2;
  },
  immediate(t2) {
    const e2 = qe.immediates.push(t2);
    return null === qe.nextDraw && (qe.nextDraw = O.window.requestAnimationFrame(qe._draw)), e2;
  },
  cancelFrame(t2) {
    null != t2 && qe.frames.remove(t2);
  },
  clearTimeout(t2) {
    null != t2 && qe.timeouts.remove(t2);
  },
  cancelImmediate(t2) {
    null != t2 && qe.immediates.remove(t2);
  },
  _draw(t2) {
    let e2 = null;
    const i2 = qe.timeouts.last();
    for (; (e2 = qe.timeouts.shift()) && (t2 >= e2.time ? e2.run() : qe.timeouts.push(e2), e2 !== i2); ) ;
    let a2 = null;
    const s2 = qe.frames.last();
    for (; a2 !== s2 && (a2 = qe.frames.shift()); ) a2.run(t2);
    let r2 = null;
    for (; r2 = qe.immediates.shift(); ) r2();
    qe.nextDraw = qe.timeouts.first() || qe.frames.first() ? O.window.requestAnimationFrame(qe._draw) : null;
  }
};
var Ze = function(t2) {
  const e2 = t2.start, i2 = t2.runner.duration();
  return {
    start: e2,
    duration: i2,
    end: e2 + i2,
    runner: t2.runner
  };
};
var $e = function() {
  const t2 = O.window;
  return (t2.performance || t2.Date).now();
};
var Je = class extends Rt {
  constructor(t2 = $e) {
    super(), this._timeSource = t2, this.terminate();
  }
  active() {
    return !!this._nextFrame;
  }
  finish() {
    return this.time(this.getEndTimeOfTimeline() + 1), this.pause();
  }
  getEndTime() {
    const t2 = this.getLastRunnerInfo(), e2 = t2 ? t2.runner.duration() : 0;
    return (t2 ? t2.start : this._time) + e2;
  }
  getEndTimeOfTimeline() {
    const t2 = this._runners.map((t3) => t3.start + t3.runner.duration());
    return Math.max(0, ...t2);
  }
  getLastRunnerInfo() {
    return this.getRunnerInfoById(this._lastRunnerId);
  }
  getRunnerInfoById(t2) {
    return this._runners[this._runnerIds.indexOf(t2)] || null;
  }
  pause() {
    return this._paused = true, this._continue();
  }
  persist(t2) {
    return null == t2 ? this._persist : (this._persist = t2, this);
  }
  play() {
    return this._paused = false, this.updateTime()._continue();
  }
  reverse(t2) {
    const e2 = this.speed();
    if (null == t2) return this.speed(-e2);
    const i2 = Math.abs(e2);
    return this.speed(t2 ? -i2 : i2);
  }
  schedule(t2, e2, i2) {
    if (null == t2) return this._runners.map(Ze);
    let a2 = 0;
    const s2 = this.getEndTime();
    if (e2 = e2 || 0, null == i2 || "last" === i2 || "after" === i2) a2 = s2;
    else if ("absolute" === i2 || "start" === i2) a2 = e2, e2 = 0;
    else if ("now" === i2) a2 = this._time;
    else if ("relative" === i2) {
      const i3 = this.getRunnerInfoById(t2.id);
      i3 && (a2 = i3.start + e2, e2 = 0);
    } else {
      if ("with-last" !== i2) throw new Error('Invalid value for the "when" parameter');
      {
        const t3 = this.getLastRunnerInfo();
        a2 = t3 ? t3.start : this._time;
      }
    }
    t2.unschedule(), t2.timeline(this);
    const r2 = t2.persist(), n2 = {
      persist: null === r2 ? this._persist : r2,
      start: a2 + e2,
      runner: t2
    };
    return this._lastRunnerId = t2.id, this._runners.push(n2), this._runners.sort((t3, e3) => t3.start - e3.start), this._runnerIds = this._runners.map((t3) => t3.runner.id), this.updateTime()._continue(), this;
  }
  seek(t2) {
    return this.time(this._time + t2);
  }
  source(t2) {
    return null == t2 ? this._timeSource : (this._timeSource = t2, this);
  }
  speed(t2) {
    return null == t2 ? this._speed : (this._speed = t2, this);
  }
  stop() {
    return this.time(0), this.pause();
  }
  time(t2) {
    return null == t2 ? this._time : (this._time = t2, this._continue(true));
  }
  unschedule(t2) {
    const e2 = this._runnerIds.indexOf(t2.id);
    return e2 < 0 || (this._runners.splice(e2, 1), this._runnerIds.splice(e2, 1), t2.timeline(null)), this;
  }
  updateTime() {
    return this.active() || (this._lastSourceTime = this._timeSource()), this;
  }
  _continue(t2 = false) {
    return qe.cancelFrame(this._nextFrame), this._nextFrame = null, t2 ? this._stepImmediate() : (this._paused || (this._nextFrame = qe.frame(this._step)), this);
  }
  _stepFn(t2 = false) {
    const e2 = this._timeSource();
    let i2 = e2 - this._lastSourceTime;
    t2 && (i2 = 0);
    const a2 = this._speed * i2 + (this._time - this._lastStepTime);
    this._lastSourceTime = e2, t2 || (this._time += a2, this._time = this._time < 0 ? 0 : this._time), this._lastStepTime = this._time, this.fire("time", this._time);
    for (let t3 = this._runners.length; t3--; ) {
      const e3 = this._runners[t3], i3 = e3.runner;
      this._time - e3.start <= 0 && i3.reset();
    }
    let s2 = false;
    for (let t3 = 0, e3 = this._runners.length; t3 < e3; t3++) {
      const i3 = this._runners[t3], r2 = i3.runner;
      let n2 = a2;
      const o2 = this._time - i3.start;
      if (o2 <= 0) {
        s2 = true;
        continue;
      }
      if (o2 < n2 && (n2 = o2), !r2.active()) continue;
      if (r2.step(n2).done) {
        if (true !== i3.persist) {
          r2.duration() - r2.time() + this._time + i3.persist < this._time && (r2.unschedule(), --t3, --e3);
        }
      } else s2 = true;
    }
    return s2 && !(this._speed < 0 && 0 === this._time) || this._runnerIds.length && this._speed < 0 && this._time > 0 ? this._continue() : (this.pause(), this.fire("finished")), this;
  }
  terminate() {
    this._startTime = 0, this._speed = 1, this._persist = 0, this._nextFrame = null, this._paused = true, this._runners = [], this._runnerIds = [], this._lastRunnerId = -1, this._time = 0, this._lastSourceTime = 0, this._lastStepTime = 0, this._step = this._stepFn.bind(this, false), this._stepImmediate = this._stepFn.bind(this, true);
  }
};
A({
  Element: {
    timeline: function(t2) {
      return null == t2 ? (this._timeline = this._timeline || new Je(), this._timeline) : (this._timeline = t2, this);
    }
  }
});
var Qe = class _Qe extends Rt {
  constructor(t2) {
    super(), this.id = _Qe.id++, t2 = "function" == typeof (t2 = null == t2 ? Yt : t2) ? new ke(t2) : t2, this._element = null, this._timeline = null, this.done = false, this._queue = [], this._duration = "number" == typeof t2 && t2, this._isDeclarative = t2 instanceof ke, this._stepper = this._isDeclarative ? t2 : new we(), this._history = {}, this.enabled = true, this._time = 0, this._lastTime = 0, this._reseted = true, this.transforms = new vt(), this.transformId = 1, this._haveReversed = false, this._reverse = false, this._loopsDone = 0, this._swing = false, this._wait = 0, this._times = 1, this._frameId = null, this._persist = !!this._isDeclarative || null;
  }
  static sanitise(t2, e2, i2) {
    let a2 = 1, s2 = false, r2 = 0;
    return e2 = e2 ?? Ot, i2 = i2 || "last", "object" != typeof (t2 = t2 ?? Yt) || t2 instanceof ye || (e2 = t2.delay ?? e2, i2 = t2.when ?? i2, s2 = t2.swing || s2, a2 = t2.times ?? a2, r2 = t2.wait ?? r2, t2 = t2.duration ?? Yt), {
      duration: t2,
      delay: e2,
      swing: s2,
      times: a2,
      wait: r2,
      when: i2
    };
  }
  active(t2) {
    return null == t2 ? this.enabled : (this.enabled = t2, this);
  }
  addTransform(t2) {
    return this.transforms.lmultiplyO(t2), this;
  }
  after(t2) {
    return this.on("finished", t2);
  }
  animate(t2, e2, i2) {
    const a2 = _Qe.sanitise(t2, e2, i2), s2 = new _Qe(a2.duration);
    return this._timeline && s2.timeline(this._timeline), this._element && s2.element(this._element), s2.loop(a2).schedule(a2.delay, a2.when);
  }
  clearTransform() {
    return this.transforms = new vt(), this;
  }
  clearTransformsFromQueue() {
    this.done && this._timeline && this._timeline._runnerIds.includes(this.id) || (this._queue = this._queue.filter((t2) => !t2.isTransform));
  }
  delay(t2) {
    return this.animate(0, t2);
  }
  duration() {
    return this._times * (this._wait + this._duration) - this._wait;
  }
  during(t2) {
    return this.queue(null, t2);
  }
  ease(t2) {
    return this._stepper = new we(t2), this;
  }
  element(t2) {
    return null == t2 ? this._element : (this._element = t2, t2._prepareRunner(), this);
  }
  finish() {
    return this.step(1 / 0);
  }
  loop(t2, e2, i2) {
    return "object" == typeof t2 && (e2 = t2.swing, i2 = t2.wait, t2 = t2.times), this._times = t2 || 1 / 0, this._swing = e2 || false, this._wait = i2 || 0, true === this._times && (this._times = 1 / 0), this;
  }
  loops(t2) {
    const e2 = this._duration + this._wait;
    if (null == t2) {
      const t3 = Math.floor(this._time / e2), i3 = (this._time - t3 * e2) / this._duration;
      return Math.min(t3 + i3, this._times);
    }
    const i2 = t2 % 1, a2 = e2 * Math.floor(t2) + this._duration * i2;
    return this.time(a2);
  }
  persist(t2) {
    return null == t2 ? this._persist : (this._persist = t2, this);
  }
  position(t2) {
    const e2 = this._time, i2 = this._duration, a2 = this._wait, s2 = this._times, r2 = this._swing, n2 = this._reverse;
    let o2;
    if (null == t2) {
      const t3 = function(t4) {
        const e3 = r2 * Math.floor(t4 % (2 * (a2 + i2)) / (a2 + i2)), s3 = e3 && !n2 || !e3 && n2, o3 = Math.pow(-1, s3) * (t4 % (a2 + i2)) / i2 + s3;
        return Math.max(Math.min(o3, 1), 0);
      }, l3 = s2 * (a2 + i2) - a2;
      return o2 = e2 <= 0 ? Math.round(t3(1e-5)) : e2 < l3 ? t3(e2) : Math.round(t3(l3 - 1e-5)), o2;
    }
    const l2 = Math.floor(this.loops()), h2 = r2 && l2 % 2 == 0;
    return o2 = l2 + (h2 && !n2 || n2 && h2 ? t2 : 1 - t2), this.loops(o2);
  }
  progress(t2) {
    return null == t2 ? Math.min(1, this._time / this.duration()) : this.time(t2 * this.duration());
  }
  queue(t2, e2, i2, a2) {
    this._queue.push({
      initialiser: t2 || Et,
      runner: e2 || Et,
      retarget: i2,
      isTransform: a2,
      initialised: false,
      finished: false
    });
    return this.timeline() && this.timeline()._continue(), this;
  }
  reset() {
    return this._reseted || (this.time(0), this._reseted = true), this;
  }
  reverse(t2) {
    return this._reverse = null == t2 ? !this._reverse : t2, this;
  }
  schedule(t2, e2, i2) {
    if (t2 instanceof Je || (i2 = e2, e2 = t2, t2 = this.timeline()), !t2) throw Error("Runner cannot be scheduled without timeline");
    return t2.schedule(this, e2, i2), this;
  }
  step(t2) {
    if (!this.enabled) return this;
    t2 = null == t2 ? 16 : t2, this._time += t2;
    const e2 = this.position(), i2 = this._lastPosition !== e2 && this._time >= 0;
    this._lastPosition = e2;
    const a2 = this.duration(), s2 = this._lastTime <= 0 && this._time > 0, r2 = this._lastTime < a2 && this._time >= a2;
    this._lastTime = this._time, s2 && this.fire("start", this);
    const n2 = this._isDeclarative;
    this.done = !n2 && !r2 && this._time >= a2, this._reseted = false;
    let o2 = false;
    return (i2 || n2) && (this._initialise(i2), this.transforms = new vt(), o2 = this._run(n2 ? t2 : e2), this.fire("step", this)), this.done = this.done || o2 && n2, r2 && this.fire("finished", this), this;
  }
  time(t2) {
    if (null == t2) return this._time;
    const e2 = t2 - this._time;
    return this.step(e2), this;
  }
  timeline(t2) {
    return void 0 === t2 ? this._timeline : (this._timeline = t2, this);
  }
  unschedule() {
    const t2 = this.timeline();
    return t2 && t2.unschedule(this), this;
  }
  _initialise(t2) {
    if (t2 || this._isDeclarative) for (let e2 = 0, i2 = this._queue.length; e2 < i2; ++e2) {
      const i3 = this._queue[e2], a2 = this._isDeclarative || !i3.initialised && t2;
      t2 = !i3.finished, a2 && t2 && (i3.initialiser.call(this), i3.initialised = true);
    }
  }
  _rememberMorpher(t2, e2) {
    if (this._history[t2] = {
      morpher: e2,
      caller: this._queue[this._queue.length - 1]
    }, this._isDeclarative) {
      const t3 = this.timeline();
      t3 && t3.play();
    }
  }
  _run(t2) {
    let e2 = true;
    for (let i2 = 0, a2 = this._queue.length; i2 < a2; ++i2) {
      const a3 = this._queue[i2], s2 = a3.runner.call(this, t2);
      a3.finished = a3.finished || true === s2, e2 = e2 && a3.finished;
    }
    return e2;
  }
  _tryRetarget(t2, e2, i2) {
    if (this._history[t2]) {
      if (!this._history[t2].caller.initialised) {
        const e3 = this._queue.indexOf(this._history[t2].caller);
        return this._queue.splice(e3, 1), false;
      }
      this._history[t2].caller.retarget ? this._history[t2].caller.retarget.call(this, e2, i2) : this._history[t2].morpher.to(e2), this._history[t2].caller.finished = false;
      const a2 = this.timeline();
      return a2 && a2.play(), true;
    }
    return false;
  }
};
Qe.id = 0;
var Ke = class {
  constructor(t2 = new vt(), e2 = -1, i2 = true) {
    this.transforms = t2, this.id = e2, this.done = i2;
  }
  clearTransformsFromQueue() {
  }
};
Q([Qe, Ke], {
  mergeWith(t2) {
    return new Ke(t2.transforms.lmultiply(this.transforms), t2.id);
  }
});
var ti = (t2, e2) => t2.lmultiplyO(e2);
var ei = (t2) => t2.transforms;
function ii() {
  const t2 = this._transformationRunners.runners.map(ei).reduce(ti, new vt());
  this.transform(t2), this._transformationRunners.merge(), 1 === this._transformationRunners.length() && (this._frameId = null);
}
var ai = class {
  constructor() {
    this.runners = [], this.ids = [];
  }
  add(t2) {
    if (this.runners.includes(t2)) return;
    const e2 = t2.id + 1;
    return this.runners.push(t2), this.ids.push(e2), this;
  }
  clearBefore(t2) {
    const e2 = this.ids.indexOf(t2 + 1) || 1;
    return this.ids.splice(0, e2, 0), this.runners.splice(0, e2, new Ke()).forEach((t3) => t3.clearTransformsFromQueue()), this;
  }
  edit(t2, e2) {
    const i2 = this.ids.indexOf(t2 + 1);
    return this.ids.splice(i2, 1, t2 + 1), this.runners.splice(i2, 1, e2), this;
  }
  getByID(t2) {
    return this.runners[this.ids.indexOf(t2 + 1)];
  }
  length() {
    return this.ids.length;
  }
  merge() {
    let t2 = null;
    for (let e2 = 0; e2 < this.runners.length; ++e2) {
      const i2 = this.runners[e2];
      if (t2 && i2.done && t2.done && (!i2._timeline || !i2._timeline._runnerIds.includes(i2.id)) && (!t2._timeline || !t2._timeline._runnerIds.includes(t2.id))) {
        this.remove(i2.id);
        const a2 = i2.mergeWith(t2);
        this.edit(t2.id, a2), t2 = a2, --e2;
      } else t2 = i2;
    }
    return this;
  }
  remove(t2) {
    const e2 = this.ids.indexOf(t2 + 1);
    return this.ids.splice(e2, 1), this.runners.splice(e2, 1), this;
  }
};
A({
  Element: {
    animate(t2, e2, i2) {
      const a2 = Qe.sanitise(t2, e2, i2), s2 = this.timeline();
      return new Qe(a2.duration).loop(a2).element(this).timeline(s2.play()).schedule(a2.delay, a2.when);
    },
    delay(t2, e2) {
      return this.animate(0, t2, e2);
    },
    _clearTransformRunnersBefore(t2) {
      this._transformationRunners.clearBefore(t2.id);
    },
    _currentTransform(t2) {
      return this._transformationRunners.runners.filter((e2) => e2.id <= t2.id).map(ei).reduce(ti, new vt());
    },
    _addRunner(t2) {
      this._transformationRunners.add(t2), qe.cancelImmediate(this._frameId), this._frameId = qe.immediate(ii.bind(this));
    },
    _prepareRunner() {
      null == this._frameId && (this._transformationRunners = new ai().add(new Ke(new vt(this))));
    }
  }
});
Q(Qe, {
  attr(t2, e2) {
    return this.styleAttr("attr", t2, e2);
  },
  css(t2, e2) {
    return this.styleAttr("css", t2, e2);
  },
  styleAttr(t2, e2, i2) {
    if ("string" == typeof e2) return this.styleAttr(t2, {
      [e2]: i2
    });
    let a2 = e2;
    if (this._tryRetarget(t2, a2)) return this;
    let s2 = new He(this._stepper).to(a2), r2 = Object.keys(a2);
    return this.queue(function() {
      s2 = s2.from(this.element()[t2](r2));
    }, function(e3) {
      return this.element()[t2](s2.at(e3).valueOf()), s2.done();
    }, function(e3) {
      const i3 = Object.keys(e3), n2 = (o2 = r2, i3.filter((t3) => !o2.includes(t3)));
      var o2;
      if (n2.length) {
        const e4 = this.element()[t2](n2), i4 = new _e(s2.from()).valueOf();
        Object.assign(i4, e4), s2.from(i4);
      }
      const l2 = new _e(s2.to()).valueOf();
      Object.assign(l2, e3), s2.to(l2), r2 = i3, a2 = e3;
    }), this._rememberMorpher(t2, s2), this;
  },
  zoom(t2, e2) {
    if (this._tryRetarget("zoom", t2, e2)) return this;
    let i2 = new He(this._stepper).to(new _t(t2));
    return this.queue(function() {
      i2 = i2.from(this.element().zoom());
    }, function(t3) {
      return this.element().zoom(i2.at(t3), e2), i2.done();
    }, function(t3, a2) {
      e2 = a2, i2.to(t3);
    }), this._rememberMorpher("zoom", i2), this;
  },
  transform(t2, e2, i2) {
    if (e2 = t2.relative || e2, this._isDeclarative && !e2 && this._tryRetarget("transform", t2)) return this;
    const a2 = vt.isMatrixLike(t2);
    i2 = null != t2.affine ? t2.affine : null != i2 ? i2 : !a2;
    const s2 = new He(this._stepper).type(i2 ? Fe : vt);
    let r2, n2, o2, l2, h2;
    return this.queue(function() {
      n2 = n2 || this.element(), r2 = r2 || T(t2, n2), h2 = new vt(e2 ? void 0 : n2), n2._addRunner(this), e2 || n2._clearTransformRunnersBefore(this);
    }, function(c2) {
      e2 || this.clearTransform();
      const {
        x: d2,
        y: u2
      } = new bt(r2).transform(n2._currentTransform(this));
      let g2 = new vt(__spreadProps(__spreadValues({}, t2), {
        origin: [d2, u2]
      })), p2 = this._isDeclarative && o2 ? o2 : h2;
      if (i2) {
        g2 = g2.decompose(d2, u2), p2 = p2.decompose(d2, u2);
        const t3 = g2.rotate, e3 = p2.rotate, i3 = [t3 - 360, t3, t3 + 360], a3 = i3.map((t4) => Math.abs(t4 - e3)), s3 = Math.min(...a3), r3 = a3.indexOf(s3);
        g2.rotate = i3[r3];
      }
      e2 && (a2 || (g2.rotate = t2.rotate || 0), this._isDeclarative && l2 && (p2.rotate = l2)), s2.from(p2), s2.to(g2);
      const f2 = s2.at(c2);
      return l2 = f2.rotate, o2 = new vt(f2), this.addTransform(o2), n2._addRunner(this), s2.done();
    }, function(e3) {
      (e3.origin || "center").toString() !== (t2.origin || "center").toString() && (r2 = T(e3, n2)), t2 = __spreadProps(__spreadValues({}, e3), {
        origin: r2
      });
    }, true), this._isDeclarative && this._rememberMorpher("transform", s2), this;
  },
  x(t2) {
    return this._queueNumber("x", t2);
  },
  y(t2) {
    return this._queueNumber("y", t2);
  },
  ax(t2) {
    return this._queueNumber("ax", t2);
  },
  ay(t2) {
    return this._queueNumber("ay", t2);
  },
  dx(t2 = 0) {
    return this._queueNumberDelta("x", t2);
  },
  dy(t2 = 0) {
    return this._queueNumberDelta("y", t2);
  },
  dmove(t2, e2) {
    return this.dx(t2).dy(e2);
  },
  _queueNumberDelta(t2, e2) {
    if (e2 = new _t(e2), this._tryRetarget(t2, e2)) return this;
    const i2 = new He(this._stepper).to(e2);
    let a2 = null;
    return this.queue(function() {
      a2 = this.element()[t2](), i2.from(a2), i2.to(a2 + e2);
    }, function(e3) {
      return this.element()[t2](i2.at(e3)), i2.done();
    }, function(t3) {
      i2.to(a2 + new _t(t3));
    }), this._rememberMorpher(t2, i2), this;
  },
  _queueObject(t2, e2) {
    if (this._tryRetarget(t2, e2)) return this;
    const i2 = new He(this._stepper).to(e2);
    return this.queue(function() {
      i2.from(this.element()[t2]());
    }, function(e3) {
      return this.element()[t2](i2.at(e3)), i2.done();
    }), this._rememberMorpher(t2, i2), this;
  },
  _queueNumber(t2, e2) {
    return this._queueObject(t2, new _t(e2));
  },
  cx(t2) {
    return this._queueNumber("cx", t2);
  },
  cy(t2) {
    return this._queueNumber("cy", t2);
  },
  move(t2, e2) {
    return this.x(t2).y(e2);
  },
  amove(t2, e2) {
    return this.ax(t2).ay(e2);
  },
  center(t2, e2) {
    return this.cx(t2).cy(e2);
  },
  size(t2, e2) {
    let i2;
    return t2 && e2 || (i2 = this._element.bbox()), t2 || (t2 = i2.width / i2.height * e2), e2 || (e2 = i2.height / i2.width * t2), this.width(t2).height(e2);
  },
  width(t2) {
    return this._queueNumber("width", t2);
  },
  height(t2) {
    return this._queueNumber("height", t2);
  },
  plot(t2, e2, i2, a2) {
    if (4 === arguments.length) return this.plot([t2, e2, i2, a2]);
    if (this._tryRetarget("plot", t2)) return this;
    const s2 = new He(this._stepper).type(this._element.MorphArray).to(t2);
    return this.queue(function() {
      s2.from(this._element.array());
    }, function(t3) {
      return this._element.plot(s2.at(t3)), s2.done();
    }), this._rememberMorpher("plot", s2), this;
  },
  leading(t2) {
    return this._queueNumber("leading", t2);
  },
  viewbox(t2, e2, i2, a2) {
    return this._queueObject("viewbox", new kt(t2, e2, i2, a2));
  },
  update(t2) {
    return "object" != typeof t2 ? this.update({
      offset: arguments[0],
      color: arguments[1],
      opacity: arguments[2]
    }) : (null != t2.opacity && this.attr("stop-opacity", t2.opacity), null != t2.color && this.attr("stop-color", t2.color), null != t2.offset && this.attr("offset", t2.offset), this);
  }
}), Q(Qe, {
  rx: Zt,
  ry: $t,
  from: ne,
  to: oe
}), q(Qe, "Runner");
var si = class extends Vt {
  constructor(t2, e2 = t2) {
    super(G("svg", t2), e2), this.namespace();
  }
  defs() {
    return this.isRoot() ? V(this.node.querySelector("defs")) || this.put(new Ut()) : this.root().defs();
  }
  isRoot() {
    return !this.node.parentNode || !(this.node.parentNode instanceof O.window.SVGElement) && "#document-fragment" !== this.node.parentNode.nodeName;
  }
  namespace() {
    return this.isRoot() ? this.attr({
      xmlns: E,
      version: "1.1"
    }).attr("xmlns:xlink", H, Y) : this.root().namespace();
  }
  removeNamespace() {
    return this.attr({
      xmlns: null,
      version: null
    }).attr("xmlns:xlink", null, Y).attr("xmlns:svgjs", null, Y);
  }
  root() {
    return this.isRoot() ? this : super.root();
  }
};
A({
  Container: {
    nested: K(function() {
      return this.put(new si());
    })
  }
}), q(si, "Svg", true);
var ri = class extends Vt {
  constructor(t2, e2 = t2) {
    super(G("symbol", t2), e2);
  }
};
A({
  Container: {
    symbol: K(function() {
      return this.put(new ri());
    })
  }
}), q(ri, "Symbol");
var ni = Object.freeze({
  __proto__: null,
  amove: function(t2, e2) {
    return this.ax(t2).ay(e2);
  },
  ax: function(t2) {
    return this.attr("x", t2);
  },
  ay: function(t2) {
    return this.attr("y", t2);
  },
  build: function(t2) {
    return this._build = !!t2, this;
  },
  center: function(t2, e2, i2 = this.bbox()) {
    return this.cx(t2, i2).cy(e2, i2);
  },
  cx: function(t2, e2 = this.bbox()) {
    return null == t2 ? e2.cx : this.attr("x", this.attr("x") + t2 - e2.cx);
  },
  cy: function(t2, e2 = this.bbox()) {
    return null == t2 ? e2.cy : this.attr("y", this.attr("y") + t2 - e2.cy);
  },
  length: function() {
    return this.node.getComputedTextLength();
  },
  move: function(t2, e2, i2 = this.bbox()) {
    return this.x(t2, i2).y(e2, i2);
  },
  plain: function(t2) {
    return false === this._build && this.clear(), this.node.appendChild(O.document.createTextNode(t2)), this;
  },
  x: function(t2, e2 = this.bbox()) {
    return null == t2 ? e2.x : this.attr("x", this.attr("x") + t2 - e2.x);
  },
  y: function(t2, e2 = this.bbox()) {
    return null == t2 ? e2.y : this.attr("y", this.attr("y") + t2 - e2.y);
  }
});
var oi = class extends qt {
  constructor(t2, e2 = t2) {
    super(G("text", t2), e2), this.dom.leading = this.dom.leading ?? new _t(1.3), this._rebuild = true, this._build = false;
  }
  leading(t2) {
    return null == t2 ? this.dom.leading : (this.dom.leading = new _t(t2), this.rebuild());
  }
  rebuild(t2) {
    if ("boolean" == typeof t2 && (this._rebuild = t2), this._rebuild) {
      const t3 = this;
      let e2 = 0;
      const i2 = this.dom.leading;
      this.each(function(a2) {
        if (X(this.node)) return;
        const s2 = O.window.getComputedStyle(this.node).getPropertyValue("font-size"), r2 = i2 * new _t(s2);
        this.dom.newLined && (this.attr("x", t3.attr("x")), "\n" === this.text() ? e2 += r2 : (this.attr("dy", a2 ? r2 + e2 : 0), e2 = 0));
      }), this.fire("rebuild");
    }
    return this;
  }
  setData(t2) {
    return this.dom = t2, this.dom.leading = new _t(t2.leading || 1.3), this;
  }
  writeDataToDom() {
    return R(this, this.dom, {
      leading: 1.3
    }), this;
  }
  text(t2) {
    if (void 0 === t2) {
      const e2 = this.node.childNodes;
      let i2 = 0;
      t2 = "";
      for (let a2 = 0, s2 = e2.length; a2 < s2; ++a2) "textPath" === e2[a2].nodeName || X(e2[a2]) ? 0 === a2 && (i2 = a2 + 1) : (a2 !== i2 && 3 !== e2[a2].nodeType && true === V(e2[a2]).dom.newLined && (t2 += "\n"), t2 += e2[a2].textContent);
      return t2;
    }
    if (this.clear().build(true), "function" == typeof t2) t2.call(this, this);
    else for (let e2 = 0, i2 = (t2 = (t2 + "").split("\n")).length; e2 < i2; e2++) this.newLine(t2[e2]);
    return this.build(false).rebuild();
  }
};
Q(oi, ni), A({
  Container: {
    text: K(function(t2 = "") {
      return this.put(new oi()).text(t2);
    }),
    plain: K(function(t2 = "") {
      return this.put(new oi()).plain(t2);
    })
  }
}), q(oi, "Text");
var li = class extends qt {
  constructor(t2, e2 = t2) {
    super(G("tspan", t2), e2), this._build = false;
  }
  dx(t2) {
    return this.attr("dx", t2);
  }
  dy(t2) {
    return this.attr("dy", t2);
  }
  newLine() {
    this.dom.newLined = true;
    const t2 = this.parent();
    if (!(t2 instanceof oi)) return this;
    const e2 = t2.index(this), i2 = O.window.getComputedStyle(this.node).getPropertyValue("font-size"), a2 = t2.dom.leading * new _t(i2);
    return this.dy(e2 ? a2 : 0).attr("x", t2.x());
  }
  text(t2) {
    return null == t2 ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t2 ? (this.clear().build(true), t2.call(this, this), this.build(false)) : this.plain(t2), this);
  }
};
Q(li, ni), A({
  Tspan: {
    tspan: K(function(t2 = "") {
      const e2 = new li();
      return this._build || this.clear(), this.put(e2).text(t2);
    })
  },
  Text: {
    newLine: function(t2 = "") {
      return this.tspan(t2).newLine();
    }
  }
}), q(li, "Tspan");
var hi = class extends qt {
  constructor(t2, e2 = t2) {
    super(G("circle", t2), e2);
  }
  radius(t2) {
    return this.attr("r", t2);
  }
  rx(t2) {
    return this.attr("r", t2);
  }
  ry(t2) {
    return this.rx(t2);
  }
  size(t2) {
    return this.radius(new _t(t2).divide(2));
  }
};
Q(hi, {
  x: Jt,
  y: Qt,
  cx: Kt,
  cy: te,
  width: ee,
  height: ie
}), A({
  Container: {
    circle: K(function(t2 = 0) {
      return this.put(new hi()).size(t2).move(0, 0);
    })
  }
}), q(hi, "Circle");
var ci = class extends Vt {
  constructor(t2, e2 = t2) {
    super(G("clipPath", t2), e2);
  }
  remove() {
    return this.targets().forEach(function(t2) {
      t2.unclip();
    }), super.remove();
  }
  targets() {
    return Lt("svg [clip-path*=" + this.id() + "]");
  }
};
A({
  Container: {
    clip: K(function() {
      return this.defs().put(new ci());
    })
  },
  Element: {
    clipper() {
      return this.reference("clip-path");
    },
    clipWith(t2) {
      const e2 = t2 instanceof ci ? t2 : this.parent().clip().add(t2);
      return this.attr("clip-path", "url(#" + e2.id() + ")");
    },
    unclip() {
      return this.attr("clip-path", null);
    }
  }
}), q(ci, "ClipPath");
var di = class extends Gt {
  constructor(t2, e2 = t2) {
    super(G("foreignObject", t2), e2);
  }
};
A({
  Container: {
    foreignObject: K(function(t2, e2) {
      return this.put(new di()).size(t2, e2);
    })
  }
}), q(di, "ForeignObject");
var ui = Object.freeze({
  __proto__: null,
  dmove: function(t2, e2) {
    return this.children().forEach((i2) => {
      let a2;
      try {
        a2 = i2.node instanceof F().SVGSVGElement ? new kt(i2.attr(["x", "y", "width", "height"])) : i2.bbox();
      } catch (t3) {
        return;
      }
      const s2 = new vt(i2), r2 = s2.translate(t2, e2).transform(s2.inverse()), n2 = new bt(a2.x, a2.y).transform(r2);
      i2.move(n2.x, n2.y);
    }), this;
  },
  dx: function(t2) {
    return this.dmove(t2, 0);
  },
  dy: function(t2) {
    return this.dmove(0, t2);
  },
  height: function(t2, e2 = this.bbox()) {
    return null == t2 ? e2.height : this.size(e2.width, t2, e2);
  },
  move: function(t2 = 0, e2 = 0, i2 = this.bbox()) {
    const a2 = t2 - i2.x, s2 = e2 - i2.y;
    return this.dmove(a2, s2);
  },
  size: function(t2, e2, i2 = this.bbox()) {
    const a2 = I(this, t2, e2, i2), s2 = a2.width / i2.width, r2 = a2.height / i2.height;
    return this.children().forEach((t3) => {
      const e3 = new bt(i2).transform(new vt(t3).inverse());
      t3.scale(s2, r2, e3.x, e3.y);
    }), this;
  },
  width: function(t2, e2 = this.bbox()) {
    return null == t2 ? e2.width : this.size(t2, e2.height, e2);
  },
  x: function(t2, e2 = this.bbox()) {
    return null == t2 ? e2.x : this.move(t2, e2.y, e2);
  },
  y: function(t2, e2 = this.bbox()) {
    return null == t2 ? e2.y : this.move(e2.x, t2, e2);
  }
});
var gi = class extends Vt {
  constructor(t2, e2 = t2) {
    super(G("g", t2), e2);
  }
};
Q(gi, ui), A({
  Container: {
    group: K(function() {
      return this.put(new gi());
    })
  }
}), q(gi, "G");
var pi = class extends Vt {
  constructor(t2, e2 = t2) {
    super(G("a", t2), e2);
  }
  target(t2) {
    return this.attr("target", t2);
  }
  to(t2) {
    return this.attr("href", t2, H);
  }
};
Q(pi, ui), A({
  Container: {
    link: K(function(t2) {
      return this.put(new pi()).to(t2);
    })
  },
  Element: {
    unlink() {
      const t2 = this.linker();
      if (!t2) return this;
      const e2 = t2.parent();
      if (!e2) return this.remove();
      const i2 = e2.index(t2);
      return e2.add(this, i2), t2.remove(), this;
    },
    linkTo(t2) {
      let e2 = this.linker();
      return e2 || (e2 = new pi(), this.wrap(e2)), "function" == typeof t2 ? t2.call(e2, e2) : e2.to(t2), this;
    },
    linker() {
      const t2 = this.parent();
      return t2 && "a" === t2.node.nodeName.toLowerCase() ? t2 : null;
    }
  }
}), q(pi, "A");
var fi = class extends Vt {
  constructor(t2, e2 = t2) {
    super(G("mask", t2), e2);
  }
  remove() {
    return this.targets().forEach(function(t2) {
      t2.unmask();
    }), super.remove();
  }
  targets() {
    return Lt("svg [mask*=" + this.id() + "]");
  }
};
A({
  Container: {
    mask: K(function() {
      return this.defs().put(new fi());
    })
  },
  Element: {
    masker() {
      return this.reference("mask");
    },
    maskWith(t2) {
      const e2 = t2 instanceof fi ? t2 : this.parent().mask().add(t2);
      return this.attr("mask", "url(#" + e2.id() + ")");
    },
    unmask() {
      return this.attr("mask", null);
    }
  }
}), q(fi, "Mask");
var xi = class extends Gt {
  constructor(t2, e2 = t2) {
    super(G("stop", t2), e2);
  }
  update(t2) {
    return ("number" == typeof t2 || t2 instanceof _t) && (t2 = {
      offset: arguments[0],
      color: arguments[1],
      opacity: arguments[2]
    }), null != t2.opacity && this.attr("stop-opacity", t2.opacity), null != t2.color && this.attr("stop-color", t2.color), null != t2.offset && this.attr("offset", new _t(t2.offset)), this;
  }
};
A({
  Gradient: {
    stop: function(t2, e2, i2) {
      return this.put(new xi()).update(t2, e2, i2);
    }
  }
}), q(xi, "Stop");
var bi = class extends Gt {
  constructor(t2, e2 = t2) {
    super(G("style", t2), e2);
  }
  addText(t2 = "") {
    return this.node.textContent += t2, this;
  }
  font(t2, e2, i2 = {}) {
    return this.rule("@font-face", __spreadValues({
      fontFamily: t2,
      src: e2
    }, i2));
  }
  rule(t2, e2) {
    return this.addText(function(t3, e3) {
      if (!t3) return "";
      if (!e3) return t3;
      let i2 = t3 + "{";
      for (const t4 in e3) i2 += t4.replace(/([A-Z])/g, function(t5, e4) {
        return "-" + e4.toLowerCase();
      }) + ":" + e3[t4] + ";";
      return i2 += "}", i2;
    }(t2, e2));
  }
};
A("Dom", {
  style(t2, e2) {
    return this.put(new bi()).rule(t2, e2);
  },
  fontface(t2, e2, i2) {
    return this.put(new bi()).font(t2, e2, i2);
  }
}), q(bi, "Style");
var mi = class extends oi {
  constructor(t2, e2 = t2) {
    super(G("textPath", t2), e2);
  }
  array() {
    const t2 = this.track();
    return t2 ? t2.array() : null;
  }
  plot(t2) {
    const e2 = this.track();
    let i2 = null;
    return e2 && (i2 = e2.plot(t2)), null == t2 ? i2 : this;
  }
  track() {
    return this.reference("href");
  }
};
A({
  Container: {
    textPath: K(function(t2, e2) {
      return t2 instanceof oi || (t2 = this.text(t2)), t2.path(e2);
    })
  },
  Text: {
    path: K(function(t2, e2 = true) {
      const i2 = new mi();
      let a2;
      if (t2 instanceof We || (t2 = this.defs().path(t2)), i2.attr("href", "#" + t2, H), e2) for (; a2 = this.node.firstChild; ) i2.node.appendChild(a2);
      return this.put(i2);
    }),
    textPath() {
      return this.findOne("textPath");
    }
  },
  Path: {
    text: K(function(t2) {
      return t2 instanceof oi || (t2 = new oi().addTo(this.parent()).text(t2)), t2.path(this);
    }),
    targets() {
      return Lt("svg textPath").filter((t2) => (t2.attr("href") || "").includes(this.id()));
    }
  }
}), mi.prototype.MorphArray = Ee, q(mi, "TextPath");
var vi = class extends qt {
  constructor(t2, e2 = t2) {
    super(G("use", t2), e2);
  }
  use(t2, e2) {
    return this.attr("href", (e2 || "") + "#" + t2, H);
  }
};
A({
  Container: {
    use: K(function(t2, e2) {
      return this.put(new vi()).use(t2, e2);
    })
  }
}), q(vi, "Use");
var yi = B;
Q([si, ri, de, ce, be], C("viewbox")), Q([xe, je, Ge, We], C("marker")), Q(oi, C("Text")), Q(We, C("Path")), Q(Ut, C("Defs")), Q([oi, li], C("Tspan")), Q([Ve, se, he, Qe], C("radius")), Q(Rt, C("EventTarget")), Q(Bt, C("Dom")), Q(Gt, C("Element")), Q(qt, C("Shape")), Q([Vt, re], C("Container")), Q(he, C("Gradient")), Q(Qe, C("Runner")), Ct.extend([...new Set(k)]), function(t2 = []) {
  Ne.push(...[].concat(t2));
}([_t, xt, kt, vt, Dt, ge, Ee, bt]), Q(Ne, {
  to(t2) {
    return new He().type(this.constructor).from(this.toArray()).to(t2);
  },
  fromArray(t2) {
    return this.init(t2), this;
  },
  toConsumable() {
    return this.toArray();
  },
  morph(t2, e2, i2, a2, s2) {
    return this.fromArray(t2.map(function(t3, r2) {
      return a2.step(t3, e2[r2], i2, s2[r2], s2);
    }));
  }
});
var wi = class extends Gt {
  constructor(t2) {
    super(G("filter", t2), t2), this.$source = "SourceGraphic", this.$sourceAlpha = "SourceAlpha", this.$background = "BackgroundImage", this.$backgroundAlpha = "BackgroundAlpha", this.$fill = "FillPaint", this.$stroke = "StrokePaint", this.$autoSetIn = true;
  }
  put(t2, e2) {
    return !(t2 = super.put(t2, e2)).attr("in") && this.$autoSetIn && t2.attr("in", this.$source), t2.attr("result") || t2.attr("result", t2.id()), t2;
  }
  remove() {
    return this.targets().each("unfilter"), super.remove();
  }
  targets() {
    return Lt('svg [filter*="' + this.id() + '"]');
  }
  toString() {
    return "url(#" + this.id() + ")";
  }
};
var ki = class extends Gt {
  constructor(t2, e2) {
    super(t2, e2), this.result(this.id());
  }
  in(t2) {
    if (null == t2) {
      const t3 = this.attr("in");
      return this.parent() && this.parent().find(`[result="${t3}"]`)[0] || t3;
    }
    return this.attr("in", t2);
  }
  result(t2) {
    return this.attr("result", t2);
  }
  toString() {
    return this.result();
  }
};
var Ai = (t2) => function(...e2) {
  for (let i2 = t2.length; i2--; ) null != e2[i2] && this.attr(t2[i2], e2[i2]);
};
var Ci = {
  blend: Ai(["in", "in2", "mode"]),
  colorMatrix: Ai(["type", "values"]),
  composite: Ai(["in", "in2", "operator"]),
  convolveMatrix: function(t2) {
    t2 = new Dt(t2).toString(), this.attr({
      order: Math.sqrt(t2.split(" ").length),
      kernelMatrix: t2
    });
  },
  diffuseLighting: Ai(["surfaceScale", "lightingColor", "diffuseConstant", "kernelUnitLength"]),
  displacementMap: Ai(["in", "in2", "scale", "xChannelSelector", "yChannelSelector"]),
  dropShadow: Ai(["in", "dx", "dy", "stdDeviation"]),
  flood: Ai(["flood-color", "flood-opacity"]),
  gaussianBlur: function(t2 = 0, e2 = t2) {
    this.attr("stdDeviation", t2 + " " + e2);
  },
  image: function(t2) {
    this.attr("href", t2, H);
  },
  morphology: Ai(["operator", "radius"]),
  offset: Ai(["dx", "dy"]),
  specularLighting: Ai(["surfaceScale", "lightingColor", "diffuseConstant", "specularExponent", "kernelUnitLength"]),
  tile: Ai([]),
  turbulence: Ai(["baseFrequency", "numOctaves", "seed", "stitchTiles", "type"])
};
["blend", "colorMatrix", "componentTransfer", "composite", "convolveMatrix", "diffuseLighting", "displacementMap", "dropShadow", "flood", "gaussianBlur", "image", "merge", "morphology", "offset", "specularLighting", "tile", "turbulence"].forEach((t2) => {
  const e2 = P(t2), i2 = Ci[t2];
  wi[e2 + "Effect"] = class extends ki {
    constructor(t3) {
      super(G("fe" + e2, t3), t3);
    }
    update(t3) {
      return i2.apply(this, t3), this;
    }
  }, wi.prototype[t2] = K(function(t3, ...i3) {
    const a2 = new wi[e2 + "Effect"]();
    return null == t3 ? this.put(a2) : ("function" == typeof t3 ? t3.call(a2, a2) : i3.unshift(t3), this.put(a2).update(i3));
  });
}), Q(wi, {
  merge(t2) {
    const e2 = this.put(new wi.MergeEffect());
    if ("function" == typeof t2) return t2.call(e2, e2), e2;
    return (t2 instanceof Array ? t2 : [...arguments]).forEach((t3) => {
      t3 instanceof wi.MergeNode ? e2.put(t3) : e2.mergeNode(t3);
    }), e2;
  },
  componentTransfer(t2 = {}) {
    const e2 = this.put(new wi.ComponentTransferEffect());
    if ("function" == typeof t2) return t2.call(e2, e2), e2;
    if (!(t2.r || t2.g || t2.b || t2.a)) {
      t2 = {
        r: t2,
        g: t2,
        b: t2,
        a: t2
      };
    }
    for (const i2 in t2) e2.add(new wi["Func" + i2.toUpperCase()](t2[i2]));
    return e2;
  }
});
["distantLight", "pointLight", "spotLight", "mergeNode", "FuncR", "FuncG", "FuncB", "FuncA"].forEach((t2) => {
  const e2 = P(t2);
  wi[e2] = class extends ki {
    constructor(t3) {
      super(G("fe" + e2, t3), t3);
    }
  };
});
["funcR", "funcG", "funcB", "funcA"].forEach(function(t2) {
  const e2 = wi[P(t2)], i2 = K(function() {
    return this.put(new e2());
  });
  wi.ComponentTransferEffect.prototype[t2] = i2;
});
["distantLight", "pointLight", "spotLight"].forEach((t2) => {
  const e2 = wi[P(t2)], i2 = K(function() {
    return this.put(new e2());
  });
  wi.DiffuseLightingEffect.prototype[t2] = i2, wi.SpecularLightingEffect.prototype[t2] = i2;
}), Q(wi.MergeEffect, {
  mergeNode(t2) {
    return this.put(new wi.MergeNode()).attr("in", t2);
  }
}), Q(Ut, {
  filter: function(t2) {
    const e2 = this.put(new wi());
    return "function" == typeof t2 && t2.call(e2, e2), e2;
  }
}), Q(Vt, {
  filter: function(t2) {
    return this.defs().filter(t2);
  }
}), Q(Gt, {
  filterWith: function(t2) {
    const e2 = t2 instanceof wi ? t2 : this.defs().filter(t2);
    return this.attr("filter", e2);
  },
  unfilter: function(t2) {
    return this.attr("filter", null);
  },
  filterer() {
    return this.reference("filter");
  }
});
var Si = {
  blend: function(t2, e2) {
    return this.parent() && this.parent().blend(this, t2, e2);
  },
  colorMatrix: function(t2, e2) {
    return this.parent() && this.parent().colorMatrix(t2, e2).in(this);
  },
  componentTransfer: function(t2) {
    return this.parent() && this.parent().componentTransfer(t2).in(this);
  },
  composite: function(t2, e2) {
    return this.parent() && this.parent().composite(this, t2, e2);
  },
  convolveMatrix: function(t2) {
    return this.parent() && this.parent().convolveMatrix(t2).in(this);
  },
  diffuseLighting: function(t2, e2, i2, a2) {
    return this.parent() && this.parent().diffuseLighting(t2, i2, a2).in(this);
  },
  displacementMap: function(t2, e2, i2, a2) {
    return this.parent() && this.parent().displacementMap(this, t2, e2, i2, a2);
  },
  dropShadow: function(t2, e2, i2) {
    return this.parent() && this.parent().dropShadow(this, t2, e2, i2).in(this);
  },
  flood: function(t2, e2) {
    return this.parent() && this.parent().flood(t2, e2);
  },
  gaussianBlur: function(t2, e2) {
    return this.parent() && this.parent().gaussianBlur(t2, e2).in(this);
  },
  image: function(t2) {
    return this.parent() && this.parent().image(t2);
  },
  merge: function(t2) {
    return t2 = t2 instanceof Array ? t2 : [...t2], this.parent() && this.parent().merge(this, ...t2);
  },
  morphology: function(t2, e2) {
    return this.parent() && this.parent().morphology(t2, e2).in(this);
  },
  offset: function(t2, e2) {
    return this.parent() && this.parent().offset(t2, e2).in(this);
  },
  specularLighting: function(t2, e2, i2, a2, s2) {
    return this.parent() && this.parent().specularLighting(t2, i2, a2, s2).in(this);
  },
  tile: function() {
    return this.parent() && this.parent().tile().in(this);
  },
  turbulence: function(t2, e2, i2, a2, s2) {
    return this.parent() && this.parent().turbulence(t2, e2, i2, a2, s2).in(this);
  }
};
Q(ki, Si), Q(wi.MergeEffect, {
  in: function(t2) {
    return t2 instanceof wi.MergeNode ? this.add(t2, 0) : this.add(new wi.MergeNode().in(t2), 0), this;
  }
}), Q([wi.CompositeEffect, wi.BlendEffect, wi.DisplacementMapEffect], {
  in2: function(t2) {
    if (null == t2) {
      const t3 = this.attr("in2");
      return this.parent() && this.parent().find(`[result="${t3}"]`)[0] || t3;
    }
    return this.attr("in2", t2);
  }
}), wi.filter = {
  sepiatone: [0.343, 0.669, 0.119, 0, 0, 0.249, 0.626, 0.13, 0, 0, 0.172, 0.334, 0.111, 0, 0, 0, 0, 0, 1, 0]
};
var Li = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "getDefaultFilter",
    value: function(t3, e2) {
      var i2 = this.w;
      t3.unfilter(true), new wi().size("120%", "180%", "-5%", "-40%"), i2.config.chart.dropShadow.enabled && this.dropShadow(t3, i2.config.chart.dropShadow, e2);
    }
  }, {
    key: "applyFilter",
    value: function(t3, e2, i2) {
      var a2, s2 = this, r2 = this.w;
      if (t3.unfilter(true), "none" !== i2) {
        var n2, o2, l2 = r2.config.chart.dropShadow, h2 = "lighten" === i2 ? 2 : 0.3;
        if (t3.filterWith(function(t4) {
          t4.colorMatrix({
            type: "matrix",
            values: "\n          ".concat(h2, " 0 0 0 0\n          0 ").concat(h2, " 0 0 0\n          0 0 ").concat(h2, " 0 0\n          0 0 0 1 0\n        "),
            in: "SourceGraphic",
            result: "brightness"
          }), l2.enabled && s2.addShadow(t4, e2, l2, "brightness");
        }), !l2.noUserSpaceOnUse) null === (n2 = t3.filterer()) || void 0 === n2 || null === (o2 = n2.node) || void 0 === o2 || o2.setAttribute("filterUnits", "userSpaceOnUse");
        this._scaleFilterSize(null === (a2 = t3.filterer()) || void 0 === a2 ? void 0 : a2.node);
      } else this.getDefaultFilter(t3, e2);
    }
  }, {
    key: "addShadow",
    value: function(t3, e2, i2, a2) {
      var s2, r2 = this.w, n2 = i2.blur, o2 = i2.top, l2 = i2.left, h2 = i2.color, c2 = i2.opacity;
      if (h2 = Array.isArray(h2) ? h2[e2] : h2, (null === (s2 = r2.config.chart.dropShadow.enabledOnSeries) || void 0 === s2 ? void 0 : s2.length) > 0 && -1 === r2.config.chart.dropShadow.enabledOnSeries.indexOf(e2)) return t3;
      t3.offset({
        in: a2,
        dx: l2,
        dy: o2,
        result: "offset"
      }), t3.gaussianBlur({
        in: "offset",
        stdDeviation: n2,
        result: "blur"
      }), t3.flood({
        "flood-color": h2,
        "flood-opacity": c2,
        result: "flood"
      }), t3.composite({
        in: "flood",
        in2: "blur",
        operator: "in",
        result: "shadow"
      }), t3.merge(["shadow", a2]);
    }
  }, {
    key: "dropShadow",
    value: function(t3, e2) {
      var i2, a2, s2, r2, n2, o2 = this, l2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, h2 = this.w;
      if (t3.unfilter(true), v.isMsEdge() && "radialBar" === h2.config.chart.type) return t3;
      if ((null === (i2 = h2.config.chart.dropShadow.enabledOnSeries) || void 0 === i2 ? void 0 : i2.length) > 0 && -1 === (null === (s2 = h2.config.chart.dropShadow.enabledOnSeries) || void 0 === s2 ? void 0 : s2.indexOf(l2))) return t3;
      (t3.filterWith(function(t4) {
        o2.addShadow(t4, l2, e2, "SourceGraphic");
      }), e2.noUserSpaceOnUse) || null === (r2 = t3.filterer()) || void 0 === r2 || null === (n2 = r2.node) || void 0 === n2 || n2.setAttribute("filterUnits", "userSpaceOnUse");
      return this._scaleFilterSize(null === (a2 = t3.filterer()) || void 0 === a2 ? void 0 : a2.node), t3;
    }
  }, {
    key: "setSelectionFilter",
    value: function(t3, e2, i2) {
      var a2 = this.w;
      if (void 0 !== a2.globals.selectedDataPoints[e2] && a2.globals.selectedDataPoints[e2].indexOf(i2) > -1) {
        t3.node.setAttribute("selected", true);
        var s2 = a2.config.states.active.filter;
        "none" !== s2 && this.applyFilter(t3, e2, s2.type);
      }
    }
  }, {
    key: "_scaleFilterSize",
    value: function(t3) {
      if (t3) {
        !function(e2) {
          for (var i2 in e2) e2.hasOwnProperty(i2) && t3.setAttribute(i2, e2[i2]);
        }({
          width: "200%",
          height: "200%",
          x: "-50%",
          y: "-50%"
        });
      }
    }
  }]), t2;
}();
var Mi = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "roundPathCorners",
    value: function(t3, e2) {
      function i2(t4, e3, i3) {
        var s3 = e3.x - t4.x, r3 = e3.y - t4.y, n3 = Math.sqrt(s3 * s3 + r3 * r3);
        return a2(t4, e3, Math.min(1, i3 / n3));
      }
      function a2(t4, e3, i3) {
        return {
          x: t4.x + (e3.x - t4.x) * i3,
          y: t4.y + (e3.y - t4.y) * i3
        };
      }
      function s2(t4, e3) {
        t4.length > 2 && (t4[t4.length - 2] = e3.x, t4[t4.length - 1] = e3.y);
      }
      function r2(t4) {
        return {
          x: parseFloat(t4[t4.length - 2]),
          y: parseFloat(t4[t4.length - 1])
        };
      }
      t3.indexOf("NaN") > -1 && (t3 = "");
      var n2 = t3.split(/[,\s]/).reduce(function(t4, e3) {
        var i3 = e3.match("([a-zA-Z])(.+)");
        return i3 ? (t4.push(i3[1]), t4.push(i3[2])) : t4.push(e3), t4;
      }, []).reduce(function(t4, e3) {
        return parseFloat(e3) == e3 && t4.length ? t4[t4.length - 1].push(e3) : t4.push([e3]), t4;
      }, []), o2 = [];
      if (n2.length > 1) {
        var l2 = r2(n2[0]), h2 = null;
        "Z" == n2[n2.length - 1][0] && n2[0].length > 2 && (h2 = ["L", l2.x, l2.y], n2[n2.length - 1] = h2), o2.push(n2[0]);
        for (var c2 = 1; c2 < n2.length; c2++) {
          var d2 = o2[o2.length - 1], u2 = n2[c2], g2 = u2 == h2 ? n2[1] : n2[c2 + 1];
          if (g2 && d2 && d2.length > 2 && "L" == u2[0] && g2.length > 2 && "L" == g2[0]) {
            var p2, f2, x2 = r2(d2), b2 = r2(u2), m2 = r2(g2);
            p2 = i2(b2, x2, e2), f2 = i2(b2, m2, e2), s2(u2, p2), u2.origPoint = b2, o2.push(u2);
            var v2 = a2(p2, b2, 0.5), y2 = a2(b2, f2, 0.5), w2 = ["C", v2.x, v2.y, y2.x, y2.y, f2.x, f2.y];
            w2.origPoint = b2, o2.push(w2);
          } else o2.push(u2);
        }
        if (h2) {
          var k2 = r2(o2[o2.length - 1]);
          o2.push(["Z"]), s2(o2[0], k2);
        }
      } else o2 = n2;
      return o2.reduce(function(t4, e3) {
        return t4 + e3.join(" ") + " ";
      }, "");
    }
  }, {
    key: "drawLine",
    value: function(t3, e2, i2, a2) {
      var s2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "#a8a8a8", r2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0, n2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, o2 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "butt";
      return this.w.globals.dom.Paper.line().attr({
        x1: t3,
        y1: e2,
        x2: i2,
        y2: a2,
        stroke: s2,
        "stroke-dasharray": r2,
        "stroke-width": n2,
        "stroke-linecap": o2
      });
    }
  }, {
    key: "drawRect",
    value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0, r2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "#fefefe", n2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1, o2 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : null, l2 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : null, h2 = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0, c2 = this.w.globals.dom.Paper.rect();
      return c2.attr({
        x: t3,
        y: e2,
        width: i2 > 0 ? i2 : 0,
        height: a2 > 0 ? a2 : 0,
        rx: s2,
        ry: s2,
        opacity: n2,
        "stroke-width": null !== o2 ? o2 : 0,
        stroke: null !== l2 ? l2 : "none",
        "stroke-dasharray": h2
      }), c2.node.setAttribute("fill", r2), c2;
    }
  }, {
    key: "drawPolygon",
    value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "#e1e1e1", i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "none";
      return this.w.globals.dom.Paper.polygon(t3).attr({
        fill: a2,
        stroke: e2,
        "stroke-width": i2
      });
    }
  }, {
    key: "drawCircle",
    value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
      t3 < 0 && (t3 = 0);
      var i2 = this.w.globals.dom.Paper.circle(2 * t3);
      return null !== e2 && i2.attr(e2), i2;
    }
  }, {
    key: "drawPath",
    value: function(t3) {
      var e2 = t3.d, i2 = void 0 === e2 ? "" : e2, a2 = t3.stroke, s2 = void 0 === a2 ? "#a8a8a8" : a2, r2 = t3.strokeWidth, n2 = void 0 === r2 ? 1 : r2, o2 = t3.fill, l2 = t3.fillOpacity, h2 = void 0 === l2 ? 1 : l2, c2 = t3.strokeOpacity, d2 = void 0 === c2 ? 1 : c2, u2 = t3.classes, g2 = t3.strokeLinecap, p2 = void 0 === g2 ? null : g2, f2 = t3.strokeDashArray, x2 = void 0 === f2 ? 0 : f2, b2 = this.w;
      return null === p2 && (p2 = b2.config.stroke.lineCap), (i2.indexOf("undefined") > -1 || i2.indexOf("NaN") > -1) && (i2 = "M 0 ".concat(b2.globals.gridHeight)), b2.globals.dom.Paper.path(i2).attr({
        fill: o2,
        "fill-opacity": h2,
        stroke: s2,
        "stroke-opacity": d2,
        "stroke-linecap": p2,
        "stroke-width": n2,
        "stroke-dasharray": x2,
        class: u2
      });
    }
  }, {
    key: "group",
    value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e2 = this.w.globals.dom.Paper.group();
      return null !== t3 && e2.attr(t3), e2;
    }
  }, {
    key: "move",
    value: function(t3, e2) {
      var i2 = ["M", t3, e2].join(" ");
      return i2;
    }
  }, {
    key: "line",
    value: function(t3, e2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a2 = null;
      return null === i2 ? a2 = [" L", t3, e2].join(" ") : "H" === i2 ? a2 = [" H", t3].join(" ") : "V" === i2 && (a2 = [" V", e2].join(" ")), a2;
    }
  }, {
    key: "curve",
    value: function(t3, e2, i2, a2, s2, r2) {
      var n2 = ["C", t3, e2, i2, a2, s2, r2].join(" ");
      return n2;
    }
  }, {
    key: "quadraticCurve",
    value: function(t3, e2, i2, a2) {
      return ["Q", t3, e2, i2, a2].join(" ");
    }
  }, {
    key: "arc",
    value: function(t3, e2, i2, a2, s2, r2, n2) {
      var o2 = "A";
      arguments.length > 7 && void 0 !== arguments[7] && arguments[7] && (o2 = "a");
      var l2 = [o2, t3, e2, i2, a2, s2, r2, n2].join(" ");
      return l2;
    }
  }, {
    key: "renderPaths",
    value: function(t3) {
      var e2, i2 = t3.j, a2 = t3.realIndex, s2 = t3.pathFrom, r2 = t3.pathTo, n2 = t3.stroke, o2 = t3.strokeWidth, l2 = t3.strokeLinecap, h2 = t3.fill, c2 = t3.animationDelay, d2 = t3.initialSpeed, g2 = t3.dataChangeSpeed, p2 = t3.className, f2 = t3.chartType, x2 = t3.shouldClipToGrid, b2 = void 0 === x2 || x2, m2 = t3.bindEventsOnPaths, v2 = void 0 === m2 || m2, w2 = t3.drawShadow, k2 = void 0 === w2 || w2, A2 = this.w, C2 = new Li(this.ctx), S2 = new y(this.ctx), L2 = this.w.config.chart.animations.enabled, M2 = L2 && this.w.config.chart.animations.dynamicAnimation.enabled, P2 = !!(L2 && !A2.globals.resized || M2 && A2.globals.dataChanged && A2.globals.shouldAnimate);
      P2 ? e2 = s2 : (e2 = r2, A2.globals.animationEnded = true);
      var I2 = A2.config.stroke.dashArray, T2 = 0;
      T2 = Array.isArray(I2) ? I2[a2] : A2.config.stroke.dashArray;
      var z2 = this.drawPath({
        d: e2,
        stroke: n2,
        strokeWidth: o2,
        fill: h2,
        fillOpacity: 1,
        classes: p2,
        strokeLinecap: l2,
        strokeDashArray: T2
      });
      z2.attr("index", a2), b2 && ("bar" === f2 && !A2.globals.isHorizontal || A2.globals.comboCharts ? z2.attr({
        "clip-path": "url(#gridRectBarMask".concat(A2.globals.cuid, ")")
      }) : z2.attr({
        "clip-path": "url(#gridRectMask".concat(A2.globals.cuid, ")")
      })), A2.config.chart.dropShadow.enabled && k2 && C2.dropShadow(z2, A2.config.chart.dropShadow, a2), v2 && (z2.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, z2)), z2.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, z2)), z2.node.addEventListener("mousedown", this.pathMouseDown.bind(this, z2))), z2.attr({
        pathTo: r2,
        pathFrom: s2
      });
      var X2 = {
        el: z2,
        j: i2,
        realIndex: a2,
        pathFrom: s2,
        pathTo: r2,
        fill: h2,
        strokeWidth: o2,
        delay: c2
      };
      return !L2 || A2.globals.resized || A2.globals.dataChanged ? !A2.globals.resized && A2.globals.dataChanged || S2.showDelayedElements() : S2.animatePathsGradually(u(u({}, X2), {}, {
        speed: d2
      })), A2.globals.dataChanged && M2 && P2 && S2.animatePathsGradually(u(u({}, X2), {}, {
        speed: g2
      })), z2;
    }
  }, {
    key: "drawPattern",
    value: function(t3, e2, i2) {
      var a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#a8a8a8", s2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
      return this.w.globals.dom.Paper.pattern(e2, i2, function(r2) {
        "horizontalLines" === t3 ? r2.line(0, 0, i2, 0).stroke({
          color: a2,
          width: s2 + 1
        }) : "verticalLines" === t3 ? r2.line(0, 0, 0, e2).stroke({
          color: a2,
          width: s2 + 1
        }) : "slantedLines" === t3 ? r2.line(0, 0, e2, i2).stroke({
          color: a2,
          width: s2
        }) : "squares" === t3 ? r2.rect(e2, i2).fill("none").stroke({
          color: a2,
          width: s2
        }) : "circles" === t3 && r2.circle(e2).fill("none").stroke({
          color: a2,
          width: s2
        });
      });
    }
  }, {
    key: "drawGradient",
    value: function(t3, e2, i2, a2, s2) {
      var r2, n2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, o2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null, l2 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : [], h2 = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, c2 = this.w;
      e2.length < 9 && 0 === e2.indexOf("#") && (e2 = v.hexToRgba(e2, a2)), i2.length < 9 && 0 === i2.indexOf("#") && (i2 = v.hexToRgba(i2, s2));
      var d2 = 0, u2 = 1, g2 = 1, p2 = null;
      null !== o2 && (d2 = void 0 !== o2[0] ? o2[0] / 100 : 0, u2 = void 0 !== o2[1] ? o2[1] / 100 : 1, g2 = void 0 !== o2[2] ? o2[2] / 100 : 1, p2 = void 0 !== o2[3] ? o2[3] / 100 : null);
      var f2 = !("donut" !== c2.config.chart.type && "pie" !== c2.config.chart.type && "polarArea" !== c2.config.chart.type && "bubble" !== c2.config.chart.type);
      if (r2 = l2 && 0 !== l2.length ? c2.globals.dom.Paper.gradient(f2 ? "radial" : "linear", function(t4) {
        (Array.isArray(l2[h2]) ? l2[h2] : l2).forEach(function(e3) {
          t4.stop(e3.offset / 100, e3.color, e3.opacity);
        });
      }) : c2.globals.dom.Paper.gradient(f2 ? "radial" : "linear", function(t4) {
        t4.stop(d2, e2, a2), t4.stop(u2, i2, s2), t4.stop(g2, i2, s2), null !== p2 && t4.stop(p2, e2, a2);
      }), f2) {
        var x2 = c2.globals.gridWidth / 2, b2 = c2.globals.gridHeight / 2;
        "bubble" !== c2.config.chart.type ? r2.attr({
          gradientUnits: "userSpaceOnUse",
          cx: x2,
          cy: b2,
          r: n2
        }) : r2.attr({
          cx: 0.5,
          cy: 0.5,
          r: 0.8,
          fx: 0.2,
          fy: 0.2
        });
      } else "vertical" === t3 ? r2.from(0, 0).to(0, 1) : "diagonal" === t3 ? r2.from(0, 0).to(1, 1) : "horizontal" === t3 ? r2.from(0, 1).to(1, 1) : "diagonal2" === t3 && r2.from(1, 0).to(0, 1);
      return r2;
    }
  }, {
    key: "getTextBasedOnMaxWidth",
    value: function(t3) {
      var e2 = t3.text, i2 = t3.maxWidth, a2 = t3.fontSize, s2 = t3.fontFamily, r2 = this.getTextRects(e2, a2, s2), n2 = r2.width / e2.length, o2 = Math.floor(i2 / n2);
      return i2 < r2.width ? e2.slice(0, o2 - 3) + "..." : e2;
    }
  }, {
    key: "drawText",
    value: function(t3) {
      var e2 = this, i2 = t3.x, a2 = t3.y, s2 = t3.text, r2 = t3.textAnchor, n2 = t3.fontSize, o2 = t3.fontFamily, l2 = t3.fontWeight, h2 = t3.foreColor, c2 = t3.opacity, d2 = t3.maxWidth, g2 = t3.cssClass, p2 = void 0 === g2 ? "" : g2, f2 = t3.isPlainText, x2 = void 0 === f2 || f2, b2 = t3.dominantBaseline, m2 = void 0 === b2 ? "auto" : b2, v2 = this.w;
      void 0 === s2 && (s2 = "");
      var y2 = s2;
      r2 || (r2 = "start"), h2 && h2.length || (h2 = v2.config.chart.foreColor), o2 = o2 || v2.config.chart.fontFamily, l2 = l2 || "regular";
      var w2, k2 = {
        maxWidth: d2,
        fontSize: n2 = n2 || "11px",
        fontFamily: o2
      };
      return Array.isArray(s2) ? w2 = v2.globals.dom.Paper.text(function(t4) {
        for (var i3 = 0; i3 < s2.length; i3++) y2 = s2[i3], d2 && (y2 = e2.getTextBasedOnMaxWidth(u({
          text: s2[i3]
        }, k2))), 0 === i3 ? t4.tspan(y2) : t4.tspan(y2).newLine();
      }) : (d2 && (y2 = this.getTextBasedOnMaxWidth(u({
        text: s2
      }, k2))), w2 = x2 ? v2.globals.dom.Paper.plain(s2) : v2.globals.dom.Paper.text(function(t4) {
        return t4.tspan(y2);
      })), w2.attr({
        x: i2,
        y: a2,
        "text-anchor": r2,
        "dominant-baseline": m2,
        "font-size": n2,
        "font-family": o2,
        "font-weight": l2,
        fill: h2,
        class: "apexcharts-text " + p2
      }), w2.node.style.fontFamily = o2, w2.node.style.opacity = c2, w2;
    }
  }, {
    key: "getMarkerPath",
    value: function(t3, e2, i2, a2) {
      var s2 = "";
      switch (i2) {
        case "cross":
          s2 = "M ".concat(t3 - (a2 /= 1.4), " ").concat(e2 - a2, " L ").concat(t3 + a2, " ").concat(e2 + a2, "  M ").concat(t3 - a2, " ").concat(e2 + a2, " L ").concat(t3 + a2, " ").concat(e2 - a2);
          break;
        case "plus":
          s2 = "M ".concat(t3 - (a2 /= 1.12), " ").concat(e2, " L ").concat(t3 + a2, " ").concat(e2, "  M ").concat(t3, " ").concat(e2 - a2, " L ").concat(t3, " ").concat(e2 + a2);
          break;
        case "star":
        case "sparkle":
          var r2 = 5;
          a2 *= 1.15, "sparkle" === i2 && (a2 /= 1.1, r2 = 4);
          for (var n2 = Math.PI / r2, o2 = 0; o2 <= 2 * r2; o2++) {
            var l2 = o2 * n2, h2 = o2 % 2 == 0 ? a2 : a2 / 2;
            s2 += (0 === o2 ? "M" : "L") + (t3 + h2 * Math.sin(l2)) + "," + (e2 - h2 * Math.cos(l2));
          }
          s2 += "Z";
          break;
        case "triangle":
          s2 = "M ".concat(t3, " ").concat(e2 - a2, " \n             L ").concat(t3 + a2, " ").concat(e2 + a2, " \n             L ").concat(t3 - a2, " ").concat(e2 + a2, " \n             Z");
          break;
        case "square":
        case "rect":
          s2 = "M ".concat(t3 - (a2 /= 1.125), " ").concat(e2 - a2, " \n           L ").concat(t3 + a2, " ").concat(e2 - a2, " \n           L ").concat(t3 + a2, " ").concat(e2 + a2, " \n           L ").concat(t3 - a2, " ").concat(e2 + a2, " \n           Z");
          break;
        case "diamond":
          a2 *= 1.05, s2 = "M ".concat(t3, " ").concat(e2 - a2, " \n             L ").concat(t3 + a2, " ").concat(e2, " \n             L ").concat(t3, " ").concat(e2 + a2, " \n             L ").concat(t3 - a2, " ").concat(e2, " \n            Z");
          break;
        case "line":
          s2 = "M ".concat(t3 - (a2 /= 1.1), " ").concat(e2, " \n           L ").concat(t3 + a2, " ").concat(e2);
          break;
        default:
          a2 *= 2, s2 = "M ".concat(t3, ", ").concat(e2, " \n           m -").concat(a2 / 2, ", 0 \n           a ").concat(a2 / 2, ",").concat(a2 / 2, " 0 1,0 ").concat(a2, ",0 \n           a ").concat(a2 / 2, ",").concat(a2 / 2, " 0 1,0 -").concat(a2, ",0");
      }
      return s2;
    }
  }, {
    key: "drawMarkerShape",
    value: function(t3, e2, i2, a2, s2) {
      var r2 = this.drawPath({
        d: this.getMarkerPath(t3, e2, i2, a2, s2),
        stroke: s2.pointStrokeColor,
        strokeDashArray: s2.pointStrokeDashArray,
        strokeWidth: s2.pointStrokeWidth,
        fill: s2.pointFillColor,
        fillOpacity: s2.pointFillOpacity,
        strokeOpacity: s2.pointStrokeOpacity
      });
      return r2.attr({
        cx: t3,
        cy: e2,
        shape: s2.shape,
        class: s2.class ? s2.class : ""
      }), r2;
    }
  }, {
    key: "drawMarker",
    value: function(t3, e2, i2) {
      t3 = t3 || 0;
      var a2 = i2.pSize || 0;
      return v.isNumber(e2) || (a2 = 0, e2 = 0), this.drawMarkerShape(t3, e2, null == i2 ? void 0 : i2.shape, a2, u(u({}, i2), "line" === i2.shape || "plus" === i2.shape || "cross" === i2.shape ? {
        pointStrokeColor: i2.pointFillColor,
        pointStrokeOpacity: i2.pointFillOpacity
      } : {}));
    }
  }, {
    key: "pathMouseEnter",
    value: function(t3, e2) {
      var i2 = this.w, a2 = new Li(this.ctx), s2 = parseInt(t3.node.getAttribute("index"), 10), r2 = parseInt(t3.node.getAttribute("j"), 10);
      if ("function" == typeof i2.config.chart.events.dataPointMouseEnter && i2.config.chart.events.dataPointMouseEnter(e2, this.ctx, {
        seriesIndex: s2,
        dataPointIndex: r2,
        w: i2
      }), this.ctx.events.fireEvent("dataPointMouseEnter", [e2, this.ctx, {
        seriesIndex: s2,
        dataPointIndex: r2,
        w: i2
      }]), ("none" === i2.config.states.active.filter.type || "true" !== t3.node.getAttribute("selected")) && "none" !== i2.config.states.hover.filter.type && !i2.globals.isTouchDevice) {
        var n2 = i2.config.states.hover.filter;
        a2.applyFilter(t3, s2, n2.type);
      }
    }
  }, {
    key: "pathMouseLeave",
    value: function(t3, e2) {
      var i2 = this.w, a2 = new Li(this.ctx), s2 = parseInt(t3.node.getAttribute("index"), 10), r2 = parseInt(t3.node.getAttribute("j"), 10);
      "function" == typeof i2.config.chart.events.dataPointMouseLeave && i2.config.chart.events.dataPointMouseLeave(e2, this.ctx, {
        seriesIndex: s2,
        dataPointIndex: r2,
        w: i2
      }), this.ctx.events.fireEvent("dataPointMouseLeave", [e2, this.ctx, {
        seriesIndex: s2,
        dataPointIndex: r2,
        w: i2
      }]), "none" !== i2.config.states.active.filter.type && "true" === t3.node.getAttribute("selected") || "none" !== i2.config.states.hover.filter.type && a2.getDefaultFilter(t3, s2);
    }
  }, {
    key: "pathMouseDown",
    value: function(t3, e2) {
      var i2 = this.w, a2 = new Li(this.ctx), s2 = parseInt(t3.node.getAttribute("index"), 10), r2 = parseInt(t3.node.getAttribute("j"), 10), n2 = "false";
      if ("true" === t3.node.getAttribute("selected")) {
        if (t3.node.setAttribute("selected", "false"), i2.globals.selectedDataPoints[s2].indexOf(r2) > -1) {
          var o2 = i2.globals.selectedDataPoints[s2].indexOf(r2);
          i2.globals.selectedDataPoints[s2].splice(o2, 1);
        }
      } else {
        if (!i2.config.states.active.allowMultipleDataPointsSelection && i2.globals.selectedDataPoints.length > 0) {
          i2.globals.selectedDataPoints = [];
          var l2 = i2.globals.dom.Paper.find(".apexcharts-series path:not(.apexcharts-decoration-element)"), h2 = i2.globals.dom.Paper.find(".apexcharts-series circle:not(.apexcharts-decoration-element), .apexcharts-series rect:not(.apexcharts-decoration-element)"), c2 = function(t4) {
            Array.prototype.forEach.call(t4, function(t5) {
              t5.node.setAttribute("selected", "false"), a2.getDefaultFilter(t5, s2);
            });
          };
          c2(l2), c2(h2);
        }
        t3.node.setAttribute("selected", "true"), n2 = "true", void 0 === i2.globals.selectedDataPoints[s2] && (i2.globals.selectedDataPoints[s2] = []), i2.globals.selectedDataPoints[s2].push(r2);
      }
      if ("true" === n2) {
        var d2 = i2.config.states.active.filter;
        if ("none" !== d2) a2.applyFilter(t3, s2, d2.type);
        else if ("none" !== i2.config.states.hover.filter && !i2.globals.isTouchDevice) {
          var u2 = i2.config.states.hover.filter;
          a2.applyFilter(t3, s2, u2.type);
        }
      } else if ("none" !== i2.config.states.active.filter.type) if ("none" === i2.config.states.hover.filter.type || i2.globals.isTouchDevice) a2.getDefaultFilter(t3, s2);
      else {
        u2 = i2.config.states.hover.filter;
        a2.applyFilter(t3, s2, u2.type);
      }
      "function" == typeof i2.config.chart.events.dataPointSelection && i2.config.chart.events.dataPointSelection(e2, this.ctx, {
        selectedDataPoints: i2.globals.selectedDataPoints,
        seriesIndex: s2,
        dataPointIndex: r2,
        w: i2
      }), e2 && this.ctx.events.fireEvent("dataPointSelection", [e2, this.ctx, {
        selectedDataPoints: i2.globals.selectedDataPoints,
        seriesIndex: s2,
        dataPointIndex: r2,
        w: i2
      }]);
    }
  }, {
    key: "rotateAroundCenter",
    value: function(t3) {
      var e2 = {};
      return t3 && "function" == typeof t3.getBBox && (e2 = t3.getBBox()), {
        x: e2.x + e2.width / 2,
        y: e2.y + e2.height / 2
      };
    }
  }, {
    key: "getTextRects",
    value: function(t3, e2, i2, a2) {
      var s2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], r2 = this.w, n2 = this.drawText({
        x: -200,
        y: -200,
        text: t3,
        textAnchor: "start",
        fontSize: e2,
        fontFamily: i2,
        foreColor: "#fff",
        opacity: 0
      });
      a2 && n2.attr("transform", a2), r2.globals.dom.Paper.add(n2);
      var o2 = n2.bbox();
      return s2 || (o2 = n2.node.getBoundingClientRect()), n2.remove(), {
        width: o2.width,
        height: o2.height
      };
    }
  }, {
    key: "placeTextWithEllipsis",
    value: function(t3, e2, i2) {
      if ("function" == typeof t3.getComputedTextLength && (t3.textContent = e2, e2.length > 0 && t3.getComputedTextLength() >= i2 / 1.1)) {
        for (var a2 = e2.length - 3; a2 > 0; a2 -= 3) if (t3.getSubStringLength(0, a2) <= i2 / 1.1) return void (t3.textContent = e2.substring(0, a2) + "...");
        t3.textContent = ".";
      }
    }
  }], [{
    key: "setAttrs",
    value: function(t3, e2) {
      for (var i2 in e2) e2.hasOwnProperty(i2) && t3.setAttribute(i2, e2[i2]);
    }
  }]), t2;
}();
var Pi = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "getStackedSeriesTotals",
    value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e2 = this.w, i2 = [];
      if (0 === e2.globals.series.length) return i2;
      for (var a2 = 0; a2 < e2.globals.series[e2.globals.maxValsInArrayIndex].length; a2++) {
        for (var s2 = 0, r2 = 0; r2 < e2.globals.series.length; r2++) void 0 !== e2.globals.series[r2][a2] && -1 === t3.indexOf(r2) && (s2 += e2.globals.series[r2][a2]);
        i2.push(s2);
      }
      return i2;
    }
  }, {
    key: "getSeriesTotalByIndex",
    value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      return null === t3 ? this.w.config.series.reduce(function(t4, e2) {
        return t4 + e2;
      }, 0) : this.w.globals.series[t3].reduce(function(t4, e2) {
        return t4 + e2;
      }, 0);
    }
  }, {
    key: "getStackedSeriesTotalsByGroups",
    value: function() {
      var t3 = this, e2 = this.w, i2 = [];
      return e2.globals.seriesGroups.forEach(function(a2) {
        var s2 = [];
        e2.config.series.forEach(function(t4, i3) {
          a2.indexOf(e2.globals.seriesNames[i3]) > -1 && s2.push(i3);
        });
        var r2 = e2.globals.series.map(function(t4, e3) {
          return -1 === s2.indexOf(e3) ? e3 : -1;
        }).filter(function(t4) {
          return -1 !== t4;
        });
        i2.push(t3.getStackedSeriesTotals(r2));
      }), i2;
    }
  }, {
    key: "setSeriesYAxisMappings",
    value: function() {
      var t3 = this.w.globals, e2 = this.w.config, i2 = [], a2 = [], s2 = [], r2 = t3.series.length > e2.yaxis.length || e2.yaxis.some(function(t4) {
        return Array.isArray(t4.seriesName);
      });
      e2.series.forEach(function(t4, e3) {
        s2.push(e3), a2.push(null);
      }), e2.yaxis.forEach(function(t4, e3) {
        i2[e3] = [];
      });
      var n2 = [];
      e2.yaxis.forEach(function(t4, a3) {
        var o3 = false;
        if (t4.seriesName) {
          var l3 = [];
          Array.isArray(t4.seriesName) ? l3 = t4.seriesName : l3.push(t4.seriesName), l3.forEach(function(t5) {
            e2.series.forEach(function(e3, n3) {
              if (e3.name === t5) {
                var l4 = n3;
                a3 === n3 || r2 ? !r2 || s2.indexOf(n3) > -1 ? i2[a3].push([a3, n3]) : console.warn("Series '" + e3.name + "' referenced more than once in what looks like the new style. That is, when using either seriesName: [], or when there are more series than yaxes.") : (i2[n3].push([n3, a3]), l4 = a3), o3 = true, -1 !== (l4 = s2.indexOf(l4)) && s2.splice(l4, 1);
              }
            });
          });
        }
        o3 || n2.push(a3);
      }), i2 = i2.map(function(t4, e3) {
        var i3 = [];
        return t4.forEach(function(t5) {
          a2[t5[1]] = t5[0], i3.push(t5[1]);
        }), i3;
      });
      for (var o2 = e2.yaxis.length - 1, l2 = 0; l2 < n2.length && (o2 = n2[l2], i2[o2] = [], s2); l2++) {
        var h2 = s2[0];
        s2.shift(), i2[o2].push(h2), a2[h2] = o2;
      }
      s2.forEach(function(t4) {
        i2[o2].push(t4), a2[t4] = o2;
      }), t3.seriesYAxisMap = i2.map(function(t4) {
        return t4;
      }), t3.seriesYAxisReverseMap = a2.map(function(t4) {
        return t4;
      }), t3.seriesYAxisMap.forEach(function(t4, i3) {
        t4.forEach(function(t5) {
          e2.series[t5] && void 0 === e2.series[t5].group && (e2.series[t5].group = "apexcharts-axis-".concat(i3.toString()));
        });
      });
    }
  }, {
    key: "isSeriesNull",
    value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      return 0 === (null === t3 ? this.w.config.series.filter(function(t4) {
        return null !== t4;
      }) : this.w.config.series[t3].data.filter(function(t4) {
        return null !== t4;
      })).length;
    }
  }, {
    key: "seriesHaveSameValues",
    value: function(t3) {
      return this.w.globals.series[t3].every(function(t4, e2, i2) {
        return t4 === i2[0];
      });
    }
  }, {
    key: "getCategoryLabels",
    value: function(t3) {
      var e2 = this.w, i2 = t3.slice();
      return e2.config.xaxis.convertedCatToNumeric && (i2 = t3.map(function(t4, i3) {
        return e2.config.xaxis.labels.formatter(t4 - e2.globals.minX + 1);
      })), i2;
    }
  }, {
    key: "getLargestSeries",
    value: function() {
      var t3 = this.w;
      t3.globals.maxValsInArrayIndex = t3.globals.series.map(function(t4) {
        return t4.length;
      }).indexOf(Math.max.apply(Math, t3.globals.series.map(function(t4) {
        return t4.length;
      })));
    }
  }, {
    key: "getLargestMarkerSize",
    value: function() {
      var t3 = this.w, e2 = 0;
      return t3.globals.markers.size.forEach(function(t4) {
        e2 = Math.max(e2, t4);
      }), t3.config.markers.discrete && t3.config.markers.discrete.length && t3.config.markers.discrete.forEach(function(t4) {
        e2 = Math.max(e2, t4.size);
      }), e2 > 0 && (t3.config.markers.hover.size > 0 ? e2 = t3.config.markers.hover.size : e2 += t3.config.markers.hover.sizeOffset), t3.globals.markers.largestSize = e2, e2;
    }
  }, {
    key: "getSeriesTotals",
    value: function() {
      var t3 = this.w;
      t3.globals.seriesTotals = t3.globals.series.map(function(t4, e2) {
        var i2 = 0;
        if (Array.isArray(t4)) for (var a2 = 0; a2 < t4.length; a2++) i2 += t4[a2];
        else i2 += t4;
        return i2;
      });
    }
  }, {
    key: "getSeriesTotalsXRange",
    value: function(t3, e2) {
      var i2 = this.w;
      return i2.globals.series.map(function(a2, s2) {
        for (var r2 = 0, n2 = 0; n2 < a2.length; n2++) i2.globals.seriesX[s2][n2] > t3 && i2.globals.seriesX[s2][n2] < e2 && (r2 += a2[n2]);
        return r2;
      });
    }
  }, {
    key: "getPercentSeries",
    value: function() {
      var t3 = this.w;
      t3.globals.seriesPercent = t3.globals.series.map(function(e2, i2) {
        var a2 = [];
        if (Array.isArray(e2)) for (var s2 = 0; s2 < e2.length; s2++) {
          var r2 = t3.globals.stackedSeriesTotals[s2], n2 = 0;
          r2 && (n2 = 100 * e2[s2] / r2), a2.push(n2);
        }
        else {
          var o2 = 100 * e2 / t3.globals.seriesTotals.reduce(function(t4, e3) {
            return t4 + e3;
          }, 0);
          a2.push(o2);
        }
        return a2;
      });
    }
  }, {
    key: "getCalculatedRatios",
    value: function() {
      var t3, e2, i2, a2 = this, s2 = this.w, r2 = s2.globals, n2 = [], o2 = 0, l2 = [], h2 = 0.1, c2 = 0;
      if (r2.yRange = [], r2.isMultipleYAxis) for (var d2 = 0; d2 < r2.minYArr.length; d2++) r2.yRange.push(Math.abs(r2.minYArr[d2] - r2.maxYArr[d2])), l2.push(0);
      else r2.yRange.push(Math.abs(r2.minY - r2.maxY));
      r2.xRange = Math.abs(r2.maxX - r2.minX), r2.zRange = Math.abs(r2.maxZ - r2.minZ);
      for (var u2 = 0; u2 < r2.yRange.length; u2++) n2.push(r2.yRange[u2] / r2.gridHeight);
      if (e2 = r2.xRange / r2.gridWidth, t3 = r2.yRange / r2.gridWidth, i2 = r2.xRange / r2.gridHeight, (o2 = r2.zRange / r2.gridHeight * 16) || (o2 = 1), r2.minY !== Number.MIN_VALUE && 0 !== Math.abs(r2.minY) && (r2.hasNegs = true), s2.globals.seriesYAxisReverseMap.length > 0) {
        var g2 = function(t4, e3) {
          var i3 = s2.config.yaxis[s2.globals.seriesYAxisReverseMap[e3]], r3 = t4 < 0 ? -1 : 1;
          return t4 = Math.abs(t4), i3.logarithmic && (t4 = a2.getBaseLog(i3.logBase, t4)), -r3 * t4 / n2[e3];
        };
        if (r2.isMultipleYAxis) {
          l2 = [];
          for (var p2 = 0; p2 < n2.length; p2++) l2.push(g2(r2.minYArr[p2], p2));
        } else (l2 = []).push(g2(r2.minY, 0)), r2.minY !== Number.MIN_VALUE && 0 !== Math.abs(r2.minY) && (h2 = -r2.minY / t3, c2 = r2.minX / e2);
      } else (l2 = []).push(0), h2 = 0, c2 = 0;
      return {
        yRatio: n2,
        invertedYRatio: t3,
        zRatio: o2,
        xRatio: e2,
        invertedXRatio: i2,
        baseLineInvertedY: h2,
        baseLineY: l2,
        baseLineX: c2
      };
    }
  }, {
    key: "getLogSeries",
    value: function(t3) {
      var e2 = this, i2 = this.w;
      return i2.globals.seriesLog = t3.map(function(t4, a2) {
        var s2 = i2.globals.seriesYAxisReverseMap[a2];
        return i2.config.yaxis[s2] && i2.config.yaxis[s2].logarithmic ? t4.map(function(t5) {
          return null === t5 ? null : e2.getLogVal(i2.config.yaxis[s2].logBase, t5, a2);
        }) : t4;
      }), i2.globals.invalidLogScale ? t3 : i2.globals.seriesLog;
    }
  }, {
    key: "getLogValAtSeriesIndex",
    value: function(t3, e2) {
      if (null === t3) return null;
      var i2 = this.w, a2 = i2.globals.seriesYAxisReverseMap[e2];
      return i2.config.yaxis[a2] && i2.config.yaxis[a2].logarithmic ? this.getLogVal(i2.config.yaxis[a2].logBase, t3, e2) : t3;
    }
  }, {
    key: "getBaseLog",
    value: function(t3, e2) {
      return Math.log(e2) / Math.log(t3);
    }
  }, {
    key: "getLogVal",
    value: function(t3, e2, i2) {
      if (e2 <= 0) return 0;
      var a2 = this.w, s2 = 0 === a2.globals.minYArr[i2] ? -1 : this.getBaseLog(t3, a2.globals.minYArr[i2]), r2 = (0 === a2.globals.maxYArr[i2] ? 0 : this.getBaseLog(t3, a2.globals.maxYArr[i2])) - s2;
      return e2 < 1 ? e2 / r2 : (this.getBaseLog(t3, e2) - s2) / r2;
    }
  }, {
    key: "getLogYRatios",
    value: function(t3) {
      var e2 = this, i2 = this.w, a2 = this.w.globals;
      return a2.yLogRatio = t3.slice(), a2.logYRange = a2.yRange.map(function(t4, s2) {
        var r2 = i2.globals.seriesYAxisReverseMap[s2];
        if (i2.config.yaxis[r2] && e2.w.config.yaxis[r2].logarithmic) {
          var n2, o2 = -Number.MAX_VALUE, l2 = Number.MIN_VALUE;
          return a2.seriesLog.forEach(function(t5, e3) {
            t5.forEach(function(t6) {
              i2.config.yaxis[e3] && i2.config.yaxis[e3].logarithmic && (o2 = Math.max(t6, o2), l2 = Math.min(t6, l2));
            });
          }), n2 = Math.pow(a2.yRange[s2], Math.abs(l2 - o2) / a2.yRange[s2]), a2.yLogRatio[s2] = n2 / a2.gridHeight, n2;
        }
      }), a2.invalidLogScale ? t3.slice() : a2.yLogRatio;
    }
  }, {
    key: "drawSeriesByGroup",
    value: function(t3, e2, i2, a2) {
      var s2 = this.w, r2 = [];
      return t3.series.length > 0 && e2.forEach(function(e3) {
        var n2 = [], o2 = [];
        t3.i.forEach(function(i3, a3) {
          s2.config.series[i3].group === e3 && (n2.push(t3.series[a3]), o2.push(i3));
        }), n2.length > 0 && r2.push(a2.draw(n2, i2, o2));
      }), r2;
    }
  }], [{
    key: "checkComboSeries",
    value: function(t3, e2) {
      var i2 = false, a2 = 0, s2 = 0;
      return void 0 === e2 && (e2 = "line"), t3.length && void 0 !== t3[0].type && t3.forEach(function(t4) {
        "bar" !== t4.type && "column" !== t4.type && "candlestick" !== t4.type && "boxPlot" !== t4.type || a2++, void 0 !== t4.type && t4.type !== e2 && s2++;
      }), s2 > 0 && (i2 = true), {
        comboBarCount: a2,
        comboCharts: i2
      };
    }
  }, {
    key: "extendArrayProps",
    value: function(t3, e2, i2) {
      var a2, s2, r2, n2, o2, l2;
      (null !== (a2 = e2) && void 0 !== a2 && a2.yaxis && (e2 = t3.extendYAxis(e2, i2)), null !== (s2 = e2) && void 0 !== s2 && s2.annotations) && (e2.annotations.yaxis && (e2 = t3.extendYAxisAnnotations(e2)), null !== (r2 = e2) && void 0 !== r2 && null !== (n2 = r2.annotations) && void 0 !== n2 && n2.xaxis && (e2 = t3.extendXAxisAnnotations(e2)), null !== (o2 = e2) && void 0 !== o2 && null !== (l2 = o2.annotations) && void 0 !== l2 && l2.points && (e2 = t3.extendPointAnnotations(e2)));
      return e2;
    }
  }]), t2;
}();
var Ii = function() {
  function t2(e2) {
    i(this, t2), this.w = e2.w, this.annoCtx = e2;
  }
  return s(t2, [{
    key: "setOrientations",
    value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i2 = this.w;
      if ("vertical" === t3.label.orientation) {
        var a2 = null !== e2 ? e2 : 0, s2 = i2.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a2, "']"));
        if (null !== s2) {
          var r2 = s2.getBoundingClientRect();
          s2.setAttribute("x", parseFloat(s2.getAttribute("x")) - r2.height + 4);
          var n2 = "top" === t3.label.position ? r2.width : -r2.width;
          s2.setAttribute("y", parseFloat(s2.getAttribute("y")) + n2);
          var o2 = this.annoCtx.graphics.rotateAroundCenter(s2), l2 = o2.x, h2 = o2.y;
          s2.setAttribute("transform", "rotate(-90 ".concat(l2, " ").concat(h2, ")"));
        }
      }
    }
  }, {
    key: "addBackgroundToAnno",
    value: function(t3, e2) {
      var i2 = this.w;
      if (!t3 || !e2.label.text || !String(e2.label.text).trim()) return null;
      var a2 = i2.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(), s2 = t3.getBoundingClientRect(), r2 = e2.label.style.padding, n2 = r2.left, o2 = r2.right, l2 = r2.top, h2 = r2.bottom;
      if ("vertical" === e2.label.orientation) {
        var c2 = [n2, o2, l2, h2];
        l2 = c2[0], h2 = c2[1], n2 = c2[2], o2 = c2[3];
      }
      var d2 = s2.left - a2.left - n2, u2 = s2.top - a2.top - l2, g2 = this.annoCtx.graphics.drawRect(d2 - i2.globals.barPadForNumericAxis, u2, s2.width + n2 + o2, s2.height + l2 + h2, e2.label.borderRadius, e2.label.style.background, 1, e2.label.borderWidth, e2.label.borderColor, 0);
      return e2.id && g2.node.classList.add(e2.id), g2;
    }
  }, {
    key: "annotationsBackground",
    value: function() {
      var t3 = this, e2 = this.w, i2 = function(i3, a2, s2) {
        var r2 = e2.globals.dom.baseEl.querySelector(".apexcharts-".concat(s2, "-annotations .apexcharts-").concat(s2, "-annotation-label[rel='").concat(a2, "']"));
        if (r2) {
          var n2 = r2.parentNode, o2 = t3.addBackgroundToAnno(r2, i3);
          o2 && (n2.insertBefore(o2.node, r2), i3.label.mouseEnter && o2.node.addEventListener("mouseenter", i3.label.mouseEnter.bind(t3, i3)), i3.label.mouseLeave && o2.node.addEventListener("mouseleave", i3.label.mouseLeave.bind(t3, i3)), i3.label.click && o2.node.addEventListener("click", i3.label.click.bind(t3, i3)));
        }
      };
      e2.config.annotations.xaxis.forEach(function(t4, e3) {
        return i2(t4, e3, "xaxis");
      }), e2.config.annotations.yaxis.forEach(function(t4, e3) {
        return i2(t4, e3, "yaxis");
      }), e2.config.annotations.points.forEach(function(t4, e3) {
        return i2(t4, e3, "point");
      });
    }
  }, {
    key: "getY1Y2",
    value: function(t3, e2) {
      var i2, a2 = this.w, s2 = "y1" === t3 ? e2.y : e2.y2, r2 = false;
      if (this.annoCtx.invertAxis) {
        var n2 = a2.config.xaxis.convertedCatToNumeric ? a2.globals.categoryLabels : a2.globals.labels, o2 = n2.indexOf(s2), l2 = a2.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(".concat(o2 + 1, ")"));
        i2 = l2 ? parseFloat(l2.getAttribute("y")) : (a2.globals.gridHeight / n2.length - 1) * (o2 + 1) - a2.globals.barHeight, void 0 !== e2.seriesIndex && a2.globals.barHeight && (i2 -= a2.globals.barHeight / 2 * (a2.globals.series.length - 1) - a2.globals.barHeight * e2.seriesIndex);
      } else {
        var h2, c2 = a2.globals.seriesYAxisMap[e2.yAxisIndex][0], d2 = a2.config.yaxis[e2.yAxisIndex].logarithmic ? new Pi(this.annoCtx.ctx).getLogVal(a2.config.yaxis[e2.yAxisIndex].logBase, s2, c2) / a2.globals.yLogRatio[c2] : (s2 - a2.globals.minYArr[c2]) / (a2.globals.yRange[c2] / a2.globals.gridHeight);
        i2 = a2.globals.gridHeight - Math.min(Math.max(d2, 0), a2.globals.gridHeight), r2 = d2 > a2.globals.gridHeight || d2 < 0, !e2.marker || void 0 !== e2.y && null !== e2.y || (i2 = 0), null !== (h2 = a2.config.yaxis[e2.yAxisIndex]) && void 0 !== h2 && h2.reversed && (i2 = d2);
      }
      return "string" == typeof s2 && s2.includes("px") && (i2 = parseFloat(s2)), {
        yP: i2,
        clipped: r2
      };
    }
  }, {
    key: "getX1X2",
    value: function(t3, e2) {
      var i2 = this.w, a2 = "x1" === t3 ? e2.x : e2.x2, s2 = this.annoCtx.invertAxis ? i2.globals.minY : i2.globals.minX, r2 = this.annoCtx.invertAxis ? i2.globals.maxY : i2.globals.maxX, n2 = this.annoCtx.invertAxis ? i2.globals.yRange[0] : i2.globals.xRange, o2 = false, l2 = this.annoCtx.inversedReversedAxis ? (r2 - a2) / (n2 / i2.globals.gridWidth) : (a2 - s2) / (n2 / i2.globals.gridWidth);
      return "category" !== i2.config.xaxis.type && !i2.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i2.globals.dataFormatXNumeric || i2.config.chart.sparkline.enabled || (l2 = this.getStringX(a2)), "string" == typeof a2 && a2.includes("px") && (l2 = parseFloat(a2)), null == a2 && e2.marker && (l2 = i2.globals.gridWidth), void 0 !== e2.seriesIndex && i2.globals.barWidth && !this.annoCtx.invertAxis && (l2 -= i2.globals.barWidth / 2 * (i2.globals.series.length - 1) - i2.globals.barWidth * e2.seriesIndex), l2 > i2.globals.gridWidth ? (l2 = i2.globals.gridWidth, o2 = true) : l2 < 0 && (l2 = 0, o2 = true), {
        x: l2,
        clipped: o2
      };
    }
  }, {
    key: "getStringX",
    value: function(t3) {
      var e2 = this.w, i2 = t3;
      e2.config.xaxis.convertedCatToNumeric && e2.globals.categoryLabels.length && (t3 = e2.globals.categoryLabels.indexOf(t3) + 1);
      var a2 = e2.globals.labels.map(function(t4) {
        return Array.isArray(t4) ? t4.join(" ") : t4;
      }).indexOf(t3), s2 = e2.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(".concat(a2 + 1, ")"));
      return s2 && (i2 = parseFloat(s2.getAttribute("x"))), i2;
    }
  }]), t2;
}();
var Ti = function() {
  function t2(e2) {
    i(this, t2), this.w = e2.w, this.annoCtx = e2, this.invertAxis = this.annoCtx.invertAxis, this.helpers = new Ii(this.annoCtx);
  }
  return s(t2, [{
    key: "addXaxisAnnotation",
    value: function(t3, e2, i2) {
      var a2, s2 = this.w, r2 = this.helpers.getX1X2("x1", t3), n2 = r2.x, o2 = r2.clipped, l2 = true, h2 = t3.label.text, c2 = t3.strokeDashArray;
      if (v.isNumber(n2)) {
        if (null === t3.x2 || void 0 === t3.x2) {
          if (!o2) {
            var d2 = this.annoCtx.graphics.drawLine(n2 + t3.offsetX, 0 + t3.offsetY, n2 + t3.offsetX, s2.globals.gridHeight + t3.offsetY, t3.borderColor, c2, t3.borderWidth);
            e2.appendChild(d2.node), t3.id && d2.node.classList.add(t3.id);
          }
        } else {
          var u2 = this.helpers.getX1X2("x2", t3);
          if (a2 = u2.x, l2 = u2.clipped, a2 < n2) {
            var g2 = n2;
            n2 = a2, a2 = g2;
          }
          var p2 = this.annoCtx.graphics.drawRect(n2 + t3.offsetX, 0 + t3.offsetY, a2 - n2, s2.globals.gridHeight + t3.offsetY, 0, t3.fillColor, t3.opacity, 1, t3.borderColor, c2);
          p2.node.classList.add("apexcharts-annotation-rect"), p2.attr("clip-path", "url(#gridRectMask".concat(s2.globals.cuid, ")")), e2.appendChild(p2.node), t3.id && p2.node.classList.add(t3.id);
        }
        if (!o2 || !l2) {
          var f2 = this.annoCtx.graphics.getTextRects(h2, parseFloat(t3.label.style.fontSize)), x2 = "top" === t3.label.position ? 4 : "center" === t3.label.position ? s2.globals.gridHeight / 2 + ("vertical" === t3.label.orientation ? f2.width / 2 : 0) : s2.globals.gridHeight, b2 = this.annoCtx.graphics.drawText({
            x: n2 + t3.label.offsetX,
            y: x2 + t3.label.offsetY - ("vertical" === t3.label.orientation ? "top" === t3.label.position ? f2.width / 2 - 12 : -f2.width / 2 : 0),
            text: h2,
            textAnchor: t3.label.textAnchor,
            fontSize: t3.label.style.fontSize,
            fontFamily: t3.label.style.fontFamily,
            fontWeight: t3.label.style.fontWeight,
            foreColor: t3.label.style.color,
            cssClass: "apexcharts-xaxis-annotation-label ".concat(t3.label.style.cssClass, " ").concat(t3.id ? t3.id : "")
          });
          b2.attr({
            rel: i2
          }), e2.appendChild(b2.node), this.annoCtx.helpers.setOrientations(t3, i2);
        }
      }
    }
  }, {
    key: "drawXAxisAnnotations",
    value: function() {
      var t3 = this, e2 = this.w, i2 = this.annoCtx.graphics.group({
        class: "apexcharts-xaxis-annotations"
      });
      return e2.config.annotations.xaxis.map(function(e3, a2) {
        t3.addXaxisAnnotation(e3, i2.node, a2);
      }), i2;
    }
  }]), t2;
}();
var zi = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  }
  return s(t2, [{
    key: "isValidDate",
    value: function(t3) {
      return "number" != typeof t3 && !isNaN(this.parseDate(t3));
    }
  }, {
    key: "getTimeStamp",
    value: function(t3) {
      return Date.parse(t3) ? this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t3).toISOString().substr(0, 25)).getTime() : new Date(t3).getTime() : t3;
    }
  }, {
    key: "getDate",
    value: function(t3) {
      return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t3).toUTCString()) : new Date(t3);
    }
  }, {
    key: "parseDate",
    value: function(t3) {
      var e2 = Date.parse(t3);
      if (!isNaN(e2)) return this.getTimeStamp(t3);
      var i2 = Date.parse(t3.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
      return i2 = this.getTimeStamp(i2);
    }
  }, {
    key: "parseDateWithTimezone",
    value: function(t3) {
      return Date.parse(t3.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
    }
  }, {
    key: "formatDate",
    value: function(t3, e2) {
      var i2 = this.w.globals.locale, a2 = this.w.config.xaxis.labels.datetimeUTC, s2 = ["\0"].concat(f(i2.months)), r2 = [""].concat(f(i2.shortMonths)), n2 = [""].concat(f(i2.days)), o2 = [""].concat(f(i2.shortDays));
      function l2(t4, e3) {
        var i3 = t4 + "";
        for (e3 = e3 || 2; i3.length < e3; ) i3 = "0" + i3;
        return i3;
      }
      var h2 = a2 ? t3.getUTCFullYear() : t3.getFullYear();
      e2 = (e2 = (e2 = e2.replace(/(^|[^\\])yyyy+/g, "$1" + h2)).replace(/(^|[^\\])yy/g, "$1" + h2.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + h2);
      var c2 = (a2 ? t3.getUTCMonth() : t3.getMonth()) + 1;
      e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])MMMM+/g, "$1" + s2[0])).replace(/(^|[^\\])MMM/g, "$1" + r2[0])).replace(/(^|[^\\])MM/g, "$1" + l2(c2))).replace(/(^|[^\\])M/g, "$1" + c2);
      var d2 = a2 ? t3.getUTCDate() : t3.getDate();
      e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])dddd+/g, "$1" + n2[0])).replace(/(^|[^\\])ddd/g, "$1" + o2[0])).replace(/(^|[^\\])dd/g, "$1" + l2(d2))).replace(/(^|[^\\])d/g, "$1" + d2);
      var u2 = a2 ? t3.getUTCHours() : t3.getHours(), g2 = u2 > 12 ? u2 - 12 : 0 === u2 ? 12 : u2;
      e2 = (e2 = (e2 = (e2 = e2.replace(/(^|[^\\])HH+/g, "$1" + l2(u2))).replace(/(^|[^\\])H/g, "$1" + u2)).replace(/(^|[^\\])hh+/g, "$1" + l2(g2))).replace(/(^|[^\\])h/g, "$1" + g2);
      var p2 = a2 ? t3.getUTCMinutes() : t3.getMinutes();
      e2 = (e2 = e2.replace(/(^|[^\\])mm+/g, "$1" + l2(p2))).replace(/(^|[^\\])m/g, "$1" + p2);
      var x2 = a2 ? t3.getUTCSeconds() : t3.getSeconds();
      e2 = (e2 = e2.replace(/(^|[^\\])ss+/g, "$1" + l2(x2))).replace(/(^|[^\\])s/g, "$1" + x2);
      var b2 = a2 ? t3.getUTCMilliseconds() : t3.getMilliseconds();
      e2 = e2.replace(/(^|[^\\])fff+/g, "$1" + l2(b2, 3)), b2 = Math.round(b2 / 10), e2 = e2.replace(/(^|[^\\])ff/g, "$1" + l2(b2)), b2 = Math.round(b2 / 10);
      var m2 = u2 < 12 ? "AM" : "PM";
      e2 = (e2 = (e2 = e2.replace(/(^|[^\\])f/g, "$1" + b2)).replace(/(^|[^\\])TT+/g, "$1" + m2)).replace(/(^|[^\\])T/g, "$1" + m2.charAt(0));
      var v2 = m2.toLowerCase();
      e2 = (e2 = e2.replace(/(^|[^\\])tt+/g, "$1" + v2)).replace(/(^|[^\\])t/g, "$1" + v2.charAt(0));
      var y2 = -t3.getTimezoneOffset(), w2 = a2 || !y2 ? "Z" : y2 > 0 ? "+" : "-";
      if (!a2) {
        var k2 = (y2 = Math.abs(y2)) % 60;
        w2 += l2(Math.floor(y2 / 60)) + ":" + l2(k2);
      }
      e2 = e2.replace(/(^|[^\\])K/g, "$1" + w2);
      var A2 = (a2 ? t3.getUTCDay() : t3.getDay()) + 1;
      return e2 = (e2 = (e2 = (e2 = (e2 = e2.replace(new RegExp(n2[0], "g"), n2[A2])).replace(new RegExp(o2[0], "g"), o2[A2])).replace(new RegExp(s2[0], "g"), s2[c2])).replace(new RegExp(r2[0], "g"), r2[c2])).replace(/\\(.)/g, "$1");
    }
  }, {
    key: "getTimeUnitsfromTimestamp",
    value: function(t3, e2, i2) {
      var a2 = this.w;
      void 0 !== a2.config.xaxis.min && (t3 = a2.config.xaxis.min), void 0 !== a2.config.xaxis.max && (e2 = a2.config.xaxis.max);
      var s2 = this.getDate(t3), r2 = this.getDate(e2), n2 = this.formatDate(s2, "yyyy MM dd HH mm ss fff").split(" "), o2 = this.formatDate(r2, "yyyy MM dd HH mm ss fff").split(" ");
      return {
        minMillisecond: parseInt(n2[6], 10),
        maxMillisecond: parseInt(o2[6], 10),
        minSecond: parseInt(n2[5], 10),
        maxSecond: parseInt(o2[5], 10),
        minMinute: parseInt(n2[4], 10),
        maxMinute: parseInt(o2[4], 10),
        minHour: parseInt(n2[3], 10),
        maxHour: parseInt(o2[3], 10),
        minDate: parseInt(n2[2], 10),
        maxDate: parseInt(o2[2], 10),
        minMonth: parseInt(n2[1], 10) - 1,
        maxMonth: parseInt(o2[1], 10) - 1,
        minYear: parseInt(n2[0], 10),
        maxYear: parseInt(o2[0], 10)
      };
    }
  }, {
    key: "isLeapYear",
    value: function(t3) {
      return t3 % 4 == 0 && t3 % 100 != 0 || t3 % 400 == 0;
    }
  }, {
    key: "calculcateLastDaysOfMonth",
    value: function(t3, e2, i2) {
      return this.determineDaysOfMonths(t3, e2) - i2;
    }
  }, {
    key: "determineDaysOfYear",
    value: function(t3) {
      var e2 = 365;
      return this.isLeapYear(t3) && (e2 = 366), e2;
    }
  }, {
    key: "determineRemainingDaysOfYear",
    value: function(t3, e2, i2) {
      var a2 = this.daysCntOfYear[e2] + i2;
      return e2 > 1 && this.isLeapYear() && a2++, a2;
    }
  }, {
    key: "determineDaysOfMonths",
    value: function(t3, e2) {
      var i2 = 30;
      switch (t3 = v.monthMod(t3), true) {
        case this.months30.indexOf(t3) > -1:
          2 === t3 && (i2 = this.isLeapYear(e2) ? 29 : 28);
          break;
        case this.months31.indexOf(t3) > -1:
        default:
          i2 = 31;
      }
      return i2;
    }
  }]), t2;
}();
var Xi = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.tooltipKeyFormat = "dd MMM";
  }
  return s(t2, [{
    key: "xLabelFormat",
    value: function(t3, e2, i2, a2) {
      var s2 = this.w;
      if ("datetime" === s2.config.xaxis.type && void 0 === s2.config.xaxis.labels.formatter && void 0 === s2.config.tooltip.x.formatter) {
        var r2 = new zi(this.ctx);
        return r2.formatDate(r2.getDate(e2), s2.config.tooltip.x.format);
      }
      return t3(e2, i2, a2);
    }
  }, {
    key: "defaultGeneralFormatter",
    value: function(t3) {
      return Array.isArray(t3) ? t3.map(function(t4) {
        return t4;
      }) : t3;
    }
  }, {
    key: "defaultYFormatter",
    value: function(t3, e2, i2) {
      var a2 = this.w;
      if (v.isNumber(t3)) if (0 !== a2.globals.yValueDecimal) t3 = t3.toFixed(void 0 !== e2.decimalsInFloat ? e2.decimalsInFloat : a2.globals.yValueDecimal);
      else {
        var s2 = t3.toFixed(0);
        t3 = t3 == s2 ? s2 : t3.toFixed(1);
      }
      return t3;
    }
  }, {
    key: "setLabelFormatters",
    value: function() {
      var t3 = this, e2 = this.w;
      return e2.globals.xaxisTooltipFormatter = function(e3) {
        return t3.defaultGeneralFormatter(e3);
      }, e2.globals.ttKeyFormatter = function(e3) {
        return t3.defaultGeneralFormatter(e3);
      }, e2.globals.ttZFormatter = function(t4) {
        return t4;
      }, e2.globals.legendFormatter = function(e3) {
        return t3.defaultGeneralFormatter(e3);
      }, void 0 !== e2.config.xaxis.labels.formatter ? e2.globals.xLabelFormatter = e2.config.xaxis.labels.formatter : e2.globals.xLabelFormatter = function(t4) {
        if (v.isNumber(t4)) {
          if (!e2.config.xaxis.convertedCatToNumeric && "numeric" === e2.config.xaxis.type) {
            if (v.isNumber(e2.config.xaxis.decimalsInFloat)) return t4.toFixed(e2.config.xaxis.decimalsInFloat);
            var i2 = e2.globals.maxX - e2.globals.minX;
            return i2 > 0 && i2 < 100 ? t4.toFixed(1) : t4.toFixed(0);
          }
          if (e2.globals.isBarHorizontal) {
            if (e2.globals.maxY - e2.globals.minYArr < 4) return t4.toFixed(1);
          }
          return t4.toFixed(0);
        }
        return t4;
      }, "function" == typeof e2.config.tooltip.x.formatter ? e2.globals.ttKeyFormatter = e2.config.tooltip.x.formatter : e2.globals.ttKeyFormatter = e2.globals.xLabelFormatter, "function" == typeof e2.config.xaxis.tooltip.formatter && (e2.globals.xaxisTooltipFormatter = e2.config.xaxis.tooltip.formatter), (Array.isArray(e2.config.tooltip.y) || void 0 !== e2.config.tooltip.y.formatter) && (e2.globals.ttVal = e2.config.tooltip.y), void 0 !== e2.config.tooltip.z.formatter && (e2.globals.ttZFormatter = e2.config.tooltip.z.formatter), void 0 !== e2.config.legend.formatter && (e2.globals.legendFormatter = e2.config.legend.formatter), e2.config.yaxis.forEach(function(i2, a2) {
        void 0 !== i2.labels.formatter ? e2.globals.yLabelFormatters[a2] = i2.labels.formatter : e2.globals.yLabelFormatters[a2] = function(s2) {
          return e2.globals.xyCharts ? Array.isArray(s2) ? s2.map(function(e3) {
            return t3.defaultYFormatter(e3, i2, a2);
          }) : t3.defaultYFormatter(s2, i2, a2) : s2;
        };
      }), e2.globals;
    }
  }, {
    key: "heatmapLabelFormatters",
    value: function() {
      var t3 = this.w;
      if ("heatmap" === t3.config.chart.type) {
        t3.globals.yAxisScale[0].result = t3.globals.seriesNames.slice();
        var e2 = t3.globals.seriesNames.reduce(function(t4, e3) {
          return t4.length > e3.length ? t4 : e3;
        }, 0);
        t3.globals.yAxisScale[0].niceMax = e2, t3.globals.yAxisScale[0].niceMin = e2;
      }
    }
  }]), t2;
}();
var Ri = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "getLabel",
    value: function(t3, e2, i2, a2) {
      var s2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [], r2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : "12px", n2 = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6], o2 = this.w, l2 = void 0 === t3[a2] ? "" : t3[a2], h2 = l2, c2 = o2.globals.xLabelFormatter, d2 = o2.config.xaxis.labels.formatter, u2 = false, g2 = new Xi(this.ctx), p2 = l2;
      n2 && (h2 = g2.xLabelFormat(c2, l2, p2, {
        i: a2,
        dateFormatter: new zi(this.ctx).formatDate,
        w: o2
      }), void 0 !== d2 && (h2 = d2(l2, t3[a2], {
        i: a2,
        dateFormatter: new zi(this.ctx).formatDate,
        w: o2
      })));
      var f2, x2;
      e2.length > 0 ? (f2 = e2[a2].unit, x2 = null, e2.forEach(function(t4) {
        "month" === t4.unit ? x2 = "year" : "day" === t4.unit ? x2 = "month" : "hour" === t4.unit ? x2 = "day" : "minute" === t4.unit && (x2 = "hour");
      }), u2 = x2 === f2, i2 = e2[a2].position, h2 = e2[a2].value) : "datetime" === o2.config.xaxis.type && void 0 === d2 && (h2 = ""), void 0 === h2 && (h2 = ""), h2 = Array.isArray(h2) ? h2 : h2.toString();
      var b2 = new Mi(this.ctx), m2 = {};
      m2 = o2.globals.rotateXLabels && n2 ? b2.getTextRects(h2, parseInt(r2, 10), null, "rotate(".concat(o2.config.xaxis.labels.rotate, " 0 0)"), false) : b2.getTextRects(h2, parseInt(r2, 10));
      var v2 = !o2.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
      return !Array.isArray(h2) && ("NaN" === String(h2) || s2.indexOf(h2) >= 0 && v2) && (h2 = ""), {
        x: i2,
        text: h2,
        textRect: m2,
        isBold: u2
      };
    }
  }, {
    key: "checkLabelBasedOnTickamount",
    value: function(t3, e2, i2) {
      var a2 = this.w, s2 = a2.config.xaxis.tickAmount;
      return "dataPoints" === s2 && (s2 = Math.round(a2.globals.gridWidth / 120)), s2 > i2 || t3 % Math.round(i2 / (s2 + 1)) == 0 || (e2.text = ""), e2;
    }
  }, {
    key: "checkForOverflowingLabels",
    value: function(t3, e2, i2, a2, s2) {
      var r2 = this.w;
      if (0 === t3 && r2.globals.skipFirstTimelinelabel && (e2.text = ""), t3 === i2 - 1 && r2.globals.skipLastTimelinelabel && (e2.text = ""), r2.config.xaxis.labels.hideOverlappingLabels && a2.length > 0) {
        var n2 = s2[s2.length - 1];
        e2.x < n2.textRect.width / (r2.globals.rotateXLabels ? Math.abs(r2.config.xaxis.labels.rotate) / 12 : 1.01) + n2.x && (e2.text = "");
      }
      return e2;
    }
  }, {
    key: "checkForReversedLabels",
    value: function(t3, e2) {
      var i2 = this.w;
      return i2.config.yaxis[t3] && i2.config.yaxis[t3].reversed && e2.reverse(), e2;
    }
  }, {
    key: "yAxisAllSeriesCollapsed",
    value: function(t3) {
      var e2 = this.w.globals;
      return !e2.seriesYAxisMap[t3].some(function(t4) {
        return -1 === e2.collapsedSeriesIndices.indexOf(t4);
      });
    }
  }, {
    key: "translateYAxisIndex",
    value: function(t3) {
      var e2 = this.w, i2 = e2.globals, a2 = e2.config.yaxis;
      return i2.series.length > a2.length || a2.some(function(t4) {
        return Array.isArray(t4.seriesName);
      }) ? t3 : i2.seriesYAxisReverseMap[t3];
    }
  }, {
    key: "isYAxisHidden",
    value: function(t3) {
      var e2 = this.w, i2 = e2.config.yaxis[t3];
      if (!i2.show || this.yAxisAllSeriesCollapsed(t3)) return true;
      if (!i2.showForNullSeries) {
        var a2 = e2.globals.seriesYAxisMap[t3], s2 = new Pi(this.ctx);
        return a2.every(function(t4) {
          return s2.isSeriesNull(t4);
        });
      }
      return false;
    }
  }, {
    key: "getYAxisForeColor",
    value: function(t3, e2) {
      var i2 = this.w;
      return Array.isArray(t3) && i2.globals.yAxisScale[e2] && this.ctx.theme.pushExtraColors(t3, i2.globals.yAxisScale[e2].result.length, false), t3;
    }
  }, {
    key: "drawYAxisTicks",
    value: function(t3, e2, i2, a2, s2, r2, n2) {
      var o2 = this.w, l2 = new Mi(this.ctx), h2 = o2.globals.translateY + o2.config.yaxis[s2].labels.offsetY;
      if (o2.globals.isBarHorizontal ? h2 = 0 : "heatmap" === o2.config.chart.type && (h2 += r2 / 2), a2.show && e2 > 0) {
        true === o2.config.yaxis[s2].opposite && (t3 += a2.width);
        for (var c2 = e2; c2 >= 0; c2--) {
          var d2 = l2.drawLine(t3 + i2.offsetX - a2.width + a2.offsetX, h2 + a2.offsetY, t3 + i2.offsetX + a2.offsetX, h2 + a2.offsetY, a2.color);
          n2.add(d2), h2 += r2;
        }
      }
    }
  }]), t2;
}();
var Ei = function() {
  function t2(e2) {
    i(this, t2), this.w = e2.w, this.annoCtx = e2, this.helpers = new Ii(this.annoCtx), this.axesUtils = new Ri(this.annoCtx);
  }
  return s(t2, [{
    key: "addYaxisAnnotation",
    value: function(t3, e2, i2) {
      var a2, s2 = this.w, r2 = t3.strokeDashArray, n2 = this.helpers.getY1Y2("y1", t3), o2 = n2.yP, l2 = n2.clipped, h2 = true, c2 = false, d2 = t3.label.text;
      if (null === t3.y2 || void 0 === t3.y2) {
        if (!l2) {
          c2 = true;
          var u2 = this.annoCtx.graphics.drawLine(0 + t3.offsetX, o2 + t3.offsetY, this._getYAxisAnnotationWidth(t3), o2 + t3.offsetY, t3.borderColor, r2, t3.borderWidth);
          e2.appendChild(u2.node), t3.id && u2.node.classList.add(t3.id);
        }
      } else {
        if (a2 = (n2 = this.helpers.getY1Y2("y2", t3)).yP, h2 = n2.clipped, a2 > o2) {
          var g2 = o2;
          o2 = a2, a2 = g2;
        }
        if (!l2 || !h2) {
          c2 = true;
          var p2 = this.annoCtx.graphics.drawRect(0 + t3.offsetX, a2 + t3.offsetY, this._getYAxisAnnotationWidth(t3), o2 - a2, 0, t3.fillColor, t3.opacity, 1, t3.borderColor, r2);
          p2.node.classList.add("apexcharts-annotation-rect"), p2.attr("clip-path", "url(#gridRectMask".concat(s2.globals.cuid, ")")), e2.appendChild(p2.node), t3.id && p2.node.classList.add(t3.id);
        }
      }
      if (c2) {
        var f2 = "right" === t3.label.position ? s2.globals.gridWidth : "center" === t3.label.position ? s2.globals.gridWidth / 2 : 0, x2 = this.annoCtx.graphics.drawText({
          x: f2 + t3.label.offsetX,
          y: (null != a2 ? a2 : o2) + t3.label.offsetY - 3,
          text: d2,
          textAnchor: t3.label.textAnchor,
          fontSize: t3.label.style.fontSize,
          fontFamily: t3.label.style.fontFamily,
          fontWeight: t3.label.style.fontWeight,
          foreColor: t3.label.style.color,
          cssClass: "apexcharts-yaxis-annotation-label ".concat(t3.label.style.cssClass, " ").concat(t3.id ? t3.id : "")
        });
        x2.attr({
          rel: i2
        }), e2.appendChild(x2.node);
      }
    }
  }, {
    key: "_getYAxisAnnotationWidth",
    value: function(t3) {
      var e2 = this.w;
      e2.globals.gridWidth;
      return (t3.width.indexOf("%") > -1 ? e2.globals.gridWidth * parseInt(t3.width, 10) / 100 : parseInt(t3.width, 10)) + t3.offsetX;
    }
  }, {
    key: "drawYAxisAnnotations",
    value: function() {
      var t3 = this, e2 = this.w, i2 = this.annoCtx.graphics.group({
        class: "apexcharts-yaxis-annotations"
      });
      return e2.config.annotations.yaxis.forEach(function(e3, a2) {
        e3.yAxisIndex = t3.axesUtils.translateYAxisIndex(e3.yAxisIndex), t3.axesUtils.isYAxisHidden(e3.yAxisIndex) && t3.axesUtils.yAxisAllSeriesCollapsed(e3.yAxisIndex) || t3.addYaxisAnnotation(e3, i2.node, a2);
      }), i2;
    }
  }]), t2;
}();
var Yi = function() {
  function t2(e2) {
    i(this, t2), this.w = e2.w, this.annoCtx = e2, this.helpers = new Ii(this.annoCtx);
  }
  return s(t2, [{
    key: "addPointAnnotation",
    value: function(t3, e2, i2) {
      if (!(this.w.globals.collapsedSeriesIndices.indexOf(t3.seriesIndex) > -1)) {
        var a2 = this.helpers.getX1X2("x1", t3), s2 = a2.x, r2 = a2.clipped, n2 = (a2 = this.helpers.getY1Y2("y1", t3)).yP, o2 = a2.clipped;
        if (v.isNumber(s2) && !o2 && !r2) {
          var l2 = {
            pSize: t3.marker.size,
            pointStrokeWidth: t3.marker.strokeWidth,
            pointFillColor: t3.marker.fillColor,
            pointStrokeColor: t3.marker.strokeColor,
            shape: t3.marker.shape,
            pRadius: t3.marker.radius,
            class: "apexcharts-point-annotation-marker ".concat(t3.marker.cssClass, " ").concat(t3.id ? t3.id : "")
          }, h2 = this.annoCtx.graphics.drawMarker(s2 + t3.marker.offsetX, n2 + t3.marker.offsetY, l2);
          e2.appendChild(h2.node);
          var c2 = t3.label.text ? t3.label.text : "", d2 = this.annoCtx.graphics.drawText({
            x: s2 + t3.label.offsetX,
            y: n2 + t3.label.offsetY - t3.marker.size - parseFloat(t3.label.style.fontSize) / 1.6,
            text: c2,
            textAnchor: t3.label.textAnchor,
            fontSize: t3.label.style.fontSize,
            fontFamily: t3.label.style.fontFamily,
            fontWeight: t3.label.style.fontWeight,
            foreColor: t3.label.style.color,
            cssClass: "apexcharts-point-annotation-label ".concat(t3.label.style.cssClass, " ").concat(t3.id ? t3.id : "")
          });
          if (d2.attr({
            rel: i2
          }), e2.appendChild(d2.node), t3.customSVG.SVG) {
            var u2 = this.annoCtx.graphics.group({
              class: "apexcharts-point-annotations-custom-svg " + t3.customSVG.cssClass
            });
            u2.attr({
              transform: "translate(".concat(s2 + t3.customSVG.offsetX, ", ").concat(n2 + t3.customSVG.offsetY, ")")
            }), u2.node.innerHTML = t3.customSVG.SVG, e2.appendChild(u2.node);
          }
          if (t3.image.path) {
            var g2 = t3.image.width ? t3.image.width : 20, p2 = t3.image.height ? t3.image.height : 20;
            h2 = this.annoCtx.addImage({
              x: s2 + t3.image.offsetX - g2 / 2,
              y: n2 + t3.image.offsetY - p2 / 2,
              width: g2,
              height: p2,
              path: t3.image.path,
              appendTo: ".apexcharts-point-annotations"
            });
          }
          t3.mouseEnter && h2.node.addEventListener("mouseenter", t3.mouseEnter.bind(this, t3)), t3.mouseLeave && h2.node.addEventListener("mouseleave", t3.mouseLeave.bind(this, t3)), t3.click && h2.node.addEventListener("click", t3.click.bind(this, t3));
        }
      }
    }
  }, {
    key: "drawPointAnnotations",
    value: function() {
      var t3 = this, e2 = this.w, i2 = this.annoCtx.graphics.group({
        class: "apexcharts-point-annotations"
      });
      return e2.config.annotations.points.map(function(e3, a2) {
        t3.addPointAnnotation(e3, i2.node, a2);
      }), i2;
    }
  }]), t2;
}();
var Hi = {
  name: "en",
  options: {
    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    toolbar: {
      exportToSVG: "Download SVG",
      exportToPNG: "Download PNG",
      exportToCSV: "Download CSV",
      menu: "Menu",
      selection: "Selection",
      selectionZoom: "Selection Zoom",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      pan: "Panning",
      reset: "Reset Zoom"
    }
  }
};
var Oi = function() {
  function t2() {
    i(this, t2), this.yAxis = {
      show: true,
      showAlways: false,
      showForNullSeries: true,
      seriesName: void 0,
      opposite: false,
      reversed: false,
      logarithmic: false,
      logBase: 10,
      tickAmount: void 0,
      stepSize: void 0,
      forceNiceScale: false,
      max: void 0,
      min: void 0,
      floating: false,
      decimalsInFloat: void 0,
      labels: {
        show: true,
        showDuplicates: false,
        minWidth: 0,
        maxWidth: 160,
        offsetX: 0,
        offsetY: 0,
        align: void 0,
        rotate: 0,
        padding: 20,
        style: {
          colors: [],
          fontSize: "11px",
          fontWeight: 400,
          fontFamily: void 0,
          cssClass: ""
        },
        formatter: void 0
      },
      axisBorder: {
        show: false,
        color: "#e0e0e0",
        width: 1,
        offsetX: 0,
        offsetY: 0
      },
      axisTicks: {
        show: false,
        color: "#e0e0e0",
        width: 6,
        offsetX: 0,
        offsetY: 0
      },
      title: {
        text: void 0,
        rotate: -90,
        offsetY: 0,
        offsetX: 0,
        style: {
          color: void 0,
          fontSize: "11px",
          fontWeight: 900,
          fontFamily: void 0,
          cssClass: ""
        }
      },
      tooltip: {
        enabled: false,
        offsetX: 0
      },
      crosshairs: {
        show: true,
        position: "front",
        stroke: {
          color: "#b6b6b6",
          width: 1,
          dashArray: 0
        }
      }
    }, this.pointAnnotation = {
      id: void 0,
      x: 0,
      y: null,
      yAxisIndex: 0,
      seriesIndex: void 0,
      mouseEnter: void 0,
      mouseLeave: void 0,
      click: void 0,
      marker: {
        size: 4,
        fillColor: "#fff",
        strokeWidth: 2,
        strokeColor: "#333",
        shape: "circle",
        offsetX: 0,
        offsetY: 0,
        cssClass: ""
      },
      label: {
        borderColor: "#c2c2c2",
        borderWidth: 1,
        borderRadius: 2,
        text: void 0,
        textAnchor: "middle",
        offsetX: 0,
        offsetY: 0,
        mouseEnter: void 0,
        mouseLeave: void 0,
        click: void 0,
        style: {
          background: "#fff",
          color: void 0,
          fontSize: "11px",
          fontFamily: void 0,
          fontWeight: 400,
          cssClass: "",
          padding: {
            left: 5,
            right: 5,
            top: 2,
            bottom: 2
          }
        }
      },
      customSVG: {
        SVG: void 0,
        cssClass: void 0,
        offsetX: 0,
        offsetY: 0
      },
      image: {
        path: void 0,
        width: 20,
        height: 20,
        offsetX: 0,
        offsetY: 0
      }
    }, this.yAxisAnnotation = {
      id: void 0,
      y: 0,
      y2: null,
      strokeDashArray: 1,
      fillColor: "#c2c2c2",
      borderColor: "#c2c2c2",
      borderWidth: 1,
      opacity: 0.3,
      offsetX: 0,
      offsetY: 0,
      width: "100%",
      yAxisIndex: 0,
      label: {
        borderColor: "#c2c2c2",
        borderWidth: 1,
        borderRadius: 2,
        text: void 0,
        textAnchor: "end",
        position: "right",
        offsetX: 0,
        offsetY: -3,
        mouseEnter: void 0,
        mouseLeave: void 0,
        click: void 0,
        style: {
          background: "#fff",
          color: void 0,
          fontSize: "11px",
          fontFamily: void 0,
          fontWeight: 400,
          cssClass: "",
          padding: {
            left: 5,
            right: 5,
            top: 2,
            bottom: 2
          }
        }
      }
    }, this.xAxisAnnotation = {
      id: void 0,
      x: 0,
      x2: null,
      strokeDashArray: 1,
      fillColor: "#c2c2c2",
      borderColor: "#c2c2c2",
      borderWidth: 1,
      opacity: 0.3,
      offsetX: 0,
      offsetY: 0,
      label: {
        borderColor: "#c2c2c2",
        borderWidth: 1,
        borderRadius: 2,
        text: void 0,
        textAnchor: "middle",
        orientation: "vertical",
        position: "top",
        offsetX: 0,
        offsetY: 0,
        mouseEnter: void 0,
        mouseLeave: void 0,
        click: void 0,
        style: {
          background: "#fff",
          color: void 0,
          fontSize: "11px",
          fontFamily: void 0,
          fontWeight: 400,
          cssClass: "",
          padding: {
            left: 5,
            right: 5,
            top: 2,
            bottom: 2
          }
        }
      }
    }, this.text = {
      x: 0,
      y: 0,
      text: "",
      textAnchor: "start",
      foreColor: void 0,
      fontSize: "13px",
      fontFamily: void 0,
      fontWeight: 400,
      appendTo: ".apexcharts-annotations",
      backgroundColor: "transparent",
      borderColor: "#c2c2c2",
      borderRadius: 0,
      borderWidth: 0,
      paddingLeft: 4,
      paddingRight: 4,
      paddingTop: 2,
      paddingBottom: 2
    };
  }
  return s(t2, [{
    key: "init",
    value: function() {
      return {
        annotations: {
          yaxis: [this.yAxisAnnotation],
          xaxis: [this.xAxisAnnotation],
          points: [this.pointAnnotation],
          texts: [],
          images: [],
          shapes: []
        },
        chart: {
          animations: {
            enabled: true,
            speed: 800,
            animateGradually: {
              delay: 150,
              enabled: true
            },
            dynamicAnimation: {
              enabled: true,
              speed: 350
            }
          },
          background: "",
          locales: [Hi],
          defaultLocale: "en",
          dropShadow: {
            enabled: false,
            enabledOnSeries: void 0,
            top: 2,
            left: 2,
            blur: 4,
            color: "#000",
            opacity: 0.7
          },
          events: {
            animationEnd: void 0,
            beforeMount: void 0,
            mounted: void 0,
            updated: void 0,
            click: void 0,
            mouseMove: void 0,
            mouseLeave: void 0,
            xAxisLabelClick: void 0,
            legendClick: void 0,
            markerClick: void 0,
            selection: void 0,
            dataPointSelection: void 0,
            dataPointMouseEnter: void 0,
            dataPointMouseLeave: void 0,
            beforeZoom: void 0,
            beforeResetZoom: void 0,
            zoomed: void 0,
            scrolled: void 0,
            brushScrolled: void 0
          },
          foreColor: "#373d3f",
          fontFamily: "Helvetica, Arial, sans-serif",
          height: "auto",
          parentHeightOffset: 15,
          redrawOnParentResize: true,
          redrawOnWindowResize: true,
          id: void 0,
          group: void 0,
          nonce: void 0,
          offsetX: 0,
          offsetY: 0,
          selection: {
            enabled: false,
            type: "x",
            fill: {
              color: "#24292e",
              opacity: 0.1
            },
            stroke: {
              width: 1,
              color: "#24292e",
              opacity: 0.4,
              dashArray: 3
            },
            xaxis: {
              min: void 0,
              max: void 0
            },
            yaxis: {
              min: void 0,
              max: void 0
            }
          },
          sparkline: {
            enabled: false
          },
          brush: {
            enabled: false,
            autoScaleYaxis: true,
            target: void 0,
            targets: void 0
          },
          stacked: false,
          stackOnlyBar: true,
          stackType: "normal",
          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true,
              customIcons: []
            },
            export: {
              csv: {
                filename: void 0,
                columnDelimiter: ",",
                headerCategory: "category",
                headerValue: "value",
                categoryFormatter: void 0,
                valueFormatter: void 0
              },
              png: {
                filename: void 0
              },
              svg: {
                filename: void 0
              },
              scale: void 0,
              width: void 0
            },
            autoSelected: "zoom"
          },
          type: "line",
          width: "100%",
          zoom: {
            enabled: true,
            type: "x",
            autoScaleYaxis: false,
            allowMouseWheelZoom: true,
            zoomedArea: {
              fill: {
                color: "#90CAF9",
                opacity: 0.4
              },
              stroke: {
                color: "#0D47A1",
                opacity: 0.4,
                width: 1
              }
            }
          }
        },
        plotOptions: {
          line: {
            isSlopeChart: false,
            colors: {
              threshold: 0,
              colorAboveThreshold: void 0,
              colorBelowThreshold: void 0
            }
          },
          area: {
            fillTo: "origin"
          },
          bar: {
            horizontal: false,
            columnWidth: "70%",
            barHeight: "70%",
            distributed: false,
            borderRadius: 0,
            borderRadiusApplication: "around",
            borderRadiusWhenStacked: "last",
            rangeBarOverlap: true,
            rangeBarGroupRows: false,
            hideZeroBarsWhenGrouped: false,
            isDumbbell: false,
            dumbbellColors: void 0,
            isFunnel: false,
            isFunnel3d: true,
            colors: {
              ranges: [],
              backgroundBarColors: [],
              backgroundBarOpacity: 1,
              backgroundBarRadius: 0
            },
            dataLabels: {
              position: "top",
              maxItems: 100,
              hideOverflowingLabels: true,
              orientation: "horizontal",
              total: {
                enabled: false,
                formatter: void 0,
                offsetX: 0,
                offsetY: 0,
                style: {
                  color: "#373d3f",
                  fontSize: "12px",
                  fontFamily: void 0,
                  fontWeight: 600
                }
              }
            }
          },
          bubble: {
            zScaling: true,
            minBubbleRadius: void 0,
            maxBubbleRadius: void 0
          },
          candlestick: {
            colors: {
              upward: "#00B746",
              downward: "#EF403C"
            },
            wick: {
              useFillColor: true
            }
          },
          boxPlot: {
            colors: {
              upper: "#00E396",
              lower: "#008FFB"
            }
          },
          heatmap: {
            radius: 2,
            enableShades: true,
            shadeIntensity: 0.5,
            reverseNegativeShade: false,
            distributed: false,
            useFillColorAsStroke: false,
            colorScale: {
              inverse: false,
              ranges: [],
              min: void 0,
              max: void 0
            }
          },
          treemap: {
            enableShades: true,
            shadeIntensity: 0.5,
            distributed: false,
            reverseNegativeShade: false,
            useFillColorAsStroke: false,
            borderRadius: 4,
            dataLabels: {
              format: "scale"
            },
            colorScale: {
              inverse: false,
              ranges: [],
              min: void 0,
              max: void 0
            },
            seriesTitle: {
              show: true,
              offsetY: 1,
              offsetX: 1,
              borderColor: "#000",
              borderWidth: 1,
              borderRadius: 2,
              style: {
                background: "rgba(0, 0, 0, 0.6)",
                color: "#fff",
                fontSize: "12px",
                fontFamily: void 0,
                fontWeight: 400,
                cssClass: "",
                padding: {
                  left: 6,
                  right: 6,
                  top: 2,
                  bottom: 2
                }
              }
            }
          },
          radialBar: {
            inverseOrder: false,
            startAngle: 0,
            endAngle: 360,
            offsetX: 0,
            offsetY: 0,
            hollow: {
              margin: 5,
              size: "50%",
              background: "transparent",
              image: void 0,
              imageWidth: 150,
              imageHeight: 150,
              imageOffsetX: 0,
              imageOffsetY: 0,
              imageClipped: true,
              position: "front",
              dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.5
              }
            },
            track: {
              show: true,
              startAngle: void 0,
              endAngle: void 0,
              background: "#f2f2f2",
              strokeWidth: "97%",
              opacity: 1,
              margin: 5,
              dropShadow: {
                enabled: false,
                top: 0,
                left: 0,
                blur: 3,
                color: "#000",
                opacity: 0.5
              }
            },
            dataLabels: {
              show: true,
              name: {
                show: true,
                fontSize: "16px",
                fontFamily: void 0,
                fontWeight: 600,
                color: void 0,
                offsetY: 0,
                formatter: function(t3) {
                  return t3;
                }
              },
              value: {
                show: true,
                fontSize: "14px",
                fontFamily: void 0,
                fontWeight: 400,
                color: void 0,
                offsetY: 16,
                formatter: function(t3) {
                  return t3 + "%";
                }
              },
              total: {
                show: false,
                label: "Total",
                fontSize: "16px",
                fontWeight: 600,
                fontFamily: void 0,
                color: void 0,
                formatter: function(t3) {
                  return t3.globals.seriesTotals.reduce(function(t4, e2) {
                    return t4 + e2;
                  }, 0) / t3.globals.series.length + "%";
                }
              }
            },
            barLabels: {
              enabled: false,
              offsetX: 0,
              offsetY: 0,
              useSeriesColors: true,
              fontFamily: void 0,
              fontWeight: 600,
              fontSize: "16px",
              formatter: function(t3) {
                return t3;
              },
              onClick: void 0
            }
          },
          pie: {
            customScale: 1,
            offsetX: 0,
            offsetY: 0,
            startAngle: 0,
            endAngle: 360,
            expandOnClick: true,
            dataLabels: {
              offset: 0,
              minAngleToShowLabel: 10
            },
            donut: {
              size: "65%",
              background: "transparent",
              labels: {
                show: false,
                name: {
                  show: true,
                  fontSize: "16px",
                  fontFamily: void 0,
                  fontWeight: 600,
                  color: void 0,
                  offsetY: -10,
                  formatter: function(t3) {
                    return t3;
                  }
                },
                value: {
                  show: true,
                  fontSize: "20px",
                  fontFamily: void 0,
                  fontWeight: 400,
                  color: void 0,
                  offsetY: 10,
                  formatter: function(t3) {
                    return t3;
                  }
                },
                total: {
                  show: false,
                  showAlways: false,
                  label: "Total",
                  fontSize: "16px",
                  fontWeight: 400,
                  fontFamily: void 0,
                  color: void 0,
                  formatter: function(t3) {
                    return t3.globals.seriesTotals.reduce(function(t4, e2) {
                      return t4 + e2;
                    }, 0);
                  }
                }
              }
            }
          },
          polarArea: {
            rings: {
              strokeWidth: 1,
              strokeColor: "#e8e8e8"
            },
            spokes: {
              strokeWidth: 1,
              connectorColors: "#e8e8e8"
            }
          },
          radar: {
            size: void 0,
            offsetX: 0,
            offsetY: 0,
            polygons: {
              strokeWidth: 1,
              strokeColors: "#e8e8e8",
              connectorColors: "#e8e8e8",
              fill: {
                colors: void 0
              }
            }
          }
        },
        colors: void 0,
        dataLabels: {
          enabled: true,
          enabledOnSeries: void 0,
          formatter: function(t3) {
            return null !== t3 ? t3 : "";
          },
          textAnchor: "middle",
          distributed: false,
          offsetX: 0,
          offsetY: 0,
          style: {
            fontSize: "12px",
            fontFamily: void 0,
            fontWeight: 600,
            colors: void 0
          },
          background: {
            enabled: true,
            foreColor: "#fff",
            borderRadius: 2,
            padding: 4,
            opacity: 0.9,
            borderWidth: 1,
            borderColor: "#fff",
            dropShadow: {
              enabled: false,
              top: 1,
              left: 1,
              blur: 1,
              color: "#000",
              opacity: 0.8
            }
          },
          dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            color: "#000",
            opacity: 0.8
          }
        },
        fill: {
          type: "solid",
          colors: void 0,
          opacity: 0.85,
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: void 0,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 100],
            colorStops: []
          },
          image: {
            src: [],
            width: void 0,
            height: void 0
          },
          pattern: {
            style: "squares",
            width: 6,
            height: 6,
            strokeWidth: 2
          }
        },
        forecastDataPoints: {
          count: 0,
          fillOpacity: 0.5,
          strokeWidth: void 0,
          dashArray: 4
        },
        grid: {
          show: true,
          borderColor: "#e0e0e0",
          strokeDashArray: 0,
          position: "back",
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: true
            }
          },
          row: {
            colors: void 0,
            opacity: 0.5
          },
          column: {
            colors: void 0,
            opacity: 0.5
          },
          padding: {
            top: 0,
            right: 10,
            bottom: 0,
            left: 12
          }
        },
        labels: [],
        legend: {
          show: true,
          showForSingleSeries: false,
          showForNullSeries: true,
          showForZeroSeries: true,
          floating: false,
          position: "bottom",
          horizontalAlign: "center",
          inverseOrder: false,
          fontSize: "12px",
          fontFamily: void 0,
          fontWeight: 400,
          width: void 0,
          height: void 0,
          formatter: void 0,
          tooltipHoverFormatter: void 0,
          offsetX: -20,
          offsetY: 4,
          customLegendItems: [],
          clusterGroupedSeries: true,
          clusterGroupedSeriesOrientation: "vertical",
          labels: {
            colors: void 0,
            useSeriesColors: false
          },
          markers: {
            size: 7,
            fillColors: void 0,
            strokeWidth: 1,
            shape: void 0,
            offsetX: 0,
            offsetY: 0,
            customHTML: void 0,
            onClick: void 0
          },
          itemMargin: {
            horizontal: 5,
            vertical: 4
          },
          onItemClick: {
            toggleDataSeries: true
          },
          onItemHover: {
            highlightDataSeries: true
          }
        },
        markers: {
          discrete: [],
          size: 0,
          colors: void 0,
          strokeColors: "#fff",
          strokeWidth: 2,
          strokeOpacity: 0.9,
          strokeDashArray: 0,
          fillOpacity: 1,
          shape: "circle",
          offsetX: 0,
          offsetY: 0,
          showNullDataPoints: true,
          onClick: void 0,
          onDblClick: void 0,
          hover: {
            size: void 0,
            sizeOffset: 3
          }
        },
        noData: {
          text: void 0,
          align: "center",
          verticalAlign: "middle",
          offsetX: 0,
          offsetY: 0,
          style: {
            color: void 0,
            fontSize: "14px",
            fontFamily: void 0
          }
        },
        responsive: [],
        series: void 0,
        states: {
          hover: {
            filter: {
              type: "lighten"
            }
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: "darken"
            }
          }
        },
        title: {
          text: void 0,
          align: "left",
          margin: 5,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "14px",
            fontWeight: 900,
            fontFamily: void 0,
            color: void 0
          }
        },
        subtitle: {
          text: void 0,
          align: "left",
          margin: 5,
          offsetX: 0,
          offsetY: 30,
          floating: false,
          style: {
            fontSize: "12px",
            fontWeight: 400,
            fontFamily: void 0,
            color: void 0
          }
        },
        stroke: {
          show: true,
          curve: "smooth",
          lineCap: "butt",
          width: 2,
          colors: void 0,
          dashArray: 0,
          fill: {
            type: "solid",
            colors: void 0,
            opacity: 0.85,
            gradient: {
              shade: "dark",
              type: "horizontal",
              shadeIntensity: 0.5,
              gradientToColors: void 0,
              inverseColors: true,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 100],
              colorStops: []
            }
          }
        },
        tooltip: {
          enabled: true,
          enabledOnSeries: void 0,
          shared: true,
          hideEmptySeries: false,
          followCursor: false,
          intersect: false,
          inverseOrder: false,
          custom: void 0,
          fillSeriesColor: false,
          theme: "light",
          cssClass: "",
          style: {
            fontSize: "12px",
            fontFamily: void 0
          },
          onDatasetHover: {
            highlightDataSeries: false
          },
          x: {
            show: true,
            format: "dd MMM",
            formatter: void 0
          },
          y: {
            formatter: void 0,
            title: {
              formatter: function(t3) {
                return t3 ? t3 + ": " : "";
              }
            }
          },
          z: {
            formatter: void 0,
            title: "Size: "
          },
          marker: {
            show: true,
            fillColors: void 0
          },
          items: {
            display: "flex"
          },
          fixed: {
            enabled: false,
            position: "topRight",
            offsetX: 0,
            offsetY: 0
          }
        },
        xaxis: {
          type: "category",
          categories: [],
          convertedCatToNumeric: false,
          offsetX: 0,
          offsetY: 0,
          overwriteCategories: void 0,
          labels: {
            show: true,
            rotate: -45,
            rotateAlways: false,
            hideOverlappingLabels: true,
            trim: false,
            minHeight: void 0,
            maxHeight: 120,
            showDuplicates: true,
            style: {
              colors: [],
              fontSize: "12px",
              fontWeight: 400,
              fontFamily: void 0,
              cssClass: ""
            },
            offsetX: 0,
            offsetY: 0,
            format: void 0,
            formatter: void 0,
            datetimeUTC: true,
            datetimeFormatter: {
              year: "yyyy",
              month: "MMM 'yy",
              day: "dd MMM",
              hour: "HH:mm",
              minute: "HH:mm:ss",
              second: "HH:mm:ss"
            }
          },
          group: {
            groups: [],
            style: {
              colors: [],
              fontSize: "12px",
              fontWeight: 400,
              fontFamily: void 0,
              cssClass: ""
            }
          },
          axisBorder: {
            show: true,
            color: "#e0e0e0",
            width: "100%",
            height: 1,
            offsetX: 0,
            offsetY: 0
          },
          axisTicks: {
            show: true,
            color: "#e0e0e0",
            height: 6,
            offsetX: 0,
            offsetY: 0
          },
          stepSize: void 0,
          tickAmount: void 0,
          tickPlacement: "on",
          min: void 0,
          max: void 0,
          range: void 0,
          floating: false,
          decimalsInFloat: void 0,
          position: "bottom",
          title: {
            text: void 0,
            offsetX: 0,
            offsetY: 0,
            style: {
              color: void 0,
              fontSize: "12px",
              fontWeight: 900,
              fontFamily: void 0,
              cssClass: ""
            }
          },
          crosshairs: {
            show: true,
            width: 1,
            position: "back",
            opacity: 0.9,
            stroke: {
              color: "#b6b6b6",
              width: 1,
              dashArray: 3
            },
            fill: {
              type: "solid",
              color: "#B1B9C4",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            },
            dropShadow: {
              enabled: false,
              left: 0,
              top: 0,
              blur: 1,
              opacity: 0.8
            }
          },
          tooltip: {
            enabled: true,
            offsetY: 0,
            formatter: void 0,
            style: {
              fontSize: "12px",
              fontFamily: void 0
            }
          }
        },
        yaxis: this.yAxis,
        theme: {
          mode: "",
          palette: "palette1",
          monochrome: {
            enabled: false,
            color: "#008FFB",
            shadeTo: "light",
            shadeIntensity: 0.65
          }
        }
      };
    }
  }]), t2;
}();
var Fi = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.graphics = new Mi(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = true), this.helpers = new Ii(this), this.xAxisAnnotations = new Ti(this), this.yAxisAnnotations = new Ei(this), this.pointsAnnotations = new Yi(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = true), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints;
  }
  return s(t2, [{
    key: "drawAxesAnnotations",
    value: function() {
      var t3 = this.w;
      if (t3.globals.axisCharts && t3.globals.dataPoints) {
        for (var e2 = this.yAxisAnnotations.drawYAxisAnnotations(), i2 = this.xAxisAnnotations.drawXAxisAnnotations(), a2 = this.pointsAnnotations.drawPointAnnotations(), s2 = t3.config.chart.animations.enabled, r2 = [e2, i2, a2], n2 = [i2.node, e2.node, a2.node], o2 = 0; o2 < 3; o2++) t3.globals.dom.elGraphical.add(r2[o2]), !s2 || t3.globals.resized || t3.globals.dataChanged || "scatter" !== t3.config.chart.type && "bubble" !== t3.config.chart.type && t3.globals.dataPoints > 1 && n2[o2].classList.add("apexcharts-element-hidden"), t3.globals.delayedElements.push({
          el: n2[o2],
          index: 0
        });
        this.helpers.annotationsBackground();
      }
    }
  }, {
    key: "drawImageAnnos",
    value: function() {
      var t3 = this;
      this.w.config.annotations.images.map(function(e2, i2) {
        t3.addImage(e2, i2);
      });
    }
  }, {
    key: "drawTextAnnos",
    value: function() {
      var t3 = this;
      this.w.config.annotations.texts.map(function(e2, i2) {
        t3.addText(e2, i2);
      });
    }
  }, {
    key: "addXaxisAnnotation",
    value: function(t3, e2, i2) {
      this.xAxisAnnotations.addXaxisAnnotation(t3, e2, i2);
    }
  }, {
    key: "addYaxisAnnotation",
    value: function(t3, e2, i2) {
      this.yAxisAnnotations.addYaxisAnnotation(t3, e2, i2);
    }
  }, {
    key: "addPointAnnotation",
    value: function(t3, e2, i2) {
      this.pointsAnnotations.addPointAnnotation(t3, e2, i2);
    }
  }, {
    key: "addText",
    value: function(t3, e2) {
      var i2 = t3.x, a2 = t3.y, s2 = t3.text, r2 = t3.textAnchor, n2 = t3.foreColor, o2 = t3.fontSize, l2 = t3.fontFamily, h2 = t3.fontWeight, c2 = t3.cssClass, d2 = t3.backgroundColor, u2 = t3.borderWidth, g2 = t3.strokeDashArray, p2 = t3.borderRadius, f2 = t3.borderColor, x2 = t3.appendTo, b2 = void 0 === x2 ? ".apexcharts-svg" : x2, m2 = t3.paddingLeft, v2 = void 0 === m2 ? 4 : m2, y2 = t3.paddingRight, w2 = void 0 === y2 ? 4 : y2, k2 = t3.paddingBottom, A2 = void 0 === k2 ? 2 : k2, C2 = t3.paddingTop, S2 = void 0 === C2 ? 2 : C2, L2 = this.w, M2 = this.graphics.drawText({
        x: i2,
        y: a2,
        text: s2,
        textAnchor: r2 || "start",
        fontSize: o2 || "12px",
        fontWeight: h2 || "regular",
        fontFamily: l2 || L2.config.chart.fontFamily,
        foreColor: n2 || L2.config.chart.foreColor,
        cssClass: c2
      }), P2 = L2.globals.dom.baseEl.querySelector(b2);
      P2 && P2.appendChild(M2.node);
      var I2 = M2.bbox();
      if (s2) {
        var T2 = this.graphics.drawRect(I2.x - v2, I2.y - S2, I2.width + v2 + w2, I2.height + A2 + S2, p2, d2 || "transparent", 1, u2, f2, g2);
        P2.insertBefore(T2.node, M2.node);
      }
    }
  }, {
    key: "addImage",
    value: function(t3, e2) {
      var i2 = this.w, a2 = t3.path, s2 = t3.x, r2 = void 0 === s2 ? 0 : s2, n2 = t3.y, o2 = void 0 === n2 ? 0 : n2, l2 = t3.width, h2 = void 0 === l2 ? 20 : l2, c2 = t3.height, d2 = void 0 === c2 ? 20 : c2, u2 = t3.appendTo, g2 = void 0 === u2 ? ".apexcharts-svg" : u2, p2 = i2.globals.dom.Paper.image(a2);
      p2.size(h2, d2).move(r2, o2);
      var f2 = i2.globals.dom.baseEl.querySelector(g2);
      return f2 && f2.appendChild(p2.node), p2;
    }
  }, {
    key: "addXaxisAnnotationExternal",
    value: function(t3, e2, i2) {
      return this.addAnnotationExternal({
        params: t3,
        pushToMemory: e2,
        context: i2,
        type: "xaxis",
        contextMethod: i2.addXaxisAnnotation
      }), i2;
    }
  }, {
    key: "addYaxisAnnotationExternal",
    value: function(t3, e2, i2) {
      return this.addAnnotationExternal({
        params: t3,
        pushToMemory: e2,
        context: i2,
        type: "yaxis",
        contextMethod: i2.addYaxisAnnotation
      }), i2;
    }
  }, {
    key: "addPointAnnotationExternal",
    value: function(t3, e2, i2) {
      return void 0 === this.invertAxis && (this.invertAxis = i2.w.globals.isBarHorizontal), this.addAnnotationExternal({
        params: t3,
        pushToMemory: e2,
        context: i2,
        type: "point",
        contextMethod: i2.addPointAnnotation
      }), i2;
    }
  }, {
    key: "addAnnotationExternal",
    value: function(t3) {
      var e2 = t3.params, i2 = t3.pushToMemory, a2 = t3.context, s2 = t3.type, r2 = t3.contextMethod, n2 = a2, o2 = n2.w, l2 = o2.globals.dom.baseEl.querySelector(".apexcharts-".concat(s2, "-annotations")), h2 = l2.childNodes.length + 1, c2 = new Oi(), d2 = Object.assign({}, "xaxis" === s2 ? c2.xAxisAnnotation : "yaxis" === s2 ? c2.yAxisAnnotation : c2.pointAnnotation), u2 = v.extend(d2, e2);
      switch (s2) {
        case "xaxis":
          this.addXaxisAnnotation(u2, l2, h2);
          break;
        case "yaxis":
          this.addYaxisAnnotation(u2, l2, h2);
          break;
        case "point":
          this.addPointAnnotation(u2, l2, h2);
      }
      var g2 = o2.globals.dom.baseEl.querySelector(".apexcharts-".concat(s2, "-annotations .apexcharts-").concat(s2, "-annotation-label[rel='").concat(h2, "']")), p2 = this.helpers.addBackgroundToAnno(g2, u2);
      return p2 && l2.insertBefore(p2.node, g2), i2 && o2.globals.memory.methodsToExec.push({
        context: n2,
        id: u2.id ? u2.id : v.randomId(),
        method: r2,
        label: "addAnnotation",
        params: e2
      }), a2;
    }
  }, {
    key: "clearAnnotations",
    value: function(t3) {
      for (var e2 = t3.w, i2 = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations"), a2 = e2.globals.memory.methodsToExec.length - 1; a2 >= 0; a2--) "addText" !== e2.globals.memory.methodsToExec[a2].label && "addAnnotation" !== e2.globals.memory.methodsToExec[a2].label || e2.globals.memory.methodsToExec.splice(a2, 1);
      i2 = v.listToArray(i2), Array.prototype.forEach.call(i2, function(t4) {
        for (; t4.firstChild; ) t4.removeChild(t4.firstChild);
      });
    }
  }, {
    key: "removeAnnotation",
    value: function(t3, e2) {
      var i2 = t3.w, a2 = i2.globals.dom.baseEl.querySelectorAll(".".concat(e2));
      a2 && (i2.globals.memory.methodsToExec.map(function(t4, a3) {
        t4.id === e2 && i2.globals.memory.methodsToExec.splice(a3, 1);
      }), Array.prototype.forEach.call(a2, function(t4) {
        t4.parentElement.removeChild(t4);
      }));
    }
  }]), t2;
}();
var Di = function(t2) {
  var e2, i2 = t2.isTimeline, a2 = t2.ctx, s2 = t2.seriesIndex, r2 = t2.dataPointIndex, n2 = t2.y1, o2 = t2.y2, l2 = t2.w, h2 = l2.globals.seriesRangeStart[s2][r2], c2 = l2.globals.seriesRangeEnd[s2][r2], d2 = l2.globals.labels[r2], u2 = l2.config.series[s2].name ? l2.config.series[s2].name : "", g2 = l2.globals.ttKeyFormatter, p2 = l2.config.tooltip.y.title.formatter, f2 = {
    w: l2,
    seriesIndex: s2,
    dataPointIndex: r2,
    start: h2,
    end: c2
  };
  ("function" == typeof p2 && (u2 = p2(u2, f2)), null !== (e2 = l2.config.series[s2].data[r2]) && void 0 !== e2 && e2.x && (d2 = l2.config.series[s2].data[r2].x), i2) || "datetime" === l2.config.xaxis.type && (d2 = new Xi(a2).xLabelFormat(l2.globals.ttKeyFormatter, d2, d2, {
    i: void 0,
    dateFormatter: new zi(a2).formatDate,
    w: l2
  }));
  "function" == typeof g2 && (d2 = g2(d2, f2)), Number.isFinite(n2) && Number.isFinite(o2) && (h2 = n2, c2 = o2);
  var x2 = "", b2 = "", m2 = l2.globals.colors[s2];
  if (void 0 === l2.config.tooltip.x.formatter) {
    if ("datetime" === l2.config.xaxis.type) {
      var v2 = new zi(a2);
      x2 = v2.formatDate(v2.getDate(h2), l2.config.tooltip.x.format), b2 = v2.formatDate(v2.getDate(c2), l2.config.tooltip.x.format);
    } else x2 = h2, b2 = c2;
  } else x2 = l2.config.tooltip.x.formatter(h2), b2 = l2.config.tooltip.x.formatter(c2);
  return {
    start: h2,
    end: c2,
    startVal: x2,
    endVal: b2,
    ylabel: d2,
    color: m2,
    seriesName: u2
  };
};
var _i = function(t2) {
  var e2 = t2.color, i2 = t2.seriesName, a2 = t2.ylabel, s2 = t2.start, r2 = t2.end, n2 = t2.seriesIndex, o2 = t2.dataPointIndex, l2 = t2.ctx.tooltip.tooltipLabels.getFormatters(n2);
  s2 = l2.yLbFormatter(s2), r2 = l2.yLbFormatter(r2);
  var h2 = l2.yLbFormatter(t2.w.globals.series[n2][o2]), c2 = '<span class="value start-value">\n  '.concat(s2, '\n  </span> <span class="separator">-</span> <span class="value end-value">\n  ').concat(r2, "\n  </span>");
  return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + e2 + '">' + (i2 || "") + '</span></div><div> <span class="category">' + a2 + ": </span> " + (t2.w.globals.comboCharts ? "rangeArea" === t2.w.config.series[n2].type || "rangeBar" === t2.w.config.series[n2].type ? c2 : "<span>".concat(h2, "</span>") : c2) + " </div></div>";
};
var Ni = function() {
  function t2(e2) {
    i(this, t2), this.opts = e2;
  }
  return s(t2, [{
    key: "hideYAxis",
    value: function() {
      this.opts.yaxis[0].show = false, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = false, this.opts.yaxis[0].axisTicks.show = false, this.opts.yaxis[0].floating = true;
    }
  }, {
    key: "line",
    value: function() {
      return {
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 5,
          curve: "straight"
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        xaxis: {
          crosshairs: {
            width: 1
          }
        }
      };
    }
  }, {
    key: "sparkline",
    value: function(t3) {
      this.hideYAxis();
      return v.extend(t3, {
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        legend: {
          show: false
        },
        xaxis: {
          labels: {
            show: false
          },
          tooltip: {
            enabled: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        chart: {
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        }
      });
    }
  }, {
    key: "slope",
    value: function() {
      return this.hideYAxis(), {
        chart: {
          toolbar: {
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: true,
          formatter: function(t3, e2) {
            var i2 = e2.w.config.series[e2.seriesIndex].name;
            return null !== t3 ? i2 + ": " + t3 : "";
          },
          background: {
            enabled: false
          },
          offsetX: -5
        },
        grid: {
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        xaxis: {
          position: "top",
          labels: {
            style: {
              fontSize: 14,
              fontWeight: 900
            }
          },
          tooltip: {
            enabled: false
          },
          crosshairs: {
            show: false
          }
        },
        markers: {
          size: 8,
          hover: {
            sizeOffset: 1
          }
        },
        legend: {
          show: false
        },
        tooltip: {
          shared: false,
          intersect: true,
          followCursor: true
        },
        stroke: {
          width: 5,
          curve: "straight"
        }
      };
    }
  }, {
    key: "bar",
    value: function() {
      return {
        chart: {
          stacked: false
        },
        plotOptions: {
          bar: {
            dataLabels: {
              position: "center"
            }
          }
        },
        dataLabels: {
          style: {
            colors: ["#fff"]
          },
          background: {
            enabled: false
          }
        },
        stroke: {
          width: 0,
          lineCap: "square"
        },
        fill: {
          opacity: 0.85
        },
        legend: {
          markers: {
            shape: "square"
          }
        },
        tooltip: {
          shared: false,
          intersect: true
        },
        xaxis: {
          tooltip: {
            enabled: false
          },
          tickPlacement: "between",
          crosshairs: {
            width: "barWidth",
            position: "back",
            fill: {
              type: "gradient"
            },
            dropShadow: {
              enabled: false
            },
            stroke: {
              width: 0
            }
          }
        }
      };
    }
  }, {
    key: "funnel",
    value: function() {
      return this.hideYAxis(), u(u({}, this.bar()), {}, {
        chart: {
          animations: {
            speed: 800,
            animateGradually: {
              enabled: false
            }
          }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            borderRadiusApplication: "around",
            borderRadius: 0,
            dataLabels: {
              position: "center"
            }
          }
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0
          }
        },
        xaxis: {
          labels: {
            show: false
          },
          tooltip: {
            enabled: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        }
      });
    }
  }, {
    key: "candlestick",
    value: function() {
      var t3 = this;
      return {
        stroke: {
          width: 1,
          colors: ["#333"]
        },
        fill: {
          opacity: 1
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
          shared: true,
          custom: function(e2) {
            var i2 = e2.seriesIndex, a2 = e2.dataPointIndex, s2 = e2.w;
            return t3._getBoxTooltip(s2, i2, a2, ["Open", "High", "", "Low", "Close"], "candlestick");
          }
        },
        states: {
          active: {
            filter: {
              type: "none"
            }
          }
        },
        xaxis: {
          crosshairs: {
            width: 1
          }
        }
      };
    }
  }, {
    key: "boxPlot",
    value: function() {
      var t3 = this;
      return {
        chart: {
          animations: {
            dynamicAnimation: {
              enabled: false
            }
          }
        },
        stroke: {
          width: 1,
          colors: ["#24292e"]
        },
        dataLabels: {
          enabled: false
        },
        tooltip: {
          shared: true,
          custom: function(e2) {
            var i2 = e2.seriesIndex, a2 = e2.dataPointIndex, s2 = e2.w;
            return t3._getBoxTooltip(s2, i2, a2, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot");
          }
        },
        markers: {
          size: 7,
          strokeWidth: 1,
          strokeColors: "#111"
        },
        xaxis: {
          crosshairs: {
            width: 1
          }
        }
      };
    }
  }, {
    key: "rangeBar",
    value: function() {
      return {
        chart: {
          animations: {
            animateGradually: false
          }
        },
        stroke: {
          width: 0,
          lineCap: "square"
        },
        plotOptions: {
          bar: {
            borderRadius: 0,
            dataLabels: {
              position: "center"
            }
          }
        },
        dataLabels: {
          enabled: false,
          formatter: function(t3, e2) {
            e2.ctx;
            var i2 = e2.seriesIndex, a2 = e2.dataPointIndex, s2 = e2.w, r2 = function() {
              var t4 = s2.globals.seriesRangeStart[i2][a2];
              return s2.globals.seriesRangeEnd[i2][a2] - t4;
            };
            return s2.globals.comboCharts ? "rangeBar" === s2.config.series[i2].type || "rangeArea" === s2.config.series[i2].type ? r2() : t3 : r2();
          },
          background: {
            enabled: false
          },
          style: {
            colors: ["#fff"]
          }
        },
        markers: {
          size: 10
        },
        tooltip: {
          shared: false,
          followCursor: true,
          custom: function(t3) {
            return t3.w.config.plotOptions && t3.w.config.plotOptions.bar && t3.w.config.plotOptions.bar.horizontal ? function(t4) {
              var e2 = Di(u(u({}, t4), {}, {
                isTimeline: true
              })), i2 = e2.color, a2 = e2.seriesName, s2 = e2.ylabel, r2 = e2.startVal, n2 = e2.endVal;
              return _i(u(u({}, t4), {}, {
                color: i2,
                seriesName: a2,
                ylabel: s2,
                start: r2,
                end: n2
              }));
            }(t3) : function(t4) {
              var e2 = Di(t4), i2 = e2.color, a2 = e2.seriesName, s2 = e2.ylabel, r2 = e2.start, n2 = e2.end;
              return _i(u(u({}, t4), {}, {
                color: i2,
                seriesName: a2,
                ylabel: s2,
                start: r2,
                end: n2
              }));
            }(t3);
          }
        },
        xaxis: {
          tickPlacement: "between",
          tooltip: {
            enabled: false
          },
          crosshairs: {
            stroke: {
              width: 0
            }
          }
        }
      };
    }
  }, {
    key: "dumbbell",
    value: function(t3) {
      var e2, i2;
      return null !== (e2 = t3.plotOptions.bar) && void 0 !== e2 && e2.barHeight || (t3.plotOptions.bar.barHeight = 2), null !== (i2 = t3.plotOptions.bar) && void 0 !== i2 && i2.columnWidth || (t3.plotOptions.bar.columnWidth = 2), t3;
    }
  }, {
    key: "area",
    value: function() {
      return {
        stroke: {
          width: 4,
          fill: {
            type: "solid",
            gradient: {
              inverseColors: false,
              shade: "light",
              type: "vertical",
              opacityFrom: 0.65,
              opacityTo: 0.5,
              stops: [0, 100, 100]
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            inverseColors: false,
            shade: "light",
            type: "vertical",
            opacityFrom: 0.65,
            opacityTo: 0.5,
            stops: [0, 100, 100]
          }
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6
          }
        },
        tooltip: {
          followCursor: false
        }
      };
    }
  }, {
    key: "rangeArea",
    value: function() {
      return {
        stroke: {
          curve: "straight",
          width: 0
        },
        fill: {
          type: "solid",
          opacity: 0.6
        },
        markers: {
          size: 0
        },
        states: {
          hover: {
            filter: {
              type: "none"
            }
          },
          active: {
            filter: {
              type: "none"
            }
          }
        },
        tooltip: {
          intersect: false,
          shared: true,
          followCursor: true,
          custom: function(t3) {
            return function(t4) {
              var e2 = Di(t4), i2 = e2.color, a2 = e2.seriesName, s2 = e2.ylabel, r2 = e2.start, n2 = e2.end;
              return _i(u(u({}, t4), {}, {
                color: i2,
                seriesName: a2,
                ylabel: s2,
                start: r2,
                end: n2
              }));
            }(t3);
          }
        }
      };
    }
  }, {
    key: "brush",
    value: function(t3) {
      return v.extend(t3, {
        chart: {
          toolbar: {
            autoSelected: "selection",
            show: false
          },
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1
        },
        tooltip: {
          enabled: false
        },
        xaxis: {
          tooltip: {
            enabled: false
          }
        }
      });
    }
  }, {
    key: "stacked100",
    value: function(t3) {
      t3.dataLabels = t3.dataLabels || {}, t3.dataLabels.formatter = t3.dataLabels.formatter || void 0;
      var e2 = t3.dataLabels.formatter;
      return t3.yaxis.forEach(function(e3, i2) {
        t3.yaxis[i2].min = 0, t3.yaxis[i2].max = 100;
      }), "bar" === t3.chart.type && (t3.dataLabels.formatter = e2 || function(t4) {
        return "number" == typeof t4 && t4 ? t4.toFixed(0) + "%" : t4;
      }), t3;
    }
  }, {
    key: "stackedBars",
    value: function() {
      var t3 = this.bar();
      return u(u({}, t3), {}, {
        plotOptions: u(u({}, t3.plotOptions), {}, {
          bar: u(u({}, t3.plotOptions.bar), {}, {
            borderRadiusApplication: "end",
            borderRadiusWhenStacked: "last"
          })
        })
      });
    }
  }, {
    key: "convertCatToNumeric",
    value: function(t3) {
      return t3.xaxis.convertedCatToNumeric = true, t3;
    }
  }, {
    key: "convertCatToNumericXaxis",
    value: function(t3, e2, i2) {
      t3.xaxis.type = "numeric", t3.xaxis.labels = t3.xaxis.labels || {}, t3.xaxis.labels.formatter = t3.xaxis.labels.formatter || function(t4) {
        return v.isNumber(t4) ? Math.floor(t4) : t4;
      };
      var a2 = t3.xaxis.labels.formatter, s2 = t3.xaxis.categories && t3.xaxis.categories.length ? t3.xaxis.categories : t3.labels;
      return i2 && i2.length && (s2 = i2.map(function(t4) {
        return Array.isArray(t4) ? t4 : String(t4);
      })), s2 && s2.length && (t3.xaxis.labels.formatter = function(t4) {
        return v.isNumber(t4) ? a2(s2[Math.floor(t4) - 1]) : a2(t4);
      }), t3.xaxis.categories = [], t3.labels = [], t3.xaxis.tickAmount = t3.xaxis.tickAmount || "dataPoints", t3;
    }
  }, {
    key: "bubble",
    value: function() {
      return {
        dataLabels: {
          style: {
            colors: ["#fff"]
          }
        },
        tooltip: {
          shared: false,
          intersect: true
        },
        xaxis: {
          crosshairs: {
            width: 0
          }
        },
        fill: {
          type: "solid",
          gradient: {
            shade: "light",
            inverse: true,
            shadeIntensity: 0.55,
            opacityFrom: 0.4,
            opacityTo: 0.8
          }
        }
      };
    }
  }, {
    key: "scatter",
    value: function() {
      return {
        dataLabels: {
          enabled: false
        },
        tooltip: {
          shared: false,
          intersect: true
        },
        markers: {
          size: 6,
          strokeWidth: 1,
          hover: {
            sizeOffset: 2
          }
        }
      };
    }
  }, {
    key: "heatmap",
    value: function() {
      return {
        chart: {
          stacked: false
        },
        fill: {
          opacity: 1
        },
        dataLabels: {
          style: {
            colors: ["#fff"]
          }
        },
        stroke: {
          colors: ["#fff"]
        },
        tooltip: {
          followCursor: true,
          marker: {
            show: false
          },
          x: {
            show: false
          }
        },
        legend: {
          position: "top",
          markers: {
            shape: "square"
          }
        },
        grid: {
          padding: {
            right: 20
          }
        }
      };
    }
  }, {
    key: "treemap",
    value: function() {
      return {
        chart: {
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          style: {
            fontSize: 14,
            fontWeight: 600,
            colors: ["#fff"]
          }
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["#fff"]
        },
        legend: {
          show: false
        },
        fill: {
          opacity: 1,
          gradient: {
            stops: [0, 100]
          }
        },
        tooltip: {
          followCursor: true,
          x: {
            show: false
          }
        },
        grid: {
          padding: {
            left: 0,
            right: 0
          }
        },
        xaxis: {
          crosshairs: {
            show: false
          },
          tooltip: {
            enabled: false
          }
        }
      };
    }
  }, {
    key: "pie",
    value: function() {
      return {
        chart: {
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: false
              }
            }
          }
        },
        dataLabels: {
          formatter: function(t3) {
            return t3.toFixed(1) + "%";
          },
          style: {
            colors: ["#fff"]
          },
          background: {
            enabled: false
          },
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          colors: ["#fff"]
        },
        fill: {
          opacity: 1,
          gradient: {
            shade: "light",
            stops: [0, 100]
          }
        },
        tooltip: {
          theme: "dark",
          fillSeriesColor: true
        },
        legend: {
          position: "right"
        },
        grid: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      };
    }
  }, {
    key: "donut",
    value: function() {
      return {
        chart: {
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          formatter: function(t3) {
            return t3.toFixed(1) + "%";
          },
          style: {
            colors: ["#fff"]
          },
          background: {
            enabled: false
          },
          dropShadow: {
            enabled: true
          }
        },
        stroke: {
          colors: ["#fff"]
        },
        fill: {
          opacity: 1,
          gradient: {
            shade: "light",
            shadeIntensity: 0.35,
            stops: [80, 100],
            opacityFrom: 1,
            opacityTo: 1
          }
        },
        tooltip: {
          theme: "dark",
          fillSeriesColor: true
        },
        legend: {
          position: "right"
        },
        grid: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      };
    }
  }, {
    key: "polarArea",
    value: function() {
      return {
        chart: {
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          formatter: function(t3) {
            return t3.toFixed(1) + "%";
          },
          enabled: false
        },
        stroke: {
          show: true,
          width: 2
        },
        fill: {
          opacity: 0.7
        },
        tooltip: {
          theme: "dark",
          fillSeriesColor: true
        },
        legend: {
          position: "right"
        },
        grid: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      };
    }
  }, {
    key: "radar",
    value: function() {
      return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, {
        dataLabels: {
          enabled: false,
          style: {
            fontSize: "11px"
          }
        },
        stroke: {
          width: 2
        },
        markers: {
          size: 5,
          strokeWidth: 1,
          strokeOpacity: 1
        },
        fill: {
          opacity: 0.2
        },
        tooltip: {
          shared: false,
          intersect: true,
          followCursor: true
        },
        grid: {
          show: false,
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        },
        xaxis: {
          labels: {
            formatter: function(t3) {
              return t3;
            },
            style: {
              colors: ["#a8a8a8"],
              fontSize: "11px"
            }
          },
          tooltip: {
            enabled: false
          },
          crosshairs: {
            show: false
          }
        }
      };
    }
  }, {
    key: "radialBar",
    value: function() {
      return {
        chart: {
          animations: {
            dynamicAnimation: {
              enabled: true,
              speed: 800
            }
          },
          toolbar: {
            show: false
          }
        },
        fill: {
          gradient: {
            shade: "dark",
            shadeIntensity: 0.4,
            inverseColors: false,
            type: "diagonal2",
            opacityFrom: 1,
            opacityTo: 1,
            stops: [70, 98, 100]
          }
        },
        legend: {
          show: false,
          position: "right"
        },
        tooltip: {
          enabled: false,
          fillSeriesColor: true
        },
        grid: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      };
    }
  }, {
    key: "_getBoxTooltip",
    value: function(t3, e2, i2, a2, s2) {
      var r2 = t3.globals.seriesCandleO[e2][i2], n2 = t3.globals.seriesCandleH[e2][i2], o2 = t3.globals.seriesCandleM[e2][i2], l2 = t3.globals.seriesCandleL[e2][i2], h2 = t3.globals.seriesCandleC[e2][i2];
      return t3.config.series[e2].type && t3.config.series[e2].type !== s2 ? '<div class="apexcharts-custom-tooltip">\n          '.concat(t3.config.series[e2].name ? t3.config.series[e2].name : "series-" + (e2 + 1), ": <strong>").concat(t3.globals.series[e2][i2], "</strong>\n        </div>") : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t3.config.chart.type, '">') + "<div>".concat(a2[0], ': <span class="value">') + r2 + "</span></div>" + "<div>".concat(a2[1], ': <span class="value">') + n2 + "</span></div>" + (o2 ? "<div>".concat(a2[2], ': <span class="value">') + o2 + "</span></div>" : "") + "<div>".concat(a2[3], ': <span class="value">') + l2 + "</span></div>" + "<div>".concat(a2[4], ': <span class="value">') + h2 + "</span></div></div>";
    }
  }]), t2;
}();
var Wi = function() {
  function t2(e2) {
    i(this, t2), this.opts = e2;
  }
  return s(t2, [{
    key: "init",
    value: function(t3) {
      var e2 = t3.responsiveOverride, i2 = this.opts, a2 = new Oi(), s2 = new Ni(i2);
      this.chartType = i2.chart.type, i2 = this.extendYAxis(i2), i2 = this.extendAnnotations(i2);
      var r2 = a2.init(), n2 = {};
      if (i2 && "object" === b(i2)) {
        var o2, l2, h2, c2, d2, u2, g2, p2, f2, x2, m2 = {};
        m2 = -1 !== ["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "rangeArea", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(i2.chart.type) ? s2[i2.chart.type]() : s2.line(), null !== (o2 = i2.plotOptions) && void 0 !== o2 && null !== (l2 = o2.bar) && void 0 !== l2 && l2.isFunnel && (m2 = s2.funnel()), i2.chart.stacked && "bar" === i2.chart.type && (m2 = s2.stackedBars()), null !== (h2 = i2.chart.brush) && void 0 !== h2 && h2.enabled && (m2 = s2.brush(m2)), null !== (c2 = i2.plotOptions) && void 0 !== c2 && null !== (d2 = c2.line) && void 0 !== d2 && d2.isSlopeChart && (m2 = s2.slope()), i2.chart.stacked && "100%" === i2.chart.stackType && (i2 = s2.stacked100(i2)), null !== (u2 = i2.plotOptions) && void 0 !== u2 && null !== (g2 = u2.bar) && void 0 !== g2 && g2.isDumbbell && (i2 = s2.dumbbell(i2)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(i2), i2.xaxis = i2.xaxis || window.Apex.xaxis || {}, e2 || (i2.xaxis.convertedCatToNumeric = false), (null !== (p2 = (i2 = this.checkForCatToNumericXAxis(this.chartType, m2, i2)).chart.sparkline) && void 0 !== p2 && p2.enabled || null !== (f2 = window.Apex.chart) && void 0 !== f2 && null !== (x2 = f2.sparkline) && void 0 !== x2 && x2.enabled) && (m2 = s2.sparkline(m2)), n2 = v.extend(r2, m2);
      }
      var y2 = v.extend(n2, window.Apex);
      return r2 = v.extend(y2, i2), r2 = this.handleUserInputErrors(r2);
    }
  }, {
    key: "checkForCatToNumericXAxis",
    value: function(t3, e2, i2) {
      var a2, s2, r2 = new Ni(i2), n2 = ("bar" === t3 || "boxPlot" === t3) && (null === (a2 = i2.plotOptions) || void 0 === a2 || null === (s2 = a2.bar) || void 0 === s2 ? void 0 : s2.horizontal), o2 = "pie" === t3 || "polarArea" === t3 || "donut" === t3 || "radar" === t3 || "radialBar" === t3 || "heatmap" === t3, l2 = "datetime" !== i2.xaxis.type && "numeric" !== i2.xaxis.type, h2 = i2.xaxis.tickPlacement ? i2.xaxis.tickPlacement : e2.xaxis && e2.xaxis.tickPlacement;
      return n2 || o2 || !l2 || "between" === h2 || (i2 = r2.convertCatToNumeric(i2)), i2;
    }
  }, {
    key: "extendYAxis",
    value: function(t3, e2) {
      var i2 = new Oi();
      (void 0 === t3.yaxis || !t3.yaxis || Array.isArray(t3.yaxis) && 0 === t3.yaxis.length) && (t3.yaxis = {}), t3.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (t3.yaxis = v.extend(t3.yaxis, window.Apex.yaxis)), t3.yaxis.constructor !== Array ? t3.yaxis = [v.extend(i2.yAxis, t3.yaxis)] : t3.yaxis = v.extendArray(t3.yaxis, i2.yAxis);
      var a2 = false;
      t3.yaxis.forEach(function(t4) {
        t4.logarithmic && (a2 = true);
      });
      var s2 = t3.series;
      return e2 && !s2 && (s2 = e2.config.series), a2 && s2.length !== t3.yaxis.length && s2.length && (t3.yaxis = s2.map(function(e3, a3) {
        if (e3.name || (s2[a3].name = "series-".concat(a3 + 1)), t3.yaxis[a3]) return t3.yaxis[a3].seriesName = s2[a3].name, t3.yaxis[a3];
        var r2 = v.extend(i2.yAxis, t3.yaxis[0]);
        return r2.show = false, r2;
      })), a2 && s2.length > 1 && s2.length !== t3.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes"), t3;
    }
  }, {
    key: "extendAnnotations",
    value: function(t3) {
      return void 0 === t3.annotations && (t3.annotations = {}, t3.annotations.yaxis = [], t3.annotations.xaxis = [], t3.annotations.points = []), t3 = this.extendYAxisAnnotations(t3), t3 = this.extendXAxisAnnotations(t3), t3 = this.extendPointAnnotations(t3);
    }
  }, {
    key: "extendYAxisAnnotations",
    value: function(t3) {
      var e2 = new Oi();
      return t3.annotations.yaxis = v.extendArray(void 0 !== t3.annotations.yaxis ? t3.annotations.yaxis : [], e2.yAxisAnnotation), t3;
    }
  }, {
    key: "extendXAxisAnnotations",
    value: function(t3) {
      var e2 = new Oi();
      return t3.annotations.xaxis = v.extendArray(void 0 !== t3.annotations.xaxis ? t3.annotations.xaxis : [], e2.xAxisAnnotation), t3;
    }
  }, {
    key: "extendPointAnnotations",
    value: function(t3) {
      var e2 = new Oi();
      return t3.annotations.points = v.extendArray(void 0 !== t3.annotations.points ? t3.annotations.points : [], e2.pointAnnotation), t3;
    }
  }, {
    key: "checkForDarkTheme",
    value: function(t3) {
      t3.theme && "dark" === t3.theme.mode && (t3.tooltip || (t3.tooltip = {}), "light" !== t3.tooltip.theme && (t3.tooltip.theme = "dark"), t3.chart.foreColor || (t3.chart.foreColor = "#f6f7f8"), t3.theme.palette || (t3.theme.palette = "palette4"));
    }
  }, {
    key: "handleUserInputErrors",
    value: function(t3) {
      var e2 = t3;
      if (e2.tooltip.shared && e2.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
      if ("bar" === e2.chart.type && e2.plotOptions.bar.horizontal) {
        if (e2.yaxis.length > 1) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
        e2.yaxis[0].reversed && (e2.yaxis[0].opposite = true), e2.xaxis.tooltip.enabled = false, e2.yaxis[0].tooltip.enabled = false, e2.chart.zoom.enabled = false;
      }
      return "bar" !== e2.chart.type && "rangeBar" !== e2.chart.type || e2.tooltip.shared && "barWidth" === e2.xaxis.crosshairs.width && e2.series.length > 1 && (e2.xaxis.crosshairs.width = "tickWidth"), "candlestick" !== e2.chart.type && "boxPlot" !== e2.chart.type || e2.yaxis[0].reversed && (console.warn("Reversed y-axis in ".concat(e2.chart.type, " chart is not supported.")), e2.yaxis[0].reversed = false), e2;
    }
  }]), t2;
}();
var Bi = function() {
  function t2() {
    i(this, t2);
  }
  return s(t2, [{
    key: "initGlobalVars",
    value: function(t3) {
      t3.series = [], t3.seriesCandleO = [], t3.seriesCandleH = [], t3.seriesCandleM = [], t3.seriesCandleL = [], t3.seriesCandleC = [], t3.seriesRangeStart = [], t3.seriesRangeEnd = [], t3.seriesRange = [], t3.seriesPercent = [], t3.seriesGoals = [], t3.seriesX = [], t3.seriesZ = [], t3.seriesNames = [], t3.seriesTotals = [], t3.seriesLog = [], t3.seriesColors = [], t3.stackedSeriesTotals = [], t3.seriesXvalues = [], t3.seriesYvalues = [], t3.labels = [], t3.hasXaxisGroups = false, t3.groups = [], t3.barGroups = [], t3.lineGroups = [], t3.areaGroups = [], t3.hasSeriesGroups = false, t3.seriesGroups = [], t3.categoryLabels = [], t3.timescaleLabels = [], t3.noLabelsProvided = false, t3.resizeTimer = null, t3.selectionResizeTimer = null, t3.lastWheelExecution = 0, t3.delayedElements = [], t3.pointsArray = [], t3.dataLabelsRects = [], t3.isXNumeric = false, t3.skipLastTimelinelabel = false, t3.skipFirstTimelinelabel = false, t3.isDataXYZ = false, t3.isMultiLineX = false, t3.isMultipleYAxis = false, t3.maxY = -Number.MAX_VALUE, t3.minY = Number.MIN_VALUE, t3.minYArr = [], t3.maxYArr = [], t3.maxX = -Number.MAX_VALUE, t3.minX = Number.MAX_VALUE, t3.initialMaxX = -Number.MAX_VALUE, t3.initialMinX = Number.MAX_VALUE, t3.maxDate = 0, t3.minDate = Number.MAX_VALUE, t3.minZ = Number.MAX_VALUE, t3.maxZ = -Number.MAX_VALUE, t3.minXDiff = Number.MAX_VALUE, t3.yAxisScale = [], t3.xAxisScale = null, t3.xAxisTicksPositions = [], t3.yLabelsCoords = [], t3.yTitleCoords = [], t3.barPadForNumericAxis = 0, t3.padHorizontal = 0, t3.xRange = 0, t3.yRange = [], t3.zRange = 0, t3.dataPoints = 0, t3.xTickAmount = 0, t3.multiAxisTickAmount = 0;
    }
  }, {
    key: "globalVars",
    value: function(t3) {
      return {
        chartID: null,
        cuid: null,
        events: {
          beforeMount: [],
          mounted: [],
          updated: [],
          clicked: [],
          selection: [],
          dataPointSelection: [],
          zoomed: [],
          scrolled: []
        },
        colors: [],
        clientX: null,
        clientY: null,
        fill: {
          colors: []
        },
        stroke: {
          colors: []
        },
        dataLabels: {
          style: {
            colors: []
          }
        },
        radarPolygons: {
          fill: {
            colors: []
          }
        },
        markers: {
          colors: [],
          size: t3.markers.size,
          largestSize: 0
        },
        animationEnded: false,
        isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints,
        isDirty: false,
        isExecCalled: false,
        initialConfig: null,
        initialSeries: [],
        lastXAxis: [],
        lastYAxis: [],
        columnSeries: null,
        labels: [],
        timescaleLabels: [],
        noLabelsProvided: false,
        allSeriesCollapsed: false,
        collapsedSeries: [],
        collapsedSeriesIndices: [],
        ancillaryCollapsedSeries: [],
        ancillaryCollapsedSeriesIndices: [],
        risingSeries: [],
        dataFormatXNumeric: false,
        capturedSeriesIndex: -1,
        capturedDataPointIndex: -1,
        selectedDataPoints: [],
        invalidLogScale: false,
        ignoreYAxisIndexes: [],
        maxValsInArrayIndex: 0,
        radialSize: 0,
        selection: void 0,
        zoomEnabled: "zoom" === t3.chart.toolbar.autoSelected && t3.chart.toolbar.tools.zoom && t3.chart.zoom.enabled,
        panEnabled: "pan" === t3.chart.toolbar.autoSelected && t3.chart.toolbar.tools.pan,
        selectionEnabled: "selection" === t3.chart.toolbar.autoSelected && t3.chart.toolbar.tools.selection,
        yaxis: null,
        mousedown: false,
        lastClientPosition: {},
        visibleXRange: void 0,
        yValueDecimal: 0,
        total: 0,
        SVGNS: "http://www.w3.org/2000/svg",
        svgWidth: 0,
        svgHeight: 0,
        noData: false,
        locale: {},
        dom: {},
        memory: {
          methodsToExec: []
        },
        shouldAnimate: true,
        skipLastTimelinelabel: false,
        skipFirstTimelinelabel: false,
        delayedElements: [],
        axisCharts: true,
        isDataXYZ: false,
        isSlopeChart: t3.plotOptions.line.isSlopeChart,
        resized: false,
        resizeTimer: null,
        comboCharts: false,
        dataChanged: false,
        previousPaths: [],
        allSeriesHasEqualX: true,
        pointsArray: [],
        dataLabelsRects: [],
        lastDrawnDataLabelsIndexes: [],
        hasNullValues: false,
        zoomed: false,
        gridWidth: 0,
        gridHeight: 0,
        rotateXLabels: false,
        defaultLabels: false,
        xLabelFormatter: void 0,
        yLabelFormatters: [],
        xaxisTooltipFormatter: void 0,
        ttKeyFormatter: void 0,
        ttVal: void 0,
        ttZFormatter: void 0,
        LINE_HEIGHT_RATIO: 1.618,
        xAxisLabelsHeight: 0,
        xAxisGroupLabelsHeight: 0,
        xAxisLabelsWidth: 0,
        yAxisLabelsWidth: 0,
        scaleX: 1,
        scaleY: 1,
        translateX: 0,
        translateY: 0,
        translateYAxisX: [],
        yAxisWidths: [],
        translateXAxisY: 0,
        translateXAxisX: 0,
        tooltip: null,
        niceScaleAllowedMagMsd: [[1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10], [1, 1, 2, 5, 5, 5, 10, 10, 10, 10, 10]],
        niceScaleDefaultTicks: [1, 2, 4, 4, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 12, 12, 12, 12, 12, 12, 12, 12, 12, 24],
        seriesYAxisMap: [],
        seriesYAxisReverseMap: []
      };
    }
  }, {
    key: "init",
    value: function(t3) {
      var e2 = this.globalVars(t3);
      return this.initGlobalVars(e2), e2.initialConfig = v.extend({}, t3), e2.initialSeries = v.clone(t3.series), e2.lastXAxis = v.clone(e2.initialConfig.xaxis), e2.lastYAxis = v.clone(e2.initialConfig.yaxis), e2;
    }
  }]), t2;
}();
var Gi = function() {
  function t2(e2) {
    i(this, t2), this.opts = e2;
  }
  return s(t2, [{
    key: "init",
    value: function() {
      var t3 = new Wi(this.opts).init({
        responsiveOverride: false
      });
      return {
        config: t3,
        globals: new Bi().init(t3)
      };
    }
  }]), t2;
}();
var ji = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.opts = null, this.seriesIndex = 0, this.patternIDs = [];
  }
  return s(t2, [{
    key: "clippedImgArea",
    value: function(t3) {
      var e2 = this.w, i2 = e2.config, a2 = parseInt(e2.globals.gridWidth, 10), s2 = parseInt(e2.globals.gridHeight, 10), r2 = a2 > s2 ? a2 : s2, n2 = t3.image, o2 = 0, l2 = 0;
      void 0 === t3.width && void 0 === t3.height ? void 0 !== i2.fill.image.width && void 0 !== i2.fill.image.height ? (o2 = i2.fill.image.width + 1, l2 = i2.fill.image.height) : (o2 = r2 + 1, l2 = r2) : (o2 = t3.width, l2 = t3.height);
      var h2 = document.createElementNS(e2.globals.SVGNS, "pattern");
      Mi.setAttrs(h2, {
        id: t3.patternID,
        patternUnits: t3.patternUnits ? t3.patternUnits : "userSpaceOnUse",
        width: o2 + "px",
        height: l2 + "px"
      });
      var c2 = document.createElementNS(e2.globals.SVGNS, "image");
      h2.appendChild(c2), c2.setAttributeNS(window.SVG.xlink, "href", n2), Mi.setAttrs(c2, {
        x: 0,
        y: 0,
        preserveAspectRatio: "none",
        width: o2 + "px",
        height: l2 + "px"
      }), c2.style.opacity = t3.opacity, e2.globals.dom.elDefs.node.appendChild(h2);
    }
  }, {
    key: "getSeriesIndex",
    value: function(t3) {
      var e2 = this.w, i2 = e2.config.chart.type;
      return ("bar" === i2 || "rangeBar" === i2) && e2.config.plotOptions.bar.distributed || "heatmap" === i2 || "treemap" === i2 ? this.seriesIndex = t3.seriesNumber : this.seriesIndex = t3.seriesNumber % e2.globals.series.length, this.seriesIndex;
    }
  }, {
    key: "computeColorStops",
    value: function(t3, e2) {
      var i2, a2 = this.w, s2 = null, n2 = null, o2 = r(t3);
      try {
        for (o2.s(); !(i2 = o2.n()).done; ) {
          var l2 = i2.value;
          l2 >= e2.threshold ? (null === s2 || l2 > s2) && (s2 = l2) : (null === n2 || l2 < n2) && (n2 = l2);
        }
      } catch (t4) {
        o2.e(t4);
      } finally {
        o2.f();
      }
      null === s2 && (s2 = e2.threshold), null === n2 && (n2 = e2.threshold);
      var h2 = s2 - e2.threshold + (e2.threshold - n2);
      0 === h2 && (h2 = 1);
      var c2 = 100 - (e2.threshold - n2) / h2 * 100;
      return [{
        offset: c2 = Math.max(0, Math.min(c2, 100)),
        color: e2.colorAboveThreshold,
        opacity: a2.config.fill.opacity
      }, {
        offset: 0,
        color: e2.colorBelowThreshold,
        opacity: a2.config.fill.opacity
      }];
    }
  }, {
    key: "fillPath",
    value: function(t3) {
      var e2, i2, a2, s2 = this.w;
      this.opts = t3;
      var r2, n2, o2, l2 = this.w.config;
      this.seriesIndex = this.getSeriesIndex(t3);
      var h2 = l2.plotOptions.line.colors.colorAboveThreshold && l2.plotOptions.line.colors.colorBelowThreshold, c2 = this.getFillColors()[this.seriesIndex];
      void 0 !== s2.globals.seriesColors[this.seriesIndex] && (c2 = s2.globals.seriesColors[this.seriesIndex]), "function" == typeof c2 && (c2 = c2({
        seriesIndex: this.seriesIndex,
        dataPointIndex: t3.dataPointIndex,
        value: t3.value,
        w: s2
      }));
      var d2, u2, g2, p2 = t3.fillType ? t3.fillType : this.getFillType(this.seriesIndex), x2 = Array.isArray(l2.fill.opacity) ? l2.fill.opacity[this.seriesIndex] : l2.fill.opacity, b2 = "gradient" === p2 || h2;
      (t3.color && (c2 = t3.color), null !== (e2 = s2.config.series[this.seriesIndex]) && void 0 !== e2 && null !== (i2 = e2.data) && void 0 !== i2 && null !== (a2 = i2[t3.dataPointIndex]) && void 0 !== a2 && a2.fillColor) && (c2 = null === (d2 = s2.config.series[this.seriesIndex]) || void 0 === d2 || null === (u2 = d2.data) || void 0 === u2 || null === (g2 = u2[t3.dataPointIndex]) || void 0 === g2 ? void 0 : g2.fillColor);
      c2 || (c2 = "#fff", console.warn("undefined color - ApexCharts"));
      var m2 = c2;
      if (-1 === c2.indexOf("rgb") ? -1 === c2.indexOf("#") ? m2 = c2 : c2.length < 9 && (m2 = v.hexToRgba(c2, x2)) : c2.indexOf("rgba") > -1 ? x2 = v.getOpacityFromRGBA(c2) : m2 = v.hexToRgba(v.rgb2hex(c2), x2), t3.opacity && (x2 = t3.opacity), "pattern" === p2 && (n2 = this.handlePatternFill({
        fillConfig: t3.fillConfig,
        patternFill: n2,
        fillColor: c2,
        fillOpacity: x2,
        defaultColor: m2
      })), b2) {
        var y2 = f(l2.fill.gradient.colorStops) || [], w2 = l2.fill.gradient.type;
        h2 && (y2[this.seriesIndex] = this.computeColorStops(s2.globals.series[this.seriesIndex], l2.plotOptions.line.colors), w2 = "vertical"), o2 = this.handleGradientFill({
          type: w2,
          fillConfig: t3.fillConfig,
          fillColor: c2,
          fillOpacity: x2,
          colorStops: y2,
          i: this.seriesIndex
        });
      }
      if ("image" === p2) {
        var k2 = l2.fill.image.src, A2 = t3.patternID ? t3.patternID : "", C2 = "pattern".concat(s2.globals.cuid).concat(t3.seriesNumber + 1).concat(A2);
        -1 === this.patternIDs.indexOf(C2) && (this.clippedImgArea({
          opacity: x2,
          image: Array.isArray(k2) ? t3.seriesNumber < k2.length ? k2[t3.seriesNumber] : k2[0] : k2,
          width: t3.width ? t3.width : void 0,
          height: t3.height ? t3.height : void 0,
          patternUnits: t3.patternUnits,
          patternID: C2
        }), this.patternIDs.push(C2)), r2 = "url(#".concat(C2, ")");
      } else r2 = b2 ? o2 : "pattern" === p2 ? n2 : m2;
      return t3.solid && (r2 = m2), r2;
    }
  }, {
    key: "getFillType",
    value: function(t3) {
      var e2 = this.w;
      return Array.isArray(e2.config.fill.type) ? e2.config.fill.type[t3] : e2.config.fill.type;
    }
  }, {
    key: "getFillColors",
    value: function() {
      var t3 = this.w, e2 = t3.config, i2 = this.opts, a2 = [];
      return t3.globals.comboCharts ? "line" === t3.config.series[this.seriesIndex].type ? Array.isArray(t3.globals.stroke.colors) ? a2 = t3.globals.stroke.colors : a2.push(t3.globals.stroke.colors) : Array.isArray(t3.globals.fill.colors) ? a2 = t3.globals.fill.colors : a2.push(t3.globals.fill.colors) : "line" === e2.chart.type ? Array.isArray(t3.globals.stroke.colors) ? a2 = t3.globals.stroke.colors : a2.push(t3.globals.stroke.colors) : Array.isArray(t3.globals.fill.colors) ? a2 = t3.globals.fill.colors : a2.push(t3.globals.fill.colors), void 0 !== i2.fillColors && (a2 = [], Array.isArray(i2.fillColors) ? a2 = i2.fillColors.slice() : a2.push(i2.fillColors)), a2;
    }
  }, {
    key: "handlePatternFill",
    value: function(t3) {
      var e2 = t3.fillConfig, i2 = t3.patternFill, a2 = t3.fillColor, s2 = t3.fillOpacity, r2 = t3.defaultColor, n2 = this.w.config.fill;
      e2 && (n2 = e2);
      var o2 = this.opts, l2 = new Mi(this.ctx), h2 = Array.isArray(n2.pattern.strokeWidth) ? n2.pattern.strokeWidth[this.seriesIndex] : n2.pattern.strokeWidth, c2 = a2;
      Array.isArray(n2.pattern.style) ? i2 = void 0 !== n2.pattern.style[o2.seriesNumber] ? l2.drawPattern(n2.pattern.style[o2.seriesNumber], n2.pattern.width, n2.pattern.height, c2, h2, s2) : r2 : i2 = l2.drawPattern(n2.pattern.style, n2.pattern.width, n2.pattern.height, c2, h2, s2);
      return i2;
    }
  }, {
    key: "handleGradientFill",
    value: function(t3) {
      var e2 = t3.type, i2 = t3.fillColor, a2 = t3.fillOpacity, s2 = t3.fillConfig, r2 = t3.colorStops, n2 = t3.i, o2 = this.w.config.fill;
      s2 && (o2 = u(u({}, o2), s2));
      var l2 = this.opts, h2 = new Mi(this.ctx), c2 = new v();
      e2 = e2 || o2.gradient.type;
      var d2, g2 = i2, p2 = void 0 === o2.gradient.opacityFrom ? a2 : Array.isArray(o2.gradient.opacityFrom) ? o2.gradient.opacityFrom[n2] : o2.gradient.opacityFrom;
      g2.indexOf("rgba") > -1 && (p2 = v.getOpacityFromRGBA(g2));
      var f2 = void 0 === o2.gradient.opacityTo ? a2 : Array.isArray(o2.gradient.opacityTo) ? o2.gradient.opacityTo[n2] : o2.gradient.opacityTo;
      if (void 0 === o2.gradient.gradientToColors || 0 === o2.gradient.gradientToColors.length) d2 = "dark" === o2.gradient.shade ? c2.shadeColor(-1 * parseFloat(o2.gradient.shadeIntensity), i2.indexOf("rgb") > -1 ? v.rgb2hex(i2) : i2) : c2.shadeColor(parseFloat(o2.gradient.shadeIntensity), i2.indexOf("rgb") > -1 ? v.rgb2hex(i2) : i2);
      else if (o2.gradient.gradientToColors[l2.seriesNumber]) {
        var x2 = o2.gradient.gradientToColors[l2.seriesNumber];
        d2 = x2, x2.indexOf("rgba") > -1 && (f2 = v.getOpacityFromRGBA(x2));
      } else d2 = i2;
      if (o2.gradient.gradientFrom && (g2 = o2.gradient.gradientFrom), o2.gradient.gradientTo && (d2 = o2.gradient.gradientTo), o2.gradient.inverseColors) {
        var b2 = g2;
        g2 = d2, d2 = b2;
      }
      return g2.indexOf("rgb") > -1 && (g2 = v.rgb2hex(g2)), d2.indexOf("rgb") > -1 && (d2 = v.rgb2hex(d2)), h2.drawGradient(e2, g2, d2, p2, f2, l2.size, o2.gradient.stops, r2, n2);
    }
  }]), t2;
}();
var Vi = function() {
  function t2(e2, a2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "setGlobalMarkerSize",
    value: function() {
      var t3 = this.w;
      if (t3.globals.markers.size = Array.isArray(t3.config.markers.size) ? t3.config.markers.size : [t3.config.markers.size], t3.globals.markers.size.length > 0) {
        if (t3.globals.markers.size.length < t3.globals.series.length + 1) for (var e2 = 0; e2 <= t3.globals.series.length; e2++) void 0 === t3.globals.markers.size[e2] && t3.globals.markers.size.push(t3.globals.markers.size[0]);
      } else t3.globals.markers.size = t3.config.series.map(function(e3) {
        return t3.config.markers.size;
      });
    }
  }, {
    key: "plotChartMarkers",
    value: function(t3) {
      var e2 = t3.pointsPos, i2 = t3.seriesIndex, a2 = t3.j, s2 = t3.pSize, r2 = t3.alwaysDrawMarker, n2 = void 0 !== r2 && r2, o2 = t3.isVirtualPoint, l2 = void 0 !== o2 && o2, h2 = this.w, c2 = i2, d2 = e2, u2 = null, g2 = new Mi(this.ctx), p2 = h2.config.markers.discrete && h2.config.markers.discrete.length;
      if (Array.isArray(d2.x)) for (var f2 = 0; f2 < d2.x.length; f2++) {
        var x2 = void 0, b2 = a2, m2 = !v.isNumber(d2.y[f2]);
        0 === h2.globals.markers.largestSize && h2.globals.hasNullValues && null !== h2.globals.series[c2][a2 + 1] && !l2 && (m2 = true), 1 === a2 && 0 === f2 && (b2 = 0), 1 === a2 && 1 === f2 && (b2 = 1);
        var y2 = "apexcharts-marker";
        if ("line" !== h2.config.chart.type && "area" !== h2.config.chart.type || h2.globals.comboCharts || h2.config.tooltip.intersect || (y2 += " no-pointer-events"), (Array.isArray(h2.config.markers.size) ? h2.globals.markers.size[i2] > 0 : h2.config.markers.size > 0) || n2 || p2) {
          m2 || (y2 += " w".concat(v.randomId()));
          var w2 = this.getMarkerConfig({
            cssClass: y2,
            seriesIndex: i2,
            dataPointIndex: b2
          });
          if (h2.config.series[c2].data[b2] && (h2.config.series[c2].data[b2].fillColor && (w2.pointFillColor = h2.config.series[c2].data[b2].fillColor), h2.config.series[c2].data[b2].strokeColor && (w2.pointStrokeColor = h2.config.series[c2].data[b2].strokeColor)), void 0 !== s2 && (w2.pSize = s2), (d2.x[f2] < -h2.globals.markers.largestSize || d2.x[f2] > h2.globals.gridWidth + h2.globals.markers.largestSize || d2.y[f2] < -h2.globals.markers.largestSize || d2.y[f2] > h2.globals.gridHeight + h2.globals.markers.largestSize) && (w2.pSize = 0), !m2) (h2.globals.markers.size[i2] > 0 || n2 || p2) && !u2 && (u2 = g2.group({
            class: n2 || p2 ? "" : "apexcharts-series-markers"
          })).attr("clip-path", "url(#gridRectMarkerMask".concat(h2.globals.cuid, ")")), (x2 = g2.drawMarker(d2.x[f2], d2.y[f2], w2)).attr("rel", b2), x2.attr("j", b2), x2.attr("index", i2), x2.node.setAttribute("default-marker-size", w2.pSize), new Li(this.ctx).setSelectionFilter(x2, i2, b2), this.addEvents(x2), u2 && u2.add(x2);
        } else void 0 === h2.globals.pointsArray[i2] && (h2.globals.pointsArray[i2] = []), h2.globals.pointsArray[i2].push([d2.x[f2], d2.y[f2]]);
      }
      return u2;
    }
  }, {
    key: "getMarkerConfig",
    value: function(t3) {
      var e2 = t3.cssClass, i2 = t3.seriesIndex, a2 = t3.dataPointIndex, s2 = void 0 === a2 ? null : a2, r2 = t3.radius, n2 = void 0 === r2 ? null : r2, o2 = t3.size, l2 = void 0 === o2 ? null : o2, h2 = t3.strokeWidth, c2 = void 0 === h2 ? null : h2, d2 = this.w, u2 = this.getMarkerStyle(i2), g2 = null === l2 ? d2.globals.markers.size[i2] : l2, p2 = d2.config.markers;
      return null !== s2 && p2.discrete.length && p2.discrete.map(function(t4) {
        t4.seriesIndex === i2 && t4.dataPointIndex === s2 && (u2.pointStrokeColor = t4.strokeColor, u2.pointFillColor = t4.fillColor, g2 = t4.size, u2.pointShape = t4.shape);
      }), {
        pSize: null === n2 ? g2 : n2,
        pRadius: null !== n2 ? n2 : p2.radius,
        pointStrokeWidth: null !== c2 ? c2 : Array.isArray(p2.strokeWidth) ? p2.strokeWidth[i2] : p2.strokeWidth,
        pointStrokeColor: u2.pointStrokeColor,
        pointFillColor: u2.pointFillColor,
        shape: u2.pointShape || (Array.isArray(p2.shape) ? p2.shape[i2] : p2.shape),
        class: e2,
        pointStrokeOpacity: Array.isArray(p2.strokeOpacity) ? p2.strokeOpacity[i2] : p2.strokeOpacity,
        pointStrokeDashArray: Array.isArray(p2.strokeDashArray) ? p2.strokeDashArray[i2] : p2.strokeDashArray,
        pointFillOpacity: Array.isArray(p2.fillOpacity) ? p2.fillOpacity[i2] : p2.fillOpacity,
        seriesIndex: i2
      };
    }
  }, {
    key: "addEvents",
    value: function(t3) {
      var e2 = this.w, i2 = new Mi(this.ctx);
      t3.node.addEventListener("mouseenter", i2.pathMouseEnter.bind(this.ctx, t3)), t3.node.addEventListener("mouseleave", i2.pathMouseLeave.bind(this.ctx, t3)), t3.node.addEventListener("mousedown", i2.pathMouseDown.bind(this.ctx, t3)), t3.node.addEventListener("click", e2.config.markers.onClick), t3.node.addEventListener("dblclick", e2.config.markers.onDblClick), t3.node.addEventListener("touchstart", i2.pathMouseDown.bind(this.ctx, t3), {
        passive: true
      });
    }
  }, {
    key: "getMarkerStyle",
    value: function(t3) {
      var e2 = this.w, i2 = e2.globals.markers.colors, a2 = e2.config.markers.strokeColor || e2.config.markers.strokeColors;
      return {
        pointStrokeColor: Array.isArray(a2) ? a2[t3] : a2,
        pointFillColor: Array.isArray(i2) ? i2[t3] : i2
      };
    }
  }]), t2;
}();
var Ui = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.initialAnim = this.w.config.chart.animations.enabled;
  }
  return s(t2, [{
    key: "draw",
    value: function(t3, e2, i2) {
      var a2 = this.w, s2 = new Mi(this.ctx), r2 = i2.realIndex, n2 = i2.pointsPos, o2 = i2.zRatio, l2 = i2.elParent, h2 = s2.group({
        class: "apexcharts-series-markers apexcharts-series-".concat(a2.config.chart.type)
      });
      if (h2.attr("clip-path", "url(#gridRectMarkerMask".concat(a2.globals.cuid, ")")), Array.isArray(n2.x)) for (var c2 = 0; c2 < n2.x.length; c2++) {
        var d2 = e2 + 1, u2 = true;
        0 === e2 && 0 === c2 && (d2 = 0), 0 === e2 && 1 === c2 && (d2 = 1);
        var g2 = a2.globals.markers.size[r2];
        if (o2 !== 1 / 0) {
          var p2 = a2.config.plotOptions.bubble;
          g2 = a2.globals.seriesZ[r2][d2], p2.zScaling && (g2 /= o2), p2.minBubbleRadius && g2 < p2.minBubbleRadius && (g2 = p2.minBubbleRadius), p2.maxBubbleRadius && g2 > p2.maxBubbleRadius && (g2 = p2.maxBubbleRadius);
        }
        var f2 = n2.x[c2], x2 = n2.y[c2];
        if (g2 = g2 || 0, null !== x2 && void 0 !== a2.globals.series[r2][d2] || (u2 = false), u2) {
          var b2 = this.drawPoint(f2, x2, g2, r2, d2, e2);
          h2.add(b2);
        }
        l2.add(h2);
      }
    }
  }, {
    key: "drawPoint",
    value: function(t3, e2, i2, a2, s2, r2) {
      var n2 = this.w, o2 = a2, l2 = new y(this.ctx), h2 = new Li(this.ctx), c2 = new ji(this.ctx), d2 = new Vi(this.ctx), u2 = new Mi(this.ctx), g2 = d2.getMarkerConfig({
        cssClass: "apexcharts-marker",
        seriesIndex: o2,
        dataPointIndex: s2,
        radius: "bubble" === n2.config.chart.type || n2.globals.comboCharts && n2.config.series[a2] && "bubble" === n2.config.series[a2].type ? i2 : null
      }), p2 = c2.fillPath({
        seriesNumber: a2,
        dataPointIndex: s2,
        color: g2.pointFillColor,
        patternUnits: "objectBoundingBox",
        value: n2.globals.series[a2][r2]
      }), f2 = u2.drawMarker(t3, e2, g2);
      if (n2.config.series[o2].data[s2] && n2.config.series[o2].data[s2].fillColor && (p2 = n2.config.series[o2].data[s2].fillColor), f2.attr({
        fill: p2
      }), n2.config.chart.dropShadow.enabled) {
        var x2 = n2.config.chart.dropShadow;
        h2.dropShadow(f2, x2, a2);
      }
      if (!this.initialAnim || n2.globals.dataChanged || n2.globals.resized) n2.globals.animationEnded = true;
      else {
        var b2 = n2.config.chart.animations.speed;
        l2.animateMarker(f2, b2, n2.globals.easing, function() {
          window.setTimeout(function() {
            l2.animationCompleted(f2);
          }, 100);
        });
      }
      return f2.attr({
        rel: s2,
        j: s2,
        index: a2,
        "default-marker-size": g2.pSize
      }), h2.setSelectionFilter(f2, a2, s2), d2.addEvents(f2), f2.node.classList.add("apexcharts-marker"), f2;
    }
  }, {
    key: "centerTextInBubble",
    value: function(t3) {
      var e2 = this.w;
      return {
        y: t3 += parseInt(e2.config.dataLabels.style.fontSize, 10) / 4
      };
    }
  }]), t2;
}();
var qi = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "dataLabelsCorrection",
    value: function(t3, e2, i2, a2, s2, r2, n2) {
      var o2 = this.w, l2 = false, h2 = new Mi(this.ctx).getTextRects(i2, n2), c2 = h2.width, d2 = h2.height;
      e2 < 0 && (e2 = 0), e2 > o2.globals.gridHeight + d2 && (e2 = o2.globals.gridHeight + d2 / 2), void 0 === o2.globals.dataLabelsRects[a2] && (o2.globals.dataLabelsRects[a2] = []), o2.globals.dataLabelsRects[a2].push({
        x: t3,
        y: e2,
        width: c2,
        height: d2
      });
      var u2 = o2.globals.dataLabelsRects[a2].length - 2, g2 = void 0 !== o2.globals.lastDrawnDataLabelsIndexes[a2] ? o2.globals.lastDrawnDataLabelsIndexes[a2][o2.globals.lastDrawnDataLabelsIndexes[a2].length - 1] : 0;
      if (void 0 !== o2.globals.dataLabelsRects[a2][u2]) {
        var p2 = o2.globals.dataLabelsRects[a2][g2];
        (t3 > p2.x + p2.width || e2 > p2.y + p2.height || e2 + d2 < p2.y || t3 + c2 < p2.x) && (l2 = true);
      }
      return (0 === s2 || r2) && (l2 = true), {
        x: t3,
        y: e2,
        textRects: h2,
        drawnextLabel: l2
      };
    }
  }, {
    key: "drawDataLabel",
    value: function(t3) {
      var e2 = this, i2 = t3.type, a2 = t3.pos, s2 = t3.i, r2 = t3.j, n2 = t3.isRangeStart, o2 = t3.strokeWidth, l2 = void 0 === o2 ? 2 : o2, h2 = this.w, c2 = new Mi(this.ctx), d2 = h2.config.dataLabels, u2 = 0, g2 = 0, p2 = r2, f2 = null;
      if (-1 !== h2.globals.collapsedSeriesIndices.indexOf(s2) || !d2.enabled || !Array.isArray(a2.x)) return f2;
      f2 = c2.group({
        class: "apexcharts-data-labels"
      });
      for (var x2 = 0; x2 < a2.x.length; x2++) if (u2 = a2.x[x2] + d2.offsetX, g2 = a2.y[x2] + d2.offsetY + l2, !isNaN(u2)) {
        1 === r2 && 0 === x2 && (p2 = 0), 1 === r2 && 1 === x2 && (p2 = 1);
        var b2 = h2.globals.series[s2][p2];
        "rangeArea" === i2 && (b2 = n2 ? h2.globals.seriesRangeStart[s2][p2] : h2.globals.seriesRangeEnd[s2][p2]);
        var m2 = "", v2 = function(t4) {
          return h2.config.dataLabels.formatter(t4, {
            ctx: e2.ctx,
            seriesIndex: s2,
            dataPointIndex: p2,
            w: h2
          });
        };
        if ("bubble" === h2.config.chart.type) m2 = v2(b2 = h2.globals.seriesZ[s2][p2]), g2 = a2.y[x2], g2 = new Ui(this.ctx).centerTextInBubble(g2, s2, p2).y;
        else void 0 !== b2 && (m2 = v2(b2));
        var y2 = h2.config.dataLabels.textAnchor;
        h2.globals.isSlopeChart && (y2 = 0 === p2 ? "end" : p2 === h2.config.series[s2].data.length - 1 ? "start" : "middle"), this.plotDataLabelsText({
          x: u2,
          y: g2,
          text: m2,
          i: s2,
          j: p2,
          parent: f2,
          offsetCorrection: true,
          dataLabelsConfig: h2.config.dataLabels,
          textAnchor: y2
        });
      }
      return f2;
    }
  }, {
    key: "plotDataLabelsText",
    value: function(t3) {
      var e2 = this.w, i2 = new Mi(this.ctx), a2 = t3.x, s2 = t3.y, r2 = t3.i, n2 = t3.j, o2 = t3.text, l2 = t3.textAnchor, h2 = t3.fontSize, c2 = t3.parent, d2 = t3.dataLabelsConfig, u2 = t3.color, g2 = t3.alwaysDrawDataLabel, p2 = t3.offsetCorrection, f2 = t3.className, x2 = null;
      if (Array.isArray(e2.config.dataLabels.enabledOnSeries) && e2.config.dataLabels.enabledOnSeries.indexOf(r2) < 0) return x2;
      var b2 = {
        x: a2,
        y: s2,
        drawnextLabel: true,
        textRects: null
      };
      p2 && (b2 = this.dataLabelsCorrection(a2, s2, o2, r2, n2, g2, parseInt(d2.style.fontSize, 10))), e2.globals.zoomed || (a2 = b2.x, s2 = b2.y), b2.textRects && (a2 < -20 - b2.textRects.width || a2 > e2.globals.gridWidth + b2.textRects.width + 30) && (o2 = "");
      var m2 = e2.globals.dataLabels.style.colors[r2];
      (("bar" === e2.config.chart.type || "rangeBar" === e2.config.chart.type) && e2.config.plotOptions.bar.distributed || e2.config.dataLabels.distributed) && (m2 = e2.globals.dataLabels.style.colors[n2]), "function" == typeof m2 && (m2 = m2({
        series: e2.globals.series,
        seriesIndex: r2,
        dataPointIndex: n2,
        w: e2
      })), u2 && (m2 = u2);
      var v2 = d2.offsetX, y2 = d2.offsetY;
      if ("bar" !== e2.config.chart.type && "rangeBar" !== e2.config.chart.type || (v2 = 0, y2 = 0), e2.globals.isSlopeChart && (0 !== n2 && (v2 = -2 * d2.offsetX + 5), 0 !== n2 && n2 !== e2.config.series[r2].data.length - 1 && (v2 = 0)), b2.drawnextLabel) {
        if ((x2 = i2.drawText({
          width: 100,
          height: parseInt(d2.style.fontSize, 10),
          x: a2 + v2,
          y: s2 + y2,
          foreColor: m2,
          textAnchor: l2 || d2.textAnchor,
          text: o2,
          fontSize: h2 || d2.style.fontSize,
          fontFamily: d2.style.fontFamily,
          fontWeight: d2.style.fontWeight || "normal"
        })).attr({
          class: f2 || "apexcharts-datalabel",
          cx: a2,
          cy: s2
        }), d2.dropShadow.enabled) {
          var w2 = d2.dropShadow;
          new Li(this.ctx).dropShadow(x2, w2);
        }
        c2.add(x2), void 0 === e2.globals.lastDrawnDataLabelsIndexes[r2] && (e2.globals.lastDrawnDataLabelsIndexes[r2] = []), e2.globals.lastDrawnDataLabelsIndexes[r2].push(n2);
      }
      return x2;
    }
  }, {
    key: "addBackgroundToDataLabel",
    value: function(t3, e2) {
      var i2 = this.w, a2 = i2.config.dataLabels.background, s2 = a2.padding, r2 = a2.padding / 2, n2 = e2.width, o2 = e2.height, l2 = new Mi(this.ctx).drawRect(e2.x - s2, e2.y - r2 / 2, n2 + 2 * s2, o2 + r2, a2.borderRadius, "transparent" !== i2.config.chart.background && i2.config.chart.background ? i2.config.chart.background : "#fff", a2.opacity, a2.borderWidth, a2.borderColor);
      a2.dropShadow.enabled && new Li(this.ctx).dropShadow(l2, a2.dropShadow);
      return l2;
    }
  }, {
    key: "dataLabelsBackground",
    value: function() {
      var t3 = this.w;
      if ("bubble" !== t3.config.chart.type) for (var e2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i2 = 0; i2 < e2.length; i2++) {
        var a2 = e2[i2], s2 = a2.getBBox(), r2 = null;
        if (s2.width && s2.height && (r2 = this.addBackgroundToDataLabel(a2, s2)), r2) {
          a2.parentNode.insertBefore(r2.node, a2);
          var n2 = a2.getAttribute("fill");
          t3.config.chart.animations.enabled && !t3.globals.resized && !t3.globals.dataChanged ? r2.animate().attr({
            fill: n2
          }) : r2.attr({
            fill: n2
          }), a2.setAttribute("fill", t3.config.dataLabels.background.foreColor);
        }
      }
    }
  }, {
    key: "bringForward",
    value: function() {
      for (var t3 = this.w, e2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i2 = t3.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), a2 = 0; a2 < e2.length; a2++) i2 && i2.insertBefore(e2[a2], i2.nextSibling);
    }
  }]), t2;
}();
var Zi = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.legendInactiveClass = "legend-mouseover-inactive";
  }
  return s(t2, [{
    key: "getAllSeriesEls",
    value: function() {
      return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series");
    }
  }, {
    key: "getSeriesByName",
    value: function(t3) {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(v.escapeString(t3), "']"));
    }
  }, {
    key: "isSeriesHidden",
    value: function(t3) {
      var e2 = this.getSeriesByName(t3), i2 = parseInt(e2.getAttribute("data:realIndex"), 10);
      return {
        isHidden: e2.classList.contains("apexcharts-series-collapsed"),
        realIndex: i2
      };
    }
  }, {
    key: "addCollapsedClassToSeries",
    value: function(t3, e2) {
      var i2 = this.w;
      function a2(i3) {
        for (var a3 = 0; a3 < i3.length; a3++) i3[a3].index === e2 && t3.node.classList.add("apexcharts-series-collapsed");
      }
      a2(i2.globals.collapsedSeries), a2(i2.globals.ancillaryCollapsedSeries);
    }
  }, {
    key: "toggleSeries",
    value: function(t3) {
      var e2 = this.isSeriesHidden(t3);
      return this.ctx.legend.legendHelpers.toggleDataSeries(e2.realIndex, e2.isHidden), e2.isHidden;
    }
  }, {
    key: "showSeries",
    value: function(t3) {
      var e2 = this.isSeriesHidden(t3);
      e2.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(e2.realIndex, true);
    }
  }, {
    key: "hideSeries",
    value: function(t3) {
      var e2 = this.isSeriesHidden(t3);
      e2.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(e2.realIndex, false);
    }
  }, {
    key: "resetSeries",
    value: function() {
      var t3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a2 = this.w, s2 = v.clone(a2.globals.initialSeries);
      a2.globals.previousPaths = [], i2 ? (a2.globals.collapsedSeries = [], a2.globals.ancillaryCollapsedSeries = [], a2.globals.collapsedSeriesIndices = [], a2.globals.ancillaryCollapsedSeriesIndices = []) : s2 = this.emptyCollapsedSeries(s2), a2.config.series = s2, t3 && (e2 && (a2.globals.zoomed = false, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(s2, a2.config.chart.animations.dynamicAnimation.enabled));
    }
  }, {
    key: "emptyCollapsedSeries",
    value: function(t3) {
      for (var e2 = this.w, i2 = 0; i2 < t3.length; i2++) e2.globals.collapsedSeriesIndices.indexOf(i2) > -1 && (t3[i2].data = []);
      return t3;
    }
  }, {
    key: "highlightSeries",
    value: function(t3) {
      var e2 = this.w, i2 = this.getSeriesByName(t3), a2 = parseInt(null == i2 ? void 0 : i2.getAttribute("data:realIndex"), 10), s2 = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis"), r2 = null, n2 = null, o2 = null;
      if (e2.globals.axisCharts || "radialBar" === e2.config.chart.type) {
        if (e2.globals.axisCharts) {
          r2 = e2.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(a2, "']")), n2 = e2.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(a2, "']"));
          var l2 = e2.globals.seriesYAxisReverseMap[a2];
          o2 = e2.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(l2, "']"));
        } else r2 = e2.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a2 + 1, "']"));
      } else r2 = e2.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a2 + 1, "'] path"));
      for (var h2 = 0; h2 < s2.length; h2++) s2[h2].classList.add(this.legendInactiveClass);
      if (r2) e2.globals.axisCharts || r2.parentNode.classList.remove(this.legendInactiveClass), r2.classList.remove(this.legendInactiveClass), null !== n2 && n2.classList.remove(this.legendInactiveClass), null !== o2 && o2.classList.remove(this.legendInactiveClass);
      else for (var c2 = 0; c2 < s2.length; c2++) s2[c2].classList.remove(this.legendInactiveClass);
    }
  }, {
    key: "toggleSeriesOnHover",
    value: function(t3, e2) {
      var i2 = this.w;
      e2 || (e2 = t3.target);
      var a2 = i2.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels, .apexcharts-yaxis");
      if ("mousemove" === t3.type) {
        var s2 = parseInt(e2.getAttribute("rel"), 10) - 1;
        this.highlightSeries(i2.globals.seriesNames[s2]);
      } else if ("mouseout" === t3.type) for (var r2 = 0; r2 < a2.length; r2++) a2[r2].classList.remove(this.legendInactiveClass);
    }
  }, {
    key: "highlightRangeInSeries",
    value: function(t3, e2) {
      var i2 = this, a2 = this.w, s2 = a2.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), r2 = function(t4) {
        for (var e3 = 0; e3 < s2.length; e3++) s2[e3].classList[t4](i2.legendInactiveClass);
      };
      if ("mousemove" === t3.type) {
        var n2 = parseInt(e2.getAttribute("rel"), 10) - 1;
        r2("add");
        var o2 = a2.config.plotOptions.heatmap.colorScale.ranges;
        !function(t4, e3) {
          for (var a3 = 0; a3 < s2.length; a3++) {
            var r3 = Number(s2[a3].getAttribute("val"));
            r3 >= t4.from && (r3 < t4.to || t4.to === e3 && r3 === e3) && s2[a3].classList.remove(i2.legendInactiveClass);
          }
        }(o2[n2], o2.reduce(function(t4, e3) {
          return Math.max(t4, e3.to);
        }, 0));
      } else "mouseout" === t3.type && r2("remove");
    }
  }, {
    key: "getActiveConfigSeriesIndex",
    value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "asc", e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [], i2 = this.w, a2 = 0;
      if (i2.config.series.length > 1) {
        for (var s2 = i2.config.series.map(function(t4, a3) {
          return t4.data && t4.data.length > 0 && -1 === i2.globals.collapsedSeriesIndices.indexOf(a3) && (!i2.globals.comboCharts || 0 === e2.length || e2.length && e2.indexOf(i2.config.series[a3].type) > -1) ? a3 : -1;
        }), r2 = "asc" === t3 ? 0 : s2.length - 1; "asc" === t3 ? r2 < s2.length : r2 >= 0; "asc" === t3 ? r2++ : r2--) if (-1 !== s2[r2]) {
          a2 = s2[r2];
          break;
        }
      }
      return a2;
    }
  }, {
    key: "getBarSeriesIndices",
    value: function() {
      return this.w.globals.comboCharts ? this.w.config.series.map(function(t3, e2) {
        return "bar" === t3.type || "column" === t3.type ? e2 : -1;
      }).filter(function(t3) {
        return -1 !== t3;
      }) : this.w.config.series.map(function(t3, e2) {
        return e2;
      });
    }
  }, {
    key: "getPreviousPaths",
    value: function() {
      var t3 = this.w;
      function e2(e3, i3, a3) {
        for (var s3 = e3[i3].childNodes, r2 = {
          type: a3,
          paths: [],
          realIndex: e3[i3].getAttribute("data:realIndex")
        }, n2 = 0; n2 < s3.length; n2++) if (s3[n2].hasAttribute("pathTo")) {
          var o2 = s3[n2].getAttribute("pathTo");
          r2.paths.push({
            d: o2
          });
        }
        t3.globals.previousPaths.push(r2);
      }
      t3.globals.previousPaths = [];
      ["line", "area", "bar", "rangebar", "rangeArea", "candlestick", "radar"].forEach(function(i3) {
        for (var a3, s3 = (a3 = i3, t3.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(a3, "-series .apexcharts-series"))), r2 = 0; r2 < s3.length; r2++) e2(s3, r2, i3);
      });
      var i2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t3.config.chart.type, " .apexcharts-series"));
      if (i2.length > 0) for (var a2 = function(e3) {
        for (var i3 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t3.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(e3, "'] rect")), a3 = [], s3 = function(t4) {
          var e4 = function(e5) {
            return i3[t4].getAttribute(e5);
          }, s4 = {
            x: parseFloat(e4("x")),
            y: parseFloat(e4("y")),
            width: parseFloat(e4("width")),
            height: parseFloat(e4("height"))
          };
          a3.push({
            rect: s4,
            color: i3[t4].getAttribute("color")
          });
        }, r2 = 0; r2 < i3.length; r2++) s3(r2);
        t3.globals.previousPaths.push(a3);
      }, s2 = 0; s2 < i2.length; s2++) a2(s2);
      t3.globals.axisCharts || (t3.globals.previousPaths = t3.globals.series);
    }
  }, {
    key: "clearPreviousPaths",
    value: function() {
      var t3 = this.w;
      t3.globals.previousPaths = [], t3.globals.allSeriesCollapsed = false;
    }
  }, {
    key: "handleNoData",
    value: function() {
      var t3 = this.w, e2 = t3.config.noData, i2 = new Mi(this.ctx), a2 = t3.globals.svgWidth / 2, s2 = t3.globals.svgHeight / 2, r2 = "middle";
      if (t3.globals.noData = true, t3.globals.animationEnded = true, "left" === e2.align ? (a2 = 10, r2 = "start") : "right" === e2.align && (a2 = t3.globals.svgWidth - 10, r2 = "end"), "top" === e2.verticalAlign ? s2 = 50 : "bottom" === e2.verticalAlign && (s2 = t3.globals.svgHeight - 50), a2 += e2.offsetX, s2 = s2 + parseInt(e2.style.fontSize, 10) + 2 + e2.offsetY, void 0 !== e2.text && "" !== e2.text) {
        var n2 = i2.drawText({
          x: a2,
          y: s2,
          text: e2.text,
          textAnchor: r2,
          fontSize: e2.style.fontSize,
          fontFamily: e2.style.fontFamily,
          foreColor: e2.style.color,
          opacity: 1,
          class: "apexcharts-text-nodata"
        });
        t3.globals.dom.Paper.add(n2);
      }
    }
  }, {
    key: "setNullSeriesToZeroValues",
    value: function(t3) {
      for (var e2 = this.w, i2 = 0; i2 < t3.length; i2++) if (0 === t3[i2].length) for (var a2 = 0; a2 < t3[e2.globals.maxValsInArrayIndex].length; a2++) t3[i2].push(0);
      return t3;
    }
  }, {
    key: "hasAllSeriesEqualX",
    value: function() {
      for (var t3 = true, e2 = this.w, i2 = this.filteredSeriesX(), a2 = 0; a2 < i2.length - 1; a2++) if (i2[a2][0] !== i2[a2 + 1][0]) {
        t3 = false;
        break;
      }
      return e2.globals.allSeriesHasEqualX = t3, t3;
    }
  }, {
    key: "filteredSeriesX",
    value: function() {
      var t3 = this.w.globals.seriesX.map(function(t4) {
        return t4.length > 0 ? t4 : [];
      });
      return t3;
    }
  }]), t2;
}();
var $i = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new Pi(this.ctx);
  }
  return s(t2, [{
    key: "isMultiFormat",
    value: function() {
      return this.isFormatXY() || this.isFormat2DArray();
    }
  }, {
    key: "isFormatXY",
    value: function() {
      var t3 = this.w.config.series.slice(), e2 = new Zi(this.ctx);
      if (this.activeSeriesIndex = e2.getActiveConfigSeriesIndex(), void 0 !== t3[this.activeSeriesIndex].data && t3[this.activeSeriesIndex].data.length > 0 && null !== t3[this.activeSeriesIndex].data[0] && void 0 !== t3[this.activeSeriesIndex].data[0].x && null !== t3[this.activeSeriesIndex].data[0]) return true;
    }
  }, {
    key: "isFormat2DArray",
    value: function() {
      var t3 = this.w.config.series.slice(), e2 = new Zi(this.ctx);
      if (this.activeSeriesIndex = e2.getActiveConfigSeriesIndex(), void 0 !== t3[this.activeSeriesIndex].data && t3[this.activeSeriesIndex].data.length > 0 && void 0 !== t3[this.activeSeriesIndex].data[0] && null !== t3[this.activeSeriesIndex].data[0] && t3[this.activeSeriesIndex].data[0].constructor === Array) return true;
    }
  }, {
    key: "handleFormat2DArray",
    value: function(t3, e2) {
      for (var i2 = this.w.config, a2 = this.w.globals, s2 = "boxPlot" === i2.chart.type || "boxPlot" === i2.series[e2].type, r2 = 0; r2 < t3[e2].data.length; r2++) if (void 0 !== t3[e2].data[r2][1] && (Array.isArray(t3[e2].data[r2][1]) && 4 === t3[e2].data[r2][1].length && !s2 ? this.twoDSeries.push(v.parseNumber(t3[e2].data[r2][1][3])) : t3[e2].data[r2].length >= 5 ? this.twoDSeries.push(v.parseNumber(t3[e2].data[r2][4])) : this.twoDSeries.push(v.parseNumber(t3[e2].data[r2][1])), a2.dataFormatXNumeric = true), "datetime" === i2.xaxis.type) {
        var n2 = new Date(t3[e2].data[r2][0]);
        n2 = new Date(n2).getTime(), this.twoDSeriesX.push(n2);
      } else this.twoDSeriesX.push(t3[e2].data[r2][0]);
      for (var o2 = 0; o2 < t3[e2].data.length; o2++) void 0 !== t3[e2].data[o2][2] && (this.threeDSeries.push(t3[e2].data[o2][2]), a2.isDataXYZ = true);
    }
  }, {
    key: "handleFormatXY",
    value: function(t3, e2) {
      var i2 = this.w.config, a2 = this.w.globals, s2 = new zi(this.ctx), r2 = e2;
      a2.collapsedSeriesIndices.indexOf(e2) > -1 && (r2 = this.activeSeriesIndex);
      for (var n2 = 0; n2 < t3[e2].data.length; n2++) void 0 !== t3[e2].data[n2].y && (Array.isArray(t3[e2].data[n2].y) ? this.twoDSeries.push(v.parseNumber(t3[e2].data[n2].y[t3[e2].data[n2].y.length - 1])) : this.twoDSeries.push(v.parseNumber(t3[e2].data[n2].y))), void 0 !== t3[e2].data[n2].goals && Array.isArray(t3[e2].data[n2].goals) ? (void 0 === this.seriesGoals[e2] && (this.seriesGoals[e2] = []), this.seriesGoals[e2].push(t3[e2].data[n2].goals)) : (void 0 === this.seriesGoals[e2] && (this.seriesGoals[e2] = []), this.seriesGoals[e2].push(null));
      for (var o2 = 0; o2 < t3[r2].data.length; o2++) {
        var l2 = "string" == typeof t3[r2].data[o2].x, h2 = Array.isArray(t3[r2].data[o2].x), c2 = !h2 && !!s2.isValidDate(t3[r2].data[o2].x);
        if (l2 || c2) {
          if (l2 || i2.xaxis.convertedCatToNumeric) {
            var d2 = a2.isBarHorizontal && a2.isRangeData;
            "datetime" !== i2.xaxis.type || d2 ? (this.fallbackToCategory = true, this.twoDSeriesX.push(t3[r2].data[o2].x), isNaN(t3[r2].data[o2].x) || "category" === this.w.config.xaxis.type || "string" == typeof t3[r2].data[o2].x || (a2.isXNumeric = true)) : this.twoDSeriesX.push(s2.parseDate(t3[r2].data[o2].x));
          } else "datetime" === i2.xaxis.type ? this.twoDSeriesX.push(s2.parseDate(t3[r2].data[o2].x.toString())) : (a2.dataFormatXNumeric = true, a2.isXNumeric = true, this.twoDSeriesX.push(parseFloat(t3[r2].data[o2].x)));
        } else h2 ? (this.fallbackToCategory = true, this.twoDSeriesX.push(t3[r2].data[o2].x)) : (a2.isXNumeric = true, a2.dataFormatXNumeric = true, this.twoDSeriesX.push(t3[r2].data[o2].x));
      }
      if (t3[e2].data[0] && void 0 !== t3[e2].data[0].z) {
        for (var u2 = 0; u2 < t3[e2].data.length; u2++) this.threeDSeries.push(t3[e2].data[u2].z);
        a2.isDataXYZ = true;
      }
    }
  }, {
    key: "handleRangeData",
    value: function(t3, e2) {
      var i2 = this.w.globals, a2 = {};
      return this.isFormat2DArray() ? a2 = this.handleRangeDataFormat("array", t3, e2) : this.isFormatXY() && (a2 = this.handleRangeDataFormat("xy", t3, e2)), i2.seriesRangeStart.push(void 0 === a2.start ? [] : a2.start), i2.seriesRangeEnd.push(void 0 === a2.end ? [] : a2.end), i2.seriesRange.push(a2.rangeUniques), i2.seriesRange.forEach(function(t4, e3) {
        t4 && t4.forEach(function(t5, e4) {
          t5.y.forEach(function(e5, i3) {
            for (var a3 = 0; a3 < t5.y.length; a3++) if (i3 !== a3) {
              var s2 = e5.y1, r2 = e5.y2, n2 = t5.y[a3].y1;
              s2 <= t5.y[a3].y2 && n2 <= r2 && (t5.overlaps.indexOf(e5.rangeName) < 0 && t5.overlaps.push(e5.rangeName), t5.overlaps.indexOf(t5.y[a3].rangeName) < 0 && t5.overlaps.push(t5.y[a3].rangeName));
            }
          });
        });
      }), a2;
    }
  }, {
    key: "handleCandleStickBoxData",
    value: function(t3, e2) {
      var i2 = this.w.globals, a2 = {};
      return this.isFormat2DArray() ? a2 = this.handleCandleStickBoxDataFormat("array", t3, e2) : this.isFormatXY() && (a2 = this.handleCandleStickBoxDataFormat("xy", t3, e2)), i2.seriesCandleO[e2] = a2.o, i2.seriesCandleH[e2] = a2.h, i2.seriesCandleM[e2] = a2.m, i2.seriesCandleL[e2] = a2.l, i2.seriesCandleC[e2] = a2.c, a2;
    }
  }, {
    key: "handleRangeDataFormat",
    value: function(t3, e2, i2) {
      var a2 = [], s2 = [], r2 = e2[i2].data.filter(function(t4, e3, i3) {
        return e3 === i3.findIndex(function(e4) {
          return e4.x === t4.x;
        });
      }).map(function(t4, e3) {
        return {
          x: t4.x,
          overlaps: [],
          y: []
        };
      });
      if ("array" === t3) for (var n2 = 0; n2 < e2[i2].data.length; n2++) Array.isArray(e2[i2].data[n2]) ? (a2.push(e2[i2].data[n2][1][0]), s2.push(e2[i2].data[n2][1][1])) : (a2.push(e2[i2].data[n2]), s2.push(e2[i2].data[n2]));
      else if ("xy" === t3) for (var o2 = function(t4) {
        var n3 = Array.isArray(e2[i2].data[t4].y), o3 = v.randomId(), l3 = e2[i2].data[t4].x, h2 = {
          y1: n3 ? e2[i2].data[t4].y[0] : e2[i2].data[t4].y,
          y2: n3 ? e2[i2].data[t4].y[1] : e2[i2].data[t4].y,
          rangeName: o3
        };
        e2[i2].data[t4].rangeName = o3;
        var c2 = r2.findIndex(function(t5) {
          return t5.x === l3;
        });
        r2[c2].y.push(h2), a2.push(h2.y1), s2.push(h2.y2);
      }, l2 = 0; l2 < e2[i2].data.length; l2++) o2(l2);
      return {
        start: a2,
        end: s2,
        rangeUniques: r2
      };
    }
  }, {
    key: "handleCandleStickBoxDataFormat",
    value: function(t3, e2, i2) {
      var a2 = this.w, s2 = "boxPlot" === a2.config.chart.type || "boxPlot" === a2.config.series[i2].type, r2 = [], n2 = [], o2 = [], l2 = [], h2 = [];
      if ("array" === t3) {
        if (s2 && 6 === e2[i2].data[0].length || !s2 && 5 === e2[i2].data[0].length) for (var c2 = 0; c2 < e2[i2].data.length; c2++) r2.push(e2[i2].data[c2][1]), n2.push(e2[i2].data[c2][2]), s2 ? (o2.push(e2[i2].data[c2][3]), l2.push(e2[i2].data[c2][4]), h2.push(e2[i2].data[c2][5])) : (l2.push(e2[i2].data[c2][3]), h2.push(e2[i2].data[c2][4]));
        else for (var d2 = 0; d2 < e2[i2].data.length; d2++) Array.isArray(e2[i2].data[d2][1]) && (r2.push(e2[i2].data[d2][1][0]), n2.push(e2[i2].data[d2][1][1]), s2 ? (o2.push(e2[i2].data[d2][1][2]), l2.push(e2[i2].data[d2][1][3]), h2.push(e2[i2].data[d2][1][4])) : (l2.push(e2[i2].data[d2][1][2]), h2.push(e2[i2].data[d2][1][3])));
      } else if ("xy" === t3) for (var u2 = 0; u2 < e2[i2].data.length; u2++) Array.isArray(e2[i2].data[u2].y) && (r2.push(e2[i2].data[u2].y[0]), n2.push(e2[i2].data[u2].y[1]), s2 ? (o2.push(e2[i2].data[u2].y[2]), l2.push(e2[i2].data[u2].y[3]), h2.push(e2[i2].data[u2].y[4])) : (l2.push(e2[i2].data[u2].y[2]), h2.push(e2[i2].data[u2].y[3])));
      return {
        o: r2,
        h: n2,
        m: o2,
        l: l2,
        c: h2
      };
    }
  }, {
    key: "parseDataAxisCharts",
    value: function(t3) {
      var e2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.ctx, a2 = this.w.config, s2 = this.w.globals, r2 = new zi(i2), n2 = a2.labels.length > 0 ? a2.labels.slice() : a2.xaxis.categories.slice();
      s2.isRangeBar = "rangeBar" === a2.chart.type && s2.isBarHorizontal, s2.hasXaxisGroups = "category" === a2.xaxis.type && a2.xaxis.group.groups.length > 0, s2.hasXaxisGroups && (s2.groups = a2.xaxis.group.groups), t3.forEach(function(t4, e3) {
        void 0 !== t4.name ? s2.seriesNames.push(t4.name) : s2.seriesNames.push("series-" + parseInt(e3 + 1, 10));
      }), this.coreUtils.setSeriesYAxisMappings();
      var o2 = [], l2 = f(new Set(a2.series.map(function(t4) {
        return t4.group;
      })));
      a2.series.forEach(function(t4, e3) {
        var i3 = l2.indexOf(t4.group);
        o2[i3] || (o2[i3] = []), o2[i3].push(s2.seriesNames[e3]);
      }), s2.seriesGroups = o2;
      for (var h2 = function() {
        for (var t4 = 0; t4 < n2.length; t4++) if ("string" == typeof n2[t4]) {
          if (!r2.isValidDate(n2[t4])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
          e2.twoDSeriesX.push(r2.parseDate(n2[t4]));
        } else e2.twoDSeriesX.push(n2[t4]);
      }, c2 = 0; c2 < t3.length; c2++) {
        if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], void 0 === t3[c2].data) return void console.error("It is a possibility that you may have not included 'data' property in series.");
        if ("rangeBar" !== a2.chart.type && "rangeArea" !== a2.chart.type && "rangeBar" !== t3[c2].type && "rangeArea" !== t3[c2].type || (s2.isRangeData = true, "rangeBar" !== a2.chart.type && "rangeArea" !== a2.chart.type || this.handleRangeData(t3, c2)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t3, c2) : this.isFormatXY() && this.handleFormatXY(t3, c2), "candlestick" !== a2.chart.type && "candlestick" !== t3[c2].type && "boxPlot" !== a2.chart.type && "boxPlot" !== t3[c2].type || this.handleCandleStickBoxData(t3, c2), s2.series.push(this.twoDSeries), s2.labels.push(this.twoDSeriesX), s2.seriesX.push(this.twoDSeriesX), s2.seriesGoals = this.seriesGoals, c2 !== this.activeSeriesIndex || this.fallbackToCategory || (s2.isXNumeric = true);
        else {
          "datetime" === a2.xaxis.type ? (s2.isXNumeric = true, h2(), s2.seriesX.push(this.twoDSeriesX)) : "numeric" === a2.xaxis.type && (s2.isXNumeric = true, n2.length > 0 && (this.twoDSeriesX = n2, s2.seriesX.push(this.twoDSeriesX))), s2.labels.push(this.twoDSeriesX);
          var d2 = t3[c2].data.map(function(t4) {
            return v.parseNumber(t4);
          });
          s2.series.push(d2);
        }
        s2.seriesZ.push(this.threeDSeries), void 0 !== t3[c2].color ? s2.seriesColors.push(t3[c2].color) : s2.seriesColors.push(void 0);
      }
      return this.w;
    }
  }, {
    key: "parseDataNonAxisCharts",
    value: function(t3) {
      var e2 = this.w.globals, i2 = this.w.config;
      e2.series = t3.slice(), e2.seriesNames = i2.labels.slice();
      for (var a2 = 0; a2 < e2.series.length; a2++) void 0 === e2.seriesNames[a2] && e2.seriesNames.push("series-" + (a2 + 1));
      return this.w;
    }
  }, {
    key: "handleExternalLabelsData",
    value: function(t3) {
      var e2 = this.w.config, i2 = this.w.globals;
      if (e2.xaxis.categories.length > 0) i2.labels = e2.xaxis.categories;
      else if (e2.labels.length > 0) i2.labels = e2.labels.slice();
      else if (this.fallbackToCategory) {
        if (i2.labels = i2.labels[0], i2.seriesRange.length && (i2.seriesRange.map(function(t4) {
          t4.forEach(function(t5) {
            i2.labels.indexOf(t5.x) < 0 && t5.x && i2.labels.push(t5.x);
          });
        }), i2.labels = Array.from(new Set(i2.labels.map(JSON.stringify)), JSON.parse)), e2.xaxis.convertedCatToNumeric) new Ni(e2).convertCatToNumericXaxis(e2, this.ctx, i2.seriesX[0]), this._generateExternalLabels(t3);
      } else this._generateExternalLabels(t3);
    }
  }, {
    key: "_generateExternalLabels",
    value: function(t3) {
      var e2 = this.w.globals, i2 = this.w.config, a2 = [];
      if (e2.axisCharts) {
        if (e2.series.length > 0) if (this.isFormatXY()) for (var s2 = i2.series.map(function(t4, e3) {
          return t4.data.filter(function(t5, e4, i3) {
            return i3.findIndex(function(e5) {
              return e5.x === t5.x;
            }) === e4;
          });
        }), r2 = s2.reduce(function(t4, e3, i3, a3) {
          return a3[t4].length > e3.length ? t4 : i3;
        }, 0), n2 = 0; n2 < s2[r2].length; n2++) a2.push(n2 + 1);
        else for (var o2 = 0; o2 < e2.series[e2.maxValsInArrayIndex].length; o2++) a2.push(o2 + 1);
        e2.seriesX = [];
        for (var l2 = 0; l2 < t3.length; l2++) e2.seriesX.push(a2);
        this.w.globals.isBarHorizontal || (e2.isXNumeric = true);
      }
      if (0 === a2.length) {
        a2 = e2.axisCharts ? [] : e2.series.map(function(t4, e3) {
          return e3 + 1;
        });
        for (var h2 = 0; h2 < t3.length; h2++) e2.seriesX.push(a2);
      }
      e2.labels = a2, i2.xaxis.convertedCatToNumeric && (e2.categoryLabels = a2.map(function(t4) {
        return i2.xaxis.labels.formatter(t4);
      })), e2.noLabelsProvided = true;
    }
  }, {
    key: "parseData",
    value: function(t3) {
      var e2 = this.w, i2 = e2.config, a2 = e2.globals;
      if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = false, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), a2.axisCharts ? (this.parseDataAxisCharts(t3), this.coreUtils.getLargestSeries()) : this.parseDataNonAxisCharts(t3), i2.chart.stacked) {
        var s2 = new Zi(this.ctx);
        a2.series = s2.setNullSeriesToZeroValues(a2.series);
      }
      this.coreUtils.getSeriesTotals(), a2.axisCharts && (a2.stackedSeriesTotals = this.coreUtils.getStackedSeriesTotals(), a2.stackedSeriesTotalsByGroups = this.coreUtils.getStackedSeriesTotalsByGroups()), this.coreUtils.getPercentSeries(), a2.dataFormatXNumeric || a2.isXNumeric && ("numeric" !== i2.xaxis.type || 0 !== i2.labels.length || 0 !== i2.xaxis.categories.length) || this.handleExternalLabelsData(t3);
      for (var r2 = this.coreUtils.getCategoryLabels(a2.labels), n2 = 0; n2 < r2.length; n2++) if (Array.isArray(r2[n2])) {
        a2.isMultiLineX = true;
        break;
      }
    }
  }, {
    key: "excludeCollapsedSeriesInYAxis",
    value: function() {
      var t3 = this.w, e2 = [];
      t3.globals.seriesYAxisMap.forEach(function(i2, a2) {
        var s2 = 0;
        i2.forEach(function(e3) {
          -1 !== t3.globals.collapsedSeriesIndices.indexOf(e3) && s2++;
        }), s2 > 0 && s2 == i2.length && e2.push(a2);
      }), t3.globals.ignoreYAxisIndexes = e2.map(function(t4) {
        return t4;
      });
    }
  }]), t2;
}();
var Ji = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "svgStringToNode",
    value: function(t3) {
      return new DOMParser().parseFromString(t3, "image/svg+xml").documentElement;
    }
  }, {
    key: "scaleSvgNode",
    value: function(t3, e2) {
      var i2 = parseFloat(t3.getAttributeNS(null, "width")), a2 = parseFloat(t3.getAttributeNS(null, "height"));
      t3.setAttributeNS(null, "width", i2 * e2), t3.setAttributeNS(null, "height", a2 * e2), t3.setAttributeNS(null, "viewBox", "0 0 " + i2 + " " + a2);
    }
  }, {
    key: "getSvgString",
    value: function(t3) {
      var e2 = this;
      return new Promise(function(i2) {
        var a2 = e2.w, s2 = t3 || a2.config.chart.toolbar.export.scale || a2.config.chart.toolbar.export.width / a2.globals.svgWidth;
        s2 || (s2 = 1);
        var r2 = a2.globals.svgWidth * s2, n2 = a2.globals.svgHeight * s2, o2 = a2.globals.dom.elWrap.cloneNode(true);
        o2.style.width = r2 + "px", o2.style.height = n2 + "px";
        var l2 = new XMLSerializer().serializeToString(o2), h2 = '\n        <svg xmlns="http://www.w3.org/2000/svg"\n          version="1.1"\n          xmlns:xlink="http://www.w3.org/1999/xlink"\n          class="apexcharts-svg"\n          xmlns:data="ApexChartsNS"\n          transform="translate(0, 0)"\n          width="'.concat(a2.globals.svgWidth, 'px" height="').concat(a2.globals.svgHeight, 'px">\n          <foreignObject width="100%" height="100%">\n            <div xmlns="http://www.w3.org/1999/xhtml" style="width:').concat(r2, "px; height:").concat(n2, 'px;">\n            <style type="text/css">\n              .apexcharts-tooltip, .apexcharts-toolbar, .apexcharts-xaxistooltip, .apexcharts-yaxistooltip, .apexcharts-xcrosshairs, .apexcharts-ycrosshairs, .apexcharts-zoom-rect, .apexcharts-selection-rect {\n                display: none;\n              }\n            </style>\n              ').concat(l2, "\n            </div>\n          </foreignObject>\n        </svg>\n      "), c2 = e2.svgStringToNode(h2);
        1 !== s2 && e2.scaleSvgNode(c2, s2), e2.convertImagesToBase64(c2).then(function() {
          h2 = new XMLSerializer().serializeToString(c2), i2(h2.replace(/&nbsp;/g, "&#160;"));
        });
      });
    }
  }, {
    key: "convertImagesToBase64",
    value: function(t3) {
      var e2 = this, i2 = t3.getElementsByTagName("image"), a2 = Array.from(i2).map(function(t4) {
        var i3 = t4.getAttributeNS("http://www.w3.org/1999/xlink", "href");
        return i3 && !i3.startsWith("data:") ? e2.getBase64FromUrl(i3).then(function(e3) {
          t4.setAttributeNS("http://www.w3.org/1999/xlink", "href", e3);
        }).catch(function(t5) {
          console.error("Error converting image to base64:", t5);
        }) : Promise.resolve();
      });
      return Promise.all(a2);
    }
  }, {
    key: "getBase64FromUrl",
    value: function(t3) {
      return new Promise(function(e2, i2) {
        var a2 = new Image();
        a2.crossOrigin = "Anonymous", a2.onload = function() {
          var t4 = document.createElement("canvas");
          t4.width = a2.width, t4.height = a2.height, t4.getContext("2d").drawImage(a2, 0, 0), e2(t4.toDataURL());
        }, a2.onerror = i2, a2.src = t3;
      });
    }
  }, {
    key: "svgUrl",
    value: function() {
      var t3 = this;
      return new Promise(function(e2) {
        t3.getSvgString().then(function(t4) {
          var i2 = new Blob([t4], {
            type: "image/svg+xml;charset=utf-8"
          });
          e2(URL.createObjectURL(i2));
        });
      });
    }
  }, {
    key: "dataURI",
    value: function(t3) {
      var e2 = this;
      return new Promise(function(i2) {
        var a2 = e2.w, s2 = t3 ? t3.scale || t3.width / a2.globals.svgWidth : 1, r2 = document.createElement("canvas");
        r2.width = a2.globals.svgWidth * s2, r2.height = parseInt(a2.globals.dom.elWrap.style.height, 10) * s2;
        var n2 = "transparent" !== a2.config.chart.background && a2.config.chart.background ? a2.config.chart.background : "#fff", o2 = r2.getContext("2d");
        o2.fillStyle = n2, o2.fillRect(0, 0, r2.width * s2, r2.height * s2), e2.getSvgString(s2).then(function(t4) {
          var e3 = "data:image/svg+xml," + encodeURIComponent(t4), a3 = new Image();
          a3.crossOrigin = "anonymous", a3.onload = function() {
            if (o2.drawImage(a3, 0, 0), r2.msToBlob) {
              var t5 = r2.msToBlob();
              i2({
                blob: t5
              });
            } else {
              var e4 = r2.toDataURL("image/png");
              i2({
                imgURI: e4
              });
            }
          }, a3.src = e3;
        });
      });
    }
  }, {
    key: "exportToSVG",
    value: function() {
      var t3 = this;
      this.svgUrl().then(function(e2) {
        t3.triggerDownload(e2, t3.w.config.chart.toolbar.export.svg.filename, ".svg");
      });
    }
  }, {
    key: "exportToPng",
    value: function() {
      var t3 = this, e2 = this.w.config.chart.toolbar.export.scale, i2 = this.w.config.chart.toolbar.export.width, a2 = e2 ? {
        scale: e2
      } : i2 ? {
        width: i2
      } : void 0;
      this.dataURI(a2).then(function(e3) {
        var i3 = e3.imgURI, a3 = e3.blob;
        a3 ? navigator.msSaveOrOpenBlob(a3, t3.w.globals.chartID + ".png") : t3.triggerDownload(i3, t3.w.config.chart.toolbar.export.png.filename, ".png");
      });
    }
  }, {
    key: "exportToCSV",
    value: function(t3) {
      var e2 = this, i2 = t3.series, a2 = t3.fileName, s2 = t3.columnDelimiter, r2 = void 0 === s2 ? "," : s2, n2 = t3.lineDelimiter, o2 = void 0 === n2 ? "\n" : n2, l2 = this.w;
      i2 || (i2 = l2.config.series);
      var h2 = [], c2 = [], d2 = "", u2 = l2.globals.series.map(function(t4, e3) {
        return -1 === l2.globals.collapsedSeriesIndices.indexOf(e3) ? t4 : [];
      }), g2 = function(t4) {
        return "function" == typeof l2.config.chart.toolbar.export.csv.categoryFormatter ? l2.config.chart.toolbar.export.csv.categoryFormatter(t4) : "datetime" === l2.config.xaxis.type && String(t4).length >= 10 ? new Date(t4).toDateString() : v.isNumber(t4) ? t4 : t4.split(r2).join("");
      }, p2 = function(t4) {
        return "function" == typeof l2.config.chart.toolbar.export.csv.valueFormatter ? l2.config.chart.toolbar.export.csv.valueFormatter(t4) : t4;
      }, x2 = Math.max.apply(Math, f(i2.map(function(t4) {
        return t4.data ? t4.data.length : 0;
      }))), b2 = new $i(this.ctx), m2 = new Ri(this.ctx), y2 = function(t4) {
        var i3 = "";
        if (l2.globals.axisCharts) {
          if ("category" === l2.config.xaxis.type || l2.config.xaxis.convertedCatToNumeric) if (l2.globals.isBarHorizontal) {
            var a3 = l2.globals.yLabelFormatters[0], s3 = new Zi(e2.ctx).getActiveConfigSeriesIndex();
            i3 = a3(l2.globals.labels[t4], {
              seriesIndex: s3,
              dataPointIndex: t4,
              w: l2
            });
          } else i3 = m2.getLabel(l2.globals.labels, l2.globals.timescaleLabels, 0, t4).text;
          "datetime" === l2.config.xaxis.type && (l2.config.xaxis.categories.length ? i3 = l2.config.xaxis.categories[t4] : l2.config.labels.length && (i3 = l2.config.labels[t4]));
        } else i3 = l2.config.labels[t4];
        return null === i3 ? "nullvalue" : (Array.isArray(i3) && (i3 = i3.join(" ")), v.isNumber(i3) ? i3 : i3.split(r2).join(""));
      }, w2 = function(t4, e3) {
        if (h2.length && 0 === e3 && c2.push(h2.join(r2)), t4.data) {
          t4.data = t4.data.length && t4.data || f(Array(x2)).map(function() {
            return "";
          });
          for (var a3 = 0; a3 < t4.data.length; a3++) {
            h2 = [];
            var s3 = y2(a3);
            if ("nullvalue" !== s3) {
              if (s3 || (b2.isFormatXY() ? s3 = i2[e3].data[a3].x : b2.isFormat2DArray() && (s3 = i2[e3].data[a3] ? i2[e3].data[a3][0] : "")), 0 === e3) {
                h2.push(g2(s3));
                for (var n3 = 0; n3 < l2.globals.series.length; n3++) {
                  var o3, d3 = b2.isFormatXY() ? null === (o3 = i2[n3].data[a3]) || void 0 === o3 ? void 0 : o3.y : u2[n3][a3];
                  h2.push(p2(d3));
                }
              }
              ("candlestick" === l2.config.chart.type || t4.type && "candlestick" === t4.type) && (h2.pop(), h2.push(l2.globals.seriesCandleO[e3][a3]), h2.push(l2.globals.seriesCandleH[e3][a3]), h2.push(l2.globals.seriesCandleL[e3][a3]), h2.push(l2.globals.seriesCandleC[e3][a3])), ("boxPlot" === l2.config.chart.type || t4.type && "boxPlot" === t4.type) && (h2.pop(), h2.push(l2.globals.seriesCandleO[e3][a3]), h2.push(l2.globals.seriesCandleH[e3][a3]), h2.push(l2.globals.seriesCandleM[e3][a3]), h2.push(l2.globals.seriesCandleL[e3][a3]), h2.push(l2.globals.seriesCandleC[e3][a3])), "rangeBar" === l2.config.chart.type && (h2.pop(), h2.push(l2.globals.seriesRangeStart[e3][a3]), h2.push(l2.globals.seriesRangeEnd[e3][a3])), h2.length && c2.push(h2.join(r2));
            }
          }
        }
      };
      h2.push(l2.config.chart.toolbar.export.csv.headerCategory), "boxPlot" === l2.config.chart.type ? (h2.push("minimum"), h2.push("q1"), h2.push("median"), h2.push("q3"), h2.push("maximum")) : "candlestick" === l2.config.chart.type ? (h2.push("open"), h2.push("high"), h2.push("low"), h2.push("close")) : "rangeBar" === l2.config.chart.type ? (h2.push("minimum"), h2.push("maximum")) : i2.map(function(t4, e3) {
        var i3 = (t4.name ? t4.name : "series-".concat(e3)) + "";
        l2.globals.axisCharts && h2.push(i3.split(r2).join("") ? i3.split(r2).join("") : "series-".concat(e3));
      }), l2.globals.axisCharts || (h2.push(l2.config.chart.toolbar.export.csv.headerValue), c2.push(h2.join(r2))), l2.globals.allSeriesHasEqualX || !l2.globals.axisCharts || l2.config.xaxis.categories.length || l2.config.labels.length ? i2.map(function(t4, e3) {
        l2.globals.axisCharts ? w2(t4, e3) : ((h2 = []).push(g2(l2.globals.labels[e3])), h2.push(p2(u2[e3])), c2.push(h2.join(r2)));
      }) : function() {
        var t4 = /* @__PURE__ */ new Set(), e3 = {};
        i2.forEach(function(a3, s3) {
          null == a3 || a3.data.forEach(function(a4) {
            var r3, n3;
            if (b2.isFormatXY()) r3 = a4.x, n3 = a4.y;
            else {
              if (!b2.isFormat2DArray()) return;
              r3 = a4[0], n3 = a4[1];
            }
            e3[r3] || (e3[r3] = Array(i2.length).fill("")), e3[r3][s3] = p2(n3), t4.add(r3);
          });
        }), h2.length && c2.push(h2.join(r2)), Array.from(t4).sort().forEach(function(t5) {
          c2.push([g2(t5), e3[t5].join(r2)]);
        });
      }(), d2 += c2.join(o2), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\uFEFF" + d2), a2 || l2.config.chart.toolbar.export.csv.filename, ".csv");
    }
  }, {
    key: "triggerDownload",
    value: function(t3, e2, i2) {
      var a2 = document.createElement("a");
      a2.href = t3, a2.download = (e2 || this.w.globals.chartID) + i2, document.body.appendChild(a2), a2.click(), document.body.removeChild(a2);
    }
  }]), t2;
}();
var Qi = function() {
  function t2(e2, a2) {
    i(this, t2), this.ctx = e2, this.elgrid = a2, this.w = e2.w;
    var s2 = this.w;
    this.axesUtils = new Ri(e2), this.xaxisLabels = s2.globals.labels.slice(), s2.globals.timescaleLabels.length > 0 && !s2.globals.isBarHorizontal && (this.xaxisLabels = s2.globals.timescaleLabels.slice()), s2.config.xaxis.overwriteCategories && (this.xaxisLabels = s2.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], "top" === s2.config.xaxis.position ? this.offY = 0 : this.offY = s2.globals.gridHeight, this.offY = this.offY + s2.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = "bar" === s2.config.chart.type && s2.config.plotOptions.bar.horizontal, this.xaxisFontSize = s2.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = s2.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = s2.config.xaxis.labels.style.colors, this.xaxisBorderWidth = s2.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = s2.config.yaxis[0].axisBorder.width.toString()), this.xaxisBorderWidth.indexOf("%") > -1 ? this.xaxisBorderWidth = s2.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = s2.config.xaxis.axisBorder.height, this.yaxis = s2.config.yaxis[0];
  }
  return s(t2, [{
    key: "drawXaxis",
    value: function() {
      var t3 = this.w, e2 = new Mi(this.ctx), i2 = e2.group({
        class: "apexcharts-xaxis",
        transform: "translate(".concat(t3.config.xaxis.offsetX, ", ").concat(t3.config.xaxis.offsetY, ")")
      }), a2 = e2.group({
        class: "apexcharts-xaxis-texts-g",
        transform: "translate(".concat(t3.globals.translateXAxisX, ", ").concat(t3.globals.translateXAxisY, ")")
      });
      i2.add(a2);
      for (var s2 = [], r2 = 0; r2 < this.xaxisLabels.length; r2++) s2.push(this.xaxisLabels[r2]);
      if (this.drawXAxisLabelAndGroup(true, e2, a2, s2, t3.globals.isXNumeric, function(t4, e3) {
        return e3;
      }), t3.globals.hasXaxisGroups) {
        var n2 = t3.globals.groups;
        s2 = [];
        for (var o2 = 0; o2 < n2.length; o2++) s2.push(n2[o2].title);
        var l2 = {};
        t3.config.xaxis.group.style && (l2.xaxisFontSize = t3.config.xaxis.group.style.fontSize, l2.xaxisFontFamily = t3.config.xaxis.group.style.fontFamily, l2.xaxisForeColors = t3.config.xaxis.group.style.colors, l2.fontWeight = t3.config.xaxis.group.style.fontWeight, l2.cssClass = t3.config.xaxis.group.style.cssClass), this.drawXAxisLabelAndGroup(false, e2, a2, s2, false, function(t4, e3) {
          return n2[t4].cols * e3;
        }, l2);
      }
      if (void 0 !== t3.config.xaxis.title.text) {
        var h2 = e2.group({
          class: "apexcharts-xaxis-title"
        }), c2 = e2.drawText({
          x: t3.globals.gridWidth / 2 + t3.config.xaxis.title.offsetX,
          y: this.offY + parseFloat(this.xaxisFontSize) + ("bottom" === t3.config.xaxis.position ? t3.globals.xAxisLabelsHeight : -t3.globals.xAxisLabelsHeight - 10) + t3.config.xaxis.title.offsetY,
          text: t3.config.xaxis.title.text,
          textAnchor: "middle",
          fontSize: t3.config.xaxis.title.style.fontSize,
          fontFamily: t3.config.xaxis.title.style.fontFamily,
          fontWeight: t3.config.xaxis.title.style.fontWeight,
          foreColor: t3.config.xaxis.title.style.color,
          cssClass: "apexcharts-xaxis-title-text " + t3.config.xaxis.title.style.cssClass
        });
        h2.add(c2), i2.add(h2);
      }
      if (t3.config.xaxis.axisBorder.show) {
        var d2 = t3.globals.barPadForNumericAxis, u2 = e2.drawLine(t3.globals.padHorizontal + t3.config.xaxis.axisBorder.offsetX - d2, this.offY, this.xaxisBorderWidth + d2, this.offY, t3.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
        this.elgrid && this.elgrid.elGridBorders && t3.config.grid.show ? this.elgrid.elGridBorders.add(u2) : i2.add(u2);
      }
      return i2;
    }
  }, {
    key: "drawXAxisLabelAndGroup",
    value: function(t3, e2, i2, a2, s2, r2) {
      var n2, o2 = this, l2 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : {}, h2 = [], c2 = [], d2 = this.w, u2 = l2.xaxisFontSize || this.xaxisFontSize, g2 = l2.xaxisFontFamily || this.xaxisFontFamily, p2 = l2.xaxisForeColors || this.xaxisForeColors, f2 = l2.fontWeight || d2.config.xaxis.labels.style.fontWeight, x2 = l2.cssClass || d2.config.xaxis.labels.style.cssClass, b2 = d2.globals.padHorizontal, m2 = a2.length, v2 = "category" === d2.config.xaxis.type ? d2.globals.dataPoints : m2;
      if (0 === v2 && m2 > v2 && (v2 = m2), s2) {
        var y2 = Math.max(Number(d2.config.xaxis.tickAmount) || 1, v2 > 1 ? v2 - 1 : v2);
        n2 = d2.globals.gridWidth / Math.min(y2, m2 - 1), b2 = b2 + r2(0, n2) / 2 + d2.config.xaxis.labels.offsetX;
      } else n2 = d2.globals.gridWidth / v2, b2 = b2 + r2(0, n2) + d2.config.xaxis.labels.offsetX;
      for (var w2 = function(s3) {
        var l3 = b2 - r2(s3, n2) / 2 + d2.config.xaxis.labels.offsetX;
        0 === s3 && 1 === m2 && n2 / 2 === b2 && 1 === v2 && (l3 = d2.globals.gridWidth / 2);
        var y3 = o2.axesUtils.getLabel(a2, d2.globals.timescaleLabels, l3, s3, h2, u2, t3), w3 = 28;
        d2.globals.rotateXLabels && t3 && (w3 = 22), d2.config.xaxis.title.text && "top" === d2.config.xaxis.position && (w3 += parseFloat(d2.config.xaxis.title.style.fontSize) + 2), t3 || (w3 = w3 + parseFloat(u2) + (d2.globals.xAxisLabelsHeight - d2.globals.xAxisGroupLabelsHeight) + (d2.globals.rotateXLabels ? 10 : 0)), y3 = void 0 !== d2.config.xaxis.tickAmount && "dataPoints" !== d2.config.xaxis.tickAmount && "datetime" !== d2.config.xaxis.type ? o2.axesUtils.checkLabelBasedOnTickamount(s3, y3, m2) : o2.axesUtils.checkForOverflowingLabels(s3, y3, m2, h2, c2);
        if (d2.config.xaxis.labels.show) {
          var k3 = e2.drawText({
            x: y3.x,
            y: o2.offY + d2.config.xaxis.labels.offsetY + w3 - ("top" === d2.config.xaxis.position ? d2.globals.xAxisHeight + d2.config.xaxis.axisTicks.height - 2 : 0),
            text: y3.text,
            textAnchor: "middle",
            fontWeight: y3.isBold ? 600 : f2,
            fontSize: u2,
            fontFamily: g2,
            foreColor: Array.isArray(p2) ? t3 && d2.config.xaxis.convertedCatToNumeric ? p2[d2.globals.minX + s3 - 1] : p2[s3] : p2,
            isPlainText: false,
            cssClass: (t3 ? "apexcharts-xaxis-label " : "apexcharts-xaxis-group-label ") + x2
          });
          if (i2.add(k3), k3.on("click", function(t4) {
            if ("function" == typeof d2.config.chart.events.xAxisLabelClick) {
              var e3 = Object.assign({}, d2, {
                labelIndex: s3
              });
              d2.config.chart.events.xAxisLabelClick(t4, o2.ctx, e3);
            }
          }), t3) {
            var A2 = document.createElementNS(d2.globals.SVGNS, "title");
            A2.textContent = Array.isArray(y3.text) ? y3.text.join(" ") : y3.text, k3.node.appendChild(A2), "" !== y3.text && (h2.push(y3.text), c2.push(y3));
          }
        }
        s3 < m2 - 1 && (b2 += r2(s3 + 1, n2));
      }, k2 = 0; k2 <= m2 - 1; k2++) w2(k2);
    }
  }, {
    key: "drawXaxisInversed",
    value: function(t3) {
      var e2, i2, a2 = this, s2 = this.w, r2 = new Mi(this.ctx), n2 = s2.config.yaxis[0].opposite ? s2.globals.translateYAxisX[t3] : 0, o2 = r2.group({
        class: "apexcharts-yaxis apexcharts-xaxis-inversed",
        rel: t3
      }), l2 = r2.group({
        class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",
        transform: "translate(" + n2 + ", 0)"
      });
      o2.add(l2);
      var h2 = [];
      if (s2.config.yaxis[t3].show) for (var c2 = 0; c2 < this.xaxisLabels.length; c2++) h2.push(this.xaxisLabels[c2]);
      e2 = s2.globals.gridHeight / h2.length, i2 = -e2 / 2.2;
      var d2 = s2.globals.yLabelFormatters[0], u2 = s2.config.yaxis[0].labels;
      if (u2.show) for (var g2 = function(n3) {
        var o3 = void 0 === h2[n3] ? "" : h2[n3];
        o3 = d2(o3, {
          seriesIndex: t3,
          dataPointIndex: n3,
          w: s2
        });
        var c3 = a2.axesUtils.getYAxisForeColor(u2.style.colors, t3), g3 = 0;
        Array.isArray(o3) && (g3 = o3.length / 2 * parseInt(u2.style.fontSize, 10));
        var p3 = u2.offsetX - 15, f3 = "end";
        a2.yaxis.opposite && (f3 = "start"), "left" === s2.config.yaxis[0].labels.align ? (p3 = u2.offsetX, f3 = "start") : "center" === s2.config.yaxis[0].labels.align ? (p3 = u2.offsetX, f3 = "middle") : "right" === s2.config.yaxis[0].labels.align && (f3 = "end");
        var x3 = r2.drawText({
          x: p3,
          y: i2 + e2 + u2.offsetY - g3,
          text: o3,
          textAnchor: f3,
          foreColor: Array.isArray(c3) ? c3[n3] : c3,
          fontSize: u2.style.fontSize,
          fontFamily: u2.style.fontFamily,
          fontWeight: u2.style.fontWeight,
          isPlainText: false,
          cssClass: "apexcharts-yaxis-label " + u2.style.cssClass,
          maxWidth: u2.maxWidth
        });
        l2.add(x3), x3.on("click", function(t4) {
          if ("function" == typeof s2.config.chart.events.xAxisLabelClick) {
            var e3 = Object.assign({}, s2, {
              labelIndex: n3
            });
            s2.config.chart.events.xAxisLabelClick(t4, a2.ctx, e3);
          }
        });
        var b3 = document.createElementNS(s2.globals.SVGNS, "title");
        if (b3.textContent = Array.isArray(o3) ? o3.join(" ") : o3, x3.node.appendChild(b3), 0 !== s2.config.yaxis[t3].labels.rotate) {
          var m3 = r2.rotateAroundCenter(x3.node);
          x3.node.setAttribute("transform", "rotate(".concat(s2.config.yaxis[t3].labels.rotate, " 0 ").concat(m3.y, ")"));
        }
        i2 += e2;
      }, p2 = 0; p2 <= h2.length - 1; p2++) g2(p2);
      if (void 0 !== s2.config.yaxis[0].title.text) {
        var f2 = r2.group({
          class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed",
          transform: "translate(" + n2 + ", 0)"
        }), x2 = r2.drawText({
          x: s2.config.yaxis[0].title.offsetX,
          y: s2.globals.gridHeight / 2 + s2.config.yaxis[0].title.offsetY,
          text: s2.config.yaxis[0].title.text,
          textAnchor: "middle",
          foreColor: s2.config.yaxis[0].title.style.color,
          fontSize: s2.config.yaxis[0].title.style.fontSize,
          fontWeight: s2.config.yaxis[0].title.style.fontWeight,
          fontFamily: s2.config.yaxis[0].title.style.fontFamily,
          cssClass: "apexcharts-yaxis-title-text " + s2.config.yaxis[0].title.style.cssClass
        });
        f2.add(x2), o2.add(f2);
      }
      var b2 = 0;
      this.isCategoryBarHorizontal && s2.config.yaxis[0].opposite && (b2 = s2.globals.gridWidth);
      var m2 = s2.config.xaxis.axisBorder;
      if (m2.show) {
        var v2 = r2.drawLine(s2.globals.padHorizontal + m2.offsetX + b2, 1 + m2.offsetY, s2.globals.padHorizontal + m2.offsetX + b2, s2.globals.gridHeight + m2.offsetY, m2.color, 0);
        this.elgrid && this.elgrid.elGridBorders && s2.config.grid.show ? this.elgrid.elGridBorders.add(v2) : o2.add(v2);
      }
      return s2.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(b2, h2.length, s2.config.yaxis[0].axisBorder, s2.config.yaxis[0].axisTicks, 0, e2, o2), o2;
    }
  }, {
    key: "drawXaxisTicks",
    value: function(t3, e2, i2) {
      var a2 = this.w, s2 = t3;
      if (!(t3 < 0 || t3 - 2 > a2.globals.gridWidth)) {
        var r2 = this.offY + a2.config.xaxis.axisTicks.offsetY;
        if (e2 = e2 + r2 + a2.config.xaxis.axisTicks.height, "top" === a2.config.xaxis.position && (e2 = r2 - a2.config.xaxis.axisTicks.height), a2.config.xaxis.axisTicks.show) {
          var n2 = new Mi(this.ctx).drawLine(t3 + a2.config.xaxis.axisTicks.offsetX, r2 + a2.config.xaxis.offsetY, s2 + a2.config.xaxis.axisTicks.offsetX, e2 + a2.config.xaxis.offsetY, a2.config.xaxis.axisTicks.color);
          i2.add(n2), n2.node.classList.add("apexcharts-xaxis-tick");
        }
      }
    }
  }, {
    key: "getXAxisTicksPositions",
    value: function() {
      var t3 = this.w, e2 = [], i2 = this.xaxisLabels.length, a2 = t3.globals.padHorizontal;
      if (t3.globals.timescaleLabels.length > 0) for (var s2 = 0; s2 < i2; s2++) a2 = this.xaxisLabels[s2].position, e2.push(a2);
      else for (var r2 = i2, n2 = 0; n2 < r2; n2++) {
        var o2 = r2;
        t3.globals.isXNumeric && "bar" !== t3.config.chart.type && (o2 -= 1), a2 += t3.globals.gridWidth / o2, e2.push(a2);
      }
      return e2;
    }
  }, {
    key: "xAxisLabelCorrections",
    value: function() {
      var t3 = this.w, e2 = new Mi(this.ctx), i2 = t3.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"), a2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"), s2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"), r2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
      if (t3.globals.rotateXLabels || t3.config.xaxis.labels.rotateAlways) for (var n2 = 0; n2 < a2.length; n2++) {
        var o2 = e2.rotateAroundCenter(a2[n2]);
        o2.y = o2.y - 1, o2.x = o2.x + 1, a2[n2].setAttribute("transform", "rotate(".concat(t3.config.xaxis.labels.rotate, " ").concat(o2.x, " ").concat(o2.y, ")")), a2[n2].setAttribute("text-anchor", "end");
        i2.setAttribute("transform", "translate(0, ".concat(-10, ")"));
        var l2 = a2[n2].childNodes;
        t3.config.xaxis.labels.trim && Array.prototype.forEach.call(l2, function(i3) {
          e2.placeTextWithEllipsis(i3, i3.textContent, t3.globals.xAxisLabelsHeight - ("bottom" === t3.config.legend.position ? 20 : 10));
        });
      }
      else !function() {
        for (var i3 = t3.globals.gridWidth / (t3.globals.labels.length + 1), s3 = 0; s3 < a2.length; s3++) {
          var r3 = a2[s3].childNodes;
          t3.config.xaxis.labels.trim && "datetime" !== t3.config.xaxis.type && Array.prototype.forEach.call(r3, function(t4) {
            e2.placeTextWithEllipsis(t4, t4.textContent, i3);
          });
        }
      }();
      if (s2.length > 0) {
        var h2 = s2[s2.length - 1].getBBox(), c2 = s2[0].getBBox();
        h2.x < -20 && s2[s2.length - 1].parentNode.removeChild(s2[s2.length - 1]), c2.x + c2.width > t3.globals.gridWidth && !t3.globals.isBarHorizontal && s2[0].parentNode.removeChild(s2[0]);
        for (var d2 = 0; d2 < r2.length; d2++) e2.placeTextWithEllipsis(r2[d2], r2[d2].textContent, t3.config.yaxis[0].labels.maxWidth - (t3.config.yaxis[0].title.text ? 2 * parseFloat(t3.config.yaxis[0].title.style.fontSize) : 0) - 15);
      }
    }
  }]), t2;
}();
var Ki = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
    var a2 = this.w;
    this.xaxisLabels = a2.globals.labels.slice(), this.axesUtils = new Ri(e2), this.isRangeBar = a2.globals.seriesRange.length && a2.globals.isBarHorizontal, a2.globals.timescaleLabels.length > 0 && (this.xaxisLabels = a2.globals.timescaleLabels.slice());
  }
  return s(t2, [{
    key: "drawGridArea",
    value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, e2 = this.w, i2 = new Mi(this.ctx);
      t3 || (t3 = i2.group({
        class: "apexcharts-grid"
      }));
      var a2 = i2.drawLine(e2.globals.padHorizontal, 1, e2.globals.padHorizontal, e2.globals.gridHeight, "transparent"), s2 = i2.drawLine(e2.globals.padHorizontal, e2.globals.gridHeight, e2.globals.gridWidth, e2.globals.gridHeight, "transparent");
      return t3.add(s2), t3.add(a2), t3;
    }
  }, {
    key: "drawGrid",
    value: function() {
      if (this.w.globals.axisCharts) {
        var t3 = this.renderGrid();
        return this.drawGridArea(t3.el), t3;
      }
      return null;
    }
  }, {
    key: "createGridMask",
    value: function() {
      var t3 = this.w, e2 = t3.globals, i2 = new Mi(this.ctx), a2 = Array.isArray(t3.config.stroke.width) ? Math.max.apply(Math, f(t3.config.stroke.width)) : t3.config.stroke.width, s2 = function(t4) {
        var i3 = document.createElementNS(e2.SVGNS, "clipPath");
        return i3.setAttribute("id", t4), i3;
      };
      e2.dom.elGridRectMask = s2("gridRectMask".concat(e2.cuid)), e2.dom.elGridRectBarMask = s2("gridRectBarMask".concat(e2.cuid)), e2.dom.elGridRectMarkerMask = s2("gridRectMarkerMask".concat(e2.cuid)), e2.dom.elForecastMask = s2("forecastMask".concat(e2.cuid)), e2.dom.elNonForecastMask = s2("nonForecastMask".concat(e2.cuid));
      var r2 = 0, n2 = 0;
      (["bar", "rangeBar", "candlestick", "boxPlot"].includes(t3.config.chart.type) || t3.globals.comboBarCount > 0) && t3.globals.isXNumeric && !t3.globals.isBarHorizontal && (r2 = Math.max(t3.config.grid.padding.left, e2.barPadForNumericAxis), n2 = Math.max(t3.config.grid.padding.right, e2.barPadForNumericAxis)), e2.dom.elGridRect = i2.drawRect(-a2 / 2 - 2, -a2 / 2 - 2, e2.gridWidth + a2 + 4, e2.gridHeight + a2 + 4, 0, "#fff"), e2.dom.elGridRectBar = i2.drawRect(-a2 / 2 - r2 - 2, -a2 / 2 - 2, e2.gridWidth + a2 + n2 + r2 + 4, e2.gridHeight + a2 + 4, 0, "#fff");
      var o2 = t3.globals.markers.largestSize;
      e2.dom.elGridRectMarker = i2.drawRect(-o2, -o2, e2.gridWidth + 2 * o2, e2.gridHeight + 2 * o2, 0, "#fff"), e2.dom.elGridRectMask.appendChild(e2.dom.elGridRect.node), e2.dom.elGridRectBarMask.appendChild(e2.dom.elGridRectBar.node), e2.dom.elGridRectMarkerMask.appendChild(e2.dom.elGridRectMarker.node);
      var l2 = e2.dom.baseEl.querySelector("defs");
      l2.appendChild(e2.dom.elGridRectMask), l2.appendChild(e2.dom.elGridRectBarMask), l2.appendChild(e2.dom.elGridRectMarkerMask), l2.appendChild(e2.dom.elForecastMask), l2.appendChild(e2.dom.elNonForecastMask);
    }
  }, {
    key: "_drawGridLines",
    value: function(t3) {
      var e2 = t3.i, i2 = t3.x1, a2 = t3.y1, s2 = t3.x2, r2 = t3.y2, n2 = t3.xCount, o2 = t3.parent, l2 = this.w;
      if (!(0 === e2 && l2.globals.skipFirstTimelinelabel || e2 === n2 - 1 && l2.globals.skipLastTimelinelabel && !l2.config.xaxis.labels.formatter || "radar" === l2.config.chart.type)) {
        l2.config.grid.xaxis.lines.show && this._drawGridLine({
          i: e2,
          x1: i2,
          y1: a2,
          x2: s2,
          y2: r2,
          xCount: n2,
          parent: o2
        });
        var h2 = 0;
        if (l2.globals.hasXaxisGroups && "between" === l2.config.xaxis.tickPlacement) {
          var c2 = l2.globals.groups;
          if (c2) {
            for (var d2 = 0, u2 = 0; d2 < e2 && u2 < c2.length; u2++) d2 += c2[u2].cols;
            d2 === e2 && (h2 = 0.6 * l2.globals.xAxisLabelsHeight);
          }
        }
        new Qi(this.ctx).drawXaxisTicks(i2, h2, l2.globals.dom.elGraphical);
      }
    }
  }, {
    key: "_drawGridLine",
    value: function(t3) {
      var e2 = t3.i, i2 = t3.x1, a2 = t3.y1, s2 = t3.x2, r2 = t3.y2, n2 = t3.xCount, o2 = t3.parent, l2 = this.w, h2 = o2.node.classList.contains("apexcharts-gridlines-horizontal"), c2 = l2.globals.barPadForNumericAxis, d2 = 0 === a2 && 0 === r2 || 0 === i2 && 0 === s2 || a2 === l2.globals.gridHeight && r2 === l2.globals.gridHeight || l2.globals.isBarHorizontal && (0 === e2 || e2 === n2 - 1), u2 = new Mi(this).drawLine(i2 - (h2 ? c2 : 0), a2, s2 + (h2 ? c2 : 0), r2, l2.config.grid.borderColor, l2.config.grid.strokeDashArray);
      u2.node.classList.add("apexcharts-gridline"), d2 && l2.config.grid.show ? this.elGridBorders.add(u2) : o2.add(u2);
    }
  }, {
    key: "_drawGridBandRect",
    value: function(t3) {
      var e2 = t3.c, i2 = t3.x1, a2 = t3.y1, s2 = t3.x2, r2 = t3.y2, n2 = t3.type, o2 = this.w, l2 = new Mi(this.ctx), h2 = o2.globals.barPadForNumericAxis, c2 = o2.config.grid[n2].colors[e2], d2 = l2.drawRect(i2 - ("row" === n2 ? h2 : 0), a2, s2 + ("row" === n2 ? 2 * h2 : 0), r2, 0, c2, o2.config.grid[n2].opacity);
      this.elg.add(d2), d2.attr("clip-path", "url(#gridRectMask".concat(o2.globals.cuid, ")")), d2.node.classList.add("apexcharts-grid-".concat(n2));
    }
  }, {
    key: "_drawXYLines",
    value: function(t3) {
      var e2 = this, i2 = t3.xCount, a2 = t3.tickAmount, s2 = this.w;
      if (s2.config.grid.xaxis.lines.show || s2.config.xaxis.axisTicks.show) {
        var r2, n2 = s2.globals.padHorizontal, o2 = s2.globals.gridHeight;
        s2.globals.timescaleLabels.length ? function(t4) {
          for (var a3 = t4.xC, s3 = t4.x1, r3 = t4.y1, n3 = t4.x2, o3 = t4.y2, l3 = 0; l3 < a3; l3++) s3 = e2.xaxisLabels[l3].position, n3 = e2.xaxisLabels[l3].position, e2._drawGridLines({
            i: l3,
            x1: s3,
            y1: r3,
            x2: n3,
            y2: o3,
            xCount: i2,
            parent: e2.elgridLinesV
          });
        }({
          xC: i2,
          x1: n2,
          y1: 0,
          x2: r2,
          y2: o2
        }) : (s2.globals.isXNumeric && (i2 = s2.globals.xAxisScale.result.length), function(t4) {
          for (var a3 = t4.xC, r3 = t4.x1, n3 = t4.y1, o3 = t4.x2, l3 = t4.y2, h3 = 0; h3 < a3 + (s2.globals.isXNumeric ? 0 : 1); h3++) 0 === h3 && 1 === a3 && 1 === s2.globals.dataPoints && (o3 = r3 = s2.globals.gridWidth / 2), e2._drawGridLines({
            i: h3,
            x1: r3,
            y1: n3,
            x2: o3,
            y2: l3,
            xCount: i2,
            parent: e2.elgridLinesV
          }), o3 = r3 += s2.globals.gridWidth / (s2.globals.isXNumeric ? a3 - 1 : a3);
        }({
          xC: i2,
          x1: n2,
          y1: 0,
          x2: r2,
          y2: o2
        }));
      }
      if (s2.config.grid.yaxis.lines.show) {
        var l2 = 0, h2 = 0, c2 = s2.globals.gridWidth, d2 = a2 + 1;
        this.isRangeBar && (d2 = s2.globals.labels.length);
        for (var u2 = 0; u2 < d2 + (this.isRangeBar ? 1 : 0); u2++) this._drawGridLine({
          i: u2,
          xCount: d2 + (this.isRangeBar ? 1 : 0),
          x1: 0,
          y1: l2,
          x2: c2,
          y2: h2,
          parent: this.elgridLinesH
        }), h2 = l2 += s2.globals.gridHeight / (this.isRangeBar ? d2 : a2);
      }
    }
  }, {
    key: "_drawInvertedXYLines",
    value: function(t3) {
      var e2 = t3.xCount, i2 = this.w;
      if (i2.config.grid.xaxis.lines.show || i2.config.xaxis.axisTicks.show) for (var a2, s2 = i2.globals.padHorizontal, r2 = i2.globals.gridHeight, n2 = 0; n2 < e2 + 1; n2++) {
        i2.config.grid.xaxis.lines.show && this._drawGridLine({
          i: n2,
          xCount: e2 + 1,
          x1: s2,
          y1: 0,
          x2: a2,
          y2: r2,
          parent: this.elgridLinesV
        }), new Qi(this.ctx).drawXaxisTicks(s2, 0, i2.globals.dom.elGraphical), a2 = s2 += i2.globals.gridWidth / e2;
      }
      if (i2.config.grid.yaxis.lines.show) for (var o2 = 0, l2 = 0, h2 = i2.globals.gridWidth, c2 = 0; c2 < i2.globals.dataPoints + 1; c2++) this._drawGridLine({
        i: c2,
        xCount: i2.globals.dataPoints + 1,
        x1: 0,
        y1: o2,
        x2: h2,
        y2: l2,
        parent: this.elgridLinesH
      }), l2 = o2 += i2.globals.gridHeight / i2.globals.dataPoints;
    }
  }, {
    key: "renderGrid",
    value: function() {
      var t3 = this.w, e2 = t3.globals, i2 = new Mi(this.ctx);
      this.elg = i2.group({
        class: "apexcharts-grid"
      }), this.elgridLinesH = i2.group({
        class: "apexcharts-gridlines-horizontal"
      }), this.elgridLinesV = i2.group({
        class: "apexcharts-gridlines-vertical"
      }), this.elGridBorders = i2.group({
        class: "apexcharts-grid-borders"
      }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), t3.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide(), this.elGridBorders.hide());
      for (var a2 = 0; a2 < e2.seriesYAxisMap.length && e2.ignoreYAxisIndexes.includes(a2); ) a2++;
      a2 === e2.seriesYAxisMap.length && (a2 = 0);
      var s2, r2 = e2.yAxisScale[a2].result.length - 1;
      if (!e2.isBarHorizontal || this.isRangeBar) {
        var n2, o2, l2;
        if (s2 = this.xaxisLabels.length, this.isRangeBar) r2 = e2.labels.length, t3.config.xaxis.tickAmount && t3.config.xaxis.labels.formatter && (s2 = t3.config.xaxis.tickAmount), (null === (n2 = e2.yAxisScale) || void 0 === n2 || null === (o2 = n2[a2]) || void 0 === o2 || null === (l2 = o2.result) || void 0 === l2 ? void 0 : l2.length) > 0 && "datetime" !== t3.config.xaxis.type && (s2 = e2.yAxisScale[a2].result.length - 1);
        this._drawXYLines({
          xCount: s2,
          tickAmount: r2
        });
      } else s2 = r2, r2 = e2.xTickAmount, this._drawInvertedXYLines({
        xCount: s2,
        tickAmount: r2
      });
      return this.drawGridBands(s2, r2), {
        el: this.elg,
        elGridBorders: this.elGridBorders,
        xAxisTickWidth: e2.gridWidth / s2
      };
    }
  }, {
    key: "drawGridBands",
    value: function(t3, e2) {
      var i2, a2, s2 = this, r2 = this.w;
      if ((null === (i2 = r2.config.grid.row.colors) || void 0 === i2 ? void 0 : i2.length) > 0 && function(t4, i3, a3, n3, o3, l3) {
        for (var h3 = 0, c3 = 0; h3 < i3; h3++, c3++) c3 >= r2.config.grid[t4].colors.length && (c3 = 0), s2._drawGridBandRect({
          c: c3,
          x1: a3,
          y1: n3,
          x2: o3,
          y2: l3,
          type: t4
        }), n3 += r2.globals.gridHeight / e2;
      }("row", e2, 0, 0, r2.globals.gridWidth, r2.globals.gridHeight / e2), (null === (a2 = r2.config.grid.column.colors) || void 0 === a2 ? void 0 : a2.length) > 0) {
        var n2 = r2.globals.isBarHorizontal || "on" !== r2.config.xaxis.tickPlacement || "category" !== r2.config.xaxis.type && !r2.config.xaxis.convertedCatToNumeric ? t3 : t3 - 1;
        r2.globals.isXNumeric && (n2 = r2.globals.xAxisScale.result.length - 1);
        for (var o2 = r2.globals.padHorizontal, l2 = r2.globals.padHorizontal + r2.globals.gridWidth / n2, h2 = r2.globals.gridHeight, c2 = 0, d2 = 0; c2 < t3; c2++, d2++) {
          var u2;
          if (d2 >= r2.config.grid.column.colors.length && (d2 = 0), "datetime" === r2.config.xaxis.type) o2 = this.xaxisLabels[c2].position, l2 = ((null === (u2 = this.xaxisLabels[c2 + 1]) || void 0 === u2 ? void 0 : u2.position) || r2.globals.gridWidth) - this.xaxisLabels[c2].position;
          this._drawGridBandRect({
            c: d2,
            x1: o2,
            y1: 0,
            x2: l2,
            y2: h2,
            type: "column"
          }), o2 += r2.globals.gridWidth / n2;
        }
      }
    }
  }]), t2;
}();
var ta = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.coreUtils = new Pi(this.ctx);
  }
  return s(t2, [{
    key: "niceScale",
    value: function(t3, e2) {
      var i2, a2, s2, r2, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, o2 = 1e-11, l2 = this.w, h2 = l2.globals;
      h2.isBarHorizontal ? (i2 = l2.config.xaxis, a2 = Math.max((h2.svgWidth - 100) / 25, 2)) : (i2 = l2.config.yaxis[n2], a2 = Math.max((h2.svgHeight - 100) / 15, 2)), v.isNumber(a2) || (a2 = 10), s2 = void 0 !== i2.min && null !== i2.min, r2 = void 0 !== i2.max && null !== i2.min;
      var c2 = void 0 !== i2.stepSize && null !== i2.stepSize, d2 = void 0 !== i2.tickAmount && null !== i2.tickAmount, u2 = d2 ? i2.tickAmount : h2.niceScaleDefaultTicks[Math.min(Math.round(a2 / 2), h2.niceScaleDefaultTicks.length - 1)];
      if (h2.isMultipleYAxis && !d2 && h2.multiAxisTickAmount > 0 && (u2 = h2.multiAxisTickAmount, d2 = true), u2 = "dataPoints" === u2 ? h2.dataPoints - 1 : Math.abs(Math.round(u2)), (t3 === Number.MIN_VALUE && 0 === e2 || !v.isNumber(t3) && !v.isNumber(e2) || t3 === Number.MIN_VALUE && e2 === -Number.MAX_VALUE) && (t3 = v.isNumber(i2.min) ? i2.min : 0, e2 = v.isNumber(i2.max) ? i2.max : t3 + u2, h2.allSeriesCollapsed = false), t3 > e2) {
        console.warn("axis.min cannot be greater than axis.max: swapping min and max");
        var g2 = e2;
        e2 = t3, t3 = g2;
      } else t3 === e2 && (t3 = 0 === t3 ? 0 : t3 - 1, e2 = 0 === e2 ? 2 : e2 + 1);
      var p2 = [];
      u2 < 1 && (u2 = 1);
      var f2 = u2, x2 = Math.abs(e2 - t3);
      !s2 && t3 > 0 && t3 / x2 < 0.15 && (t3 = 0, s2 = true), !r2 && e2 < 0 && -e2 / x2 < 0.15 && (e2 = 0, r2 = true);
      var b2 = (x2 = Math.abs(e2 - t3)) / f2, m2 = b2, y2 = Math.floor(Math.log10(m2)), w2 = Math.pow(10, y2), k2 = Math.ceil(m2 / w2);
      if (b2 = m2 = (k2 = h2.niceScaleAllowedMagMsd[0 === h2.yValueDecimal ? 0 : 1][k2]) * w2, h2.isBarHorizontal && i2.stepSize && "datetime" !== i2.type ? (b2 = i2.stepSize, c2 = true) : c2 && (b2 = i2.stepSize), c2 && i2.forceNiceScale) {
        var A2 = Math.floor(Math.log10(b2));
        b2 *= Math.pow(10, y2 - A2);
      }
      if (s2 && r2) {
        var C2 = x2 / f2;
        if (d2) {
          if (c2) {
            if (0 != v.mod(x2, b2)) {
              var S2 = v.getGCD(b2, C2);
              b2 = C2 / S2 < 10 ? S2 : C2;
            } else 0 == v.mod(b2, C2) ? b2 = C2 : (C2 = b2, d2 = false);
          } else b2 = C2;
        } else if (c2) 0 == v.mod(x2, b2) ? C2 = b2 : b2 = C2;
        else if (0 == v.mod(x2, b2)) C2 = b2;
        else {
          C2 = x2 / (f2 = Math.ceil(x2 / b2));
          var L2 = v.getGCD(x2, b2);
          x2 / L2 < a2 && (C2 = L2), b2 = C2;
        }
        f2 = Math.round(x2 / b2);
      } else {
        if (s2 || r2) {
          if (r2) {
            if (d2) t3 = e2 - b2 * f2;
            else {
              var M2 = t3;
              t3 = b2 * Math.floor(t3 / b2), Math.abs(e2 - t3) / v.getGCD(x2, b2) > a2 && (t3 = e2 - b2 * u2, t3 += b2 * Math.floor((M2 - t3) / b2));
            }
          } else if (s2) if (d2) e2 = t3 + b2 * f2;
          else {
            var P2 = e2;
            e2 = b2 * Math.ceil(e2 / b2), Math.abs(e2 - t3) / v.getGCD(x2, b2) > a2 && (e2 = t3 + b2 * u2, e2 += b2 * Math.ceil((P2 - e2) / b2));
          }
        } else if (h2.isMultipleYAxis && d2) {
          var I2 = b2 * Math.floor(t3 / b2), T2 = I2 + b2 * f2;
          T2 < e2 && (b2 *= 2), T2 = e2, e2 = (t3 = I2) + b2 * f2, x2 = Math.abs(e2 - t3), t3 > 0 && t3 < Math.abs(T2 - e2) && (t3 = 0, e2 = b2 * f2), e2 < 0 && -e2 < Math.abs(I2 - t3) && (e2 = 0, t3 = -b2 * f2);
        } else t3 = b2 * Math.floor(t3 / b2), e2 = b2 * Math.ceil(e2 / b2);
        x2 = Math.abs(e2 - t3), b2 = v.getGCD(x2, b2), f2 = Math.round(x2 / b2);
      }
      if (d2 || s2 || r2 || (f2 = Math.ceil((x2 - o2) / (b2 + o2))) > 16 && v.getPrimeFactors(f2).length < 2 && f2++, !d2 && i2.forceNiceScale && 0 === h2.yValueDecimal && f2 > x2 && (f2 = x2, b2 = Math.round(x2 / f2)), f2 > a2 && (!d2 && !c2 || i2.forceNiceScale)) {
        var z2 = v.getPrimeFactors(f2), X2 = z2.length - 1, R2 = f2;
        t: for (var E2 = 0; E2 < X2; E2++) for (var Y2 = 0; Y2 <= X2 - E2; Y2++) {
          for (var H2 = Math.min(Y2 + E2, X2), O2 = R2, F2 = 1, D2 = Y2; D2 <= H2; D2++) F2 *= z2[D2];
          if ((O2 /= F2) < a2) {
            R2 = O2;
            break t;
          }
        }
        b2 = R2 === f2 ? x2 : x2 / R2, f2 = Math.round(x2 / b2);
      }
      h2.isMultipleYAxis && 0 == h2.multiAxisTickAmount && h2.ignoreYAxisIndexes.indexOf(n2) < 0 && (h2.multiAxisTickAmount = f2);
      var _2 = t3 - b2, N2 = b2 * o2;
      do {
        _2 += b2, p2.push(v.stripNumber(_2, 7));
      } while (e2 - _2 > N2);
      return {
        result: p2,
        niceMin: p2[0],
        niceMax: p2[p2.length - 1]
      };
    }
  }, {
    key: "linearScale",
    value: function(t3, e2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10, a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, s2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0, r2 = Math.abs(e2 - t3), n2 = [];
      if (t3 === e2) return {
        result: n2 = [t3],
        niceMin: n2[0],
        niceMax: n2[n2.length - 1]
      };
      "dataPoints" === (i2 = this._adjustTicksForSmallRange(i2, a2, r2)) && (i2 = this.w.globals.dataPoints - 1), s2 || (s2 = r2 / i2), s2 = Math.round(100 * (s2 + Number.EPSILON)) / 100, i2 === Number.MAX_VALUE && (i2 = 5, s2 = 1);
      for (var o2 = t3; i2 >= 0; ) n2.push(o2), o2 = v.preciseAddition(o2, s2), i2 -= 1;
      return {
        result: n2,
        niceMin: n2[0],
        niceMax: n2[n2.length - 1]
      };
    }
  }, {
    key: "logarithmicScaleNice",
    value: function(t3, e2, i2) {
      e2 <= 0 && (e2 = Math.max(t3, i2)), t3 <= 0 && (t3 = Math.min(e2, i2));
      for (var a2 = [], s2 = Math.ceil(Math.log(e2) / Math.log(i2) + 1), r2 = Math.floor(Math.log(t3) / Math.log(i2)); r2 < s2; r2++) a2.push(Math.pow(i2, r2));
      return {
        result: a2,
        niceMin: a2[0],
        niceMax: a2[a2.length - 1]
      };
    }
  }, {
    key: "logarithmicScale",
    value: function(t3, e2, i2) {
      e2 <= 0 && (e2 = Math.max(t3, i2)), t3 <= 0 && (t3 = Math.min(e2, i2));
      for (var a2 = [], s2 = Math.log(e2) / Math.log(i2), r2 = Math.log(t3) / Math.log(i2), n2 = s2 - r2, o2 = Math.round(n2), l2 = n2 / o2, h2 = 0, c2 = r2; h2 < o2; h2++, c2 += l2) a2.push(Math.pow(i2, c2));
      return a2.push(Math.pow(i2, s2)), {
        result: a2,
        niceMin: t3,
        niceMax: e2
      };
    }
  }, {
    key: "_adjustTicksForSmallRange",
    value: function(t3, e2, i2) {
      var a2 = t3;
      if (void 0 !== e2 && this.w.config.yaxis[e2].labels.formatter && void 0 === this.w.config.yaxis[e2].tickAmount) {
        var s2 = Number(this.w.config.yaxis[e2].labels.formatter(1));
        v.isNumber(s2) && 0 === this.w.globals.yValueDecimal && (a2 = Math.ceil(i2));
      }
      return a2 < t3 ? a2 : t3;
    }
  }, {
    key: "setYScaleForIndex",
    value: function(t3, e2, i2) {
      var a2 = this.w.globals, s2 = this.w.config, r2 = a2.isBarHorizontal ? s2.xaxis : s2.yaxis[t3];
      void 0 === a2.yAxisScale[t3] && (a2.yAxisScale[t3] = []);
      var n2 = Math.abs(i2 - e2);
      r2.logarithmic && n2 <= 5 && (a2.invalidLogScale = true), r2.logarithmic && n2 > 5 ? (a2.allSeriesCollapsed = false, a2.yAxisScale[t3] = r2.forceNiceScale ? this.logarithmicScaleNice(e2, i2, r2.logBase) : this.logarithmicScale(e2, i2, r2.logBase)) : i2 !== -Number.MAX_VALUE && v.isNumber(i2) && e2 !== Number.MAX_VALUE && v.isNumber(e2) ? (a2.allSeriesCollapsed = false, a2.yAxisScale[t3] = this.niceScale(e2, i2, t3)) : a2.yAxisScale[t3] = this.niceScale(Number.MIN_VALUE, 0, t3);
    }
  }, {
    key: "setXScale",
    value: function(t3, e2) {
      var i2 = this.w, a2 = i2.globals;
      if (e2 !== -Number.MAX_VALUE && v.isNumber(e2)) {
        var s2 = a2.xTickAmount;
        a2.xAxisScale = this.linearScale(t3, e2, s2, 0, i2.config.xaxis.stepSize);
      } else a2.xAxisScale = this.linearScale(0, 10, 10);
      return a2.xAxisScale;
    }
  }, {
    key: "scaleMultipleYAxes",
    value: function() {
      var t3 = this, e2 = this.w.config, i2 = this.w.globals;
      this.coreUtils.setSeriesYAxisMappings();
      var a2 = i2.seriesYAxisMap, s2 = i2.minYArr, r2 = i2.maxYArr;
      i2.allSeriesCollapsed = true, i2.barGroups = [], a2.forEach(function(a3, n2) {
        var o2 = [];
        a3.forEach(function(t4) {
          var i3, a4 = null === (i3 = e2.series[t4]) || void 0 === i3 ? void 0 : i3.group;
          o2.indexOf(a4) < 0 && o2.push(a4);
        }), a3.length > 0 ? function() {
          var l2, h2, c2 = Number.MAX_VALUE, d2 = -Number.MAX_VALUE, u2 = c2, g2 = d2;
          if (e2.chart.stacked) !function() {
            var t4 = new Array(i2.dataPoints).fill(0), s3 = [], r3 = [], p3 = [];
            o2.forEach(function() {
              s3.push(t4.map(function() {
                return Number.MIN_VALUE;
              })), r3.push(t4.map(function() {
                return Number.MIN_VALUE;
              })), p3.push(t4.map(function() {
                return Number.MIN_VALUE;
              }));
            });
            for (var f3 = function(t5) {
              !l2 && e2.series[a3[t5]].type && (l2 = e2.series[a3[t5]].type);
              var c3 = a3[t5];
              h2 = e2.series[c3].group ? e2.series[c3].group : "axis-".concat(n2), !(i2.collapsedSeriesIndices.indexOf(c3) < 0 && i2.ancillaryCollapsedSeriesIndices.indexOf(c3) < 0) || (i2.allSeriesCollapsed = false, o2.forEach(function(t6, a4) {
                if (e2.series[c3].group === t6) for (var n3 = 0; n3 < i2.series[c3].length; n3++) {
                  var o3 = i2.series[c3][n3];
                  o3 >= 0 ? r3[a4][n3] += o3 : p3[a4][n3] += o3, s3[a4][n3] += o3, u2 = Math.min(u2, o3), g2 = Math.max(g2, o3);
                }
              })), "bar" !== l2 && "column" !== l2 || i2.barGroups.push(h2);
            }, x2 = 0; x2 < a3.length; x2++) f3(x2);
            l2 || (l2 = e2.chart.type), "bar" === l2 || "column" === l2 ? o2.forEach(function(t5, e3) {
              c2 = Math.min(c2, Math.min.apply(null, p3[e3])), d2 = Math.max(d2, Math.max.apply(null, r3[e3]));
            }) : (o2.forEach(function(t5, e3) {
              u2 = Math.min(u2, Math.min.apply(null, s3[e3])), g2 = Math.max(g2, Math.max.apply(null, s3[e3]));
            }), c2 = u2, d2 = g2), c2 === Number.MIN_VALUE && d2 === Number.MIN_VALUE && (d2 = -Number.MAX_VALUE);
          }();
          else for (var p2 = 0; p2 < a3.length; p2++) {
            var f2 = a3[p2];
            c2 = Math.min(c2, s2[f2]), d2 = Math.max(d2, r2[f2]), !(i2.collapsedSeriesIndices.indexOf(f2) < 0 && i2.ancillaryCollapsedSeriesIndices.indexOf(f2) < 0) || (i2.allSeriesCollapsed = false);
          }
          void 0 !== e2.yaxis[n2].min && (c2 = "function" == typeof e2.yaxis[n2].min ? e2.yaxis[n2].min(c2) : e2.yaxis[n2].min), void 0 !== e2.yaxis[n2].max && (d2 = "function" == typeof e2.yaxis[n2].max ? e2.yaxis[n2].max(d2) : e2.yaxis[n2].max), i2.barGroups = i2.barGroups.filter(function(t4, e3, i3) {
            return i3.indexOf(t4) === e3;
          }), t3.setYScaleForIndex(n2, c2, d2), a3.forEach(function(t4) {
            s2[t4] = i2.yAxisScale[n2].niceMin, r2[t4] = i2.yAxisScale[n2].niceMax;
          });
        }() : t3.setYScaleForIndex(n2, 0, -Number.MAX_VALUE);
      });
    }
  }]), t2;
}();
var ea = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.scales = new ta(e2);
  }
  return s(t2, [{
    key: "init",
    value: function() {
      this.setYRange(), this.setXRange(), this.setZRange();
    }
  }, {
    key: "getMinYMaxY",
    value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE, i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -Number.MAX_VALUE, a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, s2 = this.w.config, r2 = this.w.globals, n2 = -Number.MAX_VALUE, o2 = Number.MIN_VALUE;
      null === a2 && (a2 = t3 + 1);
      var l2 = r2.series, h2 = l2, c2 = l2;
      "candlestick" === s2.chart.type ? (h2 = r2.seriesCandleL, c2 = r2.seriesCandleH) : "boxPlot" === s2.chart.type ? (h2 = r2.seriesCandleO, c2 = r2.seriesCandleC) : r2.isRangeData && (h2 = r2.seriesRangeStart, c2 = r2.seriesRangeEnd);
      var d2 = false;
      if (r2.seriesX.length >= a2) {
        var u2, g2 = null === (u2 = r2.brushSource) || void 0 === u2 ? void 0 : u2.w.config.chart.brush;
        (s2.chart.zoom.enabled && s2.chart.zoom.autoScaleYaxis || null != g2 && g2.enabled && null != g2 && g2.autoScaleYaxis) && (d2 = true);
      }
      for (var p2 = t3; p2 < a2; p2++) {
        r2.dataPoints = Math.max(r2.dataPoints, l2[p2].length);
        var f2 = s2.series[p2].type;
        r2.categoryLabels.length && (r2.dataPoints = r2.categoryLabels.filter(function(t4) {
          return void 0 !== t4;
        }).length), r2.labels.length && "datetime" !== s2.xaxis.type && 0 !== r2.series.reduce(function(t4, e3) {
          return t4 + e3.length;
        }, 0) && (r2.dataPoints = Math.max(r2.dataPoints, r2.labels.length));
        var x2 = 0, b2 = l2[p2].length - 1;
        if (d2) {
          if (s2.xaxis.min) for (; x2 < b2 && r2.seriesX[p2][x2] < s2.xaxis.min; x2++) ;
          if (s2.xaxis.max) for (; b2 > x2 && r2.seriesX[p2][b2] > s2.xaxis.max; b2--) ;
        }
        for (var m2 = x2; m2 <= b2 && m2 < r2.series[p2].length; m2++) {
          var y2 = l2[p2][m2];
          if (null !== y2 && v.isNumber(y2)) {
            switch (void 0 !== c2[p2][m2] && (n2 = Math.max(n2, c2[p2][m2]), e2 = Math.min(e2, c2[p2][m2])), void 0 !== h2[p2][m2] && (e2 = Math.min(e2, h2[p2][m2]), i2 = Math.max(i2, h2[p2][m2])), f2) {
              case "candlestick":
                void 0 !== r2.seriesCandleC[p2][m2] && (n2 = Math.max(n2, r2.seriesCandleH[p2][m2]), e2 = Math.min(e2, r2.seriesCandleL[p2][m2]));
                break;
              case "boxPlot":
                void 0 !== r2.seriesCandleC[p2][m2] && (n2 = Math.max(n2, r2.seriesCandleC[p2][m2]), e2 = Math.min(e2, r2.seriesCandleO[p2][m2]));
            }
            f2 && "candlestick" !== f2 && "boxPlot" !== f2 && "rangeArea" !== f2 && "rangeBar" !== f2 && (n2 = Math.max(n2, r2.series[p2][m2]), e2 = Math.min(e2, r2.series[p2][m2])), r2.seriesGoals[p2] && r2.seriesGoals[p2][m2] && Array.isArray(r2.seriesGoals[p2][m2]) && r2.seriesGoals[p2][m2].forEach(function(t4) {
              n2 = Math.max(n2, t4.value), e2 = Math.min(e2, t4.value);
            }), i2 = n2, y2 = v.noExponents(y2), v.isFloat(y2) && (r2.yValueDecimal = Math.max(r2.yValueDecimal, y2.toString().split(".")[1].length)), o2 > h2[p2][m2] && h2[p2][m2] < 0 && (o2 = h2[p2][m2]);
          } else r2.hasNullValues = true;
        }
        "bar" !== f2 && "column" !== f2 || (o2 < 0 && n2 < 0 && (n2 = 0, i2 = Math.max(i2, 0)), o2 === Number.MIN_VALUE && (o2 = 0, e2 = Math.min(e2, 0)));
      }
      return "rangeBar" === s2.chart.type && r2.seriesRangeStart.length && r2.isBarHorizontal && (o2 = e2), "bar" === s2.chart.type && (o2 < 0 && n2 < 0 && (n2 = 0), o2 === Number.MIN_VALUE && (o2 = 0)), {
        minY: o2,
        maxY: n2,
        lowestY: e2,
        highestY: i2
      };
    }
  }, {
    key: "setYRange",
    value: function() {
      var t3 = this.w.globals, e2 = this.w.config;
      t3.maxY = -Number.MAX_VALUE, t3.minY = Number.MIN_VALUE;
      var i2, a2 = Number.MAX_VALUE;
      if (t3.isMultipleYAxis) {
        a2 = Number.MAX_VALUE;
        for (var s2 = 0; s2 < t3.series.length; s2++) i2 = this.getMinYMaxY(s2), t3.minYArr[s2] = i2.lowestY, t3.maxYArr[s2] = i2.highestY, a2 = Math.min(a2, i2.lowestY);
      }
      if (i2 = this.getMinYMaxY(0, a2, null, t3.series.length), "bar" === e2.chart.type ? (t3.minY = i2.minY, t3.maxY = i2.maxY) : (t3.minY = i2.lowestY, t3.maxY = i2.highestY), a2 = i2.lowestY, e2.chart.stacked && this._setStackedMinMax(), "line" === e2.chart.type || "area" === e2.chart.type || "scatter" === e2.chart.type || "candlestick" === e2.chart.type || "boxPlot" === e2.chart.type || "rangeBar" === e2.chart.type && !t3.isBarHorizontal ? t3.minY === Number.MIN_VALUE && a2 !== -Number.MAX_VALUE && a2 !== t3.maxY && (t3.minY = a2) : t3.minY = t3.minY !== Number.MIN_VALUE ? Math.min(i2.minY, t3.minY) : i2.minY, e2.yaxis.forEach(function(e3, i3) {
        void 0 !== e3.max && ("number" == typeof e3.max ? t3.maxYArr[i3] = e3.max : "function" == typeof e3.max && (t3.maxYArr[i3] = e3.max(t3.isMultipleYAxis ? t3.maxYArr[i3] : t3.maxY)), t3.maxY = t3.maxYArr[i3]), void 0 !== e3.min && ("number" == typeof e3.min ? t3.minYArr[i3] = e3.min : "function" == typeof e3.min && (t3.minYArr[i3] = e3.min(t3.isMultipleYAxis ? t3.minYArr[i3] === Number.MIN_VALUE ? 0 : t3.minYArr[i3] : t3.minY)), t3.minY = t3.minYArr[i3]);
      }), t3.isBarHorizontal) {
        ["min", "max"].forEach(function(i3) {
          void 0 !== e2.xaxis[i3] && "number" == typeof e2.xaxis[i3] && ("min" === i3 ? t3.minY = e2.xaxis[i3] : t3.maxY = e2.xaxis[i3]);
        });
      }
      return t3.isMultipleYAxis ? (this.scales.scaleMultipleYAxes(), t3.minY = a2) : (this.scales.setYScaleForIndex(0, t3.minY, t3.maxY), t3.minY = t3.yAxisScale[0].niceMin, t3.maxY = t3.yAxisScale[0].niceMax, t3.minYArr[0] = t3.minY, t3.maxYArr[0] = t3.maxY), t3.barGroups = [], t3.lineGroups = [], t3.areaGroups = [], e2.series.forEach(function(i3) {
        switch (i3.type || e2.chart.type) {
          case "bar":
          case "column":
            t3.barGroups.push(i3.group);
            break;
          case "line":
            t3.lineGroups.push(i3.group);
            break;
          case "area":
            t3.areaGroups.push(i3.group);
        }
      }), t3.barGroups = t3.barGroups.filter(function(t4, e3, i3) {
        return i3.indexOf(t4) === e3;
      }), t3.lineGroups = t3.lineGroups.filter(function(t4, e3, i3) {
        return i3.indexOf(t4) === e3;
      }), t3.areaGroups = t3.areaGroups.filter(function(t4, e3, i3) {
        return i3.indexOf(t4) === e3;
      }), {
        minY: t3.minY,
        maxY: t3.maxY,
        minYArr: t3.minYArr,
        maxYArr: t3.maxYArr,
        yAxisScale: t3.yAxisScale
      };
    }
  }, {
    key: "setXRange",
    value: function() {
      var t3 = this.w.globals, e2 = this.w.config, i2 = "numeric" === e2.xaxis.type || "datetime" === e2.xaxis.type || "category" === e2.xaxis.type && !t3.noLabelsProvided || t3.noLabelsProvided || t3.isXNumeric;
      if (t3.isXNumeric && function() {
        for (var e3 = 0; e3 < t3.series.length; e3++) if (t3.labels[e3]) for (var i3 = 0; i3 < t3.labels[e3].length; i3++) null !== t3.labels[e3][i3] && v.isNumber(t3.labels[e3][i3]) && (t3.maxX = Math.max(t3.maxX, t3.labels[e3][i3]), t3.initialMaxX = Math.max(t3.maxX, t3.labels[e3][i3]), t3.minX = Math.min(t3.minX, t3.labels[e3][i3]), t3.initialMinX = Math.min(t3.minX, t3.labels[e3][i3]));
      }(), t3.noLabelsProvided && 0 === e2.xaxis.categories.length && (t3.maxX = t3.labels[t3.labels.length - 1], t3.initialMaxX = t3.labels[t3.labels.length - 1], t3.minX = 1, t3.initialMinX = 1), t3.isXNumeric || t3.noLabelsProvided || t3.dataFormatXNumeric) {
        var a2 = 10;
        if (void 0 === e2.xaxis.tickAmount) a2 = Math.round(t3.svgWidth / 150), "numeric" === e2.xaxis.type && t3.dataPoints < 30 && (a2 = t3.dataPoints - 1), a2 > t3.dataPoints && 0 !== t3.dataPoints && (a2 = t3.dataPoints - 1);
        else if ("dataPoints" === e2.xaxis.tickAmount) {
          if (t3.series.length > 1 && (a2 = t3.series[t3.maxValsInArrayIndex].length - 1), t3.isXNumeric) {
            var s2 = Math.round(t3.maxX - t3.minX);
            s2 < 30 && (a2 = s2 - 1);
          }
        } else a2 = e2.xaxis.tickAmount;
        if (t3.xTickAmount = a2, void 0 !== e2.xaxis.max && "number" == typeof e2.xaxis.max && (t3.maxX = e2.xaxis.max), void 0 !== e2.xaxis.min && "number" == typeof e2.xaxis.min && (t3.minX = e2.xaxis.min), void 0 !== e2.xaxis.range && (t3.minX = t3.maxX - e2.xaxis.range), t3.minX !== Number.MAX_VALUE && t3.maxX !== -Number.MAX_VALUE) {
          if (e2.xaxis.convertedCatToNumeric && !t3.dataFormatXNumeric) {
            for (var r2 = [], n2 = t3.minX - 1; n2 < t3.maxX; n2++) r2.push(n2 + 1);
            t3.xAxisScale = {
              result: r2,
              niceMin: r2[0],
              niceMax: r2[r2.length - 1]
            };
          } else t3.xAxisScale = this.scales.setXScale(t3.minX, t3.maxX);
        } else t3.xAxisScale = this.scales.linearScale(0, a2, a2, 0, e2.xaxis.stepSize), t3.noLabelsProvided && t3.labels.length > 0 && (t3.xAxisScale = this.scales.linearScale(1, t3.labels.length, a2 - 1, 0, e2.xaxis.stepSize), t3.seriesX = t3.labels.slice());
        i2 && (t3.labels = t3.xAxisScale.result.slice());
      }
      return t3.isBarHorizontal && t3.labels.length && (t3.xTickAmount = t3.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), {
        minX: t3.minX,
        maxX: t3.maxX
      };
    }
  }, {
    key: "setZRange",
    value: function() {
      var t3 = this.w.globals;
      if (t3.isDataXYZ) {
        for (var e2 = 0; e2 < t3.series.length; e2++) if (void 0 !== t3.seriesZ[e2]) for (var i2 = 0; i2 < t3.seriesZ[e2].length; i2++) null !== t3.seriesZ[e2][i2] && v.isNumber(t3.seriesZ[e2][i2]) && (t3.maxZ = Math.max(t3.maxZ, t3.seriesZ[e2][i2]), t3.minZ = Math.min(t3.minZ, t3.seriesZ[e2][i2]));
      }
    }
  }, {
    key: "_handleSingleDataPoint",
    value: function() {
      var t3 = this.w.globals, e2 = this.w.config;
      if (t3.minX === t3.maxX) {
        var i2 = new zi(this.ctx);
        if ("datetime" === e2.xaxis.type) {
          var a2 = i2.getDate(t3.minX);
          e2.xaxis.labels.datetimeUTC ? a2.setUTCDate(a2.getUTCDate() - 2) : a2.setDate(a2.getDate() - 2), t3.minX = new Date(a2).getTime();
          var s2 = i2.getDate(t3.maxX);
          e2.xaxis.labels.datetimeUTC ? s2.setUTCDate(s2.getUTCDate() + 2) : s2.setDate(s2.getDate() + 2), t3.maxX = new Date(s2).getTime();
        } else ("numeric" === e2.xaxis.type || "category" === e2.xaxis.type && !t3.noLabelsProvided) && (t3.minX = t3.minX - 2, t3.initialMinX = t3.minX, t3.maxX = t3.maxX + 2, t3.initialMaxX = t3.maxX);
      }
    }
  }, {
    key: "_getMinXDiff",
    value: function() {
      var t3 = this.w.globals;
      t3.isXNumeric && t3.seriesX.forEach(function(e2, i2) {
        if (e2.length) {
          1 === e2.length && e2.push(t3.seriesX[t3.maxValsInArrayIndex][t3.seriesX[t3.maxValsInArrayIndex].length - 1]);
          var a2 = e2.slice();
          a2.sort(function(t4, e3) {
            return t4 - e3;
          }), a2.forEach(function(e3, i3) {
            if (i3 > 0) {
              var s2 = e3 - a2[i3 - 1];
              s2 > 0 && (t3.minXDiff = Math.min(s2, t3.minXDiff));
            }
          }), 1 !== t3.dataPoints && t3.minXDiff !== Number.MAX_VALUE || (t3.minXDiff = 0.5);
        }
      });
    }
  }, {
    key: "_setStackedMinMax",
    value: function() {
      var t3 = this, e2 = this.w.globals;
      if (e2.series.length) {
        var i2 = e2.seriesGroups;
        i2.length || (i2 = [this.w.globals.seriesNames.map(function(t4) {
          return t4;
        })]);
        var a2 = {}, s2 = {};
        i2.forEach(function(i3) {
          a2[i3] = [], s2[i3] = [], t3.w.config.series.map(function(t4, a3) {
            return i3.indexOf(e2.seriesNames[a3]) > -1 ? a3 : null;
          }).filter(function(t4) {
            return null !== t4;
          }).forEach(function(r2) {
            for (var n2 = 0; n2 < e2.series[e2.maxValsInArrayIndex].length; n2++) {
              var o2, l2, h2, c2;
              void 0 === a2[i3][n2] && (a2[i3][n2] = 0, s2[i3][n2] = 0), (t3.w.config.chart.stacked && !e2.comboCharts || t3.w.config.chart.stacked && e2.comboCharts && (!t3.w.config.chart.stackOnlyBar || "bar" === (null === (o2 = t3.w.config.series) || void 0 === o2 || null === (l2 = o2[r2]) || void 0 === l2 ? void 0 : l2.type) || "column" === (null === (h2 = t3.w.config.series) || void 0 === h2 || null === (c2 = h2[r2]) || void 0 === c2 ? void 0 : c2.type))) && null !== e2.series[r2][n2] && v.isNumber(e2.series[r2][n2]) && (e2.series[r2][n2] > 0 ? a2[i3][n2] += parseFloat(e2.series[r2][n2]) + 1e-4 : s2[i3][n2] += parseFloat(e2.series[r2][n2]));
            }
          });
        }), Object.entries(a2).forEach(function(t4) {
          var i3 = p(t4, 1)[0];
          a2[i3].forEach(function(t5, r2) {
            e2.maxY = Math.max(e2.maxY, a2[i3][r2]), e2.minY = Math.min(e2.minY, s2[i3][r2]);
          });
        });
      }
    }
  }]), t2;
}();
var ia = function() {
  function t2(e2, a2) {
    i(this, t2), this.ctx = e2, this.elgrid = a2, this.w = e2.w;
    var s2 = this.w;
    this.xaxisFontSize = s2.config.xaxis.labels.style.fontSize, this.axisFontFamily = s2.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = s2.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = "bar" === s2.config.chart.type && s2.config.plotOptions.bar.horizontal, this.xAxisoffX = "bottom" === s2.config.xaxis.position ? s2.globals.gridHeight : 0, this.drawnLabels = [], this.axesUtils = new Ri(e2);
  }
  return s(t2, [{
    key: "drawYaxis",
    value: function(t3) {
      var e2 = this.w, i2 = new Mi(this.ctx), a2 = e2.config.yaxis[t3].labels.style, s2 = a2.fontSize, r2 = a2.fontFamily, n2 = a2.fontWeight, o2 = i2.group({
        class: "apexcharts-yaxis",
        rel: t3,
        transform: "translate(".concat(e2.globals.translateYAxisX[t3], ", 0)")
      });
      if (this.axesUtils.isYAxisHidden(t3)) return o2;
      var l2 = i2.group({
        class: "apexcharts-yaxis-texts-g"
      });
      o2.add(l2);
      var h2 = e2.globals.yAxisScale[t3].result.length - 1, c2 = e2.globals.gridHeight / h2, d2 = e2.globals.yLabelFormatters[t3], u2 = this.axesUtils.checkForReversedLabels(t3, e2.globals.yAxisScale[t3].result.slice());
      if (e2.config.yaxis[t3].labels.show) {
        var g2 = e2.globals.translateY + e2.config.yaxis[t3].labels.offsetY;
        e2.globals.isBarHorizontal ? g2 = 0 : "heatmap" === e2.config.chart.type && (g2 -= c2 / 2), g2 += parseInt(s2, 10) / 3;
        for (var p2 = h2; p2 >= 0; p2--) {
          var f2 = d2(u2[p2], p2, e2), x2 = e2.config.yaxis[t3].labels.padding;
          e2.config.yaxis[t3].opposite && 0 !== e2.config.yaxis.length && (x2 *= -1);
          var b2 = this.getTextAnchor(e2.config.yaxis[t3].labels.align, e2.config.yaxis[t3].opposite), m2 = this.axesUtils.getYAxisForeColor(a2.colors, t3), y2 = Array.isArray(m2) ? m2[p2] : m2, w2 = v.listToArray(e2.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(t3, "'] .apexcharts-yaxis-label tspan"))).map(function(t4) {
            return t4.textContent;
          }), k2 = i2.drawText({
            x: x2,
            y: g2,
            text: w2.includes(f2) && !e2.config.yaxis[t3].labels.showDuplicates ? "" : f2,
            textAnchor: b2,
            fontSize: s2,
            fontFamily: r2,
            fontWeight: n2,
            maxWidth: e2.config.yaxis[t3].labels.maxWidth,
            foreColor: y2,
            isPlainText: false,
            cssClass: "apexcharts-yaxis-label ".concat(a2.cssClass)
          });
          l2.add(k2), this.addTooltip(k2, f2), 0 !== e2.config.yaxis[t3].labels.rotate && this.rotateLabel(i2, k2, firstLabel, e2.config.yaxis[t3].labels.rotate), g2 += c2;
        }
      }
      return this.addYAxisTitle(i2, o2, t3), this.addAxisBorder(i2, o2, t3, h2, c2), o2;
    }
  }, {
    key: "getTextAnchor",
    value: function(t3, e2) {
      return "left" === t3 ? "start" : "center" === t3 ? "middle" : "right" === t3 ? "end" : e2 ? "start" : "end";
    }
  }, {
    key: "addTooltip",
    value: function(t3, e2) {
      var i2 = document.createElementNS(this.w.globals.SVGNS, "title");
      i2.textContent = Array.isArray(e2) ? e2.join(" ") : e2, t3.node.appendChild(i2);
    }
  }, {
    key: "rotateLabel",
    value: function(t3, e2, i2, a2) {
      var s2 = t3.rotateAroundCenter(i2.node), r2 = t3.rotateAroundCenter(e2.node);
      e2.node.setAttribute("transform", "rotate(".concat(a2, " ").concat(s2.x, " ").concat(r2.y, ")"));
    }
  }, {
    key: "addYAxisTitle",
    value: function(t3, e2, i2) {
      var a2 = this.w;
      if (void 0 !== a2.config.yaxis[i2].title.text) {
        var s2 = t3.group({
          class: "apexcharts-yaxis-title"
        }), r2 = a2.config.yaxis[i2].opposite ? a2.globals.translateYAxisX[i2] : 0, n2 = t3.drawText({
          x: r2,
          y: a2.globals.gridHeight / 2 + a2.globals.translateY + a2.config.yaxis[i2].title.offsetY,
          text: a2.config.yaxis[i2].title.text,
          textAnchor: "end",
          foreColor: a2.config.yaxis[i2].title.style.color,
          fontSize: a2.config.yaxis[i2].title.style.fontSize,
          fontWeight: a2.config.yaxis[i2].title.style.fontWeight,
          fontFamily: a2.config.yaxis[i2].title.style.fontFamily,
          cssClass: "apexcharts-yaxis-title-text ".concat(a2.config.yaxis[i2].title.style.cssClass)
        });
        s2.add(n2), e2.add(s2);
      }
    }
  }, {
    key: "addAxisBorder",
    value: function(t3, e2, i2, a2, s2) {
      var r2 = this.w, n2 = r2.config.yaxis[i2].axisBorder, o2 = 31 + n2.offsetX;
      if (r2.config.yaxis[i2].opposite && (o2 = -31 - n2.offsetX), n2.show) {
        var l2 = t3.drawLine(o2, r2.globals.translateY + n2.offsetY - 2, o2, r2.globals.gridHeight + r2.globals.translateY + n2.offsetY + 2, n2.color, 0, n2.width);
        e2.add(l2);
      }
      r2.config.yaxis[i2].axisTicks.show && this.axesUtils.drawYAxisTicks(o2, a2, n2, r2.config.yaxis[i2].axisTicks, i2, s2, e2);
    }
  }, {
    key: "drawYaxisInversed",
    value: function(t3) {
      var e2 = this.w, i2 = new Mi(this.ctx), a2 = i2.group({
        class: "apexcharts-xaxis apexcharts-yaxis-inversed"
      }), s2 = i2.group({
        class: "apexcharts-xaxis-texts-g",
        transform: "translate(".concat(e2.globals.translateXAxisX, ", ").concat(e2.globals.translateXAxisY, ")")
      });
      a2.add(s2);
      var r2 = e2.globals.yAxisScale[t3].result.length - 1, n2 = e2.globals.gridWidth / r2 + 0.1, o2 = n2 + e2.config.xaxis.labels.offsetX, l2 = e2.globals.xLabelFormatter, h2 = this.axesUtils.checkForReversedLabels(t3, e2.globals.yAxisScale[t3].result.slice()), c2 = e2.globals.timescaleLabels;
      if (c2.length > 0 && (this.xaxisLabels = c2.slice(), r2 = (h2 = c2.slice()).length), e2.config.xaxis.labels.show) for (var d2 = c2.length ? 0 : r2; c2.length ? d2 < c2.length : d2 >= 0; c2.length ? d2++ : d2--) {
        var u2 = l2(h2[d2], d2, e2), g2 = e2.globals.gridWidth + e2.globals.padHorizontal - (o2 - n2 + e2.config.xaxis.labels.offsetX);
        if (c2.length) {
          var p2 = this.axesUtils.getLabel(h2, c2, g2, d2, this.drawnLabels, this.xaxisFontSize);
          g2 = p2.x, u2 = p2.text, this.drawnLabels.push(p2.text), 0 === d2 && e2.globals.skipFirstTimelinelabel && (u2 = ""), d2 === h2.length - 1 && e2.globals.skipLastTimelinelabel && (u2 = "");
        }
        var f2 = i2.drawText({
          x: g2,
          y: this.xAxisoffX + e2.config.xaxis.labels.offsetY + 30 - ("top" === e2.config.xaxis.position ? e2.globals.xAxisHeight + e2.config.xaxis.axisTicks.height - 2 : 0),
          text: u2,
          textAnchor: "middle",
          foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t3] : this.xaxisForeColors,
          fontSize: this.xaxisFontSize,
          fontFamily: this.xaxisFontFamily,
          fontWeight: e2.config.xaxis.labels.style.fontWeight,
          isPlainText: false,
          cssClass: "apexcharts-xaxis-label ".concat(e2.config.xaxis.labels.style.cssClass)
        });
        s2.add(f2), f2.tspan(u2), this.addTooltip(f2, u2), o2 += n2;
      }
      return this.inversedYAxisTitleText(a2), this.inversedYAxisBorder(a2), a2;
    }
  }, {
    key: "inversedYAxisBorder",
    value: function(t3) {
      var e2 = this.w, i2 = new Mi(this.ctx), a2 = e2.config.xaxis.axisBorder;
      if (a2.show) {
        var s2 = 0;
        "bar" === e2.config.chart.type && e2.globals.isXNumeric && (s2 -= 15);
        var r2 = i2.drawLine(e2.globals.padHorizontal + s2 + a2.offsetX, this.xAxisoffX, e2.globals.gridWidth, this.xAxisoffX, a2.color, 0, a2.height);
        this.elgrid && this.elgrid.elGridBorders && e2.config.grid.show ? this.elgrid.elGridBorders.add(r2) : t3.add(r2);
      }
    }
  }, {
    key: "inversedYAxisTitleText",
    value: function(t3) {
      var e2 = this.w, i2 = new Mi(this.ctx);
      if (void 0 !== e2.config.xaxis.title.text) {
        var a2 = i2.group({
          class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed"
        }), s2 = i2.drawText({
          x: e2.globals.gridWidth / 2 + e2.config.xaxis.title.offsetX,
          y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(e2.config.xaxis.title.style.fontSize) + e2.config.xaxis.title.offsetY + 20,
          text: e2.config.xaxis.title.text,
          textAnchor: "middle",
          fontSize: e2.config.xaxis.title.style.fontSize,
          fontFamily: e2.config.xaxis.title.style.fontFamily,
          fontWeight: e2.config.xaxis.title.style.fontWeight,
          foreColor: e2.config.xaxis.title.style.color,
          cssClass: "apexcharts-xaxis-title-text ".concat(e2.config.xaxis.title.style.cssClass)
        });
        a2.add(s2), t3.add(a2);
      }
    }
  }, {
    key: "yAxisTitleRotate",
    value: function(t3, e2) {
      var i2 = this.w, a2 = new Mi(this.ctx), s2 = i2.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t3, "'] .apexcharts-yaxis-texts-g")), r2 = s2 ? s2.getBoundingClientRect() : {
        width: 0,
        height: 0
      }, n2 = i2.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t3, "'] .apexcharts-yaxis-title text")), o2 = n2 ? n2.getBoundingClientRect() : {
        width: 0,
        height: 0
      };
      if (n2) {
        var l2 = this.xPaddingForYAxisTitle(t3, r2, o2, e2);
        n2.setAttribute("x", l2.xPos - (e2 ? 10 : 0));
        var h2 = a2.rotateAroundCenter(n2);
        n2.setAttribute("transform", "rotate(".concat(e2 ? -1 * i2.config.yaxis[t3].title.rotate : i2.config.yaxis[t3].title.rotate, " ").concat(h2.x, " ").concat(h2.y, ")"));
      }
    }
  }, {
    key: "xPaddingForYAxisTitle",
    value: function(t3, e2, i2, a2) {
      var s2 = this.w, r2 = 0, n2 = 10;
      return void 0 === s2.config.yaxis[t3].title.text || t3 < 0 ? {
        xPos: r2,
        padd: 0
      } : (a2 ? r2 = e2.width + s2.config.yaxis[t3].title.offsetX + i2.width / 2 + n2 / 2 : (r2 = -1 * e2.width + s2.config.yaxis[t3].title.offsetX + n2 / 2 + i2.width / 2, s2.globals.isBarHorizontal && (n2 = 25, r2 = -1 * e2.width - s2.config.yaxis[t3].title.offsetX - n2)), {
        xPos: r2,
        padd: n2
      });
    }
  }, {
    key: "setYAxisXPosition",
    value: function(t3, e2) {
      var i2 = this.w, a2 = 0, s2 = 0, r2 = 18, n2 = 1;
      i2.config.yaxis.length > 1 && (this.multipleYs = true), i2.config.yaxis.forEach(function(o2, l2) {
        var h2 = i2.globals.ignoreYAxisIndexes.includes(l2) || !o2.show || o2.floating || 0 === t3[l2].width, c2 = t3[l2].width + e2[l2].width;
        o2.opposite ? i2.globals.isBarHorizontal ? (s2 = i2.globals.gridWidth + i2.globals.translateX - 1, i2.globals.translateYAxisX[l2] = s2 - o2.labels.offsetX) : (s2 = i2.globals.gridWidth + i2.globals.translateX + n2, h2 || (n2 += c2 + 20), i2.globals.translateYAxisX[l2] = s2 - o2.labels.offsetX + 20) : (a2 = i2.globals.translateX - r2, h2 || (r2 += c2 + 20), i2.globals.translateYAxisX[l2] = a2 + o2.labels.offsetX);
      });
    }
  }, {
    key: "setYAxisTextAlignments",
    value: function() {
      var t3 = this.w;
      v.listToArray(t3.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis")).forEach(function(e2, i2) {
        var a2 = t3.config.yaxis[i2];
        if (a2 && !a2.floating && void 0 !== a2.labels.align) {
          var s2 = t3.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(i2, "'] .apexcharts-yaxis-texts-g")), r2 = v.listToArray(t3.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(i2, "'] .apexcharts-yaxis-label"))), n2 = s2.getBoundingClientRect();
          r2.forEach(function(t4) {
            t4.setAttribute("text-anchor", a2.labels.align);
          }), "left" !== a2.labels.align || a2.opposite ? "center" === a2.labels.align ? s2.setAttribute("transform", "translate(".concat(n2.width / 2 * (a2.opposite ? 1 : -1), ", 0)")) : "right" === a2.labels.align && a2.opposite && s2.setAttribute("transform", "translate(".concat(n2.width, ", 0)")) : s2.setAttribute("transform", "translate(-".concat(n2.width, ", 0)"));
        }
      });
    }
  }]), t2;
}();
var aa = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.documentEvent = v.bind(this.documentEvent, this);
  }
  return s(t2, [{
    key: "addEventListener",
    value: function(t3, e2) {
      var i2 = this.w;
      i2.globals.events.hasOwnProperty(t3) ? i2.globals.events[t3].push(e2) : i2.globals.events[t3] = [e2];
    }
  }, {
    key: "removeEventListener",
    value: function(t3, e2) {
      var i2 = this.w;
      if (i2.globals.events.hasOwnProperty(t3)) {
        var a2 = i2.globals.events[t3].indexOf(e2);
        -1 !== a2 && i2.globals.events[t3].splice(a2, 1);
      }
    }
  }, {
    key: "fireEvent",
    value: function(t3, e2) {
      var i2 = this.w;
      if (i2.globals.events.hasOwnProperty(t3)) {
        e2 && e2.length || (e2 = []);
        for (var a2 = i2.globals.events[t3], s2 = a2.length, r2 = 0; r2 < s2; r2++) a2[r2].apply(null, e2);
      }
    }
  }, {
    key: "setupEventHandlers",
    value: function() {
      var t3 = this, e2 = this.w, i2 = this.ctx, a2 = e2.globals.dom.baseEl.querySelector(e2.globals.chartClass);
      this.ctx.eventList.forEach(function(t4) {
        a2.addEventListener(t4, function(t5) {
          var a3 = Object.assign({}, e2, {
            seriesIndex: e2.globals.axisCharts ? e2.globals.capturedSeriesIndex : 0,
            dataPointIndex: e2.globals.capturedDataPointIndex
          });
          "mousemove" === t5.type || "touchmove" === t5.type ? "function" == typeof e2.config.chart.events.mouseMove && e2.config.chart.events.mouseMove(t5, i2, a3) : "mouseleave" === t5.type || "touchleave" === t5.type ? "function" == typeof e2.config.chart.events.mouseLeave && e2.config.chart.events.mouseLeave(t5, i2, a3) : ("mouseup" === t5.type && 1 === t5.which || "touchend" === t5.type) && ("function" == typeof e2.config.chart.events.click && e2.config.chart.events.click(t5, i2, a3), i2.ctx.events.fireEvent("click", [t5, i2, a3]));
        }, {
          capture: false,
          passive: true
        });
      }), this.ctx.eventList.forEach(function(i3) {
        e2.globals.dom.baseEl.addEventListener(i3, t3.documentEvent, {
          passive: true
        });
      }), this.ctx.core.setupBrushHandler();
    }
  }, {
    key: "documentEvent",
    value: function(t3) {
      var e2 = this.w, i2 = t3.target.className;
      if ("click" === t3.type) {
        var a2 = e2.globals.dom.baseEl.querySelector(".apexcharts-menu");
        a2 && a2.classList.contains("apexcharts-menu-open") && "apexcharts-menu-icon" !== i2 && a2.classList.remove("apexcharts-menu-open");
      }
      e2.globals.clientX = "touchmove" === t3.type ? t3.touches[0].clientX : t3.clientX, e2.globals.clientY = "touchmove" === t3.type ? t3.touches[0].clientY : t3.clientY;
    }
  }]), t2;
}();
var sa = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "setCurrentLocaleValues",
    value: function(t3) {
      var e2 = this.w.config.chart.locales;
      window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (e2 = this.w.config.chart.locales.concat(window.Apex.chart.locales));
      var i2 = e2.filter(function(e3) {
        return e3.name === t3;
      })[0];
      if (!i2) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
      var a2 = v.extend(Hi, i2);
      this.w.globals.locale = a2.options;
    }
  }]), t2;
}();
var ra = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "drawAxis",
    value: function(t3, e2) {
      var i2, a2, s2 = this, r2 = this.w.globals, n2 = this.w.config, o2 = new Qi(this.ctx, e2), l2 = new ia(this.ctx, e2);
      r2.axisCharts && "radar" !== t3 && (r2.isBarHorizontal ? (a2 = l2.drawYaxisInversed(0), i2 = o2.drawXaxisInversed(0), r2.dom.elGraphical.add(i2), r2.dom.elGraphical.add(a2)) : (i2 = o2.drawXaxis(), r2.dom.elGraphical.add(i2), n2.yaxis.map(function(t4, e3) {
        if (-1 === r2.ignoreYAxisIndexes.indexOf(e3) && (a2 = l2.drawYaxis(e3), r2.dom.Paper.add(a2), "back" === s2.w.config.grid.position)) {
          var i3 = r2.dom.Paper.children()[1];
          i3.remove(), r2.dom.Paper.add(i3);
        }
      })));
    }
  }]), t2;
}();
var na = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "drawXCrosshairs",
    value: function() {
      var t3 = this.w, e2 = new Mi(this.ctx), i2 = new Li(this.ctx), a2 = t3.config.xaxis.crosshairs.fill.gradient, s2 = t3.config.xaxis.crosshairs.dropShadow, r2 = t3.config.xaxis.crosshairs.fill.type, n2 = a2.colorFrom, o2 = a2.colorTo, l2 = a2.opacityFrom, h2 = a2.opacityTo, c2 = a2.stops, d2 = s2.enabled, u2 = s2.left, g2 = s2.top, p2 = s2.blur, f2 = s2.color, x2 = s2.opacity, b2 = t3.config.xaxis.crosshairs.fill.color;
      if (t3.config.xaxis.crosshairs.show) {
        "gradient" === r2 && (b2 = e2.drawGradient("vertical", n2, o2, l2, h2, null, c2, null));
        var m2 = e2.drawRect();
        1 === t3.config.xaxis.crosshairs.width && (m2 = e2.drawLine());
        var y2 = t3.globals.gridHeight;
        (!v.isNumber(y2) || y2 < 0) && (y2 = 0);
        var w2 = t3.config.xaxis.crosshairs.width;
        (!v.isNumber(w2) || w2 < 0) && (w2 = 0), m2.attr({
          class: "apexcharts-xcrosshairs",
          x: 0,
          y: 0,
          y2,
          width: w2,
          height: y2,
          fill: b2,
          filter: "none",
          "fill-opacity": t3.config.xaxis.crosshairs.opacity,
          stroke: t3.config.xaxis.crosshairs.stroke.color,
          "stroke-width": t3.config.xaxis.crosshairs.stroke.width,
          "stroke-dasharray": t3.config.xaxis.crosshairs.stroke.dashArray
        }), d2 && (m2 = i2.dropShadow(m2, {
          left: u2,
          top: g2,
          blur: p2,
          color: f2,
          opacity: x2
        })), t3.globals.dom.elGraphical.add(m2);
      }
    }
  }, {
    key: "drawYCrosshairs",
    value: function() {
      var t3 = this.w, e2 = new Mi(this.ctx), i2 = t3.config.yaxis[0].crosshairs, a2 = t3.globals.barPadForNumericAxis;
      if (t3.config.yaxis[0].crosshairs.show) {
        var s2 = e2.drawLine(-a2, 0, t3.globals.gridWidth + a2, 0, i2.stroke.color, i2.stroke.dashArray, i2.stroke.width);
        s2.attr({
          class: "apexcharts-ycrosshairs"
        }), t3.globals.dom.elGraphical.add(s2);
      }
      var r2 = e2.drawLine(-a2, 0, t3.globals.gridWidth + a2, 0, i2.stroke.color, 0, 0);
      r2.attr({
        class: "apexcharts-ycrosshairs-hidden"
      }), t3.globals.dom.elGraphical.add(r2);
    }
  }]), t2;
}();
var oa = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "checkResponsiveConfig",
    value: function(t3) {
      var e2 = this, i2 = this.w, a2 = i2.config;
      if (0 !== a2.responsive.length) {
        var s2 = a2.responsive.slice();
        s2.sort(function(t4, e3) {
          return t4.breakpoint > e3.breakpoint ? 1 : e3.breakpoint > t4.breakpoint ? -1 : 0;
        }).reverse();
        var r2 = new Wi({}), n2 = function() {
          var t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a3 = s2[0].breakpoint, n3 = window.innerWidth > 0 ? window.innerWidth : screen.width;
          if (n3 > a3) {
            var o3 = v.clone(i2.globals.initialConfig);
            o3.series = v.clone(i2.config.series);
            var l2 = Pi.extendArrayProps(r2, o3, i2);
            t4 = v.extend(l2, t4), t4 = v.extend(i2.config, t4), e2.overrideResponsiveOptions(t4);
          } else for (var h2 = 0; h2 < s2.length; h2++) n3 < s2[h2].breakpoint && (t4 = Pi.extendArrayProps(r2, s2[h2].options, i2), t4 = v.extend(i2.config, t4), e2.overrideResponsiveOptions(t4));
        };
        if (t3) {
          var o2 = Pi.extendArrayProps(r2, t3, i2);
          o2 = v.extend(i2.config, o2), n2(o2 = v.extend(o2, t3));
        } else n2({});
      }
    }
  }, {
    key: "overrideResponsiveOptions",
    value: function(t3) {
      var e2 = new Wi(t3).init({
        responsiveOverride: true
      });
      this.w.config = e2;
    }
  }]), t2;
}();
var la = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.colors = [], this.isColorFn = false, this.isHeatmapDistributed = this.checkHeatmapDistributed(), this.isBarDistributed = this.checkBarDistributed();
  }
  return s(t2, [{
    key: "checkHeatmapDistributed",
    value: function() {
      var t3 = this.w.config, e2 = t3.chart, i2 = t3.plotOptions;
      return "treemap" === e2.type && i2.treemap && i2.treemap.distributed || "heatmap" === e2.type && i2.heatmap && i2.heatmap.distributed;
    }
  }, {
    key: "checkBarDistributed",
    value: function() {
      var t3 = this.w.config, e2 = t3.chart, i2 = t3.plotOptions;
      return i2.bar && i2.bar.distributed && ("bar" === e2.type || "rangeBar" === e2.type);
    }
  }, {
    key: "init",
    value: function() {
      this.setDefaultColors();
    }
  }, {
    key: "setDefaultColors",
    value: function() {
      var t3 = this.w, e2 = new v();
      t3.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(t3.config.theme.mode));
      var i2 = f(t3.config.colors || t3.config.fill.colors || []);
      t3.globals.colors = this.getColors(i2), this.applySeriesColors(t3.globals.seriesColors, t3.globals.colors), t3.config.theme.monochrome.enabled && (t3.globals.colors = this.getMonochromeColors(t3.config.theme.monochrome, t3.globals.series, e2));
      var a2 = t3.globals.colors.slice();
      this.pushExtraColors(t3.globals.colors), this.applyColorTypes(["fill", "stroke"], a2), this.applyDataLabelsColors(a2), this.applyRadarPolygonsColors(), this.applyMarkersColors(a2);
    }
  }, {
    key: "getColors",
    value: function(t3) {
      var e2 = this, i2 = this.w;
      return t3 && 0 !== t3.length ? Array.isArray(t3) && t3.length > 0 && "function" == typeof t3[0] ? (this.isColorFn = true, i2.config.series.map(function(a2, s2) {
        var r2 = t3[s2] || t3[0];
        return "function" == typeof r2 ? r2({
          value: i2.globals.axisCharts ? i2.globals.series[s2][0] || 0 : i2.globals.series[s2],
          seriesIndex: s2,
          dataPointIndex: s2,
          w: e2.w
        }) : r2;
      })) : t3 : this.predefined();
    }
  }, {
    key: "applySeriesColors",
    value: function(t3, e2) {
      t3.forEach(function(t4, i2) {
        t4 && (e2[i2] = t4);
      });
    }
  }, {
    key: "getMonochromeColors",
    value: function(t3, e2, i2) {
      var a2 = t3.color, s2 = t3.shadeIntensity, r2 = t3.shadeTo, n2 = this.isBarDistributed || this.isHeatmapDistributed ? e2[0].length * e2.length : e2.length, o2 = 1 / (n2 / s2), l2 = 0;
      return Array.from({
        length: n2
      }, function() {
        var t4 = "dark" === r2 ? i2.shadeColor(-1 * l2, a2) : i2.shadeColor(l2, a2);
        return l2 += o2, t4;
      });
    }
  }, {
    key: "applyColorTypes",
    value: function(t3, e2) {
      var i2 = this, a2 = this.w;
      t3.forEach(function(t4) {
        a2.globals[t4].colors = void 0 === a2.config[t4].colors ? i2.isColorFn ? a2.config.colors : e2 : a2.config[t4].colors.slice(), i2.pushExtraColors(a2.globals[t4].colors);
      });
    }
  }, {
    key: "applyDataLabelsColors",
    value: function(t3) {
      var e2 = this.w;
      e2.globals.dataLabels.style.colors = void 0 === e2.config.dataLabels.style.colors ? t3 : e2.config.dataLabels.style.colors.slice(), this.pushExtraColors(e2.globals.dataLabels.style.colors, 50);
    }
  }, {
    key: "applyRadarPolygonsColors",
    value: function() {
      var t3 = this.w;
      t3.globals.radarPolygons.fill.colors = void 0 === t3.config.plotOptions.radar.polygons.fill.colors ? ["dark" === t3.config.theme.mode ? "#424242" : "none"] : t3.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(t3.globals.radarPolygons.fill.colors, 20);
    }
  }, {
    key: "applyMarkersColors",
    value: function(t3) {
      var e2 = this.w;
      e2.globals.markers.colors = void 0 === e2.config.markers.colors ? t3 : e2.config.markers.colors.slice(), this.pushExtraColors(e2.globals.markers.colors);
    }
  }, {
    key: "pushExtraColors",
    value: function(t3, e2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a2 = this.w, s2 = e2 || a2.globals.series.length;
      if (null === i2 && (i2 = this.isBarDistributed || this.isHeatmapDistributed || "heatmap" === a2.config.chart.type && a2.config.plotOptions.heatmap && a2.config.plotOptions.heatmap.colorScale.inverse), i2 && a2.globals.series.length && (s2 = a2.globals.series[a2.globals.maxValsInArrayIndex].length * a2.globals.series.length), t3.length < s2) for (var r2 = s2 - t3.length, n2 = 0; n2 < r2; n2++) t3.push(t3[n2]);
    }
  }, {
    key: "updateThemeOptions",
    value: function(t3) {
      t3.chart = t3.chart || {}, t3.tooltip = t3.tooltip || {};
      var e2 = t3.theme.mode, i2 = "dark" === e2 ? "palette4" : "light" === e2 ? "palette1" : t3.theme.palette || "palette1", a2 = "dark" === e2 ? "#f6f7f8" : "light" === e2 ? "#373d3f" : t3.chart.foreColor || "#373d3f";
      return t3.tooltip.theme = e2 || "light", t3.chart.foreColor = a2, t3.theme.palette = i2, t3;
    }
  }, {
    key: "predefined",
    value: function() {
      var t3 = {
        palette1: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"],
        palette2: ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"],
        palette3: ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"],
        palette4: ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"],
        palette5: ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"],
        palette6: ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"],
        palette7: ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"],
        palette8: ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"],
        palette9: ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"],
        palette10: ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"],
        default: ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"]
      };
      return t3[this.w.config.theme.palette] || t3.default;
    }
  }]), t2;
}();
var ha = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "draw",
    value: function() {
      this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle");
    }
  }, {
    key: "drawTitleSubtitle",
    value: function(t3) {
      var e2 = this.w, i2 = "title" === t3 ? e2.config.title : e2.config.subtitle, a2 = e2.globals.svgWidth / 2, s2 = i2.offsetY, r2 = "middle";
      if ("left" === i2.align ? (a2 = 10, r2 = "start") : "right" === i2.align && (a2 = e2.globals.svgWidth - 10, r2 = "end"), a2 += i2.offsetX, s2 = s2 + parseInt(i2.style.fontSize, 10) + i2.margin / 2, void 0 !== i2.text) {
        var n2 = new Mi(this.ctx).drawText({
          x: a2,
          y: s2,
          text: i2.text,
          textAnchor: r2,
          fontSize: i2.style.fontSize,
          fontFamily: i2.style.fontFamily,
          fontWeight: i2.style.fontWeight,
          foreColor: i2.style.color,
          opacity: 1
        });
        n2.node.setAttribute("class", "apexcharts-".concat(t3, "-text")), e2.globals.dom.Paper.add(n2);
      }
    }
  }]), t2;
}();
var ca = function() {
  function t2(e2) {
    i(this, t2), this.w = e2.w, this.dCtx = e2;
  }
  return s(t2, [{
    key: "getTitleSubtitleCoords",
    value: function(t3) {
      var e2 = this.w, i2 = 0, a2 = 0, s2 = "title" === t3 ? e2.config.title.floating : e2.config.subtitle.floating, r2 = e2.globals.dom.baseEl.querySelector(".apexcharts-".concat(t3, "-text"));
      if (null !== r2 && !s2) {
        var n2 = r2.getBoundingClientRect();
        i2 = n2.width, a2 = e2.globals.axisCharts ? n2.height + 5 : n2.height;
      }
      return {
        width: i2,
        height: a2
      };
    }
  }, {
    key: "getLegendsRect",
    value: function() {
      var t3 = this.w, e2 = t3.globals.dom.elLegendWrap;
      t3.config.legend.height || "top" !== t3.config.legend.position && "bottom" !== t3.config.legend.position || (e2.style.maxHeight = t3.globals.svgHeight / 2 + "px");
      var i2 = Object.assign({}, v.getBoundingClientRect(e2));
      return null !== e2 && !t3.config.legend.floating && t3.config.legend.show ? this.dCtx.lgRect = {
        x: i2.x,
        y: i2.y,
        height: i2.height,
        width: 0 === i2.height ? 0 : i2.width
      } : this.dCtx.lgRect = {
        x: 0,
        y: 0,
        height: 0,
        width: 0
      }, "left" !== t3.config.legend.position && "right" !== t3.config.legend.position || 1.5 * this.dCtx.lgRect.width > t3.globals.svgWidth && (this.dCtx.lgRect.width = t3.globals.svgWidth / 1.5), this.dCtx.lgRect;
    }
  }, {
    key: "getDatalabelsRect",
    value: function() {
      var t3 = this, e2 = this.w, i2 = [];
      e2.config.series.forEach(function(s3, r3) {
        s3.data.forEach(function(s4, n3) {
          var o2;
          o2 = e2.globals.series[r3][n3], a2 = e2.config.dataLabels.formatter(o2, {
            ctx: t3.dCtx.ctx,
            seriesIndex: r3,
            dataPointIndex: n3,
            w: e2
          }), i2.push(a2);
        });
      });
      var a2 = v.getLargestStringFromArr(i2), s2 = new Mi(this.dCtx.ctx), r2 = e2.config.dataLabels.style, n2 = s2.getTextRects(a2, parseInt(r2.fontSize), r2.fontFamily);
      return {
        width: 1.05 * n2.width,
        height: n2.height
      };
    }
  }, {
    key: "getLargestStringFromMultiArr",
    value: function(t3, e2) {
      var i2 = t3;
      if (this.w.globals.isMultiLineX) {
        var a2 = e2.map(function(t4, e3) {
          return Array.isArray(t4) ? t4.length : 1;
        }), s2 = Math.max.apply(Math, f(a2));
        i2 = e2[a2.indexOf(s2)];
      }
      return i2;
    }
  }]), t2;
}();
var da = function() {
  function t2(e2) {
    i(this, t2), this.w = e2.w, this.dCtx = e2;
  }
  return s(t2, [{
    key: "getxAxisLabelsCoords",
    value: function() {
      var t3, e2 = this.w, i2 = e2.globals.labels.slice();
      if (e2.config.xaxis.convertedCatToNumeric && 0 === i2.length && (i2 = e2.globals.categoryLabels), e2.globals.timescaleLabels.length > 0) {
        var a2 = this.getxAxisTimeScaleLabelsCoords();
        t3 = {
          width: a2.width,
          height: a2.height
        }, e2.globals.rotateXLabels = false;
      } else {
        this.dCtx.lgWidthForSideLegends = "left" !== e2.config.legend.position && "right" !== e2.config.legend.position || e2.config.legend.floating ? 0 : this.dCtx.lgRect.width;
        var s2 = e2.globals.xLabelFormatter, r2 = v.getLargestStringFromArr(i2), n2 = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r2, i2);
        e2.globals.isBarHorizontal && (n2 = r2 = e2.globals.yAxisScale[0].result.reduce(function(t4, e3) {
          return t4.length > e3.length ? t4 : e3;
        }, 0));
        var o2 = new Xi(this.dCtx.ctx), l2 = r2;
        r2 = o2.xLabelFormat(s2, r2, l2, {
          i: void 0,
          dateFormatter: new zi(this.dCtx.ctx).formatDate,
          w: e2
        }), n2 = o2.xLabelFormat(s2, n2, l2, {
          i: void 0,
          dateFormatter: new zi(this.dCtx.ctx).formatDate,
          w: e2
        }), (e2.config.xaxis.convertedCatToNumeric && void 0 === r2 || "" === String(r2).trim()) && (n2 = r2 = "1");
        var h2 = new Mi(this.dCtx.ctx), c2 = h2.getTextRects(r2, e2.config.xaxis.labels.style.fontSize), d2 = c2;
        if (r2 !== n2 && (d2 = h2.getTextRects(n2, e2.config.xaxis.labels.style.fontSize)), (t3 = {
          width: c2.width >= d2.width ? c2.width : d2.width,
          height: c2.height >= d2.height ? c2.height : d2.height
        }).width * i2.length > e2.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && 0 !== e2.config.xaxis.labels.rotate || e2.config.xaxis.labels.rotateAlways) {
          if (!e2.globals.isBarHorizontal) {
            e2.globals.rotateXLabels = true;
            var u2 = function(t4) {
              return h2.getTextRects(t4, e2.config.xaxis.labels.style.fontSize, e2.config.xaxis.labels.style.fontFamily, "rotate(".concat(e2.config.xaxis.labels.rotate, " 0 0)"), false);
            };
            c2 = u2(r2), r2 !== n2 && (d2 = u2(n2)), t3.height = (c2.height > d2.height ? c2.height : d2.height) / 1.5, t3.width = c2.width > d2.width ? c2.width : d2.width;
          }
        } else e2.globals.rotateXLabels = false;
      }
      return e2.config.xaxis.labels.show || (t3 = {
        width: 0,
        height: 0
      }), {
        width: t3.width,
        height: t3.height
      };
    }
  }, {
    key: "getxAxisGroupLabelsCoords",
    value: function() {
      var t3, e2 = this.w;
      if (!e2.globals.hasXaxisGroups) return {
        width: 0,
        height: 0
      };
      var i2, a2 = (null === (t3 = e2.config.xaxis.group.style) || void 0 === t3 ? void 0 : t3.fontSize) || e2.config.xaxis.labels.style.fontSize, s2 = e2.globals.groups.map(function(t4) {
        return t4.title;
      }), r2 = v.getLargestStringFromArr(s2), n2 = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r2, s2), o2 = new Mi(this.dCtx.ctx), l2 = o2.getTextRects(r2, a2), h2 = l2;
      return r2 !== n2 && (h2 = o2.getTextRects(n2, a2)), i2 = {
        width: l2.width >= h2.width ? l2.width : h2.width,
        height: l2.height >= h2.height ? l2.height : h2.height
      }, e2.config.xaxis.labels.show || (i2 = {
        width: 0,
        height: 0
      }), {
        width: i2.width,
        height: i2.height
      };
    }
  }, {
    key: "getxAxisTitleCoords",
    value: function() {
      var t3 = this.w, e2 = 0, i2 = 0;
      if (void 0 !== t3.config.xaxis.title.text) {
        var a2 = new Mi(this.dCtx.ctx).getTextRects(t3.config.xaxis.title.text, t3.config.xaxis.title.style.fontSize);
        e2 = a2.width, i2 = a2.height;
      }
      return {
        width: e2,
        height: i2
      };
    }
  }, {
    key: "getxAxisTimeScaleLabelsCoords",
    value: function() {
      var t3, e2 = this.w;
      this.dCtx.timescaleLabels = e2.globals.timescaleLabels.slice();
      var i2 = this.dCtx.timescaleLabels.map(function(t4) {
        return t4.value;
      }), a2 = i2.reduce(function(t4, e3) {
        return void 0 === t4 ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : t4.length > e3.length ? t4 : e3;
      }, 0);
      return 1.05 * (t3 = new Mi(this.dCtx.ctx).getTextRects(a2, e2.config.xaxis.labels.style.fontSize)).width * i2.length > e2.globals.gridWidth && 0 !== e2.config.xaxis.labels.rotate && (e2.globals.overlappingXLabels = true), t3;
    }
  }, {
    key: "additionalPaddingXLabels",
    value: function(t3) {
      var e2 = this, i2 = this.w, a2 = i2.globals, s2 = i2.config, r2 = s2.xaxis.type, n2 = t3.width;
      a2.skipLastTimelinelabel = false, a2.skipFirstTimelinelabel = false;
      var o2 = i2.config.yaxis[0].opposite && i2.globals.isBarHorizontal, l2 = function(t4, o3) {
        s2.yaxis.length > 1 && function(t5) {
          return -1 !== a2.collapsedSeriesIndices.indexOf(t5);
        }(o3) || function(t5) {
          if (e2.dCtx.timescaleLabels && e2.dCtx.timescaleLabels.length) {
            var o4 = e2.dCtx.timescaleLabels[0], l3 = e2.dCtx.timescaleLabels[e2.dCtx.timescaleLabels.length - 1].position + n2 / 1.75 - e2.dCtx.yAxisWidthRight, h2 = o4.position - n2 / 1.75 + e2.dCtx.yAxisWidthLeft, c2 = "right" === i2.config.legend.position && e2.dCtx.lgRect.width > 0 ? e2.dCtx.lgRect.width : 0;
            l3 > a2.svgWidth - a2.translateX - c2 && (a2.skipLastTimelinelabel = true), h2 < -(t5.show && !t5.floating || "bar" !== s2.chart.type && "candlestick" !== s2.chart.type && "rangeBar" !== s2.chart.type && "boxPlot" !== s2.chart.type ? 10 : n2 / 1.75) && (a2.skipFirstTimelinelabel = true);
          } else "datetime" === r2 ? e2.dCtx.gridPad.right < n2 && !a2.rotateXLabels && (a2.skipLastTimelinelabel = true) : "datetime" !== r2 && e2.dCtx.gridPad.right < n2 / 2 - e2.dCtx.yAxisWidthRight && !a2.rotateXLabels && !i2.config.xaxis.labels.trim && (e2.dCtx.xPadRight = n2 / 2 + 1);
        }(t4);
      };
      s2.yaxis.forEach(function(t4, i3) {
        o2 ? (e2.dCtx.gridPad.left < n2 && (e2.dCtx.xPadLeft = n2 / 2 + 1), e2.dCtx.xPadRight = n2 / 2 + 1) : l2(t4, i3);
      });
    }
  }]), t2;
}();
var ua = function() {
  function t2(e2) {
    i(this, t2), this.w = e2.w, this.dCtx = e2;
  }
  return s(t2, [{
    key: "getyAxisLabelsCoords",
    value: function() {
      var t3 = this, e2 = this.w, i2 = [], a2 = 10, s2 = new Ri(this.dCtx.ctx);
      return e2.config.yaxis.map(function(r2, n2) {
        var o2 = {
          seriesIndex: n2,
          dataPointIndex: -1,
          w: e2
        }, l2 = e2.globals.yAxisScale[n2], h2 = 0;
        if (!s2.isYAxisHidden(n2) && r2.labels.show && void 0 !== r2.labels.minWidth && (h2 = r2.labels.minWidth), !s2.isYAxisHidden(n2) && r2.labels.show && l2.result.length) {
          var c2 = e2.globals.yLabelFormatters[n2], d2 = l2.niceMin === Number.MIN_VALUE ? 0 : l2.niceMin, u2 = l2.result.reduce(function(t4, e3) {
            var i3, a3;
            return (null === (i3 = String(c2(t4, o2))) || void 0 === i3 ? void 0 : i3.length) > (null === (a3 = String(c2(e3, o2))) || void 0 === a3 ? void 0 : a3.length) ? t4 : e3;
          }, d2), g2 = u2 = c2(u2, o2);
          if (void 0 !== u2 && 0 !== u2.length || (u2 = l2.niceMax), e2.globals.isBarHorizontal) {
            a2 = 0;
            var p2 = e2.globals.labels.slice();
            u2 = v.getLargestStringFromArr(p2), u2 = c2(u2, {
              seriesIndex: n2,
              dataPointIndex: -1,
              w: e2
            }), g2 = t3.dCtx.dimHelpers.getLargestStringFromMultiArr(u2, p2);
          }
          var f2 = new Mi(t3.dCtx.ctx), x2 = "rotate(".concat(r2.labels.rotate, " 0 0)"), b2 = f2.getTextRects(u2, r2.labels.style.fontSize, r2.labels.style.fontFamily, x2, false), m2 = b2;
          u2 !== g2 && (m2 = f2.getTextRects(g2, r2.labels.style.fontSize, r2.labels.style.fontFamily, x2, false)), i2.push({
            width: (h2 > m2.width || h2 > b2.width ? h2 : m2.width > b2.width ? m2.width : b2.width) + a2,
            height: m2.height > b2.height ? m2.height : b2.height
          });
        } else i2.push({
          width: 0,
          height: 0
        });
      }), i2;
    }
  }, {
    key: "getyAxisTitleCoords",
    value: function() {
      var t3 = this, e2 = this.w, i2 = [];
      return e2.config.yaxis.map(function(e3, a2) {
        if (e3.show && void 0 !== e3.title.text) {
          var s2 = new Mi(t3.dCtx.ctx), r2 = "rotate(".concat(e3.title.rotate, " 0 0)"), n2 = s2.getTextRects(e3.title.text, e3.title.style.fontSize, e3.title.style.fontFamily, r2, false);
          i2.push({
            width: n2.width,
            height: n2.height
          });
        } else i2.push({
          width: 0,
          height: 0
        });
      }), i2;
    }
  }, {
    key: "getTotalYAxisWidth",
    value: function() {
      var t3 = this.w, e2 = 0, i2 = 0, a2 = 0, s2 = t3.globals.yAxisScale.length > 1 ? 10 : 0, r2 = new Ri(this.dCtx.ctx), n2 = function(n3, o2) {
        var l2 = t3.config.yaxis[o2].floating, h2 = 0;
        n3.width > 0 && !l2 ? (h2 = n3.width + s2, function(e3) {
          return t3.globals.ignoreYAxisIndexes.indexOf(e3) > -1;
        }(o2) && (h2 = h2 - n3.width - s2)) : h2 = l2 || r2.isYAxisHidden(o2) ? 0 : 5, t3.config.yaxis[o2].opposite ? a2 += h2 : i2 += h2, e2 += h2;
      };
      return t3.globals.yLabelsCoords.map(function(t4, e3) {
        n2(t4, e3);
      }), t3.globals.yTitleCoords.map(function(t4, e3) {
        n2(t4, e3);
      }), t3.globals.isBarHorizontal && !t3.config.yaxis[0].floating && (e2 = t3.globals.yLabelsCoords[0].width + t3.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = i2, this.dCtx.yAxisWidthRight = a2, e2;
    }
  }]), t2;
}();
var ga = function() {
  function t2(e2) {
    i(this, t2), this.w = e2.w, this.dCtx = e2;
  }
  return s(t2, [{
    key: "gridPadForColumnsInNumericAxis",
    value: function(t3) {
      var e2 = this.w, i2 = e2.config, a2 = e2.globals;
      if (a2.noData || a2.collapsedSeries.length + a2.ancillaryCollapsedSeries.length === i2.series.length) return 0;
      var s2 = function(t4) {
        return ["bar", "rangeBar", "candlestick", "boxPlot"].includes(t4);
      }, r2 = i2.chart.type, n2 = 0, o2 = s2(r2) ? i2.series.length : 1;
      a2.comboBarCount > 0 && (o2 = a2.comboBarCount), a2.collapsedSeries.forEach(function(t4) {
        s2(t4.type) && (o2 -= 1);
      }), i2.chart.stacked && (o2 = 1);
      var l2 = s2(r2) || a2.comboBarCount > 0, h2 = Math.abs(a2.initialMaxX - a2.initialMinX);
      if (l2 && a2.isXNumeric && !a2.isBarHorizontal && o2 > 0 && 0 !== h2) {
        h2 <= 3 && (h2 = a2.dataPoints);
        var c2 = h2 / t3, d2 = a2.minXDiff && a2.minXDiff / c2 > 0 ? a2.minXDiff / c2 : 0;
        d2 > t3 / 2 && (d2 /= 2), (n2 = d2 * parseInt(i2.plotOptions.bar.columnWidth, 10) / 100) < 1 && (n2 = 1), a2.barPadForNumericAxis = n2;
      }
      return n2;
    }
  }, {
    key: "gridPadFortitleSubtitle",
    value: function() {
      var t3 = this, e2 = this.w, i2 = e2.globals, a2 = this.dCtx.isSparkline || !i2.axisCharts ? 0 : 10;
      ["title", "subtitle"].forEach(function(s3) {
        void 0 !== e2.config[s3].text ? a2 += e2.config[s3].margin : a2 += t3.dCtx.isSparkline || !i2.axisCharts ? 0 : 5;
      }), !e2.config.legend.show || "bottom" !== e2.config.legend.position || e2.config.legend.floating || i2.axisCharts || (a2 += 10);
      var s2 = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"), r2 = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
      i2.gridHeight -= s2.height + r2.height + a2, i2.translateY += s2.height + r2.height + a2;
    }
  }, {
    key: "setGridXPosForDualYAxis",
    value: function(t3, e2) {
      var i2 = this.w, a2 = new Ri(this.dCtx.ctx);
      i2.config.yaxis.forEach(function(s2, r2) {
        -1 !== i2.globals.ignoreYAxisIndexes.indexOf(r2) || s2.floating || a2.isYAxisHidden(r2) || (s2.opposite && (i2.globals.translateX -= e2[r2].width + t3[r2].width + parseInt(s2.labels.style.fontSize, 10) / 1.2 + 12), i2.globals.translateX < 2 && (i2.globals.translateX = 2));
      });
    }
  }]), t2;
}();
var pa = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new ca(this), this.dimYAxis = new ua(this), this.dimXAxis = new da(this), this.dimGrid = new ga(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0;
  }
  return s(t2, [{
    key: "plotCoords",
    value: function() {
      var t3 = this, e2 = this.w, i2 = e2.globals;
      this.lgRect = this.dimHelpers.getLegendsRect(), this.datalabelsCoords = {
        width: 0,
        height: 0
      };
      var a2 = Array.isArray(e2.config.stroke.width) ? Math.max.apply(Math, f(e2.config.stroke.width)) : e2.config.stroke.width;
      this.isSparkline && ((e2.config.markers.discrete.length > 0 || e2.config.markers.size > 0) && Object.entries(this.gridPad).forEach(function(e3) {
        var i3 = p(e3, 2), a3 = i3[0], s3 = i3[1];
        t3.gridPad[a3] = Math.max(s3, t3.w.globals.markers.largestSize / 1.5);
      }), this.gridPad.top = Math.max(a2 / 2, this.gridPad.top), this.gridPad.bottom = Math.max(a2 / 2, this.gridPad.bottom)), i2.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), i2.gridHeight = i2.gridHeight - this.gridPad.top - this.gridPad.bottom, i2.gridWidth = i2.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
      var s2 = this.dimGrid.gridPadForColumnsInNumericAxis(i2.gridWidth);
      i2.gridWidth = i2.gridWidth - 2 * s2, i2.translateX = i2.translateX + this.gridPad.left + this.xPadLeft + (s2 > 0 ? s2 : 0), i2.translateY = i2.translateY + this.gridPad.top;
    }
  }, {
    key: "setDimensionsForAxisCharts",
    value: function() {
      var t3 = this, e2 = this.w, i2 = e2.globals, a2 = this.dimYAxis.getyAxisLabelsCoords(), s2 = this.dimYAxis.getyAxisTitleCoords();
      i2.isSlopeChart && (this.datalabelsCoords = this.dimHelpers.getDatalabelsRect()), e2.globals.yLabelsCoords = [], e2.globals.yTitleCoords = [], e2.config.yaxis.map(function(t4, i3) {
        e2.globals.yLabelsCoords.push({
          width: a2[i3].width,
          index: i3
        }), e2.globals.yTitleCoords.push({
          width: s2[i3].width,
          index: i3
        });
      }), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
      var r2 = this.dimXAxis.getxAxisLabelsCoords(), n2 = this.dimXAxis.getxAxisGroupLabelsCoords(), o2 = this.dimXAxis.getxAxisTitleCoords();
      this.conditionalChecksForAxisCoords(r2, o2, n2), i2.translateXAxisY = e2.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, i2.translateXAxisX = e2.globals.rotateXLabels && e2.globals.isXNumeric && e2.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, e2.globals.isBarHorizontal && (i2.rotateXLabels = false, i2.translateXAxisY = parseInt(e2.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), i2.translateXAxisY = i2.translateXAxisY + e2.config.xaxis.labels.offsetY, i2.translateXAxisX = i2.translateXAxisX + e2.config.xaxis.labels.offsetX;
      var l2 = this.yAxisWidth, h2 = this.xAxisHeight;
      i2.xAxisLabelsHeight = this.xAxisHeight - o2.height, i2.xAxisGroupLabelsHeight = i2.xAxisLabelsHeight - r2.height, i2.xAxisLabelsWidth = this.xAxisWidth, i2.xAxisHeight = this.xAxisHeight;
      var c2 = 10;
      ("radar" === e2.config.chart.type || this.isSparkline) && (l2 = 0, h2 = 0), this.isSparkline && (this.lgRect = {
        height: 0,
        width: 0
      }), (this.isSparkline || "treemap" === e2.config.chart.type) && (l2 = 0, h2 = 0, c2 = 0), this.isSparkline || "treemap" === e2.config.chart.type || this.dimXAxis.additionalPaddingXLabels(r2);
      var d2 = function() {
        i2.translateX = l2 + t3.datalabelsCoords.width, i2.gridHeight = i2.svgHeight - t3.lgRect.height - h2 - (t3.isSparkline || "treemap" === e2.config.chart.type ? 0 : e2.globals.rotateXLabels ? 10 : 15), i2.gridWidth = i2.svgWidth - l2 - 2 * t3.datalabelsCoords.width;
      };
      switch ("top" === e2.config.xaxis.position && (c2 = i2.xAxisHeight - e2.config.xaxis.axisTicks.height - 5), e2.config.legend.position) {
        case "bottom":
          i2.translateY = c2, d2();
          break;
        case "top":
          i2.translateY = this.lgRect.height + c2, d2();
          break;
        case "left":
          i2.translateY = c2, i2.translateX = this.lgRect.width + l2 + this.datalabelsCoords.width, i2.gridHeight = i2.svgHeight - h2 - 12, i2.gridWidth = i2.svgWidth - this.lgRect.width - l2 - 2 * this.datalabelsCoords.width;
          break;
        case "right":
          i2.translateY = c2, i2.translateX = l2 + this.datalabelsCoords.width, i2.gridHeight = i2.svgHeight - h2 - 12, i2.gridWidth = i2.svgWidth - this.lgRect.width - l2 - 2 * this.datalabelsCoords.width - 5;
          break;
        default:
          throw new Error("Legend position not supported");
      }
      this.dimGrid.setGridXPosForDualYAxis(s2, a2), new ia(this.ctx).setYAxisXPosition(a2, s2);
    }
  }, {
    key: "setDimensionsForNonAxisCharts",
    value: function() {
      var t3 = this.w, e2 = t3.globals, i2 = t3.config, a2 = 0;
      t3.config.legend.show && !t3.config.legend.floating && (a2 = 20);
      var s2 = "pie" === i2.chart.type || "polarArea" === i2.chart.type || "donut" === i2.chart.type ? "pie" : "radialBar", r2 = i2.plotOptions[s2].offsetY, n2 = i2.plotOptions[s2].offsetX;
      if (!i2.legend.show || i2.legend.floating) {
        e2.gridHeight = e2.svgHeight;
        var o2 = e2.dom.elWrap.getBoundingClientRect().width;
        return e2.gridWidth = Math.min(o2, e2.gridHeight), e2.translateY = r2, void (e2.translateX = n2 + (e2.svgWidth - e2.gridWidth) / 2);
      }
      switch (i2.legend.position) {
        case "bottom":
          e2.gridHeight = e2.svgHeight - this.lgRect.height, e2.gridWidth = e2.svgWidth, e2.translateY = r2 - 10, e2.translateX = n2 + (e2.svgWidth - e2.gridWidth) / 2;
          break;
        case "top":
          e2.gridHeight = e2.svgHeight - this.lgRect.height, e2.gridWidth = e2.svgWidth, e2.translateY = this.lgRect.height + r2 + 10, e2.translateX = n2 + (e2.svgWidth - e2.gridWidth) / 2;
          break;
        case "left":
          e2.gridWidth = e2.svgWidth - this.lgRect.width - a2, e2.gridHeight = "auto" !== i2.chart.height ? e2.svgHeight : e2.gridWidth, e2.translateY = r2, e2.translateX = n2 + this.lgRect.width + a2;
          break;
        case "right":
          e2.gridWidth = e2.svgWidth - this.lgRect.width - a2 - 5, e2.gridHeight = "auto" !== i2.chart.height ? e2.svgHeight : e2.gridWidth, e2.translateY = r2, e2.translateX = n2 + 10;
          break;
        default:
          throw new Error("Legend position not supported");
      }
    }
  }, {
    key: "conditionalChecksForAxisCoords",
    value: function(t3, e2, i2) {
      var a2 = this.w, s2 = a2.globals.hasXaxisGroups ? 2 : 1, r2 = i2.height + t3.height + e2.height, n2 = a2.globals.isMultiLineX ? 1.2 : a2.globals.LINE_HEIGHT_RATIO, o2 = a2.globals.rotateXLabels ? 22 : 10, l2 = a2.globals.rotateXLabels && "bottom" === a2.config.legend.position ? 10 : 0;
      this.xAxisHeight = r2 * n2 + s2 * o2 + l2, this.xAxisWidth = t3.width, this.xAxisHeight - e2.height > a2.config.xaxis.labels.maxHeight && (this.xAxisHeight = a2.config.xaxis.labels.maxHeight), a2.config.xaxis.labels.minHeight && this.xAxisHeight < a2.config.xaxis.labels.minHeight && (this.xAxisHeight = a2.config.xaxis.labels.minHeight), a2.config.xaxis.floating && (this.xAxisHeight = 0);
      var h2 = 0, c2 = 0;
      a2.config.yaxis.forEach(function(t4) {
        h2 += t4.labels.minWidth, c2 += t4.labels.maxWidth;
      }), this.yAxisWidth < h2 && (this.yAxisWidth = h2), this.yAxisWidth > c2 && (this.yAxisWidth = c2);
    }
  }]), t2;
}();
var fa = function() {
  function t2(e2) {
    i(this, t2), this.w = e2.w, this.lgCtx = e2;
  }
  return s(t2, [{
    key: "getLegendStyles",
    value: function() {
      var t3, e2, i2, a2 = document.createElement("style");
      a2.setAttribute("type", "text/css");
      var s2 = (null === (t3 = this.lgCtx.ctx) || void 0 === t3 || null === (e2 = t3.opts) || void 0 === e2 || null === (i2 = e2.chart) || void 0 === i2 ? void 0 : i2.nonce) || this.w.config.chart.nonce;
      s2 && a2.setAttribute("nonce", s2);
      var r2 = document.createTextNode("\n      .apexcharts-flip-y {\n        transform: scaleY(-1) translateY(-100%);\n        transform-origin: top;\n        transform-box: fill-box;\n      }\n      .apexcharts-flip-x {\n        transform: scaleX(-1);\n        transform-origin: center;\n        transform-box: fill-box;\n      }\n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n      .apexcharts-legend.apexcharts-legend-group-horizontal {\n        flex-direction: column;\n      }\n      .apexcharts-legend-group {\n        display: flex;\n      }\n      .apexcharts-legend-group-vertical {\n        flex-direction: column-reverse;\n      }\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\n        justify-content: flex-start;\n        align-items: flex-start;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\n        justify-content: center;\n        align-items: center;\n      }\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\n        justify-content: flex-end;\n        align-items: flex-end;\n      }\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n        display: flex;\n        align-items: center;\n      }\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n      .apexcharts-legend-marker {\n        position: relative;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        margin-right: 1px;\n      }\n\n      .apexcharts-legend-series.apexcharts-no-click {\n        cursor: auto;\n      }\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n      .apexcharts-inactive-legend {\n        opacity: 0.45;\n      }\n\n    ");
      return a2.appendChild(r2), a2;
    }
  }, {
    key: "getLegendDimensions",
    value: function() {
      var t3 = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(), e2 = t3.width;
      return {
        clwh: t3.height,
        clww: e2
      };
    }
  }, {
    key: "appendToForeignObject",
    value: function() {
      this.w.globals.dom.elLegendForeign.appendChild(this.getLegendStyles());
    }
  }, {
    key: "toggleDataSeries",
    value: function(t3, e2) {
      var i2 = this, a2 = this.w;
      if (a2.globals.axisCharts || "radialBar" === a2.config.chart.type) {
        a2.globals.resized = true;
        var s2 = null, r2 = null;
        if (a2.globals.risingSeries = [], a2.globals.axisCharts ? (s2 = a2.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t3, "']")), r2 = parseInt(s2.getAttribute("data:realIndex"), 10)) : (s2 = a2.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t3 + 1, "']")), r2 = parseInt(s2.getAttribute("rel"), 10) - 1), e2) [{
          cs: a2.globals.collapsedSeries,
          csi: a2.globals.collapsedSeriesIndices
        }, {
          cs: a2.globals.ancillaryCollapsedSeries,
          csi: a2.globals.ancillaryCollapsedSeriesIndices
        }].forEach(function(t4) {
          i2.riseCollapsedSeries(t4.cs, t4.csi, r2);
        });
        else this.hideSeries({
          seriesEl: s2,
          realIndex: r2
        });
      } else {
        var n2 = a2.globals.dom.Paper.findOne(" .apexcharts-series[rel='".concat(t3 + 1, "'] path")), o2 = a2.config.chart.type;
        if ("pie" === o2 || "polarArea" === o2 || "donut" === o2) {
          var l2 = a2.config.plotOptions.pie.donut.labels;
          new Mi(this.lgCtx.ctx).pathMouseDown(n2, null), this.lgCtx.ctx.pie.printDataLabelsInner(n2.node, l2);
        }
        n2.fire("click");
      }
    }
  }, {
    key: "getSeriesAfterCollapsing",
    value: function(t3) {
      var e2 = t3.realIndex, i2 = this.w, a2 = i2.globals, s2 = v.clone(i2.config.series);
      if (a2.axisCharts) {
        var r2 = i2.config.yaxis[a2.seriesYAxisReverseMap[e2]], n2 = {
          index: e2,
          data: s2[e2].data.slice(),
          type: s2[e2].type || i2.config.chart.type
        };
        if (r2 && r2.show && r2.showAlways) a2.ancillaryCollapsedSeriesIndices.indexOf(e2) < 0 && (a2.ancillaryCollapsedSeries.push(n2), a2.ancillaryCollapsedSeriesIndices.push(e2));
        else if (a2.collapsedSeriesIndices.indexOf(e2) < 0) {
          a2.collapsedSeries.push(n2), a2.collapsedSeriesIndices.push(e2);
          var o2 = a2.risingSeries.indexOf(e2);
          a2.risingSeries.splice(o2, 1);
        }
      } else a2.collapsedSeries.push({
        index: e2,
        data: s2[e2]
      }), a2.collapsedSeriesIndices.push(e2);
      return a2.allSeriesCollapsed = a2.collapsedSeries.length + a2.ancillaryCollapsedSeries.length === i2.config.series.length, this._getSeriesBasedOnCollapsedState(s2);
    }
  }, {
    key: "hideSeries",
    value: function(t3) {
      for (var e2 = t3.seriesEl, i2 = t3.realIndex, a2 = this.w, s2 = this.getSeriesAfterCollapsing({
        realIndex: i2
      }), r2 = e2.childNodes, n2 = 0; n2 < r2.length; n2++) r2[n2].classList.contains("apexcharts-series-markers-wrap") && (r2[n2].classList.contains("apexcharts-hide") ? r2[n2].classList.remove("apexcharts-hide") : r2[n2].classList.add("apexcharts-hide"));
      this.lgCtx.ctx.updateHelpers._updateSeries(s2, a2.config.chart.animations.dynamicAnimation.enabled);
    }
  }, {
    key: "riseCollapsedSeries",
    value: function(t3, e2, i2) {
      var a2 = this.w, s2 = v.clone(a2.config.series);
      if (t3.length > 0) {
        for (var r2 = 0; r2 < t3.length; r2++) t3[r2].index === i2 && (a2.globals.axisCharts ? s2[i2].data = t3[r2].data.slice() : s2[i2] = t3[r2].data, "number" != typeof s2[i2] && (s2[i2].hidden = false), t3.splice(r2, 1), e2.splice(r2, 1), a2.globals.risingSeries.push(i2));
        s2 = this._getSeriesBasedOnCollapsedState(s2), this.lgCtx.ctx.updateHelpers._updateSeries(s2, a2.config.chart.animations.dynamicAnimation.enabled);
      }
    }
  }, {
    key: "_getSeriesBasedOnCollapsedState",
    value: function(t3) {
      var e2 = this.w, i2 = 0;
      return e2.globals.axisCharts ? t3.forEach(function(a2, s2) {
        e2.globals.collapsedSeriesIndices.indexOf(s2) < 0 && e2.globals.ancillaryCollapsedSeriesIndices.indexOf(s2) < 0 || (t3[s2].data = [], i2++);
      }) : t3.forEach(function(a2, s2) {
        !e2.globals.collapsedSeriesIndices.indexOf(s2) < 0 && (t3[s2] = 0, i2++);
      }), e2.globals.allSeriesCollapsed = i2 === t3.length, t3;
    }
  }]), t2;
}();
var xa = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = "bar" === this.w.config.chart.type && this.w.config.plotOptions.bar.distributed && 1 === this.w.config.series.length, this.legendHelpers = new fa(this);
  }
  return s(t2, [{
    key: "init",
    value: function() {
      var t3 = this.w, e2 = t3.globals, i2 = t3.config, a2 = i2.legend.showForSingleSeries && 1 === e2.series.length || this.isBarsDistributed || e2.series.length > 1;
      if (this.legendHelpers.appendToForeignObject(), (a2 || !e2.axisCharts) && i2.legend.show) {
        for (; e2.dom.elLegendWrap.firstChild; ) e2.dom.elLegendWrap.removeChild(e2.dom.elLegendWrap.firstChild);
        this.drawLegends(), "bottom" === i2.legend.position || "top" === i2.legend.position ? this.legendAlignHorizontal() : "right" !== i2.legend.position && "left" !== i2.legend.position || this.legendAlignVertical();
      }
    }
  }, {
    key: "createLegendMarker",
    value: function(t3) {
      var e2 = t3.i, i2 = t3.fillcolor, a2 = this.w, s2 = document.createElement("span");
      s2.classList.add("apexcharts-legend-marker");
      var r2 = a2.config.legend.markers.shape || a2.config.markers.shape, n2 = r2;
      Array.isArray(r2) && (n2 = r2[e2]);
      var o2 = Array.isArray(a2.config.legend.markers.size) ? parseFloat(a2.config.legend.markers.size[e2]) : parseFloat(a2.config.legend.markers.size), l2 = Array.isArray(a2.config.legend.markers.offsetX) ? parseFloat(a2.config.legend.markers.offsetX[e2]) : parseFloat(a2.config.legend.markers.offsetX), h2 = Array.isArray(a2.config.legend.markers.offsetY) ? parseFloat(a2.config.legend.markers.offsetY[e2]) : parseFloat(a2.config.legend.markers.offsetY), c2 = Array.isArray(a2.config.legend.markers.strokeWidth) ? parseFloat(a2.config.legend.markers.strokeWidth[e2]) : parseFloat(a2.config.legend.markers.strokeWidth), d2 = s2.style;
      if (d2.height = 2 * (o2 + c2) + "px", d2.width = 2 * (o2 + c2) + "px", d2.left = l2 + "px", d2.top = h2 + "px", a2.config.legend.markers.customHTML) d2.background = "transparent", d2.color = i2[e2], Array.isArray(a2.config.legend.markers.customHTML) ? a2.config.legend.markers.customHTML[e2] && (s2.innerHTML = a2.config.legend.markers.customHTML[e2]()) : s2.innerHTML = a2.config.legend.markers.customHTML();
      else {
        var g2 = new Vi(this.ctx).getMarkerConfig({
          cssClass: "apexcharts-legend-marker apexcharts-marker apexcharts-marker-".concat(n2),
          seriesIndex: e2,
          strokeWidth: c2,
          size: o2
        }), p2 = window.SVG().addTo(s2).size("100%", "100%"), f2 = new Mi(this.ctx).drawMarker(0, 0, u(u({}, g2), {}, {
          pointFillColor: Array.isArray(i2) ? i2[e2] : g2.pointFillColor,
          shape: n2
        }));
        a2.globals.dom.Paper.find(".apexcharts-legend-marker.apexcharts-marker").forEach(function(t4) {
          t4.node.classList.contains("apexcharts-marker-triangle") ? t4.node.style.transform = "translate(50%, 45%)" : t4.node.style.transform = "translate(50%, 50%)";
        }), p2.add(f2);
      }
      return s2;
    }
  }, {
    key: "drawLegends",
    value: function() {
      var t3 = this, e2 = this, i2 = this.w, a2 = i2.config.legend.fontFamily, s2 = i2.globals.seriesNames, r2 = i2.config.legend.markers.fillColors ? i2.config.legend.markers.fillColors.slice() : i2.globals.colors.slice();
      if ("heatmap" === i2.config.chart.type) {
        var n2 = i2.config.plotOptions.heatmap.colorScale.ranges;
        s2 = n2.map(function(t4) {
          return t4.name ? t4.name : t4.from + " - " + t4.to;
        }), r2 = n2.map(function(t4) {
          return t4.color;
        });
      } else this.isBarsDistributed && (s2 = i2.globals.labels.slice());
      i2.config.legend.customLegendItems.length && (s2 = i2.config.legend.customLegendItems);
      var o2 = i2.globals.legendFormatter, l2 = i2.config.legend.inverseOrder, h2 = [];
      i2.globals.seriesGroups.length > 1 && i2.config.legend.clusterGroupedSeries && i2.globals.seriesGroups.forEach(function(t4, e3) {
        h2[e3] = document.createElement("div"), h2[e3].classList.add("apexcharts-legend-group", "apexcharts-legend-group-".concat(e3)), "horizontal" === i2.config.legend.clusterGroupedSeriesOrientation ? i2.globals.dom.elLegendWrap.classList.add("apexcharts-legend-group-horizontal") : h2[e3].classList.add("apexcharts-legend-group-vertical");
      });
      for (var c2 = function(e3) {
        var n3, l3 = o2(s2[e3], {
          seriesIndex: e3,
          w: i2
        }), c3 = false, d3 = false;
        if (i2.globals.collapsedSeries.length > 0) for (var u2 = 0; u2 < i2.globals.collapsedSeries.length; u2++) i2.globals.collapsedSeries[u2].index === e3 && (c3 = true);
        if (i2.globals.ancillaryCollapsedSeriesIndices.length > 0) for (var g2 = 0; g2 < i2.globals.ancillaryCollapsedSeriesIndices.length; g2++) i2.globals.ancillaryCollapsedSeriesIndices[g2] === e3 && (d3 = true);
        var p2 = t3.createLegendMarker({
          i: e3,
          fillcolor: r2
        });
        Mi.setAttrs(p2, {
          rel: e3 + 1,
          "data:collapsed": c3 || d3
        }), (c3 || d3) && p2.classList.add("apexcharts-inactive-legend");
        var f2 = document.createElement("div"), x2 = document.createElement("span");
        x2.classList.add("apexcharts-legend-text"), x2.innerHTML = Array.isArray(l3) ? l3.join(" ") : l3;
        var b2 = i2.config.legend.labels.useSeriesColors ? i2.globals.colors[e3] : Array.isArray(i2.config.legend.labels.colors) ? null === (n3 = i2.config.legend.labels.colors) || void 0 === n3 ? void 0 : n3[e3] : i2.config.legend.labels.colors;
        b2 || (b2 = i2.config.chart.foreColor), x2.style.color = b2, x2.style.fontSize = parseFloat(i2.config.legend.fontSize) + "px", x2.style.fontWeight = i2.config.legend.fontWeight, x2.style.fontFamily = a2 || i2.config.chart.fontFamily, Mi.setAttrs(x2, {
          rel: e3 + 1,
          i: e3,
          "data:default-text": encodeURIComponent(l3),
          "data:collapsed": c3 || d3
        }), f2.appendChild(p2), f2.appendChild(x2);
        var m2 = new Pi(t3.ctx);
        i2.config.legend.showForZeroSeries || 0 === m2.getSeriesTotalByIndex(e3) && m2.seriesHaveSameValues(e3) && !m2.isSeriesNull(e3) && -1 === i2.globals.collapsedSeriesIndices.indexOf(e3) && -1 === i2.globals.ancillaryCollapsedSeriesIndices.indexOf(e3) && f2.classList.add("apexcharts-hidden-zero-series");
        i2.config.legend.showForNullSeries || m2.isSeriesNull(e3) && -1 === i2.globals.collapsedSeriesIndices.indexOf(e3) && -1 === i2.globals.ancillaryCollapsedSeriesIndices.indexOf(e3) && f2.classList.add("apexcharts-hidden-null-series"), h2.length ? i2.globals.seriesGroups.forEach(function(t4, a3) {
          var s3;
          t4.includes(null === (s3 = i2.config.series[e3]) || void 0 === s3 ? void 0 : s3.name) && (i2.globals.dom.elLegendWrap.appendChild(h2[a3]), h2[a3].appendChild(f2));
        }) : i2.globals.dom.elLegendWrap.appendChild(f2), i2.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(i2.config.legend.horizontalAlign)), i2.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + i2.config.legend.position), f2.classList.add("apexcharts-legend-series"), f2.style.margin = "".concat(i2.config.legend.itemMargin.vertical, "px ").concat(i2.config.legend.itemMargin.horizontal, "px"), i2.globals.dom.elLegendWrap.style.width = i2.config.legend.width ? i2.config.legend.width + "px" : "", i2.globals.dom.elLegendWrap.style.height = i2.config.legend.height ? i2.config.legend.height + "px" : "", Mi.setAttrs(f2, {
          rel: e3 + 1,
          seriesName: v.escapeString(s2[e3]),
          "data:collapsed": c3 || d3
        }), (c3 || d3) && f2.classList.add("apexcharts-inactive-legend"), i2.config.legend.onItemClick.toggleDataSeries || f2.classList.add("apexcharts-no-click");
      }, d2 = l2 ? s2.length - 1 : 0; l2 ? d2 >= 0 : d2 <= s2.length - 1; l2 ? d2-- : d2++) c2(d2);
      i2.globals.dom.elWrap.addEventListener("click", e2.onLegendClick, true), i2.config.legend.onItemHover.highlightDataSeries && 0 === i2.config.legend.customLegendItems.length && (i2.globals.dom.elWrap.addEventListener("mousemove", e2.onLegendHovered, true), i2.globals.dom.elWrap.addEventListener("mouseout", e2.onLegendHovered, true));
    }
  }, {
    key: "setLegendWrapXY",
    value: function(t3, e2) {
      var i2 = this.w, a2 = i2.globals.dom.elLegendWrap, s2 = a2.clientHeight, r2 = 0, n2 = 0;
      if ("bottom" === i2.config.legend.position) n2 = i2.globals.svgHeight - Math.min(s2, i2.globals.svgHeight / 2) - 5;
      else if ("top" === i2.config.legend.position) {
        var o2 = new pa(this.ctx), l2 = o2.dimHelpers.getTitleSubtitleCoords("title").height, h2 = o2.dimHelpers.getTitleSubtitleCoords("subtitle").height;
        n2 = (l2 > 0 ? l2 - 10 : 0) + (h2 > 0 ? h2 - 10 : 0);
      }
      a2.style.position = "absolute", r2 = r2 + t3 + i2.config.legend.offsetX, n2 = n2 + e2 + i2.config.legend.offsetY, a2.style.left = r2 + "px", a2.style.top = n2 + "px", "right" === i2.config.legend.position && (a2.style.left = "auto", a2.style.right = 25 + i2.config.legend.offsetX + "px");
      ["width", "height"].forEach(function(t4) {
        a2.style[t4] && (a2.style[t4] = parseInt(i2.config.legend[t4], 10) + "px");
      });
    }
  }, {
    key: "legendAlignHorizontal",
    value: function() {
      var t3 = this.w;
      t3.globals.dom.elLegendWrap.style.right = 0;
      var e2 = new pa(this.ctx), i2 = e2.dimHelpers.getTitleSubtitleCoords("title"), a2 = e2.dimHelpers.getTitleSubtitleCoords("subtitle"), s2 = 0;
      "top" === t3.config.legend.position && (s2 = i2.height + a2.height + t3.config.title.margin + t3.config.subtitle.margin - 10), this.setLegendWrapXY(20, s2);
    }
  }, {
    key: "legendAlignVertical",
    value: function() {
      var t3 = this.w, e2 = this.legendHelpers.getLegendDimensions(), i2 = 0;
      "left" === t3.config.legend.position && (i2 = 20), "right" === t3.config.legend.position && (i2 = t3.globals.svgWidth - e2.clww - 10), this.setLegendWrapXY(i2, 20);
    }
  }, {
    key: "onLegendHovered",
    value: function(t3) {
      var e2 = this.w, i2 = t3.target.classList.contains("apexcharts-legend-series") || t3.target.classList.contains("apexcharts-legend-text") || t3.target.classList.contains("apexcharts-legend-marker");
      if ("heatmap" === e2.config.chart.type || this.isBarsDistributed) {
        if (i2) {
          var a2 = parseInt(t3.target.getAttribute("rel"), 10) - 1;
          this.ctx.events.fireEvent("legendHover", [this.ctx, a2, this.w]), new Zi(this.ctx).highlightRangeInSeries(t3, t3.target);
        }
      } else !t3.target.classList.contains("apexcharts-inactive-legend") && i2 && new Zi(this.ctx).toggleSeriesOnHover(t3, t3.target);
    }
  }, {
    key: "onLegendClick",
    value: function(t3) {
      var e2 = this.w;
      if (!e2.config.legend.customLegendItems.length && (t3.target.classList.contains("apexcharts-legend-series") || t3.target.classList.contains("apexcharts-legend-text") || t3.target.classList.contains("apexcharts-legend-marker"))) {
        var i2 = parseInt(t3.target.getAttribute("rel"), 10) - 1, a2 = "true" === t3.target.getAttribute("data:collapsed"), s2 = this.w.config.chart.events.legendClick;
        "function" == typeof s2 && s2(this.ctx, i2, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, i2, this.w]);
        var r2 = this.w.config.legend.markers.onClick;
        "function" == typeof r2 && t3.target.classList.contains("apexcharts-legend-marker") && (r2(this.ctx, i2, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, i2, this.w])), "treemap" !== e2.config.chart.type && "heatmap" !== e2.config.chart.type && !this.isBarsDistributed && e2.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(i2, a2);
      }
    }
  }]), t2;
}();
var ba = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
    var a2 = this.w;
    this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = a2.globals.minX, this.maxX = a2.globals.maxX;
  }
  return s(t2, [{
    key: "createToolbar",
    value: function() {
      var t3 = this, e2 = this.w, i2 = function() {
        return document.createElement("div");
      }, a2 = i2();
      if (a2.setAttribute("class", "apexcharts-toolbar"), a2.style.top = e2.config.chart.toolbar.offsetY + "px", a2.style.right = 3 - e2.config.chart.toolbar.offsetX + "px", e2.globals.dom.elWrap.appendChild(a2), this.elZoom = i2(), this.elZoomIn = i2(), this.elZoomOut = i2(), this.elPan = i2(), this.elSelection = i2(), this.elZoomReset = i2(), this.elMenuIcon = i2(), this.elMenu = i2(), this.elCustomIcons = [], this.t = e2.config.chart.toolbar.tools, Array.isArray(this.t.customIcons)) for (var s2 = 0; s2 < this.t.customIcons.length; s2++) this.elCustomIcons.push(i2());
      var r2 = [], n2 = function(i3, a3, s3) {
        var n3 = i3.toLowerCase();
        t3.t[n3] && e2.config.chart.zoom.enabled && r2.push({
          el: a3,
          icon: "string" == typeof t3.t[n3] ? t3.t[n3] : s3,
          title: t3.localeValues[i3],
          class: "apexcharts-".concat(n3, "-icon")
        });
      };
      n2("zoomIn", this.elZoomIn, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n'), n2("zoomOut", this.elZoomOut, '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n');
      var o2 = function(i3) {
        t3.t[i3] && e2.config.chart[i3].enabled && r2.push({
          el: "zoom" === i3 ? t3.elZoom : t3.elSelection,
          icon: "string" == typeof t3.t[i3] ? t3.t[i3] : "zoom" === i3 ? '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>' : '<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>',
          title: t3.localeValues["zoom" === i3 ? "selectionZoom" : "selection"],
          class: e2.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-".concat(i3, "-icon")
        });
      };
      o2("zoom"), o2("selection"), this.t.pan && e2.config.chart.zoom.enabled && r2.push({
        el: this.elPan,
        icon: "string" == typeof this.t.pan ? this.t.pan : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>',
        title: this.localeValues.pan,
        class: e2.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon"
      }), n2("reset", this.elZoomReset, '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>'), this.t.download && r2.push({
        el: this.elMenuIcon,
        icon: "string" == typeof this.t.download ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
        title: this.localeValues.menu,
        class: "apexcharts-menu-icon"
      });
      for (var l2 = 0; l2 < this.elCustomIcons.length; l2++) r2.push({
        el: this.elCustomIcons[l2],
        icon: this.t.customIcons[l2].icon,
        title: this.t.customIcons[l2].title,
        index: this.t.customIcons[l2].index,
        class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[l2].class
      });
      r2.forEach(function(t4, e3) {
        t4.index && v.moveIndexInArray(r2, e3, t4.index);
      });
      for (var h2 = 0; h2 < r2.length; h2++) Mi.setAttrs(r2[h2].el, {
        class: r2[h2].class,
        title: r2[h2].title
      }), r2[h2].el.innerHTML = r2[h2].icon, a2.appendChild(r2[h2].el);
      this._createHamburgerMenu(a2), e2.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : e2.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : e2.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners();
    }
  }, {
    key: "_createHamburgerMenu",
    value: function(t3) {
      this.elMenuItems = [], t3.appendChild(this.elMenu), Mi.setAttrs(this.elMenu, {
        class: "apexcharts-menu"
      });
      for (var e2 = [{
        name: "exportSVG",
        title: this.localeValues.exportToSVG
      }, {
        name: "exportPNG",
        title: this.localeValues.exportToPNG
      }, {
        name: "exportCSV",
        title: this.localeValues.exportToCSV
      }], i2 = 0; i2 < e2.length; i2++) this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i2].innerHTML = e2[i2].title, Mi.setAttrs(this.elMenuItems[i2], {
        class: "apexcharts-menu-item ".concat(e2[i2].name),
        title: e2[i2].title
      }), this.elMenu.appendChild(this.elMenuItems[i2]);
    }
  }, {
    key: "addToolbarEventListeners",
    value: function() {
      var t3 = this;
      this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach(function(e3) {
        e3.classList.contains("exportSVG") ? e3.addEventListener("click", t3.handleDownload.bind(t3, "svg")) : e3.classList.contains("exportPNG") ? e3.addEventListener("click", t3.handleDownload.bind(t3, "png")) : e3.classList.contains("exportCSV") && e3.addEventListener("click", t3.handleDownload.bind(t3, "csv"));
      });
      for (var e2 = 0; e2 < this.t.customIcons.length; e2++) this.elCustomIcons[e2].addEventListener("click", this.t.customIcons[e2].click.bind(this, this.ctx, this.ctx.w));
    }
  }, {
    key: "toggleZoomSelection",
    value: function(t3) {
      this.ctx.getSyncedCharts().forEach(function(e2) {
        e2.ctx.toolbar.toggleOtherControls();
        var i2 = "selection" === t3 ? e2.ctx.toolbar.elSelection : e2.ctx.toolbar.elZoom, a2 = "selection" === t3 ? "selectionEnabled" : "zoomEnabled";
        e2.w.globals[a2] = !e2.w.globals[a2], i2.classList.contains(e2.ctx.toolbar.selectedClass) ? i2.classList.remove(e2.ctx.toolbar.selectedClass) : i2.classList.add(e2.ctx.toolbar.selectedClass);
      });
    }
  }, {
    key: "getToolbarIconsReference",
    value: function() {
      var t3 = this.w;
      this.elZoom || (this.elZoom = t3.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t3.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t3.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"));
    }
  }, {
    key: "enableZoomPanFromToolbar",
    value: function(t3) {
      this.toggleOtherControls(), "pan" === t3 ? this.w.globals.panEnabled = true : this.w.globals.zoomEnabled = true;
      var e2 = "pan" === t3 ? this.elPan : this.elZoom, i2 = "pan" === t3 ? this.elZoom : this.elPan;
      e2 && e2.classList.add(this.selectedClass), i2 && i2.classList.remove(this.selectedClass);
    }
  }, {
    key: "togglePanning",
    value: function() {
      this.ctx.getSyncedCharts().forEach(function(t3) {
        t3.ctx.toolbar.toggleOtherControls(), t3.w.globals.panEnabled = !t3.w.globals.panEnabled, t3.ctx.toolbar.elPan.classList.contains(t3.ctx.toolbar.selectedClass) ? t3.ctx.toolbar.elPan.classList.remove(t3.ctx.toolbar.selectedClass) : t3.ctx.toolbar.elPan.classList.add(t3.ctx.toolbar.selectedClass);
      });
    }
  }, {
    key: "toggleOtherControls",
    value: function() {
      var t3 = this, e2 = this.w;
      e2.globals.panEnabled = false, e2.globals.zoomEnabled = false, e2.globals.selectionEnabled = false, this.getToolbarIconsReference(), [this.elPan, this.elSelection, this.elZoom].forEach(function(e3) {
        e3 && e3.classList.remove(t3.selectedClass);
      });
    }
  }, {
    key: "handleZoomIn",
    value: function() {
      var t3 = this.w;
      t3.globals.isRangeBar && (this.minX = t3.globals.minY, this.maxX = t3.globals.maxY);
      var e2 = (this.minX + this.maxX) / 2, i2 = (this.minX + e2) / 2, a2 = (this.maxX + e2) / 2, s2 = this._getNewMinXMaxX(i2, a2);
      t3.globals.disableZoomIn || this.zoomUpdateOptions(s2.minX, s2.maxX);
    }
  }, {
    key: "handleZoomOut",
    value: function() {
      var t3 = this.w;
      if (t3.globals.isRangeBar && (this.minX = t3.globals.minY, this.maxX = t3.globals.maxY), !("datetime" === t3.config.xaxis.type && new Date(this.minX).getUTCFullYear() < 1e3)) {
        var e2 = (this.minX + this.maxX) / 2, i2 = this.minX - (e2 - this.minX), a2 = this.maxX - (e2 - this.maxX), s2 = this._getNewMinXMaxX(i2, a2);
        t3.globals.disableZoomOut || this.zoomUpdateOptions(s2.minX, s2.maxX);
      }
    }
  }, {
    key: "_getNewMinXMaxX",
    value: function(t3, e2) {
      var i2 = this.w.config.xaxis.convertedCatToNumeric;
      return {
        minX: i2 ? Math.floor(t3) : t3,
        maxX: i2 ? Math.floor(e2) : e2
      };
    }
  }, {
    key: "zoomUpdateOptions",
    value: function(t3, e2) {
      var i2 = this.w;
      if (void 0 !== t3 || void 0 !== e2) {
        if (!(i2.config.xaxis.convertedCatToNumeric && (t3 < 1 && (t3 = 1, e2 = i2.globals.dataPoints), e2 - t3 < 2))) {
          var a2 = {
            min: t3,
            max: e2
          }, s2 = this.getBeforeZoomRange(a2);
          s2 && (a2 = s2.xaxis);
          var r2 = {
            xaxis: a2
          }, n2 = v.clone(i2.globals.initialConfig.yaxis);
          i2.config.chart.group || (r2.yaxis = n2), this.w.globals.zoomed = true, this.ctx.updateHelpers._updateOptions(r2, false, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(a2, n2);
        }
      } else this.handleZoomReset();
    }
  }, {
    key: "zoomCallback",
    value: function(t3, e2) {
      "function" == typeof this.ev.zoomed && this.ev.zoomed(this.ctx, {
        xaxis: t3,
        yaxis: e2
      });
    }
  }, {
    key: "getBeforeZoomRange",
    value: function(t3, e2) {
      var i2 = null;
      return "function" == typeof this.ev.beforeZoom && (i2 = this.ev.beforeZoom(this, {
        xaxis: t3,
        yaxis: e2
      })), i2;
    }
  }, {
    key: "toggleMenu",
    value: function() {
      var t3 = this;
      window.setTimeout(function() {
        t3.elMenu.classList.contains("apexcharts-menu-open") ? t3.elMenu.classList.remove("apexcharts-menu-open") : t3.elMenu.classList.add("apexcharts-menu-open");
      }, 0);
    }
  }, {
    key: "handleDownload",
    value: function(t3) {
      var e2 = this.w, i2 = new Ji(this.ctx);
      switch (t3) {
        case "svg":
          i2.exportToSVG(this.ctx);
          break;
        case "png":
          i2.exportToPng(this.ctx);
          break;
        case "csv":
          i2.exportToCSV({
            series: e2.config.series,
            columnDelimiter: e2.config.chart.toolbar.export.csv.columnDelimiter
          });
      }
    }
  }, {
    key: "handleZoomReset",
    value: function(t3) {
      this.ctx.getSyncedCharts().forEach(function(t4) {
        var e2 = t4.w;
        if (e2.globals.lastXAxis.min = e2.globals.initialConfig.xaxis.min, e2.globals.lastXAxis.max = e2.globals.initialConfig.xaxis.max, t4.updateHelpers.revertDefaultAxisMinMax(), "function" == typeof e2.config.chart.events.beforeResetZoom) {
          var i2 = e2.config.chart.events.beforeResetZoom(t4, e2);
          i2 && t4.updateHelpers.revertDefaultAxisMinMax(i2);
        }
        "function" == typeof e2.config.chart.events.zoomed && t4.ctx.toolbar.zoomCallback({
          min: e2.config.xaxis.min,
          max: e2.config.xaxis.max
        }), e2.globals.zoomed = false;
        var a2 = t4.ctx.series.emptyCollapsedSeries(v.clone(e2.globals.initialSeries));
        t4.updateHelpers._updateSeries(a2, e2.config.chart.animations.dynamicAnimation.enabled);
      });
    }
  }, {
    key: "destroy",
    value: function() {
      this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null;
    }
  }]), t2;
}();
var ma = function(t2) {
  h(a2, ba);
  var e2 = n(a2);
  function a2(t3) {
    var s2;
    return i(this, a2), (s2 = e2.call(this, t3)).ctx = t3, s2.w = t3.w, s2.dragged = false, s2.graphics = new Mi(s2.ctx), s2.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend", "wheel"], s2.clientX = 0, s2.clientY = 0, s2.startX = 0, s2.endX = 0, s2.dragX = 0, s2.startY = 0, s2.endY = 0, s2.dragY = 0, s2.moveDirection = "none", s2.debounceTimer = null, s2.debounceDelay = 100, s2.wheelDelay = 400, s2;
  }
  return s(a2, [{
    key: "init",
    value: function(t3) {
      var e3 = this, i2 = t3.xyRatios, a3 = this.w, s2 = this;
      this.xyRatios = i2, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = a3.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.constraints = new kt(0, 0, a3.globals.gridWidth, a3.globals.gridHeight), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), a3.globals.dom.Paper.add(this.zoomRect), a3.globals.dom.Paper.add(this.selectionRect), "x" === a3.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
        minX: 0,
        minY: 0,
        maxX: a3.globals.gridWidth,
        maxY: a3.globals.gridHeight
      }).on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")) : "y" === a3.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
        minX: 0,
        maxX: a3.globals.gridWidth
      }).on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove.namespace", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = a3.globals.dom.baseEl.querySelector("".concat(a3.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach(function(t4) {
        e3.hoverArea.addEventListener(t4, s2.svgMouseEvents.bind(s2, i2), {
          capture: false,
          passive: true
        });
      }), a3.config.chart.zoom.enabled && a3.config.chart.zoom.allowMouseWheelZoom && this.hoverArea.addEventListener("wheel", s2.mouseWheelEvent.bind(s2), {
        capture: false,
        passive: false
      });
    }
  }, {
    key: "destroy",
    value: function() {
      this.slDraggableRect && (this.slDraggableRect.draggable(false), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null;
    }
  }, {
    key: "svgMouseEvents",
    value: function(t3, e3) {
      var i2 = this.w, a3 = this.ctx.toolbar, s2 = i2.globals.zoomEnabled ? i2.config.chart.zoom.type : i2.config.chart.selection.type, r2 = i2.config.chart.toolbar.autoSelected;
      if (e3.shiftKey ? (this.shiftWasPressed = true, a3.enableZoomPanFromToolbar("pan" === r2 ? "zoom" : "pan")) : this.shiftWasPressed && (a3.enableZoomPanFromToolbar(r2), this.shiftWasPressed = false), e3.target) {
        var n2, o2 = e3.target.classList;
        if (e3.target.parentNode && null !== e3.target.parentNode && (n2 = e3.target.parentNode.classList), !(o2.contains("apexcharts-legend-marker") || o2.contains("apexcharts-legend-text") || n2 && n2.contains("apexcharts-toolbar"))) {
          if (this.clientX = "touchmove" === e3.type || "touchstart" === e3.type ? e3.touches[0].clientX : "touchend" === e3.type ? e3.changedTouches[0].clientX : e3.clientX, this.clientY = "touchmove" === e3.type || "touchstart" === e3.type ? e3.touches[0].clientY : "touchend" === e3.type ? e3.changedTouches[0].clientY : e3.clientY, "mousedown" === e3.type && 1 === e3.which || "touchstart" === e3.type) {
            var l2 = this.gridRect.getBoundingClientRect();
            this.startX = this.clientX - l2.left - i2.globals.barPadForNumericAxis, this.startY = this.clientY - l2.top, this.dragged = false, this.w.globals.mousedown = true;
          }
          ("mousemove" === e3.type && 1 === e3.which || "touchmove" === e3.type) && (this.dragged = true, i2.globals.panEnabled ? (i2.globals.selection = null, this.w.globals.mousedown && this.panDragging({
            context: this,
            zoomtype: s2,
            xyRatios: t3
          })) : (this.w.globals.mousedown && i2.globals.zoomEnabled || this.w.globals.mousedown && i2.globals.selectionEnabled) && (this.selection = this.selectionDrawing({
            context: this,
            zoomtype: s2
          }))), "mouseup" !== e3.type && "touchend" !== e3.type && "mouseleave" !== e3.type || this.handleMouseUp({
            zoomtype: s2
          }), this.makeSelectionRectDraggable();
        }
      }
    }
  }, {
    key: "handleMouseUp",
    value: function(t3) {
      var e3, i2 = t3.zoomtype, a3 = t3.isResized, s2 = this.w, r2 = null === (e3 = this.gridRect) || void 0 === e3 ? void 0 : e3.getBoundingClientRect();
      r2 && (this.w.globals.mousedown || a3) && (this.endX = this.clientX - r2.left - s2.globals.barPadForNumericAxis, this.endY = this.clientY - r2.top, this.dragX = Math.abs(this.endX - this.startX), this.dragY = Math.abs(this.endY - this.startY), (s2.globals.zoomEnabled || s2.globals.selectionEnabled) && this.selectionDrawn({
        context: this,
        zoomtype: i2
      }), s2.globals.panEnabled && s2.config.xaxis.convertedCatToNumeric && this.delayedPanScrolled()), s2.globals.zoomEnabled && this.hideSelectionRect(this.selectionRect), this.dragged = false, this.w.globals.mousedown = false;
    }
  }, {
    key: "mouseWheelEvent",
    value: function(t3) {
      var e3 = this, i2 = this.w;
      t3.preventDefault();
      var a3 = Date.now();
      a3 - i2.globals.lastWheelExecution > this.wheelDelay && (this.executeMouseWheelZoom(t3), i2.globals.lastWheelExecution = a3), this.debounceTimer && clearTimeout(this.debounceTimer), this.debounceTimer = setTimeout(function() {
        a3 - i2.globals.lastWheelExecution > e3.wheelDelay && (e3.executeMouseWheelZoom(t3), i2.globals.lastWheelExecution = a3);
      }, this.debounceDelay);
    }
  }, {
    key: "executeMouseWheelZoom",
    value: function(t3) {
      var e3, i2 = this.w;
      this.minX = i2.globals.isRangeBar ? i2.globals.minY : i2.globals.minX, this.maxX = i2.globals.isRangeBar ? i2.globals.maxY : i2.globals.maxX;
      var a3 = null === (e3 = this.gridRect) || void 0 === e3 ? void 0 : e3.getBoundingClientRect();
      if (a3) {
        var s2, r2, n2, o2 = (t3.clientX - a3.left) / a3.width, l2 = this.minX, h2 = this.maxX, c2 = h2 - l2;
        if (t3.deltaY < 0) {
          var d2 = l2 + o2 * c2;
          r2 = d2 - (s2 = 0.5 * c2) / 2, n2 = d2 + s2 / 2;
        } else r2 = l2 - (s2 = 1.5 * c2) / 2, n2 = h2 + s2 / 2;
        if (!i2.globals.isRangeBar) {
          r2 = Math.max(r2, i2.globals.initialMinX), n2 = Math.min(n2, i2.globals.initialMaxX);
          var u2 = 0.01 * (i2.globals.initialMaxX - i2.globals.initialMinX);
          if (n2 - r2 < u2) {
            var g2 = (r2 + n2) / 2;
            r2 = g2 - u2 / 2, n2 = g2 + u2 / 2;
          }
        }
        var p2 = this._getNewMinXMaxX(r2, n2);
        isNaN(p2.minX) || isNaN(p2.maxX) || this.zoomUpdateOptions(p2.minX, p2.maxX);
      }
    }
  }, {
    key: "makeSelectionRectDraggable",
    value: function() {
      var t3 = this, e3 = this.w;
      if (this.selectionRect) {
        var i2 = this.selectionRect.node.getBoundingClientRect();
        i2.width > 0 && i2.height > 0 && (this.selectionRect.select(false).resize(false), this.selectionRect.select({
          createRot: function() {
          },
          updateRot: function() {
          },
          createHandle: function(t4, e4, i3, a3, s2) {
            return "l" === s2 || "r" === s2 ? t4.circle(8).css({
              "stroke-width": 1,
              stroke: "#333",
              fill: "#fff"
            }) : t4.circle(0);
          },
          updateHandle: function(t4, e4) {
            return t4.center(e4[0], e4[1]);
          }
        }).resize().on("resize", function() {
          var i3 = e3.globals.zoomEnabled ? e3.config.chart.zoom.type : e3.config.chart.selection.type;
          t3.handleMouseUp({
            zoomtype: i3,
            isResized: true
          });
        }));
      }
    }
  }, {
    key: "preselectedSelection",
    value: function() {
      var t3 = this.w, e3 = this.xyRatios;
      if (!t3.globals.zoomEnabled) {
        if (void 0 !== t3.globals.selection && null !== t3.globals.selection) this.drawSelectionRect(u(u({}, t3.globals.selection), {}, {
          translateX: t3.globals.translateX,
          translateY: t3.globals.translateY
        }));
        else if (void 0 !== t3.config.chart.selection.xaxis.min && void 0 !== t3.config.chart.selection.xaxis.max) {
          var i2 = (t3.config.chart.selection.xaxis.min - t3.globals.minX) / e3.xRatio, a3 = t3.globals.gridWidth - (t3.globals.maxX - t3.config.chart.selection.xaxis.max) / e3.xRatio - i2;
          t3.globals.isRangeBar && (i2 = (t3.config.chart.selection.xaxis.min - t3.globals.yAxisScale[0].niceMin) / e3.invertedYRatio, a3 = (t3.config.chart.selection.xaxis.max - t3.config.chart.selection.xaxis.min) / e3.invertedYRatio);
          var s2 = {
            x: i2,
            y: 0,
            width: a3,
            height: t3.globals.gridHeight,
            translateX: t3.globals.translateX,
            translateY: t3.globals.translateY,
            selectionEnabled: true
          };
          this.drawSelectionRect(s2), this.makeSelectionRectDraggable(), "function" == typeof t3.config.chart.events.selection && t3.config.chart.events.selection(this.ctx, {
            xaxis: {
              min: t3.config.chart.selection.xaxis.min,
              max: t3.config.chart.selection.xaxis.max
            },
            yaxis: {}
          });
        }
      }
    }
  }, {
    key: "drawSelectionRect",
    value: function(t3) {
      var e3 = t3.x, i2 = t3.y, a3 = t3.width, s2 = t3.height, r2 = t3.translateX, n2 = void 0 === r2 ? 0 : r2, o2 = t3.translateY, l2 = void 0 === o2 ? 0 : o2, h2 = this.w, c2 = this.zoomRect, d2 = this.selectionRect;
      if (this.dragged || null !== h2.globals.selection) {
        var u2 = {
          transform: "translate(" + n2 + ", " + l2 + ")"
        };
        h2.globals.zoomEnabled && this.dragged && (a3 < 0 && (a3 = 1), c2.attr({
          x: e3,
          y: i2,
          width: a3,
          height: s2,
          fill: h2.config.chart.zoom.zoomedArea.fill.color,
          "fill-opacity": h2.config.chart.zoom.zoomedArea.fill.opacity,
          stroke: h2.config.chart.zoom.zoomedArea.stroke.color,
          "stroke-width": h2.config.chart.zoom.zoomedArea.stroke.width,
          "stroke-opacity": h2.config.chart.zoom.zoomedArea.stroke.opacity
        }), Mi.setAttrs(c2.node, u2)), h2.globals.selectionEnabled && (d2.attr({
          x: e3,
          y: i2,
          width: a3 > 0 ? a3 : 0,
          height: s2 > 0 ? s2 : 0,
          fill: h2.config.chart.selection.fill.color,
          "fill-opacity": h2.config.chart.selection.fill.opacity,
          stroke: h2.config.chart.selection.stroke.color,
          "stroke-width": h2.config.chart.selection.stroke.width,
          "stroke-dasharray": h2.config.chart.selection.stroke.dashArray,
          "stroke-opacity": h2.config.chart.selection.stroke.opacity
        }), Mi.setAttrs(d2.node, u2));
      }
    }
  }, {
    key: "hideSelectionRect",
    value: function(t3) {
      t3 && t3.attr({
        x: 0,
        y: 0,
        width: 0,
        height: 0
      });
    }
  }, {
    key: "selectionDrawing",
    value: function(t3) {
      var e3 = t3.context, i2 = t3.zoomtype, a3 = this.w, s2 = e3, r2 = this.gridRect.getBoundingClientRect(), n2 = s2.startX - 1, o2 = s2.startY, l2 = false, h2 = false, c2 = s2.clientX - r2.left - a3.globals.barPadForNumericAxis, d2 = s2.clientY - r2.top, g2 = c2 - n2, p2 = d2 - o2, f2 = {
        translateX: a3.globals.translateX,
        translateY: a3.globals.translateY
      };
      return Math.abs(g2 + n2) > a3.globals.gridWidth ? g2 = a3.globals.gridWidth - n2 : c2 < 0 && (g2 = n2), n2 > c2 && (l2 = true, g2 = Math.abs(g2)), o2 > d2 && (h2 = true, p2 = Math.abs(p2)), f2 = u(u({}, f2 = "x" === i2 ? {
        x: l2 ? n2 - g2 : n2,
        y: 0,
        width: g2,
        height: a3.globals.gridHeight
      } : "y" === i2 ? {
        x: 0,
        y: h2 ? o2 - p2 : o2,
        width: a3.globals.gridWidth,
        height: p2
      } : {
        x: l2 ? n2 - g2 : n2,
        y: h2 ? o2 - p2 : o2,
        width: g2,
        height: p2
      }), {}, {
        translateX: a3.globals.translateX,
        translateY: a3.globals.translateY
      }), s2.drawSelectionRect(f2), s2.selectionDragging("resizing"), f2;
    }
  }, {
    key: "selectionDragging",
    value: function(t3, e3) {
      var i2 = this, a3 = this.w;
      if (e3) {
        e3.preventDefault();
        var s2 = e3.detail, r2 = s2.handler, n2 = s2.box, o2 = n2.x, l2 = n2.y;
        o2 < this.constraints.x && (o2 = this.constraints.x), l2 < this.constraints.y && (l2 = this.constraints.y), n2.x2 > this.constraints.x2 && (o2 = this.constraints.x2 - n2.w), n2.y2 > this.constraints.y2 && (l2 = this.constraints.y2 - n2.h), r2.move(o2, l2);
        var h2 = this.xyRatios, c2 = this.selectionRect, d2 = 0;
        "resizing" === t3 && (d2 = 30);
        var u2 = function(t4) {
          return parseFloat(c2.node.getAttribute(t4));
        }, g2 = {
          x: u2("x"),
          y: u2("y"),
          width: u2("width"),
          height: u2("height")
        };
        a3.globals.selection = g2, "function" == typeof a3.config.chart.events.selection && a3.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout(function() {
          var t4, e4, s3, r3, n3 = i2.gridRect.getBoundingClientRect(), o3 = c2.node.getBoundingClientRect();
          a3.globals.isRangeBar ? (t4 = a3.globals.yAxisScale[0].niceMin + (o3.left - n3.left) * h2.invertedYRatio, e4 = a3.globals.yAxisScale[0].niceMin + (o3.right - n3.left) * h2.invertedYRatio, s3 = 0, r3 = 1) : (t4 = a3.globals.xAxisScale.niceMin + (o3.left - n3.left) * h2.xRatio, e4 = a3.globals.xAxisScale.niceMin + (o3.right - n3.left) * h2.xRatio, s3 = a3.globals.yAxisScale[0].niceMin + (n3.bottom - o3.bottom) * h2.yRatio[0], r3 = a3.globals.yAxisScale[0].niceMax - (o3.top - n3.top) * h2.yRatio[0]);
          var l3 = {
            xaxis: {
              min: t4,
              max: e4
            },
            yaxis: {
              min: s3,
              max: r3
            }
          };
          a3.config.chart.events.selection(i2.ctx, l3), a3.config.chart.brush.enabled && void 0 !== a3.config.chart.events.brushScrolled && a3.config.chart.events.brushScrolled(i2.ctx, l3);
        }, d2));
      }
    }
  }, {
    key: "selectionDrawn",
    value: function(t3) {
      var e3, i2, a3 = t3.context, s2 = t3.zoomtype, r2 = this.w, n2 = a3, o2 = this.xyRatios, l2 = this.ctx.toolbar, h2 = r2.globals.zoomEnabled ? n2.zoomRect.node.getBoundingClientRect() : n2.selectionRect.node.getBoundingClientRect(), c2 = n2.gridRect.getBoundingClientRect(), d2 = h2.left - c2.left - r2.globals.barPadForNumericAxis, u2 = h2.right - c2.left - r2.globals.barPadForNumericAxis, g2 = h2.top - c2.top, p2 = h2.bottom - c2.top;
      r2.globals.isRangeBar ? (e3 = r2.globals.yAxisScale[0].niceMin + d2 * o2.invertedYRatio, i2 = r2.globals.yAxisScale[0].niceMin + u2 * o2.invertedYRatio) : (e3 = r2.globals.xAxisScale.niceMin + d2 * o2.xRatio, i2 = r2.globals.xAxisScale.niceMin + u2 * o2.xRatio);
      var f2 = [], x2 = [];
      if (r2.config.yaxis.forEach(function(t4, e4) {
        var i3 = r2.globals.seriesYAxisMap[e4][0], a4 = r2.globals.yAxisScale[e4].niceMax - o2.yRatio[i3] * g2, s3 = r2.globals.yAxisScale[e4].niceMax - o2.yRatio[i3] * p2;
        f2.push(a4), x2.push(s3);
      }), n2.dragged && (n2.dragX > 10 || n2.dragY > 10) && e3 !== i2) {
        if (r2.globals.zoomEnabled) {
          var b2 = v.clone(r2.globals.initialConfig.yaxis), m2 = v.clone(r2.globals.initialConfig.xaxis);
          if (r2.globals.zoomed = true, r2.config.xaxis.convertedCatToNumeric && (e3 = Math.floor(e3), i2 = Math.floor(i2), e3 < 1 && (e3 = 1, i2 = r2.globals.dataPoints), i2 - e3 < 2 && (i2 = e3 + 1)), "xy" !== s2 && "x" !== s2 || (m2 = {
            min: e3,
            max: i2
          }), "xy" !== s2 && "y" !== s2 || b2.forEach(function(t4, e4) {
            b2[e4].min = x2[e4], b2[e4].max = f2[e4];
          }), l2) {
            var y2 = l2.getBeforeZoomRange(m2, b2);
            y2 && (m2 = y2.xaxis ? y2.xaxis : m2, b2 = y2.yaxis ? y2.yaxis : b2);
          }
          var w2 = {
            xaxis: m2
          };
          r2.config.chart.group || (w2.yaxis = b2), n2.ctx.updateHelpers._updateOptions(w2, false, n2.w.config.chart.animations.dynamicAnimation.enabled), "function" == typeof r2.config.chart.events.zoomed && l2.zoomCallback(m2, b2);
        } else if (r2.globals.selectionEnabled) {
          var k2, A2 = null;
          k2 = {
            min: e3,
            max: i2
          }, "xy" !== s2 && "y" !== s2 || (A2 = v.clone(r2.config.yaxis)).forEach(function(t4, e4) {
            A2[e4].min = x2[e4], A2[e4].max = f2[e4];
          }), r2.globals.selection = n2.selection, "function" == typeof r2.config.chart.events.selection && r2.config.chart.events.selection(n2.ctx, {
            xaxis: k2,
            yaxis: A2
          });
        }
      }
    }
  }, {
    key: "panDragging",
    value: function(t3) {
      var e3 = t3.context, i2 = this.w, a3 = e3;
      if (void 0 !== i2.globals.lastClientPosition.x) {
        var s2 = i2.globals.lastClientPosition.x - a3.clientX, r2 = i2.globals.lastClientPosition.y - a3.clientY;
        Math.abs(s2) > Math.abs(r2) && s2 > 0 ? this.moveDirection = "left" : Math.abs(s2) > Math.abs(r2) && s2 < 0 ? this.moveDirection = "right" : Math.abs(r2) > Math.abs(s2) && r2 > 0 ? this.moveDirection = "up" : Math.abs(r2) > Math.abs(s2) && r2 < 0 && (this.moveDirection = "down");
      }
      i2.globals.lastClientPosition = {
        x: a3.clientX,
        y: a3.clientY
      };
      var n2 = i2.globals.isRangeBar ? i2.globals.minY : i2.globals.minX, o2 = i2.globals.isRangeBar ? i2.globals.maxY : i2.globals.maxX;
      i2.config.xaxis.convertedCatToNumeric || a3.panScrolled(n2, o2);
    }
  }, {
    key: "delayedPanScrolled",
    value: function() {
      var t3 = this.w, e3 = t3.globals.minX, i2 = t3.globals.maxX, a3 = (t3.globals.maxX - t3.globals.minX) / 2;
      "left" === this.moveDirection ? (e3 = t3.globals.minX + a3, i2 = t3.globals.maxX + a3) : "right" === this.moveDirection && (e3 = t3.globals.minX - a3, i2 = t3.globals.maxX - a3), e3 = Math.floor(e3), i2 = Math.floor(i2), this.updateScrolledChart({
        xaxis: {
          min: e3,
          max: i2
        }
      }, e3, i2);
    }
  }, {
    key: "panScrolled",
    value: function(t3, e3) {
      var i2 = this.w, a3 = this.xyRatios, s2 = v.clone(i2.globals.initialConfig.yaxis), r2 = a3.xRatio, n2 = i2.globals.minX, o2 = i2.globals.maxX;
      i2.globals.isRangeBar && (r2 = a3.invertedYRatio, n2 = i2.globals.minY, o2 = i2.globals.maxY), "left" === this.moveDirection ? (t3 = n2 + i2.globals.gridWidth / 15 * r2, e3 = o2 + i2.globals.gridWidth / 15 * r2) : "right" === this.moveDirection && (t3 = n2 - i2.globals.gridWidth / 15 * r2, e3 = o2 - i2.globals.gridWidth / 15 * r2), i2.globals.isRangeBar || (t3 < i2.globals.initialMinX || e3 > i2.globals.initialMaxX) && (t3 = n2, e3 = o2);
      var l2 = {
        xaxis: {
          min: t3,
          max: e3
        }
      };
      i2.config.chart.group || (l2.yaxis = s2), this.updateScrolledChart(l2, t3, e3);
    }
  }, {
    key: "updateScrolledChart",
    value: function(t3, e3, i2) {
      var a3 = this.w;
      this.ctx.updateHelpers._updateOptions(t3, false, false), "function" == typeof a3.config.chart.events.scrolled && a3.config.chart.events.scrolled(this.ctx, {
        xaxis: {
          min: e3,
          max: i2
        }
      });
    }
  }]), a2;
}();
var va = function() {
  function t2(e2) {
    i(this, t2), this.w = e2.w, this.ttCtx = e2, this.ctx = e2.ctx;
  }
  return s(t2, [{
    key: "getNearestValues",
    value: function(t3) {
      var e2 = t3.hoverArea, i2 = t3.elGrid, a2 = t3.clientX, s2 = t3.clientY, r2 = this.w, n2 = i2.getBoundingClientRect(), o2 = n2.width, l2 = n2.height, h2 = o2 / (r2.globals.dataPoints - 1), c2 = l2 / r2.globals.dataPoints, d2 = this.hasBars();
      !r2.globals.comboCharts && !d2 || r2.config.xaxis.convertedCatToNumeric || (h2 = o2 / r2.globals.dataPoints);
      var u2 = a2 - n2.left - r2.globals.barPadForNumericAxis, g2 = s2 - n2.top;
      u2 < 0 || g2 < 0 || u2 > o2 || g2 > l2 ? (e2.classList.remove("hovering-zoom"), e2.classList.remove("hovering-pan")) : r2.globals.zoomEnabled ? (e2.classList.remove("hovering-pan"), e2.classList.add("hovering-zoom")) : r2.globals.panEnabled && (e2.classList.remove("hovering-zoom"), e2.classList.add("hovering-pan"));
      var p2 = Math.round(u2 / h2), f2 = Math.floor(g2 / c2);
      d2 && !r2.config.xaxis.convertedCatToNumeric && (p2 = Math.ceil(u2 / h2), p2 -= 1);
      var x2 = null, b2 = null, m2 = r2.globals.seriesXvalues.map(function(t4) {
        return t4.filter(function(t5) {
          return v.isNumber(t5);
        });
      }), y2 = r2.globals.seriesYvalues.map(function(t4) {
        return t4.filter(function(t5) {
          return v.isNumber(t5);
        });
      });
      if (r2.globals.isXNumeric) {
        var w2 = this.ttCtx.getElGrid().getBoundingClientRect(), k2 = u2 * (w2.width / o2), A2 = g2 * (w2.height / l2);
        x2 = (b2 = this.closestInMultiArray(k2, A2, m2, y2)).index, p2 = b2.j, null !== x2 && r2.globals.hasNullValues && (m2 = r2.globals.seriesXvalues[x2], p2 = (b2 = this.closestInArray(k2, m2)).j);
      }
      return r2.globals.capturedSeriesIndex = null === x2 ? -1 : x2, (!p2 || p2 < 1) && (p2 = 0), r2.globals.isBarHorizontal ? r2.globals.capturedDataPointIndex = f2 : r2.globals.capturedDataPointIndex = p2, {
        capturedSeries: x2,
        j: r2.globals.isBarHorizontal ? f2 : p2,
        hoverX: u2,
        hoverY: g2
      };
    }
  }, {
    key: "getFirstActiveXArray",
    value: function(t3) {
      for (var e2 = this.w, i2 = 0, a2 = t3.map(function(t4, e3) {
        return t4.length > 0 ? e3 : -1;
      }), s2 = 0; s2 < a2.length; s2++) if (-1 !== a2[s2] && -1 === e2.globals.collapsedSeriesIndices.indexOf(s2) && -1 === e2.globals.ancillaryCollapsedSeriesIndices.indexOf(s2)) {
        i2 = a2[s2];
        break;
      }
      return i2;
    }
  }, {
    key: "closestInMultiArray",
    value: function(t3, e2, i2, a2) {
      for (var s2, r2 = this.w, n2 = 1 / 0, o2 = null, l2 = null, h2 = 0; h2 < i2.length; h2++) if (s2 = h2, -1 === r2.globals.collapsedSeriesIndices.indexOf(s2) && -1 === r2.globals.ancillaryCollapsedSeriesIndices.indexOf(s2)) for (var c2 = i2[h2], d2 = a2[h2], u2 = Math.min(c2.length, d2.length), g2 = 0; g2 < u2; g2++) {
        var p2 = t3 - c2[g2], f2 = Math.sqrt(p2 * p2);
        if (!r2.globals.allSeriesHasEqualX) {
          var x2 = e2 - d2[g2];
          f2 = Math.sqrt(p2 * p2 + x2 * x2);
        }
        f2 < n2 && (n2 = f2, o2 = h2, l2 = g2);
      }
      return {
        index: o2,
        j: l2
      };
    }
  }, {
    key: "closestInArray",
    value: function(t3, e2) {
      for (var i2 = e2[0], a2 = null, s2 = Math.abs(t3 - i2), r2 = 0; r2 < e2.length; r2++) {
        var n2 = Math.abs(t3 - e2[r2]);
        n2 < s2 && (s2 = n2, a2 = r2);
      }
      return {
        j: a2
      };
    }
  }, {
    key: "isXoverlap",
    value: function(t3) {
      var e2 = [], i2 = this.w.globals.seriesX.filter(function(t4) {
        return void 0 !== t4[0];
      });
      if (i2.length > 0) for (var a2 = 0; a2 < i2.length - 1; a2++) void 0 !== i2[a2][t3] && void 0 !== i2[a2 + 1][t3] && i2[a2][t3] !== i2[a2 + 1][t3] && e2.push("unEqual");
      return 0 === e2.length;
    }
  }, {
    key: "isInitialSeriesSameLen",
    value: function() {
      for (var t3 = true, e2 = this.w.globals.initialSeries, i2 = 0; i2 < e2.length - 1; i2++) if (e2[i2].data.length !== e2[i2 + 1].data.length) {
        t3 = false;
        break;
      }
      return t3;
    }
  }, {
    key: "getBarsHeight",
    value: function(t3) {
      return f(t3).reduce(function(t4, e2) {
        return t4 + e2.getBBox().height;
      }, 0);
    }
  }, {
    key: "getElMarkers",
    value: function(t3) {
      return "number" == typeof t3 ? this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex='".concat(t3, "'] .apexcharts-series-markers-wrap > *")) : this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *");
    }
  }, {
    key: "getAllMarkers",
    value: function() {
      var t3 = this, e2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], i2 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
      i2 = f(i2), e2 && (i2 = i2.filter(function(e3) {
        var i3 = Number(e3.getAttribute("data:realIndex"));
        return -1 === t3.w.globals.collapsedSeriesIndices.indexOf(i3);
      })), i2.sort(function(t4, e3) {
        var i3 = Number(t4.getAttribute("data:realIndex")), a3 = Number(e3.getAttribute("data:realIndex"));
        return a3 < i3 ? 1 : a3 > i3 ? -1 : 0;
      });
      var a2 = [];
      return i2.forEach(function(t4) {
        a2.push(t4.querySelector(".apexcharts-marker"));
      }), a2;
    }
  }, {
    key: "hasMarkers",
    value: function(t3) {
      return this.getElMarkers(t3).length > 0;
    }
  }, {
    key: "getPathFromPoint",
    value: function(t3, e2) {
      var i2 = Number(t3.getAttribute("cx")), a2 = Number(t3.getAttribute("cy")), s2 = t3.getAttribute("shape");
      return new Mi(this.ctx).getMarkerPath(i2, a2, s2, e2);
    }
  }, {
    key: "getElBars",
    value: function() {
      return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series");
    }
  }, {
    key: "hasBars",
    value: function() {
      return this.getElBars().length > 0;
    }
  }, {
    key: "getHoverMarkerSize",
    value: function(t3) {
      var e2 = this.w, i2 = e2.config.markers.hover.size;
      return void 0 === i2 && (i2 = e2.globals.markers.size[t3] + e2.config.markers.hover.sizeOffset), i2;
    }
  }, {
    key: "toggleAllTooltipSeriesGroups",
    value: function(t3) {
      var e2 = this.w, i2 = this.ttCtx;
      0 === i2.allTooltipSeriesGroups.length && (i2.allTooltipSeriesGroups = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
      for (var a2 = i2.allTooltipSeriesGroups, s2 = 0; s2 < a2.length; s2++) "enable" === t3 ? (a2[s2].classList.add("apexcharts-active"), a2[s2].style.display = e2.config.tooltip.items.display) : (a2[s2].classList.remove("apexcharts-active"), a2[s2].style.display = "none");
    }
  }]), t2;
}();
var ya = function() {
  function t2(e2) {
    i(this, t2), this.w = e2.w, this.ctx = e2.ctx, this.ttCtx = e2, this.tooltipUtil = new va(e2);
  }
  return s(t2, [{
    key: "drawSeriesTexts",
    value: function(t3) {
      var e2 = t3.shared, i2 = void 0 === e2 || e2, a2 = t3.ttItems, s2 = t3.i, r2 = void 0 === s2 ? 0 : s2, n2 = t3.j, o2 = void 0 === n2 ? null : n2, l2 = t3.y1, h2 = t3.y2, c2 = t3.e, d2 = this.w;
      void 0 !== d2.config.tooltip.custom ? this.handleCustomTooltip({
        i: r2,
        j: o2,
        y1: l2,
        y2: h2,
        w: d2
      }) : this.toggleActiveInactiveSeries(i2, r2);
      var u2 = this.getValuesToPrint({
        i: r2,
        j: o2
      });
      this.printLabels({
        i: r2,
        j: o2,
        values: u2,
        ttItems: a2,
        shared: i2,
        e: c2
      });
      var g2 = this.ttCtx.getElTooltip();
      this.ttCtx.tooltipRect.ttWidth = g2.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = g2.getBoundingClientRect().height;
    }
  }, {
    key: "printLabels",
    value: function(t3) {
      var e2, i2 = this, a2 = t3.i, s2 = t3.j, r2 = t3.values, n2 = t3.ttItems, o2 = t3.shared, l2 = t3.e, h2 = this.w, c2 = [], d2 = function(t4) {
        return h2.globals.seriesGoals[t4] && h2.globals.seriesGoals[t4][s2] && Array.isArray(h2.globals.seriesGoals[t4][s2]);
      }, g2 = r2.xVal, p2 = r2.zVal, f2 = r2.xAxisTTVal, x2 = "", b2 = h2.globals.colors[a2];
      null !== s2 && h2.config.plotOptions.bar.distributed && (b2 = h2.globals.colors[s2]);
      for (var m2 = function(t4, r3) {
        var m3 = i2.getFormatters(a2);
        x2 = i2.getSeriesName({
          fn: m3.yLbTitleFormatter,
          index: a2,
          seriesIndex: a2,
          j: s2
        }), "treemap" === h2.config.chart.type && (x2 = m3.yLbTitleFormatter(String(h2.config.series[a2].data[s2].x), {
          series: h2.globals.series,
          seriesIndex: a2,
          dataPointIndex: s2,
          w: h2
        }));
        var v3 = h2.config.tooltip.inverseOrder ? r3 : t4;
        if (h2.globals.axisCharts) {
          var y3 = function(t5) {
            var e3, i3, a3, r4;
            return h2.globals.isRangeData ? m3.yLbFormatter(null === (e3 = h2.globals.seriesRangeStart) || void 0 === e3 || null === (i3 = e3[t5]) || void 0 === i3 ? void 0 : i3[s2], {
              series: h2.globals.seriesRangeStart,
              seriesIndex: t5,
              dataPointIndex: s2,
              w: h2
            }) + " - " + m3.yLbFormatter(null === (a3 = h2.globals.seriesRangeEnd) || void 0 === a3 || null === (r4 = a3[t5]) || void 0 === r4 ? void 0 : r4[s2], {
              series: h2.globals.seriesRangeEnd,
              seriesIndex: t5,
              dataPointIndex: s2,
              w: h2
            }) : m3.yLbFormatter(h2.globals.series[t5][s2], {
              series: h2.globals.series,
              seriesIndex: t5,
              dataPointIndex: s2,
              w: h2
            });
          };
          if (o2) m3 = i2.getFormatters(v3), x2 = i2.getSeriesName({
            fn: m3.yLbTitleFormatter,
            index: v3,
            seriesIndex: a2,
            j: s2
          }), b2 = h2.globals.colors[v3], e2 = y3(v3), d2(v3) && (c2 = h2.globals.seriesGoals[v3][s2].map(function(t5) {
            return {
              attrs: t5,
              val: m3.yLbFormatter(t5.value, {
                seriesIndex: v3,
                dataPointIndex: s2,
                w: h2
              })
            };
          }));
          else {
            var w2, k2 = null == l2 || null === (w2 = l2.target) || void 0 === w2 ? void 0 : w2.getAttribute("fill");
            k2 && (-1 !== k2.indexOf("url") ? -1 !== k2.indexOf("Pattern") && (b2 = h2.globals.dom.baseEl.querySelector(k2.substr(4).slice(0, -1)).childNodes[0].getAttribute("stroke")) : b2 = k2), e2 = y3(a2), d2(a2) && Array.isArray(h2.globals.seriesGoals[a2][s2]) && (c2 = h2.globals.seriesGoals[a2][s2].map(function(t5) {
              return {
                attrs: t5,
                val: m3.yLbFormatter(t5.value, {
                  seriesIndex: a2,
                  dataPointIndex: s2,
                  w: h2
                })
              };
            }));
          }
        }
        null === s2 && (e2 = m3.yLbFormatter(h2.globals.series[a2], u(u({}, h2), {}, {
          seriesIndex: a2,
          dataPointIndex: a2
        }))), i2.DOMHandling({
          i: a2,
          t: v3,
          j: s2,
          ttItems: n2,
          values: {
            val: e2,
            goalVals: c2,
            xVal: g2,
            xAxisTTVal: f2,
            zVal: p2
          },
          seriesName: x2,
          shared: o2,
          pColor: b2
        });
      }, v2 = 0, y2 = h2.globals.series.length - 1; v2 < h2.globals.series.length; v2++, y2--) m2(v2, y2);
    }
  }, {
    key: "getFormatters",
    value: function(t3) {
      var e2, i2 = this.w, a2 = i2.globals.yLabelFormatters[t3];
      return void 0 !== i2.globals.ttVal ? Array.isArray(i2.globals.ttVal) ? (a2 = i2.globals.ttVal[t3] && i2.globals.ttVal[t3].formatter, e2 = i2.globals.ttVal[t3] && i2.globals.ttVal[t3].title && i2.globals.ttVal[t3].title.formatter) : (a2 = i2.globals.ttVal.formatter, "function" == typeof i2.globals.ttVal.title.formatter && (e2 = i2.globals.ttVal.title.formatter)) : e2 = i2.config.tooltip.y.title.formatter, "function" != typeof a2 && (a2 = i2.globals.yLabelFormatters[0] ? i2.globals.yLabelFormatters[0] : function(t4) {
        return t4;
      }), "function" != typeof e2 && (e2 = function(t4) {
        return t4 ? t4 + ": " : "";
      }), {
        yLbFormatter: a2,
        yLbTitleFormatter: e2
      };
    }
  }, {
    key: "getSeriesName",
    value: function(t3) {
      var e2 = t3.fn, i2 = t3.index, a2 = t3.seriesIndex, s2 = t3.j, r2 = this.w;
      return e2(String(r2.globals.seriesNames[i2]), {
        series: r2.globals.series,
        seriesIndex: a2,
        dataPointIndex: s2,
        w: r2
      });
    }
  }, {
    key: "DOMHandling",
    value: function(t3) {
      t3.i;
      var e2 = t3.t, i2 = t3.j, a2 = t3.ttItems, s2 = t3.values, r2 = t3.seriesName, n2 = t3.shared, o2 = t3.pColor, l2 = this.w, h2 = this.ttCtx, c2 = s2.val, d2 = s2.goalVals, u2 = s2.xVal, g2 = s2.xAxisTTVal, p2 = s2.zVal, f2 = null;
      f2 = a2[e2].children, l2.config.tooltip.fillSeriesColor && (a2[e2].style.backgroundColor = o2, f2[0].style.display = "none"), h2.showTooltipTitle && (null === h2.tooltipTitle && (h2.tooltipTitle = l2.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), h2.tooltipTitle.innerHTML = u2), h2.isXAxisTooltipEnabled && (h2.xaxisTooltipText.innerHTML = "" !== g2 ? g2 : u2);
      var x2 = a2[e2].querySelector(".apexcharts-tooltip-text-y-label");
      x2 && (x2.innerHTML = r2 || "");
      var b2 = a2[e2].querySelector(".apexcharts-tooltip-text-y-value");
      b2 && (b2.innerHTML = void 0 !== c2 ? c2 : ""), f2[0] && f2[0].classList.contains("apexcharts-tooltip-marker") && (l2.config.tooltip.marker.fillColors && Array.isArray(l2.config.tooltip.marker.fillColors) && (o2 = l2.config.tooltip.marker.fillColors[e2]), l2.config.tooltip.fillSeriesColor ? f2[0].style.backgroundColor = o2 : f2[0].style.color = o2), l2.config.tooltip.marker.show || (f2[0].style.display = "none");
      var m2 = a2[e2].querySelector(".apexcharts-tooltip-text-goals-label"), v2 = a2[e2].querySelector(".apexcharts-tooltip-text-goals-value");
      if (d2.length && l2.globals.seriesGoals[e2]) {
        var y2 = function() {
          var t4 = "<div>", e3 = "<div>";
          d2.forEach(function(i3, a3) {
            t4 += ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(i3.attrs.strokeColor, '; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(i3.attrs.name, "</div>"), e3 += "<div>".concat(i3.val, "</div>");
          }), m2.innerHTML = t4 + "</div>", v2.innerHTML = e3 + "</div>";
        };
        n2 ? l2.globals.seriesGoals[e2][i2] && Array.isArray(l2.globals.seriesGoals[e2][i2]) ? y2() : (m2.innerHTML = "", v2.innerHTML = "") : y2();
      } else m2.innerHTML = "", v2.innerHTML = "";
      null !== p2 && (a2[e2].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = l2.config.tooltip.z.title, a2[e2].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = void 0 !== p2 ? p2 : "");
      if (n2 && f2[0]) {
        if (l2.config.tooltip.hideEmptySeries) {
          var w2 = a2[e2].querySelector(".apexcharts-tooltip-marker"), k2 = a2[e2].querySelector(".apexcharts-tooltip-text");
          0 == parseFloat(c2) ? (w2.style.display = "none", k2.style.display = "none") : (w2.style.display = "block", k2.style.display = "block");
        }
        null == c2 || l2.globals.ancillaryCollapsedSeriesIndices.indexOf(e2) > -1 || l2.globals.collapsedSeriesIndices.indexOf(e2) > -1 || Array.isArray(h2.tConfig.enabledOnSeries) && -1 === h2.tConfig.enabledOnSeries.indexOf(e2) ? f2[0].parentNode.style.display = "none" : f2[0].parentNode.style.display = l2.config.tooltip.items.display;
      } else Array.isArray(h2.tConfig.enabledOnSeries) && -1 === h2.tConfig.enabledOnSeries.indexOf(e2) && (f2[0].parentNode.style.display = "none");
    }
  }, {
    key: "toggleActiveInactiveSeries",
    value: function(t3, e2) {
      var i2 = this.w;
      if (t3) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
      else {
        this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
        var a2 = i2.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group-".concat(e2));
        a2 && (a2.classList.add("apexcharts-active"), a2.style.display = i2.config.tooltip.items.display);
      }
    }
  }, {
    key: "getValuesToPrint",
    value: function(t3) {
      var e2 = t3.i, i2 = t3.j, a2 = this.w, s2 = this.ctx.series.filteredSeriesX(), r2 = "", n2 = "", o2 = null, l2 = null, h2 = {
        series: a2.globals.series,
        seriesIndex: e2,
        dataPointIndex: i2,
        w: a2
      }, c2 = a2.globals.ttZFormatter;
      null === i2 ? l2 = a2.globals.series[e2] : a2.globals.isXNumeric && "treemap" !== a2.config.chart.type ? (r2 = s2[e2][i2], 0 === s2[e2].length && (r2 = s2[this.tooltipUtil.getFirstActiveXArray(s2)][i2])) : r2 = new $i(this.ctx).isFormatXY() ? void 0 !== a2.config.series[e2].data[i2] ? a2.config.series[e2].data[i2].x : "" : void 0 !== a2.globals.labels[i2] ? a2.globals.labels[i2] : "";
      var d2 = r2;
      a2.globals.isXNumeric && "datetime" === a2.config.xaxis.type ? r2 = new Xi(this.ctx).xLabelFormat(a2.globals.ttKeyFormatter, d2, d2, {
        i: void 0,
        dateFormatter: new zi(this.ctx).formatDate,
        w: this.w
      }) : r2 = a2.globals.isBarHorizontal ? a2.globals.yLabelFormatters[0](d2, h2) : a2.globals.xLabelFormatter(d2, h2);
      return void 0 !== a2.config.tooltip.x.formatter && (r2 = a2.globals.ttKeyFormatter(d2, h2)), a2.globals.seriesZ.length > 0 && a2.globals.seriesZ[e2].length > 0 && (o2 = c2(a2.globals.seriesZ[e2][i2], a2)), n2 = "function" == typeof a2.config.xaxis.tooltip.formatter ? a2.globals.xaxisTooltipFormatter(d2, h2) : r2, {
        val: Array.isArray(l2) ? l2.join(" ") : l2,
        xVal: Array.isArray(r2) ? r2.join(" ") : r2,
        xAxisTTVal: Array.isArray(n2) ? n2.join(" ") : n2,
        zVal: o2
      };
    }
  }, {
    key: "handleCustomTooltip",
    value: function(t3) {
      var e2 = t3.i, i2 = t3.j, a2 = t3.y1, s2 = t3.y2, r2 = t3.w, n2 = this.ttCtx.getElTooltip(), o2 = r2.config.tooltip.custom;
      Array.isArray(o2) && o2[e2] && (o2 = o2[e2]);
      var l2 = o2({
        ctx: this.ctx,
        series: r2.globals.series,
        seriesIndex: e2,
        dataPointIndex: i2,
        y1: a2,
        y2: s2,
        w: r2
      });
      "string" == typeof l2 ? n2.innerHTML = l2 : (l2 instanceof Element || "string" == typeof l2.nodeName) && (n2.innerHTML = "", n2.appendChild(l2.cloneNode(true)));
    }
  }]), t2;
}();
var wa = function() {
  function t2(e2) {
    i(this, t2), this.ttCtx = e2, this.ctx = e2.ctx, this.w = e2.w;
  }
  return s(t2, [{
    key: "moveXCrosshairs",
    value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, i2 = this.ttCtx, a2 = this.w, s2 = i2.getElXCrosshairs(), r2 = t3 - i2.xcrosshairsWidth / 2, n2 = a2.globals.labels.slice().length;
      if (null !== e2 && (r2 = a2.globals.gridWidth / n2 * e2), null === s2 || a2.globals.isBarHorizontal || (s2.setAttribute("x", r2), s2.setAttribute("x1", r2), s2.setAttribute("x2", r2), s2.setAttribute("y2", a2.globals.gridHeight), s2.classList.add("apexcharts-active")), r2 < 0 && (r2 = 0), r2 > a2.globals.gridWidth && (r2 = a2.globals.gridWidth), i2.isXAxisTooltipEnabled) {
        var o2 = r2;
        "tickWidth" !== a2.config.xaxis.crosshairs.width && "barWidth" !== a2.config.xaxis.crosshairs.width || (o2 = r2 + i2.xcrosshairsWidth / 2), this.moveXAxisTooltip(o2);
      }
    }
  }, {
    key: "moveYCrosshairs",
    value: function(t3) {
      var e2 = this.ttCtx;
      null !== e2.ycrosshairs && Mi.setAttrs(e2.ycrosshairs, {
        y1: t3,
        y2: t3
      }), null !== e2.ycrosshairsHidden && Mi.setAttrs(e2.ycrosshairsHidden, {
        y1: t3,
        y2: t3
      });
    }
  }, {
    key: "moveXAxisTooltip",
    value: function(t3) {
      var e2 = this.w, i2 = this.ttCtx;
      if (null !== i2.xaxisTooltip && 0 !== i2.xcrosshairsWidth) {
        i2.xaxisTooltip.classList.add("apexcharts-active");
        var a2 = i2.xaxisOffY + e2.config.xaxis.tooltip.offsetY + e2.globals.translateY + 1 + e2.config.xaxis.offsetY;
        if (t3 -= i2.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(t3)) {
          t3 += e2.globals.translateX;
          var s2;
          s2 = new Mi(this.ctx).getTextRects(i2.xaxisTooltipText.innerHTML), i2.xaxisTooltipText.style.minWidth = s2.width + "px", i2.xaxisTooltip.style.left = t3 + "px", i2.xaxisTooltip.style.top = a2 + "px";
        }
      }
    }
  }, {
    key: "moveYAxisTooltip",
    value: function(t3) {
      var e2 = this.w, i2 = this.ttCtx;
      null === i2.yaxisTTEls && (i2.yaxisTTEls = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
      var a2 = parseInt(i2.ycrosshairsHidden.getAttribute("y1"), 10), s2 = e2.globals.translateY + a2, r2 = i2.yaxisTTEls[t3].getBoundingClientRect().height, n2 = e2.globals.translateYAxisX[t3] - 2;
      e2.config.yaxis[t3].opposite && (n2 -= 26), s2 -= r2 / 2, -1 === e2.globals.ignoreYAxisIndexes.indexOf(t3) ? (i2.yaxisTTEls[t3].classList.add("apexcharts-active"), i2.yaxisTTEls[t3].style.top = s2 + "px", i2.yaxisTTEls[t3].style.left = n2 + e2.config.yaxis[t3].tooltip.offsetX + "px") : i2.yaxisTTEls[t3].classList.remove("apexcharts-active");
    }
  }, {
    key: "moveTooltip",
    value: function(t3, e2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a2 = this.w, s2 = this.ttCtx, r2 = s2.getElTooltip(), n2 = s2.tooltipRect, o2 = null !== i2 ? parseFloat(i2) : 1, l2 = parseFloat(t3) + o2 + 5, h2 = parseFloat(e2) + o2 / 2;
      if (l2 > a2.globals.gridWidth / 2 && (l2 = l2 - n2.ttWidth - o2 - 10), l2 > a2.globals.gridWidth - n2.ttWidth - 10 && (l2 = a2.globals.gridWidth - n2.ttWidth), l2 < -20 && (l2 = -20), a2.config.tooltip.followCursor) {
        var c2 = s2.getElGrid().getBoundingClientRect();
        (l2 = s2.e.clientX - c2.left) > a2.globals.gridWidth / 2 && (l2 -= s2.tooltipRect.ttWidth), (h2 = s2.e.clientY + a2.globals.translateY - c2.top) > a2.globals.gridHeight / 2 && (h2 -= s2.tooltipRect.ttHeight);
      } else a2.globals.isBarHorizontal || n2.ttHeight / 2 + h2 > a2.globals.gridHeight && (h2 = a2.globals.gridHeight - n2.ttHeight + a2.globals.translateY);
      isNaN(l2) || (l2 += a2.globals.translateX, r2.style.left = l2 + "px", r2.style.top = h2 + "px");
    }
  }, {
    key: "moveMarkers",
    value: function(t3, e2) {
      var i2 = this.w, a2 = this.ttCtx;
      if (i2.globals.markers.size[t3] > 0) for (var s2 = i2.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t3, "'] .apexcharts-marker")), r2 = 0; r2 < s2.length; r2++) parseInt(s2[r2].getAttribute("rel"), 10) === e2 && (a2.marker.resetPointsSize(), a2.marker.enlargeCurrentPoint(e2, s2[r2]));
      else a2.marker.resetPointsSize(), this.moveDynamicPointOnHover(e2, t3);
    }
  }, {
    key: "moveDynamicPointOnHover",
    value: function(t3, e2) {
      var i2, a2, s2, r2, n2 = this.w, o2 = this.ttCtx, l2 = new Mi(this.ctx), h2 = n2.globals.pointsArray, c2 = o2.tooltipUtil.getHoverMarkerSize(e2), d2 = n2.config.series[e2].type;
      if (!d2 || "column" !== d2 && "candlestick" !== d2 && "boxPlot" !== d2) {
        s2 = null === (i2 = h2[e2][t3]) || void 0 === i2 ? void 0 : i2[0], r2 = (null === (a2 = h2[e2][t3]) || void 0 === a2 ? void 0 : a2[1]) || 0;
        var u2 = n2.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e2, "'] .apexcharts-series-markers path"));
        if (u2 && r2 < n2.globals.gridHeight && r2 > 0) {
          var g2 = u2.getAttribute("shape"), p2 = l2.getMarkerPath(s2, r2, g2, 1.5 * c2);
          u2.setAttribute("d", p2);
        }
        this.moveXCrosshairs(s2), o2.fixedTooltip || this.moveTooltip(s2, r2, c2);
      }
    }
  }, {
    key: "moveDynamicPointsOnHover",
    value: function(t3) {
      var e2, i2 = this.ttCtx, a2 = i2.w, s2 = 0, r2 = 0, n2 = a2.globals.pointsArray, o2 = new Zi(this.ctx), l2 = new Mi(this.ctx);
      e2 = o2.getActiveConfigSeriesIndex("asc", ["line", "area", "scatter", "bubble"]);
      var h2 = i2.tooltipUtil.getHoverMarkerSize(e2);
      if (n2[e2] && (s2 = n2[e2][t3][0], r2 = n2[e2][t3][1]), !isNaN(s2)) {
        var c2 = i2.tooltipUtil.getAllMarkers();
        if (c2.length) for (var d2 = 0; d2 < a2.globals.series.length; d2++) {
          var u2 = n2[d2];
          if (a2.globals.comboCharts && void 0 === u2 && c2.splice(d2, 0, null), u2 && u2.length) {
            var g2 = n2[d2][t3][1], p2 = void 0;
            c2[d2].setAttribute("cx", s2);
            var f2 = c2[d2].getAttribute("shape");
            if ("rangeArea" === a2.config.chart.type && !a2.globals.comboCharts) {
              var x2 = t3 + a2.globals.series[d2].length;
              p2 = n2[d2][x2][1], g2 -= Math.abs(g2 - p2) / 2;
            }
            if (null !== g2 && !isNaN(g2) && g2 < a2.globals.gridHeight + h2 && g2 + h2 > 0) {
              var b2 = l2.getMarkerPath(s2, g2, f2, h2);
              c2[d2].setAttribute("d", b2);
            } else c2[d2].setAttribute("d", "");
          }
        }
        this.moveXCrosshairs(s2), i2.fixedTooltip || this.moveTooltip(s2, r2 || a2.globals.gridHeight, h2);
      }
    }
  }, {
    key: "moveStickyTooltipOverBars",
    value: function(t3, e2) {
      var i2 = this.w, a2 = this.ttCtx, s2 = i2.globals.columnSeries ? i2.globals.columnSeries.length : i2.globals.series.length;
      i2.config.chart.stacked && (s2 = i2.globals.barGroups.length);
      var r2 = s2 >= 2 && s2 % 2 == 0 ? Math.floor(s2 / 2) : Math.floor(s2 / 2) + 1;
      i2.globals.isBarHorizontal && (r2 = new Zi(this.ctx).getActiveConfigSeriesIndex("desc") + 1);
      var n2 = i2.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(r2, "'] path[j='").concat(t3, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(r2, "'] path[j='").concat(t3, "'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(r2, "'] path[j='").concat(t3, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(r2, "'] path[j='").concat(t3, "']"));
      n2 || "number" != typeof e2 || (n2 = i2.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[data\\:realIndex='".concat(e2, "'] path[j='").concat(t3, "'],\n        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='").concat(e2, "'] path[j='").concat(t3, "'],\n        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='").concat(e2, "'] path[j='").concat(t3, "'],\n        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='").concat(e2, "'] path[j='").concat(t3, "']")));
      var o2 = n2 ? parseFloat(n2.getAttribute("cx")) : 0, l2 = n2 ? parseFloat(n2.getAttribute("cy")) : 0, h2 = n2 ? parseFloat(n2.getAttribute("barWidth")) : 0, c2 = a2.getElGrid().getBoundingClientRect(), d2 = n2 && (n2.classList.contains("apexcharts-candlestick-area") || n2.classList.contains("apexcharts-boxPlot-area"));
      i2.globals.isXNumeric ? (n2 && !d2 && (o2 -= s2 % 2 != 0 ? h2 / 2 : 0), n2 && d2 && (o2 -= h2 / 2)) : i2.globals.isBarHorizontal || (o2 = a2.xAxisTicksPositions[t3 - 1] + a2.dataPointsDividedWidth / 2, isNaN(o2) && (o2 = a2.xAxisTicksPositions[t3] - a2.dataPointsDividedWidth / 2)), i2.globals.isBarHorizontal ? l2 -= a2.tooltipRect.ttHeight : i2.config.tooltip.followCursor ? l2 = a2.e.clientY - c2.top - a2.tooltipRect.ttHeight / 2 : l2 + a2.tooltipRect.ttHeight + 15 > i2.globals.gridHeight && (l2 = i2.globals.gridHeight), i2.globals.isBarHorizontal || this.moveXCrosshairs(o2), a2.fixedTooltip || this.moveTooltip(o2, l2 || i2.globals.gridHeight);
    }
  }]), t2;
}();
var ka = function() {
  function t2(e2) {
    i(this, t2), this.w = e2.w, this.ttCtx = e2, this.ctx = e2.ctx, this.tooltipPosition = new wa(e2);
  }
  return s(t2, [{
    key: "drawDynamicPoints",
    value: function() {
      var t3 = this.w, e2 = new Mi(this.ctx), i2 = new Vi(this.ctx), a2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
      a2 = f(a2), t3.config.chart.stacked && a2.sort(function(t4, e3) {
        return parseFloat(t4.getAttribute("data:realIndex")) - parseFloat(e3.getAttribute("data:realIndex"));
      });
      for (var s2 = 0; s2 < a2.length; s2++) {
        var r2 = a2[s2].querySelector(".apexcharts-series-markers-wrap");
        if (null !== r2) {
          var n2 = void 0, o2 = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4));
          "line" !== t3.config.chart.type && "area" !== t3.config.chart.type || t3.globals.comboCharts || t3.config.tooltip.intersect || (o2 += " no-pointer-events");
          var l2 = i2.getMarkerConfig({
            cssClass: o2,
            seriesIndex: Number(r2.getAttribute("data:realIndex"))
          });
          (n2 = e2.drawMarker(0, 0, l2)).node.setAttribute("default-marker-size", 0);
          var h2 = document.createElementNS(t3.globals.SVGNS, "g");
          h2.classList.add("apexcharts-series-markers"), h2.appendChild(n2.node), r2.appendChild(h2);
        }
      }
    }
  }, {
    key: "enlargeCurrentPoint",
    value: function(t3, e2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, a2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null, s2 = this.w;
      "bubble" !== s2.config.chart.type && this.newPointSize(t3, e2);
      var r2 = e2.getAttribute("cx"), n2 = e2.getAttribute("cy");
      if (null !== i2 && null !== a2 && (r2 = i2, n2 = a2), this.tooltipPosition.moveXCrosshairs(r2), !this.fixedTooltip) {
        if ("radar" === s2.config.chart.type) {
          var o2 = this.ttCtx.getElGrid().getBoundingClientRect();
          r2 = this.ttCtx.e.clientX - o2.left;
        }
        this.tooltipPosition.moveTooltip(r2, n2, s2.config.markers.hover.size);
      }
    }
  }, {
    key: "enlargePoints",
    value: function(t3) {
      for (var e2 = this.w, i2 = this, a2 = this.ttCtx, s2 = t3, r2 = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), n2 = e2.config.markers.hover.size, o2 = 0; o2 < r2.length; o2++) {
        var l2 = r2[o2].getAttribute("rel"), h2 = r2[o2].getAttribute("index");
        if (void 0 === n2 && (n2 = e2.globals.markers.size[h2] + e2.config.markers.hover.sizeOffset), s2 === parseInt(l2, 10)) {
          i2.newPointSize(s2, r2[o2]);
          var c2 = r2[o2].getAttribute("cx"), d2 = r2[o2].getAttribute("cy");
          i2.tooltipPosition.moveXCrosshairs(c2), a2.fixedTooltip || i2.tooltipPosition.moveTooltip(c2, d2, n2);
        } else i2.oldPointSize(r2[o2]);
      }
    }
  }, {
    key: "newPointSize",
    value: function(t3, e2) {
      var i2 = this.w, a2 = i2.config.markers.hover.size, s2 = 0 === t3 ? e2.parentNode.firstChild : e2.parentNode.lastChild;
      if ("0" !== s2.getAttribute("default-marker-size")) {
        var r2 = parseInt(s2.getAttribute("index"), 10);
        void 0 === a2 && (a2 = i2.globals.markers.size[r2] + i2.config.markers.hover.sizeOffset), a2 < 0 && (a2 = 0);
        var n2 = this.ttCtx.tooltipUtil.getPathFromPoint(e2, a2);
        e2.setAttribute("d", n2);
      }
    }
  }, {
    key: "oldPointSize",
    value: function(t3) {
      var e2 = parseFloat(t3.getAttribute("default-marker-size")), i2 = this.ttCtx.tooltipUtil.getPathFromPoint(t3, e2);
      t3.setAttribute("d", i2);
    }
  }, {
    key: "resetPointsSize",
    value: function() {
      for (var t3 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e2 = 0; e2 < t3.length; e2++) {
        var i2 = parseFloat(t3[e2].getAttribute("default-marker-size"));
        if (v.isNumber(i2) && i2 > 0) {
          var a2 = this.ttCtx.tooltipUtil.getPathFromPoint(t3[e2], i2);
          t3[e2].setAttribute("d", a2);
        } else t3[e2].setAttribute("d", "M0,0");
      }
    }
  }]), t2;
}();
var Aa = function() {
  function t2(e2) {
    i(this, t2), this.w = e2.w;
    var a2 = this.w;
    this.ttCtx = e2, this.isVerticalGroupedRangeBar = !a2.globals.isBarHorizontal && "rangeBar" === a2.config.chart.type && a2.config.plotOptions.bar.rangeBarGroupRows;
  }
  return s(t2, [{
    key: "getAttr",
    value: function(t3, e2) {
      return parseFloat(t3.target.getAttribute(e2));
    }
  }, {
    key: "handleHeatTreeTooltip",
    value: function(t3) {
      var e2 = t3.e, i2 = t3.opt, a2 = t3.x, s2 = t3.y, r2 = t3.type, n2 = this.ttCtx, o2 = this.w;
      if (e2.target.classList.contains("apexcharts-".concat(r2, "-rect"))) {
        var l2 = this.getAttr(e2, "i"), h2 = this.getAttr(e2, "j"), c2 = this.getAttr(e2, "cx"), d2 = this.getAttr(e2, "cy"), u2 = this.getAttr(e2, "width"), g2 = this.getAttr(e2, "height");
        if (n2.tooltipLabels.drawSeriesTexts({
          ttItems: i2.ttItems,
          i: l2,
          j: h2,
          shared: false,
          e: e2
        }), o2.globals.capturedSeriesIndex = l2, o2.globals.capturedDataPointIndex = h2, a2 = c2 + n2.tooltipRect.ttWidth / 2 + u2, s2 = d2 + n2.tooltipRect.ttHeight / 2 - g2 / 2, n2.tooltipPosition.moveXCrosshairs(c2 + u2 / 2), a2 > o2.globals.gridWidth / 2 && (a2 = c2 - n2.tooltipRect.ttWidth / 2 + u2), n2.w.config.tooltip.followCursor) {
          var p2 = o2.globals.dom.elWrap.getBoundingClientRect();
          a2 = o2.globals.clientX - p2.left - (a2 > o2.globals.gridWidth / 2 ? n2.tooltipRect.ttWidth : 0), s2 = o2.globals.clientY - p2.top - (s2 > o2.globals.gridHeight / 2 ? n2.tooltipRect.ttHeight : 0);
        }
      }
      return {
        x: a2,
        y: s2
      };
    }
  }, {
    key: "handleMarkerTooltip",
    value: function(t3) {
      var e2, i2, a2 = t3.e, s2 = t3.opt, r2 = t3.x, n2 = t3.y, o2 = this.w, l2 = this.ttCtx;
      if (a2.target.classList.contains("apexcharts-marker")) {
        var h2 = parseInt(s2.paths.getAttribute("cx"), 10), c2 = parseInt(s2.paths.getAttribute("cy"), 10), d2 = parseFloat(s2.paths.getAttribute("val"));
        if (i2 = parseInt(s2.paths.getAttribute("rel"), 10), e2 = parseInt(s2.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, l2.intersect) {
          var u2 = v.findAncestor(s2.paths, "apexcharts-series");
          u2 && (e2 = parseInt(u2.getAttribute("data:realIndex"), 10));
        }
        if (l2.tooltipLabels.drawSeriesTexts({
          ttItems: s2.ttItems,
          i: e2,
          j: i2,
          shared: !l2.showOnIntersect && o2.config.tooltip.shared,
          e: a2
        }), "mouseup" === a2.type && l2.markerClick(a2, e2, i2), o2.globals.capturedSeriesIndex = e2, o2.globals.capturedDataPointIndex = i2, r2 = h2, n2 = c2 + o2.globals.translateY - 1.4 * l2.tooltipRect.ttHeight, l2.w.config.tooltip.followCursor) {
          var g2 = l2.getElGrid().getBoundingClientRect();
          n2 = l2.e.clientY + o2.globals.translateY - g2.top;
        }
        d2 < 0 && (n2 = c2), l2.marker.enlargeCurrentPoint(i2, s2.paths, r2, n2);
      }
      return {
        x: r2,
        y: n2
      };
    }
  }, {
    key: "handleBarTooltip",
    value: function(t3) {
      var e2, i2, a2 = t3.e, s2 = t3.opt, r2 = this.w, n2 = this.ttCtx, o2 = n2.getElTooltip(), l2 = 0, h2 = 0, c2 = 0, d2 = this.getBarTooltipXY({
        e: a2,
        opt: s2
      });
      if (null !== d2.j || 0 !== d2.barHeight || 0 !== d2.barWidth) {
        e2 = d2.i;
        var u2 = d2.j;
        if (r2.globals.capturedSeriesIndex = e2, r2.globals.capturedDataPointIndex = u2, r2.globals.isBarHorizontal && n2.tooltipUtil.hasBars() || !r2.config.tooltip.shared ? (h2 = d2.x, c2 = d2.y, i2 = Array.isArray(r2.config.stroke.width) ? r2.config.stroke.width[e2] : r2.config.stroke.width, l2 = h2) : r2.globals.comboCharts || r2.config.tooltip.shared || (l2 /= 2), isNaN(c2) && (c2 = r2.globals.svgHeight - n2.tooltipRect.ttHeight), parseInt(s2.paths.parentNode.getAttribute("data:realIndex"), 10), h2 + n2.tooltipRect.ttWidth > r2.globals.gridWidth ? h2 -= n2.tooltipRect.ttWidth : h2 < 0 && (h2 = 0), n2.w.config.tooltip.followCursor) {
          var g2 = n2.getElGrid().getBoundingClientRect();
          c2 = n2.e.clientY - g2.top;
        }
        null === n2.tooltip && (n2.tooltip = r2.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), r2.config.tooltip.shared || (r2.globals.comboBarCount > 0 ? n2.tooltipPosition.moveXCrosshairs(l2 + i2 / 2) : n2.tooltipPosition.moveXCrosshairs(l2)), !n2.fixedTooltip && (!r2.config.tooltip.shared || r2.globals.isBarHorizontal && n2.tooltipUtil.hasBars()) && (c2 = c2 + r2.globals.translateY - n2.tooltipRect.ttHeight / 2, o2.style.left = h2 + r2.globals.translateX + "px", o2.style.top = c2 + "px");
      }
    }
  }, {
    key: "getBarTooltipXY",
    value: function(t3) {
      var e2 = this, i2 = t3.e, a2 = t3.opt, s2 = this.w, r2 = null, n2 = this.ttCtx, o2 = 0, l2 = 0, h2 = 0, c2 = 0, d2 = 0, u2 = i2.target.classList;
      if (u2.contains("apexcharts-bar-area") || u2.contains("apexcharts-candlestick-area") || u2.contains("apexcharts-boxPlot-area") || u2.contains("apexcharts-rangebar-area")) {
        var g2 = i2.target, p2 = g2.getBoundingClientRect(), f2 = a2.elGrid.getBoundingClientRect(), x2 = p2.height;
        d2 = p2.height;
        var b2 = p2.width, m2 = parseInt(g2.getAttribute("cx"), 10), v2 = parseInt(g2.getAttribute("cy"), 10);
        c2 = parseFloat(g2.getAttribute("barWidth"));
        var y2 = "touchmove" === i2.type ? i2.touches[0].clientX : i2.clientX;
        r2 = parseInt(g2.getAttribute("j"), 10), o2 = parseInt(g2.parentNode.getAttribute("rel"), 10) - 1;
        var w2 = g2.getAttribute("data-range-y1"), k2 = g2.getAttribute("data-range-y2");
        s2.globals.comboCharts && (o2 = parseInt(g2.parentNode.getAttribute("data:realIndex"), 10));
        var A2 = function(t4) {
          return s2.globals.isXNumeric ? m2 - b2 / 2 : e2.isVerticalGroupedRangeBar ? m2 + b2 / 2 : m2 - n2.dataPointsDividedWidth + b2 / 2;
        }, C2 = function() {
          return v2 - n2.dataPointsDividedHeight + x2 / 2 - n2.tooltipRect.ttHeight / 2;
        };
        n2.tooltipLabels.drawSeriesTexts({
          ttItems: a2.ttItems,
          i: o2,
          j: r2,
          y1: w2 ? parseInt(w2, 10) : null,
          y2: k2 ? parseInt(k2, 10) : null,
          shared: !n2.showOnIntersect && s2.config.tooltip.shared,
          e: i2
        }), s2.config.tooltip.followCursor ? s2.globals.isBarHorizontal ? (l2 = y2 - f2.left + 15, h2 = C2()) : (l2 = A2(), h2 = i2.clientY - f2.top - n2.tooltipRect.ttHeight / 2 - 15) : s2.globals.isBarHorizontal ? ((l2 = m2) < n2.xyRatios.baseLineInvertedY && (l2 = m2 - n2.tooltipRect.ttWidth), h2 = C2()) : (l2 = A2(), h2 = v2);
      }
      return {
        x: l2,
        y: h2,
        barHeight: d2,
        barWidth: c2,
        i: o2,
        j: r2
      };
    }
  }]), t2;
}();
var Ca = function() {
  function t2(e2) {
    i(this, t2), this.w = e2.w, this.ttCtx = e2;
  }
  return s(t2, [{
    key: "drawXaxisTooltip",
    value: function() {
      var t3 = this.w, e2 = this.ttCtx, i2 = "bottom" === t3.config.xaxis.position;
      e2.xaxisOffY = i2 ? t3.globals.gridHeight + 1 : -t3.globals.xAxisHeight - t3.config.xaxis.axisTicks.height + 3;
      var a2 = i2 ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top", s2 = t3.globals.dom.elWrap;
      e2.isXAxisTooltipEnabled && null === t3.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") && (e2.xaxisTooltip = document.createElement("div"), e2.xaxisTooltip.setAttribute("class", a2 + " apexcharts-theme-" + t3.config.tooltip.theme), s2.appendChild(e2.xaxisTooltip), e2.xaxisTooltipText = document.createElement("div"), e2.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e2.xaxisTooltipText.style.fontFamily = t3.config.xaxis.tooltip.style.fontFamily || t3.config.chart.fontFamily, e2.xaxisTooltipText.style.fontSize = t3.config.xaxis.tooltip.style.fontSize, e2.xaxisTooltip.appendChild(e2.xaxisTooltipText));
    }
  }, {
    key: "drawYaxisTooltip",
    value: function() {
      for (var t3 = this.w, e2 = this.ttCtx, i2 = 0; i2 < t3.config.yaxis.length; i2++) {
        var a2 = t3.config.yaxis[i2].opposite || t3.config.yaxis[i2].crosshairs.opposite;
        e2.yaxisOffX = a2 ? t3.globals.gridWidth + 1 : 1;
        var s2 = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i2, a2 ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left"), r2 = t3.globals.dom.elWrap;
        null === t3.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i2)) && (e2.yaxisTooltip = document.createElement("div"), e2.yaxisTooltip.setAttribute("class", s2 + " apexcharts-theme-" + t3.config.tooltip.theme), r2.appendChild(e2.yaxisTooltip), 0 === i2 && (e2.yaxisTooltipText = []), e2.yaxisTooltipText[i2] = document.createElement("div"), e2.yaxisTooltipText[i2].classList.add("apexcharts-yaxistooltip-text"), e2.yaxisTooltip.appendChild(e2.yaxisTooltipText[i2]));
      }
    }
  }, {
    key: "setXCrosshairWidth",
    value: function() {
      var t3 = this.w, e2 = this.ttCtx, i2 = e2.getElXCrosshairs();
      if (e2.xcrosshairsWidth = parseInt(t3.config.xaxis.crosshairs.width, 10), t3.globals.comboCharts) {
        var a2 = t3.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (null !== a2 && "barWidth" === t3.config.xaxis.crosshairs.width) {
          var s2 = parseFloat(a2.getAttribute("barWidth"));
          e2.xcrosshairsWidth = s2;
        } else if ("tickWidth" === t3.config.xaxis.crosshairs.width) {
          var r2 = t3.globals.labels.length;
          e2.xcrosshairsWidth = t3.globals.gridWidth / r2;
        }
      } else if ("tickWidth" === t3.config.xaxis.crosshairs.width) {
        var n2 = t3.globals.labels.length;
        e2.xcrosshairsWidth = t3.globals.gridWidth / n2;
      } else if ("barWidth" === t3.config.xaxis.crosshairs.width) {
        var o2 = t3.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (null !== o2) {
          var l2 = parseFloat(o2.getAttribute("barWidth"));
          e2.xcrosshairsWidth = l2;
        } else e2.xcrosshairsWidth = 1;
      }
      t3.globals.isBarHorizontal && (e2.xcrosshairsWidth = 0), null !== i2 && e2.xcrosshairsWidth > 0 && i2.setAttribute("width", e2.xcrosshairsWidth);
    }
  }, {
    key: "handleYCrosshair",
    value: function() {
      var t3 = this.w, e2 = this.ttCtx;
      e2.ycrosshairs = t3.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e2.ycrosshairsHidden = t3.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden");
    }
  }, {
    key: "drawYaxisTooltipText",
    value: function(t3, e2, i2) {
      var a2 = this.ttCtx, s2 = this.w, r2 = s2.globals, n2 = r2.seriesYAxisMap[t3];
      if (a2.yaxisTooltips[t3] && n2.length > 0) {
        var o2 = r2.yLabelFormatters[t3], l2 = a2.getElGrid().getBoundingClientRect(), h2 = n2[0], c2 = 0;
        i2.yRatio.length > 1 && (c2 = h2);
        var d2 = (e2 - l2.top) * i2.yRatio[c2], u2 = r2.maxYArr[h2] - r2.minYArr[h2], g2 = r2.minYArr[h2] + (u2 - d2);
        s2.config.yaxis[t3].reversed && (g2 = r2.maxYArr[h2] - (u2 - d2)), a2.tooltipPosition.moveYCrosshairs(e2 - l2.top), a2.yaxisTooltipText[t3].innerHTML = o2(g2), a2.tooltipPosition.moveYAxisTooltip(t3);
      }
    }
  }]), t2;
}();
var Sa = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
    var a2 = this.w;
    this.tConfig = a2.config.tooltip, this.tooltipUtil = new va(this), this.tooltipLabels = new ya(this), this.tooltipPosition = new wa(this), this.marker = new ka(this), this.intersect = new Aa(this), this.axesTooltip = new Ca(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !a2.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now();
  }
  return s(t2, [{
    key: "getElTooltip",
    value: function(t3) {
      return t3 || (t3 = this), t3.w.globals.dom.baseEl ? t3.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip") : null;
    }
  }, {
    key: "getElXCrosshairs",
    value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs");
    }
  }, {
    key: "getElGrid",
    value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid");
    }
  }, {
    key: "drawTooltip",
    value: function(t3) {
      var e2 = this.w;
      this.xyRatios = t3, this.isXAxisTooltipEnabled = e2.config.xaxis.tooltip.enabled && e2.globals.axisCharts, this.yaxisTooltips = e2.config.yaxis.map(function(t4, i3) {
        return !!(t4.show && t4.tooltip.enabled && e2.globals.axisCharts);
      }), this.allTooltipSeriesGroups = [], e2.globals.axisCharts || (this.showTooltipTitle = false);
      var i2 = document.createElement("div");
      if (i2.classList.add("apexcharts-tooltip"), e2.config.tooltip.cssClass && i2.classList.add(e2.config.tooltip.cssClass), i2.classList.add("apexcharts-theme-".concat(this.tConfig.theme)), e2.globals.dom.elWrap.appendChild(i2), e2.globals.axisCharts) {
        this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
        var a2 = new Qi(this.ctx);
        this.xAxisTicksPositions = a2.getXAxisTicksPositions();
      }
      if (!e2.globals.comboCharts && !this.tConfig.intersect && "rangeBar" !== e2.config.chart.type || this.tConfig.shared || (this.showOnIntersect = true), 0 !== e2.config.markers.size && 0 !== e2.globals.markers.largestSize || this.marker.drawDynamicPoints(this), e2.globals.collapsedSeries.length !== e2.globals.series.length) {
        this.dataPointsDividedHeight = e2.globals.gridHeight / e2.globals.dataPoints, this.dataPointsDividedWidth = e2.globals.gridWidth / e2.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || e2.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, i2.appendChild(this.tooltipTitle));
        var s2 = e2.globals.series.length;
        (e2.globals.xyCharts || e2.globals.comboCharts) && this.tConfig.shared && (s2 = this.showOnIntersect ? 1 : e2.globals.series.length), this.legendLabels = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(s2), this.addSVGEvents();
      }
    }
  }, {
    key: "createTTElements",
    value: function(t3) {
      for (var e2 = this, i2 = this.w, a2 = [], s2 = this.getElTooltip(), r2 = function(r3) {
        var n3 = document.createElement("div");
        n3.classList.add("apexcharts-tooltip-series-group", "apexcharts-tooltip-series-group-".concat(r3)), n3.style.order = i2.config.tooltip.inverseOrder ? t3 - r3 : r3 + 1;
        var o2 = document.createElement("span");
        o2.classList.add("apexcharts-tooltip-marker"), i2.config.tooltip.fillSeriesColor ? o2.style.backgroundColor = i2.globals.colors[r3] : o2.style.color = i2.globals.colors[r3];
        var l2 = i2.config.markers.shape, h2 = l2;
        Array.isArray(l2) && (h2 = l2[r3]), o2.setAttribute("shape", h2), n3.appendChild(o2);
        var c2 = document.createElement("div");
        c2.classList.add("apexcharts-tooltip-text"), c2.style.fontFamily = e2.tConfig.style.fontFamily || i2.config.chart.fontFamily, c2.style.fontSize = e2.tConfig.style.fontSize, ["y", "goals", "z"].forEach(function(t4) {
          var e3 = document.createElement("div");
          e3.classList.add("apexcharts-tooltip-".concat(t4, "-group"));
          var i3 = document.createElement("span");
          i3.classList.add("apexcharts-tooltip-text-".concat(t4, "-label")), e3.appendChild(i3);
          var a3 = document.createElement("span");
          a3.classList.add("apexcharts-tooltip-text-".concat(t4, "-value")), e3.appendChild(a3), c2.appendChild(e3);
        }), n3.appendChild(c2), s2.appendChild(n3), a2.push(n3);
      }, n2 = 0; n2 < t3; n2++) r2(n2);
      return a2;
    }
  }, {
    key: "addSVGEvents",
    value: function() {
      var t3 = this.w, e2 = t3.config.chart.type, i2 = this.getElTooltip(), a2 = !("bar" !== e2 && "candlestick" !== e2 && "boxPlot" !== e2 && "rangeBar" !== e2), s2 = "area" === e2 || "line" === e2 || "scatter" === e2 || "bubble" === e2 || "radar" === e2, r2 = t3.globals.dom.Paper.node, n2 = this.getElGrid();
      n2 && (this.seriesBound = n2.getBoundingClientRect());
      var o2, l2 = [], h2 = [], c2 = {
        hoverArea: r2,
        elGrid: n2,
        tooltipEl: i2,
        tooltipY: l2,
        tooltipX: h2,
        ttItems: this.ttItems
      };
      if (t3.globals.axisCharts && (s2 ? o2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : a2 ? o2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : "heatmap" !== e2 && "treemap" !== e2 || (o2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), o2 && o2.length)) for (var d2 = 0; d2 < o2.length; d2++) l2.push(o2[d2].getAttribute("cy")), h2.push(o2[d2].getAttribute("cx"));
      if (t3.globals.xyCharts && !this.showOnIntersect || t3.globals.comboCharts && !this.showOnIntersect || a2 && this.tooltipUtil.hasBars() && this.tConfig.shared) this.addPathsEventListeners([r2], c2);
      else if (a2 && !t3.globals.comboCharts || s2 && this.showOnIntersect) this.addDatapointEventsListeners(c2);
      else if (!t3.globals.axisCharts || "heatmap" === e2 || "treemap" === e2) {
        var u2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
        this.addPathsEventListeners(u2, c2);
      }
      if (this.showOnIntersect) {
        var g2 = t3.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
        g2.length > 0 && this.addPathsEventListeners(g2, c2), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(c2);
      }
    }
  }, {
    key: "drawFixedTooltipRect",
    value: function() {
      var t3 = this.w, e2 = this.getElTooltip(), i2 = e2.getBoundingClientRect(), a2 = i2.width + 10, s2 = i2.height + 10, r2 = this.tConfig.fixed.offsetX, n2 = this.tConfig.fixed.offsetY, o2 = this.tConfig.fixed.position.toLowerCase();
      return o2.indexOf("right") > -1 && (r2 = r2 + t3.globals.svgWidth - a2 + 10), o2.indexOf("bottom") > -1 && (n2 = n2 + t3.globals.svgHeight - s2 - 10), e2.style.left = r2 + "px", e2.style.top = n2 + "px", {
        x: r2,
        y: n2,
        ttWidth: a2,
        ttHeight: s2
      };
    }
  }, {
    key: "addDatapointEventsListeners",
    value: function(t3) {
      var e2 = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
      this.addPathsEventListeners(e2, t3);
    }
  }, {
    key: "addPathsEventListeners",
    value: function(t3, e2) {
      for (var i2 = this, a2 = function(a3) {
        var s3 = {
          paths: t3[a3],
          tooltipEl: e2.tooltipEl,
          tooltipY: e2.tooltipY,
          tooltipX: e2.tooltipX,
          elGrid: e2.elGrid,
          hoverArea: e2.hoverArea,
          ttItems: e2.ttItems
        };
        ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map(function(e3) {
          return t3[a3].addEventListener(e3, i2.onSeriesHover.bind(i2, s3), {
            capture: false,
            passive: true
          });
        });
      }, s2 = 0; s2 < t3.length; s2++) a2(s2);
    }
  }, {
    key: "onSeriesHover",
    value: function(t3, e2) {
      var i2 = this, a2 = Date.now() - this.lastHoverTime;
      a2 >= 20 ? this.seriesHover(t3, e2) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout(function() {
        i2.seriesHover(t3, e2);
      }, 20 - a2));
    }
  }, {
    key: "seriesHover",
    value: function(t3, e2) {
      var i2 = this;
      this.lastHoverTime = Date.now();
      var a2 = [], s2 = this.w;
      s2.config.chart.group && (a2 = this.ctx.getGroupedCharts()), s2.globals.axisCharts && (s2.globals.minX === -1 / 0 && s2.globals.maxX === 1 / 0 || 0 === s2.globals.dataPoints) || (a2.length ? a2.forEach(function(a3) {
        var s3 = i2.getElTooltip(a3), r2 = {
          paths: t3.paths,
          tooltipEl: s3,
          tooltipY: t3.tooltipY,
          tooltipX: t3.tooltipX,
          elGrid: t3.elGrid,
          hoverArea: t3.hoverArea,
          ttItems: a3.w.globals.tooltip.ttItems
        };
        a3.w.globals.minX === i2.w.globals.minX && a3.w.globals.maxX === i2.w.globals.maxX && a3.w.globals.tooltip.seriesHoverByContext({
          chartCtx: a3,
          ttCtx: a3.w.globals.tooltip,
          opt: r2,
          e: e2
        });
      }) : this.seriesHoverByContext({
        chartCtx: this.ctx,
        ttCtx: this.w.globals.tooltip,
        opt: t3,
        e: e2
      }));
    }
  }, {
    key: "seriesHoverByContext",
    value: function(t3) {
      var e2 = t3.chartCtx, i2 = t3.ttCtx, a2 = t3.opt, s2 = t3.e, r2 = e2.w, n2 = this.getElTooltip(e2);
      if (n2) {
        if (i2.tooltipRect = {
          x: 0,
          y: 0,
          ttWidth: n2.getBoundingClientRect().width,
          ttHeight: n2.getBoundingClientRect().height
        }, i2.e = s2, i2.tooltipUtil.hasBars() && !r2.globals.comboCharts && !i2.isBarShared) {
          if (this.tConfig.onDatasetHover.highlightDataSeries) new Zi(e2).toggleSeriesOnHover(s2, s2.target.parentNode);
        }
        i2.fixedTooltip && i2.drawFixedTooltipRect(), r2.globals.axisCharts ? i2.axisChartsTooltips({
          e: s2,
          opt: a2,
          tooltipRect: i2.tooltipRect
        }) : i2.nonAxisChartsTooltips({
          e: s2,
          opt: a2,
          tooltipRect: i2.tooltipRect
        });
      }
    }
  }, {
    key: "axisChartsTooltips",
    value: function(t3) {
      var e2, i2, a2 = t3.e, s2 = t3.opt, r2 = this.w, n2 = s2.elGrid.getBoundingClientRect(), o2 = "touchmove" === a2.type ? a2.touches[0].clientX : a2.clientX, l2 = "touchmove" === a2.type ? a2.touches[0].clientY : a2.clientY;
      if (this.clientY = l2, this.clientX = o2, r2.globals.capturedSeriesIndex = -1, r2.globals.capturedDataPointIndex = -1, l2 < n2.top || l2 > n2.top + n2.height) this.handleMouseOut(s2);
      else {
        if (Array.isArray(this.tConfig.enabledOnSeries) && !r2.config.tooltip.shared) {
          var h2 = parseInt(s2.paths.getAttribute("index"), 10);
          if (this.tConfig.enabledOnSeries.indexOf(h2) < 0) return void this.handleMouseOut(s2);
        }
        var c2 = this.getElTooltip(), d2 = this.getElXCrosshairs(), u2 = [];
        r2.config.chart.group && (u2 = this.ctx.getSyncedCharts());
        var g2 = r2.globals.xyCharts || "bar" === r2.config.chart.type && !r2.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || r2.globals.comboCharts && this.tooltipUtil.hasBars();
        if ("mousemove" === a2.type || "touchmove" === a2.type || "mouseup" === a2.type) {
          if (r2.globals.collapsedSeries.length + r2.globals.ancillaryCollapsedSeries.length === r2.globals.series.length) return;
          null !== d2 && d2.classList.add("apexcharts-active");
          var p2 = this.yaxisTooltips.filter(function(t4) {
            return true === t4;
          });
          if (null !== this.ycrosshairs && p2.length && this.ycrosshairs.classList.add("apexcharts-active"), g2 && !this.showOnIntersect || u2.length > 1) this.handleStickyTooltip(a2, o2, l2, s2);
          else if ("heatmap" === r2.config.chart.type || "treemap" === r2.config.chart.type) {
            var f2 = this.intersect.handleHeatTreeTooltip({
              e: a2,
              opt: s2,
              x: e2,
              y: i2,
              type: r2.config.chart.type
            });
            e2 = f2.x, i2 = f2.y, c2.style.left = e2 + "px", c2.style.top = i2 + "px";
          } else this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({
            e: a2,
            opt: s2
          }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({
            e: a2,
            opt: s2,
            x: e2,
            y: i2
          });
          if (this.yaxisTooltips.length) for (var x2 = 0; x2 < r2.config.yaxis.length; x2++) this.axesTooltip.drawYaxisTooltipText(x2, l2, this.xyRatios);
          r2.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), s2.tooltipEl.classList.add("apexcharts-active");
        } else "mouseout" !== a2.type && "touchend" !== a2.type || this.handleMouseOut(s2);
      }
    }
  }, {
    key: "nonAxisChartsTooltips",
    value: function(t3) {
      var e2 = t3.e, i2 = t3.opt, a2 = t3.tooltipRect, s2 = this.w, r2 = i2.paths.getAttribute("rel"), n2 = this.getElTooltip(), o2 = s2.globals.dom.elWrap.getBoundingClientRect();
      if ("mousemove" === e2.type || "touchmove" === e2.type) {
        s2.globals.dom.baseEl.classList.add("apexcharts-tooltip-active"), n2.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({
          ttItems: i2.ttItems,
          i: parseInt(r2, 10) - 1,
          shared: false
        });
        var l2 = s2.globals.clientX - o2.left - a2.ttWidth / 2, h2 = s2.globals.clientY - o2.top - a2.ttHeight - 10;
        if (n2.style.left = l2 + "px", n2.style.top = h2 + "px", s2.config.legend.tooltipHoverFormatter) {
          var c2 = r2 - 1, d2 = (0, s2.config.legend.tooltipHoverFormatter)(this.legendLabels[c2].getAttribute("data:default-text"), {
            seriesIndex: c2,
            dataPointIndex: c2,
            w: s2
          });
          this.legendLabels[c2].innerHTML = d2;
        }
      } else "mouseout" !== e2.type && "touchend" !== e2.type || (n2.classList.remove("apexcharts-active"), s2.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), s2.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(t4) {
        var e3 = t4.getAttribute("data:default-text");
        t4.innerHTML = decodeURIComponent(e3);
      }));
    }
  }, {
    key: "handleStickyTooltip",
    value: function(t3, e2, i2, a2) {
      var s2 = this.w, r2 = this.tooltipUtil.getNearestValues({
        context: this,
        hoverArea: a2.hoverArea,
        elGrid: a2.elGrid,
        clientX: e2,
        clientY: i2
      }), n2 = r2.j, o2 = r2.capturedSeries;
      s2.globals.collapsedSeriesIndices.includes(o2) && (o2 = null);
      var l2 = a2.elGrid.getBoundingClientRect();
      if (r2.hoverX < 0 || r2.hoverX > l2.width) this.handleMouseOut(a2);
      else if (null !== o2) this.handleStickyCapturedSeries(t3, o2, a2, n2);
      else if (this.tooltipUtil.isXoverlap(n2) || s2.globals.isBarHorizontal) {
        var h2 = s2.globals.series.findIndex(function(t4, e3) {
          return !s2.globals.collapsedSeriesIndices.includes(e3);
        });
        this.create(t3, this, h2, n2, a2.ttItems);
      }
    }
  }, {
    key: "handleStickyCapturedSeries",
    value: function(t3, e2, i2, a2) {
      var s2 = this.w;
      if (!this.tConfig.shared && null === s2.globals.series[e2][a2]) return void this.handleMouseOut(i2);
      if (void 0 !== s2.globals.series[e2][a2]) this.tConfig.shared && this.tooltipUtil.isXoverlap(a2) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(t3, this, e2, a2, i2.ttItems) : this.create(t3, this, e2, a2, i2.ttItems, false);
      else if (this.tooltipUtil.isXoverlap(a2)) {
        var r2 = s2.globals.series.findIndex(function(t4, e3) {
          return !s2.globals.collapsedSeriesIndices.includes(e3);
        });
        this.create(t3, this, r2, a2, i2.ttItems);
      }
    }
  }, {
    key: "deactivateHoverFilter",
    value: function() {
      for (var t3 = this.w, e2 = new Mi(this.ctx), i2 = t3.globals.dom.Paper.find(".apexcharts-bar-area"), a2 = 0; a2 < i2.length; a2++) e2.pathMouseLeave(i2[a2]);
    }
  }, {
    key: "handleMouseOut",
    value: function(t3) {
      var e2 = this.w, i2 = this.getElXCrosshairs();
      if (e2.globals.dom.baseEl.classList.remove("apexcharts-tooltip-active"), t3.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), "bubble" !== e2.config.chart.type && this.marker.resetPointsSize(), null !== i2 && i2.classList.remove("apexcharts-active"), null !== this.ycrosshairs && this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
        null === this.yaxisTTEls && (this.yaxisTTEls = e2.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
        for (var a2 = 0; a2 < this.yaxisTTEls.length; a2++) this.yaxisTTEls[a2].classList.remove("apexcharts-active");
      }
      e2.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(t4) {
        var e3 = t4.getAttribute("data:default-text");
        t4.innerHTML = decodeURIComponent(e3);
      });
    }
  }, {
    key: "markerClick",
    value: function(t3, e2, i2) {
      var a2 = this.w;
      "function" == typeof a2.config.chart.events.markerClick && a2.config.chart.events.markerClick(t3, this.ctx, {
        seriesIndex: e2,
        dataPointIndex: i2,
        w: a2
      }), this.ctx.events.fireEvent("markerClick", [t3, this.ctx, {
        seriesIndex: e2,
        dataPointIndex: i2,
        w: a2
      }]);
    }
  }, {
    key: "create",
    value: function(t3, e2, i2, a2, s2) {
      var r2, n2, o2, l2, h2, c2, d2, g2, p2, f2, x2, b2, m2, v2, y2, w2, k2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null, A2 = this.w, C2 = e2;
      "mouseup" === t3.type && this.markerClick(t3, i2, a2), null === k2 && (k2 = this.tConfig.shared);
      var S2 = this.tooltipUtil.hasMarkers(i2), L2 = this.tooltipUtil.getElBars(), M2 = function() {
        A2.globals.markers.largestSize > 0 ? C2.marker.enlargePoints(a2) : C2.tooltipPosition.moveDynamicPointsOnHover(a2);
      };
      if (A2.config.legend.tooltipHoverFormatter) {
        var P2 = A2.config.legend.tooltipHoverFormatter, I2 = Array.from(this.legendLabels);
        I2.forEach(function(t4) {
          var e3 = t4.getAttribute("data:default-text");
          t4.innerHTML = decodeURIComponent(e3);
        });
        for (var T2 = 0; T2 < I2.length; T2++) {
          var z2 = I2[T2], X2 = parseInt(z2.getAttribute("i"), 10), R2 = decodeURIComponent(z2.getAttribute("data:default-text")), E2 = P2(R2, {
            seriesIndex: k2 ? X2 : i2,
            dataPointIndex: a2,
            w: A2
          });
          if (k2) z2.innerHTML = A2.globals.collapsedSeriesIndices.indexOf(X2) < 0 ? E2 : R2;
          else if (z2.innerHTML = X2 === i2 ? E2 : R2, i2 === X2) break;
        }
      }
      var Y2 = u(u({
        ttItems: s2,
        i: i2,
        j: a2
      }, void 0 !== (null === (r2 = A2.globals.seriesRange) || void 0 === r2 || null === (n2 = r2[i2]) || void 0 === n2 || null === (o2 = n2[a2]) || void 0 === o2 || null === (l2 = o2.y[0]) || void 0 === l2 ? void 0 : l2.y1) && {
        y1: null === (h2 = A2.globals.seriesRange) || void 0 === h2 || null === (c2 = h2[i2]) || void 0 === c2 || null === (d2 = c2[a2]) || void 0 === d2 || null === (g2 = d2.y[0]) || void 0 === g2 ? void 0 : g2.y1
      }), void 0 !== (null === (p2 = A2.globals.seriesRange) || void 0 === p2 || null === (f2 = p2[i2]) || void 0 === f2 || null === (x2 = f2[a2]) || void 0 === x2 || null === (b2 = x2.y[0]) || void 0 === b2 ? void 0 : b2.y2) && {
        y2: null === (m2 = A2.globals.seriesRange) || void 0 === m2 || null === (v2 = m2[i2]) || void 0 === v2 || null === (y2 = v2[a2]) || void 0 === y2 || null === (w2 = y2.y[0]) || void 0 === w2 ? void 0 : w2.y2
      });
      if (k2) {
        if (C2.tooltipLabels.drawSeriesTexts(u(u({}, Y2), {}, {
          shared: !this.showOnIntersect && this.tConfig.shared
        })), S2) M2();
        else if (this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(L2), this.barSeriesHeight > 0)) {
          var H2 = new Mi(this.ctx), O2 = A2.globals.dom.Paper.find(".apexcharts-bar-area[j='".concat(a2, "']"));
          this.deactivateHoverFilter(), C2.tooltipPosition.moveStickyTooltipOverBars(a2, i2), C2.tooltipUtil.getAllMarkers(true).length && M2();
          for (var F2 = 0; F2 < O2.length; F2++) H2.pathMouseEnter(O2[F2]);
        }
      } else C2.tooltipLabels.drawSeriesTexts(u({
        shared: false
      }, Y2)), this.tooltipUtil.hasBars() && C2.tooltipPosition.moveStickyTooltipOverBars(a2, i2), S2 && C2.tooltipPosition.moveMarkers(i2, a2);
    }
  }]), t2;
}();
var La = function() {
  function t2(e2) {
    i(this, t2), this.w = e2.w, this.barCtx = e2, this.totalFormatter = this.w.config.plotOptions.bar.dataLabels.total.formatter, this.totalFormatter || (this.totalFormatter = this.w.config.dataLabels.formatter);
  }
  return s(t2, [{
    key: "handleBarDataLabels",
    value: function(t3) {
      var e2, i2, a2 = t3.x, s2 = t3.y, r2 = t3.y1, n2 = t3.y2, o2 = t3.i, l2 = t3.j, h2 = t3.realIndex, c2 = t3.columnGroupIndex, d2 = t3.series, g2 = t3.barHeight, p2 = t3.barWidth, f2 = t3.barXPosition, x2 = t3.barYPosition, b2 = t3.visibleSeries, m2 = t3.renderedPath, v2 = this.w, y2 = new Mi(this.barCtx.ctx), w2 = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[h2] : this.barCtx.strokeWidth;
      v2.globals.isXNumeric && !v2.globals.isBarHorizontal ? (e2 = a2 + parseFloat(p2 * (b2 + 1)), i2 = s2 + parseFloat(g2 * (b2 + 1)) - w2) : (e2 = a2 + parseFloat(p2 * b2), i2 = s2 + parseFloat(g2 * b2));
      var k2, A2 = null, C2 = a2, S2 = s2, L2 = {}, M2 = v2.config.dataLabels, P2 = this.barCtx.barOptions.dataLabels, I2 = this.barCtx.barOptions.dataLabels.total;
      void 0 !== x2 && this.barCtx.isRangeBar && (i2 = x2, S2 = x2), void 0 !== f2 && this.barCtx.isVerticalGroupedRangeBar && (e2 = f2, C2 = f2);
      var T2 = M2.offsetX, z2 = M2.offsetY, X2 = {
        width: 0,
        height: 0
      };
      if (v2.config.dataLabels.enabled) {
        var R2 = v2.globals.series[o2][l2];
        X2 = y2.getTextRects(v2.config.dataLabels.formatter ? v2.config.dataLabels.formatter(R2, u(u({}, v2), {}, {
          seriesIndex: o2,
          dataPointIndex: l2,
          w: v2
        })) : v2.globals.yLabelFormatters[0](R2), parseFloat(M2.style.fontSize));
      }
      var E2 = {
        x: a2,
        y: s2,
        i: o2,
        j: l2,
        realIndex: h2,
        columnGroupIndex: c2,
        renderedPath: m2,
        bcx: e2,
        bcy: i2,
        barHeight: g2,
        barWidth: p2,
        textRects: X2,
        strokeWidth: w2,
        dataLabelsX: C2,
        dataLabelsY: S2,
        dataLabelsConfig: M2,
        barDataLabelsConfig: P2,
        barTotalDataLabelsConfig: I2,
        offX: T2,
        offY: z2
      };
      return L2 = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(E2) : this.calculateColumnsDataLabelsPosition(E2), m2.attr({
        cy: L2.bcy,
        cx: L2.bcx,
        j: l2,
        val: v2.globals.series[o2][l2],
        barHeight: g2,
        barWidth: p2
      }), k2 = this.drawCalculatedDataLabels({
        x: L2.dataLabelsX,
        y: L2.dataLabelsY,
        val: this.barCtx.isRangeBar ? [r2, n2] : "100%" === v2.config.chart.stackType ? d2[h2][l2] : v2.globals.series[h2][l2],
        i: h2,
        j: l2,
        barWidth: p2,
        barHeight: g2,
        textRects: X2,
        dataLabelsConfig: M2
      }), v2.config.chart.stacked && I2.enabled && (A2 = this.drawTotalDataLabels({
        x: L2.totalDataLabelsX,
        y: L2.totalDataLabelsY,
        barWidth: p2,
        barHeight: g2,
        realIndex: h2,
        textAnchor: L2.totalDataLabelsAnchor,
        val: this.getStackedTotalDataLabel({
          realIndex: h2,
          j: l2
        }),
        dataLabelsConfig: M2,
        barTotalDataLabelsConfig: I2
      })), {
        dataLabels: k2,
        totalDataLabels: A2
      };
    }
  }, {
    key: "getStackedTotalDataLabel",
    value: function(t3) {
      var e2 = t3.realIndex, i2 = t3.j, a2 = this.w, s2 = this.barCtx.stackedSeriesTotals[i2];
      return this.totalFormatter && (s2 = this.totalFormatter(s2, u(u({}, a2), {}, {
        seriesIndex: e2,
        dataPointIndex: i2,
        w: a2
      }))), s2;
    }
  }, {
    key: "calculateColumnsDataLabelsPosition",
    value: function(t3) {
      var e2 = this, i2 = this.w, a2 = t3.i, s2 = t3.j, r2 = t3.realIndex;
      t3.columnGroupIndex;
      var n2, o2, l2 = t3.y, h2 = t3.bcx, c2 = t3.barWidth, d2 = t3.barHeight, u2 = t3.textRects, g2 = t3.dataLabelsX, p2 = t3.dataLabelsY, f2 = t3.dataLabelsConfig, x2 = t3.barDataLabelsConfig, b2 = t3.barTotalDataLabelsConfig, m2 = t3.strokeWidth, v2 = t3.offX, y2 = t3.offY, w2 = h2;
      d2 = Math.abs(d2);
      var k2 = "vertical" === i2.config.plotOptions.bar.dataLabels.orientation, A2 = this.barCtx.barHelpers.getZeroValueEncounters({
        i: a2,
        j: s2
      }).zeroEncounters;
      h2 -= m2 / 2;
      var C2 = i2.globals.gridWidth / i2.globals.dataPoints;
      if (this.barCtx.isVerticalGroupedRangeBar ? g2 += c2 / 2 : (g2 = i2.globals.isXNumeric ? h2 - c2 / 2 + v2 : h2 - C2 + c2 / 2 + v2, !i2.config.chart.stacked && A2 > 0 && i2.config.plotOptions.bar.hideZeroBarsWhenGrouped && (g2 -= c2 * A2)), k2) {
        g2 = g2 + u2.height / 2 - m2 / 2 - 2;
      }
      var S2 = i2.globals.series[a2][s2] < 0, L2 = l2;
      switch (this.barCtx.isReversed && (L2 = l2 + (S2 ? d2 : -d2)), x2.position) {
        case "center":
          p2 = k2 ? S2 ? L2 - d2 / 2 + y2 : L2 + d2 / 2 - y2 : S2 ? L2 - d2 / 2 + u2.height / 2 + y2 : L2 + d2 / 2 + u2.height / 2 - y2;
          break;
        case "bottom":
          p2 = k2 ? S2 ? L2 - d2 + y2 : L2 + d2 - y2 : S2 ? L2 - d2 + u2.height + m2 + y2 : L2 + d2 - u2.height / 2 + m2 - y2;
          break;
        case "top":
          p2 = k2 ? S2 ? L2 + y2 : L2 - y2 : S2 ? L2 - u2.height / 2 - y2 : L2 + u2.height + y2;
      }
      var M2 = L2;
      if (i2.globals.seriesGroups.forEach(function(t4) {
        var i3;
        null === (i3 = e2.barCtx[t4.join(",")]) || void 0 === i3 || i3.prevY.forEach(function(t5) {
          M2 = S2 ? Math.max(t5[s2], M2) : Math.min(t5[s2], M2);
        });
      }), this.barCtx.lastActiveBarSerieIndex === r2 && b2.enabled) {
        var P2 = new Mi(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({
          realIndex: r2,
          j: s2
        }), f2.fontSize);
        n2 = S2 ? M2 - P2.height / 2 - y2 - b2.offsetY + 18 : M2 + P2.height + y2 + b2.offsetY - 18;
        var I2 = C2;
        o2 = w2 + (i2.globals.isXNumeric ? -c2 * i2.globals.barGroups.length / 2 : i2.globals.barGroups.length * c2 / 2 - (i2.globals.barGroups.length - 1) * c2 - I2) + b2.offsetX;
      }
      return i2.config.chart.stacked || (p2 < 0 ? p2 = 0 + m2 : p2 + u2.height / 3 > i2.globals.gridHeight && (p2 = i2.globals.gridHeight - m2)), {
        bcx: h2,
        bcy: l2,
        dataLabelsX: g2,
        dataLabelsY: p2,
        totalDataLabelsX: o2,
        totalDataLabelsY: n2,
        totalDataLabelsAnchor: "middle"
      };
    }
  }, {
    key: "calculateBarsDataLabelsPosition",
    value: function(t3) {
      var e2 = this, i2 = this.w, a2 = t3.x, s2 = t3.i, r2 = t3.j, n2 = t3.realIndex, o2 = t3.bcy, l2 = t3.barHeight, h2 = t3.barWidth, c2 = t3.textRects, d2 = t3.dataLabelsX, u2 = t3.strokeWidth, g2 = t3.dataLabelsConfig, p2 = t3.barDataLabelsConfig, f2 = t3.barTotalDataLabelsConfig, x2 = t3.offX, b2 = t3.offY, m2 = i2.globals.gridHeight / i2.globals.dataPoints, v2 = this.barCtx.barHelpers.getZeroValueEncounters({
        i: s2,
        j: r2
      }).zeroEncounters;
      h2 = Math.abs(h2);
      var y2, w2, k2 = o2 - (this.barCtx.isRangeBar ? 0 : m2) + l2 / 2 + c2.height / 2 + b2 - 3;
      !i2.config.chart.stacked && v2 > 0 && i2.config.plotOptions.bar.hideZeroBarsWhenGrouped && (k2 -= l2 * v2);
      var A2 = "start", C2 = i2.globals.series[s2][r2] < 0, S2 = a2;
      switch (this.barCtx.isReversed && (S2 = a2 + (C2 ? -h2 : h2), A2 = C2 ? "start" : "end"), p2.position) {
        case "center":
          d2 = C2 ? S2 + h2 / 2 - x2 : Math.max(c2.width / 2, S2 - h2 / 2) + x2;
          break;
        case "bottom":
          d2 = C2 ? S2 + h2 - u2 - x2 : S2 - h2 + u2 + x2;
          break;
        case "top":
          d2 = C2 ? S2 - u2 - x2 : S2 - u2 + x2;
      }
      var L2 = S2;
      if (i2.globals.seriesGroups.forEach(function(t4) {
        var i3;
        null === (i3 = e2.barCtx[t4.join(",")]) || void 0 === i3 || i3.prevX.forEach(function(t5) {
          L2 = C2 ? Math.min(t5[r2], L2) : Math.max(t5[r2], L2);
        });
      }), this.barCtx.lastActiveBarSerieIndex === n2 && f2.enabled) {
        var M2 = new Mi(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({
          realIndex: n2,
          j: r2
        }), g2.fontSize);
        C2 ? (y2 = L2 - u2 - x2 - f2.offsetX, A2 = "end") : y2 = L2 + x2 + f2.offsetX + (this.barCtx.isReversed ? -(h2 + u2) : u2), w2 = k2 - c2.height / 2 + M2.height / 2 + f2.offsetY + u2, i2.globals.barGroups.length > 1 && (w2 -= i2.globals.barGroups.length / 2 * (l2 / 2));
      }
      return i2.config.chart.stacked || ("start" === g2.textAnchor ? d2 - c2.width < 0 ? d2 = C2 ? c2.width + u2 : u2 : d2 + c2.width > i2.globals.gridWidth && (d2 = C2 ? i2.globals.gridWidth - u2 : i2.globals.gridWidth - c2.width - u2) : "middle" === g2.textAnchor ? d2 - c2.width / 2 < 0 ? d2 = c2.width / 2 + u2 : d2 + c2.width / 2 > i2.globals.gridWidth && (d2 = i2.globals.gridWidth - c2.width / 2 - u2) : "end" === g2.textAnchor && (d2 < 1 ? d2 = c2.width + u2 : d2 + 1 > i2.globals.gridWidth && (d2 = i2.globals.gridWidth - c2.width - u2))), {
        bcx: a2,
        bcy: o2,
        dataLabelsX: d2,
        dataLabelsY: k2,
        totalDataLabelsX: y2,
        totalDataLabelsY: w2,
        totalDataLabelsAnchor: A2
      };
    }
  }, {
    key: "drawCalculatedDataLabels",
    value: function(t3) {
      var e2 = t3.x, i2 = t3.y, a2 = t3.val, s2 = t3.i, r2 = t3.j, n2 = t3.textRects, o2 = t3.barHeight, l2 = t3.barWidth, h2 = t3.dataLabelsConfig, c2 = this.w, d2 = "rotate(0)";
      "vertical" === c2.config.plotOptions.bar.dataLabels.orientation && (d2 = "rotate(-90, ".concat(e2, ", ").concat(i2, ")"));
      var g2 = new qi(this.barCtx.ctx), p2 = new Mi(this.barCtx.ctx), f2 = h2.formatter, x2 = null, b2 = c2.globals.collapsedSeriesIndices.indexOf(s2) > -1;
      if (h2.enabled && !b2) {
        x2 = p2.group({
          class: "apexcharts-data-labels",
          transform: d2
        });
        var m2 = "";
        void 0 !== a2 && (m2 = f2(a2, u(u({}, c2), {}, {
          seriesIndex: s2,
          dataPointIndex: r2,
          w: c2
        }))), !a2 && c2.config.plotOptions.bar.hideZeroBarsWhenGrouped && (m2 = "");
        var v2 = c2.globals.series[s2][r2] < 0, y2 = c2.config.plotOptions.bar.dataLabels.position;
        if ("vertical" === c2.config.plotOptions.bar.dataLabels.orientation && ("top" === y2 && (h2.textAnchor = v2 ? "end" : "start"), "center" === y2 && (h2.textAnchor = "middle"), "bottom" === y2 && (h2.textAnchor = v2 ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels) l2 < p2.getTextRects(m2, parseFloat(h2.style.fontSize)).width && (m2 = "");
        c2.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? n2.width / 1.6 > Math.abs(l2) && (m2 = "") : n2.height / 1.6 > Math.abs(o2) && (m2 = ""));
        var w2 = u({}, h2);
        this.barCtx.isHorizontal && a2 < 0 && ("start" === h2.textAnchor ? w2.textAnchor = "end" : "end" === h2.textAnchor && (w2.textAnchor = "start")), g2.plotDataLabelsText({
          x: e2,
          y: i2,
          text: m2,
          i: s2,
          j: r2,
          parent: x2,
          dataLabelsConfig: w2,
          alwaysDrawDataLabel: true,
          offsetCorrection: true
        });
      }
      return x2;
    }
  }, {
    key: "drawTotalDataLabels",
    value: function(t3) {
      var e2 = t3.x, i2 = t3.y, a2 = t3.val, s2 = t3.realIndex, r2 = t3.textAnchor, n2 = t3.barTotalDataLabelsConfig;
      this.w;
      var o2, l2 = new Mi(this.barCtx.ctx);
      return n2.enabled && void 0 !== e2 && void 0 !== i2 && this.barCtx.lastActiveBarSerieIndex === s2 && (o2 = l2.drawText({
        x: e2,
        y: i2,
        foreColor: n2.style.color,
        text: a2,
        textAnchor: r2,
        fontFamily: n2.style.fontFamily,
        fontSize: n2.style.fontSize,
        fontWeight: n2.style.fontWeight
      })), o2;
    }
  }]), t2;
}();
var Ma = function() {
  function t2(e2) {
    i(this, t2), this.w = e2.w, this.barCtx = e2;
  }
  return s(t2, [{
    key: "initVariables",
    value: function(t3) {
      var e2 = this.w;
      this.barCtx.series = t3, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
      for (var i2 = 0; i2 < t3.length; i2++) if (t3[i2].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += t3[i2].length), e2.globals.isXNumeric) for (var a2 = 0; a2 < t3[i2].length; a2++) e2.globals.seriesX[i2][a2] > e2.globals.minX && e2.globals.seriesX[i2][a2] < e2.globals.maxX && this.barCtx.visibleItems++;
      else this.barCtx.visibleItems = e2.globals.dataPoints;
      this.arrBorderRadius = this.createBorderRadiusArr(e2.globals.series), 0 === this.barCtx.seriesLen && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], e2.globals.comboCharts || this.checkZeroSeries({
        series: t3
      });
    }
  }, {
    key: "initialPositions",
    value: function(t3) {
      var e2, i2, a2, s2, r2, n2, o2, l2, h2 = this.w, c2 = h2.globals.dataPoints;
      this.barCtx.isRangeBar && (c2 = h2.globals.labels.length);
      var d2 = this.barCtx.seriesLen;
      if (h2.config.plotOptions.bar.rangeBarGroupRows && (d2 = 1), this.barCtx.isHorizontal) r2 = (a2 = h2.globals.gridHeight / c2) / d2, h2.globals.isXNumeric && (r2 = (a2 = h2.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), r2 = r2 * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, -1 === String(this.barCtx.barOptions.barHeight).indexOf("%") && (r2 = parseInt(this.barCtx.barOptions.barHeight, 10)), l2 = this.barCtx.baseLineInvertedY + h2.globals.padHorizontal + (this.barCtx.isReversed ? h2.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), this.barCtx.isFunnel && (l2 = h2.globals.gridWidth / 2), i2 = (a2 - r2 * this.barCtx.seriesLen) / 2;
      else {
        if (s2 = h2.globals.gridWidth / this.barCtx.visibleItems, h2.config.xaxis.convertedCatToNumeric && (s2 = h2.globals.gridWidth / h2.globals.dataPoints), n2 = s2 / d2 * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, h2.globals.isXNumeric) {
          var u2 = this.barCtx.xRatio;
          h2.globals.minXDiff && 0.5 !== h2.globals.minXDiff && h2.globals.minXDiff / u2 > 0 && (s2 = h2.globals.minXDiff / u2), (n2 = s2 / d2 * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (n2 = 1);
        }
        if (-1 === String(this.barCtx.barOptions.columnWidth).indexOf("%") && (n2 = parseInt(this.barCtx.barOptions.columnWidth, 10)), o2 = h2.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.translationsIndex] - (this.barCtx.isReversed ? h2.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.translationsIndex] : 0), h2.globals.isXNumeric) e2 = this.barCtx.getBarXForNumericXAxis({
          x: e2,
          j: 0,
          realIndex: t3,
          barWidth: n2
        }).x;
        else e2 = h2.globals.padHorizontal + v.noExponents(s2 - n2 * this.barCtx.seriesLen) / 2;
      }
      return h2.globals.barHeight = r2, h2.globals.barWidth = n2, {
        x: e2,
        y: i2,
        yDivision: a2,
        xDivision: s2,
        barHeight: r2,
        barWidth: n2,
        zeroH: o2,
        zeroW: l2
      };
    }
  }, {
    key: "initializeStackedPrevVars",
    value: function(t3) {
      t3.w.globals.seriesGroups.forEach(function(e2) {
        t3[e2] || (t3[e2] = {}), t3[e2].prevY = [], t3[e2].prevX = [], t3[e2].prevYF = [], t3[e2].prevXF = [], t3[e2].prevYVal = [], t3[e2].prevXVal = [];
      });
    }
  }, {
    key: "initializeStackedXYVars",
    value: function(t3) {
      t3.w.globals.seriesGroups.forEach(function(e2) {
        t3[e2] || (t3[e2] = {}), t3[e2].xArrj = [], t3[e2].xArrjF = [], t3[e2].xArrjVal = [], t3[e2].yArrj = [], t3[e2].yArrjF = [], t3[e2].yArrjVal = [];
      });
    }
  }, {
    key: "getPathFillColor",
    value: function(t3, e2, i2, a2) {
      var s2, r2, n2, o2, l2 = this.w, h2 = this.barCtx.ctx.fill, c2 = null, d2 = this.barCtx.barOptions.distributed ? i2 : e2, u2 = false;
      this.barCtx.barOptions.colors.ranges.length > 0 && this.barCtx.barOptions.colors.ranges.map(function(a3) {
        t3[e2][i2] >= a3.from && t3[e2][i2] <= a3.to && (c2 = a3.color, u2 = true);
      });
      return {
        color: h2.fillPath({
          seriesNumber: this.barCtx.barOptions.distributed ? d2 : a2,
          dataPointIndex: i2,
          color: c2,
          value: t3[e2][i2],
          fillConfig: null === (s2 = l2.config.series[e2].data[i2]) || void 0 === s2 ? void 0 : s2.fill,
          fillType: null !== (r2 = l2.config.series[e2].data[i2]) && void 0 !== r2 && null !== (n2 = r2.fill) && void 0 !== n2 && n2.type ? null === (o2 = l2.config.series[e2].data[i2]) || void 0 === o2 ? void 0 : o2.fill.type : Array.isArray(l2.config.fill.type) ? l2.config.fill.type[a2] : l2.config.fill.type
        }),
        useRangeColor: u2
      };
    }
  }, {
    key: "getStrokeWidth",
    value: function(t3, e2, i2) {
      var a2 = 0, s2 = this.w;
      return this.barCtx.series[t3][e2] ? this.barCtx.isNullValue = false : this.barCtx.isNullValue = true, s2.config.stroke.show && (this.barCtx.isNullValue || (a2 = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i2] : this.barCtx.strokeWidth)), a2;
    }
  }, {
    key: "createBorderRadiusArr",
    value: function(t3) {
      var e2, i2 = this.w, a2 = !this.w.config.chart.stacked || i2.config.plotOptions.bar.borderRadius <= 0, s2 = t3.length, n2 = 0 | (null === (e2 = t3[0]) || void 0 === e2 ? void 0 : e2.length), o2 = Array.from({
        length: s2
      }, function() {
        return Array(n2).fill(a2 ? "top" : "none");
      });
      if (a2) return o2;
      for (var l2 = 0; l2 < n2; l2++) {
        for (var h2 = [], c2 = [], d2 = 0, u2 = 0; u2 < s2; u2++) {
          var g2 = t3[u2][l2];
          g2 > 0 ? (h2.push(u2), d2++) : g2 < 0 && (c2.push(u2), d2++);
        }
        if (h2.length > 0 && 0 === c2.length) {
          if (1 === h2.length) o2[h2[0]][l2] = "both";
          else {
            var p2, f2 = h2[0], x2 = h2[h2.length - 1], b2 = r(h2);
            try {
              for (b2.s(); !(p2 = b2.n()).done; ) {
                var m2 = p2.value;
                o2[m2][l2] = m2 === f2 ? "bottom" : m2 === x2 ? "top" : "none";
              }
            } catch (t4) {
              b2.e(t4);
            } finally {
              b2.f();
            }
          }
        } else if (c2.length > 0 && 0 === h2.length) {
          if (1 === c2.length) o2[c2[0]][l2] = "both";
          else {
            var v2, y2 = Math.max.apply(Math, c2), w2 = Math.min.apply(Math, c2), k2 = r(c2);
            try {
              for (k2.s(); !(v2 = k2.n()).done; ) {
                var A2 = v2.value;
                o2[A2][l2] = A2 === y2 ? "bottom" : A2 === w2 ? "top" : "none";
              }
            } catch (t4) {
              k2.e(t4);
            } finally {
              k2.f();
            }
          }
        } else if (h2.length > 0 && c2.length > 0) {
          var C2, S2 = h2[h2.length - 1], L2 = r(h2);
          try {
            for (L2.s(); !(C2 = L2.n()).done; ) {
              var M2 = C2.value;
              o2[M2][l2] = M2 === S2 ? "top" : "none";
            }
          } catch (t4) {
            L2.e(t4);
          } finally {
            L2.f();
          }
          var P2, I2 = Math.max.apply(Math, c2), T2 = r(c2);
          try {
            for (T2.s(); !(P2 = T2.n()).done; ) {
              var z2 = P2.value;
              o2[z2][l2] = z2 === I2 ? "bottom" : "none";
            }
          } catch (t4) {
            T2.e(t4);
          } finally {
            T2.f();
          }
        } else if (1 === d2) {
          o2[h2[0] || c2[0]][l2] = "both";
        }
      }
      return o2;
    }
  }, {
    key: "barBackground",
    value: function(t3) {
      var e2 = t3.j, i2 = t3.i, a2 = t3.x1, s2 = t3.x2, r2 = t3.y1, n2 = t3.y2, o2 = t3.elSeries, l2 = this.w, h2 = new Mi(this.barCtx.ctx), c2 = new Zi(this.barCtx.ctx).getActiveConfigSeriesIndex();
      if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && c2 === i2) {
        e2 >= this.barCtx.barOptions.colors.backgroundBarColors.length && (e2 %= this.barCtx.barOptions.colors.backgroundBarColors.length);
        var d2 = this.barCtx.barOptions.colors.backgroundBarColors[e2], u2 = h2.drawRect(void 0 !== a2 ? a2 : 0, void 0 !== r2 ? r2 : 0, void 0 !== s2 ? s2 : l2.globals.gridWidth, void 0 !== n2 ? n2 : l2.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, d2, this.barCtx.barOptions.colors.backgroundBarOpacity);
        o2.add(u2), u2.node.classList.add("apexcharts-backgroundBar");
      }
    }
  }, {
    key: "getColumnPaths",
    value: function(t3) {
      var e2, i2 = t3.barWidth, a2 = t3.barXPosition, s2 = t3.y1, r2 = t3.y2, n2 = t3.strokeWidth, o2 = t3.isReversed, l2 = t3.series, h2 = t3.seriesGroup, c2 = t3.realIndex, d2 = t3.i, u2 = t3.j, g2 = t3.w, p2 = new Mi(this.barCtx.ctx);
      (n2 = Array.isArray(n2) ? n2[c2] : n2) || (n2 = 0);
      var f2 = i2, x2 = a2;
      null !== (e2 = g2.config.series[c2].data[u2]) && void 0 !== e2 && e2.columnWidthOffset && (x2 = a2 - g2.config.series[c2].data[u2].columnWidthOffset / 2, f2 = i2 + g2.config.series[c2].data[u2].columnWidthOffset);
      var b2 = n2 / 2, m2 = x2 + b2, v2 = x2 + f2 - b2, y2 = (l2[d2][u2] >= 0 ? 1 : -1) * (o2 ? -1 : 1);
      s2 += 1e-3 - b2 * y2, r2 += 1e-3 + b2 * y2;
      var w2 = p2.move(m2, s2), k2 = p2.move(m2, s2), A2 = p2.line(v2, s2);
      if (g2.globals.previousPaths.length > 0 && (k2 = this.barCtx.getPreviousPath(c2, u2, false)), w2 = w2 + p2.line(m2, r2) + p2.line(v2, r2) + A2 + ("around" === g2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[c2][u2] ? " Z" : " z"), k2 = k2 + p2.line(m2, s2) + A2 + A2 + A2 + A2 + A2 + p2.line(m2, s2) + ("around" === g2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[c2][u2] ? " Z" : " z"), "none" !== this.arrBorderRadius[c2][u2] && (w2 = p2.roundPathCorners(w2, g2.config.plotOptions.bar.borderRadius)), g2.config.chart.stacked) {
        var C2 = this.barCtx;
        (C2 = this.barCtx[h2]).yArrj.push(r2 - b2 * y2), C2.yArrjF.push(Math.abs(s2 - r2 + n2 * y2)), C2.yArrjVal.push(this.barCtx.series[d2][u2]);
      }
      return {
        pathTo: w2,
        pathFrom: k2
      };
    }
  }, {
    key: "getBarpaths",
    value: function(t3) {
      var e2, i2 = t3.barYPosition, a2 = t3.barHeight, s2 = t3.x1, r2 = t3.x2, n2 = t3.strokeWidth, o2 = t3.isReversed, l2 = t3.series, h2 = t3.seriesGroup, c2 = t3.realIndex, d2 = t3.i, u2 = t3.j, g2 = t3.w, p2 = new Mi(this.barCtx.ctx);
      (n2 = Array.isArray(n2) ? n2[c2] : n2) || (n2 = 0);
      var f2 = i2, x2 = a2;
      null !== (e2 = g2.config.series[c2].data[u2]) && void 0 !== e2 && e2.barHeightOffset && (f2 = i2 - g2.config.series[c2].data[u2].barHeightOffset / 2, x2 = a2 + g2.config.series[c2].data[u2].barHeightOffset);
      var b2 = n2 / 2, m2 = f2 + b2, v2 = f2 + x2 - b2, y2 = (l2[d2][u2] >= 0 ? 1 : -1) * (o2 ? -1 : 1);
      s2 += 1e-3 + b2 * y2, r2 += 1e-3 - b2 * y2;
      var w2 = p2.move(s2, m2), k2 = p2.move(s2, m2);
      g2.globals.previousPaths.length > 0 && (k2 = this.barCtx.getPreviousPath(c2, u2, false));
      var A2 = p2.line(s2, v2);
      if (w2 = w2 + p2.line(r2, m2) + p2.line(r2, v2) + A2 + ("around" === g2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[c2][u2] ? " Z" : " z"), k2 = k2 + p2.line(s2, m2) + A2 + A2 + A2 + A2 + A2 + p2.line(s2, m2) + ("around" === g2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[c2][u2] ? " Z" : " z"), "none" !== this.arrBorderRadius[c2][u2] && (w2 = p2.roundPathCorners(w2, g2.config.plotOptions.bar.borderRadius)), g2.config.chart.stacked) {
        var C2 = this.barCtx;
        (C2 = this.barCtx[h2]).xArrj.push(r2 + b2 * y2), C2.xArrjF.push(Math.abs(s2 - r2 - n2 * y2)), C2.xArrjVal.push(this.barCtx.series[d2][u2]);
      }
      return {
        pathTo: w2,
        pathFrom: k2
      };
    }
  }, {
    key: "checkZeroSeries",
    value: function(t3) {
      for (var e2 = t3.series, i2 = this.w, a2 = 0; a2 < e2.length; a2++) {
        for (var s2 = 0, r2 = 0; r2 < e2[i2.globals.maxValsInArrayIndex].length; r2++) s2 += e2[a2][r2];
        0 === s2 && this.barCtx.zeroSerieses.push(a2);
      }
    }
  }, {
    key: "getXForValue",
    value: function(t3, e2) {
      var i2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2] ? e2 : null;
      return null != t3 && (i2 = e2 + t3 / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? t3 / this.barCtx.invertedYRatio : 0)), i2;
    }
  }, {
    key: "getYForValue",
    value: function(t3, e2, i2) {
      var a2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3] ? e2 : null;
      return null != t3 && (a2 = e2 - t3 / this.barCtx.yRatio[i2] + 2 * (this.barCtx.isReversed ? t3 / this.barCtx.yRatio[i2] : 0)), a2;
    }
  }, {
    key: "getGoalValues",
    value: function(t3, e2, i2, a2, s2, r2) {
      var n2 = this, l2 = this.w, h2 = [], c2 = function(a3, s3) {
        var l3;
        h2.push((o(l3 = {}, t3, "x" === t3 ? n2.getXForValue(a3, e2, false) : n2.getYForValue(a3, i2, r2, false)), o(l3, "attrs", s3), l3));
      };
      if (l2.globals.seriesGoals[a2] && l2.globals.seriesGoals[a2][s2] && Array.isArray(l2.globals.seriesGoals[a2][s2]) && l2.globals.seriesGoals[a2][s2].forEach(function(t4) {
        c2(t4.value, t4);
      }), this.barCtx.barOptions.isDumbbell && l2.globals.seriesRange.length) {
        var d2 = this.barCtx.barOptions.dumbbellColors ? this.barCtx.barOptions.dumbbellColors : l2.globals.colors, g2 = {
          strokeHeight: "x" === t3 ? 0 : l2.globals.markers.size[a2],
          strokeWidth: "x" === t3 ? l2.globals.markers.size[a2] : 0,
          strokeDashArray: 0,
          strokeLineCap: "round",
          strokeColor: Array.isArray(d2[a2]) ? d2[a2][0] : d2[a2]
        };
        c2(l2.globals.seriesRangeStart[a2][s2], g2), c2(l2.globals.seriesRangeEnd[a2][s2], u(u({}, g2), {}, {
          strokeColor: Array.isArray(d2[a2]) ? d2[a2][1] : d2[a2]
        }));
      }
      return h2;
    }
  }, {
    key: "drawGoalLine",
    value: function(t3) {
      var e2 = t3.barXPosition, i2 = t3.barYPosition, a2 = t3.goalX, s2 = t3.goalY, r2 = t3.barWidth, n2 = t3.barHeight, o2 = new Mi(this.barCtx.ctx), l2 = o2.group({
        className: "apexcharts-bar-goals-groups"
      });
      l2.node.classList.add("apexcharts-element-hidden"), this.barCtx.w.globals.delayedElements.push({
        el: l2.node
      }), l2.attr("clip-path", "url(#gridRectMarkerMask".concat(this.barCtx.w.globals.cuid, ")"));
      var h2 = null;
      return this.barCtx.isHorizontal ? Array.isArray(a2) && a2.forEach(function(t4) {
        if (t4.x >= -1 && t4.x <= o2.w.globals.gridWidth + 1) {
          var e3 = void 0 !== t4.attrs.strokeHeight ? t4.attrs.strokeHeight : n2 / 2, a3 = i2 + e3 + n2 / 2;
          h2 = o2.drawLine(t4.x, a3 - 2 * e3, t4.x, a3, t4.attrs.strokeColor ? t4.attrs.strokeColor : void 0, t4.attrs.strokeDashArray, t4.attrs.strokeWidth ? t4.attrs.strokeWidth : 2, t4.attrs.strokeLineCap), l2.add(h2);
        }
      }) : Array.isArray(s2) && s2.forEach(function(t4) {
        if (t4.y >= -1 && t4.y <= o2.w.globals.gridHeight + 1) {
          var i3 = void 0 !== t4.attrs.strokeWidth ? t4.attrs.strokeWidth : r2 / 2, a3 = e2 + i3 + r2 / 2;
          h2 = o2.drawLine(a3 - 2 * i3, t4.y, a3, t4.y, t4.attrs.strokeColor ? t4.attrs.strokeColor : void 0, t4.attrs.strokeDashArray, t4.attrs.strokeHeight ? t4.attrs.strokeHeight : 2, t4.attrs.strokeLineCap), l2.add(h2);
        }
      }), l2;
    }
  }, {
    key: "drawBarShadow",
    value: function(t3) {
      var e2 = t3.prevPaths, i2 = t3.currPaths, a2 = t3.color, s2 = this.w, r2 = e2.x, n2 = e2.x1, o2 = e2.barYPosition, l2 = i2.x, h2 = i2.x1, c2 = i2.barYPosition, d2 = o2 + i2.barHeight, u2 = new Mi(this.barCtx.ctx), g2 = new v(), p2 = u2.move(n2, d2) + u2.line(r2, d2) + u2.line(l2, c2) + u2.line(h2, c2) + u2.line(n2, d2) + ("around" === s2.config.plotOptions.bar.borderRadiusApplication || "both" === this.arrBorderRadius[realIndex][j] ? " Z" : " z");
      return u2.drawPath({
        d: p2,
        fill: g2.shadeColor(0.5, v.rgb2hex(a2)),
        stroke: "none",
        strokeWidth: 0,
        fillOpacity: 1,
        classes: "apexcharts-bar-shadow apexcharts-decoration-element"
      });
    }
  }, {
    key: "getZeroValueEncounters",
    value: function(t3) {
      var e2, i2 = t3.i, a2 = t3.j, s2 = this.w, r2 = 0, n2 = 0;
      return (s2.config.plotOptions.bar.horizontal ? s2.globals.series.map(function(t4, e3) {
        return e3;
      }) : (null === (e2 = s2.globals.columnSeries) || void 0 === e2 ? void 0 : e2.i.map(function(t4) {
        return t4;
      })) || []).forEach(function(t4) {
        var e3 = s2.globals.seriesPercent[t4][a2];
        e3 && r2++, t4 < i2 && 0 === e3 && n2++;
      }), {
        nonZeroColumns: r2,
        zeroEncounters: n2
      };
    }
  }, {
    key: "getGroupIndex",
    value: function(t3) {
      var e2 = this.w, i2 = e2.globals.seriesGroups.findIndex(function(i3) {
        return i3.indexOf(e2.globals.seriesNames[t3]) > -1;
      }), a2 = this.barCtx.columnGroupIndices, s2 = a2.indexOf(i2);
      return s2 < 0 && (a2.push(i2), s2 = a2.length - 1), {
        groupIndex: i2,
        columnGroupIndex: s2
      };
    }
  }]), t2;
}();
var Pa = function() {
  function t2(e2, a2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
    var s2 = this.w;
    this.barOptions = s2.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = s2.config.stroke.width, this.isNullValue = false, this.isRangeBar = s2.globals.seriesRange.length && this.isHorizontal, this.isVerticalGroupedRangeBar = !s2.globals.isBarHorizontal && s2.globals.seriesRange.length && s2.config.plotOptions.bar.rangeBarGroupRows, this.isFunnel = this.barOptions.isFunnel, this.xyRatios = a2, null !== this.xyRatios && (this.xRatio = a2.xRatio, this.yRatio = a2.yRatio, this.invertedXRatio = a2.invertedXRatio, this.invertedYRatio = a2.invertedYRatio, this.baseLineY = a2.baseLineY, this.baseLineInvertedY = a2.baseLineInvertedY), this.yaxisIndex = 0, this.translationsIndex = 0, this.seriesLen = 0, this.pathArr = [];
    var r2 = new Zi(this.ctx);
    this.lastActiveBarSerieIndex = r2.getActiveConfigSeriesIndex("desc", ["bar", "column"]), this.columnGroupIndices = [];
    var n2 = r2.getBarSeriesIndices(), o2 = new Pi(this.ctx);
    this.stackedSeriesTotals = o2.getStackedSeriesTotals(this.w.config.series.map(function(t3, e3) {
      return -1 === n2.indexOf(e3) ? e3 : -1;
    }).filter(function(t3) {
      return -1 !== t3;
    })), this.barHelpers = new Ma(this);
  }
  return s(t2, [{
    key: "draw",
    value: function(t3, e2) {
      var i2 = this.w, a2 = new Mi(this.ctx), s2 = new Pi(this.ctx, i2);
      t3 = s2.getLogSeries(t3), this.series = t3, this.yRatio = s2.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t3);
      var r2 = a2.group({
        class: "apexcharts-bar-series apexcharts-plot-series"
      });
      i2.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering - ApexCharts");
      for (var n2 = 0, o2 = 0; n2 < t3.length; n2++, o2++) {
        var l2, h2, c2, d2, g2 = void 0, p2 = void 0, f2 = [], x2 = [], b2 = i2.globals.comboCharts ? e2[n2] : n2, m2 = this.barHelpers.getGroupIndex(b2).columnGroupIndex, y2 = a2.group({
          class: "apexcharts-series",
          rel: n2 + 1,
          seriesName: v.escapeString(i2.globals.seriesNames[b2]),
          "data:realIndex": b2
        });
        this.ctx.series.addCollapsedClassToSeries(y2, b2), t3[n2].length > 0 && (this.visibleI = this.visibleI + 1);
        var w2 = 0, k2 = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = i2.globals.seriesYAxisReverseMap[b2], this.translationsIndex = b2);
        var A2 = this.translationsIndex;
        this.isReversed = i2.config.yaxis[this.yaxisIndex] && i2.config.yaxis[this.yaxisIndex].reversed;
        var C2 = this.barHelpers.initialPositions(b2);
        p2 = C2.y, w2 = C2.barHeight, h2 = C2.yDivision, d2 = C2.zeroW, g2 = C2.x, k2 = C2.barWidth, l2 = C2.xDivision, c2 = C2.zeroH, this.isHorizontal || x2.push(g2 + k2 / 2);
        var S2 = a2.group({
          class: "apexcharts-datalabels",
          "data:realIndex": b2
        });
        i2.globals.delayedElements.push({
          el: S2.node
        }), S2.node.classList.add("apexcharts-element-hidden");
        var L2 = a2.group({
          class: "apexcharts-bar-goals-markers"
        }), M2 = a2.group({
          class: "apexcharts-bar-shadows"
        });
        i2.globals.delayedElements.push({
          el: M2.node
        }), M2.node.classList.add("apexcharts-element-hidden");
        for (var P2 = 0; P2 < t3[n2].length; P2++) {
          var I2 = this.barHelpers.getStrokeWidth(n2, P2, b2), T2 = null, z2 = {
            indexes: {
              i: n2,
              j: P2,
              realIndex: b2,
              translationsIndex: A2,
              bc: o2
            },
            x: g2,
            y: p2,
            strokeWidth: I2,
            elSeries: y2
          };
          this.isHorizontal ? (T2 = this.drawBarPaths(u(u({}, z2), {}, {
            barHeight: w2,
            zeroW: d2,
            yDivision: h2
          })), k2 = this.series[n2][P2] / this.invertedYRatio) : (T2 = this.drawColumnPaths(u(u({}, z2), {}, {
            xDivision: l2,
            barWidth: k2,
            zeroH: c2
          })), w2 = this.series[n2][P2] / this.yRatio[A2]);
          var X2 = this.barHelpers.getPathFillColor(t3, n2, P2, b2);
          if (this.isFunnel && this.barOptions.isFunnel3d && this.pathArr.length && P2 > 0) {
            var R2, E2 = this.barHelpers.drawBarShadow({
              color: "string" == typeof X2.color && -1 === (null === (R2 = X2.color) || void 0 === R2 ? void 0 : R2.indexOf("url")) ? X2.color : v.hexToRgba(i2.globals.colors[n2]),
              prevPaths: this.pathArr[this.pathArr.length - 1],
              currPaths: T2
            });
            if (M2.add(E2), i2.config.chart.dropShadow.enabled) new Li(this.ctx).dropShadow(E2, i2.config.chart.dropShadow, b2);
          }
          this.pathArr.push(T2);
          var Y2 = this.barHelpers.drawGoalLine({
            barXPosition: T2.barXPosition,
            barYPosition: T2.barYPosition,
            goalX: T2.goalX,
            goalY: T2.goalY,
            barHeight: w2,
            barWidth: k2
          });
          Y2 && L2.add(Y2), p2 = T2.y, g2 = T2.x, P2 > 0 && x2.push(g2 + k2 / 2), f2.push(p2), this.renderSeries(u(u({
            realIndex: b2,
            pathFill: X2.color
          }, X2.useRangeColor ? {
            lineFill: X2.color
          } : {}), {}, {
            j: P2,
            i: n2,
            columnGroupIndex: m2,
            pathFrom: T2.pathFrom,
            pathTo: T2.pathTo,
            strokeWidth: I2,
            elSeries: y2,
            x: g2,
            y: p2,
            series: t3,
            barHeight: Math.abs(T2.barHeight ? T2.barHeight : w2),
            barWidth: Math.abs(T2.barWidth ? T2.barWidth : k2),
            elDataLabelsWrap: S2,
            elGoalsMarkers: L2,
            elBarShadows: M2,
            visibleSeries: this.visibleI,
            type: "bar"
          }));
        }
        i2.globals.seriesXvalues[b2] = x2, i2.globals.seriesYvalues[b2] = f2, r2.add(y2);
      }
      return r2;
    }
  }, {
    key: "renderSeries",
    value: function(t3) {
      var e2 = t3.realIndex, i2 = t3.pathFill, a2 = t3.lineFill, s2 = t3.j, r2 = t3.i, n2 = t3.columnGroupIndex, o2 = t3.pathFrom, l2 = t3.pathTo, h2 = t3.strokeWidth, c2 = t3.elSeries, d2 = t3.x, u2 = t3.y, g2 = t3.y1, p2 = t3.y2, f2 = t3.series, x2 = t3.barHeight, b2 = t3.barWidth, m2 = t3.barXPosition, v2 = t3.barYPosition, y2 = t3.elDataLabelsWrap, w2 = t3.elGoalsMarkers, k2 = t3.elBarShadows, A2 = t3.visibleSeries, C2 = t3.type, S2 = t3.classes, L2 = this.w, M2 = new Mi(this.ctx);
      if (!a2) {
        var P2 = "function" == typeof L2.globals.stroke.colors[e2] ? function(t4) {
          var e3, i3 = L2.config.stroke.colors;
          return Array.isArray(i3) && i3.length > 0 && ((e3 = i3[t4]) || (e3 = ""), "function" == typeof e3) ? e3({
            value: L2.globals.series[t4][s2],
            dataPointIndex: s2,
            w: L2
          }) : e3;
        }(e2) : L2.globals.stroke.colors[e2];
        a2 = this.barOptions.distributed ? L2.globals.stroke.colors[s2] : P2;
      }
      L2.config.series[r2].data[s2] && L2.config.series[r2].data[s2].strokeColor && (a2 = L2.config.series[r2].data[s2].strokeColor), this.isNullValue && (i2 = "none");
      var I2 = s2 / L2.config.chart.animations.animateGradually.delay * (L2.config.chart.animations.speed / L2.globals.dataPoints) / 2.4, T2 = M2.renderPaths({
        i: r2,
        j: s2,
        realIndex: e2,
        pathFrom: o2,
        pathTo: l2,
        stroke: a2,
        strokeWidth: h2,
        strokeLineCap: L2.config.stroke.lineCap,
        fill: i2,
        animationDelay: I2,
        initialSpeed: L2.config.chart.animations.speed,
        dataChangeSpeed: L2.config.chart.animations.dynamicAnimation.speed,
        className: "apexcharts-".concat(C2, "-area ").concat(S2),
        chartType: C2
      });
      T2.attr("clip-path", "url(#gridRectBarMask".concat(L2.globals.cuid, ")"));
      var z2 = L2.config.forecastDataPoints;
      z2.count > 0 && s2 >= L2.globals.dataPoints - z2.count && (T2.node.setAttribute("stroke-dasharray", z2.dashArray), T2.node.setAttribute("stroke-width", z2.strokeWidth), T2.node.setAttribute("fill-opacity", z2.fillOpacity)), void 0 !== g2 && void 0 !== p2 && (T2.attr("data-range-y1", g2), T2.attr("data-range-y2", p2)), new Li(this.ctx).setSelectionFilter(T2, e2, s2), c2.add(T2);
      var X2 = new La(this).handleBarDataLabels({
        x: d2,
        y: u2,
        y1: g2,
        y2: p2,
        i: r2,
        j: s2,
        series: f2,
        realIndex: e2,
        columnGroupIndex: n2,
        barHeight: x2,
        barWidth: b2,
        barXPosition: m2,
        barYPosition: v2,
        renderedPath: T2,
        visibleSeries: A2
      });
      return null !== X2.dataLabels && y2.add(X2.dataLabels), X2.totalDataLabels && y2.add(X2.totalDataLabels), c2.add(y2), w2 && c2.add(w2), k2 && c2.add(k2), c2;
    }
  }, {
    key: "drawBarPaths",
    value: function(t3) {
      var e2, i2 = t3.indexes, a2 = t3.barHeight, s2 = t3.strokeWidth, r2 = t3.zeroW, n2 = t3.x, o2 = t3.y, l2 = t3.yDivision, h2 = t3.elSeries, c2 = this.w, d2 = i2.i, u2 = i2.j;
      if (c2.globals.isXNumeric) e2 = (o2 = (c2.globals.seriesX[d2][u2] - c2.globals.minX) / this.invertedXRatio - a2) + a2 * this.visibleI;
      else if (c2.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        var g2 = this.barHelpers.getZeroValueEncounters({
          i: d2,
          j: u2
        }), p2 = g2.nonZeroColumns, f2 = g2.zeroEncounters;
        p2 > 0 && (a2 = this.seriesLen * a2 / p2), e2 = o2 + a2 * this.visibleI, e2 -= a2 * f2;
      } else e2 = o2 + a2 * this.visibleI;
      this.isFunnel && (r2 -= (this.barHelpers.getXForValue(this.series[d2][u2], r2) - r2) / 2), n2 = this.barHelpers.getXForValue(this.series[d2][u2], r2);
      var x2 = this.barHelpers.getBarpaths({
        barYPosition: e2,
        barHeight: a2,
        x1: r2,
        x2: n2,
        strokeWidth: s2,
        isReversed: this.isReversed,
        series: this.series,
        realIndex: i2.realIndex,
        i: d2,
        j: u2,
        w: c2
      });
      return c2.globals.isXNumeric || (o2 += l2), this.barHelpers.barBackground({
        j: u2,
        i: d2,
        y1: e2 - a2 * this.visibleI,
        y2: a2 * this.seriesLen,
        elSeries: h2
      }), {
        pathTo: x2.pathTo,
        pathFrom: x2.pathFrom,
        x1: r2,
        x: n2,
        y: o2,
        goalX: this.barHelpers.getGoalValues("x", r2, null, d2, u2),
        barYPosition: e2,
        barHeight: a2
      };
    }
  }, {
    key: "drawColumnPaths",
    value: function(t3) {
      var e2, i2 = t3.indexes, a2 = t3.x, s2 = t3.y, r2 = t3.xDivision, n2 = t3.barWidth, o2 = t3.zeroH, l2 = t3.strokeWidth, h2 = t3.elSeries, c2 = this.w, d2 = i2.realIndex, u2 = i2.translationsIndex, g2 = i2.i, p2 = i2.j, f2 = i2.bc;
      if (c2.globals.isXNumeric) {
        var x2 = this.getBarXForNumericXAxis({
          x: a2,
          j: p2,
          realIndex: d2,
          barWidth: n2
        });
        a2 = x2.x, e2 = x2.barXPosition;
      } else if (c2.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        var b2 = this.barHelpers.getZeroValueEncounters({
          i: g2,
          j: p2
        }), m2 = b2.nonZeroColumns, v2 = b2.zeroEncounters;
        m2 > 0 && (n2 = this.seriesLen * n2 / m2), e2 = a2 + n2 * this.visibleI, e2 -= n2 * v2;
      } else e2 = a2 + n2 * this.visibleI;
      s2 = this.barHelpers.getYForValue(this.series[g2][p2], o2, u2);
      var y2 = this.barHelpers.getColumnPaths({
        barXPosition: e2,
        barWidth: n2,
        y1: o2,
        y2: s2,
        strokeWidth: l2,
        isReversed: this.isReversed,
        series: this.series,
        realIndex: d2,
        i: g2,
        j: p2,
        w: c2
      });
      return c2.globals.isXNumeric || (a2 += r2), this.barHelpers.barBackground({
        bc: f2,
        j: p2,
        i: g2,
        x1: e2 - l2 / 2 - n2 * this.visibleI,
        x2: n2 * this.seriesLen + l2 / 2,
        elSeries: h2
      }), {
        pathTo: y2.pathTo,
        pathFrom: y2.pathFrom,
        x: a2,
        y: s2,
        goalY: this.barHelpers.getGoalValues("y", null, o2, g2, p2, u2),
        barXPosition: e2,
        barWidth: n2
      };
    }
  }, {
    key: "getBarXForNumericXAxis",
    value: function(t3) {
      var e2 = t3.x, i2 = t3.barWidth, a2 = t3.realIndex, s2 = t3.j, r2 = this.w, n2 = a2;
      return r2.globals.seriesX[a2].length || (n2 = r2.globals.maxValsInArrayIndex), v.isNumber(r2.globals.seriesX[n2][s2]) && (e2 = (r2.globals.seriesX[n2][s2] - r2.globals.minX) / this.xRatio - i2 * this.seriesLen / 2), {
        barXPosition: e2 + i2 * this.visibleI,
        x: e2
      };
    }
  }, {
    key: "getPreviousPath",
    value: function(t3, e2) {
      for (var i2, a2 = this.w, s2 = 0; s2 < a2.globals.previousPaths.length; s2++) {
        var r2 = a2.globals.previousPaths[s2];
        r2.paths && r2.paths.length > 0 && parseInt(r2.realIndex, 10) === parseInt(t3, 10) && void 0 !== a2.globals.previousPaths[s2].paths[e2] && (i2 = a2.globals.previousPaths[s2].paths[e2].d);
      }
      return i2;
    }
  }]), t2;
}();
var Ia = function(t2) {
  h(a2, Pa);
  var e2 = n(a2);
  function a2() {
    return i(this, a2), e2.apply(this, arguments);
  }
  return s(a2, [{
    key: "draw",
    value: function(t3, e3) {
      var i2 = this, a3 = this.w;
      this.graphics = new Mi(this.ctx), this.bar = new Pa(this.ctx, this.xyRatios);
      var s2 = new Pi(this.ctx, a3);
      t3 = s2.getLogSeries(t3), this.yRatio = s2.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t3), "100%" === a3.config.chart.stackType && (t3 = a3.globals.comboCharts ? e3.map(function(t4) {
        return a3.globals.seriesPercent[t4];
      }) : a3.globals.seriesPercent.slice()), this.series = t3, this.barHelpers.initializeStackedPrevVars(this);
      for (var r2 = this.graphics.group({
        class: "apexcharts-bar-series apexcharts-plot-series"
      }), n2 = 0, o2 = 0, l2 = function(s3, l3) {
        var h3 = void 0, c3 = void 0, d2 = void 0, g2 = void 0, p2 = a3.globals.comboCharts ? e3[s3] : s3, f2 = i2.barHelpers.getGroupIndex(p2), x2 = f2.groupIndex, b2 = f2.columnGroupIndex;
        i2.groupCtx = i2[a3.globals.seriesGroups[x2]];
        var m2 = [], y2 = [], w2 = 0;
        i2.yRatio.length > 1 && (i2.yaxisIndex = a3.globals.seriesYAxisReverseMap[p2][0], w2 = p2), i2.isReversed = a3.config.yaxis[i2.yaxisIndex] && a3.config.yaxis[i2.yaxisIndex].reversed;
        var k2 = i2.graphics.group({
          class: "apexcharts-series",
          seriesName: v.escapeString(a3.globals.seriesNames[p2]),
          rel: s3 + 1,
          "data:realIndex": p2
        });
        i2.ctx.series.addCollapsedClassToSeries(k2, p2);
        var A2 = i2.graphics.group({
          class: "apexcharts-datalabels",
          "data:realIndex": p2
        }), C2 = i2.graphics.group({
          class: "apexcharts-bar-goals-markers"
        }), S2 = 0, L2 = 0, M2 = i2.initialPositions(n2, o2, h3, c3, d2, g2, w2);
        o2 = M2.y, S2 = M2.barHeight, c3 = M2.yDivision, g2 = M2.zeroW, n2 = M2.x, L2 = M2.barWidth, h3 = M2.xDivision, d2 = M2.zeroH, a3.globals.barHeight = S2, a3.globals.barWidth = L2, i2.barHelpers.initializeStackedXYVars(i2), 1 === i2.groupCtx.prevY.length && i2.groupCtx.prevY[0].every(function(t4) {
          return isNaN(t4);
        }) && (i2.groupCtx.prevY[0] = i2.groupCtx.prevY[0].map(function() {
          return d2;
        }), i2.groupCtx.prevYF[0] = i2.groupCtx.prevYF[0].map(function() {
          return 0;
        }));
        for (var P2 = 0; P2 < a3.globals.dataPoints; P2++) {
          var I2 = i2.barHelpers.getStrokeWidth(s3, P2, p2), T2 = {
            indexes: {
              i: s3,
              j: P2,
              realIndex: p2,
              translationsIndex: w2,
              bc: l3
            },
            strokeWidth: I2,
            x: n2,
            y: o2,
            elSeries: k2,
            columnGroupIndex: b2,
            seriesGroup: a3.globals.seriesGroups[x2]
          }, z2 = null;
          i2.isHorizontal ? (z2 = i2.drawStackedBarPaths(u(u({}, T2), {}, {
            zeroW: g2,
            barHeight: S2,
            yDivision: c3
          })), L2 = i2.series[s3][P2] / i2.invertedYRatio) : (z2 = i2.drawStackedColumnPaths(u(u({}, T2), {}, {
            xDivision: h3,
            barWidth: L2,
            zeroH: d2
          })), S2 = i2.series[s3][P2] / i2.yRatio[w2]);
          var X2 = i2.barHelpers.drawGoalLine({
            barXPosition: z2.barXPosition,
            barYPosition: z2.barYPosition,
            goalX: z2.goalX,
            goalY: z2.goalY,
            barHeight: S2,
            barWidth: L2
          });
          X2 && C2.add(X2), o2 = z2.y, n2 = z2.x, m2.push(n2), y2.push(o2);
          var R2 = i2.barHelpers.getPathFillColor(t3, s3, P2, p2), E2 = "", Y2 = a3.globals.isBarHorizontal ? "apexcharts-flip-x" : "apexcharts-flip-y";
          ("bottom" === i2.barHelpers.arrBorderRadius[p2][P2] && a3.globals.series[p2][P2] > 0 || "top" === i2.barHelpers.arrBorderRadius[p2][P2] && a3.globals.series[p2][P2] < 0) && (E2 = Y2), k2 = i2.renderSeries(u(u({
            realIndex: p2,
            pathFill: R2.color
          }, R2.useRangeColor ? {
            lineFill: R2.color
          } : {}), {}, {
            j: P2,
            i: s3,
            columnGroupIndex: b2,
            pathFrom: z2.pathFrom,
            pathTo: z2.pathTo,
            strokeWidth: I2,
            elSeries: k2,
            x: n2,
            y: o2,
            series: t3,
            barHeight: S2,
            barWidth: L2,
            elDataLabelsWrap: A2,
            elGoalsMarkers: C2,
            type: "bar",
            visibleSeries: b2,
            classes: E2
          }));
        }
        a3.globals.seriesXvalues[p2] = m2, a3.globals.seriesYvalues[p2] = y2, i2.groupCtx.prevY.push(i2.groupCtx.yArrj), i2.groupCtx.prevYF.push(i2.groupCtx.yArrjF), i2.groupCtx.prevYVal.push(i2.groupCtx.yArrjVal), i2.groupCtx.prevX.push(i2.groupCtx.xArrj), i2.groupCtx.prevXF.push(i2.groupCtx.xArrjF), i2.groupCtx.prevXVal.push(i2.groupCtx.xArrjVal), r2.add(k2);
      }, h2 = 0, c2 = 0; h2 < t3.length; h2++, c2++) l2(h2, c2);
      return r2;
    }
  }, {
    key: "initialPositions",
    value: function(t3, e3, i2, a3, s2, r2, n2) {
      var o2, l2, h2 = this.w;
      if (this.isHorizontal) {
        a3 = h2.globals.gridHeight / h2.globals.dataPoints;
        var c2 = h2.config.plotOptions.bar.barHeight;
        o2 = -1 === String(c2).indexOf("%") ? parseInt(c2, 10) : a3 * parseInt(c2, 10) / 100, r2 = h2.globals.padHorizontal + (this.isReversed ? h2.globals.gridWidth - this.baseLineInvertedY : this.baseLineInvertedY), e3 = (a3 - o2) / 2;
      } else {
        l2 = i2 = h2.globals.gridWidth / h2.globals.dataPoints;
        var d2 = h2.config.plotOptions.bar.columnWidth;
        h2.globals.isXNumeric && h2.globals.dataPoints > 1 ? l2 = (i2 = h2.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : -1 === String(d2).indexOf("%") ? l2 = parseInt(d2, 10) : l2 *= parseInt(d2, 10) / 100, s2 = this.isReversed ? this.baseLineY[n2] : h2.globals.gridHeight - this.baseLineY[n2], t3 = h2.globals.padHorizontal + (i2 - l2) / 2;
      }
      var u2 = h2.globals.barGroups.length || 1;
      return {
        x: t3,
        y: e3,
        yDivision: a3,
        xDivision: i2,
        barHeight: o2 / u2,
        barWidth: l2 / u2,
        zeroH: s2,
        zeroW: r2
      };
    }
  }, {
    key: "drawStackedBarPaths",
    value: function(t3) {
      for (var e3, i2 = t3.indexes, a3 = t3.barHeight, s2 = t3.strokeWidth, r2 = t3.zeroW, n2 = t3.x, o2 = t3.y, l2 = t3.columnGroupIndex, h2 = t3.seriesGroup, c2 = t3.yDivision, d2 = t3.elSeries, u2 = this.w, g2 = o2 + l2 * a3, p2 = i2.i, f2 = i2.j, x2 = i2.realIndex, b2 = i2.translationsIndex, m2 = 0, v2 = 0; v2 < this.groupCtx.prevXF.length; v2++) m2 += this.groupCtx.prevXF[v2][f2];
      var y2 = p2;
      if (u2.config.series[x2].name && (y2 = h2.indexOf(u2.config.series[x2].name)), y2 > 0) {
        var w2 = r2;
        this.groupCtx.prevXVal[y2 - 1][f2] < 0 ? w2 = this.series[p2][f2] >= 0 ? this.groupCtx.prevX[y2 - 1][f2] + m2 - 2 * (this.isReversed ? m2 : 0) : this.groupCtx.prevX[y2 - 1][f2] : this.groupCtx.prevXVal[y2 - 1][f2] >= 0 && (w2 = this.series[p2][f2] >= 0 ? this.groupCtx.prevX[y2 - 1][f2] : this.groupCtx.prevX[y2 - 1][f2] - m2 + 2 * (this.isReversed ? m2 : 0)), e3 = w2;
      } else e3 = r2;
      n2 = null === this.series[p2][f2] ? e3 : e3 + this.series[p2][f2] / this.invertedYRatio - 2 * (this.isReversed ? this.series[p2][f2] / this.invertedYRatio : 0);
      var k2 = this.barHelpers.getBarpaths({
        barYPosition: g2,
        barHeight: a3,
        x1: e3,
        x2: n2,
        strokeWidth: s2,
        isReversed: this.isReversed,
        series: this.series,
        realIndex: i2.realIndex,
        seriesGroup: h2,
        i: p2,
        j: f2,
        w: u2
      });
      return this.barHelpers.barBackground({
        j: f2,
        i: p2,
        y1: g2,
        y2: a3,
        elSeries: d2
      }), o2 += c2, {
        pathTo: k2.pathTo,
        pathFrom: k2.pathFrom,
        goalX: this.barHelpers.getGoalValues("x", r2, null, p2, f2, b2),
        barXPosition: e3,
        barYPosition: g2,
        x: n2,
        y: o2
      };
    }
  }, {
    key: "drawStackedColumnPaths",
    value: function(t3) {
      var e3 = t3.indexes, i2 = t3.x, a3 = t3.y, s2 = t3.xDivision, r2 = t3.barWidth, n2 = t3.zeroH, o2 = t3.columnGroupIndex, l2 = t3.seriesGroup, h2 = t3.elSeries, c2 = this.w, d2 = e3.i, u2 = e3.j, g2 = e3.bc, p2 = e3.realIndex, f2 = e3.translationsIndex;
      if (c2.globals.isXNumeric) {
        var x2 = c2.globals.seriesX[p2][u2];
        x2 || (x2 = 0), i2 = (x2 - c2.globals.minX) / this.xRatio - r2 / 2 * c2.globals.barGroups.length;
      }
      for (var b2, m2 = i2 + o2 * r2, v2 = 0, y2 = 0; y2 < this.groupCtx.prevYF.length; y2++) v2 += isNaN(this.groupCtx.prevYF[y2][u2]) ? 0 : this.groupCtx.prevYF[y2][u2];
      var w2 = d2;
      if (l2 && (w2 = l2.indexOf(c2.globals.seriesNames[p2])), w2 > 0 && !c2.globals.isXNumeric || w2 > 0 && c2.globals.isXNumeric && c2.globals.seriesX[p2 - 1][u2] === c2.globals.seriesX[p2][u2]) {
        var k2, A2, C2, S2 = Math.min(this.yRatio.length + 1, p2 + 1);
        if (void 0 !== this.groupCtx.prevY[w2 - 1] && this.groupCtx.prevY[w2 - 1].length) for (var L2 = 1; L2 < S2; L2++) {
          var M2;
          if (!isNaN(null === (M2 = this.groupCtx.prevY[w2 - L2]) || void 0 === M2 ? void 0 : M2[u2])) {
            C2 = this.groupCtx.prevY[w2 - L2][u2];
            break;
          }
        }
        for (var P2 = 1; P2 < S2; P2++) {
          var I2, T2;
          if ((null === (I2 = this.groupCtx.prevYVal[w2 - P2]) || void 0 === I2 ? void 0 : I2[u2]) < 0) {
            A2 = this.series[d2][u2] >= 0 ? C2 - v2 + 2 * (this.isReversed ? v2 : 0) : C2;
            break;
          }
          if ((null === (T2 = this.groupCtx.prevYVal[w2 - P2]) || void 0 === T2 ? void 0 : T2[u2]) >= 0) {
            A2 = this.series[d2][u2] >= 0 ? C2 : C2 + v2 - 2 * (this.isReversed ? v2 : 0);
            break;
          }
        }
        void 0 === A2 && (A2 = c2.globals.gridHeight), b2 = null !== (k2 = this.groupCtx.prevYF[0]) && void 0 !== k2 && k2.every(function(t4) {
          return 0 === t4;
        }) && this.groupCtx.prevYF.slice(1, w2).every(function(t4) {
          return t4.every(function(t5) {
            return isNaN(t5);
          });
        }) ? n2 : A2;
      } else b2 = n2;
      a3 = this.series[d2][u2] ? b2 - this.series[d2][u2] / this.yRatio[f2] + 2 * (this.isReversed ? this.series[d2][u2] / this.yRatio[f2] : 0) : b2;
      var z2 = this.barHelpers.getColumnPaths({
        barXPosition: m2,
        barWidth: r2,
        y1: b2,
        y2: a3,
        yRatio: this.yRatio[f2],
        strokeWidth: this.strokeWidth,
        isReversed: this.isReversed,
        series: this.series,
        seriesGroup: l2,
        realIndex: e3.realIndex,
        i: d2,
        j: u2,
        w: c2
      });
      return this.barHelpers.barBackground({
        bc: g2,
        j: u2,
        i: d2,
        x1: m2,
        x2: r2,
        elSeries: h2
      }), {
        pathTo: z2.pathTo,
        pathFrom: z2.pathFrom,
        goalY: this.barHelpers.getGoalValues("y", null, n2, d2, u2),
        barXPosition: m2,
        x: c2.globals.isXNumeric ? i2 : i2 + s2,
        y: a3
      };
    }
  }]), a2;
}();
var Ta = function(t2) {
  h(a2, Pa);
  var e2 = n(a2);
  function a2() {
    return i(this, a2), e2.apply(this, arguments);
  }
  return s(a2, [{
    key: "draw",
    value: function(t3, e3, i2) {
      var a3 = this, s2 = this.w, r2 = new Mi(this.ctx), n2 = s2.globals.comboCharts ? e3 : s2.config.chart.type, o2 = new ji(this.ctx);
      this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = s2.config.plotOptions.bar.horizontal;
      var l2 = new Pi(this.ctx, s2);
      t3 = l2.getLogSeries(t3), this.series = t3, this.yRatio = l2.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t3);
      for (var h2 = r2.group({
        class: "apexcharts-".concat(n2, "-series apexcharts-plot-series")
      }), c2 = function(e4) {
        a3.isBoxPlot = "boxPlot" === s2.config.chart.type || "boxPlot" === s2.config.series[e4].type;
        var n3, l3, c3, d3, g2 = void 0, p2 = void 0, f2 = [], x2 = [], b2 = s2.globals.comboCharts ? i2[e4] : e4, m2 = a3.barHelpers.getGroupIndex(b2).columnGroupIndex, y2 = r2.group({
          class: "apexcharts-series",
          seriesName: v.escapeString(s2.globals.seriesNames[b2]),
          rel: e4 + 1,
          "data:realIndex": b2
        });
        a3.ctx.series.addCollapsedClassToSeries(y2, b2), t3[e4].length > 0 && (a3.visibleI = a3.visibleI + 1);
        var w2, k2, A2 = 0;
        a3.yRatio.length > 1 && (a3.yaxisIndex = s2.globals.seriesYAxisReverseMap[b2][0], A2 = b2);
        var C2 = a3.barHelpers.initialPositions(b2);
        p2 = C2.y, w2 = C2.barHeight, l3 = C2.yDivision, d3 = C2.zeroW, g2 = C2.x, k2 = C2.barWidth, n3 = C2.xDivision, c3 = C2.zeroH, x2.push(g2 + k2 / 2);
        for (var S2 = r2.group({
          class: "apexcharts-datalabels",
          "data:realIndex": b2
        }), L2 = r2.group({
          class: "apexcharts-bar-goals-markers"
        }), M2 = function(i3) {
          var r3 = a3.barHelpers.getStrokeWidth(e4, i3, b2), h3 = null, v2 = {
            indexes: {
              i: e4,
              j: i3,
              realIndex: b2,
              translationsIndex: A2
            },
            x: g2,
            y: p2,
            strokeWidth: r3,
            elSeries: y2
          };
          h3 = a3.isHorizontal ? a3.drawHorizontalBoxPaths(u(u({}, v2), {}, {
            yDivision: l3,
            barHeight: w2,
            zeroW: d3
          })) : a3.drawVerticalBoxPaths(u(u({}, v2), {}, {
            xDivision: n3,
            barWidth: k2,
            zeroH: c3
          })), p2 = h3.y, g2 = h3.x;
          var C3 = a3.barHelpers.drawGoalLine({
            barXPosition: h3.barXPosition,
            barYPosition: h3.barYPosition,
            goalX: h3.goalX,
            goalY: h3.goalY,
            barHeight: w2,
            barWidth: k2
          });
          C3 && L2.add(C3), i3 > 0 && x2.push(g2 + k2 / 2), f2.push(p2), h3.pathTo.forEach(function(n4, l4) {
            var c4 = !a3.isBoxPlot && a3.candlestickOptions.wick.useFillColor ? h3.color[l4] : s2.globals.stroke.colors[e4], d4 = o2.fillPath({
              seriesNumber: b2,
              dataPointIndex: i3,
              color: h3.color[l4],
              value: t3[e4][i3]
            });
            a3.renderSeries({
              realIndex: b2,
              pathFill: d4,
              lineFill: c4,
              j: i3,
              i: e4,
              pathFrom: h3.pathFrom,
              pathTo: n4,
              strokeWidth: r3,
              elSeries: y2,
              x: g2,
              y: p2,
              series: t3,
              columnGroupIndex: m2,
              barHeight: w2,
              barWidth: k2,
              elDataLabelsWrap: S2,
              elGoalsMarkers: L2,
              visibleSeries: a3.visibleI,
              type: s2.config.chart.type
            });
          });
        }, P2 = 0; P2 < s2.globals.dataPoints; P2++) M2(P2);
        s2.globals.seriesXvalues[b2] = x2, s2.globals.seriesYvalues[b2] = f2, h2.add(y2);
      }, d2 = 0; d2 < t3.length; d2++) c2(d2);
      return h2;
    }
  }, {
    key: "drawVerticalBoxPaths",
    value: function(t3) {
      var e3 = t3.indexes, i2 = t3.x;
      t3.y;
      var a3 = t3.xDivision, s2 = t3.barWidth, r2 = t3.zeroH, n2 = t3.strokeWidth, o2 = this.w, l2 = new Mi(this.ctx), h2 = e3.i, c2 = e3.j, d2 = o2.config.plotOptions.candlestick.colors, u2 = this.boxOptions.colors, g2 = e3.realIndex, p2 = function(t4) {
        return Array.isArray(t4) ? t4[g2] : t4;
      }, f2 = p2(d2.upward), x2 = p2(d2.downward), b2 = this.yRatio[e3.translationsIndex], m2 = this.getOHLCValue(g2, c2), v2 = r2, y2 = r2, w2 = m2.o < m2.c ? [f2] : [x2];
      this.isBoxPlot && (w2 = [p2(u2.lower), p2(u2.upper)]);
      var k2 = Math.min(m2.o, m2.c), A2 = Math.max(m2.o, m2.c), C2 = m2.m;
      o2.globals.isXNumeric && (i2 = (o2.globals.seriesX[g2][c2] - o2.globals.minX) / this.xRatio - s2 / 2);
      var S2 = i2 + s2 * this.visibleI;
      void 0 === this.series[h2][c2] || null === this.series[h2][c2] ? (k2 = r2, A2 = r2) : (k2 = r2 - k2 / b2, A2 = r2 - A2 / b2, v2 = r2 - m2.h / b2, y2 = r2 - m2.l / b2, C2 = r2 - m2.m / b2);
      var L2 = l2.move(S2, r2), M2 = l2.move(S2 + s2 / 2, k2);
      return o2.globals.previousPaths.length > 0 && (M2 = this.getPreviousPath(g2, c2, true)), L2 = this.isBoxPlot ? [l2.move(S2, k2) + l2.line(S2 + s2 / 2, k2) + l2.line(S2 + s2 / 2, v2) + l2.line(S2 + s2 / 4, v2) + l2.line(S2 + s2 - s2 / 4, v2) + l2.line(S2 + s2 / 2, v2) + l2.line(S2 + s2 / 2, k2) + l2.line(S2 + s2, k2) + l2.line(S2 + s2, C2) + l2.line(S2, C2) + l2.line(S2, k2 + n2 / 2), l2.move(S2, C2) + l2.line(S2 + s2, C2) + l2.line(S2 + s2, A2) + l2.line(S2 + s2 / 2, A2) + l2.line(S2 + s2 / 2, y2) + l2.line(S2 + s2 - s2 / 4, y2) + l2.line(S2 + s2 / 4, y2) + l2.line(S2 + s2 / 2, y2) + l2.line(S2 + s2 / 2, A2) + l2.line(S2, A2) + l2.line(S2, C2) + "z"] : [l2.move(S2, A2) + l2.line(S2 + s2 / 2, A2) + l2.line(S2 + s2 / 2, v2) + l2.line(S2 + s2 / 2, A2) + l2.line(S2 + s2, A2) + l2.line(S2 + s2, k2) + l2.line(S2 + s2 / 2, k2) + l2.line(S2 + s2 / 2, y2) + l2.line(S2 + s2 / 2, k2) + l2.line(S2, k2) + l2.line(S2, A2 - n2 / 2)], M2 += l2.move(S2, k2), o2.globals.isXNumeric || (i2 += a3), {
        pathTo: L2,
        pathFrom: M2,
        x: i2,
        y: A2,
        goalY: this.barHelpers.getGoalValues("y", null, r2, h2, c2, e3.translationsIndex),
        barXPosition: S2,
        color: w2
      };
    }
  }, {
    key: "drawHorizontalBoxPaths",
    value: function(t3) {
      var e3 = t3.indexes;
      t3.x;
      var i2 = t3.y, a3 = t3.yDivision, s2 = t3.barHeight, r2 = t3.zeroW, n2 = t3.strokeWidth, o2 = this.w, l2 = new Mi(this.ctx), h2 = e3.i, c2 = e3.j, d2 = this.boxOptions.colors.lower;
      this.isBoxPlot && (d2 = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
      var u2 = this.invertedYRatio, g2 = e3.realIndex, p2 = this.getOHLCValue(g2, c2), f2 = r2, x2 = r2, b2 = Math.min(p2.o, p2.c), m2 = Math.max(p2.o, p2.c), v2 = p2.m;
      o2.globals.isXNumeric && (i2 = (o2.globals.seriesX[g2][c2] - o2.globals.minX) / this.invertedXRatio - s2 / 2);
      var y2 = i2 + s2 * this.visibleI;
      void 0 === this.series[h2][c2] || null === this.series[h2][c2] ? (b2 = r2, m2 = r2) : (b2 = r2 + b2 / u2, m2 = r2 + m2 / u2, f2 = r2 + p2.h / u2, x2 = r2 + p2.l / u2, v2 = r2 + p2.m / u2);
      var w2 = l2.move(r2, y2), k2 = l2.move(b2, y2 + s2 / 2);
      return o2.globals.previousPaths.length > 0 && (k2 = this.getPreviousPath(g2, c2, true)), w2 = [l2.move(b2, y2) + l2.line(b2, y2 + s2 / 2) + l2.line(f2, y2 + s2 / 2) + l2.line(f2, y2 + s2 / 2 - s2 / 4) + l2.line(f2, y2 + s2 / 2 + s2 / 4) + l2.line(f2, y2 + s2 / 2) + l2.line(b2, y2 + s2 / 2) + l2.line(b2, y2 + s2) + l2.line(v2, y2 + s2) + l2.line(v2, y2) + l2.line(b2 + n2 / 2, y2), l2.move(v2, y2) + l2.line(v2, y2 + s2) + l2.line(m2, y2 + s2) + l2.line(m2, y2 + s2 / 2) + l2.line(x2, y2 + s2 / 2) + l2.line(x2, y2 + s2 - s2 / 4) + l2.line(x2, y2 + s2 / 4) + l2.line(x2, y2 + s2 / 2) + l2.line(m2, y2 + s2 / 2) + l2.line(m2, y2) + l2.line(v2, y2) + "z"], k2 += l2.move(b2, y2), o2.globals.isXNumeric || (i2 += a3), {
        pathTo: w2,
        pathFrom: k2,
        x: m2,
        y: i2,
        goalX: this.barHelpers.getGoalValues("x", r2, null, h2, c2),
        barYPosition: y2,
        color: d2
      };
    }
  }, {
    key: "getOHLCValue",
    value: function(t3, e3) {
      var i2 = this.w, a3 = new Pi(this.ctx, i2), s2 = a3.getLogValAtSeriesIndex(i2.globals.seriesCandleH[t3][e3], t3), r2 = a3.getLogValAtSeriesIndex(i2.globals.seriesCandleO[t3][e3], t3), n2 = a3.getLogValAtSeriesIndex(i2.globals.seriesCandleM[t3][e3], t3), o2 = a3.getLogValAtSeriesIndex(i2.globals.seriesCandleC[t3][e3], t3), l2 = a3.getLogValAtSeriesIndex(i2.globals.seriesCandleL[t3][e3], t3);
      return {
        o: this.isBoxPlot ? s2 : r2,
        h: this.isBoxPlot ? r2 : s2,
        m: n2,
        l: this.isBoxPlot ? o2 : l2,
        c: this.isBoxPlot ? l2 : o2
      };
    }
  }]), a2;
}();
var za = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "checkColorRange",
    value: function() {
      var t3 = this.w, e2 = false, i2 = t3.config.plotOptions[t3.config.chart.type];
      return i2.colorScale.ranges.length > 0 && i2.colorScale.ranges.map(function(t4, i3) {
        t4.from <= 0 && (e2 = true);
      }), e2;
    }
  }, {
    key: "getShadeColor",
    value: function(t3, e2, i2, a2) {
      var s2 = this.w, r2 = 1, n2 = s2.config.plotOptions[t3].shadeIntensity, o2 = this.determineColor(t3, e2, i2);
      s2.globals.hasNegs || a2 ? r2 = s2.config.plotOptions[t3].reverseNegativeShade ? o2.percent < 0 ? o2.percent / 100 * (1.25 * n2) : (1 - o2.percent / 100) * (1.25 * n2) : o2.percent <= 0 ? 1 - (1 + o2.percent / 100) * n2 : (1 - o2.percent / 100) * n2 : (r2 = 1 - o2.percent / 100, "treemap" === t3 && (r2 = (1 - o2.percent / 100) * (1.25 * n2)));
      var l2 = o2.color, h2 = new v();
      if (s2.config.plotOptions[t3].enableShades) if ("dark" === this.w.config.theme.mode) {
        var c2 = h2.shadeColor(-1 * r2, o2.color);
        l2 = v.hexToRgba(v.isColorHex(c2) ? c2 : v.rgb2hex(c2), s2.config.fill.opacity);
      } else {
        var d2 = h2.shadeColor(r2, o2.color);
        l2 = v.hexToRgba(v.isColorHex(d2) ? d2 : v.rgb2hex(d2), s2.config.fill.opacity);
      }
      return {
        color: l2,
        colorProps: o2
      };
    }
  }, {
    key: "determineColor",
    value: function(t3, e2, i2) {
      var a2 = this.w, s2 = a2.globals.series[e2][i2], r2 = a2.config.plotOptions[t3], n2 = r2.colorScale.inverse ? i2 : e2;
      r2.distributed && "treemap" === a2.config.chart.type && (n2 = i2);
      var o2 = a2.globals.colors[n2], l2 = null, h2 = Math.min.apply(Math, f(a2.globals.series[e2])), c2 = Math.max.apply(Math, f(a2.globals.series[e2]));
      r2.distributed || "heatmap" !== t3 || (h2 = a2.globals.minY, c2 = a2.globals.maxY), void 0 !== r2.colorScale.min && (h2 = r2.colorScale.min < a2.globals.minY ? r2.colorScale.min : a2.globals.minY, c2 = r2.colorScale.max > a2.globals.maxY ? r2.colorScale.max : a2.globals.maxY);
      var d2 = Math.abs(c2) + Math.abs(h2), u2 = 100 * s2 / (0 === d2 ? d2 - 1e-6 : d2);
      r2.colorScale.ranges.length > 0 && r2.colorScale.ranges.map(function(t4, e3) {
        if (s2 >= t4.from && s2 <= t4.to) {
          o2 = t4.color, l2 = t4.foreColor ? t4.foreColor : null, h2 = t4.from, c2 = t4.to;
          var i3 = Math.abs(c2) + Math.abs(h2);
          u2 = 100 * s2 / (0 === i3 ? i3 - 1e-6 : i3);
        }
      });
      return {
        color: o2,
        foreColor: l2,
        percent: u2
      };
    }
  }, {
    key: "calculateDataLabels",
    value: function(t3) {
      var e2 = t3.text, i2 = t3.x, a2 = t3.y, s2 = t3.i, r2 = t3.j, n2 = t3.colorProps, o2 = t3.fontSize, l2 = this.w.config.dataLabels, h2 = new Mi(this.ctx), c2 = new qi(this.ctx), d2 = null;
      if (l2.enabled) {
        d2 = h2.group({
          class: "apexcharts-data-labels"
        });
        var u2 = l2.offsetX, g2 = l2.offsetY, p2 = i2 + u2, f2 = a2 + parseFloat(l2.style.fontSize) / 3 + g2;
        c2.plotDataLabelsText({
          x: p2,
          y: f2,
          text: e2,
          i: s2,
          j: r2,
          color: n2.foreColor,
          parent: d2,
          fontSize: o2,
          dataLabelsConfig: l2
        });
      }
      return d2;
    }
  }, {
    key: "addListeners",
    value: function(t3) {
      var e2 = new Mi(this.ctx);
      t3.node.addEventListener("mouseenter", e2.pathMouseEnter.bind(this, t3)), t3.node.addEventListener("mouseleave", e2.pathMouseLeave.bind(this, t3)), t3.node.addEventListener("mousedown", e2.pathMouseDown.bind(this, t3));
    }
  }]), t2;
}();
var Xa = function() {
  function t2(e2, a2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.xRatio = a2.xRatio, this.yRatio = a2.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new za(e2), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0;
  }
  return s(t2, [{
    key: "draw",
    value: function(t3) {
      var e2 = this.w, i2 = new Mi(this.ctx), a2 = i2.group({
        class: "apexcharts-heatmap"
      });
      a2.attr("clip-path", "url(#gridRectMask".concat(e2.globals.cuid, ")"));
      var s2 = e2.globals.gridWidth / e2.globals.dataPoints, r2 = e2.globals.gridHeight / e2.globals.series.length, n2 = 0, o2 = false;
      this.negRange = this.helpers.checkColorRange();
      var l2 = t3.slice();
      e2.config.yaxis[0].reversed && (o2 = true, l2.reverse());
      for (var h2 = o2 ? 0 : l2.length - 1; o2 ? h2 < l2.length : h2 >= 0; o2 ? h2++ : h2--) {
        var c2 = i2.group({
          class: "apexcharts-series apexcharts-heatmap-series",
          seriesName: v.escapeString(e2.globals.seriesNames[h2]),
          rel: h2 + 1,
          "data:realIndex": h2
        });
        if (this.ctx.series.addCollapsedClassToSeries(c2, h2), e2.config.chart.dropShadow.enabled) {
          var d2 = e2.config.chart.dropShadow;
          new Li(this.ctx).dropShadow(c2, d2, h2);
        }
        for (var u2 = 0, g2 = e2.config.plotOptions.heatmap.shadeIntensity, p2 = 0, f2 = 0; f2 < e2.globals.dataPoints; f2++) if (e2.globals.seriesX.length && !e2.globals.allSeriesHasEqualX && e2.globals.minX + e2.globals.minXDiff * f2 < e2.globals.seriesX[h2][p2]) u2 += s2;
        else {
          if (p2 >= l2[h2].length) break;
          var x2 = this.helpers.getShadeColor(e2.config.chart.type, h2, p2, this.negRange), b2 = x2.color, m2 = x2.colorProps;
          if ("image" === e2.config.fill.type) b2 = new ji(this.ctx).fillPath({
            seriesNumber: h2,
            dataPointIndex: p2,
            opacity: e2.globals.hasNegs ? m2.percent < 0 ? 1 - (1 + m2.percent / 100) : g2 + m2.percent / 100 : m2.percent / 100,
            patternID: v.randomId(),
            width: e2.config.fill.image.width ? e2.config.fill.image.width : s2,
            height: e2.config.fill.image.height ? e2.config.fill.image.height : r2
          });
          var y2 = this.rectRadius, w2 = i2.drawRect(u2, n2, s2, r2, y2);
          if (w2.attr({
            cx: u2,
            cy: n2
          }), w2.node.classList.add("apexcharts-heatmap-rect"), c2.add(w2), w2.attr({
            fill: b2,
            i: h2,
            index: h2,
            j: p2,
            val: t3[h2][p2],
            "stroke-width": this.strokeWidth,
            stroke: e2.config.plotOptions.heatmap.useFillColorAsStroke ? b2 : e2.globals.stroke.colors[0],
            color: b2
          }), this.helpers.addListeners(w2), e2.config.chart.animations.enabled && !e2.globals.dataChanged) {
            var k2 = 1;
            e2.globals.resized || (k2 = e2.config.chart.animations.speed), this.animateHeatMap(w2, u2, n2, s2, r2, k2);
          }
          if (e2.globals.dataChanged) {
            var A2 = 1;
            if (this.dynamicAnim.enabled && e2.globals.shouldAnimate) {
              A2 = this.dynamicAnim.speed;
              var C2 = e2.globals.previousPaths[h2] && e2.globals.previousPaths[h2][p2] && e2.globals.previousPaths[h2][p2].color;
              C2 || (C2 = "rgba(255, 255, 255, 0)"), this.animateHeatColor(w2, v.isColorHex(C2) ? C2 : v.rgb2hex(C2), v.isColorHex(b2) ? b2 : v.rgb2hex(b2), A2);
            }
          }
          var S2 = (0, e2.config.dataLabels.formatter)(e2.globals.series[h2][p2], {
            value: e2.globals.series[h2][p2],
            seriesIndex: h2,
            dataPointIndex: p2,
            w: e2
          }), L2 = this.helpers.calculateDataLabels({
            text: S2,
            x: u2 + s2 / 2,
            y: n2 + r2 / 2,
            i: h2,
            j: p2,
            colorProps: m2,
            series: l2
          });
          null !== L2 && c2.add(L2), u2 += s2, p2++;
        }
        n2 += r2, a2.add(c2);
      }
      var M2 = e2.globals.yAxisScale[0].result.slice();
      return e2.config.yaxis[0].reversed ? M2.unshift("") : M2.push(""), e2.globals.yAxisScale[0].result = M2, a2;
    }
  }, {
    key: "animateHeatMap",
    value: function(t3, e2, i2, a2, s2, r2) {
      var n2 = new y(this.ctx);
      n2.animateRect(t3, {
        x: e2 + a2 / 2,
        y: i2 + s2 / 2,
        width: 0,
        height: 0
      }, {
        x: e2,
        y: i2,
        width: a2,
        height: s2
      }, r2, function() {
        n2.animationCompleted(t3);
      });
    }
  }, {
    key: "animateHeatColor",
    value: function(t3, e2, i2, a2) {
      t3.attr({
        fill: e2
      }).animate(a2).attr({
        fill: i2
      });
    }
  }]), t2;
}();
var Ra = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "drawYAxisTexts",
    value: function(t3, e2, i2, a2) {
      var s2 = this.w, r2 = s2.config.yaxis[0], n2 = s2.globals.yLabelFormatters[0];
      return new Mi(this.ctx).drawText({
        x: t3 + r2.labels.offsetX,
        y: e2 + r2.labels.offsetY,
        text: n2(a2, i2),
        textAnchor: "middle",
        fontSize: r2.labels.style.fontSize,
        fontFamily: r2.labels.style.fontFamily,
        foreColor: Array.isArray(r2.labels.style.colors) ? r2.labels.style.colors[i2] : r2.labels.style.colors
      });
    }
  }]), t2;
}();
var Ea = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
    var a2 = this.w;
    this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = void 0 !== a2.globals.stroke.colors ? a2.globals.stroke.colors : a2.globals.colors, this.defaultSize = Math.min(a2.globals.gridWidth, a2.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = a2.globals.gridWidth / 2, "radialBar" === a2.config.chart.type ? this.fullAngle = 360 : this.fullAngle = Math.abs(a2.config.plotOptions.pie.endAngle - a2.config.plotOptions.pie.startAngle), this.initialAngle = a2.config.plotOptions.pie.startAngle % this.fullAngle, a2.globals.radialSize = this.defaultSize / 2.05 - a2.config.stroke.width - (a2.config.chart.sparkline.enabled ? 0 : a2.config.chart.dropShadow.blur), this.donutSize = a2.globals.radialSize * parseInt(a2.config.plotOptions.pie.donut.size, 10) / 100;
    var s2 = a2.config.plotOptions.pie.customScale, r2 = a2.globals.gridWidth / 2, n2 = a2.globals.gridHeight / 2;
    this.translateX = r2 - r2 * s2, this.translateY = n2 - n2 * s2, this.dataLabelsGroup = new Mi(this.ctx).group({
      class: "apexcharts-datalabels-group",
      transform: "translate(".concat(this.translateX, ", ").concat(this.translateY, ") scale(").concat(s2, ")")
    }), this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = [];
  }
  return s(t2, [{
    key: "draw",
    value: function(t3) {
      var e2 = this, i2 = this.w, a2 = new Mi(this.ctx), s2 = a2.group({
        class: "apexcharts-pie"
      });
      if (i2.globals.noData) return s2;
      for (var r2 = 0, n2 = 0; n2 < t3.length; n2++) r2 += v.negToZero(t3[n2]);
      var o2 = [], l2 = a2.group();
      0 === r2 && (r2 = 1e-5), t3.forEach(function(t4) {
        e2.maxY = Math.max(e2.maxY, t4);
      }), i2.config.yaxis[0].max && (this.maxY = i2.config.yaxis[0].max), "back" === i2.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(s2);
      for (var h2 = 0; h2 < t3.length; h2++) {
        var c2 = this.fullAngle * v.negToZero(t3[h2]) / r2;
        o2.push(c2), "polarArea" === this.chartType ? (o2[h2] = this.fullAngle / t3.length, this.sliceSizes.push(i2.globals.radialSize * t3[h2] / this.maxY)) : this.sliceSizes.push(i2.globals.radialSize);
      }
      if (i2.globals.dataChanged) {
        for (var d2, u2 = 0, g2 = 0; g2 < i2.globals.previousPaths.length; g2++) u2 += v.negToZero(i2.globals.previousPaths[g2]);
        for (var p2 = 0; p2 < i2.globals.previousPaths.length; p2++) d2 = this.fullAngle * v.negToZero(i2.globals.previousPaths[p2]) / u2, this.prevSectorAngleArr.push(d2);
      }
      if (this.donutSize < 0 && (this.donutSize = 0), "donut" === this.chartType) {
        var f2 = a2.drawCircle(this.donutSize);
        f2.attr({
          cx: this.centerX,
          cy: this.centerY,
          fill: i2.config.plotOptions.pie.donut.background ? i2.config.plotOptions.pie.donut.background : "transparent"
        }), l2.add(f2);
      }
      var x2 = this.drawArcs(o2, t3);
      if (this.sliceLabels.forEach(function(t4) {
        x2.add(t4);
      }), l2.attr({
        transform: "translate(".concat(this.translateX, ", ").concat(this.translateY, ") scale(").concat(i2.config.plotOptions.pie.customScale, ")")
      }), l2.add(x2), s2.add(l2), this.donutDataLabels.show) {
        var b2 = this.renderInnerDataLabels(this.dataLabelsGroup, this.donutDataLabels, {
          hollowSize: this.donutSize,
          centerX: this.centerX,
          centerY: this.centerY,
          opacity: this.donutDataLabels.show
        });
        s2.add(b2);
      }
      return "front" === i2.config.grid.position && "polarArea" === this.chartType && this.drawPolarElements(s2), s2;
    }
  }, {
    key: "drawArcs",
    value: function(t3, e2) {
      var i2 = this.w, a2 = new Li(this.ctx), s2 = new Mi(this.ctx), r2 = new ji(this.ctx), n2 = s2.group({
        class: "apexcharts-slices"
      }), o2 = this.initialAngle, l2 = this.initialAngle, h2 = this.initialAngle, c2 = this.initialAngle;
      this.strokeWidth = i2.config.stroke.show ? i2.config.stroke.width : 0;
      for (var d2 = 0; d2 < t3.length; d2++) {
        var u2 = s2.group({
          class: "apexcharts-series apexcharts-pie-series",
          seriesName: v.escapeString(i2.globals.seriesNames[d2]),
          rel: d2 + 1,
          "data:realIndex": d2
        });
        n2.add(u2), l2 = c2, h2 = (o2 = h2) + t3[d2], c2 = l2 + this.prevSectorAngleArr[d2];
        var g2 = h2 < o2 ? this.fullAngle + h2 - o2 : h2 - o2, p2 = r2.fillPath({
          seriesNumber: d2,
          size: this.sliceSizes[d2],
          value: e2[d2]
        }), f2 = this.getChangedPath(l2, c2), x2 = s2.drawPath({
          d: f2,
          stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[d2] : this.lineColorArr,
          strokeWidth: 0,
          fill: p2,
          fillOpacity: i2.config.fill.opacity,
          classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(d2)
        });
        if (x2.attr({
          index: 0,
          j: d2
        }), a2.setSelectionFilter(x2, 0, d2), i2.config.chart.dropShadow.enabled) {
          var b2 = i2.config.chart.dropShadow;
          a2.dropShadow(x2, b2, d2);
        }
        this.addListeners(x2, this.donutDataLabels), Mi.setAttrs(x2.node, {
          "data:angle": g2,
          "data:startAngle": o2,
          "data:strokeWidth": this.strokeWidth,
          "data:value": e2[d2]
        });
        var m2 = {
          x: 0,
          y: 0
        };
        "pie" === this.chartType || "polarArea" === this.chartType ? m2 = v.polarToCartesian(this.centerX, this.centerY, i2.globals.radialSize / 1.25 + i2.config.plotOptions.pie.dataLabels.offset, (o2 + g2 / 2) % this.fullAngle) : "donut" === this.chartType && (m2 = v.polarToCartesian(this.centerX, this.centerY, (i2.globals.radialSize + this.donutSize) / 2 + i2.config.plotOptions.pie.dataLabels.offset, (o2 + g2 / 2) % this.fullAngle)), u2.add(x2);
        var y2 = 0;
        if (!this.initialAnim || i2.globals.resized || i2.globals.dataChanged ? this.animBeginArr.push(0) : (0 === (y2 = g2 / this.fullAngle * i2.config.chart.animations.speed) && (y2 = 1), this.animDur = y2 + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i2.globals.dataChanged ? this.animatePaths(x2, {
          size: this.sliceSizes[d2],
          endAngle: h2,
          startAngle: o2,
          prevStartAngle: l2,
          prevEndAngle: c2,
          animateStartingPos: true,
          i: d2,
          animBeginArr: this.animBeginArr,
          shouldSetPrevPaths: true,
          dur: i2.config.chart.animations.dynamicAnimation.speed
        }) : this.animatePaths(x2, {
          size: this.sliceSizes[d2],
          endAngle: h2,
          startAngle: o2,
          i: d2,
          totalItems: t3.length - 1,
          animBeginArr: this.animBeginArr,
          dur: y2
        }), i2.config.plotOptions.pie.expandOnClick && "polarArea" !== this.chartType && x2.node.addEventListener("mouseup", this.pieClicked.bind(this, d2)), void 0 !== i2.globals.selectedDataPoints[0] && i2.globals.selectedDataPoints[0].indexOf(d2) > -1 && this.pieClicked(d2), i2.config.dataLabels.enabled) {
          var w2 = m2.x, k2 = m2.y, A2 = 100 * g2 / this.fullAngle + "%";
          if (0 !== g2 && i2.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t3[d2]) {
            var C2 = i2.config.dataLabels.formatter;
            void 0 !== C2 && (A2 = C2(i2.globals.seriesPercent[d2][0], {
              seriesIndex: d2,
              w: i2
            }));
            var S2 = i2.globals.dataLabels.style.colors[d2], L2 = s2.group({
              class: "apexcharts-datalabels"
            }), M2 = s2.drawText({
              x: w2,
              y: k2,
              text: A2,
              textAnchor: "middle",
              fontSize: i2.config.dataLabels.style.fontSize,
              fontFamily: i2.config.dataLabels.style.fontFamily,
              fontWeight: i2.config.dataLabels.style.fontWeight,
              foreColor: S2
            });
            if (L2.add(M2), i2.config.dataLabels.dropShadow.enabled) {
              var P2 = i2.config.dataLabels.dropShadow;
              a2.dropShadow(M2, P2);
            }
            M2.node.classList.add("apexcharts-pie-label"), i2.config.chart.animations.animate && false === i2.globals.resized && (M2.node.classList.add("apexcharts-pie-label-delay"), M2.node.style.animationDelay = i2.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(L2);
          }
        }
      }
      return n2;
    }
  }, {
    key: "addListeners",
    value: function(t3, e2) {
      var i2 = new Mi(this.ctx);
      t3.node.addEventListener("mouseenter", i2.pathMouseEnter.bind(this, t3)), t3.node.addEventListener("mouseleave", i2.pathMouseLeave.bind(this, t3)), t3.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t3.node, e2)), t3.node.addEventListener("mousedown", i2.pathMouseDown.bind(this, t3)), this.donutDataLabels.total.showAlways || (t3.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t3.node, e2)), t3.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t3.node, e2)));
    }
  }, {
    key: "animatePaths",
    value: function(t3, e2) {
      var i2 = this.w, a2 = e2.endAngle < e2.startAngle ? this.fullAngle + e2.endAngle - e2.startAngle : e2.endAngle - e2.startAngle, s2 = a2, r2 = e2.startAngle, n2 = e2.startAngle;
      void 0 !== e2.prevStartAngle && void 0 !== e2.prevEndAngle && (r2 = e2.prevEndAngle, s2 = e2.prevEndAngle < e2.prevStartAngle ? this.fullAngle + e2.prevEndAngle - e2.prevStartAngle : e2.prevEndAngle - e2.prevStartAngle), e2.i === i2.config.series.length - 1 && (a2 + n2 > this.fullAngle ? e2.endAngle = e2.endAngle - (a2 + n2) : a2 + n2 < this.fullAngle && (e2.endAngle = e2.endAngle + (this.fullAngle - (a2 + n2)))), a2 === this.fullAngle && (a2 = this.fullAngle - 0.01), this.animateArc(t3, r2, n2, a2, s2, e2);
    }
  }, {
    key: "animateArc",
    value: function(t3, e2, i2, a2, s2, r2) {
      var n2, o2 = this, l2 = this.w, h2 = new y(this.ctx), c2 = r2.size;
      (isNaN(e2) || isNaN(s2)) && (e2 = i2, s2 = a2, r2.dur = 0);
      var d2 = a2, u2 = i2, g2 = e2 < i2 ? this.fullAngle + e2 - i2 : e2 - i2;
      l2.globals.dataChanged && r2.shouldSetPrevPaths && r2.prevEndAngle && (n2 = o2.getPiePath({
        me: o2,
        startAngle: r2.prevStartAngle,
        angle: r2.prevEndAngle < r2.prevStartAngle ? this.fullAngle + r2.prevEndAngle - r2.prevStartAngle : r2.prevEndAngle - r2.prevStartAngle,
        size: c2
      }), t3.attr({
        d: n2
      })), 0 !== r2.dur ? t3.animate(r2.dur, r2.animBeginArr[r2.i]).after(function() {
        "pie" !== o2.chartType && "donut" !== o2.chartType && "polarArea" !== o2.chartType || this.animate(l2.config.chart.animations.dynamicAnimation.speed).attr({
          "stroke-width": o2.strokeWidth
        }), r2.i === l2.config.series.length - 1 && h2.animationCompleted(t3);
      }).during(function(l3) {
        d2 = g2 + (a2 - g2) * l3, r2.animateStartingPos && (d2 = s2 + (a2 - s2) * l3, u2 = e2 - s2 + (i2 - (e2 - s2)) * l3), n2 = o2.getPiePath({
          me: o2,
          startAngle: u2,
          angle: d2,
          size: c2
        }), t3.node.setAttribute("data:pathOrig", n2), t3.attr({
          d: n2
        });
      }) : (n2 = o2.getPiePath({
        me: o2,
        startAngle: u2,
        angle: a2,
        size: c2
      }), r2.isTrack || (l2.globals.animationEnded = true), t3.node.setAttribute("data:pathOrig", n2), t3.attr({
        d: n2,
        "stroke-width": o2.strokeWidth
      }));
    }
  }, {
    key: "pieClicked",
    value: function(t3) {
      var e2, i2 = this.w, a2 = this, s2 = a2.sliceSizes[t3] + (i2.config.plotOptions.pie.expandOnClick ? 4 : 0), r2 = i2.globals.dom.Paper.findOne(".apexcharts-".concat(a2.chartType.toLowerCase(), "-slice-").concat(t3));
      if ("true" !== r2.attr("data:pieClicked")) {
        var n2 = i2.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
        Array.prototype.forEach.call(n2, function(t4) {
          t4.setAttribute("data:pieClicked", "false");
          var e3 = t4.getAttribute("data:pathOrig");
          e3 && t4.setAttribute("d", e3);
        }), i2.globals.capturedDataPointIndex = t3, r2.attr("data:pieClicked", "true");
        var o2 = parseInt(r2.attr("data:startAngle"), 10), l2 = parseInt(r2.attr("data:angle"), 10);
        e2 = a2.getPiePath({
          me: a2,
          startAngle: o2,
          angle: l2,
          size: s2
        }), 360 !== l2 && r2.plot(e2);
      } else {
        r2.attr({
          "data:pieClicked": "false"
        }), this.revertDataLabelsInner(r2.node, this.donutDataLabels);
        var h2 = r2.attr("data:pathOrig");
        r2.attr({
          d: h2
        });
      }
    }
  }, {
    key: "getChangedPath",
    value: function(t3, e2) {
      var i2 = "";
      return this.dynamicAnim && this.w.globals.dataChanged && (i2 = this.getPiePath({
        me: this,
        startAngle: t3,
        angle: e2 - t3,
        size: this.size
      })), i2;
    }
  }, {
    key: "getPiePath",
    value: function(t3) {
      var e2, i2 = t3.me, a2 = t3.startAngle, s2 = t3.angle, r2 = t3.size, n2 = new Mi(this.ctx), o2 = a2, l2 = Math.PI * (o2 - 90) / 180, h2 = s2 + a2;
      Math.ceil(h2) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (h2 = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - 0.01), Math.ceil(h2) > this.fullAngle && (h2 -= this.fullAngle);
      var c2 = Math.PI * (h2 - 90) / 180, d2 = i2.centerX + r2 * Math.cos(l2), u2 = i2.centerY + r2 * Math.sin(l2), g2 = i2.centerX + r2 * Math.cos(c2), p2 = i2.centerY + r2 * Math.sin(c2), f2 = v.polarToCartesian(i2.centerX, i2.centerY, i2.donutSize, h2), x2 = v.polarToCartesian(i2.centerX, i2.centerY, i2.donutSize, o2), b2 = s2 > 180 ? 1 : 0, m2 = ["M", d2, u2, "A", r2, r2, 0, b2, 1, g2, p2];
      return e2 = "donut" === i2.chartType ? [].concat(m2, ["L", f2.x, f2.y, "A", i2.donutSize, i2.donutSize, 0, b2, 0, x2.x, x2.y, "L", d2, u2, "z"]).join(" ") : "pie" === i2.chartType || "polarArea" === i2.chartType ? [].concat(m2, ["L", i2.centerX, i2.centerY, "L", d2, u2]).join(" ") : [].concat(m2).join(" "), n2.roundPathCorners(e2, 2 * this.strokeWidth);
    }
  }, {
    key: "drawPolarElements",
    value: function(t3) {
      var e2 = this.w, i2 = new ta(this.ctx), a2 = new Mi(this.ctx), s2 = new Ra(this.ctx), r2 = a2.group(), n2 = a2.group(), o2 = i2.niceScale(0, Math.ceil(this.maxY), 0), l2 = o2.result.reverse(), h2 = o2.result.length;
      this.maxY = o2.niceMax;
      for (var c2 = e2.globals.radialSize, d2 = c2 / (h2 - 1), u2 = 0; u2 < h2 - 1; u2++) {
        var g2 = a2.drawCircle(c2);
        if (g2.attr({
          cx: this.centerX,
          cy: this.centerY,
          fill: "none",
          "stroke-width": e2.config.plotOptions.polarArea.rings.strokeWidth,
          stroke: e2.config.plotOptions.polarArea.rings.strokeColor
        }), e2.config.yaxis[0].show) {
          var p2 = s2.drawYAxisTexts(this.centerX, this.centerY - c2 + parseInt(e2.config.yaxis[0].labels.style.fontSize, 10) / 2, u2, l2[u2]);
          n2.add(p2);
        }
        r2.add(g2), c2 -= d2;
      }
      this.drawSpokes(t3), t3.add(r2), t3.add(n2);
    }
  }, {
    key: "renderInnerDataLabels",
    value: function(t3, e2, i2) {
      var a2 = this.w, s2 = new Mi(this.ctx), r2 = e2.total.show;
      t3.node.innerHTML = "", t3.node.style.opacity = i2.opacity;
      var n2, o2, l2 = i2.centerX, h2 = this.donutDataLabels.total.label ? i2.centerY : i2.centerY - i2.centerY / 6;
      n2 = void 0 === e2.name.color ? a2.globals.colors[0] : e2.name.color;
      var c2 = e2.name.fontSize, d2 = e2.name.fontFamily, u2 = e2.name.fontWeight;
      o2 = void 0 === e2.value.color ? a2.config.chart.foreColor : e2.value.color;
      var g2 = e2.value.formatter, p2 = "", f2 = "";
      if (r2 ? (n2 = e2.total.color, c2 = e2.total.fontSize, d2 = e2.total.fontFamily, u2 = e2.total.fontWeight, f2 = this.donutDataLabels.total.label ? e2.total.label : "", p2 = e2.total.formatter(a2)) : 1 === a2.globals.series.length && (p2 = g2(a2.globals.series[0], a2), f2 = a2.globals.seriesNames[0]), f2 && (f2 = e2.name.formatter(f2, e2.total.show, a2)), e2.name.show) {
        var x2 = s2.drawText({
          x: l2,
          y: h2 + parseFloat(e2.name.offsetY),
          text: f2,
          textAnchor: "middle",
          foreColor: n2,
          fontSize: c2,
          fontWeight: u2,
          fontFamily: d2
        });
        x2.node.classList.add("apexcharts-datalabel-label"), t3.add(x2);
      }
      if (e2.value.show) {
        var b2 = e2.name.show ? parseFloat(e2.value.offsetY) + 16 : e2.value.offsetY, m2 = s2.drawText({
          x: l2,
          y: h2 + b2,
          text: p2,
          textAnchor: "middle",
          foreColor: o2,
          fontWeight: e2.value.fontWeight,
          fontSize: e2.value.fontSize,
          fontFamily: e2.value.fontFamily
        });
        m2.node.classList.add("apexcharts-datalabel-value"), t3.add(m2);
      }
      return t3;
    }
  }, {
    key: "printInnerLabels",
    value: function(t3, e2, i2, a2) {
      var s2, r2 = this.w;
      a2 ? s2 = void 0 === t3.name.color ? r2.globals.colors[parseInt(a2.parentNode.getAttribute("rel"), 10) - 1] : t3.name.color : r2.globals.series.length > 1 && t3.total.show && (s2 = t3.total.color);
      var n2 = r2.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"), o2 = r2.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
      i2 = (0, t3.value.formatter)(i2, r2), a2 || "function" != typeof t3.total.formatter || (i2 = t3.total.formatter(r2));
      var l2 = e2 === t3.total.label;
      e2 = this.donutDataLabels.total.label ? t3.name.formatter(e2, l2, r2) : "", null !== n2 && (n2.textContent = e2), null !== o2 && (o2.textContent = i2), null !== n2 && (n2.style.fill = s2);
    }
  }, {
    key: "printDataLabelsInner",
    value: function(t3, e2) {
      var i2 = this.w, a2 = t3.getAttribute("data:value"), s2 = i2.globals.seriesNames[parseInt(t3.parentNode.getAttribute("rel"), 10) - 1];
      i2.globals.series.length > 1 && this.printInnerLabels(e2, s2, a2, t3);
      var r2 = i2.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
      null !== r2 && (r2.style.opacity = 1);
    }
  }, {
    key: "drawSpokes",
    value: function(t3) {
      var e2 = this, i2 = this.w, a2 = new Mi(this.ctx), s2 = i2.config.plotOptions.polarArea.spokes;
      if (0 !== s2.strokeWidth) {
        for (var r2 = [], n2 = 360 / i2.globals.series.length, o2 = 0; o2 < i2.globals.series.length; o2++) r2.push(v.polarToCartesian(this.centerX, this.centerY, i2.globals.radialSize, i2.config.plotOptions.pie.startAngle + n2 * o2));
        r2.forEach(function(i3, r3) {
          var n3 = a2.drawLine(i3.x, i3.y, e2.centerX, e2.centerY, Array.isArray(s2.connectorColors) ? s2.connectorColors[r3] : s2.connectorColors);
          t3.add(n3);
        });
      }
    }
  }, {
    key: "revertDataLabelsInner",
    value: function() {
      var t3 = this.w;
      if (this.donutDataLabels.show) {
        var e2 = t3.globals.dom.Paper.findOne(".apexcharts-datalabels-group"), i2 = this.renderInnerDataLabels(e2, this.donutDataLabels, {
          hollowSize: this.donutSize,
          centerX: this.centerX,
          centerY: this.centerY,
          opacity: this.donutDataLabels.show
        });
        t3.globals.dom.Paper.findOne(".apexcharts-radialbar, .apexcharts-pie").add(i2);
      }
    }
  }]), t2;
}();
var Ya = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
    var a2 = this.w;
    this.graphics = new Mi(this.ctx), this.lineColorArr = void 0 !== a2.globals.stroke.colors ? a2.globals.stroke.colors : a2.globals.colors, this.defaultSize = a2.globals.svgHeight < a2.globals.svgWidth ? a2.globals.gridHeight : a2.globals.gridWidth, this.isLog = a2.config.yaxis[0].logarithmic, this.logBase = a2.config.yaxis[0].logBase, this.coreUtils = new Pi(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, a2.globals.maxY, 0) : a2.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.logBase, this.w.globals.minY, 0) : a2.globals.minY, this.polygons = a2.config.plotOptions.radar.polygons, this.strokeWidth = a2.config.stroke.show ? a2.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - a2.config.chart.dropShadow.blur, a2.config.xaxis.labels.show && (this.size = this.size - a2.globals.xAxisLabelsWidth / 1.75), void 0 !== a2.config.plotOptions.radar.size && (this.size = a2.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = [];
  }
  return s(t2, [{
    key: "draw",
    value: function(t3) {
      var e2 = this, i2 = this.w, a2 = new ji(this.ctx), s2 = [], r2 = new qi(this.ctx);
      t3.length && (this.dataPointsLen = t3[i2.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
      var n2 = i2.globals.gridWidth / 2, o2 = i2.globals.gridHeight / 2, l2 = n2 + i2.config.plotOptions.radar.offsetX, h2 = o2 + i2.config.plotOptions.radar.offsetY, c2 = this.graphics.group({
        class: "apexcharts-radar-series apexcharts-plot-series",
        transform: "translate(".concat(l2 || 0, ", ").concat(h2 || 0, ")")
      }), d2 = [], g2 = null, p2 = null;
      if (this.yaxisLabels = this.graphics.group({
        class: "apexcharts-yaxis"
      }), t3.forEach(function(t4, n3) {
        var o3 = t4.length === i2.globals.dataPoints, l3 = e2.graphics.group().attr({
          class: "apexcharts-series",
          "data:longestSeries": o3,
          seriesName: v.escapeString(i2.globals.seriesNames[n3]),
          rel: n3 + 1,
          "data:realIndex": n3
        });
        e2.dataRadiusOfPercent[n3] = [], e2.dataRadius[n3] = [], e2.angleArr[n3] = [], t4.forEach(function(t5, i3) {
          var a3 = Math.abs(e2.maxValue - e2.minValue);
          t5 -= e2.minValue, e2.isLog && (t5 = e2.coreUtils.getLogVal(e2.logBase, t5, 0)), e2.dataRadiusOfPercent[n3][i3] = t5 / a3, e2.dataRadius[n3][i3] = e2.dataRadiusOfPercent[n3][i3] * e2.size, e2.angleArr[n3][i3] = i3 * e2.disAngle;
        }), d2 = e2.getDataPointsPos(e2.dataRadius[n3], e2.angleArr[n3]);
        var h3 = e2.createPaths(d2, {
          x: 0,
          y: 0
        });
        g2 = e2.graphics.group({
          class: "apexcharts-series-markers-wrap apexcharts-element-hidden"
        }), p2 = e2.graphics.group({
          class: "apexcharts-datalabels",
          "data:realIndex": n3
        }), i2.globals.delayedElements.push({
          el: g2.node,
          index: n3
        });
        var c3 = {
          i: n3,
          realIndex: n3,
          animationDelay: n3,
          initialSpeed: i2.config.chart.animations.speed,
          dataChangeSpeed: i2.config.chart.animations.dynamicAnimation.speed,
          className: "apexcharts-radar",
          shouldClipToGrid: false,
          bindEventsOnPaths: false,
          stroke: i2.globals.stroke.colors[n3],
          strokeLineCap: i2.config.stroke.lineCap
        }, f3 = null;
        i2.globals.previousPaths.length > 0 && (f3 = e2.getPreviousPath(n3));
        for (var x2 = 0; x2 < h3.linePathsTo.length; x2++) {
          var b2 = e2.graphics.renderPaths(u(u({}, c3), {}, {
            pathFrom: null === f3 ? h3.linePathsFrom[x2] : f3,
            pathTo: h3.linePathsTo[x2],
            strokeWidth: Array.isArray(e2.strokeWidth) ? e2.strokeWidth[n3] : e2.strokeWidth,
            fill: "none",
            drawShadow: false
          }));
          l3.add(b2);
          var m2 = a2.fillPath({
            seriesNumber: n3
          }), y2 = e2.graphics.renderPaths(u(u({}, c3), {}, {
            pathFrom: null === f3 ? h3.areaPathsFrom[x2] : f3,
            pathTo: h3.areaPathsTo[x2],
            strokeWidth: 0,
            fill: m2,
            drawShadow: false
          }));
          if (i2.config.chart.dropShadow.enabled) {
            var w2 = new Li(e2.ctx), k2 = i2.config.chart.dropShadow;
            w2.dropShadow(y2, Object.assign({}, k2, {
              noUserSpaceOnUse: true
            }), n3);
          }
          l3.add(y2);
        }
        t4.forEach(function(t5, a3) {
          var s3 = new Vi(e2.ctx).getMarkerConfig({
            cssClass: "apexcharts-marker",
            seriesIndex: n3,
            dataPointIndex: a3
          }), o4 = e2.graphics.drawMarker(d2[a3].x, d2[a3].y, s3);
          o4.attr("rel", a3), o4.attr("j", a3), o4.attr("index", n3), o4.node.setAttribute("default-marker-size", s3.pSize);
          var h4 = e2.graphics.group({
            class: "apexcharts-series-markers"
          });
          h4 && h4.add(o4), g2.add(h4), l3.add(g2);
          var c4 = i2.config.dataLabels;
          if (c4.enabled) {
            var f4 = c4.formatter(i2.globals.series[n3][a3], {
              seriesIndex: n3,
              dataPointIndex: a3,
              w: i2
            });
            r2.plotDataLabelsText({
              x: d2[a3].x,
              y: d2[a3].y,
              text: f4,
              textAnchor: "middle",
              i: n3,
              j: n3,
              parent: p2,
              offsetCorrection: false,
              dataLabelsConfig: u({}, c4)
            });
          }
          l3.add(p2);
        }), s2.push(l3);
      }), this.drawPolygons({
        parent: c2
      }), i2.config.xaxis.labels.show) {
        var f2 = this.drawXAxisTexts();
        c2.add(f2);
      }
      return s2.forEach(function(t4) {
        c2.add(t4);
      }), c2.add(this.yaxisLabels), c2;
    }
  }, {
    key: "drawPolygons",
    value: function(t3) {
      for (var e2 = this, i2 = this.w, a2 = t3.parent, s2 = new Ra(this.ctx), r2 = i2.globals.yAxisScale[0].result.reverse(), n2 = r2.length, o2 = [], l2 = this.size / (n2 - 1), h2 = 0; h2 < n2; h2++) o2[h2] = l2 * h2;
      o2.reverse();
      var c2 = [], d2 = [];
      o2.forEach(function(t4, i3) {
        var a3 = v.getPolygonPos(t4, e2.dataPointsLen), s3 = "";
        a3.forEach(function(t5, a4) {
          if (0 === i3) {
            var r3 = e2.graphics.drawLine(t5.x, t5.y, 0, 0, Array.isArray(e2.polygons.connectorColors) ? e2.polygons.connectorColors[a4] : e2.polygons.connectorColors);
            d2.push(r3);
          }
          0 === a4 && e2.yaxisLabelsTextsPos.push({
            x: t5.x,
            y: t5.y
          }), s3 += t5.x + "," + t5.y + " ";
        }), c2.push(s3);
      }), c2.forEach(function(t4, s3) {
        var r3 = e2.polygons.strokeColors, n3 = e2.polygons.strokeWidth, o3 = e2.graphics.drawPolygon(t4, Array.isArray(r3) ? r3[s3] : r3, Array.isArray(n3) ? n3[s3] : n3, i2.globals.radarPolygons.fill.colors[s3]);
        a2.add(o3);
      }), d2.forEach(function(t4) {
        a2.add(t4);
      }), i2.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach(function(t4, i3) {
        var a3 = s2.drawYAxisTexts(t4.x, t4.y, i3, r2[i3]);
        e2.yaxisLabels.add(a3);
      });
    }
  }, {
    key: "drawXAxisTexts",
    value: function() {
      var t3 = this, e2 = this.w, i2 = e2.config.xaxis.labels, a2 = this.graphics.group({
        class: "apexcharts-xaxis"
      }), s2 = v.getPolygonPos(this.size, this.dataPointsLen);
      return e2.globals.labels.forEach(function(r2, n2) {
        var o2 = e2.config.xaxis.labels.formatter, l2 = new qi(t3.ctx);
        if (s2[n2]) {
          var h2 = t3.getTextPos(s2[n2], t3.size), c2 = o2(r2, {
            seriesIndex: -1,
            dataPointIndex: n2,
            w: e2
          });
          l2.plotDataLabelsText({
            x: h2.newX,
            y: h2.newY,
            text: c2,
            textAnchor: h2.textAnchor,
            i: n2,
            j: n2,
            parent: a2,
            className: "apexcharts-xaxis-label",
            color: Array.isArray(i2.style.colors) && i2.style.colors[n2] ? i2.style.colors[n2] : "#a8a8a8",
            dataLabelsConfig: u({
              textAnchor: h2.textAnchor,
              dropShadow: {
                enabled: false
              }
            }, i2),
            offsetCorrection: false
          }).on("click", function(i3) {
            if ("function" == typeof e2.config.chart.events.xAxisLabelClick) {
              var a3 = Object.assign({}, e2, {
                labelIndex: n2
              });
              e2.config.chart.events.xAxisLabelClick(i3, t3.ctx, a3);
            }
          });
        }
      }), a2;
    }
  }, {
    key: "createPaths",
    value: function(t3, e2) {
      var i2 = this, a2 = [], s2 = [], r2 = [], n2 = [];
      if (t3.length) {
        s2 = [this.graphics.move(e2.x, e2.y)], n2 = [this.graphics.move(e2.x, e2.y)];
        var o2 = this.graphics.move(t3[0].x, t3[0].y), l2 = this.graphics.move(t3[0].x, t3[0].y);
        t3.forEach(function(e3, a3) {
          o2 += i2.graphics.line(e3.x, e3.y), l2 += i2.graphics.line(e3.x, e3.y), a3 === t3.length - 1 && (o2 += "Z", l2 += "Z");
        }), a2.push(o2), r2.push(l2);
      }
      return {
        linePathsFrom: s2,
        linePathsTo: a2,
        areaPathsFrom: n2,
        areaPathsTo: r2
      };
    }
  }, {
    key: "getTextPos",
    value: function(t3, e2) {
      var i2 = "middle", a2 = t3.x, s2 = t3.y;
      return Math.abs(t3.x) >= 10 ? t3.x > 0 ? (i2 = "start", a2 += 10) : t3.x < 0 && (i2 = "end", a2 -= 10) : i2 = "middle", Math.abs(t3.y) >= e2 - 10 && (t3.y < 0 ? s2 -= 10 : t3.y > 0 && (s2 += 10)), {
        textAnchor: i2,
        newX: a2,
        newY: s2
      };
    }
  }, {
    key: "getPreviousPath",
    value: function(t3) {
      for (var e2 = this.w, i2 = null, a2 = 0; a2 < e2.globals.previousPaths.length; a2++) {
        var s2 = e2.globals.previousPaths[a2];
        s2.paths.length > 0 && parseInt(s2.realIndex, 10) === parseInt(t3, 10) && void 0 !== e2.globals.previousPaths[a2].paths[0] && (i2 = e2.globals.previousPaths[a2].paths[0].d);
      }
      return i2;
    }
  }, {
    key: "getDataPointsPos",
    value: function(t3, e2) {
      var i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.dataPointsLen;
      t3 = t3 || [], e2 = e2 || [];
      for (var a2 = [], s2 = 0; s2 < i2; s2++) {
        var r2 = {};
        r2.x = t3[s2] * Math.sin(e2[s2]), r2.y = -t3[s2] * Math.cos(e2[s2]), a2.push(r2);
      }
      return a2;
    }
  }]), t2;
}();
var Ha = function(t2) {
  h(r2, Ea);
  var a2 = n(r2);
  function r2(t3) {
    var s2;
    i(this, r2), (s2 = a2.call(this, t3)).ctx = t3, s2.w = t3.w, s2.animBeginArr = [0], s2.animDur = 0;
    var n2 = s2.w;
    return s2.startAngle = n2.config.plotOptions.radialBar.startAngle, s2.endAngle = n2.config.plotOptions.radialBar.endAngle, s2.totalAngle = Math.abs(n2.config.plotOptions.radialBar.endAngle - n2.config.plotOptions.radialBar.startAngle), s2.trackStartAngle = n2.config.plotOptions.radialBar.track.startAngle, s2.trackEndAngle = n2.config.plotOptions.radialBar.track.endAngle, s2.barLabels = s2.w.config.plotOptions.radialBar.barLabels, s2.donutDataLabels = s2.w.config.plotOptions.radialBar.dataLabels, s2.radialDataLabels = s2.donutDataLabels, s2.trackStartAngle || (s2.trackStartAngle = s2.startAngle), s2.trackEndAngle || (s2.trackEndAngle = s2.endAngle), 360 === s2.endAngle && (s2.endAngle = 359.99), s2.margin = parseInt(n2.config.plotOptions.radialBar.track.margin, 10), s2.onBarLabelClick = s2.onBarLabelClick.bind(e(s2)), s2;
  }
  return s(r2, [{
    key: "draw",
    value: function(t3) {
      var e2 = this.w, i2 = new Mi(this.ctx), a3 = i2.group({
        class: "apexcharts-radialbar"
      });
      if (e2.globals.noData) return a3;
      var s2 = i2.group(), r3 = this.defaultSize / 2, n2 = e2.globals.gridWidth / 2, o2 = this.defaultSize / 2.05;
      e2.config.chart.sparkline.enabled || (o2 = o2 - e2.config.stroke.width - e2.config.chart.dropShadow.blur);
      var l2 = e2.globals.fill.colors;
      if (e2.config.plotOptions.radialBar.track.show) {
        var h2 = this.drawTracks({
          size: o2,
          centerX: n2,
          centerY: r3,
          colorArr: l2,
          series: t3
        });
        s2.add(h2);
      }
      var c2 = this.drawArcs({
        size: o2,
        centerX: n2,
        centerY: r3,
        colorArr: l2,
        series: t3
      }), d2 = 360;
      e2.config.plotOptions.radialBar.startAngle < 0 && (d2 = this.totalAngle);
      var u2 = (360 - d2) / 360;
      if (e2.globals.radialSize = o2 - o2 * u2, this.radialDataLabels.value.show) {
        var g2 = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
        e2.globals.radialSize += g2 * u2;
      }
      return s2.add(c2.g), "front" === e2.config.plotOptions.radialBar.hollow.position && (c2.g.add(c2.elHollow), c2.dataLabels && c2.g.add(c2.dataLabels)), a3.add(s2), a3;
    }
  }, {
    key: "drawTracks",
    value: function(t3) {
      var e2 = this.w, i2 = new Mi(this.ctx), a3 = i2.group({
        class: "apexcharts-tracks"
      }), s2 = new Li(this.ctx), r3 = new ji(this.ctx), n2 = this.getStrokeWidth(t3);
      t3.size = t3.size - n2 / 2;
      for (var o2 = 0; o2 < t3.series.length; o2++) {
        var l2 = i2.group({
          class: "apexcharts-radialbar-track apexcharts-track"
        });
        a3.add(l2), l2.attr({
          rel: o2 + 1
        }), t3.size = t3.size - n2 - this.margin;
        var h2 = e2.config.plotOptions.radialBar.track, c2 = r3.fillPath({
          seriesNumber: 0,
          size: t3.size,
          fillColors: Array.isArray(h2.background) ? h2.background[o2] : h2.background,
          solid: true
        }), d2 = this.trackStartAngle, u2 = this.trackEndAngle;
        Math.abs(u2) + Math.abs(d2) >= 360 && (u2 = 360 - Math.abs(this.startAngle) - 0.1);
        var g2 = i2.drawPath({
          d: "",
          stroke: c2,
          strokeWidth: n2 * parseInt(h2.strokeWidth, 10) / 100,
          fill: "none",
          strokeOpacity: h2.opacity,
          classes: "apexcharts-radialbar-area"
        });
        if (h2.dropShadow.enabled) {
          var p2 = h2.dropShadow;
          s2.dropShadow(g2, p2);
        }
        l2.add(g2), g2.attr("id", "apexcharts-radialbarTrack-" + o2), this.animatePaths(g2, {
          centerX: t3.centerX,
          centerY: t3.centerY,
          endAngle: u2,
          startAngle: d2,
          size: t3.size,
          i: o2,
          totalItems: 2,
          animBeginArr: 0,
          dur: 0,
          isTrack: true
        });
      }
      return a3;
    }
  }, {
    key: "drawArcs",
    value: function(t3) {
      var e2 = this.w, i2 = new Mi(this.ctx), a3 = new ji(this.ctx), s2 = new Li(this.ctx), r3 = i2.group(), n2 = this.getStrokeWidth(t3);
      t3.size = t3.size - n2 / 2;
      var o2 = e2.config.plotOptions.radialBar.hollow.background, l2 = t3.size - n2 * t3.series.length - this.margin * t3.series.length - n2 * parseInt(e2.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2, h2 = l2 - e2.config.plotOptions.radialBar.hollow.margin;
      void 0 !== e2.config.plotOptions.radialBar.hollow.image && (o2 = this.drawHollowImage(t3, r3, l2, o2));
      var c2 = this.drawHollow({
        size: h2,
        centerX: t3.centerX,
        centerY: t3.centerY,
        fill: o2 || "transparent"
      });
      if (e2.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
        var d2 = e2.config.plotOptions.radialBar.hollow.dropShadow;
        s2.dropShadow(c2, d2);
      }
      var u2 = 1;
      !this.radialDataLabels.total.show && e2.globals.series.length > 1 && (u2 = 0);
      var g2 = null;
      if (this.radialDataLabels.show) {
        var p2 = e2.globals.dom.Paper.findOne(".apexcharts-datalabels-group");
        g2 = this.renderInnerDataLabels(p2, this.radialDataLabels, {
          hollowSize: l2,
          centerX: t3.centerX,
          centerY: t3.centerY,
          opacity: u2
        });
      }
      "back" === e2.config.plotOptions.radialBar.hollow.position && (r3.add(c2), g2 && r3.add(g2));
      var f2 = false;
      e2.config.plotOptions.radialBar.inverseOrder && (f2 = true);
      for (var x2 = f2 ? t3.series.length - 1 : 0; f2 ? x2 >= 0 : x2 < t3.series.length; f2 ? x2-- : x2++) {
        var b2 = i2.group({
          class: "apexcharts-series apexcharts-radial-series",
          seriesName: v.escapeString(e2.globals.seriesNames[x2])
        });
        r3.add(b2), b2.attr({
          rel: x2 + 1,
          "data:realIndex": x2
        }), this.ctx.series.addCollapsedClassToSeries(b2, x2), t3.size = t3.size - n2 - this.margin;
        var m2 = a3.fillPath({
          seriesNumber: x2,
          size: t3.size,
          value: t3.series[x2]
        }), y2 = this.startAngle, w2 = void 0, k2 = v.negToZero(t3.series[x2] > 100 ? 100 : t3.series[x2]) / 100, A2 = Math.round(this.totalAngle * k2) + this.startAngle, C2 = void 0;
        e2.globals.dataChanged && (w2 = this.startAngle, C2 = Math.round(this.totalAngle * v.negToZero(e2.globals.previousPaths[x2]) / 100) + w2), Math.abs(A2) + Math.abs(y2) > 360 && (A2 -= 0.01), Math.abs(C2) + Math.abs(w2) > 360 && (C2 -= 0.01);
        var S2 = A2 - y2, L2 = Array.isArray(e2.config.stroke.dashArray) ? e2.config.stroke.dashArray[x2] : e2.config.stroke.dashArray, M2 = i2.drawPath({
          d: "",
          stroke: m2,
          strokeWidth: n2,
          fill: "none",
          fillOpacity: e2.config.fill.opacity,
          classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + x2,
          strokeDashArray: L2
        });
        if (Mi.setAttrs(M2.node, {
          "data:angle": S2,
          "data:value": t3.series[x2]
        }), e2.config.chart.dropShadow.enabled) {
          var P2 = e2.config.chart.dropShadow;
          s2.dropShadow(M2, P2, x2);
        }
        if (s2.setSelectionFilter(M2, 0, x2), this.addListeners(M2, this.radialDataLabels), b2.add(M2), M2.attr({
          index: 0,
          j: x2
        }), this.barLabels.enabled) {
          var I2 = v.polarToCartesian(t3.centerX, t3.centerY, t3.size, y2), T2 = this.barLabels.formatter(e2.globals.seriesNames[x2], {
            seriesIndex: x2,
            w: e2
          }), z2 = ["apexcharts-radialbar-label"];
          this.barLabels.onClick || z2.push("apexcharts-no-click");
          var X2 = this.barLabels.useSeriesColors ? e2.globals.colors[x2] : e2.config.chart.foreColor;
          X2 || (X2 = e2.config.chart.foreColor);
          var R2 = I2.x + this.barLabels.offsetX, E2 = I2.y + this.barLabels.offsetY, Y2 = i2.drawText({
            x: R2,
            y: E2,
            text: T2,
            textAnchor: "end",
            dominantBaseline: "middle",
            fontFamily: this.barLabels.fontFamily,
            fontWeight: this.barLabels.fontWeight,
            fontSize: this.barLabels.fontSize,
            foreColor: X2,
            cssClass: z2.join(" ")
          });
          Y2.on("click", this.onBarLabelClick), Y2.attr({
            rel: x2 + 1
          }), 0 !== y2 && Y2.attr({
            "transform-origin": "".concat(R2, " ").concat(E2),
            transform: "rotate(".concat(y2, " 0 0)")
          }), b2.add(Y2);
        }
        var H2 = 0;
        !this.initialAnim || e2.globals.resized || e2.globals.dataChanged || (H2 = e2.config.chart.animations.speed), e2.globals.dataChanged && (H2 = e2.config.chart.animations.dynamicAnimation.speed), this.animDur = H2 / (1.2 * t3.series.length) + this.animDur, this.animBeginArr.push(this.animDur), this.animatePaths(M2, {
          centerX: t3.centerX,
          centerY: t3.centerY,
          endAngle: A2,
          startAngle: y2,
          prevEndAngle: C2,
          prevStartAngle: w2,
          size: t3.size,
          i: x2,
          totalItems: 2,
          animBeginArr: this.animBeginArr,
          dur: H2,
          shouldSetPrevPaths: true
        });
      }
      return {
        g: r3,
        elHollow: c2,
        dataLabels: g2
      };
    }
  }, {
    key: "drawHollow",
    value: function(t3) {
      var e2 = new Mi(this.ctx).drawCircle(2 * t3.size);
      return e2.attr({
        class: "apexcharts-radialbar-hollow",
        cx: t3.centerX,
        cy: t3.centerY,
        r: t3.size,
        fill: t3.fill
      }), e2;
    }
  }, {
    key: "drawHollowImage",
    value: function(t3, e2, i2, a3) {
      var s2 = this.w, r3 = new ji(this.ctx), n2 = v.randomId(), o2 = s2.config.plotOptions.radialBar.hollow.image;
      if (s2.config.plotOptions.radialBar.hollow.imageClipped) r3.clippedImgArea({
        width: i2,
        height: i2,
        image: o2,
        patternID: "pattern".concat(s2.globals.cuid).concat(n2)
      }), a3 = "url(#pattern".concat(s2.globals.cuid).concat(n2, ")");
      else {
        var l2 = s2.config.plotOptions.radialBar.hollow.imageWidth, h2 = s2.config.plotOptions.radialBar.hollow.imageHeight;
        if (void 0 === l2 && void 0 === h2) {
          var c2 = s2.globals.dom.Paper.image(o2, function(e3) {
            this.move(t3.centerX - e3.width / 2 + s2.config.plotOptions.radialBar.hollow.imageOffsetX, t3.centerY - e3.height / 2 + s2.config.plotOptions.radialBar.hollow.imageOffsetY);
          });
          e2.add(c2);
        } else {
          var d2 = s2.globals.dom.Paper.image(o2, function(e3) {
            this.move(t3.centerX - l2 / 2 + s2.config.plotOptions.radialBar.hollow.imageOffsetX, t3.centerY - h2 / 2 + s2.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(l2, h2);
          });
          e2.add(d2);
        }
      }
      return a3;
    }
  }, {
    key: "getStrokeWidth",
    value: function(t3) {
      var e2 = this.w;
      return t3.size * (100 - parseInt(e2.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (t3.series.length + 1) - this.margin;
    }
  }, {
    key: "onBarLabelClick",
    value: function(t3) {
      var e2 = parseInt(t3.target.getAttribute("rel"), 10) - 1, i2 = this.barLabels.onClick, a3 = this.w;
      i2 && i2(a3.globals.seriesNames[e2], {
        w: a3,
        seriesIndex: e2
      });
    }
  }]), r2;
}();
var Oa = function(t2) {
  h(a2, Pa);
  var e2 = n(a2);
  function a2() {
    return i(this, a2), e2.apply(this, arguments);
  }
  return s(a2, [{
    key: "draw",
    value: function(t3, e3) {
      var i2 = this.w, a3 = new Mi(this.ctx);
      this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = t3, this.seriesRangeStart = i2.globals.seriesRangeStart, this.seriesRangeEnd = i2.globals.seriesRangeEnd, this.barHelpers.initVariables(t3);
      for (var s2 = a3.group({
        class: "apexcharts-rangebar-series apexcharts-plot-series"
      }), r2 = 0; r2 < t3.length; r2++) {
        var n2, o2, l2, h2, c2 = void 0, d2 = void 0, g2 = i2.globals.comboCharts ? e3[r2] : r2, p2 = this.barHelpers.getGroupIndex(g2).columnGroupIndex, f2 = a3.group({
          class: "apexcharts-series",
          seriesName: v.escapeString(i2.globals.seriesNames[g2]),
          rel: r2 + 1,
          "data:realIndex": g2
        });
        this.ctx.series.addCollapsedClassToSeries(f2, g2), t3[r2].length > 0 && (this.visibleI = this.visibleI + 1);
        var x2 = 0, b2 = 0, m2 = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = i2.globals.seriesYAxisReverseMap[g2][0], m2 = g2);
        var y2 = this.barHelpers.initialPositions(g2);
        d2 = y2.y, h2 = y2.zeroW, c2 = y2.x, b2 = y2.barWidth, x2 = y2.barHeight, n2 = y2.xDivision, o2 = y2.yDivision, l2 = y2.zeroH;
        for (var w2 = a3.group({
          class: "apexcharts-datalabels",
          "data:realIndex": g2
        }), k2 = a3.group({
          class: "apexcharts-rangebar-goals-markers"
        }), A2 = 0; A2 < i2.globals.dataPoints; A2++) {
          var C2 = this.barHelpers.getStrokeWidth(r2, A2, g2), S2 = this.seriesRangeStart[r2][A2], L2 = this.seriesRangeEnd[r2][A2], M2 = null, P2 = null, I2 = null, T2 = {
            x: c2,
            y: d2,
            strokeWidth: C2,
            elSeries: f2
          }, z2 = this.seriesLen;
          if (i2.config.plotOptions.bar.rangeBarGroupRows && (z2 = 1), void 0 === i2.config.series[r2].data[A2]) break;
          if (this.isHorizontal) {
            I2 = d2 + x2 * this.visibleI;
            var X2 = (o2 - x2 * z2) / 2;
            if (i2.config.series[r2].data[A2].x) {
              var R2 = this.detectOverlappingBars({
                i: r2,
                j: A2,
                barYPosition: I2,
                srty: X2,
                barHeight: x2,
                yDivision: o2,
                initPositions: y2
              });
              x2 = R2.barHeight, I2 = R2.barYPosition;
            }
            b2 = (M2 = this.drawRangeBarPaths(u({
              indexes: {
                i: r2,
                j: A2,
                realIndex: g2
              },
              barHeight: x2,
              barYPosition: I2,
              zeroW: h2,
              yDivision: o2,
              y1: S2,
              y2: L2
            }, T2))).barWidth;
          } else {
            i2.globals.isXNumeric && (c2 = (i2.globals.seriesX[r2][A2] - i2.globals.minX) / this.xRatio - b2 / 2), P2 = c2 + b2 * this.visibleI;
            var E2 = (n2 - b2 * z2) / 2;
            if (i2.config.series[r2].data[A2].x) {
              var Y2 = this.detectOverlappingBars({
                i: r2,
                j: A2,
                barXPosition: P2,
                srtx: E2,
                barWidth: b2,
                xDivision: n2,
                initPositions: y2
              });
              b2 = Y2.barWidth, P2 = Y2.barXPosition;
            }
            x2 = (M2 = this.drawRangeColumnPaths(u({
              indexes: {
                i: r2,
                j: A2,
                realIndex: g2,
                translationsIndex: m2
              },
              barWidth: b2,
              barXPosition: P2,
              zeroH: l2,
              xDivision: n2
            }, T2))).barHeight;
          }
          var H2 = this.barHelpers.drawGoalLine({
            barXPosition: M2.barXPosition,
            barYPosition: I2,
            goalX: M2.goalX,
            goalY: M2.goalY,
            barHeight: x2,
            barWidth: b2
          });
          H2 && k2.add(H2), d2 = M2.y, c2 = M2.x;
          var O2 = this.barHelpers.getPathFillColor(t3, r2, A2, g2);
          this.renderSeries({
            realIndex: g2,
            pathFill: O2.color,
            lineFill: O2.useRangeColor ? O2.color : i2.globals.stroke.colors[g2],
            j: A2,
            i: r2,
            x: c2,
            y: d2,
            y1: S2,
            y2: L2,
            pathFrom: M2.pathFrom,
            pathTo: M2.pathTo,
            strokeWidth: C2,
            elSeries: f2,
            series: t3,
            barHeight: x2,
            barWidth: b2,
            barXPosition: P2,
            barYPosition: I2,
            columnGroupIndex: p2,
            elDataLabelsWrap: w2,
            elGoalsMarkers: k2,
            visibleSeries: this.visibleI,
            type: "rangebar"
          });
        }
        s2.add(f2);
      }
      return s2;
    }
  }, {
    key: "detectOverlappingBars",
    value: function(t3) {
      var e3 = t3.i, i2 = t3.j, a3 = t3.barYPosition, s2 = t3.barXPosition, r2 = t3.srty, n2 = t3.srtx, o2 = t3.barHeight, l2 = t3.barWidth, h2 = t3.yDivision, c2 = t3.xDivision, d2 = t3.initPositions, u2 = this.w, g2 = [], p2 = u2.config.series[e3].data[i2].rangeName, f2 = u2.config.series[e3].data[i2].x, x2 = Array.isArray(f2) ? f2.join(" ") : f2, b2 = u2.globals.labels.map(function(t4) {
        return Array.isArray(t4) ? t4.join(" ") : t4;
      }).indexOf(x2), m2 = u2.globals.seriesRange[e3].findIndex(function(t4) {
        return t4.x === x2 && t4.overlaps.length > 0;
      });
      return this.isHorizontal ? (a3 = u2.config.plotOptions.bar.rangeBarGroupRows ? r2 + h2 * b2 : r2 + o2 * this.visibleI + h2 * b2, m2 > -1 && !u2.config.plotOptions.bar.rangeBarOverlap && (g2 = u2.globals.seriesRange[e3][m2].overlaps).indexOf(p2) > -1 && (a3 = (o2 = d2.barHeight / g2.length) * this.visibleI + h2 * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + o2 * (this.visibleI + g2.indexOf(p2)) + h2 * b2)) : (b2 > -1 && !u2.globals.timescaleLabels.length && (s2 = u2.config.plotOptions.bar.rangeBarGroupRows ? n2 + c2 * b2 : n2 + l2 * this.visibleI + c2 * b2), m2 > -1 && !u2.config.plotOptions.bar.rangeBarOverlap && (g2 = u2.globals.seriesRange[e3][m2].overlaps).indexOf(p2) > -1 && (s2 = (l2 = d2.barWidth / g2.length) * this.visibleI + c2 * (100 - parseInt(this.barOptions.barWidth, 10)) / 100 / 2 + l2 * (this.visibleI + g2.indexOf(p2)) + c2 * b2)), {
        barYPosition: a3,
        barXPosition: s2,
        barHeight: o2,
        barWidth: l2
      };
    }
  }, {
    key: "drawRangeColumnPaths",
    value: function(t3) {
      var e3 = t3.indexes, i2 = t3.x, a3 = t3.xDivision, s2 = t3.barWidth, r2 = t3.barXPosition, n2 = t3.zeroH, o2 = this.w, l2 = e3.i, h2 = e3.j, c2 = e3.realIndex, d2 = e3.translationsIndex, u2 = this.yRatio[d2], g2 = this.getRangeValue(c2, h2), p2 = Math.min(g2.start, g2.end), f2 = Math.max(g2.start, g2.end);
      void 0 === this.series[l2][h2] || null === this.series[l2][h2] ? p2 = n2 : (p2 = n2 - p2 / u2, f2 = n2 - f2 / u2);
      var x2 = Math.abs(f2 - p2), b2 = this.barHelpers.getColumnPaths({
        barXPosition: r2,
        barWidth: s2,
        y1: p2,
        y2: f2,
        strokeWidth: this.strokeWidth,
        series: this.seriesRangeEnd,
        realIndex: c2,
        i: c2,
        j: h2,
        w: o2
      });
      if (o2.globals.isXNumeric) {
        var m2 = this.getBarXForNumericXAxis({
          x: i2,
          j: h2,
          realIndex: c2,
          barWidth: s2
        });
        i2 = m2.x, r2 = m2.barXPosition;
      } else i2 += a3;
      return {
        pathTo: b2.pathTo,
        pathFrom: b2.pathFrom,
        barHeight: x2,
        x: i2,
        y: g2.start < 0 && g2.end < 0 ? p2 : f2,
        goalY: this.barHelpers.getGoalValues("y", null, n2, l2, h2, d2),
        barXPosition: r2
      };
    }
  }, {
    key: "preventBarOverflow",
    value: function(t3) {
      var e3 = this.w;
      return t3 < 0 && (t3 = 0), t3 > e3.globals.gridWidth && (t3 = e3.globals.gridWidth), t3;
    }
  }, {
    key: "drawRangeBarPaths",
    value: function(t3) {
      var e3 = t3.indexes, i2 = t3.y, a3 = t3.y1, s2 = t3.y2, r2 = t3.yDivision, n2 = t3.barHeight, o2 = t3.barYPosition, l2 = t3.zeroW, h2 = this.w, c2 = e3.realIndex, d2 = e3.j, u2 = this.preventBarOverflow(l2 + a3 / this.invertedYRatio), g2 = this.preventBarOverflow(l2 + s2 / this.invertedYRatio), p2 = this.getRangeValue(c2, d2), f2 = Math.abs(g2 - u2), x2 = this.barHelpers.getBarpaths({
        barYPosition: o2,
        barHeight: n2,
        x1: u2,
        x2: g2,
        strokeWidth: this.strokeWidth,
        series: this.seriesRangeEnd,
        i: c2,
        realIndex: c2,
        j: d2,
        w: h2
      });
      return h2.globals.isXNumeric || (i2 += r2), {
        pathTo: x2.pathTo,
        pathFrom: x2.pathFrom,
        barWidth: f2,
        x: p2.start < 0 && p2.end < 0 ? u2 : g2,
        goalX: this.barHelpers.getGoalValues("x", l2, null, c2, d2),
        y: i2
      };
    }
  }, {
    key: "getRangeValue",
    value: function(t3, e3) {
      var i2 = this.w;
      return {
        start: i2.globals.seriesRangeStart[t3][e3],
        end: i2.globals.seriesRangeEnd[t3][e3]
      };
    }
  }]), a2;
}();
var Fa = function() {
  function t2(e2) {
    i(this, t2), this.w = e2.w, this.lineCtx = e2;
  }
  return s(t2, [{
    key: "sameValueSeriesFix",
    value: function(t3, e2) {
      var i2 = this.w;
      if (("gradient" === i2.config.fill.type || "gradient" === i2.config.fill.type[t3]) && new Pi(this.lineCtx.ctx, i2).seriesHaveSameValues(t3)) {
        var a2 = e2[t3].slice();
        a2[a2.length - 1] = a2[a2.length - 1] + 1e-6, e2[t3] = a2;
      }
      return e2;
    }
  }, {
    key: "calculatePoints",
    value: function(t3) {
      var e2 = t3.series, i2 = t3.realIndex, a2 = t3.x, s2 = t3.y, r2 = t3.i, n2 = t3.j, o2 = t3.prevY, l2 = this.w, h2 = [], c2 = [], d2 = this.lineCtx.categoryAxisCorrection + l2.config.markers.offsetX;
      return l2.globals.isXNumeric && (d2 = (l2.globals.seriesX[i2][0] - l2.globals.minX) / this.lineCtx.xRatio + l2.config.markers.offsetX), 0 === n2 && (h2.push(d2), c2.push(v.isNumber(e2[r2][0]) ? o2 + l2.config.markers.offsetY : null)), h2.push(a2 + l2.config.markers.offsetX), c2.push(v.isNumber(e2[r2][n2 + 1]) ? s2 + l2.config.markers.offsetY : null), {
        x: h2,
        y: c2
      };
    }
  }, {
    key: "checkPreviousPaths",
    value: function(t3) {
      for (var e2 = t3.pathFromLine, i2 = t3.pathFromArea, a2 = t3.realIndex, s2 = this.w, r2 = 0; r2 < s2.globals.previousPaths.length; r2++) {
        var n2 = s2.globals.previousPaths[r2];
        ("line" === n2.type || "area" === n2.type) && n2.paths.length > 0 && parseInt(n2.realIndex, 10) === parseInt(a2, 10) && ("line" === n2.type ? (this.lineCtx.appendPathFrom = false, e2 = s2.globals.previousPaths[r2].paths[0].d) : "area" === n2.type && (this.lineCtx.appendPathFrom = false, i2 = s2.globals.previousPaths[r2].paths[0].d, s2.config.stroke.show && s2.globals.previousPaths[r2].paths[1] && (e2 = s2.globals.previousPaths[r2].paths[1].d)));
      }
      return {
        pathFromLine: e2,
        pathFromArea: i2
      };
    }
  }, {
    key: "determineFirstPrevY",
    value: function(t3) {
      var e2, i2, a2, s2 = t3.i, r2 = t3.realIndex, n2 = t3.series, o2 = t3.prevY, l2 = t3.lineYPosition, h2 = t3.translationsIndex, c2 = this.w, d2 = c2.config.chart.stacked && !c2.globals.comboCharts || c2.config.chart.stacked && c2.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || "bar" === (null === (e2 = this.w.config.series[r2]) || void 0 === e2 ? void 0 : e2.type) || "column" === (null === (i2 = this.w.config.series[r2]) || void 0 === i2 ? void 0 : i2.type));
      if (void 0 !== (null === (a2 = n2[s2]) || void 0 === a2 ? void 0 : a2[0])) o2 = (l2 = d2 && s2 > 0 ? this.lineCtx.prevSeriesY[s2 - 1][0] : this.lineCtx.zeroY) - n2[s2][0] / this.lineCtx.yRatio[h2] + 2 * (this.lineCtx.isReversed ? n2[s2][0] / this.lineCtx.yRatio[h2] : 0);
      else if (d2 && s2 > 0 && void 0 === n2[s2][0]) {
        for (var u2 = s2 - 1; u2 >= 0; u2--) if (null !== n2[u2][0] && void 0 !== n2[u2][0]) {
          o2 = l2 = this.lineCtx.prevSeriesY[u2][0];
          break;
        }
      }
      return {
        prevY: o2,
        lineYPosition: l2
      };
    }
  }]), t2;
}();
var Da = function(t2) {
  for (var e2, i2, a2, s2, r2 = function(t3) {
    for (var e3 = [], i3 = t3[0], a3 = t3[1], s3 = e3[0] = Wa(i3, a3), r3 = 1, n3 = t3.length - 1; r3 < n3; r3++) i3 = a3, a3 = t3[r3 + 1], e3[r3] = 0.5 * (s3 + (s3 = Wa(i3, a3)));
    return e3[r3] = s3, e3;
  }(t2), n2 = t2.length - 1, o2 = [], l2 = 0; l2 < n2; l2++) a2 = Wa(t2[l2], t2[l2 + 1]), Math.abs(a2) < 1e-6 ? r2[l2] = r2[l2 + 1] = 0 : (s2 = (e2 = r2[l2] / a2) * e2 + (i2 = r2[l2 + 1] / a2) * i2) > 9 && (s2 = 3 * a2 / Math.sqrt(s2), r2[l2] = s2 * e2, r2[l2 + 1] = s2 * i2);
  for (var h2 = 0; h2 <= n2; h2++) s2 = (t2[Math.min(n2, h2 + 1)][0] - t2[Math.max(0, h2 - 1)][0]) / (6 * (1 + r2[h2] * r2[h2])), o2.push([s2 || 0, r2[h2] * s2 || 0]);
  return o2;
};
var _a = function(t2) {
  var e2 = Da(t2), i2 = t2[1], a2 = t2[0], s2 = [], r2 = e2[1], n2 = e2[0];
  s2.push(a2, [a2[0] + n2[0], a2[1] + n2[1], i2[0] - r2[0], i2[1] - r2[1], i2[0], i2[1]]);
  for (var o2 = 2, l2 = e2.length; o2 < l2; o2++) {
    var h2 = t2[o2], c2 = e2[o2];
    s2.push([h2[0] - c2[0], h2[1] - c2[1], h2[0], h2[1]]);
  }
  return s2;
};
var Na = function(t2, e2, i2) {
  var a2 = t2.slice(e2, i2);
  if (e2) {
    if (i2 - e2 > 1 && a2[1].length < 6) {
      var s2 = a2[0].length;
      a2[1] = [2 * a2[0][s2 - 2] - a2[0][s2 - 4], 2 * a2[0][s2 - 1] - a2[0][s2 - 3]].concat(a2[1]);
    }
    a2[0] = a2[0].slice(-2);
  }
  return a2;
};
function Wa(t2, e2) {
  return (e2[1] - t2[1]) / (e2[0] - t2[0]);
}
var Ba = function() {
  function t2(e2, a2, s2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.xyRatios = a2, this.pointsChart = !("bubble" !== this.w.config.chart.type && "scatter" !== this.w.config.chart.type) || s2, this.scatter = new Ui(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new Fa(this), this.markers = new Vi(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0;
  }
  return s(t2, [{
    key: "draw",
    value: function(t3, e2, i2, a2) {
      var s2, r2 = this.w, n2 = new Mi(this.ctx), o2 = r2.globals.comboCharts ? e2 : r2.config.chart.type, l2 = n2.group({
        class: "apexcharts-".concat(o2, "-series apexcharts-plot-series")
      }), h2 = new Pi(this.ctx, r2);
      this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, t3 = h2.getLogSeries(t3), this.yRatio = h2.getLogYRatios(this.yRatio), this.prevSeriesY = [];
      for (var c2 = [], d2 = 0; d2 < t3.length; d2++) {
        t3 = this.lineHelpers.sameValueSeriesFix(d2, t3);
        var g2 = r2.globals.comboCharts ? i2[d2] : d2, p2 = this.yRatio.length > 1 ? g2 : 0;
        this._initSerieVariables(t3, d2, g2);
        var f2 = [], x2 = [], b2 = [], m2 = r2.globals.padHorizontal + this.categoryAxisCorrection;
        this.ctx.series.addCollapsedClassToSeries(this.elSeries, g2), r2.globals.isXNumeric && r2.globals.seriesX.length > 0 && (m2 = (r2.globals.seriesX[g2][0] - r2.globals.minX) / this.xRatio), b2.push(m2);
        var v2, y2 = m2, w2 = void 0, k2 = y2, A2 = this.zeroY, C2 = this.zeroY;
        A2 = this.lineHelpers.determineFirstPrevY({
          i: d2,
          realIndex: g2,
          series: t3,
          prevY: A2,
          lineYPosition: 0,
          translationsIndex: p2
        }).prevY, "monotoneCubic" === r2.config.stroke.curve && null === t3[d2][0] ? f2.push(null) : f2.push(A2), v2 = A2;
        "rangeArea" === o2 && (w2 = C2 = this.lineHelpers.determineFirstPrevY({
          i: d2,
          realIndex: g2,
          series: a2,
          prevY: C2,
          lineYPosition: 0,
          translationsIndex: p2
        }).prevY, x2.push(null !== f2[0] ? C2 : null));
        var S2 = this._calculatePathsFrom({
          type: o2,
          series: t3,
          i: d2,
          realIndex: g2,
          translationsIndex: p2,
          prevX: k2,
          prevY: A2,
          prevY2: C2
        }), L2 = [f2[0]], M2 = [x2[0]], P2 = {
          type: o2,
          series: t3,
          realIndex: g2,
          translationsIndex: p2,
          i: d2,
          x: m2,
          y: 1,
          pX: y2,
          pY: v2,
          pathsFrom: S2,
          linePaths: [],
          areaPaths: [],
          seriesIndex: i2,
          lineYPosition: 0,
          xArrj: b2,
          yArrj: f2,
          y2Arrj: x2,
          seriesRangeEnd: a2
        }, I2 = this._iterateOverDataPoints(u(u({}, P2), {}, {
          iterations: "rangeArea" === o2 ? t3[d2].length - 1 : void 0,
          isRangeStart: true
        }));
        if ("rangeArea" === o2) {
          for (var T2 = this._calculatePathsFrom({
            series: a2,
            i: d2,
            realIndex: g2,
            prevX: k2,
            prevY: C2
          }), z2 = this._iterateOverDataPoints(u(u({}, P2), {}, {
            series: a2,
            xArrj: [m2],
            yArrj: L2,
            y2Arrj: M2,
            pY: w2,
            areaPaths: I2.areaPaths,
            pathsFrom: T2,
            iterations: a2[d2].length - 1,
            isRangeStart: false
          })), X2 = I2.linePaths.length / 2, R2 = 0; R2 < X2; R2++) I2.linePaths[R2] = z2.linePaths[R2 + X2] + I2.linePaths[R2];
          I2.linePaths.splice(X2), I2.pathFromLine = z2.pathFromLine + I2.pathFromLine;
        } else I2.pathFromArea += "z";
        this._handlePaths({
          type: o2,
          realIndex: g2,
          i: d2,
          paths: I2
        }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), c2.push(this.elSeries);
      }
      if (void 0 !== (null === (s2 = r2.config.series[0]) || void 0 === s2 ? void 0 : s2.zIndex) && c2.sort(function(t4, e3) {
        return Number(t4.node.getAttribute("zIndex")) - Number(e3.node.getAttribute("zIndex"));
      }), r2.config.chart.stacked) for (var E2 = c2.length - 1; E2 >= 0; E2--) l2.add(c2[E2]);
      else for (var Y2 = 0; Y2 < c2.length; Y2++) l2.add(c2[Y2]);
      return l2;
    }
  }, {
    key: "_initSerieVariables",
    value: function(t3, e2, i2) {
      var a2 = this.w, s2 = new Mi(this.ctx);
      this.xDivision = a2.globals.gridWidth / (a2.globals.dataPoints - ("on" === a2.config.xaxis.tickPlacement ? 1 : 0)), this.strokeWidth = Array.isArray(a2.config.stroke.width) ? a2.config.stroke.width[i2] : a2.config.stroke.width;
      var r2 = 0;
      if (this.yRatio.length > 1 && (this.yaxisIndex = a2.globals.seriesYAxisReverseMap[i2], r2 = i2), this.isReversed = a2.config.yaxis[this.yaxisIndex] && a2.config.yaxis[this.yaxisIndex].reversed, this.zeroY = a2.globals.gridHeight - this.baseLineY[r2] - (this.isReversed ? a2.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[r2] : 0), this.areaBottomY = this.zeroY, (this.zeroY > a2.globals.gridHeight || "end" === a2.config.plotOptions.area.fillTo) && (this.areaBottomY = a2.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = s2.group({
        class: "apexcharts-series",
        zIndex: void 0 !== a2.config.series[i2].zIndex ? a2.config.series[i2].zIndex : i2,
        seriesName: v.escapeString(a2.globals.seriesNames[i2])
      }), this.elPointsMain = s2.group({
        class: "apexcharts-series-markers-wrap",
        "data:realIndex": i2
      }), a2.globals.hasNullValues) {
        var n2 = this.markers.plotChartMarkers({
          pointsPos: {
            x: [0],
            y: [a2.globals.gridHeight + a2.globals.markers.largestSize]
          },
          seriesIndex: e2,
          j: 0,
          pSize: 0.1,
          alwaysDrawMarker: true,
          isVirtualPoint: true
        });
        null !== n2 && this.elPointsMain.add(n2);
      }
      this.elDataLabelsWrap = s2.group({
        class: "apexcharts-datalabels",
        "data:realIndex": i2
      });
      var o2 = t3[e2].length === a2.globals.dataPoints;
      this.elSeries.attr({
        "data:longestSeries": o2,
        rel: e2 + 1,
        "data:realIndex": i2
      }), this.appendPathFrom = true;
    }
  }, {
    key: "_calculatePathsFrom",
    value: function(t3) {
      var e2, i2, a2, s2, r2 = t3.type, n2 = t3.series, o2 = t3.i, l2 = t3.realIndex, h2 = t3.translationsIndex, c2 = t3.prevX, d2 = t3.prevY, u2 = t3.prevY2, g2 = this.w, p2 = new Mi(this.ctx);
      if (null === n2[o2][0]) {
        for (var f2 = 0; f2 < n2[o2].length; f2++) if (null !== n2[o2][f2]) {
          c2 = this.xDivision * f2, d2 = this.zeroY - n2[o2][f2] / this.yRatio[h2], e2 = p2.move(c2, d2), i2 = p2.move(c2, this.areaBottomY);
          break;
        }
      } else e2 = p2.move(c2, d2), "rangeArea" === r2 && (e2 = p2.move(c2, u2) + p2.line(c2, d2)), i2 = p2.move(c2, this.areaBottomY) + p2.line(c2, d2);
      if (a2 = p2.move(0, this.areaBottomY) + p2.line(0, this.areaBottomY), s2 = p2.move(0, this.areaBottomY) + p2.line(0, this.areaBottomY), g2.globals.previousPaths.length > 0) {
        var x2 = this.lineHelpers.checkPreviousPaths({
          pathFromLine: a2,
          pathFromArea: s2,
          realIndex: l2
        });
        a2 = x2.pathFromLine, s2 = x2.pathFromArea;
      }
      return {
        prevX: c2,
        prevY: d2,
        linePath: e2,
        areaPath: i2,
        pathFromLine: a2,
        pathFromArea: s2
      };
    }
  }, {
    key: "_handlePaths",
    value: function(t3) {
      var e2 = t3.type, i2 = t3.realIndex, a2 = t3.i, s2 = t3.paths, r2 = this.w, n2 = new Mi(this.ctx), o2 = new ji(this.ctx);
      this.prevSeriesY.push(s2.yArrj), r2.globals.seriesXvalues[i2] = s2.xArrj, r2.globals.seriesYvalues[i2] = s2.yArrj;
      var l2 = r2.config.forecastDataPoints;
      if (l2.count > 0 && "rangeArea" !== e2) {
        var h2 = r2.globals.seriesXvalues[i2][r2.globals.seriesXvalues[i2].length - l2.count - 1], c2 = n2.drawRect(h2, 0, r2.globals.gridWidth, r2.globals.gridHeight, 0);
        r2.globals.dom.elForecastMask.appendChild(c2.node);
        var d2 = n2.drawRect(0, 0, h2, r2.globals.gridHeight, 0);
        r2.globals.dom.elNonForecastMask.appendChild(d2.node);
      }
      this.pointsChart || r2.globals.delayedElements.push({
        el: this.elPointsMain.node,
        index: i2
      });
      var g2 = {
        i: a2,
        realIndex: i2,
        animationDelay: a2,
        initialSpeed: r2.config.chart.animations.speed,
        dataChangeSpeed: r2.config.chart.animations.dynamicAnimation.speed,
        className: "apexcharts-".concat(e2)
      };
      if ("area" === e2) for (var p2 = o2.fillPath({
        seriesNumber: i2
      }), f2 = 0; f2 < s2.areaPaths.length; f2++) {
        var x2 = n2.renderPaths(u(u({}, g2), {}, {
          pathFrom: s2.pathFromArea,
          pathTo: s2.areaPaths[f2],
          stroke: "none",
          strokeWidth: 0,
          strokeLineCap: null,
          fill: p2
        }));
        this.elSeries.add(x2);
      }
      if (r2.config.stroke.show && !this.pointsChart) {
        var b2 = null;
        if ("line" === e2) b2 = o2.fillPath({
          seriesNumber: i2,
          i: a2
        });
        else if ("solid" === r2.config.stroke.fill.type) b2 = r2.globals.stroke.colors[i2];
        else {
          var m2 = r2.config.fill;
          r2.config.fill = r2.config.stroke.fill, b2 = o2.fillPath({
            seriesNumber: i2,
            i: a2
          }), r2.config.fill = m2;
        }
        for (var v2 = 0; v2 < s2.linePaths.length; v2++) {
          var y2 = b2;
          "rangeArea" === e2 && (y2 = o2.fillPath({
            seriesNumber: i2
          }));
          var w2 = u(u({}, g2), {}, {
            pathFrom: s2.pathFromLine,
            pathTo: s2.linePaths[v2],
            stroke: b2,
            strokeWidth: this.strokeWidth,
            strokeLineCap: r2.config.stroke.lineCap,
            fill: "rangeArea" === e2 ? y2 : "none"
          }), k2 = n2.renderPaths(w2);
          if (this.elSeries.add(k2), k2.attr("fill-rule", "evenodd"), l2.count > 0 && "rangeArea" !== e2) {
            var A2 = n2.renderPaths(w2);
            A2.node.setAttribute("stroke-dasharray", l2.dashArray), l2.strokeWidth && A2.node.setAttribute("stroke-width", l2.strokeWidth), this.elSeries.add(A2), A2.attr("clip-path", "url(#forecastMask".concat(r2.globals.cuid, ")")), k2.attr("clip-path", "url(#nonForecastMask".concat(r2.globals.cuid, ")"));
          }
        }
      }
    }
  }, {
    key: "_iterateOverDataPoints",
    value: function(t3) {
      var e2, i2, a2 = this, s2 = t3.type, r2 = t3.series, n2 = t3.iterations, o2 = t3.realIndex, l2 = t3.translationsIndex, h2 = t3.i, c2 = t3.x, d2 = t3.y, u2 = t3.pX, g2 = t3.pY, p2 = t3.pathsFrom, f2 = t3.linePaths, x2 = t3.areaPaths, b2 = t3.seriesIndex, m2 = t3.lineYPosition, y2 = t3.xArrj, w2 = t3.yArrj, k2 = t3.y2Arrj, A2 = t3.isRangeStart, C2 = t3.seriesRangeEnd, S2 = this.w, L2 = new Mi(this.ctx), M2 = this.yRatio, P2 = p2.prevY, I2 = p2.linePath, T2 = p2.areaPath, z2 = p2.pathFromLine, X2 = p2.pathFromArea, R2 = v.isNumber(S2.globals.minYArr[o2]) ? S2.globals.minYArr[o2] : S2.globals.minY;
      n2 || (n2 = S2.globals.dataPoints > 1 ? S2.globals.dataPoints - 1 : S2.globals.dataPoints);
      var E2 = function(t4, e3) {
        return e3 - t4 / M2[l2] + 2 * (a2.isReversed ? t4 / M2[l2] : 0);
      }, Y2 = d2, H2 = S2.config.chart.stacked && !S2.globals.comboCharts || S2.config.chart.stacked && S2.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || "bar" === (null === (e2 = this.w.config.series[o2]) || void 0 === e2 ? void 0 : e2.type) || "column" === (null === (i2 = this.w.config.series[o2]) || void 0 === i2 ? void 0 : i2.type)), O2 = S2.config.stroke.curve;
      Array.isArray(O2) && (O2 = Array.isArray(b2) ? O2[b2[h2]] : O2[h2]);
      for (var F2, D2 = 0, _2 = 0; _2 < n2 && 0 !== r2[h2].length; _2++) {
        var N2 = void 0 === r2[h2][_2 + 1] || null === r2[h2][_2 + 1];
        if (S2.globals.isXNumeric) {
          var W2 = S2.globals.seriesX[o2][_2 + 1];
          void 0 === S2.globals.seriesX[o2][_2 + 1] && (W2 = S2.globals.seriesX[o2][n2 - 1]), c2 = (W2 - S2.globals.minX) / this.xRatio;
        } else c2 += this.xDivision;
        if (H2) {
          if (h2 > 0 && S2.globals.collapsedSeries.length < S2.config.series.length - 1) {
            m2 = this.prevSeriesY[function(t4) {
              for (var e3 = t4; e3 > 0; e3--) {
                if (!(S2.globals.collapsedSeriesIndices.indexOf((null == b2 ? void 0 : b2[e3]) || e3) > -1)) return e3;
                e3--;
              }
              return 0;
            }(h2 - 1)][_2 + 1];
          } else m2 = this.zeroY;
        } else m2 = this.zeroY;
        N2 ? d2 = E2(R2, m2) : (d2 = E2(r2[h2][_2 + 1], m2), "rangeArea" === s2 && (Y2 = E2(C2[h2][_2 + 1], m2))), y2.push(null === r2[h2][_2 + 1] ? null : c2), !N2 || "smooth" !== S2.config.stroke.curve && "monotoneCubic" !== S2.config.stroke.curve ? (w2.push(d2), k2.push(Y2)) : (w2.push(null), k2.push(null));
        var B2 = this.lineHelpers.calculatePoints({
          series: r2,
          x: c2,
          y: d2,
          realIndex: o2,
          i: h2,
          j: _2,
          prevY: P2
        }), G2 = this._createPaths({
          type: s2,
          series: r2,
          i: h2,
          realIndex: o2,
          j: _2,
          x: c2,
          y: d2,
          y2: Y2,
          xArrj: y2,
          yArrj: w2,
          y2Arrj: k2,
          pX: u2,
          pY: g2,
          pathState: D2,
          segmentStartX: F2,
          linePath: I2,
          areaPath: T2,
          linePaths: f2,
          areaPaths: x2,
          curve: O2,
          isRangeStart: A2
        });
        x2 = G2.areaPaths, f2 = G2.linePaths, u2 = G2.pX, g2 = G2.pY, D2 = G2.pathState, F2 = G2.segmentStartX, T2 = G2.areaPath, I2 = G2.linePath, !this.appendPathFrom || S2.globals.hasNullValues || "monotoneCubic" === O2 && "rangeArea" === s2 || (z2 += L2.line(c2, this.areaBottomY), X2 += L2.line(c2, this.areaBottomY)), this.handleNullDataPoints(r2, B2, h2, _2, o2), this._handleMarkersAndLabels({
          type: s2,
          pointsPos: B2,
          i: h2,
          j: _2,
          realIndex: o2,
          isRangeStart: A2
        });
      }
      return {
        yArrj: w2,
        xArrj: y2,
        pathFromArea: X2,
        areaPaths: x2,
        pathFromLine: z2,
        linePaths: f2,
        linePath: I2,
        areaPath: T2
      };
    }
  }, {
    key: "_handleMarkersAndLabels",
    value: function(t3) {
      var e2 = t3.type, i2 = t3.pointsPos, a2 = t3.isRangeStart, s2 = t3.i, r2 = t3.j, n2 = t3.realIndex, o2 = this.w, l2 = new qi(this.ctx);
      if (this.pointsChart) this.scatter.draw(this.elSeries, r2, {
        realIndex: n2,
        pointsPos: i2,
        zRatio: this.zRatio,
        elParent: this.elPointsMain
      });
      else {
        o2.globals.series[s2].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden");
        var h2 = this.markers.plotChartMarkers({
          pointsPos: i2,
          seriesIndex: n2,
          j: r2 + 1
        });
        null !== h2 && this.elPointsMain.add(h2);
      }
      var c2 = l2.drawDataLabel({
        type: e2,
        isRangeStart: a2,
        pos: i2,
        i: n2,
        j: r2 + 1
      });
      null !== c2 && this.elDataLabelsWrap.add(c2);
    }
  }, {
    key: "_createPaths",
    value: function(t3) {
      var e2 = t3.type, i2 = t3.series, a2 = t3.i;
      t3.realIndex;
      var s2, r2 = t3.j, n2 = t3.x, o2 = t3.y, l2 = t3.xArrj, h2 = t3.yArrj, c2 = t3.y2, d2 = t3.y2Arrj, u2 = t3.pX, g2 = t3.pY, p2 = t3.pathState, f2 = t3.segmentStartX, x2 = t3.linePath, b2 = t3.areaPath, m2 = t3.linePaths, v2 = t3.areaPaths, y2 = t3.curve, w2 = t3.isRangeStart, k2 = new Mi(this.ctx), A2 = this.areaBottomY, C2 = "rangeArea" === e2, S2 = "rangeArea" === e2 && w2;
      switch (y2) {
        case "monotoneCubic":
          var L2 = w2 ? h2 : d2;
          switch (p2) {
            case 0:
              if (null === L2[r2 + 1]) break;
              p2 = 1;
            case 1:
              if (!(C2 ? l2.length === i2[a2].length : r2 === i2[a2].length - 2)) break;
            case 2:
              var M2 = w2 ? l2 : l2.slice().reverse(), P2 = w2 ? L2 : L2.slice().reverse(), I2 = (s2 = P2, M2.map(function(t4, e3) {
                return [t4, s2[e3]];
              }).filter(function(t4) {
                return null !== t4[1];
              })), T2 = I2.length > 1 ? _a(I2) : I2, z2 = [];
              C2 && (S2 ? v2 = I2 : z2 = v2.reverse());
              var X2 = 0, R2 = 0;
              if (function(t4, e3) {
                for (var i3 = function(t5) {
                  var e4 = [], i4 = 0;
                  return t5.forEach(function(t6) {
                    null !== t6 ? i4++ : i4 > 0 && (e4.push(i4), i4 = 0);
                  }), i4 > 0 && e4.push(i4), e4;
                }(t4), a3 = [], s3 = 0, r3 = 0; s3 < i3.length; r3 += i3[s3++]) a3[s3] = Na(e3, r3, r3 + i3[s3]);
                return a3;
              }(P2, T2).forEach(function(t4) {
                X2++;
                var e3 = function(t5) {
                  for (var e4 = "", i4 = 0; i4 < t5.length; i4++) {
                    var a4 = t5[i4], s3 = a4.length;
                    s3 > 4 ? (e4 += "C".concat(a4[0], ", ").concat(a4[1]), e4 += ", ".concat(a4[2], ", ").concat(a4[3]), e4 += ", ".concat(a4[4], ", ").concat(a4[5])) : s3 > 2 && (e4 += "S".concat(a4[0], ", ").concat(a4[1]), e4 += ", ".concat(a4[2], ", ").concat(a4[3]));
                  }
                  return e4;
                }(t4), i3 = R2, a3 = (R2 += t4.length) - 1;
                S2 ? x2 = k2.move(I2[i3][0], I2[i3][1]) + e3 : C2 ? x2 = k2.move(z2[i3][0], z2[i3][1]) + k2.line(I2[i3][0], I2[i3][1]) + e3 + k2.line(z2[a3][0], z2[a3][1]) : (x2 = k2.move(I2[i3][0], I2[i3][1]) + e3, b2 = x2 + k2.line(I2[a3][0], A2) + k2.line(I2[i3][0], A2) + "z", v2.push(b2)), m2.push(x2);
              }), C2 && X2 > 1 && !S2) {
                var E2 = m2.slice(X2).reverse();
                m2.splice(X2), E2.forEach(function(t4) {
                  return m2.push(t4);
                });
              }
              p2 = 0;
          }
          break;
        case "smooth":
          var Y2 = 0.35 * (n2 - u2);
          if (null === i2[a2][r2]) p2 = 0;
          else switch (p2) {
            case 0:
              if (f2 = u2, x2 = S2 ? k2.move(u2, d2[r2]) + k2.line(u2, g2) : k2.move(u2, g2), b2 = k2.move(u2, g2), null === i2[a2][r2 + 1] || void 0 === i2[a2][r2 + 1]) {
                m2.push(x2), v2.push(b2);
                break;
              }
              if (p2 = 1, r2 < i2[a2].length - 2) {
                var H2 = k2.curve(u2 + Y2, g2, n2 - Y2, o2, n2, o2);
                x2 += H2, b2 += H2;
                break;
              }
            case 1:
              if (null === i2[a2][r2 + 1]) x2 += S2 ? k2.line(u2, c2) : k2.move(u2, g2), b2 += k2.line(u2, A2) + k2.line(f2, A2) + "z", m2.push(x2), v2.push(b2), p2 = -1;
              else {
                var O2 = k2.curve(u2 + Y2, g2, n2 - Y2, o2, n2, o2);
                x2 += O2, b2 += O2, r2 >= i2[a2].length - 2 && (S2 && (x2 += k2.curve(n2, o2, n2, o2, n2, c2) + k2.move(n2, c2)), b2 += k2.curve(n2, o2, n2, o2, n2, A2) + k2.line(f2, A2) + "z", m2.push(x2), v2.push(b2), p2 = -1);
              }
          }
          u2 = n2, g2 = o2;
          break;
        default:
          var F2 = function(t4, e3, i3) {
            var a3 = [];
            switch (t4) {
              case "stepline":
                a3 = k2.line(e3, null, "H") + k2.line(null, i3, "V");
                break;
              case "linestep":
                a3 = k2.line(null, i3, "V") + k2.line(e3, null, "H");
                break;
              case "straight":
                a3 = k2.line(e3, i3);
            }
            return a3;
          };
          if (null === i2[a2][r2]) p2 = 0;
          else switch (p2) {
            case 0:
              if (f2 = u2, x2 = S2 ? k2.move(u2, d2[r2]) + k2.line(u2, g2) : k2.move(u2, g2), b2 = k2.move(u2, g2), null === i2[a2][r2 + 1] || void 0 === i2[a2][r2 + 1]) {
                m2.push(x2), v2.push(b2);
                break;
              }
              if (p2 = 1, r2 < i2[a2].length - 2) {
                var D2 = F2(y2, n2, o2);
                x2 += D2, b2 += D2;
                break;
              }
            case 1:
              if (null === i2[a2][r2 + 1]) x2 += S2 ? k2.line(u2, c2) : k2.move(u2, g2), b2 += k2.line(u2, A2) + k2.line(f2, A2) + "z", m2.push(x2), v2.push(b2), p2 = -1;
              else {
                var _2 = F2(y2, n2, o2);
                x2 += _2, b2 += _2, r2 >= i2[a2].length - 2 && (S2 && (x2 += k2.line(n2, c2)), b2 += k2.line(n2, A2) + k2.line(f2, A2) + "z", m2.push(x2), v2.push(b2), p2 = -1);
              }
          }
          u2 = n2, g2 = o2;
      }
      return {
        linePaths: m2,
        areaPaths: v2,
        pX: u2,
        pY: g2,
        pathState: p2,
        segmentStartX: f2,
        linePath: x2,
        areaPath: b2
      };
    }
  }, {
    key: "handleNullDataPoints",
    value: function(t3, e2, i2, a2, s2) {
      var r2 = this.w;
      if (null === t3[i2][a2] && r2.config.markers.showNullDataPoints || 1 === t3[i2].length) {
        var n2 = this.strokeWidth - r2.config.markers.strokeWidth / 2;
        n2 > 0 || (n2 = 0);
        var o2 = this.markers.plotChartMarkers({
          pointsPos: e2,
          seriesIndex: s2,
          j: a2 + 1,
          pSize: n2,
          alwaysDrawMarker: true
        });
        null !== o2 && this.elPointsMain.add(o2);
      }
    }
  }]), t2;
}();
window.TreemapSquared = {}, window.TreemapSquared.generate = /* @__PURE__ */ function() {
  function t2(e3, i3, a3, s3) {
    this.xoffset = e3, this.yoffset = i3, this.height = s3, this.width = a3, this.shortestEdge = function() {
      return Math.min(this.height, this.width);
    }, this.getCoordinates = function(t3) {
      var e4, i4 = [], a4 = this.xoffset, s4 = this.yoffset, n3 = r2(t3) / this.height, o2 = r2(t3) / this.width;
      if (this.width >= this.height) for (e4 = 0; e4 < t3.length; e4++) i4.push([a4, s4, a4 + n3, s4 + t3[e4] / n3]), s4 += t3[e4] / n3;
      else for (e4 = 0; e4 < t3.length; e4++) i4.push([a4, s4, a4 + t3[e4] / o2, s4 + o2]), a4 += t3[e4] / o2;
      return i4;
    }, this.cutArea = function(e4) {
      var i4;
      if (this.width >= this.height) {
        var a4 = e4 / this.height, s4 = this.width - a4;
        i4 = new t2(this.xoffset + a4, this.yoffset, s4, this.height);
      } else {
        var r3 = e4 / this.width, n3 = this.height - r3;
        i4 = new t2(this.xoffset, this.yoffset + r3, this.width, n3);
      }
      return i4;
    };
  }
  function e2(e3, a3, s3, n3, o2) {
    n3 = void 0 === n3 ? 0 : n3, o2 = void 0 === o2 ? 0 : o2;
    var l2 = i2(function(t3, e4) {
      var i3, a4 = [], s4 = e4 / r2(t3);
      for (i3 = 0; i3 < t3.length; i3++) a4[i3] = t3[i3] * s4;
      return a4;
    }(e3, a3 * s3), [], new t2(n3, o2, a3, s3), []);
    return function(t3) {
      var e4, i3, a4 = [];
      for (e4 = 0; e4 < t3.length; e4++) for (i3 = 0; i3 < t3[e4].length; i3++) a4.push(t3[e4][i3]);
      return a4;
    }(l2);
  }
  function i2(t3, e3, s3, n3) {
    var o2, l2, h2;
    if (0 !== t3.length) return o2 = s3.shortestEdge(), function(t4, e4, i3) {
      var s4;
      if (0 === t4.length) return true;
      (s4 = t4.slice()).push(e4);
      var r3 = a2(t4, i3), n4 = a2(s4, i3);
      return r3 >= n4;
    }(e3, l2 = t3[0], o2) ? (e3.push(l2), i2(t3.slice(1), e3, s3, n3)) : (h2 = s3.cutArea(r2(e3), n3), n3.push(s3.getCoordinates(e3)), i2(t3, [], h2, n3)), n3;
    n3.push(s3.getCoordinates(e3));
  }
  function a2(t3, e3) {
    var i3 = Math.min.apply(Math, t3), a3 = Math.max.apply(Math, t3), s3 = r2(t3);
    return Math.max(Math.pow(e3, 2) * a3 / Math.pow(s3, 2), Math.pow(s3, 2) / (Math.pow(e3, 2) * i3));
  }
  function s2(t3) {
    return t3 && t3.constructor === Array;
  }
  function r2(t3) {
    var e3, i3 = 0;
    for (e3 = 0; e3 < t3.length; e3++) i3 += t3[e3];
    return i3;
  }
  function n2(t3) {
    var e3, i3 = 0;
    if (s2(t3[0])) for (e3 = 0; e3 < t3.length; e3++) i3 += n2(t3[e3]);
    else i3 = r2(t3);
    return i3;
  }
  return function t3(i3, a3, r3, o2, l2) {
    o2 = void 0 === o2 ? 0 : o2, l2 = void 0 === l2 ? 0 : l2;
    var h2, c2, d2 = [], u2 = [];
    if (s2(i3[0])) {
      for (c2 = 0; c2 < i3.length; c2++) d2[c2] = n2(i3[c2]);
      for (h2 = e2(d2, a3, r3, o2, l2), c2 = 0; c2 < i3.length; c2++) u2.push(t3(i3[c2], h2[c2][2] - h2[c2][0], h2[c2][3] - h2[c2][1], h2[c2][0], h2[c2][1]));
    } else u2 = e2(i3, a3, r3, o2, l2);
    return u2;
  };
}();
var Ga = function() {
  function t2(e2, a2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new za(e2), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = [];
  }
  return s(t2, [{
    key: "draw",
    value: function(t3) {
      var e2 = this, i2 = this.w, a2 = new Mi(this.ctx), s2 = new ji(this.ctx), r2 = a2.group({
        class: "apexcharts-treemap"
      });
      if (i2.globals.noData) return r2;
      var n2 = [];
      return t3.forEach(function(t4) {
        var e3 = t4.map(function(t5) {
          return Math.abs(t5);
        });
        n2.push(e3);
      }), this.negRange = this.helpers.checkColorRange(), i2.config.series.forEach(function(t4, i3) {
        t4.data.forEach(function(t5) {
          Array.isArray(e2.labels[i3]) || (e2.labels[i3] = []), e2.labels[i3].push(t5.x);
        });
      }), window.TreemapSquared.generate(n2, i2.globals.gridWidth, i2.globals.gridHeight).forEach(function(n3, o2) {
        var l2 = a2.group({
          class: "apexcharts-series apexcharts-treemap-series",
          seriesName: v.escapeString(i2.globals.seriesNames[o2]),
          rel: o2 + 1,
          "data:realIndex": o2
        });
        if (i2.config.chart.dropShadow.enabled) {
          var h2 = i2.config.chart.dropShadow;
          new Li(e2.ctx).dropShadow(r2, h2, o2);
        }
        var c2 = a2.group({
          class: "apexcharts-data-labels"
        }), d2 = {
          xMin: 1 / 0,
          yMin: 1 / 0,
          xMax: -1 / 0,
          yMax: -1 / 0
        };
        n3.forEach(function(r3, n4) {
          var h3 = r3[0], c3 = r3[1], u3 = r3[2], g3 = r3[3];
          d2.xMin = Math.min(d2.xMin, h3), d2.yMin = Math.min(d2.yMin, c3), d2.xMax = Math.max(d2.xMax, u3), d2.yMax = Math.max(d2.yMax, g3);
          var p3 = e2.helpers.getShadeColor(i2.config.chart.type, o2, n4, e2.negRange), f3 = p3.color, x3 = s2.fillPath({
            color: f3,
            seriesNumber: o2,
            dataPointIndex: n4
          }), b3 = a2.drawRect(h3, c3, u3 - h3, g3 - c3, i2.config.plotOptions.treemap.borderRadius, "#fff", 1, e2.strokeWidth, i2.config.plotOptions.treemap.useFillColorAsStroke ? f3 : i2.globals.stroke.colors[o2]);
          b3.attr({
            cx: h3,
            cy: c3,
            index: o2,
            i: o2,
            j: n4,
            width: u3 - h3,
            height: g3 - c3,
            fill: x3
          }), b3.node.classList.add("apexcharts-treemap-rect"), e2.helpers.addListeners(b3);
          var m3 = {
            x: h3 + (u3 - h3) / 2,
            y: c3 + (g3 - c3) / 2,
            width: 0,
            height: 0
          }, v2 = {
            x: h3,
            y: c3,
            width: u3 - h3,
            height: g3 - c3
          };
          if (i2.config.chart.animations.enabled && !i2.globals.dataChanged) {
            var y3 = 1;
            i2.globals.resized || (y3 = i2.config.chart.animations.speed), e2.animateTreemap(b3, m3, v2, y3);
          }
          if (i2.globals.dataChanged) {
            var w3 = 1;
            e2.dynamicAnim.enabled && i2.globals.shouldAnimate && (w3 = e2.dynamicAnim.speed, i2.globals.previousPaths[o2] && i2.globals.previousPaths[o2][n4] && i2.globals.previousPaths[o2][n4].rect && (m3 = i2.globals.previousPaths[o2][n4].rect), e2.animateTreemap(b3, m3, v2, w3));
          }
          var k3 = e2.getFontSize(r3), A3 = i2.config.dataLabels.formatter(e2.labels[o2][n4], {
            value: i2.globals.series[o2][n4],
            seriesIndex: o2,
            dataPointIndex: n4,
            w: i2
          });
          "truncate" === i2.config.plotOptions.treemap.dataLabels.format && (k3 = parseInt(i2.config.dataLabels.style.fontSize, 10), A3 = e2.truncateLabels(A3, k3, h3, c3, u3, g3));
          var C3 = null;
          i2.globals.series[o2][n4] && (C3 = e2.helpers.calculateDataLabels({
            text: A3,
            x: (h3 + u3) / 2,
            y: (c3 + g3) / 2 + e2.strokeWidth / 2 + k3 / 3,
            i: o2,
            j: n4,
            colorProps: p3,
            fontSize: k3,
            series: t3
          })), i2.config.dataLabels.enabled && C3 && e2.rotateToFitLabel(C3, k3, A3, h3, c3, u3, g3), l2.add(b3), null !== C3 && l2.add(C3);
        });
        var u2 = i2.config.plotOptions.treemap.seriesTitle;
        if (i2.config.series.length > 1 && u2 && u2.show) {
          var g2 = i2.config.series[o2].name || "";
          if (g2 && d2.xMin < 1 / 0 && d2.yMin < 1 / 0) {
            var p2 = u2.offsetX, f2 = u2.offsetY, x2 = u2.borderColor, b2 = u2.borderWidth, m2 = u2.borderRadius, y2 = u2.style, w2 = y2.color || i2.config.chart.foreColor, k2 = {
              left: y2.padding.left,
              right: y2.padding.right,
              top: y2.padding.top,
              bottom: y2.padding.bottom
            }, A2 = a2.getTextRects(g2, y2.fontSize, y2.fontFamily), C2 = A2.width + k2.left + k2.right, S2 = A2.height + k2.top + k2.bottom, L2 = d2.xMin + (p2 || 0), M2 = d2.yMin + (f2 || 0), P2 = a2.drawRect(L2, M2, C2, S2, m2, y2.background, 1, b2, x2), I2 = a2.drawText({
              x: L2 + k2.left,
              y: M2 + k2.top + 0.75 * A2.height,
              text: g2,
              fontSize: y2.fontSize,
              fontFamily: y2.fontFamily,
              fontWeight: y2.fontWeight,
              foreColor: w2,
              cssClass: y2.cssClass || ""
            });
            l2.add(P2), l2.add(I2);
          }
        }
        l2.add(c2), r2.add(l2);
      }), r2;
    }
  }, {
    key: "getFontSize",
    value: function(t3) {
      var e2 = this.w;
      var i2 = function t4(e3) {
        var i3, a2 = 0;
        if (Array.isArray(e3[0])) for (i3 = 0; i3 < e3.length; i3++) a2 += t4(e3[i3]);
        else for (i3 = 0; i3 < e3.length; i3++) a2 += e3[i3].length;
        return a2;
      }(this.labels) / function t4(e3) {
        var i3, a2 = 0;
        if (Array.isArray(e3[0])) for (i3 = 0; i3 < e3.length; i3++) a2 += t4(e3[i3]);
        else for (i3 = 0; i3 < e3.length; i3++) a2 += 1;
        return a2;
      }(this.labels);
      return function(t4, a2) {
        var s2 = t4 * a2, r2 = Math.pow(s2, 0.5);
        return Math.min(r2 / i2, parseInt(e2.config.dataLabels.style.fontSize, 10));
      }(t3[2] - t3[0], t3[3] - t3[1]);
    }
  }, {
    key: "rotateToFitLabel",
    value: function(t3, e2, i2, a2, s2, r2, n2) {
      var o2 = new Mi(this.ctx), l2 = o2.getTextRects(i2, e2);
      if (l2.width + this.w.config.stroke.width + 5 > r2 - a2 && l2.width <= n2 - s2) {
        var h2 = o2.rotateAroundCenter(t3.node);
        t3.node.setAttribute("transform", "rotate(-90 ".concat(h2.x, " ").concat(h2.y, ") translate(").concat(l2.height / 3, ")"));
      }
    }
  }, {
    key: "truncateLabels",
    value: function(t3, e2, i2, a2, s2, r2) {
      var n2 = new Mi(this.ctx), o2 = n2.getTextRects(t3, e2).width + this.w.config.stroke.width + 5 > s2 - i2 && r2 - a2 > s2 - i2 ? r2 - a2 : s2 - i2, l2 = n2.getTextBasedOnMaxWidth({
        text: t3,
        maxWidth: o2,
        fontSize: e2
      });
      return t3.length !== l2.length && o2 / e2 < 5 ? "" : l2;
    }
  }, {
    key: "animateTreemap",
    value: function(t3, e2, i2, a2) {
      var s2 = new y(this.ctx);
      s2.animateRect(t3, e2, i2, a2, function() {
        s2.animationCompleted(t3);
      });
    }
  }]), t2;
}();
var ja = 86400;
var Va = 10 / ja;
var Ua = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC;
  }
  return s(t2, [{
    key: "calculateTimeScaleTicks",
    value: function(t3, e2) {
      var i2 = this, a2 = this.w;
      if (a2.globals.allSeriesCollapsed) return a2.globals.labels = [], a2.globals.timescaleLabels = [], [];
      var s2 = new zi(this.ctx), r2 = (e2 - t3) / 864e5;
      this.determineInterval(r2), a2.globals.disableZoomIn = false, a2.globals.disableZoomOut = false, r2 < Va ? a2.globals.disableZoomIn = true : r2 > 5e4 && (a2.globals.disableZoomOut = true);
      var n2 = s2.getTimeUnitsfromTimestamp(t3, e2, this.utc), o2 = a2.globals.gridWidth / r2, l2 = o2 / 24, h2 = l2 / 60, c2 = h2 / 60, d2 = Math.floor(24 * r2), g2 = Math.floor(1440 * r2), p2 = Math.floor(r2 * ja), f2 = Math.floor(r2), x2 = Math.floor(r2 / 30), b2 = Math.floor(r2 / 365), m2 = {
        minMillisecond: n2.minMillisecond,
        minSecond: n2.minSecond,
        minMinute: n2.minMinute,
        minHour: n2.minHour,
        minDate: n2.minDate,
        minMonth: n2.minMonth,
        minYear: n2.minYear
      }, v2 = {
        firstVal: m2,
        currentMillisecond: m2.minMillisecond,
        currentSecond: m2.minSecond,
        currentMinute: m2.minMinute,
        currentHour: m2.minHour,
        currentMonthDate: m2.minDate,
        currentDate: m2.minDate,
        currentMonth: m2.minMonth,
        currentYear: m2.minYear,
        daysWidthOnXAxis: o2,
        hoursWidthOnXAxis: l2,
        minutesWidthOnXAxis: h2,
        secondsWidthOnXAxis: c2,
        numberOfSeconds: p2,
        numberOfMinutes: g2,
        numberOfHours: d2,
        numberOfDays: f2,
        numberOfMonths: x2,
        numberOfYears: b2
      };
      switch (this.tickInterval) {
        case "years":
          this.generateYearScale(v2);
          break;
        case "months":
        case "half_year":
          this.generateMonthScale(v2);
          break;
        case "months_days":
        case "months_fortnight":
        case "days":
        case "week_days":
          this.generateDayScale(v2);
          break;
        case "hours":
          this.generateHourScale(v2);
          break;
        case "minutes_fives":
        case "minutes":
          this.generateMinuteScale(v2);
          break;
        case "seconds_tens":
        case "seconds_fives":
        case "seconds":
          this.generateSecondScale(v2);
      }
      var y2 = this.timeScaleArray.map(function(t4) {
        var e3 = {
          position: t4.position,
          unit: t4.unit,
          year: t4.year,
          day: t4.day ? t4.day : 1,
          hour: t4.hour ? t4.hour : 0,
          month: t4.month + 1
        };
        return "month" === t4.unit ? u(u({}, e3), {}, {
          day: 1,
          value: t4.value + 1
        }) : "day" === t4.unit || "hour" === t4.unit ? u(u({}, e3), {}, {
          value: t4.value
        }) : "minute" === t4.unit ? u(u({}, e3), {}, {
          value: t4.value,
          minute: t4.value
        }) : "second" === t4.unit ? u(u({}, e3), {}, {
          value: t4.value,
          minute: t4.minute,
          second: t4.second
        }) : t4;
      });
      return y2.filter(function(t4) {
        var e3 = 1, s3 = Math.ceil(a2.globals.gridWidth / 120), r3 = t4.value;
        void 0 !== a2.config.xaxis.tickAmount && (s3 = a2.config.xaxis.tickAmount), y2.length > s3 && (e3 = Math.floor(y2.length / s3));
        var n3 = false, o3 = false;
        switch (i2.tickInterval) {
          case "years":
            "year" === t4.unit && (n3 = true);
            break;
          case "half_year":
            e3 = 7, "year" === t4.unit && (n3 = true);
            break;
          case "months":
            e3 = 1, "year" === t4.unit && (n3 = true);
            break;
          case "months_fortnight":
            e3 = 15, "year" !== t4.unit && "month" !== t4.unit || (n3 = true), 30 === r3 && (o3 = true);
            break;
          case "months_days":
            e3 = 10, "month" === t4.unit && (n3 = true), 30 === r3 && (o3 = true);
            break;
          case "week_days":
            e3 = 8, "month" === t4.unit && (n3 = true);
            break;
          case "days":
            e3 = 1, "month" === t4.unit && (n3 = true);
            break;
          case "hours":
            "day" === t4.unit && (n3 = true);
            break;
          case "minutes_fives":
          case "seconds_fives":
            r3 % 5 != 0 && (o3 = true);
            break;
          case "seconds_tens":
            r3 % 10 != 0 && (o3 = true);
        }
        if ("hours" === i2.tickInterval || "minutes_fives" === i2.tickInterval || "seconds_tens" === i2.tickInterval || "seconds_fives" === i2.tickInterval) {
          if (!o3) return true;
        } else if ((r3 % e3 == 0 || n3) && !o3) return true;
      });
    }
  }, {
    key: "recalcDimensionsBasedOnFormat",
    value: function(t3, e2) {
      var i2 = this.w, a2 = this.formatDates(t3), s2 = this.removeOverlappingTS(a2);
      i2.globals.timescaleLabels = s2.slice(), new pa(this.ctx).plotCoords();
    }
  }, {
    key: "determineInterval",
    value: function(t3) {
      var e2 = 24 * t3, i2 = 60 * e2;
      switch (true) {
        case t3 / 365 > 5:
          this.tickInterval = "years";
          break;
        case t3 > 800:
          this.tickInterval = "half_year";
          break;
        case t3 > 180:
          this.tickInterval = "months";
          break;
        case t3 > 90:
          this.tickInterval = "months_fortnight";
          break;
        case t3 > 60:
          this.tickInterval = "months_days";
          break;
        case t3 > 30:
          this.tickInterval = "week_days";
          break;
        case t3 > 2:
          this.tickInterval = "days";
          break;
        case e2 > 2.4:
          this.tickInterval = "hours";
          break;
        case i2 > 15:
          this.tickInterval = "minutes_fives";
          break;
        case i2 > 5:
          this.tickInterval = "minutes";
          break;
        case i2 > 1:
          this.tickInterval = "seconds_tens";
          break;
        case 60 * i2 > 20:
          this.tickInterval = "seconds_fives";
          break;
        default:
          this.tickInterval = "seconds";
      }
    }
  }, {
    key: "generateYearScale",
    value: function(t3) {
      var e2 = t3.firstVal, i2 = t3.currentMonth, a2 = t3.currentYear, s2 = t3.daysWidthOnXAxis, r2 = t3.numberOfYears, n2 = e2.minYear, o2 = 0, l2 = new zi(this.ctx), h2 = "year";
      if (e2.minDate > 1 || e2.minMonth > 0) {
        var c2 = l2.determineRemainingDaysOfYear(e2.minYear, e2.minMonth, e2.minDate);
        o2 = (l2.determineDaysOfYear(e2.minYear) - c2 + 1) * s2, n2 = e2.minYear + 1, this.timeScaleArray.push({
          position: o2,
          value: n2,
          unit: h2,
          year: n2,
          month: v.monthMod(i2 + 1)
        });
      } else 1 === e2.minDate && 0 === e2.minMonth && this.timeScaleArray.push({
        position: o2,
        value: n2,
        unit: h2,
        year: a2,
        month: v.monthMod(i2 + 1)
      });
      for (var d2 = n2, u2 = o2, g2 = 0; g2 < r2; g2++) d2++, u2 = l2.determineDaysOfYear(d2 - 1) * s2 + u2, this.timeScaleArray.push({
        position: u2,
        value: d2,
        unit: h2,
        year: d2,
        month: 1
      });
    }
  }, {
    key: "generateMonthScale",
    value: function(t3) {
      var e2 = t3.firstVal, i2 = t3.currentMonthDate, a2 = t3.currentMonth, s2 = t3.currentYear, r2 = t3.daysWidthOnXAxis, n2 = t3.numberOfMonths, o2 = a2, l2 = 0, h2 = new zi(this.ctx), c2 = "month", d2 = 0;
      if (e2.minDate > 1) {
        l2 = (h2.determineDaysOfMonths(a2 + 1, e2.minYear) - i2 + 1) * r2, o2 = v.monthMod(a2 + 1);
        var u2 = s2 + d2, g2 = v.monthMod(o2), p2 = o2;
        0 === o2 && (c2 = "year", p2 = u2, g2 = 1, u2 += d2 += 1), this.timeScaleArray.push({
          position: l2,
          value: p2,
          unit: c2,
          year: u2,
          month: g2
        });
      } else this.timeScaleArray.push({
        position: l2,
        value: o2,
        unit: c2,
        year: s2,
        month: v.monthMod(a2)
      });
      for (var f2 = o2 + 1, x2 = l2, b2 = 0, m2 = 1; b2 < n2; b2++, m2++) {
        0 === (f2 = v.monthMod(f2)) ? (c2 = "year", d2 += 1) : c2 = "month";
        var y2 = this._getYear(s2, f2, d2);
        x2 = h2.determineDaysOfMonths(f2, y2) * r2 + x2;
        var w2 = 0 === f2 ? y2 : f2;
        this.timeScaleArray.push({
          position: x2,
          value: w2,
          unit: c2,
          year: y2,
          month: 0 === f2 ? 1 : f2
        }), f2++;
      }
    }
  }, {
    key: "generateDayScale",
    value: function(t3) {
      var e2 = t3.firstVal, i2 = t3.currentMonth, a2 = t3.currentYear, s2 = t3.hoursWidthOnXAxis, r2 = t3.numberOfDays, n2 = new zi(this.ctx), o2 = "day", l2 = e2.minDate + 1, h2 = l2, c2 = function(t4, e3, i3) {
        return t4 > n2.determineDaysOfMonths(e3 + 1, i3) ? (h2 = 1, o2 = "month", u2 = e3 += 1, e3) : e3;
      }, d2 = (24 - e2.minHour) * s2, u2 = l2, g2 = c2(h2, i2, a2);
      0 === e2.minHour && 1 === e2.minDate ? (d2 = 0, u2 = v.monthMod(e2.minMonth), o2 = "month", h2 = e2.minDate) : 1 !== e2.minDate && 0 === e2.minHour && 0 === e2.minMinute && (d2 = 0, l2 = e2.minDate, u2 = l2, g2 = c2(h2 = l2, i2, a2), 1 !== u2 && (o2 = "day")), this.timeScaleArray.push({
        position: d2,
        value: u2,
        unit: o2,
        year: this._getYear(a2, g2, 0),
        month: v.monthMod(g2),
        day: h2
      });
      for (var p2 = d2, f2 = 0; f2 < r2; f2++) {
        o2 = "day", g2 = c2(h2 += 1, g2, this._getYear(a2, g2, 0));
        var x2 = this._getYear(a2, g2, 0);
        p2 = 24 * s2 + p2;
        var b2 = 1 === h2 ? v.monthMod(g2) : h2;
        this.timeScaleArray.push({
          position: p2,
          value: b2,
          unit: o2,
          year: x2,
          month: v.monthMod(g2),
          day: b2
        });
      }
    }
  }, {
    key: "generateHourScale",
    value: function(t3) {
      var e2 = t3.firstVal, i2 = t3.currentDate, a2 = t3.currentMonth, s2 = t3.currentYear, r2 = t3.minutesWidthOnXAxis, n2 = t3.numberOfHours, o2 = new zi(this.ctx), l2 = "hour", h2 = function(t4, e3) {
        return t4 > o2.determineDaysOfMonths(e3 + 1, s2) && (f2 = 1, e3 += 1), {
          month: e3,
          date: f2
        };
      }, c2 = function(t4, e3) {
        return t4 > o2.determineDaysOfMonths(e3 + 1, s2) ? e3 += 1 : e3;
      }, d2 = 60 - (e2.minMinute + e2.minSecond / 60), u2 = d2 * r2, g2 = e2.minHour + 1, p2 = g2;
      60 === d2 && (u2 = 0, p2 = g2 = e2.minHour);
      var f2 = i2;
      p2 >= 24 && (p2 = 0, l2 = "day", g2 = f2 += 1);
      var x2 = h2(f2, a2).month;
      x2 = c2(f2, x2), g2 > 31 && (g2 = f2 = 1), this.timeScaleArray.push({
        position: u2,
        value: g2,
        unit: l2,
        day: f2,
        hour: p2,
        year: s2,
        month: v.monthMod(x2)
      }), p2++;
      for (var b2 = u2, m2 = 0; m2 < n2; m2++) {
        if (l2 = "hour", p2 >= 24) p2 = 0, l2 = "day", x2 = h2(f2 += 1, x2).month, x2 = c2(f2, x2);
        var y2 = this._getYear(s2, x2, 0);
        b2 = 60 * r2 + b2;
        var w2 = 0 === p2 ? f2 : p2;
        this.timeScaleArray.push({
          position: b2,
          value: w2,
          unit: l2,
          hour: p2,
          day: f2,
          year: y2,
          month: v.monthMod(x2)
        }), p2++;
      }
    }
  }, {
    key: "generateMinuteScale",
    value: function(t3) {
      for (var e2 = t3.currentMillisecond, i2 = t3.currentSecond, a2 = t3.currentMinute, s2 = t3.currentHour, r2 = t3.currentDate, n2 = t3.currentMonth, o2 = t3.currentYear, l2 = t3.minutesWidthOnXAxis, h2 = t3.secondsWidthOnXAxis, c2 = t3.numberOfMinutes, d2 = a2 + 1, u2 = r2, g2 = n2, p2 = o2, f2 = s2, x2 = (60 - i2 - e2 / 1e3) * h2, b2 = 0; b2 < c2; b2++) d2 >= 60 && (d2 = 0, 24 === (f2 += 1) && (f2 = 0)), this.timeScaleArray.push({
        position: x2,
        value: d2,
        unit: "minute",
        hour: f2,
        minute: d2,
        day: u2,
        year: this._getYear(p2, g2, 0),
        month: v.monthMod(g2)
      }), x2 += l2, d2++;
    }
  }, {
    key: "generateSecondScale",
    value: function(t3) {
      for (var e2 = t3.currentMillisecond, i2 = t3.currentSecond, a2 = t3.currentMinute, s2 = t3.currentHour, r2 = t3.currentDate, n2 = t3.currentMonth, o2 = t3.currentYear, l2 = t3.secondsWidthOnXAxis, h2 = t3.numberOfSeconds, c2 = i2 + 1, d2 = a2, u2 = r2, g2 = n2, p2 = o2, f2 = s2, x2 = (1e3 - e2) / 1e3 * l2, b2 = 0; b2 < h2; b2++) c2 >= 60 && (c2 = 0, ++d2 >= 60 && (d2 = 0, 24 === ++f2 && (f2 = 0))), this.timeScaleArray.push({
        position: x2,
        value: c2,
        unit: "second",
        hour: f2,
        minute: d2,
        second: c2,
        day: u2,
        year: this._getYear(p2, g2, 0),
        month: v.monthMod(g2)
      }), x2 += l2, c2++;
    }
  }, {
    key: "createRawDateString",
    value: function(t3, e2) {
      var i2 = t3.year;
      return 0 === t3.month && (t3.month = 1), i2 += "-" + ("0" + t3.month.toString()).slice(-2), "day" === t3.unit ? i2 += "day" === t3.unit ? "-" + ("0" + e2).slice(-2) : "-01" : i2 += "-" + ("0" + (t3.day ? t3.day : "1")).slice(-2), "hour" === t3.unit ? i2 += "hour" === t3.unit ? "T" + ("0" + e2).slice(-2) : "T00" : i2 += "T" + ("0" + (t3.hour ? t3.hour : "0")).slice(-2), "minute" === t3.unit ? i2 += ":" + ("0" + e2).slice(-2) : i2 += ":" + (t3.minute ? ("0" + t3.minute).slice(-2) : "00"), "second" === t3.unit ? i2 += ":" + ("0" + e2).slice(-2) : i2 += ":00", this.utc && (i2 += ".000Z"), i2;
    }
  }, {
    key: "formatDates",
    value: function(t3) {
      var e2 = this, i2 = this.w;
      return t3.map(function(t4) {
        var a2 = t4.value.toString(), s2 = new zi(e2.ctx), r2 = e2.createRawDateString(t4, a2), n2 = s2.getDate(s2.parseDate(r2));
        if (e2.utc || (n2 = s2.getDate(s2.parseDateWithTimezone(r2))), void 0 === i2.config.xaxis.labels.format) {
          var o2 = "dd MMM", l2 = i2.config.xaxis.labels.datetimeFormatter;
          "year" === t4.unit && (o2 = l2.year), "month" === t4.unit && (o2 = l2.month), "day" === t4.unit && (o2 = l2.day), "hour" === t4.unit && (o2 = l2.hour), "minute" === t4.unit && (o2 = l2.minute), "second" === t4.unit && (o2 = l2.second), a2 = s2.formatDate(n2, o2);
        } else a2 = s2.formatDate(n2, i2.config.xaxis.labels.format);
        return {
          dateString: r2,
          position: t4.position,
          value: a2,
          unit: t4.unit,
          year: t4.year,
          month: t4.month
        };
      });
    }
  }, {
    key: "removeOverlappingTS",
    value: function(t3) {
      var e2, i2 = this, a2 = new Mi(this.ctx), s2 = false;
      t3.length > 0 && t3[0].value && t3.every(function(e3) {
        return e3.value.length === t3[0].value.length;
      }) && (s2 = true, e2 = a2.getTextRects(t3[0].value).width);
      var r2 = 0, n2 = t3.map(function(n3, o2) {
        if (o2 > 0 && i2.w.config.xaxis.labels.hideOverlappingLabels) {
          var l2 = s2 ? e2 : a2.getTextRects(t3[r2].value).width, h2 = t3[r2].position;
          return n3.position > h2 + l2 + 10 ? (r2 = o2, n3) : null;
        }
        return n3;
      });
      return n2 = n2.filter(function(t4) {
        return null !== t4;
      });
    }
  }, {
    key: "_getYear",
    value: function(t3, e2, i2) {
      return t3 + Math.floor(e2 / 12) + i2;
    }
  }]), t2;
}();
var qa = function() {
  function t2(e2, a2) {
    i(this, t2), this.ctx = a2, this.w = a2.w, this.el = e2;
  }
  return s(t2, [{
    key: "setupElements",
    value: function() {
      var t3 = this.w, e2 = t3.globals, i2 = t3.config, a2 = i2.chart.type;
      e2.axisCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].includes(a2), e2.xyCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble"].includes(a2), e2.isBarHorizontal = ["bar", "rangeBar", "boxPlot"].includes(a2) && i2.plotOptions.bar.horizontal, e2.chartClass = ".apexcharts".concat(e2.chartID), e2.dom.baseEl = this.el, e2.dom.elWrap = document.createElement("div"), Mi.setAttrs(e2.dom.elWrap, {
        id: e2.chartClass.substring(1),
        class: "apexcharts-canvas ".concat(e2.chartClass.substring(1))
      }), this.el.appendChild(e2.dom.elWrap), e2.dom.Paper = window.SVG().addTo(e2.dom.elWrap), e2.dom.Paper.attr({
        class: "apexcharts-svg",
        "xmlns:data": "ApexChartsNS",
        transform: "translate(".concat(i2.chart.offsetX, ", ").concat(i2.chart.offsetY, ")")
      }), e2.dom.Paper.node.style.background = "dark" !== i2.theme.mode || i2.chart.background ? "light" !== i2.theme.mode || i2.chart.background ? i2.chart.background : "#fff" : "#424242", this.setSVGDimensions(), e2.dom.elLegendForeign = document.createElementNS(e2.SVGNS, "foreignObject"), Mi.setAttrs(e2.dom.elLegendForeign, {
        x: 0,
        y: 0,
        width: e2.svgWidth,
        height: e2.svgHeight
      }), e2.dom.elLegendWrap = document.createElement("div"), e2.dom.elLegendWrap.classList.add("apexcharts-legend"), e2.dom.elWrap.appendChild(e2.dom.elLegendWrap), e2.dom.Paper.node.appendChild(e2.dom.elLegendForeign), e2.dom.elGraphical = e2.dom.Paper.group().attr({
        class: "apexcharts-inner apexcharts-graphical"
      }), e2.dom.elDefs = e2.dom.Paper.defs(), e2.dom.Paper.add(e2.dom.elGraphical), e2.dom.elGraphical.add(e2.dom.elDefs);
    }
  }, {
    key: "plotChartType",
    value: function(t3, e2) {
      var i2 = this.w, a2 = this.ctx, s2 = i2.config, r2 = i2.globals, n2 = {
        line: {
          series: [],
          i: []
        },
        area: {
          series: [],
          i: []
        },
        scatter: {
          series: [],
          i: []
        },
        bubble: {
          series: [],
          i: []
        },
        bar: {
          series: [],
          i: []
        },
        candlestick: {
          series: [],
          i: []
        },
        boxPlot: {
          series: [],
          i: []
        },
        rangeBar: {
          series: [],
          i: []
        },
        rangeArea: {
          series: [],
          seriesRangeEnd: [],
          i: []
        }
      }, o2 = s2.chart.type || "line", l2 = null, h2 = 0;
      r2.series.forEach(function(e3, a3) {
        var s3 = "column" === t3[a3].type ? "bar" : t3[a3].type || ("column" === o2 ? "bar" : o2);
        n2[s3] ? ("rangeArea" === s3 ? (n2[s3].series.push(r2.seriesRangeStart[a3]), n2[s3].seriesRangeEnd.push(r2.seriesRangeEnd[a3])) : n2[s3].series.push(e3), n2[s3].i.push(a3), "bar" === s3 && (i2.globals.columnSeries = n2.bar)) : ["heatmap", "treemap", "pie", "donut", "polarArea", "radialBar", "radar"].includes(s3) ? l2 = s3 : console.warn("You have specified an unrecognized series type (".concat(s3, ").")), o2 !== s3 && "scatter" !== s3 && h2++;
      }), h2 > 0 && (l2 && console.warn("Chart or series type ".concat(l2, " cannot appear with other chart or series types.")), n2.bar.series.length > 0 && s2.plotOptions.bar.horizontal && (h2 -= n2.bar.series.length, n2.bar = {
        series: [],
        i: []
      }, i2.globals.columnSeries = {
        series: [],
        i: []
      }, console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"))), r2.comboCharts || (r2.comboCharts = h2 > 0);
      var c2 = new Ba(a2, e2), d2 = new Ta(a2, e2);
      a2.pie = new Ea(a2);
      var u2 = new Ha(a2);
      a2.rangeBar = new Oa(a2, e2);
      var g2 = new Ya(a2), p2 = [];
      if (r2.comboCharts) {
        var x2, b2, m2 = new Pi(a2);
        if (n2.area.series.length > 0) (x2 = p2).push.apply(x2, f(m2.drawSeriesByGroup(n2.area, r2.areaGroups, "area", c2)));
        if (n2.bar.series.length > 0) if (s2.chart.stacked) {
          var v2 = new Ia(a2, e2);
          p2.push(v2.draw(n2.bar.series, n2.bar.i));
        } else a2.bar = new Pa(a2, e2), p2.push(a2.bar.draw(n2.bar.series, n2.bar.i));
        if (n2.rangeArea.series.length > 0 && p2.push(c2.draw(n2.rangeArea.series, "rangeArea", n2.rangeArea.i, n2.rangeArea.seriesRangeEnd)), n2.line.series.length > 0) (b2 = p2).push.apply(b2, f(m2.drawSeriesByGroup(n2.line, r2.lineGroups, "line", c2)));
        if (n2.candlestick.series.length > 0 && p2.push(d2.draw(n2.candlestick.series, "candlestick", n2.candlestick.i)), n2.boxPlot.series.length > 0 && p2.push(d2.draw(n2.boxPlot.series, "boxPlot", n2.boxPlot.i)), n2.rangeBar.series.length > 0 && p2.push(a2.rangeBar.draw(n2.rangeBar.series, n2.rangeBar.i)), n2.scatter.series.length > 0) {
          var y2 = new Ba(a2, e2, true);
          p2.push(y2.draw(n2.scatter.series, "scatter", n2.scatter.i));
        }
        if (n2.bubble.series.length > 0) {
          var w2 = new Ba(a2, e2, true);
          p2.push(w2.draw(n2.bubble.series, "bubble", n2.bubble.i));
        }
      } else switch (s2.chart.type) {
        case "line":
          p2 = c2.draw(r2.series, "line");
          break;
        case "area":
          p2 = c2.draw(r2.series, "area");
          break;
        case "bar":
          if (s2.chart.stacked) p2 = new Ia(a2, e2).draw(r2.series);
          else a2.bar = new Pa(a2, e2), p2 = a2.bar.draw(r2.series);
          break;
        case "candlestick":
          p2 = new Ta(a2, e2).draw(r2.series, "candlestick");
          break;
        case "boxPlot":
          p2 = new Ta(a2, e2).draw(r2.series, s2.chart.type);
          break;
        case "rangeBar":
          p2 = a2.rangeBar.draw(r2.series);
          break;
        case "rangeArea":
          p2 = c2.draw(r2.seriesRangeStart, "rangeArea", void 0, r2.seriesRangeEnd);
          break;
        case "heatmap":
          p2 = new Xa(a2, e2).draw(r2.series);
          break;
        case "treemap":
          p2 = new Ga(a2, e2).draw(r2.series);
          break;
        case "pie":
        case "donut":
        case "polarArea":
          p2 = a2.pie.draw(r2.series);
          break;
        case "radialBar":
          p2 = u2.draw(r2.series);
          break;
        case "radar":
          p2 = g2.draw(r2.series);
          break;
        default:
          p2 = c2.draw(r2.series);
      }
      return p2;
    }
  }, {
    key: "setSVGDimensions",
    value: function() {
      var t3 = this.w, e2 = t3.globals, i2 = t3.config;
      i2.chart.width = i2.chart.width || "100%", i2.chart.height = i2.chart.height || "auto", e2.svgWidth = i2.chart.width, e2.svgHeight = i2.chart.height;
      var a2 = v.getDimensions(this.el), s2 = i2.chart.width.toString().split(/[0-9]+/g).pop();
      "%" === s2 ? v.isNumber(a2[0]) && (0 === a2[0].width && (a2 = v.getDimensions(this.el.parentNode)), e2.svgWidth = a2[0] * parseInt(i2.chart.width, 10) / 100) : "px" !== s2 && "" !== s2 || (e2.svgWidth = parseInt(i2.chart.width, 10));
      var r2 = String(i2.chart.height).toString().split(/[0-9]+/g).pop();
      if ("auto" !== e2.svgHeight && "" !== e2.svgHeight) {
        if ("%" === r2) {
          var n2 = v.getDimensions(this.el.parentNode);
          e2.svgHeight = n2[1] * parseInt(i2.chart.height, 10) / 100;
        } else e2.svgHeight = parseInt(i2.chart.height, 10);
      } else e2.svgHeight = e2.axisCharts ? e2.svgWidth / 1.61 : e2.svgWidth / 1.2;
      if (e2.svgWidth = Math.max(e2.svgWidth, 0), e2.svgHeight = Math.max(e2.svgHeight, 0), Mi.setAttrs(e2.dom.Paper.node, {
        width: e2.svgWidth,
        height: e2.svgHeight
      }), "%" !== r2) {
        var o2 = i2.chart.sparkline.enabled ? 0 : e2.axisCharts ? i2.chart.parentHeightOffset : 0;
        e2.dom.Paper.node.parentNode.parentNode.style.minHeight = "".concat(e2.svgHeight + o2, "px");
      }
      e2.dom.elWrap.style.width = "".concat(e2.svgWidth, "px"), e2.dom.elWrap.style.height = "".concat(e2.svgHeight, "px");
    }
  }, {
    key: "shiftGraphPosition",
    value: function() {
      var t3 = this.w.globals, e2 = t3.translateY, i2 = t3.translateX;
      Mi.setAttrs(t3.dom.elGraphical.node, {
        transform: "translate(".concat(i2, ", ").concat(e2, ")")
      });
    }
  }, {
    key: "resizeNonAxisCharts",
    value: function() {
      var t3 = this.w, e2 = t3.globals, i2 = 0, a2 = t3.config.chart.sparkline.enabled ? 1 : 15;
      a2 += t3.config.grid.padding.bottom, ["top", "bottom"].includes(t3.config.legend.position) && t3.config.legend.show && !t3.config.legend.floating && (i2 = new xa(this.ctx).legendHelpers.getLegendDimensions().clwh + 7);
      var s2 = t3.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"), r2 = 2.05 * t3.globals.radialSize;
      if (s2 && !t3.config.chart.sparkline.enabled && 0 !== t3.config.plotOptions.radialBar.startAngle) {
        var n2 = v.getBoundingClientRect(s2);
        r2 = n2.bottom;
        var o2 = n2.bottom - n2.top;
        r2 = Math.max(2.05 * t3.globals.radialSize, o2);
      }
      var l2 = Math.ceil(r2 + e2.translateY + i2 + a2);
      e2.dom.elLegendForeign && e2.dom.elLegendForeign.setAttribute("height", l2), t3.config.chart.height && String(t3.config.chart.height).includes("%") || (e2.dom.elWrap.style.height = "".concat(l2, "px"), Mi.setAttrs(e2.dom.Paper.node, {
        height: l2
      }), e2.dom.Paper.node.parentNode.parentNode.style.minHeight = "".concat(l2, "px"));
    }
  }, {
    key: "coreCalculations",
    value: function() {
      new ea(this.ctx).init();
    }
  }, {
    key: "resetGlobals",
    value: function() {
      var t3 = this, e2 = function() {
        return t3.w.config.series.map(function() {
          return [];
        });
      }, i2 = new Bi(), a2 = this.w.globals;
      i2.initGlobalVars(a2), a2.seriesXvalues = e2(), a2.seriesYvalues = e2();
    }
  }, {
    key: "isMultipleY",
    value: function() {
      return !!(Array.isArray(this.w.config.yaxis) && this.w.config.yaxis.length > 1) && (this.w.globals.isMultipleYAxis = true, true);
    }
  }, {
    key: "xySettings",
    value: function() {
      var t3 = this.w, e2 = null;
      if (t3.globals.axisCharts) {
        if ("back" === t3.config.xaxis.crosshairs.position && new na(this.ctx).drawXCrosshairs(), "back" === t3.config.yaxis[0].crosshairs.position && new na(this.ctx).drawYCrosshairs(), "datetime" === t3.config.xaxis.type && void 0 === t3.config.xaxis.labels.formatter) {
          this.ctx.timeScale = new Ua(this.ctx);
          var i2 = [];
          isFinite(t3.globals.minX) && isFinite(t3.globals.maxX) && !t3.globals.isBarHorizontal ? i2 = this.ctx.timeScale.calculateTimeScaleTicks(t3.globals.minX, t3.globals.maxX) : t3.globals.isBarHorizontal && (i2 = this.ctx.timeScale.calculateTimeScaleTicks(t3.globals.minY, t3.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(i2);
        }
        e2 = new Pi(this.ctx).getCalculatedRatios();
      }
      return e2;
    }
  }, {
    key: "updateSourceChart",
    value: function(t3) {
      this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({
        chart: {
          selection: {
            xaxis: {
              min: t3.w.globals.minX,
              max: t3.w.globals.maxX
            }
          }
        }
      }, false, false);
    }
  }, {
    key: "setupBrushHandler",
    value: function() {
      var t3 = this, e2 = this.ctx, i2 = this.w;
      if (i2.config.chart.brush.enabled && "function" != typeof i2.config.chart.events.selection) {
        var a2 = Array.isArray(i2.config.chart.brush.targets) ? i2.config.chart.brush.targets : [i2.config.chart.brush.target];
        a2.forEach(function(i3) {
          var a3 = e2.constructor.getChartByID(i3);
          a3.w.globals.brushSource = t3.ctx, "function" != typeof a3.w.config.chart.events.zoomed && (a3.w.config.chart.events.zoomed = function() {
            return t3.updateSourceChart(a3);
          }), "function" != typeof a3.w.config.chart.events.scrolled && (a3.w.config.chart.events.scrolled = function() {
            return t3.updateSourceChart(a3);
          });
        }), i2.config.chart.events.selection = function(t4, i3) {
          a2.forEach(function(t5) {
            e2.constructor.getChartByID(t5).ctx.updateHelpers._updateOptions({
              xaxis: {
                min: i3.xaxis.min,
                max: i3.xaxis.max
              }
            }, false, false, false, false);
          });
        };
      }
    }
  }]), t2;
}();
var Za = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "_updateOptions",
    value: function(t3) {
      var e2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], s2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], r2 = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
      return new Promise(function(n2) {
        var o2 = [e2.ctx];
        s2 && (o2 = e2.ctx.getSyncedCharts()), e2.ctx.w.globals.isExecCalled && (o2 = [e2.ctx], e2.ctx.w.globals.isExecCalled = false), o2.forEach(function(s3, l2) {
          var h2 = s3.w;
          if (h2.globals.shouldAnimate = a2, i2 || (h2.globals.resized = true, h2.globals.dataChanged = true, a2 && s3.series.getPreviousPaths()), t3 && "object" === b(t3) && (s3.config = new Wi(t3), t3 = Pi.extendArrayProps(s3.config, t3, h2), s3.w.globals.chartID !== e2.ctx.w.globals.chartID && delete t3.series, h2.config = v.extend(h2.config, t3), r2 && (h2.globals.lastXAxis = t3.xaxis ? v.clone(t3.xaxis) : [], h2.globals.lastYAxis = t3.yaxis ? v.clone(t3.yaxis) : [], h2.globals.initialConfig = v.extend({}, h2.config), h2.globals.initialSeries = v.clone(h2.config.series), t3.series))) {
            for (var c2 = 0; c2 < h2.globals.collapsedSeriesIndices.length; c2++) {
              var d2 = h2.config.series[h2.globals.collapsedSeriesIndices[c2]];
              h2.globals.collapsedSeries[c2].data = h2.globals.axisCharts ? d2.data.slice() : d2;
            }
            for (var u2 = 0; u2 < h2.globals.ancillaryCollapsedSeriesIndices.length; u2++) {
              var g2 = h2.config.series[h2.globals.ancillaryCollapsedSeriesIndices[u2]];
              h2.globals.ancillaryCollapsedSeries[u2].data = h2.globals.axisCharts ? g2.data.slice() : g2;
            }
            s3.series.emptyCollapsedSeries(h2.config.series);
          }
          return s3.update(t3).then(function() {
            l2 === o2.length - 1 && n2(s3);
          });
        });
      });
    }
  }, {
    key: "_updateSeries",
    value: function(t3, e2) {
      var i2 = this, a2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return new Promise(function(s2) {
        var r2, n2 = i2.w;
        return n2.globals.shouldAnimate = e2, n2.globals.dataChanged = true, e2 && i2.ctx.series.getPreviousPaths(), n2.globals.axisCharts ? (0 === (r2 = t3.map(function(t4, e3) {
          return i2._extendSeries(t4, e3);
        })).length && (r2 = [{
          data: []
        }]), n2.config.series = r2) : n2.config.series = t3.slice(), a2 && (n2.globals.initialConfig.series = v.clone(n2.config.series), n2.globals.initialSeries = v.clone(n2.config.series)), i2.ctx.update().then(function() {
          s2(i2.ctx);
        });
      });
    }
  }, {
    key: "_extendSeries",
    value: function(t3, e2) {
      var i2 = this.w, a2 = i2.config.series[e2];
      return u(u({}, i2.config.series[e2]), {}, {
        name: t3.name ? t3.name : null == a2 ? void 0 : a2.name,
        color: t3.color ? t3.color : null == a2 ? void 0 : a2.color,
        type: t3.type ? t3.type : null == a2 ? void 0 : a2.type,
        group: t3.group ? t3.group : null == a2 ? void 0 : a2.group,
        hidden: void 0 !== t3.hidden ? t3.hidden : null == a2 ? void 0 : a2.hidden,
        data: t3.data ? t3.data : null == a2 ? void 0 : a2.data,
        zIndex: void 0 !== t3.zIndex ? t3.zIndex : e2
      });
    }
  }, {
    key: "toggleDataPointSelection",
    value: function(t3, e2) {
      var i2 = this.w, a2 = null, s2 = ".apexcharts-series[data\\:realIndex='".concat(t3, "']");
      return i2.globals.axisCharts ? a2 = i2.globals.dom.Paper.findOne("".concat(s2, " path[j='").concat(e2, "'], ").concat(s2, " circle[j='").concat(e2, "'], ").concat(s2, " rect[j='").concat(e2, "']")) : void 0 === e2 && (a2 = i2.globals.dom.Paper.findOne("".concat(s2, " path[j='").concat(t3, "']")), "pie" !== i2.config.chart.type && "polarArea" !== i2.config.chart.type && "donut" !== i2.config.chart.type || this.ctx.pie.pieClicked(t3)), a2 ? (new Mi(this.ctx).pathMouseDown(a2, null), a2.node ? a2.node : null) : (console.warn("toggleDataPointSelection: Element not found"), null);
    }
  }, {
    key: "forceXAxisUpdate",
    value: function(t3) {
      var e2 = this.w;
      if (["min", "max"].forEach(function(i3) {
        void 0 !== t3.xaxis[i3] && (e2.config.xaxis[i3] = t3.xaxis[i3], e2.globals.lastXAxis[i3] = t3.xaxis[i3]);
      }), t3.xaxis.categories && t3.xaxis.categories.length && (e2.config.xaxis.categories = t3.xaxis.categories), e2.config.xaxis.convertedCatToNumeric) {
        var i2 = new Ni(t3);
        t3 = i2.convertCatToNumericXaxis(t3, this.ctx);
      }
      return t3;
    }
  }, {
    key: "forceYAxisUpdate",
    value: function(t3) {
      return t3.chart && t3.chart.stacked && "100%" === t3.chart.stackType && (Array.isArray(t3.yaxis) ? t3.yaxis.forEach(function(e2, i2) {
        t3.yaxis[i2].min = 0, t3.yaxis[i2].max = 100;
      }) : (t3.yaxis.min = 0, t3.yaxis.max = 100)), t3;
    }
  }, {
    key: "revertDefaultAxisMinMax",
    value: function(t3) {
      var e2 = this, i2 = this.w, a2 = i2.globals.lastXAxis, s2 = i2.globals.lastYAxis;
      t3 && t3.xaxis && (a2 = t3.xaxis), t3 && t3.yaxis && (s2 = t3.yaxis), i2.config.xaxis.min = a2.min, i2.config.xaxis.max = a2.max;
      var r2 = function(t4) {
        void 0 !== s2[t4] && (i2.config.yaxis[t4].min = s2[t4].min, i2.config.yaxis[t4].max = s2[t4].max);
      };
      i2.config.yaxis.map(function(t4, a3) {
        i2.globals.zoomed || void 0 !== s2[a3] ? r2(a3) : void 0 !== e2.ctx.opts.yaxis[a3] && (t4.min = e2.ctx.opts.yaxis[a3].min, t4.max = e2.ctx.opts.yaxis[a3].max);
      });
    }
  }]), t2;
}();
!function() {
  function t2() {
    for (var t3 = arguments.length > 0 && arguments[0] !== h2 ? arguments[0] : [], s3 = arguments.length > 1 ? arguments[1] : h2, r2 = arguments.length > 2 ? arguments[2] : h2, n2 = arguments.length > 3 ? arguments[3] : h2, o2 = arguments.length > 4 ? arguments[4] : h2, l2 = arguments.length > 5 ? arguments[5] : h2, h2 = arguments.length > 6 ? arguments[6] : h2, c2 = t3.slice(s3, r2 || h2), d2 = n2.slice(o2, l2 || h2), u2 = 0, g2 = {
      pos: [0, 0],
      start: [0, 0]
    }, p2 = {
      pos: [0, 0],
      start: [0, 0]
    }; ; ) {
      if (c2[u2] = e2.call(g2, c2[u2]), d2[u2] = e2.call(p2, d2[u2]), c2[u2][0] != d2[u2][0] || "M" == c2[u2][0] || "A" == c2[u2][0] && (c2[u2][4] != d2[u2][4] || c2[u2][5] != d2[u2][5]) ? (Array.prototype.splice.apply(c2, [u2, 1].concat(a2.call(g2, c2[u2]))), Array.prototype.splice.apply(d2, [u2, 1].concat(a2.call(p2, d2[u2])))) : (c2[u2] = i2.call(g2, c2[u2]), d2[u2] = i2.call(p2, d2[u2])), ++u2 == c2.length && u2 == d2.length) break;
      u2 == c2.length && c2.push(["C", g2.pos[0], g2.pos[1], g2.pos[0], g2.pos[1], g2.pos[0], g2.pos[1]]), u2 == d2.length && d2.push(["C", p2.pos[0], p2.pos[1], p2.pos[0], p2.pos[1], p2.pos[0], p2.pos[1]]);
    }
    return {
      start: c2,
      dest: d2
    };
  }
  function e2(t3) {
    switch (t3[0]) {
      case "z":
      case "Z":
        t3[0] = "L", t3[1] = this.start[0], t3[2] = this.start[1];
        break;
      case "H":
        t3[0] = "L", t3[2] = this.pos[1];
        break;
      case "V":
        t3[0] = "L", t3[2] = t3[1], t3[1] = this.pos[0];
        break;
      case "T":
        t3[0] = "Q", t3[3] = t3[1], t3[4] = t3[2], t3[1] = this.reflection[1], t3[2] = this.reflection[0];
        break;
      case "S":
        t3[0] = "C", t3[6] = t3[4], t3[5] = t3[3], t3[4] = t3[2], t3[3] = t3[1], t3[2] = this.reflection[1], t3[1] = this.reflection[0];
    }
    return t3;
  }
  function i2(t3) {
    var e3 = t3.length;
    return this.pos = [t3[e3 - 2], t3[e3 - 1]], -1 != "SCQT".indexOf(t3[0]) && (this.reflection = [2 * this.pos[0] - t3[e3 - 4], 2 * this.pos[1] - t3[e3 - 3]]), t3;
  }
  function a2(t3) {
    var e3 = [t3];
    switch (t3[0]) {
      case "M":
        return this.pos = this.start = [t3[1], t3[2]], e3;
      case "L":
        t3[5] = t3[3] = t3[1], t3[6] = t3[4] = t3[2], t3[1] = this.pos[0], t3[2] = this.pos[1];
        break;
      case "Q":
        t3[6] = t3[4], t3[5] = t3[3], t3[4] = 1 * t3[4] / 3 + 2 * t3[2] / 3, t3[3] = 1 * t3[3] / 3 + 2 * t3[1] / 3, t3[2] = 1 * this.pos[1] / 3 + 2 * t3[2] / 3, t3[1] = 1 * this.pos[0] / 3 + 2 * t3[1] / 3;
        break;
      case "A":
        e3 = function(t4, e4) {
          var i3, a3, s3, r2, n2, o2, l2, h2, c2, d2, u2, g2, p2, f2, x2, b2, m2, v2, y2, w2, k2, A2, C2, S2, L2, M2, P2 = Math.abs(e4[1]), I2 = Math.abs(e4[2]), T2 = e4[3] % 360, z2 = e4[4], X2 = e4[5], R2 = e4[6], E2 = e4[7], Y2 = new bt(t4), H2 = new bt(R2, E2), O2 = [];
          if (0 === P2 || 0 === I2 || Y2.x === H2.x && Y2.y === H2.y) return [["C", Y2.x, Y2.y, H2.x, H2.y, H2.x, H2.y]];
          i3 = new bt((Y2.x - H2.x) / 2, (Y2.y - H2.y) / 2).transform(new vt().rotate(T2)), a3 = i3.x * i3.x / (P2 * P2) + i3.y * i3.y / (I2 * I2), a3 > 1 && (P2 *= a3 = Math.sqrt(a3), I2 *= a3);
          s3 = new vt().rotate(T2).scale(1 / P2, 1 / I2).rotate(-T2), Y2 = Y2.transform(s3), H2 = H2.transform(s3), r2 = [H2.x - Y2.x, H2.y - Y2.y], o2 = r2[0] * r2[0] + r2[1] * r2[1], n2 = Math.sqrt(o2), r2[0] /= n2, r2[1] /= n2, l2 = o2 < 4 ? Math.sqrt(1 - o2 / 4) : 0, z2 === X2 && (l2 *= -1);
          h2 = new bt((H2.x + Y2.x) / 2 + l2 * -r2[1], (H2.y + Y2.y) / 2 + l2 * r2[0]), c2 = new bt(Y2.x - h2.x, Y2.y - h2.y), d2 = new bt(H2.x - h2.x, H2.y - h2.y), u2 = Math.acos(c2.x / Math.sqrt(c2.x * c2.x + c2.y * c2.y)), c2.y < 0 && (u2 *= -1);
          g2 = Math.acos(d2.x / Math.sqrt(d2.x * d2.x + d2.y * d2.y)), d2.y < 0 && (g2 *= -1);
          X2 && u2 > g2 && (g2 += 2 * Math.PI);
          !X2 && u2 < g2 && (g2 -= 2 * Math.PI);
          for (f2 = Math.ceil(2 * Math.abs(u2 - g2) / Math.PI), b2 = [], m2 = u2, p2 = (g2 - u2) / f2, x2 = 4 * Math.tan(p2 / 4) / 3, k2 = 0; k2 <= f2; k2++) y2 = Math.cos(m2), v2 = Math.sin(m2), w2 = new bt(h2.x + y2, h2.y + v2), b2[k2] = [new bt(w2.x + x2 * v2, w2.y - x2 * y2), w2, new bt(w2.x - x2 * v2, w2.y + x2 * y2)], m2 += p2;
          for (b2[0][0] = b2[0][1].clone(), b2[b2.length - 1][2] = b2[b2.length - 1][1].clone(), s3 = new vt().rotate(T2).scale(P2, I2).rotate(-T2), k2 = 0, A2 = b2.length; k2 < A2; k2++) b2[k2][0] = b2[k2][0].transform(s3), b2[k2][1] = b2[k2][1].transform(s3), b2[k2][2] = b2[k2][2].transform(s3);
          for (k2 = 1, A2 = b2.length; k2 < A2; k2++) C2 = (w2 = b2[k2 - 1][2]).x, S2 = w2.y, L2 = (w2 = b2[k2][0]).x, M2 = w2.y, R2 = (w2 = b2[k2][1]).x, E2 = w2.y, O2.push(["C", C2, S2, L2, M2, R2, E2]);
          return O2;
        }(this.pos, t3), t3 = e3[0];
    }
    return t3[0] = "C", this.pos = [t3[5], t3[6]], this.reflection = [2 * t3[5] - t3[3], 2 * t3[6] - t3[4]], e3;
  }
  function s2() {
    var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e3 = arguments.length > 1 ? arguments[1] : void 0;
    if (false === e3) return false;
    for (var i3 = e3, a3 = t3.length; i3 < a3; ++i3) if ("M" == t3[i3][0]) return i3;
    return false;
  }
  Q(Ee, {
    morph: function(e3, i3, a3, r2, n2) {
      for (var o2 = this.parse(e3), l2 = this.parse(i3), h2 = 0, c2 = 0, d2 = false, u2 = false; false !== h2 || false !== c2; ) {
        var g2;
        d2 = s2(o2, false !== h2 && h2 + 1), u2 = s2(l2, false !== c2 && c2 + 1), false === h2 && (h2 = 0 == (g2 = new Ee(p2.start).bbox()).height || 0 == g2.width ? o2.push(o2[0]) - 1 : o2.push(["M", g2.x + g2.width / 2, g2.y + g2.height / 2]) - 1), false === c2 && (c2 = 0 == (g2 = new Ee(p2.dest).bbox()).height || 0 == g2.width ? l2.push(l2[0]) - 1 : l2.push(["M", g2.x + g2.width / 2, g2.y + g2.height / 2]) - 1);
        var p2 = t2(o2, h2, d2, l2, c2, u2);
        o2 = o2.slice(0, h2).concat(p2.start, false === d2 ? [] : o2.slice(d2)), l2 = l2.slice(0, c2).concat(p2.dest, false === u2 ? [] : l2.slice(u2)), h2 = false !== d2 && h2 + p2.start.length, c2 = false !== u2 && c2 + p2.dest.length;
      }
      this._array = o2, this.destination = new Ee(), this.destination._array = l2;
      var f2 = this.fromArray(o2.map(function(t3, e4) {
        var i4 = l2[e4].map(function(i5, s3) {
          return 0 === s3 ? i5 : r2.step(t3[s3], l2[e4][s3], a3, n2[e4], n2);
        });
        return i4;
      }));
      return f2;
    }
  });
}();
var $a = (t2) => (t2.changedTouches && (t2 = t2.changedTouches[0]), {
  x: t2.clientX,
  y: t2.clientY
});
var Ja = class {
  constructor(t2) {
    t2.remember("_draggable", this), this.el = t2, this.drag = this.drag.bind(this), this.startDrag = this.startDrag.bind(this), this.endDrag = this.endDrag.bind(this);
  }
  init(t2) {
    t2 ? (this.el.on("mousedown.drag", this.startDrag), this.el.on("touchstart.drag", this.startDrag, {
      passive: false
    })) : (this.el.off("mousedown.drag"), this.el.off("touchstart.drag"));
  }
  startDrag(t2) {
    const e2 = !t2.type.indexOf("mouse");
    if (e2 && 1 !== t2.which && 0 !== t2.buttons) return;
    if (this.el.dispatch("beforedrag", {
      event: t2,
      handler: this
    }).defaultPrevented) return;
    t2.preventDefault(), t2.stopPropagation(), this.init(false), this.box = this.el.bbox(), this.lastClick = this.el.point($a(t2));
    const i2 = (e2 ? "mouseup" : "touchend") + ".drag";
    zt(window, (e2 ? "mousemove" : "touchmove") + ".drag", this.drag, this, {
      passive: false
    }), zt(window, i2, this.endDrag, this, {
      passive: false
    }), this.el.fire("dragstart", {
      event: t2,
      handler: this,
      box: this.box
    });
  }
  drag(t2) {
    const {
      box: e2,
      lastClick: i2
    } = this, a2 = this.el.point($a(t2)), s2 = a2.x - i2.x, r2 = a2.y - i2.y;
    if (!s2 && !r2) return e2;
    const n2 = e2.x + s2, o2 = e2.y + r2;
    this.box = new kt(n2, o2, e2.w, e2.h), this.lastClick = a2, this.el.dispatch("dragmove", {
      event: t2,
      handler: this,
      box: this.box
    }).defaultPrevented || this.move(n2, o2);
  }
  move(t2, e2) {
    "svg" === this.el.type ? gi.prototype.move.call(this.el, t2, e2) : this.el.move(t2, e2);
  }
  endDrag(t2) {
    this.drag(t2), this.el.fire("dragend", {
      event: t2,
      handler: this,
      box: this.box
    }), Xt(window, "mousemove.drag"), Xt(window, "touchmove.drag"), Xt(window, "mouseup.drag"), Xt(window, "touchend.drag"), this.init(true);
  }
};
function Qa(t2, e2, i2, a2 = null) {
  return function(s2) {
    s2.preventDefault(), s2.stopPropagation();
    var r2 = s2.pageX || s2.touches[0].pageX, n2 = s2.pageY || s2.touches[0].pageY;
    e2.fire(t2, {
      x: r2,
      y: n2,
      event: s2,
      index: a2,
      points: i2
    });
  };
}
function Ka([t2, e2], {
  a: i2,
  b: a2,
  c: s2,
  d: r2,
  e: n2,
  f: o2
}) {
  return [t2 * i2 + e2 * s2 + n2, t2 * a2 + e2 * r2 + o2];
}
Q(Gt, {
  draggable(t2 = true) {
    return (this.remember("_draggable") || new Ja(this)).init(t2), this;
  }
});
var ts = class {
  constructor(t2) {
    this.el = t2, t2.remember("_selectHandler", this), this.selection = new gi(), this.order = ["lt", "t", "rt", "r", "rb", "b", "lb", "l", "rot"], this.mutationHandler = this.mutationHandler.bind(this);
    const e2 = F();
    this.observer = new e2.MutationObserver(this.mutationHandler);
  }
  init(t2) {
    this.createHandle = t2.createHandle || this.createHandleFn, this.createRot = t2.createRot || this.createRotFn, this.updateHandle = t2.updateHandle || this.updateHandleFn, this.updateRot = t2.updateRot || this.updateRotFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createResizeHandles(), this.updateResizeHandles(), this.createRotationHandle(), this.updateRotationHandle(), this.observer.observe(this.el.node, {
      attributes: true
    });
  }
  active(t2, e2) {
    if (!t2) return this.selection.clear().remove(), void this.observer.disconnect();
    this.init(e2);
  }
  createSelection() {
    this.selection.polygon(this.handlePoints).addClass("svg_select_shape");
  }
  updateSelection() {
    this.selection.get(0).plot(this.handlePoints);
  }
  createResizeHandles() {
    this.handlePoints.forEach((t2, e2, i2) => {
      const a2 = this.order[e2];
      this.createHandle.call(this, this.selection, t2, e2, i2, a2), this.selection.get(e2 + 1).addClass("svg_select_handle svg_select_handle_" + a2).on("mousedown.selection touchstart.selection", Qa(a2, this.el, this.handlePoints, e2));
    });
  }
  createHandleFn(t2) {
    t2.polyline();
  }
  updateHandleFn(t2, e2, i2, a2) {
    const s2 = a2.at(i2 - 1), r2 = a2[(i2 + 1) % a2.length], n2 = e2, o2 = [n2[0] - s2[0], n2[1] - s2[1]], l2 = [n2[0] - r2[0], n2[1] - r2[1]], h2 = Math.sqrt(o2[0] * o2[0] + o2[1] * o2[1]), c2 = Math.sqrt(l2[0] * l2[0] + l2[1] * l2[1]), d2 = [o2[0] / h2, o2[1] / h2], u2 = [l2[0] / c2, l2[1] / c2], g2 = [n2[0] - 10 * d2[0], n2[1] - 10 * d2[1]], p2 = [n2[0] - 10 * u2[0], n2[1] - 10 * u2[1]];
    t2.plot([g2, n2, p2]);
  }
  updateResizeHandles() {
    this.handlePoints.forEach((t2, e2, i2) => {
      const a2 = this.order[e2];
      this.updateHandle.call(this, this.selection.get(e2 + 1), t2, e2, i2, a2);
    });
  }
  createRotFn(t2) {
    t2.line(), t2.circle(5);
  }
  getPoint(t2) {
    return this.handlePoints[this.order.indexOf(t2)];
  }
  getPointHandle(t2) {
    return this.selection.get(this.order.indexOf(t2) + 1);
  }
  updateRotFn(t2, e2) {
    const i2 = this.getPoint("t");
    t2.get(0).plot(i2[0], i2[1], e2[0], e2[1]), t2.get(1).center(e2[0], e2[1]);
  }
  createRotationHandle() {
    const t2 = this.selection.group().addClass("svg_select_handle_rot").on("mousedown.selection touchstart.selection", Qa("rot", this.el, this.handlePoints));
    this.createRot.call(this, t2);
  }
  updateRotationHandle() {
    const t2 = this.selection.findOne("g.svg_select_handle_rot");
    this.updateRot(t2, this.rotationPoint, this.handlePoints);
  }
  updatePoints() {
    const t2 = this.el.bbox(), e2 = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
    this.handlePoints = this.getHandlePoints(t2).map((t3) => Ka(t3, e2)), this.rotationPoint = Ka(this.getRotationPoint(t2), e2);
  }
  getHandlePoints({
    x: t2,
    x2: e2,
    y: i2,
    y2: a2,
    cx: s2,
    cy: r2
  } = this.el.bbox()) {
    return [[t2, i2], [s2, i2], [e2, i2], [e2, r2], [e2, a2], [s2, a2], [t2, a2], [t2, r2]];
  }
  getRotationPoint({
    y: t2,
    cx: e2
  } = this.el.bbox()) {
    return [e2, t2 - 20];
  }
  mutationHandler() {
    this.updatePoints(), this.updateSelection(), this.updateResizeHandles(), this.updateRotationHandle();
  }
};
var es = (t2) => function(e2 = true, i2 = {}) {
  "object" == typeof e2 && (i2 = e2, e2 = true);
  let a2 = this.remember("_" + t2.name);
  return a2 || (e2.prototype instanceof ts ? (a2 = new e2(this), e2 = true) : a2 = new t2(this), this.remember("_" + t2.name, a2)), a2.active(e2, i2), this;
};
function is(t2, e2, i2, a2 = null) {
  return function(s2) {
    s2.preventDefault(), s2.stopPropagation();
    var r2 = s2.pageX || s2.touches[0].pageX, n2 = s2.pageY || s2.touches[0].pageY;
    e2.fire(t2, {
      x: r2,
      y: n2,
      event: s2,
      index: a2,
      points: i2
    });
  };
}
function as([t2, e2], {
  a: i2,
  b: a2,
  c: s2,
  d: r2,
  e: n2,
  f: o2
}) {
  return [t2 * i2 + e2 * s2 + n2, t2 * a2 + e2 * r2 + o2];
}
Q(Gt, {
  select: es(ts)
}), Q([Ge, je, xe], {
  pointSelect: es(class {
    constructor(t2) {
      this.el = t2, t2.remember("_pointSelectHandler", this), this.selection = new gi(), this.order = ["lt", "t", "rt", "r", "rb", "b", "lb", "l", "rot"], this.mutationHandler = this.mutationHandler.bind(this);
      const e2 = F();
      this.observer = new e2.MutationObserver(this.mutationHandler);
    }
    init(t2) {
      this.createHandle = t2.createHandle || this.createHandleFn, this.updateHandle = t2.updateHandle || this.updateHandleFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createPointHandles(), this.updatePointHandles(), this.observer.observe(this.el.node, {
        attributes: true
      });
    }
    active(t2, e2) {
      if (!t2) return this.selection.clear().remove(), void this.observer.disconnect();
      this.init(e2);
    }
    createSelection() {
      this.selection.polygon(this.points).addClass("svg_select_shape_pointSelect");
    }
    updateSelection() {
      this.selection.get(0).plot(this.points);
    }
    createPointHandles() {
      this.points.forEach((t2, e2, i2) => {
        this.createHandle.call(this, this.selection, t2, e2, i2), this.selection.get(e2 + 1).addClass("svg_select_handle_point").on("mousedown.selection touchstart.selection", Qa("point", this.el, this.points, e2));
      });
    }
    createHandleFn(t2) {
      t2.circle(5);
    }
    updateHandleFn(t2, e2) {
      t2.center(e2[0], e2[1]);
    }
    updatePointHandles() {
      this.points.forEach((t2, e2, i2) => {
        this.updateHandle.call(this, this.selection.get(e2 + 1), t2, e2, i2);
      });
    }
    updatePoints() {
      const t2 = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
      this.points = this.el.array().map((e2) => Ka(e2, t2));
    }
    mutationHandler() {
      this.updatePoints(), this.updateSelection(), this.updatePointHandles();
    }
  })
});
var ss = class {
  constructor(t2) {
    this.el = t2, t2.remember("_selectHandler", this), this.selection = new gi(), this.order = ["lt", "t", "rt", "r", "rb", "b", "lb", "l", "rot"], this.mutationHandler = this.mutationHandler.bind(this);
    const e2 = F();
    this.observer = new e2.MutationObserver(this.mutationHandler);
  }
  init(t2) {
    this.createHandle = t2.createHandle || this.createHandleFn, this.createRot = t2.createRot || this.createRotFn, this.updateHandle = t2.updateHandle || this.updateHandleFn, this.updateRot = t2.updateRot || this.updateRotFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createResizeHandles(), this.updateResizeHandles(), this.createRotationHandle(), this.updateRotationHandle(), this.observer.observe(this.el.node, {
      attributes: true
    });
  }
  active(t2, e2) {
    if (!t2) return this.selection.clear().remove(), void this.observer.disconnect();
    this.init(e2);
  }
  createSelection() {
    this.selection.polygon(this.handlePoints).addClass("svg_select_shape");
  }
  updateSelection() {
    this.selection.get(0).plot(this.handlePoints);
  }
  createResizeHandles() {
    this.handlePoints.forEach((t2, e2, i2) => {
      const a2 = this.order[e2];
      this.createHandle.call(this, this.selection, t2, e2, i2, a2), this.selection.get(e2 + 1).addClass("svg_select_handle svg_select_handle_" + a2).on("mousedown.selection touchstart.selection", is(a2, this.el, this.handlePoints, e2));
    });
  }
  createHandleFn(t2) {
    t2.polyline();
  }
  updateHandleFn(t2, e2, i2, a2) {
    const s2 = a2.at(i2 - 1), r2 = a2[(i2 + 1) % a2.length], n2 = e2, o2 = [n2[0] - s2[0], n2[1] - s2[1]], l2 = [n2[0] - r2[0], n2[1] - r2[1]], h2 = Math.sqrt(o2[0] * o2[0] + o2[1] * o2[1]), c2 = Math.sqrt(l2[0] * l2[0] + l2[1] * l2[1]), d2 = [o2[0] / h2, o2[1] / h2], u2 = [l2[0] / c2, l2[1] / c2], g2 = [n2[0] - 10 * d2[0], n2[1] - 10 * d2[1]], p2 = [n2[0] - 10 * u2[0], n2[1] - 10 * u2[1]];
    t2.plot([g2, n2, p2]);
  }
  updateResizeHandles() {
    this.handlePoints.forEach((t2, e2, i2) => {
      const a2 = this.order[e2];
      this.updateHandle.call(this, this.selection.get(e2 + 1), t2, e2, i2, a2);
    });
  }
  createRotFn(t2) {
    t2.line(), t2.circle(5);
  }
  getPoint(t2) {
    return this.handlePoints[this.order.indexOf(t2)];
  }
  getPointHandle(t2) {
    return this.selection.get(this.order.indexOf(t2) + 1);
  }
  updateRotFn(t2, e2) {
    const i2 = this.getPoint("t");
    t2.get(0).plot(i2[0], i2[1], e2[0], e2[1]), t2.get(1).center(e2[0], e2[1]);
  }
  createRotationHandle() {
    const t2 = this.selection.group().addClass("svg_select_handle_rot").on("mousedown.selection touchstart.selection", is("rot", this.el, this.handlePoints));
    this.createRot.call(this, t2);
  }
  updateRotationHandle() {
    const t2 = this.selection.findOne("g.svg_select_handle_rot");
    this.updateRot(t2, this.rotationPoint, this.handlePoints);
  }
  updatePoints() {
    const t2 = this.el.bbox(), e2 = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
    this.handlePoints = this.getHandlePoints(t2).map((t3) => as(t3, e2)), this.rotationPoint = as(this.getRotationPoint(t2), e2);
  }
  getHandlePoints({
    x: t2,
    x2: e2,
    y: i2,
    y2: a2,
    cx: s2,
    cy: r2
  } = this.el.bbox()) {
    return [[t2, i2], [s2, i2], [e2, i2], [e2, r2], [e2, a2], [s2, a2], [t2, a2], [t2, r2]];
  }
  getRotationPoint({
    y: t2,
    cx: e2
  } = this.el.bbox()) {
    return [e2, t2 - 20];
  }
  mutationHandler() {
    this.updatePoints(), this.updateSelection(), this.updateResizeHandles(), this.updateRotationHandle();
  }
};
var rs = (t2) => function(e2 = true, i2 = {}) {
  "object" == typeof e2 && (i2 = e2, e2 = true);
  let a2 = this.remember("_" + t2.name);
  return a2 || (e2.prototype instanceof ss ? (a2 = new e2(this), e2 = true) : a2 = new t2(this), this.remember("_" + t2.name, a2)), a2.active(e2, i2), this;
};
Q(Gt, {
  select: rs(ss)
}), Q([Ge, je, xe], {
  pointSelect: rs(class {
    constructor(t2) {
      this.el = t2, t2.remember("_pointSelectHandler", this), this.selection = new gi(), this.order = ["lt", "t", "rt", "r", "rb", "b", "lb", "l", "rot"], this.mutationHandler = this.mutationHandler.bind(this);
      const e2 = F();
      this.observer = new e2.MutationObserver(this.mutationHandler);
    }
    init(t2) {
      this.createHandle = t2.createHandle || this.createHandleFn, this.updateHandle = t2.updateHandle || this.updateHandleFn, this.el.root().put(this.selection), this.updatePoints(), this.createSelection(), this.createPointHandles(), this.updatePointHandles(), this.observer.observe(this.el.node, {
        attributes: true
      });
    }
    active(t2, e2) {
      if (!t2) return this.selection.clear().remove(), void this.observer.disconnect();
      this.init(e2);
    }
    createSelection() {
      this.selection.polygon(this.points).addClass("svg_select_shape_pointSelect");
    }
    updateSelection() {
      this.selection.get(0).plot(this.points);
    }
    createPointHandles() {
      this.points.forEach((t2, e2, i2) => {
        this.createHandle.call(this, this.selection, t2, e2, i2), this.selection.get(e2 + 1).addClass("svg_select_handle_point").on("mousedown.selection touchstart.selection", is("point", this.el, this.points, e2));
      });
    }
    createHandleFn(t2) {
      t2.circle(5);
    }
    updateHandleFn(t2, e2) {
      t2.center(e2[0], e2[1]);
    }
    updatePointHandles() {
      this.points.forEach((t2, e2, i2) => {
        this.updateHandle.call(this, this.selection.get(e2 + 1), t2, e2, i2);
      });
    }
    updatePoints() {
      const t2 = this.el.parent().screenCTM().inverseO().multiplyO(this.el.screenCTM());
      this.points = this.el.array().map((e2) => as(e2, t2));
    }
    mutationHandler() {
      this.updatePoints(), this.updateSelection(), this.updatePointHandles();
    }
  })
});
var ns = (t2) => (t2.changedTouches && (t2 = t2.changedTouches[0]), {
  x: t2.clientX,
  y: t2.clientY
});
var os = (t2) => {
  let e2 = 1 / 0, i2 = 1 / 0, a2 = -1 / 0, s2 = -1 / 0;
  for (let r2 = 0; r2 < t2.length; r2++) {
    const n2 = t2[r2];
    e2 = Math.min(e2, n2[0]), i2 = Math.min(i2, n2[1]), a2 = Math.max(a2, n2[0]), s2 = Math.max(s2, n2[1]);
  }
  return new kt(e2, i2, a2 - e2, s2 - i2);
};
var ls = class {
  constructor(t2) {
    this.el = t2, t2.remember("_ResizeHandler", this), this.lastCoordinates = null, this.eventType = "", this.lastEvent = null, this.handleResize = this.handleResize.bind(this), this.resize = this.resize.bind(this), this.endResize = this.endResize.bind(this), this.rotate = this.rotate.bind(this), this.movePoint = this.movePoint.bind(this);
  }
  active(t2, e2) {
    this.preserveAspectRatio = e2.preserveAspectRatio ?? false, this.aroundCenter = e2.aroundCenter ?? false, this.grid = e2.grid ?? 0, this.degree = e2.degree ?? 0, this.el.off(".resize"), t2 && (this.el.on(["lt.resize", "rt.resize", "rb.resize", "lb.resize", "t.resize", "r.resize", "b.resize", "l.resize", "rot.resize", "point.resize"], this.handleResize), this.lastEvent && ("rot" === this.eventType ? this.rotate(this.lastEvent) : "point" === this.eventType ? this.movePoint(this.lastEvent) : this.resize(this.lastEvent)));
  }
  handleResize(t2) {
    this.eventType = t2.type;
    const {
      event: e2,
      index: i2,
      points: a2
    } = t2.detail, s2 = !e2.type.indexOf("mouse");
    if (s2 && 1 !== (e2.which || e2.buttons)) return;
    if (this.el.dispatch("beforeresize", {
      event: t2,
      handler: this
    }).defaultPrevented) return;
    this.box = this.el.bbox(), this.startPoint = this.el.point(ns(e2)), this.index = i2, this.points = a2.slice();
    const r2 = (s2 ? "mousemove" : "touchmove") + ".resize", n2 = (s2 ? "mouseup" : "touchcancel.resize touchend") + ".resize";
    "point" === t2.type ? zt(window, r2, this.movePoint) : "rot" === t2.type ? zt(window, r2, this.rotate) : zt(window, r2, this.resize), zt(window, n2, this.endResize);
  }
  resize(t2) {
    this.lastEvent = t2;
    const e2 = this.snapToGrid(this.el.point(ns(t2)));
    let i2 = e2.x - this.startPoint.x, a2 = e2.y - this.startPoint.y;
    this.preserveAspectRatio && this.aroundCenter && (i2 *= 2, a2 *= 2);
    const s2 = this.box.x + i2, r2 = this.box.y + a2, n2 = this.box.x2 + i2, o2 = this.box.y2 + a2;
    let l2 = new kt(this.box);
    if (this.eventType.includes("l") && (l2.x = Math.min(s2, this.box.x2), l2.x2 = Math.max(s2, this.box.x2)), this.eventType.includes("r") && (l2.x = Math.min(n2, this.box.x), l2.x2 = Math.max(n2, this.box.x)), this.eventType.includes("t") && (l2.y = Math.min(r2, this.box.y2), l2.y2 = Math.max(r2, this.box.y2)), this.eventType.includes("b") && (l2.y = Math.min(o2, this.box.y), l2.y2 = Math.max(o2, this.box.y)), l2.width = l2.x2 - l2.x, l2.height = l2.y2 - l2.y, this.preserveAspectRatio) {
      const t3 = l2.width / this.box.width, e3 = l2.height / this.box.height, i3 = ["lt", "t", "rt", "r", "rb", "b", "lb", "l"], a3 = (i3.indexOf(this.eventType) + 4) % i3.length, s3 = this.aroundCenter ? [this.box.cx, this.box.cy] : this.points[a3];
      let r3 = this.eventType.includes("t") || this.eventType.includes("b") ? e3 : t3;
      r3 = 2 === this.eventType.length ? Math.max(t3, e3) : r3, l2 = function(t4, e4, i4) {
        const a4 = [[t4.x, t4.y], [t4.x + t4.width, t4.y], [t4.x + t4.width, t4.y + t4.height], [t4.x, t4.y + t4.height]].map(([t5, a5]) => {
          const s4 = t5 - e4[0], r4 = (a5 - e4[1]) * i4;
          return [s4 * i4 + e4[0], r4 + e4[1]];
        });
        return os(a4);
      }(this.box, s3, r3);
    }
    this.el.dispatch("resize", {
      box: new kt(l2),
      angle: 0,
      eventType: this.eventType,
      event: t2,
      handler: this
    }).defaultPrevented || this.el.size(l2.width, l2.height).move(l2.x, l2.y);
  }
  movePoint(t2) {
    this.lastEvent = t2;
    const {
      x: e2,
      y: i2
    } = this.snapToGrid(this.el.point(ns(t2))), a2 = this.el.array().slice();
    a2[this.index] = [e2, i2], this.el.dispatch("resize", {
      box: os(a2),
      angle: 0,
      eventType: this.eventType,
      event: t2,
      handler: this
    }).defaultPrevented || this.el.plot(a2);
  }
  rotate(t2) {
    this.lastEvent = t2;
    const e2 = this.startPoint, i2 = this.el.point(ns(t2)), {
      cx: a2,
      cy: s2
    } = this.box, r2 = e2.x - a2, n2 = e2.y - s2, o2 = i2.x - a2, l2 = i2.y - s2, h2 = Math.sqrt(r2 * r2 + n2 * n2) * Math.sqrt(o2 * o2 + l2 * l2);
    if (0 === h2) return;
    let c2 = Math.acos((r2 * o2 + n2 * l2) / h2) / Math.PI * 180;
    if (!c2) return;
    i2.x < e2.x && (c2 = -c2);
    const d2 = new vt(this.el), {
      x: u2,
      y: g2
    } = new bt(a2, s2).transformO(d2), {
      rotate: p2
    } = d2.decompose(), f2 = this.snapToAngle(p2 + c2) - p2;
    this.el.dispatch("resize", {
      box: this.box,
      angle: f2,
      eventType: this.eventType,
      event: t2,
      handler: this
    }).defaultPrevented || this.el.transform(d2.rotateO(f2, u2, g2));
  }
  endResize(t2) {
    "rot" !== this.eventType && "point" !== this.eventType && this.resize(t2), this.lastEvent = null, this.eventType = "", Xt(window, "mousemove.resize touchmove.resize"), Xt(window, "mouseup.resize touchend.resize");
  }
  snapToGrid(t2) {
    return this.grid && (t2.x = Math.round(t2.x / this.grid) * this.grid, t2.y = Math.round(t2.y / this.grid) * this.grid), t2;
  }
  snapToAngle(t2) {
    return this.degree && (t2 = Math.round(t2 / this.degree) * this.degree), t2;
  }
};
Q(Gt, {
  resize: function(t2 = true, e2 = {}) {
    "object" == typeof t2 && (e2 = t2, t2 = true);
    let i2 = this.remember("_ResizeHandler");
    return i2 || (t2.prototype instanceof ls ? (i2 = new t2(this), t2 = true) : i2 = new ls(this), this.remember("_resizeHandler", i2)), i2.active(t2, e2), this;
  }
}), void 0 === window.SVG && (window.SVG = yi), void 0 === window.Apex && (window.Apex = {});
var hs = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "initModules",
    value: function() {
      this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "isSeriesHidden", "highlightSeries", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "exportToCSV", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend"], this.ctx.animations = new y(this.ctx), this.ctx.axes = new ra(this.ctx), this.ctx.core = new qa(this.ctx.el, this.ctx), this.ctx.config = new Wi({}), this.ctx.data = new $i(this.ctx), this.ctx.grid = new Ki(this.ctx), this.ctx.graphics = new Mi(this.ctx), this.ctx.coreUtils = new Pi(this.ctx), this.ctx.crosshairs = new na(this.ctx), this.ctx.events = new aa(this.ctx), this.ctx.exports = new Ji(this.ctx), this.ctx.fill = new ji(this.ctx), this.ctx.localization = new sa(this.ctx), this.ctx.options = new Oi(), this.ctx.responsive = new oa(this.ctx), this.ctx.series = new Zi(this.ctx), this.ctx.theme = new la(this.ctx), this.ctx.formatters = new Xi(this.ctx), this.ctx.titleSubtitle = new ha(this.ctx), this.ctx.legend = new xa(this.ctx), this.ctx.toolbar = new ba(this.ctx), this.ctx.tooltip = new Sa(this.ctx), this.ctx.dimensions = new pa(this.ctx), this.ctx.updateHelpers = new Za(this.ctx), this.ctx.zoomPanSelection = new ma(this.ctx), this.ctx.w.globals.tooltip = new Sa(this.ctx);
    }
  }]), t2;
}();
var cs = function() {
  function t2(e2) {
    i(this, t2), this.ctx = e2, this.w = e2.w;
  }
  return s(t2, [{
    key: "clear",
    value: function(t3) {
      var e2 = t3.isUpdating;
      this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({
        isUpdating: e2
      });
    }
  }, {
    key: "killSVG",
    value: function(t3) {
      t3.each(function() {
        this.removeClass("*"), this.off();
      }, true), t3.clear();
    }
  }, {
    key: "clearDomElements",
    value: function(t3) {
      var e2 = this, i2 = t3.isUpdating, a2 = this.w.globals.dom.Paper.node;
      a2.parentNode && a2.parentNode.parentNode && !i2 && (a2.parentNode.parentNode.style.minHeight = "unset");
      var s2 = this.w.globals.dom.baseEl;
      s2 && this.ctx.eventList.forEach(function(t4) {
        s2.removeEventListener(t4, e2.ctx.events.documentEvent);
      });
      var r2 = this.w.globals.dom;
      if (null !== this.ctx.el) for (; this.ctx.el.firstChild; ) this.ctx.el.removeChild(this.ctx.el.firstChild);
      this.killSVG(r2.Paper), r2.Paper.remove(), r2.elWrap = null, r2.elGraphical = null, r2.elLegendWrap = null, r2.elLegendForeign = null, r2.baseEl = null, r2.elGridRect = null, r2.elGridRectMask = null, r2.elGridRectBarMask = null, r2.elGridRectMarkerMask = null, r2.elForecastMask = null, r2.elNonForecastMask = null, r2.elDefs = null;
    }
  }]), t2;
}();
var ds = /* @__PURE__ */ new WeakMap();
var us = function() {
  function t2(e2, a2) {
    i(this, t2), this.opts = a2, this.ctx = this, this.w = new Gi(a2).init(), this.el = e2, this.w.globals.cuid = v.randomId(), this.w.globals.chartID = this.w.config.chart.id ? v.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new hs(this).initModules(), this.create = v.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this);
  }
  return s(t2, [{
    key: "render",
    value: function() {
      var t3 = this;
      return new Promise(function(e2, i2) {
        if (v.elementExists(t3.el)) {
          void 0 === Apex._chartInstances && (Apex._chartInstances = []), t3.w.config.chart.id && Apex._chartInstances.push({
            id: t3.w.globals.chartID,
            group: t3.w.config.chart.group,
            chart: t3
          }), t3.setLocale(t3.w.config.chart.defaultLocale);
          var a2 = t3.w.config.chart.events.beforeMount;
          "function" == typeof a2 && a2(t3, t3.w), t3.events.fireEvent("beforeMount", [t3, t3.w]), window.addEventListener("resize", t3.windowResizeHandler), function(t4, e3) {
            var i3 = false;
            if (t4.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
              var a3 = t4.getBoundingClientRect();
              "none" !== t4.style.display && 0 !== a3.width || (i3 = true);
            }
            var s3 = new ResizeObserver(function(a4) {
              i3 && e3.call(t4, a4), i3 = true;
            });
            t4.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(t4.children).forEach(function(t5) {
              return s3.observe(t5);
            }) : s3.observe(t4), ds.set(e3, s3);
          }(t3.el.parentNode, t3.parentResizeHandler);
          var s2 = t3.el.getRootNode && t3.el.getRootNode(), r2 = v.is("ShadowRoot", s2), n2 = t3.el.ownerDocument, o2 = r2 ? s2.getElementById("apexcharts-css") : n2.getElementById("apexcharts-css");
          if (!o2) {
            var l2;
            (o2 = document.createElement("style")).id = "apexcharts-css", o2.textContent = '@keyframes opaque {\n  0% {\n    opacity: 0\n  }\n\n  to {\n    opacity: 1\n  }\n}\n\n@keyframes resizeanim {\n\n  0%,\n  to {\n    opacity: 0\n  }\n}\n\n.apexcharts-canvas {\n  position: relative;\n  direction: ltr !important;\n  user-select: none\n}\n\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5)\n}\n\n.apexcharts-inner {\n  position: relative\n}\n\n.apexcharts-text tspan {\n  font-family: inherit\n}\n\nrect.legend-mouseover-inactive,\n.legend-mouseover-inactive rect,\n.legend-mouseover-inactive path,\n.legend-mouseover-inactive circle,\n.legend-mouseover-inactive line,\n.legend-mouseover-inactive text.apexcharts-yaxis-title-text,\n.legend-mouseover-inactive text.apexcharts-yaxis-label {\n  transition: .15s ease all;\n  opacity: .2\n}\n\n.apexcharts-legend-text {\n  padding-left: 15px;\n  margin-left: -15px;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, .96)\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, .8)\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #eceff1;\n  border-bottom: 1px solid #ddd\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, .7);\n  border-bottom: 1px solid #333\n}\n\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  margin-left: 5px;\n  font-weight: 600\n}\n\n.apexcharts-tooltip-text-goals-label:empty,\n.apexcharts-tooltip-text-goals-value:empty,\n.apexcharts-tooltip-text-y-label:empty,\n.apexcharts-tooltip-text-y-value:empty,\n.apexcharts-tooltip-text-z-value:empty,\n.apexcharts-tooltip-title:empty {\n  display: none\n}\n\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px\n}\n\n.apexcharts-tooltip-goals-group,\n.apexcharts-tooltip-text-goals-label,\n.apexcharts-tooltip-text-goals-value {\n  display: flex\n}\n\n.apexcharts-tooltip-text-goals-label:not(:empty),\n.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px\n}\n\n.apexcharts-tooltip-marker {\n  display: inline-block;\n  position: relative;\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n  line-height: 16px;\n  margin-right: 4px;\n  text-align: center;\n  vertical-align: middle;\n  color: inherit;\n}\n\n.apexcharts-tooltip-marker::before {\n  content: "";\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  color: currentcolor;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  font-size: 26px;\n  font-family: Arial, Helvetica, sans-serif;\n  line-height: 14px;\n  font-weight: 900;\n}\n\n.apexcharts-tooltip-marker[shape="circle"]::before {\n  content: "\\25CF";\n}\n\n.apexcharts-tooltip-marker[shape="square"]::before,\n.apexcharts-tooltip-marker[shape="rect"]::before {\n  content: "\\25A0";\n  transform: translate(-1px, -2px);\n}\n\n.apexcharts-tooltip-marker[shape="line"]::before {\n  content: "\\2500";\n}\n\n.apexcharts-tooltip-marker[shape="diamond"]::before {\n  content: "\\25C6";\n  font-size: 28px;\n}\n\n.apexcharts-tooltip-marker[shape="triangle"]::before {\n  content: "\\25B2";\n  font-size: 22px;\n}\n\n.apexcharts-tooltip-marker[shape="cross"]::before {\n  content: "\\2715";\n  font-size: 18px;\n}\n\n.apexcharts-tooltip-marker[shape="plus"]::before {\n  content: "\\2715";\n  transform: rotate(45deg) translate(-1px, -1px);\n  font-size: 18px;\n}\n\n.apexcharts-tooltip-marker[shape="star"]::before {\n  content: "\\2605";\n  font-size: 18px;\n}\n\n.apexcharts-tooltip-marker[shape="sparkle"]::before {\n  content: "\\2726";\n  font-size: 20px;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px\n}\n\n.apexcharts-custom-tooltip,\n.apexcharts-tooltip-box {\n  padding: 4px 8px\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: 700\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: 700;\n  display: block;\n  margin-bottom: 5px\n}\n\n.apexcharts-xaxistooltip,\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #eceff1;\n  border: 1px solid #90a4ae\n}\n\n.apexcharts-xaxistooltip {\n  padding: 9px 10px;\n  transition: .15s ease all\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, .7);\n  border: 1px solid rgba(0, 0, 0, .5);\n  color: #fff\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-left: -6px\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-left: -7px\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #eceff1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90a4ae\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-yaxistooltip {\n  padding: 4px 10px\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, .7);\n  border: 1px solid rgba(0, 0, 0, .5);\n  color: #fff\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: transparent;\n  border-width: 6px;\n  margin-top: -6px\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: transparent;\n  border-width: 7px;\n  margin-top: -7px\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #eceff1\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90a4ae\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, .5)\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: .15s ease all\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: .15s ease all\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0\n}\n\n.apexcharts-selection-rect {\n  cursor: move\n}\n\n.svg_select_shape {\n  stroke-width: 1;\n  stroke-dasharray: 10 10;\n  stroke: black;\n  stroke-opacity: 0.1;\n  pointer-events: none;\n  fill: none;\n}\n\n.svg_select_handle {\n  stroke-width: 3;\n  stroke: black;\n  fill: none;\n}\n\n.svg_select_handle_r {\n  cursor: e-resize;\n}\n\n.svg_select_handle_l {\n  cursor: w-resize;\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-menu-icon,\n.apexcharts-pan-icon,\n.apexcharts-reset-icon,\n.apexcharts-selection-icon,\n.apexcharts-toolbar-custom-icon,\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6e8192;\n  text-align: center\n}\n\n.apexcharts-menu-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg {\n  fill: #6e8192\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(.76)\n}\n\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg {\n  fill: #f3f4f5\n}\n\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {\n  fill: #008ffb\n}\n\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {\n  fill: #333\n}\n\n.apexcharts-menu-icon,\n.apexcharts-selection-icon {\n  position: relative\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px\n}\n\n.apexcharts-menu-icon,\n.apexcharts-reset-icon,\n.apexcharts-zoom-icon {\n  transform: scale(.85)\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px\n}\n\n.apexcharts-pan-icon {\n  transform: scale(.62);\n  position: relative;\n  left: 1px;\n  top: 0\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6e8192;\n  stroke-width: 2\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008ffb\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0 6px 2px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: .15s ease all;\n  pointer-events: none\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: .15s ease all\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, .7);\n  color: #fff\n}\n\n@media screen and (min-width:768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1\n  }\n}\n\n.apexcharts-canvas .apexcharts-element-hidden,\n.apexcharts-datalabel.apexcharts-element-hidden,\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-hidden-element-shown {\n  opacity: 1;\n  transition: 0.25s ease all;\n}\n\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value,\n.apexcharts-datalabels,\n.apexcharts-pie-label {\n  cursor: default;\n  pointer-events: none\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: .3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease\n}\n\n.apexcharts-radialbar-label {\n  cursor: pointer;\n}\n\n.apexcharts-annotation-rect,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-gridline,\n.apexcharts-line,\n.apexcharts-point-annotation-label,\n.apexcharts-radar-series path:not(.apexcharts-marker),\n.apexcharts-radar-series polygon,\n.apexcharts-toolbar svg,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-xaxis-annotation-label,\n.apexcharts-yaxis-annotation-label,\n.apexcharts-zoom-rect,\n.no-pointer-events {\n  pointer-events: none\n}\n\n.apexcharts-tooltip-active .apexcharts-marker {\n  transition: .15s ease all\n}\n\n.apexcharts-radar-series .apexcharts-yaxis {\n  pointer-events: none;\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden\n}\n\n.contract-trigger:before,\n.resize-triggers,\n.resize-triggers>div {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0\n}\n\n.resize-triggers>div {\n  height: 100%;\n  width: 100%;\n  background: #eee;\n  overflow: auto\n}\n\n.contract-trigger:before {\n  overflow: hidden;\n  width: 200%;\n  height: 200%\n}\n\n.apexcharts-bar-goals-markers {\n  pointer-events: none\n}\n\n.apexcharts-bar-shadows {\n  pointer-events: none\n}\n\n.apexcharts-rangebar-goals-markers {\n  pointer-events: none\n}';
            var h2 = (null === (l2 = t3.opts.chart) || void 0 === l2 ? void 0 : l2.nonce) || t3.w.config.chart.nonce;
            h2 && o2.setAttribute("nonce", h2), r2 ? s2.prepend(o2) : n2.head.appendChild(o2);
          }
          var c2 = t3.create(t3.w.config.series, {});
          if (!c2) return e2(t3);
          t3.mount(c2).then(function() {
            "function" == typeof t3.w.config.chart.events.mounted && t3.w.config.chart.events.mounted(t3, t3.w), t3.events.fireEvent("mounted", [t3, t3.w]), e2(c2);
          }).catch(function(t4) {
            i2(t4);
          });
        } else i2(new Error("Element not found"));
      });
    }
  }, {
    key: "create",
    value: function(t3, e2) {
      var i2 = this, a2 = this.w;
      new hs(this).initModules();
      var s2 = this.w.globals;
      if (s2.noData = false, s2.animationEnded = false, !v.elementExists(this.el)) return s2.animationEnded = true, this.destroy(), null;
      (this.responsive.checkResponsiveConfig(e2), a2.config.xaxis.convertedCatToNumeric) && new Ni(a2.config).convertCatToNumericXaxis(a2.config, this.ctx);
      if (this.core.setupElements(), "treemap" === a2.config.chart.type && (a2.config.grid.show = false, a2.config.yaxis[0].show = false), 0 === s2.svgWidth) return s2.animationEnded = true, null;
      var r2 = t3;
      t3.forEach(function(t4, e3) {
        t4.hidden && (r2 = i2.legend.legendHelpers.getSeriesAfterCollapsing({
          realIndex: e3
        }));
      });
      var n2 = Pi.checkComboSeries(r2, a2.config.chart.type);
      s2.comboCharts = n2.comboCharts, s2.comboBarCount = n2.comboBarCount;
      var o2 = r2.every(function(t4) {
        return t4.data && 0 === t4.data.length;
      });
      (0 === r2.length || o2 && s2.collapsedSeries.length < 1) && this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(r2), this.theme.init(), new Vi(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), s2.noData && s2.collapsedSeries.length !== s2.series.length && !a2.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), s2.axisCharts && (this.core.coreCalculations(), "category" !== a2.config.xaxis.type && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = a2.globals.minX, this.ctx.toolbar.maxX = a2.globals.maxX), this.formatters.heatmapLabelFormatters(), new Pi(this).getLargestMarkerSize(), this.dimensions.plotCoords();
      var l2 = this.core.xySettings();
      this.grid.createGridMask();
      var h2 = this.core.plotChartType(r2, l2), c2 = new qi(this);
      return c2.bringForward(), a2.config.dataLabels.background.enabled && c2.dataLabelsBackground(), this.core.shiftGraphPosition(), {
        elGraph: h2,
        xyRatios: l2,
        dimensions: {
          plot: {
            left: a2.globals.translateX,
            top: a2.globals.translateY,
            width: a2.globals.gridWidth,
            height: a2.globals.gridHeight
          }
        }
      };
    }
  }, {
    key: "mount",
    value: function() {
      var t3 = this, e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, i2 = this, a2 = i2.w;
      return new Promise(function(s2, r2) {
        if (null === i2.el) return r2(new Error("Not enough data to display or target element not found"));
        (null === e2 || a2.globals.allSeriesCollapsed) && i2.series.handleNoData(), i2.grid = new Ki(i2);
        var n2, o2, l2 = i2.grid.drawGrid();
        (i2.annotations = new Fi(i2), i2.annotations.drawImageAnnos(), i2.annotations.drawTextAnnos(), "back" === a2.config.grid.position) && (l2 && a2.globals.dom.elGraphical.add(l2.el), null != l2 && null !== (n2 = l2.elGridBorders) && void 0 !== n2 && n2.node && a2.globals.dom.elGraphical.add(l2.elGridBorders));
        if (Array.isArray(e2.elGraph)) for (var h2 = 0; h2 < e2.elGraph.length; h2++) a2.globals.dom.elGraphical.add(e2.elGraph[h2]);
        else a2.globals.dom.elGraphical.add(e2.elGraph);
        "front" === a2.config.grid.position && (l2 && a2.globals.dom.elGraphical.add(l2.el), null != l2 && null !== (o2 = l2.elGridBorders) && void 0 !== o2 && o2.node && a2.globals.dom.elGraphical.add(l2.elGridBorders));
        "front" === a2.config.xaxis.crosshairs.position && i2.crosshairs.drawXCrosshairs(), "front" === a2.config.yaxis[0].crosshairs.position && i2.crosshairs.drawYCrosshairs(), "treemap" !== a2.config.chart.type && i2.axes.drawAxis(a2.config.chart.type, l2);
        var c2 = new Qi(t3.ctx, l2), d2 = new ia(t3.ctx, l2);
        if (null !== l2 && (c2.xAxisLabelCorrections(l2.xAxisTickWidth), d2.setYAxisTextAlignments(), a2.config.yaxis.map(function(t4, e3) {
          -1 === a2.globals.ignoreYAxisIndexes.indexOf(e3) && d2.yAxisTitleRotate(e3, t4.opposite);
        })), i2.annotations.drawAxesAnnotations(), !a2.globals.noData) {
          if (a2.config.tooltip.enabled && !a2.globals.noData && i2.w.globals.tooltip.drawTooltip(e2.xyRatios), a2.globals.axisCharts && (a2.globals.isXNumeric || a2.config.xaxis.convertedCatToNumeric || a2.globals.isRangeBar)) (a2.config.chart.zoom.enabled || a2.config.chart.selection && a2.config.chart.selection.enabled || a2.config.chart.pan && a2.config.chart.pan.enabled) && i2.zoomPanSelection.init({
            xyRatios: e2.xyRatios
          });
          else {
            var u2 = a2.config.chart.toolbar.tools;
            ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach(function(t4) {
              u2[t4] = false;
            });
          }
          a2.config.chart.toolbar.show && !a2.globals.allSeriesCollapsed && i2.toolbar.createToolbar();
        }
        a2.globals.memory.methodsToExec.length > 0 && a2.globals.memory.methodsToExec.forEach(function(t4) {
          t4.method(t4.params, false, t4.context);
        }), a2.globals.axisCharts || a2.globals.noData || i2.core.resizeNonAxisCharts(), s2(i2);
      });
    }
  }, {
    key: "destroy",
    value: function() {
      window.removeEventListener("resize", this.windowResizeHandler), function(t4, e2) {
        var i2 = ds.get(e2);
        i2 && (i2.disconnect(), ds.delete(e2));
      }(this.el.parentNode, this.parentResizeHandler);
      var t3 = this.w.config.chart.id;
      t3 && Apex._chartInstances.forEach(function(e2, i2) {
        e2.id === v.escapeString(t3) && Apex._chartInstances.splice(i2, 1);
      }), new cs(this.ctx).clear({
        isUpdating: false
      });
    }
  }, {
    key: "updateOptions",
    value: function(t3) {
      var e2 = this, i2 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], a2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], s2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], r2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], n2 = this.w;
      return n2.globals.selection = void 0, t3.series && (this.series.resetSeries(false, true, false), t3.series.length && t3.series[0].data && (t3.series = t3.series.map(function(t4, i3) {
        return e2.updateHelpers._extendSeries(t4, i3);
      })), this.updateHelpers.revertDefaultAxisMinMax()), t3.xaxis && (t3 = this.updateHelpers.forceXAxisUpdate(t3)), t3.yaxis && (t3 = this.updateHelpers.forceYAxisUpdate(t3)), n2.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), t3.theme && (t3 = this.theme.updateThemeOptions(t3)), this.updateHelpers._updateOptions(t3, i2, a2, s2, r2);
    }
  }, {
    key: "updateSeries",
    value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
      return this.series.resetSeries(false), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(t3, e2, i2);
    }
  }, {
    key: "appendSeries",
    value: function(t3) {
      var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], a2 = this.w.config.series.slice();
      return a2.push(t3), this.series.resetSeries(false), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(a2, e2, i2);
    }
  }, {
    key: "appendData",
    value: function(t3) {
      var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = this;
      i2.w.globals.dataChanged = true, i2.series.getPreviousPaths();
      for (var a2 = i2.w.config.series.slice(), s2 = 0; s2 < a2.length; s2++) if (null !== t3[s2] && void 0 !== t3[s2]) for (var r2 = 0; r2 < t3[s2].data.length; r2++) a2[s2].data.push(t3[s2].data[r2]);
      return i2.w.config.series = a2, e2 && (i2.w.globals.initialSeries = v.clone(i2.w.config.series)), this.update();
    }
  }, {
    key: "update",
    value: function(t3) {
      var e2 = this;
      return new Promise(function(i2, a2) {
        new cs(e2.ctx).clear({
          isUpdating: true
        });
        var s2 = e2.create(e2.w.config.series, t3);
        if (!s2) return i2(e2);
        e2.mount(s2).then(function() {
          "function" == typeof e2.w.config.chart.events.updated && e2.w.config.chart.events.updated(e2, e2.w), e2.events.fireEvent("updated", [e2, e2.w]), e2.w.globals.isDirty = true, i2(e2);
        }).catch(function(t4) {
          a2(t4);
        });
      });
    }
  }, {
    key: "getSyncedCharts",
    value: function() {
      var t3 = this.getGroupedCharts(), e2 = [this];
      return t3.length && (e2 = [], t3.forEach(function(t4) {
        e2.push(t4);
      })), e2;
    }
  }, {
    key: "getGroupedCharts",
    value: function() {
      var t3 = this;
      return Apex._chartInstances.filter(function(t4) {
        if (t4.group) return true;
      }).map(function(e2) {
        return t3.w.config.chart.group === e2.group ? e2.chart : t3;
      });
    }
  }, {
    key: "toggleSeries",
    value: function(t3) {
      return this.series.toggleSeries(t3);
    }
  }, {
    key: "highlightSeriesOnLegendHover",
    value: function(t3, e2) {
      return this.series.toggleSeriesOnHover(t3, e2);
    }
  }, {
    key: "showSeries",
    value: function(t3) {
      this.series.showSeries(t3);
    }
  }, {
    key: "hideSeries",
    value: function(t3) {
      this.series.hideSeries(t3);
    }
  }, {
    key: "highlightSeries",
    value: function(t3) {
      this.series.highlightSeries(t3);
    }
  }, {
    key: "isSeriesHidden",
    value: function(t3) {
      this.series.isSeriesHidden(t3);
    }
  }, {
    key: "resetSeries",
    value: function() {
      var t3 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      this.series.resetSeries(t3, e2);
    }
  }, {
    key: "addEventListener",
    value: function(t3, e2) {
      this.events.addEventListener(t3, e2);
    }
  }, {
    key: "removeEventListener",
    value: function(t3, e2) {
      this.events.removeEventListener(t3, e2);
    }
  }, {
    key: "addXaxisAnnotation",
    value: function(t3) {
      var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a2 = this;
      i2 && (a2 = i2), a2.annotations.addXaxisAnnotationExternal(t3, e2, a2);
    }
  }, {
    key: "addYaxisAnnotation",
    value: function(t3) {
      var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a2 = this;
      i2 && (a2 = i2), a2.annotations.addYaxisAnnotationExternal(t3, e2, a2);
    }
  }, {
    key: "addPointAnnotation",
    value: function(t3) {
      var e2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0, a2 = this;
      i2 && (a2 = i2), a2.annotations.addPointAnnotationExternal(t3, e2, a2);
    }
  }, {
    key: "clearAnnotations",
    value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0, e2 = this;
      t3 && (e2 = t3), e2.annotations.clearAnnotations(e2);
    }
  }, {
    key: "removeAnnotation",
    value: function(t3) {
      var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0, i2 = this;
      e2 && (i2 = e2), i2.annotations.removeAnnotation(i2, t3);
    }
  }, {
    key: "getChartArea",
    value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner");
    }
  }, {
    key: "getSeriesTotalXRange",
    value: function(t3, e2) {
      return this.coreUtils.getSeriesTotalsXRange(t3, e2);
    }
  }, {
    key: "getHighestValueInSeries",
    value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return new ea(this.ctx).getMinYMaxY(t3).highestY;
    }
  }, {
    key: "getLowestValueInSeries",
    value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
      return new ea(this.ctx).getMinYMaxY(t3).lowestY;
    }
  }, {
    key: "getSeriesTotal",
    value: function() {
      return this.w.globals.seriesTotals;
    }
  }, {
    key: "toggleDataPointSelection",
    value: function(t3, e2) {
      return this.updateHelpers.toggleDataPointSelection(t3, e2);
    }
  }, {
    key: "zoomX",
    value: function(t3, e2) {
      this.ctx.toolbar.zoomUpdateOptions(t3, e2);
    }
  }, {
    key: "setLocale",
    value: function(t3) {
      this.localization.setCurrentLocaleValues(t3);
    }
  }, {
    key: "dataURI",
    value: function(t3) {
      return new Ji(this.ctx).dataURI(t3);
    }
  }, {
    key: "getSvgString",
    value: function(t3) {
      return new Ji(this.ctx).getSvgString(t3);
    }
  }, {
    key: "exportToCSV",
    value: function() {
      var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return new Ji(this.ctx).exportToCSV(t3);
    }
  }, {
    key: "paper",
    value: function() {
      return this.w.globals.dom.Paper;
    }
  }, {
    key: "_parentResizeCallback",
    value: function() {
      this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize();
    }
  }, {
    key: "_windowResize",
    value: function() {
      var t3 = this;
      clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout(function() {
        t3.w.globals.resized = true, t3.w.globals.dataChanged = false, t3.ctx.update();
      }, 150);
    }
  }, {
    key: "_windowResizeHandler",
    value: function() {
      var t3 = this.w.config.chart.redrawOnWindowResize;
      "function" == typeof t3 && (t3 = t3()), t3 && this._windowResize();
    }
  }], [{
    key: "getChartByID",
    value: function(t3) {
      var e2 = v.escapeString(t3);
      if (Apex._chartInstances) {
        var i2 = Apex._chartInstances.filter(function(t4) {
          return t4.id === e2;
        })[0];
        return i2 && i2.chart;
      }
    }
  }, {
    key: "initOnLoad",
    value: function() {
      for (var e2 = document.querySelectorAll("[data-apexcharts]"), i2 = 0; i2 < e2.length; i2++) {
        new t2(e2[i2], JSON.parse(e2[i2].getAttribute("data-options"))).render();
      }
    }
  }, {
    key: "exec",
    value: function(t3, e2) {
      var i2 = this.getChartByID(t3);
      if (i2) {
        i2.w.globals.isExecCalled = true;
        var a2 = null;
        if (-1 !== i2.publicMethods.indexOf(e2)) {
          for (var s2 = arguments.length, r2 = new Array(s2 > 2 ? s2 - 2 : 0), n2 = 2; n2 < s2; n2++) r2[n2 - 2] = arguments[n2];
          a2 = i2[e2].apply(i2, r2);
        }
        return a2;
      }
    }
  }, {
    key: "merge",
    value: function(t3, e2) {
      return v.extend(t3, e2);
    }
  }]), t2;
}();
export {
  us as default
};
/*! Bundled license information:

apexcharts/dist/apexcharts.esm.js:
  (*!
   * ApexCharts v4.5.0
   * (c) 2018-2025 ApexCharts
   * Released under the MIT License.
   *)
  (*!
  * @svgdotjs/svg.select.js - An extension of svg.js which allows to select elements with mouse
  * @version 4.0.1
  * https://github.com/svgdotjs/svg.select.js
  *
  * @copyright Ulrich-Matthias Schäfer
  * @license MIT
  *
  * BUILT: Mon Jul 01 2024 15:04:42 GMT+0200 (Central European Summer Time)
  *)
  (*!
  * @svgdotjs/svg.resize.js - An extension for svg.js which allows to resize elements which are selected
  * @version 2.0.4
  * https://github.com/svgdotjs/svg.resize.js
  *
  * @copyright [object Object]
  * @license MIT
  *
  * BUILT: Fri Sep 13 2024 12:43:14 GMT+0200 (Central European Summer Time)
  *)
*/
//# sourceMappingURL=apexcharts.esm-LESIO7DD.js.map

/*!
 * ZeroClipboard
 * The ZeroClipboard library provides an easy way to copy text to the clipboard using an invisible Adobe Flash movie and a JavaScript interface.
 * Copyright (c) 2009-2014 Jon Rohan, James M. Greene
 * Licensed MIT
 * http://zeroclipboard.org/
 * v2.2.0
 */
! function(a, b) {
  "use strict";
  var c, d, e, f = a,
    g = f.document,
    h = f.navigator,
    i = f.setTimeout,
    j = f.clearTimeout,
    k = f.setInterval,
    l = f.clearInterval,
    m = f.getComputedStyle,
    n = f.encodeURIComponent,
    o = f.ActiveXObject,
    p = f.Error,
    q = f.Number.parseInt || f.parseInt,
    r = f.Number.parseFloat || f.parseFloat,
    s = f.Number.isNaN || f.isNaN,
    t = f.Date.now,
    u = f.Object.keys,
    v = f.Object.defineProperty,
    w = f.Object.prototype.hasOwnProperty,
    x = f.Array.prototype.slice,
    y = function() {
      var a = function(a) { return a };
      if ("function" == typeof f.wrap && "function" == typeof f.unwrap) try {
        var b = g.createElement("div"),
          c = f.unwrap(b);
        1 === b.nodeType && c && 1 === c.nodeType && (a = f.unwrap)
      } catch (d) {}
      return a
    }(),
    z = function(a) { return x.call(a, 0) },
    A = function() {
      var a, c, d, e, f, g, h = z(arguments),
        i = h[0] || {};
      for (a = 1, c = h.length; c > a; a++)
        if (null != (d = h[a]))
          for (e in d) w.call(d, e) && (f = i[e], g = d[e], i !== g && g !== b && (i[e] = g));
      return i
    },
    B = function(a) {
      var b, c, d, e;
      if ("object" != typeof a || null == a || "number" == typeof a.nodeType) b = a;
      else if ("number" == typeof a.length)
        for (b = [], c = 0, d = a.length; d > c; c++) w.call(a, c) && (b[c] = B(a[c]));
      else { b = {}; for (e in a) w.call(a, e) && (b[e] = B(a[e])) }
      return b
    },
    C = function(a, b) { for (var c = {}, d = 0, e = b.length; e > d; d++) b[d] in a && (c[b[d]] = a[b[d]]); return c },
    D = function(a, b) { var c = {}; for (var d in a) - 1 === b.indexOf(d) && (c[d] = a[d]); return c },
    E = function(a) {
      if (a)
        for (var b in a) w.call(a, b) && delete a[b];
      return a
    },
    F = function(a, b) {
      if (a && 1 === a.nodeType && a.ownerDocument && b && (1 === b.nodeType && b.ownerDocument && b.ownerDocument === a.ownerDocument || 9 === b.nodeType && !b.ownerDocument && b === a.ownerDocument))
        do {
          if (a === b) return !0;
          a = a.parentNode
        } while (a);
      return !1
    },
    G = function(a) { var b; return "string" == typeof a && a && (b = a.split("#")[0].split("?")[0], b = a.slice(0, a.lastIndexOf("/") + 1)), b },
    H = function(a) { var b, c; return "string" == typeof a && a && (c = a.match(/^(?:|[^:@]*@|.+\)@(?=http[s]?|file)|.+?\s+(?: at |@)(?:[^:\(]+ )*[\(]?)((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), c && c[1] ? b = c[1] : (c = a.match(/\)@((?:http[s]?|file):\/\/[\/]?.+?\/[^:\)]*?)(?::\d+)(?::\d+)?/), c && c[1] && (b = c[1]))), b },
    I = function() { var a, b; try { throw new p } catch (c) { b = c } return b && (a = b.sourceURL || b.fileName || H(b.stack)), a },
    J = function() {
      var a, c, d;
      if (g.currentScript && (a = g.currentScript.src)) return a;
      if (c = g.getElementsByTagName("script"), 1 === c.length) return c[0].src || b;
      if ("readyState" in c[0])
        for (d = c.length; d--;)
          if ("interactive" === c[d].readyState && (a = c[d].src)) return a;
      return "loading" === g.readyState && (a = c[c.length - 1].src) ? a : (a = I()) ? a : b
    },
    K = function() {
      var a, c, d, e = g.getElementsByTagName("script");
      for (a = e.length; a--;) {
        if (!(d = e[a].src)) { c = null; break }
        if (d = G(d), null == c) c = d;
        else if (c !== d) { c = null; break }
      }
      return c || b
    },
    L = function() { var a = G(J()) || K() || ""; return a + "ZeroClipboard.swf" },
    M = function() { return null == a.opener && (!!a.top && a != a.top || !!a.parent && a != a.parent) }(),
    N = { bridge: null, version: "0.0.0", pluginType: "unknown", disabled: null, outdated: null, sandboxed: null, unavailable: null, degraded: null, deactivated: null, overdue: null, ready: null },
    O = "11.0.0",
    P = {},
    Q = {},
    R = null,
    S = 0,
    T = 0,
    U = { ready: "Flash communication is established", error: { "flash-disabled": "Flash is disabled or not installed. May also be attempting to run Flash in a sandboxed iframe, which is impossible.", "flash-outdated": "Flash is too outdated to support ZeroClipboard", "flash-sandboxed": "Attempting to run Flash in a sandboxed iframe, which is impossible", "flash-unavailable": "Flash is unable to communicate bidirectionally with JavaScript", "flash-degraded": "Flash is unable to preserve data fidelity when communicating with JavaScript", "flash-deactivated": "Flash is too outdated for your browser and/or is configured as click-to-activate.\nThis may also mean that the ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity.\nMay also be attempting to run Flash in a sandboxed iframe, which is impossible.", "flash-overdue": "Flash communication was established but NOT within the acceptable time limit", "version-mismatch": "ZeroClipboard JS version number does not match ZeroClipboard SWF version number", "clipboard-error": "At least one error was thrown while ZeroClipboard was attempting to inject your data into the clipboard", "config-mismatch": "ZeroClipboard configuration does not match Flash's reality", "swf-not-found": "The ZeroClipboard SWF object could not be loaded, so please check your `swfPath` configuration and/or network connectivity" } },
    V = ["flash-unavailable", "flash-degraded", "flash-overdue", "version-mismatch", "config-mismatch", "clipboard-error"],
    W = ["flash-disabled", "flash-outdated", "flash-sandboxed", "flash-unavailable", "flash-degraded", "flash-deactivated", "flash-overdue"],
    X = new RegExp("^flash-(" + W.map(function(a) { return a.replace(/^flash-/, "") }).join("|") + ")$"),
    Y = new RegExp("^flash-(" + W.slice(1).map(function(a) { return a.replace(/^flash-/, "") }).join("|") + ")$"),
    Z = { swfPath: L(), trustedDomains: a.location.host ? [a.location.host] : [], cacheBust: !0, forceEnhancedClipboard: !1, flashLoadTimeout: 3e4, autoActivate: !0, bubbleEvents: !0, containerId: "global-zeroclipboard-html-bridge", containerClass: "global-zeroclipboard-container", swfObjectId: "global-zeroclipboard-flash-bridge", hoverClass: "zeroclipboard-is-hover", activeClass: "zeroclipboard-is-active", forceHandCursor: !1, title: null, zIndex: 999999999 },
    $ = function(a) {
      if ("object" == typeof a && null !== a)
        for (var b in a)
          if (w.call(a, b))
            if (/^(?:forceHandCursor|title|zIndex|bubbleEvents)$/.test(b)) Z[b] = a[b];
            else if (null == N.bridge)
        if ("containerId" === b || "swfObjectId" === b) {
          if (!nb(a[b])) throw new Error("The specified `" + b + "` value is not valid as an HTML4 Element ID");
          Z[b] = a[b]
        } else Z[b] = a[b]; { if ("string" != typeof a || !a) return B(Z); if (w.call(Z, a)) return Z[a] }
    },
    _ = function() { return Tb(), { browser: C(h, ["userAgent", "platform", "appName"]), flash: D(N, ["bridge"]), zeroclipboard: { version: Vb.version, config: Vb.config() } } },
    ab = function() { return !!(N.disabled || N.outdated || N.sandboxed || N.unavailable || N.degraded || N.deactivated) },
    bb = function(a, d) {
      var e, f, g, h = {};
      if ("string" == typeof a && a) g = a.toLowerCase().split(/\s+/);
      else if ("object" == typeof a && a && "undefined" == typeof d)
        for (e in a) w.call(a, e) && "string" == typeof e && e && "function" == typeof a[e] && Vb.on(e, a[e]);
      if (g && g.length) {
        for (e = 0, f = g.length; f > e; e++) a = g[e].replace(/^on/, ""), h[a] = !0, P[a] || (P[a] = []), P[a].push(d);
        if (h.ready && N.ready && Vb.emit({ type: "ready" }), h.error) {
          for (e = 0, f = W.length; f > e; e++)
            if (N[W[e].replace(/^flash-/, "")] === !0) { Vb.emit({ type: "error", name: W[e] }); break }
          c !== b && Vb.version !== c && Vb.emit({ type: "error", name: "version-mismatch", jsVersion: Vb.version, swfVersion: c })
        }
      }
      return Vb
    },
    cb = function(a, b) {
      var c, d, e, f, g;
      if (0 === arguments.length) f = u(P);
      else if ("string" == typeof a && a) f = a.split(/\s+/);
      else if ("object" == typeof a && a && "undefined" == typeof b)
        for (c in a) w.call(a, c) && "string" == typeof c && c && "function" == typeof a[c] && Vb.off(c, a[c]);
      if (f && f.length)
        for (c = 0, d = f.length; d > c; c++)
          if (a = f[c].toLowerCase().replace(/^on/, ""), g = P[a], g && g.length)
            if (b)
              for (e = g.indexOf(b); - 1 !== e;) g.splice(e, 1), e = g.indexOf(b, e);
            else g.length = 0;
      return Vb
    },
    db = function(a) { var b; return b = "string" == typeof a && a ? B(P[a]) || null : B(P) },
    eb = function(a) { var b, c, d; return a = ob(a), a && !vb(a) ? "ready" === a.type && N.overdue === !0 ? Vb.emit({ type: "error", name: "flash-overdue" }) : (b = A({}, a), tb.call(this, b), "copy" === a.type && (d = Db(Q), c = d.data, R = d.formatMap), c) : void 0 },
    fb = function() {
      var a = N.sandboxed;
      if (Tb(), "boolean" != typeof N.ready && (N.ready = !1), N.sandboxed !== a && N.sandboxed === !0) N.ready = !1, Vb.emit({ type: "error", name: "flash-sandboxed" });
      else if (!Vb.isFlashUnusable() && null === N.bridge) { var b = Z.flashLoadTimeout; "number" == typeof b && b >= 0 && (S = i(function() { "boolean" != typeof N.deactivated && (N.deactivated = !0), N.deactivated === !0 && Vb.emit({ type: "error", name: "flash-deactivated" }) }, b)), N.overdue = !1, Bb() }
    },
    gb = function() { Vb.clearData(), Vb.blur(), Vb.emit("destroy"), Cb(), Vb.off() },
    hb = function(a, b) {
      var c;
      if ("object" == typeof a && a && "undefined" == typeof b) c = a, Vb.clearData();
      else {
        if ("string" != typeof a || !a) return;
        c = {}, c[a] = b
      }
      for (var d in c) "string" == typeof d && d && w.call(c, d) && "string" == typeof c[d] && c[d] && (Q[d] = c[d])
    },
    ib = function(a) { "undefined" == typeof a ? (E(Q), R = null) : "string" == typeof a && w.call(Q, a) && delete Q[a] },
    jb = function(a) { return "undefined" == typeof a ? B(Q) : "string" == typeof a && w.call(Q, a) ? Q[a] : void 0 },
    kb = function(a) {
      if (a && 1 === a.nodeType) {
        d && (Lb(d, Z.activeClass), d !== a && Lb(d, Z.hoverClass)), d = a, Kb(a, Z.hoverClass);
        var b = a.getAttribute("title") || Z.title;
        if ("string" == typeof b && b) {
          var c = Ab(N.bridge);
          c && c.setAttribute("title", b)
        }
        var e = Z.forceHandCursor === !0 || "pointer" === Mb(a, "cursor");
        Rb(e), Qb()
      }
    },
    lb = function() {
      var a = Ab(N.bridge);
      a && (a.removeAttribute("title"), a.style.left = "0px", a.style.top = "-9999px", a.style.width = "1px", a.style.height = "1px"), d && (Lb(d, Z.hoverClass), Lb(d, Z.activeClass), d = null)
    },
    mb = function() { return d || null },
    nb = function(a) { return "string" == typeof a && a && /^[A-Za-z][A-Za-z0-9_:\-\.]*$/.test(a) },
    ob = function(a) { var b; if ("string" == typeof a && a ? (b = a, a = {}) : "object" == typeof a && a && "string" == typeof a.type && a.type && (b = a.type), b) { b = b.toLowerCase(), !a.target && (/^(copy|aftercopy|_click)$/.test(b) || "error" === b && "clipboard-error" === a.name) && (a.target = e), A(a, { type: b, target: a.target || d || null, relatedTarget: a.relatedTarget || null, currentTarget: N && N.bridge || null, timeStamp: a.timeStamp || t() || null }); var c = U[a.type]; return "error" === a.type && a.name && c && (c = c[a.name]), c && (a.message = c), "ready" === a.type && A(a, { target: null, version: N.version }), "error" === a.type && (X.test(a.name) && A(a, { target: null, minimumVersion: O }), Y.test(a.name) && A(a, { version: N.version })), "copy" === a.type && (a.clipboardData = { setData: Vb.setData, clearData: Vb.clearData }), "aftercopy" === a.type && (a = Eb(a, R)), a.target && !a.relatedTarget && (a.relatedTarget = pb(a.target)), qb(a) } },
    pb = function(a) { var b = a && a.getAttribute && a.getAttribute("data-clipboard-target"); return b ? g.getElementById(b) : null },
    qb = function(a) {
      if (a && /^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type)) {
        var c = a.target,
          d = "_mouseover" === a.type && a.relatedTarget ? a.relatedTarget : b,
          e = "_mouseout" === a.type && a.relatedTarget ? a.relatedTarget : b,
          h = Nb(c),
          i = f.screenLeft || f.screenX || 0,
          j = f.screenTop || f.screenY || 0,
          k = g.body.scrollLeft + g.documentElement.scrollLeft,
          l = g.body.scrollTop + g.documentElement.scrollTop,
          m = h.left + ("number" == typeof a._stageX ? a._stageX : 0),
          n = h.top + ("number" == typeof a._stageY ? a._stageY : 0),
          o = m - k,
          p = n - l,
          q = i + o,
          r = j + p,
          s = "number" == typeof a.movementX ? a.movementX : 0,
          t = "number" == typeof a.movementY ? a.movementY : 0;
        delete a._stageX, delete a._stageY, A(a, { srcElement: c, fromElement: d, toElement: e, screenX: q, screenY: r, pageX: m, pageY: n, clientX: o, clientY: p, x: o, y: p, movementX: s, movementY: t, offsetX: 0, offsetY: 0, layerX: 0, layerY: 0 })
      }
      return a
    },
    rb = function(a) { var b = a && "string" == typeof a.type && a.type || ""; return !/^(?:(?:before)?copy|destroy)$/.test(b) },
    sb = function(a, b, c, d) { d ? i(function() { a.apply(b, c) }, 0) : a.apply(b, c) },
    tb = function(a) {
      if ("object" == typeof a && a && a.type) {
        var b = rb(a),
          c = P["*"] || [],
          d = P[a.type] || [],
          e = c.concat(d);
        if (e && e.length) { var g, h, i, j, k, l = this; for (g = 0, h = e.length; h > g; g++) i = e[g], j = l, "string" == typeof i && "function" == typeof f[i] && (i = f[i]), "object" == typeof i && i && "function" == typeof i.handleEvent && (j = i, i = i.handleEvent), "function" == typeof i && (k = A({}, a), sb(i, j, [k], b)) }
        return this
      }
    },
    ub = function(a) { var b = null; return (M === !1 || a && "error" === a.type && a.name && -1 !== V.indexOf(a.name)) && (b = !1), b },
    vb = function(a) {
      var b = a.target || d || null,
        f = "swf" === a._source;
      switch (delete a._source, a.type) {
        case "error":
          var g = "flash-sandboxed" === a.name || ub(a);
          "boolean" == typeof g && (N.sandboxed = g), -1 !== W.indexOf(a.name) ? A(N, { disabled: "flash-disabled" === a.name, outdated: "flash-outdated" === a.name, unavailable: "flash-unavailable" === a.name, degraded: "flash-degraded" === a.name, deactivated: "flash-deactivated" === a.name, overdue: "flash-overdue" === a.name, ready: !1 }) : "version-mismatch" === a.name && (c = a.swfVersion, A(N, { disabled: !1, outdated: !1, unavailable: !1, degraded: !1, deactivated: !1, overdue: !1, ready: !1 })), Pb();
          break;
        case "ready":
          c = a.swfVersion;
          var h = N.deactivated === !0;
          A(N, { disabled: !1, outdated: !1, sandboxed: !1, unavailable: !1, degraded: !1, deactivated: !1, overdue: h, ready: !h }), Pb();
          break;
        case "beforecopy":
          e = b;
          break;
        case "copy":
          var i, j, k = a.relatedTarget;
          !Q["text/html"] && !Q["text/plain"] && k && (j = k.value || k.outerHTML || k.innerHTML) && (i = k.value || k.textContent || k.innerText) ? (a.clipboardData.clearData(), a.clipboardData.setData("text/plain", i), j !== i && a.clipboardData.setData("text/html", j)) : !Q["text/plain"] && a.target && (i = a.target.getAttribute("data-clipboard-text")) && (a.clipboardData.clearData(), a.clipboardData.setData("text/plain", i));
          break;
        case "aftercopy":
          wb(a), Vb.clearData(), b && b !== Jb() && b.focus && b.focus();
          break;
        case "_mouseover":
          Vb.focus(b), Z.bubbleEvents === !0 && f && (b && b !== a.relatedTarget && !F(a.relatedTarget, b) && xb(A({}, a, { type: "mouseenter", bubbles: !1, cancelable: !1 })), xb(A({}, a, { type: "mouseover" })));
          break;
        case "_mouseout":
          Vb.blur(), Z.bubbleEvents === !0 && f && (b && b !== a.relatedTarget && !F(a.relatedTarget, b) && xb(A({}, a, { type: "mouseleave", bubbles: !1, cancelable: !1 })), xb(A({}, a, { type: "mouseout" })));
          break;
        case "_mousedown":
          Kb(b, Z.activeClass), Z.bubbleEvents === !0 && f && xb(A({}, a, { type: a.type.slice(1) }));
          break;
        case "_mouseup":
          Lb(b, Z.activeClass), Z.bubbleEvents === !0 && f && xb(A({}, a, { type: a.type.slice(1) }));
          break;
        case "_click":
          e = null, Z.bubbleEvents === !0 && f && xb(A({}, a, { type: a.type.slice(1) }));
          break;
        case "_mousemove":
          Z.bubbleEvents === !0 && f && xb(A({}, a, { type: a.type.slice(1) }))
      }
      return /^_(?:click|mouse(?:over|out|down|up|move))$/.test(a.type) ? !0 : void 0
    },
    wb = function(a) {
      if (a.errors && a.errors.length > 0) {
        var b = B(a);
        A(b, { type: "error", name: "clipboard-error" }), delete b.success, i(function() { Vb.emit(b) }, 0)
      }
    },
    xb = function(a) {
      if (a && "string" == typeof a.type && a) {
        var b, c = a.target || null,
          d = c && c.ownerDocument || g,
          e = { view: d.defaultView || f, canBubble: !0, cancelable: !0, detail: "click" === a.type ? 1 : 0, button: "number" == typeof a.which ? a.which - 1 : "number" == typeof a.button ? a.button : d.createEvent ? 0 : 1 },
          h = A(e, a);
        c && d.createEvent && c.dispatchEvent && (h = [h.type, h.canBubble, h.cancelable, h.view, h.detail, h.screenX, h.screenY, h.clientX, h.clientY, h.ctrlKey, h.altKey, h.shiftKey, h.metaKey, h.button, h.relatedTarget], b = d.createEvent("MouseEvents"), b.initMouseEvent && (b.initMouseEvent.apply(b, h), b._source = "js", c.dispatchEvent(b)))
      }
    },
    yb = function() {
      var a = Z.flashLoadTimeout;
      if ("number" == typeof a && a >= 0) {
        var b = Math.min(1e3, a / 10),
          c = Z.swfObjectId + "_fallbackContent";
        T = k(function() {
          var a = g.getElementById(c);
          Ob(a) && (Pb(), N.deactivated = null, Vb.emit({ type: "error", name: "swf-not-found" }))
        }, b)
      }
    },
    zb = function() { var a = g.createElement("div"); return a.id = Z.containerId, a.className = Z.containerClass, a.style.position = "absolute", a.style.left = "0px", a.style.top = "-9999px", a.style.width = "1px", a.style.height = "1px", a.style.zIndex = "" + Sb(Z.zIndex), a },
    Ab = function(a) { for (var b = a && a.parentNode; b && "OBJECT" === b.nodeName && b.parentNode;) b = b.parentNode; return b || null },
    Bb = function() {
      var a, b = N.bridge,
        c = Ab(b);
      if (!b) {
        var d = Ib(f.location.host, Z),
          e = "never" === d ? "none" : "all",
          h = Gb(A({ jsVersion: Vb.version }, Z)),
          i = Z.swfPath + Fb(Z.swfPath, Z);
        c = zb();
        var j = g.createElement("div");
        c.appendChild(j), g.body.appendChild(c);
        var k = g.createElement("div"),
          l = "activex" === N.pluginType;
        k.innerHTML = '<object id="' + Z.swfObjectId + '" name="' + Z.swfObjectId + '" width="100%" height="100%" ' + (l ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"' : 'type="application/x-shockwave-flash" data="' + i + '"') + ">" + (l ? '<param name="movie" value="' + i + '"/>' : "") + '<param name="allowScriptAccess" value="' + d + '"/><param name="allowNetworking" value="' + e + '"/><param name="menu" value="false"/><param name="wmode" value="transparent"/><param name="flashvars" value="' + h + '"/><div id="' + Z.swfObjectId + '_fallbackContent">&nbsp;</div></object>', b = k.firstChild, k = null, y(b).ZeroClipboard = Vb, c.replaceChild(b, j), yb()
      }
      return b || (b = g[Z.swfObjectId], b && (a = b.length) && (b = b[a - 1]), !b && c && (b = c.firstChild)), N.bridge = b || null, b
    },
    Cb = function() {
      var a = N.bridge;
      if (a) {
        var d = Ab(a);
        d && ("activex" === N.pluginType && "readyState" in a ? (a.style.display = "none", function e() {
          if (4 === a.readyState) {
            for (var b in a) "function" == typeof a[b] && (a[b] = null);
            a.parentNode && a.parentNode.removeChild(a), d.parentNode && d.parentNode.removeChild(d)
          } else i(e, 10)
        }()) : (a.parentNode && a.parentNode.removeChild(a), d.parentNode && d.parentNode.removeChild(d))), Pb(), N.ready = null, N.bridge = null, N.deactivated = null, c = b
      }
    },
    Db = function(a) {
      var b = {},
        c = {};
      if ("object" == typeof a && a) {
        for (var d in a)
          if (d && w.call(a, d) && "string" == typeof a[d] && a[d]) switch (d.toLowerCase()) {
            case "text/plain":
            case "text":
            case "air:text":
            case "flash:text":
              b.text = a[d], c.text = d;
              break;
            case "text/html":
            case "html":
            case "air:html":
            case "flash:html":
              b.html = a[d], c.html = d;
              break;
            case "application/rtf":
            case "text/rtf":
            case "rtf":
            case "richtext":
            case "air:rtf":
            case "flash:rtf":
              b.rtf = a[d], c.rtf = d
          }
        return { data: b, formatMap: c }
      }
    },
    Eb = function(a, b) {
      if ("object" != typeof a || !a || "object" != typeof b || !b) return a;
      var c = {};
      for (var d in a)
        if (w.call(a, d))
          if ("errors" === d) { c[d] = a[d] ? a[d].slice() : []; for (var e = 0, f = c[d].length; f > e; e++) c[d][e].format = b[c[d][e].format] } else if ("success" !== d && "data" !== d) c[d] = a[d];
      else { c[d] = {}; var g = a[d]; for (var h in g) h && w.call(g, h) && w.call(b, h) && (c[d][b[h]] = g[h]) }
      return c
    },
    Fb = function(a, b) { var c = null == b || b && b.cacheBust === !0; return c ? (-1 === a.indexOf("?") ? "?" : "&") + "noCache=" + t() : "" },
    Gb = function(a) {
      var b, c, d, e, g = "",
        h = [];
      if (a.trustedDomains && ("string" == typeof a.trustedDomains ? e = [a.trustedDomains] : "object" == typeof a.trustedDomains && "length" in a.trustedDomains && (e = a.trustedDomains)), e && e.length)
        for (b = 0, c = e.length; c > b; b++)
          if (w.call(e, b) && e[b] && "string" == typeof e[b]) {
            if (d = Hb(e[b]), !d) continue;
            if ("*" === d) { h.length = 0, h.push(d); break }
            h.push.apply(h, [d, "//" + d, f.location.protocol + "//" + d])
          }
      return h.length && (g += "trustedOrigins=" + n(h.join(","))), a.forceEnhancedClipboard === !0 && (g += (g ? "&" : "") + "forceEnhancedClipboard=true"), "string" == typeof a.swfObjectId && a.swfObjectId && (g += (g ? "&" : "") + "swfObjectId=" + n(a.swfObjectId)), "string" == typeof a.jsVersion && a.jsVersion && (g += (g ? "&" : "") + "jsVersion=" + n(a.jsVersion)), g
    },
    Hb = function(a) {
      if (null == a || "" === a) return null;
      if (a = a.replace(/^\s+|\s+$/g, ""), "" === a) return null;
      var b = a.indexOf("//");
      a = -1 === b ? a : a.slice(b + 2);
      var c = a.indexOf("/");
      return a = -1 === c ? a : -1 === b || 0 === c ? null : a.slice(0, c), a && ".swf" === a.slice(-4).toLowerCase() ? null : a || null
    },
    Ib = function() {
      var a = function(a) {
        var b, c, d, e = [];
        if ("string" == typeof a && (a = [a]), "object" != typeof a || !a || "number" != typeof a.length) return e;
        for (b = 0, c = a.length; c > b; b++)
          if (w.call(a, b) && (d = Hb(a[b]))) { if ("*" === d) { e.length = 0, e.push("*"); break } - 1 === e.indexOf(d) && e.push(d) }
        return e
      };
      return function(b, c) {
        var d = Hb(c.swfPath);
        null === d && (d = b);
        var e = a(c.trustedDomains),
          f = e.length;
        if (f > 0) { if (1 === f && "*" === e[0]) return "always"; if (-1 !== e.indexOf(b)) return 1 === f && b === d ? "sameDomain" : "always" }
        return "never"
      }
    }(),
    Jb = function() { try { return g.activeElement } catch (a) { return null } },
    Kb = function(a, b) {
      var c, d, e, f = [];
      if ("string" == typeof b && b && (f = b.split(/\s+/)), a && 1 === a.nodeType && f.length > 0)
        if (a.classList)
          for (c = 0, d = f.length; d > c; c++) a.classList.add(f[c]);
        else if (a.hasOwnProperty("className")) {
        for (e = " " + a.className + " ", c = 0, d = f.length; d > c; c++) - 1 === e.indexOf(" " + f[c] + " ") && (e += f[c] + " ");
        a.className = e.replace(/^\s+|\s+$/g, "")
      }
      return a
    },
    Lb = function(a, b) {
      var c, d, e, f = [];
      if ("string" == typeof b && b && (f = b.split(/\s+/)), a && 1 === a.nodeType && f.length > 0)
        if (a.classList && a.classList.length > 0)
          for (c = 0, d = f.length; d > c; c++) a.classList.remove(f[c]);
        else if (a.className) {
        for (e = (" " + a.className + " ").replace(/[\r\n\t]/g, " "), c = 0, d = f.length; d > c; c++) e = e.replace(" " + f[c] + " ", " ");
        a.className = e.replace(/^\s+|\s+$/g, "")
      }
      return a
    },
    Mb = function(a, b) { var c = m(a, null).getPropertyValue(b); return "cursor" !== b || c && "auto" !== c || "A" !== a.nodeName ? c : "pointer" },
    Nb = function(a) {
      var b = { left: 0, top: 0, width: 0, height: 0 };
      if (a.getBoundingClientRect) {
        var c = a.getBoundingClientRect(),
          d = f.pageXOffset,
          e = f.pageYOffset,
          h = g.documentElement.clientLeft || 0,
          i = g.documentElement.clientTop || 0,
          j = 0,
          k = 0;
        if ("relative" === Mb(g.body, "position")) {
          var l = g.body.getBoundingClientRect(),
            m = g.documentElement.getBoundingClientRect();
          j = l.left - m.left || 0, k = l.top - m.top || 0
        }
        b.left = c.left + d - h - j, b.top = c.top + e - i - k, b.width = "width" in c ? c.width : c.right - c.left, b.height = "height" in c ? c.height : c.bottom - c.top
      }
      return b
    },
    Ob = function(a) {
      if (!a) return !1;
      var b = m(a, null),
        c = r(b.height) > 0,
        d = r(b.width) > 0,
        e = r(b.top) >= 0,
        f = r(b.left) >= 0,
        g = c && d && e && f,
        h = g ? null : Nb(a),
        i = "none" !== b.display && "collapse" !== b.visibility && (g || !!h && (c || h.height > 0) && (d || h.width > 0) && (e || h.top >= 0) && (f || h.left >= 0));
      return i
    },
    Pb = function() { j(S), S = 0, l(T), T = 0 },
    Qb = function() {
      var a;
      if (d && (a = Ab(N.bridge))) {
        var b = Nb(d);
        A(a.style, { width: b.width + "px", height: b.height + "px", top: b.top + "px", left: b.left + "px", zIndex: "" + Sb(Z.zIndex) })
      }
    },
    Rb = function(a) { N.ready === !0 && (N.bridge && "function" == typeof N.bridge.setHandCursor ? N.bridge.setHandCursor(a) : N.ready = !1) },
    Sb = function(a) { if (/^(?:auto|inherit)$/.test(a)) return a; var b; return "number" != typeof a || s(a) ? "string" == typeof a && (b = Sb(q(a, 10))) : b = a, "number" == typeof b ? b : "auto" },
    Tb = function(b) {
      var c, d, e, f = N.sandboxed,
        g = null;
      if (b = b === !0, M === !1) g = !1;
      else { try { d = a.frameElement || null } catch (h) { e = { name: h.name, message: h.message } } if (d && 1 === d.nodeType && "IFRAME" === d.nodeName) try { g = d.hasAttribute("sandbox") } catch (h) { g = null } else { try { c = document.domain || null } catch (h) { c = null }(null === c || e && "SecurityError" === e.name && /(^|[\s\(\[@])sandbox(es|ed|ing|[\s\.,!\)\]@]|$)/.test(e.message.toLowerCase())) && (g = !0) } }
      return N.sandboxed = g, f === g || b || Ub(o), g
    },
    Ub = function(a) {
      function b(a) { var b = a.match(/[\d]+/g); return b.length = 3, b.join(".") }

      function c(a) { return !!a && (a = a.toLowerCase()) && (/^(pepflashplayer\.dll|libpepflashplayer\.so|pepperflashplayer\.plugin)$/.test(a) || "chrome.plugin" === a.slice(-13)) }

      function d(a) { a && (i = !0, a.version && (l = b(a.version)), !l && a.description && (l = b(a.description)), a.filename && (k = c(a.filename))) }
      var e, f, g, i = !1,
        j = !1,
        k = !1,
        l = "";
      if (h.plugins && h.plugins.length) e = h.plugins["Shockwave Flash"], d(e), h.plugins["Shockwave Flash 2.0"] && (i = !0, l = "2.0.0.11");
      else if (h.mimeTypes && h.mimeTypes.length) g = h.mimeTypes["application/x-shockwave-flash"], e = g && g.enabledPlugin, d(e);
      else if ("undefined" != typeof a) { j = !0; try { f = new a("ShockwaveFlash.ShockwaveFlash.7"), i = !0, l = b(f.GetVariable("$version")) } catch (m) { try { f = new a("ShockwaveFlash.ShockwaveFlash.6"), i = !0, l = "6.0.21" } catch (n) { try { f = new a("ShockwaveFlash.ShockwaveFlash"), i = !0, l = b(f.GetVariable("$version")) } catch (o) { j = !1 } } } }
      N.disabled = i !== !0, N.outdated = l && r(l) < r(O), N.version = l || "0.0.0", N.pluginType = k ? "pepper" : j ? "activex" : i ? "netscape" : "unknown"
    };
  Ub(o), Tb(!0);
  var Vb = function() { return this instanceof Vb ? void("function" == typeof Vb._createClient && Vb._createClient.apply(this, z(arguments))) : new Vb };
  v(Vb, "version", { value: "2.2.0", writable: !1, configurable: !0, enumerable: !0 }), Vb.config = function() { return $.apply(this, z(arguments)) }, Vb.state = function() { return _.apply(this, z(arguments)) }, Vb.isFlashUnusable = function() { return ab.apply(this, z(arguments)) }, Vb.on = function() { return bb.apply(this, z(arguments)) }, Vb.off = function() { return cb.apply(this, z(arguments)) }, Vb.handlers = function() { return db.apply(this, z(arguments)) }, Vb.emit = function() { return eb.apply(this, z(arguments)) }, Vb.create = function() { return fb.apply(this, z(arguments)) }, Vb.destroy = function() { return gb.apply(this, z(arguments)) }, Vb.setData = function() { return hb.apply(this, z(arguments)) }, Vb.clearData = function() { return ib.apply(this, z(arguments)) }, Vb.getData = function() { return jb.apply(this, z(arguments)) }, Vb.focus = Vb.activate = function() { return kb.apply(this, z(arguments)) }, Vb.blur = Vb.deactivate = function() { return lb.apply(this, z(arguments)) }, Vb.activeElement = function() { return mb.apply(this, z(arguments)) };
  var Wb = 0,
    Xb = {},
    Yb = 0,
    Zb = {},
    $b = {};
  A(Z, { autoActivate: !0 });
  var _b = function(a) {
      var b = this;
      b.id = "" + Wb++, Xb[b.id] = { instance: b, elements: [], handlers: {} }, a && b.clip(a), Vb.on("*", function(a) { return b.emit(a) }), Vb.on("destroy", function() { b.destroy() }), Vb.create()
    },
    ac = function(a, d) {
      var e, f, g, h = {},
        i = Xb[this.id],
        j = i && i.handlers;
      if (!i) throw new Error("Attempted to add new listener(s) to a destroyed ZeroClipboard client instance");
      if ("string" == typeof a && a) g = a.toLowerCase().split(/\s+/);
      else if ("object" == typeof a && a && "undefined" == typeof d)
        for (e in a) w.call(a, e) && "string" == typeof e && e && "function" == typeof a[e] && this.on(e, a[e]);
      if (g && g.length) {
        for (e = 0, f = g.length; f > e; e++) a = g[e].replace(/^on/, ""), h[a] = !0, j[a] || (j[a] = []), j[a].push(d);
        if (h.ready && N.ready && this.emit({ type: "ready", client: this }), h.error) {
          for (e = 0, f = W.length; f > e; e++)
            if (N[W[e].replace(/^flash-/, "")]) { this.emit({ type: "error", name: W[e], client: this }); break }
          c !== b && Vb.version !== c && this.emit({ type: "error", name: "version-mismatch", jsVersion: Vb.version, swfVersion: c })
        }
      }
      return this
    },
    bc = function(a, b) {
      var c, d, e, f, g, h = Xb[this.id],
        i = h && h.handlers;
      if (!i) return this;
      if (0 === arguments.length) f = u(i);
      else if ("string" == typeof a && a) f = a.split(/\s+/);
      else if ("object" == typeof a && a && "undefined" == typeof b)
        for (c in a) w.call(a, c) && "string" == typeof c && c && "function" == typeof a[c] && this.off(c, a[c]);
      if (f && f.length)
        for (c = 0, d = f.length; d > c; c++)
          if (a = f[c].toLowerCase().replace(/^on/, ""), g = i[a], g && g.length)
            if (b)
              for (e = g.indexOf(b); - 1 !== e;) g.splice(e, 1), e = g.indexOf(b, e);
            else g.length = 0;
      return this
    },
    cc = function(a) {
      var b = null,
        c = Xb[this.id] && Xb[this.id].handlers;
      return c && (b = "string" == typeof a && a ? c[a] ? c[a].slice(0) : [] : B(c)), b
    },
    dc = function(a) {
      if (ic.call(this, a)) {
        "object" == typeof a && a && "string" == typeof a.type && a.type && (a = A({}, a));
        var b = A({}, ob(a), { client: this });
        jc.call(this, b)
      }
      return this
    },
    ec = function(a) {
      if (!Xb[this.id]) throw new Error("Attempted to clip element(s) to a destroyed ZeroClipboard client instance");
      a = kc(a);
      for (var b = 0; b < a.length; b++)
        if (w.call(a, b) && a[b] && 1 === a[b].nodeType) { a[b].zcClippingId ? -1 === Zb[a[b].zcClippingId].indexOf(this.id) && Zb[a[b].zcClippingId].push(this.id) : (a[b].zcClippingId = "zcClippingId_" + Yb++, Zb[a[b].zcClippingId] = [this.id], Z.autoActivate === !0 && lc(a[b])); var c = Xb[this.id] && Xb[this.id].elements; - 1 === c.indexOf(a[b]) && c.push(a[b]) }
      return this
    },
    fc = function(a) {
      var b = Xb[this.id];
      if (!b) return this;
      var c, d = b.elements;
      a = "undefined" == typeof a ? d.slice(0) : kc(a);
      for (var e = a.length; e--;)
        if (w.call(a, e) && a[e] && 1 === a[e].nodeType) {
          for (c = 0; - 1 !== (c = d.indexOf(a[e], c));) d.splice(c, 1);
          var f = Zb[a[e].zcClippingId];
          if (f) {
            for (c = 0; - 1 !== (c = f.indexOf(this.id, c));) f.splice(c, 1);
            0 === f.length && (Z.autoActivate === !0 && mc(a[e]), delete a[e].zcClippingId)
          }
        }
      return this
    },
    gc = function() { var a = Xb[this.id]; return a && a.elements ? a.elements.slice(0) : [] },
    hc = function() { Xb[this.id] && (this.unclip(), this.off(), delete Xb[this.id]) },
    ic = function(a) {
      if (!a || !a.type) return !1;
      if (a.client && a.client !== this) return !1;
      var b = Xb[this.id],
        c = b && b.elements,
        d = !!c && c.length > 0,
        e = !a.target || d && -1 !== c.indexOf(a.target),
        f = a.relatedTarget && d && -1 !== c.indexOf(a.relatedTarget),
        g = a.client && a.client === this;
      return b && (e || f || g) ? !0 : !1
    },
    jc = function(a) {
      var b = Xb[this.id];
      if ("object" == typeof a && a && a.type && b) {
        var c = rb(a),
          d = b && b.handlers["*"] || [],
          e = b && b.handlers[a.type] || [],
          g = d.concat(e);
        if (g && g.length) { var h, i, j, k, l, m = this; for (h = 0, i = g.length; i > h; h++) j = g[h], k = m, "string" == typeof j && "function" == typeof f[j] && (j = f[j]), "object" == typeof j && j && "function" == typeof j.handleEvent && (k = j, j = j.handleEvent), "function" == typeof j && (l = A({}, a), sb(j, k, [l], c)) }
      }
    },
    kc = function(a) { return "string" == typeof a && (a = []), "number" != typeof a.length ? [a] : a },
    lc = function(a) {
      if (a && 1 === a.nodeType) {
        var b = function(a) {
            (a || (a = f.event)) && ("js" !== a._source && (a.stopImmediatePropagation(), a.preventDefault()), delete a._source)
          },
          c = function(c) {
            (c || (c = f.event)) && (b(c), Vb.focus(a))
          };
        a.addEventListener("mouseover", c, !1), a.addEventListener("mouseout", b, !1), a.addEventListener("mouseenter", b, !1), a.addEventListener("mouseleave", b, !1), a.addEventListener("mousemove", b, !1), $b[a.zcClippingId] = { mouseover: c, mouseout: b, mouseenter: b, mouseleave: b, mousemove: b }
      }
    },
    mc = function(a) {
      if (a && 1 === a.nodeType) {
        var b = $b[a.zcClippingId];
        if ("object" == typeof b && b) {
          for (var c, d, e = ["move", "leave", "enter", "out", "over"], f = 0, g = e.length; g > f; f++) c = "mouse" + e[f], d = b[c], "function" == typeof d && a.removeEventListener(c, d, !1);
          delete $b[a.zcClippingId]
        }
      }
    };
  Vb._createClient = function() { _b.apply(this, z(arguments)) }, Vb.prototype.on = function() { return ac.apply(this, z(arguments)) }, Vb.prototype.off = function() { return bc.apply(this, z(arguments)) }, Vb.prototype.handlers = function() { return cc.apply(this, z(arguments)) }, Vb.prototype.emit = function() { return dc.apply(this, z(arguments)) }, Vb.prototype.clip = function() { return ec.apply(this, z(arguments)) }, Vb.prototype.unclip = function() { return fc.apply(this, z(arguments)) }, Vb.prototype.elements = function() { return gc.apply(this, z(arguments)) }, Vb.prototype.destroy = function() { return hc.apply(this, z(arguments)) }, Vb.prototype.setText = function(a) { if (!Xb[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance"); return Vb.setData("text/plain", a), this }, Vb.prototype.setHtml = function(a) { if (!Xb[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance"); return Vb.setData("text/html", a), this }, Vb.prototype.setRichText = function(a) { if (!Xb[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance"); return Vb.setData("application/rtf", a), this }, Vb.prototype.setData = function() { if (!Xb[this.id]) throw new Error("Attempted to set pending clipboard data from a destroyed ZeroClipboard client instance"); return Vb.setData.apply(this, z(arguments)), this }, Vb.prototype.clearData = function() { if (!Xb[this.id]) throw new Error("Attempted to clear pending clipboard data from a destroyed ZeroClipboard client instance"); return Vb.clearData.apply(this, z(arguments)), this }, Vb.prototype.getData = function() { if (!Xb[this.id]) throw new Error("Attempted to get pending clipboard data from a destroyed ZeroClipboard client instance"); return Vb.getData.apply(this, z(arguments)) }, "function" == typeof define && define.amd ? define(function() { return Vb }) : "object" == typeof module && module && "object" == typeof module.exports && module.exports ? module.exports = Vb : a.ZeroClipboard = Vb
}(function() { return this || window }());

$(document).ready(function() {
  var passSymbChar = ['!', '@', '#', '$', '%', '&', '*'];
  var passNumChar = "23456789";
  var passAlphaChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passAlphaSmChar = "abcdefghijklmnopqrstuvwxyz";

  function getRandomFromArray(array) {
    var rand = array[Math.floor(Math.random() * array.length)];
    return rand;
  }

  function getRandomFromPossible(possible) {
    var text = "";
    for (var i = 0; i < 2; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }
  var passField = $('#pass'),
    fieldThree = $('#random-number'),
    fieldFour = $('#random-number-2'),
    thirdcols = $('#thirdcols'),
    fieldFive = $('#number-5'),
    fieldSix = $('#number-6'),
    fieldSeven = $('#number-7'),
    fieldEight = $('#number-8'),
    fieldNine = $('#number-9'),
    fieldTen = $('#number-10'),
    resultField = $('#result'),
    occupationField = $('#occupation'),
    occupations = ["Cook", "Copywriter", "Car Mechanic", "Civil Engineer", "Credit analyst", "Consultant", "Cleaner", "Clerk", "Driver", "Economist", "Electrical Engineer", "Finance Broker", "Finance Manager", "Janitor", "Manager", "File Clerk", "Office Clerk", "Stock clerk", "Assistant", "Project engineer", "Radio Mechanics", "Sales Manager", "Sales Promoter", "Administrator", "Systems Analyst", "Web Designer", "Auditing clerk", "Bus driver", "Cashier", "Fitness Trainer", "Secretary", "Web Developer", "Marketing Manager", "Accountant", "Mechanical Engineer", "IT Manager", "Logistician", "Insurance Agent", "HR Specialist", "Receptionist", "Auto Mechanic", "Security Guard", "Guard", "Financial Analyst"];
  minNumberFour = 164,
    maxNumberFour = 212;
  // full block generate
  $('.generator-first').on('click', function(e) {
      e.preventDefault();
      $('.button-active').removeClass('button-active');
      $(this).addClass('button-active');
      $('body').addClass('mylittleponys');
      var generatedPassword = getRandomFromArray(passSymbChar) + getRandomFromPossible(passNumChar) + getRandomFromPossible(passAlphaChar) + getRandomFromPossible(passAlphaSmChar) + getRandomFromArray(passSymbChar);
      passField.val(generatedPassword);
      var minNumber = $("input[name=random-number-from]").val();
      var maxNumber = $("input[name=random-number-to]").val();
      randomNumberFromRange(minNumber / 2, maxNumber / 2);

      function randomNumberFromRange(min, max) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        fieldThree.val(randomNumber * 2);
      }
      occupationField.val(occupations[Math.floor(Math.random() * occupations.length)]);
      var minNumberTwo = $("input[name=random-number-2-from]").val();
      var maxNumberTwo = $("input[name=random-number-2-to]").val();
      randomNumberFromRangeTwo(minNumberTwo / 2, maxNumberTwo / 2);

      function randomNumberFromRangeTwo(min, max) {
        var randomNumberTwo = Math.floor(Math.random() * (max - min + 1) + min);
        fieldFour.val(randomNumberTwo * 2);
      }
      var fieldFivePercent = fieldFive.val(),
        fieldFourVal = fieldFour.val();
      fieldSix.val(Math.round(fieldFourVal / 100 * fieldFivePercent));
      var sorceNumber = $('#random-number-2').val();
      if (sorceNumber > 8000 && sorceNumber < 8050) {
        var col3result = 803;
      } else if (sorceNumber > 8050 && sorceNumber < 8100) {
        var col3result = 808;
      } else if (sorceNumber > 8100 && sorceNumber < 8150) {
        var col3result = 813;
      } else if (sorceNumber > 8150 && sorceNumber < 8200) {
        var col3result = 818;
      } else if (sorceNumber > 8200 && sorceNumber < 8250) {
        var col3result = 823;
      } else if (sorceNumber > 8250 && sorceNumber < 8300) {
        var col3result = 828;
      } else if (sorceNumber > 8300 && sorceNumber < 8350) {
        var col3result = 833;
      } else if (sorceNumber > 8350 && sorceNumber < 8400) {
        var col3result = 838;
      } else if (sorceNumber > 8400 && sorceNumber < 8450) {
        var col3result = 843;
      } else if (sorceNumber > 8450 && sorceNumber < 8500) {
        var col3result = 848;
      } else if (sorceNumber > 8500 && sorceNumber < 8550) {
        var col3result = 853;
      } else if (sorceNumber > 8550 && sorceNumber < 8600) {
        var col3result = 858;
      } else if (sorceNumber > 8600 && sorceNumber < 8650) {
        var col3result = 863;
      } else if (sorceNumber > 8650 && sorceNumber < 8700) {
        var col3result = 868;
      } else if (sorceNumber > 8700 && sorceNumber < 8750) {
        var col3result = 873;
      } else if (sorceNumber > 8750 && sorceNumber < 8800) {
        var col3result = 878;
      } else if (sorceNumber > 8800 && sorceNumber < 8850) {
        var col3result = 883;
      } else if (sorceNumber > 8850 && sorceNumber < 8900) {
        var col3result = 888;
      } else if (sorceNumber > 8900 && sorceNumber < 8950) {
        var col3result = 893;
      } else if (sorceNumber > 8950 && sorceNumber < 9000) {
        var col3result = 898;
      } else if (sorceNumber > 9000 && sorceNumber < 9050) {
        var col3result = 903;
      } else if (sorceNumber > 9050 && sorceNumber < 9100) {
        var col3result = 908;
      } else if (sorceNumber > 9100 && sorceNumber < 9150) {
        var col3result = 913;
      } else if (sorceNumber > 9150 && sorceNumber < 9200) {
        var col3result = 918;
      } else if (sorceNumber > 9200 && sorceNumber < 9250) {
        var col3result = 923;
      } else if (sorceNumber > 9250 && sorceNumber < 9300) {
        var col3result = 930;
      } else if (sorceNumber > 9300 && sorceNumber < 9350) {
        var col3result = 938;
      } else if (sorceNumber > 9350 && sorceNumber < 9400) {
        var col3result = 945;
      } else if (sorceNumber > 9400 && sorceNumber < 9450) {
        var col3result = 953;
      } else if (sorceNumber > 9450 && sorceNumber < 9500) {
        var col3result = 960;
      } else if (sorceNumber > 9500 && sorceNumber < 9550) {
        var col3result = 968;
      } else if (sorceNumber > 9550 && sorceNumber < 9600) {
        var col3result = 975;
      } else if (sorceNumber > 9600 && sorceNumber < 9650) {
        var col3result = 983;
      } else if (sorceNumber > 9650 && sorceNumber < 9700) {
        var col3result = 990;
      } else if (sorceNumber > 9700 && sorceNumber < 9750) {
        var col3result = 998;
      } else if (sorceNumber > 9750 && sorceNumber < 9800) {
        var col3result = 1005;
      } else if (sorceNumber > 9800 && sorceNumber < 9850) {
        var col3result = 1013;
      } else if (sorceNumber > 9850 && sorceNumber < 9900) {
        var col3result = 1020;
      } else if (sorceNumber > 9900 && sorceNumber < 9950) {
        var col3result = 1028;
      } else if (sorceNumber > 9950 && sorceNumber < 10000) {
        var col3result = 1035;
      } else if (sorceNumber > 10000 && sorceNumber < 10050) {
        var col3result = 1043;
      } else if (sorceNumber > 10050 && sorceNumber < 10100) {
        var col3result = 1050;
      } else if (sorceNumber > 10100 && sorceNumber < 10150) {
        var col3result = 1058;
      } else if (sorceNumber > 10150 && sorceNumber < 10200) {
        var col3result = 1065;
      } else if (sorceNumber > 10200 && sorceNumber < 10250) {
        var col3result = 1073;
      } else if (sorceNumber > 10250 && sorceNumber < 10300) {
        var col3result = 1080;
      } else if (sorceNumber > 10300 && sorceNumber < 10350) {
        var col3result = 1088;
      } else if (sorceNumber > 10350 && sorceNumber < 10400) {
        var col3result = 1095;
      } else if (sorceNumber > 10400 && sorceNumber < 10450) {
        var col3result = 1103;
      } else if (sorceNumber > 10450 && sorceNumber < 10500) {
        var col3result = 1110;
      } else if (sorceNumber > 10500 && sorceNumber < 10550) {
        var col3result = 1118;
      } else if (sorceNumber > 10550 && sorceNumber < 10600) {
        var col3result = 1125;
      } else if (sorceNumber > 10600 && sorceNumber < 10650) {
        var col3result = 1133;
      } else if (sorceNumber > 10650 && sorceNumber < 10700) {
        var col3result = 1140;
      } else if (sorceNumber > 10700 && sorceNumber < 10750) {
        var col3result = 1148;
      } else if (sorceNumber > 10750 && sorceNumber < 10800) {
        var col3result = 1155;
      } else if (sorceNumber > 10800 && sorceNumber < 10850) {
        var col3result = 1163;
      } else if (sorceNumber > 10850 && sorceNumber < 10900) {
        var col3result = 1170;
      } else if (sorceNumber > 10900 && sorceNumber < 10950) {
        var col3result = 1178;
      } else if (sorceNumber > 10950 && sorceNumber < 11000) {
        var col3result = 1185;
      } else if (sorceNumber > 11000 && sorceNumber < 11050) {
        var col3result = 1193;
      } else if (sorceNumber > 11050 && sorceNumber < 11100) {
        var col3result = 1200;
      } else if (sorceNumber > 11100 && sorceNumber < 11150) {
        var col3result = 1208;
      } else if (sorceNumber > 11150 && sorceNumber < 11200) {
        var col3result = 1215;
      } else if (sorceNumber > 11200 && sorceNumber < 11250) {
        var col3result = 1223;
      } else if (sorceNumber > 11250 && sorceNumber < 11300) {
        var col3result = 1230;
      } else if (sorceNumber > 11300 && sorceNumber < 11350) {
        var col3result = 1238;
      } else if (sorceNumber > 11350 && sorceNumber < 11400) {
        var col3result = 1245;
      } else if (sorceNumber > 11400 && sorceNumber < 11450) {
        var col3result = 1253;
      } else if (sorceNumber > 11450 && sorceNumber < 11500) {
        var col3result = 1260;
      } else if (sorceNumber > 11500 && sorceNumber < 11550) {
        var col3result = 1268;
      } else if (sorceNumber > 11550 && sorceNumber < 11600) {
        var col3result = 1275;
      } else if (sorceNumber > 11600 && sorceNumber < 11650) {
        var col3result = 1283;
      } else if (sorceNumber > 11650 && sorceNumber < 11700) {
        var col3result = 1290;
      } else if (sorceNumber > 11700 && sorceNumber < 11750) {
        var col3result = 1298;
      } else if (sorceNumber > 11750 && sorceNumber < 11800) {
        var col3result = 1305;
      } else if (sorceNumber > 11800 && sorceNumber < 11850) {
        var col3result = 1313;
      } else if (sorceNumber > 11850 && sorceNumber < 11900) {
        var col3result = 1320;
      } else if (sorceNumber > 11900 && sorceNumber < 11950) {
        var col3result = 1328;
      } else if (sorceNumber > 11950 && sorceNumber < 12000) {
        var col3result = 1335;
      } else if (sorceNumber > 12000 && sorceNumber < 12050) {
        var col3result = 1343;
      } else if (sorceNumber > 12050 && sorceNumber < 12100) {
        var col3result = 1350;
      } else if (sorceNumber > 12100 && sorceNumber < 12150) {
        var col3result = 1358;
      } else if (sorceNumber > 12150 && sorceNumber < 12200) {
        var col3result = 1365;
      } else if (sorceNumber > 12200 && sorceNumber < 12250) {
        var col3result = 1373;
      } else if (sorceNumber > 12250 && sorceNumber < 12300) {
        var col3result = 1380;
      } else if (sorceNumber > 12300 && sorceNumber < 12350) {
        var col3result = 1388;
      } else if (sorceNumber > 12350 && sorceNumber < 12400) {
        var col3result = 1395;
      } else if (sorceNumber > 12400 && sorceNumber < 12450) {
        var col3result = 1403;
      } else if (sorceNumber > 12450 && sorceNumber < 12500) {
        var col3result = 1410;
      } else if (sorceNumber > 12500 && sorceNumber < 12550) {
        var col3result = 1418;
      } else if (sorceNumber > 12550 && sorceNumber < 12600) {
        var col3result = 1425;
      } else if (sorceNumber > 12600 && sorceNumber < 12650) {
        var col3result = 1433;
      } else if (sorceNumber > 12650 && sorceNumber < 12700) {
        var col3result = 1440;
      } else if (sorceNumber > 12700 && sorceNumber < 12750) {
        var col3result = 1448;
      } else if (sorceNumber > 12750 && sorceNumber < 12800) {
        var col3result = 1455;
      } else if (sorceNumber > 12800 && sorceNumber < 12850) {
        var col3result = 1463;
      } else if (sorceNumber > 12850 && sorceNumber < 12900) {
        var col3result = 1470;
      } else if (sorceNumber > 12900 && sorceNumber < 12950) {
        var col3result = 1478;
      } else if (sorceNumber > 12950 && sorceNumber < 13000) {
        var col3result = 1485;
      } else if (sorceNumber > 13000 && sorceNumber < 13050) {
        var col3result = 1493;
      } else if (sorceNumber > 13050 && sorceNumber < 13100) {
        var col3result = 1500;
      } else if (sorceNumber > 13100 && sorceNumber < 13150) {
        var col3result = 1508;
      } else if (sorceNumber > 13150 && sorceNumber < 13200) {
        var col3result = 1515;
      } else if (sorceNumber > 13200 && sorceNumber < 13250) {
        var col3result = 1523;
      } else if (sorceNumber > 13250 && sorceNumber < 13300) {
        var col3result = 1530;
      } else if (sorceNumber > 13300 && sorceNumber < 13350) {
        var col3result = 1538;
      } else if (sorceNumber > 13350 && sorceNumber < 13400) {
        var col3result = 1545;
      } else if (sorceNumber > 13400 && sorceNumber < 13450) {
        var col3result = 1553;
      } else if (sorceNumber > 13450 && sorceNumber < 13500) {
        var col3result = 1560;
      } else if (sorceNumber > 13500 && sorceNumber < 13550) {
        var col3result = 1568;
      } else if (sorceNumber > 13550 && sorceNumber < 13600) {
        var col3result = 1575;
      } else if (sorceNumber > 13600 && sorceNumber < 13650) {
        var col3result = 1583;
      } else if (sorceNumber > 13650 && sorceNumber < 13700) {
        var col3result = 1590;
      } else if (sorceNumber > 13700 && sorceNumber < 13750) {
        var col3result = 1598;
      } else if (sorceNumber > 13750 && sorceNumber < 13800) {
        var col3result = 1605;
      } else if (sorceNumber > 13800 && sorceNumber < 13850) {
        var col3result = 1613;
      } else if (sorceNumber > 13850 && sorceNumber < 13900) {
        var col3result = 1620;
      } else if (sorceNumber > 13900 && sorceNumber < 13950) {
        var col3result = 1628;
      } else if (sorceNumber > 13950 && sorceNumber < 14000) {
        var col3result = 1635;
      } else if (sorceNumber > 14000 && sorceNumber < 14050) {
        var col3result = 1643;
      } else if (sorceNumber > 14050 && sorceNumber < 14100) {
        var col3result = 1650;
      } else if (sorceNumber > 14100 && sorceNumber < 14150) {
        var col3result = 1658;
      } else if (sorceNumber > 14150 && sorceNumber < 14200) {
        var col3result = 1665;
      } else if (sorceNumber > 14200 && sorceNumber < 14250) {
        var col3result = 1673;
      } else if (sorceNumber > 14250 && sorceNumber < 14300) {
        var col3result = 1680;
      } else if (sorceNumber > 14300 && sorceNumber < 14350) {
        var col3result = 1688;
      } else if (sorceNumber > 14350 && sorceNumber < 14400) {
        var col3result = 1695;
      } else if (sorceNumber > 14400 && sorceNumber < 14450) {
        var col3result = 1703;
      } else if (sorceNumber > 14450 && sorceNumber < 14500) {
        var col3result = 1710;
      } else if (sorceNumber > 14500 && sorceNumber < 14550) {
        var col3result = 1718;
      } else if (sorceNumber > 14550 && sorceNumber < 14600) {
        var col3result = 1725;
      } else if (sorceNumber > 14600 && sorceNumber < 14650) {
        var col3result = 1733;
      } else if (sorceNumber > 14650 && sorceNumber < 14700) {
        var col3result = 1740;
      } else if (sorceNumber > 14700 && sorceNumber < 14750) {
        var col3result = 1748;
      } else if (sorceNumber > 14750 && sorceNumber < 14800) {
        var col3result = 1755;
      } else if (sorceNumber > 14800 && sorceNumber < 14850) {
        var col3result = 1763;
      } else if (sorceNumber > 14850 && sorceNumber < 14900) {
        var col3result = 1770;
      } else if (sorceNumber > 14900 && sorceNumber < 14950) {
        var col3result = 1778;
      } else if (sorceNumber > 14950 && sorceNumber < 15000) {
        var col3result = 1785;
      } else if (sorceNumber > 15000 && sorceNumber < 15050) {
        var col3result = 1793;
      } else if (sorceNumber > 15050 && sorceNumber < 15100) {
        var col3result = 1800;
      } else if (sorceNumber > 15100 && sorceNumber < 15150) {
        var col3result = 1808;
      } else if (sorceNumber > 15150 && sorceNumber < 15200) {
        var col3result = 1815;
      } else if (sorceNumber > 15200 && sorceNumber < 15250) {
        var col3result = 1823;
      } else if (sorceNumber > 15250 && sorceNumber < 15300) {
        var col3result = 1830;
      } else if (sorceNumber > 15300 && sorceNumber < 15350) {
        var col3result = 1838;
      } else if (sorceNumber > 15350 && sorceNumber < 15400) {
        var col3result = 1845;
      } else if (sorceNumber > 15400 && sorceNumber < 15450) {
        var col3result = 1853;
      } else if (sorceNumber > 15450 && sorceNumber < 15500) {
        var col3result = 1860;
      } else if (sorceNumber > 15500 && sorceNumber < 15550) {
        var col3result = 1868;
      } else if (sorceNumber > 15550 && sorceNumber < 15600) {
        var col3result = 1875;
      } else if (sorceNumber > 15600 && sorceNumber < 15650) {
        var col3result = 1883;
      } else if (sorceNumber > 15650 && sorceNumber < 15700) {
        var col3result = 1890;
      } else if (sorceNumber > 15700 && sorceNumber < 15750) {
        var col3result = 1898;
      } else if (sorceNumber > 15750 && sorceNumber < 15800) {
        var col3result = 1905;
      } else if (sorceNumber > 15800 && sorceNumber < 15850) {
        var col3result = 1913;
      } else if (sorceNumber > 15850 && sorceNumber < 15900) {
        var col3result = 1920;
      } else if (sorceNumber > 15900 && sorceNumber < 15950) {
        var col3result = 1928;
      } else if (sorceNumber > 15950 && sorceNumber < 16000) {
        var col3result = 1935;
      } else if (sorceNumber > 16000 && sorceNumber < 16050) {
        var col3result = 1943;
      } else if (sorceNumber > 16050 && sorceNumber < 16100) {
        var col3result = 1950;
      } else if (sorceNumber > 16100 && sorceNumber < 16150) {
        var col3result = 1958;
      } else if (sorceNumber > 16150 && sorceNumber < 16200) {
        var col3result = 1965;
      } else if (sorceNumber > 16200 && sorceNumber < 16250) {
        var col3result = 1973;
      } else if (sorceNumber > 16250 && sorceNumber < 16300) {
        var col3result = 1980;
      } else if (sorceNumber > 16300 && sorceNumber < 16350) {
        var col3result = 1988;
      } else if (sorceNumber > 16350 && sorceNumber < 16400) {
        var col3result = 1995;
      } else if (sorceNumber > 16400 && sorceNumber < 16450) {
        var col3result = 2003;
      } else if (sorceNumber > 16450 && sorceNumber < 16500) {
        var col3result = 2010;
      } else if (sorceNumber > 16500 && sorceNumber < 16550) {
        var col3result = 2018;
      } else if (sorceNumber > 16550 && sorceNumber < 16600) {
        var col3result = 2025;
      } else if (sorceNumber > 16600 && sorceNumber < 16650) {
        var col3result = 2033;
      } else if (sorceNumber > 16650 && sorceNumber < 16700) {
        var col3result = 2040;
      } else if (sorceNumber > 16700 && sorceNumber < 16750) {
        var col3result = 2048;
      } else if (sorceNumber > 16750 && sorceNumber < 16800) {
        var col3result = 2055;
      } else if (sorceNumber > 16800 && sorceNumber < 16850) {
        var col3result = 2063;
      } else if (sorceNumber > 16850 && sorceNumber < 16900) {
        var col3result = 2070;
      } else if (sorceNumber > 16900 && sorceNumber < 16950) {
        var col3result = 2078;
      } else if (sorceNumber > 16950 && sorceNumber < 17000) {
        var col3result = 2085;
      } else if (sorceNumber > 17000 && sorceNumber < 17050) {
        var col3result = 2093;
      } else if (sorceNumber > 17050 && sorceNumber < 17100) {
        var col3result = 2100;
      } else if (sorceNumber > 17100 && sorceNumber < 17150) {
        var col3result = 2108;
      } else if (sorceNumber > 17150 && sorceNumber < 17200) {
        var col3result = 2115;
      } else if (sorceNumber > 17200 && sorceNumber < 17250) {
        var col3result = 2123;
      } else if (sorceNumber > 17250 && sorceNumber < 17300) {
        var col3result = 2130;
      } else if (sorceNumber > 17300 && sorceNumber < 17350) {
        var col3result = 2138;
      } else if (sorceNumber > 17350 && sorceNumber < 17400) {
        var col3result = 2145;
      } else if (sorceNumber > 17400 && sorceNumber < 17450) {
        var col3result = 2153;
      } else if (sorceNumber > 17450 && sorceNumber < 17500) {
        var col3result = 2160;
      } else if (sorceNumber > 17500 && sorceNumber < 17550) {
        var col3result = 2168;
      } else if (sorceNumber > 17550 && sorceNumber < 17600) {
        var col3result = 2175;
      } else if (sorceNumber > 17600 && sorceNumber < 17650) {
        var col3result = 2183;
      } else if (sorceNumber > 17650 && sorceNumber < 17700) {
        var col3result = 2190;
      } else if (sorceNumber > 17700 && sorceNumber < 17750) {
        var col3result = 2198;
      } else if (sorceNumber > 17750 && sorceNumber < 17800) {
        var col3result = 2205;
      } else if (sorceNumber > 17800 && sorceNumber < 17850) {
        var col3result = 2213;
      } else if (sorceNumber > 17850 && sorceNumber < 17900) {
        var col3result = 2220;
      } else if (sorceNumber > 17900 && sorceNumber < 17950) {
        var col3result = 2228;
      } else if (sorceNumber > 17950 && sorceNumber < 18000) {
        var col3result = 2235;
      } else if (sorceNumber > 18000 && sorceNumber < 18050) {
        var col3result = 2243;
      } else if (sorceNumber > 18050 && sorceNumber < 18100) {
        var col3result = 2250;
      } else if (sorceNumber > 18100 && sorceNumber < 18150) {
        var col3result = 2258;
      } else if (sorceNumber > 18150 && sorceNumber < 18200) {
        var col3result = 2265;
      } else if (sorceNumber > 18200 && sorceNumber < 18250) {
        var col3result = 2273;
      } else if (sorceNumber > 18250 && sorceNumber < 18300) {
        var col3result = 2280;
      } else if (sorceNumber > 18300 && sorceNumber < 18350) {
        var col3result = 2288;
      } else if (sorceNumber > 18350 && sorceNumber < 18400) {
        var col3result = 2295;
      } else if (sorceNumber > 18400 && sorceNumber < 18450) {
        var col3result = 2303;
      } else if (sorceNumber > 18450 && sorceNumber < 18500) {
        var col3result = 2310;
      } else if (sorceNumber > 18500 && sorceNumber < 18550) {
        var col3result = 2318;
      } else if (sorceNumber > 18550 && sorceNumber < 18600) {
        var col3result = 2325;
      } else if (sorceNumber > 18600 && sorceNumber < 18650) {
        var col3result = 2333;
      } else if (sorceNumber > 18650 && sorceNumber < 18700) {
        var col3result = 2340;
      } else if (sorceNumber > 18700 && sorceNumber < 18750) {
        var col3result = 2348;
      } else if (sorceNumber > 18750 && sorceNumber < 18800) {
        var col3result = 2355;
      } else if (sorceNumber > 18800 && sorceNumber < 18850) {
        var col3result = 2363;
      } else if (sorceNumber > 18850 && sorceNumber < 18900) {
        var col3result = 2370;
      } else if (sorceNumber > 18900 && sorceNumber < 18950) {
        var col3result = 2378;
      } else if (sorceNumber > 18950 && sorceNumber < 19000) {
        var col3result = 2385;
      } else if (sorceNumber > 19000 && sorceNumber < 19050) {
        var col3result = 2393;
      } else if (sorceNumber > 19050 && sorceNumber < 19100) {
        var col3result = 2400;
      } else if (sorceNumber > 19100 && sorceNumber < 19150) {
        var col3result = 2408;
      } else if (sorceNumber > 19150 && sorceNumber < 19200) {
        var col3result = 2415;
      } else if (sorceNumber > 19200 && sorceNumber < 19250) {
        var col3result = 2423;
      } else if (sorceNumber > 19250 && sorceNumber < 19300) {
        var col3result = 2430;
      } else if (sorceNumber > 19300 && sorceNumber < 19350) {
        var col3result = 2438;
      } else if (sorceNumber > 19350 && sorceNumber < 19400) {
        var col3result = 2445;
      } else if (sorceNumber > 19400 && sorceNumber < 19450) {
        var col3result = 2453;
      } else if (sorceNumber > 19450 && sorceNumber < 19500) {
        var col3result = 2460;
      } else if (sorceNumber > 19500 && sorceNumber < 19550) {
        var col3result = 2468;
      } else if (sorceNumber > 19550 && sorceNumber < 19600) {
        var col3result = 2475;
      } else if (sorceNumber > 19600 && sorceNumber < 19650) {
        var col3result = 2483;
      } else if (sorceNumber > 19650 && sorceNumber < 19700) {
        var col3result = 2490;
      } else if (sorceNumber > 19700 && sorceNumber < 19750) {
        var col3result = 2498;
      } else if (sorceNumber > 19750 && sorceNumber < 19800) {
        var col3result = 2505;
      } else if (sorceNumber > 19800 && sorceNumber < 19850) {
        var col3result = 2513;
      } else if (sorceNumber > 19850 && sorceNumber < 19900) {
        var col3result = 2520;
      } else if (sorceNumber > 19900 && sorceNumber < 19950) {
        var col3result = 2528;
      } else if (sorceNumber > 19950 && sorceNumber < 20000) {
        var col3result = 2535;
      } else if (sorceNumber > 20000 && sorceNumber < 20050) {
        var col3result = 2543;
      } else if (sorceNumber > 20050 && sorceNumber < 20100) {
        var col3result = 2550;
      } else if (sorceNumber > 20100 && sorceNumber < 20150) {
        var col3result = 2558;
      } else if (sorceNumber > 20150 && sorceNumber < 20200) {
        var col3result = 2565;
      } else if (sorceNumber > 20200 && sorceNumber < 20250) {
        var col3result = 2573;
      } else if (sorceNumber > 20250 && sorceNumber < 20300) {
        var col3result = 2580;
      } else if (sorceNumber > 20300 && sorceNumber < 20350) {
        var col3result = 2588;
      } else if (sorceNumber > 20350 && sorceNumber < 20400) {
        var col3result = 2595;
      } else if (sorceNumber > 20400 && sorceNumber < 20450) {
        var col3result = 2603;
      } else if (sorceNumber > 20450 && sorceNumber < 20500) {
        var col3result = 2610;
      } else if (sorceNumber > 20500 && sorceNumber < 20550) {
        var col3result = 2618;
      } else if (sorceNumber > 20550 && sorceNumber < 20600) {
        var col3result = 2625;
      } else if (sorceNumber > 20600 && sorceNumber < 20650) {
        var col3result = 2633;
      } else if (sorceNumber > 20650 && sorceNumber < 20700) {
        var col3result = 2640;
      } else if (sorceNumber > 20700 && sorceNumber < 20750) {
        var col3result = 2648;
      } else if (sorceNumber > 20750 && sorceNumber < 20800) {
        var col3result = 2655;
      } else if (sorceNumber > 20800 && sorceNumber < 20850) {
        var col3result = 2663;
      } else if (sorceNumber > 20850 && sorceNumber < 20900) {
        var col3result = 2670;
      } else if (sorceNumber > 20900 && sorceNumber < 20950) {
        var col3result = 2678;
      } else if (sorceNumber > 20950 && sorceNumber < 21000) {
        var col3result = 2685;
      }
      thirdcols.val(col3result);
      fieldSeven.val(Math.round(fieldFourVal / 100 * 6.2));
      fieldEight.val(Math.round(fieldFourVal / 100 * 1.45));
      var minNumberThree = $("input[name=number-9-from]").val();
      var maxNumberThree = $("input[name=number-9-to]").val();
      randomNumberFromRangeThree(minNumberThree / 2, maxNumberThree / 2);

      function randomNumberFromRangeThree(min, max) {
        var randomNumberThree = Math.floor(Math.random() * (max - min + 1) + min);
        fieldNine.val(randomNumberThree * 2);
      }
      randomNumberFromRangeFour(minNumberFour / 2, maxNumberFour / 2);

      function randomNumberFromRangeFour(min, max) {
        var randomNumberFour = Math.floor(Math.random() * (max - min + 1) + min);
        fieldTen.val(randomNumberFour * 2);
      }
      var resulrcontent = 'TT pass: ' + generatedPassword + ' <br /> <br /> TT2015(Deluxe + EIC) <br /> Amount: (gift) <br /> <br /> ' +
        fieldFour.val() + '<br />' + col3result + '<br />' +
        fieldSeven.val() + '<br />' + fieldEight.val() + '<br />' + fieldNine.val() + ' - gambling<br />';
      $('.resulblock').html(resulrcontent);
    })
    // halft top block generate
  $('.generator-second').on('click', function(e) {
      e.preventDefault();
      $('.button-active').removeClass('button-active');
      $(this).addClass('button-active');
      var generatedPassword = getRandomFromArray(passSymbChar) + getRandomFromPossible(passNumChar) + getRandomFromPossible(passAlphaChar) + getRandomFromPossible(passAlphaSmChar) + getRandomFromArray(passSymbChar);
      passField.val(generatedPassword);
      var minNumber = $("input[name=random-number-from]").val();
      var maxNumber = $("input[name=random-number-to]").val();
      randomNumberFromRange(minNumber / 2, maxNumber / 2);

      function randomNumberFromRange(min, max) {
        var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        fieldThree.val(randomNumber * 2);
      }
      var resulcontenta = 'TT pass: ' + generatedPassword + ' <br /> <br /> TT2015(Deluxe + EIC) <br /> Amount: (gift) <br /> <br /> ';
      $('.resulblock').html(resulcontenta);
    })
    // half bottom block generate
  $('.generator-third').on('click', function(e) {
      e.preventDefault();
      $('.button-active').removeClass('button-active');
      $(this).addClass('button-active');
      occupationField.val(occupations[Math.floor(Math.random() * occupations.length)]);
      var minNumberTwo = $("input[name=random-number-2-from]").val();
      var maxNumberTwo = $("input[name=random-number-2-to]").val();
      randomNumberFromRangeTwo(minNumberTwo / 2, maxNumberTwo / 2);

      function randomNumberFromRangeTwo(min, max) {
        var randomNumberTwo = Math.floor(Math.random() * (max - min + 1) + min);
        fieldFour.val(randomNumberTwo * 2);
      }
      var fieldFivePercent = fieldFive.val(),
        fieldFourVal = fieldFour.val();
      fieldSix.val(Math.round(fieldFourVal / 100 * fieldFivePercent));
      var sorceNumber = $('#random-number-2').val();
      if (sorceNumber > 8000 && sorceNumber < 8050) {
        var col3result = 803;
      } else if (sorceNumber > 8050 && sorceNumber < 8100) {
        var col3result = 808;
      } else if (sorceNumber > 8100 && sorceNumber < 8150) {
        var col3result = 813;
      } else if (sorceNumber > 8150 && sorceNumber < 8200) {
        var col3result = 818;
      } else if (sorceNumber > 8200 && sorceNumber < 8250) {
        var col3result = 823;
      } else if (sorceNumber > 8250 && sorceNumber < 8300) {
        var col3result = 828;
      } else if (sorceNumber > 8300 && sorceNumber < 8350) {
        var col3result = 833;
      } else if (sorceNumber > 8350 && sorceNumber < 8400) {
        var col3result = 838;
      } else if (sorceNumber > 8400 && sorceNumber < 8450) {
        var col3result = 843;
      } else if (sorceNumber > 8450 && sorceNumber < 8500) {
        var col3result = 848;
      } else if (sorceNumber > 8500 && sorceNumber < 8550) {
        var col3result = 853;
      } else if (sorceNumber > 8550 && sorceNumber < 8600) {
        var col3result = 858;
      } else if (sorceNumber > 8600 && sorceNumber < 8650) {
        var col3result = 863;
      } else if (sorceNumber > 8650 && sorceNumber < 8700) {
        var col3result = 868;
      } else if (sorceNumber > 8700 && sorceNumber < 8750) {
        var col3result = 873;
      } else if (sorceNumber > 8750 && sorceNumber < 8800) {
        var col3result = 878;
      } else if (sorceNumber > 8800 && sorceNumber < 8850) {
        var col3result = 883;
      } else if (sorceNumber > 8850 && sorceNumber < 8900) {
        var col3result = 888;
      } else if (sorceNumber > 8900 && sorceNumber < 8950) {
        var col3result = 893;
      } else if (sorceNumber > 8950 && sorceNumber < 9000) {
        var col3result = 898;
      } else if (sorceNumber > 9000 && sorceNumber < 9050) {
        var col3result = 903;
      } else if (sorceNumber > 9050 && sorceNumber < 9100) {
        var col3result = 908;
      } else if (sorceNumber > 9100 && sorceNumber < 9150) {
        var col3result = 913;
      } else if (sorceNumber > 9150 && sorceNumber < 9200) {
        var col3result = 918;
      } else if (sorceNumber > 9200 && sorceNumber < 9250) {
        var col3result = 923;
      } else if (sorceNumber > 9250 && sorceNumber < 9300) {
        var col3result = 930;
      } else if (sorceNumber > 9300 && sorceNumber < 9350) {
        var col3result = 938;
      } else if (sorceNumber > 9350 && sorceNumber < 9400) {
        var col3result = 945;
      } else if (sorceNumber > 9400 && sorceNumber < 9450) {
        var col3result = 953;
      } else if (sorceNumber > 9450 && sorceNumber < 9500) {
        var col3result = 960;
      } else if (sorceNumber > 9500 && sorceNumber < 9550) {
        var col3result = 968;
      } else if (sorceNumber > 9550 && sorceNumber < 9600) {
        var col3result = 975;
      } else if (sorceNumber > 9600 && sorceNumber < 9650) {
        var col3result = 983;
      } else if (sorceNumber > 9650 && sorceNumber < 9700) {
        var col3result = 990;
      } else if (sorceNumber > 9700 && sorceNumber < 9750) {
        var col3result = 998;
      } else if (sorceNumber > 9750 && sorceNumber < 9800) {
        var col3result = 1005;
      } else if (sorceNumber > 9800 && sorceNumber < 9850) {
        var col3result = 1013;
      } else if (sorceNumber > 9850 && sorceNumber < 9900) {
        var col3result = 1020;
      } else if (sorceNumber > 9900 && sorceNumber < 9950) {
        var col3result = 1028;
      } else if (sorceNumber > 9950 && sorceNumber < 10000) {
        var col3result = 1035;
      } else if (sorceNumber > 10000 && sorceNumber < 10050) {
        var col3result = 1043;
      } else if (sorceNumber > 10050 && sorceNumber < 10100) {
        var col3result = 1050;
      } else if (sorceNumber > 10100 && sorceNumber < 10150) {
        var col3result = 1058;
      } else if (sorceNumber > 10150 && sorceNumber < 10200) {
        var col3result = 1065;
      } else if (sorceNumber > 10200 && sorceNumber < 10250) {
        var col3result = 1073;
      } else if (sorceNumber > 10250 && sorceNumber < 10300) {
        var col3result = 1080;
      } else if (sorceNumber > 10300 && sorceNumber < 10350) {
        var col3result = 1088;
      } else if (sorceNumber > 10350 && sorceNumber < 10400) {
        var col3result = 1095;
      } else if (sorceNumber > 10400 && sorceNumber < 10450) {
        var col3result = 1103;
      } else if (sorceNumber > 10450 && sorceNumber < 10500) {
        var col3result = 1110;
      } else if (sorceNumber > 10500 && sorceNumber < 10550) {
        var col3result = 1118;
      } else if (sorceNumber > 10550 && sorceNumber < 10600) {
        var col3result = 1125;
      } else if (sorceNumber > 10600 && sorceNumber < 10650) {
        var col3result = 1133;
      } else if (sorceNumber > 10650 && sorceNumber < 10700) {
        var col3result = 1140;
      } else if (sorceNumber > 10700 && sorceNumber < 10750) {
        var col3result = 1148;
      } else if (sorceNumber > 10750 && sorceNumber < 10800) {
        var col3result = 1155;
      } else if (sorceNumber > 10800 && sorceNumber < 10850) {
        var col3result = 1163;
      } else if (sorceNumber > 10850 && sorceNumber < 10900) {
        var col3result = 1170;
      } else if (sorceNumber > 10900 && sorceNumber < 10950) {
        var col3result = 1178;
      } else if (sorceNumber > 10950 && sorceNumber < 11000) {
        var col3result = 1185;
      } else if (sorceNumber > 11000 && sorceNumber < 11050) {
        var col3result = 1193;
      } else if (sorceNumber > 11050 && sorceNumber < 11100) {
        var col3result = 1200;
      } else if (sorceNumber > 11100 && sorceNumber < 11150) {
        var col3result = 1208;
      } else if (sorceNumber > 11150 && sorceNumber < 11200) {
        var col3result = 1215;
      } else if (sorceNumber > 11200 && sorceNumber < 11250) {
        var col3result = 1223;
      } else if (sorceNumber > 11250 && sorceNumber < 11300) {
        var col3result = 1230;
      } else if (sorceNumber > 11300 && sorceNumber < 11350) {
        var col3result = 1238;
      } else if (sorceNumber > 11350 && sorceNumber < 11400) {
        var col3result = 1245;
      } else if (sorceNumber > 11400 && sorceNumber < 11450) {
        var col3result = 1253;
      } else if (sorceNumber > 11450 && sorceNumber < 11500) {
        var col3result = 1260;
      } else if (sorceNumber > 11500 && sorceNumber < 11550) {
        var col3result = 1268;
      } else if (sorceNumber > 11550 && sorceNumber < 11600) {
        var col3result = 1275;
      } else if (sorceNumber > 11600 && sorceNumber < 11650) {
        var col3result = 1283;
      } else if (sorceNumber > 11650 && sorceNumber < 11700) {
        var col3result = 1290;
      } else if (sorceNumber > 11700 && sorceNumber < 11750) {
        var col3result = 1298;
      } else if (sorceNumber > 11750 && sorceNumber < 11800) {
        var col3result = 1305;
      } else if (sorceNumber > 11800 && sorceNumber < 11850) {
        var col3result = 1313;
      } else if (sorceNumber > 11850 && sorceNumber < 11900) {
        var col3result = 1320;
      } else if (sorceNumber > 11900 && sorceNumber < 11950) {
        var col3result = 1328;
      } else if (sorceNumber > 11950 && sorceNumber < 12000) {
        var col3result = 1335;
      } else if (sorceNumber > 12000 && sorceNumber < 12050) {
        var col3result = 1343;
      } else if (sorceNumber > 12050 && sorceNumber < 12100) {
        var col3result = 1350;
      } else if (sorceNumber > 12100 && sorceNumber < 12150) {
        var col3result = 1358;
      } else if (sorceNumber > 12150 && sorceNumber < 12200) {
        var col3result = 1365;
      } else if (sorceNumber > 12200 && sorceNumber < 12250) {
        var col3result = 1373;
      } else if (sorceNumber > 12250 && sorceNumber < 12300) {
        var col3result = 1380;
      } else if (sorceNumber > 12300 && sorceNumber < 12350) {
        var col3result = 1388;
      } else if (sorceNumber > 12350 && sorceNumber < 12400) {
        var col3result = 1395;
      } else if (sorceNumber > 12400 && sorceNumber < 12450) {
        var col3result = 1403;
      } else if (sorceNumber > 12450 && sorceNumber < 12500) {
        var col3result = 1410;
      } else if (sorceNumber > 12500 && sorceNumber < 12550) {
        var col3result = 1418;
      } else if (sorceNumber > 12550 && sorceNumber < 12600) {
        var col3result = 1425;
      } else if (sorceNumber > 12600 && sorceNumber < 12650) {
        var col3result = 1433;
      } else if (sorceNumber > 12650 && sorceNumber < 12700) {
        var col3result = 1440;
      } else if (sorceNumber > 12700 && sorceNumber < 12750) {
        var col3result = 1448;
      } else if (sorceNumber > 12750 && sorceNumber < 12800) {
        var col3result = 1455;
      } else if (sorceNumber > 12800 && sorceNumber < 12850) {
        var col3result = 1463;
      } else if (sorceNumber > 12850 && sorceNumber < 12900) {
        var col3result = 1470;
      } else if (sorceNumber > 12900 && sorceNumber < 12950) {
        var col3result = 1478;
      } else if (sorceNumber > 12950 && sorceNumber < 13000) {
        var col3result = 1485;
      } else if (sorceNumber > 13000 && sorceNumber < 13050) {
        var col3result = 1493;
      } else if (sorceNumber > 13050 && sorceNumber < 13100) {
        var col3result = 1500;
      } else if (sorceNumber > 13100 && sorceNumber < 13150) {
        var col3result = 1508;
      } else if (sorceNumber > 13150 && sorceNumber < 13200) {
        var col3result = 1515;
      } else if (sorceNumber > 13200 && sorceNumber < 13250) {
        var col3result = 1523;
      } else if (sorceNumber > 13250 && sorceNumber < 13300) {
        var col3result = 1530;
      } else if (sorceNumber > 13300 && sorceNumber < 13350) {
        var col3result = 1538;
      } else if (sorceNumber > 13350 && sorceNumber < 13400) {
        var col3result = 1545;
      } else if (sorceNumber > 13400 && sorceNumber < 13450) {
        var col3result = 1553;
      } else if (sorceNumber > 13450 && sorceNumber < 13500) {
        var col3result = 1560;
      } else if (sorceNumber > 13500 && sorceNumber < 13550) {
        var col3result = 1568;
      } else if (sorceNumber > 13550 && sorceNumber < 13600) {
        var col3result = 1575;
      } else if (sorceNumber > 13600 && sorceNumber < 13650) {
        var col3result = 1583;
      } else if (sorceNumber > 13650 && sorceNumber < 13700) {
        var col3result = 1590;
      } else if (sorceNumber > 13700 && sorceNumber < 13750) {
        var col3result = 1598;
      } else if (sorceNumber > 13750 && sorceNumber < 13800) {
        var col3result = 1605;
      } else if (sorceNumber > 13800 && sorceNumber < 13850) {
        var col3result = 1613;
      } else if (sorceNumber > 13850 && sorceNumber < 13900) {
        var col3result = 1620;
      } else if (sorceNumber > 13900 && sorceNumber < 13950) {
        var col3result = 1628;
      } else if (sorceNumber > 13950 && sorceNumber < 14000) {
        var col3result = 1635;
      } else if (sorceNumber > 14000 && sorceNumber < 14050) {
        var col3result = 1643;
      } else if (sorceNumber > 14050 && sorceNumber < 14100) {
        var col3result = 1650;
      } else if (sorceNumber > 14100 && sorceNumber < 14150) {
        var col3result = 1658;
      } else if (sorceNumber > 14150 && sorceNumber < 14200) {
        var col3result = 1665;
      } else if (sorceNumber > 14200 && sorceNumber < 14250) {
        var col3result = 1673;
      } else if (sorceNumber > 14250 && sorceNumber < 14300) {
        var col3result = 1680;
      } else if (sorceNumber > 14300 && sorceNumber < 14350) {
        var col3result = 1688;
      } else if (sorceNumber > 14350 && sorceNumber < 14400) {
        var col3result = 1695;
      } else if (sorceNumber > 14400 && sorceNumber < 14450) {
        var col3result = 1703;
      } else if (sorceNumber > 14450 && sorceNumber < 14500) {
        var col3result = 1710;
      } else if (sorceNumber > 14500 && sorceNumber < 14550) {
        var col3result = 1718;
      } else if (sorceNumber > 14550 && sorceNumber < 14600) {
        var col3result = 1725;
      } else if (sorceNumber > 14600 && sorceNumber < 14650) {
        var col3result = 1733;
      } else if (sorceNumber > 14650 && sorceNumber < 14700) {
        var col3result = 1740;
      } else if (sorceNumber > 14700 && sorceNumber < 14750) {
        var col3result = 1748;
      } else if (sorceNumber > 14750 && sorceNumber < 14800) {
        var col3result = 1755;
      } else if (sorceNumber > 14800 && sorceNumber < 14850) {
        var col3result = 1763;
      } else if (sorceNumber > 14850 && sorceNumber < 14900) {
        var col3result = 1770;
      } else if (sorceNumber > 14900 && sorceNumber < 14950) {
        var col3result = 1778;
      } else if (sorceNumber > 14950 && sorceNumber < 15000) {
        var col3result = 1785;
      } else if (sorceNumber > 15000 && sorceNumber < 15050) {
        var col3result = 1793;
      } else if (sorceNumber > 15050 && sorceNumber < 15100) {
        var col3result = 1800;
      } else if (sorceNumber > 15100 && sorceNumber < 15150) {
        var col3result = 1808;
      } else if (sorceNumber > 15150 && sorceNumber < 15200) {
        var col3result = 1815;
      } else if (sorceNumber > 15200 && sorceNumber < 15250) {
        var col3result = 1823;
      } else if (sorceNumber > 15250 && sorceNumber < 15300) {
        var col3result = 1830;
      } else if (sorceNumber > 15300 && sorceNumber < 15350) {
        var col3result = 1838;
      } else if (sorceNumber > 15350 && sorceNumber < 15400) {
        var col3result = 1845;
      } else if (sorceNumber > 15400 && sorceNumber < 15450) {
        var col3result = 1853;
      } else if (sorceNumber > 15450 && sorceNumber < 15500) {
        var col3result = 1860;
      } else if (sorceNumber > 15500 && sorceNumber < 15550) {
        var col3result = 1868;
      } else if (sorceNumber > 15550 && sorceNumber < 15600) {
        var col3result = 1875;
      } else if (sorceNumber > 15600 && sorceNumber < 15650) {
        var col3result = 1883;
      } else if (sorceNumber > 15650 && sorceNumber < 15700) {
        var col3result = 1890;
      } else if (sorceNumber > 15700 && sorceNumber < 15750) {
        var col3result = 1898;
      } else if (sorceNumber > 15750 && sorceNumber < 15800) {
        var col3result = 1905;
      } else if (sorceNumber > 15800 && sorceNumber < 15850) {
        var col3result = 1913;
      } else if (sorceNumber > 15850 && sorceNumber < 15900) {
        var col3result = 1920;
      } else if (sorceNumber > 15900 && sorceNumber < 15950) {
        var col3result = 1928;
      } else if (sorceNumber > 15950 && sorceNumber < 16000) {
        var col3result = 1935;
      } else if (sorceNumber > 16000 && sorceNumber < 16050) {
        var col3result = 1943;
      } else if (sorceNumber > 16050 && sorceNumber < 16100) {
        var col3result = 1950;
      } else if (sorceNumber > 16100 && sorceNumber < 16150) {
        var col3result = 1958;
      } else if (sorceNumber > 16150 && sorceNumber < 16200) {
        var col3result = 1965;
      } else if (sorceNumber > 16200 && sorceNumber < 16250) {
        var col3result = 1973;
      } else if (sorceNumber > 16250 && sorceNumber < 16300) {
        var col3result = 1980;
      } else if (sorceNumber > 16300 && sorceNumber < 16350) {
        var col3result = 1988;
      } else if (sorceNumber > 16350 && sorceNumber < 16400) {
        var col3result = 1995;
      } else if (sorceNumber > 16400 && sorceNumber < 16450) {
        var col3result = 2003;
      } else if (sorceNumber > 16450 && sorceNumber < 16500) {
        var col3result = 2010;
      } else if (sorceNumber > 16500 && sorceNumber < 16550) {
        var col3result = 2018;
      } else if (sorceNumber > 16550 && sorceNumber < 16600) {
        var col3result = 2025;
      } else if (sorceNumber > 16600 && sorceNumber < 16650) {
        var col3result = 2033;
      } else if (sorceNumber > 16650 && sorceNumber < 16700) {
        var col3result = 2040;
      } else if (sorceNumber > 16700 && sorceNumber < 16750) {
        var col3result = 2048;
      } else if (sorceNumber > 16750 && sorceNumber < 16800) {
        var col3result = 2055;
      } else if (sorceNumber > 16800 && sorceNumber < 16850) {
        var col3result = 2063;
      } else if (sorceNumber > 16850 && sorceNumber < 16900) {
        var col3result = 2070;
      } else if (sorceNumber > 16900 && sorceNumber < 16950) {
        var col3result = 2078;
      } else if (sorceNumber > 16950 && sorceNumber < 17000) {
        var col3result = 2085;
      } else if (sorceNumber > 17000 && sorceNumber < 17050) {
        var col3result = 2093;
      } else if (sorceNumber > 17050 && sorceNumber < 17100) {
        var col3result = 2100;
      } else if (sorceNumber > 17100 && sorceNumber < 17150) {
        var col3result = 2108;
      } else if (sorceNumber > 17150 && sorceNumber < 17200) {
        var col3result = 2115;
      } else if (sorceNumber > 17200 && sorceNumber < 17250) {
        var col3result = 2123;
      } else if (sorceNumber > 17250 && sorceNumber < 17300) {
        var col3result = 2130;
      } else if (sorceNumber > 17300 && sorceNumber < 17350) {
        var col3result = 2138;
      } else if (sorceNumber > 17350 && sorceNumber < 17400) {
        var col3result = 2145;
      } else if (sorceNumber > 17400 && sorceNumber < 17450) {
        var col3result = 2153;
      } else if (sorceNumber > 17450 && sorceNumber < 17500) {
        var col3result = 2160;
      } else if (sorceNumber > 17500 && sorceNumber < 17550) {
        var col3result = 2168;
      } else if (sorceNumber > 17550 && sorceNumber < 17600) {
        var col3result = 2175;
      } else if (sorceNumber > 17600 && sorceNumber < 17650) {
        var col3result = 2183;
      } else if (sorceNumber > 17650 && sorceNumber < 17700) {
        var col3result = 2190;
      } else if (sorceNumber > 17700 && sorceNumber < 17750) {
        var col3result = 2198;
      } else if (sorceNumber > 17750 && sorceNumber < 17800) {
        var col3result = 2205;
      } else if (sorceNumber > 17800 && sorceNumber < 17850) {
        var col3result = 2213;
      } else if (sorceNumber > 17850 && sorceNumber < 17900) {
        var col3result = 2220;
      } else if (sorceNumber > 17900 && sorceNumber < 17950) {
        var col3result = 2228;
      } else if (sorceNumber > 17950 && sorceNumber < 18000) {
        var col3result = 2235;
      } else if (sorceNumber > 18000 && sorceNumber < 18050) {
        var col3result = 2243;
      } else if (sorceNumber > 18050 && sorceNumber < 18100) {
        var col3result = 2250;
      } else if (sorceNumber > 18100 && sorceNumber < 18150) {
        var col3result = 2258;
      } else if (sorceNumber > 18150 && sorceNumber < 18200) {
        var col3result = 2265;
      } else if (sorceNumber > 18200 && sorceNumber < 18250) {
        var col3result = 2273;
      } else if (sorceNumber > 18250 && sorceNumber < 18300) {
        var col3result = 2280;
      } else if (sorceNumber > 18300 && sorceNumber < 18350) {
        var col3result = 2288;
      } else if (sorceNumber > 18350 && sorceNumber < 18400) {
        var col3result = 2295;
      } else if (sorceNumber > 18400 && sorceNumber < 18450) {
        var col3result = 2303;
      } else if (sorceNumber > 18450 && sorceNumber < 18500) {
        var col3result = 2310;
      } else if (sorceNumber > 18500 && sorceNumber < 18550) {
        var col3result = 2318;
      } else if (sorceNumber > 18550 && sorceNumber < 18600) {
        var col3result = 2325;
      } else if (sorceNumber > 18600 && sorceNumber < 18650) {
        var col3result = 2333;
      } else if (sorceNumber > 18650 && sorceNumber < 18700) {
        var col3result = 2340;
      } else if (sorceNumber > 18700 && sorceNumber < 18750) {
        var col3result = 2348;
      } else if (sorceNumber > 18750 && sorceNumber < 18800) {
        var col3result = 2355;
      } else if (sorceNumber > 18800 && sorceNumber < 18850) {
        var col3result = 2363;
      } else if (sorceNumber > 18850 && sorceNumber < 18900) {
        var col3result = 2370;
      } else if (sorceNumber > 18900 && sorceNumber < 18950) {
        var col3result = 2378;
      } else if (sorceNumber > 18950 && sorceNumber < 19000) {
        var col3result = 2385;
      } else if (sorceNumber > 19000 && sorceNumber < 19050) {
        var col3result = 2393;
      } else if (sorceNumber > 19050 && sorceNumber < 19100) {
        var col3result = 2400;
      } else if (sorceNumber > 19100 && sorceNumber < 19150) {
        var col3result = 2408;
      } else if (sorceNumber > 19150 && sorceNumber < 19200) {
        var col3result = 2415;
      } else if (sorceNumber > 19200 && sorceNumber < 19250) {
        var col3result = 2423;
      } else if (sorceNumber > 19250 && sorceNumber < 19300) {
        var col3result = 2430;
      } else if (sorceNumber > 19300 && sorceNumber < 19350) {
        var col3result = 2438;
      } else if (sorceNumber > 19350 && sorceNumber < 19400) {
        var col3result = 2445;
      } else if (sorceNumber > 19400 && sorceNumber < 19450) {
        var col3result = 2453;
      } else if (sorceNumber > 19450 && sorceNumber < 19500) {
        var col3result = 2460;
      } else if (sorceNumber > 19500 && sorceNumber < 19550) {
        var col3result = 2468;
      } else if (sorceNumber > 19550 && sorceNumber < 19600) {
        var col3result = 2475;
      } else if (sorceNumber > 19600 && sorceNumber < 19650) {
        var col3result = 2483;
      } else if (sorceNumber > 19650 && sorceNumber < 19700) {
        var col3result = 2490;
      } else if (sorceNumber > 19700 && sorceNumber < 19750) {
        var col3result = 2498;
      } else if (sorceNumber > 19750 && sorceNumber < 19800) {
        var col3result = 2505;
      } else if (sorceNumber > 19800 && sorceNumber < 19850) {
        var col3result = 2513;
      } else if (sorceNumber > 19850 && sorceNumber < 19900) {
        var col3result = 2520;
      } else if (sorceNumber > 19900 && sorceNumber < 19950) {
        var col3result = 2528;
      } else if (sorceNumber > 19950 && sorceNumber < 20000) {
        var col3result = 2535;
      } else if (sorceNumber > 20000 && sorceNumber < 20050) {
        var col3result = 2543;
      } else if (sorceNumber > 20050 && sorceNumber < 20100) {
        var col3result = 2550;
      } else if (sorceNumber > 20100 && sorceNumber < 20150) {
        var col3result = 2558;
      } else if (sorceNumber > 20150 && sorceNumber < 20200) {
        var col3result = 2565;
      } else if (sorceNumber > 20200 && sorceNumber < 20250) {
        var col3result = 2573;
      } else if (sorceNumber > 20250 && sorceNumber < 20300) {
        var col3result = 2580;
      } else if (sorceNumber > 20300 && sorceNumber < 20350) {
        var col3result = 2588;
      } else if (sorceNumber > 20350 && sorceNumber < 20400) {
        var col3result = 2595;
      } else if (sorceNumber > 20400 && sorceNumber < 20450) {
        var col3result = 2603;
      } else if (sorceNumber > 20450 && sorceNumber < 20500) {
        var col3result = 2610;
      } else if (sorceNumber > 20500 && sorceNumber < 20550) {
        var col3result = 2618;
      } else if (sorceNumber > 20550 && sorceNumber < 20600) {
        var col3result = 2625;
      } else if (sorceNumber > 20600 && sorceNumber < 20650) {
        var col3result = 2633;
      } else if (sorceNumber > 20650 && sorceNumber < 20700) {
        var col3result = 2640;
      } else if (sorceNumber > 20700 && sorceNumber < 20750) {
        var col3result = 2648;
      } else if (sorceNumber > 20750 && sorceNumber < 20800) {
        var col3result = 2655;
      } else if (sorceNumber > 20800 && sorceNumber < 20850) {
        var col3result = 2663;
      } else if (sorceNumber > 20850 && sorceNumber < 20900) {
        var col3result = 2670;
      } else if (sorceNumber > 20900 && sorceNumber < 20950) {
        var col3result = 2678;
      } else if (sorceNumber > 20950 && sorceNumber < 21000) {
        var col3result = 2685;
      }
      thirdcols.val(col3result);
      fieldSeven.val(Math.round(fieldFourVal / 100 * 6.2));
      fieldEight.val(Math.round(fieldFourVal / 100 * 1.45));
      var minNumberThree = $("input[name=number-9-from]").val();
      var maxNumberThree = $("input[name=number-9-to]").val();
      randomNumberFromRangeThree(minNumberThree / 2, maxNumberThree / 2);

      function randomNumberFromRangeThree(min, max) {
        var randomNumberThree = Math.floor(Math.random() * (max - min + 1) + min);
        fieldNine.val(randomNumberThree * 2);
      }
      randomNumberFromRangeFour(minNumberFour / 2, maxNumberFour / 2);

      function randomNumberFromRangeFour(min, max) {
        var randomNumberFour = Math.floor(Math.random() * (max - min + 1) + min);
        fieldTen.val(randomNumberFour * 2);
      }
      $('.resulblock').html(
        // 'Occupation: ' + occupationField.val() + '<br /><br />' +
        fieldFour.val() + '<br />' + col3result + '<br />' +
        // fieldSix.val() + '<br />' +
        fieldSeven.val() + '<br />' + fieldEight.val() + '<br />' + fieldNine.val() + ' - gambling<br />'
        //  + fieldTen.val() + ' - jscode'
      );
    })
    // random number generator
  function randNumFrRang(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
  }
  // random month generator
  function randomMonth() {
    var randMnth = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    if (randMnth < 10) {
      randMnth = '0' + randMnth;
    }
    return randMnth;
  }
  $('.state-or').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'OR<br />';
    secHtml += '3' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-ca').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'CA<br />';
    secHtml += 'B2' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-il').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'IL<br />';
    secHtml += 'D40' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-al').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'AL<br />';
    secHtml += '8' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-ny').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'NY<br />';
    secHtml += '4' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-tx').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'TX<br />';
    secHtml += '1' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-id').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'ID<br />';
    secHtml += 'A2' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-ga').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'GA<br />';
    secHtml += '1' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-fl').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'FL<br />';
    secHtml += 'L2' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '0' + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-az').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'AZ<br />';
    secHtml += 'D5' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-ar').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'AR<br />';
    secHtml += '9' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.state-ak').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var startYear = randNumFrRang(2009, 2014);
    var endYear = startYear + 8;
    var secHtml = 'AK<br />';
    secHtml += '5' + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + randNumFrRang(0, 9) + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + startYear + '<br/>';
    secHtml += randomMonth() + '/' + randomMonth() + '/' + endYear;
    $('.resulblock-second').html(secHtml);
  });
  $('.secret').on('click', function(e) {
    e.preventDefault();
    $('.button-active').removeClass('button-active');
    $(this).addClass('button-active');
    var generatedPassword = getRandomFromArray(passSymbChar) + getRandomFromPossible(passNumChar) + getRandomFromPossible(passAlphaChar) + getRandomFromPossible(passAlphaSmChar) + getRandomFromArray(passSymbChar);
    var secHtml = '';
    secHtml += 'HR pass: ' + generatedPassword + '<br/>' + 'Q1: ' + '<span class="text-1"></span>' + '<br/>' + 'Q2: ' + '<span class="text-2"></span>' + '<br/>' + 'Q3: ' + '<span class="text-3"></span>' + '<br/>';
    $('.resulblock-third').html(secHtml);
    $.get('text-1.txt', function(data) {
      var lines1 = data.split('\n');
      var text1 = lines1[Math.floor(Math.random() * lines1.length)];
      $('.text-1').html(text1);
    });
    $.get('text-2.txt', function(data) {
      var lines2 = data.split('\n');
      var text2 = lines2[Math.floor(Math.random() * lines2.length)];
      $('.text-2').html(text2);
    });
    $.get('text-3.txt', function(data) {
      var lines3 = data.split('\n');
      var text3 = lines3[Math.floor(Math.random() * lines3.length)];
      $('.text-3').html(text3);
    });
  });
  var client = new ZeroClipboard($('.resulblock'));
  client.on('ready', function(event) {
    // console.log( 'movie is loaded' );
    client.on('copy', function(event) {
      event.clipboardData.setData('text/plain', event.target.innerText);
    });
    client.on('aftercopy', function(event) {
      console.log('Copied text to clipboard: ' + event.data['text/plain']);
    });
  });
  client.on('error', function(event) {
    // console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
    ZeroClipboard.destroy();
  });
  var client2 = new ZeroClipboard($('.resulblock-second'));
  client2.on('ready', function(event) {
    // console.log( 'movie is loaded' );
    client2.on('copy', function(event) {
      event.clipboardData.setData('text/plain', event.target.innerText);
    });
    client2.on('aftercopy', function(event) {
      console.log('Copied text to clipboard: ' + event.data['text/plain']);
    });
  });
  client2.on('error', function(event) {
    // console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
    ZeroClipboard.destroy();
  });

  var client3 = new ZeroClipboard($('.resulblock-third'));
  client3.on('ready', function(event) {
    // console.log( 'movie is loaded' );
    client3.on('copy', function(event) {
      event.clipboardData.setData('text/plain', event.target.innerText);
    });
    client3.on('aftercopy', function(event) {
      console.log('Copied text to clipboard: ' + event.data['text/plain']);
    });
  });
  client3.on('error', function(event) {
    // console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
    ZeroClipboard.destroy();
  });

  var client4 = new ZeroClipboard($('.resulblock-fourth'));
  client4.on('ready', function(event) {
    // console.log( 'movie is loaded' );
    client4.on('copy', function(event) {
      event.clipboardData.setData('text/plain', event.target.innerText);
    });
    client4.on('aftercopy', function(event) {
      console.log('Copied text to clipboard: ' + event.data['text/plain']);
    });
  });
  client4.on('error', function(event) {
    // console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
    ZeroClipboard.destroy();
  });

});


$('.secret-fourth').on('click', function(e) {
  e.preventDefault();

  $('.button-active').removeClass('button-active');
  $(this).addClass('button-active');

  $('.resulblock-fourth').html('');


  var passSymbChar = ['!', '@', '#', '$', '%', '&', '*'];
  var passNumChar = "123456789";
  var passAlphaChar = "ABCDEFGHIJKLMNPQRSTUVWXYZ"; // without "O" !!
  var passAlphaSmChar = "abcdefghijklmnpqrstuvwxyz"; // without "o" !!

  function getRandomFromArray(array) {
    var rand = array[Math.floor(Math.random() * array.length)];
    return rand;
  }

  function getRandomFromPossible(possible) {
    var text = "";
    for (var i = 0; i < 1; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

  var generatedPassword = getRandomFromPossible(passNumChar) + getRandomFromPossible(passAlphaChar) + getRandomFromPossible(passAlphaSmChar) + getRandomFromPossible(passNumChar) + getRandomFromPossible(passAlphaChar) + getRandomFromPossible(passAlphaSmChar) + getRandomFromPossible(passAlphaSmChar) + getRandomFromArray(passSymbChar);

  $('.form-fourth--pass').val(generatedPassword);

  $('.resulblock-fourth').append('pass: ' + generatedPassword + '<br />')

  console.log('started')

  $.get('city.txt', function(data) {
    var lines1 = data.split('\n');
    var text1 = lines1[Math.floor(Math.random() * lines1.length)];
    $('.form-fourth--q1').val(text1);
    $('.resulblock-fourth').append('Q1(city): ' + text1 + '<br />')
  });

  $.get('car.txt', function(data) {
    var lines2 = data.split('\n');
    var text2 = lines2[Math.floor(Math.random() * lines2.length)];
    $('.form-fourth--q2').val(text2);
    $('.resulblock-fourth').append('Q2(car): ' + text2 + '<br />')
  });

  $.get('hero.txt', function(data) {
    var lines3 = data.split('\n');
    var text3 = lines3[Math.floor(Math.random() * lines3.length)];
    $('.form-fourth--q3').val(text3);
    $('.resulblock-fourth').append('Q3(hero): ' + text3 + '<br />')
  });

});
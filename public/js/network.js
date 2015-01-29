function progress(t, e) {
        var i = t * e.width() / 100;
        e.find("div").animate({
            width: i
        }, 500)
    }! function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t) {
            var e = t.length,
                i = se.type(t);
            return "function" === i || se.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
        }

        function n(t, e, i) {
            if (se.isFunction(e)) return se.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return se.grep(t, function(t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (de.test(e)) return se.filter(e, t, i);
                e = se.filter(e, t)
            }
            return se.grep(t, function(t) {
                return se.inArray(t, e) >= 0 !== i
            })
        }

        function s(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function o(t) {
            var e = ye[t] = {};
            return se.each(t.match(be) || [], function(t, i) {
                e[i] = !0
            }), e
        }

        function a() {
            fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", r, !1), t.removeEventListener("load", r, !1)) : (fe.detachEvent("onreadystatechange", r), t.detachEvent("onload", r))
        }

        function r() {
            (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (a(), se.ready())
        }

        function l(t, e, i) {
            if (void 0 === i && 1 === t.nodeType) {
                var n = "data-" + e.replace(Te, "-$1").toLowerCase();
                if (i = t.getAttribute(n), "string" == typeof i) {
                    try {
                        i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : Ce.test(i) ? se.parseJSON(i) : i
                    } catch (s) {}
                    se.data(t, e, i)
                } else i = void 0
            }
            return i
        }

        function h(t) {
            var e;
            for (e in t)
                if (("data" !== e || !se.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function c(t, e, i, n) {
            if (se.acceptData(t)) {
                var s, o, a = se.expando,
                    r = t.nodeType,
                    l = r ? se.cache : t,
                    h = r ? t[a] : t[a] && a;
                if (h && l[h] && (n || l[h].data) || void 0 !== i || "string" != typeof e) return h || (h = r ? t[a] = Q.pop() || se.guid++ : a), l[h] || (l[h] = r ? {} : {
                    toJSON: se.noop
                }), ("object" == typeof e || "function" == typeof e) && (n ? l[h] = se.extend(l[h], e) : l[h].data = se.extend(l[h].data, e)), o = l[h], n || (o.data || (o.data = {}), o = o.data), void 0 !== i && (o[se.camelCase(e)] = i), "string" == typeof e ? (s = o[e], null == s && (s = o[se.camelCase(e)])) : s = o, s
            }
        }

        function u(t, e, i) {
            if (se.acceptData(t)) {
                var n, s, o = t.nodeType,
                    a = o ? se.cache : t,
                    r = o ? t[se.expando] : se.expando;
                if (a[r]) {
                    if (e && (n = i ? a[r] : a[r].data)) {
                        se.isArray(e) ? e = e.concat(se.map(e, se.camelCase)) : e in n ? e = [e] : (e = se.camelCase(e), e = e in n ? [e] : e.split(" ")), s = e.length;
                        for (; s--;) delete n[e[s]];
                        if (i ? !h(n) : !se.isEmptyObject(n)) return
                    }(i || (delete a[r].data, h(a[r]))) && (o ? se.cleanData([t], !0) : ie.deleteExpando || a != a.window ? delete a[r] : a[r] = null)
                }
            }
        }

        function d() {
            return !0
        }

        function p() {
            return !1
        }

        function f() {
            try {
                return fe.activeElement
            } catch (t) {}
        }

        function m(t) {
            var e = ze.split("|"),
                i = t.createDocumentFragment();
            if (i.createElement)
                for (; e.length;) i.createElement(e.pop());
            return i
        }

        function g(t, e) {
            var i, n, s = 0,
                o = typeof t.getElementsByTagName !== ke ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== ke ? t.querySelectorAll(e || "*") : void 0;
            if (!o)
                for (o = [], i = t.childNodes || t; null != (n = i[s]); s++) !e || se.nodeName(n, e) ? o.push(n) : se.merge(o, g(n, e));
            return void 0 === e || e && se.nodeName(t, e) ? se.merge([t], o) : o
        }

        function v(t) {
            Ie.test(t.type) && (t.defaultChecked = t.checked)
        }

        function _(t, e) {
            return se.nodeName(t, "table") && se.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function b(t) {
            return t.type = (null !== se.find.attr(t, "type")) + "/" + t.type, t
        }

        function y(t) {
            var e = Xe.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function w(t, e) {
            for (var i, n = 0; null != (i = t[n]); n++) se._data(i, "globalEval", !e || se._data(e[n], "globalEval"))
        }

        function x(t, e) {
            if (1 === e.nodeType && se.hasData(t)) {
                var i, n, s, o = se._data(t),
                    a = se._data(e, o),
                    r = o.events;
                if (r) {
                    delete a.handle, a.events = {};
                    for (i in r)
                        for (n = 0, s = r[i].length; s > n; n++) se.event.add(e, i, r[i][n])
                }
                a.data && (a.data = se.extend({}, a.data))
            }
        }

        function k(t, e) {
            var i, n, s;
            if (1 === e.nodeType) {
                if (i = e.nodeName.toLowerCase(), !ie.noCloneEvent && e[se.expando]) {
                    s = se._data(e);
                    for (n in s.events) se.removeEvent(e, n, s.handle);
                    e.removeAttribute(se.expando)
                }
                "script" === i && e.text !== t.text ? (b(e).text = t.text, y(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ie.html5Clone && t.innerHTML && !se.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Ie.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
            }
        }

        function C(e, i) {
            var n, s = se(i.createElement(e)).appendTo(i.body),
                o = t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(s[0])) ? n.display : se.css(s[0], "display");
            return s.detach(), o
        }

        function T(t) {
            var e = fe,
                i = Je[t];
            return i || (i = C(t, e), "none" !== i && i || (Ze = (Ze || se("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Ze[0].contentWindow || Ze[0].contentDocument).document, e.write(), e.close(), i = C(t, e), Ze.detach()), Je[t] = i), i
        }

        function D(t, e) {
            return {
                get: function() {
                    var i = t();
                    if (null != i) return i ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function S(t, e) {
            if (e in t) return e;
            for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = di.length; s--;)
                if (e = di[s] + i, e in t) return e;
            return n
        }

        function E(t, e) {
            for (var i, n, s, o = [], a = 0, r = t.length; r > a; a++) n = t[a], n.style && (o[a] = se._data(n, "olddisplay"), i = n.style.display, e ? (o[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && Ee(n) && (o[a] = se._data(n, "olddisplay", T(n.nodeName)))) : (s = Ee(n), (i && "none" !== i || !s) && se._data(n, "olddisplay", s ? i : se.css(n, "display"))));
            for (a = 0; r > a; a++) n = t[a], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[a] || "" : "none"));
            return t
        }

        function A(t, e, i) {
            var n = li.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
        }

        function I(t, e, i, n, s) {
            for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === i && (a += se.css(t, i + Se[o], !0, s)), n ? ("content" === i && (a -= se.css(t, "padding" + Se[o], !0, s)), "margin" !== i && (a -= se.css(t, "border" + Se[o] + "Width", !0, s))) : (a += se.css(t, "padding" + Se[o], !0, s), "padding" !== i && (a += se.css(t, "border" + Se[o] + "Width", !0, s)));
            return a
        }

        function P(t, e, i) {
            var n = !0,
                s = "width" === e ? t.offsetWidth : t.offsetHeight,
                o = ti(t),
                a = ie.boxSizing && "border-box" === se.css(t, "boxSizing", !1, o);
            if (0 >= s || null == s) {
                if (s = ei(t, e, o), (0 > s || null == s) && (s = t.style[e]), ni.test(s)) return s;
                n = a && (ie.boxSizingReliable() || s === t.style[e]), s = parseFloat(s) || 0
            }
            return s + I(t, e, i || (a ? "border" : "content"), n, o) + "px"
        }

        function M(t, e, i, n, s) {
            return new M.prototype.init(t, e, i, n, s)
        }

        function F() {
            return setTimeout(function() {
                pi = void 0
            }), pi = se.now()
        }

        function N(t, e) {
            var i, n = {
                    height: t
                },
                s = 0;
            for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = Se[s], n["margin" + i] = n["padding" + i] = t;
            return e && (n.opacity = n.width = t), n
        }

        function H(t, e, i) {
            for (var n, s = (bi[e] || []).concat(bi["*"]), o = 0, a = s.length; a > o; o++)
                if (n = s[o].call(i, e, t)) return n
        }

        function z(t, e, i) {
            var n, s, o, a, r, l, h, c, u = this,
                d = {},
                p = t.style,
                f = t.nodeType && Ee(t),
                m = se._data(t, "fxshow");
            i.queue || (r = se._queueHooks(t, "fx"), null == r.unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function() {
                r.unqueued || l()
            }), r.unqueued++, u.always(function() {
                u.always(function() {
                    r.unqueued--, se.queue(t, "fx").length || r.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], h = se.css(t, "display"), c = "none" === h ? se._data(t, "olddisplay") || T(t.nodeName) : h, "inline" === c && "none" === se.css(t, "float") && (ie.inlineBlockNeedsLayout && "inline" !== T(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", ie.shrinkWrapBlocks() || u.always(function() {
                p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (s = e[n], mi.exec(s)) {
                    if (delete e[n], o = o || "toggle" === s, s === (f ? "hide" : "show")) {
                        if ("show" !== s || !m || void 0 === m[n]) continue;
                        f = !0
                    }
                    d[n] = m && m[n] || se.style(t, n)
                } else h = void 0;
            if (se.isEmptyObject(d)) "inline" === ("none" === h ? T(t.nodeName) : h) && (p.display = h);
            else {
                m ? "hidden" in m && (f = m.hidden) : m = se._data(t, "fxshow", {}), o && (m.hidden = !f), f ? se(t).show() : u.done(function() {
                    se(t).hide()
                }), u.done(function() {
                    var e;
                    se._removeData(t, "fxshow");
                    for (e in d) se.style(t, e, d[e])
                });
                for (n in d) a = H(f ? m[n] : 0, n, u), n in m || (m[n] = a.start, f && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function j(t, e) {
            var i, n, s, o, a;
            for (i in t)
                if (n = se.camelCase(i), s = e[n], o = t[i], se.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), a = se.cssHooks[n], a && "expand" in a) {
                    o = a.expand(o), delete t[n];
                    for (i in o) i in t || (t[i] = o[i], e[i] = s)
                } else e[n] = s
        }

        function O(t, e, i) {
            var n, s, o = 0,
                a = _i.length,
                r = se.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (s) return !1;
                    for (var e = pi || F(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, o = 1 - n, a = 0, l = h.tweens.length; l > a; a++) h.tweens[a].run(o);
                    return r.notifyWith(t, [h, o, i]), 1 > o && l ? i : (r.resolveWith(t, [h]), !1)
                },
                h = r.promise({
                    elem: t,
                    props: se.extend({}, e),
                    opts: se.extend(!0, {
                        specialEasing: {}
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: pi || F(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = se.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                        return h.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? h.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; n > i; i++) h.tweens[i].run(1);
                        return e ? r.resolveWith(t, [h, e]) : r.rejectWith(t, [h, e]), this
                    }
                }),
                c = h.props;
            for (j(c, h.opts.specialEasing); a > o; o++)
                if (n = _i[o].call(h, t, c, h.opts)) return n;
            return se.map(c, H, h), se.isFunction(h.opts.start) && h.opts.start.call(t, h), se.fx.timer(se.extend(l, {
                elem: t,
                anim: h,
                queue: h.opts.queue
            })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
        }

        function W(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, s = 0,
                    o = e.toLowerCase().match(be) || [];
                if (se.isFunction(i))
                    for (; n = o[s++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function R(t, e, i, n) {
            function s(r) {
                var l;
                return o[r] = !0, se.each(t[r] || [], function(t, r) {
                    var h = r(e, i, n);
                    return "string" != typeof h || a || o[h] ? a ? !(l = h) : void 0 : (e.dataTypes.unshift(h), s(h), !1)
                }), l
            }
            var o = {},
                a = t === $i;
            return s(e.dataTypes[0]) || !o["*"] && s("*")
        }

        function q(t, e) {
            var i, n, s = se.ajaxSettings.flatOptions || {};
            for (n in e) void 0 !== e[n] && ((s[n] ? t : i || (i = {}))[n] = e[n]);
            return i && se.extend(!0, t, i), t
        }

        function L(t, e, i) {
            for (var n, s, o, a, r = t.contents, l = t.dataTypes;
                "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
            if (s)
                for (a in r)
                    if (r[a] && r[a].test(s)) {
                        l.unshift(a);
                        break
                    }
            if (l[0] in i) o = l[0];
            else {
                for (a in i) {
                    if (!l[0] || t.converters[a + " " + l[0]]) {
                        o = a;
                        break
                    }
                    n || (n = a)
                }
                o = o || n
            }
            return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
        }

        function $(t, e, i, n) {
            var s, o, a, r, l, h = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (a in t.converters) h[a.toLowerCase()] = t.converters[a];
            for (o = c.shift(); o;)
                if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                    if ("*" === o) o = l;
                    else if ("*" !== l && l !== o) {
                if (a = h[l + " " + o] || h["* " + o], !a)
                    for (s in h)
                        if (r = s.split(" "), r[1] === o && (a = h[l + " " + r[0]] || h["* " + r[0]])) {
                            a === !0 ? a = h[s] : h[s] !== !0 && (o = r[0], c.unshift(r[1]));
                            break
                        }
                if (a !== !0)
                    if (a && t["throws"]) e = a(e);
                    else try {
                        e = a(e)
                    } catch (u) {
                        return {
                            state: "parsererror",
                            error: a ? u : "No conversion from " + l + " to " + o
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function B(t, e, i, n) {
            var s;
            if (se.isArray(e)) se.each(e, function(e, s) {
                i || Xi.test(t) ? n(t, s) : B(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n)
            });
            else if (i || "object" !== se.type(e)) n(t, e);
            else
                for (s in e) B(t + "[" + s + "]", e[s], i, n)
        }

        function Y() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function U() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function X(t) {
            return se.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }
        var Q = [],
            K = Q.slice,
            V = Q.concat,
            G = Q.push,
            Z = Q.indexOf,
            J = {},
            te = J.toString,
            ee = J.hasOwnProperty,
            ie = {},
            ne = "1.11.1",
            se = function(t, e) {
                return new se.fn.init(t, e)
            },
            oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ae = /^-ms-/,
            re = /-([\da-z])/gi,
            le = function(t, e) {
                return e.toUpperCase()
            };
        se.fn = se.prototype = {
            jquery: ne,
            constructor: se,
            selector: "",
            length: 0,
            toArray: function() {
                return K.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : K.call(this)
            },
            pushStack: function(t) {
                var e = se.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t, e) {
                return se.each(this, t, e)
            },
            map: function(t) {
                return this.pushStack(se.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(K.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: G,
            sort: Q.sort,
            splice: Q.splice
        }, se.extend = se.fn.extend = function() {
            var t, e, i, n, s, o, a = arguments[0] || {},
                r = 1,
                l = arguments.length,
                h = !1;
            for ("boolean" == typeof a && (h = a, a = arguments[r] || {}, r++), "object" == typeof a || se.isFunction(a) || (a = {}), r === l && (a = this, r--); l > r; r++)
                if (null != (s = arguments[r]))
                    for (n in s) t = a[n], i = s[n], a !== i && (h && i && (se.isPlainObject(i) || (e = se.isArray(i))) ? (e ? (e = !1, o = t && se.isArray(t) ? t : []) : o = t && se.isPlainObject(t) ? t : {}, a[n] = se.extend(h, o, i)) : void 0 !== i && (a[n] = i));
            return a
        }, se.extend({
            expando: "jQuery" + (ne + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === se.type(t)
            },
            isArray: Array.isArray || function(t) {
                return "array" === se.type(t)
            },
            isWindow: function(t) {
                return null != t && t == t.window
            },
            isNumeric: function(t) {
                return !se.isArray(t) && t - parseFloat(t) >= 0
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            isPlainObject: function(t) {
                var e;
                if (!t || "object" !== se.type(t) || t.nodeType || se.isWindow(t)) return !1;
                try {
                    if (t.constructor && !ee.call(t, "constructor") && !ee.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (i) {
                    return !1
                }
                if (ie.ownLast)
                    for (e in t) return ee.call(t, e);
                for (e in t);
                return void 0 === e || ee.call(t, e)
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? J[te.call(t)] || "object" : typeof t
            },
            globalEval: function(e) {
                e && se.trim(e) && (t.execScript || function(e) {
                    t.eval.call(t, e)
                })(e)
            },
            camelCase: function(t) {
                return t.replace(ae, "ms-").replace(re, le)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, n) {
                var s, o = 0,
                    a = t.length,
                    r = i(t);
                if (n) {
                    if (r)
                        for (; a > o && (s = e.apply(t[o], n), s !== !1); o++);
                    else
                        for (o in t)
                            if (s = e.apply(t[o], n), s === !1) break
                } else if (r)
                    for (; a > o && (s = e.call(t[o], o, t[o]), s !== !1); o++);
                else
                    for (o in t)
                        if (s = e.call(t[o], o, t[o]), s === !1) break; return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(oe, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? se.merge(n, "string" == typeof t ? [t] : t) : G.call(n, t)), n
            },
            inArray: function(t, e, i) {
                var n;
                if (e) {
                    if (Z) return Z.call(e, t, i);
                    for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                        if (i in e && e[i] === t) return i
                }
                return -1
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, s = t.length; i > n;) t[s++] = e[n++];
                if (i !== i)
                    for (; void 0 !== e[n];) t[s++] = e[n++];
                return t.length = s, t
            },
            grep: function(t, e, i) {
                for (var n, s = [], o = 0, a = t.length, r = !i; a > o; o++) n = !e(t[o], o), n !== r && s.push(t[o]);
                return s
            },
            map: function(t, e, n) {
                var s, o = 0,
                    a = t.length,
                    r = i(t),
                    l = [];
                if (r)
                    for (; a > o; o++) s = e(t[o], o, n), null != s && l.push(s);
                else
                    for (o in t) s = e(t[o], o, n), null != s && l.push(s);
                return V.apply([], l)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, s;
                return "string" == typeof e && (s = t[e], e = t, t = s), se.isFunction(t) ? (i = K.call(arguments, 2), n = function() {
                    return t.apply(e || this, i.concat(K.call(arguments)))
                }, n.guid = t.guid = t.guid || se.guid++, n) : void 0
            },
            now: function() {
                return +new Date
            },
            support: ie
        }), se.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            J["[object " + e + "]"] = e.toLowerCase()
        });
        var he = function(t) {
            function e(t, e, i, n) {
                var s, o, a, r, l, h, u, p, f, m;
                if ((e ? e.ownerDocument || e : R) !== M && P(e), e = e || M, i = i || [], !t || "string" != typeof t) return i;
                if (1 !== (r = e.nodeType) && 9 !== r) return [];
                if (N && !n) {
                    if (s = _e.exec(t))
                        if (a = s[1]) {
                            if (9 === r) {
                                if (o = e.getElementById(a), !o || !o.parentNode) return i;
                                if (o.id === a) return i.push(o), i
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(a)) && O(e, o) && o.id === a) return i.push(o), i
                        } else {
                            if (s[2]) return J.apply(i, e.getElementsByTagName(t)), i;
                            if ((a = s[3]) && w.getElementsByClassName && e.getElementsByClassName) return J.apply(i, e.getElementsByClassName(a)), i
                        }
                    if (w.qsa && (!H || !H.test(t))) {
                        if (p = u = W, f = e, m = 9 === r && t, 1 === r && "object" !== e.nodeName.toLowerCase()) {
                            for (h = T(t), (u = e.getAttribute("id")) ? p = u.replace(ye, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = h.length; l--;) h[l] = p + d(h[l]);
                            f = be.test(t) && c(e.parentNode) || e, m = h.join(",")
                        }
                        if (m) try {
                            return J.apply(i, f.querySelectorAll(m)), i
                        } catch (g) {} finally {
                            u || e.removeAttribute("id")
                        }
                    }
                }
                return S(t.replace(le, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }

            function n(t) {
                return t[W] = !0, t
            }

            function s(t) {
                var e = M.createElement("div");
                try {
                    return !!t(e)
                } catch (i) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function o(t, e) {
                for (var i = t.split("|"), n = t.length; n--;) x.attrHandle[i[n]] = e
            }

            function a(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Q) - (~t.sourceIndex || Q);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function r(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return "input" === i && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function h(t) {
                return n(function(e) {
                    return e = +e, n(function(i, n) {
                        for (var s, o = t([], i.length, e), a = o.length; a--;) i[s = o[a]] && (i[s] = !(n[s] = i[s]))
                    })
                })
            }

            function c(t) {
                return t && typeof t.getElementsByTagName !== X && t
            }

            function u() {}

            function d(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function p(t, e, i) {
                var n = e.dir,
                    s = i && "parentNode" === n,
                    o = L++;
                return e.first ? function(e, i, o) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || s) return t(e, i, o)
                } : function(e, i, a) {
                    var r, l, h = [q, o];
                    if (a) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || s) && t(e, i, a)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || s) {
                                if (l = e[W] || (e[W] = {}), (r = l[n]) && r[0] === q && r[1] === o) return h[2] = r[2];
                                if (l[n] = h, h[2] = t(e, i, a)) return !0
                            }
                }
            }

            function f(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var s = t.length; s--;)
                        if (!t[s](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, i, n) {
                for (var s = 0, o = i.length; o > s; s++) e(t, i[s], n);
                return n
            }

            function g(t, e, i, n, s) {
                for (var o, a = [], r = 0, l = t.length, h = null != e; l > r; r++)(o = t[r]) && (!i || i(o, n, s)) && (a.push(o), h && e.push(r));
                return a
            }

            function v(t, e, i, s, o, a) {
                return s && !s[W] && (s = v(s)), o && !o[W] && (o = v(o, a)), n(function(n, a, r, l) {
                    var h, c, u, d = [],
                        p = [],
                        f = a.length,
                        v = n || m(e || "*", r.nodeType ? [r] : r, []),
                        _ = !t || !n && e ? v : g(v, d, t, r, l),
                        b = i ? o || (n ? t : f || s) ? [] : a : _;
                    if (i && i(_, b, r, l), s)
                        for (h = g(b, p), s(h, [], r, l), c = h.length; c--;)(u = h[c]) && (b[p[c]] = !(_[p[c]] = u));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (h = [], c = b.length; c--;)(u = b[c]) && h.push(_[c] = u);
                                o(null, b = [], h, l)
                            }
                            for (c = b.length; c--;)(u = b[c]) && (h = o ? ee.call(n, u) : d[c]) > -1 && (n[h] = !(a[h] = u))
                        }
                    } else b = g(b === a ? b.splice(f, b.length) : b), o ? o(null, a, b, l) : J.apply(a, b)
                })
            }

            function _(t) {
                for (var e, i, n, s = t.length, o = x.relative[t[0].type], a = o || x.relative[" "], r = o ? 1 : 0, l = p(function(t) {
                        return t === e
                    }, a, !0), h = p(function(t) {
                        return ee.call(e, t) > -1
                    }, a, !0), c = [function(t, i, n) {
                        return !o && (n || i !== E) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n))
                    }]; s > r; r++)
                    if (i = x.relative[t[r].type]) c = [p(f(c), i)];
                    else {
                        if (i = x.filter[t[r].type].apply(null, t[r].matches), i[W]) {
                            for (n = ++r; s > n && !x.relative[t[n].type]; n++);
                            return v(r > 1 && f(c), r > 1 && d(t.slice(0, r - 1).concat({
                                value: " " === t[r - 2].type ? "*" : ""
                            })).replace(le, "$1"), i, n > r && _(t.slice(r, n)), s > n && _(t = t.slice(n)), s > n && d(t))
                        }
                        c.push(i)
                    }
                return f(c)
            }

            function b(t, i) {
                var s = i.length > 0,
                    o = t.length > 0,
                    a = function(n, a, r, l, h) {
                        var c, u, d, p = 0,
                            f = "0",
                            m = n && [],
                            v = [],
                            _ = E,
                            b = n || o && x.find.TAG("*", h),
                            y = q += null == _ ? 1 : Math.random() || .1,
                            w = b.length;
                        for (h && (E = a !== M && a); f !== w && null != (c = b[f]); f++) {
                            if (o && c) {
                                for (u = 0; d = t[u++];)
                                    if (d(c, a, r)) {
                                        l.push(c);
                                        break
                                    }
                                h && (q = y)
                            }
                            s && ((c = !d && c) && p--, n && m.push(c))
                        }
                        if (p += f, s && f !== p) {
                            for (u = 0; d = i[u++];) d(m, v, a, r);
                            if (n) {
                                if (p > 0)
                                    for (; f--;) m[f] || v[f] || (v[f] = G.call(l));
                                v = g(v)
                            }
                            J.apply(l, v), h && !n && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                        }
                        return h && (q = y, E = _), m
                    };
                return s ? n(a) : a
            }
            var y, w, x, k, C, T, D, S, E, A, I, P, M, F, N, H, z, j, O, W = "sizzle" + -new Date,
                R = t.document,
                q = 0,
                L = 0,
                $ = i(),
                B = i(),
                Y = i(),
                U = function(t, e) {
                    return t === e && (I = !0), 0
                },
                X = "undefined",
                Q = 1 << 31,
                K = {}.hasOwnProperty,
                V = [],
                G = V.pop,
                Z = V.push,
                J = V.push,
                te = V.slice,
                ee = V.indexOf || function(t) {
                    for (var e = 0, i = this.length; i > e; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                ie = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ne = "[\\x20\\t\\r\\n\\f]",
                se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                oe = se.replace("w", "w#"),
                ae = "\\[" + ne + "*(" + se + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + oe + "))|)" + ne + "*\\]",
                re = ":(" + se + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)",
                le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
                he = new RegExp("^" + ne + "*," + ne + "*"),
                ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
                ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
                de = new RegExp(re),
                pe = new RegExp("^" + oe + "$"),
                fe = {
                    ID: new RegExp("^#(" + se + ")"),
                    CLASS: new RegExp("^\\.(" + se + ")"),
                    TAG: new RegExp("^(" + se.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + ae),
                    PSEUDO: new RegExp("^" + re),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ie + ")$", "i"),
                    needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
                },
                me = /^(?:input|select|textarea|button)$/i,
                ge = /^h\d$/i,
                ve = /^[^{]+\{\s*\[native \w/,
                _e = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                be = /[+~]/,
                ye = /'|\\/g,
                we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
                xe = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                };
            try {
                J.apply(V = te.call(R.childNodes), R.childNodes), V[R.childNodes.length].nodeType
            } catch (ke) {
                J = {
                    apply: V.length ? function(t, e) {
                        Z.apply(t, te.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            w = e.support = {}, C = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }, P = e.setDocument = function(t) {
                var e, i = t ? t.ownerDocument || t : R,
                    n = i.defaultView;
                return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, F = i.documentElement, N = !C(i), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() {
                    P()
                }, !1) : n.attachEvent && n.attachEvent("onunload", function() {
                    P()
                })), w.attributes = s(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), w.getElementsByTagName = s(function(t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                }), w.getElementsByClassName = ve.test(i.getElementsByClassName) && s(function(t) {
                    return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                }), w.getById = s(function(t) {
                    return F.appendChild(t).id = W, !i.getElementsByName || !i.getElementsByName(W).length
                }), w.getById ? (x.find.ID = function(t, e) {
                    if (typeof e.getElementById !== X && N) {
                        var i = e.getElementById(t);
                        return i && i.parentNode ? [i] : []
                    }
                }, x.filter.ID = function(t) {
                    var e = t.replace(we, xe);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete x.find.ID, x.filter.ID = function(t) {
                    var e = t.replace(we, xe);
                    return function(t) {
                        var i = typeof t.getAttributeNode !== X && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), x.find.TAG = w.getElementsByTagName ? function(t, e) {
                    return typeof e.getElementsByTagName !== X ? e.getElementsByTagName(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        s = 0,
                        o = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return o
                }, x.find.CLASS = w.getElementsByClassName && function(t, e) {
                    return typeof e.getElementsByClassName !== X && N ? e.getElementsByClassName(t) : void 0
                }, z = [], H = [], (w.qsa = ve.test(i.querySelectorAll)) && (s(function(t) {
                    t.innerHTML = "<select msallowclip=''><option selected=''></option></select>", t.querySelectorAll("[msallowclip^='']").length && H.push("[*^$]=" + ne + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || H.push("\\[" + ne + "*(?:value|" + ie + ")"), t.querySelectorAll(":checked").length || H.push(":checked")
                }), s(function(t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && H.push("name" + ne + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), H.push(",.*:")
                })), (w.matchesSelector = ve.test(j = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && s(function(t) {
                    w.disconnectedMatch = j.call(t, "div"), j.call(t, "[s!='']:x"), z.push("!=", re)
                }), H = H.length && new RegExp(H.join("|")), z = z.length && new RegExp(z.join("|")), e = ve.test(F.compareDocumentPosition), O = e || ve.test(F.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, U = e ? function(t, e) {
                    if (t === e) return I = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !w.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === R && O(R, t) ? -1 : e === i || e.ownerDocument === R && O(R, e) ? 1 : A ? ee.call(A, t) - ee.call(A, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return I = !0, 0;
                    var n, s = 0,
                        o = t.parentNode,
                        r = e.parentNode,
                        l = [t],
                        h = [e];
                    if (!o || !r) return t === i ? -1 : e === i ? 1 : o ? -1 : r ? 1 : A ? ee.call(A, t) - ee.call(A, e) : 0;
                    if (o === r) return a(t, e);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (n = e; n = n.parentNode;) h.unshift(n);
                    for (; l[s] === h[s];) s++;
                    return s ? a(l[s], h[s]) : l[s] === R ? -1 : h[s] === R ? 1 : 0
                }, i) : M
            }, e.matches = function(t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== M && P(t), i = i.replace(ue, "='$1']"), !(!w.matchesSelector || !N || z && z.test(i) || H && H.test(i))) try {
                    var n = j.call(t, i);
                    if (n || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (s) {}
                return e(i, M, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== M && P(t), O(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== M && P(t);
                var i = x.attrHandle[e.toLowerCase()],
                    n = i && K.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !N) : void 0;
                return void 0 !== n ? n : w.attributes || !N ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    s = 0;
                if (I = !w.detectDuplicates, A = !w.sortStable && t.slice(0), t.sort(U), I) {
                    for (; e = t[s++];) e === t[s] && (n = i.push(s));
                    for (; n--;) t.splice(i[n], 1)
                }
                return A = null, t
            }, k = e.getText = function(t) {
                var e, i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += k(t)
                    } else if (3 === s || 4 === s) return t.nodeValue
                } else
                    for (; e = t[n++];) i += k(e);
                return i
            }, x = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(we, xe), t[3] = (t[3] || t[4] || t[5] || "").replace(we, xe), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return fe.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && de.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(we, xe).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = $[t + " "];
                        return e || (e = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) && $(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== X && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, i, n) {
                        return function(s) {
                            var o = e.attr(s, t);
                            return null == o ? "!=" === i : i ? (o += "", "=" === i ? o === n : "!=" === i ? o !== n : "^=" === i ? n && 0 === o.indexOf(n) : "*=" === i ? n && o.indexOf(n) > -1 : "$=" === i ? n && o.slice(-n.length) === n : "~=" === i ? (" " + o + " ").indexOf(n) > -1 : "|=" === i ? o === n || o.slice(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, i, n, s) {
                        var o = "nth" !== t.slice(0, 3),
                            a = "last" !== t.slice(-4),
                            r = "of-type" === e;
                        return 1 === n && 0 === s ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var h, c, u, d, p, f, m = o !== a ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                v = r && e.nodeName.toLowerCase(),
                                _ = !l && !r;
                            if (g) {
                                if (o) {
                                    for (; m;) {
                                        for (u = e; u = u[m];)
                                            if (r ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? g.firstChild : g.lastChild], a && _) {
                                    for (c = g[W] || (g[W] = {}), h = c[t] || [], p = h[0] === q && h[1], d = h[0] === q && h[2], u = p && g.childNodes[p]; u = ++p && u && u[m] || (d = p = 0) || f.pop();)
                                        if (1 === u.nodeType && ++d && u === e) {
                                            c[t] = [q, p, d];
                                            break
                                        }
                                } else if (_ && (h = (e[W] || (e[W] = {}))[t]) && h[0] === q) d = h[1];
                                else
                                    for (;
                                        (u = ++p && u && u[m] || (d = p = 0) || f.pop()) && ((r ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++d || (_ && ((u[W] || (u[W] = {}))[t] = [q, d]), u !== e)););
                                return d -= s, d === n || d % n === 0 && d / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) {
                        var s, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[W] ? o(i) : o.length > 1 ? (s = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                            for (var n, s = o(t, i), a = s.length; a--;) n = ee.call(t, s[a]), t[n] = !(e[n] = s[a])
                        }) : function(t) {
                            return o(t, 0, s)
                        }) : o
                    }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = [],
                            i = [],
                            s = D(t.replace(le, "$1"));
                        return s[W] ? n(function(t, e, i, n) {
                            for (var o, a = s(t, null, n, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
                        }) : function(t, n, o) {
                            return e[0] = t, s(e, null, o, i), !i.pop()
                        }
                    }),
                    has: n(function(t) {
                        return function(i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function(t) {
                        return function(e) {
                            return (e.textContent || e.innerText || k(e)).indexOf(t) > -1
                        }
                    }),
                    lang: n(function(t) {
                        return pe.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(we, xe).toLowerCase(),
                            function(e) {
                                var i;
                                do
                                    if (i = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === F
                    },
                    focus: function(t) {
                        return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !x.pseudos.empty(t)
                    },
                    header: function(t) {
                        return ge.test(t.nodeName)
                    },
                    input: function(t) {
                        return me.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: h(function() {
                        return [0]
                    }),
                    last: h(function(t, e) {
                        return [e - 1]
                    }),
                    eq: h(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: h(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: h(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: h(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: h(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (y in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[y] = r(y);
            for (y in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[y] = l(y);
            return u.prototype = x.filters = x.pseudos, x.setFilters = new u, T = e.tokenize = function(t, i) {
                var n, s, o, a, r, l, h, c = B[t + " "];
                if (c) return i ? 0 : c.slice(0);
                for (r = t, l = [], h = x.preFilter; r;) {
                    (!n || (s = he.exec(r))) && (s && (r = r.slice(s[0].length) || r), l.push(o = [])), n = !1, (s = ce.exec(r)) && (n = s.shift(), o.push({
                        value: n,
                        type: s[0].replace(le, " ")
                    }), r = r.slice(n.length));
                    for (a in x.filter) !(s = fe[a].exec(r)) || h[a] && !(s = h[a](s)) || (n = s.shift(), o.push({
                        value: n,
                        type: a,
                        matches: s
                    }), r = r.slice(n.length));
                    if (!n) break
                }
                return i ? r.length : r ? e.error(t) : B(t, l).slice(0)
            }, D = e.compile = function(t, e) {
                var i, n = [],
                    s = [],
                    o = Y[t + " "];
                if (!o) {
                    for (e || (e = T(t)), i = e.length; i--;) o = _(e[i]), o[W] ? n.push(o) : s.push(o);
                    o = Y(t, b(s, n)), o.selector = t
                }
                return o
            }, S = e.select = function(t, e, i, n) {
                var s, o, a, r, l, h = "function" == typeof t && t,
                    u = !n && T(t = h.selector || t);
                if (i = i || [], 1 === u.length) {
                    if (o = u[0] = u[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === e.nodeType && N && x.relative[o[1].type]) {
                        if (e = (x.find.ID(a.matches[0].replace(we, xe), e) || [])[0], !e) return i;
                        h && (e = e.parentNode), t = t.slice(o.shift().value.length)
                    }
                    for (s = fe.needsContext.test(t) ? 0 : o.length; s-- && (a = o[s], !x.relative[r = a.type]);)
                        if ((l = x.find[r]) && (n = l(a.matches[0].replace(we, xe), be.test(o[0].type) && c(e.parentNode) || e))) {
                            if (o.splice(s, 1), t = n.length && d(o), !t) return J.apply(i, n), i;
                            break
                        }
                }
                return (h || D(t, u))(n, e, !N, i, be.test(t) && c(e.parentNode) || e), i
            }, w.sortStable = W.split("").sort(U).join("") === W, w.detectDuplicates = !!I, P(), w.sortDetached = s(function(t) {
                return 1 & t.compareDocumentPosition(M.createElement("div"))
            }), s(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || o("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), w.attributes && s(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || o("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), s(function(t) {
                return null == t.getAttribute("disabled")
            }) || o(ie, function(t, e, i) {
                var n;
                return i ? void 0 : t[e] === !0 ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        se.find = he, se.expr = he.selectors, se.expr[":"] = se.expr.pseudos, se.unique = he.uniqueSort, se.text = he.getText, se.isXMLDoc = he.isXML, se.contains = he.contains;
        var ce = se.expr.match.needsContext,
            ue = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            de = /^.[^:#\[\.,]*$/;
        se.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? se.find.matchesSelector(n, t) ? [n] : [] : se.find.matches(t, se.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, se.fn.extend({
            find: function(t) {
                var e, i = [],
                    n = this,
                    s = n.length;
                if ("string" != typeof t) return this.pushStack(se(t).filter(function() {
                    for (e = 0; s > e; e++)
                        if (se.contains(n[e], this)) return !0
                }));
                for (e = 0; s > e; e++) se.find(t, n[e], i);
                return i = this.pushStack(s > 1 ? se.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            },
            filter: function(t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function(t) {
                return !!n(this, "string" == typeof t && ce.test(t) ? se(t) : t || [], !1).length
            }
        });
        var pe, fe = t.document,
            me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            ge = se.fn.init = function(t, e) {
                var i, n;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : me.exec(t), !i || !i[1] && e) return !e || e.jquery ? (e || pe).find(t) : this.constructor(e).find(t);
                    if (i[1]) {
                        if (e = e instanceof se ? e[0] : e, se.merge(this, se.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : fe, !0)), ue.test(i[1]) && se.isPlainObject(e))
                            for (i in e) se.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                        return this
                    }
                    if (n = fe.getElementById(i[2]), n && n.parentNode) {
                        if (n.id !== i[2]) return pe.find(t);
                        this.length = 1, this[0] = n
                    }
                    return this.context = fe, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : se.isFunction(t) ? "undefined" != typeof pe.ready ? pe.ready(t) : t(se) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), se.makeArray(t, this))
            };
        ge.prototype = se.fn, pe = se(fe);
        var ve = /^(?:parents|prev(?:Until|All))/,
            _e = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        se.extend({
            dir: function(t, e, i) {
                for (var n = [], s = t[e]; s && 9 !== s.nodeType && (void 0 === i || 1 !== s.nodeType || !se(s).is(i));) 1 === s.nodeType && n.push(s), s = s[e];
                return n
            },
            sibling: function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            }
        }), se.fn.extend({
            has: function(t) {
                var e, i = se(t, this),
                    n = i.length;
                return this.filter(function() {
                    for (e = 0; n > e; e++)
                        if (se.contains(this, i[e])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, s = this.length, o = [], a = ce.test(t) || "string" != typeof t ? se(t, e || this.context) : 0; s > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && se.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        }
                return this.pushStack(o.length > 1 ? se.unique(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? se.inArray(this[0], se(t)) : se.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(se.unique(se.merge(this.get(), se(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), se.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return se.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return se.dir(t, "parentNode", i)
            },
            next: function(t) {
                return s(t, "nextSibling")
            },
            prev: function(t) {
                return s(t, "previousSibling")
            },
            nextAll: function(t) {
                return se.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return se.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return se.dir(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return se.dir(t, "previousSibling", i)
            },
            siblings: function(t) {
                return se.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return se.sibling(t.firstChild)
            },
            contents: function(t) {
                return se.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : se.merge([], t.childNodes)
            }
        }, function(t, e) {
            se.fn[t] = function(i, n) {
                var s = se.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = se.filter(n, s)), this.length > 1 && (_e[t] || (s = se.unique(s)), ve.test(t) && (s = s.reverse())), this.pushStack(s)
            }
        });
        var be = /\S+/g,
            ye = {};
        se.Callbacks = function(t) {
            t = "string" == typeof t ? ye[t] || o(t) : se.extend({}, t);
            var e, i, n, s, a, r, l = [],
                h = !t.once && [],
                c = function(o) {
                    for (i = t.memory && o, n = !0, a = r || 0, r = 0, s = l.length, e = !0; l && s > a; a++)
                        if (l[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                            i = !1;
                            break
                        }
                    e = !1, l && (h ? h.length && c(h.shift()) : i ? l = [] : u.disable())
                },
                u = {
                    add: function() {
                        if (l) {
                            var n = l.length;
                            ! function o(e) {
                                se.each(e, function(e, i) {
                                    var n = se.type(i);
                                    "function" === n ? t.unique && u.has(i) || l.push(i) : i && i.length && "string" !== n && o(i)
                                })
                            }(arguments), e ? s = l.length : i && (r = n, c(i))
                        }
                        return this
                    },
                    remove: function() {
                        return l && se.each(arguments, function(t, i) {
                            for (var n;
                                (n = se.inArray(i, l, n)) > -1;) l.splice(n, 1), e && (s >= n && s--, a >= n && a--)
                        }), this
                    },
                    has: function(t) {
                        return t ? se.inArray(t, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], s = 0, this
                    },
                    disable: function() {
                        return l = h = i = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return h = void 0, i || u.disable(), this
                    },
                    locked: function() {
                        return !h
                    },
                    fireWith: function(t, i) {
                        return !l || n && !h || (i = i || [], i = [t, i.slice ? i.slice() : i], e ? h.push(i) : c(i)), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return u
        }, se.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", se.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", se.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", se.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return s.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return se.Deferred(function(i) {
                                se.each(e, function(e, o) {
                                    var a = se.isFunction(t[e]) && t[e];
                                    s[o[1]](function() {
                                        var t = a && a.apply(this, arguments);
                                        t && se.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o[0] + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? se.extend(t, n) : n
                        }
                    },
                    s = {};
                return n.pipe = n.then, se.each(e, function(t, o) {
                    var a = o[2],
                        r = o[3];
                    n[o[1]] = a.add, r && a.add(function() {
                        i = r
                    }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = function() {
                        return s[o[0] + "With"](this === s ? n : this, arguments), this
                    }, s[o[0] + "With"] = a.fireWith
                }), n.promise(s), t && t.call(s, s), s
            },
            when: function(t) {
                var e, i, n, s = 0,
                    o = K.call(arguments),
                    a = o.length,
                    r = 1 !== a || t && se.isFunction(t.promise) ? a : 0,
                    l = 1 === r ? t : se.Deferred(),
                    h = function(t, i, n) {
                        return function(s) {
                            i[t] = this, n[t] = arguments.length > 1 ? K.call(arguments) : s, n === e ? l.notifyWith(i, n) : --r || l.resolveWith(i, n)
                        }
                    };
                if (a > 1)
                    for (e = new Array(a), i = new Array(a), n = new Array(a); a > s; s++) o[s] && se.isFunction(o[s].promise) ? o[s].promise().done(h(s, n, o)).fail(l.reject).progress(h(s, i, e)) : --r;
                return r || l.resolveWith(n, o), l.promise()
            }
        });
        var we;
        se.fn.ready = function(t) {
            return se.ready.promise().done(t), this
        }, se.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? se.readyWait++ : se.ready(!0)
            },
            ready: function(t) {
                if (t === !0 ? !--se.readyWait : !se.isReady) {
                    if (!fe.body) return setTimeout(se.ready);
                    se.isReady = !0, t !== !0 && --se.readyWait > 0 || (we.resolveWith(fe, [se]), se.fn.triggerHandler && (se(fe).triggerHandler("ready"), se(fe).off("ready")))
                }
            }
        }), se.ready.promise = function(e) {
            if (!we)
                if (we = se.Deferred(), "complete" === fe.readyState) setTimeout(se.ready);
                else if (fe.addEventListener) fe.addEventListener("DOMContentLoaded", r, !1), t.addEventListener("load", r, !1);
            else {
                fe.attachEvent("onreadystatechange", r), t.attachEvent("onload", r);
                var i = !1;
                try {
                    i = null == t.frameElement && fe.documentElement
                } catch (n) {}
                i && i.doScroll && ! function s() {
                    if (!se.isReady) {
                        try {
                            i.doScroll("left")
                        } catch (t) {
                            return setTimeout(s, 50)
                        }
                        a(), se.ready()
                    }
                }()
            }
            return we.promise(e)
        };
        var xe, ke = "undefined";
        for (xe in se(ie)) break;
        ie.ownLast = "0" !== xe, ie.inlineBlockNeedsLayout = !1, se(function() {
                var t, e, i, n;
                i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== ke && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ie.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (i.style.zoom = 1)), i.removeChild(n))
            }),
            function() {
                var t = fe.createElement("div");
                if (null == ie.deleteExpando) {
                    ie.deleteExpando = !0;
                    try {
                        delete t.test
                    } catch (e) {
                        ie.deleteExpando = !1
                    }
                }
                t = null
            }(), se.acceptData = function(t) {
                var e = se.noData[(t.nodeName + " ").toLowerCase()],
                    i = +t.nodeType || 1;
                return 1 !== i && 9 !== i ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
            };
        var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            Te = /([A-Z])/g;
        se.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? se.cache[t[se.expando]] : t[se.expando], !!t && !h(t)
            },
            data: function(t, e, i) {
                return c(t, e, i)
            },
            removeData: function(t, e) {
                return u(t, e)
            },
            _data: function(t, e, i) {
                return c(t, e, i, !0)
            },
            _removeData: function(t, e) {
                return u(t, e, !0)
            }
        }), se.fn.extend({
            data: function(t, e) {
                var i, n, s, o = this[0],
                    a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (s = se.data(o), 1 === o.nodeType && !se._data(o, "parsedAttrs"))) {
                        for (i = a.length; i--;) a[i] && (n = a[i].name, 0 === n.indexOf("data-") && (n = se.camelCase(n.slice(5)), l(o, n, s[n])));
                        se._data(o, "parsedAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof t ? this.each(function() {
                    se.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    se.data(this, t, e)
                }) : o ? l(o, t, se.data(o, t)) : void 0
            },
            removeData: function(t) {
                return this.each(function() {
                    se.removeData(this, t)
                })
            }
        }), se.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = se._data(t, e), i && (!n || se.isArray(i) ? n = se._data(t, e, se.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = se.queue(t, e),
                    n = i.length,
                    s = i.shift(),
                    o = se._queueHooks(t, e),
                    a = function() {
                        se.dequeue(t, e)
                    };
                "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, a, o)), !n && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return se._data(t, i) || se._data(t, i, {
                    empty: se.Callbacks("once memory").add(function() {
                        se._removeData(t, e + "queue"), se._removeData(t, i)
                    })
                })
            }
        }), se.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? se.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = se.queue(this, t, e);
                    se._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && se.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    se.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    s = se.Deferred(),
                    o = this,
                    a = this.length,
                    r = function() {
                        --n || s.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) i = se._data(o[a], t + "queueHooks"), i && i.empty && (n++, i.empty.add(r));
                return r(), s.promise(e)
            }
        });
        var De = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Se = ["Top", "Right", "Bottom", "Left"],
            Ee = function(t, e) {
                return t = e || t, "none" === se.css(t, "display") || !se.contains(t.ownerDocument, t)
            },
            Ae = se.access = function(t, e, i, n, s, o, a) {
                var r = 0,
                    l = t.length,
                    h = null == i;
                if ("object" === se.type(i)) {
                    s = !0;
                    for (r in i) se.access(t, e, r, i[r], !0, o, a)
                } else if (void 0 !== n && (s = !0, se.isFunction(n) || (a = !0), h && (a ? (e.call(t, n), e = null) : (h = e, e = function(t, e, i) {
                        return h.call(se(t), i)
                    })), e))
                    for (; l > r; r++) e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
                return s ? t : h ? e.call(t) : l ? e(t[0], i) : o
            },
            Ie = /^(?:checkbox|radio)$/i;
        ! function() {
            var t = fe.createElement("input"),
                e = fe.createElement("div"),
                i = fe.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ie.leadingWhitespace = 3 === e.firstChild.nodeType, ie.tbody = !e.getElementsByTagName("tbody").length, ie.htmlSerialize = !!e.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, i.appendChild(t), ie.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, i.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function() {
                    ie.noCloneEvent = !1
                }), e.cloneNode(!0).click()), null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete e.test
                } catch (n) {
                    ie.deleteExpando = !1
                }
            }
        }(),
        function() {
            var e, i, n = fe.createElement("div");
            for (e in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) i = "on" + e, (ie[e + "Bubbles"] = i in t) || (n.setAttribute(i, "t"), ie[e + "Bubbles"] = n.attributes[i].expando === !1);
            n = null
        }();
        var Pe = /^(?:input|select|textarea)$/i,
            Me = /^key/,
            Fe = /^(?:mouse|pointer|contextmenu)|click/,
            Ne = /^(?:focusinfocus|focusoutblur)$/,
            He = /^([^.]*)(?:\.(.+)|)$/;
        se.event = {
            global: {},
            add: function(t, e, i, n, s) {
                var o, a, r, l, h, c, u, d, p, f, m, g = se._data(t);
                if (g) {
                    for (i.handler && (l = i, i = l.handler, s = l.selector), i.guid || (i.guid = se.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || (c = g.handle = function(t) {
                            return typeof se === ke || t && se.event.triggered === t.type ? void 0 : se.event.dispatch.apply(c.elem, arguments)
                        }, c.elem = t), e = (e || "").match(be) || [""], r = e.length; r--;) o = He.exec(e[r]) || [], p = m = o[1], f = (o[2] || "").split(".").sort(), p && (h = se.event.special[p] || {}, p = (s ? h.delegateType : h.bindType) || p, h = se.event.special[p] || {}, u = se.extend({
                        type: p,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        needsContext: s && se.expr.match.needsContext.test(s),
                        namespace: f.join(".")
                    }, l), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, h.setup && h.setup.call(t, n, f, c) !== !1 || (t.addEventListener ? t.addEventListener(p, c, !1) : t.attachEvent && t.attachEvent("on" + p, c))), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, u) : d.push(u), se.event.global[p] = !0);
                    t = null
                }
            },
            remove: function(t, e, i, n, s) {
                var o, a, r, l, h, c, u, d, p, f, m, g = se.hasData(t) && se._data(t);
                if (g && (c = g.events)) {
                    for (e = (e || "").match(be) || [""], h = e.length; h--;)
                        if (r = He.exec(e[h]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p) {
                            for (u = se.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, d = c[p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) a = d[o], !s && m !== a.origType || i && i.guid !== a.guid || r && !r.test(a.namespace) || n && n !== a.selector && ("**" !== n || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, u.remove && u.remove.call(t, a));
                            l && !d.length && (u.teardown && u.teardown.call(t, f, g.handle) !== !1 || se.removeEvent(t, p, g.handle), delete c[p])
                        } else
                            for (p in c) se.event.remove(t, p + e[h], i, n, !0);
                    se.isEmptyObject(c) && (delete g.handle, se._removeData(t, "events"))
                }
            },
            trigger: function(e, i, n, s) {
                var o, a, r, l, h, c, u, d = [n || fe],
                    p = ee.call(e, "type") ? e.type : e,
                    f = ee.call(e, "namespace") ? e.namespace.split(".") : [];
                if (r = c = n = n || fe, 3 !== n.nodeType && 8 !== n.nodeType && !Ne.test(p + se.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[se.expando] ? e : new se.Event(p, "object" == typeof e && e), e.isTrigger = s ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : se.makeArray(i, [e]), h = se.event.special[p] || {}, s || !h.trigger || h.trigger.apply(n, i) !== !1)) {
                    if (!s && !h.noBubble && !se.isWindow(n)) {
                        for (l = h.delegateType || p, Ne.test(l + p) || (r = r.parentNode); r; r = r.parentNode) d.push(r), c = r;
                        c === (n.ownerDocument || fe) && d.push(c.defaultView || c.parentWindow || t)
                    }
                    for (u = 0;
                        (r = d[u++]) && !e.isPropagationStopped();) e.type = u > 1 ? l : h.bindType || p, o = (se._data(r, "events") || {})[e.type] && se._data(r, "handle"), o && o.apply(r, i), o = a && r[a], o && o.apply && se.acceptData(r) && (e.result = o.apply(r, i), e.result === !1 && e.preventDefault());
                    if (e.type = p, !s && !e.isDefaultPrevented() && (!h._default || h._default.apply(d.pop(), i) === !1) && se.acceptData(n) && a && n[p] && !se.isWindow(n)) {
                        c = n[a], c && (n[a] = null), se.event.triggered = p;
                        try {
                            n[p]()
                        } catch (m) {}
                        se.event.triggered = void 0, c && (n[a] = c)
                    }
                    return e.result
                }
            },
            dispatch: function(t) {
                t = se.event.fix(t);
                var e, i, n, s, o, a = [],
                    r = K.call(arguments),
                    l = (se._data(this, "events") || {})[t.type] || [],
                    h = se.event.special[t.type] || {};
                if (r[0] = t, t.delegateTarget = this, !h.preDispatch || h.preDispatch.call(this, t) !== !1) {
                    for (a = se.event.handlers.call(this, t, l), e = 0;
                        (s = a[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = s.elem, o = 0;
                            (n = s.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, i = ((se.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, r), void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return h.postDispatch && h.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, s, o, a = [],
                    r = e.delegateCount,
                    l = t.target;
                if (r && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                            for (s = [], o = 0; r > o; o++) n = e[o], i = n.selector + " ", void 0 === s[i] && (s[i] = n.needsContext ? se(i, this).index(l) >= 0 : se.find(i, this, null, [l]).length), s[i] && s.push(n);
                            s.length && a.push({
                                elem: l,
                                handlers: s
                            })
                        }
                return r < e.length && a.push({
                    elem: this,
                    handlers: e.slice(r)
                }), a
            },
            fix: function(t) {
                if (t[se.expando]) return t;
                var e, i, n, s = t.type,
                    o = t,
                    a = this.fixHooks[s];
                for (a || (this.fixHooks[s] = a = Fe.test(s) ? this.mouseHooks : Me.test(s) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, t = new se.Event(o), e = n.length; e--;) i = n[e], t[i] = o[i];
                return t.target || (t.target = o.srcElement || fe), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, n, s, o = e.button,
                        a = e.fromElement;
                    return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || fe, s = n.documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== f() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === f() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return se.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return se.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, i, n) {
                var s = se.extend(new se.Event, i, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? se.event.trigger(s, null, e) : se.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
            }
        }, se.removeEvent = fe.removeEventListener ? function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        } : function(t, e, i) {
            var n = "on" + e;
            t.detachEvent && (typeof t[n] === ke && (t[n] = null), t.detachEvent(n, i))
        }, se.Event = function(t, e) {
            return this instanceof se.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? d : p) : this.type = t, e && se.extend(this, e), this.timeStamp = t && t.timeStamp || se.now(), void(this[se.expando] = !0)) : new se.Event(t, e)
        }, se.Event.prototype = {
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = d, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = d, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = d, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, se.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            se.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this,
                        s = t.relatedTarget,
                        o = t.handleObj;
                    return (!s || s !== n && !se.contains(n, s)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), ie.submitBubbles || (se.event.special.submit = {
            setup: function() {
                return se.nodeName(this, "form") ? !1 : void se.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target,
                        i = se.nodeName(e, "input") || se.nodeName(e, "button") ? e.form : void 0;
                    i && !se._data(i, "submitBubbles") && (se.event.add(i, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), se._data(i, "submitBubbles", !0))
                })
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && se.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return se.nodeName(this, "form") ? !1 : void se.event.remove(this, "._submit")
            }
        }), ie.changeBubbles || (se.event.special.change = {
            setup: function() {
                return Pe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (se.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), se.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), se.event.simulate("change", this, t, !0)
                })), !1) : void se.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Pe.test(e.nodeName) && !se._data(e, "changeBubbles") && (se.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || se.event.simulate("change", this.parentNode, t, !0)
                    }), se._data(e, "changeBubbles", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return se.event.remove(this, "._change"), !Pe.test(this.nodeName)
            }
        }), ie.focusinBubbles || se.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                se.event.simulate(e, t.target, se.event.fix(t), !0)
            };
            se.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        s = se._data(n, e);
                    s || n.addEventListener(t, i, !0), se._data(n, e, (s || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        s = se._data(n, e) - 1;
                    s ? se._data(n, e, s) : (n.removeEventListener(t, i, !0), se._removeData(n, e))
                }
            }
        }), se.fn.extend({
            on: function(t, e, i, n, s) {
                var o, a;
                if ("object" == typeof t) {
                    "string" != typeof e && (i = i || e, e = void 0);
                    for (o in t) this.on(o, e, i, t[o], s);
                    return this
                }
                if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), n === !1) n = p;
                else if (!n) return this;
                return 1 === s && (a = n, n = function(t) {
                    return se().off(t), a.apply(this, arguments)
                }, n.guid = a.guid || (a.guid = se.guid++)), this.each(function() {
                    se.event.add(this, t, n, i, e)
                })
            },
            one: function(t, e, i, n) {
                return this.on(t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, s;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, se(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (s in t) this.off(s, e, t[s]);
                    return this
                }
                return (e === !1 || "function" == typeof e) && (i = e, e = void 0), i === !1 && (i = p), this.each(function() {
                    se.event.remove(this, t, i, e)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    se.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? se.event.trigger(t, e, i, !0) : void 0
            }
        });
        var ze = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            je = / jQuery\d+="(?:null|\d+)"/g,
            Oe = new RegExp("<(?:" + ze + ")[\\s/>]", "i"),
            We = /^\s+/,
            Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            qe = /<([\w:]+)/,
            Le = /<tbody/i,
            $e = /<|&#?\w+;/,
            Be = /<(?:script|style|link)/i,
            Ye = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ue = /^$|\/(?:java|ecma)script/i,
            Xe = /^true\/(.*)/,
            Qe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Ke = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Ve = m(fe),
            Ge = Ve.appendChild(fe.createElement("div"));
        Ke.optgroup = Ke.option, Ke.tbody = Ke.tfoot = Ke.colgroup = Ke.caption = Ke.thead, Ke.th = Ke.td, se.extend({
            clone: function(t, e, i) {
                var n, s, o, a, r, l = se.contains(t.ownerDocument, t);
                if (ie.html5Clone || se.isXMLDoc(t) || !Oe.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Ge.innerHTML = t.outerHTML, Ge.removeChild(o = Ge.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || se.isXMLDoc(t)))
                    for (n = g(o), r = g(t), a = 0; null != (s = r[a]); ++a) n[a] && k(s, n[a]);
                if (e)
                    if (i)
                        for (r = r || g(t), n = n || g(o), a = 0; null != (s = r[a]); a++) x(s, n[a]);
                    else x(t, o);
                return n = g(o, "script"), n.length > 0 && w(n, !l && g(t, "script")), n = r = s = null, o
            },
            buildFragment: function(t, e, i, n) {
                for (var s, o, a, r, l, h, c, u = t.length, d = m(e), p = [], f = 0; u > f; f++)
                    if (o = t[f], o || 0 === o)
                        if ("object" === se.type(o)) se.merge(p, o.nodeType ? [o] : o);
                        else if ($e.test(o)) {
                    for (r = r || d.appendChild(e.createElement("div")), l = (qe.exec(o) || ["", ""])[1].toLowerCase(), c = Ke[l] || Ke._default, r.innerHTML = c[1] + o.replace(Re, "<$1></$2>") + c[2], s = c[0]; s--;) r = r.lastChild;
                    if (!ie.leadingWhitespace && We.test(o) && p.push(e.createTextNode(We.exec(o)[0])), !ie.tbody)
                        for (o = "table" !== l || Le.test(o) ? "<table>" !== c[1] || Le.test(o) ? 0 : r : r.firstChild, s = o && o.childNodes.length; s--;) se.nodeName(h = o.childNodes[s], "tbody") && !h.childNodes.length && o.removeChild(h);
                    for (se.merge(p, r.childNodes), r.textContent = ""; r.firstChild;) r.removeChild(r.firstChild);
                    r = d.lastChild
                } else p.push(e.createTextNode(o));
                for (r && d.removeChild(r), ie.appendChecked || se.grep(g(p, "input"), v), f = 0; o = p[f++];)
                    if ((!n || -1 === se.inArray(o, n)) && (a = se.contains(o.ownerDocument, o), r = g(d.appendChild(o), "script"), a && w(r), i))
                        for (s = 0; o = r[s++];) Ue.test(o.type || "") && i.push(o);
                return r = null, d
            },
            cleanData: function(t, e) {
                for (var i, n, s, o, a = 0, r = se.expando, l = se.cache, h = ie.deleteExpando, c = se.event.special; null != (i = t[a]); a++)
                    if ((e || se.acceptData(i)) && (s = i[r], o = s && l[s])) {
                        if (o.events)
                            for (n in o.events) c[n] ? se.event.remove(i, n) : se.removeEvent(i, n, o.handle);
                        l[s] && (delete l[s], h ? delete i[r] : typeof i.removeAttribute !== ke ? i.removeAttribute(r) : i[r] = null, Q.push(s))
                    }
            }
        }), se.fn.extend({
            text: function(t) {
                return Ae(this, function(t) {
                    return void 0 === t ? se.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = _(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = _(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var i, n = t ? se.filter(t, this) : this, s = 0; null != (i = n[s]); s++) e || 1 !== i.nodeType || se.cleanData(g(i)), i.parentNode && (e && se.contains(i.ownerDocument, i) && w(g(i, "script")), i.parentNode.removeChild(i));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && se.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && se.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return se.clone(this, t, e)
                })
            },
            html: function(t) {
                return Ae(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(je, "") : void 0;
                    if (!("string" != typeof t || Be.test(t) || !ie.htmlSerialize && Oe.test(t) || !ie.leadingWhitespace && We.test(t) || Ke[(qe.exec(t) || ["", ""])[1].toLowerCase()])) {
                        t = t.replace(Re, "<$1></$2>");
                        try {
                            for (; n > i; i++) e = this[i] || {}, 1 === e.nodeType && (se.cleanData(g(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (s) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode, se.cleanData(g(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = V.apply([], t);
                var i, n, s, o, a, r, l = 0,
                    h = this.length,
                    c = this,
                    u = h - 1,
                    d = t[0],
                    p = se.isFunction(d);
                if (p || h > 1 && "string" == typeof d && !ie.checkClone && Ye.test(d)) return this.each(function(i) {
                    var n = c.eq(i);
                    p && (t[0] = d.call(this, i, n.html())), n.domManip(t, e)
                });
                if (h && (r = se.buildFragment(t, this[0].ownerDocument, !1, this), i = r.firstChild, 1 === r.childNodes.length && (r = i), i)) {
                    for (o = se.map(g(r, "script"), b), s = o.length; h > l; l++) n = r, l !== u && (n = se.clone(n, !0, !0), s && se.merge(o, g(n, "script"))), e.call(this[l], n, l);
                    if (s)
                        for (a = o[o.length - 1].ownerDocument, se.map(o, y), l = 0; s > l; l++) n = o[l], Ue.test(n.type || "") && !se._data(n, "globalEval") && se.contains(a, n) && (n.src ? se._evalUrl && se._evalUrl(n.src) : se.globalEval((n.text || n.textContent || n.innerHTML || "").replace(Qe, "")));
                    r = i = null
                }
                return this
            }
        }), se.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            se.fn[t] = function(t) {
                for (var i, n = 0, s = [], o = se(t), a = o.length - 1; a >= n; n++) i = n === a ? this : this.clone(!0), se(o[n])[e](i), G.apply(s, i.get());
                return this.pushStack(s)
            }
        });
        var Ze, Je = {};
        ! function() {
            var t;
            ie.shrinkWrapBlocks = function() {
                if (null != t) return t;
                t = !1;
                var e, i, n;
                return i = fe.getElementsByTagName("body")[0], i && i.style ? (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), typeof e.style.zoom !== ke && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(fe.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), i.removeChild(n), t) : void 0
            }
        }();
        var ti, ei, ii = /^margin/,
            ni = new RegExp("^(" + De + ")(?!px)[a-z%]+$", "i"),
            si = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (ti = function(t) {
                return t.ownerDocument.defaultView.getComputedStyle(t, null)
            }, ei = function(t, e, i) {
                var n, s, o, a, r = t.style;
                return i = i || ti(t), a = i ? i.getPropertyValue(e) || i[e] : void 0, i && ("" !== a || se.contains(t.ownerDocument, t) || (a = se.style(t, e)), ni.test(a) && ii.test(e) && (n = r.width, s = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = n, r.minWidth = s, r.maxWidth = o)), void 0 === a ? a : a + ""
            }) : fe.documentElement.currentStyle && (ti = function(t) {
                return t.currentStyle
            }, ei = function(t, e, i) {
                var n, s, o, a, r = t.style;
                return i = i || ti(t), a = i ? i[e] : void 0, null == a && r && r[e] && (a = r[e]), ni.test(a) && !si.test(e) && (n = r.left, s = t.runtimeStyle, o = s && s.left, o && (s.left = t.currentStyle.left), r.left = "fontSize" === e ? "1em" : a, a = r.pixelLeft + "px", r.left = n, o && (s.left = o)), void 0 === a ? a : a + "" || "auto"
            }),
            function() {
                function e() {
                    var e, i, n, s;
                    i = fe.getElementsByTagName("body")[0], i && i.style && (e = fe.createElement("div"), n = fe.createElement("div"), n.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", i.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o = a = !1, l = !0, t.getComputedStyle && (o = "1%" !== (t.getComputedStyle(e, null) || {}).top, a = "4px" === (t.getComputedStyle(e, null) || {
                        width: "4px"
                    }).width, s = e.appendChild(fe.createElement("div")), s.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", s.style.marginRight = s.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(s, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = e.getElementsByTagName("td"), s[0].style.cssText = "margin:0;border:0;padding:0;display:none", r = 0 === s[0].offsetHeight, r && (s[0].style.display = "", s[1].style.display = "none", r = 0 === s[0].offsetHeight), i.removeChild(n))
                }
                var i, n, s, o, a, r, l;
                i = fe.createElement("div"), i.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", s = i.getElementsByTagName("a")[0], n = s && s.style, n && (n.cssText = "float:left;opacity:.5", ie.opacity = "0.5" === n.opacity, ie.cssFloat = !!n.cssFloat, i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === i.style.backgroundClip, ie.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, se.extend(ie, {
                    reliableHiddenOffsets: function() {
                        return null == r && e(), r
                    },
                    boxSizingReliable: function() {
                        return null == a && e(), a
                    },
                    pixelPosition: function() {
                        return null == o && e(), o
                    },
                    reliableMarginRight: function() {
                        return null == l && e(), l
                    }
                }))
            }(), se.swap = function(t, e, i, n) {
                var s, o, a = {};
                for (o in e) a[o] = t.style[o], t.style[o] = e[o];
                s = i.apply(t, n || []);
                for (o in e) t.style[o] = a[o];
                return s
            };
        var oi = /alpha\([^)]*\)/i,
            ai = /opacity\s*=\s*([^)]*)/,
            ri = /^(none|table(?!-c[ea]).+)/,
            li = new RegExp("^(" + De + ")(.*)$", "i"),
            hi = new RegExp("^([+-])=(" + De + ")", "i"),
            ci = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ui = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            di = ["Webkit", "O", "Moz", "ms"];
        se.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = ei(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ie.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var s, o, a, r = se.camelCase(e),
                        l = t.style;
                    if (e = se.cssProps[r] || (se.cssProps[r] = S(l, r)), a = se.cssHooks[e] || se.cssHooks[r], void 0 === i) return a && "get" in a && void 0 !== (s = a.get(t, !1, n)) ? s : l[e];
                    if (o = typeof i, "string" === o && (s = hi.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(se.css(t, e)), o = "number"), null != i && i === i && ("number" !== o || se.cssNumber[r] || (i += "px"), ie.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (i = a.set(t, i, n))))) try {
                        l[e] = i
                    } catch (h) {}
                }
            },
            css: function(t, e, i, n) {
                var s, o, a, r = se.camelCase(e);
                return e = se.cssProps[r] || (se.cssProps[r] = S(t.style, r)), a = se.cssHooks[e] || se.cssHooks[r], a && "get" in a && (o = a.get(t, !0, i)), void 0 === o && (o = ei(t, e, n)), "normal" === o && e in ui && (o = ui[e]), "" === i || i ? (s = parseFloat(o), i === !0 || se.isNumeric(s) ? s || 0 : o) : o
            }
        }), se.each(["height", "width"], function(t, e) {
            se.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? ri.test(se.css(t, "display")) && 0 === t.offsetWidth ? se.swap(t, ci, function() {
                        return P(t, e, n)
                    }) : P(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var s = n && ti(t);
                    return A(t, i, n ? I(t, e, n, ie.boxSizing && "border-box" === se.css(t, "boxSizing", !1, s), s) : 0)
                }
            }
        }), ie.opacity || (se.cssHooks.opacity = {
            get: function(t, e) {
                return ai.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var i = t.style,
                    n = t.currentStyle,
                    s = se.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    o = n && n.filter || i.filter || "";
                i.zoom = 1, (e >= 1 || "" === e) && "" === se.trim(o.replace(oi, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = oi.test(o) ? o.replace(oi, s) : o + " " + s)
            }
        }), se.cssHooks.marginRight = D(ie.reliableMarginRight, function(t, e) {
            return e ? se.swap(t, {
                display: "inline-block"
            }, ei, [t, "marginRight"]) : void 0
        }), se.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            se.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) s[t + Se[n] + e] = o[n] || o[n - 2] || o[0];
                    return s
                }
            }, ii.test(t) || (se.cssHooks[t + e].set = A)
        }), se.fn.extend({
            css: function(t, e) {
                return Ae(this, function(t, e, i) {
                    var n, s, o = {},
                        a = 0;
                    if (se.isArray(e)) {
                        for (n = ti(t), s = e.length; s > a; a++) o[e[a]] = se.css(t, e[a], !1, n);
                        return o
                    }
                    return void 0 !== i ? se.style(t, e, i) : se.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return E(this, !0)
            },
            hide: function() {
                return E(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Ee(this) ? se(this).show() : se(this).hide()
                })
            }
        }), se.Tween = M, M.prototype = {
            constructor: M,
            init: function(t, e, i, n, s, o) {
                this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (se.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = M.propHooks[this.prop];
                return t && t.get ? t.get(this) : M.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = M.propHooks[this.prop];
                return this.pos = e = this.options.duration ? se.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : M.propHooks._default.set(this), this
            }
        }, M.prototype.init.prototype = M.prototype, M.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = se.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    se.fx.step[t.prop] ? se.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[se.cssProps[t.prop]] || se.cssHooks[t.prop]) ? se.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, se.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, se.fx = M.prototype.init, se.fx.step = {};
        var pi, fi, mi = /^(?:toggle|show|hide)$/,
            gi = new RegExp("^(?:([+-])=|)(" + De + ")([a-z%]*)$", "i"),
            vi = /queueHooks$/,
            _i = [z],
            bi = {
                "*": [function(t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        s = gi.exec(e),
                        o = s && s[3] || (se.cssNumber[t] ? "" : "px"),
                        a = (se.cssNumber[t] || "px" !== o && +n) && gi.exec(se.css(i.elem, t)),
                        r = 1,
                        l = 20;
                    if (a && a[3] !== o) {
                        o = o || a[3], s = s || [], a = +n || 1;
                        do r = r || ".5", a /= r, se.style(i.elem, t, a + o); while (r !== (r = i.cur() / n) && 1 !== r && --l)
                    }
                    return s && (a = i.start = +a || +n || 0, i.unit = o, i.end = s[1] ? a + (s[1] + 1) * s[2] : +s[2]), i
                }]
            };
        se.Animation = se.extend(O, {
                tweener: function(t, e) {
                    se.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var i, n = 0, s = t.length; s > n; n++) i = t[n], bi[i] = bi[i] || [], bi[i].unshift(e)
                },
                prefilter: function(t, e) {
                    e ? _i.unshift(t) : _i.push(t)
                }
            }), se.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? se.extend({}, t) : {
                    complete: i || !i && e || se.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !se.isFunction(e) && e
                };
                return n.duration = se.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in se.fx.speeds ? se.fx.speeds[n.duration] : se.fx.speeds._default, (null == n.queue || n.queue === !0) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    se.isFunction(n.old) && n.old.call(this), n.queue && se.dequeue(this, n.queue)
                }, n
            }, se.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(Ee).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function(t, e, i, n) {
                    var s = se.isEmptyObject(t),
                        o = se.speed(e, i, n),
                        a = function() {
                            var e = O(this, se.extend({}, t), o);
                            (s || se._data(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a, s || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            s = null != t && t + "queueHooks",
                            o = se.timers,
                            a = se._data(this);
                        if (s) a[s] && a[s].stop && n(a[s]);
                        else
                            for (s in a) a[s] && a[s].stop && vi.test(s) && n(a[s]);
                        for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                        (e || !i) && se.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return t !== !1 && (t = t || "fx"), this.each(function() {
                        var e, i = se._data(this),
                            n = i[t + "queue"],
                            s = i[t + "queueHooks"],
                            o = se.timers,
                            a = n ? n.length : 0;
                        for (i.finish = !0, se.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; a > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), se.each(["toggle", "show", "hide"], function(t, e) {
                var i = se.fn[e];
                se.fn[e] = function(t, n, s) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(N(e, !0), t, n, s)
                }
            }), se.each({
                slideDown: N("show"),
                slideUp: N("hide"),
                slideToggle: N("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                se.fn[t] = function(t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), se.timers = [], se.fx.tick = function() {
                var t, e = se.timers,
                    i = 0;
                for (pi = se.now(); i < e.length; i++) t = e[i], t() || e[i] !== t || e.splice(i--, 1);
                e.length || se.fx.stop(), pi = void 0
            }, se.fx.timer = function(t) {
                se.timers.push(t), t() ? se.fx.start() : se.timers.pop()
            }, se.fx.interval = 13, se.fx.start = function() {
                fi || (fi = setInterval(se.fx.tick, se.fx.interval))
            }, se.fx.stop = function() {
                clearInterval(fi), fi = null
            }, se.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, se.fn.delay = function(t, e) {
                return t = se.fx ? se.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                    var n = setTimeout(e, t);
                    i.stop = function() {
                        clearTimeout(n)
                    }
                })
            },
            function() {
                var t, e, i, n, s;
                e = fe.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = e.getElementsByTagName("a")[0], i = fe.createElement("select"), s = i.appendChild(fe.createElement("option")), t = e.getElementsByTagName("input")[0], n.style.cssText = "top:1px", ie.getSetAttribute = "t" !== e.className, ie.style = /top/.test(n.getAttribute("style")), ie.hrefNormalized = "/a" === n.getAttribute("href"), ie.checkOn = !!t.value, ie.optSelected = s.selected, ie.enctype = !!fe.createElement("form").enctype, i.disabled = !0, ie.optDisabled = !s.disabled, t = fe.createElement("input"), t.setAttribute("value", ""), ie.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ie.radioValue = "t" === t.value
            }();
        var yi = /\r/g;
        se.fn.extend({
            val: function(t) {
                var e, i, n, s = this[0]; {
                    if (arguments.length) return n = se.isFunction(t), this.each(function(i) {
                        var s;
                        1 === this.nodeType && (s = n ? t.call(this, i, se(this).val()) : t, null == s ? s = "" : "number" == typeof s ? s += "" : se.isArray(s) && (s = se.map(s, function(t) {
                            return null == t ? "" : t + ""
                        })), e = se.valHooks[this.type] || se.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                    });
                    if (s) return e = se.valHooks[s.type] || se.valHooks[s.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : (i = s.value, "string" == typeof i ? i.replace(yi, "") : null == i ? "" : i)
                }
            }
        }), se.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = se.find.attr(t, "value");
                        return null != e ? e : se.trim(se.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || 0 > s, a = o ? null : [], r = o ? s + 1 : n.length, l = 0 > s ? r : o ? s : 0; r > l; l++)
                            if (i = n[l], !(!i.selected && l !== s || (ie.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && se.nodeName(i.parentNode, "optgroup"))) {
                                if (e = se(i).val(), o) return e;
                                a.push(e)
                            }
                        return a
                    },
                    set: function(t, e) {
                        for (var i, n, s = t.options, o = se.makeArray(e), a = s.length; a--;)
                            if (n = s[a], se.inArray(se.valHooks.option.get(n), o) >= 0) try {
                                n.selected = i = !0
                            } catch (r) {
                                n.scrollHeight
                            } else n.selected = !1;
                        return i || (t.selectedIndex = -1), s
                    }
                }
            }
        }), se.each(["radio", "checkbox"], function() {
            se.valHooks[this] = {
                set: function(t, e) {
                    return se.isArray(e) ? t.checked = se.inArray(se(t).val(), e) >= 0 : void 0
                }
            }, ie.checkOn || (se.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var wi, xi, ki = se.expr.attrHandle,
            Ci = /^(?:checked|selected)$/i,
            Ti = ie.getSetAttribute,
            Di = ie.input;
        se.fn.extend({
            attr: function(t, e) {
                return Ae(this, se.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    se.removeAttr(this, t)
                })
            }
        }), se.extend({
            attr: function(t, e, i) {
                var n, s, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o) return typeof t.getAttribute === ke ? se.prop(t, e, i) : (1 === o && se.isXMLDoc(t) || (e = e.toLowerCase(), n = se.attrHooks[e] || (se.expr.match.bool.test(e) ? xi : wi)), void 0 === i ? n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = se.find.attr(t, e), null == s ? void 0 : s) : null !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : void se.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var i, n, s = 0,
                    o = e && e.match(be);
                if (o && 1 === t.nodeType)
                    for (; i = o[s++];) n = se.propFix[i] || i, se.expr.match.bool.test(i) ? Di && Ti || !Ci.test(i) ? t[n] = !1 : t[se.camelCase("default-" + i)] = t[n] = !1 : se.attr(t, i, ""), t.removeAttribute(Ti ? i : n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!ie.radioValue && "radio" === e && se.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            }
        }), xi = {
            set: function(t, e, i) {
                return e === !1 ? se.removeAttr(t, i) : Di && Ti || !Ci.test(i) ? t.setAttribute(!Ti && se.propFix[i] || i, i) : t[se.camelCase("default-" + i)] = t[i] = !0, i
            }
        }, se.each(se.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = ki[e] || se.find.attr;
            ki[e] = Di && Ti || !Ci.test(e) ? function(t, e, n) {
                var s, o;
                return n || (o = ki[e], ki[e] = s, s = null != i(t, e, n) ? e.toLowerCase() : null, ki[e] = o), s
            } : function(t, e, i) {
                return i ? void 0 : t[se.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), Di && Ti || (se.attrHooks.value = {
            set: function(t, e, i) {
                return se.nodeName(t, "input") ? void(t.defaultValue = e) : wi && wi.set(t, e, i)
            }
        }), Ti || (wi = {
            set: function(t, e, i) {
                var n = t.getAttributeNode(i);
                return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : void 0
            }
        }, ki.id = ki.name = ki.coords = function(t, e, i) {
            var n;
            return i ? void 0 : (n = t.getAttributeNode(e)) && "" !== n.value ? n.value : null
        }, se.valHooks.button = {
            get: function(t, e) {
                var i = t.getAttributeNode(e);
                return i && i.specified ? i.value : void 0
            },
            set: wi.set
        }, se.attrHooks.contenteditable = {
            set: function(t, e, i) {
                wi.set(t, "" === e ? !1 : e, i)
            }
        }, se.each(["width", "height"], function(t, e) {
            se.attrHooks[e] = {
                set: function(t, i) {
                    return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
                }
            }
        })), ie.style || (se.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || void 0
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        });
        var Si = /^(?:input|select|textarea|button|object)$/i,
            Ei = /^(?:a|area)$/i;
        se.fn.extend({
            prop: function(t, e) {
                return Ae(this, se.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = se.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (e) {}
                })
            }
        }), se.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, e, i) {
                var n, s, o, a = t.nodeType;
                if (t && 3 !== a && 8 !== a && 2 !== a) return o = 1 !== a || !se.isXMLDoc(t), o && (e = se.propFix[e] || e, s = se.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = se.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Si.test(t.nodeName) || Ei.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), ie.hrefNormalized || se.each(["href", "src"], function(t, e) {
            se.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), ie.optSelected || (se.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), se.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            se.propFix[this.toLowerCase()] = this
        }), ie.enctype || (se.propFix.enctype = "encoding");
        var Ai = /[\t\r\n\f]/g;
        se.fn.extend({
            addClass: function(t) {
                var e, i, n, s, o, a, r = 0,
                    l = this.length,
                    h = "string" == typeof t && t;
                if (se.isFunction(t)) return this.each(function(e) {
                    se(this).addClass(t.call(this, e, this.className))
                });
                if (h)
                    for (e = (t || "").match(be) || []; l > r; r++)
                        if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ai, " ") : " ")) {
                            for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                            a = se.trim(n), i.className !== a && (i.className = a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, s, o, a, r = 0,
                    l = this.length,
                    h = 0 === arguments.length || "string" == typeof t && t;
                if (se.isFunction(t)) return this.each(function(e) {
                    se(this).removeClass(t.call(this, e, this.className))
                });
                if (h)
                    for (e = (t || "").match(be) || []; l > r; r++)
                        if (i = this[r], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(Ai, " ") : "")) {
                            for (o = 0; s = e[o++];)
                                for (; n.indexOf(" " + s + " ") >= 0;) n = n.replace(" " + s + " ", " ");
                            a = t ? se.trim(n) : "", i.className !== a && (i.className = a)
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : this.each(se.isFunction(t) ? function(i) {
                    se(this).toggleClass(t.call(this, i, this.className, e), e)
                } : function() {
                    if ("string" === i)
                        for (var e, n = 0, s = se(this), o = t.match(be) || []; e = o[n++];) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                    else(i === ke || "boolean" === i) && (this.className && se._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : se._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Ai, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        }), se.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            se.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), se.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        });
        var Ii = se.now(),
            Pi = /\?/,
            Mi = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        se.parseJSON = function(e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var i, n = null,
                s = se.trim(e + "");
            return s && !se.trim(s.replace(Mi, function(t, e, s, o) {
                return i && e && (n = 0), 0 === n ? t : (i = s || e, n += !o - !s, "")
            })) ? Function("return " + s)() : se.error("Invalid JSON: " + e)
        }, se.parseXML = function(e) {
            var i, n;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? (n = new DOMParser, i = n.parseFromString(e, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(e))
            } catch (s) {
                i = void 0
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || se.error("Invalid XML: " + e), i
        };
        var Fi, Ni, Hi = /#.*$/,
            zi = /([?&])_=[^&]*/,
            ji = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Oi = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Wi = /^(?:GET|HEAD)$/,
            Ri = /^\/\//,
            qi = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Li = {},
            $i = {},
            Bi = "*/".concat("*");
        try {
            Ni = location.href
        } catch (Yi) {
            Ni = fe.createElement("a"), Ni.href = "", Ni = Ni.href
        }
        Fi = qi.exec(Ni.toLowerCase()) || [], se.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ni,
                type: "GET",
                isLocal: Oi.test(Fi[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Bi,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": se.parseJSON,
                    "text xml": se.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? q(q(t, se.ajaxSettings), e) : q(se.ajaxSettings, t)
            },
            ajaxPrefilter: W(Li),
            ajaxTransport: W($i),
            ajax: function(t, e) {
                function i(t, e, i, n) {
                    var s, c, v, _, y, x = e;
                    2 !== b && (b = 2, r && clearTimeout(r), h = void 0, a = n || "", w.readyState = t > 0 ? 4 : 0, s = t >= 200 && 300 > t || 304 === t, i && (_ = L(u, w, i)), _ = $(u, _, w, s), s ? (u.ifModified && (y = w.getResponseHeader("Last-Modified"), y && (se.lastModified[o] = y), y = w.getResponseHeader("etag"), y && (se.etag[o] = y)), 204 === t || "HEAD" === u.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = _.state, c = _.data, v = _.error, s = !v)) : (v = x, (t || !x) && (x = "error", 0 > t && (t = 0))), w.status = t, w.statusText = (e || x) + "", s ? f.resolveWith(d, [c, x, w]) : f.rejectWith(d, [w, x, v]), w.statusCode(g), g = void 0, l && p.trigger(s ? "ajaxSuccess" : "ajaxError", [w, u, s ? c : v]), m.fireWith(d, [w, x]), l && (p.trigger("ajaxComplete", [w, u]), --se.active || se.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, s, o, a, r, l, h, c, u = se.ajaxSetup({}, e),
                    d = u.context || u,
                    p = u.context && (d.nodeType || d.jquery) ? se(d) : se.event,
                    f = se.Deferred(),
                    m = se.Callbacks("once memory"),
                    g = u.statusCode || {},
                    v = {},
                    _ = {},
                    b = 0,
                    y = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!c)
                                    for (c = {}; e = ji.exec(a);) c[e[1].toLowerCase()] = e[2];
                                e = c[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return b || (t = _[i] = _[i] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return b || (u.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) g[e] = [g[e], t[e]];
                                else w.always(t[w.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || y;
                            return h && h.abort(e), i(0, e), this
                        }
                    };
                if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, u.url = ((t || u.url || Ni) + "").replace(Hi, "").replace(Ri, Fi[1] + "//"), u.type = e.method || e.type || u.method || u.type, u.dataTypes = se.trim(u.dataType || "*").toLowerCase().match(be) || [""], null == u.crossDomain && (n = qi.exec(u.url.toLowerCase()), u.crossDomain = !(!n || n[1] === Fi[1] && n[2] === Fi[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Fi[3] || ("http:" === Fi[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = se.param(u.data, u.traditional)), R(Li, u, e, w), 2 === b) return w;
                l = u.global, l && 0 === se.active++ && se.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Wi.test(u.type), o = u.url, u.hasContent || (u.data && (o = u.url += (Pi.test(o) ? "&" : "?") + u.data, delete u.data), u.cache === !1 && (u.url = zi.test(o) ? o.replace(zi, "$1_=" + Ii++) : o + (Pi.test(o) ? "&" : "?") + "_=" + Ii++)), u.ifModified && (se.lastModified[o] && w.setRequestHeader("If-Modified-Since", se.lastModified[o]), se.etag[o] && w.setRequestHeader("If-None-Match", se.etag[o])), (u.data && u.hasContent && u.contentType !== !1 || e.contentType) && w.setRequestHeader("Content-Type", u.contentType), w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Bi + "; q=0.01" : "") : u.accepts["*"]);
                for (s in u.headers) w.setRequestHeader(s, u.headers[s]);
                if (u.beforeSend && (u.beforeSend.call(d, w, u) === !1 || 2 === b)) return w.abort();
                y = "abort";
                for (s in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[s](u[s]);
                if (h = R($i, u, e, w)) {
                    w.readyState = 1, l && p.trigger("ajaxSend", [w, u]), u.async && u.timeout > 0 && (r = setTimeout(function() {
                        w.abort("timeout")
                    }, u.timeout));
                    try {
                        b = 1, h.send(v, i)
                    } catch (x) {
                        if (!(2 > b)) throw x;
                        i(-1, x)
                    }
                } else i(-1, "No Transport");
                return w
            },
            getJSON: function(t, e, i) {
                return se.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return se.get(t, void 0, e, "script")
            }
        }), se.each(["get", "post"], function(t, e) {
            se[e] = function(t, i, n, s) {
                return se.isFunction(i) && (s = s || n, n = i, i = void 0), se.ajax({
                    url: t,
                    type: e,
                    dataType: s,
                    data: i,
                    success: n
                })
            }
        }), se.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            se.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), se._evalUrl = function(t) {
            return se.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }, se.fn.extend({
            wrapAll: function(t) {
                if (se.isFunction(t)) return this.each(function(e) {
                    se(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = se(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return this.each(se.isFunction(t) ? function(e) {
                    se(this).wrapInner(t.call(this, e))
                } : function() {
                    var e = se(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = se.isFunction(t);
                return this.each(function(i) {
                    se(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    se.nodeName(this, "body") || se(this).replaceWith(this.childNodes)
                }).end()
            }
        }), se.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (t.style && t.style.display || se.css(t, "display"))
        }, se.expr.filters.visible = function(t) {
            return !se.expr.filters.hidden(t)
        };
        var Ui = /%20/g,
            Xi = /\[\]$/,
            Qi = /\r?\n/g,
            Ki = /^(?:submit|button|image|reset|file)$/i,
            Vi = /^(?:input|select|textarea|keygen)/i;
        se.param = function(t, e) {
            var i, n = [],
                s = function(t, e) {
                    e = se.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = se.ajaxSettings && se.ajaxSettings.traditional), se.isArray(t) || t.jquery && !se.isPlainObject(t)) se.each(t, function() {
                s(this.name, this.value)
            });
            else
                for (i in t) B(i, t[i], e, s);
            return n.join("&").replace(Ui, "+")
        }, se.fn.extend({
            serialize: function() {
                return se.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = se.prop(this, "elements");
                    return t ? se.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !se(this).is(":disabled") && Vi.test(this.nodeName) && !Ki.test(t) && (this.checked || !Ie.test(t))
                }).map(function(t, e) {
                    var i = se(this).val();
                    return null == i ? null : se.isArray(i) ? se.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Qi, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Qi, "\r\n")
                    }
                }).get()
            }
        }), se.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Y() || U()
        } : Y;
        var Gi = 0,
            Zi = {},
            Ji = se.ajaxSettings.xhr();
        t.ActiveXObject && se(t).on("unload", function() {
            for (var t in Zi) Zi[t](void 0, !0)
        }), ie.cors = !!Ji && "withCredentials" in Ji, Ji = ie.ajax = !!Ji, Ji && se.ajaxTransport(function(t) {
            if (!t.crossDomain || ie.cors) {
                var e;
                return {
                    send: function(i, n) {
                        var s, o = t.xhr(),
                            a = ++Gi;
                        if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                            for (s in t.xhrFields) o[s] = t.xhrFields[s];
                        t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        for (s in i) void 0 !== i[s] && o.setRequestHeader(s, i[s] + "");
                        o.send(t.hasContent && t.data || null), e = function(i, s) {
                            var r, l, h;
                            if (e && (s || 4 === o.readyState))
                                if (delete Zi[a], e = void 0, o.onreadystatechange = se.noop, s) 4 !== o.readyState && o.abort();
                                else {
                                    h = {}, r = o.status, "string" == typeof o.responseText && (h.text = o.responseText);
                                    try {
                                        l = o.statusText
                                    } catch (c) {
                                        l = ""
                                    }
                                    r || !t.isLocal || t.crossDomain ? 1223 === r && (r = 204) : r = h.text ? 200 : 404
                                }
                            h && n(r, l, h, o.getAllResponseHeaders())
                        }, t.async ? 4 === o.readyState ? setTimeout(e) : o.onreadystatechange = Zi[a] = e : e()
                    },
                    abort: function() {
                        e && e(void 0, !0)
                    }
                }
            }
        }), se.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return se.globalEval(t), t
                }
            }
        }), se.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), se.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i = fe.head || se("head")[0] || fe.documentElement;
                return {
                    send: function(n, s) {
                        e = fe.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, i) {
                            (i || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, i || s(200, "success"))
                        }, i.insertBefore(e, i.firstChild)
                    },
                    abort: function() {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var tn = [],
            en = /(=)\?(?=&|$)|\?\?/;
        se.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = tn.pop() || se.expando + "_" + Ii++;
                return this[t] = !0, t
            }
        }), se.ajaxPrefilter("json jsonp", function(e, i, n) {
            var s, o, a, r = e.jsonp !== !1 && (en.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(e.data) && "data");
            return r || "jsonp" === e.dataTypes[0] ? (s = e.jsonpCallback = se.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(en, "$1" + s) : e.jsonp !== !1 && (e.url += (Pi.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function() {
                return a || se.error(s + " was not called"), a[0]
            }, e.dataTypes[0] = "json", o = t[s], t[s] = function() {
                a = arguments
            }, n.always(function() {
                t[s] = o, e[s] && (e.jsonpCallback = i.jsonpCallback, tn.push(s)), a && se.isFunction(o) && o(a[0]), a = o = void 0
            }), "script") : void 0
        }), se.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || fe;
            var n = ue.exec(t),
                s = !i && [];
            return n ? [e.createElement(n[1])] : (n = se.buildFragment([t], e, s), s && s.length && se(s).remove(), se.merge([], n.childNodes))
        };
        var nn = se.fn.load;
        se.fn.load = function(t, e, i) {
            if ("string" != typeof t && nn) return nn.apply(this, arguments);
            var n, s, o, a = this,
                r = t.indexOf(" ");
            return r >= 0 && (n = se.trim(t.slice(r, t.length)), t = t.slice(0, r)), se.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), a.length > 0 && se.ajax({
                url: t,
                type: o,
                dataType: "html",
                data: e
            }).done(function(t) {
                s = arguments, a.html(n ? se("<div>").append(se.parseHTML(t)).find(n) : t)
            }).complete(i && function(t, e) {
                a.each(i, s || [t.responseText, e, t])
            }), this
        }, se.expr.filters.animated = function(t) {
            return se.grep(se.timers, function(e) {
                return t === e.elem
            }).length
        };
        var sn = t.document.documentElement;
        se.offset = {
            setOffset: function(t, e, i) {
                var n, s, o, a, r, l, h, c = se.css(t, "position"),
                    u = se(t),
                    d = {};
                "static" === c && (t.style.position = "relative"), r = u.offset(), o = se.css(t, "top"), l = se.css(t, "left"), h = ("absolute" === c || "fixed" === c) && se.inArray("auto", [o, l]) > -1, h ? (n = u.position(), a = n.top, s = n.left) : (a = parseFloat(o) || 0, s = parseFloat(l) || 0), se.isFunction(e) && (e = e.call(t, i, r)), null != e.top && (d.top = e.top - r.top + a), null != e.left && (d.left = e.left - r.left + s), "using" in e ? e.using.call(t, d) : u.css(d)
            }
        }, se.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    se.offset.setOffset(this, t, e)
                });
                var e, i, n = {
                        top: 0,
                        left: 0
                    },
                    s = this[0],
                    o = s && s.ownerDocument;
                if (o) return e = o.documentElement, se.contains(e, s) ? (typeof s.getBoundingClientRect !== ke && (n = s.getBoundingClientRect()), i = X(o), {
                    top: n.top + (i.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: n.left + (i.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : n
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = {
                            top: 0,
                            left: 0
                        },
                        n = this[0];
                    return "fixed" === se.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), se.nodeName(t[0], "html") || (i = t.offset()), i.top += se.css(t[0], "borderTopWidth", !0), i.left += se.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - se.css(n, "marginTop", !0),
                        left: e.left - i.left - se.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || sn; t && !se.nodeName(t, "html") && "static" === se.css(t, "position");) t = t.offsetParent;
                    return t || sn
                })
            }
        }), se.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = /Y/.test(e);
            se.fn[t] = function(n) {
                return Ae(this, function(t, n, s) {
                    var o = X(t);
                    return void 0 === s ? o ? e in o ? o[e] : o.document.documentElement[n] : t[n] : void(o ? o.scrollTo(i ? se(o).scrollLeft() : s, i ? s : se(o).scrollTop()) : t[n] = s)
                }, t, n, arguments.length, null)
            }
        }), se.each(["top", "left"], function(t, e) {
            se.cssHooks[e] = D(ie.pixelPosition, function(t, i) {
                return i ? (i = ei(t, e), ni.test(i) ? se(t).position()[e] + "px" : i) : void 0
            })
        }), se.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            se.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                se.fn[n] = function(n, s) {
                    var o = arguments.length && (i || "boolean" != typeof n),
                        a = i || (n === !0 || s === !0 ? "margin" : "border");
                    return Ae(this, function(e, i, n) {
                        var s;
                        return se.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement, Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === n ? se.css(e, i, a) : se.style(e, i, n, a)
                    }, e, o ? n : void 0, o, null)
                }
            })
        }), se.fn.size = function() {
            return this.length
        }, se.fn.andSelf = se.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return se
        });
        var on = t.jQuery,
            an = t.$;
        return se.noConflict = function(e) {
            return t.$ === se && (t.$ = an), e && t.jQuery === se && (t.jQuery = on), se
        }, typeof e === ke && (t.jQuery = t.$ = se), se
    }),
    function() {
        var t, e;
        t = window.jQuery || ("function" == typeof require ? require("jquery") : void 0), e = t(document), t.turbo = {
            version: "2.1.0",
            isReady: !1,
            use: function(t, i) {
                return e.off(".turbo").on("" + t + ".turbo", this.onLoad).on("" + i + ".turbo", this.onFetch)
            },
            addCallback: function(i) {
                return t.turbo.isReady && i(t), e.on("turbo:ready", function() {
                    return i(t)
                })
            },
            onLoad: function() {
                return t.turbo.isReady = !0, e.trigger("turbo:ready")
            },
            onFetch: function() {
                return t.turbo.isReady = !1
            },
            register: function() {
                return t(this.onLoad), t.fn.ready = this.addCallback
            }
        }, t.turbo.register(), t.turbo.use("page:load", "page:fetch")
    }.call(this),
    function(t, e) {
        t.rails !== e && t.error("jquery-ujs has already been loaded!");
        var i, n = t(document);
        t.rails = i = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not(form button), button[data-confirm]:not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input[type=file]",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            CSRFProtection: function(e) {
                var i = t('meta[name="csrf-token"]').attr("content");
                i && e.setRequestHeader("X-CSRF-Token", i)
            },
            refreshCSRFTokens: function() {
                var e = t("meta[name=csrf-token]").attr("content"),
                    i = t("meta[name=csrf-param]").attr("content");
                t('form input[name="' + i + '"]').val(e)
            },
            fire: function(e, i, n) {
                var s = t.Event(i);
                return e.trigger(s, n), s.result !== !1
            },
            confirm: function(t) {
                return confirm(t)
            },
            ajax: function(e) {
                return t.ajax(e)
            },
            href: function(t) {
                return t.attr("href")
            },
            handleRemote: function(n) {
                var s, o, a, r, l, h, c, u;
                if (i.fire(n, "ajax:before")) {
                    if (r = n.data("cross-domain"), l = r === e ? null : r, h = n.data("with-credentials") || null, c = n.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, n.is("form")) {
                        s = n.attr("method"), o = n.attr("action"), a = n.serializeArray();
                        var d = n.data("ujs:submit-button");
                        d && (a.push(d), n.data("ujs:submit-button", null))
                    } else n.is(i.inputChangeSelector) ? (s = n.data("method"), o = n.data("url"), a = n.serialize(), n.data("params") && (a = a + "&" + n.data("params"))) : n.is(i.buttonClickSelector) ? (s = n.data("method") || "get", o = n.data("url"), a = n.serialize(), n.data("params") && (a = a + "&" + n.data("params"))) : (s = n.data("method"), o = i.href(n), a = n.data("params") || null);
                    return u = {
                        type: s || "GET",
                        data: a,
                        dataType: c,
                        beforeSend: function(t, s) {
                            return s.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script), i.fire(n, "ajax:beforeSend", [t, s]) ? void n.trigger("ajax:send", t) : !1
                        },
                        success: function(t, e, i) {
                            n.trigger("ajax:success", [t, e, i])
                        },
                        complete: function(t, e) {
                            n.trigger("ajax:complete", [t, e])
                        },
                        error: function(t, e, i) {
                            n.trigger("ajax:error", [t, e, i])
                        },
                        crossDomain: l
                    }, h && (u.xhrFields = {
                        withCredentials: h
                    }), o && (u.url = o), i.ajax(u)
                }
                return !1
            },
            handleMethod: function(n) {
                var s = i.href(n),
                    o = n.data("method"),
                    a = n.attr("target"),
                    r = t("meta[name=csrf-token]").attr("content"),
                    l = t("meta[name=csrf-param]").attr("content"),
                    h = t('<form method="post" action="' + s + '"></form>'),
                    c = '<input name="_method" value="' + o + '" type="hidden" />';
                l !== e && r !== e && (c += '<input name="' + l + '" value="' + r + '" type="hidden" />'), a && h.attr("target", a), h.hide().append(c).appendTo("body"), h.submit()
            },
            formElements: function(e, i) {
                return e.is("form") ? t(e[0].elements).filter(i) : e.find(i)
            },
            disableFormElements: function(e) {
                i.formElements(e, i.disableSelector).each(function() {
                    i.disableFormElement(t(this))
                })
            },
            disableFormElement: function(t) {
                var i, n;
                i = t.is("button") ? "html" : "val", n = t.data("disable-with"), t.data("ujs:enable-with", t[i]()), n !== e && t[i](n), t.prop("disabled", !0)
            },
            enableFormElements: function(e) {
                i.formElements(e, i.enableSelector).each(function() {
                    i.enableFormElement(t(this))
                })
            },
            enableFormElement: function(t) {
                var e = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[e](t.data("ujs:enable-with")), t.prop("disabled", !1)
            },
            allowAction: function(t) {
                var e, n = t.data("confirm"),
                    s = !1;
                return n ? (i.fire(t, "confirm") && (s = i.confirm(n), e = i.fire(t, "confirm:complete", [s])), s && e) : !0
            },
            blankInputs: function(e, i, n) {
                var s, o, a = t(),
                    r = i || "input,textarea",
                    l = e.find(r);
                return l.each(function() {
                    if (s = t(this), o = s.is("input[type=checkbox],input[type=radio]") ? s.is(":checked") : s.val(), !o == !n) {
                        if (s.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + s.attr("name") + '"]').length) return !0;
                        a = a.add(s)
                    }
                }), a.length ? a : !1
            },
            nonBlankInputs: function(t, e) {
                return i.blankInputs(t, e, !0)
            },
            stopEverything: function(e) {
                return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
            },
            disableElement: function(t) {
                var n = t.data("disable-with");
                t.data("ujs:enable-with", t.html()), n !== e && t.html(n), t.bind("click.railsDisable", function(t) {
                    return i.stopEverything(t)
                })
            },
            enableElement: function(t) {
                t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
            }
        }, i.fire(n, "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, n) {
            t.crossDomain || i.CSRFProtection(n)
        }), n.delegate(i.linkDisableSelector, "ajax:complete", function() {
            i.enableElement(t(this))
        }), n.delegate(i.buttonDisableSelector, "ajax:complete", function() {
            i.enableFormElement(t(this))
        }), n.delegate(i.linkClickSelector, "click.rails", function(n) {
            var s = t(this),
                o = s.data("method"),
                a = s.data("params"),
                r = n.metaKey || n.ctrlKey;
            if (!i.allowAction(s)) return i.stopEverything(n);
            if (!r && s.is(i.linkDisableSelector) && i.disableElement(s), s.data("remote") !== e) {
                if (r && (!o || "GET" === o) && !a) return !0;
                var l = i.handleRemote(s);
                return l === !1 ? i.enableElement(s) : l.error(function() {
                    i.enableElement(s)
                }), !1
            }
            return s.data("method") ? (i.handleMethod(s), !1) : void 0
        }), n.delegate(i.buttonClickSelector, "click.rails", function(e) {
            var n = t(this);
            if (!i.allowAction(n)) return i.stopEverything(e);
            n.is(i.buttonDisableSelector) && i.disableFormElement(n);
            var s = i.handleRemote(n);
            return s === !1 ? i.enableFormElement(n) : s.error(function() {
                i.enableFormElement(n)
            }), !1
        }), n.delegate(i.inputChangeSelector, "change.rails", function(e) {
            var n = t(this);
            return i.allowAction(n) ? (i.handleRemote(n), !1) : i.stopEverything(e)
        }), n.delegate(i.formSubmitSelector, "submit.rails", function(n) {
            var s, o, a = t(this),
                r = a.data("remote") !== e;
            if (!i.allowAction(a)) return i.stopEverything(n);
            if (a.attr("novalidate") == e && (s = i.blankInputs(a, i.requiredInputSelector), s && i.fire(a, "ajax:aborted:required", [s]))) return i.stopEverything(n);
            if (r) {
                if (o = i.nonBlankInputs(a, i.fileInputSelector)) {
                    setTimeout(function() {
                        i.disableFormElements(a)
                    }, 13);
                    var l = i.fire(a, "ajax:aborted:file", [o]);
                    return l || setTimeout(function() {
                        i.enableFormElements(a)
                    }, 13), l
                }
                return i.handleRemote(a), !1
            }
            setTimeout(function() {
                i.disableFormElements(a)
            }, 13)
        }), n.delegate(i.formInputClickSelector, "click.rails", function(e) {
            var n = t(this);
            if (!i.allowAction(n)) return i.stopEverything(e);
            var s = n.attr("name"),
                o = s ? {
                    name: s,
                    value: n.val()
                } : null;
            n.closest("form").data("ujs:submit-button", o)
        }), n.delegate(i.formSubmitSelector, "ajax:send.rails", function(e) {
            this == e.target && i.disableFormElements(t(this))
        }), n.delegate(i.formSubmitSelector, "ajax:complete.rails", function(e) {
            this == e.target && i.enableFormElements(t(this))
        }), t(function() {
            i.refreshCSRFTokens()
        }))
    }(jQuery),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        function e(e, n) {
            var s, o, a, r = e.nodeName.toLowerCase();
            return "area" === r ? (s = e.parentNode, o = s.name, e.href && o && "map" === s.nodeName.toLowerCase() ? (a = t("img[usemap='#" + o + "']")[0], !!a && i(a)) : !1) : (/input|select|textarea|button|object/.test(r) ? !e.disabled : "a" === r ? e.href || n : n) && i(e)
        }

        function i(e) {
            return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function() {
                return "hidden" === t.css(this, "visibility")
            }).length
        }
        t.ui = t.ui || {}, t.extend(t.ui, {
            version: "1.11.2",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), t.fn.extend({
            scrollParent: function(e) {
                var i = this.css("position"),
                    n = "absolute" === i,
                    s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    o = this.parents().filter(function() {
                        var e = t(this);
                        return n && "static" === e.css("position") ? !1 : s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
            },
            uniqueId: function() {
                var t = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++t)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                return function(i) {
                    return !!t.data(i, e)
                }
            }) : function(e, i, n) {
                return !!t.data(e, n[3])
            },
            focusable: function(i) {
                return e(i, !isNaN(t.attr(i, "tabindex")))
            },
            tabbable: function(i) {
                var n = t.attr(i, "tabindex"),
                    s = isNaN(n);
                return (s || n >= 0) && e(i, !s)
            }
        }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function(e, i) {
            function n(e, i, n, o) {
                return t.each(s, function() {
                    i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), i
            }
            var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                o = i.toLowerCase(),
                a = {
                    innerWidth: t.fn.innerWidth,
                    innerHeight: t.fn.innerHeight,
                    outerWidth: t.fn.outerWidth,
                    outerHeight: t.fn.outerHeight
                };
            t.fn["inner" + i] = function(e) {
                return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
                    t(this).css(o, n(this, e) + "px")
                })
            }, t.fn["outer" + i] = function(e, s) {
                return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                    t(this).css(o, n(this, e, !0, s) + "px")
                })
            }
        }), t.fn.addBack || (t.fn.addBack = function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function(e) {
            return function(i) {
                return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this)
            }
        }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
            focus: function(e) {
                return function(i, n) {
                    return "number" == typeof i ? this.each(function() {
                        var e = this;
                        setTimeout(function() {
                            t(e).focus(), n && n.call(e)
                        }, i)
                    }) : e.apply(this, arguments)
                }
            }(t.fn.focus),
            disableSelection: function() {
                var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function() {
                    return this.bind(t + ".ui-disableSelection", function(t) {
                        t.preventDefault()
                    })
                }
            }(),
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(e) {
                if (void 0 !== e) return this.css("zIndex", e);
                if (this.length)
                    for (var i, n, s = t(this[0]); s.length && s[0] !== document;) {
                        if (i = s.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (n = parseInt(s.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
                        s = s.parent()
                    }
                return 0
            }
        }), t.ui.plugin = {
            add: function(e, i, n) {
                var s, o = t.ui[e].prototype;
                for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]])
            },
            call: function(t, e, i, n) {
                var s, o = t.plugins[e];
                if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                    for (s = 0; s < o.length; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
            }
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        var e = 0,
            i = Array.prototype.slice;
        return t.cleanData = function(e) {
            return function(i) {
                var n, s, o;
                for (o = 0; null != (s = i[o]); o++) try {
                    n = t._data(s, "events"), n && n.remove && t(s).triggerHandler("remove")
                } catch (a) {}
                e(i)
            }
        }(t.cleanData), t.widget = function(e, i, n) {
            var s, o, a, r, l = {},
                h = e.split(".")[0];
            return e = e.split(".")[1], s = h + "-" + e, n || (n = i, i = t.Widget), t.expr[":"][s.toLowerCase()] = function(e) {
                return !!t.data(e, s)
            }, t[h] = t[h] || {}, o = t[h][e], a = t[h][e] = function(t, e) {
                return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new a(t, e)
            }, t.extend(a, o, {
                version: n.version,
                _proto: t.extend({}, n),
                _childConstructors: []
            }), r = new i, r.options = t.widget.extend({}, r.options), t.each(n, function(e, n) {
                return t.isFunction(n) ? void(l[e] = function() {
                    var t = function() {
                            return i.prototype[e].apply(this, arguments)
                        },
                        s = function(t) {
                            return i.prototype[e].apply(this, t)
                        };
                    return function() {
                        var e, i = this._super,
                            o = this._superApply;
                        return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                    }
                }()) : void(l[e] = n)
            }), a.prototype = t.widget.extend(r, {
                widgetEventPrefix: o ? r.widgetEventPrefix || e : e
            }, l, {
                constructor: a,
                namespace: h,
                widgetName: e,
                widgetFullName: s
            }), o ? (t.each(o._childConstructors, function(e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, a, i._proto)
            }), delete o._childConstructors) : i._childConstructors.push(a), t.widget.bridge(e, a), a
        }, t.widget.extend = function(e) {
            for (var n, s, o = i.call(arguments, 1), a = 0, r = o.length; r > a; a++)
                for (n in o[a]) s = o[a][n], o[a].hasOwnProperty(n) && void 0 !== s && (e[n] = t.isPlainObject(s) ? t.isPlainObject(e[n]) ? t.widget.extend({}, e[n], s) : t.widget.extend({}, s) : s);
            return e
        }, t.widget.bridge = function(e, n) {
            var s = n.prototype.widgetFullName || e;
            t.fn[e] = function(o) {
                var a = "string" == typeof o,
                    r = i.call(arguments, 1),
                    l = this;
                return o = !a && r.length ? t.widget.extend.apply(null, [o].concat(r)) : o, this.each(a ? function() {
                    var i, n = t.data(this, s);
                    return "instance" === o ? (l = n, !1) : n ? t.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, r), i !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
                } : function() {
                    var e = t.data(this, s);
                    e ? (e.option(o || {}), e._init && e._init()) : t.data(this, s, new n(o, this))
                }), l
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(i, n) {
                n = t(n || this.defaultElement || this)[0], this.element = t(n), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), n !== this && (t.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(t) {
                        t.target === n && this.destroy()
                    }
                }), this.document = t(n.style ? n.ownerDocument : n.document || n), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: t.noop,
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: t.noop,
            widget: function() {
                return this.element
            },
            option: function(e, i) {
                var n, s, o, a = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (a = {}, n = e.split("."), e = n.shift(), n.length) {
                        for (s = a[e] = t.widget.extend({}, this.options[e]), o = 0; o < n.length - 1; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                        if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                        s[e] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        a[e] = i
                    }
                return this._setOptions(a), this
            },
            _setOptions: function(t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function(t, e) {
                return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
            },
            enable: function() {
                return this._setOptions({
                    disabled: !1
                })
            },
            disable: function() {
                return this._setOptions({
                    disabled: !0
                })
            },
            _on: function(e, i, n) {
                var s, o = this;
                "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function(n, a) {
                    function r() {
                        return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0
                    }
                    "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/),
                        h = l[1] + o.eventNamespace,
                        c = l[2];
                    c ? s.delegate(c, h, r) : i.bind(h, r)
                })
            },
            _off: function(e, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(i).undelegate(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay: function(t, e) {
                function i() {
                    return ("string" == typeof t ? n[t] : t).apply(n, arguments)
                }
                var n = this;
                return setTimeout(i, e || 0)
            },
            _hoverable: function(e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function(e) {
                        t(e.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(e) {
                        t(e.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function(e) {
                        t(e.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(e) {
                        t(e.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(e, i, n) {
                var s, o, a = this.options[e];
                if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (s in o) s in i || (i[s] = o[s]);
                return this.element.trigger(i, n), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
            }
        }, t.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(e, i) {
            t.Widget.prototype["_" + e] = function(n, s, o) {
                "string" == typeof s && (s = {
                    effect: s
                });
                var a, r = s ? s === !0 || "number" == typeof s ? i : s.effect || i : e;
                s = s || {}, "number" == typeof s && (s = {
                    duration: s
                }), a = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), a && t.effects && t.effects.effect[r] ? n[e](s) : r !== e && n[r] ? n[r](s.duration, s.easing, o) : n.queue(function(i) {
                    t(this)[e](), o && o.call(n[0]), i()
                })
            }
        }), t.widget
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.accordion", {
            version: "1.11.2",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {
                    activeHeader: "ui-icon-triangle-1-s",
                    header: "ui-icon-triangle-1-e"
                },
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function() {
                var e = this.options;
                this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function() {
                return {
                    header: this.active,
                    panel: this.active.length ? this.active.next() : t()
                }
            },
            _createIcons: function() {
                var e = this.options.icons;
                e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function() {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function() {
                var t;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
            },
            _setOption: function(t, e) {
                return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void("disabled" === t && (this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e))))
            },
            _keydown: function(e) {
                if (!e.altKey && !e.ctrlKey) {
                    var i = t.ui.keyCode,
                        n = this.headers.length,
                        s = this.headers.index(e.target),
                        o = !1;
                    switch (e.keyCode) {
                        case i.RIGHT:
                        case i.DOWN:
                            o = this.headers[(s + 1) % n];
                            break;
                        case i.LEFT:
                        case i.UP:
                            o = this.headers[(s - 1 + n) % n];
                            break;
                        case i.SPACE:
                        case i.ENTER:
                            this._eventHandler(e);
                            break;
                        case i.HOME:
                            o = this.headers[0];
                            break;
                        case i.END:
                            o = this.headers[n - 1]
                    }
                    o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), o.focus(), e.preventDefault())
                }
            },
            _panelKeyDown: function(e) {
                e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
            },
            refresh: function() {
                var e = this.options;
                this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function() {
                var t = this.headers,
                    e = this.panels;
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
            },
            _refresh: function() {
                var e, i = this.options,
                    n = i.heightStyle,
                    s = this.element.parent();
                this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
                    var e = t(this),
                        i = e.uniqueId().attr("id"),
                        n = e.next(),
                        s = n.uniqueId().attr("id");
                    e.attr("aria-controls", s), n.attr("aria-labelledby", i)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({
                    "aria-hidden": "true"
                }).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({
                    "aria-hidden": "false"
                }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (e = s.height(), this.element.siblings(":visible").each(function() {
                    var i = t(this),
                        n = i.css("position");
                    "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
                }), this.headers.each(function() {
                    e -= t(this).outerHeight(!0)
                }), this.headers.next().each(function() {
                    t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function() {
                    e = Math.max(e, t(this).css("height", "").height())
                }).height(e))
            },
            _activate: function(e) {
                var i = this._findActive(e)[0];
                i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function(e) {
                return "number" == typeof e ? this.headers.eq(e) : t()
            },
            _setupEvents: function(e) {
                var i = {
                    keydown: "_keydown"
                };
                e && t.each(e.split(" "), function(t, e) {
                    i[e] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                    keydown: "_panelKeyDown"
                }), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function(e) {
                var i = this.options,
                    n = this.active,
                    s = t(e.currentTarget),
                    o = s[0] === n[0],
                    a = o && i.collapsible,
                    r = a ? t() : s.next(),
                    l = n.next(),
                    h = {
                        oldHeader: n,
                        oldPanel: l,
                        newHeader: a ? t() : s,
                        newPanel: r
                    };
                e.preventDefault(), o && !i.collapsible || this._trigger("beforeActivate", e, h) === !1 || (i.active = a ? !1 : this.headers.index(s), this.active = o ? t() : s, this._toggle(h), n.removeClass("ui-accordion-header-active ui-state-active"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), o || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function(e) {
                var i = e.newPanel,
                    n = this.prevShow.length ? this.prevShow : e.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({
                    "aria-hidden": "true"
                }), n.prev().attr("aria-selected", "false"), i.length && n.length ? n.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : i.length && this.headers.filter(function() {
                    return 0 === t(this).attr("tabIndex")
                }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    tabIndex: 0,
                    "aria-expanded": "true"
                })
            },
            _animate: function(t, e, i) {
                var n, s, o, a = this,
                    r = 0,
                    l = t.length && (!e.length || t.index() < e.index()),
                    h = this.options.animate || {},
                    c = l && h.down || h,
                    u = function() {
                        a._toggleComplete(i)
                    };
                return "number" == typeof c && (o = c), "string" == typeof c && (s = c), s = s || c.easing || h.easing, o = o || c.duration || h.duration, e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, {
                    duration: o,
                    easing: s,
                    step: function(t, e) {
                        e.now = Math.round(t)
                    }
                }), void t.hide().animate(this.showProps, {
                    duration: o,
                    easing: s,
                    complete: u,
                    step: function(t, i) {
                        i.now = Math.round(t), "height" !== i.prop ? r += i.now : "content" !== a.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - r), r = 0)
                    }
                })) : e.animate(this.hideProps, o, s, u) : t.animate(this.showProps, o, s, u)
            },
            _toggleComplete: function(t) {
                var e = t.oldPanel;
                e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        return function() {
            function e(t, e, i) {
                return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
            }

            function i(e, i) {
                return parseInt(t.css(e, i), 10) || 0
            }

            function n(e) {
                var i = e[0];
                return 9 === i.nodeType ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : t.isWindow(i) ? {
                    width: e.width(),
                    height: e.height(),
                    offset: {
                        top: e.scrollTop(),
                        left: e.scrollLeft()
                    }
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: i.pageY,
                        left: i.pageX
                    }
                } : {
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    offset: e.offset()
                }
            }
            t.ui = t.ui || {};
            var s, o, a = Math.max,
                r = Math.abs,
                l = Math.round,
                h = /left|center|right/,
                c = /top|center|bottom/,
                u = /[\+\-]\d+(\.[\d]+)?%?/,
                d = /^\w+/,
                p = /%$/,
                f = t.fn.position;
            t.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== s) return s;
                        var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            o = n.children()[0];
                        return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), s = e - i
                    },
                    getScrollInfo: function(e) {
                        var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                            n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                            s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                            o = "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight;
                        return {
                            width: o ? t.position.scrollbarWidth() : 0,
                            height: s ? t.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function(e) {
                        var i = t(e || window),
                            n = t.isWindow(i[0]),
                            s = !!i[0] && 9 === i[0].nodeType;
                        return {
                            element: i,
                            isWindow: n,
                            isDocument: s,
                            offset: i.offset() || {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: i.scrollLeft(),
                            scrollTop: i.scrollTop(),
                            width: n || s ? i.width() : i.outerWidth(),
                            height: n || s ? i.height() : i.outerHeight()
                        }
                    }
                }, t.fn.position = function(s) {
                    if (!s || !s.of) return f.apply(this, arguments);
                    s = t.extend({}, s);
                    var p, m, g, v, _, b, y = t(s.of),
                        w = t.position.getWithinInfo(s.within),
                        x = t.position.getScrollInfo(w),
                        k = (s.collision || "flip").split(" "),
                        C = {};
                    return b = n(y), y[0].preventDefault && (s.at = "left top"), m = b.width, g = b.height, v = b.offset, _ = t.extend({}, v), t.each(["my", "at"], function() {
                        var t, e, i = (s[this] || "").split(" ");
                        1 === i.length && (i = h.test(i[0]) ? i.concat(["center"]) : c.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = h.test(i[0]) ? i[0] : "center", i[1] = c.test(i[1]) ? i[1] : "center", t = u.exec(i[0]), e = u.exec(i[1]), C[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [d.exec(i[0])[0], d.exec(i[1])[0]]
                    }), 1 === k.length && (k[1] = k[0]), "right" === s.at[0] ? _.left += m : "center" === s.at[0] && (_.left += m / 2), "bottom" === s.at[1] ? _.top += g : "center" === s.at[1] && (_.top += g / 2), p = e(C.at, m, g), _.left += p[0], _.top += p[1], this.each(function() {
                        var n, h, c = t(this),
                            u = c.outerWidth(),
                            d = c.outerHeight(),
                            f = i(this, "marginLeft"),
                            b = i(this, "marginTop"),
                            T = u + f + i(this, "marginRight") + x.width,
                            D = d + b + i(this, "marginBottom") + x.height,
                            S = t.extend({}, _),
                            E = e(C.my, c.outerWidth(), c.outerHeight());
                        "right" === s.my[0] ? S.left -= u : "center" === s.my[0] && (S.left -= u / 2), "bottom" === s.my[1] ? S.top -= d : "center" === s.my[1] && (S.top -= d / 2), S.left += E[0], S.top += E[1], o || (S.left = l(S.left), S.top = l(S.top)), n = {
                            marginLeft: f,
                            marginTop: b
                        }, t.each(["left", "top"], function(e, i) {
                            t.ui.position[k[e]] && t.ui.position[k[e]][i](S, {
                                targetWidth: m,
                                targetHeight: g,
                                elemWidth: u,
                                elemHeight: d,
                                collisionPosition: n,
                                collisionWidth: T,
                                collisionHeight: D,
                                offset: [p[0] + E[0], p[1] + E[1]],
                                my: s.my,
                                at: s.at,
                                within: w,
                                elem: c
                            })
                        }), s.using && (h = function(t) {
                            var e = v.left - S.left,
                                i = e + m - u,
                                n = v.top - S.top,
                                o = n + g - d,
                                l = {
                                    target: {
                                        element: y,
                                        left: v.left,
                                        top: v.top,
                                        width: m,
                                        height: g
                                    },
                                    element: {
                                        element: c,
                                        left: S.left,
                                        top: S.top,
                                        width: u,
                                        height: d
                                    },
                                    horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                                    vertical: 0 > o ? "top" : n > 0 ? "bottom" : "middle"
                                };
                            u > m && r(e + i) < m && (l.horizontal = "center"), d > g && r(n + o) < g && (l.vertical = "middle"), l.important = a(r(e), r(i)) > a(r(n), r(o)) ? "horizontal" : "vertical", s.using.call(this, t, l)
                        }), c.offset(t.extend(S, {
                            using: h
                        }))
                    })
                }, t.ui.position = {
                    fit: {
                        left: function(t, e) {
                            var i, n = e.within,
                                s = n.isWindow ? n.scrollLeft : n.offset.left,
                                o = n.width,
                                r = t.left - e.collisionPosition.marginLeft,
                                l = s - r,
                                h = r + e.collisionWidth - o - s;
                            e.collisionWidth > o ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - o - s, t.left += l - i) : t.left = h > 0 && 0 >= l ? s : l > h ? s + o - e.collisionWidth : s : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = a(t.left - r, t.left)
                        },
                        top: function(t, e) {
                            var i, n = e.within,
                                s = n.isWindow ? n.scrollTop : n.offset.top,
                                o = e.within.height,
                                r = t.top - e.collisionPosition.marginTop,
                                l = s - r,
                                h = r + e.collisionHeight - o - s;
                            e.collisionHeight > o ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - o - s, t.top += l - i) : t.top = h > 0 && 0 >= l ? s : l > h ? s + o - e.collisionHeight : s : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = a(t.top - r, t.top)
                        }
                    },
                    flip: {
                        left: function(t, e) {
                            var i, n, s = e.within,
                                o = s.offset.left + s.scrollLeft,
                                a = s.width,
                                l = s.isWindow ? s.scrollLeft : s.offset.left,
                                h = t.left - e.collisionPosition.marginLeft,
                                c = h - l,
                                u = h + e.collisionWidth - a - l,
                                d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                f = -2 * e.offset[0];
                            0 > c ? (i = t.left + d + p + f + e.collisionWidth - a - o, (0 > i || i < r(c)) && (t.left += d + p + f)) : u > 0 && (n = t.left - e.collisionPosition.marginLeft + d + p + f - l, (n > 0 || r(n) < u) && (t.left += d + p + f))
                        },
                        top: function(t, e) {
                            var i, n, s = e.within,
                                o = s.offset.top + s.scrollTop,
                                a = s.height,
                                l = s.isWindow ? s.scrollTop : s.offset.top,
                                h = t.top - e.collisionPosition.marginTop,
                                c = h - l,
                                u = h + e.collisionHeight - a - l,
                                d = "top" === e.my[1],
                                p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                m = -2 * e.offset[1];
                            0 > c ? (n = t.top + p + f + m + e.collisionHeight - a - o, t.top + p + f + m > c && (0 > n || n < r(c)) && (t.top += p + f + m)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - l, t.top + p + f + m > u && (i > 0 || r(i) < u) && (t.top += p + f + m))
                        }
                    },
                    flipfit: {
                        left: function() {
                            t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function() {
                            t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                },
                function() {
                    var e, i, n, s, a, r = document.getElementsByTagName("body")[0],
                        l = document.createElement("div");
                    e = document.createElement(r ? "div" : "body"), n = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    }, r && t.extend(n, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    });
                    for (a in n) e.style[a] = n[a];
                    e.appendChild(l), i = r || document.documentElement, i.insertBefore(e, i.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px;", s = t(l).offset().left, o = s > 10 && 11 > s, e.innerHTML = "", i.removeChild(e)
                }()
        }(), t.ui.position
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./position"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.menu", {
            version: "1.11.2",
            defaultElement: "<ul>",
            delay: 300,
            options: {
                icons: {
                    submenu: "ui-icon-carat-1-e"
                },
                items: "> *",
                menus: "ul",
                position: {
                    my: "left-1 top",
                    at: "right top"
                },
                role: "menu",
                blur: null,
                focus: null,
                select: null
            },
            _create: function() {
                this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                    role: this.options.role,
                    tabIndex: 0
                }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                    "mousedown .ui-menu-item": function(t) {
                        t.preventDefault()
                    },
                    "click .ui-menu-item": function(e) {
                        var i = t(e.target);
                        !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                    },
                    "mouseenter .ui-menu-item": function(e) {
                        if (!this.previousFilter) {
                            var i = t(e.currentTarget);
                            i.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                        }
                    },
                    mouseleave: "collapseAll",
                    "mouseleave .ui-menu": "collapseAll",
                    focus: function(t, e) {
                        var i = this.active || this.element.find(this.options.items).eq(0);
                        e || this.focus(t, i)
                    },
                    blur: function(e) {
                        this._delay(function() {
                            t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                        })
                    },
                    keydown: "_keydown"
                }), this.refresh(), this._on(this.document, {
                    click: function(t) {
                        this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                    }
                })
            },
            _destroy: function() {
                this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                    var e = t(this);
                    e.data("ui-menu-submenu-carat") && e.remove()
                }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
            },
            _keydown: function(e) {
                var i, n, s, o, a = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.PAGE_UP:
                        this.previousPage(e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        this.nextPage(e);
                        break;
                    case t.ui.keyCode.HOME:
                        this._move("first", "first", e);
                        break;
                    case t.ui.keyCode.END:
                        this._move("last", "last", e);
                        break;
                    case t.ui.keyCode.UP:
                        this.previous(e);
                        break;
                    case t.ui.keyCode.DOWN:
                        this.next(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this.collapse(e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                        break;
                    case t.ui.keyCode.ENTER:
                    case t.ui.keyCode.SPACE:
                        this._activate(e);
                        break;
                    case t.ui.keyCode.ESCAPE:
                        this.collapse(e);
                        break;
                    default:
                        a = !1, n = this.previousFilter || "", s = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), s === n ? o = !0 : s = n + s, i = this._filterMenuItems(s), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (s = String.fromCharCode(e.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(e, i), this.previousFilter = s, this.filterTimer = this._delay(function() {
                            delete this.previousFilter
                        }, 1e3)) : delete this.previousFilter
                }
                a && e.preventDefault()
            },
            _activate: function(t) {
                this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(t) : this.select(t))
            },
            refresh: function() {
                var e, i, n = this,
                    s = this.options.icons.submenu,
                    o = this.element.find(this.options.menus);
                this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), o.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                    role: this.options.role,
                    "aria-hidden": "true",
                    "aria-expanded": "false"
                }).each(function() {
                    var e = t(this),
                        i = e.parent(),
                        n = t("<span>").addClass("ui-menu-icon ui-icon " + s).data("ui-menu-submenu-carat", !0);
                    i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"))
                }), e = o.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function() {
                    var e = t(this);
                    n._isDivider(e) && e.addClass("ui-widget-content ui-menu-divider")
                }), i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                    tabIndex: -1,
                    role: this._itemRole()
                }), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
            },
            _itemRole: function() {
                return {
                    menu: "menuitem",
                    listbox: "option"
                }[this.options.role]
            },
            _setOption: function(t, e) {
                "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
            },
            focus: function(t, e) {
                var i, n;
                this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                    this._close()
                }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                    item: e
                })
            },
            _scrollIntoView: function(e) {
                var i, n, s, o, a, r;
                this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + r > a && this.activeMenu.scrollTop(o + s - a + r))
            },
            blur: function(t, e) {
                e || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                    item: this.active
                }))
            },
            _startOpening: function(t) {
                clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                    this._close(), this._open(t)
                }, this.delay))
            },
            _open: function(e) {
                var i = t.extend({
                    of: this.active
                }, this.options.position);
                clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
            },
            collapseAll: function(e, i) {
                clearTimeout(this.timer), this.timer = this._delay(function() {
                    var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                    n.length || (n = this.element), this._close(n), this.blur(e), this.activeMenu = n
                }, this.delay)
            },
            _close: function(t) {
                t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
            },
            _closeOnDocumentClick: function(e) {
                return !t(e.target).closest(".ui-menu").length
            },
            _isDivider: function(t) {
                return !/[^\-\u2014\u2013\s]/.test(t.text())
            },
            collapse: function(t) {
                var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                e && e.length && (this._close(), this.focus(t, e))
            },
            expand: function(t) {
                var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                e && e.length && (this._open(e.parent()), this._delay(function() {
                    this.focus(t, e)
                }))
            },
            next: function(t) {
                this._move("next", "first", t)
            },
            previous: function(t) {
                this._move("prev", "last", t)
            },
            isFirstItem: function() {
                return this.active && !this.active.prevAll(".ui-menu-item").length
            },
            isLastItem: function() {
                return this.active && !this.active.nextAll(".ui-menu-item").length
            },
            _move: function(t, e, i) {
                var n;
                this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
            },
            nextPage: function(e) {
                var i, n, s;
                return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                    return i = t(this), i.offset().top - n - s < 0
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
            },
            previousPage: function(e) {
                var i, n, s;
                return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                    return i = t(this), i.offset().top - n + s > 0
                }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
            },
            _hasScroll: function() {
                return this.element.outerHeight() < this.element.prop("scrollHeight")
            },
            select: function(e) {
                this.active = this.active || t(e.target).closest(".ui-menu-item");
                var i = {
                    item: this.active
                };
                this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
            },
            _filterMenuItems: function(e) {
                var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                    n = new RegExp("^" + i, "i");
                return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                    return n.test(t.trim(t(this).text()))
                })
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./position", "./menu"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.autocomplete", {
            version: "1.11.2",
            defaultElement: "<input>",
            options: {
                appendTo: null,
                autoFocus: !1,
                delay: 300,
                minLength: 1,
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                source: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                response: null,
                search: null,
                select: null
            },
            requestIndex: 0,
            pending: 0,
            _create: function() {
                var e, i, n, s = this.element[0].nodeName.toLowerCase(),
                    o = "textarea" === s,
                    a = "input" === s;
                this.isMultiLine = o ? !0 : a ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                    keydown: function(s) {
                        if (this.element.prop("readOnly")) return e = !0, n = !0, void(i = !0);
                        e = !1, n = !1, i = !1;
                        var o = t.ui.keyCode;
                        switch (s.keyCode) {
                            case o.PAGE_UP:
                                e = !0, this._move("previousPage", s);
                                break;
                            case o.PAGE_DOWN:
                                e = !0, this._move("nextPage", s);
                                break;
                            case o.UP:
                                e = !0, this._keyEvent("previous", s);
                                break;
                            case o.DOWN:
                                e = !0, this._keyEvent("next", s);
                                break;
                            case o.ENTER:
                                this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                                break;
                            case o.TAB:
                                this.menu.active && this.menu.select(s);
                                break;
                            case o.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                                break;
                            default:
                                i = !0, this._searchTimeout(s)
                        }
                    },
                    keypress: function(n) {
                        if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
                        if (!i) {
                            var s = t.ui.keyCode;
                            switch (n.keyCode) {
                                case s.PAGE_UP:
                                    this._move("previousPage", n);
                                    break;
                                case s.PAGE_DOWN:
                                    this._move("nextPage", n);
                                    break;
                                case s.UP:
                                    this._keyEvent("previous", n);
                                    break;
                                case s.DOWN:
                                    this._keyEvent("next", n)
                            }
                        }
                    },
                    input: function(t) {
                        return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t)
                    },
                    focus: function() {
                        this.selectedItem = null, this.previous = this._value()
                    },
                    blur: function(t) {
                        return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                    }
                }), this._initSource(), this.menu = t("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance"), this._on(this.menu.element, {
                    mousedown: function(e) {
                        e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur
                        });
                        var i = this.menu.element[0];
                        t(e.target).closest(".ui-menu-item").length || this._delay(function() {
                            var e = this;
                            this.document.one("mousedown", function(n) {
                                n.target === e.element[0] || n.target === i || t.contains(i, n.target) || e.close()
                            })
                        })
                    },
                    menufocus: function(e, i) {
                        var n, s;
                        return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                            t(e.target).trigger(e.originalEvent)
                        })) : (s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                            item: s
                        }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), n = i.item.attr("aria-label") || s.value, void(n && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion))))
                    },
                    menuselect: function(t, e) {
                        var i = e.item.data("ui-autocomplete-item"),
                            n = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function() {
                            this.previous = n, this.selectedItem = i
                        })), !1 !== this._trigger("select", t, {
                            item: i
                        }) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                    }
                }), this.liveRegion = t("<span>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
            },
            _setOption: function(t, e) {
                this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
            },
            _initSource: function() {
                var e, i, n = this;
                t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, n) {
                    n(t.ui.autocomplete.filter(e, i.term))
                }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, s) {
                    n.xhr && n.xhr.abort(), n.xhr = t.ajax({
                        url: i,
                        data: e,
                        dataType: "json",
                        success: function(t) {
                            s(t)
                        },
                        error: function() {
                            s([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(t) {
                clearTimeout(this.searching), this.searching = this._delay(function() {
                    var e = this.term === this._value(),
                        i = this.menu.element.is(":visible"),
                        n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                    (!e || e && !i && !n) && (this.selectedItem = null, this.search(null, t))
                }, this.options.delay)
            },
            search: function(t, e) {
                return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : this._trigger("search", e) !== !1 ? this._search(t) : void 0
            },
            _search: function(t) {
                this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                    term: t
                }, this._response())
            },
            _response: function() {
                var e = ++this.requestIndex;
                return t.proxy(function(t) {
                    e === this.requestIndex && this.__response(t), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(t) {
                t && (t = this._normalize(t)), this._trigger("response", null, {
                    content: t
                }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
            },
            close: function(t) {
                this.cancelSearch = !0, this._close(t)
            },
            _close: function(t) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
            },
            _change: function(t) {
                this.previous !== this._value() && this._trigger("change", t, {
                    item: this.selectedItem
                })
            },
            _normalize: function(e) {
                return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                    return "string" == typeof e ? {
                        label: e,
                        value: e
                    } : t.extend({}, e, {
                        label: e.label || e.value,
                        value: e.value || e.label
                    })
                })
            },
            _suggest: function(e) {
                var i = this.menu.element.empty();
                this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
                    of: this.element
                }, this.options.position)), this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var t = this.menu.element;
                t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(e, i) {
                var n = this;
                t.each(i, function(t, i) {
                    n._renderItemData(e, i)
                })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-autocomplete-item", e)
            },
            _renderItem: function(e, i) {
                return t("<li>").text(i.label).appendTo(e)
            },
            _move: function(t, e) {
                return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(t, e) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
            }
        }), t.extend(t.ui.autocomplete, {
            escapeRegex: function(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(e, i) {
                var n = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
                return t.grep(e, function(t) {
                    return n.test(t.label || t.value || t)
                })
            }
        }), t.widget("ui.autocomplete", t.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(t) {
                        return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(e) {
                var i;
                this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
            }
        }), t.ui.autocomplete
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], t) : t(jQuery)
    }(function(t) {
        var e, i = "ui-button ui-widget ui-state-default ui-corner-all",
            n = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            s = function() {
                var e = t(this);
                setTimeout(function() {
                    e.find(":ui-button").button("refresh")
                }, 1)
            },
            o = function(e) {
                var i = e.name,
                    n = e.form,
                    s = t([]);
                return i && (i = i.replace(/'/g, "\\'"), s = n ? t(n).find("[name='" + i + "'][type=radio]") : t("[name='" + i + "'][type=radio]", e.ownerDocument).filter(function() {
                    return !this.form
                })), s
            };
        return t.widget("ui.button", {
            version: "1.11.2",
            defaultElement: "<button>",
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, s), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                var n = this,
                    a = this.options,
                    r = "checkbox" === this.type || "radio" === this.type,
                    l = r ? "" : "ui-state-active";
                null === a.label && (a.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                    a.disabled || this === e && t(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function() {
                    a.disabled || t(this).removeClass(l)
                }).bind("click" + this.eventNamespace, function(t) {
                    a.disabled && (t.preventDefault(), t.stopImmediatePropagation())
                }), this._on({
                    focus: function() {
                        this.buttonElement.addClass("ui-state-focus")
                    },
                    blur: function() {
                        this.buttonElement.removeClass("ui-state-focus")
                    }
                }), r && this.element.bind("change" + this.eventNamespace, function() {
                    n.refresh()
                }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    return a.disabled ? !1 : void 0
                }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (a.disabled) return !1;
                    t(this).addClass("ui-state-active"), n.buttonElement.attr("aria-pressed", "true");
                    var e = n.element[0];
                    o(e).not(e).map(function() {
                        return t(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                    return a.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, void n.document.one("mouseup", function() {
                        e = null
                    }))
                }).bind("mouseup" + this.eventNamespace, function() {
                    return a.disabled ? !1 : void t(this).removeClass("ui-state-active")
                }).bind("keydown" + this.eventNamespace, function(e) {
                    return a.disabled ? !1 : void((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"))
                }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                    t(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(e) {
                    e.keyCode === t.ui.keyCode.SPACE && t(this).click()
                })), this._setOption("disabled", a.disabled), this._resetButton()
            },
            _determineButtonType: function() {
                var t, e, i;
                this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            _destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(i + " ui-state-active " + n).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function(t, e) {
                return this._super(t, e), "disabled" === t ? (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), void(e && this.buttonElement.removeClass("checkbox" === this.type || "radio" === this.type ? "ui-state-focus" : "ui-state-focus ui-state-active"))) : void this._resetButton()
            },
            refresh: function() {
                var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? o(this.element[0]).each(function() {
                    t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if ("input" === this.type) return void(this.options.label && this.element.val(this.options.label));
                var e = this.buttonElement.removeClass(n),
                    i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
                    s = this.options.icons,
                    o = s.primary && s.secondary,
                    a = [];
                s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (o ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(o ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : a.push("ui-button-text-only"), e.addClass(a.join(" "))
            }
        }), t.widget("ui.buttonset", {
            version: "1.11.2",
            options: {
                items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(t, e) {
                "disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
            },
            refresh: function() {
                var e = "rtl" === this.element.css("direction"),
                    i = this.element.find(this.options.items),
                    n = i.filter(":ui-button");
                i.not(":ui-button").button(), n.button("refresh"), this.buttons = i.map(function() {
                    return t(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function() {
                this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                    return t(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        }), t.ui.button
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core"], t) : t(jQuery)
    }(function(t) {
        function e(t) {
            for (var e, i; t.length && t[0] !== document;) {
                if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                t = t.parent()
            }
            return 0
        }

        function i() {
            this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                closeText: "Done",
                prevText: "Prev",
                nextText: "Next",
                currentText: "Today",
                monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                weekHeader: "Wk",
                dateFormat: "mm/dd/yy",
                firstDay: 0,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: ""
            }, this._defaults = {
                showOn: "focus",
                showAnim: "fadeIn",
                showOptions: {},
                defaultDate: null,
                appendText: "",
                buttonText: "...",
                buttonImage: "",
                buttonImageOnly: !1,
                hideIfNoPrevNext: !1,
                navigationAsDateFormat: !1,
                gotoCurrent: !1,
                changeMonth: !1,
                changeYear: !1,
                yearRange: "c-10:c+10",
                showOtherMonths: !1,
                selectOtherMonths: !1,
                showWeek: !1,
                calculateWeek: this.iso8601Week,
                shortYearCutoff: "+10",
                minDate: null,
                maxDate: null,
                duration: "fast",
                beforeShowDay: null,
                beforeShow: null,
                onSelect: null,
                onChangeMonthYear: null,
                onClose: null,
                numberOfMonths: 1,
                showCurrentAtPos: 0,
                stepMonths: 1,
                stepBigMonths: 12,
                altField: "",
                altFormat: "",
                constrainInput: !0,
                showButtonPanel: !1,
                autoSize: !1,
                disabled: !1
            }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
        }

        function n(e) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return e.delegate(i, "mouseout", function() {
                t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
            }).delegate(i, "mouseover", s)
        }

        function s() {
            t.datepicker._isDisabledDatepicker(a.inline ? a.dpDiv.parent()[0] : a.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
        }

        function o(e, i) {
            t.extend(e, i);
            for (var n in i) null == i[n] && (e[n] = i[n]);
            return e
        }
        t.extend(t.ui, {
            datepicker: {
                version: "1.11.2"
            }
        });
        var a;
        return t.extend(i.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(t) {
                return o(this._defaults, t || {}), this
            },
            _attachDatepicker: function(e, i) {
                var n, s, o;
                n = e.nodeName.toLowerCase(), s = "div" === n || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), s), o.settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o)
            },
            _newInst: function(e, i) {
                var s = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: s,
                    input: e,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: i,
                    dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(e, i) {
                var n = t(e);
                i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
            },
            _attachments: function(e, i) {
                var n, s, o, a = this._get(i, "appendText"),
                    r = this._get(i, "isRTL");
                i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), ("focus" === n || "both" === n) && e.focus(this._showDatepicker), ("button" === n || "both" === n) && (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                    src: o,
                    alt: s,
                    title: s
                }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
                    src: o,
                    alt: s,
                    title: s
                }) : s)), e[r ? "before" : "after"](i.trigger), i.trigger.click(function() {
                    return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
                }))
            },
            _autoSize: function(t) {
                if (this._get(t, "autoSize") && !t.inline) {
                    var e, i, n, s, o = new Date(2009, 11, 20),
                        a = this._get(t, "dateFormat");
                    a.match(/[DM]/) && (e = function(t) {
                        for (i = 0, n = 0, s = 0; s < t.length; s++) t[s].length > i && (i = t[s].length, n = s);
                        return n
                    }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
                }
            },
            _inlineDatepicker: function(e, i) {
                var n = t(e);
                n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(e, i, n, s, a) {
                var r, l, h, c, u, d = this._dialogInst;
                return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), o(d.settings, s || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
            },
            _destroyDatepicker: function(e) {
                var i, n = t(e),
                    s = t.data(e, "datepicker");
                n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty())
            },
            _enableDatepicker: function(e) {
                var i, n, s = t(e),
                    o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                    return t === e ? null : t
                }))
            },
            _disableDatepicker: function(e) {
                var i, n, s = t(e),
                    o = t.data(e, "datepicker");
                s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
                    return t === e ? null : t
                }), this._disabledInputs[this._disabledInputs.length] = e)
            },
            _isDisabledDatepicker: function(t) {
                if (!t) return !1;
                for (var e = 0; e < this._disabledInputs.length; e++)
                    if (this._disabledInputs[e] === t) return !0;
                return !1
            },
            _getInst: function(e) {
                try {
                    return t.data(e, "datepicker")
                } catch (i) {
                    throw "Missing instance data for this datepicker"
                }
            },
            _optionDatepicker: function(e, i, n) {
                var s, a, r, l, h = this._getInst(e);
                return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (s = i || {}, "string" == typeof i && (s = {}, s[i] = n), void(h && (this._curInst === h && this._hideDatepicker(), a = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), o(h.settings, s), null !== r && void 0 !== s.dateFormat && void 0 === s.minDate && (h.settings.minDate = this._formatDate(h, r)), null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, a), this._updateAlternate(h), this._updateDatepicker(h))))
            },
            _changeDatepicker: function(t, e, i) {
                this._optionDatepicker(t, e, i)
            },
            _refreshDatepicker: function(t) {
                var e = this._getInst(t);
                e && this._updateDatepicker(e)
            },
            _setDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function(t, e) {
                var i = this._getInst(t);
                return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
            },
            _doKeyDown: function(e) {
                var i, n, s, o = t.datepicker._getInst(e.target),
                    a = !0,
                    r = o.dpDiv.is(".ui-datepicker-rtl");
                if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                    case 9:
                        t.datepicker._hideDatepicker(), a = !1;
                        break;
                    case 13:
                        return s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), s[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), i = t.datepicker._get(o, "onSelect"), i ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(), !1;
                    case 27:
                        t.datepicker._hideDatepicker();
                        break;
                    case 33:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 34:
                        t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 35:
                        (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                        break;
                    case 36:
                        (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                        break;
                    case 37:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 38:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                        break;
                    case 39:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                        break;
                    case 40:
                        (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                        break;
                    default:
                        a = !1
                } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
                a && (e.preventDefault(), e.stopPropagation())
            },
            _doKeyPress: function(e) {
                var i, n, s = t.datepicker._getInst(e.target);
                return t.datepicker._get(s, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0
            },
            _doKeyUp: function(e) {
                var i, n = t.datepicker._getInst(e.target);
                if (n.input.val() !== n.lastVal) try {
                    i = t.datepicker.parseDate(t.datepicker._get(n, "dateFormat"), n.input ? n.input.val() : null, t.datepicker._getFormatConfig(n)), i && (t.datepicker._setDateFromField(n), t.datepicker._updateAlternate(n), t.datepicker._updateDatepicker(n))
                } catch (s) {}
                return !0
            },
            _showDatepicker: function(i) {
                if (i = i.target || i, "input" !== i.nodeName.toLowerCase() && (i = t("input", i.parentNode)[0]), !t.datepicker._isDisabledDatepicker(i) && t.datepicker._lastInput !== i) {
                    var n, s, a, r, l, h, c;
                    n = t.datepicker._getInst(i), t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(!0, !0), n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(n, "beforeShow"), a = s ? s.apply(i, [i, n]) : {}, a !== !1 && (o(n.settings, a), n.lastVal = null, t.datepicker._lastInput = i, t.datepicker._setDateFromField(n), t.datepicker._inDialog && (i.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(i), t.datepicker._pos[1] += i.offsetHeight), r = !1, t(i).parents().each(function() {
                        return r |= "fixed" === t(this).css("position"), !r
                    }), l = {
                        left: t.datepicker._pos[0],
                        top: t.datepicker._pos[1]
                    }, t.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), t.datepicker._updateDatepicker(n), l = t.datepicker._checkOffset(n, l, r), n.dpDiv.css({
                        position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
                        display: "none",
                        left: l.left + "px",
                        top: l.top + "px"
                    }), n.inline || (h = t.datepicker._get(n, "showAnim"), c = t.datepicker._get(n, "duration"), n.dpDiv.css("z-index", e(t(i)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? n.dpDiv.show(h, t.datepicker._get(n, "showOptions"), c) : n.dpDiv[h || "show"](h ? c : null), t.datepicker._shouldFocusInput(n) && n.input.focus(), t.datepicker._curInst = n))
                }
            },
            _updateDatepicker: function(e) {
                this.maxRows = 4, a = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
                var i, n = this._getNumberOfMonths(e),
                    o = n[1],
                    r = 17,
                    l = e.dpDiv.find("." + this._dayOverClass + " a");
                l.length > 0 && s.apply(l.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", r * o + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
                    i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function(t) {
                return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
            },
            _checkOffset: function(e, i, n) {
                var s = e.dpDiv.outerWidth(),
                    o = e.dpDiv.outerHeight(),
                    a = e.input ? e.input.outerWidth() : 0,
                    r = e.input ? e.input.outerHeight() : 0,
                    l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                    h = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
                return i.left -= this._get(e, "isRTL") ? s - a : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + r) : 0), i
            },
            _findPos: function(e) {
                for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"];
                return i = t(e).offset(), [i.left, i.top]
            },
            _hideDatepicker: function(e) {
                var i, n, s, o, a = this._curInst;
                !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), n = this._get(a, "duration"), s = function() {
                    t.datepicker._tidyDialog(a)
                }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), n, s) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(t) {
                t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(e) {
                if (t.datepicker._curInst) {
                    var i = t(e.target),
                        n = t.datepicker._getInst(i[0]);
                    (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(e, i, n) {
                var s = t(e),
                    o = this._getInst(s[0]);
                this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o))
            },
            _gotoToday: function(e) {
                var i, n = t(e),
                    s = this._getInst(n[0]);
                this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
            },
            _selectMonthYear: function(e, i, n) {
                var s = t(e),
                    o = this._getInst(s[0]);
                o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s)
            },
            _selectDay: function(e, i, n, s) {
                var o, a = t(e);
                t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
            },
            _clearDate: function(e) {
                var i = t(e);
                this._selectDate(i, "")
            },
            _selectDate: function(e, i) {
                var n, s = t(e),
                    o = this._getInst(s[0]);
                i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), n = this._get(o, "onSelect"), n ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(e) {
                var i, n, s, o = this._get(e, "altField");
                o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).each(function() {
                    t(this).val(s)
                }))
            },
            noWeekends: function(t) {
                var e = t.getDay();
                return [e > 0 && 6 > e, ""]
            },
            iso8601Week: function(t) {
                var e, i = new Date(t.getTime());
                return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
            },
            parseDate: function(e, i, n) {
                if (null == e || null == i) throw "Invalid arguments";
                if (i = "object" == typeof i ? i.toString() : i + "", "" === i) return null;
                var s, o, a, r, l = 0,
                    h = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                    c = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                    u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                    d = (n ? n.dayNames : null) || this._defaults.dayNames,
                    p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                    f = (n ? n.monthNames : null) || this._defaults.monthNames,
                    m = -1,
                    g = -1,
                    v = -1,
                    _ = -1,
                    b = !1,
                    y = function(t) {
                        var i = s + 1 < e.length && e.charAt(s + 1) === t;
                        return i && s++, i
                    },
                    w = function(t) {
                        var e = y(t),
                            n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                            s = "y" === t ? n : 1,
                            o = new RegExp("^\\d{" + s + "," + n + "}"),
                            a = i.substring(l).match(o);
                        if (!a) throw "Missing number at position " + l;
                        return l += a[0].length, parseInt(a[0], 10)
                    },
                    x = function(e, n, s) {
                        var o = -1,
                            a = t.map(y(e) ? s : n, function(t, e) {
                                return [
                                    [e, t]
                                ]
                            }).sort(function(t, e) {
                                return -(t[1].length - e[1].length)
                            });
                        if (t.each(a, function(t, e) {
                                var n = e[1];
                                return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (o = e[0], l += n.length, !1) : void 0
                            }), -1 !== o) return o + 1;
                        throw "Unknown name at position " + l
                    },
                    k = function() {
                        if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
                        l++
                    };
                for (s = 0; s < e.length; s++)
                    if (b) "'" !== e.charAt(s) || y("'") ? k() : b = !1;
                    else switch (e.charAt(s)) {
                        case "d":
                            v = w("d");
                            break;
                        case "D":
                            x("D", u, d);
                            break;
                        case "o":
                            _ = w("o");
                            break;
                        case "m":
                            g = w("m");
                            break;
                        case "M":
                            g = x("M", p, f);
                            break;
                        case "y":
                            m = w("y");
                            break;
                        case "@":
                            r = new Date(w("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                            break;
                        case "!":
                            r = new Date((w("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                            break;
                        case "'":
                            y("'") ? k() : b = !0;
                            break;
                        default:
                            k()
                    }
                    if (l < i.length && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
                if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= m ? 0 : -100)), _ > -1)
                    for (g = 1, v = _;;) {
                        if (o = this._getDaysInMonth(m, g - 1), o >= v) break;
                        g++, v -= o
                    }
                if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";
                return r
            },
            ATOM: "yy-mm-dd",
            COOKIE: "D, dd M yy",
            ISO_8601: "yy-mm-dd",
            RFC_822: "D, d M y",
            RFC_850: "DD, dd-M-y",
            RFC_1036: "D, d M y",
            RFC_1123: "D, d M yy",
            RFC_2822: "D, d M yy",
            RSS: "D, d M y",
            TICKS: "!",
            TIMESTAMP: "@",
            W3C: "yy-mm-dd",
            _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
            formatDate: function(t, e, i) {
                if (!e) return "";
                var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    o = (i ? i.dayNames : null) || this._defaults.dayNames,
                    a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    r = (i ? i.monthNames : null) || this._defaults.monthNames,
                    l = function(e) {
                        var i = n + 1 < t.length && t.charAt(n + 1) === e;
                        return i && n++, i
                    },
                    h = function(t, e, i) {
                        var n = "" + e;
                        if (l(t))
                            for (; n.length < i;) n = "0" + n;
                        return n
                    },
                    c = function(t, e, i, n) {
                        return l(t) ? n[e] : i[e]
                    },
                    u = "",
                    d = !1;
                if (e)
                    for (n = 0; n < t.length; n++)
                        if (d) "'" !== t.charAt(n) || l("'") ? u += t.charAt(n) : d = !1;
                        else switch (t.charAt(n)) {
                            case "d":
                                u += h("d", e.getDate(), 2);
                                break;
                            case "D":
                                u += c("D", e.getDay(), s, o);
                                break;
                            case "o":
                                u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                u += h("m", e.getMonth() + 1, 2);
                                break;
                            case "M":
                                u += c("M", e.getMonth(), a, r);
                                break;
                            case "y":
                                u += l("y") ? e.getFullYear() : (e.getYear() % 100 < 10 ? "0" : "") + e.getYear() % 100;
                                break;
                            case "@":
                                u += e.getTime();
                                break;
                            case "!":
                                u += 1e4 * e.getTime() + this._ticksTo1970;
                                break;
                            case "'":
                                l("'") ? u += "'" : d = !0;
                                break;
                            default:
                                u += t.charAt(n)
                        }
                        return u
            },
            _possibleChars: function(t) {
                var e, i = "",
                    n = !1,
                    s = function(i) {
                        var n = e + 1 < t.length && t.charAt(e + 1) === i;
                        return n && e++, n
                    };
                for (e = 0; e < t.length; e++)
                    if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                    else switch (t.charAt(e)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            s("'") ? i += "'" : n = !0;
                            break;
                        default:
                            i += t.charAt(e)
                    }
                    return i
            },
            _get: function(t, e) {
                return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
            },
            _setDateFromField: function(t, e) {
                if (t.input.val() !== t.lastVal) {
                    var i = this._get(t, "dateFormat"),
                        n = t.lastVal = t.input ? t.input.val() : null,
                        s = this._getDefaultDate(t),
                        o = s,
                        a = this._getFormatConfig(t);
                    try {
                        o = this.parseDate(i, n, a) || s
                    } catch (r) {
                        n = e ? "" : n
                    }
                    t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
                }
            },
            _getDefaultDate: function(t) {
                return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
            },
            _determineDate: function(e, i, n) {
                var s = function(t) {
                        var e = new Date;
                        return e.setDate(e.getDate() + t), e
                    },
                    o = function(i) {
                        try {
                            return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                        } catch (n) {}
                        for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = s.getFullYear(), a = s.getMonth(), r = s.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = l.exec(i); h;) {
                            switch (h[2] || "d") {
                                case "d":
                                case "D":
                                    r += parseInt(h[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    r += 7 * parseInt(h[1], 10);
                                    break;
                                case "m":
                                case "M":
                                    a += parseInt(h[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));
                                    break;
                                case "y":
                                case "Y":
                                    o += parseInt(h[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a))
                            }
                            h = l.exec(i)
                        }
                        return new Date(o, a, r)
                    },
                    a = null == i || "" === i ? n : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? n : s(i) : new Date(i.getTime());
                return a = a && "Invalid Date" === a.toString() ? n : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
            },
            _daylightSavingAdjust: function(t) {
                return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
            },
            _setDate: function(t, e, i) {
                var n = !e,
                    s = t.selectedMonth,
                    o = t.selectedYear,
                    a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
            },
            _getDate: function(t) {
                var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return e
            },
            _attachHandlers: function(e) {
                var i = this._get(e, "stepMonths"),
                    n = "#" + e.id.replace(/\\\\/g, "\\");
                e.dpDiv.find("[data-handler]").map(function() {
                    var e = {
                        prev: function() {
                            t.datepicker._adjustDate(n, -i, "M")
                        },
                        next: function() {
                            t.datepicker._adjustDate(n, +i, "M")
                        },
                        hide: function() {
                            t.datepicker._hideDatepicker()
                        },
                        today: function() {
                            t.datepicker._gotoToday(n)
                        },
                        selectDay: function() {
                            return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return t.datepicker._selectMonthYear(n, this, "M"), !1
                        },
                        selectYear: function() {
                            return t.datepicker._selectMonthYear(n, this, "Y"), !1
                        }
                    };
                    t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(t) {
                var e, i, n, s, o, a, r, l, h, c, u, d, p, f, m, g, v, _, b, y, w, x, k, C, T, D, S, E, A, I, P, M, F, N, H, z, j, O, W, R = new Date,
                    q = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
                    L = this._get(t, "isRTL"),
                    $ = this._get(t, "showButtonPanel"),
                    B = this._get(t, "hideIfNoPrevNext"),
                    Y = this._get(t, "navigationAsDateFormat"),
                    U = this._getNumberOfMonths(t),
                    X = this._get(t, "showCurrentAtPos"),
                    Q = this._get(t, "stepMonths"),
                    K = 1 !== U[0] || 1 !== U[1],
                    V = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    G = this._getMinMaxDate(t, "min"),
                    Z = this._getMinMaxDate(t, "max"),
                    J = t.drawMonth - X,
                    te = t.drawYear;
                if (0 > J && (J += 12, te--), Z)
                    for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - U[0] * U[1] + 1, Z.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(te, J, 1)) > e;) J--, 0 > J && (J = 11, te--);
                for (t.drawMonth = J, t.drawYear = te, i = this._get(t, "prevText"), i = Y ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, J - Q, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, te, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = Y ? this.formatDate(s, this._daylightSavingAdjust(new Date(te, J + Q, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, te, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + "'>" + s + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + "'>" + s + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? V : q, a = Y ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = $ ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (L ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (L ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", x = 0; x < U[0]; x++) {
                    for (k = "", this.maxRows = 4, C = 0; C < U[1]; C++) {
                        if (T = this._daylightSavingAdjust(new Date(te, J, t.selectedDay)), D = " ui-corner-all", S = "", K) {
                            if (S += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                                case 0:
                                    S += " ui-datepicker-group-first", D = " ui-corner-" + (L ? "right" : "left");
                                    break;
                                case U[1] - 1:
                                    S += " ui-datepicker-group-last", D = " ui-corner-" + (L ? "left" : "right");
                                    break;
                                default:
                                    S += " ui-datepicker-group-middle", D = ""
                            }
                            S += "'>"
                        }
                        for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + D + "'>" + (/all|left/.test(D) && 0 === x ? L ? o : n : "") + (/all|right/.test(D) && 0 === x ? L ? n : o : "") + this._generateMonthYearHeader(t, J, te, G, Z, x > 0 || C > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", E = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) A = (w + c) % 7, E += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[A] + "'>" + p[A] + "</span></th>";
                        for (S += E + "</tr></thead><tbody>", I = this._getDaysInMonth(te, J), te === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, I)), P = (this._getFirstDayOfMonth(te, J) - c + 7) % 7, M = Math.ceil((P + I) / 7), F = K && this.maxRows > M ? this.maxRows : M, this.maxRows = F, N = this._daylightSavingAdjust(new Date(te, J, 1 - P)), H = 0; F > H; H++) {
                            for (S += "<tr>", z = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(N) + "</td>" : "", w = 0; 7 > w; w++) j = g ? g.apply(t.input ? t.input[0] : null, [N]) : [!0, ""], O = N.getMonth() !== J, W = O && !_ || !j[0] || G && G > N || Z && N > Z, z += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (O ? " ui-datepicker-other-month" : "") + (N.getTime() === T.getTime() && J === t.selectedMonth && t._keyEvent || b.getTime() === N.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (O && !v ? "" : " " + j[1] + (N.getTime() === V.getTime() ? " " + this._currentClass : "") + (N.getTime() === q.getTime() ? " ui-datepicker-today" : "")) + "'" + (O && !v || !j[2] ? "" : " title='" + j[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + N.getMonth() + "' data-year='" + N.getFullYear() + "'") + ">" + (O && !v ? "&#xa0;" : W ? "<span class='ui-state-default'>" + N.getDate() + "</span>" : "<a class='ui-state-default" + (N.getTime() === q.getTime() ? " ui-state-highlight" : "") + (N.getTime() === V.getTime() ? " ui-state-active" : "") + (O ? " ui-priority-secondary" : "") + "' href='#'>" + N.getDate() + "</a>") + "</td>", N.setDate(N.getDate() + 1), N = this._daylightSavingAdjust(N);
                            S += z + "</tr>"
                        }
                        J++, J > 11 && (J = 0, te++), S += "</tbody></table>" + (K ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += S
                    }
                    y += k
                }
                return y += h, t._keyEvent = !1, y
            },
            _generateMonthYearHeader: function(t, e, i, n, s, o, a, r) {
                var l, h, c, u, d, p, f, m, g = this._get(t, "changeMonth"),
                    v = this._get(t, "changeYear"),
                    _ = this._get(t, "showMonthAfterYear"),
                    b = "<div class='ui-datepicker-title'>",
                    y = "";
                if (o || !g) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
                else {
                    for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= n.getMonth()) && (!h || c <= s.getMonth()) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                    y += "</select>"
                }
                if (_ || (b += y + (!o && g && v ? "" : "&#xa0;")), !t.yearshtml)
                    if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                    else {
                        for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
                                var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                                return isNaN(e) ? d : e
                            }, f = p(u[0]), m = Math.max(f, p(u[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, m = s ? Math.min(m, s.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                        t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                    }
                return b += this._get(t, "yearSuffix"), _ && (b += (!o && g && v ? "" : "&#xa0;") + y), b += "</div>"
            },
            _adjustInstDate: function(t, e, i) {
                var n = t.drawYear + ("Y" === i ? e : 0),
                    s = t.drawMonth + ("M" === i ? e : 0),
                    o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                    a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
                t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
            },
            _restrictMinMax: function(t, e) {
                var i = this._getMinMaxDate(t, "min"),
                    n = this._getMinMaxDate(t, "max"),
                    s = i && i > e ? i : e;
                return n && s > n ? n : s
            },
            _notifyChange: function(t) {
                var e = this._get(t, "onChangeMonthYear");
                e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
            },
            _getNumberOfMonths: function(t) {
                var e = this._get(t, "numberOfMonths");
                return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
            },
            _getMinMaxDate: function(t, e) {
                return this._determineDate(t, this._get(t, e + "Date"), null)
            },
            _getDaysInMonth: function(t, e) {
                return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
            },
            _getFirstDayOfMonth: function(t, e) {
                return new Date(t, e, 1).getDay()
            },
            _canAdjustMonth: function(t, e, i, n) {
                var s = this._getNumberOfMonths(t),
                    o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
                return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
            },
            _isInRange: function(t, e) {
                var i, n, s = this._getMinMaxDate(t, "min"),
                    o = this._getMinMaxDate(t, "max"),
                    a = null,
                    r = null,
                    l = this._get(t, "yearRange");
                return l && (i = l.split(":"), n = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += n), i[1].match(/[+\-].*/) && (r += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || e.getFullYear() <= r)
            },
            _getFormatConfig: function(t) {
                var e = this._get(t, "shortYearCutoff");
                return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                    shortYearCutoff: e,
                    dayNamesShort: this._get(t, "dayNamesShort"),
                    dayNames: this._get(t, "dayNames"),
                    monthNamesShort: this._get(t, "monthNamesShort"),
                    monthNames: this._get(t, "monthNames")
                }
            },
            _formatDate: function(t, e, i, n) {
                e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t))
            }
        }), t.fn.datepicker = function(e) {
            if (!this.length) return this;
            t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
                "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
            }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
        }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.11.2", t.datepicker
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./widget"], t) : t(jQuery)
    }(function(t) {
        var e = !1;
        return t(document).mouseup(function() {
            e = !1
        }), t.widget("ui.mouse", {
            version: "1.11.2",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var e = this;
                this.element.bind("mousedown." + this.widgetName, function(t) {
                    return e._mouseDown(t)
                }).bind("click." + this.widgetName, function(i) {
                    return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(i) {
                if (!e) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                    var n = this,
                        s = 1 === i.which,
                        o = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                    return s && !o && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        n.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                        return n._mouseMove(t)
                    }, this._mouseUpDelegate = function(t) {
                        return n._mouseUp(t)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
                }
            },
            _mouseMove: function(e) {
                if (this._mouseMoved) {
                    if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
                    if (!e.which) return this._mouseUp(e)
                }
                return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
            },
            _mouseUp: function(i) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, i.target === this._mouseDownEvent.target && t.data(i.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(i)), e = !1, !1
            },
            _mouseDistanceMet: function(t) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.draggable", t.ui.mouse, {
            version: "1.11.2",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
            },
            _setOption: function(t, e) {
                this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function() {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
            },
            _mouseCapture: function(e) {
                var i = this.options;
                return this._blurActiveElement(e), this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
            },
            _blockFrames: function(e) {
                this.iframeBlocks = this.document.find(e).map(function() {
                    var e = t(this);
                    return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function(e) {
                var i = this.document[0];
                if (this.handleElement.is(e.target)) try {
                    i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && t(i.activeElement).blur()
                } catch (n) {}
            },
            _mouseStart: function(e) {
                var i = this.options;
                return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                    return "fixed" === t(this).css("position")
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._normalizeRightBottom(), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
            },
            _refreshOffsets: function(t) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }, this.offset.click = {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                }
            },
            _mouseDrag: function(e, i) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    var n = this._uiHash();
                    if (this._trigger("drag", e, n) === !1) return this._mouseUp({}), !1;
                    this.position = n.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
            },
            _mouseStop: function(e) {
                var i = this,
                    n = !1;
                return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    i._trigger("stop", e) !== !1 && i._clear()
                }) : this._trigger("stop", e) !== !1 && this._clear(), !1
            },
            _mouseUp: function(e) {
                return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.focus(), t.ui.mouse.prototype._mouseUp.call(this, e)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(e) {
                return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
            },
            _removeHandleClassName: function() {
                this.handleElement.removeClass("ui-draggable-handle")
            },
            _createHelper: function(e) {
                var i = this.options,
                    n = t.isFunction(i.helper),
                    s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
            },
            _setPositionRelative: function() {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _isRootNode: function(t) {
                return /(html|body)/i.test(t.tagName) || t === this.document[0]
            },
            _getParentOffset: function() {
                var e = this.offsetParent.offset(),
                    i = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var t = this.element.position(),
                    e = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var e, i, n, s = this.options,
                    o = this.document[0];
                return this.relativeContainer = null, s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), i = t(s.containment), n = i[0], void(n && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
            },
            _convertPositionTo: function(t, e) {
                e || (e = this.position);
                var i = "absolute" === t ? 1 : -1,
                    n = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                    left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function(t, e) {
                var i, n, s, o, a = this.options,
                    r = this._isRootNode(this.scrollParent[0]),
                    l = t.pageX,
                    h = t.pageY;
                return r && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), a.grid && (s = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - a.grid[1] : s + a.grid[1] : s, o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (l = this.originalPageX), "x" === a.axis && (h = this.originalPageY)), {
                    top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                    left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _normalizeRightBottom: function() {
                "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
            },
            _trigger: function(e, i, n) {
                return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, n)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), t.ui.plugin.add("draggable", "connectToSortable", {
            start: function(e, i, n) {
                var s = t.extend({}, i, {
                    item: n.element
                });
                n.sortables = [], t(n.options.connectToSortable).each(function() {
                    var i = t(this).sortable("instance");
                    i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s))
                })
            },
            stop: function(e, i, n) {
                var s = t.extend({}, i, {
                    item: n.element
                });
                n.cancelHelperRemoval = !1, t.each(n.sortables, function() {
                    var t = this;
                    t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                        position: t.placeholder.css("position"),
                        top: t.placeholder.css("top"),
                        left: t.placeholder.css("left")
                    }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
                })
            },
            drag: function(e, i, n) {
                t.each(n.sortables, function() {
                    var s = !1,
                        o = this;
                    o.positionAbs = n.positionAbs, o.helperProportions = n.helperProportions, o.offset.click = n.offset.click, o._intersectsWith(o.containerCache) && (s = !0, t.each(n.sortables, function() {
                        return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1), s
                    })), s ? (o.isOver || (o.isOver = 1, o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
                        return i.helper[0]
                    }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", e), n.dropped = o.element, t.each(n.sortables, function() {
                        this.refreshPositions()
                    }), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), n._refreshOffsets(e), i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, t.each(n.sortables, function() {
                        this.refreshPositions()
                    }))
                })
            }
        }), t.ui.plugin.add("draggable", "cursor", {
            start: function(e, i, n) {
                var s = t("body"),
                    o = n.options;
                s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor)
            },
            stop: function(e, i, n) {
                var s = n.options;
                s._cursor && t("body").css("cursor", s._cursor)
            }
        }), t.ui.plugin.add("draggable", "opacity", {
            start: function(e, i, n) {
                var s = t(i.helper),
                    o = n.options;
                s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity)
            },
            stop: function(e, i, n) {
                var s = n.options;
                s._opacity && t(i.helper).css("opacity", s._opacity)
            }
        }), t.ui.plugin.add("draggable", "scroll", {
            start: function(t, e, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
            },
            drag: function(e, i, n) {
                var s = n.options,
                    o = !1,
                    a = n.scrollParentNotHidden[0],
                    r = n.document[0];
                a !== r && "HTML" !== a.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + a.offsetHeight - e.pageY < s.scrollSensitivity ? a.scrollTop = o = a.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (a.scrollTop = o = a.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + a.offsetWidth - e.pageX < s.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(r).scrollTop() < s.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < s.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(r).scrollLeft() < s.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < s.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + s.scrollSpeed)))), o !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
            }
        }), t.ui.plugin.add("draggable", "snap", {
            start: function(e, i, n) {
                var s = n.options;
                n.snapElements = [], t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function() {
                    var e = t(this),
                        i = e.offset();
                    this !== n.element[0] && n.snapElements.push({
                        item: this,
                        width: e.outerWidth(),
                        height: e.outerHeight(),
                        top: i.top,
                        left: i.left
                    })
                })
            },
            drag: function(e, i, n) {
                var s, o, a, r, l, h, c, u, d, p, f = n.options,
                    m = f.snapTolerance,
                    g = i.offset.left,
                    v = g + n.helperProportions.width,
                    _ = i.offset.top,
                    b = _ + n.helperProportions.height;
                for (d = n.snapElements.length - 1; d >= 0; d--) l = n.snapElements[d].left - n.margins.left, h = l + n.snapElements[d].width, c = n.snapElements[d].top - n.margins.top, u = c + n.snapElements[d].height, l - m > v || g > h + m || c - m > b || _ > u + m || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), {
                    snapItem: n.snapElements[d].item
                })), n.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (s = Math.abs(c - b) <= m, o = Math.abs(u - _) <= m, a = Math.abs(l - v) <= m, r = Math.abs(h - g) <= m, s && (i.position.top = n._convertPositionTo("relative", {
                    top: c - n.helperProportions.height,
                    left: 0
                }).top), o && (i.position.top = n._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top), a && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: l - n.helperProportions.width
                }).left), r && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left)), p = s || o || a || r, "outer" !== f.snapMode && (s = Math.abs(c - _) <= m, o = Math.abs(u - b) <= m, a = Math.abs(l - g) <= m, r = Math.abs(h - v) <= m, s && (i.position.top = n._convertPositionTo("relative", {
                    top: c,
                    left: 0
                }).top), o && (i.position.top = n._convertPositionTo("relative", {
                    top: u - n.helperProportions.height,
                    left: 0
                }).top), a && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left), r && (i.position.left = n._convertPositionTo("relative", {
                    top: 0,
                    left: h - n.helperProportions.width
                }).left)), !n.snapElements[d].snapping && (s || o || a || r || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), {
                    snapItem: n.snapElements[d].item
                })), n.snapElements[d].snapping = s || o || a || r || p)
            }
        }), t.ui.plugin.add("draggable", "stack", {
            start: function(e, i, n) {
                var s, o = n.options,
                    a = t.makeArray(t(o.stack)).sort(function(e, i) {
                        return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                    });
                a.length && (s = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) {
                    t(this).css("zIndex", s + e)
                }), this.css("zIndex", s + a.length))
            }
        }), t.ui.plugin.add("draggable", "zIndex", {
            start: function(e, i, n) {
                var s = t(i.helper),
                    o = n.options;
                s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex)
            },
            stop: function(e, i, n) {
                var s = n.options;
                s._zIndex && t(i.helper).css("zIndex", s._zIndex)
            }
        }), t.ui.draggable
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.resizable", t.ui.mouse, {
            version: "1.11.2",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function(t) {
                return parseInt(t, 10) || 0
            },
            _isNumber: function(t) {
                return !isNaN(parseInt(t, 10))
            },
            _hasScroll: function(e, i) {
                if ("hidden" === t(e).css("overflow")) return !1;
                var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                    s = !1;
                return e[n] > 0 ? !0 : (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
            },
            _create: function() {
                var e, i, n, s, o, a = this,
                    r = this.options;
                if (this.element.addClass("ui-resizable"), t.extend(this, {
                        _aspectRatio: !!r.aspectRatio,
                        aspectRatio: r.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this.handles.constructor === String)
                    for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; i < e.length; i++) n = t.trim(e[i]), o = "ui-resizable-" + n, s = t("<div class='ui-resizable-handle " + o + "'></div>"), s.css({
                        zIndex: r.zIndex
                    }), "se" === n && s.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[n] = ".ui-resizable-" + n, this.element.append(s);
                this._renderAxis = function(e) {
                    var i, n, s, o;
                    e = e || this.element;
                    for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = this.element.children(this.handles[i]).first().show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), t(this.handles[i]).length
                }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                    a.resizing || (this.className && (s = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), a.axis = s && s[1] ? s[1] : "se")
                }), r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    r.disabled || (t(this).removeClass("ui-resizable-autohide"), a._handles.show())
                }).mouseleave(function() {
                    r.disabled || a.resizing || (t(this).addClass("ui-resizable-autohide"), a._handles.hide())
                })), this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var e, i = function(e) {
                    t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                    position: e.css("position"),
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: e.css("top"),
                    left: e.css("left")
                }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
            },
            _mouseCapture: function(e) {
                var i, n, s = !1;
                for (i in this.handles) n = t(this.handles[i])[0], (n === e.target || t.contains(n, e.target)) && (s = !0);
                return !this.options.disabled && s
            },
            _mouseStart: function(e) {
                var i, n, s, o = this.options,
                    a = this.element;
                return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: i,
                    top: n
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: a.width(),
                    height: a.height()
                }, this.originalSize = this._helper ? {
                    width: a.outerWidth(),
                    height: a.outerHeight()
                } : {
                    width: a.width(),
                    height: a.height()
                }, this.sizeDiff = {
                    width: a.outerWidth() - a.width(),
                    height: a.outerHeight() - a.height()
                }, this.originalPosition = {
                    left: i,
                    top: n
                }, this.originalMousePosition = {
                    left: e.pageX,
                    top: e.pageY
                }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), a.addClass("ui-resizable-resizing"), this._propagate("start", e), !0
            },
            _mouseDrag: function(e) {
                var i, n, s = this.originalMousePosition,
                    o = this.axis,
                    a = e.pageX - s.left || 0,
                    r = e.pageY - s.top || 0,
                    l = this._change[o];
                return this._updatePrevProperties(), l ? (i = l.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1) : !1
            },
            _mouseStop: function(e) {
                this.resizing = !1;
                var i, n, s, o, a, r, l, h = this.options,
                    c = this;
                return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = n ? 0 : c.sizeDiff.width, a = {
                    width: c.helper.width() - o,
                    height: c.helper.height() - s
                }, r = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, l = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, h.animate || this.element.css(t.extend(a, {
                    top: l,
                    left: r
                })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function() {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                }, this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                }
            },
            _applyChanges: function() {
                var t = {};
                return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
            },
            _updateVirtualBoundaries: function(t) {
                var e, i, n, s, o, a = this.options;
                o = {
                    minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                    maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                    minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                    maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
                }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), i < o.maxWidth && (o.maxWidth = i), s < o.maxHeight && (o.maxHeight = s)), this._vBoundaries = o
            },
            _updateCache: function(t) {
                this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
            },
            _updateRatio: function(t) {
                var e = this.position,
                    i = this.size,
                    n = this.axis;
                return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
            },
            _respectSize: function(t) {
                var e = this._vBoundaries,
                    i = this.axis,
                    n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                    s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                    o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                    a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                    r = this.originalPosition.left + this.originalSize.width,
                    l = this.position.top + this.size.height,
                    h = /sw|nw|w/.test(i),
                    c = /nw|ne|n/.test(i);
                return o && (t.width = e.minWidth), a && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && h && (t.left = r - e.minWidth), n && h && (t.left = r - e.maxWidth), a && c && (t.top = l - e.minHeight), s && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
            },
            _getPaddingPlusBorderDimensions: function(t) {
                for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseInt(n[e], 10) || 0, i[e] += parseInt(s[e], 10) || 0;
                return {
                    height: i[0] + i[2],
                    width: i[1] + i[3]
                }
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function() {
                var e = this.element,
                    i = this.options;
                this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(t, e) {
                    return {
                        width: this.originalSize.width + e
                    }
                },
                w: function(t, e) {
                    var i = this.originalSize,
                        n = this.originalPosition;
                    return {
                        left: n.left + e,
                        width: i.width - e
                    }
                },
                n: function(t, e, i) {
                    var n = this.originalSize,
                        s = this.originalPosition;
                    return {
                        top: s.top + i,
                        height: n.height - i
                    }
                },
                s: function(t, e, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function(e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                sw: function(e, i, n) {
                    return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                },
                ne: function(e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n]))
                },
                nw: function(e, i, n) {
                    return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n]))
                }
            },
            _propagate: function(e, i) {
                t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        }), t.ui.plugin.add("resizable", "animate", {
            stop: function(e) {
                var i = t(this).resizable("instance"),
                    n = i.options,
                    s = i._proportionallyResizeElements,
                    o = s.length && /textarea/i.test(s[0].nodeName),
                    a = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                    r = o ? 0 : i.sizeDiff.width,
                    l = {
                        width: i.size.width - r,
                        height: i.size.height - a
                    },
                    h = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                    c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(t.extend(l, c && h ? {
                    top: c,
                    left: h
                } : {}), {
                    duration: n.animateDuration,
                    easing: n.animateEasing,
                    step: function() {
                        var n = {
                            width: parseInt(i.element.css("width"), 10),
                            height: parseInt(i.element.css("height"), 10),
                            top: parseInt(i.element.css("top"), 10),
                            left: parseInt(i.element.css("left"), 10)
                        };
                        s && s.length && t(s[0]).css({
                            width: n.width,
                            height: n.height
                        }), i._updateCache(n), i._propagate("resize", e)
                    }
                })
            }
        }), t.ui.plugin.add("resizable", "containment", {
            start: function() {
                var e, i, n, s, o, a, r, l = t(this).resizable("instance"),
                    h = l.options,
                    c = l.element,
                    u = h.containment,
                    d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
                d && (l.containerElement = t(d), /document/.test(u) || u === document ? (l.containerOffset = {
                    left: 0,
                    top: 0
                }, l.containerPosition = {
                    left: 0,
                    top: 0
                }, l.parentData = {
                    element: t(document),
                    left: 0,
                    top: 0,
                    width: t(document).width(),
                    height: t(document).height() || document.body.parentNode.scrollHeight
                }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) {
                    i[t] = l._num(e.css("padding" + n))
                }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                    height: e.innerHeight() - i[3],
                    width: e.innerWidth() - i[1]
                }, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, a = l._hasScroll(d, "left") ? d.scrollWidth : o, r = l._hasScroll(d) ? d.scrollHeight : s, l.parentData = {
                    element: d,
                    left: n.left,
                    top: n.top,
                    width: a,
                    height: r
                }))
            },
            resize: function(e) {
                var i, n, s, o, a = t(this).resizable("instance"),
                    r = a.options,
                    l = a.containerOffset,
                    h = a.position,
                    c = a._aspectRatio || e.shiftKey,
                    u = {
                        top: 0,
                        left: 0
                    },
                    d = a.containerElement,
                    p = !0;
                d[0] !== document && /static/.test(d.css("position")) && (u = l), h.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? l.left : 0), h.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? l.top : 0), s = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), s && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - l.left)), n = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - l.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), n + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - n, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
            },
            stop: function() {
                var e = t(this).resizable("instance"),
                    i = e.options,
                    n = e.containerOffset,
                    s = e.containerPosition,
                    o = e.containerElement,
                    a = t(e.helper),
                    r = a.offset(),
                    l = a.outerWidth() - e.sizeDiff.width,
                    h = a.outerHeight() - e.sizeDiff.height;
                e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                    left: r.left - s.left - n.left,
                    width: l,
                    height: h
                }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                    left: r.left - s.left - n.left,
                    width: l,
                    height: h
                })
            }
        }), t.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var e = t(this).resizable("instance"),
                    i = e.options,
                    n = function(e) {
                        t(e).each(function() {
                            var e = t(this);
                            e.data("ui-resizable-alsoresize", {
                                width: parseInt(e.width(), 10),
                                height: parseInt(e.height(), 10),
                                left: parseInt(e.css("left"), 10),
                                top: parseInt(e.css("top"), 10)
                            })
                        })
                    };
                "object" != typeof i.alsoResize || i.alsoResize.parentNode ? n(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], n(i.alsoResize)) : t.each(i.alsoResize, function(t) {
                    n(t)
                })
            },
            resize: function(e, i) {
                var n = t(this).resizable("instance"),
                    s = n.options,
                    o = n.originalSize,
                    a = n.originalPosition,
                    r = {
                        height: n.size.height - o.height || 0,
                        width: n.size.width - o.width || 0,
                        top: n.position.top - a.top || 0,
                        left: n.position.left - a.left || 0
                    },
                    l = function(e, n) {
                        t(e).each(function() {
                            var e = t(this),
                                s = t(this).data("ui-resizable-alsoresize"),
                                o = {},
                                a = n && n.length ? n : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            t.each(a, function(t, e) {
                                var i = (s[e] || 0) + (r[e] || 0);
                                i && i >= 0 && (o[e] = i || null)
                            }), e.css(o)
                        })
                    };
                "object" != typeof s.alsoResize || s.alsoResize.nodeType ? l(s.alsoResize) : t.each(s.alsoResize, function(t, e) {
                    l(t, e)
                })
            },
            stop: function() {
                t(this).removeData("resizable-alsoresize")
            }
        }), t.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var e = t(this).resizable("instance"),
                    i = e.options,
                    n = e.size;
                e.ghost = e.originalElement.clone(), e.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: n.height,
                    width: n.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
            },
            resize: function() {
                var e = t(this).resizable("instance");
                e.ghost && e.ghost.css({
                    position: "relative",
                    height: e.size.height,
                    width: e.size.width
                })
            },
            stop: function() {
                var e = t(this).resizable("instance");
                e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
            }
        }), t.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var e, i = t(this).resizable("instance"),
                    n = i.options,
                    s = i.size,
                    o = i.originalSize,
                    a = i.originalPosition,
                    r = i.axis,
                    l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                    h = l[0] || 1,
                    c = l[1] || 1,
                    u = Math.round((s.width - o.width) / h) * h,
                    d = Math.round((s.height - o.height) / c) * c,
                    p = o.width + u,
                    f = o.height + d,
                    m = n.maxWidth && n.maxWidth < p,
                    g = n.maxHeight && n.maxHeight < f,
                    v = n.minWidth && n.minWidth > p,
                    _ = n.minHeight && n.minHeight > f;
                n.grid = l, v && (p += h), _ && (f += c), m && (p -= h), g && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - h) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - h > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = c - e.height, i.size.width = p, i.position.left = a.left + o.width - p))
            }
        }), t.ui.resizable
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./button", "./draggable", "./mouse", "./position", "./resizable"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.dialog", {
            version: "1.11.2",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                closeOnEscape: !0,
                closeText: "Close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function(e) {
                        var i = t(this).css(e).offset().top;
                        0 > i && t(this).css("top", e.top - i)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            sizeRelatedOptions: {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            resizableRelatedOptions: {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            },
            _create: function() {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                }, this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
            },
            _destroy: function() {
                var t, e = this.originalPosition;
                this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            disable: t.noop,
            enable: t.noop,
            close: function(e) {
                var i, n = this;
                if (this._isOpen && this._trigger("beforeClose", e) !== !1) {
                    if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                        i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && t(i).blur()
                    } catch (s) {}
                    this._hide(this.uiDialog, this.options.hide, function() {
                        n._trigger("close", e)
                    })
                }
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function() {
                this._moveToTop()
            },
            _moveToTop: function(e, i) {
                var n = !1,
                    s = this.uiDialog.siblings(".ui-front:visible").map(function() {
                        return +t(this).css("z-index")
                    }).get(),
                    o = Math.max.apply(null, s);
                return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), n = !0), n && !i && this._trigger("focus", e), n
            },
            open: function() {
                var e = this;
                return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                    e._focusTabbable(), e._trigger("focus")
                }), this._makeFocusTarget(), void this._trigger("open"))
            },
            _focusTabbable: function() {
                var t = this._focusedElement;
                t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
            },
            _keepFocus: function(e) {
                function i() {
                    var e = this.document[0].activeElement,
                        i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
                    i || this._focusTabbable()
                }
                e.preventDefault(), i.call(this), this._delay(i)
            },
            _createWrapper: function() {
                this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                    keydown: function(e) {
                        if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                        if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                            var i = this.uiDialog.find(":tabbable"),
                                n = i.filter(":first"),
                                s = i.filter(":last");
                            e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
                                s.focus()
                            }), e.preventDefault()) : (this._delay(function() {
                                n.focus()
                            }), e.preventDefault())
                        }
                    },
                    mousedown: function(t) {
                        this._moveToTop(t) && this._focusTabbable()
                    }
                }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function() {
                var e;
                this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                    mousedown: function(e) {
                        t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                    }
                }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                    label: this.options.closeText,
                    icons: {
                        primary: "ui-icon-closethick"
                    },
                    text: !1
                }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                    click: function(t) {
                        t.preventDefault(), this.close(t)
                    }
                }), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({
                    "aria-labelledby": e.attr("id")
                })
            },
            _title: function(t) {
                this.options.title || t.html("&#160;"), t.text(this.options.title)
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
            },
            _createButtons: function() {
                var e = this,
                    i = this.options.buttons;
                return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this.uiDialog.removeClass("ui-dialog-buttons") : (t.each(i, function(i, n) {
                    var s, o;
                    n = t.isFunction(n) ? {
                        click: n,
                        text: i
                    } : n, n = t.extend({
                        type: "button"
                    }, n), s = n.click, n.click = function() {
                        s.apply(e.element[0], arguments)
                    }, o = {
                        icons: n.icons,
                        text: n.showText
                    }, delete n.icons, delete n.showText, t("<button></button>", n).button(o).appendTo(e.uiButtonSet)
                }), this.uiDialog.addClass("ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
            },
            _makeDraggable: function() {
                function e(t) {
                    return {
                        position: t.position,
                        offset: t.offset
                    }
                }
                var i = this,
                    n = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(n, s) {
                        t(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s))
                    },
                    drag: function(t, n) {
                        i._trigger("drag", t, e(n))
                    },
                    stop: function(s, o) {
                        var a = o.offset.left - i.document.scrollLeft(),
                            r = o.offset.top - i.document.scrollTop();
                        n.position = {
                            my: "left top",
                            at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
                            of: i.window
                        }, t(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o))
                    }
                })
            },
            _makeResizable: function() {
                function e(t) {
                    return {
                        originalPosition: t.originalPosition,
                        originalSize: t.originalSize,
                        position: t.position,
                        size: t.size
                    }
                }
                var i = this,
                    n = this.options,
                    s = n.resizable,
                    o = this.uiDialog.css("position"),
                    a = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: n.maxWidth,
                    maxHeight: n.maxHeight,
                    minWidth: n.minWidth,
                    minHeight: this._minHeight(),
                    handles: a,
                    start: function(n, s) {
                        t(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s))
                    },
                    resize: function(t, n) {
                        i._trigger("resize", t, e(n))
                    },
                    stop: function(s, o) {
                        var a = i.uiDialog.offset(),
                            r = a.left - i.document.scrollLeft(),
                            l = a.top - i.document.scrollTop();
                        n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = {
                            my: "left top",
                            at: "left" + (r >= 0 ? "+" : "") + r + " top" + (l >= 0 ? "+" : "") + l,
                            of: i.window
                        }, t(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o))
                    }
                }).css("position", o)
            },
            _trackFocus: function() {
                this._on(this.widget(), {
                    focusin: function(e) {
                        this._makeFocusTarget(), this._focusedElement = t(e.target)
                    }
                })
            },
            _makeFocusTarget: function() {
                this._untrackInstance(), this._trackingInstances().unshift(this)
            },
            _untrackInstance: function() {
                var e = this._trackingInstances(),
                    i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
            },
            _trackingInstances: function() {
                var t = this.document.data("ui-dialog-instances");
                return t || (t = [], this.document.data("ui-dialog-instances", t)), t
            },
            _minHeight: function() {
                var t = this.options;
                return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
            },
            _position: function() {
                var t = this.uiDialog.is(":visible");
                t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
            },
            _setOptions: function(e) {
                var i = this,
                    n = !1,
                    s = {};
                t.each(e, function(t, e) {
                    i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e)
                }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
            },
            _setOption: function(t, e) {
                var i, n, s = this.uiDialog;
                "dialogClass" === t && s.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
                    label: "" + e
                }), "draggable" === t && (i = s.is(":data(ui-draggable)"), i && !e && s.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (n = s.is(":data(ui-resizable)"), n && !e && s.resizable("destroy"), n && "string" == typeof e && s.resizable("option", "handles", e), n || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function() {
                var t, e, i, n = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({
                    height: "auto",
                    width: n.width
                }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({
                    minHeight: e,
                    maxHeight: i,
                    height: "auto"
                }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function() {
                this.iframeBlocks = this.document.find("iframe").map(function() {
                    var e = t(this);
                    return t("<div>").css({
                        position: "absolute",
                        width: e.outerWidth(),
                        height: e.outerHeight()
                    }).appendTo(e.parent()).offset(e.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function(e) {
                return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
            },
            _createOverlay: function() {
                if (this.options.modal) {
                    var e = !0;
                    this._delay(function() {
                        e = !1
                    }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                        focusin: function(t) {
                            e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                        }
                    }), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                }
            },
            _destroyOverlay: function() {
                if (this.options.modal && this.overlay) {
                    var t = this.document.data("ui-dialog-overlays") - 1;
                    t ? this.document.data("ui-dialog-overlays", t) : this.document.unbind("focusin").removeData("ui-dialog-overlays"), this.overlay.remove(), this.overlay = null
                }
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./mouse", "./draggable"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.droppable", {
            version: "1.11.2",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var e, i = this.options,
                    n = i.accept;
                this.isover = !1, this.isout = !0, this.accept = t.isFunction(n) ? n : function(t) {
                    return t.is(n)
                }, this.proportions = function() {
                    return arguments.length ? void(e = arguments[0]) : e ? e : e = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    }
                }, this._addToManager(i.scope), i.addClasses && this.element.addClass("ui-droppable")
            },
            _addToManager: function(e) {
                t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
            },
            _splice: function(t) {
                for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1)
            },
            _destroy: function() {
                var e = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(e), this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function(e, i) {
                if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
                    return t.is(i)
                };
                else if ("scope" === e) {
                    var n = t.ui.ddmanager.droppables[this.options.scope];
                    this._splice(n), this._addToManager(i)
                }
                this._super(e, i)
            },
            _activate: function(e) {
                var i = t.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", e, this.ui(i))
            },
            _deactivate: function(e) {
                var i = t.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", e, this.ui(i))
            },
            _over: function(e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(i)))
            },
            _out: function(e) {
                var i = t.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(i)))
            },
            _drop: function(e, i) {
                var n = i || t.ui.ddmanager.current,
                    s = !1;
                return n && (n.currentItem || n.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var i = t(this).droppable("instance");
                    return i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && t.ui.intersect(n, t.extend(i, {
                        offset: i.element.offset()
                    }), i.options.tolerance, e) ? (s = !0, !1) : void 0
                }), s ? !1 : this.accept.call(this.element[0], n.currentItem || n.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(n)), this.element) : !1) : !1
            },
            ui: function(t) {
                return {
                    draggable: t.currentItem || t.element,
                    helper: t.helper,
                    position: t.position,
                    offset: t.positionAbs
                }
            }
        }), t.ui.intersect = function() {
            function t(t, e, i) {
                return t >= e && e + i > t
            }
            return function(e, i, n, s) {
                if (!i.offset) return !1;
                var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                    a = (e.positionAbs || e.position.absolute).top + e.margins.top,
                    r = o + e.helperProportions.width,
                    l = a + e.helperProportions.height,
                    h = i.offset.left,
                    c = i.offset.top,
                    u = h + i.proportions().width,
                    d = c + i.proportions().height;
                switch (n) {
                    case "fit":
                        return o >= h && u >= r && a >= c && d >= l;
                    case "intersect":
                        return h < o + e.helperProportions.width / 2 && r - e.helperProportions.width / 2 < u && c < a + e.helperProportions.height / 2 && l - e.helperProportions.height / 2 < d;
                    case "pointer":
                        return t(s.pageY, c, i.proportions().height) && t(s.pageX, h, i.proportions().width);
                    case "touch":
                        return (a >= c && d >= a || l >= c && d >= l || c > a && l > d) && (o >= h && u >= o || r >= h && u >= r || h > o && r > u);
                    default:
                        return !1
                }
            }
        }(), t.ui.ddmanager = {
            current: null,
            droppables: {
                "default": []
            },
            prepareOffsets: function(e, i) {
                var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                    a = i ? i.type : null,
                    r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
                t: for (n = 0; n < o.length; n++)
                    if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                        for (s = 0; s < r.length; s++)
                            if (r[s] === o[n].element[0]) {
                                o[n].proportions().height = 0;
                                continue t
                            }
                        o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === a && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({
                            width: o[n].element[0].offsetWidth,
                            height: o[n].element[0].offsetHeight
                        }))
                    }
            },
            drop: function(e, i) {
                var n = !1;
                return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                    this.options && (!this.options.disabled && this.visible && t.ui.intersect(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                }), n
            },
            dragStart: function(e, i) {
                e.element.parentsUntil("body").bind("scroll.droppable", function() {
                    e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
                })
            },
            drag: function(e, i) {
                e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var n, s, o, a = t.ui.intersect(e, this, this.options.tolerance, i),
                            r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                        r && (this.options.greedy && (s = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
                            return t(this).droppable("instance").options.scope === s
                        }), o.length && (n = t(o[0]).droppable("instance"), n.greedyChild = "isover" === r)), n && "isover" === r && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), n && "isout" === r && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                    }
                })
            },
            dragStop: function(e, i) {
                e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            }
        }, t.ui.droppable
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        var e = "ui-effects-",
            i = t;
        return t.effects = {
                effect: {}
            },
            function(t, e) {
                function i(t, e, i) {
                    var n = u[e.type] || {};
                    return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : n.max < t ? n.max : t)
                }

                function n(e) {
                    var i = h(),
                        n = i._rgba = [];
                    return e = e.toLowerCase(), f(l, function(t, s) {
                        var o, a = s.re.exec(e),
                            r = a && s.parse(a),
                            l = s.space || "rgba";
                        return r ? (o = i[l](r), i[c[l].cache] = o[c[l].cache], n = i._rgba = o._rgba, !1) : void 0
                    }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, o.transparent), i) : o[e]
                }

                function s(t, e, i) {
                    return i = (i + 1) % 1, 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
                }
                var o, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                    r = /^([\-+])=\s*(\d+\.?\d*)/,
                    l = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [t[1], t[2], t[3], t[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(t) {
                            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(t) {
                            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(t) {
                            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(t) {
                            return [t[1], t[2] / 100, t[3] / 100, t[4]]
                        }
                    }],
                    h = t.Color = function(e, i, n, s) {
                        return new t.Color.fn.parse(e, i, n, s)
                    },
                    c = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    u = {
                        "byte": {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    d = h.support = {},
                    p = t("<p>")[0],
                    f = t.each;
                p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(t, e) {
                    e.cache = "_" + t, e.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                }), h.fn = t.extend(h.prototype, {
                    parse: function(s, a, r, l) {
                        if (s === e) return this._rgba = [null, null, null, null], this;
                        (s.jquery || s.nodeType) && (s = t(s).css(a), a = e);
                        var u = this,
                            d = t.type(s),
                            p = this._rgba = [];
                        return a !== e && (s = [s, a, r, l], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
                            p[e.idx] = i(s[e.idx], e)
                        }), this) : "object" === d ? (s instanceof h ? f(c, function(t, e) {
                            s[e.cache] && (u[e.cache] = s[e.cache].slice())
                        }) : f(c, function(e, n) {
                            var o = n.cache;
                            f(n.props, function(t, e) {
                                if (!u[o] && n.to) {
                                    if ("alpha" === t || null == s[t]) return;
                                    u[o] = n.to(u._rgba)
                                }
                                u[o][e.idx] = i(s[t], e, !0)
                            }), u[o] && t.inArray(null, u[o].slice(0, 3)) < 0 && (u[o][3] = 1, n.from && (u._rgba = n.from(u[o])))
                        }), this) : void 0
                    },
                    is: function(t) {
                        var e = h(t),
                            i = !0,
                            n = this;
                        return f(c, function(t, s) {
                            var o, a = e[s.cache];
                            return a && (o = n[s.cache] || s.to && s.to(n._rgba) || [], f(s.props, function(t, e) {
                                return null != a[e.idx] ? i = a[e.idx] === o[e.idx] : void 0
                            })), i
                        }), i
                    },
                    _space: function() {
                        var t = [],
                            e = this;
                        return f(c, function(i, n) {
                            e[n.cache] && t.push(i)
                        }), t.pop()
                    },
                    transition: function(t, e) {
                        var n = h(t),
                            s = n._space(),
                            o = c[s],
                            a = 0 === this.alpha() ? h("transparent") : this,
                            r = a[o.cache] || o.to(a._rgba),
                            l = r.slice();
                        return n = n[o.cache], f(o.props, function(t, s) {
                            var o = s.idx,
                                a = r[o],
                                h = n[o],
                                c = u[s.type] || {};
                            null !== h && (null === a ? l[o] = h : (c.mod && (h - a > c.mod / 2 ? a += c.mod : a - h > c.mod / 2 && (a -= c.mod)), l[o] = i((h - a) * e + a, s)))
                        }), this[s](l)
                    },
                    blend: function(e) {
                        if (1 === this._rgba[3]) return this;
                        var i = this._rgba.slice(),
                            n = i.pop(),
                            s = h(e)._rgba;
                        return h(t.map(i, function(t, e) {
                            return (1 - n) * s[e] + n * t
                        }))
                    },
                    toRgbaString: function() {
                        var e = "rgba(",
                            i = t.map(this._rgba, function(t, e) {
                                return null == t ? e > 2 ? 1 : 0 : t
                            });
                        return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                    },
                    toHslaString: function() {
                        var e = "hsla(",
                            i = t.map(this.hsla(), function(t, e) {
                                return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                            });
                        return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                    },
                    toHexString: function(e) {
                        var i = this._rgba.slice(),
                            n = i.pop();
                        return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) {
                            return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                        }).join("")
                    },
                    toString: function() {
                        return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                    }
                }), h.fn.parse.prototype = h.fn, c.hsla.to = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e, i, n = t[0] / 255,
                        s = t[1] / 255,
                        o = t[2] / 255,
                        a = t[3],
                        r = Math.max(n, s, o),
                        l = Math.min(n, s, o),
                        h = r - l,
                        c = r + l,
                        u = .5 * c;
                    return e = l === r ? 0 : n === r ? 60 * (s - o) / h + 360 : s === r ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
                }, c.hsla.from = function(t) {
                    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                    var e = t[0] / 360,
                        i = t[1],
                        n = t[2],
                        o = t[3],
                        a = .5 >= n ? n * (1 + i) : n + i - n * i,
                        r = 2 * n - a;
                    return [Math.round(255 * s(r, a, e + 1 / 3)), Math.round(255 * s(r, a, e)), Math.round(255 * s(r, a, e - 1 / 3)), o]
                }, f(c, function(n, s) {
                    var o = s.props,
                        a = s.cache,
                        l = s.to,
                        c = s.from;
                    h.fn[n] = function(n) {
                        if (l && !this[a] && (this[a] = l(this._rgba)), n === e) return this[a].slice();
                        var s, r = t.type(n),
                            u = "array" === r || "object" === r ? n : arguments,
                            d = this[a].slice();
                        return f(o, function(t, e) {
                            var n = u["object" === r ? t : e.idx];
                            null == n && (n = d[e.idx]), d[e.idx] = i(n, e)
                        }), c ? (s = h(c(d)), s[a] = d, s) : h(d)
                    }, f(o, function(e, i) {
                        h.fn[e] || (h.fn[e] = function(s) {
                            var o, a = t.type(s),
                                l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                                h = this[l](),
                                c = h[i.idx];
                            return "undefined" === a ? c : ("function" === a && (s = s.call(this, c), a = t.type(s)), null == s && i.empty ? this : ("string" === a && (o = r.exec(s), o && (s = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), h[i.idx] = s, this[l](h)))
                        })
                    })
                }), h.hook = function(e) {
                    var i = e.split(" ");
                    f(i, function(e, i) {
                        t.cssHooks[i] = {
                            set: function(e, s) {
                                var o, a, r = "";
                                if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                    if (s = h(o || s), !d.rgba && 1 !== s._rgba[3]) {
                                        for (a = "backgroundColor" === i ? e.parentNode : e;
                                            ("" === r || "transparent" === r) && a && a.style;) try {
                                            r = t.css(a, "backgroundColor"), a = a.parentNode
                                        } catch (l) {}
                                        s = s.blend(r && "transparent" !== r ? r : "_default")
                                    }
                                    s = s.toRgbaString()
                                }
                                try {
                                    e.style[i] = s
                                } catch (l) {}
                            }
                        }, t.fx.step[i] = function(e) {
                            e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                        }
                    })
                }, h.hook(a), t.cssHooks.borderColor = {
                    expand: function(t) {
                        var e = {};
                        return f(["Top", "Right", "Bottom", "Left"], function(i, n) {
                            e["border" + n + "Color"] = t
                        }), e
                    }
                }, o = t.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(i),
            function() {
                function e(e) {
                    var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                        o = {};
                    if (s && s.length && s[0] && s[s[0]])
                        for (n = s.length; n--;) i = s[n], "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
                    else
                        for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
                    return o
                }

                function n(e, i) {
                    var n, s, a = {};
                    for (n in i) s = i[n], e[n] !== s && (o[n] || (t.fx.step[n] || !isNaN(parseFloat(s))) && (a[n] = s));
                    return a
                }
                var s = ["add", "remove", "toggle"],
                    o = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, n) {
                    t.fx.step[n] = function(t) {
                        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (i.style(t.elem, n, t.end), t.setAttr = !0)
                    }
                }), t.fn.addBack || (t.fn.addBack = function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }), t.effects.animateClass = function(i, o, a, r) {
                    var l = t.speed(o, a, r);
                    return this.queue(function() {
                        var o, a = t(this),
                            r = a.attr("class") || "",
                            h = l.children ? a.find("*").addBack() : a;
                        h = h.map(function() {
                            var i = t(this);
                            return {
                                el: i,
                                start: e(this)
                            }
                        }), o = function() {
                            t.each(s, function(t, e) {
                                i[e] && a[e + "Class"](i[e])
                            })
                        }, o(), h = h.map(function() {
                            return this.end = e(this.el[0]), this.diff = n(this.start, this.end), this
                        }), a.attr("class", r), h = h.map(function() {
                            var e = this,
                                i = t.Deferred(),
                                n = t.extend({}, l, {
                                    queue: !1,
                                    complete: function() {
                                        i.resolve(e)
                                    }
                                });
                            return this.el.animate(this.diff, n), i.promise()
                        }), t.when.apply(t, h.get()).done(function() {
                            o(), t.each(arguments, function() {
                                var e = this.el;
                                t.each(this.diff, function(t) {
                                    e.css(t, "")
                                })
                            }), l.complete.call(a[0])
                        })
                    })
                }, t.fn.extend({
                    addClass: function(e) {
                        return function(i, n, s, o) {
                            return n ? t.effects.animateClass.call(this, {
                                add: i
                            }, n, s, o) : e.apply(this, arguments)
                        }
                    }(t.fn.addClass),
                    removeClass: function(e) {
                        return function(i, n, s, o) {
                            return arguments.length > 1 ? t.effects.animateClass.call(this, {
                                remove: i
                            }, n, s, o) : e.apply(this, arguments)
                        }
                    }(t.fn.removeClass),
                    toggleClass: function(e) {
                        return function(i, n, s, o, a) {
                            return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? {
                                add: i
                            } : {
                                remove: i
                            }, s, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                                toggle: i
                            }, n, s, o)
                        }
                    }(t.fn.toggleClass),
                    switchClass: function(e, i, n, s, o) {
                        return t.effects.animateClass.call(this, {
                            add: i,
                            remove: e
                        }, n, s, o)
                    }
                })
            }(),
            function() {
                function i(e, i, n, s) {
                    return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                        effect: e
                    }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e
                }

                function n(e) {
                    return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
                }
                t.extend(t.effects, {
                    version: "1.11.2",
                    save: function(t, i) {
                        for (var n = 0; n < i.length; n++) null !== i[n] && t.data(e + i[n], t[0].style[i[n]])
                    },
                    restore: function(t, i) {
                        var n, s;
                        for (s = 0; s < i.length; s++) null !== i[s] && (n = t.data(e + i[s]), void 0 === n && (n = ""), t.css(i[s], n))
                    },
                    setMode: function(t, e) {
                        return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                    },
                    getBaseline: function(t, e) {
                        var i, n;
                        switch (t[0]) {
                            case "top":
                                i = 0;
                                break;
                            case "middle":
                                i = .5;
                                break;
                            case "bottom":
                                i = 1;
                                break;
                            default:
                                i = t[0] / e.height
                        }
                        switch (t[1]) {
                            case "left":
                                n = 0;
                                break;
                            case "center":
                                n = .5;
                                break;
                            case "right":
                                n = 1;
                                break;
                            default:
                                n = t[1] / e.width
                        }
                        return {
                            x: n,
                            y: i
                        }
                    },
                    createWrapper: function(e) {
                        if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                        var i = {
                                width: e.outerWidth(!0),
                                height: e.outerHeight(!0),
                                "float": e.css("float")
                            },
                            n = t("<div></div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            s = {
                                width: e.width(),
                                height: e.height()
                            },
                            o = document.activeElement;
                        try {
                            o.id
                        } catch (a) {
                            o = document.body
                        }
                        return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).focus(), n = e.parent(), "static" === e.css("position") ? (n.css({
                            position: "relative"
                        }), e.css({
                            position: "relative"
                        })) : (t.extend(i, {
                            position: e.css("position"),
                            zIndex: e.css("z-index")
                        }), t.each(["top", "left", "bottom", "right"], function(t, n) {
                            i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                        }), e.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), e.css(s), n.css(i).show()
                    },
                    removeWrapper: function(e) {
                        var i = document.activeElement;
                        return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
                    },
                    setTransition: function(e, i, n, s) {
                        return s = s || {}, t.each(i, function(t, i) {
                            var o = e.cssUnit(i);
                            o[0] > 0 && (s[i] = o[0] * n + o[1])
                        }), s
                    }
                }), t.fn.extend({
                    effect: function() {
                        function e(e) {
                            function i() {
                                t.isFunction(o) && o.call(s[0]), t.isFunction(e) && e()
                            }
                            var s = t(this),
                                o = n.complete,
                                r = n.mode;
                            (s.is(":hidden") ? "hide" === r : "show" === r) ? (s[r](), i()) : a.call(s[0], n, i)
                        }
                        var n = i.apply(this, arguments),
                            s = n.mode,
                            o = n.queue,
                            a = t.effects.effect[n.effect];
                        return t.fx.off || !a ? s ? this[s](n.duration, n.complete) : this.each(function() {
                            n.complete && n.complete.call(this)
                        }) : o === !1 ? this.each(e) : this.queue(o || "fx", e)
                    },
                    show: function(t) {
                        return function(e) {
                            if (n(e)) return t.apply(this, arguments);
                            var s = i.apply(this, arguments);
                            return s.mode = "show", this.effect.call(this, s)
                        }
                    }(t.fn.show),
                    hide: function(t) {
                        return function(e) {
                            if (n(e)) return t.apply(this, arguments);
                            var s = i.apply(this, arguments);
                            return s.mode = "hide", this.effect.call(this, s)
                        }
                    }(t.fn.hide),
                    toggle: function(t) {
                        return function(e) {
                            if (n(e) || "boolean" == typeof e) return t.apply(this, arguments);
                            var s = i.apply(this, arguments);
                            return s.mode = "toggle", this.effect.call(this, s)
                        }
                    }(t.fn.toggle),
                    cssUnit: function(e) {
                        var i = this.css(e),
                            n = [];
                        return t.each(["em", "px", "%", "pt"], function(t, e) {
                            i.indexOf(e) > 0 && (n = [parseFloat(i), e])
                        }), n
                    }
                })
            }(),
            function() {
                var e = {};
                t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
                    e[i] = function(e) {
                        return Math.pow(e, t + 2)
                    }
                }), t.extend(e, {
                    Sine: function(t) {
                        return 1 - Math.cos(t * Math.PI / 2)
                    },
                    Circ: function(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    },
                    Elastic: function(t) {
                        return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                    },
                    Back: function(t) {
                        return t * t * (3 * t - 2)
                    },
                    Bounce: function(t) {
                        for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                    }
                }), t.each(e, function(e, i) {
                    t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                        return 1 - i(1 - t)
                    }, t.easing["easeInOut" + e] = function(t) {
                        return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                    }
                })
            }(), t.effects
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
    }(function(t) {
        return t.effects.effect.blind = function(e, i) {
            var n, s, o, a = t(this),
                r = /up|down|vertical/,
                l = /up|left|vertical|horizontal/,
                h = ["position", "top", "bottom", "left", "right", "height", "width"],
                c = t.effects.setMode(a, e.mode || "hide"),
                u = e.direction || "up",
                d = r.test(u),
                p = d ? "height" : "width",
                f = d ? "top" : "left",
                m = l.test(u),
                g = {},
                v = "show" === c;
            a.parent().is(".ui-effects-wrapper") ? t.effects.save(a.parent(), h) : t.effects.save(a, h), a.show(), n = t.effects.createWrapper(a).css({
                overflow: "hidden"
            }), s = n[p](), o = parseFloat(n.css(f)) || 0, g[p] = v ? s : 0, m || (a.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
                position: "absolute"
            }), g[f] = v ? o : s + o), v && (n.css(p, 0), m || n.css(f, o + s)), n.animate(g, {
                duration: e.duration,
                easing: e.easing,
                queue: !1,
                complete: function() {
                    "hide" === c && a.hide(), t.effects.restore(a, h), t.effects.removeWrapper(a), i()
                }
            })
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
    }(function(t) {
        return t.effects.effect.bounce = function(e, i) {
            var n, s, o, a = t(this),
                r = ["position", "top", "bottom", "left", "right", "height", "width"],
                l = t.effects.setMode(a, e.mode || "effect"),
                h = "hide" === l,
                c = "show" === l,
                u = e.direction || "up",
                d = e.distance,
                p = e.times || 5,
                f = 2 * p + (c || h ? 1 : 0),
                m = e.duration / f,
                g = e.easing,
                v = "up" === u || "down" === u ? "top" : "left",
                _ = "up" === u || "left" === u,
                b = a.queue(),
                y = b.length;
            for ((c || h) && r.push("opacity"), t.effects.save(a, r), a.show(), t.effects.createWrapper(a), d || (d = a["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (o = {
                    opacity: 1
                }, o[v] = 0, a.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(o, m, g)), h && (d /= Math.pow(2, p - 1)), o = {}, o[v] = 0, n = 0; p > n; n++) s = {}, s[v] = (_ ? "-=" : "+=") + d, a.animate(s, m, g).animate(o, m, g), d = h ? 2 * d : d / 2;
            h && (s = {
                opacity: 0
            }, s[v] = (_ ? "-=" : "+=") + d, a.animate(s, m, g)), a.queue(function() {
                h && a.hide(), t.effects.restore(a, r), t.effects.removeWrapper(a), i()
            }), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), a.dequeue()
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
    }(function(t) {
        return t.effects.effect.clip = function(e, i) {
            var n, s, o, a = t(this),
                r = ["position", "top", "bottom", "left", "right", "height", "width"],
                l = t.effects.setMode(a, e.mode || "hide"),
                h = "show" === l,
                c = e.direction || "vertical",
                u = "vertical" === c,
                d = u ? "height" : "width",
                p = u ? "top" : "left",
                f = {};
            t.effects.save(a, r), a.show(), n = t.effects.createWrapper(a).css({
                overflow: "hidden"
            }), s = "IMG" === a[0].tagName ? n : a, o = s[d](), h && (s.css(d, 0), s.css(p, o / 2)), f[d] = h ? o : 0, f[p] = h ? 0 : o / 2, s.animate(f, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    h || a.hide(), t.effects.restore(a, r), t.effects.removeWrapper(a), i()
                }
            })
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
    }(function(t) {
        return t.effects.effect.drop = function(e, i) {
            var n, s = t(this),
                o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                a = t.effects.setMode(s, e.mode || "hide"),
                r = "show" === a,
                l = e.direction || "left",
                h = "up" === l || "down" === l ? "top" : "left",
                c = "up" === l || "left" === l ? "pos" : "neg",
                u = {
                    opacity: r ? 1 : 0
                };
            t.effects.save(s, o), s.show(), t.effects.createWrapper(s), n = e.distance || s["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, r && s.css("opacity", 0).css(h, "pos" === c ? -n : n), u[h] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + n, s.animate(u, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    "hide" === a && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i()
                }
            })
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
    }(function(t) {
        return t.effects.effect.explode = function(e, i) {
            function n() {
                b.push(this), b.length === u * d && s()
            }

            function s() {
                p.css({
                    visibility: "visible"
                }), t(b).remove(), m || p.hide(), i()
            }
            var o, a, r, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
                d = u,
                p = t(this),
                f = t.effects.setMode(p, e.mode || "hide"),
                m = "show" === f,
                g = p.show().css("visibility", "hidden").offset(),
                v = Math.ceil(p.outerWidth() / d),
                _ = Math.ceil(p.outerHeight() / u),
                b = [];
            for (o = 0; u > o; o++)
                for (l = g.top + o * _, c = o - (u - 1) / 2, a = 0; d > a; a++) r = g.left + a * v, h = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -a * v,
                    top: -o * _
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: v,
                    height: _,
                    left: r + (m ? h * v : 0),
                    top: l + (m ? c * _ : 0),
                    opacity: m ? 0 : 1
                }).animate({
                    left: r + (m ? 0 : h * v),
                    top: l + (m ? 0 : c * _),
                    opacity: m ? 1 : 0
                }, e.duration || 500, e.easing, n)
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
    }(function(t) {
        return t.effects.effect.fade = function(e, i) {
            var n = t(this),
                s = t.effects.setMode(n, e.mode || "toggle");
            n.animate({
                opacity: s
            }, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
    }(function(t) {
        return t.effects.effect.fold = function(e, i) {
            var n, s, o = t(this),
                a = ["position", "top", "bottom", "left", "right", "height", "width"],
                r = t.effects.setMode(o, e.mode || "hide"),
                l = "show" === r,
                h = "hide" === r,
                c = e.size || 15,
                u = /([0-9]+)%/.exec(c),
                d = !!e.horizFirst,
                p = l !== d,
                f = p ? ["width", "height"] : ["height", "width"],
                m = e.duration / 2,
                g = {},
                v = {};
            t.effects.save(o, a), o.show(), n = t.effects.createWrapper(o).css({
                overflow: "hidden"
            }), s = p ? [n.width(), n.height()] : [n.height(), n.width()], u && (c = parseInt(u[1], 10) / 100 * s[h ? 0 : 1]), l && n.css(d ? {
                height: 0,
                width: c
            } : {
                height: c,
                width: 0
            }), g[f[0]] = l ? s[0] : c, v[f[1]] = l ? s[1] : 0, n.animate(g, m, e.easing).animate(v, m, e.easing, function() {
                h && o.hide(), t.effects.restore(o, a), t.effects.removeWrapper(o), i()
            })
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
    }(function(t) {
        return t.effects.effect.highlight = function(e, i) {
            var n = t(this),
                s = ["backgroundImage", "backgroundColor", "opacity"],
                o = t.effects.setMode(n, e.mode || "show"),
                a = {
                    backgroundColor: n.css("backgroundColor")
                };
            "hide" === o && (a.opacity = 0), t.effects.save(n, s), n.show().css({
                backgroundImage: "none",
                backgroundColor: e.color || "#ffff99"
            }).animate(a, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    "hide" === o && n.hide(), t.effects.restore(n, s), i()
                }
            })
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
    }(function(t) {
        return t.effects.effect.size = function(e, i) {
            var n, s, o, a = t(this),
                r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                h = ["width", "height", "overflow"],
                c = ["fontSize"],
                u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                p = t.effects.setMode(a, e.mode || "effect"),
                f = e.restore || "effect" !== p,
                m = e.scale || "both",
                g = e.origin || ["middle", "center"],
                v = a.css("position"),
                _ = f ? r : l,
                b = {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
            "show" === p && a.show(), n = {
                height: a.height(),
                width: a.width(),
                outerHeight: a.outerHeight(),
                outerWidth: a.outerWidth()
            }, "toggle" === e.mode && "show" === p ? (a.from = e.to || b, a.to = e.from || n) : (a.from = e.from || ("show" === p ? b : n), a.to = e.to || ("hide" === p ? b : n)), o = {
                from: {
                    y: a.from.height / n.height,
                    x: a.from.width / n.width
                },
                to: {
                    y: a.to.height / n.height,
                    x: a.to.width / n.width
                }
            }, ("box" === m || "both" === m) && (o.from.y !== o.to.y && (_ = _.concat(u), a.from = t.effects.setTransition(a, u, o.from.y, a.from), a.to = t.effects.setTransition(a, u, o.to.y, a.to)), o.from.x !== o.to.x && (_ = _.concat(d), a.from = t.effects.setTransition(a, d, o.from.x, a.from), a.to = t.effects.setTransition(a, d, o.to.x, a.to))), ("content" === m || "both" === m) && o.from.y !== o.to.y && (_ = _.concat(c).concat(h), a.from = t.effects.setTransition(a, c, o.from.y, a.from), a.to = t.effects.setTransition(a, c, o.to.y, a.to)), t.effects.save(a, _), a.show(), t.effects.createWrapper(a), a.css("overflow", "hidden").css(a.from), g && (s = t.effects.getBaseline(g, n), a.from.top = (n.outerHeight - a.outerHeight()) * s.y, a.from.left = (n.outerWidth - a.outerWidth()) * s.x, a.to.top = (n.outerHeight - a.to.outerHeight) * s.y, a.to.left = (n.outerWidth - a.to.outerWidth) * s.x), a.css(a.from), ("content" === m || "both" === m) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), h = r.concat(u).concat(d), a.find("*[width]").each(function() {
                var i = t(this),
                    n = {
                        height: i.height(),
                        width: i.width(),
                        outerHeight: i.outerHeight(),
                        outerWidth: i.outerWidth()
                    };
                f && t.effects.save(i, h), i.from = {
                    height: n.height * o.from.y,
                    width: n.width * o.from.x,
                    outerHeight: n.outerHeight * o.from.y,
                    outerWidth: n.outerWidth * o.from.x
                }, i.to = {
                    height: n.height * o.to.y,
                    width: n.width * o.to.x,
                    outerHeight: n.height * o.to.y,
                    outerWidth: n.width * o.to.x
                }, o.from.y !== o.to.y && (i.from = t.effects.setTransition(i, u, o.from.y, i.from), i.to = t.effects.setTransition(i, u, o.to.y, i.to)), o.from.x !== o.to.x && (i.from = t.effects.setTransition(i, d, o.from.x, i.from), i.to = t.effects.setTransition(i, d, o.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function() {
                    f && t.effects.restore(i, h)
                })
            })), a.animate(a.to, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    0 === a.to.opacity && a.css("opacity", a.from.opacity), "hide" === p && a.hide(), t.effects.restore(a, _), f || ("static" === v ? a.css({
                        position: "relative",
                        top: a.to.top,
                        left: a.to.left
                    }) : t.each(["top", "left"], function(t, e) {
                        a.css(e, function(e, i) {
                            var n = parseInt(i, 10),
                                s = t ? a.to.left : a.to.top;
                            return "auto" === i ? s + "px" : n + s + "px"
                        })
                    })), t.effects.removeWrapper(a), i()
                }
            })
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./effect", "./effect-size"], t) : t(jQuery)
    }(function(t) {
        return t.effects.effect.scale = function(e, i) {
            var n = t(this),
                s = t.extend(!0, {}, e),
                o = t.effects.setMode(n, e.mode || "effect"),
                a = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100),
                r = e.direction || "both",
                l = e.origin,
                h = {
                    height: n.height(),
                    width: n.width(),
                    outerHeight: n.outerHeight(),
                    outerWidth: n.outerWidth()
                },
                c = {
                    y: "horizontal" !== r ? a / 100 : 1,
                    x: "vertical" !== r ? a / 100 : 1
                };
            s.effect = "size", s.queue = !1, s.complete = i, "effect" !== o && (s.origin = l || ["middle", "center"], s.restore = !0), s.from = e.from || ("show" === o ? {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            } : h), s.to = {
                height: h.height * c.y,
                width: h.width * c.x,
                outerHeight: h.outerHeight * c.y,
                outerWidth: h.outerWidth * c.x
            }, s.fade && ("show" === o && (s.from.opacity = 0, s.to.opacity = 1), "hide" === o && (s.from.opacity = 1, s.to.opacity = 0)), n.effect(s)
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./effect", "./effect-scale"], t) : t(jQuery)
    }(function(t) {
        return t.effects.effect.puff = function(e, i) {
            var n = t(this),
                s = t.effects.setMode(n, e.mode || "hide"),
                o = "hide" === s,
                a = parseInt(e.percent, 10) || 150,
                r = a / 100,
                l = {
                    height: n.height(),
                    width: n.width(),
                    outerHeight: n.outerHeight(),
                    outerWidth: n.outerWidth()
                };
            t.extend(e, {
                effect: "scale",
                queue: !1,
                fade: !0,
                mode: s,
                complete: i,
                percent: o ? a : 100,
                from: o ? l : {
                    height: l.height * r,
                    width: l.width * r,
                    outerHeight: l.outerHeight * r,
                    outerWidth: l.outerWidth * r
                }
            }), n.effect(e)
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
    }(function(t) {
        return t.effects.effect.pulsate = function(e, i) {
            var n, s = t(this),
                o = t.effects.setMode(s, e.mode || "show"),
                a = "show" === o,
                r = "hide" === o,
                l = a || "hide" === o,
                h = 2 * (e.times || 5) + (l ? 1 : 0),
                c = e.duration / h,
                u = 0,
                d = s.queue(),
                p = d.length;
            for ((a || !s.is(":visible")) && (s.css("opacity", 0).show(), u = 1), n = 1; h > n; n++) s.animate({
                opacity: u
            }, c, e.easing), u = 1 - u;
            s.animate({
                opacity: u
            }, c, e.easing), s.queue(function() {
                r && s.hide(), i()
            }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, h + 1))), s.dequeue()
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
    }(function(t) {
        return t.effects.effect.shake = function(e, i) {
            var n, s = t(this),
                o = ["position", "top", "bottom", "left", "right", "height", "width"],
                a = t.effects.setMode(s, e.mode || "effect"),
                r = e.direction || "left",
                l = e.distance || 20,
                h = e.times || 3,
                c = 2 * h + 1,
                u = Math.round(e.duration / c),
                d = "up" === r || "down" === r ? "top" : "left",
                p = "up" === r || "left" === r,
                f = {},
                m = {},
                g = {},
                v = s.queue(),
                _ = v.length;
            for (t.effects.save(s, o), s.show(), t.effects.createWrapper(s), f[d] = (p ? "-=" : "+=") + l, m[d] = (p ? "+=" : "-=") + 2 * l, g[d] = (p ? "-=" : "+=") + 2 * l, s.animate(f, u, e.easing), n = 1; h > n; n++) s.animate(m, u, e.easing).animate(g, u, e.easing);
            s.animate(m, u, e.easing).animate(f, u / 2, e.easing).queue(function() {
                "hide" === a && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i()
            }), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), s.dequeue()
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
    }(function(t) {
        return t.effects.effect.slide = function(e, i) {
            var n, s = t(this),
                o = ["position", "top", "bottom", "left", "right", "width", "height"],
                a = t.effects.setMode(s, e.mode || "show"),
                r = "show" === a,
                l = e.direction || "left",
                h = "up" === l || "down" === l ? "top" : "left",
                c = "up" === l || "left" === l,
                u = {};
            t.effects.save(s, o), s.show(), n = e.distance || s["top" === h ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(s).css({
                overflow: "hidden"
            }), r && s.css(h, c ? isNaN(n) ? "-" + n : -n : n), u[h] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + n, s.animate(u, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: function() {
                    "hide" === a && s.hide(), t.effects.restore(s, o), t.effects.removeWrapper(s), i()
                }
            })
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./effect"], t) : t(jQuery)
    }(function(t) {
        return t.effects.effect.transfer = function(e, i) {
            var n = t(this),
                s = t(e.to),
                o = "fixed" === s.css("position"),
                a = t("body"),
                r = o ? a.scrollTop() : 0,
                l = o ? a.scrollLeft() : 0,
                h = s.offset(),
                c = {
                    top: h.top - r,
                    left: h.left - l,
                    height: s.innerHeight(),
                    width: s.innerWidth()
                },
                u = n.offset(),
                d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
                    top: u.top - r,
                    left: u.left - l,
                    height: n.innerHeight(),
                    width: n.innerWidth(),
                    position: o ? "fixed" : "absolute"
                }).animate(c, e.duration, e.easing, function() {
                    d.remove(), i()
                })
        }
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.progressbar", {
            version: "1.11.2",
            options: {
                max: 100,
                value: 0,
                change: null,
                complete: null
            },
            min: 0,
            _create: function() {
                this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                    role: "progressbar",
                    "aria-valuemin": this.min
                }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
            },
            _destroy: function() {
                this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
            },
            value: function(t) {
                return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
            },
            _constrainedValue: function(t) {
                return void 0 === t && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
            },
            _setOptions: function(t) {
                var e = t.value;
                delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
            },
            _setOption: function(t, e) {
                "max" === t && (e = Math.max(this.min, e)), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this._super(t, e)
            },
            _percentage: function() {
                return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
            },
            _refreshValue: function() {
                var e = this.options.value,
                    i = this._percentage();
                this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": e
                }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.selectable", t.ui.mouse, {
            version: "1.11.2",
            options: {
                appendTo: "body",
                autoRefresh: !0,
                distance: 0,
                filter: "*",
                tolerance: "touch",
                selected: null,
                selecting: null,
                start: null,
                stop: null,
                unselected: null,
                unselecting: null
            },
            _create: function() {
                var e, i = this;
                this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                    e = t(i.options.filter, i.element[0]), e.addClass("ui-selectee"), e.each(function() {
                        var e = t(this),
                            i = e.offset();
                        t.data(this, "selectable-item", {
                            element: this,
                            $element: e,
                            left: i.left,
                            top: i.top,
                            right: i.left + e.outerWidth(),
                            bottom: i.top + e.outerHeight(),
                            startselected: !1,
                            selected: e.hasClass("ui-selected"),
                            selecting: e.hasClass("ui-selecting"),
                            unselecting: e.hasClass("ui-unselecting")
                        })
                    })
                }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
            },
            _destroy: function() {
                this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
            },
            _mouseStart: function(e) {
                var i = this,
                    n = this.options;
                this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({
                    left: e.pageX,
                    top: e.pageY,
                    width: 0,
                    height: 0
                }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                    var n = t.data(this, "selectable-item");
                    n.startselected = !0, e.metaKey || e.ctrlKey || (n.$element.removeClass("ui-selected"), n.selected = !1, n.$element.addClass("ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, {
                        unselecting: n.element
                    }))
                }), t(e.target).parents().addBack().each(function() {
                    var n, s = t.data(this, "selectable-item");
                    return s ? (n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), s.$element.removeClass(n ? "ui-unselecting" : "ui-selected").addClass(n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, {
                        selecting: s.element
                    }) : i._trigger("unselecting", e, {
                        unselecting: s.element
                    }), !1) : void 0
                }))
            },
            _mouseDrag: function(e) {
                if (this.dragged = !0, !this.options.disabled) {
                    var i, n = this,
                        s = this.options,
                        o = this.opos[0],
                        a = this.opos[1],
                        r = e.pageX,
                        l = e.pageY;
                    return o > r && (i = r, r = o, o = i), a > l && (i = l, l = a, a = i), this.helper.css({
                        left: o,
                        top: a,
                        width: r - o,
                        height: l - a
                    }), this.selectees.each(function() {
                        var i = t.data(this, "selectable-item"),
                            h = !1;
                        i && i.element !== n.element[0] && ("touch" === s.tolerance ? h = !(i.left > r || i.right < o || i.top > l || i.bottom < a) : "fit" === s.tolerance && (h = i.left > o && i.right < r && i.top > a && i.bottom < l), h ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, n._trigger("selecting", e, {
                            selecting: i.element
                        }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, {
                            unselecting: i.element
                        }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, {
                            unselecting: i.element
                        })))))
                    }), !1
                }
            },
            _mouseStop: function(e) {
                var i = this;
                return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                    var n = t.data(this, "selectable-item");
                    n.$element.removeClass("ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, {
                        unselected: n.element
                    })
                }), t(".ui-selecting", this.element[0]).each(function() {
                    var n = t.data(this, "selectable-item");
                    n.$element.removeClass("ui-selecting").addClass("ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, {
                        selected: n.element
                    })
                }), this._trigger("stop", e), this.helper.remove(), !1
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./position", "./menu"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.selectmenu", {
            version: "1.11.2",
            defaultElement: "<select>",
            options: {
                appendTo: null,
                disabled: null,
                icons: {
                    button: "ui-icon-triangle-1-s"
                },
                position: {
                    my: "left top",
                    at: "left bottom",
                    collision: "none"
                },
                width: null,
                change: null,
                close: null,
                focus: null,
                open: null,
                select: null
            },
            _create: function() {
                var t = this.element.uniqueId().attr("id");
                this.ids = {
                    element: t,
                    button: t + "-button",
                    menu: t + "-menu"
                }, this._drawButton(), this._drawMenu(), this.options.disabled && this.disable()
            },
            _drawButton: function() {
                var e = this,
                    i = this.element.attr("tabindex");
                this.label = t("label[for='" + this.ids.element + "']").attr("for", this.ids.button), this._on(this.label, {
                    click: function(t) {
                        this.button.focus(), t.preventDefault()
                    }
                }), this.element.hide(), this.button = t("<span>", {
                    "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                    tabindex: i || this.options.disabled ? -1 : 0,
                    id: this.ids.button,
                    role: "combobox",
                    "aria-expanded": "false",
                    "aria-autocomplete": "list",
                    "aria-owns": this.ids.menu,
                    "aria-haspopup": "true"
                }).insertAfter(this.element), t("<span>", {
                    "class": "ui-icon " + this.options.icons.button
                }).prependTo(this.button), this.buttonText = t("<span>", {
                    "class": "ui-selectmenu-text"
                }).appendTo(this.button), this._setText(this.buttonText, this.element.find("option:selected").text()), this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                    e.menuItems || e._refreshMenu()
                }), this._hoverable(this.button), this._focusable(this.button)
            },
            _drawMenu: function() {
                var e = this;
                this.menu = t("<ul>", {
                    "aria-hidden": "true",
                    "aria-labelledby": this.ids.button,
                    id: this.ids.menu
                }), this.menuWrap = t("<div>", {
                    "class": "ui-selectmenu-menu ui-front"
                }).append(this.menu).appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                    role: "listbox",
                    select: function(t, i) {
                        t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
                    },
                    focus: function(t, i) {
                        var n = i.item.data("ui-selectmenu-item");
                        null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, {
                            item: n
                        }), e.isOpen || e._select(n, t)), e.focusIndex = n.index, e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"))
                    }
                }).menu("instance"), this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                    return !1
                }, this.menuInstance._isDivider = function() {
                    return !1
                }
            },
            refresh: function() {
                this._refreshMenu(), this._setText(this.buttonText, this._getSelectedItem().text()), this.options.width || this._resizeButton()
            },
            _refreshMenu: function() {
                this.menu.empty();
                var t, e = this.element.find("option");
                e.length && (this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
            },
            open: function(t) {
                this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))
            },
            _position: function() {
                this.menuWrap.position(t.extend({
                    of: this.button
                }, this.options.position))
            },
            close: function(t) {
                this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
            },
            widget: function() {
                return this.button
            },
            menuWidget: function() {
                return this.menu
            },
            _renderMenu: function(e, i) {
                var n = this,
                    s = "";
                t.each(i, function(i, o) {
                    o.optgroup !== s && (t("<li>", {
                        "class": "ui-selectmenu-optgroup ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                        text: o.optgroup
                    }).appendTo(e), s = o.optgroup), n._renderItemData(e, o)
                })
            },
            _renderItemData: function(t, e) {
                return this._renderItem(t, e).data("ui-selectmenu-item", e)
            },
            _renderItem: function(e, i) {
                var n = t("<li>");
                return i.disabled && n.addClass("ui-state-disabled"), this._setText(n, i.label), n.appendTo(e)
            },
            _setText: function(t, e) {
                e ? t.text(e) : t.html("&#160;")
            },
            _move: function(t, e) {
                var i, n, s = ".ui-menu-item";
                this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), s += ":not(.ui-state-disabled)"), n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0), n.length && this.menuInstance.focus(e, n)
            },
            _getSelectedItem: function() {
                return this.menuItems.eq(this.element[0].selectedIndex)
            },
            _toggle: function(t) {
                this[this.isOpen ? "close" : "open"](t)
            },
            _setSelection: function() {
                var t;
                this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
            },
            _documentClick: {
                mousedown: function(e) {
                    this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(e))
                }
            },
            _buttonEvents: {
                mousedown: function() {
                    var t;
                    window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
                },
                click: function(t) {
                    this._setSelection(), this._toggle(t)
                },
                keydown: function(e) {
                    var i = !0;
                    switch (e.keyCode) {
                        case t.ui.keyCode.TAB:
                        case t.ui.keyCode.ESCAPE:
                            this.close(e), i = !1;
                            break;
                        case t.ui.keyCode.ENTER:
                            this.isOpen && this._selectFocusedItem(e);
                            break;
                        case t.ui.keyCode.UP:
                            e.altKey ? this._toggle(e) : this._move("prev", e);
                            break;
                        case t.ui.keyCode.DOWN:
                            e.altKey ? this._toggle(e) : this._move("next", e);
                            break;
                        case t.ui.keyCode.SPACE:
                            this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                            break;
                        case t.ui.keyCode.LEFT:
                            this._move("prev", e);
                            break;
                        case t.ui.keyCode.RIGHT:
                            this._move("next", e);
                            break;
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.PAGE_UP:
                            this._move("first", e);
                            break;
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_DOWN:
                            this._move("last", e);
                            break;
                        default:
                            this.menu.trigger(e), i = !1
                    }
                    i && e.preventDefault()
                }
            },
            _selectFocusedItem: function(t) {
                var e = this.menuItems.eq(this.focusIndex);
                e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
            },
            _select: function(t, e) {
                var i = this.element[0].selectedIndex;
                this.element[0].selectedIndex = t.index, this._setText(this.buttonText, t.label), this._setAria(t), this._trigger("select", e, {
                    item: t
                }), t.index !== i && this._trigger("change", e, {
                    item: t
                }), this.close(e)
            },
            _setAria: function(t) {
                var e = this.menuItems.eq(t.index).attr("id");
                this.button.attr({
                    "aria-labelledby": e,
                    "aria-activedescendant": e
                }), this.menu.attr("aria-activedescendant", e)
            },
            _setOption: function(t, e) {
                "icons" === t && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(e.button), this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "disabled" === t && (this.menuInstance.option("disabled", e), this.button.toggleClass("ui-state-disabled", e).attr("aria-disabled", e), this.element.prop("disabled", e), e ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)), "width" === t && this._resizeButton()
            },
            _appendTo: function() {
                var e = this.options.appendTo;
                return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
            },
            _toggleAttr: function() {
                this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen), this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
            },
            _resizeButton: function() {
                var t = this.options.width;
                t || (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t)
            },
            _resizeMenu: function() {
                this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
            },
            _getCreateOptions: function() {
                return {
                    disabled: this.element.prop("disabled")
                }
            },
            _parseOptions: function(e) {
                var i = [];
                e.each(function(e, n) {
                    var s = t(n),
                        o = s.parent("optgroup");
                    i.push({
                        element: s,
                        index: e,
                        value: s.attr("value"),
                        label: s.text(),
                        optgroup: o.attr("label") || "",
                        disabled: o.prop("disabled") || s.prop("disabled")
                    })
                }), this.items = i
            },
            _destroy: function() {
                this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.label.attr("for", this.ids.element)
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.slider", t.ui.mouse, {
            version: "1.11.2",
            widgetEventPrefix: "slide",
            options: {
                animate: !1,
                distance: 0,
                max: 100,
                min: 0,
                orientation: "horizontal",
                range: !1,
                step: 1,
                value: 0,
                values: null,
                change: null,
                slide: null,
                start: null,
                stop: null
            },
            numPages: 5,
            _create: function() {
                this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
            },
            _refresh: function() {
                this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
            },
            _createHandles: function() {
                var e, i, n = this.options,
                    s = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                    o = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                    a = [];
                for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; i > e; e++) a.push(o);
                this.handles = s.add(t(a.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                    t(this).data("ui-slider-handle-index", e)
                })
            },
            _createRange: function() {
                var e = this.options,
                    i = "";
                e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                    left: "",
                    bottom: ""
                }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
            },
            _setupEvents: function() {
                this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
            },
            _destroy: function() {
                this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
            },
            _mouseCapture: function(e) {
                var i, n, s, o, a, r, l, h, c = this,
                    u = this.options;
                return u.disabled ? !1 : (this.elementSize = {
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight()
                }, this.elementOffset = this.element.offset(), i = {
                    x: e.pageX,
                    y: e.pageY
                }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                    var i = Math.abs(n - c.values(e));
                    (s > i || s === i && (e === c._lastChangedValue || c.values(e) === u.min)) && (s = i, o = t(this), a = e)
                }), r = this._start(e, a), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = a, o.addClass("ui-state-active").focus(), l = o.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                    left: 0,
                    top: 0
                } : {
                    left: e.pageX - l.left - o.width() / 2,
                    top: e.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
                }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, n), this._animateOff = !0, !0))
            },
            _mouseStart: function() {
                return !0
            },
            _mouseDrag: function(t) {
                var e = {
                        x: t.pageX,
                        y: t.pageY
                    },
                    i = this._normValueFromMouse(e);
                return this._slide(t, this._handleIndex, i), !1
            },
            _mouseStop: function(t) {
                return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
            },
            _detectOrientation: function() {
                this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
            },
            _normValueFromMouse: function(t) {
                var e, i, n, s, o;
                return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / e, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o)
            },
            _start: function(t, e) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
            },
            _slide: function(t, e, i) {
                var n, s, o;
                this.options.values && this.options.values.length ? (n = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > n || 1 === e && n > i) && (i = n), i !== this.values(e) && (s = this.values(), s[e] = i, o = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: i,
                    values: s
                }), n = this.values(e ? 0 : 1), o !== !1 && this.values(e, i))) : i !== this.value() && (o = this._trigger("slide", t, {
                    handle: this.handles[e],
                    value: i
                }), o !== !1 && this.value(i))
            },
            _stop: function(t, e) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
            },
            _change: function(t, e) {
                if (!this._keySliding && !this._mouseSliding) {
                    var i = {
                        handle: this.handles[e],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
                }
            },
            value: function(t) {
                return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
            },
            values: function(e, i) {
                var n, s, o;
                if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
                if (!arguments.length) return this._values();
                if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
                for (n = this.options.values, s = arguments[0], o = 0; o < n.length; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
                this._refreshValue()
            },
            _setOption: function(e, i) {
                var n, s = 0;
                switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), "disabled" === e && this.element.toggleClass("ui-state-disabled", !!i), this._super(e, i), e) {
                    case "orientation":
                        this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                        break;
                    case "value":
                        this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                        break;
                    case "values":
                        for (this._animateOff = !0, this._refreshValue(), n = 0; s > n; n += 1) this._change(null, n);
                        this._animateOff = !1;
                        break;
                    case "step":
                    case "min":
                    case "max":
                        this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                        break;
                    case "range":
                        this._animateOff = !0, this._refresh(), this._animateOff = !1
                }
            },
            _value: function() {
                var t = this.options.value;
                return t = this._trimAlignValue(t)
            },
            _values: function(t) {
                var e, i, n;
                if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
                if (this.options.values && this.options.values.length) {
                    for (i = this.options.values.slice(), n = 0; n < i.length; n += 1) i[n] = this._trimAlignValue(i[n]);
                    return i
                }
                return []
            },
            _trimAlignValue: function(t) {
                if (t <= this._valueMin()) return this._valueMin();
                if (t >= this._valueMax()) return this._valueMax();
                var e = this.options.step > 0 ? this.options.step : 1,
                    i = (t - this._valueMin()) % e,
                    n = t - i;
                return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
            },
            _calculateNewMax: function() {
                var t = (this.options.max - this._valueMin()) % this.options.step;
                this.max = this.options.max - t
            },
            _valueMin: function() {
                return this.options.min
            },
            _valueMax: function() {
                return this.max
            },
            _refreshValue: function() {
                var e, i, n, s, o, a = this.options.range,
                    r = this.options,
                    l = this,
                    h = this._animateOff ? !1 : r.animate,
                    c = {};
                this.options.values && this.options.values.length ? this.handles.each(function(n) {
                    i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                        left: i + "%"
                    }, r.animate), 1 === n && l.range[h ? "animate" : "css"]({
                        width: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    })) : (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({
                        bottom: i + "%"
                    }, r.animate), 1 === n && l.range[h ? "animate" : "css"]({
                        height: i - e + "%"
                    }, {
                        queue: !1,
                        duration: r.animate
                    }))), e = i
                }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    width: i + "%"
                }, r.animate), "max" === a && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
                    width: 100 - i + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                    height: i + "%"
                }, r.animate), "max" === a && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
                    height: 100 - i + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))
            },
            _handleEvents: {
                keydown: function(e) {
                    var i, n, s, o, a = t(e.target).data("ui-slider-handle-index");
                    switch (e.keyCode) {
                        case t.ui.keyCode.HOME:
                        case t.ui.keyCode.END:
                        case t.ui.keyCode.PAGE_UP:
                        case t.ui.keyCode.PAGE_DOWN:
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, t(e.target).addClass("ui-state-active"), i = this._start(e, a), i === !1)) return
                    }
                    switch (o = this.options.step, n = s = this.options.values && this.options.values.length ? this.values(a) : this.value(), e.keyCode) {
                        case t.ui.keyCode.HOME:
                            s = this._valueMin();
                            break;
                        case t.ui.keyCode.END:
                            s = this._valueMax();
                            break;
                        case t.ui.keyCode.PAGE_UP:
                            s = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.PAGE_DOWN:
                            s = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / this.numPages);
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.RIGHT:
                            if (n === this._valueMax()) return;
                            s = this._trimAlignValue(n + o);
                            break;
                        case t.ui.keyCode.DOWN:
                        case t.ui.keyCode.LEFT:
                            if (n === this._valueMin()) return;
                            s = this._trimAlignValue(n - o)
                    }
                    this._slide(e, a, s)
                },
                keyup: function(e) {
                    var i = t(e.target).data("ui-slider-handle-index");
                    this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
                }
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./mouse", "./widget"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.sortable", t.ui.mouse, {
            version: "1.11.2",
            widgetEventPrefix: "sort",
            ready: !1,
            options: {
                appendTo: "parent",
                axis: !1,
                connectWith: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                dropOnEmpty: !0,
                forcePlaceholderSize: !1,
                forceHelperSize: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                items: "> *",
                opacity: !1,
                placeholder: !1,
                revert: !1,
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                scope: "default",
                tolerance: "intersect",
                zIndex: 1e3,
                activate: null,
                beforeStop: null,
                change: null,
                deactivate: null,
                out: null,
                over: null,
                receive: null,
                remove: null,
                sort: null,
                start: null,
                stop: null,
                update: null
            },
            _isOverAxis: function(t, e, i) {
                return t >= e && e + i > t
            },
            _isFloating: function(t) {
                return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
            },
            _create: function() {
                var t = this.options;
                this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || this._isFloating(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
            },
            _setOption: function(t, e) {
                this._super(t, e), "handle" === t && this._setHandleClassName()
            },
            _setHandleClassName: function() {
                this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), t.each(this.items, function() {
                    (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                })
            },
            _destroy: function() {
                this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), this._mouseDestroy();
                for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
                return this
            },
            _mouseCapture: function(e, i) {
                var n = null,
                    s = !1,
                    o = this;
                return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
                    return t.data(this, o.widgetName + "-item") === o ? (n = t(this), !1) : void 0
                }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), n && (!this.options.handle || i || (t(this.options.handle, n).find("*").addBack().each(function() {
                    this === e.target && (s = !0)
                }), s)) ? (this.currentItem = n, this._removeCurrentsFromItems(), !0) : !1)
            },
            _mouseStart: function(e, i, n) {
                var s, o, a = this.options;
                if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                        top: this.offset.top - this.margins.top,
                        left: this.offset.left - this.margins.left
                    }, t.extend(this.offset, {
                        click: {
                            left: e.pageX - this.offset.left,
                            top: e.pageY - this.offset.top
                        },
                        parent: this._getParentOffset(),
                        relative: this._getRelativeOffset()
                    }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                        prev: this.currentItem.prev()[0],
                        parent: this.currentItem.parent()[0]
                    }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                    for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
                return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
            },
            _mouseDrag: function(e) {
                var i, n, s, o, a = this.options,
                    r = !1;
                for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                    if (n = this.items[i], s = n.item[0], o = this._intersectsWithPointer(n), o && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], s) : !0)) {
                        if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                        this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                        break
                    }
                return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(e, i) {
                if (e) {
                    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                        var n = this,
                            s = this.placeholder.offset(),
                            o = this.options.axis,
                            a = {};
                        o && "x" !== o || (a.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                            n._clear(e)
                        })
                    } else this._clear(e, i);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp({
                        target: null
                    }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                    for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                }
                return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                    helper: null,
                    dragging: !1,
                    reverting: !1,
                    _noFinalSort: null
                }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
            },
            serialize: function(e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {}, t(i).each(function() {
                    var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                    i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
                }), !n.length && e.key && n.push(e.key + "="), n.join("&")
            },
            toArray: function(e) {
                var i = this._getItemsAsjQuery(e && e.connected),
                    n = [];
                return e = e || {}, i.each(function() {
                    n.push(t(e.item || this).attr(e.attribute || "id") || "")
                }), n
            },
            _intersectsWith: function(t) {
                var e = this.positionAbs.left,
                    i = e + this.helperProportions.width,
                    n = this.positionAbs.top,
                    s = n + this.helperProportions.height,
                    o = t.left,
                    a = o + t.width,
                    r = t.top,
                    l = r + t.height,
                    h = this.offset.click.top,
                    c = this.offset.click.left,
                    u = "x" === this.options.axis || n + h > r && l > n + h,
                    d = "y" === this.options.axis || e + c > o && a > e + c,
                    p = u && d;
                return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < n + this.helperProportions.height / 2 && s - this.helperProportions.height / 2 < l
            },
            _intersectsWithPointer: function(t) {
                var e = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                    i = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                    n = e && i,
                    s = this._getDragVerticalDirection(),
                    o = this._getDragHorizontalDirection();
                return n ? this.floating ? o && "right" === o || "down" === s ? 2 : 1 : s && ("down" === s ? 2 : 1) : !1
            },
            _intersectsWithSides: function(t) {
                var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                    i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                    n = this._getDragVerticalDirection(),
                    s = this._getDragHorizontalDirection();
                return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
            },
            _getDragVerticalDirection: function() {
                var t = this.positionAbs.top - this.lastPositionAbs.top;
                return 0 !== t && (t > 0 ? "down" : "up")
            },
            _getDragHorizontalDirection: function() {
                var t = this.positionAbs.left - this.lastPositionAbs.left;
                return 0 !== t && (t > 0 ? "right" : "left")
            },
            refresh: function(t) {
                return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
            },
            _connectWith: function() {
                var t = this.options;
                return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
            },
            _getItemsAsjQuery: function(e) {
                function i() {
                    r.push(this)
                }
                var n, s, o, a, r = [],
                    l = [],
                    h = this._connectWith();
                if (h && e)
                    for (n = h.length - 1; n >= 0; n--)
                        for (o = t(h[n]), s = o.length - 1; s >= 0; s--) a = t.data(o[s], this.widgetFullName), a && a !== this && !a.options.disabled && l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
                for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                        options: this.options,
                        item: this.currentItem
                    }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
                return t(r)
            },
            _removeCurrentsFromItems: function() {
                var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                this.items = t.grep(this.items, function(t) {
                    for (var i = 0; i < e.length; i++)
                        if (e[i] === t.item[0]) return !1;
                    return !0
                })
            },
            _refreshItems: function(e) {
                this.items = [], this.containers = [this];
                var i, n, s, o, a, r, l, h, c = this.items,
                    u = [
                        [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                            item: this.currentItem
                        }) : t(this.options.items, this.element), this]
                    ],
                    d = this._connectWith();
                if (d && this.ready)
                    for (i = d.length - 1; i >= 0; i--)
                        for (s = t(d[i]), n = s.length - 1; n >= 0; n--) o = t.data(s[n], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                            item: this.currentItem
                        }) : t(o.options.items, o.element), o]), this.containers.push(o));
                for (i = u.length - 1; i >= 0; i--)
                    for (a = u[i][1], r = u[i][0], n = 0, h = r.length; h > n; n++) l = t(r[n]), l.data(this.widgetName + "-item", a), c.push({
                        item: l,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
            },
            refreshPositions: function(e) {
                this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                var i, n, s, o;
                for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                else
                    for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                return this
            },
            _createPlaceholder: function(e) {
                e = e || this;
                var i, n = e.options;
                n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                    element: function() {
                        var n = e.currentItem[0].nodeName.toLowerCase(),
                            s = t("<" + n + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                        return "tr" === n ? e.currentItem.children().each(function() {
                            t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(s)
                        }) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                    },
                    update: function(t, s) {
                        (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                    }
                }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
            },
            _contactContainers: function(e) {
                var i, n, s, o, a, r, l, h, c, u, d = null,
                    p = null;
                for (i = this.containers.length - 1; i >= 0; i--)
                    if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                        if (this._intersectsWith(this.containers[i].containerCache)) {
                            if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                            d = this.containers[i], p = i
                        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                if (d)
                    if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                    else {
                        for (s = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", r = c ? "width" : "height", u = c ? "clientX" : "clientY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[a], h = !1, e[u] - l > this.items[n][r] / 2 && (h = !0), Math.abs(e[u] - l) < s && (s = Math.abs(e[u] - l), o = this.items[n], this.direction = h ? "up" : "down"));
                        if (!o && !this.options.dropOnEmpty) return;
                        if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                        o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                    }
            },
            _createHelper: function(e) {
                var i = this.options,
                    n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
            },
            _adjustOffsetFromHelper: function(e) {
                "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                    left: +e[0],
                    top: +e[1] || 0
                }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
            },
            _getParentOffset: function() {
                this.offsetParent = this.helper.offsetParent();
                var e = this.offsetParent.offset();
                return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                    top: 0,
                    left: 0
                }), {
                    top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" === this.cssPosition) {
                    var t = this.currentItem.position();
                    return {
                        top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                        left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                    top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var e, i, n, s = this.options;
                "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === s.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === s.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
            },
            _convertPositionTo: function(e, i) {
                i || (i = this.position);
                var n = "absolute" === e ? 1 : -1,
                    s = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    o = /(html|body)/i.test(s[0].tagName);
                return {
                    top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n,
                    left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n
                }
            },
            _generatePosition: function(e) {
                var i, n, s = this.options,
                    o = e.pageX,
                    a = e.pageY,
                    r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                    l = /(html|body)/i.test(r[0].tagName);
                return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), {
                    top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                    left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
                }
            },
            _rearrange: function(t, e, i, n) {
                i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                var s = this.counter;
                this._delay(function() {
                    s === this.counter && this.refreshPositions(!n)
                })
            },
            _clear: function(t, e) {
                function i(t, e, i) {
                    return function(n) {
                        i._trigger(t, n, e._uiHash(e))
                    }
                }
                this.reverting = !1;
                var n, s = [];
                if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                    for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                    this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                } else this.currentItem.show();
                for (this.fromOutside && !e && s.push(function(t) {
                        this._trigger("receive", t, this._uiHash(this.fromOutside))
                    }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) {
                        this._trigger("update", t, this._uiHash())
                    }), this !== this.currentContainer && (e || (s.push(function(t) {
                        this._trigger("remove", t, this._uiHash())
                    }), s.push(function(t) {
                        return function(e) {
                            t._trigger("receive", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)), s.push(function(t) {
                        return function(e) {
                            t._trigger("update", e, this._uiHash(this))
                        }
                    }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
                if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                    for (n = 0; n < s.length; n++) s[n].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !this.cancelHelperRemoval
            },
            _trigger: function() {
                t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
            },
            _uiHash: function(e) {
                var i = e || this;
                return {
                    helper: i.helper,
                    placeholder: i.placeholder || t([]),
                    position: i.position,
                    originalPosition: i.originalPosition,
                    offset: i.positionAbs,
                    item: i.currentItem,
                    sender: e ? e.element : null
                }
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./button"], t) : t(jQuery)
    }(function(t) {
        function e(t) {
            return function() {
                var e = this.element.val();
                t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
            }
        }
        return t.widget("ui.spinner", {
            version: "1.11.2",
            defaultElement: "<input>",
            widgetEventPrefix: "spin",
            options: {
                culture: null,
                icons: {
                    down: "ui-icon-triangle-1-s",
                    up: "ui-icon-triangle-1-n"
                },
                incremental: !0,
                max: null,
                min: null,
                numberFormat: null,
                page: 10,
                step: 1,
                change: null,
                spin: null,
                start: null,
                stop: null
            },
            _create: function() {
                this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _getCreateOptions: function() {
                var e = {},
                    i = this.element;
                return t.each(["min", "max", "step"], function(t, n) {
                    var s = i.attr(n);
                    void 0 !== s && s.length && (e[n] = s)
                }), e
            },
            _events: {
                keydown: function(t) {
                    this._start(t) && this._keydown(t) && t.preventDefault()
                },
                keyup: "_stop",
                focus: function() {
                    this.previous = this.element.val()
                },
                blur: function(t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t)))
                },
                mousewheel: function(t, e) {
                    if (e) {
                        if (!this.spinning && !this._start(t)) return !1;
                        this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                            this.spinning && this._stop(t)
                        }, 100), t.preventDefault()
                    }
                },
                "mousedown .ui-spinner-button": function(e) {
                    function i() {
                        var t = this.element[0] === this.document[0].activeElement;
                        t || (this.element.focus(), this.previous = n, this._delay(function() {
                            this.previous = n
                        }))
                    }
                    var n;
                    n = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur, i.call(this)
                    }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
                },
                "mouseup .ui-spinner-button": "_stop",
                "mouseenter .ui-spinner-button": function(e) {
                    return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
                },
                "mouseleave .ui-spinner-button": "_stop"
            },
            _draw: function() {
                var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
            },
            _keydown: function(e) {
                var i = this.options,
                    n = t.ui.keyCode;
                switch (e.keyCode) {
                    case n.UP:
                        return this._repeat(null, 1, e), !0;
                    case n.DOWN:
                        return this._repeat(null, -1, e), !0;
                    case n.PAGE_UP:
                        return this._repeat(null, i.page, e), !0;
                    case n.PAGE_DOWN:
                        return this._repeat(null, -i.page, e), !0
                }
                return !1
            },
            _uiSpinnerHtml: function() {
                return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
            },
            _buttonHtml: function() {
                return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>"
            },
            _start: function(t) {
                return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
            },
            _repeat: function(t, e, i) {
                t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                    this._repeat(40, e, i)
                }, t), this._spin(e * this.options.step, i)
            },
            _spin: function(t, e) {
                var i = this.value() || 0;
                this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
                    value: i
                }) === !1 || (this._value(i), this.counter++)
            },
            _increment: function(e) {
                var i = this.options.incremental;
                return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
            },
            _precision: function() {
                var t = this._precisionOf(this.options.step);
                return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
            },
            _precisionOf: function(t) {
                var e = t.toString(),
                    i = e.indexOf(".");
                return -1 === i ? 0 : e.length - i - 1
            },
            _adjustValue: function(t) {
                var e, i, n = this.options;
                return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && t < n.min ? n.min : t
            },
            _stop: function(t) {
                this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
            },
            _setOption: function(t, e) {
                if ("culture" === t || "numberFormat" === t) {
                    var i = this._parse(this.element.val());
                    return this.options[t] = e, void this.element.val(this._format(i))
                }("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (this.widget().toggleClass("ui-state-disabled", !!e), this.element.prop("disabled", !!e), this.buttons.button(e ? "disable" : "enable"))
            },
            _setOptions: e(function(t) {
                this._super(t)
            }),
            _parse: function(t) {
                return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
            },
            _format: function(t) {
                return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
            },
            _refresh: function() {
                this.element.attr({
                    "aria-valuemin": this.options.min,
                    "aria-valuemax": this.options.max,
                    "aria-valuenow": this._parse(this.element.val())
                })
            },
            isValid: function() {
                var t = this.value();
                return null === t ? !1 : t === this._adjustValue(t)
            },
            _value: function(t, e) {
                var i;
                "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
            },
            _destroy: function() {
                this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
            },
            stepUp: e(function(t) {
                this._stepUp(t)
            }),
            _stepUp: function(t) {
                this._start() && (this._spin((t || 1) * this.options.step), this._stop())
            },
            stepDown: e(function(t) {
                this._stepDown(t)
            }),
            _stepDown: function(t) {
                this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
            },
            pageUp: e(function(t) {
                this._stepUp((t || 1) * this.options.page)
            }),
            pageDown: e(function(t) {
                this._stepDown((t || 1) * this.options.page)
            }),
            value: function(t) {
                return arguments.length ? void e(this._value).call(this, t) : this._parse(this.element.val())
            },
            widget: function() {
                return this.uiSpinner
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.tabs", {
            version: "1.11.2",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: function() {
                var t = /#.*$/;
                return function(e) {
                    var i, n;
                    e = e.cloneNode(!1), i = e.href.replace(t, ""), n = location.href.replace(t, "");
                    try {
                        i = decodeURIComponent(i)
                    } catch (s) {}
                    try {
                        n = decodeURIComponent(n)
                    } catch (s) {}
                    return e.hash.length > 1 && i === n
                }
            }(),
            _create: function() {
                var e = this,
                    i = this.options;
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
                    return e.tabs.index(t)
                }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
            },
            _initialActive: function() {
                var e = this.options.active,
                    i = this.options.collapsible,
                    n = location.hash.substring(1);
                return null === e && (n && this.tabs.each(function(i, s) {
                    return t(s).attr("aria-controls") === n ? (e = i, !1) : void 0
                }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e
            },
            _getCreateEventData: function() {
                return {
                    tab: this.active,
                    panel: this.active.length ? this._getPanelForTab(this.active) : t()
                }
            },
            _tabKeydown: function(e) {
                var i = t(this.document[0].activeElement).closest("li"),
                    n = this.tabs.index(i),
                    s = !0;
                if (!this._handlePageNav(e)) {
                    switch (e.keyCode) {
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                            n++;
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.LEFT:
                            s = !1, n--;
                            break;
                        case t.ui.keyCode.END:
                            n = this.anchors.length - 1;
                            break;
                        case t.ui.keyCode.HOME:
                            n = 0;
                            break;
                        case t.ui.keyCode.SPACE:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                        case t.ui.keyCode.ENTER:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(n === this.options.active ? !1 : n);
                        default:
                            return
                    }
                    e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() {
                        this.option("active", n)
                    }, this.delay))
                }
            },
            _panelKeydown: function(e) {
                this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
            },
            _handlePageNav: function(e) {
                return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function(e, i) {
                function n() {
                    return e > s && (e = 0), 0 > e && (e = s), e
                }
                for (var s = this.tabs.length - 1; - 1 !== t.inArray(n(), this.options.disabled);) e = i ? e + 1 : e - 1;
                return e
            },
            _focusNextTab: function(t, e) {
                return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
            },
            _setOption: function(t, e) {
                return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e)))
            },
            _sanitizeSelector: function(t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function() {
                var e = this.options,
                    i = this.tablist.children(":has(a[href])");
                e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                    return i.index(t)
                }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
            },
            _refresh: function() {
                this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                    "aria-hidden": "true"
                }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({
                    "aria-hidden": "false"
                })) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function() {
                var e = this,
                    i = this.tabs,
                    n = this.anchors,
                    s = this.panels;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(e) {
                    t(this).is(".ui-state-disabled") && e.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                    t(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                }), this.anchors = this.tabs.map(function() {
                    return t("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                }), this.panels = t(), this.anchors.each(function(i, n) {
                    var s, o, a, r = t(n).uniqueId().attr("id"),
                        l = t(n).closest("li"),
                        h = l.attr("aria-controls");
                    e._isLocal(n) ? (s = n.hash, a = s.substring(1), o = e.element.find(e._sanitizeSelector(s))) : (a = l.attr("aria-controls") || t({}).uniqueId()[0].id, s = "#" + a, o = e.element.find(s), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({
                        "aria-controls": a,
                        "aria-labelledby": r
                    }), o.attr("aria-labelledby", r)
                }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
            },
            _getList: function() {
                return this.tablist || this.element.find("ol,ul").eq(0)
            },
            _createPanel: function(e) {
                return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function(e) {
                t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
                for (var i, n = 0; i = this.tabs[n]; n++) e === !0 || -1 !== t.inArray(n, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = e
            },
            _setupEvents: function(e) {
                var i = {};
                e && t.each(e.split(" "), function(t, e) {
                    i[e] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                    click: function(t) {
                        t.preventDefault()
                    }
                }), this._on(this.anchors, i), this._on(this.tabs, {
                    keydown: "_tabKeydown"
                }), this._on(this.panels, {
                    keydown: "_panelKeydown"
                }), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function(e) {
                var i, n = this.element.parent();
                "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                    var e = t(this),
                        n = e.css("position");
                    "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function() {
                    i -= t(this).outerHeight(!0)
                }), this.panels.each(function() {
                    t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                    i = Math.max(i, t(this).height("").height())
                }).height(i))
            },
            _eventHandler: function(e) {
                var i = this.options,
                    n = this.active,
                    s = t(e.currentTarget),
                    o = s.closest("li"),
                    a = o[0] === n[0],
                    r = a && i.collapsible,
                    l = r ? t() : this._getPanelForTab(o),
                    h = n.length ? this._getPanelForTab(n) : t(),
                    c = {
                        oldTab: n,
                        oldPanel: h,
                        newTab: r ? t() : o,
                        newPanel: l
                    };
                e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
            },
            _toggle: function(e, i) {
                function n() {
                    o.running = !1, o._trigger("activate", e, i)
                }

                function s() {
                    i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, n) : (a.show(), n())
                }
                var o = this,
                    a = i.newPanel,
                    r = i.oldPanel;
                this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                    i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s()
                }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), s()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                    return 0 === t(this).attr("tabIndex")
                }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _activate: function(e) {
                var i, n = this._findActive(e);
                n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: i,
                    currentTarget: i,
                    preventDefault: t.noop
                }))
            },
            _findActive: function(e) {
                return e === !1 ? t() : this.tabs.eq(e)
            },
            _getIndex: function(t) {
                return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
            },
            _destroy: function() {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                    t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }), this.tabs.each(function() {
                    var e = t(this),
                        i = e.data("ui-tabs-aria-controls");
                    i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function(e) {
                var i = this.options.disabled;
                i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
                    return t !== e ? t : null
                }) : t.map(this.tabs, function(t, i) {
                    return i !== e ? i : null
                })), this._setupDisabled(i))
            },
            disable: function(e) {
                var i = this.options.disabled;
                if (i !== !0) {
                    if (void 0 === e) i = !0;
                    else {
                        if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                        i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                    }
                    this._setupDisabled(i)
                }
            },
            load: function(e, i) {
                e = this._getIndex(e);
                var n = this,
                    s = this.tabs.eq(e),
                    o = s.find(".ui-tabs-anchor"),
                    a = this._getPanelForTab(s),
                    r = {
                        tab: s,
                        panel: a
                    };
                this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (s.addClass("ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.success(function(t) {
                    setTimeout(function() {
                        a.html(t), n._trigger("load", i, r)
                    }, 1)
                }).complete(function(t, e) {
                    setTimeout(function() {
                        "abort" === e && n.panels.stop(!1, !0), s.removeClass("ui-tabs-loading"), a.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
                    }, 1)
                })))
            },
            _ajaxSettings: function(e, i, n) {
                var s = this;
                return {
                    url: e.attr("href"),
                    beforeSend: function(e, o) {
                        return s._trigger("beforeLoad", i, t.extend({
                            jqXHR: e,
                            ajaxSettings: o
                        }, n))
                    }
                }
            },
            _getPanelForTab: function(e) {
                var i = t(e).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + i))
            }
        })
    }),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./position"], t) : t(jQuery)
    }(function(t) {
        return t.widget("ui.tooltip", {
            version: "1.11.2",
            options: {
                content: function() {
                    var e = t(this).attr("title") || "";
                    return t("<a>").text(e).html()
                },
                hide: !0,
                items: "[title]:not([disabled])",
                position: {
                    my: "left top+15",
                    at: "left bottom",
                    collision: "flipfit flip"
                },
                show: !0,
                tooltipClass: null,
                track: !1,
                close: null,
                open: null
            },
            _addDescribedBy: function(e, i) {
                var n = (e.attr("aria-describedby") || "").split(/\s+/);
                n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
            },
            _removeDescribedBy: function(e) {
                var i = e.data("ui-tooltip-id"),
                    n = (e.attr("aria-describedby") || "").split(/\s+/),
                    s = t.inArray(i, n); - 1 !== s && n.splice(s, 1), e.removeData("ui-tooltip-id"), n = t.trim(n.join(" ")), n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
            },
            _create: function() {
                this._on({
                    mouseover: "open",
                    focusin: "open"
                }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = t("<div>").attr({
                    role: "log",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
            },
            _setOption: function(e, i) {
                var n = this;
                return "disabled" === e ? (this[i ? "_disable" : "_enable"](), void(this.options[e] = i)) : (this._super(e, i), void("content" === e && t.each(this.tooltips, function(t, e) {
                    n._updateContent(e.element)
                })))
            },
            _disable: function() {
                var e = this;
                t.each(this.tooltips, function(i, n) {
                    var s = t.Event("blur");
                    s.target = s.currentTarget = n.element[0], e.close(s, !0)
                }), this.element.find(this.options.items).addBack().each(function() {
                    var e = t(this);
                    e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).removeAttr("title")
                })
            },
            _enable: function() {
                this.element.find(this.options.items).addBack().each(function() {
                    var e = t(this);
                    e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
                })
            },
            open: function(e) {
                var i = this,
                    n = t(e ? e.target : this.element).closest(this.options.items);
                n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function() {
                    var e, n = t(this);
                    n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = {
                        element: this,
                        title: n.attr("title")
                    }, n.attr("title", ""))
                }), this._updateContent(n, e))
            },
            _updateContent: function(t, e) {
                var i, n = this.options.content,
                    s = this,
                    o = e ? e.type : null;
                return "string" == typeof n ? this._open(e, t, n) : (i = n.call(t[0], function(i) {
                    t.data("ui-tooltip-open") && s._delay(function() {
                        e && (e.type = o), this._open(e, t, i)
                    })
                }), void(i && this._open(e, t, i)))
            },
            _open: function(e, i, n) {
                function s(t) {
                    c.of = t, a.is(":hidden") || a.position(c)
                }
                var o, a, r, l, h, c = t.extend({}, this.options.position);
                if (n) {
                    if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(n);
                    i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), n.clone ? (h = n.clone(), h.removeAttr("id").find("[id]").removeAttr("id")) : h = n, t("<div>").html(h).appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                        mousemove: s
                    }), s(e)) : a.position(t.extend({
                        of: i
                    }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.show && this.options.show.delay && (l = this.delayedShow = setInterval(function() {
                        a.is(":visible") && (s(c.of), clearInterval(l))
                    }, t.fx.interval)), this._trigger("open", e, {
                        tooltip: a
                    }), r = {
                        keyup: function(e) {
                            if (e.keyCode === t.ui.keyCode.ESCAPE) {
                                var n = t.Event(e);
                                n.currentTarget = i[0], this.close(n, !0)
                            }
                        }
                    }, i[0] !== this.element[0] && (r.remove = function() {
                        this._removeTooltip(a)
                    }), e && "mouseover" !== e.type || (r.mouseleave = "close"), e && "focusin" !== e.type || (r.focusout = "close"), this._on(!0, i, r)
                }
            },
            close: function(e) {
                var i, n = this,
                    s = t(e ? e.currentTarget : this.element),
                    o = this._find(s);
                o && (i = o.tooltip, o.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                    n._removeTooltip(t(this))
                }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                    t(i.element).attr("title", i.title), delete n.parents[e]
                }), o.closing = !0, this._trigger("close", e, {
                    tooltip: i
                }), o.hiding || (o.closing = !1)))
            },
            _tooltip: function(e) {
                var i = t("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                    n = i.uniqueId().attr("id");
                return t("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[n] = {
                    element: e,
                    tooltip: i
                }
            },
            _find: function(t) {
                var e = t.data("ui-tooltip-id");
                return e ? this.tooltips[e] : null
            },
            _removeTooltip: function(t) {
                t.remove(), delete this.tooltips[t.attr("id")]
            },
            _destroy: function() {
                var e = this;
                t.each(this.tooltips, function(i, n) {
                    var s = t.Event("blur"),
                        o = n.element;
                    s.target = s.currentTarget = o[0], e.close(s, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
                }), this.liveRegion.remove()
            }
        })
    }),
    function(t, e, i, n) {
        "use strict";

        function s(t) {
            return ("string" == typeof t || t instanceof String) && (t = t.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), t
        }
        var o = function(e) {
            for (var i = e.length, n = t("head"); i--;) 0 === n.has("." + e[i]).length && n.append('<meta class="' + e[i] + '" />')
        };
        o(["foundation-mq-small", "foundation-mq-medium", "foundation-mq-large", "foundation-mq-xlarge", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), t(function() {
            "undefined" != typeof FastClick && "undefined" != typeof i.body && FastClick.attach(i.body)
        });
        var a = function(e, n) {
                if ("string" == typeof e) {
                    if (n) {
                        var s;
                        if (n.jquery) {
                            if (s = n[0], !s) return n
                        } else s = n;
                        return t(s.querySelectorAll(e))
                    }
                    return t(i.querySelectorAll(e))
                }
                return t(e, n)
            },
            r = function(t) {
                var e = [];
                return t || e.push("data"), this.namespace.length > 0 && e.push(this.namespace), e.push(this.name), e.join("-")
            },
            l = function(t) {
                for (var e = t.split("-"), i = e.length, n = []; i--;) 0 !== i ? n.push(e[i]) : this.namespace.length > 0 ? n.push(this.namespace, e[i]) : n.push(e[i]);
                return n.reverse().join("-")
            },
            h = function(e, i) {
                var n = this,
                    s = !a(this).data(this.attr_name(!0));
                return a(this.scope).is("[" + this.attr_name() + "]") ? (a(this.scope).data(this.attr_name(!0) + "-init", t.extend({}, this.settings, i || e, this.data_options(a(this.scope)))), s && this.events(this.scope)) : a("[" + this.attr_name() + "]", this.scope).each(function() {
                    var s = !a(this).data(n.attr_name(!0) + "-init");
                    a(this).data(n.attr_name(!0) + "-init", t.extend({}, n.settings, i || e, n.data_options(a(this)))), s && n.events(this)
                }), "string" == typeof e ? this[e].call(this, i) : void 0
            },
            c = function(t, e) {
                function i() {
                    e(t[0])
                }

                function n() {
                    if (this.one("load", i), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                        var t = this.attr("src"),
                            e = t.match(/\?/) ? "&" : "?";
                        e += "random=" + (new Date).getTime(), this.attr("src", t + e)
                    }
                }
                return t.attr("src") ? void(t[0].complete || 4 === t[0].readyState ? i() : n.call(t)) : void i()
            };
        e.matchMedia = e.matchMedia || function(t) {
                var e, i = t.documentElement,
                    n = i.firstElementChild || i.firstChild,
                    s = t.createElement("body"),
                    o = t.createElement("div");
                return o.id = "mq-test-1", o.style.cssText = "position:absolute;top:-100em", s.style.background = "none", s.appendChild(o),
                    function(t) {
                        return o.innerHTML = '&shy;<style media="' + t + '"> #mq-test-1 { width: 42px; }</style>', i.insertBefore(s, n), e = 42 === o.offsetWidth, i.removeChild(s), {
                            matches: e,
                            media: t
                        }
                    }
            }(i),
            function() {
                function t() {
                    i && (o(t), r && jQuery.fx.tick())
                }
                for (var i, n = 0, s = ["webkit", "moz"], o = e.requestAnimationFrame, a = e.cancelAnimationFrame, r = "undefined" != typeof jQuery.fx; n < s.length && !o; n++) o = e[s[n] + "RequestAnimationFrame"], a = a || e[s[n] + "CancelAnimationFrame"] || e[s[n] + "CancelRequestAnimationFrame"];
                o ? (e.requestAnimationFrame = o, e.cancelAnimationFrame = a, r && (jQuery.fx.timer = function(e) {
                    e() && jQuery.timers.push(e) && !i && (i = !0, t())
                }, jQuery.fx.stop = function() {
                    i = !1
                })) : (e.requestAnimationFrame = function(t) {
                    var i = (new Date).getTime(),
                        s = Math.max(0, 16 - (i - n)),
                        o = e.setTimeout(function() {
                            t(i + s)
                        }, s);
                    return n = i + s, o
                }, e.cancelAnimationFrame = function(t) {
                    clearTimeout(t)
                })
            }(jQuery), e.Foundation = {
                name: "Foundation",
                version: "5.4.2",
                media_queries: {
                    small: a(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    medium: a(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    large: a(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    xlarge: a(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                    xxlarge: a(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
                },
                stylesheet: t("<style></style>").appendTo("head")[0].sheet,
                global: {
                    namespace: n
                },
                init: function(t, i, n, s, o) {
                    var r = [t, n, s, o],
                        l = [];
                    if (this.rtl = /rtl/i.test(a("html").attr("dir")), this.scope = t || this.scope, this.set_namespace(), i && "string" == typeof i && !/reflow/i.test(i)) this.libs.hasOwnProperty(i) && l.push(this.init_lib(i, r));
                    else
                        for (var h in this.libs) l.push(this.init_lib(h, i));
                    return a(e).load(function() {
                        a(e).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
                    }), t
                },
                init_lib: function(e, i) {
                    return this.libs.hasOwnProperty(e) ? (this.patch(this.libs[e]), i && i.hasOwnProperty(e) ? ("undefined" != typeof this.libs[e].settings ? t.extend(!0, this.libs[e].settings, i[e]) : "undefined" != typeof this.libs[e].defaults && t.extend(!0, this.libs[e].defaults, i[e]), this.libs[e].init.apply(this.libs[e], [this.scope, i[e]])) : (i = i instanceof Array ? i : new Array(i), this.libs[e].init.apply(this.libs[e], i))) : function() {}
                },
                patch: function(t) {
                    t.scope = this.scope, t.namespace = this.global.namespace, t.rtl = this.rtl, t.data_options = this.utils.data_options, t.attr_name = r, t.add_namespace = l, t.bindings = h, t.S = this.utils.S
                },
                inherit: function(t, e) {
                    for (var i = e.split(" "), n = i.length; n--;) this.utils.hasOwnProperty(i[n]) && (t[i[n]] = this.utils[i[n]])
                },
                set_namespace: function() {
                    var e = this.global.namespace === n ? t(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
                    this.global.namespace = e === n || /false/i.test(e) ? "" : e
                },
                libs: {},
                utils: {
                    S: a,
                    throttle: function(t, e) {
                        var i = null;
                        return function() {
                            var n = this,
                                s = arguments;
                            null == i && (i = setTimeout(function() {
                                t.apply(n, s), i = null
                            }, e))
                        }
                    },
                    debounce: function(t, e, i) {
                        var n, s;
                        return function() {
                            var o = this,
                                a = arguments,
                                r = function() {
                                    n = null, i || (s = t.apply(o, a))
                                },
                                l = i && !n;
                            return clearTimeout(n), n = setTimeout(r, e), l && (s = t.apply(o, a)), s
                        }
                    },
                    data_options: function(e, i) {
                        function n(t) {
                            return !isNaN(t - 0) && null !== t && "" !== t && t !== !1 && t !== !0
                        }

                        function s(e) {
                            return "string" == typeof e ? t.trim(e) : e
                        }
                        i = i || "options";
                        var o, a, r, l = {},
                            h = function(t) {
                                var e = Foundation.global.namespace;
                                return t.data(e.length > 0 ? e + "-" + i : i)
                            },
                            c = h(e);
                        if ("object" == typeof c) return c;
                        for (r = (c || ":").split(";"), o = r.length; o--;) a = r[o].split(":"), a = [a[0], a.slice(1).join(":")], /true/i.test(a[1]) && (a[1] = !0), /false/i.test(a[1]) && (a[1] = !1), n(a[1]) && (a[1] = -1 === a[1].indexOf(".") ? parseInt(a[1], 10) : parseFloat(a[1])), 2 === a.length && a[0].length > 0 && (l[s(a[0])] = s(a[1]));
                        return l
                    },
                    register_media: function(e, i) {
                        Foundation.media_queries[e] === n && (t("head").append('<meta class="' + i + '"/>'), Foundation.media_queries[e] = s(t("." + i).css("font-family")))
                    },
                    add_custom_rule: function(t, e) {
                        if (e === n && Foundation.stylesheet) Foundation.stylesheet.insertRule(t, Foundation.stylesheet.cssRules.length);
                        else {
                            var i = Foundation.media_queries[e];
                            i !== n && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[e] + "{ " + t + " }")
                        }
                    },
                    image_loaded: function(t, e) {
                        var i = this,
                            n = t.length;
                        0 === n && e(t), t.each(function() {
                            c(i.S(this), function() {
                                n -= 1, 0 === n && e(t)
                            })
                        })
                    },
                    random_str: function() {
                        return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
                    }
                }
            }, t.fn.foundation = function() {
                var t = Array.prototype.slice.call(arguments, 0);
                return this.each(function() {
                    return Foundation.init.apply(Foundation, [this].concat(t)), this
                })
            }
    }(jQuery, window, window.document),
    function(t, e, i) {
        "use strict";
        Foundation.libs.abide = {
            name: "abide",
            version: "5.4.2",
            settings: {
                live_validate: !0,
                focus_on_invalid: !0,
                error_labels: !0,
                timeout: 1e3,
                patterns: {
                    alpha: /^[a-zA-Z]+$/,
                    alpha_numeric: /^[a-zA-Z0-9]+$/,
                    integer: /^[-+]?\d+$/,
                    number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                    card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                    cvv: /^([0-9]){3,4}$/,
                    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                    url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                    domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,
                    datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                    time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                    dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                    month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
                },
                validators: {
                    equalTo: function(t) {
                        var e = i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,
                            n = t.value,
                            s = e === n;
                        return s
                    }
                }
            },
            timer: null,
            init: function(t, e, i) {
                this.bindings(e, i)
            },
            events: function(e) {
                var i = this,
                    n = i.S(e).attr("novalidate", "novalidate"),
                    s = n.data(this.attr_name(!0) + "-init") || {};
                this.invalid_attr = this.add_namespace("data-invalid"), n.off(".abide").on("submit.fndtn.abide validate.fndtn.abide", function(t) {
                    var e = /ajax/i.test(i.S(this).attr(i.attr_name()));
                    return i.validate(i.S(this).find("input, textarea, select").get(), t, e)
                }).on("reset", function() {
                    return i.reset(t(this))
                }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(t) {
                    i.validate([this], t)
                }).on("keydown.fndtn.abide", function(t) {
                    s.live_validate === !0 && (clearTimeout(i.timer), i.timer = setTimeout(function() {
                        i.validate([this], t)
                    }.bind(this), s.timeout))
                })
            },
            reset: function(e) {
                e.removeAttr(this.invalid_attr), t(this.invalid_attr, e).removeAttr(this.invalid_attr), t(".error", e).not("small").removeClass("error")
            },
            validate: function(t, e, i) {
                for (var n = this.parse_patterns(t), s = n.length, o = this.S(t[0]).closest("form"), a = /submit/.test(e.type), r = 0; s > r; r++)
                    if (!n[r] && (a || i)) return this.settings.focus_on_invalid && t[r].focus(), o.trigger("invalid"), this.S(t[r]).closest("form").attr(this.invalid_attr, ""), !1;
                return (a || i) && o.trigger("valid"), o.removeAttr(this.invalid_attr), i ? !1 : !0
            },
            parse_patterns: function(t) {
                for (var e = t.length, i = []; e--;) i.push(this.pattern(t[e]));
                return this.check_validation_and_apply_styles(i)
            },
            pattern: function(t) {
                var e = t.getAttribute("type"),
                    i = "string" == typeof t.getAttribute("required"),
                    n = t.getAttribute("pattern") || "";
                return this.settings.patterns.hasOwnProperty(n) && n.length > 0 ? [t, this.settings.patterns[n], i] : n.length > 0 ? [t, new RegExp(n), i] : this.settings.patterns.hasOwnProperty(e) ? [t, this.settings.patterns[e], i] : (n = /.*/, [t, n, i])
            },
            check_validation_and_apply_styles: function(e) {
                var i = e.length,
                    n = [],
                    s = this.S(e[0][0]).closest("[data-" + this.attr_name(!0) + "]");
                for (s.data(this.attr_name(!0) + "-init") || {}; i--;) {
                    var o, a, r = e[i][0],
                        l = e[i][2],
                        h = r.value.trim(),
                        c = this.S(r).parent(),
                        u = r.getAttribute(this.add_namespace("data-abide-validator")),
                        d = "radio" === r.type,
                        p = "checkbox" === r.type,
                        f = this.S('label[for="' + r.getAttribute("id") + '"]'),
                        m = l ? r.value.length > 0 : !0;
                    if (r.getAttribute(this.add_namespace("data-equalto")) && (u = "equalTo"), o = c.is("label") ? c.parent() : c, u && (a = this.settings.validators[u].apply(this, [r, l, o]), n.push(a)), d && l) n.push(this.valid_radio(r, l));
                    else if (p && l) n.push(this.valid_checkbox(r, l));
                    else if (n.push(e[i][1].test(h) && m || !l && r.value.length < 1 || t(r).attr("disabled") ? !0 : !1), n = [n.every(function(t) {
                            return t
                        })], n[0]) this.S(r).removeAttr(this.invalid_attr), r.setAttribute("aria-invalid", "false"), r.removeAttribute("aria-describedby"), o.removeClass("error"), f.length > 0 && this.settings.error_labels && f.removeClass("error").removeAttr("role"), t(r).triggerHandler("valid");
                    else {
                        this.S(r).attr(this.invalid_attr, ""), r.setAttribute("aria-invalid", "true");
                        var g = o.find("small.error, span.error"),
                            v = g.length > 0 ? g[0].id : "";
                        v.length > 0 && r.setAttribute("aria-describedby", v), o.addClass("error"), f.length > 0 && this.settings.error_labels && f.addClass("error").attr("role", "alert"), t(r).triggerHandler("invalid")
                    }
                }
                return n
            },
            valid_checkbox: function(t, e) {
                var t = this.S(t),
                    i = t.is(":checked") || !e;
                return i ? t.removeAttr(this.invalid_attr).parent().removeClass("error") : t.attr(this.invalid_attr, "").parent().addClass("error"), i
            },
            valid_radio: function(t) {
                for (var e = t.getAttribute("name"), i = this.S(t).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + e + "']"), n = i.length, s = !1, o = 0; n > o; o++) i[o].checked && (s = !0);
                for (var o = 0; n > o; o++) s ? this.S(i[o]).removeAttr(this.invalid_attr).parent().removeClass("error") : this.S(i[o]).attr(this.invalid_attr, "").parent().addClass("error");
                return s
            },
            valid_equal: function(t, e, n) {
                var s = i.getElementById(t.getAttribute(this.add_namespace("data-equalto"))).value,
                    o = t.value,
                    a = s === o;
                return a ? (this.S(t).removeAttr(this.invalid_attr), n.removeClass("error")) : (this.S(t).attr(this.invalid_attr, ""), n.addClass("error")), a
            },
            valid_oneof: function(t, e, i, n) {
                var t = this.S(t),
                    s = this.S("[" + this.add_namespace("data-oneof") + "]"),
                    o = s.filter(":checked").length > 0;
                if (o ? t.removeAttr(this.invalid_attr).parent().removeClass("error") : t.attr(this.invalid_attr, "").parent().addClass("error"), !n) {
                    var a = this;
                    s.each(function() {
                        a.valid_oneof.call(a, this, null, null, !0)
                    })
                }
                return o
            }
        }
    }(jQuery, window, window.document),
    function(t) {
        "use strict";
        Foundation.libs.accordion = {
            name: "accordion",
            version: "5.4.2",
            settings: {
                active_class: "active",
                multi_expand: !1,
                toggleable: !0,
                callback: function() {}
            },
            init: function(t, e, i) {
                this.bindings(e, i)
            },
            events: function() {
                var e = this,
                    i = this.S;
                i(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > dd > a", function(n) {
                    var s = i(this).closest("[" + e.attr_name() + "]"),
                        o = e.attr_name() + "=" + s.attr(e.attr_name()),
                        a = s.data(e.attr_name(!0) + "-init"),
                        r = i("#" + this.href.split("#")[1]),
                        l = t("> dd", s),
                        h = l.children(".content"),
                        c = h.filter("." + a.active_class);
                    return n.preventDefault(), s.attr(e.attr_name()) && (h = h.add("[" + o + "] dd > .content"), l = l.add("[" + o + "] dd")), a.toggleable && r.is(c) ? (r.parent("dd").toggleClass(a.active_class, !1), r.toggleClass(a.active_class, !1), a.callback(r), r.triggerHandler("toggled", [s]), void s.triggerHandler("toggled", [r])) : (a.multi_expand || (h.removeClass(a.active_class), l.removeClass(a.active_class)), r.addClass(a.active_class).parent().addClass(a.active_class), a.callback(r), r.triggerHandler("toggled", [s]), void s.triggerHandler("toggled", [r]))
                })
            },
            off: function() {},
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(t) {
        "use strict";
        Foundation.libs.alert = {
            name: "alert",
            version: "5.4.2",
            settings: {
                callback: function() {}
            },
            init: function(t, e, i) {
                this.bindings(e, i)
            },
            events: function() {
                var e = this,
                    i = this.S;
                t(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] .close", function(t) {
                    var n = i(this).closest("[" + e.attr_name() + "]"),
                        s = n.data(e.attr_name(!0) + "-init") || e.settings;
                    t.preventDefault(), Modernizr.csstransitions ? (n.addClass("alert-close"), n.on("transitionend webkitTransitionEnd oTransitionEnd", function() {
                        i(this).trigger("close").trigger("close.fndtn.alert").remove(), s.callback()
                    })) : n.fadeOut(300, function() {
                        i(this).trigger("close").trigger("close.fndtn.alert").remove(), s.callback()
                    })
                })
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(t, e, i, n) {
        "use strict";
        Foundation.libs.clearing = {
            name: "clearing",
            version: "5.4.2",
            settings: {
                templates: {
                    viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'
                },
                close_selectors: ".clearing-close, div.clearing-blackout",
                open_selectors: "",
                skip_selector: "",
                touch_label: "",
                init: !1,
                locked: !1
            },
            init: function(t, e, i) {
                var n = this;
                Foundation.inherit(this, "throttle image_loaded"), this.bindings(e, i), n.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(n.S("li", this.scope)) : n.S("[" + this.attr_name() + "]", this.scope).each(function() {
                    n.assemble(n.S("li", this))
                })
            },
            events: function(n) {
                var s = this,
                    o = s.S,
                    a = t(".scroll-container");
                a.length > 0 && (this.scope = a), o(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function(t, e, i) {
                    var e = e || o(this),
                        i = i || e,
                        n = e.next("li"),
                        a = e.closest("[" + s.attr_name() + "]").data(s.attr_name(!0) + "-init"),
                        r = o(t.target);
                    t.preventDefault(), a || (s.init(), a = e.closest("[" + s.attr_name() + "]").data(s.attr_name(!0) + "-init")), i.hasClass("visible") && e[0] === i[0] && n.length > 0 && s.is_open(e) && (i = n, r = o("img", i)), s.open(r, e, i), s.update_paddles(i)
                }).on("click.fndtn.clearing", ".clearing-main-next", function(t) {
                    s.nav(t, "next")
                }).on("click.fndtn.clearing", ".clearing-main-prev", function(t) {
                    s.nav(t, "prev")
                }).on("click.fndtn.clearing", this.settings.close_selectors, function(t) {
                    Foundation.libs.clearing.close(t, this)
                }), t(i).on("keydown.fndtn.clearing", function(t) {
                    s.keydown(t)
                }), o(e).off(".clearing").on("resize.fndtn.clearing", function() {
                    s.resize()
                }), this.swipe_events(n)
            },
            swipe_events: function() {
                var t = this,
                    e = t.S;
                e(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function(t) {
                    t.touches || (t = t.originalEvent);
                    var i = {
                        start_page_x: t.touches[0].pageX,
                        start_page_y: t.touches[0].pageY,
                        start_time: (new Date).getTime(),
                        delta_x: 0,
                        is_scrolling: n
                    };
                    e(this).data("swipe-transition", i), t.stopPropagation()
                }).on("touchmove.fndtn.clearing", ".visible-img", function(i) {
                    if (i.touches || (i = i.originalEvent), !(i.touches.length > 1 || i.scale && 1 !== i.scale)) {
                        var n = e(this).data("swipe-transition");
                        if ("undefined" == typeof n && (n = {}), n.delta_x = i.touches[0].pageX - n.start_page_x, Foundation.rtl && (n.delta_x = -n.delta_x), "undefined" == typeof n.is_scrolling && (n.is_scrolling = !!(n.is_scrolling || Math.abs(n.delta_x) < Math.abs(i.touches[0].pageY - n.start_page_y))), !n.is_scrolling && !n.active) {
                            i.preventDefault();
                            var s = n.delta_x < 0 ? "next" : "prev";
                            n.active = !0, t.nav(i, s)
                        }
                    }
                }).on("touchend.fndtn.clearing", ".visible-img", function(t) {
                    e(this).data("swipe-transition", {}), t.stopPropagation()
                })
            },
            assemble: function(e) {
                var i = e.parent();
                if (!i.parent().hasClass("carousel")) {
                    i.after('<div id="foundationClearingHolder"></div>');
                    var n = i.detach(),
                        s = "";
                    if (null != n[0]) {
                        s = n[0].outerHTML;
                        var o = this.S("#foundationClearingHolder"),
                            a = i.data(this.attr_name(!0) + "-init"),
                            r = {
                                grid: '<div class="carousel">' + s + "</div>",
                                viewing: a.templates.viewing
                            },
                            l = '<div class="clearing-assembled"><div>' + r.viewing + r.grid + "</div></div>",
                            h = this.settings.touch_label;
                        Modernizr.touch && (l = t(l).find(".clearing-touch-label").html(h).end()), o.after(l).remove()
                    }
                }
            },
            open: function(e, n, s) {
                function o() {
                    setTimeout(function() {
                        this.image_loaded(d, function() {
                            1 !== d.outerWidth() || f ? a.call(this, d) : o.call(this)
                        }.bind(this))
                    }.bind(this), 100)
                }

                function a(e) {
                    var i = t(e);
                    i.css("visibility", "visible"), l.css("overflow", "hidden"), h.addClass("clearing-blackout"), c.addClass("clearing-container"), u.show(), this.fix_height(s).caption(r.S(".clearing-caption", u), r.S("img", s)).center_and_label(e, p).shift(n, s, function() {
                        s.closest("li").siblings().removeClass("visible"), s.closest("li").addClass("visible")
                    }), u.trigger("opened.fndtn.clearing")
                }
                var r = this,
                    l = t(i.body),
                    h = s.closest(".clearing-assembled"),
                    c = r.S("div", h).first(),
                    u = r.S(".visible-img", c),
                    d = r.S("img", u).not(e),
                    p = r.S(".clearing-touch-label", c),
                    f = !1;
                t("body").on("touchmove", function(t) {
                    t.preventDefault()
                }), d.error(function() {
                    f = !0
                }), this.locked() || (u.trigger("open.fndtn.clearing"), d.attr("src", this.load(e)).css("visibility", "hidden"), o.call(this))
            },
            close: function(e, n) {
                e.preventDefault();
                var s, o, a = function(t) {
                        return /blackout/.test(t.selector) ? t : t.closest(".clearing-blackout")
                    }(t(n)),
                    r = t(i.body);
                return n === e.target && a && (r.css("overflow", ""), s = t("div", a).first(), o = t(".visible-img", s), o.trigger("close.fndtn.clearing"), this.settings.prev_index = 0, t("ul[" + this.attr_name() + "]", a).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), s.removeClass("clearing-container"), o.hide(), o.trigger("closed.fndtn.clearing")), t("body").off("touchmove"), !1
            },
            is_open: function(t) {
                return t.parent().prop("style").length > 0
            },
            keydown: function(e) {
                var i = t(".clearing-blackout ul[" + this.attr_name() + "]"),
                    n = this.rtl ? 37 : 39,
                    s = this.rtl ? 39 : 37,
                    o = 27;
                e.which === n && this.go(i, "next"), e.which === s && this.go(i, "prev"), e.which === o && this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")
            },
            nav: function(e, i) {
                var n = t("ul[" + this.attr_name() + "]", ".clearing-blackout");
                e.preventDefault(), this.go(n, i)
            },
            resize: function() {
                var e = t("img", ".clearing-blackout .visible-img"),
                    i = t(".clearing-touch-label", ".clearing-blackout");
                e.length && (this.center_and_label(e, i), e.trigger("resized.fndtn.clearing"))
            },
            fix_height: function(t) {
                var e = t.parent().children(),
                    i = this;
                return e.each(function() {
                    var t = i.S(this),
                        e = t.find("img");
                    t.height() > e.outerHeight() && t.addClass("fix-height")
                }).closest("ul").width(100 * e.length + "%"), this
            },
            update_paddles: function(t) {
                t = t.closest("li");
                var e = t.closest(".carousel").siblings(".visible-img");
                t.next().length > 0 ? this.S(".clearing-main-next", e).removeClass("disabled") : this.S(".clearing-main-next", e).addClass("disabled"), t.prev().length > 0 ? this.S(".clearing-main-prev", e).removeClass("disabled") : this.S(".clearing-main-prev", e).addClass("disabled")
            },
            center_and_label: function(t, e) {
                return this.rtl ? (t.css({
                    marginRight: -(t.outerWidth() / 2),
                    marginTop: -(t.outerHeight() / 2),
                    left: "auto",
                    right: "50%"
                }), e.length > 0 && e.css({
                    marginRight: -(e.outerWidth() / 2),
                    marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10,
                    left: "auto",
                    right: "50%"
                })) : (t.css({
                    marginLeft: -(t.outerWidth() / 2),
                    marginTop: -(t.outerHeight() / 2)
                }), e.length > 0 && e.css({
                    marginLeft: -(e.outerWidth() / 2),
                    marginTop: -(t.outerHeight() / 2) - e.outerHeight() - 10
                })), this
            },
            load: function(t) {
                var e;
                return e = "A" === t[0].nodeName ? t.attr("href") : t.parent().attr("href"), this.preload(t), e ? e : t.attr("src")
            },
            preload: function(t) {
                this.img(t.closest("li").next()).img(t.closest("li").prev())
            },
            img: function(t) {
                if (t.length) {
                    var e = new Image,
                        i = this.S("a", t);
                    e.src = i.length ? i.attr("href") : this.S("img", t).attr("src")
                }
                return this
            },
            caption: function(t, e) {
                var i = e.attr("data-caption");
                return i ? t.html(i).show() : t.text("").hide(), this
            },
            go: function(t, e) {
                var i = this.S(".visible", t),
                    n = i[e]();
                this.settings.skip_selector && 0 != n.find(this.settings.skip_selector).length && (n = n[e]()), n.length && this.S("img", n).trigger("click", [i, n]).trigger("click.fndtn.clearing", [i, n]).trigger("change.fndtn.clearing")
            },
            shift: function(t, e, i) {
                var n, s = e.parent(),
                    o = this.settings.prev_index || e.index(),
                    a = this.direction(s, t, e),
                    r = this.rtl ? "right" : "left",
                    l = parseInt(s.css("left"), 10),
                    h = e.outerWidth(),
                    c = {};
                e.index() === o || /skip/.test(a) ? /skip/.test(a) && (n = e.index() - this.settings.up_count, this.lock(), n > 0 ? (c[r] = -(n * h), s.animate(c, 300, this.unlock())) : (c[r] = 0, s.animate(c, 300, this.unlock()))) : /left/.test(a) ? (this.lock(), c[r] = l + h, s.animate(c, 300, this.unlock())) : /right/.test(a) && (this.lock(), c[r] = l - h, s.animate(c, 300, this.unlock())), i()
            },
            direction: function(t, e, i) {
                var n, s = this.S("li", t),
                    o = s.outerWidth() + s.outerWidth() / 4,
                    a = Math.floor(this.S(".clearing-container").outerWidth() / o) - 1,
                    r = s.index(i);
                return this.settings.up_count = a, n = this.adjacent(this.settings.prev_index, r) ? r > a && r > this.settings.prev_index ? "right" : r > a - 1 && r <= this.settings.prev_index ? "left" : !1 : "skip", this.settings.prev_index = r, n
            },
            adjacent: function(t, e) {
                for (var i = e + 1; i >= e - 1; i--)
                    if (i === t) return !0;
                return !1
            },
            lock: function() {
                this.settings.locked = !0
            },
            unlock: function() {
                this.settings.locked = !1
            },
            locked: function() {
                return this.settings.locked
            },
            off: function() {
                this.S(this.scope).off(".fndtn.clearing"), this.S(e).off(".fndtn.clearing")
            },
            reflow: function() {
                this.init()
            }
        }
    }(jQuery, window, window.document),
    function(t, e) {
        "use strict";
        Foundation.libs.dropdown = {
            name: "dropdown",
            version: "5.4.2",
            settings: {
                active_class: "open",
                align: "bottom",
                is_hover: !1,
                opened: function() {},
                closed: function() {}
            },
            init: function(t, e, i) {
                Foundation.inherit(this, "throttle"), this.bindings(e, i)
            },
            events: function() {
                var i = this,
                    n = i.S;
                n(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function(e) {
                    var s = n(this).data(i.attr_name(!0) + "-init") || i.settings;
                    (!s.is_hover || Modernizr.touch) && (e.preventDefault(), i.toggle(t(this)))
                }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(t) {
                    var e, s, o = n(this);
                    clearTimeout(i.timeout), o.data(i.data_attr()) ? (e = n("#" + o.data(i.data_attr())), s = o) : (e = o, s = n("[" + i.attr_name() + "='" + e.attr("id") + "']"));
                    var a = s.data(i.attr_name(!0) + "-init") || i.settings;
                    n(t.target).data(i.data_attr()) && a.is_hover && i.closeall.call(i), a.is_hover && i.open.apply(i, [e, s])
                }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function() {
                    var t = n(this);
                    i.timeout = setTimeout(function() {
                        if (t.data(i.data_attr())) {
                            var e = t.data(i.data_attr(!0) + "-init") || i.settings;
                            e.is_hover && i.close.call(i, n("#" + t.data(i.data_attr())))
                        } else {
                            var s = n("[" + i.attr_name() + '="' + n(this).attr("id") + '"]'),
                                e = s.data(i.attr_name(!0) + "-init") || i.settings;
                            e.is_hover && i.close.call(i, t)
                        }
                    }.bind(this), 150)
                }).on("click.fndtn.dropdown", function(e) {
                    var s = n(e.target).closest("[" + i.attr_name() + "-content]");
                    if (!(n(e.target).closest("[" + i.attr_name() + "]").length > 0)) return !n(e.target).data("revealId") && s.length > 0 && (n(e.target).is("[" + i.attr_name() + "-content]") || t.contains(s.first()[0], e.target)) ? void e.stopPropagation() : void i.close.call(i, n("[" + i.attr_name() + "-content]"))
                }).on("opened.fndtn.dropdown", "[" + i.attr_name() + "-content]", function() {
                    i.settings.opened.call(this)
                }).on("closed.fndtn.dropdown", "[" + i.attr_name() + "-content]", function() {
                    i.settings.closed.call(this)
                }), n(e).off(".dropdown").on("resize.fndtn.dropdown", i.throttle(function() {
                    i.resize.call(i)
                }, 50)), this.resize()
            },
            close: function(e) {
                var i = this;
                e.each(function() {
                    var n = t("[" + i.attr_name() + "=" + e[0].id + "]") || t("aria-controls=" + e[0].id + "]");
                    n.attr("aria-expanded", "false"), i.S(this).hasClass(i.settings.active_class) && (i.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").attr("aria-hidden", "true").removeClass(i.settings.active_class).prev("[" + i.attr_name() + "]").removeClass(i.settings.active_class).removeData("target"), i.S(this).trigger("closed").trigger("closed.fndtn.dropdown", [e]))
                })
            },
            closeall: function() {
                var e = this;
                t.each(e.S("[" + this.attr_name() + "-content]"), function() {
                    e.close.call(e, e.S(this))
                })
            },
            open: function(t, e) {
                this.css(t.addClass(this.settings.active_class), e), t.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), t.data("target", e.get(0)).trigger("opened").trigger("opened.fndtn.dropdown", [t, e]), t.attr("aria-hidden", "false"), e.attr("aria-expanded", "true"), t.focus()
            },
            data_attr: function() {
                return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
            },
            toggle: function(t) {
                var e = this.S("#" + t.data(this.data_attr()));
                0 !== e.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(e)), e.hasClass(this.settings.active_class) ? (this.close.call(this, e), e.data("target") !== t.get(0) && this.open.call(this, e, t)) : this.open.call(this, e, t))
            },
            resize: function() {
                var t = this.S("[" + this.attr_name() + "-content].open"),
                    e = this.S("[" + this.attr_name() + "='" + t.attr("id") + "']");
                t.length && e.length && this.css(t, e)
            },
            css: function(t, e) {
                var i = Math.max((e.width() - t.width()) / 2, 8);
                if (this.clear_idx(), this.small()) {
                    var n = this.dirs.bottom.call(t, e);
                    t.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                        position: "absolute",
                        width: "95%",
                        "max-width": "none",
                        top: n.top
                    }), t.css(Foundation.rtl ? "right" : "left", i)
                } else {
                    var s = e.data(this.attr_name(!0) + "-init") || this.settings;
                    this.style(t, e, s)
                }
                return t
            },
            style: function(e, i, n) {
                var s = t.extend({
                    position: "absolute"
                }, this.dirs[n.align].call(e, i, n));
                e.attr("style", "").css(s)
            },
            dirs: {
                _base: function(t) {
                    var e = this.offsetParent(),
                        i = e.offset(),
                        n = t.offset();
                    return n.top -= i.top, n.left -= i.left, n
                },
                top: function(t) {
                    var e = Foundation.libs.dropdown,
                        i = e.dirs._base.call(this, t),
                        n = 8;
                    return this.addClass("drop-top"), (t.outerWidth() < this.outerWidth() || e.small()) && e.adjust_pip(n, i), Foundation.rtl ? {
                        left: i.left - this.outerWidth() + t.outerWidth(),
                        top: i.top - this.outerHeight()
                    } : {
                        left: i.left,
                        top: i.top - this.outerHeight()
                    }
                },
                bottom: function(t) {
                    var e = Foundation.libs.dropdown,
                        i = e.dirs._base.call(this, t),
                        n = 8;
                    return (t.outerWidth() < this.outerWidth() || e.small()) && e.adjust_pip(n, i), e.rtl ? {
                        left: i.left - this.outerWidth() + t.outerWidth(),
                        top: i.top + t.outerHeight()
                    } : {
                        left: i.left,
                        top: i.top + t.outerHeight()
                    }
                },
                left: function(t) {
                    var e = Foundation.libs.dropdown.dirs._base.call(this, t);
                    return this.addClass("drop-left"), {
                        left: e.left - this.outerWidth(),
                        top: e.top
                    }
                },
                right: function(t) {
                    var e = Foundation.libs.dropdown.dirs._base.call(this, t);
                    return this.addClass("drop-right"), {
                        left: e.left + t.outerWidth(),
                        top: e.top
                    }
                }
            },
            adjust_pip: function(t, e) {
                var i = Foundation.stylesheet;
                this.small() && (t += e.left - 8), this.rule_idx = i.cssRules.length;
                var n = ".f-dropdown.open:before",
                    s = ".f-dropdown.open:after",
                    o = "left: " + t + "px;",
                    a = "left: " + (t - 1) + "px;";
                i.insertRule ? (i.insertRule([n, "{", o, "}"].join(" "), this.rule_idx), i.insertRule([s, "{", a, "}"].join(" "), this.rule_idx + 1)) : (i.addRule(n, o, this.rule_idx), i.addRule(s, a, this.rule_idx + 1))
            },
            clear_idx: function() {
                var t = Foundation.stylesheet;
                this.rule_idx && (t.deleteRule(this.rule_idx), t.deleteRule(this.rule_idx), delete this.rule_idx)
            },
            small: function() {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            off: function() {
                this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(e).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown")
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(t, e) {
        "use strict";
        Foundation.libs.interchange = {
            name: "interchange",
            version: "5.4.2",
            cache: {},
            images_loaded: !1,
            nodes_loaded: !1,
            settings: {
                load_attr: "interchange",
                named_queries: {
                    "default": "only screen",
                    small: Foundation.media_queries.small,
                    medium: Foundation.media_queries.medium,
                    large: Foundation.media_queries.large,
                    xlarge: Foundation.media_queries.xlarge,
                    xxlarge: Foundation.media_queries.xxlarge,
                    landscape: "only screen and (orientation: landscape)",
                    portrait: "only screen and (orientation: portrait)",
                    retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
                },
                directives: {
                    replace: function(e, i, n) {
                        if (/IMG/.test(e[0].nodeName)) {
                            var s = e[0].src;
                            if (new RegExp(i, "i").test(s)) return;
                            return e[0].src = i, n(e[0].src)
                        }
                        var o = e.data(this.data_attr + "-last-path"),
                            a = this;
                        if (o != i) return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(i) ? (t(e).css("background-image", "url(" + i + ")"), e.data("interchange-last-path", i), n(i)) : t.get(i, function(t) {
                            e.html(t), e.data(a.data_attr + "-last-path", i), n()
                        })
                    }
                }
            },
            init: function(e, i, n) {
                Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), t.extend(!0, this.settings, i, n), this.bindings(i, n), this.load("images"), this.load("nodes")
            },
            get_media_hash: function() {
                var t = "";
                for (var e in this.settings.named_queries) t += matchMedia(this.settings.named_queries[e]).matches.toString();
                return t
            },
            events: function() {
                var i, n = this;
                return t(e).off(".interchange").on("resize.fndtn.interchange", n.throttle(function() {
                    var t = n.get_media_hash();
                    t !== i && n.resize(), i = t
                }, 50)), this
            },
            resize: function() {
                var e = this.cache;
                if (!this.images_loaded || !this.nodes_loaded) return void setTimeout(t.proxy(this.resize, this), 50);
                for (var i in e)
                    if (e.hasOwnProperty(i)) {
                        var n = this.results(i, e[i]);
                        n && this.settings.directives[n.scenario[1]].call(this, n.el, n.scenario[0], function() {
                            if (arguments[0] instanceof Array) var t = arguments[0];
                            else var t = Array.prototype.slice.call(arguments, 0);
                            n.el.trigger(n.scenario[1], t)
                        })
                    }
            },
            results: function(t, e) {
                var i = e.length;
                if (i > 0)
                    for (var n = this.S("[" + this.add_namespace("data-uuid") + '="' + t + '"]'); i--;) {
                        var s, o = e[i][2];
                        if (s = matchMedia(this.settings.named_queries.hasOwnProperty(o) ? this.settings.named_queries[o] : o), s.matches) return {
                            el: n,
                            scenario: e[i]
                        }
                    }
                return !1
            },
            load: function(t, e) {
                return ("undefined" == typeof this["cached_" + t] || e) && this["update_" + t](), this["cached_" + t]
            },
            update_images: function() {
                var t = this.S("img[" + this.data_attr + "]"),
                    e = t.length,
                    i = e,
                    n = 0,
                    s = this.data_attr;
                for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === e; i--;) {
                    if (n++, t[i]) {
                        var o = t[i].getAttribute(s) || "";
                        o.length > 0 && this.cached_images.push(t[i])
                    }
                    n === e && (this.images_loaded = !0, this.enhance("images"))
                }
                return this
            },
            update_nodes: function() {
                var t = this.S("[" + this.data_attr + "]").not("img"),
                    e = t.length,
                    i = e,
                    n = 0,
                    s = this.data_attr;
                for (this.cached_nodes = [], this.nodes_loaded = 0 === e; i--;) {
                    n++;
                    var o = t[i].getAttribute(s) || "";
                    o.length > 0 && this.cached_nodes.push(t[i]), n === e && (this.nodes_loaded = !0, this.enhance("nodes"))
                }
                return this
            },
            enhance: function(i) {
                for (var n = this["cached_" + i].length; n--;) this.object(t(this["cached_" + i][n]));
                return t(e).trigger("resize").trigger("resize.fndtn.interchange")
            },
            convert_directive: function(t) {
                var e = this.trim(t);
                return e.length > 0 ? e : "replace"
            },
            parse_scenario: function(t) {
                var e = t[0].match(/(.+),\s*(\w+)\s*$/),
                    i = t[1];
                if (e) var n = e[1],
                    s = e[2];
                else var o = t[0].split(/,\s*$/),
                    n = o[0],
                    s = "";
                return [this.trim(n), this.convert_directive(s), this.trim(i)]
            },
            object: function(t) {
                var e = this.parse_data_attr(t),
                    i = [],
                    n = e.length;
                if (n > 0)
                    for (; n--;) {
                        var s = e[n].split(/\((.*?)(\))$/);
                        if (s.length > 1) {
                            var o = this.parse_scenario(s);
                            i.push(o)
                        }
                    }
                return this.store(t, i)
            },
            store: function(t, e) {
                var i = this.random_str(),
                    n = t.data(this.add_namespace("uuid", !0));
                return this.cache[n] ? this.cache[n] : (t.attr(this.add_namespace("data-uuid"), i), this.cache[i] = e)
            },
            trim: function(e) {
                return "string" == typeof e ? t.trim(e) : e
            },
            set_data_attr: function(t) {
                return t ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
            },
            parse_data_attr: function(t) {
                for (var e = t.attr(this.attr_name()).split(/\[(.*?)\]/), i = e.length, n = []; i--;) e[i].replace(/[\W\d]+/, "").length > 4 && n.push(e[i]);
                return n
            },
            reflow: function() {
                this.load("images", !0), this.load("nodes", !0)
            }
        }
    }(jQuery, window, window.document),
    function(t, e, i, n) {
        "use strict";
        Foundation.libs.joyride = {
            name: "joyride",
            version: "5.4.2",
            defaults: {
                expose: !1,
                modal: !0,
                keyboard: !0,
                tip_location: "bottom",
                nub_position: "auto",
                scroll_speed: 1500,
                scroll_animation: "linear",
                timer: 0,
                start_timer_on_click: !0,
                start_offset: 0,
                next_button: !0,
                prev_button: !0,
                tip_animation: "fade",
                pause_after: [],
                exposed: [],
                tip_animation_fade_speed: 300,
                cookie_monster: !1,
                cookie_name: "joyride",
                cookie_domain: !1,
                cookie_expires: 365,
                tip_container: "body",
                abort_on_close: !0,
                tip_location_patterns: {
                    top: ["bottom"],
                    bottom: [],
                    left: ["right", "top", "bottom"],
                    right: ["left", "top", "bottom"]
                },
                post_ride_callback: function() {},
                post_step_callback: function() {},
                pre_step_callback: function() {},
                pre_ride_callback: function() {},
                post_expose_callback: function() {},
                template: {
                    link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                    timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                    tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                    wrapper: '<div class="joyride-content-wrapper"></div>',
                    button: '<a href="#" class="small button joyride-next-tip"></a>',
                    prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
                    modal: '<div class="joyride-modal-bg"></div>',
                    expose: '<div class="joyride-expose-wrapper"></div>',
                    expose_cover: '<div class="joyride-expose-cover"></div>'
                },
                expose_add_class: ""
            },
            init: function(e, i, n) {
                Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || t.extend({}, this.defaults, n || i), this.bindings(i, n)
            },
            go_next: function() {
                this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
            },
            go_prev: function() {
                this.settings.$li.prev().length < 1 || (this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(null, !0), this.startTimer()) : (this.hide(), this.show(null, !0)))
            },
            events: function() {
                var i = this;
                t(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function(t) {
                    t.preventDefault(), this.go_next()
                }.bind(this)).on("click.fndtn.joyride", ".joyride-prev-tip", function(t) {
                    t.preventDefault(), this.go_prev()
                }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function(t) {
                    t.preventDefault(), this.end(this.settings.abort_on_close)
                }.bind(this)).on("keyup.joyride", function(t) {
                    if (this.settings.keyboard) switch (t.which) {
                        case 39:
                            t.preventDefault(), this.go_next();
                            break;
                        case 37:
                            t.preventDefault(), this.go_prev();
                            break;
                        case 27:
                            t.preventDefault(), this.end(this.settings.abort_on_close)
                    }
                }.bind(this)), t(e).off(".joyride").on("resize.fndtn.joyride", i.throttle(function() {
                    if (t("[" + i.attr_name() + "]").length > 0 && i.settings.$next_tip && i.settings.riding) {
                        if (i.settings.exposed.length > 0) {
                            var e = t(i.settings.exposed);
                            e.each(function() {
                                var e = t(this);
                                i.un_expose(e), i.expose(e)
                            })
                        }
                        i.is_phone() ? i.pos_phone() : i.pos_default(!1)
                    }
                }, 100))
            },
            start: function() {
                var e = this,
                    i = t("[" + this.attr_name() + "]", this.scope),
                    n = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"],
                    s = n.length;
                !i.length > 0 || (this.settings.init || this.events(), this.settings = i.data(this.attr_name(!0) + "-init"), this.settings.$content_el = i, this.settings.$body = t(this.settings.tip_container), this.settings.body_offset = t(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, this.settings.riding = !0, "function" != typeof t.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !t.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function(i) {
                    var o = t(this);
                    this.settings = t.extend({}, e.defaults, e.data_options(o));
                    for (var a = s; a--;) e.settings[n[a]] = parseInt(e.settings[n[a]], 10);
                    e.create({
                        $li: o,
                        index: i
                    })
                }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
            },
            resume: function() {
                this.set_li(), this.show()
            },
            tip_template: function(e) {
                var i, n;
                return e.tip_class = e.tip_class || "", i = t(this.settings.template.tip).addClass(e.tip_class), n = t.trim(t(e.li).html()) + this.prev_button_text(e.prev_button_text, e.index) + this.button_text(e.button_text) + this.settings.template.link + this.timer_instance(e.index), i.append(t(this.settings.template.wrapper)), i.first().attr(this.add_namespace("data-index"), e.index), t(".joyride-content-wrapper", i).append(n), i[0]
            },
            timer_instance: function(e) {
                var i;
                return i = 0 === e && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : t(this.settings.template.timer)[0].outerHTML
            },
            button_text: function(e) {
                return this.settings.tip_settings.next_button ? (e = t.trim(e) || "Next", e = t(this.settings.template.button).append(e)[0].outerHTML) : e = "", e
            },
            prev_button_text: function(e, i) {
                return this.settings.tip_settings.prev_button ? (e = t.trim(e) || "Previous", e = 0 == i ? t(this.settings.template.prev_button).append(e).addClass("disabled")[0].outerHTML : t(this.settings.template.prev_button).append(e)[0].outerHTML) : e = "", e
            },
            create: function(e) {
                this.settings.tip_settings = t.extend({}, this.settings, this.data_options(e.$li));
                var i = e.$li.attr(this.add_namespace("data-button")) || e.$li.attr(this.add_namespace("data-text")),
                    n = e.$li.attr(this.add_namespace("data-button-prev")) || e.$li.attr(this.add_namespace("data-prev-text")),
                    s = e.$li.attr("class"),
                    o = t(this.tip_template({
                        tip_class: s,
                        index: e.index,
                        button_text: i,
                        prev_button_text: n,
                        li: e.$li
                    }));
                t(this.settings.tip_container).append(o)
            },
            show: function(e, i) {
                var s = null;
                this.settings.$li === n || -1 === t.inArray(this.settings.$li.index(), this.settings.pause_after) ? (this.settings.paused ? this.settings.paused = !1 : this.set_li(e, i), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0 ? (e && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = t.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], /body/i.test(this.settings.$target.selector) || this.scroll_to(), this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), s = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (s.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function() {
                    s.animate({
                        width: s.parent().width()
                    }, this.settings.timer, "linear")
                }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (s.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), setTimeout(function() {
                    s.animate({
                        width: s.parent().width()
                    }, this.settings.timer, "linear")
                }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip) : this.settings.$li && this.settings.$target.length < 1 ? this.show() : this.end()) : this.settings.paused = !0
            },
            is_phone: function() {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            hide: function() {
                this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || t(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(t.proxy(function() {
                    this.hide(), this.css("visibility", "visible")
                }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
            },
            set_li: function(t, e) {
                t ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = e ? this.settings.$li.prev() : this.settings.$li.next(), this.set_next_tip()), this.set_target()
            },
            set_next_tip: function() {
                this.settings.$next_tip = t(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
            },
            set_target: function() {
                var e = this.settings.$li.attr(this.add_namespace("data-class")),
                    n = this.settings.$li.attr(this.add_namespace("data-id")),
                    s = function() {
                        return n ? t(i.getElementById(n)) : e ? t("." + e).first() : t("body")
                    };
                this.settings.$target = s()
            },
            scroll_to: function() {
                var i, n;
                i = t(e).height() / 2, n = Math.ceil(this.settings.$target.offset().top - i + this.settings.$next_tip.outerHeight()), 0 != n && t("html, body").stop().animate({
                    scrollTop: n
                }, this.settings.scroll_speed, "swing")
            },
            paused: function() {
                return -1 === t.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
            },
            restart: function() {
                this.hide(), this.settings.$li = n, this.show("init")
            },
            pos_default: function(t) {
                var e = this.settings.$next_tip.find(".joyride-nub"),
                    i = Math.ceil(e.outerWidth() / 2),
                    n = Math.ceil(e.outerHeight() / 2),
                    s = t || !1;
                if (s && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector)) this.settings.$li.length && this.pos_modal(e);
                else {
                    var o = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
                        a = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                    this.bottom() ? (this.settings.$next_tip.css(this.rtl ? {
                        top: this.settings.$target.offset().top + n + this.settings.$target.outerHeight() + o,
                        left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + a
                    } : {
                        top: this.settings.$target.offset().top + n + this.settings.$target.outerHeight() + o,
                        left: this.settings.$target.offset().left + a
                    }), this.nub_position(e, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.settings.$next_tip.css(this.rtl ? {
                        top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - n + o,
                        left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                    } : {
                        top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - n + o,
                        left: this.settings.$target.offset().left + a
                    }), this.nub_position(e, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                        top: this.settings.$target.offset().top + o,
                        left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + i + a
                    }), this.nub_position(e, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                        top: this.settings.$target.offset().top + o,
                        left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - i + a
                    }), this.nub_position(e, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())
                }
                s && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
            },
            pos_phone: function(e) {
                var i = this.settings.$next_tip.outerHeight(),
                    n = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()),
                    s = t(".joyride-nub", this.settings.$next_tip),
                    o = Math.ceil(s.outerHeight() / 2),
                    a = e || !1;
                s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), a && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(s) : this.top() ? (this.settings.$next_tip.offset({
                    top: this.settings.$target.offset().top - i - o
                }), s.addClass("bottom")) : (this.settings.$next_tip.offset({
                    top: this.settings.$target.offset().top + n + o
                }), s.addClass("top")), a && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
            },
            pos_modal: function(t) {
                this.center(), t.hide(), this.show_modal()
            },
            show_modal: function() {
                if (!this.settings.$next_tip.data("closed")) {
                    var e = t(".joyride-modal-bg");
                    e.length < 1 && t("body").append(this.settings.template.modal).show(), /pop/i.test(this.settings.tip_animation) ? e.show() : e.fadeIn(this.settings.tip_animation_fade_speed)
                }
            },
            expose: function() {
                var i, n, s, o, a, r = "expose-" + this.random_str(6);
                if (arguments.length > 0 && arguments[0] instanceof t) s = arguments[0];
                else {
                    if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                    s = this.settings.$target
                }
                return s.length < 1 ? (e.console && console.error("element not valid", s), !1) : (i = t(this.settings.template.expose), this.settings.$body.append(i), i.css({
                    top: s.offset().top,
                    left: s.offset().left,
                    width: s.outerWidth(!0),
                    height: s.outerHeight(!0)
                }), n = t(this.settings.template.expose_cover), o = {
                    zIndex: s.css("z-index"),
                    position: s.css("position")
                }, a = null == s.attr("class") ? "" : s.attr("class"), s.css("z-index", parseInt(i.css("z-index")) + 1), "static" == o.position && s.css("position", "relative"), s.data("expose-css", o), s.data("orig-class", a), s.attr("class", a + " " + this.settings.expose_add_class), n.css({
                    top: s.offset().top,
                    left: s.offset().left,
                    width: s.outerWidth(!0),
                    height: s.outerHeight(!0)
                }), this.settings.modal && this.show_modal(), this.settings.$body.append(n), i.addClass(r), n.addClass(r), s.data("expose", r), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, s), void this.add_exposed(s))
            },
            un_expose: function() {
                var i, n, s, o, a, r = !1;
                if (arguments.length > 0 && arguments[0] instanceof t) n = arguments[0];
                else {
                    if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                    n = this.settings.$target
                }
                return n.length < 1 ? (e.console && console.error("element not valid", n), !1) : (i = n.data("expose"), s = t("." + i), arguments.length > 1 && (r = arguments[1]), r === !0 ? t(".joyride-expose-wrapper,.joyride-expose-cover").remove() : s.remove(), o = n.data("expose-css"), "auto" == o.zIndex ? n.css("z-index", "") : n.css("z-index", o.zIndex), o.position != n.css("position") && ("static" == o.position ? n.css("position", "") : n.css("position", o.position)), a = n.data("orig-class"), n.attr("class", a), n.removeData("orig-classes"), n.removeData("expose"), n.removeData("expose-z-index"), void this.remove_exposed(n))
            },
            add_exposed: function(e) {
                this.settings.exposed = this.settings.exposed || [], e instanceof t || "object" == typeof e ? this.settings.exposed.push(e[0]) : "string" == typeof e && this.settings.exposed.push(e)
            },
            remove_exposed: function(e) {
                var i, n;
                for (e instanceof t ? i = e[0] : "string" == typeof e && (i = e), this.settings.exposed = this.settings.exposed || [], n = this.settings.exposed.length; n--;)
                    if (this.settings.exposed[n] == i) return void this.settings.exposed.splice(n, 1)
            },
            center: function() {
                var i = t(e);
                return this.settings.$next_tip.css({
                    top: (i.height() - this.settings.$next_tip.outerHeight()) / 2 + i.scrollTop(),
                    left: (i.width() - this.settings.$next_tip.outerWidth()) / 2 + i.scrollLeft()
                }), !0
            },
            bottom: function() {
                return /bottom/i.test(this.settings.tip_settings.tip_location)
            },
            top: function() {
                return /top/i.test(this.settings.tip_settings.tip_location)
            },
            right: function() {
                return /right/i.test(this.settings.tip_settings.tip_location)
            },
            left: function() {
                return /left/i.test(this.settings.tip_settings.tip_location)
            },
            corners: function(i) {
                var n = t(e),
                    s = n.height() / 2,
                    o = Math.ceil(this.settings.$target.offset().top - s + this.settings.$next_tip.outerHeight()),
                    a = n.width() + n.scrollLeft(),
                    r = n.height() + o,
                    l = n.height() + n.scrollTop(),
                    h = n.scrollTop();
                return h > o && (h = 0 > o ? 0 : o), r > l && (l = r), [i.offset().top < h, a < i.offset().left + i.outerWidth(), l < i.offset().top + i.outerHeight(), n.scrollLeft() > i.offset().left]
            },
            visible: function(t) {
                for (var e = t.length; e--;)
                    if (t[e]) return !1;
                return !0
            },
            nub_position: function(t, e, i) {
                t.addClass("auto" === e ? i : e)
            },
            startTimer: function() {
                this.settings.$li.length ? this.settings.automate = setTimeout(function() {
                    this.hide(), this.show(), this.startTimer()
                }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
            },
            end: function(e) {
                this.settings.cookie_monster && t.cookie(this.settings.cookie_name, "ridden", {
                    expires: this.settings.cookie_expires,
                    domain: this.settings.cookie_domain
                }), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), t(this.scope).off("keyup.joyride"), this.settings.$next_tip.data("closed", !0), this.settings.riding = !1, t(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), ("undefined" == typeof e || e === !1) && (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)), t(".joyride-tip-guide").remove()
            },
            off: function() {
                t(this.scope).off(".joyride"), t(e).off(".joyride"), t(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), t(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(t, e) {
        "use strict";
        Foundation.libs["magellan-expedition"] = {
            name: "magellan-expedition",
            version: "5.4.2",
            settings: {
                active_class: "active",
                threshold: 0,
                destination_threshold: 20,
                throttle_delay: 30,
                fixed_top: 0
            },
            init: function(t, e, i) {
                Foundation.inherit(this, "throttle"), this.bindings(e, i)
            },
            events: function() {
                var i = this,
                    n = i.S,
                    s = i.settings;
                i.set_expedition_position(), n(i.scope).off(".magellan").on("click.fndtn.magellan", "[" + i.add_namespace("data-magellan-arrival") + '] a[href^="#"]', function(e) {
                    e.preventDefault();
                    var n = t(this).closest("[" + i.attr_name() + "]"),
                        s = n.data("magellan-expedition-init"),
                        o = this.hash.split("#").join(""),
                        a = t("a[name='" + o + "']");
                    0 === a.length && (a = t("#" + o));
                    var r = a.offset().top - s.destination_threshold + 1;
                    r -= n.outerHeight(), t("html, body").stop().animate({
                        scrollTop: r
                    }, 700, "swing", function() {
                        history.pushState ? history.pushState(null, null, "#" + o) : location.hash = "#" + o
                    })
                }).on("scroll.fndtn.magellan", i.throttle(this.check_for_arrivals.bind(this), s.throttle_delay)), t(e).on("resize.fndtn.magellan", i.throttle(this.set_expedition_position.bind(this), s.throttle_delay))
            },
            check_for_arrivals: function() {
                var t = this;
                t.update_arrivals(), t.update_expedition_positions()
            },
            set_expedition_position: function() {
                var e = this;
                t("[" + this.attr_name() + "=fixed]", e.scope).each(function() {
                    var i, n, s = t(this),
                        o = s.data("magellan-expedition-init"),
                        a = s.attr("styles");
                    s.attr("style", ""), i = s.offset().top + o.threshold, n = parseInt(s.data("magellan-fixed-top")), isNaN(n) || (e.settings.fixed_top = n), s.data(e.data_attr("magellan-top-offset"), i), s.attr("style", a)
                })
            },
            update_expedition_positions: function() {
                var i = this,
                    n = t(e).scrollTop();
                t("[" + this.attr_name() + "=fixed]", i.scope).each(function() {
                    var e = t(this),
                        s = e.data("magellan-expedition-init"),
                        o = e.attr("style"),
                        a = e.data("magellan-top-offset");
                    if (n + i.settings.fixed_top >= a) {
                        var r = e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]");
                        0 === r.length && (r = e.clone(), r.removeAttr(i.attr_name()), r.attr(i.add_namespace("data-magellan-expedition-clone"), ""), e.before(r)), e.css({
                            position: "fixed",
                            top: s.fixed_top
                        }).addClass("fixed")
                    } else e.prev("[" + i.add_namespace("data-magellan-expedition-clone") + "]").remove(), e.attr("style", o).css("position", "").css("top", "").removeClass("fixed")
                })
            },
            update_arrivals: function() {
                var i = this,
                    n = t(e).scrollTop();
                t("[" + this.attr_name() + "]", i.scope).each(function() {
                    var e = t(this),
                        s = e.data(i.attr_name(!0) + "-init"),
                        o = i.offsets(e, n),
                        a = e.find("[" + i.add_namespace("data-magellan-arrival") + "]"),
                        r = !1;
                    o.each(function(t, n) {
                        if (n.viewport_offset >= n.top_offset) {
                            var o = e.find("[" + i.add_namespace("data-magellan-arrival") + "]");
                            return o.not(n.arrival).removeClass(s.active_class), n.arrival.addClass(s.active_class), r = !0, !0
                        }
                    }), r || a.removeClass(s.active_class)
                })
            },
            offsets: function(e, i) {
                var n = this,
                    s = e.data(n.attr_name(!0) + "-init"),
                    o = i;
                return e.find("[" + n.add_namespace("data-magellan-arrival") + "]").map(function() {
                    var i = t(this).data(n.data_attr("magellan-arrival")),
                        a = t("[" + n.add_namespace("data-magellan-destination") + "=" + i + "]");
                    if (a.length > 0) {
                        var r = Math.floor(a.offset().top - s.destination_threshold - e.outerHeight());
                        return {
                            destination: a,
                            arrival: t(this),
                            top_offset: r,
                            viewport_offset: o
                        }
                    }
                }).sort(function(t, e) {
                    return t.top_offset < e.top_offset ? -1 : t.top_offset > e.top_offset ? 1 : 0
                })
            },
            data_attr: function(t) {
                return this.namespace.length > 0 ? this.namespace + "-" + t : t
            },
            off: function() {
                this.S(this.scope).off(".magellan"), this.S(e).off(".magellan")
            },
            reflow: function() {
                var e = this;
                t("[" + e.add_namespace("data-magellan-expedition-clone") + "]", e.scope).remove()
            }
        }
    }(jQuery, window, window.document),
    function(t) {
        "use strict";
        Foundation.libs.offcanvas = {
            name: "offcanvas",
            version: "5.4.2",
            settings: {
                open_method: "move",
                close_on_click: !1
            },
            init: function(t, e, i) {
                this.bindings(e, i)
            },
            events: function() {
                var e = this,
                    i = e.S,
                    n = "",
                    s = "",
                    o = "";
                "move" === this.settings.open_method ? (n = "move-", s = "right", o = "left") : "overlap_single" === this.settings.open_method ? (n = "offcanvas-overlap-", s = "right", o = "left") : "overlap" === this.settings.open_method && (n = "offcanvas-overlap"), i(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function(o) {
                    e.click_toggle_class(o, n + s), "overlap" !== e.settings.open_method && i(".left-submenu").removeClass(n + s), t(".left-off-canvas-toggle").attr("aria-expanded", "true")
                }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function(o) {
                    var a = e.get_settings(o),
                        r = i(this).parent();
                    !a.close_on_click || r.hasClass("has-submenu") || r.hasClass("back") ? i(this).parent().hasClass("has-submenu") ? (o.preventDefault(), i(this).siblings(".left-submenu").toggleClass(n + s)) : r.hasClass("back") && (o.preventDefault(), r.parent().removeClass(n + s)) : (e.hide.call(e, n + s, e.get_wrapper(o)), r.parent().removeClass(n + s)), t(".left-off-canvas-toggle").attr("aria-expanded", "true")
                }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(s) {
                    e.click_toggle_class(s, n + o), "overlap" !== e.settings.open_method && i(".right-submenu").removeClass(n + o), t(".right-off-canvas-toggle").attr("aria-expanded", "true")
                }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function(s) {
                    var a = e.get_settings(s),
                        r = i(this).parent();
                    !a.close_on_click || r.hasClass("has-submenu") || r.hasClass("back") ? i(this).parent().hasClass("has-submenu") ? (s.preventDefault(), i(this).siblings(".right-submenu").toggleClass(n + o)) : r.hasClass("back") && (s.preventDefault(), r.parent().removeClass(n + o)) : (e.hide.call(e, n + o, e.get_wrapper(s)), r.parent().removeClass(n + o)), t(".right-off-canvas-toggle").attr("aria-expanded", "true")
                }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(a) {
                    e.click_remove_class(a, n + o), i(".right-submenu").removeClass(n + o), s && (e.click_remove_class(a, n + s), i(".left-submenu").removeClass(n + o)), t(".right-off-canvas-toggle").attr("aria-expanded", "true")
                }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(i) {
                    e.click_remove_class(i, n + o), t(".left-off-canvas-toggle").attr("aria-expanded", "false"), s && (e.click_remove_class(i, n + s), t(".right-off-canvas-toggle").attr("aria-expanded", "false"))
                })
            },
            toggle: function(t, e) {
                e = e || this.get_wrapper(), e.is("." + t) ? this.hide(t, e) : this.show(t, e)
            },
            show: function(t, e) {
                e = e || this.get_wrapper(), e.trigger("open").trigger("open.fndtn.offcanvas"), e.addClass(t)
            },
            hide: function(t, e) {
                e = e || this.get_wrapper(), e.trigger("close").trigger("close.fndtn.offcanvas"), e.removeClass(t)
            },
            click_toggle_class: function(t, e) {
                t.preventDefault();
                var i = this.get_wrapper(t);
                this.toggle(e, i)
            },
            click_remove_class: function(t, e) {
                t.preventDefault();
                var i = this.get_wrapper(t);
                this.hide(e, i)
            },
            get_settings: function(t) {
                var e = this.S(t.target).closest("[" + this.attr_name() + "]");
                return e.data(this.attr_name(!0) + "-init") || this.settings
            },
            get_wrapper: function(t) {
                var e = this.S(t ? t.target : this.scope).closest(".off-canvas-wrap");
                return 0 === e.length && (e = this.S(".off-canvas-wrap")), e
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(t, e, i, n) {
        "use strict";
        var s = function() {},
            o = function(s, o) {
                if (s.hasClass(o.slides_container_class)) return this;
                var h, c, u, d, p, f, m = this,
                    g = s,
                    v = 0,
                    _ = !1;
                m.slides = function() {
                    return g.children(o.slide_selector)
                }, m.slides().first().addClass(o.active_slide_class), m.update_slide_number = function(e) {
                    o.slide_number && (c.find("span:first").text(parseInt(e) + 1), c.find("span:last").text(m.slides().length)), o.bullets && (u.children().removeClass(o.bullets_active_class), t(u.children().get(e)).addClass(o.bullets_active_class))
                }, m.update_active_link = function(e) {
                    var i = t('[data-orbit-link="' + m.slides().eq(e).attr("data-orbit-slide") + '"]');
                    i.siblings().removeClass(o.bullets_active_class), i.addClass(o.bullets_active_class)
                }, m.build_markup = function() {
                    g.wrap('<div class="' + o.container_class + '"></div>'), h = g.parent(), g.addClass(o.slides_container_class), o.stack_on_small && h.addClass(o.stack_on_small_class), o.navigation_arrows && (h.append(t('<a href="#"><span></span></a>').addClass(o.prev_class)), h.append(t('<a href="#"><span></span></a>').addClass(o.next_class))), o.timer && (d = t("<div>").addClass(o.timer_container_class), d.append("<span>"), d.append(t("<div>").addClass(o.timer_progress_class)), d.addClass(o.timer_paused_class), h.append(d)), o.slide_number && (c = t("<div>").addClass(o.slide_number_class), c.append("<span></span> " + o.slide_number_text + " <span></span>"), h.append(c)), o.bullets && (u = t("<ol>").addClass(o.bullets_container_class), h.append(u), u.wrap('<div class="orbit-bullets-container"></div>'), m.slides().each(function(e) {
                        var i = t("<li>").attr("data-orbit-slide", e).on("click", m.link_bullet);
                        u.append(i)
                    }))
                }, m._goto = function(e, i) {
                    if (e === v) return !1;
                    "object" == typeof f && f.restart();
                    var n = m.slides(),
                        s = "next";
                    if (_ = !0, v > e && (s = "prev"), e >= n.length) {
                        if (!o.circular) return !1;
                        e = 0
                    } else if (0 > e) {
                        if (!o.circular) return !1;
                        e = n.length - 1
                    }
                    var a = t(n.get(v)),
                        r = t(n.get(e));
                    a.css("zIndex", 2), a.removeClass(o.active_slide_class), r.css("zIndex", 4).addClass(o.active_slide_class), g.trigger("before-slide-change.fndtn.orbit"), o.before_slide_change(), m.update_active_link(e);
                    var l = function() {
                        var t = function() {
                            v = e, _ = !1, i === !0 && (f = m.create_timer(), f.start()), m.update_slide_number(v), g.trigger("after-slide-change.fndtn.orbit", [{
                                slide_number: v,
                                total_slides: n.length
                            }]), o.after_slide_change(v, n.length)
                        };
                        g.height() != r.height() && o.variable_height ? g.animate({
                            height: r.height()
                        }, 250, "linear", t) : t()
                    };
                    if (1 === n.length) return l(), !1;
                    var h = function() {
                        "next" === s && p.next(a, r, l), "prev" === s && p.prev(a, r, l)
                    };
                    r.height() > g.height() && o.variable_height ? g.animate({
                        height: r.height()
                    }, 250, "linear", h) : h()
                }, m.next = function(t) {
                    t.stopImmediatePropagation(), t.preventDefault(), m._goto(v + 1)
                }, m.prev = function(t) {
                    t.stopImmediatePropagation(), t.preventDefault(), m._goto(v - 1)
                }, m.link_custom = function(e) {
                    e.preventDefault();
                    var i = t(this).attr("data-orbit-link");
                    if ("string" == typeof i && "" != (i = t.trim(i))) {
                        var n = h.find("[data-orbit-slide=" + i + "]"); - 1 != n.index() && m._goto(n.index())
                    }
                }, m.link_bullet = function() {
                    var e = t(this).attr("data-orbit-slide");
                    if ("string" == typeof e && "" != (e = t.trim(e)))
                        if (isNaN(parseInt(e))) {
                            var i = h.find("[data-orbit-slide=" + e + "]"); - 1 != i.index() && m._goto(i.index() + 1)
                        } else m._goto(parseInt(e))
                }, m.timer_callback = function() {
                    m._goto(v + 1, !0)
                }, m.compute_dimensions = function() {
                    var e = t(m.slides().get(v)),
                        i = e.height();
                    o.variable_height || m.slides().each(function() {
                        t(this).height() > i && (i = t(this).height())
                    }), g.height(i)
                }, m.create_timer = function() {
                    var t = new a(h.find("." + o.timer_container_class), o, m.timer_callback);
                    return t
                }, m.stop_timer = function() {
                    "object" == typeof f && f.stop()
                }, m.toggle_timer = function() {
                    var t = h.find("." + o.timer_container_class);
                    t.hasClass(o.timer_paused_class) ? ("undefined" == typeof f && (f = m.create_timer()), f.start()) : "object" == typeof f && f.stop()
                }, m.init = function() {
                    m.build_markup(), o.timer && (f = m.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), f.start)), p = new l(o, g), "slide" === o.animation && (p = new r(o, g)), h.on("click", "." + o.next_class, m.next), h.on("click", "." + o.prev_class, m.prev), o.next_on_click && h.on("click", "." + o.slides_container_class + " [data-orbit-slide]", m.link_bullet), h.on("click", m.toggle_timer), o.swipe && h.on("touchstart.fndtn.orbit", function(t) {
                        t.touches || (t = t.originalEvent);
                        var e = {
                            start_page_x: t.touches[0].pageX,
                            start_page_y: t.touches[0].pageY,
                            start_time: (new Date).getTime(),
                            delta_x: 0,
                            is_scrolling: n
                        };
                        h.data("swipe-transition", e), t.stopPropagation()
                    }).on("touchmove.fndtn.orbit", function(t) {
                        if (t.touches || (t = t.originalEvent), !(t.touches.length > 1 || t.scale && 1 !== t.scale)) {
                            var e = h.data("swipe-transition");
                            if ("undefined" == typeof e && (e = {}), e.delta_x = t.touches[0].pageX - e.start_page_x, "undefined" == typeof e.is_scrolling && (e.is_scrolling = !!(e.is_scrolling || Math.abs(e.delta_x) < Math.abs(t.touches[0].pageY - e.start_page_y))), !e.is_scrolling && !e.active) {
                                t.preventDefault();
                                var i = e.delta_x < 0 ? v + 1 : v - 1;
                                e.active = !0, m._goto(i)
                            }
                        }
                    }).on("touchend.fndtn.orbit", function(t) {
                        h.data("swipe-transition", {}), t.stopPropagation()
                    }), h.on("mouseenter.fndtn.orbit", function() {
                        o.timer && o.pause_on_hover && m.stop_timer()
                    }).on("mouseleave.fndtn.orbit", function() {
                        o.timer && o.resume_on_mouseout && f.start()
                    }), t(i).on("click", "[data-orbit-link]", m.link_custom), t(e).on("load resize", m.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), m.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function() {
                        h.prev("." + o.preloader_class).css("display", "none"), m.update_slide_number(0), m.update_active_link(0), g.trigger("ready.fndtn.orbit")
                    })
                }, m.init()
            },
            a = function(t, e, i) {
                var n, s, o = this,
                    a = e.timer_speed,
                    r = t.find("." + e.timer_progress_class),
                    l = -1;
                this.update_progress = function(t) {
                    var e = r.clone();
                    e.attr("style", ""), e.css("width", t + "%"), r.replaceWith(e), r = e
                }, this.restart = function() {
                    clearTimeout(s), t.addClass(e.timer_paused_class), l = -1, o.update_progress(0)
                }, this.start = function() {
                    return t.hasClass(e.timer_paused_class) ? (l = -1 === l ? a : l, t.removeClass(e.timer_paused_class), n = (new Date).getTime(), r.animate({
                        width: "100%"
                    }, l, "linear"), s = setTimeout(function() {
                        o.restart(), i()
                    }, l), void t.trigger("timer-started.fndtn.orbit")) : !0
                }, this.stop = function() {
                    if (t.hasClass(e.timer_paused_class)) return !0;
                    clearTimeout(s), t.addClass(e.timer_paused_class);
                    var i = (new Date).getTime();
                    l -= i - n;
                    var r = 100 - l / a * 100;
                    o.update_progress(r), t.trigger("timer-stopped.fndtn.orbit")
                }
            },
            r = function(e) {
                var i = e.animation_speed,
                    n = 1 === t("html[dir=rtl]").length,
                    s = n ? "marginRight" : "marginLeft",
                    o = {};
                o[s] = "0%", this.next = function(t, e, n) {
                    t.animate({
                        marginLeft: "-100%"
                    }, i), e.animate(o, i, function() {
                        t.css(s, "100%"), n()
                    })
                }, this.prev = function(t, e, n) {
                    t.animate({
                        marginLeft: "100%"
                    }, i), e.css(s, "-100%"), e.animate(o, i, function() {
                        t.css(s, "100%"), n()
                    })
                }
            },
            l = function(e) {
                {
                    var i = e.animation_speed;
                    1 === t("html[dir=rtl]").length
                }
                this.next = function(t, e, n) {
                    e.css({
                        margin: "0%",
                        opacity: "0.01"
                    }), e.animate({
                        opacity: "1"
                    }, i, "linear", function() {
                        t.css("margin", "100%"), n()
                    })
                }, this.prev = function(t, e, n) {
                    e.css({
                        margin: "0%",
                        opacity: "0.01"
                    }), e.animate({
                        opacity: "1"
                    }, i, "linear", function() {
                        t.css("margin", "100%"), n()
                    })
                }
            };
        Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
            name: "orbit",
            version: "5.4.2",
            settings: {
                animation: "slide",
                timer_speed: 1e4,
                pause_on_hover: !0,
                resume_on_mouseout: !1,
                next_on_click: !0,
                animation_speed: 500,
                stack_on_small: !1,
                navigation_arrows: !0,
                slide_number: !0,
                slide_number_text: "of",
                container_class: "orbit-container",
                stack_on_small_class: "orbit-stack-on-small",
                next_class: "orbit-next",
                prev_class: "orbit-prev",
                timer_container_class: "orbit-timer",
                timer_paused_class: "paused",
                timer_progress_class: "orbit-progress",
                slides_container_class: "orbit-slides-container",
                preloader_class: "preloader",
                slide_selector: "*",
                bullets_container_class: "orbit-bullets",
                bullets_active_class: "active",
                slide_number_class: "orbit-slide-number",
                caption_class: "orbit-caption",
                active_slide_class: "active",
                orbit_transition_class: "orbit-transitioning",
                bullets: !0,
                circular: !0,
                timer: !0,
                variable_height: !1,
                swipe: !0,
                before_slide_change: s,
                after_slide_change: s
            },
            init: function(t, e, i) {
                this.bindings(e, i)
            },
            events: function(t) {
                var e = new o(this.S(t), this.S(t).data("orbit-init"));
                this.S(t).data(this.name + "-instance", e)
            },
            reflow: function() {
                var t = this;
                if (t.S(t.scope).is("[data-orbit]")) {
                    var e = t.S(t.scope),
                        i = e.data(t.name + "-instance");
                    i.compute_dimensions()
                } else t.S("[data-orbit]", t.scope).each(function(e, i) {
                    var n = t.S(i),
                        s = (t.data_options(n), n.data(t.name + "-instance"));
                    s.compute_dimensions()
                })
            }
        }
    }(jQuery, window, window.document),
    function(t, e, i, n) {
        "use strict";

        function s(t) {
            var e = /fade/i.test(t),
                i = /pop/i.test(t);
            return {
                animate: e || i,
                pop: i,
                fade: e
            }
        }
        Foundation.libs.reveal = {
            name: "reveal",
            version: "5.4.2",
            locked: !1,
            settings: {
                animation: "fadeAndPop",
                animation_speed: 250,
                close_on_background_click: !0,
                close_on_esc: !0,
                dismiss_modal_class: "close-reveal-modal",
                bg_class: "reveal-modal-bg",
                root_element: "body",
                open: function() {},
                opened: function() {},
                close: function() {},
                closed: function() {},
                bg: t(".reveal-modal-bg"),
                css: {
                    open: {
                        opacity: 0,
                        visibility: "visible",
                        display: "block"
                    },
                    close: {
                        opacity: 1,
                        visibility: "hidden",
                        display: "none"
                    }
                }
            },
            init: function(e, i, n) {
                t.extend(!0, this.settings, i, n), this.bindings(i, n)
            },
            events: function() {
                var t = this,
                    e = t.S;
                return e(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(i) {
                    if (i.preventDefault(), !t.locked) {
                        var n = e(this),
                            s = n.data(t.data_attr("reveal-ajax"));
                        if (t.locked = !0, "undefined" == typeof s) t.open.call(t, n);
                        else {
                            var o = s === !0 ? n.attr("href") : s;
                            t.open.call(t, n, {
                                url: o
                            })
                        }
                    }
                }), e(i).on("click.fndtn.reveal", this.close_targets(), function(i) {
                    if (i.preventDefault(), !t.locked) {
                        var n = e("[" + t.attr_name() + "].open").data(t.attr_name(!0) + "-init"),
                            s = e(i.target)[0] === e("." + n.bg_class)[0];
                        if (s) {
                            if (!n.close_on_background_click) return;
                            i.stopPropagation()
                        }
                        t.locked = !0, t.close.call(t, s ? e("[" + t.attr_name() + "].open") : e(this).closest("[" + t.attr_name() + "]"))
                    }
                }), e("[" + t.attr_name() + "]", this.scope).length > 0 ? e(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : e(this.scope).on("open.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + t.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + t.attr_name() + "]", this.close_video), !0
            },
            key_up_on: function() {
                var t = this;
                return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(e) {
                    var i = t.S("[" + t.attr_name() + "].open"),
                        n = i.data(t.attr_name(!0) + "-init") || t.settings;
                    n && 27 === e.which && n.close_on_esc && !t.locked && t.close.call(t, i)
                }), !0
            },
            key_up_off: function() {
                return this.S("body").off("keyup.fndtn.reveal"), !0
            },
            open: function(e, i) {
                var n, s = this;
                e ? "undefined" != typeof e.selector ? n = s.S("#" + e.data(s.data_attr("reveal-id"))).first() : (n = s.S(this.scope), i = e) : n = s.S(this.scope);
                var o = n.data(s.attr_name(!0) + "-init");
                if (o = o || this.settings, n.hasClass("open") && e.attr("data-reveal-id") == n.attr("id")) return s.close(n);
                if (!n.hasClass("open")) {
                    var a = s.S("[" + s.attr_name() + "].open");
                    if ("undefined" == typeof n.data("css-top") && n.data("css-top", parseInt(n.css("top"), 10)).data("offset", this.cache_offset(n)), this.key_up_on(n), n.trigger("open").trigger("open.fndtn.reveal"), a.length < 1 && this.toggle_bg(n, !0), "string" == typeof i && (i = {
                            url: i
                        }), "undefined" != typeof i && i.url) {
                        var r = "undefined" != typeof i.success ? i.success : null;
                        t.extend(i, {
                            success: function(e, i, l) {
                                t.isFunction(r) && r(e, i, l), n.html(e), s.S(n).foundation("section", "reflow"), s.S(n).children().foundation(), a.length > 0 && s.hide(a, o.css.close), s.show(n, o.css.open)
                            }
                        }), t.ajax(i)
                    } else a.length > 0 && this.hide(a, o.css.close), this.show(n, o.css.open)
                }
            },
            close: function(t) {
                var t = t && t.length ? t : this.S(this.scope),
                    e = this.S("[" + this.attr_name() + "].open"),
                    i = t.data(this.attr_name(!0) + "-init") || this.settings;
                e.length > 0 && (this.locked = !0, this.key_up_off(t), t.trigger("close").trigger("close.fndtn.reveal"), this.toggle_bg(t, !1), this.hide(e, i.css.close, i))
            },
            close_targets: function() {
                var t = "." + this.settings.dismiss_modal_class;
                return this.settings.close_on_background_click ? t + ", ." + this.settings.bg_class : t
            },
            toggle_bg: function(e, i) {
                0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = t("<div />", {
                    "class": this.settings.bg_class
                }).appendTo("body").hide());
                var s = this.settings.bg.filter(":visible").length > 0;
                i != s && ((i == n ? s : !i) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
            },
            show: function(i, n) {
                if (n) {
                    var o = i.data(this.attr_name(!0) + "-init") || this.settings,
                        a = o.root_element;
                    if (0 === i.parent(a).length) {
                        var r = i.wrap('<div style="display: none;" />').parent();
                        i.on("closed.fndtn.reveal.wrapped", function() {
                            i.detach().appendTo(r), i.unwrap().unbind("closed.fndtn.reveal.wrapped")
                        }), i.detach().appendTo(a)
                    }
                    var l = s(o.animation);
                    if (l.animate || (this.locked = !1), l.pop) {
                        n.top = t(e).scrollTop() - i.data("offset") + "px";
                        var h = {
                            top: t(e).scrollTop() + i.data("css-top") + "px",
                            opacity: 1
                        };
                        return setTimeout(function() {
                            return i.css(n).animate(h, o.animation_speed, "linear", function() {
                                this.locked = !1, i.trigger("opened").trigger("opened.fndtn.reveal")
                            }.bind(this)).addClass("open")
                        }.bind(this), o.animation_speed / 2)
                    }
                    if (l.fade) {
                        n.top = t(e).scrollTop() + i.data("css-top") + "px";
                        var h = {
                            opacity: 1
                        };
                        return setTimeout(function() {
                            return i.css(n).animate(h, o.animation_speed, "linear", function() {
                                this.locked = !1, i.trigger("opened").trigger("opened.fndtn.reveal")
                            }.bind(this)).addClass("open")
                        }.bind(this), o.animation_speed / 2)
                    }
                    return i.css(n).show().css({
                        opacity: 1
                    }).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")
                }
                var o = this.settings;
                return s(o.animation).fade ? i.fadeIn(o.animation_speed / 2) : (this.locked = !1, i.show())
            },
            hide: function(i, n) {
                if (n) {
                    var o = i.data(this.attr_name(!0) + "-init");
                    o = o || this.settings;
                    var a = s(o.animation);
                    if (a.animate || (this.locked = !1), a.pop) {
                        var r = {
                            top: -t(e).scrollTop() - i.data("offset") + "px",
                            opacity: 0
                        };
                        return setTimeout(function() {
                            return i.animate(r, o.animation_speed, "linear", function() {
                                this.locked = !1, i.css(n).trigger("closed").trigger("closed.fndtn.reveal")
                            }.bind(this)).removeClass("open")
                        }.bind(this), o.animation_speed / 2)
                    }
                    if (a.fade) {
                        var r = {
                            opacity: 0
                        };
                        return setTimeout(function() {
                            return i.animate(r, o.animation_speed, "linear", function() {
                                this.locked = !1, i.css(n).trigger("closed").trigger("closed.fndtn.reveal")
                            }.bind(this)).removeClass("open")
                        }.bind(this), o.animation_speed / 2)
                    }
                    return i.hide().css(n).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")
                }
                var o = this.settings;
                return s(o.animation).fade ? i.fadeOut(o.animation_speed / 2) : i.hide()
            },
            close_video: function(e) {
                var i = t(".flex-video", e.target),
                    n = t("iframe", i);
                n.length > 0 && (n.attr("data-src", n[0].src), n.attr("src", n.attr("src")), i.hide())
            },
            open_video: function(e) {
                var i = t(".flex-video", e.target),
                    s = i.find("iframe");
                if (s.length > 0) {
                    var o = s.attr("data-src");
                    if ("string" == typeof o) s[0].src = s.attr("data-src");
                    else {
                        var a = s[0].src;
                        s[0].src = n, s[0].src = a
                    }
                    i.show()
                }
            },
            data_attr: function(t) {
                return this.namespace.length > 0 ? this.namespace + "-" + t : t
            },
            cache_offset: function(t) {
                var e = t.show().height() + parseInt(t.css("top"), 10);
                return t.hide(), e
            },
            off: function() {
                t(this.scope).off(".fndtn.reveal")
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(t, e) {
        "use strict";
        Foundation.libs.slider = {
            name: "slider",
            version: "5.4.2",
            settings: {
                start: 0,
                end: 100,
                step: 1,
                initial: null,
                display_selector: "",
                vertical: !1,
                on_change: function() {}
            },
            cache: {},
            init: function(t, e, i) {
                Foundation.inherit(this, "throttle"), this.bindings(e, i), this.reflow()
            },
            events: function() {
                var i = this;
                t(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + i.attr_name() + "]:not(.disabled, [disabled]) .range-slider-handle", function(e) {
                    i.cache.active || (e.preventDefault(), i.set_active_slider(t(e.target)))
                }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function(n) {
                    if (i.cache.active)
                        if (n.preventDefault(), t.data(i.cache.active[0], "settings").vertical) {
                            var s = 0;
                            n.pageY || (s = e.scrollY), i.calculate_position(i.cache.active, (n.pageY || n.originalEvent.clientY || n.originalEvent.touches[0].clientY || n.currentPoint.y) + s)
                        } else i.calculate_position(i.cache.active, n.pageX || n.originalEvent.clientX || n.originalEvent.touches[0].clientX || n.currentPoint.x)
                }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function() {
                    i.remove_active_slider()
                }).on("change.fndtn.slider", function() {
                    i.settings.on_change()
                }), i.S(e).on("resize.fndtn.slider", i.throttle(function() {
                    i.reflow()
                }, 300))
            },
            set_active_slider: function(t) {
                this.cache.active = t
            },
            remove_active_slider: function() {
                this.cache.active = null
            },
            calculate_position: function(e, i) {
                var n = this,
                    s = t.data(e[0], "settings"),
                    o = (t.data(e[0], "handle_l"), t.data(e[0], "handle_o"), t.data(e[0], "bar_l")),
                    a = t.data(e[0], "bar_o");
                requestAnimationFrame(function() {
                    var t;
                    t = Foundation.rtl && !s.vertical ? n.limit_to((a + o - i) / o, 0, 1) : n.limit_to((i - a) / o, 0, 1), t = s.vertical ? 1 - t : t;
                    var r = n.normalized_value(t, s.start, s.end, s.step);
                    n.set_ui(e, r)
                })
            },
            set_ui: function(e, i) {
                var n = t.data(e[0], "settings"),
                    s = t.data(e[0], "handle_l"),
                    o = t.data(e[0], "bar_l"),
                    a = this.normalized_percentage(i, n.start, n.end),
                    r = a * (o - s) - 1,
                    l = 100 * a;
                Foundation.rtl && !n.vertical && (r = -r), r = n.vertical ? -r + o - s + 1 : r, this.set_translate(e, r, n.vertical), n.vertical ? e.siblings(".range-slider-active-segment").css("height", l + "%") : e.siblings(".range-slider-active-segment").css("width", l + "%"), e.parent().attr(this.attr_name(), i).trigger("change").trigger("change.fndtn.slider"), e.parent().children("input[type=hidden]").val(i), e[0].hasAttribute("aria-valuemin") || e.attr({
                    "aria-valuemin": n.start,
                    "aria-valuemax": n.end
                }), e.attr("aria-valuenow", i), "" != n.input_id && t(n.display_selector).each(function() {
                    this.hasOwnProperty("value") ? t(this).val(i) : t(this).text(i)
                })
            },
            normalized_percentage: function(t, e, i) {
                return Math.min(1, (t - e) / (i - e))
            },
            normalized_value: function(t, e, i, n) {
                var s = i - e,
                    o = t * s,
                    a = (o - o % n) / n,
                    r = o % n,
                    l = r >= .5 * n ? n : 0;
                return a * n + l + e
            },
            set_translate: function(e, i, n) {
                n ? t(e).css("-webkit-transform", "translateY(" + i + "px)").css("-moz-transform", "translateY(" + i + "px)").css("-ms-transform", "translateY(" + i + "px)").css("-o-transform", "translateY(" + i + "px)").css("transform", "translateY(" + i + "px)") : t(e).css("-webkit-transform", "translateX(" + i + "px)").css("-moz-transform", "translateX(" + i + "px)").css("-ms-transform", "translateX(" + i + "px)").css("-o-transform", "translateX(" + i + "px)").css("transform", "translateX(" + i + "px)")
            },
            limit_to: function(t, e, i) {
                return Math.min(Math.max(t, e), i)
            },
            initialize_settings: function(e) {
                var i = t.extend({}, this.settings, this.data_options(t(e).parent()));
                i.vertical ? (t.data(e, "bar_o", t(e).parent().offset().top), t.data(e, "bar_l", t(e).parent().outerHeight()), t.data(e, "handle_o", t(e).offset().top), t.data(e, "handle_l", t(e).outerHeight())) : (t.data(e, "bar_o", t(e).parent().offset().left), t.data(e, "bar_l", t(e).parent().outerWidth()), t.data(e, "handle_o", t(e).offset().left), t.data(e, "handle_l", t(e).outerWidth())), t.data(e, "bar", t(e).parent()), t.data(e, "settings", i)
            },
            set_initial_position: function(e) {
                var i = t.data(e.children(".range-slider-handle")[0], "settings"),
                    n = i.initial ? i.initial : Math.floor(.5 * (i.end - i.start) / i.step) * i.step + i.start,
                    s = e.children(".range-slider-handle");
                this.set_ui(s, n)
            },
            set_value: function(e) {
                var i = this;
                t("[" + i.attr_name() + "]", this.scope).each(function() {
                    t(this).attr(i.attr_name(), e)
                }), t(this.scope).attr(i.attr_name()) && t(this.scope).attr(i.attr_name(), e), i.reflow()
            },
            reflow: function() {
                var e = this;
                e.S("[" + this.attr_name() + "]").each(function() {
                    var i = t(this).children(".range-slider-handle")[0],
                        n = t(this).attr(e.attr_name());
                    e.initialize_settings(i), n ? e.set_ui(t(i), parseFloat(n)) : e.set_initial_position(t(this))
                })
            }
        }
    }(jQuery, window, window.document),
    function(t, e, i, n) {
        "use strict";
        Foundation.libs.tab = {
            name: "tab",
            version: "5.4.2",
            settings: {
                active_class: "active",
                callback: function() {},
                deep_linking: !1,
                scroll_to_content: !0,
                is_hover: !1
            },
            default_tab_hashes: [],
            init: function(t, e, i) {
                var n = this,
                    s = this.S;
                this.bindings(e, i), this.handle_location_hash_change(), s("[" + this.attr_name() + "] > .active > a", this.scope).each(function() {
                    n.default_tab_hashes.push(this.hash)
                })
            },
            events: function() {
                var t = this,
                    n = this.S,
                    s = function(e) {
                        var i = n(this).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init");
                        (!i.is_hover || Modernizr.touch) && (e.preventDefault(), e.stopPropagation(), t.toggle_active_tab(n(this).parent()))
                    };
                n(this.scope).off(".tab").on("focus.fndtn.tab", "[" + this.attr_name() + "] > * > a", s).on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", s).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function() {
                    var e = n(this).closest("[" + t.attr_name() + "]").data(t.attr_name(!0) + "-init");
                    e.is_hover && t.toggle_active_tab(n(this).parent())
                }), n(e).on("hashchange.fndtn.tab", function(e) {
                    e.preventDefault(), t.handle_location_hash_change()
                }).on("keyup", function(t) {
                    9 == t.keyword && console.log(i.querySelector("[data-tab] .tab-title :focus"))
                })
            },
            handle_location_hash_change: function() {
                var e = this,
                    i = this.S;
                i("[" + this.attr_name() + "]", this.scope).each(function() {
                    var s = i(this).data(e.attr_name(!0) + "-init");
                    if (s.deep_linking) {
                        var o = e.scope.location.hash;
                        if ("" != o) {
                            var a = i(o);
                            if (a.hasClass("content") && a.parent().hasClass("tab-content")) e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=" + o + "]").parent());
                            else {
                                var r = a.closest(".content").attr("id");
                                r != n && e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=#" + r + "]").parent(), o)
                            }
                        } else
                            for (var l in e.default_tab_hashes) e.toggle_active_tab(t("[" + e.attr_name() + "] > * > a[href=" + e.default_tab_hashes[l] + "]").parent())
                    }
                })
            },
            toggle_active_tab: function(s, o) {
                var a = this.S,
                    r = s.closest("[" + this.attr_name() + "]"),
                    l = s.find("a"),
                    h = s.children("a").first(),
                    c = "#" + h.attr("href").split("#")[1],
                    u = a(c),
                    d = s.siblings(),
                    p = r.data(this.attr_name(!0) + "-init"),
                    f = function(e) {
                        var n, s = t(this),
                            o = t(this).parents("li").prev().children('[role="tab"]'),
                            a = t(this).parents("li").next().children('[role="tab"]');
                        switch (e.keyCode) {
                            case 37:
                                n = o;
                                break;
                            case 39:
                                n = a;
                                break;
                            default:
                                n = !1
                        }
                        n.length && (s.attr({
                            tabindex: "-1",
                            "aria-selected": null
                        }), n.attr({
                            tabindex: "0",
                            "aria-selected": !0
                        }).focus()), t('[role="tabpanel"]').attr("aria-hidden", "true"), t("#" + t(i.activeElement).attr("href").substring(1)).attr("aria-hidden", null)
                    };
                if (a(this).data(this.data_attr("tab-content")) && (c = "#" + a(this).data(this.data_attr("tab-content")).split("#")[1], u = a(c)), p.deep_linking) {
                    var m = t("body,html").scrollTop();
                    e.location.hash = o != n ? o : c, p.scroll_to_content ? o == n || o == c ? s.parent()[0].scrollIntoView() : a(c)[0].scrollIntoView() : (o == n || o == c) && t("body,html").scrollTop(m)
                }
                s.addClass(p.active_class).triggerHandler("opened"), l.attr({
                    "aria-selected": "true",
                    tabindex: 0
                }), d.removeClass(p.active_class), d.find("a").attr({
                    "aria-selected": "false",
                    tabindex: -1
                }), u.siblings().removeClass(p.active_class).attr({
                    "aria-hidden": "true",
                    tabindex: -1
                }).end().addClass(p.active_class).attr("aria-hidden", "false").find(":first-child").attr("tabindex", 0), p.callback(s), u.children().attr("tab-index", 0), u.triggerHandler("toggled", [s]), r.triggerHandler("toggled", [u]), l.on("keydown", f)
            },
            data_attr: function(t) {
                return this.namespace.length > 0 ? this.namespace + "-" + t : t
            },
            off: function() {},
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(t, e) {
        "use strict";
        Foundation.libs.tooltip = {
            name: "tooltip",
            version: "5.4.2",
            settings: {
                additional_inheritable_classes: [],
                tooltip_class: ".tooltip",
                append_to: "body",
                touch_close_text: "Tap To Close",
                disable_for_touch: !1,
                hover_delay: 200,
                show_on: "all",
                tip_template: function(t, e) {
                    return '<span data-selector="' + t + '" id="' + t + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '" role="tooltip">' + e + '<span class="nub"></span></span>'
                }
            },
            cache: {},
            init: function(t, e, i) {
                Foundation.inherit(this, "random_str"), this.bindings(e, i)
            },
            should_show: function(e) {
                var i = t.extend({}, this.settings, this.data_options(e));
                return "all" === i.show_on ? !0 : this.small() && "small" === i.show_on ? !0 : this.medium() && "medium" === i.show_on ? !0 : this.large() && "large" === i.show_on ? !0 : !1
            },
            medium: function() {
                return matchMedia(Foundation.media_queries.medium).matches
            },
            large: function() {
                return matchMedia(Foundation.media_queries.large).matches
            },
            events: function(e) {
                var i = this,
                    n = i.S;
                i.create(this.S(e)), t(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function(e) {
                    var s = n(this),
                        o = t.extend({}, i.settings, i.data_options(s)),
                        a = !1;
                    if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && n(e.target).is("a")) return !1;
                    if (/mouse/i.test(e.type) && i.ie_touch(e)) return !1;
                    if (s.hasClass("open")) Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && e.preventDefault(), i.hide(s);
                    else {
                        if (o.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) return;
                        !o.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && (e.preventDefault(), n(o.tooltip_class + ".open").hide(), a = !0), /enter|over/i.test(e.type) ? this.timer = setTimeout(function() {
                            i.showTip(s)
                        }.bind(this), i.settings.hover_delay) : "mouseout" === e.type || "mouseleave" === e.type ? (clearTimeout(this.timer), i.hide(s)) : i.showTip(s)
                    }
                }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function(e) {
                    return /mouse/i.test(e.type) && i.ie_touch(e) ? !1 : void(("touch" != t(this).data("tooltip-open-event-type") || "mouseleave" != e.type) && ("mouse" == t(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(e.type) ? i.convert_to_touch(t(this)) : i.hide(t(this))))
                }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function() {
                    i.hide(n(this))
                })
            },
            ie_touch: function() {
                return !1
            },
            showTip: function(t) {
                var e = this.getTip(t);
                return this.should_show(t, e) ? this.show(t) : void 0
            },
            getTip: function(e) {
                var i = this.selector(e),
                    n = t.extend({}, this.settings, this.data_options(e)),
                    s = null;
                return i && (s = this.S('span[data-selector="' + i + '"]' + n.tooltip_class)), "object" == typeof s ? s : !1
            },
            selector: function(t) {
                var e = t.attr("id"),
                    i = t.attr(this.attr_name()) || t.attr("data-selector");
                return (e && e.length < 1 || !e) && "string" != typeof i && (i = this.random_str(6), t.attr("data-selector", i).attr("aria-describedby", i)), e && e.length > 0 ? e : i
            },
            create: function(i) {
                var n = this,
                    s = t.extend({}, this.settings, this.data_options(i)),
                    o = this.settings.tip_template;
                "string" == typeof s.tip_template && e.hasOwnProperty(s.tip_template) && (o = e[s.tip_template]);
                var a = t(o(this.selector(i), t("<div></div>").html(i.attr("title")).html())),
                    r = this.inheritable_classes(i);
                a.addClass(r).appendTo(s.append_to), Modernizr.touch && (a.append('<span class="tap-to-close">' + s.touch_close_text + "</span>"), a.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function() {
                    n.hide(i)
                })), i.removeAttr("title").attr("title", "")
            },
            reposition: function(e, i, n) {
                var s, o, a, r, l;
                if (i.css("visibility", "hidden").show(), s = e.data("width"), o = i.children(".nub"), a = o.outerHeight(), r = o.outerHeight(), i.css(this.small() ? {
                        width: "100%"
                    } : {
                        width: s ? s : "auto"
                    }), l = function(t, e, i, n, s) {
                        return t.css({
                            top: e ? e : "auto",
                            bottom: n ? n : "auto",
                            left: s ? s : "auto",
                            right: i ? i : "auto"
                        }).end()
                    }, l(i, e.offset().top + e.outerHeight() + 10, "auto", "auto", e.offset().left), this.small()) l(i, e.offset().top + e.outerHeight() + 10, "auto", "auto", 12.5, t(this.scope).width()), i.addClass("tip-override"), l(o, -a, "auto", "auto", e.offset().left);
                else {
                    var h = e.offset().left;
                    Foundation.rtl && (o.addClass("rtl"), h = e.offset().left + e.outerWidth() - i.outerWidth()), l(i, e.offset().top + e.outerHeight() + 10, "auto", "auto", h), i.removeClass("tip-override"), n && n.indexOf("tip-top") > -1 ? (Foundation.rtl && o.addClass("rtl"), l(i, e.offset().top - i.outerHeight(), "auto", "auto", h).removeClass("tip-override")) : n && n.indexOf("tip-left") > -1 ? (l(i, e.offset().top + e.outerHeight() / 2 - i.outerHeight() / 2, "auto", "auto", e.offset().left - i.outerWidth() - a).removeClass("tip-override"), o.removeClass("rtl")) : n && n.indexOf("tip-right") > -1 && (l(i, e.offset().top + e.outerHeight() / 2 - i.outerHeight() / 2, "auto", "auto", e.offset().left + e.outerWidth() + a).removeClass("tip-override"), o.removeClass("rtl"))
                }
                i.css("visibility", "visible").hide()
            },
            small: function() {
                return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
            },
            inheritable_classes: function(e) {
                var i = t.extend({}, this.settings, this.data_options(e)),
                    n = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(i.additional_inheritable_classes),
                    s = e.attr("class"),
                    o = s ? t.map(s.split(" "), function(e) {
                        return -1 !== t.inArray(e, n) ? e : void 0
                    }).join(" ") : "";
                return t.trim(o)
            },
            convert_to_touch: function(e) {
                var i = this,
                    n = i.getTip(e),
                    s = t.extend({}, i.settings, i.data_options(e));
                0 === n.find(".tap-to-close").length && (n.append('<span class="tap-to-close">' + s.touch_close_text + "</span>"), n.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function() {
                    i.hide(e)
                })), e.data("tooltip-open-event-type", "touch")
            },
            show: function(t) {
                var e = this.getTip(t);
                "touch" == t.data("tooltip-open-event-type") && this.convert_to_touch(t), this.reposition(t, e, t.attr("class")), t.addClass("open"), e.fadeIn(150)
            },
            hide: function(t) {
                var e = this.getTip(t);
                e.fadeOut(150, function() {
                    e.find(".tap-to-close").remove(), e.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), t.removeClass("open")
                })
            },
            off: function() {
                var e = this;
                this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function(i) {
                    t("[" + e.attr_name() + "]").eq(i).attr("title", t(this).text())
                }).remove()
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(t, e, i) {
        "use strict";
        Foundation.libs.topbar = {
            name: "topbar",
            version: "5.4.2",
            settings: {
                index: 0,
                sticky_class: "sticky",
                custom_back_text: !0,
                back_text: "Back",
                mobile_show_parent_link: !0,
                is_hover: !0,
                scrolltop: !0,
                sticky_on: "all"
            },
            init: function(e, i, n) {
                Foundation.inherit(this, "add_custom_rule register_media throttle");
                var s = this;
                s.register_media("topbar", "foundation-mq-topbar"), this.bindings(i, n), s.S("[" + this.attr_name() + "]", this.scope).each(function() {
                    {
                        var e = t(this),
                            i = e.data(s.attr_name(!0) + "-init");
                        s.S("section, .top-bar-section", this)
                    }
                    e.data("index", 0);
                    var n = e.parent();
                    n.hasClass("fixed") || s.is_sticky(e, n, i) ? (s.settings.sticky_class = i.sticky_class, s.settings.sticky_topbar = e, e.data("height", n.outerHeight()), e.data("stickyoffset", n.offset().top)) : e.data("height", e.outerHeight()), i.assembled || s.assemble(e), i.is_hover ? s.S(".has-dropdown", e).addClass("not-click") : s.S(".has-dropdown", e).removeClass("not-click"), s.add_custom_rule(".f-topbar-fixed { padding-top: " + e.data("height") + "px }"), n.hasClass("fixed") && s.S("body").addClass("f-topbar-fixed")
                })
            },
            is_sticky: function(t, e, i) {
                var n = e.hasClass(i.sticky_class);
                return n && "all" === i.sticky_on ? !0 : n && this.small() && "small" === i.sticky_on ? matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : n && this.medium() && "medium" === i.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && !matchMedia(Foundation.media_queries.large).matches : n && this.large() && "large" === i.sticky_on ? matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches && matchMedia(Foundation.media_queries.large).matches : !1
            },
            toggle: function(i) {
                var n, s = this;
                n = i ? s.S(i).closest("[" + this.attr_name() + "]") : s.S("[" + this.attr_name() + "]");
                var o = n.data(this.attr_name(!0) + "-init"),
                    a = s.S("section, .top-bar-section", n);
                s.breakpoint() && (s.rtl ? (a.css({
                    right: "0%"
                }), t(">.name", a).css({
                    right: "100%"
                })) : (a.css({
                    left: "0%"
                }), t(">.name", a).css({
                    left: "100%"
                })), s.S("li.moved", a).removeClass("moved"), n.data("index", 0), n.toggleClass("expanded").css("height", "")), o.scrolltop ? n.hasClass("expanded") ? n.parent().hasClass("fixed") && (o.scrolltop ? (n.parent().removeClass("fixed"), n.addClass("fixed"), s.S("body").removeClass("f-topbar-fixed"), e.scrollTo(0, 0)) : n.parent().removeClass("expanded")) : n.hasClass("fixed") && (n.parent().addClass("fixed"), n.removeClass("fixed"), s.S("body").addClass("f-topbar-fixed")) : (s.is_sticky(n, n.parent(), o) && n.parent().addClass("fixed"), n.parent().hasClass("fixed") && (n.hasClass("expanded") ? (n.addClass("fixed"), n.parent().addClass("expanded"), s.S("body").addClass("f-topbar-fixed")) : (n.removeClass("fixed"), n.parent().removeClass("expanded"), s.update_sticky_positioning())))
            },
            timer: null,
            events: function() {
                var i = this,
                    n = this.S;
                n(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(t) {
                    t.preventDefault(), i.toggle(this)
                }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function() {
                    var e = t(this).closest("li");
                    !i.breakpoint() || e.hasClass("back") || e.hasClass("has-dropdown") || i.toggle()
                }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(e) {
                    var s = n(this),
                        o = n(e.target),
                        a = s.closest("[" + i.attr_name() + "]"),
                        r = a.data(i.attr_name(!0) + "-init");
                    return o.data("revealId") ? void i.toggle() : void(i.breakpoint() || (!r.is_hover || Modernizr.touch) && (e.stopImmediatePropagation(), s.hasClass("hover") ? (s.removeClass("hover").find("li").removeClass("hover"), s.parents("li.hover").removeClass("hover")) : (s.addClass("hover"), t(s).siblings().removeClass("hover"), "A" === o[0].nodeName && o.parent().hasClass("has-dropdown") && e.preventDefault())))
                }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(t) {
                    if (i.breakpoint()) {
                        t.preventDefault();
                        var e = n(this),
                            s = e.closest("[" + i.attr_name() + "]"),
                            o = s.find("section, .top-bar-section"),
                            a = (e.next(".dropdown").outerHeight(), e.closest("li"));
                        s.data("index", s.data("index") + 1), a.addClass("moved"), i.rtl ? (o.css({
                            right: -(100 * s.data("index")) + "%"
                        }), o.find(">.name").css({
                            right: 100 * s.data("index") + "%"
                        })) : (o.css({
                            left: -(100 * s.data("index")) + "%"
                        }), o.find(">.name").css({
                            left: 100 * s.data("index") + "%"
                        })), s.css("height", e.siblings("ul").outerHeight(!0) + s.data("height"))
                    }
                }), n(e).off(".topbar").on("resize.fndtn.topbar", i.throttle(function() {
                    i.resize.call(i)
                }, 50)).trigger("resize").trigger("resize.fndtn.topbar").load(function() {
                    n(this).trigger("resize.fndtn.topbar")
                }), n("body").off(".topbar").on("click.fndtn.topbar", function(t) {
                    var e = n(t.target).closest("li").closest("li.hover");
                    e.length > 0 || n("[" + i.attr_name() + "] li.hover").removeClass("hover")
                }), n(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(t) {
                    t.preventDefault();
                    var e = n(this),
                        s = e.closest("[" + i.attr_name() + "]"),
                        o = s.find("section, .top-bar-section"),
                        a = (s.data(i.attr_name(!0) + "-init"), e.closest("li.moved")),
                        r = a.parent();
                    s.data("index", s.data("index") - 1), i.rtl ? (o.css({
                        right: -(100 * s.data("index")) + "%"
                    }), o.find(">.name").css({
                        right: 100 * s.data("index") + "%"
                    })) : (o.css({
                        left: -(100 * s.data("index")) + "%"
                    }), o.find(">.name").css({
                        left: 100 * s.data("index") + "%"
                    })), 0 === s.data("index") ? s.css("height", "") : s.css("height", r.outerHeight(!0) + s.data("height")), setTimeout(function() {
                        a.removeClass("moved")
                    }, 300)
                }), n(this.scope).find(".dropdown a").focus(function() {
                    t(this).parents(".has-dropdown").addClass("hover")
                }).blur(function() {
                    t(this).parents(".has-dropdown").removeClass("hover")
                })
            },
            resize: function() {
                var t = this;
                t.S("[" + this.attr_name() + "]").each(function() {
                    var e, n = t.S(this),
                        s = n.data(t.attr_name(!0) + "-init"),
                        o = n.parent("." + t.settings.sticky_class);
                    if (!t.breakpoint()) {
                        var a = n.hasClass("expanded");
                        n.css("height", "").removeClass("expanded").find("li").removeClass("hover"), a && t.toggle(n)
                    }
                    t.is_sticky(n, o, s) && (o.hasClass("fixed") ? (o.removeClass("fixed"), e = o.offset().top, t.S(i.body).hasClass("f-topbar-fixed") && (e -= n.data("height")), n.data("stickyoffset", e), o.addClass("fixed")) : (e = o.offset().top, n.data("stickyoffset", e)))
                })
            },
            breakpoint: function() {
                return !matchMedia(Foundation.media_queries.topbar).matches
            },
            small: function() {
                return matchMedia(Foundation.media_queries.small).matches
            },
            medium: function() {
                return matchMedia(Foundation.media_queries.medium).matches
            },
            large: function() {
                return matchMedia(Foundation.media_queries.large).matches
            },
            assemble: function(e) {
                var i = this,
                    n = e.data(this.attr_name(!0) + "-init"),
                    s = i.S("section, .top-bar-section", e);
                s.detach(), i.S(".has-dropdown>a", s).each(function() {
                    var e, s = i.S(this),
                        o = s.siblings(".dropdown"),
                        a = s.attr("href");
                    o.find(".title.back").length || (e = t(1 == n.mobile_show_parent_link && a ? '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link show-for-small"><a class="parent-link js-generated" href="' + a + '">' + s.html() + "</a></li>" : '<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'), t("h5>a", e).html(1 == n.custom_back_text ? n.back_text : "&laquo; " + s.html()), o.prepend(e))
                }), s.appendTo(e), this.sticky(), this.assembled(e)
            },
            assembled: function(e) {
                e.data(this.attr_name(!0), t.extend({}, e.data(this.attr_name(!0)), {
                    assembled: !0
                }))
            },
            height: function(e) {
                var i = 0,
                    n = this;
                return t("> li", e).each(function() {
                    i += n.S(this).outerHeight(!0)
                }), i
            },
            sticky: function() {
                var t = this;
                this.S(e).on("scroll", function() {
                    t.update_sticky_positioning()
                })
            },
            update_sticky_positioning: function() {
                var t = "." + this.settings.sticky_class,
                    i = this.S(e),
                    n = this;
                if (n.settings.sticky_topbar && n.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                    var s = this.settings.sticky_topbar.data("stickyoffset");
                    n.S(t).hasClass("expanded") || (i.scrollTop() > s ? n.S(t).hasClass("fixed") || (n.S(t).addClass("fixed"), n.S("body").addClass("f-topbar-fixed")) : i.scrollTop() <= s && n.S(t).hasClass("fixed") && (n.S(t).removeClass("fixed"), n.S("body").removeClass("f-topbar-fixed")))
                }
            },
            off: function() {
                this.S(this.scope).off(".fndtn.topbar"), this.S(e).off(".fndtn.topbar")
            },
            reflow: function() {}
        }
    }(jQuery, window, window.document),
    function(t, e) {
        "use strict";
        Foundation.libs.equalizer = {
            name: "equalizer",
            version: "5.4.2",
            settings: {
                use_tallest: !0,
                before_height_change: t.noop,
                after_height_change: t.noop,
                equalize_on_stack: !1
            },
            init: function(t, e, i) {
                Foundation.inherit(this, "image_loaded"), this.bindings(e, i), this.reflow()
            },
            events: function() {
                this.S(e).off(".equalizer").on("resize.fndtn.equalizer", function() {
                    this.reflow()
                }.bind(this))
            },
            equalize: function(e) {
                var i = !1,
                    n = e.find("[" + this.attr_name() + "-watch]:visible"),
                    s = e.data(this.attr_name(!0) + "-init");
                if (0 !== n.length) {
                    var o = n.first().offset().top;
                    if (s.before_height_change(), e.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"), n.height("inherit"), n.each(function() {
                            var e = t(this);
                            e.offset().top !== o && (i = !0)
                        }), s.equalize_on_stack !== !1 || !i) {
                        var a = n.map(function() {
                            return t(this).outerHeight(!1)
                        }).get();
                        if (s.use_tallest) {
                            var r = Math.max.apply(null, a);
                            n.css("height", r)
                        } else {
                            var l = Math.min.apply(null, a);
                            n.css("height", l)
                        }
                        s.after_height_change(), e.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer")
                    }
                }
            },
            reflow: function() {
                var e = this;
                this.S("[" + this.attr_name() + "]", this.scope).each(function() {
                    var i = t(this);
                    e.image_loaded(e.S("img", this), function() {
                        e.equalize(i)
                    })
                })
            }
        }
    }(jQuery, window, window.document),
    function() {
        var t, e, i, n, s, o, a, r, l, h, c, u, d, p, f, m, g, v, _, b, y, w, x, k, C, T, D, S, E, A, I, P, M, F, N, H, z, j, O, W, R, q, L, $, B, Y, U, X, Q, K, V, G, Z, J, te, ee, ie = [].indexOf || function(t) {
                for (var e = 0, i = this.length; i > e; e++)
                    if (e in this && this[e] === t) return e;
                return -1
            },
            ne = {}.hasOwnProperty,
            se = function(t, e) {
                function i() {
                    this.constructor = t
                }
                for (var n in e) ne.call(e, n) && (t[n] = e[n]);
                return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
            },
            oe = [].slice,
            ae = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            };
        F = {}, d = 10, V = !1, O = null, _ = null, P = null, R = null, te = null, n = {
            BEFORE_CHANGE: "page:before-change",
            FETCH: "page:fetch",
            RECEIVE: "page:receive",
            CHANGE: "page:change",
            UPDATE: "page:update",
            LOAD: "page:load",
            RESTORE: "page:restore",
            BEFORE_UNLOAD: "page:before-unload",
            EXPIRE: "page:expire"
        }, k = function(t) {
            var e;
            return t = new i(t), Y(), u(), null != O && O.start(), V && (e = G(t.absolute)) ? (C(e), T(t, null, !1)) : T(t, Q)
        }, G = function(t) {
            var e;
            return e = F[t], e && !e.transitionCacheDisabled ? e : void 0
        }, y = function(t) {
            return null == t && (t = !0), V = t
        }, b = function(t) {
            return null == t && (t = !0), h ? t ? null != O ? O : O = new o("html") : (null != O && O.uninstall(), O = null) : void 0
        }, T = function(t, e, i) {
            return null == i && (i = !0), Z(n.FETCH, {
                url: t.absolute
            }), null != te && te.abort(), te = new XMLHttpRequest, te.open("GET", t.withoutHashForIE10compatibility(), !0), te.setRequestHeader("Accept", "text/html, application/xhtml+xml, application/xml"), te.setRequestHeader("X-XHR-Referer", R), te.onload = function() {
                var i;
                return Z(n.RECEIVE, {
                    url: t.absolute
                }), (i = j()) ? (q(t), L(), p.apply(null, x(i)), M(), "function" == typeof e && e(), Z(n.LOAD)) : document.location.href = v() || t.absolute
            }, O && i && (te.onprogress = function() {
                return function(t) {
                    var e;
                    return e = t.lengthComputable ? t.loaded / t.total * 100 : O.value + (100 - O.value) / 10, O.advanceTo(e)
                }
            }(this)), te.onloadend = function() {
                return te = null
            }, te.onerror = function() {
                return document.location.href = t.absolute
            }, te.send()
        }, C = function(t) {
            return null != te && te.abort(), p(t.title, t.body), W(t), Z(n.RESTORE)
        }, u = function() {
            var t;
            return t = new i(_.url), F[t.absolute] = {
                url: t.relative,
                body: document.body,
                title: document.title,
                positionY: window.pageYOffset,
                positionX: window.pageXOffset,
                cachedAt: (new Date).getTime(),
                transitionCacheDisabled: null != document.querySelector("[data-no-transition-cache]")
            }, m(d)
        }, H = function(t) {
            return null == t && (t = d), /^[\d]+$/.test(t) ? d = parseInt(t) : void 0
        }, m = function(t) {
            var e, i, s, o, a, r;
            for (s = Object.keys(F), e = s.map(function(t) {
                    return F[t].cachedAt
                }).sort(function(t, e) {
                    return e - t
                }), r = [], o = 0, a = s.length; a > o; o++) i = s[o], F[i].cachedAt <= e[t] && (Z(n.EXPIRE, F[i]), r.push(delete F[i]));
            return r
        }, p = function(e, i, s, o) {
            return Z(n.BEFORE_UNLOAD), document.title = e, document.documentElement.replaceChild(i, document.body), null != s && t.update(s), K(), o && w(), _ = window.history.state, null != O && O.done(), Z(n.CHANGE), Z(n.UPDATE)
        }, w = function() {
            var t, e, i, n, s, o, a, r, l, h, c, u;
            for (o = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])')), a = 0, l = o.length; l > a; a++)
                if (s = o[a], "" === (c = s.type) || "text/javascript" === c) {
                    for (e = document.createElement("script"), u = s.attributes, r = 0, h = u.length; h > r; r++) t = u[r], e.setAttribute(t.name, t.value);
                    s.hasAttribute("async") || (e.async = !1), e.appendChild(document.createTextNode(s.innerHTML)), n = s.parentNode, i = s.nextSibling, n.removeChild(s), n.insertBefore(e, i)
                }
        }, U = function(t) {
            return t.innerHTML = t.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/gi, ""), t
        }, K = function() {
            var t, e;
            return t = (e = document.querySelectorAll("input[autofocus], textarea[autofocus]"))[e.length - 1], t && document.activeElement !== t ? t.focus() : void 0
        }, q = function(t) {
            return (t = new i(t)).absolute !== R ? window.history.pushState({
                turbolinks: !0,
                url: t.absolute
            }, "", t.absolute) : void 0
        }, L = function() {
            var t, e;
            return (t = te.getResponseHeader("X-XHR-Redirected-To")) ? (t = new i(t), e = t.hasNoHash() ? document.location.hash : "", window.history.replaceState(window.history.state, "", t.href + e)) : void 0
        }, v = function() {
            var t;
            return null != (t = te.getResponseHeader("Location")) && new i(t).crossOrigin() ? t : void 0
        }, Y = function() {
            return R = document.location.href
        }, B = function() {
            return window.history.replaceState({
                turbolinks: !0,
                url: document.location.href
            }, "", document.location.href)
        }, $ = function() {
            return _ = window.history.state
        }, M = function() {
            var t;
            return navigator.userAgent.match(/Firefox/) && !(t = new i).hasNoHash() ? (window.history.replaceState(_, "", t.withoutHash()), document.location.hash = t.hash) : void 0
        }, W = function(t) {
            return window.scrollTo(t.positionX, t.positionY)
        }, Q = function() {
            return document.location.hash ? document.location.href = document.location.href : window.scrollTo(0, 0)
        }, f = function(t) {
            var e, i, n;
            if (null == t || "object" != typeof t) return t;
            e = new t.constructor;
            for (i in t) n = t[i], e[i] = f(n);
            return e
        }, z = function(t) {
            var e, i;
            return e = (null != (i = document.cookie.match(new RegExp(t + "=(\\w+)"))) ? i[1].toUpperCase() : void 0) || "", document.cookie = t + "=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/", e
        }, Z = function(t, e) {
            var i;
            return "undefined" != typeof Prototype && Event.fire(document, t, e, !0), i = document.createEvent("Events"), e && (i.data = e), i.initEvent(t, !0, !0), document.dispatchEvent(i)
        }, N = function(t) {
            return !Z(n.BEFORE_CHANGE, {
                url: t
            })
        }, j = function() {
            var t, e, i, n, s, o;
            return e = function() {
                var t;
                return 400 <= (t = te.status) && 600 > t
            }, o = function() {
                var t;
                return null != (t = te.getResponseHeader("Content-Type")) && t.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/)
            }, n = function(t) {
                var e, i, n, s, o;
                for (s = t.querySelector("head").childNodes, o = [], i = 0, n = s.length; n > i; i++) e = s[i], null != ("function" == typeof e.getAttribute ? e.getAttribute("data-turbolinks-track") : void 0) && o.push(e.getAttribute("src") || e.getAttribute("href"));
                return o
            }, t = function(t) {
                var e;
                return P || (P = n(document)), e = n(t), e.length !== P.length || s(e, P).length !== P.length
            }, s = function(t, e) {
                var i, n, s, o, a;
                for (t.length > e.length && (o = [e, t], t = o[0], e = o[1]), a = [], n = 0, s = t.length; s > n; n++) i = t[n], ie.call(e, i) >= 0 && a.push(i);
                return a
            }, !e() && o() && (i = g(te.responseText), i && !t(i)) ? i : void 0
        }, x = function(e) {
            var i;
            return i = e.querySelector("title"), [null != i ? i.textContent : void 0, U(e.querySelector("body")), t.get(e).token, "runScripts"]
        }, t = {
            get: function(t) {
                var e;
                return null == t && (t = document), {
                    node: e = t.querySelector('meta[name="csrf-token"]'),
                    token: null != e && "function" == typeof e.getAttribute ? e.getAttribute("content") : void 0
                }
            },
            update: function(t) {
                var e;
                return e = this.get(), null != e.token && null != t && e.token !== t ? e.node.setAttribute("content", t) : void 0
            }
        }, g = function(t) {
            var e;
            return e = document.documentElement.cloneNode(), e.innerHTML = t, e.head = e.querySelector("head"), e.body = e.querySelector("body"), e
        }, i = function() {
            function t(e) {
                return this.original = null != e ? e : document.location.href, this.original.constructor === t ? this.original : void this._parse()
            }
            return t.prototype.withoutHash = function() {
                return this.href.replace(this.hash, "").replace("#", "")
            }, t.prototype.withoutHashForIE10compatibility = function() {
                return this.withoutHash()
            }, t.prototype.hasNoHash = function() {
                return 0 === this.hash.length
            }, t.prototype.crossOrigin = function() {
                return this.origin !== (new t).origin
            }, t.prototype._parse = function() {
                var t;
                return (null != this.link ? this.link : this.link = document.createElement("a")).href = this.original, t = this.link, this.href = t.href, this.protocol = t.protocol, this.host = t.host, this.hostname = t.hostname, this.port = t.port, this.pathname = t.pathname, this.search = t.search, this.hash = t.hash, this.origin = [this.protocol, "//", this.hostname].join(""), 0 !== this.port.length && (this.origin += ":" + this.port), this.relative = [this.pathname, this.search, this.hash].join(""), this.absolute = this.href
            }, t
        }(), s = function(t) {
            function e(t) {
                return this.link = t, this.link.constructor === e ? this.link : (this.original = this.link.href, this.originalElement = this.link, this.link = this.link.cloneNode(!1), void e.__super__.constructor.apply(this, arguments))
            }
            return se(e, t), e.HTML_EXTENSIONS = ["html"], e.allowExtensions = function() {
                var t, i, n, s;
                for (i = 1 <= arguments.length ? oe.call(arguments, 0) : [], n = 0, s = i.length; s > n; n++) t = i[n], e.HTML_EXTENSIONS.push(t);
                return e.HTML_EXTENSIONS
            }, e.prototype.shouldIgnore = function() {
                return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target()
            }, e.prototype._anchored = function() {
                return (this.hash.length > 0 || "#" === this.href.charAt(this.href.length - 1)) && this.withoutHash() === (new i).withoutHash()
            }, e.prototype._nonHtml = function() {
                return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + e.HTML_EXTENSIONS.join("|") + ")?$", "g"))
            }, e.prototype._optOut = function() {
                var t, e;
                for (e = this.originalElement; !t && e !== document;) t = null != e.getAttribute("data-no-turbolink"), e = e.parentNode;
                return t
            }, e.prototype._target = function() {
                return 0 !== this.link.target.length
            }, e
        }(i), e = function() {
            function t(t) {
                this.event = t, this.event.defaultPrevented || (this._extractLink(), this._validForTurbolinks() && (N(this.link.absolute) || J(this.link.href), this.event.preventDefault()))
            }
            return t.installHandlerLast = function(e) {
                return e.defaultPrevented ? void 0 : (document.removeEventListener("click", t.handle, !1), document.addEventListener("click", t.handle, !1))
            }, t.handle = function(e) {
                return new t(e)
            }, t.prototype._extractLink = function() {
                var t;
                for (t = this.event.target; t.parentNode && "A" !== t.nodeName;) t = t.parentNode;
                return "A" === t.nodeName && 0 !== t.href.length ? this.link = new s(t) : void 0
            }, t.prototype._validForTurbolinks = function() {
                return null != this.link && !(this.link.shouldIgnore() || this._nonStandardClick())
            }, t.prototype._nonStandardClick = function() {
                return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey
            }, t
        }(), o = function() {
            function t(t) {
                this.elementSelector = t, this._trickle = ae(this._trickle, this), this.value = 0, this.opacity = 1, this.content = "", this.speed = 300, this.install()
            }
            var e;
            return e = "turbolinks-progress-bar", t.prototype.install = function() {
                return this.element = document.querySelector(this.elementSelector), this.element.classList.add(e), this.styleElement = document.createElement("style"), document.head.appendChild(this.styleElement), this._updateStyle()
            }, t.prototype.uninstall = function() {
                return this.element.classList.remove(e), document.head.removeChild(this.styleElement)
            }, t.prototype.start = function() {
                return this.advanceTo(5)
            }, t.prototype.advanceTo = function(t) {
                var e;
                if (t > (e = this.value) && 100 >= e) {
                    if (this.value = t, this._updateStyle(), 100 === this.value) return this._stopTrickle();
                    if (this.value > 0) return this._startTrickle()
                }
            }, t.prototype.done = function() {
                return this.value > 0 ? (this.advanceTo(100), this._reset()) : void 0
            }, t.prototype._reset = function() {
                return setTimeout(function(t) {
                    return function() {
                        return t.opacity = 0, t._updateStyle()
                    }
                }(this), this.speed / 2), setTimeout(function(t) {
                    return function() {
                        return t.value = 0, t.opacity = 1, t._withSpeed(0, function() {
                            return t._updateStyle(!0)
                        })
                    }
                }(this), this.speed)
            }, t.prototype._startTrickle = function() {
                return this.trickling ? void 0 : (this.trickling = !0, setTimeout(this._trickle, this.speed))
            }, t.prototype._stopTrickle = function() {
                return delete this.trickling
            }, t.prototype._trickle = function() {
                return this.trickling ? (this.advanceTo(this.value + Math.random() / 2), setTimeout(this._trickle, this.speed)) : void 0
            }, t.prototype._withSpeed = function(t, e) {
                var i, n;
                return i = this.speed, this.speed = t, n = e(), this.speed = i, n
            }, t.prototype._updateStyle = function(t) {
                return null == t && (t = !1), t && this._changeContentToForceRepaint(), this.styleElement.textContent = this._createCSSRule()
            }, t.prototype._changeContentToForceRepaint = function() {
                return this.content = "" === this.content ? " " : ""
            }, t.prototype._createCSSRule = function() {
                return "" + this.elementSelector + "." + e + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + this.speed / 2 + "ms ease-in;\n  transform: translate3d(0,0,0);\n}"
            }, t
        }(), c = function(t) {
            return setTimeout(t, 500)
        }, E = function() {
            return document.addEventListener("DOMContentLoaded", function() {
                return Z(n.CHANGE), Z(n.UPDATE)
            }, !0)
        }, I = function() {
            return "undefined" != typeof jQuery ? jQuery(document).on("ajaxSuccess", function(t, e) {
                return jQuery.trim(e.responseText) ? Z(n.UPDATE) : void 0
            }) : void 0
        }, A = function(t) {
            var e, n;
            return (null != (n = t.state) ? n.turbolinks : void 0) ? (e = F[new i(t.state.url).absolute]) ? (u(), C(e)) : J(t.target.location.href) : void 0
        }, S = function() {
            return B(), $(), document.addEventListener("click", e.installHandlerLast, !0), window.addEventListener("hashchange", function() {
                return B(), $()
            }, !1), c(function() {
                return window.addEventListener("popstate", A, !1)
            })
        }, D = void 0 !== window.history.state || navigator.userAgent.match(/Firefox\/2[6|7]/), l = window.history && window.history.pushState && window.history.replaceState && D, a = !navigator.userAgent.match(/CriOS\//), X = "GET" === (ee = z("request_method")) || "" === ee, h = l && a && X, r = document.addEventListener && document.createEvent, r && (E(), I()), h ? (J = k, S()) : J = function(t) {
            return document.location.href = t
        }, this.Turbolinks = {
            visit: J,
            pagesCached: H,
            enableTransitionCache: y,
            enableProgressBar: b,
            allowLinkExtensions: s.allowExtensions,
            supported: h,
            EVENTS: f(n)
        }
    }.call(this);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
            var e, i, n, s = _gsScope.GreenSockGlobals || _gsScope,
                o = s.com.greensock,
                a = 2 * Math.PI,
                r = Math.PI / 2,
                l = o._class,
                h = function(e, i) {
                    var n = l("easing." + e, function() {}, !0),
                        s = n.prototype = new t;
                    return s.constructor = n, s.getRatio = i, n
                },
                c = t.register || function() {},
                u = function(t, e, i, n) {
                    var s = l("easing." + t, {
                        easeOut: new e,
                        easeIn: new i,
                        easeInOut: new n
                    }, !0);
                    return c(s, t), s
                },
                d = function(t, e, i) {
                    this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                },
                p = function(e, i) {
                    var n = l("easing." + e, function(t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        s = n.prototype = new t;
                    return s.constructor = n, s.getRatio = i, s.config = function(t) {
                        return new n(t)
                    }, n
                },
                f = u("Back", p("BackOut", function(t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                }), p("BackIn", function(t) {
                    return t * t * ((this._p1 + 1) * t - this._p1)
                }), p("BackInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })),
                m = l("easing.SlowMo", function(t, e, i) {
                    e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                }, !0),
                g = m.prototype = new t;
            return g.constructor = m, g.getRatio = function(t) {
                var e = t + (.5 - t) * this._p;
                return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) {
                return new m(t, e, i)
            }, e = l("easing.SteppedEase", function(t) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
            }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
                return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
            }, g.config = e.config = function(t) {
                return new e(t)
            }, i = l("easing.RoughEase", function(e) {
                e = e || {};
                for (var i, n, s, o, a, r, l = e.taper || "none", h = [], c = 0, u = 0 | (e.points || 20), p = u, f = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1;) i = f ? Math.random() : 1 / u * p, n = g ? g.getRatio(i) : i, "none" === l ? s = v : "out" === l ? (o = 1 - i, s = o * o * v) : "in" === l ? s = i * i * v : .5 > i ? (o = 2 * i, s = .5 * o * o * v) : (o = 2 * (1 - i), s = .5 * o * o * v), f ? n += Math.random() * s - .5 * s : p % 2 ? n += .5 * s : n -= .5 * s, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), h[c++] = {
                    x: i,
                    y: n
                };
                for (h.sort(function(t, e) {
                        return t.x - e.x
                    }), r = new d(1, 1, null), p = u; --p > -1;) a = h[p], r = new d(a.x, a.y, r);
                this._prev = new d(0, 0, 0 !== r.t ? r : r.next)
            }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function(t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && e.t >= t;) e = e.prev;
                return this._prev = e, e.v + (t - e.t) / e.gap * e.c
            }, g.config = function(t) {
                return new i(t)
            }, i.ease = new i, u("Bounce", h("BounceOut", function(t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), h("BounceIn", function(t) {
                return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), h("BounceInOut", function(t) {
                var e = .5 > t;
                return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), u("Circ", h("CircOut", function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), h("CircIn", function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), h("CircInOut", function(t) {
                return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), n = function(e, i, n) {
                var s = l("easing." + e, function(t, e) {
                        this._p1 = t || 1, this._p2 = e || n, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                    }, !0),
                    o = s.prototype = new t;
                return o.constructor = s, o.getRatio = i, o.config = function(t, e) {
                    return new s(t, e)
                }, s
            }, u("Elastic", n("ElasticOut", function(t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
            }, .3), n("ElasticIn", function(t) {
                return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
            }, .3), n("ElasticInOut", function(t) {
                return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
            }, .45)), u("Expo", h("ExpoOut", function(t) {
                return 1 - Math.pow(2, -10 * t)
            }), h("ExpoIn", function(t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), h("ExpoInOut", function(t) {
                return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), u("Sine", h("SineOut", function(t) {
                return Math.sin(t * r)
            }), h("SineIn", function(t) {
                return -Math.cos(t * r) + 1
            }), h("SineInOut", function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), l("easing.EaseLookup", {
                find: function(e) {
                    return t.map[e]
                }
            }, !0), c(s.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), f
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, s, o, a, r, l = function(t) {
                    var e, n = t.split("."),
                        s = i;
                    for (e = 0; n.length > e; e++) s[n[e]] = s = s[n[e]] || {};
                    return s
                },
                h = l("com.greensock"),
                c = 1e-10,
                u = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                d = function() {},
                p = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                f = {},
                m = function(n, s, o, a) {
                    this.sc = f[n] ? f[n].sc : [], f[n] = this, this.gsClass = null, this.func = o;
                    var r = [];
                    this.check = function(h) {
                        for (var c, u, d, p, g = s.length, v = g; --g > -1;)(c = f[s[g]] || new m(s[g], [])).gsClass ? (r[g] = c.gsClass, v--) : h && c.sc.push(this);
                        if (0 === v && o)
                            for (u = ("com.greensock." + n).split("."), d = u.pop(), p = l(u.join("."))[d] = this.gsClass = o.apply(o, r), a && (i[d] = p, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return p
                                }) : n === e && "undefined" != typeof module && module.exports && (module.exports = p)), g = 0; this.sc.length > g; g++) this.sc[g].check()
                    }, this.check(!0)
                },
                g = t._gsDefine = function(t, e, i, n) {
                    return new m(t, e, i, n)
                },
                v = h._class = function(t, e, i) {
                    return e = e || function() {}, g(t, [], function() {
                        return e
                    }, i), e
                };
            g.globals = i;
            var _ = [0, 0, 1, 1],
                b = [],
                y = v("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? _.concat(e) : _
                }, !0),
                w = y.map = {},
                x = y.register = function(t, e, i, n) {
                    for (var s, o, a, r, l = e.split(","), c = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
                        for (o = l[c], s = n ? v("easing." + o, null, !0) : h.easing[o] || {}, a = u.length; --a > -1;) r = u[a], w[o + "." + r] = w[r + o] = s[r] = t.getRatio ? t : t[r] || new t
                };
            for (o = y.prototype, o._calcEnd = !1, o.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], s = n.length; --s > -1;) o = n[s] + ",Power" + s, x(new y(null, null, 1, s), o, "easeOut", !0), x(new y(null, null, 2, s), o, "easeIn" + (0 === s ? ",easeNone" : "")), x(new y(null, null, 3, s), o, "easeInOut");
            w.linear = h.easing.Linear.easeIn, w.swing = h.easing.Quad.easeInOut;
            var k = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            o = k.prototype, o.addEventListener = function(t, e, i, n, s) {
                s = s || 0;
                var o, l, h = this._listeners[t],
                    c = 0;
                for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) o = h[l], o.c === e && o.s === i ? h.splice(l, 1) : 0 === c && s > o.pr && (c = l + 1);
                h.splice(c, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: s
                }), this !== a || r || a.wake()
            }, o.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, o.dispatchEvent = function(t) {
                var e, i, n, s = this._listeners[t];
                if (s)
                    for (e = s.length, i = this._eventTarget; --e > -1;) n = s[e], n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i)
            };
            var C = t.requestAnimationFrame,
                T = t.cancelAnimationFrame,
                D = Date.now || function() {
                    return (new Date).getTime()
                },
                S = D();
            for (n = ["ms", "moz", "webkit", "o"], s = n.length; --s > -1 && !C;) C = t[n[s] + "RequestAnimationFrame"], T = t[n[s] + "CancelAnimationFrame"] || t[n[s] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, n, s, o, l, h = this,
                    u = D(),
                    p = e !== !1 && C,
                    f = 500,
                    m = 33,
                    g = function(t) {
                        var e, a, r = D() - S;
                        r > f && (u += r - m), S += r, h.time = (S - u) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= o ? .004 : o - e), a = !0), t !== !0 && (s = n(g)), a && h.dispatchEvent("tick")
                    };
                k.call(h), h.time = h.frame = 0, h.tick = function() {
                    g(!0)
                }, h.lagSmoothing = function(t, e) {
                    f = t || 1 / c, m = Math.min(e, f, 0)
                }, h.sleep = function() {
                    null != s && (p && T ? T(s) : clearTimeout(s), n = d, s = null, h === a && (r = !1))
                }, h.wake = function() {
                    null !== s ? h.sleep() : h.frame > 10 && (S = D() - f + 5), n = 0 === i ? d : p && C ? C : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                    }, h === a && (r = !0), g(2)
                }, h.fps = function(t) {
                    return arguments.length ? (i = t, o = 1 / (i || 60), l = this.time + o, void h.wake()) : i
                }, h.useRAF = function(t) {
                    return arguments.length ? (h.sleep(), p = t, void h.fps(i)) : p
                }, h.fps(t), setTimeout(function() {
                    p && (!s || 5 > h.frame) && h.useRAF(!1)
                }, 1500)
            }), o = h.Ticker.prototype = new h.events.EventDispatcher, o.constructor = h.Ticker;
            var E = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, $) {
                    r || a.wake();
                    var i = this.vars.useFrames ? L : $;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = E.ticker = new h.Ticker, o = E.prototype, o._dirty = o._gc = o._initted = o._paused = !1, o._totalTime = o._time = 0, o._rawPrevTime = -1, o._next = o._last = o._onUpdate = o._timeline = o.timeline = null, o._paused = !1;
            var A = function() {
                r && D() - S > 2e3 && a.wake(), setTimeout(A, 2e3)
            };
            A(), o.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, o.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, o.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, o.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, o.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, o.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, o.render = function() {}, o.invalidate = function() {
                return this
            }, o.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, o._enabled = function(t, e) {
                return r || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, o._kill = function() {
                return this._enabled(!1, !1)
            }, o.kill = function(t, e) {
                return this._kill(t, e), this
            }, o._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, o._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, o.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var s = this.vars;
                    if (1 === arguments.length) return s[t];
                    null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = p(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, o.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, o.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, o.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, o.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, o.totalTime = function(t, e, i) {
                if (r || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            s = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                            for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), N.length && B())
                }
                return this
            }, o.progress = o.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, o.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, o.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || c, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, o.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, o.paused = function(t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    r || t || a.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        n = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += n, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== n && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var I = v("core.SimpleTimeline", function(t) {
                E.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            o = I.prototype = new E, o.constructor = I, o.kill()._gc = !1, o._first = o._last = null, o._sortChildren = !1, o.add = o.insert = function(t, e) {
                var i, n;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (n = t._startTime; i && i._startTime > n;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
            }, o._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, this._timeline && this._uncache(!0)), this
            }, o.render = function(t, e, i) {
                var n, s = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; s;) n = s._next, (s._active || t >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = n
            }, o.rawTime = function() {
                return r || a.wake(), this._totalTime
            };
            var P = v("TweenLite", function(e, i, n) {
                    if (E.call(this, i, n), this.render = P.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : P.selector(e) || e;
                    var s, o, a, r = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? q[P.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (r || e instanceof Array || e.push && p(e)) && "number" != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], s = 0; a.length > s; s++) o = a[s], o ? "string" != typeof o ? o.length && o !== t && o[0] && (o[0] === t || o[0].nodeType && o[0].style && !o.nodeType) ? (a.splice(s--, 1), this._targets = a = a.concat(u(o))) : (this._siblings[s] = Y(o, this, !1), 1 === l && this._siblings[s].length > 1 && U(o, this, null, 1, this._siblings[s])) : (o = a[s--] = P.selector(o), "string" == typeof o && a.splice(s + 1, 1)) : a.splice(s--, 1);
                    else this._propLookup = {}, this._siblings = Y(e, this, !1), 1 === l && this._siblings.length > 1 && U(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -c, this.render(-this._delay))
                }, !0),
                M = function(e) {
                    return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                F = function(t, e) {
                    var i, n = {};
                    for (i in t) R[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!j[i] || j[i] && j[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            o = P.prototype = new E, o.constructor = P, o.kill()._gc = !1, o.ratio = 0, o._firstPT = o._targets = o._overwrittenProps = o._startAt = null, o._notifyPluginsOfEnabled = o._lazy = !1, P.version = "1.13.1", P.defaultEase = o._ease = new y(null, null, 1, 1), P.defaultOverwrite = "auto", P.ticker = a, P.autoSleep = !0, P.lagSmoothing = function(t, e) {
                a.lagSmoothing(t, e)
            }, P.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (P.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var N = [],
                H = {},
                z = P._internals = {
                    isArray: p,
                    isSelector: M,
                    lazyTweens: N
                },
                j = P._plugins = {},
                O = z.tweenLookup = {},
                W = 0,
                R = z.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1
                },
                q = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                L = E._rootFramesTimeline = new I,
                $ = E._rootTimeline = new I,
                B = z.lazyRender = function() {
                    var t = N.length;
                    for (H = {}; --t > -1;) n = N[t], n && n._lazy !== !1 && (n.render(n._lazy, !1, !0), n._lazy = !1);
                    N.length = 0
                };
            $._startTime = a.time, L._startTime = a.frame, $._active = L._active = !0, setTimeout(B, 1), E._updateRoot = P.render = function() {
                var t, e, i;
                if (N.length && B(), $.render((a.time - $._startTime) * $._timeScale, !1, !1), L.render((a.frame - L._startTime) * L._timeScale, !1, !1), N.length && B(), !(a.frame % 120)) {
                    for (i in O) {
                        for (e = O[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete O[i]
                    }
                    if (i = $._first, (!i || i._paused) && P.autoSleep && !L._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", E._updateRoot);
            var Y = function(t, e, i) {
                    var n, s, o = t._gsTweenID;
                    if (O[o || (t._gsTweenID = o = "t" + W++)] || (O[o] = {
                            target: t,
                            tweens: []
                        }), e && (n = O[o].tweens, n[s = n.length] = e, i))
                        for (; --s > -1;) n[s] === e && n.splice(s, 1);
                    return O[o].tweens
                },
                U = function(t, e, i, n, s) {
                    var o, a, r, l;
                    if (1 === n || n >= 4) {
                        for (l = s.length, o = 0; l > o; o++)
                            if ((r = s[o]) !== e) r._gc || r._enabled(!1, !1) && (a = !0);
                            else if (5 === n) break;
                        return a
                    }
                    var h, u = e._startTime + c,
                        d = [],
                        p = 0,
                        f = 0 === e._duration;
                    for (o = s.length; --o > -1;)(r = s[o]) === e || r._gc || r._paused || (r._timeline !== e._timeline ? (h = h || X(e, 0, f), 0 === X(r, h, f) && (d[p++] = r)) : u >= r._startTime && r._startTime + r.totalDuration() / r._timeScale > u && ((f || !r._initted) && 2e-10 >= u - r._startTime || (d[p++] = r)));
                    for (o = p; --o > -1;) r = d[o], 2 === n && r._kill(i, t) && (a = !0), (2 !== n || !r._firstPT && r._initted) && r._enabled(!1, !1) && (a = !0);
                    return a
                },
                X = function(t, e, i) {
                    for (var n = t._timeline, s = n._timeScale, o = t._startTime; n._timeline;) {
                        if (o += n._startTime, s *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return o /= s, o > e ? o - e : i && o === e || !t._initted && 2 * c > o - e ? c : (o += t.totalDuration() / t._timeScale / s) > e + c ? 0 : o - e - c
                };
            o._init = function() {
                var t, e, i, n, s, o = this.vars,
                    a = this._overwrittenProps,
                    r = this._duration,
                    l = !!o.immediateRender,
                    h = o.ease;
                if (o.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {};
                    for (n in o.startAt) s[n] = o.startAt[n];
                    if (s.overwrite = !1, s.immediateRender = !0, s.lazy = l && o.lazy !== !1, s.startAt = s.delay = null, this._startAt = P.to(this.target, 0, s), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== r) return
                } else if (o.runBackwards && 0 !== r)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        i = {};
                        for (n in o) R[n] && "autoCSS" !== n || (i[n] = o[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && o.lazy !== !1, i.immediateRender = l, this._startAt = P.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1)
                    }
                if (this._ease = h = h ? h instanceof y ? h : "function" == typeof h ? new y(h, o.easeParams) : w[h] || P.defaultEase : P.defaultEase, o.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && P._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, o._initProps = function(e, i, n, s) {
                var o, a, r, l, h, c;
                if (null == e) return !1;
                H[e._gsTweenID] && B(), this.vars.css || e.style && e !== t && e.nodeType && j.css && this.vars.autoCSS !== !1 && F(this.vars, e);
                for (o in this.vars) {
                    if (c = this.vars[o], R[o]) c && (c instanceof Array || c.push && p(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this));
                    else if (j[o] && (l = new j[o])._onInitTween(e, this.vars[o], this)) {
                        for (this._firstPT = h = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: o,
                                pg: !0,
                                pr: l._priority
                            }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (r = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[o] = h = {
                        _next: this._firstPT,
                        t: e,
                        p: o,
                        f: "function" == typeof e[o],
                        n: o,
                        pg: !1,
                        pr: 0
                    }, h.s = h.f ? e[o.indexOf("set") || "function" != typeof e["get" + o.substr(3)] ? o : "get" + o.substr(3)]() : parseFloat(e[o]), h.c = "string" == typeof c && "=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * Number(c.substr(2)) : Number(c) - h.s || 0;
                    h && h._next && (h._next._prev = h)
                }
                return s && this._kill(s, e) ? this._initProps(e, i, n, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && U(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, s)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (H[e._gsTweenID] = !0), r)
            }, o.render = function(t, e, i) {
                var n, s, o, a, r = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, s = "onComplete"), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === c) && h !== t && (i = !0, h > c && (s = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : c);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== r || 0 === l && h > 0 && h !== c) && (s = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : c)) : this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / l,
                        d = this._easeType,
                        p = this._easePower;
                    (1 === d || 3 === d && u >= .5) && (u = 1 - u), 3 === d && (u *= 2), 1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u), this.ratio = 1 === d ? 1 - u : 2 === d ? u : .5 > t / l ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== r || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = r, this._rawPrevTime = h, N.push(this), void(this._lazy = t);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== r && t >= 0 && (this._active = !0), 0 === r && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || b))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._time !== r || n) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || b)), s && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this.vars[s].apply(this.vars[s + "Scope"] || this, this.vars[s + "Params"] || b), 0 === l && this._rawPrevTime === c && a !== c && (this._rawPrevTime = 0))
                }
            }, o._kill = function(t, e) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : P.selector(e) || e;
                var i, n, s, o, a, r, l, h;
                if ((p(e) || M(e)) && "number" != typeof e[0])
                    for (i = e.length; --i > -1;) this._kill(t, e[i]) && (r = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; --i > -1;)
                            if (e === this._targets[i]) {
                                a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        l = t || a, h = t !== n && "all" !== n && t !== a && ("object" != typeof t || !t._tempKill);
                        for (s in l)(o = a[s]) && (o.pg && o.t._kill(l) && (r = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), h && (n[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return r
            }, o.invalidate = function() {
                return this._notifyPluginsOfEnabled && P._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = !1, this._propLookup = this._targets ? {} : [], this
            }, o._enabled = function(t, e) {
                if (r || a.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = Y(n[i], this, !0);
                    else this._siblings = Y(this.target, this, !0)
                }
                return E.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? P._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, P.to = function(t, e, i) {
                return new P(t, e, i)
            }, P.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new P(t, e, i)
            }, P.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new P(t, e, n)
            }, P.delayedCall = function(t, e, i, n, s) {
                return new P(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: n,
                    immediateRender: !1,
                    useFrames: s,
                    overwrite: 0
                })
            }, P.set = function(t, e) {
                return new P(t, 0, e)
            }, P.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : P.selector(t) || t;
                var i, n, s, o;
                if ((p(t) || M(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(P.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (o = n[i], s = i; --s > -1;) o === n[s] && n.splice(i, 1)
                } else
                    for (n = Y(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, P.killTweensOf = P.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = P.getTweensOf(t, e), s = n.length; --s > -1;) n[s]._kill(i, t)
            };
            var Q = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype
            }, !0);
            if (o = Q.prototype, Q.version = "1.10.1", Q.API = 2, o._firstPT = null, o._addTween = function(t, e, i, n, s, o) {
                    var a, r;
                    return null != n && (a = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - i : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = r = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: a,
                        f: "function" == typeof t[e],
                        n: s || e,
                        r: o
                    }, r._next && (r._next._prev = r), r) : void 0
                }, o.setRatio = function(t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, o._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, o._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, P._onPluginEvent = function(t, e) {
                    var i, n, s, o, a, r = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; r;) {
                            for (a = r._next, n = s; n && n.pr > r.pr;) n = n._next;
                            (r._prev = n ? n._prev : o) ? r._prev._next = r: s = r, (r._next = n) ? n._prev = r : o = r, r = a
                        }
                        r = e._firstPT = s
                    }
                    for (; r;) r.pg && "function" == typeof r.t[t] && r.t[t]() && (i = !0), r = r._next;
                    return i
                }, Q.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === Q.API && (j[(new t[e])._propName] = t[e]);
                    return !0
                }, g.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        s = t.overwriteProps,
                        o = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            Q.call(this, i, n), this._overwriteProps = s || []
                        }, t.global === !0),
                        r = a.prototype = new Q(i);
                    r.constructor = a, a.API = t.API;
                    for (e in o) "function" == typeof t[e] && (r[o[e]] = t[e]);
                    return a.version = t.version, Q.activate([a]), a
                }, n = t._gsQueue) {
                for (s = 0; n.length > s; s++) n[s]();
                for (o in f) f[o].func || t.console.log("GSAP encountered missing dependency: com.greensock." + o)
            }
            r = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite"),
    function() {
        $(document).on("page:change", function() {
            return null != window._gaq ? _gaq.push(["_trackPageview"]) : null != window.pageTracker ? pageTracker._trackPageview() : void 0
        })
    }.call(this),
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this), window.onload = function() {
        function t() {
            u = window.innerWidth, d = window.innerHeight, v = {
                x: u / 2,
                y: d / 2
            }, p = document.getElementById("large-header"), p.style.height = d + "px", f = document.getElementById("demo-canvas"), f.width = u, f.height = d, m = f.getContext("2d"), g = [];
            for (var t = 0; u > t; t += u / 20)
                for (var e = 0; d > e; e += d / 20) {
                    var i = t + Math.random() * u / 20,
                        n = e + Math.random() * d / 20,
                        s = {
                            x: i,
                            originX: i,
                            y: n,
                            originY: n
                        };
                    g.push(s)
                }
            for (var o = 0; o < g.length; o++) {
                for (var a = [], r = g[o], l = 0; l < g.length; l++) {
                    var _ = g[l];
                    if (r != _) {
                        for (var b = !1, y = 0; 5 > y; y++) b || void 0 == a[y] && (a[y] = _, b = !0);
                        for (var y = 0; 5 > y; y++) b || c(r, _) < c(r, a[y]) && (a[y] = _, b = !0)
                    }
                }
                r.closest = a
            }
            for (var o in g) {
                var w = new h(g[o], 2 + 2 * Math.random(), "rgba(255,255,255,0.3)");
                g[o].circle = w
            }
        }

        function e() {
            "ontouchstart" in window || window.addEventListener("mousemove", i), window.addEventListener("scroll", n), window.addEventListener("resize", s)
        }

        function i(t) {
            var e = posy = 0;
            t.pageX || t.pageY ? (e = t.pageX, posy = t.pageY) : (t.clientX || t.clientY) && (e = t.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, posy = t.clientY + document.body.scrollTop + document.documentElement.scrollTop), v.x = e, v.y = posy
        }

        function n() {
            _ = document.body.scrollTop > d ? !1 : !0
        }

        function s() {
            u = window.innerWidth, d = window.innerHeight, p.style.height = d + "px", f.width = u, f.height = d
        }

        function o() {
            a();
            for (var t in g) r(g[t])
        }

        function a() {
            if (_) {
                m.clearRect(0, 0, u, d);
                for (var t in g) Math.abs(c(v, g[t])) < 4e3 ? (g[t].active = .3, g[t].circle.active = .6) : Math.abs(c(v, g[t])) < 2e4 ? (g[t].active = .1, g[t].circle.active = .3) : Math.abs(c(v, g[t])) < 4e4 ? (g[t].active = .02, g[t].circle.active = .1) : (g[t].active = 0, g[t].circle.active = 0), l(g[t]), g[t].circle.draw()
            }
            requestAnimationFrame(a)
        }

        function r(t) {
            TweenLite.to(t, 1 + 1 * Math.random(), {
                x: t.originX - 50 + 100 * Math.random(),
                y: t.originY - 50 + 100 * Math.random(),
                ease: Circ.easeInOut,
                onComplete: function() {
                    r(t)
                }
            })
        }

        function l(t) {
            if (t.active)
                for (var e in t.closest) m.beginPath(), m.moveTo(t.x, t.y), m.lineTo(t.closest[e].x, t.closest[e].y), m.strokeStyle = "rgba(156,217,249," + t.active + ")", m.stroke()
        }

        function h(t, e, i) {
            var n = this;
            ! function() {
                n.pos = t || null, n.radius = e || null, n.color = i || null
            }(), this.draw = function() {
                n.active && (m.beginPath(), m.arc(n.pos.x, n.pos.y, n.radius, 0, 2 * Math.PI, !1), m.fillStyle = "rgba(156,217,249," + n.active + ")", m.fill())
            }
        }

        function c(t, e) {
            return Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)
        }
        var u, d, p, f, m, g, v, _ = !0;
        t(), o(), e()
    }, $(document).ready(function() {
        $("#companies-dropdown").ddslick({
            width: 400,
            onSelected: function(t) {
                var e = t.selectedIndex;
                console.log("selectedIndex: ", e), $("#company-field").val(t.selectedIndex)
            }
        })
    }), $(document).ready(function() {
        $("select").change(function() {
            console.log("changed");
            var t = "";
            $("select option:selected").each(function() {
                t = $(this).text()
            }), console.log(t + " selected");
            var e = {
                service_name: t
            };
            $.ajax({
                url: "/demo_get_companies",
                data: e,
                success: function(t) {
                    console.log("success! " + t);
                    for (var e = t.company_urls, i = t.count, n = "<ul>", s = e.length, o = 0; s > o; o++) {
                        var a = e[o],
                            r = '<a href="' + a + '">' + a + "</a>";
                        n += "<li>" + r + "</li>"
                    }
                    i > 0 && (n += "<li>Plus " + i + " more..."), n += "</ul>", $("#companies-using").html("<div><ul>" + n + "</ul></div>")
                }
            })
        }).change()
    }), $(document).ready(function() {
        var t = 0;
        progress(t, $("#progressBar"));
        var e = 500,
            i = 20,
            n = e / (10 * i);
        console.log("percentInterval: " + n), $("#progressBar").hide(), $("#services-form").submit(function() {
            console.log("submit pressed"), $("#progressBar").show(), $("#servicesSubmitButton").prop("disabled", !0), $("#servicesUsing").html(""), t = 0, progress(t, $("#progressBar")), interval = setInterval(function() {
                t += n, t >= 100 ? (clearInterval(interval), $("#servicesSubmitButton").prop("disabled", !1)) : progress(t, $("#progressBar"))
            }, e);
            var i = {
                url: $("#services-url-tag").val()
            };
            return $.ajax({
                url: "/demo_get_services",
                data: i,
                success: function(e) {
                    var i = e.services;
                    clearInterval(interval), t = 100, progress(t, $("#progressBar")), $("#servicesSubmitButton").prop("disabled", !1);
                    var n = i.length;
                    if (0 == n) $("#servicesUsing").html("<div><h3>No services found.</h3></div>");
                    else {
                        for (var s = "<ul>", o = 0; n > o; o++) s += "<li>" + i[o] + "</li>";
                        s += "</ul>", $("#servicesUsing").html("<div><ul>" + s + "</ul></div>")
                    }
                }
            }), !1
        })
    }),
    function(t) {
        function e(t, e) {
            var i = t.data("ddslick"),
                o = t.find(".dd-selected"),
                a = o.siblings(".dd-selected-value"),
                r = (t.find(".dd-options"), o.siblings(".dd-pointer"), t.find(".dd-option").eq(e)),
                l = r.closest("li"),
                h = i.settings,
                c = i.settings.data[e];
            t.find(".dd-option").removeClass("dd-option-selected"), r.addClass("dd-option-selected"), i.selectedIndex = e, i.selectedItem = l, i.selectedData = c, o.html(h.showSelectedHTML ? (c.imageSrc ? '<img class="dd-selected-image' + ("right" == h.imagePosition ? " dd-image-right" : "") + '" src="' + c.imageSrc + '" />' : "") + (c.text ? '<label class="dd-selected-text">' + c.text + "</label>" : "") + (c.description ? '<small class="dd-selected-description dd-desc' + (h.truncateDescription ? " dd-selected-description-truncated" : "") + '" >' + c.description + "</small>" : "") : c.text), a.val(c.value), i.original.val(c.value), t.data("ddslick", i), n(t), s(t), "function" == typeof h.onSelected && h.onSelected.call(this, i)
        }

        function i(e) {
            var i = e.find(".dd-select"),
                n = i.siblings(".dd-options"),
                s = i.find(".dd-pointer"),
                a = n.is(":visible");
            t(".dd-click-off-close").not(n).slideUp(50), t(".dd-pointer").removeClass("dd-pointer-up"), a ? (n.slideUp("fast"), s.removeClass("dd-pointer-up")) : (n.slideDown("fast"), s.addClass("dd-pointer-up")), o(e)
        }

        function n(t) {
            t.find(".dd-options").slideUp(50), t.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up")
        }

        function s(t) {
            var e = t.find(".dd-select").css("height"),
                i = t.find(".dd-selected-description"),
                n = t.find(".dd-selected-image");
            i.length <= 0 && n.length > 0 && t.find(".dd-selected-text").css("lineHeight", e)
        }

        function o(e) {
            e.find(".dd-option").each(function() {
                var i = t(this),
                    n = i.css("height"),
                    s = i.find(".dd-option-description"),
                    o = e.find(".dd-option-image");
                s.length <= 0 && o.length > 0 && i.find(".dd-option-text").css("lineHeight", n)
            })
        }
        t.fn.ddslick = function(e) {
            return a[e] ? a[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void t.error("Method " + e + " does not exists.") : a.init.apply(this, arguments)
        };
        var a = {},
            r = {
                data: [],
                keepJSONItemsOnTop: !1,
                width: 260,
                height: null,
                background: "#eee",
                selectText: "",
                defaultSelectedIndex: null,
                truncateDescription: !0,
                imagePosition: "left",
                showSelectedHTML: !0,
                clickOffToClose: !0,
                onSelected: function() {}
            },
            l = '<div class="dd-select"><input class="dd-selected-value" type="hidden" /><a class="dd-selected"></a><span class="dd-pointer dd-pointer-down"></span></div>',
            h = '<ul class="dd-options"></ul>',
            c = '<style id="css-ddslick" type="text/css">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer;}.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding:10px; font-weight:bold;}.dd-pointer{ width:0; height:0; position:absolute; right:10px; top:50%; margin-top:-3px;}.dd-pointer-down{ border:solid 5px transparent; border-top:solid 5px #000; }.dd-pointer-up{border:solid 5px transparent !important; border-bottom:solid 5px #000 !important; margin-top:-8px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:2000; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:10px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; }.dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:64px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{ position:relative;}\u200b .dd-selected-text { font-weight:bold}\u200b</style>';
        t("#css-ddslick").length <= 0 && t(c).appendTo("head"), a.init = function(n) {
            var n = t.extend({}, r, n);
            return this.each(function() {
                var s = t(this),
                    o = s.data("ddslick");
                if (!o) {
                    {
                        var a = [];
                        n.data
                    }
                    s.find("option").each(function() {
                        var e = t(this),
                            i = e.data();
                        a.push({
                            text: t.trim(e.text()),
                            value: e.val(),
                            selected: e.is(":selected"),
                            description: i.description,
                            imageSrc: i.imagesrc
                        })
                    }), n.keepJSONItemsOnTop ? t.merge(n.data, a) : n.data = t.merge(a, n.data);
                    var r = s,
                        c = t('<div id="' + s.attr("id") + '"></div>');
                    s.replaceWith(c), s = c, s.addClass("dd-container").append(l).append(h);
                    var a = s.find(".dd-select"),
                        u = s.find(".dd-options");
                    u.css({
                        width: n.width
                    }), a.css({
                        width: n.width,
                        background: n.background
                    }), s.css({
                        width: n.width
                    }), null != n.height && u.css({
                        height: n.height,
                        overflow: "auto"
                    }), t.each(n.data, function(t, e) {
                        e.selected && (n.defaultSelectedIndex = t), u.append('<li><a class="dd-option">' + (e.value ? ' <input class="dd-option-value" type="hidden" value="' + e.value + '" />' : "") + (e.imageSrc ? ' <img class="dd-option-image' + ("right" == n.imagePosition ? " dd-image-right" : "") + '" src="' + e.imageSrc + '" />' : "") + (e.text ? ' <label class="dd-option-text">' + e.text + "</label>" : "") + (e.description ? ' <small class="dd-option-description dd-desc">' + e.description + "</small>" : "") + "</a></li>")
                    });
                    var d = {
                        settings: n,
                        original: r,
                        selectedIndex: -1,
                        selectedItem: null,
                        selectedData: null
                    };
                    if (s.data("ddslick", d), n.selectText.length > 0 && null == n.defaultSelectedIndex) s.find(".dd-selected").html(n.selectText);
                    else {
                        var p = null != n.defaultSelectedIndex && n.defaultSelectedIndex >= 0 && n.defaultSelectedIndex < n.data.length ? n.defaultSelectedIndex : 0;
                        e(s, p)
                    }
                    s.find(".dd-select").on("click.ddslick", function() {
                        i(s)
                    }), s.find(".dd-option").on("click.ddslick", function() {
                        e(s, t(this).closest("li").index())
                    }), n.clickOffToClose && (u.addClass("dd-click-off-close"), s.on("click.ddslick", function(t) {
                        t.stopPropagation()
                    }), t("body").on("click", function() {
                        t(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up")
                    }))
                }
            })
        }, a.select = function(i) {
            return this.each(function() {
                i.index && e(t(this), i.index)
            })
        }, a.open = function() {
            return this.each(function() {
                var e = t(this),
                    n = e.data("ddslick");
                n && i(e)
            })
        }, a.close = function() {
            return this.each(function() {
                var e = t(this),
                    i = e.data("ddslick");
                i && n(e)
            })
        }, a.destroy = function() {
            return this.each(function() {
                var e = t(this),
                    i = e.data("ddslick");
                if (i) {
                    var n = i.original;
                    e.removeData("ddslick").unbind(".ddslick").replaceWith(n)
                }
            })
        }
    }(jQuery),
    function() {}.call(this),
    function() {}.call(this),
    function() {
        for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
            var i = (new Date).getTime(),
                n = Math.max(0, 16 - (i - t)),
                s = window.setTimeout(function() {
                    e(i + n)
                }, n);
            return t = i + n, s
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }(),
    function() {}.call(this),
    function() {}.call(this),
    function() {}.call(this);
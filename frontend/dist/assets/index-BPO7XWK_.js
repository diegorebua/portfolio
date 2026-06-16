(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
    new MutationObserver((r) => {
        for (const i of r)
            if (i.type === "childList")
                for (const o of i.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
    }).observe(document, { childList: !0, subtree: !0 });
    function s(r) {
        const i = {};
        return (
            r.integrity && (i.integrity = r.integrity),
            r.referrerPolicy && (i.referrerPolicy = r.referrerPolicy),
            r.crossOrigin === "use-credentials"
                ? (i.credentials = "include")
                : r.crossOrigin === "anonymous"
                    ? (i.credentials = "omit")
                    : (i.credentials = "same-origin"),
            i
        );
    }
    function n(r) {
        if (r.ep) return;
        r.ep = !0;
        const i = s(r);
        fetch(r.href, i);
    }
})();
/**
 * @vue/shared v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function js(e) {
    const t = Object.create(null);
    for (const s of e.split(",")) t[s] = 1;
    return (s) => s in t;
}
const z = {},
    ot = [],
    Me = () => { },
    Hr = () => !1,
    Xt = (e) =>
        e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    Fs = (e) => e.startsWith("onUpdate:"),
    se = Object.assign,
    Ls = (e, t) => {
        const s = e.indexOf(t);
        s > -1 && e.splice(s, 1);
    },
    Vr = Object.prototype.hasOwnProperty,
    L = (e, t) => Vr.call(e, t),
    D = Array.isArray,
    lt = (e) => Zt(e) === "[object Map]",
    jn = (e) => Zt(e) === "[object Set]",
    R = (e) => typeof e == "function",
    Y = (e) => typeof e == "string",
    He = (e) => typeof e == "symbol",
    U = (e) => e !== null && typeof e == "object",
    Fn = (e) => (U(e) || R(e)) && R(e.then) && R(e.catch),
    Ln = Object.prototype.toString,
    Zt = (e) => Ln.call(e),
    Br = (e) => Zt(e).slice(8, -1),
    Nn = (e) => Zt(e) === "[object Object]",
    Ns = (e) => Y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    _t = js(
        ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
    ),
    es = (e) => {
        const t = Object.create(null);
        return (s) => t[s] || (t[s] = e(s));
    },
    Kr = /-(\w)/g,
    ze = es((e) => e.replace(Kr, (t, s) => (s ? s.toUpperCase() : ""))),
    Ur = /\B([A-Z])/g,
    Ve = es((e) => e.replace(Ur, "-$1").toLowerCase()),
    $n = es((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    us = es((e) => (e ? `on${$n(e)}` : "")),
    $e = (e, t) => !Object.is(e, t),
    Vt = (e, ...t) => {
        for (let s = 0; s < e.length; s++) e[s](...t);
    },
    zn = (e, t, s, n = !1) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            writable: n,
            value: s,
        });
    },
    Ss = (e) => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t;
    };
let on;
const ts = () =>
    on ||
    (on =
        typeof globalThis < "u"
            ? globalThis
            : typeof self < "u"
                ? self
                : typeof window < "u"
                    ? window
                    : typeof global < "u"
                        ? global
                        : {});
function ss(e) {
    if (D(e)) {
        const t = {};
        for (let s = 0; s < e.length; s++) {
            const n = e[s],
                r = Y(n) ? Gr(n) : ss(n);
            if (r) for (const i in r) t[i] = r[i];
        }
        return t;
    } else if (Y(e) || U(e)) return e;
}
const Wr = /;(?![^(]*\))/g,
    Jr = /:([^]+)/,
    qr = /\/\*[^]*?\*\//g;
function Gr(e) {
    const t = {};
    return (
        e
            .replace(qr, "")
            .split(Wr)
            .forEach((s) => {
                if (s) {
                    const n = s.split(Jr);
                    n.length > 1 && (t[n[0].trim()] = n[1].trim());
                }
            }),
        t
    );
}
function E(e) {
    let t = "";
    if (Y(e)) t = e;
    else if (D(e))
        for (let s = 0; s < e.length; s++) {
            const n = E(e[s]);
            n && (t += n + " ");
        }
    else if (U(e)) for (const s in e) e[s] && (t += s + " ");
    return t.trim();
}
const Yr =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Qr = js(Yr);
function Hn(e) {
    return !!e || e === "";
}
const Vn = (e) => !!(e && e.__v_isRef === !0),
    ue = (e) =>
        Y(e)
            ? e
            : e == null
                ? ""
                : D(e) || (U(e) && (e.toString === Ln || !R(e.toString)))
                    ? Vn(e)
                        ? ue(e.value)
                        : JSON.stringify(e, Bn, 2)
                    : String(e),
    Bn = (e, t) =>
        Vn(t)
            ? Bn(e, t.value)
            : lt(t)
                ? {
                    [`Map(${t.size})`]: [...t.entries()].reduce(
                        (s, [n, r], i) => ((s[ds(n, i) + " =>"] = r), s),
                        {},
                    ),
                }
                : jn(t)
                    ? { [`Set(${t.size})`]: [...t.values()].map((s) => ds(s)) }
                    : He(t)
                        ? ds(t)
                        : U(t) && !D(t) && !Nn(t)
                            ? String(t)
                            : t,
    ds = (e, t = "") => {
        var s;
        return He(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e;
    };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let he;
class Xr {
    constructor(t = !1) {
        ((this.detached = t),
            (this._active = !0),
            (this.effects = []),
            (this.cleanups = []),
            (this._isPaused = !1),
            (this.parent = he),
            !t &&
            he &&
            (this.index = (he.scopes || (he.scopes = [])).push(this) - 1));
    }
    get active() {
        return this._active;
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, s;
            if (this.scopes)
                for (t = 0, s = this.scopes.length; t < s; t++) this.scopes[t].pause();
            for (t = 0, s = this.effects.length; t < s; t++) this.effects[t].pause();
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, s;
            if (this.scopes)
                for (t = 0, s = this.scopes.length; t < s; t++) this.scopes[t].resume();
            for (t = 0, s = this.effects.length; t < s; t++) this.effects[t].resume();
        }
    }
    run(t) {
        if (this._active) {
            const s = he;
            try {
                return ((he = this), t());
            } finally {
                he = s;
            }
        }
    }
    on() {
        he = this;
    }
    off() {
        he = this.parent;
    }
    stop(t) {
        if (this._active) {
            this._active = !1;
            let s, n;
            for (s = 0, n = this.effects.length; s < n; s++) this.effects[s].stop();
            for (this.effects.length = 0, s = 0, n = this.cleanups.length; s < n; s++)
                this.cleanups[s]();
            if (((this.cleanups.length = 0), this.scopes)) {
                for (s = 0, n = this.scopes.length; s < n; s++) this.scopes[s].stop(!0);
                this.scopes.length = 0;
            }
            if (!this.detached && this.parent && !t) {
                const r = this.parent.scopes.pop();
                r &&
                    r !== this &&
                    ((this.parent.scopes[this.index] = r), (r.index = this.index));
            }
            this.parent = void 0;
        }
    }
}
function Zr() {
    return he;
}
let B;
const hs = new WeakSet();
class Kn {
    constructor(t) {
        ((this.fn = t),
            (this.deps = void 0),
            (this.depsTail = void 0),
            (this.flags = 5),
            (this.next = void 0),
            (this.cleanup = void 0),
            (this.scheduler = void 0),
            he && he.active && he.effects.push(this));
    }
    pause() {
        this.flags |= 64;
    }
    resume() {
        this.flags & 64 &&
            ((this.flags &= -65), hs.has(this) && (hs.delete(this), this.trigger()));
    }
    notify() {
        (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Wn(this);
    }
    run() {
        if (!(this.flags & 1)) return this.fn();
        ((this.flags |= 2), ln(this), Jn(this));
        const t = B,
            s = be;
        ((B = this), (be = !0));
        try {
            return this.fn();
        } finally {
            (qn(this), (B = t), (be = s), (this.flags &= -3));
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) Hs(t);
            ((this.deps = this.depsTail = void 0),
                ln(this),
                this.onStop && this.onStop(),
                (this.flags &= -2));
        }
    }
    trigger() {
        this.flags & 64
            ? hs.add(this)
            : this.scheduler
                ? this.scheduler()
                : this.runIfDirty();
    }
    runIfDirty() {
        Cs(this) && this.run();
    }
    get dirty() {
        return Cs(this);
    }
}
let Un = 0,
    yt,
    wt;
function Wn(e, t = !1) {
    if (((e.flags |= 8), t)) {
        ((e.next = wt), (wt = e));
        return;
    }
    ((e.next = yt), (yt = e));
}
function $s() {
    Un++;
}
function zs() {
    if (--Un > 0) return;
    if (wt) {
        let t = wt;
        for (wt = void 0; t;) {
            const s = t.next;
            ((t.next = void 0), (t.flags &= -9), (t = s));
        }
    }
    let e;
    for (; yt;) {
        let t = yt;
        for (yt = void 0; t;) {
            const s = t.next;
            if (((t.next = void 0), (t.flags &= -9), t.flags & 1))
                try {
                    t.trigger();
                } catch (n) {
                    e || (e = n);
                }
            t = s;
        }
    }
    if (e) throw e;
}
function Jn(e) {
    for (let t = e.deps; t; t = t.nextDep)
        ((t.version = -1),
            (t.prevActiveLink = t.dep.activeLink),
            (t.dep.activeLink = t));
}
function qn(e) {
    let t,
        s = e.depsTail,
        n = s;
    for (; n;) {
        const r = n.prevDep;
        (n.version === -1 ? (n === s && (s = r), Hs(n), ei(n)) : (t = n),
            (n.dep.activeLink = n.prevActiveLink),
            (n.prevActiveLink = void 0),
            (n = r));
    }
    ((e.deps = t), (e.depsTail = s));
}
function Cs(e) {
    for (let t = e.deps; t; t = t.nextDep)
        if (
            t.dep.version !== t.version ||
            (t.dep.computed && (Gn(t.dep.computed) || t.dep.version !== t.version))
        )
            return !0;
    return !!e._dirty;
}
function Gn(e) {
    if (
        (e.flags & 4 && !(e.flags & 16)) ||
        ((e.flags &= -17), e.globalVersion === Mt)
    )
        return;
    e.globalVersion = Mt;
    const t = e.dep;
    if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !Cs(e))) {
        e.flags &= -3;
        return;
    }
    const s = B,
        n = be;
    ((B = e), (be = !0));
    try {
        Jn(e);
        const r = e.fn(e._value);
        (t.version === 0 || $e(r, e._value)) && ((e._value = r), t.version++);
    } catch (r) {
        throw (t.version++, r);
    } finally {
        ((B = s), (be = n), qn(e), (e.flags &= -3));
    }
}
function Hs(e, t = !1) {
    const { dep: s, prevSub: n, nextSub: r } = e;
    if (
        (n && ((n.nextSub = r), (e.prevSub = void 0)),
            r && ((r.prevSub = n), (e.nextSub = void 0)),
            s.subs === e && ((s.subs = n), !n && s.computed))
    ) {
        s.computed.flags &= -5;
        for (let i = s.computed.deps; i; i = i.nextDep) Hs(i, !0);
    }
    !t && !--s.sc && s.map && s.map.delete(s.key);
}
function ei(e) {
    const { prevDep: t, nextDep: s } = e;
    (t && ((t.nextDep = s), (e.prevDep = void 0)),
        s && ((s.prevDep = t), (e.nextDep = void 0)));
}
let be = !0;
const Yn = [];
function Be() {
    (Yn.push(be), (be = !1));
}
function Ke() {
    const e = Yn.pop();
    be = e === void 0 ? !0 : e;
}
function ln(e) {
    const { cleanup: t } = e;
    if (((e.cleanup = void 0), t)) {
        const s = B;
        B = void 0;
        try {
            t();
        } finally {
            B = s;
        }
    }
}
let Mt = 0;
class ti {
    constructor(t, s) {
        ((this.sub = t),
            (this.dep = s),
            (this.version = s.version),
            (this.nextDep =
                this.prevDep =
                this.nextSub =
                this.prevSub =
                this.prevActiveLink =
                void 0));
    }
}
class Vs {
    constructor(t) {
        ((this.computed = t),
            (this.version = 0),
            (this.activeLink = void 0),
            (this.subs = void 0),
            (this.map = void 0),
            (this.key = void 0),
            (this.sc = 0));
    }
    track(t) {
        if (!B || !be || B === this.computed) return;
        let s = this.activeLink;
        if (s === void 0 || s.sub !== B)
            ((s = this.activeLink = new ti(B, this)),
                B.deps
                    ? ((s.prevDep = B.depsTail),
                        (B.depsTail.nextDep = s),
                        (B.depsTail = s))
                    : (B.deps = B.depsTail = s),
                Qn(s));
        else if (s.version === -1 && ((s.version = this.version), s.nextDep)) {
            const n = s.nextDep;
            ((n.prevDep = s.prevDep),
                s.prevDep && (s.prevDep.nextDep = n),
                (s.prevDep = B.depsTail),
                (s.nextDep = void 0),
                (B.depsTail.nextDep = s),
                (B.depsTail = s),
                B.deps === s && (B.deps = n));
        }
        return s;
    }
    trigger(t) {
        (this.version++, Mt++, this.notify(t));
    }
    notify(t) {
        $s();
        try {
            for (let s = this.subs; s; s = s.prevSub)
                s.sub.notify() && s.sub.dep.notify();
        } finally {
            zs();
        }
    }
}
function Qn(e) {
    if ((e.dep.sc++, e.sub.flags & 4)) {
        const t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let n = t.deps; n; n = n.nextDep) Qn(n);
        }
        const s = e.dep.subs;
        (s !== e && ((e.prevSub = s), s && (s.nextSub = e)), (e.dep.subs = e));
    }
}
const Ts = new WeakMap(),
    Ze = Symbol(""),
    Es = Symbol(""),
    Ot = Symbol("");
function Z(e, t, s) {
    if (be && B) {
        let n = Ts.get(e);
        n || Ts.set(e, (n = new Map()));
        let r = n.get(s);
        (r || (n.set(s, (r = new Vs())), (r.map = n), (r.key = s)), r.track());
    }
}
function De(e, t, s, n, r, i) {
    const o = Ts.get(e);
    if (!o) {
        Mt++;
        return;
    }
    const l = (c) => {
        c && c.trigger();
    };
    if (($s(), t === "clear")) o.forEach(l);
    else {
        const c = D(e),
            d = c && Ns(s);
        if (c && s === "length") {
            const u = Number(n);
            o.forEach((g, C) => {
                (C === "length" || C === Ot || (!He(C) && C >= u)) && l(g);
            });
        } else
            switch (
            ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(Ot)), t)
            ) {
                case "add":
                    c ? d && l(o.get("length")) : (l(o.get(Ze)), lt(e) && l(o.get(Es)));
                    break;
                case "delete":
                    c || (l(o.get(Ze)), lt(e) && l(o.get(Es)));
                    break;
                case "set":
                    lt(e) && l(o.get(Ze));
                    break;
            }
    }
    zs();
}
function st(e) {
    const t = F(e);
    return t === e ? t : (Z(t, "iterate", Ot), me(e) ? t : t.map(ee));
}
function ns(e) {
    return (Z((e = F(e)), "iterate", Ot), e);
}
const si = {
    __proto__: null,
    [Symbol.iterator]() {
        return ps(this, Symbol.iterator, ee);
    },
    concat(...e) {
        return st(this).concat(...e.map((t) => (D(t) ? st(t) : t)));
    },
    entries() {
        return ps(this, "entries", (e) => ((e[1] = ee(e[1])), e));
    },
    every(e, t) {
        return Ae(this, "every", e, t, void 0, arguments);
    },
    filter(e, t) {
        return Ae(this, "filter", e, t, (s) => s.map(ee), arguments);
    },
    find(e, t) {
        return Ae(this, "find", e, t, ee, arguments);
    },
    findIndex(e, t) {
        return Ae(this, "findIndex", e, t, void 0, arguments);
    },
    findLast(e, t) {
        return Ae(this, "findLast", e, t, ee, arguments);
    },
    findLastIndex(e, t) {
        return Ae(this, "findLastIndex", e, t, void 0, arguments);
    },
    forEach(e, t) {
        return Ae(this, "forEach", e, t, void 0, arguments);
    },
    includes(...e) {
        return gs(this, "includes", e);
    },
    indexOf(...e) {
        return gs(this, "indexOf", e);
    },
    join(e) {
        return st(this).join(e);
    },
    lastIndexOf(...e) {
        return gs(this, "lastIndexOf", e);
    },
    map(e, t) {
        return Ae(this, "map", e, t, void 0, arguments);
    },
    pop() {
        return mt(this, "pop");
    },
    push(...e) {
        return mt(this, "push", e);
    },
    reduce(e, ...t) {
        return cn(this, "reduce", e, t);
    },
    reduceRight(e, ...t) {
        return cn(this, "reduceRight", e, t);
    },
    shift() {
        return mt(this, "shift");
    },
    some(e, t) {
        return Ae(this, "some", e, t, void 0, arguments);
    },
    splice(...e) {
        return mt(this, "splice", e);
    },
    toReversed() {
        return st(this).toReversed();
    },
    toSorted(e) {
        return st(this).toSorted(e);
    },
    toSpliced(...e) {
        return st(this).toSpliced(...e);
    },
    unshift(...e) {
        return mt(this, "unshift", e);
    },
    values() {
        return ps(this, "values", ee);
    },
};
function ps(e, t, s) {
    const n = ns(e),
        r = n[t]();
    return (
        n !== e &&
        !me(e) &&
        ((r._next = r.next),
            (r.next = () => {
                const i = r._next();
                return (i.value && (i.value = s(i.value)), i);
            })),
        r
    );
}
const ni = Array.prototype;
function Ae(e, t, s, n, r, i) {
    const o = ns(e),
        l = o !== e && !me(e),
        c = o[t];
    if (c !== ni[t]) {
        const g = c.apply(e, i);
        return l ? ee(g) : g;
    }
    let d = s;
    o !== e &&
        (l
            ? (d = function (g, C) {
                return s.call(this, ee(g), C, e);
            })
            : s.length > 2 &&
            (d = function (g, C) {
                return s.call(this, g, C, e);
            }));
    const u = c.call(o, d, n);
    return l && r ? r(u) : u;
}
function cn(e, t, s, n) {
    const r = ns(e);
    let i = s;
    return (
        r !== e &&
        (me(e)
            ? s.length > 3 &&
            (i = function (o, l, c) {
                return s.call(this, o, l, c, e);
            })
            : (i = function (o, l, c) {
                return s.call(this, o, ee(l), c, e);
            })),
        r[t](i, ...n)
    );
}
function gs(e, t, s) {
    const n = F(e);
    Z(n, "iterate", Ot);
    const r = n[t](...s);
    return (r === -1 || r === !1) && Ws(s[0])
        ? ((s[0] = F(s[0])), n[t](...s))
        : r;
}
function mt(e, t, s = []) {
    (Be(), $s());
    const n = F(e)[t].apply(e, s);
    return (zs(), Ke(), n);
}
const ri = js("__proto__,__v_isRef,__isVue"),
    Xn = new Set(
        Object.getOwnPropertyNames(Symbol)
            .filter((e) => e !== "arguments" && e !== "caller")
            .map((e) => Symbol[e])
            .filter(He),
    );
function ii(e) {
    He(e) || (e = String(e));
    const t = F(this);
    return (Z(t, "has", e), t.hasOwnProperty(e));
}
class Zn {
    constructor(t = !1, s = !1) {
        ((this._isReadonly = t), (this._isShallow = s));
    }
    get(t, s, n) {
        if (s === "__v_skip") return t.__v_skip;
        const r = this._isReadonly,
            i = this._isShallow;
        if (s === "__v_isReactive") return !r;
        if (s === "__v_isReadonly") return r;
        if (s === "__v_isShallow") return i;
        if (s === "__v_raw")
            return n === (r ? (i ? gi : nr) : i ? sr : tr).get(t) ||
                Object.getPrototypeOf(t) === Object.getPrototypeOf(n)
                ? t
                : void 0;
        const o = D(t);
        if (!r) {
            let c;
            if (o && (c = si[s])) return c;
            if (s === "hasOwnProperty") return ii;
        }
        const l = Reflect.get(t, s, te(t) ? t : n);
        return (He(s) ? Xn.has(s) : ri(s)) || (r || Z(t, "get", s), i)
            ? l
            : te(l)
                ? o && Ns(s)
                    ? l
                    : l.value
                : U(l)
                    ? r
                        ? rr(l)
                        : Ks(l)
                    : l;
    }
}
class er extends Zn {
    constructor(t = !1) {
        super(!1, t);
    }
    set(t, s, n, r) {
        let i = t[s];
        if (!this._isShallow) {
            const c = et(i);
            if (
                (!me(n) && !et(n) && ((i = F(i)), (n = F(n))), !D(t) && te(i) && !te(n))
            )
                return c ? !1 : ((i.value = n), !0);
        }
        const o = D(t) && Ns(s) ? Number(s) < t.length : L(t, s),
            l = Reflect.set(t, s, n, te(t) ? t : r);
        return (
            t === F(r) && (o ? $e(n, i) && De(t, "set", s, n) : De(t, "add", s, n)),
            l
        );
    }
    deleteProperty(t, s) {
        const n = L(t, s);
        t[s];
        const r = Reflect.deleteProperty(t, s);
        return (r && n && De(t, "delete", s, void 0), r);
    }
    has(t, s) {
        const n = Reflect.has(t, s);
        return ((!He(s) || !Xn.has(s)) && Z(t, "has", s), n);
    }
    ownKeys(t) {
        return (Z(t, "iterate", D(t) ? "length" : Ze), Reflect.ownKeys(t));
    }
}
class oi extends Zn {
    constructor(t = !1) {
        super(!0, t);
    }
    set(t, s) {
        return !0;
    }
    deleteProperty(t, s) {
        return !0;
    }
}
const li = new er(),
    ci = new oi(),
    ai = new er(!0);
const Ms = (e) => e,
    $t = (e) => Reflect.getPrototypeOf(e);
function fi(e, t, s) {
    return function (...n) {
        const r = this.__v_raw,
            i = F(r),
            o = lt(i),
            l = e === "entries" || (e === Symbol.iterator && o),
            c = e === "keys" && o,
            d = r[e](...n),
            u = s ? Ms : t ? Os : ee;
        return (
            !t && Z(i, "iterate", c ? Es : Ze),
            {
                next() {
                    const { value: g, done: C } = d.next();
                    return C
                        ? { value: g, done: C }
                        : { value: l ? [u(g[0]), u(g[1])] : u(g), done: C };
                },
                [Symbol.iterator]() {
                    return this;
                },
            }
        );
    };
}
function zt(e) {
    return function (...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this;
    };
}
function ui(e, t) {
    const s = {
        get(r) {
            const i = this.__v_raw,
                o = F(i),
                l = F(r);
            e || ($e(r, l) && Z(o, "get", r), Z(o, "get", l));
            const { has: c } = $t(o),
                d = t ? Ms : e ? Os : ee;
            if (c.call(o, r)) return d(i.get(r));
            if (c.call(o, l)) return d(i.get(l));
            i !== o && i.get(r);
        },
        get size() {
            const r = this.__v_raw;
            return (!e && Z(F(r), "iterate", Ze), Reflect.get(r, "size", r));
        },
        has(r) {
            const i = this.__v_raw,
                o = F(i),
                l = F(r);
            return (
                e || ($e(r, l) && Z(o, "has", r), Z(o, "has", l)),
                r === l ? i.has(r) : i.has(r) || i.has(l)
            );
        },
        forEach(r, i) {
            const o = this,
                l = o.__v_raw,
                c = F(l),
                d = t ? Ms : e ? Os : ee;
            return (
                !e && Z(c, "iterate", Ze),
                l.forEach((u, g) => r.call(i, d(u), d(g), o))
            );
        },
    };
    return (
        se(
            s,
            e
                ? {
                    add: zt("add"),
                    set: zt("set"),
                    delete: zt("delete"),
                    clear: zt("clear"),
                }
                : {
                    add(r) {
                        !t && !me(r) && !et(r) && (r = F(r));
                        const i = F(this);
                        return (
                            $t(i).has.call(i, r) || (i.add(r), De(i, "add", r, r)),
                            this
                        );
                    },
                    set(r, i) {
                        !t && !me(i) && !et(i) && (i = F(i));
                        const o = F(this),
                            { has: l, get: c } = $t(o);
                        let d = l.call(o, r);
                        d || ((r = F(r)), (d = l.call(o, r)));
                        const u = c.call(o, r);
                        return (
                            o.set(r, i),
                            d ? $e(i, u) && De(o, "set", r, i) : De(o, "add", r, i),
                            this
                        );
                    },
                    delete(r) {
                        const i = F(this),
                            { has: o, get: l } = $t(i);
                        let c = o.call(i, r);
                        (c || ((r = F(r)), (c = o.call(i, r))), l && l.call(i, r));
                        const d = i.delete(r);
                        return (c && De(i, "delete", r, void 0), d);
                    },
                    clear() {
                        const r = F(this),
                            i = r.size !== 0,
                            o = r.clear();
                        return (i && De(r, "clear", void 0, void 0), o);
                    },
                },
        ),
        ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
            s[r] = fi(r, e, t);
        }),
        s
    );
}
function Bs(e, t) {
    const s = ui(e, t);
    return (n, r, i) =>
        r === "__v_isReactive"
            ? !e
            : r === "__v_isReadonly"
                ? e
                : r === "__v_raw"
                    ? n
                    : Reflect.get(L(s, r) && r in n ? s : n, r, i);
}
const di = { get: Bs(!1, !1) },
    hi = { get: Bs(!1, !0) },
    pi = { get: Bs(!0, !1) };
const tr = new WeakMap(),
    sr = new WeakMap(),
    nr = new WeakMap(),
    gi = new WeakMap();
function mi(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0;
    }
}
function bi(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : mi(Br(e));
}
function Ks(e) {
    return et(e) ? e : Us(e, !1, li, di, tr);
}
function xi(e) {
    return Us(e, !1, ai, hi, sr);
}
function rr(e) {
    return Us(e, !0, ci, pi, nr);
}
function Us(e, t, s, n, r) {
    if (!U(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
    const i = r.get(e);
    if (i) return i;
    const o = bi(e);
    if (o === 0) return e;
    const l = new Proxy(e, o === 2 ? n : s);
    return (r.set(e, l), l);
}
function ct(e) {
    return et(e) ? ct(e.__v_raw) : !!(e && e.__v_isReactive);
}
function et(e) {
    return !!(e && e.__v_isReadonly);
}
function me(e) {
    return !!(e && e.__v_isShallow);
}
function Ws(e) {
    return e ? !!e.__v_raw : !1;
}
function F(e) {
    const t = e && e.__v_raw;
    return t ? F(t) : e;
}
function vi(e) {
    return (
        !L(e, "__v_skip") && Object.isExtensible(e) && zn(e, "__v_skip", !0),
        e
    );
}
const ee = (e) => (U(e) ? Ks(e) : e),
    Os = (e) => (U(e) ? rr(e) : e);
function te(e) {
    return e ? e.__v_isRef === !0 : !1;
}
function Ne(e) {
    return _i(e, !1);
}
function _i(e, t) {
    return te(e) ? e : new yi(e, t);
}
class yi {
    constructor(t, s) {
        ((this.dep = new Vs()),
            (this.__v_isRef = !0),
            (this.__v_isShallow = !1),
            (this._rawValue = s ? t : F(t)),
            (this._value = s ? t : ee(t)),
            (this.__v_isShallow = s));
    }
    get value() {
        return (this.dep.track(), this._value);
    }
    set value(t) {
        const s = this._rawValue,
            n = this.__v_isShallow || me(t) || et(t);
        ((t = n ? t : F(t)),
            $e(t, s) &&
            ((this._rawValue = t),
                (this._value = n ? t : ee(t)),
                this.dep.trigger()));
    }
}
function xt(e) {
    return te(e) ? e.value : e;
}
const wi = {
    get: (e, t, s) => (t === "__v_raw" ? e : xt(Reflect.get(e, t, s))),
    set: (e, t, s, n) => {
        const r = e[t];
        return te(r) && !te(s) ? ((r.value = s), !0) : Reflect.set(e, t, s, n);
    },
};
function ir(e) {
    return ct(e) ? e : new Proxy(e, wi);
}
class Si {
    constructor(t, s, n) {
        ((this.fn = t),
            (this.setter = s),
            (this._value = void 0),
            (this.dep = new Vs(this)),
            (this.__v_isRef = !0),
            (this.deps = void 0),
            (this.depsTail = void 0),
            (this.flags = 16),
            (this.globalVersion = Mt - 1),
            (this.next = void 0),
            (this.effect = this),
            (this.__v_isReadonly = !s),
            (this.isSSR = n));
    }
    notify() {
        if (((this.flags |= 16), !(this.flags & 8) && B !== this))
            return (Wn(this, !0), !0);
    }
    get value() {
        const t = this.dep.track();
        return (Gn(this), t && (t.version = this.dep.version), this._value);
    }
    set value(t) {
        this.setter && this.setter(t);
    }
}
function Ci(e, t, s = !1) {
    let n, r;
    return (R(e) ? (n = e) : ((n = e.get), (r = e.set)), new Si(n, r, s));
}
const Ht = {},
    Wt = new WeakMap();
let Ye;
function Ti(e, t = !1, s = Ye) {
    if (s) {
        let n = Wt.get(s);
        (n || Wt.set(s, (n = [])), n.push(e));
    }
}
function Ei(e, t, s = z) {
    const {
        immediate: n,
        deep: r,
        once: i,
        scheduler: o,
        augmentJob: l,
        call: c,
    } = s,
        d = (A) => (r ? A : me(A) || r === !1 || r === 0 ? Re(A, 1) : Re(A));
    let u,
        g,
        C,
        T,
        j = !1,
        I = !1;
    if (
        (te(e)
            ? ((g = () => e.value), (j = me(e)))
            : ct(e)
                ? ((g = () => d(e)), (j = !0))
                : D(e)
                    ? ((I = !0),
                        (j = e.some((A) => ct(A) || me(A))),
                        (g = () =>
                            e.map((A) => {
                                if (te(A)) return A.value;
                                if (ct(A)) return d(A);
                                if (R(A)) return c ? c(A, 2) : A();
                            })))
                    : R(e)
                        ? t
                            ? (g = c ? () => c(e, 2) : e)
                            : (g = () => {
                                if (C) {
                                    Be();
                                    try {
                                        C();
                                    } finally {
                                        Ke();
                                    }
                                }
                                const A = Ye;
                                Ye = u;
                                try {
                                    return c ? c(e, 3, [T]) : e(T);
                                } finally {
                                    Ye = A;
                                }
                            })
                        : (g = Me),
            t && r)
    ) {
        const A = g,
            Q = r === !0 ? 1 / 0 : r;
        g = () => Re(A(), Q);
    }
    const X = Zr(),
        $ = () => {
            (u.stop(), X && X.active && Ls(X.effects, u));
        };
    if (i && t) {
        const A = t;
        t = (...Q) => {
            (A(...Q), $());
        };
    }
    let W = I ? new Array(e.length).fill(Ht) : Ht;
    const J = (A) => {
        if (!(!(u.flags & 1) || (!u.dirty && !A)))
            if (t) {
                const Q = u.run();
                if (r || j || (I ? Q.some((Ie, ve) => $e(Ie, W[ve])) : $e(Q, W))) {
                    C && C();
                    const Ie = Ye;
                    Ye = u;
                    try {
                        const ve = [Q, W === Ht ? void 0 : I && W[0] === Ht ? [] : W, T];
                        (c ? c(t, 3, ve) : t(...ve), (W = Q));
                    } finally {
                        Ye = Ie;
                    }
                }
            } else u.run();
    };
    return (
        l && l(J),
        (u = new Kn(g)),
        (u.scheduler = o ? () => o(J, !1) : J),
        (T = (A) => Ti(A, !1, u)),
        (C = u.onStop =
            () => {
                const A = Wt.get(u);
                if (A) {
                    if (c) c(A, 4);
                    else for (const Q of A) Q();
                    Wt.delete(u);
                }
            }),
        t ? (n ? J(!0) : (W = u.run())) : o ? o(J.bind(null, !0), !0) : u.run(),
        ($.pause = u.pause.bind(u)),
        ($.resume = u.resume.bind(u)),
        ($.stop = $),
        $
    );
}
function Re(e, t = 1 / 0, s) {
    if (t <= 0 || !U(e) || e.__v_skip || ((s = s || new Set()), s.has(e)))
        return e;
    if ((s.add(e), t--, te(e))) Re(e.value, t, s);
    else if (D(e)) for (let n = 0; n < e.length; n++) Re(e[n], t, s);
    else if (jn(e) || lt(e))
        e.forEach((n) => {
            Re(n, t, s);
        });
    else if (Nn(e)) {
        for (const n in e) Re(e[n], t, s);
        for (const n of Object.getOwnPropertySymbols(e))
            Object.prototype.propertyIsEnumerable.call(e, n) && Re(e[n], t, s);
    }
    return e;
}
/**
 * @vue/runtime-core v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function Rt(e, t, s, n) {
    try {
        return n ? e(...n) : e();
    } catch (r) {
        rs(r, t, s);
    }
}
function Oe(e, t, s, n) {
    if (R(e)) {
        const r = Rt(e, t, s, n);
        return (
            r &&
            Fn(r) &&
            r.catch((i) => {
                rs(i, t, s);
            }),
            r
        );
    }
    if (D(e)) {
        const r = [];
        for (let i = 0; i < e.length; i++) r.push(Oe(e[i], t, s, n));
        return r;
    }
}
function rs(e, t, s, n = !0) {
    const r = t ? t.vnode : null,
        { errorHandler: i, throwUnhandledErrorInProduction: o } =
            (t && t.appContext.config) || z;
    if (t) {
        let l = t.parent;
        const c = t.proxy,
            d = `https://vuejs.org/error-reference/#runtime-${s}`;
        for (; l;) {
            const u = l.ec;
            if (u) {
                for (let g = 0; g < u.length; g++) if (u[g](e, c, d) === !1) return;
            }
            l = l.parent;
        }
        if (i) {
            (Be(), Rt(i, null, 10, [e, c, d]), Ke());
            return;
        }
    }
    Mi(e, s, r, n, o);
}
function Mi(e, t, s, n = !0, r = !1) {
    if (r) throw e;
    console.error(e);
}
const ie = [];
let Te = -1;
const at = [];
let Fe = null,
    nt = 0;
const or = Promise.resolve();
let Jt = null;
function lr(e) {
    const t = Jt || or;
    return e ? t.then(this ? e.bind(this) : e) : t;
}
function Oi(e) {
    let t = Te + 1,
        s = ie.length;
    for (; t < s;) {
        const n = (t + s) >>> 1,
            r = ie[n],
            i = At(r);
        i < e || (i === e && r.flags & 2) ? (t = n + 1) : (s = n);
    }
    return t;
}
function Js(e) {
    if (!(e.flags & 1)) {
        const t = At(e),
            s = ie[ie.length - 1];
        (!s || (!(e.flags & 2) && t >= At(s)) ? ie.push(e) : ie.splice(Oi(t), 0, e),
            (e.flags |= 1),
            cr());
    }
}
function cr() {
    Jt || (Jt = or.then(fr));
}
function Ai(e) {
    (D(e)
        ? at.push(...e)
        : Fe && e.id === -1
            ? Fe.splice(nt + 1, 0, e)
            : e.flags & 1 || (at.push(e), (e.flags |= 1)),
        cr());
}
function an(e, t, s = Te + 1) {
    for (; s < ie.length; s++) {
        const n = ie[s];
        if (n && n.flags & 2) {
            if (e && n.id !== e.uid) continue;
            (ie.splice(s, 1),
                s--,
                n.flags & 4 && (n.flags &= -2),
                n(),
                n.flags & 4 || (n.flags &= -2));
        }
    }
}
function ar(e) {
    if (at.length) {
        const t = [...new Set(at)].sort((s, n) => At(s) - At(n));
        if (((at.length = 0), Fe)) {
            Fe.push(...t);
            return;
        }
        for (Fe = t, nt = 0; nt < Fe.length; nt++) {
            const s = Fe[nt];
            (s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), (s.flags &= -2));
        }
        ((Fe = null), (nt = 0));
    }
}
const At = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function fr(e) {
    try {
        for (Te = 0; Te < ie.length; Te++) {
            const t = ie[Te];
            t &&
                !(t.flags & 8) &&
                (t.flags & 4 && (t.flags &= -2),
                    Rt(t, t.i, t.i ? 15 : 14),
                    t.flags & 4 || (t.flags &= -2));
        }
    } finally {
        for (; Te < ie.length; Te++) {
            const t = ie[Te];
            t && (t.flags &= -2);
        }
        ((Te = -1),
            (ie.length = 0),
            ar(),
            (Jt = null),
            (ie.length || at.length) && fr());
    }
}
let ge = null,
    ur = null;
function qt(e) {
    const t = ge;
    return ((ge = e), (ur = (e && e.type.__scopeId) || null), t);
}
function Pi(e, t = ge, s) {
    if (!t || e._n) return e;
    const n = (...r) => {
        n._d && xn(-1);
        const i = qt(t);
        let o;
        try {
            o = e(...r);
        } finally {
            (qt(i), n._d && xn(1));
        }
        return o;
    };
    return ((n._n = !0), (n._c = !0), (n._d = !0), n);
}
function Di(e, t) {
    if (ge === null) return e;
    const s = cs(ge),
        n = e.dirs || (e.dirs = []);
    for (let r = 0; r < t.length; r++) {
        let [i, o, l, c = z] = t[r];
        i &&
            (R(i) && (i = { mounted: i, updated: i }),
                i.deep && Re(o),
                n.push({
                    dir: i,
                    instance: s,
                    value: o,
                    oldValue: void 0,
                    arg: l,
                    modifiers: c,
                }));
    }
    return e;
}
function qe(e, t, s, n) {
    const r = e.dirs,
        i = t && t.dirs;
    for (let o = 0; o < r.length; o++) {
        const l = r[o];
        i && (l.oldValue = i[o].value);
        let c = l.dir[n];
        c && (Be(), Oe(c, s, 8, [e.el, l, e, t]), Ke());
    }
}
const Ri = Symbol("_vte"),
    ki = (e) => e.__isTeleport;
function qs(e, t) {
    e.shapeFlag & 6 && e.component
        ? ((e.transition = t), qs(e.component.subTree, t))
        : e.shapeFlag & 128
            ? ((e.ssContent.transition = t.clone(e.ssContent)),
                (e.ssFallback.transition = t.clone(e.ssFallback)))
            : (e.transition = t);
}
/*! #__NO_SIDE_EFFECTS__ */ function Gs(e, t) {
    return R(e) ? se({ name: e.name }, t, { setup: e }) : e;
}
function dr(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Gt(e, t, s, n, r = !1) {
    if (D(e)) {
        e.forEach((j, I) => Gt(j, t && (D(t) ? t[I] : t), s, n, r));
        return;
    }
    if (St(n) && !r) {
        n.shapeFlag & 512 &&
            n.type.__asyncResolved &&
            n.component.subTree.component &&
            Gt(e, t, s, n.component.subTree);
        return;
    }
    const i = n.shapeFlag & 4 ? cs(n.component) : n.el,
        o = r ? null : i,
        { i: l, r: c } = e,
        d = t && t.r,
        u = l.refs === z ? (l.refs = {}) : l.refs,
        g = l.setupState,
        C = F(g),
        T = g === z ? () => !1 : (j) => L(C, j);
    if (
        (d != null &&
            d !== c &&
            (Y(d)
                ? ((u[d] = null), T(d) && (g[d] = null))
                : te(d) && (d.value = null)),
            R(c))
    )
        Rt(c, l, 12, [o, u]);
    else {
        const j = Y(c),
            I = te(c);
        if (j || I) {
            const X = () => {
                if (e.f) {
                    const $ = j ? (T(c) ? g[c] : u[c]) : c.value;
                    r
                        ? D($) && Ls($, i)
                        : D($)
                            ? $.includes(i) || $.push(i)
                            : j
                                ? ((u[c] = [i]), T(c) && (g[c] = u[c]))
                                : ((c.value = [i]), e.k && (u[e.k] = c.value));
                } else
                    j
                        ? ((u[c] = o), T(c) && (g[c] = o))
                        : I && ((c.value = o), e.k && (u[e.k] = o));
            };
            o ? ((X.id = -1), de(X, s)) : X();
        }
    }
}
ts().requestIdleCallback;
ts().cancelIdleCallback;
const St = (e) => !!e.type.__asyncLoader,
    hr = (e) => e.type.__isKeepAlive;
function Ii(e, t) {
    pr(e, "a", t);
}
function ji(e, t) {
    pr(e, "da", t);
}
function pr(e, t, s = le) {
    const n =
        e.__wdc ||
        (e.__wdc = () => {
            let r = s;
            for (; r;) {
                if (r.isDeactivated) return;
                r = r.parent;
            }
            return e();
        });
    if ((is(t, n, s), s)) {
        let r = s.parent;
        for (; r && r.parent;)
            (hr(r.parent.vnode) && Fi(n, t, s, r), (r = r.parent));
    }
}
function Fi(e, t, s, n) {
    const r = is(t, e, n, !0);
    Qs(() => {
        Ls(n[t], r);
    }, s);
}
function is(e, t, s = le, n = !1) {
    if (s) {
        const r = s[e] || (s[e] = []),
            i =
                t.__weh ||
                (t.__weh = (...o) => {
                    Be();
                    const l = kt(s),
                        c = Oe(t, s, e, o);
                    return (l(), Ke(), c);
                });
        return (n ? r.unshift(i) : r.push(i), i);
    }
}
const ke =
    (e) =>
        (t, s = le) => {
            (!Dt || e === "sp") && is(e, (...n) => t(...n), s);
        },
    Li = ke("bm"),
    Ys = ke("m"),
    Ni = ke("bu"),
    $i = ke("u"),
    zi = ke("bum"),
    Qs = ke("um"),
    Hi = ke("sp"),
    Vi = ke("rtg"),
    Bi = ke("rtc");
function Ki(e, t = le) {
    is("ec", e, t);
}
const Ui = Symbol.for("v-ndc");
function rt(e, t, s, n) {
    let r;
    const i = s,
        o = D(e);
    if (o || Y(e)) {
        const l = o && ct(e);
        let c = !1;
        (l && ((c = !me(e)), (e = ns(e))), (r = new Array(e.length)));
        for (let d = 0, u = e.length; d < u; d++)
            r[d] = t(c ? ee(e[d]) : e[d], d, void 0, i);
    } else if (typeof e == "number") {
        r = new Array(e);
        for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i);
    } else if (U(e))
        if (e[Symbol.iterator]) r = Array.from(e, (l, c) => t(l, c, void 0, i));
        else {
            const l = Object.keys(e);
            r = new Array(l.length);
            for (let c = 0, d = l.length; c < d; c++) {
                const u = l[c];
                r[c] = t(e[u], u, c, i);
            }
        }
    else r = [];
    return r;
}
const As = (e) => (e ? (Fr(e) ? cs(e) : As(e.parent)) : null),
    Ct = se(Object.create(null), {
        $: (e) => e,
        $el: (e) => e.vnode.el,
        $data: (e) => e.data,
        $props: (e) => e.props,
        $attrs: (e) => e.attrs,
        $slots: (e) => e.slots,
        $refs: (e) => e.refs,
        $parent: (e) => As(e.parent),
        $root: (e) => As(e.root),
        $host: (e) => e.ce,
        $emit: (e) => e.emit,
        $options: (e) => mr(e),
        $forceUpdate: (e) =>
            e.f ||
            (e.f = () => {
                Js(e.update);
            }),
        $nextTick: (e) => e.n || (e.n = lr.bind(e.proxy)),
        $watch: (e) => po.bind(e),
    }),
    ms = (e, t) => e !== z && !e.__isScriptSetup && L(e, t),
    Wi = {
        get({ _: e }, t) {
            if (t === "__v_skip") return !0;
            const {
                ctx: s,
                setupState: n,
                data: r,
                props: i,
                accessCache: o,
                type: l,
                appContext: c,
            } = e;
            let d;
            if (t[0] !== "$") {
                const T = o[t];
                if (T !== void 0)
                    switch (T) {
                        case 1:
                            return n[t];
                        case 2:
                            return r[t];
                        case 4:
                            return s[t];
                        case 3:
                            return i[t];
                    }
                else {
                    if (ms(n, t)) return ((o[t] = 1), n[t]);
                    if (r !== z && L(r, t)) return ((o[t] = 2), r[t]);
                    if ((d = e.propsOptions[0]) && L(d, t)) return ((o[t] = 3), i[t]);
                    if (s !== z && L(s, t)) return ((o[t] = 4), s[t]);
                    Ps && (o[t] = 0);
                }
            }
            const u = Ct[t];
            let g, C;
            if (u) return (t === "$attrs" && Z(e.attrs, "get", ""), u(e));
            if ((g = l.__cssModules) && (g = g[t])) return g;
            if (s !== z && L(s, t)) return ((o[t] = 4), s[t]);
            if (((C = c.config.globalProperties), L(C, t))) return C[t];
        },
        set({ _: e }, t, s) {
            const { data: n, setupState: r, ctx: i } = e;
            return ms(r, t)
                ? ((r[t] = s), !0)
                : n !== z && L(n, t)
                    ? ((n[t] = s), !0)
                    : L(e.props, t) || (t[0] === "$" && t.slice(1) in e)
                        ? !1
                        : ((i[t] = s), !0);
        },
        has(
            {
                _: {
                    data: e,
                    setupState: t,
                    accessCache: s,
                    ctx: n,
                    appContext: r,
                    propsOptions: i,
                },
            },
            o,
        ) {
            let l;
            return (
                !!s[o] ||
                (e !== z && L(e, o)) ||
                ms(t, o) ||
                ((l = i[0]) && L(l, o)) ||
                L(n, o) ||
                L(Ct, o) ||
                L(r.config.globalProperties, o)
            );
        },
        defineProperty(e, t, s) {
            return (
                s.get != null
                    ? (e._.accessCache[t] = 0)
                    : L(s, "value") && this.set(e, t, s.value, null),
                Reflect.defineProperty(e, t, s)
            );
        },
    };
function fn(e) {
    return D(e) ? e.reduce((t, s) => ((t[s] = null), t), {}) : e;
}
let Ps = !0;
function Ji(e) {
    const t = mr(e),
        s = e.proxy,
        n = e.ctx;
    ((Ps = !1), t.beforeCreate && un(t.beforeCreate, e, "bc"));
    const {
        data: r,
        computed: i,
        methods: o,
        watch: l,
        provide: c,
        inject: d,
        created: u,
        beforeMount: g,
        mounted: C,
        beforeUpdate: T,
        updated: j,
        activated: I,
        deactivated: X,
        beforeDestroy: $,
        beforeUnmount: W,
        destroyed: J,
        unmounted: A,
        render: Q,
        renderTracked: Ie,
        renderTriggered: ve,
        errorCaptured: je,
        serverPrefetch: It,
        expose: Ue,
        inheritAttrs: dt,
        components: jt,
        directives: Ft,
        filters: as,
    } = t;
    if ((d && qi(d, n, null), o))
        for (const K in o) {
            const H = o[K];
            R(H) && (n[K] = H.bind(s));
        }
    if (r) {
        const K = r.call(s, s);
        U(K) && (e.data = Ks(K));
    }
    if (((Ps = !0), i))
        for (const K in i) {
            const H = i[K],
                We = R(H) ? H.bind(s, s) : R(H.get) ? H.get.bind(s, s) : Me,
                Lt = !R(H) && R(H.set) ? H.set.bind(s) : Me,
                Je = jo({ get: We, set: Lt });
            Object.defineProperty(n, K, {
                enumerable: !0,
                configurable: !0,
                get: () => Je.value,
                set: (_e) => (Je.value = _e),
            });
        }
    if (l) for (const K in l) gr(l[K], n, s, K);
    if (c) {
        const K = R(c) ? c.call(s) : c;
        Reflect.ownKeys(K).forEach((H) => {
            eo(H, K[H]);
        });
    }
    u && un(u, e, "c");
    function ne(K, H) {
        D(H) ? H.forEach((We) => K(We.bind(s))) : H && K(H.bind(s));
    }
    if (
        (ne(Li, g),
            ne(Ys, C),
            ne(Ni, T),
            ne($i, j),
            ne(Ii, I),
            ne(ji, X),
            ne(Ki, je),
            ne(Bi, Ie),
            ne(Vi, ve),
            ne(zi, W),
            ne(Qs, A),
            ne(Hi, It),
            D(Ue))
    )
        if (Ue.length) {
            const K = e.exposed || (e.exposed = {});
            Ue.forEach((H) => {
                Object.defineProperty(K, H, {
                    get: () => s[H],
                    set: (We) => (s[H] = We),
                });
            });
        } else e.exposed || (e.exposed = {});
    (Q && e.render === Me && (e.render = Q),
        dt != null && (e.inheritAttrs = dt),
        jt && (e.components = jt),
        Ft && (e.directives = Ft),
        It && dr(e));
}
function qi(e, t, s = Me) {
    D(e) && (e = Ds(e));
    for (const n in e) {
        const r = e[n];
        let i;
        (U(r)
            ? "default" in r
                ? (i = Bt(r.from || n, r.default, !0))
                : (i = Bt(r.from || n))
            : (i = Bt(r)),
            te(i)
                ? Object.defineProperty(t, n, {
                    enumerable: !0,
                    configurable: !0,
                    get: () => i.value,
                    set: (o) => (i.value = o),
                })
                : (t[n] = i));
    }
}
function un(e, t, s) {
    Oe(D(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, s);
}
function gr(e, t, s, n) {
    let r = n.includes(".") ? Pr(s, n) : () => s[n];
    if (Y(e)) {
        const i = t[e];
        R(i) && Tt(r, i);
    } else if (R(e)) Tt(r, e.bind(s));
    else if (U(e))
        if (D(e)) e.forEach((i) => gr(i, t, s, n));
        else {
            const i = R(e.handler) ? e.handler.bind(s) : t[e.handler];
            R(i) && Tt(r, i, e);
        }
}
function mr(e) {
    const t = e.type,
        { mixins: s, extends: n } = t,
        {
            mixins: r,
            optionsCache: i,
            config: { optionMergeStrategies: o },
        } = e.appContext,
        l = i.get(t);
    let c;
    return (
        l
            ? (c = l)
            : !r.length && !s && !n
                ? (c = t)
                : ((c = {}),
                    r.length && r.forEach((d) => Yt(c, d, o, !0)),
                    Yt(c, t, o)),
        U(t) && i.set(t, c),
        c
    );
}
function Yt(e, t, s, n = !1) {
    const { mixins: r, extends: i } = t;
    (i && Yt(e, i, s, !0), r && r.forEach((o) => Yt(e, o, s, !0)));
    for (const o in t)
        if (!(n && o === "expose")) {
            const l = Gi[o] || (s && s[o]);
            e[o] = l ? l(e[o], t[o]) : t[o];
        }
    return e;
}
const Gi = {
    data: dn,
    props: hn,
    emits: hn,
    methods: vt,
    computed: vt,
    beforeCreate: re,
    created: re,
    beforeMount: re,
    mounted: re,
    beforeUpdate: re,
    updated: re,
    beforeDestroy: re,
    beforeUnmount: re,
    destroyed: re,
    unmounted: re,
    activated: re,
    deactivated: re,
    errorCaptured: re,
    serverPrefetch: re,
    components: vt,
    directives: vt,
    watch: Qi,
    provide: dn,
    inject: Yi,
};
function dn(e, t) {
    return t
        ? e
            ? function () {
                return se(
                    R(e) ? e.call(this, this) : e,
                    R(t) ? t.call(this, this) : t,
                );
            }
            : t
        : e;
}
function Yi(e, t) {
    return vt(Ds(e), Ds(t));
}
function Ds(e) {
    if (D(e)) {
        const t = {};
        for (let s = 0; s < e.length; s++) t[e[s]] = e[s];
        return t;
    }
    return e;
}
function re(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
}
function vt(e, t) {
    return e ? se(Object.create(null), e, t) : t;
}
function hn(e, t) {
    return e
        ? D(e) && D(t)
            ? [...new Set([...e, ...t])]
            : se(Object.create(null), fn(e), fn(t ?? {}))
        : t;
}
function Qi(e, t) {
    if (!e) return t;
    if (!t) return e;
    const s = se(Object.create(null), e);
    for (const n in t) s[n] = re(e[n], t[n]);
    return s;
}
function br() {
    return {
        app: null,
        config: {
            isNativeTag: Hr,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {},
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap(),
        propsCache: new WeakMap(),
        emitsCache: new WeakMap(),
    };
}
let Xi = 0;
function Zi(e, t) {
    return function (n, r = null) {
        (R(n) || (n = se({}, n)), r != null && !U(r) && (r = null));
        const i = br(),
            o = new WeakSet(),
            l = [];
        let c = !1;
        const d = (i.app = {
            _uid: Xi++,
            _component: n,
            _props: r,
            _container: null,
            _context: i,
            _instance: null,
            version: Fo,
            get config() {
                return i.config;
            },
            set config(u) { },
            use(u, ...g) {
                return (
                    o.has(u) ||
                    (u && R(u.install)
                        ? (o.add(u), u.install(d, ...g))
                        : R(u) && (o.add(u), u(d, ...g))),
                    d
                );
            },
            mixin(u) {
                return (i.mixins.includes(u) || i.mixins.push(u), d);
            },
            component(u, g) {
                return g ? ((i.components[u] = g), d) : i.components[u];
            },
            directive(u, g) {
                return g ? ((i.directives[u] = g), d) : i.directives[u];
            },
            mount(u, g, C) {
                if (!c) {
                    const T = d._ceVNode || xe(n, r);
                    return (
                        (T.appContext = i),
                        C === !0 ? (C = "svg") : C === !1 && (C = void 0),
                        e(T, u, C),
                        (c = !0),
                        (d._container = u),
                        (u.__vue_app__ = d),
                        cs(T.component)
                    );
                }
            },
            onUnmount(u) {
                l.push(u);
            },
            unmount() {
                c &&
                    (Oe(l, d._instance, 16),
                        e(null, d._container),
                        delete d._container.__vue_app__);
            },
            provide(u, g) {
                return ((i.provides[u] = g), d);
            },
            runWithContext(u) {
                const g = ft;
                ft = d;
                try {
                    return u();
                } finally {
                    ft = g;
                }
            },
        });
        return d;
    };
}
let ft = null;
function eo(e, t) {
    if (le) {
        let s = le.provides;
        const n = le.parent && le.parent.provides;
        (n === s && (s = le.provides = Object.create(n)), (s[e] = t));
    }
}
function Bt(e, t, s = !1) {
    const n = le || ge;
    if (n || ft) {
        const r = ft
            ? ft._context.provides
            : n
                ? n.parent == null
                    ? n.vnode.appContext && n.vnode.appContext.provides
                    : n.parent.provides
                : void 0;
        if (r && e in r) return r[e];
        if (arguments.length > 1) return s && R(t) ? t.call(n && n.proxy) : t;
    }
}
const xr = {},
    vr = () => Object.create(xr),
    _r = (e) => Object.getPrototypeOf(e) === xr;
function to(e, t, s, n = !1) {
    const r = {},
        i = vr();
    ((e.propsDefaults = Object.create(null)), yr(e, t, r, i));
    for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
    (s ? (e.props = n ? r : xi(r)) : e.type.props ? (e.props = r) : (e.props = i),
        (e.attrs = i));
}
function so(e, t, s, n) {
    const {
        props: r,
        attrs: i,
        vnode: { patchFlag: o },
    } = e,
        l = F(r),
        [c] = e.propsOptions;
    let d = !1;
    if ((n || o > 0) && !(o & 16)) {
        if (o & 8) {
            const u = e.vnode.dynamicProps;
            for (let g = 0; g < u.length; g++) {
                let C = u[g];
                if (os(e.emitsOptions, C)) continue;
                const T = t[C];
                if (c)
                    if (L(i, C)) T !== i[C] && ((i[C] = T), (d = !0));
                    else {
                        const j = ze(C);
                        r[j] = Rs(c, l, j, T, e, !1);
                    }
                else T !== i[C] && ((i[C] = T), (d = !0));
            }
        }
    } else {
        yr(e, t, r, i) && (d = !0);
        let u;
        for (const g in l)
            (!t || (!L(t, g) && ((u = Ve(g)) === g || !L(t, u)))) &&
                (c
                    ? s &&
                    (s[g] !== void 0 || s[u] !== void 0) &&
                    (r[g] = Rs(c, l, g, void 0, e, !0))
                    : delete r[g]);
        if (i !== l) for (const g in i) (!t || !L(t, g)) && (delete i[g], (d = !0));
    }
    d && De(e.attrs, "set", "");
}
function yr(e, t, s, n) {
    const [r, i] = e.propsOptions;
    let o = !1,
        l;
    if (t)
        for (let c in t) {
            if (_t(c)) continue;
            const d = t[c];
            let u;
            r && L(r, (u = ze(c)))
                ? !i || !i.includes(u)
                    ? (s[u] = d)
                    : ((l || (l = {}))[u] = d)
                : os(e.emitsOptions, c) ||
                ((!(c in n) || d !== n[c]) && ((n[c] = d), (o = !0)));
        }
    if (i) {
        const c = F(s),
            d = l || z;
        for (let u = 0; u < i.length; u++) {
            const g = i[u];
            s[g] = Rs(r, c, g, d[g], e, !L(d, g));
        }
    }
    return o;
}
function Rs(e, t, s, n, r, i) {
    const o = e[s];
    if (o != null) {
        const l = L(o, "default");
        if (l && n === void 0) {
            const c = o.default;
            if (o.type !== Function && !o.skipFactory && R(c)) {
                const { propsDefaults: d } = r;
                if (s in d) n = d[s];
                else {
                    const u = kt(r);
                    ((n = d[s] = c.call(null, t)), u());
                }
            } else n = c;
            r.ce && r.ce._setProp(s, n);
        }
        o[0] &&
            (i && !l ? (n = !1) : o[1] && (n === "" || n === Ve(s)) && (n = !0));
    }
    return n;
}
const no = new WeakMap();
function wr(e, t, s = !1) {
    const n = s ? no : t.propsCache,
        r = n.get(e);
    if (r) return r;
    const i = e.props,
        o = {},
        l = [];
    let c = !1;
    if (!R(e)) {
        const u = (g) => {
            c = !0;
            const [C, T] = wr(g, t, !0);
            (se(o, C), T && l.push(...T));
        };
        (!s && t.mixins.length && t.mixins.forEach(u),
            e.extends && u(e.extends),
            e.mixins && e.mixins.forEach(u));
    }
    if (!i && !c) return (U(e) && n.set(e, ot), ot);
    if (D(i))
        for (let u = 0; u < i.length; u++) {
            const g = ze(i[u]);
            pn(g) && (o[g] = z);
        }
    else if (i)
        for (const u in i) {
            const g = ze(u);
            if (pn(g)) {
                const C = i[u],
                    T = (o[g] = D(C) || R(C) ? { type: C } : se({}, C)),
                    j = T.type;
                let I = !1,
                    X = !0;
                if (D(j))
                    for (let $ = 0; $ < j.length; ++$) {
                        const W = j[$],
                            J = R(W) && W.name;
                        if (J === "Boolean") {
                            I = !0;
                            break;
                        } else J === "String" && (X = !1);
                    }
                else I = R(j) && j.name === "Boolean";
                ((T[0] = I), (T[1] = X), (I || L(T, "default")) && l.push(g));
            }
        }
    const d = [o, l];
    return (U(e) && n.set(e, d), d);
}
function pn(e) {
    return e[0] !== "$" && !_t(e);
}
const Sr = (e) => e[0] === "_" || e === "$stable",
    Xs = (e) => (D(e) ? e.map(Ee) : [Ee(e)]),
    ro = (e, t, s) => {
        if (t._n) return t;
        const n = Pi((...r) => Xs(t(...r)), s);
        return ((n._c = !1), n);
    },
    Cr = (e, t, s) => {
        const n = e._ctx;
        for (const r in e) {
            if (Sr(r)) continue;
            const i = e[r];
            if (R(i)) t[r] = ro(r, i, n);
            else if (i != null) {
                const o = Xs(i);
                t[r] = () => o;
            }
        }
    },
    Tr = (e, t) => {
        const s = Xs(t);
        e.slots.default = () => s;
    },
    Er = (e, t, s) => {
        for (const n in t) (s || n !== "_") && (e[n] = t[n]);
    },
    io = (e, t, s) => {
        const n = (e.slots = vr());
        if (e.vnode.shapeFlag & 32) {
            const r = t._;
            r ? (Er(n, t, s), s && zn(n, "_", r, !0)) : Cr(t, n);
        } else t && Tr(e, t);
    },
    oo = (e, t, s) => {
        const { vnode: n, slots: r } = e;
        let i = !0,
            o = z;
        if (n.shapeFlag & 32) {
            const l = t._;
            (l
                ? s && l === 1
                    ? (i = !1)
                    : Er(r, t, s)
                : ((i = !t.$stable), Cr(t, r)),
                (o = t));
        } else t && (Tr(e, t), (o = { default: 1 }));
        if (i) for (const l in r) !Sr(l) && o[l] == null && delete r[l];
    },
    de = yo;
function lo(e) {
    return co(e);
}
function co(e, t) {
    const s = ts();
    s.__VUE__ = !0;
    const {
        insert: n,
        remove: r,
        patchProp: i,
        createElement: o,
        createText: l,
        createComment: c,
        setText: d,
        setElementText: u,
        parentNode: g,
        nextSibling: C,
        setScopeId: T = Me,
        insertStaticContent: j,
    } = e,
        I = (
            a,
            f,
            h,
            x = null,
            m = null,
            b = null,
            w = void 0,
            y = null,
            _ = !!f.dynamicChildren,
        ) => {
            if (a === f) return;
            (a && !bt(a, f) && ((x = Nt(a)), _e(a, m, b, !0), (a = null)),
                f.patchFlag === -2 && ((_ = !1), (f.dynamicChildren = null)));
            const { type: v, ref: O, shapeFlag: S } = f;
            switch (v) {
                case ls:
                    X(a, f, h, x);
                    break;
                case tt:
                    $(a, f, h, x);
                    break;
                case xs:
                    a == null && W(f, h, x, w);
                    break;
                case oe:
                    jt(a, f, h, x, m, b, w, y, _);
                    break;
                default:
                    S & 1
                        ? Q(a, f, h, x, m, b, w, y, _)
                        : S & 6
                            ? Ft(a, f, h, x, m, b, w, y, _)
                            : (S & 64 || S & 128) && v.process(a, f, h, x, m, b, w, y, _, pt);
            }
            O != null && m && Gt(O, a && a.ref, b, f || a, !f);
        },
        X = (a, f, h, x) => {
            if (a == null) n((f.el = l(f.children)), h, x);
            else {
                const m = (f.el = a.el);
                f.children !== a.children && d(m, f.children);
            }
        },
        $ = (a, f, h, x) => {
            a == null ? n((f.el = c(f.children || "")), h, x) : (f.el = a.el);
        },
        W = (a, f, h, x) => {
            [a.el, a.anchor] = j(a.children, f, h, x, a.el, a.anchor);
        },
        J = ({ el: a, anchor: f }, h, x) => {
            let m;
            for (; a && a !== f;) ((m = C(a)), n(a, h, x), (a = m));
            n(f, h, x);
        },
        A = ({ el: a, anchor: f }) => {
            let h;
            for (; a && a !== f;) ((h = C(a)), r(a), (a = h));
            r(f);
        },
        Q = (a, f, h, x, m, b, w, y, _) => {
            (f.type === "svg" ? (w = "svg") : f.type === "math" && (w = "mathml"),
                a == null ? Ie(f, h, x, m, b, w, y, _) : It(a, f, m, b, w, y, _));
        },
        Ie = (a, f, h, x, m, b, w, y) => {
            let _, v;
            const { props: O, shapeFlag: S, transition: M, dirs: P } = a;
            if (
                ((_ = a.el = o(a.type, b, O && O.is, O)),
                    S & 8
                        ? u(_, a.children)
                        : S & 16 && je(a.children, _, null, x, m, bs(a, b), w, y),
                    P && qe(a, null, x, "created"),
                    ve(_, a, a.scopeId, w, x),
                    O)
            ) {
                for (const V in O) V !== "value" && !_t(V) && i(_, V, null, O[V], b, x);
                ("value" in O && i(_, "value", null, O.value, b),
                    (v = O.onVnodeBeforeMount) && Ce(v, x, a));
            }
            P && qe(a, null, x, "beforeMount");
            const k = ao(m, M);
            (k && M.beforeEnter(_),
                n(_, f, h),
                ((v = O && O.onVnodeMounted) || k || P) &&
                de(() => {
                    (v && Ce(v, x, a), k && M.enter(_), P && qe(a, null, x, "mounted"));
                }, m));
        },
        ve = (a, f, h, x, m) => {
            if ((h && T(a, h), x)) for (let b = 0; b < x.length; b++) T(a, x[b]);
            if (m) {
                let b = m.subTree;
                if (
                    f === b ||
                    (Rr(b.type) && (b.ssContent === f || b.ssFallback === f))
                ) {
                    const w = m.vnode;
                    ve(a, w, w.scopeId, w.slotScopeIds, m.parent);
                }
            }
        },
        je = (a, f, h, x, m, b, w, y, _ = 0) => {
            for (let v = _; v < a.length; v++) {
                const O = (a[v] = y ? Le(a[v]) : Ee(a[v]));
                I(null, O, f, h, x, m, b, w, y);
            }
        },
        It = (a, f, h, x, m, b, w) => {
            const y = (f.el = a.el);
            let { patchFlag: _, dynamicChildren: v, dirs: O } = f;
            _ |= a.patchFlag & 16;
            const S = a.props || z,
                M = f.props || z;
            let P;
            if (
                (h && Ge(h, !1),
                    (P = M.onVnodeBeforeUpdate) && Ce(P, h, f, a),
                    O && qe(f, a, h, "beforeUpdate"),
                    h && Ge(h, !0),
                    ((S.innerHTML && M.innerHTML == null) ||
                        (S.textContent && M.textContent == null)) &&
                    u(y, ""),
                    v
                        ? Ue(a.dynamicChildren, v, y, h, x, bs(f, m), b)
                        : w || H(a, f, y, null, h, x, bs(f, m), b, !1),
                    _ > 0)
            ) {
                if (_ & 16) dt(y, S, M, h, m);
                else if (
                    (_ & 2 && S.class !== M.class && i(y, "class", null, M.class, m),
                        _ & 4 && i(y, "style", S.style, M.style, m),
                        _ & 8)
                ) {
                    const k = f.dynamicProps;
                    for (let V = 0; V < k.length; V++) {
                        const N = k[V],
                            ae = S[N],
                            ce = M[N];
                        (ce !== ae || N === "value") && i(y, N, ae, ce, m, h);
                    }
                }
                _ & 1 && a.children !== f.children && u(y, f.children);
            } else !w && v == null && dt(y, S, M, h, m);
            ((P = M.onVnodeUpdated) || O) &&
                de(() => {
                    (P && Ce(P, h, f, a), O && qe(f, a, h, "updated"));
                }, x);
        },
        Ue = (a, f, h, x, m, b, w) => {
            for (let y = 0; y < f.length; y++) {
                const _ = a[y],
                    v = f[y],
                    O =
                        _.el && (_.type === oe || !bt(_, v) || _.shapeFlag & 70)
                            ? g(_.el)
                            : h;
                I(_, v, O, null, x, m, b, w, !0);
            }
        },
        dt = (a, f, h, x, m) => {
            if (f !== h) {
                if (f !== z)
                    for (const b in f) !_t(b) && !(b in h) && i(a, b, f[b], null, m, x);
                for (const b in h) {
                    if (_t(b)) continue;
                    const w = h[b],
                        y = f[b];
                    w !== y && b !== "value" && i(a, b, y, w, m, x);
                }
                "value" in h && i(a, "value", f.value, h.value, m);
            }
        },
        jt = (a, f, h, x, m, b, w, y, _) => {
            const v = (f.el = a ? a.el : l("")),
                O = (f.anchor = a ? a.anchor : l(""));
            let { patchFlag: S, dynamicChildren: M, slotScopeIds: P } = f;
            (P && (y = y ? y.concat(P) : P),
                a == null
                    ? (n(v, h, x), n(O, h, x), je(f.children || [], h, O, m, b, w, y, _))
                    : S > 0 && S & 64 && M && a.dynamicChildren
                        ? (Ue(a.dynamicChildren, M, h, m, b, w, y),
                            (f.key != null || (m && f === m.subTree)) && Mr(a, f, !0))
                        : H(a, f, h, O, m, b, w, y, _));
        },
        Ft = (a, f, h, x, m, b, w, y, _) => {
            ((f.slotScopeIds = y),
                a == null
                    ? f.shapeFlag & 512
                        ? m.ctx.activate(f, h, x, w, _)
                        : as(f, h, x, m, b, w, _)
                    : en(a, f, _));
        },
        as = (a, f, h, x, m, b, w) => {
            const y = (a.component = Ao(a, x, m));
            if ((hr(a) && (y.ctx.renderer = pt), Po(y, !1, w), y.asyncDep)) {
                if ((m && m.registerDep(y, ne, w), !a.el)) {
                    const _ = (y.subTree = xe(tt));
                    $(null, _, f, h);
                }
            } else ne(y, a, f, h, m, b, w);
        },
        en = (a, f, h) => {
            const x = (f.component = a.component);
            if (vo(a, f, h))
                if (x.asyncDep && !x.asyncResolved) {
                    K(x, f, h);
                    return;
                } else ((x.next = f), x.update());
            else ((f.el = a.el), (x.vnode = f));
        },
        ne = (a, f, h, x, m, b, w) => {
            const y = () => {
                if (a.isMounted) {
                    let { next: S, bu: M, u: P, parent: k, vnode: V } = a;
                    {
                        const we = Or(a);
                        if (we) {
                            (S && ((S.el = V.el), K(a, S, w)),
                                we.asyncDep.then(() => {
                                    a.isUnmounted || y();
                                }));
                            return;
                        }
                    }
                    let N = S,
                        ae;
                    (Ge(a, !1),
                        S ? ((S.el = V.el), K(a, S, w)) : (S = V),
                        M && Vt(M),
                        (ae = S.props && S.props.onVnodeBeforeUpdate) && Ce(ae, k, S, V),
                        Ge(a, !0));
                    const ce = mn(a),
                        ye = a.subTree;
                    ((a.subTree = ce),
                        I(ye, ce, g(ye.el), Nt(ye), a, m, b),
                        (S.el = ce.el),
                        N === null && _o(a, ce.el),
                        P && de(P, m),
                        (ae = S.props && S.props.onVnodeUpdated) &&
                        de(() => Ce(ae, k, S, V), m));
                } else {
                    let S;
                    const { el: M, props: P } = f,
                        { bm: k, m: V, parent: N, root: ae, type: ce } = a,
                        ye = St(f);
                    (Ge(a, !1),
                        k && Vt(k),
                        !ye && (S = P && P.onVnodeBeforeMount) && Ce(S, N, f),
                        Ge(a, !0));
                    {
                        ae.ce && ae.ce._injectChildStyle(ce);
                        const we = (a.subTree = mn(a));
                        (I(null, we, h, x, a, m, b), (f.el = we.el));
                    }
                    if ((V && de(V, m), !ye && (S = P && P.onVnodeMounted))) {
                        const we = f;
                        de(() => Ce(S, N, we), m);
                    }
                    ((f.shapeFlag & 256 ||
                        (N && St(N.vnode) && N.vnode.shapeFlag & 256)) &&
                        a.a &&
                        de(a.a, m),
                        (a.isMounted = !0),
                        (f = h = x = null));
                }
            };
            a.scope.on();
            const _ = (a.effect = new Kn(y));
            a.scope.off();
            const v = (a.update = _.run.bind(_)),
                O = (a.job = _.runIfDirty.bind(_));
            ((O.i = a), (O.id = a.uid), (_.scheduler = () => Js(O)), Ge(a, !0), v());
        },
        K = (a, f, h) => {
            f.component = a;
            const x = a.vnode.props;
            ((a.vnode = f),
                (a.next = null),
                so(a, f.props, x, h),
                oo(a, f.children, h),
                Be(),
                an(a),
                Ke());
        },
        H = (a, f, h, x, m, b, w, y, _ = !1) => {
            const v = a && a.children,
                O = a ? a.shapeFlag : 0,
                S = f.children,
                { patchFlag: M, shapeFlag: P } = f;
            if (M > 0) {
                if (M & 128) {
                    Lt(v, S, h, x, m, b, w, y, _);
                    return;
                } else if (M & 256) {
                    We(v, S, h, x, m, b, w, y, _);
                    return;
                }
            }
            P & 8
                ? (O & 16 && ht(v, m, b), S !== v && u(h, S))
                : O & 16
                    ? P & 16
                        ? Lt(v, S, h, x, m, b, w, y, _)
                        : ht(v, m, b, !0)
                    : (O & 8 && u(h, ""), P & 16 && je(S, h, x, m, b, w, y, _));
        },
        We = (a, f, h, x, m, b, w, y, _) => {
            ((a = a || ot), (f = f || ot));
            const v = a.length,
                O = f.length,
                S = Math.min(v, O);
            let M;
            for (M = 0; M < S; M++) {
                const P = (f[M] = _ ? Le(f[M]) : Ee(f[M]));
                I(a[M], P, h, null, m, b, w, y, _);
            }
            v > O ? ht(a, m, b, !0, !1, S) : je(f, h, x, m, b, w, y, _, S);
        },
        Lt = (a, f, h, x, m, b, w, y, _) => {
            let v = 0;
            const O = f.length;
            let S = a.length - 1,
                M = O - 1;
            for (; v <= S && v <= M;) {
                const P = a[v],
                    k = (f[v] = _ ? Le(f[v]) : Ee(f[v]));
                if (bt(P, k)) I(P, k, h, null, m, b, w, y, _);
                else break;
                v++;
            }
            for (; v <= S && v <= M;) {
                const P = a[S],
                    k = (f[M] = _ ? Le(f[M]) : Ee(f[M]));
                if (bt(P, k)) I(P, k, h, null, m, b, w, y, _);
                else break;
                (S--, M--);
            }
            if (v > S) {
                if (v <= M) {
                    const P = M + 1,
                        k = P < O ? f[P].el : x;
                    for (; v <= M;)
                        (I(null, (f[v] = _ ? Le(f[v]) : Ee(f[v])), h, k, m, b, w, y, _),
                            v++);
                }
            } else if (v > M) for (; v <= S;) (_e(a[v], m, b, !0), v++);
            else {
                const P = v,
                    k = v,
                    V = new Map();
                for (v = k; v <= M; v++) {
                    const fe = (f[v] = _ ? Le(f[v]) : Ee(f[v]));
                    fe.key != null && V.set(fe.key, v);
                }
                let N,
                    ae = 0;
                const ce = M - k + 1;
                let ye = !1,
                    we = 0;
                const gt = new Array(ce);
                for (v = 0; v < ce; v++) gt[v] = 0;
                for (v = P; v <= S; v++) {
                    const fe = a[v];
                    if (ae >= ce) {
                        _e(fe, m, b, !0);
                        continue;
                    }
                    let Se;
                    if (fe.key != null) Se = V.get(fe.key);
                    else
                        for (N = k; N <= M; N++)
                            if (gt[N - k] === 0 && bt(fe, f[N])) {
                                Se = N;
                                break;
                            }
                    Se === void 0
                        ? _e(fe, m, b, !0)
                        : ((gt[Se - k] = v + 1),
                            Se >= we ? (we = Se) : (ye = !0),
                            I(fe, f[Se], h, null, m, b, w, y, _),
                            ae++);
                }
                const nn = ye ? fo(gt) : ot;
                for (N = nn.length - 1, v = ce - 1; v >= 0; v--) {
                    const fe = k + v,
                        Se = f[fe],
                        rn = fe + 1 < O ? f[fe + 1].el : x;
                    gt[v] === 0
                        ? I(null, Se, h, rn, m, b, w, y, _)
                        : ye && (N < 0 || v !== nn[N] ? Je(Se, h, rn, 2) : N--);
                }
            }
        },
        Je = (a, f, h, x, m = null) => {
            const { el: b, type: w, transition: y, children: _, shapeFlag: v } = a;
            if (v & 6) {
                Je(a.component.subTree, f, h, x);
                return;
            }
            if (v & 128) {
                a.suspense.move(f, h, x);
                return;
            }
            if (v & 64) {
                w.move(a, f, h, pt);
                return;
            }
            if (w === oe) {
                n(b, f, h);
                for (let S = 0; S < _.length; S++) Je(_[S], f, h, x);
                n(a.anchor, f, h);
                return;
            }
            if (w === xs) {
                J(a, f, h);
                return;
            }
            if (x !== 2 && v & 1 && y)
                if (x === 0) (y.beforeEnter(b), n(b, f, h), de(() => y.enter(b), m));
                else {
                    const { leave: S, delayLeave: M, afterLeave: P } = y,
                        k = () => n(b, f, h),
                        V = () => {
                            S(b, () => {
                                (k(), P && P());
                            });
                        };
                    M ? M(b, k, V) : V();
                }
            else n(b, f, h);
        },
        _e = (a, f, h, x = !1, m = !1) => {
            const {
                type: b,
                props: w,
                ref: y,
                children: _,
                dynamicChildren: v,
                shapeFlag: O,
                patchFlag: S,
                dirs: M,
                cacheIndex: P,
            } = a;
            if (
                (S === -2 && (m = !1),
                    y != null && Gt(y, null, h, a, !0),
                    P != null && (f.renderCache[P] = void 0),
                    O & 256)
            ) {
                f.ctx.deactivate(a);
                return;
            }
            const k = O & 1 && M,
                V = !St(a);
            let N;
            if ((V && (N = w && w.onVnodeBeforeUnmount) && Ce(N, f, a), O & 6))
                zr(a.component, h, x);
            else {
                if (O & 128) {
                    a.suspense.unmount(h, x);
                    return;
                }
                (k && qe(a, null, f, "beforeUnmount"),
                    O & 64
                        ? a.type.remove(a, f, h, pt, x)
                        : v && !v.hasOnce && (b !== oe || (S > 0 && S & 64))
                            ? ht(v, f, h, !1, !0)
                            : ((b === oe && S & 384) || (!m && O & 16)) && ht(_, f, h),
                    x && tn(a));
            }
            ((V && (N = w && w.onVnodeUnmounted)) || k) &&
                de(() => {
                    (N && Ce(N, f, a), k && qe(a, null, f, "unmounted"));
                }, h);
        },
        tn = (a) => {
            const { type: f, el: h, anchor: x, transition: m } = a;
            if (f === oe) {
                $r(h, x);
                return;
            }
            if (f === xs) {
                A(a);
                return;
            }
            const b = () => {
                (r(h), m && !m.persisted && m.afterLeave && m.afterLeave());
            };
            if (a.shapeFlag & 1 && m && !m.persisted) {
                const { leave: w, delayLeave: y } = m,
                    _ = () => w(h, b);
                y ? y(a.el, b, _) : _();
            } else b();
        },
        $r = (a, f) => {
            let h;
            for (; a !== f;) ((h = C(a)), r(a), (a = h));
            r(f);
        },
        zr = (a, f, h) => {
            const { bum: x, scope: m, job: b, subTree: w, um: y, m: _, a: v } = a;
            (gn(_),
                gn(v),
                x && Vt(x),
                m.stop(),
                b && ((b.flags |= 8), _e(w, a, f, h)),
                y && de(y, f),
                de(() => {
                    a.isUnmounted = !0;
                }, f),
                f &&
                f.pendingBranch &&
                !f.isUnmounted &&
                a.asyncDep &&
                !a.asyncResolved &&
                a.suspenseId === f.pendingId &&
                (f.deps--, f.deps === 0 && f.resolve()));
        },
        ht = (a, f, h, x = !1, m = !1, b = 0) => {
            for (let w = b; w < a.length; w++) _e(a[w], f, h, x, m);
        },
        Nt = (a) => {
            if (a.shapeFlag & 6) return Nt(a.component.subTree);
            if (a.shapeFlag & 128) return a.suspense.next();
            const f = C(a.anchor || a.el),
                h = f && f[Ri];
            return h ? C(h) : f;
        };
    let fs = !1;
    const sn = (a, f, h) => {
        (a == null
            ? f._vnode && _e(f._vnode, null, null, !0)
            : I(f._vnode || null, a, f, null, null, null, h),
            (f._vnode = a),
            fs || ((fs = !0), an(), ar(), (fs = !1)));
    },
        pt = {
            p: I,
            um: _e,
            m: Je,
            r: tn,
            mt: as,
            mc: je,
            pc: H,
            pbc: Ue,
            n: Nt,
            o: e,
        };
    return { render: sn, hydrate: void 0, createApp: Zi(sn) };
}
function bs({ type: e, props: t }, s) {
    return (s === "svg" && e === "foreignObject") ||
        (s === "mathml" &&
            e === "annotation-xml" &&
            t &&
            t.encoding &&
            t.encoding.includes("html"))
        ? void 0
        : s;
}
function Ge({ effect: e, job: t }, s) {
    s ? ((e.flags |= 32), (t.flags |= 4)) : ((e.flags &= -33), (t.flags &= -5));
}
function ao(e, t) {
    return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Mr(e, t, s = !1) {
    const n = e.children,
        r = t.children;
    if (D(n) && D(r))
        for (let i = 0; i < n.length; i++) {
            const o = n[i];
            let l = r[i];
            (l.shapeFlag & 1 &&
                !l.dynamicChildren &&
                ((l.patchFlag <= 0 || l.patchFlag === 32) &&
                    ((l = r[i] = Le(r[i])), (l.el = o.el)),
                    !s && l.patchFlag !== -2 && Mr(o, l)),
                l.type === ls && (l.el = o.el));
        }
}
function fo(e) {
    const t = e.slice(),
        s = [0];
    let n, r, i, o, l;
    const c = e.length;
    for (n = 0; n < c; n++) {
        const d = e[n];
        if (d !== 0) {
            if (((r = s[s.length - 1]), e[r] < d)) {
                ((t[n] = r), s.push(n));
                continue;
            }
            for (i = 0, o = s.length - 1; i < o;)
                ((l = (i + o) >> 1), e[s[l]] < d ? (i = l + 1) : (o = l));
            d < e[s[i]] && (i > 0 && (t[n] = s[i - 1]), (s[i] = n));
        }
    }
    for (i = s.length, o = s[i - 1]; i-- > 0;) ((s[i] = o), (o = t[o]));
    return s;
}
function Or(e) {
    const t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Or(t);
}
function gn(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const uo = Symbol.for("v-scx"),
    ho = () => Bt(uo);
function Tt(e, t, s) {
    return Ar(e, t, s);
}
function Ar(e, t, s = z) {
    const { immediate: n, deep: r, flush: i, once: o } = s,
        l = se({}, s),
        c = (t && n) || (!t && i !== "post");
    let d;
    if (Dt) {
        if (i === "sync") {
            const T = ho();
            d = T.__watcherHandles || (T.__watcherHandles = []);
        } else if (!c) {
            const T = () => { };
            return ((T.stop = Me), (T.resume = Me), (T.pause = Me), T);
        }
    }
    const u = le;
    l.call = (T, j, I) => Oe(T, u, j, I);
    let g = !1;
    (i === "post"
        ? (l.scheduler = (T) => {
            de(T, u && u.suspense);
        })
        : i !== "sync" &&
        ((g = !0),
            (l.scheduler = (T, j) => {
                j ? T() : Js(T);
            })),
        (l.augmentJob = (T) => {
            (t && (T.flags |= 4),
                g && ((T.flags |= 2), u && ((T.id = u.uid), (T.i = u))));
        }));
    const C = Ei(e, t, l);
    return (Dt && (d ? d.push(C) : c && C()), C);
}
function po(e, t, s) {
    const n = this.proxy,
        r = Y(e) ? (e.includes(".") ? Pr(n, e) : () => n[e]) : e.bind(n, n);
    let i;
    R(t) ? (i = t) : ((i = t.handler), (s = t));
    const o = kt(this),
        l = Ar(r, i.bind(n), s);
    return (o(), l);
}
function Pr(e, t) {
    const s = t.split(".");
    return () => {
        let n = e;
        for (let r = 0; r < s.length && n; r++) n = n[s[r]];
        return n;
    };
}
const go = (e, t) =>
    t === "modelValue" || t === "model-value"
        ? e.modelModifiers
        : e[`${t}Modifiers`] || e[`${ze(t)}Modifiers`] || e[`${Ve(t)}Modifiers`];
function mo(e, t, ...s) {
    if (e.isUnmounted) return;
    const n = e.vnode.props || z;
    let r = s;
    const i = t.startsWith("update:"),
        o = i && go(n, t.slice(7));
    o &&
        (o.trim && (r = s.map((u) => (Y(u) ? u.trim() : u))),
            o.number && (r = s.map(Ss)));
    let l,
        c = n[(l = us(t))] || n[(l = us(ze(t)))];
    (!c && i && (c = n[(l = us(Ve(t)))]), c && Oe(c, e, 6, r));
    const d = n[l + "Once"];
    if (d) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[l]) return;
        ((e.emitted[l] = !0), Oe(d, e, 6, r));
    }
}
function Dr(e, t, s = !1) {
    const n = t.emitsCache,
        r = n.get(e);
    if (r !== void 0) return r;
    const i = e.emits;
    let o = {},
        l = !1;
    if (!R(e)) {
        const c = (d) => {
            const u = Dr(d, t, !0);
            u && ((l = !0), se(o, u));
        };
        (!s && t.mixins.length && t.mixins.forEach(c),
            e.extends && c(e.extends),
            e.mixins && e.mixins.forEach(c));
    }
    return !i && !l
        ? (U(e) && n.set(e, null), null)
        : (D(i) ? i.forEach((c) => (o[c] = null)) : se(o, i),
            U(e) && n.set(e, o),
            o);
}
function os(e, t) {
    return !e || !Xt(t)
        ? !1
        : ((t = t.slice(2).replace(/Once$/, "")),
            L(e, t[0].toLowerCase() + t.slice(1)) || L(e, Ve(t)) || L(e, t));
}
function mn(e) {
    const {
        type: t,
        vnode: s,
        proxy: n,
        withProxy: r,
        propsOptions: [i],
        slots: o,
        attrs: l,
        emit: c,
        render: d,
        renderCache: u,
        props: g,
        data: C,
        setupState: T,
        ctx: j,
        inheritAttrs: I,
    } = e,
        X = qt(e);
    let $, W;
    try {
        if (s.shapeFlag & 4) {
            const A = r || n,
                Q = A;
            (($ = Ee(d.call(Q, A, u, g, T, C, j))), (W = l));
        } else {
            const A = t;
            (($ = Ee(
                A.length > 1 ? A(g, { attrs: l, slots: o, emit: c }) : A(g, null),
            )),
                (W = t.props ? l : bo(l)));
        }
    } catch (A) {
        ((Et.length = 0), rs(A, e, 1), ($ = xe(tt)));
    }
    let J = $;
    if (W && I !== !1) {
        const A = Object.keys(W),
            { shapeFlag: Q } = J;
        A.length &&
            Q & 7 &&
            (i && A.some(Fs) && (W = xo(W, i)), (J = ut(J, W, !1, !0)));
    }
    return (
        s.dirs &&
        ((J = ut(J, null, !1, !0)),
            (J.dirs = J.dirs ? J.dirs.concat(s.dirs) : s.dirs)),
        s.transition && qs(J, s.transition),
        ($ = J),
        qt(X),
        $
    );
}
const bo = (e) => {
    let t;
    for (const s in e)
        (s === "class" || s === "style" || Xt(s)) && ((t || (t = {}))[s] = e[s]);
    return t;
},
    xo = (e, t) => {
        const s = {};
        for (const n in e) (!Fs(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
        return s;
    };
function vo(e, t, s) {
    const { props: n, children: r, component: i } = e,
        { props: o, children: l, patchFlag: c } = t,
        d = i.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (s && c >= 0) {
        if (c & 1024) return !0;
        if (c & 16) return n ? bn(n, o, d) : !!o;
        if (c & 8) {
            const u = t.dynamicProps;
            for (let g = 0; g < u.length; g++) {
                const C = u[g];
                if (o[C] !== n[C] && !os(d, C)) return !0;
            }
        }
    } else
        return (r || l) && (!l || !l.$stable)
            ? !0
            : n === o
                ? !1
                : n
                    ? o
                        ? bn(n, o, d)
                        : !0
                    : !!o;
    return !1;
}
function bn(e, t, s) {
    const n = Object.keys(t);
    if (n.length !== Object.keys(e).length) return !0;
    for (let r = 0; r < n.length; r++) {
        const i = n[r];
        if (t[i] !== e[i] && !os(s, i)) return !0;
    }
    return !1;
}
function _o({ vnode: e, parent: t }, s) {
    for (; t;) {
        const n = t.subTree;
        if ((n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e))
            (((e = t.vnode).el = s), (t = t.parent));
        else break;
    }
}
const Rr = (e) => e.__isSuspense;
function yo(e, t) {
    t && t.pendingBranch
        ? D(e)
            ? t.effects.push(...e)
            : t.effects.push(e)
        : Ai(e);
}
const oe = Symbol.for("v-fgt"),
    ls = Symbol.for("v-txt"),
    tt = Symbol.for("v-cmt"),
    xs = Symbol.for("v-stc"),
    Et = [];
let pe = null;
function q(e = !1) {
    Et.push((pe = e ? null : []));
}
function wo() {
    (Et.pop(), (pe = Et[Et.length - 1] || null));
}
let Pt = 1;
function xn(e, t = !1) {
    ((Pt += e), e < 0 && pe && t && (pe.hasOnce = !0));
}
function kr(e) {
    return (
        (e.dynamicChildren = Pt > 0 ? pe || ot : null),
        wo(),
        Pt > 0 && pe && pe.push(e),
        e
    );
}
function G(e, t, s, n, r, i) {
    return kr(p(e, t, s, n, r, i, !0));
}
function So(e, t, s, n, r) {
    return kr(xe(e, t, s, n, r, !0));
}
function Ir(e) {
    return e ? e.__v_isVNode === !0 : !1;
}
function bt(e, t) {
    return e.type === t.type && e.key === t.key;
}
const jr = ({ key: e }) => e ?? null,
    Kt = ({ ref: e, ref_key: t, ref_for: s }) => (
        typeof e == "number" && (e = "" + e),
        e != null
            ? Y(e) || te(e) || R(e)
                ? { i: ge, r: e, k: t, f: !!s }
                : e
            : null
    );
function p(
    e,
    t = null,
    s = null,
    n = 0,
    r = null,
    i = e === oe ? 0 : 1,
    o = !1,
    l = !1,
) {
    const c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && jr(t),
        ref: t && Kt(t),
        scopeId: ur,
        slotScopeIds: null,
        children: s,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: i,
        patchFlag: n,
        dynamicProps: r,
        dynamicChildren: null,
        appContext: null,
        ctx: ge,
    };
    return (
        l
            ? (Zs(c, s), i & 128 && e.normalize(c))
            : s && (c.shapeFlag |= Y(s) ? 8 : 16),
        Pt > 0 &&
        !o &&
        pe &&
        (c.patchFlag > 0 || i & 6) &&
        c.patchFlag !== 32 &&
        pe.push(c),
        c
    );
}
const xe = Co;
function Co(e, t = null, s = null, n = 0, r = null, i = !1) {
    if (((!e || e === Ui) && (e = tt), Ir(e))) {
        const l = ut(e, t, !0);
        return (
            s && Zs(l, s),
            Pt > 0 &&
            !i &&
            pe &&
            (l.shapeFlag & 6 ? (pe[pe.indexOf(e)] = l) : pe.push(l)),
            (l.patchFlag = -2),
            l
        );
    }
    if ((Io(e) && (e = e.__vccOpts), t)) {
        t = To(t);
        let { class: l, style: c } = t;
        (l && !Y(l) && (t.class = E(l)),
            U(c) && (Ws(c) && !D(c) && (c = se({}, c)), (t.style = ss(c))));
    }
    const o = Y(e) ? 1 : Rr(e) ? 128 : ki(e) ? 64 : U(e) ? 4 : R(e) ? 2 : 0;
    return p(e, t, s, n, r, o, i, !0);
}
function To(e) {
    return e ? (Ws(e) || _r(e) ? se({}, e) : e) : null;
}
function ut(e, t, s = !1, n = !1) {
    const { props: r, ref: i, patchFlag: o, children: l, transition: c } = e,
        d = t ? Eo(r || {}, t) : r,
        u = {
            __v_isVNode: !0,
            __v_skip: !0,
            type: e.type,
            props: d,
            key: d && jr(d),
            ref:
                t && t.ref
                    ? s && i
                        ? D(i)
                            ? i.concat(Kt(t))
                            : [i, Kt(t)]
                        : Kt(t)
                    : i,
            scopeId: e.scopeId,
            slotScopeIds: e.slotScopeIds,
            children: l,
            target: e.target,
            targetStart: e.targetStart,
            targetAnchor: e.targetAnchor,
            staticCount: e.staticCount,
            shapeFlag: e.shapeFlag,
            patchFlag: t && e.type !== oe ? (o === -1 ? 16 : o | 16) : o,
            dynamicProps: e.dynamicProps,
            dynamicChildren: e.dynamicChildren,
            appContext: e.appContext,
            dirs: e.dirs,
            transition: c,
            component: e.component,
            suspense: e.suspense,
            ssContent: e.ssContent && ut(e.ssContent),
            ssFallback: e.ssFallback && ut(e.ssFallback),
            el: e.el,
            anchor: e.anchor,
            ctx: e.ctx,
            ce: e.ce,
        };
    return (c && n && qs(u, c.clone(u)), u);
}
function Qe(e = " ", t = 0) {
    return xe(ls, null, e, t);
}
function vs(e = "", t = !1) {
    return t ? (q(), So(tt, null, e)) : xe(tt, null, e);
}
function Ee(e) {
    return e == null || typeof e == "boolean"
        ? xe(tt)
        : D(e)
            ? xe(oe, null, e.slice())
            : Ir(e)
                ? Le(e)
                : xe(ls, null, String(e));
}
function Le(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : ut(e);
}
function Zs(e, t) {
    let s = 0;
    const { shapeFlag: n } = e;
    if (t == null) t = null;
    else if (D(t)) s = 16;
    else if (typeof t == "object")
        if (n & 65) {
            const r = t.default;
            r && (r._c && (r._d = !1), Zs(e, r()), r._c && (r._d = !0));
            return;
        } else {
            s = 32;
            const r = t._;
            !r && !_r(t)
                ? (t._ctx = ge)
                : r === 3 &&
                ge &&
                (ge.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
        }
    else
        R(t)
            ? ((t = { default: t, _ctx: ge }), (s = 32))
            : ((t = String(t)), n & 64 ? ((s = 16), (t = [Qe(t)])) : (s = 8));
    ((e.children = t), (e.shapeFlag |= s));
}
function Eo(...e) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
        const n = e[s];
        for (const r in n)
            if (r === "class")
                t.class !== n.class && (t.class = E([t.class, n.class]));
            else if (r === "style") t.style = ss([t.style, n.style]);
            else if (Xt(r)) {
                const i = t[r],
                    o = n[r];
                o &&
                    i !== o &&
                    !(D(i) && i.includes(o)) &&
                    (t[r] = i ? [].concat(i, o) : o);
            } else r !== "" && (t[r] = n[r]);
    }
    return t;
}
function Ce(e, t, s, n = null) {
    Oe(e, t, 7, [s, n]);
}
const Mo = br();
let Oo = 0;
function Ao(e, t, s) {
    const n = e.type,
        r = (t ? t.appContext : e.appContext) || Mo,
        i = {
            uid: Oo++,
            vnode: e,
            type: n,
            parent: t,
            appContext: r,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            job: null,
            scope: new Xr(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(r.provides),
            ids: t ? t.ids : ["", 0, 0],
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: wr(n, r),
            emitsOptions: Dr(n, r),
            emit: null,
            emitted: null,
            propsDefaults: z,
            inheritAttrs: n.inheritAttrs,
            ctx: z,
            data: z,
            props: z,
            attrs: z,
            slots: z,
            refs: z,
            setupState: z,
            setupContext: null,
            suspense: s,
            suspenseId: s ? s.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null,
        };
    return (
        (i.ctx = { _: i }),
        (i.root = t ? t.root : i),
        (i.emit = mo.bind(null, i)),
        e.ce && e.ce(i),
        i
    );
}
let le = null,
    Qt,
    ks;
{
    const e = ts(),
        t = (s, n) => {
            let r;
            return (
                (r = e[s]) || (r = e[s] = []),
                r.push(n),
                (i) => {
                    r.length > 1 ? r.forEach((o) => o(i)) : r[0](i);
                }
            );
        };
    ((Qt = t("__VUE_INSTANCE_SETTERS__", (s) => (le = s))),
        (ks = t("__VUE_SSR_SETTERS__", (s) => (Dt = s))));
}
const kt = (e) => {
    const t = le;
    return (
        Qt(e),
        e.scope.on(),
        () => {
            (e.scope.off(), Qt(t));
        }
    );
},
    vn = () => {
        (le && le.scope.off(), Qt(null));
    };
function Fr(e) {
    return e.vnode.shapeFlag & 4;
}
let Dt = !1;
function Po(e, t = !1, s = !1) {
    t && ks(t);
    const { props: n, children: r } = e.vnode,
        i = Fr(e);
    (to(e, n, i, t), io(e, r, s));
    const o = i ? Do(e, t) : void 0;
    return (t && ks(!1), o);
}
function Do(e, t) {
    const s = e.type;
    ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Wi)));
    const { setup: n } = s;
    if (n) {
        Be();
        const r = (e.setupContext = n.length > 1 ? ko(e) : null),
            i = kt(e),
            o = Rt(n, e, 0, [e.props, r]),
            l = Fn(o);
        if ((Ke(), i(), (l || e.sp) && !St(e) && dr(e), l)) {
            if ((o.then(vn, vn), t))
                return o
                    .then((c) => {
                        _n(e, c);
                    })
                    .catch((c) => {
                        rs(c, e, 0);
                    });
            e.asyncDep = o;
        } else _n(e, o);
    } else Lr(e);
}
function _n(e, t, s) {
    (R(t)
        ? e.type.__ssrInlineRender
            ? (e.ssrRender = t)
            : (e.render = t)
        : U(t) && (e.setupState = ir(t)),
        Lr(e));
}
function Lr(e, t, s) {
    const n = e.type;
    e.render || (e.render = n.render || Me);
    {
        const r = kt(e);
        Be();
        try {
            Ji(e);
        } finally {
            (Ke(), r());
        }
    }
}
const Ro = {
    get(e, t) {
        return (Z(e, "get", ""), e[t]);
    },
};
function ko(e) {
    const t = (s) => {
        e.exposed = s || {};
    };
    return {
        attrs: new Proxy(e.attrs, Ro),
        slots: e.slots,
        emit: e.emit,
        expose: t,
    };
}
function cs(e) {
    return e.exposed
        ? e.exposeProxy ||
        (e.exposeProxy = new Proxy(ir(vi(e.exposed)), {
            get(t, s) {
                if (s in t) return t[s];
                if (s in Ct) return Ct[s](e);
            },
            has(t, s) {
                return s in t || s in Ct;
            },
        }))
        : e.proxy;
}
function Io(e) {
    return R(e) && "__vccOpts" in e;
}
const jo = (e, t) => Ci(e, t, Dt),
    Fo = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Is;
const yn = typeof window < "u" && window.trustedTypes;
if (yn)
    try {
        Is = yn.createPolicy("vue", { createHTML: (e) => e });
    } catch { }
const Nr = Is ? (e) => Is.createHTML(e) : (e) => e,
    Lo = "http://www.w3.org/2000/svg",
    No = "http://www.w3.org/1998/Math/MathML",
    Pe = typeof document < "u" ? document : null,
    wn = Pe && Pe.createElement("template"),
    $o = {
        insert: (e, t, s) => {
            t.insertBefore(e, s || null);
        },
        remove: (e) => {
            const t = e.parentNode;
            t && t.removeChild(e);
        },
        createElement: (e, t, s, n) => {
            const r =
                t === "svg"
                    ? Pe.createElementNS(Lo, e)
                    : t === "mathml"
                        ? Pe.createElementNS(No, e)
                        : s
                            ? Pe.createElement(e, { is: s })
                            : Pe.createElement(e);
            return (
                e === "select" &&
                n &&
                n.multiple != null &&
                r.setAttribute("multiple", n.multiple),
                r
            );
        },
        createText: (e) => Pe.createTextNode(e),
        createComment: (e) => Pe.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t;
        },
        setElementText: (e, t) => {
            e.textContent = t;
        },
        parentNode: (e) => e.parentNode,
        nextSibling: (e) => e.nextSibling,
        querySelector: (e) => Pe.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "");
        },
        insertStaticContent(e, t, s, n, r, i) {
            const o = s ? s.previousSibling : t.lastChild;
            if (r && (r === i || r.nextSibling))
                for (
                    ;
                    t.insertBefore(r.cloneNode(!0), s),
                    !(r === i || !(r = r.nextSibling));
                );
            else {
                wn.innerHTML = Nr(
                    n === "svg"
                        ? `<svg>${e}</svg>`
                        : n === "mathml"
                            ? `<math>${e}</math>`
                            : e,
                );
                const l = wn.content;
                if (n === "svg" || n === "mathml") {
                    const c = l.firstChild;
                    for (; c.firstChild;) l.appendChild(c.firstChild);
                    l.removeChild(c);
                }
                t.insertBefore(l, s);
            }
            return [
                o ? o.nextSibling : t.firstChild,
                s ? s.previousSibling : t.lastChild,
            ];
        },
    },
    zo = Symbol("_vtc");
function Ho(e, t, s) {
    const n = e[zo];
    (n && (t = (t ? [t, ...n] : [...n]).join(" ")),
        t == null
            ? e.removeAttribute("class")
            : s
                ? e.setAttribute("class", t)
                : (e.className = t));
}
const Sn = Symbol("_vod"),
    Vo = Symbol("_vsh"),
    Bo = Symbol(""),
    Ko = /(^|;)\s*display\s*:/;
function Uo(e, t, s) {
    const n = e.style,
        r = Y(s);
    let i = !1;
    if (s && !r) {
        if (t)
            if (Y(t))
                for (const o of t.split(";")) {
                    const l = o.slice(0, o.indexOf(":")).trim();
                    s[l] == null && Ut(n, l, "");
                }
            else for (const o in t) s[o] == null && Ut(n, o, "");
        for (const o in s) (o === "display" && (i = !0), Ut(n, o, s[o]));
    } else if (r) {
        if (t !== s) {
            const o = n[Bo];
            (o && (s += ";" + o), (n.cssText = s), (i = Ko.test(s)));
        }
    } else t && e.removeAttribute("style");
    Sn in e && ((e[Sn] = i ? n.display : ""), e[Vo] && (n.display = "none"));
}
const Cn = /\s*!important$/;
function Ut(e, t, s) {
    if (D(s)) s.forEach((n) => Ut(e, t, n));
    else if ((s == null && (s = ""), t.startsWith("--"))) e.setProperty(t, s);
    else {
        const n = Wo(e, t);
        Cn.test(s)
            ? e.setProperty(Ve(n), s.replace(Cn, ""), "important")
            : (e[n] = s);
    }
}
const Tn = ["Webkit", "Moz", "ms"],
    _s = {};
function Wo(e, t) {
    const s = _s[t];
    if (s) return s;
    let n = ze(t);
    if (n !== "filter" && n in e) return (_s[t] = n);
    n = $n(n);
    for (let r = 0; r < Tn.length; r++) {
        const i = Tn[r] + n;
        if (i in e) return (_s[t] = i);
    }
    return t;
}
const En = "http://www.w3.org/1999/xlink";
function Mn(e, t, s, n, r, i = Qr(t)) {
    n && t.startsWith("xlink:")
        ? s == null
            ? e.removeAttributeNS(En, t.slice(6, t.length))
            : e.setAttributeNS(En, t, s)
        : s == null || (i && !Hn(s))
            ? e.removeAttribute(t)
            : e.setAttribute(t, i ? "" : He(s) ? String(s) : s);
}
function On(e, t, s, n, r) {
    if (t === "innerHTML" || t === "textContent") {
        s != null && (e[t] = t === "innerHTML" ? Nr(s) : s);
        return;
    }
    const i = e.tagName;
    if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
        const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
            c = s == null ? (e.type === "checkbox" ? "on" : "") : String(s);
        ((l !== c || !("_value" in e)) && (e.value = c),
            s == null && e.removeAttribute(t),
            (e._value = s));
        return;
    }
    let o = !1;
    if (s === "" || s == null) {
        const l = typeof e[t];
        l === "boolean"
            ? (s = Hn(s))
            : s == null && l === "string"
                ? ((s = ""), (o = !0))
                : l === "number" && ((s = 0), (o = !0));
    }
    try {
        e[t] = s;
    } catch { }
    o && e.removeAttribute(r || t);
}
function it(e, t, s, n) {
    e.addEventListener(t, s, n);
}
function Jo(e, t, s, n) {
    e.removeEventListener(t, s, n);
}
const An = Symbol("_vei");
function qo(e, t, s, n, r = null) {
    const i = e[An] || (e[An] = {}),
        o = i[t];
    if (n && o) o.value = n;
    else {
        const [l, c] = Go(t);
        if (n) {
            const d = (i[t] = Xo(n, r));
            it(e, l, d, c);
        } else o && (Jo(e, l, o, c), (i[t] = void 0));
    }
}
const Pn = /(?:Once|Passive|Capture)$/;
function Go(e) {
    let t;
    if (Pn.test(e)) {
        t = {};
        let n;
        for (; (n = e.match(Pn));)
            ((e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0));
    }
    return [e[2] === ":" ? e.slice(3) : Ve(e.slice(2)), t];
}
let ys = 0;
const Yo = Promise.resolve(),
    Qo = () => ys || (Yo.then(() => (ys = 0)), (ys = Date.now()));
function Xo(e, t) {
    const s = (n) => {
        if (!n._vts) n._vts = Date.now();
        else if (n._vts <= s.attached) return;
        Oe(Zo(n, s.value), t, 5, [n]);
    };
    return ((s.value = e), (s.attached = Qo()), s);
}
function Zo(e, t) {
    if (D(t)) {
        const s = e.stopImmediatePropagation;
        return (
            (e.stopImmediatePropagation = () => {
                (s.call(e), (e._stopped = !0));
            }),
            t.map((n) => (r) => !r._stopped && n && n(r))
        );
    } else return t;
}
const Dn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    e.charCodeAt(2) > 96 &&
    e.charCodeAt(2) < 123,
    el = (e, t, s, n, r, i) => {
        const o = r === "svg";
        t === "class"
            ? Ho(e, n, o)
            : t === "style"
                ? Uo(e, s, n)
                : Xt(t)
                    ? Fs(t) || qo(e, t, s, n, i)
                    : (
                        t[0] === "."
                            ? ((t = t.slice(1)), !0)
                            : t[0] === "^"
                                ? ((t = t.slice(1)), !1)
                                : tl(e, t, n, o)
                    )
                        ? (On(e, t, n),
                            !e.tagName.includes("-") &&
                            (t === "value" || t === "checked" || t === "selected") &&
                            Mn(e, t, n, o, i, t !== "value"))
                        : e._isVueCE && (/[A-Z]/.test(t) || !Y(n))
                            ? On(e, ze(t), n, i, t)
                            : (t === "true-value"
                                ? (e._trueValue = n)
                                : t === "false-value" && (e._falseValue = n),
                                Mn(e, t, n, o));
    };
function tl(e, t, s, n) {
    if (n)
        return !!(
            t === "innerHTML" ||
            t === "textContent" ||
            (t in e && Dn(t) && R(s))
        );
    if (
        t === "spellcheck" ||
        t === "draggable" ||
        t === "translate" ||
        t === "form" ||
        (t === "list" && e.tagName === "INPUT") ||
        (t === "type" && e.tagName === "TEXTAREA")
    )
        return !1;
    if (t === "width" || t === "height") {
        const r = e.tagName;
        if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
            return !1;
    }
    return Dn(t) && Y(s) ? !1 : t in e;
}
const Rn = (e) => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return D(t) ? (s) => Vt(t, s) : t;
};
function sl(e) {
    e.target.composing = !0;
}
function kn(e) {
    const t = e.target;
    t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const ws = Symbol("_assign"),
    nl = {
        created(e, { modifiers: { lazy: t, trim: s, number: n } }, r) {
            e[ws] = Rn(r);
            const i = n || (r.props && r.props.type === "number");
            (it(e, t ? "change" : "input", (o) => {
                if (o.target.composing) return;
                let l = e.value;
                (s && (l = l.trim()), i && (l = Ss(l)), e[ws](l));
            }),
                s &&
                it(e, "change", () => {
                    e.value = e.value.trim();
                }),
                t ||
                (it(e, "compositionstart", sl),
                    it(e, "compositionend", kn),
                    it(e, "change", kn)));
        },
        mounted(e, { value: t }) {
            e.value = t ?? "";
        },
        beforeUpdate(
            e,
            { value: t, oldValue: s, modifiers: { lazy: n, trim: r, number: i } },
            o,
        ) {
            if (((e[ws] = Rn(o)), e.composing)) return;
            const l =
                (i || e.type === "number") && !/^0\d/.test(e.value)
                    ? Ss(e.value)
                    : e.value,
                c = t ?? "";
            l !== c &&
                ((document.activeElement === e &&
                    e.type !== "range" &&
                    ((n && t === s) || (r && e.value.trim() === c))) ||
                    (e.value = c));
        },
    },
    rl = ["ctrl", "shift", "alt", "meta"],
    il = {
        stop: (e) => e.stopPropagation(),
        prevent: (e) => e.preventDefault(),
        self: (e) => e.target !== e.currentTarget,
        ctrl: (e) => !e.ctrlKey,
        shift: (e) => !e.shiftKey,
        alt: (e) => !e.altKey,
        meta: (e) => !e.metaKey,
        left: (e) => "button" in e && e.button !== 0,
        middle: (e) => "button" in e && e.button !== 1,
        right: (e) => "button" in e && e.button !== 2,
        exact: (e, t) => rl.some((s) => e[`${s}Key`] && !t.includes(s)),
    },
    Xe = (e, t) => {
        const s = e._withMods || (e._withMods = {}),
            n = t.join(".");
        return (
            s[n] ||
            (s[n] = (r, ...i) => {
                for (let o = 0; o < t.length; o++) {
                    const l = il[t[o]];
                    if (l && l(r, t)) return;
                }
                return e(r, ...i);
            })
        );
    },
    ol = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace",
    },
    ll = (e, t) => {
        const s = e._withKeys || (e._withKeys = {}),
            n = t.join(".");
        return (
            s[n] ||
            (s[n] = (r) => {
                if (!("key" in r)) return;
                const i = Ve(r.key);
                if (t.some((o) => o === i || ol[o] === i)) return e(r);
            })
        );
    },
    cl = se({ patchProp: el }, $o);
let In;
function al() {
    return In || (In = lo(cl));
}
const fl = (...e) => {
    const t = al().createApp(...e),
        { mount: s } = t;
    return (
        (t.mount = (n) => {
            const r = dl(n);
            if (!r) return;
            const i = t._component;
            (!R(i) && !i.render && !i.template && (i.template = r.innerHTML),
                r.nodeType === 1 && (r.textContent = ""));
            const o = s(r, !1, ul(r));
            return (
                r instanceof Element &&
                (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
                o
            );
        }),
        t
    );
};
function ul(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement)
        return "mathml";
}
function dl(e) {
    return Y(e) ? document.querySelector(e) : e;
}
const hl = {
    class: "container mx-auto px-6 flex justify-between items-center",
},
    pl = { class: "flex items-center space-x-8" },
    gl = {
        class:
            "hidden md:flex space-x-10 text-[13px] font-semibold uppercase tracking-widest text-zinc-500",
    },
    ml = { class: "flex items-center space-x-4" },
    bl = { key: 0, class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20" },
    xl = { key: 1, class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20" },
    vl = Gs({
        __name: "Navbar",
        props: { isDarkMode: { type: Boolean } },
        emits: ["toggleDarkMode", "navClick"],
        setup(e, { emit: t }) {
            const s = t,
                n = Ne(!1),
                r = () => {
                    n.value = window.scrollY > 20;
                };
            return (
                Ys(() => {
                    window.addEventListener("scroll", r);
                }),
                Qs(() => {
                    window.removeEventListener("scroll", r);
                }),
                (i, o) => (
                    q(),
                    G(
                        "nav",
                        {
                            class: E([
                                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                                n.value
                                    ? i.isDarkMode
                                        ? "bg-[#121212]/90 backdrop-blur-md py-3 shadow-lg border-b border-zinc-800"
                                        : "glass-light py-3 shadow-sm border-b"
                                    : "bg-transparent py-6",
                            ]),
                        },
                        [
                            p("div", hl, [
                                p(
                                    "a",
                                    {
                                        href: "#",
                                        class: E([
                                            "text-xl font-bold mono tracking-tighter",
                                            i.isDarkMode ? "text-white" : "text-slate-900",
                                        ]),
                                    },
                                    o[6] ||
                                    (o[6] = [
                                        p("span", { class: "text-blue-600" }, "<", -1),
                                        Qe("Dev.FullStack"),
                                        p("span", { class: "text-blue-600" }, " />", -1),
                                    ]),
                                    2,
                                ),
                                p("div", pl, [
                                    p("div", gl, [
                                        p(
                                            "a",
                                            {
                                                href: "#about",
                                                onClick:
                                                    o[0] ||
                                                    (o[0] = Xe(
                                                        (l) => s("navClick", "#about"),
                                                        ["prevent"],
                                                    )),
                                                class: E([
                                                    "transition-colors",
                                                    i.isDarkMode
                                                        ? "hover:text-white"
                                                        : "hover:text-blue-600",
                                                ]),
                                            },
                                            "Sobre",
                                            2,
                                        ),
                                        p(
                                            "a",
                                            {
                                                href: "#skills",
                                                onClick:
                                                    o[1] ||
                                                    (o[1] = Xe(
                                                        (l) => s("navClick", "#skills"),
                                                        ["prevent"],
                                                    )),
                                                class: E([
                                                    "transition-colors",
                                                    i.isDarkMode
                                                        ? "hover:text-white"
                                                        : "hover:text-blue-600",
                                                ]),
                                            },
                                            "Habilidades",
                                            2,
                                        ),
                                        p(
                                            "a",
                                            {
                                                href: "#projects",
                                                onClick:
                                                    o[2] ||
                                                    (o[2] = Xe(
                                                        (l) => s("navClick", "#projects"),
                                                        ["prevent"],
                                                    )),
                                                class: E([
                                                    "transition-colors",
                                                    i.isDarkMode
                                                        ? "hover:text-white"
                                                        : "hover:text-blue-600",
                                                ]),
                                            },
                                            "Projetos",
                                            2,
                                        ),
                                        p(
                                            "a",
                                            {
                                                href: "#experience",
                                                onClick:
                                                    o[3] ||
                                                    (o[3] = Xe(
                                                        (l) => s("navClick", "#experience"),
                                                        ["prevent"],
                                                    )),
                                                class: E([
                                                    "transition-colors",
                                                    i.isDarkMode
                                                        ? "hover:text-white"
                                                        : "hover:text-blue-600",
                                                ]),
                                            },
                                            "Experiência",
                                            2,
                                        ),
                                    ]),
                                    p("div", ml, [
                                        p(
                                            "button",
                                            {
                                                onClick: o[4] || (o[4] = (l) => s("toggleDarkMode")),
                                                class: E([
                                                    "p-2 rounded-full transition-all",
                                                    i.isDarkMode
                                                        ? "bg-zinc-800 text-yellow-400 hover:bg-zinc-700"
                                                        : "bg-slate-100 text-slate-600 hover:bg-slate-200",
                                                ]),
                                                "aria-label": "Toggle Dark Mode",
                                            },
                                            [
                                                i.isDarkMode
                                                    ? (q(),
                                                        G(
                                                            "svg",
                                                            bl,
                                                            o[7] ||
                                                            (o[7] = [
                                                                p(
                                                                    "path",
                                                                    {
                                                                        d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z",
                                                                    },
                                                                    null,
                                                                    -1,
                                                                ),
                                                            ]),
                                                        ))
                                                    : (q(),
                                                        G(
                                                            "svg",
                                                            xl,
                                                            o[8] ||
                                                            (o[8] = [
                                                                p(
                                                                    "path",
                                                                    {
                                                                        d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z",
                                                                    },
                                                                    null,
                                                                    -1,
                                                                ),
                                                            ]),
                                                        )),
                                            ],
                                            2,
                                        ),
                                        p(
                                            "a",
                                            {
                                                href: "#contact",
                                                onClick:
                                                    o[5] ||
                                                    (o[5] = Xe(
                                                        (l) => s("navClick", "#contact"),
                                                        ["prevent"],
                                                    )),
                                                class: E([
                                                    "px-5 py-2 rounded-full font-bold text-xs uppercase transition-all",
                                                    i.isDarkMode
                                                        ? "bg-white text-black hover:bg-zinc-200"
                                                        : "bg-slate-900 text-white hover:bg-blue-600",
                                                ]),
                                            },
                                            "Contato",
                                            2,
                                        ),
                                    ]),
                                ]),
                            ]),
                        ],
                        2,
                    )
                )
            );
        },
    }),
    _l = { class: "fixed bottom-6 right-6 z-[60]" },
    yl = { key: 0, class: "flex justify-start" },
    wl = Gs({
        __name: "ChatWidget",
        props: { isDarkMode: { type: Boolean } },
        setup(e) {
            const t = Ne(!1),
                s = Ne([
                    {
                        role: "model",
                        text: "Olá! Sou seu assistente IA. Como posso ajudar você hoje?",
                    },
                ]),
                n = Ne(""),
                r = Ne(!1),
                i = Ne(null),
                o = () => {
                    i.value && (i.value.scrollTop = i.value.scrollHeight);
                };
            Tt(
                s,
                async () => {
                    (await lr(), o());
                },
                { deep: !0 },
            );
            const l = async () => {
                if (!n.value.trim() || r.value) return;
                const c = n.value.trim();
                (s.value.push({ role: "user", text: c }),
                    (n.value = ""),
                    (r.value = !0));
                try {
                    const d = await fetch("/api/chat", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ message: c }),
                    });
                    if (!d.ok) throw new Error("Falha na resposta do servidor");
                    const u = await d.json();
                    s.value.push({ role: "model", text: u.reply });
                } catch (d) {
                    (console.error("Chat Error:", d),
                        s.value.push({
                            role: "model",
                            text: "Desculpe, estou offline no momento.",
                        }));
                } finally {
                    r.value = !1;
                }
            };
            return (c, d) => (
                q(),
                G("div", _l, [
                    t.value
                        ? vs("", !0)
                        : (q(),
                            G(
                                "button",
                                {
                                    key: 0,
                                    onClick: d[0] || (d[0] = (u) => (t.value = !0)),
                                    class: E([
                                        "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-105 active:scale-95",
                                        c.isDarkMode
                                            ? "bg-white text-black hover:bg-zinc-200"
                                            : "bg-slate-900 text-white hover:bg-blue-600",
                                    ]),
                                },
                                d[3] ||
                                (d[3] = [
                                    p(
                                        "svg",
                                        {
                                            class: "w-6 h-6",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                        },
                                        [
                                            p("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
                                            }),
                                        ],
                                        -1,
                                    ),
                                ]),
                                2,
                            )),
                    t.value
                        ? (q(),
                            G(
                                "div",
                                {
                                    key: 1,
                                    class: E([
                                        "w-80 h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border transition-colors",
                                        c.isDarkMode
                                            ? "bg-[#1a1a1a] border-zinc-800"
                                            : "bg-white border-slate-100",
                                    ]),
                                },
                                [
                                    p(
                                        "div",
                                        {
                                            class: E([
                                                c.isDarkMode ? "bg-zinc-900" : "bg-slate-900",
                                                "p-5 flex justify-between items-center",
                                            ]),
                                        },
                                        [
                                            d[4] ||
                                            (d[4] = p(
                                                "div",
                                                { class: "flex items-center space-x-3" },
                                                [
                                                    p(
                                                        "div",
                                                        {
                                                            class:
                                                                "w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs",
                                                        },
                                                        "IA",
                                                    ),
                                                    p(
                                                        "span",
                                                        { class: "font-bold text-white text-sm" },
                                                        "Assistente",
                                                    ),
                                                ],
                                                -1,
                                            )),
                                            p(
                                                "button",
                                                {
                                                    onClick: d[1] || (d[1] = (u) => (t.value = !1)),
                                                    class:
                                                        "text-white/50 hover:text-white transition-colors",
                                                },
                                                "✕",
                                            ),
                                        ],
                                        2,
                                    ),
                                    p(
                                        "div",
                                        {
                                            ref_key: "scrollRef",
                                            ref: i,
                                            class: E([
                                                "flex-1 p-5 overflow-y-auto space-y-4 text-[13px]",
                                                c.isDarkMode ? "bg-zinc-950/50" : "bg-slate-50/50",
                                            ]),
                                        },
                                        [
                                            (q(!0),
                                                G(
                                                    oe,
                                                    null,
                                                    rt(
                                                        s.value,
                                                        (u, g) => (
                                                            q(),
                                                            G(
                                                                "div",
                                                                {
                                                                    key: g,
                                                                    class: E([
                                                                        "flex",
                                                                        u.role === "user"
                                                                            ? "justify-end"
                                                                            : "justify-start",
                                                                    ]),
                                                                },
                                                                [
                                                                    p(
                                                                        "div",
                                                                        {
                                                                            class: E([
                                                                                "max-w-[85%] px-4 py-3 rounded-2xl",
                                                                                u.role === "user"
                                                                                    ? "bg-blue-600 text-white rounded-br-none shadow-md"
                                                                                    : c.isDarkMode
                                                                                        ? "bg-zinc-800 text-zinc-200 border border-zinc-700 rounded-bl-none"
                                                                                        : "bg-white text-slate-800 shadow-sm border border-slate-100 rounded-bl-none",
                                                                            ]),
                                                                        },
                                                                        ue(u.text),
                                                                        3,
                                                                    ),
                                                                ],
                                                                2,
                                                            )
                                                        ),
                                                    ),
                                                    128,
                                                )),
                                            r.value
                                                ? (q(),
                                                    G("div", yl, [
                                                        p(
                                                            "div",
                                                            {
                                                                class: E([
                                                                    "px-4 py-3 rounded-2xl border flex space-x-1",
                                                                    c.isDarkMode
                                                                        ? "bg-zinc-800 border-zinc-700"
                                                                        : "bg-white border-slate-100 shadow-sm",
                                                                ]),
                                                            },
                                                            [
                                                                p(
                                                                    "div",
                                                                    {
                                                                        class: E([
                                                                            "w-1.5 h-1.5 rounded-full animate-bounce",
                                                                            c.isDarkMode
                                                                                ? "bg-zinc-600"
                                                                                : "bg-slate-300",
                                                                        ]),
                                                                    },
                                                                    null,
                                                                    2,
                                                                ),
                                                                p(
                                                                    "div",
                                                                    {
                                                                        class: E([
                                                                            "w-1.5 h-1.5 rounded-full animate-bounce delay-75",
                                                                            c.isDarkMode
                                                                                ? "bg-zinc-600"
                                                                                : "bg-slate-300",
                                                                        ]),
                                                                    },
                                                                    null,
                                                                    2,
                                                                ),
                                                                p(
                                                                    "div",
                                                                    {
                                                                        class: E([
                                                                            "w-1.5 h-1.5 rounded-full animate-bounce delay-150",
                                                                            c.isDarkMode
                                                                                ? "bg-zinc-600"
                                                                                : "bg-slate-300",
                                                                        ]),
                                                                    },
                                                                    null,
                                                                    2,
                                                                ),
                                                            ],
                                                            2,
                                                        ),
                                                    ]))
                                                : vs("", !0),
                                        ],
                                        2,
                                    ),
                                    p(
                                        "div",
                                        {
                                            class: E([
                                                "p-4 border-t flex space-x-2",
                                                c.isDarkMode
                                                    ? "bg-[#1a1a1a] border-zinc-800"
                                                    : "bg-white border-slate-100",
                                            ]),
                                        },
                                        [
                                            Di(
                                                p(
                                                    "input",
                                                    {
                                                        "onUpdate:modelValue":
                                                            d[2] || (d[2] = (u) => (n.value = u)),
                                                        type: "text",
                                                        onKeydown: ll(l, ["enter"]),
                                                        placeholder: "Digite sua mensagem...",
                                                        class: E([
                                                            "flex-1 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/20 text-sm transition-colors",
                                                            c.isDarkMode
                                                                ? "bg-zinc-800 text-zinc-200 placeholder-zinc-500 border-none"
                                                                : "bg-slate-100 text-slate-800 border-none",
                                                        ]),
                                                    },
                                                    null,
                                                    34,
                                                ),
                                                [[nl, n.value]],
                                            ),
                                            p(
                                                "button",
                                                {
                                                    onClick: l,
                                                    class:
                                                        "bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded-xl hover:bg-blue-700 transition-colors",
                                                },
                                                " ➔ ",
                                            ),
                                        ],
                                        2,
                                    ),
                                ],
                                2,
                            ))
                        : vs("", !0),
                ])
            );
        },
    }),
    Sl = [
        {
            id: "1",
            title: "Sistema ERP Empresarial",
            description:
                "Sistema ERP de grande escala construído para logística de manufatura utilizando Spring Boot e React.",
            tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
            image: "https://picsum.photos/seed/erp/800/600",
            category: "fullstack",
        },
        {
            id: "2",
            title: "Plataforma de E-commerce",
            description:
                "Vitrine moderna com estoque em tempo real e frontend de alta performance em Vue 3.",
            tech: ["Vue", "Node.js", "Express", "MongoDB", "Tailwind"],
            image: "https://picsum.photos/seed/shop/800/600",
            category: "fullstack",
        },
        {
            id: "3",
            title: "Dashboard de Análise",
            description:
                "Ferramenta de visualização de dados em tempo real para monitoramento de performance de servidores e métricas de API.",
            tech: ["Node.js", "React", "D3.js", "Redis"],
            image: "https://picsum.photos/seed/analytics/800/600",
            category: "frontend",
        },
        {
            id: "4",
            title: "Gateway de API Bancária",
            description:
                "Arquitetura de microsserviços de alta segurança para processamento de transações financeiras.",
            tech: ["Java", "Kafka", "Spring Cloud", "Kubernetes"],
            image: "https://picsum.photos/seed/bank/800/600",
            category: "backend",
        },
    ],
    Cl = [
        { name: "Java", level: 95, icon: "☕", category: "language" },
        { name: "Node.js", level: 92, icon: "🟢", category: "language" },
        { name: "React", level: 90, icon: "⚛️", category: "framework" },
        { name: "Vue", level: 85, icon: "🖖", category: "framework" },
        { name: "Spring Boot", level: 92, icon: "🍃", category: "framework" },
        { name: "TypeScript", level: 88, icon: "TS", category: "language" },
        { name: "Docker", level: 80, icon: "🐳", category: "tool" },
        { name: "PostgreSQL", level: 85, icon: "🐘", category: "tool" },
    ],
    Tl = [
        {
            company: "Tech Solutions Global",
            role: "Desenvolvedor de Software",
            period: "2021 - Presente",
            description: [
                "Arquitetura de microsserviços com Spring Boot e Node.js para sistemas de alta disponibilidade.",
                "Liderou a migração do frontend legado em jQuery para Vue 3 Composition API.",
                "Reduziu o tempo de resposta do servidor em 40% através de estratégias de cache com Redis.",
            ],
        },
        {
            company: "Innovation Labs",
            role: "Desenvolvedor de Software",
            period: "2018 - 2021",
            description: [
                "Desenvolveu múltiplos produtos SaaS baseados em React lidando com milhares de usuários.",
                "Projetou backends escaláveis em Java para processamento complexo de regras de negócio.",
                "Implementou pipelines CI/CD utilizando GitHub Actions e Docker.",
            ],
        },
    ],
    El =
        "Sou um Desenvolvedor Full Stack com foco na construção de aplicações web modernas e escaláveis. Com uma trajetória que evoluiu do suporte técnico para a desenvolvedor de software, possuo uma visão sistêmica completa do ciclo de vida das aplicações. Hoje atuo de ponta a ponta: desde a modelagem de bancos de dados e orquestração de infraestrutura com Docker, até a criação de interfaces com React e Vue. Tenho facilidade em atuar em ambientes ágeis, entregando soluções eficientes e código de fácil manutenção.",
    Ml = {
        id: "hero",
        class: "min-h-screen flex items-center justify-center pt-20 section-dot-bg",
    },
    Ol = { class: "container mx-auto px-6 text-center" },
    Al = {
        class:
            "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6",
    },
    Pl = { class: "container mx-auto px-6" },
    Dl = { class: "max-w-5xl mx-auto" },
    Rl = { class: "flex flex-col md:flex-row gap-16 items-start" },
    kl = { class: "md:w-1/3" },
    Il = { class: "md:w-2/3" },
    jl = { class: "container mx-auto px-6" },
    Fl = { class: "max-w-5xl mx-auto" },
    Ll = { class: "grid grid-cols-2 md:grid-cols-4 gap-8" },
    Nl = { class: "text-4xl mb-6 flex items-center justify-between" },
    $l = {
        class:
            "text-[10px] text-zinc-500 font-bold group-hover:text-blue-500 transition-colors",
    },
    zl = { id: "projects", class: "py-32" },
    Hl = { class: "container mx-auto px-6" },
    Vl = { class: "max-w-5xl mx-auto" },
    Bl = { class: "grid md:grid-cols-2 gap-12" },
    Kl = ["src", "alt"],
    Ul = {
        class:
            "absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100",
    },
    Wl = { class: "flex flex-wrap gap-2 mb-4" },
    Jl = { class: "container mx-auto px-6" },
    ql = { class: "max-w-4xl mx-auto" },
    Gl = { class: "space-y-16" },
    Yl = { class: "text-zinc-500 font-bold mono text-sm" },
    Ql = { class: "md:col-span-2" },
    Xl = { class: "text-blue-600 font-bold mb-6 text-lg" },
    Zl = { class: "space-y-4" },
    ec = { id: "contact", class: "py-40" },
    tc = { class: "container mx-auto px-6 text-center" },
    sc = { class: "max-w-xl mx-auto" },
    nc = { class: "container mx-auto px-6 text-center" },
    rc = { class: "flex justify-center space-x-12 mb-12" },
    ic = Gs({
        __name: "App",
        setup(e) {
            const t = Ne(!1);
            Ys(() => {
                if (typeof window < "u") {
                    const o = localStorage.getItem("theme");
                    ((t.value =
                        o === "dark" ||
                        (!o && window.matchMedia("(prefers-color-scheme: dark)").matches)),
                        s());
                }
            });
            const s = () => {
                t.value
                    ? (document.documentElement.classList.add("dark"),
                        localStorage.setItem("theme", "dark"))
                    : (document.documentElement.classList.remove("dark"),
                        localStorage.setItem("theme", "light"));
            },
                n = () => {
                    ((t.value = !t.value), s());
                };
            Tt(t, s);
            const r = Ne(!1),
                i = (o) => {
                    ((r.value = !0),
                        setTimeout(() => {
                            const l = document.querySelector(o);
                            (l && l.scrollIntoView({ behavior: "auto" }),
                                setTimeout(() => {
                                    r.value = !1;
                                }, 50));
                        }, 300));
                };
            return (o, l) => (
                q(),
                G(
                    "div",
                    {
                        class: E([
                            "min-h-screen transition-colors duration-500",
                            t.value
                                ? "bg-[#121212] text-zinc-300"
                                : "bg-white text-slate-900",
                        ]),
                    },
                    [
                        xe(
                            vl,
                            { "is-dark-mode": t.value, onToggleDarkMode: n, onNavClick: i },
                            null,
                            8,
                            ["is-dark-mode"],
                        ),
                        xe(wl, { "is-dark-mode": t.value }, null, 8, ["is-dark-mode"]),
                        p(
                            "main",
                            {
                                class: E([
                                    "transition-all duration-300 ease-in-out",
                                    r.value
                                        ? "opacity-0 translate-y-10"
                                        : "opacity-100 translate-y-0",
                                ]),
                            },
                            [
                                p("section", Ml, [
                                    p("div", Ol, [
                                        p(
                                            "div",
                                            {
                                                class: E([
                                                    "inline-block mb-6 px-4 py-1 rounded-full border text-[11px] font-bold tracking-widest uppercase",
                                                    t.value
                                                        ? "border-zinc-800 bg-zinc-900 text-zinc-400"
                                                        : "border-blue-100 bg-blue-50 text-blue-600",
                                                ]),
                                            },
                                            " Desenvolvedor de Software ",
                                            2,
                                        ),
                                        p(
                                            "h1",
                                            {
                                                class: E([
                                                    "text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none",
                                                    t.value ? "text-white" : "text-slate-900",
                                                ]),
                                            },
                                            l[2] ||
                                            (l[2] = [
                                                Qe(" Criando "),
                                                p(
                                                    "span",
                                                    { class: "text-blue-600" },
                                                    "Experiências",
                                                    -1,
                                                ),
                                                p("br", null, null, -1),
                                                Qe("Digitais. "),
                                            ]),
                                            2,
                                        ),
                                        p(
                                            "p",
                                            {
                                                class: E([
                                                    "max-w-2xl mx-auto text-lg md:text-xl mb-12 font-medium leading-relaxed",
                                                    t.value ? "text-zinc-400" : "text-slate-500",
                                                ]),
                                            },
                                            [
                                                l[3] ||
                                                (l[3] = Qe(
                                                    " Especialista em ecossistemas de alta performance com ",
                                                )),
                                                p(
                                                    "span",
                                                    {
                                                        class: E([
                                                            t.value ? "text-white" : "text-slate-900",
                                                            "font-bold underline decoration-blue-500/30",
                                                        ]),
                                                    },
                                                    "Java, Node.js, React e Vue.",
                                                    2,
                                                ),
                                            ],
                                            2,
                                        ),
                                        p("div", Al, [
                                            p(
                                                "a",
                                                {
                                                    href: "#projects",
                                                    onClick:
                                                        l[0] ||
                                                        (l[0] = Xe((c) => i("#projects"), ["prevent"])),
                                                    class: E([
                                                        "w-full sm:w-auto px-10 py-4 rounded-full font-bold transition-all shadow-xl active:scale-95",
                                                        t.value
                                                            ? "bg-white text-black hover:bg-zinc-200"
                                                            : "bg-slate-900 text-white hover:bg-blue-600 shadow-slate-900/10",
                                                    ]),
                                                },
                                                " Ver Projetos ",
                                                2,
                                            ),
                                            p(
                                                "a",
                                                {
                                                    href: "#about",
                                                    onClick:
                                                        l[1] ||
                                                        (l[1] = Xe((c) => i("#about"), ["prevent"])),
                                                    class: E([
                                                        "w-full sm:w-auto px-10 py-4 border rounded-full font-bold transition-all active:scale-95",
                                                        t.value
                                                            ? "bg-transparent text-white border-zinc-700 hover:border-zinc-500"
                                                            : "bg-white text-slate-900 border-slate-200 hover:border-slate-400",
                                                    ]),
                                                },
                                                " Sobre Mim ",
                                                2,
                                            ),
                                        ]),
                                    ]),
                                ]),
                                p(
                                    "section",
                                    {
                                        id: "about",
                                        class: E([
                                            "py-32 border-t",
                                            t.value ? "border-zinc-800" : "border-slate-50",
                                        ]),
                                    },
                                    [
                                        p("div", Pl, [
                                            p("div", Dl, [
                                                p("div", Rl, [
                                                    p("div", kl, [
                                                        l[5] ||
                                                        (l[5] = p(
                                                            "h2",
                                                            {
                                                                class:
                                                                    "text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-4",
                                                            },
                                                            "01. Perfil",
                                                            -1,
                                                        )),
                                                        p(
                                                            "div",
                                                            {
                                                                class: E([
                                                                    "relative group overflow-hidden rounded-3xl aspect-[4/5]",
                                                                    t.value ? "bg-zinc-800" : "bg-slate-100",
                                                                ]),
                                                            },
                                                            l[4] ||
                                                            (l[4] = [
                                                                p(
                                                                    "img",
                                                                    {
                                                                        src: "https://picsum.photos/seed/fullstack-dev/600/800",
                                                                        alt: "Profile",
                                                                        class:
                                                                            "w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105",
                                                                    },
                                                                    null,
                                                                    -1,
                                                                ),
                                                            ]),
                                                            2,
                                                        ),
                                                    ]),
                                                    p("div", Il, [
                                                        p(
                                                            "h3",
                                                            {
                                                                class: E([
                                                                    "text-4xl font-bold mb-8 leading-tight",
                                                                    t.value ? "text-white" : "text-slate-900",
                                                                ]),
                                                            },
                                                            " Combinando robustez no backend com elegância no frontend. ",
                                                            2,
                                                        ),
                                                        p(
                                                            "div",
                                                            {
                                                                class: E([
                                                                    "leading-relaxed space-y-6 text-lg",
                                                                    t.value ? "text-zinc-400" : "text-slate-600",
                                                                ]),
                                                            },
                                                            [
                                                                p("p", null, ue(xt(El)), 1),
                                                                p(
                                                                    "div",
                                                                    {
                                                                        class: E([
                                                                            "grid grid-cols-2 gap-8 pt-8 border-t",
                                                                            t.value
                                                                                ? "border-zinc-800"
                                                                                : "border-slate-100",
                                                                        ]),
                                                                    },
                                                                    [
                                                                        p("div", null, [
                                                                            p(
                                                                                "h4",
                                                                                {
                                                                                    class: E([
                                                                                        t.value
                                                                                            ? "text-white"
                                                                                            : "text-slate-900",
                                                                                        "font-bold mb-2",
                                                                                    ]),
                                                                                },
                                                                                "Frontend",
                                                                                2,
                                                                            ),
                                                                            l[6] ||
                                                                            (l[6] = p(
                                                                                "p",
                                                                                { class: "text-sm" },
                                                                                "React (Next.js), Vue 3, JavaScript, TypeScript.",
                                                                                -1,
                                                                            )),
                                                                        ]),
                                                                        p("div", null, [
                                                                            p(
                                                                                "h4",
                                                                                {
                                                                                    class: E([
                                                                                        t.value
                                                                                            ? "text-white"
                                                                                            : "text-slate-900",
                                                                                        "font-bold mb-2",
                                                                                    ]),
                                                                                },
                                                                                "Backend",
                                                                                2,
                                                                            ),
                                                                            l[7] ||
                                                                            (l[7] = p(
                                                                                "p",
                                                                                { class: "text-sm" },
                                                                                "Java (Spring), Node.js (NestJS), PostgreSQL.",
                                                                                -1,
                                                                            )),
                                                                        ]),
                                                                    ],
                                                                    2,
                                                                ),
                                                            ],
                                                            2,
                                                        ),
                                                    ]),
                                                ]),
                                            ]),
                                        ]),
                                    ],
                                    2,
                                ),
                                p(
                                    "section",
                                    {
                                        id: "skills",
                                        class: E([
                                            "py-32",
                                            t.value ? "bg-zinc-900/30" : "bg-slate-50/50",
                                        ]),
                                    },
                                    [
                                        p("div", jl, [
                                            p("div", Fl, [
                                                l[8] ||
                                                (l[8] = p(
                                                    "h2",
                                                    {
                                                        class:
                                                            "text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-12 text-center",
                                                    },
                                                    "02. Arsenal Tecnológico",
                                                    -1,
                                                )),
                                                p("div", Ll, [
                                                    (q(!0),
                                                        G(
                                                            oe,
                                                            null,
                                                            rt(
                                                                xt(Cl),
                                                                (c) => (
                                                                    q(),
                                                                    G(
                                                                        "div",
                                                                        {
                                                                            key: c.name,
                                                                            class: E([
                                                                                "p-8 rounded-3xl border transition-all group",
                                                                                t.value
                                                                                    ? "bg-[#1a1a1a] border-zinc-800 shadow-none hover:border-zinc-600"
                                                                                    : "bg-white border-slate-100 shadow-sm hover:shadow-xl",
                                                                            ]),
                                                                        },
                                                                        [
                                                                            p("div", Nl, [
                                                                                p("span", null, ue(c.icon), 1),
                                                                                p("span", $l, "LVL " + ue(c.level), 1),
                                                                            ]),
                                                                            p(
                                                                                "div",
                                                                                {
                                                                                    class: E([
                                                                                        "font-black text-lg",
                                                                                        t.value
                                                                                            ? "text-white"
                                                                                            : "text-slate-900",
                                                                                    ]),
                                                                                },
                                                                                ue(c.name),
                                                                                3,
                                                                            ),
                                                                            p(
                                                                                "div",
                                                                                {
                                                                                    class: E([
                                                                                        "h-1 w-full rounded-full mt-4 overflow-hidden",
                                                                                        t.value
                                                                                            ? "bg-zinc-800"
                                                                                            : "bg-slate-100",
                                                                                    ]),
                                                                                },
                                                                                [
                                                                                    p(
                                                                                        "div",
                                                                                        {
                                                                                            class: E([
                                                                                                "h-full transition-all duration-700",
                                                                                                t.value
                                                                                                    ? "bg-zinc-100"
                                                                                                    : "bg-slate-900 group-hover:bg-blue-600",
                                                                                            ]),
                                                                                            style: ss({ width: `${c.level}%` }),
                                                                                        },
                                                                                        null,
                                                                                        6,
                                                                                    ),
                                                                                ],
                                                                                2,
                                                                            ),
                                                                        ],
                                                                        2,
                                                                    )
                                                                ),
                                                            ),
                                                            128,
                                                        )),
                                                ]),
                                            ]),
                                        ]),
                                    ],
                                    2,
                                ),
                                p("section", zl, [
                                    p("div", Hl, [
                                        p("div", Vl, [
                                            l[9] ||
                                            (l[9] = p(
                                                "h2",
                                                {
                                                    class:
                                                        "text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-12",
                                                },
                                                "03. Projetos em Destaque",
                                                -1,
                                            )),
                                            p("div", Bl, [
                                                (q(!0),
                                                    G(
                                                        oe,
                                                        null,
                                                        rt(
                                                            xt(Sl),
                                                            (c) => (
                                                                q(),
                                                                G("div", { key: c.id, class: "group" }, [
                                                                    p(
                                                                        "div",
                                                                        {
                                                                            class: E([
                                                                                "relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 transition-all duration-500",
                                                                                t.value
                                                                                    ? "bg-zinc-800 shadow-none group-hover:shadow-white/5"
                                                                                    : "bg-slate-100 shadow-sm group-hover:shadow-2xl",
                                                                            ]),
                                                                        },
                                                                        [
                                                                            p(
                                                                                "img",
                                                                                {
                                                                                    src: c.image,
                                                                                    alt: c.title,
                                                                                    class:
                                                                                        "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                                                                                },
                                                                                null,
                                                                                8,
                                                                                Kl,
                                                                            ),
                                                                            p("div", Ul, [
                                                                                p(
                                                                                    "span",
                                                                                    {
                                                                                        class: E([
                                                                                            "px-6 py-3 rounded-full font-bold text-sm",
                                                                                            t.value
                                                                                                ? "bg-white text-black"
                                                                                                : "bg-white text-slate-900",
                                                                                        ]),
                                                                                    },
                                                                                    "Ver Detalhes",
                                                                                    2,
                                                                                ),
                                                                            ]),
                                                                        ],
                                                                        2,
                                                                    ),
                                                                    p("div", Wl, [
                                                                        (q(!0),
                                                                            G(
                                                                                oe,
                                                                                null,
                                                                                rt(
                                                                                    c.tech,
                                                                                    (d) => (
                                                                                        q(),
                                                                                        G(
                                                                                            "span",
                                                                                            {
                                                                                                key: d,
                                                                                                class:
                                                                                                    "text-[10px] font-bold text-blue-600 uppercase tracking-widest",
                                                                                            },
                                                                                            ue(d),
                                                                                            1,
                                                                                        )
                                                                                    ),
                                                                                ),
                                                                                128,
                                                                            )),
                                                                    ]),
                                                                    p(
                                                                        "h3",
                                                                        {
                                                                            class: E([
                                                                                "text-2xl font-bold mb-3",
                                                                                t.value ? "text-white" : "text-slate-900",
                                                                            ]),
                                                                        },
                                                                        ue(c.title),
                                                                        3,
                                                                    ),
                                                                    p(
                                                                        "p",
                                                                        {
                                                                            class: E([
                                                                                "leading-relaxed text-sm mb-6",
                                                                                t.value
                                                                                    ? "text-zinc-400"
                                                                                    : "text-slate-500",
                                                                            ]),
                                                                        },
                                                                        ue(c.description),
                                                                        3,
                                                                    ),
                                                                ])
                                                            ),
                                                        ),
                                                        128,
                                                    )),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                                p(
                                    "section",
                                    {
                                        id: "experience",
                                        class: E([
                                            "py-32 border-t",
                                            t.value
                                                ? "bg-zinc-900/10 border-zinc-800"
                                                : "bg-slate-50/30 border-slate-50",
                                        ]),
                                    },
                                    [
                                        p("div", Jl, [
                                            p("div", ql, [
                                                l[11] ||
                                                (l[11] = p(
                                                    "h2",
                                                    {
                                                        class:
                                                            "text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-12",
                                                    },
                                                    "04. Trajetória",
                                                    -1,
                                                )),
                                                p("div", Gl, [
                                                    (q(!0),
                                                        G(
                                                            oe,
                                                            null,
                                                            rt(
                                                                xt(Tl),
                                                                (c, d) => (
                                                                    q(),
                                                                    G(
                                                                        "div",
                                                                        {
                                                                            key: d,
                                                                            class: "grid md:grid-cols-3 gap-8",
                                                                        },
                                                                        [
                                                                            p("div", Yl, ue(c.period), 1),
                                                                            p("div", Ql, [
                                                                                p(
                                                                                    "h4",
                                                                                    {
                                                                                        class: E([
                                                                                            "text-2xl font-bold mb-1",
                                                                                            t.value
                                                                                                ? "text-white"
                                                                                                : "text-slate-900",
                                                                                        ]),
                                                                                    },
                                                                                    ue(c.role),
                                                                                    3,
                                                                                ),
                                                                                p("p", Xl, ue(c.company), 1),
                                                                                p("ul", Zl, [
                                                                                    (q(!0),
                                                                                        G(
                                                                                            oe,
                                                                                            null,
                                                                                            rt(
                                                                                                c.description,
                                                                                                (u, g) => (
                                                                                                    q(),
                                                                                                    G(
                                                                                                        "li",
                                                                                                        {
                                                                                                            key: g,
                                                                                                            class: E([
                                                                                                                "text-[15px] leading-relaxed flex items-start",
                                                                                                                t.value
                                                                                                                    ? "text-zinc-400"
                                                                                                                    : "text-slate-600",
                                                                                                            ]),
                                                                                                        },
                                                                                                        [
                                                                                                            l[10] ||
                                                                                                            (l[10] = p(
                                                                                                                "span",
                                                                                                                {
                                                                                                                    class:
                                                                                                                        "text-blue-500 mr-3 mt-1.5",
                                                                                                                },
                                                                                                                "•",
                                                                                                                -1,
                                                                                                            )),
                                                                                                            Qe(" " + ue(u), 1),
                                                                                                        ],
                                                                                                        2,
                                                                                                    )
                                                                                                ),
                                                                                            ),
                                                                                            128,
                                                                                        )),
                                                                                ]),
                                                                            ]),
                                                                        ],
                                                                    )
                                                                ),
                                                            ),
                                                            128,
                                                        )),
                                                ]),
                                            ]),
                                        ]),
                                    ],
                                    2,
                                ),
                                p("section", ec, [
                                    p("div", tc, [
                                        p("div", sc, [
                                            p(
                                                "h2",
                                                {
                                                    class: E([
                                                        "text-6xl font-black mb-8 tracking-tighter",
                                                        t.value ? "text-white" : "text-slate-900",
                                                    ]),
                                                },
                                                "Vamos criar algo novo?",
                                                2,
                                            ),
                                            p(
                                                "p",
                                                {
                                                    class: E([
                                                        "text-lg mb-12",
                                                        t.value ? "text-zinc-400" : "text-slate-500",
                                                    ]),
                                                },
                                                " Estou sempre aberto a novos desafios e parcerias inovadoras. Entre em contato para uma consultoria ou café remoto. ",
                                                2,
                                            ),
                                            p(
                                                "a",
                                                {
                                                    href: "mailto:contact@devportfolio.com",
                                                    class: E([
                                                        "inline-flex items-center px-12 py-5 text-white font-black rounded-full transition-all shadow-2xl active:scale-95",
                                                        t.value
                                                            ? "bg-zinc-100 text-black hover:bg-white"
                                                            : "bg-blue-600 hover:bg-slate-900 shadow-blue-500/20",
                                                    ]),
                                                },
                                                l[12] ||
                                                (l[12] = [
                                                    Qe(" Enviar E-mail "),
                                                    p(
                                                        "svg",
                                                        {
                                                            class: "ml-3 w-5 h-5",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                        },
                                                        [
                                                            p("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "M14 5l7 7m0 0l-7 7m7-7H3",
                                                            }),
                                                        ],
                                                        -1,
                                                    ),
                                                ]),
                                                2,
                                            ),
                                        ]),
                                    ]),
                                ]),
                            ],
                            2,
                        ),
                        p(
                            "footer",
                            {
                                class: E([
                                    "py-20 border-t",
                                    t.value
                                        ? "bg-[#121212] border-zinc-800"
                                        : "bg-white border-slate-50",
                                ]),
                            },
                            [
                                p("div", nc, [
                                    p("div", rc, [
                                        p(
                                            "a",
                                            {
                                                href: "#",
                                                class: E([
                                                    "font-bold text-sm tracking-widest uppercase transition-colors",
                                                    t.value
                                                        ? "text-zinc-500 hover:text-white"
                                                        : "text-slate-400 hover:text-blue-600",
                                                ]),
                                            },
                                            "GitHub",
                                            2,
                                        ),
                                        p(
                                            "a",
                                            {
                                                href: "#",
                                                class: E([
                                                    "font-bold text-sm tracking-widest uppercase transition-colors",
                                                    t.value
                                                        ? "text-zinc-500 hover:text-white"
                                                        : "text-slate-400 hover:text-blue-600",
                                                ]),
                                            },
                                            "LinkedIn",
                                            2,
                                        ),
                                        p(
                                            "a",
                                            {
                                                href: "#",
                                                class: E([
                                                    "font-bold text-sm tracking-widest uppercase transition-colors",
                                                    t.value
                                                        ? "text-zinc-500 hover:text-white"
                                                        : "text-slate-400 hover:text-blue-600",
                                                ]),
                                            },
                                            "Twitter",
                                            2,
                                        ),
                                    ]),
                                    l[13] ||
                                    (l[13] = p(
                                        "p",
                                        {
                                            class:
                                                "text-zinc-500 text-xs font-medium uppercase tracking-[0.2em]",
                                        },
                                        "© 2024 Design e Código por Diego",
                                        -1,
                                    )),
                                ]),
                            ],
                            2,
                        ),
                    ],
                    2,
                )
            );
        },
    });
fl(ic).mount("#root");

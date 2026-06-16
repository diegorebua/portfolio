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
 **/ /*! #__NO_SIDE_EFFECTS__ */ function ks(e) {
  const t = Object.create(null);
  for (const s of e.split(",")) t[s] = 1;
  return (s) => s in t;
}
const z = {},
  it = [],
  Me = () => { },
  zr = () => !1,
  Qt = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  js = (e) => e.startsWith("onUpdate:"),
  se = Object.assign,
  Fs = (e, t) => {
    const s = e.indexOf(t);
    s > -1 && e.splice(s, 1);
  },
  $r = Object.prototype.hasOwnProperty,
  L = (e, t) => $r.call(e, t),
  R = Array.isArray,
  ot = (e) => Xt(e) === "[object Map]",
  kn = (e) => Xt(e) === "[object Set]",
  D = (e) => typeof e == "function",
  Y = (e) => typeof e == "string",
  ze = (e) => typeof e == "symbol",
  U = (e) => e !== null && typeof e == "object",
  jn = (e) => (U(e) || D(e)) && D(e.then) && D(e.catch),
  Fn = Object.prototype.toString,
  Xt = (e) => Fn.call(e),
  Vr = (e) => Xt(e).slice(8, -1),
  Ln = (e) => Xt(e) === "[object Object]",
  Ls = (e) => Y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  vt = ks(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted",
  ),
  Zt = (e) => {
    const t = Object.create(null);
    return (s) => t[s] || (t[s] = e(s));
  },
  Br = /-(\w)/g,
  He = Zt((e) => e.replace(Br, (t, s) => (s ? s.toUpperCase() : ""))),
  Kr = /\B([A-Z])/g,
  $e = Zt((e) => e.replace(Kr, "-$1").toLowerCase()),
  Nn = Zt((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  fs = Zt((e) => (e ? `on${Nn(e)}` : "")),
  Ne = (e, t) => !Object.is(e, t),
  $t = (e, ...t) => {
    for (let s = 0; s < e.length; s++) e[s](...t);
  },
  Hn = (e, t, s, n = !1) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      writable: n,
      value: s,
    });
  },
  ws = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  };
let rn;
const es = () =>
  rn ||
  (rn =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
        ? self
        : typeof window < "u"
          ? window
          : typeof global < "u"
            ? global
            : {});
function ts(e) {
  if (R(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) {
      const n = e[s],
        r = Y(n) ? Gr(n) : ts(n);
      if (r) for (const i in r) t[i] = r[i];
    }
    return t;
  } else if (Y(e) || U(e)) return e;
}
const Ur = /;(?![^(]*\))/g,
  Wr = /:([^]+)/,
  Jr = /\/\*[^]*?\*\//g;
function Gr(e) {
  const t = {};
  return (
    e
      .replace(Jr, "")
      .split(Ur)
      .forEach((s) => {
        if (s) {
          const n = s.split(Wr);
          n.length > 1 && (t[n[0].trim()] = n[1].trim());
        }
      }),
    t
  );
}
function T(e) {
  let t = "";
  if (Y(e)) t = e;
  else if (R(e))
    for (let s = 0; s < e.length; s++) {
      const n = T(e[s]);
      n && (t += n + " ");
    }
  else if (U(e)) for (const s in e) e[s] && (t += s + " ");
  return t.trim();
}
const qr =
  "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Yr = ks(qr);
function zn(e) {
  return !!e || e === "";
}
const $n = (e) => !!(e && e.__v_isRef === !0),
  ue = (e) =>
    Y(e)
      ? e
      : e == null
        ? ""
        : R(e) || (U(e) && (e.toString === Fn || !D(e.toString)))
          ? $n(e)
            ? ue(e.value)
            : JSON.stringify(e, Vn, 2)
          : String(e),
  Vn = (e, t) =>
    $n(t)
      ? Vn(e, t.value)
      : ot(t)
        ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (s, [n, r], i) => ((s[us(n, i) + " =>"] = r), s),
            {},
          ),
        }
        : kn(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((s) => us(s)) }
          : ze(t)
            ? us(t)
            : U(t) && !R(t) && !Ln(t)
              ? String(t)
              : t,
  us = (e, t = "") => {
    var s;
    return ze(e) ? `Symbol(${(s = e.description) != null ? s : t})` : e;
  };
/**
 * @vue/reactivity v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let he;
class Qr {
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
function Xr() {
  return he;
}
let B;
const ds = new WeakSet();
class Bn {
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
      ((this.flags &= -65), ds.has(this) && (ds.delete(this), this.trigger()));
  }
  notify() {
    (this.flags & 2 && !(this.flags & 32)) || this.flags & 8 || Un(this);
  }
  run() {
    if (!(this.flags & 1)) return this.fn();
    ((this.flags |= 2), on(this), Wn(this));
    const t = B,
      s = be;
    ((B = this), (be = !0));
    try {
      return this.fn();
    } finally {
      (Jn(this), (B = t), (be = s), (this.flags &= -3));
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep) zs(t);
      ((this.deps = this.depsTail = void 0),
        on(this),
        this.onStop && this.onStop(),
        (this.flags &= -2));
    }
  }
  trigger() {
    this.flags & 64
      ? ds.add(this)
      : this.scheduler
        ? this.scheduler()
        : this.runIfDirty();
  }
  runIfDirty() {
    Ss(this) && this.run();
  }
  get dirty() {
    return Ss(this);
  }
}
let Kn = 0,
  _t,
  yt;
function Un(e, t = !1) {
  if (((e.flags |= 8), t)) {
    ((e.next = yt), (yt = e));
    return;
  }
  ((e.next = _t), (_t = e));
}
function Ns() {
  Kn++;
}
function Hs() {
  if (--Kn > 0) return;
  if (yt) {
    let t = yt;
    for (yt = void 0; t;) {
      const s = t.next;
      ((t.next = void 0), (t.flags &= -9), (t = s));
    }
  }
  let e;
  for (; _t;) {
    let t = _t;
    for (_t = void 0; t;) {
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
function Wn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    ((t.version = -1),
      (t.prevActiveLink = t.dep.activeLink),
      (t.dep.activeLink = t));
}
function Jn(e) {
  let t,
    s = e.depsTail,
    n = s;
  for (; n;) {
    const r = n.prevDep;
    (n.version === -1 ? (n === s && (s = r), zs(n), Zr(n)) : (t = n),
      (n.dep.activeLink = n.prevActiveLink),
      (n.prevActiveLink = void 0),
      (n = r));
  }
  ((e.deps = t), (e.depsTail = s));
}
function Ss(e) {
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
    ((e.flags &= -17), e.globalVersion === Tt)
  )
    return;
  e.globalVersion = Tt;
  const t = e.dep;
  if (((e.flags |= 2), t.version > 0 && !e.isSSR && e.deps && !Ss(e))) {
    e.flags &= -3;
    return;
  }
  const s = B,
    n = be;
  ((B = e), (be = !0));
  try {
    Wn(e);
    const r = e.fn(e._value);
    (t.version === 0 || Ne(r, e._value)) && ((e._value = r), t.version++);
  } catch (r) {
    throw (t.version++, r);
  } finally {
    ((B = s), (be = n), Jn(e), (e.flags &= -3));
  }
}
function zs(e, t = !1) {
  const { dep: s, prevSub: n, nextSub: r } = e;
  if (
    (n && ((n.nextSub = r), (e.prevSub = void 0)),
      r && ((r.prevSub = n), (e.nextSub = void 0)),
      s.subs === e && ((s.subs = n), !n && s.computed))
  ) {
    s.computed.flags &= -5;
    for (let i = s.computed.deps; i; i = i.nextDep) zs(i, !0);
  }
  !t && !--s.sc && s.map && s.map.delete(s.key);
}
function Zr(e) {
  const { prevDep: t, nextDep: s } = e;
  (t && ((t.nextDep = s), (e.prevDep = void 0)),
    s && ((s.prevDep = t), (e.nextDep = void 0)));
}
let be = !0;
const qn = [];
function Ve() {
  (qn.push(be), (be = !1));
}
function Be() {
  const e = qn.pop();
  be = e === void 0 ? !0 : e;
}
function on(e) {
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
let Tt = 0;
class ei {
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
class $s {
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
      ((s = this.activeLink = new ei(B, this)),
        B.deps
          ? ((s.prevDep = B.depsTail),
            (B.depsTail.nextDep = s),
            (B.depsTail = s))
          : (B.deps = B.depsTail = s),
        Yn(s));
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
    (this.version++, Tt++, this.notify(t));
  }
  notify(t) {
    Ns();
    try {
      for (let s = this.subs; s; s = s.prevSub)
        s.sub.notify() && s.sub.dep.notify();
    } finally {
      Hs();
    }
  }
}
function Yn(e) {
  if ((e.dep.sc++, e.sub.flags & 4)) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep) Yn(n);
    }
    const s = e.dep.subs;
    (s !== e && ((e.prevSub = s), s && (s.nextSub = e)), (e.dep.subs = e));
  }
}
const Cs = new WeakMap(),
  Xe = Symbol(""),
  Es = Symbol(""),
  Mt = Symbol("");
function Z(e, t, s) {
  if (be && B) {
    let n = Cs.get(e);
    n || Cs.set(e, (n = new Map()));
    let r = n.get(s);
    (r || (n.set(s, (r = new $s())), (r.map = n), (r.key = s)), r.track());
  }
}
function Re(e, t, s, n, r, i) {
  const o = Cs.get(e);
  if (!o) {
    Tt++;
    return;
  }
  const l = (a) => {
    a && a.trigger();
  };
  if ((Ns(), t === "clear")) o.forEach(l);
  else {
    const a = R(e),
      d = a && Ls(s);
    if (a && s === "length") {
      const u = Number(n);
      o.forEach((g, C) => {
        (C === "length" || C === Mt || (!ze(C) && C >= u)) && l(g);
      });
    } else
      switch (
      ((s !== void 0 || o.has(void 0)) && l(o.get(s)), d && l(o.get(Mt)), t)
      ) {
        case "add":
          a ? d && l(o.get("length")) : (l(o.get(Xe)), ot(e) && l(o.get(Es)));
          break;
        case "delete":
          a || (l(o.get(Xe)), ot(e) && l(o.get(Es)));
          break;
        case "set":
          ot(e) && l(o.get(Xe));
          break;
      }
  }
  Hs();
}
function tt(e) {
  const t = F(e);
  return t === e ? t : (Z(t, "iterate", Mt), me(e) ? t : t.map(ee));
}
function ss(e) {
  return (Z((e = F(e)), "iterate", Mt), e);
}
const ti = {
  __proto__: null,
  [Symbol.iterator]() {
    return hs(this, Symbol.iterator, ee);
  },
  concat(...e) {
    return tt(this).concat(...e.map((t) => (R(t) ? tt(t) : t)));
  },
  entries() {
    return hs(this, "entries", (e) => ((e[1] = ee(e[1])), e));
  },
  every(e, t) {
    return Oe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Oe(this, "filter", e, t, (s) => s.map(ee), arguments);
  },
  find(e, t) {
    return Oe(this, "find", e, t, ee, arguments);
  },
  findIndex(e, t) {
    return Oe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Oe(this, "findLast", e, t, ee, arguments);
  },
  findLastIndex(e, t) {
    return Oe(this, "findLastIndex", e, t, void 0, arguments);
  },
  forEach(e, t) {
    return Oe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return ps(this, "includes", e);
  },
  indexOf(...e) {
    return ps(this, "indexOf", e);
  },
  join(e) {
    return tt(this).join(e);
  },
  lastIndexOf(...e) {
    return ps(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Oe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return gt(this, "pop");
  },
  push(...e) {
    return gt(this, "push", e);
  },
  reduce(e, ...t) {
    return ln(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ln(this, "reduceRight", e, t);
  },
  shift() {
    return gt(this, "shift");
  },
  some(e, t) {
    return Oe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return gt(this, "splice", e);
  },
  toReversed() {
    return tt(this).toReversed();
  },
  toSorted(e) {
    return tt(this).toSorted(e);
  },
  toSpliced(...e) {
    return tt(this).toSpliced(...e);
  },
  unshift(...e) {
    return gt(this, "unshift", e);
  },
  values() {
    return hs(this, "values", ee);
  },
};
function hs(e, t, s) {
  const n = ss(e),
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
const si = Array.prototype;
function Oe(e, t, s, n, r, i) {
  const o = ss(e),
    l = o !== e && !me(e),
    a = o[t];
  if (a !== si[t]) {
    const g = a.apply(e, i);
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
  const u = a.call(o, d, n);
  return l && r ? r(u) : u;
}
function ln(e, t, s, n) {
  const r = ss(e);
  let i = s;
  return (
    r !== e &&
    (me(e)
      ? s.length > 3 &&
      (i = function (o, l, a) {
        return s.call(this, o, l, a, e);
      })
      : (i = function (o, l, a) {
        return s.call(this, o, ee(l), a, e);
      })),
    r[t](i, ...n)
  );
}
function ps(e, t, s) {
  const n = F(e);
  Z(n, "iterate", Mt);
  const r = n[t](...s);
  return (r === -1 || r === !1) && Us(s[0])
    ? ((s[0] = F(s[0])), n[t](...s))
    : r;
}
function gt(e, t, s = []) {
  (Ve(), Ns());
  const n = F(e)[t].apply(e, s);
  return (Hs(), Be(), n);
}
const ni = ks("__proto__,__v_isRef,__isVue"),
  Qn = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(ze),
  );
function ri(e) {
  ze(e) || (e = String(e));
  const t = F(this);
  return (Z(t, "has", e), t.hasOwnProperty(e));
}
class Xn {
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
      return n === (r ? (i ? pi : sr) : i ? tr : er).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(n)
        ? t
        : void 0;
    const o = R(t);
    if (!r) {
      let a;
      if (o && (a = ti[s])) return a;
      if (s === "hasOwnProperty") return ri;
    }
    const l = Reflect.get(t, s, te(t) ? t : n);
    return (ze(s) ? Qn.has(s) : ni(s)) || (r || Z(t, "get", s), i)
      ? l
      : te(l)
        ? o && Ls(s)
          ? l
          : l.value
        : U(l)
          ? r
            ? nr(l)
            : Bs(l)
          : l;
  }
}
class Zn extends Xn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, s, n, r) {
    let i = t[s];
    if (!this._isShallow) {
      const a = Ze(i);
      if (
        (!me(n) && !Ze(n) && ((i = F(i)), (n = F(n))), !R(t) && te(i) && !te(n))
      )
        return a ? !1 : ((i.value = n), !0);
    }
    const o = R(t) && Ls(s) ? Number(s) < t.length : L(t, s),
      l = Reflect.set(t, s, n, te(t) ? t : r);
    return (
      t === F(r) && (o ? Ne(n, i) && Re(t, "set", s, n) : Re(t, "add", s, n)),
      l
    );
  }
  deleteProperty(t, s) {
    const n = L(t, s);
    t[s];
    const r = Reflect.deleteProperty(t, s);
    return (r && n && Re(t, "delete", s, void 0), r);
  }
  has(t, s) {
    const n = Reflect.has(t, s);
    return ((!ze(s) || !Qn.has(s)) && Z(t, "has", s), n);
  }
  ownKeys(t) {
    return (Z(t, "iterate", R(t) ? "length" : Xe), Reflect.ownKeys(t));
  }
}
class ii extends Xn {
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
const oi = new Zn(),
  li = new ii(),
  ci = new Zn(!0);
const Ts = (e) => e,
  Nt = (e) => Reflect.getPrototypeOf(e);
function ai(e, t, s) {
  return function (...n) {
    const r = this.__v_raw,
      i = F(r),
      o = ot(i),
      l = e === "entries" || (e === Symbol.iterator && o),
      a = e === "keys" && o,
      d = r[e](...n),
      u = s ? Ts : t ? Ms : ee;
    return (
      !t && Z(i, "iterate", a ? Es : Xe),
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
function Ht(e) {
  return function (...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function fi(e, t) {
  const s = {
    get(r) {
      const i = this.__v_raw,
        o = F(i),
        l = F(r);
      e || (Ne(r, l) && Z(o, "get", r), Z(o, "get", l));
      const { has: a } = Nt(o),
        d = t ? Ts : e ? Ms : ee;
      if (a.call(o, r)) return d(i.get(r));
      if (a.call(o, l)) return d(i.get(l));
      i !== o && i.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return (!e && Z(F(r), "iterate", Xe), Reflect.get(r, "size", r));
    },
    has(r) {
      const i = this.__v_raw,
        o = F(i),
        l = F(r);
      return (
        e || (Ne(r, l) && Z(o, "has", r), Z(o, "has", l)),
        r === l ? i.has(r) : i.has(r) || i.has(l)
      );
    },
    forEach(r, i) {
      const o = this,
        l = o.__v_raw,
        a = F(l),
        d = t ? Ts : e ? Ms : ee;
      return (
        !e && Z(a, "iterate", Xe),
        l.forEach((u, g) => r.call(i, d(u), d(g), o))
      );
    },
  };
  return (
    se(
      s,
      e
        ? {
          add: Ht("add"),
          set: Ht("set"),
          delete: Ht("delete"),
          clear: Ht("clear"),
        }
        : {
          add(r) {
            !t && !me(r) && !Ze(r) && (r = F(r));
            const i = F(this);
            return (
              Nt(i).has.call(i, r) || (i.add(r), Re(i, "add", r, r)),
              this
            );
          },
          set(r, i) {
            !t && !me(i) && !Ze(i) && (i = F(i));
            const o = F(this),
              { has: l, get: a } = Nt(o);
            let d = l.call(o, r);
            d || ((r = F(r)), (d = l.call(o, r)));
            const u = a.call(o, r);
            return (
              o.set(r, i),
              d ? Ne(i, u) && Re(o, "set", r, i) : Re(o, "add", r, i),
              this
            );
          },
          delete(r) {
            const i = F(this),
              { has: o, get: l } = Nt(i);
            let a = o.call(i, r);
            (a || ((r = F(r)), (a = o.call(i, r))), l && l.call(i, r));
            const d = i.delete(r);
            return (a && Re(i, "delete", r, void 0), d);
          },
          clear() {
            const r = F(this),
              i = r.size !== 0,
              o = r.clear();
            return (i && Re(r, "clear", void 0, void 0), o);
          },
        },
    ),
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      s[r] = ai(r, e, t);
    }),
    s
  );
}
function Vs(e, t) {
  const s = fi(e, t);
  return (n, r, i) =>
    r === "__v_isReactive"
      ? !e
      : r === "__v_isReadonly"
        ? e
        : r === "__v_raw"
          ? n
          : Reflect.get(L(s, r) && r in n ? s : n, r, i);
}
const ui = { get: Vs(!1, !1) },
  di = { get: Vs(!1, !0) },
  hi = { get: Vs(!0, !1) };
const er = new WeakMap(),
  tr = new WeakMap(),
  sr = new WeakMap(),
  pi = new WeakMap();
function gi(e) {
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
function mi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : gi(Vr(e));
}
function Bs(e) {
  return Ze(e) ? e : Ks(e, !1, oi, ui, er);
}
function bi(e) {
  return Ks(e, !1, ci, di, tr);
}
function nr(e) {
  return Ks(e, !0, li, hi, sr);
}
function Ks(e, t, s, n, r) {
  if (!U(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const i = r.get(e);
  if (i) return i;
  const o = mi(e);
  if (o === 0) return e;
  const l = new Proxy(e, o === 2 ? n : s);
  return (r.set(e, l), l);
}
function lt(e) {
  return Ze(e) ? lt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ze(e) {
  return !!(e && e.__v_isReadonly);
}
function me(e) {
  return !!(e && e.__v_isShallow);
}
function Us(e) {
  return e ? !!e.__v_raw : !1;
}
function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e;
}
function xi(e) {
  return (
    !L(e, "__v_skip") && Object.isExtensible(e) && Hn(e, "__v_skip", !0),
    e
  );
}
const ee = (e) => (U(e) ? Bs(e) : e),
  Ms = (e) => (U(e) ? nr(e) : e);
function te(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ye(e) {
  return vi(e, !1);
}
function vi(e, t) {
  return te(e) ? e : new _i(e, t);
}
class _i {
  constructor(t, s) {
    ((this.dep = new $s()),
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
      n = this.__v_isShallow || me(t) || Ze(t);
    ((t = n ? t : F(t)),
      Ne(t, s) &&
      ((this._rawValue = t),
        (this._value = n ? t : ee(t)),
        this.dep.trigger()));
  }
}
function bt(e) {
  return te(e) ? e.value : e;
}
const yi = {
  get: (e, t, s) => (t === "__v_raw" ? e : bt(Reflect.get(e, t, s))),
  set: (e, t, s, n) => {
    const r = e[t];
    return te(r) && !te(s) ? ((r.value = s), !0) : Reflect.set(e, t, s, n);
  },
};
function rr(e) {
  return lt(e) ? e : new Proxy(e, yi);
}
class wi {
  constructor(t, s, n) {
    ((this.fn = t),
      (this.setter = s),
      (this._value = void 0),
      (this.dep = new $s(this)),
      (this.__v_isRef = !0),
      (this.deps = void 0),
      (this.depsTail = void 0),
      (this.flags = 16),
      (this.globalVersion = Tt - 1),
      (this.next = void 0),
      (this.effect = this),
      (this.__v_isReadonly = !s),
      (this.isSSR = n));
  }
  notify() {
    if (((this.flags |= 16), !(this.flags & 8) && B !== this))
      return (Un(this, !0), !0);
  }
  get value() {
    const t = this.dep.track();
    return (Gn(this), t && (t.version = this.dep.version), this._value);
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
function Si(e, t, s = !1) {
  let n, r;
  return (D(e) ? (n = e) : ((n = e.get), (r = e.set)), new wi(n, r, s));
}
const zt = {},
  Ut = new WeakMap();
let qe;
function Ci(e, t = !1, s = qe) {
  if (s) {
    let n = Ut.get(s);
    (n || Ut.set(s, (n = [])), n.push(e));
  }
}
function Ei(e, t, s = z) {
  const {
    immediate: n,
    deep: r,
    once: i,
    scheduler: o,
    augmentJob: l,
    call: a,
  } = s,
    d = (O) => (r ? O : me(O) || r === !1 || r === 0 ? De(O, 1) : De(O));
  let u,
    g,
    C,
    E,
    j = !1,
    k = !1;
  if (
    (te(e)
      ? ((g = () => e.value), (j = me(e)))
      : lt(e)
        ? ((g = () => d(e)), (j = !0))
        : R(e)
          ? ((k = !0),
            (j = e.some((O) => lt(O) || me(O))),
            (g = () =>
              e.map((O) => {
                if (te(O)) return O.value;
                if (lt(O)) return d(O);
                if (D(O)) return a ? a(O, 2) : O();
              })))
          : D(e)
            ? t
              ? (g = a ? () => a(e, 2) : e)
              : (g = () => {
                if (C) {
                  Ve();
                  try {
                    C();
                  } finally {
                    Be();
                  }
                }
                const O = qe;
                qe = u;
                try {
                  return a ? a(e, 3, [E]) : e(E);
                } finally {
                  qe = O;
                }
              })
            : (g = Me),
      t && r)
  ) {
    const O = g,
      Q = r === !0 ? 1 / 0 : r;
    g = () => De(O(), Q);
  }
  const X = Xr(),
    H = () => {
      (u.stop(), X && X.active && Fs(X.effects, u));
    };
  if (i && t) {
    const O = t;
    t = (...Q) => {
      (O(...Q), H());
    };
  }
  let W = k ? new Array(e.length).fill(zt) : zt;
  const J = (O) => {
    if (!(!(u.flags & 1) || (!u.dirty && !O)))
      if (t) {
        const Q = u.run();
        if (r || j || (k ? Q.some((ke, ve) => Ne(ke, W[ve])) : Ne(Q, W))) {
          C && C();
          const ke = qe;
          qe = u;
          try {
            const ve = [Q, W === zt ? void 0 : k && W[0] === zt ? [] : W, E];
            (a ? a(t, 3, ve) : t(...ve), (W = Q));
          } finally {
            qe = ke;
          }
        }
      } else u.run();
  };
  return (
    l && l(J),
    (u = new Bn(g)),
    (u.scheduler = o ? () => o(J, !1) : J),
    (E = (O) => Ci(O, !1, u)),
    (C = u.onStop =
      () => {
        const O = Ut.get(u);
        if (O) {
          if (a) a(O, 4);
          else for (const Q of O) Q();
          Ut.delete(u);
        }
      }),
    t ? (n ? J(!0) : (W = u.run())) : o ? o(J.bind(null, !0), !0) : u.run(),
    (H.pause = u.pause.bind(u)),
    (H.resume = u.resume.bind(u)),
    (H.stop = H),
    H
  );
}
function De(e, t = 1 / 0, s) {
  if (t <= 0 || !U(e) || e.__v_skip || ((s = s || new Set()), s.has(e)))
    return e;
  if ((s.add(e), t--, te(e))) De(e.value, t, s);
  else if (R(e)) for (let n = 0; n < e.length; n++) De(e[n], t, s);
  else if (kn(e) || ot(e))
    e.forEach((n) => {
      De(n, t, s);
    });
  else if (Ln(e)) {
    for (const n in e) De(e[n], t, s);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && De(e[n], t, s);
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
    ns(r, t, s);
  }
}
function Ae(e, t, s, n) {
  if (D(e)) {
    const r = Rt(e, t, s, n);
    return (
      r &&
      jn(r) &&
      r.catch((i) => {
        ns(i, t, s);
      }),
      r
    );
  }
  if (R(e)) {
    const r = [];
    for (let i = 0; i < e.length; i++) r.push(Ae(e[i], t, s, n));
    return r;
  }
}
function ns(e, t, s, n = !0) {
  const r = t ? t.vnode : null,
    { errorHandler: i, throwUnhandledErrorInProduction: o } =
      (t && t.appContext.config) || z;
  if (t) {
    let l = t.parent;
    const a = t.proxy,
      d = `https://vuejs.org/error-reference/#runtime-${s}`;
    for (; l;) {
      const u = l.ec;
      if (u) {
        for (let g = 0; g < u.length; g++) if (u[g](e, a, d) === !1) return;
      }
      l = l.parent;
    }
    if (i) {
      (Ve(), Rt(i, null, 10, [e, a, d]), Be());
      return;
    }
  }
  Ti(e, s, r, n, o);
}
function Ti(e, t, s, n = !0, r = !1) {
  if (r) throw e;
  console.error(e);
}
const ie = [];
let Ee = -1;
const ct = [];
let Fe = null,
  st = 0;
const ir = Promise.resolve();
let Wt = null;
function or(e) {
  const t = Wt || ir;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Mi(e) {
  let t = Ee + 1,
    s = ie.length;
  for (; t < s;) {
    const n = (t + s) >>> 1,
      r = ie[n],
      i = At(r);
    i < e || (i === e && r.flags & 2) ? (t = n + 1) : (s = n);
  }
  return t;
}
function Ws(e) {
  if (!(e.flags & 1)) {
    const t = At(e),
      s = ie[ie.length - 1];
    (!s || (!(e.flags & 2) && t >= At(s)) ? ie.push(e) : ie.splice(Mi(t), 0, e),
      (e.flags |= 1),
      lr());
  }
}
function lr() {
  Wt || (Wt = ir.then(ar));
}
function Ai(e) {
  (R(e)
    ? ct.push(...e)
    : Fe && e.id === -1
      ? Fe.splice(st + 1, 0, e)
      : e.flags & 1 || (ct.push(e), (e.flags |= 1)),
    lr());
}
function cn(e, t, s = Ee + 1) {
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
function cr(e) {
  if (ct.length) {
    const t = [...new Set(ct)].sort((s, n) => At(s) - At(n));
    if (((ct.length = 0), Fe)) {
      Fe.push(...t);
      return;
    }
    for (Fe = t, st = 0; st < Fe.length; st++) {
      const s = Fe[st];
      (s.flags & 4 && (s.flags &= -2), s.flags & 8 || s(), (s.flags &= -2));
    }
    ((Fe = null), (st = 0));
  }
}
const At = (e) => (e.id == null ? (e.flags & 2 ? -1 : 1 / 0) : e.id);
function ar(e) {
  try {
    for (Ee = 0; Ee < ie.length; Ee++) {
      const t = ie[Ee];
      t &&
        !(t.flags & 8) &&
        (t.flags & 4 && (t.flags &= -2),
          Rt(t, t.i, t.i ? 15 : 14),
          t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Ee < ie.length; Ee++) {
      const t = ie[Ee];
      t && (t.flags &= -2);
    }
    ((Ee = -1),
      (ie.length = 0),
      cr(),
      (Wt = null),
      (ie.length || ct.length) && ar());
  }
}
let ge = null,
  fr = null;
function Jt(e) {
  const t = ge;
  return ((ge = e), (fr = (e && e.type.__scopeId) || null), t);
}
function Oi(e, t = ge, s) {
  if (!t || e._n) return e;
  const n = (...r) => {
    n._d && bn(-1);
    const i = Jt(t);
    let o;
    try {
      o = e(...r);
    } finally {
      (Jt(i), n._d && bn(1));
    }
    return o;
  };
  return ((n._n = !0), (n._c = !0), (n._d = !0), n);
}
function Pi(e, t) {
  if (ge === null) return e;
  const s = ls(ge),
    n = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [i, o, l, a = z] = t[r];
    i &&
      (D(i) && (i = { mounted: i, updated: i }),
        i.deep && De(o),
        n.push({
          dir: i,
          instance: s,
          value: o,
          oldValue: void 0,
          arg: l,
          modifiers: a,
        }));
  }
  return e;
}
function Je(e, t, s, n) {
  const r = e.dirs,
    i = t && t.dirs;
  for (let o = 0; o < r.length; o++) {
    const l = r[o];
    i && (l.oldValue = i[o].value);
    let a = l.dir[n];
    a && (Ve(), Ae(a, s, 8, [e.el, l, e, t]), Be());
  }
}
const Ri = Symbol("_vte"),
  Di = (e) => e.__isTeleport;
function Js(e, t) {
  e.shapeFlag & 6 && e.component
    ? ((e.transition = t), Js(e.component.subTree, t))
    : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t);
}
/*! #__NO_SIDE_EFFECTS__ */ function Gs(e, t) {
  return D(e) ? se({ name: e.name }, t, { setup: e }) : e;
}
function ur(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Gt(e, t, s, n, r = !1) {
  if (R(e)) {
    e.forEach((j, k) => Gt(j, t && (R(t) ? t[k] : t), s, n, r));
    return;
  }
  if (wt(n) && !r) {
    n.shapeFlag & 512 &&
      n.type.__asyncResolved &&
      n.component.subTree.component &&
      Gt(e, t, s, n.component.subTree);
    return;
  }
  const i = n.shapeFlag & 4 ? ls(n.component) : n.el,
    o = r ? null : i,
    { i: l, r: a } = e,
    d = t && t.r,
    u = l.refs === z ? (l.refs = {}) : l.refs,
    g = l.setupState,
    C = F(g),
    E = g === z ? () => !1 : (j) => L(C, j);
  if (
    (d != null &&
      d !== a &&
      (Y(d)
        ? ((u[d] = null), E(d) && (g[d] = null))
        : te(d) && (d.value = null)),
      D(a))
  )
    Rt(a, l, 12, [o, u]);
  else {
    const j = Y(a),
      k = te(a);
    if (j || k) {
      const X = () => {
        if (e.f) {
          const H = j ? (E(a) ? g[a] : u[a]) : a.value;
          r
            ? R(H) && Fs(H, i)
            : R(H)
              ? H.includes(i) || H.push(i)
              : j
                ? ((u[a] = [i]), E(a) && (g[a] = u[a]))
                : ((a.value = [i]), e.k && (u[e.k] = a.value));
        } else
          j
            ? ((u[a] = o), E(a) && (g[a] = o))
            : k && ((a.value = o), e.k && (u[e.k] = o));
      };
      o ? ((X.id = -1), de(X, s)) : X();
    }
  }
}
es().requestIdleCallback;
es().cancelIdleCallback;
const wt = (e) => !!e.type.__asyncLoader,
  dr = (e) => e.type.__isKeepAlive;
function Ii(e, t) {
  hr(e, "a", t);
}
function ki(e, t) {
  hr(e, "da", t);
}
function hr(e, t, s = le) {
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
  if ((rs(t, n, s), s)) {
    let r = s.parent;
    for (; r && r.parent;)
      (dr(r.parent.vnode) && ji(n, t, s, r), (r = r.parent));
  }
}
function ji(e, t, s, n) {
  const r = rs(t, e, n, !0);
  Ys(() => {
    Fs(n[t], r);
  }, s);
}
function rs(e, t, s = le, n = !1) {
  if (s) {
    const r = s[e] || (s[e] = []),
      i =
        t.__weh ||
        (t.__weh = (...o) => {
          Ve();
          const l = Dt(s),
            a = Ae(t, s, e, o);
          return (l(), Be(), a);
        });
    return (n ? r.unshift(i) : r.push(i), i);
  }
}
const Ie =
  (e) =>
    (t, s = le) => {
      (!Pt || e === "sp") && rs(e, (...n) => t(...n), s);
    },
  Fi = Ie("bm"),
  qs = Ie("m"),
  Li = Ie("bu"),
  Ni = Ie("u"),
  Hi = Ie("bum"),
  Ys = Ie("um"),
  zi = Ie("sp"),
  $i = Ie("rtg"),
  Vi = Ie("rtc");
function Bi(e, t = le) {
  rs("ec", e, t);
}
const Ki = Symbol.for("v-ndc");
function nt(e, t, s, n) {
  let r;
  const i = s,
    o = R(e);
  if (o || Y(e)) {
    const l = o && lt(e);
    let a = !1;
    (l && ((a = !me(e)), (e = ss(e))), (r = new Array(e.length)));
    for (let d = 0, u = e.length; d < u; d++)
      r[d] = t(a ? ee(e[d]) : e[d], d, void 0, i);
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let l = 0; l < e; l++) r[l] = t(l + 1, l, void 0, i);
  } else if (U(e))
    if (e[Symbol.iterator]) r = Array.from(e, (l, a) => t(l, a, void 0, i));
    else {
      const l = Object.keys(e);
      r = new Array(l.length);
      for (let a = 0, d = l.length; a < d; a++) {
        const u = l[a];
        r[a] = t(e[u], u, a, i);
      }
    }
  else r = [];
  return r;
}
const As = (e) => (e ? (jr(e) ? ls(e) : As(e.parent)) : null),
  St = se(Object.create(null), {
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
    $options: (e) => gr(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        Ws(e.update);
      }),
    $nextTick: (e) => e.n || (e.n = or.bind(e.proxy)),
    $watch: (e) => ho.bind(e),
  }),
  gs = (e, t) => e !== z && !e.__isScriptSetup && L(e, t),
  Ui = {
    get({ _: e }, t) {
      if (t === "__v_skip") return !0;
      const {
        ctx: s,
        setupState: n,
        data: r,
        props: i,
        accessCache: o,
        type: l,
        appContext: a,
      } = e;
      let d;
      if (t[0] !== "$") {
        const E = o[t];
        if (E !== void 0)
          switch (E) {
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
          if (gs(n, t)) return ((o[t] = 1), n[t]);
          if (r !== z && L(r, t)) return ((o[t] = 2), r[t]);
          if ((d = e.propsOptions[0]) && L(d, t)) return ((o[t] = 3), i[t]);
          if (s !== z && L(s, t)) return ((o[t] = 4), s[t]);
          Os && (o[t] = 0);
        }
      }
      const u = St[t];
      let g, C;
      if (u) return (t === "$attrs" && Z(e.attrs, "get", ""), u(e));
      if ((g = l.__cssModules) && (g = g[t])) return g;
      if (s !== z && L(s, t)) return ((o[t] = 4), s[t]);
      if (((C = a.config.globalProperties), L(C, t))) return C[t];
    },
    set({ _: e }, t, s) {
      const { data: n, setupState: r, ctx: i } = e;
      return gs(r, t)
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
        gs(t, o) ||
        ((l = i[0]) && L(l, o)) ||
        L(n, o) ||
        L(St, o) ||
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
function an(e) {
  return R(e) ? e.reduce((t, s) => ((t[s] = null), t), {}) : e;
}
let Os = !0;
function Wi(e) {
  const t = gr(e),
    s = e.proxy,
    n = e.ctx;
  ((Os = !1), t.beforeCreate && fn(t.beforeCreate, e, "bc"));
  const {
    data: r,
    computed: i,
    methods: o,
    watch: l,
    provide: a,
    inject: d,
    created: u,
    beforeMount: g,
    mounted: C,
    beforeUpdate: E,
    updated: j,
    activated: k,
    deactivated: X,
    beforeDestroy: H,
    beforeUnmount: W,
    destroyed: J,
    unmounted: O,
    render: Q,
    renderTracked: ke,
    renderTriggered: ve,
    errorCaptured: je,
    serverPrefetch: It,
    expose: Ke,
    inheritAttrs: ut,
    components: kt,
    directives: jt,
    filters: cs,
  } = t;
  if ((d && Ji(d, n, null), o))
    for (const K in o) {
      const $ = o[K];
      D($) && (n[K] = $.bind(s));
    }
  if (r) {
    const K = r.call(s, s);
    U(K) && (e.data = Bs(K));
  }
  if (((Os = !0), i))
    for (const K in i) {
      const $ = i[K],
        Ue = D($) ? $.bind(s, s) : D($.get) ? $.get.bind(s, s) : Me,
        Ft = !D($) && D($.set) ? $.set.bind(s) : Me,
        We = ko({ get: Ue, set: Ft });
      Object.defineProperty(n, K, {
        enumerable: !0,
        configurable: !0,
        get: () => We.value,
        set: (_e) => (We.value = _e),
      });
    }
  if (l) for (const K in l) pr(l[K], n, s, K);
  if (a) {
    const K = D(a) ? a.call(s) : a;
    Reflect.ownKeys(K).forEach(($) => {
      Zi($, K[$]);
    });
  }
  u && fn(u, e, "c");
  function ne(K, $) {
    R($) ? $.forEach((Ue) => K(Ue.bind(s))) : $ && K($.bind(s));
  }
  if (
    (ne(Fi, g),
      ne(qs, C),
      ne(Li, E),
      ne(Ni, j),
      ne(Ii, k),
      ne(ki, X),
      ne(Bi, je),
      ne(Vi, ke),
      ne($i, ve),
      ne(Hi, W),
      ne(Ys, O),
      ne(zi, It),
      R(Ke))
  )
    if (Ke.length) {
      const K = e.exposed || (e.exposed = {});
      Ke.forEach(($) => {
        Object.defineProperty(K, $, {
          get: () => s[$],
          set: (Ue) => (s[$] = Ue),
        });
      });
    } else e.exposed || (e.exposed = {});
  (Q && e.render === Me && (e.render = Q),
    ut != null && (e.inheritAttrs = ut),
    kt && (e.components = kt),
    jt && (e.directives = jt),
    It && ur(e));
}
function Ji(e, t, s = Me) {
  R(e) && (e = Ps(e));
  for (const n in e) {
    const r = e[n];
    let i;
    (U(r)
      ? "default" in r
        ? (i = Vt(r.from || n, r.default, !0))
        : (i = Vt(r.from || n))
      : (i = Vt(r)),
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
function fn(e, t, s) {
  Ae(R(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, s);
}
function pr(e, t, s, n) {
  let r = n.includes(".") ? Or(s, n) : () => s[n];
  if (Y(e)) {
    const i = t[e];
    D(i) && Ct(r, i);
  } else if (D(e)) Ct(r, e.bind(s));
  else if (U(e))
    if (R(e)) e.forEach((i) => pr(i, t, s, n));
    else {
      const i = D(e.handler) ? e.handler.bind(s) : t[e.handler];
      D(i) && Ct(r, i, e);
    }
}
function gr(e) {
  const t = e.type,
    { mixins: s, extends: n } = t,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = i.get(t);
  let a;
  return (
    l
      ? (a = l)
      : !r.length && !s && !n
        ? (a = t)
        : ((a = {}),
          r.length && r.forEach((d) => qt(a, d, o, !0)),
          qt(a, t, o)),
    U(t) && i.set(t, a),
    a
  );
}
function qt(e, t, s, n = !1) {
  const { mixins: r, extends: i } = t;
  (i && qt(e, i, s, !0), r && r.forEach((o) => qt(e, o, s, !0)));
  for (const o in t)
    if (!(n && o === "expose")) {
      const l = Gi[o] || (s && s[o]);
      e[o] = l ? l(e[o], t[o]) : t[o];
    }
  return e;
}
const Gi = {
  data: un,
  props: dn,
  emits: dn,
  methods: xt,
  computed: xt,
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
  components: xt,
  directives: xt,
  watch: Yi,
  provide: un,
  inject: qi,
};
function un(e, t) {
  return t
    ? e
      ? function () {
        return se(
          D(e) ? e.call(this, this) : e,
          D(t) ? t.call(this, this) : t,
        );
      }
      : t
    : e;
}
function qi(e, t) {
  return xt(Ps(e), Ps(t));
}
function Ps(e) {
  if (R(e)) {
    const t = {};
    for (let s = 0; s < e.length; s++) t[e[s]] = e[s];
    return t;
  }
  return e;
}
function re(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function xt(e, t) {
  return e ? se(Object.create(null), e, t) : t;
}
function dn(e, t) {
  return e
    ? R(e) && R(t)
      ? [...new Set([...e, ...t])]
      : se(Object.create(null), an(e), an(t ?? {}))
    : t;
}
function Yi(e, t) {
  if (!e) return t;
  if (!t) return e;
  const s = se(Object.create(null), e);
  for (const n in t) s[n] = re(e[n], t[n]);
  return s;
}
function mr() {
  return {
    app: null,
    config: {
      isNativeTag: zr,
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
let Qi = 0;
function Xi(e, t) {
  return function (n, r = null) {
    (D(n) || (n = se({}, n)), r != null && !U(r) && (r = null));
    const i = mr(),
      o = new WeakSet(),
      l = [];
    let a = !1;
    const d = (i.app = {
      _uid: Qi++,
      _component: n,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: jo,
      get config() {
        return i.config;
      },
      set config(u) { },
      use(u, ...g) {
        return (
          o.has(u) ||
          (u && D(u.install)
            ? (o.add(u), u.install(d, ...g))
            : D(u) && (o.add(u), u(d, ...g))),
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
        if (!a) {
          const E = d._ceVNode || xe(n, r);
          return (
            (E.appContext = i),
            C === !0 ? (C = "svg") : C === !1 && (C = void 0),
            e(E, u, C),
            (a = !0),
            (d._container = u),
            (u.__vue_app__ = d),
            ls(E.component)
          );
        }
      },
      onUnmount(u) {
        l.push(u);
      },
      unmount() {
        a &&
          (Ae(l, d._instance, 16),
            e(null, d._container),
            delete d._container.__vue_app__);
      },
      provide(u, g) {
        return ((i.provides[u] = g), d);
      },
      runWithContext(u) {
        const g = at;
        at = d;
        try {
          return u();
        } finally {
          at = g;
        }
      },
    });
    return d;
  };
}
let at = null;
function Zi(e, t) {
  if (le) {
    let s = le.provides;
    const n = le.parent && le.parent.provides;
    (n === s && (s = le.provides = Object.create(n)), (s[e] = t));
  }
}
function Vt(e, t, s = !1) {
  const n = le || ge;
  if (n || at) {
    const r = at
      ? at._context.provides
      : n
        ? n.parent == null
          ? n.vnode.appContext && n.vnode.appContext.provides
          : n.parent.provides
        : void 0;
    if (r && e in r) return r[e];
    if (arguments.length > 1) return s && D(t) ? t.call(n && n.proxy) : t;
  }
}
const br = {},
  xr = () => Object.create(br),
  vr = (e) => Object.getPrototypeOf(e) === br;
function eo(e, t, s, n = !1) {
  const r = {},
    i = xr();
  ((e.propsDefaults = Object.create(null)), _r(e, t, r, i));
  for (const o in e.propsOptions[0]) o in r || (r[o] = void 0);
  (s ? (e.props = n ? r : bi(r)) : e.type.props ? (e.props = r) : (e.props = i),
    (e.attrs = i));
}
function to(e, t, s, n) {
  const {
    props: r,
    attrs: i,
    vnode: { patchFlag: o },
  } = e,
    l = F(r),
    [a] = e.propsOptions;
  let d = !1;
  if ((n || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let g = 0; g < u.length; g++) {
        let C = u[g];
        if (is(e.emitsOptions, C)) continue;
        const E = t[C];
        if (a)
          if (L(i, C)) E !== i[C] && ((i[C] = E), (d = !0));
          else {
            const j = He(C);
            r[j] = Rs(a, l, j, E, e, !1);
          }
        else E !== i[C] && ((i[C] = E), (d = !0));
      }
    }
  } else {
    _r(e, t, r, i) && (d = !0);
    let u;
    for (const g in l)
      (!t || (!L(t, g) && ((u = $e(g)) === g || !L(t, u)))) &&
        (a
          ? s &&
          (s[g] !== void 0 || s[u] !== void 0) &&
          (r[g] = Rs(a, l, g, void 0, e, !0))
          : delete r[g]);
    if (i !== l) for (const g in i) (!t || !L(t, g)) && (delete i[g], (d = !0));
  }
  d && Re(e.attrs, "set", "");
}
function _r(e, t, s, n) {
  const [r, i] = e.propsOptions;
  let o = !1,
    l;
  if (t)
    for (let a in t) {
      if (vt(a)) continue;
      const d = t[a];
      let u;
      r && L(r, (u = He(a)))
        ? !i || !i.includes(u)
          ? (s[u] = d)
          : ((l || (l = {}))[u] = d)
        : is(e.emitsOptions, a) ||
        ((!(a in n) || d !== n[a]) && ((n[a] = d), (o = !0)));
    }
  if (i) {
    const a = F(s),
      d = l || z;
    for (let u = 0; u < i.length; u++) {
      const g = i[u];
      s[g] = Rs(r, a, g, d[g], e, !L(d, g));
    }
  }
  return o;
}
function Rs(e, t, s, n, r, i) {
  const o = e[s];
  if (o != null) {
    const l = L(o, "default");
    if (l && n === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && D(a)) {
        const { propsDefaults: d } = r;
        if (s in d) n = d[s];
        else {
          const u = Dt(r);
          ((n = d[s] = a.call(null, t)), u());
        }
      } else n = a;
      r.ce && r.ce._setProp(s, n);
    }
    o[0] &&
      (i && !l ? (n = !1) : o[1] && (n === "" || n === $e(s)) && (n = !0));
  }
  return n;
}
const so = new WeakMap();
function yr(e, t, s = !1) {
  const n = s ? so : t.propsCache,
    r = n.get(e);
  if (r) return r;
  const i = e.props,
    o = {},
    l = [];
  let a = !1;
  if (!D(e)) {
    const u = (g) => {
      a = !0;
      const [C, E] = yr(g, t, !0);
      (se(o, C), E && l.push(...E));
    };
    (!s && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u));
  }
  if (!i && !a) return (U(e) && n.set(e, it), it);
  if (R(i))
    for (let u = 0; u < i.length; u++) {
      const g = He(i[u]);
      hn(g) && (o[g] = z);
    }
  else if (i)
    for (const u in i) {
      const g = He(u);
      if (hn(g)) {
        const C = i[u],
          E = (o[g] = R(C) || D(C) ? { type: C } : se({}, C)),
          j = E.type;
        let k = !1,
          X = !0;
        if (R(j))
          for (let H = 0; H < j.length; ++H) {
            const W = j[H],
              J = D(W) && W.name;
            if (J === "Boolean") {
              k = !0;
              break;
            } else J === "String" && (X = !1);
          }
        else k = D(j) && j.name === "Boolean";
        ((E[0] = k), (E[1] = X), (k || L(E, "default")) && l.push(g));
      }
    }
  const d = [o, l];
  return (U(e) && n.set(e, d), d);
}
function hn(e) {
  return e[0] !== "$" && !vt(e);
}
const wr = (e) => e[0] === "_" || e === "$stable",
  Qs = (e) => (R(e) ? e.map(Te) : [Te(e)]),
  no = (e, t, s) => {
    if (t._n) return t;
    const n = Oi((...r) => Qs(t(...r)), s);
    return ((n._c = !1), n);
  },
  Sr = (e, t, s) => {
    const n = e._ctx;
    for (const r in e) {
      if (wr(r)) continue;
      const i = e[r];
      if (D(i)) t[r] = no(r, i, n);
      else if (i != null) {
        const o = Qs(i);
        t[r] = () => o;
      }
    }
  },
  Cr = (e, t) => {
    const s = Qs(t);
    e.slots.default = () => s;
  },
  Er = (e, t, s) => {
    for (const n in t) (s || n !== "_") && (e[n] = t[n]);
  },
  ro = (e, t, s) => {
    const n = (e.slots = xr());
    if (e.vnode.shapeFlag & 32) {
      const r = t._;
      r ? (Er(n, t, s), s && Hn(n, "_", r, !0)) : Sr(t, n);
    } else t && Cr(e, t);
  },
  io = (e, t, s) => {
    const { vnode: n, slots: r } = e;
    let i = !0,
      o = z;
    if (n.shapeFlag & 32) {
      const l = t._;
      (l
        ? s && l === 1
          ? (i = !1)
          : Er(r, t, s)
        : ((i = !t.$stable), Sr(t, r)),
        (o = t));
    } else t && (Cr(e, t), (o = { default: 1 }));
    if (i) for (const l in r) !wr(l) && o[l] == null && delete r[l];
  },
  de = _o;
function oo(e) {
  return lo(e);
}
function lo(e, t) {
  const s = es();
  s.__VUE__ = !0;
  const {
    insert: n,
    remove: r,
    patchProp: i,
    createElement: o,
    createText: l,
    createComment: a,
    setText: d,
    setElementText: u,
    parentNode: g,
    nextSibling: C,
    setScopeId: E = Me,
    insertStaticContent: j,
  } = e,
    k = (
      c,
      f,
      h,
      x = null,
      m = null,
      b = null,
      w = void 0,
      y = null,
      _ = !!f.dynamicChildren,
    ) => {
      if (c === f) return;
      (c && !mt(c, f) && ((x = Lt(c)), _e(c, m, b, !0), (c = null)),
        f.patchFlag === -2 && ((_ = !1), (f.dynamicChildren = null)));
      const { type: v, ref: A, shapeFlag: S } = f;
      switch (v) {
        case os:
          X(c, f, h, x);
          break;
        case et:
          H(c, f, h, x);
          break;
        case bs:
          c == null && W(f, h, x, w);
          break;
        case oe:
          kt(c, f, h, x, m, b, w, y, _);
          break;
        default:
          S & 1
            ? Q(c, f, h, x, m, b, w, y, _)
            : S & 6
              ? jt(c, f, h, x, m, b, w, y, _)
              : (S & 64 || S & 128) && v.process(c, f, h, x, m, b, w, y, _, ht);
      }
      A != null && m && Gt(A, c && c.ref, b, f || c, !f);
    },
    X = (c, f, h, x) => {
      if (c == null) n((f.el = l(f.children)), h, x);
      else {
        const m = (f.el = c.el);
        f.children !== c.children && d(m, f.children);
      }
    },
    H = (c, f, h, x) => {
      c == null ? n((f.el = a(f.children || "")), h, x) : (f.el = c.el);
    },
    W = (c, f, h, x) => {
      [c.el, c.anchor] = j(c.children, f, h, x, c.el, c.anchor);
    },
    J = ({ el: c, anchor: f }, h, x) => {
      let m;
      for (; c && c !== f;) ((m = C(c)), n(c, h, x), (c = m));
      n(f, h, x);
    },
    O = ({ el: c, anchor: f }) => {
      let h;
      for (; c && c !== f;) ((h = C(c)), r(c), (c = h));
      r(f);
    },
    Q = (c, f, h, x, m, b, w, y, _) => {
      (f.type === "svg" ? (w = "svg") : f.type === "math" && (w = "mathml"),
        c == null ? ke(f, h, x, m, b, w, y, _) : It(c, f, m, b, w, y, _));
    },
    ke = (c, f, h, x, m, b, w, y) => {
      let _, v;
      const { props: A, shapeFlag: S, transition: M, dirs: P } = c;
      if (
        ((_ = c.el = o(c.type, b, A && A.is, A)),
          S & 8
            ? u(_, c.children)
            : S & 16 && je(c.children, _, null, x, m, ms(c, b), w, y),
          P && Je(c, null, x, "created"),
          ve(_, c, c.scopeId, w, x),
          A)
      ) {
        for (const V in A) V !== "value" && !vt(V) && i(_, V, null, A[V], b, x);
        ("value" in A && i(_, "value", null, A.value, b),
          (v = A.onVnodeBeforeMount) && Ce(v, x, c));
      }
      P && Je(c, null, x, "beforeMount");
      const I = co(m, M);
      (I && M.beforeEnter(_),
        n(_, f, h),
        ((v = A && A.onVnodeMounted) || I || P) &&
        de(() => {
          (v && Ce(v, x, c), I && M.enter(_), P && Je(c, null, x, "mounted"));
        }, m));
    },
    ve = (c, f, h, x, m) => {
      if ((h && E(c, h), x)) for (let b = 0; b < x.length; b++) E(c, x[b]);
      if (m) {
        let b = m.subTree;
        if (
          f === b ||
          (Rr(b.type) && (b.ssContent === f || b.ssFallback === f))
        ) {
          const w = m.vnode;
          ve(c, w, w.scopeId, w.slotScopeIds, m.parent);
        }
      }
    },
    je = (c, f, h, x, m, b, w, y, _ = 0) => {
      for (let v = _; v < c.length; v++) {
        const A = (c[v] = y ? Le(c[v]) : Te(c[v]));
        k(null, A, f, h, x, m, b, w, y);
      }
    },
    It = (c, f, h, x, m, b, w) => {
      const y = (f.el = c.el);
      let { patchFlag: _, dynamicChildren: v, dirs: A } = f;
      _ |= c.patchFlag & 16;
      const S = c.props || z,
        M = f.props || z;
      let P;
      if (
        (h && Ge(h, !1),
          (P = M.onVnodeBeforeUpdate) && Ce(P, h, f, c),
          A && Je(f, c, h, "beforeUpdate"),
          h && Ge(h, !0),
          ((S.innerHTML && M.innerHTML == null) ||
            (S.textContent && M.textContent == null)) &&
          u(y, ""),
          v
            ? Ke(c.dynamicChildren, v, y, h, x, ms(f, m), b)
            : w || $(c, f, y, null, h, x, ms(f, m), b, !1),
          _ > 0)
      ) {
        if (_ & 16) ut(y, S, M, h, m);
        else if (
          (_ & 2 && S.class !== M.class && i(y, "class", null, M.class, m),
            _ & 4 && i(y, "style", S.style, M.style, m),
            _ & 8)
        ) {
          const I = f.dynamicProps;
          for (let V = 0; V < I.length; V++) {
            const N = I[V],
              ae = S[N],
              ce = M[N];
            (ce !== ae || N === "value") && i(y, N, ae, ce, m, h);
          }
        }
        _ & 1 && c.children !== f.children && u(y, f.children);
      } else !w && v == null && ut(y, S, M, h, m);
      ((P = M.onVnodeUpdated) || A) &&
        de(() => {
          (P && Ce(P, h, f, c), A && Je(f, c, h, "updated"));
        }, x);
    },
    Ke = (c, f, h, x, m, b, w) => {
      for (let y = 0; y < f.length; y++) {
        const _ = c[y],
          v = f[y],
          A =
            _.el && (_.type === oe || !mt(_, v) || _.shapeFlag & 70)
              ? g(_.el)
              : h;
        k(_, v, A, null, x, m, b, w, !0);
      }
    },
    ut = (c, f, h, x, m) => {
      if (f !== h) {
        if (f !== z)
          for (const b in f) !vt(b) && !(b in h) && i(c, b, f[b], null, m, x);
        for (const b in h) {
          if (vt(b)) continue;
          const w = h[b],
            y = f[b];
          w !== y && b !== "value" && i(c, b, y, w, m, x);
        }
        "value" in h && i(c, "value", f.value, h.value, m);
      }
    },
    kt = (c, f, h, x, m, b, w, y, _) => {
      const v = (f.el = c ? c.el : l("")),
        A = (f.anchor = c ? c.anchor : l(""));
      let { patchFlag: S, dynamicChildren: M, slotScopeIds: P } = f;
      (P && (y = y ? y.concat(P) : P),
        c == null
          ? (n(v, h, x), n(A, h, x), je(f.children || [], h, A, m, b, w, y, _))
          : S > 0 && S & 64 && M && c.dynamicChildren
            ? (Ke(c.dynamicChildren, M, h, m, b, w, y),
              (f.key != null || (m && f === m.subTree)) && Tr(c, f, !0))
            : $(c, f, h, A, m, b, w, y, _));
    },
    jt = (c, f, h, x, m, b, w, y, _) => {
      ((f.slotScopeIds = y),
        c == null
          ? f.shapeFlag & 512
            ? m.ctx.activate(f, h, x, w, _)
            : cs(f, h, x, m, b, w, _)
          : Zs(c, f, _));
    },
    cs = (c, f, h, x, m, b, w) => {
      const y = (c.component = Ao(c, x, m));
      if ((dr(c) && (y.ctx.renderer = ht), Oo(y, !1, w), y.asyncDep)) {
        if ((m && m.registerDep(y, ne, w), !c.el)) {
          const _ = (y.subTree = xe(et));
          H(null, _, f, h);
        }
      } else ne(y, c, f, h, m, b, w);
    },
    Zs = (c, f, h) => {
      const x = (f.component = c.component);
      if (xo(c, f, h))
        if (x.asyncDep && !x.asyncResolved) {
          K(x, f, h);
          return;
        } else ((x.next = f), x.update());
      else ((f.el = c.el), (x.vnode = f));
    },
    ne = (c, f, h, x, m, b, w) => {
      const y = () => {
        if (c.isMounted) {
          let { next: S, bu: M, u: P, parent: I, vnode: V } = c;
          {
            const we = Mr(c);
            if (we) {
              (S && ((S.el = V.el), K(c, S, w)),
                we.asyncDep.then(() => {
                  c.isUnmounted || y();
                }));
              return;
            }
          }
          let N = S,
            ae;
          (Ge(c, !1),
            S ? ((S.el = V.el), K(c, S, w)) : (S = V),
            M && $t(M),
            (ae = S.props && S.props.onVnodeBeforeUpdate) && Ce(ae, I, S, V),
            Ge(c, !0));
          const ce = gn(c),
            ye = c.subTree;
          ((c.subTree = ce),
            k(ye, ce, g(ye.el), Lt(ye), c, m, b),
            (S.el = ce.el),
            N === null && vo(c, ce.el),
            P && de(P, m),
            (ae = S.props && S.props.onVnodeUpdated) &&
            de(() => Ce(ae, I, S, V), m));
        } else {
          let S;
          const { el: M, props: P } = f,
            { bm: I, m: V, parent: N, root: ae, type: ce } = c,
            ye = wt(f);
          (Ge(c, !1),
            I && $t(I),
            !ye && (S = P && P.onVnodeBeforeMount) && Ce(S, N, f),
            Ge(c, !0));
          {
            ae.ce && ae.ce._injectChildStyle(ce);
            const we = (c.subTree = gn(c));
            (k(null, we, h, x, c, m, b), (f.el = we.el));
          }
          if ((V && de(V, m), !ye && (S = P && P.onVnodeMounted))) {
            const we = f;
            de(() => Ce(S, N, we), m);
          }
          ((f.shapeFlag & 256 ||
            (N && wt(N.vnode) && N.vnode.shapeFlag & 256)) &&
            c.a &&
            de(c.a, m),
            (c.isMounted = !0),
            (f = h = x = null));
        }
      };
      c.scope.on();
      const _ = (c.effect = new Bn(y));
      c.scope.off();
      const v = (c.update = _.run.bind(_)),
        A = (c.job = _.runIfDirty.bind(_));
      ((A.i = c), (A.id = c.uid), (_.scheduler = () => Ws(A)), Ge(c, !0), v());
    },
    K = (c, f, h) => {
      f.component = c;
      const x = c.vnode.props;
      ((c.vnode = f),
        (c.next = null),
        to(c, f.props, x, h),
        io(c, f.children, h),
        Ve(),
        cn(c),
        Be());
    },
    $ = (c, f, h, x, m, b, w, y, _ = !1) => {
      const v = c && c.children,
        A = c ? c.shapeFlag : 0,
        S = f.children,
        { patchFlag: M, shapeFlag: P } = f;
      if (M > 0) {
        if (M & 128) {
          Ft(v, S, h, x, m, b, w, y, _);
          return;
        } else if (M & 256) {
          Ue(v, S, h, x, m, b, w, y, _);
          return;
        }
      }
      P & 8
        ? (A & 16 && dt(v, m, b), S !== v && u(h, S))
        : A & 16
          ? P & 16
            ? Ft(v, S, h, x, m, b, w, y, _)
            : dt(v, m, b, !0)
          : (A & 8 && u(h, ""), P & 16 && je(S, h, x, m, b, w, y, _));
    },
    Ue = (c, f, h, x, m, b, w, y, _) => {
      ((c = c || it), (f = f || it));
      const v = c.length,
        A = f.length,
        S = Math.min(v, A);
      let M;
      for (M = 0; M < S; M++) {
        const P = (f[M] = _ ? Le(f[M]) : Te(f[M]));
        k(c[M], P, h, null, m, b, w, y, _);
      }
      v > A ? dt(c, m, b, !0, !1, S) : je(f, h, x, m, b, w, y, _, S);
    },
    Ft = (c, f, h, x, m, b, w, y, _) => {
      let v = 0;
      const A = f.length;
      let S = c.length - 1,
        M = A - 1;
      for (; v <= S && v <= M;) {
        const P = c[v],
          I = (f[v] = _ ? Le(f[v]) : Te(f[v]));
        if (mt(P, I)) k(P, I, h, null, m, b, w, y, _);
        else break;
        v++;
      }
      for (; v <= S && v <= M;) {
        const P = c[S],
          I = (f[M] = _ ? Le(f[M]) : Te(f[M]));
        if (mt(P, I)) k(P, I, h, null, m, b, w, y, _);
        else break;
        (S--, M--);
      }
      if (v > S) {
        if (v <= M) {
          const P = M + 1,
            I = P < A ? f[P].el : x;
          for (; v <= M;)
            (k(null, (f[v] = _ ? Le(f[v]) : Te(f[v])), h, I, m, b, w, y, _),
              v++);
        }
      } else if (v > M) for (; v <= S;) (_e(c[v], m, b, !0), v++);
      else {
        const P = v,
          I = v,
          V = new Map();
        for (v = I; v <= M; v++) {
          const fe = (f[v] = _ ? Le(f[v]) : Te(f[v]));
          fe.key != null && V.set(fe.key, v);
        }
        let N,
          ae = 0;
        const ce = M - I + 1;
        let ye = !1,
          we = 0;
        const pt = new Array(ce);
        for (v = 0; v < ce; v++) pt[v] = 0;
        for (v = P; v <= S; v++) {
          const fe = c[v];
          if (ae >= ce) {
            _e(fe, m, b, !0);
            continue;
          }
          let Se;
          if (fe.key != null) Se = V.get(fe.key);
          else
            for (N = I; N <= M; N++)
              if (pt[N - I] === 0 && mt(fe, f[N])) {
                Se = N;
                break;
              }
          Se === void 0
            ? _e(fe, m, b, !0)
            : ((pt[Se - I] = v + 1),
              Se >= we ? (we = Se) : (ye = !0),
              k(fe, f[Se], h, null, m, b, w, y, _),
              ae++);
        }
        const sn = ye ? ao(pt) : it;
        for (N = sn.length - 1, v = ce - 1; v >= 0; v--) {
          const fe = I + v,
            Se = f[fe],
            nn = fe + 1 < A ? f[fe + 1].el : x;
          pt[v] === 0
            ? k(null, Se, h, nn, m, b, w, y, _)
            : ye && (N < 0 || v !== sn[N] ? We(Se, h, nn, 2) : N--);
        }
      }
    },
    We = (c, f, h, x, m = null) => {
      const { el: b, type: w, transition: y, children: _, shapeFlag: v } = c;
      if (v & 6) {
        We(c.component.subTree, f, h, x);
        return;
      }
      if (v & 128) {
        c.suspense.move(f, h, x);
        return;
      }
      if (v & 64) {
        w.move(c, f, h, ht);
        return;
      }
      if (w === oe) {
        n(b, f, h);
        for (let S = 0; S < _.length; S++) We(_[S], f, h, x);
        n(c.anchor, f, h);
        return;
      }
      if (w === bs) {
        J(c, f, h);
        return;
      }
      if (x !== 2 && v & 1 && y)
        if (x === 0) (y.beforeEnter(b), n(b, f, h), de(() => y.enter(b), m));
        else {
          const { leave: S, delayLeave: M, afterLeave: P } = y,
            I = () => n(b, f, h),
            V = () => {
              S(b, () => {
                (I(), P && P());
              });
            };
          M ? M(b, I, V) : V();
        }
      else n(b, f, h);
    },
    _e = (c, f, h, x = !1, m = !1) => {
      const {
        type: b,
        props: w,
        ref: y,
        children: _,
        dynamicChildren: v,
        shapeFlag: A,
        patchFlag: S,
        dirs: M,
        cacheIndex: P,
      } = c;
      if (
        (S === -2 && (m = !1),
          y != null && Gt(y, null, h, c, !0),
          P != null && (f.renderCache[P] = void 0),
          A & 256)
      ) {
        f.ctx.deactivate(c);
        return;
      }
      const I = A & 1 && M,
        V = !wt(c);
      let N;
      if ((V && (N = w && w.onVnodeBeforeUnmount) && Ce(N, f, c), A & 6))
        Hr(c.component, h, x);
      else {
        if (A & 128) {
          c.suspense.unmount(h, x);
          return;
        }
        (I && Je(c, null, f, "beforeUnmount"),
          A & 64
            ? c.type.remove(c, f, h, ht, x)
            : v && !v.hasOnce && (b !== oe || (S > 0 && S & 64))
              ? dt(v, f, h, !1, !0)
              : ((b === oe && S & 384) || (!m && A & 16)) && dt(_, f, h),
          x && en(c));
      }
      ((V && (N = w && w.onVnodeUnmounted)) || I) &&
        de(() => {
          (N && Ce(N, f, c), I && Je(c, null, f, "unmounted"));
        }, h);
    },
    en = (c) => {
      const { type: f, el: h, anchor: x, transition: m } = c;
      if (f === oe) {
        Nr(h, x);
        return;
      }
      if (f === bs) {
        O(c);
        return;
      }
      const b = () => {
        (r(h), m && !m.persisted && m.afterLeave && m.afterLeave());
      };
      if (c.shapeFlag & 1 && m && !m.persisted) {
        const { leave: w, delayLeave: y } = m,
          _ = () => w(h, b);
        y ? y(c.el, b, _) : _();
      } else b();
    },
    Nr = (c, f) => {
      let h;
      for (; c !== f;) ((h = C(c)), r(c), (c = h));
      r(f);
    },
    Hr = (c, f, h) => {
      const { bum: x, scope: m, job: b, subTree: w, um: y, m: _, a: v } = c;
      (pn(_),
        pn(v),
        x && $t(x),
        m.stop(),
        b && ((b.flags |= 8), _e(w, c, f, h)),
        y && de(y, f),
        de(() => {
          c.isUnmounted = !0;
        }, f),
        f &&
        f.pendingBranch &&
        !f.isUnmounted &&
        c.asyncDep &&
        !c.asyncResolved &&
        c.suspenseId === f.pendingId &&
        (f.deps--, f.deps === 0 && f.resolve()));
    },
    dt = (c, f, h, x = !1, m = !1, b = 0) => {
      for (let w = b; w < c.length; w++) _e(c[w], f, h, x, m);
    },
    Lt = (c) => {
      if (c.shapeFlag & 6) return Lt(c.component.subTree);
      if (c.shapeFlag & 128) return c.suspense.next();
      const f = C(c.anchor || c.el),
        h = f && f[Ri];
      return h ? C(h) : f;
    };
  let as = !1;
  const tn = (c, f, h) => {
    (c == null
      ? f._vnode && _e(f._vnode, null, null, !0)
      : k(f._vnode || null, c, f, null, null, null, h),
      (f._vnode = c),
      as || ((as = !0), cn(), cr(), (as = !1)));
  },
    ht = {
      p: k,
      um: _e,
      m: We,
      r: en,
      mt: cs,
      mc: je,
      pc: $,
      pbc: Ke,
      n: Lt,
      o: e,
    };
  return { render: tn, hydrate: void 0, createApp: Xi(tn) };
}
function ms({ type: e, props: t }, s) {
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
function co(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted;
}
function Tr(e, t, s = !1) {
  const n = e.children,
    r = t.children;
  if (R(n) && R(r))
    for (let i = 0; i < n.length; i++) {
      const o = n[i];
      let l = r[i];
      (l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) &&
          ((l = r[i] = Le(r[i])), (l.el = o.el)),
          !s && l.patchFlag !== -2 && Tr(o, l)),
        l.type === os && (l.el = o.el));
    }
}
function ao(e) {
  const t = e.slice(),
    s = [0];
  let n, r, i, o, l;
  const a = e.length;
  for (n = 0; n < a; n++) {
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
function Mr(e) {
  const t = e.subTree.component;
  if (t) return t.asyncDep && !t.asyncResolved ? t : Mr(t);
}
function pn(e) {
  if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
const fo = Symbol.for("v-scx"),
  uo = () => Vt(fo);
function Ct(e, t, s) {
  return Ar(e, t, s);
}
function Ar(e, t, s = z) {
  const { immediate: n, deep: r, flush: i, once: o } = s,
    l = se({}, s),
    a = (t && n) || (!t && i !== "post");
  let d;
  if (Pt) {
    if (i === "sync") {
      const E = uo();
      d = E.__watcherHandles || (E.__watcherHandles = []);
    } else if (!a) {
      const E = () => { };
      return ((E.stop = Me), (E.resume = Me), (E.pause = Me), E);
    }
  }
  const u = le;
  l.call = (E, j, k) => Ae(E, u, j, k);
  let g = !1;
  (i === "post"
    ? (l.scheduler = (E) => {
      de(E, u && u.suspense);
    })
    : i !== "sync" &&
    ((g = !0),
      (l.scheduler = (E, j) => {
        j ? E() : Ws(E);
      })),
    (l.augmentJob = (E) => {
      (t && (E.flags |= 4),
        g && ((E.flags |= 2), u && ((E.id = u.uid), (E.i = u))));
    }));
  const C = Ei(e, t, l);
  return (Pt && (d ? d.push(C) : a && C()), C);
}
function ho(e, t, s) {
  const n = this.proxy,
    r = Y(e) ? (e.includes(".") ? Or(n, e) : () => n[e]) : e.bind(n, n);
  let i;
  D(t) ? (i = t) : ((i = t.handler), (s = t));
  const o = Dt(this),
    l = Ar(r, i.bind(n), s);
  return (o(), l);
}
function Or(e, t) {
  const s = t.split(".");
  return () => {
    let n = e;
    for (let r = 0; r < s.length && n; r++) n = n[s[r]];
    return n;
  };
}
const po = (e, t) =>
  t === "modelValue" || t === "model-value"
    ? e.modelModifiers
    : e[`${t}Modifiers`] || e[`${He(t)}Modifiers`] || e[`${$e(t)}Modifiers`];
function go(e, t, ...s) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || z;
  let r = s;
  const i = t.startsWith("update:"),
    o = i && po(n, t.slice(7));
  o &&
    (o.trim && (r = s.map((u) => (Y(u) ? u.trim() : u))),
      o.number && (r = s.map(ws)));
  let l,
    a = n[(l = fs(t))] || n[(l = fs(He(t)))];
  (!a && i && (a = n[(l = fs($e(t)))]), a && Ae(a, e, 6, r));
  const d = n[l + "Once"];
  if (d) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[l]) return;
    ((e.emitted[l] = !0), Ae(d, e, 6, r));
  }
}
function Pr(e, t, s = !1) {
  const n = t.emitsCache,
    r = n.get(e);
  if (r !== void 0) return r;
  const i = e.emits;
  let o = {},
    l = !1;
  if (!D(e)) {
    const a = (d) => {
      const u = Pr(d, t, !0);
      u && ((l = !0), se(o, u));
    };
    (!s && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a));
  }
  return !i && !l
    ? (U(e) && n.set(e, null), null)
    : (R(i) ? i.forEach((a) => (o[a] = null)) : se(o, i),
      U(e) && n.set(e, o),
      o);
}
function is(e, t) {
  return !e || !Qt(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      L(e, t[0].toLowerCase() + t.slice(1)) || L(e, $e(t)) || L(e, t));
}
function gn(e) {
  const {
    type: t,
    vnode: s,
    proxy: n,
    withProxy: r,
    propsOptions: [i],
    slots: o,
    attrs: l,
    emit: a,
    render: d,
    renderCache: u,
    props: g,
    data: C,
    setupState: E,
    ctx: j,
    inheritAttrs: k,
  } = e,
    X = Jt(e);
  let H, W;
  try {
    if (s.shapeFlag & 4) {
      const O = r || n,
        Q = O;
      ((H = Te(d.call(Q, O, u, g, E, C, j))), (W = l));
    } else {
      const O = t;
      ((H = Te(
        O.length > 1 ? O(g, { attrs: l, slots: o, emit: a }) : O(g, null),
      )),
        (W = t.props ? l : mo(l)));
    }
  } catch (O) {
    ((Et.length = 0), ns(O, e, 1), (H = xe(et)));
  }
  let J = H;
  if (W && k !== !1) {
    const O = Object.keys(W),
      { shapeFlag: Q } = J;
    O.length &&
      Q & 7 &&
      (i && O.some(js) && (W = bo(W, i)), (J = ft(J, W, !1, !0)));
  }
  return (
    s.dirs &&
    ((J = ft(J, null, !1, !0)),
      (J.dirs = J.dirs ? J.dirs.concat(s.dirs) : s.dirs)),
    s.transition && Js(J, s.transition),
    (H = J),
    Jt(X),
    H
  );
}
const mo = (e) => {
  let t;
  for (const s in e)
    (s === "class" || s === "style" || Qt(s)) && ((t || (t = {}))[s] = e[s]);
  return t;
},
  bo = (e, t) => {
    const s = {};
    for (const n in e) (!js(n) || !(n.slice(9) in t)) && (s[n] = e[n]);
    return s;
  };
function xo(e, t, s) {
  const { props: n, children: r, component: i } = e,
    { props: o, children: l, patchFlag: a } = t,
    d = i.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (s && a >= 0) {
    if (a & 1024) return !0;
    if (a & 16) return n ? mn(n, o, d) : !!o;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let g = 0; g < u.length; g++) {
        const C = u[g];
        if (o[C] !== n[C] && !is(d, C)) return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable)
      ? !0
      : n === o
        ? !1
        : n
          ? o
            ? mn(n, o, d)
            : !0
          : !!o;
  return !1;
}
function mn(e, t, s) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length) return !0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (t[i] !== e[i] && !is(s, i)) return !0;
  }
  return !1;
}
function vo({ vnode: e, parent: t }, s) {
  for (; t;) {
    const n = t.subTree;
    if ((n.suspense && n.suspense.activeBranch === e && (n.el = e.el), n === e))
      (((e = t.vnode).el = s), (t = t.parent));
    else break;
  }
}
const Rr = (e) => e.__isSuspense;
function _o(e, t) {
  t && t.pendingBranch
    ? R(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Ai(e);
}
const oe = Symbol.for("v-fgt"),
  os = Symbol.for("v-txt"),
  et = Symbol.for("v-cmt"),
  bs = Symbol.for("v-stc"),
  Et = [];
let pe = null;
function G(e = !1) {
  Et.push((pe = e ? null : []));
}
function yo() {
  (Et.pop(), (pe = Et[Et.length - 1] || null));
}
let Ot = 1;
function bn(e, t = !1) {
  ((Ot += e), e < 0 && pe && t && (pe.hasOnce = !0));
}
function Dr(e) {
  return (
    (e.dynamicChildren = Ot > 0 ? pe || it : null),
    yo(),
    Ot > 0 && pe && pe.push(e),
    e
  );
}
function q(e, t, s, n, r, i) {
  return Dr(p(e, t, s, n, r, i, !0));
}
function wo(e, t, s, n, r) {
  return Dr(xe(e, t, s, n, r, !0));
}
function Ir(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function mt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const kr = ({ key: e }) => e ?? null,
  Bt = ({ ref: e, ref_key: t, ref_for: s }) => (
    typeof e == "number" && (e = "" + e),
    e != null
      ? Y(e) || te(e) || D(e)
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
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && kr(t),
    ref: t && Bt(t),
    scopeId: fr,
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
      ? (Xs(a, s), i & 128 && e.normalize(a))
      : s && (a.shapeFlag |= Y(s) ? 8 : 16),
    Ot > 0 &&
    !o &&
    pe &&
    (a.patchFlag > 0 || i & 6) &&
    a.patchFlag !== 32 &&
    pe.push(a),
    a
  );
}
const xe = So;
function So(e, t = null, s = null, n = 0, r = null, i = !1) {
  if (((!e || e === Ki) && (e = et), Ir(e))) {
    const l = ft(e, t, !0);
    return (
      s && Xs(l, s),
      Ot > 0 &&
      !i &&
      pe &&
      (l.shapeFlag & 6 ? (pe[pe.indexOf(e)] = l) : pe.push(l)),
      (l.patchFlag = -2),
      l
    );
  }
  if ((Io(e) && (e = e.__vccOpts), t)) {
    t = Co(t);
    let { class: l, style: a } = t;
    (l && !Y(l) && (t.class = T(l)),
      U(a) && (Us(a) && !R(a) && (a = se({}, a)), (t.style = ts(a))));
  }
  const o = Y(e) ? 1 : Rr(e) ? 128 : Di(e) ? 64 : U(e) ? 4 : D(e) ? 2 : 0;
  return p(e, t, s, n, r, o, i, !0);
}
function Co(e) {
  return e ? (Us(e) || vr(e) ? se({}, e) : e) : null;
}
function ft(e, t, s = !1, n = !1) {
  const { props: r, ref: i, patchFlag: o, children: l, transition: a } = e,
    d = t ? Eo(r || {}, t) : r,
    u = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: d,
      key: d && kr(d),
      ref:
        t && t.ref
          ? s && i
            ? R(i)
              ? i.concat(Bt(t))
              : [i, Bt(t)]
            : Bt(t)
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
      transition: a,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && ft(e.ssContent),
      ssFallback: e.ssFallback && ft(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce,
    };
  return (a && n && Js(u, a.clone(u)), u);
}
function Qe(e = " ", t = 0) {
  return xe(os, null, e, t);
}
function xs(e = "", t = !1) {
  return t ? (G(), wo(et, null, e)) : xe(et, null, e);
}
function Te(e) {
  return e == null || typeof e == "boolean"
    ? xe(et)
    : R(e)
      ? xe(oe, null, e.slice())
      : Ir(e)
        ? Le(e)
        : xe(os, null, String(e));
}
function Le(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : ft(e);
}
function Xs(e, t) {
  let s = 0;
  const { shapeFlag: n } = e;
  if (t == null) t = null;
  else if (R(t)) s = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), Xs(e, r()), r._c && (r._d = !0));
      return;
    } else {
      s = 32;
      const r = t._;
      !r && !vr(t)
        ? (t._ctx = ge)
        : r === 3 &&
        ge &&
        (ge.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    D(t)
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
        t.class !== n.class && (t.class = T([t.class, n.class]));
      else if (r === "style") t.style = ts([t.style, n.style]);
      else if (Qt(r)) {
        const i = t[r],
          o = n[r];
        o &&
          i !== o &&
          !(R(i) && i.includes(o)) &&
          (t[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (t[r] = n[r]);
  }
  return t;
}
function Ce(e, t, s, n = null) {
  Ae(e, t, 7, [s, n]);
}
const To = mr();
let Mo = 0;
function Ao(e, t, s) {
  const n = e.type,
    r = (t ? t.appContext : e.appContext) || To,
    i = {
      uid: Mo++,
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
      scope: new Qr(!0),
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
      propsOptions: yr(n, r),
      emitsOptions: Pr(n, r),
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
    (i.emit = go.bind(null, i)),
    e.ce && e.ce(i),
    i
  );
}
let le = null,
  Yt,
  Ds;
{
  const e = es(),
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
  ((Yt = t("__VUE_INSTANCE_SETTERS__", (s) => (le = s))),
    (Ds = t("__VUE_SSR_SETTERS__", (s) => (Pt = s))));
}
const Dt = (e) => {
  const t = le;
  return (
    Yt(e),
    e.scope.on(),
    () => {
      (e.scope.off(), Yt(t));
    }
  );
},
  xn = () => {
    (le && le.scope.off(), Yt(null));
  };
function jr(e) {
  return e.vnode.shapeFlag & 4;
}
let Pt = !1;
function Oo(e, t = !1, s = !1) {
  t && Ds(t);
  const { props: n, children: r } = e.vnode,
    i = jr(e);
  (eo(e, n, i, t), ro(e, r, s));
  const o = i ? Po(e, t) : void 0;
  return (t && Ds(!1), o);
}
function Po(e, t) {
  const s = e.type;
  ((e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, Ui)));
  const { setup: n } = s;
  if (n) {
    Ve();
    const r = (e.setupContext = n.length > 1 ? Do(e) : null),
      i = Dt(e),
      o = Rt(n, e, 0, [e.props, r]),
      l = jn(o);
    if ((Be(), i(), (l || e.sp) && !wt(e) && ur(e), l)) {
      if ((o.then(xn, xn), t))
        return o
          .then((a) => {
            vn(e, a);
          })
          .catch((a) => {
            ns(a, e, 0);
          });
      e.asyncDep = o;
    } else vn(e, o);
  } else Fr(e);
}
function vn(e, t, s) {
  (D(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : U(t) && (e.setupState = rr(t)),
    Fr(e));
}
function Fr(e, t, s) {
  const n = e.type;
  e.render || (e.render = n.render || Me);
  {
    const r = Dt(e);
    Ve();
    try {
      Wi(e);
    } finally {
      (Be(), r());
    }
  }
}
const Ro = {
  get(e, t) {
    return (Z(e, "get", ""), e[t]);
  },
};
function Do(e) {
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
function ls(e) {
  return e.exposed
    ? e.exposeProxy ||
    (e.exposeProxy = new Proxy(rr(xi(e.exposed)), {
      get(t, s) {
        if (s in t) return t[s];
        if (s in St) return St[s](e);
      },
      has(t, s) {
        return s in t || s in St;
      },
    }))
    : e.proxy;
}
function Io(e) {
  return D(e) && "__vccOpts" in e;
}
const ko = (e, t) => Si(e, t, Pt),
  jo = "3.5.13";
/**
 * @vue/runtime-dom v3.5.13
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Is;
const _n = typeof window < "u" && window.trustedTypes;
if (_n)
  try {
    Is = _n.createPolicy("vue", { createHTML: (e) => e });
  } catch { }
const Lr = Is ? (e) => Is.createHTML(e) : (e) => e,
  Fo = "http://www.w3.org/2000/svg",
  Lo = "http://www.w3.org/1998/Math/MathML",
  Pe = typeof document < "u" ? document : null,
  yn = Pe && Pe.createElement("template"),
  No = {
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
          ? Pe.createElementNS(Fo, e)
          : t === "mathml"
            ? Pe.createElementNS(Lo, e)
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
        yn.innerHTML = Lr(
          n === "svg"
            ? `<svg>${e}</svg>`
            : n === "mathml"
              ? `<math>${e}</math>`
              : e,
        );
        const l = yn.content;
        if (n === "svg" || n === "mathml") {
          const a = l.firstChild;
          for (; a.firstChild;) l.appendChild(a.firstChild);
          l.removeChild(a);
        }
        t.insertBefore(l, s);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        s ? s.previousSibling : t.lastChild,
      ];
    },
  },
  Ho = Symbol("_vtc");
function zo(e, t, s) {
  const n = e[Ho];
  (n && (t = (t ? [t, ...n] : [...n]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : s
        ? e.setAttribute("class", t)
        : (e.className = t));
}
const wn = Symbol("_vod"),
  $o = Symbol("_vsh"),
  Vo = Symbol(""),
  Bo = /(^|;)\s*display\s*:/;
function Ko(e, t, s) {
  const n = e.style,
    r = Y(s);
  let i = !1;
  if (s && !r) {
    if (t)
      if (Y(t))
        for (const o of t.split(";")) {
          const l = o.slice(0, o.indexOf(":")).trim();
          s[l] == null && Kt(n, l, "");
        }
      else for (const o in t) s[o] == null && Kt(n, o, "");
    for (const o in s) (o === "display" && (i = !0), Kt(n, o, s[o]));
  } else if (r) {
    if (t !== s) {
      const o = n[Vo];
      (o && (s += ";" + o), (n.cssText = s), (i = Bo.test(s)));
    }
  } else t && e.removeAttribute("style");
  wn in e && ((e[wn] = i ? n.display : ""), e[$o] && (n.display = "none"));
}
const Sn = /\s*!important$/;
function Kt(e, t, s) {
  if (R(s)) s.forEach((n) => Kt(e, t, n));
  else if ((s == null && (s = ""), t.startsWith("--"))) e.setProperty(t, s);
  else {
    const n = Uo(e, t);
    Sn.test(s)
      ? e.setProperty($e(n), s.replace(Sn, ""), "important")
      : (e[n] = s);
  }
}
const Cn = ["Webkit", "Moz", "ms"],
  vs = {};
function Uo(e, t) {
  const s = vs[t];
  if (s) return s;
  let n = He(t);
  if (n !== "filter" && n in e) return (vs[t] = n);
  n = Nn(n);
  for (let r = 0; r < Cn.length; r++) {
    const i = Cn[r] + n;
    if (i in e) return (vs[t] = i);
  }
  return t;
}
const En = "http://www.w3.org/1999/xlink";
function Tn(e, t, s, n, r, i = Yr(t)) {
  n && t.startsWith("xlink:")
    ? s == null
      ? e.removeAttributeNS(En, t.slice(6, t.length))
      : e.setAttributeNS(En, t, s)
    : s == null || (i && !zn(s))
      ? e.removeAttribute(t)
      : e.setAttribute(t, i ? "" : ze(s) ? String(s) : s);
}
function Mn(e, t, s, n, r) {
  if (t === "innerHTML" || t === "textContent") {
    s != null && (e[t] = t === "innerHTML" ? Lr(s) : s);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value,
      a = s == null ? (e.type === "checkbox" ? "on" : "") : String(s);
    ((l !== a || !("_value" in e)) && (e.value = a),
      s == null && e.removeAttribute(t),
      (e._value = s));
    return;
  }
  let o = !1;
  if (s === "" || s == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (s = zn(s))
      : s == null && l === "string"
        ? ((s = ""), (o = !0))
        : l === "number" && ((s = 0), (o = !0));
  }
  try {
    e[t] = s;
  } catch { }
  o && e.removeAttribute(r || t);
}
function rt(e, t, s, n) {
  e.addEventListener(t, s, n);
}
function Wo(e, t, s, n) {
  e.removeEventListener(t, s, n);
}
const An = Symbol("_vei");
function Jo(e, t, s, n, r = null) {
  const i = e[An] || (e[An] = {}),
    o = i[t];
  if (n && o) o.value = n;
  else {
    const [l, a] = Go(t);
    if (n) {
      const d = (i[t] = Qo(n, r));
      rt(e, l, d, a);
    } else o && (Wo(e, l, o, a), (i[t] = void 0));
  }
}
const On = /(?:Once|Passive|Capture)$/;
function Go(e) {
  let t;
  if (On.test(e)) {
    t = {};
    let n;
    for (; (n = e.match(On));)
      ((e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0));
  }
  return [e[2] === ":" ? e.slice(3) : $e(e.slice(2)), t];
}
let _s = 0;
const qo = Promise.resolve(),
  Yo = () => _s || (qo.then(() => (_s = 0)), (_s = Date.now()));
function Qo(e, t) {
  const s = (n) => {
    if (!n._vts) n._vts = Date.now();
    else if (n._vts <= s.attached) return;
    Ae(Xo(n, s.value), t, 5, [n]);
  };
  return ((s.value = e), (s.attached = Yo()), s);
}
function Xo(e, t) {
  if (R(t)) {
    const s = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        (s.call(e), (e._stopped = !0));
      }),
      t.map((n) => (r) => !r._stopped && n && n(r))
    );
  } else return t;
}
const Pn = (e) =>
  e.charCodeAt(0) === 111 &&
  e.charCodeAt(1) === 110 &&
  e.charCodeAt(2) > 96 &&
  e.charCodeAt(2) < 123,
  Zo = (e, t, s, n, r, i) => {
    const o = r === "svg";
    t === "class"
      ? zo(e, n, o)
      : t === "style"
        ? Ko(e, s, n)
        : Qt(t)
          ? js(t) || Jo(e, t, s, n, i)
          : (
            t[0] === "."
              ? ((t = t.slice(1)), !0)
              : t[0] === "^"
                ? ((t = t.slice(1)), !1)
                : el(e, t, n, o)
          )
            ? (Mn(e, t, n),
              !e.tagName.includes("-") &&
              (t === "value" || t === "checked" || t === "selected") &&
              Tn(e, t, n, o, i, t !== "value"))
            : e._isVueCE && (/[A-Z]/.test(t) || !Y(n))
              ? Mn(e, He(t), n, i, t)
              : (t === "true-value"
                ? (e._trueValue = n)
                : t === "false-value" && (e._falseValue = n),
                Tn(e, t, n, o));
  };
function el(e, t, s, n) {
  if (n)
    return !!(
      t === "innerHTML" ||
      t === "textContent" ||
      (t in e && Pn(t) && D(s))
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
  return Pn(t) && Y(s) ? !1 : t in e;
}
const Rn = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return R(t) ? (s) => $t(t, s) : t;
};
function tl(e) {
  e.target.composing = !0;
}
function Dn(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const ys = Symbol("_assign"),
  sl = {
    created(e, { modifiers: { lazy: t, trim: s, number: n } }, r) {
      e[ys] = Rn(r);
      const i = n || (r.props && r.props.type === "number");
      (rt(e, t ? "change" : "input", (o) => {
        if (o.target.composing) return;
        let l = e.value;
        (s && (l = l.trim()), i && (l = ws(l)), e[ys](l));
      }),
        s &&
        rt(e, "change", () => {
          e.value = e.value.trim();
        }),
        t ||
        (rt(e, "compositionstart", tl),
          rt(e, "compositionend", Dn),
          rt(e, "change", Dn)));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, oldValue: s, modifiers: { lazy: n, trim: r, number: i } },
      o,
    ) {
      if (((e[ys] = Rn(o)), e.composing)) return;
      const l =
        (i || e.type === "number") && !/^0\d/.test(e.value)
          ? ws(e.value)
          : e.value,
        a = t ?? "";
      l !== a &&
        ((document.activeElement === e &&
          e.type !== "range" &&
          ((n && t === s) || (r && e.value.trim() === a))) ||
          (e.value = a));
    },
  },
  nl = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace",
  },
  rl = (e, t) => {
    const s = e._withKeys || (e._withKeys = {}),
      n = t.join(".");
    return (
      s[n] ||
      (s[n] = (r) => {
        if (!("key" in r)) return;
        const i = $e(r.key);
        if (t.some((o) => o === i || nl[o] === i)) return e(r);
      })
    );
  },
  il = se({ patchProp: Zo }, No);
let In;
function ol() {
  return In || (In = oo(il));
}
const ll = (...e) => {
  const t = ol().createApp(...e),
    { mount: s } = t;
  return (
    (t.mount = (n) => {
      const r = al(n);
      if (!r) return;
      const i = t._component;
      (!D(i) && !i.render && !i.template && (i.template = r.innerHTML),
        r.nodeType === 1 && (r.textContent = ""));
      const o = s(r, !1, cl(r));
      return (
        r instanceof Element &&
        (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        o
      );
    }),
    t
  );
};
function cl(e) {
  if (e instanceof SVGElement) return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function al(e) {
  return Y(e) ? document.querySelector(e) : e;
}
const fl = {
  class: "container mx-auto px-6 flex justify-between items-center",
},
  ul = { class: "flex items-center space-x-8" },
  dl = {
    class:
      "hidden md:flex space-x-10 text-[13px] font-semibold uppercase tracking-widest text-zinc-500",
  },
  hl = { class: "flex items-center space-x-4" },
  pl = { key: 0, class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20" },
  gl = { key: 1, class: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20" },
  ml = Gs({
    __name: "Navbar",
    props: { isDarkMode: { type: Boolean } },
    emits: ["toggleDarkMode"],
    setup(e, { emit: t }) {
      const s = t,
        n = Ye(!1),
        r = () => {
          n.value = window.scrollY > 20;
        };
      return (
        qs(() => {
          window.addEventListener("scroll", r);
        }),
        Ys(() => {
          window.removeEventListener("scroll", r);
        }),
        (i, o) => (
          G(),
          q(
            "nav",
            {
              class: T([
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                n.value
                  ? i.isDarkMode
                    ? "bg-[#121212]/90 backdrop-blur-md py-3 shadow-lg border-b border-zinc-800"
                    : "glass-light py-3 shadow-sm border-b"
                  : "bg-transparent py-6",
              ]),
            },
            [
              p("div", fl, [
                p(
                  "a",
                  {
                    href: "#",
                    class: T([
                      "text-xl font-bold mono tracking-tighter",
                      i.isDarkMode ? "text-white" : "text-slate-900",
                    ]),
                  },
                  o[1] ||
                  (o[1] = [
                    p("span", { class: "text-blue-600" }, "<", -1),
                    Qe("Dev.FullStack"),
                    p("span", { class: "text-blue-600" }, " />", -1),
                  ]),
                  2,
                ),
                p("div", ul, [
                  p("div", dl, [
                    p(
                      "a",
                      {
                        href: "#about",
                        class: T([
                          "transition-colors",
                          i.isDarkMode
                            ? "hover:text-white"
                            : "hover:text-blue-600",
                        ]),
                      },
                      "About",
                      2,
                    ),
                    p(
                      "a",
                      {
                        href: "#skills",
                        class: T([
                          "transition-colors",
                          i.isDarkMode
                            ? "hover:text-white"
                            : "hover:text-blue-600",
                        ]),
                      },
                      "Skills",
                      2,
                    ),
                    p(
                      "a",
                      {
                        href: "#projects",
                        class: T([
                          "transition-colors",
                          i.isDarkMode
                            ? "hover:text-white"
                            : "hover:text-blue-600",
                        ]),
                      },
                      "Projects",
                      2,
                    ),
                    p(
                      "a",
                      {
                        href: "#experience",
                        class: T([
                          "transition-colors",
                          i.isDarkMode
                            ? "hover:text-white"
                            : "hover:text-blue-600",
                        ]),
                      },
                      "Experience",
                      2,
                    ),
                  ]),
                  p("div", hl, [
                    p(
                      "button",
                      {
                        onClick: o[0] || (o[0] = (l) => s("toggleDarkMode")),
                        class: T([
                          "p-2 rounded-full transition-all",
                          i.isDarkMode
                            ? "bg-zinc-800 text-yellow-400 hover:bg-zinc-700"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200",
                        ]),
                        "aria-label": "Toggle Dark Mode",
                      },
                      [
                        i.isDarkMode
                          ? (G(),
                            q(
                              "svg",
                              pl,
                              o[2] ||
                              (o[2] = [
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
                          : (G(),
                            q(
                              "svg",
                              gl,
                              o[3] ||
                              (o[3] = [
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
                        class: T([
                          "px-5 py-2 rounded-full font-bold text-xs uppercase transition-all",
                          i.isDarkMode
                            ? "bg-white text-black hover:bg-zinc-200"
                            : "bg-slate-900 text-white hover:bg-blue-600",
                        ]),
                      },
                      "Contact",
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
  bl = { class: "fixed bottom-6 right-6 z-[60]" },
  xl = { key: 0, class: "flex justify-start" },
  vl = Gs({
    __name: "ChatWidget",
    props: { isDarkMode: { type: Boolean } },
    setup(e) {
      const t = Ye(!1),
        s = Ye([
          {
            role: "model",
            text: "Olá! Sou seu assistente IA. Como posso ajudar você hoje?",
          },
        ]),
        n = Ye(""),
        r = Ye(!1),
        i = Ye(null),
        o = () => {
          i.value && (i.value.scrollTop = i.value.scrollHeight);
        };
      Ct(
        s,
        async () => {
          (await or(), o());
        },
        { deep: !0 },
      );
      const l = async () => {
        if (!n.value.trim() || r.value) return;
        const a = n.value.trim();
        (s.value.push({ role: "user", text: a }),
          (n.value = ""),
          (r.value = !0));
        try {
          const d = await fetch("/api/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ message: a }),
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
      return (a, d) => (
        G(),
        q("div", bl, [
          t.value
            ? xs("", !0)
            : (G(),
              q(
                "button",
                {
                  key: 0,
                  onClick: d[0] || (d[0] = (u) => (t.value = !0)),
                  class: T([
                    "w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-105 active:scale-95",
                    a.isDarkMode
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
            ? (G(),
              q(
                "div",
                {
                  key: 1,
                  class: T([
                    "w-80 h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border transition-colors",
                    a.isDarkMode
                      ? "bg-[#1a1a1a] border-zinc-800"
                      : "bg-white border-slate-100",
                  ]),
                },
                [
                  p(
                    "div",
                    {
                      class: T([
                        a.isDarkMode ? "bg-zinc-900" : "bg-slate-900",
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
                            "AI",
                          ),
                          p(
                            "span",
                            { class: "font-bold text-white text-sm" },
                            "Assistant",
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
                      class: T([
                        "flex-1 p-5 overflow-y-auto space-y-4 text-[13px]",
                        a.isDarkMode ? "bg-zinc-950/50" : "bg-slate-50/50",
                      ]),
                    },
                    [
                      (G(!0),
                        q(
                          oe,
                          null,
                          nt(
                            s.value,
                            (u, g) => (
                              G(),
                              q(
                                "div",
                                {
                                  key: g,
                                  class: T([
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
                                      class: T([
                                        "max-w-[85%] px-4 py-3 rounded-2xl",
                                        u.role === "user"
                                          ? "bg-blue-600 text-white rounded-br-none shadow-md"
                                          : a.isDarkMode
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
                        ? (G(),
                          q("div", xl, [
                            p(
                              "div",
                              {
                                class: T([
                                  "px-4 py-3 rounded-2xl border flex space-x-1",
                                  a.isDarkMode
                                    ? "bg-zinc-800 border-zinc-700"
                                    : "bg-white border-slate-100 shadow-sm",
                                ]),
                              },
                              [
                                p(
                                  "div",
                                  {
                                    class: T([
                                      "w-1.5 h-1.5 rounded-full animate-bounce",
                                      a.isDarkMode
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
                                    class: T([
                                      "w-1.5 h-1.5 rounded-full animate-bounce delay-75",
                                      a.isDarkMode
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
                                    class: T([
                                      "w-1.5 h-1.5 rounded-full animate-bounce delay-150",
                                      a.isDarkMode
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
                        : xs("", !0),
                    ],
                    2,
                  ),
                  p(
                    "div",
                    {
                      class: T([
                        "p-4 border-t flex space-x-2",
                        a.isDarkMode
                          ? "bg-[#1a1a1a] border-zinc-800"
                          : "bg-white border-slate-100",
                      ]),
                    },
                    [
                      Pi(
                        p(
                          "input",
                          {
                            "onUpdate:modelValue":
                              d[2] || (d[2] = (u) => (n.value = u)),
                            type: "text",
                            onKeydown: rl(l, ["enter"]),
                            placeholder: "Digite sua mensagem...",
                            class: T([
                              "flex-1 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-500/20 text-sm transition-colors",
                              a.isDarkMode
                                ? "bg-zinc-800 text-zinc-200 placeholder-zinc-500 border-none"
                                : "bg-slate-100 text-slate-800 border-none",
                            ]),
                          },
                          null,
                          34,
                        ),
                        [[sl, n.value]],
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
            : xs("", !0),
        ])
      );
    },
  }),
  _l = [
    {
      id: "1",
      title: "Enterprise ERP System",
      description:
        "A massive scale ERP system built for manufacturing logistics using Spring Boot and React.",
      tech: ["Java", "Spring Boot", "React", "PostgreSQL", "Docker"],
      image: "https://picsum.photos/seed/erp/800/600",
      category: "fullstack",
    },
    {
      id: "2",
      title: "E-commerce Platform",
      description:
        "Modern storefront with real-time inventory and high-performance Vue 3 frontend.",
      tech: ["Vue", "Node.js", "Express", "MongoDB", "Tailwind"],
      image: "https://picsum.photos/seed/shop/800/600",
      category: "fullstack",
    },
    {
      id: "3",
      title: "Analytics Dashboard",
      description:
        "Real-time data visualization tool for monitoring server performance and API metrics.",
      tech: ["Node.js", "React", "D3.js", "Redis"],
      image: "https://picsum.photos/seed/analytics/800/600",
      category: "frontend",
    },
    {
      id: "4",
      title: "Bank API Gateway",
      description:
        "High-security microservice architecture for financial transaction processing.",
      tech: ["Java", "Kafka", "Spring Cloud", "Kubernetes"],
      image: "https://picsum.photos/seed/bank/800/600",
      category: "backend",
    },
  ],
  yl = [
    { name: "Java", level: 95, icon: "☕", category: "language" },
    { name: "Node.js", level: 92, icon: "🟢", category: "language" },
    { name: "React", level: 90, icon: "⚛️", category: "framework" },
    { name: "Vue", level: 85, icon: "🖖", category: "framework" },
    { name: "Spring Boot", level: 92, icon: "🍃", category: "framework" },
    { name: "TypeScript", level: 88, icon: "TS", category: "language" },
    { name: "Docker", level: 80, icon: "🐳", category: "tool" },
    { name: "PostgreSQL", level: 85, icon: "🐘", category: "tool" },
  ],
  wl = [
    {
      company: "Tech Solutions Global",
      role: "Senior Full Stack Developer",
      period: "2021 - Present",
      description: [
        "Architected microservices with Spring Boot and Node.js for high-availability systems.",
        "Led the frontend migration from legacy jQuery to Vue 3 Composition API.",
        "Reduced server response time by 40% through Redis caching strategies.",
      ],
    },
    {
      company: "Innovation Labs",
      role: "Full Stack Engineer",
      period: "2018 - 2021",
      description: [
        "Developed multiple React-based SaaS products handling thousands of users.",
        "Designed scalable Java backends for complex business logic processing.",
        "Implemented CI/CD pipelines using GitHub Actions and Docker.",
      ],
    },
  ],
  Sl =
    "I am a passionate Full Stack Developer with 7+ years of experience building scalable web applications. My expertise spans across the robust ecosystems of Java and Spring Boot, as well as the modern agile environments of Node.js, React, and Vue. I thrive on solving complex architectural problems and delivering clean, maintainable code.",
  Cl = {
    id: "hero",
    class: "min-h-screen flex items-center justify-center pt-20 section-dot-bg",
  },
  El = { class: "container mx-auto px-6 text-center" },
  Tl = {
    class:
      "flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6",
  },
  Ml = { class: "container mx-auto px-6" },
  Al = { class: "max-w-5xl mx-auto" },
  Ol = { class: "flex flex-col md:flex-row gap-16 items-start" },
  Pl = { class: "md:w-1/3" },
  Rl = { class: "md:w-2/3" },
  Dl = { class: "container mx-auto px-6" },
  Il = { class: "max-w-5xl mx-auto" },
  kl = { class: "grid grid-cols-2 md:grid-cols-4 gap-8" },
  jl = { class: "text-4xl mb-6 flex items-center justify-between" },
  Fl = {
    class:
      "text-[10px] text-zinc-500 font-bold group-hover:text-blue-500 transition-colors",
  },
  Ll = { id: "projects", class: "py-32" },
  Nl = { class: "container mx-auto px-6" },
  Hl = { class: "max-w-5xl mx-auto" },
  zl = { class: "grid md:grid-cols-2 gap-12" },
  $l = ["src", "alt"],
  Vl = {
    class:
      "absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100",
  },
  Bl = { class: "flex flex-wrap gap-2 mb-4" },
  Kl = { class: "container mx-auto px-6" },
  Ul = { class: "max-w-4xl mx-auto" },
  Wl = { class: "space-y-16" },
  Jl = { class: "text-zinc-500 font-bold mono text-sm" },
  Gl = { class: "md:col-span-2" },
  ql = { class: "text-blue-600 font-bold mb-6 text-lg" },
  Yl = { class: "space-y-4" },
  Ql = { id: "contact", class: "py-40" },
  Xl = { class: "container mx-auto px-6 text-center" },
  Zl = { class: "max-w-xl mx-auto" },
  ec = { class: "container mx-auto px-6 text-center" },
  tc = { class: "flex justify-center space-x-12 mb-12" },
  sc = Gs({
    __name: "App",
    setup(e) {
      const t = Ye(!1);
      qs(() => {
        if (typeof window < "u") {
          const r = localStorage.getItem("theme");
          ((t.value =
            r === "dark" ||
            (!r && window.matchMedia("(prefers-color-scheme: dark)").matches)),
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
      return (
        Ct(t, s),
        (r, i) => (
          G(),
          q(
            "div",
            {
              class: T([
                "min-h-screen transition-colors duration-500",
                t.value
                  ? "bg-[#121212] text-zinc-300"
                  : "bg-white text-slate-900",
              ]),
            },
            [
              xe(
                ml,
                { "is-dark-mode": t.value, onToggleDarkMode: n },
                null,
                8,
                ["is-dark-mode"],
              ),
              xe(vl, { "is-dark-mode": t.value }, null, 8, ["is-dark-mode"]),
              p("main", null, [
                p("section", Cl, [
                  p("div", El, [
                    p(
                      "div",
                      {
                        class: T([
                          "inline-block mb-6 px-4 py-1 rounded-full border text-[11px] font-bold tracking-widest uppercase",
                          t.value
                            ? "border-zinc-800 bg-zinc-900 text-zinc-400"
                            : "border-blue-100 bg-blue-50 text-blue-600",
                        ]),
                      },
                      " Senior Full Stack Engineer ",
                      2,
                    ),
                    p(
                      "h1",
                      {
                        class: T([
                          "text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none",
                          t.value ? "text-white" : "text-slate-900",
                        ]),
                      },
                      i[0] ||
                      (i[0] = [
                        Qe(" Crafting "),
                        p("span", { class: "text-blue-600" }, "Digital", -1),
                        p("br", null, null, -1),
                        Qe("Experiences. "),
                      ]),
                      2,
                    ),
                    p(
                      "p",
                      {
                        class: T([
                          "max-w-2xl mx-auto text-lg md:text-xl mb-12 font-medium leading-relaxed",
                          t.value ? "text-zinc-400" : "text-slate-500",
                        ]),
                      },
                      [
                        i[1] ||
                        (i[1] = Qe(
                          " Especialista em ecossistemas de alta performance com ",
                        )),
                        p(
                          "span",
                          {
                            class: T([
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
                    p("div", Tl, [
                      p(
                        "a",
                        {
                          href: "#projects",
                          class: T([
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
                          class: T([
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
                    class: T([
                      "py-32 border-t",
                      t.value ? "border-zinc-800" : "border-slate-50",
                    ]),
                  },
                  [
                    p("div", Ml, [
                      p("div", Al, [
                        p("div", Ol, [
                          p("div", Pl, [
                            i[3] ||
                            (i[3] = p(
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
                                class: T([
                                  "relative group overflow-hidden rounded-3xl aspect-[4/5]",
                                  t.value ? "bg-zinc-800" : "bg-slate-100",
                                ]),
                              },
                              i[2] ||
                              (i[2] = [
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
                          p("div", Rl, [
                            p(
                              "h3",
                              {
                                class: T([
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
                                class: T([
                                  "leading-relaxed space-y-6 text-lg",
                                  t.value ? "text-zinc-400" : "text-slate-600",
                                ]),
                              },
                              [
                                p("p", null, ue(bt(Sl)), 1),
                                p(
                                  "div",
                                  {
                                    class: T([
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
                                          class: T([
                                            t.value
                                              ? "text-white"
                                              : "text-slate-900",
                                            "font-bold mb-2",
                                          ]),
                                        },
                                        "Frontend",
                                        2,
                                      ),
                                      i[4] ||
                                      (i[4] = p(
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
                                          class: T([
                                            t.value
                                              ? "text-white"
                                              : "text-slate-900",
                                            "font-bold mb-2",
                                          ]),
                                        },
                                        "Backend",
                                        2,
                                      ),
                                      i[5] ||
                                      (i[5] = p(
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
                    class: T([
                      "py-32",
                      t.value ? "bg-zinc-900/30" : "bg-slate-50/50",
                    ]),
                  },
                  [
                    p("div", Dl, [
                      p("div", Il, [
                        i[6] ||
                        (i[6] = p(
                          "h2",
                          {
                            class:
                              "text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-12 text-center",
                          },
                          "02. Arsenal Tecnológico",
                          -1,
                        )),
                        p("div", kl, [
                          (G(!0),
                            q(
                              oe,
                              null,
                              nt(
                                bt(yl),
                                (o) => (
                                  G(),
                                  q(
                                    "div",
                                    {
                                      key: o.name,
                                      class: T([
                                        "p-8 rounded-3xl border transition-all group",
                                        t.value
                                          ? "bg-[#1a1a1a] border-zinc-800 shadow-none hover:border-zinc-600"
                                          : "bg-white border-slate-100 shadow-sm hover:shadow-xl",
                                      ]),
                                    },
                                    [
                                      p("div", jl, [
                                        p("span", null, ue(o.icon), 1),
                                        p("span", Fl, "LVL " + ue(o.level), 1),
                                      ]),
                                      p(
                                        "div",
                                        {
                                          class: T([
                                            "font-black text-lg",
                                            t.value
                                              ? "text-white"
                                              : "text-slate-900",
                                          ]),
                                        },
                                        ue(o.name),
                                        3,
                                      ),
                                      p(
                                        "div",
                                        {
                                          class: T([
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
                                              class: T([
                                                "h-full transition-all duration-700",
                                                t.value
                                                  ? "bg-zinc-100"
                                                  : "bg-slate-900 group-hover:bg-blue-600",
                                              ]),
                                              style: ts({ width: `${o.level}%` }),
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
                p("section", Ll, [
                  p("div", Nl, [
                    p("div", Hl, [
                      i[7] ||
                      (i[7] = p(
                        "h2",
                        {
                          class:
                            "text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-12",
                        },
                        "03. Projetos em Destaque",
                        -1,
                      )),
                      p("div", zl, [
                        (G(!0),
                          q(
                            oe,
                            null,
                            nt(
                              bt(_l),
                              (o) => (
                                G(),
                                q("div", { key: o.id, class: "group" }, [
                                  p(
                                    "div",
                                    {
                                      class: T([
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
                                          src: o.image,
                                          alt: o.title,
                                          class:
                                            "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
                                        },
                                        null,
                                        8,
                                        $l,
                                      ),
                                      p("div", Vl, [
                                        p(
                                          "span",
                                          {
                                            class: T([
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
                                  p("div", Bl, [
                                    (G(!0),
                                      q(
                                        oe,
                                        null,
                                        nt(
                                          o.tech,
                                          (l) => (
                                            G(),
                                            q(
                                              "span",
                                              {
                                                key: l,
                                                class:
                                                  "text-[10px] font-bold text-blue-600 uppercase tracking-widest",
                                              },
                                              ue(l),
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
                                      class: T([
                                        "text-2xl font-bold mb-3",
                                        t.value ? "text-white" : "text-slate-900",
                                      ]),
                                    },
                                    ue(o.title),
                                    3,
                                  ),
                                  p(
                                    "p",
                                    {
                                      class: T([
                                        "leading-relaxed text-sm mb-6",
                                        t.value
                                          ? "text-zinc-400"
                                          : "text-slate-500",
                                      ]),
                                    },
                                    ue(o.description),
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
                    class: T([
                      "py-32 border-t",
                      t.value
                        ? "bg-zinc-900/10 border-zinc-800"
                        : "bg-slate-50/30 border-slate-50",
                    ]),
                  },
                  [
                    p("div", Kl, [
                      p("div", Ul, [
                        i[9] ||
                        (i[9] = p(
                          "h2",
                          {
                            class:
                              "text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-12",
                          },
                          "04. Trajetória",
                          -1,
                        )),
                        p("div", Wl, [
                          (G(!0),
                            q(
                              oe,
                              null,
                              nt(
                                bt(wl),
                                (o, l) => (
                                  G(),
                                  q(
                                    "div",
                                    {
                                      key: l,
                                      class: "grid md:grid-cols-3 gap-8",
                                    },
                                    [
                                      p("div", Jl, ue(o.period), 1),
                                      p("div", Gl, [
                                        p(
                                          "h4",
                                          {
                                            class: T([
                                              "text-2xl font-bold mb-1",
                                              t.value
                                                ? "text-white"
                                                : "text-slate-900",
                                            ]),
                                          },
                                          ue(o.role),
                                          3,
                                        ),
                                        p("p", ql, ue(o.company), 1),
                                        p("ul", Yl, [
                                          (G(!0),
                                            q(
                                              oe,
                                              null,
                                              nt(
                                                o.description,
                                                (a, d) => (
                                                  G(),
                                                  q(
                                                    "li",
                                                    {
                                                      key: d,
                                                      class: T([
                                                        "text-[15px] leading-relaxed flex items-start",
                                                        t.value
                                                          ? "text-zinc-400"
                                                          : "text-slate-600",
                                                      ]),
                                                    },
                                                    [
                                                      i[8] ||
                                                      (i[8] = p(
                                                        "span",
                                                        {
                                                          class:
                                                            "text-blue-500 mr-3 mt-1.5",
                                                        },
                                                        "•",
                                                        -1,
                                                      )),
                                                      Qe(" " + ue(a), 1),
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
                p("section", Ql, [
                  p("div", Xl, [
                    p("div", Zl, [
                      p(
                        "h2",
                        {
                          class: T([
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
                          class: T([
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
                          class: T([
                            "inline-flex items-center px-12 py-5 text-white font-black rounded-full transition-all shadow-2xl active:scale-95",
                            t.value
                              ? "bg-zinc-100 text-black hover:bg-white"
                              : "bg-blue-600 hover:bg-slate-900 shadow-blue-500/20",
                          ]),
                        },
                        i[10] ||
                        (i[10] = [
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
              ]),
              p(
                "footer",
                {
                  class: T([
                    "py-20 border-t",
                    t.value
                      ? "bg-[#121212] border-zinc-800"
                      : "bg-white border-slate-50",
                  ]),
                },
                [
                  p("div", ec, [
                    p("div", tc, [
                      p(
                        "a",
                        {
                          href: "#",
                          class: T([
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
                          class: T([
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
                          class: T([
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
                    i[11] ||
                    (i[11] = p(
                      "p",
                      {
                        class:
                          "text-zinc-500 text-xs font-medium uppercase tracking-[0.2em]",
                      },
                      "© 2024 Design & Code by Diego",
                      -1,
                    )),
                  ]),
                ],
                2,
              ),
            ],
            2,
          )
        )
      );
    },
  });
ll(sc).mount("#root");

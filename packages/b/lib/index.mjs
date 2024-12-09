var g = Object.defineProperty;
var p = (e, t, n) => t in e ? g(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var c = (e, t, n) => p(e, typeof t != "symbol" ? t + "" : t, n);
var u = Object.defineProperty, f = Object.getOwnPropertyDescriptor, h = (e, t, n) => t in e ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, w = (e, t, n, i) => {
  for (var s = i > 1 ? void 0 : i ? f(t, n) : t, o = e.length - 1, l; o >= 0; o--)
    (l = e[o]) && (s = (i ? l(t, n, s) : l(s)) || s);
  return i && s && u(t, n, s), s;
}, v = (e, t, n) => h(e, t + "", n);
let r = class {
  constructor() {
    c(this, "name", "wbb12");
  }
  static getInstance() {
    return this._instance || (this._instance = new r()), this._instance;
  }
};
v(r, "_instance");
r = w([
  b
], r);
function b(e) {
  let t;
  const n = new Proxy(e, {
    construct(i, s) {
      return t || (t = new i(...s), console.log(e, "constructor")), t;
    }
  });
  return n.prototype.__destroy__ = () => {
    t = null;
  }, console.log(e), n;
}
const a = class a {
  constructor() {
    c(this, "a", r.getInstance());
  }
  static getInstance() {
    return this._ins || (this._ins = new a());
  }
  init() {
    console.log(this.a === r.getInstance(), "--this.a ===A.getInstance()");
  }
};
c(a, "_ins");
let _ = a;
console.log(r, "a");
export {
  _ as B
};

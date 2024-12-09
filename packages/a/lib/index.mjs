var a = Object.defineProperty;
var u = (n, e, t) => e in n ? a(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var o = (n, e, t) => u(n, typeof e != "symbol" ? e + "" : e, t);
var c = Object.defineProperty, p = Object.getOwnPropertyDescriptor, f = (n, e, t) => e in n ? c(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t, v = (n, e, t, s) => {
  for (var r = s > 1 ? void 0 : s ? p(e, t) : e, l = n.length - 1, _; l >= 0; l--)
    (_ = n[l]) && (r = (s ? _(e, t, r) : _(r)) || r);
  return s && r && c(e, t, r), r;
}, w = (n, e, t) => f(n, e + "", t);
let i = class {
  constructor() {
    o(this, "name", "wbb12");
  }
  static getInstance() {
    return this._instance || (this._instance = new i()), this._instance;
  }
};
w(i, "_instance");
i = v([
  b
], i);
function b(n) {
  let e;
  const t = new Proxy(n, {
    construct(s, r) {
      return e || (e = new s(...r), console.log(n, "constructor")), e;
    }
  });
  return t.prototype.__destroy__ = () => {
    e = null;
  }, console.log(n), t;
}
export {
  i as A,
  b as Singleton
};

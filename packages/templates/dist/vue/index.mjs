import { defineComponent as v, computed as s, openBlock as c, createElementBlock as o, normalizeClass as p, createElementVNode as a, toDisplayString as n, createVNode as h, unref as g, normalizeProps as k, guardReactiveProps as q, createCommentVNode as _ } from "vue";
import { VietQR as b } from "@viet-qr/vue";
import { getBankByBin as N, getBankByShortName as f } from "@viet-qr/core";
const y = { class: "vqr-compact-card__header" }, I = ["src", "alt"], S = {
  key: 1,
  class: "vqr-compact-card__bank-name"
}, $ = { class: "vqr-compact-card__qr-wrapper" }, z = { class: "vqr-compact-card__info" }, A = {
  key: 0,
  class: "vqr-compact-card__info-row"
}, B = { class: "vqr-compact-card__value" }, C = { class: "vqr-compact-card__info-row" }, w = { class: "vqr-compact-card__value" }, P = {
  key: 1,
  class: "vqr-compact-card__info-row",
  style: { "margin-top": "16px" }
}, V = { class: "vqr-compact-card__amount" }, K = /* @__PURE__ */ v({
  __name: "CompactCard",
  props: {
    bankId: {},
    accountNo: {},
    accountName: {},
    amount: {},
    content: {},
    size: { default: 240 },
    renderAs: { default: "svg" },
    bankLogo: {},
    theme: { default: "light" },
    imageSettings: {}
  },
  setup(e) {
    const t = e, u = s(() => N(t.bankId) || f(t.bankId)), i = s(() => {
      var l;
      return ((l = u.value) == null ? void 0 : l.shortName) || t.bankId;
    }), m = s(() => t.amount ? new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(t.amount) : null), d = s(() => ({
      bankId: t.bankId,
      accountNo: t.accountNo,
      accountName: t.accountName,
      amount: t.amount,
      content: t.content,
      size: t.size,
      renderAs: t.renderAs,
      imageSettings: t.imageSettings
    }));
    return (l, r) => (c(), o("div", {
      class: p(`vqr-compact-card vqr-theme-${e.theme}`)
    }, [
      a("div", y, [
        e.bankLogo ? (c(), o("img", {
          key: 0,
          src: e.bankLogo,
          alt: i.value,
          class: "vqr-compact-card__logo"
        }, null, 8, I)) : (c(), o("h3", S, n(i.value), 1))
      ]),
      a("div", $, [
        h(g(b), k(q(d.value)), null, 16)
      ]),
      a("div", z, [
        e.accountName ? (c(), o("div", A, [
          r[0] || (r[0] = a("span", { class: "vqr-compact-card__label" }, "Tên tài khoản", -1)),
          a("p", B, n(e.accountName), 1)
        ])) : _("", !0),
        a("div", C, [
          r[1] || (r[1] = a("span", { class: "vqr-compact-card__label" }, "Số tài khoản", -1)),
          a("p", w, n(e.accountNo), 1)
        ]),
        m.value ? (c(), o("div", P, [
          r[2] || (r[2] = a("span", { class: "vqr-compact-card__label" }, "Số tiền cần thanh toán", -1)),
          a("p", V, n(m.value), 1)
        ])) : _("", !0)
      ])
    ], 2));
  }
}), x = { class: "vqr-pay-standee__banner" }, L = { class: "vqr-pay-standee__title" }, D = { class: "vqr-pay-standee__subtitle" }, E = { class: "vqr-pay-standee__body" }, Q = { class: "vqr-pay-standee__qr-wrapper" }, R = { class: "vqr-pay-standee__info" }, F = {
  key: 0,
  class: "vqr-pay-standee__name"
}, H = { class: "vqr-pay-standee__account" }, T = { class: "vqr-pay-standee__bank" }, M = /* @__PURE__ */ v({
  __name: "PayStandee",
  props: {
    bankId: {},
    accountNo: {},
    accountName: {},
    amount: {},
    content: {},
    size: { default: 200 },
    renderAs: { default: "svg" },
    title: { default: "Quét mã để thanh toán" },
    subtitle: { default: "Hỗ trợ ứng dụng ngân hàng & ví điện tử" },
    theme: { default: "light" },
    imageSettings: {}
  },
  setup(e) {
    const t = e, u = s(() => N(t.bankId) || f(t.bankId)), i = s(() => {
      var d;
      return ((d = u.value) == null ? void 0 : d.shortName) || t.bankId;
    }), m = s(() => ({
      bankId: t.bankId,
      accountNo: t.accountNo,
      accountName: t.accountName,
      amount: t.amount,
      content: t.content,
      size: t.size,
      renderAs: t.renderAs,
      imageSettings: t.imageSettings
    }));
    return (d, l) => (c(), o("div", {
      class: p(`vqr-pay-standee vqr-theme-${e.theme}`)
    }, [
      a("div", x, [
        a("h2", L, n(e.title), 1),
        a("p", D, n(e.subtitle), 1)
      ]),
      a("div", E, [
        a("div", Q, [
          h(g(b), k(q(m.value)), null, 16)
        ]),
        a("div", R, [
          e.accountName ? (c(), o("h3", F, n(e.accountName), 1)) : _("", !0),
          a("p", H, n(e.accountNo), 1),
          a("p", T, "Ngân hàng " + n(i.value), 1)
        ])
      ])
    ], 2));
  }
});
export {
  K as CompactCard,
  M as PayStandee
};

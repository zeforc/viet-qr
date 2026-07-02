import { computed as e, createCommentVNode as t, createElementBlock as n, createElementVNode as r, createVNode as i, defineComponent as a, guardReactiveProps as o, normalizeClass as s, normalizeProps as c, openBlock as l, toDisplayString as u, unref as d } from "vue";
import { VietQR as f } from "@viet-qr/vue";
import { getBankByBin as p, getBankByShortName as m } from "@viet-qr/core";
//#region src/vue/CompactCard.vue?vue&type=script&setup=true&lang.ts
var h = { class: "vqr-compact-card__header" }, g = ["src", "alt"], _ = {
	key: 1,
	class: "vqr-compact-card__bank-name"
}, v = { class: "vqr-compact-card__qr-wrapper" }, y = { class: "vqr-compact-card__info" }, b = {
	key: 0,
	class: "vqr-compact-card__info-row"
}, x = { class: "vqr-compact-card__value" }, S = { class: "vqr-compact-card__info-row" }, C = { class: "vqr-compact-card__value" }, w = {
	key: 1,
	class: "vqr-compact-card__info-row",
	style: { "margin-top": "16px" }
}, T = { class: "vqr-compact-card__amount" }, E = /* @__PURE__ */ a({
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
	setup(a) {
		let E = a, D = e(() => p(E.bankId) || m(E.bankId)), O = e(() => D.value?.shortName || E.bankId), k = e(() => E.amount ? new Intl.NumberFormat("vi-VN", {
			style: "currency",
			currency: "VND"
		}).format(E.amount) : null), A = e(() => ({
			bankId: E.bankId,
			accountNo: E.accountNo,
			accountName: E.accountName,
			amount: E.amount,
			content: E.content,
			size: E.size,
			renderAs: E.renderAs,
			imageSettings: E.imageSettings
		}));
		return (e, p) => (l(), n("div", { class: s(`vqr-compact-card vqr-theme-${a.theme}`) }, [
			r("div", h, [a.bankLogo ? (l(), n("img", {
				key: 0,
				src: a.bankLogo,
				alt: O.value,
				class: "vqr-compact-card__logo"
			}, null, 8, g)) : (l(), n("h3", _, u(O.value), 1))]),
			r("div", v, [i(d(f), c(o(A.value)), null, 16)]),
			r("div", y, [
				a.accountName ? (l(), n("div", b, [p[0] ||= r("span", { class: "vqr-compact-card__label" }, "Tên tài khoản", -1), r("p", x, u(a.accountName), 1)])) : t("", !0),
				r("div", S, [p[1] ||= r("span", { class: "vqr-compact-card__label" }, "Số tài khoản", -1), r("p", C, u(a.accountNo), 1)]),
				k.value ? (l(), n("div", w, [p[2] ||= r("span", { class: "vqr-compact-card__label" }, "Thanh toán", -1), r("p", T, u(k.value), 1)])) : t("", !0)
			])
		], 2));
	}
}), D = { class: "vqr-pay-standee__banner" }, O = { class: "vqr-pay-standee__title" }, k = { class: "vqr-pay-standee__subtitle" }, A = { class: "vqr-pay-standee__body" }, j = { class: "vqr-pay-standee__qr-wrapper" }, M = { class: "vqr-pay-standee__info" }, N = {
	key: 0,
	class: "vqr-pay-standee__name"
}, P = { class: "vqr-pay-standee__account" }, F = { class: "vqr-pay-standee__bank" }, I = /* @__PURE__ */ a({
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
	setup(a) {
		let h = a, g = e(() => p(h.bankId) || m(h.bankId)), _ = e(() => g.value?.shortName || h.bankId), v = e(() => ({
			bankId: h.bankId,
			accountNo: h.accountNo,
			accountName: h.accountName,
			amount: h.amount,
			content: h.content,
			size: h.size,
			renderAs: h.renderAs,
			imageSettings: h.imageSettings
		}));
		return (e, p) => (l(), n("div", { class: s(`vqr-pay-standee vqr-theme-${a.theme}`) }, [r("div", D, [r("h2", O, u(a.title), 1), r("p", k, u(a.subtitle), 1)]), r("div", A, [r("div", j, [i(d(f), c(o(v.value)), null, 16)]), r("div", M, [
			a.accountName ? (l(), n("h3", N, u(a.accountName), 1)) : t("", !0),
			r("p", P, u(a.accountNo), 1),
			r("p", F, "Ngân hàng " + u(_.value), 1)
		])])], 2));
	}
});
//#endregion
export { E as CompactCard, I as PayStandee };

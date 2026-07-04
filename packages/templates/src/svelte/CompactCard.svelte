<script lang="ts">
  import { VietQR } from "@viet-qr/svelte";
  import { getBankByBin, getBankByCode } from "@viet-qr/core";

  export let bankId: string;
  export let accountNo: string;
  export let accountName: string | undefined = undefined;
  export let amount: number | undefined = undefined;
  export let content: string | undefined = undefined;
  export let isCard: boolean = false;
  export let size: number = 240;
  export let renderAs: "svg" | "canvas" = "svg";

  export let bankLogo: string | undefined = undefined;
  export let theme: "light" | "dark" = "light";
  export let imageSettings:
    | { src: string; width: number; height: number; excavate?: boolean }
    | undefined = undefined;

  $: bankInfo = getBankByBin(bankId) || getBankByCode(bankId);
  $: bankName = bankInfo?.name || bankId;

  $: formattedAmount = amount
    ? new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(amount)
    : null;
</script>

<div class={`vqr-compact-card vqr-theme-${theme}`}>
  <div class="vqr-compact-card__header">
    {#if bankLogo}
      <img src={bankLogo} alt={bankName} class="vqr-compact-card__logo" />
    {:else}
      <h3 class="vqr-compact-card__bank-name">{bankName}</h3>
    {/if}
  </div>

  <div class="vqr-compact-card__qr-wrapper">
    <VietQR
      {bankId}
      {accountNo}
      {accountName}
      {amount}
      {content}
      {isCard}
      {size}
      {renderAs}
      {imageSettings}
    />
  </div>

  <div class="vqr-compact-card__info">
    {#if accountName}
      <div class="vqr-compact-card__info-row">
        <span class="vqr-compact-card__label">Tên tài khoản</span>
        <p class="vqr-compact-card__value">{accountName}</p>
      </div>
    {/if}

    <div class="vqr-compact-card__info-row">
      <span class="vqr-compact-card__label">Số tài khoản</span>
      <p class="vqr-compact-card__value">{accountNo}</p>
    </div>

    {#if formattedAmount}
      <div class="vqr-compact-card__info-row" style="margin-top: 16px;">
        <span class="vqr-compact-card__label">Thanh toán</span>
        <p class="vqr-compact-card__amount">{formattedAmount}</p>
      </div>
    {/if}
  </div>
</div>

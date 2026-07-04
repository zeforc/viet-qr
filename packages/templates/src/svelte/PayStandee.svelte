<script lang="ts">
  import { VietQR } from '@viet-qr/svelte';
  import { getBankByBin, getBankByCode } from '@viet-qr/core';

  export let bankId: string;
  export let accountNo: string;
  export let accountName: string | undefined = undefined;
  export let amount: number | undefined = undefined;
  export let content: string | undefined = undefined;
  export let isCard: boolean = false;
  export let size: number = 200;
  export let renderAs: 'svg' | 'canvas' = 'svg';

  export let title: string = 'Quét mã để thanh toán';
  export let subtitle: string = 'Hỗ trợ ứng dụng ngân hàng & ví điện tử';
  export let theme: 'light' | 'dark' = 'light';
  export let imageSettings: { src: string; width: number; height: number; excavate?: boolean } | undefined = undefined;

  $: bankInfo = getBankByBin(bankId) || getBankByCode(bankId);
  $: bankName = bankInfo?.name || bankId;
</script>

<div class={`vqr-pay-standee vqr-theme-${theme}`}>
  <div class="vqr-pay-standee__banner">
    <h2 class="vqr-pay-standee__title">{title}</h2>
    <p class="vqr-pay-standee__subtitle">{subtitle}</p>
  </div>

  <div class="vqr-pay-standee__body">
    <div class="vqr-pay-standee__qr-wrapper">
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

    <div class="vqr-pay-standee__info">
      {#if accountName}
        <h3 class="vqr-pay-standee__name">{accountName}</h3>
      {/if}
      <p class="vqr-pay-standee__account">{accountNo}</p>
      <p class="vqr-pay-standee__bank">Ngân hàng {bankName}</p>
    </div>
  </div>
</div>

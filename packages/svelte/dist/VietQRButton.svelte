<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from "svelte";
  import VietQR from "./VietQR.svelte";

  export let bankId: string;
  export let accountNo: string;
  export let accountName: string | undefined = undefined;
  export let amount: number | undefined = undefined;
  export let content: string | undefined = undefined;
  export let isCard: boolean = false;

  export let label: string = "Thanh toán VietQR";
  export let size: number = 260;
  export let variant: "default" | "outline" | "ghost" = "default";
  export let theme: "light" | "dark" = "light";

  const dispatch = createEventDispatcher<{ open: void; close: void }>();

  let isOpen = false;

  $: formattedAmount = amount
    ? new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(amount)
    : null;

  function openModal() {
    isOpen = true;
    dispatch("open");
  }

  function closeModal() {
    isOpen = false;
    dispatch("close");
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape" && isOpen) closeModal();
  }

  $: {
    if (typeof document !== "undefined") {
      document.body.style.overflow = isOpen ? "hidden" : "";
    }
  }

  onMount(() => {
    document.addEventListener("keydown", handleKeydown);
  });

  onDestroy(() => {
    if (typeof document !== "undefined") {
      document.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    }
  });
</script>

<button class="vqr-btn vqr-btn--{variant}" type="button" on:click={openModal}>
  <!-- QR Icon -->
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2.5"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <rect x="3" y="3" width="7" height="7" /><rect
      x="14"
      y="3"
      width="7"
      height="7"
    /><rect x="3" y="14" width="7" height="7" />
    <line x1="14" y1="14" x2="14" y2="14" /><line
      x1="17"
      y1="14"
      x2="17"
      y2="14"
    /><line x1="20" y1="14" x2="20" y2="14" />
    <line x1="14" y1="17" x2="14" y2="17" /><line
      x1="17"
      y1="17"
      x2="20"
      y2="17"
    />
    <line x1="20" y1="20" x2="20" y2="20" />
  </svg>
  {label}
</button>

{#if isOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <div
    class="vqr-overlay"
    role="dialog"
    aria-modal="true"
    tabindex="-1"
    on:click|self={closeModal}
  >
    <div class="vqr-modal" class:vqr-modal--dark={theme === "dark"}>
      <button class="vqr-modal__close" aria-label="Đóng" on:click={closeModal}
        >✕</button
      >
      <p class="vqr-modal__title">Quét mã để thanh toán</p>
      <div class="vqr-modal__qr">
        <VietQR
          {bankId}
          {accountNo}
          {accountName}
          {amount}
          {content}
          {isCard}
          {size}
          renderAs="svg"
          level="Q"
        />
      </div>
      {#if formattedAmount}
        <p class="vqr-modal__amount">{formattedAmount}</p>
      {/if}
      {#if accountName}
        <p class="vqr-modal__hint">{accountName}</p>
      {/if}
      <p class="vqr-modal__hint">{accountNo}</p>
    </div>
  </div>
{/if}

<style>
  .vqr-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    font-family: inherit;
    transition: all 0.2s ease;
  }
  .vqr-btn:hover {
    filter: brightness(1.08);
    transform: translateY(-1px);
  }
  .vqr-btn:active {
    transform: translateY(0);
  }

  .vqr-btn--default {
    background: linear-gradient(135deg, #0051cc 0%, #0070f3 100%);
    color: #ffffff;
    box-shadow: 0 2px 8px rgba(0, 112, 243, 0.35);
  }
  .vqr-btn--outline {
    background: transparent;
    color: #0070f3;
    border: 2px solid #0070f3;
  }
  .vqr-btn--ghost {
    background: rgba(0, 112, 243, 0.08);
    color: #0070f3;
  }

  .vqr-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    padding: 16px;
    animation: vqr-fade-in 0.2s ease;
  }

  .vqr-modal {
    background: #ffffff;
    border-radius: 20px;
    padding: 28px 24px 24px;
    width: 100%;
    max-width: 340px;
    position: relative;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    animation: vqr-slide-up 0.25s ease;
  }

  .vqr-modal--dark {
    background: #1a1a2e;
    color: #ffffff;
  }

  .vqr-modal__close {
    position: absolute;
    top: 14px;
    right: 16px;
    background: rgba(0, 0, 0, 0.07);
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    color: #666;
    transition: background 0.2s;
  }
  .vqr-modal__close:hover {
    background: rgba(0, 0, 0, 0.14);
  }
  .vqr-modal--dark .vqr-modal__close {
    background: rgba(255, 255, 255, 0.1);
    color: #e2e8f0;
  }
  .vqr-modal--dark .vqr-modal__close:hover {
    background: rgba(255, 255, 255, 0.18);
  }

  .vqr-modal__title {
    text-align: center;
    margin-bottom: 16px;
    font-weight: 700;
    font-size: 17px;
    color: #000;
  }
  .vqr-modal--dark .vqr-modal__title {
    color: #ffffff;
  }

  .vqr-modal__qr {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    background: #f8f9fa;
    border-radius: 12px;
    margin-bottom: 16px;
  }
  .vqr-modal--dark .vqr-modal__qr {
    background: #0f0f1e;
  }

  .vqr-modal__amount {
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    color: #0070f3;
    margin-bottom: 6px;
  }

  .vqr-modal__hint {
    text-align: center;
    font-size: 13px;
    color: #888;
    margin-bottom: 4px;
  }
  .vqr-modal--dark .vqr-modal__hint {
    color: #a3a3b8;
  }

  @keyframes vqr-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes vqr-slide-up {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>

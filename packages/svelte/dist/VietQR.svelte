<script lang="ts">
  import { generateVietQR, type VietQROptions } from "@viet-qr/core";
  import QRCode from "qrcode";

  export let bankId: string;
  export let accountNo: string;
  export let accountName: string | undefined = undefined;
  export let amount: number | undefined = undefined;
  export let content: string | undefined = undefined;
  export let isCard: boolean = false;

  export let size: number = 256;
  export let renderAs: "svg" | "canvas" = "svg";
  export let level: "L" | "M" | "Q" | "H" = "Q";
  export let imageSettings:
    | { src: string; width: number; height: number; excavate?: boolean }
    | undefined = undefined;

  let canvasElement: HTMLCanvasElement;
  let svgContent: string = "";

  $: payload = generateVietQR({
    bankId,
    accountNo,
    accountName,
    amount,
    content,
    isCard,
  });

  $: if (payload && renderAs === "svg") {
    QRCode.toString(
      payload,
      {
        type: "svg",
        width: size,
        margin: 0,
        errorCorrectionLevel: level,
      },
      (err, string) => {
        if (!err) svgContent = string;
      }
    );
  }

  $: if (payload && renderAs === "canvas" && canvasElement) {
    QRCode.toCanvas(canvasElement, payload, {
      width: size,
      margin: 0,
      errorCorrectionLevel: level,
    });
  }
</script>

<div
  class="vietqr-svelte-wrapper"
  style="position: relative; display: inline-flex; justify-content: center; align-items: center; width: {size}px; height: {size}px;"
>
  {#if renderAs === "svg"}
    {@html svgContent}
  {:else}
    <canvas bind:this={canvasElement} width={size} height={size}></canvas>
  {/if}

  {#if imageSettings}
    <img
      src={imageSettings.src}
      alt="Logo"
      style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: {imageSettings.width}px; height: {imageSettings.height}px; object-fit: contain; pointer-events: none;"
    />
  {/if}
</div>

<style>
  .vietqr-svelte-wrapper :global(svg),
  .vietqr-svelte-wrapper :global(canvas) {
    width: 100% !important;
    height: 100% !important;
    display: block;
  }
</style>

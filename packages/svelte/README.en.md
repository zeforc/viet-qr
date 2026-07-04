*Read this in other languages: [Vietnamese](README.md).*

# @viet-qr/svelte

[![npm version](https://img.shields.io/npm/v/@viet-qr/svelte.svg)](https://www.npmjs.com/package/@viet-qr/svelte)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Dedicated Svelte Component Wrapper for rendering VietQR codes (NAPAS 247 standard) seamlessly and beautifully on your UI. Perfectly compatible with Svelte 5.

Directly utilizes the ultra-lightweight core engine from `@viet-qr/core` combined with crisp Vector rendering technology.

🌍 **Homepage & Demo:** [viet-qr.zeneo.app](https://viet-qr.zeneo.app)

## Installation

```bash
npm install @viet-qr/svelte
# or
pnpm add @viet-qr/svelte
```

## Usage Guide

With just a few lines of code, you can have a payment QR code integrated directly into your Svelte application.

```svelte
<script>
  import { VietQR } from '@viet-qr/svelte';
</script>

<VietQR 
  bankId="VCB"
  accountNo="1122334455"
  accountName="NGUYEN NGOC A"
  amount={50000}
  content="Chuyen tien cafe"
  renderAs="svg"
  size={300}
  imageSettings={{
    src: '/your-logo.png',
    width: 50,
    height: 50,
    excavate: true
  }}
/>
```

## 🎨 Pre-built UI Templates

If you want a beautiful QR code interface immediately (displaying the Bank Logo, Account Number, Amount...), install the pre-built UI package:

```bash
npm install @viet-qr/templates
```

```svelte
<script>
  import { CompactCard } from '@viet-qr/templates/svelte';
  import '@viet-qr/templates/styles.css'; // Mandatory to import CSS if the system doesn't auto-handle it
</script>

<CompactCard 
  bankId="VCB" 
  accountNo="1122334455"
  accountName="NGUYEN NGOC A"
  amount={50000}
  theme="dark"
/>
```

## 🔘 Payment Button & Modal

Starting from version `1.3.0`, the library provides a `VietQRButton` - a convenient payment button with a built-in Modal:

```svelte
<script>
  import { VietQRButton } from '@viet-qr/svelte';
</script>

<VietQRButton 
  bankId="VCB" 
  accountNo="1122334455"
  accountName="NGUYEN NGOC A"
  amount={50000}
  content="Payment"
  variant="default" <!-- 'default' | 'outline' | 'ghost' -->
  label="Pay with VietQR"
/>
```

## 🪝 Store: `useVietQR`

You can also build your own QR UI entirely from scratch using the `useVietQR` hook:

```svelte
<script>
  import { useVietQR } from '@viet-qr/svelte';

  const { qrPayload, isError, generate } = useVietQR({
    bankId: 'VCB',
    accountNo: '1122334455'
  });
</script>

<div>
  <!-- Use any QR drawing library to render $qrPayload -->
</div>
```

## API Reference (Props)

The `<VietQR />` component inherits all NAPAS standard configuration properties from `@viet-qr/core` plus additional display customizations.

| Prop            | Type                | Description                                                                                                           |
|-----------------|---------------------|-----------------------------------------------------------------------------------------------------------------------|
| `bankId`        | `string`            | **Required**. BIN code or Short Name (e.g., `VCB`, `MB`, `TCB`).                                                      |
| `accountNo`     | `string`            | **Required**. Receiver's account number.                                                                              |
| `accountName`   | `string`            | **Recommended**. Account holder's name (Displayed in EMVCo's Tag 59). If left blank, it defaults to 'NA'.             |
| `amount`        | `number`            | Amount (Optional). If provided, generates a Dynamic QR code; if omitted, generates a Static QR code.                  |
| `content`       | `string`            | Payment description (Safely strips Vietnamese diacritics automatically).                            |
| `isCard`        | `boolean`           | Transfer via Card Number instead of Account Number. Defaults to `false`.      |
| `renderAs`      | `'svg' \| 'canvas'` | Display format. Default is `svg`.                                                |                                      |
| `size`          | `number`            | Size in pixels. Default is `256`.                                                                                     |
| `fgColor`       | `string`            | QR foreground color (Default: `#000000`).                                                                             |
| `bgColor`       | `string`            | QR background color (Default: `#FFFFFF`).                                                                             |
| `imageSettings` | `object`            | Configuration to insert a custom Logo into the center of the QR code.                                                 |

## ⚠️ Note for Svelte 4 Users

Starting from version `v1.1.0`, the library is distributed keeping the TypeScript source code (`<script lang="ts">`) to fully leverage strong typing. Svelte 5 automatically understands this syntax, but if you are using **Svelte 4** (or an older Vite + Svelte setup), you need to configure your build tool to process TypeScript within the library.

**1. In `svelte.config.js`:**
You need to enable `vitePreprocess()` to transpile TypeScript:
```javascript
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess()
};
```

**2. In `vite.config.ts` (or equivalent Webpack/Rollup config):**
You need to exclude the library from Vite's default pre-bundling process, so the Svelte compiler can directly process the raw files:
```typescript
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  optimizeDeps: {
    // Tell Vite to let Svelte handle these packages
    exclude: ['@viet-qr/svelte', '@viet-qr/templates']
  }
});
```

## License
MIT

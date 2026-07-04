*Read this in other languages: [Vietnamese](README.md).*

# @viet-qr/templates

[![npm version](https://img.shields.io/npm/v/@viet-qr/templates.svg)](https://www.npmjs.com/package/@viet-qr/templates)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A library package providing beautifully designed Pre-built UI Templates for VietQR payment codes. Fully supports **React**, **Vue**, and **Svelte**.

All templates automatically inherit the Props and powerful customizations from the core `<VietQR />` component. You just need to drop it into your project, choose a `theme`, fill in the information, and everything will work right out of the box!

🌍 **Homepage & Live Demo:** [viet-qr.zeneo.app/api#templates](https://viet-qr.zeneo.app/api#templates)

## Installation

```bash
npm install @viet-qr/templates
# or
pnpm add @viet-qr/templates
```

*(Note: You must have the respective framework like React/Vue/Svelte pre-installed in your project).*

## Usage Guide

### 🔹 `CompactCard` Template
A compact, softly rounded Card. Displays the QR code clearly along with the account holder's name, account number, and amount. Supports 2 themes: `light` and `dark`.

#### For React Projects
```tsx
import { CompactCard } from '@viet-qr/templates/react';
import '@viet-qr/templates/styles.css'; // Mandatory to import CSS if the system doesn't auto-handle it

function App() {
  return (
    <CompactCard 
      bankId="VCB" 
      accountNo="1122334455"
      accountName="NGUYEN NGOC A"
      amount={50000}
      theme="light" // or 'dark'
    />
  );
}
```

#### For Vue Projects
```vue
<script setup>
import { CompactCard } from '@viet-qr/templates/vue';
import '@viet-qr/templates/styles.css'; // Mandatory to import CSS
</script>

<template>
  <CompactCard 
    bankId="VCB" 
    accountNo="1122334455"
    accountName="NGUYEN NGOC A"
    :amount="50000"
    theme="light"
  />
</template>
```

#### For Svelte Projects
```svelte
<script>
  import { CompactCard } from '@viet-qr/templates/svelte';
  import '@viet-qr/templates/styles.css'; // Mandatory to import CSS
</script>

<CompactCard 
  bankId="VCB" 
  accountNo="1122334455"
  accountName="NGUYEN NGOC A"
  amount={50000}
  theme="light"
/>
```

#### For Vanilla JS (Web Components)
Starting from version `1.2.0`, you can use the library directly on any platform via CDN:
```html
<!-- Import library and CSS -->
<script src="https://unpkg.com/@viet-qr/templates/dist/elements/index.global.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@viet-qr/templates/dist/styles.css" />

<!-- Use the tag directly in HTML -->
<viet-qr-compact 
  bank-id="VCB" 
  account-no="1122334455"
  account-name="NGUYEN NGOC A"
  amount="50000"
  theme="light"
></viet-qr-compact>
```

### 🔹 `PayStandee` Template
A design styled like a desktop acrylic standee used at checkout counters. Supports displaying a prominent store name.

```tsx
// Import for React
import { PayStandee } from '@viet-qr/templates/react';

// Import for Vue
import { PayStandee } from '@viet-qr/templates/vue';

// Import for Svelte
import { PayStandee } from '@viet-qr/templates/svelte';

// Use in Vanilla JS / HTML
<viet-qr-standee bank-id="VCB" ...></viet-qr-standee>
```

### 🔹 `VietQRButton` Template (Button with Modal)

Starting from version `1.3.0`, the library provides a payment button with a built-in QR Code Modal as a standard Web Component (using Shadow DOM to encapsulate UI independently).

```html
<!-- Import library -->
<script src="https://unpkg.com/@viet-qr/templates/dist/elements/index.global.js"></script>

<!-- Use the VietQRButton tag directly in HTML -->
<viet-qr-button 
  bank-id="VCB" 
  account-no="1122334455"
  account-name="NGUYEN NGOC A"
  amount="50000"
  content="Thanh toan"
  variant="default"
  label="Thanh toán VietQR"
></viet-qr-button>
```

## API Reference (Props)

All templates accept properties that are fully inherited from `VietQROptions` (NAPAS standard). Below are the specific Props for the UI cards:

| Prop            | Type                | Default | Description                                                                           |
|-----------------|---------------------|----------|---------------------------------------------------------------------------------------|
| `theme`         | `'light' \| 'dark'` | `'light'`| Display color mode of the UI Card.                                                    |
| `bankLogo`      | `string`            | `undefined`| Path to the bank Logo image located at the top corner of the Card (For `CompactCard`).|
| `title`         | `string`            | `"Quét mã để thanh toán"`| Prominent Title text at the top (For `PayStandee`).                           |
| `subtitle`      | `string`            | `"Hỗ trợ ứng dụng..."` | Small description text below the Title (For `PayStandee`).                |
| *Others...* | *Equivalent* | *As is* | Inherits all Props of `<VietQR />` (e.g., `bankId`, `accountNo`, `amount`...)           |

## ⚠️ Note for Svelte 4 Users

Starting from version `v1.1.0`, Svelte components are distributed keeping the original source code containing TypeScript (`<script lang="ts">`). Svelte 5 automatically understands this syntax, but if you are using **Svelte 4** (or older bundlers), you need to configure your compiler to process TypeScript.

**1. In Vite (`vite.config.ts`):**
Exclude the library from pre-bundling so the Svelte compiler can handle it:
```typescript
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  optimizeDeps: {
    exclude: ['@viet-qr/svelte', '@viet-qr/templates']
  }
});
```

**2. Enable Preprocess (`svelte.config.js`):**
```javascript
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess()
};
```

*(Note: If you use Webpack / Rollup, make sure your `svelte-loader` or `rollup-plugin-svelte` is configured with `svelte-preprocess` to automatically compile the `node_modules/@viet-qr/*` directory).*

## License
MIT

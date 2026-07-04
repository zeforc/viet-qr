*Read this in other languages: [Vietnamese](README.md).*

# @viet-qr/vue

[![npm version](https://img.shields.io/npm/v/@viet-qr/vue.svg)](https://www.npmjs.com/package/@viet-qr/vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Dedicated Vue Component (Vue 3 Component Wrapper) for rendering VietQR codes (NAPAS 247 standard) seamlessly and beautifully on your UI.

Directly utilizes the ultra-lightweight core engine from `@viet-qr/core` combined with crisp Vector rendering technology.

🌍 **Homepage & Demo:** [viet-qr.zeneo.app](https://viet-qr.zeneo.app)

## Installation

```bash
npm install @viet-qr/vue
# or
pnpm add @viet-qr/vue
```

*(Note: This package requires `vue` (>= 3.0.0) to be installed in your project).*

## Usage Guide

With just a few lines of code, you can have a payment QR code integrated directly into your Vue application.

```vue
<script setup>
import { VietQR } from '@viet-qr/vue';
</script>

<template>
  <VietQR 
    bankId="VCB"
    accountNo="1122334455"
    accountName="NGUYEN NGOC A"
    :amount="50000"
    content="Chuyen tien cafe"
    renderAs="svg"
    :size="300"
    :imageSettings="{
      src: '/your-logo.png',
      width: 50,
      height: 50,
      excavate: true
    }"
  />
</template>
```

## 🎨 Pre-built UI Templates

If you want a beautiful QR code interface immediately (displaying the Bank Logo, Account Number, Amount...), install the pre-built UI package:

```bash
npm install @viet-qr/templates
```

```vue
<script setup>
import { CompactCard } from '@viet-qr/templates/vue';
import '@viet-qr/templates/styles.css'; // Mandatory to import CSS if the system doesn't auto-handle it
</script>

<template>
  <CompactCard 
    bankId="VCB" 
    accountNo="1122334455"
    accountName="NGUYEN NGOC A"
    :amount="50000"
    theme="dark"
  />
</template>
```

## 🔘 Payment Button & Modal

Starting from version `1.3.0`, the library provides a `VietQRButton` - a convenient payment button with a built-in Modal:

```vue
<script setup>
import { VietQRButton } from '@viet-qr/vue';
import '@viet-qr/vue/style.css'; // CSS for button and modal
</script>

<template>
  <VietQRButton 
    bankId="VCB" 
    accountNo="1122334455"
    accountName="NGUYEN NGOC A"
    :amount="50000"
    content="Payment"
    variant="default" <!-- 'default' | 'outline' | 'ghost' -->
    label="Pay with VietQR"
  />
</template>
```

## 🪝 Composable: `useVietQR`

You can also build your own QR UI entirely from scratch using the `useVietQR` composable:

```vue
<script setup>
import { useVietQR } from '@viet-qr/vue';

const { qrPayload, isError, generate } = useVietQR({
  bankId: 'VCB',
  accountNo: '1122334455'
});
</script>

<template>
  <div>
    <!-- Use qrcode.vue or any other QR drawing library to render qrPayload -->
  </div>
</template>
```

## API Reference (Props)

The `<VietQR />` component inherits all NAPAS standard configuration properties from `@viet-qr/core` plus additional display customizations.

| Prop            | Type                | Description                                                                                                           |
|-----------------|---------------------|-----------------------------------------------------------------------------------------------------------------------|
| `bankId`        | `string`            | **Required**. BIN code or Short Name (e.g., `VCB`, `MB`, `TCB`).                                                      |
| `accountNo`     | `string`            | **Required**. Receiver's account number.                                                                              |
| `accountName`   | `string`            | **Recommended**. Account holder's name (Displayed in Tag 59 of EMVCo). If left blank, it defaults to 'NA'. |
| `amount`        | `number`            | Amount (Optional). If provided, generates a Dynamic QR code; if omitted, generates a Static QR code.  |
| `content`       | `string`            | Payment description (Safely strips Vietnamese diacritics automatically).                              |
| `isCard`        | `boolean`           | Transfer via Card Number instead of Account Number. Defaults to `false`.      |
| `renderAs`      | `'svg' \| 'canvas'` | Display format. Default is `svg`.                                                                     |                 |
| `size`          | `number`            | Size in pixels. Default is `256`.                                                                                     |
| `fgColor`       | `string`            | QR foreground color (Default: `#000000`).                                                                             |
| `bgColor`       | `string`            | QR background color (Default: `#FFFFFF`).                                                                             |
| `imageSettings` | `object`            | Configuration to insert a custom Logo into the center of the QR code.                                                 |

## License
MIT

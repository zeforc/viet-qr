*Read this in other languages: [Vietnamese](README.md).*

# @viet-qr/react

[![npm version](https://img.shields.io/npm/v/@viet-qr/react.svg)](https://www.npmjs.com/package/@viet-qr/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Dedicated React Component Wrapper for rendering VietQR codes (NAPAS 247 standard) seamlessly and beautifully on your UI.

Directly utilizes the ultra-lightweight core engine from `@viet-qr/core` combined with the Vector rendering technology of `qrcode.react`.

🌍 **Homepage & Demo:** [viet-qr.zeneo.app](https://viet-qr.zeneo.app)

## Installation

```bash
npm install @viet-qr/react
# or
pnpm add @viet-qr/react
```

*(Note: This package requires `react` to be installed in your project).*

## Usage Guide

With just a few lines of code, you can have a payment QR code integrated directly into your React application.

```tsx
import { VietQR } from '@viet-qr/react';

function PaymentPage() {
  return (
    <VietQR 
      bankId="VCB"                // Vietcombank
      accountNo="1122334455"      // Receiver's account number
      accountName="NGUYEN NGOC A" // Account holder's name
      amount={50000}              // Amount (Optional)
      content="Chuyen tien cafe"  // Content (Optional)
      renderAs="svg"              // Render as crisp SVG (or 'canvas')
      size={300}                  // Size 300x300px
      imageSettings={{
        src: "/your-logo.png",    // Path to the Logo to insert in the middle of the QR
        width: 50,
        height: 50,
        excavate: true,           // Excavate to prevent the logo from overlapping the QR pattern
      }}
    />
  );
}
```

## 🎨 Pre-built UI Templates

If you want a beautiful QR code with a Card displaying the bank Logo, Account Number, and Amount instead of just a bare QR code, check out our pre-built UI packages!

```bash
npm install @viet-qr/templates
```

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
      theme="dark"
    />
  );
}
```

## 🔘 Payment Button & Modal

Starting from version `1.3.0`, the library provides a `VietQRButton` - a convenient payment button with a built-in Modal:

```tsx
import { VietQRButton } from '@viet-qr/react';

function Payment() {
  return (
    <VietQRButton 
      bankId="VCB" 
      accountNo="1122334455"
      accountName="NGUYEN NGOC A"
      amount={50000}
      content="Payment"
      variant="default" // 'default' | 'outline' | 'ghost'
      label="Pay with VietQR"
    />
  );
}
```

## 🪝 Hook: `useVietQR`

You can also build your own QR UI entirely from scratch using the `useVietQR` hook:

```tsx
import { useVietQR } from '@viet-qr/react';

function CustomQR() {
  const { qrPayload, isError, generate } = useVietQR({
    bankId: 'VCB',
    accountNo: '1122334455'
  });

  return (
    <div>
      {/* Use qrcode.react or any other QR drawing library to render qrPayload */}
    </div>
  );
}
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
| `style`         | `object`            | Custom React Inline Style for the QR wrapper.                                                                         |

## License
MIT

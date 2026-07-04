*Read this in other languages: [Vietnamese](README.md).*

# @viet-qr/core

Core library for generating EMVCo standard codes for the VietQR / NAPAS 247 payment standard.

Designed with **Zero Dependencies**, ultra-lightweight, lightning-fast, and works completely Offline.

<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/@viet-qr/core"><img src="https://img.shields.io/npm/v/@viet-qr/core.svg" alt="npm version" /></a>
    <a href="https://github.com/zeforc/viet-qr/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" /></a>
  </p>

  <h3>
    Explore and experience <br/>
    <a href="https://viet-qr.zeneo.app">viet-qr.zeneo.app</a>
  </h3>
</div>
<br>

## Key Features

| Feature | Detailed Description |
| :--- | :--- |
| 🚀 **Generate VietQR Code** | Supports generating both **static** and **dynamic** (with amount & content) QR codes according to the NAPAS 247 standard. |
| 🎯 **EMVCo Accurate** | Strictly complies with the standard structure, including *Tag 59 (Merchant Name)*, *Tag 60 (Merchant City)*, and Service Code `QRIBFTTA`. |
| ⚡ **High Performance** | Automatically calculates the CRC16-CCITT checksum at lightning speed using an internal Bitwise algorithm (Zero-dependencies). |
| 🏦 **Offline Database** | Built-in bank lookup database (Name, BIN, Code) with **O(1)** retrieval speed. |
| 🛡️ **Auto-Sanitization** | Automatically normalizes data: Removes Vietnamese accents, handles invalid characters, and automatically truncates strings if they exceed the allowed limit. |
| 💎 **100% Type-Safe** | Written entirely in TypeScript, providing autocompletion and strong Static Typing. |
| 📦 **Universal & Isomorphic**| Works perfectly in any JS/TS environment: Node.js, React, Vue, Svelte, React Native, etc. |

## UI Ecosystem (UI Frameworks)

Since `@viet-qr/core` is the core algorithm engine (only generating strings), we have built ready-to-use extensions (UI Wrappers) to help you render QR codes quickly and optimally for each Framework:

| Package | Framework | Description |
| :--- | :--- | :--- |
| [`@viet-qr/react`](https://www.npmjs.com/package/@viet-qr/react) | React / Next.js | Dedicated wrapper, automatically draws sharp SVG QR codes. |
| [`@viet-qr/vue`](https://www.npmjs.com/package/@viet-qr/vue) | Vue 3 / Nuxt | Optimized wrapper for the Vue 3 ecosystem. |
| [`@viet-qr/svelte`](https://www.npmjs.com/package/@viet-qr/svelte) | Svelte 5 / Kit | Lightweight wrapper, perfectly compatible with Svelte 5. |
| [`@viet-qr/templates`](https://www.npmjs.com/package/@viet-qr/templates) | Cross-platform | Beautifully pre-designed payment Card templates for React, Vue, Svelte, and Vanilla JS (Web Components). |

## Installation

```bash
# npm
npm install @viet-qr/core
# pnpm
pnpm add @viet-qr/core
# yarn
yarn add @viet-qr/core
```

## Usage Guide

### 1. Generate & Parse VietQR Payload

#### a. Generate VietQR (Generator)

The `generateVietQR` function returns a plain text string compliant with EMVCo. You can combine this string with any QR rendering library to display it on the screen.

```typescript
import { generateVietQR } from '@viet-qr/core';

// 1. Generate Static QR code (Account info only)
const staticPayload = generateVietQR({
  bankId: 'VCB', // Can use bank Code (VCB, TCB, MB,...) or BIN (970436)
  accountNo: '1122334455',
  accountName: 'NGUYEN NGOC A',
  amount: 50000, 
  content: 'Thanh toan don hang'
});
console.log(staticPayload); 

// 2. Generate Dynamic QR code (With amount and content)
const dynamicPayload = generateVietQR({
  bankId: '970407', // Techcombank's BIN
  accountNo: '99999999',
  accountName: 'NGUYEN NGOC A',
  amount: 50000, 
  content: 'Chuyển tiền thanh toán phí dịch vụ' // Automatically parsed to "Chuyen tien thanh toan phi dich vu"
});
console.log(dynamicPayload);
```

#### b. Parse VietQR (Parser)

The `parseVietQR` function helps you decode any VietQR string to get detailed information:

```typescript
import { parseVietQR } from '@viet-qr/core';

const qrString = "00020101021238580010A000000727012800069704360114112233445566770208QRIBFTTA53037045405500005802VN5913NGUYEN NGOC A6304C929";
const parsed = parseVietQR(qrString);

console.log(parsed.bankId); // "970436"
console.log(parsed.accountNo); // "1122334455"
console.log(parsed.amount); // 50000
```

### 2. Bank Lookup Utility

If you need detailed information about a bank to display on the UI:

```typescript
import { getBankByCode, getBankByBin, getBankByName } from '@viet-qr/core';

// Look up by Code (e.g., VCB, TCB)
const bank = getBankByCode('VCB');
console.log(bank);
/* Output:
{
  bin: "970436",
  code: "VCB",
  name: "Vietcombank",
  fullName: "Ngân hàng TMCP Ngoại Thương Việt Nam"
}
*/

// Look up by BIN
const bankByBin = getBankByBin('970436');

// Look up by short name
const bankByName = getBankByName('Vietcombank');
```

### 3. Update Bank List Dynamically (Runtime)

From version `1.2.0`, you can fetch the bank list from an API or update it manually:

```typescript
import { fetchBankList, setBankList } from '@viet-qr/core';

// Fetch bank list from a URL (CDN/API)
await fetchBankList('https://example.com/banks.json');

// Or manually overwrite the list with custom data
setBankList([
  { bin: "970436", code: "VCB", name: "Vietcombank", fullName: "Ngân hàng TMCP Ngoại Thương Việt Nam" },
  // ...
]);
```

### 4. String Utilities

```typescript
import { removeVietnameseAccents, sanitizeAccountName } from '@viet-qr/core';

// Remove Vietnamese accents, keep special characters
console.log(removeVietnameseAccents("Nguyễn Văn A - 123")); 
// => "Nguyen Van A - 123"

// Normalize account name (Remove accents, uppercase, remove invalid characters)
console.log(sanitizeAccountName("Nguyễn Văn A - 123")); 
// => "NGUYEN VAN A  123"
```

## API Reference

### `VietQROptions`

| Property      | Type         | Required | Description |
|---------------|--------------|----------|-------------|
| `bankId`      | `string`     | **Yes**  | Bank BIN (e.g., `970436`) or bank Code (e.g., `VCB`). |
| `accountNo`   | `string`     | **Yes**  | Receiver's account number. |
| `accountName` | `string`     | No       | Account holder's name (Displayed in Tag 59 of the EMVCo standard QR code). |
| `amount`      | `number`     | No       | Amount to transfer (Positive integer greater than 0). If left blank, a Static QR code will be generated. |
| `content`     | `string`     | No       | Transfer content (Automatically removes Vietnamese accents and limits to a maximum of 50 characters per Napas standard). |
| `isCard`      | `boolean`    | No       | Transfer via Card Number instead of Account Number. Defaults to `false`. |

### `Bank`

| Property    | Type     | Description |
|-------------|----------|-------------|
| `bin`       | `string` | Bank BIN number (e.g., `970436`). |
| `code`      | `string` | Short bank code (e.g., `VCB`, `TCB`). |
| `name`      | `string` | Short bank name (e.g., `Vietcombank`). |
| `fullName`  | `string` | Full bank name (e.g., `Ngân hàng TMCP Ngoại Thương Việt Nam`). |
| `swiftCode` | `string` | SWIFT code (optional). |

### Utility Functions

| Function | Description |
|----------|-------------|
| `generateVietQR(options)` | Generate VietQR string from `VietQROptions` object. |
| `parseVietQR(qrString)` | Parse a VietQR string into an object containing details (`bankId`, `accountNo`, `amount`,...). |
| `getBankByBin(bin)` | Look up a bank by BIN number. |
| `getBankByCode(code)` | Look up a bank by code (e.g., `VCB`, `TCB`). |
| `getBankByName(name)` | Look up a bank by short name (e.g., `Vietcombank`). |
| `setBankList(banks)` | Manually overwrite the bank list in memory. |
| `fetchBankList(url)` | Fetch bank list from an API or CDN URL. |
| `sanitizeAccountName(name)` | Remove Vietnamese accents, uppercase, strip invalid characters. |
| `removeVietnameseAccents(str)` | Remove Vietnamese diacritics from a string. |

> [!WARNING]
> **Breaking Change (v1.3.0):** The function `getBankByShortName()` has been **renamed** to `getBankByName()`. Please update your code.
>
> ```typescript
> // ❌ Old (removed)
> getBankByShortName('Vietcombank');
>
> // ✅ New
> getBankByName('Vietcombank');
> ```

## License
MIT

*Read this in other languages: [Vietnamese](README.vi.md).*

# VietQR (@viet-qr) 🚀

An open-source project providing the most comprehensive and modern toolkit for generating EMVCo / NAPAS 247 (VietQR) payment codes for the JavaScript/TypeScript ecosystem.

The project is designed with a **Monorepo** architecture to separate core processing from UI rendering, making the system highly scalable and cross-platform.

[![npm core](https://img.shields.io/npm/v/@viet-qr/core.svg?label=@viet-qr/core)](https://www.npmjs.com/package/@viet-qr/core)
[![npm react](https://img.shields.io/npm/v/@viet-qr/react.svg?label=@viet-qr/react)](https://www.npmjs.com/package/@viet-qr/react)
[![npm vue](https://img.shields.io/npm/v/@viet-qr/vue.svg?label=@viet-qr/vue)](https://www.npmjs.com/package/@viet-qr/vue)
[![npm svelte](https://img.shields.io/npm/v/@viet-qr/svelte.svg?label=@viet-qr/svelte)](https://www.npmjs.com/package/@viet-qr/svelte)
[![npm templates](https://img.shields.io/npm/v/@viet-qr/templates.svg?label=@viet-qr/templates)](https://www.npmjs.com/package/@viet-qr/templates)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/zeforc/viet-qr/blob/main/LICENSE)

🌍 **Homepage & Demo:** [viet-qr.zeneo.app](https://viet-qr.zeneo.app)

## 📦 Packages

This repository contains the following packages:

| Package | Description | Version |
|---------|-------------|---------|
| [`@viet-qr/core`](./packages/core) | Core library for EMVCo string generation and bank lookup. **Zero-dependency**. | [![npm version](https://img.shields.io/npm/v/@viet-qr/core.svg)](https://www.npmjs.com/package/@viet-qr/core) |
| [`@viet-qr/react`](./packages/react) | React Component Wrapper for rendering QR codes in React. | [![npm version](https://img.shields.io/npm/v/@viet-qr/react.svg)](https://www.npmjs.com/package/@viet-qr/react) |
| [`@viet-qr/vue`](./packages/vue) | Vue Component Wrapper for the Vue 3 ecosystem. | [![npm version](https://img.shields.io/npm/v/@viet-qr/vue.svg)](https://www.npmjs.com/package/@viet-qr/vue) |
| [`@viet-qr/svelte`](./packages/svelte) | Svelte Component Wrapper compatible with Svelte 5. | [![npm version](https://img.shields.io/npm/v/@viet-qr/svelte.svg)](https://www.npmjs.com/package/@viet-qr/svelte) |
| [`@viet-qr/templates`](./packages/templates) | A collection of beautiful pre-built UI templates (Card, Standee) for React, Vue, Svelte, and Vanilla JS. | [![npm version](https://img.shields.io/npm/v/@viet-qr/templates.svg)](https://www.npmjs.com/package/@viet-qr/templates) |

---

## 🚀 Quick Start

You can use each package individually or combine them together. Here are some quick examples to get you started:

### 1. For Vanilla JS / Node.js Projects
Install the Core package to generate a valid EMVCo payload string.

```bash
npm install @viet-qr/core
```

```typescript
import { generateVietQR } from '@viet-qr/core';

// Generate dynamic QR with amount and content
const payload = generateVietQR({
  bankId: '970436', // Or short name: 'VCB'
  accountNo: '1122334455',
  accountName: 'NGUYEN NGOC A',
  amount: 50000, 
  content: 'Order payment'
});

console.log(payload); // Returns EMVCo string for you to render using any QR library
```
👉 **Read more:** [`@viet-qr/core` Documentation](./packages/core/README.md)

### 2. For React Projects
Install the React package (which already includes the core logic) to render the QR code directly to the UI.

```bash
npm install @viet-qr/react
```

```tsx
import { VietQR } from '@viet-qr/react';

function App() {
  return (
    <VietQR
      bankId="MB"
      accountNo="999999999"
      accountName="NGUYEN NGOC A"
      amount={100000}
      content="Book payment"
      renderAs="svg"
      size={256}
    />
  );
}
```
👉 **Read more:** [`@viet-qr/react` Documentation](./packages/react/README.md)

### 3. Using Pre-built Templates
If you don't want to design the QR card yourself, install the `templates` package and use the beautiful `CompactCard` or `PayStandee` (supports React, Vue, Svelte, and Vanilla JS Web Components).

```bash
npm install @viet-qr/templates
```

```tsx
import { CompactCard } from '@viet-qr/templates/react'; // or /vue, /svelte
// For Vanilla JS, embed directly via CDN script (see docs)
import '@viet-qr/templates/styles.css';

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
👉 **Read more:** [`@viet-qr/templates` Documentation](./packages/templates/README.md)

---

## 🏗 Architecture Principles

- **Strict TypeScript**: The entire project is written in TypeScript (Strict Mode) to ensure 100% Type-safety.
- **Zero-Dependency (Core)**: The `@viet-qr/core` package independently handles the CRC16-CCITT algorithm, string sanitization, and the offline Database without any external libraries.
- **Maximum Performance**: The bank database uses Indexing Map for **O(1)** lookup speed.
- **Modern Standards (ESM/CJS)**: Uses the latest module standards, supporting both `import` and `require` without compatibility barriers.

## 🤝 Author & Sponsor

This project is built and maintained by:
- **Author:** Zeforc - Stridev (Thien N)
- **Sponsor:** If you find this project useful and it saves you time, consider buying the author a coffee! ☕️ 
  👉 [buymeacoffee.com/stridev](https://buymeacoffee.com/stridev)

## 📜 License
MIT License

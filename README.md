# VietQR (@viet-qr) 🚀

Dự án mã nguồn mở cung cấp bộ công cụ toàn diện và hiện đại nhất để sinh mã thanh toán chuẩn EMVCo / NAPAS 247 (VietQR) cho hệ sinh thái JavaScript/TypeScript.

Dự án được thiết kế theo kiến trúc **Monorepo** nhằm tách biệt phần tính toán cốt lõi với phần hiển thị UI, giúp hệ thống dễ dàng mở rộng và hỗ trợ đa nền tảng.

[![npm core](https://img.shields.io/npm/v/@viet-qr/core.svg?label=@viet-qr/core)](https://www.npmjs.com/package/@viet-qr/core)
[![npm react](https://img.shields.io/npm/v/@viet-qr/react.svg?label=@viet-qr/react)](https://www.npmjs.com/package/@viet-qr/react)
[![npm vue](https://img.shields.io/npm/v/@viet-qr/vue.svg?label=@viet-qr/vue)](https://www.npmjs.com/package/@viet-qr/vue)
[![npm svelte](https://img.shields.io/npm/v/@viet-qr/svelte.svg?label=@viet-qr/svelte)](https://www.npmjs.com/package/@viet-qr/svelte)
[![npm templates](https://img.shields.io/npm/v/@viet-qr/templates.svg?label=@viet-qr/templates)](https://www.npmjs.com/package/@viet-qr/templates)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/zeforc/viet-qr/blob/main/LICENSE)

🌍 **Trang chủ & Demo:** [viet-qr.zeneo.app](https://viet-qr.zeneo.app)

## 📦 Hệ sinh thái (Packages)

Kho lưu trữ này chứa các gói (packages) sau:

| Package | Mô tả | Phiên bản |
|---------|-------|-----------|
| [`@viet-qr/core`](./packages/core) | Thư viện lõi sinh chuỗi EMVCo và tra cứu ngân hàng. **Zero-dependency**. | [![npm version](https://img.shields.io/npm/v/@viet-qr/core.svg)](https://www.npmjs.com/package/@viet-qr/core) |
| [`@viet-qr/react`](./packages/react) | React Component Wrapper để vẽ mã QR trên React. | [![npm version](https://img.shields.io/npm/v/@viet-qr/react.svg)](https://www.npmjs.com/package/@viet-qr/react) |
| [`@viet-qr/vue`](./packages/vue) | Vue Component Wrapper dành cho hệ sinh thái Vue 3. | [![npm version](https://img.shields.io/npm/v/@viet-qr/vue.svg)](https://www.npmjs.com/package/@viet-qr/vue) |
| [`@viet-qr/svelte`](./packages/svelte) | Svelte Component Wrapper tương thích với Svelte 5. | [![npm version](https://img.shields.io/npm/v/@viet-qr/svelte.svg)](https://www.npmjs.com/package/@viet-qr/svelte) |
| [`@viet-qr/templates`](./packages/templates) | Bộ sưu tập các mẫu UI (Card, Standee) thiết kế sẵn cực đẹp. | [![npm version](https://img.shields.io/npm/v/@viet-qr/templates.svg)](https://www.npmjs.com/package/@viet-qr/templates) |

---

## 🚀 Hướng dẫn nhanh (Quick Start)

Bạn có thể sử dụng riêng lẻ từng package hoặc kết hợp chúng lại với nhau. Dưới đây là ví dụ nhanh để bạn hình dung cách hoạt động:

### 1. Dành cho dự án Vanilla JS / Node.js
Chỉ cần cài đặt gói Core để tạo ra chuỗi dữ liệu (Payload) chuẩn EMVCo.

```bash
npm install @viet-qr/core
```

```typescript
import { generateVietQR } from '@viet-qr/core';

// Tạo mã QR Động kèm số tiền và nội dung
const payload = generateVietQR({
  bankId: '970436', // Hoặc tên viết tắt: 'VCB'
  accountNo: '1122334455',
  accountName: 'NGUYEN NGOC A',
  amount: 50000, 
  content: 'Thanh toan don hang'
});

console.log(payload); // Trả về chuỗi EMVCo để bạn dùng thư viện khác tự vẽ QR
```
👉 **Đọc chi tiết tại:** [Tài liệu `@viet-qr/core`](./packages/core/README.md)

### 2. Dành cho dự án React
Cài đặt gói React (Nó đã bao gồm luôn bộ lõi phía dưới) để render mã QR thẳng ra giao diện.

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
      content="Chuyen tien mua sach"
      renderAs="svg"
      size={256}
    />
  );
}
```
👉 **Đọc chi tiết tại:** [Tài liệu `@viet-qr/react`](./packages/react/README.md)

### 3. Sử dụng Giao diện làm sẵn (Pre-built Templates)
Nếu bạn không muốn tự code giao diện thẻ QR, hãy cài gói `templates` và sử dụng `CompactCard` hoặc `PayStandee` siêu đẹp (hỗ trợ cả React, Vue, Svelte).

```bash
npm install @viet-qr/templates
```

```tsx
import { CompactCard } from '@viet-qr/templates/react'; // hoặc /vue, /svelte
import '@viet-qr/templates/style.css';

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
👉 **Đọc chi tiết tại:** [Tài liệu `@viet-qr/templates`](./packages/templates/README.md)

---

## 🏗 Nguyên tắc Thiết kế (Architecture)

- **TypeScript Strict**: Toàn bộ dự án được viết bằng TypeScript (Strict Mode) đảm bảo Type-safe 100%.
- **Zero-Dependency (Core)**: Gói `@viet-qr/core` hoàn toàn tự xử lý thuật toán CRC16-CCITT, xử lý chuỗi (Sanitization) và Database Offline mà không cài thêm bất kỳ library ngoài nào.
- **Hiệu năng Tối đa**: Database ngân hàng áp dụng Indexing Map cho tốc độ tra cứu **O(1)**.
- **Hiện đại hóa (ESM/CJS)**: Sử dụng chuẩn module mới nhất, hỗ trợ cả `import` và `require` mà không bị rào cản tương thích.

## 🤝 Tác giả & Tài trợ (Author & Sponsor)

Dự án được xây dựng và bảo trì bởi:
- **Author:** Zeforc - Stridev (Thien N)
- **Sponsor:** Nếu bạn thấy dự án hữu ích và giúp bạn tiết kiệm thời gian, hãy ủng hộ tác giả một ly cà phê nhé! ☕️ 
  👉 [buymeacoffee.com/stridev](https://buymeacoffee.com/stridev)

## 📜 Giấy phép (License)
MIT License

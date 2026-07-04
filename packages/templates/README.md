*Read this in other languages: [English](README.en.md).*

# @viet-qr/templates

[![npm version](https://img.shields.io/npm/v/@viet-qr/templates.svg)](https://www.npmjs.com/package/@viet-qr/templates)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Gói thư viện cung cấp các mẫu giao diện (Pre-built UI Templates) được thiết kế tuyệt đẹp cho mã thanh toán VietQR. Hỗ trợ đầy đủ cho **React**, **Vue** và **Svelte**.

Mọi template đều tự động thừa kế bộ Props và tuỳ chỉnh mạnh mẽ từ component `<VietQR />` gốc. Bạn chỉ cần thả vào dự án, chọn `theme`, điền thông tin và mọi thứ sẽ hoạt động ngay lập tức!

🌍 **Trang chủ & Xem Live Demo:** [viet-qr.zeneo.app/api#templates](https://viet-qr.zeneo.app/api#templates)

## Cài đặt

```bash
npm install @viet-qr/templates
# hoặc
pnpm add @viet-qr/templates
```

*(Lưu ý: Bạn phải cài đặt sẵn framework tương ứng như React/Vue/Svelte trong dự án).*

## Hướng dẫn sử dụng

### 🔹 Mẫu giao diện `CompactCard`
Một thẻ Card nhỏ gọn, bo tròn mềm mại. Hiển thị mã QR cùng với thông tin tên chủ tài khoản, số tài khoản và số tiền rõ ràng. Hỗ trợ 2 chủ đề: `light` và `dark`.

#### Cho dự án React
```tsx
import { CompactCard } from '@viet-qr/templates/react';
import '@viet-qr/templates/styles.css'; // Bắt buộc import CSS nếu hệ thống không tự động xử lý

function App() {
  return (
    <CompactCard 
      bankId="VCB" 
      accountNo="1122334455"
      accountName="NGUYEN NGOC A"
      amount={50000}
      theme="light" // hoặc 'dark'
    />
  );
}
```

#### Cho dự án Vue
```vue
<script setup>
import { CompactCard } from '@viet-qr/templates/vue';
import '@viet-qr/templates/styles.css'; // Bắt buộc import CSS
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

#### Cho dự án Svelte
```svelte
<script>
  import { CompactCard } from '@viet-qr/templates/svelte';
  import '@viet-qr/templates/styles.css'; // Bắt buộc import CSS
</script>

<CompactCard 
  bankId="VCB" 
  accountNo="1122334455"
  accountName="NGUYEN NGOC A"
  amount={50000}
  theme="light"
/>
```

#### Cho Vanilla JS (Web Components)
Từ phiên bản `1.2.0`, bạn có thể dùng trực tiếp thư viện trên bất kỳ nền tảng nào thông qua CDN:
```html
<!-- Nhúng thư viện và CSS -->
<script src="https://unpkg.com/@viet-qr/templates/dist/elements/index.global.js"></script>
<link rel="stylesheet" href="https://unpkg.com/@viet-qr/templates/dist/styles.css" />

<!-- Sử dụng thẻ trực tiếp trong HTML -->
<viet-qr-compact 
  bank-id="VCB" 
  account-no="1122334455"
  account-name="NGUYEN NGOC A"
  amount="50000"
  theme="light"
></viet-qr-compact>
```

### 🔹 Mẫu giao diện `PayStandee`
Một thiết kế mang phong cách biển mica để bàn (standee) dùng tại các quầy thu ngân. Hỗ trợ hiển thị tên cửa hàng nổi bật.

```tsx
// Nhúng cho React
import { PayStandee } from '@viet-qr/templates/react';

// Nhúng cho Vue
import { PayStandee } from '@viet-qr/templates/vue';

// Nhúng cho Svelte
import { PayStandee } from '@viet-qr/templates/svelte';

// Nhúng cho Vanilla JS / HTML
<viet-qr-standee bank-id="VCB" ...></viet-qr-standee>
```

### 🔹 Mẫu giao diện `VietQRButton` (Button kèm Modal)

Bắt đầu từ bản `v1.3.0`, thư viện cung cấp một nút bấm thanh toán kèm Modal hiển thị mã QR dưới dạng Web Component cực chuẩn (sử dụng Shadow DOM để đóng gói UI độc lập).

```html
<!-- Nhúng thư viện -->
<script src="https://unpkg.com/@viet-qr/templates/dist/elements/index.global.js"></script>

<!-- Sử dụng thẻ VietQRButton trực tiếp trong HTML -->
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

Mọi template đều chấp nhận các thuộc tính kế thừa hoàn toàn từ `VietQROptions` (chuẩn NAPAS). Dưới đây là các Props đặc thù cho các thẻ UI:

| Prop            | Kiểu dữ liệu        | Mặc định | Mô tả                                                                                 |
|-----------------|---------------------|----------|---------------------------------------------------------------------------------------|
| `theme`         | `'light' \| 'dark'` | `'light'`| Chế độ màu hiển thị của Card giao diện.                                               |
| `bankLogo`      | `string`            | `undefined`| Đường dẫn ảnh Logo ngân hàng nằm ở góc trên cùng của Card (Dành cho `CompactCard`).   |
| `title`         | `string`            | `"Quét mã để thanh toán"`| Dòng chữ Tiêu đề nổi bật trên cùng (Dành cho `PayStandee`).                   |
| `subtitle`      | `string`            | `"Hỗ trợ ứng dụng..."` | Dòng chữ mô tả nhỏ bên dưới Tiêu đề (Dành cho `PayStandee`).               |
| *Khác...*       | *Tương đương*       | *Như cũ* | Kế thừa toàn bộ Props của `<VietQR />` (vd: `bankId`, `accountNo`, `amount`...)        |

## ⚠️ Lưu ý cho người dùng Svelte 4

Bắt đầu từ phiên bản `v1.1.0`, các component Svelte được phân phối giữ nguyên mã nguồn gốc chứa TypeScript (`<script lang="ts">`). Svelte 5 tự động hiểu cú pháp này, nhưng nếu bạn đang dùng **Svelte 4** (hoặc các trình đóng gói cũ), bạn cần cấu hình để trình biên dịch xử lý TypeScript.

**1. Trong Vite (`vite.config.ts`):**
Loại trừ thư viện khỏi pre-bundling để giao lại cho Svelte compiler:
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

**2. Bật Preprocess (`svelte.config.js`):**
```javascript
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess()
};
```

*(Lưu ý: Nếu bạn sử dụng Webpack / Rollup, hãy chắc chắn rằng `svelte-loader` hoặc `rollup-plugin-svelte` của bạn đã được cấu hình với `svelte-preprocess` để tự động compile thư mục `node_modules/@viet-qr/*`).*

## Giấy phép (License)
MIT

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
import '@viet-qr/templates/style.css'; // Bắt buộc import CSS nếu hệ thống không tự động xử lý

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
import '@viet-qr/templates/style.css'; // Bắt buộc import CSS
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
  import '@viet-qr/templates/style.css'; // Bắt buộc import CSS
</script>

<CompactCard 
  bankId="VCB" 
  accountNo="1122334455"
  accountName="NGUYEN NGOC A"
  amount={50000}
  theme="light"
/>
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

## Giấy phép (License)
MIT

*Read this in other languages: [English](README.en.md).*

# @viet-qr/vue

[![npm version](https://img.shields.io/npm/v/@viet-qr/vue.svg)](https://www.npmjs.com/package/@viet-qr/vue)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Thành phần Vue (Vue 3 Component Wrapper) chuyên dụng để render mã VietQR (chuẩn NAPAS 247) lên giao diện một cách dễ dàng và đẹp mắt.

Sử dụng trực tiếp mã lõi siêu nhẹ từ `@viet-qr/core` kết hợp cùng công nghệ vẽ Vector siêu nét.

🌍 **Trang chủ & Demo:** [viet-qr.zeneo.app](https://viet-qr.zeneo.app)

## Cài đặt

```bash
npm install @viet-qr/vue
# hoặc
pnpm add @viet-qr/vue
```

*(Lưu ý: Gói này yêu cầu bạn đã cài đặt sẵn `vue` (>= 3.0.0) trong dự án của mình).*

## Hướng dẫn sử dụng

Chỉ với vài dòng code, bạn đã có ngay một mã QR thanh toán tích hợp thẳng vào ứng dụng Vue của mình.

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

Nếu bạn muốn có ngay một giao diện mã QR đẹp mắt (hiển thị Logo ngân hàng, Số tài khoản, Số tiền...), hãy cài đặt thêm gói giao diện thiết kế sẵn:

```bash
npm install @viet-qr/templates
```

```vue
<script setup>
import { CompactCard } from '@viet-qr/templates/vue';
import '@viet-qr/templates/styles.css'; // Bắt buộc import css nếu hệ thống không tự xử lý
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

## 🔘 Nút Thanh Toán (Payment Button & Modal)

Bắt đầu từ bản `v1.3.0`, thư viện cung cấp thêm `VietQRButton` - một nút bấm tích hợp sẵn Modal thanh toán tiện lợi:

```vue
<script setup>
import { VietQRButton } from '@viet-qr/vue';
import '@viet-qr/vue/style.css'; // CSS cho button và modal
</script>

<template>
  <VietQRButton 
    bankId="VCB" 
    accountNo="1122334455"
    accountName="NGUYEN NGOC A"
    :amount="50000"
    content="Thanh toan"
    variant="default" <!-- 'default' | 'outline' | 'ghost' -->
    label="Thanh toán VietQR"
  />
</template>
```

## 🪝 Composable: `useVietQR`

Bạn cũng có thể tự tạo UI mã QR riêng hoàn toàn nhờ vào composable `useVietQR`:

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
    <!-- Dùng qrcode.vue hoặc bất kỳ thư viện vẽ QR nào khác để render qrPayload -->
  </div>
</template>
```

## API Reference (Props)

Component `<VietQR />` kế thừa toàn bộ thuộc tính cấu hình chuẩn NAPAS từ `@viet-qr/core` cộng thêm các tuỳ chỉnh về mặt hiển thị.

| Prop            | Kiểu dữ liệu        | Mô tả                                                                                 |
|-----------------|---------------------|---------------------------------------------------------------------------------------|
| `bankId`        | `string`            | **Bắt buộc**. Mã BIN hoặc tên viết tắt (VD: `VCB`, `MB`, `TCB`).                      |
| `accountNo`     | `string`            | **Bắt buộc**. Số tài khoản người nhận.                                                |
| `accountName`   | `string`            | **Khuyên dùng**. Tên chủ tài khoản (Hiển thị trong Tag 59 của EMVCo). Nếu bỏ trống sẽ tự động hiển thị 'NA'. |
| `amount`        | `number`            | Số tiền (Không bắt buộc). Nếu có sẽ sinh ra mã QR Động, không có sẽ sinh mã QR Tĩnh.  |
| `content`       | `string`            | Nội dung chuyển tiền (Tự động xóa dấu tiếng Việt an toàn).                            |
| `isCard`        | `boolean`           | Chuyển khoản qua số Thẻ (Card Number) thay vì Số tài khoản. Mặc định là `false`.      |
| `renderAs`      | `'svg' \| 'canvas'` | Định dạng hiển thị. Mặc định là `svg`.                                                |
| `size`          | `number`            | Kích thước (pixels). Mặc định là `256`.                                               |
| `fgColor`       | `string`            | Màu các chấm QR (Mặc định: `#000000`).                                                |
| `bgColor`       | `string`            | Màu nền của QR (Mặc định: `#FFFFFF`).                                                 |
| `imageSettings` | `object`            | Cấu hình chèn Logo tùy chỉnh vào trung tâm mã QR.                                     |

## Giấy phép (License)
MIT

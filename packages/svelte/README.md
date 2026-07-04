*Read this in other languages: [English](README.en.md).*

# @viet-qr/svelte

[![npm version](https://img.shields.io/npm/v/@viet-qr/svelte.svg)](https://www.npmjs.com/package/@viet-qr/svelte)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Thành phần Svelte (Svelte Component Wrapper) chuyên dụng để render mã VietQR (chuẩn NAPAS 247) lên giao diện một cách dễ dàng và đẹp mắt. Tương thích hoàn hảo với Svelte 5.

Sử dụng trực tiếp mã lõi siêu nhẹ từ `@viet-qr/core` kết hợp cùng công nghệ vẽ Vector siêu nét.

🌍 **Trang chủ & Demo:** [viet-qr.zeneo.app](https://viet-qr.zeneo.app)

## Cài đặt

```bash
npm install @viet-qr/svelte
# hoặc
pnpm add @viet-qr/svelte
```

## Hướng dẫn sử dụng

Chỉ với vài dòng code, bạn đã có ngay một mã QR thanh toán tích hợp thẳng vào ứng dụng Svelte của mình.

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

Nếu bạn muốn có ngay một giao diện mã QR đẹp mắt (hiển thị Logo ngân hàng, Số tài khoản, Số tiền...), hãy cài đặt thêm gói giao diện thiết kế sẵn:

```bash
npm install @viet-qr/templates
```

```svelte
<script>
  import { CompactCard } from '@viet-qr/templates/svelte';
  import '@viet-qr/templates/styles.css'; // Bắt buộc import css nếu hệ thống không tự xử lý
</script>

<CompactCard 
  bankId="VCB" 
  accountNo="1122334455"
  accountName="NGUYEN NGOC A"
  amount={50000}
  theme="dark"
/>
```

## 🔘 Nút Thanh Toán (Payment Button & Modal)

Bắt đầu từ bản `v1.3.0`, thư viện cung cấp thêm `VietQRButton` - một nút bấm tích hợp sẵn Modal thanh toán tiện lợi:

```svelte
<script>
  import { VietQRButton } from '@viet-qr/svelte';
</script>

<VietQRButton 
  bankId="VCB" 
  accountNo="1122334455"
  accountName="NGUYEN NGOC A"
  amount={50000}
  content="Thanh toan"
  variant="default" <!-- 'default' | 'outline' | 'ghost' -->
  label="Thanh toán VietQR"
/>
```

## 🪝 Store: `useVietQR`

Bạn cũng có thể tự tạo UI mã QR riêng hoàn toàn nhờ vào hook `useVietQR`:

```svelte
<script>
  import { useVietQR } from '@viet-qr/svelte';

  const { qrPayload, isError, generate } = useVietQR({
    bankId: 'VCB',
    accountNo: '1122334455'
  });
</script>

<div>
  <!-- Dùng thư viện vẽ QR bất kỳ để render $qrPayload -->
</div>
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

## ⚠️ Lưu ý cho người dùng Svelte 4

Bắt đầu từ phiên bản `v1.1.0`, thư viện được phân phối giữ nguyên mã nguồn TypeScript (`<script lang="ts">`) để tận dụng tối đa sức mạnh kiểu dữ liệu. Svelte 5 tự động hiểu cú pháp này, nhưng nếu bạn đang dùng **Svelte 4** (hoặc Vite + Svelte cũ), bạn cần cấu hình công cụ build để xử lý TypeScript trong thư viện.

**1. Trong `svelte.config.js`:**
Bạn cần bật `vitePreprocess()` để dịch TypeScript:
```javascript
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: vitePreprocess()
};
```

**2. Trong `vite.config.ts` (hoặc cấu hình Webpack/Rollup tương đương):**
Bạn cần loại trừ thư viện khỏi quá trình gộp (pre-bundling) mặc định của Vite, để Svelte compiler có thể trực tiếp xử lý các file gốc:
```typescript
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  optimizeDeps: {
    // Báo cho Vite biết hãy để Svelte xử lý các gói này
    exclude: ['@viet-qr/svelte', '@viet-qr/templates']
  }
});
```

## Giấy phép (License)
MIT

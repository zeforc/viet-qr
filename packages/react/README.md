# @viet-qr/react

[![npm version](https://img.shields.io/npm/v/@viet-qr/react.svg)](https://www.npmjs.com/package/@viet-qr/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Thành phần React (React Component Wrapper) chuyên dụng để render mã VietQR (chuẩn NAPAS 247) lên giao diện một cách dễ dàng và đẹp mắt.

Sử dụng trực tiếp mã lõi siêu nhẹ từ `@viet-qr/core` kết hợp cùng công nghệ vẽ Vector của `qrcode.react`.

🌍 **Trang chủ & Demo:** [viet-qr.zeneo.app](https://viet-qr.zeneo.app)

## Cài đặt

```bash
npm install @viet-qr/react
# hoặc
pnpm add @viet-qr/react
```

*(Lưu ý: Gói này yêu cầu bạn đã cài đặt sẵn `react` trong dự án của mình).*

## Hướng dẫn sử dụng

Chỉ với vài dòng code, bạn đã có ngay một mã QR thanh toán tích hợp thẳng vào ứng dụng React của mình.

```tsx
import { VietQR } from '@viet-qr/react';

function PaymentPage() {
  return (
    <VietQR 
      bankId="VCB"                // Ngân hàng Vietcombank
      accountNo="1122334455"      // Số tài khoản nhận tiền
      accountName="NGUYEN NGOC A" // Tên chủ tài khoản
      amount={50000}              // Số tiền (Tuỳ chọn)
      content="Chuyen tien cafe"  // Nội dung (Tuỳ chọn)
      renderAs="svg"              // Render dưới dạng SVG sắc nét (hoặc 'canvas')
      size={300}                  // Kích thước 300x300px
      imageSettings={{
        src: "/your-logo.png",    // Đường dẫn Logo muốn chèn vào giữa QR
        width: 50,
        height: 50,
        excavate: true,           // Khoét khoảng trắng để logo không đè lên pattern mã QR
      }}
    />
  );
}
```

## 🎨 Pre-built UI Templates

Nếu bạn muốn có ngay một mã QR đẹp mắt với Card hiển thị Logo ngân hàng, Số tài khoản, Số tiền thay vì chỉ hiển thị mỗi mã QR trống không, hãy sử dụng gói giao diện có sẵn của chúng tôi!

```bash
npm install @viet-qr/templates
```

```tsx
import { CompactCard } from '@viet-qr/templates/react';
import '@viet-qr/templates/style.css'; // Bắt buộc import css nếu hệ thống không tự xử lý

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

## API Reference (Props)

Component `<VietQR />` kế thừa toàn bộ thuộc tính cấu hình chuẩn NAPAS từ `@viet-qr/core` cộng thêm các tuỳ chỉnh về mặt hiển thị.

| Prop            | Kiểu dữ liệu        | Mô tả                                                                                 |
|-----------------|---------------------|---------------------------------------------------------------------------------------|
| `bankId`        | `string`            | **Bắt buộc**. Mã BIN hoặc tên viết tắt (VD: `VCB`, `MB`, `TCB`).                      |
| `accountNo`     | `string`            | **Bắt buộc**. Số tài khoản người nhận.                                                |
| `accountName`   | `string`            | **Khuyên dùng**. Tên chủ tài khoản (Hiển thị trong Tag 59 của EMVCo). Nếu bỏ trống sẽ tự động lấy giá trị 'NA'. |
| `amount`        | `number`            | Số tiền (Không bắt buộc). Nếu có sẽ sinh ra mã QR Động, không có sẽ sinh mã QR Tĩnh.  |
| `content`       | `string`            | Nội dung chuyển tiền (Tự động xóa dấu tiếng Việt an toàn).                            |
| `renderAs`      | `'svg' \| 'canvas'` | Định dạng hiển thị. Mặc định là `svg`.                                                |
| `size`          | `number`            | Kích thước (pixels). Mặc định là `256`.                                               |
| `fgColor`       | `string`            | Màu các chấm QR (Mặc định: `#000000`).                                                |
| `bgColor`       | `string`            | Màu nền của QR (Mặc định: `#FFFFFF`).                                                 |
| `imageSettings` | `object`            | Cấu hình chèn Logo tùy chỉnh vào trung tâm mã QR.                                     |
| `style`         | `object`            | React Inline Style tuỳ chỉnh cho thẻ bọc QR.                                          |

## Giấy phép (License)
MIT

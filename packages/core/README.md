# @viet-qr/core

Thư viện lõi (Core) sinh mã chuẩn EMVCo dành cho chuẩn thanh toán VietQR / NAPAS 247. 
Được thiết kế với tiêu chí **Zero Dependencies** (Không phụ thuộc thư viện bên ngoài), siêu nhẹ, siêu nhanh và hoạt động hoàn toàn Offline.

[![npm version](https://img.shields.io/npm/v/@viet-qr/core.svg)](https://www.npmjs.com/package/@viet-qr/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/zeforc/viet-qr/blob/main/LICENSE)

🌍 **Trang chủ & Demo:** [viet-qr.zeneo.app](https://viet-qr.zeneo.app)
## Tính năng nổi bật
- 🚀 Sinh mã QR tĩnh và động chuẩn NAPAS 247.
- 🎯 Tuân thủ chặt chẽ tiêu chuẩn EMVCo (bao gồm Tag 59: Merchant Name, Tag 60: Merchant City, và Service Code `QRIBFTTA`).
- ⚡ Tính toán mã kiểm tra CRC16-CCITT chuẩn xác, tốc độ cao bằng thuật toán Bitwise nội bộ.
- 🏦 Tích hợp sẵn cơ sở dữ liệu tra cứu ngân hàng Offline với tốc độ Indexing **O(1)**.
- 🛡️ Tự động chuẩn hóa nội dung (Sanitization): Xóa dấu tiếng Việt, xử lý ký tự lạ, và giới hạn độ dài.
- 📦 Tương thích với mọi môi trường JavaScript/TypeScript (Node.js, React, Vue, Svelte, React Native,...).

## 🧩 Hệ sinh thái UI (UI Frameworks)

Vì `@viet-qr/core` là bộ lõi xử lý thuật toán (chỉ sinh ra chuỗi string), chúng tôi đã xây dựng sẵn các gói mở rộng (UI Wrappers) để giúp bạn render ra mã QR một cách nhanh chóng và tối ưu nhất cho từng Framework:

- **React / Next.js:** Giới thiệu gói [`@viet-qr/react`](https://www.npmjs.com/package/@viet-qr/react) - Chuyên dụng cho React, tự động vẽ QR bằng SVG siêu nét và hỗ trợ chèn Logo ở giữa.
- **Vue / Svelte:** (Đang phát triển)

## Cài đặt

```bash
npm install @viet-qr/core
# hoặc
pnpm add @viet-qr/core
# hoặc
yarn add @viet-qr/core
```

## Hướng dẫn sử dụng

### 1. Sinh chuỗi dữ liệu VietQR (Payload)

Hàm `generateVietQR` sẽ trả về một chuỗi văn bản thuần (string) chuẩn EMVCo. Bạn có thể kết hợp chuỗi này với bất kỳ thư viện vẽ QR nào để hiển thị lên màn hình.

```typescript
import { generateVietQR } from '@viet-qr/core';

// 1. Tạo mã QR Tĩnh (Chỉ chứa thông tin tài khoản)
const staticPayload = generateVietQR({
  bankId: 'VCB', // Có thể dùng tên viết tắt (VCB, TCB, MB,...) hoặc số BIN (970436)
  accountNo: '1122334455',
  accountName: 'NGUYEN NGOC A',
  amount: 50000, 
  content: 'Thanh toan don hang'
});
console.log(staticPayload); 

// 2. Tạo mã QR Động (Kèm theo số tiền và nội dung)
const dynamicPayload = generateVietQR({
  bankId: '970407', // BIN của Techcombank
  accountNo: '99999999',
  accountName: 'NGUYEN NGOC A',
  amount: 50000, 
  content: 'Chuyển tiền thanh toán phí dịch vụ' // Code tự động parse thành "Chuyen tien thanh toan phi dich vu"
});
console.log(dynamicPayload);
```

### 2. Tiện ích tra cứu ngân hàng

Nếu bạn cần lấy thông tin chi tiết về một ngân hàng để hiển thị UI:

```typescript
import { getBankByShortName, getBankByBin } from '@viet-qr/core';

const bank = getBankByShortName('VCB');
console.log(bank);
/* Output:
{
  bin: "970436",
  shortName: "VCB",
  name: "Vietcombank",
  fullName: "Ngân hàng TMCP Ngoại thương Việt Nam"
}
*/
```

## API Reference

### `VietQROptions`

| Thuộc tính    | Kiểu dữ liệu | Bắt buộc | Mô tả |
|---------------|--------------|----------|-------|
| `bankId`      | `string`     | **Có**   | Mã BIN ngân hàng (VD: `970436`) hoặc Tên viết tắt (VD: `VCB`). |
| `accountNo`   | `string`     | **Có**   | Số tài khoản nhận tiền. |
| `accountName` | `string`     | Không    | Tên chủ tài khoản (Hiển thị trong Tag 59 của mã QR chuẩn EMVCo). |
| `amount`      | `number`     | Không    | Số tiền cần chuyển (Số nguyên dương lớn hơn 0). Nếu bỏ trống sẽ sinh mã QR Tĩnh. |
| `content`     | `string`     | Không    | Nội dung chuyển khoản (Tự động xóa dấu tiếng Việt và giới hạn tối đa 50 ký tự chuẩn Napas). |


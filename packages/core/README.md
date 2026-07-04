*Read this in other languages: [English](README.en.md).*

# @viet-qr/core

Thư viện lõi (Core) sinh mã chuẩn EMVCo dành cho chuẩn thanh toán VietQR / NAPAS 247.

Được thiết kế với tiêu chí **Zero Dependencies** (Không phụ thuộc thư viện bên ngoài), siêu nhẹ, siêu nhanh và hoạt động hoàn toàn Offline.

<div align="center">
  <p>
    <a href="https://www.npmjs.com/package/@viet-qr/core"><img src="https://img.shields.io/npm/v/@viet-qr/core.svg" alt="npm version" /></a>
    <a href="https://github.com/zeforc/viet-qr/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" /></a>
  </p>

  <h3>
    Tìm hiểu và trải nghiệm <br/>
    <a href="https://viet-qr.zeneo.app">viet-qr.zeneo.app</a>
  </h3>
</div>
<br>

## Tính năng nổi bật của @viet-qr

| Tính năng | Mô tả chi tiết |
| :--- | :--- |
| 🚀 **Tạo mã VietQR** | Hỗ trợ tạo cả mã QR **tĩnh** và **động** (kèm số tiền & nội dung) theo chuẩn NAPAS 247. |
| 🎯 **Chuẩn xác EMVCo** | Tuân thủ chặt chẽ cấu trúc chuẩn, bao gồm *Tag 59 (Merchant Name)*, *Tag 60 (Merchant City)*, và Service Code `QRIBFTTA`. |
| ⚡ **Hiệu năng cực cao** | Tự động tính toán mã kiểm tra CRC16-CCITT siêu tốc bằng thuật toán Bitwise nội bộ (Zero-dependencies). |
| 🏦 **Offline Database** | Tích hợp sẵn cơ sở dữ liệu tra cứu ngân hàng (Tên, BIN, Code) với tốc độ truy xuất **O(1)**. |
| 🛡️ **Auto-Sanitization** | Tự động chuẩn hóa dữ liệu: Xóa dấu tiếng Việt, xử lý ký tự lạ, và tự động cắt chuỗi nếu vượt quá giới hạn cho phép. |
| 💎 **100% Type-Safe** | Viết hoàn toàn bằng TypeScript, cung cấp tính năng autocompletion và kiểm tra kiểu tĩnh (Static Typing) mạnh mẽ. |
| 📦 **Universal & Isomorphic**| Hoạt động hoàn hảo trên mọi môi trường JS/TS: Node.js, React, Vue, Svelte, React Native,... |

## Hệ sinh thái UI (UI Frameworks)

Vì `@viet-qr/core` là bộ lõi xử lý thuật toán (chỉ sinh ra chuỗi string), chúng tôi đã xây dựng sẵn các gói mở rộng (UI Wrappers) để giúp bạn render ra mã QR một cách nhanh chóng và tối ưu nhất cho từng Framework:

| Package | Framework | Mô tả |
| :--- | :--- | :--- |
| [`@viet-qr/react`](https://www.npmjs.com/package/@viet-qr/react) | React / Next.js | Wrapper chuyên dụng, tự động vẽ QR bằng SVG sắc nét. |
| [`@viet-qr/vue`](https://www.npmjs.com/package/@viet-qr/vue) | Vue 3 / Nuxt | Wrapper tối ưu cho hệ sinh thái Vue 3. |
| [`@viet-qr/svelte`](https://www.npmjs.com/package/@viet-qr/svelte) | Svelte 5 / Kit | Wrapper nhẹ nhàng, tương thích hoàn hảo Svelte 5. |
| [`@viet-qr/templates`](https://www.npmjs.com/package/@viet-qr/templates) | Đa nền tảng | Các mẫu Card thanh toán thiết kế sẵn tuyệt đẹp cho React, Vue, Svelte và Vanilla JS (Web Components). |

## Cài đặt

```bash
# npm
npm install @viet-qr/core
# pnpm
pnpm add @viet-qr/core
# yarn
yarn add @viet-qr/core
```

## Hướng dẫn sử dụng

### 1. Sinh & Giải mã chuỗi dữ liệu VietQR (Payload)

#### a. Sinh chuỗi VietQR (Generator)

Hàm `generateVietQR` sẽ trả về một chuỗi văn bản thuần (string) chuẩn EMVCo. Bạn có thể kết hợp chuỗi này với bất kỳ thư viện vẽ QR nào để hiển thị lên màn hình.

```typescript
import { generateVietQR } from '@viet-qr/core';

// 1. Tạo mã QR Tĩnh (Chỉ chứa thông tin tài khoản)
const staticPayload = generateVietQR({
  bankId: 'VCB', // Có thể dùng mã Code (VCB, TCB, MB,...) hoặc số BIN (970436)
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

#### b. Giải mã VietQR (Parser)

Hàm `parseVietQR` giúp bạn giải mã một chuỗi VietQR bất kỳ để lấy thông tin chi tiết:

```typescript
import { parseVietQR } from '@viet-qr/core';

const qrString = "00020101021238580010A000000727012800069704360114112233445566770208QRIBFTTA53037045405500005802VN5913NGUYEN NGOC A6304C929";
const parsed = parseVietQR(qrString);

console.log(parsed.bankId); // "970436"
console.log(parsed.accountNo); // "1122334455"
console.log(parsed.amount); // 50000
```

### 2. Tiện ích tra cứu ngân hàng

Nếu bạn cần lấy thông tin chi tiết về một ngân hàng để hiển thị UI:

```typescript
import { getBankByCode, getBankByBin, getBankByName } from '@viet-qr/core';

// Tra cứu theo mã Code (VD: VCB, TCB)
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

// Tra cứu theo số BIN
const bankByBin = getBankByBin('970436');

// Tra cứu theo tên
const bankByName = getBankByName('Vietcombank');
```

### 3. Cập nhật danh sách ngân hàng động (Runtime)

Từ phiên bản `1.2.0`, bạn có thể lấy danh sách ngân hàng từ API hoặc cập nhật thủ công:

```typescript
import { fetchBankList, setBankList } from '@viet-qr/core';

// Tải danh sách ngân hàng từ một URL (CDN/API)
await fetchBankList('https://example.com/banks.json');

// Hoặc tự ghi đè danh sách bằng dữ liệu tùy chỉnh
setBankList([
  { bin: "970436", code: "VCB", name: "Vietcombank", fullName: "Ngân hàng TMCP Ngoại Thương Việt Nam" },
  // ...
]);
```

### 4. Tiện ích xử lý chuỗi (Utilities)

```typescript
import { removeVietnameseAccents, sanitizeAccountName } from '@viet-qr/core';

// Xóa dấu tiếng Việt, giữ lại các ký tự đặc biệt
console.log(removeVietnameseAccents("Nguyễn Văn A - 123")); 
// => "Nguyen Van A - 123"

// Chuẩn hóa tên tài khoản (Xóa dấu, viết hoa, loại bỏ ký tự không hợp lệ)
console.log(sanitizeAccountName("Nguyễn Văn A - 123")); 
// => "NGUYEN VAN A  123"
```

## API Reference

### `VietQROptions`

| Thuộc tính    | Kiểu dữ liệu | Bắt buộc | Mô tả |
|---------------|--------------|----------|-------|
| `bankId`      | `string`     | **Có**   | Mã BIN ngân hàng (VD: `970436`) hoặc mã Code (VD: `VCB`). |
| `accountNo`   | `string`     | **Có**   | Số tài khoản nhận tiền. |
| `accountName` | `string`     | Không    | Tên chủ tài khoản (Hiển thị trong Tag 59 của mã QR chuẩn EMVCo). |
| `amount`      | `number`     | Không    | Số tiền cần chuyển (Số nguyên dương lớn hơn 0). Nếu bỏ trống sẽ sinh mã QR Tĩnh. |
| `content`     | `string`     | Không    | Nội dung chuyển khoản (Tự động xóa dấu tiếng Việt và giới hạn tối đa 50 ký tự chuẩn Napas). |
| `isCard`      | `boolean`    | Không    | Chuyển khoản qua số Thẻ (Card Number) thay vì Số tài khoản. Mặc định là `false`. |

### `Bank`

| Thuộc tính  | Kiểu dữ liệu | Mô tả |
|-------------|--------------|-------|
| `bin`       | `string`     | Số BIN của ngân hàng (VD: `970436`). |
| `code`      | `string`     | Mã ngân hàng viết tắt (VD: `VCB`, `TCB`). |
| `name`      | `string`     | Tên ngắn của ngân hàng (VD: `Vietcombank`). |
| `fullName`  | `string`     | Tên đầy đủ của ngân hàng (VD: `Ngân hàng TMCP Ngoại Thương Việt Nam`). |
| `swiftCode` | `string`     | Mã SWIFT (tuỳ chọn). |

### Utility Functions

| Hàm | Mô tả |
|-----|-------|
| `generateVietQR(options)` | Sinh chuỗi VietQR từ object `VietQROptions`. |
| `parseVietQR(qrString)` | Giải mã chuỗi VietQR thành object chứa các thông tin (`bankId`, `accountNo`, `amount`,...). |
| `getBankByBin(bin)` | Tra cứu ngân hàng theo số BIN. |
| `getBankByCode(code)` | Tra cứu ngân hàng theo mã Code (VD: `VCB`, `TCB`). |
| `getBankByName(name)` | Tra cứu ngân hàng theo tên ngắn (VD: `Vietcombank`). |
| `setBankList(banks)` | Ghi đè danh sách ngân hàng thủ công. |
| `fetchBankList(url)` | Tải danh sách ngân hàng từ API/CDN. |
| `sanitizeAccountName(name)` | Xóa dấu tiếng Việt, viết hoa, loại bỏ ký tự không hợp lệ. |
| `removeVietnameseAccents(str)` | Xóa dấu tiếng Việt khỏi chuỗi. |

> [!WARNING]
> **Breaking Change (v1.3.0):** Hàm `getBankByShortName()` đã được **đổi tên** thành `getBankByName()`. Vui lòng cập nhật code của bạn.
>
> ```typescript
> // ❌ Cũ (đã bị xóa)
> getBankByShortName('Vietcombank');
>
> // ✅ Mới
> getBankByName('Vietcombank');
> ```

## License
MIT

*Read this in other languages: [English](CONTRIBUTING.md).*

# Đóng góp cho VietQR

Trước tiên, cảm ơn bạn đã quan tâm và muốn đóng góp cho VietQR! Chính những người như bạn đã giúp VietQR trở thành một công cụ tuyệt vời cho cộng đồng.

## Cấu trúc Dự án & Mã nguồn

VietQR hoạt động theo mô hình **mã nguồn đóng nhưng phân phối công khai**. 

Kho lưu trữ (repository) mà bạn đang xem (`github.com/zeforc/viet-qr`) đóng vai trò là nơi phân phối các bản build công khai và theo dõi lỗi (issue tracker). Nó chứa các thư mục đã được biên dịch (`dist/`) và các file cấu hình để phát hành lên NPM.

**Vì mã nguồn lõi (core) được giữ bí mật (private), chúng tôi không nhận các Pull Request trực tiếp (đóng góp sửa đổi code) từ các bản fork của repository này.**

## Cách thức Đóng góp

Mặc dù mã nguồn là private, vẫn có rất nhiều cách để bạn có thể đóng góp tích cực cho dự án!

### 1. Báo cáo Lỗi (Report Bugs) 🐛
Nếu bạn tìm thấy lỗi, vui lòng [tạo một issue](https://github.com/zeforc/viet-qr/issues) trên GitHub. 
Hãy cung cấp càng nhiều thông tin chi tiết càng tốt để giúp chúng tôi tái tạo và sửa lỗi:
- Bạn đang cố gắng làm gì.
- Điều gì thực sự đã xảy ra (Lỗi hiện ra sao).
- Các bước để tái tạo lỗi.
- Môi trường của bạn (Framework, Phiên bản, Trình duyệt, v.v.).

### 2. Yêu cầu Tính năng (Request Features) 💡
Bạn có ý tưởng để làm VietQR tốt hơn? Chúng tôi rất muốn nghe!
[Tạo một yêu cầu tính năng](https://github.com/zeforc/viet-qr/issues) và giải thích:
- Tính năng đó là gì.
- Tại sao nó lại hữu ích.
- Bất kỳ ví dụ nào về cách nó sẽ hoạt động.

### 3. Tham gia Thảo luận (Join Discussions) 💬
Bạn có thể giúp đỡ những người khác và chia sẻ ý tưởng của mình trong phần [Community Discussions](https://github.com/zeforc/viet-qr/discussions) của chúng tôi.
- Trả lời câu hỏi từ các lập trình viên khác.
- Chia sẻ cách bạn áp dụng VietQR vào dự án của mình.
- Bàn luận về các tính năng sắp ra mắt hoặc ý tưởng về kiến trúc.

## Quy trình Phát triển (Dành riêng cho Core Team)

Đối với các thành viên trong team nội bộ có quyền truy cập vào monorepo private:
1. Clone private repository về máy.
2. Đảm bảo đã cài đặt `pnpm` (v8+) và `Node.js` (v18+).
3. Chạy `pnpm install` và `pnpm run dev` để khởi động môi trường local.
4. Tất cả các thay đổi code đều phải đi kèm `vitest` unit tests và vượt qua lệnh `pnpm build` trước khi merge.
5. Tạo Pull Request trên private repository để code review.

---

Cảm ơn bạn đã trở thành một phần của cộng đồng VietQR!

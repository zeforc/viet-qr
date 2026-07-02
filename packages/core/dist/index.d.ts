interface VietQROptions {
    bankId: string;
    accountNo: string;
    accountName?: string;
    amount?: number;
    content?: string;
}
declare function generateVietQR(options: VietQROptions): string;

interface Bank {
    bin: string;
    shortName: string;
    name: string;
    fullName: string;
}
declare const banks: Bank[];

/**
 * Calculates the CRC16-CCITT checksum for a given string
 * Polygon: 0x1021, Initial value: 0xFFFF
 */
declare function calculateCRC16(data: string): string;

/**
 * Cập nhật danh sách ngân hàng bộ nhớ.
 */
declare function setBankList(banks: Bank[]): void;
/**
 * Lấy thông tin ngân hàng qua mã BIN (O(1))
 */
declare function getBankByBin(bin: string): Bank | undefined;
/**
 * Lấy thông tin ngân hàng qua mã Tên viết tắt (shortName) (O(1))
 */
declare function getBankByShortName(shortName: string): Bank | undefined;
/**
 * Cập nhật danh sách ngân hàng từ một API hoặc CDN bất kỳ.
 * API/CDN trả về phải có cấu trúc giống hệt API v2/banks của vietqr.io (có mảng .data)
 * HOẶC là mảng JSON thuần tuân theo interface Bank[] của thư viện này.
 */
declare function fetchBankList(url: string): Promise<void>;

/**
 * Chuyển đổi chuỗi tiếng Việt có dấu thành không dấu.
 * Giữ lại các ký tự ASCII an toàn cho chuẩn EMVCo.
 */
declare function removeVietnameseAccents(str: string): string;
/**
 * Chuẩn hóa nội dung chuyển khoản cho VietQR.
 * Xóa dấu tiếng Việt và giới hạn độ dài ở mức 50 ký tự (chuẩn NAPAS).
 */
declare function sanitizeContent(content: string): string;
/**
 * Chuẩn hóa tên tài khoản (Account Name).
 * Tự động xóa dấu tiếng Việt, chuyển sang CHỮ HOA, và giới hạn 50 ký tự.
 */
declare function sanitizeAccountName(name: string): string;

export { type Bank, type VietQROptions, banks, calculateCRC16, fetchBankList, generateVietQR, getBankByBin, getBankByShortName, removeVietnameseAccents, sanitizeAccountName, sanitizeContent, setBankList };

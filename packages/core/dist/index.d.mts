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
 * Lấy thông tin ngân hàng qua mã BIN (O(1))
 */
declare function getBankByBin(bin: string): Bank | undefined;
/**
 * Lấy thông tin ngân hàng qua mã Tên viết tắt (shortName) (O(1))
 */
declare function getBankByShortName(shortName: string): Bank | undefined;

export { type Bank, type VietQROptions, banks, calculateCRC16, generateVietQR, getBankByBin, getBankByShortName };

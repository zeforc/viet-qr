import React from 'react';
import { VietQROptions } from '@viet-qr/core';

interface VietQRProps extends VietQROptions {
    /**
     * Định dạng xuất mã QR
     * - svg: Độ phân giải vô hạn, rất sắc nét (mặc định)
     * - canvas: Trả về thẻ <canvas>, hỗ trợ tốt việc Download làm ảnh tĩnh.
     */
    renderAs?: 'svg' | 'canvas';
    /**
     * Kích thước của mã QR (pixel). Mặc định là 256.
     */
    size?: number;
    /**
     * Màu nền mã QR. Mặc định '#FFFFFF'
     */
    bgColor?: string;
    /**
     * Màu của các chấm QR. Mặc định '#000000'
     */
    fgColor?: string;
    /**
     * Mức độ tự sửa lỗi. 'L' | 'M' | 'Q' | 'H'.
     * Nếu bạn chèn Logo bằng imageSettings, nên để 'Q' hoặc 'H'. Mặc định 'Q'.
     */
    level?: 'L' | 'M' | 'Q' | 'H';
    /**
     * Kích hoạt vùng biên trắng bao quanh QR.
     */
    includeMargin?: boolean;
    /**
     * Cấu hình chèn Logo vào giữa mã QR
     */
    imageSettings?: {
        src: string;
        height: number;
        width: number;
        excavate?: boolean;
        x?: number;
        y?: number;
    };
    className?: string;
    style?: React.CSSProperties;
}
declare const VietQR: React.FC<VietQRProps>;

interface UseVietQRReturn {
    /** Chuỗi EMVCo payload (rỗng nếu lỗi) */
    payload: string;
    /** True nếu payload được tạo thành công */
    isValid: boolean;
    /** Thông báo lỗi nếu có */
    error: string | null;
}
/**
 * Hook tiện ích để sinh và quản lý VietQR payload một cách reactive.
 *
 * @example
 * const { payload, isValid, error } = useVietQR({
 *   bankId: 'VCB',
 *   accountNo: '1234567890',
 *   amount: 50000,
 * });
 */
declare function useVietQR(options: VietQROptions): UseVietQRReturn;

interface VietQRButtonProps extends VietQROptions {
    /**
     * Nhãn hiển thị trên nút bấm. Mặc định: "Thanh toán VietQR"
     */
    label?: string;
    /**
     * Kích thước QR hiển thị trong modal (pixel). Mặc định: 260
     */
    size?: number;
    /**
     * Giao diện màu sắc của nút. Mặc định: 'default'
     */
    variant?: 'default' | 'outline' | 'ghost';
    /**
     * Giao diện sáng/tối của Modal hiển thị QR. Mặc định: 'light'
     */
    theme?: 'light' | 'dark';
    /**
     * CSS class tùy chỉnh cho nút bấm
     */
    className?: string;
    /**
     * Callback khi modal mở
     */
    onOpen?: () => void;
    /**
     * Callback khi modal đóng
     */
    onClose?: () => void;
}
/**
 * Nút bấm "Thanh toán VietQR" tích hợp Modal hiển thị mã QR.
 * Khi click, một Modal sẽ hiện ra chứa QR code để người dùng quét thanh toán.
 *
 * @example
 * <VietQRButton
 *   bankId="VCB"
 *   accountNo="1234567890"
 *   accountName="NGUYEN VAN A"
 *   amount={50000}
 *   label="Thanh toán ngay"
 * />
 */
declare const VietQRButton: React.FC<VietQRButtonProps>;

export { type UseVietQRReturn, VietQR, VietQRButton, type VietQRButtonProps, type VietQRProps, useVietQR };

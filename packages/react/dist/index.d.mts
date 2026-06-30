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
        excavate: boolean;
        x?: number;
        y?: number;
    };
    className?: string;
    style?: React.CSSProperties;
}
declare const VietQR: React.FC<VietQRProps>;

export { VietQR, type VietQRProps };

import { VietQROptions } from '@viet-qr/core';
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
}
declare const _default: import('vue').DefineComponent<VietQRButtonProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => any;
    open: () => any;
}, string, import('vue').PublicProps, Readonly<VietQRButtonProps> & Readonly<{
    onClose?: (() => any) | undefined;
    onOpen?: (() => any) | undefined;
}>, {
    size: number;
    label: string;
    variant: "default" | "outline" | "ghost";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;

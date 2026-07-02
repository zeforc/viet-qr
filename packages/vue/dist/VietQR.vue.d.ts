import { VietQROptions } from '@viet-qr/core';
interface VietQRProps extends VietQROptions {
    renderAs?: 'svg' | 'canvas';
    size?: number;
    className?: string;
    imageSettings?: {
        src: string;
        height: number;
        width: number;
        excavate: boolean;
    };
}
declare const _default: import('vue').DefineComponent<VietQRProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<VietQRProps> & Readonly<{}>, {
    renderAs: "svg" | "canvas";
    size: number;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;

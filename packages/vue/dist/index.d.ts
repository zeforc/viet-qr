import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { PublicProps } from 'vue';
import { VietQROptions } from '@viet-qr/core';

declare const _default: DefineComponent<VietQRProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<VietQRProps> & Readonly<{}>, {
renderAs: "svg" | "canvas";
size: number;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;
export { _default as VietQR }
export default _default;

declare interface VietQRProps extends VietQROptions {
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

export { }

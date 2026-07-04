interface $$__sveltets_2_IsomorphicComponent<Props extends Record<string, any> = any, Events extends Record<string, any> = any, Slots extends Record<string, any> = any, Exports = {}, Bindings = string> {
    new (options: import('svelte').ComponentConstructorOptions<Props>): import('svelte').SvelteComponent<Props, Events, Slots> & {
        $$bindings?: Bindings;
    } & Exports;
    (internal: unknown, props: Props & {
        $$events?: Events;
        $$slots?: Slots;
    }): Exports & {
        $set?: any;
        $on?: any;
    };
    z_$$bindings?: Bindings;
}
declare const VietQR: $$__sveltets_2_IsomorphicComponent<{
    bankId: string;
    accountNo: string;
    accountName?: string | undefined;
    amount?: number | undefined;
    content?: string | undefined;
    isCard?: boolean;
    size?: number;
    renderAs?: "svg" | "canvas";
    level?: "L" | "M" | "Q" | "H";
    imageSettings?: {
        src: string;
        width: number;
        height: number;
        excavate?: boolean;
    } | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type VietQR = InstanceType<typeof VietQR>;
export default VietQR;

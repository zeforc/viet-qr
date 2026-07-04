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
declare const VietQRButton: $$__sveltets_2_IsomorphicComponent<{
    bankId: string;
    accountNo: string;
    accountName?: string | undefined;
    amount?: number | undefined;
    content?: string | undefined;
    isCard?: boolean;
    label?: string;
    size?: number;
    variant?: "default" | "outline" | "ghost";
    theme?: "light" | "dark";
}, {
    open: CustomEvent<void>;
    close: CustomEvent<void>;
} & {
    [evt: string]: CustomEvent<any>;
}, {}, {}, string>;
type VietQRButton = InstanceType<typeof VietQRButton>;
export default VietQRButton;

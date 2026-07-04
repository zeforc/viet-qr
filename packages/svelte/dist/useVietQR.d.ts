import { type Readable } from 'svelte/store';
import { type VietQROptions } from '@viet-qr/core';
export interface UseVietQRReturn {
    /** Chuỗi EMVCo payload (rỗng nếu lỗi) */
    payload: string;
    /** True nếu payload được tạo thành công */
    isValid: boolean;
    /** Thông báo lỗi nếu có */
    error: string | null;
}
/**
 * Hook/Store tiện ích để sinh và quản lý VietQR payload một cách reactive cho Svelte.
 *
 * @example
 * import { writable } from 'svelte/store';
 * const options = writable({ bankId: 'VCB', accountNo: '123' });
 * const qrState = useVietQR(options);
 *
 * $: console.log($qrState.payload);
 */
export declare function useVietQR(optionsStore: Readable<VietQROptions>): Readable<UseVietQRReturn>;

import { derived } from 'svelte/store';
import { generateVietQR } from '@viet-qr/core';
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
export function useVietQR(optionsStore) {
    return derived(optionsStore, ($options) => {
        try {
            const payload = generateVietQR($options);
            return { payload, isValid: true, error: null };
        }
        catch (e) {
            const message = e instanceof Error ? e.message : 'Unknown error';
            return { payload: '', isValid: false, error: message };
        }
    });
}

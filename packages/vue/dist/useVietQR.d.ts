import { ComputedRef } from 'vue';
import { VietQROptions } from '@viet-qr/core';
export interface UseVietQRReturn {
    /** Chuỗi EMVCo payload (rỗng nếu lỗi) */
    payload: ComputedRef<string>;
    /** True nếu payload được tạo thành công */
    isValid: ComputedRef<boolean>;
    /** Thông báo lỗi nếu có */
    error: ComputedRef<string | null>;
}
/**
 * Composable tiện ích để sinh và quản lý VietQR payload một cách reactive.
 *
 * @example
 * const { payload, isValid, error } = useVietQR({
 *   bankId: 'VCB',
 *   accountNo: '1234567890',
 *   amount: 50000,
 * });
 */
export declare function useVietQR(options: VietQROptions | ComputedRef<VietQROptions>): UseVietQRReturn;

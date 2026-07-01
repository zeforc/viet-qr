import React from 'react';
import { VietQRProps } from '@viet-qr/react';

interface CompactCardProps extends VietQRProps {
    bankLogo?: string;
    theme?: 'light' | 'dark';
}
declare const CompactCard: React.FC<CompactCardProps>;

interface PayStandeeProps extends VietQRProps {
    title?: string;
    subtitle?: string;
    theme?: 'light' | 'dark';
}
declare const PayStandee: React.FC<PayStandeeProps>;

export { CompactCard, type CompactCardProps, PayStandee, type PayStandeeProps };

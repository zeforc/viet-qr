import { DefineComponent } from 'vue';
export interface PayStandeeProps {
  bankId: string;
  accountNo: string;
  accountName?: string;
  amount?: number;
  content?: string;
  size?: number;
  renderAs?: 'svg' | 'canvas';
  title?: string;
  subtitle?: string;
  theme?: 'light' | 'dark';
  imageSettings?: { src: string; width: number; height: number; excavate: boolean };
}

declare const _default: DefineComponent<PayStandeeProps>;
export default _default;

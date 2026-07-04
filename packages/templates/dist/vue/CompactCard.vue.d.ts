import { DefineComponent } from 'vue';
export interface CompactCardProps {
  bankId: string;
  accountNo: string;
  accountName?: string;
  amount?: number;
  content?: string;
  size?: number;
  renderAs?: 'svg' | 'canvas';
  bankLogo?: string;
  theme?: 'light' | 'dark';
  imageSettings?: { src: string; width: number; height: number; excavate: boolean };
}

declare const _default: DefineComponent<CompactCardProps>;
export default _default;

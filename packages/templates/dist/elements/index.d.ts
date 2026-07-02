declare class VietQRCompactCard extends HTMLElement {
    static get observedAttributes(): string[];
    private qrContainer;
    private logoImg;
    private bankNameH3;
    private accountNameP;
    private accountNoP;
    private amountP;
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(): void;
    private renderInitial;
    private updateData;
}

declare class VietQRPayStandee extends HTMLElement {
    static get observedAttributes(): string[];
    private qrContainer;
    private titleH2;
    private subtitleP;
    private nameH3;
    private accountP;
    private bankP;
    constructor();
    connectedCallback(): void;
    attributeChangedCallback(): void;
    private renderInitial;
    private updateData;
}

/**
 * Đăng ký các Web Components (Custom Elements) vào trình duyệt.
 * Sau khi gọi hàm này, bạn có thể sử dụng các thẻ HTML như:
 * <viet-qr-compact></viet-qr-compact>
 * <viet-qr-standee></viet-qr-standee>
 */
declare function registerElements(): void;

export { VietQRCompactCard, VietQRPayStandee, registerElements };

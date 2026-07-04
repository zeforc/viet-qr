import{generateVietQR as q}from"@viet-qr/core";import x from"qrcode";var m=class extends HTMLElement{static get observedAttributes(){return["bank-id","account-no","account-name","amount","content","size"]}qrContainer=null;constructor(){super()}connectedCallback(){this.renderInitial(),this.updateData()}attributeChangedCallback(){this.updateData()}renderInitial(){this.innerHTML=`
      <div class="vqr-basic" id="qr-container" style="display: flex; justify-content: center; align-items: center;">
        <!-- QR Code SVG will be injected here -->
      </div>
    `,this.qrContainer=this.querySelector("#qr-container")}async updateData(){if(!this.qrContainer)return;let t=this.getAttribute("bank-id")||"",e=this.getAttribute("account-no")||"",n=this.getAttribute("account-name")||"",o=this.getAttribute("amount"),r=o?parseInt(o,10):void 0,l=this.getAttribute("content")||"",c=parseInt(this.getAttribute("size")||"240",10);if(t&&e)try{let s=q({bankId:t,accountNo:e,accountName:n,amount:r,content:l}),i=await x.toString(s,{type:"svg",width:c,margin:1,color:{dark:"#000000",light:"#ffffff"}});this.qrContainer.innerHTML=i}catch(s){console.error("Failed to generate VietQR:",s),this.qrContainer.innerHTML='<p style="color: red;">Invalid QR Data</p>'}else this.qrContainer.innerHTML=""}};import{generateVietQR as k,getBankByBin as _,getBankByCode as w,sanitizeAccountName as H}from"@viet-qr/core";import C from"qrcode";var v=class extends HTMLElement{static get observedAttributes(){return["bank-id","account-no","account-name","amount","content","size","bank-logo","theme"]}qrContainer=null;logoImg=null;bankNameH3=null;accountNameP=null;accountNoP=null;amountP=null;constructor(){super()}connectedCallback(){this.renderInitial(),this.updateData()}attributeChangedCallback(){this.updateData()}renderInitial(){let t=this.getAttribute("theme")||"light";this.innerHTML=`
      <div class="vqr-compact-card vqr-theme-${t}" id="card-wrapper">
        <div class="vqr-compact-card__header">
          <img id="logo-img" class="vqr-compact-card__logo" style="display: none;" />
          <h3 id="bank-name-h3" class="vqr-compact-card__bank-name" style="display: none;"></h3>
        </div>

        <div class="vqr-compact-card__qr-wrapper" id="qr-container">
          <!-- QR Code SVG will be injected here -->
        </div>

        <div class="vqr-compact-card__info">
          <div class="vqr-compact-card__info-row" id="account-name-row" style="display: none;">
            <span class="vqr-compact-card__label">T\xEAn t\xE0i kho\u1EA3n</span>
            <p class="vqr-compact-card__value" id="account-name-p"></p>
          </div>
          
          <div class="vqr-compact-card__info-row">
            <span class="vqr-compact-card__label">S\u1ED1 t\xE0i kho\u1EA3n</span>
            <p class="vqr-compact-card__value" id="account-no-p"></p>
          </div>

          <div class="vqr-compact-card__info-row" id="amount-row" style="margin-top: 16px; display: none;">
            <span class="vqr-compact-card__label">Thanh to\xE1n</span>
            <p class="vqr-compact-card__amount" id="amount-p"></p>
          </div>
        </div>
      </div>
    `,this.qrContainer=this.querySelector("#qr-container"),this.logoImg=this.querySelector("#logo-img"),this.bankNameH3=this.querySelector("#bank-name-h3"),this.accountNameP=this.querySelector("#account-name-p"),this.accountNoP=this.querySelector("#account-no-p"),this.amountP=this.querySelector("#amount-p")}async updateData(){if(!this.qrContainer)return;let t=this.getAttribute("bank-id")||"",e=this.getAttribute("account-no")||"",n=this.getAttribute("account-name")||"",o=this.getAttribute("amount"),r=o?parseInt(o,10):void 0,l=this.getAttribute("content")||"",c=parseInt(this.getAttribute("size")||"240",10),s=this.getAttribute("bank-logo"),i=this.getAttribute("theme")||"light",d=this.querySelector("#card-wrapper");d&&(d.className=`vqr-compact-card vqr-theme-${i}`);let h=(_(t)||w(t))?.name||t;if(s&&this.logoImg&&this.bankNameH3?(this.logoImg.src=s,this.logoImg.alt=h,this.logoImg.style.display="block",this.bankNameH3.style.display="none"):this.bankNameH3&&this.logoImg&&(this.bankNameH3.textContent=h,this.bankNameH3.style.display="block",this.logoImg.style.display="none"),this.accountNameP){let a=this.querySelector("#account-name-row");n?(this.accountNameP.textContent=H(n),a.style.display="flex"):a.style.display="none"}if(this.accountNoP&&(this.accountNoP.textContent=e),this.amountP){let a=this.querySelector("#amount-row");r?(this.amountP.textContent=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(r),a.style.display="flex"):a.style.display="none"}if(t&&e)try{let a=k({bankId:t,accountNo:e,accountName:n,amount:r,content:l}),p=await C.toString(a,{type:"svg",width:c,margin:1,color:{dark:"#000000",light:"#ffffff"}});this.qrContainer.innerHTML=p}catch(a){console.error("Failed to generate VietQR:",a),this.qrContainer.innerHTML='<p style="color: red;">Invalid QR Data</p>'}}};import{generateVietQR as E,getBankByBin as L,getBankByCode as P,sanitizeAccountName as N}from"@viet-qr/core";import M from"qrcode";var b=class extends HTMLElement{static get observedAttributes(){return["bank-id","account-no","account-name","amount","content","size","title","subtitle","theme"]}qrContainer=null;titleH2=null;subtitleP=null;nameH3=null;accountP=null;bankP=null;constructor(){super()}connectedCallback(){this.renderInitial(),this.updateData()}attributeChangedCallback(){this.updateData()}renderInitial(){let t=this.getAttribute("theme")||"light";this.innerHTML=`
      <div class="vqr-pay-standee vqr-theme-${t}" id="standee-wrapper">
        <div class="vqr-pay-standee__banner">
          <h2 class="vqr-pay-standee__title" id="standee-title"></h2>
          <p class="vqr-pay-standee__subtitle" id="standee-subtitle"></p>
        </div>

        <div class="vqr-pay-standee__body">
          <div class="vqr-pay-standee__qr-wrapper" id="qr-container">
          </div>

          <div class="vqr-pay-standee__info">
            <h3 class="vqr-pay-standee__name" id="standee-name" style="display: none;"></h3>
            <p class="vqr-pay-standee__account" id="standee-account"></p>
            <p class="vqr-pay-standee__bank" id="standee-bank"></p>
          </div>
        </div>
      </div>
    `,this.qrContainer=this.querySelector("#qr-container"),this.titleH2=this.querySelector("#standee-title"),this.subtitleP=this.querySelector("#standee-subtitle"),this.nameH3=this.querySelector("#standee-name"),this.accountP=this.querySelector("#standee-account"),this.bankP=this.querySelector("#standee-bank")}async updateData(){if(!this.qrContainer)return;let t=this.getAttribute("bank-id")||"",e=this.getAttribute("account-no")||"",n=this.getAttribute("account-name")||"",o=this.getAttribute("amount"),r=o?parseInt(o,10):void 0,l=this.getAttribute("content")||"",c=parseInt(this.getAttribute("size")||"200",10),s=this.getAttribute("title")||"Qu\xE9t m\xE3 \u0111\u1EC3 thanh to\xE1n",i=this.getAttribute("subtitle")||"H\u1ED7 tr\u1EE3 \u1EE9ng d\u1EE5ng ng\xE2n h\xE0ng & v\xED \u0111i\u1EC7n t\u1EED",d=this.getAttribute("theme")||"light",u=this.querySelector("#standee-wrapper");u&&(u.className=`vqr-pay-standee vqr-theme-${d}`),this.titleH2&&(this.titleH2.textContent=s),this.subtitleP&&(this.subtitleP.textContent=i);let a=(L(t)||P(t))?.name||t;if(this.nameH3&&(n?(this.nameH3.textContent=N(n),this.nameH3.style.display="block"):this.nameH3.style.display="none"),this.accountP&&(this.accountP.textContent=e),this.bankP&&(this.bankP.textContent=`Ng\xE2n h\xE0ng ${a}`),t&&e)try{let p=E({bankId:t,accountNo:e,accountName:n,amount:r,content:l}),f=await M.toString(p,{type:"svg",width:c,margin:1,color:{dark:"#000000",light:"#ffffff"}});this.qrContainer.innerHTML=f}catch(p){console.error("Failed to generate VietQR:",p),this.qrContainer.innerHTML='<p style="color: red;">Invalid QR Data</p>'}}};import{generateVietQR as T}from"@viet-qr/core";import S from"qrcode";var g=class extends HTMLElement{static get observedAttributes(){return["bank-id","account-no","account-name","amount","content","size","label","variant"]}button=null;overlay=null;qrContainer=null;amountP=null;accountNameP=null;accountNoP=null;isOpen=!1;constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.renderInitial(),this.updateData(),this.bindEvents()}disconnectedCallback(){this.unbindEvents()}attributeChangedCallback(){this.button&&this.updateData()}renderInitial(){let t=this.getAttribute("variant")||"default",e=this.getAttribute("label")||"Thanh to\xE1n VietQR";this.shadowRoot.innerHTML=`
      <style>
        .vqr-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          font-family: inherit;
          transition: all 0.2s ease;
        }
        .vqr-btn:hover { filter: brightness(1.08); transform: translateY(-1px); }
        .vqr-btn:active { transform: translateY(0); }
        .vqr-btn--default { background: linear-gradient(135deg, #0051cc 0%, #0070f3 100%); color: #ffffff; box-shadow: 0 2px 8px rgba(0, 112, 243, 0.35); }
        .vqr-btn--outline { background: transparent; color: #0070f3; border: 2px solid #0070f3; }
        .vqr-btn--ghost { background: rgba(0, 112, 243, 0.08); color: #0070f3; }
        
        .vqr-overlay {
          position: fixed; inset: 0; background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px);
          display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 16px;
          opacity: 0; transition: opacity 0.2s ease;
        }
        .vqr-modal {
          background: #ffffff; border-radius: 20px; padding: 28px 24px 24px;
          width: 100%; max-width: 340px; position: relative; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
          transform: translateY(20px); transition: transform 0.25s ease, opacity 0.2s ease; opacity: 0;
        }
        .vqr-modal.show { transform: translateY(0); opacity: 1; }
        .vqr-modal__close {
          position: absolute; top: 14px; right: 16px; background: rgba(0,0,0,0.07);
          border: none; border-radius: 50%; width: 32px; height: 32px; display: flex;
          align-items: center; justify-content: center; cursor: pointer; font-size: 16px; color: #666; transition: background 0.2s;
        }
        .vqr-modal__close:hover { background: rgba(0,0,0,0.14); }
        .vqr-modal__title { text-align: center; margin: 0 0 16px 0; font-weight: 700; font-size: 17px; color: #000; }
        .vqr-modal__qr {
          display: flex; justify-content: center; align-items: center; padding: 12px;
          background: #f8f9fa; border-radius: 12px; margin-bottom: 16px;
        }
        .vqr-modal__amount { text-align: center; font-weight: 700; font-size: 16px; color: #0070f3; margin: 0 0 6px 0; }
        .vqr-modal__hint { text-align: center; font-size: 13px; color: #888; margin: 0 0 4px 0; }
      </style>

      <button class="vqr-btn vqr-btn--${t}" type="button">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
          <line x1="14" y1="14" x2="14" y2="14"/><line x1="17" y1="14" x2="17" y2="14"/><line x1="20" y1="14" x2="20" y2="14"/>
          <line x1="14" y1="17" x2="14" y2="17"/><line x1="17" y1="17" x2="20" y2="17"/>
          <line x1="20" y1="20" x2="20" y2="20"/>
        </svg>
        <span class="vqr-btn-label">${e}</span>
      </button>

      <div class="vqr-overlay" style="display: none;" role="dialog" aria-modal="true">
        <div class="vqr-modal">
          <button class="vqr-modal__close" aria-label="\u0110\xF3ng">\u2715</button>
          <p class="vqr-modal__title">Qu\xE9t m\xE3 \u0111\u1EC3 thanh to\xE1n</p>
          <div class="vqr-modal__qr"></div>
          <p class="vqr-modal__amount"></p>
          <p class="vqr-modal__hint account-name"></p>
          <p class="vqr-modal__hint account-no"></p>
        </div>
      </div>
    `,this.button=this.shadowRoot.querySelector(".vqr-btn"),this.overlay=this.shadowRoot.querySelector(".vqr-overlay"),this.qrContainer=this.shadowRoot.querySelector(".vqr-modal__qr"),this.amountP=this.shadowRoot.querySelector(".vqr-modal__amount"),this.accountNameP=this.shadowRoot.querySelector(".account-name"),this.accountNoP=this.shadowRoot.querySelector(".account-no")}bindEvents(){this.button?.addEventListener("click",this.openModal),this.shadowRoot.querySelector(".vqr-modal__close")?.addEventListener("click",this.closeModal),this.overlay?.addEventListener("click",e=>{e.target===this.overlay&&this.closeModal()}),document.addEventListener("keydown",this.handleKeydown)}unbindEvents(){this.button?.removeEventListener("click",this.openModal),document.removeEventListener("keydown",this.handleKeydown)}openModal=()=>{this.isOpen=!0,this.overlay&&(this.overlay.style.display="flex",this.overlay.offsetWidth,this.overlay.style.opacity="1");let t=this.shadowRoot.querySelector(".vqr-modal");t&&t.classList.add("show"),document.body.style.overflow="hidden"};closeModal=()=>{if(this.isOpen=!1,this.overlay){this.overlay.style.opacity="0";let t=this.shadowRoot.querySelector(".vqr-modal");t&&t.classList.remove("show"),setTimeout(()=>{!this.isOpen&&this.overlay&&(this.overlay.style.display="none")},200)}document.body.style.overflow=""};handleKeydown=t=>{t.key==="Escape"&&this.isOpen&&this.closeModal()};updateData(){let t=this.getAttribute("bank-id"),e=this.getAttribute("account-no");if(!t||!e)return;let n=this.getAttribute("account-name"),o=this.getAttribute("amount"),r=o?parseInt(o,10):void 0,l=this.getAttribute("content")||void 0,c=this.getAttribute("label")||"Thanh to\xE1n VietQR",s=this.getAttribute("variant")||"default";if(this.button){this.button.className="vqr-btn vqr-btn--"+s;let i=this.button.querySelector(".vqr-btn-label");i&&(i.textContent=c)}this.amountP&&(r?(this.amountP.textContent=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(r),this.amountP.style.display="block"):this.amountP.style.display="none"),this.accountNameP&&(n?(this.accountNameP.textContent=n,this.accountNameP.style.display="block"):this.accountNameP.style.display="none"),this.accountNoP&&(this.accountNoP.textContent=e);try{let i=T({bankId:t,accountNo:e,accountName:n||void 0,amount:r,content:l}),d=this.getAttribute("size"),u=d?parseInt(d,10):260;S.toString(i,{type:"svg",width:u,margin:0,errorCorrectionLevel:"Q"},(h,a)=>{!h&&this.qrContainer&&(this.qrContainer.innerHTML=a)})}catch(i){console.error("VietQR Generation Error:",i),this.qrContainer&&(this.qrContainer.innerHTML="")}}};function J(){typeof window<"u"&&window.customElements&&(customElements.get("viet-qr-basic")||customElements.define("viet-qr-basic",m),customElements.get("viet-qr-compact")||customElements.define("viet-qr-compact",v),customElements.get("viet-qr-standee")||customElements.define("viet-qr-standee",b),customElements.get("viet-qr-button")||customElements.define("viet-qr-button",g))}export{m as VietQRBasic,g as VietQRButtonElement,v as VietQRCompactCard,b as VietQRPayStandee,J as registerElements};
//# sourceMappingURL=index.mjs.map
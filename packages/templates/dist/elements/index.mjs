import{generateVietQR as y,getBankByBin as q,getBankByShortName as f,sanitizeAccountName as k}from"@viet-qr/core";import _ from"qrcode";var l=class extends HTMLElement{static get observedAttributes(){return["bank-id","account-no","account-name","amount","content","size","bank-logo","theme"]}qrContainer=null;logoImg=null;bankNameH3=null;accountNameP=null;accountNoP=null;amountP=null;constructor(){super()}connectedCallback(){this.renderInitial(),this.updateData()}attributeChangedCallback(){this.updateData()}renderInitial(){let t=this.getAttribute("theme")||"light";this.innerHTML=`
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
    `,this.qrContainer=this.querySelector("#qr-container"),this.logoImg=this.querySelector("#logo-img"),this.bankNameH3=this.querySelector("#bank-name-h3"),this.accountNameP=this.querySelector("#account-name-p"),this.accountNoP=this.querySelector("#account-no-p"),this.amountP=this.querySelector("#amount-p")}async updateData(){if(!this.qrContainer)return;let t=this.getAttribute("bank-id")||"",n=this.getAttribute("account-no")||"",a=this.getAttribute("account-name")||"",i=this.getAttribute("amount"),s=i?parseInt(i,10):void 0,u=this.getAttribute("content")||"",m=parseInt(this.getAttribute("size")||"240",10),o=this.getAttribute("bank-logo"),h=this.getAttribute("theme")||"light",c=this.querySelector("#card-wrapper");c&&(c.className=`vqr-compact-card vqr-theme-${h}`);let g=(q(t)||f(t))?.shortName||t;if(o&&this.logoImg&&this.bankNameH3?(this.logoImg.src=o,this.logoImg.alt=g,this.logoImg.style.display="block",this.bankNameH3.style.display="none"):this.bankNameH3&&this.logoImg&&(this.bankNameH3.textContent=g,this.bankNameH3.style.display="block",this.logoImg.style.display="none"),this.accountNameP){let e=this.querySelector("#account-name-row");a?(this.accountNameP.textContent=k(a),e.style.display="flex"):e.style.display="none"}if(this.accountNoP&&(this.accountNoP.textContent=n),this.amountP){let e=this.querySelector("#amount-row");s?(this.amountP.textContent=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(s),e.style.display="flex"):e.style.display="none"}if(t&&n)try{let e=y({bankId:t,accountNo:n,accountName:a,amount:s,content:u}),r=await _.toString(e,{type:"svg",width:m,margin:1,color:{dark:"#000000",light:"#ffffff"}});this.qrContainer.innerHTML=r}catch(e){console.error("Failed to generate VietQR:",e),this.qrContainer.innerHTML='<p style="color: red;">Invalid QR Data</p>'}}};import{generateVietQR as H,getBankByBin as N,getBankByShortName as P,sanitizeAccountName as C}from"@viet-qr/core";import w from"qrcode";var d=class extends HTMLElement{static get observedAttributes(){return["bank-id","account-no","account-name","amount","content","size","title","subtitle","theme"]}qrContainer=null;titleH2=null;subtitleP=null;nameH3=null;accountP=null;bankP=null;constructor(){super()}connectedCallback(){this.renderInitial(),this.updateData()}attributeChangedCallback(){this.updateData()}renderInitial(){let t=this.getAttribute("theme")||"light";this.innerHTML=`
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
    `,this.qrContainer=this.querySelector("#qr-container"),this.titleH2=this.querySelector("#standee-title"),this.subtitleP=this.querySelector("#standee-subtitle"),this.nameH3=this.querySelector("#standee-name"),this.accountP=this.querySelector("#standee-account"),this.bankP=this.querySelector("#standee-bank")}async updateData(){if(!this.qrContainer)return;let t=this.getAttribute("bank-id")||"",n=this.getAttribute("account-no")||"",a=this.getAttribute("account-name")||"",i=this.getAttribute("amount"),s=i?parseInt(i,10):void 0,u=this.getAttribute("content")||"",m=parseInt(this.getAttribute("size")||"200",10),o=this.getAttribute("title")||"Qu\xE9t m\xE3 \u0111\u1EC3 thanh to\xE1n",h=this.getAttribute("subtitle")||"H\u1ED7 tr\u1EE3 \u1EE9ng d\u1EE5ng ng\xE2n h\xE0ng & v\xED \u0111i\u1EC7n t\u1EED",c=this.getAttribute("theme")||"light",p=this.querySelector("#standee-wrapper");p&&(p.className=`vqr-pay-standee vqr-theme-${c}`),this.titleH2&&(this.titleH2.textContent=o),this.subtitleP&&(this.subtitleP.textContent=h);let e=(N(t)||P(t))?.shortName||t;if(this.nameH3&&(a?(this.nameH3.textContent=C(a),this.nameH3.style.display="block"):this.nameH3.style.display="none"),this.accountP&&(this.accountP.textContent=n),this.bankP&&(this.bankP.textContent=`Ng\xE2n h\xE0ng ${e}`),t&&n)try{let r=H({bankId:t,accountNo:n,accountName:a,amount:s,content:u}),b=await w.toString(r,{type:"svg",width:m,margin:1,color:{dark:"#000000",light:"#ffffff"}});this.qrContainer.innerHTML=b}catch(r){console.error("Failed to generate VietQR:",r),this.qrContainer.innerHTML='<p style="color: red;">Invalid QR Data</p>'}}};function B(){typeof window<"u"&&window.customElements&&(customElements.get("viet-qr-compact")||customElements.define("viet-qr-compact",l),customElements.get("viet-qr-standee")||customElements.define("viet-qr-standee",d))}export{l as VietQRCompactCard,d as VietQRPayStandee,B as registerElements};
//# sourceMappingURL=index.mjs.map
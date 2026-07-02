"use strict";var P=Object.create;var p=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var I=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty;var T=(e,t)=>{for(var n in t)p(e,n,{get:t[n],enumerable:!0})},f=(e,t,n,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of w(t))!S.call(e,a)&&a!==n&&p(e,a,{get:()=>t[a],enumerable:!(s=C(t,a))||s.enumerable});return e};var k=(e,t,n)=>(n=e!=null?P(I(e)):{},f(t||!e||!e.__esModule?p(n,"default",{value:e,enumerable:!0}):n,e)),A=e=>f(p({},"__esModule",{value:!0}),e);var E={};T(E,{VietQRCompactCard:()=>d,VietQRPayStandee:()=>u,registerElements:()=>L});module.exports=A(E);var r=require("@viet-qr/core"),_=k(require("qrcode")),d=class extends HTMLElement{static get observedAttributes(){return["bank-id","account-no","account-name","amount","content","size","bank-logo","theme"]}qrContainer=null;logoImg=null;bankNameH3=null;accountNameP=null;accountNoP=null;amountP=null;constructor(){super()}connectedCallback(){this.renderInitial(),this.updateData()}attributeChangedCallback(){this.updateData()}renderInitial(){let t=this.getAttribute("theme")||"light";this.innerHTML=`
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
    `,this.qrContainer=this.querySelector("#qr-container"),this.logoImg=this.querySelector("#logo-img"),this.bankNameH3=this.querySelector("#bank-name-h3"),this.accountNameP=this.querySelector("#account-name-p"),this.accountNoP=this.querySelector("#account-no-p"),this.amountP=this.querySelector("#amount-p")}async updateData(){if(!this.qrContainer)return;let t=this.getAttribute("bank-id")||"",n=this.getAttribute("account-no")||"",s=this.getAttribute("account-name")||"",a=this.getAttribute("amount"),c=a?parseInt(a,10):void 0,g=this.getAttribute("content")||"",v=parseInt(this.getAttribute("size")||"240",10),m=this.getAttribute("bank-logo"),b=this.getAttribute("theme")||"light",h=this.querySelector("#card-wrapper");h&&(h.className=`vqr-compact-card vqr-theme-${b}`);let q=((0,r.getBankByBin)(t)||(0,r.getBankByShortName)(t))?.shortName||t;if(m&&this.logoImg&&this.bankNameH3?(this.logoImg.src=m,this.logoImg.alt=q,this.logoImg.style.display="block",this.bankNameH3.style.display="none"):this.bankNameH3&&this.logoImg&&(this.bankNameH3.textContent=q,this.bankNameH3.style.display="block",this.logoImg.style.display="none"),this.accountNameP){let i=this.querySelector("#account-name-row");s?(this.accountNameP.textContent=(0,r.sanitizeAccountName)(s),i.style.display="flex"):i.style.display="none"}if(this.accountNoP&&(this.accountNoP.textContent=n),this.amountP){let i=this.querySelector("#amount-row");c?(this.amountP.textContent=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(c),i.style.display="flex"):i.style.display="none"}if(t&&n)try{let i=(0,r.generateVietQR)({bankId:t,accountNo:n,accountName:s,amount:c,content:g}),l=await _.default.toString(i,{type:"svg",width:v,margin:1,color:{dark:"#000000",light:"#ffffff"}});this.qrContainer.innerHTML=l}catch(i){console.error("Failed to generate VietQR:",i),this.qrContainer.innerHTML='<p style="color: red;">Invalid QR Data</p>'}}};var o=require("@viet-qr/core"),H=k(require("qrcode")),u=class extends HTMLElement{static get observedAttributes(){return["bank-id","account-no","account-name","amount","content","size","title","subtitle","theme"]}qrContainer=null;titleH2=null;subtitleP=null;nameH3=null;accountP=null;bankP=null;constructor(){super()}connectedCallback(){this.renderInitial(),this.updateData()}attributeChangedCallback(){this.updateData()}renderInitial(){let t=this.getAttribute("theme")||"light";this.innerHTML=`
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
    `,this.qrContainer=this.querySelector("#qr-container"),this.titleH2=this.querySelector("#standee-title"),this.subtitleP=this.querySelector("#standee-subtitle"),this.nameH3=this.querySelector("#standee-name"),this.accountP=this.querySelector("#standee-account"),this.bankP=this.querySelector("#standee-bank")}async updateData(){if(!this.qrContainer)return;let t=this.getAttribute("bank-id")||"",n=this.getAttribute("account-no")||"",s=this.getAttribute("account-name")||"",a=this.getAttribute("amount"),c=a?parseInt(a,10):void 0,g=this.getAttribute("content")||"",v=parseInt(this.getAttribute("size")||"200",10),m=this.getAttribute("title")||"Qu\xE9t m\xE3 \u0111\u1EC3 thanh to\xE1n",b=this.getAttribute("subtitle")||"H\u1ED7 tr\u1EE3 \u1EE9ng d\u1EE5ng ng\xE2n h\xE0ng & v\xED \u0111i\u1EC7n t\u1EED",h=this.getAttribute("theme")||"light",y=this.querySelector("#standee-wrapper");y&&(y.className=`vqr-pay-standee vqr-theme-${h}`),this.titleH2&&(this.titleH2.textContent=m),this.subtitleP&&(this.subtitleP.textContent=b);let i=((0,o.getBankByBin)(t)||(0,o.getBankByShortName)(t))?.shortName||t;if(this.nameH3&&(s?(this.nameH3.textContent=(0,o.sanitizeAccountName)(s),this.nameH3.style.display="block"):this.nameH3.style.display="none"),this.accountP&&(this.accountP.textContent=n),this.bankP&&(this.bankP.textContent=`Ng\xE2n h\xE0ng ${i}`),t&&n)try{let l=(0,o.generateVietQR)({bankId:t,accountNo:n,accountName:s,amount:c,content:g}),N=await H.default.toString(l,{type:"svg",width:v,margin:1,color:{dark:"#000000",light:"#ffffff"}});this.qrContainer.innerHTML=N}catch(l){console.error("Failed to generate VietQR:",l),this.qrContainer.innerHTML='<p style="color: red;">Invalid QR Data</p>'}}};function L(){typeof window<"u"&&window.customElements&&(customElements.get("viet-qr-compact")||customElements.define("viet-qr-compact",d),customElements.get("viet-qr-standee")||customElements.define("viet-qr-standee",u))}
//# sourceMappingURL=index.js.map
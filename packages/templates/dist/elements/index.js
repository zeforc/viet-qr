"use strict";var w=Object.create;var y=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var T=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty;var M=(n,t)=>{for(var e in t)y(n,e,{get:t[e],enumerable:!0})},H=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of P(t))!L.call(n,a)&&a!==e&&y(n,a,{get:()=>t[a],enumerable:!(i=A(t,a))||i.enumerable});return n};var k=(n,t,e)=>(e=n!=null?w(T(n)):{},H(t||!n||!n.__esModule?y(e,"default",{value:n,enumerable:!0}):e,n)),E=n=>H(y({},"__esModule",{value:!0}),n);var Q={};M(Q,{VietQRBasic:()=>p,VietQRCompactCard:()=>g,VietQRPayStandee:()=>b,registerElements:()=>x});module.exports=E(Q);var _=require("@viet-qr/core"),C=k(require("qrcode")),p=class extends HTMLElement{static get observedAttributes(){return["bank-id","account-no","account-name","amount","content","size"]}qrContainer=null;constructor(){super()}connectedCallback(){this.renderInitial(),this.updateData()}attributeChangedCallback(){this.updateData()}renderInitial(){this.innerHTML=`
      <div class="vqr-basic" id="qr-container" style="display: flex; justify-content: center; align-items: center;">
        <!-- QR Code SVG will be injected here -->
      </div>
    `,this.qrContainer=this.querySelector("#qr-container")}async updateData(){if(!this.qrContainer)return;let t=this.getAttribute("bank-id")||"",e=this.getAttribute("account-no")||"",i=this.getAttribute("account-name")||"",a=this.getAttribute("amount"),l=a?parseInt(a,10):void 0,u=this.getAttribute("content")||"",d=parseInt(this.getAttribute("size")||"240",10);if(t&&e)try{let s=(0,_.generateVietQR)({bankId:t,accountNo:e,accountName:i,amount:l,content:u}),m=await C.default.toString(s,{type:"svg",width:d,margin:1,color:{dark:"#000000",light:"#ffffff"}});this.qrContainer.innerHTML=m}catch(s){console.error("Failed to generate VietQR:",s),this.qrContainer.innerHTML='<p style="color: red;">Invalid QR Data</p>'}else this.qrContainer.innerHTML=""}};var o=require("@viet-qr/core"),N=k(require("qrcode")),g=class extends HTMLElement{static get observedAttributes(){return["bank-id","account-no","account-name","amount","content","size","bank-logo","theme"]}qrContainer=null;logoImg=null;bankNameH3=null;accountNameP=null;accountNoP=null;amountP=null;constructor(){super()}connectedCallback(){this.renderInitial(),this.updateData()}attributeChangedCallback(){this.updateData()}renderInitial(){let t=this.getAttribute("theme")||"light";this.innerHTML=`
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
    `,this.qrContainer=this.querySelector("#qr-container"),this.logoImg=this.querySelector("#logo-img"),this.bankNameH3=this.querySelector("#bank-name-h3"),this.accountNameP=this.querySelector("#account-name-p"),this.accountNoP=this.querySelector("#account-no-p"),this.amountP=this.querySelector("#amount-p")}async updateData(){if(!this.qrContainer)return;let t=this.getAttribute("bank-id")||"",e=this.getAttribute("account-no")||"",i=this.getAttribute("account-name")||"",a=this.getAttribute("amount"),l=a?parseInt(a,10):void 0,u=this.getAttribute("content")||"",d=parseInt(this.getAttribute("size")||"240",10),s=this.getAttribute("bank-logo"),m=this.getAttribute("theme")||"light",v=this.querySelector("#card-wrapper");v&&(v.className=`vqr-compact-card vqr-theme-${m}`);let f=((0,o.getBankByBin)(t)||(0,o.getBankByShortName)(t))?.shortName||t;if(s&&this.logoImg&&this.bankNameH3?(this.logoImg.src=s,this.logoImg.alt=f,this.logoImg.style.display="block",this.bankNameH3.style.display="none"):this.bankNameH3&&this.logoImg&&(this.bankNameH3.textContent=f,this.bankNameH3.style.display="block",this.logoImg.style.display="none"),this.accountNameP){let r=this.querySelector("#account-name-row");i?(this.accountNameP.textContent=(0,o.sanitizeAccountName)(i),r.style.display="flex"):r.style.display="none"}if(this.accountNoP&&(this.accountNoP.textContent=e),this.amountP){let r=this.querySelector("#amount-row");l?(this.amountP.textContent=new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(l),r.style.display="flex"):r.style.display="none"}if(t&&e)try{let r=(0,o.generateVietQR)({bankId:t,accountNo:e,accountName:i,amount:l,content:u}),h=await N.default.toString(r,{type:"svg",width:d,margin:1,color:{dark:"#000000",light:"#ffffff"}});this.qrContainer.innerHTML=h}catch(r){console.error("Failed to generate VietQR:",r),this.qrContainer.innerHTML='<p style="color: red;">Invalid QR Data</p>'}}};var c=require("@viet-qr/core"),I=k(require("qrcode")),b=class extends HTMLElement{static get observedAttributes(){return["bank-id","account-no","account-name","amount","content","size","title","subtitle","theme"]}qrContainer=null;titleH2=null;subtitleP=null;nameH3=null;accountP=null;bankP=null;constructor(){super()}connectedCallback(){this.renderInitial(),this.updateData()}attributeChangedCallback(){this.updateData()}renderInitial(){let t=this.getAttribute("theme")||"light";this.innerHTML=`
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
    `,this.qrContainer=this.querySelector("#qr-container"),this.titleH2=this.querySelector("#standee-title"),this.subtitleP=this.querySelector("#standee-subtitle"),this.nameH3=this.querySelector("#standee-name"),this.accountP=this.querySelector("#standee-account"),this.bankP=this.querySelector("#standee-bank")}async updateData(){if(!this.qrContainer)return;let t=this.getAttribute("bank-id")||"",e=this.getAttribute("account-no")||"",i=this.getAttribute("account-name")||"",a=this.getAttribute("amount"),l=a?parseInt(a,10):void 0,u=this.getAttribute("content")||"",d=parseInt(this.getAttribute("size")||"200",10),s=this.getAttribute("title")||"Qu\xE9t m\xE3 \u0111\u1EC3 thanh to\xE1n",m=this.getAttribute("subtitle")||"H\u1ED7 tr\u1EE3 \u1EE9ng d\u1EE5ng ng\xE2n h\xE0ng & v\xED \u0111i\u1EC7n t\u1EED",v=this.getAttribute("theme")||"light",q=this.querySelector("#standee-wrapper");q&&(q.className=`vqr-pay-standee vqr-theme-${v}`),this.titleH2&&(this.titleH2.textContent=s),this.subtitleP&&(this.subtitleP.textContent=m);let r=((0,c.getBankByBin)(t)||(0,c.getBankByShortName)(t))?.shortName||t;if(this.nameH3&&(i?(this.nameH3.textContent=(0,c.sanitizeAccountName)(i),this.nameH3.style.display="block"):this.nameH3.style.display="none"),this.accountP&&(this.accountP.textContent=e),this.bankP&&(this.bankP.textContent=`Ng\xE2n h\xE0ng ${r}`),t&&e)try{let h=(0,c.generateVietQR)({bankId:t,accountNo:e,accountName:i,amount:l,content:u}),S=await I.default.toString(h,{type:"svg",width:d,margin:1,color:{dark:"#000000",light:"#ffffff"}});this.qrContainer.innerHTML=S}catch(h){console.error("Failed to generate VietQR:",h),this.qrContainer.innerHTML='<p style="color: red;">Invalid QR Data</p>'}}};function x(){typeof window<"u"&&window.customElements&&(customElements.get("viet-qr-basic")||customElements.define("viet-qr-basic",p),customElements.get("viet-qr-compact")||customElements.define("viet-qr-compact",g),customElements.get("viet-qr-standee")||customElements.define("viet-qr-standee",b))}
//# sourceMappingURL=index.js.map
"use strict";(self.webpackChunkboard=self.webpackChunkboard||[]).push([[592],{4271:(g,m,d)=>{d.d(m,{s:()=>c});var l=d(1460),t=d(4650),u=d(7254),C=d(4425),p=d(6895);const _=["iconWrapper"];function r(o,s){if(1&o&&(t.TgZ(0,"pre"),t._uU(1),t.ALo(2,"json"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,e.object))}}function n(o,s){if(1&o&&t._UZ(0,"pre",6),2&o){const e=t.oxw();t.Q6J("innerText",e.content)}}const a=function(o,s,e){return{"touch-device":o,copied:s,"wrap-content":e}};let c=(()=>{class o{constructor(e){this.tippyService=e,this.content="",this.wrapContent=!0,this.touchDevice=l.eX,this.toCopy="",this.tippyShown=!1}ngOnInit(){this.toCopy=this.object?JSON.stringify(this.object,null,2):this.content}setTippy(){this.tippyShown||(this.tippyShown=!0,this.tippyInstance||(this.tippyInstance=this.tippyService.create(this.iconWrapperRef.nativeElement,{content:"Copiato!",placement:"left",trigger:"manual",animation:"shift-away",hideOnClick:!1,offset:[0,0],appendTo:"parent"})),this.tippyService.show(this.tippyInstance),window.setTimeout(()=>{this.tippyInstance&&(this.tippyService.hide(this.tippyInstance),this.tippyShown=!1)},2500))}ngOnDestroy(){this.tippyInstance&&this.tippyService.destroy(this.tippyInstance)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.S))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-custom-pre"]],viewQuery:function(e,i){if(1&e&&t.Gf(_,5),2&e){let y;t.iGM(y=t.CRH())&&(i.iconWrapperRef=y.first)}},inputs:{object:"object",content:"content",wrapContent:"wrapContent"},decls:8,vars:8,consts:[[1,"wrapper","position-relative","rounded",3,"ngClass"],[4,"ngIf","ngIfElse"],["noJson",""],[1,"icon-w","cursor-pointer","position-absolute",3,"cdkCopyToClipboard","click"],["iconWrapper",""],[1,"d-block","material-icons","copy-icon"],[3,"innerText"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,r,3,3,"pre",1),t.YNc(2,n,1,1,"ng-template",null,2,t.W1O),t.TgZ(4,"div",3,4),t.NdJ("click",function(){return i.setTippy()}),t.TgZ(6,"div",5),t._uU(7,"content_copy"),t.qZA()()()),2&e){const y=t.MAs(3);t.Q6J("ngClass",t.kEZ(4,a,i.touchDevice,i.tippyShown,i.wrapContent)),t.xp6(1),t.Q6J("ngIf",i.object)("ngIfElse",y),t.xp6(3),t.Q6J("cdkCopyToClipboard",i.toCopy)}},dependencies:[C.i3,p.mk,p.O5,p.Ts],styles:[".wrapper[_ngcontent-%COMP%]{background-color:var(--bs-gray-100)}.wrapper.touch-device[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{padding-right:calc(24px + 1.3rem)!important}.wrapper.wrap-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{white-space:pre-wrap;word-break:break-word}pre[_ngcontent-%COMP%]{padding:.75rem 1rem;margin:0;text-align:left}.icon-w[_ngcontent-%COMP%]{top:0;right:0;transition:opacity .2s;padding:.65rem;background-color:inherit}.copy-icon[_ngcontent-%COMP%]{transition:opacity .2s,color .2s}.copied[_ngcontent-%COMP%]   .copy-icon[_ngcontent-%COMP%]{color:#26873d}.wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied)   .icon-w[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied)   .copy-icon[_ngcontent-%COMP%]{opacity:0}.wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied):hover   .icon-w[_ngcontent-%COMP%]{opacity:1}.wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied):hover   .copy-icon[_ngcontent-%COMP%]{opacity:.7}.wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied)   .icon-w[_ngcontent-%COMP%]:hover   .copy-icon[_ngcontent-%COMP%]{opacity:1}"]}),o})()},3792:(g,m,d)=>{d.d(m,{b:()=>p});var l=d(4425),t=d(6895),u=d(5254),C=d(4650);let p=(()=>{class _{}return _.\u0275fac=function(n){return new(n||_)},_.\u0275mod=C.oAB({type:_}),_.\u0275inj=C.cJS({imports:[l.Iq,t.ez,u.G]}),_})()},8735:(g,m,d)=>{d.d(m,{v:()=>t});var l=d(4650);let t=(()=>{class u{constructor(){}filterScripts(p,_,r){if(r.dev&&(p=p.filter(n=>r.dev===n.forum)),r.onlyInstalled&&(p=p.filter(n=>_.includes(n.scriptId))),r.keywords){let n=this.createKeywordsRegex(r.keywords);p=p.filter(a=>a.name.match(n)||a.sdesc.match(n))}return p}createKeywordsRegex(p){return p=p.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),new RegExp(`.*?(${p.split(" ").join("|")}).*?`,"i")}}return u.\u0275fac=function(p){return new(p||u)},u.\u0275prov=l.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},1042:(g,m,d)=>{d.d(m,{Z:()=>s});var l,t=new Uint8Array(16);function u(){if(!l&&!(l=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(t)}const C=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,_=function p(e){return"string"==typeof e&&C.test(e)};for(var r=[],n=0;n<256;++n)r.push((n+256).toString(16).substr(1));const s=function o(e,i,y){var f=(e=e||{}).random||(e.rng||u)();if(f[6]=15&f[6]|64,f[8]=63&f[8]|128,i){y=y||0;for(var h=0;h<16;++h)i[y+h]=f[h];return i}return function a(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,y=(r[e[i+0]]+r[e[i+1]]+r[e[i+2]]+r[e[i+3]]+"-"+r[e[i+4]]+r[e[i+5]]+"-"+r[e[i+6]]+r[e[i+7]]+"-"+r[e[i+8]]+r[e[i+9]]+"-"+r[e[i+10]]+r[e[i+11]]+r[e[i+12]]+r[e[i+13]]+r[e[i+14]]+r[e[i+15]]).toLowerCase();if(!_(y))throw TypeError("Stringified UUID is invalid");return y}(f)}},4425:(g,m,d)=>{d.d(m,{Iq:()=>r,i3:()=>_});var l=d(6895),t=d(4650);class u{constructor(a,c){this._document=c;const o=this._textarea=this._document.createElement("textarea"),s=o.style;s.position="fixed",s.top=s.opacity="0",s.left="-999em",o.setAttribute("aria-hidden","true"),o.value=a,o.readOnly=!0,this._document.body.appendChild(o)}copy(){const a=this._textarea;let c=!1;try{if(a){const o=this._document.activeElement;a.select(),a.setSelectionRange(0,a.value.length),c=this._document.execCommand("copy"),o&&o.focus()}}catch{}return c}destroy(){const a=this._textarea;a&&(a.remove(),this._textarea=void 0)}}let C=(()=>{class n{constructor(c){this._document=c}copy(c){const o=this.beginCopy(c),s=o.copy();return o.destroy(),s}beginCopy(c){return new u(c,this._document)}}return n.\u0275fac=function(c){return new(c||n)(t.LFG(l.K0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const p=new t.OlP("CDK_COPY_TO_CLIPBOARD_CONFIG");let _=(()=>{class n{constructor(c,o,s){this._clipboard=c,this._ngZone=o,this.text="",this.attempts=1,this.copied=new t.vpe,this._pending=new Set,s&&null!=s.attempts&&(this.attempts=s.attempts)}copy(c=this.attempts){if(c>1){let o=c;const s=this._clipboard.beginCopy(this.text);this._pending.add(s);const e=()=>{const i=s.copy();i||!--o||this._destroyed?(this._currentTimeout=null,this._pending.delete(s),s.destroy(),this.copied.emit(i)):this._currentTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(e,1))};e()}else this.copied.emit(this._clipboard.copy(this.text))}ngOnDestroy(){this._currentTimeout&&clearTimeout(this._currentTimeout),this._pending.forEach(c=>c.destroy()),this._pending.clear(),this._destroyed=!0}}return n.\u0275fac=function(c){return new(c||n)(t.Y36(C),t.Y36(t.R0b),t.Y36(p,8))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkCopyToClipboard",""]],hostBindings:function(c,o){1&c&&t.NdJ("click",function(){return o.copy()})},inputs:{text:["cdkCopyToClipboard","text"],attempts:["cdkCopyToClipboardAttempts","attempts"]},outputs:{copied:"cdkCopyToClipboardCopied"}}),n})(),r=(()=>{class n{}return n.\u0275fac=function(c){return new(c||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})()}}]);
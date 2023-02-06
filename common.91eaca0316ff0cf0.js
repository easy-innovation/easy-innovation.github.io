"use strict";(self.webpackChunkboard=self.webpackChunkboard||[]).push([[592],{4271:(h,f,a)=>{a.d(f,{s:()=>d});var y=a(1460),t=a(4650),u=a(7254),C=a(4425),c=a(6895);const _=["iconWrapper"];function r(n,i){if(1&n&&(t.TgZ(0,"pre"),t._uU(1),t.ALo(2,"json"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,e.object))}}function o(n,i){if(1&n&&t._UZ(0,"pre",6),2&n){const e=t.oxw();t.Q6J("innerText",e.content)}}const p=function(n){return{"touch-device":n}},s=function(n){return{copied:n}};let d=(()=>{class n{constructor(e){this.tippyService=e,this.content="",this.touchDevice=y.eX,this.toCopy="",this.tippyShown=!1}ngOnInit(){this.toCopy=this.object?JSON.stringify(this.object,null,2):this.content}setTippy(){this.tippyShown||(this.tippyShown=!0,this.tippyInstance||(this.tippyInstance=this.tippyService.create(this.iconWrapperRef.nativeElement,{content:"Copiato!",placement:"left",trigger:"manual",animation:"shift-away",hideOnClick:!1,appendTo:"parent"})),this.tippyService.show(this.tippyInstance),window.setTimeout(()=>{this.tippyInstance&&(this.tippyService.hide(this.tippyInstance),this.tippyShown=!1)},2500))}ngOnDestroy(){this.tippyInstance&&this.tippyService.destroy(this.tippyInstance)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.S))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-custom-pre"]],viewQuery:function(e,l){if(1&e&&t.Gf(_,5),2&e){let m;t.iGM(m=t.CRH())&&(l.iconWrapperRef=m.first)}},inputs:{object:"object",content:"content"},decls:8,vars:9,consts:[[1,"wrapper","position-relative",3,"ngClass"],[4,"ngIf","ngIfElse"],["noJson",""],[1,"copy-icon","cursor-pointer","position-absolute",3,"ngClass","cdkCopyToClipboard","click"],["iconWrapper",""],[1,"d-block","material-icons"],[3,"innerText"]],template:function(e,l){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,r,3,3,"pre",1),t.YNc(2,o,1,1,"ng-template",null,2,t.W1O),t.TgZ(4,"div",3,4),t.NdJ("click",function(){return l.setTippy()}),t.TgZ(6,"div",5),t._uU(7,"content_copy"),t.qZA()()()),2&e){const m=t.MAs(3);t.Q6J("ngClass",t.VKq(5,p,l.touchDevice)),t.xp6(1),t.Q6J("ngIf",l.object)("ngIfElse",m),t.xp6(3),t.Q6J("ngClass",t.VKq(7,s,l.tippyShown))("cdkCopyToClipboard",l.toCopy)}},dependencies:[C.i3,c.mk,c.O5,c.Ts],styles:["pre[_ngcontent-%COMP%]{padding:.75rem 1rem;background-color:var(--bs-gray-100);border-radius:.25rem;margin:0;white-space:pre-wrap;word-break:break-word}.copy-icon[_ngcontent-%COMP%]{top:.65rem;right:.65rem;transition:opacity .2s,color .2s}.copy-icon.copied[_ngcontent-%COMP%]{color:#26873d}.wrapper[_ngcontent-%COMP%]:not(.touch-device)   .copy-icon[_ngcontent-%COMP%]:not(.copied){opacity:0}.wrapper[_ngcontent-%COMP%]:not(.touch-device):hover   .copy-icon[_ngcontent-%COMP%]:not(.copied){opacity:.7}.wrapper[_ngcontent-%COMP%]:not(.touch-device)   .copy-icon[_ngcontent-%COMP%]:not(.copied):hover{opacity:1}"]}),n})()},3792:(h,f,a)=>{a.d(f,{b:()=>c});var y=a(4425),t=a(6895),u=a(5254),C=a(4650);let c=(()=>{class _{}return _.\u0275fac=function(o){return new(o||_)},_.\u0275mod=C.oAB({type:_}),_.\u0275inj=C.cJS({imports:[y.Iq,t.ez,u.G]}),_})()},8735:(h,f,a)=>{a.d(f,{v:()=>t});var y=a(4650);let t=(()=>{class u{constructor(){}filterScripts(c,_,r){if(r.dev&&(c=c.filter(o=>r.dev===o.forum)),r.onlyInstalled&&(c=c.filter(o=>_.includes(o.scriptId))),r.keywords){let o=this.createKeywordsRegex(r.keywords);c=c.filter(p=>p.name.match(o)||p.sdesc.match(o))}return c}createKeywordsRegex(c){return c=c.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),new RegExp(`.*?(${c.split(" ").join("|")}).*?`,"i")}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275prov=y.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},1042:(h,f,a)=>{a.d(f,{Z:()=>n});var y,t=new Uint8Array(16);function u(){if(!y&&!(y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(t)}const C=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,_=function c(i){return"string"==typeof i&&C.test(i)};for(var r=[],o=0;o<256;++o)r.push((o+256).toString(16).substr(1));const n=function d(i,e,l){var m=(i=i||{}).random||(i.rng||u)();if(m[6]=15&m[6]|64,m[8]=63&m[8]|128,e){l=l||0;for(var g=0;g<16;++g)e[l+g]=m[g];return e}return function p(i){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,l=(r[i[e+0]]+r[i[e+1]]+r[i[e+2]]+r[i[e+3]]+"-"+r[i[e+4]]+r[i[e+5]]+"-"+r[i[e+6]]+r[i[e+7]]+"-"+r[i[e+8]]+r[i[e+9]]+"-"+r[i[e+10]]+r[i[e+11]]+r[i[e+12]]+r[i[e+13]]+r[i[e+14]]+r[i[e+15]]).toLowerCase();if(!_(l))throw TypeError("Stringified UUID is invalid");return l}(m)}},4425:(h,f,a)=>{a.d(f,{Iq:()=>r,i3:()=>_});var y=a(6895),t=a(4650);class u{constructor(p,s){this._document=s;const d=this._textarea=this._document.createElement("textarea"),n=d.style;n.position="fixed",n.top=n.opacity="0",n.left="-999em",d.setAttribute("aria-hidden","true"),d.value=p,d.readOnly=!0,this._document.body.appendChild(d)}copy(){const p=this._textarea;let s=!1;try{if(p){const d=this._document.activeElement;p.select(),p.setSelectionRange(0,p.value.length),s=this._document.execCommand("copy"),d&&d.focus()}}catch{}return s}destroy(){const p=this._textarea;p&&(p.remove(),this._textarea=void 0)}}let C=(()=>{class o{constructor(s){this._document=s}copy(s){const d=this.beginCopy(s),n=d.copy();return d.destroy(),n}beginCopy(s){return new u(s,this._document)}}return o.\u0275fac=function(s){return new(s||o)(t.LFG(y.K0))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();const c=new t.OlP("CDK_COPY_TO_CLIPBOARD_CONFIG");let _=(()=>{class o{constructor(s,d,n){this._clipboard=s,this._ngZone=d,this.text="",this.attempts=1,this.copied=new t.vpe,this._pending=new Set,n&&null!=n.attempts&&(this.attempts=n.attempts)}copy(s=this.attempts){if(s>1){let d=s;const n=this._clipboard.beginCopy(this.text);this._pending.add(n);const i=()=>{const e=n.copy();e||!--d||this._destroyed?(this._currentTimeout=null,this._pending.delete(n),n.destroy(),this.copied.emit(e)):this._currentTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(i,1))};i()}else this.copied.emit(this._clipboard.copy(this.text))}ngOnDestroy(){this._currentTimeout&&clearTimeout(this._currentTimeout),this._pending.forEach(s=>s.destroy()),this._pending.clear(),this._destroyed=!0}}return o.\u0275fac=function(s){return new(s||o)(t.Y36(C),t.Y36(t.R0b),t.Y36(c,8))},o.\u0275dir=t.lG2({type:o,selectors:[["","cdkCopyToClipboard",""]],hostBindings:function(s,d){1&s&&t.NdJ("click",function(){return d.copy()})},inputs:{text:["cdkCopyToClipboard","text"],attempts:["cdkCopyToClipboardAttempts","attempts"]},outputs:{copied:"cdkCopyToClipboardCopied"}}),o})(),r=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({}),o})()}}]);
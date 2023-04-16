"use strict";(self.webpackChunkboard=self.webpackChunkboard||[]).push([[592],{4271:(h,C,a)=>{a.d(C,{s:()=>r});var y=a(1460),t=a(4650),u=a(7254),_=a(4425),s=a(6895);const l=["iconWrapper"];function c(o,p){if(1&o&&(t.TgZ(0,"pre"),t._uU(1),t.ALo(2,"json"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(t.lcZ(2,1,e.object))}}function n(o,p){if(1&o&&t._UZ(0,"pre",6),2&o){const e=t.oxw();t.Q6J("innerText",e.content)}}const d=function(o,p,e){return{"touch-device":o,copied:p,"wrap-content":e}};let r=(()=>{class o{constructor(e){this.tippyService=e,this.content="",this.wrapContent=!0,this.touchDevice=y.eX,this.toCopy="",this.tippyShown=!1}ngOnInit(){this.toCopy=this.object?JSON.stringify(this.object,null,2):this.content}setTippy(){this.tippyShown||(this.tippyShown=!0,this.tippyInstance||(this.tippyInstance=this.tippyService.create(this.iconWrapperRef.nativeElement,{content:"Copiato!",placement:"left",trigger:"manual",animation:"shift-away",hideOnClick:!1,offset:[0,0],appendTo:"parent"})),this.tippyService.show(this.tippyInstance),window.setTimeout(()=>{this.tippyInstance&&(this.tippyService.hide(this.tippyInstance),this.tippyShown=!1)},2500))}ngOnDestroy(){this.tippyInstance&&this.tippyService.destroy(this.tippyInstance)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.S))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-custom-pre"]],viewQuery:function(e,i){if(1&e&&t.Gf(l,5),2&e){let m;t.iGM(m=t.CRH())&&(i.iconWrapperRef=m.first)}},inputs:{object:"object",content:"content",wrapContent:"wrapContent"},decls:8,vars:8,consts:[[1,"wrapper","position-relative","rounded",3,"ngClass"],[4,"ngIf","ngIfElse"],["noJson",""],[1,"icon-w","cursor-pointer","position-absolute",3,"cdkCopyToClipboard","click"],["iconWrapper",""],[1,"d-block","material-icons","copy-icon"],[3,"innerText"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0),t.YNc(1,c,3,3,"pre",1),t.YNc(2,n,1,1,"ng-template",null,2,t.W1O),t.TgZ(4,"div",3,4),t.NdJ("click",function(){return i.setTippy()}),t.TgZ(6,"div",5),t._uU(7,"content_copy"),t.qZA()()()),2&e){const m=t.MAs(3);t.Q6J("ngClass",t.kEZ(4,d,i.touchDevice,i.tippyShown,i.wrapContent)),t.xp6(1),t.Q6J("ngIf",i.object)("ngIfElse",m),t.xp6(3),t.Q6J("cdkCopyToClipboard",i.toCopy)}},dependencies:[_.i3,s.mk,s.O5,s.Ts],styles:[".wrapper[_ngcontent-%COMP%]{background-color:var(--bs-gray-100)}.wrapper.touch-device[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{padding-right:calc(24px + 1.3rem)!important}.wrapper.wrap-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{white-space:pre-wrap;word-break:break-word}pre[_ngcontent-%COMP%]{padding:.75rem 1rem;margin:0;text-align:left}.icon-w[_ngcontent-%COMP%]{top:0;right:0;transition:opacity .2s;padding:.65rem;background-color:inherit}.copy-icon[_ngcontent-%COMP%]{transition:opacity .2s,color .2s}.copied[_ngcontent-%COMP%]   .copy-icon[_ngcontent-%COMP%]{color:#26873d}.wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied)   .icon-w[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied)   .copy-icon[_ngcontent-%COMP%]{opacity:0}.wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied):hover   .icon-w[_ngcontent-%COMP%]{opacity:1}.wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied):hover   .copy-icon[_ngcontent-%COMP%]{opacity:.7}.wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied)   .icon-w[_ngcontent-%COMP%]:hover   .copy-icon[_ngcontent-%COMP%]{opacity:1}"]}),o})()},3792:(h,C,a)=>{a.d(C,{b:()=>s});var y=a(4425),t=a(6895),u=a(5254),_=a(4650);let s=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=_.oAB({type:l}),l.\u0275inj=_.cJS({imports:[y.Iq,t.ez,u.G]}),l})()},6284:(h,C,a)=>{a.d(C,{P:()=>u});var y=a(6895),t=a(4650);let u=(()=>{class _{}return _.\u0275fac=function(l){return new(l||_)},_.\u0275mod=t.oAB({type:_}),_.\u0275inj=t.cJS({imports:[y.ez]}),_})()},9885:(h,C,a)=>{a.d(C,{K:()=>t});var y=a(4650);let t=(()=>{class u{transform(s,l=5){return s.reduce((d=l,(r,o)=>{const p=(d=>d[d.length-1])(r);return p.length===d?r.push([o]):p.push(o),r}),[[]]);var d}}return u.\u0275fac=function(s){return new(s||u)},u.\u0275pipe=y.Yjl({name:"arrayChunk",type:u,pure:!0}),u})()},8735:(h,C,a)=>{a.d(C,{v:()=>t});var y=a(4650);let t=(()=>{class u{constructor(){}filterScripts(s,l,c){if(c.dev&&(s=s.filter(n=>c.dev===n.forum)),c.onlyInstalled&&(s=s.filter(n=>l.includes(n.scriptId))),c.keywords){let n=this.createKeywordsRegex(c.keywords);s=s.filter(d=>d.name.match(n)||d.sdesc.match(n))}return s}createKeywordsRegex(s){return s=s.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),new RegExp(`.*?(${s.split(" ").join("|")}).*?`,"i")}}return u.\u0275fac=function(s){return new(s||u)},u.\u0275prov=y.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},1042:(h,C,a)=>{a.d(C,{Z:()=>p});var y,t=new Uint8Array(16);function u(){if(!y&&!(y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(t)}const _=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,l=function s(e){return"string"==typeof e&&_.test(e)};for(var c=[],n=0;n<256;++n)c.push((n+256).toString(16).substr(1));const p=function o(e,i,m){var f=(e=e||{}).random||(e.rng||u)();if(f[6]=15&f[6]|64,f[8]=63&f[8]|128,i){m=m||0;for(var g=0;g<16;++g)i[m+g]=f[g];return i}return function d(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,m=(c[e[i+0]]+c[e[i+1]]+c[e[i+2]]+c[e[i+3]]+"-"+c[e[i+4]]+c[e[i+5]]+"-"+c[e[i+6]]+c[e[i+7]]+"-"+c[e[i+8]]+c[e[i+9]]+"-"+c[e[i+10]]+c[e[i+11]]+c[e[i+12]]+c[e[i+13]]+c[e[i+14]]+c[e[i+15]]).toLowerCase();if(!l(m))throw TypeError("Stringified UUID is invalid");return m}(f)}},4425:(h,C,a)=>{a.d(C,{Iq:()=>c,i3:()=>l});var y=a(6895),t=a(4650);class u{constructor(d,r){this._document=r;const o=this._textarea=this._document.createElement("textarea"),p=o.style;p.position="fixed",p.top=p.opacity="0",p.left="-999em",o.setAttribute("aria-hidden","true"),o.value=d,o.readOnly=!0,this._document.body.appendChild(o)}copy(){const d=this._textarea;let r=!1;try{if(d){const o=this._document.activeElement;d.select(),d.setSelectionRange(0,d.value.length),r=this._document.execCommand("copy"),o&&o.focus()}}catch{}return r}destroy(){const d=this._textarea;d&&(d.remove(),this._textarea=void 0)}}let _=(()=>{class n{constructor(r){this._document=r}copy(r){const o=this.beginCopy(r),p=o.copy();return o.destroy(),p}beginCopy(r){return new u(r,this._document)}}return n.\u0275fac=function(r){return new(r||n)(t.LFG(y.K0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();const s=new t.OlP("CDK_COPY_TO_CLIPBOARD_CONFIG");let l=(()=>{class n{constructor(r,o,p){this._clipboard=r,this._ngZone=o,this.text="",this.attempts=1,this.copied=new t.vpe,this._pending=new Set,p&&null!=p.attempts&&(this.attempts=p.attempts)}copy(r=this.attempts){if(r>1){let o=r;const p=this._clipboard.beginCopy(this.text);this._pending.add(p);const e=()=>{const i=p.copy();i||!--o||this._destroyed?(this._currentTimeout=null,this._pending.delete(p),p.destroy(),this.copied.emit(i)):this._currentTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(e,1))};e()}else this.copied.emit(this._clipboard.copy(this.text))}ngOnDestroy(){this._currentTimeout&&clearTimeout(this._currentTimeout),this._pending.forEach(r=>r.destroy()),this._pending.clear(),this._destroyed=!0}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(_),t.Y36(t.R0b),t.Y36(s,8))},n.\u0275dir=t.lG2({type:n,selectors:[["","cdkCopyToClipboard",""]],hostBindings:function(r,o){1&r&&t.NdJ("click",function(){return o.copy()})},inputs:{text:["cdkCopyToClipboard","text"],attempts:["cdkCopyToClipboardAttempts","attempts"]},outputs:{copied:"cdkCopyToClipboardCopied"}}),n})(),c=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({}),n})()}}]);
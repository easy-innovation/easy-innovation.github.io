"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[592],{4601:(g,u,n)=>{function t(a){for(const e in a)if(a.hasOwnProperty(e))return!1;return!0}n.d(u,{n:()=>t})},8940:(g,u,n)=>{n.d(u,{s:()=>l});var t=n(4020),a=n(7460),e=n(5879),o=n(342),c=n(6814);const i=["iconWrapper"];function _(s,d){if(1&s&&(e.TgZ(0,"pre"),e._uU(1),e.ALo(2,"json"),e.qZA()),2&s){const m=e.oxw();e.xp6(1),e.Oqu(e.lcZ(2,1,m.object))}}function r(s,d){if(1&s&&e._UZ(0,"pre",6),2&s){const m=e.oxw();e.Q6J("innerText",m.content)}}const p=function(s,d,m){return{"touch-device":s,copied:d,"wrap-content":m}};let l=(()=>{var s;class d{constructor(y){this.tippyService=y,this.content="",this.wrapContent=!0,this.touchDevice=t.eX,this.toCopy="",this.tippyShown=!1}ngOnInit(){this.toCopy=this.object?JSON.stringify(this.object,null,2):this.content}setTippy(){this.tippyShown||(this.tippyShown=!0,this.tippyInstance||(this.tippyInstance=this.tippyService.create(this.iconWrapperRef.nativeElement,{content:"Copiato!",placement:"left",trigger:"manual",animation:"shift-away",hideOnClick:!1,offset:[0,0],appendTo:"parent"})),this.tippyService.show(this.tippyInstance),window.setTimeout(()=>{this.tippyInstance&&(this.tippyService.hide(this.tippyInstance),this.tippyShown=!1)},2500))}ngOnDestroy(){this.tippyInstance&&this.tippyService.destroy(this.tippyInstance)}}return(s=d).\u0275fac=function(y){return new(y||s)(e.Y36(a.S))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-custom-pre"]],viewQuery:function(y,C){if(1&y&&e.Gf(i,5),2&y){let h;e.iGM(h=e.CRH())&&(C.iconWrapperRef=h.first)}},inputs:{object:"object",content:"content",wrapContent:"wrapContent"},decls:8,vars:8,consts:[[1,"wrapper","position-relative","rounded",3,"ngClass"],[4,"ngIf","ngIfElse"],["noJson",""],[1,"icon-w","cursor-pointer","position-absolute",3,"cdkCopyToClipboard","click"],["iconWrapper",""],[1,"d-block","material-icons","copy-icon"],[3,"innerText"]],template:function(y,C){if(1&y&&(e.TgZ(0,"div",0),e.YNc(1,_,3,3,"pre",1),e.YNc(2,r,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"div",3,4),e.NdJ("click",function(){return C.setTippy()}),e.TgZ(6,"div",5),e._uU(7,"content_copy"),e.qZA()()()),2&y){const h=e.MAs(3);e.Q6J("ngClass",e.kEZ(4,p,C.touchDevice,C.tippyShown,C.wrapContent)),e.xp6(1),e.Q6J("ngIf",C.object)("ngIfElse",h),e.xp6(3),e.Q6J("cdkCopyToClipboard",C.toCopy)}},dependencies:[o.i3,c.mk,c.O5,c.Ts],styles:[".wrapper[_ngcontent-%COMP%]{background-color:var(--bs-gray-100)}.wrapper.touch-device[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{padding-right:calc(24px + 1.3rem)!important}.wrapper.wrap-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{white-space:pre-wrap;word-break:break-word}pre[_ngcontent-%COMP%]{padding:.75rem 1rem;margin:0;text-align:left}.icon-w[_ngcontent-%COMP%]{top:0;right:0;transition:opacity .2s;padding:.65rem;background-color:inherit}.copy-icon[_ngcontent-%COMP%]{transition:opacity .2s,color .2s}.copied[_ngcontent-%COMP%]   .copy-icon[_ngcontent-%COMP%]{color:#26873d}.wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied)   .icon-w[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied)   .copy-icon[_ngcontent-%COMP%]{opacity:0}.wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied):hover   .icon-w[_ngcontent-%COMP%]{opacity:1}.wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied):hover   .copy-icon[_ngcontent-%COMP%]{opacity:.7}.wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied)   .icon-w[_ngcontent-%COMP%]:hover   .copy-icon[_ngcontent-%COMP%]{opacity:1}"]}),d})()},1568:(g,u,n)=>{n.d(u,{b:()=>c});var t=n(342),a=n(6814),e=n(3038),o=n(5879);let c=(()=>{var i;class _{}return(i=_).\u0275fac=function(p){return new(p||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[t.Iq,a.ez,e.G]}),_})()},4723:(g,u,n)=>{n.d(u,{r:()=>c});var t=n(5879),a=n(6814),e=n(6223);function o(i,_){if(1&i){const r=t.EpF();t.TgZ(0,"div",5),t.NdJ("click",function(){t.CHM(r);const l=t.oxw();return l.textModel="",t.KtG(l.keyupEvent(!0))}),t._uU(1," clear "),t.qZA()}}let c=(()=>{var i;class _{constructor(){this.disabled=!1,this.enterKeyOnly=!1,this.size="md",this.textEvent=new t.vpe,this.textModel="",this.textEmitted=""}ngOnInit(){}keyupEvent(p=!1){if(this.disabled)return;const l=this.textModel.trim();l.length>0&&!p&&this.enterKeyOnly||l!==this.textEmitted&&(this.textEmitted=l,this.textEvent.emit(this.textEmitted))}labelClick(p){0!==this.textModel.trim().length&&(p.preventDefault(),p.stopPropagation(),this.keyupEvent(!0))}}return(i=_).\u0275fac=function(p){return new(p||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-input-filter-text"]],inputs:{disabled:"disabled",enterKeyOnly:"enterKeyOnly",size:"size"},outputs:{textEvent:"textEvent"},decls:6,vars:6,consts:[[1,"input-group","position-relative",3,"ngClass"],[1,"input-group-text"],["for","text-input",1,"d-block","material-icons-outlined","text-muted","cursor-pointer",3,"click"],["class","material-icons d-block icon-small text-danger position-absolute reset-text-input cursor-pointer",3,"click",4,"ngIf"],["type","text","placeholder","Cerca...","id","text-input",1,"form-control",3,"disabled","ngModel","ngModelChange","keyup","keyup.enter"],[1,"material-icons","d-block","icon-small","text-danger","position-absolute","reset-text-input","cursor-pointer",3,"click"]],template:function(p,l){1&p&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t.NdJ("click",function(d){return l.labelClick(d)}),t._uU(3,"search"),t.qZA()(),t.YNc(4,o,2,0,"div",3),t.TgZ(5,"input",4),t.NdJ("ngModelChange",function(d){return l.textModel=d})("keyup",function(){return l.keyupEvent()})("keyup.enter",function(){return l.keyupEvent(!0)}),t.qZA()()),2&p&&(t.Q6J("ngClass","md"!==l.size?"input-group-"+l.size:""),t.xp6(2),t.ekj("icon-small","sm"===l.size),t.xp6(2),t.Q6J("ngIf",l.textModel.trim().length>0),t.xp6(1),t.Q6J("disabled",l.disabled)("ngModel",l.textModel))},dependencies:[a.mk,a.O5,e.Fj,e.JJ,e.On],styles:["#text-input[_ngcontent-%COMP%]{padding-right:calc(.5rem + 26px)}label[_ngcontent-%COMP%]{transform:rotateY(180deg);position:relative;top:1px}.reset-text-input[_ngcontent-%COMP%]{top:calc(50% - 10px);right:5px;z-index:6}"]}),_})()},4101:(g,u,n)=>{n.d(u,{O:()=>o});var t=n(6814),a=n(6223),e=n(5879);let o=(()=>{var c;class i{}return(c=i).\u0275fac=function(r){return new(r||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[t.ez,a.u5]}),i})()},3746:(g,u,n)=>{n.d(u,{P:()=>e});var t=n(6814),a=n(5879);let e=(()=>{var o;class c{}return(o=c).\u0275fac=function(_){return new(_||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[t.ez]}),c})()},3602:(g,u,n)=>{n.d(u,{K:()=>a});var t=n(5879);let a=(()=>{var e;class o{transform(i,_=5){return i.reduce((l=_,(s,d)=>{const m=(l=>l[l.length-1])(s);return m.length===l?s.push([d]):m.push(d),s}),[[]]);var l}}return(e=o).\u0275fac=function(i){return new(i||e)},e.\u0275pipe=t.Yjl({name:"arrayChunk",type:e,pure:!0}),o})()},4041:(g,u,n)=>{n.d(u,{C:()=>e});var t=n(6814),a=n(5879);let e=(()=>{var o;class c{}return(o=c).\u0275fac=function(_){return new(_||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[t.ez]}),c})()},9010:(g,u,n)=>{n.d(u,{b:()=>e});var t=n(8863),a=n(5879);let e=(()=>{var o;class c{transform(_,r=2){return(0,t.t)(_,r)}}return(o=c).\u0275fac=function(_){return new(_||o)},o.\u0275pipe=a.Yjl({name:"formatBytes",type:o,pure:!0}),c})()},8863:(g,u,n)=>{n.d(u,{t:()=>a});var t=n(2641);function a(e,o=2){if(!+e)return"0 Bytes";const i=o<0?0:o,r=Math.floor(Math.log(e)/Math.log(1024));return`${(0,t.o)(parseFloat((e/Math.pow(1024,r)).toFixed(i)))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][r]}`}},2858:(g,u,n)=>{n.d(u,{f:()=>o});var t=n(5879);const a=[[["","footer",""]]],e=["[footer]"];let o=(()=>{var c;class i{constructor(){this.errorType="",this.errorDescription=""}ngOnInit(){}}return(c=i).\u0275fac=function(r){return new(r||c)},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-error-page"]],inputs:{errorType:"errorType",errorDescription:"errorDescription"},ngContentSelectors:e,decls:5,vars:2,consts:[[1,"error-container"],[1,"d-flex","align-items-center","justify-content-center"],[1,"e-code","border-end","lh-1","pt-2","border-dark",3,"innerHTML"],[1,"e-description","lh-1","pt-1","text-nowrap","text-uppercase",3,"innerHTML"]],template:function(r,p){1&r&&(t.F$t(a),t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2)(3,"div",3),t.qZA(),t.Hsn(4),t.qZA()),2&r&&(t.xp6(2),t.Q6J("innerHTML",p.errorType,t.oJD),t.xp6(1),t.Q6J("innerHTML",p.errorDescription,t.oJD))},styles:["[_nghost-%COMP%]{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.e-code[_ngcontent-%COMP%]{padding-bottom:.5rem;padding-right:.5rem;font-size:2rem}.e-description[_ngcontent-%COMP%]{padding-left:.5rem}@media (min-width: 250px){.e-code[_ngcontent-%COMP%]{padding-bottom:1rem;padding-right:1rem;font-size:3rem}.e-description[_ngcontent-%COMP%]{padding-left:1rem}}@media (min-width: 600px){.e-code[_ngcontent-%COMP%]{font-size:5rem}.e-description[_ngcontent-%COMP%]{font-size:1.5rem}}"]}),i})()},15:(g,u,n)=>{n.d(u,{w:()=>e});var t=n(6814),a=n(5879);let e=(()=>{var o;class c{}return(o=c).\u0275fac=function(_){return new(_||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[t.ez]}),c})()},1274:(g,u,n)=>{n.d(u,{b:()=>_});var t=n(5879),a=n(6814),e=n(8595);const o=function(r){return{inactive:r}},c=function(){return{placement:"bottom"}};function i(r,p){if(1&r){const l=t.EpF();t.TgZ(0,"li",11),t.NdJ("click",function(){t.CHM(l);const d=t.oxw();return t.KtG(d.save())}),t.TgZ(1,"div",12),t._uU(2," check_circle "),t.qZA()()}if(2&r){const l=t.oxw();t.Q6J("ngClass",t.VKq(4,o,!l.isFormValid))("appTippy",l.isFormValid?"Salva":"Il form non \xe8 valido!")("tippyProps",t.DdM(6,c))("disableOnTouchDevice",!0)}}let _=(()=>{var r;class p{constructor(s){this.viewportScroller=s,this.buttonsId="",this.isFormValid=!1,this.hasForm=!0,this.cancelEvent=new t.vpe,this.saveEvent=new t.vpe,this.tipsEvent=new t.vpe}ngOnInit(){}scrollToPageTop(){this.viewportScroller.scrollToPosition([0,0])}scrollToButtons(){this.buttonsId&&this.viewportScroller.scrollToAnchor(this.buttonsId)}cancel(){this.cancelEvent.emit()}save(){this.saveEvent.emit()}tipsClick(){this.tipsEvent.emit()}}return(r=p).\u0275fac=function(s){return new(s||r)(t.Y36(a.EM))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-script-form-utilities"]],inputs:{buttonsId:"buttonsId",isFormValid:"isFormValid",hasForm:"hasForm"},outputs:{cancelEvent:"cancelEvent",saveEvent:"saveEvent",tipsEvent:"tipsEvent"},decls:15,vars:16,consts:[[1,"utilities","position-fixed","border-start","bg-white","shadow-sm","d-none","d-xl-block","fixed-scroll"],[1,"list-unstyled","mb-0","d-flex","flex-column","align-items-center"],["appTippy","Vai in cima",3,"tippyProps","disableOnTouchDevice","click"],[1,"d-block","material-icons-outlined","text-primary"],["appTippy","Suggerimenti",3,"tippyProps","disableOnTouchDevice","click"],[1,"d-block","material-icons-outlined","text-indigo"],["appTippy","Vai ai pulsanti",3,"ngClass","tippyProps","disableOnTouchDevice","click"],[1,"d-block","material-icons-outlined","text-warning"],["appTippy","Annulla",3,"tippyProps","disableOnTouchDevice","click"],[1,"d-block","material-icons-outlined","text-danger"],[3,"ngClass","appTippy","tippyProps","disableOnTouchDevice","click",4,"ngIf"],[3,"ngClass","appTippy","tippyProps","disableOnTouchDevice","click"],[1,"d-block","material-icons-outlined","text-success"]],template:function(s,d){1&s&&(t.TgZ(0,"div",0)(1,"ul",1)(2,"li",2),t.NdJ("click",function(){return d.scrollToPageTop()}),t.TgZ(3,"div",3),t._uU(4," arrow_circle_up "),t.qZA()(),t.TgZ(5,"li",4),t.NdJ("click",function(){return d.tipsClick()}),t.TgZ(6,"div",5),t._uU(7," lightbulb_circle "),t.qZA()(),t.TgZ(8,"li",6),t.NdJ("click",function(){return d.scrollToButtons()}),t.TgZ(9,"div",7),t._uU(10," build_circle "),t.qZA()(),t.TgZ(11,"li",8),t.NdJ("click",function(){return d.cancel()}),t.TgZ(12,"div",9),t._uU(13," cancel "),t.qZA()(),t.YNc(14,i,3,7,"li",10),t.qZA()()),2&s&&(t.xp6(2),t.Q6J("tippyProps",t.DdM(10,c))("disableOnTouchDevice",!0),t.xp6(3),t.Q6J("tippyProps",t.DdM(11,c))("disableOnTouchDevice",!0),t.xp6(3),t.Q6J("ngClass",t.VKq(12,o,0===d.buttonsId.length))("tippyProps",t.DdM(14,c))("disableOnTouchDevice",!0),t.xp6(3),t.Q6J("tippyProps",t.DdM(15,c))("disableOnTouchDevice",!0),t.xp6(3),t.Q6J("ngIf",d.hasForm))},dependencies:[a.mk,a.O5,e.$],styles:[".utilities[_ngcontent-%COMP%]{right:0;top:0;bottom:0;padding-top:calc(64px + 1.5rem)}.utilities[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:75px}li[_ngcontent-%COMP%]{margin:.5rem 0;transition:opacity .2s}li.inactive[_ngcontent-%COMP%]{opacity:.5}li[_ngcontent-%COMP%]:not(.inactive){cursor:pointer}.material-icons-outlined[_ngcontent-%COMP%]{font-size:36px}"]}),p})()},7780:(g,u,n)=>{n.d(u,{M:()=>o});var t=n(6814),a=n(3038),e=n(5879);let o=(()=>{var c;class i{}return(c=i).\u0275fac=function(r){return new(r||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[t.ez,a.G]}),i})()},4853:(g,u,n)=>{n.d(u,{j:()=>a});var t=n(4020);function a(e){return!isNaN(Number(e))||t.rr.test(`${e}`)}},5245:(g,u,n)=>{n.d(u,{v:()=>a});var t=n(5879);let a=(()=>{var e;class o{constructor(){}filterScripts(i,_,r){if(r.dev&&(i=i.filter(p=>r.dev===p.author.ffuid)),r.onlyInstalled&&(i=i.filter(p=>_.includes(p.id))),r.keywords){let p=this.createKeywordsRegex(r.keywords);i=i.filter(l=>l.name.match(p)||l.description.match(p))}return i}createKeywordsRegex(i){return i=i.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),new RegExp(`.*?(${i.split(" ").join("|")}).*?`,"i")}}return(e=o).\u0275fac=function(i){return new(i||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),o})()},8225:(g,u,n)=>{n.d(u,{b:()=>e});var t=n(6814),a=n(5879);let e=(()=>{var o;class c{}return(o=c).\u0275fac=function(_){return new(_||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[t.ez]}),c})()},6441:(g,u,n)=>{n.d(u,{Q:()=>a});var t=n(5879);let a=(()=>{var e;class o{transform(i,_){return i.includes(_)}}return(e=o).\u0275fac=function(i){return new(i||e)},e.\u0275pipe=t.Yjl({name:"arrayIncludes",type:e,pure:!0}),o})()},342:(g,u,n)=>{n.d(u,{Iq:()=>_,i3:()=>i});var t=n(6814),a=n(5879);class e{constructor(p,l){this._document=l;const s=this._textarea=this._document.createElement("textarea"),d=s.style;d.position="fixed",d.top=d.opacity="0",d.left="-999em",s.setAttribute("aria-hidden","true"),s.value=p,s.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(s)}copy(){const p=this._textarea;let l=!1;try{if(p){const s=this._document.activeElement;p.select(),p.setSelectionRange(0,p.value.length),l=this._document.execCommand("copy"),s&&s.focus()}}catch(s){}return l}destroy(){const p=this._textarea;p&&(p.remove(),this._textarea=void 0)}}let o=(()=>{var r;class p{constructor(s){this._document=s}copy(s){const d=this.beginCopy(s),m=d.copy();return d.destroy(),m}beginCopy(s){return new e(s,this._document)}}return(r=p).\u0275fac=function(s){return new(s||r)(a.LFG(t.K0))},r.\u0275prov=a.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),p})();const c=new a.OlP("CDK_COPY_TO_CLIPBOARD_CONFIG");let i=(()=>{var r;class p{constructor(s,d,m){this._clipboard=s,this._ngZone=d,this.text="",this.attempts=1,this.copied=new a.vpe,this._pending=new Set,m&&null!=m.attempts&&(this.attempts=m.attempts)}copy(s=this.attempts){if(s>1){let d=s;const m=this._clipboard.beginCopy(this.text);this._pending.add(m);const y=()=>{const C=m.copy();C||!--d||this._destroyed?(this._currentTimeout=null,this._pending.delete(m),m.destroy(),this.copied.emit(C)):this._currentTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(y,1))};y()}else this.copied.emit(this._clipboard.copy(this.text))}ngOnDestroy(){this._currentTimeout&&clearTimeout(this._currentTimeout),this._pending.forEach(s=>s.destroy()),this._pending.clear(),this._destroyed=!0}}return(r=p).\u0275fac=function(s){return new(s||r)(a.Y36(o),a.Y36(a.R0b),a.Y36(c,8))},r.\u0275dir=a.lG2({type:r,selectors:[["","cdkCopyToClipboard",""]],hostBindings:function(s,d){1&s&&a.NdJ("click",function(){return d.copy()})},inputs:{text:["cdkCopyToClipboard","text"],attempts:["cdkCopyToClipboardAttempts","attempts"]},outputs:{copied:"cdkCopyToClipboardCopied"}}),p})(),_=(()=>{var r;class p{}return(r=p).\u0275fac=function(s){return new(s||r)},r.\u0275mod=a.oAB({type:r}),r.\u0275inj=a.cJS({}),p})()}}]);
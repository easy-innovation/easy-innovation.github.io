"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[592],{8940:(y,h,n)=>{n.d(h,{s:()=>d});var t=n(4020),l=n(7460),e=n(9212),o=n(342),s=n(6814);const i=["iconWrapper"];function u(r,p){if(1&r&&(e.TgZ(0,"pre"),e._uU(1),e.ALo(2,"json"),e.qZA()),2&r){const m=e.oxw();e.xp6(),e.Oqu(e.lcZ(2,1,m.object))}}function c(r,p){if(1&r&&e._UZ(0,"pre",6),2&r){const m=e.oxw();e.Q6J("innerText",m.content)}}const a=(r,p,m)=>({"touch-device":r,copied:p,"wrap-content":m});let d=(()=>{var r;class p{constructor(v){this.tippyService=v,this.content="",this.wrapContent=!0,this.touchDevice=t.b1,this.toCopy="",this.tippyShown=!1}ngOnInit(){this.toCopy=this.object?JSON.stringify(this.object,null,2):this.content}setTippy(){this.tippyShown||(this.tippyShown=!0,this.tippyInstance||(this.tippyInstance=this.tippyService.create(this.iconWrapperRef.nativeElement,{content:"Copiato!",placement:"left",trigger:"manual",animation:"shift-away",hideOnClick:!1,offset:[0,0],appendTo:"parent"})),this.tippyService.show(this.tippyInstance),window.setTimeout(()=>{this.tippyInstance&&(this.tippyService.hide(this.tippyInstance),this.tippyShown=!1)},2500))}ngOnDestroy(){this.tippyInstance&&this.tippyService.destroy(this.tippyInstance)}}return(r=p).\u0275fac=function(v){return new(v||r)(e.Y36(l.S))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-custom-pre"]],viewQuery:function(v,f){if(1&v&&e.Gf(i,5),2&v){let b;e.iGM(b=e.CRH())&&(f.iconWrapperRef=b.first)}},inputs:{object:"object",content:"content",wrapContent:"wrapContent"},decls:8,vars:8,consts:[[1,"wrapper","position-relative","rounded",3,"ngClass"],[4,"ngIf","ngIfElse"],["noJson",""],[1,"icon-w","cursor-pointer","position-absolute",3,"cdkCopyToClipboard","click"],["iconWrapper",""],[1,"d-block","material-icons","copy-icon"],[3,"innerText"]],template:function(v,f){if(1&v&&(e.TgZ(0,"div",0),e.YNc(1,u,3,3,"pre",1)(2,c,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"div",3,4),e.NdJ("click",function(){return f.setTippy()}),e.TgZ(6,"div",5),e._uU(7,"content_copy"),e.qZA()()()),2&v){const b=e.MAs(3);e.Q6J("ngClass",e.kEZ(4,a,f.touchDevice,f.tippyShown,f.wrapContent)),e.xp6(),e.Q6J("ngIf",f.object)("ngIfElse",b),e.xp6(3),e.Q6J("cdkCopyToClipboard",f.toCopy)}},dependencies:[o.i3,s.mk,s.O5,s.Ts],styles:[".wrapper[_ngcontent-%COMP%]{background-color:var(--bs-gray-100)}.wrapper.touch-device[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{padding-right:calc(24px + 1.3rem)!important}.wrapper.wrap-content[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{white-space:pre-wrap;word-break:break-word}pre[_ngcontent-%COMP%]{padding:.75rem 1rem;margin:0;text-align:left}.icon-w[_ngcontent-%COMP%]{top:0;right:0;transition:opacity .2s;padding:.65rem;background-color:inherit}.copy-icon[_ngcontent-%COMP%]{transition:opacity .2s,color .2s}.copied[_ngcontent-%COMP%]   .copy-icon[_ngcontent-%COMP%]{color:#26873d}.wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied)   .icon-w[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied)   .copy-icon[_ngcontent-%COMP%]{opacity:0}.wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied):hover   .icon-w[_ngcontent-%COMP%]{opacity:1}.wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied):hover   .copy-icon[_ngcontent-%COMP%]{opacity:.7}.wrapper[_ngcontent-%COMP%]:not(.touch-device):not(.copied)   .icon-w[_ngcontent-%COMP%]:hover   .copy-icon[_ngcontent-%COMP%]{opacity:1}"]}),p})()},1568:(y,h,n)=>{n.d(h,{b:()=>s});var t=n(342),l=n(6814),e=n(3038),o=n(9212);let s=(()=>{var i;class u{}return(i=u).\u0275fac=function(a){return new(a||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[t.Iq,l.ez,e.G]}),u})()},4723:(y,h,n)=>{n.d(h,{r:()=>s});var t=n(9212),l=n(6814),e=n(6223);function o(i,u){if(1&i){const c=t.EpF();t.TgZ(0,"div",5),t.NdJ("click",function(){t.CHM(c);const d=t.oxw();return d.textModel="",t.KtG(d.keyupEvent(!0))}),t._uU(1," clear "),t.qZA()}}let s=(()=>{var i;class u{constructor(){this.disabled=!1,this.enterKeyOnly=!1,this.size="md",this.inputId="text-input-filter",this.textEvent=new t.vpe,this.textModel="",this.textEmitted=""}keyupEvent(a=!1){if(this.disabled)return;const d=this.textModel.trim();d.length>0&&!a&&this.enterKeyOnly||d!==this.textEmitted&&(this.textEmitted=d,this.textEvent.emit(this.textEmitted))}labelClick(a){0!==this.textModel.trim().length&&(a.preventDefault(),a.stopPropagation(),this.keyupEvent(!0))}}return(i=u).\u0275fac=function(a){return new(a||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-input-filter-text"]],inputs:{disabled:"disabled",enterKeyOnly:"enterKeyOnly",size:"size",inputId:"inputId"},outputs:{textEvent:"textEvent"},decls:6,vars:8,consts:[[1,"input-group","position-relative",3,"ngClass"],[1,"input-group-text"],[1,"d-block","material-icons-outlined","text-muted","cursor-pointer",3,"for","click"],["class","material-icons d-block icon-small text-danger position-absolute reset-text-input cursor-pointer",3,"click",4,"ngIf"],["type","text","placeholder","Cerca...",1,"form-control",3,"id","disabled","ngModel","ngModelChange","keyup","keyup.enter"],[1,"material-icons","d-block","icon-small","text-danger","position-absolute","reset-text-input","cursor-pointer",3,"click"]],template:function(a,d){1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t.NdJ("click",function(p){return d.labelClick(p)}),t._uU(3,"search"),t.qZA()(),t.YNc(4,o,2,0,"div",3),t.TgZ(5,"input",4),t.NdJ("ngModelChange",function(p){return d.textModel=p})("keyup",function(){return d.keyupEvent()})("keyup.enter",function(){return d.keyupEvent(!0)}),t.qZA()()),2&a&&(t.Q6J("ngClass","md"!==d.size?"input-group-"+d.size:""),t.xp6(2),t.ekj("icon-small","sm"===d.size),t.Q6J("for",d.inputId),t.xp6(2),t.Q6J("ngIf",d.textModel.trim().length>0),t.xp6(),t.Q6J("id",d.inputId)("disabled",d.disabled)("ngModel",d.textModel))},dependencies:[l.mk,l.O5,e.Fj,e.JJ,e.On],styles:["#text-input[_ngcontent-%COMP%]{padding-right:calc(.5rem + 26px)}label[_ngcontent-%COMP%]{transform:rotateY(180deg);position:relative;top:1px}.reset-text-input[_ngcontent-%COMP%]{top:calc(50% - 10px);right:5px;z-index:6}"]}),u})()},4101:(y,h,n)=>{n.d(h,{O:()=>o});var t=n(6814),l=n(6223),e=n(9212);let o=(()=>{var s;class i{}return(s=i).\u0275fac=function(c){return new(c||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[t.ez,l.u5]}),i})()},7980:(y,h,n)=>{n.d(h,{w:()=>b});var t=n(1413),l=n(5861),e=n(9212),o=n(9093),s=n(4004),i=n(8645),u=n(9773),c=n(836),a=n(2438),d=n(1410),r=n(6306),p=n(6593),m=n(6814);const v=["iframe"],f=(C,E)=>({"scroll-sandbox":C,"reset-padding":E});let b=(()=>{var C;class E{constructor(_,g,O){this.domSanitizer=_,this.globalsService=g,this.postMessageService=O,this.head="",this.body="",this.bodyClass=[],this.initData={},this.resetMainPadding=!1,this.loadEvent=new e.vpe,this.sandboxId=(0,s.Z)(),this.iframeAutoHeight=!0,this.iframeHeight=0,this.componentDestroyed=new i.x,this.bsCssLink=window.location.origin+"/assets/css/bootstrap.css"}loaded(){this.iframeContent&&this.loadEvent.emit(!0)}ngOnInit(){var _=this;return(0,l.Z)(function*(){var g;const O=_.globalsService.forum?Object.assign({},_.globalsService.forum):void 0;O&&delete O.admin,_.initData=(0,t.Z)({[r.Tu.FORUM]:O,[r.Tu.USER]:null===(g=_.globalsService.credentials)||void 0===g?void 0:g.user},_.initData),_.iframeContent=_.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(new Blob(['<!DOCTYPE html>\n                    <html lang="it">\n                        <head>\n                            <title></title>\n                            <link rel="stylesheet" href="'.concat(_.bsCssLink,"\"></link>\n                            <script>\n                                window.initData = JSON.parse('").concat(JSON.stringify(_.initData),"');\n                                window.sandboxHeightMode = 'auto';\n                            <\/script>\n                            ").concat(_.head,"\n                        </head>\n                        <body").concat(_.bodyClass.length?' class="'+_.bodyClass.join(" ")+'"':"",">\n                            ").concat(_.body,'\n                        <script>\n                            (() => {\n                                parent.postMessage({\n                                    id: "').concat(_.sandboxId,"\",\n                                    sandboxHeightMode: window.sandboxHeightMode\n                                }, \"*\");\n\n                                if (window.sandboxHeightMode !== 'auto') {\n                                    return;\n                                }\n\n                                document.body.style.overflow = 'hidden';\n\n                                let lastSandboxHeight = 0; \n                                const resizeObserver = new ResizeObserver((entries, observer) => {\n                                    for (const entry of entries) {\n                                        if (entry.target.nodeName === 'BODY' && lastSandboxHeight !== entry.contentRect.height) {\n                                            lastSandboxHeight = entry.contentRect.height;\n                                            parent.postMessage({\n                                                id: \"").concat(_.sandboxId,'",\n                                                sandboxHeight: entry.contentRect.height\n                                            }, "*");\n                                        }\n                                    }\n                                })\n                                resizeObserver.observe(document.body)\n                            })();\n                        <\/script>\n                        </body>\n                    </html>')],{type:"text/html"}))),_.setSubscriptions()})()}setSubscriptions(){this.globalsService.forumObservable.pipe((0,u.R)(this.componentDestroyed)).subscribe(_=>{const g=Object.assign({},_);null==g||delete g.admin,this.postMessageService.sendToSandbox(this.iframe.nativeElement,r.Yt.FORUM,{forum:g})}),this.globalsService.profileObservable.pipe((0,c.T)(1),(0,u.R)(this.componentDestroyed)).subscribe(_=>{this.postMessageService.sendToSandbox(this.iframe.nativeElement,r.Yt.USER,{profile:_})})}ngAfterViewInit(){this.eventsObservable&&this.eventsObservable.pipe((0,u.R)(this.componentDestroyed)).subscribe(_=>{this.postMessageService.sendToSandbox(this.iframe.nativeElement,_.eventType,_.eventContent)}),(0,a.R)(window,"message").pipe((0,u.R)(this.componentDestroyed)).subscribe(_=>{_.data.id===this.sandboxId&&(_.data.sandboxHeightMode&&(this.iframeAutoHeight="scroll"!==_.data.sandboxHeightMode),void 0!==_.data.sandboxHeight&&(this.iframeHeight=Number(_.data.sandboxHeight)))})}ngOnDestroy(){this.componentDestroyed.next(),this.componentDestroyed.complete()}}return(C=E).\u0275fac=function(_){return new(_||C)(e.Y36(p.H7),e.Y36(d.d),e.Y36(o.F))},C.\u0275cmp=e.Xpm({type:C,selectors:[["app-sandbox"]],viewQuery:function(_,g){if(1&_&&e.Gf(v,5),2&_){let O;e.iGM(O=e.CRH())&&(g.iframe=O.first)}},inputs:{head:"head",body:"body",bodyClass:"bodyClass",eventsObservable:"eventsObservable",initData:"initData",resetMainPadding:"resetMainPadding"},outputs:{loadEvent:"loadEvent"},decls:2,vars:7,consts:[["sandbox","allow-forms allow-scripts allow-popups-to-escape-sandbox allow-popups allow-downloads",3,"ngClass","src","load"],["iframe",""]],template:function(_,g){1&_&&(e.TgZ(0,"iframe",0,1),e.NdJ("load",function(){return g.loaded()}),e.qZA()),2&_&&(e.Udp("height",g.iframeHeight+"px"),e.Q6J("ngClass",e.WLB(4,f,!g.iframeAutoHeight,g.resetMainPadding))("src",g.iframeContent,e.uOi))},dependencies:[m.mk],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-grow:1}iframe[_ngcontent-%COMP%]{margin:0;padding:0;display:block;border:0;height:auto;min-height:0;min-width:100%}iframe.scroll-sandbox[_ngcontent-%COMP%]{flex-grow:1}.reset-padding[_ngcontent-%COMP%]{margin-bottom:-1rem}@media (min-width: 768px){.reset-padding[_ngcontent-%COMP%]{margin:0 -1rem -1rem}}@media (min-width: 960px){.reset-padding[_ngcontent-%COMP%]{margin:0 -1.5rem -1.5rem}}"]}),E})()},1874:(y,h,n)=>{n.d(h,{i:()=>e});var t=n(6814),l=n(9212);let e=(()=>{var o;class s{}return(o=s).\u0275fac=function(u){return new(u||o)},o.\u0275mod=l.oAB({type:o}),o.\u0275inj=l.cJS({imports:[t.ez]}),s})()},3746:(y,h,n)=>{n.d(h,{P:()=>e});var t=n(6814),l=n(9212);let e=(()=>{var o;class s{}return(o=s).\u0275fac=function(u){return new(u||o)},o.\u0275mod=l.oAB({type:o}),o.\u0275inj=l.cJS({imports:[t.ez]}),s})()},3602:(y,h,n)=>{n.d(h,{K:()=>l});var t=n(9212);let l=(()=>{var e;class o{transform(i,u=5){return i.reduce((d=u,(r,p)=>{const m=(d=>d[d.length-1])(r);return m.length===d?r.push([p]):m.push(p),r}),[[]]);var d}}return(e=o).\u0275fac=function(i){return new(i||e)},e.\u0275pipe=t.Yjl({name:"arrayChunk",type:e,pure:!0}),o})()},4041:(y,h,n)=>{n.d(h,{C:()=>e});var t=n(6814),l=n(9212);let e=(()=>{var o;class s{}return(o=s).\u0275fac=function(u){return new(u||o)},o.\u0275mod=l.oAB({type:o}),o.\u0275inj=l.cJS({imports:[t.ez]}),s})()},9010:(y,h,n)=>{n.d(h,{b:()=>e});var t=n(8863),l=n(9212);let e=(()=>{var o;class s{transform(u,c=2){return(0,t.t)(u,c)}}return(o=s).\u0275fac=function(u){return new(u||o)},o.\u0275pipe=l.Yjl({name:"formatBytes",type:o,pure:!0}),s})()},8863:(y,h,n)=>{n.d(h,{t:()=>l});var t=n(2641);function l(e,o=2){if(!+e)return"0 Bytes";let s=!1;e<0&&(s=!0,e=Math.abs(e));const u=o<0?0:o,a=Math.floor(Math.log(e)/Math.log(1024));return"".concat(s?"-":"").concat((0,t.o)(parseFloat((e/Math.pow(1024,a)).toFixed(u)))," ").concat(["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][a])}},2858:(y,h,n)=>{n.d(h,{f:()=>o});var t=n(9212);const l=[[["","footer",""]]],e=["[footer]"];let o=(()=>{var s;class i{constructor(){this.errorType="",this.errorDescription=""}}return(s=i).\u0275fac=function(c){return new(c||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-error-page"]],inputs:{errorType:"errorType",errorDescription:"errorDescription"},ngContentSelectors:e,decls:5,vars:2,consts:[[1,"error-container"],[1,"d-flex","align-items-center","justify-content-center"],[1,"e-code","border-end","lh-1","pt-2","border-dark",3,"innerHTML"],[1,"e-description","lh-1","pt-1","text-nowrap","text-uppercase",3,"innerHTML"]],template:function(c,a){1&c&&(t.F$t(l),t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"div",2)(3,"div",3),t.qZA(),t.Hsn(4),t.qZA()),2&c&&(t.xp6(2),t.Q6J("innerHTML",a.errorType,t.oJD),t.xp6(),t.Q6J("innerHTML",a.errorDescription,t.oJD))},styles:["[_nghost-%COMP%]{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.e-code[_ngcontent-%COMP%]{padding-bottom:.5rem;padding-right:.5rem;font-size:2rem}.e-description[_ngcontent-%COMP%]{padding-left:.5rem}@media (min-width: 250px){.e-code[_ngcontent-%COMP%]{padding-bottom:1rem;padding-right:1rem;font-size:3rem}.e-description[_ngcontent-%COMP%]{padding-left:1rem}}@media (min-width: 600px){.e-code[_ngcontent-%COMP%]{font-size:5rem}.e-description[_ngcontent-%COMP%]{font-size:1.5rem}}"]}),i})()},15:(y,h,n)=>{n.d(h,{w:()=>e});var t=n(6814),l=n(9212);let e=(()=>{var o;class s{}return(o=s).\u0275fac=function(u){return new(u||o)},o.\u0275mod=l.oAB({type:o}),o.\u0275inj=l.cJS({imports:[t.ez]}),s})()},1274:(y,h,n)=>{n.d(h,{b:()=>c});var t=n(9212),l=n(6814),e=n(8595);const o=()=>({placement:"bottom"});function s(a,d){if(1&a){const r=t.EpF();t.TgZ(0,"li",12),t.NdJ("click",function(){t.CHM(r);const m=t.oxw();return t.KtG(m.downloadEvent.emit())}),t.TgZ(1,"div",13),t._uU(2," download_for_offline "),t.qZA()()}2&a&&t.Q6J("tippyProps",t.DdM(2,o))("disableOnTouchDevice",!0)}const i=a=>({inactive:a});function u(a,d){if(1&a){const r=t.EpF();t.TgZ(0,"li",14),t.NdJ("click",function(){t.CHM(r);const m=t.oxw();return t.KtG(m.saveEvent.emit())}),t.TgZ(1,"div",15),t._uU(2," check_circle "),t.qZA()()}if(2&a){const r=t.oxw();t.Q6J("ngClass",t.VKq(4,i,!r.isFormValid))("appTippy",r.isFormValid?"Salva":"Il form non \xe8 valido!")("tippyProps",t.DdM(6,o))("disableOnTouchDevice",!0)}}let c=(()=>{var a;class d{constructor(p){this.viewportScroller=p,this.buttonsId="",this.isFormValid=!1,this.hasForm=!0,this.canDownload=!1,this.cancelEvent=new t.vpe,this.saveEvent=new t.vpe,this.tipsEvent=new t.vpe,this.downloadEvent=new t.vpe}scrollToPageTop(){this.viewportScroller.scrollToPosition([0,0])}scrollToButtons(){this.buttonsId&&this.viewportScroller.scrollToAnchor(this.buttonsId)}}return(a=d).\u0275fac=function(p){return new(p||a)(t.Y36(l.EM))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-script-form-utilities"]],inputs:{buttonsId:"buttonsId",isFormValid:"isFormValid",hasForm:"hasForm",canDownload:"canDownload"},outputs:{cancelEvent:"cancelEvent",saveEvent:"saveEvent",tipsEvent:"tipsEvent",downloadEvent:"downloadEvent"},decls:16,vars:17,consts:[[1,"utilities","position-fixed","border-start","bg-white","shadow-sm","d-none","d-xl-block"],[1,"list-unstyled","mb-0","d-flex","flex-column","align-items-center"],["appTippy","Vai in cima",3,"tippyProps","disableOnTouchDevice","click"],[1,"d-block","material-icons-outlined","text-primary"],["appTippy","Suggerimenti",3,"tippyProps","disableOnTouchDevice","click"],[1,"d-block","material-icons-outlined","text-indigo"],["appTippy","Annulla",3,"tippyProps","disableOnTouchDevice","click"],[1,"d-block","material-icons-outlined","text-danger"],["appTippy","Vai ai pulsanti",3,"ngClass","tippyProps","disableOnTouchDevice","click"],[1,"d-block","material-icons-outlined","text-warning"],["appTippy","Esporta e importa",3,"tippyProps","disableOnTouchDevice","click",4,"ngIf"],[3,"ngClass","appTippy","tippyProps","disableOnTouchDevice","click",4,"ngIf"],["appTippy","Esporta e importa",3,"tippyProps","disableOnTouchDevice","click"],[1,"d-block","material-icons-outlined","download"],[3,"ngClass","appTippy","tippyProps","disableOnTouchDevice","click"],[1,"d-block","material-icons-outlined","text-success"]],template:function(p,m){1&p&&(t.TgZ(0,"div",0)(1,"ul",1)(2,"li",2),t.NdJ("click",function(){return m.scrollToPageTop()}),t.TgZ(3,"div",3),t._uU(4," arrow_circle_up "),t.qZA()(),t.TgZ(5,"li",4),t.NdJ("click",function(){return m.tipsEvent.emit()}),t.TgZ(6,"div",5),t._uU(7," lightbulb_circle "),t.qZA()(),t.TgZ(8,"li",6),t.NdJ("click",function(){return m.cancelEvent.emit()}),t.TgZ(9,"div",7),t._uU(10," cancel "),t.qZA()(),t.TgZ(11,"li",8),t.NdJ("click",function(){return m.scrollToButtons()}),t.TgZ(12,"div",9),t._uU(13," build_circle "),t.qZA()(),t.YNc(14,s,3,3,"li",10)(15,u,3,7,"li",11),t.qZA()()),2&p&&(t.xp6(2),t.Q6J("tippyProps",t.DdM(11,o))("disableOnTouchDevice",!0),t.xp6(3),t.Q6J("tippyProps",t.DdM(12,o))("disableOnTouchDevice",!0),t.xp6(3),t.Q6J("tippyProps",t.DdM(13,o))("disableOnTouchDevice",!0),t.xp6(3),t.Q6J("ngClass",t.VKq(14,i,0===m.buttonsId.length))("tippyProps",t.DdM(16,o))("disableOnTouchDevice",!0),t.xp6(3),t.Q6J("ngIf",m.canDownload),t.xp6(),t.Q6J("ngIf",m.hasForm))},dependencies:[l.mk,l.O5,e.$],styles:[".utilities[_ngcontent-%COMP%]{right:0;top:0;bottom:0;padding-top:calc(64px + 1.5rem)}.utilities[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{width:75px}li[_ngcontent-%COMP%]{margin:.5rem 0;transition:opacity .2s}li.inactive[_ngcontent-%COMP%]{opacity:.5}li[_ngcontent-%COMP%]:not(.inactive){cursor:pointer}.material-icons-outlined[_ngcontent-%COMP%]{font-size:36px}.download[_ngcontent-%COMP%]{color:#cc9a06}"]}),d})()},7780:(y,h,n)=>{n.d(h,{M:()=>o});var t=n(6814),l=n(3038),e=n(9212);let o=(()=>{var s;class i{}return(s=i).\u0275fac=function(c){return new(c||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[t.ez,l.G]}),i})()},857:(y,h,n)=>{n.d(h,{By:()=>i,Kw:()=>e,VA:()=>o,ks:()=>s,u_:()=>l});var t=n(3729);const l=/^https:\/\/[^?]+[^?/]+\.js(\?.+)?$/,e=/^https?:\/\/[^?]+[^?/]+\.js(\?.+)?$/,o=/^https:\/\/[^?]+[^?/]+\.css(\?.+)?$/,s=[{title:"[Open] Font Awesome 4.7.0",link:"https://ffb.forumfree.net:4999/nicoxys/libs/fontawesome-4.7.0.css"},{title:"[Open] Font Awesome 5.7.0",link:"https://ffb.forumfree.net:4999/nicoxys/libs/fontawesome-5.7.0.css"},{title:"[Open] Font Awesome 6.2.1",link:"https://img.forumfree.net/fontawesome/6.2.1/css/all.min.css"},{title:"[Open] Twitter API",link:"https://platform.twitter.com/widgets.js"},{title:"[Open] AngularJS 1.7.7",link:"https://ffb.forumfree.net:4999/nicoxys/libs/angularjs-1.7.7.js"},{title:"[Open] ReactJS (w/ dom) 16.8.2",link:"https://ffb.forumfree.net:4999/nicoxys/libs/reactjs-16.8.2.js"},{title:"[Open] Popper 2.5.2",link:"https://ffb.forumfree.net:4999/nicoxys/libs/popper-2.5.2.js"},{title:"[Open] Tippy 6.2.6",link:"https://ffb.forumfree.net:4999/nicoxys/libs/tippy-6.2.6.js"},{title:"[Open] Vue.js 2.6.6",link:"https://ffb.forumfree.net:4999/nicoxys/libs/vuejs-2.6.6.js"},{title:"[Open] Mustache 3.0.1",link:"https://ffb.forumfree.net:4999/nicoxys/libs/mustache-3.0.1.js"},{title:"[Open] Handlebars 4.7.3",link:"https://ffb.forumfree.net:4999/nicoxys/libs/handlebars-4.7.3.js"},{title:"[Open] Timeago",link:"https://ffb.forumfree.net:4999/nicoxys/libs/jquery.timeago.js"},{title:"[Open] RxJS 6.5.1",link:"https://ffb.forumfree.net:4999/nicoxys/libs/rxjs-6.5.1.js"},{title:"[Open] ChartJs 2.7.2",link:"https://ffb.forumfree.net:4999/nicoxys/libs/chartjs-2.7.2.js"},{title:"[Open] Apollo Client",link:"https://ffb.forumfree.net:4999/nicoxys/libs/apollo-client-2.6.10.js"},{title:"[Private - All] Crediti in fondo al forum",link:"https://ffb.forumfree.net:4999/nicoxys/private/credits.js"},{tab:t.tr.FFB,title:"[Private - FFBoard] HelloBox",link:"https://ffb.forumfree.net:4999/nicoxys/forum/hellobox.js"}],i=[{title:"Codice HTML che sar\xe0 mostrato nel tag HEAD",const:"html_head"},{title:"[Start] Codice HTML che sar\xe0 mostrato in CIMA a tutte le pagine",const:"html_top_start"},{title:"[End] Codice HTML che sar\xe0 mostrato in CIMA a tutte le pagine",const:"html_top_end"},{title:"[Start] Codice HTML che sar\xe0 mostrato in tutte le pagine sotto il logo del sito",const:"html_logo_start"},{title:"[End] Codice HTML che sar\xe0 mostrato in tutte le pagine sotto il logo del sito",const:"html_logo_end"},{title:"[Start] Codice HTML che sar\xe0 mostrato nella homepage del sito",const:"html_home_start"},{title:"[End] Codice HTML che sar\xe0 mostrato nella homepage del sito",const:"html_home_end"},{title:"Codice HTML che sar\xe0 mostrato sopra le pubblicit\xe0",const:"html_ads_start"},{title:"[Start] Codice HTML che sar\xe0 mostrato in FONDO a tutte le pagine",const:"html_bottom_start"},{title:"[End] Codice HTML che sar\xe0 mostrato in FONDO a tutte le pagine",const:"html_bottom_end"}]},4853:(y,h,n)=>{n.d(h,{j:()=>l});var t=n(4020);function l(e){return!isNaN(Number(e))||t.A8.test("".concat(e))}},5245:(y,h,n)=>{n.d(h,{v:()=>l});var t=n(9212);let l=(()=>{var e;class o{filterScripts(i,u,c){if(c.dev&&(i=i.filter(a=>c.dev===a.author.ffuid)),c.onlyInstalled&&(i=i.filter(a=>u.includes(a.id))),c.keywords){const a=this.createKeywordsRegex(c.keywords);i=i.filter(d=>d.name.match(a)||d.description.match(a))}return i}createKeywordsRegex(i){return i=i.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),new RegExp(".*?(".concat(i.split(" ").join("|"),").*?"),"i")}}return(e=o).\u0275fac=function(i){return new(i||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),o})()},137:(y,h,n)=>{n.d(h,{s:()=>r});var t=n(857),l=n(8645),e=n(4664),o=n(2096),s=n(9212),i=n(7398),u=n(9315),a=n(9862);let d=(()=>{var p;class m{constructor(f){this.http=f}getContentFromUrls(f){const b=f.map(C=>this.http.get(C,{responseType:"text"}).pipe((0,i.U)(E=>({source:E,resource:C}))));return(0,u.D)([...b,(0,o.of)({source:"",resource:""})]).pipe((0,e.w)(C=>{C=C.filter(_=>""!==_.resource);const E=[],M=[];return C.forEach(_=>{const g=function c(p){const m={head:"",body:""},f=(new DOMParser).parseFromString(p.source,"text/html"),b=f.querySelector("head"),C=f.querySelector("body"),E=f.querySelector("base");if(E){const M=E.getAttribute("href")||"";f.querySelectorAll("head link, head img, head script, body link, body script, body img").forEach(g=>{const O="LINK"===g.tagName?"href":"src",T=g.getAttribute(O);if(T&&!T.startsWith("http")){let P="".concat(T);T.startsWith(M)||(P="".concat(M).concat(P));const D=new URL(p.resource).origin;P.startsWith("http")||(P="".concat(D,"/").concat(P)),g.setAttribute(O,P)}}),E.remove()}return b&&(["meta","title","base"].forEach(M=>{b.querySelectorAll(M).forEach(g=>g.remove())}),m.head=b.innerHTML),C&&(m.body=C.innerHTML),m}(_);g.head&&E.push(g.head),g.body&&M.push(g.body)}),(0,o.of)({headData:E,bodyData:M})}))}}return(p=m).\u0275fac=function(f){return new(f||p)(s.LFG(a.eN))},p.\u0275prov=s.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),m})(),r=(()=>{var p;class m{constructor(f){this.sandboxService=f}create(f,b={}){const C=new l.x,E=f.value.filter(M=>!t.u_.test(M)&&!t.VA.test(M));return this.sandboxService.getContentFromUrls(E).pipe((0,e.w)(M=>(0,o.of)({eventSubject:C,eventObservable:C.asObservable(),loading:!0,initData:b,headData:[...f.value.map(_=>t.u_.test(_)?"<script src='".concat(_,"'><\/script>"):t.VA.test(_)?'<link rel="stylesheet" type="text/css" href="'.concat(_,'">'):""),...M.headData].join(""),bodyData:[...M.bodyData].join("")})))}}return(p=m).\u0275fac=function(f){return new(f||p)(s.LFG(d))},p.\u0275prov=s.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),m})()},8225:(y,h,n)=>{n.d(h,{b:()=>e});var t=n(6814),l=n(9212);let e=(()=>{var o;class s{}return(o=s).\u0275fac=function(u){return new(u||o)},o.\u0275mod=l.oAB({type:o}),o.\u0275inj=l.cJS({imports:[t.ez]}),s})()},6441:(y,h,n)=>{n.d(h,{Q:()=>l});var t=n(9212);let l=(()=>{var e;class o{transform(i,u){return i.includes(u)}}return(e=o).\u0275fac=function(i){return new(i||e)},e.\u0275pipe=t.Yjl({name:"arrayIncludes",type:e,pure:!0}),o})()},342:(y,h,n)=>{n.d(h,{Iq:()=>u,i3:()=>i});var t=n(6814),l=n(9212);class e{constructor(a,d){this._document=d;const r=this._textarea=this._document.createElement("textarea"),p=r.style;p.position="fixed",p.top=p.opacity="0",p.left="-999em",r.setAttribute("aria-hidden","true"),r.value=a,r.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(r)}copy(){const a=this._textarea;let d=!1;try{if(a){const r=this._document.activeElement;a.select(),a.setSelectionRange(0,a.value.length),d=this._document.execCommand("copy"),r&&r.focus()}}catch(r){}return d}destroy(){const a=this._textarea;a&&(a.remove(),this._textarea=void 0)}}let o=(()=>{var c;class a{constructor(r){this._document=r}copy(r){const p=this.beginCopy(r),m=p.copy();return p.destroy(),m}beginCopy(r){return new e(r,this._document)}}return(c=a).\u0275fac=function(r){return new(r||c)(l.LFG(t.K0))},c.\u0275prov=l.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),a})();const s=new l.OlP("CDK_COPY_TO_CLIPBOARD_CONFIG");let i=(()=>{var c;class a{constructor(r,p,m){this._clipboard=r,this._ngZone=p,this.text="",this.attempts=1,this.copied=new l.vpe,this._pending=new Set,m&&null!=m.attempts&&(this.attempts=m.attempts)}copy(r=this.attempts){if(r>1){let p=r;const m=this._clipboard.beginCopy(this.text);this._pending.add(m);const v=()=>{const f=m.copy();f||! --p||this._destroyed?(this._currentTimeout=null,this._pending.delete(m),m.destroy(),this.copied.emit(f)):this._currentTimeout=this._ngZone.runOutsideAngular(()=>setTimeout(v,1))};v()}else this.copied.emit(this._clipboard.copy(this.text))}ngOnDestroy(){this._currentTimeout&&clearTimeout(this._currentTimeout),this._pending.forEach(r=>r.destroy()),this._pending.clear(),this._destroyed=!0}}return(c=a).\u0275fac=function(r){return new(r||c)(l.Y36(o),l.Y36(l.R0b),l.Y36(s,8))},c.\u0275dir=l.lG2({type:c,selectors:[["","cdkCopyToClipboard",""]],hostBindings:function(r,p){1&r&&l.NdJ("click",function(){return p.copy()})},inputs:{text:[l.lbL.None,"cdkCopyToClipboard","text"],attempts:[l.lbL.None,"cdkCopyToClipboardAttempts","attempts"]},outputs:{copied:"cdkCopyToClipboardCopied"},standalone:!0}),a})(),u=(()=>{var c;class a{}return(c=a).\u0275fac=function(r){return new(r||c)},c.\u0275mod=l.oAB({type:c}),c.\u0275inj=l.cJS({}),a})()}}]);
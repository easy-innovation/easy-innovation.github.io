"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[867],{5867:(V,f,o)=>{o.r(f),o.d(f,{UploadModule:()=>X});var E=o(4243),c=o(6814),F=o(8876),m=o(3946),T=o(8109),p=o(9515);const x=[{size:0,selected:!0,text:"Default"},{size:800,selected:!1,text:""},{size:600,selected:!1,text:""},{size:400,selected:!1,text:""},{size:200,selected:!1,text:""},{size:100,selected:!1,text:""}].map(l=>(l.size&&(l.text=`${l.size}px`),l));var S=o(1410),b=o(4020),h=o(148),M=o(9093),U=o(2907),P=o(3845),A=o(4887),L=o(5487),v=o(658),C=o(7165),e=o(5879),Z=o(9344),y=o(5851);let _=(()=>{class l{constructor(){this.selected=!1,this.value="",this.text="",this.classes=["p-2"],this.clickEvent=new e.vpe}ngOnInit(){}}return l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-collapse-button"]],inputs:{selected:"selected",value:"value",text:"text",classes:"classes"},outputs:{clickEvent:"clickEvent"},decls:1,vars:4,consts:[["role","button",1,"rounded","text-reset","m-1","d-block",3,"ngClass","innerHTML","click"]],template:function(n,t){1&n&&(e.TgZ(0,"a",0),e.NdJ("click",function(){return t.clickEvent.emit(t.value)}),e.qZA()),2&n&&(e.ekj("selected",t.selected),e.Q6J("ngClass",t.classes)("innerHTML",t.text,e.oJD))},dependencies:[c.mk],styles:["a[_ngcontent-%COMP%]{transition:background-color .2s;-webkit-user-select:none;-moz-user-select:none;user-select:none}a.selected[_ngcontent-%COMP%]{background-color:#dae0ff}"]}),l})();var u=o(5861),D=o(9473),J=o(4228);function I(l,i){1&l&&(e._UZ(0,"app-loader",2),e.ALo(1,"translate")),2&l&&e.Q6J("onlyMessage",!0)("message",e.lcZ(1,2,"ROUTES.WIDGETS.UPLOAD.LOADING_FOLDERS"))}const k=function(l){return{url:l}};function R(l,i){if(1&l&&(e.TgZ(0,"div",7)(1,"p",8),e._uU(2),e.ALo(3,"translate"),e.qZA(),e._UZ(4,"p",9),e.ALo(5,"translate"),e.qZA()),2&l){const n=e.oxw(2);e.xp6(2),e.hij(" ",e.lcZ(3,2,"ROUTES.WIDGETS.UPLOAD.NO_FOLDER")," "),e.xp6(2),e.Q6J("innerHTML",e.xi3(5,4,"ROUTES.WIDGETS.UPLOAD.CREATE_FOLDER",e.VKq(7,k,n.fileManagerUrl)),e.oJD)}}const N=function(){return["fst-italic","p-1"]};function z(l,i){if(1&l){const n=e.EpF();e.TgZ(0,"li")(1,"app-collapse-button",13),e.NdJ("clickEvent",function(s){e.CHM(n);const r=e.oxw(3);return e.KtG(r.folderClickEvent(s))}),e.ALo(2,"translate"),e.qZA()()}2&l&&(e.xp6(1),e.Q6J("text",e.lcZ(2,2,"SHARED.BACK"))("classes",e.DdM(4,N)))}const B=function(){return["p-1"]};function G(l,i){if(1&l){const n=e.EpF();e.TgZ(0,"li")(1,"app-collapse-button",14),e.NdJ("clickEvent",function(s){e.CHM(n);const r=e.oxw(3);return e.KtG(r.folderClickEvent(s))}),e.qZA()()}if(2&l){const n=i.$implicit;e.xp6(1),e.Q6J("classes",e.DdM(3,B))("text",n.name)("value",n.name)}}function Q(l,i){if(1&l&&(e.TgZ(0,"ul",10),e.YNc(1,z,3,5,"li",11),e.YNc(2,G,2,4,"li",12),e.qZA()),2&l){const n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",n.depth),e.xp6(1),e.Q6J("ngForOf",n.folders)}}function H(l,i){if(1&l&&(e.TgZ(0,"div",3),e._uU(1),e.ALo(2,"translate"),e._UZ(3,"em",4),e.ALo(4,"arrayJoin"),e.qZA(),e.YNc(5,R,6,9,"div",5),e.YNc(6,Q,3,2,"ng-template",null,6,e.W1O)),2&l){const n=e.MAs(7),t=e.oxw();e.xp6(1),e.hij(" ",e.lcZ(2,4,"ROUTES.WIDGETS.UPLOAD.CURRENT_PATH")," "),e.xp6(2),e.Q6J("innerText",t.currentFolderPath.length?e.xi3(4,6,t.currentFolderPath,"/"):"root"),e.xp6(2),e.Q6J("ngIf",0===t.folders.length&&0===t.depth)("ngIfElse",n)}}let Y=(()=>{class l{constructor(n){this.uploadService=n,this.currentFolderPath=[],this.firstOpened=!1,this.fileManagerUrl="",this.clickEvent=new e.vpe,this.loading=!0,this.folders=[],this.depth=0}ngOnInit(){this.depth=this.currentFolderPath.length}ngOnChanges(n){var t=this;return(0,u.Z)(function*(){n.firstOpened&&!n.firstOpened.firstChange&&t.firstOpened&&(t.folders=(yield t.uploadService.getFileList(t.currentFolderPath)).folders,t.loading=!1)})()}folderClickEvent(n){var t=this;return(0,u.Z)(function*(){let s=n.length?[...t.currentFolderPath,n]:t.currentFolderPath.slice(0,-1);t.clickEvent.emit(s),yield t.getFolders(s)})()}getFolders(n){var t=this;return(0,u.Z)(function*(){if(t.loading)return;t.loading=!0,t.depth=n.length;const s=yield t.uploadService.getFileList(n);t.folders=s.folders,t.loading=!1})()}}return l.\u0275fac=function(n){return new(n||l)(e.Y36(v.C))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-folder-list"]],inputs:{currentFolderPath:"currentFolderPath",firstOpened:"firstOpened",fileManagerUrl:"fileManagerUrl"},outputs:{clickEvent:"clickEvent"},features:[e.TTD],decls:3,vars:2,consts:[["class","d-block py-2",3,"onlyMessage","message",4,"ngIf","ngIfElse"],["content",""],[1,"d-block","py-2",3,"onlyMessage","message"],[1,"small","text-center","mt-3","mb-2","text-muted"],[1,"text-break","text-primary",3,"innerText"],["class","alert alert-primary mb-2 p-2",4,"ngIf","ngIfElse"],["list",""],[1,"alert","alert-primary","mb-2","p-2"],[1,"text-center","fw-bold","mb-0"],[1,"text-center","small","mb-0",3,"innerHTML"],[1,"list-unstyled","mb-0","d-flex","flex-wrap","small","justify-content-center"],[4,"ngIf"],[4,"ngFor","ngForOf"],["value","",3,"text","classes","clickEvent"],[3,"classes","text","value","clickEvent"]],template:function(n,t){if(1&n&&(e.YNc(0,I,2,4,"app-loader",0),e.YNc(1,H,8,9,"ng-template",null,1,e.W1O)),2&n){const s=e.MAs(2);e.Q6J("ngIf",t.loading)("ngIfElse",s)}},dependencies:[c.sg,c.O5,D.R,_,J.J,p.X$]}),l})();function w(l,i){if(1&l){const n=e.EpF();e.TgZ(0,"li")(1,"app-collapse-button",15),e.NdJ("clickEvent",function(s){e.CHM(n);const r=e.oxw();return e.KtG(r.selectDimension(s))}),e.qZA()()}if(2&l){const n=i.$implicit;e.xp6(1),e.Q6J("text",n.text)("selected",n.selected)("value",n.size)}}const W=function(l,i){return{"touch-device":l,uploading:i}},O=function(l){return{expanded:l}};let $=(()=>{class l{constructor(n,t,s,r,a,d){var g;this.uploadService=n,this.uploadObservablesService=t,this.uploaderService=s,this.loadingBarService=r,this.postMessageService=a,this.globalsService=d,this.touchDevice=b.eX,this.isSizeCollapsed=!0,this.isSizeButtonExpanded=!1,this.isFolderCollapsed=!0,this.isFolderButtonExpanded=!1,this.isFolderButtonFirstClicked=!0,this.dimensions=x,this.currentFolderPath=[],this.isUploading=!1,this.loadingBarService.useRef("http").disable(),this.fileManagerUrl=`${U.YQ}${C.B2.UPLOAD}?${C.RT.PROFILE}=${null===(g=this.globalsService.credentials)||void 0===g?void 0:g.site.short}`}ngOnInit(){this.uploadService.setGqlIdHeader(),this.currentFolderPath=this.uploadService.preferences.lastFolderPath,this.uploadingSubscription=this.uploadObservablesService.uploadingFileQueueObservable.subscribe(n=>{this.isUploading=n.length>0}),this.uploadingErrorSubscription=this.uploadObservablesService.uploadingFileErrorObservable.subscribe(n=>{this.postMessageService.send(h.l.UPLOAD_ERROR,{filename:n.file.name,error:P.S.UPLOAD_FAILED})})}toggleCollapse(n,t,s){if(s)return void n.toggle();const r=t.hidden.subscribe(()=>{r.unsubscribe(),n.toggle()});t.toggle()}selectDimension(n){for(const s of this.dimensions)s.selected=s.size===n;const t=this.uploaderService.uploaderOptions;n?(t.compress=!0,t.imageDimensions={width:n}):delete t.imageDimensions,this.uploaderService.uploaderOptions=t}setFolderPath(n){this.currentFolderPath=[...n],this.postMessageService.send(h.l.UPLOAD_NAVIGATION,{paths:n})}closeAllCollapse(){this.isFolderCollapsed=this.isSizeCollapsed=!0}ngOnDestroy(){var n,t;null===(n=this.uploadingSubscription)||void 0===n||n.unsubscribe(),null===(t=this.uploadingErrorSubscription)||void 0===t||t.unsubscribe(),this.uploadService.removeGqlIdHeader()}}return l.\u0275fac=function(n){return new(n||l)(e.Y36(v.C),e.Y36(L.r),e.Y36(A.q),e.Y36(Z.dL),e.Y36(M.F),e.Y36(S.d))},l.\u0275cmp=e.Xpm({type:l,selectors:[["ng-component"]],decls:29,vars:37,consts:[[1,"flex-grow-1","rounded-0","position-relative","w-cont","mw-100","d-flex","flex-column",3,"ngClass"],[1,"d-flex","buttons","align-items-stretch","justify-content-center","overflow-hidden","small"],["target","_blank",3,"href"],[1,"long"],[1,"short"],[1,"border-start","border-end",3,"ngClass","click"],[3,"ngClass","click"],[1,"c-collapse","position-absolute","w-100","bg-white","border-bottom",3,"ngbCollapse","ngbCollapseChange","shown","hidden"],["sizeCollapse","ngbCollapse"],[1,"px-2","py-1","border-top","c-content"],[1,"list-unstyled","mb-0","d-flex","flex-wrap","small","justify-content-center"],[4,"ngFor","ngForOf"],["folderCollapse","ngbCollapse"],[3,"currentFolderPath","firstOpened","fileManagerUrl","clickEvent"],[1,"d-flex","align-items-stretch","flex-grow-1",3,"loading","isWidget","currentFolderPath","click"],[3,"text","selected","value","clickEvent"]],template:function(n,t){if(1&n){const s=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"a",2)(3,"span",3),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"span",4),e._uU(7),e.ALo(8,"translate"),e.qZA()(),e.TgZ(9,"div",5),e.NdJ("click",function(){e.CHM(s);const a=e.MAs(20),d=e.MAs(25);return e.KtG(t.toggleCollapse(a,d,t.isFolderCollapsed))}),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"div",6),e.NdJ("click",function(){e.CHM(s);const a=e.MAs(25),d=e.MAs(20);return t.isFolderButtonFirstClicked=!1,e.KtG(t.toggleCollapse(a,d,t.isSizeCollapsed))}),e.TgZ(13,"span",3),e._uU(14),e.ALo(15,"translate"),e.qZA(),e.TgZ(16,"span",4),e._uU(17),e.ALo(18,"translate"),e.qZA()()(),e.TgZ(19,"div",7,8),e.NdJ("ngbCollapseChange",function(a){return t.isSizeCollapsed=a})("shown",function(){return t.isSizeButtonExpanded=!0})("hidden",function(){return t.isSizeButtonExpanded=!1}),e.TgZ(21,"div",9)(22,"ul",10),e.YNc(23,w,2,3,"li",11),e.qZA()()(),e.TgZ(24,"div",7,12),e.NdJ("ngbCollapseChange",function(a){return t.isFolderCollapsed=a})("shown",function(){return t.isFolderButtonExpanded=!0})("hidden",function(){return t.isFolderButtonExpanded=!1}),e.TgZ(26,"div",9)(27,"app-folder-list",13),e.NdJ("clickEvent",function(a){return t.setFolderPath(a)}),e.qZA()()(),e.TgZ(28,"app-uploader",14),e.NdJ("click",function(){return t.closeAllCollapse()}),e.qZA()()}2&n&&(e.Q6J("ngClass",e.WLB(30,W,t.touchDevice,t.isUploading)),e.xp6(2),e.Q6J("href",t.fileManagerUrl,e.LSH),e.xp6(2),e.Oqu(e.lcZ(5,20,"ROUTES.WIDGETS.UPLOAD.FILE_MANAGER.LONG")),e.xp6(3),e.Oqu(e.lcZ(8,22,"ROUTES.WIDGETS.UPLOAD.FILE_MANAGER.SHORT")),e.xp6(2),e.Q6J("ngClass",e.VKq(33,O,!t.isSizeCollapsed||t.isSizeButtonExpanded)),e.uIk("aria-expanded",!t.isSizeCollapsed),e.xp6(1),e.hij(" ",e.lcZ(11,24,"ROUTES.WIDGETS.UPLOAD.SIZE")," "),e.xp6(2),e.Q6J("ngClass",e.VKq(35,O,!t.isFolderCollapsed||t.isFolderButtonExpanded)),e.uIk("aria-expanded",!t.isFolderCollapsed),e.xp6(2),e.Oqu(e.lcZ(15,26,"ROUTES.WIDGETS.UPLOAD.SELECT_FOLDER.LONG")),e.xp6(3),e.Oqu(e.lcZ(18,28,"ROUTES.WIDGETS.UPLOAD.SELECT_FOLDER.SHORT")),e.xp6(2),e.Q6J("ngbCollapse",t.isSizeCollapsed),e.xp6(4),e.Q6J("ngForOf",t.dimensions),e.xp6(1),e.Q6J("ngbCollapse",t.isFolderCollapsed),e.xp6(3),e.Q6J("currentFolderPath",t.currentFolderPath)("firstOpened",!t.isFolderButtonFirstClicked)("fileManagerUrl",t.fileManagerUrl),e.xp6(1),e.Q6J("loading",!1)("isWidget",!0)("currentFolderPath",t.currentFolderPath))},dependencies:[c.mk,c.sg,m._D,y.B,_,Y,p.X$],styles:["[_nghost-%COMP%]{display:flex;align-items:flex-start;justify-content:center;background:#fff}[_nghost-%COMP%], .w-cont[_ngcontent-%COMP%]{min-height:100vh}.uploading[_ngcontent-%COMP%], .uploading[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{pointer-events:none!important}.buttons[_ngcontent-%COMP%]{height:40px}.buttons[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1 1 0;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:color .2s;color:var(--bs-gray-600)}.buttons[_ngcontent-%COMP%]   .expanded[_ngcontent-%COMP%]{background:#fff;z-index:2;color:inherit}.w-cont[_ngcontent-%COMP%]:not(.touch-device)   .buttons[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:hover{color:inherit}.c-collapse[_ngcontent-%COMP%]{top:39px;left:0;z-index:1;max-height:calc(100% - 50px)}.c-collapse.collapsing[_ngcontent-%COMP%], .c-collapse.show[_ngcontent-%COMP%]{display:flex;flex-direction:column}.c-collapse[_ngcontent-%COMP%]:not(.collapsing)   .c-content[_ngcontent-%COMP%]{overflow-y:auto}.c-collapse.collapsing[_ngcontent-%COMP%]   .c-content[_ngcontent-%COMP%]{overflow:hidden}.long[_ngcontent-%COMP%]{display:none}@media (min-width: 400px){.short[_ngcontent-%COMP%]{display:none}.long[_ngcontent-%COMP%]{display:inline}}"]}),l})();var j=o(529);const K=[{path:"",component:$}];let X=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[E.r,c.ez,F.q,m.lQ,T.Bz.forChild(K),p.aw.forChild(),j.M]}),l})()}}]);
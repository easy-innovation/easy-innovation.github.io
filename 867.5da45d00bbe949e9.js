"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[867],{5867:(q,m,s)=>{s.r(m),s.d(m,{UploadModule:()=>V});var F=s(4243),p=s(6814),T=s(259),h=s(8726),x=s(2655),u=s(9515);const U=[{size:0,selected:!0,text:"Default"},{size:800,selected:!1,text:""},{size:600,selected:!1,text:""},{size:400,selected:!1,text:""},{size:200,selected:!1,text:""},{size:100,selected:!1,text:""}].map(n=>(n.size&&(n.text="".concat(n.size,"px")),n));var b=s(1410),M=s(4020),v=s(148),S=s(9093),P=s(6306),A=s(3845),L=s(4887),Z=s(5487),C=s(658),_=s(7165),e=s(9212),y=s(9344),D=s(5851);let O=(()=>{var n;class a{constructor(){this.selected=!1,this.value="",this.text="",this.classes=["p-2"],this.clickEvent=new e.vpe}}return(n=a).\u0275fac=function(l){return new(l||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-collapse-button"]],inputs:{selected:"selected",value:"value",text:"text",classes:"classes"},outputs:{clickEvent:"clickEvent"},decls:1,vars:4,consts:[["role","button",1,"rounded","text-reset","m-1","d-block",3,"ngClass","innerHTML","click"]],template:function(l,t){1&l&&(e.TgZ(0,"a",0),e.NdJ("click",function(){return t.clickEvent.emit(t.value)}),e.qZA()),2&l&&(e.ekj("selected",t.selected),e.Q6J("ngClass",t.classes)("innerHTML",t.text,e.oJD))},dependencies:[p.mk],styles:["a[_ngcontent-%COMP%]{transition:background-color .2s;-webkit-user-select:none;-moz-user-select:none;user-select:none}a.selected[_ngcontent-%COMP%]{background-color:#dae0ff}"]}),a})();var g=s(5861),J=s(9473),k=s(4228);function I(n,a){1&n&&(e._UZ(0,"app-loader",2),e.ALo(1,"translate")),2&n&&e.Q6J("onlyMessage",!0)("message",e.lcZ(1,2,"ROUTES.WIDGETS.UPLOAD.LOADING_FOLDERS"))}const R=n=>({url:n});function z(n,a){if(1&n&&(e.TgZ(0,"div",7)(1,"p",8),e._uU(2),e.ALo(3,"translate"),e.qZA(),e._UZ(4,"p",9),e.ALo(5,"translate"),e.qZA()),2&n){const o=e.oxw(2);e.xp6(2),e.hij(" ",e.lcZ(3,2,"ROUTES.WIDGETS.UPLOAD.NO_FOLDER")," "),e.xp6(2),e.Q6J("innerHTML",e.xi3(5,4,"ROUTES.WIDGETS.UPLOAD.CREATE_FOLDER",e.VKq(7,R,o.fileManagerUrl)),e.oJD)}}const B=()=>["fst-italic","p-1"];function G(n,a){if(1&n){const o=e.EpF();e.TgZ(0,"li")(1,"app-collapse-button",13),e.NdJ("clickEvent",function(t){e.CHM(o);const i=e.oxw(3);return e.KtG(i.folderClickEvent(t))}),e.ALo(2,"translate"),e.qZA()()}2&n&&(e.xp6(),e.Q6J("text",e.lcZ(2,2,"SHARED.BACK"))("classes",e.DdM(4,B)))}const N=()=>["p-1"];function Q(n,a){if(1&n){const o=e.EpF();e.TgZ(0,"li")(1,"app-collapse-button",14),e.NdJ("clickEvent",function(t){e.CHM(o);const i=e.oxw(3);return e.KtG(i.folderClickEvent(t))}),e.qZA()()}if(2&n){const o=a.$implicit;e.xp6(),e.Q6J("classes",e.DdM(3,N))("text",o.name)("value",o.name)}}function H(n,a){if(1&n&&(e.TgZ(0,"ul",10),e.YNc(1,G,3,5,"li",11)(2,Q,2,4,"li",12),e.qZA()),2&n){const o=e.oxw(2);e.xp6(),e.Q6J("ngIf",o.depth),e.xp6(),e.Q6J("ngForOf",o.folders)}}function w(n,a){if(1&n&&(e.TgZ(0,"div",3),e._uU(1),e.ALo(2,"translate"),e._UZ(3,"em",4),e.ALo(4,"arrayJoin"),e.qZA(),e.YNc(5,z,6,9,"div",5)(6,H,3,2,"ng-template",null,6,e.W1O)),2&n){const o=e.MAs(7),l=e.oxw();e.xp6(),e.hij(" ",e.lcZ(2,4,"ROUTES.WIDGETS.UPLOAD.CURRENT_PATH")," "),e.xp6(2),e.Q6J("innerText",l.currentFolderPath.length?e.xi3(4,6,l.currentFolderPath,"/"):"root"),e.xp6(2),e.Q6J("ngIf",0===l.folders.length&&0===l.depth)("ngIfElse",o)}}let W=(()=>{var n;class a{constructor(l){this.uploadService=l,this.currentFolderPath=[],this.firstOpened=!1,this.fileManagerUrl="",this.clickEvent=new e.vpe,this.loading=!0,this.folders=[],this.depth=0}ngOnInit(){this.depth=this.currentFolderPath.length}ngOnChanges(l){var t=this;return(0,g.Z)(function*(){l.firstOpened&&!l.firstOpened.firstChange&&t.firstOpened&&(t.folders=(yield t.uploadService.getFileList(t.currentFolderPath)).folders,t.loading=!1)})()}folderClickEvent(l){var t=this;return(0,g.Z)(function*(){const i=l.length?[...t.currentFolderPath,l]:t.currentFolderPath.slice(0,-1);t.clickEvent.emit(i),yield t.getFolders(i)})()}getFolders(l){var t=this;return(0,g.Z)(function*(){if(t.loading)return;t.loading=!0,t.depth=l.length;const i=yield t.uploadService.getFileList(l);t.folders=i.folders,t.loading=!1})()}}return(n=a).\u0275fac=function(l){return new(l||n)(e.Y36(C.C))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-folder-list"]],inputs:{currentFolderPath:"currentFolderPath",firstOpened:"firstOpened",fileManagerUrl:"fileManagerUrl"},outputs:{clickEvent:"clickEvent"},features:[e.TTD],decls:3,vars:2,consts:[["class","d-block py-2",3,"onlyMessage","message",4,"ngIf","ngIfElse"],["content",""],[1,"d-block","py-2",3,"onlyMessage","message"],[1,"small","text-center","mt-3","mb-2","text-muted"],[1,"text-break","text-primary",3,"innerText"],["class","alert alert-primary mb-2 p-2",4,"ngIf","ngIfElse"],["list",""],[1,"alert","alert-primary","mb-2","p-2"],[1,"text-center","fw-bold","mb-0"],[1,"text-center","small","mb-0",3,"innerHTML"],[1,"list-unstyled","mb-0","d-flex","flex-wrap","small","justify-content-center"],[4,"ngIf"],[4,"ngFor","ngForOf"],["value","",3,"text","classes","clickEvent"],[3,"classes","text","value","clickEvent"]],template:function(l,t){if(1&l&&e.YNc(0,I,2,4,"app-loader",0)(1,w,8,9,"ng-template",null,1,e.W1O),2&l){const i=e.MAs(2);e.Q6J("ngIf",t.loading)("ngIfElse",i)}},dependencies:[p.sg,p.O5,J.R,O,k.J,u.X$]}),a})();function $(n,a){if(1&n){const o=e.EpF();e.TgZ(0,"li")(1,"app-collapse-button",15),e.NdJ("clickEvent",function(t){e.CHM(o);const i=e.oxw();return e.KtG(i.selectDimension(t))}),e.qZA()()}if(2&n){const o=a.$implicit;e.xp6(),e.Q6J("text",o.text)("selected",o.selected)("value",o.size)}}const j=(n,a)=>({"touch-device":n,uploading:a}),E=n=>({expanded:n});let Y=(()=>{var n;class a{constructor(l,t,i,r,c,d){var f;this.uploadService=l,this.uploadObservablesService=t,this.uploaderService=i,this.loadingBarService=r,this.postMessageService=c,this.globalsService=d,this.touchDevice=M.b1,this.isSizeCollapsed=!0,this.isSizeButtonExpanded=!1,this.isFolderCollapsed=!0,this.isFolderButtonExpanded=!1,this.isFolderButtonFirstClicked=!0,this.dimensions=U,this.currentFolderPath=[],this.isUploading=!1,this.loadingBarService.useRef("http").disable(),this.fileManagerUrl="".concat(P.y1).concat(_.B2.UPLOAD,"?").concat(_.RT.PROFILE,"=").concat(null===(f=this.globalsService.credentials)||void 0===f?void 0:f.site.short)}ngOnInit(){this.uploadService.setGqlIdHeader(),this.currentFolderPath=this.uploadService.preferences.lastFolderPath,this.uploadingSubscription=this.uploadObservablesService.uploadingFileQueueObservable.subscribe(l=>{this.isUploading=l.length>0}),this.uploadingErrorSubscription=this.uploadObservablesService.uploadingFileErrorObservable.subscribe(l=>{this.postMessageService.send(v.l.UPLOAD_ERROR,{filename:l.file.name,error:A.S.UPLOAD_FAILED})})}toggleCollapse(l,t,i){if(i)return void l.toggle();const r=t.hidden.subscribe(()=>{r.unsubscribe(),l.toggle()});t.toggle()}selectDimension(l){for(const i of this.dimensions)i.selected=i.size===l;const t=this.uploaderService.uploaderOptions;l?(t.compress=!0,t.imageDimensions={width:l}):delete t.imageDimensions,this.uploaderService.uploaderOptions=t}setFolderPath(l){this.currentFolderPath=[...l],this.postMessageService.send(v.l.UPLOAD_NAVIGATION,{paths:l})}closeAllCollapse(){this.isFolderCollapsed=this.isSizeCollapsed=!0}ngOnDestroy(){var l,t;null===(l=this.uploadingSubscription)||void 0===l||l.unsubscribe(),null===(t=this.uploadingErrorSubscription)||void 0===t||t.unsubscribe(),this.uploadService.removeGqlIdHeader()}}return(n=a).\u0275fac=function(l){return new(l||n)(e.Y36(C.C),e.Y36(Z.r),e.Y36(L.q),e.Y36(y.dL),e.Y36(S.F),e.Y36(b.d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:29,vars:37,consts:[[1,"flex-grow-1","rounded-0","position-relative","w-cont","mw-100","d-flex","flex-column",3,"ngClass"],[1,"d-flex","buttons","align-items-stretch","justify-content-center","overflow-hidden","small"],["target","_blank",3,"href"],[1,"long"],[1,"short"],[1,"border-start","border-end",3,"ngClass","click"],[3,"ngClass","click"],[1,"c-collapse","position-absolute","w-100","bg-white","border-bottom",3,"ngbCollapse","ngbCollapseChange","shown","hidden"],["sizeCollapse","ngbCollapse"],[1,"px-2","py-1","border-top","c-content"],[1,"list-unstyled","mb-0","d-flex","flex-wrap","small","justify-content-center"],[4,"ngFor","ngForOf"],["folderCollapse","ngbCollapse"],[3,"currentFolderPath","firstOpened","fileManagerUrl","clickEvent"],[1,"d-flex","align-items-stretch","flex-grow-1",3,"loading","isWidget","currentFolderPath","click"],[3,"text","selected","value","clickEvent"]],template:function(l,t){if(1&l){const i=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"a",2)(3,"span",3),e._uU(4),e.ALo(5,"translate"),e.qZA(),e.TgZ(6,"span",4),e._uU(7),e.ALo(8,"translate"),e.qZA()(),e.TgZ(9,"div",5),e.NdJ("click",function(){e.CHM(i);const c=e.MAs(20),d=e.MAs(25);return e.KtG(t.toggleCollapse(c,d,t.isFolderCollapsed))}),e._uU(10),e.ALo(11,"translate"),e.qZA(),e.TgZ(12,"div",6),e.NdJ("click",function(){e.CHM(i);const c=e.MAs(25),d=e.MAs(20);return t.isFolderButtonFirstClicked=!1,e.KtG(t.toggleCollapse(c,d,t.isSizeCollapsed))}),e.TgZ(13,"span",3),e._uU(14),e.ALo(15,"translate"),e.qZA(),e.TgZ(16,"span",4),e._uU(17),e.ALo(18,"translate"),e.qZA()()(),e.TgZ(19,"div",7,8),e.NdJ("ngbCollapseChange",function(c){return t.isSizeCollapsed=c})("shown",function(){return t.isSizeButtonExpanded=!0})("hidden",function(){return t.isSizeButtonExpanded=!1}),e.TgZ(21,"div",9)(22,"ul",10),e.YNc(23,$,2,3,"li",11),e.qZA()()(),e.TgZ(24,"div",7,12),e.NdJ("ngbCollapseChange",function(c){return t.isFolderCollapsed=c})("shown",function(){return t.isFolderButtonExpanded=!0})("hidden",function(){return t.isFolderButtonExpanded=!1}),e.TgZ(26,"div",9)(27,"app-folder-list",13),e.NdJ("clickEvent",function(c){return t.setFolderPath(c)}),e.qZA()()(),e.TgZ(28,"app-uploader",14),e.NdJ("click",function(){return t.closeAllCollapse()}),e.qZA()()}2&l&&(e.Q6J("ngClass",e.WLB(30,j,t.touchDevice,t.isUploading)),e.xp6(2),e.Q6J("href",t.fileManagerUrl,e.LSH),e.xp6(2),e.Oqu(e.lcZ(5,20,"ROUTES.WIDGETS.UPLOAD.FILE_MANAGER.LONG")),e.xp6(3),e.Oqu(e.lcZ(8,22,"ROUTES.WIDGETS.UPLOAD.FILE_MANAGER.SHORT")),e.xp6(2),e.Q6J("ngClass",e.VKq(33,E,!t.isSizeCollapsed||t.isSizeButtonExpanded)),e.uIk("aria-expanded",!t.isSizeCollapsed),e.xp6(),e.hij(" ",e.lcZ(11,24,"ROUTES.WIDGETS.UPLOAD.SIZE")," "),e.xp6(2),e.Q6J("ngClass",e.VKq(35,E,!t.isFolderCollapsed||t.isFolderButtonExpanded)),e.uIk("aria-expanded",!t.isFolderCollapsed),e.xp6(2),e.Oqu(e.lcZ(15,26,"ROUTES.WIDGETS.UPLOAD.SELECT_FOLDER.LONG")),e.xp6(3),e.Oqu(e.lcZ(18,28,"ROUTES.WIDGETS.UPLOAD.SELECT_FOLDER.SHORT")),e.xp6(2),e.Q6J("ngbCollapse",t.isSizeCollapsed),e.xp6(4),e.Q6J("ngForOf",t.dimensions),e.xp6(),e.Q6J("ngbCollapse",t.isFolderCollapsed),e.xp6(3),e.Q6J("currentFolderPath",t.currentFolderPath)("firstOpened",!t.isFolderButtonFirstClicked)("fileManagerUrl",t.fileManagerUrl),e.xp6(),e.Q6J("loading",!1)("isWidget",!0)("currentFolderPath",t.currentFolderPath))},dependencies:[p.mk,p.sg,h._D,D.B,O,W,u.X$],styles:["[_nghost-%COMP%]{display:flex;align-items:flex-start;justify-content:center;background:#fff}[_nghost-%COMP%], .w-cont[_ngcontent-%COMP%]{min-height:100vh}.uploading[_ngcontent-%COMP%], .uploading[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{pointer-events:none!important}.buttons[_ngcontent-%COMP%]{height:40px}.buttons[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1 1 0;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:color .2s;color:var(--bs-gray-600)}.buttons[_ngcontent-%COMP%]   .expanded[_ngcontent-%COMP%]{background:#fff;z-index:2;color:inherit}.w-cont[_ngcontent-%COMP%]:not(.touch-device)   .buttons[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:hover{color:inherit}.c-collapse[_ngcontent-%COMP%]{top:39px;left:0;z-index:1;max-height:calc(100% - 50px)}.c-collapse.collapsing[_ngcontent-%COMP%], .c-collapse.show[_ngcontent-%COMP%]{display:flex;flex-direction:column}.c-collapse[_ngcontent-%COMP%]:not(.collapsing)   .c-content[_ngcontent-%COMP%]{overflow-y:auto}.c-collapse.collapsing[_ngcontent-%COMP%]   .c-content[_ngcontent-%COMP%]{overflow:hidden}.long[_ngcontent-%COMP%]{display:none}@media (min-width: 400px){.short[_ngcontent-%COMP%]{display:none}.long[_ngcontent-%COMP%]{display:inline}}"]}),a})();var K=s(529);const X=[{path:"",component:Y}];let V=(()=>{var n;class a{}return(n=a).\u0275fac=function(l){return new(l||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[F.r,p.ez,T.q,h.lQ,x.Bz.forChild(X),u.aw.forChild(),K.M]}),a})()}}]);
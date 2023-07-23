"use strict";(self.webpackChunkboard=self.webpackChunkboard||[]).push([[120],{120:(w,g,i)=>{i.r(g),i.d(g,{AdminPanelModule:()=>K});var e=i(4650),b=i(8621),h=i(5861),d=i(1309),c=i(2227),T=i(1460),m=i(6895),u=i(5395),A=i(4896),C=i(3138),v=i(6378);let E=(()=>{class o{constructor(n){this.graphqlService=n,this.apolloIntrospectionRequestTime=0}get isApolloIntrospectionEnabled(){return Date.now()<this.apolloIntrospectionRequestTime+3e4}setApolloIntrospection(n){var t=this;return(0,h.Z)(function*(){const l=(yield t.graphqlService.mutate({mutation:"\nmutation ApolloIntrospectionStatus($status: Boolean!) {\n    apolloIntrospectionStatus(status: $status)\n}",variables:{status:n}})).data.apolloIntrospectionStatus;return l&&(t.apolloIntrospectionRequestTime=n?Date.now():0),l})()}}return o.\u0275fac=function(n){return new(n||o)(e.LFG(u.J))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var f=i(4425),q=i(4704),M=i(4271),r=i(4006),y=i(5174);const Z=["app-admin-panel-graphql",""],L=function(){return[10,10]},I=function(o,a){return{placement:"top-end",offset:o,hideOnClick:a}};let R=(()=>{class o{constructor(n,t,l,s,p,X){this.graphqlService=n,this.endpointsService=t,this.titleCasePipe=l,this.globalsService=s,this.toastService=p,this.adminPanelService=X,this.touchDevice=T.eX,this.graphqlRequestLogger={enabled:!1,list:[]},this.localFormSchema={},this.localFormModel={},this.pendingRequest=!1,this.apollo={url:"",instrospectionEnabled:!1},this.localFormType=c.jQ.GRAPHQL,this.graphqlToken=this.graphqlService.params?.token||"",this.graphqlRequestLogger.enabled=this.graphqlService.loggerEnabled,this.graphqlRequestLogger.list=this.graphqlService.requestLogs}ngOnInit(){this.createLocalFormSchema(),this.apollo.url=`https://studio.apollographql.com/sandbox/explorer?endpoint=${this.graphqlService.urlHttp}&headers=${JSON.stringify({Authorization:this.graphqlToken})}`}createLocalFormSchema(){const n={type:"object",properties:{localEnv:{type:"object",description:`L'url base per le richieste locali \xe8 [i]${this.endpointsService.getBaseLocalUrl()}[/i]`,oneOf:Object.entries(this.endpointsService.getAllLocalPaths()).map(t=>({title:this.titleCasePipe.transform(t[0]),widget:{formlyConfig:{props:{fieldsetTemplate:!0}}},properties:{[t[0]]:{default:t[0],widget:{formlyConfig:{props:{type:"hidden"}}}},endpointType:{default:t[0],widget:{formlyConfig:{props:{type:"hidden"}}}},paths:{type:"object",properties:Object.fromEntries(Object.entries(t[1]).map(l=>[l[0],{type:"string",title:`Path per le richieste [i]${l[0]}[/i]:`,default:l[1]}]))},enabled:{type:"checkbox",title:"Utilizza l'ambiente locale per queste richieste",default:this.endpointsService.getLocalEnv(t[0])}}}))}}};this.localFormSchema={...n}}onLocalEnvFormChange(){this.localFormModel.localEnv.endpointType!==this.localFormType&&(this.localFormType=this.localFormModel.localEnv.endpointType,this.localFormModel.localEnv.enabled=this.endpointsService.getLocalEnv(this.localFormType),this.localFormModel.localEnv.paths={...this.endpointsService.getLocalPaths(this.localFormType)},this.localFormModel={...this.localFormModel})}onLocalEnvFormSubmit(){const n=this.localFormModel.localEnv;this.updateLocalEnv(n.endpointType,n.enabled,n.paths)&&(this.localFormModel.localEnv.enabled=!0,this.localFormModel={...this.localFormModel}),n.endpointType===c.jQ.GRAPHQL&&this.saveAdminSettings(),this.toastService.show({content:"Impostazioni dell'<strong>ambiente locale</strong> aggionate!",delay:5e3})}updateLocalEnv(n,t,l){return t!==this.endpointsService.getLocalEnv(n)?(this.endpointsService.setLocalEnv(n,t),!1):(this.endpointsService.setLocalEnv(n,!0),this.endpointsService.setLocalPaths(n,l),!0)}saveAdminSettings(){this.graphqlService.loggerEnabled=this.graphqlRequestLogger.enabled,this.globalsService.adminSettings={...this.globalsService.adminSettings||{},graphql:{useLocalEnv:this.endpointsService.getLocalEnv(c.jQ.GRAPHQL),urlHttpLocalEnv:this.endpointsService.getLocalPaths(c.jQ.GRAPHQL)[c.PB.HTTP],urlWsLocalEnv:this.endpointsService.getLocalPaths(c.jQ.GRAPHQL)[c.PB.WS],loggerEnabled:this.graphqlRequestLogger.enabled}}}setApolloIntrospection(){var n=this;return(0,h.Z)(function*(){n.pendingRequest?n.toastService.advice(d.V.REQUEST_PENDING):n.apollo.instrospectionEnabled&&n.adminPanelService.isApolloIntrospectionEnabled?n.toastService.show({content:"L'introspection di Apollo \xe8 <strong>gi\xe0 attiva</strong>!",level:d.m.ERROR}):(n.pendingRequest=!0,(yield n.adminPanelService.setApolloIntrospection(n.apollo.instrospectionEnabled))?n.toastService.show({content:`Introspection di Apollo\n                <strong>${n.apollo.instrospectionEnabled?"abilitata":"disabilitata"}</strong> con successo!`}):n.toastService.advice(d.V.GENERIC),n.pendingRequest=!1)})()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(u.J),e.Y36(A.o),e.Y36(m.rS),e.Y36(C.d),e.Y36(v.k),e.Y36(E))},o.\u0275cmp=e.Xpm({type:o,selectors:[["","app-admin-panel-graphql",""]],features:[e._Bn([m.rS])],attrs:Z,decls:40,vars:17,consts:[[1,"h6","px-md-1","container-fluid"],[1,"flat-container","p-3"],[1,"mb-4","d-flex","align-items-end"],[1,"flex-grow-1","me-3"],["for","profile-token",1,"fs-sm"],["type","text","id","profile-token","disabled","",1,"form-control",3,"value"],[1,"d-block","ms-auto","btn","btn-primary",3,"cdkCopyToClipboard","appTippy","tippyProps","click"],["tokenTippyRef","appTippy"],[1,"material-icons","d-block"],[1,"px-3","pt-2","rounded","mb-4","position-relative"],[1,"legend-reset","fs-reset","px-2","mb-0"],[1,"position-absolute","px-3","bg-white","local-form-submit"],[1,"btn","btn-success","d-flex","align-items-center",3,"click"],[1,"material-icons-outlined"],["app-custom-form","",3,"schema","model","enableModelChangeEvent","modelChangeEvent","submitEvent"],["localEnvForm",""],[1,"px-3","pb-3","rounded","mb-4","pt-2"],[1,"form-check","form-switch","mb-3"],["type","checkbox","role","switch","id","enable-logs",1,"form-check-input",3,"ngModel","ngModelChange"],["for","enable-logs",1,"form-check-label"],[1,"logs-wrapper"],[3,"object"],[1,"form-check","form-switch","mb-0"],["type","checkbox","role","switch","id","apollo-introspection",1,"form-check-input",3,"disabled","ngModel","ngModelChange"],["for","apollo-introspection",1,"form-check-label"],[1,"d-flex","justify-content-end"],[1,"d-block"],["target","_blank",3,"href"]],template:function(n,t){if(1&n){const l=e.EpF();e.TgZ(0,"div",0),e._uU(1,"Endpoints"),e.qZA(),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"label",4),e._uU(6,"Token attuale:"),e.qZA(),e._UZ(7,"input",5),e.qZA(),e.TgZ(8,"button",6,7),e.NdJ("click",function(){e.CHM(l);const p=e.MAs(9);return e.KtG(!t.touchDevice&&p.changeContent("Token copiato!","Copia il token"))}),e.TgZ(10,"span",8),e._uU(11,"content_copy"),e.qZA()()(),e.TgZ(12,"fieldset",9)(13,"legend",10)(14,"div"),e._uU(15,"Ambiente locale"),e.qZA(),e.TgZ(16,"div",11)(17,"button",12),e.NdJ("click",function(){e.CHM(l);const p=e.MAs(21);return e.KtG(p.submit())}),e.TgZ(18,"span",13),e._uU(19,"check_circle"),e.qZA()()()(),e.TgZ(20,"div",14,15),e.NdJ("modelChangeEvent",function(){return t.onLocalEnvFormChange()})("submitEvent",function(){return t.onLocalEnvFormSubmit()}),e.qZA()(),e.TgZ(22,"fieldset",16)(23,"legend",10),e._uU(24),e.qZA(),e.TgZ(25,"div",17)(26,"input",18),e.NdJ("ngModelChange",function(p){return t.graphqlRequestLogger.enabled=p})("ngModelChange",function(){return t.saveAdminSettings()}),e.qZA(),e.TgZ(27,"label",19),e._uU(28,"Abilita il salvataggio dei log"),e.qZA()(),e.TgZ(29,"div",20),e._UZ(30,"app-custom-pre",21),e.qZA()(),e.TgZ(31,"div",22)(32,"input",23),e.NdJ("ngModelChange",function(p){return t.apollo.instrospectionEnabled=p})("ngModelChange",function(){return t.setApolloIntrospection()}),e.qZA(),e.TgZ(33,"label",24),e._uU(34,"Abilita l'introspection di Apollo"),e.qZA()(),e.TgZ(35,"div",25)(36,"small",26),e._uU(37,"Vai alla "),e.TgZ(38,"a",27),e._uU(39,"sandbox"),e.qZA()()()()}2&n&&(e.xp6(7),e.Q6J("value",t.graphqlToken),e.xp6(1),e.Q6J("cdkCopyToClipboard",t.graphqlToken)("appTippy",t.touchDevice?"Token copiato!":"Copia il token")("tippyProps",e.WLB(14,I,e.DdM(13,L),t.touchDevice)),e.xp6(12),e.Q6J("schema",t.localFormSchema)("model",t.localFormModel)("enableModelChangeEvent",!0),e.xp6(4),e.hij("Log delle richieste (#",t.graphqlRequestLogger.list.length,")"),e.xp6(2),e.Q6J("ngModel",t.graphqlRequestLogger.enabled),e.xp6(4),e.Q6J("object",t.graphqlRequestLogger.list),e.xp6(2),e.Q6J("disabled",t.pendingRequest)("ngModel",t.apollo.instrospectionEnabled),e.xp6(6),e.Q6J("href",t.apollo.url,e.LSH))},dependencies:[f.i3,q.d,M.s,r.Wl,r.JJ,r.On,y.$],styles:["fieldset[_ngcontent-%COMP%]{border:1px dashed var(--bs-gray-500)}.logs-wrapper[_ngcontent-%COMP%]{max-height:300px;overflow-y:auto}.local-form-submit[_ngcontent-%COMP%]{top:-7px;right:1rem}"]}),o})();var F=i(5044),_=i(7163),S=i(1048),J=i(2365),G=i(4500);const Q=["cacheModal"],N=["deletionModal"],U=["app-admin-panel-script",""];function k(o,a){if(1&o&&e._UZ(0,"option",15),2&o){const n=a.$implicit;e.Q6J("ngValue",n.scriptId)("innerText",n.name)}}const O=function(o){return{disabled:o}},j=function(o,a){return[o,a]};let D=(()=>{class o{constructor(n,t){this.scriptListService=n,this.toastService=t,this.scriptList=[],this.selectedScriptId=0,this.scriptSettingsPath=F.B2.SCRIPT_DEV_SETTINGS,this.cacheScriptId=0,this.deletionScriptId=0,this.pendingRequest=!1}ngOnInit(){var n=this;return(0,h.Z)(function*(){n.scriptList=(yield n.scriptListService.getAllScripts()).sort((t,l)=>t.name>l.name?1:l.name>t.name?-1:0)})()}findScriptName(n){return this.scriptList.find(t=>t.scriptId===n)?.name||""}openCacheModal(){this.pendingRequest?this.toastService.advice(d.V.REQUEST_PENDING):(this.cacheScriptId=this.selectedScriptId,this.cacheModalRef.open())}openDeletionModal(){this.pendingRequest?this.toastService.advice(d.V.REQUEST_PENDING):(this.deletionScriptId=this.selectedScriptId,this.deletionModalRef.open())}setPendingRequest(n){this.pendingRequest=0!==n}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(_.o),e.Y36(v.k))},o.\u0275cmp=e.Xpm({type:o,selectors:[["","app-admin-panel-script",""]],viewQuery:function(n,t){if(1&n&&(e.Gf(Q,5),e.Gf(N,5)),2&n){let l;e.iGM(l=e.CRH())&&(t.cacheModalRef=l.first),e.iGM(l=e.CRH())&&(t.deletionModalRef=l.first)}},attrs:U,decls:17,vars:20,consts:[[1,"h6","px-md-1","container-fluid"],[1,"flat-container","p-3"],[1,"mb-2"],["for","script-select",1,"fs-sm"],["id","script-select",1,"form-select",3,"disabled","ngModel","ngModelChange"],["selected","",3,"ngValue"],[3,"ngValue","innerText",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","flex-wrap"],[1,"btn","btn-indigo","mx-2","mt-3",3,"disabled","innerText","click"],[1,"btn","btn-primary","mx-2","mt-3",3,"ngClass","innerText","routerLink"],[1,"btn","btn-danger","mx-2","mt-3",3,"disabled","innerText","click"],[3,"scriptId","scriptName","cachePendingEvent"],["cacheModal",""],[3,"scriptName","scriptId","deletionPendingEvent"],["deletionModal",""],[3,"ngValue","innerText"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e._uU(1,"Script"),e.qZA(),e.TgZ(2,"div",1)(3,"div",2)(4,"label",3),e._uU(5,"Seleziona lo script da amministrare:"),e.qZA(),e.TgZ(6,"select",4),e.NdJ("ngModelChange",function(s){return t.selectedScriptId=s}),e._UZ(7,"option",5),e.YNc(8,k,1,2,"option",6),e.qZA()(),e.TgZ(9,"div",7)(10,"button",8),e.NdJ("click",function(){return t.openCacheModal()}),e.qZA(),e._UZ(11,"a",9),e.TgZ(12,"button",10),e.NdJ("click",function(){return t.openDeletionModal()}),e.qZA()()(),e.TgZ(13,"app-script-dev-cache",11,12),e.NdJ("cachePendingEvent",function(s){return t.setPendingRequest(s)}),e.qZA(),e.TgZ(15,"app-script-dev-deletion",13,14),e.NdJ("deletionPendingEvent",function(s){return t.setPendingRequest(s)}),e.qZA()),2&n&&(e.xp6(6),e.Q6J("disabled",0===t.scriptList.length)("ngModel",t.selectedScriptId),e.xp6(1),e.Q6J("ngValue",0),e.xp6(1),e.Q6J("ngForOf",t.scriptList),e.xp6(2),e.Q6J("disabled",0===t.selectedScriptId||t.pendingRequest)("innerText","Cache"),e.xp6(1),e.Q6J("ngClass",e.VKq(15,O,0===t.selectedScriptId))("innerText","Impostazioni")("routerLink",e.WLB(17,j,t.scriptSettingsPath,t.selectedScriptId)),e.xp6(1),e.Q6J("disabled",0===t.selectedScriptId||t.pendingRequest)("innerText","Cancella"),e.xp6(1),e.Q6J("scriptId",t.cacheScriptId)("scriptName",t.cacheScriptId>0?t.findScriptName(t.cacheScriptId):""),e.xp6(2),e.Q6J("scriptName",t.deletionScriptId>0?t.findScriptName(t.deletionScriptId):"")("scriptId",t.deletionScriptId))},dependencies:[m.mk,m.sg,r.YN,r.Kr,r.EJ,r.JJ,r.On,S.yS,J.s,G.F]}),o})(),H=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:4,vars:0,consts:[["pageTitle","Pannello di amministrazione"],[1,"d-grid","page-container"],["app-admin-panel-graphql",""],["app-admin-panel-script",""]],template:function(n,t){1&n&&(e._UZ(0,"app-breadcrumb",0),e.TgZ(1,"div",1),e._UZ(2,"div",2)(3,"div",3),e.qZA())},dependencies:[b.L,R,D],styles:[".page-container[_ngcontent-%COMP%]{gap:1rem}@media (min-width: 960px){.page-container[_ngcontent-%COMP%]{gap:1.5rem}}@media (min-width: 1500px){.page-container[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}"]}),o})();var x=i(5531),V=i(3492),Y=i(3792),z=i(5667),B=i(3735),$=i(5254);const W=[{path:"",component:H}];let K=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[x.w,f.Iq,m.ez,V.I,Y.b,r.u5,S.Bz.forChild(W),z.U,B.a,$.G]}),o})()}}]);
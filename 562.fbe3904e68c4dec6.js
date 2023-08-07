"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[562],{6562:(w,v,i)=>{i.r(v),i.d(v,{AdminPanelModule:()=>K});var e=i(5879),T=i(3285),g=i(5861),d=i(1413),r=i(2845);let C=(()=>{class o{constructor(n){this.graphqlService=n,this.apolloIntrospectionRequestTime=0}get isApolloIntrospectionEnabled(){return Date.now()<this.apolloIntrospectionRequestTime+3e4}setApolloIntrospection(n){var t=this;return(0,g.Z)(function*(){const l=(yield t.graphqlService.mutate({mutation:"\nmutation ApolloIntrospectionStatus($status: Boolean!) {\n    apolloIntrospectionStatus(status: $status)\n}",variables:{status:n}})).data.apolloIntrospectionStatus;return l&&(t.apolloIntrospectionRequestTime=n?Date.now():0),l})()}}return o.\u0275fac=function(n){return new(n||o)(e.LFG(r.Jk))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var m=i(1378),P=i(1410),E=i(4020),h=i(6814),f=i(5661),S=i(342),q=i(7429),M=i(8940),p=i(6223),Z=i(8595);const L=["app-admin-panel-graphql",""],y=function(){return[10,10]},I=function(o,a){return{placement:"top-end",offset:o,hideOnClick:a}};let R=(()=>{class o{constructor(n,t,l,s,c,X){var u;this.graphqlService=n,this.endpointsService=t,this.titleCasePipe=l,this.globalsService=s,this.toastService=c,this.adminPanelService=X,this.touchDevice=E.eX,this.graphqlRequestLogger={enabled:!1,list:[]},this.localFormSchema={},this.localFormModel={},this.pendingRequest=!1,this.apollo={url:"",instrospectionEnabled:!1},this.localFormType=r.jQ.GRAPHQL,this.graphqlToken=(null===(u=this.graphqlService.params)||void 0===u?void 0:u.token)||"",this.graphqlRequestLogger.enabled=this.graphqlService.loggerEnabled,this.graphqlRequestLogger.list=this.graphqlService.requestLogs}ngOnInit(){this.createLocalFormSchema(),this.setApolloUrl()}setApolloUrl(){this.apollo=(0,d.Z)((0,d.Z)({},this.apollo),{},{url:`https://studio.apollographql.com/sandbox/explorer?endpoint=${this.graphqlService.urlHttp}&headers=${JSON.stringify({Authorization:this.graphqlToken})}`})}createLocalFormSchema(){const n={type:"object",properties:{localEnv:{type:"object",description:`L'url base per le richieste locali \xe8 [i]${this.endpointsService.getBaseLocalUrl()}[/i]`,oneOf:Object.entries(this.endpointsService.getAllLocalPaths()).map(t=>({title:this.titleCasePipe.transform(t[0]),widget:{formlyConfig:{props:{fieldsetTemplate:!0}}},properties:{[t[0]]:{default:t[0],widget:{formlyConfig:{props:{type:"hidden"}}}},endpointType:{default:t[0],widget:{formlyConfig:{props:{type:"hidden"}}}},paths:{type:"object",properties:Object.fromEntries(Object.entries(t[1]).map(l=>[l[0],{type:"string",title:`Path per le richieste [i]${l[0]}[/i]:`,default:l[1]}]))},enabled:{type:"checkbox",title:"Utilizza l'ambiente locale per queste richieste",default:this.endpointsService.getLocalEnv(t[0])}}}))}}};this.localFormSchema=(0,d.Z)({},n)}onLocalEnvFormChange(){const n=this.localFormModel.localEnv.endpointType;n!==this.localFormType?(this.localFormType=this.localFormModel.localEnv.endpointType,this.localFormModel.localEnv.enabled=this.endpointsService.getLocalEnv(this.localFormType),this.localFormModel.localEnv.paths=(0,d.Z)({},this.endpointsService.getLocalPaths(this.localFormType)),this.localFormModel=(0,d.Z)({},this.localFormModel)):this.localFormModel.localEnv.enabled!==this.endpointsService.getLocalEnv(n)&&this.onLocalEnvFormSubmit()}onLocalEnvFormSubmit(){const n=this.localFormModel.localEnv;this.updateLocalEnv(n.endpointType,n.enabled,n.paths)&&(this.localFormModel.localEnv.enabled=!0,this.localFormModel=(0,d.Z)({},this.localFormModel)),n.endpointType===r.jQ.GRAPHQL&&(this.saveAdminSettings(),this.setApolloUrl()),this.toastService.show({content:"Impostazioni dell'<strong>ambiente locale</strong> aggionate!",delay:5e3})}updateLocalEnv(n,t,l){return t!==this.endpointsService.getLocalEnv(n)?(this.endpointsService.setLocalEnv(n,t),!1):(this.endpointsService.setLocalEnv(n,!0),this.endpointsService.setLocalPaths(n,l),!0)}saveAdminSettings(){this.graphqlService.loggerEnabled=this.graphqlRequestLogger.enabled,this.globalsService.adminSettings=(0,d.Z)((0,d.Z)({},this.globalsService.adminSettings||{}),{graphql:{useLocalEnv:this.endpointsService.getLocalEnv(r.jQ.GRAPHQL),urlHttpLocalEnv:this.endpointsService.getLocalPaths(r.jQ.GRAPHQL)[r.PB.HTTP],urlWsLocalEnv:this.endpointsService.getLocalPaths(r.jQ.GRAPHQL)[r.PB.WS],loggerEnabled:this.graphqlRequestLogger.enabled}})}setApolloIntrospection(){var n=this;return(0,g.Z)(function*(){n.pendingRequest?n.toastService.advice(m.V.REQUEST_PENDING):n.apollo.instrospectionEnabled&&n.adminPanelService.isApolloIntrospectionEnabled?n.toastService.show({content:"L'introspection di Apollo \xe8 <strong>gi\xe0 attiva</strong>!",level:m.m.ERROR}):(n.pendingRequest=!0,(yield n.adminPanelService.setApolloIntrospection(n.apollo.instrospectionEnabled))?n.toastService.show({content:`Introspection di Apollo\n                <strong>${n.apollo.instrospectionEnabled?"abilitata":"disabilitata"}</strong> con successo!`}):n.toastService.advice(m.V.GENERIC),n.pendingRequest=!1)})()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(r.Jk),e.Y36(r.oz),e.Y36(h.rS),e.Y36(P.d),e.Y36(f.k),e.Y36(C))},o.\u0275cmp=e.Xpm({type:o,selectors:[["","app-admin-panel-graphql",""]],features:[e._Bn([h.rS])],attrs:L,decls:39,vars:17,consts:[[1,"h6","px-md-1","container-fluid"],[1,"flat-container","p-3"],[1,"mb-4","d-flex","align-items-end"],[1,"flex-grow-1","me-3"],["for","profile-token",1,"fs-sm"],["type","text","id","profile-token","disabled","",1,"form-control",3,"value"],[1,"d-block","ms-auto","btn","btn-primary",3,"cdkCopyToClipboard","appTippy","tippyProps","click"],["tokenTippyRef","appTippy"],[1,"material-icons","d-block"],[1,"px-3","pt-2","rounded","mb-4","position-relative"],[1,"legend-reset","fs-reset","px-2","mb-0"],[1,"position-absolute","px-3","bg-white","local-form-submit"],[1,"btn","btn-success","d-flex","align-items-center",3,"click"],[1,"material-icons-outlined"],["app-custom-form","",3,"schema","model","enableModelChangeEvent","modelChangeEvent","submitEvent"],["localEnvForm",""],[1,"px-3","pb-3","rounded","mb-4","pt-2"],[1,"form-check","form-switch","mb-3"],["type","checkbox","role","switch","id","enable-logs",1,"form-check-input",3,"ngModel","ngModelChange"],["for","enable-logs",1,"form-check-label"],[1,"logs-wrapper"],[3,"object"],[1,"form-check","form-switch","mb-0"],["type","checkbox","role","switch","id","apollo-introspection",1,"form-check-input",3,"disabled","ngModel","ngModelChange"],["for","apollo-introspection",1,"form-check-label"],[1,"d-flex","justify-content-end"],[1,"d-block"],["target","_blank",3,"href"]],template:function(n,t){if(1&n){const l=e.EpF();e.TgZ(0,"div",0),e._uU(1,"Endpoints"),e.qZA(),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"label",4),e._uU(6,"Token attuale:"),e.qZA(),e._UZ(7,"input",5),e.qZA(),e.TgZ(8,"button",6,7),e.NdJ("click",function(){e.CHM(l);const c=e.MAs(9);return e.KtG(!t.touchDevice&&c.changeContent("Token copiato!","Copia il token"))}),e.TgZ(10,"span",8),e._uU(11,"content_copy"),e.qZA()()(),e.TgZ(12,"fieldset",9)(13,"legend",10),e._uU(14,"Ambiente locale"),e.qZA(),e.TgZ(15,"div",11)(16,"button",12),e.NdJ("click",function(){e.CHM(l);const c=e.MAs(20);return e.KtG(c.submit())}),e.TgZ(17,"span",13),e._uU(18,"check_circle"),e.qZA()()(),e.TgZ(19,"div",14,15),e.NdJ("modelChangeEvent",function(){return t.onLocalEnvFormChange()})("submitEvent",function(){return t.onLocalEnvFormSubmit()}),e.qZA()(),e.TgZ(21,"fieldset",16)(22,"legend",10),e._uU(23),e.qZA(),e.TgZ(24,"div",17)(25,"input",18),e.NdJ("ngModelChange",function(c){return t.graphqlRequestLogger.enabled=c})("ngModelChange",function(){return t.saveAdminSettings()}),e.qZA(),e.TgZ(26,"label",19),e._uU(27,"Abilita il salvataggio dei log"),e.qZA()(),e.TgZ(28,"div",20),e._UZ(29,"app-custom-pre",21),e.qZA()(),e.TgZ(30,"div",22)(31,"input",23),e.NdJ("ngModelChange",function(c){return t.apollo.instrospectionEnabled=c})("ngModelChange",function(){return t.setApolloIntrospection()}),e.qZA(),e.TgZ(32,"label",24),e._uU(33,"Abilita l'introspection di Apollo"),e.qZA()(),e.TgZ(34,"div",25)(35,"small",26),e._uU(36,"Vai alla "),e.TgZ(37,"a",27),e._uU(38,"sandbox"),e.qZA()()()()}2&n&&(e.xp6(7),e.Q6J("value",t.graphqlToken),e.xp6(1),e.Q6J("cdkCopyToClipboard",t.graphqlToken)("appTippy",t.touchDevice?"Token copiato!":"Copia il token")("tippyProps",e.WLB(14,I,e.DdM(13,y),t.touchDevice)),e.xp6(11),e.Q6J("schema",t.localFormSchema)("model",t.localFormModel)("enableModelChangeEvent",!0),e.xp6(4),e.hij(" Log delle richieste (#",t.graphqlRequestLogger.list.length,") "),e.xp6(2),e.Q6J("ngModel",t.graphqlRequestLogger.enabled),e.xp6(4),e.Q6J("object",t.graphqlRequestLogger.list),e.xp6(2),e.Q6J("disabled",t.pendingRequest)("ngModel",t.apollo.instrospectionEnabled),e.xp6(6),e.Q6J("href",t.apollo.url,e.LSH))},dependencies:[S.i3,q.d,M.s,p.Wl,p.JJ,p.On,Z.$],styles:["fieldset[_ngcontent-%COMP%]{border:1px dashed var(--bs-gray-500)}.logs-wrapper[_ngcontent-%COMP%]{max-height:300px;overflow-y:auto}.local-form-submit[_ngcontent-%COMP%]{top:-.75rem;right:1rem;transform:translateY(-50%)}"]}),o})();var F=i(8055),_=i(6988),J=i(9121),G=i(7165),b=i(8109);const Q=["cacheModal"],U=["deletionModal"],N=["app-admin-panel-script",""];function k(o,a){if(1&o&&e._UZ(0,"option",15),2&o){const n=a.$implicit;e.Q6J("ngValue",n.scriptId)("innerText",n.name)}}const O=function(o){return{disabled:o}},j=function(o,a){return[o,a]};let H=(()=>{class o{constructor(n,t){this.scriptListService=n,this.toastService=t,this.scriptList=[],this.selectedScriptId=0,this.scriptSettingsPath=G.B2.SCRIPT_DEV_SETTINGS,this.cacheScriptId=0,this.deletionScriptId=0,this.pendingRequest=!1}ngOnInit(){var n=this;return(0,g.Z)(function*(){n.scriptList=(yield n.scriptListService.getAllScripts()).sort((t,l)=>t.name>l.name?1:l.name>t.name?-1:0)})()}findScriptName(n){var t;return(null===(t=this.scriptList.find(l=>l.scriptId===n))||void 0===t?void 0:t.name)||""}openCacheModal(){this.pendingRequest?this.toastService.advice(m.V.REQUEST_PENDING):(this.cacheScriptId=this.selectedScriptId,this.cacheModalRef.open())}openDeletionModal(){this.pendingRequest?this.toastService.advice(m.V.REQUEST_PENDING):(this.deletionScriptId=this.selectedScriptId,this.deletionModalRef.open())}setPendingRequest(n){this.pendingRequest=0!==n}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(J.o),e.Y36(f.k))},o.\u0275cmp=e.Xpm({type:o,selectors:[["","app-admin-panel-script",""]],viewQuery:function(n,t){if(1&n&&(e.Gf(Q,5),e.Gf(U,5)),2&n){let l;e.iGM(l=e.CRH())&&(t.cacheModalRef=l.first),e.iGM(l=e.CRH())&&(t.deletionModalRef=l.first)}},attrs:N,decls:17,vars:20,consts:[[1,"h6","px-md-1","container-fluid"],[1,"flat-container","p-3"],[1,"mb-2"],["for","script-select",1,"fs-sm"],["id","script-select",1,"form-select",3,"disabled","ngModel","ngModelChange"],["selected","",3,"ngValue"],[3,"ngValue","innerText",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","flex-wrap"],[1,"btn","btn-indigo","mx-2","mt-3",3,"disabled","innerText","click"],[1,"btn","btn-primary","mx-2","mt-3",3,"ngClass","innerText","routerLink"],[1,"btn","btn-danger","mx-2","mt-3",3,"disabled","innerText","click"],[3,"scriptId","scriptName","cachePendingEvent"],["cacheModal",""],[3,"scriptName","scriptId","deletionPendingEvent"],["deletionModal",""],[3,"ngValue","innerText"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e._uU(1,"Script"),e.qZA(),e.TgZ(2,"div",1)(3,"div",2)(4,"label",3),e._uU(5,"Seleziona lo script da amministrare:"),e.qZA(),e.TgZ(6,"select",4),e.NdJ("ngModelChange",function(s){return t.selectedScriptId=s}),e._UZ(7,"option",5),e.YNc(8,k,1,2,"option",6),e.qZA()(),e.TgZ(9,"div",7)(10,"button",8),e.NdJ("click",function(){return t.openCacheModal()}),e.qZA(),e._UZ(11,"a",9),e.TgZ(12,"button",10),e.NdJ("click",function(){return t.openDeletionModal()}),e.qZA()()(),e.TgZ(13,"app-script-dev-cache",11,12),e.NdJ("cachePendingEvent",function(s){return t.setPendingRequest(s)}),e.qZA(),e.TgZ(15,"app-script-dev-deletion",13,14),e.NdJ("deletionPendingEvent",function(s){return t.setPendingRequest(s)}),e.qZA()),2&n&&(e.xp6(6),e.Q6J("disabled",0===t.scriptList.length)("ngModel",t.selectedScriptId),e.xp6(1),e.Q6J("ngValue",0),e.xp6(1),e.Q6J("ngForOf",t.scriptList),e.xp6(2),e.Q6J("disabled",0===t.selectedScriptId||t.pendingRequest)("innerText","Cache"),e.xp6(1),e.Q6J("ngClass",e.VKq(15,O,0===t.selectedScriptId))("innerText","Impostazioni")("routerLink",e.WLB(17,j,t.scriptSettingsPath,t.selectedScriptId)),e.xp6(1),e.Q6J("disabled",0===t.selectedScriptId||t.pendingRequest)("innerText","Cancella"),e.xp6(1),e.Q6J("scriptId",t.cacheScriptId)("scriptName",t.cacheScriptId>0?t.findScriptName(t.cacheScriptId):""),e.xp6(2),e.Q6J("scriptName",t.deletionScriptId>0?t.findScriptName(t.deletionScriptId):"")("scriptId",t.deletionScriptId))},dependencies:[h.mk,h.sg,p.YN,p.Kr,p.EJ,p.JJ,p.On,b.rH,F.s,_.F]}),o})(),D=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:4,vars:0,consts:[["pageTitle","Pannello di amministrazione"],[1,"d-grid","page-container"],["app-admin-panel-graphql",""],["app-admin-panel-script",""]],template:function(n,t){1&n&&(e._UZ(0,"app-breadcrumb",0),e.TgZ(1,"div",1),e._UZ(2,"div",2)(3,"div",3),e.qZA())},dependencies:[T.L,R,H],styles:[".page-container[_ngcontent-%COMP%]{gap:1rem}@media (min-width: 960px){.page-container[_ngcontent-%COMP%]{gap:1.5rem}}@media (min-width: 1500px){.page-container[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}"]}),o})();var $=i(9090),V=i(337),Y=i(5063),x=i(9537),z=i(232),B=i(3038);const W=[{path:"",component:D}];let K=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[$.w,S.Iq,h.ez,V.I,Y.b,p.u5,b.Bz.forChild(W),x.U,z.a,B.G]}),o})()}}]);
"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[316],{6562:(L,C,o)=>{o.r(C),o.d(C,{AdminPanelModule:()=>w});var e=o(5879),A=o(3285),T=o(5861),u=o(1413),d=o(2907);let q=(()=>{var i;class a{constructor(n){this.graphqlService=n,this.apolloIntrospectionRequestTime=0}get isApolloIntrospectionEnabled(){return Date.now()<this.apolloIntrospectionRequestTime+3e4}setApolloIntrospection(n){var t=this;return(0,T.Z)(function*(){const l=(yield t.graphqlService.mutate({mutation:"\nmutation ApolloIntrospectionStatus($status: Boolean!) {\n    apolloIntrospectionStatus(status: $status)\n}",variables:{status:n}})).data.apolloIntrospectionStatus;return l&&(t.apolloIntrospectionRequestTime=n?Date.now():0),l})()}}return(i=a).\u0275fac=function(n){return new(n||i)(e.LFG(d.Jk))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),a})();var m=o(1378),P=o(1410),E=o(4020),s=o(6814),p=o(5661),v=o(342),b=o(7429),S=o(8940),h=o(6223),f=o(8595);const I=["app-admin-panel-graphql",""],R=function(){return[10,10]},F=function(i,a){return{placement:"top-end",offset:i,hideOnClick:a}};let U=(()=>{var i;class a{constructor(n,t,l,c,g,ee){var M;this.graphqlService=n,this.endpointsService=t,this.titleCasePipe=l,this.globalsService=c,this.toastService=g,this.adminPanelService=ee,this.touchDevice=E.eX,this.graphqlRequestLogger={enabled:!1,list:[]},this.localFormSchema={},this.localFormModel={},this.pendingRequest=!1,this.apollo={url:"",instrospectionEnabled:!1},this.localFormType=d.jQ.GRAPHQL,this.graphqlToken=(null===(M=this.graphqlService.params)||void 0===M?void 0:M.token)||"",this.graphqlRequestLogger.enabled=this.graphqlService.loggerEnabled,this.graphqlRequestLogger.list=this.graphqlService.requestLogs}ngOnInit(){this.createLocalFormSchema(),this.setApolloUrl()}setApolloUrl(){this.apollo=(0,u.Z)((0,u.Z)({},this.apollo),{},{url:`https://studio.apollographql.com/sandbox/explorer?endpoint=${this.graphqlService.urlHttp}&headers=${JSON.stringify({Authorization:this.graphqlToken})}`})}createLocalFormSchema(){const n={type:"object",properties:{localEnv:{type:"object",description:`L'url base per le richieste locali \xe8 [i]${this.endpointsService.getBaseLocalUrl()}[/i]`,oneOf:Object.entries(this.endpointsService.getAllLocalPaths()).map(t=>({title:this.titleCasePipe.transform(t[0]),widget:{formlyConfig:{props:{fieldsetTemplate:!0}}},properties:{[t[0]]:{default:t[0],widget:{formlyConfig:{props:{type:"hidden"}}}},endpointType:{default:t[0],widget:{formlyConfig:{props:{type:"hidden"}}}},paths:{type:"object",properties:Object.fromEntries(Object.entries(t[1]).map(l=>[l[0],{type:"string",title:`Path per le richieste [i]${l[0]}[/i]:`,default:l[1]}]))},enabled:{type:"checkbox",title:"Utilizza l'ambiente locale per queste richieste",default:this.endpointsService.getLocalEnv(t[0])}}}))}}};this.localFormSchema=(0,u.Z)({},n)}onLocalEnvFormChange(){const n=this.localFormModel.localEnv.endpointType;n!==this.localFormType?(this.localFormType=this.localFormModel.localEnv.endpointType,this.localFormModel.localEnv.enabled=this.endpointsService.getLocalEnv(this.localFormType),this.localFormModel.localEnv.paths=(0,u.Z)({},this.endpointsService.getLocalPaths(this.localFormType)),this.localFormModel=(0,u.Z)({},this.localFormModel)):this.localFormModel.localEnv.enabled!==this.endpointsService.getLocalEnv(n)&&this.onLocalEnvFormSubmit()}onLocalEnvFormSubmit(){const n=this.localFormModel.localEnv;this.updateLocalEnv(n.endpointType,n.enabled,n.paths)&&(this.localFormModel.localEnv.enabled=!0,this.localFormModel=(0,u.Z)({},this.localFormModel)),n.endpointType===d.jQ.GRAPHQL&&(this.saveAdminSettings(),this.setApolloUrl()),this.toastService.show({content:"Impostazioni dell'<strong>ambiente locale</strong> aggionate!",delay:5e3})}updateLocalEnv(n,t,l){return t!==this.endpointsService.getLocalEnv(n)?(this.endpointsService.setLocalEnv(n,t),!1):(this.endpointsService.setLocalEnv(n,!0),this.endpointsService.setLocalPaths(n,l),!0)}saveAdminSettings(){this.graphqlService.loggerEnabled=this.graphqlRequestLogger.enabled,this.globalsService.adminSettings=(0,u.Z)((0,u.Z)({},this.globalsService.adminSettings||{}),{graphql:{useLocalEnv:this.endpointsService.getLocalEnv(d.jQ.GRAPHQL),urlHttpLocalEnv:this.endpointsService.getLocalPaths(d.jQ.GRAPHQL)[d.PB.HTTP],urlWsLocalEnv:this.endpointsService.getLocalPaths(d.jQ.GRAPHQL)[d.PB.WS],loggerEnabled:this.graphqlRequestLogger.enabled}})}setApolloIntrospection(){var n=this;return(0,T.Z)(function*(){n.pendingRequest?n.toastService.advice(m.V.REQUEST_PENDING):n.apollo.instrospectionEnabled&&n.adminPanelService.isApolloIntrospectionEnabled?n.toastService.show({content:"L'introspection di Apollo \xe8 <strong>gi\xe0 attiva</strong>!",level:m.m.ERROR}):(n.pendingRequest=!0,(yield n.adminPanelService.setApolloIntrospection(n.apollo.instrospectionEnabled))?n.toastService.show({content:`Introspection di Apollo\n                <strong>${n.apollo.instrospectionEnabled?"abilitata":"disabilitata"}</strong> con successo!`}):n.toastService.advice(m.V.GENERIC),n.pendingRequest=!1)})()}}return(i=a).\u0275fac=function(n){return new(n||i)(e.Y36(d.Jk),e.Y36(d.oz),e.Y36(s.rS),e.Y36(P.d),e.Y36(p.k),e.Y36(q))},i.\u0275cmp=e.Xpm({type:i,selectors:[["","app-admin-panel-graphql",""]],features:[e._Bn([s.rS])],attrs:I,decls:39,vars:17,consts:[[1,"h6","px-md-1","container-fluid"],[1,"flat-container","p-3"],[1,"mb-4","d-flex","align-items-end"],[1,"flex-grow-1","me-3"],["for","profile-token",1,"fs-sm"],["type","text","id","profile-token","disabled","",1,"form-control",3,"value"],[1,"d-block","ms-auto","btn","btn-primary",3,"cdkCopyToClipboard","appTippy","tippyProps","click"],["tokenTippyRef","appTippy"],[1,"material-icons","d-block"],[1,"px-3","pt-2","rounded","mb-4","position-relative"],[1,"legend-reset","fs-reset","px-2","mb-0"],[1,"position-absolute","px-3","bg-white","local-form-submit"],[1,"btn","btn-success","d-flex","align-items-center",3,"click"],[1,"material-icons-outlined"],["app-custom-form","",3,"schema","model","enableModelChangeEvent","modelChangeEvent","submitEvent"],["localEnvForm",""],[1,"px-3","pb-3","rounded","mb-4","pt-2"],[1,"form-check","form-switch","mb-3"],["type","checkbox","role","switch","id","enable-logs",1,"form-check-input",3,"ngModel","ngModelChange"],["for","enable-logs",1,"form-check-label"],[1,"logs-wrapper"],[3,"object"],[1,"form-check","form-switch","mb-0"],["type","checkbox","role","switch","id","apollo-introspection",1,"form-check-input",3,"disabled","ngModel","ngModelChange"],["for","apollo-introspection",1,"form-check-label"],[1,"d-flex","justify-content-end"],[1,"d-block"],["target","_blank",3,"href"]],template:function(n,t){if(1&n){const l=e.EpF();e.TgZ(0,"div",0),e._uU(1,"Endpoints"),e.qZA(),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"label",4),e._uU(6,"Token attuale:"),e.qZA(),e._UZ(7,"input",5),e.qZA(),e.TgZ(8,"button",6,7),e.NdJ("click",function(){e.CHM(l);const g=e.MAs(9);return e.KtG(!t.touchDevice&&g.changeContent("Token copiato!","Copia il token"))}),e.TgZ(10,"span",8),e._uU(11,"content_copy"),e.qZA()()(),e.TgZ(12,"fieldset",9)(13,"legend",10),e._uU(14,"Ambiente locale"),e.qZA(),e.TgZ(15,"div",11)(16,"button",12),e.NdJ("click",function(){e.CHM(l);const g=e.MAs(20);return e.KtG(g.submit())}),e.TgZ(17,"span",13),e._uU(18,"check_circle"),e.qZA()()(),e.TgZ(19,"div",14,15),e.NdJ("modelChangeEvent",function(){return t.onLocalEnvFormChange()})("submitEvent",function(){return t.onLocalEnvFormSubmit()}),e.qZA()(),e.TgZ(21,"fieldset",16)(22,"legend",10),e._uU(23),e.qZA(),e.TgZ(24,"div",17)(25,"input",18),e.NdJ("ngModelChange",function(g){return t.graphqlRequestLogger.enabled=g})("ngModelChange",function(){return t.saveAdminSettings()}),e.qZA(),e.TgZ(26,"label",19),e._uU(27,"Abilita il salvataggio dei log"),e.qZA()(),e.TgZ(28,"div",20),e._UZ(29,"app-custom-pre",21),e.qZA()(),e.TgZ(30,"div",22)(31,"input",23),e.NdJ("ngModelChange",function(g){return t.apollo.instrospectionEnabled=g})("ngModelChange",function(){return t.setApolloIntrospection()}),e.qZA(),e.TgZ(32,"label",24),e._uU(33,"Abilita l'introspection di Apollo"),e.qZA()(),e.TgZ(34,"div",25)(35,"small",26),e._uU(36,"Vai alla "),e.TgZ(37,"a",27),e._uU(38,"sandbox"),e.qZA()()()()}2&n&&(e.xp6(7),e.Q6J("value",t.graphqlToken),e.xp6(1),e.Q6J("cdkCopyToClipboard",t.graphqlToken)("appTippy",t.touchDevice?"Token copiato!":"Copia il token")("tippyProps",e.WLB(14,F,e.DdM(13,R),t.touchDevice)),e.xp6(11),e.Q6J("schema",t.localFormSchema)("model",t.localFormModel)("enableModelChangeEvent",!0),e.xp6(4),e.hij(" Log delle richieste (#",t.graphqlRequestLogger.list.length,") "),e.xp6(2),e.Q6J("ngModel",t.graphqlRequestLogger.enabled),e.xp6(4),e.Q6J("object",t.graphqlRequestLogger.list),e.xp6(2),e.Q6J("disabled",t.pendingRequest)("ngModel",t.apollo.instrospectionEnabled),e.xp6(6),e.Q6J("href",t.apollo.url,e.LSH))},dependencies:[v.i3,b.d,S.s,h.Wl,h.JJ,h.On,f.$],styles:["fieldset[_ngcontent-%COMP%]{border:1px dashed var(--bs-gray-500)}.logs-wrapper[_ngcontent-%COMP%]{max-height:300px;overflow-y:auto}.local-form-submit[_ngcontent-%COMP%]{top:-.75rem;right:1rem;transform:translateY(-50%)}"]}),a})();var N=o(8055),J=o(6988),G=o(9121),Q=o(7165),Z=o(8109);const _=["cacheModal"],k=["deletionModal"],D=["app-admin-panel-script",""];function O(i,a){if(1&i&&e._UZ(0,"option",15),2&i){const r=a.$implicit;e.Q6J("ngValue",r.scriptId)("innerText",r.name)}}const B=function(i){return{disabled:i}},j=function(i,a){return[i,a]};let $=(()=>{var i;class a{constructor(n,t){this.scriptListService=n,this.toastService=t,this.scriptList=[],this.scriptSettingsPath=Q.B2.SCRIPT_DEV_SETTINGS,this.pendingRequest=!1}ngOnInit(){var n=this;return(0,T.Z)(function*(){n.scriptList=(yield n.scriptListService.getAllScripts()).sort((t,l)=>t.name>l.name?1:l.name>t.name?-1:0)})()}findScriptName(n){var t;return(null===(t=this.scriptList.find(l=>l.scriptId===n))||void 0===t?void 0:t.name)||""}openCacheModal(){this.pendingRequest?this.toastService.advice(m.V.REQUEST_PENDING):(this.cacheScriptId=this.selectedScriptId,this.cacheModalRef.open())}openDeletionModal(){this.pendingRequest?this.toastService.advice(m.V.REQUEST_PENDING):(this.deletionScriptId=this.selectedScriptId,this.deletionModalRef.open())}setPendingRequest(n){this.pendingRequest=!!n}}return(i=a).\u0275fac=function(n){return new(n||i)(e.Y36(G.o),e.Y36(p.k))},i.\u0275cmp=e.Xpm({type:i,selectors:[["","app-admin-panel-script",""]],viewQuery:function(n,t){if(1&n&&(e.Gf(_,5),e.Gf(k,5)),2&n){let l;e.iGM(l=e.CRH())&&(t.cacheModalRef=l.first),e.iGM(l=e.CRH())&&(t.deletionModalRef=l.first)}},attrs:D,decls:17,vars:20,consts:[[1,"h6","px-md-1","container-fluid"],[1,"flat-container","p-3"],[1,"mb-2"],["for","script-select",1,"fs-sm"],["id","script-select",1,"form-select",3,"disabled","ngModel","ngModelChange"],["selected","",3,"ngValue"],[3,"ngValue","innerText",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","flex-wrap"],[1,"btn","btn-indigo","mx-2","mt-3",3,"disabled","innerText","click"],[1,"btn","btn-primary","mx-2","mt-3",3,"ngClass","innerText","routerLink"],[1,"btn","btn-danger","mx-2","mt-3",3,"disabled","innerText","click"],[3,"scriptId","scriptName","cachePendingEvent"],["cacheModal",""],[3,"scriptName","scriptId","deletionPendingEvent"],["deletionModal",""],[3,"ngValue","innerText"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e._uU(1,"Script"),e.qZA(),e.TgZ(2,"div",1)(3,"div",2)(4,"label",3),e._uU(5,"Seleziona lo script da amministrare:"),e.qZA(),e.TgZ(6,"select",4),e.NdJ("ngModelChange",function(c){return t.selectedScriptId=c}),e._UZ(7,"option",5),e.YNc(8,O,1,2,"option",6),e.qZA()(),e.TgZ(9,"div",7)(10,"button",8),e.NdJ("click",function(){return t.openCacheModal()}),e.qZA(),e._UZ(11,"a",9),e.TgZ(12,"button",10),e.NdJ("click",function(){return t.openDeletionModal()}),e.qZA()()(),e.TgZ(13,"app-script-dev-cache",11,12),e.NdJ("cachePendingEvent",function(c){return t.setPendingRequest(c)}),e.qZA(),e.TgZ(15,"app-script-dev-deletion",13,14),e.NdJ("deletionPendingEvent",function(c){return t.setPendingRequest(c)}),e.qZA()),2&n&&(e.xp6(6),e.Q6J("disabled",0===t.scriptList.length)("ngModel",t.selectedScriptId),e.xp6(1),e.Q6J("ngValue",0),e.xp6(1),e.Q6J("ngForOf",t.scriptList),e.xp6(2),e.Q6J("disabled",t.selectedScriptId||t.pendingRequest)("innerText","Cache"),e.xp6(1),e.Q6J("ngClass",e.VKq(15,B,void 0===t.selectedScriptId))("innerText","Impostazioni")("routerLink",e.WLB(17,j,t.scriptSettingsPath,t.selectedScriptId)),e.xp6(1),e.Q6J("disabled",void 0===t.selectedScriptId||t.pendingRequest)("innerText","Cancella"),e.xp6(1),e.Q6J("scriptId",t.cacheScriptId)("scriptName",t.cacheScriptId?t.findScriptName(t.cacheScriptId):""),e.xp6(2),e.Q6J("scriptName",t.deletionScriptId?t.findScriptName(t.deletionScriptId):"")("scriptId",t.deletionScriptId))},dependencies:[s.mk,s.sg,h.YN,h.Kr,h.EJ,h.JJ,h.On,Z.rH,N.s,J.F]}),a})(),H=(()=>{var i;class a{constructor(){}ngOnInit(){}}return(i=a).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["ng-component"]],decls:4,vars:0,consts:[["pageTitle","Pannello di amministrazione"],[1,"d-grid","page-container"],["app-admin-panel-graphql",""],["app-admin-panel-script",""]],template:function(n,t){1&n&&(e._UZ(0,"app-breadcrumb",0),e.TgZ(1,"div",1),e._UZ(2,"div",2)(3,"div",3),e.qZA())},dependencies:[A.L,U,$],styles:[".page-container[_ngcontent-%COMP%]{gap:1rem}@media (min-width: 960px){.page-container[_ngcontent-%COMP%]{gap:1.5rem}}@media (min-width: 1500px){.page-container[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}"]}),a})();var x=o(9090),Y=o(1059),z=o(1568),V=o(9537),K=o(232),W=o(3038);const X=[{path:"",component:H}];let w=(()=>{var i;class a{}return(i=a).\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[x.w,v.Iq,s.ez,Y.I,z.b,h.u5,Z.Bz.forChild(X),V.U,K.a,W.G]}),a})()},8418:(L,C,o)=>{o.d(C,{K:()=>q});var e=o(1413),A=o(5861),T=o(2907),y=o(5879);let q=(()=>{var m;class P{constructor(s){this.graphqlService=s,this.searchByNameCache={},this.uidToDetailsCache={},this.uidToDetailsMisses=[]}getDetailsFromUids(s){var p=this;return(0,A.Z)(function*(){let v=[];const b=s.filter(S=>p.uidToDetailsCache.hasOwnProperty(S)?(v.push(p.uidToDetailsCache[S]),!1):-1===p.uidToDetailsMisses.indexOf(S));if(b.length>0){const S=yield p.graphqlService.query({query:"\nquery UserUidToDetails($uids: [String!]!) {\n    userUidToDetails(uids: $uids) {\n        avatar,\n        nickname,\n        uid\n    }\n}",variables:{uids:b}});let h=[];for(const f of S.data.userUidToDetails)p.uidToDetailsCache[f.uid]=f,v.push((0,e.Z)({},f)),h.push(f.uid);p.uidToDetailsMisses.push(...b.filter(f=>-1===h.indexOf(f)))}return v})()}searchUserByName(s){var p=this;return(0,A.Z)(function*(){if(p.searchByNameCache.hasOwnProperty(s))return p.searchByNameCache[s];const v=yield p.graphqlService.query({query:"\nquery UserSearchByName($name: String!) {\n    userSearchByName(name: $name) {\n        uid\n        nickname\n        avatar\n    }\n}",variables:{name:s}});return p.searchByNameCache[s]=v.data.userSearchByName})()}}return(m=P).\u0275fac=function(s){return new(s||m)(y.LFG(T.Jk))},m.\u0275prov=y.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),P})()}}]);
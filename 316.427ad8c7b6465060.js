"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[316],{6562:(M,C,i)=>{i.r(C),i.d(C,{AdminPanelModule:()=>w});var e=i(9212),T=i(3285),m=i(5861),h=i(1413),s=i(7755);let v=(()=>{var o;class a{constructor(n){this.graphqlService=n,this.apolloIntrospectionRequestTime=0}get isApolloIntrospectionEnabled(){return Date.now()<this.apolloIntrospectionRequestTime+3e4}setApolloIntrospection(n){var t=this;return(0,m.Z)(function*(){const l=(yield t.graphqlService.mutate({mutation:"\nmutation ApolloIntrospectionStatus($status: Boolean!) {\n    apolloIntrospectionStatus(status: $status)\n}",variables:{status:n}})).data.apolloIntrospectionStatus;return l&&(t.apolloIntrospectionRequestTime=n?Date.now():0),l})()}}return(o=a).\u0275fac=function(n){return new(n||o)(e.LFG(s.Jk))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),a})();var f=i(1378),q=i(1410),g=i(4020),p=i(6814),d=i(5661),b=i(342),A=i(7429),E=i(8940),u=i(6223),L=i(8726);const _=["app-admin-panel-graphql",""];function I(o,a){1&o&&e._uU(0," Token copiato! ")}function R(o,a){1&o&&e._uU(0," Copia il token ")}function F(o,a){if(1&o&&e.YNc(0,I,1,0)(1,R,1,0),2&o){const r=e.oxw();e.um2(0,r.tokenCopied||r.touchDevice?0:1)}}let U=(()=>{var o;class a{constructor(n,t,l,c,S,ee){var Z;this.graphqlService=n,this.endpointsService=t,this.titleCasePipe=l,this.globalsService=c,this.toastService=S,this.adminPanelService=ee,this.touchDevice=g.b1,this.graphqlRequestLogger={enabled:!1,list:[]},this.localFormSchema={},this.localFormModel={},this.pendingRequest=!1,this.apollo={url:"",instrospectionEnabled:!1},this.tokenCopied=!1,this.localFormType=s.jQ.GRAPHQL,this.graphqlToken=(null===(Z=this.graphqlService.params)||void 0===Z?void 0:Z.token)||"",this.graphqlRequestLogger.enabled=this.graphqlService.loggerEnabled,this.graphqlRequestLogger.list=this.graphqlService.requestLogs;const te=(0,s.EF)([10,10]);this.popperOptions=ne=>(0,s.F_)([te],ne)}ngOnInit(){this.createLocalFormSchema(),this.setApolloUrl()}setApolloUrl(){this.apollo=(0,h.Z)((0,h.Z)({},this.apollo),{},{url:"https://studio.apollographql.com/sandbox/explorer?endpoint="+"".concat(this.graphqlService.urlHttp,"&headers=").concat(JSON.stringify({Authorization:this.graphqlToken}))})}createLocalFormSchema(){const n={type:"object",properties:{localEnv:{type:"object",description:"L'url base per le richieste locali \xe8 [i]".concat(this.endpointsService.getBaseLocalUrl(),"[/i]"),oneOf:Object.entries(this.endpointsService.getAllLocalPaths()).map(t=>({title:this.titleCasePipe.transform(t[0]),widget:{formlyConfig:{props:{fieldsetTemplate:!0}}},properties:{[t[0]]:{default:t[0],widget:{formlyConfig:{props:{type:"hidden"}}}},endpointType:{default:t[0],widget:{formlyConfig:{props:{type:"hidden"}}}},paths:{type:"object",properties:Object.fromEntries(Object.entries(t[1]).map(l=>[l[0],{type:"string",title:"Path per le richieste [i]".concat(l[0],"[/i]:"),default:l[1]}]))},enabled:{type:"checkbox",title:"Utilizza l'ambiente locale per queste richieste",default:this.endpointsService.getLocalEnv(t[0])}}}))}}};this.localFormSchema=(0,h.Z)({},n)}onLocalEnvFormChange(){const n=this.localFormModel.localEnv.endpointType;n!==this.localFormType?(this.localFormType=this.localFormModel.localEnv.endpointType,this.localFormModel.localEnv.enabled=this.endpointsService.getLocalEnv(this.localFormType),this.localFormModel.localEnv.paths=(0,h.Z)({},this.endpointsService.getLocalPaths(this.localFormType)),this.localFormModel=(0,h.Z)({},this.localFormModel)):this.localFormModel.localEnv.enabled!==this.endpointsService.getLocalEnv(n)&&this.onLocalEnvFormSubmit()}onLocalEnvFormSubmit(){const n=this.localFormModel.localEnv;this.updateLocalEnv(n.endpointType,n.enabled,n.paths)&&(this.localFormModel.localEnv.enabled=!0,this.localFormModel=(0,h.Z)({},this.localFormModel)),n.endpointType===s.jQ.GRAPHQL&&(this.saveAdminSettings(),this.setApolloUrl()),this.toastService.show({content:"Impostazioni dell'<strong>ambiente locale</strong> aggionate!",delay:5e3})}updateLocalEnv(n,t,l){return t!==this.endpointsService.getLocalEnv(n)?(this.endpointsService.setLocalEnv(n,t),!1):(this.endpointsService.setLocalEnv(n,!0),this.endpointsService.setLocalPaths(n,l),!0)}saveAdminSettings(){this.graphqlService.loggerEnabled=this.graphqlRequestLogger.enabled,this.globalsService.adminSettings=(0,h.Z)((0,h.Z)({},this.globalsService.adminSettings||{}),{graphql:{useLocalEnv:this.endpointsService.getLocalEnv(s.jQ.GRAPHQL),urlHttpLocalEnv:this.endpointsService.getLocalPaths(s.jQ.GRAPHQL)[s.PB.HTTP],urlWsLocalEnv:this.endpointsService.getLocalPaths(s.jQ.GRAPHQL)[s.PB.WS],loggerEnabled:this.graphqlRequestLogger.enabled}})}setApolloIntrospection(){var n=this;return(0,m.Z)(function*(){n.pendingRequest?n.toastService.advice(f.V.REQUEST_PENDING):n.apollo.instrospectionEnabled&&n.adminPanelService.isApolloIntrospectionEnabled?n.toastService.show({content:"L'introspection di Apollo \xe8 <strong>gi\xe0 attiva</strong>!",level:f.m.ERROR}):(n.pendingRequest=!0,(yield n.adminPanelService.setApolloIntrospection(n.apollo.instrospectionEnabled))?n.toastService.show({content:"Introspection di Apollo\n                <strong>".concat(n.apollo.instrospectionEnabled?"abilitata":"disabilitata","</strong> con successo!")}):n.toastService.advice(f.V.GENERIC),n.pendingRequest=!1)})()}}return(o=a).\u0275fac=function(n){return new(n||o)(e.Y36(s.Jk),e.Y36(s.oz),e.Y36(p.rS),e.Y36(q.d),e.Y36(d.k),e.Y36(v))},o.\u0275cmp=e.Xpm({type:o,selectors:[["","app-admin-panel-graphql",""]],features:[e._Bn([p.rS])],attrs:_,decls:40,vars:14,consts:[[1,"h6","px-md-1","container-fluid"],[1,"flat-container","p-3"],[1,"mb-4","d-flex","align-items-end"],[1,"flex-grow-1","me-3"],["for","profile-token",1,"fs-sm"],["type","text","id","profile-token","disabled","",1,"form-control",3,"value"],["placement","top-end",1,"d-block","ms-auto","btn","btn-primary",3,"cdkCopyToClipboard","ngbTooltip","popperOptions","triggers","click","hidden"],[1,"material-icons","d-block"],["tooltipContent",""],[1,"px-3","pt-2","rounded","mb-4","position-relative"],[1,"legend-reset","fs-reset","px-2","mb-0"],[1,"position-absolute","px-3","bg-white","local-form-submit"],[1,"btn","btn-success","d-flex","align-items-center",3,"click"],[1,"material-icons-outlined"],["app-custom-form","",3,"schema","model","enableModelChangeEvent","modelChangeEvent","submitEvent"],["localEnvForm",""],[1,"px-3","pb-3","rounded","mb-4","pt-2"],[1,"form-check","form-switch","mb-3"],["type","checkbox","role","switch","id","enable-logs",1,"form-check-input",3,"ngModel","ngModelChange"],["for","enable-logs",1,"form-check-label"],[1,"logs-wrapper"],[3,"object"],[1,"form-check","form-switch","mb-0"],["type","checkbox","role","switch","id","apollo-introspection",1,"form-check-input",3,"disabled","ngModel","ngModelChange"],["for","apollo-introspection",1,"form-check-label"],[1,"d-flex","justify-content-end"],[1,"d-block"],["target","_blank",3,"href"]],template:function(n,t){if(1&n){const l=e.EpF();e.TgZ(0,"div",0),e._uU(1,"Endpoints"),e.qZA(),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"label",4),e._uU(6,"Token attuale:"),e.qZA(),e._UZ(7,"input",5),e.qZA(),e.TgZ(8,"button",6),e.NdJ("click",function(){return t.tokenCopied=!0})("hidden",function(){return t.tokenCopied=!1}),e.TgZ(9,"span",7),e._uU(10,"content_copy"),e.qZA()(),e.YNc(11,F,2,1,"ng-template",null,8,e.W1O),e.qZA(),e.TgZ(13,"fieldset",9)(14,"legend",10),e._uU(15,"Ambiente locale"),e.qZA(),e.TgZ(16,"div",11)(17,"button",12),e.NdJ("click",function(){e.CHM(l);const S=e.MAs(21);return e.KtG(S.submit())}),e.TgZ(18,"span",13),e._uU(19,"check_circle"),e.qZA()()(),e.TgZ(20,"div",14,15),e.NdJ("modelChangeEvent",function(){return t.onLocalEnvFormChange()})("submitEvent",function(){return t.onLocalEnvFormSubmit()}),e.qZA()(),e.TgZ(22,"fieldset",16)(23,"legend",10),e._uU(24),e.qZA(),e.TgZ(25,"div",17)(26,"input",18),e.NdJ("ngModelChange",function(S){return t.graphqlRequestLogger.enabled=S})("ngModelChange",function(){return t.saveAdminSettings()}),e.qZA(),e.TgZ(27,"label",19),e._uU(28,"Abilita il salvataggio dei log"),e.qZA()(),e.TgZ(29,"div",20),e._UZ(30,"app-custom-pre",21),e.qZA()(),e.TgZ(31,"div",22)(32,"input",23),e.NdJ("ngModelChange",function(S){return t.apollo.instrospectionEnabled=S})("ngModelChange",function(){return t.setApolloIntrospection()}),e.qZA(),e.TgZ(33,"label",24),e._uU(34,"Abilita l'introspection di Apollo"),e.qZA()(),e.TgZ(35,"div",25)(36,"small",26),e._uU(37,"Vai alla "),e.TgZ(38,"a",27),e._uU(39,"sandbox"),e.qZA()()()()}if(2&n){const l=e.MAs(12);e.xp6(7),e.Q6J("value",t.graphqlToken),e.xp6(),e.Q6J("cdkCopyToClipboard",t.graphqlToken)("ngbTooltip",l)("popperOptions",t.popperOptions)("triggers",t.touchDevice?"click":"hover"),e.xp6(12),e.Q6J("schema",t.localFormSchema)("model",t.localFormModel)("enableModelChangeEvent",!0),e.xp6(4),e.hij(" Log delle richieste (#",t.graphqlRequestLogger.list.length,") "),e.xp6(2),e.Q6J("ngModel",t.graphqlRequestLogger.enabled),e.xp6(4),e.Q6J("object",t.graphqlRequestLogger.list),e.xp6(2),e.Q6J("disabled",t.pendingRequest)("ngModel",t.apollo.instrospectionEnabled),e.xp6(6),e.Q6J("href",t.apollo.url,e.LSH)}},dependencies:[b.i3,A.d,E.s,u.Wl,u.JJ,u.On,L._L],styles:["fieldset[_ngcontent-%COMP%]{border:1px dashed var(--bs-gray-500)}.logs-wrapper[_ngcontent-%COMP%]{max-height:300px;overflow-y:auto}.local-form-submit[_ngcontent-%COMP%]{top:-.75rem;right:1rem;transform:translateY(-50%)}"]}),a})();var N=i(8055),G=i(6988),J=i(6245),Q=i(7165),y=i(2655);const k=["cacheModal"],O=["deletionModal"],j=["app-admin-panel-script",""];function B(o,a){if(1&o&&e._UZ(0,"option",15),2&o){const r=a.$implicit;e.Q6J("ngValue",r.id)("innerText",r.name)}}const x=o=>({disabled:o}),Y=(o,a)=>[o,a];let $=(()=>{var o;class a{constructor(n,t){this.scriptListService=n,this.toastService=t,this.scriptList=[],this.scriptSettingsPath=Q.B2.SCRIPT_DEV_SETTINGS,this.pendingRequest=!1}ngOnInit(){var n=this;return(0,m.Z)(function*(){n.scriptList=(yield n.scriptListService.getAllScripts()).sort((t,l)=>t.name>l.name?1:l.name>t.name?-1:0)})()}findScriptName(n){var t;return(null===(t=this.scriptList.find(l=>l.id===n))||void 0===t?void 0:t.name)||""}openCacheModal(){this.pendingRequest?this.toastService.advice(f.V.REQUEST_PENDING):(this.cacheScriptId=this.selectedScriptId,this.cacheModalRef.open())}openDeletionModal(){this.pendingRequest?this.toastService.advice(f.V.REQUEST_PENDING):(this.deletionScriptId=this.selectedScriptId,this.deletionModalRef.open())}setPendingRequest(n){this.pendingRequest=!!n}}return(o=a).\u0275fac=function(n){return new(n||o)(e.Y36(J.o),e.Y36(d.k))},o.\u0275cmp=e.Xpm({type:o,selectors:[["","app-admin-panel-script",""]],viewQuery:function(n,t){if(1&n&&(e.Gf(k,5),e.Gf(O,5)),2&n){let l;e.iGM(l=e.CRH())&&(t.cacheModalRef=l.first),e.iGM(l=e.CRH())&&(t.deletionModalRef=l.first)}},attrs:j,decls:17,vars:20,consts:[[1,"h6","px-md-1","container-fluid"],[1,"flat-container","p-3"],[1,"mb-2"],["for","script-select",1,"fs-sm"],["id","script-select",1,"form-select",3,"disabled","ngModel","ngModelChange"],["selected","",3,"ngValue"],[3,"ngValue","innerText",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","flex-wrap"],[1,"btn","btn-indigo","mx-2","mt-3",3,"disabled","innerText","click"],[1,"btn","btn-primary","mx-2","mt-3",3,"ngClass","innerText","routerLink"],[1,"btn","btn-danger","mx-2","mt-3",3,"disabled","innerText","click"],[3,"scriptId","scriptName","cachePendingEvent"],["cacheModal",""],[3,"scriptName","scriptId","deletionPendingEvent"],["deletionModal",""],[3,"ngValue","innerText"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0),e._uU(1,"Script"),e.qZA(),e.TgZ(2,"div",1)(3,"div",2)(4,"label",3),e._uU(5,"Seleziona lo script da amministrare:"),e.qZA(),e.TgZ(6,"select",4),e.NdJ("ngModelChange",function(c){return t.selectedScriptId=c}),e._UZ(7,"option",5),e.YNc(8,B,1,2,"option",6),e.qZA()(),e.TgZ(9,"div",7)(10,"button",8),e.NdJ("click",function(){return t.openCacheModal()}),e.qZA(),e._UZ(11,"a",9),e.TgZ(12,"button",10),e.NdJ("click",function(){return t.openDeletionModal()}),e.qZA()()(),e.TgZ(13,"app-script-dev-cache",11,12),e.NdJ("cachePendingEvent",function(c){return t.setPendingRequest(c)}),e.qZA(),e.TgZ(15,"app-script-dev-deletion",13,14),e.NdJ("deletionPendingEvent",function(c){return t.setPendingRequest(c)}),e.qZA()),2&n&&(e.xp6(6),e.Q6J("disabled",0===t.scriptList.length)("ngModel",t.selectedScriptId),e.xp6(),e.Q6J("ngValue",void 0),e.xp6(),e.Q6J("ngForOf",t.scriptList),e.xp6(2),e.Q6J("disabled",!t.selectedScriptId||t.pendingRequest)("innerText","Cache"),e.xp6(),e.Q6J("ngClass",e.VKq(15,x,!t.selectedScriptId))("innerText","Impostazioni")("routerLink",e.WLB(17,Y,t.scriptSettingsPath,t.selectedScriptId)),e.xp6(),e.Q6J("disabled",!t.selectedScriptId||t.pendingRequest)("innerText","Cancella"),e.xp6(),e.Q6J("scriptId",t.cacheScriptId)("scriptName",t.cacheScriptId?t.findScriptName(t.cacheScriptId):""),e.xp6(2),e.Q6J("scriptName",t.deletionScriptId?t.findScriptName(t.deletionScriptId):"")("scriptId",t.deletionScriptId))},dependencies:[p.mk,p.sg,u.YN,u.Kr,u.EJ,u.JJ,u.On,y.rH,N.s,G.F]}),a})(),H=(()=>{var o;class a{}return(o=a).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:4,vars:0,consts:[["pageTitle","Pannello di amministrazione"],[1,"d-grid","page-container"],["app-admin-panel-graphql",""],["app-admin-panel-script",""]],template:function(n,t){1&n&&(e._UZ(0,"app-breadcrumb",0),e.TgZ(1,"div",1),e._UZ(2,"div",2)(3,"div",3),e.qZA())},dependencies:[T.L,U,$],styles:[".page-container[_ngcontent-%COMP%]{gap:1rem}@media (min-width: 960px){.page-container[_ngcontent-%COMP%]{gap:1.5rem}}@media (min-width: 1500px){.page-container[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}"]}),a})();var V=i(9090),z=i(1049),D=i(1568),K=i(9537),W=i(232);const X=[{path:"",component:H}];let w=(()=>{var o;class a{}return(o=a).\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[V.w,b.Iq,p.ez,z.I,D.b,u.u5,y.Bz.forChild(X),K.U,W.a]}),a})()},8418:(M,C,i)=>{i.d(C,{K:()=>P});var e=i(5861),T=i(1410),m=i(7755),s=i(9212);let P=(()=>{var v;class f extends m.KD{constructor(g,p,d){super(g,d),this.graphqlService=g,this.globalsService=p,this.requestsService=d,this.searchByNameCache={}}searchUserByName(g,p){var d=this;return(0,e.Z)(function*(){var b;p||(p=(0,m.vV)((null===(b=d.globalsService.credentials)||void 0===b?void 0:b.site.domain)||m.ig.FORUMFREE));const A="".concat(p).concat(g);if((0,m.o8)(d.searchByNameCache,A))return d.searchByNameCache[A];const E=yield d.graphqlService.query({query:"\nquery UserSearchByName($name: String!, $cid: String) {\n    userSearchByName(name: $name, cid: $cid) {\n        uid\n        nickname\n        avatar\n    }\n}",variables:{name:g,cid:p}});return d.searchByNameCache[A]=E.data.userSearchByName})()}}return(v=f).\u0275fac=function(g){return new(g||v)(s.LFG(m.Jk),s.LFG(T.d),s.LFG(m.r8))},v.\u0275prov=s.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),f})()}}]);
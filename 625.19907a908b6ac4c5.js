"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[625],{3285:(x,L,l)=>{l.d(L,{L:()=>k});var i=l(7165),n=l(5879);let T=(()=>{var c;class g{constructor(){this.dependences={[i.B2.LOGIN]:null,[i.B2.HOME]:null,[i.B2.SETTINGS]:i.B2.HOME,[i.B2.SCRIPT]:i.B2.HOME,[i.B2.SCRIPT_FORUM]:i.B2.SCRIPT,[i.B2.SCRIPT_USER]:i.B2.SCRIPT,[i.B2.SCRIPT_SETTINGS]:[i.B2.SCRIPT_USER,i.B2.SCRIPT_FORUM],[i.B2.SCRIPT_SANDBOX]:[i.B2.SCRIPT_USER,i.B2.SCRIPT_FORUM],[i.B2.SCRIPT_DEV]:i.B2.SCRIPT,[i.B2.SCRIPT_DEV_SETTINGS]:i.B2.SCRIPT_DEV,[i.B2.UPLOAD]:i.B2.HOME,[i.B2.ADMIN]:i.B2.HOME,[i.B2.STATS]:i.B2.HOME,[i.B2.STATS_UPLOAD]:i.B2.STATS},this.names={[i.B2.LOGIN]:"Login",[i.B2.HOME]:"Home",[i.B2.SETTINGS]:"Notifiche",[i.B2.SCRIPT]:"Script",[i.B2.SCRIPT_FORUM]:"Forum",[i.B2.SCRIPT_USER]:"Utenti",[i.B2.SCRIPT_SETTINGS]:"Impostazioni",[i.B2.SCRIPT_SANDBOX]:"Altro",[i.B2.SCRIPT_DEV]:"Sviluppo",[i.B2.SCRIPT_DEV_SETTINGS]:"Impostazioni",[i.B2.UPLOAD]:"Upload",[i.B2.ADMIN]:"Amministrazione",[i.B2.STATS]:"Statistiche",[i.B2.STATS_UPLOAD]:"Upload"}}createPathList(h,I=[]){const F=(C,t)=>{C.unshift({name:this.names[t]||"",path:t})},A=C=>this.dependences.hasOwnProperty(C)?this.dependences[C]instanceof Array?this.dependences[C].includes(I[0])?I.shift():this.dependences[C][0]:this.dependences[C]:null;let U=[{name:this.names[h]||"",path:""}],v=A(h);for(;v;)F(U,v),v=A(v);return U}}return(c=g).\u0275fac=function(h){return new(h||c)},c.\u0275prov=n.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),g})();var B=l(8109),m=l(6814);function p(c,g){if(1&c&&n._UZ(0,"a",8),2&c){const S=n.oxw().$implicit;n.Q6J("routerLink",S.path)("innerText",S.name)}}function O(c,g){if(1&c&&n._UZ(0,"span",9),2&c){const S=n.oxw().$implicit;n.Q6J("innerText",S.name)}}const R=function(c){return{active:c}};function D(c,g){if(1&c&&(n.TgZ(0,"li",5),n.YNc(1,p,1,2,"a",6),n.YNc(2,O,1,1,"ng-template",null,7,n.W1O),n.qZA()),2&c){const S=g.last,h=n.MAs(3);n.Q6J("ngClass",n.VKq(4,R,S)),n.uIk("aria-current",S?"page":null),n.xp6(1),n.Q6J("ngIf",!S)("ngIfElse",h)}}const y=function(c){return{"hide-nav":c}},E=function(c){return{"d-none d-md-block":c}};let k=(()=>{var c;class g{constructor(h,I){this.breadcrumbService=h,this.router=I,this.pageTitle="",this.url="",this.nodes=[],this.hideNavOnSmallScreen=!1,this.breadcrumbs=[]}ngOnInit(){this.url||(this.url=this.router.url),this.breadcrumbs=this.breadcrumbService.createPathList(this.url,this.nodes)}}return(c=g).\u0275fac=function(h){return new(h||c)(n.Y36(T),n.Y36(B.F0))},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-breadcrumb"]],inputs:{pageTitle:"pageTitle",url:"url",nodes:"nodes",hideNavOnSmallScreen:"hideNavOnSmallScreen"},decls:5,vars:8,consts:[[1,"container-fluid","px-md-1","d-flex","flex-column","flex-md-row","align-items-md-center",3,"ngClass"],[1,"h3","fw-light","mb-0","lh-1","fv-small-caps","pb-1",3,"innerText"],["aria-label","breadcrumb",1,"ms-md-auto","mt-1","flex-shrink-0",3,"ngClass"],[1,"breadcrumb","mb-0","justify-content-md-end"],["class","breadcrumb-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"breadcrumb-item",3,"ngClass"],[3,"routerLink","innerText",4,"ngIf","ngIfElse"],["lastItem",""],[3,"routerLink","innerText"],[3,"innerText"]],template:function(h,I){1&h&&(n.TgZ(0,"div",0),n._UZ(1,"h2",1),n.TgZ(2,"nav",2)(3,"ol",3),n.YNc(4,D,4,6,"li",4),n.qZA()()()),2&h&&(n.Q6J("ngClass",n.VKq(4,y,I.hideNavOnSmallScreen)),n.xp6(1),n.Q6J("innerText",I.pageTitle),n.xp6(1),n.Q6J("ngClass",n.VKq(6,E,I.hideNavOnSmallScreen)),n.xp6(2),n.Q6J("ngForOf",I.breadcrumbs))},dependencies:[m.mk,m.sg,m.O5,B.rH],styles:[".container-fluid[_ngcontent-%COMP%]:not(.hide-nav){margin-bottom:.75rem}.container-fluid.hide-nav[_ngcontent-%COMP%]{margin-bottom:.5rem}@media (min-width: 768px){.container-fluid.hide-nav[_ngcontent-%COMP%]{margin-bottom:.75rem}}@media (min-width: 960px){.container-fluid[_ngcontent-%COMP%]{margin-top:.5rem}}"]}),g})()},9090:(x,L,l)=>{l.d(L,{w:()=>B});var i=l(6814),n=l(8109),T=l(5879);let B=(()=>{var m;class p{}return(m=p).\u0275fac=function(R){return new(R||m)},m.\u0275mod=T.oAB({type:m}),m.\u0275inj=T.cJS({imports:[i.ez,n.Bz]}),p})()},3040:(x,L,l)=>{l.d(L,{HF:()=>p,Ry:()=>m,in:()=>O,m:()=>n,n8:()=>T,t6:()=>R,uD:()=>i,xt:()=>B});const i="\nquery FullScript($id: String!, $type: ScriptTargetTypeEnum!) {\n    scriptList {\n        scriptId\n        type\n        author\n        name\n        description\n        faqLink\n        preview\n        publisher\n        source\n        sourceBeta\n        position\n        sandboxes {\n            name\n            slug\n            value\n            inSettings\n        }\n        packages\n        dependencies\n        settingsSchema\n        settingsDefault\n        html\n        hidden\n        cpQuirks\n        cpStandard\n        cpMobile\n        webhook\n        webhookCallOnSettings\n        webhookCallOnManage\n    }\n    scriptSettings(targetId: $id, targetType: $type) {\n        scriptId,\n        settings,\n    }\n    scriptInstalledList(targetId: $id, targetType: $type)\n    scriptRankedList {\n        scriptId\n        scriptRank\n    }\n    scriptPermissions {\n        scriptId\n        manage\n        edit\n    }\n}",n="\nquery Script($id: String!, $type: ScriptTargetTypeEnum!) {\n    scriptSettings(targetId: $id, targetType: $type) {\n        scriptId,\n        settings,\n    }\n    scriptInstalledList(targetId: $id, targetType: $type)\n}",T="\nquery ScriptStats {\n    scriptStats {\n        scriptId\n        entities {\n            targetId\n            targetType\n        }\n    }\n}",B="\nmutation DelCache($scriptId: String!) {\n    delCache(scriptId: $scriptId)\n}",m="\nmutation ScriptUpsert($scriptId: String, $type: String, $name: String, $description: String, $faqLink: String, $preview: String, $publisher: String, $source: String, $sourceBeta: String, $sandboxes: [JSSandboxInput!], $position: String, $packages: [String], $dependencies: [String], $settingsSchema: String, $settingsDefault: String, $html: String, $hidden: Boolean, $cpQuirks: Boolean, $cpStandard: Boolean, $cpMobile: Boolean, $webhook: String, $webhookCallOnSettings: Boolean, $whManage: Boolean) {\n    scriptUpsert(scriptId: $scriptId, type: $type, name: $name, description: $description, faqLink: $faqLink, preview: $preview, publisher: $publisher, source: $source, sourceBeta: $sourceBeta, sandboxes: $sandboxes, position: $position, packages: $packages, dependencies: $dependencies, settingsSchema: $settingsSchema, settingsDefault: $settingsDefault, html: $html, hidden: $hidden, cpQuirks: $cpQuirks, cpStandard: $cpStandard, cpMobile: $cpMobile, webhook: $webhook, webhookCallOnSettings: $webhookCallOnSettings, whManage: $whManage)\n}",p="\nmutation DelScript($scriptId: String!) {\n    delScript(scriptId: $scriptId)\n}",O="\nmutation ScriptManage(\n    $targetId: String!,\n    $targetType: ScriptTargetTypeEnum!,\n    $scriptId: String!,\n    $action: ScriptManageActionEnum!\n) {\n    scriptManage(\n        targetId: $targetId,\n        targetType: $targetType,\n        scriptId: $scriptId,\n        action: $action\n    )\n}",R="\nmutation ScriptSettings(\n    $targetId: String!,\n    $targetType: ScriptTargetTypeEnum!,\n    $scriptId: String!,\n    $settings: String!\n) {\n    scriptSettings(\n        targetId: $targetId,\n        targetType: $targetType,\n        scriptId: $scriptId,\n        settings: $settings\n    )\n}"},6245:(x,L,l)=>{l.d(L,{o:()=>C});var i=l(5861),n=l(1410),T=l(5202),B=l(8645),m=l(8372),p=l(3729),O=l(7165),R=l(463),D=l(3040),y=l(4064);const E=/^whitelist\[([^\]]*)]/i;function g(t){const d=t.match(E);let u=[],e=[];if(d){const r=d[1].toLowerCase().split(",");u=r.reduce((a,s)=>{const o=s.match(/^(ff|fc|bf)u(\d+)/);return o&&a.push(o[1]+o[2]),a},[]),e=r.filter(a=>/^(ff|fc|bf)\d+/.test(a))}return{users:u,forums:e}}function S(t){return t.replace(E,"").trim()}function h(t,d,u,e,r,a=[],s){const o={};return{list:t.reduce((b,P)=>{const M=[...new Set([...F(d,P.id,u),...a])];return(e||u===P.author.ffuid)&&M.push(p.Af.DEV),!M.includes(p.Af.DEV)&&function I(t,d,u){return!!t.privacy.hidden&&(u===p.D7.USER&&!t.privacy.allowed.users.includes(d)||u===p.D7.FORUM&&!t.privacy.allowed.forums.includes(d))}(P,r.id,r.type)||0===M.length||s&&!s.every(N=>M.includes(N))||(o[P.id]=M,b.push(P)),b},[]),permissions:o}}function F(t,d,u){const e=t.find(r=>r.scriptId===d);return e?[...A(u,e)?[p.Af.EDIT]:[],...U(u,e)?[p.Af.MANAGE]:[]]:[]}function A(t,d){return d.edit.includes(t)}function U(t,d){return d.manage.includes(t)}var v=l(5879);let C=(()=>{var t;class d{constructor(e,r,a,s){this.graphqlService=e,this.globalsService=r,this.profileService=a,this.preferencesService=s,this.installedScript={cacheKey:"",list:[]},this.ffuid="",this.lastRequestTime=0,this.scriptCache={},this.scriptFilteredByPermissionsCache={},this.listInputsSubject=new B.x,this.profileSubscription=this.globalsService.profileObservable.subscribe(o=>{this.ffuid=(null==o?void 0:o.user.ffuid)||""})}createCacheKey(e,r){return e+r+this.ffuid}isCurrentUserAdmin(){return this.profileService.hasAtLeastOnePermission([T.vX.ADMIN])}isCurrentUserForumAdmin(e){return!(!this.globalsService.forum||this.globalsService.forum.cid!==e||!this.globalsService.forum.admin)}getData(e,r=p.D7.FORUM,a=!0){var s=this;return(0,i.Z)(function*(){const o=s.createCacheKey(e,r),$=Date.now()-s.lastRequestTime>18e5;if(s.installedScript={cacheKey:o,list:[]},!$){if(!a)return{list:s.scriptList,settings:{},permissions:{}};if(s.scriptCache.hasOwnProperty(o))return s.installedScript.list=s.scriptCache[o].installedList,s.scriptCache[o]}let b,P=[];if($){s.clearCache(),s.lastRequestTime=Date.now();const f=yield s.graphqlService.query({query:D.uD,variables:{id:e,type:r}});s.scriptList=function k(t,d){const u={},e=t.map(r=>{const a=function c(t,d,u){var e;return{author:y.$m[t.author]||y.$m.ff7482873,dependencies:{parents:t.dependencies.reduce((r,a)=>{const s=d.find(o=>o.scriptId===a);return s&&r.push({id:s.scriptId,name:S(s.name)}),r},[]),children:[]},description:t.description,docs:{link:t.faqLink},html:t.html,id:t.scriptId,layouts:{quirks:t.cpQuirks,standard:t.cpStandard,mobile:t.cpMobile},name:S(t.name),packages:t.packages,position:t.position,preview:t.preview,privacy:{hidden:t.hidden,allowed:g(t.name)},publisher:y.yT[t.publisher]||y.yT[p.tr.OTHER],rank:(null===(e=u.find(r=>r.scriptId===t.scriptId))||void 0===e?void 0:e.scriptRank)||999,sandboxes:t.sandboxes,settings:{default:t.settingsDefault,schema:"{}"!==t.settingsSchema?t.settingsSchema:void 0},sources:{prod:t.source,beta:t.sourceBeta},type:t.type,webhook:{source:t.webhook,calls:{onManage:t.webhookCallOnManage,onSettings:t.webhookCallOnSettings}}}}(r,t,d);for(const s of Object.keys(a.dependencies.parents))u.hasOwnProperty(s)||(u[s]=[]),u[s].push({id:a.id,name:a.name});return a});for(const[r,a]of Object.entries(u)){const s=e.find(o=>o.id===r);s&&(s.dependencies.children=a)}return e}(f.data.scriptList,f.data.scriptRankedList),s.scriptPermissions=f.data.scriptPermissions,b=f.data}else b=(yield s.graphqlService.query({query:D.m,variables:{id:e,type:r}})).data;if(!a)return{list:s.scriptList,settings:{},permissions:{}};s.installedScript.list=b.scriptInstalledList.filter(f=>s.scriptList.findIndex(w=>w.id===f)>-1),P=b.scriptSettings;const M=r===p.D7.FORUM?p.AV.FORUM:p.AV.USER,N=r===p.D7.FORUM&&s.isCurrentUserForumAdmin(e)||r===p.D7.USER&&e===s.ffuid?[p.Af.EDIT,p.Af.MANAGE]:[],_=h(s.scriptList.filter(f=>f.type===M||f.type===p.AV.ALL),s.scriptPermissions,s.ffuid,s.isCurrentUserAdmin(),{id:e,type:r},N);return s.scriptCache[o]={list:_.list,installedList:s.installedScript.list,settings:P.reduce((f,w)=>(f[w.scriptId]=w.settings,f),{}),permissions:_.permissions},s.scriptCache[o]})()}splitTabs(e){const r={};for(const a of e)r.hasOwnProperty(a.publisher.id)?r[a.publisher.id].push(a):r[a.publisher.id]=[a];return r}getListInputsObservable(){return this.listInputsSubject.asObservable()}pushListInputs(e){this.listInputsSubject.next(e),this.listInputs=e}get listInputs(){return this.listInputsData}set listInputs(e){this.listInputsData=e}updateInstalledScriptList(e,r){if(r)this.installedScript.list.push(e);else{const a=this.installedScript.list.indexOf(e);a>-1&&this.installedScript.list.splice(a,1)}this.scriptCache[this.installedScript.cacheKey].installedList=this.installedScript.list}get installedList(){return this.installedScript.list}getSingleScriptData(e,r,a){var s=this;return(0,i.Z)(function*(){const o=yield s.getData(r,a),$=o.list.find(b=>b.id===e);if($)return{script:$,installed:s.installedList.includes($.id),settings:o.settings[$.id],permissions:o.permissions[$.id]}})()}updateInstalledScriptSettings(e,r,a,s){const o=this.createCacheKey(e,r);this.scriptCache[o]&&(this.scriptCache[o].settings[a]=s)}getScriptsByPermissions(e){var r=this;return(0,i.Z)(function*(){const a=`${r.ffuid}:${e.join("-")}`;if(r.scriptFilteredByPermissionsCache.hasOwnProperty(a))return r.scriptFilteredByPermissionsCache[a];const s=(yield r.getData(r.ffuid,p.D7.USER,!1)).list;return r.scriptFilteredByPermissionsCache[a]=h(s,r.scriptPermissions,r.ffuid,r.isCurrentUserAdmin(),{id:r.ffuid,type:p.D7.USER},[],e)})()}clearCache(){this.lastRequestTime=0,this.scriptList=void 0,this.scriptPermissions=void 0,this.scriptCache={},this.scriptFilteredByPermissionsCache={}}getAllScripts(){var e=this;return(0,i.Z)(function*(){return(yield e.getData(e.ffuid,p.D7.USER,!1)).list})()}get settingsOptions(){return this.preferencesService.getItem(O.Ye.SCRIPT_SETTINGS_OPTIONS)||y.iK}set settingsOptions(e){this.preferencesService.setItem(O.Ye.SCRIPT_SETTINGS_OPTIONS,e)}ngOnDestroy(){this.profileSubscription.unsubscribe()}}return(t=d).\u0275fac=function(e){return new(e||t)(v.LFG(T.Jk),v.LFG(n.d),v.LFG(m.H),v.LFG(R.y))},t.\u0275prov=v.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),d})()}}]);
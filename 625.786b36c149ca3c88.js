"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[625],{3285:(w,P,p)=>{p.d(P,{L:()=>k});var i=p(7165),r=p(5879);let C=(()=>{var l;class g{constructor(){this.dependences={[i.B2.LOGIN]:null,[i.B2.HOME]:null,[i.B2.SETTINGS]:i.B2.HOME,[i.B2.SCRIPT]:i.B2.HOME,[i.B2.SCRIPT_FORUM]:i.B2.SCRIPT,[i.B2.SCRIPT_USER]:i.B2.SCRIPT,[i.B2.SCRIPT_SETTINGS]:[i.B2.SCRIPT_USER,i.B2.SCRIPT_FORUM],[i.B2.SCRIPT_SANDBOX]:[i.B2.SCRIPT_USER,i.B2.SCRIPT_FORUM],[i.B2.SCRIPT_DEV]:i.B2.SCRIPT,[i.B2.SCRIPT_DEV_SETTINGS]:i.B2.SCRIPT_DEV,[i.B2.UPLOAD]:i.B2.HOME,[i.B2.ADMIN]:i.B2.HOME,[i.B2.STATS]:i.B2.HOME,[i.B2.STATS_UPLOAD]:i.B2.STATS},this.names={[i.B2.LOGIN]:"Login",[i.B2.HOME]:"Home",[i.B2.SETTINGS]:"Notifiche",[i.B2.SCRIPT]:"Script",[i.B2.SCRIPT_FORUM]:"Forum",[i.B2.SCRIPT_USER]:"Utenti",[i.B2.SCRIPT_SETTINGS]:"Impostazioni",[i.B2.SCRIPT_SANDBOX]:"Altro",[i.B2.SCRIPT_DEV]:"Sviluppo",[i.B2.SCRIPT_DEV_SETTINGS]:"Impostazioni",[i.B2.UPLOAD]:"Upload",[i.B2.ADMIN]:"Amministrazione",[i.B2.STATS]:"Statistiche",[i.B2.STATS_UPLOAD]:"Upload"}}createPathList(h,I=[]){const x=($,t)=>{$.unshift({name:this.names[t]||"",path:t})},M=$=>this.dependences.hasOwnProperty($)?this.dependences[$]instanceof Array?this.dependences[$].includes(I[0])?I.shift():this.dependences[$][0]:this.dependences[$]:null;let E=[{name:this.names[h]||"",path:""}],b=M(h);for(;b;)x(E,b),b=M(b);return E}}return(l=g).\u0275fac=function(h){return new(h||l)},l.\u0275prov=r.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),g})();var B=p(2655),o=p(6814);function T(l,g){if(1&l&&r._UZ(0,"a",8),2&l){const S=r.oxw().$implicit;r.Q6J("routerLink",S.path)("innerText",S.name)}}function L(l,g){if(1&l&&r._UZ(0,"span",9),2&l){const S=r.oxw().$implicit;r.Q6J("innerText",S.name)}}const O=function(l){return{active:l}};function R(l,g){if(1&l&&(r.TgZ(0,"li",5),r.YNc(1,T,1,2,"a",6),r.YNc(2,L,1,1,"ng-template",null,7,r.W1O),r.qZA()),2&l){const S=g.last,h=r.MAs(3);r.Q6J("ngClass",r.VKq(4,O,S)),r.uIk("aria-current",S?"page":null),r.xp6(1),r.Q6J("ngIf",!S)("ngIfElse",h)}}const y=function(l){return{"hide-nav":l}},U=function(l){return{"d-none d-md-block":l}};let k=(()=>{var l;class g{constructor(h,I){this.breadcrumbService=h,this.router=I,this.pageTitle="",this.url="",this.nodes=[],this.hideNavOnSmallScreen=!1,this.breadcrumbs=[]}ngOnInit(){this.url||(this.url=this.router.url),this.breadcrumbs=this.breadcrumbService.createPathList(this.url,this.nodes)}}return(l=g).\u0275fac=function(h){return new(h||l)(r.Y36(C),r.Y36(B.F0))},l.\u0275cmp=r.Xpm({type:l,selectors:[["app-breadcrumb"]],inputs:{pageTitle:"pageTitle",url:"url",nodes:"nodes",hideNavOnSmallScreen:"hideNavOnSmallScreen"},decls:5,vars:8,consts:[[1,"container-fluid","px-md-1","d-flex","flex-column","flex-md-row","align-items-md-center",3,"ngClass"],[1,"h3","fw-light","mb-0","lh-1","fv-small-caps","pb-1",3,"innerText"],["aria-label","breadcrumb",1,"ms-md-auto","mt-1","flex-shrink-0",3,"ngClass"],[1,"breadcrumb","mb-0","justify-content-md-end"],["class","breadcrumb-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"breadcrumb-item",3,"ngClass"],[3,"routerLink","innerText",4,"ngIf","ngIfElse"],["lastItem",""],[3,"routerLink","innerText"],[3,"innerText"]],template:function(h,I){1&h&&(r.TgZ(0,"div",0),r._UZ(1,"h2",1),r.TgZ(2,"nav",2)(3,"ol",3),r.YNc(4,R,4,6,"li",4),r.qZA()()()),2&h&&(r.Q6J("ngClass",r.VKq(4,y,I.hideNavOnSmallScreen)),r.xp6(1),r.Q6J("innerText",I.pageTitle),r.xp6(1),r.Q6J("ngClass",r.VKq(6,U,I.hideNavOnSmallScreen)),r.xp6(2),r.Q6J("ngForOf",I.breadcrumbs))},dependencies:[o.mk,o.sg,o.O5,B.rH],styles:[".container-fluid[_ngcontent-%COMP%]:not(.hide-nav){margin-bottom:.75rem}.container-fluid.hide-nav[_ngcontent-%COMP%]{margin-bottom:.5rem}@media (min-width: 768px){.container-fluid.hide-nav[_ngcontent-%COMP%]{margin-bottom:.75rem}}@media (min-width: 960px){.container-fluid[_ngcontent-%COMP%]{margin-top:.5rem}}"]}),g})()},9090:(w,P,p)=>{p.d(P,{w:()=>B});var i=p(6814),r=p(2655),C=p(5879);let B=(()=>{var o;class T{}return(o=T).\u0275fac=function(O){return new(O||o)},o.\u0275mod=C.oAB({type:o}),o.\u0275inj=C.cJS({imports:[i.ez,r.Bz]}),T})()},3040:(w,P,p)=>{p.d(P,{HF:()=>T,Ry:()=>o,in:()=>L,m:()=>r,n8:()=>C,t6:()=>O,uD:()=>i,xt:()=>B});const i="\nquery FullScript($id: String!, $type: ScriptTargetTypeEnum!) {\n    scriptList {\n        scriptId\n        type\n        author\n        name\n        description\n        faqLink\n        preview\n        publisher\n        source\n        sourceBeta\n        position\n        sandboxes {\n            name\n            slug\n            value\n            inSettings\n        }\n        packages\n        dependencies\n        settingsSchema\n        settingsDefault\n        html\n        hidden\n        cpQuirks\n        cpStandard\n        cpMobile\n        webhook\n        webhookCallOnSettings\n        webhookCallOnManage\n    }\n    scriptSettings(targetId: $id, targetType: $type) {\n        scriptId,\n        settings,\n    }\n    scriptInstalledList(targetId: $id, targetType: $type)\n    scriptRankedList {\n        scriptId\n        scriptRank\n    }\n    scriptPermissions {\n        scriptId\n        manage\n        edit\n        settings\n    }\n}",r="\nquery Script($id: String!, $type: ScriptTargetTypeEnum!) {\n    scriptSettings(targetId: $id, targetType: $type) {\n        scriptId,\n        settings,\n    }\n    scriptInstalledList(targetId: $id, targetType: $type)\n}",C="\nquery ScriptStats {\n    scriptStats {\n        scriptId\n        entities {\n            targetId\n            targetType\n        }\n    }\n}",B="\nmutation DelCache($scriptId: String!) {\n    delCache(scriptId: $scriptId)\n}",o="\nmutation ScriptUpsert($scriptId: String, $type: String, $name: String, $description: String, $faqLink: String, $preview: String, $publisher: String, $source: String, $sourceBeta: String, $sandboxes: [JSSandboxInput!], $position: String, $packages: [String], $dependencies: [String], $settingsSchema: String, $settingsDefault: String, $html: String, $hidden: Boolean, $cpQuirks: Boolean, $cpStandard: Boolean, $cpMobile: Boolean, $webhook: String, $webhookCallOnSettings: Boolean, $whManage: Boolean) {\n    scriptUpsert(scriptId: $scriptId, type: $type, name: $name, description: $description, faqLink: $faqLink, preview: $preview, publisher: $publisher, source: $source, sourceBeta: $sourceBeta, sandboxes: $sandboxes, position: $position, packages: $packages, dependencies: $dependencies, settingsSchema: $settingsSchema, settingsDefault: $settingsDefault, html: $html, hidden: $hidden, cpQuirks: $cpQuirks, cpStandard: $cpStandard, cpMobile: $cpMobile, webhook: $webhook, webhookCallOnSettings: $webhookCallOnSettings, whManage: $whManage)\n}",T="\nmutation DelScript($scriptId: String!) {\n    delScript(scriptId: $scriptId)\n}",L="\nmutation ScriptManage(\n    $targetId: String!,\n    $targetType: ScriptTargetTypeEnum!,\n    $scriptId: String!,\n    $action: ScriptManageActionEnum!\n) {\n    scriptManage(\n        targetId: $targetId,\n        targetType: $targetType,\n        scriptId: $scriptId,\n        action: $action\n    )\n}",O="\nmutation ScriptSettings(\n    $targetId: String!,\n    $targetType: ScriptTargetTypeEnum!,\n    $scriptId: String!,\n    $settings: String!\n) {\n    scriptSettings(\n        targetId: $targetId,\n        targetType: $targetType,\n        scriptId: $scriptId,\n        settings: $settings\n    )\n}"},6245:(w,P,p)=>{p.d(P,{o:()=>$});var i=p(5861),r=p(1410),C=p(3912),B=p(8645),o=p(3729),T=p(7165),L=p(463),O=p(3040),R=p(4064);const y=/^whitelist\[([^\]]*)]/i;function l(t){const d=t.match(y);let m=[],e=[];if(d){const n=d[1].toLowerCase().split(",");m=n.reduce((a,s)=>{const c=s.match(/^(ff|fc|bf)u(\d+)/);return c&&a.push(c[1]+c[2]),a},[]),e=n.filter(a=>/^(ff|fc|bf)\d+/.test(a))}return{users:m,forums:e}}function g(t){return t.replace(y,"").trim()}function S(t,d,m,e=[],n){const a={};return{list:t.reduce((c,u)=>{const v=[...new Set([...I(u.permissions,d),...e])];return!v.includes(o.Af.EDIT)&&function h(t,d,m){return!!t.privacy.hidden&&(m===o.D7.USER&&!t.privacy.allowed.users.includes(d)||m===o.D7.FORUM&&!t.privacy.allowed.forums.includes(d))}(u,m.id,m.type)||0===v.length||n&&!n.every(D=>v.includes(D))||(a[u.id]=v,c.push(u)),c},[]),permissions:a}}function I(t,d){return[...E(d,t)?[o.Af.SETTINGS]:[],...x(d,t)?[o.Af.EDIT]:[],...M(d,t)?[o.Af.MANAGE]:[]]}function x(t,d){return d.edit.includes(t)}function M(t,d){return d.manage.includes(t)}function E(t,d){return d.settings.includes(t)}var b=p(5879);let $=(()=>{var t;class d{constructor(e,n,a){this.graphqlService=e,this.globalsService=n,this.preferencesService=a,this.installedScript={cacheKey:"",list:[]},this.ffuid="",this.lastRequestTime=0,this.scriptCache={},this.scriptFilteredByPermissionsCache={},this.listInputsSubject=new B.x,this.profileSubscription=this.globalsService.profileObservable.subscribe(s=>{this.ffuid=(null==s?void 0:s.user.ffuid)||""})}createCacheKey(e,n){return e+n+this.ffuid}isCurrentUserForumAdmin(e){return!(!this.globalsService.forum||this.globalsService.forum.cid!==e||!this.globalsService.forum.admin)}getData(e,n=o.D7.FORUM,a=!0){var s=this;return(0,i.Z)(function*(){const c=s.createCacheKey(e,n),u=Date.now()-s.lastRequestTime>18e5;if(s.installedScript={cacheKey:c,list:[]},!u){if(!a)return{list:s.scriptList,settings:{},permissions:{}};if(s.scriptCache.hasOwnProperty(c))return s.installedScript.list=s.scriptCache[c].installedList,s.scriptCache[c]}let v,D=[];if(u){s.clearCache(),s.lastRequestTime=Date.now();const f=yield s.graphqlService.query({query:O.uD,variables:{id:e,type:n}});s.scriptList=function U(t,d,m){const e={},n=t.map(a=>{const s=function k(t,d,m,e){var n;return{author:R.$m[t.author]||R.$m.ff7482873,dependencies:{parents:t.dependencies.reduce((a,s)=>{const c=d.find(u=>u.scriptId===s);return c&&a.push({id:c.scriptId,name:g(c.name)}),a},[]),children:[]},description:t.description,docs:{link:t.faqLink},html:t.html,id:t.scriptId,layouts:{quirks:t.cpQuirks,standard:t.cpStandard,mobile:t.cpMobile},name:g(t.name),packages:t.packages,permissions:{manage:(null==e?void 0:e.manage)||[],edit:(null==e?void 0:e.edit)||[],settings:(null==e?void 0:e.settings)||[]},preview:t.preview,privacy:{hidden:t.hidden,allowed:l(t.name)},publisher:R.yT[t.publisher]||R.yT[o.tr.OTHER],rank:(null===(n=m.find(a=>a.scriptId===t.scriptId))||void 0===n?void 0:n.scriptRank)||999,sandboxes:t.sandboxes,settings:{default:t.settingsDefault,schema:"{}"!==t.settingsSchema?t.settingsSchema:void 0},sources:{prod:t.source,beta:t.sourceBeta,position:t.position},type:t.type,webhook:{source:t.webhook,calls:{onManage:t.webhookCallOnManage,onSettings:t.webhookCallOnSettings}}}}(a,t,d,m.find(c=>c.scriptId===a.scriptId));for(const c of Object.keys(s.dependencies.parents))e.hasOwnProperty(c)||(e[c]=[]),e[c].push({id:s.id,name:s.name});return s});for(const[a,s]of Object.entries(e)){const c=n.find(u=>u.id===a);c&&(c.dependencies.children=s)}return n}(f.data.scriptList,f.data.scriptRankedList,f.data.scriptPermissions),v=f.data}else v=(yield s.graphqlService.query({query:O.m,variables:{id:e,type:n}})).data;if(!a)return{list:s.scriptList,settings:{},permissions:{}};s.installedScript.list=v.scriptInstalledList.filter(f=>s.scriptList.findIndex(A=>A.id===f)>-1),D=v.scriptSettings;const F=n===o.D7.FORUM?o.AV.FORUM:o.AV.USER,N=n===o.D7.FORUM&&s.isCurrentUserForumAdmin(e)||n===o.D7.USER&&e===s.ffuid?[o.Af.SETTINGS,o.Af.MANAGE]:[],_=S(s.scriptList.filter(f=>f.type===F||f.type===o.AV.ALL),s.ffuid,{id:e,type:n},N);return s.scriptCache[c]={list:_.list,installedList:s.installedScript.list,settings:D.reduce((f,A)=>(f[A.scriptId]=A.settings,f),{}),permissions:_.permissions},s.scriptCache[c]})()}splitTabs(e){const n={};for(const a of e)n.hasOwnProperty(a.publisher.id)?n[a.publisher.id].push(a):n[a.publisher.id]=[a];return n}getListInputsObservable(){return this.listInputsSubject.asObservable()}pushListInputs(e){this.listInputsSubject.next(e),this.listInputs=e}get listInputs(){return this.listInputsData}set listInputs(e){this.listInputsData=e}updateInstalledScriptList(e,n){if(n)this.installedScript.list.push(e);else{const a=this.installedScript.list.indexOf(e);a>-1&&this.installedScript.list.splice(a,1)}this.scriptCache[this.installedScript.cacheKey].installedList=this.installedScript.list}get installedList(){return this.installedScript.list}getSingleScriptData(e,n,a){var s=this;return(0,i.Z)(function*(){const c=yield s.getData(n,a),u=c.list.find(v=>v.id===e);if(u)return{script:u,installed:s.installedList.includes(u.id),settings:c.settings[u.id],permissions:c.permissions[u.id]}})()}updateInstalledScriptSettings(e,n,a,s){const c=this.createCacheKey(e,n);this.scriptCache[c]&&(this.scriptCache[c].settings[a]=s)}getScriptsByPermissions(e){var n=this;return(0,i.Z)(function*(){const a=`${n.ffuid}:${e.join("-")}`;if(n.scriptFilteredByPermissionsCache.hasOwnProperty(a))return n.scriptFilteredByPermissionsCache[a];const s=(yield n.getData(n.ffuid,o.D7.USER,!1)).list;return n.scriptFilteredByPermissionsCache[a]=S(s,n.ffuid,{id:n.ffuid,type:o.D7.USER},[],e)})()}clearCache(){this.lastRequestTime=0,this.scriptList=void 0,this.scriptCache={},this.scriptFilteredByPermissionsCache={}}getAllScripts(){var e=this;return(0,i.Z)(function*(){return(yield e.getData(e.ffuid,o.D7.USER,!1)).list})()}get settingsOptions(){return this.preferencesService.getItem(T.Ye.SCRIPT_SETTINGS_OPTIONS)||R.iK}set settingsOptions(e){this.preferencesService.setItem(T.Ye.SCRIPT_SETTINGS_OPTIONS,e)}ngOnDestroy(){this.profileSubscription.unsubscribe()}}return(t=d).\u0275fac=function(e){return new(e||t)(b.LFG(C.Jk),b.LFG(r.d),b.LFG(L.y))},t.\u0275prov=b.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),d})()}}]);
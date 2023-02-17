"use strict";(self.webpackChunkboard=self.webpackChunkboard||[]).push([[993],{8621:(O,g,a)=>{a.d(g,{L:()=>R});var r=a(4650),n=a(5044);let o=(()=>{class d{constructor(){this.dependences={[n.B2.LOGIN]:null,[n.B2.HOME]:null,[n.B2.SETTINGS]:n.B2.HOME,[n.B2.SCRIPT]:n.B2.HOME,[n.B2.SCRIPT_FORUM]:n.B2.SCRIPT,[n.B2.SCRIPT_USER]:n.B2.SCRIPT,[n.B2.SCRIPT_SETTINGS]:[n.B2.SCRIPT_USER,n.B2.SCRIPT_FORUM],[n.B2.SCRIPT_DEV]:n.B2.SCRIPT,[n.B2.SCRIPT_DEV_SETTINGS]:n.B2.SCRIPT_DEV,[n.B2.UPLOAD]:n.B2.HOME,[n.B2.ADMIN]:n.B2.HOME},this.names={[n.B2.LOGIN]:"Login",[n.B2.HOME]:"Home",[n.B2.SETTINGS]:"Notifiche",[n.B2.SCRIPT]:"Script",[n.B2.SCRIPT_FORUM]:"Forum",[n.B2.SCRIPT_USER]:"Utenti",[n.B2.SCRIPT_SETTINGS]:"Impostazioni",[n.B2.SCRIPT_DEV]:"Sviluppo",[n.B2.SCRIPT_DEV_SETTINGS]:"Impostazioni",[n.B2.UPLOAD]:"Upload",[n.B2.ADMIN]:"Amministrazione"}}createPathList(p,_=[]){const t=(c,h)=>{c.unshift({name:this.names[h]||"",path:h})},s=c=>this.dependences.hasOwnProperty(c)?this.dependences[c]instanceof Array?this.dependences[c].includes(_[0])?_.shift():this.dependences[c][0]:this.dependences[c]:null;let i=[{name:this.names[p]||"",path:""}],e=s(p);for(;e;)t(i,e),e=s(e);return i}}return d.\u0275fac=function(p){return new(p||d)},d.\u0275prov=r.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})();var I=a(9631),u=a(6895);function L(d,S){if(1&d&&r._UZ(0,"a",8),2&d){const p=r.oxw().$implicit;r.Q6J("routerLink",p.path)("innerText",p.name)}}function l(d,S){if(1&d&&r._UZ(0,"span",9),2&d){const p=r.oxw().$implicit;r.Q6J("innerText",p.name)}}const T=function(d){return{active:d}};function D(d,S){if(1&d&&(r.TgZ(0,"li",5),r.YNc(1,L,1,2,"a",6),r.YNc(2,l,1,1,"ng-template",null,7,r.W1O),r.qZA()),2&d){const p=S.last,_=r.MAs(3);r.Q6J("ngClass",r.VKq(4,T,p)),r.uIk("aria-current",p?"page":null),r.xp6(1),r.Q6J("ngIf",!p)("ngIfElse",_)}}let R=(()=>{class d{constructor(p,_){this.breadcrumbService=p,this.router=_,this.pageTitle="",this.url="",this.nodes=[],this.breadcrumbs=[]}ngOnInit(){this.url||(this.url=this.router.url),this.breadcrumbs=this.breadcrumbService.createPathList(this.url,this.nodes)}}return d.\u0275fac=function(p){return new(p||d)(r.Y36(o),r.Y36(I.F0))},d.\u0275cmp=r.Xpm({type:d,selectors:[["app-breadcrumb"]],inputs:{pageTitle:"pageTitle",url:"url",nodes:"nodes"},decls:5,vars:2,consts:[[1,"container-fluid","xxl-screen","px-md-1","d-flex","flex-column","flex-md-row","align-items-md-center"],[1,"h3","fw-light","mb-0","lh-1","fv-small-caps","pb-1",3,"innerText"],["aria-label","breadcrumb",1,"ms-md-auto","mt-1"],[1,"breadcrumb","mb-0","justify-content-md-end"],["class","breadcrumb-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"breadcrumb-item",3,"ngClass"],[3,"routerLink","innerText",4,"ngIf","ngIfElse"],["lastItem",""],[3,"routerLink","innerText"],[3,"innerText"]],template:function(p,_){1&p&&(r.TgZ(0,"div",0),r._UZ(1,"h2",1),r.TgZ(2,"nav",2)(3,"ol",3),r.YNc(4,D,4,6,"li",4),r.qZA()()()),2&p&&(r.xp6(1),r.Q6J("innerText",_.pageTitle),r.xp6(3),r.Q6J("ngForOf",_.breadcrumbs))},dependencies:[u.mk,u.sg,u.O5,I.yS],styles:[".container-fluid[_ngcontent-%COMP%]{margin-bottom:.75rem}@media (min-width: 960px){.container-fluid[_ngcontent-%COMP%]{margin-top:.5rem}}"]}),d})()},5531:(O,g,a)=>{a.d(g,{w:()=>I});var r=a(6895),n=a(9631),o=a(4650);let I=(()=>{class u{}return u.\u0275fac=function(l){return new(l||u)},u.\u0275mod=o.oAB({type:u}),u.\u0275inj=o.cJS({imports:[r.ez,n.Bz]}),u})()},2381:(O,g,a)=>{a.d(g,{y:()=>I});var r=a(5044),n=a(4650),o=a(3822);let I=(()=>{class u{constructor(l){this.cookieConsentService=l,this.storage=null}getItem(l){return null===this.storage&&(this.storage=this.data),this.storage[l]}get data(){const l=localStorage.getItem(r.dR.PREFERENCES);if(!l)return{};try{return JSON.parse(l)}catch{return{}}}setItem(l,T){null===this.storage&&(this.storage=this.data),T?this.storage[l]=T:delete this.storage[l],this.cookieConsentService.choice?.preferences&&localStorage.setItem(r.dR.PREFERENCES,JSON.stringify(this.storage))}}return u.\u0275fac=function(l){return new(l||u)(n.LFG(o.C))},u.\u0275prov=n.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},3590:(O,g,a)=>{a.d(g,{HF:()=>L,Ry:()=>u,in:()=>l,m:()=>n,n8:()=>o,t6:()=>T,uD:()=>r,xt:()=>I});const r="\nquery FullScript($id: ID!, $type: ScriptTargetTypeEnum!) {\n    scriptList {\n        scriptId,\n        script_type,\n        forum,\n        name,\n        sdesc,\n        public_link,\n        preview,\n        tab,\n        js,\n        js_admin,\n        js_pos,\n        webhook,\n        libs,\n        deps,\n        settings_schema,\n        settings_default,\n        html_head,\n        hidden_script,\n        old_layout,\n        new_layout,\n        responsive_layout,\n        mobile,\n        demo,\n        wh_settings,\n        wh_manage,\n    }\n    scriptSettings(targetId: $id, targetType: $type) {\n        scriptId,\n        settings,\n    }\n    scriptInstalledList(targetId: $id, targetType: $type)\n    scriptRankedList {\n        scriptId\n        scriptRank\n    }\n    scriptPermissions {\n        scriptId\n        manage\n        edit\n    }\n}",n="\nquery Script($id: ID!, $type: ScriptTargetTypeEnum!) {\n    scriptSettings(targetId: $id, targetType: $type) {\n        scriptId,\n        settings,\n    }\n    scriptInstalledList(targetId: $id, targetType: $type)\n}",o="\nquery ScriptStats {\n    scriptStats {\n        scriptId\n        entities {\n            targetId\n            targetType\n        }\n    }\n}",I="\nmutation DelCache($scriptId: Int!) {\n    delCache(id: $scriptId)\n}",u="\nmutation ScriptUpsert($scriptDetails: ScriptDetails!, $scriptId: Int) {\n    scriptUpsert(scriptDetails: $scriptDetails, scriptId: $scriptId)\n}",L="\nmutation DelScript($scriptId: Int!) {\n    delScript(scriptId: $scriptId)\n}",l="\nmutation ScriptManage(\n    $targetId: ID!,\n    $targetType: ScriptTargetTypeEnum!,\n    $scriptId: Int!,\n    $action: ScriptManageActionEnum!\n) {\n    scriptManage(\n        targetId: $targetId,\n        targetType: $targetType,\n        scriptId: $scriptId,\n        action: $action\n    )\n}",T="\nmutation ScriptSettings(\n    $targetId: ID!,\n    $targetType: ScriptTargetTypeEnum!,\n    $scriptId: Int!,\n    $settings: String\n) {\n    scriptSettings(\n        targetId: $targetId,\n        targetType: $targetType,\n        scriptId: $scriptId,\n        settings: $settings\n    )\n}"},7163:(O,g,a)=>{a.d(g,{o:()=>S});var r=a(5861),n=a(7579),o=a(2300),I=a(5044),u=a(3590),L=a(5946),l=a(4650),T=a(5395),D=a(3138),R=a(5681),d=a(2381);let S=(()=>{class p{constructor(t,s,i,e){this.graphqlService=t,this.globalsService=s,this.profileService=i,this.preferencesService=e,this.scriptInstalledList=[],this.listInputsSubject=new n.x,this.ffuid="",this.cache={},this.allScriptCache={},this.lastRequestTime=0,this.profileSubscription=this.globalsService.profileObservable.subscribe(c=>{this.ffuid=c?.user.ffuid||""})}createCacheKey(t,s){return t+s+this.ffuid}getData(t,s=o.D7.FORUM,i=!1){var e=this;return(0,r.Z)(function*(){const c=e.createCacheKey(t,s);if(Date.now()-e.lastRequestTime>18e5&&e.clearCache(!0),i){if(e.scriptList)return{scriptList:e.scriptList,scriptSettings:[],scriptInstalledList:[],scriptRankedList:[],scriptPermissions:e.scriptPermissions}}else if(e.cache.hasOwnProperty(c))return e.cache[c];const h=yield e.graphqlService.query({query:e.scriptList?u.m:u.uD,variables:{id:t,type:s}});return e.scriptList?(h.data.scriptRankedList=e.scriptRankedList,h.data.scriptPermissions=e.scriptPermissions):(e.lastRequestTime=Date.now(),e.scriptList=h.data.scriptList,e.parseScriptList(),e.scriptRankedList=h.data.scriptRankedList,e.scriptPermissions=h.data.scriptPermissions),e.scriptInstalledList=h.data.scriptInstalledList=h.data.scriptInstalledList.filter(P=>e.scriptList.findIndex(E=>E.scriptId===P)>-1),h.data.scriptList=e.filterType(e.scriptList,t,s,s!==o.D7.FORUM||e.globalsService.forum?.admin?void 0:e.scriptPermissions,e.scriptRankedList),e.cache[c]=h.data,i?{scriptList:e.scriptList,scriptSettings:[],scriptInstalledList:[],scriptRankedList:[],scriptPermissions:e.scriptPermissions}:e.cache[c]})()}parseScriptList(){this.scriptList=this.scriptList?.map(t=>(this.parseScript(t),t))}parseScript(t){t.parentIdList=t.parentNameList=[],t.childIdList=t.childIdList||[],t.childNameList=t.childNameList||[];try{t.parentIdList=t.deps.filter(s=>s!==t.scriptId);for(const s of t.parentIdList.keys()){let i=this.scriptList?.find(e=>e.scriptId===t.parentIdList[s]);if(i){if(t.parentNameList.push(i.name),i.childIdList){if(i.childIdList.indexOf(t.scriptId)>-1)continue}else i.childIdList=[];i.childIdList.push(t.scriptId),i.childNameList||(i.childNameList=[]),i.childNameList.push(t.name)}else t.parentIdList.splice(s,1)}}catch{}}filterType(t,s,i,e,c){let P,E,h=null===i?[o.AV.FORUM,o.AV.USER,o.AV.ALL]:i===o.D7.FORUM?[o.AV.FORUM,o.AV.ALL]:[o.AV.USER,o.AV.ALL],m=-1,C=-1;return t.filter(f=>{if(0===f.js.length||(f.originalName||(f.originalName=f.name),e&&(C=e.findIndex(v=>v.scriptId===f.scriptId),C<0||!e[C].manage.includes(this.ffuid)&&(!e[C].edit.includes(this.ffuid)||!this.scriptInstalledList.includes(f.scriptId)))))return!1;if(E=!1,f.rank=1e3,c&&(m=c.findIndex(v=>v.scriptId===f.scriptId),m>-1&&(f.rank=c[m].scriptRank)),f.hidden_script){const v=f.originalName;E=f.forum===this.ffuid||this.profileService.isAdmin(),P=v.match(/^whitelist\[([^\]]*)]/i),P&&(f.name===f.originalName&&(f.name=f.name.replace(P[0],"").trim()),E||(E=P[1].toLowerCase().split(",").includes(s)))}return h.includes(f.script_type)&&(!f.hidden_script||E)})}splitTabs(t){let s={};return t.forEach(i=>{s.hasOwnProperty(i.tab)||(s[i.tab]=[]),s[i.tab].push(i)}),s}getListInputsObservable(){return this.listInputsSubject.asObservable()}pushListInputs(t){this.listInputsSubject.next(t),this.listInputs=t}get listInputs(){return this.listInputsData}set listInputs(t){this.listInputsData=t}getScript(t,s,i){var e=this;return(0,r.Z)(function*(){const c=yield e.getData(s,i),h=yield e.getScriptPermissions();return[(yield e.getAllScripts(s,i)).find(m=>m.scriptId===t),c.scriptSettings.find(m=>m.scriptId===t)?.settings||"{}",c.scriptInstalledList.includes(t),h[`script${t}`]||{scriptId:t,manage:!1,edit:!1}]})()}getScriptsByAuthor(t){var s=this;return(0,r.Z)(function*(){return(yield s.getData(t,o.D7.USER,!0)).scriptList.filter(e=>e.forum===t)})()}updateInstalledScriptSettings(t,s,i,e){const c=this.createCacheKey(t,s);if(this.cache[c]){let h=this.cache[c].scriptSettings.find(m=>m.scriptId=i);h?h.settings=e:this.cache[c].scriptSettings.push({scriptId:i,settings:e})}}getAllScripts(t,s){var i=this;return(0,r.Z)(function*(){if(t||(t=i.ffuid,s=o.D7.USER),i.allScriptCache.hasOwnProperty(t))return i.allScriptCache[t];const e=yield i.getData(t,s,!0);return i.allScriptCache[t]=i.filterType(e.scriptList,t,null)})()}getScriptPermissions(){var t=this;return(0,r.Z)(function*(){const s=t.scriptPermissions||(yield t.getData(t.ffuid,o.D7.USER)).scriptPermissions;let i={};return s.forEach(e=>{e.manage.includes(t.ffuid)&&(i[`script${e.scriptId}`]={scriptId:e.scriptId,manage:!0,edit:!1}),e.edit.includes(t.ffuid)&&(i.hasOwnProperty(`script${e.scriptId}`)?i[`script${e.scriptId}`].edit=!0:i[`script${e.scriptId}`]={scriptId:e.scriptId,manage:!1,edit:!0})}),i})()}updateScript(t,s){if(!this.scriptList)return;const i=this.scriptList.findIndex(e=>e.scriptId===s);if(i){const e=this.scriptList[i].parentIdList.filter(c=>!t.deps.includes(c));for(const c of e){const h=this.scriptList.find(m=>m.scriptId===c);h&&this.removeChildFromParent(h,c)}Object.assign(this.scriptList[i],t),this.scriptList[i].originalName=t.name,this.parseScript(this.scriptList[i]),this.clearCache(!1)}}removeScript(t){if(!this.scriptList)return;const s=this.scriptList.findIndex(i=>i.scriptId===t);if(s){for(const i of this.scriptList[s].childIdList){const e=this.scriptList.find(c=>c.scriptId===i);e&&this.removeChildFromParent(e,t)}this.scriptList.splice(s,1),this.clearCache(!1)}}removeChildFromParent(t,s){const i=t.childIdList.indexOf(s);t.childIdList.splice(i,1),t.childNameList.splice(i,1)}clearCache(t=!0){this.cache={},this.allScriptCache={},t&&(this.scriptList=void 0,this.scriptPermissions=void 0)}get settingsOptions(){return this.preferencesService.getItem(I.Ye.SCRIPT_SETTINGS_OPTIONS)||L.iK}set settingsOptions(t){this.preferencesService.setItem(I.Ye.SCRIPT_SETTINGS_OPTIONS,t)}ngOnDestroy(){this.profileSubscription.unsubscribe()}}return p.\u0275fac=function(t){return new(t||p)(l.LFG(T.J),l.LFG(D.d),l.LFG(R.H),l.LFG(d.y))},p.\u0275prov=l.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);
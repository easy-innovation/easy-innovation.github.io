"use strict";(self.webpackChunkboard=self.webpackChunkboard||[]).push([[993],{8621:(v,T,c)=>{c.d(T,{L:()=>R});var r=c(4650),n=c(5044);let d=(()=>{class p{constructor(){this.dependences={[n.B2.LOGIN]:null,[n.B2.HOME]:null,[n.B2.SETTINGS]:n.B2.HOME,[n.B2.SCRIPT]:n.B2.HOME,[n.B2.SCRIPT_FORUM]:n.B2.SCRIPT,[n.B2.SCRIPT_USER]:n.B2.SCRIPT,[n.B2.SCRIPT_SETTINGS]:[n.B2.SCRIPT_USER,n.B2.SCRIPT_FORUM],[n.B2.SCRIPT_DEV]:n.B2.SCRIPT,[n.B2.SCRIPT_DEV_SETTINGS]:n.B2.SCRIPT_DEV,[n.B2.UPLOAD]:n.B2.HOME,[n.B2.ADMIN]:n.B2.HOME},this.names={[n.B2.LOGIN]:"Login",[n.B2.HOME]:"Home",[n.B2.SETTINGS]:"Notifiche",[n.B2.SCRIPT]:"Script",[n.B2.SCRIPT_FORUM]:"Forum",[n.B2.SCRIPT_USER]:"Utenti",[n.B2.SCRIPT_SETTINGS]:"Impostazioni",[n.B2.SCRIPT_DEV]:"Sviluppo",[n.B2.SCRIPT_DEV_SETTINGS]:"Impostazioni",[n.B2.UPLOAD]:"Upload",[n.B2.ADMIN]:"Amministrazione"}}createPathList(l,m=[]){const D=(e,a)=>{e.unshift({name:this.names[a]||"",path:a})},t=e=>this.dependences.hasOwnProperty(e)?this.dependences[e]instanceof Array?this.dependences[e].includes(m[0])?m.shift():this.dependences[e][0]:this.dependences[e]:null;let s=[{name:this.names[l]||"",path:""}],i=t(l);for(;i;)D(s,i),i=t(i);return s}}return p.\u0275fac=function(l){return new(l||p)},p.\u0275prov=r.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})();var S=c(9631),o=c(6895);function g(p,L){if(1&p&&r._UZ(0,"a",8),2&p){const l=r.oxw().$implicit;r.Q6J("routerLink",l.path)("innerText",l.name)}}function u(p,L){if(1&p&&r._UZ(0,"span",9),2&p){const l=r.oxw().$implicit;r.Q6J("innerText",l.name)}}const _=function(p){return{active:p}};function y(p,L){if(1&p&&(r.TgZ(0,"li",5),r.YNc(1,g,1,2,"a",6),r.YNc(2,u,1,1,"ng-template",null,7,r.W1O),r.qZA()),2&p){const l=L.last,m=r.MAs(3);r.Q6J("ngClass",r.VKq(4,_,l)),r.uIk("aria-current",l?"page":null),r.xp6(1),r.Q6J("ngIf",!l)("ngIfElse",m)}}let R=(()=>{class p{constructor(l,m){this.breadcrumbService=l,this.router=m,this.pageTitle="",this.url="",this.nodes=[],this.breadcrumbs=[]}ngOnInit(){this.url||(this.url=this.router.url),this.breadcrumbs=this.breadcrumbService.createPathList(this.url,this.nodes)}}return p.\u0275fac=function(l){return new(l||p)(r.Y36(d),r.Y36(S.F0))},p.\u0275cmp=r.Xpm({type:p,selectors:[["app-breadcrumb"]],inputs:{pageTitle:"pageTitle",url:"url",nodes:"nodes"},decls:5,vars:2,consts:[[1,"container-fluid","px-md-1","d-flex","flex-column","flex-md-row","align-items-md-center"],[1,"h3","fw-light","mb-0","lh-1","fv-small-caps","pb-1",3,"innerText"],["aria-label","breadcrumb",1,"ms-md-auto","mt-1"],[1,"breadcrumb","mb-0","justify-content-md-end"],["class","breadcrumb-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"breadcrumb-item",3,"ngClass"],[3,"routerLink","innerText",4,"ngIf","ngIfElse"],["lastItem",""],[3,"routerLink","innerText"],[3,"innerText"]],template:function(l,m){1&l&&(r.TgZ(0,"div",0),r._UZ(1,"h2",1),r.TgZ(2,"nav",2)(3,"ol",3),r.YNc(4,y,4,6,"li",4),r.qZA()()()),2&l&&(r.xp6(1),r.Q6J("innerText",m.pageTitle),r.xp6(3),r.Q6J("ngForOf",m.breadcrumbs))},dependencies:[o.mk,o.sg,o.O5,S.yS],styles:[".container-fluid[_ngcontent-%COMP%]{margin-bottom:.75rem}@media (min-width: 960px){.container-fluid[_ngcontent-%COMP%]{margin-top:.5rem}}"]}),p})()},5531:(v,T,c)=>{c.d(T,{w:()=>S});var r=c(6895),n=c(9631),d=c(4650);let S=(()=>{class o{}return o.\u0275fac=function(u){return new(u||o)},o.\u0275mod=d.oAB({type:o}),o.\u0275inj=d.cJS({imports:[r.ez,n.Bz]}),o})()},2381:(v,T,c)=>{c.d(T,{y:()=>S});var r=c(5044),n=c(4650),d=c(5700);let S=(()=>{class o{constructor(u){this.cookieConsentService=u,this.storage=null}getItem(u){return null===this.storage&&(this.storage=this.data),this.storage[u]}get data(){const u=localStorage.getItem(r.dR.PREFERENCES);if(!u)return{};try{return JSON.parse(u)}catch{return{}}}setItem(u,_){null===this.storage&&(this.storage=this.data),_?this.storage[u]=_:delete this.storage[u],this.cookieConsentService.choice?.preferences&&localStorage.setItem(r.dR.PREFERENCES,JSON.stringify(this.storage))}}return o.\u0275fac=function(u){return new(u||o)(n.LFG(d.C))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},3590:(v,T,c)=>{c.d(T,{HF:()=>g,Ry:()=>o,in:()=>u,m:()=>n,n8:()=>d,t6:()=>_,uD:()=>r,xt:()=>S});const r="\nquery FullScript($id: String!, $type: ScriptTargetTypeEnum!) {\n    scriptList {\n        scriptId,\n        script_type,\n        forum,\n        name,\n        sdesc,\n        public_link,\n        preview,\n        tab,\n        js,\n        js_admin,\n        js_pos,\n        webhook,\n        libs,\n        deps,\n        settings_schema,\n        settings_default,\n        html_head,\n        hidden_script,\n        old_layout,\n        new_layout,\n        responsive_layout,\n        mobile,\n        demo,\n        wh_settings,\n        wh_manage,\n    }\n    scriptSettings(targetId: $id, targetType: $type) {\n        scriptId,\n        settings,\n    }\n    scriptInstalledList(targetId: $id, targetType: $type)\n    scriptRankedList {\n        scriptId\n        scriptRank\n    }\n    scriptPermissions {\n        scriptId\n        manage\n        edit\n    }\n}",n="\nquery Script($id: String!, $type: ScriptTargetTypeEnum!) {\n    scriptSettings(targetId: $id, targetType: $type) {\n        scriptId,\n        settings,\n    }\n    scriptInstalledList(targetId: $id, targetType: $type)\n}",d="\nquery ScriptStats {\n    scriptStats {\n        scriptId\n        entities {\n            targetId\n            targetType\n        }\n    }\n}",S="\nmutation DelCache($scriptId: Int!) {\n    delCache(id: $scriptId)\n}",o="\nmutation ScriptUpsert($scriptDetails: ScriptDetails!, $scriptId: Int) {\n    scriptUpsert(scriptDetails: $scriptDetails, scriptId: $scriptId)\n}",g="\nmutation DelScript($scriptId: Int!) {\n    delScript(scriptId: $scriptId)\n}",u="\nmutation ScriptManage(\n    $targetId: String!,\n    $targetType: ScriptTargetTypeEnum!,\n    $scriptId: Int!,\n    $action: ScriptManageActionEnum!\n) {\n    scriptManage(\n        targetId: $targetId,\n        targetType: $targetType,\n        scriptId: $scriptId,\n        action: $action\n    )\n}",_="\nmutation ScriptSettings(\n    $targetId: String!,\n    $targetType: ScriptTargetTypeEnum!,\n    $scriptId: Int!,\n    $settings: String!\n) {\n    scriptSettings(\n        targetId: $targetId,\n        targetType: $targetType,\n        scriptId: $scriptId,\n        settings: $settings\n    )\n}"},7163:(v,T,c)=>{c.d(T,{o:()=>l});var r=c(5861),n=c(7579),d=c(2300),S=c(5044),o=c(608),g=c(3590),u=c(5946),_=c(4650),y=c(5395),R=c(3138),p=c(5681),L=c(2381);let l=(()=>{class m{constructor(t,s,i,e){this.graphqlService=t,this.globalsService=s,this.profileService=i,this.preferencesService=e,this.scriptInstalledList=[],this.listInputsSubject=new n.x,this.ffuid="",this.cache={},this.allScriptCache={},this.lastRequestTime=0,this.profileSubscription=this.globalsService.profileObservable.subscribe(a=>{this.ffuid=a?.user.ffuid||""})}createCacheKey(t,s){return t+s+this.ffuid}getData(t,s=d.D7.FORUM,i=!1){var e=this;return(0,r.Z)(function*(){const a=e.createCacheKey(t,s);if(Date.now()-e.lastRequestTime>18e5&&e.clearCache(!0),i){if(e.scriptList)return{scriptList:e.scriptList,scriptSettings:[],scriptInstalledList:[],scriptRankedList:[],scriptPermissions:e.scriptPermissions}}else if(e.cache.hasOwnProperty(a))return e.cache[a];const h=yield e.graphqlService.query({query:e.scriptList?g.m:g.uD,variables:{id:t,type:s}});return e.scriptList?(h.data.scriptRankedList=e.scriptRankedList,h.data.scriptPermissions=e.scriptPermissions):(e.lastRequestTime=Date.now(),e.scriptList=h.data.scriptList,e.parseScriptList(),e.scriptRankedList=h.data.scriptRankedList,e.scriptPermissions=h.data.scriptPermissions),e.scriptInstalledList=h.data.scriptInstalledList=h.data.scriptInstalledList.filter(P=>e.scriptList.findIndex(E=>E.scriptId===P)>-1),h.data.scriptList=e.filterType(e.scriptList,t,s,s!==d.D7.FORUM||e.globalsService.forum?.admin?void 0:e.scriptPermissions,e.scriptRankedList),e.cache[a]=h.data,i?{scriptList:e.scriptList,scriptSettings:[],scriptInstalledList:[],scriptRankedList:[],scriptPermissions:e.scriptPermissions}:e.cache[a]})()}parseScriptList(){this.scriptList=this.scriptList?.map(t=>(this.parseScript(t),t))}parseScript(t){t.parentIdList=t.parentNameList=[],t.childIdList=t.childIdList||[],t.childNameList=t.childNameList||[];try{t.parentIdList=t.deps.filter(s=>s!==t.scriptId);for(const s of t.parentIdList.keys()){let i=this.scriptList?.find(e=>e.scriptId===t.parentIdList[s]);if(i){if(t.parentNameList.push(i.name),i.childIdList){if(i.childIdList.indexOf(t.scriptId)>-1)continue}else i.childIdList=[];i.childIdList.push(t.scriptId),i.childNameList||(i.childNameList=[]),i.childNameList.push(t.name)}else t.parentIdList.splice(s,1)}}catch{}}filterType(t,s,i,e,a){let P,E,h=null===i?[d.AV.FORUM,d.AV.USER,d.AV.ALL]:i===d.D7.FORUM?[d.AV.FORUM,d.AV.ALL]:[d.AV.USER,d.AV.ALL],I=-1,C=-1;const M=this.profileService.hasAtLeastOnePermission([o.y.ADMIN]);return t.filter(f=>!(0===f.js.length||(f.originalName||(f.originalName=f.name),e&&(C=e.findIndex(O=>O.scriptId===f.scriptId),C<0||!(e[C].manage.includes(this.ffuid)||e[C].edit.includes(this.ffuid)&&this.scriptInstalledList.includes(f.scriptId)))))&&(E=!1,f.rank=1e3,a&&(I=a.findIndex(O=>O.scriptId===f.scriptId),I>-1&&(f.rank=a[I].scriptRank)),f.hidden_script&&(E=f.forum===this.ffuid||M,P=f.originalName.match(/^whitelist\[([^\]]*)]/i),P&&(f.name===f.originalName&&(f.name=f.name.replace(P[0],"").trim()),E||(E=P[1].toLowerCase().split(",").includes(s)))),h.includes(f.script_type)&&(!f.hidden_script||E)))}splitTabs(t){let s={};return t.forEach(i=>{s.hasOwnProperty(i.tab)||(s[i.tab]=[]),s[i.tab].push(i)}),s}getListInputsObservable(){return this.listInputsSubject.asObservable()}pushListInputs(t){this.listInputsSubject.next(t),this.listInputs=t}get listInputs(){return this.listInputsData}set listInputs(t){this.listInputsData=t}getScript(t,s,i){var e=this;return(0,r.Z)(function*(){const a=yield e.getData(s,i),h=yield e.getScriptPermissions();return[(yield e.getAllScripts(s,i)).find(I=>I.scriptId===t),a.scriptSettings.find(I=>I.scriptId===t)?.settings||"{}",a.scriptInstalledList.includes(t),h[`script${t}`]||{scriptId:t,manage:!1,edit:!1}]})()}getScriptsByAuthor(t){var s=this;return(0,r.Z)(function*(){return(yield s.getData(t,d.D7.USER,!0)).scriptList.filter(e=>e.forum===t)})()}updateInstalledScriptSettings(t,s,i,e){const a=this.createCacheKey(t,s);if(this.cache[a]){let h=this.cache[a].scriptSettings.find(I=>I.scriptId=i);h?h.settings=e:this.cache[a].scriptSettings.push({scriptId:i,settings:e})}}getAllScripts(t,s){var i=this;return(0,r.Z)(function*(){if(t||(t=i.ffuid,s=d.D7.USER),i.allScriptCache.hasOwnProperty(t))return i.allScriptCache[t];const e=yield i.getData(t,s,!0);return i.allScriptCache[t]=i.filterType(e.scriptList,t,null)})()}getScriptPermissions(){var t=this;return(0,r.Z)(function*(){const s=t.scriptPermissions||(yield t.getData(t.ffuid,d.D7.USER)).scriptPermissions;let i={};return s.forEach(e=>{e.manage.includes(t.ffuid)&&(i[`script${e.scriptId}`]={scriptId:e.scriptId,manage:!0,edit:!1}),e.edit.includes(t.ffuid)&&(i.hasOwnProperty(`script${e.scriptId}`)?i[`script${e.scriptId}`].edit=!0:i[`script${e.scriptId}`]={scriptId:e.scriptId,manage:!1,edit:!0})}),i})()}updateScript(t,s){if(!this.scriptList)return;const i=this.scriptList.findIndex(e=>e.scriptId===s);if(i){const e=this.scriptList[i].parentIdList.filter(a=>!t.deps.includes(a));for(const a of e){const h=this.scriptList.find(I=>I.scriptId===a);h&&this.removeChildFromParent(h,a)}Object.assign(this.scriptList[i],t),this.scriptList[i].originalName=t.name,this.parseScript(this.scriptList[i]),this.clearCache(!1)}}removeScript(t){if(!this.scriptList)return;const s=this.scriptList.findIndex(i=>i.scriptId===t);if(s){for(const i of this.scriptList[s].childIdList){const e=this.scriptList.find(a=>a.scriptId===i);e&&this.removeChildFromParent(e,t)}this.scriptList.splice(s,1),this.clearCache(!1)}}removeChildFromParent(t,s){const i=t.childIdList.indexOf(s);t.childIdList.splice(i,1),t.childNameList.splice(i,1)}clearCache(t=!0){this.cache={},this.allScriptCache={},t&&(this.scriptList=void 0,this.scriptPermissions=void 0)}get settingsOptions(){return this.preferencesService.getItem(S.Ye.SCRIPT_SETTINGS_OPTIONS)||u.iK}set settingsOptions(t){this.preferencesService.setItem(S.Ye.SCRIPT_SETTINGS_OPTIONS,t)}ngOnDestroy(){this.profileSubscription.unsubscribe()}}return m.\u0275fac=function(t){return new(t||m)(_.LFG(y.J),_.LFG(R.d),_.LFG(p.H),_.LFG(L.y))},m.\u0275prov=_.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);
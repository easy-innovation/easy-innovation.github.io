"use strict";(self.webpackChunkboard=self.webpackChunkboard||[]).push([[993],{8621:(y,L,c)=>{c.d(L,{L:()=>D});var r=c(4650),n=c(5044);let l=(()=>{class p{constructor(){this.dependences={[n.B2.LOGIN]:null,[n.B2.HOME]:null,[n.B2.SETTINGS]:n.B2.HOME,[n.B2.SCRIPT]:n.B2.HOME,[n.B2.SCRIPT_FORUM]:n.B2.SCRIPT,[n.B2.SCRIPT_USER]:n.B2.SCRIPT,[n.B2.SCRIPT_SETTINGS]:[n.B2.SCRIPT_USER,n.B2.SCRIPT_FORUM],[n.B2.SCRIPT_DEV]:n.B2.SCRIPT,[n.B2.SCRIPT_DEV_SETTINGS]:n.B2.SCRIPT_DEV,[n.B2.UPLOAD]:n.B2.HOME,[n.B2.ADMIN]:n.B2.HOME},this.names={[n.B2.LOGIN]:"Login",[n.B2.HOME]:"Home",[n.B2.SETTINGS]:"Notifiche",[n.B2.SCRIPT]:"Script",[n.B2.SCRIPT_FORUM]:"Forum",[n.B2.SCRIPT_USER]:"Utenti",[n.B2.SCRIPT_SETTINGS]:"Impostazioni",[n.B2.SCRIPT_DEV]:"Sviluppo",[n.B2.SCRIPT_DEV_SETTINGS]:"Impostazioni",[n.B2.UPLOAD]:"Upload",[n.B2.ADMIN]:"Amministrazione"}}createPathList(d,h=[]){const R=(i,a)=>{i.unshift({name:this.names[a]||"",path:a})},t=i=>this.dependences.hasOwnProperty(i)?this.dependences[i]instanceof Array?this.dependences[i].includes(h[0])?h.shift():this.dependences[i][0]:this.dependences[i]:null;let s=[{name:this.names[d]||"",path:""}],e=t(d);for(;e;)R(s,e),e=t(e);return s}}return p.\u0275fac=function(d){return new(d||p)},p.\u0275prov=r.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})();var _=c(1048),m=c(6895);function g(p,I){if(1&p&&r._UZ(0,"a",8),2&p){const d=r.oxw().$implicit;r.Q6J("routerLink",d.path)("innerText",d.name)}}function T(p,I){if(1&p&&r._UZ(0,"span",9),2&p){const d=r.oxw().$implicit;r.Q6J("innerText",d.name)}}const S=function(p){return{active:p}};function C(p,I){if(1&p&&(r.TgZ(0,"li",5),r.YNc(1,g,1,2,"a",6),r.YNc(2,T,1,1,"ng-template",null,7,r.W1O),r.qZA()),2&p){const d=I.last,h=r.MAs(3);r.Q6J("ngClass",r.VKq(4,S,d)),r.uIk("aria-current",d?"page":null),r.xp6(1),r.Q6J("ngIf",!d)("ngIfElse",h)}}let D=(()=>{class p{constructor(d,h){this.breadcrumbService=d,this.router=h,this.pageTitle="",this.url="",this.nodes=[],this.breadcrumbs=[]}ngOnInit(){this.url||(this.url=this.router.url),this.breadcrumbs=this.breadcrumbService.createPathList(this.url,this.nodes)}}return p.\u0275fac=function(d){return new(d||p)(r.Y36(l),r.Y36(_.F0))},p.\u0275cmp=r.Xpm({type:p,selectors:[["app-breadcrumb"]],inputs:{pageTitle:"pageTitle",url:"url",nodes:"nodes"},decls:5,vars:2,consts:[[1,"container-fluid","px-md-1","d-flex","flex-column","flex-md-row","align-items-md-center"],[1,"h3","fw-light","mb-0","lh-1","fv-small-caps","pb-1",3,"innerText"],["aria-label","breadcrumb",1,"ms-md-auto","mt-1"],[1,"breadcrumb","mb-0","justify-content-md-end"],["class","breadcrumb-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"breadcrumb-item",3,"ngClass"],[3,"routerLink","innerText",4,"ngIf","ngIfElse"],["lastItem",""],[3,"routerLink","innerText"],[3,"innerText"]],template:function(d,h){1&d&&(r.TgZ(0,"div",0),r._UZ(1,"h2",1),r.TgZ(2,"nav",2)(3,"ol",3),r.YNc(4,C,4,6,"li",4),r.qZA()()()),2&d&&(r.xp6(1),r.Q6J("innerText",h.pageTitle),r.xp6(3),r.Q6J("ngForOf",h.breadcrumbs))},dependencies:[m.mk,m.sg,m.O5,_.yS],styles:[".container-fluid[_ngcontent-%COMP%]{margin-bottom:.75rem}@media (min-width: 960px){.container-fluid[_ngcontent-%COMP%]{margin-top:.5rem}}"]}),p})()},5531:(y,L,c)=>{c.d(L,{w:()=>_});var r=c(6895),n=c(1048),l=c(4650);let _=(()=>{class m{}return m.\u0275fac=function(T){return new(T||m)},m.\u0275mod=l.oAB({type:m}),m.\u0275inj=l.cJS({imports:[r.ez,n.Bz]}),m})()},3590:(y,L,c)=>{c.d(L,{HF:()=>g,Ry:()=>m,in:()=>T,m:()=>n,n8:()=>l,t6:()=>S,uD:()=>r,xt:()=>_});const r="\nquery FullScript($id: String!, $type: ScriptTargetTypeEnum!) {\n    scriptList {\n        scriptId,\n        script_type,\n        forum,\n        name,\n        sdesc,\n        public_link,\n        preview,\n        tab,\n        js,\n        js_beta,\n        js_admin,\n        js_pos,\n        webhook,\n        libs,\n        deps,\n        settings_schema,\n        settings_default,\n        html_head,\n        hidden_script,\n        old_layout,\n        new_layout,\n        responsive_layout,\n        mobile,\n        demo,\n        wh_settings,\n        wh_manage,\n    }\n    scriptSettings(targetId: $id, targetType: $type) {\n        scriptId,\n        settings,\n    }\n    scriptInstalledList(targetId: $id, targetType: $type)\n    scriptRankedList {\n        scriptId\n        scriptRank\n    }\n    scriptPermissions {\n        scriptId\n        manage\n        edit\n    }\n}",n="\nquery Script($id: String!, $type: ScriptTargetTypeEnum!) {\n    scriptSettings(targetId: $id, targetType: $type) {\n        scriptId,\n        settings,\n    }\n    scriptInstalledList(targetId: $id, targetType: $type)\n}",l="\nquery ScriptStats {\n    scriptStats {\n        scriptId\n        entities {\n            targetId\n            targetType\n        }\n    }\n}",_="\nmutation DelCache($scriptId: Int!) {\n    delCache(id: $scriptId)\n}",m="\nmutation ScriptUpsert($scriptDetails: ScriptDetails!, $scriptId: Int) {\n    scriptUpsert(scriptDetails: $scriptDetails, scriptId: $scriptId)\n}",g="\nmutation DelScript($scriptId: Int!) {\n    delScript(scriptId: $scriptId)\n}",T="\nmutation ScriptManage(\n    $targetId: String!,\n    $targetType: ScriptTargetTypeEnum!,\n    $scriptId: Int!,\n    $action: ScriptManageActionEnum!\n) {\n    scriptManage(\n        targetId: $targetId,\n        targetType: $targetType,\n        scriptId: $scriptId,\n        action: $action\n    )\n}",S="\nmutation ScriptSettings(\n    $targetId: String!,\n    $targetType: ScriptTargetTypeEnum!,\n    $scriptId: Int!,\n    $settings: String!\n) {\n    scriptSettings(\n        targetId: $targetId,\n        targetType: $targetType,\n        scriptId: $scriptId,\n        settings: $settings\n    )\n}"},7163:(y,L,c)=>{c.d(L,{o:()=>d});var r=c(5861),n=c(7579),l=c(2300),_=c(5044),m=c(608),g=c(3590),T=c(5946),S=c(4650),C=c(5395),D=c(3138),p=c(7104),I=c(2381);let d=(()=>{class h{constructor(t,s,e,i){this.graphqlService=t,this.globalsService=s,this.profileService=e,this.preferencesService=i,this.scriptInstalledList=[],this.listInputsSubject=new n.x,this.ffuid="",this.cache={},this.allScriptCache={},this.lastRequestTime=0,this.profileSubscription=this.globalsService.profileObservable.subscribe(a=>{this.ffuid=a?.user.ffuid||""})}createCacheKey(t,s){return t+s+this.ffuid}getData(t,s=l.D7.FORUM,e=!1){var i=this;return(0,r.Z)(function*(){const a=i.createCacheKey(t,s);if(Date.now()-i.lastRequestTime>18e5&&i.clearCache(!0),e){if(i.scriptList)return{scriptList:i.scriptList,scriptSettings:[],scriptInstalledList:[],scriptRankedList:[],scriptPermissions:i.scriptPermissions}}else if(i.cache.hasOwnProperty(a))return i.cache[a];const o=yield i.graphqlService.query({query:i.scriptList?g.m:g.uD,variables:{id:t,type:s}});return i.scriptList?(o.data.scriptRankedList=i.scriptRankedList,o.data.scriptPermissions=i.scriptPermissions):(i.lastRequestTime=Date.now(),i.scriptList=o.data.scriptList,i.parseScriptList(),i.scriptRankedList=o.data.scriptRankedList,i.scriptPermissions=o.data.scriptPermissions),i.scriptInstalledList=o.data.scriptInstalledList=o.data.scriptInstalledList.filter(E=>i.scriptList.findIndex(P=>P.scriptId===E)>-1),o.data.scriptList=i.filterType(i.scriptList,t,s,s!==l.D7.FORUM||i.globalsService.forum?.admin?void 0:i.scriptPermissions,i.scriptRankedList),i.cache[a]=o.data,e?{scriptList:i.scriptList,scriptSettings:[],scriptInstalledList:[],scriptRankedList:[],scriptPermissions:i.scriptPermissions}:i.cache[a]})()}parseScriptList(){this.scriptList=this.scriptList?.map(t=>(this.parseScript(t),t))}parseScript(t){t.parentIdList=t.parentNameList=[],t.childIdList=t.childIdList||[],t.childNameList=t.childNameList||[];try{t.parentIdList=t.deps.filter(s=>s!==t.scriptId);for(const s of t.parentIdList.keys()){let e=this.scriptList?.find(i=>i.scriptId===t.parentIdList[s]);if(e){if(t.parentNameList.push(e.name),e.childIdList){if(e.childIdList.indexOf(t.scriptId)>-1)continue}else e.childIdList=[];e.childIdList.push(t.scriptId),e.childNameList||(e.childNameList=[]),e.childNameList.push(t.name)}else t.parentIdList.splice(s,1)}}catch{}}filterType(t,s,e,i,a){let E,P,o=null===e?[l.AV.FORUM,l.AV.USER,l.AV.ALL]:e===l.D7.FORUM?[l.AV.FORUM,l.AV.ALL]:[l.AV.USER,l.AV.ALL],f=-1,v=-1;const b=this.profileService.hasAtLeastOnePermission([m.c.ADMIN]);return t.filter(u=>!(0===u.js.length||(u.originalName||(u.originalName=u.name),i&&(v=i.findIndex(O=>O.scriptId===u.scriptId),v<0||!(i[v].manage.includes(this.ffuid)||i[v].edit.includes(this.ffuid)&&this.scriptInstalledList.includes(u.scriptId)))))&&(P=!1,u.rank=1e3,a&&(f=a.findIndex(O=>O.scriptId===u.scriptId),f>-1&&(u.rank=a[f].scriptRank)),u.hidden_script&&(P=u.forum===this.ffuid||b,E=u.originalName.match(/^whitelist\[([^\]]*)]/i),E&&(u.name===u.originalName&&(u.name=u.name.replace(E[0],"").trim()),P||(P=E[1].toLowerCase().split(",").includes(s)))),o.includes(u.script_type)&&(!u.hidden_script||P)))}splitTabs(t){let s={};return t.forEach(e=>{s.hasOwnProperty(e.tab)||(s[e.tab]=[]),s[e.tab].push(e)}),s}getListInputsObservable(){return this.listInputsSubject.asObservable()}pushListInputs(t){this.listInputsSubject.next(t),this.listInputs=t}get listInputs(){return this.listInputsData}set listInputs(t){this.listInputsData=t}getScript(t,s,e){var i=this;return(0,r.Z)(function*(){const a=yield i.getData(s,e),o=yield i.getScriptPermissions();return[(yield i.getAllScripts(s,e)).find(f=>f.scriptId===t),a.scriptSettings.find(f=>f.scriptId===t)?.settings||"{}",a.scriptInstalledList.includes(t),o[`script${t}`]||{scriptId:t,manage:!1,edit:!1}]})()}getScriptsByAuthor(t){var s=this;return(0,r.Z)(function*(){return(yield s.getData(t,l.D7.USER,!0)).scriptList.filter(i=>i.forum===t)})()}updateInstalledScriptSettings(t,s,e,i){const a=this.createCacheKey(t,s);if(this.cache[a]){let o=this.cache[a].scriptSettings.find(f=>f.scriptId=e);o?o.settings=i:this.cache[a].scriptSettings.push({scriptId:e,settings:i})}}getAllScripts(t,s){var e=this;return(0,r.Z)(function*(){if(t||(t=e.ffuid,s=l.D7.USER),e.allScriptCache.hasOwnProperty(t))return e.allScriptCache[t];const i=yield e.getData(t,s,!0);return e.allScriptCache[t]=e.filterType(i.scriptList,t,null)})()}getScriptPermissions(){var t=this;return(0,r.Z)(function*(){const s=t.scriptPermissions||(yield t.getData(t.ffuid,l.D7.USER)).scriptPermissions;let e={};return s.forEach(i=>{i.manage.includes(t.ffuid)&&(e[`script${i.scriptId}`]={scriptId:i.scriptId,manage:!0,edit:!1}),i.edit.includes(t.ffuid)&&(e.hasOwnProperty(`script${i.scriptId}`)?e[`script${i.scriptId}`].edit=!0:e[`script${i.scriptId}`]={scriptId:i.scriptId,manage:!1,edit:!0})}),e})()}updateScript(t,s){if(!this.scriptList)return;const e=this.scriptList.findIndex(i=>i.scriptId===s);if(e){const i=this.scriptList[e].parentIdList.filter(a=>!t.deps.includes(a));for(const a of i){const o=this.scriptList.find(f=>f.scriptId===a);o&&this.removeChildFromParent(o,a)}Object.assign(this.scriptList[e],t),this.scriptList[e].originalName=t.name,this.parseScript(this.scriptList[e]),this.clearCache(!1)}}removeScript(t){if(!this.scriptList)return;const s=this.scriptList.findIndex(e=>e.scriptId===t);if(s){for(const e of this.scriptList[s].childIdList){const i=this.scriptList.find(a=>a.scriptId===e);i&&this.removeChildFromParent(i,t)}this.scriptList.splice(s,1),this.clearCache(!1)}}removeChildFromParent(t,s){const e=t.childIdList.indexOf(s);t.childIdList.splice(e,1),t.childNameList.splice(e,1)}clearCache(t=!0){this.cache={},this.allScriptCache={},t&&(this.scriptList=void 0,this.scriptPermissions=void 0)}get settingsOptions(){return this.preferencesService.getItem(_.Ye.SCRIPT_SETTINGS_OPTIONS)||T.iK}set settingsOptions(t){this.preferencesService.setItem(_.Ye.SCRIPT_SETTINGS_OPTIONS,t)}ngOnDestroy(){this.profileSubscription.unsubscribe()}}return h.\u0275fac=function(t){return new(t||h)(S.LFG(C.J),S.LFG(D.d),S.LFG(p.H),S.LFG(I.y))},h.\u0275prov=S.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()}}]);
"use strict";(self.webpackChunkboard=self.webpackChunkboard||[]).push([[993],{8621:(C,L,a)=>{a.d(L,{L:()=>R});var s=a(4650),n=a(5044);let o=(()=>{class l{constructor(){this.dependences={[n.B2.LOGIN]:null,[n.B2.HOME]:null,[n.B2.SETTINGS]:n.B2.HOME,[n.B2.SCRIPT]:n.B2.HOME,[n.B2.SCRIPT_FORUM]:n.B2.SCRIPT,[n.B2.SCRIPT_USER]:n.B2.SCRIPT,[n.B2.SCRIPT_SETTINGS]:[n.B2.SCRIPT_USER,n.B2.SCRIPT_FORUM],[n.B2.SCRIPT_DEV]:n.B2.SCRIPT,[n.B2.SCRIPT_DEV_SETTINGS]:n.B2.SCRIPT_DEV,[n.B2.UPLOAD]:n.B2.HOME,[n.B2.ADMIN]:n.B2.HOME},this.names={[n.B2.LOGIN]:"Login",[n.B2.HOME]:"Home",[n.B2.SETTINGS]:"Notifiche",[n.B2.SCRIPT]:"Script",[n.B2.SCRIPT_FORUM]:"Forum",[n.B2.SCRIPT_USER]:"Utenti",[n.B2.SCRIPT_SETTINGS]:"Impostazioni",[n.B2.SCRIPT_DEV]:"Sviluppo",[n.B2.SCRIPT_DEV_SETTINGS]:"Impostazioni",[n.B2.UPLOAD]:"Upload",[n.B2.ADMIN]:"Amministrazione"}}createPathList(d,m=[]){const y=(e,c)=>{e.unshift({name:this.names[c]||"",path:c})},t=e=>this.dependences.hasOwnProperty(e)?this.dependences[e]instanceof Array?this.dependences[e].includes(m[0])?m.shift():this.dependences[e][0]:this.dependences[e]:null;let r=[{name:this.names[d]||"",path:""}],i=t(d);for(;i;)y(r,i),i=t(i);return r}}return l.\u0275fac=function(d){return new(d||l)},l.\u0275prov=s.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();var S=a(1048),f=a(6895);function _(l,g){if(1&l&&s._UZ(0,"a",8),2&l){const d=s.oxw().$implicit;s.Q6J("routerLink",d.path)("innerText",d.name)}}function P(l,g){if(1&l&&s._UZ(0,"span",9),2&l){const d=s.oxw().$implicit;s.Q6J("innerText",d.name)}}const p=function(l){return{active:l}};function E(l,g){if(1&l&&(s.TgZ(0,"li",5),s.YNc(1,_,1,2,"a",6),s.YNc(2,P,1,1,"ng-template",null,7,s.W1O),s.qZA()),2&l){const d=g.last,m=s.MAs(3);s.Q6J("ngClass",s.VKq(4,p,d)),s.uIk("aria-current",d?"page":null),s.xp6(1),s.Q6J("ngIf",!d)("ngIfElse",m)}}let R=(()=>{class l{constructor(d,m){this.breadcrumbService=d,this.router=m,this.pageTitle="",this.url="",this.nodes=[],this.breadcrumbs=[]}ngOnInit(){this.url||(this.url=this.router.url),this.breadcrumbs=this.breadcrumbService.createPathList(this.url,this.nodes)}}return l.\u0275fac=function(d){return new(d||l)(s.Y36(o),s.Y36(S.F0))},l.\u0275cmp=s.Xpm({type:l,selectors:[["app-breadcrumb"]],inputs:{pageTitle:"pageTitle",url:"url",nodes:"nodes"},decls:5,vars:2,consts:[[1,"container-fluid","px-md-1","d-flex","flex-column","flex-md-row","align-items-md-center"],[1,"h3","fw-light","mb-0","lh-1","fv-small-caps","pb-1",3,"innerText"],["aria-label","breadcrumb",1,"ms-md-auto","mt-1"],[1,"breadcrumb","mb-0","justify-content-md-end"],["class","breadcrumb-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"breadcrumb-item",3,"ngClass"],[3,"routerLink","innerText",4,"ngIf","ngIfElse"],["lastItem",""],[3,"routerLink","innerText"],[3,"innerText"]],template:function(d,m){1&d&&(s.TgZ(0,"div",0),s._UZ(1,"h2",1),s.TgZ(2,"nav",2)(3,"ol",3),s.YNc(4,E,4,6,"li",4),s.qZA()()()),2&d&&(s.xp6(1),s.Q6J("innerText",m.pageTitle),s.xp6(3),s.Q6J("ngForOf",m.breadcrumbs))},dependencies:[f.mk,f.sg,f.O5,S.yS],styles:[".container-fluid[_ngcontent-%COMP%]{margin-bottom:.75rem}@media (min-width: 960px){.container-fluid[_ngcontent-%COMP%]{margin-top:.5rem}}"]}),l})()},5531:(C,L,a)=>{a.d(L,{w:()=>S});var s=a(6895),n=a(1048),o=a(4650);let S=(()=>{class f{}return f.\u0275fac=function(P){return new(P||f)},f.\u0275mod=o.oAB({type:f}),f.\u0275inj=o.cJS({imports:[s.ez,n.Bz]}),f})()},2381:(C,L,a)=>{a.d(L,{y:()=>f});var s=a(5044),n=a(4650),o=a(5700),S=a(5123);let f=(()=>{class _{constructor(p,E){this.cookieConsentService=p,this.localStorageService=E,this.storage=null}getItem(p){return null===this.storage&&(this.storage=this.data),this.storage[p]}get data(){const p=this.localStorageService.getItem(s.dR.PREFERENCES);if(!p)return{};try{return JSON.parse(p)}catch{return{}}}setItem(p,E){null===this.storage&&(this.storage=this.data),E?this.storage[p]=E:delete this.storage[p],this.cookieConsentService.choice?.preferences&&this.localStorageService.setItem(s.dR.PREFERENCES,JSON.stringify(this.storage))}resetItemsOnProfileChange(){const p=this.getItem(s.Ye.UPLOAD);p&&(p.lastPath=[],this.setItem(s.Ye.UPLOAD,p))}}return _.\u0275fac=function(p){return new(p||_)(n.LFG(o.C),n.LFG(S.n))},_.\u0275prov=n.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},3590:(C,L,a)=>{a.d(L,{HF:()=>_,Ry:()=>f,in:()=>P,m:()=>n,n8:()=>o,t6:()=>p,uD:()=>s,xt:()=>S});const s="\nquery FullScript($id: String!, $type: ScriptTargetTypeEnum!) {\n    scriptList {\n        scriptId,\n        script_type,\n        forum,\n        name,\n        sdesc,\n        public_link,\n        preview,\n        tab,\n        js,\n        js_beta,\n        js_admin,\n        js_pos,\n        webhook,\n        libs,\n        deps,\n        settings_schema,\n        settings_default,\n        html_head,\n        hidden_script,\n        old_layout,\n        new_layout,\n        responsive_layout,\n        mobile,\n        demo,\n        wh_settings,\n        wh_manage,\n    }\n    scriptSettings(targetId: $id, targetType: $type) {\n        scriptId,\n        settings,\n    }\n    scriptInstalledList(targetId: $id, targetType: $type)\n    scriptRankedList {\n        scriptId\n        scriptRank\n    }\n    scriptPermissions {\n        scriptId\n        manage\n        edit\n    }\n}",n="\nquery Script($id: String!, $type: ScriptTargetTypeEnum!) {\n    scriptSettings(targetId: $id, targetType: $type) {\n        scriptId,\n        settings,\n    }\n    scriptInstalledList(targetId: $id, targetType: $type)\n}",o="\nquery ScriptStats {\n    scriptStats {\n        scriptId\n        entities {\n            targetId\n            targetType\n        }\n    }\n}",S="\nmutation DelCache($scriptId: Int!) {\n    delCache(id: $scriptId)\n}",f="\nmutation ScriptUpsert($scriptDetails: ScriptDetails!, $scriptId: Int) {\n    scriptUpsert(scriptDetails: $scriptDetails, scriptId: $scriptId)\n}",_="\nmutation DelScript($scriptId: Int!) {\n    delScript(scriptId: $scriptId)\n}",P="\nmutation ScriptManage(\n    $targetId: String!,\n    $targetType: ScriptTargetTypeEnum!,\n    $scriptId: Int!,\n    $action: ScriptManageActionEnum!\n) {\n    scriptManage(\n        targetId: $targetId,\n        targetType: $targetType,\n        scriptId: $scriptId,\n        action: $action\n    )\n}",p="\nmutation ScriptSettings(\n    $targetId: String!,\n    $targetType: ScriptTargetTypeEnum!,\n    $scriptId: Int!,\n    $settings: String!\n) {\n    scriptSettings(\n        targetId: $targetId,\n        targetType: $targetType,\n        scriptId: $scriptId,\n        settings: $settings\n    )\n}"},7163:(C,L,a)=>{a.d(L,{o:()=>d});var s=a(5861),n=a(7579),o=a(2300),S=a(5044),f=a(608),_=a(3590),P=a(5946),p=a(4650),E=a(5395),R=a(3138),l=a(7104),g=a(2381);let d=(()=>{class m{constructor(t,r,i,e){this.graphqlService=t,this.globalsService=r,this.profileService=i,this.preferencesService=e,this.scriptInstalledList=[],this.listInputsSubject=new n.x,this.ffuid="",this.cache={},this.allScriptCache={},this.lastRequestTime=0,this.profileSubscription=this.globalsService.profileObservable.subscribe(c=>{this.ffuid=c?.user.ffuid||""})}createCacheKey(t,r){return t+r+this.ffuid}getData(t,r=o.D7.FORUM,i=!1){var e=this;return(0,s.Z)(function*(){const c=e.createCacheKey(t,r);if(Date.now()-e.lastRequestTime>18e5&&e.clearCache(!0),i){if(e.scriptList)return{scriptList:e.scriptList,scriptSettings:[],scriptInstalledList:[],scriptRankedList:[],scriptPermissions:e.scriptPermissions}}else if(e.cache.hasOwnProperty(c))return e.cache[c];const u=yield e.graphqlService.query({query:e.scriptList?_.m:_.uD,variables:{id:t,type:r}});return e.scriptList?(u.data.scriptRankedList=e.scriptRankedList,u.data.scriptPermissions=e.scriptPermissions):(e.lastRequestTime=Date.now(),e.scriptList=u.data.scriptList,e.parseScriptList(),e.scriptRankedList=u.data.scriptRankedList,e.scriptPermissions=u.data.scriptPermissions),e.scriptInstalledList=u.data.scriptInstalledList=u.data.scriptInstalledList.filter(O=>e.scriptList.findIndex(T=>T.scriptId===O)>-1),u.data.scriptList=e.filterType(e.scriptList,t,r,r!==o.D7.FORUM||e.globalsService.forum?.admin?void 0:e.scriptPermissions,e.scriptRankedList),e.cache[c]=u.data,i?{scriptList:e.scriptList,scriptSettings:[],scriptInstalledList:[],scriptRankedList:[],scriptPermissions:e.scriptPermissions}:e.cache[c]})()}parseScriptList(){this.scriptList=this.scriptList?.map(t=>(this.parseScript(t),t))}parseScript(t){t.parentIdList=t.parentNameList=[],t.childIdList=t.childIdList||[],t.childNameList=t.childNameList||[];try{t.parentIdList=t.deps.filter(r=>r!==t.scriptId);for(const r of t.parentIdList.keys()){let i=this.scriptList?.find(e=>e.scriptId===t.parentIdList[r]);if(i){if(t.parentNameList.push(i.name),i.childIdList){if(i.childIdList.indexOf(t.scriptId)>-1)continue}else i.childIdList=[];i.childIdList.push(t.scriptId),i.childNameList||(i.childNameList=[]),i.childNameList.push(t.name)}else t.parentIdList.splice(r,1)}}catch{}}filterType(t,r,i,e,c){let O,T,u=null===i?[o.AV.FORUM,o.AV.USER,o.AV.ALL]:i===o.D7.FORUM?[o.AV.FORUM,o.AV.ALL]:[o.AV.USER,o.AV.ALL],I=-1,D=-1;const M=this.profileService.hasAtLeastOnePermission([f.c.ADMIN]);return t.filter(h=>!(0===h.js.length||(h.originalName||(h.originalName=h.name),e&&(D=e.findIndex(v=>v.scriptId===h.scriptId),D<0||!(e[D].manage.includes(this.ffuid)||e[D].edit.includes(this.ffuid)&&this.scriptInstalledList.includes(h.scriptId)))))&&(T=!1,h.rank=1e3,c&&(I=c.findIndex(v=>v.scriptId===h.scriptId),I>-1&&(h.rank=c[I].scriptRank)),h.hidden_script&&(T=h.forum===this.ffuid||M,O=h.originalName.match(/^whitelist\[([^\]]*)]/i),O&&(h.name===h.originalName&&(h.name=h.name.replace(O[0],"").trim()),T||(T=O[1].toLowerCase().split(",").includes(r)))),u.includes(h.script_type)&&(!h.hidden_script||T)))}splitTabs(t){let r={};return t.forEach(i=>{r.hasOwnProperty(i.tab)||(r[i.tab]=[]),r[i.tab].push(i)}),r}getListInputsObservable(){return this.listInputsSubject.asObservable()}pushListInputs(t){this.listInputsSubject.next(t),this.listInputs=t}get listInputs(){return this.listInputsData}set listInputs(t){this.listInputsData=t}getScript(t,r,i){var e=this;return(0,s.Z)(function*(){const c=yield e.getData(r,i),u=yield e.getScriptPermissions();return[(yield e.getAllScripts(r,i)).find(I=>I.scriptId===t),c.scriptSettings.find(I=>I.scriptId===t)?.settings||"{}",c.scriptInstalledList.includes(t),u[`script${t}`]||{scriptId:t,manage:!1,edit:!1}]})()}getScriptsByAuthor(t){var r=this;return(0,s.Z)(function*(){return(yield r.getData(t,o.D7.USER,!0)).scriptList.filter(e=>e.forum===t)})()}updateInstalledScriptSettings(t,r,i,e){const c=this.createCacheKey(t,r);if(this.cache[c]){let u=this.cache[c].scriptSettings.find(I=>I.scriptId=i);u?u.settings=e:this.cache[c].scriptSettings.push({scriptId:i,settings:e})}}getAllScripts(t,r){var i=this;return(0,s.Z)(function*(){if(t||(t=i.ffuid,r=o.D7.USER),i.allScriptCache.hasOwnProperty(t))return i.allScriptCache[t];const e=yield i.getData(t,r,!0);return i.allScriptCache[t]=i.filterType(e.scriptList,t,null)})()}getScriptPermissions(){var t=this;return(0,s.Z)(function*(){const r=t.scriptPermissions||(yield t.getData(t.ffuid,o.D7.USER)).scriptPermissions;let i={};return r.forEach(e=>{e.manage.includes(t.ffuid)&&(i[`script${e.scriptId}`]={scriptId:e.scriptId,manage:!0,edit:!1}),e.edit.includes(t.ffuid)&&(i.hasOwnProperty(`script${e.scriptId}`)?i[`script${e.scriptId}`].edit=!0:i[`script${e.scriptId}`]={scriptId:e.scriptId,manage:!1,edit:!0})}),i})()}updateScript(t,r){if(!this.scriptList)return;const i=this.scriptList.findIndex(e=>e.scriptId===r);if(i){const e=this.scriptList[i].parentIdList.filter(c=>!t.deps.includes(c));for(const c of e){const u=this.scriptList.find(I=>I.scriptId===c);u&&this.removeChildFromParent(u,c)}Object.assign(this.scriptList[i],t),this.scriptList[i].originalName=t.name,this.parseScript(this.scriptList[i]),this.clearCache(!1)}}removeScript(t){if(!this.scriptList)return;const r=this.scriptList.findIndex(i=>i.scriptId===t);if(r){for(const i of this.scriptList[r].childIdList){const e=this.scriptList.find(c=>c.scriptId===i);e&&this.removeChildFromParent(e,t)}this.scriptList.splice(r,1),this.clearCache(!1)}}removeChildFromParent(t,r){const i=t.childIdList.indexOf(r);t.childIdList.splice(i,1),t.childNameList.splice(i,1)}clearCache(t=!0){this.cache={},this.allScriptCache={},t&&(this.scriptList=void 0,this.scriptPermissions=void 0)}get settingsOptions(){return this.preferencesService.getItem(S.Ye.SCRIPT_SETTINGS_OPTIONS)||P.iK}set settingsOptions(t){this.preferencesService.setItem(S.Ye.SCRIPT_SETTINGS_OPTIONS,t)}ngOnDestroy(){this.profileSubscription.unsubscribe()}}return m.\u0275fac=function(t){return new(t||m)(p.LFG(E.J),p.LFG(R.d),p.LFG(l.H),p.LFG(g.y))},m.\u0275prov=p.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);
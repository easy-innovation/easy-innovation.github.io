"use strict";(self.webpackChunkboard=self.webpackChunkboard||[]).push([[934],{2365:(C,h,n)=>{n.d(h,{s:()=>d});var _=n(5861),l=n(1309),e=n(4650),v=n(586),a=n(8367),p=n(3450);const c=["modal"];let d=(()=>{class u{constructor(t,r){this.scriptDevService=t,this.toastService=r,this.scriptName="",this.scriptId=0,this.cachePendingEvent=new e.vpe,this.pendingRequest=!1}ngOnInit(){}open(){this.modalComponent.open()}deleteCache(){var t=this;return(0,_.Z)(function*(){t.pendingRequest?t.toastService.advice(l.V.REQUEST_PENDING):(t.pendingRequest=!0,t.cachePendingEvent.emit(t.scriptId),t.modalComponent.close("Cache button click"),t.scriptId>0&&(yield t.scriptDevService.deleteScriptCache(t.scriptId))?t.toastService.show({content:`Cache dello script <strong>${t.scriptName}</strong> cancellata correttamente!`}):t.toastService.advice(l.V.GENERIC),t.pendingRequest=!1,t.cachePendingEvent.emit(0))})()}}return u.\u0275fac=function(t){return new(t||u)(e.Y36(v.N),e.Y36(a.k))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-script-dev-cache"]],viewQuery:function(t,r){if(1&t&&e.Gf(c,5),2&t){let o;e.iGM(o=e.CRH())&&(r.modalComponent=o.first)}},inputs:{scriptName:"scriptName",scriptId:"scriptId"},outputs:{cachePendingEvent:"cachePendingEvent"},decls:35,vars:4,consts:[["title","Cache degli script",3,"disableCloseButton"],["modal",""],[1,"fst-italic"],[1,"text-uppercase","fw-bold","text-decoration-underline",3,"innerText"],[3,"innerText"],["footer",""],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"disabled","click"]],template:function(t,r){if(1&t){const o=e.EpF();e.TgZ(0,"app-modal",0,1)(2,"p"),e._uU(3," Al fine di garantire che gli script vengano serviti rapidamente e per evitare carichi eccessivi sul server, i file javascript indicati nelle impostazioni degli script sono sottoposti a cache. In genere, ci\xf2 non rappresenta un problema e non viene notato n\xe9 dagli sviluppatori n\xe9 dagli utenti. "),e.qZA(),e.TgZ(4,"h6",2),e._uU(5,"Aggiornare la cache"),e.qZA(),e.TgZ(6,"p"),e._uU(7," Quando viene effettuata una modifica al file javascript, se questo \xe8 caricato sulle repositories di git appositamente pensate e dedicate a questo scopo, la cache dello script viene "),e.TgZ(8,"strong"),e._uU(9,"automaticamente"),e.qZA(),e._uU(10," aggiornata. Nonostante ci\xf2, in alcune limitate circostanze, ad esempio in caso di modifiche "),e.TgZ(11,"em"),e._uU(12,"breaking"),e.qZA(),e._uU(13," o essenziali per il funzionamento dello script stesso, pu\xf2 risultare necessario forzare l'aggiornamento della cache. Per fare ci\xf2, \xe8 sufficiente cliccare sul pulsante "),e.TgZ(14,"em"),e._uU(15,"Conferma"),e.qZA(),e._uU(16," nel footer, dopo essersi accertati che lo script selezionato sia effettivamente quello di cui si desidera aggiornare la cache."),e._UZ(17,"br")(18,"br"),e._uU(19," Lo strumento di aggiornamento della cache comporta un carico aggiuntivo sul server, per questo motivo dovrebbe essere "),e.TgZ(20,"strong"),e._uU(21,"usato con parsimonia."),e.qZA()(),e.TgZ(22,"h6",2),e._uU(23,"Riepologo script"),e.qZA(),e.TgZ(24,"p"),e._uU(25," Proseguendo, verr\xe0 aggiornata la cache dello script "),e._UZ(26,"span",3),e._uU(27," (ID: "),e._UZ(28,"span",4),e._uU(29,"). "),e.qZA(),e.ynx(30,5),e.TgZ(31,"button",6),e.NdJ("click",function(){e.CHM(o);const s=e.MAs(1);return e.KtG(s.close("Close click"))}),e._uU(32,"Annulla"),e.qZA(),e.TgZ(33,"button",7),e.NdJ("click",function(){return r.deleteCache()}),e._uU(34,"Conferma"),e.qZA(),e.BQk(),e.qZA()}2&t&&(e.Q6J("disableCloseButton",!0),e.xp6(26),e.Q6J("innerText",r.scriptName),e.xp6(2),e.Q6J("innerText",r.scriptId),e.xp6(5),e.Q6J("disabled",r.pendingRequest))},dependencies:[p.z]}),u})()},5667:(C,h,n)=>{n.d(h,{U:()=>v});var _=n(6895),l=n(582),e=n(4650);let v=(()=>{class a{}return a.\u0275fac=function(c){return new(c||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[_.ez,l.z]}),a})()},4500:(C,h,n)=>{n.d(h,{F:()=>g});var _=n(5861),l=n(1309),e=n(4650),v=n(8367),a=n(586),p=n(6895),c=n(433),d=n(3450);const u=["modal"];function E(s,D){if(1&s){const i=e.EpF();e.ynx(0),e.TgZ(1,"p"),e._uU(2," In alcune occasioni, pu\xf2 rendersi necessario procedere alla cancellazione di uno script, per sostituirlo interamente oppure perch\xe9 divenuto obsoleto a seguito dello sviluppo di altre funzioni analoghe. Per queste e altre situazioni, viene lasciata allo sviluppatore la possibilit\xe0 di rimuovere uno script creato. Una volta confermata, la cancellazione \xe8 "),e.TgZ(3,"strong"),e._uU(4,"definitiva e irreversibile"),e.qZA(),e._uU(5,". "),e.qZA(),e.TgZ(6,"h6",7),e._uU(7,"Cancellare uno script"),e.qZA(),e.TgZ(8,"p"),e._uU(9," La cancellazione di uno script comporta la sua "),e.TgZ(10,"strong"),e._uU(11,"completa rimozione"),e.qZA(),e._uU(12," dall'elenco degli script installabili e dai forum che lo hanno gi\xe0 inserito. L'azione non pu\xf2 essere annullata, occorre pertanto prestare particolare attenzione e procedere solo se si ha la "),e.TgZ(13,"strong"),e._uU(14,"certezza"),e.qZA(),e._uU(15," di voler eliminare lo script selezionato. "),e.qZA(),e.TgZ(16,"p",8)(17,"input",9),e.NdJ("ngModelChange",function(m){e.CHM(i);const S=e.oxw();return e.KtG(S.checkboxConfirm=m)}),e.qZA(),e.TgZ(18,"label",10),e._uU(19," Cancella definitivamente lo script "),e._UZ(20,"span",11),e._uU(21," (ID: "),e._UZ(22,"span",12),e._uU(23,") "),e.qZA()(),e.BQk()}if(2&s){const i=e.oxw();e.xp6(17),e.Q6J("ngModel",i.checkboxConfirm),e.xp6(3),e.Q6J("innerText",i.scriptName),e.xp6(2),e.Q6J("innerText",i.scriptId)}}function t(s,D){if(1&s&&(e.TgZ(0,"div",13)(1,"p",14),e._uU(2," Cancellazione script "),e._UZ(3,"span",15),e.qZA(),e.TgZ(4,"p"),e._uU(5," Per terminare la cancellazione dello script "),e._UZ(6,"strong",12),e._uU(7),e.TgZ(8,"em"),e._uU(9,"Cancella"),e.qZA(),e._uU(10,". "),e.TgZ(11,"strong"),e._uU(12,"Non vi saranno altre richieste di conferma!"),e.qZA(),e._uU(13," Procedi solo se sei sicuro di voler rimuovere "),e.TgZ(14,"strong"),e._uU(15,"definitivamente"),e.qZA(),e._uU(16," lo script. "),e.qZA()()),2&s){const i=e.oxw();e.xp6(3),e.Q6J("innerText",i.scriptName),e.xp6(3),e.Q6J("innerText",i.scriptName),e.xp6(1),e.hij(" (ID: ",i.scriptId,") premi sul pulsante ")}}function r(s,D){if(1&s){const i=e.EpF();e.ynx(0),e.TgZ(1,"button",16),e.NdJ("click",function(){e.CHM(i);const m=e.oxw();return e.KtG(m.continueConfirm=m.checkboxConfirm)}),e._uU(2,"Procedi"),e.qZA(),e.BQk()}if(2&s){const i=e.oxw();e.xp6(1),e.Q6J("disabled",i.pendingRequest||!i.checkboxConfirm)}}function o(s,D){if(1&s){const i=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(i);const m=e.oxw();return e.KtG(m.deleteScript())}),e._uU(1,"Cancella"),e.qZA()}if(2&s){const i=e.oxw();e.Q6J("disabled",i.pendingRequest)}}let g=(()=>{class s{constructor(i,f){this.toastService=i,this.scriptDevService=f,this.scriptName="",this.scriptId=0,this.deletionPendingEvent=new e.vpe,this.deletionScriptEvent=new e.vpe,this.pendingRequest=!1,this.checkboxConfirm=!1,this.continueConfirm=!1}ngOnInit(){}open(){this.reset(),this.modalComponent.open()}reset(){this.checkboxConfirm=!1,this.continueConfirm=!1}deleteScript(){var i=this;return(0,_.Z)(function*(){i.checkboxConfirm&&i.continueConfirm&&(i.pendingRequest?i.toastService.advice(l.V.REQUEST_PENDING):(i.pendingRequest=!0,i.deletionPendingEvent.emit(i.scriptId),i.modalComponent.close("Delete button click"),i.scriptId>0&&(yield i.scriptDevService.deleteScript(i.scriptId))?(i.toastService.show({content:`Script <strong>${i.scriptName}</strong> cancellato correttamente!`}),i.deletionScriptEvent.emit(i.scriptId)):i.toastService.advice(l.V.GENERIC),i.pendingRequest=!1,i.deletionPendingEvent.emit(0)))})()}}return s.\u0275fac=function(i){return new(i||s)(e.Y36(v.k),e.Y36(a.N))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-script-dev-deletion"]],viewQuery:function(i,f){if(1&i&&e.Gf(u,5),2&i){let m;e.iGM(m=e.CRH())&&(f.modalComponent=m.first)}},inputs:{scriptName:"scriptName",scriptId:"scriptId"},outputs:{deletionPendingEvent:"deletionPendingEvent",deletionScriptEvent:"deletionScriptEvent"},decls:11,vars:5,consts:[["title","Cancellazione script",3,"disableCloseButton"],["modal",""],[4,"ngIf","ngIfElse"],["advice",""],["footer",""],["type","button",1,"btn","btn-secondary",3,"click"],["deleteButton",""],[1,"fst-italic"],[1,"form-check"],["type","checkbox","id","remove-script",1,"form-check-input",3,"ngModel","ngModelChange"],["for","remove-script",1,"form-check-label"],[1,"text-uppercase","fw-bold","text-decoration-underline",3,"innerText"],[3,"innerText"],[1,"alert","alert-danger","mb-0"],[1,"text-center","fw-bold"],[1,"text-uppercase",3,"innerText"],["type","button",1,"btn","btn-primary",3,"disabled","click"]],template:function(i,f){if(1&i){const m=e.EpF();e.TgZ(0,"app-modal",0,1),e.YNc(2,E,24,3,"ng-container",2),e.YNc(3,t,17,3,"ng-template",null,3,e.W1O),e.ynx(5,4),e.TgZ(6,"button",5),e.NdJ("click",function(){e.CHM(m);const U=e.MAs(1);return e.KtG(U.close("Close click"))}),e._uU(7,"Annulla"),e.qZA(),e.YNc(8,r,3,1,"ng-container",2),e.YNc(9,o,2,1,"ng-template",null,6,e.W1O),e.BQk(),e.qZA()}if(2&i){const m=e.MAs(4),S=e.MAs(10);e.Q6J("disableCloseButton",!0),e.xp6(2),e.Q6J("ngIf",!f.continueConfirm)("ngIfElse",m),e.xp6(6),e.Q6J("ngIf",!f.continueConfirm)("ngIfElse",S)}},dependencies:[p.O5,c.Wl,c.JJ,c.On,d.z]}),s})()},3735:(C,h,n)=>{n.d(h,{a:()=>a});var _=n(6895),l=n(433),e=n(582),v=n(4650);let a=(()=>{class p{}return p.\u0275fac=function(d){return new(d||p)},p.\u0275mod=v.oAB({type:p}),p.\u0275inj=v.cJS({imports:[_.ez,l.u5,e.z]}),p})()},586:(C,h,n)=>{n.d(h,{N:()=>d});var _=n(5861),l=n(4650),e=n(5395),v=n(3138),a=n(7251),p=n(7795),c=n(7163);let d=(()=>{class u{constructor(t,r,o,g,s){this.graphqlService=t,this.globalsService=r,this.forumService=o,this.userService=g,this.scriptListService=s,this.statsQuery="query ScriptStats {\n        scriptStats {\n            scriptId\n            entities {\n                targetId\n                targetType\n            }\n        }\n    }",this.deleteCacheQuery="mutation DeleteScriptCache($scriptId: Int!) {\n        delCache(id: $scriptId)\n    }",this.scriptUpsertMutation="mutation ScriptUpsert($scriptDetails: ScriptDetails!, $scriptId: Int) {\n        scriptUpsert(scriptDetails: $scriptDetails, scriptId: $scriptId)\n    }",this.delScriptMutation="mutation DelScript($scriptId: Int!) {\n        delScript(scriptId: $scriptId)\n    }",this.ffuid="",this.cache={},this.statsDetailsCache={},this.profileSubscription=this.globalsService.profileObservable.subscribe(D=>{this.ffuid=D?.user.ffuid||""})}getStats(){var t=this;return(0,_.Z)(function*(){if(t.cache[t.ffuid])return t.cache[t.ffuid];const r=(yield t.graphqlService.query({query:t.statsQuery})).data;return t.cache[t.ffuid]=r.scriptStats})()}deleteScriptCache(t){var r=this;return(0,_.Z)(function*(){return(yield r.graphqlService.mutate({mutation:r.deleteCacheQuery,variables:{scriptId:t}})).data.delCache})()}getScriptStatsDetails(t){var r=this;return(0,_.Z)(function*(){let o=`${r.ffuid}script${t.scriptId}`;if(r.statsDetailsCache[o])return[r.statsDetailsCache[o].users,r.statsDetailsCache[o].forums];const[g,s]=yield Promise.all([t.users.length>0?r.userService.getDetailsFromUids(t.users):[],t.forums.length>0?r.forumService.getDomains(t.forums):[]]);return r.statsDetailsCache[o]={users:g,forums:s},[g,s]})()}updateScript(t,r){var o=this;return(0,_.Z)(function*(){const g=(yield o.graphqlService.mutate({mutation:o.scriptUpsertMutation,variables:{scriptDetails:t,scriptId:r}})).data.scriptUpsert;return g&&o.scriptListService.updateScript(t,r),g})()}createScript(t){var r=this;return(0,_.Z)(function*(){const o=(yield r.graphqlService.mutate({mutation:r.scriptUpsertMutation,variables:{scriptDetails:t}})).data.scriptUpsert;return o&&r.scriptListService.clearCache(),o})()}deleteScript(t){var r=this;return(0,_.Z)(function*(){const o=(yield r.graphqlService.mutate({mutation:r.delScriptMutation,variables:{scriptId:t}})).data.delScript;return o&&r.scriptListService.removeScript(t),o})()}ngOnDestroy(){this.profileSubscription.unsubscribe()}}return u.\u0275fac=function(t){return new(t||u)(l.LFG(e.J),l.LFG(v.d),l.LFG(a._),l.LFG(p.K),l.LFG(c.o))},u.\u0275prov=l.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},7795:(C,h,n)=>{n.d(h,{K:()=>v});var _=n(5861),l=n(4650),e=n(5395);let v=(()=>{class a{constructor(c){this.graphqlService=c,this.uidToDetailsQuery="query UserUidToDetails($uids: [ID!]!) {\n        userUidToDetails(uids: $uids) {\n            avatar,\n            nickname,\n            uid\n        }\n    }",this.userSearchByNameQuery="query UserSearchByName($name: String!) {\n        userSearchByName(name: $name) {\n            uid\n            nickname\n            avatar\n        }\n    }",this.searchByNameCache={}}getDetailsFromUids(c){var d=this;return(0,_.Z)(function*(){return(yield d.graphqlService.query({query:d.uidToDetailsQuery,variables:{uids:c}})).data.userUidToDetails})()}searchUserByName(c){var d=this;return(0,_.Z)(function*(){if(d.searchByNameCache.hasOwnProperty(c))return d.searchByNameCache[c];const u=yield d.graphqlService.query({query:d.userSearchByNameQuery,variables:{name:c}});return d.searchByNameCache[c]=u.data.userSearchByName})()}}return a.\u0275fac=function(c){return new(c||a)(l.LFG(e.J))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);
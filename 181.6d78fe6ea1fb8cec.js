"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[181],{8055:(S,C,n)=>{n.d(C,{s:()=>D});var g=n(5861),l=n(1378),e=n(5879),f=n(8413),u=n(4464),s=n(5661),E=n(8366),v=n(5290);const P=["modal"];function h(p,M){if(1&p&&(e.TgZ(0,"p"),e._uU(1," Al fine di garantire che gli script vengano serviti rapidamente e per evitare carichi eccessivi sul server, i file javascript indicati nelle impostazioni degli script sono sottoposti a cache. In genere, ci\xf2 non rappresenta un problema e non viene notato n\xe9 dagli sviluppatori n\xe9 dagli utenti. "),e.qZA(),e.TgZ(2,"h6",4),e._uU(3,"Aggiornare la cache"),e.qZA(),e.TgZ(4,"p"),e._uU(5," Quando viene effettuata una modifica al file javascript, se questo \xe8 caricato sulle repositories di git appositamente pensate e dedicate a questo scopo, la cache dello script viene "),e.TgZ(6,"strong"),e._uU(7,"automaticamente"),e.qZA(),e._uU(8," aggiornata. Nonostante ci\xf2, in alcune limitate circostanze, ad esempio in caso di modifiche "),e.TgZ(9,"em"),e._uU(10,"breaking"),e.qZA(),e._uU(11," o essenziali per il funzionamento dello script stesso, pu\xf2 risultare necessario forzare l'aggiornamento della cache. Per fare ci\xf2, \xe8 sufficiente cliccare sul pulsante "),e.TgZ(12,"em"),e._uU(13,"Conferma"),e.qZA(),e._uU(14," nel footer, dopo essersi accertati che lo script selezionato sia effettivamente quello di cui si desidera aggiornare la cache."),e._UZ(15,"br")(16,"br"),e._uU(17," Lo strumento di aggiornamento della cache comporta un carico aggiuntivo sul server, per questo motivo dovrebbe essere "),e.TgZ(18,"strong"),e._uU(19,"usato con parsimonia."),e.qZA()(),e.TgZ(20,"h6",4),e._uU(21,"Riepologo script"),e.qZA(),e.TgZ(22,"p"),e._uU(23," Proseguendo, verr\xe0 aggiornata la cache dello script "),e._UZ(24,"span",5),e._uU(25,". "),e.qZA()),2&p){const o=e.oxw();e.xp6(24),e.Q6J("innerText",o.scriptName)}}function T(p,M){if(1&p){const o=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(){e.CHM(o),e.oxw();const c=e.MAs(1);return e.KtG(c.close("Close click"))}),e._uU(1,"Annulla"),e.qZA(),e.TgZ(2,"button",7),e.NdJ("click",function(){e.CHM(o);const c=e.oxw();return e.KtG(c.deleteCache())}),e._uU(3,"Conferma"),e.qZA()}if(2&p){const o=e.oxw();e.xp6(2),e.Q6J("disabled",o.pendingRequest)}}let D=(()=>{var p;class M{constructor(t,c){this.scriptDevService=t,this.toastService=c,this.scriptName="",this.cachePendingEvent=new e.vpe,this.pendingRequest=!1}open(){this.modalComponent.open()}deleteCache(){var t=this;return(0,g.Z)(function*(){t.pendingRequest?t.toastService.advice(l.V.REQUEST_PENDING):(t.pendingRequest=!0,t.cachePendingEvent.emit(t.scriptId),t.modalComponent.close("Cache button click"),void 0!==t.scriptId&&(yield t.scriptDevService.deleteScriptCache(t.scriptId))?t.toastService.show({content:`Cache dello script <strong>${t.scriptName}</strong> cancellata correttamente!`}):t.toastService.advice(l.V.GENERIC),t.pendingRequest=!1,t.cachePendingEvent.emit())})()}}return(p=M).\u0275fac=function(t){return new(t||p)(e.Y36(f.N),e.Y36(s.k))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-script-dev-cache"]],viewQuery:function(t,c){if(1&t&&e.Gf(P,5),2&t){let m;e.iGM(m=e.CRH())&&(c.modalComponent=m.first)}},inputs:{scriptName:"scriptName",scriptId:"scriptId"},outputs:{cachePendingEvent:"cachePendingEvent"},decls:4,vars:1,consts:[["title","Cache degli script",3,"disableCloseButton"],["modal",""],["appModalBody",""],["appModalFooter",""],[1,"fst-italic"],[1,"text-uppercase","fw-bold","text-decoration-underline",3,"innerText"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"disabled","click"]],template:function(t,c){1&t&&(e.TgZ(0,"app-modal",0,1),e.YNc(2,h,26,1,"ng-template",2),e.YNc(3,T,4,1,"ng-template",3),e.qZA()),2&t&&e.Q6J("disableCloseButton",!0)},dependencies:[u.z,E.J,v.j]}),M})()},9537:(S,C,n)=>{n.d(C,{U:()=>f});var g=n(6814),l=n(4610),e=n(5879);let f=(()=>{var u;class s{}return(u=s).\u0275fac=function(v){return new(v||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[g.ez,l.z]}),s})()},6988:(S,C,n)=>{n.d(C,{F:()=>m});var g=n(5861),l=n(1378),e=n(5879),f=n(4464),u=n(8413),s=n(5661),E=n(6814),v=n(6223),P=n(8366),h=n(5290);const T=["modal"];function D(r,_){if(1&r){const a=e.EpF();e.ynx(0),e.TgZ(1,"p"),e._uU(2," In alcune occasioni, pu\xf2 rendersi necessario procedere alla cancellazione di uno script, per sostituirlo interamente oppure perch\xe9 divenuto obsoleto a seguito dello sviluppo di altre funzioni analoghe. Per queste e altre situazioni, viene lasciata allo sviluppatore la possibilit\xe0 di rimuovere uno script creato. Una volta confermata, la cancellazione \xe8 "),e.TgZ(3,"strong"),e._uU(4,"definitiva e irreversibile"),e.qZA(),e._uU(5,". "),e.qZA(),e.TgZ(6,"h6",6),e._uU(7,"Cancellare uno script"),e.qZA(),e.TgZ(8,"p"),e._uU(9," La cancellazione di uno script comporta la sua "),e.TgZ(10,"strong"),e._uU(11,"completa rimozione"),e.qZA(),e._uU(12," dall'elenco degli script installabili e dai forum che lo hanno gi\xe0 inserito. L'azione non pu\xf2 essere annullata, occorre pertanto prestare particolare attenzione e procedere solo se si ha la "),e.TgZ(13,"strong"),e._uU(14,"certezza"),e.qZA(),e._uU(15," di voler eliminare lo script selezionato. "),e.qZA(),e.TgZ(16,"p",7)(17,"input",8),e.NdJ("ngModelChange",function(d){e.CHM(a);const U=e.oxw(2);return e.KtG(U.checkboxConfirm=d)}),e.qZA(),e.TgZ(18,"label",9),e._uU(19," Cancella definitivamente lo script "),e._UZ(20,"span",10),e._uU(21),e.qZA()(),e.BQk()}if(2&r){const a=e.oxw(2);e.xp6(17),e.Q6J("ngModel",a.checkboxConfirm),e.xp6(3),e.Q6J("innerText",a.scriptName),e.xp6(1),e.hij(" (ID: ",a.scriptId,") ")}}function p(r,_){if(1&r&&(e.TgZ(0,"div",11)(1,"p",12),e._uU(2," Cancellazione script "),e._UZ(3,"span",13),e.qZA(),e.TgZ(4,"p"),e._uU(5," Per terminare la cancellazione dello script "),e._UZ(6,"strong",14),e._uU(7),e.TgZ(8,"em"),e._uU(9,"Cancella"),e.qZA(),e._uU(10,". "),e.TgZ(11,"strong"),e._uU(12,"Non vi saranno altre richieste di conferma!"),e.qZA(),e._uU(13," Procedi solo se sei sicuro di voler rimuovere "),e.TgZ(14,"strong"),e._uU(15,"definitivamente"),e.qZA(),e._uU(16," lo script. "),e.qZA()()),2&r){const a=e.oxw(2);e.xp6(3),e.Q6J("innerText",a.scriptName),e.xp6(3),e.Q6J("innerText",a.scriptName),e.xp6(1),e.hij(" (ID: ",a.scriptId,") premi sul pulsante ")}}function M(r,_){if(1&r&&(e.YNc(0,D,22,3,"ng-container",4),e.YNc(1,p,17,3,"ng-template",null,5,e.W1O)),2&r){const a=e.MAs(2),i=e.oxw();e.Q6J("ngIf",!i.continueConfirm)("ngIfElse",a)}}function o(r,_){if(1&r){const a=e.EpF();e.ynx(0),e.TgZ(1,"button",17),e.NdJ("click",function(){e.CHM(a);const d=e.oxw(2);return e.KtG(d.continueConfirm=d.checkboxConfirm)}),e._uU(2,"Procedi"),e.qZA(),e.BQk()}if(2&r){const a=e.oxw(2);e.xp6(1),e.Q6J("disabled",a.pendingRequest||!a.checkboxConfirm)}}function t(r,_){if(1&r){const a=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(a);const d=e.oxw(2);return e.KtG(d.deleteScript())}),e._uU(1,"Cancella"),e.qZA()}if(2&r){const a=e.oxw(2);e.Q6J("disabled",a.pendingRequest)}}function c(r,_){if(1&r){const a=e.EpF();e.TgZ(0,"button",15),e.NdJ("click",function(){e.CHM(a),e.oxw();const d=e.MAs(1);return e.KtG(d.close("Close click"))}),e._uU(1,"Annulla"),e.qZA(),e.YNc(2,o,3,1,"ng-container",4),e.YNc(3,t,2,1,"ng-template",null,16,e.W1O)}if(2&r){const a=e.MAs(4),i=e.oxw();e.xp6(2),e.Q6J("ngIf",!i.continueConfirm)("ngIfElse",a)}}let m=(()=>{var r;class _{constructor(i,d){this.toastService=i,this.scriptDevService=d,this.deletionPendingEvent=new e.vpe,this.deletionScriptEvent=new e.vpe,this.pendingRequest=!1,this.checkboxConfirm=!1,this.continueConfirm=!1}open(){this.reset(),this.modalComponent.open()}reset(){this.checkboxConfirm=!1,this.continueConfirm=!1}deleteScript(){var i=this;return(0,g.Z)(function*(){i.checkboxConfirm&&i.continueConfirm&&i.scriptId&&(i.pendingRequest?i.toastService.advice(l.V.REQUEST_PENDING):(i.pendingRequest=!0,i.deletionPendingEvent.emit(i.scriptId),i.modalComponent.close("Delete button click"),void 0!==i.scriptId&&(yield i.scriptDevService.deleteScript(i.scriptId))?(i.toastService.show({content:`Script <strong>${i.scriptName}</strong> cancellato correttamente!`}),i.deletionScriptEvent.emit(i.scriptId)):i.toastService.advice(l.V.GENERIC),i.pendingRequest=!1,i.deletionPendingEvent.emit()))})()}}return(r=_).\u0275fac=function(i){return new(i||r)(e.Y36(s.k),e.Y36(u.N))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-script-dev-deletion"]],viewQuery:function(i,d){if(1&i&&e.Gf(T,5),2&i){let U;e.iGM(U=e.CRH())&&(d.modalComponent=U.first)}},inputs:{scriptName:"scriptName",scriptId:"scriptId"},outputs:{deletionPendingEvent:"deletionPendingEvent",deletionScriptEvent:"deletionScriptEvent"},decls:4,vars:1,consts:[["title","Cancellazione script",3,"disableCloseButton"],["modal",""],["appModalBody",""],["appModalFooter",""],[4,"ngIf","ngIfElse"],["advice",""],[1,"fst-italic"],[1,"form-check"],["type","checkbox","id","remove-script",1,"form-check-input",3,"ngModel","ngModelChange"],["for","remove-script",1,"form-check-label"],[1,"text-uppercase","fw-bold","text-decoration-underline",3,"innerText"],[1,"alert","alert-danger","mb-0"],[1,"text-center","fw-bold"],[1,"text-uppercase",3,"innerText"],[3,"innerText"],["type","button",1,"btn","btn-secondary",3,"click"],["deleteButton",""],["type","button",1,"btn","btn-primary",3,"disabled","click"]],template:function(i,d){1&i&&(e.TgZ(0,"app-modal",0,1),e.YNc(2,M,3,2,"ng-template",2),e.YNc(3,c,5,2,"ng-template",3),e.qZA()),2&i&&e.Q6J("disableCloseButton",!0)},dependencies:[E.O5,v.Wl,v.JJ,v.On,f.z,P.J,h.j]}),_})()},232:(S,C,n)=>{n.d(C,{a:()=>u});var g=n(6814),l=n(6223),e=n(4610),f=n(5879);let u=(()=>{var s;class E{}return(s=E).\u0275fac=function(P){return new(P||s)},s.\u0275mod=f.oAB({type:s}),s.\u0275inj=f.cJS({imports:[g.ez,l.u5,e.z]}),E})()},8413:(S,C,n)=>{n.d(C,{N:()=>T});var g=n(1413),l=n(5861),e=n(8784),f=n(1410),u=n(6306),s=n(3040),E=n(6245),v=n(8418),P=n(5362),h=n(5879);let T=(()=>{var D;class p{constructor(o,t,c,m,r){this.graphqlService=o,this.globalsService=t,this.forumService=c,this.userService=m,this.scriptListService=r,this.cache={},this.statsDetailsCache={},this.profileSubscription=this.globalsService.profileObservable.subscribe(_=>{this.ffuid=null==_?void 0:_.user.ffuid})}getStats(){var o=this;return(0,l.Z)(function*(){if(!o.ffuid)return[];if(o.cache[o.ffuid])return o.cache[o.ffuid];const t=(yield o.graphqlService.query({query:s.RK})).data;return o.cache[o.ffuid]=t.scriptStats})()}deleteScriptCache(o){var t=this;return(0,l.Z)(function*(){return(yield t.graphqlService.mutate({mutation:s.rJ,variables:{scriptId:o}})).data.delCache})()}getScriptStatsDetails(o){var t=this;return(0,l.Z)(function*(){const c=`${t.ffuid}-${o.script.id}`;if((0,u.o8)(t.statsDetailsCache,c))return t.statsDetailsCache[c];const[m,r]=yield Promise.all([o.stats.users.length>0?t.userService.getDetailsFromUids(o.stats.users):[],o.stats.forums.length>0?t.forumService.getDomains(o.stats.forums):[]]);return t.statsDetailsCache[c]={users:m,forums:r}})()}upsertScript(o,t){var c=this;return(0,l.Z)(function*(){const m=(yield c.graphqlService.mutate({mutation:s.AH,variables:(0,g.Z)((0,g.Z)({},o),{},{scriptId:t})})).data.scriptUpsert;return m&&c.scriptListService.clearCache(),m})()}deleteScript(o){var t=this;return(0,l.Z)(function*(){const c=(yield t.graphqlService.mutate({mutation:s.gD,variables:{scriptId:o}})).data.delScript;return c&&t.scriptListService.clearCache(),c})()}updateScriptPermissions(o){var t=this;return(0,l.Z)(function*(){if(0===o.length)return!0;const c=P.QF(o.map((r,_)=>({operation:{name:"scriptPermission",alias:`scriptPermission${_}`},variables:{[`scriptId${_}`]:{name:"scriptId",type:"String!",value:r.scriptId},[`targetId${_}`]:{name:"targetId",type:"String!",value:r.targetId},[`action${_}`]:{name:"action",type:"ScripPermissionActionEnum!",value:r.action},[`level${_}`]:{name:"level",type:"ScripPermissionEnum!",value:r.level}}}))),m=(yield t.graphqlService.mutate({mutation:c.query,variables:c.variables})).data;return Object.values(m).every(Boolean)})()}ngOnDestroy(){this.profileSubscription.unsubscribe()}}return(D=p).\u0275fac=function(o){return new(o||D)(h.LFG(u.Jk),h.LFG(f.d),h.LFG(e._),h.LFG(v.K),h.LFG(E.o))},D.\u0275prov=h.Yz7({token:D,factory:D.\u0275fac,providedIn:"root"}),p})()}}]);
"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[181],{8055:(T,E,t)=>{t.d(E,{s:()=>v});var g=t(5861),p=t(1378),e=t(5879),f=t(8413),u=t(4464),a=t(5661);const h=["modal"];let v=(()=>{var _;class C{constructor(r,m){this.scriptDevService=r,this.toastService=m,this.scriptName="",this.cachePendingEvent=new e.vpe,this.pendingRequest=!1}ngOnInit(){}open(){this.modalComponent.open()}deleteCache(){var r=this;return(0,g.Z)(function*(){r.pendingRequest?r.toastService.advice(p.V.REQUEST_PENDING):(r.pendingRequest=!0,r.cachePendingEvent.emit(r.scriptId),r.modalComponent.close("Cache button click"),void 0!==r.scriptId&&(yield r.scriptDevService.deleteScriptCache(r.scriptId))?r.toastService.show({content:`Cache dello script <strong>${r.scriptName}</strong> cancellata correttamente!`}):r.toastService.advice(p.V.GENERIC),r.pendingRequest=!1,r.cachePendingEvent.emit())})()}}return(_=C).\u0275fac=function(r){return new(r||_)(e.Y36(f.N),e.Y36(a.k))},_.\u0275cmp=e.Xpm({type:_,selectors:[["app-script-dev-cache"]],viewQuery:function(r,m){if(1&r&&e.Gf(h,5),2&r){let o;e.iGM(o=e.CRH())&&(m.modalComponent=o.first)}},inputs:{scriptName:"scriptName",scriptId:"scriptId"},outputs:{cachePendingEvent:"cachePendingEvent"},decls:33,vars:3,consts:[["title","Cache degli script",3,"disableCloseButton"],["modal",""],[1,"fst-italic"],[1,"text-uppercase","fw-bold","text-decoration-underline",3,"innerText"],["footer",""],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"disabled","click"]],template:function(r,m){if(1&r){const o=e.EpF();e.TgZ(0,"app-modal",0,1)(2,"p"),e._uU(3," Al fine di garantire che gli script vengano serviti rapidamente e per evitare carichi eccessivi sul server, i file javascript indicati nelle impostazioni degli script sono sottoposti a cache. In genere, ci\xf2 non rappresenta un problema e non viene notato n\xe9 dagli sviluppatori n\xe9 dagli utenti. "),e.qZA(),e.TgZ(4,"h6",2),e._uU(5,"Aggiornare la cache"),e.qZA(),e.TgZ(6,"p"),e._uU(7," Quando viene effettuata una modifica al file javascript, se questo \xe8 caricato sulle repositories di git appositamente pensate e dedicate a questo scopo, la cache dello script viene "),e.TgZ(8,"strong"),e._uU(9,"automaticamente"),e.qZA(),e._uU(10," aggiornata. Nonostante ci\xf2, in alcune limitate circostanze, ad esempio in caso di modifiche "),e.TgZ(11,"em"),e._uU(12,"breaking"),e.qZA(),e._uU(13," o essenziali per il funzionamento dello script stesso, pu\xf2 risultare necessario forzare l'aggiornamento della cache. Per fare ci\xf2, \xe8 sufficiente cliccare sul pulsante "),e.TgZ(14,"em"),e._uU(15,"Conferma"),e.qZA(),e._uU(16," nel footer, dopo essersi accertati che lo script selezionato sia effettivamente quello di cui si desidera aggiornare la cache."),e._UZ(17,"br")(18,"br"),e._uU(19," Lo strumento di aggiornamento della cache comporta un carico aggiuntivo sul server, per questo motivo dovrebbe essere "),e.TgZ(20,"strong"),e._uU(21,"usato con parsimonia."),e.qZA()(),e.TgZ(22,"h6",2),e._uU(23,"Riepologo script"),e.qZA(),e.TgZ(24,"p"),e._uU(25," Proseguendo, verr\xe0 aggiornata la cache dello script "),e._UZ(26,"span",3),e._uU(27,". "),e.qZA(),e.ynx(28,4),e.TgZ(29,"button",5),e.NdJ("click",function(){e.CHM(o);const c=e.MAs(1);return e.KtG(c.close("Close click"))}),e._uU(30,"Annulla"),e.qZA(),e.TgZ(31,"button",6),e.NdJ("click",function(){return m.deleteCache()}),e._uU(32,"Conferma"),e.qZA(),e.BQk(),e.qZA()}2&r&&(e.Q6J("disableCloseButton",!0),e.xp6(26),e.Q6J("innerText",m.scriptName),e.xp6(5),e.Q6J("disabled",m.pendingRequest))},dependencies:[u.z]}),C})()},9537:(T,E,t)=>{t.d(E,{U:()=>f});var g=t(6814),p=t(4610),e=t(5879);let f=(()=>{var u;class a{}return(u=a).\u0275fac=function(v){return new(v||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[g.ez,p.z]}),a})()},6988:(T,E,t)=>{t.d(E,{F:()=>o});var g=t(5861),p=t(1378),e=t(5879),f=t(4464),u=t(8413),a=t(5661),h=t(6814),v=t(6223);const _=["modal"];function C(n,c){if(1&n){const s=e.EpF();e.ynx(0),e.TgZ(1,"p"),e._uU(2," In alcune occasioni, pu\xf2 rendersi necessario procedere alla cancellazione di uno script, per sostituirlo interamente oppure perch\xe9 divenuto obsoleto a seguito dello sviluppo di altre funzioni analoghe. Per queste e altre situazioni, viene lasciata allo sviluppatore la possibilit\xe0 di rimuovere uno script creato. Una volta confermata, la cancellazione \xe8 "),e.TgZ(3,"strong"),e._uU(4,"definitiva e irreversibile"),e.qZA(),e._uU(5,". "),e.qZA(),e.TgZ(6,"h6",7),e._uU(7,"Cancellare uno script"),e.qZA(),e.TgZ(8,"p"),e._uU(9," La cancellazione di uno script comporta la sua "),e.TgZ(10,"strong"),e._uU(11,"completa rimozione"),e.qZA(),e._uU(12," dall'elenco degli script installabili e dai forum che lo hanno gi\xe0 inserito. L'azione non pu\xf2 essere annullata, occorre pertanto prestare particolare attenzione e procedere solo se si ha la "),e.TgZ(13,"strong"),e._uU(14,"certezza"),e.qZA(),e._uU(15," di voler eliminare lo script selezionato. "),e.qZA(),e.TgZ(16,"p",8)(17,"input",9),e.NdJ("ngModelChange",function(l){e.CHM(s);const D=e.oxw();return e.KtG(D.checkboxConfirm=l)}),e.qZA(),e.TgZ(18,"label",10),e._uU(19," Cancella definitivamente lo script "),e._UZ(20,"span",11),e._uU(21),e.qZA()(),e.BQk()}if(2&n){const s=e.oxw();e.xp6(17),e.Q6J("ngModel",s.checkboxConfirm),e.xp6(3),e.Q6J("innerText",s.scriptName),e.xp6(1),e.hij(" (ID: ",s.scriptId,") ")}}function d(n,c){if(1&n&&(e.TgZ(0,"div",12)(1,"p",13),e._uU(2," Cancellazione script "),e._UZ(3,"span",14),e.qZA(),e.TgZ(4,"p"),e._uU(5," Per terminare la cancellazione dello script "),e._UZ(6,"strong",15),e._uU(7),e.TgZ(8,"em"),e._uU(9,"Cancella"),e.qZA(),e._uU(10,". "),e.TgZ(11,"strong"),e._uU(12,"Non vi saranno altre richieste di conferma!"),e.qZA(),e._uU(13," Procedi solo se sei sicuro di voler rimuovere "),e.TgZ(14,"strong"),e._uU(15,"definitivamente"),e.qZA(),e._uU(16," lo script. "),e.qZA()()),2&n){const s=e.oxw();e.xp6(3),e.Q6J("innerText",s.scriptName),e.xp6(3),e.Q6J("innerText",s.scriptName),e.xp6(1),e.hij(" (ID: ",s.scriptId,") premi sul pulsante ")}}function r(n,c){if(1&n){const s=e.EpF();e.ynx(0),e.TgZ(1,"button",16),e.NdJ("click",function(){e.CHM(s);const l=e.oxw();return e.KtG(l.continueConfirm=l.checkboxConfirm)}),e._uU(2,"Procedi"),e.qZA(),e.BQk()}if(2&n){const s=e.oxw();e.xp6(1),e.Q6J("disabled",s.pendingRequest||!s.checkboxConfirm)}}function m(n,c){if(1&n){const s=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(s);const l=e.oxw();return e.KtG(l.deleteScript())}),e._uU(1,"Cancella"),e.qZA()}if(2&n){const s=e.oxw();e.Q6J("disabled",s.pendingRequest)}}let o=(()=>{var n;class c{constructor(i,l){this.toastService=i,this.scriptDevService=l,this.deletionPendingEvent=new e.vpe,this.deletionScriptEvent=new e.vpe,this.pendingRequest=!1,this.checkboxConfirm=!1,this.continueConfirm=!1}open(){this.reset(),this.modalComponent.open()}reset(){this.checkboxConfirm=!1,this.continueConfirm=!1}deleteScript(){var i=this;return(0,g.Z)(function*(){i.checkboxConfirm&&i.continueConfirm&&i.scriptId&&(i.pendingRequest?i.toastService.advice(p.V.REQUEST_PENDING):(i.pendingRequest=!0,i.deletionPendingEvent.emit(i.scriptId),i.modalComponent.close("Delete button click"),void 0!==i.scriptId&&(yield i.scriptDevService.deleteScript(i.scriptId))?(i.toastService.show({content:`Script <strong>${i.scriptName}</strong> cancellato correttamente!`}),i.deletionScriptEvent.emit(i.scriptId)):i.toastService.advice(p.V.GENERIC),i.pendingRequest=!1,i.deletionPendingEvent.emit()))})()}}return(n=c).\u0275fac=function(i){return new(i||n)(e.Y36(a.k),e.Y36(u.N))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-script-dev-deletion"]],viewQuery:function(i,l){if(1&i&&e.Gf(_,5),2&i){let D;e.iGM(D=e.CRH())&&(l.modalComponent=D.first)}},inputs:{scriptName:"scriptName",scriptId:"scriptId"},outputs:{deletionPendingEvent:"deletionPendingEvent",deletionScriptEvent:"deletionScriptEvent"},decls:11,vars:5,consts:[["title","Cancellazione script",3,"disableCloseButton"],["modal",""],[4,"ngIf","ngIfElse"],["advice",""],["footer",""],["type","button",1,"btn","btn-secondary",3,"click"],["deleteButton",""],[1,"fst-italic"],[1,"form-check"],["type","checkbox","id","remove-script",1,"form-check-input",3,"ngModel","ngModelChange"],["for","remove-script",1,"form-check-label"],[1,"text-uppercase","fw-bold","text-decoration-underline",3,"innerText"],[1,"alert","alert-danger","mb-0"],[1,"text-center","fw-bold"],[1,"text-uppercase",3,"innerText"],[3,"innerText"],["type","button",1,"btn","btn-primary",3,"disabled","click"]],template:function(i,l){if(1&i){const D=e.EpF();e.TgZ(0,"app-modal",0,1),e.YNc(2,C,22,3,"ng-container",2),e.YNc(3,d,17,3,"ng-template",null,3,e.W1O),e.ynx(5,4),e.TgZ(6,"button",5),e.NdJ("click",function(){e.CHM(D);const P=e.MAs(1);return e.KtG(P.close("Close click"))}),e._uU(7,"Annulla"),e.qZA(),e.YNc(8,r,3,1,"ng-container",2),e.YNc(9,m,2,1,"ng-template",null,6,e.W1O),e.BQk(),e.qZA()}if(2&i){const D=e.MAs(4),M=e.MAs(10);e.Q6J("disableCloseButton",!0),e.xp6(2),e.Q6J("ngIf",!l.continueConfirm)("ngIfElse",D),e.xp6(6),e.Q6J("ngIf",!l.continueConfirm)("ngIfElse",M)}},dependencies:[h.O5,v.Wl,v.JJ,v.On,f.z]}),c})()},232:(T,E,t)=>{t.d(E,{a:()=>u});var g=t(6814),p=t(6223),e=t(4610),f=t(5879);let u=(()=>{var a;class h{}return(a=h).\u0275fac=function(_){return new(_||a)},a.\u0275mod=f.oAB({type:a}),a.\u0275inj=f.cJS({imports:[g.ez,p.u5,e.z]}),h})()},8413:(T,E,t)=>{t.d(E,{N:()=>C});var g=t(1413),p=t(5861),e=t(8784),f=t(1410),u=t(5202),a=t(3040),h=t(6245),v=t(8418),_=t(5879);let C=(()=>{var d;class r{constructor(o,n,c,s,i){this.graphqlService=o,this.globalsService=n,this.forumService=c,this.userService=s,this.scriptListService=i,this.ffuid="",this.cache={},this.statsDetailsCache={},this.profileSubscription=this.globalsService.profileObservable.subscribe(l=>{this.ffuid=(null==l?void 0:l.user.ffuid)||""})}getStats(){var o=this;return(0,p.Z)(function*(){if(o.cache[o.ffuid])return o.cache[o.ffuid];const n=(yield o.graphqlService.query({query:a.n8})).data;return o.cache[o.ffuid]=n.scriptStats})()}deleteScriptCache(o){var n=this;return(0,p.Z)(function*(){return(yield n.graphqlService.mutate({mutation:a.xt,variables:{scriptId:o}})).data.delCache})()}getScriptStatsDetails(o){var n=this;return(0,p.Z)(function*(){let c=`${n.ffuid}-${o.script.id}`;if(n.statsDetailsCache.hasOwnProperty(c))return n.statsDetailsCache[c];const[s,i]=yield Promise.all([o.stats.users.length>0?n.userService.getDetailsFromUids(o.stats.users):[],o.stats.forums.length>0?n.forumService.getDomains(o.stats.forums):[]]);return n.statsDetailsCache[c]={users:s,forums:i}})()}upsertScript(o,n){var c=this;return(0,p.Z)(function*(){const s=(yield c.graphqlService.mutate({mutation:a.Ry,variables:(0,g.Z)((0,g.Z)({},o),{},{scriptId:n})})).data.scriptUpsert;return s&&c.scriptListService.clearCache(),s})()}deleteScript(o){var n=this;return(0,p.Z)(function*(){const c=(yield n.graphqlService.mutate({mutation:a.HF,variables:{scriptId:o}})).data.delScript;return c&&n.scriptListService.clearCache(),c})()}ngOnDestroy(){this.profileSubscription.unsubscribe()}}return(d=r).\u0275fac=function(o){return new(o||d)(_.LFG(u.Jk),_.LFG(f.d),_.LFG(e._),_.LFG(v.K),_.LFG(h.o))},d.\u0275prov=_.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),r})()}}]);
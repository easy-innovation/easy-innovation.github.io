"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[252],{7968:(F,b,a)=>{a.r(b),a.d(b,{ScriptSettingsModule:()=>fe});var x=a(9090),m=a(6814),_=a(1049),A=a(259),d=a(6223),C=a(4853),f=a(4610),v=a(2655),q=a(1874),c=a(5861),g=a(1378),p=a(1410),u=a(7165),S=a(6245),y=a(9246),I=a(137),Z=a(3729),P=a(2096),J=a(4664),N=a(5661),U=a(6306),e=a(5879),O=a(3285),R=a(7429),M=a(9473),k=a(1274),Q=a(4464),L=a(8366);const Y=["modal"];function B(i,r){1&i&&(e.TgZ(0,"p"),e._uU(1," Il pannello di impostazioni degli script consente di "),e.TgZ(2,"strong"),e._uU(3,"gestire gli aspetti personalizzabili"),e.qZA(),e._uU(4," degli script installati su un forum o un profilo. "),e.qZA(),e.TgZ(5,"h6",3),e._uU(6,"Competenze richieste"),e.qZA(),e.TgZ(7,"p"),e._uU(8," A differenza dei precedenti sistemi, che prevedevano l'inserimento di codice nei vari pannelli amministrativi, con EasyScript non \xe8 richiesta da parte dell'account utente o dell'amministratore "),e.TgZ(9,"strong"),e._uU(10,"alcuna conoscenza"),e.qZA(),e._uU(11," in ambito di sviluppo, al pi\xf9 viene consigliato di leggere attentamente le varie "),e.TgZ(12,"strong"),e._uU(13,"guide degli script"),e.qZA(),e._uU(14,", al fine di comprenderne il corretto funzionamento. "),e.qZA(),e.TgZ(15,"h6",3),e._uU(16,"Tipi di campo generici"),e.qZA(),e.TgZ(17,"p"),e._uU(18," La maggior parte dei campi si presenta come "),e.TgZ(19,"strong"),e._uU(20,"input o textarea"),e.qZA(),e._uU(21," in cui possono essere inseriti valori numerici o testuali. Tali campi possono essere soggetti a "),e.TgZ(22,"strong"),e._uU(23,"limiti di valore o di numero dei caratteri"),e.qZA(),e._uU(24," ammessi, a discrezione del creatore dello script e in funzione del loro utilizzo. Inoltre, comunemente \xe8 possibile incontrare normali "),e.TgZ(25,"strong"),e._uU(26,"select"),e.qZA(),e._uU(27," o "),e.TgZ(28,"strong"),e._uU(29,"checkbox"),e.qZA(),e._uU(30,". I primi consentono di selezionare un'opzione tra un elenco prestabilito, mentre i secondi permettono di abilitare o disabilitare una determinata funzione. Alcuni campi sono stati pensati appositamente per i circuiti, come la "),e.TgZ(31,"strong"),e._uU(32,"lista utenti"),e.qZA(),e._uU(33," o la "),e.TgZ(34,"strong"),e._uU(35,"lista forum"),e.qZA(),e._uU(36,". In questi, \xe8 sufficiente iniziare a digitare il nome di un utente o di un forum per avviare la ricerca nel circuito di appartenenza (eventualmente selezionabile dall'apposito select, se presente) e per poterlo scegliere tra quelli proposti nel men\xf9 a tendina che appare. Una volta selezionato, l'utente o il forum apparir\xe0 nella lista sotto l'input di ricerca e potr\xe0 essere rimosso tramite l'icona rossa a forma di "),e.TgZ(37,"em"),e._uU(38,"meno"),e.qZA(),e._uU(39,". "),e.qZA(),e.TgZ(40,"h6",3),e._uU(41,"Un campo particolare: l'array"),e.qZA(),e.TgZ(42,"p",4),e._uU(43," Una particolarit\xe0 \xe8 rappresentata dai campi "),e.TgZ(44,"strong"),e._uU(45,"array"),e.qZA(),e._uU(46,", ossia dalle liste. Una lista \xe8 semplicemente un insieme ordinato di elementi. Ciascun elemento pu\xf2 contenere uno o pi\xf9 campi personalizzabili. Per "),e.TgZ(47,"strong"),e._uU(48,"aggiungere"),e.qZA(),e._uU(49," un elemento della lista \xe8 sufficiente cliccare sul pulsante blu con l'icona "),e.TgZ(50,"em"),e._uU(51,"+"),e.qZA(),e._uU(52,". Per ogni elemento, in alto a destra sono presenti le seguenti informazioni: "),e.qZA(),e.TgZ(53,"ul",4)(54,"li")(55,"em"),e._uU(56,"numero dell'elemento"),e.qZA(),e._uU(57,": indica il numero progressivo di quell'elemento nella lista; "),e.qZA(),e.TgZ(58,"li")(59,"em"),e._uU(60,"freccia verso l'alto"),e.qZA(),e._uU(61,": consente di spostare l'elemento di una posizione indietro nella lista; "),e.qZA(),e.TgZ(62,"li")(63,"em"),e._uU(64,"freccia verso il basso"),e.qZA(),e._uU(65,": consente di spostare l'elemento di una posizione avanti nella lista; "),e.qZA(),e.TgZ(66,"li")(67,"em"),e._uU(68,"x rossa"),e.qZA(),e._uU(69,": consente di eliminare l'elemento a cui si riferisce. "),e.qZA()(),e.TgZ(70,"p"),e._uU(71," Ogni elemento della lista possiede un bordo tratteggiato che assume "),e.TgZ(72,"strong"),e._uU(73,"colore verde"),e.qZA(),e._uU(74," se tutti i campi di quell'elemento soddisfano i requisiti minimi inseriti dallo sviluppatore per poter essere salvati; "),e.TgZ(75,"strong"),e._uU(76,"colore rosso"),e.qZA(),e._uU(77," se, al contrario, vi \xe8 almeno un campo non compilato correttamente."),e._UZ(78,"br"),e._uU(79," Sebbene al momento non vi siano limiti al numero di elementi che si possono aggiungere nelle liste, si consiglia di usare il buon senso, in quanto un "),e.TgZ(80,"strong"),e._uU(81,"numero eccessivo"),e.qZA(),e._uU(82," di elementi potrebbe aumentare i tempi di caricamento dello script. "),e.qZA(),e.TgZ(83,"h6",3),e._uU(84,"Pulsanti disponibili"),e.qZA(),e.TgZ(85,"p",4),e._uU(86," In fondo all'area dedicata al form con i vari campi per la personalizzazione dello script sono presenti quattro pulsanti di colore differente: "),e.qZA(),e.TgZ(87,"ul")(88,"li")(89,"em"),e._uU(90,"salva"),e.qZA(),e._uU(91,": questo pulsante consente di salvare le nuove impostazioni inserite; "),e.qZA(),e.TgZ(92,"li")(93,"em"),e._uU(94,"annulla"),e.qZA(),e._uU(95,": questo pulsante annulla la modifica delle impostazioni e indirizza alla pagina contenente la lista degli script; "),e.qZA(),e.TgZ(96,"li")(97,"em"),e._uU(98,"ripristina"),e.qZA(),e._uU(99,": cliccando questo pulsante vengono ripristinati tutti i valori di default delle varie impostazioni; "),e.qZA(),e.TgZ(100,"li")(101,"em"),e._uU(102,"valida"),e.qZA(),e._uU(103,": questo pulsante consente di controllare che i valori inseriti nei vari campi siano conformi alle specifiche richieste, ad esempio, se \xe8 obbligatoria la compilazione di un campo e questo viene lasciato vuoto, cliccando questo pulsante viene mostrato un apposito avviso. "),e.qZA()(),e.TgZ(104,"h6",3),e._uU(105,"Icone nella barra a destra"),e.qZA(),e.TgZ(106,"p",4),e._uU(107," Negli schermi di dimensioni maggiori, dove \xe8 disponibile pi\xf9 spazio, viene mostrata a destra una barra laterale con alcune "),e.TgZ(108,"strong"),e._uU(109,"icone utili"),e.qZA(),e._uU(110," per la navigazione veloce tra gli elementi della pagina: "),e.qZA(),e.TgZ(111,"ul",5)(112,"li")(113,"em"),e._uU(114,"freccia verso l'alto"),e.qZA(),e._uU(115,": questo pulsante consente di arrivare velocemente in cima alla pagina; "),e.qZA(),e.TgZ(116,"li")(117,"em"),e._uU(118,"lampadina"),e.qZA(),e._uU(119,": questa icona apre il modal contenente i suggerimenti per l'utilizzo dei vari elementi presenti nella pagina; "),e.qZA(),e.TgZ(120,"li")(121,"em"),e._uU(122,"chiave inglese"),e.qZA(),e._uU(123,": questo pulsante consente di arrivare velocemente ai pulsanti presenti sotto al form; "),e.qZA(),e.TgZ(124,"li")(125,"em"),e._uU(126,"annulla"),e.qZA(),e._uU(127,": cliccando questa icona, l'operazione di modifica delle impostazioni dello script viene annullata "),e.TgZ(128,"strong"),e._uU(129,"senza salvare alcun cambiamento"),e.qZA(),e._uU(130," e si viene indirizzati alla pagina contenente la lista di tutti gli script disponibili; "),e.qZA(),e.TgZ(131,"li")(132,"em"),e._uU(133,"conferma"),e.qZA(),e._uU(134,": questa icona consente, se cliccata, di "),e.TgZ(135,"strong"),e._uU(136,"salvare le modifiche"),e.qZA(),e._uU(137," apportate alle impostazioni dello script. "),e.qZA()())}let G=(()=>{var i;class r{open(){this.modalComponent.open()}}return(i=r).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-script-settings-infomodal"]],viewQuery:function(n,t){if(1&n&&e.Gf(Y,5),2&n){let s;e.iGM(s=e.CRH())&&(t.modalComponent=s.first)}},decls:3,vars:0,consts:[["title","Pannello impostazioni script","size","xl"],["modal",""],["appModalBody",""],[1,"fst-italic"],[1,"mb-1"],[1,"mb-0"]],template:function(n,t){1&n&&(e.TgZ(0,"app-modal",0,1),e.YNc(2,B,138,0,"ng-template",2),e.qZA())},dependencies:[Q.z,L.J]}),r})();var D=a(4143);const H=["app-script-settings-pageinfo",""];function w(i,r){1&i&&(e.TgZ(0,"span"),e._uU(1," salvato, "),e.qZA())}function K(i,r){1&i&&e._uU(0," compilati i vari campi e premuto sull'apposito pulsante per effettuare il salvataggio, ")}function V(i,r){if(1&i&&(e.TgZ(0,"span"),e._uU(1," Per maggiori informazioni \xe8 possibile consultare la "),e.TgZ(2,"a",17),e._uU(3,"guida"),e.qZA(),e._uU(4," dello script. "),e.qZA()),2&i){const o=e.oxw();e.xp6(2),e.Q6J("href",o.script.docs.link,e.LSH)}}function $(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2,"Forum:"),e.qZA(),e._UZ(3,"a",22),e.BQk()),2&i){const o=e.oxw(2);e.xp6(3),e.Q6J("href",null==o.forum?null:o.forum.url,e.LSH)("innerHTML",null==o.forum?null:o.forum.subdomain,e.oJD)}}function W(i,r){if(1&i&&(e.TgZ(0,"span"),e._uU(1,"Profilo:"),e.qZA(),e._UZ(2,"a",22)),2&i){const o=e.oxw(2);e.xp6(2),e.Q6J("href",o.credentials.user.url,e.LSH)("innerHTML",o.credentials.user.nickname,e.oJD)}}function j(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"div",18)(2,"div"),e._uU(3,"Script:"),e.qZA(),e._UZ(4,"a",19),e.qZA(),e.TgZ(5,"div",20),e.YNc(6,$,4,2,"ng-container",2),e.YNc(7,W,3,2,"ng-template",null,21,e.W1O),e.qZA(),e.BQk()),2&i){const o=e.MAs(8),n=e.oxw();e.xp6(4),e.Q6J("innerText",n.script.name)("routerLink",n.isForum?n.paths.SCRIPT_FORUM:n.paths.SCRIPT_USER)("queryParams",n.directLinkParam),e.xp6(2),e.Q6J("ngIf",n.isForum)("ngIfElse",o)}}function X(i,r){1&i&&(e.TgZ(0,"div",23),e._UZ(1,"span",24),e.qZA(),e.TgZ(2,"div",23),e._UZ(3,"span",25),e.qZA())}let ee=(()=>{var i;class r{constructor(n,t){this.scriptListService=n,this.globalsService=t,this.isForum=!1,this.directLinkParam={},this.paths=u.B2,this.readMore=D.Z;const s=this.globalsService.credentials;if(!s)throw new Error("Missing credentials!");this.credentials=s}ngOnInit(){this.settingsOptions=this.scriptListService.settingsOptions}saveSettingsOptions(){this.scriptListService.settingsOptions=this.settingsOptions}}return(i=r).\u0275fac=function(n){return new(n||i)(e.Y36(S.o),e.Y36(p.d))},i.\u0275cmp=e.Xpm({type:i,selectors:[["","app-script-settings-pageinfo",""]],inputs:{modal:"modal",script:"script",isForum:"isForum",forum:"forum",directLinkParam:"directLinkParam"},attrs:H,decls:53,vars:9,consts:[[1,"flat-container","px-3","px-md-4","py-3","target-info","min-w-0","d-flex","flex-column"],[1,"mb-2"],[4,"ngIf","ngIfElse"],["extended",""],[4,"ngIf"],["role","button",1,"d-sm-none","cursor-pointer",3,"innerText","click"],[1,"my-auto"],["placeholders",""],[1,"form-check","mb-0","mt-2"],["type","checkbox","id","redirect-back",1,"form-check-input",3,"ngModel","ngModelChange"],["for","redirect-back",1,"form-check-label"],[1,"flat-container","px-3","px-md-4","py-3","tips","min-w-0","d-none","d-sm-block"],[1,"mb-2","h5"],[1,"mb-0","mb-xl-2"],["role","button",1,"cursor-pointer","d-xl-none",3,"innerText","click"],[1,"mb-0","d-none","d-xl-block"],["role","button",1,"cursor-pointer",3,"innerText","click"],["target","_blank",3,"href"],[1,"selected-script","d-flex"],[1,"d-block","text-uppercase","text-truncate","mw-100","ms-1",3,"innerText","routerLink","queryParams"],[1,"selected-target","d-flex"],["isProfile",""],["target","_blank",1,"d-block","text-uppercase","text-truncate","mw-100","ms-1",3,"href","innerHTML"],[1,"placeholder-glow"],[1,"placeholder","col-10","col-sm-8"],[1,"placeholder","col-8","col-sm-6"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"p",1),e._uU(2," Questo pannello consente la personalizzazione delle "),e.TgZ(3,"em"),e._uU(4,"impostazioni"),e.qZA(),e._uU(5," dello script selezionato. Alcuni script, per poter funzionare correttamente, "),e.TgZ(6,"em"),e._uU(7,"richiedono"),e.qZA(),e._uU(8," all'amministratore o all'account che li ha installati di specificare alcune "),e.TgZ(9,"em"),e._uU(10,"informazioni essenziali"),e.qZA(),e._uU(11,"; altri script, al contrario, permettono un elevato grado di personalizzazione grazie alle "),e.TgZ(12,"em"),e._uU(13,"impostazioni facoltative"),e.qZA(),e._uU(14,". Una volta "),e.YNc(15,w,2,0,"span",2),e.YNc(16,K,1,0,"ng-template",null,3,e.W1O),e._uU(18," le impostazioni saranno conservate e applicate durante l'esecuzione dello script. "),e.YNc(19,V,5,1,"span",4),e.TgZ(20,"a",5),e.NdJ("click",function(){return t.modal.open()}),e.qZA()(),e.TgZ(21,"div",6),e.YNc(22,j,9,5,"ng-container",2),e.YNc(23,X,4,0,"ng-template",null,7,e.W1O),e.TgZ(25,"div",8)(26,"input",9),e.NdJ("ngModelChange",function(l){return t.settingsOptions.redirectAfterSaving=l})("ngModelChange",function(){return t.saveSettingsOptions()}),e.qZA(),e.TgZ(27,"label",10),e._uU(28," Torna alla lista script dopo il salvataggio "),e.qZA()()()(),e.TgZ(29,"div",11)(30,"div",12),e._uU(31,"Tips and tricks"),e.qZA(),e.TgZ(32,"p",13),e._uU(33," In fondo all'area dedicata al form con i vari campi per la personalizzazione dello script sono presenti quattro pulsanti di colore differente: "),e.TgZ(34,"em"),e._uU(35,"salva, annulla, ripristina e valida"),e.qZA(),e._uU(36,". Il primo consente di "),e.TgZ(37,"strong"),e._uU(38,"salvare"),e.qZA(),e._uU(39," le nuove impostazioni inserite; il secondo "),e.TgZ(40,"strong"),e._uU(41,"annulla"),e.qZA(),e._uU(42," la modifica delle impostazioni e indirizza alla pagina contenente la lista degli script; il terzo "),e.TgZ(43,"strong"),e._uU(44,"ripristina"),e.qZA(),e._uU(45," tutti i valori di default delle varie impostazioni; il quarto consente di "),e.TgZ(46,"strong"),e._uU(47,"controllare"),e.qZA(),e._uU(48," che i valori inseriti nei vari campi siano conformi alle specifiche richieste. "),e.TgZ(49,"a",14),e.NdJ("click",function(){return t.modal.open()}),e.qZA()(),e.TgZ(50,"p",15),e._uU(51," Le icone colorate sulla destra permettono una veloce navigazione nella pagina, nonch\xe9 di annullare o salvare le modifiche in qualunque momento! "),e.TgZ(52,"a",16),e.NdJ("click",function(){return t.modal.open()}),e.qZA()()()),2&n){const s=e.MAs(17),l=e.MAs(24);e.xp6(15),e.Q6J("ngIf",null==t.script||null==t.script.docs?null:t.script.docs.link)("ngIfElse",s),e.xp6(4),e.Q6J("ngIf",t.script&&t.script.docs.link),e.xp6(1),e.Q6J("innerText",t.readMore),e.xp6(2),e.Q6J("ngIf",t.script)("ngIfElse",l),e.xp6(4),e.Q6J("ngModel",t.settingsOptions.redirectAfterSaving),e.xp6(23),e.Q6J("innerText",t.readMore),e.xp6(3),e.Q6J("innerText",t.readMore)}},dependencies:[m.O5,d.Wl,d.JJ,d.On,v.rH],styles:["p[_ngcontent-%COMP%]{text-align:justify}"]}),r})();var te=a(7980);function ne(i,r){1&i&&e._UZ(0,"app-loader",2),2&i&&e.Q6J("onlyMessage",!0)}const ie=function(i){return{"d-none":i}};let oe=(()=>{var i;class r{sandboxLoaded(n){n.loading=!1}}return(i=r).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-script-settings-sandbox"]],inputs:{sandbox:"sandbox"},decls:2,vars:8,consts:[["message","Caricamento della sandbox",3,"onlyMessage",4,"ngIf"],[3,"ngClass","head","body","eventsObservable","initData","loadEvent"],["message","Caricamento della sandbox",3,"onlyMessage"]],template:function(n,t){1&n&&(e.YNc(0,ne,1,1,"app-loader",0),e.TgZ(1,"app-sandbox",1),e.NdJ("loadEvent",function(){return t.sandboxLoaded(t.sandbox)}),e.qZA()),2&n&&(e.Q6J("ngIf",t.sandbox.loading),e.xp6(1),e.Q6J("ngClass",e.VKq(6,ie,t.sandbox.loading))("head",t.sandbox.headData)("body",t.sandbox.bodyData)("eventsObservable",t.sandbox.eventObservable)("initData",t.sandbox.initData))},dependencies:[m.mk,m.O5,M.R,te.w]}),r})();function ae(i,r){1&i&&e._UZ(0,"app-script-settings-sandbox",10),2&i&&e.Q6J("sandbox",r.$implicit)}function se(i,r){1&i&&e.GkF(0)}function re(i,r){if(1&i){const o=e.EpF();e.ynx(0),e.TgZ(1,"div",11,12),e.NdJ("cancelEvent",function(){e.CHM(o);const t=e.oxw(2);return e.KtG(t.redirect())})("submitEvent",function(t){e.CHM(o);const s=e.oxw(2);return e.KtG(s.saveSettings(t))})("modelChangeEvent",function(t){e.CHM(o);const s=e.oxw(2);return e.KtG(s.onModelChange(t))})("validityChangeEvent",function(t){e.CHM(o);const s=e.oxw(2);return e.KtG(s.isFormValid=t)}),e.ynx(3,13),e.TgZ(4,"ul",14)(5,"li",15)(6,"button",16),e.NdJ("click",function(){e.CHM(o);const t=e.MAs(2);return e.KtG(t.showFieldValidationWithMessage())}),e.TgZ(7,"div",17),e._uU(8,"done_all"),e.qZA(),e.TgZ(9,"div",18),e._uU(10,"Valida"),e.qZA()()(),e.TgZ(11,"li",19)(12,"button",20),e.NdJ("click",function(){e.CHM(o);const t=e.MAs(2);return e.KtG(t.reset())}),e.TgZ(13,"div",17),e._uU(14,"replay"),e.qZA(),e.TgZ(15,"div",18),e._uU(16,"Ripristina"),e.qZA()()(),e.TgZ(17,"li",21),e.YNc(18,se,1,0,"ng-container",22),e.qZA(),e.TgZ(19,"li",23)(20,"button",24),e.NdJ("click",function(){e.CHM(o);const t=e.MAs(2);return e.KtG(t.submit())}),e.TgZ(21,"div",17),e._uU(22,"done"),e.qZA(),e.TgZ(23,"div",18),e._uU(24,"Salva"),e.qZA()()()(),e.BQk(),e.qZA(),e.TgZ(25,"app-script-form-utilities",25),e.NdJ("tipsEvent",function(){e.CHM(o),e.oxw(2);const t=e.MAs(8);return e.KtG(t.open())})("cancelEvent",function(){e.CHM(o);const t=e.oxw(2);return e.KtG(t.redirect())})("saveEvent",function(){e.CHM(o);const t=e.MAs(2);return e.KtG(t.submit())}),e.qZA(),e.BQk()}if(2&i){const o=e.MAs(2),n=e.oxw(2),t=e.MAs(10);e.xp6(1),e.Q6J("schema",n.scriptSchema)("model",n.scriptModel)("defaultModel",n.scriptDefaultModel)("validateSchema",!0)("enableModelChangeEvent",n.sandboxes.length>0),e.xp6(17),e.Q6J("ngTemplateOutlet",t),e.xp6(2),e.Q6J("disabled",!o.form.valid),e.xp6(5),e.Q6J("isFormValid",o.form.valid)}}function le(i,r){1&i&&e.GkF(0)}function ce(i,r){if(1&i){const o=e.EpF();e.ynx(0),e.TgZ(1,"div",26),e.YNc(2,le,1,0,"ng-container",22),e.qZA(),e.TgZ(3,"app-script-form-utilities",27),e.NdJ("tipsEvent",function(){e.CHM(o),e.oxw(2);const t=e.MAs(8);return e.KtG(t.open())})("cancelEvent",function(){e.CHM(o);const t=e.oxw(2);return e.KtG(t.redirect())}),e.qZA(),e.BQk()}if(2&i){e.oxw(2);const o=e.MAs(10);e.xp6(2),e.Q6J("ngTemplateOutlet",o),e.xp6(1),e.Q6J("hasForm",!1)}}function pe(i,r){if(1&i&&(e.ynx(0),e.YNc(1,ae,1,1,"app-script-settings-sandbox",8),e.YNc(2,re,26,8,"ng-container",9),e.YNc(3,ce,4,2,"ng-container",9),e.BQk()),2&i){const o=e.oxw();e.xp6(1),e.Q6J("ngForOf",o.sandboxes),e.xp6(1),e.Q6J("ngIf",o.scriptSchema),e.xp6(1),e.Q6J("ngIf",o.sandboxes.length>0&&!o.scriptSchema)}}function ue(i,r){1&i&&e._UZ(0,"app-loader",28),2&i&&e.Q6J("message","Recupero informazioni script")}function me(i,r){if(1&i){const o=e.EpF();e.TgZ(0,"button",29),e.NdJ("click",function(){e.CHM(o);const t=e.oxw();return e.KtG(t.redirect())}),e.TgZ(1,"div",17),e._uU(2,"clear"),e.qZA(),e.TgZ(3,"div",18),e._uU(4,"Annulla"),e.qZA()()}}let z=(()=>{var i;class r{constructor(n,t,s,l,h,T,ve,Se,Ze){this.activatedRoute=n,this.globalsService=t,this.router=s,this.scriptListService=l,this.scriptManagerService=h,this.toastService=T,this.tokensService=ve,this.scriptSandboxService=Se,this.changeDetectorRef=Ze,this.directLinkParam={},this.isForum=!1,this.scriptModel={},this.scriptDefaultModel={},this.isFormValid=!1,this.breadcrumbUrl=u.B2.SCRIPT_SETTINGS,this.breadcrumbNodes=[],this.sandboxes=[],this.targetType=Z.D7.USER,this.pendingRequest=!1;const E=this.globalsService.credentials;if(!E)throw new Error("Missing credentials!");this.ffuid=E.user.ffuid}ngOnInit(){var n=this;return(0,c.Z)(function*(){var t;n.forum=n.globalsService.forum;const s=n.activatedRoute.snapshot.paramMap.get("scriptId");n.targetType=(null===(t=n.activatedRoute.parent)||void 0===t?void 0:t.snapshot.data.type)||Z.D7.USER,n.isForum=n.targetType===Z.D7.FORUM,s?(n.breadcrumbNodes=[n.isForum?u.B2.SCRIPT_FORUM:u.B2.SCRIPT_USER],n.forumSubscription=n.globalsService.forumObservable.subscribe(l=>{n.forum=l,n.isForum&&(n.script=void 0,n.sandboxes=[],n.setData(s))}),yield n.setData(s)):yield n.redirect()})()}setData(n){var t=this;return(0,c.Z)(function*(){var s;if(t.targetType===Z.D7.FORUM&&!t.forum)return void(yield t.redirect());const l=yield t.scriptListService.getSingleScriptData(n,t.isForum?t.forum.cid:t.ffuid,t.targetType);if(!l)return void(yield t.redirect());const h=(null===(s=l.script)||void 0===s?void 0:s.sandboxes.filter(T=>T.inSettings))||[];if(l.installed&&(l.script.settings.schema||0!==h.length)&&l.permissions.includes(Z.Af.SETTINGS)){if(t.scriptSchema=l.script.settings.schema?JSON.parse(l.script.settings.schema):void 0,t.scriptModel=l.settings?JSON.parse(l.settings):{},t.scriptDefaultModel=JSON.parse(l.script.settings.default),t.scriptSchema&&(0,U.o8)(t.scriptSchema,"title")&&delete t.scriptSchema.title,t.directLinkParam={[u.RT.SCRIPT]:l.script.id},h.length>0){const T=yield t.tokensService.generateJwe(U.s9.SANDBOX);t.setSandboxes(h,T,l.script)}t.script=l.script,t.changeDetectorRef.detectChanges()}else yield t.redirect()})()}setSandboxes(n,t,s){(0,P.of)(...n).pipe((0,J.w)(l=>this.scriptSandboxService.create(l,{token:t,script:{id:s.id,settings:this.scriptModel,isFormValid:this.isFormValid}}))).subscribe(l=>{this.sandboxes.push(l)})}redirect(){var n=this;return(0,c.Z)(function*(){yield n.router.navigate([n.isForum?u.B2.SCRIPT_FORUM:u.B2.SCRIPT_USER])})()}saveSettings(n){var t=this;return(0,c.Z)(function*(){if(!t.pendingRequest)return t.pendingRequest=!0,t.scriptListService.settingsOptions.redirectAfterSaving&&t.redirect().then(),(yield t.scriptManagerService.editSettings(t.isForum?t.forum.cid:t.ffuid,t.targetType,t.script.id,JSON.stringify(n)))?(t.toastService.show({content:`Le impostazioni dello script <strong>${t.script.name}</strong> sono state aggiornate correttamente!`}),void(t.pendingRequest=!1)):(t.toastService.advice(g.V.GENERIC),void(t.pendingRequest=!1));t.toastService.advice(g.V.REQUEST_PENDING)})()}onModelChange(n){for(const t of this.sandboxes)t.eventSubject.next({eventType:U.Yt.SCRIPT,eventContent:{settings:n,isFormValid:this.isFormValid}})}ngOnDestroy(){var n;null===(n=this.forumSubscription)||void 0===n||n.unsubscribe()}}return(i=r).\u0275fac=function(n){return new(n||i)(e.Y36(v.gz),e.Y36(p.d),e.Y36(v.F0),e.Y36(S.o),e.Y36(y.E),e.Y36(N.k),e.Y36(U.H),e.Y36(I.s),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-script-settings"]],decls:11,vars:9,consts:[["pageTitle","Impostazioni script",1,"d-block",3,"url","nodes"],[1,"wrapper"],["app-script-settings-pageinfo","",1,"d-grid","pageinfo-container",3,"modal","script","directLinkParam","forum","isForum"],[1,"flat-container","p-3","form-container","min-w-0"],[4,"ngIf","ngIfElse"],["loader",""],["modal",""],["cancelButton",""],[3,"sandbox",4,"ngFor","ngForOf"],[4,"ngIf"],[3,"sandbox"],["app-custom-form","",3,"schema","model","defaultModel","validateSchema","enableModelChangeEvent","cancelEvent","submitEvent","modelChangeEvent","validityChangeEvent"],["customForm",""],["buttons",""],["id","form-buttons",1,"list-unstyled","d-flex","justify-content-center","flex-wrap","mb-0"],[1,"me-2","order-first"],["type","button",1,"btn","btn-indigo","d-flex","align-items-center",3,"click"],[1,"d-none","d-sm-block","material-icons"],[1,"ms-sm-1"],[1,"me-sm-auto","order-first"],["type","button",1,"btn","btn-primary","d-flex","align-items-center",3,"click"],[1,"mt-2","mt-sm-0","me-2","order-1"],[4,"ngTemplateOutlet"],[1,"mt-2","mt-sm-0","order-1"],["type","button",1,"btn","btn-success","d-flex","align-items-center",3,"disabled","click"],["buttonsId","form-buttons",3,"isFormValid","tipsEvent","cancelEvent","saveEvent"],["id","back-button",1,"d-flex","justify-content-center","mt-3"],["buttonsId","back-button",3,"hasForm","tipsEvent","cancelEvent"],[3,"message"],["type","button",1,"btn","btn-danger","d-flex","align-items-center",3,"click"]],template:function(n,t){if(1&n&&(e._UZ(0,"app-breadcrumb",0),e.TgZ(1,"div",1),e._UZ(2,"div",2),e.TgZ(3,"div",3),e.YNc(4,pe,4,3,"ng-container",4),e.YNc(5,ue,1,1,"ng-template",null,5,e.W1O),e.qZA()(),e._UZ(7,"app-script-settings-infomodal",null,6),e.YNc(9,me,5,0,"ng-template",null,7,e.W1O)),2&n){const s=e.MAs(6),l=e.MAs(8);e.Q6J("url",t.breadcrumbUrl)("nodes",t.breadcrumbNodes),e.xp6(2),e.Q6J("modal",l)("script",t.script)("directLinkParam",t.directLinkParam)("forum",t.forum)("isForum",t.isForum),e.xp6(2),e.Q6J("ngIf",t.script)("ngIfElse",s)}},dependencies:[O.L,m.sg,m.O5,m.tP,R.d,M.R,k.b,G,ee,oe],styles:['.pageinfo-container[_ngcontent-%COMP%]{margin-bottom:1rem;row-gap:1rem}#form-buttons[_ngcontent-%COMP%]:after{content:"";display:block;width:100%;order:0}@media (min-width: 576px){#form-buttons[_ngcontent-%COMP%]:after{content:none}}@media (min-width: 960px){.pageinfo-container[_ngcontent-%COMP%]{margin-bottom:1.5rem;row-gap:1.5rem}}@media (min-width: 1200px){app-breadcrumb[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]{margin-right:75px}}@media (min-width: 1300px){.pageinfo-container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);column-gap:1.5rem}}']}),r})();var de=a(7780),ge=a(3038);const _e=[{path:"",component:z,pathMatch:"full"},{matcher:i=>1===i.length&&(0,C.j)(i[0].path)?{consumed:i,posParams:{scriptId:i[0]}}:null,component:z}];let fe=(()=>{var i;class r{}return(i=r).\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[x.w,m.ez,_.I,d.u5,A.q,f.z,v.Bz.forChild(_e),de.M,ge.G,q.i]}),r})()},8418:(F,b,a)=>{a.d(b,{K:()=>C});var x=a(5861),m=a(1410),_=a(6306),d=a(5879);let C=(()=>{var f;class v extends _.KD{constructor(c,g,p){super(c,p),this.graphqlService=c,this.globalsService=g,this.requestsService=p,this.searchByNameCache={}}searchUserByName(c,g){var p=this;return(0,x.Z)(function*(){var u;g||(g=(0,_.vV)((null===(u=p.globalsService.credentials)||void 0===u?void 0:u.site.domain)||_.ig.FORUMFREE));const S=`${g}${c}`;if((0,_.o8)(p.searchByNameCache,S))return p.searchByNameCache[S];const y=yield p.graphqlService.query({query:"\nquery UserSearchByName($name: String!, $cid: String) {\n    userSearchByName(name: $name, cid: $cid) {\n        uid\n        nickname\n        avatar\n    }\n}",variables:{name:c,cid:g}});return p.searchByNameCache[S]=y.data.userSearchByName})()}}return(f=v).\u0275fac=function(c){return new(c||f)(d.LFG(_.Jk),d.LFG(m.d),d.LFG(_.r8))},f.\u0275prov=d.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),v})()}}]);
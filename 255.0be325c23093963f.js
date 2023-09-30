"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[255],{2228:(O,U,a)=>{a.r(U),a.d(U,{ScriptSettingsModule:()=>fe});var y=a(9090),m=a(6814),M=a(1059),z=a(8876),_=a(6223),b=a(4610),v=a(5861),d=a(1378),C=a(7429),E=a(1410),l=a(7165),p=a(9121),f=a(9246),h=a(137),u=a(3729),x=a(2096),g=a(4664),N=a(5661),I=a(2907),e=a(5879),A=a(8109),F=a(3285),J=a(9473),R=a(1274),Q=a(7980),k=a(4464);const D=["modal"];let L=(()=>{var i;class r{constructor(){}ngOnInit(){}open(){this.modalComponent.open()}}return(i=r).\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-script-settings-infomodal"]],viewQuery:function(t,n){if(1&t&&e.Gf(D,5),2&t){let s;e.iGM(s=e.CRH())&&(n.modalComponent=s.first)}},decls:131,vars:0,consts:[["title","Pannello impostazioni script","size","xl"],["modal",""],[1,"fst-italic"],[1,"mb-1"],[1,"mb-0"]],template:function(t,n){1&t&&(e.TgZ(0,"app-modal",0,1)(2,"p"),e._uU(3," Il pannello di impostazioni degli script consente di "),e.TgZ(4,"strong"),e._uU(5,"gestire gli aspetti personalizzabili"),e.qZA(),e._uU(6," degli script installati su un forum o un profilo. "),e.qZA(),e.TgZ(7,"h6",2),e._uU(8,"Competenze richieste"),e.qZA(),e.TgZ(9,"p"),e._uU(10," A differenza dei precedenti sistemi, che prevedevano l'inserimento di codice nei vari pannelli amministrativi, con EasyScript non \xe8 richiesta da parte dell'account utente o dell'amministratore "),e.TgZ(11,"strong"),e._uU(12,"alcuna conoscenza"),e.qZA(),e._uU(13," in ambito di sviluppo, al pi\xf9 viene consigliato di leggere attentamente le varie "),e.TgZ(14,"strong"),e._uU(15,"guide degli script"),e.qZA(),e._uU(16,", al fine di comprenderne il corretto funzionamento. "),e.qZA(),e.TgZ(17,"h6",2),e._uU(18,"Tipi di campo generici"),e.qZA(),e.TgZ(19,"p"),e._uU(20," La maggior parte dei campi si presenta come "),e.TgZ(21,"strong"),e._uU(22,"input o textarea"),e.qZA(),e._uU(23," in cui possono essere inseriti valori numerici o testuali. Tali campi possono essere soggetti a "),e.TgZ(24,"strong"),e._uU(25,"limiti di valore o di numero dei caratteri"),e.qZA(),e._uU(26," ammessi, a discrezione del creatore dello script e in funzione del loro utilizzo. Inoltre, comunemente \xe8 possibile incontrare normali "),e.TgZ(27,"strong"),e._uU(28,"select"),e.qZA(),e._uU(29," o "),e.TgZ(30,"strong"),e._uU(31,"checkbox"),e.qZA(),e._uU(32,". I primi consentono di selezionare un'opzione tra un elenco prestabilito, mentre i secondi permettono di abilitare o disabilitare una determinata funzione. "),e.qZA(),e.TgZ(33,"h6",2),e._uU(34,"Un campo particolare: l'array"),e.qZA(),e.TgZ(35,"p",3),e._uU(36," Una particolarit\xe0 \xe8 rappresentata dai campi "),e.TgZ(37,"strong"),e._uU(38,"array"),e.qZA(),e._uU(39,", ossia dalle liste. Una lista \xe8 semplicemente un insieme ordinato di elementi. Ciascun elemento pu\xf2 contenere uno o pi\xf9 campi personalizzabili. Per "),e.TgZ(40,"strong"),e._uU(41,"aggiungere"),e.qZA(),e._uU(42," un elemento della lista \xe8 sufficiente cliccare sul pulsante blu con l'icona "),e.TgZ(43,"em"),e._uU(44,"+"),e.qZA(),e._uU(45,". Per ogni elemento, in alto a destra sono presenti le seguenti informazioni: "),e.qZA(),e.TgZ(46,"ul",3)(47,"li")(48,"em"),e._uU(49,"numero dell'elemento"),e.qZA(),e._uU(50,": indica il numero progressivo di quell'elemento nella lista; "),e.qZA(),e.TgZ(51,"li")(52,"em"),e._uU(53,"freccia verso l'alto"),e.qZA(),e._uU(54,": consente di spostare l'elemento di una posizione indietro nella lista; "),e.qZA(),e.TgZ(55,"li")(56,"em"),e._uU(57,"freccia verso il basso"),e.qZA(),e._uU(58,": consente di spostare l'elemento di una posizione avanti nella lista; "),e.qZA(),e.TgZ(59,"li")(60,"em"),e._uU(61,"x rossa"),e.qZA(),e._uU(62,": consente di eliminare l'elemento a cui si riferisce. "),e.qZA()(),e.TgZ(63,"p"),e._uU(64," Ogni elemento della lista possiede un bordo tratteggiato che assume "),e.TgZ(65,"strong"),e._uU(66,"colore verde"),e.qZA(),e._uU(67," se tutti i campi di quell'elemento soddisfano i requisiti minimi inseriti dallo sviluppatore per poter essere salvati; "),e.TgZ(68,"strong"),e._uU(69,"colore rosso"),e.qZA(),e._uU(70," se, al contrario, vi \xe8 almeno un campo non compilato correttamente."),e._UZ(71,"br"),e._uU(72," Sebbene al momento non vi siano limiti al numero di elementi che si possono aggiungere nelle liste, si consiglia di usare il buon senso, in quanto un "),e.TgZ(73,"strong"),e._uU(74,"numero eccessivo"),e.qZA(),e._uU(75," di elementi potrebbe aumentare i tempi di caricamento dello script. "),e.qZA(),e.TgZ(76,"h6",2),e._uU(77,"Pulsanti disponibili"),e.qZA(),e.TgZ(78,"p",3),e._uU(79," In fondo all'area dedicata al form con i vari campi per la personalizzazione dello script sono presenti quattro pulsanti di colore differente: "),e.qZA(),e.TgZ(80,"ul")(81,"li")(82,"em"),e._uU(83,"salva"),e.qZA(),e._uU(84,": questo pulsante consente di salvare le nuove impostazioni inserite; "),e.qZA(),e.TgZ(85,"li")(86,"em"),e._uU(87,"annulla"),e.qZA(),e._uU(88,": questo pulsante annulla la modifica delle impostazioni e indirizza alla pagina contenente la lista degli script; "),e.qZA(),e.TgZ(89,"li")(90,"em"),e._uU(91,"ripristina"),e.qZA(),e._uU(92,": cliccando questo pulsante vengono ripristinati tutti i valori di default delle varie impostazioni; "),e.qZA(),e.TgZ(93,"li")(94,"em"),e._uU(95,"valida"),e.qZA(),e._uU(96,": questo pulsante consente di controllare che i valori inseriti nei vari campi siano conformi alle specifiche richieste, ad esempio, se \xe8 obbligatoria la compilazione di un campo e questo viene lasciato vuoto, cliccando questo pulsante viene mostrato un apposito avviso. "),e.qZA()(),e.TgZ(97,"h6",2),e._uU(98,"Icone nella barra a destra"),e.qZA(),e.TgZ(99,"p",3),e._uU(100," Negli schermi di dimensioni maggiori, dove \xe8 disponibile pi\xf9 spazio, viene mostrata a destra una barra laterale con alcune "),e.TgZ(101,"strong"),e._uU(102,"icone utili"),e.qZA(),e._uU(103," per la navigazione veloce tra gli elementi della pagina: "),e.qZA(),e.TgZ(104,"ul",4)(105,"li")(106,"em"),e._uU(107,"freccia verso l'alto"),e.qZA(),e._uU(108,": questo pulsante consente di arrivare velocemente in cima alla pagina; "),e.qZA(),e.TgZ(109,"li")(110,"em"),e._uU(111,"lampadina"),e.qZA(),e._uU(112,": questa icona apre il modal contenente i suggerimenti per l'utilizzo dei vari elementi presenti nella pagina; "),e.qZA(),e.TgZ(113,"li")(114,"em"),e._uU(115,"chiave inglese"),e.qZA(),e._uU(116,": questo pulsante consente di arrivare velocemente ai pulsanti presenti sotto al form; "),e.qZA(),e.TgZ(117,"li")(118,"em"),e._uU(119,"annulla"),e.qZA(),e._uU(120,": cliccando questa icona, l'operazione di modifica delle impostazioni dello script viene annullata "),e.TgZ(121,"strong"),e._uU(122,"senza salvare alcun cambiamento"),e.qZA(),e._uU(123," e si viene indirizzati alla pagina contenente la lista di tutti gli script disponibili; "),e.qZA(),e.TgZ(124,"li")(125,"em"),e._uU(126,"conferma"),e.qZA(),e._uU(127,": questa icona consente, se cliccata, di "),e.TgZ(128,"strong"),e._uU(129,"salvare le modifiche"),e.qZA(),e._uU(130," apportate alle impostazioni dello script. "),e.qZA()()())},dependencies:[k.z]}),r})();var Y=a(4143);const B=["app-script-settings-pageinfo",""];function G(i,r){1&i&&(e.TgZ(0,"span"),e._uU(1," salvato, "),e.qZA())}function H(i,r){1&i&&e._uU(0," compilati i vari campi e premuto sull'apposito pulsante per effettuare il salvataggio, ")}function w(i,r){if(1&i&&(e.TgZ(0,"span"),e._uU(1," Per maggiori informazioni \xe8 possibile consultare la "),e.TgZ(2,"a",17),e._uU(3,"guida"),e.qZA(),e._uU(4," dello script. "),e.qZA()),2&i){const o=e.oxw();e.xp6(2),e.Q6J("href",o.script.faqLink,e.LSH)}}function K(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2,"Forum:"),e.qZA(),e._UZ(3,"a",22),e.BQk()),2&i){const o=e.oxw(2);e.xp6(3),e.Q6J("href",null==o.forum?null:o.forum.url,e.LSH)("innerHTML",null==o.forum?null:o.forum.subdomain,e.oJD)}}function V(i,r){if(1&i&&(e.TgZ(0,"span"),e._uU(1,"Profilo:"),e.qZA(),e._UZ(2,"a",22)),2&i){const o=e.oxw(2);e.xp6(2),e.Q6J("href",o.credentials.user.url,e.LSH)("innerHTML",o.credentials.user.nickname,e.oJD)}}function $(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"div",18)(2,"div"),e._uU(3,"Script:"),e.qZA(),e._UZ(4,"a",19),e.qZA(),e.TgZ(5,"div",20),e.YNc(6,K,4,2,"ng-container",2),e.YNc(7,V,3,2,"ng-template",null,21,e.W1O),e.qZA(),e.BQk()),2&i){const o=e.MAs(8),t=e.oxw();e.xp6(4),e.Q6J("innerText",t.script.name)("routerLink",t.isForum?t.paths.SCRIPT_FORUM:t.paths.SCRIPT_USER)("queryParams",t.directLinkParam),e.xp6(2),e.Q6J("ngIf",t.isForum)("ngIfElse",o)}}function W(i,r){1&i&&(e.TgZ(0,"div",23),e._UZ(1,"span",24),e.qZA(),e.TgZ(2,"div",23),e._UZ(3,"span",25),e.qZA())}let j=(()=>{var i;class r{constructor(t){this.scriptListService=t,this.isForum=!1,this.directLinkParam={},this.paths=l.B2,this.readMore=Y.f}ngOnInit(){this.settingsOptions=this.scriptListService.settingsOptions}saveSettingsOptions(){this.scriptListService.settingsOptions=this.settingsOptions}}return(i=r).\u0275fac=function(t){return new(t||i)(e.Y36(p.o))},i.\u0275cmp=e.Xpm({type:i,selectors:[["","app-script-settings-pageinfo",""]],inputs:{modal:"modal",script:"script",isForum:"isForum",credentials:"credentials",forum:"forum",directLinkParam:"directLinkParam"},attrs:B,decls:53,vars:9,consts:[[1,"flat-container","px-3","px-md-4","py-3","target-info","min-w-0","d-flex","flex-column"],[1,"mb-2"],[4,"ngIf","ngIfElse"],["extended",""],[4,"ngIf"],["role","button",1,"d-sm-none","cursor-pointer",3,"innerText","click"],[1,"my-auto"],["placeholders",""],[1,"form-check","mb-0","mt-2"],["type","checkbox","id","redirect-back",1,"form-check-input",3,"ngModel","ngModelChange"],["for","redirect-back",1,"form-check-label"],[1,"flat-container","px-3","px-md-4","py-3","tips","min-w-0","d-none","d-sm-block"],[1,"mb-2","h5"],[1,"mb-0","mb-xl-2"],["role","button",1,"cursor-pointer","d-xl-none",3,"innerText","click"],[1,"mb-0","d-none","d-xl-block"],["role","button",1,"cursor-pointer",3,"innerText","click"],["target","_blank",3,"href"],[1,"selected-script","d-flex"],[1,"d-block","text-uppercase","text-truncate","mw-100","ms-1",3,"innerText","routerLink","queryParams"],[1,"selected-target","d-flex"],["isProfile",""],["target","_blank",1,"d-block","text-uppercase","text-truncate","mw-100","ms-1",3,"href","innerHTML"],[1,"placeholder-glow"],[1,"placeholder","col-10","col-sm-8"],[1,"placeholder","col-8","col-sm-6"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"p",1),e._uU(2," Questo pannello consente la personalizzazione delle "),e.TgZ(3,"em"),e._uU(4,"impostazioni"),e.qZA(),e._uU(5," dello script selezionato. Alcuni script, per poter funzionare correttamente, "),e.TgZ(6,"em"),e._uU(7,"richiedono"),e.qZA(),e._uU(8," all'amministratore o all'account che li ha installati di specificare alcune "),e.TgZ(9,"em"),e._uU(10,"informazioni essenziali"),e.qZA(),e._uU(11,"; altri script, al contrario, permettono un elevato grado di personalizzazione grazie alle "),e.TgZ(12,"em"),e._uU(13,"impostazioni facoltative"),e.qZA(),e._uU(14,". Una volta "),e.YNc(15,G,2,0,"span",2),e.YNc(16,H,1,0,"ng-template",null,3,e.W1O),e._uU(18," le impostazioni saranno conservate e applicate durante l'esecuzione dello script. "),e.YNc(19,w,5,1,"span",4),e.TgZ(20,"a",5),e.NdJ("click",function(){return n.modal.open()}),e.qZA()(),e.TgZ(21,"div",6),e.YNc(22,$,9,5,"ng-container",2),e.YNc(23,W,4,0,"ng-template",null,7,e.W1O),e.TgZ(25,"div",8)(26,"input",9),e.NdJ("ngModelChange",function(c){return n.settingsOptions.redirectAfterSaving=c})("ngModelChange",function(){return n.saveSettingsOptions()}),e.qZA(),e.TgZ(27,"label",10),e._uU(28," Torna alla lista script dopo il salvataggio "),e.qZA()()()(),e.TgZ(29,"div",11)(30,"div",12),e._uU(31,"Tips and tricks"),e.qZA(),e.TgZ(32,"p",13),e._uU(33," In fondo all'area dedicata al form con i vari campi per la personalizzazione dello script sono presenti quattro pulsanti di colore differente: "),e.TgZ(34,"em"),e._uU(35,"salva, annulla, ripristina e valida"),e.qZA(),e._uU(36,". Il primo consente di "),e.TgZ(37,"strong"),e._uU(38,"salvare"),e.qZA(),e._uU(39," le nuove impostazioni inserite; il secondo "),e.TgZ(40,"strong"),e._uU(41,"annulla"),e.qZA(),e._uU(42," la modifica delle impostazioni e indirizza alla pagina contenente la lista degli script; il terzo "),e.TgZ(43,"strong"),e._uU(44,"ripristina"),e.qZA(),e._uU(45," tutti i valori di default delle varie impostazioni; il quarto consente di "),e.TgZ(46,"strong"),e._uU(47,"controllare"),e.qZA(),e._uU(48," che i valori inseriti nei vari campi siano conformi alle specifiche richieste. "),e.TgZ(49,"a",14),e.NdJ("click",function(){return n.modal.open()}),e.qZA()(),e.TgZ(50,"p",15),e._uU(51," Le icone colorate sulla destra permettono una veloce navigazione nella pagina, nonch\xe9 di annullare o salvare le modifiche in qualunque momento! "),e.TgZ(52,"a",16),e.NdJ("click",function(){return n.modal.open()}),e.qZA()()()),2&t){const s=e.MAs(17),c=e.MAs(24);e.xp6(15),e.Q6J("ngIf",null==n.script?null:n.script.faqLink)("ngIfElse",s),e.xp6(4),e.Q6J("ngIf",n.script&&n.script.faqLink),e.xp6(1),e.Q6J("innerText",n.readMore),e.xp6(2),e.Q6J("ngIf",n.script)("ngIfElse",c),e.xp6(4),e.Q6J("ngModel",n.settingsOptions.redirectAfterSaving),e.xp6(23),e.Q6J("innerText",n.readMore),e.xp6(3),e.Q6J("innerText",n.readMore)}},dependencies:[m.O5,_.Wl,_.JJ,_.On,A.rH],styles:["p[_ngcontent-%COMP%]{text-align:justify}"]}),r})();const X=["customForm"];function ee(i,r){1&i&&e._UZ(0,"app-loader",14),2&i&&e.Q6J("onlyMessage",!0)}const te=function(i){return{"d-none":i}};function ne(i,r){if(1&i){const o=e.EpF();e.ynx(0),e.YNc(1,ee,1,1,"app-loader",12),e.TgZ(2,"app-sandbox",13),e.NdJ("loadEvent",function(){const s=e.CHM(o).$implicit,c=e.oxw(3);return e.KtG(c.sandboxLoaded(s))}),e.qZA(),e.BQk()}if(2&i){const o=r.$implicit;e.xp6(1),e.Q6J("ngIf",o.loading),e.xp6(1),e.Q6J("ngClass",e.VKq(6,te,o.loading))("head",o.headData)("body",o.bodyData)("eventsObservable",o.eventObservable)("initData",o.initData)}}function ie(i,r){if(1&i&&(e.ynx(0),e.YNc(1,ne,3,8,"ng-container",11),e.BQk()),2&i){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.sandboxes)}}function oe(i,r){1&i&&e.GkF(0)}function ae(i,r){if(1&i){const o=e.EpF();e.TgZ(0,"div",15,16),e.NdJ("cancelEvent",function(){e.CHM(o);const n=e.oxw(2);return e.KtG(n.redirect())})("submitEvent",function(n){e.CHM(o);const s=e.oxw(2);return e.KtG(s.saveSettings(n))})("modelChangeEvent",function(n){e.CHM(o);const s=e.oxw(2);return e.KtG(s.onModelChange(n))}),e.ynx(2,17),e.TgZ(3,"ul",18)(4,"li",19)(5,"button",20),e.NdJ("click",function(){e.CHM(o);const n=e.MAs(1);return e.KtG(n.showFieldValidationWithMessage())}),e.TgZ(6,"div",21),e._uU(7," done_all "),e.qZA(),e.TgZ(8,"div",22),e._uU(9,"Valida"),e.qZA()()(),e.TgZ(10,"li",23)(11,"button",24),e.NdJ("click",function(){e.CHM(o);const n=e.MAs(1);return e.KtG(n.reset())}),e.TgZ(12,"div",21),e._uU(13," replay "),e.qZA(),e.TgZ(14,"div",22),e._uU(15,"Ripristina"),e.qZA()()(),e.TgZ(16,"li",25),e.YNc(17,oe,1,0,"ng-container",26),e.qZA(),e.TgZ(18,"li",27)(19,"button",28)(20,"div",21),e._uU(21," done "),e.qZA(),e.TgZ(22,"div",22),e._uU(23,"Salva"),e.qZA()()()(),e.BQk(),e.qZA()}if(2&i){const o=e.MAs(1),t=e.oxw(2),n=e.MAs(11);e.Q6J("schema",t.scriptSchema)("model",t.scriptModel)("defaultModel",t.scriptDefaultModel)("validateSchema",!0)("enableModelChangeEvent",t.sandboxes.length>0),e.xp6(17),e.Q6J("ngTemplateOutlet",n),e.xp6(2),e.Q6J("disabled",!o.form.valid)}}function se(i,r){1&i&&e.GkF(0)}function re(i,r){if(1&i&&(e.ynx(0),e.TgZ(1,"div",29),e.YNc(2,se,1,0,"ng-container",26),e.qZA(),e.BQk()),2&i){e.oxw(2);const o=e.MAs(11);e.xp6(2),e.Q6J("ngTemplateOutlet",o)}}function le(i,r){if(1&i&&(e.ynx(0),e.YNc(1,ie,2,1,"ng-container",9),e.YNc(2,ae,24,7,"div",10),e.YNc(3,re,3,1,"ng-container",9),e.BQk()),2&i){const o=e.oxw();e.xp6(1),e.Q6J("ngIf",o.sandboxes.length>0),e.xp6(1),e.Q6J("ngIf","{}"!==o.script.settingsSchema),e.xp6(1),e.Q6J("ngIf",o.sandboxes.length>0&&"{}"===o.script.settingsSchema)}}function ce(i,r){1&i&&e._UZ(0,"app-loader",30),2&i&&e.Q6J("message","Recupero informazioni script")}function pe(i,r){if(1&i){const o=e.EpF();e.TgZ(0,"button",31),e.NdJ("click",function(){e.CHM(o);const n=e.oxw();return e.KtG(n.redirect())}),e.TgZ(1,"div",21),e._uU(2,"clear"),e.qZA(),e.TgZ(3,"div",22),e._uU(4,"Annulla"),e.qZA()()}}let P=(()=>{var i;class r{set content(t){t&&(this.formComponentRef=t,this.changeDetectorRef.detectChanges())}constructor(t,n,s,c,Z,S,T,_e,ve){this.activatedRoute=t,this.globalsService=n,this.router=s,this.scriptListService=c,this.scriptManagerService=Z,this.toastService=S,this.changeDetectorRef=T,this.tokensService=_e,this.scriptSandboxService=ve,this.directLinkParam={},this.isForum=!1,this.scriptSchema={},this.scriptModel={},this.scriptDefaultModel={},this.breadcrumbUrl=l.B2.SCRIPT_SETTINGS,this.breadcrumbNodes=[],this.sandboxes=[],this.targetType=u.D7.USER,this.toastMessage="Le impostazioni dello script <strong>{scriptName}</strong> sono state aggiornate correttamente!",this.pendingRequest=!1;const q=this.globalsService.credentials;if(!q)throw new Error("Missing credentials!");this.credentials=q,this.ffuid=q.site.short+q.user.id}ngOnInit(){var t=this;return(0,v.Z)(function*(){var n;t.forum=t.globalsService.forum,t.scriptId=t.activatedRoute.snapshot.paramMap.get("scriptId"),t.targetType=(null===(n=t.activatedRoute.parent)||void 0===n?void 0:n.snapshot.data.type)||u.D7.USER,t.isForum=t.targetType===u.D7.FORUM,t.scriptId?(t.breadcrumbNodes=[t.isForum?l.B2.SCRIPT_FORUM:l.B2.SCRIPT_USER],t.forumSubscription=t.globalsService.forumObservable.subscribe(s=>{t.forum=s,t.isForum&&(t.script=void 0,t.sandboxes=[],t.setData())}),yield t.setData()):yield t.redirect()})()}setData(){var t=this;return(0,v.Z)(function*(){if(t.targetType===u.D7.FORUM&&!t.forum)return void(yield t.redirect());const[n,s,c,Z]=yield t.scriptListService.getScript(t.scriptId,t.isForum?t.forum.cid:t.ffuid,t.targetType),S=(null==n?void 0:n.sandboxes.filter(T=>T.inSettings))||[];if(!c||!n||"{}"===n.settingsSchema&&0===S.length||t.isForum&&!t.forum.admin&&!Z.edit)yield t.redirect();else{if(t.scriptSchema=JSON.parse(n.settingsSchema),t.scriptModel=JSON.parse(s),t.scriptDefaultModel=JSON.parse(n.settingsDefault),t.scriptSchema.hasOwnProperty("title")&&delete t.scriptSchema.title,t.directLinkParam={[l.RT.SCRIPT]:n.scriptId},S.length>0){const T=yield t.tokensService.generateJwe(I.s9.SANDBOX);t.setSendboxes(S,T,n)}t.script=n}})()}setSendboxes(t,n,s){(0,x.of)(...t).pipe((0,g.w)(c=>this.scriptSandboxService.create(c,{token:n,script:{id:s.scriptId,settings:this.scriptModel,isFormValid:this.formComponentRef&&this.formComponentRef.form.valid}}))).subscribe(c=>{this.sandboxes.push(c)})}sandboxLoaded(t){t.loading=!1}redirect(){var t=this;return(0,v.Z)(function*(){yield t.router.navigate([t.isForum?l.B2.SCRIPT_FORUM:l.B2.SCRIPT_USER])})()}saveSettings(t){var n=this;return(0,v.Z)(function*(){if(!n.pendingRequest)return n.pendingRequest=!0,(yield n.scriptManagerService.editSettings(n.isForum?n.forum.cid:n.ffuid,n.targetType,n.scriptId,JSON.stringify(t)))?(n.toastService.show({content:n.toastMessage.replace("{scriptName}",n.script.name)}),n.pendingRequest=!1,void(n.scriptListService.settingsOptions.redirectAfterSaving&&(yield n.redirect()))):(n.toastService.advice(d.V.GENERIC),void(n.pendingRequest=!1));n.toastService.advice(d.V.REQUEST_PENDING)})()}onModelChange(t){for(const n of this.sandboxes)n.eventSubject.next({eventType:I.Yt.SCRIPT,eventContent:{settings:t,isFormValid:this.formComponentRef&&this.formComponentRef.form.valid}})}ngOnDestroy(){this.forumSubscription&&this.forumSubscription.unsubscribe()}}return(i=r).\u0275fac=function(t){return new(t||i)(e.Y36(A.gz),e.Y36(E.d),e.Y36(A.F0),e.Y36(p.o),e.Y36(f.E),e.Y36(N.k),e.Y36(e.sBO),e.Y36(I.H),e.Y36(h.s))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-script-settings"]],viewQuery:function(t,n){if(1&t&&e.Gf(X,5),2&t){let s;e.iGM(s=e.CRH())&&(n.content=s.first)}},decls:12,vars:13,consts:[["pageTitle","Impostazioni script",1,"d-block",3,"url","nodes"],[1,"wrapper"],["app-script-settings-pageinfo","",1,"d-grid","pageinfo-container",3,"modal","script","directLinkParam","forum","isForum","credentials"],[1,"flat-container","p-3","form-container","min-w-0"],[4,"ngIf","ngIfElse"],["loader",""],[3,"buttonsId","isFormValid","hasForm","tipsEvent","cancelEvent","saveEvent"],["modal",""],["cancelButton",""],[4,"ngIf"],["app-custom-form","",3,"schema","model","defaultModel","validateSchema","enableModelChangeEvent","cancelEvent","submitEvent","modelChangeEvent",4,"ngIf"],[4,"ngFor","ngForOf"],["message","Caricamento della sandbox",3,"onlyMessage",4,"ngIf"],[3,"ngClass","head","body","eventsObservable","initData","loadEvent"],["message","Caricamento della sandbox",3,"onlyMessage"],["app-custom-form","",3,"schema","model","defaultModel","validateSchema","enableModelChangeEvent","cancelEvent","submitEvent","modelChangeEvent"],["customForm",""],["buttons",""],["id","form-buttons",1,"list-unstyled","d-flex","justify-content-center","flex-wrap","mb-0"],[1,"me-2","order-first"],["type","button",1,"btn","btn-indigo","d-flex","align-items-center",3,"click"],[1,"d-none","d-sm-block","material-icons"],[1,"ms-sm-1"],[1,"me-sm-auto","order-first"],["type","button",1,"btn","btn-primary","d-flex","align-items-center",3,"click"],[1,"mt-2","mt-sm-0","me-2","order-1"],[4,"ngTemplateOutlet"],[1,"mt-2","mt-sm-0","order-1"],["type","submit",1,"btn","btn-success","d-flex","align-items-center",3,"disabled"],["id","back-button",1,"d-flex","justify-content-center","mt-3"],[3,"message"],["type","button",1,"btn","btn-danger","d-flex","align-items-center",3,"click"]],template:function(t,n){if(1&t){const s=e.EpF();e._UZ(0,"app-breadcrumb",0),e.TgZ(1,"div",1),e._UZ(2,"div",2),e.TgZ(3,"div",3),e.YNc(4,le,4,3,"ng-container",4),e.YNc(5,ce,1,1,"ng-template",null,5,e.W1O),e.qZA()(),e.TgZ(7,"app-script-form-utilities",6),e.NdJ("tipsEvent",function(){e.CHM(s);const Z=e.MAs(9);return e.KtG(Z.open())})("cancelEvent",function(){return n.redirect()})("saveEvent",function(){return n.formComponentRef&&n.formComponentRef.submit()}),e.qZA(),e._UZ(8,"app-script-settings-infomodal",null,7),e.YNc(10,pe,5,0,"ng-template",null,8,e.W1O)}if(2&t){const s=e.MAs(6),c=e.MAs(9);e.Q6J("url",n.breadcrumbUrl)("nodes",n.breadcrumbNodes),e.xp6(2),e.Q6J("modal",c)("script",n.script)("directLinkParam",n.directLinkParam)("forum",n.forum)("isForum",n.isForum)("credentials",n.credentials),e.xp6(2),e.Q6J("ngIf",n.script)("ngIfElse",s),e.xp6(3),e.Q6J("buttonsId",n.formComponentRef?"form-buttons":n.sandboxes.length>0&&"{}"===(null==n.script?null:n.script.settingsSchema)?"back-button":"")("isFormValid",!!n.formComponentRef&&n.formComponentRef.form.valid)("hasForm",!n.script||"{}"!==n.script.settingsSchema)}},dependencies:[F.L,m.mk,m.sg,m.O5,m.tP,C.d,J.R,R.b,Q.w,L,j],styles:['.pageinfo-container[_ngcontent-%COMP%]{margin-bottom:1rem;row-gap:1rem}#form-buttons[_ngcontent-%COMP%]:after{content:"";display:block;width:100%;order:0}@media (min-width: 576px){#form-buttons[_ngcontent-%COMP%]:after{content:none}}@media (min-width: 960px){.pageinfo-container[_ngcontent-%COMP%]{margin-bottom:1.5rem;row-gap:1.5rem}}@media (min-width: 1200px){app-breadcrumb[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]{margin-right:75px}}@media (min-width: 1300px){.pageinfo-container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr);column-gap:1.5rem}}']}),r})();var ue=a(7780),me=a(3038),de=a(1874);const ge=[{path:"",component:P,pathMatch:"full"},{matcher:i=>1!==i.length||isNaN(Number(i[0].path))?null:{consumed:i,posParams:{scriptId:i[0]}},component:P}];let fe=(()=>{var i;class r{}return(i=r).\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[y.w,m.ez,M.I,_.u5,z.q,b.z,A.Bz.forChild(ge),ue.M,me.G,de.i]}),r})()},8418:(O,U,a)=>{a.d(U,{K:()=>v});var y=a(1413),m=a(5861),M=a(2907),b=a(5879);let v=(()=>{var d;class C{constructor(l){this.graphqlService=l,this.searchByNameCache={},this.uidToDetailsCache={},this.uidToDetailsMisses=[]}getDetailsFromUids(l){var p=this;return(0,m.Z)(function*(){let f=[];const h=l.filter(u=>p.uidToDetailsCache.hasOwnProperty(u)?(f.push(p.uidToDetailsCache[u]),!1):-1===p.uidToDetailsMisses.indexOf(u));if(h.length>0){const u=yield p.graphqlService.query({query:"\nquery UserUidToDetails($uids: [String!]!) {\n    userUidToDetails(uids: $uids) {\n        avatar,\n        nickname,\n        uid\n    }\n}",variables:{uids:h}});let x=[];for(const g of u.data.userUidToDetails)p.uidToDetailsCache[g.uid]=g,f.push((0,y.Z)({},g)),x.push(g.uid);p.uidToDetailsMisses.push(...h.filter(g=>-1===x.indexOf(g)))}return f})()}searchUserByName(l){var p=this;return(0,m.Z)(function*(){if(p.searchByNameCache.hasOwnProperty(l))return p.searchByNameCache[l];const f=yield p.graphqlService.query({query:"\nquery UserSearchByName($name: String!) {\n    userSearchByName(name: $name) {\n        uid\n        nickname\n        avatar\n    }\n}",variables:{name:l}});return p.searchByNameCache[l]=f.data.userSearchByName})()}}return(d=C).\u0275fac=function(l){return new(l||d)(b.LFG(M.Jk))},d.\u0275prov=b.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),C})()}}]);
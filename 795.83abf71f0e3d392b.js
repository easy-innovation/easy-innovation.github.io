"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[795],{7980:(x,y,i)=>{i.d(y,{w:()=>c});var m=i(1413),v=i(5861),a=i(5879),f=i(9093),g=i(4004),d=i(8645),b=i(9773),S=i(836),C=i(1410),o=i(4908),r=i(6593),e=i(6814);const n=["iframe"],p=function(l){return{height:l}};let c=(()=>{class l{constructor(t,s,u){this.domSanitizer=t,this.globalsService=s,this.postMessageService=u,this.head="",this.body="",this.initData={},this.loadEvent=new a.vpe,this.sandboxId=(0,g.Z)(),this.height=1,this.componentDestroyed=new d.x,this.bsCssLink=window.location.origin+"/assets/css/bootstrap.css"}loaded(){this.iframeContent&&this.loadEvent.emit(!0)}ngOnInit(){var t=this;return(0,v.Z)(function*(){var s;const u=t.globalsService.forum?Object.assign({},t.globalsService.forum):void 0;u&&delete u.admin,t.initData=(0,m.Z)({[o.Tu.FORUM]:u,[o.Tu.PROFILE]:null===(s=t.globalsService.credentials)||void 0===s?void 0:s.user},t.initData),t.iframeContent=t.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(new Blob([`<!DOCTYPE html>\n                    <html lang="it">\n                        <head>\n                            <title></title>\n                            <link rel="stylesheet" href="${t.bsCssLink}"></link>\n                            <script>window.initData = JSON.parse('${JSON.stringify(t.initData)}');<\/script>\n                            ${t.head}\n                        </head>\n                        <body style="overflow: hidden">\n                            ${t.body}\n                            <script>\n                                let lastIframeHeight = 0;\n                                setInterval(() => {\n                                    const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight);\n                                    if (lastIframeHeight !== height) {\n                                        lastIframeHeight = height;\n                                        parent.postMessage({\n                                            id: "${t.sandboxId}",\n                                            height: height\n                                        }, "*");\n                                    }\n                                }, 100);\n                            <\/script>\n                        </body>\n                    </html>`],{type:"text/html"}))),t.setSubscriptions()})()}setSubscriptions(){this.globalsService.forumObservable.pipe((0,b.R)(this.componentDestroyed)).subscribe(t=>{const s=Object.assign({},t);null==s||delete s.admin,this.postMessageService.sendToSandbox(this.iframe.nativeElement,o.Yt.FORUM,{forum:s})}),this.globalsService.profileObservable.pipe((0,S.T)(1),(0,b.R)(this.componentDestroyed)).subscribe(t=>{this.postMessageService.sendToSandbox(this.iframe.nativeElement,o.Yt.PROFILE,{profile:t})})}ngAfterViewInit(){this.eventsObservable&&this.eventsObservable.pipe((0,b.R)(this.componentDestroyed)).subscribe(t=>{this.postMessageService.sendToSandbox(this.iframe.nativeElement,t.eventType,t.eventContent)})}ngOnDestroy(){this.componentDestroyed.next(),this.componentDestroyed.complete()}onPostMessage(t){t.data.id===this.sandboxId&&(this.height=t.data.height)}}return l.\u0275fac=function(t){return new(t||l)(a.Y36(r.H7),a.Y36(C.d),a.Y36(f.F))},l.\u0275cmp=a.Xpm({type:l,selectors:[["app-sandbox"]],viewQuery:function(t,s){if(1&t&&a.Gf(n,5),2&t){let u;a.iGM(u=a.CRH())&&(s.iframe=u.first)}},hostBindings:function(t,s){1&t&&a.NdJ("message",function(_){return s.onPostMessage(_)},!1,a.Jf7)},inputs:{head:"head",body:"body",eventsObservable:"eventsObservable",initData:"initData"},outputs:{loadEvent:"loadEvent"},decls:2,vars:4,consts:[["sandbox","allow-forms allow-scripts",3,"src","ngStyle","load"],["iframe",""]],template:function(t,s){1&t&&(a.TgZ(0,"iframe",0,1),a.NdJ("load",function(){return s.loaded()}),a.qZA()),2&t&&a.Q6J("src",s.iframeContent,a.uOi)("ngStyle",a.VKq(2,p,s.height+"px"))},dependencies:[e.PC],styles:["iframe[_ngcontent-%COMP%]{margin:0;padding:0;width:100%;display:block;border:0;min-height:0;height:auto}"]}),l})()},1874:(x,y,i)=>{i.d(y,{i:()=>a});var m=i(6814),v=i(5879);let a=(()=>{class f{}return f.\u0275fac=function(d){return new(d||f)},f.\u0275mod=v.oAB({type:f}),f.\u0275inj=v.cJS({imports:[m.ez]}),f})()},857:(x,y,i)=>{i.d(y,{Bc:()=>a,Lc:()=>g,O9:()=>S,UD:()=>d,Wf:()=>C,lw:()=>b});var m=i(3729),v=i(4004);const a=/^https:\/\/[^?]+[^?\/]+\.js(\?.+)?$/,f=/^https?:\/\/[^?]+[^?\/]+\.js(\?.+)?$/,g=/^https:\/\/[^?]+[^?\/]+\.css(\?.+)?$/,d={type:"object",required:["name","js","tab","script_type","settings_schema"],properties:{name:{type:"string",title:"Nome:"},sdesc:{type:"string",title:"Descrizione:",description:"Una descrizione accattivante incentiva gli utenti ad installare lo script!",default:""},public_link:{type:"string",title:"Link alla guida:",description:"Una guida completa \xe8 fondamentale per mostrare tutte le potenzialit\xe0 dello script!",default:"",widget:{formlyConfig:{validators:{pattern:{expression:o=>!o.value||/^https:\/\/(.+?)\.(forumfree\.it|forumcommunity\.net|blogfree\.net)\/\?t=(\d+)(#entry(\d+))?$/.test(o.value),message:(o,r)=>{var e;return`"${null===(e=r.formControl)||void 0===e?void 0:e.value}" non \xe8 un valido link alla guida!`}}}}}},preview:{type:"string",title:"Link all'anteprima (jpg, png, gif o webp):",description:"Un'anteprima perfetta riesce a mostrare in pochi secondi il funzionamento dello script!",default:"",widget:{formlyConfig:{validators:{pattern:{expression:o=>!o.value||/^https:\/\/(.+?)\.(jpg|png|gif|webp)$/.test(o.value),message:(o,r)=>{var e;return`"${null===(e=r.formControl)||void 0===e?void 0:e.value}" non \xe8 un valido link all'anteprima!`}}}}}},tab:{type:"string",title:"Tab:",oneOf:[{}],default:""},js:{type:"string",title:"Link del file javascript:",widget:{formlyConfig:{validators:{pattern:{expression:o=>!o.value||a.test(o.value),message:(o,r)=>{var e;return`"${null===(e=r.formControl)||void 0===e?void 0:e.value}" non \xe8 un file javascript valido!`}}}}}},js_beta:{type:["string","null"],title:"Link del file javascript per la versione beta (caricata solo per il dev):",widget:{formlyConfig:{validators:{pattern:{expression:o=>!o.value||f.test(o.value),message:(o,r)=>{var e;return`"${null===(e=r.formControl)||void 0===e?void 0:e.value}" non \xe8 un file javascript valido!`}}}}}},js_pos:{type:"number",title:"Posizione in cui verr\xe0 importato il file js:",oneOf:[{}],default:7},script_type:{type:"number",title:"Tipo:",oneOf:[{title:"Script per forum",const:m.AV.FORUM},{title:"Script per utenti (profilo o userscript)",const:m.AV.USER},{title:"Script per entrambi",const:m.AV.ALL}],default:0},js_sandboxes:{type:"array",title:"Lista di sandbox legate allo script (opzionali)",uniqueItems:!0,items:{type:"object",required:["value","slug"],properties:{name:{type:["string","null"],title:"Nome della sandbox:",default:""},slug:{type:"string",title:"Slug della sandbox:",description:"Lo slug viene usato per generare il link alla sandbox, se non inserita nella pagina delle impostazioni dello script. Pertanto, se verr\xe0 cambiato, [b]cambier\xe0 anche il link![/b]",widget:{formlyConfig:{hooks:{onInit:o=>{const r=o.formControl;null!=r&&r.value||null==r||r.setValue((0,v.Z)())}},validators:{pattern:{expression:o=>!o.value||/^[a-zA-Z0-9\-]+$/.test(o.value),message:(o,r)=>{var e;return`"${null===(e=r.formControl)||void 0===e?void 0:e.value}" non \xe8 uno slug valido!`}}}}}},inSettings:{type:"boolean",title:"Visualizza questa sandbox nella pagina delle impostazioni dello script",default:!1},value:{type:"array",title:"Lista di risorse js-css-html",description:"Se viene specificata una risorsa HTML, il suo contenuto sar\xe0 riportato nella sandbox.",uniqueItems:!0,items:{type:"string",title:"Link del file:",widget:{formlyConfig:{validators:{pattern:{expression:o=>!o.value||/^https:\/\//.test(o.value),message:(o,r)=>{var e;return`"${null===(e=r.formControl)||void 0===e?void 0:e.value}" non \xe8 un file valido!`}}}}}}}}}},webhook:{type:"object",title:"Impostazioni webhook (opzionali)",description:"Se lo desideri, puoi indicare un url che verr\xe0 chiamato (richiesta [i]POST[/i]) ogni volta che si verifica [i]l'evento abilitato[/i] dai checkbox seguenti, avente come payload le informazioni riguardanti l'evento (ad esempio nel caso di modifica delle impostazioni dello script verranno inviate le impostazioni dello script stesso).",widget:{formlyConfig:{props:{fieldsetTemplate:!0}}},properties:{url:{type:["string","null"],title:"Link al webhook:",widget:{formlyConfig:{validators:{pattern:{expression:o=>{if(null===o.value)return!0;let r;try{r=new URL(o.value)}catch(e){return!1}return"http:"===r.protocol||"https:"===r.protocol},message:(o,r)=>{var e;return`"${null===(e=r.formControl)||void 0===e?void 0:e.value}" non \xe8 un link valido!`}}}}}},script_settings:{type:"boolean",title:"Chiama il webhook quando vengono salvate le impostazioni",default:!1},script_manage:{type:"boolean",title:"Chiama il webhook quando lo script viene installato o disinstallato",default:!1}}},libs:{type:"array",uniqueItems:!0,title:"Librerie e framework da importare:",default:[-1],items:{type:"number",oneOf:[{title:"------",const:-1}]}},deps:{type:"array",uniqueItems:!0,title:"Script richiesti per l'installazione:",default:[-1],items:{type:"number",oneOf:[{title:"------",const:-1}]}},settings_schema:{type:"code-editor",title:"Schema JSON per le opzioni:",default:"{}",widget:{formlyConfig:{props:{editorOptions:{height:"500px"}}}}},html_head:{type:"code-editor",title:"Codice HTML che sar\xe0 mostrato nel tag HEAD (anche sul layout FFMobile):",description:"In questo campo \xe8 possibile inserire degli stili usando il tag <style>",default:"",widget:{formlyConfig:{props:{editorOptions:{language:"html"}}}}},layouts:{type:"object",title:"Compatibilit\xe0",description:"Se uno script non \xe8 compatibile con un determinato layout, in automatico [i]non[/i] verr\xe0 eseguito sui forum che possiedono tale layout.",widget:{formlyConfig:{props:{fieldsetTemplate:!0}}},properties:{quirks:{type:"boolean",title:"Compatibile con il layout Quirks",default:!1},standard:{type:"boolean",title:"Compatibile con il layout Standard",default:!0},ffmobile:{type:"boolean",title:"Compatibile con il layout FFMobile",default:!0},responsive:{type:"boolean",title:"Compatibile con il layout Responsive",default:!1}}},hidden_script:{type:"boolean",title:"Nascondi lo script dalla lista (test o script privati)",default:!1}}},b={name:"",public_link:"",sdesc:"",preview:"",js:"",js_beta:null,tab:m.tr.FFB,js_pos:7,js_sandboxes:[],script_type:0,libs:[-1],deps:[-1],settings_default:{},settings_schema:"{}",html_head:"",hidden_script:!1,demo:!1,webhook:{url:null,script_settings:!1,script_manage:!1},layouts:{quirks:!1,standard:!0,ffmobile:!0,responsive:!1}},S=[{title:"[Open] Font Awesome 4.7.0",link:"https://ffb.forumfree.net:4999/nicoxys/libs/fontawesome-4.7.0.css"},{title:"[Open] Font Awesome 5.7.0",link:"https://ffb.forumfree.net:4999/nicoxys/libs/fontawesome-5.7.0.css"},{title:"[Open] Twitter API",link:"https://platform.twitter.com/widgets.js"},{title:"[Open] AngularJS 1.7.7",link:"https://ffb.forumfree.net:4999/nicoxys/libs/angularjs-1.7.7.js"},{title:"[Open] ReactJS (w/ dom) 16.8.2",link:"https://ffb.forumfree.net:4999/nicoxys/libs/reactjs-16.8.2.js"},{title:"[Open] Popper 2.5.2",link:"https://ffb.forumfree.net:4999/nicoxys/libs/popper-2.5.2.js"},{title:"[Open] Tippy 6.2.6",link:"https://ffb.forumfree.net:4999/nicoxys/libs/tippy-6.2.6.js"},{title:"[Open] Vue.js 2.6.6",link:"https://ffb.forumfree.net:4999/nicoxys/libs/vuejs-2.6.6.js"},{title:"[Open] Mustache 3.0.1",link:"https://ffb.forumfree.net:4999/nicoxys/libs/mustache-3.0.1.js"},{title:"[Open] Handlebars 4.7.3",link:"https://ffb.forumfree.net:4999/nicoxys/libs/handlebars-4.7.3.js"},{title:"[Open] Timeago",link:"https://ffb.forumfree.net:4999/nicoxys/libs/jquery.timeago.js"},{title:"[Open] RxJS 6.5.1",link:"https://ffb.forumfree.net:4999/nicoxys/libs/rxjs-6.5.1.js"},{title:"[Open] ChartJs 2.7.2",link:"https://ffb.forumfree.net:4999/nicoxys/libs/chartjs-2.7.2.js"},{title:"[Open] Apollo Client",link:"https://ffb.forumfree.net:4999/nicoxys/libs/apollo-client-2.6.10.js"},{title:"[Private - All] Crediti in fondo al forum",link:"https://ffb.forumfree.net:4999/nicoxys/private/credits.js"},{tab:m.tr.FFB,title:"[Private - FFBoard] FFUpload",link:"https://ffb.forumfree.net:4999/nicoxys/libs/ffupload.js"},{tab:m.tr.FFB,title:"[Private - FFBoard] HelloBox",link:"https://ffb.forumfree.net:4999/nicoxys/forum/hellobox.js"}],C=[{title:"Codice HTML che sar\xe0 mostrato nel tag HEAD",position:"html_head"},{title:"[Start] Codice HTML che sar\xe0 mostrato in CIMA a tutte le pagine",position:"html_top_start"},{title:"[End] Codice HTML che sar\xe0 mostrato in CIMA a tutte le pagine",position:"html_top_end"},{title:"[Start] Codice HTML che sar\xe0 mostrato in tutte le pagine sotto il logo del sito",position:"html_logo_start"},{title:"[End] Codice HTML che sar\xe0 mostrato in tutte le pagine sotto il logo del sito",position:"html_logo_end"},{title:"[Start] Codice HTML che sar\xe0 mostrato nella homepage del sito",position:"html_home_start"},{title:"[End] Codice HTML che sar\xe0 mostrato nella homepage del sito",position:"html_home_end"},{title:"Codice HTML che sar\xe0 mostrato sopra le pubblicit\xe0",position:"html_ads_start"},{title:"[Start] Codice HTML che sar\xe0 mostrato in FONDO a tutte le pagine",position:"html_bottom_start"},{title:"[End] Codice HTML che sar\xe0 mostrato in FONDO a tutte le pagine",position:"html_bottom_end"}]},137:(x,y,i)=>{i.d(y,{s:()=>r});var m=i(857),v=i(8645),a=i(4664),f=i(2096),g=i(5879),d=i(7398),b=i(9315),C=i(9862);let o=(()=>{class e{constructor(p){this.http=p}getContentFromUrls(p){const c=p.map(l=>this.http.get(l,{responseType:"text"}).pipe((0,d.U)(h=>({source:h,resource:l}))));return(0,b.D)([...c,(0,f.of)({source:"",resource:""})]).pipe((0,a.w)(l=>{l=l.filter(s=>""!==s.resource);const h=[],t=[];return l.forEach(s=>{const u=function S(e){let n={head:"",body:""};const c=(new DOMParser).parseFromString(e.source,"text/html"),l=c.querySelector("head"),h=c.querySelector("body"),t=c.querySelector("base");if(t){const s=t.getAttribute("href")||"";c.querySelectorAll("head link, head img, head script, body link, body script, body img").forEach(_=>{const M="LINK"===_.tagName?"href":"src",E=_.getAttribute(M);if(E&&!E.startsWith("http")){let O=`${E}`;E.startsWith(s)||(O=`${s}${O}`);const D=new URL(e.resource).origin;O.startsWith("http")||(O=`${D}/${O}`),_.setAttribute(M,O)}}),t.remove()}return l&&(["meta","title","base"].forEach(s=>{l.querySelectorAll(s).forEach(_=>_.remove())}),n.head=l.innerHTML),h&&(n.body=h.innerHTML),n}(s);u.head&&h.push(u.head),u.body&&t.push(u.body)}),(0,f.of)({headData:h,bodyData:t})}))}}return e.\u0275fac=function(p){return new(p||e)(g.LFG(C.eN))},e.\u0275prov=g.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),r=(()=>{class e{constructor(p){this.sandboxService=p}create(p,c={}){const l=new v.x,h=p.value.filter(t=>!m.Bc.test(t)&&!m.Lc.test(t));return this.sandboxService.getContentFromUrls(h).pipe((0,a.w)(t=>(0,f.of)({eventSubject:l,eventObservable:l.asObservable(),loading:!0,initData:c,headData:[...p.value.map(s=>m.Bc.test(s)?`<script src='${s}'><\/script>`:m.Lc.test(s)?`<link rel="stylesheet" type="text/css" href="${s}">`:""),...t.headData].join(""),bodyData:[...t.bodyData].join("")})))}}return e.\u0275fac=function(p){return new(p||e)(g.LFG(o))},e.\u0275prov=g.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4004:(x,y,i)=>{i.d(y,{Z:()=>r});const v={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let a;const f=new Uint8Array(16);function g(){if(!a&&(a=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!a))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(f)}const d=[];for(let e=0;e<256;++e)d.push((e+256).toString(16).slice(1));const r=function o(e,n,p){if(v.randomUUID&&!n&&!e)return v.randomUUID();const c=(e=e||{}).random||(e.rng||g)();if(c[6]=15&c[6]|64,c[8]=63&c[8]|128,n){p=p||0;for(let l=0;l<16;++l)n[p+l]=c[l];return n}return function b(e,n=0){return(d[e[n+0]]+d[e[n+1]]+d[e[n+2]]+d[e[n+3]]+"-"+d[e[n+4]]+d[e[n+5]]+"-"+d[e[n+6]]+d[e[n+7]]+"-"+d[e[n+8]]+d[e[n+9]]+"-"+d[e[n+10]]+d[e[n+11]]+d[e[n+12]]+d[e[n+13]]+d[e[n+14]]+d[e[n+15]]).toLowerCase()}(c)}}}]);
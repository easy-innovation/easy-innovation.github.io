"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[795],{7980:(O,_,i)=>{i.d(_,{w:()=>p});var f=i(1413),v=i(5861),s=i(5879),h=i(9093),b=i(4004),l=i(8645),y=i(9773),C=i(836),S=i(1410),o=i(4908),r=i(6593),e=i(6814);const n=["iframe"],d=function(c){return{"scroll-sandbox":c}},u=function(c){return{height:c}};let p=(()=>{class c{constructor(t,a,g){this.domSanitizer=t,this.globalsService=a,this.postMessageService=g,this.head="",this.body="",this.initData={},this.loadEvent=new s.vpe,this.sandboxId=(0,b.Z)(),this.height=0,this.componentDestroyed=new l.x,this.bsCssLink=window.location.origin+"/assets/css/bootstrap.css"}loaded(){this.iframeContent&&this.loadEvent.emit(!0)}ngOnInit(){var t=this;return(0,v.Z)(function*(){var a;const g=t.globalsService.forum?Object.assign({},t.globalsService.forum):void 0;g&&delete g.admin,t.initData=(0,f.Z)({[o.Tu.FORUM]:g,[o.Tu.PROFILE]:null===(a=t.globalsService.credentials)||void 0===a?void 0:a.user},t.initData),t.iframeContent=t.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(new Blob([`<!DOCTYPE html>\n                    <html lang="it">\n                        <head>\n                            <title></title>\n                            <link rel="stylesheet" href="${t.bsCssLink}"></link>\n                            <script>window.initData = JSON.parse('${JSON.stringify(t.initData)}');window.autoHeight = true;<\/script>\n                            ${t.head}\n                        </head>\n                        <body>\n                            ${t.body}\n                            <script>\n                                if (window.autoHeight) {\n                                    let lastIframeHeight = 0;\n                                    document.body.style.overflow = 'hidden';\n                                    setInterval(() => {\n                                        const height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight);\n                                        if (lastIframeHeight !== height) {\n                                            lastIframeHeight = height;\n                                            parent.postMessage({\n                                                id: "${t.sandboxId}",\n                                                height: height\n                                            }, "*");\n                                        }\n                                    }, 100);\n                                }\n                            <\/script>\n                        </body>\n                    </html>`],{type:"text/html"}))),t.setSubscriptions()})()}setSubscriptions(){this.globalsService.forumObservable.pipe((0,y.R)(this.componentDestroyed)).subscribe(t=>{const a=Object.assign({},t);null==a||delete a.admin,this.postMessageService.sendToSandbox(this.iframe.nativeElement,o.Yt.FORUM,{forum:a})}),this.globalsService.profileObservable.pipe((0,C.T)(1),(0,y.R)(this.componentDestroyed)).subscribe(t=>{this.postMessageService.sendToSandbox(this.iframe.nativeElement,o.Yt.PROFILE,{profile:t})})}ngAfterViewInit(){this.eventsObservable&&this.eventsObservable.pipe((0,y.R)(this.componentDestroyed)).subscribe(t=>{this.postMessageService.sendToSandbox(this.iframe.nativeElement,t.eventType,t.eventContent)})}ngOnDestroy(){this.componentDestroyed.next(),this.componentDestroyed.complete()}onPostMessage(t){t.data.id===this.sandboxId&&(this.height=t.data.height)}}return c.\u0275fac=function(t){return new(t||c)(s.Y36(r.H7),s.Y36(S.d),s.Y36(h.F))},c.\u0275cmp=s.Xpm({type:c,selectors:[["app-sandbox"]],viewQuery:function(t,a){if(1&t&&s.Gf(n,5),2&t){let g;s.iGM(g=s.CRH())&&(a.iframe=g.first)}},hostBindings:function(t,a){1&t&&s.NdJ("message",function(E){return a.onPostMessage(E)},!1,s.Jf7)},inputs:{head:"head",body:"body",eventsObservable:"eventsObservable",initData:"initData"},outputs:{loadEvent:"loadEvent"},decls:2,vars:7,consts:[["sandbox","allow-forms allow-scripts",3,"ngClass","src","ngStyle","load"],["iframe",""]],template:function(t,a){1&t&&(s.TgZ(0,"iframe",0,1),s.NdJ("load",function(){return a.loaded()}),s.qZA()),2&t&&s.Q6J("ngClass",s.VKq(3,d,!a.height))("src",a.iframeContent,s.uOi)("ngStyle",s.VKq(5,u,a.height>0?a.height+"px":void 0))},dependencies:[e.mk,e.PC],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-grow:1}iframe[_ngcontent-%COMP%]{margin:0;padding:0;display:block;border:0;height:auto;min-height:0}iframe.scroll-sandbox[_ngcontent-%COMP%]{flex-grow:1;margin-bottom:-1rem}iframe[_ngcontent-%COMP%]:not(.scroll-sandbox){width:100%}@media (min-width: 768px){iframe.scroll-sandbox[_ngcontent-%COMP%]{margin:0 -1rem -1rem}}@media (min-width: 960px){iframe.scroll-sandbox[_ngcontent-%COMP%]{margin:0 -1.5rem -1.5rem}}"]}),c})()},1874:(O,_,i)=>{i.d(_,{i:()=>s});var f=i(6814),v=i(5879);let s=(()=>{class h{}return h.\u0275fac=function(l){return new(l||h)},h.\u0275mod=v.oAB({type:h}),h.\u0275inj=v.cJS({imports:[f.ez]}),h})()},857:(O,_,i)=>{i.d(_,{Bc:()=>s,Lc:()=>b,O9:()=>C,UD:()=>l,Wf:()=>S,lw:()=>y});var f=i(3729),v=i(4004);const s=/^https:\/\/[^?]+[^?\/]+\.js(\?.+)?$/,h=/^https?:\/\/[^?]+[^?\/]+\.js(\?.+)?$/,b=/^https:\/\/[^?]+[^?\/]+\.css(\?.+)?$/,l={type:"object",required:["name","js","tab","script_type","settings_schema"],properties:{name:{type:"string",title:"Nome:"},sdesc:{type:"string",title:"Descrizione:",description:"Una descrizione accattivante incentiva gli utenti ad installare lo script!",default:""},public_link:{type:"string",title:"Link alla guida:",description:"Una guida completa \xe8 fondamentale per mostrare tutte le potenzialit\xe0 dello script!",default:"",widget:{formlyConfig:{validators:{pattern:{expression:o=>!o.value||/^https:\/\/(.+?)\.(forumfree\.it|forumcommunity\.net|blogfree\.net)\/\?t=(\d+)(#entry(\d+))?$/.test(o.value),message:(o,r)=>{var e;return`"${null===(e=r.formControl)||void 0===e?void 0:e.value}" non \xe8 un valido link alla guida!`}}}}}},preview:{type:"string",title:"Link all'anteprima (jpg, png, gif o webp):",description:"Un'anteprima perfetta riesce a mostrare in pochi secondi il funzionamento dello script!",default:"",widget:{formlyConfig:{validators:{pattern:{expression:o=>!o.value||/^https:\/\/(.+?)\.(jpg|png|gif|webp)$/.test(o.value),message:(o,r)=>{var e;return`"${null===(e=r.formControl)||void 0===e?void 0:e.value}" non \xe8 un valido link all'anteprima!`}}}}}},tab:{type:"string",title:"Tab:",oneOf:[{}],default:""},js:{type:"string",title:"Link del file javascript:",widget:{formlyConfig:{validators:{pattern:{expression:o=>!o.value||s.test(o.value),message:(o,r)=>{var e;return`"${null===(e=r.formControl)||void 0===e?void 0:e.value}" non \xe8 un file javascript valido!`}}}}}},js_beta:{type:["string","null"],title:"Link del file javascript per la versione beta (caricata solo per il dev):",widget:{formlyConfig:{validators:{pattern:{expression:o=>!o.value||h.test(o.value),message:(o,r)=>{var e;return`"${null===(e=r.formControl)||void 0===e?void 0:e.value}" non \xe8 un file javascript valido!`}}}}}},js_pos:{type:"number",title:"Posizione in cui verr\xe0 importato il file js:",oneOf:[{}],default:7},script_type:{type:"number",title:"Tipo:",oneOf:[{title:"Script per forum",const:f.AV.FORUM},{title:"Script per utenti (profilo o userscript)",const:f.AV.USER},{title:"Script per entrambi",const:f.AV.ALL}],default:0},js_sandboxes:{type:"array",title:"Lista di sandbox legate allo script (opzionali)",uniqueItems:!0,items:{type:"object",required:["value","slug"],properties:{name:{type:["string","null"],title:"Nome della sandbox:",default:""},slug:{type:"string",title:"Slug della sandbox:",description:"Lo slug viene usato per generare il link alla sandbox, se non inserita nella pagina delle impostazioni dello script. Pertanto, se verr\xe0 cambiato, [b]cambier\xe0 anche il link![/b]",widget:{formlyConfig:{hooks:{onInit:o=>{const r=o.formControl;null!=r&&r.value||null==r||r.setValue((0,v.Z)())}},validators:{pattern:{expression:o=>!o.value||/^[a-zA-Z0-9\-]+$/.test(o.value),message:(o,r)=>{var e;return`"${null===(e=r.formControl)||void 0===e?void 0:e.value}" non \xe8 uno slug valido!`}}}}}},inSettings:{type:"boolean",title:"Visualizza questa sandbox nella pagina delle impostazioni dello script",default:!1},value:{type:"array",title:"Lista di risorse js-css-html",description:"Se viene specificata una risorsa HTML, il suo contenuto sar\xe0 riportato nella sandbox.",uniqueItems:!0,items:{type:"string",title:"Link del file:",widget:{formlyConfig:{validators:{pattern:{expression:o=>!o.value||/^https:\/\//.test(o.value),message:(o,r)=>{var e;return`"${null===(e=r.formControl)||void 0===e?void 0:e.value}" non \xe8 un file valido!`}}}}}}}}}},webhook:{type:"object",title:"Impostazioni webhook (opzionali)",description:"Se lo desideri, puoi indicare un url che verr\xe0 chiamato (richiesta [i]POST[/i]) ogni volta che si verifica [i]l'evento abilitato[/i] dai checkbox seguenti, avente come payload le informazioni riguardanti l'evento (ad esempio nel caso di modifica delle impostazioni dello script verranno inviate le impostazioni dello script stesso).",widget:{formlyConfig:{props:{fieldsetTemplate:!0}}},properties:{url:{type:["string","null"],title:"Link al webhook:",widget:{formlyConfig:{validators:{pattern:{expression:o=>{if(null===o.value)return!0;let r;try{r=new URL(o.value)}catch(e){return!1}return"http:"===r.protocol||"https:"===r.protocol},message:(o,r)=>{var e;return`"${null===(e=r.formControl)||void 0===e?void 0:e.value}" non \xe8 un link valido!`}}}}}},script_settings:{type:"boolean",title:"Chiama il webhook quando vengono salvate le impostazioni",default:!1},script_manage:{type:"boolean",title:"Chiama il webhook quando lo script viene installato o disinstallato",default:!1}}},libs:{type:"array",uniqueItems:!0,title:"Librerie e framework da importare:",default:[-1],items:{type:"number",oneOf:[{title:"------",const:-1}]}},deps:{type:"array",uniqueItems:!0,title:"Script richiesti per l'installazione:",default:[-1],items:{type:"number",oneOf:[{title:"------",const:-1}]}},settings_schema:{type:"code-editor",title:"Schema JSON per le opzioni:",default:"{}",widget:{formlyConfig:{props:{editorOptions:{height:"500px"}}}}},html_head:{type:"code-editor",title:"Codice HTML che sar\xe0 mostrato nel tag HEAD (anche sul layout FFMobile):",description:"In questo campo \xe8 possibile inserire degli stili usando il tag <style>",default:"",widget:{formlyConfig:{props:{editorOptions:{language:"html"}}}}},layouts:{type:"object",title:"Compatibilit\xe0",description:"Se uno script non \xe8 compatibile con un determinato layout, in automatico [i]non[/i] verr\xe0 eseguito sui forum che possiedono tale layout.",widget:{formlyConfig:{props:{fieldsetTemplate:!0}}},properties:{quirks:{type:"boolean",title:"Compatibile con il layout Quirks",default:!1},standard:{type:"boolean",title:"Compatibile con il layout Standard",default:!0},ffmobile:{type:"boolean",title:"Compatibile con il layout FFMobile",default:!0},responsive:{type:"boolean",title:"Compatibile con il layout Responsive",default:!1}}},hidden_script:{type:"boolean",title:"Nascondi lo script dalla lista (test o script privati)",default:!1}}},y={name:"",public_link:"",sdesc:"",preview:"",js:"",js_beta:null,tab:f.tr.FFB,js_pos:7,js_sandboxes:[],script_type:0,libs:[-1],deps:[-1],settings_default:{},settings_schema:"{}",html_head:"",hidden_script:!1,demo:!1,webhook:{url:null,script_settings:!1,script_manage:!1},layouts:{quirks:!1,standard:!0,ffmobile:!0,responsive:!1}},C=[{title:"[Open] Font Awesome 4.7.0",link:"https://ffb.forumfree.net:4999/nicoxys/libs/fontawesome-4.7.0.css"},{title:"[Open] Font Awesome 5.7.0",link:"https://ffb.forumfree.net:4999/nicoxys/libs/fontawesome-5.7.0.css"},{title:"[Open] Twitter API",link:"https://platform.twitter.com/widgets.js"},{title:"[Open] AngularJS 1.7.7",link:"https://ffb.forumfree.net:4999/nicoxys/libs/angularjs-1.7.7.js"},{title:"[Open] ReactJS (w/ dom) 16.8.2",link:"https://ffb.forumfree.net:4999/nicoxys/libs/reactjs-16.8.2.js"},{title:"[Open] Popper 2.5.2",link:"https://ffb.forumfree.net:4999/nicoxys/libs/popper-2.5.2.js"},{title:"[Open] Tippy 6.2.6",link:"https://ffb.forumfree.net:4999/nicoxys/libs/tippy-6.2.6.js"},{title:"[Open] Vue.js 2.6.6",link:"https://ffb.forumfree.net:4999/nicoxys/libs/vuejs-2.6.6.js"},{title:"[Open] Mustache 3.0.1",link:"https://ffb.forumfree.net:4999/nicoxys/libs/mustache-3.0.1.js"},{title:"[Open] Handlebars 4.7.3",link:"https://ffb.forumfree.net:4999/nicoxys/libs/handlebars-4.7.3.js"},{title:"[Open] Timeago",link:"https://ffb.forumfree.net:4999/nicoxys/libs/jquery.timeago.js"},{title:"[Open] RxJS 6.5.1",link:"https://ffb.forumfree.net:4999/nicoxys/libs/rxjs-6.5.1.js"},{title:"[Open] ChartJs 2.7.2",link:"https://ffb.forumfree.net:4999/nicoxys/libs/chartjs-2.7.2.js"},{title:"[Open] Apollo Client",link:"https://ffb.forumfree.net:4999/nicoxys/libs/apollo-client-2.6.10.js"},{title:"[Private - All] Crediti in fondo al forum",link:"https://ffb.forumfree.net:4999/nicoxys/private/credits.js"},{tab:f.tr.FFB,title:"[Private - FFBoard] FFUpload",link:"https://ffb.forumfree.net:4999/nicoxys/libs/ffupload.js"},{tab:f.tr.FFB,title:"[Private - FFBoard] HelloBox",link:"https://ffb.forumfree.net:4999/nicoxys/forum/hellobox.js"}],S=[{title:"Codice HTML che sar\xe0 mostrato nel tag HEAD",position:"html_head"},{title:"[Start] Codice HTML che sar\xe0 mostrato in CIMA a tutte le pagine",position:"html_top_start"},{title:"[End] Codice HTML che sar\xe0 mostrato in CIMA a tutte le pagine",position:"html_top_end"},{title:"[Start] Codice HTML che sar\xe0 mostrato in tutte le pagine sotto il logo del sito",position:"html_logo_start"},{title:"[End] Codice HTML che sar\xe0 mostrato in tutte le pagine sotto il logo del sito",position:"html_logo_end"},{title:"[Start] Codice HTML che sar\xe0 mostrato nella homepage del sito",position:"html_home_start"},{title:"[End] Codice HTML che sar\xe0 mostrato nella homepage del sito",position:"html_home_end"},{title:"Codice HTML che sar\xe0 mostrato sopra le pubblicit\xe0",position:"html_ads_start"},{title:"[Start] Codice HTML che sar\xe0 mostrato in FONDO a tutte le pagine",position:"html_bottom_start"},{title:"[End] Codice HTML che sar\xe0 mostrato in FONDO a tutte le pagine",position:"html_bottom_end"}]},137:(O,_,i)=>{i.d(_,{s:()=>r});var f=i(857),v=i(8645),s=i(4664),h=i(2096),b=i(5879),l=i(7398),y=i(9315),S=i(9862);let o=(()=>{class e{constructor(d){this.http=d}getContentFromUrls(d){const u=d.map(p=>this.http.get(p,{responseType:"text"}).pipe((0,l.U)(c=>({source:c,resource:p}))));return(0,y.D)([...u,(0,h.of)({source:"",resource:""})]).pipe((0,s.w)(p=>{p=p.filter(t=>""!==t.resource);const c=[],m=[];return p.forEach(t=>{const a=function C(e){let n={head:"",body:""};const u=(new DOMParser).parseFromString(e.source,"text/html"),p=u.querySelector("head"),c=u.querySelector("body"),m=u.querySelector("base");if(m){const t=m.getAttribute("href")||"";u.querySelectorAll("head link, head img, head script, body link, body script, body img").forEach(g=>{const E="LINK"===g.tagName?"href":"src",M=g.getAttribute(E);if(M&&!M.startsWith("http")){let x=`${M}`;M.startsWith(t)||(x=`${t}${x}`);const D=new URL(e.resource).origin;x.startsWith("http")||(x=`${D}/${x}`),g.setAttribute(E,x)}}),m.remove()}return p&&(["meta","title","base"].forEach(t=>{p.querySelectorAll(t).forEach(g=>g.remove())}),n.head=p.innerHTML),c&&(n.body=c.innerHTML),n}(t);a.head&&c.push(a.head),a.body&&m.push(a.body)}),(0,h.of)({headData:c,bodyData:m})}))}}return e.\u0275fac=function(d){return new(d||e)(b.LFG(S.eN))},e.\u0275prov=b.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),r=(()=>{class e{constructor(d){this.sandboxService=d}create(d,u={}){const p=new v.x,c=d.value.filter(m=>!f.Bc.test(m)&&!f.Lc.test(m));return this.sandboxService.getContentFromUrls(c).pipe((0,s.w)(m=>(0,h.of)({eventSubject:p,eventObservable:p.asObservable(),loading:!0,initData:u,headData:[...d.value.map(t=>f.Bc.test(t)?`<script src='${t}'><\/script>`:f.Lc.test(t)?`<link rel="stylesheet" type="text/css" href="${t}">`:""),...m.headData].join(""),bodyData:[...m.bodyData].join("")})))}}return e.\u0275fac=function(d){return new(d||e)(b.LFG(o))},e.\u0275prov=b.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4004:(O,_,i)=>{i.d(_,{Z:()=>r});const v={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let s;const h=new Uint8Array(16);function b(){if(!s&&(s=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!s))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return s(h)}const l=[];for(let e=0;e<256;++e)l.push((e+256).toString(16).slice(1));const r=function o(e,n,d){if(v.randomUUID&&!n&&!e)return v.randomUUID();const u=(e=e||{}).random||(e.rng||b)();if(u[6]=15&u[6]|64,u[8]=63&u[8]|128,n){d=d||0;for(let p=0;p<16;++p)n[d+p]=u[p];return n}return function y(e,n=0){return(l[e[n+0]]+l[e[n+1]]+l[e[n+2]]+l[e[n+3]]+"-"+l[e[n+4]]+l[e[n+5]]+"-"+l[e[n+6]]+l[e[n+7]]+"-"+l[e[n+8]]+l[e[n+9]]+"-"+l[e[n+10]]+l[e[n+11]]+l[e[n+12]]+l[e[n+13]]+l[e[n+14]]+l[e[n+15]]).toLowerCase()}(u)}}}]);
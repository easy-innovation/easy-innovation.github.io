"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[795],{7980:(S,v,n)=>{n.d(v,{w:()=>h});var f=n(1413),g=n(5861),i=n(9212),c=n(9093),m=n(4004),a=n(8645),_=n(9773),M=n(836),E=n(2438),O=n(1410),y=n(6306),e=n(6593),s=n(6814);const u=["iframe"],r=(l,p)=>({"scroll-sandbox":l,"reset-padding":p});let h=(()=>{var l;class p{constructor(t,o,b){this.domSanitizer=t,this.globalsService=o,this.postMessageService=b,this.head="",this.body="",this.bodyClass=[],this.initData={},this.resetMainPadding=!1,this.loadEvent=new i.vpe,this.sandboxId=(0,m.Z)(),this.iframeAutoHeight=!0,this.iframeHeight=0,this.componentDestroyed=new a.x,this.bsCssLink=window.location.origin+"/assets/css/bootstrap.css"}loaded(){this.iframeContent&&this.loadEvent.emit(!0)}ngOnInit(){var t=this;return(0,g.Z)(function*(){var o;const b=t.globalsService.forum?Object.assign({},t.globalsService.forum):void 0;b&&delete b.admin,t.initData=(0,f.Z)({[y.Tu.FORUM]:b,[y.Tu.USER]:null===(o=t.globalsService.credentials)||void 0===o?void 0:o.user},t.initData),t.iframeContent=t.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(new Blob(['<!DOCTYPE html>\n                    <html lang="it">\n                        <head>\n                            <title></title>\n                            <link rel="stylesheet" href="'.concat(t.bsCssLink,"\"></link>\n                            <script>\n                                window.initData = JSON.parse('").concat(JSON.stringify(t.initData),"');\n                                window.sandboxHeightMode = 'auto';\n                            <\/script>\n                            ").concat(t.head,"\n                        </head>\n                        <body").concat(t.bodyClass.length?' class="'+t.bodyClass.join(" ")+'"':"",">\n                            ").concat(t.body,'\n                        <script>\n                            (() => {\n                                parent.postMessage({\n                                    id: "').concat(t.sandboxId,"\",\n                                    sandboxHeightMode: window.sandboxHeightMode\n                                }, \"*\");\n\n                                if (window.sandboxHeightMode !== 'auto') {\n                                    return;\n                                }\n\n                                document.body.style.overflow = 'hidden';\n\n                                let lastSandboxHeight = 0; \n                                const resizeObserver = new ResizeObserver((entries, observer) => {\n                                    for (const entry of entries) {\n                                        if (entry.target.nodeName === 'BODY' && lastSandboxHeight !== entry.contentRect.height) {\n                                            lastSandboxHeight = entry.contentRect.height;\n                                            parent.postMessage({\n                                                id: \"").concat(t.sandboxId,'",\n                                                sandboxHeight: entry.contentRect.height\n                                            }, "*");\n                                        }\n                                    }\n                                })\n                                resizeObserver.observe(document.body)\n                            })();\n                        <\/script>\n                        </body>\n                    </html>')],{type:"text/html"}))),t.setSubscriptions()})()}setSubscriptions(){this.globalsService.forumObservable.pipe((0,_.R)(this.componentDestroyed)).subscribe(t=>{const o=Object.assign({},t);null==o||delete o.admin,this.postMessageService.sendToSandbox(this.iframe.nativeElement,y.Yt.FORUM,{forum:o})}),this.globalsService.profileObservable.pipe((0,M.T)(1),(0,_.R)(this.componentDestroyed)).subscribe(t=>{this.postMessageService.sendToSandbox(this.iframe.nativeElement,y.Yt.USER,{profile:t})})}ngAfterViewInit(){this.eventsObservable&&this.eventsObservable.pipe((0,_.R)(this.componentDestroyed)).subscribe(t=>{this.postMessageService.sendToSandbox(this.iframe.nativeElement,t.eventType,t.eventContent)}),(0,E.R)(window,"message").pipe((0,_.R)(this.componentDestroyed)).subscribe(t=>{t.data.id===this.sandboxId&&(t.data.sandboxHeightMode&&(this.iframeAutoHeight="scroll"!==t.data.sandboxHeightMode),void 0!==t.data.sandboxHeight&&(this.iframeHeight=Number(t.data.sandboxHeight)))})}ngOnDestroy(){this.componentDestroyed.next(),this.componentDestroyed.complete()}}return(l=p).\u0275fac=function(t){return new(t||l)(i.Y36(e.H7),i.Y36(O.d),i.Y36(c.F))},l.\u0275cmp=i.Xpm({type:l,selectors:[["app-sandbox"]],viewQuery:function(t,o){if(1&t&&i.Gf(u,5),2&t){let b;i.iGM(b=i.CRH())&&(o.iframe=b.first)}},inputs:{head:"head",body:"body",bodyClass:"bodyClass",eventsObservable:"eventsObservable",initData:"initData",resetMainPadding:"resetMainPadding"},outputs:{loadEvent:"loadEvent"},decls:2,vars:7,consts:[["sandbox","allow-forms allow-scripts allow-popups-to-escape-sandbox allow-popups allow-downloads",3,"ngClass","src","load"],["iframe",""]],template:function(t,o){1&t&&(i.TgZ(0,"iframe",0,1),i.NdJ("load",function(){return o.loaded()}),i.qZA()),2&t&&(i.Udp("height",o.iframeHeight+"px"),i.Q6J("ngClass",i.WLB(4,r,!o.iframeAutoHeight,o.resetMainPadding))("src",o.iframeContent,i.uOi))},dependencies:[s.mk],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-grow:1}iframe[_ngcontent-%COMP%]{margin:0;padding:0;display:block;border:0;height:auto;min-height:0;min-width:100%}iframe.scroll-sandbox[_ngcontent-%COMP%]{flex-grow:1}.reset-padding[_ngcontent-%COMP%]{margin-bottom:-1rem}@media (min-width: 768px){.reset-padding[_ngcontent-%COMP%]{margin:0 -1rem -1rem}}@media (min-width: 960px){.reset-padding[_ngcontent-%COMP%]{margin:0 -1.5rem -1.5rem}}"]}),p})()},1874:(S,v,n)=>{n.d(v,{i:()=>i});var f=n(6814),g=n(9212);let i=(()=>{var c;class m{}return(c=m).\u0275fac=function(_){return new(_||c)},c.\u0275mod=g.oAB({type:c}),c.\u0275inj=g.cJS({imports:[f.ez]}),m})()},857:(S,v,n)=>{n.d(v,{By:()=>a,Kw:()=>i,VA:()=>c,ks:()=>m,u_:()=>g});var f=n(3729);const g=/^https:\/\/[^?]+[^?/]+\.js(\?.+)?$/,i=/^https?:\/\/[^?]+[^?/]+\.js(\?.+)?$/,c=/^https:\/\/[^?]+[^?/]+\.css(\?.+)?$/,m=[{title:"[Open] Font Awesome 4.7.0",link:"https://ffb.forumfree.net:4999/nicoxys/libs/fontawesome-4.7.0.css"},{title:"[Open] Font Awesome 5.7.0",link:"https://ffb.forumfree.net:4999/nicoxys/libs/fontawesome-5.7.0.css"},{title:"[Open] Font Awesome 6.2.1",link:"https://img.forumfree.net/fontawesome/6.2.1/css/all.min.css"},{title:"[Open] Twitter API",link:"https://platform.twitter.com/widgets.js"},{title:"[Open] AngularJS 1.7.7",link:"https://ffb.forumfree.net:4999/nicoxys/libs/angularjs-1.7.7.js"},{title:"[Open] ReactJS (w/ dom) 16.8.2",link:"https://ffb.forumfree.net:4999/nicoxys/libs/reactjs-16.8.2.js"},{title:"[Open] Popper 2.5.2",link:"https://ffb.forumfree.net:4999/nicoxys/libs/popper-2.5.2.js"},{title:"[Open] Tippy 6.2.6",link:"https://ffb.forumfree.net:4999/nicoxys/libs/tippy-6.2.6.js"},{title:"[Open] Vue.js 2.6.6",link:"https://ffb.forumfree.net:4999/nicoxys/libs/vuejs-2.6.6.js"},{title:"[Open] Mustache 3.0.1",link:"https://ffb.forumfree.net:4999/nicoxys/libs/mustache-3.0.1.js"},{title:"[Open] Handlebars 4.7.3",link:"https://ffb.forumfree.net:4999/nicoxys/libs/handlebars-4.7.3.js"},{title:"[Open] Timeago",link:"https://ffb.forumfree.net:4999/nicoxys/libs/jquery.timeago.js"},{title:"[Open] RxJS 6.5.1",link:"https://ffb.forumfree.net:4999/nicoxys/libs/rxjs-6.5.1.js"},{title:"[Open] ChartJs 2.7.2",link:"https://ffb.forumfree.net:4999/nicoxys/libs/chartjs-2.7.2.js"},{title:"[Open] Apollo Client",link:"https://ffb.forumfree.net:4999/nicoxys/libs/apollo-client-2.6.10.js"},{title:"[Private - All] Crediti in fondo al forum",link:"https://ffb.forumfree.net:4999/nicoxys/private/credits.js"},{tab:f.tr.FFB,title:"[Private - FFBoard] HelloBox",link:"https://ffb.forumfree.net:4999/nicoxys/forum/hellobox.js"}],a=[{title:"Codice HTML che sar\xe0 mostrato nel tag HEAD",const:"html_head"},{title:"[Start] Codice HTML che sar\xe0 mostrato in CIMA a tutte le pagine",const:"html_top_start"},{title:"[End] Codice HTML che sar\xe0 mostrato in CIMA a tutte le pagine",const:"html_top_end"},{title:"[Start] Codice HTML che sar\xe0 mostrato in tutte le pagine sotto il logo del sito",const:"html_logo_start"},{title:"[End] Codice HTML che sar\xe0 mostrato in tutte le pagine sotto il logo del sito",const:"html_logo_end"},{title:"[Start] Codice HTML che sar\xe0 mostrato nella homepage del sito",const:"html_home_start"},{title:"[End] Codice HTML che sar\xe0 mostrato nella homepage del sito",const:"html_home_end"},{title:"Codice HTML che sar\xe0 mostrato sopra le pubblicit\xe0",const:"html_ads_start"},{title:"[Start] Codice HTML che sar\xe0 mostrato in FONDO a tutte le pagine",const:"html_bottom_start"},{title:"[End] Codice HTML che sar\xe0 mostrato in FONDO a tutte le pagine",const:"html_bottom_end"}]},137:(S,v,n)=>{n.d(v,{s:()=>y});var f=n(857),g=n(8645),i=n(4664),c=n(2096),m=n(9212),a=n(7398),_=n(9315),E=n(9862);let O=(()=>{var e;class s{constructor(r){this.http=r}getContentFromUrls(r){const h=r.map(l=>this.http.get(l,{responseType:"text"}).pipe((0,a.U)(p=>({source:p,resource:l}))));return(0,_.D)([...h,(0,c.of)({source:"",resource:""})]).pipe((0,i.w)(l=>{l=l.filter(t=>""!==t.resource);const p=[],d=[];return l.forEach(t=>{const o=function M(e){const s={head:"",body:""},r=(new DOMParser).parseFromString(e.source,"text/html"),h=r.querySelector("head"),l=r.querySelector("body"),p=r.querySelector("base");if(p){const d=p.getAttribute("href")||"",t=r.querySelectorAll("head link, head img, head script, body link, body script, body img"),o=new URL(e.resource).origin;t.forEach(b=>{const C="LINK"===b.tagName?"href":"src",D=b.getAttribute(C);if(D&&!D.startsWith("http")){let x="".concat(D);D.startsWith(d)||(x="".concat(d).concat(x)),x.startsWith("http")||(x="".concat(o,"/").concat(x)),b.setAttribute(C,x)}}),p.href="".concat(o).concat(d.startsWith("/")?"":"/").concat(d),p.target="_blank"}return h&&(["meta","title"].forEach(d=>{h.querySelectorAll(d).forEach(o=>o.remove())}),s.head=h.innerHTML),l&&(s.body=l.innerHTML),s}(t);o.head&&p.push(o.head),o.body&&d.push(o.body)}),(0,c.of)({headData:p,bodyData:d})}))}}return(e=s).\u0275fac=function(r){return new(r||e)(m.LFG(E.eN))},e.\u0275prov=m.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),s})(),y=(()=>{var e;class s{constructor(r){this.sandboxService=r}create(r,h={}){const l=new g.x,p=r.value.filter(d=>!f.u_.test(d)&&!f.VA.test(d));return this.sandboxService.getContentFromUrls(p).pipe((0,i.w)(d=>(0,c.of)({eventSubject:l,eventObservable:l.asObservable(),loading:!0,initData:h,headData:[...r.value.map(t=>f.u_.test(t)?"<script src='".concat(t,"'><\/script>"):f.VA.test(t)?'<link rel="stylesheet" type="text/css" href="'.concat(t,'">'):""),...d.headData].join(""),bodyData:[...d.bodyData].join("")})))}}return(e=s).\u0275fac=function(r){return new(r||e)(m.LFG(O))},e.\u0275prov=m.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),s})()},4004:(S,v,n)=>{n.d(v,{Z:()=>y});const g={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let i;const c=new Uint8Array(16);function m(){if(!i&&(i=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!i))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return i(c)}const a=[];for(let e=0;e<256;++e)a.push((e+256).toString(16).slice(1));const y=function O(e,s,u){if(g.randomUUID&&!s&&!e)return g.randomUUID();const r=(e=e||{}).random||(e.rng||m)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,s){u=u||0;for(let h=0;h<16;++h)s[u+h]=r[h];return s}return function _(e,s=0){return a[e[s+0]]+a[e[s+1]]+a[e[s+2]]+a[e[s+3]]+"-"+a[e[s+4]]+a[e[s+5]]+"-"+a[e[s+6]]+a[e[s+7]]+"-"+a[e[s+8]]+a[e[s+9]]+"-"+a[e[s+10]]+a[e[s+11]]+a[e[s+12]]+a[e[s+13]]+a[e[s+14]]+a[e[s+15]]}(r)}}}]);
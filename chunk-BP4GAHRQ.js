import{a as _}from"./chunk-2KOG2K7X.js";import{a as z}from"./chunk-K66EXUFO.js";import{a as F}from"./chunk-NKVJZHRW.js";import{Za as p,_a as h}from"./chunk-XFTX4WWK.js";import{A as u,Bb as l,Eb as H,Qa as v,Sb as O,Tc as $,Vc as U,Wb as D,Xb as I,Ya as r,Yb as E,Yc as j,_ as y,_b as R,ba as n,bd as T,db as w,eb as S,f as d,g,ja as x,jb as C,kb as M,pc as P,sc as m,sd as B,tc as c}from"./chunk-OQT4JH5V.js";import{a as b,h as f}from"./chunk-KP24O5IB.js";var A=["iframe"],L=(s,t)=>({"scroll-sandbox":s,"reset-padding":t});function Q(s,t){if(s&1&&(H(0,"iframe",2,0),m(2,"async")),s&2){let N=t.ngIf,e=O();R("height",c(2,4,e.iframeHeight$)+"px"),l("ngClass",P(6,L,!e.iframeAutoHeight,e.resetMainPadding))("src",N,v)}}var de=(()=>{let t=class t{constructor(e,i,o){this.domSanitizer=e,this.globalsService=i,this.postMessageService=o,this.head="",this.body="",this.bodyClass=[],this.initData={},this.resetMainPadding=!1,this.loadEvent=new M,this.sandboxId=z(),this.iframeContent$=new d,this.iframeAutoHeight=!0,this.iframeHeight$=new g(0),this.componentDestroyed=new d,this.bsCssLink=window.location.origin+"/assets/css/bootstrap.css",this.iframeContentReady=!1}ngOnInit(){return f(this,null,function*(){let e=this.globalsService.forum?Object.assign({},this.globalsService.forum):void 0;e&&delete e.admin,this.initData=b({[p.FORUM]:e,[p.USER]:this.globalsService.credentials?.user},this.initData);let i=yield this.head,o=yield this.body,a=this.domSanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(new Blob([`<!DOCTYPE html>
                        <html lang="it">
                            <head>
                                <title></title>
                                <link rel="stylesheet" href="${this.bsCssLink}"></link>
                                <style>
                                    img {max-width: 100%;}
                                </style>
                                <script>
                                    window.initData = JSON.parse(decodeURIComponent('${encodeURIComponent(JSON.stringify(this.initData))}'));
                                    window.sandboxHeightMode = 'auto';

                                    window.addEventListener("load", () => {
                                        parent.postMessage({
                                            id: "${this.sandboxId}",
                                            ready: true
                                        }, "*");
                                    });
                                <\/script>
                                ${i}
                            </head>
                            <body${this.bodyClass.length?' class="'+this.bodyClass.join(" ")+'"':""}>
                                <div class="w-100 m-0 p-0" id="sandbox-body">${o}</div>
                                <script>
                                    (() => {
                                        parent.postMessage({
                                            id: "${this.sandboxId}",
                                            sandboxHeightMode: window.sandboxHeightMode
                                        }, "*");

                                        if (window.sandboxHeightMode !== 'auto') {
                                            return;
                                        }

                                        document.body.style.overflow = 'hidden';

                                        let lastSandboxHeight = -1, count = 0; 
                                        const setSandboxHeight = () => {
                                            const sandboxBody = document.getElementById('sandbox-body');
                                            const style = getComputedStyle(document.body);
                                            const bodySpacing = parseFloat(style.marginTop) + parseFloat(style.marginBottom) + parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
                                            const currentSandboxHeight = sandboxBody.scrollHeight + bodySpacing;
                                            if (lastSandboxHeight === currentSandboxHeight) return;
                                            lastSandboxHeight = currentSandboxHeight;
                                            parent.postMessage({
                                                id: "${this.sandboxId}",
                                                sandboxHeight: lastSandboxHeight,
                                                heightChangeCount: count++,
                                            }, "*");
                                        }
                                            
                                        const resizeObserver = new ResizeObserver((entries, observer) => {
                                            for (const entry of entries) {
                                                if (entry.target.nodeName !== 'BODY') continue;
                                                setSandboxHeight();
                                            }
                                        })
                                        resizeObserver.observe(document.body);

                                        setSandboxHeight();

                                        setInterval(setSandboxHeight, 1000);
                                    })();
                                <\/script>
                            </body>
                        </html>`],{type:"text/html"})));this.iframeContent$.next(a),this.setSubscriptions()})}setSubscriptions(){this.globalsService.forumObservable.pipe(n(this.componentDestroyed)).subscribe(e=>{let i=Object.assign({},e);delete i?.admin,this.iframe?.nativeElement&&this.postMessageService.sendToSandbox(this.iframe.nativeElement,h.FORUM,{forum:i})}),this.globalsService.profileObservable.pipe(y(1),n(this.componentDestroyed)).subscribe(e=>{this.iframe?.nativeElement&&this.postMessageService.sendToSandbox(this.iframe.nativeElement,h.USER,{profile:e})})}ngAfterViewInit(){this.eventsObservable&&this.eventsObservable.pipe(n(this.componentDestroyed)).subscribe(e=>{this.iframe?.nativeElement&&this.postMessageService.sendToSandbox(this.iframe.nativeElement,e.eventType,e.eventContent)}),u(window,"message").pipe(n(this.componentDestroyed)).subscribe(e=>{e.data.id===this.sandboxId&&(e.data.ready&&!this.iframeContentReady&&(this.iframeContentReady=!0,this.loadEvent.emit(!0)),e.data.sandboxHeightMode&&(this.iframeAutoHeight=e.data.sandboxHeightMode!=="scroll"),e.data.sandboxHeight!==void 0&&this.iframeHeight$.next(Number(e.data.sandboxHeight)))})}ngOnDestroy(){this.componentDestroyed.next(),this.componentDestroyed.complete(),this.iframeContent$.complete()}};t.\u0275fac=function(i){return new(i||t)(r(B),r(F),r(_))},t.\u0275cmp=w({type:t,selectors:[["app-sandbox"]],viewQuery:function(i,o){if(i&1&&D(A,5),i&2){let a;I(a=E())&&(o.iframe=a.first)}},inputs:{head:"head",body:"body",bodyClass:"bodyClass",eventsObservable:"eventsObservable",initData:"initData",resetMainPadding:"resetMainPadding"},outputs:{loadEvent:"loadEvent"},standalone:!1,decls:2,vars:3,consts:[["iframe",""],["sandbox","allow-forms allow-scripts allow-popups-to-escape-sandbox allow-popups allow-downloads",3,"ngClass","height","src",4,"ngIf"],["sandbox","allow-forms allow-scripts allow-popups-to-escape-sandbox allow-popups allow-downloads",3,"ngClass","src"]],template:function(i,o){i&1&&(C(0,Q,3,9,"iframe",1),m(1,"async")),i&2&&l("ngIf",c(1,1,o.iframeContent$))},dependencies:[$,U,j],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-grow:1}iframe[_ngcontent-%COMP%]{margin:0;padding:0;display:block;border:0;height:auto;min-height:0;min-width:100%}iframe.scroll-sandbox[_ngcontent-%COMP%]{flex-grow:1}.reset-padding[_ngcontent-%COMP%]{margin-bottom:-1rem}@media (min-width: 768px){.reset-padding[_ngcontent-%COMP%]{margin:0 -1rem -1rem}}@media (min-width: 960px){.reset-padding[_ngcontent-%COMP%]{margin:0 -1.5rem -1.5rem}}"]});let s=t;return s})();var be=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=S({type:t}),t.\u0275inj=x({imports:[T]});let s=t;return s})();export{de as a,be as b};

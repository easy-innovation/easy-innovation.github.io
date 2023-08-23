"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[859],{4041:(O,p,i)=>{i.d(p,{C:()=>f});var n=i(6814),r=i(5879);let f=(()=>{class c{}return c.\u0275fac=function(S){return new(S||c)},c.\u0275mod=r.oAB({type:c}),c.\u0275inj=r.cJS({imports:[n.ez]}),c})()},9010:(O,p,i)=>{i.d(p,{b:()=>f});var n=i(8863),r=i(5879);let f=(()=>{class c{transform(S,T=2){return(0,n.t)(S,T)}}return c.\u0275fac=function(S){return new(S||c)},c.\u0275pipe=r.Yjl({name:"formatBytes",type:c,pure:!0}),c})()},8863:(O,p,i)=>{i.d(p,{t:()=>r});var n=i(3200);function r(f,c=2){if(!+f)return"0 Bytes";const S=c<0?0:c,y=Math.floor(Math.log(f)/Math.log(1024));return`${(0,n.o)(parseFloat((f/Math.pow(1024,y)).toFixed(S)))} ${["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][y]}`}},3200:(O,p,i)=>{function n(r){return r.toLocaleString()}i.d(p,{o:()=>n})},3285:(O,p,i)=>{i.d(p,{L:()=>A});var n=i(7165),r=i(5879);let f=(()=>{class l{constructor(){this.dependences={[n.B2.LOGIN]:null,[n.B2.HOME]:null,[n.B2.SETTINGS]:n.B2.HOME,[n.B2.SCRIPT]:n.B2.HOME,[n.B2.SCRIPT_FORUM]:n.B2.SCRIPT,[n.B2.SCRIPT_USER]:n.B2.SCRIPT,[n.B2.SCRIPT_SETTINGS]:[n.B2.SCRIPT_USER,n.B2.SCRIPT_FORUM],[n.B2.SCRIPT_SANDBOX]:[n.B2.SCRIPT_USER,n.B2.SCRIPT_FORUM],[n.B2.SCRIPT_DEV]:n.B2.SCRIPT,[n.B2.SCRIPT_DEV_SETTINGS]:n.B2.SCRIPT_DEV,[n.B2.UPLOAD]:n.B2.HOME,[n.B2.ADMIN]:n.B2.HOME,[n.B2.STATS]:n.B2.HOME,[n.B2.STATS_UPLOAD]:n.B2.STATS},this.names={[n.B2.LOGIN]:"Login",[n.B2.HOME]:"Home",[n.B2.SETTINGS]:"Notifiche",[n.B2.SCRIPT]:"Script",[n.B2.SCRIPT_FORUM]:"Forum",[n.B2.SCRIPT_USER]:"Utenti",[n.B2.SCRIPT_SETTINGS]:"Impostazioni",[n.B2.SCRIPT_SANDBOX]:"Altro",[n.B2.SCRIPT_DEV]:"Sviluppo",[n.B2.SCRIPT_DEV_SETTINGS]:"Impostazioni",[n.B2.UPLOAD]:"Upload",[n.B2.ADMIN]:"Amministrazione",[n.B2.STATS]:"Statistiche",[n.B2.STATS_UPLOAD]:"Upload"}}createPathList(u,B=[]){const _=(b,M)=>{b.unshift({name:this.names[M]||"",path:M})},g=b=>this.dependences.hasOwnProperty(b)?this.dependences[b]instanceof Array?this.dependences[b].includes(B[0])?B.shift():this.dependences[b][0]:this.dependences[b]:null;let D=[{name:this.names[u]||"",path:""}],E=g(u);for(;E;)_(D,E),E=g(E);return D}}return l.\u0275fac=function(u){return new(u||l)},l.\u0275prov=r.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();var c=i(8109),m=i(6814);function S(l,C){if(1&l&&r._UZ(0,"a",8),2&l){const u=r.oxw().$implicit;r.Q6J("routerLink",u.path)("innerText",u.name)}}function T(l,C){if(1&l&&r._UZ(0,"span",9),2&l){const u=r.oxw().$implicit;r.Q6J("innerText",u.name)}}const y=function(l){return{active:l}};function I(l,C){if(1&l&&(r.TgZ(0,"li",5),r.YNc(1,S,1,2,"a",6),r.YNc(2,T,1,1,"ng-template",null,7,r.W1O),r.qZA()),2&l){const u=C.last,B=r.MAs(3);r.Q6J("ngClass",r.VKq(4,y,u)),r.uIk("aria-current",u?"page":null),r.xp6(1),r.Q6J("ngIf",!u)("ngIfElse",B)}}let A=(()=>{class l{constructor(u,B){this.breadcrumbService=u,this.router=B,this.pageTitle="",this.url="",this.nodes=[],this.breadcrumbs=[]}ngOnInit(){this.url||(this.url=this.router.url),this.breadcrumbs=this.breadcrumbService.createPathList(this.url,this.nodes)}}return l.\u0275fac=function(u){return new(u||l)(r.Y36(f),r.Y36(c.F0))},l.\u0275cmp=r.Xpm({type:l,selectors:[["app-breadcrumb"]],inputs:{pageTitle:"pageTitle",url:"url",nodes:"nodes"},decls:5,vars:2,consts:[[1,"container-fluid","px-md-1","d-flex","flex-column","flex-md-row","align-items-md-center"],[1,"h3","fw-light","mb-0","lh-1","fv-small-caps","pb-1",3,"innerText"],["aria-label","breadcrumb",1,"ms-md-auto","mt-1"],[1,"breadcrumb","mb-0","justify-content-md-end"],["class","breadcrumb-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"breadcrumb-item",3,"ngClass"],[3,"routerLink","innerText",4,"ngIf","ngIfElse"],["lastItem",""],[3,"routerLink","innerText"],[3,"innerText"]],template:function(u,B){1&u&&(r.TgZ(0,"div",0),r._UZ(1,"h2",1),r.TgZ(2,"nav",2)(3,"ol",3),r.YNc(4,I,4,6,"li",4),r.qZA()()()),2&u&&(r.xp6(1),r.Q6J("innerText",B.pageTitle),r.xp6(3),r.Q6J("ngForOf",B.breadcrumbs))},dependencies:[m.mk,m.sg,m.O5,c.rH],styles:[".container-fluid[_ngcontent-%COMP%]{margin-bottom:.75rem}@media (min-width: 960px){.container-fluid[_ngcontent-%COMP%]{margin-top:.5rem}}"]}),l})()},9090:(O,p,i)=>{i.d(p,{w:()=>c});var n=i(6814),r=i(8109),f=i(5879);let c=(()=>{class m{}return m.\u0275fac=function(T){return new(T||m)},m.\u0275mod=f.oAB({type:m}),m.\u0275inj=f.cJS({imports:[n.ez,r.Bz]}),m})()},7827:(O,p,i)=>{i.d(p,{z1:()=>J,mZ:()=>Q});var n=i(8645),r=i(2096),f=i(5592),c=i(7328),m=i(2420);const S=new f.y(m.Z);var y=i(2181),I=i(9397),A=i(8180),l=i(9769),C=i(7398),u=i(6306),B=i(4664),_=i(6814),g=i(5879);function E(o){return!(!o.parentElement||"picture"!==o.parentElement.nodeName.toLowerCase())}function b(o){return"img"===o.nodeName.toLowerCase()}function M(o,e,t){return b(o)?t&&"srcset"in o?o.srcset=e:o.src=e:o.style.backgroundImage=`url('${e}')`,o}function z(o){return e=>{const t=e.parentElement.getElementsByTagName("source");for(let s=0;s<t.length;s++){const a=t[s].getAttribute(o);a&&("srcset"in t[s]?t[s].srcset=a:t[s].src=a)}}}const F=z("defaultImage"),x=z("lazyLoad"),H=z("errorImage");function w(o){return(e,t,s)=>{b(e)&&E(e)&&o(e),t&&M(e,t,s)}}const K=w(F),k=w(x),Z=w(H);class ${constructor(){this.navigator=function D(){return typeof window<"u"?window.navigator:void 0}()}setPlatformId(e){this.platformId=e}onDestroy(e){}onAttributeChange(e){}}function U(o,e){o.className=o.className.replace(e,"")}function N(o,e){o.className.includes(e)||(o.className+=` ${e}`)}class V extends ${setup(e){K(e.element,e.defaultImagePath,e.useSrcset),e.imagePath&&N(e.element,"ng-lazyloading"),function Y(o,e){return o.className&&o.className.includes(e)}(e.element,"ng-lazyloaded")&&U(e.element,"ng-lazyloaded")}finally(e){N(e.element,"ng-lazyloaded"),U(e.element,"ng-lazyloading")}loadImage(e){if(this.skipLazyLoading(e))return[e.imagePath];const{element:t,useSrcset:s,imagePath:a,decode:h}=e;let d;return b(t)&&E(t)?(d=t.parentNode.cloneNode(!0).getElementsByTagName("img")[0],x(d),M(d,a,s)):(d=new Image,b(t)&&t.referrerPolicy&&(d.referrerPolicy=t.referrerPolicy),b(t)&&t.sizes&&(d.sizes=t.sizes),s&&"srcset"in d?d.srcset=a:d.src=a),h&&d.decode?d.decode().then(()=>a):new Promise((L,R)=>{d.onload=()=>L(a),d.onerror=()=>R(null)})}setErrorImage(e,t){const{element:s,useSrcset:a,errorImagePath:h}=t;Z(s,h,a),N(s,"ng-failed-lazyloaded")}setLoadedImage(e,t){const{element:s,useSrcset:a}=t;k(s,e,a)}isDisabled(){return(0,_.PM)(this.platformId)&&!this.isBot()}skipLazyLoading(e){return this.isBot(e)}isBot(e){var t;return!(null===(t=this.navigator)||void 0===t||!t.userAgent)&&/googlebot|bingbot|yandex|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora\ link\ preview|showyoubot|outbrain|pinterest\/0\.|pinterestbot|slackbot|vkShare|W3C_Validator|whatsapp|duckduckbot|prerender/i.test(this.navigator.userAgent)}}class G extends V{constructor(){super(...arguments),this.observers=new WeakMap,this.intersectionSubject=new n.x,this.uniqKey={}}getObservable(e){if(this.skipLazyLoading(e))return(0,r.of)({isIntersecting:!0});if(e.customObservable)return e.customObservable;const t=e.scrollContainer||this.uniqKey,s={root:e.scrollContainer||null};e.offset&&(s.rootMargin=`${e.offset}px`);let a=this.observers.get(t);return a||(a=new IntersectionObserver(h=>this.loadingCallback(h),s),this.observers.set(t,a)),a.observe(e.element),f.y.create(h=>{const d=this.intersectionSubject.pipe((0,y.h)(L=>L.target===e.element)).subscribe(h);return()=>{d.unsubscribe(),a.unobserve(e.element)}})}isVisible(e){return e.isIntersecting}loadingCallback(e){e.forEach(t=>this.intersectionSubject.next(t))}}const W=new g.OlP("LazyLoadImageHooks");let J=(()=>{class o{constructor(t,s,a,h){this.onStateChange=new g.vpe,this.elementRef=t,this.ngZone=s,this.propertyChanges$=new c.t,this.hooks=h,this.hooks.setPlatformId(a),this.uid=Math.random().toString(36).substr(2,9)}ngOnChanges(){!0===this.debug&&!this.debugSubscription&&(this.debugSubscription=this.onStateChange.subscribe(t=>console.log(t))),this.propertyChanges$.next({element:this.elementRef.nativeElement,imagePath:this.lazyImage,defaultImagePath:this.defaultImage,errorImagePath:this.errorImage,useSrcset:this.useSrcset,offset:this.offset?0|this.offset:0,scrollContainer:this.scrollTarget,customObservable:this.customObservable,decode:this.decode,onStateChange:this.onStateChange,id:this.uid})}ngAfterContentInit(){if(this.hooks.isDisabled())return null;this.ngZone.runOutsideAngular(()=>{this.loadSubscription=this.propertyChanges$.pipe((0,I.b)(t=>this.hooks.onAttributeChange(t)),(0,I.b)(t=>t.onStateChange.emit({reason:"setup"})),(0,I.b)(t=>this.hooks.setup(t)),(0,B.w)(t=>t.imagePath?this.hooks.getObservable(t).pipe(function j(o,e){return t=>t.pipe((0,I.b)(s=>e.onStateChange.emit({reason:"observer-emit",data:s})),(0,y.h)(s=>o.isVisible(s,e)),(0,A.q)(1),(0,I.b)(()=>e.onStateChange.emit({reason:"start-loading"})),(0,l.z)(()=>o.loadImage(e)),(0,I.b)(()=>e.onStateChange.emit({reason:"mount-image"})),(0,I.b)(s=>o.setLoadedImage(s,e)),(0,I.b)(()=>e.onStateChange.emit({reason:"loading-succeeded"})),(0,C.U)(()=>!0),(0,u.K)(s=>(e.onStateChange.emit({reason:"loading-failed",data:s}),o.setErrorImage(s,e),(0,r.of)(!1))),(0,I.b)(()=>{e.onStateChange.emit({reason:"finally"}),o.finally(e)}))}(this.hooks,t)):function T(){return S}())).subscribe({next:()=>null})})}ngOnDestroy(){var t,s;this.propertyChanges$.pipe((0,A.q)(1)).subscribe({next:a=>this.hooks.onDestroy(a)}).unsubscribe(),null===(t=this.loadSubscription)||void 0===t||t.unsubscribe(),null===(s=this.debugSubscription)||void 0===s||s.unsubscribe()}}return o.\u0275fac=function(t){return new(t||o)(g.Y36(g.SBq),g.Y36(g.R0b),g.Y36(g.Lbi),g.Y36(W))},o.\u0275dir=g.lG2({type:o,selectors:[["","lazyLoad",""]],inputs:{lazyImage:["lazyLoad","lazyImage"],defaultImage:"defaultImage",errorImage:"errorImage",scrollTarget:"scrollTarget",customObservable:"customObservable",offset:"offset",useSrcset:"useSrcset",decode:"decode",debug:"debug"},outputs:{onStateChange:"onStateChange"},features:[g.TTD]}),o})(),Q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=g.oAB({type:o}),o.\u0275inj=g.cJS({providers:[{provide:W,useClass:G}]}),o})();class v{constructor(e,t,s,a){this.left=e,this.top=t,this.right=s,this.bottom=a}static fromElement(e){const{left:t,top:s,right:a,bottom:h}=e.getBoundingClientRect();return 0===t&&0===s&&0===a&&0===h?v.empty:new v(t,s,a,h)}static fromWindow(e){return new v(0,0,e.innerWidth,e.innerHeight)}inflate(e){this.left-=e,this.top-=e,this.right+=e,this.bottom+=e}intersectsWith(e){return e.left<this.right&&this.left<e.right&&e.top<this.bottom&&this.top<e.bottom}getIntersectionWith(e){const t=Math.max(this.left,e.left),s=Math.max(this.top,e.top),a=Math.min(this.right,e.right),h=Math.min(this.bottom,e.bottom);return a>=t&&h>=s?new v(t,s,a,h):v.empty}}v.empty=new v(0,0,0,0)}}]);
"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[431],{431:(Y,g,o)=>{o.r(g),o.d(g,{ScriptSandboxModule:()=>E});var h=o(9090),b=o(6814),y=o(7905),v=o(8109),C=o(6765),p=o(5861),u=o(7165),R=o(1410),T=o(9121),S=o(3729),D=o(137),M=o(8645),O=o(9773),x=o(8391),e=o(5879),F=o(3285),I=o(9473),U=o(1354);function N(s,c){if(1&s&&e._UZ(0,"app-loader",3),2&s){const r=e.oxw();e.Q6J("message",r.loaderMessage)}}const B=function(s){return{"d-none":s}};function J(s,c){if(1&s){const r=e.EpF();e.ynx(0),e.TgZ(1,"app-sandbox",4),e.NdJ("loadEvent",function(){e.CHM(r);const a=e.oxw();return e.KtG(a.sandboxLoaded())}),e.qZA(),e.BQk()}if(2&s){const r=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(6,B,r.sandbox.loading))("head",r.sandbox.headData)("body",r.sandbox.bodyData)("initData",r.sandbox.initData)("eventsObservable",r.sandbox.eventObservable)("resetMainPaddig",!0)}}const Z=[{path:"",component:(()=>{var s;class c{constructor(t,a,n,i,l,d){this.activatedRoute=t,this.router=a,this.globalsService=n,this.scriptListService=i,this.scriptSandboxService=l,this.tokensService=d,this.loaderMessage="Recupero dei dati",this.breadcrumbUrl=u.B2.SCRIPT_SANDBOX,this.breadcrumbNodes=[],this.breadcrumbTitle="",this.isForum=!1,this.targetType=S.D7.USER,this.componentDestroyed=new M.x,this.forum=this.globalsService.forum}ngOnInit(){var t=this;return(0,p.Z)(function*(){var a;const n=t.activatedRoute.snapshot.paramMap.get("scriptId"),i=t.activatedRoute.snapshot.paramMap.get("sandboxSlug")||"";t.targetType=(null===(a=t.activatedRoute.parent)||void 0===a?void 0:a.snapshot.data.type)||S.D7.USER,t.isForum=t.targetType===S.D7.FORUM,n?(t.breadcrumbNodes=[t.isForum?u.B2.SCRIPT_FORUM:u.B2.SCRIPT_USER],t.globalsService.forumObservable.pipe((0,O.R)(t.componentDestroyed)).subscribe(function(){var l=(0,p.Z)(function*(d){t.forum=d,t.isForum&&(t.loaderMessage="Recupero dei dati",t.breadcrumbTitle="",t.sandbox=void 0,yield t.setData(n,i))});return function(d){return l.apply(this,arguments)}}()),yield t.setData(n,i)):yield t.redirect()})()}setData(t,a){var n=this;return(0,p.Z)(function*(){if(n.isForum&&!n.forum)return void(yield n.redirect());const[i,l,d,P]=yield n.scriptListService.getScript(t,n.isForum?n.forum.cid:n.globalsService.credentials.user.ffuid,n.targetType),m=null==i?void 0:i.sandboxes.find(f=>!f.inSettings&&f.slug===a);i&&d&&m&&(!n.isForum||n.forum.admin||P.edit)?(n.breadcrumbTitle=i.name+(m.name?` - ${m.name}`:""),n.loaderMessage="Caricamento della sandbox",n.setSandbox(m,l)):yield n.redirect()})()}setSandbox(t,a){var n=this;return(0,p.Z)(function*(){const i=yield n.tokensService.generateJwe(x.s9.SANDBOX),l=JSON.parse(a);n.scriptSandboxService.create(t,{token:i,script:{settings:l}}).subscribe(d=>n.sandbox=d)})()}redirect(){var t=this;return(0,p.Z)(function*(){yield t.router.navigate([t.isForum?u.B2.SCRIPT_FORUM:u.B2.SCRIPT_USER])})()}sandboxLoaded(){this.sandbox.loading=!1}ngOnDestroy(){this.componentDestroyed.next(),this.componentDestroyed.complete()}}return(s=c).\u0275fac=function(t){return new(t||s)(e.Y36(v.gz),e.Y36(v.F0),e.Y36(R.d),e.Y36(T.o),e.Y36(D.s),e.Y36(x.H))},s.\u0275cmp=e.Xpm({type:s,selectors:[["ng-component"]],decls:3,vars:6,consts:[[1,"d-block",3,"pageTitle","url","nodes","hideNavOnSmallScreen"],[3,"message",4,"ngIf"],[4,"ngIf"],[3,"message"],[3,"ngClass","head","body","initData","eventsObservable","resetMainPaddig","loadEvent"]],template:function(t,a){1&t&&(e._UZ(0,"app-breadcrumb",0),e.YNc(1,N,1,1,"app-loader",1),e.YNc(2,J,2,8,"ng-container",2)),2&t&&(e.Q6J("pageTitle",a.breadcrumbTitle)("url",a.breadcrumbUrl)("nodes",a.breadcrumbNodes)("hideNavOnSmallScreen",!0),e.xp6(1),e.Q6J("ngIf",!a.sandbox||a.sandbox.loading),e.xp6(1),e.Q6J("ngIf",a.sandbox))},dependencies:[F.L,b.mk,b.O5,I.R,U.w],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-grow:1}"]}),c})()}];let E=(()=>{var s;class c{}return(s=c).\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[h.w,b.ez,y.q,v.Bz.forChild(Z),C.i]}),c})()}}]);
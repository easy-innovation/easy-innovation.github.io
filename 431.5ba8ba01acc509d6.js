"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[431],{431:(J,S,o)=>{o.r(S),o.d(S,{ScriptSandboxModule:()=>E});var x=o(9090),b=o(6814),f=o(7905),v=o(8109),h=o(6765),p=o(5861),u=o(7165),y=o(1410),T=o(6245),m=o(3729),C=o(137),D=o(8645),R=o(9773),g=o(5202),e=o(5879),M=o(3285),O=o(9473),F=o(1354);function I(a,l){if(1&a&&e._UZ(0,"app-loader",3),2&a){const i=e.oxw();e.Q6J("message",i.loaderMessage)}}const U=function(a){return{"d-none":a}};function N(a,l){if(1&a){const i=e.EpF();e.ynx(0),e.TgZ(1,"app-sandbox",4),e.NdJ("loadEvent",function(){e.CHM(i);const s=e.oxw();return e.KtG(s.sandboxLoaded())}),e.qZA(),e.BQk()}if(2&a){const i=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(6,U,i.sandbox.loading))("head",i.sandbox.headData)("body",i.sandbox.bodyData)("initData",i.sandbox.initData)("eventsObservable",i.sandbox.eventObservable)("resetMainPaddig",!0)}}const B=[{path:"",component:(()=>{var a;class l{constructor(t,s,n,r,d,c){this.activatedRoute=t,this.router=s,this.globalsService=n,this.scriptListService=r,this.scriptSandboxService=d,this.tokensService=c,this.loaderMessage="Recupero dei dati",this.breadcrumbUrl=u.B2.SCRIPT_SANDBOX,this.breadcrumbNodes=[],this.breadcrumbTitle="",this.isForum=!1,this.targetType=m.D7.USER,this.componentDestroyed=new D.x,this.forum=this.globalsService.forum}ngOnInit(){var t=this;return(0,p.Z)(function*(){var s;const n=t.activatedRoute.snapshot.paramMap.get("scriptId"),r=t.activatedRoute.snapshot.paramMap.get("sandboxSlug")||"";t.targetType=(null===(s=t.activatedRoute.parent)||void 0===s?void 0:s.snapshot.data.type)||m.D7.USER,t.isForum=t.targetType===m.D7.FORUM,n?(t.breadcrumbNodes=[t.isForum?u.B2.SCRIPT_FORUM:u.B2.SCRIPT_USER],t.globalsService.forumObservable.pipe((0,R.R)(t.componentDestroyed)).subscribe(function(){var d=(0,p.Z)(function*(c){t.forum=c,t.isForum&&(t.loaderMessage="Recupero dei dati",t.breadcrumbTitle="",t.sandbox=void 0,yield t.setData(n,r))});return function(c){return d.apply(this,arguments)}}()),yield t.setData(n,r)):yield t.redirect()})()}setData(t,s){var n=this;return(0,p.Z)(function*(){if(n.isForum&&!n.forum)return void(yield n.redirect());const r=yield n.scriptListService.getSingleScriptData(t,n.isForum?n.forum.cid:n.globalsService.credentials.user.ffuid,n.targetType),d=null==r?void 0:r.script.sandboxes.find(c=>!c.inSettings&&c.slug===s);r&&r.installed&&d&&(!n.isForum||n.forum.admin||r.permissions.includes(m.Af.EDIT))?(n.breadcrumbTitle=r.script.name+(d.name?` - ${d.name}`:""),n.loaderMessage="Caricamento della sandbox",n.setSandbox(d,r.settings)):yield n.redirect()})()}setSandbox(t,s){var n=this;return(0,p.Z)(function*(){const r=yield n.tokensService.generateJwe(g.s9.SANDBOX),d=JSON.parse(s||"{}");n.scriptSandboxService.create(t,{token:r,script:{settings:d}}).subscribe(c=>n.sandbox=c)})()}redirect(){var t=this;return(0,p.Z)(function*(){yield t.router.navigate([t.isForum?u.B2.SCRIPT_FORUM:u.B2.SCRIPT_USER])})()}sandboxLoaded(){this.sandbox.loading=!1}ngOnDestroy(){this.componentDestroyed.next(),this.componentDestroyed.complete()}}return(a=l).\u0275fac=function(t){return new(t||a)(e.Y36(v.gz),e.Y36(v.F0),e.Y36(y.d),e.Y36(T.o),e.Y36(C.s),e.Y36(g.H))},a.\u0275cmp=e.Xpm({type:a,selectors:[["ng-component"]],decls:3,vars:6,consts:[[1,"d-block",3,"pageTitle","url","nodes","hideNavOnSmallScreen"],[3,"message",4,"ngIf"],[4,"ngIf"],[3,"message"],[3,"ngClass","head","body","initData","eventsObservable","resetMainPaddig","loadEvent"]],template:function(t,s){1&t&&(e._UZ(0,"app-breadcrumb",0),e.YNc(1,I,1,1,"app-loader",1),e.YNc(2,N,2,8,"ng-container",2)),2&t&&(e.Q6J("pageTitle",s.breadcrumbTitle)("url",s.breadcrumbUrl)("nodes",s.breadcrumbNodes)("hideNavOnSmallScreen",!0),e.xp6(1),e.Q6J("ngIf",!s.sandbox||s.sandbox.loading),e.xp6(1),e.Q6J("ngIf",s.sandbox))},dependencies:[M.L,b.mk,b.O5,O.R,F.w],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-grow:1}"]}),l})()}];let E=(()=>{var a;class l{}return(a=l).\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[x.w,b.ez,f.q,v.Bz.forChild(B),h.i]}),l})()}}]);
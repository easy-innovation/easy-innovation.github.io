"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[431],{431:(A,g,a)=>{a.r(g),a.d(g,{ScriptSandboxModule:()=>Q});var S=a(9090),b=a(6814),x=a(2630),h=a(7905),f=a(8109),y=a(6765),u=a(5861),p=a(7165),C=a(1410),R=a(6245),m=a(3729),T=a(137),D=a(8645),M=a(9773),v=a(5202),t=a(5879),I=a(3285),O=a(146),F=a(9473),N=a(1354);function U(o,c){1&o&&t._UZ(0,"app-forum-required")}function E(o,c){if(1&o&&t._UZ(0,"app-loader",5),2&o){const s=t.oxw(2);t.Q6J("message",s.loaderMessage)}}const B=function(o){return{"d-none":o}},J=function(){return["bg-light"]};function Y(o,c){if(1&o){const s=t.EpF();t.ynx(0),t.TgZ(1,"app-sandbox",6),t.NdJ("loadEvent",function(){t.CHM(s);const r=t.oxw(2);return t.KtG(r.sandboxLoaded())}),t.qZA(),t.BQk()}if(2&o){const s=t.oxw(2);t.xp6(1),t.Q6J("ngClass",t.VKq(7,B,s.sandbox.loading))("head",s.sandbox.headData)("body",s.sandbox.bodyData)("bodyClass",t.DdM(9,J))("initData",s.sandbox.initData)("eventsObservable",s.sandbox.eventObservable)("resetMainPaddig",!0)}}function Z(o,c){if(1&o&&(t.YNc(0,E,1,1,"app-loader",3),t.YNc(1,Y,2,10,"ng-container",4)),2&o){const s=t.oxw();t.Q6J("ngIf",!s.sandbox||s.sandbox.loading),t.xp6(1),t.Q6J("ngIf",s.sandbox)}}const P=[{path:"",component:(()=>{var o;class c{constructor(e,r,n,i,d,l){this.activatedRoute=e,this.router=r,this.globalsService=n,this.scriptListService=i,this.scriptSandboxService=d,this.tokensService=l,this.loaderMessage="Recupero dei dati",this.breadcrumbUrl=p.B2.SCRIPT_SANDBOX,this.breadcrumbNodes=[],this.breadcrumbTitle="",this.forumRequired=!1,this.isForum=!1,this.targetType=m.D7.USER,this.componentDestroyed=new D.x,this.forum=this.globalsService.forum}ngOnInit(){var e=this;return(0,u.Z)(function*(){var r;const n=e.activatedRoute.snapshot.paramMap.get("scriptId"),i=e.activatedRoute.snapshot.paramMap.get("sandboxSlug")||"";e.targetType=(null===(r=e.activatedRoute.parent)||void 0===r?void 0:r.snapshot.data.type)||m.D7.USER,e.isForum=e.targetType===m.D7.FORUM,n?(e.breadcrumbNodes=[e.isForum?p.B2.SCRIPT_FORUM:p.B2.SCRIPT_USER],e.globalsService.forumObservable.pipe((0,M.R)(e.componentDestroyed)).subscribe(function(){var d=(0,u.Z)(function*(l){e.forum=l,e.isForum&&(e.loaderMessage="Recupero dei dati",e.breadcrumbTitle="",e.sandbox=void 0,yield e.setData(n,i))});return function(l){return d.apply(this,arguments)}}()),yield e.setData(n,i)):yield e.redirect()})()}setData(e,r){var n=this;return(0,u.Z)(function*(){if(n.isForum&&!n.forum)return void(n.forumRequired=!0);n.forumRequired=!1;const i=yield n.scriptListService.getSingleScriptData(e,n.isForum?n.forum.cid:n.globalsService.credentials.user.ffuid,n.targetType),d=null==i?void 0:i.script.sandboxes.find(l=>!l.inSettings&&l.slug===r);i&&i.installed&&d&&(!n.isForum||n.forum.admin||i.permissions.includes(m.Af.EDIT))?(n.breadcrumbTitle=i.script.name+(d.name?` - ${d.name}`:""),n.loaderMessage="Caricamento della sandbox",n.setSandbox(d,i.settings)):yield n.redirect()})()}setSandbox(e,r){var n=this;return(0,u.Z)(function*(){const i=yield n.tokensService.generateJwe(v.s9.SANDBOX),d=JSON.parse(r||"{}");n.scriptSandboxService.create(e,{token:i,script:{settings:d}}).subscribe(l=>n.sandbox=l)})()}redirect(){var e=this;return(0,u.Z)(function*(){yield e.router.navigate([e.isForum?p.B2.SCRIPT_FORUM:p.B2.SCRIPT_USER])})()}sandboxLoaded(){this.sandbox.loading=!1}ngOnDestroy(){this.componentDestroyed.next(),this.componentDestroyed.complete()}}return(o=c).\u0275fac=function(e){return new(e||o)(t.Y36(f.gz),t.Y36(f.F0),t.Y36(C.d),t.Y36(R.o),t.Y36(T.s),t.Y36(v.H))},o.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],decls:4,vars:6,consts:[[1,"d-block",3,"pageTitle","url","nodes","hideNavOnSmallScreen"],[4,"ngIf","ngIfElse"],["content",""],[3,"message",4,"ngIf"],[4,"ngIf"],[3,"message"],[3,"ngClass","head","body","bodyClass","initData","eventsObservable","resetMainPaddig","loadEvent"]],template:function(e,r){if(1&e&&(t._UZ(0,"app-breadcrumb",0),t.YNc(1,U,1,0,"app-forum-required",1),t.YNc(2,Z,2,2,"ng-template",null,2,t.W1O)),2&e){const n=t.MAs(3);t.Q6J("pageTitle",r.breadcrumbTitle)("url",r.breadcrumbUrl)("nodes",r.breadcrumbNodes)("hideNavOnSmallScreen",!0),t.xp6(1),t.Q6J("ngIf",r.forumRequired)("ngIfElse",n)}},dependencies:[I.L,b.mk,b.O5,O.P,F.R,N.w],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-grow:1}"]}),c})()}];let Q=(()=>{var o;class c{}return(o=c).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[S.w,b.ez,x.z,h.q,f.Bz.forChild(P),y.i]}),c})()}}]);
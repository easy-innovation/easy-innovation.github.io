"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[88],{6088:(g,c,t)=>{t.r(c),t.d(c,{GrafanaModule:()=>h});var i=t(6814),f=t(8109),u=t(5861),o=t(2907),a=t(5879),m=t(6593);function p(n,r){if(1&n&&a._UZ(0,"iframe",1),2&n){const e=a.oxw();a.Q6J("src",e.url,a.uOi)}}const d=[{path:"",component:(()=>{class n{constructor(e,s,G){this.graphqlService=e,this.domSanitizer=s,this.endpointsService=G}ngOnInit(){var e=this;return(0,u.Z)(function*(){e.url=e.domSanitizer.bypassSecurityTrustResourceUrl(`${e.endpointsService.get(o.jQ.LOGIN,o.G9.GRAFANA)}/d/2X0QqquWk/docker-containers?orgId=1&refresh=10s&kiosk&auth_token=`+(yield e.graphqlService.query({query:"\nquery Query {\n  generateGrafanaToken\n}"})).data.generateGrafanaToken)})()}}return n.\u0275fac=function(e){return new(e||n)(a.Y36(o.Jk),a.Y36(m.H7),a.Y36(o.oz))},n.\u0275cmp=a.Xpm({type:n,selectors:[["ng-component"]],decls:1,vars:1,consts:[[3,"src",4,"ngIf"],[3,"src"]],template:function(e,s){1&e&&a.YNc(0,p,1,1,"iframe",0),2&e&&a.Q6J("ngIf",s.url)},dependencies:[i.O5],styles:["iframe[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 120px);position:absolute;left:0;top:0}"]}),n})()}];let h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[i.ez,f.Bz.forChild(d)]}),n})()}}]);
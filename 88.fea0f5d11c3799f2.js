"use strict";(self.webpackChunkpages=self.webpackChunkpages||[]).push([[88],{6088:(g,i,t)=>{t.r(i),t.d(i,{GrafanaModule:()=>G});var f=t(6814),u=t(2655),l=t(5861),s=t(3912),e=t(5879),p=t(6593);function d(n,r){if(1&n&&e._UZ(0,"iframe",1),2&n){const o=e.oxw();e.Q6J("src",o.url,e.uOi)}}const h=[{path:"",component:(()=>{var n;class r{constructor(a,c,v){this.graphqlService=a,this.domSanitizer=c,this.endpointsService=v}ngOnInit(){var a=this;return(0,l.Z)(function*(){a.url=a.domSanitizer.bypassSecurityTrustResourceUrl(`${a.endpointsService.get(s.jQ.LOGIN,s.G9.GRAFANA)}/d/2X0QqquWk/docker-containers?orgId=1&refresh=10s&kiosk&auth_token=`+(yield a.graphqlService.query({query:"\nquery Query {\n  generateGrafanaToken\n}"})).data.generateGrafanaToken)})()}}return(n=r).\u0275fac=function(a){return new(a||n)(e.Y36(s.Jk),e.Y36(p.H7),e.Y36(s.oz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["ng-component"]],decls:1,vars:1,consts:[[3,"src",4,"ngIf"],[3,"src"]],template:function(a,c){1&a&&e.YNc(0,d,1,1,"iframe",0),2&a&&e.Q6J("ngIf",c.url)},dependencies:[f.O5],styles:["iframe[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 120px);position:absolute;left:0;top:0}"]}),r})()}];let G=(()=>{var n;class r{}return(n=r).\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.ez,u.Bz.forChild(h)]}),r})()}}]);
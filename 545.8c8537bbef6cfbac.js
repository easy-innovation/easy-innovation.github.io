"use strict";(self.webpackChunkboard=self.webpackChunkboard||[]).push([[545],{2545:(p,i,o)=>{o.r(i),o.d(i,{ScriptModule:()=>S});var a=o(6895),d=o(8348),e=o(5044),n=o(4650),h=o(4034);let s=(()=>{class t{constructor(l,f){this.router=l,this.profileService=f}canActivate(){return!!this.profileService.isDev()||this.router.parseUrl(e.B2.SCRIPT_USER)}canActivateChild(){return this.canActivate()}}return t.\u0275fac=function(l){return new(l||t)(n.LFG(d.F0),n.LFG(h.H))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var c=o(2300);const u=[{path:"",children:[{path:"",redirectTo:"user",pathMatch:"full"},{path:"forum",loadChildren:()=>Promise.all([o.e(993),o.e(592),o.e(248)]).then(o.bind(o,9248)).then(t=>t.ScriptMainModule),data:{title:"Forum",type:c.D7.FORUM}},{path:"user",loadChildren:()=>Promise.all([o.e(993),o.e(592),o.e(248)]).then(o.bind(o,9248)).then(t=>t.ScriptMainModule),data:{title:"User",type:c.D7.USER}},{path:"dev",canActivate:[s],canActivateChild:[s],loadChildren:()=>Promise.all([o.e(993),o.e(934),o.e(592),o.e(388)]).then(o.bind(o,5388)).then(t=>t.ScriptDevModule),data:{title:"Dev"}}]}];let v=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[a.ez,d.Bz.forChild(u),d.Bz]}),t})(),S=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[v,a.ez]}),t})()}}]);
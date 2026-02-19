import{a as S}from"./chunk-NKVJZHRW.js";import{Ea as m,Ka as n,La as h,Oa as y,Qa as u,cb as l}from"./chunk-XFTX4WWK.js";import{ia as o,ma as t}from"./chunk-OQT4JH5V.js";import{h as c}from"./chunk-KP24O5IB.js";var p=`
query UserSearchByName($name: String!, $communityId: String) {
    userSearchByName(name: $name, communityId: $communityId) {
        id
        nickname
        avatar
    }
}`;var C=(()=>{let r=class r extends l{constructor(a,e,i){super(a,i),this.graphqlService=a,this.globalsService=e,this.requestsService=i,this.searchByNameCache={}}searchUserByName(a,e){return c(this,null,function*(){e||(e=u(this.globalsService.credentials?.site.domain||y.FORUMFREE));let i=`${e}${a}`;if(m(this.searchByNameCache,i))return this.searchByNameCache[i];let f=yield this.graphqlService.query({query:p,variables:{name:a,communityId:e}});return this.searchByNameCache[i]=f.data.userSearchByName})}};r.\u0275fac=function(e){return new(e||r)(t(n),t(S),t(h))},r.\u0275prov=o({token:r,factory:r.\u0275fac,providedIn:"root"});let s=r;return s})();export{C as a};

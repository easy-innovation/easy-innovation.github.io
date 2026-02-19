import{g as l}from"./chunk-ETZM2AGE.js";import{a as u}from"./chunk-NKVJZHRW.js";import{Ka as p}from"./chunk-XFTX4WWK.js";import{ia as n,ma as o}from"./chunk-OQT4JH5V.js";import{h as s}from"./chunk-KP24O5IB.js";var y=`
query ListSessions {
    listSessions {
        tokenId
        userAgent
        ip
        iat
        lastIp
        lastUsed
    }
}`,c=`
query ListApiKeys {
    listApiKeys {
        name
        key
        date
    }
}`,d=`
mutation AddApiKey($name: String) {
    addApiKey(name: $name)
}`,m=`
mutation DelApiKey($key: String!) {
    delApiKey(key: $key)
}`;var L=(()=>{let i=class i{constructor(e,t){this.globalsService=e,this.graphqlService=t,this.roles=[],this.profileSubscription=this.globalsService.profileObservable.subscribe(a=>{a?(this.userId=a.user.id,this.roles=a.user.roles):(this.userId=void 0,this.roles=[])})}get scriptDev(){return this.userId?l[this.userId]:void 0}hasAtLeastOnePermission(e){return e.some(t=>this.roles.indexOf(t)>-1)}getSessionList(){return s(this,null,function*(){return(yield this.graphqlService.query({query:y})).data.listSessions})}getApiKeyList(){return s(this,null,function*(){return(yield this.graphqlService.query({query:c})).data.listApiKeys})}addApiKey(e){return s(this,null,function*(){return(yield this.graphqlService.mutate({mutation:d,variables:{name:e}})).data.addApiKey})}deleteApiKey(e){return s(this,null,function*(){return(yield this.graphqlService.mutate({mutation:m,variables:{key:e}})).data.delApiKey})}ngOnDestroy(){this.profileSubscription.unsubscribe()}};i.\u0275fac=function(t){return new(t||i)(o(u),o(p))},i.\u0275prov=n({token:i,factory:i.\u0275fac,providedIn:"root"});let r=i;return r})();export{L as a};

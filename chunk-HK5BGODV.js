import{a as S}from"./chunk-NKVJZHRW.js";import{Ea as r,Ka as p,Na as q,Oa as g,Qa as l,Wa as f}from"./chunk-XFTX4WWK.js";import{ia as y,ma as m}from"./chunk-OQT4JH5V.js";import{a as c,b as h,h as n}from"./chunk-KP24O5IB.js";var F=`
query ForumGroups($communityId: String!) {
    forumGroups(communityId: $communityId) {
        id
        name
        preset
        legenda
    }
}`,I=`
query ForumSections($communityId: String!) {
    forumSections(communityId: $communityId) {
        id
        name
        desc
        subsections {
            id
            name
            desc
            subsections {
                id
                name
                desc
                subsections {
                    id
                    name
                    desc
                    subsections {
                        id
                        name
                        desc
                        subsections {
                            id
                            name
                            desc
                        }
                    }
                }
            }
        }
    }
}`,v=`
query CommunityIdToDomain($communityIds: [String!]!) {
    communityIdToDomain(communityIds: $communityIds) {
        id
        domain
    }
}`,C=`
query MyForumList {
    myForumList {
        id, domain, name, preview
    }
}`,D=`
query ScriptAdmins($communityId: String!) {
    scriptAdmins(communityId: $communityId) {
        id
        nickname
        avatar
    }
}`,b=`
query ForumSearchByDomain($domain: String!, $id: String) {
    forumSearchByDomain(domain: $domain, id: $id) {
      id
      domain
      name
      preview
    }
}`;var A=(()=>{let o=class o extends q{constructor(e,i){super(),this.globalsService=e,this.graphqlService=i,this.groupsCache={},this.groupsPendingRequests={},this.sectionsCache={},this.sectionsPendingRequests={},this.myForumsCache={},this.idToDomainCache={},this.idToDomainMisses=[],this.searchByNameCache={}}get id(){return this.globalsService.forum?.id}get userId(){let e=this.globalsService.credentials?.user.id;if(!e)throw new Error("Missing credentials!");return e}getGroups(){return n(this,null,function*(){let e=this.id;if(!e)return[];if(r(this.groupsCache,e))return this.groupsCache[e];let i=yield r(this.groupsPendingRequests,e)?this.groupsPendingRequests[e]:this.groupsPendingRequests[e]=this.graphqlService.query({query:F,variables:{communityId:e}});return delete this.groupsPendingRequests[e],this.groupsCache[e]=i.data.forumGroups})}getSections(){return n(this,null,function*(){let e=this.id;if(!e)return[];if(r(this.sectionsCache,e))return this.sectionsCache[e];let i=yield r(this.sectionsPendingRequests,e)?this.sectionsPendingRequests[e]:this.sectionsPendingRequests[e]=this.graphqlService.query({query:I,variables:{communityId:e}});return this.sectionsCache[e]=i.data.forumSections})}getDomains(e){return n(this,null,function*(){let i=[],t=e.filter(s=>r(this.idToDomainCache,s)?(i.push(this.idToDomainCache[s]),!1):this.idToDomainMisses.indexOf(s)===-1);if(t.length>0){let s=yield this.graphqlService.query({query:v,variables:{communityIds:t}}),d=[];for(let a of s.data.communityIdToDomain)this.idToDomainCache[a.id]=a,i.push(c({},a)),d.push(a.id);this.idToDomainMisses.push(...t.filter(a=>d.indexOf(a)===-1))}return i})}getMyForumList(){return n(this,null,function*(){let e=this.userId;if(r(this.myForumsCache,e))return this.myForumsCache[e];let i=yield this.graphqlService.query({query:C});return this.myForumsCache[e]=i.data.myForumList})}getScriptAdmins(e){return n(this,null,function*(){return(yield this.graphqlService.query({query:D,variables:{communityId:e}})).data.scriptAdmins})}createForumWithAdmin(e,i,t){let s=f(e,i);if(s)return h(c({},s),{admin:t})}searchForumByName(e,i){return n(this,null,function*(){i||(i=l(this.globalsService.credentials?.site.domain||g.FORUMFREE));let t=`${i}${e}`;if(r(this.searchByNameCache,t))return this.searchByNameCache[t];let s=yield this.graphqlService.query({query:b,variables:{domain:e,id:i}});return this.searchByNameCache[t]=s.data.forumSearchByDomain})}};o.\u0275fac=function(i){return new(i||o)(m(S),m(p))},o.\u0275prov=y({token:o,factory:o.\u0275fac,providedIn:"root"});let u=o;return u})();export{A as a};

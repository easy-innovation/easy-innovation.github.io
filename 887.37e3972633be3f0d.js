(self.webpackChunkpages=self.webpackChunkpages||[]).push([[887],{5172:(Y,j,o)=>{"use strict";o.d(j,{In:()=>f,Ky:()=>O,VC:()=>D,c5:()=>M,gG:()=>E});var f=function(a){return a.FILE_SHOW_LINKS="fileLinks",a.FILE_EDIT="fileEdit",a.DELETE="delete",a.RENAME="rename",a.MOVE="move",a}(f||{}),D=function(a){return a.FILE="file",a.FOLDER="folder",a}(D||{}),E=function(a){return a.FILENAME="filename",a.SIZE="size",a.TIME="time",a.EXTENSION="ext",a}(E||{}),M=function(a){return a.GRID="grid",a.LIST="list",a}(M||{}),O=function(a){return a.W_768_I_1="(max-width: 767.98px)",a.W_933_I_2="(min-width: 768px) and (max-width: 933.98px)",a.W_960_I_3="(min-width: 934px) and (max-width: 959.98px)",a.W_1226_I_2="(min-width: 960px) and (max-width: 1225.98px)",a.W_1540_I_3="(min-width: 1226px) and (max-width: 1539.98px)",a.W_1854_I_4="(min-width: 1540px) and (max-width: 1853.98px)",a.W_2168_I_5="(min-width: 1854px) and (max-width: 2167.98px)",a.W_2482_I_6="(min-width: 2168px) and (max-width: 2481.98px)",a.W_2796_I_7="(min-width: 2482px) and (max-width: 2795.98px)",a.W_3110_I_8="(min-width: 2796px) and (max-width: 3109.98px)",a.W_3424_I_9="(min-width: 3110px) and (max-width: 3423.98px)",a.W_3738_I_10="(min-width: 3424px)",a}(O||{})},1990:(Y,j,o)=>{"use strict";o.d(j,{C7:()=>M,Mi:()=>O,O8:()=>D,er:()=>a,p0:()=>E,xt:()=>L});var f=o(5172);const D=[{ext:["png","apng"],maxSize:15},{ext:["jpeg","jpg","jpe"],maxSize:10},{ext:["gif"],maxSize:15},{ext:["bmp"],maxSize:10},{ext:["webp","webm"],maxSize:10},{ext:["psd","xcf"],maxSize:150},{ext:["svg"],maxSize:30}].map(I=>(I.maxSize*=1048576,I)),E={lastPath:[],layout:{asc:!0,orderBy:f.gG.FILENAME,type:f.c5.GRID},uploader:{checkImage:{time:0,active:!0},showLinkModal:!1}},M="https://upload.forumfree.net/api/",O=/^(?:(?![\t\r\n])[a-zA-Z0-9_\-.\s])*$/,a=/^(?:(?![\t\r\n])[a-zA-Z0-9_\-\s])*$/,L={invalidLength:!1,alreadyUsed:!1,invalidStartOrEnd:!1,invalidCharacter:!1}},5983:(Y,j,o)=>{"use strict";o.d(j,{B:()=>M});var f=o(5172),D=o(1410),E=o(5879);let M=(()=>{var O;class a{constructor(I){this.globalsService=I,this.cache={},this.profileSubscription=this.globalsService.profileObservable.subscribe(n=>{this.ffuid=null==n?void 0:n.user.ffuid})}getItem(I){const n=this.createKey(I);if(this.cache.hasOwnProperty(n))return this.cache[n]}setItem(I,n){this.cache[this.createKey(I)]=n}removeItem(I){const n=this.createKey(I);if(this.cache.hasOwnProperty(n)){if(this.cache[n].folders.length)for(const h of this.cache[n].folders)this.removeItem([...I,h.name]);return delete this.cache[n],!0}return!1}getEntities(I,n){let h={};const m=this.createKey(I);if(!this.cache.hasOwnProperty(m))return h;for(const d of n){const g=(d.type===f.VC.FILE?this.cache[m].files:this.cache[m].folders).find(T=>T.name===d.name);g&&(h[g.name]=g)}return h}addEntities(I,n,h=f.VC.FILE){const m=this.createKey(I);return!!this.cache.hasOwnProperty(m)&&(Array.isArray(n)||(n=[n]),h===f.VC.FILE?this.cache[m].files.unshift(...n):this.cache[m].folders.unshift(...n),!0)}removeEntities(I,n,h=f.VC.FILE){if(Array.isArray(n)||(n=[n]),h===f.VC.FOLDER)for(const T of n)this.removeItem([...I,T]);const m=this.createKey(I);if(!this.cache.hasOwnProperty(m))return[];const d=h===f.VC.FILE?"files":"folders";let g=[];for(const T of n){const R=this.cache[m][d].findIndex(W=>W.name===T);R>-1&&(this.cache[m][d].splice(R,1),g.push(T))}return g}refactorFolderContent(I,n){const h=this.createKey(I);if(!this.cache.hasOwnProperty(h))return!1;n.endsWith("/")||(n+="/");for(const m of this.cache[h].folders)m.url=n+m.name;for(const m of this.cache[h].files)m.url=m.embedUrl=n+m.name,m.time=Date.now();return!0}createKey(I){return`${this.ffuid}/${I.join("/")}`}ngOnDestroy(){this.profileSubscription.unsubscribe()}}return(O=a).\u0275fac=function(I){return new(I||O)(E.LFG(D.d))},O.\u0275prov=E.Yz7({token:O,factory:O.\u0275fac,providedIn:"root"}),a})()},5571:(Y,j,o)=>{"use strict";o.d(j,{AD:()=>D,It:()=>a,ex:()=>f,mH:()=>L,r2:()=>M,vO:()=>O,xJ:()=>E});const f="\nquery UploadEntitiesListToken($scope: String, $target: String!) {\n    uploadEntitiesListToken(scope: $scope, target: $target)\n}",D="\nquery UploadEntitiesHostToken($scope: String, $target: String!) {\n    uploadEntitiesHostToken(scope: $scope, target: $target)\n}",E="\nquery UploadEntitiesCreateDirectoryToken($scope: String, $target: String!) {\n    uploadEntitiesCreateDirectoryToken(scope: $scope, target: $target)\n}",M="\nquery UploadEntitiesMoveToken($scope: String, $source: String!, $target: String!) {\n    uploadEntitiesMoveToken(scope: $scope, source: $source, target: $target)\n}",O="\nquery UploadEntitiesDeleteToken($scope: String, $target: String!) {\n    uploadEntitiesDeleteToken(scope: $scope, target: $target)\n}",a="\nquery UploadHistoryAvailableDateRange {\n    uploadHistoryAvailableDateRange {\n        start\n        end\n    }\n}",L="\nsubscription UploadEntities($scope: String) {\n    uploadEntities(scope: $scope) {\n        eventMessage\n        eventType\n        user {\n            avatar\n            host\n            id\n            nickname\n        }\n    }\n}"},5487:(Y,j,o)=>{"use strict";o.d(j,{r:()=>O});var f=o(8645),D=o(5619),E=o(446),M=o(5879);let O=(()=>{var a;class L{constructor(n){this.uploadPreferencesService=n,this.selectedFileListArray=[],this.actionSubject=new f.x,this.uploadingFileQueueSubject=new f.x,this.uploadingFileErrorSubject=new f.x,this.currentFolderPathSubject=new f.x,this.layoutOptionsSubject=new f.x,this.renameEntitySubject=new f.x,this.entityPendingSubject=new f.x,this.deleteFileSubject=new f.x,this.uploadedFileSubject=new f.x,this.draggedFileListSubject=new f.x,this.startUploadSubject=new f.x,this.startMoveSubject=new f.x,this.selectedFileListSubject=new D.X(this.selectedFileListArray)}get actionObservable(){return this.actionSubject.asObservable()}pushAction(n){this.actionSubject.next(n)}get layoutOptionsObservable(){return this.layoutOptionsSubject.asObservable()}pushLayoutOptions(n){this.uploadPreferencesService.layoutOptions=n,this.layoutOptionsSubject.next(n)}get currentFolderPathObservable(){return this.currentFolderPathSubject.asObservable()}pushCurrentFolderPath(n){this.uploadPreferencesService.lastFolderPath=n,this.currentFolderPathSubject.next(n)}get uploadingFileQueueObservable(){return this.uploadingFileQueueSubject.asObservable()}pushUploadingFileQueue(n){this.uploadingFileQueueSubject.next(n)}get uploadingFileErrorObservable(){return this.uploadingFileErrorSubject.asObservable()}pushUploadingFileError(n){this.uploadingFileErrorSubject.next(n)}get renameEntityObservable(){return this.renameEntitySubject.asObservable()}pushRenameEntity(n){this.renameEntitySubject.next(n)}get entityPendingObservable(){return this.entityPendingSubject.asObservable()}pushEntityPending(n){this.entityPendingSubject.next(n)}get deleteFileObservable(){return this.deleteFileSubject.asObservable()}pushDeleteFile(n){this.deleteFileSubject.next(n)}get uploadedFileObservable(){return this.uploadedFileSubject.asObservable()}pushUploadedFile(n){this.uploadedFileSubject.next(n)}get draggedFileListObservable(){return this.draggedFileListSubject.asObservable()}pushDraggedFileList(n){this.draggedFileListSubject.next(n)}get startUploadObservable(){return this.startUploadSubject.asObservable()}pushStartUpload(n){this.startUploadSubject.next(n)}get startMoveObservable(){return this.startMoveSubject.asObservable()}pushStartMove(n){this.startMoveSubject.next(n)}get selectedFileListObservable(){return this.selectedFileListSubject.asObservable()}pushSelectedFile(n){if(Array.isArray(n)||(n=[n]),0===n.length)return void(this.selectedFileListArray.length>0&&(this.selectedFileListArray=[],this.selectedFileListSubject.next(this.selectedFileListArray)));let h=!1;for(const m of n){const d=this.selectedFileListArray.findIndex(g=>g.name===m.name);m.selected?-1===d&&(this.selectedFileListArray.push({name:m.name}),h=!0):d>-1&&(this.selectedFileListArray.splice(d,1),h=!0)}h&&this.selectedFileListSubject.next(this.selectedFileListArray)}}return(a=L).\u0275fac=function(n){return new(n||a)(M.LFG(E.p))},a.\u0275prov=M.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),L})()},446:(Y,j,o)=>{"use strict";o.d(j,{p:()=>a});var f=o(7165),D=o(463),E=o(1990),M=o(2986),O=o(5879);let a=(()=>{var L;class I{constructor(h,m){this.preferencesService=h,this.urlQueryParamsService=m;const d=this.urlQueryParamsService.getAndDeleteParam(f.RT.UPLOAD_PATH);d&&(this.lastFolderPath=d.split("/").filter(g=>g.length>0))}get preferences(){return this.preferencesService.getItem(f.Ye.UPLOAD)||E.p0}set preferences(h){this.preferencesService.setItem(f.Ye.UPLOAD,h)}get lastFolderPath(){return(this.preferences.lastPath||E.p0.lastPath).filter(h=>h.length>0)}set lastFolderPath(h){const m=this.preferences;m.lastPath=h,this.preferences=m}get layoutOptions(){const h=E.p0.layout,m=this.preferences.layout;return m&&0===Object.keys(h).filter(d=>!m.hasOwnProperty(d)).length?m:h}set layoutOptions(h){const m=this.preferences;m.layout=h,this.preferences=m}get uploader(){const h=this.preferences.uploader||E.p0.uploader;return!h.checkImage.active&&Date.now()-h.checkImage.time>6048e5&&(h.checkImage.active=!0,this.uploader=h),h.hasOwnProperty("showLinkModal")||(h.showLinkModal=!1),h}set uploader(h){const m=this.preferences;m.uploader=h,this.preferences=m}}return(L=I).\u0275fac=function(h){return new(h||L)(O.LFG(D.y),O.LFG(M.J))},L.\u0275prov=O.Yz7({token:L,factory:L.\u0275fac,providedIn:"root"}),I})()},658:(Y,j,o)=>{"use strict";o.d(j,{C:()=>T});var f=o(1413),D=o(5861),E=o(3888),M=o(4036),O=o(5172),a=o(9054),L=o(5571),I=o(5983),n=o(1990),h=o(446),m=o(4004),d=o(5879),g=o(9862);let T=(()=>{var R;class W{constructor(x,P,S,s){this.graphqlService=x,this.uploadCacheService=P,this.uploadPreferencesService=S,this.http=s}get cache(){return this.uploadCacheService}get preferences(){return this.uploadPreferencesService}setGqlIdHeader(){this.graphqlService.safeSetGlobalHeader(E._o.HeaderKeys.UUID,(0,m.Z)())}removeGqlIdHeader(){this.graphqlService.removeGlobalHeader(E._o.HeaderKeys.UUID)}getGqlIdHeader(){return this.graphqlService.getGlobalHeader(E._o.HeaderKeys.UUID)||""}getFileList(x,P){var S=this;return(0,D.Z)(function*(){const s=S.uploadCacheService.getItem(x);if(s)return s;const b=(yield S.graphqlService.query({query:L.ex,variables:{scope:P,target:x.join("/")}})).data.uploadEntitiesListToken,t=yield S.sendRequest(b),u={files:t.files.map(v=>{const C=(0,a.Tb)(v.url);return(0,f.Z)((0,f.Z)({},v),{time:1e3*v.time,filename:C.filename,ext:C.ext,isImage:(0,a.Or)(C.ext),embedUrl:`${v.url}?t=${v.time}`,type:O.VC.FILE})}),folders:t.folders.map(v=>(0,f.Z)((0,f.Z)({},v),{},{type:O.VC.FOLDER}))};return S.uploadCacheService.setItem(x,u),u})()}createDirectory(x,P){var S=this;return(0,D.Z)(function*(){const s=(yield S.graphqlService.mutate({mutation:L.xJ,variables:{scope:P,target:x.join("/")}})).data.uploadEntitiesCreateDirectoryToken;return yield S.sendRequest(s)})()}moveRenameEntity(x,P,S,s,b){var t=this;return(0,D.Z)(function*(){s||(s=S);const c=(yield t.graphqlService.mutate({mutation:L.r2,variables:{scope:b,source:(x.length?`${x.join("/")}/`:"")+S,target:(P.length?`${P.join("/")}/`:"")+s}})).data.uploadEntitiesMoveToken,u=yield t.sendRequest(c);return(0,f.Z)((0,f.Z)({},u),{},{time:1e3*u.time})})()}deleteEntity(x,P,S){var s=this;return(0,D.Z)(function*(){const b=(yield s.graphqlService.mutate({mutation:L.vO,variables:{scope:S,target:(x.length?`${x.join("/")}/`:"")+P}})).data.uploadEntitiesDeleteToken;return yield s.sendRequest(b),!0})()}getHostToken(x,P,S){var s=this;return(0,D.Z)(function*(){return(yield s.graphqlService.query({query:L.AD,variables:{scope:S,target:(x.length?`${x.join("/")}/`:"")+P}})).data.uploadEntitiesHostToken})()}sendRequest(x){var P=this;return(0,D.Z)(function*(){return(yield(0,M.z)(P.http.post(n.C7,JSON.stringify({payload:x}),{headers:{"Content-Type":"application/json"}}))).success})()}subscribeForChanges(x,P){var S=this;return(0,D.Z)(function*(){return yield S.graphqlService.subscribe({query:L.mH,variables:{scope:P}},s=>{var b;if(null===(b=s.data)||void 0===b||!b.uploadEntities)return;const t=JSON.parse(s.data.uploadEntities.eventMessage);!t.payload.customHeaders||!t.payload.customHeaders.hasOwnProperty(E._o.HeaderKeys.UUID)||t.payload.customHeaders[E._o.HeaderKeys.UUID]===S.getGqlIdHeader()||x({type:s.data.uploadEntities.eventType,message:t})})})()}}return(R=W).\u0275fac=function(x){return new(x||R)(d.LFG(E.Jk),d.LFG(I.B),d.LFG(h.p),d.LFG(g.eN))},R.\u0275prov=d.Yz7({token:R,factory:R.\u0275fac,providedIn:"root"}),W})()},9054:(Y,j,o)=>{"use strict";o.d(j,{$H:()=>J,JN:()=>m,LZ:()=>g,Lv:()=>L,Or:()=>W,Tb:()=>O,g0:()=>b,g8:()=>s,jL:()=>R,lY:()=>I,ok:()=>P,rQ:()=>S,rc:()=>x,zO:()=>a});var f=o(5861),D=o(1413),E=o(5172),M=o(1990);function O(t){let c=t;if(t.indexOf("/")>-1){const F=t.split("/");c=F[F.length-1]}const u=c.replace(/\?.*$/,"").split("."),v=u.length>1?u[u.length-1].toLowerCase():"",C=decodeURIComponent(u.slice(0,-1).join("."));return{ext:v,filename:C,name:v?`${C}.${v}`:""}}function a(t,c={}){const u=O(t),v=Date.now();return(0,D.Z)({name:u.name,size:0,time:v,url:t,ext:u.ext,filename:u.filename,isImage:W(u.ext),embedUrl:`${t}?t=${v}`,type:E.VC.FILE},c)}function L(t){let c=t;c.endsWith("/")&&(c=c.slice(0,-1));const u=c.split("/");return{name:decodeURIComponent(u[u.length-1])}}function I(t){return{name:L(t).name,url:t,type:E.VC.FOLDER}}function n(t){return h.apply(this,arguments)}function h(){return(h=(0,f.Z)(function*(t){const c=new FileReader,u=new Promise(v=>c.addEventListener("load",()=>v(c.result)));return c.readAsDataURL(t),u})).apply(this,arguments)}function m(t){return d.apply(this,arguments)}function d(){return(d=(0,f.Z)(function*(t){const c=new DataView(yield t.arrayBuffer());if(2303741511===c.getUint32(0)&&218765834===c.getUint32(4)){if(-1===[4,6].indexOf(c.getUint8(25)))return!1;const v=Object.assign(new Image,{src:yield n(t)});yield new Promise(B=>v.addEventListener("load",()=>B(!0)));const C=Object.assign(document.createElement("canvas"),{width:v.width,height:v.height}).getContext("2d");if(!C)return!1;C.imageSmoothingEnabled=!1,C.drawImage(v,0,0);const F=null==C?void 0:C.getImageData(0,0,v.width,v.height);if(F)for(let B=0;B<F.data.length;B+=4)if(F.data[B+3]<255)return!0}return!1})).apply(this,arguments)}function g(t){return T.apply(this,arguments)}function T(){return(T=(0,f.Z)(function*(t){const c=Object.assign(new Image,{src:yield n(t)});return yield new Promise(u=>c.addEventListener("load",()=>u(!0))),c})).apply(this,arguments)}function R(t){return t.map(c=>({name:c.name,ext:c.ext,type:E.VC.FILE,url:c.url,embedUrl:c.embedUrl,isImage:c.isImage}))}function W(t,c=[]){return["png","apng","jpeg","jpg","jpe","gif","svg","webp"].includes(t)&&!c.includes(t)}function J(t){return W(t,["gif","svg"])}function x(t,c,u,v=[],C=""){let F=(0,D.Z)({},M.xt);const B=t.trim();F.invalidLength=0===B.length;const G=(B+C).replace(/\s{2,}/g," ");return F.alreadyUsed=c!==B&&v.includes(G),F.invalidStartOrEnd=/(^(\s|\.))|((\s|\.)$)/.test(t),F.invalidCharacter=!(u===E.VC.FILE?M.Mi.test(t):M.er.test(t)),F}function P(t,c){return t.join("/")===c.join("/")}function S(t){let c=[],u=[];for(const v of t)v.type===E.VC.FILE?c.push(v):u.push(v);return{[E.VC.FILE]:c,[E.VC.FOLDER]:u}}function s(t){return M.O8.find(c=>-1!==c.ext.indexOf(t))}function b(t,c){return c=c||O(t.name),{file:{name:t.name,size:t.size,time:0,url:"",ext:c.ext,filename:c.filename,isImage:W(c.ext),embedUrl:"",type:E.VC.FILE},progress:0,completed:!1}}},4887:(Y,j,o)=>{"use strict";o.d(j,{q:()=>J});var f=o(5861),D=o(1413),E=o(4315),M=o.n(E),O=o(9054),a=o(9862),L=o(8645),I=o(1687),n=o(9773),h=o(4036),m=o(1990),d=o(5487),g=o(658),T=function(x){return x[x.ORIENTATION=0]="ORIENTATION",x[x.CAMERA_MODEL=1]="CAMERA_MODEL",x}(T||{});class R{static findApp1Marker(P){const S=new DataView(P),s=new Set([65498,65497,65476,65474,65472,65499,65501]);for(let b=0;b<P.byteLength-2;b+=2){const t=S.getUint16(b);if(65505===t)return{offset:b,size:S.getUint16(b+2),little:18761==S.getUint16(b+8,!1)};if(s.has(t))break}}static stripAndReturnExif(P){return(0,f.Z)(function*(){const S=yield P.arrayBuffer(),s=R.findApp1Marker(S);return s?{file:new File([S.slice(0,s.offset),S.slice(s.offset+s.size+2)],P.name,{type:P.type,lastModified:P.lastModified}),exif:S.slice(s.offset,s.offset+s.size)}:{file:P}})()}static checkExifTagValue(P,S){const s=new DataView(P);if(1165519206!==s.getUint32(4,!1))return;const b=18761===s.getUint16(10,!1);let t=10;t+=s.getUint32(t+4,b);const c=s.getUint16(t,b);t+=2;for(let u=0;u<c;u++){const v=s.getUint16(t+12*u,b);if(S===T.ORIENTATION&&274===v)return s.getUint16(t+12*u+8,b);if(S===T.CAMERA_MODEL&&272===v){const C=s.getUint32(t+12*u+4,b),F=s.getUint32(t+12*u+8,b),B=new Uint8Array(P,F,C),G=Array.from(B);return String.fromCharCode.apply(null,G)}}}}var W=o(5879);let J=(()=>{var x;class P{constructor(s,b,t){this.http=s,this.uploadObservablesService=b,this.uploadService=t,this.requestSubscriptions=[],this.uploaderOptionsObject={compress:!0,openLinkModalAfterUpload:!1}}get uploaderOptions(){return(0,D.Z)({},this.uploaderOptionsObject)}set uploaderOptions(s){this.uploaderOptionsObject=(0,D.Z)({},s)}prepareFile(s,b){var t=this;return(0,f.Z)(function*(){const c=yield t.orientAndCompressFileIfNeeded(s);return c.compressorCheck?c.file:b.compress?yield t.compressFileIfNeeded(s,b.imageDimensions?{width:b.imageDimensions.width,height:b.imageDimensions.height}:{}):s})()}compressFileIfNeeded(s,b={},t=!1){return(0,f.Z)(function*(){let c=["image/png","image/jpeg"],u=(0,D.Z)({strict:!0,checkOrientation:!0,quality:.8,convertSize:1},b);const v=void 0!==u.width||void 0!==u.height;v&&(c.push("image/webp"),u.resize="cover",u.strict=b.strict||!1);const C=s.type.toLowerCase();return s.size<=1e6&&!v&&!t||-1===c.indexOf(s.type.toLowerCase())?s:("image/png"===C&&(yield(0,O.JN)(s))&&(u.convertSize=1/0),new Promise((F,B)=>{new(M())(s,(0,D.Z)((0,D.Z)({},u),{},{success:G=>{const X=G instanceof Blob?new File([G],s.name,{type:s.type,lastModified:s.lastModified}):s;F(X)},error:B}))}))})()}getDimensionsForForcedResize(s){return(0,f.Z)(function*(){const t=yield(0,O.LZ)(s),c=t.width>t.height?"width":"height";if(t[c]>1e3)return{[c]:1e3}})()}orientAndCompressFileIfNeeded(s){var b=this;return(0,f.Z)(function*(){if(-1===["image/jpeg"].indexOf(s.type.toLowerCase()))return{file:s,compressorCheck:!1};const c=yield R.stripAndReturnExif(s),u=c.file;if(c.exif){if(void 0!==R.checkExifTagValue(c.exif,T.CAMERA_MODEL)){const B=yield b.getDimensionsForForcedResize(s);if(B)return{file:yield b.compressFileIfNeeded(s,(0,D.Z)({strict:!0,quality:.7},B)),compressorCheck:!0}}if(1!==R.checkExifTagValue(c.exif,T.ORIENTATION))return{file:yield b.compressFileIfNeeded(s,{},!0),compressorCheck:!0}}return{file:u,compressorCheck:!1}})()}upload(s,b,t,c=!1){const u=new L.x,v=new FormData;v.append("payload",b),v.append("upload",s,s.name),c&&v.append("allowOverwrite","1");const C=this.http.request(new a.aW("POST",m.C7,v,{reportProgress:!0,responseType:"json"}));return this.requestSubscriptions.push(C.subscribe({next:F=>{if(F.type===a.dt.UploadProgress){if(!F.total||(t.progress=Math.round(50*F.loaded/F.total)+20,t.progress<70))return;(0,I.F)(1e3).pipe((0,n.R)(u.asObservable())).subscribe(()=>{if(t.progress<95){const X=Math.round(8*Math.random()+8);t.progress+X>95?t.progress=95:t.progress+=X}})}else if(F instanceof a.Zn){var B,G;if(t.progress=100,t.completed=!0,null!==(B=F.body)&&void 0!==B&&B.error||null===(G=F.body)||void 0===G||!G.success)t.error=!0,this.uploadObservablesService.pushUploadingFileError(t);else{t.file.url=F.body.success.url,t.file.time=Date.now(),t.file.embedUrl=`${t.file.url}?t=${t.file.time}`;const X=(0,O.Tb)(t.file.url);t.file.name=X.name,t.file.filename=X.filename}u.next(t),u.complete()}},error:()=>{t.error=!0,this.uploadObservablesService.pushUploadingFileError(t),u.next(t),u.complete()}})),u.asObservable()}uploadFromList(s,b=[],t){var c=this;return(0,f.Z)(function*(){const u=[];for(const v of s){const C=(0,O.Tb)(v.name),F=(0,O.g8)(C.ext);if(!F||v.size>F.maxSize||t&&!t(C))continue;const B=yield c.prepareFile(v,{compress:!0}),G=yield c.uploadService.getHostToken(b,v.name);u.push(yield(0,h.z)(c.upload(B,G,(0,O.g0)(B,C))))}return u})()}clearPendingRequests(){for(const s of this.requestSubscriptions)s.unsubscribe();this.requestSubscriptions=[]}}return(x=P).\u0275fac=function(s){return new(s||x)(W.LFG(a.eN),W.LFG(d.r),W.LFG(g.C))},x.\u0275prov=W.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"}),P})()},4315:function(Y){Y.exports=function(){"use strict";function j(l,e){var r=Object.keys(l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(l);e&&(i=i.filter(function(p){return Object.getOwnPropertyDescriptor(l,p).enumerable})),r.push.apply(r,i)}return r}function o(l){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?j(Object(r),!0).forEach(function(i){M(l,i,r[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(i){Object.defineProperty(l,i,Object.getOwnPropertyDescriptor(r,i))})}return l}function D(l,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(l,L(i.key),i)}}function M(l,e,r){return(e=L(e))in l?Object.defineProperty(l,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):l[e]=r,l}function O(){return O=Object.assign?Object.assign.bind():function(l){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(l[i]=r[i])}return l},O.apply(this,arguments)}function L(l){var e=function a(l,e){if("object"!=typeof l||null===l)return l;var r=l[Symbol.toPrimitive];if(void 0!==r){var i=r.call(l,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(l)}(l,"string");return"symbol"==typeof e?e:String(e)}var l,e,r,i,p,y,z,A,I={exports:{}};l=I,typeof window>"u"||(e=window,r=e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype,i=e.Blob&&function(){try{return!!new Blob}catch(U){return!1}}(),p=i&&e.Uint8Array&&function(){try{return 100===new Blob([new Uint8Array(100)]).size}catch(U){return!1}}(),y=e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,z=/^data:((.*?)(;charset=.*?)?)(;base64)?,/,A=(i||y)&&e.atob&&e.ArrayBuffer&&e.Uint8Array&&function(U){var w,K,H,N,k,_,Q,$,ee;if(!(w=U.match(z)))throw new Error("invalid data URI");for(K=w[2]?w[1]:"text/plain"+(w[3]||";charset=US-ASCII"),H=!!w[4],N=U.slice(w[0].length),k=H?atob(N):decodeURIComponent(N),_=new ArrayBuffer(k.length),Q=new Uint8Array(_),$=0;$<k.length;$+=1)Q[$]=k.charCodeAt($);return i?new Blob([p?Q:_],{type:K}):((ee=new y).append(_),ee.getBlob(K))},e.HTMLCanvasElement&&!r.toBlob&&(r.mozGetAsFile?r.toBlob=function(U,w,K){var H=this;setTimeout(function(){U(K&&r.toDataURL&&A?A(H.toDataURL(w,K)):H.mozGetAsFile("blob",w))})}:r.toDataURL&&A&&(r.toBlob=r.msToBlob?function(U,w,K){var H=this;setTimeout(function(){U((w&&"image/png"!==w||K)&&r.toDataURL&&A?A(H.toDataURL(w,K)):H.msToBlob(w))})}:function(U,w,K){var H=this;setTimeout(function(){U(A(H.toDataURL(w,K)))})})),l.exports?l.exports=A:e.dataURLtoBlob=A);var n=I.exports,m={strict:!0,checkOrientation:!0,retainExif:!1,maxWidth:1/0,maxHeight:1/0,minWidth:0,minHeight:0,width:void 0,height:void 0,resize:"none",quality:.8,mimeType:"auto",convertTypes:["image/png"],convertSize:5e6,beforeDraw:null,drew:null,success:null,error:null},g=typeof window<"u"&&typeof window.document<"u"?window:{},T=function(e){return e>0&&e<1/0},R=Array.prototype.slice;function W(l){return Array.from?Array.from(l):R.call(l)}var J=/^image\/.+$/;function x(l){return J.test(l)}var S=String.fromCharCode;var b=g.btoa;function t(l,e){for(var r=[],p=new Uint8Array(l);p.length>0;)r.push(S.apply(null,W(p.subarray(0,8192)))),p=p.subarray(8192);return"data:".concat(e,";base64,").concat(b(r.join("")))}function c(l){var r,e=new DataView(l);try{var i,p,y;if(255===e.getUint8(0)&&216===e.getUint8(1))for(var z=e.byteLength,A=2;A+1<z;){if(255===e.getUint8(A)&&225===e.getUint8(A+1)){p=A;break}A+=1}if(p){var w=p+10;if("Exif"===function s(l,e,r){var p,i="";for(r+=e,p=e;p<r;p+=1)i+=S(l.getUint8(p));return i}(e,p+4,4)){var K=e.getUint16(w);if(((i=18761===K)||19789===K)&&42===e.getUint16(w+2,i)){var H=e.getUint32(w+4,i);H>=8&&(y=w+H)}}}if(y){var k,_,N=e.getUint16(y,i);for(_=0;_<N;_+=1)if(274===e.getUint16(k=y+12*_+2,i)){r=e.getUint16(k+=8,i),e.setUint16(k,1,i);break}}}catch(Q){r=1}return r}var v=/\.\d*(?:0|9){12}\d*$/;function C(l){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e11;return v.test(l)?Math.round(l*e)/e:l}function F(l){var e=l.aspectRatio,r=l.height,i=l.width,p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",y=T(i),z=T(r);if(y&&z){var A=r*e;("contain"===p||"none"===p)&&A>i||"cover"===p&&A<i?r=i/e:i=r*e}else y?r=i/e:z&&(i=r*e);return{width:i,height:r}}var X=g.ArrayBuffer,ce=g.FileReader,q=g.URL||g.webkitURL,Te=/\.\w+$/,Ae=g.Compressor,Ce=function(){function l(e,r){(function f(l,e){if(!(l instanceof e))throw new TypeError("Cannot call a class as a function")})(this,l),this.file=e,this.exif=[],this.image=new Image,this.options=o(o({},m),r),this.aborted=!1,this.result=null,this.init()}return function E(l,e,r){return e&&D(l.prototype,e),r&&D(l,r),Object.defineProperty(l,"prototype",{writable:!1}),l}(l,[{key:"init",value:function(){var r=this,i=this.file,p=this.options;if(function(e){return!(typeof Blob>"u")&&(e instanceof Blob||"[object Blob]"===Object.prototype.toString.call(e))}(i)){var y=i.type;if(x(y))if(q&&ce){X||(p.checkOrientation=!1,p.retainExif=!1);var z="image/jpeg"===y,A=z&&p.checkOrientation,U=z&&p.retainExif;if(!q||A||U){var w=new ce;this.reader=w,w.onload=function(K){var N=K.target.result,k={},_=1;A&&(_=c(N))>1&&O(k,function u(l){var e=0,r=1,i=1;switch(l){case 2:r=-1;break;case 3:e=-180;break;case 4:i=-1;break;case 5:e=90,i=-1;break;case 6:e=90;break;case 7:e=90,r=-1;break;case 8:e=-90}return{rotate:e,scaleX:r,scaleY:i}}(_)),U&&(r.exif=function B(l){for(var e=W(new Uint8Array(l)),r=e.length,i=[],p=0;p+3<r;){var y=e[p],z=e[p+1];if(255===y&&218===z)break;if(255===y&&216===z)p+=2;else{var U=p+(256*e[p+2]+e[p+3])+2,w=e.slice(p,U);i.push(w),p=U}}return i.reduce(function(K,H){return 255===H[0]&&225===H[1]?K.concat(H):K},[])}(N)),k.url=A||U?!q||_>1?t(N,y):q.createObjectURL(i):N,r.load(k)},w.onabort=function(){r.fail(new Error("Aborted to read the image with FileReader."))},w.onerror=function(){r.fail(new Error("Failed to read the image with FileReader."))},w.onloadend=function(){r.reader=null},A||U?w.readAsArrayBuffer(i):w.readAsDataURL(i)}else this.load({url:q.createObjectURL(i)})}else this.fail(new Error("The current browser does not support image compression."));else this.fail(new Error("The first argument must be an image File or Blob object."))}else this.fail(new Error("The first argument must be a File or Blob object."))}},{key:"load",value:function(r){var i=this,p=this.file,y=this.image;y.onload=function(){i.draw(o(o({},r),{},{naturalWidth:y.naturalWidth,naturalHeight:y.naturalHeight}))},y.onabort=function(){i.fail(new Error("Aborted to load the image."))},y.onerror=function(){i.fail(new Error("Failed to load the image."))},g.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(g.navigator.userAgent)&&(y.crossOrigin="anonymous"),y.alt=p.name,y.src=r.url}},{key:"draw",value:function(r){var i=this,p=r.naturalWidth,y=r.naturalHeight,z=r.rotate,A=void 0===z?0:z,U=r.scaleX,w=void 0===U?1:U,K=r.scaleY,H=void 0===K?1:K,N=this.file,k=this.image,_=this.options,Q=document.createElement("canvas"),$=Q.getContext("2d"),ee=Math.abs(A)%180==90,ue=("contain"===_.resize||"cover"===_.resize)&&T(_.width)&&T(_.height),ie=Math.max(_.maxWidth,0)||1/0,ne=Math.max(_.maxHeight,0)||1/0,ae=Math.max(_.minWidth,0)||0,se=Math.max(_.minHeight,0)||0,te=p/y,V=_.width,Z=_.height;if(ee){var me=[ne,ie];ie=me[0],ne=me[1];var ge=[se,ae];ae=ge[0],se=ge[1];var ve=[Z,V];V=ve[0],Z=ve[1]}ue&&(te=V/Z);var ye=F({aspectRatio:te,width:ie,height:ne},"contain");ie=ye.width,ne=ye.height;var be=F({aspectRatio:te,width:ae,height:se},"cover");if(ae=be.width,se=be.height,ue){var _e=F({aspectRatio:te,width:V,height:Z},_.resize);V=_e.width,Z=_e.height}else{var Ee=F({aspectRatio:te,width:V,height:Z}),Oe=Ee.width;V=void 0===Oe?p:Oe;var xe=Ee.height;Z=void 0===xe?y:xe}var Re=-(V=Math.floor(C(Math.min(Math.max(V,ae),ie))))/2,je=-(Z=Math.floor(C(Math.min(Math.max(Z,se),ne))))/2,Be=V,We=Z,de=[];if(ue){var he,fe,De=F({aspectRatio:te,width:p,height:y},{contain:"cover",cover:"contain"}[_.resize]);de.push((p-(he=De.width))/2,(y-(fe=De.height))/2,he,fe)}if(de.push(Re,je,Be,We),ee){var Ue=[Z,V];V=Ue[0],Z=Ue[1]}Q.width=V,Q.height=Z,x(_.mimeType)||(_.mimeType=N.type);var we="transparent";N.size>_.convertSize&&_.convertTypes.indexOf(_.mimeType)>=0&&(_.mimeType="image/jpeg");var Fe="image/jpeg"===_.mimeType;if(Fe&&(we="#fff"),$.fillStyle=we,$.fillRect(0,0,V,Z),_.beforeDraw&&_.beforeDraw.call(this,$,Q),!this.aborted&&($.save(),$.translate(V/2,Z/2),$.rotate(A*Math.PI/180),$.scale(w,H),$.drawImage.apply($,[k].concat(de)),$.restore(),_.drew&&_.drew.call(this,$,Q),!this.aborted)){var Pe=function(oe){if(!i.aborted){var Le=function(le){return i.done({naturalWidth:p,naturalHeight:y,result:le})};if(oe&&Fe&&_.retainExif&&i.exif&&i.exif.length>0){var Me=function(le){return Le(n(t(function G(l,e){var r=W(new Uint8Array(l));if(255!==r[2]||224!==r[3])return l;var p=[255,216].concat(e,r.slice(4+(256*r[4]+r[5])));return new Uint8Array(p)}(le,i.exif),_.mimeType)))};if(oe.arrayBuffer)oe.arrayBuffer().then(Me).catch(function(){i.fail(new Error("Failed to read the compressed image with Blob.arrayBuffer()."))});else{var re=new ce;i.reader=re,re.onload=function(pe){Me(pe.target.result)},re.onabort=function(){i.fail(new Error("Aborted to read the compressed image with FileReader."))},re.onerror=function(){i.fail(new Error("Failed to read the compressed image with FileReader."))},re.onloadend=function(){i.reader=null},re.readAsArrayBuffer(oe)}}else Le(oe)}};Q.toBlob?Q.toBlob(Pe,_.mimeType,_.quality):Pe(n(Q.toDataURL(_.mimeType,_.quality)))}}},{key:"done",value:function(r){var i=r.naturalWidth,p=r.naturalHeight,y=r.result,z=this.file,A=this.image,U=this.options;if(q&&0===A.src.indexOf("blob:")&&q.revokeObjectURL(A.src),y)if(U.strict&&!U.retainExif&&y.size>z.size&&U.mimeType===z.type&&!(U.width>i||U.height>p||U.minWidth>i||U.minHeight>p||U.maxWidth<i||U.maxHeight<p))y=z;else{var w=new Date;y.lastModified=w.getTime(),y.lastModifiedDate=w,y.name=z.name,y.name&&y.type!==z.type&&(y.name=y.name.replace(Te,function P(l){var e=x(l)?l.substr(6):"";return"jpeg"===e&&(e="jpg"),".".concat(e)}(y.type)))}else y=z;this.result=y,U.success&&U.success.call(this,y)}},{key:"fail",value:function(r){var i=this.options;if(!i.error)throw r;i.error.call(this,r)}},{key:"abort",value:function(){this.aborted||(this.aborted=!0,this.reader?this.reader.abort():this.image.complete?this.fail(new Error("The compression process has been aborted.")):(this.image.onload=null,this.image.onabort()))}}],[{key:"noConflict",value:function(){return window.Compressor=Ae,l}},{key:"setDefaults",value:function(r){O(m,r)}}]),l}();return Ce}()},1687:(Y,j,o)=>{"use strict";o.d(j,{F:()=>E});var f=o(6321),D=o(4825);function E(M=0,O=f.z){return M<0&&(M=0),(0,D.H)(M,M,O)}},4004:(Y,j,o)=>{"use strict";o.d(j,{Z:()=>m});const D={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let E;const M=new Uint8Array(16);function O(){if(!E&&(E=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!E))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return E(M)}const a=[];for(let d=0;d<256;++d)a.push((d+256).toString(16).slice(1));const m=function h(d,g,T){if(D.randomUUID&&!g&&!d)return D.randomUUID();const R=(d=d||{}).random||(d.rng||O)();if(R[6]=15&R[6]|64,R[8]=63&R[8]|128,g){T=T||0;for(let W=0;W<16;++W)g[T+W]=R[W];return g}return function L(d,g=0){return a[d[g+0]]+a[d[g+1]]+a[d[g+2]]+a[d[g+3]]+"-"+a[d[g+4]]+a[d[g+5]]+"-"+a[d[g+6]]+a[d[g+7]]+"-"+a[d[g+8]]+a[d[g+9]]+"-"+a[d[g+10]]+a[d[g+11]]+a[d[g+12]]+a[d[g+13]]+a[d[g+14]]+a[d[g+15]]}(R)}}}]);
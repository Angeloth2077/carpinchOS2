"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[682],{96838:(e,t,n)=>{n.r(t),n.d(t,{EnhancedPlaylist:()=>De,default:()=>_e});var a=n(59713),l=n.n(a),i=n(67294),r=n.n(i),o=n(65858),c=n(52883),s=n(69518),d=n.n(s),u=n(48556),m=n(73305),p=n(20657),g=n(42038),y=n(95661),v=n(13020),h=n(20534),b=n(70369),f=n(55120),E=n(35213),I=n(40786),x=n(46886),R=n(99191),k=n(56802),w=n(30947),P=n(55911),C=n(20246),O=n(43620),T=n(84242),U=n(28018),B=n(1496),N=n(42273),A=n(61048),S=n(6479),F=n.n(S),D=n(94967),_=n(11680),j=n(45287);const L=["pageItems"];function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e,t,n,a){const i=a?{}:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e);return t.forEach(((e,t)=>{i[n+t]=e})),i}var $=n(48327),K=n(19719),Q=n(42781);var Z=n(34813),X=n(46895),G=n(1848),J=n(35308),V=n(28248),W=n(73785),q=n(4236),H=n(42922),Y=n(7073),ee=n(49961),te=n(24078),ne=n(47307),ae=n(2144),le=n(86213),ie=n(27481),re=n(83384),oe=n(82760),ce=n(32626),se=n(65095),de=n(87257),ue=n(57978),me=n(75016),pe=n(26010),ge=n(84788),ye=n(63962),ve=n(94184),he=n.n(ve),be=n(83692);const fe="TRDgmejiOzKjissuLFSx",Ee=({onClick:e=(()=>{}),className:t,label:n,ariaLabel:a=n,Icon:l})=>r().createElement(be.w,{label:n},r().createElement("button",{type:"button","aria-label":a,className:he()(fe,t),onClick:e},r().createElement(l,{iconSize:16}))),Ie=r().memo((function({uri:e,uid:t,name:n,durationMs:a,artists:l,album:o,isMOGEFRestricted:c,isExplicit:s,isPlayable:u,index:m,playIndex:g=null,imgUrl:y,contextUri:v,usePlayContextItem:h,isEnhanced:b,playContextPageIndex:f,isFirstRecommendation:E,add:I,remove:x,canBeRemovedFromPlaylist:R,showAddedBy:k,addedBy:w}){var P,C,O,T;const{useCurrentAvailability:U}=(0,i.useContext)(pe.I),[N,A]=U(e),S=u&&N,{badges:F,hasBadges:D}=(0,ge.r)({offlineAvailability:A,isExplicit:s,isMOGEFRestricted:c,isEnhanced:b}),_=m+1,j=l.items.map((e=>({uri:e.uri,name:e.profile.name}))),L=r().createElement(le.$,{uri:e,uid:t,albumUri:null==o?void 0:o.uri,artists:j,contextUri:v,isRecommendation:b,removePlaylistItems:()=>x(t),removeRecommendation:()=>x(t),addRecommendation:()=>I(t),canBeRemovedFromPlaylist:R}),M=(null==j?void 0:j.map((e=>e.name)).join(p.ag.getSeparator()))||"",{isActive:z,isPlaying:$,triggerPlay:K,togglePlay:Q}=h({uid:t,uri:e,index:null!=g?g:m,pageIndex:f}),{spec:Z,logger:X}=(0,B.fU)(G.createDesktopTrackListRowEventFactory,{data:{position:m,reason:"",uri:e}}),J=r().createElement(Ee,{onClick:()=>{I(t),X.logInteraction(Z.addRecommendationButtonFactory().hitAddToPlaylist({playlist:v,itemToBeAdded:e}))},label:p.ag.get("web-player.enhance.button_label_keep_in_playlist"),Icon:te.G});return r().createElement(H.ZP,{value:"row",index:m},r().createElement(ce._P,{menu:L},r().createElement(oe.c,{uri:e,contextUri:v,index:m,onTriggerPlay:()=>{K()},isActive:z,ariaRowIndex:m+1,isPlayable:S,ageRestricted:c,dragMetadata:{name:n,createdBy:M},spec:Z},r().createElement(ie.Dd,{ariaColIndex:0},r().createElement(ie.Du,{uri:e,playAriaLabel:p.ag.get("tracklist.a11y.play",n,M),onClick:(e,t)=>{Q({loggingParams:t})},isPlaying:$,isActive:z,spec:Z},r().createElement(ie.km,null,_))),r().createElement(ie.vZ,{ariaColIndex:1},r().createElement(ie.lD,{src:y}),r().createElement(ie.vm,null,r().createElement(ie.Wh,{titleText:n},n),D&&r().createElement(ie.g3,null,F.enhanced&&r().createElement(ne._,{iconSize:16,className:re.Z.enhanced,title:p.ag.get("web-player.enhance.button_text_enhanced"),"aria-label":p.ag.get("web-player.enhance.button_text_enhanced")}),F.download&&r().createElement(se.G,{size:16}),F.explicit&&r().createElement(de.N,null),F.paid&&r().createElement(me.g,null),F.nineteen&&r().createElement(ue.X,{className:re.Z.nineteen,size:16})),r().createElement(ie.K9,null,r().createElement(ie.T6,{artists:j,spec:Z})))),r().createElement(ie.UA,{ariaColIndex:2},r().createElement(ie.BM,{uri:o.uri,name:o.name,creatorUri:null==j||null===(P=j[0])||void 0===P?void 0:P.uri,spec:Z},o.name)),k&&r().createElement(ie.UA,{ariaColIndex:3},r().createElement(ie.p_,{name:(null==w?void 0:w.name)||(null==w?void 0:w.id)||"",uri:(null==w?void 0:w.id)&&d().profileURI(w.id).toURI()||"",imageUrl:(null==w||null===(C=w.avatar)||void 0===C?void 0:C.sources)&&(null===(O=(0,ee.X)(null==w||null===(T=w.avatar)||void 0===T?void 0:T.sources,{desiredWidth:24,desiredLabel:"small"}))||void 0===O?void 0:O.url)||"",showAvatar:!0})),r().createElement(ie.mU,{ariaColIndex:3+Number(k)},!!b&&r().createElement(r().Fragment,null,E?r().createElement(ye.T,{id:"enhance-add-recommendation",bodyText:p.ag.get("web-player.enhance.onboarding.add-recommendation-to-playlist"),shouldScrollIntoView:!0},J):J,r().createElement(Ee,{onClick:()=>{x(t),X.logInteraction(Z.removeRecommendationButtonFactory().hitRemoveRecommendation({recommendedItemUri:e,contextUri:v}))},label:p.ag.get("web-player.enhance.button_label_remove_from_playlist"),Icon:ae.H})),r().createElement(ie.A$,{duration:a}),r().createElement(ie.Zv,{menu:L,label:p.ag.get("more.label.track",n,M),spec:Z})))))})),xe=[W.Q.INDEX,W.Q.TITLE,W.Q.ALBUM,W.Q.DURATION],Re=[W.Q.INDEX,W.Q.TITLE,W.Q.ALBUM,W.Q.ADDED_BY,W.Q.DURATION],ke=r().memo((function({ariaLabel:e,uri:t,name:n,usePlayContextItem:a,tracklistRef:l,fetchTracks:o,addRecommendation:c,removeRecommendation:s,nrTracks:d,canBeRemovedFromPlaylist:u,showAddedBy:m}){const g=(0,i.useRef)(!1),y=(0,q.k)();(0,i.useEffect)((()=>{var e;g.current&&y&&(null==l||null===(e=l.current)||void 0===e||e.update());g.current=!0}),[y,l]);const v=50,h=(0,i.useRef)((()=>{})),[b,f]=(0,i.useState)([]),{logger:E,spec:I,UBIFragment:x}=(0,B.fU)(X.createDesktopTrackListEventFactory,{data:{uri:t,identifier:"enhanced-tracklist"}}),R=(0,i.useCallback)((()=>{if(l&&l.current){const{firstIndex:e,lastIndex:t}=l.current.getVisibleTrackWindow(),n=t-e;return Math.max(0,e-Math.round((v-n)/2))}return 0}),[l]),k=(0,i.useCallback)((e=>{var n;h.current(),s({itemIds:e.map((({id:e})=>e)),offset:R(),limit:v});const a=new Set(e.map((({id:e})=>e))),i=(null==l||null===(n=l.current)||void 0===n?void 0:n.getRows())||{},r=[];for(const e in i)if(a.has(i[e].uid)){const t={index:Number(e),item:i[e]};i[e].isEnhanced&&r.push(t)}if(r.length){let e;e=1===r.length?(0,G.createDesktopTrackListRowEventFactory)({data:{uri:r[0].item.uri,position:r[0].index,reason:""}}).removeRecommendationButtonFactory().hitRemoveRecommendation({contextUri:t,recommendedItemUri:r[0].item.uri}):I.removeItemsButtonFactory().hitRemoveRecommendations({contextUri:t,numberOfRecommendationsToRemove:r.length}),e&&E.logInteraction(e)}}),[s,R,E,l,t,I]),w=(0,i.useCallback)(((e,t)=>{h.current=t,e.length>1?f(e):k(e)}),[k]),P=(0,i.useCallback)((e=>{c({itemIds:[e],offset:R(),limit:v})}),[c,R]),C=(0,i.useCallback)((e=>{s({itemIds:[e],offset:R(),limit:v})}),[s,R]),O=(0,i.useCallback)((function(e,n){var l,i,o;const c=(0,ee.X)(null===(l=e.album.coverArt)||void 0===l?void 0:l.sources,{desiredSize:40,desiredLabel:"small"});return r().createElement(Ie,{key:e.uid,index:n,playIndex:n,contextUri:t,uri:e.uri,uid:e.uid,isPlayable:e.playability.playable,durationMs:e.duration.totalMilliseconds,name:e.name,artists:e.artists,album:e.album,isExplicit:(null===(i=e.contentRating)||void 0===i?void 0:i.label)===Y.KS.Explicit,isMOGEFRestricted:(null===(o=e.contentRating)||void 0===o?void 0:o.label)===Y.KS.NineteenPlus,imgUrl:(null==c?void 0:c.url)||"",usePlayContextItem:a,isEnhanced:e.isEnhanced,playContextPageIndex:e.playContextPageIndex,isFirstRecommendation:e.isFirstRecommendationOfPage&&n<v,add:P,remove:C,canBeRemovedFromPlaylist:u,showAddedBy:m,addedBy:e.addedBy})}),[a,t,P,C,u,m]),T=(0,i.useCallback)((e=>e.uri),[]),U=(0,i.useCallback)((e=>e.uid),[]);return r().createElement(x,{spec:I},r().createElement(H.ZP,{value:"playlist-tracklist"},r().createElement(V.Pv,{testID:"playlist-tracklist",key:t,ariaLabel:e,hasHeaderRow:!0,columns:m?Re:xe,onRemove:w,renderRow:O,resolveUri:T,resolveUid:U,nrTracks:d,fetchTracks:o,limit:v,outerRef:l})),r().createElement(J.h,{title:p.ag.get("playlist.remove_from_playlist",n),isOpen:b.length>0,tracks:b,onClose:e=>{e.stopPropagation(),f([])},onRemove:k}))}));var we=n(91281),Pe=n(55914),Ce=n(21770),Oe=n(39838),Te=n(99450),Ue=n(20452);const Be="z9JdxJgW3OxYysR2dkal";const Ne=function({contextUri:e,title:t,message:n,children:a}){const l=(0,i.useRef)(null),[o,c]=(0,i.useState)(!1),s=(0,i.useCallback)((()=>{var e;c(!1),null===(e=l.current)||void 0===e||e.focus()}),[]),d=(0,i.useCallback)((()=>{c(!0)}),[]),{setIsEnhanced:u}=(0,j.U)(e);return r().createElement(we.x,{onShow:d,onHide:s,placement:"topStart",overlay:o&&r().createElement(Ue.i,null,r().createElement("div",null,r().createElement(Pe.J,{role:"alertdialog",popoverTitle:t,arrow:"bottomEnd",colorSet:"announcement"},n,r().createElement("div",{className:Be},r().createElement(Ce.oM,{buttonSize:Oe.z.sm,onClick:s},p.ag.get("web-player.enhance.missing-functionality-callout.dismiss")),r().createElement(Te.D,{buttonSize:Oe.z.sm,onClick:()=>{s(),u(!1)},colorSet:"invertedLight"},p.ag.get("web-player.enhance.missing-functionality-callout.turn-off-enhance"))))))},function(e){return"function"==typeof e}(a)?r().createElement(r().Fragment,null,a(d)):a)},Ae={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",enhancedPlaylist:"OfFtIpc_qctF95n1Xk6p",playlistImageContainer:"q91bEN94vb8qNievR8JN",searchBoxContainer:"PLOhKo2np0gtOGu4OmKr"};function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const De=r().memo((function({metadata:e,capabilities:t}){var n,a,l;const{uri:s,name:S,images:M,totalLength:X,canPlay:G,canRemove:J}=e,V=(null==t?void 0:t.canFilter)&&X>0,W=(null==t?void 0:t.canSort)&&X>0,[q]=M,H=(0,O.Z)((null==q?void 0:q.url)||null),Y=(0,c.k6)(),ee=(0,o.I0)(),te=(0,k.o)(),ne=(0,i.useRef)(null),{isEnhanced:ae,playContext:le,numTotalItems:ie,numTotalRecs:re,addRecommendation:oe,removeRecommendation:ce,fetchTracks:se,enhancedRevision:de,shouldUnderlyingContextChangeRefreshView:ue,UBIReason:me,clearCache:pe,fetchIndexOfItemId:ge}=function(e){var t;const n=(0,_._)(),{isEnhanced:a,iteration:l,setIsEnhanced:r,toggleIsEnhanced:o}=(0,j.U)(e),[c,s]=(0,i.useState)(null),d=(0,i.useRef)(Date.now()),u=(0,i.useCallback)((()=>Date.now()-d.current>3e3),[]),m=(0,i.useRef)({}),p=(0,i.useRef)(null),g=(0,i.useCallback)((async(e,t,a,l,i,r,o)=>{var c,u,g,y;r&&(d.current=Date.now());const v=null===(c=p.current)||void 0===c?void 0:c.enhancedRevision;let h;try{h=await o}catch(r){409===(null==r?void 0:r.status)&&(h=await n.getPage(e,t,a,l,i))}const b=null===(u=h)||void 0===u?void 0:u.enhancePage;if(!b)return[];const{pageItems:f}=b,E=F()(b,L),I=await n.decoratePageItems(f);return v!==(null===(g=p.current)||void 0===g?void 0:g.enhancedRevision)?[]:((null===(y=p.current)||void 0===y?void 0:y.enhancedRevision)!==E.enhancedRevision&&(r=!0),m.current=z(m.current,I,l,r),s(E),p.current=E,I)}),[n]),y=(0,i.useCallback)((async({itemIds:t,offset:a=0,limit:i=1})=>{p.current&&l&&g(e,l,p.current.sessionId,a,i,!0,n.addRecommendation(e,p.current.sessionId,p.current.contextRevision,t,a,i))}),[g,e,n,l]),v=(0,i.useCallback)((async({itemIds:t,offset:a=0,limit:i=1})=>{p.current&&l&&g(e,l,p.current.sessionId,a,i,!0,n.removeRecommendation(e,p.current.sessionId,p.current.contextRevision,t,a,i))}),[g,e,n,l]),h=(0,i.useMemo)((()=>new D.tL),[]),b=(0,i.useCallback)((async(t,a)=>{var i,r,o;if(!l)return[];const c=Math.min(a,((null===(i=p.current)||void 0===i?void 0:i.numTotalItems)||1/0)-t),s=Array.from({length:c},((e,n)=>m.current[n+t]));return s.every((e=>!!e))&&0!==c?s:g(e,l,null===(r=p.current)||void 0===r?void 0:r.sessionId,t,a,!1,h.create(`${e}:${l}:${null===(o=p.current)||void 0===o?void 0:o.sessionId}:${t}:${a}`,(()=>{var i;return n.getPage(e,l,null===(i=p.current)||void 0===i?void 0:i.sessionId,t,a)})))}),[h,g,e,n,l]),f=(0,i.useMemo)((()=>({uri:e,url:null==c?void 0:c.dspContextUri})),[e,null==c?void 0:c.dspContextUri]),E=(0,i.useCallback)((()=>{m.current={}}),[]),I=(0,i.useCallback)((async t=>{var a,i;if(!l)return-1;const{enhancePage:r}=await n.getPage(e,l,null===(a=p.current)||void 0===a?void 0:a.sessionId,0,n.MAX_PAGE_SIZE);return null!==(i=null==r?void 0:r.pageItems.findIndex((e=>e.itemId===t)))&&void 0!==i?i:-1}),[n,l,e]);return{isEnhanced:a,setIsEnhanced:r,toggleIsEnhanced:o,addRecommendation:y,removeRecommendation:v,playContext:f,numTotalItems:isNaN(Number(null==c?void 0:c.numTotalItems))?void 0:Number(null==c?void 0:c.numTotalItems),numTotalRecs:isNaN(Number(null==c?void 0:c.numTotalRecs))?void 0:Number(null==c?void 0:c.numTotalRecs),fetchTracks:b,clearCache:E,enhancedRevision:null==c?void 0:c.enhancedRevision,shouldUnderlyingContextChangeRefreshView:u,UBIReason:c?`enhanced|${null==c?void 0:c.sessionId}#${null==c||null===(t=c.logging)||void 0===t?void 0:t.correlationId}`:"enhanced|",fetchIndexOfItemId:I}}(s);(0,i.useEffect)((()=>{if(ae&&"POP"!==Y.action){const e=new URLSearchParams(Y.location.search).get("uid");if(!e)return;ge(e).then((e=>{var t;-1!==e&&(null===(t=ne.current)||void 0===t||t.scrollToIndex(e))}))}}),[Y,Y.action,Y.location.search,ge,ae]),(0,i.useEffect)((()=>{var e;de&&(null===(e=ne.current)||void 0===e||e.update())}),[de]);const ye=(0,i.useCallback)((()=>{var e;ue()&&(pe(),null===(e=ne.current)||void 0===e||e.update())}),[pe,ue]);(0,U.r)(s,ye);const{spec:ve,logger:he,UBIFragment:be}=(0,B.fU)(u.createDesktopEnhancedEventFactory,{data:{uri:s,identifier:"enhanced-session",reason:me}}),fe=(0,i.useMemo)((()=>({header:ve.headerFactory()})),[ve]),{isPlaying:Ee,isActive:Ie,togglePlay:xe,usePlayContextItem:Re}=(0,T.n)(le,{featureIdentifier:"playlist"}),we=(0,i.useCallback)((()=>{let e;xe(),e=Ie?Ee?ve.playButtonFactory().hitPause({itemToBePaused:s}):ve.playButtonFactory().hitResume({itemToBeResumed:s}):ve.playButtonFactory().hitPlay({itemToBePlayed:s}),he.logInteraction(e)}),[xe,Ee,Ie,he,ve,s]),Pe=function(e=0){const{data:t}=(0,$.J)(K.n5.getUser,["spotify"]);return(0,i.useMemo)((()=>null!=t&&t.body?{isOwner:!1,tracksAdded:e,user:{uri:t.body.uri,type:Q.p.USER,username:t.body.id,displayName:t.body.display_name,images:t.body.images}}:null),[t,e])}(re),Ce=null!==(n=null===(a=e.collaborators)||void 0===a||null===(l=a.items)||void 0===l?void 0:l.concat())&&void 0!==n?n:[];Pe&&Ce.splice(N.ms-1,0,Pe);const Oe={count:Ce.length,items:Ce},Te=(0,i.useCallback)(((e,t)=>{const n=[...t[R.aN[d().Type.ALBUM]]||[],...t[R.aN[d().Type.TRACK]]||[]];n.length>0&&(ee((0,g.jV)(s,n)),te({targetUri:s,intent:"add",type:"drop"}))}),[ee,te,s]);return r().createElement(i.Suspense,{fallback:null},r().createElement(x.No,{path:"/playlist/:playlistId",pageId:m.W.ENHANCED_SESSION}),r().createElement(be,{spec:ve},r().createElement(b.$,null,p.ag.get("playlist.page-title",S)),r().createElement(h.Z,{types:[R.aN[d().Type.ALBUM],R.aN[d().Type.TRACK]],onDrop:Te},r().createElement("section",{role:"presentation",className:Ae.enhancedPlaylist,"data-testid":"enhanced-playlist-page"},r().createElement(be,{spec:fe.header},r().createElement(I.s,{metadata:Fe(Fe({},e),{},{collaborators:Oe,duration:null,totalLength:null!=ie?ie:X}),isPlaying:Ee,togglePlay:we,backgroundColor:H}),r().createElement("div",{className:Ae.playlistContent},r().createElement(w.o,{backgroundColor:H},r().createElement(w.F,null,G?r().createElement(f.$,{onClick:we,isPlaying:Ee,size:P.qE.lg,uri:s}):null,r().createElement(Z.v,{uri:s}),r().createElement(C.y,{menu:r().createElement(v.X,{uri:s,isEnhanced:ae})},r().createElement(y.z,null)),(V||W)&&r().createElement("div",{className:Ae.searchBoxContainer},V&&r().createElement(i.Suspense,{fallback:null},r().createElement(Ne,{contextUri:s,title:p.ag.get("web-player.enhance.missing-functionality-callout.filtering-playlist-disabled-title"),message:p.ag.get("web-player.enhance.missing-functionality-callout.filtering-playlist-disabled-message")},(e=>r().createElement(A.K,{placeholder:p.ag.get("playlist.search_in_playlist"),onActivate:()=>(e(),!1)})))),W&&r().createElement(Ne,{contextUri:s,title:p.ag.get("web-player.enhance.missing-functionality-callout.sorting-playlist-disabled-title"),message:p.ag.get("web-player.enhance.missing-functionality-callout.sorting-playlist-disabled-message")},r().createElement(E.l,{columns:[],disabled:!0}))))))),r().createElement("div",{className:"contentSpacing"},r().createElement(i.Suspense,{fallback:null},r().createElement(ke,{key:s,ariaLabel:S,nrTracks:null!=ie?ie:Math.max(15,X),uri:s,name:S,usePlayContextItem:Re,tracklistRef:ne,fetchTracks:se,addRecommendation:oe,removeRecommendation:ce,canBeRemovedFromPlaylist:J,showAddedBy:!0})))))))})),_e=De}}]);
//# sourceMappingURL=xpui-routes-enhanced-playlist.js.map
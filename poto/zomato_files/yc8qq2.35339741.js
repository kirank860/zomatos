(this.$WP=this.$WP||[]).push(["yc8qq2",(e,n)=>{"use strict";var a,r,s,i,c,t,l,o,d,u,h,v,C,m,k,f,g,p,w,b,I,T,y,x,R,S,F,M,D,E,U,H,P,j,L,O,A,N,$,q,_,V={__key:0x9f54accbeed6,id:"9f54accbeed699081deb46b1339e1e73",loc:{},definitions:[]},G="interactionData",B=e=>{var n=d.get(G);n&&(e({interactions:n,clientRequestTimestamp:(new Date).getTime()}),d.remove(G))},W=(e,n,a)=>{(e=>{var n=d.get(G);n||(n=[]);var a={eventTimestampMsClient:(new Date).getTime(),interaction:e};n.push(a),d.set(G,n)})(n),(e=>{if(!e)return!1;var{target:n,currentTarget:a}=e;if(n&&a&&n instanceof HTMLElement){var r=n,s=!1;do{if(r instanceof HTMLElement&&r.dataset.encodedUrl){var i=o(r.dataset.encodedUrl),c=document.createElement("a");c.href=i,r.parentElement instanceof HTMLElement&&(c.style.display="none",r.parentElement.appendChild(c)),r=c}if(r instanceof HTMLAnchorElement){var t=r;if(window&&window.location&&window.location.hostname&&window.location.hostname===t.hostname)return!0}s=r===a||s,r=r.parentElement}while(r&&!s)}return!1})(e)||B(a)},K=({interactionMutationFunction:e,props:n,namespace:a})=>{var{children:t}=n,l=s(S),o=i(l),d=i([]),v=c(((e,n,a)=>{d.current.push({event:e,interactionType:n,additionalVariables:a})}),[]),C=c(((n,r,s,i)=>{var c=s||{},t={};t[r]={...c,impressionKey:i};var l={};l[a]=t,W(n,l,e)}),[e,a]);return r((()=>{if(d.current.length>0&&o.current!==l){var e=o.current;d.current.forEach((({event:n,interactionType:a,additionalVariables:r})=>{C(n,a,r,e)})),d.current=[],o.current=l}}),[l,C]),u(h,{children:t(v)})},z=e=>{var n=l(V);return r((()=>{e.isReadonlyMode||B(n)})),e.isReadonlyMode?u(h,{children:e.children((()=>{}))}):u(p.Consumer,{children:a=>"mixer"===a?((e,n)=>{var{children:a}=n;return u(k.Consumer,{children:n=>u(f.Consumer,{children:r=>u(g.Consumer,{children:s=>a(((a,i,c)=>{var t=c||{},l={};switch(i){case"delete":case"linkedPoiScroll":case"overflowMenuClick":case"report":case"seeAll":case"shelfScroll":case"untag":case"untagConfirm":case"untagCancel":l[i]={feedSectionId:r};break;case"linkedPhotoClick":l[i]={feedSectionId:r},Object.assign(l[i],t);break;case"linkedPoiClick":l[i]={feedSectionId:r,placement:"HEADER"},Object.assign(l[i],t);break;case"feedClick":case"helpful":case"repost":case"share":case"unhelpful":case"follow":case"unfollow":case"userClick":case"save":case"trip_save":case"dismiss":case"userReferenceClick":case"linkReferenceClick":case"linkedSnippetClick":case"batchGalleryClick":case"batchGalleryScroll":l[i]={feedSectionId:r,itemId:s.itemId},Object.assign(l[i],t);break;case"showMore":l[i]={mixerImpressionId:n},Object.assign(l[i],t);break;default:var o=i||"undefined";console.error(`Unknown mixer interaction type: ${o}`)}W(a,{mixer:l},e)}))})})})})(n,e):"home"===a?((e,n)=>{var{children:a}=n;return u(w.Consumer,{children:n=>u(y.Consumer,{children:r=>a(((a,s,i)=>{var c=i||{},t={};t["unfollow"===s?"unFollow":s]={...n,...c,...r},W(a,{home:t},e)}))})})})(n,e):"profile"===a?((e,n)=>{var{children:a}=n;return u(b.Consumer,{children:n=>u(y.Consumer,{children:r=>a(((a,s,i)=>{var c=i||{},t={};t["unfollow"===s?"unFollow":s]={...n,...c,...r},W(a,{profile:t},e)}))})})})(n,e):"onboarding"===a?((e,n)=>{var{children:a}=n;return u(x.Consumer,{children:n=>a(((a,r,s)=>{var i=s||{},c={};c[r]={...i,...n},W(a,{onboarding:c},e)}))})})(n,e):"inbox"===a?((e,n)=>{var{children:a}=n;return u(M.Consumer,{children:n=>a(((a,r,s)=>{var i=s||{},c={};switch(r){case"follow":case"unfollow":c[r]={},Object.assign(c[r],i),Object.assign(c[r],n);break;default:var t=r||"undefined";console.error(`Unknown or not set up inbox interactionType: ${t}`)}W(a,{inbox:c},e)}))})})(n,e):"search"===a?((e,n)=>{var{children:a}=n;return u(I.Consumer,{children:n=>a(((a,r,s)=>{var i=s||{},c={};switch(r){case"follow":case"unfollow":c[r]={},Object.assign(c[r],i),Object.assign(c[r],n);break;default:var t=r||"undefined";console.error(`Unknown or not set up search interactionType: ${t}`)}W(a,{search:c},e)}))})})(n,e):"ugcDetail"===a?((e,n)=>{var{children:a,loggedInUserId:r}=n;return u(T.Consumer,{children:n=>a(((a,s,i)=>{var c=i||{},t=r?{actorUserId:r}:{},l={};l["feedClick"===s?"ugcClick":s]={...n,...c,...t},W(a,{ugcDetail:l},e)}))})})(n,e):"hotelReviewServlet"===a?((e,n,a)=>{var{children:r}=n;return u(R.Consumer,{children:n=>r(((r,s,i)=>{var c=i||{},t={};t[s]={...c,...n};var l={};l[a]=t,W(r,l,e)}))})})(n,e,a):"hotels"===a||"smartDeals"===a||"hotelHighlight"===a||"hotelsNear"===a||"hotelsList"===a||"lastMinute"===a?u(K,{interactionMutationFunction:n,props:e,namespace:a}):"flightsResults"===a?((e,n,a)=>{var{children:r}=n;return u(P.Consumer,{children:n=>u(j.Consumer,{children:s=>u(L.Consumer,{children:i=>r(((r,c,t)=>{var l=t||{},o={};switch(c){case"filter":case"clearAllFilters":case"sortDropdown":case"removeFilter":case"newSortResults":case"filterHamburger":case"sort":o[c]={...l,...n};break;case"staticPhotoClick":o[c]={...l,searchId:(null==n?void 0:n.searchId)||""};break;case"firstClick":case"viewDealClick":case"viewDealPersistClick":case"viewDealFATableClick":case"viewDealRightRail":case"secondClickBreadCrumb":case"secondClickTabDetails":case"secondClickTabReviews":case"seatMapClick":case"airlineReviewExpand":case"airlineReviewClick":case"viewDealsExpand":case"amenitiesHover":case"segmentFilter":case"flyScoreHover":case"brandedFareHover":case"selfTransferHover":case"comboFareHover":o[c]={...l,...s,...n};break;case"savingsTipClick":case"savingsTipExpand":o[c]={...l,...i,searchId:(null==n?void 0:n.searchId)||""};break;default:var d=c||"undefined";console.error(`Unknown or not set up search interactionType: ${d}`)}var u={};u[a]=o,W(r,u,e)}))})})})})(n,e,a):"flights"===a?((e,n,a)=>{var{children:r}=n;return u(O.Consumer,{children:n=>u(j.Consumer,{children:s=>u(U.Consumer,{children:i=>u(H.Consumer,{children:c=>u(A.Consumer,{children:t=>r(((r,l,o)=>{var d=o||{},u={};switch(l){case"fareCardClick":u[l]={...d,...s};break;case"crossSiteClick":u[l]={...d,...n};break;case"googleOneTapClick":u[l]={...d,...t};break;case"cosChange":case"passengerNumberChange":case"childAgeChange":case"airportTypeaheadSelection":case"itineraryTypeTabChange":case"datepickerInteraction":case"checkNonstop":case"checkNearby":case"checkSubscription":case"stickyShown":case"findFlightsClick":u[l]={...d,...c};break;case"attractionsShelfSeeAllClick":case"attractionsShelfItemClick":case"attractionsShelfScroll":u[l]={...i,...d};break;default:var h=l||"undefined";console.error(`Unknown or not set up search interactionType: ${h}`)}var v={};v[a]=u,W(r,v,e)}))})})})})})})(n,e,a):"globalNav"===a?((e,n)=>{var{children:a}=n;return u(D.Consumer,{children:n=>a(((a,r,s)=>{var i=s||{},c={};c[r]={...i,...n},W(a,{globalNav:c},e)}))})})(n,e):"contentUploader"===a?((e,n)=>{var{children:a}=n;return u(E.Consumer,{children:n=>a(((a,r,s)=>{var i=s||{},c={};c[r]={...i,...n},W(a,{contentUploader:c},e)}))})})(n,e):"ownerNewsFeed"===a?((e,n)=>{var{children:a}=n;return u(k.Consumer,{children:n=>u(f.Consumer,{children:r=>u(g.Consumer,{children:s=>a(((a,i,c)=>{var t=c||{},l={};switch(i){case"feedClick":case"howToRespondClick":case"makeFavoriteReviewClick":case"reportReviewClick":case"respondDirectMessageClick":case"respondReviewClick":l[i]={feedSectionId:r,itemId:s.itemId},Object.assign(l[i],t);break;case"listingPerformanceClick":case"adsPerformanceClick":l[i]={feedSectionId:r},Object.assign(l[i],t);break;case"ownersClick":case"managePhotosClick":case"restaurantReviewClick":case"managementCenterClick":case"adsManagerClick":l[i]={},Object.assign(l[i],t);break;case"showMore":l[i]={mixerImpressionId:n},Object.assign(l[i],t);break;default:console.error(`Unknown ownerNewsFeed interaction type: ${i}`)}W(a,{ownerNewsFeed:l},e)}))})})})})(n,e):"restaurants"===a?((e,n,a)=>{var{children:r}=n;return u(F.Consumer,{children:n=>r(((r,s,i)=>{var c=i||{},t={};t[s]={...c,...n};var l={};l[a]=t,W(r,l,e)}))})})(n,e,a):e.children((()=>{}))})},J={__key:27679894998842,id:"192cba4f0f3a5c52a3a456e5f521f583",loc:{},definitions:[]},Q="interactionDataV2",X=e=>{var n=d.get(Q);n&&e({request:{clientRequestTimestampMs:Date.now(),request:n}}).finally((()=>{d.remove(Q)}))},Y=e=>{var n=l(J),a=C(),s=v(),i=m();return r((()=>{e.isReadonlyMode||X(n)}),[n,e]),e.isReadonlyMode?u(h,{children:e.children((()=>{}))}):u(p.Consumer,{children:r=>"flightsResults"===r?((e,n,a,r,s)=>{var{children:i}=n;return u(P.Consumer,{children:n=>u(j.Consumer,{children:c=>u(L.Consumer,{children:t=>i(((i,l,u)=>{var h=u||{},v={};switch(l){case"filter":case"clearAllFilters":case"sortDropdown":case"removeFilter":case"newSortResults":case"filterHamburger":case"sort":v[l]={...h,...n};break;case"staticPhotoClick":v[l]={...h,searchId:(null==n?void 0:n.searchId)||""};break;case"firstClick":case"viewDealClick":case"viewDealPersistClick":case"viewDealFATableClick":case"viewDealRightRail":case"secondClickBreadCrumb":case"secondClickTabDetails":case"secondClickTabReviews":case"seatMapClick":case"airlineReviewExpand":case"airlineReviewClick":case"viewDealsExpand":case"amenitiesHover":case"segmentFilter":case"flyScoreHover":case"brandedFareHover":case"selfTransferHover":case"comboFareHover":v[l]={...h,...c,...n};break;case"savingsTipClick":case"savingsTipExpand":v[l]={...h,...t,searchId:(null==n?void 0:n.searchId)||""};break;default:var C=l||"undefined";console.error(`Unknown or not set up search interactionType: ${C}`)}((e,n,a,r,s,i)=>{((e,n,a,r)=>{var s=d.get(Q);s||(s=[]);var i={pageUid:n,eventTimestampMs:Date.now(),...e},c=[];a&&c.push({key:"user_id",value:a}),r&&c.push({key:"session_id",value:r}),0!==c.length&&(i={opaqueIds:c,...i}),s.push(i),d.set(Q,s)})(n,r,s,i),(e=>{if(!e)return!1;var{target:n,currentTarget:a}=e;if(n&&a&&n instanceof HTMLElement){var r=n,s=!1;do{if(r instanceof HTMLElement&&r.dataset.encodedUrl){var i=o(r.dataset.encodedUrl),c=document.createElement("a");c.href=i,r.parentElement instanceof HTMLElement&&(c.style.display="none",r.parentElement.appendChild(c)),r=c}if(r instanceof HTMLAnchorElement){var t=r;if(window&&window.location&&window.location.hostname&&window.location.hostname===t.hostname)return!0}s=r===a||s,r=r.parentElement}while(r&&!s)}return!1})(e)||X(a)})(i,{FlightsResults:{...v}},e,a,r,s)}))})})})})(n,e,a,i,s):e.children((()=>{}))})},Z=({children:e})=>u($,{children:n=>e(((e,a)=>{n(e,a)}))}),ee=({children:e})=>u(p.Provider,{value:"flights",children:u($,{children:n=>e(((e,a,r,s,i)=>{n(e,a,{fareCardImpressionId:r,pageviewId:s,sessionId:i})}))})});return[()=>{k=a(null),f=a(null),g=a({itemId:""}),p=a(null),w=a(null),b=a(null),I=a(null),T=a(null),y=a(null),x=a(null),R=a(null),S=a(null),F=a(null),M=a(null),D=a(null),E=a(null),U=a(null),H=a(null),P=a(null),j=a(null),L=a(null),O=a(null),A=a(null),N=t((e=>({loggedInUserId:e.auth.loggedInUserId,isReadonlyMode:e.meta.readonlyMode})))(z),$=N,q=t((e=>({loggedInUserId:e.auth.loggedInUserId,isReadonlyMode:e.meta.readonlyMode})))(Y),_=q,e({CrossSiteClickContext:O,CrossSiteClickInteractionLogger:Z,FareCardInteractionLogger:ee,FeedSectionIdContext:f,FlightsGoogleOneTapClickContext:A,FlightsSearchResultsContext:P,FollowPlacementContext:a(null),FollowTabTypeContext:a(null),InboxTrackingContext:M,InteractionLogger:$,InteractionLoggerV2:_,ItemIdContext:g,ItineraryContext:j,ListPageTrackingContext:S,ProfileTrackingContext:b,RecommendedFolloweesImpressionIdContext:y,SavingsTipsContext:L,SearchTrackingContext:I,TrackingNamespaceContext:p,UgcDetailTrackingContext:T})},[e=>(a=e.createContext,r=e.useEffect,s=e.useContext,i=e.useRef,c=e.useCallback),e=>t=e.connect,e=>l=e.useStatelessMutation,e=>o=e.default,e=>d=e.default,e=>(u=e.jsx,h=e.Fragment),e=>v=e.useSessionId,e=>C=e.usePageviewUid,e=>m=e.useUserId]]},["1o4yt4","12mj4n","1fbuhs","1j8lyt","19b9b1","121h32","1al4vi","fgwvq1","52far5"]]);

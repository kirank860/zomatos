(this.$WP=this.$WP||[]).push(["7v9w42",(e,r)=>{"use strict";var t,a,n,i,o,s,l,d,u,c,v,h,g,f,p,m,I,w,y,P,T,A,D,b,C,S,O,E,R,_,$,N,k,U,M,j,L,x,q,W,z,G,F,B,V,H,K,Q,X,Y,J,Z,ee,re,te,ae,ne,ie,oe,se,le,de,ue,ce,ve,he,ge,fe,pe,me,Ie,we,ye,Pe,Te=({children:e})=>q(z,{children:e}),Ae=({children:e})=>{var{browser:r,userAgentCategory:t}=T(),a=b(),[n,i]=u(null),[o,s]=u(!1),l=ve(),d="MOBILE"===t?.5:.15;return c((()=>{if(he)i(he);else{var e="MOBILE"===t?window.innerHeight:window.innerHeight/2,n=window.innerHeight*d,o={userAgentCategory:t,fetchMargin:`${e}px`,renderMargin:`${n}px`,browserFamily:r.family,domainName:a,recordScriptLoadFailure:l,headerBiddingTimeout:te};if(re.get(ae))he=new ne(o),s(!0);else{var u=[];u.push(new ie(o)),u.push(new oe(o)),ee("rubicon_header_bidding")&&u.push(new se(o)),he=new le(o,u)}i(he)}}),[r,t,a,l,d]),q(de.Provider,{value:n,children:W(ue,{children:[o&&q(ce,{onDisableTestMode:()=>{re.remove(ae),window.location.reload()}}),q(ge,{children:e})]})})},De=(e,r)=>fetch(`/UpdateSessionDatesAjax?${e}=${r}`,{credentials:"same-origin"}),be=({stayDates:e,guests:r,defaultDates:t=!1})=>{var a=L(e),n=r&&x(r);return a&&n&&a.checkInDate&&a.checkOutDate?{checkInDate:a.checkInDate,checkOutDate:a.checkOutDate,defaultDates:t,rooms:n.rooms,adults:n.adults,children:n.children,childAgesPerRoom:n.childAgesPerRoom}:null},Ce=({preferences:e,hotels:r,restaurants:t,attractions:a,flights:n,vr:i})=>{var o,s,l,d;return{preferences:{userSelectedCurrencyOverride:e.currency},attractions:{singleDate:j(a.singleDate,"-"),fromDate:j(a.fromDate,"-"),toDate:j(a.toDate,"-"),adults:null!=(o=a.attractionPaxAdults)?o:null,children:null!=(s=a.attractionPaxChildren)?s:null},restaurants:{date:j(t.date,"-")},hotels:r?be(r):null,flights:{oneWayDate:j(n.oneWayDate,"-"),departureDate:j(n.departureDate,"-"),returnDate:j(n.returnDate,"-"),originAirportCode:null!=(l=n.originAirportCode)?l:null,destinationAirportCode:null!=(d=n.destinationAirportCode)?d:null,adults:1,seniors:0,childAges:[],classOfService:null},vr:{checkInDate:j(i.start,"/"),checkOutDate:j(i.end,"/"),adults:i.adults||2,children:i.children||0}}},Se=({preferencesTravelInfo:e,attractionsTravelInfo:r,hotelsTravelInfo:t,restaurantsDate:a,flightsTravelInfo:n,vrTravelInfo:i,setRestaurantsDate:o,setHotelsTravelInfo:s,setAttractionsTravelInfo:l,setFlightsTravelInfo:d,setVrTravelInfo:u,children:c})=>{var v=w(),g=h((()=>e&&"string"==typeof e.currency?e:{currency:"USD"}),[e]),f=h((()=>((e,r,t,a,n,i,o)=>({preferences:{setCurrency:r=>{globalThis.require(["trjs!ta/util/Currency"],(t=>t.setCurrencyAndReload(r,e)))}},attractions:{setSingleDate:e=>{r(U(e,"-")),De("attrdate",null===e?"_":U(e))},setDates:(e,t)=>{r(void 0,U(e,"-"),U(t,"-")),De("attrrange",`${U(e)}_${U(t)}`)},setPassengers:(e,t)=>{r(void 0,void 0,void 0,e,t),De("zuf",`${e}_${t}`)}},restaurants:{setDate:e=>{e&&(t(e,o.formatDate("week_date_short",e)),De("eaterydate",U(e)))},setTime:()=>{},setGuests:()=>{},clearAll:()=>{}},hotels:{setStayDates:(e,r)=>{var t=`${U(e)}_${U(r)}`;a(t),De("staydates",t)},setGuestInfo:(e,r,t)=>{var n=`${r}_${e}${t.length>0?`_${t.map((e=>e.join(","))).join(":")}`:""}`;a(void 0,n),De("uguests",n)},setTravelInfo:()=>{}},flights:{setOneWayDate:e=>{n(U(e)),De("oneway",U(e))},setRoundTripDates:(e,r)=>{n(void 0,U(e),U(r)),De("rtdates",`${U(e)}_${U(r)}`)},setOriginAirportCode:e=>{n(void 0,void 0,void 0,e),De("flightorig",e)},setDestinationAirportCode:e=>{n(void 0,void 0,void 0,void 0,e),De("flightdest",e)},setTravelerInfo:()=>{throw new Error("Not implemented: flights.setTravelerInfo is only supported in lithium")}},vr:{setStayDates:(e,r)=>{i(U(e,"/"),U(r,"/")),De("staydates",`${U(e)}_${U(r)}`)},setGuestInfo:(e,r)=>{var t=Math.ceil(e/4);i(void 0,void 0,e,r),De("uguests",M(t,e,[]))},setTravelInfo:(e,r,t,a)=>{i(U(e,"/"),U(r,"/"),t,a);var n=Math.ceil(t/4);((...e)=>{var r=e.map((e=>`${e.arg}=${e.value}`)).join("&");fetch(`/UpdateSessionDatesAjax?${r}`,{credentials:"same-origin"})})({arg:"uguests",value:M(n,t,[])},{arg:"staydates",value:`${U(e)}_${U(r)}`})}}}))(g.currency,l,o,s,d,u,v)),[g.currency,l,o,s,d,u,v]),p=h((()=>({...Ce({preferences:g,attractions:r||{},hotels:t,restaurants:{date:a},flights:n||{},vr:i||{}}),update:f})),[g,r,t,a,n,i,f]);return q(k,{value:p,children:c})},Oe={},Ee=()=>{var e=O(),r=B(),t=E(),a=r.params.geoId||-1;return g((n=>e&&!n.forceLogin?Promise.resolve({userId:e,hasCreatedMember:null}):new Promise((e=>{if(F()&&"undefined"!=typeof window&&(window.location.href=`/RegistrationController?flow=${encodeURIComponent(n.flow||"CORE_COMBINED")}&pid=${encodeURIComponent(String(n.pid||-1))}&returnTo=${encodeURIComponent(r.path)}&fullscreen=true`),G.isNativeWebview())G.showRegistration(!1);else{var i={flow:n.flow||"CORE_COMBINED",pid:n.pid||-1,userRequestedForce:!0,extraQueryParams:{flowOrigin:n.flowOrigin||"join",...n.extraQueryParams},displayOnShowOverlay:n.deferShowOverlay||!1,locationId:a,requireSecure:n.requireSecure||!1,onSuccess:r=>{var a={userId:null!=r&&r.user_id?`${r.user_id}`:null,hasCreatedMember:!(null==r||!r.hasCreatedMember),loginProvider:null==r?void 0:r.loginProvider};n.onSuccess&&n.onSuccess(a),t({userId:a.userId}),e(a)},onClose:n.onClose,closeX:!1!==n.closeX,closeOnDocClick:!1!==n.closeOnDocClick,windowShadeOption:n.windowShadeOption||"light"};globalThis.require(["trjs!ta/registration/RegOverlay"],(e=>{n.onLogin&&n.onLogin(),e.showRegOverlayByPageModel(null,null,window.require("page-model"),i)}))}}))),[e,a,t,r.path])},Re=e=>{var r=me();return q(Y.Provider,{value:r,children:e.children})},_e=()=>{var e=B(),r=V();c((()=>{var t=t=>{var a=t.state;null!=a&&a.params&&(e.path!==a.path||e.page!==a.page||!J(e.params,a.params)||e.fragment!==a.fragment)&&r(a,"POP")};return window.addEventListener("popstate",t,!1),()=>{window.removeEventListener("popstate",t,!1)}}),[e,r])},$e=(e,r)=>e.page===(null==r?void 0:r.page)&&J(e.params,null==r?void 0:r.params),Ne=(e,r)=>{try{switch(r){case"FRAGMENT_PUSH":case"PARAM_UPDATE":history.pushState(e,"",e.path);break;case"PAGE_VIEW":history.pushState(e,"",e.path),window.scroll(0,0);break;case"IN_PLACE":history.replaceState(e,"",e.path);break;case"INITIAL":case"POP":break;default:return}}catch(e){console.error("Caught exception while accessing History API:",e)}},ke=(e,r)=>`${-1===e.indexOf("#")?e:e.split("#")[0]}${""!==(r||"")?`#${r||""}`:""}`,Ue=({children:e})=>(we(),q(z,{children:e})),Me=({children:e,lithiumRoute:r,uid:t,legacyRoute:a,lithiumNavigateAction:n,legacyNavigateAction:s})=>{var[l]=u(r),d=Z();c((()=>{var e,{path:r}=l;if(window.location.pathname+window.location.search===r&&void 0===(null==(e=history.state)?void 0:e.params)){var t=window.location.hash,a={...l,fragment:t.substring(1)};history.replaceState(a,"",`${r}${t}`)}}),[d,l]);var v=g(((e,t="FRAGMENT_PUSH")=>{var a=e||"";if(a!==r.fragment){var i={...r,path:ke(r.path,a),fragment:a};n(i),Ne(i,t)}}),[n,r]),f=g(((e,t="PAGE_VIEW")=>{if(!$e(l=r,u=e)||l.fragment!==u.fragment||l.path!==u.path){var l,u,c,v,h,{page:g,params:f,fragment:p}=e,m=t,I=$e(r,e),w=r.fragment!==p,y=i(r.page,e.page);!I||"PAGE_VIEW"!==t&&"PARAM_UPDATE"!==t||(m=w?"FRAGMENT_PUSH":"IN_PLACE"),(!y||"PAGE_VIEW"!==m&&"PARAM_UPDATE"!==m?"POP"!==m?Promise.resolve((v=p,h=ke((c=e).path,v),{...c,path:h})):Promise.resolve(e):H(d,e,"PARAM_UPDATE"===m)).then((e=>{var t=$e(r,e)?a:{...f,page:g};o(a,t)?(Ne(e,m),s(t,e.path),n(e)):window.location.href=e.path}))}}),[d,s,n,a,r]),p=h((()=>Object.freeze({route:K(Q(r)),uid:t,navigate:f,navigateToFragment:v})),[r,f,v,t]);return q(X,{value:p,children:q(Ue,{children:e})})},je=({children:e,deviceId:r,isWebview:t,userAgentCategory:a,os:n,browser:i,securityToken:o,userId:s,initialAbsoluteUrl:d,locale:u,currency:c,cdnPrefix:v,version:g,domainName:p,servlet:w,sessionId:T,setLoggedInUserId:b,showTranslationKeys:O,toggleShowTranslationKeys:E,messages:k})=>{var U=h((()=>({locale:u,currency:c})),[u,c]),M=h((()=>({userId:s,authenticate(e){void 0!==e.userId&&b(e.userId)}})),[s,b]),j=h((()=>Object.freeze({isWebview:t,userAgentCategory:a,jsEngine:Object.freeze({family:"UNKNOWN",majorVersion:-1}),renderEngine:Object.freeze({family:"UNKNOWN",majorVersion:-1}),os:Object.freeze({...n}),browser:Object.freeze({...i})})),[a,n,i,t]),L=h((()=>Object.freeze({deviceId:r,version:g,ssrLogs:[],renderError:null,stagingError:null,debugTool:!1,serviceCalls:[],serviceWorker:!1})),[r,g]),x=h((()=>({servlet:w,fullPageUrl:d})),[w,d]),W=h((()=>({getMessage:e=>k[e]||null,loadMessages:e=>{Object.entries(e).forEach((([e,r])=>{k[e]=r}))},showTranslationKeys:O,toggleShowTranslationKeys:E})),[k,O,E]);return q(y.Provider,{value:W,children:q(P,{value:U,children:q(C,{value:p,children:q(S,{value:v,children:q(m.Provider,{value:L,children:q(I,{value:T,children:q(R,{value:M,children:q(A,{value:j,children:q(D,{value:o,children:q(pe,{children:q(ye,{children:q($,{children:q(f,{children:q(l,{children:q(Ie,{children:q(N,{children:q(_,{config:x,suppressConfigWarnings:!0,children:q(fe,{children:e})})})})})})})})})})})})})})})})})})},Le=({store:e,urqlClient:r,children:t,messages:i})=>q(a,{store:e,children:q(d,{client:r,children:q(Pe,{messages:i,children:q(n,{children:q(s,{children:q(l,{children:t})})})})})});return[()=>{ge=v(Te),fe=Ae,pe=t((e=>{var r,t,a,n,i,o,s;return{preferencesTravelInfo:null!=(r=e.travelerInfo.preferences)?r:Oe,attractionsTravelInfo:null!=(t=e.travelerInfo.attractions)?t:Oe,restaurantsDate:null!=(a=null==(n=e.travelerInfo.restaurants)?void 0:n.date)?a:null,hotelsTravelInfo:null!=(i=e.travelerInfo.hotels)?i:Oe,flightsTravelInfo:null!=(o=e.travelerInfo.flights)?o:Oe,vrTravelInfo:null!=(s=e.travelerInfo.vr)?s:Oe}}),(e=>({setCurrency:r=>e(p.travelerInfo.setCurrency(r)),setRestaurantsDate:(r,t)=>e(p.travelerInfo.setEatTravelerDate(r,t)),setHotelsTravelInfo:(r,t)=>e(p.travelerInfo.setHotelsTravelerInfo(r,t,!1)),setAttractionsTravelInfo:(r,t,a,n,i)=>e({type:"SET_ATTRACTIONS_TRAVELER_INFO",travelerInfo:{singleDate:r,fromDate:t,toDate:a,attractionPaxAdults:n,attractionPaxChildren:i}}),setFlightsTravelInfo:(r,t,a,n,i)=>e(p.travelerInfo.setFlightsTravelerInfo(r,t,a,n,i)),setVrTravelInfo:(r,t,a,n)=>e(p.travelerInfo.setVrTravelerInfoLithium(r,t,a,n))})))(Se),me=Ee,Ie=Re,we=_e,ye=t(((e,r)=>({...r,lithiumRoute:e.lithiumRoute[0],uid:e.lithiumRoute[1].uid,legacyRoute:e.route})),{lithiumNavigateAction:p.lithiumRoute.navigate,legacyNavigateAction:p.route.navigate})(Me),Pe=t(((e,r)=>{var t,a,n,i,o,s;return{...r,deviceId:null!=(t=e.tracking.uniqueId)?t:"",isWebview:e.meta.isNativeWebview,userAgentCategory:e.meta.device.userAgentCategory,os:e.meta.device.os,browser:e.meta.device.browser,securityToken:e.meta.device.securityToken,userId:e.auth.loggedInUserId,initialAbsoluteUrl:null!=(a=e.meta.initialAbsoluteUrl)?a:"",locale:e.i18n.ietfLocale,currency:null!=(n=e.travelerInfo.preferences.currency)?n:"USD",cdnPrefix:e.meta.imageCdnUrl,version:e.webVersion||`${e.tracking.vcsBranch}|${e.tracking.vcsRevision}`,domainName:e.meta.baseUrl.split("://")[1],servlet:null!=(i=e.meta.initialServletName)?i:"",sessionId:null!=(o=e.tracking.sessionId)?o:"",showTranslationKeys:null!=(s=e.i18n.showTranslationKeys)&&s}}),{setLoggedInUserId:p.auth.setLoggedInUserId,toggleShowTranslationKeys:p.i18n.toggleShowTranslationKeys})(je),e("Root",Le)},[e=>(t=e.connect,a=e.Provider),e=>n=e.PopupHierarchyProvider,e=>(i=e.canNavigateBetweenPages,o=e.canNavigate,s=e.Router),e=>l=e.VirtualDOMPortalProvider,e=>d=e.default,e=>{},e=>(u=e.useState,c=e.useEffect,v=e.memo,h=e.useMemo,g=e.useCallback),e=>f=e.KeyboardNavigationModeProvider,e=>p=e.actions,e=>m=e.LithiumBootstrapContext,e=>I=e.SessionProvider,e=>(w=e.useIntlFormatter,y=e.Messages,P=e.I18nProvider),e=>(T=e.useUserAgent,A=e.UserAgentProvider),e=>D=e.SecurityTokenProvider,e=>(b=e.useDomainName,C=e.DomainNameProvider),e=>S=e.CdnPrefixProvider,e=>(O=e.useUserId,E=e.useAuthenticate,R=e.UserProvider),e=>_=e.MonikerConfiguration,e=>$=e.ViewportCategoryProvider,e=>N=e.ToastProvider,e=>k=e.TravelInfoProvider,e=>(U=e.serializeDate,M=e.serializeGuestInfo,j=e.parseDate,L=e.parseStayDates,x=e.parseGuestInfo),e=>(q=e.jsx,W=e.jsxs,z=e.Fragment),e=>G=e.NativeBridge,e=>F=e.default,e=>(B=e.useRoute,V=e.useNavigate,H=e.tryToCanonicalizeRoute,K=e.freezeRoute,Q=e.getBackwardsCompatRoute,X=e.RouteProvider),e=>Y=e.Login,e=>J=e.default,e=>Z=e.useClient,e=>ee=e.featureIsEnabled,e=>re=e.default,e=>(te=e.HEADER_BIDDING_TIMEOUT,ae=e.AD_TEST_MODE_STORAGE_KEY,ne=e.TestAdServer,ie=e.AmazonAdServer,oe=e.IasAdServer,se=e.RubiconAdServer,le=e.PreBiddingGptAdServer,de=e.AdServer,ue=e.PageTargetingProvider,ce=e.TestModeIndicator),e=>ve=e.useLogAdScriptLoadFailure]]},["12mj4n","18pymb","bvvaww","14euae","1fbuhs","vpo3wt","1o4yt4","12r4qu","45ddp0","p5p2yo","1al4vi","17thqz","1nnprh","ahlu9q","qlcuu5","1s6q22","52far5","1emwhd","1ys6v1","tr3542","1etaac","1bxkng","121h32","10of6q","z2lnv4","fgwvq1","lchj5q","b5nukb","1mqwhq","skjzuv","19b9b1","iog21h","tbkd43"]]);

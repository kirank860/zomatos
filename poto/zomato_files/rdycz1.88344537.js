(this.$WP=this.$WP||[]).push(["rdycz1",(e,r)=>{"use strict";var o,n,l,a,i,t,s,d,u,c,g,h,w,p,f,v,m,y,S,O,C="https://smartlock.google.com",b=({options:e,onReady:r,onShowOverlay:a,onFlowStepChange:i,forwardedRef:t,scrolling:s="auto"})=>{var[d,u]=o(),[c,g]=o(),[h,y]=o(!1),S="MOBILE"===w(),{onSuccess:O,isFullWidthMobile:b}=e,I=n((e=>{var r,o=e.resultData||"";if(o){var n=(e=>{var r={};try{r=JSON.parse(e)}catch(r){return console.error(`Error parsing controller result data: ${e}`),null}return"object"!=typeof r?(console.error("Parsed controller result is not an object."),null):{userId:r.user_id,hasCreatedMember:!!r.hasCreatedMember,hasAcceptedTermsOfUse:!!r.hasAcceptedTermsOfUse,loginProvider:r.loginProvider}})(o);null!=n&&n.hasCreatedMember,O&&O(n)}else O&&O(null);e.jsCallback&&(r=e.jsCallback)&&console.error(`Non-empty JSCallback is returned from RegController: ${r}`)}),[O]),k=n((e=>{e>100&&u(S&&b?"100%":e)}),[S,b]),{displayOnShowOverlay:R,onClose:P,onFailure:x}=e,M=n((o=>{var n=o,l=(e=>{if(!e)return null;if(!e.origin||0!==e.origin.indexOf("https")||e.origin!==document.location.origin)return null;if(!e.data||!e.data.indexOf||-1===e.data.indexOf("action"))return null;try{var r=JSON.parse(e.data);return r.action?r:null}catch(e){return null}})(n);if((e=>{e&&e.origin&&0===e.origin.indexOf(C)&&e.data&&e.data.type&&e.source&&e.source.postMessage({type:"verifyAck",data:e.data.data},{targetOrigin:C})})(n),l){var{action:t}=l;switch(t){case"successClose":I(l);break;case"reloadWindow":console.error("Unexpected reload window message is received from RegController iframe");break;case"fwdToRelativeUrl":var s=l.url||"";s||console.error("No url specified to forward to."),0!==s.indexOf("/")&&console.error(`Cannot forward to absolute url: ${s}`),window.location=s;break;case"resizeFrame":k(l.width),l.height>100&&(e.ignoreScreenHeight?g(l.height):g(Math.min(l.height,window.innerHeight)));break;case"domReady":y(!0),r&&r();break;case"dismiss":P&&P();break;case"showOverlay":R&&a&&a();break;case"generalError":x&&x();break;case"splash":case"regSignIn":case"regSignUp":case"regForgotPassword":i&&i(t)}}}),[e.ignoreScreenHeight,I,R,a,i,P,r,k,x]);f("message",M);var F=l((()=>{var r=e.extraQueryParams||{};Object.keys(r).forEach((e=>{void 0===r[e]&&delete r[e]}));var o=new URLSearchParams({flow:e.flow,flowOrigin:e.flowOrigin,pid:`${e.pid}`,hideNavigation:"true",userRequestedForce:"true",returnTo:"",isLithium:"true",...r});return e.mcid&&o.append("mcid",`${e.mcid}`),e.locationId&&o.append("locationId",`${e.locationId}`),e.stateToken&&o.append("stateToken",e.stateToken),void 0!==e.requireSecure&&o.append("requireSecure",`${String(!!e.requireSecure)}`),`/RegistrationController?${o.toString()}`}),[e.extraQueryParams,e.flow,e.flowOrigin,e.locationId,e.mcid,e.pid,e.requireSecure,e.stateToken]);return m("div",{className:p("lpwrL o B-",{Ra:!S}),style:{width:d,height:c},children:m(v,{className:"bFOrV _R B- o",src:F,title:"regcontroller",style:{width:d,height:c,display:h?"block":"none"},ref:t,scrolling:s})})},I=({options:e,closeX:r})=>{var a="MOBILE"===w(),[i,t]=o(!1),s=n((()=>{e.displayOnShowOverlay||t(!0)}),[e.displayOnShowOverlay]),d=n((()=>{t(!0)}),[]),u=l((()=>m(S,{options:e,onReady:s,onShowOverlay:d})),[s,e,d]);return y(g,{onClose:e.onClose,containerProps:{backgroundColor:"transparent",disableBodyScroll:!0},bodyProps:{isFullBleed:!0},enableCloseIcon:i&&r,roundedCorners:!a,hideBoxShadow:e.hideBoxShadow,children:[m("div",{style:{display:i?"block":"none"},children:u}),!i&&m("div",{className:"bJuxk","data-automation":null!=e&&e.flow?`${e.flow}_spinner`:"flow_spinner",children:m(h,{size:"large",variant:"primary"})})]})},k=()=>{var e=u(),r=d(),g=c(),{geoId:h}=r.params,[w,p]=o({flow:"CORE_COMBINED",flowOrigin:"join",pid:-1}),[f,v]=o({closeX:!0}),y=s(),S=a(void 0),C=t((()=>m(O,{options:w,closeX:f.closeX})),{},[w,f]),b=n((o=>e&&!o.forceLogin?Promise.resolve({userId:e,hasCreatedMember:null}):S.current?S.current:i()?("undefined"!=typeof window&&(window.location.href=`/RegistrationController?flow=${encodeURIComponent(o.flow||"CORE_COMBINED")}&pid=${encodeURIComponent(String(o.pid||-1))}&returnTo=${encodeURIComponent(r.path)}&fullscreen=true`),new Promise((()=>{}))):(S.current=new Promise((e=>{p({flow:o.flow||"CORE_COMBINED",flowOrigin:o.flowOrigin||"join",pid:o.pid||-1,isFullWidthMobile:o.isFullWidthMobile||!1,hideBoxShadow:o.hideBoxShadow||!1,extraQueryParams:o.extraQueryParams||{},displayOnShowOverlay:o.deferShowOverlay,requireSecure:o.requireSecure||!1,locationId:h||-1,onSuccess:r=>{var n={userId:(null==r?void 0:r.userId)||null,hasCreatedMember:!(null==r||!r.hasCreatedMember),loginProvider:null==r?void 0:r.loginProvider};o.onSuccess&&o.onSuccess(n),C.close(),S.current=null,g({userId:n.userId}),e(n)},onClose:()=>{y({module:"regoverlay",action:"closed",context:[h||"",o.flow].join("|"),value:o.pid||void 0,nonInteraction:!1}),C.close(),S.current=null,o.onClose&&o.onClose()},onFailure:()=>{o.onFailure&&o.onFailure()}}),v({closeX:!1!==o.closeX}),C.open()})),S.current)),[e,r.path,h,C,g,y]);return l((()=>({login:b,close:C.close})),[b,C.close])},R=({flow:e,flowOrigin:r="login",pid:o=-1,isFullWidthMobile:n=!1,forceLogin:l=!1,extraQueryParams:a={},deferShowLogin:i=!0,requireSecure:t=!1,ignoreScreenHeight:s=!1,onLoginSuccess:d,onLoginFailure:g,onShowOverlay:h,onFlowStepChange:w,forwardedRef:p,scrolling:f})=>{var v=u(),y=c();return v&&!l?null:m(S,{options:{flow:e,flowOrigin:r,pid:o,isFullWidthMobile:n,extraQueryParams:a,displayOnShowOverlay:i,requireSecure:t,ignoreScreenHeight:s,onSuccess:e=>{y({userId:(null==e?void 0:e.userId)||null}),d&&d()},onFailure:()=>{g&&g()}},onShowOverlay:h,onFlowStepChange:w,forwardedRef:p,scrolling:f})};return[()=>{S=b,O=I,e({AuthGate:R,default:k})},[e=>(o=e.useState,n=e.useCallback,l=e.useMemo,a=e.useRef),e=>i=e.default,e=>t=e.useVDOMPortal,e=>s=e.useGARecorder,e=>d=e.useRoute,e=>(u=e.useUserId,c=e.useAuthenticate),e=>g=e.default,e=>h=e.LoadingSpinner,e=>w=e.useViewportCategory,e=>p=e.default,e=>f=e.useWindow,e=>v=e.EmbeddedContent,e=>(m=e.jsx,y=e.jsxs)]]},["1o4yt4","z2lnv4","14euae","32pwc7","fgwvq1","52far5","17u7gi","1l9qeu","1ys6v1","fkji80","ltllz9","dyfdn5","121h32"]]);

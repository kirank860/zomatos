(this.$WP=this.$WP||[]).push(["a349lq",(e,a)=>{"use strict";var l,n,r,i,t,o,c,s,d,u,m,h,f,p,v,_,y,k,g,b,N,A,L,w,C,T,x,D,P,O,z,F,M,S,q,R,H,I,E,V,K,j,B,$,U,G,W,J,Q,Y,Z,X,ee,ae,le,ne={__key:0xe96ae0ef2b2c,id:"e96ae0ef2b2c56385193ddb2dca49367",loc:{},definitions:[]},re="VFcwS",ie=({link:e})=>{var a=g(e.isObfuscated?e.url:null),l=e.isObfuscated?a:e.url,n="cookie_consent"===e.trackAction,r=h({module:"Footer",action:"click",context:e&&e.trackAction||""}),t=e.preLocalizedAnchorText||e.localizedAnchorText;return T("span",{className:"Qxcli",children:T(N,n?{variant:"primary",onClick:()=>{r(),L()},children:T(i,{id:"common_Cookie_consent_14f6"})}:{variant:"primary",href:null!=l?l:"",rel:"noopener",target:e.newWindow?"_blank":"_self",onClick:r,leftAlign:!0,children:t})})},te=({legalLinks:e,showLeonardoMessage:a})=>{var n,r,t,o,c,s=A(),[d,u]=v(!1),[{data:m}]=l({query:ne}),h=(null==m||null==(n=m.currentLocale)?void 0:n.languageName)||"",f=!1;if(U.has(null!=(r=null==m||null==(t=m.currentLocale)?void 0:t.ietfLocale)?r:""))c=null;else if("en"===(null==m||null==(o=m.currentLocale)?void 0:o.ietfLocale))c="the United States",f=!0;else{var p,_;c=(null==m||null==(p=m.currentLocale)||null==(_=p.country)?void 0:_.name)||""}var y=[T(i,null!=c?{id:"footer_disclaimer_line1",args:{language:h,country:c}}:{id:"footer_disclaimer_line1_no_country",args:{language:h}}),w(C,{children:[T(i,{id:"footer_disclaimer_line2"}),f&&w(C,{children:[" ",T(i,{id:"footer_disclaimer_line2_estimates"})]})]}),T(i,{id:"footer_disclaimer_line3"})];return w(C,{children:[w("div",{className:"MQpxt _Y",children:[T("img",{className:"HAOGn F0",src:`${s}/img2/brand_refresh/Tripadvisor_logoset_solid_green.svg`,alt:""}),w("div",{children:[T("div",{className:"CDuLn",children:w(b,{variant:"supporting-02",children:[T(i,{id:"common_26ec",args:{0:$}})," ",T(i,{id:"common_Allrightsreserved"})]})}),T("div",{className:"VPSQM",children:T(b,{variant:"title-05",elementType:"span",children:(e||[]).map((e=>null!=e&&T(ie,{link:e},e.url)))})})]})]}),w(b,{variant:"supporting-02",children:[a&&T("p",{className:re,children:T(i,{id:"photos_provided_by_2_1bed",args:{0:"VFM Leonardo"}})}),d?y.map(((e,a)=>T("p",{className:re,children:e},a))):w("p",{className:re,children:[y[0]," ",T("button",{className:"ZGryi Cg b Wc _S P0 G_ B-",onClick:()=>u(!0),children:T(i,{id:"common_more_ffffe87d"})})]})]})]})},oe=({link:e})=>{var a,l=f(),n=null==(a=e.preLocalizedLink)?void 0:a.match(/^(.*)<a.*href="([^"]*)".*>(.*)<\/a>(.*)$/);if(null==n)return null;var[,r,i,t,o]=n;return w("li",{className:"rcHyD",children:[r,T(x,{theme:"standalone",display:"inline",href:i,target:"_blank",rel:"noopener",onClick:()=>{l({module:"Footer",action:"click",context:e.trackAction||""})},children:t}),o]})},ce=({partnerLinks:e})=>T(b,{variant:"supporting-01",children:T("ul",{className:"MD",children:(e||[]).filter(Boolean).map((e=>T(oe,{link:e},e.preLocalizedLink)))})}),se=({link:e,trackingModule:a})=>{var l=f(),n="isObfuscated"in e&&e.isObfuscated,r=g(n?e.url:null),i=n?r:e.url;return T("li",{className:"ciSaE",children:T(x,{theme:"standalone",display:"inline",href:null!=i?i:void 0,target:e.newWindow?"_blank":void 0,rel:"noopener"+("cookie_consent"===e.trackAction?" nofollow":""),onClick:()=>l({module:a||"Footer",action:"click",context:e.trackAction||""}),children:e.preLocalizedAnchorText||e.localizedAnchorText})})},de=({links:e,trackingModule:a})=>T(b,{variant:"supporting-01",children:T("ul",{children:(e||[]).filter(Boolean).map((e=>T(se,{link:e,trackingModule:a},e.url)))})}),ue=e=>{switch(e){case"facebook":return T(P,{size:24});case"twitter":return T(M,{size:24});case"instagram":return T(O,{size:24});case"pinterest":return T(F,{size:24});default:return T(z,{size:24})}},me=({socialLinks:e})=>{var a=f(),l=D();return T("div",{className:"zlkck A",children:(e||[]).map((e=>{var n,r,i,t;return e&&null!=e.url&&T("a",{href:e.url,rel:"noopener",className:s("HqkqA _F",l),onClick:()=>{a({module:"Footer",action:"click",context:e&&e.trackAction||""})},title:null!=(n=null!=(r=e.preLocalizedAnchorText)?r:e.localizedAnchorText)?n:void 0,"aria-label":null!=(i=null!=(t=e.preLocalizedAnchorText)?t:e.localizedAnchorText)?i:void 0,children:ue(e.trackAction)},e.url)}))})},he={__key:41363295300703,id:"259ea485ec5f1aeadcaca4bda99ba7a4",loc:{},definitions:[]},fe=e=>{var a;return"function"==typeof e.formatToParts?null==(a=e.formatToParts().find((({type:e})=>"currency"===e)))?void 0:a.value:void 0},pe=()=>{var e,a,n=t(),[{data:r}]=l({query:he,variables:{currencyCode:n}}),i=(e=n,a=o(),_((()=>{var l={symbol:new Intl.NumberFormat(a,{style:"currency",currencyDisplay:"symbol",currency:e}),name:new Intl.NumberFormat(a,{style:"currency",currencyDisplay:"symbol",currency:e}),code:new Intl.NumberFormat(a,{style:"currency",currencyDisplay:"code",currency:e})};return{symbol:fe(l.symbol)||"",name:fe(l.name)||"",code:fe(l.code)||e}}),[e,a]));return r&&r.currency||i},ve={__key:0xff42faf25c32,id:"ff42faf25c32a983827598e9b6774e24",loc:{},definitions:[]},_e=()=>{var{localize:e}=c(),a=f(),n=Y(),{setCurrency:r}=S().update.preferences,[i,t]=v(!1),[{data:o}]=l({query:ve,pause:!i}),s=_((()=>{var e=new Set;return[...(null==o?void 0:o.majorCurrencies)||[],...(null==o?void 0:o.minorCurrencies)||[]].map((a=>e.has(null==a?void 0:a.code)||null==(null==a?void 0:a.name)||null==a.code||null==a.symbol?null:(e.add(a.code),{value:a.code,displayName:`${a.symbol}  ${a.name}`,label:a.name}))).filter(Boolean)}),[o]),d=n.symbol===n.code?n.symbol:`${n.symbol} ${n.code}`;return T(q,{options:s,value:n.code,onChange:r,label:e.string("common_9bc"),selectedDisplayName:d,menuVariant:"leading-bottom-caret",onOpen:()=>{a({module:"CURRENCY_PICKER",action:"Open",context:n.code}),t(!0)},fullscreenMobile:!0,loading:!s})},ye={__key:0xa86057ad03a,id:"0a86057ad03ab2480d21d3531c7aed7f",loc:{},definitions:[]},ke=({currentPath:e})=>{var a,{localize:n}=c(),r=f(),{pointOfSaleName:i}=(null==(a=l({query:ne})[0].data)?void 0:a.currentLocale)||{},t=o(),[s,d]=v(null),[{data:u}]=l({query:ye,pause:!s,variables:{serverName:s}}),m=_((()=>[...(null==u?void 0:u.Americas)||[],...(null==u?void 0:u.Europe)||[],...(null==u?void 0:u.APAC)||[],...(null==u?void 0:u.AfricaAndMiddleEast)||[]].filter(Boolean).map((({locale:a,pointOfSaleName:l,hostname:n})=>null!=a&&null!=l&&null!=n?{displayName:l,href:`https://${n}${e}`,onClick:()=>r({module:"POS_PICKER",action:"SELECT",context:`${a}_FROM_${t}`})}:null)).filter(Boolean)),[u,e,t,r]);return T(q,{mode:"menu",options:m,label:n.string("footer_region"),selectedDisplayName:i||"",menuVariant:"trailing-bottom-caret",onOpen:()=>{r({module:"POS_PICKER",action:"Open",context:t}),d(window.location.hostname)},fullscreenMobile:!0,loading:!m})},ge={LIGHT:"Light theme",DARK:"Dark theme"},be=[{displayName:"Use your device settings",value:"AUTO"},{displayName:"Dark theme (beta)",value:"DARK"},{displayName:"Light theme",value:"LIGHT"}],Ne=()=>{var{theme:e,themePreferenceOrAuto:a,setTheme:l}=u(),n=R(),r=y((()=>{n({itemType:"theme-switcher",itemName:"global-footer",actionType:"click",customData:JSON.stringify({action:"open"})})}),[n]),i=y((e=>{l(e),n({itemType:"theme-switcher",itemName:"global-footer",actionType:"click",customData:JSON.stringify({action:"select",theme:e})})}),[n,l]);return T(q,{mode:"select",menuVariant:"trailing-bottom-caret",label:"Appearance",selectedDisplayName:ge[e],options:be,value:a,onOpen:r,onChange:i})},Ae=({header:e,children:a,dataAutomationTag:l})=>{var n=k(),i=k(),t="DESKTOP"!==r(),[o,c]=v(!1),d=D(),u=l?{"data-automation":l}:{},m=y((()=>c((e=>!e))),[]),h=y((e=>{switch(e.key){case" ":case"Enter":c((e=>!e)),e.preventDefault();break;case"ArrowDown":case"ArrowRight":c(!0),e.preventDefault();break;case"ArrowUp":case"ArrowLeft":c(!1),e.preventDefault()}}),[]);return w("div",{className:s("BGfZK",{yVneo:o}),children:[w("div",{className:s("lRfGJ",t&&d),id:n,...t?{role:"button","aria-controls":i,"aria-expanded":o,onClick:m,onKeyDown:h,tabIndex:0}:{},children:[T("div",{className:"woaMF",children:T(o?H:I,{})}),T("div",{className:"HRDdz",children:T(b,{variant:"body-01",children:e})})]}),T("section",{className:"cQtCs",id:i,"aria-labelledby":n,...u,children:a})]})},Le=["Home","NotFound","Articles","ArticlesHome"],we=["Hotel_Review","ShowUserReview"],Ce=({footerLinks:e,currentPath:a})=>{var l=m(),n=Le.includes(l),{canChangeThemes:r}=u(),t=f(),o=p((()=>{"Hotel_Review"===l&&t({module:"footer",action:"in_view",context:"Hotel_Review"})}));return T("footer",{className:"KoJoc Cj Pl PN Py PA",children:T(d,{children:w("div",{ref:o,className:s("dLJNv",{vhldu:n,DUehT:r}),children:[n&&w(C,{children:[T("div",{className:"wEeet",children:T(ae,{header:T(i,{id:"footer_about_ta_v2"}),dataAutomationTag:"footer_section_about_ta",children:T(J,{links:e&&e.aboutUsLinks})})}),T("div",{className:"VJiOT",children:T(ae,{header:T(i,{id:"footer_explore_v2"}),dataAutomationTag:"footer_section_explore",children:T(J,{links:e&&e.exploreLinks})})}),w("div",{className:"FNtVm",children:[T(ae,{header:T(i,{id:"footer_do_business_v2"}),dataAutomationTag:"footer_section_do_business",children:T(J,{links:e&&e.businessLinks})}),null!=(null==e?void 0:e.appLinks)&&e.appLinks.length>0&&T(ae,{header:T(i,{id:"footer_get_app_v2"}),dataAutomationTag:"footer_section_get_app",children:T(J,{links:e&&e.appLinks})})]}),null!=(null==e?void 0:e.partnerLinks)&&(null==e?void 0:e.partnerLinks.length)>0&&T("div",{className:"DBFqh",children:T(ae,{header:T(i,{id:"footer_ta_sites_v2"}),dataAutomationTag:"footer_section_ta_sites",children:T(W,{partnerLinks:e.partnerLinks})})})]}),w("div",{className:"sVVKe",children:[T(Z,{}),T(X,{currentPath:a}),r&&T(ee,{})]}),n&&T("div",{className:"jkVHQ",children:T(Q,{socialLinks:e&&e.socialLinks})}),T("div",{className:"MfOiD",children:T(G,{legalLinks:e&&e.legalLinks,showLeonardoMessage:we.includes(l)})})]})})})},Te={__key:0xf0e20563125a,id:"f0e20563125a2ff6738f57883f4d888b",loc:{},definitions:[]},xe=({geoId:e,pageName:a,currentPath:i})=>{var{os:{family:t}}=n(),c=r(),s=o(),d="IOS"===t||"ANDROID"===t?t:"UNKNOWN",[{data:u}]=l({query:Te,variables:{locale:s,pageName:a||"",geoId:e,isMobile:"MOBILE"===c,osFamily:d}}),m=i||"/",h=a||"";return T(le,{footerLinks:null==u?void 0:u.footerLinks,currentPath:m,pageName:h})},De=["ForumHome"],Pe=()=>{var{page:e}=j(),{opfs:a,fetching:l}=B(!0),n=!De.includes(e);return T(d,{children:w("div",{className:"hqlkK Pg PN Pt PA Cj",children:[T(E,{component:V.masthead,enabled:!l,children:(null==a?void 0:a.MASTHEAD_H1)&&T("h1",{"data-test-target":"masthead_h1",children:T(b,{variant:"title-05",display:"inline",children:a.MASTHEAD_H1})})}),n&&T(K,{})]})})};return[()=>{$=(new Date).getFullYear(),U=new Set(["ar","zh-Hans"]),G=te,W=ce,J=de,Q=me,Y=pe,Z=_e,X=ke,ee=Ne,ae=Ae,le=Ce,e({OnPageAssets:Pe,default:xe})},[e=>l=e.useQuery,e=>n=e.useUserAgent,e=>r=e.useViewportCategory,e=>(i=e.default,t=e.useCurrency,o=e.useLocale,c=e.useLocalize),e=>s=e.default,e=>d=e.default,e=>u=e.useTheme,e=>m=e.default,e=>(h=e.useGARecordCallback,f=e.useGARecorder),e=>p=e.useOnVisible,e=>(v=e.useState,_=e.useMemo,y=e.useCallback,k=e.useId),e=>g=e.useObfuscatedUrl,e=>b=e.default,e=>N=e.BorderlessButton,e=>A=e.useCdnPrefix,e=>L=e.showConsentPreferences,e=>(w=e.jsxs,C=e.Fragment,T=e.jsx),e=>x=e.default,e=>D=e.useKeyboardFocusableClassName,e=>P=e.default,e=>O=e.default,e=>z=e.default,e=>F=e.default,e=>M=e.default,e=>S=e.useTravelInfo,e=>q=e.DropdownMenu,e=>R=e.default,e=>H=e.default,e=>I=e.default,e=>(E=e.default,V=e.Component),e=>K=e.BreadcrumbsInFooter,e=>j=e.useRoute,e=>B=e.useOnPageFactorsWithStatus]]},["1mqwhq","1nnprh","1ys6v1","17thqz","fkji80","94v69w","1u9jlw","eqoaya","32pwc7","13btuy","1o4yt4","ay1l3c","1essqv","jppfwt","1s6q22","1973cc","121h32","lr6tb6","12r4qu","0v7vxf","1008v8","1ue3yk","it6k5j","15azdz","1etaac","1ntn26","1r73jw","1mxujx","2wld0u","16nmgr","n1m6wk","fgwvq1","6hf0eg"]]);
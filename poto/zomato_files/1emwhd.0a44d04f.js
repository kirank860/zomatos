(this.$WP=this.$WP||[]).push(["1emwhd",(e,n)=>{"use strict";var t,a,r,l,o,i,u,s,d,c,p,f,g,h,m,k,v,y,w=([e,n])=>"string"==typeof n||"number"==typeof n?[[e,`${n}`]]:"boolean"==typeof n?[[e,n?"true":"false"]]:[],P=(e,n)=>{switch(n.type){case"startLoadingMoniker":return{monikers:[...e.monikers,n.payload],loaded:e.loaded};case"finishLoadingMoniker":return e.loaded.add(n.payload),{monikers:e.monikers,loaded:e.loaded};default:throw new Error("Attempted to dispatch an action with a type that does not exist")}},b=({config:e,suppressConfigWarnings:n=!1,children:k})=>{var[v,y]=t.useReducer(P,{monikers:[],loaded:new WeakSet}),{path:b}=u(),M=s(),T=d(),C=c(),$=t.useRef(new Set),x=t.useRef(0),E=t.useCallback((n=>{var t;x.current++;var l="string"==typeof n?n:n.type,o="string"==typeof n?{}:n.payload,i=(null==e?void 0:e.servlet)||null,u=(null==e?void 0:e.fullPageUrl)||`https://${C}${b}`,s=document.referrer||null,d=document.title||null,c=a.get("pbjs_identitylink"),p=null==c||null==(t=c.envelope)?void 0:t.envelope,f=[...Object.entries(null!=o?o:{}),["servlet",i],["fullPageUrl",u],["path","/Unknown"!==b?b:null],["puid",M],["referringUrl",s],["pageTitle",d],["localeTag",T],["pixelType",l],["lithium",!e],["liveRampEnvelope",p]].flatMap(w),g=`/PageMoniker?${new URLSearchParams(f).toString()}`;r((()=>{y({type:"startLoadingMoniker",payload:[M,l,g]})}))}),[e,C,b,M,T]);return t.useEffect((()=>()=>{$.current.forEach((e=>l(e)))}),[]),p(f,{children:[g(h.Provider,{value:E,children:g(m,{children:k})}),v.monikers.map(((e,n)=>{var[t,a,r]=e;return v.loaded.has(e)&&t!==M?null:g(i,{"data-moniker-type":a,className:"_",src:r,title:"PageMoniker",onLoad:n=>{y({type:"finishLoadingMoniker",payload:e});var t=n.currentTarget.contentWindow,a=o((e=>{null==t||t.postMessage(`TimeToInteractive:${e||"null"}`,"*"),$.current.delete(a)}));$.current.add(a)}},`${n}${r}`)}))]})},M=e=>{var n=t.useContext(h);return t.useCallback((()=>new Promise((t=>{n?n(e,t):t(null)}))),[n,e])},T=(e,n=!0)=>{var a=s(),r=v({type:"PAGEVIEW",payload:e||{}}),l=t.useRef(r);t.useEffect((()=>{l.current=r}),[r]),t.useEffect((()=>{n&&!y.has(a)&&(l.current(),y.add(a))}),[a,n])};return[()=>{h=t.createContext(null),m=t.memo((({children:e})=>g(f,{children:e}))),k=b,v=M,y=new Set,e({MonikerConfiguration:k,usePageViewMoniker:T,usePixelCallback:v})},[e=>t=e,e=>a=e.default,e=>r=e.enqueue,e=>(l=e.cancelTTICallback,o=e.requestTTICallback),e=>i=e.Pixel,e=>(u=e.useRoute,s=e.usePageviewUid),e=>d=e.useLocale,e=>c=e.useDomainName,e=>(p=e.jsxs,f=e.Fragment,g=e.jsx)]]},["1o4yt4","19b9b1","1973cc","gbnboa","dyfdn5","fgwvq1","17thqz","qlcuu5","121h32"]]);
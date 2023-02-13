(this.$WP=this.$WP||[]).push(["1xo1is",(e,p)=>{"use strict";var r,i,s,u,t,n,o,a,T,c,l,d,v,m,E,g,h="REGISTER_POPUP",P="DISMISS_POPUP",y="RESET",M=(e,p)=>(null==e?void 0:e.get(p))||[],S=(e,p)=>{var r;return!((e,p)=>M(e.popupTierDismissals,p).some((r=>!M(e.popupTierEvents,p).includes(r))))(e,p)||!(null==(r=e.popupSkipTiers)||!r.get(p))},f=(e,p)=>{switch(p){case 0:return f(e,50);case 50:return e.popupMaxTier>50||S(e,p)?f(e,100):50;case 100:return e.popupMaxTier>100||S(e,p)?f(e,200):100;case 200:return S(e,p)?f(e,300):200;case 300:return S(e,p)?f(e,400):300;case 400:return S(e,p)?f(e,500):400;case 500:return S(e,p)?f(e,600):500;case 600:return 600;default:return 0}},k=(e,p,r,i)=>{var s=e.popupNodes,u=e.popupTier,t=new Map(e.popupSkipTiers),n=new Map(e.popupTierDismissals),o=p.tier,a=n.get(o),T=r.filter((e=>!(null!=a&&a.includes(e))));return T.length>0&&(a&&a.length>0&&T.length>0?n.set(o,[...a,...T]):n.set(o,r)),i&&t.set(o,!0),e.popupNodes.some((e=>e.key===p.key))||(s=[...e.popupNodes,p],u=f({...e,popupTierDismissals:n,popupSkipTiers:t},0)),{...e,popupNodes:s,popupTierDismissals:n,popupTier:u,popupSkipTiers:t}},w=(e,p)=>{var r=new Map(e.popupTierEvents),i=[...r.get(e.popupTier)||[]];if(p.forEach((p=>{var r;!i.includes(p)&&null!=(r=e.popupNodes)&&r.some((r=>r.key===p&&r.tier===e.popupTier))&&(i=[...i,p])})),i.toString()!==(e.popupTierEvents.get(e.popupTier)||[]).toString()){var s,u,t={popupTierEvents:e.popupTierEvents,popupTier:e.popupTier};(null!=(s=e.popupSkipTiers)&&s.get(e.popupTier||0)||e.popupTierDismissals&&e.popupNodes.length>0&&void 0!==e.popupTier&&(i&&(null==(u=i)?void 0:u.length)>0||0===e.popupTier))&&(r.set(e.popupTier,i),t=(e=>{var p,r=p=>({...e,popupTier:p});if(Array.from(e.popupTierEvents.get(e.popupTier)||[]).sort().toString()===Array.from((null==(p=e.popupTierDismissals)?void 0:p.get(e.popupTier||0))||[]).sort().toString())switch(e.popupTier){case 0:return r(f(e,50));case 50:return r(f(e,100));case 100:return r(f(e,200));case 200:return r(f(e,300));case 300:return r(f(e,400));case 400:return r(f(e,500));case 500:return r(f(e,600));default:return e}return e})({...e,popupTierEvents:r}));var n=e.popupMaxTier;return e.popupMaxTier<t.popupTier&&(n=t.popupTier),{...e,popupTierEvents:r,popupMaxTier:n,popupTier:t.popupTier}}return e},x=()=>({popupNodes:[],popupTierDismissals:new Map,popupTierEvents:new Map,popupTier:0,popupMaxTier:0,popupSkipTiers:new Map}),D=(e=x(),p)=>{switch(p.type){case h:return void 0!==p.element?k(e,p.element,p.dismissEvents,p.skip):(console.error("Missing element for action in the popup reducer."),e);case P:return w(e,p.dismissEvents);case y:return x();default:return e}},N=({children:e})=>v(m,{children:e}),R=({children:e})=>{var p=l(),[r,o]=a(D,{popupNodes:[],popupTierDismissals:new Map,popupTierEvents:new Map,popupTier:0,popupMaxTier:0,popupSkipTiers:new Map}),T=i(p),m=i([]),M=s(((e,p,r)=>{e===p?u((()=>o(r))):m.current=[{pageviewUid:p,event:r},...m.current]}),[o]),S=s(((e,r,i)=>{var s={type:h,element:e,dismissEvents:r,skip:i};M(T.current,p,s)}),[M,p,T]),f=s((e=>{var r={type:P,dismissEvents:e};M(T.current,p,r)}),[M,p,T]);t((()=>{p!==T.current&&(T.current=p,o({type:y,dismissEvents:[]}),m.current.filter((e=>e.pageviewUid===p)).forEach((e=>o(e.event))),m.current=[])}),[o,T,p,m]);var k=n((()=>({registerPopupTier:S,dismissEvents:f})),[S,f]);return d(E.Provider,{value:k,children:[v(g,{children:e}),r.popupNodes.filter((e=>{var p;return e.tier===r.popupTier&&!((null==(p=r.popupTierEvents)?void 0:p.get(r.popupTier))||[]).includes(e.key)})).map((({node:e,key:p})=>v(g,{children:v(c,{children:e})},p)))]})},U=e=>{var{registerPopupTier:p,dismissEvents:r}=T(E),{factory:u,key:o,eventTypes:a,tier:c,skip:l}=e,d=i(null),v=i(o),m=i(u),g=i(a);v.current!==o&&(v.current=o,m.current=u,g.current=a);var h=g.current,P=s((()=>{r(h)}),[r,h]),y=n((()=>({dismiss:P})),[P]);return t((()=>{d.current=m.current(y),p({node:d.current,key:o,tier:c},g.current,l)}),[o,p,y,c,l]),{dismiss:P}};return[()=>{E=r({registerPopupTier:()=>{},dismissEvents:()=>{}}),g=o(N),e({DISMISS_POPUP:P,PopupHierarchyLithium:E,PopupHierarchyLithiumProvider:R,REGISTER_POPUP:h,dismiss:w,register:k,usePopupHierarchyRender:U})},[e=>(r=e.createContext,i=e.useRef,s=e.useCallback,u=e.startTransition,t=e.useEffect,n=e.useMemo,o=e.memo,a=e.useReducer,T=e.useContext),e=>c=e.ErrorBoundary,e=>l=e.usePageviewUid,e=>(d=e.jsxs,v=e.jsx,m=e.Fragment)]]},["1o4yt4","nbuwox","fgwvq1","121h32"]]);

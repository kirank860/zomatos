(this.$WP=this.$WP||[]).push(["1vumu0",(e,r)=>{"use strict";var n,t,a,u,d,s,i,o,c,l={__key:47869923082862,id:"2b8995c2c26e722fd22eb1cf8c527a57",loc:{},definitions:[]},f=(e,r)=>e+r,g=({children:e})=>{var{path:r,page:d}=t(),l=a(),g=n.useRef(new Set),v=n.useCallback((e=>{g.current.add(e)}),[]),{pvExchange:h}=u();return n.useEffect((()=>{var e=null,n=!1,t=()=>{if(!n){var a=[l,r,d].map((e=>Array.from(i.encode(e)).reduce(f,0))).reduce(f,0);(n=navigator.sendBeacon("/PVLog",JSON.stringify({checksum:a,path:r,uid:l,page:d,pageProperties:Array.from(o.size>0?o:g.current),referrer:"undefined"!=typeof document?document.referrer:null})))&&(g.current=new Set,e&&cancelIdleCallback(e),window.removeEventListener("beforeunload",t))}};return h.allQueriesResolvedForPageView(l).then((()=>{e=requestIdleCallback(t)})),window.addEventListener("beforeunload",t),t}),[l]),s(c.Provider,{value:v,children:e})},v=()=>{var e=d(l);return n.useCallback((r=>e({impressions:[r]})),[e])},h=()=>s(g,{children:null});return[()=>{i=new TextEncoder,o=new Set,e({AddPageProperty:c=n.createContext((e=>{o.add(e)})),PageViewLogger:g,default:h,useImpressionLogger:v})},[e=>n=e,e=>(t=e.useRoute,a=e.usePageviewUid),e=>u=e.useClient,e=>d=e.useStatelessMutation,e=>s=e.jsx]]},["1o4yt4","fgwvq1","1mqwhq","1fbuhs","121h32"]]);

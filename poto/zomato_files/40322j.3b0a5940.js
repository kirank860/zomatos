(this.$WP=this.$WP||[]).push(["40322j",(r,e)=>{"use strict";var n,t,u,c,a=({urls:r})=>n("div",{className:"_",children:r.map((r=>n("img",{src:r},r)))}),o=()=>{var r=t({}),e=t({});return u((()=>()=>{Object.entries(e.current).forEach((([r])=>{e.current[r].onload=null,e.current[r].onerror=null,delete e.current[r]}))}),[]),{loadImage:c(((n,t,u)=>{void 0===e.current[n]&&(e.current[n]=new Image,e.current[n].onload=()=>{void 0!==t&&t(),r.current[n]=!0},e.current[n].onerror=()=>{void 0!==u&&u(),r.current[n]=!1},e.current[n].src=n)}),[]),isLoaded:c((e=>!!r.current[e]),[])}};return[()=>{r({ImagePreloader:a,useImagePreloader:o})},[r=>n=r.jsx,r=>(t=r.useRef,u=r.useEffect,c=r.useCallback)]]},["121h32","1o4yt4"]]);
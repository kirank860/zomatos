(this.$WP=this.$WP||[]).push(["wt5b21",(e,t)=>{"use strict";var r,l,n,i,o,s,u,a,d,c,f,v,h,m,w,g=e=>e.above?"above":e.below?"below":e.leftOf?"leftOf":"rightOf",b=e=>{var{onShow:t,toggleOnTouch:b,hideOnParentScroll:Y,maxWidth:X,fullBleed:P,inverted:x,message:y,shiftArrow:p,shiftX:W,shiftY:k,alignEdge:B,closeButton:E=!1,children:O}=e,C=g(e),[R,S]=r(!1),[j,F]=r(null),L=l(null),T=l({mouseX:0,mouseY:0}),$=n(((e,t)=>j&&j.contains(document.elementFromPoint(e,t))),[j]),q=n((e=>$(e.clientX,e.clientY)),[$]),z=n((()=>{S(!1)}),[]),A=n((()=>{if(R){var{mouseX:e,mouseY:t}=T.current;$(window.scrollX+e,window.scrollY+t)||z()}}),[$,z,R]),N=n((()=>{t&&!R&&t(),S(!0)}),[t,R]),D=n((()=>{R?z():N()}),[R,z,N]),G=n(o((e=>{var t=e;if(!j||!j.getBoundingClientRect)return!1;if(q(t))return R||N(),!0;if(!L.current||!L.current.getBoundingClientRect)return!1;var r=s(j,L.current);return u([t.clientX,t.clientY],r)||z(),!1}),250),[j,L,z,N]);a("mousemove",G,void 0),d(A);var H=n(((e,t,r)=>{var l=e=>{var t=e.clientX-window.scrollX,r=e.clientY-window.scrollY;T.current={mouseX:t,mouseY:r}},n=(e,t)=>{var r=(r,l)=>"add"===t?e.addEventListener(r,l):e.removeEventListener(r,l);r("mouseenter",N),r("focus",N),r("blur",z),r("mousemove",l),b?r("touchstart",D):(r("touchstart",N),r("touchend",z))};e&&n(e,"remove"),t&&n(t,"add"),r(t)}),[z,N,D,b]),I=X?{maxWidth:`${X}px`}:{},J=h(m,{children:[O((e=>H(j,e,F))),j&&R&&w(f,{position:C,target:j,alignEdge:B,small:!0,inverted:x,shiftX:W,shiftY:k,shiftArrow:p,overlayType:"tooltip",children:h("div",{className:i("RFbYw",{EzPBx:x,TvyYs:P}),ref:L,style:I,children:[y,E&&w(v,{onClick:z})]})})]});return Y?w(c,{callback:z,disableListeners:!R,children:e=>h("span",{ref:e,children:[" ",J]})}):J};return[()=>{e({default:b,getPosition:g})},[e=>(r=e.useState,l=e.useRef,n=e.useCallback),e=>i=e.default,e=>o=e.default,e=>(s=e.makePoly,u=e.insidePoly),e=>a=e.useWindow,e=>d=e.useWindowScroll,e=>c=e.default,e=>f=e.default,e=>v=e.PopoverX,e=>(h=e.jsxs,m=e.Fragment,w=e.jsx)]]},["1o4yt4","fkji80","dsbyen","1it954","ltllz9","1w1vb4","1qbn8x","1x9dv9","14q9l4","121h32"]]);
(this.$WP=this.$WP||[]).push(["1nj5fm",(t,e)=>{"use strict";var o,n,l,a,i,r,u,s,h,c,d,f,p,v,g,w,m=t=>{var e;return e=t.disabled?t.isRight?"tRchD _Q Z1 X0 _U":"pwAVX _Q Z1 X0 l":t.isRight?"FsonA _U _Q Z1 _S X0":"DsTkH l _Q Z1 _S X0",h("div",{className:s(e,t.size&&"small"===t.size?"KJcms":null,"is-shown-at-tablet"),onClick:t.onClick,"data-clicksource":"CarouselArrow"})},_=({photos:t,totalCount:e,loadMorePhotos:n,width:i,height:r,locationId:u,trackingContext:s,captureNavEvents:c})=>{var v=t.length,[g,m]=o(0),_=d(),x=l((t=>{c&&(t.stopPropagation(),t.preventDefault()),m((t=>{var o=Math.min(v-1,t+1);return n&&o>=v-2&&v<e&&n(),o})),_({module:"pin",action:"pin_photo_carousel_forward",context:s,value:u})}),[v,u,_,s,e,n,c]),S=l((t=>{c&&(t.stopPropagation(),t.preventDefault()),m((t=>Math.max(0,t-1))),_({module:"pin",action:"pin_photo_carousel_back",context:s,value:u})}),[u,_,s,c]),b=a((()=>t.map(((t,e)=>h(f,{shouldLoad:Math.abs(g-e)<=2,children:h(p,{sources:t.photoSizes,notLazy:!0,width:"100%",height:"100%",fitStrategy:"cover"},t.id)},t.id)))),[t,g]);return h(w,{width:i,height:r,displayIndex:g,totalContentCount:e,onPrevious:S,onNext:x,isPreviousAllowed:g>0,isNextAllowed:g<e-1,navArrowSize:"small",content:b})},x={__key:0x5f72a043dbba,id:"5f72a043dbba2fd4f194a9d9505f85bb",loc:{},definitions:[]},S=t=>{var e,n=i(null),[a,u]=o([]),[s,h]=o(0),c=null===n?3:10,[{data:d,fetching:f}]=v({query:x,variables:{locationId:t,limit:(e=null===n,e?3:10),offset:s}});r((()=>{var t=d&&d.locations?d.locations[0]:null;if(t&&!f){n.current=t.photoCount;var e=(t=>{var{photos:e}=t;return e&&e.filter((t=>t&&t.photoSizes)).map((t=>t))})(t),o=(t=>{var{thumbnail:e}=t;return e&&e.photoSizes&&e})(t);e&&u((t=>t.concat(0===t.length&&o?[o]:[],e.filter((t=>!o||t.id!==o.id)))))}}),[d,f]);var p=l((()=>{!f&&s+c<(n.current||0)&&h(s+c)}),[f,s,c]);return{loading:f,photos:a,totalPhotoCount:n.current||0,loadMore:p}};return[()=>{g=m,w=n(((t,e)=>{var n=t.content,l=t.totalContentCount||n.length,a=function(t){var[e,n]=o(null),[l,a]=o(null),[i,r]=o(null),u=o=>{if(null===i||null===l||null===e)n(null),a(null);else if(e&&l){var r=e-l;i&&i<=Math.abs(r)&&(n(null),a(null),r>0?t.onRightSwipe(o):t.onLeftSwipe(o))}};return{onTouchStart:t=>{if(t&&t.currentTarget&&t.touches&&1===t.touches.length){var e=.1*t.currentTarget.clientWidth,o=t.touches[0].pageX-t.currentTarget.offsetLeft;r(e),n(o),a(null)}},onTouchMove:t=>{if(t&&t.currentTarget&&t.touches&&1===t.touches.length&&null!==i&&null!==e&&(a(t.touches[0].pageX-t.currentTarget.offsetLeft),e&&l&&i)){var o=e-l;i<=Math.abs(o)&&u(t)}},onTouchEnd:u}}({onLeftSwipe:t.onPrevious,onRightSwipe:t.onNext}),i={width:t.width,height:t.height};return c("ul",{...a,className:"_Q",style:i,ref:e,children:[n.map(((e,o)=>e&&h("li",{className:s("tTMpR _Q t s l _U Y",t.displayIndex===o?"xJMwU":null),children:e},o.toString()))),t.isPreviousAllowed?h(g,{isRight:!1,onClick:t.onPrevious,size:t.navArrowSize}):null,t.isNextAllowed?h(g,{isRight:!0,onClick:t.onNext,size:t.navArrowSize}):null,t.hideIndicatorDots?null:h(u,{numDots:Math.min(5,l),numItems:l,currentIndex:t.displayIndex})]})})),t({default:_,usePhotoProvider:S})},[t=>(o=t.useState,n=t.forwardRef,l=t.useCallback,a=t.useMemo,i=t.useRef,r=t.useEffect),t=>u=t.default,t=>s=t.default,t=>(h=t.jsx,c=t.jsxs),t=>d=t.useGARecorder,t=>f=t.default,t=>p=t.ResponsiveImage,t=>v=t.useQuery]]},["1o4yt4","yk7it8","fkji80","121h32","32pwc7","18vod4","76j3t0","1mqwhq"]]);

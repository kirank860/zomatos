(this.$WP=this.$WP||[]).push(["shk8zi",(t,e)=>{"use strict";var l,o,r,s,a,d=({items:t,selectedIndex:e,onSwipe:d,carouselHeight:i,cardWidth:n,state:c="expanded",noSlideShadow:u,showScrollButtons:h,lowerScrollButton:p,scrollButtonVariant:w})=>{var S=s(),m=(t=>{switch(t){case"hidden":return 0;case"collapsed":return 45;default:return 100}})(c),x=l((t=>{S({module:"map_card",action:"swipe"}),d&&d(t)}),[S,d]),B=o((()=>t.map(((t,e)=>a("div",{style:{width:`${n}px`},children:t},`card_${e}`)))),[t,n]);return t.length?a("div",{style:{position:"absolute",top:"calc(100% - 26px)",width:"100%"},children:a("div",{style:{position:"absolute",height:`${i}px`,width:"100%",transform:`translateY(-${m}%)`},children:a(r,{itemSpacing:8,items:B,onSlide:x,startIndex:e,noSlideShadow:u,showScrollButtons:h,lowerScrollButton:p,scrollButtonVariant:w})})}):null};return[()=>{d.defaultProps={carouselHeight:150,cardWidth:310,state:"expanded"},t("default",d)},[t=>(l=t.useCallback,o=t.useMemo),t=>r=t.default,t=>s=t.useGARecorder,t=>a=t.jsx]]},["1o4yt4","138pxm","32pwc7","121h32"]]);
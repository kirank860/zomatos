(this.$WP=this.$WP||[]).push(["1dpzon",(t,e)=>{"use strict";var i,a,r,l,o,n,s,c,d=({type:t="location",id:e,tripId:d,allowPopStatModal:p,size:u,variant:v,position:_="static",dataAttributes:b,onClick:m,onSaveComplete:h=(()=>{}),onUnsaveComplete:C=(()=>{}),flowOrigin:f})=>{var{localize:w}=r(),z=i((()=>({type:t,id:e})),[t,e]),S=a((t=>t?h():C()),[h,C]);return c(s,{saveObject:z,tripId:d,allowPopStatModal:p,onComplete:S,flowOrigin:f,children:(t,e,i)=>{var a=c(l,{size:u,variant:v,icon:e?o:n,"aria-label":e?w.string("trip_detail_remove_from_trip"):w.string("trips_save_to_a_trip"),disabled:i,dataAttributes:b,onClick:e=>{null==m||m(e),t()}});return"card-corner"===_?c("div",{className:"qijCB _Q",children:a}):"map-corner"===_?c("div",{className:"apbVu _Q",children:a}):a}})};return[()=>{t("default",d)},[t=>(i=t.useMemo,a=t.useCallback),t=>r=t.useLocalize,t=>(l=t.CircularButton,o=t.HeartFillIconSelected),t=>n=t.default,t=>s=t.QueriedTripFlowSelector,t=>c=t.jsx]]},["1o4yt4","17thqz","jppfwt","1l75rc","9rb8bq","121h32"]]);
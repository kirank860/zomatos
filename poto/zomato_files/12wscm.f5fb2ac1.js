(this.$WP=this.$WP||[]).push(["12wscm",(e,a)=>{"use strict";var r,l,t,i,d,n,s,o,u,c,_,p,m,T,h,v,C="_c",k=({trip:e,messageType:a,onCtaClick:d})=>{var n,s=r.useCallback((()=>{var a,r;d&&d(),null!=(a=e.route)&&a.url&&(window.location.href=null==(r=e.route)?void 0:r.url)}),[d,e]),o=p("div",{onClick:s,children:p(l,{id:"stat_modal_view_trip_v2"})});switch(a){case"CREATED":n=p(t,{id:"create_trip_success_toast_with_bold",args:{TripName:c((null==e?void 0:e.title)||"")}});break;case"SAVED":n=p(t,{id:"stat_modal_saved_to_tripname_with_bold",args:{TripName:c((null==e?void 0:e.title)||"")}});break;default:n=null}return p(i,{cta:o,children:p(_,{element:"savedToast",trip:e,children:p("span",{className:C,children:n})})})},b="bCZgg",y=({trip:e,onUndo:a})=>{var r;return p(i,{cta:p("div",{onClick:a,children:p(l,{id:"stat_modal_undo"})}),children:p(_,{element:"unsaveToast",trip:e,children:p("span",{className:C,children:p(t,{id:"stat_modal_removed_from_tripname_with_bold_v3",args:{TripName:c(null==e?void 0:e.title),TripLink:(null==(r=e.route)?void 0:r.url)||"",TripClass:b}})})})})},I=({trip:e,hideCta:a,onCtaClick:d})=>{var n,s=r.useCallback((()=>{d()}),[d]);return p(i,{cta:a?null:p("div",{onClick:s,children:p(l,{id:"stat_modal_change"})}),children:p(_,{element:"savedToast",trip:e,children:p("span",{className:C,children:p(t,{id:"stat_modal_saved_to_tripname_with_bold_v3",args:{TripName:c(null==e?void 0:e.title),TripLink:(null==(n=e.route)?void 0:n.url)||"",TripClass:b}})})})})},g=({onUndo:e})=>p(i,{cta:p("div",{onClick:e,children:p(l,{id:"stat_modal_undo"})}),children:p(l,{id:"stat_modal_removed_from_tripname",args:{sTripName:p(l,{id:"m1_trips_my_saves_header"})}})}),f=()=>{var[e,a]=r.useContext(d),[,t]=n(s),c=r.useCallback(((e,a)=>t({tripId:e,referenceId:`${a.id}`,referenceType:a.type,allowDuplicates:!1}).then((e=>{var a,r,l,t,i,d,n,s=null==e||null==(a=e.data)?void 0:a.addItemToTrip,o=null==e||null==(r=e.data)||null==(l=r.addItemToTrip)?void 0:l.trip,u=null==e||null==(t=e.data)||null==(i=t.addItemToTrip)||null==(d=i.errors)||null==(n=d[0])?void 0:n.error;return{trip:o,error:s?null:{query:"ADD_ITEM_TO_TRIP",tripsError:u||void 0}}})).catch((()=>({trip:null,error:{query:"ADD_ITEM_TO_TRIP"}})))),[t]),_=r.useCallback(((a,r,l)=>{e({node:p(m,{trip:a,messageType:r,onCtaClick:l})})}),[e]),C=r.useCallback(((a,r,l)=>{e({node:p(T,{trip:a,onUndo:()=>{c(a.id,r).then((e=>{l&&l(e.trip,e.error)}))}})})}),[c,e]),k=r.useCallback(((r,l,t,i=8e3)=>{e({node:p(h,{trip:r,onCtaClick:()=>{l&&l(),a()},hideCta:t}),timeout:i})}),[e,a]),b=r.useCallback((()=>{e({node:p(i,{children:p(l,{id:"m1_trips_save_success_stat_d2"})})})}),[e]),[,y]=n(o),I=r.useCallback((e=>y({id:`${e.id}`,type:e.type}).then((e=>{var a;return{isAdded:!(null==e||null==(a=e.data)||!a.MySaves_addToMySavesSingle)}})).catch((()=>({isAdded:!1})))),[y]),g=r.useCallback(((a,r)=>{e({node:p(v,{onUndo:()=>{I(a).then((e=>{r(e.isAdded)}))}})})}),[e,I]),f=r.useCallback((a=>e({node:p(i,{children:a})})),[e]);return{launchViewTripToast:_,launchRemoveFromTripToast:C,launchAutoSavedToTripToast:k,launchAddItemToMySavesToast:b,launchRemoveItemFromMySavesToast:g,launchErrorTripToast:r.useCallback((a=>{var r=p(i,{children:p(u,{query:a.query,error:a.tripsError})});e({node:r})}),[e]),launchToastMessage:f}};return[()=>{m=k,T=y,h=I,v=g,e("default",f)},[e=>r=e,e=>(l=e.default,t=e.UnsafeLocalize),e=>(i=e.ToastItem,d=e.Toast),e=>n=e.useMutation,e=>(s=e.AddItemToTrip,o=e.AddItemToMySaves),e=>u=e.default,e=>c=e.escapeHtml,e=>_=e.TripsImpression,e=>p=e.jsx]]},["1o4yt4","17thqz","tr3542","1mqwhq","ag9b0s","mc5s4b","irfizf","665v5s","121h32"]]);
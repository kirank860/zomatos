(this.$WP=this.$WP||[]).push(["1uw9rn",(e,r)=>{"use strict";var t,l,u,n,i,a,d,s,o,T,I,v,p,c,h,f=e=>{var[,r]=o(a),[t,d]=l({fetching:!1}),s=I("SAVE_TO_TRIP"),v=u(!0),p=n((e=>{v.current&&d(e)}),[]);return i((()=>()=>{v.current=!1}),[]),e?[t,t=>(p({fetching:!0}),r({tripId:t,referenceId:`${e.id}`,referenceType:e.type,allowDuplicates:!1}).then((r=>{var t,l,u,n,i,a,d=null==r||null==(t=r.data)||null==(l=t.addItemToTrip)?void 0:l.trip,o=null==r||null==(u=r.data)||null==(n=u.addItemToTrip)||null==(i=n.errors)||null==(a=i[0])?void 0:a.error;if(d){var I=T(d,e);I?(s(),p({fetching:!1,result:{trip:d,tripItem:I}})):"bundleSave"===e.type?p({fetching:!1,result:{trip:d,tripItem:{__typename:"TripItem",id:0,comments:[]}}}):p({fetching:!1,error:{query:"ADD_ITEM_TO_TRIP",tripsError:null!=o?o:void 0}})}else p({fetching:!1,error:{query:"ADD_ITEM_TO_TRIP",tripsError:null!=o?o:void 0}});return[d,o]})).catch((e=>(console.error(e),p({fetching:!1,error:{query:"ADD_ITEM_TO_TRIP"}}),[null,null]))))]:[t,()=>Promise.resolve([null,null])]},m="mostRecentlyAddedToTrip",_=(e,r,t,l)=>{var[u,i]=c(r),a=p();return[u,n((()=>{var u=null!=e?e:(e=>{var r=v.get(m);return r&&r.userId===e?r.tripId:null})(a);return t||!u||null!=(null==r?void 0:r.type)&&h.has(r.type)?(l&&l(),Promise.resolve([null,null])):i(u)}),[t,r,l,i,a,e]),e=>((e,r)=>{r?v.set(m,{tripId:e,userId:r},144e5):v.remove(m)})(e,a)]},g=(e,r,l)=>{var[u,n]=t.useState({fetching:!1,saved:!!l}),[,i]=o(d),[,a]=o(s);return[u,l?()=>l?(n({...u,fetching:!0}),a({itemId:l.id,tripId:r}).then((e=>{var r,t=null==e||null==(r=e.data)?void 0:r.tripsRemoveItem;return t?(n({fetching:!1,saved:!1,result:{trip:t}}),u):(n({fetching:!1,saved:!0,error:{query:"REMOVE_TRIP_ITEM",tripsError:void 0}}),u)})).catch((()=>(n({fetching:!1,saved:!0,error:{query:"REMOVE_TRIP_ITEM"}}),u)))):Promise.resolve(u):()=>(n({...u,fetching:!0}),i({tripId:r,referenceId:`${e.id}`,referenceType:e.type,allowDuplicates:!1}).then((e=>{var r,t,l,i,a,d,s,o,T,I=null==e||null==(r=e.data)||null==(t=r.addItemToTrip)?void 0:t.trip,v=null==e||null==(l=e.data)||null==(i=l.addItemToTrip)||null==(a=i.errors)||null==(d=a[0])?void 0:d.error;if(v||!I)return n({fetching:!1,saved:!1,error:{query:"ADD_ITEM_TO_TRIP",tripsError:v||void 0}}),u;var p=null==e||null==(s=e.data)||null==(o=s.addItemToTrip)||null==(T=o.items)?void 0:T[0];return n(p?{fetching:!1,saved:!0,result:{trip:I,tripItem:p}}:{fetching:!1,saved:!1,error:{query:"ADD_ITEM_TO_TRIP"}}),u})).catch((()=>(n({fetching:!1,saved:!1,error:{query:"ADD_ITEM_TO_TRIP"}}),u))))]};return[()=>{c=f,h=new Set(["savesItem","bundleSave"]),e({useAutosave:_,useSave:c,useTripSaveToggle:g})},[e=>(t=e,l=e.useState,u=e.useRef,n=e.useCallback,i=e.useEffect),e=>(a=e.AddItemToTrip,d=e.AddItemWithFullTrip,s=e.RemoveItemWithFullTrip),e=>o=e.useMutation,e=>T=e.getItemByReference,e=>I=e.usePixelCallback,e=>v=e.default,e=>p=e.useUserId]]},["1o4yt4","ag9b0s","1mqwhq","1iyqcw","1emwhd","19b9b1","52far5"]]);
(this.$WP=this.$WP||[]).push(["1wzx6x",(e,t)=>{"use strict";var i,a,n,l,o,r,c,d,s,u,p,h,m,g,f,v,b,k,_,y,I,P,C,T,N,R,w,S,U,x,O,A,E,M,z,D,L,W,j,H,B,q,V,F,K,Y,$,Q=({src:e,entityType:t})=>e?C("div",{className:"bgvkv",style:{backgroundImage:`url(${e})`}}):C(I,{name:P(t),className:"sYYqo _T f X0 X1"}),J=({locationId:e,entityType:t,thumbnail:i})=>{var a=g(e);return 0===a.totalPhotoCount?C(q,{src:i,entityType:t}):C(m,{height:"100%",width:"100%",locationId:e,trackingContext:t,photos:a.photos,totalCount:a.totalPhotoCount,loadMorePhotos:a.loadMore,captureNavEvents:!0})},X=({locationId:e,title:t,detailUrl:i,onDetailUrlClick:a,thumbnail:n,rating:o,numReviews:h=0,entityType:m,subtitle:g,renderThumbnail:I,children:P,hideBookmark:N,hideTail:R,titlePill:w,sponsoredMapPin:S})=>{var{userAgentCategory:U}=b(),x=d(),O=s(),{page:A}=u(),E=v((()=>{x({itemName:"sponsored_pin_card_banner",geoId:e,page:A,team:"TAPS"})})),M=(e,t)=>{a&&a(t),e.stopPropagation()};return T("div",{className:"jWbDp",onClick:()=>{r({module:"pin",action:"pin_card_click",context:m})},"data-map-base-location-popup":"true",children:[T("div",{className:"ZzDnc R4",children:[S&&C("div",{className:"Ugjnx",ref:E,children:T("span",{className:"BAghS _R H2 W7 MB","data-base-location-popup-title":"true",dir:"auto",children:["Featured in"," ",C(l,{target:"_blank",href:S.url,className:"cUNyF Wb",onClick:()=>{O({actionType:"click",team:"TAPS",page:A,itemName:"sponsored_pin_card_banner",geoId:e,customData:JSON.stringify({url:(null==S?void 0:S.url)||""})})},children:S.name})]})}),C(l,{href:i,onClick:e=>M(e,p.PHOTO),target:"_blank",className:"UczFj",children:C(c,{module:"pin",action:"pin_photo_click",context:m,children:C("div",{className:"BfNBd",children:(()=>{if(I){var t=I();if(t)return t}return"MOBILE"===U?C(q,{src:n,entityType:m}):C(J,{locationId:e,entityType:m,thumbnail:n})})()})})}),!N&&C("span",{className:"PTymz",children:C(_,{object:{__typename:"LocationInformation",locationId:e},trackingContext:"Map",children:(e,t)=>C(y,{active:t,bookmarkStyle:"stacked",bookmarkSize:"24",onClick:e})})}),T("div",{className:"WyFQY",children:[T("div",{className:"ihnSL",children:[w,C(l,{href:i,onClick:e=>M(e,p.NAME),target:"_blank",children:C(c,{useSpan:!0,module:"pin",action:"pin_name_click",context:m,children:C("span",{className:"CvoOQ _R H2 W7 MB","data-base-location-popup-title":"true",dir:"auto",children:t})})})]}),h>0?C(l,{href:`${i}#REVIEWS`,onClick:e=>M(e,p.REVIEWS),target:"_blank",children:C(k,{fontSize:14,rating:o/10,numReviews:h})}):null,g&&("string"==typeof g?C("div",{className:"mjNAq H2 q o W",children:g}):g),C("div",{style:{height:"16px"}}),P&&P()]})]}),!R&&C(f,{backgroundColor:"white",borderColor:"rgba(0, 0, 0, 0.2)"})]})},Z=(e,t)=>{r({module:"pin",action:t>0?"pin_photo_carousel_forward":"pin_photo_carousel_back",context:"hotel",value:e})},G=({locationId:e,renderNoPhotosDefault:t})=>{var i=a((()=>e=>C(S,{...e,onNav:Z,renderNoPhotosDefault:t,initialOffset:2,className:"_Z",sizeHint:{tablet:"30vw",desktop:"20vw"}})),[t]);return C(U,{locationId:e,dataStrategy:F,client:x(),renderAlbum:i,albumId:O})},ee={module:"pin",action:"pin_cta_click",context:"hotel"},te={module:"pin",action:"pin_cta_click",context:"hotel_deferred"},ie=()=>C(q,{entityType:"hotel"}),ae=e=>{var t=e.sponsoredListing&&C("div",{className:"BaJbn",children:C(w,{})}),{locationId:i}=e,a=n((()=>C(K,{locationId:i,renderNoPhotosDefault:ie})),[i]);return C(E,{hotelListingRenderer:i=>C(V,{locationId:e.locationId,entityType:"hotel",title:e.title,detailUrl:e.detailUrl,thumbnail:e.thumbnail,rating:e.rating,numReviews:e.numReviews,titlePill:t,onDetailUrlClick:e=>{var t=z(e,h.POPUP);i(t)},renderThumbnail:a,hideTail:e.hideTail,sponsoredMapPin:e.sponsoredMapPin,children:()=>e.offers||e.undatedCommerceRemovalEnabled?C(N,{locationId:e.locationId,offers:e.offers||[],trackingProps:ee,preOfferClick:e.preOfferClick,priceSize:20,disableOptimusPerkTooltip:!0,listingKey:e.listingKey,hotelReviewUrl:e.detailUrl,undatedCommerceRemovalEnabled:e.undatedCommerceRemovalEnabled,onOfferClick:e.onOfferClick}):C(R,{locationId:e.locationId,trackingProps:te,listingKey:e.listingKey})}),customClickHandler:e.onDetailUrlClick,locationId:e.locationId,listingKey:e.listingKey,interactionsParamName:M.HOTEL_MAPS_COMPONENT})},ne=e=>{var t,i,{localize:a}=j();return C(V,{locationId:e.locationId,entityType:"restaurant",title:e.title,detailUrl:e.detailUrl,thumbnail:e.thumbnail,rating:e.rating,numReviews:e.numReviews,subtitle:(t=e.priceString,i=e.cuisines,[t,(i||[]).join(", ")].filter((e=>""!==e)).join(", ")),children:()=>{var t=e.pageDetailId===e.locationId,i=t?void 0:e.detailUrl;return C("div",{className:"w Wi",children:C(o,{target:"_blank",mobileTarget:"_self",href:i,onClick:t?()=>L("restaurant-detail-map").emit("close-trigger-clicked"):e=>e.stopPropagation(),children:C(c,{module:"pin",action:"pin_cta_click",context:"restaurant",children:C(W,{size:"small",children:e.reserveText||a("attractions.cta_more_info")})})})})}})},le={module:"pin",action:"pin_cta_click",context:"vp"},oe=()=>C(q,{entityType:"hotel"}),re=e=>{var t=()=>{r(le)},{locationId:i}=e,a=n((()=>C(K,{locationId:i,renderNoPhotosDefault:oe})),[i]);return C(V,{locationId:e.locationId,entityType:"vp",title:e.title,detailUrl:e.detailUrl,thumbnail:e.thumbnail,rating:e.rating,numReviews:e.numReviews,renderThumbnail:a,children:()=>e.vpoffers?C(H,{displayType:"mapPopup",offer:e.vpoffers[0],onClick:t}):null})},ce=()=>{r({module:"VR_RESPONSIVE_SRP_MAP",action:"info_window_open"})},de=({rentalId:e,photoResponse:t})=>{var i=a((()=>t&&t.map(((t,i)=>((e,t)=>({id:t,photoSizes:[{url:e.jumboUrl,width:e.largestWidth,height:e.largestHeight},{url:e.largeUrl,width:e.stdWidth,height:e.stdHeight},{url:e.thumbnailUrl,width:e.thumbWidth,height:e.thumbHeight}]}))(t,((e,t)=>1e3*e+t)(e,i))))),[e,t]);return C(m,{height:"100%",width:"100%",photos:i,totalCount:i.length,locationId:e,trackingContext:"rental",captureNavEvents:!0})},se=e=>C(V,{locationId:e.locationId,entityType:"rental",title:e.title,detailUrl:e.detailUrl,thumbnail:e.thumbnail,rating:e.rating,numReviews:e.numReviews,renderThumbnail:()=>{return t=e.locationId,C(B,{rentalId:t,children:(e,i)=>e||!i.length?C(q,{src:void 0,entityType:"rental"}):C(de,{rentalId:t,loading:e,photoResponse:i})});var t},onDetailUrlClick:ce});return[()=>{Q.defaultProps={src:void 0},q=Q,V=i(X),F=A(!1),K=G,ae.defaultProps={offers:null,popIndexText:null,sponsorship:null},Y=ae,ne.defaultProps={reserveText:null,priceString:"",cuisines:[]},$=D(((e,t)=>({...t,pageDetailId:e.page.detailId})))(ne),e({BaseLocationPopup:V,HotelPopup:Y,RentalPopup:se,RestaurantPopup:$,VpPopUp:re})},[e=>(i=e.memo,a=e.useMemo,n=e.useCallback),e=>(l=e.Link,o=e.ResponsiveTargetLink),e=>(r=e.default,c=e.ClickTracker),e=>d=e.default,e=>s=e.default,e=>u=e.useRoute,e=>(p=e.CLICK_SOURCES,h=e.MAP_LISTING_TYPES),e=>(m=e.default,g=e.usePhotoProvider),e=>f=e.default,e=>v=e.useOnVisible,e=>b=e.useUserAgent,e=>k=e.BubbleRatingWithReviewCount,e=>_=e.QueriedTripFlowSelector,e=>y=e.BookmarkIcon,e=>I=e.Icon,e=>P=e.iconForEntityType,e=>(C=e.jsx,T=e.jsxs),e=>(N=e.HotelOffer,R=e.DeferredHotelOffer),e=>w=e.default,e=>S=e.AlbumCarousel,e=>U=e.VanillaClientSideMediaAlbumContainer,e=>x=e.getMapsClientName,e=>O=e.ALL_PHOTOS_ALBUM_ID,e=>A=e.getAllPhotosAlbumDataStrategy,e=>(E=e.default,M=e.INTERACTIONS_PARAM_NAMES,z=e.getSourceElemForMapClick),e=>D=e.connect,e=>L=e.createRadio,e=>W=e.default,e=>j=e.useLocalize,e=>H=e.VpOffer,e=>B=e.PhotoDataProvider]]},["1o4yt4","bvvaww","4axon3","xg719z","1r73jw","fgwvq1","14s11l","1nj5fm","1ifcuf","13btuy","1nnprh","k3tmpy","9rb8bq","1hfpjv","1ybxsm","adx92b","121h32","1ura2h","gmgko3","1mhdyo","1t73tm","13w1vr","14ecb7","k5n2qt","itms4k","12mj4n","1bqgab","4nzso8","17thqz","12z6i3","189zkc"]]);

(this.$WP=this.$WP||[]).push(["r9zz7r",(e,t)=>{"use strict";var a,o,r,i,l,n,s,c,d,u,p,f,m,h=({specialOffers:e,fetching:t,error:a,onClose:o,onDisplay:r,lightboxType:i})=>{var l,n;if(a)return null;var s=[];e.forEach((e=>{return s.push({id:e.specialOfferId?e.specialOfferId:void 0,title:e.headline,description:e.description,code:null!=e&&e.couponCode?e.couponCode:void 0,validDays:(t=e.days,a=[],t.forEach((e=>{a.push(e.toUpperCase())})),a),startDate:e.startDate?e.startDate:void 0,endDate:e.endDate?e.endDate:void 0,redemptionUrl:e.url?e.url:void 0,redemptionPhoneNumber:e.phone?e.phone:void 0});var t,a}));var c=[];return null==e||null==(l=e[0])||null==(n=l.images)||n.forEach((e=>{c.push({url:e.url,width:e.width,height:e.height})})),p(u,{fetching:t,specialOfferList:s,onClose:o||(()=>{}),imageSource:c,onDisplay:r,mode:"NORMAL",lightboxType:i})},v=(e,t)=>e&&e[t.toString()]?"sp":"ba",g=e=>{var{specialOfferId:t,servletName:s,onClose:u,lightboxType:m}=e,{page:h,path:g,params:y}=c(),I=d(),b=r()||-1,C=l(),O={locationId:b,servletName:s,hotelTravelInfo:"restaurant"===m?null:C,trafficSource:v(e.lineItemsByLoc,b),isMobile:e.isMobile,commerceCountryId:e.commerceCountryId||-1,specialOfferId:t||-1};a((()=>{n({module:"SpecialOffer",action:"click",value:1,context:s})}),[s]);var D=o(((e,t)=>{I({itemName:"so_b2c_impression_popup",team:"Restaurants",locationId:b||"locationId"in y&&y.locationId||-1,page:h,customData:JSON.stringify({url:g,specialOfferId:t,mode:e})})}),[I,b,h,y,g]);return p(i,{...O,children:(e,t,a)=>p(f,{specialOffers:t,fetching:e,error:!!a,onClose:u,onDisplay:"restaurant"===m?D:()=>{},lightboxType:m})})};return[()=>{f=h,m=s((e=>({isMobile:"MOBILE"===e.meta.device.viewportCategory,servletName:e.meta.initialServletName||"",commerceCountryId:e.meta.commerceCountryId,lineItemsByLoc:e.meta.lineItemsByLoc})))(g),e("default",m)},[e=>(a=e.useEffect,o=e.useCallback),e=>r=e.useLocationDetail,e=>i=e.default,e=>l=e.default,e=>n=e.default,e=>s=e.connect,e=>c=e.useRoute,e=>d=e.default,e=>u=e.SpecialOfferCardModal,e=>p=e.jsx]]},["1o4yt4","bvvaww","1inugb","1crdfj","4axon3","12mj4n","fgwvq1","xg719z","1bttvi","121h32"]]);

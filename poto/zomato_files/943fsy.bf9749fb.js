(this.$WP=this.$WP||[]).push(["943fsy",(e,n)=>{"use strict";var i,t,l,a,r,c,s,o,u,k,d,m,g,v,p,_,b,I,h,f,w="kPfjg Fd",C="hqTWt Fd",L="GPxft",R="NdzeI",U={__key:0xfea4ff6b5e18,id:"fea4ff6b5e184ba10771b9389ebf06b2",loc:{},definitions:[]},x=e=>{var{localize:n}=s(),l=m(),{logInteraction:u,logImpression:g}=d(),[v,p]=i(!1),{writeUserReviewUrl:_}=k();t((()=>{v&&g("POI_WRITE_REVIEW_HEADER",!0)}),[v,g]);var f=o(),C=r(),L="detailId"in C.params?C.params.detailId:"";return"MOBILE"!==e.viewportCategory?null:b(a,{query:U,variables:{ids:[`TA-${L}`],locale:f.replace(/-/g,"_")},children:({data:i})=>{var t,a,r,s,o,k=((null==i||null==(t=i.searchRestaurantsByIds)?void 0:t.restaurants)||[])[0],d={};if(null!=k&&null!=(a=k.menu)&&a.hasProvider)d.menuLink=b(y,{icon:"menu",linkText:n.string("restaurants_contact_links_menu"),onClick:()=>{c("restaurant-detail-menu").emit("open-menu-clicked"),l({Restaurants:{covertablemetricMenuClick:e.trackingAttributes}})},action:"menu_click"});else if(null!=k&&null!=(r=k.menu)&&r.menuUrl){var m;d.menuLink=b("div",{onClick:()=>{l({Restaurants:{covertablemetricMenuClick:e.trackingAttributes}})},children:b(A,{icon:"menu",linkText:n.string("restaurants_contact_links_menu"),linkUrl:null==k||null==(m=k.menu)?void 0:m.menuUrl,action:"menu_click"})})}return null!=k&&null!=(s=k.ta_location)&&null!=(o=s.localizedStreetAddress)&&o.fullAddress&&(d.mapLink=b(y,{icon:"map-pin-fill",linkText:n.string("restaurants_contact_links_map"),onClick:()=>{c("restaurant-detail-map").emit("open-trigger-clicked"),l({Restaurants:{covertablemetricMapClick:e.trackingAttributes}})},action:"map_click_quicklink"})),null!=k&&k.telephone&&(d.callLink=b(y,{icon:"phone",linkUrl:`tel:${k.telephone}`,linkText:n.string("restaurants_contact_links_call"),action:"call_click",onClick:()=>{l({Restaurants:{covertablemetricCallClick:e.trackingAttributes}})}})),null!=k&&k.url&&(d.websiteLink=b("div",{onClick:()=>{l({Restaurants:{covertablemetricWebsiteClick:e.trackingAttributes}})},children:b(A,{icon:"laptop",linkText:n.string("restaurants_contact_links_website"),linkUrl:null==k?void 0:k.url,action:"website_click"})})),_&&(d.reviewLink=b(y,{icon:"pencil",linkText:n.string("review_dropdown_label"),linkUrl:_,onClick:()=>u("POI_WRITE_REVIEW_HEADER"),action:"menu_click"})),Object.keys(d).length>=2?(p(!0),d.websiteLink?I("div",{className:w,children:[d.callLink,Object.keys(d).length>4?d.reviewLink:d.mapLink,d.menuLink,d.websiteLink,Object.keys(d).length<=4&&d.reviewLink]}):I("div",{className:w,children:[d.callLink,d.menuLink,d.mapLink,d.reviewLink]})):b(h,{})}})},y=e=>b(p,{action:e.action,children:I("a",{href:e.linkUrl,onClick:e.onClick,className:C,target:e.target,children:[b(_,{className:L,name:e.icon}),b("div",{className:R,children:e.linkText})]})}),A=e=>e.linkUrl&&b(p,{action:e.action,children:I(u,{encodedUrl:e.linkUrl,useSpan:!1,className:C,target:"_blank",children:[b(_,{className:L,name:e.icon}),I("div",{className:R,children:[e.linkText,b(_,{name:"external-link-no-box"})]})]})})||null;return[()=>{y.defaultProps={linkUrl:null,target:"",onClick:null},f=l((e=>({viewportCategory:e.meta.device.viewportCategory,trackingAttributes:{locationId:e.page.detailId||0,servletName:e.meta.initialServletName||"",sessionId:e.tracking.sessionId||"",lastReferrer:e.meta.referrerUrl||"",userId:e.auth.loggedInUserId||"",userAgent:"undefined"==typeof navigator?"node-render":navigator.userAgent,pageviewId:e.tracking.uid||"",impressionId:g()||"",geoId:e.page.geoId||0,fromAd:v(e.page.detailId||0)}})))(x),e({ContactLinks:x,default:f})},[e=>(i=e.useState,t=e.useEffect),e=>l=e.connect,e=>a=e.Query,e=>r=e.useRoute,e=>c=e.createRadio,e=>(s=e.useLocalize,o=e.useLocale),e=>u=e.default,e=>k=e.useContextualUserReviewUrl,e=>d=e.useUserReviewTracking,e=>m=e.useInteractionLogger,e=>(g=e.RestaurantImpressionIdFromSessionStorage,v=e.IsFromSponsoredClick,p=e.RDetailClickTracker),e=>_=e.Icon,e=>(b=e.jsx,I=e.jsxs,h=e.Fragment)]]},["1o4yt4","12mj4n","1mqwhq","fgwvq1","1bqgab","17thqz","ay1l3c","o8gqrw","1tbrqz","32pwc7","1ezmx4","1ybxsm","121h32"]]);
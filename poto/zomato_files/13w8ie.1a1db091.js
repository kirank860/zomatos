(this.$WP=this.$WP||[]).push(["13w8ie",(e,t)=>{"use strict";var n,a,s,i,r,o,l,d,p="ta_planning_tool_site_demand_test_1669908661",u={CONTROL:"Control_No Demand Test",TIME_SAVINGS:"Time_Savings",SIMPLE_REWARD:"Simple_Reward",SIMPLE:"Simple",PERSONALIZATION:"Personalization"},m="planningToolDemandTest.footerAd.hasBeenDisplayed",c="planningToolDemandTest.footerAd.hasBeenClosed",_="planningToolDemandTest.modalAd.hasBeenDisplayed",g=e=>{var[t,n]=a(!0),[i,o]=a(!1);return s((()=>{n(!1);var t="modal"===e?r.get(_):r.get(c);o(!!t)}),[e]),{fetching:t,dismissed:i}},E=e=>{switch(e){case u.SIMPLE:return"demand_test_planning_tool_simple";case u.SIMPLE_REWARD:return"demand_test_planning_tool_reward";case u.TIME_SAVINGS:return"demand_test_planning_tool_time_savings";case u.PERSONALIZATION:return"demand_test_planning_tool_personalization";default:return}},h=({skipImpression:e,placement:t}={skipImpression:!1})=>{var u=n(),c=(({skipImpression:e}={skipImpression:!1})=>{var t=n(),a="Tourism"===t.page||"ShowForum"===t.page||"ShowTopic"===t.page||"Restaurants"===t.page||"AttractionsFusion"===t.page||"AttractionProductsFusion"===t.page?t.params.geoId:void 0,s=!d.has(t.page),i=o({experimentKeys:[p],skipImpression:e},s),r=s?null:null==i?void 0:i[p];return{variant:r,enabled:!s&&!!r,fetching:!s&&null==i,geoId:a}})({skipImpression:e}),_=(({skipImpression:e,placement:t}={skipImpression:!1})=>{var d,[u,c]=a(!1),_=n(),g=l(),E="Hotels"===_.page,h=i(g),I=!(null==h||null==(d=h.current.hotels)||!d.defaultDates),T=E?_.params.geoId:void 0,S=(e=>{var{checkInDate:t,checkOutDate:n,adults:a}=e.hotels||{};return!!(a&&t&&n)&&Math.floor((n.getTime()-t.getTime())/864e5)>=4})(g),A=!E||"modal"===t&&!S||"modal"!==t&&!S&&!u||I,v=o({experimentKeys:[p],skipImpression:e},A),f=A?null:null==v?void 0:v[p],b=!A&&!!f,D=!A&&null==v;return s((()=>{u||c(r.get(m))}),[u]),s((()=>{b&&!u&&c(!0)}),[b,u]),{variant:f,enabled:b,fetching:D,geoId:T}})({skipImpression:e,placement:t}),h=g("modal"),I=g("footer"),T=(()=>{var[e,t]=a(!0),[n,i]=a(!1);return s((()=>{t(!1);var e=r.get("recoEvergreenPromo.interstitial.hasBeenDisplayed");i(!!e)}),[]),{fetching:e,recoInterstitialWasDisplayed:n}})(),S=_.fetching||c.fetching||h.fetching||I.fetching||T.fetching,A=(e=>{switch(e){case"Home":return"homepage";case"Tourism":return"tourism";case"ShowForum":return"showforum";case"ShowTopic":return"showtopic";case"Hotels":return"hotels";default:return e}})(u.page),v=_.enabled?_:c,f=v.enabled&&!h.dismissed&&!T.recoInterstitialWasDisplayed,b=v.enabled&&!I.dismissed&&!T.recoInterstitialWasDisplayed,D=(e=>{switch(e){case"Simple_Reward":return"https://tripadvisor.jebbit.com/tadsq6qc?L=Owned+Web&JC=Reward";case"Personalization":return"https://tripadvisor.jebbit.com/tadsq6qc?L=Owned+Web&JC=Personal";case"Time_Savings":return"https://tripadvisor.jebbit.com/tadsq6qc?L=Owned+Web&JC=Time";default:return"https://tripadvisor.jebbit.com/tadsq6qc?L=Owned+Web&JC=Simple"}})(v.variant);return{fetching:S,medium:A,isModalEnabled:f,isFooterEnabled:b,isHotelsExperiment:_.enabled,isGenericExperiment:c.enabled,variant:v.variant,trackingVariant:v.variant?E(v.variant):void 0,geoId:v.geoId,quizUrl:D}},I=()=>{var{fetching:e,isModalEnabled:t,isFooterEnabled:n}=h({skipImpression:!0});return{enabled:t||n,fetching:e}};return[()=>{d=new Set(["Tourism","Home","ShowForum","ShowTopic","Restaurants","AttractionsFusion","AttractionProductsFusion","Articles","ArticlesHome"]),e({EXPERIMENT_VARIANTS:u,FOOTER_HAS_BEEN_CLOSED_STORAGE_KEY:c,FOOTER_HAS_BEEN_DISPLAYED_STORAGE_KEY:m,MODAL_HAS_BEEN_DISPLAYED_STORAGE_KEY:_,PLANNING_TOOL_INTERSTITIAL_HAS_BEEN_DISPLAYED_STORAGE_KEY:"planningTool.interstitial.hasBeenDisplayed",useDemandTest:h,usePlanningToolBannerGuard:I})},[e=>n=e.useRoute,e=>(a=e.useState,s=e.useEffect,i=e.useRef),e=>r=e.default,e=>o=e.default,e=>l=e.useTravelInfo]]},["fgwvq1","1o4yt4","19b9b1","gugp1d","1etaac"]]);

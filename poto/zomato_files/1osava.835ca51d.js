(this.$WP=this.$WP||[]).push(["1osava",(e,r)=>{"use strict";var a,n,i,o,t,s,l,u,d,c="nvt_reco_acq_evergreen_1671223501",p="nvt_reco_acq_evergreen_tourism_1671632286",m="nvt_reco_acq_evergreen_home_1671224434",g={CONTROL:"Control_No Ads",V1:"Creative_V1",V2:"Creative_V2"},v="recoEvergreenPromo.footerAd.hasBeenClosed",I="recoEvergreenPromo.modalAd.hasBeenDisplayed",_=e=>{var[r,a]=n(!0),[o,s]=n(!1);return i((()=>{a(!1);var r="modal"===e?t.get(I):t.get(v);s(!!r)}),[e]),{fetching:r,dismissed:o}},E={__key:0xdb0f1df04566,id:"db0f1df04566c5a6f1f0c773c4ab2a6c",loc:{},definitions:[]},f=({skipImpression:e}={skipImpression:!1})=>{var r=a(),g="Tourism"===r.page?r.params.geoId:void 0,v=(({skipImpression:e}={skipImpression:!1})=>{var{countryGeoId:r,fetching:n}=((e=!1)=>{var r=a(),n="Tourism"===r.page?r.params.geoId:null,[{data:i,fetching:o}]=l({query:E,variables:{locationId:null!=n?n:0},pause:!n||e}),[t]=(null==i?void 0:i.locations)||[];return{fetching:o,countryGeoId:Number(null==t?void 0:t.countryId)}})(),{experimentKeys:i,skipServiceCalls:o,pageExperimentKey:t}=(({countryGeoId:e,fetching:r})=>{var n=a(),i="Tourism"===n.page?n.params.geoId:void 0;switch(n.page){case"Home":return{pageExperimentKey:m,experimentKeys:[c,m],skipServiceCalls:!1};case"Tourism":return{pageExperimentKey:p,experimentKeys:[c,p],skipServiceCalls:r||191===e||191===i||!!u.get(Number(i))};default:return{experimentKeys:[],skipServiceCalls:!0}}})({countryGeoId:r,fetching:n}),g=s({experimentKeys:i,skipImpression:e},o),v=o?null:null==g?void 0:g[c],I=o?null:null==g?void 0:g[t||""],_=!o&&!!I&&"Control_No Ads"!==I&&"Evergreen_On"===v,{featuredGeoId:f,fetching:h}=((e=!1)=>{var r,n=a(),i="Tourism"===n.page?n.params.geoId:void 0,[{data:o,fetching:t}]=l({query:E,variables:{locationId:null!=i?i:0},pause:void 0===i||e}),[s]=(null==o?void 0:o.locations)||[],u=i&&i===(null==s?void 0:s.locationId)?((e,r,a,n)=>d.get(Number(e))?Number(e):d.get(Number(a))?Number(a):d.get(Number(n))?Number(n):0===Number(r)&&1===Number(n)?null!=e?e:0:null!=r?r:0)(i,null==s?void 0:s.countryId,null==s?void 0:s.parentGeoId,null==s||null==(r=s.parent)?void 0:r.parentGeoId):void 0;return{fetching:t,featuredGeoId:u}})(!_);return{variant:I,enabled:_,fetching:!o&&null==g||n||h,featuredGeoId:f}})({skipImpression:e}),I=v,f=_("modal"),h=_("footer"),y=(()=>{var[e,r]=n(!0),[a,s]=n(!1);return i((()=>{r(!1);var e=t.get("planningTool.interstitial.hasBeenDisplayed");o((()=>{s(!!e)}))}),[]),{fetching:e,planningToolInterstitialWasDisplayed:a}})(),b=v.fetching||f.fetching||h.fetching||y.fetching,S=(e=>{switch(e){case"Home":return"homepage";case"Tourism":return"tourism";default:return e}})(r.page),T=I.enabled&&!f.dismissed&&!y.planningToolInterstitialWasDisplayed,A=I.enabled&&!h.dismissed&&!y.planningToolInterstitialWasDisplayed;return{fetching:b,variant:I.variant||null,geoId:g,medium:S,isModalEnabled:T,isFooterEnabled:A,isGenericExperiment:v.enabled,featuredGeoId:v.featuredGeoId}},h=()=>{var{fetching:e,isModalEnabled:r,isFooterEnabled:a}=f({skipImpression:!0});return{enabled:r||a,fetching:e}};return[()=>{u=new Map([[147270,"Cuba"],[294010,"Syria"],[293834,"Sudan"],[293998,"Iran"],[293770,"Burundi"],[294e3,"Iraq"],[293959,"Pakistan"],[659499,"Afghanistan"],[294014,"Yemen"],[294439,"Somalia"],[294443,"North Korea"],[2201790,"South Sudan"],[294478,"Managua"],[293937,"Brunei"],[294324,"Venezuela"],[293977,"Israel"],[294473,"Ukraine"],[294459,"Russia"],[294447,"Belarus"],[313972,"Crimea"],[34481,"Captiva Island"],[34616,"Sanibel Island"],[34231,"Fort Myers Beach"],[34420,"Marco Island"],[34603,"Saint James City"],[34089,"Bokeelia"],[7087858,"Cayo Costa"],[34087,"Boca Grande"],[32999,"Sacramento County"],[294311,"Peru"]]),d=new Map([[28932,"Hawaii"]]),e({FOOTER_HAS_BEEN_CLOSED_STORAGE_KEY:v,FOOTER_HAS_BEEN_DISPLAYED_STORAGE_KEY:"recoEvergreenPromo.footerAd.hasBeenDisplayed",MODAL_HAS_BEEN_DISPLAYED_STORAGE_KEY:I,PAGE_EXPERIMENT_VARIANTS:g,RECO_INTERSTITIAL_HAS_BEEN_DISPLAYED_STORAGE_KEY:"recoEvergreenPromo.interstitial.hasBeenDisplayed",useEvergreenPromo:f,useRecoBannerGuard:h})},[e=>a=e.useRoute,e=>(n=e.useState,i=e.useEffect,o=e.startTransition),e=>t=e.default,e=>s=e.default,e=>l=e.useQuery]]},["fgwvq1","1o4yt4","19b9b1","gugp1d","1mqwhq"]]);
(this.$WP=this.$WP||[]).push(["24j2l1",(e,t)=>{"use strict";var n,r,i,a,l,o,s,u,g,c,h,d,p,f,E={__key:0xfa6962903a02,id:"fa6962903a02eb6881badb16e2eee1d3",loc:{},definitions:[]},m=(e,t,a)=>{var[{data:l,fetching:o}]=n({query:E,variables:{geoId:e,dataVersion:t},pause:a||!e});return{fetching:o,data:i((()=>{var e,t,n=null==l||null==(e=l.PlusCuration_getGeoEntrypointData)||null==(t=e.filter(Boolean))?void 0:t.at(0);if(n){var i,{geoId:a,geoLocation:o,entrypointImage:s}=n,u=null==o||null==(i=o.names)?void 0:i.name;return a&&u?{geoId:a,name:u,entrypointImage:r(s)}:null}return null}),[l])}},y=(e,t)=>{var n,{logImpression:r=!1,treatControlAsNull:i=!0}=e,{bucket:l,fetching:o}=a({experiment:"plus_phase_4_entry_points_1662590205",logImpression:r,treatControlAsNull:i},t);return{fetching:o,bucket:(n=l,null===n?null:"control"===n||"test"===n?n:(console.error(`Got unexpected abtest result for phase 4 entrypoint experiment: ${n}`),null))}},b=e=>{var{fetching:t,bucket:n}=c({treatControlAsNull:!1},"PHASE4"!==e),r=l(),{fetching:i,data:a}=m(r,e,null===n);return{fetching:i||t,isEligible:!(null==a||!a.geoId)}},v=()=>{var{fetching:e,isEligible:t}=b("PHASE4");return{fetching:e,isEligible:t}},I=(e,t=!1)=>{var n=s();switch(e){case"Interstitial":return S(n,t);case"Footer":return P(n,t);default:return o(e),!1}},S=(e,t)=>d.has(e)||t&&p.has(e),P=(e,t)=>f.has(e)||t&&p.has(e),A=({parts:e})=>u(g,{children:e.map((e=>"bold"===e.style?u("b",{children:e.text}):e.text))}),x=()=>{var e=l(),{fetching:t,isEligible:n}=b("PHASE4"),r=null;n&&(r="PHASE4");var{fetching:i,data:a}=m(e,"PHASE4","PHASE4"!==r),o=t||i;return null===a?{fetching:o,dataVersion:null,data:null}:{fetching:o,dataVersion:"PHASE4",data:a}};return[()=>{c=y,h=v,d=new Set(["Hotels","Tourism","ShowForum","ShowTopic","Hotel_Review"]),p=new Set(["AttractionsFusion","Attraction_Review"]),f=new Set(["Tourism"]),e({FormattedEntrypointText:A,isFooterSupportedPage:P,isInterstitialSupportedPage:S,useEligibleVersionedEntrypointData:x,useGetEntrypointData:m,useIsEligibleEntrypoint:b,useIsEligibleEntrypointAnyVersion:h,useIsSupportedPage:I,usePhase4EntrypointBucket:c})},[e=>n=e.useQuery,e=>r=e.extractImageWithId,e=>i=e.useMemo,e=>(a=e.useExperimentBucket,l=e.useGeoId,o=e.exhaustivenessCheck),e=>s=e.default,e=>(u=e.jsx,g=e.Fragment)]]},["1mqwhq","1f2fji","1o4yt4","a2qxj9","eqoaya","121h32"]]);

(this.$WP=this.$WP||[]).push(["u6elcj",(e,n)=>{"use strict";var i,s,t,u,r={__key:0x6e1cdf1eca83,id:"6e1cdf1eca83b9be904a2a729c3f68d6",loc:{},definitions:[]},l=["Hotels","Hotel_Review"],a=(e,n)=>{var u,a,o,{params:c}=i(),d="geoId"in c?c.geoId:0,f=t(),g=0!==d&&l.includes(f),[{data:p,fetching:h}]=s({query:r,variables:{geoId:d,version:e},pause:!g||n});return{fetching:h,isEnabled:(null==p||null==(u=p.PlusCuration_isGeoInExperimentForVersion)||null==(a=u.isGeoInExperimentResults)||null==(o=a[0])?void 0:o.isInExperiment)||!1}},o=e=>{var{fetching:n,bucket:i}=u({},e),s=!!i,{fetching:t,isEnabled:r}=a("PHASE4",e||!s);return{fetching:n||t,isInExperiment:s&&r}};return[()=>{e({useIsInAnyPlusSuppressionExperimentBucket:o,useIsPageEligibleForPlusStandaloneVersion:a})},[e=>i=e.useRoute,e=>s=e.useQuery,e=>t=e.default,e=>u=e.usePhase4EntrypointBucket]]},["fgwvq1","1mqwhq","eqoaya","24j2l1"]]);

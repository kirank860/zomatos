(this.$WP=this.$WP||[]).push(["r5tkzy",(e,i)=>{"use strict";var r,s,n,t,l,o,a,d,_=e=>{var{localize:i}=s(),r=e.expectedOwnerLikelihoods?e.expectedOwnerLikelihoods.split("|"):[];if(r.includes(e.ownerLikelihood)&&!e.isMemberOwner||!r.length||(!0===e.showOwner||"true"===e.showOwner)&&e.isMemberOwner){var d,_,u,c,h,w=`${e.detailId},${e.ownerLikelihood}`,m="Restaurant_Review",v="";return e.isMemberOwner?(d=i.string("OC_ListingLink_1_1774"),_=`/OwnerResponse-d${e.detailId}`,u=i("owner_reg_respond_reviews")):(d=i.string("is_this_your_listing_card"),_=`/Owners-d${e.detailId}-aClaimForm`,c=()=>{n({module:m,action:"claim_is_this_your_business_click",context:w})},h=()=>{n({module:m,action:"claim_is_this_your_business_hover",context:w})},!0===e.useButton||"true"===e.useButton?(v="Mh",u=o(l,{type:"primary",children:i("rs_claim_your_free_listing")})):u=i("rs_claim_your_free_listing")),o(t,{visible:{module:m,action:"claim_is_this_your_business_impression",context:w,once:!0},children:a("div",{className:"ui_section PlfOb",onMouseEnter:h,children:[o("div",{className:"HPKxx b",children:d}),!e.isMemberOwner&&a("div",{className:"DLkSL",children:[" ",i("myl_cta_review_servlets_2")," "]}),o("a",{href:_,target:"_blank",className:`${v} jqDUj d`,onClick:c,children:u})]})})}return null};return[()=>{_.defaultProps={expectedOwnerLikelihoods:""},d=r(((e,i)=>{var{detailId:r}=e.page,s=i(`/data/1.0/restaurant/${r}/ownerLikelihood`);return()=>{var e,i;return{isMemberOwner:null==(e=s.get().data)?void 0:e.isOwner,ownerLikelihood:null==(i=s.get().data)?void 0:i.likelihood,detailId:r}}}))(_),e("default",d)},[e=>r=e.bind,e=>s=e.useLocalize,e=>(n=e.default,t=e.Track),e=>l=e.default,e=>(o=e.jsx,a=e.jsxs)]]},["16z5q2","17thqz","4axon3","4nzso8","121h32"]]);
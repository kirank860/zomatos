(this.$WP=this.$WP||[]).push(["189zkc",(e,a)=>{"use strict";var r,l,n,t,o,i,u,d={__key:0xa17bd402b814,id:"a17bd402b8144a3572923383066084fc",loc:{},definitions:[]},s=[],c=e=>n(r,{query:d,variables:{id:e.rentalId},children:({error:a,data:r={},fetching:l})=>{return l?e.children(!0,s):(a&&console.error("VR SRP PhotoDataProvider error",a,r),r&&r.rentalsPhotos&&(n=r.rentalsPhotos),e.children(l,n||s));var n}}),v={__key:0xd2b59ad3117d,id:"d2b59ad3117d09a251e81be03ae3f624",loc:{},definitions:[]},p=({rentalId:e,currencyCode:a="USD"})=>{var r=l({query:v,variables:{rentalId:e,currencyCode:a,requestSource:"PDP"},pause:!e});return r[0].error&&console.error("DetailRental fetch error",r[0].error),r},h=e=>{if(null==e||!e.length)return null;var a={};return e.forEach((e=>{var r;e&&(a[e.featureCode]={type:(e.featureType||"").toLowerCase(),quantity:e.count,localizedText:null==(r=e.localizedDescription)?void 0:r.localizedString,hasFeature:!!e.hasFeature,value:e.value})})),a},b=e=>{if(null==e||!e.length)return{};var a={};return e.forEach((e=>{null!=e&&e.key&&null!=e&&e.status&&(a[e.key]={status:e.status,lang:e.lang||"",machineTranslated:!!e.machineTranslated,machineTranslatedSourceLang:e.machineTranslatedSourceLang||"",text:e.text||""})})),a},f=e=>e?{subscriptionType:e.subscriptionType,tipType:e.tipType,isFTL:e.isFreeToList,isSTL:e.isSubscribeToList,QandAListType:e.questionAndAnswerListType}:null,g=e=>{var a;if(!e)return null;var r={id:e.id,isRbo:e.isRbo,managerType:e.managerType,typeValue:e.managerTypeValue,photoUrl:e.photoUrl,localizedLanguages:e.localizedLanguagesString,localizedResponseTimeString:null==(a=e.localizedResponseTime)?void 0:a.localizedString,respondedPercentage:e.respondedPercentage,obfuscatedLanderUrl:e.obfuscatedLanderUrl,name:e.name,isBusiness:null==e?void 0:e.isBusiness};return e.photoUrl&&(r.photoUrl=e.photoUrl),e.establishedDate&&(r.establishedDate=e.establishedDate),r},m=(e,a,r)=>{var l,n,o,i,u,d,s,c;if(!e)return null;var v,{detailFields:p,nearbyGeosInfo:m}=e,{supplierData:y,inquiryMetadata:I,legacyData:R,businessInfo:P}=p||{},{propertyManagerData:S}=y||{},T={id:e.id,titleInfo:e.titleInfo,recentViewCount:e.recentViewCount||null,propertyManager:g(S),businessInfo:f(P),cancellationPolicy:e.cancellationPolicy||"NONE",isInstantBook:e.isInstantBook||!1,rentalSource:{id:null==y?void 0:y.vrSourceID},requiresPetInput:null==I?void 0:I.requiresPetInput,showPhoneNumber:null==S?void 0:S.shouldShowPhoneNumber,phoneNumber:null==S?void 0:S.phoneNumber,rawPhoneNumber:null==S?void 0:S.rawPhoneNumber,rateComment:null==I?void 0:I.rateComment,baseDailyRate:null==R||null==(l=R.baseDailyRate)?void 0:l.amount,isAffiliate:e.isAffiliate,descriptions:b(null==p?void 0:p.descriptions),features:h(null==p?void 0:p.features),rentalData:{carRequired:null==p?void 0:p.carRequired},geoCoordinate:{lat:null==(n=e.geoCoordinates)?void 0:n.lat,lon:null==(o=e.geoCoordinates)?void 0:o.lng},parentGeo:r,photos:e.photos,nearbyGeos:(v=m,null!=v&&v.length?v.map((e=>({anchorText:null==e?void 0:e.name,url:null==e?void 0:e.url,localizedCount:null==e?void 0:e.rentalCount}))):null),managerPhotoUrl:null==S?void 0:S.photoUrl,isExactMap:null==p||null==(i=p.mapData)?void 0:i.isExactMap,paymentStats:e.paymentStats,rentalType:null==R||null==(u=R.rentalSubtypeLocalized)?void 0:u.localizedString,bathCount:e.bathCount,sleepCount:e.sleepCount,minStay:e.minStay,roomCount:e.roomCount,name:e.name,bedroomInfo:null==R?void 0:R.bedroomInfo,bathroomInfo:null==R?void 0:R.bathroomInfo,externalId:null==y?void 0:y.externalId,isPartnerSupplier:null==y?void 0:y.isPartnerSupplier,numOfReviews:e.userReviewCount,averageRatingNumber:e.averageRatingNumber,detailPageUrl:null==e||null==(d=e.detailRoute)?void 0:d.url,listingLink:null==S?void 0:S.listingLink,supplierLogoSource:null==y?void 0:y.supplierLogoSourceURL,formattedSourceID:null==y?void 0:y.formattedSourceID,isMachineTranslatedMarkupFeatureEnabled:t("vr_seo_machine_translated_markup_detail_page"),isIndexable:e.isIndexable,canReceiveInquiries:null==I?void 0:I.canReceiveInquiries,isOnlineBookable:e.isOnlineBookable,overidePartnerImageAltText:null==y?void 0:y.shouldOverridePartnerImageAltText,travelersChoiceModel:{},isTravelersChoice:!1,hasCOE:a,vrSource:null==y?void 0:y.vrAffiliateSourceID,dailyRate:-1,weeklyRate:-1,monthlyRate:-1,locationAlertMessage:(null==(s=e.detailFields)||null==(c=s.locationAlert)?void 0:c.localizedMessage)||void 0};return e.thumbnailUrl&&(T.thumbnailUrl=e.thumbnailUrl),null!=y&&y.affiliateLogoUrl&&(T.affiliateLogoUrl=null==y?void 0:y.affiliateLogoUrl),null!=y&&y.providerOrdinal&&(T.providerOrdinal=y.providerOrdinal),null!=S&&S.contactManagerUrl&&(T.contactManagerUrl=null==S?void 0:S.contactManagerUrl),T},y=e=>{var a,[{data:r={},fetching:l,error:n}]=u(e),[t]=r.RentalInformation_getDetailRentals||[],[o]=r.coeAward||[],i=o&&(null==(a=o.locations)?void 0:a.length),[d]=r.locations||[];return[{rental:m(t,i,d),fetching:l,error:n}]},I={__key:0xb86e33d7ae38,id:"b86e33d7ae383037dab7dcc67bdac8d9",loc:{},definitions:[]},R=()=>{var{page:e,path:a}=i(),[{data:r={},fetching:n,error:t}]=l({query:I,variables:{url:a,pageName:e}}),u=o((()=>{var e,a=null==r||null==(e=r.Breadcrumbs_buildBreadcrumbs)?void 0:e.breadcrumbs;return a?a.filter((e=>e&&e.url&&e.text)).map((e=>({href:e.url,name:e.text,obfuscated:!!e.obfuscated}))):null}),[r]);return t&&console.error("RentalsHeaderBreadcrumbs fetch error",t),[{breadcrumbsParams:u,fetching:n,error:t}]},P={__key:32384056043469,id:"1d74002827cd335a3b19f1a8696ddfea",loc:{},definitions:[]},S=({detailId:e,geoId:a=0,page:r="VacationRentalReview"})=>{var[{data:n,fetching:t,error:i}]=l({query:P,variables:{page:r,geoId:a,detailId:e}}),u=o((()=>{var e,a=null==n?void 0:n.Routing_canonicalize;return a&&(null==(e=a[0])?void 0:e.url)||null}),[n]);return i&&console.error("PdpCanonicalUrl fetch error",i),[{pdpCanonicalUrl:u,fetching:t,error:i}]},T={__key:99992102480931,id:"5af139bfac236f72a44f6c3a48723348",loc:{},definitions:[]};return[()=>{e({LocationInfoQuery:T,PhotoDataProvider:c,useDetailRentalData:u=p,useJerseyDetailRentalData:y,usePdpCanonicalUrl:S,useRentalBreadcrumbData:R})},[e=>(r=e.Query,l=e.useQuery),e=>n=e.jsx,e=>t=e.featureIsEnabled,e=>o=e.useMemo,e=>i=e.useRoute]]},["1mqwhq","121h32","skjzuv","1o4yt4","fgwvq1"]]);
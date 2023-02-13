(this.$WP=this.$WP||[]).push(["i9ixrv",(e,t)=>{"use strict";var n,r,i,a,o,u,l,s,c,d,p,m,f,b,g,v,y,h,_,D;function C(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function N(e){C(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(new Error).stack,new Date(NaN))}function S(e){C(1,arguments);var t=N(e);return!isNaN(t)}function A(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}var P=36e5,T={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},E=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,w=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,I=/^([+-])(\d{2})(?::?(\d{2}))?$/;function O(e,t){C(1,arguments);var n=t||{},r=null==n.additionalDigits?2:A(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var i,a=R(e);if(a.date){var o=k(a.date,r);i=U(o.restDateString,o.year)}if(isNaN(i)||!i)return new Date(NaN);var u,l=i.getTime(),s=0;if(a.time&&(s=x(a.time),isNaN(s)||null===s))return new Date(NaN);if(!a.timezone){var c=new Date(l+s),d=new Date(c.getUTCFullYear(),c.getUTCMonth(),c.getUTCDate(),c.getUTCHours(),c.getUTCMinutes(),c.getUTCSeconds(),c.getUTCMilliseconds());return d.setFullYear(c.getUTCFullYear()),d}return u=L(a.timezone),isNaN(u)?new Date(NaN):new Date(l+s+u)}function R(e){var t,n={},r=e.split(T.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],T.timeZoneDelimiter.test(n.date)&&(n.date=e.split(T.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var i=T.timezone.exec(t);i?(n.time=t.replace(i[1],""),n.timezone=i[1]):n.time=t}return n}function k(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:null};var i=r[1]&&parseInt(r[1]),a=r[2]&&parseInt(r[2]);return{year:null==a?i:100*a,restDateString:e.slice((r[1]||r[2]).length)}}function U(e,t){if(null===t)return null;var n=e.match(E);if(!n)return null;var r=!!n[4],i=M(n[1]),a=M(n[2])-1,o=M(n[3]),u=M(n[4]),l=M(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,l)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var i=7*(t-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+i),r}(t,u,l):new Date(NaN);var s=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(q[t]||(j(e)?29:28))}(t,a,o)&&function(e,t){return t>=1&&t<=(j(e)?366:365)}(t,i)?(s.setUTCFullYear(t,a,Math.max(i,o)),s):new Date(NaN)}function M(e){return e?parseInt(e):1}function x(e){var t=e.match(w);if(!t)return null;var n=F(t[1]),r=F(t[2]),i=F(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,i)?n*P+6e4*r+1e3*i:NaN}function F(e){return e&&parseFloat(e.replace(",","."))||0}function L(e){if("Z"===e)return 0;var t=e.match(I);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),i=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,i)?n*(r*P+6e4*i):NaN}var q=[31,null,31,30,31,30,31,31,30,31,30,31];function j(e){return e%400==0||e%4==0&&e%100}var B={__key:0x7b7d4ad1bb35,id:"7b7d4ad1bb35ada18e3e83b9f64944f6",loc:{},definitions:[]},Y=e=>{if(!e||!e.dueDate)return null;var t="number"==typeof e.totalAmount&&e.totalAmount>=0?e.totalAmount:null,{currencyCode:n}=e,r=e.dueDate?O(e.dueDate):null;return n&&t&&r&&S(r)?{totalAmount:t,currencyCode:n,dueDate:r}:null},z=e=>{if(!e)return null;var{totalAmount:t,currencyCode:n,discountAmount:r}=e,{discountAmount:i=0}=r||{discountAmount:0};return t&&n?{totalAmount:t,currencyCode:n,discountAmount:i,amountPaid:t-i}:null},H=e=>{if(!e)return{startDate:null,endDate:null,renewalDate:null,cancellationDate:null,autoRenew:!1,withinFullRefundCancellationPeriod:!1};var t=O(e.startDate),n=O(e.endDate),r=e.renewalDate?O(e.renewalDate):null,i=e.cancellationDate?O(e.cancellationDate):null;return{startDate:S(t)?t:null,endDate:S(n)?n:null,renewalDate:r&&S(r)?r:null,cancellationDate:i&&S(i)?i:null,autoRenew:e.autoRenew,withinFullRefundCancellationPeriod:e.withinFullRefundCancellationPeriod}},$=e=>{var t=null==e?void 0:e.OptimusBenefits_getOptimusSubscriptionStatus;return t?{isMember:t.isMember,isFormerMember:!t.isMember&&!!t.subscriptionNumber,subscriptionNumber:t.subscriptionNumber,billingAccountId:t.billingAccountId,nextCharge:Y(t.nextCharge),subscriptionPrice:z(t.subscriptionPrice),...H(t.subscriptionDates),purchaseType:t.purchaseType,trialDetails:t.trialDetails,hasAcceptedVfTerms:t.hasAcceptedVfTerms||!1,isExternallyManaged:t.isExternallyManaged||!1,externalPartnerManagementDetails:t.externalPartnerManagementDetails||null,entitlements:t.entitlements||null}:null},G=e=>{var t=n();return r({query:B,pause:"undefined"==typeof window||!t||e},$)},V={__key:0xcd51845f3938,id:"cd51845f39387936c3094cf28e0bfaa4",loc:{},definitions:[]},W=(e,t,r,o)=>{var u,l=n(),[s,c]=i(l),[{data:d,fetching:m,error:f},b]=p({query:V,variables:{request:{currencyCode:e,discountCode:t,source:o}},pause:r});a((()=>{l!==s&&!r&&(b({requestPolicy:"network-only"}),c(l))}),[s,r,b,l]);var g=(e=>{var t,n;if(null==e||null==(t=e.fullSubscription)||!t.firstCharge)return null;var{firstCharge:r}=e.fullSubscription,i=e.discount&&!e.discount.trialDiscount?null==(n=e.discount)?void 0:n.originalPrice:(null==r?void 0:r.totalAmount)||0;return{firstCharge:{currencyCode:(null==r?void 0:r.currencyCode)||"USD",dueDate:new Date((null==r?void 0:r.dueDate)||""),totalAmount:(null==r?void 0:r.totalAmount)||0,originalAmount:i}}})(null==d?void 0:d.subscriptionPricing),v=(e=>{if(null==e||!e.discount)return null;var{discount:t}=e,n=t.status;return{discountCode:t.discountCode,discountCodeRejectionReason:t.discountCodeRejectionReason,discountType:t.discountType,discountNote:t.discountNote,expiryDate:t.expiryDate,status:n,originalPrice:t.originalPrice,discountedPrice:t.discountedPrice,trialDiscount:t.trialDiscount||!1,discountNumPeriodsMonths:t.discountNumPeriodsMonths,discountNumPeriodsAnnual:t.discountNumPeriodsAnnual,trialOriginalPrice:t.trialOriginalPrice,trialDiscountedPrice:t.trialDiscountedPrice}})(null==d?void 0:d.subscriptionPricing),y=(e=>{var t,n,r,i,a,o;if(null==e||!e.trialPeriod)return null;var{trialPeriod:u,fullSubscription:l}=e,{firstCharge:s}=l||{},c=null!=(t=e.discount)&&t.trialDiscount?(null==(n=e.discount)?void 0:n.trialOriginalPrice)||0:(null==(r=u.trialCharge)?void 0:r.totalAmount)||0,d=u.trialPeriodUnits;return{numberOfDays:u.numberOfDays,endDate:new Date(u.endDate),trialCharge:{currencyCode:(null==(i=u.trialCharge)?void 0:i.currencyCode)||"USD",dueDate:new Date((null==(a=u.trialCharge)?void 0:a.dueDate)||""),totalAmount:(null==(o=u.trialCharge)?void 0:o.totalAmount)||0,originalAmount:c},trialPeriodUnits:d,trialPeriodDuration:u.trialPeriodDuration||0,renewalCharge:{currencyCode:(null==s?void 0:s.currencyCode)||"USD",dueDate:new Date((null==s?void 0:s.dueDate)||""),totalAmount:(null==s?void 0:s.totalAmount)||0}}})(null==d?void 0:d.subscriptionPricing);return{subscriptionPrice:{isMember:(null==d||null==(u=d.subscriptionPricing)?void 0:u.isMember)||!1,fullSubscription:g,discount:v,trialPeriod:y},fetching:m,error:f}},Z=e=>{var t=l(),{promoCodeForm:{appliedPromoCode:n,isApplying:r,promoCodeField:i}}=o(d),a=r&&i.value||(null==n?void 0:n.code);return v(t,a,!t,e)},Q={__key:0x693090c2ef93,id:"693090c2ef93f0d229ceefb4a6efcaf9",loc:{},definitions:[]},J=()=>{var[,e]=m(Q);return u((()=>e()),[e])},K={__key:0xf0c3b047a083,id:"f0c3b047a083ffd05b48e7b5d19ee64e",loc:{},definitions:[]},X={__key:0x7dbee74118bf,id:"7dbee74118bf1e182d230f175ea16473",loc:{},definitions:[]},ee=()=>{var{localize:e}=s(),[{data:t,fetching:n}]=p({query:X}),r=((e,t,n)=>{var r,i=(e=>({BETTER_RATES_ELSEWHERE:e.string("plus_account_cancellation_reason_better_rates_elsewhere"),CANNOT_FIND_REQUIRED_HOTEL:e.string("plus_account_cancellation_reason_cannot_find_required_hotel"),COVID19_PANDEMIC_UNCERTAINTY:e.string("plus_account_cancellation_reason_covid19_pandemic_uncertainty"),CUSTOMER_SERVICE_EXPERIENCE:e.string("plus_account_cancellation_reason_customer_service_experience"),ISSUE_WITH_BOOKING:e.string("plus_account_cancellation_reason_issue_with_booking"),SUBSCRIBED_BY_MISTAKE:e.string("plus_account_cancellation_reason_subscribed_by_mistake"),TRAVEL_PLANS_CHANGED:e.string("plus_account_cancellation_reason_travel_plans_changed")}))(n);return(!t&&(null==e||null==(r=e.OptimusBenefits_getUserCancellationReasonOptions)?void 0:r.reasons)||[]).map((e=>{var t=i[e];return{reason:e,value:e,displayName:t,label:t}}))})(t,n,e),[,i]=m(K);return[r,u((e=>i({reason:e})),[i])]},te={__key:21303208491435,id:"13600a2cb9ab2080d1b6ecb7bed11468",loc:{},definitions:[]},ne=()=>{var[{data:e,fetching:t}]=p({query:te}),n=!t&&(null==e?void 0:e.OptimusBenefits_getUserCancelSubscriptionEligibility)||null;return{upcomingBookings:(null==n?void 0:n.upcomingBookings)||0,status:(null==n?void 0:n.status)||null}},re=e=>fetch("/data/1.0/plusStandalonePurchase/status",{method:"POST",body:JSON.stringify(e),credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then((e=>{if(e.ok)return e.text();throw new Error("failed to get standalone purchase status")})).then((e=>JSON.parse(e))),ie=e=>fetch("/data/1.0/plusStandalonePurchase/start",{method:"POST",body:JSON.stringify(e),credentials:"same-origin",headers:{"Content-Type":"application/json"}}).then((e=>{if(e.ok)return e.text();throw new Error("failed to start standalone purchase")})).then((e=>JSON.parse(e))),ae=()=>{var{funnelKey:e}=o(f);return u((t=>{var n={currency:t.currency,totalAmount:t.totalAmount,subscriptionNumber:t.subscriptionNumber,funnelKey:e},r=new URLSearchParams;Object.entries(n).forEach((([e,t])=>{r.set(e,String(t))}));var i=new AbortController,a=setTimeout((()=>i.abort()),3e3);return fetch("/PlusCommerce",{method:"POST",credentials:"same-origin",body:r.toString(),headers:{"content-type":"application/x-www-form-urlencoded"},signal:i.signal}).finally((()=>clearTimeout(a)))}),[e])},oe=()=>{var e,t,r=(e=_(),t=u(((t,n)=>{var r,i=null==(r=t.purchaseState)?void 0:r.session,a={currency:(null==i?void 0:i.currency)||null,totalAmount:(null==i?void 0:i.totalAmount)||null,subscriptionNumber:(null==i?void 0:i.subscriptionNumber)||null};e(a).catch((e=>{console.error("Error logging P_Sub commerce click",e)})).finally((()=>{n&&n(t)}))}),[e]),u((e=>{var n=0,{session:r,onSuccess:i,onError:a}=e,o=(e,t)=>{clearInterval(e),a&&a(t)},u=setInterval((()=>{n++>=30&&o(u),y(r).then((e=>{e||o(u,"MISSING_DATA");var{purchaseState:n}=e,r=null==n?void 0:n.status,a=null==n?void 0:n.session;"SUCCESS"===r&&a&&((e,n)=>{clearInterval(e),t(n,i)})(u,e),"INTERNAL_ERROR"!==r&&"PAYMENT_FAILURE"!==r&&"ACCOUNT_ERROR"!==r||o(u,r)})).catch((()=>o(u,"QUERY_ERROR")))}),1e3)}),[t])),i=c(),a=n(),o=l();return u((({billingAccountId:e,checkoutSessionId:t,source:n,billingAddress:u,firstName:l,lastName:s,emailAddress:c,phoneNumber:d,paymentToken:p,storedCardId:m,discountCode:f,onSuccess:b,onError:g,cardType:v,inAuthTransactionId:y,updateMemberAccountInfo:_,expectedSubscriptionPrice:D,csrfToken:C,paymentNonce:N,paymentMethod:S,payerId:A,paymentEmail:P})=>{var T=null,E="PAYPAL"===S?"PAYPAL":null;E&&(T={paymentMethod:E,paymentNonce:N,payerId:A,paymentEmail:P}),h({userId:a||"",billingAccountId:e,pointOfSale:i,source:n,billingAddress:u?{name:u.cardholderName,address1:u.street,address2:u.street2,postalCode:u.postalCode,state:u.state,city:u.city,countryCode:u.country}:void 0,firstName:l,lastName:s,emailAddress:c,phoneNumber:d,sessionPaymentAccountToken:p,checkoutSessionId:t,currencyCode:o,cardType:v,existingStoredCardId:m||null,discountCode:f,inAuthSessionId:y||"",updateMemberAccountInfo:_,expectedSubscriptionPrice:D,csrfToken:C,tokenizedPaymentInfo:T}).then((e=>{e?"IN_PROGRESS"===(null==e?void 0:e.status)&&null!=e&&e.session?r({session:e.session,onSuccess:b,onError:g}):"PAYMENT_FAILURE"===(null==e?void 0:e.status)?g("PAYMENT_FAILURE"):g():g()})).catch((()=>{g()}))}),[a,i,o,r])},ue=()=>{var{params:e}=b(),t="detailId"in e?e.detailId:void 0;return t?`&detailId=${t}`:""},le={__key:0xff983cd673dd,id:"ff983cd673ddb9f94faab6dffc72f44e",loc:{},definitions:[]},se=()=>{var[,e]=m(le);return u((()=>e()),[e])},ce={__key:0x9867e86aee7f,id:"9867e86aee7f50640847a4079278f0bc",loc:{},definitions:[]},de=e=>{var t,r,o=l(),u=n(),[s,c]=i(u),[{data:d,fetching:m,error:f},b]=p({query:ce,variables:{currency:o},pause:e||!o});return a((()=>{var e=u!==s;u&&e&&b({requestPolicy:"network-only"}),e&&c(u)}),[s,b,u]),{eligible:(null==d||null==(t=d.OptimusBenefits_getOptimusEligibility)?void 0:t.eligible)||!1,subscribed:(null==d||null==(r=d.OptimusBenefits_getOptimusEligibility)?void 0:r.subscribed)||!1,error:f,fetching:m}},pe="STANDALONE",me="OptimusCurationShopping",fe=(e,t)=>{switch(t){case"SHOP_REGULAR":return{flow:me,variant:"regular",checkoutType:me};case"SHOP_BEST_RATE":return{flow:me,variant:"best_rate",checkoutType:me};default:return{flow:e?"STANDALONE_TRIAL":pe,variant:null,checkoutType:pe}}},be=()=>(D()||"").startsWith("SHOP_"),ge="shopFlowData",ve=e=>{g.set(ge,g.has(ge)?{...g.get(ge),geoId:e}:{geoId:e},72e5)},ye=()=>{var{geoId:e}=g.get(ge)||{};return e},he=()=>{g.remove(ge)},_e=()=>{var{params:e}=b();return"oft"in e&&e.oft?e.oft:null};return[()=>{y=re,h=ie,e({clearShopCheckoutParams:he,getFlowVariantCheckoutType:fe,getShopCheckoutGeoId:ye,setShopCheckoutGeoId:ve,useCommerceClickLogger:_=ae,useDetailQueryParameter:ue,useFlowTypeDesignator:D=_e,useIsShopFlow:be,useOptimusEligibility:de,useOptimusSubscription:G,useOptimusSubscriptionCancel:ee,useOptimusSubscriptionCancelEligibility:ne,useOptimusSubscriptionDisableAutoRenew:J,useOptimusSubscriptionEnableAutoRenew:se,useOptimusSubscriptionPrice:Z,useOptimusSubscriptionPriceQuery:v=W,usePurchaseOptimusSubscription:oe})},[e=>n=e.useUserId,e=>r=e.default,e=>(i=e.useState,a=e.useEffect,o=e.useContext,u=e.useCallback),e=>(l=e.useCurrency,s=e.useLocalize,c=e.useLocale),e=>d=e.Payment,e=>(p=e.useQuery,m=e.useMutation),e=>f=e.FunnelTracking,e=>b=e.useRoute,e=>g=e.default]]},["52far5","l47ri7","1o4yt4","17thqz","1yajq4","1mqwhq","1kkqcv","fgwvq1","19b9b1"]]);
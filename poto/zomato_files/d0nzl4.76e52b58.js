(this.$WP=this.$WP||[]).push(["d0nzl4",(e,t)=>{"use strict";var i,a,r,n,o,l,s,d,u,c,m,p,g,f,h,b,_={placetypes:["ACCOMMODATION","EATERY","ATTRACTION"]},v=e=>{var{localize:t}=s();return d(m,{...e,localize:t})},C=({userPosition:e,targetLocation:t,distanceUnit:i})=>{if(!e||!t)return null;var{distance:a,name:r}=t;if(!((e,t)=>{if(e)if("KILOMETERS"===t){if(e>f)return!1}else if(e>100)return!1;return!0})(a,i))return null;var n=(({countryId:e,parentGeoId:t,placeType:i})=>{var a=[];return Object.keys(p).forEach((r=>{var n=p[r];n.placetypes&&!n.placetypes.includes(i)||n.excludedParentGeos&&n.excludedParentGeos.includes(t)||(!n.includedCountryIds||e&&n.includedCountryIds.includes(e))&&a.push(n)})),a})(t);if(!n.length)return null;if(e.latitude&&e.longitude){var l={pickup:e,dropoff:t,dropoffName:r};return d(c,{children:n.map((e=>o(g,{ride:l,...e,key:e.name})))})}return null},x={__key:0x756e41008b03,id:"756e41008b031dab3fa8f22d05669f71",loc:{},definitions:[]},I=({locId:e,distanceUnit:t})=>{var a=(()=>{var e=r.withConverter((e=>e.startsWith("%1%")?decodeURIComponent(e.substring(3)):decodeURIComponent(e))).get("TAUserLocation")||"";if(e){var t=e.split("&");t[0].indexOf("v")>-1&&t.shift();var[i,a]=t,n=Number.parseFloat(i),o=Number.parseFloat(a);if(!Number.isNaN(n)&&!Number.isNaN(o))return{latitude:n,longitude:o}}return null})();return!a||!e||e<0?null:d(i,{query:x,variables:{locationId:e,userLocation:a,userUnits:t},children:({fetching:e,data:i})=>!e&&i&&i.locations&&i.locations[0]?d(h,{userPosition:a,distanceUnit:t,targetLocation:i.locations[0]}):null})};return[()=>{p={uber:{..._,name:"uber",excludedParentGeos:[154943],calloutText:e=>e.string("mobile_uberCTA_1ad3"),logoUrl:"/svg/mobile/uber_logo.svg",getCtaUrl:({dropoff:e,dropoffName:t})=>{var i={action:"setPickup",client_id:"-NyzH0pBoWxt0dXPII6YiBh9IEyYfTkN",pickup:"my_location","dropoff[latitude]":e.latitude.toString(10),"dropoff[longitude]":e.longitude.toString(10),"dropoff[nickname]":t};return`https://m.uber.com/ul/?${new URLSearchParams(i).toString()}`},getEstimateHandler:({pickup:e,dropoff:t},i)=>{if(!e)return new Promise(((e,t)=>{t()}));var a={start_latitude:e.latitude.toString(10),start_longitude:e.longitude.toString(10),end_latitude:t.latitude.toString(10),end_longitude:t.longitude.toString(10)},r=new URLSearchParams(a);return new Promise(((e,t)=>{fetch(`/MobileUberEstimateAjax?${r.toString()}`,{credentials:"same-origin"}).then((a=>a.ok?a.json().then((a=>{a&&a.product_id||t();var r=a.price_estimate_string||"";if(a.time_estimate){var n=Math.round(parseInt(a.time_estimate,10)/60);r=r?`${r}, ${i.string("mobile_uber_1ad3",{0:n})}`:i("mobile_uber_1ad3",{0:n})}r?e(r):t()})):t()),t)}))}},olaCabs:{..._,name:"olaCab",includedCountryIds:[293860],calloutText:e=>e.string("mobile_ola_cabs"),logoUrl:"/svg/mobile/ola_cabs_logo.svg",getCtaUrl:({pickup:e,dropoff:t,dropoffName:i})=>{var a={utm_source:"148b73e4b678470e9adc655d63ba3863",landing_page:"bk",lat:e?e.latitude.toFixed(6):"",lng:e?e.longitude.toFixed(6):"",drop_lat:t.latitude.toFixed(6),drop_lng:t.longitude.toFixed(6),drop_name:i};return`https://olawebcdn.com/assets/ola-universal-link.html?${new URLSearchParams(a).toString()}`},getEstimateHandler:({pickup:e,dropoff:t,dropoffName:i},a)=>{if(!e)return new Promise(((e,t)=>{t()}));var r={start_latitude:e.latitude.toFixed(6),start_longitude:e.longitude.toFixed(6),end_latitude:t.latitude.toFixed(6),end_longitude:t.longitude.toFixed(6),drop_name:i},n=new URLSearchParams(r);return new Promise(((e,t)=>{fetch(`/MobileOlaCabsEstimateAjax?${n.toString()}`,{credentials:"same-origin"}).then((i=>i.ok?i.json().then((t=>e(t.estimate_string))):t()),t)}))}}},(m=class extends n{constructor(e){super(e),this.state={estimateRequested:!1,estimateFailed:!1,estimateCallout:null}}componentDidMount(){var{ride:e,getEstimateHandler:t}=this.props;!this.state.estimateRequested&&e.pickup&&t(e,this.props.localize).then((e=>this.setState({estimateCallout:e,estimateFailed:!1})),(()=>this.setState({estimateCallout:null,estimateFailed:!0})))}renderCallout(){var{estimateCallout:e}=this.state,{calloutText:t}=this.props;return e||t(this.props.localize)}render(){var{getCtaUrl:e,ride:t,logoUrl:i}=this.props;return this.state.estimateFailed?null:u("a",{className:"yBRBy u",rel:"nofollow",href:e(t),children:[d(l,{src:i,className:"LFOLV"}),d("div",{className:"XKBnV Cg Fa S4",children:this.renderCallout()})]})}}).defaultProps={pickupLocation:null},g=v,f=160.934,h=C,b=a((e=>({locId:e.page.detailId,distanceUnit:e.i18n.distanceUnit||"MILES"})))(I),e("default",b)},[e=>i=e.Query,e=>a=e.connect,e=>r=e.default,e=>(n=e.Component,o=e.createElement),e=>l=e.CdnImage,e=>s=e.useLocalize,e=>(d=e.jsx,u=e.jsxs,c=e.Fragment)]]},["1mqwhq","12mj4n","5gpqhx","1o4yt4","1s6q22","17thqz","121h32"]]);

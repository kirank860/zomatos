(this.$WP=this.$WP||[]).push(["cyrz7y",(e,t)=>{"use strict";var i,s,a="oneTapEligible",o="regDialogDismissed",r="regDialogDismissedCount",l="lastSignOutTime",n=864e5,u=["Hotel_Review","Hotels","SmartDeals","HotelHighlight","HotelsNear","HotelsList","LastMinute","MobileSmartDeals","MobileHotelHighlight","LocalMapsRedesign","MobileLocalMaps"],g=["Attractions","Attraction_Review","AttractionsNear","Attraction_Products","AttractionProductReview","MobileAttraction_Review","MobileAttractions","MobileAttractionsNear","MobileAttraction_Products","MobileAttractionProductReview","AttractionsLander"],c=["Restaurant_Review","Restaurants","RestaurantsNear","MobileRestaurants","MobileRestaurantsNear","MobileRestaurantSearch","RestaurantsLander","MobileNearbyRestaurants"],R=["Flights","MobileFlights","CheapFlightsSearchResults","CheapFlightsSearchDeals","MobileCheapFlightsSearchResults","FlightsRoute","Airline_Review","CheapFlightsHome","FlightsFrom"],h=["ShowTopic","ShowForum","NewTopic","MobileShowForum","MobileShowTopic"];function S(){return s.has(l)}function b(){s.remove(o),s.remove(r)}function d(e){var t=s.get(r)||0;switch(s.set(r,t+1,0),t){case 0:break;case 1:!function(e){s.set(o,e,6e5)}(e);break;case 2:!function(e){s.set(o,e,432e5)}(e),s.remove(r);break;default:b()}}function T(e){s.set(a,e,864e5)}function p(){return!!s.get(a)}function M(e){var t=s.get(o);return e===t||(null!==t&&b(),!1)}function v(){var e=s.get(l);if(!e){var t=i.get(l);return void 0!==t&&t+n>(new Date).getTime()}return e+n>(new Date).getTime()}function D(e){return M(e)}return e({isEligibleForOneTap:p,setOneTapEligibility:T,setRegDialogDismissed:d,shouldSuppressRegistrationDialog:D,userPreviouslyClosedRegDialog:M,userSignedOut:S,userSignedOutRecently:v}),[()=>{e({ATTRACTIONS_SERVLETS:g,FLIGHTS_SERVLETS:R,FORUM_SERVLETS:h,HOTEL_SERVLETS:u,RESTAURANTS_SERVLETS:c,isEligibleForOneTap:p,setOneTapEligibility:T,setRegDialogDismissed:d,shouldSuppressRegistrationDialog:D,userPreviouslyClosedRegDialog:M,userSignedOut:S,userSignedOutRecently:v})},[e=>i=e.default,e=>s=e.default]]},["tp1g68","19b9b1"]]);

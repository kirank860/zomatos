(this.$WP=this.$WP||[]).push(["168fm7",(t,o)=>{"use strict";var e,n,i,a,r=()=>"undefined"!=typeof navigator&&void 0!==navigator.geolocation,s=()=>navigator&&navigator.permissions&&void 0!==navigator.permissions.query,u=(t,o,e)=>{t&&"function"==typeof t&&(e&&s()?navigator.permissions.query({name:"geolocation"}).then((e=>{e&&e.state?"granted"===e.state&&navigator.geolocation.getCurrentPosition((o=>{t(o.coords.latitude,o.coords.longitude)}),(t=>{"function"==typeof o&&o(t)})):o&&"function"==typeof o&&o(new Error("Location services not available"))})):!e&&r()?navigator.geolocation.getCurrentPosition((o=>{t(o.coords.latitude,o.coords.longitude)}),(t=>{"function"==typeof o&&o(t)})):o&&"function"==typeof o&&o(new Error("Location services not available")))},c=(t,o)=>t&&"function"==typeof t?r()?navigator.geolocation.watchPosition((o=>{t(o.coords.latitude,o.coords.longitude)}),(t=>{"function"==typeof o&&o(t)}),{maximumAge:0,timeout:1/0,enableHighAccuracy:!1}):(o&&"function"==typeof o&&o(new Error("Location services not available")),null):null,l=t=>{r()&&navigator.geolocation.clearWatch(t)},p={1:"PERMISSION_DENIED",2:"POSITION_UNAVAILABLE",3:"TIMEOUT"},g=({enableHighAccuracy:t=!1,timeout:o=1/0,maximumAge:e=0,pause:a=!1})=>{var[s,u]=n(null),[c,g]=n(null);return i((()=>{if(a)return()=>{};if(!r())return g("POSITION_UNAVAILABLE"),()=>g(null);var n=navigator.geolocation.watchPosition((t=>u(t.coords)),(t=>g(p[t.code])),{enableHighAccuracy:t,timeout:o,maximumAge:e});return()=>l(n)}),[t,o,e,a]),{latitude:null==s?void 0:s.latitude,longitude:null==s?void 0:s.longitude,errorCode:c}};return[()=>{t("HasLocationPermission$1",a=class extends e.Component{constructor(t){super(t),this.state={outputComponent:null}}componentDidMount(){navigator&&navigator.permissions&&navigator.permissions.query&&navigator.permissions.query({name:"geolocation"}).then((t=>{t&&t.state&&("granted"===t.state?navigator.geolocation.getCurrentPosition((()=>{this.setState({outputComponent:this.props.hasPermission()})}),(t=>{t.code===t.POSITION_UNAVAILABLE&&this.setState({outputComponent:this.props.positioningOff()})})):"denied"===t.state?this.setState({outputComponent:this.props.deniedPermission()}):"prompt"===t.state&&this.setState({outputComponent:this.props.promptPermission()}))}))}render(){var t;return null!=(t=this.state.outputComponent)?t:null}}),t({HasLocationPermission:a,canRequestLocation:r,canUsePermissionAPI:s,clearWatch:l,requestLocation:u,useGeoLocation:g,watchLocation:c})},[t=>(e=t,n=t.useState,i=t.useEffect)]]},["1o4yt4"]]);

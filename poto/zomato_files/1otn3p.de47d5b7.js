(this.$WP=this.$WP||[]).push(["1otn3p",(e,t)=>{"use strict";var s,o,a,i,n,r,l,h,d,c,p,u,v,w,S,m,k,M,g,f,C,L,I,O,E,H,x,A,R,y,P="rFTCe",B=e=>g("div",{className:"IFdOQ G5",children:[f("span",{className:"nxlxr",children:f(M,{name:"map-pin-fill"})}),f("span",{className:"mnAVJ _Q q W o W7",children:e.locationName}),f("span",{className:"VIRVM _Q _S",onClick:e.onClose,children:f(M,{name:"times"})})]}),b=()=>window&&window.location&&"#MAPVIEW"===window.location.hash;return[()=>{E=B,I=class extends s{constructor(e){super(e),this.onMapLoaded=e=>{this.setState({mapInterface:e.map,lastSearchBBox:e.map.getBounds()})},this.onLocationHoverStart=e=>{"DESKTOP"===this.props.viewportCategory&&this.setState((()=>({hoveredMarker:e})))},this.onLocationHoverEnd=e=>{this.setState((t=>t.hoveredMarker&&t.hoveredMarker.id===e.id?{hoveredMarker:null}:null))},this.onPinSelected=e=>{if(e){var t=this.props.detailLocation===e?"primary_pin":"selected_marker";this.state.visitedLocations[e.id]=!0,this.setState({selectedMarker:e,hoveredMarker:null,carouselState:t})}else this.setState({selectedMarker:null,hoveredMarker:null,carouselState:"hidden"})},this.onMapClick=()=>{this.setState({selectedMarker:null,hoveredMarker:null,carouselState:"hidden"})},this.onRedoSearch=()=>{var{mapInterface:e}=this.state;if(e){var t=e.getBounds();this.setState({lastSearchBBox:t})}},this.toggleAlsoShowOption=(e,t)=>{var s={...this.state.selectedAlsoShowOptions};s[e]=!0,this.setState({selectedAlsoShowOptions:s}),t&&this.onRedoSearch()},this.clearAlsoShowOptions=()=>{var{carouselState:e}=this.state;"selected_marker"===e&&(e="hidden"),this.setState({selectedAlsoShowOptions:{},carouselState:e})},this.state={mapInterface:null,hoveredMarker:null,selectedMarker:"MOBILE"===e.viewportCategory?e.detailLocation:null,carouselState:"MOBILE"===e.viewportCategory?"selected_marker":"hidden",hasFitResults:!1,selectedAlsoShowOptions:{[l.hotels]:!1,[l.restaurants]:!0,[l.thingsToDo]:!1},visitedLocations:{},lastSearchBBox:null}}componentDidUpdate(){if(!this.state.hasFitResults){var{mapInterface:e}=this.state;e&&this.setState({hasFitResults:!0})}}render(){var{detailLocation:e,onClose:t}=this.props,{selectedMarker:s,hoveredMarker:o,selectedAlsoShowOptions:a,visitedLocations:i,hasFitResults:M}=this.state,C=o?o.id:0,L=s?s.id:0,I="DESKTOP"===this.props.viewportCategory,O="MOBILE"===this.props.viewportCategory,H=Object.keys(a).filter((e=>a[e])).length>0,x=null;"hidden"!==this.state.carouselState&&s&&(x=[s]);var A=O&&x&&x.length;return g("div",{className:"nWYYv w e",children:[f(E,{locationName:e.name,onClose:t}),g(r,{initialCenter:new n(e.geoPoint.latitude,e.geoPoint.longitude),initialZoom:15,onLoad:this.onMapLoaded,onClick:this.onMapClick,children:[f(v,{blacklist:{[e.id]:!0},showSelectedMarker:O,selectedMarker:L,hoveredMarker:C,boundingBox:this.state.lastSearchBBox,isVisited:i,showRestaurants:a[l.restaurants],showAttractions:a[l.thingsToDo],showHotels:a[l.hotels],onMarkerMouseEnter:this.onLocationHoverStart,onMarkerMouseLeave:this.onLocationHoverEnd,onMarkerClick:this.onPinSelected}),f("div",{className:`XvTUe ${A?P:""}`,children:f(w,{})}),f(k,{locations:[e],hoveredMarker:C,selectedMarker:L,visited:{},showSelectedMarker:O,onMouseEnter:this.onLocationHoverStart,onMouseLeave:this.onLocationHoverEnd,onClick:this.onPinSelected}),f("div",{className:"kQzAc w"}),I&&!!o&&o!==s&&f(m,{location:o}),!O&&s&&f(S,{location:s,autoPan:!0}),A&&f(p,{locations:x||[],selectedMarker:L,onSwipe:()=>{}}),f("div",{className:"YVSXC",children:f(d,{})}),H&&M&&f("div",{className:"EbHno",children:f(O?c:u,{onRedoSearch:this.onRedoSearch})}),f("div",{className:`ExeRZ ${A?P:""}`,children:f(h,{options:[l.hotels,l.restaurants,l.thingsToDo],selectedValues:this.state.selectedAlsoShowOptions,onValueChange:this.toggleAlsoShowOption,onClearOptions:this.clearAlsoShowOptions})})]})]})}},H=o(((e,t)=>({...t,viewportCategory:e.meta.device.viewportCategory})))(I),x=H,A=class extends s{render(){var e=`/data/1.0/mapsEnrichment/restaurant/${this.props.locationId}`;return f(L,{url:e,children:({loading:e,data:t,error:s})=>f(C,{children:this.props.children({loading:e,location:t,error:s})})})}},R=class extends s{render(){return f(C,{children:f(A,{locationId:this.props.locationId,children:({location:e})=>e?f("div",{style:{width:"100%",height:"100%"},children:f(x,{detailLocation:e,onClose:this.props.onClose})}):null})})}},O=class extends s{constructor(...e){super(...e),this.state={showMap:!1},this.hasPushedHash=!1,this.mapRadio=a("restaurant-detail-map"),this.openMap=()=>{history.pushState(null,document.title,"#MAPVIEW"),this.hasPushedHash=!0,this.checkHash()},this.checkHash=()=>{var e=b();this.setState({showMap:e})},this.closeMap=()=>{this.hasPushedHash?(window.history.back(),this.checkHash()):((()=>{var e=window.location.toString();if(e.indexOf("#")>0){var t=e.substring(0,e.indexOf("#"));window.history.replaceState(null,document.title,t)}})(),this.checkHash())}}componentDidMount(){this.mapRadio.on("open-trigger-clicked",this.openMap),this.mapRadio.on("close-trigger-clicked",this.closeMap),this.setState({showMap:b()}),window.addEventListener("popstate",this.checkHash),window.addEventListener("hashchange",this.checkHash,!1)}componentWillUnmount(){window.removeEventListener("popstate",this.checkHash),window.removeEventListener("hashchange",this.checkHash),this.mapRadio.off("open-trigger-clicked",this.openMap)}render(){var e,t;return f(C,{children:this.state.showMap&&f(i,{onClose:this.closeMap,children:f(R,{onClose:this.closeMap,locationId:null!=(e=this.props.locationId)?e:0,geoId:null!=(t=this.props.geoId)?t:0})})})}},y=o((e=>({locationId:e.page.detailId,geoId:e.page.geoId})))(O),e("default",y)},[e=>s=e.PureComponent,e=>o=e.connect,e=>a=e.createRadio,e=>i=e.default,e=>n=e.LatLng,e=>r=e.default,e=>(l=e.AlsoShowValues,h=e.AlsoShowControl),e=>d=e.default,e=>c=e.default,e=>p=e.default,e=>u=e.RedoSearchButton,e=>v=e.default,e=>w=e.default,e=>S=e.default,e=>m=e.default,e=>k=e.AnchorMarkers,e=>M=e.Icon,e=>(g=e.jsxs,f=e.jsx,C=e.Fragment),e=>L=e.default]]},["1o4yt4","12mj4n","1bqgab","17sf9j","49c7br","1ibnuo","j0casb","1us1vw","sfn9r6","kplral","7qvnt6","11vxup","1nv22h","y0u43e","1vmdfg","1kwwpu","1ybxsm","121h32","1lm2md"]]);

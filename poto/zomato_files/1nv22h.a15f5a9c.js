(this.$WP=this.$WP||[]).push(["1nv22h",(t,i)=>{"use strict";var a,e,s,n,o,r,c,h,l,p,d,u,L,k,m,v,g={icon:"/img2/maps/icons/my_location_dot.png",width:30,height:30,anchor:{x:15,y:15}},C=({variant:t="Square",onClick:i})=>{var e=p(),{map:s}=a(d),{localize:n}=l();return s?k(v,{map:s,tracker:e,deniedText:n.string("mw_js_positionPermissionDenied"),variant:t,onClick:i,ariaLabel:n.string("phoenix_maps_accessibility_locate_me")}):null};return[()=>{v=class extends e{constructor(...t){super(...t),this.state={trackingLocation:!1,active:!1},this.setInactive=()=>{this.setState({active:!1})},this.setMapInteractionListeners=()=>{var{map:t}=this.props;t&&t.once("panStart",this.setInactive)},this.clearMapInteractionListeners=()=>{var{map:t}=this.props;t&&t.off("panStart",this.setInactive)},this.moveMapToNewLocation=t=>{var{map:i}=this.props;i&&i.setCenter(t,16,!0)},this.isLatLngValid=t=>0!==t.lat||0!==t.lng,this.trackClick=()=>{this.props.tracker({module:"find_me",action:"find_me_click"})},this.askForLocation=()=>{if(this.trackClick(),this.setState({active:!0}),this.state.trackingHandler)this.state.userLocation&&(this.moveMapToNewLocation(this.state.userLocation),this.setMapInteractionListeners());else{var t=n(((t,i)=>{var a=new u(t,i);this.isLatLngValid(a)&&(this.state.trackingLocation||(this.moveMapToNewLocation(a),this.setMapInteractionListeners()),this.setState({userLocation:a,trackingLocation:!0}))}),(()=>{window.alert(this.props.deniedText),this.setState({active:!1,trackingHandler:null})}));this.setState({trackingHandler:t})}},this.onClickCircularFloatingActionButton=()=>{this.props.onClick&&this.props.onClick(),this.askForLocation()}}componentWillUnmount(){this.state.trackingHandler&&(o(this.state.trackingHandler),this.clearMapInteractionListeners())}render(){var t=this.state.userLocation?k(L,{position:this.state.userLocation,width:g.width,height:g.height,src:g.icon,anchor:g.anchor}):null;return"Circle"===this.props.variant?m("div",{children:[k(r,{icon:this.state.active?c:h,ariaLabel:this.props.ariaLabel,onClick:this.onClickCircularFloatingActionButton,onKeyDown:this.onClickCircularFloatingActionButton}),t]}):m("div",{children:[k("div",{className:"vlHxd Fh u V S8 H7",onClick:this.askForLocation,children:k("span",{className:s("gVSOm Z1 e c G5",this.state.active?"EggpQ":""),children:k(h,{})})}),t]})}},t("default",C)},[t=>(a=t.useContext,e=t.Component),t=>s=t.default,t=>(n=t.watchLocation,o=t.clearWatch),t=>r=t.CircularFloatingActionButton,t=>c=t.default,t=>h=t.default,t=>l=t.useLocalize,t=>p=t.useGARecorder,t=>(d=t.MapContext,u=t.LatLng,L=t.IconMarker),t=>(k=t.jsx,m=t.jsxs)]]},["1o4yt4","fkji80","168fm7","fm6nx5","hmc04z","1nc3gm","17thqz","32pwc7","49c7br","121h32"]]);

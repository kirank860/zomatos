(this.$WP=this.$WP||[]).push(["1mb2nz",(e,t)=>{"use strict";var n,s,o,r,i,u,c,d=()=>u,h=()=>{var[e,t]=n.useState(!1);return n.useEffect((()=>{u.then(t)}),[]),e},l=e=>h()?s(o,{children:e.children}):null,a=()=>{var[e,t]=n.useState(!1);return n.useEffect((()=>(t(!0),()=>{t(!1)})),[t]),e};return[()=>{u="undefined"==typeof fetch?new Promise((()=>{})):fetch("/static/decodeKey.txt",{method:"GET",redirect:"error",credentials:"same-origin"}).then((e=>!!e.ok)).catch((()=>!1)),e("MountedClientOnly",r=class extends n.Component{constructor(e){super(e),this.componentDidMount=()=>{this.setState({componentMounted:!0})},this.state={componentMounted:!1}}render(){return this.state.componentMounted?this.props.children:null}}),e("IsMountedClient",i=class extends n.Component{constructor(...e){super(...e),this.state={isClient:!1},this.setClient=()=>{this.setState({isClient:!0})}}componentDidMount(){this.props.rerenderLast?setTimeout(this.setClient,0):this.setClient()}render(){return this.props.children(this.state.isClient)}}),i.defaultProps={rerenderLast:!1},c=n.useLayoutEffect,e({IsMountedClient:i,MountedClientOnly:r,RobotSafeClientOnly:l,canFetchDecode:d,useClientSideLayoutEffect:c,useIsMounted:a,useIsRobotSafe:h})},[e=>n=e,e=>(s=e.jsx,o=e.Fragment)]]},["1o4yt4","121h32"]]);

(this.$WP=this.$WP||[]).push(["nbuwox",(r,t)=>{"use strict";var o,e,s,h,n,a;return[()=>{r("ErrorBoundaryWithPath$1",a=class extends e{constructor(r){super(r),this.logError=(r,t="ErrorBoundary")=>{this.props.shouldRecord&&console.error(`[${t}]`,r)},this.state={caughtError:null}}componentDidUpdate(r){null!==this.state.caughtError&&r.path!==this.props.path&&this.setState({caughtError:null})}componentDidCatch(r,t){try{this.setState({caughtError:{error:r,info:t}}),this.logError(r)}catch(r){this.logError(r,"ErrorBoundaryCatchFail")}finally{this.props.onError&&this.props.onError(r,t)}}render(){try{var{errorRenderer:r}=this.props,{caughtError:t}=this.state;if(t){var{error:o,info:e}=t;return r?h(n,{children:r(o,e)}):null}return h(n,{children:this.props.children})}catch(r){return this.logError(r,"ErrorBoundaryRenderFail"),null}}}),a.defaultProps={errorRenderer:void 0,shouldRecord:!0},r("ErrorBoundary",o(((r,t)=>{var{path:o}=s();return h(a,{...r,path:o,ref:t})})))},[r=>(o=r.forwardRef,e=r.Component),r=>s=r.useRoute,r=>(h=r.jsx,r.jsxs,n=r.Fragment)]]},["1o4yt4","fgwvq1","121h32"]]);

(this.$WP=this.$WP||[]).push(["sfn9r6",(e,t)=>{"use strict";var a,s,o,n,r,d,h,i,p,c=e=>{var{map:t}=a(d);return t&&h(p,{...e,map:t})};return[()=>{p=class extends s{constructor(e){super(e),this.onMapMoved=()=>{this.setState({mapHasMoved:!0})},this.onRedoSearch=()=>{r({module:"map_view",action:"redo"}),this.props.onRedoSearch(),this.setState({mapHasMoved:!1})},this.state={mapHasMoved:e.defaultVisible}}componentDidMount(){var{map:e}=this.props;e.on("centerChange",this.onMapMoved),e.on("zoomChange",this.onMapMoved)}componentWillUnmount(){var{map:e}=this.props;e.off("centerChange",this.onMapMoved),e.off("zoomChange",this.onMapMoved)}render(){return this.state.mapHasMoved&&i("div",{className:"uTNTn _T d C4 _S",onClick:this.onRedoSearch,children:[h(n,{name:"refresh",className:"TjxTI d"}),h("span",{className:"TIAqX d _T Nf W7",children:h(o,{id:"map_search_redo_search_button_text"})})]})}},c.defaultProps={defaultVisible:!1},e("default",c)},[e=>(a=e.useContext,s=e.PureComponent),e=>o=e.default,e=>n=e.Icon,e=>r=e.default,e=>d=e.MapContext,e=>(h=e.jsx,i=e.jsxs)]]},["1o4yt4","17thqz","1ybxsm","4axon3","49c7br","121h32"]]);
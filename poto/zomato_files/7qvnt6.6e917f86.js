(this.$WP=this.$WP||[]).push(["7qvnt6",(e,a)=>{"use strict";var t,o,s,i,r,n,h,c,l,d,u,p,m,C,v,k,S,b=e=>{var[a,i]=t(e.defaultVisible),r=l(),{localize:n}=c(),d=o((()=>{i(!0)}),[]),{map:u}=e;s((()=>(u.on("centerChange",d),u.on("zoomChange",d),()=>{u.off("centerChange",d),u.off("zoomChange",d)})),[u,d]);var k=o((()=>{r({module:"map_view",action:"redo"}),e.onRedoSearch(),i(!1)}),[e,r]);if("Rounded"===e.variant){var S=n.string("map_search_redo_search_button_text");return a?v("div",{children:[e.visibilityTracker,C(m,{label:S,ariaLabel:S,onClick:k})]}):null}return a?v("div",{className:"zVaoM d R2 _T _S C4",onClick:k,children:[C("span",{className:"DnICp",children:C(p,{})}),C("span",{className:"PuwCR _T H5 C4 W7",children:C(h,{id:"map_search_redo_search_button_text"})})]}):null},f=e=>C(u,{children:({map:a})=>a?C(b,{...e,map:a}):null}),M=e=>{var a=d({module:"search_toggle",action:"active"}),t=d({module:"search_toggle",action:"inactive"});return C(k,{trackCheckboxClick:e=>e?a():t(),...e})},_=e=>C(u,{children:({map:a})=>a&&C(M,{defaultChecked:e.defaultChecked,onRedoSearch:e.onRedoSearch,map:a,variant:e.variant,onClickRedoSearchButton:e.onClickRedoSearchButton,onClickSearchAsIMoveMapButton:e.onClickSearchAsIMoveMapButton,searchThisAreaVisibilityTracker:e.searchThisAreaVisibilityTracker})});return[()=>{f.defaultProps={defaultVisible:!1},S=f,(k=class extends i{constructor(...e){super(...e),this.state={autoSearchEnabled:null,mapHasMoved:!1,hasHadUserInteraction:!1},this.onCheckboxClicked=()=>{var e=null===this.state.autoSearchEnabled?!this.props.defaultChecked:!this.state.autoSearchEnabled;this.props.onClickSearchAsIMoveMapButton&&this.props.onClickSearchAsIMoveMapButton(e),this.props.trackCheckboxClick(e),this.setState({autoSearchEnabled:e,hasHadUserInteraction:!0})},this.onMapMoved=e=>{this.isAutoSearchEnabled()?this.onAutoSearch(e.userGesture):this.setState({mapHasMoved:!0,hasHadUserInteraction:e.userGesture})},this.onAutoSearch=e=>{this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout((()=>{this.props.onRedoSearch(!0,e),this.timeout=null}),0),this.setState({mapHasMoved:!1})},this.onManualRedoSearch=()=>{this.props.onClickRedoSearchButton&&this.props.onClickRedoSearchButton(),this.props.onRedoSearch(!1,!0),this.setState({mapHasMoved:!1,hasHadUserInteraction:!0})},this.timeout=void 0}componentDidMount(){var{map:e}=this.props;e.on("centerChange",this.onMapMoved),e.on("zoomChange",this.onMapMoved)}componentWillUnmount(){var{map:e}=this.props;e.off("centerChange",this.onMapMoved),e.off("zoomChange",this.onMapMoved),this.timeout&&clearTimeout(this.timeout)}isAutoSearchEnabled(){return null!==this.state.autoSearchEnabled?this.state.autoSearchEnabled:this.props.defaultChecked}render(){var e=this.isAutoSearchEnabled();return!this.isAutoSearchEnabled()&&this.state.mapHasMoved&&this.state.hasHadUserInteraction?C(S,{onRedoSearch:this.onManualRedoSearch,defaultVisible:!0,variant:this.props.variant,visibilityTracker:this.props.searchThisAreaVisibilityTracker}):"Rounded"===this.props.variant?C("div",{className:"PtEBg",children:C(n,{value:"autoSearchToggle",label:C(h,{id:"map_auto_search_label"}),textVariant:"button-01",theme:"on-light",checked:!!e,onToggle:this.onCheckboxClicked})}):C("div",{className:"ratNO _T _S",children:v("div",{className:"xOtHm _T",onClick:this.onCheckboxClicked,children:[C("div",{className:"rsyTX _T c",children:e&&C("span",{className:"ESOgH",children:C(r,{})})}),C("span",{className:"CbChH H5 W7",children:C(h,{id:"map_auto_search_label"})})]})})}}).defaultProps={defaultChecked:!1,variant:"Rectangular"},_.defaultProps={defaultChecked:!1,variant:"Rectangular"},e({AutoSearchToggle:_,RedoSearchButton:S})},[e=>(t=e.useState,o=e.useCallback,s=e.useEffect,i=e.PureComponent),e=>r=e.default,e=>n=e.Checkbox,e=>(h=e.default,c=e.useLocalize),e=>(l=e.useGARecorder,d=e.useGARecordCallback),e=>u=e.MapContextConsumer,e=>p=e.default,e=>m=e.TextFloatingActionButton,e=>(C=e.jsx,v=e.jsxs)]]},["1o4yt4","1kq4q2","frf6ac","17thqz","32pwc7","49c7br","1v5ce8","fm6nx5","121h32"]]);

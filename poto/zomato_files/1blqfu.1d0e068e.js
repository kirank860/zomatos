(this.$WP=this.$WP||[]).push(["1blqfu",(e,s)=>{"use strict";var t,r,i,n,p;return[()=>{(p=class extends t{constructor(...e){super(...e),this.openLink=()=>{n().then((e=>{if(this.props.encodedUrl&&!0===e){var s=i(this.props.encodedUrl);if(""!==s){this.props.requiresHttp&&(s=`http://${s}`);var t=window.open(s,this.props.target);t&&(t.opener=null)}}}))},this.handleClick=e=>{this.props.onClick&&this.props.onClick(e),this.openLink()}}render(){return r(this.props.useSpan?"span":"div",{className:this.props.className,onClick:this.handleClick,"data-encoded-url":this.props.encodedUrl},this.props.children)}}).defaultProps={target:"_self",onClick:void 0,children:null,className:"ui_link",encodedUrl:void 0,urlArgs:{},useSpan:!1,requiresHttp:!1},e("default",p)},[e=>(t=e.Component,r=e.createElement),e=>i=e.default,e=>n=e.canFetchDecode]]},["1o4yt4","1j8lyt","1mb2nz"]]);

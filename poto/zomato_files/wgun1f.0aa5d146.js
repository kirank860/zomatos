(this.$WP=this.$WP||[]).push(["wgun1f",(t,e)=>{"use strict";var i,s,a,o,n,l,r,h,p,c,d,C,u,S,g="kXSKh";function m({text:t,max:e}){if(t.length<e)return t;var i=e-3,s=t.lastIndexOf(" ",i);return s<0?`${t.substring(0,i)}...`:`${t.substring(0,s)}...`}var v=t=>l(r,{children:m(t)}),f=({children:t,contentLanguage:e,truncate:i})=>{var s,n=(s=e)?s.match(/^(ar|iw)/i)?"rtl":"ltr":"auto",h=a();return"auto"===n||i||"rtl"===n!==h?l("span",{className:o({"_R W q o":i}),dir:n,children:t}):l(r,{children:t})},T=t=>l("span",{className:"sxbQh _S",children:l("u",{children:t.children})});return t("abbreviateToString",m),[()=>{(p=class t extends i.Component{constructor(e){super(e),this.componentDidUpdate=t=>{void 0!==this.props.collapsed&&this.props.collapsed!==t.collapsed&&!!this.props.collapsed!==this.state.collapsed?this.props.collapsed?this.computeState():this.revealHiddenContent():this.props.numLinesToShow===t.numLinesToShow&&this.props.alwaysShowReadMore===t.alwaysShowReadMore||this.computeState()},this.setStateCallback=()=>{this.props.onStateChange&&this.props.onStateChange(this.state)},this.getContentDiv=()=>{var t;return null==(t=this.contentRef)?void 0:t.current},this.computeState=()=>{var t=this.findFirstTextNodeParent(this.getContentDiv());if(t){var e=window.getComputedStyle(t),i=e.getPropertyValue("line-height"),s=e.getPropertyValue("font-size");i&&"normal"!==i?i=i.replace("px",""):(s=s?s.replace("px",""):"14",i=Math.floor(1.2*parseFloat(s.toString())).toString());var a=+s,o=+i,n={scrollHeight:this.getScrollHeight(),fontSize:a,lineHeight:o},l=this.computeStateFromStyles(n);this.hasCollapsibleContent=n.scrollHeight>o*this.props.numLinesToShow,this.setState({...l},this.setStateCallback)}else this.revealHiddenContent()},this.findFirstTextNodeParent=t=>{if(!t||!t.childNodes)return null;for(var e=0;e<t.childNodes.length;e++){var i=t.childNodes.item(e);if(i.nodeType===Node.TEXT_NODE)return t;var s=this.findFirstTextNodeParent(i);if(s)return s}return null},this.revealHiddenContent=()=>{this.setState({...this.contentRevealedState},this.setStateCallback)},this.collapseContent=()=>{this.computeState()},this.clickAction=e=>{switch(e){case t.CTA:return"expand";case t.CTA_COLLAPSE:return"collapse";case t.CONTENT:return this.state.collapsed?"expand":this.props.contentClickCanCollapseContent?"collapse":"nothing";default:return"nothing"}},this.handleClick=t=>{if(this.props.clickCallback(t))switch(this.clickAction(t)){case"expand":this.revealHiddenContent(),this.props.onExpandTriggeredByClick&&this.props.onExpandTriggeredByClick();break;case"collapse":this.collapseContent(),this.props.onCollapseTriggeredByClick&&this.props.onCollapseTriggeredByClick()}},this.contentRevealedState={initialHide:!1,collapsed:!1,divHeight:"none",disableContentCursorPointer:!0},this.contentRef=null,this.ctaStyles=void 0,this.collapsedCtaStyles=void 0,this.variantCssClass="",this.hasCollapsibleContent=!1,this.computeStateFromStyles=t=>(console.error(`${this.constructor.name} did not provide its own implementation of computeStateFromStyles()`),t.scrollHeight,t.fontSize,t.lineHeight,this.state),this.defaultCTA=()=>n("div",{className:"rxMLQ",children:[l("span",{className:"avUHH"}),l("span",{className:g,children:this.props.ctaText?this.props.ctaText:l(s,{id:"common_Read_more"})})]}),this.defaultCollapseCTA=()=>l("div",{className:g,children:this.props.ctaCollapseText?this.props.ctaCollapseText:l(s,{id:"common_Readless"})}),this.state=!1!==e.collapsed?{initialHide:e.ctaHiddenInitially||!1,collapsed:!0,divHeight:e.initialDivHeight?e.initialDivHeight:"none",disableContentCursorPointer:!1}:{initialHide:e.ctaHiddenInitially||!1,collapsed:!1,divHeight:"none",disableContentCursorPointer:!1},this.contentRef=i.createRef(),this.ctaStyles={}}componentDidMount(){this.state.collapsed&&this.computeState()}getScrollHeight(){var t,e;return null!=(t=null==(e=this.getContentDiv())?void 0:e.scrollHeight)?t:0}render(){var e,i=()=>this.handleClick(t.CTA),s=this.props.cta;return e=s?"function"==typeof s?s(i):s:this.defaultCTA(),n("div",{className:o("_T",this.variantCssClass,this.props.customCssClass?this.props.customCssClass:"",this.state.collapsed?"bmUTE":""),children:[l("div",{ref:this.contentRef,className:o("fIrGe _T",{bgMZj:this.props.webkitLineClamp}),style:{maxHeight:this.props.webkitLineClamp?void 0:this.state.divHeight,WebkitLineClamp:this.props.webkitLineClamp&&this.state.collapsed?this.props.numLinesToShow:void 0,lineBreak:"normal",cursor:this.props.contentCursorPointer&&!0!==this.state.disableContentCursorPointer||this.props.contentCursorPointer&&this.props.collapsible&&!this.state.collapsed&&(this.props.alwaysShowReadMore||this.hasCollapsibleContent||!this.props.collapsed&&this.props.showCTAWhenCollapsedPropFalse)?"pointer":"auto"},onClick:()=>this.handleClick(t.CONTENT),children:this.props.children}),l("div",{className:o(this.state.initialHide?"jFhvd":"",this.props.ctaNewline?"lszDU":"WCuqd"),style:this.ctaStyles,onClick:()=>"function"!=typeof s&&i(),children:e}),this.props.collapsible&&!this.state.collapsed&&(this.props.alwaysShowReadMore||this.hasCollapsibleContent||!this.props.collapsed&&this.props.showCTAWhenCollapsedPropFalse)&&l("div",{className:"JTbpC",style:this.collapsedCtaStyles||this.ctaStyles,onClick:()=>this.handleClick(t.CTA_COLLAPSE),children:this.props.ctaCollapse?this.props.ctaCollapse:this.defaultCollapseCTA()})]})}}).defaultProps={cta:null,ctaText:null,numLinesToShow:4,initialDivHeight:16,customCssClass:"",clickCallback:t=>!0,collapsible:!1,ctaNewline:!1,alwaysShowReadMore:!1,collapsed:void 0,showCTAWhenCollapsedPropFalse:void 0,contentClickCanCollapseContent:!1,contentCursorPointer:!1,webkitLineClamp:!1,ctaHiddenInitially:!1},p.CONTENT="CONTENT",p.CTA="CTA",p.CTA_COLLAPSE="CTA_COLLAPSE",u=p,t("ReadMore",c=class extends u{constructor(t){super(t),this.computeStateFromStyles=t=>{var e=t.lineHeight*this.props.numLinesToShow;return this.ctaStyles={fontSize:`${t.fontSize}px`,lineHeight:`${t.lineHeight}px`},t.scrollHeight<=e?this.props.alwaysShowReadMore?{initialHide:!1,collapsed:!0,divHeight:"initial",disableContentCursorPointer:!1}:this.contentRevealedState:this.state.divHeight!==e?{initialHide:!1,collapsed:!0,divHeight:e,disableContentCursorPointer:!1}:this.state},this.variantCssClass="FKffI"}}),t("ReadMoreFadeOut",d=class extends u{constructor(t){super(t),this.computeStateFromStyles=t=>{if(t.scrollHeight<=t.lineHeight*this.props.numLinesToShow)return this.contentRevealedState;var e=t.lineHeight*(this.props.numLinesToShow+1);return this.state.divHeight!==e?(this.ctaStyles={fontSize:`${t.fontSize}px`,lineHeight:`${t.lineHeight}px`,backgroundImage:`linear-gradient(rgba(255, 255, 255, 0) 0px, white ${t.lineHeight}px)`,paddingTop:`${t.lineHeight}px`},this.collapsedCtaStyles={fontSize:`${t.fontSize}px`,lineHeight:`${t.lineHeight}px`,backgroundImage:`linear-gradient(rgba(255, 255, 255, 0) 0px, white ${t.lineHeight}px)`},{initialHide:!1,collapsed:!0,divHeight:e,disableContentCursorPointer:!1}):this.state},this.variantCssClass="uklED"}}),S=v,t("AutoResizer",C=class extends i.Component{constructor(t){super(t),this.makeFit=()=>{if(this.containerRef&&!(this.state.numIters>=4)){var{scrollWidth:t=0,clientWidth:e=0,style:{paddingLeft:i="",paddingRight:s="",fontSize:a=""}={}}=this.containerRef,o=parseFloat(a);if(!(e>=t||e<=0||o<=this.props.minFontSizePx)){var n=(parseFloat(i)||0)+(parseFloat(s)||0),l=(e-n)/(t-n);3===this.state.numIters&&(l=.9);var r=Math.max(o*l,this.props.minFontSizePx);this.setState({resizedFontSize:r,numIters:this.state.numIters+1},this.makeFit)}}},this.resizeCallback=()=>{this.setState({resizedFontSize:this.props.defaultFontSizePx,numIters:0},this.makeFit)},this.containerRef={},this.state={resizedFontSize:t.defaultFontSizePx,numIters:0}}componentDidMount(){this.makeFit()}render(){return n("div",{style:{fontSize:this.state.resizedFontSize},ref:t=>{this.containerRef=t},className:this.props.className,children:[this.props.children,this.props.resizeOnScreenResize?l(h,{callback:this.resizeCallback,useDebounce:!0}):null]})}}),C.defaultProps={minFontSizePx:8,defaultFontSizePx:14,resizeOnScreenResize:!1},t({Abbreviate:S,AutoResizer:C,DirectionalText:f,DottedUnderline:T,ReadMore:c,ReadMoreFadeOut:d,abbreviateToString:m})},[t=>i=t,t=>(s=t.default,a=t.useRtl),t=>o=t.default,t=>(n=t.jsxs,l=t.jsx,r=t.Fragment),t=>h=t.default]]},["1o4yt4","17thqz","fkji80","121h32","d6vj30"]]);
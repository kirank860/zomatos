(this.$WP=this.$WP||[]).push(["138pxm",(t,i)=>{"use strict";var e,s,n,r,o,l,a,h,d,p,c,u,f,S,m,v,g,w,T,x=({variant:t,direction:i,disabled:r,onClick:o,lowerScrollButton:a})=>{var{localize:h}=d(),[p,g]=e(!1);s((()=>{r&&g(!0)}),[r]);var w=n((()=>g(!1)),[]),T=((t,i)=>"chevron"===t?"left"===i?S:m:"left"===i?u:f)(t,i);return v("span",{className:l("uRUfJ _Q",{"MsBGw Y X":r,OxiRT:p,rITZf:a}),onMouseEnter:w,onMouseOut:w,onBlur:w,children:v(c,{icon:T,variant:"primary-border","aria-label":"left"===i?h.string("common_Previous"):h.string("common_Next"),disabled:r,onClick:o})})},I="KMeEM _Z",P="wCuNB t Z1 S w _Z",y=({className:t,disabled:i,preventDefaultTouchmoveEvent:e,onSwiping:s,onSwiped:n,children:r})=>{var l=o({delta:3,trackMouse:!0,preventScrollOnSwipe:e,onSwiping:i?void 0:s,onSwiped:i?void 0:n});return v("div",{...l,className:t,children:r})},b=t=>{var i=p();return v(w,{...t,isRtl:i})};return[()=>{T=x,w=class extends r{constructor(t){super(t),this.selectedOffsetPx=0,this.swipeOffsetPx=0,this.transitionTimeout=null,this.throttledSlideToIndex=a(((...t)=>this.slideToIndex(...t)),this.props.slideDuration,!0),this.onSliding=t=>{this.updateSlidesContainer(),this.state.isTransitioning&&(this.transitionTimeout&&(clearTimeout(this.transitionTimeout),this.transitionTimeout=null),this.transitionTimeout=setTimeout((()=>{this.setState({isTransitioning:!1})}),t+50))},this.imageGallery=void 0,this.slideContainer=void 0,this.leftScrollButtonWrapper=void 0,this.throttledSlideToIndex=void 0,this.slideToIndex=(t,i=!0)=>{if(0!==this.props.items.length){var e=this.props.items.length-1,s=t;t<0?s=0:t>e&&(s=e);var n=this.slideContainer?this.slideContainer.children[0].offsetWidth:0,r=-s*n,o=this.selectedOffsetPx+this.swipeOffsetPx,l=Math.abs(o-r)/n,a=l>5?0:this.props.slideDuration*l;this.selectedOffsetPx=r,this.swipeOffsetPx=0,this.setState({currentIndex:s,isTransitioning:i&&r!==o,slidesTransitionStyle:`all ${a}ms ease-in-out`},(()=>this.onSliding(a))),this.props.onSlide&&this.props.onSlide(s)}},this.handleKeyDown=t=>{switch(parseInt(t.keyCode||t.which||0,10)){case 37:this.canSlideLeft()&&this.slideLeft();break;case 39:this.canSlideRight()&&this.slideRight()}},this.areScrollButtonsPresent=()=>!!this.leftScrollButtonWrapper&&"none"!==window.getComputedStyle(this.leftScrollButtonWrapper).getPropertyValue("display"),this.handleOnSwiped=({event:t,deltaX:i,velocity:e})=>{if(this.props.stopPropagation&&t.stopPropagation(),!this.areScrollButtonsPresent()){var s=e>(this.props.flickThreshold||.6);this.setState({isScrolling:!1});var n=i>0?-1:1;this.handleOnSwipedTo(n,s)}},this.handleSwiping=({event:t,deltaX:i})=>{if(this.props.stopPropagation&&t.stopPropagation(),!this.areScrollButtonsPresent()){var{isTransitioning:e}=this.state;this.swipeOffsetPx=e?0:i,this.state.isScrolling||this.setState({isScrolling:!0}),this.updateSlidesContainer()}},this.slideLeft=()=>{var t=this.state.currentIndex-1;this.props.throttle&&this.throttledSlideToIndex?this.throttledSlideToIndex(t):this.slideToIndex(t)},this.slideRight=()=>{var t=this.state.currentIndex+1;this.props.throttle&&this.throttledSlideToIndex?this.throttledSlideToIndex(t):this.slideToIndex(t)},this.state={currentIndex:t.startIndex,isScrolling:!1,slidesTransitionStyle:""}}componentDidMount(){this.slideToIndex(this.props.startIndex,!1)}componentDidUpdate(t){t.slideDuration!==this.props.slideDuration&&(this.throttledSlideToIndex=a(((...t)=>this.slideToIndex(...t)),this.props.slideDuration,{trailing:!1})),t.startIndex!==this.props.startIndex&&this.props.startIndex!==this.state.currentIndex&&this.slideToIndex(this.props.startIndex,this.props.items===t.items)}componentWillUnmount(){this.transitionTimeout&&(clearTimeout(this.transitionTimeout),this.transitionTimeout=null)}getSlideStyle(t){var i=`translate3d(${-50*(this.props.isRtl?-1:1)+100*t}%, 0, 0)`,e=this.props.itemSpacing/2+"px";return{WebkitTransform:i,MozTransform:i,msTransform:i,OTransform:i,transform:i,paddingLeft:e,paddingRight:e}}canNavigate(){return this.canSlideLeft()||this.canSlideRight()}canSlideLeft(){return this.state.currentIndex>0}canSlideRight(){return this.state.currentIndex<this.props.items.length-1}handleOnSwipedTo(t,i){if(this.slideContainer){var e,{currentIndex:s}=this.state,n=s,r=this.slideContainer.children[0].offsetWidth,o=this.swipeOffsetPx/r*100;e=o,Math.abs(e)>50?n+=t*Math.round(Math.abs(o)/100):i&&(n+=t),t<0?this.canSlideLeft()||(n=s):this.canSlideRight()||(n=s),this.slideToIndex(n,!0)}}updateSlidesContainer(){this.slideContainer&&(this.slideContainer.style.transform=`translate3d(${this.selectedOffsetPx+this.swipeOffsetPx}px, 0px, 0px)`,this.slideContainer.style.transition=this.state.isTransitioning?this.state.slidesTransitionStyle:"")}render(){var{preventDefaultTouchmoveEvent:t}=this.props,{isScrolling:i}=this.state,e=[],s=0;this.props.items.forEach(((t,i)=>{var n=this.getSlideStyle(i),r=v("div",{className:"LZsaY X1 s",style:n,onMouseUp:t=>{this.state.isScrolling&&(t.stopPropagation(),t.preventDefault())},children:v("div",{className:!this.props.noSlideShadow&&"ZmDiD R4 o",children:t})},s);e.push(r),s+=1}));var n=v("div",{className:"gIfoA _Z",children:this.canNavigate()?g("div",{className:"w _Z",children:[this.props.showScrollButtons&&v("div",{className:l(P,"DTGzP"),ref:t=>(this.leftScrollButtonWrapper=t,t),children:v(T,{variant:this.props.scrollButtonVariant,direction:"left",disabled:!this.canSlideLeft(),onClick:this.slideLeft,lowerScrollButton:this.props.lowerScrollButton})}),v(y,{className:"w _Z",onSwiping:this.handleSwiping,onSwiped:this.handleOnSwiped,disabled:!!this.state.isTransitioning,preventDefaultTouchmoveEvent:t||i,children:v("div",{ref:t=>(this.slideContainer=t,t),className:I,children:e})},"swipeable"),this.props.showScrollButtons&&v("div",{className:l(P,"DksJr"),children:v(T,{variant:this.props.scrollButtonVariant,direction:"right",disabled:!this.canSlideRight(),onClick:this.slideRight,lowerScrollButton:this.props.lowerScrollButton})})]},"navigation"):v("div",{className:I,children:e})});return v("div",{ref:t=>(this.imageGallery=t,t),className:"V _F _Z","aria-live":"polite",children:g("div",{className:"sbtti _Z",children:[n,!this.props.disableArrowKeys&&v(h,{keyName:["ArrowLeft","ArrowRight","Left","Right"],callback:this.handleKeyDown})]})})}},b.defaultProps={flickThreshold:.6,itemSpacing:16,disableArrowKeys:!1,preventDefaultTouchmoveEvent:!0,startIndex:0,slideDuration:300,swipingTransitionDuration:0,stopPropagation:!0,throttle:!0,showScrollButtons:!1,lowerScrollButton:!1},t("default",b)},[t=>(e=t.useState,s=t.useEffect,n=t.useCallback,r=t.PureComponent),t=>o=t.useSwipeable,t=>l=t.default,t=>a=t.default,t=>h=t.default,t=>(d=t.useLocalize,p=t.useRtl),t=>c=t.CircularButton,t=>u=t.default,t=>f=t.default,t=>S=t.default,t=>m=t.default,t=>(v=t.jsx,g=t.jsxs)]]},["1o4yt4","19w33l","fkji80","dsbyen","1gttbj","17thqz","jppfwt","a6i9w3","6qmqhw","17nq86","7a7jm3","121h32"]]);

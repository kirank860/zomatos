(this.$WP=this.$WP||[]).push(["yk7it8",(t,e)=>{"use strict";var r,n,a,s,o,u=(t,e,r,n)=>{var a=e-t,s=n?0:-.5,o=Math.floor((t+s)/2),u=t-1,i=e-1,c=n?-.5:0,d=Math.floor((t+c)/2),l=Math.max(0,Math.min(a,r-o)),m=Math.min(i,Math.max(u,r+d));return Array(m-l+1).fill().map(((t,e)=>l+e))},i=(t="white")=>{var e,r,n;switch(t){case"white":e="sWDGS",r="HfKGv",n="rFcwj";break;case"darkGreyMedium":e="VJLyl",r="uzWDv",n="xLYFG";break;default:e="WpOqZ",r="JykLH",n="rMzZM"}return{activeDotStyle:e,dotStyle:r,containerStyle:n}},c=(t,e,r,n,a=20)=>{var s;return{transform:`translate3d(${n?"-":""}${a*t}px, 0, 0) scale3d(${s=0===t||t===e+1?0:r?1.3:1}, ${s}, 1)`}},d=t=>{var e=n();return s(o,{...t,rtl:e})};return[()=>{t("IndicatorDotsUnconnected",o=class extends r{static getDerivedStateFromProps(t,e){return{directionUp:t.currentIndex>=e.currentIndex,numDots:t.numItems<t.numDots?t.numItems:t.numDots,currentIndex:t.currentIndex}}constructor(t){super(t),this.state={directionUp:!0,numDots:t.numItems<t.numDots?t.numItems:t.numDots,currentIndex:t.currentIndex}}render(){var{numItems:t,rtl:e,dotTheme:r,dotSpacing:n=20}=this.props,{numDots:o,currentIndex:d,directionUp:l}=this.state,{activeDotStyle:m,dotStyle:h,containerStyle:p}=i(r);if(o<=1)return null;var D=u(o,t,d,l);D.unshift(D[0]-1),D.push(D[o]+1);var y=D.map(((t,r)=>{var u=t===d;return s("div",{className:a("gqkHJ u f",u?m:null,h),style:c(r,o,u,e,n)},`indicator-dot-${t}`)}));return s("div",{className:a("xrpyC l _U f u j",p,this.props.whiteBackground?null:"Pphsm",{"YztkX w":"greyMobile"===r}),children:s("div",{className:"CKBaw",style:{width:(o+1)*n+6+"px"},"data-clicksource":"IndicatorDot",children:y})})}}),o.defaultProps={rtl:!1,dotSpacing:20,dotTheme:"white"},t({ACTIVE_DOT_SCALE:1.3,BOOKEND_DOT_SCALE:0,IndicatorDotsUnconnected:o,default:d,getDotRange:u,getDotStyle:c,getDotStyleClasses:i})},[t=>r=t.PureComponent,t=>n=t.useRtl,t=>a=t.default,t=>s=t.jsx]]},["1o4yt4","17thqz","fkji80","121h32"]]);
(this.$WP=this.$WP||[]).push(["19w33l",(e,t)=>{"use strict";var n,s,i="Left",r="Right",a="Down",c={first:!0,initial:[0,0],start:0,swiping:!1,xy:[0,0]},o="mousemove",u="mouseup";function p(e,t){if(0===t)return e;var n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function l(e){var t,{trackMouse:l}=e,v=n.useRef(Object.assign({},c)),O=n.useRef(Object.assign({},s)),h=n.useRef(Object.assign({},O.current));for(t in h.current=Object.assign({},O.current),O.current=Object.assign(Object.assign({},s),e),s)void 0===O.current[t]&&(O.current[t]=s[t]);var[g,b]=n.useMemo((()=>function(e,t){var n=t=>{var n="touches"in t;n&&t.touches.length>1||e(((e,s)=>{s.trackMouse&&!n&&(document.addEventListener(o,l),document.addEventListener(u,O));var{clientX:i,clientY:r}=n?t.touches[0]:t,a=p([i,r],s.rotationAngle);return s.onTouchStartOrOnMouseDown&&s.onTouchStartOrOnMouseDown({event:t}),Object.assign(Object.assign(Object.assign({},e),c),{initial:a.slice(),xy:a,start:t.timeStamp||0})}))},l=t=>{e(((e,n)=>{var c="touches"in t;if(c&&t.touches.length>1)return e;if(t.timeStamp-e.start>n.swipeDuration)return e.swiping?Object.assign(Object.assign({},e),{swiping:!1}):e;var{clientX:o,clientY:u}=c?t.touches[0]:t,[l,v]=p([o,u],n.rotationAngle),O=l-e.xy[0],h=v-e.xy[1],g=Math.abs(O),b=Math.abs(h),d=(t.timeStamp||0)-e.start,w=Math.sqrt(g*g+b*b)/(d||1),j=[O/(d||1),h/(d||1)],S=function(e,t,n,s){return e>t?n>0?r:i:s>0?a:"Up"}(g,b,O,h),f="number"==typeof n.delta?n.delta:n.delta[S.toLowerCase()]||s.delta;if(g<f&&b<f&&!e.swiping)return e;var T={absX:g,absY:b,deltaX:O,deltaY:h,dir:S,event:t,first:e.first,initial:e.initial,velocity:w,vxvy:j};T.first&&n.onSwipeStart&&n.onSwipeStart(T),n.onSwiping&&n.onSwiping(T);var m=!1;return(n.onSwiping||n.onSwiped||n[`onSwiped${S}`])&&(m=!0),m&&n.preventScrollOnSwipe&&n.trackTouch&&t.cancelable&&t.preventDefault(),Object.assign(Object.assign({},e),{first:!1,eventData:T,swiping:!0})}))},v=t=>{e(((e,n)=>{var s;if(e.swiping&&e.eventData){if(t.timeStamp-e.start<n.swipeDuration){s=Object.assign(Object.assign({},e.eventData),{event:t}),n.onSwiped&&n.onSwiped(s);var i=n[`onSwiped${s.dir}`];i&&i(s)}}else n.onTap&&n.onTap({event:t});return n.onTouchEndOrOnMouseUp&&n.onTouchEndOrOnMouseUp({event:t}),Object.assign(Object.assign(Object.assign({},e),c),{eventData:s})}))},O=e=>{document.removeEventListener(o,l),document.removeEventListener(u,O),v(e)},h=(e,t)=>{var i=()=>{};if(e&&e.addEventListener){var r=Object.assign(Object.assign({},s.touchEventOptions),t.touchEventOptions),a=[["touchstart",n,r],["touchmove",l,Object.assign(Object.assign({},r),t.preventScrollOnSwipe?{passive:!1}:{})],["touchend",v,r]];a.forEach((([t,n,s])=>e.addEventListener(t,n,s))),i=()=>a.forEach((([t,n])=>e.removeEventListener(t,n)))}return i},g={ref:t=>{null!==t&&e(((e,n)=>{if(e.el===t)return e;var s={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),s.cleanUpTouch=void 0),n.trackTouch&&t&&(s.cleanUpTouch=h(t,n)),Object.assign(Object.assign(Object.assign({},e),{el:t}),s)}))}};return t.trackMouse&&(g.onMouseDown=n),[g,h]}((e=>v.current=e(v.current,O.current)),{trackMouse:l})),[l]);return v.current=function(e,t,n,s){return t.trackTouch&&e.el?e.cleanUpTouch?t.preventScrollOnSwipe!==n.preventScrollOnSwipe||t.touchEventOptions.passive!==n.touchEventOptions.passive?(e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:s(e.el,t)})):e:Object.assign(Object.assign({},e),{cleanUpTouch:s(e.el,t)}):(e.cleanUpTouch&&e.cleanUpTouch(),Object.assign(Object.assign({},e),{cleanUpTouch:void 0}))}(v.current,O.current,h.current,b),g}return e("useSwipeable",l),[()=>{s={delta:10,preventScrollOnSwipe:!1,rotationAngle:0,trackMouse:!1,trackTouch:!0,swipeDuration:1/0,touchEventOptions:{passive:!0}},e({DOWN:a,LEFT:i,RIGHT:r,UP:"Up",useSwipeable:l})},[e=>n=e]]},["1o4yt4"]]);

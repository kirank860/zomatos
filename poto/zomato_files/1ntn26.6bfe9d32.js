(this.$WP=this.$WP||[]).push(["1ntn26",(e,l)=>{"use strict";var n,a,i,t,r,o,u,s,d,c,f,m,v,p,g,h,b,y,k,C,I,w,T,D,M,N,x,z,B,K,E,H=({menuItemsData:e,variant:l,maxHeight:a,onClose:i,customHorizontalCaretPosition:t,selectedItemKey:r,fullscreenOverlayTitle:o,labelId:u,role:m,itemRole:k,onKeyDown:I,loading:w=!1,isKeyboardMode:N=!1,useInputMenuTrigger:x=!1})=>{var{localize:z}=y(),[K,E]=n.useState(x);b("MOBILE"===s());var H=n.useRef(null),L=n.useRef(null),R={};if(null!=t&&t<34){var P=34-t;R="leading-bottom-caret"===l||"leading-top-caret"===l?{left:`-${P}px`}:{right:`-${P}px`}}n.useEffect((()=>{var e;x||null==(e=L.current)||e.focus()}),[x]),n.useEffect((()=>{var l,n=e.find((e=>e.key===r));if(null!=(null==n||null==(l=n.ref)?void 0:l.current)&&null!=L.current){var a=L.current,i=n.ref.current;if(a.scrollHeight>a.clientHeight){var t=i.offsetTop+i.offsetHeight-(a.offsetTop+a.offsetHeight)+16,o=i.offsetTop-a.offsetTop-16;a.scrollTop=Math.max(t,Math.min(o,a.scrollTop))}}}),[e,r]);var j=e=>{var l;e.target instanceof Node&&null!=(l=H.current)&&l.contains(e.target)||K||i&&i(),K&&E(!1)};g("click",j,void 0,!0),g("touchend",j,void 0,!0),p("Escape",i);var W=w?D("div",{className:"gpERH f j u e",children:[T(c,{marginBottom:"spacing-02",variant:"supporting-01",children:z.string("airm_loadingDotDotDot")}),T(C,{variant:"medium"})]}):T(M,{children:T("ul",{role:m,"aria-labelledby":u,"aria-activedescendant":null!=r?`menu-item-${r}`:void 0,tabIndex:-1,className:"IIbRQ _g z",style:{maxHeight:a},onKeyDown:I,ref:L,children:e.map((({key:e,ref:l,...n})=>T("li",{role:"none",children:T(B,{...n,id:`menu-item-${e}`,role:k,tabIndex:-1,selected:r===e,focused:N&&r===e,ref:l})},e)))})});return null!=o?T(h,{children:D("div",{className:"cROAT Gg Za l s f e",style:R,ref:H,"data-menu":"true",children:[T("div",{className:"jSwii",children:T(c,{variant:"title-01",marginBottom:"spacing-02",children:o})}),T("div",{className:"aqMnP",children:T(f,{size:"small",variant:"clear",icon:v,"aria-label":z.string("common_Close"),onClick:i,"aria-live":"polite","aria-busy":w})}),W]})}):T("div",{className:d("UbWCE Gg Za Ra",{vofqo:"trailing-bottom-caret"===l,tAjdD:"leading-bottom-caret"===l,iMLco:"trailing-top-caret"===l,ZZokC:"leading-top-caret"===l}),style:R,ref:H,"data-menu":"true","aria-live":"polite","aria-busy":w,children:W})},L=(e,l)=>{var n,{openMenu:a,closeMenu:i,...t}=l;return"dropdownButton"===e?T(m,{...t}):"chip"===e?T(N,{icon:t.active?x:z,iconPosition:"trailing",onKeyDown:t.onKeyDown,onClick:t.onClick,disabled:t.disabled,...t.ariaAttributes,ref:t.ref,children:""!==t.children?t.children:null!=(n=t.placeholder)?n:null}):e(l)},R=({value:e,onChange:l,placeholder:n,onMenuClose:d,label:c,selectedDisplayName:f,disabled:m,icon:v,onOpen:p,menuVariant:g="leading-top-caret",menuMaxHeight:h=300,trigger:b="dropdownButton",fullscreenMobile:y=!1,fullscreenTablet:k=!1,"aria-describedby":C,"aria-invalid":I,"aria-errormessage":w,loading:M,compact:N=!1,useInputMenuTrigger:x=!1,...z})=>{var B,H=a(l);H.current=l;var L,R,P,j=s(),W=u(),S=i((()=>{if("menu"!==z.mode){var l=z.options.findIndex((l=>l.value===e));return l>=0&&!0!==z.options[l].disabled?l:void 0}}),[z.mode,z.options,e]),$=a(null),[A,_]=t(!1),[q,O]=t(null),Z=null!=q?q:S,G=r((()=>{A&&(d&&d(),_(!1),O(null),W&&null!=$.current&&$.current.focus())}),[A,W,d]),U=r((()=>{null!=p&&p(),_(!0)}),[p]),F=i((()=>"menu"===z.mode?z.options.map(((e,l)=>({key:String(l),content:e.displayName,"aria-label":e.label,href:e.href,onClick:l=>{null==e.onClick||e.onClick(l),G()},ref:o(),disabled:e.disabled,trailingInfo:e.trailingInfo,externalLinkIcon:e.externalLinkIcon,target:e.target,loading:e.loading,withDot:e.withDot,renderCustomContent:!!e.customContent}))):z.options.map((e=>{var l;return{key:e.value,content:null!=(l=null==e?void 0:e.customContent)?l:e.displayName,"aria-label":e.label,onClick:()=>{null==H.current||H.current(e.value),G()},ref:o(),disabled:e.disabled,trailingInfo:e.trailingInfo,externalLinkIcon:!1,renderCustomContent:!!e.customContent}}))),[z,G]),V=r((()=>{if(null!=Z)if("menu"===z.mode){var e=F[Z].ref.current;null!=e&&e.click()}else null==H.current||H.current(z.options[Z].value);G()}),[G,F,Z,z.options,z.mode]),J=r((e=>{if(!0!==m){var l=z.options.reduce(((e,l,n)=>!0===l.disabled?e:[...e,n]),[]),n=null!=Z?l.indexOf(Z):void 0,a=e=>O(l[e]),i=!0;if(A)if("ArrowUp"===e.key)a(null==n||0===n?l.length-1:n-1);else if("ArrowDown"===e.key)a(null==n||n===l.length-1?0:n+1);else if("Home"===e.key)a(0);else if("End"===e.key)a(l.length-1);else if("Enter"===e.key)V();else if("Escape"===e.key)G();else if(x)i=!1,"Tab"===e.key&&G();else{i=!1;for(var t=String.fromCharCode(e.keyCode).toLowerCase(),r=null!=n?(n+1)%l.length:0,o=0;o<l.length;o++){var u,s=(r+o)%l.length,d=z.options[l[s]],c=null==(u="label"in d?d.label:d.displayName)?void 0:u.toLowerCase();if(null!=c&&c.startsWith(t)){a(s),i=!0;break}}}else["ArrowUp","ArrowDown"].includes(e.key)?(U(),null==n&&a(0)):i=!1;i&&(e.preventDefault(),e.stopPropagation())}}),[A,z.options,Z,G,V,U,m,x]);if("menu"===z.mode){var Q=null!=Z?z.options[Z]:null;L=null!=f?f:c||"",R=(null==Q?void 0:Q.label)||(null==Q?void 0:Q.displayName)||f,P=null!=Q?String(Z):void 0,null!=(null==Q?void 0:Q.trailingInfo)&&null!=R&&(R+=` ${Q.trailingInfo}`)}else{var X=null!=Z?z.options[Z]:null;L=null!=f?f:null==X?void 0:X.displayName,R=(null==X?void 0:X.label)||(null==X?void 0:X.displayName)||L,null!=(null==X?void 0:X.trailingInfo)&&null!=R&&(R+=` ${X.trailingInfo}`),P=null==X?void 0:X.value}var Y="menu"===z.mode?"menu":"listbox",ee="menu"===z.mode?"menuitem":"option",le=null!=(B=$.current)&&B.offsetWidth?$.current.offsetWidth/2:void 0;return D("div",{className:N?"_T":"w _T",onBlur:e=>{var l;!W||(null==(l=e.relatedTarget)?void 0:l.parentNode)instanceof HTMLElement&&e.relatedTarget.parentNode.dataset.menu||G()},children:[E(b,{children:L||"",active:A,disabled:m,placeholder:null!=n?n:void 0,icon:v,ariaAttributes:{"aria-haspopup":Y,"aria-label":null!=R?`${c}: ${R}`:void 0,"aria-expanded":A||void 0,"aria-describedby":C,"aria-invalid":I,"aria-errormessage":w},onKeyDown:J,onClick:A?V:U,closeMenu:G,openMenu:U,ref:$}),A&&!0!==m&&F.length>0&&T(K,{menuItemsData:F,selectedItemKey:P,variant:g,maxHeight:"none"!==h?h:void 0,role:Y,itemRole:ee,onKeyDown:J,onClose:G,customHorizontalCaretPosition:le,loading:M,isKeyboardMode:W,fullscreenOverlayTitle:y&&"MOBILE"===j||k&&"TABLET"===j?c:void 0,useInputMenuTrigger:x})]})};return[()=>{B=n.forwardRef((({externalLinkIcon:e=!0,content:l,selected:n,focused:a,trailingInfo:i=null,disabled:t=!1,target:r="_self",loading:o=!1,href:u,role:s,withDot:f,renderCustomContent:m,...v},p)=>{var g=u?"a":"span";!0===t&&(g="button");var h="button"===g?{type:"button",disabled:t}:{href:u,target:r},{localize:b}=y();return T(g,{...v,className:d("whtrm _G z u Pi PW Pv PI _S Wh Wc B-",{iRKoF:null!=i,Dtjvh:n,gYoBn:a}),"aria-selected":n||void 0,ref:p,"aria-hidden":t||void 0,role:s,...h,children:m?l:D(M,{children:[D("div",{children:[T(c,{elementType:"span",variant:"title-05",color:"inherit",children:l}),null!=i&&e&&T("span",{children:T(I,{size:16})})]}),f&&T("span",{className:"fIwfI Rb","aria-label":b.string("common.design_system.notification")}),null!=i&&D(M,{children:[t&&T("span",{className:"qwXWu",children:T(w,{size:16})}),!t&&!o&&T(c,{elementType:"span",variant:"title-05",color:"inherit",children:i}),o&&!t&&T("span",{className:"LJrhK",children:T(k,{})})]})]})})})),K=H,E=L,e("DropdownMenu",R)},[e=>(n=e,a=e.useRef,i=e.useMemo,t=e.useState,r=e.useCallback,o=e.createRef),e=>u=e.useKeyboardNavigationMode,e=>s=e.useViewportCategory,e=>d=e.default,e=>c=e.default,e=>(f=e.CircularButton,m=e.DropdownButton),e=>v=e.default,e=>p=e.useKeyboardEvent,e=>g=e.useWindow,e=>h=e.OverlayPortal,e=>b=e.useBlockScroll,e=>y=e.useLocalize,e=>(k=e.Skeleton,C=e.Spinner),e=>I=e.default,e=>w=e.default,e=>(T=e.jsx,D=e.jsxs,M=e.Fragment),e=>N=e.ChipButton,e=>x=e.default,e=>z=e.default]]},["1o4yt4","12r4qu","1ys6v1","fkji80","1essqv","jppfwt","1qkjm8","1gttbj","ltllz9","14euae","1uzmmz","17thqz","1qndsd","1evvug","43er8k","121h32","1b1clj","14ilds","1i0z8n"]]);

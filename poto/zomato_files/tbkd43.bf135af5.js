(this.$WP=this.$WP||[]).push(["tbkd43",(e,t)=>{"use strict";var r,a,l,u,n,o={__key:0xc19640319750,id:"c1964031975048184e322b23b249948c",loc:{},definitions:[]},s={__key:2304817907770,id:"0218a1da483ad64aa31baa724c92149b",loc:{},definitions:[]},i=!1,c=null,g=0,f=(e,t)=>{var r=(e=>{try{return JSON.parse(localStorage.getItem(e)||"[]")}catch(e){}return[]})(t);r.length>0&&!i?(c=null,g=0,i=!0,e({events:r}).then((()=>{((e,t)=>{try{var r=JSON.parse(localStorage.getItem(t)||"[]");localStorage.setItem(t,JSON.stringify(r.filter((t=>e.every((e=>!l(t,e)))))))}catch(e){}})(r,t)})).finally((()=>{i=!1}))):r.length>0&&i&&setTimeout((()=>f(e,t)),400)},v=()=>{var{page:e}=u(),t={page:e,viewportCategory:n()},a=r.useRef(t);return a.current=t,a},d=()=>{var e=a(s),t=v();return r.useCallback(((r,a,l,u)=>{Math.floor(100*Math.random())>=10||(((e,t)=>{try{var r=JSON.parse(localStorage.getItem(t)||"[]");r.push(e),localStorage.setItem(t,JSON.stringify(r))}catch(e){}})({...t.current,eventType:r,pos:a,empty:l,fillTime:u},"ad_slot_event_mutation_buffer"),((e,t)=>{null!==c&&g<10?(g++,clearTimeout(c)):g=0,c=setTimeout((()=>f(e,"ad_slot_event_mutation_buffer")),200)})(e))}),[e,t])},h=[],p=()=>{var e=a(o),t=v();return r.useCallback((r=>{if(!(Math.floor(100*Math.random())>=10)){var a=r.filter((e=>null!==e&&!h.includes(e)&&(h.push(e),!0))).map((e=>({...t.current,script:e})));a.length>0&&e({events:a})}}),[e,t])},y=()=>{var e=r.useRef(!1),t=d();return r.useCallback(((r,a,l,u)=>{e.current||(t(r,a,l,u),e.current=!0)}),[e,t])};return[()=>{e({useLogAdScriptLoadFailure:p,useLogAdSlotEvent:d,useLogAdSlotEventOnlyOnce:y})},[e=>r=e,e=>a=e.useStatelessMutation,e=>l=e.default,e=>u=e.useRoute,e=>n=e.useViewportCategory]]},["1o4yt4","1fbuhs","b5nukb","fgwvq1","1ys6v1"]]);

(this.$WP=this.$WP||[]).push(["46822j",(e,a)=>{"use strict";var t,s,d={mod:0,modSet:[]},o=e=>{var a,o,{page:l,params:r}=t(),u=s(),m=new Map(Object.entries(r));if(!e.isEnabled||null!=(a=e.locales)&&a.length&&!e.locales.includes(u)||null!=(o=e.pages)&&o.length&&!e.pages.includes(l))return!1;var n=d;e.modDataMap&&e.modDataMap.has(u)?n=e.modDataMap.get(u):e.modData&&(n=e.modData);var p=Number(m.get(e.param));return!!(n&&n.mod>0&&p>0&&n.modSet)&&n.modSet.includes(p%n.mod)};return[()=>{e("useModTest",o)},[e=>t=e.useRoute,e=>s=e.useLocale]]},["fgwvq1","17thqz"]]);

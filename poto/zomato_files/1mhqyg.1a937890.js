(this.$WP=this.$WP||[]).push(["1mhqyg",(r,e)=>{"use strict";var n,i,t,c,a={originalPriceString:null,priceString:null},o=()=>{var r=c(),[e,o]=n(!0),[s,u]=n(void 0),[l,g]=n(a),d=i((e=>{u(void 0),o(!0),fetch("https://cdn.dining-club-prd.tamg.cloud/products/product-list.json",{method:"GET",credentials:"same-origin",signal:e}).then((r=>r.json())).then((e=>{var n=e.products[0];a.originalPriceString=r({currency:n.originalPrices.en_US.currencyCode,value:n.originalPrices.en_US.amount,alwaysShowCents:!0}),a.priceString=r({currency:n.prices.en_US.currencyCode,value:n.prices.en_US.amount,alwaysShowCents:!0}),o(!1),g(a)})).catch((r=>{o(!1),u(r)}))}),[r]);return t((()=>{var r=new AbortController;return null==a.originalPriceString||null==a.priceString?d(r.signal):(u(void 0),g(a),o(!1)),()=>{r.abort()}}),[d]),{data:l,fetching:e,error:s}};return[()=>{r("useProductDetails",o)},[r=>(n=r.useState,i=r.useCallback,t=r.useEffect),r=>c=r.useFormatCurrency]]},["1o4yt4","pe9247"]]);
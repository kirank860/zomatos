(this.$WP=this.$WP||[]).push(["eozxiw",(e,i)=>{"use strict";var a,t,r,l,o,s,n,d,c,u,m,h,p,T="ShowTopic",v="ShowForum",I="Hotel_Review",_="_blank",A="AsFeaturedInWidget",g="SimilarArticlesWidget",R=e=>{var i,R,E,N,f,{photo:w,route:W,authors:y,title:S,description:O,readTime:x,lastUpdatedAt:C,sponsorName:D,locationType:k,articleId:G}=e.article,L=c(),P=u(),b=l(),{localize:z}=m(),{page:U}=o(),q="similar-articles"===e.widgetType;C&&(f=P.formatDate("date_medium",new Date(C)));var F=h("span",{children:"•"}),j=U===I||U===T||U===v,H=` ${z.string("orion.article.reading_time.min_read.v2",{0:x})}`,Z=null!=y&&null!=(i=y[0])&&null!=(R=i.author)&&R.name?z.string("article_by_author",{authorName:(null==y||null==(E=y[0])||null==(N=E.author)?void 0:N.name)||""}):"",$=q?g:A,M=s((()=>{L({itemType:$,itemId:`${G}`,itemName:"ArticleCard",customData:JSON.stringify({locationType:k,route:W}),page:U,team:"TAPS",actionType:"click",pageUid:b})}),[G,L,$,k,U,b,W]);return h("div",{className:t("lBxlz z o Gi",{nauQO:q}),children:p(n,{href:W,display:"block",theme:"none",target:_,onClick:M,children:[D&&h("div",{className:"ZTGvo Z1 Wf",children:h(d,{variant:"sponsored",children:z.string("mob_ads_sponsored")})}),h("div",{className:t("cRdEs w",{WEpJv:j}),children:h(a,{source:w,width:"100%",height:"100%"})}),p("div",{className:"QTqke o e",children:[h("div",{className:t("PAAUW",{xpTZm:q}),children:h(r,{variant:"title-02",color:"primaryText",children:S})}),h("div",{className:"GnfRK o",children:p(r,{variant:"supporting-02",color:"primaryText",children:[f," ",F,H]})}),h("div",{className:"mopsZ o",children:h(r,{variant:"supporting-01",color:"primaryText",children:O})}),h("div",{className:"qsGkp o",children:h(r,{variant:"supporting-02",color:"primaryText",children:Z})})]})]})})};return[()=>{e({AFI_WIDGET:A,ARTICLES_PAGE:"Articles",ARTICLE_ID:"forumPostId",ATTRACTION_REVIEW:"Attraction_Review",ArticleCard:R,BLANK:_,DETAIL_ID:"detailId",GEO_ID:"geoId",HOTEL_REVIEW:I,RESTAURANT_REVIEW:"Restaurant_Review",SHOW_FORUM:v,SHOW_TOPIC:T,SIMILAR_ARTICLES_WIDGET:g,TOURISM:"Tourism"})},[e=>a=e.default,e=>t=e.default,e=>r=e.default,e=>(l=e.usePageviewUid,o=e.useRoute),e=>s=e.useCallback,e=>n=e.default,e=>d=e.default,e=>c=e.default,e=>(u=e.useIntlFormatter,m=e.useLocalize),e=>(h=e.jsx,p=e.jsxs)]]},["34bu7w","fkji80","1essqv","fgwvq1","1o4yt4","lr6tb6","oz3g7e","1r73jw","17thqz","121h32"]]);

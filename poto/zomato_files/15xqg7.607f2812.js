(this.$WP=this.$WP||[]).push(["15xqg7",(o,n)=>{"use strict";var t,a,e,r,m,u=({onMapLibraryLoad:o,onMount:n,onUnmount:t,onPanStart:e,onZoomChange:r})=>{var m=a();return{onMapLibraryLoad:n=>{m({module:"map_view",action:"load",context:n.mapProvider}),null==o||o(n)},onMount:o=>{var t;m({module:"map_view",action:"open",context:`${null!=(t=o.containerOffsetWidth)?t:0}`}),null==n||n(o)},onUnmount:()=>{m({module:"map_view",action:"close"}),null==t||t()},onPanStart:o=>{m({module:"map_move",action:"pan",context:o.zoom.toString(10)}),null==e||e(o)},onZoomChange:o=>{m({module:"map_move",action:o.zoom>o.oldZoom?"zoom_in":"zoom_out",context:o.zoom.toString(10)}),null==r||r(o)},trackMarkerClick:o=>{m({module:"pin",action:"pin_click",context:o.context||""})},trackMarkerHover:o=>{m({module:"pin",action:"pin_hover",context:o.context||""})}}},i=({onMapLibraryLoad:o,onMount:n,onUnmount:a,onPanStart:r,onZoomChange:u,...i})=>{var p=m({onMapLibraryLoad:o,onMount:n,onUnmount:a,onPanStart:r,onZoomChange:u});return e(t,{...p,...i})},p=({onMapLibraryLoad:o,onMount:n,onUnmount:t,onPanStart:a,onZoomChange:u,...i})=>{var p=m({onMapLibraryLoad:o,onMount:n,onUnmount:t,onPanStart:a,onZoomChange:u});return e(r,{...p,...i})};return[()=>{m=u,o({GenericMapComponent:p,MapComponent:i})},[o=>t=o.MapComponent,o=>a=o.useGARecorder,o=>e=o.jsx,o=>r=o.MapComponent]]},["fm6nx5","32pwc7","121h32","49c7br"]]);

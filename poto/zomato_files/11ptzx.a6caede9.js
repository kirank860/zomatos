(this.$WP=this.$WP||[]).push(["11ptzx",(e,t)=>{"use strict";var r,a,i,s,c,l={VIDEO_VISIBLE:"VIDEO_VISIBLE",VIDEO_INVISIBLE:"VIDEO_INVISIBLE"};return[()=>{s=r.createContext({activePlayer:void 0,dispatch:void 0}),i=class extends r.PureComponent{constructor(...e){super(...e),this.state={activePlayer:void 0,dispatch:e=>{var t=((e=(()=>Object.freeze({}))(),t)=>{switch(t.type){case l.VIDEO_VISIBLE:return!e.activePlayer||e.activePlayer!==t.player&&e.activePlayer.state.userInteracted||e.activePlayer!==t.player&&t.player.elemPosition+50<e.activePlayer.elemPosition?{...e,activePlayer:t.player}:e;case l.VIDEO_INVISIBLE:return e.activePlayer===t.player?{...e,activePlayer:void 0}:e;default:return e}})(this.state,e);this.setState(t)}}}render(){var{state:e,props:{children:t}}=this;return a(s.Provider,{value:e,children:t})}},c=s.Consumer,e({ActionTypes:l,VideoPlayerConsumer:c,default:i})},[e=>r=e,e=>a=e.jsx]]},["1o4yt4","121h32"]]);
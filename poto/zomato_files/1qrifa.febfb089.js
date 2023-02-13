(this.$WP=this.$WP||[]).push(["1qrifa",(t,e)=>{"use strict";var s,i,a,r,o,l,p,h,n,d,u,c,y,m,g,v,f,T,k,b,S,w,P,C,E,B={m3u8:"application/x-mpegURL"},_=t=>f(g,{children:e=>f(S,{...t,ref:t.forwardedRef,activePlayer:e?e.activePlayer:void 0,dispatch:e?e.dispatch:void 0})});return[()=>{w=o.getComponent("Button"),P=o.getComponent("Component"),T=class extends w{buildCSSClass(){return"exit-fullscreen-button"}handleClick(){this.player_.isFullscreen()&&this.player_.exitFullscreen()}},k=class extends P{createEl(){return super.createEl("div",{className:"top-control-bar"})}},o.registerComponent("TopControlBar",k),o.registerComponent("ExitFullscreenButton",T),o.getComponent("SeekBar").prototype.updateBackup=o.getComponent("SeekBar").prototype.update,o.getComponent("SeekBar").prototype.update=()=>{},C=o.getPlugin("plugin"),b=class extends C{constructor(t,e){super(t,e),o.getComponent("SeekBar").prototype.stopUpdating=this.stopUpdating,o.getComponent("SeekBar").prototype.startUpdating=this.startUpdating}stopUpdating(){this.off(this.player_,"timeupdate",this.updateBackup)}startUpdating(){this.on(this.player_,"timeupdate",this.updateBackup)}},o.registerPlugin("stopStartSeekBarUpdate",b),(S=class extends s{constructor(t){super(t),this.getMp4Url=()=>{var t=this.containerNode.current.clientHeight,e=this.maxAvailableM3u8Size();if(e>0)for(var s=0;s<this.mp4Sizes.length;s++)if(this.mp4Sizes[s]<=e&&this.mp4Sizes[s]>=t)return this.props.source.replace(`_${e}.m3u8`,`_${this.mp4Sizes[s]}.mp4`);return null},this.updateUserIsActive=t=>{this.player.userActive(t)},this.firstPlayTimestamp=void 0,this.firstWaitingTimestamp=void 0,this.lastStallTimestamp=void 0,this.lastSeekingTimestamp=void 0,this.lastSlowTtfbTimestamp=void 0,this.playedBefore=!1,this.autoEnded=!1,this.seekTrackingEnabled=!0,this.fullscreenByRotate=!1,this.orientationChanging=!1,this.mp4Sizes=[240,360,720],this.playerPositionOnTouchStart=void 0,this.handleError=t=>{var e="";t&&t.code&&(e+=`${t.code.toString()} `),t&&t.message&&(e+=t.message);var s=this.player.currentSrc().split(".").pop().toLowerCase();if(t&&t.code&&4===t.code&&"m3u8"===s){var i=this.getMp4Url();if(i)return this.track("m3u8_error",e),void this.player.src({src:i,type:"video/mp4"})}this.track("error",e),this.setState({errorExists:!0}),this.props.onError&&this.props.onError(t)},this.maxAvailableM3u8Size=()=>this.props.source.endsWith("_720.m3u8")?720:this.props.source.endsWith("_480.m3u8")?480:this.props.source.endsWith("_360.m3u8")?360:this.props.source.endsWith("_240.m3u8")?240:this.props.source.endsWith("_120.m3u8")?120:0,this.attachPlayerEvents=()=>{this.player.on("loadeddata",(()=>{this.track("loadeddata",this.millisSince(this.firstPlayTimestamp).toString()),this.setState({loadeddataHasOccured:!0})})),this.player.on("waiting",(()=>{this.firstWaitingTimestamp||(this.firstWaitingTimestamp=new Date),this.state.loadeddataHasOccured&&this.player.currentTime()>0&&(!this.lastSeekingTimestamp||this.millisSince(this.lastSeekingTimestamp)>3e3)&&(this.track("waiting",this.player.currentTime()),this.lastStallTimestamp=new Date)})),this.player.on("click",(t=>{var{target:e}=t;if(this.props.onClickTracking&&this.props.onClickTracking(t),this.props.onClick){var s=this.player.getChild("ControlBar").el(),i=this.player.getChild("TopControlBar");i=i&&i.el(),e===s||s.contains(e)||i&&(e===i||i.contains(e))||this.props.onClick(this.player.paused(),(()=>this.player.play()),(()=>this.player.pause()))}})),this.player.on("seeking",(()=>{this.seekTrackingEnabled&&(this.lastSeekingTimestamp=new Date,this.track("seeking",this.player.currentTime()))})),this.props.showAutoplayConfig&&this.props.autoplayWhenVisible&&this.addComponentToTopControlBar("AutoplayConfigPanel"),this.player.on("volumechange",(()=>{this.player.muted()&&!this.state.muted?(this.track("audio_off",this.player.currentTime()),this.setState({muted:!0})):this.state.muted&&(this.track("audio_on",this.player.currentTime()),this.setState({muted:!1}))})),this.player.on("fullscreenchange",(()=>{if(this.player.isFullscreen()?(this.track("enter_fullscreen",this.player.currentTime()),this.props.isMobile&&this.addComponentToTopControlBar("ExitFullscreenButton")):(this.track("exit_fullscreen",this.player.currentTime()),this.props.isMobile&&this.removeComponentFromTopControlBar("ExitFullscreenButton"),this.isLandscape()&&!this.player.paused()&&this.fullscreenOnLandscapeEnabled()&&this.autoPauseVideo()),this.props.onFullscreenChange){var t=this.player.isFullscreen();this.props.onFullscreenChange(t)}})),this.player.on("pause",(()=>{this.setState({willPause:!0,lastPauseTimestamp:new Date}),setTimeout((()=>{this.state.willPause&&this.player&&this.player.el()&&(this.track("pause",this.player.currentTime()),this.trackResourceTimings(),this.state.autoPaused||this.setState({userInteracted:!0}),this.setState({autoPaused:!1}),this.setState({willPause:!1}))}),300)})),this.player.on("play",(()=>{this.firstPlayTimestamp||(this.firstPlayTimestamp=new Date),this.state.willPause&&this.millisSince(this.state.lastPauseTimestamp)<300?this.setState({willPause:!1}):(this.playedBefore?this.track("play",this.player.currentTime()):this.autoEnded?this.track("replay"):this.track("first_play"),this.playedBefore=!0,this.state.autoPlayed||this.setState({userInteracted:!0}),this.setState({autoPlayed:!1}),this.player.controlBar.volumePanel.show(),this.player.controlBar.volumePanel.volumeControl.show(),this.player.controlBar.volumePanel.muteToggle.show())})),this.player.bigPlayButton.on("tap",(()=>{this.isLandscape()&&!this.player.isFullscreen()&&this.fullscreenOnLandscapeEnabled()&&this.player.requestFullscreen()})),this.player.on("ended",(()=>{this.track("complete",this.player.duration()),this.setState({willPause:!1}),this.autoEnded=!0,this.playedBefore=!1,this.props.loop&&(this.seekTrackingEnabled=!1,this.player.play(),setTimeout((()=>{0===this.player.currentTime()&&(this.seekTrackingEnabled=!1,this.player.currentTime(0))}),100))})),this.player.on("timeupdate",(()=>{this.seekTrackingEnabled=!0,this.trackStartDelay(),this.trackProgressTime(),this.trackProgressPercent(),this.trackResourceTimings(),this.trackResumeAfterStall();var t=Math.min(this.player.videoHeight(),this.player.videoWidth());if(t!==this.state.quality&&(this.track(`quality_${t}`,this.player.currentTime()),t<this.state.quality&&this.lastSlowTtfbTimestamp&&this.millisSince(this.lastSlowTtfbTimestamp)<3e3&&(this.track("qualitydrop_after_delayed_first_byte",this.player.currentTime()),this.lastSlowTtfbTimestamp=void 0),this.setState({quality:t})),this.props.onTimeUpdate){var e=this.player.currentTime();this.props.onTimeUpdate(e)}})),this.player.on("touchstart",(()=>{this.playerPositionOnTouchStart=this.player.el().getBoundingClientRect().top})),this.player.on("touchend",(t=>{this.playerPositionOnTouchStart===this.player.el().getBoundingClientRect().top&&"VIDEO"===t.target.nodeName&&this.props.touchPausePlayEnabled&&(this.player.paused()?this.player.play():this.player.userActive()||this.player.pause())}))},this.addComponentToTopControlBar=t=>{var e=this.player.getChild("TopControlBar");e||(e=this.player.addChild("TopControlBar",{})),e.getChild(t)||e.addChild(t)},this.removeComponentFromTopControlBar=t=>{var e=this.player.getChild("TopControlBar");e&&(e.removeChild(t),0===e.children().length&&this.player.removeChild("TopControlBar"))},this.trackResourceTimings=()=>{if(window.performance&&window.performance.mark){var t=`videoPlayer=${this.props.mediaId?this.props.mediaId:"0"}`;performance.mark(t);for(var e=performance.getEntriesByName(t),s=e.length>1?e[e.length-2].startTime:0,i=e[e.length-1].startTime,a=performance.getEntriesByType("resource"),r=this.props.source.split("/").pop(),o=this.props.source.replace(r,""),l=t=>{if(t.startTime>i)return!0;if(!t.name.endsWith(".ts")&&!t.name.endsWith(".m3u8"))return!0;var e=t.name.split("/").pop();return t.name.replace(e,"")!==o},p=a.length-1;p>=0;p--){var h=a[p];if(h.startTime<s)break;if(h instanceof PerformanceResourceTiming&&!l(h)){var{name:n,responseStart:d,requestStart:u}=h,c=d-u;c>1e3&&(this.track("delayed_ttfb",c.toString()),this.track("delayed_segment",n.split("/").pop()),this.lastSlowTtfbTimestamp=new Date)}}}},this.trackResumeAfterStall=()=>{if(this.lastStallTimestamp){var t=this.lastStallTimestamp;this.track("resumed_after_stall",this.millisSince(t).toString()),this.lastSlowTtfbTimestamp&&this.lastSlowTtfbTimestamp.getTime()>t.getTime()&&this.track("stall_after_delayed_first_byte",this.player.currentTime()),this.lastStallTimestamp=void 0}},this.autoPlayOrAutoPause=t=>{this.props.autopauseEnabled&&this.props.globalOverlay&&this.props.globalOverlay!==this.initialOverlay?this.autoPauseVideo():!this.props.globalOverlay&&t.globalOverlay||this.props.globalOverlay===this.initialOverlay&&t.globalOverlay!==this.initialOverlay?this.notifyIfVideoVisible():t.activePlayer!==this.props.activePlayer&&(this.state.userInteracted||(this.props.activePlayer===this?this.player.paused()&&this.props.autoplayWhenVisible&&this.autoPlayVideo():this.player.paused()||this.autoPauseVideo()))},this.isLandscape=()=>90===Math.abs(window.orientation%180),this.handleResize=()=>{this.performIfOrientationNotChanging(this.updateObjectFit)},this.handleScroll=()=>{this.performIfOrientationNotChanging(this.notifyIfVideoVisible)},this.performIfOrientationNotChanging=t=>{this.fullscreenOnLandscapeEnabled()?(this.orientationChanging=!1,setTimeout((()=>{this.orientationChanging||t()}),100)):t()},this.handleOrientationChange=()=>{this.orientationChanging=!0,this.isLandscape()?this.player.paused()||this.player.isFullscreen()||(this.player.requestFullscreen(),this.fullscreenByRotate=!0):this.player.isFullscreen()&&this.fullscreenByRotate&&(this.player.exitFullscreen(),this.fullscreenByRotate=!1)},this.updateObjectFit=()=>{if(!this.props.playerFluid){var t=new y(this.player.videoWidth(),this.player.videoHeight()),e=new y(this.videoNode.current.clientWidth,this.videoNode.current.clientHeight),s=Math.abs(t.aspectRatio()-e.aspectRatio())<.01;this.state.applyObjectFit!==s&&this.setState({applyObjectFit:s})}},this.fileExtension=()=>this.props.source.split(".").pop().toLowerCase(),this.millisSince=t=>t?Date.now()-t.getTime():0,this.trackStartDelay=()=>{if(!this.state.startDelayEventSent){var t=this.firstWaitingTimestamp?this.millisSince(this.firstWaitingTimestamp):this.millisSince(this.firstPlayTimestamp);this.track("start_delay",t.toString()),this.setState({startDelayEventSent:!0})}},this.trackProgressTime=()=>{var t=this.closestTimeThreshold(),{playTimeTracked:e}=this.state;if(!e.has(t)){this.track("play_time",t.toString());var s=new Set(e);s.add(t),this.setState({playTimeTracked:s})}},this.closestTimeThreshold=()=>{var t=this.player.currentTime();return t<1?0:t<5?1:t<20?this.roundDownToNearest(5,t):t<60?this.roundDownToNearest(10,t):this.roundDownToNearest(30,t)},this.roundDownToNearest=(t,e)=>Math.floor(e/t)*t,this.trackProgressPercent=()=>{var t=this.player.currentTime(),e=this.player.duration();!this.state.progress25&&t>.25*e&&(this.track("progress_25",t),this.setState({progress25:!0})),!this.state.progress50&&t>.5*e&&(this.track("progress_50",t),this.setState({progress50:!0})),!this.state.progress75&&t>.75*e&&(this.track("progress_75",t),this.setState({progress75:!0}))},this.notifyIfVideoVisible=()=>{if(!this.player.isFullscreen()){var t=this.isVisible();if(t){if(this.setState({visible:!0}),this.state.invisible&&(this.track("scroll_back_view",this.player.currentTime()),this.setState({invisible:!1})),this.state.userInteracted)return;if(this.isLandscape()&&this.fullscreenOnLandscapeEnabled())return;this.props.dispatch&&this.props.activePlayer!==this?this.props.dispatch({type:m.VIDEO_VISIBLE,player:this}):this.props.autoplayWhenVisible&&this.autoPlayVideo()}else if(!1===t){if(this.state.invisible||this.setState({invisible:!0}),this.state.visible&&(this.track("scroll_past",this.player.currentTime()),this.setState({visible:!1})),this.props.autopauseEnabled&&this.state.userInteracted)return void this.autoPauseVideo();if(this.isLandscape()&&this.fullscreenOnLandscapeEnabled())return;this.props.dispatch?this.props.dispatch({type:m.VIDEO_INVISIBLE,player:this}):this.autoPauseVideo()}}},this.fullscreenOnLandscapeEnabled=()=>this.props.fullscreenOnLandscape&&this.props.isMobile,this.track=(t,e)=>{this.props.trackPlayerEvents&&(this.props.preview&&"error"!==t||c({module:this.props.trackingModule,value:this.props.mediaId,action:t,context:e}))},this.autoPlayVideo=()=>{if(!u.get("VideoPlayerAutoplayDisabled")&&(this.props.loop||!this.autoEnded)){this.setState({autoPlayed:!0});var t=this.player.play();void 0!==t&&(t.then((()=>{this.setState({playedOk:!0})})),this.checkVideoPlaying(1))}},this.checkVideoPlaying=t=>{t>3?this.track("play_failed_after_max_wait"):setTimeout((()=>{if(!this.state.playedOk&&this.player&&this.player.el())return this.state.metadataLoaded?(this.track("retrying_play",t.toString()),this.player.pause(),this.player.play(),void setTimeout((()=>{0===this.player.currentTime()&&this.track("play_failed_after_retry",t.toString())}),1e3)):void this.checkVideoPlaying(t+1)}),1e3)},this.autoPauseVideo=()=>{this.props.autopauseEnabled&&!this.player.paused()&&(this.setState({autoPaused:!0}),this.player.pause())},this.pauseVideo=()=>{this.player.pause()},this.playVideo=()=>{this.player.play()},this.duration=()=>this.player.duration(),this.seekTo=t=>{this.player.currentTime(t)},this.player=void 0,this.videoNode=void 0,this.containerNode=void 0,this.initialOverlay=void 0,this.elemPosition=0,this.videoNode=i(),this.containerNode=i(),this.initialOverlay=t.globalOverlay,this.state={muted:t.muted,willPause:!1,lastPauseTimestamp:void 0,autoPaused:!1,userInteracted:!1,autoPlayed:!1,progress25:!1,progress50:!1,progress75:!1,playTimeTracked:new Set,startDelayEventSent:!1,loadeddataHasOccured:!1,quality:0,visible:!1,invisible:!1,playedOk:!1,metadataLoaded:!1,applyObjectFit:!1,errorExists:!1}}componentDidMount(){var t=this.fileExtension(),e=this.props.source.startsWith("blob")?"video/mp4":B[t],s={controls:this.props.showControls,controlBar:{volumePanel:{inline:!1}},plugins:{stopStartSeekBarUpdate:{}},preload:this.props.preload,playsinline:!0,muted:this.props.muted,poster:this.props.poster,html5:{nativeAudioTracks:!1,nativeVideoTracks:!1,hls:{overrideNative:!0}},sources:[{src:this.props.source,type:e}],resizeManager:!1};isNaN(this.props.inactivityTimeout)||(s.inactivityTimeout=Math.max(0,this.props.inactivityTimeout)),this.player=o(this.videoNode.current,s,(()=>{this.track("load"),this.player.error()||(this.track("fileExtension",this.fileExtension()),this.player.controlBar.progressControl.seekBar.startUpdating(),this.player.tech_.supportsFullScreen=()=>!1)})),void 0!==this.props.userIsActive&&this.player.userActive(this.props.userIsActive),this.props.onPlay&&this.player.on("play",this.props.onPlay),this.props.onPause&&this.player.on("pause",this.props.onPause),this.fullscreenOnLandscapeEnabled()&&(o.browser.IS_IOS?window.addEventListener("orientationchange",this.handleOrientationChange):window.screen&&window.screen.orientation&&window.screen.orientation.addEventListener("change",this.handleOrientationChange),this.containerNode.current.addEventListener("touchmove",(t=>{this.player.isFullscreen()&&t.preventDefault()}))),this.player.on("useractive",(()=>{this.player.controlBar.progressControl.seekBar.startUpdating()})),this.player.on("userinactive",(()=>{this.player.controlBar.progressControl.seekBar.stopUpdating()})),this.player.on("loadedmetadata",(()=>{var{onLoaded:t}=this.props;this.track("loadedmetadata",this.millisSince(this.firstPlayTimestamp).toString());var e=this.player.currentSrc().split(".").pop().toLowerCase();"m3u8"===this.props.source.split(".").pop().toLowerCase()&&"mp4"===e&&this.track("mp4_success"),this.attachPlayerEvents(),this.setState({metadataLoaded:!0}),this.notifyIfVideoVisible(),this.updateObjectFit(),t&&t(this.player.videoWidth(),this.player.videoHeight())})),this.player.on("error",(()=>this.handleError(this.player.error()))),window&&!window.videojsBufferIsSet&&o&&o.Hls&&(o.Hls.GOAL_BUFFER_LENGTH=15,o.Hls.MAX_GOAL_BUFFER_LENGTH=15,window.videojsBufferIsSet=!0)}componentDidUpdate(t){this.autoPlayOrAutoPause(t),this.updateObjectFit(),t.userIsActive!==this.props.userIsActive&&void 0!==this.props.userIsActive&&this.updateUserIsActive(this.props.userIsActive)}componentWillUnmount(){this.trackResourceTimings(),this.player&&(this.player.off("click"),this.player.off("play"),this.player.off("pause"),this.player.off("ended"),this.player.off("fullscreenchange"),this.player.off("volumechange"),this.player.off("timeupdate"),this.player.dispose())}isVisible(){var t=window.innerHeight,e=0+(t-0)/2;if(!this.player.el())return null;var s=this.player.el().getBoundingClientRect().top,i=this.player.el().getBoundingClientRect().bottom,a=s+(i-s)/2;this.elemPosition=Math.abs(e-a);var r=.2*(i-s);return s+r>=0&&i-r<=t}render(){var t={className:this.props.containerRelative?"MZedg":"CBbDL",style:{height:this.props.height,width:this.props.width},ref:this.containerNode},e=["video-js","vjs-default-skin","vjs-big-play-centered"];this.props.playerFluid?e.push("vjs-fluid"):e.push("HqoPw t l _U s R-"),(this.props.objectFitCover||this.state.applyObjectFit)&&e.push("object-fit-cover"),this.props.allowFullscreen||e.push("hide-fullscreen"),this.props.isMobile&&e.push("mobile"),this.props.isIEOrEdge&&e.push("isIEOrEdge"),this.props.transparentBackground&&e.push("transparent-background"),this.props.opaqueBackgroundOnFullscreen&&e.push("opaque-background"),this.props.posterCover&&e.push("poster-cover");var s={className:p(e),ref:this.videoNode},i=this.props.preview&&this.state.errorExists;return v("div",{...t,children:[f(n,{callback:this.handleScroll,throttle:200,useDebounce:!0}),this.props.autopauseEnabled&&this.props.autopauseWhenFocusLost&&f(d,{windowFocusedCallback:this.notifyIfVideoVisible,windowHiddenCallback:this.autoPauseVideo,useVisibilityApi:!1,useCapture:!1}),f(h,{callback:this.handleResize}),f("div",{className:"w _Z Gp Cf j u S5",style:{display:i?"flex":"none"},children:f(l,{id:"video_can_not_preview"})}),f("div",{style:{display:i?"none":"block",height:this.props.height},children:f("video",{...s})})]})}}).defaultProps={poster:"",containerRelative:!0,playerFluid:!1,autoplayWhenVisible:!0,autopauseEnabled:!0,autopauseWhenFocusLost:!0,showControls:!0,showAutoplayConfig:!1,preload:"none",muted:!0,loop:!0,trackPlayerEvents:!0,trackingModule:"ta_video",mediaId:0,onClick:void 0,onError:void 0,onLoaded:void 0,preview:!1,allowFullscreen:!0,fullscreenOnLandscape:!1,objectFitCover:!1,transparentBackground:!1,touchPausePlayEnabled:!0,opaqueBackgroundOnFullscreen:!1,posterCover:!1},E=r((t=>({globalOverlay:t.overlays.global,isMobile:"MOBILE"===t.meta.device.userAgentCategory,isIEOrEdge:"IE"===t.meta.device.browser.family})))(_),t("default",a(((t,e)=>f(E,{...t,forwardedRef:e}))))},[t=>(s=t.PureComponent,i=t.createRef,a=t.forwardRef),t=>r=t.connect,t=>o=t.default,t=>l=t.default,t=>p=t.default,t=>h=t.default,t=>n=t.default,t=>d=t.WindowVisibility,t=>u=t.default,t=>c=t.default,t=>y=t.Dimension,t=>(m=t.ActionTypes,g=t.VideoPlayerConsumer),t=>(v=t.jsxs,f=t.jsx)]]},["1o4yt4","12mj4n","1galm6","17thqz","fkji80","d6vj30","1w1vb4","9e5nhi","19b9b1","4axon3","7l6raj","11ptzx","121h32"]]);

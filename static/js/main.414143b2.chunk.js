(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/africa.5aa39e77.mp3"},12:function(e,t,a){e.exports=a(21)},18:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(10),r=a.n(c),o=(a(18),a(4)),s=a(2),l=a(6),d=a(5),u=a(7),m=a(8),h=a(11),p=a.n(h),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,n=new Array(i),c=0;c<i;c++)n[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(n)))).state={playing:!1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"container example"},n.a.createElement("div",{className:"play button",onClick:function(){e.setState({playing:!e.state.playing})}},this.state.playing?"\u23f9":"\u25b6\ufe0f"),n.a.createElement(m.a,{audioFile:p.a,className:"react-waves",options:{barHeight:2,cursorWidth:0,height:200,hideScrollbar:!0,progressColor:"#EC407A",responsive:!0,waveColor:"#D1D6DA"},volume:1,zoom:1,playing:this.state.playing}))}}]),t}(n.a.Component),v=a(3),f=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={micRecord:!1,micInstance:{}},a.mediaRecorder={},a.audioChunks=[],a.micCallback=a.micCallback.bind(Object(v.a)(a)),a.handleStream=a.handleStream.bind(Object(v.a)(a)),a.handleAudioOutput=a.handleAudioOutput.bind(Object(v.a)(a)),a.toggleMic=a.toggleMic.bind(Object(v.a)(a)),a.startMic=a.startMic.bind(Object(v.a)(a)),a.stopMic=a.stopMic.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"micCallback",value:function(e){var t=e.micInstance,a=e.stream;t?this.setState({micInstance:t}):a&&this.handleStream(a)}},{key:"handleStream",value:function(e){var t=this;this.mediaRecorder=new MediaRecorder(e),this.mediaRecorder.start(),this.mediaRecorder.addEventListener("dataavailable",function(e){t.audioChunks.push(e.data)})}},{key:"handleAudioOutput",value:function(){var e=this;return new Promise(function(t){e.mediaRecorder.addEventListener("stop",function(){var a=new Blob(e.audioChunks),i=URL.createObjectURL(a),n=new Audio(i);t({audioBlob:a,audioUrl:i,play:function(){n.play()}})}),e.mediaRecorder&&"recording"===e.mediaRecorder.state&&e.mediaRecorder.stop()})}},{key:"toggleMic",value:function(){this.state.micRecord?this.stopMic():this.startMic()}},{key:"startMic",value:function(){this.state.micInstance.active||(this.state.micInstance.start(),this.setState({micRecord:!0}))}},{key:"stopMic",value:function(){var e=this;this.state.micInstance.active&&(this.state.micInstance.stop(),this.handleAudioOutput().then(function(t){t.audioBlob;var a=t.audioUrl;e.setState({micRecord:!1,audio:a})}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"container example"},n.a.createElement("div",{className:"mic button",onClick:this.toggleMic},this.state.micRecord?"\u23f9":"\u23fa"),n.a.createElement(m.a,{className:"react-waves",options:{barHeight:4,barWidth:2,cursorWidth:0,height:200,hideScrollbar:!0,progressColor:"#EC407A",responsive:!0,waveColor:"#D1D6DA"},playing:this.state.micRecord,volume:1,zoom:1,micCallback:this.micCallback}))}}]),t}(n.a.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"header"},"Basic Example"),n.a.createElement(b,null),n.a.createElement("div",{className:"header"},"Microphone Example",n.a.createElement("div",{className:"subheader"},"(Work in progress)")),n.a.createElement(f,null))}}]),t}(n.a.Component);r.a.render(n.a.createElement(O,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.414143b2.chunk.js.map
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2569],{42569:function(e,t,r){"use strict";r.d(t,{q:function(){return ye},q_:function(){return N}});var i=r(29603),a=r(50120),n=r(27378);const o={arr:Array.isArray,obj:e=>"[object Object]"===Object.prototype.toString.call(e),fun:e=>"function"===typeof e,str:e=>"string"===typeof e,num:e=>"number"===typeof e,und:e=>void 0===e,nul:e=>null===e,set:e=>e instanceof Set,map:e=>e instanceof Map,equ(e,t){if(typeof e!==typeof t)return!1;if(o.str(e)||o.num(e))return e===t;if(o.obj(e)&&o.obj(t)&&Object.keys(e).length+Object.keys(t).length===0)return!0;let r;for(r in e)if(!(r in t))return!1;for(r in t)if(e[r]!==t[r])return!1;return!o.und(r)||e===t}};function s(){const e=(0,n.useState)(!1)[1];return(0,n.useCallback)((()=>e((e=>!e))),[])}function l(e,t){return o.und(e)||o.nul(e)?t:e}function u(e){return o.und(e)?[]:o.arr(e)?e:[e]}function c(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];return o.fun(e)?e(...r):e}function d(e){const t=function(e){return e.to,e.from,e.config,e.onStart,e.onRest,e.onFrame,e.children,e.reset,e.reverse,e.force,e.immediate,e.delay,e.attach,e.destroyed,e.interpolateTo,e.ref,e.lazy,(0,a.Z)(e,["to","from","config","onStart","onRest","onFrame","children","reset","reverse","force","immediate","delay","attach","destroyed","interpolateTo","ref","lazy"])}(e);if(o.und(t))return(0,i.Z)({to:t},e);const r=Object.keys(e).reduce(((r,a)=>o.und(t[a])?(0,i.Z)({},r,{[a]:e[a]}):r),{});return(0,i.Z)({to:t},r)}class h{constructor(){this.payload=void 0,this.children=[]}getAnimatedValue(){return this.getValue()}getPayload(){return this.payload||this}attach(){}detach(){}getChildren(){return this.children}addChild(e){0===this.children.length&&this.attach(),this.children.push(e)}removeChild(e){const t=this.children.indexOf(e);this.children.splice(t,1),0===this.children.length&&this.detach()}}class f extends h{constructor(){super(...arguments),this.payload=[],this.attach=()=>this.payload.forEach((e=>e instanceof h&&e.addChild(this))),this.detach=()=>this.payload.forEach((e=>e instanceof h&&e.removeChild(this)))}}class p extends h{constructor(){super(...arguments),this.payload={},this.attach=()=>Object.values(this.payload).forEach((e=>e instanceof h&&e.addChild(this))),this.detach=()=>Object.values(this.payload).forEach((e=>e instanceof h&&e.removeChild(this)))}getValue(e){void 0===e&&(e=!1);const t={};for(const r in this.payload){const i=this.payload[r];(!e||i instanceof h)&&(t[r]=i instanceof h?i[e?"getAnimatedValue":"getValue"]():i)}return t}getAnimatedValue(){return this.getValue(!0)}}let g,m;function y(e,t){g={fn:e,transform:t}}function b(e){m=e}let v,w=e=>"undefined"!==typeof window?window.requestAnimationFrame(e):-1;function k(e){v=e}let V,x=()=>Date.now();function A(e){V=e}let E,C,O=e=>e.current;function Z(e){E=e}class j extends p{constructor(e,t){super(),this.update=void 0,this.payload=e.style?(0,i.Z)({},e,{style:E(e.style)}):e,this.update=t,this.attach()}}let q=!1;const P=new Set,S=()=>{if(!q)return!1;let e=x();for(let t of P){let r=!1;for(let i=0;i<t.configs.length;i++){let a,n,o=t.configs[i];for(let t=0;t<o.animatedValues.length;t++){let i=o.animatedValues[t];if(i.done)continue;let s=o.fromValues[t],l=o.toValues[t],u=i.lastPosition,c=l instanceof h,d=Array.isArray(o.initialVelocity)?o.initialVelocity[t]:o.initialVelocity;if(c&&(l=l.getValue()),o.immediate)i.setValue(l),i.done=!0;else if("string"!==typeof s&&"string"!==typeof l){if(void 0!==o.duration)u=s+o.easing((e-i.startTime)/o.duration)*(l-s),a=e>=i.startTime+o.duration;else if(o.decay)u=s+d/(1-.998)*(1-Math.exp(-(1-.998)*(e-i.startTime))),a=Math.abs(i.lastPosition-u)<.1,a&&(l=u);else{n=void 0!==i.lastTime?i.lastTime:e,d=void 0!==i.lastVelocity?i.lastVelocity:o.initialVelocity,e>n+64&&(n=e);let t=Math.floor(e-n);for(let e=0;e<t;++e){d+=1*((-o.tension*(u-l)+-o.friction*d)/o.mass)/1e3,u+=1*d/1e3}let r=!(!o.clamp||0===o.tension)&&(s<l?u>l:u<l),c=Math.abs(d)<=o.precision,h=0===o.tension||Math.abs(l-u)<=o.precision;a=r||c&&h,i.lastVelocity=d,i.lastTime=e}c&&!o.toValues[t].done&&(a=!1),a?(i.value!==l&&(u=l),i.done=!0):r=!0,i.setValue(u),i.lastPosition=u}else i.setValue(l),i.done=!0}t.props.onFrame&&(t.values[o.name]=o.interpolation.getValue())}t.props.onFrame&&t.props.onFrame(t.values),r||(P.delete(t),t.stop(!0))}return P.size?C?C():w(S):q=!1,q};function F(e,t,r){if("function"===typeof e)return e;if(Array.isArray(e))return F({range:e,output:t,extrapolate:r});if(v&&"string"===typeof e.output[0])return v(e);const i=e,a=i.output,n=i.range||[0,1],o=i.extrapolateLeft||i.extrapolate||"extend",s=i.extrapolateRight||i.extrapolate||"extend",l=i.easing||(e=>e);return e=>{const t=function(e,t){for(var r=1;r<t.length-1&&!(t[r]>=e);++r);return r-1}(e,n);return function(e,t,r,i,a,n,o,s,l){let u=l?l(e):e;if(u<t){if("identity"===o)return u;"clamp"===o&&(u=t)}if(u>r){if("identity"===s)return u;"clamp"===s&&(u=r)}if(i===a)return i;if(t===r)return e<=t?i:a;t===-1/0?u=-u:r===1/0?u-=t:u=(u-t)/(r-t);u=n(u),i===-1/0?u=-u:a===1/0?u+=i:u=u*(a-i)+i;return u}(e,n[t],n[t+1],a[t],a[t+1],l,o,s,i.map)}}class R extends f{constructor(e,t,r,i){super(),this.calc=void 0,this.payload=e instanceof f&&!(e instanceof R)?e.getPayload():Array.isArray(e)?e:[e],this.calc=F(t,r,i)}getValue(){return this.calc(...this.payload.map((e=>e.getValue())))}updateConfig(e,t,r){this.calc=F(e,t,r)}interpolate(e,t,r){return new R(this,e,t,r)}}function T(e,t){"update"in e?t.add(e):e.getChildren().forEach((e=>T(e,t)))}class M extends h{constructor(e){var t;super(),t=this,this.animatedStyles=new Set,this.value=void 0,this.startPosition=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.startTime=void 0,this.lastTime=void 0,this.done=!1,this.setValue=function(e,r){void 0===r&&(r=!0),t.value=e,r&&t.flush()},this.value=e,this.startPosition=e,this.lastPosition=e}flush(){0===this.animatedStyles.size&&T(this,this.animatedStyles),this.animatedStyles.forEach((e=>e.update()))}clearStyles(){this.animatedStyles.clear()}getValue(){return this.value}interpolate(e,t,r){return new R(this,e,t,r)}}class $ extends f{constructor(e){super(),this.payload=e.map((e=>new M(e)))}setValue(e,t){void 0===t&&(t=!0),Array.isArray(e)?e.length===this.payload.length&&e.forEach(((e,r)=>this.payload[r].setValue(e,t))):this.payload.forEach((r=>r.setValue(e,t)))}getValue(){return this.payload.map((e=>e.getValue()))}interpolate(e,t){return new R(this,e,t)}}let I=0;class z{constructor(){this.id=void 0,this.idle=!0,this.hasChanged=!1,this.guid=0,this.local=0,this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.listeners=[],this.queue=[],this.localQueue=void 0,this.getValues=()=>this.interpolations,this.id=I++}update(e){if(!e)return this;const t=d(e),r=t.delay,n=void 0===r?0:r,s=t.to,l=(0,a.Z)(t,["delay","to"]);if(o.arr(s)||o.fun(s))this.queue.push((0,i.Z)({},l,{delay:n,to:s}));else if(s){let e={};Object.entries(s).forEach((t=>{let r=t[0],a=t[1];const o=(0,i.Z)({to:{[r]:a},delay:c(n,r)},l),s=e[o.delay]&&e[o.delay].to;e[o.delay]=(0,i.Z)({},e[o.delay],o,{to:(0,i.Z)({},s,o.to)})})),this.queue=Object.values(e)}return this.queue=this.queue.sort(((e,t)=>e.delay-t.delay)),this.diff(l),this}start(e){if(this.queue.length){this.idle=!1,this.localQueue&&this.localQueue.forEach((e=>{let t=e.from,r=void 0===t?{}:t,a=e.to,n=void 0===a?{}:a;o.obj(r)&&(this.merged=(0,i.Z)({},r,this.merged)),o.obj(n)&&(this.merged=(0,i.Z)({},this.merged,n))}));const t=this.local=++this.guid,r=this.localQueue=this.queue;this.queue=[],r.forEach(((i,n)=>{let s=i.delay,l=(0,a.Z)(i,["delay"]);const u=i=>{n===r.length-1&&t===this.guid&&i&&(this.idle=!0,this.props.onRest&&this.props.onRest(this.merged)),e&&e()};let c=o.arr(l.to)||o.fun(l.to);s?setTimeout((()=>{t===this.guid&&(c?this.runAsync(l,u):this.diff(l).start(u))}),s):c?this.runAsync(l,u):this.diff(l).start(u)}))}else o.fun(e)&&this.listeners.push(e),this.props.onStart&&this.props.onStart(),t=this,P.has(t)||P.add(t),q||(q=!0,w(C||S));var t;return this}stop(e){return this.listeners.forEach((t=>t(e))),this.listeners=[],this}pause(e){var t;return this.stop(!0),e&&(t=this,P.has(t)&&P.delete(t)),this}runAsync(e,t){var r=this;e.delay;let n=(0,a.Z)(e,["delay"]);const s=this.local;let l=Promise.resolve(void 0);if(o.arr(n.to))for(let a=0;a<n.to.length;a++){const e=a,t=(0,i.Z)({},n,d(n.to[e]));o.arr(t.config)&&(t.config=t.config[e]),l=l.then((()=>{if(s===this.guid)return new Promise((e=>this.diff(t).start(e)))}))}else if(o.fun(n.to)){let e,t=0;l=l.then((()=>n.to((r=>{const a=(0,i.Z)({},n,d(r));if(o.arr(a.config)&&(a.config=a.config[t]),t++,s===this.guid)return e=new Promise((e=>this.diff(a).start(e)))}),(function(e){return void 0===e&&(e=!0),r.stop(e)})).then((()=>e))))}l.then(t)}diff(e){this.props=(0,i.Z)({},this.props,e);let t=this.props,r=t.from,a=void 0===r?{}:r,n=t.to,s=void 0===n?{}:n,d=t.config,h=void 0===d?{}:d,f=t.reverse,p=t.attach,g=t.reset,y=t.immediate;if(f){var b=[s,a];a=b[0],s=b[1]}this.merged=(0,i.Z)({},a,this.merged,s),this.hasChanged=!1;let w=p&&p(this);if(this.animations=Object.entries(this.merged).reduce(((e,t)=>{let r=t[0],n=t[1],s=e[r]||{};const d=o.num(n),f=o.str(n)&&!n.startsWith("#")&&!/\d/.test(n)&&!m[n],p=o.arr(n),b=!d&&!p&&!f;let k=o.und(a[r])?n:a[r],V=d||p||f?n:1,A=c(h,r);w&&(V=w.animations[r].parent);let E,C=s.parent,O=s.interpolation,Z=u(w?V.getPayload():V),j=n;b&&(j=v({range:[0,1],output:[n,n]})(1));let q=O&&O.getValue();const P=!o.und(C)&&s.animatedValues.some((e=>!e.done)),S=!o.equ(j,q),F=!o.equ(j,s.previous),R=!o.equ(A,s.config);if(g||F&&S||R){if(d||f)C=O=s.parent||new M(k);else if(p)C=O=s.parent||new $(k);else if(b){let e=s.interpolation&&s.interpolation.calc(s.parent.value);e=void 0===e||g?k:e,s.parent?(C=s.parent,C.setValue(0,!1)):C=new M(0);const t={output:[e,n]};s.interpolation?(O=s.interpolation,s.interpolation.updateConfig(t)):O=C.interpolate(t)}return Z=u(w?V.getPayload():V),E=u(C.getPayload()),g&&!b&&C.setValue(k,!1),this.hasChanged=!0,E.forEach((e=>{e.startPosition=e.value,e.lastPosition=e.value,e.lastVelocity=P?e.lastVelocity:void 0,e.lastTime=P?e.lastTime:void 0,e.startTime=x(),e.done=!1,e.animatedStyles.clear()})),c(y,r)&&C.setValue(b?V:n,!1),(0,i.Z)({},e,{[r]:(0,i.Z)({},s,{name:r,parent:C,interpolation:O,animatedValues:E,toValues:Z,previous:j,config:A,fromValues:u(C.getValue()),immediate:c(y,r),initialVelocity:l(A.velocity,0),clamp:l(A.clamp,!1),precision:l(A.precision,.01),tension:l(A.tension,170),friction:l(A.friction,26),mass:l(A.mass,1),duration:A.duration,easing:l(A.easing,(e=>e)),decay:A.decay})})}return S?e:(b&&(C.setValue(1,!1),O.updateConfig({output:[j,j]})),C.done=!0,this.hasChanged=!0,(0,i.Z)({},e,{[r]:(0,i.Z)({},e[r],{previous:j})}))}),this.animations),this.hasChanged){this.configs=Object.values(this.animations),this.values={},this.interpolations={};for(let e in this.animations)this.interpolations[e]=this.animations[e].interpolation,this.values[e]=this.animations[e].interpolation.getValue()}return this}destroy(){this.stop(),this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.local=0}}const L=(e,t)=>{const r=(0,n.useRef)(!1),i=(0,n.useRef)(),a=o.fun(t),s=(0,n.useMemo)((()=>{let r;return i.current&&(i.current.map((e=>e.destroy())),i.current=void 0),[new Array(e).fill().map(((e,i)=>{const n=new z,o=a?c(t,i,n):t[i];return 0===i&&(r=o.ref),n.update(o),r||n.start(),n})),r]}),[e]),l=s[0],u=s[1];i.current=l;(0,n.useImperativeHandle)(u,(()=>({start:()=>Promise.all(i.current.map((e=>new Promise((t=>e.start(t)))))),stop:e=>i.current.forEach((t=>t.stop(e))),get controllers(){return i.current}})));const d=(0,n.useMemo)((()=>e=>i.current.map(((t,r)=>{t.update(a?c(e,r,t):e[r]),u||t.start()}))),[e]);(0,n.useEffect)((()=>{r.current?a||d(t):u||i.current.forEach((e=>e.start()))})),(0,n.useEffect)((()=>(r.current=!0,()=>i.current.forEach((e=>e.destroy())))),[]);const h=i.current.map((e=>e.getValues()));return a?[h,d,e=>i.current.forEach((t=>t.pause(e)))]:h},N=e=>{const t=o.fun(e),r=L(1,t?e:[e]),i=r[0],a=r[1],n=r[2];return t?[i[0],a,n]:i};class G extends p{constructor(e){void 0===e&&(e={}),super(),!e.transform||e.transform instanceof h||(e=g.transform(e)),this.payload=e}}const W={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},_="[-+]?\\d*\\.?\\d+",Q=_+"%";function D(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return"\\(\\s*("+t.join(")\\s*,\\s*(")+")\\s*\\)"}const H=new RegExp("rgb"+D(_,_,_)),U=new RegExp("rgba"+D(_,_,_,_)),B=new RegExp("hsl"+D(_,Q,Q)),J=new RegExp("hsla"+D(_,Q,Q,_)),K=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,X=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Y=/^#([0-9a-fA-F]{6})$/,ee=/^#([0-9a-fA-F]{8})$/;function te(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}function re(e,t,r){const i=r<.5?r*(1+t):r+t-r*t,a=2*r-i,n=te(a,i,e+1/3),o=te(a,i,e),s=te(a,i,e-1/3);return Math.round(255*n)<<24|Math.round(255*o)<<16|Math.round(255*s)<<8}function ie(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function ae(e){return(parseFloat(e)%360+360)%360/360}function ne(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(255*t)}function oe(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function se(e){let t=function(e){let t;return"number"===typeof e?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Y.exec(e))?parseInt(t[1]+"ff",16)>>>0:W.hasOwnProperty(e)?W[e]:(t=H.exec(e))?(ie(t[1])<<24|ie(t[2])<<16|ie(t[3])<<8|255)>>>0:(t=U.exec(e))?(ie(t[1])<<24|ie(t[2])<<16|ie(t[3])<<8|ne(t[4]))>>>0:(t=K.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=ee.exec(e))?parseInt(t[1],16)>>>0:(t=X.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=B.exec(e))?(255|re(ae(t[1]),oe(t[2]),oe(t[3])))>>>0:(t=J.exec(e))?(re(ae(t[1]),oe(t[2]),oe(t[3]))|ne(t[4]))>>>0:null}(e);return null===t?e:(t=t||0,`rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)}const le=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,ue=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,ce=new RegExp(`(${Object.keys(W).join("|")})`,"g");let de={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const he=["Webkit","Ms","Moz","O"];function fe(e,t,r){return null==t||"boolean"===typeof t||""===t?"":r||"number"!==typeof t||0===t||de.hasOwnProperty(e)&&de[e]?(""+t).trim():t+"px"}de=Object.keys(de).reduce(((e,t)=>(he.forEach((r=>e[((e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1))(r,t)]=e[t])),e)),de);const pe={};Z((e=>new G(e))),A("div"),k((e=>{const t=e.output.map((e=>e.replace(ue,se))).map((e=>e.replace(ce,se))),r=t[0].match(le).map((()=>[]));t.forEach((e=>{e.match(le).forEach(((e,t)=>r[t].push(+e)))}));const a=t[0].match(le).map(((t,a)=>F((0,i.Z)({},e,{output:r[a]}))));return e=>{let r=0;return t[0].replace(le,(()=>a[r++](e))).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,((e,t,r,i,a)=>`rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(i)}, ${a})`))}})),b(W),y(((e,t)=>{if(!e.nodeType||void 0===e.setAttribute)return!1;{const n=t.style,o=t.children,s=t.scrollTop,l=t.scrollLeft,u=(0,a.Z)(t,["style","children","scrollTop","scrollLeft"]),c="filter"===e.nodeName||e.parentNode&&"filter"===e.parentNode.nodeName;void 0!==s&&(e.scrollTop=s),void 0!==l&&(e.scrollLeft=l),void 0!==o&&(e.textContent=o);for(let t in n)if(n.hasOwnProperty(t)){var r=0===t.indexOf("--"),i=fe(t,n[t],r);"float"===t&&(t="cssFloat"),r?e.style.setProperty(t,i):e.style[t]=i}for(let t in u){const r=c?t:pe[t]||(pe[t]=t.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())));"undefined"!==typeof e.getAttribute(r)&&e.setAttribute(r,u[t])}}}),(e=>e));var ge,me;const ye=(ge=e=>(0,n.forwardRef)(((t,r)=>{const l=s(),u=(0,n.useRef)(!0),c=(0,n.useRef)(null),d=(0,n.useRef)(null),h=(0,n.useCallback)((e=>{const t=c.current;c.current=new j(e,(()=>{let e=!1;d.current&&(e=g.fn(d.current,c.current.getAnimatedValue())),d.current&&!1!==e||l()})),t&&t.detach()}),[]);(0,n.useEffect)((()=>()=>{u.current=!1,c.current&&c.current.detach()}),[]),(0,n.useImperativeHandle)(r,(()=>O(d,u,l))),h(t);const f=c.current.getValue(),p=(f.scrollTop,f.scrollLeft,(0,a.Z)(f,["scrollTop","scrollLeft"])),m=(y=e,!o.fun(y)||y.prototype instanceof n.Component?e=>d.current=function(e,t){return t&&(o.fun(t)?t(e):o.obj(t)&&(t.current=e)),e}(e,r):void 0);var y;return n.createElement(e,(0,i.Z)({},p,{ref:m}))})),void 0===(me=!1)&&(me=!0),e=>(o.arr(e)?e:Object.keys(e)).reduce(((e,t)=>{const r=me?t[0].toLowerCase()+t.substring(1):t;return e[r]=ge(r),e}),ge))(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"])}}]);
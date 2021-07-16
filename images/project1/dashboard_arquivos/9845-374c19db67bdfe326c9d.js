(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9845],{60163:function(e,r,t){"use strict";t.d(r,{g7:function(){return c}});var n=t(27378);function i(...e){return r=>e.forEach((e=>function(e,r){"function"==typeof e?e(r):null!=e&&(e.current=r)}(e,r)))}function u(e,r,{checkForDefaultPrevented:t=!0}={}){return function(n){if(null==e||e(n),!1===t||!n.defaultPrevented)return null==r?void 0:r(n)}}function o(){return(o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const c=n.forwardRef(((e,r)=>{const{children:t,...i}=e;return 1===n.Children.count(t)?n.createElement(s,o({},i,{ref:r}),t):n.createElement(n.Fragment,null,n.Children.map(t,(e=>n.isValidElement(e)&&e.type===a?n.createElement(s,o({},i,{ref:r}),e.props.children):e)))}));c.displayName="Slot";const s=n.forwardRef(((e,r)=>{const{children:t,...u}=e,o=n.Children.only(t);return n.isValidElement(o)?n.cloneElement(o,{...l(u,o.props),ref:i(r,o.ref)}):null}));s.displayName="SlotClone";const a=({children:e})=>e;function l(e,r){const t={...r};for(const n in r){const i=e[n],o=r[n];/^on[A-Z]/.test(n)&&(t[n]=u(o,i))}return{...e,...t}}},57824:function(e){var r=1e3,t=60*r,n=60*t,i=24*n,u=7*i,o=365.25*i;function c(e,r,t,n){var i=r>=1.5*t;return Math.round(e/t)+" "+n+(i?"s":"")}e.exports=function(e,s){s=s||{};var a=typeof e;if("string"===a&&e.length>0)return function(e){if((e=String(e)).length>100)return;var c=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!c)return;var s=parseFloat(c[1]);switch((c[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return s*o;case"weeks":case"week":case"w":return s*u;case"days":case"day":case"d":return s*i;case"hours":case"hour":case"hrs":case"hr":case"h":return s*n;case"minutes":case"minute":case"mins":case"min":case"m":return s*t;case"seconds":case"second":case"secs":case"sec":case"s":return s*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return s;default:return}}(e);if("number"===a&&!1===isNaN(e))return s.long?function(e){var u=Math.abs(e);if(u>=i)return c(e,u,i,"day");if(u>=n)return c(e,u,n,"hour");if(u>=t)return c(e,u,t,"minute");if(u>=r)return c(e,u,r,"second");return e+" ms"}(e):function(e){var u=Math.abs(e);if(u>=i)return Math.round(e/i)+"d";if(u>=n)return Math.round(e/n)+"h";if(u>=t)return Math.round(e/t)+"m";if(u>=r)return Math.round(e/r)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},60042:function(e,r){var t;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var u=typeof t;if("string"===u||"number"===u)e.push(t);else if(Array.isArray(t)){if(t.length){var o=i.apply(null,t);o&&e.push(o)}}else if("object"===u)if(t.toString===Object.prototype.toString)for(var c in t)n.call(t,c)&&t[c]&&e.push(c);else e.push(t.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(t=function(){return i}.apply(r,[]))||(e.exports=t)}()},66415:function(e){function r(e,r,t){var n,i,u,o,c;function s(){var a=Date.now()-o;a<r&&a>=0?n=setTimeout(s,r-a):(n=null,t||(c=e.apply(u,i),u=i=null))}null==r&&(r=100);var a=function(){u=this,i=arguments,o=Date.now();var a=t&&!n;return n||(n=setTimeout(s,r)),a&&(c=e.apply(u,i),u=i=null),c};return a.clear=function(){n&&(clearTimeout(n),n=null)},a.flush=function(){n&&(c=e.apply(u,i),u=i=null,clearTimeout(n),n=null)},a}r.debounce=r,e.exports=r},15901:function(e,r,t){"use strict";var n=t(27378),i=t(66415);function u({debounce:e,scroll:r,polyfill:t}={debounce:0,scroll:!1}){const u=t||("undefined"===typeof window?class{}:window.ResizeObserver);if(!u)throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");const[c,a]=(0,n.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),l=(0,n.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:c}),f=e?"number"===typeof e?e:e.scroll:null,d=e?"number"===typeof e?e:e.resize:null,[v,h]=(0,n.useMemo)((()=>{const e=()=>{if(!l.current.element)return;const{left:e,top:r,width:t,height:n,bottom:i,right:u,x:o,y:c}=l.current.element.getBoundingClientRect(),f={left:e,top:r,width:t,height:n,bottom:i,right:u,x:o,y:c};Object.freeze(f),s(l.current.lastBounds,f)||a(l.current.lastBounds=f)};return[d?(0,i.debounce)(e,d):e,f?(0,i.debounce)(e,f):e]}),[a,f,d]);function p(){l.current.scrollContainers&&(l.current.scrollContainers.forEach((e=>{e.removeEventListener("scroll",h,!0)})),l.current.scrollContainers=null),l.current.resizeObserver&&(l.current.resizeObserver.disconnect(),l.current.resizeObserver=null)}function y(){l.current.element&&(l.current.resizeObserver=new u(h),l.current.resizeObserver.observe(l.current.element),r&&l.current.scrollContainers&&l.current.scrollContainers.forEach((e=>{e.addEventListener("scroll",h,{capture:!0,passive:!0})})))}var g,m,b;return g=h,m=Boolean(r),(0,n.useEffect)((()=>{if(m){const e=g;return window.addEventListener("scroll",e,{capture:!0,passive:!0}),()=>window.removeEventListener("scroll",e,!0)}}),[g,m]),b=v,(0,n.useEffect)((()=>{const e=b;return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[b]),(0,n.useEffect)((()=>{p(),y()}),[r,h,v]),(0,n.useEffect)((()=>p),[]),[e=>{e&&e!==l.current.element&&(p(),l.current.element=e,l.current.scrollContainers=o(e),y())},c]}function o(e){const r=[];if(!e||e===document.body)return r;const{overflow:t,overflowX:n,overflowY:i}=window.getComputedStyle(e);return[t,n,i].some((e=>"auto"===e||"scroll"===e))&&r.push(e),[...r,...o(e.parentElement)]}e=t.hmd(e);const c=["x","y","top","bottom","left","right","width","height"],s=(e,r)=>c.every((t=>e[t]===r[t]));Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(e,"exports").writable&&(e.exports=u),r.Z=u},70053:function(e,r,t){"use strict";t.d(r,{J$:function(){return F},JG:function(){return D},g_:function(){return K}});var n=t(27378),i=function(){return(i=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var i in r=arguments[t])Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i]);return e}).apply(this,arguments)};function u(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)r.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t}function o(e,r,t,n){return new(t||(t=Promise))((function(i,u){function o(e){try{s(n.next(e))}catch(e){u(e)}}function c(e){try{s(n.throw(e))}catch(e){u(e)}}function s(e){e.done?i(e.value):new t((function(r){r(e.value)})).then(o,c)}s((n=n.apply(e,r||[])).next())}))}function c(e,r){var t,n,i,u,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return u={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function c(u){return function(c){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,n&&(i=2&u[0]?n.return:u[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,u[1])).done)return i;switch(n=0,i&&(u=[2&u[0],i.value]),u[0]){case 0:case 1:i=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,n=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==u[0]&&2!==u[0])){o=0;continue}if(3===u[0]&&(!i||u[1]>i[0]&&u[1]<i[3])){o.label=u[1];break}if(6===u[0]&&o.label<i[1]){o.label=i[1],i=u;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(u);break}i[2]&&o.ops.pop(),o.trys.pop();continue}u=r.call(e,o)}catch(e){u=[6,e],n=0}finally{t=i=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,c])}}}var s=Object.prototype.hasOwnProperty,a=new WeakMap,l=0,f=function(){function e(e){void 0===e&&(e={}),this.cache=new Map(Object.entries(e)),this.subs=[]}return e.prototype.get=function(e){var r=this.serializeKey(e)[0];return this.cache.get(r)},e.prototype.set=function(e,r){var t=this.serializeKey(e)[0];this.cache.set(t,r),this.notify()},e.prototype.keys=function(){return Array.from(this.cache.keys())},e.prototype.has=function(e){var r=this.serializeKey(e)[0];return this.cache.has(r)},e.prototype.clear=function(){this.cache.clear(),this.notify()},e.prototype.delete=function(e){var r=this.serializeKey(e)[0];this.cache.delete(r),this.notify()},e.prototype.serializeKey=function(e){var r=null;if("function"==typeof e)try{e=e()}catch(r){e=""}return Array.isArray(e)?(r=e,e=function(e){if(!e.length)return"";for(var r="arg",t=0;t<e.length;++t)if(null!==e[t]){var n=void 0;"object"!=typeof e[t]&&"function"!=typeof e[t]?n="string"==typeof e[t]?'"'+e[t]+'"':String(e[t]):a.has(e[t])?n=a.get(e[t]):(n=l,a.set(e[t],l++)),r+="@"+n}else r+="@null";return r}(e)):e=String(e||""),[e,r,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var r=this;if("function"!=typeof e)throw new Error("Expected the listener to be a function.");var t=!0;return this.subs.push(e),function(){if(t){t=!1;var n=r.subs.indexOf(e);n>-1&&(r.subs[n]=r.subs[r.subs.length-1],r.subs.length--)}}},e.prototype.notify=function(){for(var e=0,r=this.subs;e<r.length;e++)(0,r[e])()},e}(),d=!0,v={isOnline:function(){return d},isDocumentVisible:function(){return"undefined"==typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!=typeof window&&void 0!==window.addEventListener&&"undefined"!=typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!=typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){d=!0,e()}),!1),window.addEventListener("offline",(function(){return d=!1}),!1))}},h=new f,p="undefined"!=typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),y=i({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,r,t,n,i){if(t.isDocumentVisible()&&!("number"==typeof t.errorRetryCount&&i.retryCount>t.errorRetryCount)){var u=Math.min(i.retryCount,8),o=~~((Math.random()+.5)*(1<<u))*t.errorRetryInterval;setTimeout(n,o,i)}},errorRetryInterval:1e3*(p?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(p?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(r,t){var n,i;if(r===t)return!0;if(r&&t&&(n=r.constructor)===t.constructor){if(n===Date)return r.getTime()===t.getTime();if(n===RegExp)return r.toString()===t.toString();if(n===Array){if((i=r.length)===t.length)for(;i--&&e(r[i],t[i]););return-1===i}if(!n||"object"==typeof r){for(n in i=0,r){if(s.call(r,n)&&++i&&!s.call(t,n))return!1;if(!(n in t)||!e(r[n],t[n]))return!1}return Object.keys(t).length===i}}return r!=r&&t!=t},isPaused:function(){return!1}},v),g="undefined"==typeof window||!!("undefined"!=typeof Deno&&Deno&&Deno.version&&Deno.version.deno),m=g?null:window.requestAnimationFrame?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout(e,1)},b=g?n.useEffect:n.useLayoutEffect,w=(0,n.createContext)({});function O(e,r){var t=(0,n.useState)({})[1],i=(0,n.useRef)(e);b((function(){i.current=e}));var u=(0,n.useRef)({data:!1,error:!1,isValidating:!1}),o=(0,n.useCallback)((function(e){for(var n=!1,o=0,c=Object.keys(e);o<c.length;o++){var s=c[o];i.current[s]!==e[s]&&(i.current[s]=e[s],u.current[s]&&(n=!0))}n&&!r.current&&t({})}),[]);return[i,u,o]}function E(e){var r=Object.assign({},y,(0,n.useContext)(w),e.length>2?e[2]:2===e.length&&"object"==typeof e[1]?e[1]:{}),t=e.length>2||2===e.length&&"function"==typeof e[1]||null===e[1]?e[1]:r.fetcher;return[e[0],r,t]}w.displayName="SWRConfigContext";var R,S={},C={},x={},z={},j={},P={},k={},T=(R=0,function(){return++R});if(!g){var V=function(e){if(y.isDocumentVisible()&&y.isOnline())for(var r in e)e[r][0]&&e[r][0]()};"function"==typeof y.registerOnFocus&&y.registerOnFocus((function(){return V(x)})),"function"==typeof y.registerOnReconnect&&y.registerOnReconnect((function(){return V(z)}))}var I=function(e,r){void 0===r&&(r=!0);var t=h.serializeKey(e),n=t[0],i=t[2],u=t[3];if(!n)return Promise.resolve();var o=j[n];if(n&&o){for(var c=h.get(n),s=h.get(i),a=h.get(u),l=[],f=0;f<o.length;++f)l.push(o[f](r,c,s,a,f>0));return Promise.all(l).then((function(){return h.get(n)}))}return Promise.resolve(h.get(n))},L=function(e,r,t,n){var i=j[e];if(e&&i)for(var u=0;u<i.length;++u)i[u](!1,r,t,n)};function D(e,r,t){return void 0===t&&(t=!0),o(this,void 0,void 0,(function(){var n,i,u,o,s,a,l,f,d,v,p,y;return c(this,(function(c){switch(c.label){case 0:if(n=h.serializeKey(e),i=n[0],u=n[2],!i)return[2,void 0];if(void 0===r)return[2,I(e,t)];if(P[i]=T()-1,k[i]=0,o=P[i],l=!1,"function"==typeof r)try{r=r(h.get(i))}catch(e){r=void 0,a=e}if(!r||"function"!=typeof r.then)return[3,5];l=!0,c.label=1;case 1:return c.trys.push([1,3,,4]),[4,r];case 2:return s=c.sent(),[3,4];case 3:return f=c.sent(),a=f,[3,4];case 4:return[3,6];case 5:s=r,c.label=6;case 6:if((d=function(){if(o!==P[i]){if(a)throw a;return!0}})())return[2,s];if(void 0!==s&&h.set(i,s),h.set(u,a),k[i]=T()-1,!l&&d())return[2,s];if(v=j[i]){for(p=[],y=0;y<v.length;++y)p.push(v[y](!!t,s,a,void 0,y>0));return[2,Promise.all(p).then((function(){if(a)throw a;return h.get(i)}))]}if(a)throw a;return[2,s]}}))}))}var A=function(e,r,t){return e[r]?e[r].push(t):e[r]=[t],function(){var n=e[r],i=n.indexOf(t);i>=0&&(n[i]=n[n.length-1],n.pop())}};function M(){for(var e=this,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var u=E(r),s=u[0],a=u[1],l=u[2],f=h.serializeKey(s),d=f[0],v=f[1],p=f[2],y=f[3],w=(0,n.useRef)(a);b((function(){w.current=a}));var R=(0,n.useRef)(!1),V=(0,n.useRef)(!1),I=(0,n.useRef)(d),M=function(){var e=h.get(d);return void 0===e?a.initialData:e},F=M(),K=h.get(p),_=function(){return void 0!==a.revalidateOnMount?a.revalidateOnMount:a.suspense?!R.current&&void 0!==F:void 0===a.initialData},N=function(){return!!d&&(!!h.get(y)||!R.current&&_())},W=N(),B=(0,n.useCallback)((function(e){V.current||d===I.current&&R.current&&e()}),[d]),q=O({data:F,error:K,isValidating:W},V),H=q[0],J=q[1],Z=q[2],G=(0,n.useCallback)((function(r){return void 0===r&&(r={}),o(e,void 0,void 0,(function(){var e,t,n,i,u,o,s,f,g,m;return c(this,(function(c){switch(c.label){case 0:if(!d||!l)return[2,!1];if(V.current)return[2,!1];if(w.current.isPaused())return[2,!1];e=r.retryCount,t=void 0===e?0:e,n=r.dedupe,i=void 0!==n&&n,u=!0,o=void 0!==S[d]&&i,c.label=1;case 1:return c.trys.push([1,6,,7]),h.set(y,!0),Z({isValidating:!0}),o||L(d,H.current.data,H.current.error,!0),o?(f=C[d],[4,S[d]]):[3,3];case 2:return s=c.sent(),[3,5];case 3:return a.loadingTimeout&&!h.get(d)&&setTimeout((function(){u&&B((function(){return w.current.onLoadingSlow(d,a)}))}),a.loadingTimeout),S[d]=null!==v?l.apply(void 0,v):l(d),C[d]=f=T(),[4,S[d]];case 4:s=c.sent(),setTimeout((function(){C[d]===f&&(delete S[d],delete C[d])}),a.dedupingInterval),B((function(){return w.current.onSuccess(s,d,a)})),c.label=5;case 5:return C[d]!==f?[2,!1]:void 0!==P[d]&&(f<=P[d]||f<=k[d]||0===k[d])?(Z({isValidating:!1}),[2,!1]):(h.set(p,void 0),h.set(y,!1),g={isValidating:!1},void 0!==H.current.error&&(g.error=void 0),a.compare(H.current.data,s)||(g.data=s),a.compare(h.get(d),s)||h.set(d,s),Z(g),o||L(d,s,g.error,!1),[3,7]);case 6:return m=c.sent(),delete S[d],delete C[d],w.current.isPaused()?(Z({isValidating:!1}),[2,!1]):(h.set(p,m),H.current.error!==m&&(Z({isValidating:!1,error:m}),o||L(d,void 0,m,!1)),B((function(){return w.current.onError(m,d,a)})),a.shouldRetryOnError&&B((function(){return w.current.onErrorRetry(m,d,a,G,{retryCount:t+1,dedupe:!0})})),[3,7]);case 7:return u=!1,[2,!0]}}))}))}),[d]);if(b((function(){if(d){var e=R.current;V.current=!1,I.current=d,e&&Z({data:F,error:K,isValidating:W});var r=function(){return G({dedupe:!0})};(e||_())&&(void 0===F||g?r():m(r));var t=!1,n=A(x,d,(function(){!t&&w.current.revalidateOnFocus&&(t=!0,r(),setTimeout((function(){return t=!1}),w.current.focusThrottleInterval))})),u=A(z,d,(function(){w.current.revalidateOnReconnect&&r()})),o=A(j,d,(function(e,t,n,u,o){return void 0===e&&(e=!0),void 0===o&&(o=!0),Z(i({error:n,isValidating:u},a.compare(t,H.current.data)?null:{data:t})),!!e&&(o?r:G)()}));return R.current=!0,function(){V.current=!0,n(),u(),o()}}}),[d,G]),b((function(){var r=null,t=function(){return o(e,void 0,void 0,(function(){return c(this,(function(e){switch(e.label){case 0:return H.current.error||!w.current.refreshWhenHidden&&!w.current.isDocumentVisible()||!w.current.refreshWhenOffline&&!w.current.isOnline()?[3,2]:[4,G({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return w.current.refreshInterval&&r&&(r=setTimeout(t,w.current.refreshInterval)),[2]}}))}))};return w.current.refreshInterval&&(r=setTimeout(t,w.current.refreshInterval)),function(){r&&(clearTimeout(r),r=null)}}),[a.refreshInterval,a.refreshWhenHidden,a.refreshWhenOffline,G]),a.suspense&&void 0===F){if(void 0===K)throw G({dedupe:!0});throw K}var Y=(0,n.useCallback)((function(e,r){return D(I.current,e,r)}),[]),$={revalidate:G,mutate:Y};return Object.defineProperties($,{data:{get:function(){return J.current.data=!0,F},enumerable:!0},error:{get:function(){return J.current.error=!0,K},enumerable:!0},isValidating:{get:function(){return J.current.isValidating=!0,W},enumerable:!0}}),(0,n.useDebugValue)(F),$}Object.defineProperty(w.Provider,"default",{value:y});var F=w.Provider;function K(){for(var e=this,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var i=E(r),s=i[0],a=i[1],l=i[2],f=a.initialSize,d=void 0===f?1:f,v=a.revalidateAll,p=void 0!==v&&v,y=a.persistSize,g=void 0!==y&&y,m=u(a,["initialSize","revalidateAll","persistSize"]),w=null;try{w=h.serializeKey(s?s(0,null):null)[0]}catch(e){}var O=(0,n.useState)({})[1],R=null;w&&(R="ctx@"+w);var S=null;w&&(S="len@"+w);var C=(0,n.useRef)(!1),x=(0,n.useCallback)((function(){var e=h.get(S);return void 0!==e?e:d}),[S,d]),z=(0,n.useRef)(x());b((function(){C.current?w&&h.set(S,g?z.current:d):C.current=!0}),[w]);var j=(0,n.useRef)(),P=M(w?["inf",w]:null,(function(){return o(e,void 0,void 0,(function(){var e,r,t,n,i,u,o,f,d,v,y,g;return c(this,(function(c){switch(c.label){case 0:e=h.get(R)||{},r=e.data,t=e.force,n=[],i=x(),u=null,o=0,c.label=1;case 1:return o<i?(f=h.serializeKey(s?s(o,u):null),d=f[0],v=f[1],d?(y=h.get(d),g=p||t||void 0===y||void 0===t&&0===o&&void 0!==j.current||r&&!a.compare(r[o],y),l&&g?null===v?[3,3]:[4,l.apply(void 0,v)]:[3,6]):[3,8]):[3,8];case 2:return y=c.sent(),[3,5];case 3:return[4,l(d)];case 4:y=c.sent(),c.label=5;case 5:h.set(d,y),c.label=6;case 6:n.push(y),u=y,c.label=7;case 7:return++o,[3,1];case 8:return h.delete(R),[2,n]}}))}))}),m);b((function(){j.current=P.data}),[P.data]);var k=(0,n.useCallback)((function(e,r){if(void 0===r&&(r=!0),R){if(r&&void 0!==e){var t=j.current;h.set(R,{data:t,force:!1})}else r&&h.set(R,{force:!0});return P.mutate(e,r)}}),[R]),T=(0,n.useCallback)((function(e){var r;if(S)return"function"==typeof e?r=e(x()):"number"==typeof e&&(r=e),"number"==typeof r&&(h.set(S,r),z.current=r),O({}),k((function(e){return e}))}),[S,x,k,O]),V={size:x(),setSize:T,mutate:k};return Object.defineProperties(V,{error:{get:function(){return P.error},enumerable:!0},data:{get:function(){return P.data},enumerable:!0},revalidate:{get:function(){return P.revalidate},enumerable:!0},isValidating:{get:function(){return P.isValidating},enumerable:!0}}),V}r.ZP=M},33488:function(e,r,t){"use strict";t.d(r,{hS:function(){return c},Yf:function(){return a},Ak:function(){return s}});var n=t(27378);function i(){return(i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var u,o,c=function(){return(0,n.createContext)({})},s=function(){var e=(0,n.useRef)([]),r=(0,n.useRef)({}),t=(0,n.useState)()[1],u=(0,n.useRef)();return l((function(){if(u.current){var n=Array.from(u.current.querySelectorAll("[data-descendant]"));(n.length!==e.current.length||!n.every((function(r,t){return e.current[t].element===r})))&&(e.current=n.map((function(e){var t=r.current[e.getAttribute("data-descendant")];return i({element:e},t)})),t({}))}})),{ref:u,list:e,map:r,force:t}},a=function(e,r){var t,u=(0,n.useRef)(-1),o=(0,n.useRef)(),c=(0,n.useContext)(e),s=c.list,a=c.map,f=c.force,d=(0,n.useRef)("_"+Math.random().toString(36).substr(2,9));return l((function(){return a.current[d.current]=i({},r,{_internalId:d.current}),f({}),function(){delete a.current[d.current],s.current=s.current.filter((function(e){return e._internalId!==d.current})),u.current=-1,d.current=void 0,f({})}}),[]),l((function(){o.current&&o.current.setAttribute("data-descendant",d.current)})),(null==(t=a.current)?void 0:t[d.current])&&(a.current[d.current]=i({},r,{_internalId:d.current})),u.current=s.current.findIndex((function(e){return e._internalId===d.current})),{index:u.current,ref:o,id:d.current}},l="undefined"!=typeof window&&(null==(u=window)||null==(o=u.document)?void 0:o.createElement)?n.useLayoutEffect:n.useEffect}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2203],{33605:function(e,t,n){"use strict";var r=n(24246),o=n(36083),i=n(2604),c=n(36776),a=n(24231);function s(e){if(e&&("BUILDING"!==("readyState"in e?e.readyState:e.state)&&e.ready&&e.buildingAt))return(0,a.B_)(e.ready-e.buildingAt,{includeSeconds:!0})}t.Z=function(e){var t=e.deployment,n=(0,a.vf)((null===t||void 0===t?void 0:t.buildingAt)||void 0,{includeSeconds:!0});return t?"BUILDING"===("readyState"in t?t.readyState:t.state)?(0,r.jsxs)("span",{className:"geist-inline-center",children:[n,(0,r.jsx)(i.Z,{inline:!0,x:1/4}),(0,r.jsx)(o.Z,{size:16})]}):(0,r.jsx)(r.Fragment,{children:s(t)||"\u2014"}):(0,r.jsx)(c.Z,{})}},69745:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(24246),o=n(88742),i=n.n(o),c=n(40505),a=n(27378),s=n(86677),l=n(58917),u=n(6882),d=n(59768),p=n(2604),f=n(17756),h=n(36427),b=n(60189),y=n(73792),m=n(16378),v=n(18213),g=n(93632),j=n(61659),x=n(97165),O=n(55888),w=n(2545),Z=n(39057),k=n(24281);function P(e,t){var n=(0,a.useState)(!1),o=n[0],P=n[1],D=(0,a.useState)(!1),_=D[0],S=D[1],C=(0,a.useState)(null),R=C[0],N=C[1],E=(0,a.useState)(void 0),A=E[0],T=E[1],M=(0,b.e1)(),L=(0,s.useRouter)(),B=(0,m.Z)().user,I=(0,v.ZP)().team,K=(0,k.B8)(e,{limit:3,production:"true"}).data,U=(0,a.useCallback)((function(e){N(e),P(!0)}),[]),W=(0,a.useCallback)((function(){P(!1)}),[]),F=(0,a.useCallback)((function(){S(!1),N(null),T(void 0)}),[]),G=(0,a.useCallback)((0,c.Z)(i().mark((function e(){var n,r,o,c,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R&&t){e.next=2;break}return e.abrupt("return");case 2:if(S(!0),T(void 0),e.prev=4,r=(0,Z.o)(R),o=null===I||void 0===I?void 0:I.id,r){e.next=10;break}throw{message:"Only Deployments created via Git can be promoted to production.",action:"Learn More",link:"https://vercel.link/promote-non-git-deployment"};case 10:return e.next=12,(0,g.Z)("".concat((0,O.PP)("v13")).concat((0,x.c)({teamId:o})),(0,j.LP)(),{method:"POST",body:JSON.stringify({name:t.name,gitSource:r,target:"production"}),throwOnHTTPError:!0});case 12:c=e.sent,a="production"===R.target&&(R.uid||R.id)===c.id?"Deployment is already the current Production Deployment.":"production"===R.target&&(R.uid||R.id)!==c.id?"Promoted Deployment to Production successfully.":"Created Production Deployment successfully.",null===M||void 0===M||null===(n=M.current)||void 0===n||n.success(a),s=(0,w.Rj)(c,B,I),L.push(s),W(),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(4),T(e.t0);case 23:return e.prev=23,S(!1),e.finish(23);case 26:case"end":return e.stop()}}),e,null,[[4,20,23,26]])}))),[R,M,L,B,I,W,t]),z=(0,a.useMemo)((function(){return t&&0!==(null===K||void 0===K?void 0:K.length)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u.ZP,{preset:"body-2",children:["This Deployment will be promoted to ",(0,r.jsx)("strong",{children:"Production"}),"."]}),R&&"production"!==R.target?(0,r.jsx)(u.ZP,{preset:"body-2",children:"A new Production Deployment (which includes a Build) will be issued using your Production Environment."}):null,(0,r.jsx)(u.ZP,{preset:"body-2",children:"The following Domains will point to your new Deployment:"}),K?(0,r.jsxs)(y.Table,{children:[K.slice(0,2).map((function(e){var t=e.name;return(0,r.jsx)(y.TableRow,{children:(0,r.jsx)(y.TableCell,{style:{padding:1===K.length?0:"0 10px"},children:t.startsWith("*")?t:(0,r.jsx)(d.Z,{href:"https://"+t,color:!0,external:!0,icon:!0,children:t})})},t)})),K.length>2?(0,r.jsx)(y.TableRow,{children:(0,r.jsx)(y.TableCell,{children:(0,r.jsxs)(d.Z,{href:"/[teamSlug]/[project]/settings/domains",as:"/".concat(I?I.slug:null===B||void 0===B?void 0:B.username,"/").concat(encodeURIComponent(t.name),"/settings/domains"),color:!0,icon:!0,children:["...and ",K.length-2," more"]})})}):null]}):null,(0,r.jsx)(u.ZP,{preset:"body-2",children:"Additionally, all Environment Variables defined for the Production Environment in the Project Settings will be applied."}),(0,r.jsx)(u.ZP,{preset:"body-2",children:"Are you sure you want to continue?"})]}):(0,r.jsx)(u.ZP,{preset:"body-2",children:"Your Project is missing a Production Domain. Please assign a Domain to your Project."})}),[K,t,I,B,R]),H=(0,a.useMemo)((function(){if(t&&0===(null===K||void 0===K?void 0:K.length)){var e=L.query.teamSlug,n="/".concat(e,"/").concat(t.name,"/settings/domains");return(0,r.jsx)(f.Action,{onClick:function(){return L.push("/[teamSlug]/[project]/settings/domains",n)},loading:_,children:"Add Domains"})}return(0,r.jsx)(f.Action,{onClick:G,loading:_,children:"Promote to Production"})}),[G,_,K,t,L]);return{modal:(0,a.useMemo)((function(){return(0,r.jsxs)(f.Modal,{active:o,onClickOutside:W,onAnimationDone:F,width:"500px",children:[(0,r.jsxs)(l.Z,{center:!0,children:[(0,r.jsx)(u.ZP,{h3:!0,children:"Promote to Production"}),(0,r.jsx)(p.Z,{y:-2})]}),(0,r.jsxs)(f.Body,{children:[z,A&&(0,r.jsx)(h.Z,{error:A})]}),(0,r.jsxs)(f.Actions,{children:[(0,r.jsx)(f.Action,{onClick:W,loading:!1,children:"Cancel"}),H]})]})}),[z,W,F,o,H,A]),close:W,open:U}}},55065:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(24246),o=n(88742),i=n.n(o),c=n(40505),a=n(27378),s=n(86677),l=n(80890),u=n(58917),d=n(19210),p=n(53247),f=n(6882),h=n(63677),b=n(2604),y=n(17756),m=n(36427),v=n(60189),g=n(62323),j=n(16378),x=n(18213),O=n(66594),w=n(2545),Z=n(48281),k=n(3686),P=n(47639),D=n.n(P),_=n(24281),S=!1;function C(e,t){var n=(0,a.useState)(!1),o=n[0],P=n[1],C=(0,a.useState)(!1),R=C[0],N=C[1],E=(0,a.useState)(null),A=E[0],T=E[1],M=(0,a.useState)(void 0),L=M[0],B=M[1],I=(0,a.useState)(S),K=I[0],U=I[1],W=(0,v.e1)(),F=(0,s.useRouter)(),G=(0,j.Z)().user,z=(0,x.ZP)().team,H=null===A||void 0===A?void 0:A.target,Y=(0,a.useMemo)((function(){if(!A)return null;var e=Array.isArray(A.alias)?A.alias:[];return Array.from(new Set(e))}),[A]),q=(0,_.B8)("production"===H?e:null,{limit:3,production:"true"}).data,J=(0,a.useCallback)((function(e){T(e),P(!0),U(S)}),[]),V=(0,a.useCallback)((function(){P(!1)}),[]),Q=(0,a.useCallback)((function(){N(!1),T(null),B(void 0)}),[]),X=(0,a.useCallback)((0,c.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N(!0),B(void 0),(0,O.Z)({deployment:A,project:t,team:z,target:H,includeBuildCache:K}).then((function(e){var t;if(e){null===W||void 0===W||null===(t=W.current)||void 0===t||t.success("Deployment created successfully.");var n=(0,w.Rj)(e,G,z);F.push(n),V()}})).catch((function(e){B(e)})).finally((function(){N(!1),U(S)}));case 3:case"end":return e.stop()}}),e)}))),[A,t,W,F,G,z,V,H,K]),$=(0,a.useMemo)((function(){return 0!==(null===Y||void 0===Y?void 0:Y.length)||q&&0!==(null===q||void 0===q?void 0:q.length)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.ZP,{preset:"body-2",noMargin:!0,style:{color:"var(--accents-6)"},children:"You are about to create a new Deployment with the same source code as your current Deployment, but with the newest configuration from your Project Settings."}),(0,r.jsx)(b.Z,{y:2/3}),(0,r.jsx)(f.ZP,{preset:"body-2",noMargin:!0,style:{color:"var(--accents-6)"},children:"The following Domains will point to your new Deployment:"}),(0,r.jsx)(b.Z,{y:2/3}),"production"!==H&&Y&&Y.map((function(e){return(0,r.jsx)(p.ZP,{actions:(0,r.jsx)(h.Z,{href:"https://"+e,external:!0,variant:"highlight",children:(0,r.jsx)(u.Z,{row:!0,children:(0,r.jsx)(g.Z,{size:20})})}),children:(0,r.jsx)(p.Sn,{title:(0,r.jsx)(h.Z,{href:"https://"+e,external:!0,variant:"highlight",children:e})})},e)})),q&&(0,r.jsxs)(r.Fragment,{children:["production"===H&&q.slice(0,2).map((function(e){var t=e.name;return(0,r.jsx)(p.ZP,{actions:!(0,Z.Z)(t)&&(0,r.jsx)(h.Z,{href:"https://"+t,external:!0,variant:"highlight",children:(0,r.jsx)(u.Z,{row:!0,children:(0,r.jsx)(g.Z,{size:20})})}),children:(0,r.jsx)(p.Sn,{title:(0,Z.Z)(t)?t:(0,r.jsx)(h.Z,{href:"https://"+t,external:!0,variant:"highlight",children:t})})},t)})),t&&"production"===H&&q.length>2&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.Z,{y:2/3}),(0,r.jsxs)(h.Z,{tab:!0,href:"/".concat(z?z.slug:null===G||void 0===G?void 0:G.username,"/").concat(encodeURIComponent(t.name),"/settings/domains"),variant:"highlight",children:["...and ",q.length-2," more."]})]}),t&&"production"!==H&&q.length>0&&(0,r.jsxs)(h.Z,{tab:!0,href:"/".concat(z?z.slug:null===G||void 0===G?void 0:G.username,"/").concat(encodeURIComponent(t.name),"/settings/domains"),variant:"highlight",children:["...and ",q.length," more."]})]})]}):(0,r.jsx)(f.ZP,{preset:"body-2",noMargin:!0,children:"Your new Deployment will not be assigned any Domains."})}),[Y,q,H,t,G,z]);return{modal:(0,a.useMemo)((function(){return(0,r.jsxs)(y.Modal,{active:o,onClickOutside:V,onAnimationDone:Q,width:"500px",children:[(0,r.jsx)(u.Z,{center:!0,className:D().heading,children:(0,r.jsxs)(f.ZP,{h4:!0,noMargin:!0,weight:500,children:["Redeploy ",H&&"to ".concat((0,k.Z)(H))]})}),(0,r.jsxs)(y.Body,{className:D().body,children:[$,(0,r.jsx)(b.Z,{y:1}),L&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Z,{error:L}),(0,r.jsx)(b.Z,{y:1})]}),(0,r.jsxs)(u.Z,{row:!0,children:[(0,r.jsx)(l.Z,{checked:K,onChange:function(){U(!K)},children:"Include Build Cache"}),(0,r.jsx)(d.Z,{margin:24,className:"geist-show-on-mobile"}),(0,r.jsx)(b.Z,{expand:!0,className:"geist-hide-on-mobile"}),(0,r.jsx)(h.Z,{tab:!0,href:"/docs/build-step#caching",variant:"highlight",children:"Learn more about Caching \u2192"})]})]}),(0,r.jsxs)(y.Actions,{children:[(0,r.jsx)(y.Action,{onClick:V,loading:!1,children:"Cancel"}),(0,r.jsx)(y.Action,{onClick:X,loading:R,disabled:!Y&&!q,children:"Redeploy"})]})]})}),[$,V,Q,o,R,L,X,Y,q,K,H]),close:V,open:J}}},19210:function(e,t,n){"use strict";var r=n(24246);t.Z=function(e){var t=e.margin,n=void 0===t?50:t,o=e.className;return(0,r.jsx)("hr",{style:{border:"0",borderTop:"1px solid var(--accents-2)",margin:"".concat(n,"number"===typeof n?"px 0":" 0")},className:o})}},80890:function(e,t,n){"use strict";n.d(t,{O:function(){return y}});var r=n(24246),o=n(67105),i=n(98502),c=n(27378),a=n(38944),s=n(68677),l=n(75223),u=n.n(l),d=n(47045),p=n(58093);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b=function(e){var t,n=e.label,l=e.disabled,f=e.checked,b=void 0!==f&&f,y=e.className,g=e.children,j=e.indeterminate,x=e.style,O=e.fullWidth,w=(0,i.Z)(e,["label","disabled","checked","className","children","indeterminate","style","fullWidth"]),Z=(0,p.Z)("checkbox-"),k=(0,d.B)()||l,P=n?s.Z:c.Fragment,D=void 0===n?"label":"span",_=n?{value:n,withInput:!0,id:Z}:void 0;return(0,r.jsx)(P,h(h({},_),{},{children:(0,r.jsxs)(D,{className:(0,a.Z)(u().container,y,(t={},(0,o.Z)(t,u().disabled,l),(0,o.Z)(t,u().fullWidth,O),t)),style:x,children:[(0,r.jsxs)("span",{className:u().check,children:[g&&(0,r.jsx)(r.Fragment,{children:"\u200b"}),(0,r.jsx)("input",h(h({},w),{},{className:(0,a.Z)("geist-sr-only",u().input),type:"checkbox",id:Z,checked:b,disabled:k})),(0,r.jsx)("span",{className:(0,a.Z)(u().icon,(0,o.Z)({},u().indeterminate,j&&!b)),"aria-hidden":!0,children:(0,r.jsx)("svg",{viewBox:"0 0 20 20",height:16,width:16,fill:"none",children:b?m:j?v:null})})]}),g&&(0,r.jsx)("span",{className:u().text,children:g})]})}))};t.Z=(0,c.memo)(b);var y=function(e){var t=(0,c.useState)(e),n=t[0],r=t[1];return[n,(0,c.useCallback)((function(){return r((function(e){return!e}))}),[])]},m=(0,r.jsx)("path",{d:"M14 7L8.5 12.5L6 10",stroke:"var(--geist-background)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),v=(0,r.jsx)("line",{x1:"5",y1:"10",x2:"15",y2:"10",stroke:"var(--checkbox-color)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})},17756:function(e,t,n){"use strict";n.r(t),n.d(t,{Action:function(){return O},Actions:function(){return w},Body:function(){return D},Error:function(){return C},Header:function(){return _},Inset:function(){return E},Modal:function(){return m},Outset:function(){return A},P:function(){return S},Subtitle:function(){return P},Title:function(){return k},default:function(){return m}});var r=n(67105),o=n(24246),i=(n(27378),n(38944)),c=n(389),a=n.n(c),s=n(65218),l=n(3111),u=n(93066),d=n(96637),p=n(35668),f=n.n(p),h=n(79455),b=n(75885),y=(0,s.default)((function(){return Promise.all([n.e(8944),n.e(6536)]).then(n.bind(n,96536))}),{ssr:!1,loadableGenerated:{webpack:function(){return[96536]},modules:["../geist/modal/modal.tsx -> ../drawer"]}}),m=function(e){var t=e.active,n=e.activeRenderDelay,c=e.children,s=e.onAnimationDone,p=e.onEnterKeyPress,m=e.onClickOutside,v=e.width,g=e.allowOverflow,j=(0,h.dD)(),x=(0,b.Z)(t,{enterDelay:n||-1,exitDelay:n||350,onUnmount:s}),O=x.mounted,w=x.rendered;return O?j?(0,o.jsx)(y,{show:t,onDismiss:m,onAnimationDone:s,children:c}):(0,o.jsx)(u.Z,{handlers:{ESC:m,ENTER:p},useKeys:w,children:(0,o.jsx)(l.Z,{active:w,onClick:m,render:function(e){var t,n=e.innerRef;return(0,o.jsx)(d.Z,{active:w,children:(0,o.jsx)("div",{className:(0,i.Z)(f().wrapper,(t={},(0,r.Z)(t,f().active,w),(0,r.Z)(t,f().allowOverflow,g),t)),ref:n,style:{width:v||420},"data-geist-modal":"",children:(0,o.jsx)(a(),{children:c})})})}})}):null},v=n(98502),g=n(36776);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=e.children,n=e.onClick,r=e.disabled,i=e.loading,c=e.tabIndex,a=e.type,s=void 0===a?"button":a,l=(0,v.Z)(e,["children","onClick","disabled","loading","tabIndex","type"]);return(0,o.jsx)("button",x(x({className:f().action,disabled:r||i,onClick:r||i?void 0:n,tabIndex:c,type:s},l),{},{"data-geist-modal-action":"",children:i?(0,o.jsx)(g.Z,{size:4,height:"14px"}):t}))},w=function(e){var t=e.children;return(0,o.jsx)("footer",{className:f().actions,"data-geist-modal-actions":"",children:t})},Z=n(6882),k=function(e){var t=e.children;return(0,o.jsx)(Z.ZP,{h3:!0,center:!0,noMargin:!0,"data-geist-modal-title":"",children:t})},P=function(e){var t=e.children;return(0,o.jsx)(Z.ZP,{noMargin:!0,type:"secondary",preset:"body-2",center:!0,"data-geist-modal-subtitle":"",children:t})},D=function(e){var t=e.padding,n=void 0===t||t,c=e.children,a=e.className;return(0,o.jsx)("div",{className:(0,i.Z)(f().modalBody,a,(0,r.Z)({},f().padding,n)),"data-geist-modal-body":"",children:c})},_=function(e){var t=e.children;return(0,o.jsx)("header",{className:f().header,"data-geist-modal-header":"",children:(0,o.jsx)("h3",{children:t})})},S=function(e){var t=e.children;return(0,o.jsx)("div",{className:f().modalParagraph,"data-geist-modal-paragraph":"",children:t})},C=function(e){var t=e.children;return(0,o.jsx)("header",{className:f().error,"data-geist-modal-error":"",children:(0,o.jsx)("h3",{children:t})})},R=n(60042),N=n.n(R),E=function(e){var t=e.last,n=e.children;return(0,o.jsx)("div",{className:N()(f().inset,(0,r.Z)({},f().last,t)),children:n})},A=function(e){var t=e.children;return(0,o.jsx)("div",{className:f().outset,children:t})}},3686:function(e,t,n){"use strict";function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}n.d(t,{Z:function(){return r}})},66594:function(e,t,n){"use strict";var r=n(88742),o=n.n(r),i=n(67105),c=n(40505),a=n(93632),s=n(61659),l=n(97165),u=n(55888),d=n(39057);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(){return(h=(0,c.Z)(o().mark((function e(t){var n,r,i,c,p,h,b,y,m;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.deployment,r=t.project,i=t.team,c=t.target,p=t.includeBuildCache,h=void 0!==p&&p,n&&r){e.next=3;break}return e.abrupt("return",null);case 3:if(b=(0,d.o)(n),y=null===i||void 0===i?void 0:i.id,b){e.next=8;break}throw{message:"Only Deployments created via Git can be redeployed.",action:"Learn More",link:"https://vercel.link/redeploy-non-git-deployment"};case 8:if(!function(){var e,t;if("production"!==n.target)return!1;if(null===(e=r.targets)||void 0===e||null===(t=e.production)||void 0===t||!t.id)return!1;var o=r.targets.production;return"READY"===o.readyState&&(n.id||n.uid)!==o.id}()){e.next=12;break}throw{message:"A more recent Production Deployment has been created, so the one you are looking at cannot be redeployed anymore.",action:"Learn More",link:"https://vercel.link/redeploy-production-deployment"};case 12:return e.next=14,(0,a.Z)("".concat((0,u.PP)("v13")).concat((0,l.c)(f({teamId:y,forceNew:"1"},h&&{withCache:"1"}))),(0,s.LP)(),{method:"POST",body:JSON.stringify({name:r.name,gitSource:b,target:c||void 0}),throwOnHTTPError:!0});case 14:return m=e.sent,e.abrupt("return",m);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.Z=function(e){return h.apply(this,arguments)}},87203:function(e,t,n){"use strict";function r(e){if(e&&"network_error"!==e.code&&"rate_limited"!==e.code&&"too_many_requests"!==e.code&&"cancelled"!==e.message)throw e}n.d(t,{Z:function(){return r}})},39057:function(e,t,n){"use strict";function r(e){var t=e.gitSource,n=e.meta;return t||(n.githubDeployment?{type:"github",org:String(n.githubCommitOrg),repo:String(n.githubCommitRepo),ref:String(n.githubCommitRef),sha:String(n.githubCommitSha)}:n.gitlabDeployment?{type:"gitlab",projectId:Number(n.gitlabProjectId),ref:String(n.gitlabCommitRef),sha:String(n.gitlabCommitSha)}:n.bitbucketDeployment?{type:"bitbucket",owner:String(n.bitbucketRepoOwner),slug:String(n.bitbucketRepoSlug),ref:String(n.bitbucketCommitRef),sha:String(n.bitbucketCommitSha)}:null)}n.d(t,{o:function(){return r}})},93066:function(e,t,n){"use strict";n.d(t,{Z:function(){return N}});var r={};n.r(r),n.d(r,{ARROW_DOWN:function(){return h},ARROW_LEFT:function(){return b},ARROW_RIGHT:function(){return y},ARROW_UP:function(){return m},BACKSPACE:function(){return v},COMMA:function(){return g},ENTER:function(){return x},ENTER_OR_SPACEBAR:function(){return j},ESC:function(){return O},F:function(){return P},SHIFT:function(){return k},SPACEBAR:function(){return w},TAB:function(){return Z}});var o=n(24246),i=n(98502),c=n(83101),a=n(76982),s=n(55395),l=n(9968),u=n(39183),d=n(3184),p=n(67105),f=n(27378),h=D(40),b=D(37),y=D(39),m=D(38),v=D(8),g=D(188),j=function(e){return D(13)(e)||D(32)(e)},x=D(13),O=D(27),w=D(32),Z=D(9),k=D(16),P=D(70);function D(e){return function(t){return t.keyCode===e}}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,d.Z)(e);if(t){var o=(0,d.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,u.Z)(this,n)}}var R,N=(R=function(e){return e.children},function(e){(0,l.Z)(n,e);var t=C(n);function n(){var e;(0,c.Z)(this,n);for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i)),(0,p.Z)((0,s.Z)(e),"getMatcher",(function(t){return(e.props.matchers?S(S({},r),e.props.matchers):r)[t]})),(0,p.Z)((0,s.Z)(e),"handleKeyDown",(function(t){var n=e.props.handlers,r=n&&(n.keydown||n);Object.keys(r||{}).forEach((function(r){var o=e.getMatcher(r),i=n[r]||n.keydown&&n.keydown[r];o&&o(t)&&i&&i.call((0,s.Z)(e),t,e.props)}))})),(0,p.Z)((0,s.Z)(e),"handleKeyUp",(function(t){var n=e.props.handlers,r=n&&n.keyup;Object.keys(r||{}).forEach((function(n){var o=e.getMatcher(n),i=r[n];o&&o(t)&&i&&i.call((0,s.Z)(e),t,e.props)}))})),e}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){this.props.useKeys&&(document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp))}},{key:"componentDidUpdate",value:function(){this.props.useKeys?(document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)):(document.removeEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp))}},{key:"componentWillUnmount",value:function(){this.props.useKeys&&(document.removeEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp))}},{key:"render",value:function(){var e=this.props,t=(e.useKeys,(0,i.Z)(e,["useKeys"]));return(0,o.jsx)(R,S({},t))}}]),n}(f.Component))},96637:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var r=n(24246),o=n(83101),i=n(76982),c=n(9968),a=n(39183),s=n(3184),l=n(27378),u=n(38944),d=n(55911),p=0;function f(){0===p&&(document.body.style.overflow="hidden"),p+=1}function h(){0===(p-=1)&&(document.body.style.overflow=null)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.Z)(e);if(t){var o=(0,s.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,a.Z)(this,n)}}var y=function(e){(0,c.Z)(n,e);var t=b(n);function n(){return(0,o.Z)(this,n),t.apply(this,arguments)}return(0,i.Z)(n,[{key:"componentDidMount",value:function(){f()}},{key:"componentWillUnmount",value:function(){h()}},{key:"render",value:function(){var e=this.props,t=e.active,n=e.children,o=e.className,i=e.container,c=e.onClick;return(0,r.jsx)(d.Z,{container:i,children:(0,r.jsxs)("div",{className:(0,u.Z)("geist-overlay",o),children:[(0,r.jsx)("div",{className:(0,u.Z)("geist-overlay-backdrop",{active:t}),onClick:c}),n]})})}}]),n}(l.Component)},73792:function(e,t,n){"use strict";n.r(t),n.d(t,{DotsMenu:function(){return B.Z},Table:function(){return R},TableCell:function(){return L},TableHead:function(){return w},TableRow:function(){return P}});var r=n(67105),o=n(24246),i=n(98502),c=n(79892),a=n(27378),s=n(38944),l=n(62049);function u(e,t){var n=this;if(e){var r=[];return a.Children.forEach(e,(function(e,o){t&&t.call(n,e,o)&&r.push(e)})),r}return[]}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e,t){var n=0;return a.Children.map(e,(function(e){return t(e)&&e.props.onClick?(n+=1,a.cloneElement(e,{selectable:!0,even:n%2!==0})):e}))},h=function(e){var t=e.isRowType,n=(0,i.Z)(e,["isRowType"]);return(0,o.jsxs)("tbody",p(p({},n),{},{className:"jsx-3916094181 "+(n&&null!=n.className&&n.className||""),children:[f(n.children,t),(0,o.jsx)(c.default,{id:"3916094181",children:["tbody.jsx-3916094181 tr:not(:last-child) td{border-bottom:1px solid var(--accents-2);}","thead+tbody.jsx-3916094181 tr:last-child td{border-bottom:1px solid var(--accents-2);}","tbody.jsx-3916094181 td{color:var(--accents-6);font-size:14px;}"]})]}))},b=n(83101),y=n(76982),m=n(9968),v=n(39183),g=n(3184);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,g.Z)(e);if(t){var o=(0,g.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,v.Z)(this,n)}}var w=function(e){(0,m.Z)(n,e);var t=O(n);function n(){return(0,b.Z)(this,n),t.apply(this,arguments)}return(0,y.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.innerRef,r=(0,i.Z)(e,["children","innerRef"]);return(0,o.jsx)("tr",x(x({},r),{},{ref:n,children:a.Children.map(t,(function(e,t){return e?(0,a.cloneElement)(e,{column:t,tagName:"th"}):null}))}))}}]),n}(a.Component);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=function(e){var t=e.ariaRole,n=void 0===t?"row":t,r=e.children,c=e.className,l=void 0===c?"":c,u=e.disabled,d=void 0!==u&&u,p=e.onClick,f=void 0===p?void 0:p,h=e.selectable,b=void 0!==h&&h,y=(0,i.Z)(e,["ariaRole","children","className","disabled","onClick","selectable"]);return(0,o.jsx)("tr",k(k({"aria-roledescription":n,className:(0,s.Z)("row",{selectable:b,disabled:d},l),onClick:f},y),{},{children:a.Children.map(r,(function(e){return e?(0,a.cloneElement)(e,{tagName:"td"}):null}))}))};function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e){return(0,l.Z)(P,e)},C=function(e){return(0,l.Z)(w,e)},R=function(e){var t=e.children,n=e.className,r=void 0===n?"":n,a=e.isHeadType,d=void 0===a?C:a,p=e.isRowType,f=void 0===p?S:p,b=e.innerRef,y=void 0===b?void 0:b,m=(0,i.Z)(e,["children","className","isHeadType","isRowType","innerRef"]),v=u(t,(function(e){return(0,l.Z)("col",e)})),g=u(t,d),j=u(t,f);return(0,o.jsxs)("table",_(_({},m),{},{ref:y,className:"jsx-4218107682 "+((0,s.Z)("table",r)||""),children:[v.length>0&&(0,o.jsx)("colgroup",{className:"jsx-4218107682",children:v}),g.length>0&&(0,o.jsx)("thead",{className:"jsx-4218107682",children:g}),(0,o.jsx)(h,{isRowType:f,children:j}),(0,o.jsx)(c.default,{id:"4218107682",children:["table.jsx-4218107682{border-collapse:separate;border-spacing:0;width:100%;}","table.jsx-4218107682 td:nth-child(1){border-left:1px solid transparent;}","table.jsx-4218107682 td:last-child{border-right:1px solid transparent;}","thead.jsx-4218107682 th:nth-child(1){border-bottom:1px solid var(--accents-2);border-left:1px solid var(--accents-2);border-radius:4px 0px 0px 4px;border-top:1px solid var(--accents-2);}","thead.jsx-4218107682 th:last-child{border-bottom:1px solid var(--accents-2);border-radius:0 4px 4px 0;border-right:1px solid var(--accents-2);border-top:1px solid var(--accents-2);}","thead.jsx-4218107682 th{background:var(--accents-1);border-bottom:1px solid var(--accents-2);border-top:1px solid var(--accents-2);}","table.jsx-4218107682 th,table.jsx-4218107682 td{padding:0 10px;text-align:left;vertical-align:top;}","table.jsx-4218107682 th > div{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:40px;font-size:12px;}","table.jsx-4218107682 td > div{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:50px;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;}","table.jsx-4218107682 td.multi-line > div{min-height:none;padding:14px 0;}","table.jsx-4218107682 th{color:var(--accents-5);font-size:14px;font-weight:400;-webkit-letter-spacing:0;-moz-letter-spacing:0;-ms-letter-spacing:0;letter-spacing:0;}","table.jsx-4218107682 th.right > div,table.jsx-4218107682 td.right > div{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}","table.jsx-4218107682 th.center > div,table.jsx-4218107682 td.center > div{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}","table.jsx-4218107682 tr.disabled{pointer-events:none;opacity:0.6;}","table.jsx-4218107682 tr.selectable{cursor:pointer;}","table.jsx-4218107682 tr.selectable:hover{background-color:#fcfcfc;}","@media (min-width:1024px){table.jsx-4218107682 td.instances-url{min-width:360px;}}"]})]}))},N=n(55395),E=n(3439);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,g.Z)(e);if(t){var o=(0,g.Z)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return(0,v.Z)(this,n)}}var L=function(e){(0,m.Z)(n,e);var t=M(n);function n(){var e;(0,b.Z)(this,n);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),(0,r.Z)((0,N.Z)(e),"handleClick",(function(t){e.props.onClick&&e.props.onClick(t,e.props.value)})),e}return(0,y.Z)(n,[{key:"render",value:function(){var e=this.props,t=e.align,n=e.children,r=e.className,c=e.innerRef,u=e.disabled,d=e.sorted,p=e.tagName,f=(0,i.Z)(e,["align","children","className","innerRef","disabled","sorted","tagName"]);return(0,a.createElement)(p,T(T({},f),{},{className:(0,s.Z)("table-cell",{"head-cell":"th"===p,"row-cell":"td"===p,right:"right"===t,center:"center"===t,sorted:d,disabled:u},r),ref:c,onClick:this.handleClick}),(0,l.Z)("div",n)?n:(0,a.createElement)("div",{},n,d&&(0,o.jsx)(E.Z,{})))}}]),n}(a.Component);(0,r.Z)(L,"defaultProps",{tagName:"td"});var B=n(8092)},62049:function(e,t,n){"use strict";function r(e,t){return t&&t.type===e}n.d(t,{Z:function(){return r}})},47639:function(e){e.exports={heading:"use-redeploy-modal_heading__1rDOo",body:"use-redeploy-modal_body__2_h0N"}},75223:function(e){e.exports={container:"checkbox_container__Be5wN",fullWidth:"checkbox_fullWidth__3T_ha",disabled:"checkbox_disabled__Osy1g",check:"checkbox_check__3NWhZ",text:"checkbox_text__2GVnc",icon:"checkbox_icon__eFdOT",input:"checkbox_input__FTlYU"}},35668:function(e){e.exports={wrapper:"modal_wrapper__edSN2",allowOverflow:"modal_allowOverflow__1yG5M",active:"modal_active__rzo9w",actions:"modal_actions__2GjX0",action:"modal_action__24so5",modalBody:"modal_modalBody__28ePJ",padding:"modal_padding__2Ed5l",error:"modal_error__GL2IC",header:"modal_header__2nA_e",modalParagraph:"modal_modalParagraph__4ZFQE",inset:"modal_inset__1Mdn6",last:"modal_last__17Mry",outset:"modal_outset__DWAqd"}}}]);
(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[804],{29906:function(e,n,t){"use strict";t.d(n,{P:function(){return f},c:function(){return p}});var r=t(67105),i=t(24246),o=t(98502),a=t(27378),c=t(38944),s=t(14345),l=t.n(s);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=function(e){var n=e.title,t=e.children,r=e.className,s=(0,o.Z)(e,["title","children","className"]);return a.Children.count(t)?(0,i.jsxs)("details",d(d({className:(0,c.Z)(r,l().item)},s),{},{children:[(0,i.jsx)("summary",{className:l().summary,children:(0,i.jsx)("div",{children:n})}),(0,i.jsx)("div",{className:l().content,children:t})]})):(0,i.jsx)("div",{className:l().childless,children:n})},p=function(e){var n=e.children,t=e.className,r=(0,o.Z)(e,["children","className"]);return(0,i.jsx)("div",d(d({className:(0,c.Z)(t,l().subitem)},r),{},{children:n}))}},66567:function(e,n,t){"use strict";t.d(n,{q:function(){return u},O:function(){return d}});var r=t(24246),i=t(67105),o=t(98502),a=t(6882),c=t(2604);function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var u=function(e){var n=e.children,t=(0,o.Z)(e,["children"]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.ZP,l(l({h3:!0,Component:"h1",center:!0,noMargin:!0},t),{},{children:n})),(0,r.jsx)(c.Z,{})]})},d=function(e){var n=e.children,t=(0,o.Z)(e,["children"]);return(0,r.jsx)(a.ZP,l(l({type:"secondary",preset:"body-2",noMargin:!0},t),{},{children:n}))}},16729:function(e,n,t){"use strict";t.d(n,{DR:function(){return s},Ss:function(){return l},E3:function(){return u},CF:function(){return d},r_:function(){return f},ui:function(){return p},wn:function(){return h}});var r=t(59972),i=t(27378),o=t(29372);function a(e,n){var t;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,n){if(!e)return;if("string"===typeof e)return c(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(e,n)}(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==t.return||t.return()}finally{if(s)throw o}}}}function c(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var s=20,l={DESTINATION_SELECT:"destination-select",CREATE_TEAM:"create-team",BILLING:"billing",PAID_FEATURES:"paid-features",GATHER_DEPS:"gather-deps",OVERVIEW:"overview"},u={step:l.DESTINATION_SELECT,history:[l.DESTINATION_SELECT],destinationId:null,conflict:{hasConflict:!1},paidFeatures:{concurrentBuilds:!0,passwordProtection:!0,previewDeploymentSuffix:!0},transferData:null},d=(0,i.createContext)([u,function(){}]),f=function(){return(0,i.useContext)(d)},p=function(){var e=f(),n=(0,r.Z)(e,1)[0].destinationId,t=(0,o.Z)().teams;return t&&t.find((function(e){return e.id===n}))||null},v=["concurrentBuilds","passwordProtection","previewDeploymentSuffix"],h=function(e){var n,t=e.dispatch,r=e.isTeam,i=e.team,o=e.destinationAccount,c="enterprise"===(null===o||void 0===o||null===(n=o.billing)||void 0===n?void 0:n.plan);if(r){if(c)return t({type:"SET_STEP",step:l.GATHER_DEPS});var s=function(e,n){var t,r;if(null===e||void 0===e||null===(t=e.billing)||void 0===t||!t.invoiceItems||null===n||void 0===n||null===(r=n.billing)||void 0===r||!r.invoiceItems)return{hasConflict:!1};var i,o={},c=a(v);try{for(c.s();!(i=c.n()).done;){var s=i.value,l=e.billing.invoiceItems[s],u=n.billing.invoiceItems[s];if(l&&l.quantity){var d=(null===u||void 0===u?void 0:u.quantity)||0;l.quantity>d&&(o[s]={newAmount:l.quantity,difference:l.quantity-d,price:(null===u||void 0===u?void 0:u.price)||l.price})}}}catch(f){c.e(f)}finally{c.f()}return Object.keys(o).length?{hasConflict:!0,conflicts:o}:{hasConflict:!1}}(i,o);t({type:"UPDATE",state:{conflict:s}}),s.hasConflict?t({type:"SET_STEP",step:l.PAID_FEATURES}):t({type:"SET_STEP",step:l.GATHER_DEPS})}else t({type:"SET_STEP",step:l.GATHER_DEPS})}},12317:function(e,n,t){"use strict";t.d(n,{Q:function(){return M}});var r=t(24246),i=t(88742),o=t.n(i),a=t(40505),c=t(59972),s=t(27378),l=t(86677),u=t(16729),d=t(66567),f=t(2604),p=t(17756),v=t(58917),h=t(59523),m=t(6882),j=t(92742),y=t(43572),b=t(98639),x=t(29906),g=t(68880),P=t.n(g),w=t(92485),E=t(44316),O=t(29372),T=t(27383),Z=t(70907),_=t(91885),S=t(93632),I=t(55888),D=t(86614),A=t(61659),N=t(97165),C=t(71521),R=t(99700);n.Z=function(){var e=(0,O.Z)(),n=e.account,t=e.isTeam,i=(0,u.r_)(),g=(0,c.Z)(i,2),F=g[0],H=F.transferData,z=F.conflict,U=F.paidFeatures,B=g[1],q=(0,u.ui)(),G=(0,l.useRouter)(),J=(0,T.P)(G.query.project).data,W=(0,s.useState)(!1),V=W[0],K=W[1],Q=(0,s.useState)((null===J||void 0===J?void 0:J.name)||""),X=Q[0],Y=Q[1],$=(0,s.useState)(H?null:{message:"Transfer information not found, please go back and try again."}),ee=$[0],ne=$[1],te=(0,Z.f)({project:J,limit:u.DR}),re=(0,c.Z)(te,2)[1],ie=re.aliases,oe=re.loadMore,ae=re.isLoadingMore,ce=re.isReachingEnd,se=(0,_.ZP)(G.query.project).data,le=(0,C.Z)(G.query.project).data,ue=le&&le.integrations.length>0,de=null!==se&&void 0!==se&&se.envs?se.envs.filter((function(e){return"secret"===e.type})):[],fe=function(){var e=(0,a.Z)(o().mark((function e(r){var i,a,c,s,l,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r&&r.preventDefault(),q){e.next=3;break}return e.abrupt("return");case 3:if(X){e.next=5;break}return e.abrupt("return",ne({message:"Please enter a new project name."}));case 5:return K(!0),e.prev=6,e.next=9,(0,D.NU)({name:X,teamId:(null===q||void 0===q?void 0:q.id)||null});case 9:return K(!1),e.abrupt("return",ne({message:'Project "'.concat(X,'" already exists, please use a new name.')}));case 13:if(e.prev=13,e.t0=e.catch(6),404===e.t0.status){e.next=18;break}return K(!1),e.abrupt("return",ne({message:'Project "'.concat(X,'" already exists, please use a new name.')}));case 18:return l=z.hasConflict?{concurrentBuilds:U.concurrentBuilds&&null!==(i=null===(a=z.conflicts.concurrentBuilds)||void 0===a?void 0:a.newAmount)&&void 0!==i?i:0,passwordProtection:!!U.passwordProtection&&!(null===(c=z.conflicts.passwordProtection)||void 0===c||!c.newAmount),previewDeploymentSuffix:!!U.previewDeploymentSuffix&&!(null===(s=z.conflicts.previewDeploymentSuffix)||void 0===s||!s.newAmount)}:{},u=(0,A.LP)(),e.prev=20,e.next=23,(0,S.Z)("".concat((0,I.HJ)("v3"),"/").concat(J.name,"/transfer").concat((0,N.c)({teamId:t?n.id:void 0})),u,{method:"POST",body:JSON.stringify({toAccountId:q.id,newProjectName:X,paidFeatures:l}),throwOnHTTPError:!0});case 23:ue?R.j(R.xW.PROJECT_TRANSFER_INITIATED_WITH_MISSING_INTEGRATIONS):R.j(R.xW.PROJECT_TRANSFER_INITIATED),U.concurrentBuilds&&U.passwordProtection&&U.previewDeploymentSuffix?R.j(R.xW.PROJECT_TRANSFER_CONFIRMED_PAID_FEATURES):R.j(R.xW.PROJECT_TRANSFER_DECLINED_PAID_FEATURES),e.next=31;break;case 27:return e.prev=27,e.t1=e.catch(20),K(!1),e.abrupt("return",ne(e.t1));case 31:setTimeout((function(){G.push("/[teamSlug]/[project]?fromTransfer=1","/".concat(q.slug,"/").concat(encodeURIComponent(X)))}),1e3);case 32:case"end":return e.stop()}}),e,null,[[6,13],[20,27]])})));return function(n){return e.apply(this,arguments)}}();return(0,r.jsxs)("form",{onSubmit:fe,children:[(0,r.jsxs)(p.Body,{children:[(0,r.jsx)(d.q,{children:"Transfer Project"}),(0,r.jsxs)(v.Z,{row:!0,center:!0,children:[(0,r.jsxs)(v.Z,{center:!0,flex:"0 0 40%",children:[(0,r.jsx)(h.ZP,{placeholder:!n,hash:null===n||void 0===n?void 0:n.avatar,teamId:t?null===n||void 0===n?void 0:n.id:null,username:t?null:null===n||void 0===n?void 0:n.uid,size:64}),(0,r.jsx)(f.Z,{y:.5,className:"geist-hide-on-mobile"}),(0,r.jsx)(m.ZP,{noMargin:!0,type:"secondary",preset:"body-2",className:"geist-ellipsis geist-hide-on-mobile",weight:500,children:null===n||void 0===n?void 0:n.name})]}),(0,r.jsxs)(v.Z,{center:!0,children:[(0,r.jsx)(f.Z,{x:.25,inline:!0}),M,(0,r.jsx)(f.Z,{x:.25,inline:!0})]}),(0,r.jsxs)(v.Z,{center:!0,flex:"0 0 40%",children:[(0,r.jsx)(h.ZP,{placeholder:!q,hash:null===q||void 0===q?void 0:q.avatar,teamId:null===q||void 0===q?void 0:q.id,size:64}),(0,r.jsx)(f.Z,{y:.5,className:"geist-hide-on-mobile"}),(0,r.jsx)(m.ZP,{noMargin:!0,type:"secondary",preset:"body-2",className:"geist-ellipsis geist-hide-on-mobile",weight:500,children:null===q||void 0===q?void 0:q.name})]})]}),(0,r.jsx)(f.Z,{}),(0,r.jsxs)(p.Inset,{children:[(0,r.jsx)(y.Z,{label:"New Project Name",value:X,placeholder:null===J||void 0===J?void 0:J.name,spellCheck:!1,maxLength:100,onChange:function(e){ne(null),Y(e.target.value)},error:ee||void 0}),(0,r.jsx)(f.Z,{}),(0,r.jsx)(d.O,{children:(0,r.jsxs)(v.Z,{row:!0,Component:"span",noWrap:!0,children:[(0,r.jsx)(E.CheckInCircle,{fill:!0,color:"var(--geist-success)",size:20}),(0,r.jsx)(f.Z,{inline:!0,x:1/3})," No downtime or workflow interruptions will be caused."]})}),ue&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Z,{}),(0,r.jsx)(b.Z,{type:"warning",fill:!0,variant:"contrast",label:!1,children:"Integrations won't be transferred. They need to be added again after the transfer is complete."})]})]}),H&&(0,r.jsxs)(p.Outset,{children:[(0,r.jsx)(k,{count:H.domains.length,title:(0,r.jsxs)("span",{children:[H.domains.length," ",1===H.domains.length?"Domain":"Domains"," will be transferred."]}),children:H.domains.map((function(e){return(0,r.jsxs)(L,{children:[(0,r.jsx)("span",{title:e.name,children:e.name}),(0,r.jsx)(w.Z,{color:"var(--accents-6)",size:16}),(0,r.jsx)("span",{title:e.name,children:e.name})]},e.name)}))}),(0,r.jsxs)(k,{count:ie.length,title:(0,r.jsxs)("span",{children:[ie.length,ie.length===u.DR&&"+"," ",1===ie.length?"Alias":"Aliases"," will be transferred."]}),children:[ie.map((function(e){return(0,r.jsxs)(L,{children:[(0,r.jsx)("span",{title:e.alias,children:e.alias}),(0,r.jsx)(w.Z,{color:"var(--accents-6)",size:16}),(0,r.jsx)("span",{title:e.alias,children:e.alias})]},e.alias)})),ie.length===u.DR&&!ce&&(0,r.jsxs)("div",{className:P().inset,children:[(0,r.jsx)(j.Z,{loading:ae,onClick:oe}),(0,r.jsx)(f.Z,{})]})]}),(0,r.jsx)(k,{count:de.length,title:(0,r.jsxs)("span",{children:[de.length," ",1===de.length?"Secret":"Secrets"," ","will be copied."]}),children:de.map((function(e,n){return(0,r.jsxs)(L,{children:[(0,r.jsx)("span",{title:e.key,children:e.key}),(0,r.jsx)(E.Copy,{color:"var(--accents-6)",size:16}),(0,r.jsx)("span",{title:e.key,children:e.key})]},"secret-".concat(e.key,"-").concat(n))}))}),(0,r.jsx)(x.P,{title:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:"All Deployments"})," will be transferred."]})}),(0,r.jsx)(f.Z,{y:-1})]})]}),(0,r.jsxs)(p.Actions,{children:[(0,r.jsx)(p.Action,{onClick:function(){return B({type:"BACK"})},disabled:V,children:"Back"}),(0,r.jsx)(p.Action,{type:"submit",loading:V,children:"Transfer"})]})]})};var k=function(e){var n=e.title,t=e.count,i=e.children;return 0===t?null:(0,r.jsx)(x.P,{title:n,children:(0,r.jsx)("div",{className:P().content,children:i})})},L=function(e){var n=e.children;return(0,r.jsx)(x.c,{className:P().subitem,children:n})},M=(0,r.jsxs)("svg",{width:"66",height:"20",viewBox:"0 0 66 20",fill:"var(--accents-5)",children:[(0,r.jsx)("path",{d:"M43 10c0 5.523-4.477 10-10 10s-10-4.477-10-10S27.477 0 33 0s10 4.477 10 10zM32.53 6.47a.75.75 0 10-1.06 1.06L33.94 10l-2.47 2.47a.75.75 0 101.06 1.06l3-3a.75.75 0 000-1.06l-3-3z"}),(0,r.jsx)("path",{d:"M.5 9.125v1h2.455v-1H.5zM4.864 9.125v1h3.909v-1h-3.91zM10.682 9.125v1h3.909v-1h-3.91zM16.5 9.125v1h3.91v-1H16.5zM45.59 9.125v1h3.91v-1h-3.91zM51.41 9.125v1h3.908v-1H51.41zM57.227 9.125v1h3.91v-1h-3.91zM63.045 9.125v1H65.5v-1h-2.455z"})]})},18236:function(e,n,t){"use strict";var r=t(24246),i=t(86677),o=t(98639),a=t(27383),c=t(26617);n.Z=function(){var e=(0,i.useRouter)(),n=(0,a.P)(e.query.project).data,t=(0,c.F)(n);return null!==n&&void 0!==n&&n.name&&t?(0,r.jsxs)(o.Z,{type:"warning",fill:!0,variant:"contrast",label:!1,children:["The Project ",(0,r.jsx)("b",{children:n.name})," is being transferred into"," ",(0,r.jsx)("b",{children:t.name}),"."]}):(0,r.jsx)(o.Z,{type:"warning",fill:!0,variant:"contrast",label:!1,children:"\xa0"})}},86614:function(e,n,t){"use strict";t.d(n,{NU:function(){return c},e5:function(){return s},Sj:function(){return l}});t(86677);var r=t(55888),i=t(93632),o=t(61659),a=t(97165),c=(t(22282),function(e){var n=e.name,t=e.teamId;return(0,i.Z)("".concat(r.VE,"/").concat(encodeURIComponent(n)).concat((0,a.c)({teamId:t,deploymentInfo:0})),(0,o.LP)(),{throwOnHTTPError:!0})}),s=function(e){var n=e.id,t=e.teamId;return(0,i.Z)("".concat(r.VE,"/").concat(n).concat((0,a.c)({teamId:t})),(0,o.LP)(),{throwOnHTTPError:!0})},l=function(e){return"tarball_not_found"===(null===e||void 0===e?void 0:e.code)?"Your codebase could not be retrieved. Please check that your repository is not empty.":"additionalProperties"===(null===e||void 0===e?void 0:e.keyword)?"Additional property `"+e.params.additionalProperty+"` is not allowed. Please check the `vercel.json` or `now.json` file in your repository.":e.message||e.toString()}},26617:function(e,n,t){"use strict";t.d(n,{FA:function(){return i},F:function(){return o}});var r=t(18213);function i(e){return!!e&&function(e){return Boolean(e.transferStartedAt&&!e.transferCompletedAt)}(e)}function o(e){var n=(0,r.ZP)(),t=n.team,i=n.teams;if(!e)return null;var o=e.transferToAccountId;return o?(i||[]).find((function(e){return e.id===o}))||null:t}},70907:function(e,n,t){"use strict";t.d(n,{Z:function(){return v},f:function(){return h}});var r=t(22968),i=t(67105),o=t(27378),a=t(70053),c=t(93632),s=t(61659),l=t(55888),u=t(97165),d=t(18213);function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(e){var n=e.projectId,t=e.project,r=e.projectData,i=e.from,o=e.limit,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,p=(0,s.LP)(),v=(0,d.ZP)(),h=v.teamData;return(0,a.ZP)((function(){var e=n||t.id||r.project.id;return"".concat(l.sL).concat((0,u.c)({projectId:e,teamId:null!==h&&void 0!==h&&h.team?h.team.id:null,from:i||null,limit:o}))}),(function(e){return(0,c.Z)(e,p,{throwOnHTTPError:!0})}),{refreshInterval:f})}function h(e,n){var t,i=e.projectId,f=e.project,v=e.projectData,h=e.limit,m=(0,s.LP)(),j=(0,d.ZP)().teamData,y={projectId:i||f.id||v.project.id,teamId:null!==j&&void 0!==j&&j.team?j.team.id:null,limit:h+1},b=(0,a.g_)((function(e,n){if(!e)return"".concat(l.sL).concat((0,u.c)(y));var t=(null===n||void 0===n?void 0:n.aliases.length)>h&&(null===n||void 0===n?void 0:n.pagination.next)||null;return t?"".concat(l.sL).concat((0,u.c)(p(p({},y),{},{until:t}))):null}),(function(e){return(0,c.Z)(e,m,{throwOnHTTPError:!0})}),n),x=(0,o.useMemo)((function(){var e;return b.data?(e=[]).concat.apply(e,(0,r.Z)(b.data.map((function(e){return e.aliases.slice(0,h)})))):[]}),[b.data,h]),g=!!b.data,P=g&&0===x.length,w=g&&b.size>b.data.length,E=g&&(null===(t=b.data[b.data.length-1])||void 0===t?void 0:t.aliases.length)<=h;return[b,{aliases:x,initialDataLoaded:g,isEmpty:P,loadMore:function(){return b.setSize((function(e){return e+1}))},isLoadingMore:w,isReachingEnd:E}]}},91885:function(e,n,t){"use strict";t.d(n,{Q0:function(){return r},n_:function(){return i},ZP:function(){return d}});var r,i,o=t(70053),a=t(93632),c=t(61659),s=t(55888),l=t(97165),u=t(18213);function d(e,n){var t=(0,c.LP)(),r=(0,u.ZP)().teamData;return(0,o.ZP)((function(){var n;return e&&r?"".concat((0,s.HJ)("v7"),"/").concat(encodeURIComponent(e),"/env").concat((0,l.c)({teamId:null===(n=r.team)||void 0===n?void 0:n.id,decrypt:!0})):""}),(function(e){return(0,a.Z)(e,t,{throwOnHTTPError:!0})}),n)}!function(e){e.Production="production",e.Preview="preview",e.Development="development"}(r||(r={})),function(e){e.Plain="plain",e.Secret="secret",e.System="system",e.Encrypted="encrypted"}(i||(i={}))},71521:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(70053),i=t(93632),o=t(61659),a=t(55888),c=t(97165),s=t(18213);function l(e,n){var t=(0,o.LP)(),l=(0,s.ZP)().teamData;return(0,r.ZP)((function(){var n;return e&&l?"".concat((0,a.HJ)("v4"),"/").concat(encodeURIComponent(e),"/integrations").concat((0,c.c)({teamId:null===(n=l.team)||void 0===n?void 0:n.id})):""}),(function(e){return(0,i.Z)(e,t,{throwOnHTTPError:!0})}),n)}},14345:function(e){e.exports={item:"details-table_item__XeGcV",subitem:"details-table_subitem__2ppCj",summary:"details-table_summary__3KT6L",childless:"details-table_childless__xKknA",content:"details-table_content__2jDkG"}},68880:function(e){e.exports={content:"overview_content__19AGQ",inset:"overview_inset__2t_Un",subitem:"overview_subitem__--Esr",outset:"overview_outset__2LE7N"}}}]);
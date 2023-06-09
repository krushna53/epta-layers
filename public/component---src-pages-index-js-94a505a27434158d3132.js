/*! For license information please see component---src-pages-index-js-94a505a27434158d3132.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678,682],{8678:function(e,t,r){var n=r(7294),a=r(1883);t.Z=e=>{let{children:t}=e;(0,a.useStaticQuery)("3649515864");return n.createElement(n.Fragment,null,n.createElement("div",null,n.createElement("main",null,t)))}},9357:function(e,t,r){var n=r(7294),a=r(1883);t.Z=function(e){var t,r;let{description:o,title:l,children:i}=e;const{site:s}=(0,a.useStaticQuery)("63159454"),c=o||s.siteMetadata.description,u=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,u?l+" | "+u:l),n.createElement("meta",{name:"description",content:c}),n.createElement("meta",{property:"og:title",content:l}),n.createElement("meta",{property:"og:description",content:c}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(r=s.siteMetadata)||void 0===r?void 0:r.author)||""}),n.createElement("meta",{name:"twitter:title",content:l}),n.createElement("meta",{name:"twitter:description",content:c}),i)}},8960:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var n=r(7294);var a=()=>n.createElement(n.Fragment,null,n.createElement("section",{className:"about_banner"},n.createElement("div",{className:"about_banner_title"},n.createElement("h2",null,"We are Epta Layers"),n.createElement("img",{src:"../images/apple.png",alt:"apple"}))));var o=()=>n.createElement(n.Fragment,null,n.createElement("section",{className:"business_continuity"},n.createElement("div",{className:"business"},n.createElement("div",{className:"d-flex"},n.createElement("div",{className:"left_con"},n.createElement("h2",null,"Business Continuity is at Our Core"),n.createElement("p",null,"Along with network and infrastructure solutions, Epta assists in hardware supply, implementation, and post-implementation support. We ensure your business operations never see the stop sign.")),n.createElement("div",{className:"right_img"})))));var l=()=>n.createElement(n.Fragment,null,n.createElement("section",{className:"networking"},n.createElement("div",{className:"networking_wrapper"},n.createElement("div",{className:"d-flex"},n.createElement("div",{className:"left_img"}),n.createElement("div",{className:"right_con"},n.createElement("p",null,"Epta Layers is a single-point enterprise solutions provider that works with IT world leaders to deliver tailor-made solutions for networking and communication infrastructure."),n.createElement("p",{className:"second"},"Epta stands for 'seven' in Greek. It encapsulates our vision to focus on the ",n.createElement("b",null,"7 layers of networking")," in the OSI model."),n.createElement("div",{className:"img"},n.createElement("img",{src:"../images/OSI Model new.png",alt:"osl"}),n.createElement("p",null,"Open Systems interconnection (OSI) model")))))));var i=()=>n.createElement(n.Fragment,null);var s=()=>n.createElement(n.Fragment,null);var c=()=>n.createElement("div",null);r(3524);var u=()=>n.createElement(n.Fragment,null,n.createElement(a,null),n.createElement(l,null),n.createElement(o,null),n.createElement(i,null),n.createElement(s,null),n.createElement(c,null))},7676:function(e,t,r){r.r(t),r.d(t,{Head:function(){return ue},default:function(){return de}});var n,a=r(7294);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(n||(n={}));const l="popstate";function i(e,t){if(!1===e||null==e)throw new Error(t)}function s(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw new Error(t)}catch(r){}}}function c(e,t){return{usr:e.state,key:e.key,idx:t}}function u(e,t,r,n){return void 0===r&&(r=null),o({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?p(t):t,{state:r,key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}function d(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function p(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function h(e,t,r,a){void 0===a&&(a={});let{window:s=document.defaultView,v5Compat:p=!1}=a,h=s.history,m=n.Pop,f=null,v=g();function g(){return(h.state||{idx:null}).idx}function E(){m=n.Pop;let e=g(),t=null==e?null:e-v;v=e,f&&f({action:m,location:w.location,delta:t})}function y(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,r="string"==typeof e?e:d(e);return i(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}null==v&&(v=0,h.replaceState(o({},h.state,{idx:v}),""));let w={get action(){return m},get location(){return e(s,h)},listen(e){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(l,E),f=e,()=>{s.removeEventListener(l,E),f=null}},createHref(e){return t(s,e)},createURL:y,encodeLocation(e){let t=y(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){m=n.Push;let a=u(w.location,e,t);r&&r(a,e),v=g()+1;let o=c(a,v),l=w.createHref(a);try{h.pushState(o,"",l)}catch(i){if(i instanceof DOMException&&"DataCloneError"===i.name)throw i;s.location.assign(l)}p&&f&&f({action:m,location:w.location,delta:1})},replace:function(e,t){m=n.Replace;let a=u(w.location,e,t);r&&r(a,e),v=g();let o=c(a,v),l=w.createHref(a);h.replaceState(o,"",l),p&&f&&f({action:m,location:w.location,delta:0})},go(e){return h.go(e)}};return w}var m;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(m||(m={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function f(e,t,r){void 0===r&&(r="/");let n=P(("string"==typeof t?p(t):t).pathname||"/",r);if(null==n)return null;let a=v(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let l=0;null==o&&l<a.length;++l)o=b(a[l],C(n));return o}function v(e,t,r,n){void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n="");let a=(e,a,o)=>{let l={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};l.relativePath.startsWith("/")&&(i(l.relativePath.startsWith(n),'Absolute route path "'+l.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),l.relativePath=l.relativePath.slice(n.length));let s=R([n,l.relativePath]),c=r.concat(l);e.children&&e.children.length>0&&(i(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),v(e.children,t,c,s)),(null!=e.path||e.index)&&t.push({path:s,score:w(s,e.index),routesMeta:c})};return e.forEach(((e,t)=>{var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let n of g(e.path))a(e,t,n);else a(e,t)})),t}function g(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(0===n.length)return a?[o,""]:[o];let l=g(n.join("/")),i=[];return i.push(...l.map((e=>""===e?o:[o,e].join("/")))),a&&i.push(...l),i.map((t=>e.startsWith("/")&&""===t?"/":t))}const E=/^:\w+$/,y=e=>"*"===e;function w(e,t){let r=e.split("/"),n=r.length;return r.some(y)&&(n+=-2),t&&(n+=2),r.filter((e=>!y(e))).reduce(((e,t)=>e+(E.test(t)?3:""===t?1:10)),n)}function b(e,t){let{routesMeta:r}=e,n={},a="/",o=[];for(let l=0;l<r.length;++l){let e=r[l],i=l===r.length-1,s="/"===a?t:t.slice(a.length)||"/",c=x({path:e.relativePath,caseSensitive:e.caseSensitive,end:i},s);if(!c)return null;Object.assign(n,c.params);let u=e.route;o.push({params:n,pathname:R([a,c.pathname]),pathnameBase:S(R([a,c.pathnameBase])),route:u}),"/"!==c.pathnameBase&&(a=R([a,c.pathnameBase]))}return o}function x(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1);void 0===r&&(r=!0);s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,((e,t)=>(n.push(t),"/([^\\/]+)")));e.endsWith("*")?(n.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");return[new RegExp(a,t?void 0:"i"),n]}(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],l=o.replace(/(.)\/+$/,"$1"),i=a.slice(1);return{params:n.reduce(((e,t,r)=>{if("*"===t){let e=i[r]||"";l=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(r){return s(!1,'The value for the URL param "'+t+'" will not be decoded because the string "'+e+'" is a malformed URL segment. This is probably due to a bad percent encoding ('+r+")."),e}}(i[r]||"",t),e}),{}),pathname:o,pathnameBase:l,pattern:e}}function C(e){try{return decodeURI(e)}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function P(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}const R=e=>e.join("/").replace(/\/\/+/g,"/"),S=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/");class k extends Error{}function O(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}const U=["post","put","patch","delete"],_=(new Set(U),["get",...U]);new Set(_),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},L.apply(this,arguments)}const j=a.createContext(null);const B=a.createContext(null);const N=a.createContext(null);const F=a.createContext(null);const I=a.createContext({outlet:null,matches:[],isDataRoute:!1});const D=a.createContext(null);function $(){return null!=a.useContext(F)}function A(){return $()||i(!1),a.useContext(F).location}function M(e,t,r){$()||i(!1);let{navigator:o}=a.useContext(N),{matches:l}=a.useContext(I),s=l[l.length-1],c=s?s.params:{},u=(s&&s.pathname,s?s.pathnameBase:"/");s&&s.route;let d,h=A();if(t){var m;let e="string"==typeof t?p(t):t;"/"===u||(null==(m=e.pathname)?void 0:m.startsWith(u))||i(!1),d=e}else d=h;let v=d.pathname||"/",g=f(e,{pathname:"/"===u?v:v.slice(u.length)||"/"});let E=z(g&&g.map((e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:R([u,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?u:R([u,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,r);return t&&E?a.createElement(F.Provider,{value:{location:L({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:n.Pop}},E):E}function T(){let e=function(){var e;let t=a.useContext(D),r=G(V.UseRouteError),n=J(V.UseRouteError);if(t)return t;return null==(e=r.errors)?void 0:e[n]}(),t=O(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:n};return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},t),r?a.createElement("pre",{style:o},r):null,null)}const W=a.createElement(T,null);class H extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?a.createElement(I.Provider,{value:this.props.routeContext},a.createElement(D.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Z(e){let{routeContext:t,match:r,children:n}=e,o=a.useContext(j);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(I.Provider,{value:t},n)}function z(e,t,r){var n;if(void 0===t&&(t=[]),void 0===r&&(r=null),null==e){var o;if(null==(o=r)||!o.errors)return null;e=r.matches}let l=e,s=null==(n=r)?void 0:n.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&(null==s?void 0:s[e.route.id])));e>=0||i(!1),l=l.slice(0,Math.min(l.length,e+1))}return l.reduceRight(((e,n,o)=>{let i=n.route.id?null==s?void 0:s[n.route.id]:null,c=null;r&&(c=n.route.errorElement||W);let u=t.concat(l.slice(0,o+1)),d=()=>{let t;return t=i?c:n.route.Component?a.createElement(n.route.Component,null):n.route.element?n.route.element:e,a.createElement(Z,{match:n,routeContext:{outlet:e,matches:u,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===o)?a.createElement(H,{location:r.location,revalidation:r.revalidation,component:c,error:i,children:d(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):d()}),null)}var Q,V;function G(e){let t=a.useContext(B);return t||i(!1),t}function J(e){let t=function(e){let t=a.useContext(I);return t||i(!1),t}(),r=t.matches[t.matches.length-1];return r.route.id||i(!1),r.route.id}!function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate"}(Q||(Q={})),function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId"}(V||(V={}));function q(e){i(!1)}function K(e){let{basename:t="/",children:r=null,location:o,navigationType:l=n.Pop,navigator:s,static:c=!1}=e;$()&&i(!1);let u=t.replace(/^\/*/,"/"),d=a.useMemo((()=>({basename:u,navigator:s,static:c})),[u,s,c]);"string"==typeof o&&(o=p(o));let{pathname:h="/",search:m="",hash:f="",state:v=null,key:g="default"}=o,E=a.useMemo((()=>{let e=P(h,u);return null==e?null:{location:{pathname:e,search:m,hash:f,state:v,key:g},navigationType:l}}),[u,h,m,f,v,g,l]);return null==E?null:a.createElement(N.Provider,{value:d},a.createElement(F.Provider,{children:r,value:E}))}function X(e){let{children:t,location:r}=e;return M(te(t),r)}var Y;!function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"}(Y||(Y={}));new Promise((()=>{}));class ee extends a.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:r}=this.props,n=null,a=Y.pending;if(r instanceof Promise)if(this.state.error){Y.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_error",{get:()=>e})}else r._tracked?(r,void 0!==n._error?Y.error:void 0!==n._data?Y.success:Y.pending):(Y.pending,Object.defineProperty(r,"_tracked",{get:()=>!0}),r.then((e=>Object.defineProperty(r,"_data",{get:()=>e})),(e=>Object.defineProperty(r,"_error",{get:()=>e}))));else Y.success,Promise.resolve(),Object.defineProperty(n,"_tracked",{get:()=>!0}),Object.defineProperty(n,"_data",{get:()=>r});if(a===Y.error&&n._error instanceof AbortedDeferredError)throw neverSettledPromise;if(a===Y.error&&!t)throw n._error;if(a===Y.error)return React.createElement(AwaitContext.Provider,{value:n,children:t});if(a===Y.success)return React.createElement(AwaitContext.Provider,{value:n,children:e});throw n}}function te(e,t){void 0===t&&(t=[]);let r=[];return a.Children.forEach(e,((e,n)=>{if(!a.isValidElement(e))return;let o=[...t,n];if(e.type===a.Fragment)return void r.push.apply(r,te(e.props.children,o));e.type!==q&&i(!1),e.props.index&&e.props.children&&i(!1);let l={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(l.children=te(e.props.children,o)),r.push(l)})),r}function re(e){let{basename:t,children:r,window:n}=e,o=a.useRef();var l;null==o.current&&(o.current=(void 0===(l={window:n,v5Compat:!0})&&(l={}),h((function(e,t){let{pathname:r,search:n,hash:a}=e.location;return u("",{pathname:r,search:n,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"==typeof t?t:d(t)}),null,l)));let i=o.current,[s,c]=a.useState({action:i.action,location:i.location}),p=a.useCallback((e=>{a.startTransition((()=>c(e)))}),[c]);return a.useLayoutEffect((()=>i.listen(p)),[i,p]),a.createElement(K,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:i})}"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;var ne,ae;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(ne||(ne={})),function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(ae||(ae={}));var oe=r(8678),le=r(9357),ie=r(9580),se=r(8960),ce=r(6042);const ue=()=>a.createElement(a.Fragment,null,a.createElement(le.Z,{title:"Home"}),a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"}));var de=()=>a.createElement(oe.Z,null,a.createElement(re,null,a.createElement(X,null,a.createElement(q,{path:"/",element:a.createElement(ie.default,null)}),a.createElement(q,{path:"/about",element:a.createElement(se.default,null)}))),a.createElement(ce.Ix,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"dark"}))}}]);
//# sourceMappingURL=component---src-pages-index-js-94a505a27434158d3132.js.map
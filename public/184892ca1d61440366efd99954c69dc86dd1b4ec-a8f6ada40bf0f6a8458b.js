(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[795],{2711:function(e){e.exports=function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=(i(n(1)),n(6)),l=i(r),o=i(n(7)),c=i(n(8)),s=i(n(9)),u=i(n(10)),m=i(n(11)),f=i(n(14)),d=[],v=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},p=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(v=!0),v)return d=(0,m.default)(d,b),(0,u.default)(d,b.once),d},g=function(){d=(0,f.default)(),p()},E=function(){d.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},y=function(e){return!0===e||"mobile"===e&&s.default.mobile()||"phone"===e&&s.default.phone()||"tablet"===e&&s.default.tablet()||"function"==typeof e&&!0===e()},w=function(e){b=a(b,e),d=(0,f.default)();var t=document.all&&!window.atob;return y(b.disable)||t?E():(b.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?p(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,(function(){p(!0)})):document.addEventListener(b.startEvent,(function(){p(!0)})),window.addEventListener("resize",(0,o.default)(p,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,o.default)(p,b.debounceDelay,!0)),window.addEventListener("scroll",(0,l.default)((function(){(0,u.default)(d,b.once)}),b.throttleDelay)),b.disableMutationObserver||c.default.ready("[data-aos]",g),d)};e.exports={init:w,refresh:p,refreshHard:g}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,i=p;return b=p=void 0,N=t,E=e.apply(i,n)}function r(e){return N=e,y=setTimeout(u,t),P?i(e):E}function l(e){var n=t-(e-w);return O?h(n,g-(e-N)):n}function c(e){var n=e-w;return void 0===w||n>=t||n<0||O&&e-N>=g}function u(){var e=x();return c(e)?m(e):void(y=setTimeout(u,l(e)))}function m(e){return y=void 0,j&&b?i(e):(b=p=void 0,E)}function f(){void 0!==y&&clearTimeout(y),N=0,b=w=p=y=void 0}function d(){return void 0===y?E:m(x())}function v(){var e=x(),n=c(e);if(b=arguments,p=this,w=e,n){if(void 0===y)return r(w);if(O)return y=setTimeout(u,t),i(w)}return void 0===y&&(y=setTimeout(u,t)),E}var b,p,g,E,y,w,N=0,P=!1,O=!1,j=!0;if("function"!=typeof e)throw new TypeError(s);return t=o(t)||0,a(n)&&(P=!!n.leading,g=(O="maxWait"in n)?k(o(n.maxWait)||0,t):g,j="trailing"in n?!!n.trailing:j),v.cancel=f,v.flush=d,v}function i(e,t,i){var r=!0,l=!0;if("function"!=typeof e)throw new TypeError(s);return a(i)&&(r="leading"in i?!!i.leading:r,l="trailing"in i?!!i.trailing:l),n(e,t,{leading:r,maxWait:t,trailing:l})}function a(e){var t=void 0===e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==(void 0===e?"undefined":c(e))}function l(e){return"symbol"==(void 0===e?"undefined":c(e))||r(e)&&w.call(e)==m}function o(e){if("number"==typeof e)return e;if(l(e))return u;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=v.test(e);return n||b.test(e)?p(e.slice(2),n?2:8):d.test(e)?u:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",u=NaN,m="[object Symbol]",f=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,v=/^0b[01]+$/i,b=/^0o[0-7]+$/i,p=parseInt,g="object"==(void 0===t?"undefined":c(t))&&t&&t.Object===Object&&t,E="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,y=g||E||Function("return this")(),w=Object.prototype.toString,k=Math.max,h=Math.min,x=function(){return y.Date.now()};e.exports=i}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function a(t){var n=b,i=p;return b=p=void 0,N=t,E=e.apply(i,n)}function r(e){return N=e,y=setTimeout(u,t),P?a(e):E}function o(e){var n=t-(e-x);return O?k(n,g-(e-N)):n}function s(e){var n=e-x;return void 0===x||n>=t||n<0||O&&e-N>=g}function u(){var e=h();return s(e)?m(e):void(y=setTimeout(u,o(e)))}function m(e){return y=void 0,j&&b?a(e):(b=p=void 0,E)}function f(){void 0!==y&&clearTimeout(y),N=0,b=x=p=y=void 0}function d(){return void 0===y?E:m(h())}function v(){var e=h(),n=s(e);if(b=arguments,p=this,x=e,n){if(void 0===y)return r(x);if(O)return y=setTimeout(u,t),a(x)}return void 0===y&&(y=setTimeout(u,t)),E}var b,p,g,E,y,x,N=0,P=!1,O=!1,j=!0;if("function"!=typeof e)throw new TypeError(c);return t=l(t)||0,i(n)&&(P=!!n.leading,g=(O="maxWait"in n)?w(l(n.maxWait)||0,t):g,j="trailing"in n?!!n.trailing:j),v.cancel=f,v.flush=d,v}function i(e){var t=void 0===e?"undefined":o(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==(void 0===e?"undefined":o(e))}function r(e){return"symbol"==(void 0===e?"undefined":o(e))||a(e)&&y.call(e)==u}function l(e){if("number"==typeof e)return e;if(r(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(m,"");var n=d.test(e);return n||v.test(e)?b(e.slice(2),n?2:8):f.test(e)?s:+e}var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,u="[object Symbol]",m=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,v=/^0o[0-7]+$/i,b=parseInt,p="object"==(void 0===t?"undefined":o(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":o(self))&&self&&self.Object===Object&&self,E=p||g||Function("return this")(),y=Object.prototype.toString,w=Math.max,k=Math.min,h=function(){return E.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,i=void 0;for(t=0;t<e.length;t+=1){if((i=e[t]).dataset&&i.dataset.aos)return!0;if(i.children&&n(i.children))return!0}return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!i()}function r(e,t){var n=window.document,a=new(i())(l);o=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),i=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(i)))return o()}))}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){};t.default={isSupported:a,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return a(e,[{key:"phone",value:function(){var e=i();return!(!r.test(e)&&!l.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=i();return!(!o.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var i=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0!==i&&("false"===i||!n&&"true"!==i)&&e.node.classList.remove("aos-animate")},i=function(e,t){var i=window.pageYOffset,a=window.innerHeight;e.forEach((function(e,r){n(e,a+i,t)}))};t.default=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(12)),r=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,a.default)(e.node,t.offset)})),e};t.default=r},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(13)),r=function(e,t){var n=0,i=0,r=window.innerHeight,l={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(l.offset&&!isNaN(l.offset)&&(i=parseInt(l.offset)),l.anchor&&document.querySelectorAll(l.anchor)&&(e=document.querySelectorAll(l.anchor)[0]),n=(0,a.default)(e).top,l.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=r/2;break;case"bottom-center":n+=r/2+e.offsetHeight;break;case"center-center":n+=r/2+e.offsetHeight/2;break;case"top-top":n+=r;break;case"bottom-top":n+=e.offsetHeight+r;break;case"center-top":n+=e.offsetHeight/2+r}return l.anchorPlacement||l.offset||isNaN(t)||(i=t),n+i};t.default=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])},3042:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return D}});var i=n(7294),a=n(7165),r=n.p+"static/b1-b34902a1090b67a4a98ac56ad34208fd.png",l=(n.p,n(2711),n(1883));var o=()=>i.createElement(i.Fragment,null,i.createElement("div",{className:"banner-section"},i.createElement("div",{className:"banner-mobile-image"},i.createElement("img",{src:r})),i.createElement("div",{className:"banner-des-folder"},i.createElement("div",{className:"banner-des-image"},i.createElement("img",{src:a.Z})),i.createElement("p",null,"A SINGLE-POINT ENTERPRISE SOLUTIONS PROVIDER"),i.createElement("h2",null,"We work with IT world leaders to deliver",i.createElement("br",null),"tailor-made solutions."),i.createElement("div",{className:"banner-btn"},i.createElement(l.Link,{to:"About"},"About us"))))),c=n.p+"static/4new-40c7118aac864ba2bceaec664cf281cc.jpg",s=n.p+"static/OSI Model new-e4d47cffed87ed8e3a4273b05dad0383.png";var u=()=>i.createElement("section",{className:"offerings",id:"offerings"},i.createElement("div",{className:"left"},i.createElement("div",{className:"img"},i.createElement("img",{src:c,alt:"left"}))),i.createElement("div",{className:"right"},i.createElement("div",{className:"dec"},i.createElement("p",null,"Epta stands for 'seven' in Greek. It encapsulates our vision to focus on the 7 layers of networking in the OSI model. Our service framework allows us to understand your needs based on your line of business before designing a customized networking solution. We focus on the problem areas without losing sight of the business KPIs.")),i.createElement("div",{className:"img"},i.createElement("img",{src:s,alt:"model"}),i.createElement("p",null,"Open Systems Interconnection (OSI) model")),i.createElement("div",{className:"btn"},i.createElement("a",{href:"#solutionoffring"},i.createElement("button",null,"See our Offerings"))))),m=n.p+"static/solution-offering-image-4f9cbdefa9a7af034589464f40c68b68.png",f=n.p+"static/service-background1-b61813cda8ddf7dc6059778c5b9ead11.png";var d=function(){return i.createElement(i.Fragment,null,i.createElement("div",{className:"solution-offering-section",id:"solutionoffring"},i.createElement("div",{className:"solution-offering-wrapper"},i.createElement("div",{className:"solution-offering-left-section"},i.createElement("h2",null,"Solution Offerings"),i.createElement("p",null,"Epta assists in visualizing and communicating how IT Networks",i.createElement("br",null)," operate, with a keen focus on network architecture.")),i.createElement("div",{className:"solution-offering-right-section"},i.createElement("div",{className:"solution-offring-image"},i.createElement("img",{src:m})))),i.createElement("div",{className:"solution-background-image1"},i.createElement("img",{src:f})),i.createElement("div",{className:"solution-background-image2"},i.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAAC/CAYAAACv6g0GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ0NUFFNjNFQTYwMTFFREJDNzlDNzYzRTQ3MjZEMEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ0NUFFNjRFQTYwMTFFREJDNzlDNzYzRTQ3MjZEMEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNDQ1QUU2MUVBNjAxMUVEQkM3OUM3NjNFNDcyNkQwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNDQ1QUU2MkVBNjAxMUVEQkM3OUM3NjNFNDcyNkQwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmpF0KUAABblSURBVHja7N1bk13F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"}))))},v=JSON.parse('{"T1":[{"id":"1","title":"Enterprise Network","link1":"Routing","link2":"Switching","link3":"Wi-Fi","link4":"SD-WAN","link5":"Information Management System"},{"id":2,"title":"Security Architecture","link1":"Network Security","link2":"Email Security","link3":"Endpoint Security","link4":"Public & Private Infra Security","link5":"Secured Access Service Edges"}],"lv":[{"img":"../images/Fold 4image1.png"}],"ss":[{"id":1,"title":"Solution Offerings","desc":"As a part of our service delivery model, our expert team develops a preliminary blueprint of your business.","btn":"Get in touch"}],"It":[{"id":"3","title":"Collaboration Architecture","link1":"Cloud Meeting Solutions","link2":"IP Phones, Headsets, Speaker Phones","link3":"Cloud Meeting and Calling Solutions","link4":"Conference Phones","link5":"Conference Room Solutions"},{"id":4,"title":"Data Center Architecture","link1":"Storage Area Network ( SAN )","link2":"Fabric Switch","link3":"Software Defined Network","link4":"Application Development Controller","link5":"Web Application Firewall"}],"XL":[{"img":"../images/solutionfforing-image2.jpg"}],"JZ":[{"id":1,"title":"Solution Offerings","desc":"We understand your technology requirements, then design tailor-made solutions that target your problem areas, business KPIs, and future scalability.","btn":"Get in touch"}],"yE":[{"id":"5","title":"Data Center Services","link1":"Co-location and Remote Services","link2":"Cloud and DR Services","link3":"CDN, MPLS, and CDN Services","link4":"Network Security Services","link5":"Data Resiliency Services"},{"id":6,"title":"Enterprise Services","link1":"Hardware Renewal","link2":"Software License Subscriptions","link3":"Professional Services","link4":"End-to-end IT Accessories"}],"Ev":[{"img":"../images/solutionfforing-image3.jpg"}],"wK":[{"id":1,"title":"Solution Offerings","desc":"We also assist in hardware supply, implementation and post-implementation support.","btn":"Get in touch"}]}');var b=()=>i.createElement(i.Fragment,null,i.createElement("div",{className:"bg",style:{backgroundImage:'url("../images/Frame-2.png")'}},i.createElement("section",{className:"CollaborationArchitecture"},i.createElement("div",{className:"wrapper"},i.createElement("div",{className:"box"},v.It.map(((e,t)=>i.createElement(i.Fragment,{key:e.id},i.createElement("div",null,i.createElement("div",{className:"d-flex"},i.createElement("p",null,"0",e.id),i.createElement("h2",null,e.title)),i.createElement("ul",null,e.link1&&i.createElement("li",null,e.link1),e.link2&&i.createElement("li",null,e.link2),e.link3&&i.createElement("li",null,e.link3),e.link4&&i.createElement("li",null,e.link4),e.link5&&i.createElement("li",null,e.link5),e.link6&&i.createElement("li",null,e.link6))))))),i.createElement("div",{className:"image"},v.XL.map(((e,t)=>i.createElement("img",{key:t,src:e.img,alt:""})))),i.createElement("div",{className:"dec"},v.JZ.map(((e,t)=>i.createElement(i.Fragment,{key:t},i.createElement("h2",null,e.title),i.createElement("p",null,e.desc),i.createElement("div",{className:"btn"},i.createElement("button",null," ",i.createElement("a",{href:"#Getintouch"},e.btn)))))))))));var p=()=>i.createElement(i.Fragment,null,i.createElement("div",{className:"bg",style:{backgroundImage:'url("../images/Frame-2.png")'}},i.createElement("section",{className:"DataCenterServices"},i.createElement("div",{className:"wrapper"},i.createElement("div",{className:"box"},v.yE.map(((e,t)=>i.createElement(i.Fragment,{key:e.id},i.createElement("div",null,i.createElement("div",{className:"d-flex"},i.createElement("p",null,"0",e.id),i.createElement("h2",null,e.title)),i.createElement("ul",null,e.link1&&i.createElement("li",null,e.link1),e.link2&&i.createElement("li",null,e.link2),e.link3&&i.createElement("li",null,e.link3),e.link4&&i.createElement("li",null,e.link4),e.link5&&i.createElement("li",null,e.link5),e.link6&&i.createElement("li",null,e.link6))))))),i.createElement("div",{className:"image"},v.Ev.map(((e,t)=>i.createElement("img",{key:t,src:e.img,alt:""})))),i.createElement("div",{className:"dec"},v.wK.map(((e,t)=>i.createElement(i.Fragment,{key:t},i.createElement("h2",null,e.title),i.createElement("p",null,e.desc),i.createElement("div",{className:"btn"},i.createElement("button",null," ",i.createElement("a",{href:"#Getintouch"},e.btn)))))))))));n.p;var g=()=>i.createElement(i.Fragment,null,i.createElement("div",{className:"bg",style:{backgroundImage:'url("../images/Frame-2.png")'}},i.createElement("section",{className:"SolutionOfferingsDetails"},i.createElement("div",{className:"wrapper"},i.createElement("div",{className:"box"},v.T1.map(((e,t)=>i.createElement(i.Fragment,null,i.createElement("div",null,i.createElement("div",{className:"d-flex"},i.createElement("p",null,"0",e.id),i.createElement("h2",null,e.title)),i.createElement("ul",null,e.link1&&i.createElement("li",null,e.link1),e.link2&&i.createElement("li",null,e.link2),e.link3&&i.createElement("li",null,e.link3),e.link4&&i.createElement("li",null,e.link4),e.link5&&i.createElement("li",null,e.link5),e.link6&&i.createElement("li",null,e.link6))))))),i.createElement("div",{className:"image"},v.lv.map(((e,t)=>i.createElement(i.Fragment,null,i.createElement("img",{src:e.img,alt:""}))))),i.createElement("div",{className:"dec"},v.ss.map(((e,t)=>i.createElement(i.Fragment,null,i.createElement("h2",null,e.title),i.createElement("p",null,e.desc),i.createElement("div",{className:"btn"},i.createElement("button",null," ",i.createElement("a",{href:"#Getintouch"},e.btn))))))))))),E=n(6947),y=n.p+"static/our-unique-image1-e9ff228ef1703ac4b725d234fadf7e75.png",w=n.p+"static/our-unique-image2-00372c497228883947ee525466e9259e.png";var k=function(){return i.createElement(i.Fragment,null,i.createElement("div",{className:"our-unique-strenth-section"},i.createElement("div",{className:"our-unique-strenth-wrapper"},i.createElement("div",{className:"our-unique-strenth-left-section"},i.createElement("h2",null,"Our Unique Strengths")),i.createElement("div",{className:"our-unique-strenth-right-section"},i.createElement("div",{className:"our-unique-strenth-container"},i.createElement("div",{className:"our-unique-strenth-folder"},i.createElement("div",{className:"our-unique-image"},i.createElement("img",{src:y})),i.createElement("span",null,"EXTENDED ARM OF"),i.createElement("h2",null,"OEMs"),i.createElement("p",null,"Epta works with world-leading OEMs. We specialize in implementing their unique solutions and offering long-term support.")),i.createElement("div",{className:"our-unique-strenth-folder"},i.createElement("div",{className:"our-unique-image"},i.createElement("img",{src:w})),i.createElement("span",null,"DELIVERY MODEL OF"),i.createElement("h2",null,"LAER"),i.createElement("p",null,"Epta uses the LAER model (Land-Adopt-Expand-Renew) as a framework for customer success. It enables us to track KPIs for implementing, training, and maximizing the value of your investments.")))))))},h=n(8482),x=n(2039),N=n.p+"static/Untitled_design-c8d807f30d0010b22f5cd3ee7c6fa99a (1)-e54d4e98bd08bd4985a824fc2dd905ca.png",P=n(6042),O=(n(410),n(4810));var j=function(){const{0:e,1:t}=(0,i.useState)(""),{0:n,1:a}=(0,i.useState)(""),{0:r,1:l}=(0,i.useState)(""),{0:o,1:c}=(0,i.useState)(!1),s=(0,i.useRef)();return i.createElement(i.Fragment,null,i.createElement("div",{className:"bg_contact"},i.createElement("div",{id:"Getintouch",className:"contact-epta-layer-section"},i.createElement("div",{className:"contact-epta-layer-wrapper"},i.createElement("div",{className:"contact-epta-layer-container"},i.createElement("h2",null,"We are Epta Layers"),i.createElement("div",{className:"contact-form"},i.createElement("h2",null,"Our Vision"),i.createElement("p",null,"To provide the best IT infrastructure solutions and help our customers improve their business continuity. We aim to become the most reliable technology partner for all our esteemed customers."),i.createElement("form",{ref:s,action:"",onSubmit:e=>{e.preventDefault(),o?O.ZP.sendForm("service_9spedfi","template_juxtdiw",s.current,"JEUgk1jZnrZLqJz5k").then((e=>{P.Am.success("Your Request has been sent😊",{position:"top-right",autoClose:1e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),console.log(e.text),t(""),a(""),l("")}),(e=>{console.log(e.text)})):console.log("Email is invalide")}},i.createElement("h2",null,"Get in touch"),i.createElement("div",{className:"inner-input"},i.createElement("label",{className:"ipLabels"},"Name"),i.createElement("input",{type:"text",name:"name",value:e,onChange:function(e){const n=e.target.value;t(n)},required:!0})),i.createElement("div",{className:"inner-input"},i.createElement("label",{className:"ipLabels"},"Email"),i.createElement("input",{type:"Email",name:"email",value:n,onChange:function(e){const t=e.target.value;a(t),c(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t))},required:!0})),i.createElement("div",{className:"inner-input"},i.createElement("label",{className:"ipLabels"},"Text"),i.createElement("textarea",{type:"text",cols:"21",rows:"5",value:r,name:"message",onChange:function(e){const t=e.target.value;l(t)},required:!0})),i.createElement("div",{className:"submit-btn"},i.createElement("button",null,"Submit")))),i.createElement("div",{className:"contact-epta-layer-container-image"},i.createElement("img",{src:h.Z})))),i.createElement("div",{className:"contact-background1"},i.createElement("img",{src:x.Z})),i.createElement("div",{className:"contact-background2"},i.createElement("img",{src:N})))))};var D=()=>i.createElement(i.Fragment,null,i.createElement(o,null),i.createElement(u,null),i.createElement(d,null),i.createElement(g,null),i.createElement(b,null),i.createElement(p,null),i.createElement(k,null),i.createElement(j,null),i.createElement(E.Z,null))}}]);
//# sourceMappingURL=184892ca1d61440366efd99954c69dc86dd1b4ec-a8f6ada40bf0f6a8458b.js.map
!function(){function t(t){return t.call.apply(t.bind,arguments)}function n(t,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(e,i),t.apply(n,e)}}return function(){return t.apply(n,arguments)}}function i(){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t:n).apply(null,arguments)}function e(t,n){this.a=t,this.o=n||t,this.c=this.o.document}function o(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function a(t,n,i){(t=t.c.getElementsByTagName(n)[0])||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function s(t){t.parentNode&&t.parentNode.removeChild(t)}function r(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var a=!1,s=0;s<e.length;s+=1)if(n[o]===e[s]){a=!0;break}a||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(a=!1,s=0;s<i.length;s+=1)if(e[o]===i[s]){a=!0;break}a||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function c(t){return t.o.location.hostname||t.a.location.hostname}function h(t,n,i){function e(){c&&s&&r&&(c(f),c=null)}n=o(t,"link",{rel:"stylesheet",href:n,media:"all"});var s=!1,r=!0,f=null,c=i||null;nt?(n.onload=function(){s=!0,e()},n.onerror=function(){s=!0,f=Error("Stylesheet failed to load"),e()}):setTimeout(function(){s=!0,e()},0),a(t,"head",n)}function l(t,n,i,e){var a=t.c.getElementsByTagName("head")[0];if(a){var s=o(t,"script",{src:n}),r=!1;return s.onload=s.onreadystatechange=function(){r||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(r=!0,i&&i(null),s.onload=s.onreadystatechange=null,"HEAD"==s.parentNode.tagName&&a.removeChild(s))},a.appendChild(s),setTimeout(function(){r||(r=!0,i&&i(Error("Script load timeout")))},e||5e3),s}return null}function u(){this.a=0,this.c=null}function p(t){return t.a++,function(){t.a--,g(t)}}function d(t,n){t.c=n,g(t)}function g(t){0==t.a&&t.c&&(t.c(),t.c=null)}function v(t){this.a=t||"-"}function m(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function w(t){return x(t)+" "+t.f+"00 300px "+y(t.c)}function y(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function b(t){return t.a+t.f}function x(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function j(t){var n=4,i="n",e=null;return t&&((e=t.match(/(normal|oblique|italic)/i))&&e[1]&&(i=e[1].substr(0,1).toLowerCase()),(e=t.match(/([1-9]00|normal|bold)/i))&&e[1]&&(/bold/i.test(e[1])?n=7:/[1-9]00/.test(e[1])&&(n=parseInt(e[1].substr(0,1),10)))),i+n}function _(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new v("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function k(t){t.g&&r(t.f,[t.a.c("wf","loading")]),S(t,"loading")}function T(t){if(t.g){var n=f(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")];n||i.push(t.a.c("wf","inactive")),r(t.f,i,e)}S(t,"inactive")}function S(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,b(i)):t.h[n]())}function C(){this.c={}}function A(t,n,i){var e,o=[];for(e in n)if(n.hasOwnProperty(e)){var a=t.c[e];a&&o.push(a(n[e],i))}return o}function N(t,n){this.c=t,this.f=n,this.a=o(this.c,"span",{"aria-hidden":"true"},this.f)}function E(t){a(t.c,"body",t.a)}function W(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+y(t.c)+";font-style:"+x(t)+";font-weight:"+t.f+"00;"}function F(t,n,i,e,o,a){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=a||void 0}function I(t,n,i,e,o,a,s){this.v=t,this.B=n,this.c=i,this.a=e,this.s=s||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new N(this.c,this.s),this.h=new N(this.c,this.s),this.j=new N(this.c,this.s),this.m=new N(this.c,this.s),t=W(t=new m(this.a.c+",serif",b(this.a))),this.g.a.style.cssText=t,t=W(t=new m(this.a.c+",sans-serif",b(this.a))),this.h.a.style.cssText=t,t=W(t=new m("serif",b(this.a))),this.j.a.style.cssText=t,t=W(t=new m("sans-serif",b(this.a))),this.m.a.style.cssText=t,E(this.g),E(this.h),E(this.j),E(this.m)}function O(){if(null===et){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);et=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return et}function P(t,n,i){for(var e in it)if(it.hasOwnProperty(e)&&n===t.f[it[e]]&&i===t.f[it[e]])return!0;return!1}function B(t){var n,i=t.g.a.offsetWidth,e=t.h.a.offsetWidth;(n=i===t.f.serif&&e===t.f["sans-serif"])||(n=O()&&P(t,i,e)),n?tt()-t.A>=t.w?O()&&P(t,i,e)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?D(t,t.v):D(t,t.B):L(t):D(t,t.v)}function L(t){setTimeout(i(function(){B(this)},t),50)}function D(t,n){setTimeout(i(function(){s(this.g.a),s(this.h.a),s(this.j.a),s(this.m.a),n(this.a)},t),0)}function $(t,n,i){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=i}function q(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&r(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),S(t,"active")):T(t.a))}function G(t){this.j=t,this.a=new C,this.h=0,this.f=this.g=!0}function H(t,n,e,o,a){var s=0==--t.h;(t.f||t.g)&&setTimeout(function(){var t=a||null,f=o||{};if(0===e.length&&s)T(n.a);else{n.f+=e.length,s&&(n.j=s);var c,h=[];for(c=0;c<e.length;c++){var l=e[c],u=f[l.c],p=n.a,d=l;if(p.g&&r(p.f,[p.a.c("wf",d.c,b(d).toString(),"loading")]),S(p,"fontloading",d),p=null,null===ot)if(window.FontFace){d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);ot=d?42<parseInt(d[1],10):!g}else ot=!1;p=ot?new F(i(n.g,n),i(n.h,n),n.c,l,n.s,u):new I(i(n.g,n),i(n.h,n),n.c,l,n.s,t,u),h.push(p)}for(c=0;c<h.length;c++)h[c].start()}},0)}function M(t,n,i){var e=[],o=i.timeout;k(n);e=A(t.a,i,t.c);var a=new $(t.c,n,o);for(t.h=e.length,n=0,i=e.length;n<i;n++)e[n].load(function(n,i,e){H(t,a,n,i,e)})}function z(t,n){this.c=t,this.a=n}function K(t,n){this.c=t,this.a=n}function R(t,n){this.c=t||at,this.a=[],this.f=[],this.g=n||""}function U(t,n){for(var i=n.length,e=0;e<i;e++){var o=n[e].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}function V(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,i=[],e=0;e<n;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}function X(t){this.f=t,this.a=[],this.c={}}function J(t){for(var n=t.f.length,i=0;i<n;i++){var e=t.f[i].split(":"),o=e[0].replace(/\+/g," "),a=["n4"];if(2<=e.length){var s;if(s=[],r=e[1])for(var r,f=(r=r.split(",")).length,c=0;c<f;c++){var h;if((h=r[c]).match(/^[\w-]+$/))if(null==(u=ct.exec(h.toLowerCase())))h="";else{if(h=null==(h=u[2])||""==h?"n":ft[h],null==(u=u[1])||""==u)u="4";else var l=rt[u],u=l||(isNaN(u)?"4":u.substr(0,1));h=[h,u].join("")}else h="";h&&s.push(h)}0<s.length&&(a=s),3==e.length&&(s=[],0<(e=(e=e[2])?e.split(","):s).length&&(e=st[e[0]])&&(t.c[o]=e))}for(t.c[o]||(e=st[o])&&(t.c[o]=e),e=0;e<a.length;e+=1)t.a.push(new m(o,a[e]))}}function Q(t,n){this.c=t,this.a=n}function Y(t,n){this.c=t,this.a=n}function Z(t,n){this.c=t,this.f=n,this.a=[]}var tt=Date.now||function(){return+new Date},nt=!!window.FontFace;v.prototype.c=function(){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},F.prototype.start=function(){var t=this.c.o.document,n=this,i=tt(),e=new Promise(function(e,o){function a(){tt()-i>=n.f?o():t.fonts.load(w(n.a),n.h).then(function(t){1<=t.length?e():setTimeout(a,25)},function(){o()})}a()}),o=null,a=new Promise(function(t,i){o=setTimeout(i,n.f)});Promise.race([a,e]).then(function(){o&&(clearTimeout(o),o=null),n.g(n.a)},function(){n.j(n.a)})};var it={D:"serif",C:"sans-serif"},et=null;I.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=tt(),B(this)};var ot=null;$.prototype.g=function(t){var n=this.a;n.g&&r(n.f,[n.a.c("wf",t.c,b(t).toString(),"active")],[n.a.c("wf",t.c,b(t).toString(),"loading"),n.a.c("wf",t.c,b(t).toString(),"inactive")]),S(n,"fontactive",t),this.m=!0,q(this)},$.prototype.h=function(t){var n=this.a;if(n.g){var i=f(n.f,n.a.c("wf",t.c,b(t).toString(),"active")),e=[],o=[n.a.c("wf",t.c,b(t).toString(),"loading")];i||e.push(n.a.c("wf",t.c,b(t).toString(),"inactive")),r(n.f,e,o)}S(n,"fontinactive",t),q(this)},G.prototype.load=function(t){this.c=new e(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,M(this,new _(this.c,t),t)},z.prototype.load=function(t){function n(){if(a["__mti_fntLst"+e]){var i,o=a["__mti_fntLst"+e](),s=[];if(o)for(var r=0;r<o.length;r++){var f=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(i=o[r].fontStyle+o[r].fontWeight,s.push(new m(f,i))):s.push(new m(f))}t(s)}else setTimeout(function(){n()},50)}var i=this,e=i.a.projectId,o=i.a.version;if(e){var a=i.c.o;l(this.c,(i.a.api||"https://fast.fonts.net/jsapi")+"/"+e+".js"+(o?"?v="+o:""),function(o){o?t([]):(a["__MonotypeConfiguration__"+e]=function(){return i.a},n())}).id="__MonotypeAPIScript__"+e}else t([])},K.prototype.load=function(t){var n,i,e=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},s=new u;for(n=0,i=e.length;n<i;n++)h(this.c,e[n],p(s));var r=[];for(n=0,i=o.length;n<i;n++)if((e=o[n].split(":"))[1])for(var f=e[1].split(","),c=0;c<f.length;c+=1)r.push(new m(e[0],f[c]));else r.push(new m(e[0]));d(s,function(){t(r,a)})};var at="https://fonts.googleapis.com/css",st={latin:"BESbswy","latin-ext":"\xe7\xf6\xfc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},rt={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},ft={i:"i",italic:"i",n:"n",normal:"n"},ct=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/,ht={Arimo:!0,Cousine:!0,Tinos:!0};Q.prototype.load=function(t){var n=new u,i=this.c,e=new R(this.a.api,this.a.text),o=this.a.families;U(e,o);var a=new X(o);J(a),h(i,V(e),p(n)),d(n,function(){t(a.a,a.c,ht)})},Y.prototype.load=function(t){var n=this.a.id,i=this.c.o;n?l(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",function(n){if(n)t([]);else if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){n=i.Typekit.config.fn;for(var e=[],o=0;o<n.length;o+=2)for(var a=n[o],s=n[o+1],r=0;r<s.length;r++)e.push(new m(a,s[r]));try{i.Typekit.load({events:!1,classes:!1,async:!0})}catch(f){}t(e)}},2e3):t([])},Z.prototype.load=function(t){var n=this.f.id,i=this.c.o,e=this;n?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[n]=function(n,i){for(var o=0,a=i.fonts.length;o<a;++o){var s=i.fonts[o];e.a.push(new m(s.name,j("font-weight:"+s.weight+";font-style:"+s.style)))}t(e.a)},l(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+c(this.c)+"/"+n+".js",function(n){n&&t([])})):t([])};var lt=new G(window);lt.a.c.custom=function(t,n){return new K(n,t)},lt.a.c.fontdeck=function(t,n){return new Z(n,t)},lt.a.c.monotype=function(t,n){return new z(n,t)},lt.a.c.typekit=function(t,n){return new Y(n,t)},lt.a.c.google=function(t,n){return new Q(n,t)};var ut={load:i(lt.load,lt)};"function"==typeof define&&define.amd?define(function(){return ut}):"undefined"!=typeof module&&module.exports?module.exports=ut:(window.WebFont=ut,window.WebFontConfig&&lt.load(window.WebFontConfig))}(),WebFont.load({google:{families:["Cormorant Garamond:700","Lato:300,400,700"]}});
//# sourceMappingURL=/assets/source-maps/webfonts.js.map
//# sourceURL=_assets/javascripts/webfonts.js

import{C as u,E as m,r as w}from"./app.config.4edfb445.js";const h=decodeURIComponent,S=encodeURIComponent,g=/; */,l=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function y(e,n){if(typeof e!="string")throw new TypeError("argument str must be a string");let i={},t=n||{},r=e.split(g),s=t.decode||h;for(let o=0;o<r.length;o++){let a=r[o],p=a.indexOf("=");if(p<0)continue;let f=a.substr(0,p).trim(),c=a.substr(++p,a.length).trim();c[0]=='"'&&(c=c.slice(1,-1)),i[f]==null&&(i[f]=x(c,s))}return i}function d(e,n,i){let t=i||{},r=t.encode||S;if(typeof r!="function")throw new TypeError("option encode is invalid");if(!l.test(e))throw new TypeError("argument name is invalid");let s=r(n);if(s&&!l.test(s))throw new TypeError("argument val is invalid");let o=e+"="+s;if(t.maxAge!=null){let a=t.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(t.domain){if(!l.test(t.domain))throw new TypeError("option domain is invalid");o+="; Domain="+t.domain}if(t.path){if(!l.test(t.path))throw new TypeError("option path is invalid");o+="; Path="+t.path}if(t.expires){if(typeof t.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(o+="; HttpOnly"),t.secure&&(o+="; Secure"),t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return o}function x(e,n){try{return n(e)}catch{return e}}const k={path:"/",watch:!0,decode:e=>w(decodeURIComponent(e)),encode:e=>encodeURIComponent(typeof e=="string"?e:JSON.stringify(e))};function v(e,n){var s;const i={...k,...n},t=C(i)||{},r=u(t[e]??((s=i.default)==null?void 0:s.call(i)));{const o=()=>{T(e,r.value,i)};i.watch?m(r,o,{deep:i.watch!=="shallow"}):o()}return r}function C(e={}){return y(document.cookie,e)}function E(e,n,i={}){return n==null?d(e,n,{...i,maxAge:-1}):d(e,n,i)}function T(e,n,i={}){document.cookie=E(e,n,i)}export{v as u};

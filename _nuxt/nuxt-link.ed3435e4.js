import{y as b,I as C,b as q,e as p,J as k,B as y,K as P,L as A,i as x,z as R,M as T}from"./entry.2e2ecfdb.js";const g=globalThis.requestIdleCallback||(t=>{const a=Date.now(),e={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-a))};return setTimeout(()=>{t(e)},1)}),N=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),S=t=>{const a=b();a.isHydrating?a.hooks.hookOnce("app:suspense:resolve",()=>{g(t)}):g(t)};async function _(t,a=C()){if(a._routePreloaded||(a._routePreloaded=new Set),a._routePreloaded.has(t))return;const e=a._preloadPromises=a._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>_(t,a));a._routePreloaded.add(t);const r=a.resolve(t).matched.map(o=>{var n;return(n=o.components)==null?void 0:n.default}).filter(o=>typeof o=="function");for(const o of r){const n=Promise.resolve(o()).catch(()=>{}).finally(()=>e.splice(e.indexOf(n)));e.push(n)}await Promise.all(e)}const B=(...t)=>t.find(a=>a!==void 0),I="noopener noreferrer";function w(t){const a=t.componentName||"NuxtLink";return q({name:a,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:r}){const o=C(),n=p(()=>e.to||e.href||""),c=p(()=>e.external||e.target&&e.target!=="_self"?!0:typeof n.value=="object"?!1:n.value===""||k(n.value,!0)),v=y(!1),s=y(null);if(e.prefetch!==!1&&e.noPrefetch!==!0&&typeof n.value=="string"&&e.target!=="_blank"&&!L()){const f=b();let u,l=null;P(()=>{const m=E();S(()=>{u=g(()=>{var d;(d=s==null?void 0:s.value)!=null&&d.tagName&&(l=m.observe(s.value,async()=>{l==null||l(),l=null,await Promise.all([f.hooks.callHook("link:prefetch",n.value).catch(()=>{}),!c.value&&_(n.value,o).catch(()=>{})]),v.value=!0}))})})}),A(()=>{u&&N(u),l==null||l(),l=null})}return()=>{var m,d;if(!c.value)return x(R("RouterLink"),{ref:h=>{s.value=h==null?void 0:h.$el},to:n.value,...v.value&&!e.custom?{class:e.prefetchedClass||t.prefetchedClass}:{},activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom},r.default);const i=typeof n.value=="object"?((m=o.resolve(n.value))==null?void 0:m.href)??null:n.value||null,f=e.target||null,u=e.noRel?null:B(e.rel,t.externalRelAttribute,i?I:"")||null,l=()=>T(i,{replace:e.replace});return e.custom?r.default?r.default({href:i,navigate:l,route:o.resolve(i),rel:u,target:f,isExternal:c.value,isActive:!1,isExactActive:!1}):null:x("a",{ref:s,href:i,rel:u,target:f},(d=r.default)==null?void 0:d.call(r))}}})}const D=w({componentName:"NuxtLink"});function E(){const t=b();if(t._observer)return t._observer;let a=null;const e=new Map,r=(n,c)=>(a||(a=new IntersectionObserver(v=>{for(const s of v){const i=e.get(s.target);(s.isIntersecting||s.intersectionRatio>0)&&i&&i()}})),e.set(n,c),a.observe(n),()=>{e.delete(n),a.unobserve(n),e.size===0&&(a.disconnect(),a=null)});return t._observer={observe:r}}function L(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{D as _};

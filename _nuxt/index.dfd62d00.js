import{_ as o,$ as a,a0 as t,ae as n,ah as _,ar as m,ax as p,ay as g,aw as s,I as x,au as h}from"./app.config.ca9f407a.js";import f from"./ContentList.c65374c7.js";import{c as u}from"./index.f6a686d6.js";import{e as b}from"./entry.cb396a52.js";import"./ContentQuery.1be907d2.js";import"./cookie.3778a7f4.js";import"./query.c3f7607a.js";import"./utils.db3402c2.js";const y={},v={class:"bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28"},k={class:"mx-auto max-w-lg lg:max-w-7xl"},w={class:"border-b border-b-gray-200 pb-6"},D=t("h2",{class:"text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"}," Entradas recientes ",-1),B={class:"mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12"},C={class:"text-xl text-gray-900"},$={class:"mt-3 text-gray-500"},E={class:"mt-6"},L=["href"],N={class:"text-sm text-gray-500"},V={datetime:"2020-03-16"};function F(r,I){const c=m("nuxt-google-adsense"),i=h,d=f;return o(),a("main",v,[t("div",k,[t("div",w,[n(c,{"ad-client":"ca-pub-6731565312584923"}),D]),t("div",B,[n(d,{path:"/blog"},{default:_(({list:l})=>[(o(!0),a(p,null,g(l,e=>(o(),a("div",{key:e._path,class:"flex flex-col rounded-lg border border-gray-200 p-4"},[n(i,{href:e._path},{default:_(()=>[t("p",C,s(e.title),1),t("p",$,s(e.description),1)]),_:2},1032,["href"]),t("div",E,[t("a",{href:`?author=${e.author}`,class:"text-sm font-medium text-gray-900"},s(e.author),9,L),t("div",N,[t("time",V,s(("convertDate"in r?r.convertDate:x(u))(e.date)),1)])])]))),128))]),_:1})])])])}const K=b(y,[["render",F]]);export{K as default};
import{_ as n}from"./ContentQuery.e7a5d6f5.js";import{M as c,ae as h,h as p}from"./router.c1423e96.js";import"./entry.d5ee1a68.js";import"./nuxt-link.90625939.js";import"./app.config.2cb920c2.js";import"./cookie.c3ea05e4.js";import"./query.c3f7607a.js";import"./utils.fe0da0f4.js";const L=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=h(),{path:f,query:o}=u,m={...o||{},path:f||(o==null?void 0:o.path)||"/"},r=(e,a)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:e,data:a},null,2));return p(n,m,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:d})=>t==null?void 0:t.default({list:e,refresh:a,isPartial:d,...this.$attrs}):({data:e})=>r("default",e),empty:e=>t!=null&&t.empty?t.empty(e):r("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):r("not-found",e==null?void 0:e.data)}})}});export{L as default};

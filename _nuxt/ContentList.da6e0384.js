import{_ as n}from"./ContentQuery.7729aa08.js";import{M as c,ak as h,h as p}from"./app.config.4edfb445.js";import"./entry.704ff541.js";import"./cookie.49526efb.js";import"./query.c3f7607a.js";import"./utils.da5eca71.js";const v=c({name:"ContentList",props:{path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0}},render(u){const t=h(),{path:f,query:o}=u,m={...o||{},path:f||(o==null?void 0:o.path)||"/"},r=(e,a)=>p("pre",null,JSON.stringify({message:"You should use slots with <ContentList>",slot:e,data:a},null,2));return p(n,m,{default:t!=null&&t.default?({data:e,refresh:a,isPartial:d})=>t==null?void 0:t.default({list:e,refresh:a,isPartial:d,...this.$attrs}):({data:e})=>r("default",e),empty:e=>t!=null&&t.empty?t.empty(e):r("default",e==null?void 0:e.data),"not-found":e=>{var a;return t!=null&&t["not-found"]?(a=t==null?void 0:t["not-found"])==null?void 0:a.call(t,e):r("not-found",e==null?void 0:e.data)}})}});export{v as default};

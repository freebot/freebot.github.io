import s from"./ContentSlot.301a9d7a.js";import{M as o,ak as m,N as p,z as u}from"./app.config.8b805190.js";import"./utils.e9fa36a3.js";import"./cookie.43d04cc0.js";const d=o({name:"Markdown",extends:s,setup(t){const{parent:e}=u(),{between:n,default:a}=m(),r=p(()=>typeof t.unwrap=="string"?t.unwrap.split(" "):["*"]);return{fallbackSlot:a,tags:r,between:n,parent:e}}});export{d as default};

(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{170:function(t,e,r){"use strict";r.r(e);var n=r(20),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block"},[e("nav",{staticClass:"navbar"},[e("div",{staticClass:"navbar-barnd"},[e("a",{staticClass:"navbar-item",attrs:{href:""}},[e("h1",{staticClass:"title is-4"},[this._v("Otro blog en github")])])]),this._v(" "),e("div",{staticClass:"navbar-end"},[e("a",{staticClass:"navbar-item",attrs:{href:"/"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-home"})])]),this._v(" "),e("a",{staticClass:"navbar-item",attrs:{href:"https://github.com/freebot"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-github"})])]),this._v(" "),e("a",{staticClass:"navbar-item",attrs:{href:"https://www.twitter.com/jorgeikeda"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-twitter"})])]),this._v(" "),e("a",{staticClass:"navbar-item",attrs:{href:"https://springrole.com/jorgeikeda"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-id-card-o"})])])])])])}],!1,null,null,null);e.default=component.exports},171:function(t,e,r){"use strict";r.r(e);var n=r(20),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block"},[e("aside",{staticClass:"menu"},[e("p",{staticClass:"menu-label"},[this._v("\n            Tags\n        ")]),this._v(" "),e("ul",{staticClass:"menu-list"},[e("li",[e("a",{attrs:{href:"/tags/tutorial"}},[this._v("Tutorial")])]),this._v(" "),e("li",[e("a",{attrs:{href:"/tags/graphql"}},[this._v("GraphQL")])])])])])}],!1,null,null,null);e.default=component.exports},206:function(t,e,r){"use strict";r.r(e);r(21);var n=r(2),l=r(170),c=r(171),o={asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,n=t.error,l=t.$content,e.prev=1,e.next=4,l("posts",{deep:!0}).where({tags:{$contains:r.slug}}).fetch();case 4:return c=e.sent,e.abrupt("return",{posts:c});case 8:e.prev=8,e.t0=e.catch(1),n({statusCode:404,message:"Page could not be found"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},head:function(){return{title:"Tags",meta:[{hid:"description",name:"description",content:"Cool nuxt blog tags"}],link:[{rel:"canonical",href:"https://nuxt-blog.com/tags"}]}},components:{NavBar:l.default,SlideBar:c.default}},v=r(20),component=Object(v.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"posts"},[r("NavBar"),t._v(" "),r("section",{staticClass:"hero is-primary"},[r("h1",{staticClass:"title is-2"},[t._v("Tags: "+t._s(t.$route.params.slug))])]),t._v(" "),r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-2"},[r("SlideBar")],1),t._v(" "),r("div",{staticClass:"column is-8"},t._l(t.posts,(function(e){return r("div",{key:e.dir,staticClass:"card"},[r("h3",{staticClass:"title is-3"},[t._v(t._s(e.title))]),t._v(" "),r("p",[t._v(t._s(e.description))]),t._v(" "),r("p",{staticClass:"tags"},t._l(e.tags,(function(e){return r("span",{key:e,staticClass:"tag"},[r("nuxt-link",{attrs:{to:"/tags/"+e}},[t._v(t._s(e))]),t._v(" \n          ")],1)})),0),t._v(" "),r("footer",{staticClass:"card-footer"},[r("p",{staticClass:"card-footer-item"},[r("nuxt-link",{attrs:{to:e.dir}},[t._v("Leer más")])],1)])])})),0),t._v(" "),r("div",{staticClass:"column is-2"})])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavBar:r(170).default,SlideBar:r(171).default})}}]);
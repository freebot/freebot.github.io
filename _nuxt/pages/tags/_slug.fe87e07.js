(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{170:function(t,e,n){"use strict";n.r(e);var r=n(20),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"block"},[e("nav",{staticClass:"navbar"},[e("div",{staticClass:"navbar-barnd"},[e("a",{staticClass:"navbar-item",attrs:{href:""}},[e("h1",{staticClass:"title is-4"},[this._v("Otro blog en github")])])]),this._v(" "),e("div",{staticClass:"navbar-end"},[e("a",{staticClass:"navbar-item",attrs:{href:"/"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-home"})])]),this._v(" "),e("a",{staticClass:"navbar-item",attrs:{href:"https://github.com/freebot"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-github"})])]),this._v(" "),e("a",{staticClass:"navbar-item",attrs:{href:"https://www.twitter.com/jorgeikeda"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-twitter"})])]),this._v(" "),e("a",{staticClass:"navbar-item",attrs:{href:"https://springrole.com/jorgeikeda"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fa fa-id-card-o"})])])])])])}],!1,null,null,null);e.default=component.exports},171:function(t,e,n){"use strict";n.r(e);var r=n(20),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[n("aside",{staticClass:"menu"},[n("p",{staticClass:"menu-label"},[t._v("\n            Tags\n        ")]),t._v(" "),n("ul",{staticClass:"menu-list"},[n("li",[n("a",{attrs:{href:"/tags/auth"}},[t._v("Auth")])]),t._v(" "),n("li",[n("a",{attrs:{href:"/tags/fontsawesome"}},[t._v("Fonts Awesome")])]),t._v(" "),n("li",[n("a",{attrs:{href:"/tags/graphql"}},[t._v("GraphQL")])]),t._v(" "),n("li",[n("a",{attrs:{href:"/tags/nuxtjs"}},[t._v("Nuxt")])]),t._v(" "),n("li",[n("a",{attrs:{href:"/tags/tutorial"}},[t._v("Tutorial")])])])])])}],!1,null,null,null);e.default=component.exports},206:function(t,e,n){"use strict";n.r(e);n(21);var r=n(2),l=n(170),c=n(171),o={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=t.error,l=t.$content,e.prev=1,e.next=4,l("posts",{deep:!0}).where({tags:{$contains:n.slug}}).fetch();case 4:return c=e.sent,e.abrupt("return",{posts:c});case 8:e.prev=8,e.t0=e.catch(1),r({statusCode:404,message:"Page could not be found"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},head:function(){return{title:"Tags",meta:[{hid:"description",name:"description",content:"Cool nuxt blog tags"}],link:[{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"}]}},components:{NavBar:l.default,SlideBar:c.default}},f=n(20),component=Object(f.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"posts"},[n("NavBar"),t._v(" "),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-2"},[n("SlideBar")],1),t._v(" "),n("div",{staticClass:"column is-8"},t._l(t.posts,(function(e){return n("div",{key:e.dir,staticClass:"card"},[n("h3",{staticClass:"title is-3"},[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.description))]),t._v(" "),n("p",{staticClass:"tags"},t._l(e.tags,(function(e){return n("span",{key:e,staticClass:"tag"},[n("nuxt-link",{attrs:{to:"/tags/"+e}},[t._v(t._s(e))]),t._v(" \n            ")],1)})),0),t._v(" "),n("footer",{staticClass:"card-footer"},[n("p",{staticClass:"card-footer-item"},[n("nuxt-link",{attrs:{to:e.dir}},[t._v("Leer más")])],1)])])})),0),t._v(" "),t._m(0)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"column is-2"},[e("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext",rel:"stylesheet"}}),e("a",{staticClass:"bmc-button",attrs:{target:"_blank",href:"https://www.buymeacoffee.com/freebot"}},[e("img",{attrs:{src:"https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg",alt:"Invítame un café"}}),e("span",{staticStyle:{"margin-left":"5px","font-size":"19px !important"}},[this._v("Invítame un café")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{NavBar:n(170).default,SlideBar:n(171).default})}}]);
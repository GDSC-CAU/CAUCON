(window.webpackJsonp=window.webpackJsonp||[]).push([[14,6],{305:function(t,e,n){var map={"./hyojason.PNG":306,"./thumbnail-example.png":307};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=305},306:function(t,e,n){t.exports=n.p+"img/hyojason.c8df498.PNG"},307:function(t,e,n){t.exports=n.p+"img/thumbnail-example.e3a0986.png"},327:function(t,e,n){"use strict";n.r(e);var r=n(11),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"w-auto md:block h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[e("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 19l-7-7 7-7"}})])}),[],!1,null,null,null);e.default=component.exports},342:function(t,e,n){var content=n(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("6ee435a2",content,!0,{sourceMap:!1})},376:function(t,e,n){"use strict";n(342)},377:function(t,e,n){var r=n(29)((function(i){return i[1]}));r.push([t.i,".custom-text[data-v-200cab98]{word-break:keep-all}.lead-box[data-v-200cab98]{border-radius:70%;overflow:hidden}.profile[data-v-200cab98]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}.thumbnail[data-v-200cab98]{width:400px;height:225px;-o-object-fit:cover;object-fit:cover}.wfull[data-v-200cab98]{width:100vw}",""]),r.locals={},t.exports=r},403:function(t,e,n){"use strict";n.r(e);var r=n(9),o=(n(49),n(25),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,l,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("tags",r.slug).fetch();case 3:return o=e.sent,l=o.name,e.next=7,n("conferences").where({tag:{$contains:l}}).sortBy("desc").fetch();case 7:return c=e.sent,e.abrupt("return",{tag:o,tagName:l,proArticles:c});case 9:case"end":return e.stop()}}),e)})))()},data:function(){return{path:"/"}},created:function(){var t,e,n;null!==(t=this.$nuxt)&&void 0!==t&&null!==(e=t.context)&&void 0!==e&&null!==(n=e.from)&&void 0!==n&&n.path&&(this.path=this.$nuxt.context.from.path)}}),l=(n(376),n(11)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wfull bg-semi-black"},[r("div",{staticClass:"max-w-7xl mx-auto px-6 pt-28 md:pt-20"},[r("div",{staticClass:"hidden md:block "},[r("div",{staticClass:"flex flex-row justify-between"},[r("div",{staticClass:" py-8 "},[r("nuxt-link",{staticClass:"text-lg md:text-xl text-semi-gray hover:underline pb-1.5 md:pb-20 md:mb-10",attrs:{to:t.path}},[r("div",{staticClass:"flex"},[r("Prev",{staticClass:"md: pt-1 pr-2"}),t._v(" GDSC CAU Tech Stack\n                        ")],1)]),t._v(" "),r("div",{staticClass:"text-semi-white text-4xl md:text-6xl font-bold pb-0 md:pb-1.5 md:pt-10 uppercase"},[t._v(t._s(t.tag.name))]),t._v(" "),r("div",{staticClass:" text-lg md:text-xl text-semi-gray pb-1.5 md:pb-3 md:pr-20 "},[t._v(t._s(t.tag.description))])],1)])]),t._v(" "),r("div",{staticClass:"block md:hidden"},[r("div",{staticClass:"text-semi-white text-2xl md:text-3xl font-medium flex justify-center  pb-0 md:pb-1.5"},[t._v(t._s(t.tag.name))]),t._v(" "),r("div",{staticClass:"text-semi-white px-0 md:px-20 pb-4 flex justify-center text-center custom-text"},[t._v(t._s(t.tag.description))])])]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"max-w-7xl grid grid-cols-1 colspan mt-5 md:mt-8 pb-8 md:pb-12 mx-auto px-6"},t._l(t.proArticles,(function(e){return r("div",{key:e,staticClass:"group px-5 rounded-xl border-solid border-2 border-[#202124] hover:border-[#E8EAED]"},[r("nuxt-link",{attrs:{to:{path:"/conferences/"+e.slug}}},[r("div",{staticClass:"article-inner flex items-center py-2 md:py-5 "},[r("div",{staticClass:"hidden md:block"},[r("img",{staticClass:"thumbnail rounded-xl border-none",attrs:{src:n(305)("./"+e.img),alt:""}})]),t._v(" "),r("div",{staticClass:"px-0 md:px-4 md:pl-9"},[r("p",{staticClass:"mb-1 md:mb-1.5 text-sm md:text-xl text-semi-gray"},[t._v(t._s(e.author)+" ")]),t._v(" "),r("h2",{staticClass:"mb-1 md:mb-1.5 text-lg md:text-2xl font-medium  text-semi-white "},[t._v(t._s(e.title))]),t._v(" "),r("p",{staticClass:" text-sm md:text-base text-semi-white custom-text"},[t._v(t._s(e.description))])])])])],1)})),0)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pt-8 md:pt-20 flex justify-between items-center max-w-7xl mx-auto px-6"},[n("div",{staticClass:"text-2xl md:text-3xl text-semi-white font-medium "},[t._v("Conference")])])}],!1,null,"200cab98",null);e.default=component.exports;installComponents(component,{Prev:n(327).default})}}]);
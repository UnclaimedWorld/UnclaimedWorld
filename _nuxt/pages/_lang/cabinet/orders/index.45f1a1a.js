(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{266:function(t,e,l){"use strict";l.r(e);var r={name:"SimpleList",data:function(){return{className:"simple-list__item"}}},c=l(2),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"simple-list"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},267:function(t,e,l){"use strict";l.r(e);var r={name:"MessageBlock",props:{title:{type:String},subtitle:{type:String},icon:{type:String}}},c=l(2),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"message-block"},[l("dynamic-icon",{staticClass:"message-block__icon",attrs:{icon:t.icon}}),t._v(" "),l("div",{staticClass:"message-block__title"},[t._v(t._s(t.title))]),t._v(" "),l("div",{staticClass:"message-block__subtitle"},[t._v(t._s(t.subtitle))]),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DynamicIcon:l(23).default})},278:function(t,e,l){"use strict";l.r(e);l(15);var r={name:"NavTabs",props:{list:{type:Array,required:!0},itemValue:{type:String,default:"value"},value:{type:[String,Number]}}},c=l(2),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"nav-tabs"},t._l(t.list,(function(e){return l("div",{key:e[t.itemValue],staticClass:"nav-tabs__item",class:{active:e[t.itemValue]===t.value},on:{click:function(l){return t.$emit("input",e[t.itemValue])}}},[t._t("default",null,{item:e,active:e[t.itemValue]===t.value})],2)})),0)}),[],!1,null,null,null);e.default=component.exports},286:function(t,e,l){"use strict";l.r(e);var r=l(266),c={components:{ImageItem:l(79).default,SimpleList:r.default},props:{data:{type:Object,required:!0}},computed:{status:function(){switch(this.data.status_code){case 1:return"gray";case 2:return"warning";case 3:return"secondary"}}}},n=l(2),component=Object(n.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"product-order"},[l("div",{staticClass:"product-order__header"},[l("div",[l("v-text",{staticClass:"color-gray mb-10",attrs:{font:"14"}},[t._v("Номер заказа")]),t._v(" "),l("v-text",{staticClass:"color-second",attrs:{font:"18",weight:"600"}},[t._v(t._s(t.data.number))])],1),t._v(" "),l("div",{staticClass:"product-order__tag tag tag--medium",class:"tag--"+t.status},[t._v(t._s(t.data.status))]),t._v(" "),l("div",{staticClass:"text-right"},[l("v-text",{staticClass:"color-gray mb-10",attrs:{font:"14"}},[t._v("К оплате")]),t._v(" "),l("v-text",{attrs:{font:"18",weight:"600"}},[t._v(t._s(t._f("numbers")(t.data.price))+" сум")])],1)]),t._v(" "),l("div",{staticClass:"separator mb-10 mt-20"}),t._v(" "),l("div",{staticClass:"product-order__body"},[l("simple-list",{staticClass:"product-order__description-list"},t._l(t.data.description,(function(e){return l("v-text",{staticClass:"mb-20",attrs:{font:"14"}},[t._v(t._s(e.title)+": "),l("span",{staticClass:"fw-500"},[t._v(t._s(e.value))])])})),1),t._v(" "),l("block-wrap",{staticClass:"product-order__products",attrs:{"mod-style":"align-right mds-align-left","offset-x":"10"}},t._l(t.data.previews,(function(t){return l("image-item",{key:t,staticClass:"product-order__preview",attrs:{src:t,"mod-style":"square"}})})),1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{VText:l(105).default,SimpleList:l(266).default,ImageItem:l(79).default,BlockWrap:l(31).default})},328:function(t,e,l){"use strict";l.r(e);var r=l(267),c=l(278),n={components:{ProductOrder:l(286).default,NavTabs:c.default,MessageBlock:r.default},data:function(){return{orders:[{number:"721499",status:"Обрабока заказа",status_code:1,price:12902e3,description:[{title:"Получение",value:"Самовывоз"},{title:"Дата заказа",value:"17.07.2020"},{title:"Тип оплаты",value:"Онлайн"}],previews:["/img/products/product-1.png","/img/products/product-2.png","/img/products/product-3.png"]},{number:"235341",status:"Ожидается оплата",status_code:2,price:12902e3,description:[{title:"Получение",value:"Самовывоз"},{title:"Дата заказа",value:"17.07.2020"},{title:"Тип оплаты",value:"Онлайн"}],previews:["/img/products/product-4.png","/img/products/product-5.png","/img/products/product-3.png","/img/products/product-1.png"]},{number:"935341",status:"Доставляется",status_code:3,price:12902e3,description:[{title:"Получение",value:"Самовывоз"},{title:"Дата заказа",value:"17.07.2020"},{title:"Тип оплаты",value:"Онлайн"}],previews:["/img/products/product-6.png"]}],currentTab:"active",navs:[{title:"Активные заказы",value:"active",subtitle:"4"},{title:"Выполненные заказы",value:"completed",subtitle:"1"},{title:"Отмененные заказы",value:"canceled",subtitle:"1"}]}}},o=l(2),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("main",[l("div",{staticClass:"page-heading mb-40"},[t._v("Мои заказы")]),t._v(" "),t.orders.length?l("div",[l("nav-tabs",{attrs:{list:t.navs},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.item,c=e.active;return[l("div",{staticClass:"tab-bar",class:{active:c}},[l("div",{staticClass:"tab-bar__title"},[t._v(t._s(r.title))]),t._v(" "),l("div",{staticClass:"tab-bar__subtitle"},[t._v(t._s(r.subtitle))])])]}}]),model:{value:t.currentTab,callback:function(e){t.currentTab=e},expression:"currentTab"}}),t._v(" "),l("div",{staticClass:"separator mb-30"}),t._v(" "),t._l(t.orders,(function(t){return l("product-order",{key:t.price,staticClass:"mb-10",attrs:{data:t}})}))],2):l("div",[l("message-block",{staticClass:"mt-166",attrs:{icon:"stack",subtitle:"Вперед, начните покупать!",title:"У вас еще нет заказов"}},[l("app-button",{attrs:{height:"54",width:"270","mod-style":"second","text-color":"white"}},[t._v("Начать покупки")])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppButton:l(30).default,MessageBlock:l(267).default,NavTabs:l(278).default,ProductOrder:l(286).default})}}]);
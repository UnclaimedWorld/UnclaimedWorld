(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{266:function(t,e,l){"use strict";l.r(e);var n={name:"SimpleList",data:function(){return{className:"simple-list__item"}}},r=l(2),component=Object(r.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"simple-list"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},270:function(t,e,l){"use strict";l.r(e);var n={name:"ProductsBlock",components:{BannerItem:l(78).default},props:{title:{type:String},category:{type:String},link:{type:String},banner:{type:String},bannerUrl:{type:String}}},r=l(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"products-block",class:{"products-block--banner":t.banner}},[l("div",{staticClass:"products-block__header"},[l("div",{staticClass:"products-block__wrap"},[l("div",{staticClass:"products-block__title"},[t._v(t._s(t.title))]),t._v(" "),t.category?l("div",{staticClass:"products-block__subtitle"},[t._v("Товары из категории "),l("span",{staticClass:"color-second"},[t._v(t._s(t.category))])]):t._e()]),t._v(" "),t.link?l("div",{staticClass:"products-block__link text-link"},[t._v("Посмотреть все")]):t._e()]),t._v(" "),l("div",{staticClass:"products-block__body"},[t._t("default"),t._v(" "),t.banner?l("banner-item",{staticClass:"products-block__banner",attrs:{src:t.banner,link:t.bannerUrl}}):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BannerItem:l(78).default})},271:function(t,e,l){"use strict";l.r(e);var n={name:"ProductsSlider",components:{ProductItem:l(77).default},props:{products:{type:Array},buttonColor:{type:String,default:"white"},buttonBorder:{type:String,default:"gray"}},data:function(){return{productsSliderOptions:{contain:!0,cellAlign:"left",pageDots:!1,prevNextButtons:!1},currentSlide:0}},methods:{previous:function(){this.$refs.slider.previous()},next:function(){this.$refs.slider.next()},setCurrentSlide:function(t){this.currentSlide=t}},mounted:function(){var t=this;this.$nextTick((function(){t.$refs.slider&&(t.$refs.slider.on("change",t.setCurrentSlide),setTimeout((function(){t.$refs.slider.resize()}),200))}))},beforeDestroy:function(){var t=this;this.$nextTick((function(){t.$refs.slider&&t.$refs.slider.off("change",t.setCurrentSlide)}))}},r=l(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"products-slider"},[l("client-only",[l("flickity",{ref:"slider",staticClass:"products-slider__wrap",attrs:{options:t.productsSliderOptions},on:{change:t.setCurrentSlide}},t._l(t.products,(function(t){return l("product-item",{key:t.id,staticClass:"products-slider__item carousel-cell",attrs:{data:t,rating:""}})})),1),t._v(" "),t.currentSlide>0?l("app-button",{staticClass:"products-slider__button previous",attrs:{"mod-style":t.buttonColor,radius:"100",width:"50",height:"50",border:t.buttonBorder,"text-color":"blue"},on:{click:t.previous}},[l("dynamic-icon",{attrs:{icon:"chevron-left"}})],1):t._e(),t._v(" "),t.currentSlide<t.products.length?l("app-button",{staticClass:"products-slider__button next",attrs:{"mod-style":t.buttonColor,radius:"100",width:"50",height:"50",border:t.buttonBorder,"text-color":"blue"},on:{click:t.next}},[l("dynamic-icon",{attrs:{icon:"chevron-right"}})],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:l(77).default,DynamicIcon:l(23).default,AppButton:l(30).default})},277:function(t,e,l){"use strict";l.r(e);var n=l(81),r=l(31),o=l(80),c={components:{ColorPick:l(82).default,ButtonControl:o.default,BlockWrap:r.default,RatingBlock:n.default},props:{data:{type:Object,required:!0},modStyle:{type:String,default:""},seller:{type:Boolean}},data:function(){return{model:{currentColor:"",currentSize:""}}},computed:{discountPrice:function(){return this.data.price-this.data.price*this.data.discount||null}}},d=l(2),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"category-product",class:t.modStyle},[l("div",{staticClass:"category-product__image"},[l("div",{staticClass:"category-product__image-wrap"},[l("img",{attrs:{src:t.data.image,alt:""}})])]),t._v(" "),l("div",{staticClass:"category-product__content"},[l("div",{staticClass:"category-product__title"},[t._v(t._s(t.data.title))]),t._v(" "),l("rating-block",{staticClass:"category-product__rating",attrs:{rate:t.data.rate}}),t._v(" "),l("ul",{staticClass:"category-product__list"},t._l(t.data.descriptionList,(function(e){return l("li",{staticClass:"category-product__list-item"},[l("span",{staticClass:"color-gray"},[t._v(t._s(e.name))]),t._v("\n        "+t._s(e.value)+"\n      ")])})),0),t._v(" "),t.seller?t._e():l("block-wrap",{staticClass:"category-product__actions actions-wrap",attrs:{"offset-x":"25","width-auto":""}},[l("v-text",{staticClass:"actions-wrap__action text-link",class:{"text-link--gray":t.data.isFavorite},attrs:{font:"12",weight:"600"}},[l("dynamic-icon",{staticClass:"text-link__icon",attrs:{icon:"heart",size:"14"}}),t._v("\n        "+t._s(t.data.isFavorite?"Убрать из избранного":"В избранное")+"\n      ")],1),t._v(" "),l("v-text",{staticClass:"actions-wrap__action text-link",attrs:{font:"12",weight:"600"}},[l("dynamic-icon",{staticClass:"text-link__icon",attrs:{icon:"signal",size:"14"}}),t._v("\n        Сравнить\n      ")],1),t._v(" "),l("v-text",{staticClass:"actions-wrap__action text-link",attrs:{font:"12",weight:"600"}},[l("dynamic-icon",{staticClass:"text-link__icon",attrs:{icon:"arrows-expand-up-right",size:"14"}}),t._v("\n        Поделиться\n      ")],1)],1)],1),t._v(" "),l("div",{staticClass:"category-product__aside"},[l("div",{staticClass:"category-product__aside-header"},[t.discountPrice?l("div",{staticClass:"category-product__price-old price-old price-old--medium"},[l("span",[t._v(t._s(t._f("numbers")(t.discountPrice)))])]):t._e(),t._v(" "),l("div",{staticClass:"category-product__price-current price-current price-current--large"},[t._v(t._s(t._f("numbers")(t.data.price))+" "),l("span",{staticClass:"price-current__currency"},[t._v("сум")])]),t._v(" "),t.data.small?l("div",{staticClass:"category-product__small"},[t._v(t._s(t.data.small))]):t._e()]),t._v(" "),t.data.settingsSizes?l("block-wrap",{staticClass:"category-product__settings-wrap",attrs:{"offset-x":"5","width-auto":""}},t._l(t.data.settingsSizes,(function(e){return l("button-control",{key:e.value,staticClass:"fw-400",attrs:{val:e.value,type:"radio","mod-style":"outline",height:"24",sides:"4",radius:"5"},model:{value:t.model.currentSize,callback:function(e){t.$set(t.model,"currentSize",e)},expression:"model.currentSize"}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),1):t._e(),t._v(" "),t.data.settingsColors?l("block-wrap",{staticClass:"category-product__settings-wrap",attrs:{"offset-x":"10","width-auto":""}},t._l(t.data.settingsColors,(function(e){return l("color-pick",{key:e,attrs:{val:e,type:"radio",color:e},model:{value:t.model.currentColor,callback:function(e){t.$set(t.model,"currentColor",e)},expression:"model.currentColor"}})})),1):t._e(),t._v(" "),l("div",{staticClass:"category-product__button-spacer"}),t._v(" "),t.seller?l("app-button",{staticClass:"category-product__button fw-600",attrs:{height:"54","mod-style":"second","text-color":"white",radius:"5"}},[t._v("Изменить цену")]):l("app-button",{staticClass:"category-product__button fw-600",attrs:{height:"54","mod-style":"second","text-color":"white",radius:"5"}},[t._v("Добавить в корзину")])],1),t._v(" "),t.data.discount?l("div",{staticClass:"category-product__discount tag"},[t._v("\n    -"+t._s(100*t.data.discount)+"%\n  ")]):t._e()])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{RatingBlock:l(81).default,DynamicIcon:l(23).default,VText:l(105).default,BlockWrap:l(31).default,ButtonControl:l(80).default,ColorPick:l(82).default,AppButton:l(30).default})},280:function(t,e,l){"use strict";l.r(e);var n={name:"Breadcrumbs",props:{items:{type:Array}}},r=l(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"breadcrumbs"},t._l(t.items,(function(e){return l("nuxt-link",{key:e.title,staticClass:"breadcrumbs__item",attrs:{to:t.$localePath(e.link)}},[t._v(t._s(e.title))])})),1)}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,l){"use strict";l.r(e);l(15);var n={name:"CategoryList",props:{title:{type:String},list:{type:Array,default:function(){return[]}},maxCount:{type:[String,Number]},modStyle:{type:String},clearButton:{type:Boolean},type:{type:String}},data:function(){return{showRest:!1}},computed:{slicedList:function(){return this.list.slice(0,this.showRest?this.list.length:this.maxCount)}}},r=l(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"category-list",class:t.modStyle},[l("div",{staticClass:"category-list__title"},[t._v("\n    "+t._s(t.title)+"\n    "),t.clearButton?l("div",{staticClass:"category-list__link category-list__link--header text-link",on:{click:function(e){return t.$emit("clear")}}},[t._v("Очистить")]):t._e()]),t._v(" "),l("div",{staticClass:"category-list__body"},["cards"===t.type?l("block-wrap",{staticClass:"category-list__cards",attrs:{"offset-x":"15","offset-y":"15",count:"3"}},t._l(t.slicedList,(function(e,n){return l("div",{key:n},[t._t("default",null,{item:e})],2)})),0):t._l(t.slicedList,(function(e,n){return l("div",{key:n,staticClass:"category-list__list-item"},[t._t("default",[l("div",{staticClass:"flex"},[l("nuxt-link",{staticClass:"category-list__item",attrs:{to:e.link}},[t._v(t._s(e.title))])],1)],{item:e})],2)}))],2),t._v(" "),l("div",{staticClass:"category-list__link category-list__link--footer text-link mt-16",on:{click:function(e){t.showRest=!t.showRest}}},[t._v(t._s(t.showRest?"Скрыть":"Показать еще"))])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlockWrap:l(31).default})},300:function(t,e,l){"use strict";l.r(e);l(15);var n={name:"AppPagination",props:{value:{type:[String,Number],default:1},pages:{type:[String,Number],default:5}},computed:{showNext:function(){return this.value!==this.pages},showPrevious:function(){return this.value>1}},methods:{input:function(t){this.$emit("input",t)}}},r=l(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"pagination"},[t.showPrevious?l("app-button",{staticClass:"pagination__button pagination__button--previous",on:{click:function(e){return t.input(t.value-1)}}},[t._v("\n    Назад\n  ")]):t._e(),t._v(" "),t._l(t.pages,(function(e){return l("app-button",{key:e,staticClass:"pagination__item",class:{active:t.value===e},attrs:{width:"40",height:"40",radius:"100"},on:{click:function(l){return t.input(e)}}},[t._v("\n    "+t._s(e)+"\n  ")])})),t._v(" "),t.showNext?l("app-button",{staticClass:"pagination__button pagination__button--next",attrs:{height:"40"},on:{click:function(e){return t.input(t.value+1)}}},[t._v("\n    Далее\n  ")]):t._e()],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppButton:l(30).default})},305:function(t,e,l){"use strict";l.r(e);var n={name:"DoubleRange"},r=l(2),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"range range--double"},[this._m(0),this._v(" "),e("block-wrap",{staticClass:"range__output-wrap",attrs:{count:"2","offset-x":"20"}},[e("div",{staticClass:"range__output"},[e("div",{staticClass:"range__output-title"},[this._v("от")]),this._v("\n      394 020\n    ")]),this._v(" "),e("div",{staticClass:"range__output"},[e("div",{staticClass:"range__output-title"},[this._v("до")]),this._v("\n      12 942 010\n    ")])])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"range__track"},[e("div",{staticClass:"range__dot",staticStyle:{left:"30%"}}),this._v(" "),e("div",{staticClass:"range__dot",staticStyle:{left:"75%"}}),this._v(" "),e("div",{staticClass:"range__filler",staticStyle:{left:"30%",width:"calc(75% - 30%)"}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BlockWrap:l(31).default})},307:function(t,e,l){"use strict";l.r(e);var n={components:{ButtonControl:l(80).default},props:{val:{type:[Array,String,Boolean],default:""},value:{type:[Array,String,Boolean],default:""},title:{type:String},subtitle:{type:String}},methods:{onInput:function(t){this.$emit("input",t)}}},r=l(2),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("button-control",{attrs:{value:t.value,val:t.val,"mod-style":"outline"},on:{input:t.onInput},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.checked;return[l("span",{class:{"fw-500":n,"color-second":n}},[t._v(t._s(t.title))]),t._v(" "),l("span",{staticClass:"color-gray"},[t._v(t._s(t.subtitle))])]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ButtonControl:l(80).default})},337:function(t,e,l){"use strict";l.r(e);l(76),l(21),l(22),l(11),l(57);var n=l(32),r=l(280),o=l(31),c=l(277),d=l(300),_=l(270),v=l(271),f=l(42),m=l(105),y=l(289),h=l(266),C=l(45),k=l(305),w=l(77),x=l(80);function S(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}var P={components:{CheckButton:l(307).default,ButtonControl:x.default,ProductItem:w.default,DoubleRange:k.default,BaseCheckbox:C.default,SimpleList:h.default,CategoryList:y.default,VText:m.default,ProductsSlider:v.default,ProductsBlock:_.default,AppPagination:d.default,CategoryProduct:c.default,BlockWrap:o.default,Breadcrumbs:r.default},data:function(){return{model:{sortType:"popular",viewType:"list",brand:"apple",model:"iphone11",color:"white",country:"china",currentPage:2},breadcrumbs:[{title:"Электроника",link:"/"},{title:"Смартфоны и планшеты",link:"/"}],productsList:["iPhone 11 Pro","iPhone 11","iPhone XS Max","iPhone XR","iPhone X","iPhone 8","iPhone 7","iPhone SE 2020"],sortTypes:[{title:"по популярности",value:"popular"},{title:"по новизне",value:"new"},{title:"по цене",value:"price"},{title:"по рейтингу",value:"rating"}],viewTypes:[{icon:"menu-cheese",value:"list"},{icon:"menu-grid-o",value:"cards"}],selectedFilters:[{title:"Бренд",value:"Apple"},{title:"Модель",value:"iPhone 11"},{title:"Цвет",value:"Белый"},{title:"Страна",value:"Китай"}],categoriesList:[{type:"list",selected:[],title:"Бренды",list:[{title:"Apple",value:"apple"},{title:"Samsung",value:"samsung"},{title:"Xiaomi",value:"xiaomi"},{title:"Huawei",value:"huawei"},{title:"LG",value:"lg"},{title:"Apple",value:"apple1"},{title:"Samsung",value:"samsung1"},{title:"Xiaomi",value:"xiaomi1"},{title:"Huawei",value:"huawei1"},{title:"LG",value:"lg1"}]},{type:"list",selected:[],title:"Модель",list:[{title:"Apple",value:"apple"},{title:"Samsung",value:"samsung"},{title:"Xiaomi",value:"xiaomi"},{title:"Huawei",value:"huawei"},{title:"LG",value:"lg"},{title:"Apple",value:"apple1"},{title:"Samsung",value:"samsung1"},{title:"Xiaomi",value:"xiaomi1"},{title:"Huawei",value:"huawei1"},{title:"LG",value:"lg1"}]},{type:"range",title:"Цена"},{type:"range",title:"Оперативная память"},{type:"range",title:"Встроенная память"},{type:"cards",selected:[],title:"Размер",list:[{title:"XS",value:"4324"},{title:"S",value:"4532"},{title:"M",value:"1234"},{title:"L",value:"352"},{title:"XL",value:"123"},{title:"2XL",value:"234"},{title:"3XL",value:"52"},{title:"48",value:"53"},{title:"50",value:"0"},{title:"52",value:"0"},{title:"54",value:"0"}]},{type:"list",selected:[],title:"Количество камер",list:[{title:"Apple",value:"apple"},{title:"Samsung",value:"samsung"},{title:"Xiaomi",value:"xiaomi"},{title:"Huawei",value:"huawei"},{title:"LG",value:"lg"},{title:"Apple",value:"apple1"},{title:"Samsung",value:"samsung1"},{title:"Xiaomi",value:"xiaomi1"},{title:"Huawei",value:"huawei1"},{title:"LG",value:"lg1"}]},{type:"list",selected:[],title:"Количество ядер",list:[{title:"Apple",value:"apple"},{title:"Samsung",value:"samsung"},{title:"Xiaomi",value:"xiaomi"},{title:"Huawei",value:"huawei"},{title:"LG",value:"lg"},{title:"Apple",value:"apple1"},{title:"Samsung",value:"samsung1"},{title:"Xiaomi",value:"xiaomi1"},{title:"Huawei",value:"huawei1"},{title:"LG",value:"lg1"}]},{type:"list",selected:[],title:"Операционная система",list:[{title:"Apple",value:"apple"},{title:"Samsung",value:"samsung"},{title:"Xiaomi",value:"xiaomi"},{title:"Huawei",value:"huawei"},{title:"LG",value:"lg"},{title:"Apple",value:"apple1"},{title:"Samsung",value:"samsung1"},{title:"Xiaomi",value:"xiaomi1"},{title:"Huawei",value:"huawei1"},{title:"LG",value:"lg1"}]},{type:"color",selected:[],title:"Цвет",list:[{title:"Черный",value:"black"},{title:"Белый",value:"white"},{title:"Серый",value:"gray"},{title:"Красный",value:"red"},{title:"Синий",value:"blue"}]},{type:"list",selected:[],title:"Матрица",list:[{title:"Apple",value:"apple"},{title:"Samsung",value:"samsung"},{title:"Xiaomi",value:"xiaomi"},{title:"Huawei",value:"huawei"},{title:"LG",value:"lg"},{title:"Apple",value:"apple1"},{title:"Samsung",value:"samsung1"},{title:"Xiaomi",value:"xiaomi1"},{title:"Huawei",value:"huawei1"},{title:"LG",value:"lg1"}]}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.c)("products",["products"]))},B=l(2),component=Object(B.a)(P,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("main",{staticClass:"innerpage container"},[l("breadcrumbs",{staticClass:"mb-20",attrs:{items:t.breadcrumbs}}),t._v(" "),l("div",{staticClass:"mb-40"},[t._m(0),t._v(" "),l("block-wrap",{attrs:{"offset-":"10","width-auto":""}},t._l(t.productsList,(function(button){return l("app-button",{key:button,attrs:{radius:"50","mod-style":"gray-light",sides:"10",height:"34"}},[l("span",{staticClass:"fw-400"},[t._v(t._s(button))])])})),1)],1),t._v(" "),l("div",{staticClass:"category-section"},[l("div",{staticClass:"category-section__aside"},[l("div",{staticClass:"mb-40"},[l("v-text",{staticClass:"mb-24",attrs:{weight:"600"}},[t._v("Категория")]),t._v(" "),l("simple-list",[l("v-text",{staticClass:"flex flex-a-c text-link text-link--default mb-20",attrs:{font:"14",weight:"500"}},[l("dynamic-icon",{staticClass:"text-link__icon",attrs:{icon:"chevron-left",width:"10",height:"10"}}),t._v("\n            Электроника\n          ")],1),t._v(" "),l("v-text",{staticClass:"flex flex-a-c text-link text-link--default mb-20",attrs:{font:"14",weight:"500"}},[l("dynamic-icon",{staticClass:"text-link__icon",attrs:{icon:"chevron-left",width:"10",height:"10"}}),t._v("\n            Смартфоны и планшеты\n          ")],1)],1)],1),t._v(" "),t._l(t.categoriesList,(function(e){return l("div",{key:e.title,staticClass:"mb-40"},["list"===e.type?l("category-list",{attrs:{list:e.list,"max-count":"5",title:e.title,"mod-style":"title-medium","clear-button":!!e.selected.length},on:{clear:function(t){e.selected=[]}},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.item;return[l("base-checkbox",{staticClass:"mb-14",attrs:{val:r.value,radius:"2",size:"18",offset:"10"},model:{value:e.selected,callback:function(l){t.$set(e,"selected",l)},expression:"category.selected"}},[l("v-text",{attrs:{font:"14"}},[t._v("\n              "+t._s(r.title)+"\n            ")])],1)]}}],null,!0)}):"range"===e.type?[l("v-text",{staticClass:"mb-24",attrs:{weight:"600"}},[t._v(t._s(e.title))]),t._v(" "),l("double-range")]:"cards"===e.type?[l("category-list",{attrs:{list:e.list,"max-count":"9",title:e.title,"mod-style":"title-medium",type:"cards","clear-button":!!e.selected.length},on:{clear:function(t){e.selected=[]}},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.item;return[l("check-button",{attrs:{val:r.value,title:r.title,subtitle:r.value},model:{value:e.selected,callback:function(l){t.$set(e,"selected",l)},expression:"category.selected"}})]}}],null,!0)})]:t._e(),t._v(" "),"color"===e.type?l("category-list",{attrs:{list:e.list,"max-count":"5",title:e.title,"mod-style":"title-medium","clear-button":!!e.selected.length},on:{clear:function(t){e.selected=[]}},scopedSlots:t._u([{key:"default",fn:function(n){var r=n.item;return[l("base-checkbox",{staticClass:"color-checkbox mb-14",class:r.value,attrs:{val:r.value,radius:"2",size:"18",offset:"10"},model:{value:e.selected,callback:function(l){t.$set(e,"selected",l)},expression:"category.selected"}},[l("div",{staticClass:"color-checkbox__wrap"},[l("v-text",{attrs:{font:"14"}},[t._v("\n                "+t._s(r.title)+"\n              ")])],1)])]}}],null,!0)}):t._e()],2)})),t._v(" "),l("app-button",{staticClass:"fw-600",attrs:{border:"gray",shadow:"small",sides:"28","text-color":"gray"}},[t._v("Все фильтры")])],2),t._v(" "),l("section",{staticClass:"category-section__content"},[l("div",{staticClass:"filter-header mb-40"},[l("div",{staticClass:"filter-header__item"},[l("div",{staticClass:"filter-product mb-20"},[l("div",{staticClass:"filter-product__title"},[t._v("Сортировка:")]),t._v(" "),l("block-wrap",{attrs:{"width-auto":"","offset-x":"20"}},t._l(t.sortTypes,(function(e){return l("div",{key:e.value,staticClass:"filter-product__link",class:{active:t.model.sortType===e.value},on:{click:function(l){t.model.sortType=e.value}}},[t._v("\n                "+t._s(e.title)+"\n              ")])})),0)],1),t._v(" "),l("div",{staticClass:"filter-product"},[l("block-wrap",{staticClass:"filter-product__title",attrs:{"width-auto":"","offset-x":"10"}},[t._l(t.selectedFilters,(function(filter){return l("app-button",{key:filter.value,staticClass:"fw-400 filter-button",attrs:{border:"gray",radius:"50",sides:"10",height:"34"}},[l("span",{staticClass:"filter-button__title"},[t._v(t._s(filter.title+": "))]),t._v(" "),l("span",{staticClass:"fw-500"},[t._v(t._s(filter.value))]),t._v(" "),l("dynamic-icon",{staticClass:"filter-button__icon",attrs:{size:"10",icon:"close"}})],1)})),t._v(" "),l("div",{staticClass:"filter-product__link text-link"},[t._v("Очистить фильтр")])],2)],1)]),t._v(" "),l("div",{staticClass:"filter-header__item filter-header__view filter-product filter-product--light filter-product--inverted"},[l("div",{staticClass:"filter-product__title"},[t._v("Вид:")]),t._v(" "),l("block-wrap",{staticClass:"filter-product__icons",attrs:{"width-auto":"","offset-x":"15"}},t._l(t.viewTypes,(function(view){return l("div",{key:view.value,staticClass:"filter-product__link",class:{active:t.model.viewType===view.value},on:{click:function(e){t.model.viewType=view.value}}},[l("dynamic-icon",{staticClass:"filter-product__icon",attrs:{icon:view.icon}})],1)})),0)],1)]),t._v(" "),"list"===t.model.viewType?l("div",{staticClass:"products-list mb-40"},t._l(t.products.electronic,(function(t,e){return l("div",{key:e,staticClass:"products-list__item"},[l("category-product",{attrs:{"mod-style":"seller",data:t}})],1)})),0):l("div",{staticClass:"products-list products-list--cards mb-40"},t._l(t.products.electronic,(function(t,e){return l("div",{key:e,staticClass:"products-list__item"},[l("product-item",{attrs:{data:t,settings:"","cart-button":"","mod-style":"category"}})],1)})),0),t._v(" "),l("app-pagination",{staticClass:"mb-60",model:{value:t.model.currentPage,callback:function(e){t.$set(t.model,"currentPage",e)},expression:"model.currentPage"}}),t._v(" "),l("products-block",{staticClass:"mb-60",attrs:{title:"Рекомендуем вам",category:"Умные часы и браслеты",link:t.$localePath("/")}},[l("products-slider",{attrs:{products:t.products.electronic}})],1)],1)])],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-heading mb-20"},[this._v("\n      Смартфоны\n      "),e("span",{staticClass:"page-heading__subtitle"},[this._v("12 392 товаров")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumbs:l(280).default,AppButton:l(30).default,BlockWrap:l(31).default,VText:l(105).default,DynamicIcon:l(23).default,SimpleList:l(266).default,BaseCheckbox:l(45).default,CategoryList:l(289).default,DoubleRange:l(305).default,CheckButton:l(307).default,CategoryProduct:l(277).default,ProductItem:l(77).default,AppPagination:l(300).default,ProductsSlider:l(271).default,ProductsBlock:l(270).default})}}]);
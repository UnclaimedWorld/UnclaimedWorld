(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{270:function(t,e,r){"use strict";r.r(e);var l={name:"ProductsBlock",components:{BannerItem:r(78).default},props:{title:{type:String},category:{type:String},link:{type:String},banner:{type:String},bannerUrl:{type:String}}},o=r(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"products-block",class:{"products-block--banner":t.banner}},[r("div",{staticClass:"products-block__header"},[r("div",{staticClass:"products-block__wrap"},[r("div",{staticClass:"products-block__title"},[t._v(t._s(t.title))]),t._v(" "),t.category?r("div",{staticClass:"products-block__subtitle"},[t._v("Товары из категории "),r("span",{staticClass:"color-second"},[t._v(t._s(t.category))])]):t._e()]),t._v(" "),t.link?r("div",{staticClass:"products-block__link text-link"},[t._v("Посмотреть все")]):t._e()]),t._v(" "),r("div",{staticClass:"products-block__body"},[t._t("default"),t._v(" "),t.banner?r("banner-item",{staticClass:"products-block__banner",attrs:{src:t.banner,link:t.bannerUrl}}):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BannerItem:r(78).default})},271:function(t,e,r){"use strict";r.r(e);var l={name:"ProductsSlider",components:{ProductItem:r(77).default},props:{products:{type:Array},buttonColor:{type:String,default:"white"},buttonBorder:{type:String,default:"gray"}},data:function(){return{productsSliderOptions:{contain:!0,cellAlign:"left",pageDots:!1,prevNextButtons:!1},currentSlide:0}},methods:{previous:function(){this.$refs.slider.previous()},next:function(){this.$refs.slider.next()},setCurrentSlide:function(t){this.currentSlide=t}},mounted:function(){var t=this;this.$nextTick((function(){t.$refs.slider&&(t.$refs.slider.on("change",t.setCurrentSlide),setTimeout((function(){t.$refs.slider.resize()}),200))}))},beforeDestroy:function(){var t=this;this.$nextTick((function(){t.$refs.slider&&t.$refs.slider.off("change",t.setCurrentSlide)}))}},o=r(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"products-slider"},[r("client-only",[r("flickity",{ref:"slider",staticClass:"products-slider__wrap",attrs:{options:t.productsSliderOptions},on:{change:t.setCurrentSlide}},t._l(t.products,(function(t){return r("product-item",{key:t.id,staticClass:"products-slider__item carousel-cell",attrs:{data:t,rating:""}})})),1),t._v(" "),t.currentSlide>0?r("app-button",{staticClass:"products-slider__button previous",attrs:{"mod-style":t.buttonColor,radius:"100",width:"50",height:"50",border:t.buttonBorder,"text-color":"blue"},on:{click:t.previous}},[r("dynamic-icon",{attrs:{icon:"chevron-left"}})],1):t._e(),t._v(" "),t.currentSlide<t.products.length?r("app-button",{staticClass:"products-slider__button next",attrs:{"mod-style":t.buttonColor,radius:"100",width:"50",height:"50",border:t.buttonBorder,"text-color":"blue"},on:{click:t.next}},[r("dynamic-icon",{attrs:{icon:"chevron-right"}})],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:r(77).default,DynamicIcon:r(23).default,AppButton:r(30).default})},273:function(t,e,r){"use strict";r.r(e);var l={name:"LogoItem",props:{image:{type:String,required:!0},link:{type:String,required:!0},modStyle:{type:String,default:""}}},o=r(2),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"logo-item",class:this.modStyle,attrs:{to:this.link}},[e("div",{staticClass:"logo-item__wrap"},[e("img",{attrs:{src:this.image,alt:""}})])])}),[],!1,null,null,null);e.default=component.exports},276:function(t,e,r){"use strict";r.r(e);var l={name:"IndexCategory",props:{data:{type:Object},modStyle:{type:String,default:""}}},o=r(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index-category",class:t.modStyle},[r("div",{staticClass:"index-category__image"},[r("img",{attrs:{src:t.data.image,alt:""}})]),t._v(" "),r("div",{staticClass:"index-category__content"},[r("div",{staticClass:"index-category__title"},[t._v(t._s(t.data.title))]),t._v(" "),t.data.subtitle?r("div",{staticClass:"index-category__subtitle"},[t._v(t._s(t.data.subtitle))]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},279:function(t,e,r){"use strict";r.r(e);r(76),r(21),r(22),r(11),r(57),r(44),r(43);var l=r(32);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function n(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={name:"SimpleSlider",props:{products:{type:Array},options:{type:Object}},data:function(){return{productsSliderOptions:this.options?n({},this.options):{contain:!0,cellAlign:"left",pageDots:!1,prevNextButtons:!1},currentSlide:0}},methods:{previous:function(){this.$refs.slider.previous()},next:function(){this.$refs.slider.next()},setCurrentSlide:function(t){this.currentSlide=t}},mounted:function(){var t=this;this.$nextTick((function(){if(t.$refs.slider){t.$refs.slider.on("change",t.setCurrentSlide);try{Array.from(t.$refs.slider.$el.querySelector(".flickity-slider").children).forEach((function(t){return t.classList.add("carousel-cell")})),t.$refs.slider.resize()}catch(t){console.log(t)}}}))},beforeDestroy:function(){var t=this;this.$nextTick((function(){t.$refs.slider&&t.$refs.slider.off("change",t.setCurrentSlide)}))}},d=r(2),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"products-slider"},[r("client-only",[r("flickity",{ref:"slider",staticClass:"products-slider__wrap",attrs:{options:t.productsSliderOptions},on:{change:t.setCurrentSlide}},[t._t("default")],2)],1),t._v(" "),t.currentSlide>0?r("app-button",{staticClass:"products-slider__button previous",attrs:{"mod-style":"gray-light",radius:"100",width:"50",height:"50","text-color":"blue"},on:{click:t.previous}},[r("dynamic-icon",{attrs:{icon:"chevron-left"}})],1):t._e(),t._v(" "),t.currentSlide<t.products.length?r("app-button",{staticClass:"products-slider__button next",attrs:{"mod-style":"gray-light",radius:"100",width:"50",height:"50","text-color":"blue"},on:{click:t.next}},[r("dynamic-icon",{attrs:{icon:"chevron-right"}})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DynamicIcon:r(23).default,AppButton:r(30).default})},280:function(t,e,r){"use strict";r.r(e);var l={name:"Breadcrumbs",props:{items:{type:Array}}},o=r(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"breadcrumbs"},t._l(t.items,(function(e){return r("nuxt-link",{key:e.title,staticClass:"breadcrumbs__item",attrs:{to:t.$localePath(e.link)}},[t._v(t._s(e.title))])})),1)}),[],!1,null,null,null);e.default=component.exports},285:function(t,e,r){"use strict";r.r(e);var l={name:"StyleItem",components:{LogoItem:r(273).default},props:{modStyle:{type:String,default:""},data:{type:Object,required:!0},buttonTitle:{type:String},showDescription:{type:Boolean},showLogos:{type:Boolean},showButton:{type:Boolean}},data:function(){return{logosCount:3}}},o=r(2),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"style-item",class:t.modStyle},[r("img",{staticClass:"style-item__image",attrs:{src:t.data.image,alt:""}}),t._v(" "),r("div",{staticClass:"style-item__content"},[r("div",{staticClass:"style-item__title"},[t._v(t._s(t.data.title))]),t._v(" "),t.showDescription?r("div",{staticClass:"style-item__description"},[t._v(t._s(t.data.description))]):t._e(),t._v(" "),t.showLogos?r("block-wrap",{staticClass:"style-item__logos-wrap",attrs:{"offset-x":"20","offset-y":"0",count:t.logosCount}},t._l(t.data.logos,(function(t){return r("logo-item",{attrs:{href:t.image,link:t.link,image:t.image,"mod-style":"small"}})})),1):t._e(),t._v(" "),t.data.linkTitle?r("div",{staticClass:"style-item__link text-link"},[t._v(t._s(t.data.linkTitle))]):t._e(),t._v(" "),t.buttonTitle?r("app-button",{staticClass:"style-item__button",attrs:{modStyle:"second","text-color":"white",sides:"15"}},[t._v(t._s(t.buttonTitle))]):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{LogoItem:r(273).default,BlockWrap:r(31).default,AppButton:r(30).default})},322:function(t,e,r){"use strict";r.r(e);r(76),r(21),r(22),r(11),r(57);var l=r(32),o=r(78),n=r(285),c=r(270),d=r(271),m=r(273),f=r(279),_=r(42),y=r(276);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var v={components:{Breadcrumbs:r(280).default,IndexCategory:y.default,SimpleSlider:f.default,LogoItem:m.default,ProductsSlider:d.default,ProductsBlock:c.default,StyleItem:n.default,BannerItem:o.default},data:function(){return{breadcrumbs:[{title:"Одежда и обувь",link:"/clothes"}],categories:[{title:"Верхняя одежда",image:"/img/index-categories-cards/clothes-5.jpg",id:1},{title:"Аксессуары",image:"/img/index-categories-cards/clothes-6.jpg",id:2},{title:"Обувь",image:"/img/index-categories-cards/clothes-7.jpg",id:3},{title:"Шорты",image:"/img/index-categories-cards/clothes-8.jpg",id:4},{title:"Нижнее белье",image:"/img/index-categories-cards/clothes-5.jpg",id:5},{title:"Головные уборы",image:"/img/index-categories-cards/clothes-6.jpg",id:6}],menStyle:{image:"/img/style/style-men.jpg",title:"Мужской стиль",description:"Мы вынуждены отталкиваться от того, что курс на социально-ориентированный национальный проект требует анализа соответствующих условий активизации.",logos:[{image:"/img/brand-logos/lc_waikiki.png",link:this.$localePath("/")},{image:"/img/brand-logos/terrapro-1.png",link:this.$localePath("/")},{image:"/img/brand-logos/rayban-1.png",link:this.$localePath("/")},{image:"/img/brand-logos/xiaomi-1.png",link:this.$localePath("/")},{image:"/img/brand-logos/nike-1.png",link:this.$localePath("/")},{image:"/img/brand-logos/lego-1.png",link:this.$localePath("/")}]},womenStyle:{image:"/img/style/style-bags.jpg",title:"Сумки",description:"Господа, высококачественный прототип будущего проекта и реализации стандартных подходов.",linkTitle:"Аксессуары"},childrenStyle:{image:"/img/style/style-boots.jpg",title:"Пляжный\nсезон",linkTitle:"Обувь"},logos:[{image:"/img/brand-logos/adidas.png"},{image:"/img/brand-logos/apple.png"},{image:"/img/brand-logos/artel.png"},{image:"/img/brand-logos/huawei.png"},{image:"/img/brand-logos/just.png"},{image:"/img/brand-logos/lc_waikiki.png"},{image:"/img/brand-logos/lego.png"},{image:"/img/brand-logos/lego-1.png"},{image:"/img/brand-logos/lg.png"},{image:"/img/brand-logos/nike.png"}],indexCategories:[{title:"Шорты",subtitle:"Мужчинам",image:"/img/index-categories-cards/clothes-5.jpg",id:1},{title:"Нижнее белье",subtitle:"Мужчинам",image:"/img/index-categories-cards/clothes-6.jpg",id:2},{title:"Футболки",subtitle:"Верхняя одежда",image:"/img/index-categories-cards/clothes-7.jpg",id:3},{title:"Часы",subtitle:"Аксессуары",image:"/img/index-categories-cards/clothes-8.jpg",id:4}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(_.c)("products",["products"]))},k=r(2),component=Object(k.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"innerpage container"},[r("breadcrumbs",{staticClass:"mb-20",attrs:{items:t.breadcrumbs}}),t._v(" "),t._m(0),t._v(" "),r("banner-item",{staticClass:"mb-60",attrs:{src:"/img/banners/category-1.jpg",link:"/"}}),t._v(" "),r("block-wrap",{staticClass:"mb-50",attrs:{"offset-x":"30",count:"6"}},t._l(t.categories,(function(t){return r("index-category",{key:t.id,attrs:{"mod-style":"borderless",data:t}})})),1),t._v(" "),r("div",{staticClass:"style-block mb-60"},[r("style-item",{staticClass:"style-block__col",attrs:{data:t.menStyle,"mod-style":"large","button-title":"Подобрать стиль","show-description":"","show-logos":""}}),t._v(" "),r("div",{staticClass:"style-block__col"},[r("style-item",{staticClass:"style-block__item",attrs:{data:t.womenStyle,"mod-style":"image-right short","show-description":""}}),t._v(" "),r("style-item",{staticClass:"style-block__item",attrs:{data:t.childrenStyle,"mod-style":"image-right short","show-description":""}})],1)],1),t._v(" "),r("simple-slider",{staticClass:"logos-slider mb-60",attrs:{products:t.logos}},t._l(t.logos,(function(e){return r("logo-item",{key:e.image,attrs:{link:t.$localePath("/"),image:e.image}})})),1),t._v(" "),r("products-block",{staticClass:"mb-60",attrs:{title:"Идем на пляж",link:t.$localePath("/")}},[r("products-slider",{attrs:{products:t.products.electronic,"button-border":"none","button-color":"gray-light"}})],1),t._v(" "),r("banner-item",{staticClass:"mb-60",attrs:{src:"/img/banners/category-1.jpg",link:"/"}}),t._v(" "),r("block-wrap",{staticClass:"mb-60",attrs:{"offset-x":"40",count:"4"}},t._l(t.indexCategories,(function(t){return r("index-category",{key:t.id,attrs:{data:t,"mod-style":"image-long"}})})),1),t._v(" "),r("products-block",{staticClass:"mb-60",attrs:{title:"Идем на пляж",link:t.$localePath("/")}},[r("products-slider",{attrs:{products:t.products.electronic,"button-border":"none","button-color":"gray-light"}})],1)],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"page-heading mb-40"},[this._v("\n    Мужчинам\n    "),e("span",{staticClass:"page-heading__subtitle"},[this._v("12 392 товаров")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumbs:r(280).default,BannerItem:r(78).default,IndexCategory:r(276).default,BlockWrap:r(31).default,StyleItem:r(285).default,LogoItem:r(273).default,SimpleSlider:r(279).default,ProductsSlider:r(271).default,ProductsBlock:r(270).default})}}]);
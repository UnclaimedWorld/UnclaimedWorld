(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{270:function(t,e,n){"use strict";n.r(e);var r={name:"ProductsBlock",components:{BannerItem:n(78).default},props:{title:{type:String},category:{type:String},link:{type:String},banner:{type:String},bannerUrl:{type:String}}},l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products-block",class:{"products-block--banner":t.banner}},[n("div",{staticClass:"products-block__header"},[n("div",{staticClass:"products-block__wrap"},[n("div",{staticClass:"products-block__title"},[t._v(t._s(t.title))]),t._v(" "),t.category?n("div",{staticClass:"products-block__subtitle"},[t._v("Товары из категории "),n("span",{staticClass:"color-second"},[t._v(t._s(t.category))])]):t._e()]),t._v(" "),t.link?n("div",{staticClass:"products-block__link text-link"},[t._v("Посмотреть все")]):t._e()]),t._v(" "),n("div",{staticClass:"products-block__body"},[t._t("default"),t._v(" "),t.banner?n("banner-item",{staticClass:"products-block__banner",attrs:{src:t.banner,link:t.bannerUrl}}):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BannerItem:n(78).default})},271:function(t,e,n){"use strict";n.r(e);var r={name:"ProductsSlider",components:{ProductItem:n(77).default},props:{products:{type:Array},buttonColor:{type:String,default:"white"},buttonBorder:{type:String,default:"gray"}},data:function(){return{productsSliderOptions:{contain:!0,cellAlign:"left",pageDots:!1,prevNextButtons:!1},currentSlide:0}},methods:{previous:function(){this.$refs.slider.previous()},next:function(){this.$refs.slider.next()},setCurrentSlide:function(t){this.currentSlide=t}},mounted:function(){var t=this;this.$nextTick((function(){t.$refs.slider&&(t.$refs.slider.on("change",t.setCurrentSlide),setTimeout((function(){t.$refs.slider.resize()}),200))}))},beforeDestroy:function(){var t=this;this.$nextTick((function(){t.$refs.slider&&t.$refs.slider.off("change",t.setCurrentSlide)}))}},l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products-slider"},[n("client-only",[n("flickity",{ref:"slider",staticClass:"products-slider__wrap",attrs:{options:t.productsSliderOptions},on:{change:t.setCurrentSlide}},t._l(t.products,(function(t){return n("product-item",{key:t.id,staticClass:"products-slider__item carousel-cell",attrs:{data:t,rating:""}})})),1),t._v(" "),t.currentSlide>0?n("app-button",{staticClass:"products-slider__button previous",attrs:{"mod-style":t.buttonColor,radius:"100",width:"50",height:"50",border:t.buttonBorder,"text-color":"blue"},on:{click:t.previous}},[n("dynamic-icon",{attrs:{icon:"chevron-left"}})],1):t._e(),t._v(" "),t.currentSlide<t.products.length?n("app-button",{staticClass:"products-slider__button next",attrs:{"mod-style":t.buttonColor,radius:"100",width:"50",height:"50",border:t.buttonBorder,"text-color":"blue"},on:{click:t.next}},[n("dynamic-icon",{attrs:{icon:"chevron-right"}})],1):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:n(77).default,DynamicIcon:n(23).default,AppButton:n(30).default})},273:function(t,e,n){"use strict";n.r(e);var r={name:"LogoItem",props:{image:{type:String,required:!0},link:{type:String,required:!0},modStyle:{type:String,default:""}}},l=n(2),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"logo-item",class:this.modStyle,attrs:{to:this.link}},[e("div",{staticClass:"logo-item__wrap"},[e("img",{attrs:{src:this.image,alt:""}})])])}),[],!1,null,null,null);e.default=component.exports},276:function(t,e,n){"use strict";n.r(e);var r={name:"IndexCategory",props:{data:{type:Object},modStyle:{type:String,default:""}}},l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-category",class:t.modStyle},[n("div",{staticClass:"index-category__image"},[n("img",{attrs:{src:t.data.image,alt:""}})]),t._v(" "),n("div",{staticClass:"index-category__content"},[n("div",{staticClass:"index-category__title"},[t._v(t._s(t.data.title))]),t._v(" "),t.data.subtitle?n("div",{staticClass:"index-category__subtitle"},[t._v(t._s(t.data.subtitle))]):t._e()])])}),[],!1,null,null,null);e.default=component.exports},279:function(t,e,n){"use strict";n.r(e);n(76),n(21),n(22),n(11),n(57),n(44),n(43);var r=n(32);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={name:"SimpleSlider",props:{products:{type:Array},options:{type:Object}},data:function(){return{productsSliderOptions:this.options?o({},this.options):{contain:!0,cellAlign:"left",pageDots:!1,prevNextButtons:!1},currentSlide:0}},methods:{previous:function(){this.$refs.slider.previous()},next:function(){this.$refs.slider.next()},setCurrentSlide:function(t){this.currentSlide=t}},mounted:function(){var t=this;this.$nextTick((function(){if(t.$refs.slider){t.$refs.slider.on("change",t.setCurrentSlide);try{Array.from(t.$refs.slider.$el.querySelector(".flickity-slider").children).forEach((function(t){return t.classList.add("carousel-cell")})),t.$refs.slider.resize()}catch(t){console.log(t)}}}))},beforeDestroy:function(){var t=this;this.$nextTick((function(){t.$refs.slider&&t.$refs.slider.off("change",t.setCurrentSlide)}))}},d=n(2),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products-slider"},[n("client-only",[n("flickity",{ref:"slider",staticClass:"products-slider__wrap",attrs:{options:t.productsSliderOptions},on:{change:t.setCurrentSlide}},[t._t("default")],2)],1),t._v(" "),t.currentSlide>0?n("app-button",{staticClass:"products-slider__button previous",attrs:{"mod-style":"gray-light",radius:"100",width:"50",height:"50","text-color":"blue"},on:{click:t.previous}},[n("dynamic-icon",{attrs:{icon:"chevron-left"}})],1):t._e(),t._v(" "),t.currentSlide<t.products.length?n("app-button",{staticClass:"products-slider__button next",attrs:{"mod-style":"gray-light",radius:"100",width:"50",height:"50","text-color":"blue"},on:{click:t.next}},[n("dynamic-icon",{attrs:{icon:"chevron-right"}})],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DynamicIcon:n(23).default,AppButton:n(30).default})},281:function(t,e,n){"use strict";n.r(e);var r=n(31),l={name:"ProductCards",components:{ProductItem:n(77).default,BlockWrap:r.default},props:{products:{type:Array,required:!0}},computed:{otherProducts:function(){for(var t=[],i=1;i<this.products.length;i++)t.push(this.products[i]);return t}}},o=n(2),component=Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"product-cards"},[e("product-item",{staticClass:"product-cards__item-large",attrs:{"mod-style":"large",data:this.products[0],description:"",rating:""}}),this._v(" "),e("block-wrap",{staticClass:"product-cards__items-other",attrs:{"offset-x":"20",count:"4"}},this._l(this.otherProducts,(function(t){return e("product-item",{key:t.id,staticClass:"product-cards__card",attrs:{"mod-style":"small",data:t,"no-rating":""}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:n(77).default,BlockWrap:n(31).default})},282:function(t,e,n){"use strict";n.r(e);var r={name:"StartBanner",components:{BannerItem:n(78).default},props:{items:{type:Array}},data:function(){return{flickityOptions:{contain:!0,cellAlign:"left",prevNextButtons:!1}}}},l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"start-banner"},[n("flickity",{ref:"slider",attrs:{options:t.flickityOptions}},t._l(t.items,(function(e,r){return n("banner-item",{key:r,staticClass:"start-banner__slide carousel-cell",attrs:{link:t.$localePath("/"),src:e.src}})})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BannerItem:n(78).default})},283:function(t,e,n){"use strict";n.r(e);var r={name:"CategoryButton",props:{icon:{type:String},link:{type:String}}},l=n(2),component=Object(l.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"category-button",attrs:{to:this.link}},[e("div",{staticClass:"category-button__icon-wrap"},[e("dynamic-icon",{staticClass:"category-button__icon-background",attrs:{icon:"category-button-background"}}),this._v(" "),e("img",{staticClass:"category-button__icon",attrs:{src:this.icon,alt:""}})],1),this._v(" "),e("div",{staticClass:"category-button__title"},[this._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DynamicIcon:n(23).default})},289:function(t,e,n){"use strict";n.r(e);n(15);var r={name:"CategoryList",props:{title:{type:String},list:{type:Array,default:function(){return[]}},maxCount:{type:[String,Number]},modStyle:{type:String},clearButton:{type:Boolean},type:{type:String}},data:function(){return{showRest:!1}},computed:{slicedList:function(){return this.list.slice(0,this.showRest?this.list.length:this.maxCount)}}},l=n(2),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"category-list",class:t.modStyle},[n("div",{staticClass:"category-list__title"},[t._v("\n    "+t._s(t.title)+"\n    "),t.clearButton?n("div",{staticClass:"category-list__link category-list__link--header text-link",on:{click:function(e){return t.$emit("clear")}}},[t._v("Очистить")]):t._e()]),t._v(" "),n("div",{staticClass:"category-list__body"},["cards"===t.type?n("block-wrap",{staticClass:"category-list__cards",attrs:{"offset-x":"15","offset-y":"15",count:"3"}},t._l(t.slicedList,(function(e,r){return n("div",{key:r},[t._t("default",null,{item:e})],2)})),0):t._l(t.slicedList,(function(e,r){return n("div",{key:r,staticClass:"category-list__list-item"},[t._t("default",[n("div",{staticClass:"flex"},[n("nuxt-link",{staticClass:"category-list__item",attrs:{to:e.link}},[t._v(t._s(e.title))])],1)],{item:e})],2)}))],2),t._v(" "),n("div",{staticClass:"category-list__link category-list__link--footer text-link mt-16",on:{click:function(e){t.showRest=!t.showRest}}},[t._v(t._s(t.showRest?"Скрыть":"Показать еще"))])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BlockWrap:n(31).default})},319:function(t,e,n){"use strict";n.r(e);n(76),n(21),n(22),n(11),n(57);var r=n(32),l=n(282),o=n(31),c=n(276),d=n(279),f=n(273),m=n(283),_=n(270),y=n(281),h=n(42),k=n(271),v=n(78);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var x={components:{CategoryList:n(289).default,BannerItem:v.default,ProductsSlider:k.default,ProductCards:y.default,ProductsBlock:_.default,CategoryButton:m.default,LogoItem:f.default,SimpleSlider:d.default,IndexCategory:c.default,BlockWrap:o.default,StartBanner:l.default},data:function(){return{startBannerItems:[{src:"/img/start-banner/start-banner-01.jpg",to:this.$localePath("/")},{src:"/img/start-banner/start-banner-01.jpg",to:this.$localePath("/")},{src:"/img/start-banner/start-banner-01.jpg",to:this.$localePath("/")}],indexCategoriesCards:[{id:1,image:"/img/index-categories-cards/electronic-1.jpg",title:"Игровые ноутбуки"},{id:2,image:"/img/index-categories-cards/electronic-2.jpg",title:"Бытовая техника"},{id:3,image:"/img/index-categories-cards/electronic-3.jpg",title:"Наушники"}],logos:[{image:"/img/brand-logos/adidas.png"},{image:"/img/brand-logos/apple.png"},{image:"/img/brand-logos/artel.png"},{image:"/img/brand-logos/huawei.png"},{image:"/img/brand-logos/just.png"},{image:"/img/brand-logos/lc_waikiki.png"},{image:"/img/brand-logos/lego.png"},{image:"/img/brand-logos/lego-1.png"},{image:"/img/brand-logos/lg.png"},{image:"/img/brand-logos/nike.png"}],categoriesList:[{title:"Смартфоны",icon:"/img/index-categories/phones.png",link:this.$localePath("/")},{title:"Телевизоры",icon:"/img/index-categories/tv.png",link:this.$localePath("/")},{title:"Игровые приставки",icon:"/img/index-categories/playstation.png",link:this.$localePath("/")},{title:"Ноутбуки",icon:"/img/index-categories/notebook.png",link:this.$localePath("/")},{title:"Велосипеды",icon:"/img/index-categories/bicycle.png",link:this.$localePath("/")},{title:"Надувные бассейны",icon:"/img/index-categories/pool.png",link:this.$localePath("/")},{title:"Верхняя одежда",icon:"/img/index-categories/shirt.png",link:this.$localePath("/")},{title:"Напитки",icon:"/img/index-categories/drinks.png",link:this.$localePath("/")}],categoriesListOptions:{contain:!0,cellAlign:"left",pageDots:!1,prevNextButtons:!1,freeScroll:!0},otherLinks:[{title:"Смартфоны и умные часы",list:[{title:"Смартфоны",link:"/"},{title:"Умные часы и браслеты",link:"/"},{title:"Аксессуары для телефонов",link:"/"},{title:"Зарядные устройства",link:"/"},{title:"Радио телефоны",link:"/"},{title:"Внешние аккумуляторы",link:"/"},{title:"Фотоаппараты",link:"/"},{title:"Объективы для камеры",link:"/"},{title:"Видеокамеры",link:"/"},{title:"Карты памяти",link:"/"},{title:"Штативы",link:"/"},{title:"Веб-камеры",link:"/"}]},{title:"Фото и видео",list:[{title:"Фотоаппараты",link:"/"},{title:"Объективы для камеры",link:"/"},{title:"Видеокамеры",link:"/"},{title:"Карты памяти",link:"/"},{title:"Штативы",link:"/"},{title:"Веб-камеры",link:"/"},{title:"Смартфоны",link:"/"},{title:"Умные часы и браслеты",link:"/"},{title:"Аксессуары для телефонов",link:"/"},{title:"Зарядные устройства",link:"/"},{title:"Радио телефоны",link:"/"},{title:"Внешние аккумуляторы",link:"/"}]},{title:"Компьютеры и ноутбуки",list:[{title:"Компьютеры белой сборки",link:"/"},{title:"Ноутбуки",link:"/"},{title:"Комплектующие",link:"/"},{title:"Периферийные устройства",link:"/"},{title:"Принтеры",link:"/"},{title:"Веб-камеры",link:"/"},{title:"Штативы",link:"/"},{title:"Веб-камеры",link:"/"},{title:"Смартфоны",link:"/"},{title:"Умные часы и браслеты",link:"/"},{title:"Аксессуары для телефонов",link:"/"},{title:"Зарядные устройства",link:"/"},{title:"Радио телефоны",link:"/"},{title:"Внешние аккумуляторы",link:"/"}]},{title:"Бытовая техника",list:[{title:"Телевизоры",link:"/"},{title:"Аудио системы",link:"/"},{title:"Стиральные машины",link:"/"},{title:"Варочноые панели",link:"/"},{title:"Холодильники",link:"/"},{title:"Пылесосы",link:"/"},{title:"Ноутбуки",link:"/"},{title:"Комплектующие",link:"/"},{title:"Периферийные устройства",link:"/"},{title:"Принтеры",link:"/"},{title:"Веб-камеры",link:"/"},{title:"Штативы",link:"/"}]}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(h.c)("products",["products"]))},S=n(2),component=Object(S.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"innerpage container"},[t._m(0),t._v(" "),n("div",{staticClass:"category-section"},[n("div",{staticClass:"category-section__aside"},t._l(t.otherLinks,(function(t){return n("category-list",{staticClass:"mb-36",attrs:{list:t.list,title:t.title,"max-count":"6"}})})),1),t._v(" "),n("div",{staticClass:"category-section__content"},[n("start-banner",{staticClass:"mb-40",attrs:{items:t.startBannerItems}}),t._v(" "),n("block-wrap",{staticClass:"mb-60",attrs:{"offset-x":"40",count:"3"}},t._l(t.indexCategoriesCards,(function(t){return n("index-category",{key:t.id,attrs:{data:t,"mod-style":"small"}})})),1),t._v(" "),n("simple-slider",{staticClass:"logos-slider mb-60",attrs:{products:t.logos}},t._l(t.logos,(function(e){return n("logo-item",{key:e.image,attrs:{link:t.$localePath("/"),image:e.image}})})),1),t._v(" "),n("div",{staticClass:"page-heading mb-30"},[t._v("Популярное в электронике")]),t._v(" "),n("client-only",[n("flickity",{staticClass:"categories-slider mb-60",attrs:{options:t.categoriesListOptions}},t._l(t.categoriesList,(function(e){return n("category-button",{key:e.title,staticClass:"categories-slider__item",attrs:{link:e.link,icon:e.icon}},[t._v("\n            "+t._s(e.title)+"\n          ")])})),1)],1),t._v(" "),n("products-block",{staticClass:"mb-60",attrs:{title:"Для автолюбителей",category:"Авто",link:t.$localePath("/")}},[n("product-cards",{attrs:{products:t.products.electronic}})],1),t._v(" "),n("products-block",{staticClass:"mb-60",attrs:{title:"Рекомендуем вам",category:"Умные часы и браслеты",link:t.$localePath("/")}},[n("products-slider",{attrs:{products:t.products.electronic,"button-border":"none","button-color":"gray-light"}})],1),t._v(" "),n("banner-item",{staticClass:"mb-60",attrs:{src:"/img/banners/hor-1.png",link:t.$localePath("/")}}),t._v(" "),n("products-block",{staticClass:"mb-60",attrs:{title:"Для учебы",link:t.$localePath("/")}},[n("products-slider",{attrs:{products:t.products.electronic,"button-border":"none","button-color":"gray-light"}})],1)],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"page-heading mb-40"},[this._v("\n    Электроника "),e("span",{staticClass:"page-heading__subtitle"},[this._v("12 392 товаров")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CategoryList:n(289).default,StartBanner:n(282).default,IndexCategory:n(276).default,BlockWrap:n(31).default,LogoItem:n(273).default,SimpleSlider:n(279).default,CategoryButton:n(283).default,ProductCards:n(281).default,ProductsBlock:n(270).default,ProductsSlider:n(271).default,BannerItem:n(78).default})}}]);
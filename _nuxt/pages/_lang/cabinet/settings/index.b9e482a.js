(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{325:function(t,e,l){"use strict";l.r(e);l(76),l(21),l(22),l(11),l(57);var o=l(32),n=l(267),d=l(263),r=l(266),c=l(272),m=l(290),f=l(291),E=l(292),v=l(293),h=l(294),C=l(42);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{EmailCodeModal:h.default,EditEmailModal:v.default,ConfirmCodeModal:E.default,EditPhoneModal:f.default,EditPersonalModal:m.default,ModalWrapper:c.default,SimpleList:r.default,VCard:d.default,MessageBlock:n.default},data:function(){return{list:[{title:"Персональные данные",subtitle:"Имя, дата рождения, пол",action:this.setEditPersonal},{title:"Номер телефона",subtitle:"+998 90 *** ** 22",action:this.setEditPhone},{title:"Электронная почта",subtitle:null,action:this.setEditEmail}],buttons:[{title:"Выйти на всех устройствах"},{title:"Изменить пароль"}]}},computed:O({},Object(C.c)("modals",["editPersonal","editPhone","confirmCode","editEmail","emailCode"])),methods:O({},Object(C.b)("modals",["setEditPersonal","setEditPhone","setConfirmCode","setEditEmail","setEmailCode"]))},w=l(2),component=Object(w.a)(_,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("h1",{staticClass:"page-heading mb-40"},[t._v("Настройки и безопасность")]),t._v(" "),l("block-wrap",{staticClass:"cards-promos mb-60",attrs:{"offset-x":"40",count:"3"}},t._l(t.list,(function(e){return l("v-card",{key:e.title,attrs:{"padding-y":"30","padding-x":"30"}},[l("v-text",{staticClass:"mb-10",attrs:{font:"14","line-height":"20"}},[t._v(t._s(e.title))]),t._v(" "),l("v-text",{staticClass:"mb-30",class:{"color-gray-lighten":!e.subtitle},attrs:{font:"20",weight:"600"}},[t._v("\n        "+t._s(e.subtitle?e.subtitle:"Не указана")+"\n      ")]),t._v(" "),l("v-text",{staticClass:"text-link",attrs:{font:"14"},on:{click:e.action}},[t._v("Редактировать")])],1)})),1),t._v(" "),l("simple-list",t._l(t.buttons,(function(e){return l("app-button",{key:e.title,staticClass:"mb-20",attrs:{"mod-style":"second-lighten","text-color":"second",sides:"15",radius:"10"}},[t._v("\n      "+t._s(e.title)+"\n    ")])})),1),t._v(" "),l("modal-wrapper",{attrs:{value:t.editPersonal},on:{input:t.setEditPersonal}},[l("edit-personal-modal")],1),t._v(" "),l("modal-wrapper",{attrs:{value:t.editPhone},on:{input:t.setEditPhone}},[l("edit-phone-modal",{on:{input:t.setEditPhone}})],1),t._v(" "),l("modal-wrapper",{attrs:{value:t.confirmCode},on:{input:t.setConfirmCode}},[l("confirm-code-modal")],1),t._v(" "),l("modal-wrapper",{attrs:{value:t.editEmail},on:{input:t.setEditEmail}},[l("edit-email-modal",{on:{input:t.setEditEmail}})],1),t._v(" "),l("modal-wrapper",{attrs:{value:t.emailCode},on:{input:t.setEmailCode}},[l("email-code-modal")],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{VText:l(105).default,VCard:l(263).default,BlockWrap:l(31).default,AppButton:l(30).default,SimpleList:l(266).default,EditPersonalModal:l(290).default,ModalWrapper:l(272).default,EditPhoneModal:l(291).default,ConfirmCodeModal:l(292).default,EditEmailModal:l(293).default,EmailCodeModal:l(294).default})}}]);
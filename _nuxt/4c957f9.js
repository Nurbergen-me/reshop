(window.webpackJsonp=window.webpackJsonp||[]).push([[33,9],{356:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMiAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYgMUMzLjIzOSAxIDEgMy4yMTYgMSA1Ljk1QzEgOC4xNTcgMS44NzUgMTMuMzk1IDEwLjQ4OCAxOC42OUMxMC42NDIzIDE4Ljc4MzkgMTAuODE5NCAxOC44MzM1IDExIDE4LjgzMzVDMTEuMTgwNiAxOC44MzM1IDExLjM1NzcgMTguNzgzOSAxMS41MTIgMTguNjlDMjAuMTI1IDEzLjM5NSAyMSA4LjE1NyAyMSA1Ljk1QzIxIDMuMjE2IDE4Ljc2MSAxIDE2IDFDMTMuMjM5IDEgMTEgNCAxMSA0QzExIDQgOC43NjEgMSA2IDFaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"},357:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAyMyAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIxLjE0MjcgNy40MTg3OUMyMS42MzY0IDguMDY0NjIgMjEuNjM2NCA4LjkzNjUgMjEuMTQyNyA5LjU4MTI5QzE5LjU4NzUgMTEuNjExNSAxNS44NTYyIDE1Ljc5MTcgMTEuNSAxNS43OTE3QzcuMTQzNzIgMTUuNzkxNyAzLjQxMjQ3IDExLjYxMTUgMS44NTcyNiA5LjU4MTI5QzEuNjE3MDQgOS4yNzIwNSAxLjQ4NjYzIDguODkxNjIgMS40ODY2MyA4LjUwMDA0QzEuNDg2NjMgOC4xMDg0NiAxLjYxNzA0IDcuNzI4MDMgMS44NTcyNiA3LjQxODc5QzMuNDEyNDcgNS4zODg1OCA3LjE0MzcyIDEuMjA4MzcgMTEuNSAxLjIwODM3QzE1Ljg1NjIgMS4yMDgzNyAxOS41ODc1IDUuMzg4NTggMjEuMTQyNyA3LjQxODc5VjcuNDE4NzlaIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTEuNSAxMS42MjVDMTMuMjI1OSAxMS42MjUgMTQuNjI1IDEwLjIyNTkgMTQuNjI1IDguNUMxNC42MjUgNi43NzQxMSAxMy4yMjU5IDUuMzc1IDExLjUgNS4zNzVDOS43NzQxMSA1LjM3NSA4LjM3NSA2Ljc3NDExIDguMzc1IDguNUM4LjM3NSAxMC4yMjU5IDkuNzc0MTEgMTEuNjI1IDExLjUgMTEuNjI1WiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="},373:function(t,e,r){t.exports=r.p+"img/white-close.ca3c650.svg"},381:function(t,e,r){"use strict";r.r(e);r(23),r(31),r(26),r(33),r(11),r(43),r(27),r(44);var o=r(16),l=r(34);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var n={name:"Card",props:["cardData"],methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)({addToCart:"cart/addToCart"}))},_=n,f=r(15),component=Object(f.a)(_,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"recommend__card card"},[e("nuxt-link",{staticClass:"recommend__card-img card-img",attrs:{to:"/product/".concat(t.cardData.id)}},[e("img",{attrs:{src:"".concat(t.cardData.photo),alt:""}}),t._v(" "),e("div",{staticClass:"recommend__card-sign card-sign"},[t._v(" "+t._s(t.cardData.barcode)+" ")]),t._v(" "),e("div",{staticClass:"recommend__actions card-actions"},[e("a",{staticClass:"recommend__actions-left",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.addToCart(t.cardData)}}},[t._v("В корзину")]),t._v(" "),e("div",{staticClass:"recommend__actions-right card-actions-right"},[e("a",{staticClass:"recommend__actions-icon card-actions-icon",attrs:{href:"#"}},[e("img",{attrs:{src:r(357),alt:""}})]),t._v(" "),e("a",{staticClass:"recommend__actions-icon card-actions-icon",attrs:{href:"#"}},[e("img",{attrs:{src:r(356),alt:""}})])])])]),t._v(" "),e("p",{staticClass:"recommend__card-name"},[t._v("\n          "+t._s(t.cardData.name)+"\n      ")]),t._v(" "),e("div",{staticClass:"recommend__card-prices"},[e("div",{staticClass:"recommend__card-newprice"},[t._v(t._s(t.cardData.lowerPrice.value)+" руб")]),t._v(" "),e("div",{staticClass:"recommend__card-oldprice"},[t._v(t._s(t.cardData.oldPrice)+" руб")])])],1)}),[],!1,null,null,null);e.default=component.exports},391:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDggMTEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0zLjY0NjQ1IDEwLjM1MzZDMy44NDE3MSAxMC41NDg4IDQuMTU4MjkgMTAuNTQ4OCA0LjM1MzU1IDEwLjM1MzZMNy41MzU1MyA3LjE3MTU3QzcuNzMwOCA2Ljk3NjMxIDcuNzMwOCA2LjY1OTczIDcuNTM1NTMgNi40NjQ0N0M3LjM0MDI3IDYuMjY5MiA3LjAyMzY5IDYuMjY5MiA2LjgyODQzIDYuNDY0NDdMNCA5LjI5Mjg5TDEuMTcxNTcgNi40NjQ0N0MwLjk3NjMxIDYuMjY5MiAwLjY1OTcyOCA2LjI2OTIgMC40NjQ0NjYgNi40NjQ0N0MwLjI2OTIwNCA2LjY1OTczIDAuMjY5MjA0IDYuOTc2MzEgMC40NjQ0NjYgNy4xNzE1N0wzLjY0NjQ1IDEwLjM1MzZaTTMuNSAtMi4xODU1N2UtMDhMMy41IDEwTDQuNSAxMEw0LjUgMi4xODU1N2UtMDhMMy41IC0yLjE4NTU3ZS0wOFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="},404:function(t,e,r){var content=r(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(54).default)("10bfd434",content,!0,{sourceMap:!1})},441:function(t,e,r){t.exports=r.p+"img/fillter.5d1d161.svg"},442:function(t,e,r){"use strict";r(404)},443:function(t,e,r){var o=r(53),l=r(148),c=r(391),n=o((function(i){return i[1]})),_=l(c);n.push([t.i,'.category{padding:42px 0 116px}.category__container{display:flex;gap:60px}.category__top{display:flex;justify-content:space-between}.category__title{font-size:32px;line-height:38px;margin-top:7px;position:relative}.category__title-amount{color:#818181;font-size:12px;line-height:14px;position:absolute;right:-24px;top:50%;transform:translate(100%,-50%)}.category__slogan{color:#000;font-family:"Museo Sans Cyrl";font-size:16px;font-style:normal;font-weight:400;line-height:19px;max-width:50%;text-align:right}.filter{margin-top:48px;min-width:240px;position:relative}.filter__form-field{margin-top:28px}.filter__form-top{display:flex;justify-content:space-between}.filter__form-title{align-items:center;display:flex;gap:8px}.filter__form-title p{font-family:"MuseoSansCyrl-900";font-size:14px;line-height:16px}.filter__form-link{border-bottom:1px dashed #959595;color:#959595;display:inline-block;font-family:"Museo Sans Cyrl";font-size:12px;font-style:normal;font-weight:400;line-height:14px;margin-top:18px}.filter__form-reset{margin-top:0}.filter__form-range{border-radius:2px;display:flex;height:35px;margin-top:37px;width:175px}.filter__form-range label{height:100%;position:relative;width:50%}.filter__form-range input{border:1px solid #d8d8d8;border-radius:0 5px 5px 0;height:100%;padding:10px 13px;position:relative;width:100%}.filter__form-range--first{border-radius:5px 0 0 5px!important}.filter__form-range input:not(:last-child){border-right:0}.filter__form-range label span{color:#959595;display:block;left:4px;line-height:120%;position:absolute;top:-7px;transform:translateY(-100%);width:100%}.filter__form-range label span,.filter__form-search{font-family:"Museo Sans Cyrl";font-size:12px;font-style:normal;font-weight:400}.filter__form-search{border:1px solid #d8d8d8;border-radius:2px;color:#000;height:35px;line-height:14px;margin-top:10px;padding:10px 17px;width:calc(100% - 20px)}.filter__form-search::-moz-placeholder{color:#959595;font-family:"Museo Sans Cyrl";font-size:12px;font-style:normal;font-weight:400;line-height:14px}.filter__form-search::placeholder{color:#959595;font-family:"Museo Sans Cyrl";font-size:12px;font-style:normal;font-weight:400;line-height:14px}.filter__form-fieldset{display:flex;flex-direction:column;gap:10px;margin-top:15px}.filter__form-check{position:relative}.filter__form-checkbox{height:100%;opacity:0;position:absolute;width:100%;z-index:1}.filter__form-checkbox+label{cursor:pointer;padding-left:30px;position:relative}.filter__form-checkbox+label:before{border:1px solid #d8d8d8;border-radius:2px;height:17px;left:0;width:17px}.filter__form-checkbox+label:after,.filter__form-checkbox+label:before{content:"";position:absolute;top:50%;transform:translateY(-50%);transition:.2s}.filter__form-checkbox+label:after{background:transparent;border-radius:2px;height:9px;left:4px;width:9px}.filter__form-checkbox:not(:checked)+label:after{background:transparent}.filter__form-checkbox:checked+label:after{background:#eb681e}.filter__form-colorset{display:flex;flex-wrap:wrap;gap:1px;justify-content:flex-start;margin-top:16px}.filter__form-color{height:39px;position:relative;width:39px}.filter__form-color input{height:100%;opacity:0;position:absolute;width:100%;z-index:1}.filter__form-color-checkbox+label{cursor:pointer;display:block;height:100%;position:relative;width:100%}.filter__form-color-checkbox+label:before{border:1px solid #eb681e;border-radius:5px;content:"";height:39px;left:0;position:absolute;top:50%;transform:translateY(-50%);transition:.2s;width:39px}.filter__form-color-checkbox+label:after{background:#d21e95;border-radius:5px;content:"";height:33px;left:3px;position:absolute;top:50%;transform:translateY(-50%);transition:.2s;width:33px}.filter__form-color-checkbox:not(:checked)+label:before{border:1px solid hsla(0,0%,100%,0)}.filter__form-color-checkbox:checked+label:before{border:1px solid #eb681e}.filter__form-color-checkbox.yellow+label:after{background:#efda18}.filter__form-color-checkbox.red+label:after{background:#de0e0e}.filter__form-color-checkbox.black+label:after{background:#000}.filter__form-color-checkbox.white+label:after{background:#fff;border:1px solid #d8d8d8}.filter__form-color-checkbox.blue+label:after{background:#2785e0}.filter__form-btn{font-family:"Museo Sans Cyrl";font-size:10px;font-style:normal;font-weight:400;height:34px;line-height:120%;padding:10px 12px 10px 0;position:absolute;right:-75px;top:210px;z-index:90}.filter__form-btn:hover{background:#eb681e;color:#fff!important}.filter__form-btn:before{background:#eb681e;border-radius:50% 0 0 50%;content:"";height:34px;left:0;pointer-events:none;position:absolute;top:50%;transform:translate(-50%,-50%);width:26px;z-index:-1}.category__products{flex-grow:1}.category-card{grid-column:span 4}.category__sort{align-items:center;display:flex;gap:29px;justify-content:flex-end;margin-top:51px}.category__sort-link,.category__sort-text{font-family:"Museo Sans Cyrl";font-size:14px;font-style:normal;font-weight:400;line-height:17px}.category__sort-link{color:#868686;position:relative}.category__sort-link.active{color:#000}.category__sort-link.active:after{background:url('+_+');background-repeat:no-repeat;background-size:contain;content:"";height:10px;position:absolute;right:-14px;top:50%;transform:translateY(-50%);width:10px}.category__selected{display:flex;flex-wrap:wrap;gap:10px;justify-content:flex-end;margin-top:19px;max-width:100%}.category__selected-item{align-items:center;background:#f0f0f0;border-radius:90px;display:flex;flex-shrink:0;gap:10px;height:33px;padding:5px 6px 5px 14px}.category__selected-item span{color:#868686;font-family:"Arsenal";font-size:14px;font-style:normal;font-weight:400;line-height:18px}.category__selected-item img{align-items:center;background:#c4c4c4;border-radius:50%;display:flex;height:23px;justify-content:center;padding:6px;transition:.2s linear;width:23px}.category__selected-item:hover img{background:#e2e2e2}.category__products-text{font-family:"Museo Sans Cyrl";font-size:16px;font-style:normal;font-weight:400;line-height:150%}.category__products-cards{margin:17px 0 44px}.mob__sort{justify-content:space-between;margin-top:18px}.mob__sort,.mob__sort-filter{align-items:center;display:none}.mob__sort-filter{gap:8px;justify-content:flex-start}.category__sort-link--mob,.mob__sort-filter p{font-family:"Museo Sans Cyrl";font-size:14px;font-style:normal;font-weight:400;line-height:17px}.category__sort-link--mob{padding-right:20px;position:relative}.category__sort-link--mob:after{background:url('+_+');background-repeat:no-repeat;background-size:contain;content:"";height:10px;position:absolute;right:0;top:50%;transform:translateY(-50%);width:10px}@media screen and (max-width:1000px){.category-card{grid-column:span 6}}@media screen and (max-width:800px){.filter{background:rgba(0,0,0,.122);bottom:0;height:100vh;left:0;margin-top:0;opacity:0;overflow-y:auto;position:fixed;right:0;top:0;transform:translateX(-100%);transition:.2s linear;width:100vw;z-index:200}.filter.active{opacity:1;transform:translateX(0)}.filter__form{background:#fff;height:100%;max-width:100%;overflow-y:auto;padding:12px 40px 45px;width:360px}.filter__form-checkbox+label{background:#d9d9d9;border-radius:10px;display:block;padding:8px 10px}.filter__form-fieldset{flex-direction:row;flex-wrap:wrap}.filter__form-checkbox+label:after,.filter__form-checkbox+label:before{display:none}.filter__form-checkbox:not(:checked)+label{background:#d9d9d9}.filter__form-checkbox:checked+label{background:#a5a5a5}.filter__form-checkbox{left:50%;top:50%;transform:translate(-50%,-50%)}.filter__form-link--desc{display:none}.filter__form-btn{font-size:14px;height:auto;line-height:120%;margin-top:50px;padding:16px;position:relative;right:0;text-align:center;top:0;width:100%}.filter__form-btn:hover{background:#fff;color:#eb681e!important}.filter__form-btn:before{display:none}.category__products-text{margin-top:10px}.category__slogan,.category__sort{display:none}.category__selected{flex-wrap:nowrap;justify-content:flex-start;overflow-x:auto}.category__selected::-webkit-scrollbar{width:0}.category__container{gap:0}.mob__sort,.mob__sort-filter{display:flex}}@media screen and (max-width:850px){.category__slogan{display:none}}@media screen and (max-width:500px){.category__products-cards{gap:5px}.category__products{overflow:hidden}.category__title{font-size:22px;line-height:26px}}@media screen and (max-width:360px){.filter__form{padding:12px 17px}.category__title{font-size:16px;line-height:20px}}',""]),n.locals={},t.exports=n},465:function(t,e,r){"use strict";r.r(e);r(33),r(11);var o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"category__top"},[e("div",{staticClass:"category__top-left"},[e("div",{staticClass:"breadcrumb"},[e("a",{attrs:{href:"#"}},[t._v("Главная")]),t._v(" "),e("a",{attrs:{href:"#"}},[t._v("Категория")])]),t._v(" "),e("h1",{staticClass:"category__title"},[t._v("\n              Джемперы и свитшоты\n              "),e("span",{staticClass:"category__title-amount"},[t._v("156 штук")])])]),t._v(" "),e("p",{staticClass:"category__slogan"},[t._v("\n            Все вещи тщательно отбираются и проходят термическую обработку.\n            Однако, они не являются новыми и могут иметь незначительные\n            дефекты\n          ")])])},function(){var t=this._self._c;return t("div",{staticClass:"filter__form-title"},[t("p",[this._v("Цена, ₽")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter__form-title"},[e("p",[t._v("Бренд")]),t._v(" "),e("a",{staticClass:"filter__form-reset filter__form-link",attrs:{href:"#"}},[t._v("Сбросить")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter__form-title"},[e("p",[t._v("Размер")]),t._v(" "),e("a",{staticClass:"filter__form-reset filter__form-link",attrs:{href:"#"}},[t._v("Сбросить")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter__form-title"},[e("p",[t._v("Сезон")]),t._v(" "),e("a",{staticClass:"filter__form-reset filter__form-link",attrs:{href:"#"}},[t._v("Сбросить")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter__form-title"},[e("p",[t._v("Состояние")]),t._v(" "),e("a",{staticClass:"filter__form-reset filter__form-link",attrs:{href:"#"}},[t._v("Сбросить")])])},function(){var t=this,e=t._self._c;return e("fieldset",{staticClass:"filter__form-fieldset"},[e("div",{staticClass:"filter__form-check"},[e("input",{staticClass:"filter__form-checkbox",attrs:{id:"",type:"checkbox"}}),t._v(" "),e("label",{attrs:{for:""}},[t._v("Хорошее")])]),t._v(" "),e("div",{staticClass:"filter__form-check"},[e("input",{staticClass:"filter__form-checkbox",attrs:{id:"",type:"checkbox"}}),t._v(" "),e("label",{attrs:{for:""}},[t._v("Отличное")])]),t._v(" "),e("div",{staticClass:"filter__form-check"},[e("input",{staticClass:"filter__form-checkbox",attrs:{id:"",type:"checkbox"}}),t._v(" "),e("label",{attrs:{for:""}},[t._v("Отличное")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"filter__form-title"},[e("p",[t._v("Размер")]),t._v(" "),e("a",{staticClass:"filter__form-reset filter__form-link",attrs:{href:"#"}},[t._v("Сбросить")])])},function(){var t=this,e=t._self._c;return e("fieldset",{staticClass:"filter__form-fieldset"},[e("div",{staticClass:"filter__form-check"},[e("input",{staticClass:"filter__form-checkbox",attrs:{id:"",type:"checkbox"}}),t._v(" "),e("label",{attrs:{for:""}},[t._v("Хлопок")])]),t._v(" "),e("div",{staticClass:"filter__form-check"},[e("input",{staticClass:"filter__form-checkbox",attrs:{id:"",type:"checkbox"}}),t._v(" "),e("label",{attrs:{for:""}},[t._v("Лён")])]),t._v(" "),e("div",{staticClass:"filter__form-check"},[e("input",{staticClass:"filter__form-checkbox",attrs:{id:"",type:"checkbox"}}),t._v(" "),e("label",{attrs:{for:""}},[t._v("Шелк")])]),t._v(" "),e("div",{staticClass:"filter__form-check"},[e("input",{staticClass:"filter__form-checkbox",attrs:{id:"",type:"checkbox"}}),t._v(" "),e("label",{attrs:{for:""}},[t._v("Кашемир")])])])},function(){var t=this._self._c;return t("div",{staticClass:"filter__form-title"},[t("p",[this._v("Цвет")])])},function(){var t=this,e=t._self._c;return e("fieldset",{staticClass:"filter__form-colorset"},[e("div",{staticClass:"filter__form-color"},[e("input",{staticClass:"filter__form-color-checkbox",attrs:{type:"checkbox"}}),t._v(" "),e("label")]),t._v(" "),e("div",{staticClass:"filter__form-color"},[e("input",{staticClass:"filter__form-color-checkbox yellow",attrs:{type:"checkbox"}}),t._v(" "),e("label")]),t._v(" "),e("div",{staticClass:"filter__form-color"},[e("input",{staticClass:"filter__form-color-checkbox red",attrs:{type:"checkbox"}}),t._v(" "),e("label")]),t._v(" "),e("div",{staticClass:"filter__form-color"},[e("input",{staticClass:"filter__form-color-checkbox black",attrs:{type:"checkbox"}}),t._v(" "),e("label")]),t._v(" "),e("div",{staticClass:"filter__form-color"},[e("input",{staticClass:"filter__form-color-checkbox white",attrs:{type:"checkbox"}}),t._v(" "),e("label")]),t._v(" "),e("div",{staticClass:"filter__form-color"},[e("input",{staticClass:"filter__form-color-checkbox blue",attrs:{type:"checkbox"}}),t._v(" "),e("label")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"mob__sort"},[e("div",{staticClass:"mob__sort-filter"},[e("p",[t._v("Фильтры")]),t._v(" "),e("img",{attrs:{src:r(441),alt:""}})]),t._v(" "),e("a",{staticClass:"category__sort-link--mob"},[t._v("Цене")])])}],l=r(9),c=(r(149),r(62),{name:"Category",data:function(){return{sortBy:"price",filter:{priceFrom:100,priceTo:"",brandsSearch:"",sizesSearch:"",seasonsSearch:""},selectedFilters:{brands:[],seasons:[],sizes:[]},brands:[{id:101,title:"Marc Jacobs"},{id:102,title:"Valentino"},{id:103,title:"Guess"},{id:104,title:"Dior"},{id:105,title:"Furia"},{id:106,title:"Dolce & Gabanna"}],seasons:[{id:201,title:"Лето"},{id:202,title:"Осень"},{id:203,title:"Зима"},{id:204,title:"Весна"}],sizes:[{id:301,title:"40 (Don’t know)"},{id:302,title:"42 (XXS)"},{id:303,title:"44 (XS)"},{id:304,title:"46 (S)"},{id:305,title:"48 (M)"}],categoryProducts:[],products:[{id:1,title:"Мужская рубашка Mustang",newPrice:1500,oldPrice:4500,favorite:!1,inCart:!1,sign:"Отличное",image:"product.svg"},{id:2,title:"Мужская рубашка Mustang 2",newPrice:2500,oldPrice:4500,favorite:!1,inCart:!1,sign:"Супер",image:"product.svg"},{id:3,title:"Мужская рубашка Mustang 3",newPrice:3500,oldPrice:4500,favorite:!1,inCart:!1,sign:"Отличное",image:"product.svg"}]}},mounted:function(){this.getProducts()},methods:{getProducts:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.get("categories/".concat(t.$route.params.slug,"/products"));case 2:data=e.sent,t.categoryProducts=null==data||null===(r=data.data)||void 0===r?void 0:r.response.products;case 4:case"end":return e.stop()}}),e)})))()},toggleFilter:function(t,e){this.selectedFilters[e]&&(this.isInFilters(t,e)?this.selectedFilters[e]=this.selectedFilters[e].filter((function(e){return e.id!==t.id})):this.selectedFilters[e].push(t))},isInFilters:function(t,e){return!!this.selectedFilters[e].find((function(e){return e.id===t.id}))}}}),n=(r(442),r(15)),component=Object(n.a)(c,(function(){var t=this,e=t._self._c;return e("main",[e("section",{staticClass:"category"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"category__container"},[e("aside",{staticClass:"filter"},[e("form",{staticClass:"filter__form"},[e("div",{staticClass:"filter__form-field"},[e("div",{staticClass:"filter__form-top"},[t._m(1),t._v(" "),e("a",{staticClass:"filter__form-collapse"},[e("svg",{attrs:{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z",fill:"#959595"}})])])]),t._v(" "),e("div",{staticClass:"filter__form-range"},[e("label",[e("span",[t._v("От")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.priceFrom,expression:"filter.priceFrom"}],staticClass:"filter__form-range--first",attrs:{type:"number",placeholder:"5460"},domProps:{value:t.filter.priceFrom},on:{input:function(e){e.target.composing||t.$set(t.filter,"priceFrom",e.target.value)}}})]),t._v(" "),e("label",[e("span",[t._v("До")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.priceTo,expression:"filter.priceTo"}],attrs:{type:"number",placeholder:"9000"},domProps:{value:t.filter.priceTo},on:{input:function(e){e.target.composing||t.$set(t.filter,"priceTo",e.target.value)}}})])])]),t._v(" "),e("div",{staticClass:"filter__form-field"},[e("div",{staticClass:"filter__form-top"},[t._m(2),t._v(" "),e("a",{staticClass:"filter__form-collapse"},[e("svg",{attrs:{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z",fill:"#959595"}})])])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.brandsSearch,expression:"filter.brandsSearch"}],staticClass:"filter__form-search",attrs:{type:"search",placeholder:"Поиск..."},domProps:{value:t.filter.brandsSearch},on:{input:function(e){e.target.composing||t.$set(t.filter,"brandsSearch",e.target.value)}}}),t._v(" "),e("fieldset",{staticClass:"filter__form-fieldset"},t._l(t.brands,(function(r){return e("div",{key:r.id,staticClass:"filter__form-check"},[e("input",{staticClass:"filter__form-checkbox",attrs:{id:"",type:"checkbox"},domProps:{checked:t.isInFilters(r,"brands")},on:{click:function(e){return t.toggleFilter(r,"brands")}}}),t._v(" "),e("label",{attrs:{for:""}},[t._v(t._s(r.title))])])})),0),t._v(" "),e("a",{staticClass:"filter__form-link filter__form-link--desc"},[t._v("Очистить фильтр")])]),t._v(" "),e("div",{staticClass:"filter__form-field"},[e("div",{staticClass:"filter__form-top"},[t._m(3),t._v(" "),e("a",{staticClass:"filter__form-collapse"},[e("svg",{attrs:{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z",fill:"#959595"}})])])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.sizesSearch,expression:"filter.sizesSearch"}],staticClass:"filter__form-search",attrs:{type:"search",placeholder:"Поиск..."},domProps:{value:t.filter.sizesSearch},on:{input:function(e){e.target.composing||t.$set(t.filter,"sizesSearch",e.target.value)}}}),t._v(" "),e("fieldset",{staticClass:"filter__form-fieldset"},t._l(t.sizes,(function(r){return e("div",{key:r.id,staticClass:"filter__form-check"},[e("input",{staticClass:"filter__form-checkbox",attrs:{id:"",type:"checkbox"},domProps:{checked:t.isInFilters(r,"sizes")},on:{click:function(e){return t.toggleFilter(r,"sizes")}}}),t._v(" "),e("label",{attrs:{for:""}},[t._v(" "+t._s(r.title)+" ")])])})),0),t._v(" "),e("a",{staticClass:"filter__form-link filter__form-link--desc"},[t._v("Очистить фильтр")])]),t._v(" "),e("div",{staticClass:"filter__form-field"},[e("div",{staticClass:"filter__form-top"},[t._m(4),t._v(" "),e("a",{staticClass:"filter__form-collapse"},[e("svg",{attrs:{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z",fill:"#959595"}})])])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter.seasonsSearch,expression:"filter.seasonsSearch"}],staticClass:"filter__form-search",attrs:{type:"search",placeholder:"Поиск..."},domProps:{value:t.filter.seasonsSearch},on:{input:function(e){e.target.composing||t.$set(t.filter,"seasonsSearch",e.target.value)}}}),t._v(" "),e("fieldset",{staticClass:"filter__form-fieldset"},t._l(t.seasons,(function(r){return e("div",{key:r.id,staticClass:"filter__form-check"},[e("input",{staticClass:"filter__form-checkbox",attrs:{id:"",type:"checkbox"},domProps:{checked:t.isInFilters(r,"seasons")},on:{click:function(e){return t.toggleFilter(r,"seasons")}}}),t._v(" "),e("label",{attrs:{for:""}},[t._v(" "+t._s(r.title)+" ")])])})),0)]),t._v(" "),e("div",{staticClass:"filter__form-field"},[e("div",{staticClass:"filter__form-top"},[t._m(5),t._v(" "),e("a",{staticClass:"filter__form-collapse"},[e("svg",{attrs:{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z",fill:"#959595"}})])])]),t._v(" "),t._m(6)]),t._v(" "),e("div",{staticClass:"filter__form-field"},[e("div",{staticClass:"filter__form-top"},[t._m(7),t._v(" "),e("a",{staticClass:"filter__form-collapse"},[e("svg",{attrs:{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z",fill:"#959595"}})])])]),t._v(" "),e("input",{staticClass:"filter__form-search",attrs:{type:"search",placeholder:"Поиск..."}}),t._v(" "),t._m(8)]),t._v(" "),e("div",{staticClass:"filter__form-field"},[e("div",{staticClass:"filter__form-top"},[t._m(9),t._v(" "),e("a",{staticClass:"filter__form-collapse"},[e("svg",{attrs:{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M1.93795 5.9208C1.93797 5.83388 1.96548 5.74892 2.01701 5.67666C2.06853 5.6044 2.14176 5.54809 2.22743 5.51485C2.3131 5.48161 2.40735 5.47293 2.49828 5.48991C2.58921 5.5069 2.67272 5.54878 2.73826 5.61026L8.18482 10.7164L13.6314 5.61026C13.7198 5.53021 13.8382 5.48591 13.9611 5.48691C14.084 5.48792 14.2016 5.53413 14.2885 5.61561C14.3754 5.69709 14.4247 5.80731 14.4258 5.92253C14.4268 6.03776 14.3796 6.14876 14.2942 6.23164L8.51607 11.6486C8.42817 11.731 8.30896 11.7773 8.18467 11.7773C8.06037 11.7773 7.94116 11.731 7.85326 11.6486L2.07513 6.23164C2.03161 6.19082 1.9971 6.14235 1.97356 6.08902C1.95002 6.03568 1.93792 5.97852 1.93795 5.9208Z",fill:"#959595"}})])])]),t._v(" "),t._m(10),t._v(" "),e("a",{staticClass:"filter__form-link"},[t._v("Очистить фильтр")])]),t._v(" "),e("button",{staticClass:"filter__form-btn btn"},[t._v("\n                Показать 65 товаров\n              ")])])]),t._v(" "),e("div",{staticClass:"category__products"},[e("div",{staticClass:"category__sort"},[e("p",{staticClass:"category__sort-text"},[t._v("Сортировать по:")]),t._v(" "),e("a",{staticClass:"category__sort-link",class:{active:"price"===t.sortBy},on:{click:function(e){t.sortBy="price"}}},[t._v("Цене")]),t._v(" "),e("a",{staticClass:"category__sort-link",class:{active:"discount"===t.sortBy},on:{click:function(e){t.sortBy="discount"}}},[t._v("Скидке")]),t._v(" "),e("a",{staticClass:"category__sort-link",class:{active:"date"===t.sortBy},on:{click:function(e){t.sortBy="date"}}},[t._v("Дате")])]),t._v(" "),t._m(11),t._v(" "),e("div",{staticClass:"category__selected"},[t._l(t.selectedFilters.brands,(function(filter){return e("a",{staticClass:"category__selected-item",on:{click:function(e){return t.toggleFilter(filter,"brands")}}},[e("span",[t._v(" "+t._s(filter.title)+" ")]),t._v(" "),e("img",{attrs:{src:r(373),alt:""}})])})),t._v(" "),t._l(t.selectedFilters.seasons,(function(filter){return e("a",{staticClass:"category__selected-item",on:{click:function(e){return t.toggleFilter(filter,"seasons")}}},[e("span",[t._v(" "+t._s(filter.title)+" ")]),t._v(" "),e("img",{attrs:{src:r(373),alt:""}})])})),t._v(" "),t._l(t.selectedFilters.sizes,(function(filter){return e("a",{staticClass:"category__selected-item",on:{click:function(e){return t.toggleFilter(filter,"sizes")}}},[e("span",[t._v(" "+t._s(filter.title)+" ")]),t._v(" "),e("img",{attrs:{src:r(373),alt:""}})])}))],2),t._v(" "),e("p",{staticClass:"category__products-text"},[t._v("\n              Здесь может быть какое-то важное предложение\n            ")]),t._v(" "),e("div",{staticClass:"category__products-cards cards"},t._l(t.categoryProducts,(function(t){return e("Card",{key:t.id,attrs:{cardData:t}})})),1),t._v(" "),e("p",{staticClass:"category__products-text"},[t._v("\n              Чем отличается свитер от свитшота? Джемпер от пуловера? Худи от\n              толстовки? Разбираться в тонкостях наименований современной\n              модной одежды полезно и интересно, но зачастую не так уж просто.\n              ... Свитера, джемпера, толстовки и все остальные плечевые\n              предметы вязаной одежды зачастую ошибочно называют кофтой.\n            ")])])])])])])}),o,!1,null,null,null);e.default=component.exports;installComponents(component,{Card:r(381).default})}}]);
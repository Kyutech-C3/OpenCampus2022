(window.webpackJsonp=window.webpackJsonp||[]).push([[13,14],{279:function(e,t,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("5c22d4d6",content,!0,{sourceMap:!1})},306:function(e,t,n){"use strict";n(279)},307:function(e,t,n){var r=n(21)(!1);r.push([e.i,".community-hero[data-v-877364fe],.name[data-v-877364fe]{background-size:cover}.community-hero[data-v-877364fe]{position:relative;z-index:0;overflow:hidden;display:flex;flex-direction:column;justify-content:space-around;margin:0;padding:40px;height:100vh;height:100lvh}.community-hero img[data-v-877364fe]{height:100%;width:100%;position:absolute;-o-object-fit:cover;object-fit:cover;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);z-index:-99;-moz-filter:blur(4px) brightness(60%);-o-filter:blur(4px) brightness(60%);-ms-filter:blur(4px) brightness(60%);filter:blur(4px) brightness(60%)}@media screen and (max-width:767px){.community-hero[data-v-877364fe]{padding:20px}}.button-wrapper[data-v-877364fe],.description[data-v-877364fe],.name[data-v-877364fe]{color:#fff}.name[data-v-877364fe]{font-size:clamp(90px,12vw,231px);color:hsla(0,0%,100%,.4);padding-top:60px;padding-left:100px;position:absolute;top:0;left:0;width:100%;height:100%;background-position-x:-3px;background-position-y:-3px;background-clip:text;-webkit-background-clip:text;filter:brightness(200%);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media screen and (max-width:767px){.name[data-v-877364fe]{font-size:15vw;padding-left:20px}}.description[data-v-877364fe]{font-size:clamp(15px,2vw,39px);margin:20% 10% 0 30%;letter-spacing:4px;line-height:1.3em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media screen and (max-width:767px){.description[data-v-877364fe]{font-size:20px;margin:50% 20px 0}}.button-wrapper[data-v-877364fe]{border:2px solid #fff;border-radius:40px;padding:10px 50px;text-decoration:none;margin:50px auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;z-index:10;transition:.3s}.button-wrapper[data-v-877364fe]:hover{border:2px solid #3b8070;background-color:rgba(53,73,94,.30196);color:#3b8070}@media screen and (max-width:767px){.button-wrapper[data-v-877364fe]{padding:10px 30px}}.button-text[data-v-877364fe]{text-align:center;font-size:35px;letter-spacing:.3em}@media screen and (max-width:767px){.button-text[data-v-877364fe]{font-size:20px}}",""]),e.exports=r},316:function(e,t,n){"use strict";n.r(t);var r={props:{item:{type:Object,required:!0,default:{name:"Not Found",description:"説明をここに記載",imgUrl:"https://placehold.jp/1920x1080.png",linkUrl:""}}}},o=(n(306),n(12)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"community-hero"},[n("img",{attrs:{src:e.item.imgUrl,type:"image",loading:"lazy"}}),e._v(" "),n("h1",{staticClass:"name"},[e._v(e._s(e.item.name))]),e._v(" "),n("div",{staticClass:"description"},[e._v(e._s(e.item.description))]),e._v(" "),n("a",{staticClass:"button-wrapper",attrs:{href:e.item.linkUrl,title:e.item.name}},[n("span",{staticClass:"button-text"},[e._v("もっとみる→")])])])}),[],!1,null,"877364fe",null);t.default=component.exports},368:function(e,t,n){"use strict";n.r(t);var r={components:{CommunityHero:n(316).default},props:{items:{type:Array,required:!0}}},o=n(12),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"communities-hero"},e._l(e.items,(function(e,i){return n("div",{key:i},[n("community-hero",{attrs:{item:e}})],1)})),0)}),[],!1,null,"0737e200",null);t.default=component.exports}}]);
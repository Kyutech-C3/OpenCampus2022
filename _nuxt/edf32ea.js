(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{303:function(t,o,e){var content=e(339);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(22).default)("b4a33bf2",content,!0,{sourceMap:!1})},338:function(t,o,e){"use strict";e(303)},339:function(t,o,e){var n=e(21)(!1);n.push([t.i,".modal-wrapper[data-v-2f711c54]{position:fixed;justify-content:center;display:none;align-items:center;text-align:center;width:100%;height:100%;top:0;left:0;z-index:400;background-color:rgba(0,0,0,.86667);opacity:0}.open[data-v-2f711c54]{display:flex;opacity:1}.link[data-v-2f711c54]{font-weight:700}.modal-background-click-panel[data-v-2f711c54]{position:absolute;top:0;left:0;width:100vw;height:100vh;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.modal-container[data-v-2f711c54]{color:#000;background-color:#fff;margin:0 2rem;padding:1rem 3rem;border-radius:15px;max-width:800px;width:80vw;z-index:10}.description[data-v-2f711c54]{margin-bottom:2rem}",""]),t.exports=n},364:function(t,o,e){"use strict";e.r(o);var n={name:"DownloadConfirmModal",model:{prop:"open",event:"setOpen"},computed:{downloadURL:function(){return"https://shared-vps.compositecomputer.club/api/v1/works/".concat(this.workID,"/download")}},props:{open:{type:Boolean,default:!1},workID:{type:String,default:"1"}}},r=(e(338),e(12)),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"modal-wrapper",class:{open:t.open}},[e("div",{staticClass:"modal-background-click-panel",on:{click:function(o){return t.$emit("setOpen",!1)}}}),t._v(" "),e("div",{staticClass:"modal-container"},[e("h1",{staticClass:"title"},[t._v("ダウンロードしても構いませんか？")]),t._v(" "),e("h3",{staticClass:"description"},[t._v("Google Driveから、.zip圧縮ファイルがダウンロードされます。")]),t._v(" "),e("a",{staticClass:"link",attrs:{href:t.downloadURL}},[t._v("ダウンロードする")])])])}),[],!1,null,"2f711c54",null);o.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[1,10,18,19,20,21,22,23,24,25,28,29],{266:function(t,e,o){var content=o(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("d0d6f388",content,!0,{sourceMap:!1})},267:function(t,e,o){"use strict";o.r(e);o(63);var r={name:"Tag",model:{event:"select",prop:"selected"},props:{tag:{type:Object,require:!0,default:function(){return{id:1,name:"Hack",color:"#FF0000"}}},deletable:{type:Boolean,require:!1,default:function(){return!1}},small:{type:Boolean,require:!1,default:function(){return!1}},extraSmall:{type:Boolean,require:!1,default:function(){return!1}},outline:{type:Boolean,require:!1,default:function(){return!1}}},computed:{style:function(){return"background-color: ".concat(this.tag.color,";")},outlineStyle:function(){return"color: ".concat(this.tag.color,"; border: solid 1.5px ").concat(this.tag.color)}}},n=(o(268),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tag",class:{deletable:t.deletable,small:t.small,"extra-small":t.extraSmall},style:t.outline?t.outlineStyle:t.style},[o("div",{staticClass:"bold"},[t._v("\n    "+t._s(t.tag.name)+"\n  ")]),t._v(" "),t.deletable?o("font-awesome-icon",{staticClass:"delete-button",attrs:{icon:"times"},on:{click:function(e){return t.$emit("delete",t.tag)}}}):t._e()],1)}),[],!1,null,"305a312d",null);e.default=component.exports},268:function(t,e,o){"use strict";o(266)},269:function(t,e,o){var r=o(21)(!1);r.push([t.i,".tag[data-v-305a312d]{display:flex;flex-direction:row;flex-wrap:nowrap;white-space:nowrap;align-items:center;padding:5px 15px;font-size:1rem;color:#fff;border-radius:15.5px}.extra-small[data-v-305a312d],.small[data-v-305a312d]{font-size:12px}.extra-small[data-v-305a312d]{padding:3px 12px}.delete-button[data-v-305a312d]{vertical-align:middle;margin-left:8px;font-size:12px;cursor:pointer}.selected[data-v-305a312d]{opacity:1}",""]),t.exports=r},270:function(t,e,o){"use strict";var r=o(9),n=o(5),c=o(89),l=o(16),d=o(10),f=o(42),m=o(186),h=o(64),v=o(4),_=o(55),w=o(65).f,x=o(36).f,k=o(15).f,y=o(271).trim,C="Number",M=n.Number,S=M.prototype,E=f(_(S))==C,A=function(t){var e,o,r,n,c,l,d,code,f=h(t,!1);if("string"==typeof f&&f.length>2)if(43===(e=(f=y(f)).charCodeAt(0))||45===e){if(88===(o=f.charCodeAt(2))||120===o)return NaN}else if(48===e){switch(f.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+f}for(l=(c=f.slice(2)).length,d=0;d<l;d++)if((code=c.charCodeAt(d))<48||code>n)return NaN;return parseInt(c,r)}return+f};if(c(C,!M(" 0o1")||!M("0b1")||M("+0x1"))){for(var I,T=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof T&&(E?v((function(){S.valueOf.call(o)})):f(o)!=C)?m(new M(A(e)),o,T):A(e)},L=r?w(M):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;L.length>O;O++)d(M,I=L[O])&&!d(T,I)&&k(T,I,x(M,I));T.prototype=S,S.constructor=T,l(n,C,T)}},271:function(t,e,o){var r=o(23),n="["+o(272)+"]",c=RegExp("^"+n+n+"*"),l=RegExp(n+n+"*$"),d=function(t){return function(e){var o=String(r(e));return 1&t&&(o=o.replace(c,"")),2&t&&(o=o.replace(l,"")),o}};t.exports={start:d(1),end:d(2),trim:d(3)}},272:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},274:function(t,e,o){var content=o(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("c774a7ec",content,!0,{sourceMap:!1})},275:function(t,e,o){var content=o(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("4ba04e79",content,!0,{sourceMap:!1})},276:function(t,e,o){var content=o(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("e08ed2a6",content,!0,{sourceMap:!1})},277:function(t,e,o){var content=o(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("66e9d470",content,!0,{sourceMap:!1})},278:function(t,e,o){var content=o(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("11dd1a25",content,!0,{sourceMap:!1})},280:function(t,e,o){"use strict";var r=o(2),n=o(66).find,c=o(123),l="find",d=!0;l in[]&&Array(1).find((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},288:function(t,e,o){var content=o(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("7ba4b6e0",content,!0,{sourceMap:!1})},289:function(t,e,o){var content=o(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("7e18d856",content,!0,{sourceMap:!1})},290:function(t,e,o){"use strict";o(274)},291:function(t,e,o){var r=o(21)(!1);r.push([t.i,".player[data-v-2f3e36c5]{width:100%;min-height:500px}.player[data-v-2f3e36c5],.youtube-container[data-v-2f3e36c5]{height:100%}",""]),t.exports=r},292:function(t,e,o){"use strict";o(275)},293:function(t,e,o){var r=o(21)(!1);r.push([t.i,".image-asset-container[data-v-7c2b6c74]{height:100%;background-color:#000}.image[data-v-7c2b6c74]{width:100%;height:100%;-o-object-fit:contain;object-fit:contain}",""]),t.exports=r},294:function(t,e,o){"use strict";o(276)},295:function(t,e,o){var r=o(21)(!1);r.push([t.i,".soundcloud-container[data-v-621f904f]{width:100%;height:100%}",""]),t.exports=r},296:function(t,e,o){"use strict";o(277)},297:function(t,e,o){var r=o(21)(!1);r.push([t.i,".sketchfab-container[data-v-2dc86488]{width:100%;height:100%}",""]),t.exports=r},298:function(t,e,o){"use strict";o(278)},299:function(t,e,o){var r=o(21)(!1);r.push([t.i,".sketchfab-embed-wrapper,.sketchfab-embed-wrapper iframe{width:100%;height:100%}.sketchfab-embed-wrapper p{display:none}",""]),t.exports=r},300:function(t,e,o){var content=o(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("20b5d17a",content,!0,{sourceMap:!1})},301:function(t,e,o){var content=o(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("097b0a10",content,!0,{sourceMap:!1})},302:function(t,e,o){var content=o(336);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("210b85be",content,!0,{sourceMap:!1})},303:function(t,e,o){var content=o(338);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("6f703985",content,!0,{sourceMap:!1})},304:function(t,e,o){var content=o(340);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("413fc2d7",content,!0,{sourceMap:!1})},312:function(t,e,o){"use strict";o.r(e);var r={name:"YouTube",props:{youtubeID:{type:String,default:function(){return"Lhu7zb1hers"}}},computed:{youtubeSourceURL:function(){return"https://www.youtube.com/embed/".concat(this.youtubeID)}}},n=(o(290),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"youtube-container"},[o("iframe",{staticClass:"player",attrs:{src:t.youtubeSourceURL,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,"2f3e36c5",null);e.default=component.exports},313:function(t,e,o){"use strict";o.r(e);var r={name:"ImageAsset",props:{src:{type:String,default:function(){return"https://shared-vps.compositecomputer.club/media/images/system/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2021-02-01_003939.png"}}}},n=(o(292),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"image-asset-container"},[o("img",{staticClass:"image",attrs:{src:t.src,loading:"lazy"}})])}),[],!1,null,"7c2b6c74",null);e.default=component.exports},314:function(t,e,o){"use strict";o.r(e);var r={name:"SoundCloud",props:{soundcloudEmbedHTML:{type:String,default:function(){return'<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34019569&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/the-bugle" title="The Bugle" target="_blank" style="color: #cccccc; text-decoration: none;">The Bugle</a> · <a href="https://soundcloud.com/the-bugle/bugle-179-playas-gon-play" title="Bugle 179 - Playas gon play" target="_blank" style="color: #cccccc; text-decoration: none;">Bugle 179 - Playas gon play</a></div>'}}}},n=(o(294),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"soundcloud-container",domProps:{innerHTML:t._s(t.soundcloudEmbedHTML)}})}),[],!1,null,"621f904f",null);e.default=component.exports},315:function(t,e,o){"use strict";o.r(e);var r={name:"Sketchfab",props:{sketchfabEmbedHTML:{type:String,default:function(){return'<div class="sketchfab-embed-wrapper"> <iframe title="GLOCK" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/4a92e03e98ea42b58a56a8235cee8ddd/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/glock-4a92e03e98ea42b58a56a8235cee8ddd?utm_medium=embed&utm_campaign=share-popup&utm_content=4a92e03e98ea42b58a56a8235cee8ddd" target="_blank" style="font-weight: bold; color: #1CAAD9;"> GLOCK </a> by <a href="https://sketchfab.com/h1ggs?utm_medium=embed&utm_campaign=share-popup&utm_content=4a92e03e98ea42b58a56a8235cee8ddd" target="_blank" style="font-weight: bold; color: #1CAAD9;"> h1ggs </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=4a92e03e98ea42b58a56a8235cee8ddd" target="_blank" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>'}}}},n=(o(296),o(298),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"sketchfab-container",domProps:{innerHTML:t._s(t.sketchfabEmbedHTML)}})}),[],!1,null,"2dc86488",null);e.default=component.exports},327:function(t,e,o){"use strict";o(288)},328:function(t,e,o){var r=o(21)(!1);r.push([t.i,".favorite[data-v-26cec9a9]{display:flex;align-items:center}#favo_true[data-v-26cec9a9]{pointer-events:none;opacity:1;cursor:auto}#favo_false[data-v-26cec9a9]{cursor:pointer}.farHeart[data-v-26cec9a9]{cursor:pointer}.farHeart[data-v-26cec9a9],.fasHeart[data-v-26cec9a9]{width:30px;height:auto;opacity:.4}.farHeart[data-v-26cec9a9]:hover{opacity:.6}.fa_num[data-v-26cec9a9]{font-size:30px;margin-left:10px;padding-bottom:3px;opacity:.4}",""]),t.exports=r},329:function(t,e,o){"use strict";o(289)},330:function(t,e,o){var r=o(21)(!1);r.push([t.i,".download_button[data-v-cec911ce]{border-radius:10px;border:2px solid #777;background-color:#fff;width:100%;height:50px;text-align:center;cursor:pointer}.download_link[data-v-cec911ce]{display:block;color:#000;font-size:18px;font-weight:700;text-decoration:none;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.download_link #fa[data-v-cec911ce]{margin-right:10px}.download_link[data-v-cec911ce]:hover{color:#fff}.download_button[data-v-cec911ce]:hover{background-color:#777}",""]),t.exports=r},331:function(t,e,o){"use strict";o(300)},332:function(t,e,o){var r=o(21)(!1);r.push([t.i,".container[data-v-9dcd35a0],.wrapper[data-v-9dcd35a0]{height:100%}.wrapper[data-v-9dcd35a0]{display:flex;flex-direction:column;justify-content:center;align-items:center}.title[data-v-9dcd35a0]{text-align:center}",""]),t.exports=r},333:function(t,e,o){"use strict";o(301)},334:function(t,e,o){var r=o(21)(!1);r.push([t.i,".hooper{height:100%!important}.hooper-next svg,.hooper-prev svg{width:45px;height:45px;fill:rgba(0,0,0,.5);background-color:hsla(0,0%,100%,.2)}.hooper-next svg:hover,.hooper-prev svg:hover{background-color:hsla(0,0%,100%,.5)}",""]),t.exports=r},335:function(t,e,o){"use strict";o(302)},336:function(t,e,o){var r=o(21)(!1);r.push([t.i,".tag-list-container[data-v-436bfa08]{display:flex;flex-direction:row;flex-wrap:wrap}.tag-container[data-v-436bfa08]{margin-right:10px;margin-bottom:10px}",""]),t.exports=r},337:function(t,e,o){"use strict";o(303)},338:function(t,e,o){var r=o(21)(!1);r.push([t.i,".work-link[data-v-af59b21e]{display:flex;margin-bottom:20px}.icon[data-v-af59b21e]{margin-right:.5rem;color:#000}.bold[data-v-af59b21e]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;width:80%}",""]),t.exports=r},339:function(t,e,o){"use strict";o(304)},340:function(t,e,o){var r=o(21)(!1);r.push([t.i,".modal-wrapper[data-v-558da4a1]{position:fixed;justify-content:center;display:none;align-items:center;text-align:center;width:100%;height:100%;top:0;left:0;z-index:400;background-color:rgba(0,0,0,.86667);opacity:0}.open[data-v-558da4a1]{display:flex;opacity:1}.link[data-v-558da4a1]{font-weight:700}.modal-background-click-panel[data-v-558da4a1]{position:absolute;top:0;left:0;width:100vw;height:100vh;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.modal-container[data-v-558da4a1]{color:#000;background-color:#fff;margin:0 2rem;padding:1rem 3rem;border-radius:15px;max-width:800px;width:80vw;z-index:10}.description[data-v-558da4a1]{margin-bottom:2rem}",""]),t.exports=r},348:function(t,e,o){"use strict";o.r(e);var r={name:"WorkLink",props:{to:{type:String,require:!0}}},n=(o(337),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{attrs:{href:t.to,target:"_blank"}},[o("div",{staticClass:"work-link"},[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:"link"}}),t._v(" "),o("div",{staticClass:"bold"},[t._v(t._s(t.to))])],1)])}),[],!1,null,"af59b21e",null);e.default=component.exports},354:function(t,e,o){var content=o(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("eab16978",content,!0,{sourceMap:!1})},355:function(t,e,o){var content=o(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("3426d546",content,!0,{sourceMap:!1})},363:function(t,e,o){"use strict";o.r(e);o(270),o(56),o(188),o(280),o(13),o(68),o(125);var r="favorited_work_ids",n={props:{work_id:{type:Number,require:!0},goods:{type:Number,require:!0}},data:function(){return{likeSum:void 0,likedFlag:!1}},created:function(){this.likedFlag=this.hasFavorited(),this.$nextTick((function(){this.likeSum=this.goods}))},methods:{hasFavorited:function(){var t=this,e=localStorage.getItem(r);return null!==e&&!!e.split(",").find((function(e){return e===t.work_id.toString()}))},setFavoritedToLocalstorage:function(){var t=this,e=localStorage.getItem(r),o=[];null!==e&&(o=e.split(",")),o.find((function(e){return e===t.work_id}))||(o.push(this.work_id.toString()),localStorage.setItem(r,o.join(",")))},submitFavo:function(){var t=this;console.log(this.likedFlag);this.$axios.post("works/"+String(this.work_id)+"/goods/",{goods:1}).then((function(e){t.likeSum=e.data.goods,t.setFavoritedToLocalstorage()})).catch((function(t){alert(t),console.error(t)})),this.likedFlag=!0}}},c=(o(327),o(12)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"favorite"},[o("div",{attrs:{id:t.likedFlag?"favo_true":"likeFlag"},on:{click:t.submitFavo}},[t.likedFlag?t._e():o("font-awesome-icon",{staticClass:"farHeart",attrs:{icon:["far","heart"]}}),t._v(" "),t.likedFlag?o("font-awesome-icon",{staticClass:"fasHeart",attrs:{icon:["fas","heart"]}}):t._e()],1),t._v(" "),o("div",{staticClass:"fa_num"},[t._v(t._s(t.likeSum))])])}),[],!1,null,"26cec9a9",null);e.default=component.exports},364:function(t,e,o){"use strict";o.r(e);var r=o(352),n=(o(353),o(312)),c=o(313),l=o(314),d=o(315),f={name:"Viewer",data:function(){return{options:{itemsToShow:1,wheelControl:!1,centerMode:!0,infiniteScroll:!0}}},components:{Hooper:r.a,Slide:r.d,HooperPagination:r.c,HooperNavigation:r.b,YouTube:n.default,ImageAsset:c.default,SoundCloud:l.default,Sketchfab:d.default},props:{mediaAssets:{type:Array,default:function(){return[]}}},created:function(){console.debug(this.mediaAssets)}},m=(o(331),o(333),o(12)),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container"},[o("hooper",{staticStyle:{height:"auto",width:"100%"},attrs:{settings:t.options}},[t._l(t.mediaAssets,(function(e){return o("slide",{key:e.id,staticStyle:{height:"100%",width:"100%"}},[null!==e.youtube_video_id?o("you-tube",{attrs:{youtubeID:e.youtube_video_id}}):t._e(),t._v(" "),null!==e.image?o("image-asset",{attrs:{src:e.image}}):t._e(),t._v(" "),""!==e.soundcloud_embed_html?o("sound-cloud",{attrs:{soundcloudEmbedHTML:e.soundcloud_embed_html}}):t._e(),t._v(" "),""!==e.sketchfab_embed_html?o("sketchfab",{attrs:{sketchfabEmbedHTML:e.sketchfab_embed_html}}):t._e()],1)})),t._v(" "),0===t.mediaAssets.length?o("slide",[o("div",{staticClass:"wrapper"},[o("div",{staticClass:"title"},[t._v("アセットがありません")])])]):t._e(),t._v(" "),o("hooper-pagination",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"}),t._v(" "),o("hooper-navigation",{attrs:{slot:"hooper-addons"},slot:"hooper-addons"})],2)],1)}),[],!1,null,"9dcd35a0",null);e.default=component.exports},365:function(t,e,o){"use strict";o.r(e);var r={name:"TagList",components:{Tag:o(267).default},props:{tags:{type:Array,require:!0,default:function(){return[{id:1,name:"Hack",color:"#FF0000"}]}}}},n=(o(335),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tag-list-container"},t._l(t.tags,(function(t){return o("div",{key:t.name,staticClass:"tag-container"},[o("tag",{attrs:{tag:t,selectable:!1,small:""}})],1)})),0)}),[],!1,null,"436bfa08",null);e.default=component.exports;installComponents(component,{Tag:o(267).default})},366:function(t,e,o){"use strict";o.r(e);var r={name:"DownloadConfirmModal",model:{prop:"open",event:"setOpen"},computed:{downloadURL:function(){return"https://shared-vps-oc2022.compositecomputer.club/api/v1/works/".concat(this.workID,"/download")}},props:{open:{type:Boolean,default:!1},workID:{type:String,default:"1"}}},n=(o(339),o(12)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"modal-wrapper",class:{open:t.open}},[o("div",{staticClass:"modal-background-click-panel",on:{click:function(e){return t.$emit("setOpen",!1)}}}),t._v(" "),o("div",{staticClass:"modal-container"},[o("h1",{staticClass:"title"},[t._v("ダウンロードしても構いませんか？")]),t._v(" "),o("h3",{staticClass:"description"},[t._v("\n      Google Driveから、.zip圧縮ファイルがダウンロードされます。\n    ")]),t._v(" "),o("a",{staticClass:"link",attrs:{href:t.downloadURL}},[t._v("ダウンロードする")])])])}),[],!1,null,"558da4a1",null);e.default=component.exports},370:function(t,e,o){"use strict";o.r(e);o(329);var r=o(12),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"download_button",on:{click:function(e){return t.$emit("click")}}},[o("div",{staticClass:"download_link"},[o("font-awesome-icon",{attrs:{icon:["fas","file-download"],id:"fa"}}),t._v("\n    ZIPダウンロード\n  ")],1)])}),[],!1,null,"cec911ce",null);e.default=component.exports},378:function(t,e,o){"use strict";o(354)},379:function(t,e,o){var r=o(21)(!1);r.push([t.i,".header_top[data-v-33bc3c56]{display:flex;align-items:center;justify-content:space-between;min-height:70px;height:auto}.title[data-v-33bc3c56]{align-self:center;font-size:30px;font-weight:700}.download[data-v-33bc3c56]{font-size:20px}.header_mid[data-v-33bc3c56]{display:flex;flex-wrap:wrap;margin-bottom:30px;height:auto;width:100%}.viewer[data-v-33bc3c56]{width:100%;height:37vw;max-height:700px}.work_info[data-v-33bc3c56]{margin-top:20px;margin-left:20px;width:100%;height:auto}.member_title[data-v-33bc3c56]{font-size:20px;margin-top:20px}.member[data-v-33bc3c56]{font-size:17px;margin-top:5px;margin-bottom:20px}.tag_title[data-v-33bc3c56]{margin-bottom:15px;font-size:20px}.created_at[data-v-33bc3c56]{font-size:20px;margin-bottom:20px}.header_bottom[data-v-33bc3c56]{padding-left:7%}.description[data-v-33bc3c56]::-moz-selection,.member[data-v-33bc3c56]::-moz-selection{background:rgba(69,101,134,.23922)}.description[data-v-33bc3c56]::selection,.member[data-v-33bc3c56]::selection{background:rgba(69,101,134,.23922)}.created_at[data-v-33bc3c56],.member_title[data-v-33bc3c56],.tag_title[data-v-33bc3c56],.tags[data-v-33bc3c56],.title[data-v-33bc3c56]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media screen and (min-width:1300px){.viewer[data-v-33bc3c56]{width:80%}.work_info[data-v-33bc3c56]{margin-left:0;padding-left:20px;width:20%;height:auto}}@media screen and (max-width:1300px){.viewer[data-v-33bc3c56]{width:100%;height:60vw}.work_info[data-v-33bc3c56]{margin-top:20px;width:100%;height:auto;margin-right:20px}}@media screen and (max-width:481px){.viewer[data-v-33bc3c56]{width:100%}}.viewer_mock[data-v-33bc3c56]{background-color:#00f}",""]),t.exports=r},380:function(t,e,o){"use strict";o(355)},381:function(t,e,o){var r=o(21)(!1);r.push([t.i,".description details{margin:10px 0}.description p{margin-left:10px}.description ul{margin-left:30px}",""]),t.exports=r},393:function(t,e,o){"use strict";o.r(e);var r,n=o(18),c=(o(270),o(43),o(363)),l=o(370),d=o(364),f=o(365),m=o(348),h=o(366),v=(r={components:{Favorite:c.default,DownloadButton:l.default,Viewer:d.default,TagList:f.default,WorkLink:m.default,DownloadConfirmModal:h.default},data:function(){return{style:!0}},props:{title:{type:String,required:!0,default:"hoge"},team:{type:Object,required:!0},tags:{type:Array,required:!0,default:[{id:0,name:"hoge1",color:"#234"},{id:1,name:"hoge2",color:"#432"},{id:2,name:"hoge2",color:"#234"},{id:3,name:"hoge3",color:"#432"},{id:4,name:"hoge1",color:"#234"},{id:5,name:"hoge2",color:"#432"},{id:6,name:"hoge2",color:"#234"},{id:7,name:"hoge3",color:"#432"}]},description:{type:String,required:!0,default:"enpty"},card_image:{type:String,required:!0,default:"enpty"},work_id:{type:Number,require:!0},work_link:{type:String,required:!1},download_link:{type:String,required:!0,default:null},goods:{type:Number,required:!0,default:0},media_assets:{type:Array,required:!0}}},Object(n.a)(r,"data",(function(){return{isDownloadConfirmOpen:!1}})),Object(n.a)(r,"methods",{zeroPadding:function(t,e){return("0000000000"+t).slice(-e)},openDownloadConfirmModal:function(){this.isDownloadConfirmOpen=!0}}),r),_=(o(378),o(380),o(12)),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"header_top"},[o("div",{staticClass:"header_left"},[o("span",{staticClass:"title"},[t._v(t._s(t.title))])]),t._v(" "),o("div",{staticClass:"l"},[o("favorite",{staticClass:"favorite",attrs:{work_id:t.work_id,goods:t.goods}})],1)]),t._v(" "),o("div",{staticClass:"header_mid"},[o("div",{staticClass:"viewer"},[o("viewer",{attrs:{mediaAssets:t.media_assets}})],1),t._v(" "),o("div",{staticClass:"work_info"},[null!=t.download_link?o("download-button",{staticClass:"download",on:{click:t.openDownloadConfirmModal}}):t._e(),t._v(" "),o("download-confirm-modal",{attrs:{workID:t.work_id},model:{value:t.isDownloadConfirmOpen,callback:function(e){t.isDownloadConfirmOpen=e},expression:"isDownloadConfirmOpen"}}),t._v(" "),o("div",{staticClass:"member_title"},[o("font-awesome-icon",{attrs:{icon:["fas","users"]}}),t._v(" "),o("span",[t._v("制作者")])],1),t._v(" "),o("div",{staticClass:"member"},[t._v("\n        "+t._s(t.team.name)+"\n      ")]),t._v(" "),t.work_link?o("work-link",{attrs:{to:t.work_link}}):t._e(),t._v(" "),o("div",{staticClass:"tag_title"},[o("font-awesome-icon",{attrs:{icon:["fas","tags"]}}),t._v(" "),o("span",[t._v("タグ")])],1),t._v(" "),o("tag-list",{staticClass:"tags",attrs:{tags:t.tags}})],1)]),t._v(" "),o("div",{staticClass:"header_bottom"},[o("div",{staticClass:"description",domProps:{innerHTML:t._s(t.description)}})])])}),[],!1,null,"33bc3c56",null);e.default=component.exports;installComponents(component,{WorkLink:o(348).default})}}]);
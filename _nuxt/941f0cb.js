(window.webpackJsonp=window.webpackJsonp||[]).push([[26,10],{265:function(t,e,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("3329ae12",content,!0,{sourceMap:!1})},266:function(t,e,n){"use strict";n.r(e);n(63);var l={name:"Tag",model:{event:"select",prop:"selected"},props:{tag:{type:Object,require:!0,default:function(){return{id:1,name:"Hack",color:"#FF0000"}}},deletable:{type:Boolean,require:!1,default:function(){return!1}},small:{type:Boolean,require:!1,default:function(){return!1}},extraSmall:{type:Boolean,require:!1,default:function(){return!1}},outline:{type:Boolean,require:!1,default:function(){return!1}}},computed:{style:function(){return"background-color: ".concat(this.tag.color,";")},outlineStyle:function(){return"color: ".concat(this.tag.color,"; border: solid 1.5px ").concat(this.tag.color)}}},o=(n(267),n(12)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tag",class:{selected:t.selected,deletable:t.deletable,small:t.small,"extra-small":t.extraSmall},style:t.outline?t.outlineStyle:t.style},[n("div",{staticClass:"bold"},[t._v("\n\t\t"+t._s(t.tag.name)+"\n\t")]),t._v(" "),t.deletable?n("font-awesome-icon",{staticClass:"delete-button",attrs:{icon:"times"},on:{click:function(e){return t.$emit("delete",t.tag)}}}):t._e()],1)}),[],!1,null,"b2ce6a06",null);e.default=component.exports},267:function(t,e,n){"use strict";n(265)},268:function(t,e,n){var l=n(21)(!1);l.push([t.i,".tag[data-v-b2ce6a06]{display:flex;flex-direction:row;flex-wrap:nowrap;white-space:nowrap;align-items:center;padding:5px 15px;font-size:1rem;color:#fff;border-radius:15.5px}.extra-small[data-v-b2ce6a06],.small[data-v-b2ce6a06]{font-size:12px}.extra-small[data-v-b2ce6a06]{padding:3px 12px}.delete-button[data-v-b2ce6a06]{vertical-align:middle;margin-left:8px;font-size:12px;cursor:pointer}.selected[data-v-b2ce6a06]{opacity:1}",""]),t.exports=l},280:function(t,e,n){var content=n(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("7587c567",content,!0,{sourceMap:!1})},316:function(t,e,n){"use strict";n(280)},317:function(t,e,n){var l=n(21)(!1);l.push([t.i,".button[data-v-5f76307a]{opacity:.4}.enabled[data-v-5f76307a]{cursor:pointer;opacity:1}",""]),t.exports=l},357:function(t,e,n){"use strict";n.r(e);n(41);var l={name:"TagButton",props:{name:{type:String,default:function(){return""}},color:{type:String,default:function(){return"#000000"}},small:{type:Boolean,default:function(){return!1}},enabled:{type:Boolean,default:function(){return!1}}},computed:{tagData:function(){return{name:this.name,color:this.color}}}},o=(n(316),n(12)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button",class:{enabled:t.enabled},on:{click:function(e){return t.$emit("click")}}},[n("Tag",{attrs:{tag:t.tagData,small:t.small}})],1)}),[],!1,null,"5f76307a",null);e.default=component.exports;installComponents(component,{Tag:n(266).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{266:function(e,t,l){var content=l(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(22).default)("d0d6f388",content,!0,{sourceMap:!1})},267:function(e,t,l){"use strict";l.r(t);l(63);var n={name:"Tag",model:{event:"select",prop:"selected"},props:{tag:{type:Object,require:!0,default:function(){return{id:1,name:"Hack",color:"#FF0000"}}},deletable:{type:Boolean,require:!1,default:function(){return!1}},small:{type:Boolean,require:!1,default:function(){return!1}},extraSmall:{type:Boolean,require:!1,default:function(){return!1}},outline:{type:Boolean,require:!1,default:function(){return!1}}},computed:{style:function(){return"background-color: ".concat(this.tag.color,";")},outlineStyle:function(){return"color: ".concat(this.tag.color,"; border: solid 1.5px ").concat(this.tag.color)}}},o=(l(268),l(12)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"tag",class:{deletable:e.deletable,small:e.small,"extra-small":e.extraSmall},style:e.outline?e.outlineStyle:e.style},[l("div",{staticClass:"bold"},[e._v("\n    "+e._s(e.tag.name)+"\n  ")]),e._v(" "),e.deletable?l("font-awesome-icon",{staticClass:"delete-button",attrs:{icon:"times"},on:{click:function(t){return e.$emit("delete",e.tag)}}}):e._e()],1)}),[],!1,null,"305a312d",null);t.default=component.exports},268:function(e,t,l){"use strict";l(266)},269:function(e,t,l){var n=l(21)(!1);n.push([e.i,".tag[data-v-305a312d]{display:flex;flex-direction:row;flex-wrap:nowrap;white-space:nowrap;align-items:center;padding:5px 15px;font-size:1rem;color:#fff;border-radius:15.5px}.extra-small[data-v-305a312d],.small[data-v-305a312d]{font-size:12px}.extra-small[data-v-305a312d]{padding:3px 12px}.delete-button[data-v-305a312d]{vertical-align:middle;margin-left:8px;font-size:12px;cursor:pointer}.selected[data-v-305a312d]{opacity:1}",""]),e.exports=n}}]);
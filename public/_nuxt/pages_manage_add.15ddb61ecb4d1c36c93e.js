webpackJsonp([4],{"0awG":function(t,e,n){"use strict";e.a={name:"UE",data:function(){return{editor:null}},props:{defaultMsg:{type:String},config:{type:Object}},beforeCreate:function(){1},mounted:function(){var t=this;this.editor=UE.getEditor("editor",this.config),this.editor.addListener("ready",function(){t.editor.setContent(t.defaultMsg)})},methods:{getUEContent:function(){return this.editor.getContent()}},destroyed:function(){this.editor.destroy()}}},"8k5R":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:16}},[n("div",{staticClass:"grid-content"},[n("el-input",{staticClass:"mb-2",attrs:{placeholder:"请输入内容"}},[n("template",{slot:"prepend"},[t._v("标题")])],2),n("ueditor",{ref:"ue",attrs:{defaultMsg:t.defaultMsg,config:t.config}})],1)]),n("el-col",{attrs:{span:8}},[n("div",{staticClass:"grid-content"},[n("el-dropdown",{attrs:{"split-button":"",type:"primary"}},[t._v("\n        添加分类\n        "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[t._v("黄金糕")]),n("el-dropdown-item",[t._v("狮子头")]),n("el-dropdown-item",[t._v("螺蛳粉")]),n("el-dropdown-item",[t._v("双皮奶")]),n("el-dropdown-item",[t._v("蚵仔煎")])],1)],1)],1)])],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};e.a=o},AoZd:function(t,e,n){"use strict";var i=function(){var t=this.$createElement;this._self._c;return this._m(0)};i._withStripped=!0;var o={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("script",{attrs:{id:"editor",type:"text/plain"}})])}]};e.a=o},HSaJ:function(t,e,n){"use strict";var i=n("0awG"),o=n("AoZd"),r=n("X4nt")(i.a,o.a,!1,null,null,null);r.options.__file="components\\ueditor.vue",e.a=r.exports},eIOb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("no4a"),o=n("8k5R"),r=n("X4nt")(i.a,o.a,!1,null,null,null);r.options.__file="pages\\manage\\add.vue",e.default=r.exports},no4a:function(t,e,n){"use strict";var i=n("HSaJ");e.a={components:{ueditor:i.a},data:function(){return{defaultMsg:"...",config:{initialFrameWidth:null,initialFrameHeight:350}}},methods:{getUEContent:function(){var t=this.$refs.ue.getUEContent();this.$notify({title:"获取成功，可在控制台查看！",message:t,type:"success"}),console.log(t)}}}}});
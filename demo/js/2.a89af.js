webpackJsonp([2],{249:function(t,e,o){o(337);var n=o(0)(o(339),o(340),"data-v-4b9c5611",null);t.exports=n.exports},337:function(t,e,o){var n=o(338);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o(226)("536ffe79",n,!0)},338:function(t,e,o){e=t.exports=o(54)(),e.push([t.i,".tooltip-container[data-v-4b9c5611]{position:relative;width:140px;height:100px;margin:4rem 2rem}.tooltip-container div[data-v-4b9c5611]{position:absolute;width:4.5rem;height:1.8rem;line-height:1.8rem;font-size:1.3rem;text-align:center;border-radius:5px;cursor:pointer}.tt-top[data-v-4b9c5611]{top:0;left:50%;transform:translateX(-50%)}.tt-right[data-v-4b9c5611]{right:0;top:50%;transform:translateY(-50%)}.tt-bottom[data-v-4b9c5611]{bottom:0;left:50%;transform:translateX(-50%)}.tt-left[data-v-4b9c5611]{left:0;top:50%;transform:translateY(-50%)}","",{version:3,sources:["/./example/views/Tooltip.vue"],names:[],mappings:"AACA,oCACE,kBAAmB,AACnB,YAAa,AACb,aAAc,AACd,gBAAkB,CACnB,AACD,wCACE,kBAAmB,AACnB,aAAc,AACd,cAAe,AACf,mBAAoB,AACpB,iBAAkB,AAClB,kBAAmB,AACnB,kBAAmB,AACnB,cAAgB,CACjB,AACD,yBACE,MAAO,AACP,SAAU,AACV,0BAA4B,CAC7B,AACD,2BACE,QAAS,AACT,QAAS,AACT,0BAA4B,CAC7B,AACD,4BACE,SAAU,AACV,SAAU,AACV,0BAA4B,CAC7B,AACD,0BACE,OAAQ,AACR,QAAS,AACT,0BAA4B,CAC7B",file:"Tooltip.vue",sourcesContent:["\n.tooltip-container[data-v-4b9c5611] {\n  position: relative;\n  width: 140px;\n  height: 100px;\n  margin: 4rem 2rem;\n}\n.tooltip-container div[data-v-4b9c5611] {\n  position: absolute;\n  width: 4.5rem;\n  height: 1.8rem;\n  line-height: 1.8rem;\n  font-size: 1.3rem;\n  text-align: center;\n  border-radius: 5px;\n  cursor: pointer;\n}\n.tt-top[data-v-4b9c5611] {\n  top: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.tt-right[data-v-4b9c5611] {\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.tt-bottom[data-v-4b9c5611] {\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.tt-left[data-v-4b9c5611] {\n  left: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:"webpack://"}])},339:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"tooltips"}},340:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("article",[o("h1",[t._v("提示框 Tooltip")]),t._v(" "),o("p",[t._v("\n    tooltip 用法类似元素的 title 属性，所以做成了指令而不是组件\n  ")]),t._v(" "),o("h2",[t._v("例子")]),t._v(" "),o("h3",[t._v("四向")]),t._v(" "),o("div",{staticClass:"tooltip-container"},[o("div",{directives:[{name:"tooltip",rawName:"v-tooltip:top",value:{text:"提示在上边"},expression:"{ text: '提示在上边' }",arg:"top"}],staticClass:"tt-top green white-text z-depth-1"},[t._v("上")]),t._v(" "),o("div",{directives:[{name:"tooltip",rawName:"v-tooltip:right",value:{text:"提示在右边"},expression:"{ text: '提示在右边' }",arg:"right"}],staticClass:"tt-right green white-text z-depth-1"},[t._v("右")]),t._v(" "),o("div",{directives:[{name:"tooltip",rawName:"v-tooltip:bottom",value:{text:"提示在下边"},expression:"{ text: '提示在下边' }",arg:"bottom"}],staticClass:"tt-bottom green white-text z-depth-1"},[t._v("下")]),t._v(" "),o("div",{directives:[{name:"tooltip",rawName:"v-tooltip:left",value:{text:"提示在左边"},expression:"{ text: '提示在左边' }",arg:"left"}],staticClass:"tt-left green white-text z-depth-1"},[t._v("左")])]),t._v(" "),o("h3",[t._v("按钮")]),t._v(" "),o("r-btn",{directives:[{name:"tooltip",rawName:"v-tooltip:right",value:{text:"我真的是个按钮"},expression:"{ text: '我真的是个按钮' }",arg:"right"}],staticClass:"grey white-text"},[t._v("我是按钮")]),t._v(" "),o("h2",[t._v("API")]),t._v(" "),o("h3",[t._v("指令说明")]),t._v(" "),t._m(0),t._v(" "),o("Markup",{attrs:{lang:"html"}},[t._v('\n    <span class="green white-text" v-tooltip:top="{ text: \'提示在上边\' }">上</span>\n    <r-btn class="grey white-text" v-tooltip:right="{ text: \'我真的是个按钮\' }">我是按钮</r-btn>\n  ')])],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("table",{staticClass:"bordered responsive-table"},[o("thead",[o("th",[t._v("指令")]),t._v(" "),o("th",[t._v("说明")])]),t._v(" "),o("tbody",[o("tr",[o("td",[t._v("v-tooltip:top=\"{ text: '提示在上边' }\"")]),t._v(" "),o("td",[t._v("指令的参数 arg (即 top) 对应 tooltip 的显示位置")])]),t._v(" "),o("tr",[o("td",[t._v("v-tooltip:top=\"{ text: '提示在上边' }\"")]),t._v(" "),o("td",[t._v("指令的 value 对象的 text 为 tooltip 的展示内容")])])])])}]}}});
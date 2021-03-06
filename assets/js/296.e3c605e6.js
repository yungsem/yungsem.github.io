(window.webpackJsonp=window.webpackJsonp||[]).push([[296],{540:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"选择器（selector）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择器（selector）","aria-hidden":"true"}},[t._v("#")]),t._v(" 选择器（Selector）")]),t._v(" "),e("h2",{attrs:{id:"选择器是什么"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择器是什么","aria-hidden":"true"}},[t._v("#")]),t._v(" 选择器是什么")]),t._v(" "),e("p",[t._v("选择器（Selector）可以理解为 Channel 的注册中心。")]),t._v(" "),e("p",[t._v("Channel 需要注册到 Selector 上，并告知 Selector 要关心本 Channel 里发生的什么事件。")]),t._v(" "),e("p",[t._v("Channel 和 Selector 的注册关系使用 SelectionKey 对象表示。")]),t._v(" "),e("p",[t._v("注册方法如下：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Registers this channel with the given selector, returning a selection key")]),t._v("\nSelectionKey "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Selector sel"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" ops"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("ops 表示 Selector 需要关心的事件。在 SelectionKey 中定义了四种类型的事件：")]),t._v(" "),e("ul",[e("li",[t._v("OP_ACCEPT")]),t._v(" "),e("li",[t._v("OP_CONNECT")]),t._v(" "),e("li",[t._v("OP_READ")]),t._v(" "),e("li",[t._v("OP_WRITE")])]),t._v(" "),e("h2",{attrs:{id:"selector"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#selector","aria-hidden":"true"}},[t._v("#")]),t._v(" Selector")]),t._v(" "),e("p",[t._v("创建 Selector ：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Opens a selector")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" Selector\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("查看有没有自己关心的事件发生：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Selects a set of keys whose corresponding channels are ready for I/O operations")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果没有关心的事件发生，则阻塞等待，直到至少有一个自己关心的事件发生，才返回")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Selects a set of keys whose corresponding channels are ready for I/O operations")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果没有关心的事件发生，则阻塞等待，直到至少有一个自己关心的事件发生，或者等待时间达到 timeout 毫秒了，才返回")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" timeout"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Selects a set of keys whose corresponding channels are ready for I/O operations")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 非阻塞，不管有没有关心的事件发生，立即返回")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectNow")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("获取发生自己关心事件的 SelectionKey ：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns this selector's selected-key set")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" Set"),e("span",{pre:!0,attrs:{class:"token generics function"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("SelectionKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectedKeys")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"selectionkey"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#selectionkey","aria-hidden":"true"}},[t._v("#")]),t._v(" SelectionKey")]),t._v(" "),e("p",[t._v("SelectionKey 表示 Channel 和 Selector 的绑定关系。")]),t._v(" "),e("p",[t._v("获取 Channel ：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns the channel for which this key was created")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" SelectableChannel "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("channel")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("获取 Selector ：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Returns the selector for which this key was created")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" Selector\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("selector")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("判断发生了什么事件：")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Tests whether this key's channel is ready to accept a new socket connection")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isAcceptable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Tests whether this key's channel has either finished, or failed to finish, its socket-connection operation")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isConnectable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Tests whether this key's channel is ready for reading")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isReadable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Tests whether this key's channel is ready for writing")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("boolean")]),t._v("\t"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("isWritable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}],!1,null,null,null);s.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{202:function(t,a,r){t.exports=r.p+"assets/img/tcp-frame-arch.069e6a98.png"},203:function(t,a,r){t.exports=r.p+"assets/img/tcp_header_format.39823be5.png"},204:function(t,a,r){t.exports=r.p+"assets/img/three-handshake.c96b4d2e.png"},444:function(t,a,r){"use strict";r.r(a);var e=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"tcp-协议入门"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-协议入门","aria-hidden":"true"}},[t._v("#")]),t._v(" TCP 协议入门")]),t._v(" "),e("h2",{attrs:{id:"报文结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#报文结构","aria-hidden":"true"}},[t._v("#")]),t._v(" 报文结构")]),t._v(" "),e("p",[t._v("如图：")]),t._v(" "),e("p",[e("img",{attrs:{src:r(202),alt:""}})]),t._v(" "),e("h2",{attrs:{id:"头部格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#头部格式","aria-hidden":"true"}},[t._v("#")]),t._v(" 头部格式")]),t._v(" "),e("h3",{attrs:{id:"示意图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示意图","aria-hidden":"true"}},[t._v("#")]),t._v(" 示意图")]),t._v(" "),e("p",[e("img",{attrs:{src:r(203),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"字段说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字段说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 字段说明")]),t._v(" "),e("ul",[e("li",[t._v("源端口：客户端进程所使用的端口号。")]),t._v(" "),e("li",[t._v("目的端口：服务端端进程所使用的端口号。")]),t._v(" "),e("li",[t._v("序列号：TCP 消息体是一条字节流，每一个字节都有一个序列号，这里的序列号是消息体第一个字节的序列号。")]),t._v(" "),e("li",[t._v("确认号：本方接收到的消息体最后一个字节的序列号加 1 ，即本方期待接收的下一个消息体第一个字节的序列号。")]),t._v(" "),e("li",[t._v("头部长度：指定头部具体的长度值。头部的长度 = 20 字节（固定的）+ 选项的长度（可变的）。")]),t._v(" "),e("li",[t._v("保留位：略。")]),t._v(" "),e("li",[t._v("CWR")]),t._v(" "),e("li",[t._v("ECE")]),t._v(" "),e("li",[t._v("URG")]),t._v(" "),e("li",[t._v("ACK")]),t._v(" "),e("li",[t._v("PSH")]),t._v(" "),e("li",[t._v("RST")]),t._v(" "),e("li",[t._v("SYN：当客户端发送第一个报文给服务端时，启用该标志位。值是一个随机的数字，称为初始序列号（ISN），第一个报文的序列号字段的值就是 ISN 。")]),t._v(" "),e("li",[t._v("FIN")])]),t._v(" "),e("h2",{attrs:{id:"三次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三次握手","aria-hidden":"true"}},[t._v("#")]),t._v(" 三次握手")]),t._v(" "),e("h3",{attrs:{id:"示意图-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示意图-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 示意图")]),t._v(" "),e("p",[e("img",{attrs:{src:r(204),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"为什么建立-tcp-连接需要三次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么建立-tcp-连接需要三次握手","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么建立 TCP 连接需要三次握手")]),t._v(" "),e("h2",{attrs:{id:"四次挥手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#四次挥手","aria-hidden":"true"}},[t._v("#")]),t._v(" 四次挥手")]),t._v(" "),e("h3",{attrs:{id:"示意图-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示意图-3","aria-hidden":"true"}},[t._v("#")]),t._v(" 示意图")]),t._v(" "),e("h3",{attrs:{id:"为什么断开-tcp-连接需要四次挥手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么断开-tcp-连接需要四次挥手","aria-hidden":"true"}},[t._v("#")]),t._v(" 为什么断开 TCP 连接需要四次挥手")])])}],s=r(0),i=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},e,!1,null,null,null);a.default=i.exports}}]);
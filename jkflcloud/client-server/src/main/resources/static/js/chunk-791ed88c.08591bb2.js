(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-791ed88c"],{"0e13":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"content",staticClass:"card-list"},[n("a-list",{attrs:{grid:{gutter:24,lg:3,md:2,sm:1,xs:1},dataSource:t.dataSource},scopedSlots:t._u([{key:"renderItem",fn:function(e){return n("a-list-item",{},[n("a-card",{attrs:{hoverable:!0},on:{click:function(n){return t.joinExam(e.id,e.date,e.elapse)}}},[n("a-card-meta",[n("div",{staticStyle:{"margin-bottom":"3px"},attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.title))]),n("div",{staticClass:"meta-content",attrs:{slot:"description"},slot:"description"},[n("p",[t._v(t._s(e.content))]),n("p",[t._v("开始时间："+t._s(e.date))])])]),n("template",{staticClass:"ant-card-actions",slot:"actions"},[n("a",[t._v("满分："+t._s(e.score)+"分")]),n("a",[t._v("限时："+t._s(e.elapse)+"分钟")])])],2)],1)}}])})],1)},o=[],r=n("39f0"),i={name:"ExamCardList",data:function(){return{description:"您可以随意点击下面的考试卡片开始一场属于您的考试",extraImage:"https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png",dataSource:[],record:{}}},methods:{joinExam:function(t,e,n){var a=new Date;if(Date.parse(e)<a&&Date.parse(e)+60*n*1e3>a)for(var o in this.record)if(t===this.record[o].examId)this.$notification.error({message:"您已参加过本场考试！不可重复参加！"});else{var r=this.$router.resolve({path:"/exam/".concat(t)});window.open(r.href,"_blank")}else this.$notification.error({message:"未在考试时间！进入考试失败！"})}},mounted:function(){var t=this;Object(r["c"])().then((function(e){console.log(e),0===e.code?t.dataSource=e.data:t.$notification.error({message:"获取考试列表失败",description:e.msg})})).catch((function(e){t.$notification.error({message:"获取考试列表失败",description:e.message})})),Object(r["f"])().then((function(e){console.log(e),0===e.code?t.record=e.data:t.$notification.error({message:"获取考试记录失败",description:e.msg})})).catch((function(e){t.$notification.error({message:"获取考试记录失败",description:e.message})}))}},c=i,s=(n("223a"),n("2877")),u=Object(s["a"])(c,a,o,!1,null,"1248a272",null);e["default"]=u.exports},"223a":function(t,e,n){"use strict";n("6ce5")},"39f0":function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return c})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return l})),n.d(e,"f",(function(){return p}));var a=n("365c"),o=n("b775");function r(){return Object(o["b"])({url:a["a"].ExamCardList,method:"get",headers:{"Content-Type":"application/json;charset=UTF-8"}})}function i(t){return Object(o["b"])({url:a["a"].ExamDetail+t,method:"get",headers:{"Content-Type":"application/json;charset=UTF-8"}})}function c(t){return Object(o["b"])({url:a["a"].recordDetail+t,method:"get",headers:{"Content-Type":"application/json;charset=UTF-8"}})}function s(t,e){return Object(o["b"])({url:a["a"].QuestionDetail+e+"/"+t,method:"get",headers:{"Content-Type":"application/json;charset=UTF-8"}})}function u(t){return Object(o["b"])({url:a["a"].SubDetail+t,method:"get",headers:{"Content-Type":"application/json;charset=UTF-8"}})}function d(t,e){return console.log(e),Object(o["b"])({url:a["a"].FinishExam+t,method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:e})}function l(t,e){return console.log(e),Object(o["b"])({url:a["a"].FinishSub+t,method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:e})}function p(){return Object(o["b"])({url:a["a"].ExamRecordList,method:"get",headers:{"Content-Type":"application/json;charset=UTF-8"}})}},"6ce5":function(t,e,n){}}]);
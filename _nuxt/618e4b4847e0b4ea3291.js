(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{197:function(t,e,r){var a=r(202);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,r(7).default)("8aa82400",a,!0,{sourceMap:!1})},198:function(t,e,r){"use strict";var a=r(2),i=r(18),s=r(21),n=r(106),o=r(57),c=r(13),p=r(58).f,u=r(76).f,l=r(12).f,d=r(199).trim,f=a.Number,_=f,m=f.prototype,v="Number"==s(r(75)(m)),g="trim"in String.prototype,b=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var r,a,i,s=(e=g?e.trim():d(e,3)).charCodeAt(0);if(43===s||45===s){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+e}for(var n,c=e.slice(2),p=0,u=c.length;p<u;p++)if((n=c.charCodeAt(p))<48||n>i)return NaN;return parseInt(c,a)}}return+e};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof f&&(v?c(function(){m.valueOf.call(r)}):"Number"!=s(r))?n(new _(b(e)),r,f):b(e)};for(var y,h=r(8)?p(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;h.length>x;x++)i(_,y=h[x])&&!i(f,y)&&l(f,y,u(_,y));f.prototype=m,m.constructor=f,r(14)(a,"Number",f)}},199:function(t,e,r){var a=r(11),i=r(20),s=r(13),n=r(200),o="["+n+"]",c=RegExp("^"+o+o+"*"),p=RegExp(o+o+"*$"),u=function(t,e,r){var i={},o=s(function(){return!!n[t]()||"​"!="​"[t]()}),c=i[t]=o?e(l):n[t];r&&(i[r]=c),a(a.P+a.F*o,"String",i)},l=u.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(c,"")),2&e&&(t=t.replace(p,"")),t};t.exports=u},200:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},201:function(t,e,r){"use strict";var a=r(197);r.n(a).a},202:function(t,e,r){(t.exports=r(6)(!1)).push([t.i,"\n.star{font-size:20px;color:#ff0\n}\n.spot{backgroud-color:#ff0\n}\n.name-text{font-size:20px;color:#534741;line-height:1.2\n}\n.map_img{width:70px\n}\n.yomi{font-size:14px;color:#534741\n}",""])},203:function(t,e,r){"use strict";r(198);var a={props:{id:{type:Number,default:0},pref:{type:String,default:""},city:{type:String,default:""},town:{type:String,default:""},town_yomi:{type:String,default:""},spot_img:{type:String,default:""},map_img:{type:String,default:""},rare:{type:Number,default:1},spot:{type:String,default:""},spot_guide:{type:String,default:""}}},i=(r(201),r(3)),s=Object(i.a)(a,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-card",[r("p",{staticClass:"card-text mb-1",attrs:{align:"right"}},[r("span",{staticClass:"star"},[t._v(t._s("★".repeat(t.rare)))]),t._v("No."+t._s(t.id))]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-9"},[r("p",{staticClass:"name-text mb-0 pb-0"},[t._v(t._s(" ".repeat((t.pref+t.city).length))),r("span",{staticClass:"yomi mb-0"},[t._v(t._s(t.town_yomi))])]),t._v(" "),r("p",{staticClass:"name-text mt-0 pt-0"},[t._v(t._s(t.pref+t.city+t.town))])]),t._v(" "),r("div",{staticClass:"col-3"},[r("b-card-img",{staticClass:"map_img",attrs:{src:t.map_img,alt:"Image",fluid:""}})],1)]),t._v(" "),r("b-card-img",{attrs:{src:t.spot_img,alt:"Image",bottom:""}}),t._v(" "),r("div",{staticClass:"spot"},[r("p",{staticClass:"card-text mb-1"},[t._v(t._s(t.spot))]),t._v(" "),r("div",{staticStyle:{"white-space":"pre-wrap",height:"100px","overflow-x":"visible","overflow-y":"scroll",border:"1px solid #aaa",padding:"10px"}},[t._v(t._s(t.spot_guide))])])],1)},[],!1,null,null,null);s.options.__file="Card.vue";e.a=s.exports},207:function(t,e,r){var a=r(224);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,r(7).default)("4fceac68",a,!0,{sourceMap:!1})},223:function(t,e,r){"use strict";var a=r(207);r.n(a).a},224:function(t,e,r){(t.exports=r(6)(!1)).push([t.i,"",""])},237:function(t,e,r){"use strict";r.r(e);r(198);var a=r(203),i=(r(107),{components:{Card:a.a},data:function(){return{id:this.$route.params.id,card:this.$store.getters.quizzes}},computed:{prev:function(){var t=this.$route.params.id;return t>0&&(t-=1),t},next:function(){var t=Number(this.$route.params.id);return t<Number(this.$store.getters.quizzes.length)&&(t+=1),t}}}),s=(r(223),r(3)),n=Object(s.a)(i,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-4"},[r("Card",{attrs:{rare:t.card[t.id].rare,id:t.card[t.id].id,pref:t.card[t.id].pref,city:t.card[t.id].city,town_yomi:t.card[t.id].town_yomi,town:t.card[t.id].town,map_img:t.card[t.id].map_img,spot:t.card[t.id].spot,spot_img:t.card[t.id].spot_img,spot_guide:t.card[t.id].spot_guide}}),t._v(" "),r("br"),t._v(" "),r("div",{attrs:{align:"center"}},[r("nuxt-link",{attrs:{to:"/collection/details/"+t.prev}},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("◀")])]),t._v("\n      |\n      "),r("nuxt-link",{attrs:{to:"/collection/details/"+t.next}},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("▶")])])],1)],1)])},[],!1,null,null,null);n.options.__file="_id.vue";e.default=n.exports}}]);
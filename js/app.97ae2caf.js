(function(t){function e(e){for(var i,s,r=e[0],c=e[1],l=e[2],d=0,u=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&u.push(o[s][0]),o[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(u.length)u.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},o={app:0},n=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var p=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"00e1":function(t,e,a){t.exports=a.p+"img/lq1.c574ae7f.jpg"},"0334":function(t,e,a){t.exports=a.p+"img/da3.b8f774d4.jpg"},1171:function(t,e,a){t.exports=a.p+"img/Spaceship.7ec49d04.jpg"},"1ac7":function(t){t.exports=JSON.parse('{"a":[{"name":"PHP","percentage":85},{"name":"HTML / SCSS","percentage":100},{"name":"JavaScript","percentage":90},{"name":"Dart","percentage":55},{"name":"C#","percentage":40},{"name":"Python","percentage":45}]}')},"20e0":function(t){t.exports=JSON.parse('{"a":[{"title":"DatingApp","slug":"dating-app","type":0,"category":"Dating App [Flutter, Django, Firebase]","tags":[6,8],"images":["da1.jpg","da2.jpg","da3.jpg","da4.jpg"],"description":"Learning new technologies will always be fun I guess. With this project I was able to learn Python\'s Django framework and improve my skills with Flutter. But not only that - I think with this project there will be more benefit than just learning new things. It is a dating app made to connect people, whom might even be able to find their love there.. My plan is to release the app on Android and later iOS - the Alpha phase is starting very soon. The future of this project is still unknown so there are no public repositories at the moment. If you are interested in becoming a tester for the app use the contact form on this page to contact me. Stay tuned! ;)"},{"title":"X-Lights","slug":"x-lights","type":0,"category":"Led Controller [Node, VueJS, C++/#]","tags":[5,4,1,2,3],"images":["xl1.jpg","xl2.jpg","xl3.jpg"],"video":"https://youtu.be/-3AohP7rNQk","videoTeaser":"xl3.jpg","description":"X-Lights is probably my largest programming project, it combines a variety of technologies to create an unique LED controller. Sound\'s simple, and to be honest, it is, but a lot of simplicity brings complexity. With X-Lights (to be renamed) you can control multiple LED strips all over the world. You can synchronize them, or let them all play their own unique show. X-Lights also supports sensors as inputs - you could use a light sensor to turn on your lights when it\'s dark, or let them glow red when your room has a certain temperature. As a programmer you can also easily create new light modes and extend existing functionality.<br><h4 class=\'project-overlay__content-description-sub-headline\'>X-Lights consists of:</h4><ul class=\'project-overlay__content-description-list\'><li class=\'project-overlay__content-description-list-item\'>A NodeJS Server running a websocket</li><li class=\'project-overlay__content-description-list-item\'>A Vue.js webapp to control the lights</li><li class=\'project-overlay__content-description-list-item\'>A Wemos D1 Mini microcontroller</li><li class=\'project-overlay__content-description-list-item\'>A small C# client that analyzes music</li></ul><br><br><a class=\'project-overlay__content-description-link\' href=\'https://github.com/m-gebhard/x-lights-demo\' target=\'_blank\'>GitHub Demo Repo</a>"},{"title":"Spacepilot","slug":"space-pilot","type":0,"category":"Android Game [Monogame]","tags":[4],"images":["Spaceship.jpg"],"description":"Spacepilot is a game for android smartphones. It\'s made with <a href=\'http://www.monogame.net/\' target=\'_blank\'>Monogame</a> for C#. You play as an pilot of a spaceship, and your objective is to destroy enemy fighters. Really simple, but highly addictive! Can you be the hero who saves the world from these evil guys? The project will be uploaded to my <a href=\'https://github.com/m-gebhard\' target=\'_blank\'>GitHub</a> account soon, stay tuned!"},{"title":"BetterKLM","slug":"better-klm","type":0,"category":"Keyboard Light Manager [C#]","tags":[4],"images":["betterklm1.jpg","betterklm2.jpg"],"description":"BetterKLM is a C# application made for controlling the led keyboard of the MSI GE60 Apache gaming laptop. The existing keyboard light manager misses some features I really wanted to have, so I built my own small application."},{"title":"Cherry Switch Breakout Board","slug":"cherry-mx-board","type":1,"category":"Breakout Board [PCB, C++]","tags":[5,7],"images":["ckm1.jpg","ckm2.jpg","ckm3.jpg"],"description":"Learning new things is great, but it get\'s even better when learning is fun!<br>And that\'s why I decided to create this little Breakout Board for 2x3 Cherry switches, illuminated by the WS2812b led\'s on my way of learning PCB design. This board can be used with any microcontroller that has at least 7 digital pins and a 5V output. Each switch has an led above, all of them can be controlled separately. The board can be used as a mini keypad, a media controller (HID), or any other application that needs switches. For the first PCB project, I think it turned out very nice, what do you think? If you\'re interested, take a look at the schematics and maybe create something own with it?<br><br><a class=\'project-overlay__content-description-link\' href=\'#\' target=\'_blank\'>Schematic + PCB (wip)</a><br><a class=\'project-overlay__content-description-link\' href=\'https://github.com/m-gebhard/cherry-mx-keypad\' target=\'_blank\'>Media Controller Repo</a>","video":"https://youtu.be/Aw7-uy8BW9g","videoTeaser":"ckm2.jpg"},{"title":"Liquicalc","slug":"liqui-calc","type":0,"category":"Liquid Calculator [Flutter]","tags":[6],"images":["lq1.jpg","lq2.jpg","lq3.jpg"],"description":"LiquiCalc was my first project that\'s realised in Flutter with Google\'s <a href=\'https://dart.dev/\' target=\'_blank\'>Dart</a> programming language. Flutter is a framework created to design Android and IOS apps easily. With LiquiCalc you can create awesome aroma recipes for your e-liquids! It includes a wide variety of pre-existing recipes, but you can also add your own ones. You\'re able to share created recipes with friends and the community. The project will be uploaded to my <a href=\'https://github.com/m-gebhard\' target=\'_blank\'>GitHub</a> account soon, stay tuned!"}]}')},"2d29":function(t,e,a){t.exports=a.p+"img/betterklm1.c6a586e7.jpg"},3766:function(t,e,a){t.exports=a.p+"img/ckm2.7d4a49d3.jpg"},"388c":function(t,e,a){t.exports=a.p+"img/betterklm2.666aecee.jpg"},"3ea0":function(t,e,a){t.exports=a.p+"img/lq3.c9f2b0e5.jpg"},"4ad9":function(t,e,a){t.exports=a.p+"img/xl3.bc0ac952.jpg"},"52a1":function(t,e,a){t.exports=a.p+"img/ckm1.d189d6c1.jpg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{ref:"app",attrs:{id:"app"}},[a("div",{directives:[{name:"scroll-spy",rawName:"v-scroll-spy"},{name:"scroll-spy-active",rawName:"v-scroll-spy-active",value:{selector:".page-section",class:"page-section--active"},expression:"{selector: '.page-section', class: 'page-section--active'}"}],staticClass:"section-container",class:{"transition-body":t.isInTransition}},[a("hero-area",{attrs:{id:"page-section-start"}},[a("theme-switch",{attrs:{value:t.isDarkMode},on:{input:t.updateTheme}})],1),a("page-section",{attrs:{title:"About"}},[a("profile")],1),a("page-section",{attrs:{title:"Projects",dark:"true",edge:"true"}},[a("template",{slot:"title"},[a("div",{staticClass:"project-filter"},[a("h2",{staticClass:"page-section__content-title page-section__content-title--no-margin"},[t._v(" Projects ")]),a("div",{staticClass:"project-filter__wrapper"},[a("font-awesome-icon",{attrs:{icon:"th-list"}}),a("div",{staticClass:"project-filter__select-wrapper"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedFilter,expression:"selectedFilter"}],staticClass:"project-filter__select",attrs:{id:"filter"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedFilter=e.target.multiple?a:a[0]},t.updateFilter]}},t._l(t.getAvailableTags,(function(e,i){return a("option",{domProps:{value:i}},[t._v(" "+t._s(e)+" ")])})),0)])],1)])]),a("project-view")],2),a("page-section",{attrs:{title:"Contact",background:"background_xs.jpg",borderTop:""}},[a("contact-box")],1)],1),a("project-overlay"),a("custom-footer")],1)},n=[],s=a("5530"),r=(a("1276"),a("ac1f"),a("159b"),a("b64b"),a("7db0"),a("2f62")),c=a("20e0"),l=[{name:"light","--primary":"#0b88e8","--primary-light":"#7ac2f9","--accent":"#aa66ff","--background":"#fff","--background-dark":"#f6f6f6","--background-darkest":"#efefef","--font-light":"#fff","--font-dark":"#232323","--font-hero":"#000","--font-contrast":"#fff","--white":"#fff","--grey":"#f2f2f2","--black":"#000","--box-shadow":"0 0 1px -1px rgba(0,0,0,.2), 0 1px 2px 0 rgba(0,0,0,.14), 0 1px 2px 0 rgba(0,0,0,0)"},{name:"dark","--primary":"#f2da9b","--primary-light":"#ffb65e","--accent":"#eeffad","--background":"#333","--background-dark":"#212121","--background-darkest":"#191919","--font-light":"#141414","--font-dark":"#888","--font-hero":"#ccc","--font-contrast":"#333","--white":"#fff","--grey":"#f2f2f2","--black":"#000","--box-shadow":"0 0 4px -1px rgba(0,0,0,.2), 0 3px 2px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)"}],p={0:"All",1:"HTML",2:"CSS",3:"JS",4:"C#",5:"C++",6:"Dart",7:"Electronics",8:"Python"},d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"page-section hero-area"},[a("div",{staticClass:"hero-area-overlay"}),a("div",{staticClass:"hero-area-content"},[a("font-awesome-icon",{staticClass:"hero-area__icon",attrs:{icon:"code"}}),a("div",{staticClass:"hero-area__divider"}),a("h1",{staticClass:"hero-area__title"},[t._v(" marius gebhard ")]),t._m(0),a("a",{staticClass:"hero-area__jump-caret",on:{click:function(e){return t.$parent.$scrollTo(1)}}},[a("font-awesome-icon",{attrs:{icon:"caret-down"}})],1),t._t("default")],2)])},u=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"hero-area__anchor-list"},[a("li",{staticClass:"hero-area__anchor-list-item"},[t._v(" Frontend ")]),a("li",{staticClass:"hero-area__anchor-list-item"},[t._v(" Apps ")]),a("li",{staticClass:"hero-area__anchor-list-item"},[t._v(" Backend ")])])}],m={name:"hero-area"},f=m,h=a("2877"),g=Object(h["a"])(f,d,u,!1,null,null,null),_=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-section",class:t.classes,style:t.style,attrs:{id:t.getId}},[t.background?a("div",{staticClass:"page-section-overlay"}):t._e(),a("div",{staticClass:"page-section__content"},[!t.$slots.title&&t.title?[a("h2",{staticClass:"page-section__content-title"},[t._v(" "+t._s(t.title)+" ")]),t.subtitle?a("p",{staticClass:"page-section__content-subtitle"},[t._v(" "+t._s(t.subtitle)+" ")]):t._e()]:t.$slots.title?[t._t("title")]:t._e(),t._t("default")],2)])},v=[],j=a("ade3"),w=(a("5319"),{name:"page-section",props:{title:{},subtitle:{},background:{},borderTop:{type:Boolean},borderBottom:{type:Boolean},dark:{default:!1},edge:{default:!1}},computed:{classes:function(){var t;return t={},Object(j["a"])(t,"page-section--grey",this.dark),Object(j["a"])(t,"page-section--edge",this.edge),Object(j["a"])(t,"page-section--has-background",this.background),Object(j["a"])(t,"page-section--has-border-top",this.borderTop),Object(j["a"])(t,"page-section--has-border-bottom",this.borderBottom),t},style:function(){if(this.background)return{backgroundImage:"url(".concat(a("7584")("./"+this.background),")")}},getId:function(){return"".concat(this.title.replace("/\\d{4}\\/[A-Z]{1,2}\\d{2}/\n","").toLowerCase())}}}),y=w,k=Object(h["a"])(y,b,v,!1,null,null,null),C=k.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project-view"},[a("transition-group",{staticClass:"swiper-wrapper project-view__list",attrs:{tag:"ul",name:"list"}},t._l(t.getProjects,(function(e,i){return t.isProjectVisible(e)?a("li",{key:"project-view-item-#"+i,staticClass:"project-view__list-item swiper-slide",on:{click:function(a){return t.openProject(e)}}},[a("div",{staticClass:"project-view__list-item-content",class:"project-view__list-item-content--type-"+e.type},[a("h3",{staticClass:"project-view__list-item-title"},[t._v(" "+t._s(e.title)+" ")]),a("p",{staticClass:"project-view__list-item-category"},[t._v(" "+t._s(e.category)+" ")]),e.images.length>0?a("div",{staticClass:"project-view__list-item-image",style:t.getTeaserImageStyle(e)}):t._e()])]):t._e()})),0),a("div",{staticClass:"swiper-pagination"})],1)},S=[],O=(a("4de4"),a("b619")),T={name:"project-view",mounted:function(){this.initSwiper()},data:function(){return{swiper:null}},computed:Object(s["a"])(Object(s["a"])({},Object(r["c"])(["getSelectedFilter"])),{},{getFilteredProjects:function(){var t=parseInt(this.getSelectedFilter);return 0===t?this.getProjects:this.getProjects.filter((function(e){return-1!==e.tags.indexOf(t)}))},getProjects:function(){return c["a"]}}),methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["setModalOpenState"])),{},{openProject:function(t){this.setModalOpenState({key:"project-modal",openState:!0,payload:t})},isProjectVisible:function(t){return-1!==this.getFilteredProjects.indexOf(t)},getTeaserImageStyle:function(t){if(t&&t.images.length>0){var e=a("8763")("./".concat(t.images[0]));return"background-image: url('".concat(e,"')")}},initSwiper:function(){var t=this;this.swiper&&this.swiper.destroy(),this.$nextTick((function(){t.swiper=new O["a"](".project-view",{slidesPerColumnFill:"row",breakpoints:{0:{slidesPerView:1.05,slidesPerColumn:2},701:{slidesPerView:2,slidesPerColumn:2},1301:{slidesPerView:3,slidesPerColumn:2}},pagination:{clickable:!0,el:".swiper-pagination"}})}))}}),watch:{getSelectedFilter:function(){var t=this;this.$nextTick((function(){t.swiper.update()}))}}},P=T,E=Object(h["a"])(P,x,S,!1,null,null,null),M=E.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-box"},[a("form",{staticClass:"contact-box__form",attrs:{method:"POST",action:"https://formsubmit.co/marius.wspi@gmail.com"}},[a("div",{staticClass:"contact-box__row"},[a("div",{staticClass:"contact-box__input"},[a("label",{attrs:{for:"name"}},[t._v("Name")]),a("div",[a("input",{attrs:{id:"name",name:"name",autocomplete:"given-name",required:"",type:"text"},domProps:{innerHTML:t._s(t.inputName)}})])]),a("div",{staticClass:"contact-box__input"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("div",[a("input",{attrs:{id:"email",name:"email",autocomplete:"email",required:"",type:"email"},domProps:{innerHTML:t._s(t.inputEmail)}})])])]),t._m(0),a("button",{staticClass:"contact-box__form-submit",attrs:{type:"submit"}},[a("span",[t._v("Submit")]),a("font-awesome-icon",{attrs:{icon:"paper-plane"}})],1)]),a("div",{staticClass:"contact-box__details"},[t._m(1),a("p",{staticClass:"contact-box__details-info"},[t._v(" Contact me and I’ll get back to you within a day. ")]),a("div",{staticClass:"contact-box__details-item"},[t._m(2),a("font-awesome-icon",{attrs:{icon:"compass"}})],1),a("div",{staticClass:"contact-box__details-item"},[a("a",{attrs:{href:"mailto:marius.wspi@gmail.com"}},[t._v("marius.wspi@gmail.com")]),a("font-awesome-icon",{attrs:{icon:"at"}})],1)]),a("div",{staticClass:"contact-box__scroll-top"},[a("scroll-top")],1)])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact-box__row"},[a("div",{staticClass:"contact-box__input"},[a("label",{attrs:{for:"message"}},[t._v("Message")]),a("div",[a("textarea",{attrs:{required:"",name:"message",id:"message"}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h3",[t._v("Say "),a("span",[t._v("Hello")]),t._v(" ! ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("Mannheim, "),a("span",[t._v("Germany")])])}],A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"scroll-spy-link",rawName:"v-scroll-spy-link",value:{selector:"div"},expression:"{selector: 'div'}"}]},[a("div",{key:"scroll-top",staticClass:"scroll-top",class:t.classes},[a("font-awesome-icon",{staticClass:"scroll-top__icon",attrs:{icon:"caret-up"}})],1)])},L=[],F={name:"scroll-top",props:{inline:{default:!1}},computed:{classes:function(){return Object(j["a"])({},"scroll-top--inline",this.inline)}}},$=F,B=Object(h["a"])($,A,L,!1,null,null,null),q=B.exports,N={name:"contact-box",components:{ScrollTop:q},data:function(){return{inputName:"",inputEmail:"",inputMessage:""}},methods:{onSubmit:function(){}}},H=N,V=Object(h["a"])(H,I,D,!1,null,null,null),G=V.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"custom-footer"},[a("div",{staticClass:"custom-footer__content"},[a("div",{staticClass:"custom-footer__copyright"},[a("span",{staticClass:"custom-footer__copyright-heart"},[t._v(" Made with "),a("font-awesome-icon",{attrs:{icon:"heart"}}),t._v(" and "),a("font-awesome-icon",{attrs:{icon:"coffee"}}),t._v(". ")],1),a("span",[t._v("© 2021 - Marius Gebhard")])]),a("ul",{staticClass:"custom-footer__anchor-list"},[a("li",{staticClass:"custom-footer__anchor-list-item"},[a("a",{attrs:{href:"https://codepen.io/marius12375",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","codepen"]}})],1)]),a("li",{staticClass:"custom-footer__anchor-list-item"},[a("a",{attrs:{href:"https://github.com/m-gebhard",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)]),a("li",{staticClass:"custom-footer__anchor-list-item"},[a("a",{attrs:{href:"https://www.youtube.com/user/SensitionBeatZ",target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:["fab","youtube"]}})],1)])])])])},J=[],R={name:"custom-footer"},K=R,U=Object(h["a"])(K,W,J,!1,null,null,null),X=U.exports,Y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile"},[a("ul",{staticClass:"profile__wrapper"},[a("li",{staticClass:"profile__item"},[a("div",[a("div",{staticClass:"profile__item-head"},[a("font-awesome-icon",{attrs:{icon:"user"}}),a("h3",[t._v("Who am I?")])],1),t._m(0)])]),a("li",{staticClass:"profile__item"},[a("div",[a("div",{staticClass:"profile__item-head"},[a("font-awesome-icon",{attrs:{icon:"code"}}),a("h3",[t._v("What do I do?")])],1),a("p",{staticClass:"profile__item-description"},[t._v(" Write code. A lot of code."),a("br"),t._v(" My main focus is frontend development, I love to build fancy websites and share my designs and ideas with customers. Besides frontend programming I also do backend and app-programming. "),a("a",{attrs:{href:"https://github.com/m-gebhard",target:"_blank"}},[t._v(" Projects on GitHub "),a("font-awesome-icon",{attrs:{icon:["fab","github"]}})],1)])])]),a("li",{staticClass:"profile__item"},[a("div",[a("div",{staticClass:"profile__item-head"},[a("font-awesome-icon",{attrs:{icon:"rocket"}}),a("h3",[t._v("Apps and Games")])],1),a("p",{staticClass:"profile__item-description"},[t._v(" Besides web programming I also love to build apps and small desktop games. Back then in C# / Java, now with Dart and Javascript, and there's always more to explore! Take a look at the "),a("a",{staticClass:"profile__item-description--link-light",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.$parent.$parent.$scrollTo(2)}}},[t._v("project section")]),t._v(" to learn more. ")])])]),a("li",{staticClass:"profile__item profile__item--skill"},[a("div",[a("div",{staticClass:"profile__item-head"},[a("font-awesome-icon",{attrs:{icon:"chart-bar"}}),a("h3",[t._v("Coding Skills")])],1),a("ul",{staticClass:"profile__item-chart"},t._l(t.getSkills,(function(e,i){return a("li",{key:"profile-chart-item-#"+i,staticClass:"profile__item-chart-item",class:"profile__item-chart-item--"+i,style:t.chartItemStyle(e)},[a("span",[t._v(t._s(e.percentage)+"%")]),t._v(" "+t._s(e.name)+" ")])})),0)])]),a("li",{staticClass:"profile__item profile__item--skill"},[a("div",[t._m(1),a("div",{staticClass:"profile__item-description"},[t._v(" I have 4 years of frontend experience with the following technologies:"),a("br"),a("br"),a("div",[a("a",{staticClass:"profile__item-description--link profile__item-description--link-with-icon",attrs:{href:"https://en.wikipedia.org/wiki/HTML5",target:"_blank"}},[t._v(" HTML5 "),a("font-awesome-icon",{attrs:{icon:["fab","html5"]}})],1),a("a",{staticClass:"profile__item-description--link profile__item-description--link-with-icon",attrs:{href:"https://vuejs.org/",target:"_blank"}},[t._v(" Vue.js "),a("font-awesome-icon",{attrs:{icon:["fab","vuejs"]}})],1),a("a",{staticClass:"profile__item-description--link profile__item-description--link-with-icon",attrs:{href:"https://sass-lang.com/",target:"_blank"}},[t._v(" SASS "),a("font-awesome-icon",{attrs:{icon:["fab","sass"]}})],1),a("a",{staticClass:"profile__item-description--link profile__item-description--link-with-icon",attrs:{href:"https://getbootstrap.com/",target:"_blank"}},[t._v(" Bootstrap "),a("font-awesome-icon",{attrs:{icon:["fab","bootstrap"]}})],1)])])])]),a("li",{staticClass:"profile__item profile__item--skill"},[a("div",[t._m(2),a("div",{staticClass:"profile__item-description"},[t._v(" I have 3 years of backend experience with the following technologies:"),a("br"),a("br"),a("div",[a("a",{staticClass:"profile__item-description--link profile__item-description--link-with-icon",attrs:{href:"https://nodejs.org/en/",target:"_blank"}},[t._v(" node.js "),a("font-awesome-icon",{attrs:{icon:["fab","node-js"]}})],1),a("a",{staticClass:"profile__item-description--link profile__item-description--link-with-icon",attrs:{href:"https://en.wikipedia.org/wiki/PHP",target:"_blank"}},[t._v(" PHP7 "),a("font-awesome-icon",{attrs:{icon:["fab","php"]}})],1),a("a",{staticClass:"profile__item-description--link profile__item-description--link-with-icon",attrs:{href:"https://laravel.com/",target:"_blank"}},[t._v(" Laravel "),a("font-awesome-icon",{attrs:{icon:["fab","laravel"]}})],1)])])])])])])},z=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"profile__item-description"},[t._v(" My Name is Marius Gebhard."),a("br"),t._v(" I am 23 years old and I live in Mannheim, Germany. In my free time I like to code and do sports. What do I code? Anything you can imagine - it just depends on the project I am working on. ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile__item-head"},[a("h3",[t._v("FE Experience")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile__item-head"},[a("h3",[t._v("BE Experience")])])}],Z=a("1ac7"),Q={name:"profile",computed:{getSkills:function(){var t=Z["a"];return t.sort((function(t,e){return e.percentage-t.percentage})),t}},methods:{chartItemStyle:function(t){return{width:"".concat(t.percentage,"%")}}}},tt=Q,et=Object(h["a"])(tt,Y,z,!1,null,null,null),at=et.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.project?a("div",{staticClass:"project-overlay",class:t.classes},[a("div",{staticClass:"project-overlay__background"}),a("div",{staticClass:"project-overlay__content"},[a("div",{ref:"scrollContainer",staticClass:"project-overlay__content-scroll-container"},[a("div",{staticClass:"project-overlay__content-close",on:{click:function(e){return e.preventDefault(),t.close(e)}}},[a("font-awesome-icon",{attrs:{icon:"times"}})],1),a("h2",{staticClass:"project-overlay__content-title"},[t._v(" "+t._s(t.project.title)+" ")]),a("p",{staticClass:"project-overlay__content-description",domProps:{innerHTML:t._s(t.project.description)}}),a("social-sharing",{attrs:{url:t.getProjectUrl,title:"Check out this project!",description:t.getFormattedProjectDescription,quote:t.project.title,hashtags:"developer,web,javascript,framework,fancy,vuejs,css,html"},inlineTemplate:{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project-overlay__content-share-buttons"},[a("span",{staticClass:"project-overlay__content-share-buttons-title"},[t._v("Share this Project")]),a("div",{staticClass:"project-overlay__content-share-buttons-list"},[a("network",{attrs:{network:"email"}},[a("font-awesome-icon",{attrs:{icon:"envelope"}})],1),a("network",{attrs:{network:"facebook"}},[a("font-awesome-icon",{attrs:{icon:["fab","facebook"]}})],1),a("network",{attrs:{network:"twitter"}},[a("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),a("network",{attrs:{network:"whatsapp"}},[a("font-awesome-icon",{attrs:{icon:["fab","whatsapp"]}})],1)],1)])},staticRenderFns:[]}}),t.getImages.length>0||t.project.video?a("div",{staticClass:"project-overlay__content-slider-container",class:{"project-overlay__content-slider-container--disabled":!t.isSwiperEnabled}},[a("div",{staticClass:"swiper-wrapper"},[t.project.video?a("a",{staticClass:"swiper-slide swiper-slide--video",style:t.getImageStyle(t.project.videoTeaser),attrs:{href:t.project.video,target:"_blank"}},[a("font-awesome-icon",{attrs:{icon:"play-circle"}}),a("span",[t._v("Watch on YouTube")])],1):t._e(),t._l(t.getImages,(function(e,i){return a("div",{key:"project-overlay-image-#"+i,staticClass:"swiper-slide",style:t.getImageStyle(e),on:{click:function(e){return e.preventDefault(),t.showLightbox(i)}}})}))],2),a("div",{staticClass:"swiper-pagination"})]):t._e(),a("div",{staticClass:"project-overlay__content-description-link project-overlay__content-close-bottom",on:{click:function(e){return e.preventDefault(),t.close(e)}}},[t._v(" Go Back "),a("i",[a("font-awesome-icon",{attrs:{icon:"caret-down"}})],1)]),a("div",{staticClass:"project-overlay__hidden-block"})],1)]),a("vue-easy-lightbox",{attrs:{visible:t.lightboxVisible,imgs:t.getImagesWithPaths,index:t.lightboxIndex,moveDisabled:""},on:{hide:function(e){t.lightboxVisible=!1}}})],1):t._e()},ot=[],nt=(a("d81d"),a("a4d3"),a("e01a"),a("99af"),{name:"project-overlay",data:function(){return{project:null,swiper:null,lightboxVisible:!1,lightboxIndex:0}},computed:Object(s["a"])(Object(s["a"])({},Object(r["c"])(["getModalOpenState","getModal"])),{},{classes:function(){return Object(j["a"])({},"project-overlay--open",this.isOpen)},isOpen:function(){return this.getModalOpenState("project-modal")},isSwiperEnabled:function(){if(!this.swiper)return!1;var t=this.project.images.length+(this.project.video?1:0);return t>this.getBreakpoints[this.swiper.currentBreakpoint].slidesPerView},getImages:function(){return this.project.images},getImagesWithPaths:function(){return this.getImages.map((function(t){return a("8763")("./".concat(t))}))},getFormattedProjectDescription:function(){var t=document.createElement("div");t.innerHTML=this.project.description;var e=t.textContent||t.innerText||"",a=e.substr(0,500).lastIndexOf(".");return"".concat(e.substr(0,a),".. Read more at:")},getProjectUrl:function(){return"".concat(window.location.origin,"/#/").concat(this.project.slug)},getBreakpoints:function(){return this.swiper?this.swiper.passedParams.breakpoints:[]}}),methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["setModalOpenState"])),{},{init:function(){var t=this;this.$nextTick((function(){t.$refs.scrollContainer.scrollTo(0,0)})),this.project=this.getModal("project-modal").payload,document.addEventListener("keydown",this.handleKeyDown)},close:function(){this.setModalOpenState({key:"project-modal",openState:!1})},handleKeyDown:function(t){27===t.which&&this.close()},getImageStyle:function(t){var e=a("8763")("./".concat(t));return"background-image: url('".concat(e,"')")},showLightbox:function(t){this.lightboxVisible=!0,this.lightboxIndex=t}}),watch:{isOpen:function(t){var e=this;t?(this.init(),this.swiper&&this.swiper.destroy(),this.$nextTick((function(){e.swiper=new O["a"](".project-overlay__content-slider-container",{spaceBetween:10,breakpoints:{0:{slidesPerView:2},421:{slidesPerView:3},1301:{slidesPerView:4}},pagination:{clickable:!0,el:".swiper-pagination"}})}))):setTimeout((function(){e.swiper.destroy(!0,!1),e.swiper=null,document.removeEventListener("keydown",e.handleKeyDown)}),500)}}}),st=nt,rt=Object(h["a"])(st,it,ot,!1,null,null,null),ct=rt.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"scroll-spy-link",rawName:"v-scroll-spy-link",value:{selector:"div"},expression:"{selector: 'div'}"}],staticClass:"theme-switch",class:{"theme-switch--transitioning":t.transitioning}},[a("div",{staticClass:"theme-switch__content",class:{"theme-switch__content--checked":t.value}},[a("input",{attrs:{type:"checkbox"},domProps:{checked:t.value},on:{change:t.onInput}}),a("font-awesome-icon",{attrs:{icon:"adjust"}})],1)])},pt=[],dt={name:"theme-switch",props:{value:{}},data:function(){return{transitioning:!1}},methods:{onInput:function(t){var e=this,a=t.target.checked;this.$emit("input",a),this.transitioning=!0,setTimeout((function(){e.transitioning=!1}),500)}}},ut=dt,mt=Object(h["a"])(ut,lt,pt,!1,null,null,null),ft=mt.exports,ht={name:"app",components:{ThemeSwitch:ft,ProjectOverlay:ct,ScrollTop:q,Profile:at,CustomFooter:X,ContactBox:G,ProjectView:M,PageSection:C,HeroArea:_},data:function(){return{isInTransition:!1,selectedFilter:0}},created:function(){this.updateTheme("true"===window.localStorage.getItem("darkmode"))},mounted:function(){var t=window.location.hash;t&&this.openProjectBySlug(t.split("#/")[1])},computed:Object(s["a"])(Object(s["a"])({},Object(r["c"])(["isAnyModalOpened","isDarkMode"])),{},{getAvailableTags:function(){return p}}),methods:Object(s["a"])(Object(s["a"])({},Object(r["b"])(["setSelectedFilter","setDarkMode","setModalOpenState"])),{},{updateFilter:function(){this.setSelectedFilter(this.selectedFilter)},updateTheme:function(t){var e=this;this.$nextTick((function(){var a=l[t?1:0],i=document.documentElement;t?e.$refs["app"].classList.add("dark"):e.$refs["app"].classList.remove("dark"),a&&(Object.keys(a).forEach((function(t){"name"!==t&&i.style.setProperty(t,a[t])})),e.isInTransition=!0,e.setDarkMode(t),window.localStorage.setItem("darkmode",t),setTimeout((function(){e.isInTransition=!1}),500))}))},openProjectBySlug:function(t){var e=c["a"].find((function(e){return e.slug===t}));e&&this.setModalOpenState({key:"project-modal",openState:!0,payload:e})}}),watch:{isAnyModalOpened:function(t){document.body.style.overflow=t?"hidden":"auto"}}},gt=ht,_t=Object(h["a"])(gt,o,n,!1,null,null,null),bt=_t.exports;i["default"].use(r["a"]);var vt=new r["a"].Store({state:{selectedFilter:0,darkMode:!1,modals:[]},mutations:{SET_SELECTED_FILTER:function(t,e){t.selectedFilter=e},SET_DARK_MODE:function(t,e){t.darkMode=e},ADD_MODAL_OPEN_STATE:function(t,e){var a=e.key,i=e.openState,o=e.payload;t.modals.push({key:a,openState:i,payload:o})},UPDATE_MODAL_STATE:function(t,e){var a=e.key,i=e.openState,o=e.payload,n=t.modals.find((function(t){return t.key===a}));n.openState=i,n.payload=o}},actions:{setSelectedFilter:function(t,e){var a=t.commit;a("SET_SELECTED_FILTER",e)},setDarkMode:function(t,e){var a=t.commit;a("SET_DARK_MODE",e)},setModalOpenState:function(t,e){var a=t.commit,i=t.state;i.modals.find((function(t){return t.key===e.key}))?a("UPDATE_MODAL_STATE",e):a("ADD_MODAL_OPEN_STATE",e)}},getters:{isDarkMode:function(t){return t.darkMode},getSelectedFilter:function(t){return t.selectedFilter},getModal:function(t){return function(e){return t.modals.find((function(t){return t.key===e}))}},getModalOpenState:function(t){return function(e){var a=t.modals.find((function(t){return t.key===e}));return!!a&&a.openState}},isAnyModalOpened:function(t){return t.modals.filter((function(t){return t.openState})).length>0}}}),jt=a("33bc"),wt=a("825ae"),yt=(a("5299"),a("7e7d"),a("f4bd"),a("ecee")),kt=a("c074"),Ct=a("f2d1"),xt=a("ad3d");yt["c"].add(kt["o"],kt["i"],kt["l"],kt["q"],kt["e"],kt["j"],kt["a"],kt["f"],kt["g"],kt["d"],kt["m"],kt["h"],kt["b"],kt["p"],kt["c"],kt["n"],Ct["c"],Ct["j"],Ct["k"],Ct["m"],Ct["b"],Ct["d"],Ct["n"],Ct["l"],Ct["i"],Ct["g"],Ct["f"],Ct["e"],Ct["h"],Ct["a"],kt["k"]),i["default"].component("font-awesome-icon",xt["a"]),i["default"].use(wt["a"]),i["default"].use(jt["a"]),i["default"].use(SocialSharing),i["default"].config.productionTip=!1,new i["default"]({store:vt,render:function(t){return t(bt)}}).$mount("#app")},"648e":function(t,e,a){t.exports=a.p+"img/da2.370e24ce.jpg"},"713c":function(t,e,a){t.exports=a.p+"img/xl1.174ea181.jpg"},7584:function(t,e,a){var i={"./background_xl.jpg":"b865","./background_xs.jpg":"c5c3","./projects/Spaceship.jpg":"1171","./projects/betterklm1.jpg":"2d29","./projects/betterklm2.jpg":"388c","./projects/ckm1.jpg":"52a1","./projects/ckm2.jpg":"3766","./projects/ckm3.jpg":"f67e","./projects/da1.jpg":"7b60","./projects/da2.jpg":"648e","./projects/da3.jpg":"0334","./projects/da4.jpg":"9d46","./projects/lq1.jpg":"00e1","./projects/lq2.jpg":"8bfd","./projects/lq3.jpg":"3ea0","./projects/xl1.jpg":"713c","./projects/xl2.jpg":"c5a3","./projects/xl3.jpg":"4ad9"};function o(t){var e=n(t);return a(e)}function n(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=n,t.exports=o,o.id="7584"},"7b60":function(t,e,a){t.exports=a.p+"img/da1.8bc1e74f.jpg"},"7e7d":function(t,e,a){},8763:function(t,e,a){var i={"./Spaceship.jpg":"1171","./betterklm1.jpg":"2d29","./betterklm2.jpg":"388c","./ckm1.jpg":"52a1","./ckm2.jpg":"3766","./ckm3.jpg":"f67e","./da1.jpg":"7b60","./da2.jpg":"648e","./da3.jpg":"0334","./da4.jpg":"9d46","./lq1.jpg":"00e1","./lq2.jpg":"8bfd","./lq3.jpg":"3ea0","./xl1.jpg":"713c","./xl2.jpg":"c5a3","./xl3.jpg":"4ad9"};function o(t){var e=n(t);return a(e)}function n(t){if(!a.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}o.keys=function(){return Object.keys(i)},o.resolve=n,t.exports=o,o.id="8763"},"8bfd":function(t,e,a){t.exports=a.p+"img/lq2.4c12c718.jpg"},"9d46":function(t,e,a){t.exports=a.p+"img/da4.5ec6bcf1.jpg"},b865:function(t,e,a){t.exports=a.p+"img/background_xl.2ee28825.jpg"},c5a3:function(t,e,a){t.exports=a.p+"img/xl2.15cccfaa.jpg"},c5c3:function(t,e,a){t.exports=a.p+"img/background_xs.eb337923.jpg"},f67e:function(t,e,a){t.exports=a.p+"img/ckm3.c4d55c83.jpg"}});
//# sourceMappingURL=app.97ae2caf.js.map
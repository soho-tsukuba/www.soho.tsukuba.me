(function(t){function a(a){for(var e,i,n=a[0],c=a[1],l=a[2],u=0,v=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&v.push(o[i][0]),o[i]=0;for(e in c)Object.prototype.hasOwnProperty.call(c,e)&&(t[e]=c[e]);p&&p(a);while(v.length)v.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,a=0;a<r.length;a++){for(var s=r[a],e=!0,n=1;n<s.length;n++){var c=s[n];0!==o[c]&&(e=!1)}e&&(r.splice(a--,1),t=i(i.s=s[0]))}return t}var e={},o={index:0},r=[];function i(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,a,s){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)i.d(s,e,function(a){return t[a]}.bind(null,e));return s},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=a,n=n.slice();for(var l=0;l<n.length;l++)a(n[l]);var p=c;r.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";s("85ec")},"06b8":function(t,a,s){"use strict";s("516a")},"345d":function(t,a,s){"use strict";s("874d")},"366f":function(t,a,s){t.exports=s.p+"img/googleplay.9fe963d8.png"},"501b":function(t,a,s){"use strict";s("e75e")},"516a":function(t,a,s){},5652:function(t,a,s){},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),o=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("header-menu"),s("header-content"),s("router-view"),s("footer-content")],1)},r=[],i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("b-navbar",{staticClass:"fixed-top",attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[s("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),s("b-navbar-brand",{staticClass:"mx-4",attrs:{to:"/"}},[s("span",{staticClass:"title-text"},[t._v("マイクラ"),s("span",{staticClass:"sohosai"},[t._v("雙峰祭")]),t._v("プロジェクト"),s("span",{staticClass:"year"},[t._v("2021")])])]),s("b-collapse",{staticClass:"navbar-collapse justify-content-end",attrs:{id:"nav-collapse","is-nav":""}},[s("b-navbar-nav",[s("b-nav-item",{attrs:{right:"",to:"/#about"}},[t._v("About")]),s("b-nav-item",{attrs:{right:"",to:"/#join"}},[t._v("参加方法")]),s("b-nav-item",{attrs:{right:"",to:"/how_to_play#top"}},[t._v("遊び方")]),s("b-nav-item",{attrs:{right:"",to:"/how_to_play#attention"}},[t._v("注意事項")]),s("b-nav-item",{attrs:{right:"",href:"https://twitter.com/micra_sohopjt"}},[t._v("Twitter")])],1)],1)],1)],1)},n=[],c=(s("ac1f"),s("466d"),s("5319"),{name:"HeaderMenu",watch:{$route:function(t,a){t.hash.match(/^#/)&&document.getElementById(t.hash.replace(/^#/,"")).scrollIntoView(),console.log("new, old",[t.hash,a.hash])}},mounted:function(){this.$route.hash.match(/^#/)&&document.getElementById(this.$route.hash.replace(/^#/,"")).scrollIntoView()}}),l=c,p=(s("06b8"),s("2877")),u=Object(p["a"])(l,i,n,!1,null,"51d479b8",null),v=u.exports,b=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("b-jumbotron",{staticClass:"jumbotron-bg",style:{"background-image":"url("+t.headerImage+")"},attrs:{fluid:"","text-variant":"white"},scopedSlots:t._u([{key:"header",fn:function(){return[s("span",{staticClass:"title-text"},[t._v("マイクラ"),s("span",{staticClass:"sohosai"},[t._v("雙峰祭")]),t._v("プロジェクト")]),s("br"),s("span",{staticClass:"year"},[t._v("2021")])]},proxy:!0},{key:"lead",fn:function(){return[s("span",{staticClass:"description"},[t._v(" 筑波大学雙峰祭 オンライン企画"),s("br"),t._v(" 2021年11月6～7日 ")])]},proxy:!0}])},[s("hr",{staticClass:"my-4"}),s("p",{staticClass:"description"},[t._v(" マイクラ内で筑波大学キャンパスを再現して、雙峰祭気分を楽しもう！ ")])])],1)},d=[],f=s("6d32"),g=s.n(f),m={name:"Header",data:function(){return{headerImage:g.a}}},h=m,_=(s("6bbb"),Object(p["a"])(h,b,d,!1,null,"7268c789",null)),C=_.exports,w=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",[s("b-container",{attrs:{fluid:""}},[s("b-row",{staticClass:"bg-dark pt-4 root",attrs:{align:"left"}},[s("div",{staticClass:"col-lg-1"}),s("div",{staticClass:"col-lg-10"},[s("span",{staticClass:"title-text"},[t._v("マイクラ"),s("span",{staticClass:"sohosai"},[t._v("雙峰祭")]),t._v("プロジェクト"),s("span",{staticClass:"year"},[t._v("2021")])]),s("br")]),s("div",{staticClass:"col-lg-1"})]),s("b-row",{staticClass:"bg-dark pt-2 pb-4 root",attrs:{align:"left"}},[s("div",{staticClass:"col-lg-1"}),s("div",{staticClass:"col-lg-5"},[s("p",[t._v(" © 2021 マイクラ雙峰祭プロジェクト, "),s("a",{staticClass:"text-white",attrs:{href:"http://github.com/itsu-dev"}},[t._v("Itsu")]),s("br"),s("br"),s("span",{staticClass:"caption"},[t._v(" マイクラ雙峰祭プロジェクトはMojangから承認されておらず、Mojangとは関係ありません。 ")])])]),s("div",{staticClass:"col-lg-2"}),s("div",{staticClass:"col-lg-3"},[s("h5",{staticClass:"title-sub"},[t._v(" Links ")]),s("a",{attrs:{href:"https://sohosai.com/"}},[t._v("筑波大学 雙峰祭")]),s("br"),s("a",{attrs:{href:"https://twitter.com/micra_sohopjt"}},[t._v("Twitter")]),s("br"),s("a",{attrs:{href:"https://github.com/soho-tsukuba/www.soho.tsukuba.me"}},[t._v("GitHub")]),s("br")]),s("div",{staticClass:"col-lg-1"})])],1)],1)},y=[],A={name:"FooterContent"},x=A,j=(s("a8e7"),Object(p["a"])(x,w,y,!1,null,"5b613fe2",null)),k=j.exports,M={name:"App",components:{HeaderMenu:v,HeaderContent:C,FooterContent:k}},O=M,E=(s("034f"),Object(p["a"])(O,o,r,!1,null,null,null)),I=E.exports,P=s("8c4f"),S=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"root"},[s("b-container",{attrs:{fluid:""}},[s("b-row",[s("div",{staticClass:"col"},[s("b-row",{staticClass:"mb-4 px-2 about",style:{"background-image":"url("+t.oakTexture+")"}},[s("div",{staticClass:"col-lg-1"}),s("div",{staticClass:"col-lg-10"},[s("h1",{staticClass:"catch-copy mt-5 mb-4"},[t._v(" All of ITF. Minecrafters,"),s("br"),s("span",{staticClass:"tsukuba-color"},[t._v("Are you ready?")])]),s("p",{staticClass:"mt-4 mb-5"},[t._v(" 新型コロナウイルスの影響で大学に行くことが極端に少なくなった2021年。"),s("br"),t._v(" 大半の講義はオンラインで実施され、キャンパスを歩くことはあまりなかったことでしょう。"),s("br"),s("br"),t._v(" そんなのもう嫌だ。せっかくつくばの街に来たんだから、思いっきり構内を駆け回りたいそこのマインクラフター！"),s("br"),t._v(" あなたの番です。キャンパスを作って、広い広いキャンパスを一緒に堪能しませんか？"),s("br"),s("br"),t._v(" Minecraftをお持ちの筑波大生のみなさん、たくさんのご参加お待ちしております！ ")])]),s("div",{staticClass:"col-lg-1"})])],1)])],1),s("b-container",[s("b-row",[s("div",{staticClass:"col-lg-1"}),s("div",{staticClass:"col-lg-10"},[s("b-row",{staticClass:"mt-3 mx-1",attrs:{id:"about"}},[s("div",{staticClass:"col-lg"},[s("h3",{staticClass:"title title-about"},[t._v("About")]),s("p",[t._v(" マイクラ雙峰祭プロジェクトは、2021年11月6日（土）と7日（日）にオンラインで開催される雙峰祭での企画です。"),s("br"),t._v(" 筑波大学キャンパスをMinecraft内で再現して、雙峰祭当日にサーバーを開放します。サーバー内ではキャンパスの制作やイベント等を行う予定です。"),s("br"),t._v(" また、当日は生配信も予定しております！"),s("br"),s("br"),t._v(" 現在十数名ほどで運営していますが、当日までにキャンパスのベースとなる建築を行う運営メンバーを募集しております。（Minecraft Java Editionを持っている必要があります）興味がありましたら"),s("a",{attrs:{href:"https://twitter.com/micra_sohopjt"}},[t._v("Twitter")]),t._v("のDMまでお声掛けください。"),s("br"),t._v(" また当日の解放前に試験的にサーバーを開放する場合もありますので、その際はぜひご協力をお願いします。 ")])])]),s("hr"),s("b-row",{staticClass:"mt-3 mx-1",attrs:{id:"join"}},[s("div",{staticClass:"col-lg"},[s("h3",{staticClass:"title title-join"},[t._v("How to Join")]),s("p",[t._v("クロスプラットフォームでプレイすることができるため、以下のデバイスから参加することができます。")])])]),s("b-row",{staticClass:"mb-4 mx-1"},[s("div",{staticClass:"col-lg-6 mt-4"},[s("h5",{staticClass:"title-text"},[t._v("Minecraft Java Edition v1.17.1")]),s("p",[t._v(" PC"),s("br"),s("br"),t._v(" アドレス：現在非公開"),s("br"),t._v(" ポート：現在非公開"),s("br"),s("br"),t._v(" ※MojangまたはMicrosoftアカウントでログインしている必要があります。"),s("br"),t._v(" ※Java EditionはMinecraft公式サイトからインストールしたものです。 ")]),s("b-row",[s("div",{staticClass:"col text-center"},[s("img",{staticClass:"platform-icon",attrs:{src:t.desktopIcon,alt:"desktop"}})])]),s("b-row",[s("div",{staticClass:"col text-center"},[s("img",{staticClass:"minecraft-logo",attrs:{src:t.minecraftLogo,alt:"minecraft",onclick:"window.location='https://www.minecraft.net/ja-jp/store/minecraft-java-edition'"}})])])],1),s("div",{staticClass:"col-lg-6 mt-4"},[s("h5",{staticClass:"title-text"},[t._v("Minecraft 統合版 v1.17.11")]),s("p",[t._v(" Windows 10 / iOS / Android / Nintendo Switch"),s("br"),s("br"),t._v(" アドレス：現在非公開"),s("br"),t._v(" ポート：現在非公開"),s("br"),s("br"),t._v(" ※Microsoft XBoxアカウントでログインしている必要があります。"),s("br"),t._v(" ※Java版に準拠しているため、一部のブロックが使えないなどの問題が起こる場合があります。 ")]),s("b-row",[s("div",{staticClass:"col text-center"},[s("img",{staticClass:"platform-icon",attrs:{src:t.desktopIcon,alt:"desktop"}}),s("img",{staticClass:"platform-icon mx-4",attrs:{src:t.smartphoneIcon,alt:"smartphone"}}),s("img",{staticClass:"platform-icon",attrs:{src:t.switchIcon,alt:"switch"}})])]),s("b-row",[s("div",{staticClass:"col text-center mt-4"},[s("img",{staticClass:"app-store",attrs:{src:t.appStore,alt:"desktop",onclick:"window.location='https://apps.apple.com/jp/app/minecraft/id479516143'"}}),s("img",{staticClass:"google-play",attrs:{src:t.googlePlay,alt:"desktop",onclick:"window.location='https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&hl=ja&gl=US'"}})])])],1)])],1),s("div",{staticClass:"col-lg-1"})])],1)],1)},T=[],B=s("5c7c"),J=s.n(B),Q=s("fb01"),V=s.n(Q),H=s("a67d"),U=s.n(H),$=s("fea6"),K=s.n($),z=s("366f"),F=s.n(z),L=s("8897"),G=s.n(L),N=s("f341"),Y=s.n(N),D={name:"MainPage",data:function(){return{desktopIcon:J.a,smartphoneIcon:V.a,switchIcon:U.a,appStore:K.a,googlePlay:F.a,minecraftLogo:G.a,oakTexture:Y.a}}},W=D,X=(s("501b"),Object(p["a"])(W,S,T,!1,null,"1a78c9c6",null)),R=X.exports,Z=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("b-container",{staticClass:"root"},[s("b-row",[s("div",{staticClass:"col-lg-1"}),s("div",{staticClass:"col-lg-10 my-4",attrs:{id:"top"}},[s("h5",{staticClass:"title title-play"},[t._v("How To Play")]),s("p",[t._v(" このページでは雙峰祭当日の遊び方と注意事項について説明します。"),s("br")]),s("h6",{staticClass:"title-sub mt-4"},[t._v("キャンパス建設")]),s("p",[t._v(" サーバー内にはある程度筑波大学本キャンパスが建築されていますが、当日も引き続きキャンパスの建築を行います。"),s("br"),t._v(" 拡張するもよし、既存のキャンパスを更に作りこむもよし。思い思いのキャンパスをみんなで作ろう！"),s("br")]),s("h6",{staticClass:"title-sub mt-4"},[t._v("イベント企画")]),s("p",[t._v(" 当日は制作したキャンパスの中でイベントを行う予定です。"),s("br"),t._v(" 詳細は未定ですが、たくさんの方の参加をお待ちしております！！"),s("br")]),s("h6",{staticClass:"title-sub mt-4"},[t._v("生配信")]),s("p",[t._v(" 更に、サーバー内の様子を生配信にてお届けすることになっています！"),s("br"),t._v(" 残念ながらマイクラ雙峰祭プロジェクトに参加できなかった方も、生配信を通して一生に楽しみましょう！ ")]),s("hr",{staticClass:"my-4"}),s("h5",{staticClass:"title title-attention",attrs:{id:"attention"}},[t._v("Attention")]),s("p",[t._v(" ・当日はサーバーへの負荷を考慮し参加人数に制限をかけさせていただきますので、譲り合ってご参加ください。"),s("br"),t._v(" ・サーバーに負荷をかける行為は行わないでください。"),s("br"),t._v(" ・Mod等チートツールを使用しての参加はご遠慮ください。"),s("br"),t._v(" ・ゲーム内チャットにおいての暴言、名誉棄損、誹謗中傷、公序良俗に反する発言などは行わないでください。"),s("br"),t._v(" ・キャンパス等ワールドを破壊する行為は行わないでください。"),s("br"),t._v(" ・その他、問題のある行為や過度に迷惑をかける行為を行わないでください。"),s("br"),t._v(" ・以上のことが守られない場合、発見次第すみやかに追放等の処置を行います。 ")])]),s("div",{staticClass:"col-lg-1"})])],1)},q=[],tt={name:"HowToPlayPage"},at=tt,st=(s("345d"),Object(p["a"])(at,Z,q,!1,null,"1037b44c",null)),et=st.exports;e["default"].use(P["a"]);var ot=new P["a"]({mode:"history",routes:[{path:"/",name:"mainPage",component:R},{path:"/how_to_play",name:"howToPlayPage",component:et}]}),rt=s("5f5b"),it=s("b1e0");s("f9e3"),s("2dd8");e["default"].config.productionTip=!1,e["default"].use(rt["a"]),e["default"].use(it["a"]),new e["default"]({router:ot,render:function(t){return t(I)}}).$mount("#app")},"5c7c":function(t,a,s){t.exports=s.p+"img/desktop-icon.905861d9.svg"},"6bbb":function(t,a,s){"use strict";s("6f10")},"6d32":function(t,a,s){t.exports=s.p+"img/header-image.4f93d55c.png"},"6f10":function(t,a,s){},"85ec":function(t,a,s){},"874d":function(t,a,s){},8897:function(t,a,s){t.exports=s.p+"img/minecraft-logo.c9dfeb0a.png"},a67d:function(t,a,s){t.exports=s.p+"img/switch-icon.db804ea4.svg"},a8e7:function(t,a,s){"use strict";s("5652")},e75e:function(t,a,s){},f341:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAFVBMVEW8mGKfhE20kFpzXjlpVDN8Yj5MPSafUFAXAAAA6UlEQVR4Xu3YwQ3DIBQEUbdAC7RAC24hLaT/EiJ8YOUvVk6um5lTHJnnE+KL46ptOlZ9pv92SQkGAQG1bsz6qrn6TL/+BwQEtOu0ZPd1AcEgIOB5bzx3zuyySBAQ8JtxTo9tpcNMHSoJBAR8fkdM39Q2ZYKAgCUxdmPqLDIFgoCAdkxTP41zmSAgoO0C6gW0cls0EwQEbK4i2JNKQC4ICOi3lL+KdgWDgICa0OzANjbZ9zJBQMCSvWy2m7AwmSAgoI4X+6nddGf9TBAQ0I5uFVyVxaVMEBBw3HvNzpUed5Pce1bGuUgQEPADvWY6YkiZ0gMAAAAASUVORK5CYII="},fb01:function(t,a,s){t.exports=s.p+"img/smartphone-icon.70b4e693.svg"},fea6:function(t,a,s){t.exports=s.p+"img/appstore.57272347.svg"}});
//# sourceMappingURL=index.5acdd106.js.map
(function(t){function a(a){for(var s,o,i=a[0],c=a[1],l=a[2],b=0,v=[];b<i.length;b++)o=i[b],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&v.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(a);while(v.length)v.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,i=1;i<e.length;i++){var c=e[i];0!==n[c]&&(s=!1)}s&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var s={},n={index:0},r=[];function o(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=s,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)o.d(e,s,function(a){return t[a]}.bind(null,s));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"01a3":function(t,a,e){"use strict";e("e6bf")},"034f":function(t,a,e){"use strict";e("85ec")},"0ff8":function(t,a,e){"use strict";e("2733")},2733:function(t,a,e){},"366f":function(t,a,e){t.exports=e.p+"img/googleplay.9fe963d8.png"},"4d03":function(t,a,e){t.exports=e.p+"img/header-night.d7a00c85.png"},5652:function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("header-menu"),e("header-content"),e("router-view"),e("footer-content")],1)},r=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-navbar",{staticClass:"fixed-top",attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),e("b-navbar-brand",{staticClass:"mx-4",attrs:{to:"/"}},[e("span",{staticClass:"title-text"},[t._v("マイクラ"),e("span",{staticClass:"sohosai"},[t._v("雙峰祭")]),t._v("プロジェクト"),e("span",{staticClass:"year"},[t._v("2021")])])]),e("b-collapse",{staticClass:"navbar-collapse justify-content-end",attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{attrs:{right:"",to:"/#about"}},[t._v("About")]),e("b-nav-item",{attrs:{right:"",to:"/how_to_play#top"}},[t._v("遊び方")]),e("b-nav-item",{attrs:{right:"",to:"/how_to_play#attention"}},[t._v("注意事項")]),e("b-nav-item",{attrs:{right:"",href:"#"}},[t._v("YouTube Live")]),e("b-nav-item",{attrs:{right:"",href:"https://twitter.com/micra_sohopjt"}},[t._v("Twitter")])],1)],1)],1)],1)},i=[],c=(e("ac1f"),e("466d"),e("5319"),{name:"HeaderMenu",watch:{$route:function(t,a){t.hash.match(/^#/)&&document.getElementById(t.hash.replace(/^#/,"")).scrollIntoView(),console.log("new, old",[t.hash,a.hash])}},mounted:function(){this.$route.hash.match(/^#/)&&document.getElementById(this.$route.hash.replace(/^#/,"")).scrollIntoView()}}),l=c,u=(e("0ff8"),e("2877")),b=Object(u["a"])(l,o,i,!1,null,"272a18b0",null),v=b.exports,p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("b-jumbotron",{staticClass:"jumbotron-bg",style:{"background-image":"url("+t.headerImage+")"},attrs:{fluid:"","text-variant":"white"},scopedSlots:t._u([{key:"header",fn:function(){return[e("span",{staticClass:"title-text"},[t._v("マイクラ"),e("span",{staticClass:"sohosai"},[t._v("雙峰祭")]),t._v("プロジェクト")]),e("br"),e("span",{staticClass:"year"},[t._v("2021")])]},proxy:!0},{key:"lead",fn:function(){return[e("span",{staticClass:"description"},[t._v(" 筑波大学雙峰祭 オンライン企画"),e("br"),t._v(" 2021年11月6～7日 / 15:30~16:15 ")])]},proxy:!0}])},[e("hr",{staticClass:"my-4"}),e("p",{staticClass:"description"},[t._v(" 筑波大学 Minecraftキャンパスの様子をお届け！ ")])])],1)},f=[],d=e("faf3"),g=e.n(d),h={name:"Header",data:function(){return{headerImage:g.a}}},_=h,m=(e("01a3"),Object(u["a"])(_,p,f,!1,null,"1cd31001",null)),C=m.exports,w=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",[e("b-container",{attrs:{fluid:""}},[e("b-row",{staticClass:"bg-dark pt-4 root",attrs:{align:"left"}},[e("div",{staticClass:"col-lg-1"}),e("div",{staticClass:"col-lg-10"},[e("span",{staticClass:"title-text"},[t._v("マイクラ"),e("span",{staticClass:"sohosai"},[t._v("雙峰祭")]),t._v("プロジェクト"),e("span",{staticClass:"year"},[t._v("2021")])]),e("br")]),e("div",{staticClass:"col-lg-1"})]),e("b-row",{staticClass:"bg-dark pt-2 pb-4 root",attrs:{align:"left"}},[e("div",{staticClass:"col-lg-1"}),e("div",{staticClass:"col-lg-5"},[e("p",[t._v(" © 2021 マイクラ雙峰祭プロジェクト, "),e("a",{staticClass:"text-white",attrs:{href:"http://github.com/itsu-dev"}},[t._v("Itsu")]),e("br"),e("br"),e("span",{staticClass:"caption"},[t._v(" マイクラ雙峰祭プロジェクトはMojangから承認されておらず、Mojangとは関係ありません。 ")])])]),e("div",{staticClass:"col-lg-2"}),e("div",{staticClass:"col-lg-3"},[e("h5",{staticClass:"title-sub"},[t._v(" Links ")]),e("a",{attrs:{href:"https://sohosai.com/"}},[t._v("筑波大学 雙峰祭")]),e("br"),e("a",{attrs:{href:"https://twitter.com/micra_sohopjt"}},[t._v("Twitter")]),e("br"),e("a",{attrs:{href:"https://github.com/soho-tsukuba/www.soho.tsukuba.me"}},[t._v("GitHub")]),e("br")]),e("div",{staticClass:"col-lg-1"})])],1)],1)},y=[],A={name:"FooterContent"},x=A,O=(e("a8e7"),Object(u["a"])(x,w,y,!1,null,"5b613fe2",null)),j=O.exports,k={name:"App",components:{HeaderMenu:v,HeaderContent:C,FooterContent:j}},M=k,P=(e("034f"),Object(u["a"])(M,n,r,!1,null,null,null)),E=P.exports,I=e("8c4f"),T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"root"},[e("b-container",{attrs:{fluid:""}},[e("b-row",[e("div",{staticClass:"col"},[e("b-row",{staticClass:"mb-3 px-2 about",style:{"background-image":"url("+t.oakTexture+")"}},[e("div",{staticClass:"col-lg-1"}),e("div",{staticClass:"col-lg-10"},[e("h1",{staticClass:"catch-copy mt-5 mb-4"},[t._v(" All of ITF. Minecrafters,"),e("br"),e("span",{staticClass:"tsukuba-color"},[t._v("Are you ready?")])]),e("p",{staticClass:"mt-4 mb-5"},[t._v(" 新型コロナウイルスの影響で大学に行くことが極端に少なくなった2021年。"),e("br"),t._v(" 大半の講義はオンラインで実施され、キャンパスを歩くことはあまりなかったことでしょう。"),e("br"),e("br"),t._v(" そんなのもう嫌だ。せっかくつくばの街に来たんだから、思いっきり構内を駆け回りたいそこのマインクラフター！"),e("br"),t._v(" あなたの番です。キャンパスを作って、広い広いキャンパスを一緒に堪能しませんか？"),e("br"),e("br"),t._v(" Minecraftをお持ちの筑波大生のみなさん、たくさんのご参加お待ちしております！ ")])]),e("div",{staticClass:"col-lg-1"})])],1)])],1),e("b-container",[e("b-row",[e("div",{staticClass:"col-lg-1"}),e("div",{staticClass:"col-lg-10"},[e("b-row",{staticClass:"mx-1 mb-4",attrs:{id:"about"}},[e("div",{staticClass:"col-lg"},[e("h3",{staticClass:"title title-about mt-3"},[t._v("About")]),e("p",[t._v(" マイクラ雙峰祭プロジェクトは、"),e("b",[t._v("2021年11月6日（土）と7日（日）の15:30~16:15")]),t._v("にオンラインで開催される雙峰祭での企画です。"),e("br"),t._v(" 筑波大学キャンパスをMinecraft内で再現して、"),e("b",[t._v("雙峰祭当日に生配信")]),t._v("にてその様子をお届けします！"),e("br"),e("br"),e("b",[t._v("※都合により一般の方の雙峰祭中のサーバー参加はできなくなってしまいました。")]),e("br"),t._v(" 楽しみにされていた方には申し訳ありませんが、ご理解していただけると幸いです。"),e("br"),e("br"),t._v(" なお"),e("b",[t._v("雙峰祭の終了後、一般向けにサーバーを開放")]),t._v("しますので、キャンパス建築にもぜひご参加ください！"),e("br")]),e("div",{staticClass:"text-center mb-4"},[e("p",[e("a",{staticClass:"btn btn--orange btn-c",attrs:{href:""}},[t._v("YouTube Liveに参加")]),e("br")])])]),e("div",{staticClass:"youtube"},[e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/0OcRTXVHzHY",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])],1),e("div",{staticClass:"col-lg-1"})])],1)],1)},S=[],B=e("5c7c"),Q=e.n(B),V=e("fb01"),H=e.n(V),$=e("a67d"),U=e.n($),Y=e("fea6"),z=e.n(Y),K=e("366f"),L=e.n(K),D=e("8897"),F=e.n(D),G=e("f341"),J=e.n(G),N={name:"MainPage",data:function(){return{desktopIcon:Q.a,smartphoneIcon:H.a,switchIcon:U.a,appStore:z.a,googlePlay:L.a,minecraftLogo:F.a,oakTexture:J.a}}},R=N,X=(e("ddaa"),Object(u["a"])(R,T,S,!1,null,"3da01976",null)),W=X.exports,Z=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{staticClass:"root"},[e("b-row",[e("div",{staticClass:"col-lg-1"}),e("div",{staticClass:"col-lg-10 my-4",attrs:{id:"top"}},[e("h5",{staticClass:"title title-play"},[t._v("How To Play")]),e("p",[t._v(" このページでは雙峰祭当日の遊び方と注意事項について説明します。"),e("br")]),e("h4",{staticClass:"title-play mt-4"},[t._v("生配信企画")]),e("p",[t._v(" 当初の告知とは異なり、残念ながら一般の方にサーバーに入っていただいて筑波大学 Minecraftキャンパスを楽しんでいただくことはできなくなってしまいました。"),e("br"),t._v(" そこで、予定を変更して"),e("b",[t._v("サーバー内の生配信")]),t._v("を行うこととなりました！"),e("br"),e("br"),t._v(" 配信では、サーバー内の様子やミニゲームの様子をお届けする予定です。ぜひご参加ください！"),e("br"),e("br")]),e("h4",{staticClass:"title-attention mt-4"},[t._v("雙峰祭後の楽しみ方（予定）")]),e("p",[e("b",[t._v("雙峰祭後、改めて一般ユーザー向けにサーバーを開放")]),t._v("し、キャンパス建築を楽しんでもらおうと考えています。"),e("br"),t._v(" そして、建設したキャンパスの中でのミニゲームやイベント企画の開催も検討しています。"),e("br"),t._v(" その際には当サイトやTwitter上で告知いたしますので、ぜひご確認ください。 ")]),e("hr",{staticClass:"my-4"}),e("h5",{staticClass:"title title-attention",attrs:{id:"attention"}},[t._v("Attention")]),e("p",[e("b",[t._v("生配信時")]),e("br"),t._v(" ・コメント欄では節度ある言動を心がけ、誹謗中傷や公序良俗に反する内容や、その他不適切な内容を書き込むことはおやめください。"),e("br"),e("br"),e("b",[t._v("サーバーに参加する際")]),e("br"),t._v(" ・当日はサーバーへの負荷を考慮し参加人数に制限をかけさせていただきますので、譲り合ってご参加ください。"),e("br"),t._v(" ・サーバーに負荷をかける行為は行わないでください。"),e("br"),t._v(" ・Mod等チートツールを使用しての参加はご遠慮ください。"),e("br"),t._v(" ・ゲーム内チャットにおいての暴言、名誉棄損、誹謗中傷、公序良俗に反する発言などは行わないでください。"),e("br"),t._v(" ・キャンパス等ワールドを破壊する行為は行わないでください。"),e("br"),t._v(" ・その他、問題のある行為や過度に迷惑をかける行為を行わないでください。"),e("br"),t._v(" ・以上のことが守られない場合、発見次第すみやかに追放等の処置を行います。 ")])]),e("div",{staticClass:"col-lg-1"})])],1)},q=[],tt={name:"HowToPlayPage"},at=tt,et=(e("6e2c"),Object(u["a"])(at,Z,q,!1,null,"222845c4",null)),st=et.exports,nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",{staticClass:"root"},[e("b-row",[e("div",{staticClass:"col-lg-1"}),e("div",{staticClass:"col-lg-10 my-4",attrs:{id:"top"}},[e("h5",{staticClass:"title",attrs:{id:"donation"}},[t._v("Donation")]),e("p",[t._v(" マイクラ雙峰祭プロジェクトにご興味を持っていただきありがとうございます。"),e("br"),e("br"),t._v(" このプロジェクトは、学内のユーザー向けに無料でMinecraftサーバーを開放し、自由に建築を楽しんでもらう というコンセプトのもとで運営しております。"),e("br"),e("br"),t._v(" しかしながらこのサーバーを運営するためには資金が必要であり、現在では"),e("span",{staticClass:"marked"},[t._v("月に約4000円~5000円程度")]),t._v("の 費用が掛かっています。"),e("br"),e("br"),t._v(" そのような経緯があり、誠に勝手ながらご寄付という形でこのような場を設けさせていただきました。"),e("br"),e("br"),t._v(" お気持ちだけでもいいですので、少額でも皆様からご寄付いただけますと幸いです。（PayPal決済のみに対応しております。）"),e("br"),e("br"),t._v(" なお以下のページからご寄付いただきますと、サーバー運営費用以外の用途で使われることはありません。"),e("br")]),e("p",{staticClass:"text-center"},[e("br"),e("a",{attrs:{href:"https://www.creeperhost.net/playments/SCG/contribute"}},[t._v("寄付ページへ")]),t._v("（外部ページへ遷移します） "),e("br"),e("br")]),e("img",{staticClass:"image",attrs:{src:t.nightImage,alt:"image"}})]),e("div",{staticClass:"col-lg-1"})])],1)},rt=[],ot=e("4d03"),it=e.n(ot),ct={name:"Donation",data:function(){return{nightImage:it.a}}},lt=ct,ut=(e("9125"),Object(u["a"])(lt,nt,rt,!1,null,"77c0bc94",null)),bt=ut.exports;s["default"].use(I["a"]);var vt=new I["a"]({mode:"history",routes:[{path:"/",name:"mainPage",component:W,meta:{title:"マイクラ雙峰祭プロジェクト"}},{path:"/how_to_play",name:"howToPlayPage",component:st,meta:{title:"遊び方 - マイクラ雙峰祭プロジェクト"}},{path:"/donation",name:"donationPage",component:bt,meta:{title:"寄付について - マイクラ雙峰祭プロジェクト"}}]}),pt="Some Default Title";vt.afterEach((function(t,a){document.title=t.meta.title||pt}));var ft=vt,dt=e("5f5b"),gt=e("b1e0");e("f9e3"),e("2dd8");s["default"].config.productionTip=!1,s["default"].use(dt["a"]),s["default"].use(gt["a"]),new s["default"]({router:ft,render:function(t){return t(E)}}).$mount("#app")},"5c7c":function(t,a,e){t.exports=e.p+"img/desktop-icon.905861d9.svg"},"6e2c":function(t,a,e){"use strict";e("e6f5")},"85ec":function(t,a,e){},8897:function(t,a,e){t.exports=e.p+"img/minecraft-logo.c9dfeb0a.png"},9125:function(t,a,e){"use strict";e("cbbc")},a50a:function(t,a,e){},a67d:function(t,a,e){t.exports=e.p+"img/switch-icon.db804ea4.svg"},a8e7:function(t,a,e){"use strict";e("5652")},cbbc:function(t,a,e){},ddaa:function(t,a,e){"use strict";e("a50a")},e6bf:function(t,a,e){},e6f5:function(t,a,e){},f341:function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgBAMAAAB54XoeAAAAFVBMVEW8mGKfhE20kFpzXjlpVDN8Yj5MPSafUFAXAAAA6UlEQVR4Xu3YwQ3DIBQEUbdAC7RAC24hLaT/EiJ8YOUvVk6um5lTHJnnE+KL46ptOlZ9pv92SQkGAQG1bsz6qrn6TL/+BwQEtOu0ZPd1AcEgIOB5bzx3zuyySBAQ8JtxTo9tpcNMHSoJBAR8fkdM39Q2ZYKAgCUxdmPqLDIFgoCAdkxTP41zmSAgoO0C6gW0cls0EwQEbK4i2JNKQC4ICOi3lL+KdgWDgICa0OzANjbZ9zJBQMCSvWy2m7AwmSAgoI4X+6nddGf9TBAQ0I5uFVyVxaVMEBBw3HvNzpUed5Pce1bGuUgQEPADvWY6YkiZ0gMAAAAASUVORK5CYII="},faf3:function(t,a,e){t.exports=e.p+"img/header-new.55e4af6a.png"},fb01:function(t,a,e){t.exports=e.p+"img/smartphone-icon.70b4e693.svg"},fea6:function(t,a,e){t.exports=e.p+"img/appstore.57272347.svg"}});
//# sourceMappingURL=index.d3ca42da.js.map
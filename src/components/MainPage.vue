<template>
  <div class="root">
    <b-container fluid>
      <b-row>
        <div class="col">
          <b-row class="mb-3 px-2 about"
                 :style="{ 'background-image': 'url(' + oakTexture + ')' }">

            <div class="col-lg-1" />

            <div class="col-lg-10">
              <h1 class="catch-copy mt-5 mb-4">
                All of ITF. Minecrafters,<br />
                <span class="tsukuba-color">Are you ready?</span>
              </h1>

              <p class="mt-4 mb-5">
                新型コロナウイルスの影響で大学に行くことが極端に少なくなった2021年。<br />
                大半の講義はオンラインで実施され、キャンパスを歩くことはあまりなかったことでしょう。<br />
                <br />
                そんなのもう嫌だ。せっかくつくばの街に来たんだから、思いっきり構内を駆け回りたいそこのマインクラフター！<br />
                あなたの番です。キャンパスを作って、広い広いキャンパスを一緒に堪能しませんか？<br />
                <br />
                Minecraftをお持ちの筑波大生のみなさん、たくさんのご参加お待ちしております！
              </p>
        </div>

            <div class="col-lg-1" />

          </b-row>
        </div>
      </b-row>
    </b-container>

    <b-container>
      <b-row>
        <div class="col-lg-1" />

        <div class="col-lg-10">
          <b-row class="mx-1 mb-4" id="about">
            <div class="col-lg">
              <h3 class="title title-about mt-3">About</h3>
              <p>
                マイクラ雙峰祭プロジェクトは、<b>2021年11月6日（土）と7日（日）の15:30~16:15</b>にオンラインで開催される雙峰祭での企画です。<br />
                筑波大学キャンパスをMinecraft内で再現して、<b>雙峰祭当日に生配信</b>にてその様子をお届けします！<br /><br />
                <b>※都合により一般の方の雙峰祭中のサーバー参加はできなくなってしまいました。</b><br />
                楽しみにされていた方には申し訳ありませんが、ご理解していただけると幸いです。<br /><br />
                なお<b>雙峰祭の終了後、一般向けにサーバーを開放</b>しますので、キャンパス建築にもぜひご参加ください！<br />
              </p>

              <b-container>
                <b-row class="mt-3 mb-5">
                  <div class="col-lg-6">
                    <a href="https://www.youtube.com/watch?v=ibn_eg8lNro" class="btn btn--orange btn-c">YouTube Live（11/6）に参加</a>
                  </div>
                  <div class="col-lg-6">
                    <a href="https://www.youtube.com/watch?v=kZnndJl7k7g" class="btn btn--orange btn-c">YouTube Live（11/7）に参加</a>
                  </div>
                </b-row>
              </b-container>

            </div>
            <div class="youtube">
              <iframe width="560" height="315"
                      src="https://www.youtube.com/embed/0OcRTXVHzHY"
                      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
              </iframe>
            </div>
          </b-row>
        </div>
        <div class="col-lg-1" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import DesktopIcon from "@/assets/img/desktop-icon.svg"
import SmartphoneIcon from "@/assets/img/smartphone-icon.svg"
import SwitchIcon from "@/assets/img/switch-icon.svg"
import AppStore from "@/assets/img/appstore.svg"
import GooglePlay from "@/assets/img/googleplay.png"
import MinecraftLogo from "@/assets/img/minecraft-logo.png"
import OakTexture from "@/assets/img/oak-texture.png"

export default {
  name: "MainPage",
  data() {
    return {
      desktopIcon: DesktopIcon,
      smartphoneIcon: SmartphoneIcon,
      switchIcon: SwitchIcon,
      appStore: AppStore,
      googlePlay: GooglePlay,
      minecraftLogo: MinecraftLogo,
      oakTexture: OakTexture
    }
  }
}
</script>


<style scoped>
.root {
  color: #333333;
  text-align: left;
}

a {
  border-bottom-style: dashed;
  border-bottom-color: #333333;
  border-bottom-width: 1px;
  color: #333333;
  text-decoration: none;
}

a:hover {
  color: #00C0D4;
  border-bottom-color: #00C0D4;
}

a:link {
  color: #333333;
}

a:visited {
  color: #555555;
  border-bottom-color: #555555;
}

.about {
  background-repeat: repeat;
  color: white;
  font-family: 'DotGothic16', sans-serif;
  font-size: 1.3em;
  border-radius: 0 0 16px 16px;
}

.catch-copy {
  font-family: 'DotGothic16', sans-serif;
  font-size: 2.0em;
  font-weight: bold;
  letter-spacing: 0.02em;
}

.catch-copy:first-letter {
  color: #00c0d4;
}

.title {
  font-family: 'DotGothic16', sans-serif;
  font-size: 2.2em;
}

.tsukuba-color {
  color: #4C0099;
}

.platform-icon {
  width: 20%;
}

.app-store {
  height: 75px;
}

.google-play {
  height: 90px;
}

.minecraft-logo {
  height: 150px;
}

.title-about:first-letter {
  color: #4c0099;
}

.title-join:first-letter {
  color: #5E9D34;
}

.youtube {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  margin: 0 auto;
}

.youtube iframe {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
}

a.btn--orange {
  color: #fff;
  background-color: #c4302b;
}

a.btn--orange:hover {
  color: #fff;
  background: #D64946;
}

a.btn-c {
  font-size: 1.5rem;
  position: relative;
  padding: 1.0rem 3rem 1.0rem 3rem;
}

a.btn-c i.fa {
  margin-right: 1rem;
}

</style>
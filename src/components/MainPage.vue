<template>
  <div class="root">
    <b-container fluid>
      <b-row>
        <div class="col">
          <b-row class="mb-4 px-2 about"
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
          <b-row class="mt-3 mx-1" id="about">
            <div class="col-lg">
              <h3 class="title title-about">About</h3>
              <p>
                マイクラ雙峰祭プロジェクトは、2021年11月6日（土）と7日（日）にオンラインで開催される雙峰祭での企画です。<br />
                筑波大学キャンパスをMinecraft内で再現して、雙峰祭当日にサーバーを開放します。サーバー内ではキャンパスの制作やイベント等を行う予定です。<br />
                また、当日は生配信も予定しております！<br />

                <br />
                現在十数名ほどで運営していますが、当日までにキャンパスのベースとなる建築を行う運営メンバーを募集しております。（Minecraft Java Editionを持っている必要があります）興味がありましたら<a href="https://twitter.com/micra_sohopjt">Twitter</a>のDMまでお声掛けください。<br />
                また当日の解放前に試験的にサーバーを開放する場合もありますので、その際はぜひご協力をお願いします。
              </p>
            </div>
          </b-row>

          <hr />

          <b-row class="mt-3 mx-1" id="join">
            <div class="col-lg">
              <h3 class="title title-join">How to Join</h3>
              <p>クロスプラットフォームでプレイすることができるため、以下のデバイスから参加することができます。</p>
            </div>
          </b-row>

          <b-row class="mb-4 mx-1">
            <div class="col-lg-6 mt-4">
              <h5 class="title-text">Minecraft Java Edition</h5>
              <p>
                PC<br /><br />
                アドレス：現在非公開<br />
                ポート：現在非公開<br /><br />
                ※MojangまたはMicrosoftアカウントでログインしている必要があります。<br />
                ※Java EditionはMinecraft公式サイトからインストールしたものです。
              </p>
              <b-row>
                <div class="col text-center">
                  <img :src="desktopIcon" alt="desktop" class="platform-icon" />
                </div>
              </b-row>
              <b-row>
                <div class="col text-center">
                  <img :src="minecraftLogo" alt="minecraft" class="minecraft-logo" onclick="window.location='https://www.minecraft.net/ja-jp/store/minecraft-java-edition'" />
                </div>
              </b-row>
            </div>

            <div class="col-lg-6 mt-4">
              <h5 class="title-text">Minecraft 統合版</h5>
              <p>
                Windows 10 / iOS / Android / Nintendo Switch<br /><br />
                アドレス：現在非公開<br />
                ポート：現在非公開<br /><br />
                ※Microsoft XBoxアカウントでログインしている必要があります。<br />
                ※Java版に準拠しているため、一部のブロックが使えないなどの問題が起こる場合があります。
              </p>
              <b-row>
                <div class="col text-center">
                  <img :src="desktopIcon" alt="desktop" class="platform-icon" />
                  <img :src="smartphoneIcon" alt="smartphone" class="platform-icon mx-4" />
                  <img :src="switchIcon" alt="switch" class="platform-icon" />
                </div>
              </b-row>
              <b-row>
                <div class="col text-center mt-4">
                  <img :src="appStore" alt="desktop" class="app-store" onclick="window.location='https://apps.apple.com/jp/app/minecraft/id479516143'" />
                  <img :src="googlePlay" alt="desktop" class="google-play" onclick="window.location='https://play.google.com/store/apps/details?id=com.mojang.minecraftpe&hl=ja&gl=US'" />
                </div>
              </b-row>
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

</style>
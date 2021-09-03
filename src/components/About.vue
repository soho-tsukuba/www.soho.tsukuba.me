<template>
<div class="root">
  <b-container>
    <b-row>
      <div class="col-lg-1" />

      <div class="col-lg-10">
        <b-row class="my-4 mx-1 px-2 about"
               :style="{ 'background-image': 'url(' + oakTexture + ')' }">

          <div class="col-lg" id="about">
            <h1 class="catch-copy mt-4 mb-4">
              For all ITF. Minecrafters,<br />
              <span class="tsukuba-color">Are you ready?</span>
            </h1>

            <p class="mt-4">
              このプロジェクトは、今年度オンラインで開催される雙峰祭での企画です。<br />
              筑波大学キャンパスをMinecraft内で再現し、雙峰祭当日にみんなでわいわいすることを目的としています。<br />
              <br />
              "オンラインのキャンパス"にも足を運んでみませんか？<br />
              <br />
              Minecraftをお持ちの筑波大生のみなさん、たくさんのご参加お待ちしております！
            </p>
          </div>

        </b-row>

        <hr />

        <b-row class="mt-4 mx-1">
          <div class="col-lg">
            <h3 class="title">Platforms</h3>
            <p>クロスプラットフォームでプレイすることができるため、以下のデバイスから参加することができます。</p>
          </div>
        </b-row>

        <b-row class="mb-4 mx-1">
          <div class="col-lg-6 mt-4">
            <h5 class="title-text">Minecraft Java Edition</h5>
            <p>
              PC<br /><br />
              ※MojangまたはMicrosoftアカウントでログインしている必要があります。
            </p>
            <img :src="desktopIcon" alt="desktop" class="platform-icon" />
          </div>
          <div class="col-lg-6 mt-4">
            <h5 class="title-text">Minecraft 統合版</h5>
            <p>
              Windows 10 / iOS / Android / Nintendo Switch<br /><br />
              ※Microsoft XBoxアカウントでログインしている必要があります。
            </p>

            <img :src="smartphoneIcon" alt="smartphone" class="platform-icon" />
          </div>
        </b-row>

        <hr />

        <b-row class="mt-4 mx-1">
          <div class="col-lg">
            <h3 class="title" id="join">How to Join</h3>
            <p>以下の情報を入力してください。</p>
            <p class="my-4 addresses">
              IPアドレス：soho.tsukuba.me<br />
              ポート：25565
            </p>
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
import OakTexture from "@/assets/img/oak-texture.png"

export default {
  name: "About",
  data() {
    return {
      desktopIcon: DesktopIcon,
      smartphoneIcon: SmartphoneIcon,
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

  .about {
    background-repeat: repeat;
    color: white;
    border-radius: 16px;
    font-family: 'DotGothic16', sans-serif;
    font-size: 1.3em;
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

  .addresses {}
</style>
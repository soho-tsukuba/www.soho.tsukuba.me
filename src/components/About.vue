<template>
<div class="root">
  <b-container fluid>
    <b-row>
      <div class="col" id="about">
        <b-row class="mb-4 px-2 about"
               :style="{ 'background-image': 'url(' + oakTexture + ')' }">

          <div class="col-lg-1" />

          <div class="col-lg-10">
            <h1 class="catch-copy mt-5 mb-4">
              All of ITF. Minecrafters,<br />
              <span class="tsukuba-color">Are you ready?</span>
            </h1>

            <p class="mt-4 mb-5">
              このプロジェクトは、今年度オンラインで開催される雙峰祭での企画です。<br />
              筑波大学キャンパスをMinecraft内で再現し、雙峰祭当日にみんなでわいわいすることを目的としています。<br />
              <br />
              "オンラインのキャンパス"にも足を運んでみませんか？<br />
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
        <b-row class="mt-3 mx-1" id="platforms">
          <div class="col-lg">
            <h3 class="title title-platforms">Platforms</h3>
            <p>クロスプラットフォームでプレイすることができるため、以下のデバイスから参加することができます。</p>
          </div>
        </b-row>

        <b-row class="mb-4 mx-1">
          <div class="col-lg-6 mt-4">
            <h5 class="title-text">Minecraft Java Edition</h5>
            <p>
              PC<br /><br />
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

        <hr />

        <b-row class="mt-4 mx-1" id="join">
          <div class="col">
            <h3 class="title title-join">How to Join</h3>
            <p>以下の情報を入力してください。</p>
          </div>
        </b-row>

        <b-row class="mb-4 mx-1">
          <div class="col-sm-6 mt-4">
            <h5 class="title-text">Minecraft Java Edition</h5>
            <p>
              IPアドレス：soho.tsukuba.me<br />
              ポート：25536
            </p>
          </div>

          <div class="col-sm-6 mt-4">
            <h5 class="title-text">Minecraft 統合版</h5>
            <p>
              IPアドレス：soho.tsukuba.me<br />
              ポート：19132
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
import SwitchIcon from "@/assets/img/switch-icon.svg"
import AppStore from "@/assets/img/appstore.svg"
import GooglePlay from "@/assets/img/googleplay.png"
import MinecraftLogo from "@/assets/img/minecraft-logo.png"
import OakTexture from "@/assets/img/oak-texture.png"

export default {
  name: "About",
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

  .title-platforms:first-letter {
    color: #5E9D34;
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

  .title-join:first-letter {
    color: #6600CC;
  }

  .addresses {}
</style>
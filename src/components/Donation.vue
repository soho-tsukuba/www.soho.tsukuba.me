<template>
  <b-container class="root">
    <b-row>
      <div class="col-lg-1" />

      <div class="col-lg-10 my-4" id="top">
        <h5 class="title" id="donation">Donation</h5>
        <p>
          マイクラ雙峰祭プロジェクトにご興味を持っていただきありがとうございます。<br /><br />
          このプロジェクトは、学内のユーザー向けに無料でMinecraftサーバーを開放し、自由に建築を楽しんでもらう というコンセプトのもとで運営しております。<br /><br />
          しかしながらこのサーバーを運営するためには資金が必要であり、現在では<span class="marked">月に約4000円~5000円程度</span>の 費用が掛かっています。<br /><br/>
          そのような経緯があり、誠に勝手ながらご寄付という形でこのような場を設けさせていただきました。<br /><br />
          お気持ちだけでもいいですので、少額でも皆様からご寄付いただけますと幸いです。（PayPal決済のみに対応しております。）<br /><br />
          なお以下のページからご寄付いただきますと、サーバー運営費用以外の用途で使われることはありません。<br />
        </p>
        <p class="text-center">
          <br />
          <a href="https://www.creeperhost.net/playments/SCG/contribute">寄付ページへ</a>（外部ページへ遷移します）
          <br /><br />
        </p>
        <img class="image" :src="nightImage" alt="image" />
      </div>
      <div class="col-lg-1" />
    </b-row>
  </b-container>
</template>

<script>
import NightImage from "@/assets/img/header-night.png";

export default {
  name: "Donation",
  data() {
    return {
      nightImage: NightImage
    }
  }
}
</script>

<style scoped>
.root {
  color: #333333;
  text-align: left;
}

.title {
  font-family: 'DotGothic16', sans-serif;
  font-size: 2.2em;
}

.title:first-letter {
  color: #fb8c00;
}

.marked {
  font-weight: bold;
}

.image {
  position: relative;
  width: 100%;
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
</style>
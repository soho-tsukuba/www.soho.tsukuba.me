<template>
  <div>
    <b-jumbotron fluid text-variant="white" class="jumbotron-bg" :style="{ 'background-image': 'url(' + headerImage + ')' }">
      <template #header>
        <span class="title-text">マイクラ<span class="sohosai">雙峰祭</span>プロジェクト</span><br />
        <span class="year">2021</span>
      </template>
      <template #lead>
        <span class="description">
          筑波大学雙峰祭 オンライン企画<br />
          2021年11月6～7日
        </span>
      </template>
      <hr class="my-4" />
      <p class="description">
        マイクラ内で筑波大学キャンパスを再現して、雙峰祭気分を楽しもう！
      </p>
    </b-jumbotron>
  </div>
</template>

<script>
import HeaderImage from "@/assets/img/header-new.png"

export default {
  name: "Header",
  data() {
    return {
      headerImage: HeaderImage
    }
  }
}
</script>

<style scoped>
.title-text {
  color: #333333;
  font-family: 'DotGothic16', sans-serif;
}

.sohosai {
  color: #6600cc;
}

.year {
  color: #00c0d4;
  font-family: 'DotGothic16', sans-serif;
}

.jumbotron-bg {
  padding-top: 172px;
  padding-bottom: 172px;
}

.description {
  font-family: 'M PLUS 1p', sans-serif;
  color: white;
  font-size: 1.3em;
}
</style>
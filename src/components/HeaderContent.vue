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
          2021年11月6～7日 / 15:30~16:15
        </span>
      </template>
      <hr class="my-4" />
      <p class="description">
        筑波大学 Minecraftキャンパスの様子をお届け！
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
  color: #ffee58;
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
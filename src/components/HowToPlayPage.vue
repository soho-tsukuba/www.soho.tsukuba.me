<template>
  <b-container class="root">
    <b-row>
      <div class="col-lg-1" />

      <div class="col-lg-10 my-4" id="top">
        <h5 class="title title-play">How To Play</h5>
        <p>執筆中！</p>
      </div>

      <div class="col-lg-1" />
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "HowToPlayPage"
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

  .title-play:first-letter {
    color: #00C0D4;
  }
</style>
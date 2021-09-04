<template>
  <footer>
    <b-nav class="bg-dark" variant="dark" align="center">
      <p class="mt-3 text-white">
        &copy; 2021 マイクラ雙峰祭プロジェクト, <a href="http://github.com/itsu-dev" class="text-white">Itsu</a><br />
        <span class="caption">マイクラ雙峰祭プロジェクトはMojangから承認されておらず、Mojangとは関係ありません。</span><br />
        <br />
        <b-icon icon="twitter" font-scale="2" class="twitter-icon" onclick="window.location='https://twitter.com/micra_sohopjt'" />
        <b-icon icon="github" font-scale="2" class="github-icon" onclick="window.location='https://github.com/soho-tsukuba/www.soho.tsukuba.me'" />
      </p>
    </b-nav>
  </footer>
</template>

<script>
export default {
  name: "FooterContent"
}
</script>

<style scoped>
  .caption {
    color: lightgray;
    font-size: 0.8em;
  }

  .twitter-icon {
    color: #00ACEE;
    width: 2.0em;
  }
</style>
<template>
  <footer>
    <b-container fluid>
      <b-row class="bg-dark pt-4 root" align="left">
        <div class="col-lg-1"/>

        <div class="col-lg-10">
          <span class="title-text">マイクラ<span class="sohosai">雙峰祭</span>プロジェクト<span class="year">2021</span></span><br/>
        </div>

        <div class="col-lg-1"/>
      </b-row>
      <b-row class="bg-dark pt-2 pb-4 root" align="left">
        <div class="col-lg-1"/>

        <div class="col-lg-5">
          <p>
            &copy; 2021 マイクラ雙峰祭プロジェクト, <a href="http://github.com/itsu-dev" class="text-white">Itsu</a><br/>
            <br />
            <span class="caption">
              マイクラ雙峰祭プロジェクトはMojangから承認されておらず、Mojangとは関係ありません。
            </span>
          </p>
        </div>

        <div class="col-lg-2" />

        <div class="col-lg-3">
          <h5 class="title-sub">
            Links
          </h5>
          <a href="https://sohosai.com/">筑波大学 雙峰祭</a><br />
          <a href="https://twitter.com/micra_sohopjt">Twitter</a><br />
          <a href="https://github.com/soho-tsukuba/www.soho.tsukuba.me">GitHub</a><br />
        </div>

        <div class="col-lg-1"/>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: "FooterContent"
}
</script>

<style scoped>
.root {
  color: white;
}

.caption {
  color: lightgray;
  font-size: 0.8em;
}

.twitter-icon {
  color: #00ACEE;
  width: 2.0em;
}

.title-text {
  font-family: 'DotGothic16', sans-serif;
  font-size: 1.6em;
}

.sohosai {
  color: #6600cc;
}

.year {
  color: #00c0d4;
}

.title-sub {
  font-family: 'DotGothic16', sans-serif;
  font-size: 1.2em;
}

a {
  color: lightgrey;
  text-decoration: none;
  border-bottom-color: lightgrey;
  border-bottom-width: 1px;
  border-bottom-style: dashed;
}

a:hover {
  color: #00c0d4;
}
</style>
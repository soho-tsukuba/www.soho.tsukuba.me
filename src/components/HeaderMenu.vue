<template>
  <div>
    <b-navbar class="fixed-top" toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-brand class="mx-4" to="/" >
        <span class="title-text">マイクラ<span class="sohosai">雙峰祭</span>プロジェクト<span class="year">2021</span></span>
      </b-navbar-brand>

      <b-collapse id="nav-collapse" class="navbar-collapse justify-content-end" is-nav>
        <b-navbar-nav>
          <b-nav-item right to="/#about">About</b-nav-item>
          <b-nav-item right to="/#join">参加方法</b-nav-item>
          <b-nav-item right to="/how_to_play#top">遊び方</b-nav-item>
          <b-nav-item right to="/how_to_play#attention">注意事項</b-nav-item>
          <b-nav-item right to="/donation#donation">寄付について</b-nav-item>
          <b-nav-item right href="https://twitter.com/micra_sohopjt">Twitter</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',

  // https://peccu.hatenablog.com/entry/2017/11/18/000000
  watch: {
    '$route': function (n, o) {
      if (n.hash.match(/^#/)) {
        document.getElementById(n.hash.replace(/^#/, '')).scrollIntoView()
      }
      console.log('new, old', [n.hash, o.hash])
    }
  },
  mounted () {
    if (this.$route.hash.match(/^#/)) {
      document.getElementById(this.$route.hash.replace(/^#/, '')).scrollIntoView()
    }
  }
}

</script>

<style scoped>
.title-text {
  font-family: 'DotGothic16', sans-serif;
  font-size: 0.8em;
}

.sohosai {
  color: #6600cc;
}

.year {
  color: #00c0d4;
}

</style>
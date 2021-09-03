<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-navbar-brand class="mx-4" href="#">
        <span class="title-text">マイクラ<span class="sohosai">雙峰祭</span>プロジェクト<span class="year">2021</span></span>
      </b-navbar-brand>

      <b-collapse id="nav-collapse" class="navbar-collapse justify-content-end" is-nav>
        <b-navbar-nav>
          <b-nav-item right href="#">About</b-nav-item>
          <b-nav-item right href="#">参加する</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
  data() {
    return {
      items: [
        {title: 'トップ', path: '/'},
        {title: 'About', path: '#about'},
        {title: '参加する', path: '#join'}
      ]
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
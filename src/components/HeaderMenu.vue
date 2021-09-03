<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand href="#">
        <span class="title-text">マイクラ<span class="sohosai">雙峰祭</span>プロジェクト<span class="year">2021</span></span>
      </b-navbar-brand>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
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
  margin-left: 16px;
  font-family: 'DotGothic16', sans-serif;
}

.sohosai {
  color: #6600cc;
}

.year {
  color: #00c0d4;
}

</style>
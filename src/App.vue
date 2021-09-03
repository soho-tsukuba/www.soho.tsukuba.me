<template>
  <div id="app">
    <header-menu></header-menu>
    <header-content></header-content>
  </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu";
import HeaderContent from "./components/HeaderContent";

export default {
  name: 'App',
  components: {
    HeaderContent,
    HeaderMenu
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=M+PLUS+1p:wght@300&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  font-family: 'M PLUS 1p', sans-serif;
  margin: 0;
}
</style>

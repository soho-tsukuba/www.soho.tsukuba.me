<template>
  <div id="app">
    <header-menu></header-menu>
    <header-content></header-content>
    <about></about>
  </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu";
import HeaderContent from "./components/HeaderContent";
import About from "@/components/About";

export default {
  name: 'App',
  components: {
    About,
    HeaderContent,
    HeaderMenu
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=M+PLUS+1p&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
}
</style>

<template>
  <div id="app">
    <header-menu></header-menu>
    <header-content></header-content>
    <router-view></router-view>
    <footer-content></footer-content>
  </div>
</template>

<script>
import HeaderMenu from "./components/HeaderMenu";
import HeaderContent from "@/components/HeaderContent";
import FooterContent from "./components/FooterContent";

export default {
  name: 'App',
  components: {
    HeaderMenu,
    HeaderContent,
    FooterContent
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

a {
  border-bottom-style: dashed;
  border-bottom-color: #333333;
  border-bottom-width: 1px;
  color: #333333;
  text-decoration: none;
}

a:link {
  color: #333333;
}

</style>

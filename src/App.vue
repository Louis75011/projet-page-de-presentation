// Ce qui suit sera présent sur toutes les pages (Header, Navbar, Footer)
<template>
  <div id="app">
    <Menu />
    <router-view />
  </div>
</template>

<script>
  import Menu from "./components/Menu"

  export default {
    name: 'App',
    components: {
      Menu
    }
  }
</script>

<style>
  #app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-image: linear-gradient(to right, gray, white, cyan);
  }
</style>
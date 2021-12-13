// Ce qui suit sera présent sur toutes les pages (Header, Navbar, Footer)
<template>
  <div id="app">
    <Menu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
  import Menu from "./components/Menu.vue"
  import Footer from "./components/Footer.vue"

  export default {
    name: 'App',
    components: {
      Menu,
      Footer
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
    background-image: linear-gradient(to right, #D0D0D0, white, #89CFF0);
  }

  .puff-in-center {
    -webkit-animation: puff-in-center 0.8s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
    animation: puff-in-center 0.8s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
  }

  /* animation puff-in-center */
  @-webkit-keyframes puff-in-center {
    0% {
      -webkit-transform: scale(2);
      transform: scale(2);
      -webkit-filter: blur(4px);
      filter: blur(4px);
      opacity: 0;
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }

  @keyframes puff-in-center {
    0% {
      -webkit-transform: scale(2);
      transform: scale(2);
      -webkit-filter: blur(4px);
      filter: blur(4px);
      opacity: 0;
    }

    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
</style>
<template>
  <v-ons-page id="app">
    <div id="app">
      <!--<img src="./assets/logo.png">-->
      <router-view></router-view>
    </div>
  </v-ons-page>
</template>

<script>
import HomePage from './components/Login'

export default {
  name: 'app',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);

  ons-splitter-side[side=left][animation=overlay] {
    border-right: 1px solid #BBB;
  }

  #app {
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*margin-top: 130px;*/
  }
</style>

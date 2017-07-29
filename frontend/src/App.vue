<template>
  <v-ons-page id="app">
    <div>
      <router-view></router-view>
    </div>
  </v-ons-page>
</template>

<script>
  import HomePage from './components/Login';

  export default {
    name: 'app',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans');

  #app {
    font-family: 'Noto Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

</style>

<template>
<div class="loding">
    <div class="img">
        <div class="opacity">
            <div class="msg">이미지 체크중…
            <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
            </div>
<br/>
		<router-link to="/main">@</router-link>
        </div>
    </div>
</div>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  components: {
    PulseLoader
  },
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: { 
      type: String,
      default: '#FFFFFF'
    }
  }
}

</script>

<!-- modal.vue -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .img {
        background-image: url("../assets/echoBag.png");
        background-size: contain;
        height: 667px;
        width: 375px;
    }
    .opacity {
        padding: 9cm 5cm;
        margin: auto;
        height: 1em;
        width: 174pt;
        background-color: rgba( 0, 0, 0, 0.5 );
        background-size: cover;
    }
    .msg {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        width: 10em;
        height: 1em;
        font-size: 1.15em;
        color: #FFFFFF;
        font-weight: bold;
    }
</style>

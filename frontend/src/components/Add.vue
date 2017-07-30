<template>
  <v-ons-page class="add">
    <video id="video" width="100%" height="100%" autoplay></video>
    <button v-on:click="video">Start Video</button>
    <canvas id="canvas" width="100%" height="100%"></canvas>
    <button v-on:click="snap">Snap Photo</button>
    <p class="msg">{{ msg }}</p>
    <!--<img src="../assets/add_coffee.png" alt="coffee">-->
    <!--<p><input type="file" id="take-picture" accept="image/*"></p>-->
    <div class="cognitive">
      <h2>'모자'</h2>
      <p class="msg">인식결과가 맞는지 선택해주세요.</p>
    </div>
    <div class="btn">
      <!--<button type="button"><img src="../assets/add_o.png" alt="o"></button>-->
      <!--<button type="button"><img src="../assets/add_x.png" alt="x"></button>-->
    </div>
  </v-ons-page>
</template>

<script>
  export default {
    name: 'add',
    methods: {
      video: function (event) {
        var video = document.getElementById('video');
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          // Not adding `{ audio: true }` since we only want video now
          navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
            console.log(video)
            video.src = window.URL.createObjectURL(stream);
            video.play();
          });
        }
      },
      snap: function (event) {
        var canvas = document.getElementById('canvas');
        var context = canvas.getContext('2d');
        var video = document.getElementById('video');

        // Trigger photo take
        context.drawImage(video, 0, 0, 640, 480);
        window.location="http://localhost:8080/loding";
      }
    },
    data () {
      return {
        msg: '사진검수'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    color: #2c3e50;
  }

  .msg {
    margin-bottom: 50px;
    font-size: 14px;
    font-weight: 500;
    color: #787878;
  }

  .cognitive {
    margin-top: 30.4px;
    font-size: 20px;
    font-weight: 500;
  }
</style>



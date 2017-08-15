<template>
  <v-ons-page class="main row">
    <div class="budget col">
      <div class="col btn">
        <router-link to="/chart" class="chart"><img src="../assets/graph.png"></router-link>
        <router-link to="/" class="setting"><img src="../assets/setUp.png"></router-link>
      </div>

      <div class="col money">
        <h4>이번 달 총소비 금액</h4>
        <h1> {{totalMoney}} 원</h1>
      </div>
    </div>

    <div class="account col">
      <div> <p id="u_bank">{{ bank }}</p> &nbsp <p id="u_account">{{ account }}</p><p>&nbsp +</p></div>
    </div>

    <div class="history col">
      <div class="date col">
        <div class="row">
          <div class="today"> {{ date }} </div>
          <button type="button" class="btn btn-outline-primary set-date">기간설정</button>
        </div>
      </div>

      <div class="book col">
	<div class="card col">
  		<div class="card-block">
    			<blockquote class="card-blockquote">
      				<div class="row picture"><img src="https://s3-us-west-2.amazonaws.com/unithon777/images/KqCskCK_JnEnM2V4HM7/coffe.jpg"/></div>
				<div class="row title">카푸치노</div>
				<div class="row money">-4,100원</div>
    			</blockquote>
  		</div>
	</div>
<div class="card col">
  		<div class="card-block">
    			<blockquote class="card-blockquote">
      				<div class="row picture"><img src="https://s3-us-west-2.amazonaws.com/unithon777/images/KqCskCK_JnEnM2V4HM7/%E1%84%8F%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%B3.jpg"/></div>
				<div class="row title">케이크</div>
				<div class="row money">-5,300원</div>
    			</blockquote>
  		</div>
	</div>
<div class="card col">
  		<div class="card-block">
    			<blockquote class="card-blockquote">
      				<div class="row picture"><img src="https://s3-us-west-2.amazonaws.com/unithon777/images/KqCskCK_JnEnM2V4HM7/%E1%84%89%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B3%E1%86%AF.jpg"/></div>
				<div class="row title">신발</div>
				<div class="row money">-29,000원</div>
    			</blockquote>
  		</div>
	</div>
<div class="card col">
  		<div class="card-block">
    			<blockquote class="card-blockquote">
      				<div class="row picture"><img src="https://s3-us-west-2.amazonaws.com/unithon777/images/KqCskCK_JnEnM2V4HM7/%E1%84%8B%E1%85%A6%E1%84%8F%E1%85%A9%E1%84%87%E1%85%A2%E1%86%A8.jpg"/></div>
				<div class="row title">에코백</div>
				<div class="row money">-30,000원</div>
    			</blockquote>
  		</div>
	</div>
      </div>

      <button class="snap-btn btn btn-primary"><router-link to="/loding"><img src="../assets/group12.png"></router-link></button>
      <!--<button v-on:click="video" class="snap-btn" v-if="active"><img src="../assets/btCamera.png"></button>-->

      <!--<video id="video" width="100%" height="100%" autoplay></video>-->
      <!--<canvas id="canvas" width="100%" height="100%"></canvas>-->
      <!--<button v-on:click="snap">Snap Photo</button>-->

    </div>
  </v-ons-page>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'main',
    methods: {
//      user: function () {
//        const u_bank = document.getElementById('u_bank');
//        const u_account = document.getElementById('u_account');
//        this.$http.get(`/api/boards/${id}`)
//          .then((response) => {
//            this.board = response.data;
//          });
//      },
      video: function (event) {
        const video = document.getElementById('video');
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          // Not adding `{ audio: true }` since we only want video now
          navigator.mediaDevices.getUserMedia({video: true}).then(function (stream) {
            console.log(video);
            video.src = window.URL.createObjectURL(stream);
            video.play();
          });
        }
      },
      snap: function (event) {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        const video = document.getElementById('video');

        // Trigger photo take
        context.drawImage(video, 0, 0, 640, 480);
      }
    },
    data () {
      return {
        bank: '농협',
        account: '012-3456-78-9',
        totalMoney: '574100',
        date: '2017.07.30',
        board: {},
      }
    },

    created: function () {
      this.$http.get(`/transactions`)
        .then((response) => {
          this.board = response.data;
        });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a {
    text-decoration: none;
  }
  .card {
    height: 100px;
  }
  .card-blockquote .row {
 	margin-top: -30px;
	display: inline-block;
  }
  .card-blockquote .title {
    width: 80px;
    margin-left: 25px;
    margin-top: -50px;
    font-size: 20px;
  }
  .card-blockquote .money {
    margin-left: 78px;
    font-size: 15px;
    color: gray;
  }
  .picture {
	width: 70px;
	height: 70px;
	border-radius: 50%;
  }
  .picture img {
	width: 100%;
	height: 100%;
	border-radius: 50%;
  }

  .main {
    overflow-x: hidden;
  }

  .budget {
    width: 100%;
    height: 210px;
    background-color: #005bf9;
    background: -webkit-linear-gradient(#005bf9, #0072fb);
    background: -o-linear-gradient(#005bf9, #0072fb);
    background: -moz-linear-gradient(#005bf9, #0072fb);
    background: linear-gradient(#005bf9, #0072fb);
  }

  .budget .btn {
    float: right;
    top: 10px;
    left: 130px;
  }

  .budget .btn .setting {
    margin-left: 10px;
  }

  .budget .money {
    top: 30px;
    color: #ffffff;
  }

  .budget .money h4 {
    display: inline;
  }

  .budget .money h1 {
    margin-top: 10px;
    font-size: 48px;
    font-weight: 600;
  }

  .account {
    width: 100%;
    height: 50px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.35), 0 2px 3px 0 rgba(0, 0, 0, 0.35);
    background-color: rgb(0, 94, 220);
  }

  .account p {
    display: inline-block;
    padding-top: 12px;
    font-weight: 500;
    color: #e9e9e9;
  }

  .history {
    width: 100%;
    height: 100%;
    background-color: #ffffff;
  }

  .history .date {
    margin: 15px;
  }

  .history .date .today {
    margin-top: 7px;
    margin-left: 8px;
    font-size: 13px;
    color: rgb(102, 102, 102);
  }

  .history .date .set-date {
    margin-left: 200px;
    border-radius: 30px;
    font-size: 13px;
  }

  .book {
    height: 100%;
  }

  .snap-btn {
    position: fixed;
    top: 530px;
    left: 140px;
    width: 100px;
    height: 100px;
    background-color: #0058cd;
    border-radius: 100px;
    z-index: 999;
  }
</style>

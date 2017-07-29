<template>
  <v-ons-page class="login">
    <img class="logo" src="../assets/logo.png" alt="logo img">
    <form class="login-form col">
      <div class="form-group col">
        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
          <div class="input-group-addon col-3">이메일</div>
          <input class="form-control align-text-bottom" type="email" placeholder="이메일을 입력하세요" id="example-text-input">
          <button><img src="../assets/group.png" alt="x btn"></button>
        </div>
      </div>

      <div class="form-group col">
        <div class="input-group mb-2 mr-sm-2 mb-sm-0">
          <div class="input-group-addon col-3">비밀번호</div>
          <input class="form-control align-text-bottom" type="password" placeholder="비밀번호를 입력하세요" id="example-search-input">
          <button><img src="../assets/group.png" alt="x btn"></button>
        </div>
      </div>
    </form>

    <div class="login-btn row">
      <button class="btn btn-outline-primary" type="submit">회원가입</button>
      <router-link to="/main"><button class="btn btn-primary" type="button" >로그인</button></router-link>
    </div>

    <div class="auth-btn row">
      <button class="btn btn-outline-primary" type="button" >
        <img src="../assets/path5.png" alt="facebook img">
      </button>
      <button @click="naverLogin" class="btn btn-outline-primary naver" type="button" >
        <img src="../assets/path16.png" alt="naver img">
      </button>
      <button class="btn btn-outline-primary" type="button" >
        <img src="../assets/combinedShape.png" alt="google img">
      </button>
    </div>
  </v-ons-page>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'login',
    data () {
      return {
        posts: []
      }
    },
    methods: {
      naverLogin () {
        axios.get('/users/naverlogin')
          .then(response => {
            console.log(response.status);
            if (response.status == 200) {
              window.location="http://localhost:8080/main";
            }
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login {
    height: auto;
    margin-top: 70px;
    background-color: #ffffff;
    overflow-x: hidden;
    position: fixed;
  }

  .logo {
    margin-bottom: 60px;
  }

  .input-group-addon {
    padding: 20px;
    background-color: #f7f7f7;
    border-style: none none double none;
  }

  .input-group button {
    margin-top: 15px;
    height: 30px;
    background-color: rgb(216, 216, 216);
    border-radius: 50%;
  }

  .form-control {
    background-color: #f7f7f7;
    border-style: none none double none;
  }

  .login-btn {
    margin: 35px 0 0 10px;
  }

  .login-btn button {
    width: 145px;
    height: 50px;
    margin-left: 20px;
    border-radius: 100px;
  }

  .auth-btn {
    margin: 100px 0 0 50px;
  }

  .auth-btn button {
    height: 65px;
    border-radius: 100%;
  }

  .auth-btn .naver {
    margin: 0 30px;
  }
</style>

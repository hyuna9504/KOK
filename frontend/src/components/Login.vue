<template>
  <v-ons-page>
    <div class="login">
      <p class="msg">{{ msg }}</p>

      <form class="login-form col">
        <div class="form-group col">
          <div class="input-group mb-2 mr-sm-2 mb-sm-0">
            <div class="input-group-addon">이메일</div>
            <input class="form-control align-text-bottom" type="email" placeholder="이메일을 입력하세요" id="example-text-input">
          </div>
        </div>

        <div class="form-group col">
          <div class="input-group mb-2 mr-sm-2 mb-sm-0">
            <div class="input-group-addon">비밀번호</div>
            <input class="form-control align-text-bottom" type="password" placeholder="비밀번호를 입력하세요" id="example-search-input">
          </div>
        </div>
      </form>

      <div class="row">
        <div class="form-check col">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" value="">
            자동로그인
          </label>
        </div>

        <router-link to="/a" class="col">아이디 / 비밀번호 찾기</router-link>
      </div>

      <div class="col">
        <button class="btn btn-primary col" type="submit">로그인</button>
        <button class="btn btn-outline-primary col btn-naver" type="button" >네이버로그인</button>
        <button class="btn btn-outline-primary col" type="button" >회원가입</button>
      </div>

    </div>
  </v-ons-page>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        msg: '프로귀찮러를 위한 소비관리'
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
    font-size: 20px;
    font-weight: 500;
    color: #787878;
  }

  .form-group {
    /*width: 90%;*/
  }

  .input-group-addon {
    padding: 20px;
    background-color: #ffffff;
    border-style: double none double double;
  }

  .form-control {
    border-style: double double double none;
  }

  .btn-naver {
    margin: 40px 0;
  }

</style>

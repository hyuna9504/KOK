<template>
  <div class="login">
    <p class="msg">{{ msg }}</p>

    <form class="login-form">
      <div class="form-group row">
        <div class="col">
          <input class="form-control" type="email" value="이메일을 입력하세요" id="example-text-input">
        </div>
      </div>
      <div class="form-group row">
        <div class="col">
          <input class="form-control" type="password" value="비밀번호를 입력하세요" id="example-search-input">
        </div>
      </div>
    </form>

  </div>
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
  .msg {
    font-size: 22px;
    font-weight: 500;
    color: #787878;
  }

  form {
    /*text-align: center;*/
  }

</style>

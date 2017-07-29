<template>
<div>
  <b-btn v-b-modal.modal1>Launch demo modal</b-btn>

  <!-- Main UI -->
  <div class="mt-3 mb-3">
    <ul>
      <li v-for="n in names">{{n}}</li>
    </ul>
  </div>

  <!-- Modal Component -->
  <b-modal id="modal1" @ok="submit">
    <img src="../assets/echoBag.png">
    <h1>{{name}}</h1>
    <p>인식결과가 맞나요?</p>
  </b-modal>
</div>  
</template>

<script>
export default {
  methods: {
      submit(e) {
        if (!this.name) {
          alert('인식 결과를 알 수 없습니다.');
          return e.cancel();
        }

        this.names.push(this.name);
        this.name = '';
      }
  },
  data () {
      return {
        name: '에코백'
      }
    }
}
</script>

<!-- modal.vue -->

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

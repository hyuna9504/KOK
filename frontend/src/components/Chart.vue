<template>
  <v-ons-page class="main row">
    <div class="header col">
	<router-link to="/main">뒤로가기</router-link>
    </div>

    <div class="chart col">
	<img src="https://s3-us-west-2.amazonaws.com/unithon777/images/KqCskCK_JnEnM2V4HM7/graph.png" class="graph"/>
	<img src="https://s3-us-west-2.amazonaws.com/unithon777/images/KqCskCK_JnEnM2V4HM7/categori.png" class="category"/>
	<img src="https://s3-us-west-2.amazonaws.com/unithon777/images/KqCskCK_JnEnM2V4HM7/Group.png" class="group"/>
    </div>
  </v-ons-page>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header {
	width: 100%;
	height: 80px;
	background-color: #fafafa;
   }

   .header a {
      margin-top: 40px;
      color: black;
   }
   img {
	width: 80%;
   }
   .graph {
	margin-top: 40px;
   }
   .category {
       margin-top: 50px;
   }
   .group {
       width: 100%;
	margin-top: 60px;
   }
</style>

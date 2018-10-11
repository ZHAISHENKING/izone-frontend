<template>
  <div class="home">
    <!--<canvas id="canvas"></canvas>-->
    <!--<Banner></Banner>-->

  </div>
</template>

<script>
// @ is an alias to /src
// import '../assets/css/common.css'
// import {Init} from '../assets/js/common'

import Banner from '../components/Banner'
export default {

  name: 'home',
  components:{
      Banner:Banner
  },
  mounted(){
      // Init();
  },
  created(){
      // Init()
  }
}
</script>

<style>

  footer{
    height: 3.5em;
    width: 100%;
    font-size:12px;
    padding: 0.5rem 1rem;
    align-items: center;
    display: flex !important;
    justify-content: center;
    position: fixed;
    font-weight: bold;
    bottom: 0;
    color:#fff;
    background:rgb(84, 92, 100);
  }
</style>

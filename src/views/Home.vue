<template>
  <div class="home">
    <canvas id="canvas"></canvas>
    <footer>
      宅神个人网站 &copy;2018 陕ICP备18005197号-1
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import '../assets/css/common.css'
import {Init} from '../assets/js/common'

import Banner from '../components/Banner'
export default {

  name: 'home',
  components:{
      Banner:Banner
  },
  mounted(){
      Init();
  },
  created(){
      Init()
  }

}
</script>

<style>
  footer{
    height: 3.5em;
    width: 100%;
    padding: 0.5rem 1rem;
    align-items: center;
    display: flex !important;
    justify-content: center;
    position: fixed;
    bottom: 0;
    color:#fff;
    background:#515a6e;
  }
</style>

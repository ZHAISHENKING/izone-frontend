<template>
  <div class="home">
    <div >
      <img src="https://qiniu.s001.xin/j73nv.jpg" alt="" class="back">
    </div>
    <!--<canvas id="canvas"></canvas>-->
    <!--<Banner></Banner>-->
    <div class="home-center">
      <h1>Share your life.</h1>
      <br>
      <p><span>--Hello,I am the god of the house.</span></p>
      <br>
      <button @click="$parent.show = !$parent.show">BUTTON</button>
    </div>
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
      Banner:Banner,
      show:false
  },
  mounted(){
      // Init();
  },
  created(){
      // Init()
  }
}
</script>

<style scoped lang="less">

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
  .home{
    background: rgba(0,0,0,.95);
  }
  .home-center{
    width:50%;
    height:50%;
    margin-top:10%;
    margin-left:25%;
    position: absolute;
    flex-flow:column;
    color:#fff;
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
      font-size:4em;
      font-family: unset;
    }
    p{
      margin-left:25%;
      font-size:15px;
    }
    button{
      margin-top:4em;
      background:#efcc19;
      color:#000;
      font-weight: bold;
      border-radius:5px;
      width:7em;
      height:3em;
      padding:0.2em 0.1em;
    }
    .back{
      height:100%;
      width:100%;
      position:fixed;
      top:0;
      bottom:0;
      left:0;
      right:0;
      opacity: .8;
      z-index:-1;
    }
  }
</style>

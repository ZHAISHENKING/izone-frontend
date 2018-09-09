<template>
  <div id="app">
    <!--<div id="nav">-->
      <!--<router-link to="/">Home</router-link> |-->
      <!--<router-link to="/about">About</router-link>-->
    <!--</div>-->
    <Nav></Nav>
    <!--<router-view/>-->
    <div>
      <img src="http://qiniu.s001.xin/2ud8w.jpg" class="back">
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import "./assets/css/common.css"
import Nav from "@/components/Nav.vue"

export default {
    name: 'app',
    components: {
        Nav
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.back{
  height:100%;
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  opacity: .3;
  z-index:-1;
}
</style>

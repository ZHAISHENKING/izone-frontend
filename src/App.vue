<template>
  <div id="app">

    <Nav></Nav>
    <div>
      <img src="http://qiniu.s001.xin/l1p4y.jpg" class="back">
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
  width:100%;
  position:fixed;
  top:0;
  bottom:0;
  left:0;
  right:0;
  opacity: .5;
  z-index:-1;
}
</style>

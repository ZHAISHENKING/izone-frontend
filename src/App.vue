<template>
  <div id="app">

    <Nav></Nav>
    <div>
      <img :src="imgsrc" class="back">
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
    },
    data(){
        return {
            ccstyle: "guoqing",
            imgsrc: "",
        }
    },
    mounted: function(){
        switch (this.ccstyle){
            case "zhongqiu":
                require('./assets/css/zhongqiu.css');
                this.imgsrc="https://qiniu.s001.xin/l1p4y.jpg";
                break;
            case "guoqing":
                require('./assets/css/guoqing.css');
                this.imgsrc="http://qiniu.s001.xin/ks15n.jpg";
                break;
            default:
                require('./assets/css/peien.css');
                this.imgsrc="https://qiniu.s001.xin/terxt.jpg";
                break;
        }
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

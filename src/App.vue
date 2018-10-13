<template>
  <div class="layout" id="app">
      <div class="header" v-if="isGame">
        <Nav v-on:change="colorChange"></Nav>
      </div>

      <router-view style="min-height:600px;"></router-view>
      <footer v-if="isGame" :style="{'background-color':color}">
        宅神个人网站 &copy;2018 陕ICP备18005197号-1
      </footer>

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
            isGame:true,
            // ccstyle: "guoqing",
            // imgsrc: "",
            color:"rgb(84, 92, 100)"
        }
    },
    methods:{
        routeChange(to){
            if(to.name=="game"){
                this.isGame=false;
            }else{
                this.isGame=true;
            }
        },
        colorChange(msg){
            this.color=msg;
        }
    },
    created(){
        if(this.$route.name=="game"){
            this.isGame=false
        }
    },
    mounted(){
        this.color="rgb(84, 92, 100)"
    },
    watch:{
        '$route':"routeChange"
    }
}
</script>

<style lang="less">
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
  /*footer{*/
    /*background:rgb(84, 92, 100)*/
  /*}*/
</style>

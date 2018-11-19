<template>
  <div class="layout" id="app">
      <transition name="el-fade-in-linear">
          <div class="header" v-show="show">
              <Nav v-on:change="colorChange" ref="child"></Nav>
          </div>
      </transition>

      <router-view style="min-height:800px;padding-top:4em;"></router-view>
      <!--<footer v-if="isGame" :style="{'background-color':color}">-->
        <!--宅神个人网站 &copy;2018 陕ICP备18005197号-1-->
      <!--</footer>-->

  </div>
</template>

<script>
// import "./assets/css/common.css"
import store from 'store2'
import Nav from "@/components/Nav.vue"
export default {
    name: 'app',
    components: {
        Nav
    },
    data(){
        return {
            // ccstyle: "guoqing",
            // imgsrc: "",
            color:"rgb(84, 92, 100)",
            show:true
        }
    },
    methods:{
        routeChange(to){
            if(to.name=="game" || to.name=="home"){
                this.show=false;
            }else{
                this.show=true;
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
        this.color="rgb(84, 92, 100)";
        // 如果jwt存在,登录
        if(localStorage.getItem("jwt")){
            this.$refs.child.isLogin = true;
            this.$refs.child.username = store.get("name");
            this.$refs.child.isSuper = store.get('user').is_super;
            // console.log(this.$refs.child)
        }else{
            this.$refs.isLogin = false;
        }
    },
    watch:{
        '$route':"routeChange"
    }
}
</script>

<style lang="less">
@import '//at.alicdn.com/t/font_415648_2g591ywa14z33di.css';

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
.header{
    position: absolute;
    top: 0;
    width: 100%;
    z-index:100;
}
  /*footer{*/
    /*background:rgb(84, 92, 100)*/
  /*}*/
</style>

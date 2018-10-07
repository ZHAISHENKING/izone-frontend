<template>
  <div class="layout" id="app">
    <Layout>
      <Header v-if="isGame">
        <div class="layout-logo">Izone</div>
        <div class="layout-nav">
          <Nav></Nav>
        </div>

      </Header>
      <router-view></router-view>
    </Layout>


  </div>
</template>

<script>
// import "./assets/css/common.css"
import {Init} from './assets/js/common'
import Nav from "@/components/Nav.vue"
export default {
    name: 'app',
    components: {
        Nav
    },
    data(){
        return {
            isGame:true
            // ccstyle: "guoqing",
            // imgsrc: "",
        }
    },
    methods:{
        routeChange(to){
            if(to.name=="game"){
                this.isGame=false;
            }else if(to.name=="home"){
                Init();
            }
        }
    },
    created(){
        if(this.$route.name=="game"){
            this.isGame=false
        }
        // if()
    },
    watch:{
        '$route':"routeChange"
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

.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo{
  width: 100px;
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  /*background: #5b6270;*/
  color:#fff;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  width: 60%;
  font-weight:700;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center{
  text-align: center;
}
</style>

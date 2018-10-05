<template>
  <div class="layout" id="app">
    <Layout>
      <Header>
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
        }
    },
    mounted: function(){
        // switch (this.ccstyle){
        //     case "zhongqiu":
        //         require('./assets/css/zhongqiu.css');
        //         this.imgsrc="https://qiniu.s001.xin/l1p4y.jpg";
        //         break;
        //     case "guoqing":
        //         require('./assets/css/guoqing.css');
        //         this.imgsrc="http://qiniu.s001.xin/ks15n.jpg";
        //         break;
        //     default:
        //         require('./assets/css/peien.css');
        //         this.imgsrc="https://qiniu.s001.xin/terxt.jpg";
        //         break;
        // }
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
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center{
  text-align: center;
}
</style>

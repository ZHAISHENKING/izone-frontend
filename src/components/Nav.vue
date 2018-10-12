<template>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            router
            @select="handleSelect"
            :background-color="color1"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/img_category">影集</el-menu-item>
        <el-menu-item index="/video">视频</el-menu-item>
        <el-menu-item index="/about">关于我的</el-menu-item>
        <el-menu-item index="/game">小游戏</el-menu-item>
        <el-tooltip class="item" effect="dark" content="颜色不好看？来来来自己换" placement="right-start">
            <el-color-picker v-model="color1" ref="color1" @change="colorChange"></el-color-picker>
        </el-tooltip>

    </el-menu>



    <!--<Menu mode="horizontal" active-name="1" theme="dark">-->
        <!--<MenuIte index/">-->
            <!--<Icon type="ios-paper" />-->
            <!--首页-->
        <!--</MenuItem>-->
        <!--<MenuIte index/img_category">-->
            <!--<Icon type="ios-people" />-->
            <!--影集-->
        <!--</MenuItem>-->
        <!--<MenuIte index/video">-->
            <!--<Icon type="ios-people" />-->
            <!--视频-->
        <!--</MenuItem>-->
        <!--<MenuIte index/about">-->
            <!--<Icon type="ios-people" />-->
            <!--关于我的-->
        <!--</MenuItem>-->
        <!--<MenuIte index/game">-->
            <!--<Icon type="ios-people" />-->
            <!--小游戏-->
        <!--</MenuItem>-->


    <!--</Menu>-->

</template>

<script>
    export default {
        name: 'Nav',
        data(){
            return {
                activeIndex: '/',
                color1: 'rgb(84, 92, 100)'
            }
        },
        created(){

        },
        methods: {
            handleSelect(){},
            colorChange(){
                this.$emit('change', this.color1);
            }
        }
    }
</script>
<style lang="less">
    #app .el-color-picker__trigger{
        height:16px;
        width:16px;
        border-radius:50%;
        top: 20px;
    }
    #app .el-color-picker__color{
        border:none;
        width:8px;
        height:8px;
    }
    #app .el-color-picker__color-inner{
        border-radius:50%;
    }
    .demo{
        color:#fff;
    }
</style>

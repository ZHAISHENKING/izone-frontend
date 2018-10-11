<template>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            router
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/img_category">影集</el-menu-item>
        <el-menu-item index="/video">视频</el-menu-item>
        <el-menu-item index="/about">关于我的</el-menu-item>
        <el-menu-item index="/game">小游戏</el-menu-item>
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
                activeIndex: '/'
            }
        },
        created(){


        },
        methods: {
            handleSelect(){}
        }
    }
</script>

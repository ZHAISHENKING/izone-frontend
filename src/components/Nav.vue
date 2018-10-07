<template>

    <Menu mode="horizontal" active-name="1" theme="dark">
        <MenuItem name="1" to="/">
            <Icon type="ios-paper" />
            首页
        </MenuItem>
        <MenuItem name="2" to="/img_category">
            <Icon type="ios-people" />
            影集
        </MenuItem>
        <MenuItem name="3" to="/video">
            <Icon type="ios-people" />
            视频
        </MenuItem>
        <MenuItem name="4" to="/about">
            <Icon type="ios-people" />
            关于我的
        </MenuItem>
        <MenuItem name="5" to="/game">
            <Icon type="ios-people" />
            小游戏
        </MenuItem>
        <!--<Submenu name="5">-->
            <!--<template slot="title">-->
                <!--<Icon type="ios-stats" />-->
                <!--主题-->
            <!--</template>-->
            <!--<MenuGroup title="使用">-->
                <!--<MenuItem name="3-1">新增和启动</MenuItem>-->
                <!--<MenuItem name="3-2">活跃分析</MenuItem>-->
                <!--<MenuItem name="3-3">时段分析</MenuItem>-->
            <!--</MenuGroup>-->
            <!--<MenuGroup title="留存">-->
                <!--<MenuItem name="3-4">用户留存</MenuItem>-->
                <!--<MenuItem name="3-5">流失用户</MenuItem>-->
            <!--</MenuGroup>-->
        <!--</Submenu>-->

    </Menu>

</template>

<script>
    export default {
        name: 'Nav',
        data(){
            return {

            }
        },
        created(){


        },
        methods: {

        }
    }
</script>

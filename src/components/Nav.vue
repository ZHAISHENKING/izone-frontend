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
        <el-menu-item index="/">HOME</el-menu-item>
        <el-menu-item index="/img_category">PHOTO</el-menu-item>
        <el-menu-item index="/video">VIDEO</el-menu-item>
        <el-menu-item index="/about">ABOUT ME</el-menu-item>
        <el-menu-item index="/game">GAME</el-menu-item>

        <el-tooltip class="item" effect="dark" content="颜色不好看？来来来自己换" placement="right-start">
            <el-color-picker v-model="color1" ref="color1" @change="colorChange"></el-color-picker>
        </el-tooltip>

        <!--登录注册-->
        <el-row type="flex" align="middle" justify="end" style="float:right;top:20px;right:30px;" v-if="isLogin">
            <el-col>
                <el-dropdown trigger="click" @command="handleCommand">
                  <span class="el-dropdown-link">
                    {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">

                        <div v-if="isSuper">
                            <el-dropdown-item command="2">上传图片</el-dropdown-item>
                            <el-dropdown-item command="3">上传视频</el-dropdown-item>
                        </div>
                        <el-dropdown-item command="1">退出</el-dropdown-item>

                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
        <el-row type="flex" align="middle" justify="end" style="float:right;top:10px;right:10px;" v-else="isLogin">
            <el-button round plain @click="dialogFormVisible=true">SIGN IN</el-button>
            <el-button round plain @click="dialogLoginForm=true">SIGN UP</el-button>
        </el-row>

        <el-dialog title="Register" :visible.sync="dialogFormVisible" >
            <el-form :model="form" label-width="100px" class="demo-ruleForm">
                <el-form-item label="Name">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Code">
                    <el-input v-model="form.code" autocomplete="off" width="65%"></el-input>
                    <img :src="'data:image/png;base64,'+code" alt="" style="width:120px;">
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="form.password" autocomplete="off" type="password"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" @click="Register">Submit</el-button>
        </el-dialog>

        <el-dialog title="Login" :visible.sync="dialogLoginForm" >
            <el-form :model="loginForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="Name">
                    <el-input v-model="loginForm.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="loginForm.password" autocomplete="off" type="password"></el-input>
                </el-form-item>
            </el-form>
            <el-button type="primary" @click="Login">Submit</el-button>
        </el-dialog>
    </el-menu>


</template>

<script>
    import {
        get_code,
        register,
        login
    } from "../../requestUrl";
    import store from 'store2';
    import sha1 from 'sha1';

    export default {
        name: 'Nav',
        data(){
            return {
                activeIndex: '/',
                username:'zhai',
                color1: 'rgb(84, 92, 100)',
                dialogFormVisible: false,
                form:{
                    name:"",
                    code:"",
                    password:""
                },
                isSuper:false,
                loginForm:{
                    name:"",
                    password:""
                },
                dialogLoginForm:false,
                code:'',
                isLogin:false,
            }
        },
        created(){
            this.getCode();
        },
        methods: {
            handleSelect(){},
            colorChange(){
                this.$emit('change', this.color1);
            },
            getCode(){
                get_code({}).then((data)=>{
                    this.code=data.data;
                })
            },
            Register(){
                // console.log(this.form.code);
                register({
                    code:this.form.code,
                    username:this.form.name,
                    password:sha1(this.form.password)
                }).then((data)=>{
                    data = data.data;
                    if(data.code==0){
                        localStorage.setItem('jwt', data.data.jwt);
                        store.set("name",data.data.username);
                        store.set("user",data.data);

                        this.dialogFormVisible=false;
                        this.isLogin = true;
                        this.isSuper = data.data.is_super;
                        this.username = data.data.username;
                    }
                })
            },
            Login(){
                login({
                    username:this.loginForm.name,
                    password:sha1(this.loginForm.password)
                }).then((data)=>{
                    data = data.data;
                    if(data.code==0){
                        localStorage.setItem('jwt', data.data.jwt);
                        store.set("name",data.data.username);
                        store.set("user",data.data);
                        this.dialogLoginForm=false;
                        this.isLogin = true;
                        this.isSuper = data.data.is_super;
                        this.username = data.data.username;
                    }
                })
            },
            handleCommand(commond){
                if(commond=="1"){
                    localStorage.setItem('jwt', "");
                    store.set("name","");
                    store.set("user",'');

                    this.isLogin = false;
                }else if(commond=="2"){
                    window.open('https://oj.s001.xin/api/upload/')
                }else if(commond=="3"){
                    window.open('https://oj.s001.xin/api/up_video/')
                }

            }
        },
        mounted(){
            this.color1='rgb(84, 92, 100)';
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
    .el-dropdown-link{
        color:#fff;
        cursor: pointer;
    }
</style>

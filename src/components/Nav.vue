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
        <el-row type="flex" align="middle" justify="end" style="float:right;top:10px;right:10px;">
            <el-button round plain @click="dialogFormVisible=true">SIGN IN</el-button>
            <el-button round plain>SIGN UP</el-button>
        </el-row>

        <el-dialog title="Register" :visible.sync="dialogFormVisible" >
            <el-form :model="form" label-width="100px" class="demo-ruleForm">
                <el-form-item label="Name">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Password">
                    <el-input v-model="form.password" autocomplete="off"></el-input>

                </el-form-item>
                <el-form-item label="Code">
                    <el-input v-model="form.code" autocomplete="off"></el-input>
                    <img :src="'data:image/png;base64,'+code" alt="" style="width:120px;">
                </el-form-item>
                <el-form-item label="Check Password">
                    <el-input v-model="form.cpassword" autocomplete="off"></el-input>
                </el-form-item>

            </el-form>
            <el-button type="primary" @click="dialogFormVisible = false">Submit</el-button>
        </el-dialog>
    </el-menu>


</template>

<script>
    import {get_code} from "../../requestUrl";

    export default {
        name: 'Nav',
        data(){
            return {
                activeIndex: '/',
                color1: 'rgb(84, 92, 100)',
                dialogFormVisible: false,
                form:{
                    name:"",
                    code:"",
                    password:"",
                    cpassword:""
                },
                code:''
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
</style>

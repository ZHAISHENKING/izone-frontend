<template>
  <!--<Row style="background:#eee;" :gutter="16">-->
    <!--<Col v-for="i in cateList" :key="i.id" span="8" style="padding:20px">-->
      <!--<Card>-->
        <!--<div style="text-align:center;cursor:pointer" @click="Detail(i.id)">-->
          <!--<img src="https://picsum.photos/600/300/?image=25" width="100%">-->
          <!--<h3>{{i.title}}</h3>-->
        <!--</div>-->
      <!--</Card>-->
    <!--</Col>-->

  <!--</Row>-->


  <el-row :gutter="16">
    <el-col :span="8" v-for="i in cateList" :key="i.id">
      <el-card :body-style="{ padding: '20px' }">
        <img src="https://picsum.photos/600/300/?image=25" class="image">
        <div style="padding: 14px;">
          <span style="color:#b5204d;cursor: pointer;" @click="Detail(i.id)">{{i.title}}</span>

        </div>
      </el-card>
    </el-col>
  </el-row>

</template>

<script>
    import {
        get_category
    } from '../../requestUrl'
    export default {
        name: 'ImgCategory',
        props: {
            msg: String
        },
        data(){
            return {
                cateList: []
            }
        },
        created(){
            this.GetCate();
        },
        methods: {
            GetCate(){
                get_category({}).then((data)=>{
                    let all = data.data;
                    if(all.code == 0){
                        if(all.data){
                            all.data.forEach((i)=>{
                                this.cateList.push({
                                    "title":i.title,
                                    "id": i.id
                                })
                            })
                        }
                    }
                })

            },
            Detail(id){
              this.$router.push('/photo?id='+ id);
            },
        }
    }
</script>

<style>
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

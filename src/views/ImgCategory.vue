<template>
  <Row style="background:#eee;" :gutter="16">
    <Col v-for="i in cateList" :key="i.id" span="8" style="padding:20px">
      <Card>
        <div style="text-align:center;cursor:pointer" @click="Detail(i.id)">
          <img src="https://picsum.photos/600/300/?image=25" width="100%">
          <h3>{{i.title}}</h3>
        </div>
      </Card>
    </Col>

  </Row>

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
  .category{
    margin-top:10px;
  }
</style>

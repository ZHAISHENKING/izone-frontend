<template>
  <b-container class="category">
    <b-row align-h = “between>
      <b-col cols="4" v-for="i in cateList" :key="i.id">
        <b-card :title="i.title"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2">
          <!--<p class="card-text">-->
            <!--Some quick example text to build on the card title and make up the bulk of the card's content.-->
          <!--</p>-->
          <b-button variant="danger" @click="Detail(i.id)">Look</b-button>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
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

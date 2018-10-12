<template>
    <!--<Row style="background:#eee;" :gutter="16">-->

        <!--<Col v-for="video in video_list" :key="video.id" span="8" style="padding:20px">-->
            <!--<Card>-->
                <!--<div style="text-align:center;cursor:pointer" @click="ImgShow(video.video_url)" :id="video.id">-->
                    <!--<img :src="video.small_img" height="150px">-->
                    <!--<h3>{{video.desc}}</h3>-->
                <!--</div>-->
            <!--</Card>-->
        <!--</Col>-->

    <!--</Row>-->

    <el-row :gutter="16">
        <el-col :span="8" v-for="i in video_list" :key="i.id">
            <el-card :body-style="{ padding: '20px' }" >
                <img :src="i.small_img" class="image" height="150px" @click="ImgShow(i.video_url)">
                <div style="padding: 14px;">
                    <!--<img  height="150px">-->
                    <span style="color:#b5204d">{{i.desc}}</span>

                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
    import {get_all_video} from "../../requestUrl";

    export default {
        name: 'Video',
        props: {
            msg: String
        },
        data(){
            return {
                video_list: []
            }
        },
        created(){
            this.getVideo();
        },
        methods: {
            getVideo(){
                get_all_video({}).then((data)=>{
                    let all = data.data;
                    if(!all.code){
                        if(all.data){
                            all.data.forEach((i)=>{
                                this.video_list.push({
                                    "id":i.id,
                                    "desc":'【'+i.desc+"】",
                                    "time_long":i.time_long,
                                    "video_url":i.video_url,
                                    "small_img":i.small_img ? i.small_img:"https://picsum.photos/1024/480/?image=54"
                                })
                            })
                        }
                    }
                })
            },
            ImgShow(url){
                this.$router.push("/iframe?url="+url)
            }
        }
    }
</script>

<style>
    .image{
        cursor:pointer;
    }
</style>

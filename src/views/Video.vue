<template>
    <b-container>
        <b-row style="margin-top:15px;">
            <b-col cols="4" v-for="video in video_list" :key="video.id">
                <b-card
                        :img-src="video.small_img"
                        :id="video.id"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;color:#9252b3"
                        class="mb-2"
                        @click="ImgShow(video.video_url)">
                    <p class="text-left">
                        {{video.desc}}
                    </p>
                </b-card>
            </b-col>


        </b-row>
    </b-container>
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
    .mb-2{
        cursor:pointer;
    }
</style>

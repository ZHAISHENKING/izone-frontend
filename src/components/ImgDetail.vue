<template>

    <Row :gutter="16" >
        <Col v-for="i in imgList" :key="i.id" span="8" style="padding:20px">
            <viewer :images="imgList">
                <img  :src="i.url" style="width:300px;height:250px;">
            </viewer>
        </Col>
    </Row>

</template>

<script>
    import {get_img} from '../../requestUrl.js';
    import 'viewerjs/dist/viewer.css'
    import Vue from "vue"
    import Viewer from 'v-viewer'
    Vue.use(Viewer);
    export default {
        name: 'ImgDetail',
        props: {
            msg: String
        },
        data(){
            return {
                id: '',
                imgList:[]
            }
        },
        created(){
            this.ImgShow();

        },
        methods: {
            ImgShow(){
                let path = document.location.search;
                if(path){
                    this.id = decodeURIComponent(path.split('=')[1]);
                    this.GetAllImg(this.id)
                }
            },
            GetAllImg(id){
                get_img({id:id}).then((data)=>{
                    let all = data.data;
                    if(all.code == 0){
                        if(all.data){
                            all.data.forEach((i)=>{
                                this.imgList.push({
                                    "desc":i.desc,
                                    "id": i.id,
                                    "url": i.image_url
                                })
                            })
                        }
                    }
                })
            }
        }
    }
</script>


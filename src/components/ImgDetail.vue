<template>
    <b-container fluid class="p-4 bg-dark img-detail">
        <b-row>
            <b-col v-for="i in imgList" :key="i.id">
                <b-img thumbnail fluid
                       :src="i.url"
                       alt="Thumbnail"
                       style="width:250px;height:250px;"
                       rounded
                       v-b-tooltip.hover :title="i.desc"
                >
                </b-img>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import {get_img} from '../../requestUrl.js';
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
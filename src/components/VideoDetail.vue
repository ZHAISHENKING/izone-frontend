<template>
    <b-embed type="iframe"
             aspect="16by9"
             :src="url"
             allowfullscreen
    >
    </b-embed>
</template>

<script>
    export default {
        name: 'VideoDetail',
        props: {
            msg: String
        },
        data(){
            return {
                url: ''
            }
        },
        created(){
          this.ImgShow();
        },
        methods: {
            ImgShow(){
                let path = document.location.search;
                if(path){
                   this.url = decodeURIComponent(path.split('=')[1]);
                }
            }
        }
    }
</script>
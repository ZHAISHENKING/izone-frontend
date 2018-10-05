<template>
    <md-card>
        <md-card-media>
            <div class="item">
                <div class="player">
                    <video-player class="vjs-custom-skin"
                                  ref="videoPlayer"
                                  :options="playerOptions"
                                  :playsinline="true"
                    >

                    </video-player>
                </div>
            </div>
        </md-card-media>
    </md-card>


</template>

<script>
    import '../custom-theme.css'
    import 'video.js/dist/video-js.css'
    import { videoPlayer } from 'vue-video-player'

    export default {
        name: 'VideoDetail',
        props: {
            msg: String
        },
        components:{
            videoPlayer
        },
        data(){
            return {
                url: '',
                playerOptions:{
                    height: '360',
                    autoplay: true,
                    muted: false,
                    language: 'en',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    sources: [{
                        type: "video/mp4",
                        src: ""
                    }]
                }
            }
        },
        created(){
          this.ImgShow();
        },
        methods: {
            ImgShow(){
                let path = document.location.search;
                if(path){
                   this.playerOptions.sources[0].src = decodeURIComponent(path.split('=')[1]);
                }
            }
        }
    }
</script>
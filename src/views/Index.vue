<template>
    <div>
        <Banner></Banner>
    </div>
</template>

<script>
    import Banner from '../components/Banner'
    export default {
        components:{
            Banner: Banner
        },
        data () {
            return {
                slide: 0,
                sliding: null
            }
        },
        methods: {
            onSlideStart (slide) {
                this.sliding = true
            },
            onSlideEnd (slide) {
                this.sliding = false
            }
        }
    }
</script>
<!-- carousel-1.vue -->
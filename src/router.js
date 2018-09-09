import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About'
import ImgCategory from './views/ImgCategory'
import ImgDetail from '@/components/ImgDetail.vue'
import Video from './views/Video'
import VideoDetail from '@/components/VideoDetail'

Vue.use(Router);

    const routes= [
        {path: '/', name: 'home', component: Home},
        {path: '/about', name: 'about', component: About},
        {path: '/img_category', name: 'category', component: ImgCategory},
        {path: '/photo', name: 'photo', component: ImgDetail},
        {path: '/video', name: 'video', component: Video},
        {path: '/iframe', name: 'video_show', component: VideoDetail},
    ];


    const router = new Router({
        mode: 'history',
        routes: routes
    });


export default router

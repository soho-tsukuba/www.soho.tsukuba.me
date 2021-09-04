import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import HowToPlayPage from "@/components/HowToPlayPage";

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'mainPage',
            component: MainPage
        },
        {
            path: '/how_to_play',
            name: 'howToPlayPage',
            component: HowToPlayPage
        }
    ]
})
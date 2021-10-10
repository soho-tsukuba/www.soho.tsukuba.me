import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import HowToPlayPage from "@/components/HowToPlayPage";
import Donation from "@/components/Donation";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'mainPage',
            component: MainPage,
            meta: { title: 'マイクラ雙峰祭プロジェクト' }
        },
        {
            path: '/how_to_play',
            name: 'howToPlayPage',
            component: HowToPlayPage,
            meta: { title: '遊び方 - マイクラ雙峰祭プロジェクト' }
        },
        {
            path: '/donation',
            name: 'donationPage',
            component: Donation,
            meta: { title: '寄付について - マイクラ雙峰祭プロジェクト' }
        }
    ]
})

// https://stackoverflow.com/questions/51639850/how-to-change-page-titles-when-using-vue-router
const DEFAULT_TITLE = 'Some Default Title';
// eslint-disable-next-line no-unused-vars
router.afterEach((to, from) => {
    document.title = to.meta.title || DEFAULT_TITLE;
});

export default router
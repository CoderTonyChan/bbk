// import { post, fetch, patch, put } from './http'
// import axios from 'axios';

// SSR 不会弄
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
// import 'swiper/dist/css/swiper.css'

// import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
// import { Swipe, SwipeItem } from 'vue-swipe';


export default ({
    Vue, // VuePress 正在使用的 Vue 构造函数
    options, // 附加到根实例的一些选项
    router, // 当前应用的路由实例
    siteData // 站点元数据
}) => {
    // ...做一些其他的应用级别的优化
    //定义全局变量
    // Vue.prototype.$post = post;
    // Vue.prototype.$fetch = fetch;
    // Vue.prototype.$patch = patch;
    // Vue.prototype.$put = put;
    // Vue.prototype.$http = axios;
    // if (process.browser) {
    //     const VueAwesomeSwiper = require('vue-awesome-swiper/dist/ssr')
    //     Vue.use(VueAwesomeSwiper)
    // }else{
    //     Vue.use(VueAwesomeSwiper)
    // }
    // Vue.component('swipe', Swipe);
    // Vue.component('swipe-item', SwipeItem);
}
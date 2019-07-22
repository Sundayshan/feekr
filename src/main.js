import Vue from 'vue';
import App from './App.vue';
import vueRouter from 'vue-router';
import router from './assets/js/router.js';
import axios from 'axios';
import Vuex from 'vuex';
import store from './vuex/index.js'
import Swiper from 'swiper';

//if(window.location.href=="http://localhost:8081/?#/home"){
//	axios.defaults.withCredentials = true
//	axios.defaults.baseURL =""
//}else{
//	axios.defaults.baseURL = "https://wd6928283828btiody.wilddogio.com"
//}

axios.defaults.withCredentials = true
import './assets/css/cssreset.css';

import './assets/css/iconfont/iconfont.css';

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

//import ElementUI from 'element-ui';
//import 'element-ui/lib/theme-chalk/index.css';

Vue.prototype.$axios = axios;
Vue.use(vueRouter);
Vue.use(MintUI);
Vue.use(Vuex);
//Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h => h(App),
    router:router,
    store,

//components:{App}
})

import Vue from 'vue';
import App from './App.vue';
import vueRouter from 'vue-router';
import router from './assets/js/router.js';
import axios from 'axios';
import Swiper from 'swiper'
axios.defaults.withCredentials = true
import './assets/css/cssreset.css';
import './assets/css/common.css';
import './assets/css/iconfont/iconfont.css';

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.prototype.$axios = axios;
Vue.use(vueRouter);
Vue.use(MintUI);


new Vue({
    el: '#app',
    render: h => h(App),
    router:router

//router.beforeEach((to,from,next)=>{
//	if(to.matched.some(record=>record.meta.requiresAuth)){
//		if(!localStorage.token){
//			next({
//				path:'/login',
//				query:{redirect:to.fullPath}
//			})
//		}else{
//			next()
//		}
//	}
//})
  
  
//components:{App}
})

import vueRouter from 'vue-router'

import home from '../../component/index/home.vue'
import tavel from '../../component/index/travel.vue'
import guide from '../../component/index/guide.vue'
import user from '../../component/index/user.vue'
import register from '../../component/index/register.vue'
import login from '../../component/index/login.vue'
import play from '../../component/index/play.vue'

export default new vueRouter({
	routes:[
		{
			path:'/home',component:home
//			children:[
//				{
//					path:'/home/play',component:play
//				},
//				{
//					path:'/register',component:register
//				},
//				{
//					path:'/login',component:login
//				}
//			]
		},
		{
			path:'/travel',component:tavel
		},
		{
			path:'/guide',component:guide
		},
		{
			path:'/user',component:user,
			meta:{
				requiresAuth: true //添加该字段，表示进入这个路由是需要登录的
			}
		},
		{
			path:'/play',component:play
		},
		{
			path:'/register',component:register
		},
		{
			path:'/login',component:login
		},
		{
			path:'/',
			redirect:'/home'
		}
	]
})

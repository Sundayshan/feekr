import vueRouter from 'vue-router'

import home from '../../component/index/home.vue'
import tavel from '../../component/index/travel.vue'
import guide from '../../component/index/guide.vue'
import user from '../../component/index/user.vue'
import register from '../../component/index/register.vue'
import login from '../../component/index/login.vue'
import play from '../../component/index/play.vue'
import detail from '../../component/index/detail.vue'
import city from '../../component/index/city.vue'
import news from '../../component/news/news.vue'

export default new vueRouter({
	routes:[
	    {
			path:'/',
			redirect:'/home',			
		},
		{
			path:'/home',component:home,
			name:'Feekr',
			//是否开启底部导航
			meta:{
				index:0,
				isNavShow:true
			}
		},
		{
			path:'/home/:id',component:detail,
			name:'产品详情',
			meta:{
				index:1,
				isNavShow:false
			},
			props:true
		},
		{
			path:'/travel',component:tavel,
			name:'度假',
			meta:{
				index:0,
				isNavShow:true
			}
		},
		{
			path:'/guide',component:guide,
			name:'攻略',
			meta:{
				index:0,
				isNavShow:true
			}
		},
		{
			path:'/user',component:user,
			meta:{
				index:0,
				isNavShow:true,
				requiresAuth: true //添加该字段，表示进入这个路由是需要登录的
			}
		},
		{
			path:'/play',component:play,
			meta:{
				index:1,
				isNavShow:false
			}
		},
		{
			path:'/register',component:register,
			meta:{
				index:1,
				isNavShow:false
			}
		},
		{
			path:'/login',component:login,
			meta:{
				index:1,
				isNavShow:false
			}
		},
		{
			path:'/detail',component:detail,
			meta:{
				index:1,
				isNavShow:false
			}
		},
		{
			path:'/city',component:city,
			meta:{
				index:1,
				isNavShow:false
			}
		},
		{
			path:'/news',component:news,
			meta:{
				index:1,
				isNavShow:false
			}
		}
	]
})

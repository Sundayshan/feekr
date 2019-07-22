import vueRouter from 'vue-router'
import store from '../../../src/vuex'

import home from '../../component/index/home.vue'
import tavel from '../../component/index/travel.vue'
import guide from '../../component/index/guide.vue'
import user from '../../component/mycenter/user.vue'
import register from '../../component/index/register.vue'
import login from '../../component/index/login.vue'
import play from '../../component/index/play.vue'
import detail from '../../component/index/detail.vue'
import city from '../../component/index/city.vue'
import news from '../../component/news/news.vue'
import favor from '../../component/mycenter/favor.vue'
import order from '../../component/mycenter/order.vue'
import cart from '../../component/mycenter/cart.vue'
import pay from '../../component/pay/pay.vue'
import confirm from '../../component/order/confirm.vue'
import orderDetail from '../../component/order/orderDetail.vue'
import success from '../../component/index/success.vue'
const router = new vueRouter({
	routes:[
	    {path:'/',redirect:'/home'},
		{path:'/home',component:home,name:'Feekr',
			//是否开启底部导航
			meta:{
				index:0,
				isNavShow:true
			}
		},
		{
			path:'/home/:id',component:detail,name:'产品详情',
			meta:{
				index:1,
				isNavShow:false
			},
			props:true
		},
		{
			path:'/travel',component:tavel,name:'度假',
			meta:{index:0,isNavShow:true}
		},
		{
			path:'/guide',component:guide,name:'攻略',
			meta:{index:0,isNavShow:true}
		},
		{
			path:'/user',name:'user',component:user,
			meta:{
				index:0,isNavShow:true,
				requiresAuth: true //添加该字段，表示进入这个路由是需要登录的
			}
		},
		{
			path:'/play',name:'play',component:play,
			meta:{index:1,isNavShow:false}
		},
		{
			path:'/register',name:'register',component:register,
			meta:{index:1,isNavShow:false}
		},
		{
			path:'/login',name:'login',component:login,
			meta:{index:1,isNavShow:false}
		},
		{
			path:'/detail',name:'detail',component:detail,
			meta:{index:1,isNavShow:false}
		},
		{
			path:'/city',name:'city',component:city,
			meta:{index:1,isNavShow:false}
		},
		{
			path:'/news',name:'news',component:news,
			meta:{index:1,isNavShow:false}
		},
		{
			path:'/favor',name:'favor',component:favor,
			meta:{index:1,isNavShow:false}
		},
		{
			path:'/order',name:'order',component:order,
			meta:{index:1,isNavShow:false}
		},
		{
			path:'/cart',name:'cart',component:cart,
			meta:{index:1,isNavShow:false}
		},
		{
			path:'/pay',name:'pay',component:pay,
			meta:{index:1,isNavShow:false
			}
		},
		{
			path:'/confirm',name:'confirm',component:confirm,
			meta:{index:1,isNavShow:false}
		},
		{
			path:'/success',name:'success',component:success,
			meta:{index:1,isNavShow:false}
		},
		{
			path:'/orderDetail',name:'orderDetail',component:orderDetail,
			meta:{index:1,isNavShow:false}
		}
	],
	
})
//router.beforeEach((to,from,next)=>{
//	console.log(store.state.isLogin)
//	if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//      if (store.state.isLogin) {  // 通过vuex state获取当前的token是否存在
//          next();
//      }
//      else {
//          next({
//              path: '/login',
//              query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//          })
//      }
//  }
//  else {
//      next();
//  }

//  if(to.path=='/login'||to.path=='/register'){
////  if(to.matched.some(r => r.meta.requireAuth)){
//     next()
//  }else{
//      if(store.state.isLogin){
//          // alert('登录成功,跳到首页')
//          next()
//      }else{
//          if(!store.state.isLogin){
//              next('/login')
////	         		alert('没有登录请先去登录')
//          }
//      	next('/login')
//      } 
//  }
//})
export default router
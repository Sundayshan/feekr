import state from './state'
import * as type from './type.js'
import { MessageBox } from 'mint-ui';
const mutations={
	//收藏文章
	[type.SET_ARTICLE](state,data){
		state.article.push(data)
		localStorage.setItem("article",JSON.stringify(state.article))
	},
	//收藏商品
	[type.SET_GOODS](state,data){
		state.goods.push(data)
		localStorage.setItem("goods",JSON.stringify(state.goods))
	},
	//订单
	[type.SET_ORDERS](state,data){
		state.orders.push(data);
		localStorage.setItem("orders",JSON.stringify(state.orders))
	},
	//加入购物车
	[type.SET_CARTS](state,data){
		state.carts.push(data);
		localStorage.setItem("carts",JSON.stringify(state.carts))
	},
	//删除文章
	del:(state,index)=>{
		MessageBox.confirm('确定取消收藏该文章么？').then(action=>{
			state.article.splice(index,1);
			localStorage.setItem("article",JSON.stringify(state.article));
		})
	},
	//删除商品
	cancel:(state,index)=>{
		MessageBox.confirm('确定取消收藏该商品么？').then(action=>{
			state.goods.splice(index,1);
			localStorage.setItem("goods",JSON.stringify(state.goods));
		})
	},
	//删除订单
	delOrder:(state,index)=>{
		MessageBox.confirm('确定删除该订单么？').then(action=>{
            state.orders.splice(index,1)
            localStorage.setItem("orders",JSON.stringify(state.orders));
        })
	},
    //购物车删除
    deleteCart:(state,index)=>{
        MessageBox.confirm('确定删除该商品么？').then(action=>{
            state.carts.splice(index,1)
            localStorage.setItem("carts",JSON.stringify(state.carts));
        })
    },
	//购物车数量加
	add(state,index){
        state.carts[index].goodsNum++
    },
	//购物车数量减
	reduce(state,index){
        state.carts[index].goodsNum==1?state.carts[index].goodsNum=1: state.carts[index].goodsNum--
    },
    //结算
    settlement(state,index){
    	console.log(state);
    	console.log(index);
    	if(index){
    		state.carts=[];
    	}else{
    		state.carts.forEach(item => {
	        	if(item.pick){
	        		state.carts.splice(index,1)
	        	}
	        })
    	}
        localStorage.setItem("carts",JSON.stringify(state.carts));
    },
    //用户名
    SETcurren(state,data){
    	if(data){
    		state.currentUser = data
    		localStorage.setItem("user",JSON.stringify(state.currentUser));
    		state.isLogin = true;
    	}else{
    		state.currentUser="登录";
    		state.isLogin = false;
    	}
    }
}

export default mutations
const state={
	//登录状态
	isLogin:false,
	//用户名
	currentUser:localStorage["user"]?JSON.parse(localStorage["user"]):[],
	article:localStorage["article"]?JSON.parse(localStorage["article"]):[],
	goods:localStorage["goods"]?JSON.parse(localStorage["goods"]):[],
	orders:localStorage["orders"]?JSON.parse(localStorage["orders"]):[],
	carts:localStorage["carts"]?JSON.parse(localStorage["carts"]):[],
//	collections:localStorage["collections"]?JSON.parse(localStorage["collections"]):[],
}

export default state
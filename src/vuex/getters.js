import state from './state'
const getters = {
	getterOrdersData:state => state.orders,
	getterCartData:state => state.carts,
	getterUserData:state => state.currentUser,
	getterIsLoginData:state => state.isLogin,
}

export default getters;
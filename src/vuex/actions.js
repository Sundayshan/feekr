const actions={
	//数据提交到SET_ARTICLE
	setArticle({commit},data){
		commit('SET_ARTICLE',data)
	},
	setGoods({commit},data){
		commit('SET_GOODS',data)
	},
	setOrders({commit},data){
		commit('SET_ORDERS',data)
	},
	setCarts({commit},data){
		commit('SET_CARTS',data)
	},
	SETcurren({commit},data){
		commit("SETcurren",data)
	},
	goodCollection({commit},data){
		commit("GoodCollection",data)
	}
}

export default actions
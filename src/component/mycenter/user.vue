<template>
	<div class="user-container">
		<div class="user-content">
			<my-Header title="我的"></my-Header>
			<div class="user-msg table-mode">
				<div class="table-cell"><img class="user-pic" src="../../assets/img/userphoto.jpg"/></div>
				<div class="table-cell"><p class="nickname">{{username}}</p></div>
				<div class="table-cell iconfont icon-jiantou"></div>
			</div>
			<div v-for="i in groups" class="user-opt" :key="i.id">
				<router-link v-for="item in i.menu" :key="item.id" :to="item.href" class="menu-group table-mode">
					<span class="iconfont table-cell usericon">{{item.icon}}</span>
					<span class="menu-name table-cell">{{item.title}}</span>
					<span class="iconfont icon-jiantou table-cell"></span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	
	import myHeader from '../common/myHeader.vue'
	import { mapState, mapMutations, mapGetters } from "vuex";
	export default{
		name:'user',
		components:{
			myHeader
		},
		computed:{
			...mapGetters({
				username:"getterUserData"
			})
		},
		data(){
			return{
				groups:[
					{
						menu:[
							{
								icon:'\ue64c',title:'订单',href:'/order'
							},
							{
								icon:'\ue60d',title:'收藏',href:'/favor'
							},
							{
								icon:'\ue632',title:'购物车',href:'cart'
							},
							{
								icon:'\ue63b',title:'消息',href:'#'
							}						
						]
					},
					{
						menu:[
							{
								icon:'\ue606',title:'设置',href:'#'
							},
							{
								icon:'\ue649',title:'反馈',href:'#'
							}						
						]
					}
				]
			}
		}
	}
</script>

<style scoped>
	@import '../../assets/css/user.css';
</style>
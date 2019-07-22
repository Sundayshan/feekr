<template>
	<div class="order">
		<div class="headerTab"><my-Header title="我的订单"></my-Header></div>
		<div class="orderMain">
			<div class="orderList" v-for="(list,index) in ordersItem" @click="goOrderDetail(list)">
				<p class="orderListHead"><span>{{list.orderTime}}</span><span>交易成功</span></p>
				<a href="#" class="orderListDetail">
					<div class="imgbox"><img :src="list.proImg" /></div>
					<div class="orderListText">
						<p>{{list.name}}</p>
						<p>含一份套餐</p>
					</div>
					<div class="orderPrice">
						<div class="price">￥{{list.proPrice}}</div>
						<div class="num">x{{list.num}}</div>
					</div>
				</a>
				<div class="orderListBottom">
					<div class="top">
						总计：<div class="totalPrice">￥{{list.proPrice*list.num}}</div>
					</div>
					<div class="bottom">
						<div class="orderListBtn" @click.stop="goDetail(list.id)">再次购买</div>
						<div class="orderListBtn" @click.stop="delOrder(index)">删除订单</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import myHeader from '../common/myHeader.vue'
	import { mapState, mapMutations, mapGetters } from "vuex";
	export default{
		name:"order",
		data(){
			return{
				
			}
		},
		components:{
			myHeader
		},
		computed:{
//			orders(){
//				return this.$store.state.orders;
//			}
			...mapGetters({
				ordersItem:"getterOrdersData"
			})
		},
		methods:{
			...mapMutations(["delOrder"]),
			goDetail(id){
				this.$router.push({
					path:'detail',
					query:{
						id:id
					}
				})
			},
			goOrderDetail(list){
				console.log(list)
				this.$router.push({
					path:'orderDetail',
					query:{
						id:list.id,
						name:list.name,
						proImg:list.proImg,
						proPrice:list.proPrice,
						num:list.num,
						orderTime:list.orderTime,
						customerName:list.customerName,
						customerTel:list.customerTel
					}
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
@import '../../assets/css/order.scss'
</style>
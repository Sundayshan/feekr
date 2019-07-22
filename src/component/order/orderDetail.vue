<template>
	<div class="orderDetail">
		<div class="header-tab">
			<my-Header title="订单详情"></my-Header>
		</div>
      	<div class="orderDetailMain">
      		<div class="details-success">
	          	<p>订单状态：已完成</p>
	         	<img src="../../assets/img/paid.png">
	      	</div>
	      	<div class="orderContent">
	      		<a href="#" class="orderListDetail">
					<div class="imgbox"><img :src="this.$route.query.proImg" /></div>
					<div class="orderListText">
						<p>{{this.$route.query.name}}</p>
						<p>含一份套餐</p>
					</div>
					<div class="orderPrice">
						<div class="price">￥{{this.$route.query.proPrice}}</div>
						<div class="num">x{{this.$route.query.num}}</div>
					</div>
				</a>
	      	</div>
	      	<div class="totalFree wrap">
	      		<p>
		      		<b>应付总额</b>
		      		<span class="f-right">￥{{this.$route.query.proPrice*this.$route.query.num}}</span>
		      	</p>
		      	<p>
		      		<span>商品总价</span>
		      		<span class="f-right">￥{{this.$route.query.proPrice*this.$route.query.num}}</span>
		      	</p>
	      	</div>
	      	<div class="conector wrap">
	      		<p>
		      		<span>联系人</span><span class="f-right">{{this.$route.query.customerName}}</span>
		      	</p>
		      	<p>
		      		<span>联系电话</span><span class="f-right">{{this.$route.query.customerTel}}</span>
		      	</p>
	      	</div>
	      	<p class="orderTime wrap">
	      		<span>下单时间</span><span class="f-right">{{this.$route.query.orderTime}}</span>
	      	</p>
	      	<p class="wrap">
	      		<span>产品包含</span>
	      		<i class="f-right iconfont icon-jiantou"></i>
	      	</p>
	      	<p class="wrap">
	      		<span>使用规则</span><i class="f-right iconfont icon-jiantou"></i>
	      	</p>
	      	<p class="wrap">
	      		<span>退改协议</span><i class="f-right iconfont icon-jiantou"></i>
	      	</p>
      	</div>
	</div>
</template>

<script>
	import myHeader from '../common/myHeader.vue'
	export default{
		data(){
			return{
				
			}
		},
		components:{
			myHeader
		}
	}
</script>

<style lang="scss" scoped>
@import '../../assets/css/orderDetail.scss';
</style>
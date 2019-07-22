<template>
	<div class="cart">
		<div class="headerTab"><my-Header title="我的购物车"></my-Header></div>
		<div class="cartMain">
			<ul>
				<li class="cartList" v-for="(item,index) in cartItem">
					<!--选择框-->
					<div class="select" @click="pick(item)">
						<i class="iconfont icon-xuanzekuang" v-show="!item.pick"></i>
						<i class="iconfont icon-xuanzekuangxuanzhong" v-show="item.pick" style="color:#1ABC9C"></i>
					</div>
					<div class="goodsImg"><img :src="item.goodsImg" /></div>
					<!--购物车商品信息-->
					<div class="cartInformation">
						<div class="goodsMessage">
							<p class="title">{{item.goodsName}}</p>
							<p class="price">￥{{item.goodsPrice}}</p>
						</div>
						<!--购物车商品数量-->
						<div class="cartNumber">
							<ul>
		        				<li @click="reduce(index)">-</li>
		        				<li><input v-model="item.goodsNum" readonly/></li>
		        				<li @click="add(index)">+</li>
		        			</ul>
						</div>
					</div>
					<div class="del iconfont icon-shanchu" @click="deleteCart(index)"></div>	
				</li>
			</ul>
		</div>
		<!--购物车为空-->
		<div class="cartImg" v-if="!cartItem.length">
            <img src="../../assets/img/gouwuche.png" alt="购物车图片">
            <h1>购物车是空的哦，快去购物吧</h1>
            <router-link to="home">逛一逛</router-link>
        </div>
		<!--底部-->
		<div class="cartFooter" v-if="cartItem.length">
            <div class="pickAll" @click="quanxuan()" >
                <i class="iconfont icon-xuanzekuang" v-show="!qx"></i>
                <i class="iconfont icon-xuanzekuangxuanzhong" v-show="qx" style="color:#1ABC9C"></i>
                <span>全选</span>
            </div>
            <div class="total">合计：<span>￥{{sum}}</span></div>
            <div class="settlement">
                <a href="javascript:void(0);" @click="settlement(qx)">结算{{sumValue}}</a>
            </div>
        </div>
	</div>
</template>

<script>
	import { Toast } from "mint-ui";
	import myHeader from '../common/myHeader.vue'
	import { mapState, mapMutations, mapGetters } from "vuex";
	export default{
		name:"cart",
		components:{
			myHeader
		},
		data(){
			return{
				qx:false
			}
		},
		computed:{
			...mapGetters({
				cartItem:"getterCartData"
			}),
			sum:function(){
				var sum = 0;
			    this.$store.state.carts.forEach(item => {
			        if (item.pick) {
			          	sum += item.goodsPrice * item.goodsNum;
			        }
			    });
			    return sum;
			},
			sumValue(){
				var sumValue = 0;
				this.$store.state.carts.forEach(item => {
			        if (item.pick) {
			          	sumValue += parseInt(item.goodsNum);
			        }
			    });
      			return sumValue;
			}
			
		},
		methods:{
			...mapMutations(["deleteCart","add","reduce","settlement"]),
			pick(item){
				console.log(item)
				item.pick = !item.pick;
				if(!item.pick){
					this.qx = false;
				}
			},
			quanxuan(){
				this.qx = !this.qx;
				if(this.qx){
					this.$store.state.carts.forEach(item =>{
						item.pick = true;
					})
				}else{
					this.$store.state.carts.forEach(item =>{
						item.pick = false;
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped> 
	@import '../../assets/css/cart.scss';
</style>
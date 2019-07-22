<template>
	<div class="confirm">
		<div v-for="(pay,index) in payFor" :key="index">
			<div class="orderTitle common-wrap">
				<div class="confirm-title">
					<img :src="pay.proImg"/>
					<p>{{pay.proTitle}}</p>
				</div>
				<div class="orderDetail common-wrap">
					<div class="confirm-issue">{{pay.proRoom}} X {{$route.query.value}}<span>￥{{pay.proPrice}}</span></div>
					<div class="confirm-desc">{{pay.proDate}}</div>
					<div class="confirm-total">合计：<span class="total-price">￥{{$route.query.value*pay.proPrice}}</span></div>
				</div>
			</div>
			
			<div class="contact common-wrap">
				<p>联系人</p>
				<p>姓名：<input type="text" v-model="pay.customerName" placeholder="请输入姓名"/></p>
				<p>手机：<input type="number" v-model="pay.customerTel" placeholder="请输入11位手机号"/></p>
				<p>*请仔细核对订单填写信息,用于接收订单信息</p>
			</div>
			<footer>
				<span class="totalfee">合计：<span>￥{{$route.query.value*pay.proPrice}}</span></span>
	    		<div class="next" to="confirm" @click="payfor(pay,index)">去支付</div>
			</footer>
		</div>
	</div>
</template>

<script>
	import {Toast} from "mint-ui"
	export default{
		data(){
			return{
				customerName:'',
				customerTel:'',
				payFor:[]
			}
		},
		created(){
			var _this = this;
			var id = this.$route.query.id;
			this.$axios.get('src/assets/data/proDetail.json').then((res)=>{
				for(var i=0;i<res.data.gnProList.length;i++){
					if(res.data.gnProList[i].id == id){
						_this.payFor.push(res.data.gnProList[i]);
					}
				}
				
			})
		},
		methods:{
			payfor(pay,index){
				console.log(pay);
				if(pay.customerName == undefined){
					Toast({
						message:"请输入联系人姓名",
						duration:1050
					})
				}else if(pay.customerTel == undefined){
					Toast({
						message:"请输入联系人手机号",
						duration:1050
					})
				}else{
					//获取当前时间
					var date = new Date();
					var year = date.getFullYear();
					var month = date.getMonth();
					var day = date.getDate();
					var hour = date.getHours();
					var minutes = date.getMinutes();
					//判断时间要不要补零
					month = month < 10 ? ('0' + month) : month;
					day = day < 10 ? ('0' + day) : day;
					hour = hour < 10 ? ('0' + hour) : hour;
					minutes = minutes < 10 ? ('0' + minutes) : minutes;
					var nowTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes;
					
					var data = {
						id:pay.id,
						name:pay.proName,
						proImg:pay.proImg,
						proPrice:pay.proPrice,
						num:this.$route.query.value,
						orderTime:nowTime,
						customerName:pay.customerName,
						customerTel:pay.customerTel
						
					}
					this.$store.dispatch("setOrders",data);
					
					var _this = this;
			        var time = setInterval(function() {
			          _this.$router.push({
			            path: "success"
			          });
			          clearInterval(time);
			        }, 1000);
				}
			}
		}
	}
</script>

<style lang="scss"> 
	@import '../../assets/css/confirm.scss';
</style>
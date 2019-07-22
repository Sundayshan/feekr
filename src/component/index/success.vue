<template>
<div class="success">
	<my-Header title="结算"></my-Header>
	<div class="pay-success">
        <i class="iconfont icon-chenggong"></i>
        <h2>购买成功</h2>
        <p>已收到您的货款,请留意<router-link to="/order" >订单详情</router-link></p>
        <p>另外祝您生活愉快 感谢您的支持与厚爱</p>
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

<style lang="scss">
.pay-success{
	width: 90%;
	margin: auto;
	text-align: center;
	h2{
	  	font-size: 3rem;
	    margin-top: 2.5rem;
	    margin-bottom: 0.42rem;
  	}
  	i{
	  	display: block;
	    padding-top: 30%;
	    font-size: 11rem;
	    color: #1ABC9C;
  	}
  	p{
	  	width: 92%;
	    font-size: 1.2rem;
	    margin: auto;
  	}
    a{
    	color: #1574e3;
    }
} 
</style>
<template>
	<div class="search-container">
		<header class="back-title">
			<a href="javascript:history.go(-1)" class="back-icon iconfont icon-buoumaotubiao09"></a>
			<span>注册</span>
		</header>
		<div class="register-content">
			<form>
				<div class="input-wrap">
					<span class="iconfont icon-yonghu"></span>
					<input type="text" v-model="account" placeholder="请输入你的账号"/>
				</div>
				<div class="input-wrap">
					<span class="iconfont icon-mima"></span>
					<input type="password" v-model="password" placeholder="请设置密码" />
				</div>	
				<div class="input-wrap">
					<span class="iconfont icon-mima"></span>
					<input type="password" v-model="confirmPassword" placeholder="请再次输入密码" />
				</div>
				<button @click="onSubmit()" class="btn-register">注册</button>
			</form>
			<div class="protocol">
				<p>您已同意并愿意遵守Feekr的<span class="color">用户协议</span>.</p>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import { Toast } from 'mint-ui';
	
	export default{
		name:"cart",
		data(){
			return{
				account:'',
				password:'',
				confirmPassword:''
			}
		},
		methods:{
			onSubmit(){
				if(this.account==''||this.password==''||this.confirmPassword==''){
					Toast({
					  	message: '请输入账号和密码',
					  	duration: 1000
					});
				}else{
					if(this.password===this.confirmPassword){
						const formData = {
							id:Date.now(),
							email : this.email,
                        	password : this.password,
                        	confirmPassword : this.confirmPassword
						}
						axios.post("/users.json",formData).then((res)=>{
							Toast({
							  	message: '注册成功,即将跳转到登录页面',
							  	duration: 1000
							});
							console.log(res)
							var self = this;
							setTimeout(function () {
	                            self.$router.push({name:"login"})
	                        }, 2000);
						})
						Toast({
						  	message: '注册成功,即将跳转到登录页面',
						  	duration: 1000
						});
					}else{
						Toast({
						  	message: '两次密码输入不一致,请重新输入',
						  	duration: 1000
						});
					}
				}
			}
		}
	}
</script>

<style>
	@import '../../assets/css/register.css';
	body{
	background-color: #f6f6f6;
    	-webkit-font-smoothing: antialiased;
    	max-width: 640px;
    	margin: 0 auto;
	}
</style>
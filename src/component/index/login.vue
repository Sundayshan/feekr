<template>
	<div class="login-content">
		<div class="login-inner wrap">
			<div class="logo">
				<span></span>
			</div>
			<form action="">
				<div class="input-wrap">
					<span class="iconfont icon-yonghu"></span>
					<input class="login-input" v-model="account" type="text" placeholder="请输入账号名"/>
				</div>
				<div class="input-wrap">
					<span class="iconfont icon-mima"></span>
					<input class="login-psd" v-model="password" type="password" placeholder="请输入密码"/>
				</div>
				<button type="submit" class="login-submit" @click="login">登录</button>
			</form>
			<div class="option-psd">
				<a href="#" class="f-left">忘记密码</a>
				<router-link to="register" class="f-right">快速注册</router-link>
			</div>
			<div class="third-login">
				<div class="third-title">
					<div class="table-cell"><span class="line"></span></div>
	                <div class="table-cell title">使用第三方账号登录</div>
	                <div class="table-cell"><span class="line"></span></div>
				</div>
                <div class="third-list">
                	<a href="#">
                		<span class="iconfont icon-icon"></span>
                	</a>
                	<a href="#">
                		<span class="iconfont icon-weibo"></span>
                	</a>
                </div>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import { Toast } from 'mint-ui';
	export default{
		conponents:{
			
		},
		data(){
			return{
				account:'',
				password:''
			}
		},
		methods:{
			login(){
				//输入框不能为空
				if(this.account==''||this.password==''){
					Toast({
					  	message: '账户密码不能为空！',
					  	duration: 1000
					});
				}else{
					//然后发去请求从野狗云上拿回数据,遍历数据存起来
					axios.get("/users.json").then((res)=>{
						var user=[];
						for(let k in res.data){
							user.push(res.data[k])
						}
						//拿到数据后和用户输入的账号和密码是否一样得到所有账号密码，进行过滤筛选
	                    //，如填写的邮箱和密码跟数据库的一致则返回结果数组
						let result = user.filter((item)=>{
							return item.email === this.account && item.password === this.password
						})
						//然后判断如果长度大于0就是有
						if(result.length>0&&result!=null){
							//跳转到个人中心去
							this.$router.push({name:"user"})
							//并把用户的账号传过去
							this.$store.dispatch("SETcurren",result[0].email)
						}else{
							Toast({
							  	message: '账户密码不正确！',
							  	duration: 1000
							});
							this.$store.dispatch("SETcurren",null)
						}
					});
				}
			}
		}
	}
</script>

<style>
	@import '../../assets/css/login.css';
</style>
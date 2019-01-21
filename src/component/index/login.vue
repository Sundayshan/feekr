<template>
	<div class="login-content">
		<div class="login-inner wrap">
			<div class="logo">
				<span></span>
			</div>
			<form action="">
				<div class="input-wrap">
					<span class="iconfont icon-yonghu"></span>
					<input class="login-input" type="text" placeholder="请输入邮箱或手机号"/>
				</div>
				<div class="input-wrap">
					<span class="iconfont icon-mima"></span>
					<input class="login-psd" type="password" placeholder="请输入密码"/>
				</div>
				<router-link to='user'>
					<button type="submit" class="login-submit">登录</button>
				</router-link>
				
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
	import '../../assets/css/login.css'
	export default{
		conponents:{
			
		},
		data(){
			return{
				
			}
			
		}
	}
</script>

<style>
</style>
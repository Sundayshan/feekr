<template>
	<div class="search-container">
		<header class="back-title">
			<a href="javascript:history.go(-1)" class="back-icon iconfont icon-buoumaotubiao09"></a>
			<span>注册</span>
		</header>
		<div class="register-content">
			<form action="">
				<div class="input-wrap">
					<span class="iconfont icon-yonghu"></span>
					<input type="text" placeholder="请输入手机号码"/>
				</div>
				<div class="input-wrap">
					<span class="iconfont icon-mima"></span>
					<input type="password" placeholder="请设置密码（6位数以上数字或字母）" />
				</div>				
				<button class="btn-register">注册</button>
			</form>
			<div class="protocol">
				<p>您已同意并愿意遵守Feekr的<span class="color">用户协议</span>.</p>
			</div>
		</div>
	</div>
</template>

<script>
	import '../../assets/css/register.css'
	export default{
		
	}
</script>

<style>
	body{
	background-color: #f6f6f6;
    	-webkit-font-smoothing: antialiased;
    	max-width: 640px;
    	margin: 0 auto;
	}
</style>
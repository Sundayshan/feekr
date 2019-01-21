<template>
	<div class="user-container">
		<div class="user-content">
			<header class="user-head txt-center"><span>我的</span></header>
			<div class="user-msg table-mode">
				<div class="table-cell"><img class="user-pic" src="../../assets/img/userphoto.jpg"/></div>
				<div class="table-cell"><p class="nickname">Sunday</p></div>
				<div class="table-cell iconfont icon-jiantou"></div>
			</div>
			<div v-for="i in groups" class="user-opt">
				<a v-for="item in i.menu" href="#" class="menu-group table-mode">
					<span class="iconfont table-cell usericon">{{item.icon}}</span>
					<span class="menu-name table-cell">{{item.title}}</span>
					<span class="iconfont icon-jiantou table-cell"></span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	import '../../assets/css/user.css'
	export default{
		data(){
			return{
				groups:[
					{
						menu:[
							{
								icon:'\ue63b',title:'消息'
							},
							{
								icon:'\ue60d',title:'收藏'
							}						
						]
					},
					{
						menu:[
							{
								icon:'\ue606',title:'设置'
							},
							{
								icon:'\ue649',title:'反馈'
							}						
						]
					}
				]
			}
		}
	}
</script>

<style>

</style>
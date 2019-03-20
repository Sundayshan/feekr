<template>
	<div class="favor">
		<my-Header title="我的收藏"></my-Header>
		<!--<el-tabs v-model="activeName" @tab-click="handleClick">
		    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
		    <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
		    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
		    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
		</el-tabs>-->
	</div>
</template>

<script>
	import myHeader from './component/myHeader.vue'
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

<style>
</style>
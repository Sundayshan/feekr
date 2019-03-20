<template>
	<div class="news">
		<div class="newspage" v-for="(list,index) in newsDetail">
			<div class="news-header">
				<a href="javascript:history.go(-1);" class="iconfont icon-buoumaotubiao09"></a>
				<a href="" class="iconfont icon-fenxiang share-btn"></a>
				<a href="" class="iconfont icon-shoucang5 favor-btn"></a>
			</div>
			<div class="article-container">
				<div class="title">{{list.newsTitle}}</div>
				<div class="article-content" v-html="list.newsDetail"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		components:{
			
		},
		data(){
			return{
				newsDetail:[]
			}
		},
		created(){
			var _this = this;
			var id = this.$route.query.id;
			this.$axios.get('/src/assets/data/articleDetail.json').then((res)=>{
				for(var i=0;i<res.data.data.news.length;i++){
					if(res.data.data.news[i].id == id){
						_this.newsDetail.push(res.data.data.news[i]);
					}
				}
			})
		}
	}
</script>

<style lang="scss">
	@import "../../assets/css/news.scss"
</style>
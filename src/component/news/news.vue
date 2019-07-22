<template>
	<div class="news">
		<div class="newspage" v-for="(list,index) in newsDetail">
			<div class="news-header">
				<a href="javascript:history.go(-1);" class="iconfont icon-buoumaotubiao09"></a>
				<a class="iconfont icon-fenxiang share-btn"></a>
				<a class="star" @click="picked(list)">
					<a class="iconfont icon-shoucang5 favor-btn" v-show="!light"></a>
					<a class="iconfont icon-shoucang favor-btn" v-show="light" style="color:yellow"></a>
				</a>
			</div>
			<div class="article-container">
				<div class="title">{{list.newsTitle}}</div>
				<div class="article-content" v-html="list.newsDetail"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapGetters,mapMutations} from 'vuex';
	import { Toast } from 'mint-ui';
	export default{
		name:"news",
		components:{
			
		},
		data(){
			return{
				newsDetail:[],
				light:false
			}
		},
		computed:{
			...mapGetters(["this.$store.state.article"])
		},
		methods:{
			picked(list){
				this.light=!this.light;
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
				
				var idExist = this.$store.state.article.find(data =>{
					return data.id == list.id;
				});
				if(!idExist){ //没有收藏过
					var data = {
						id: list.id,
						title:list.newsTitle,
						img:list.newsImg,
						nowTime:nowTime
					}
					Toast({
						message:"收藏成功",
						duration:950
					})
					this.$store.dispatch("setArticle",data)
				}else{  //收藏过
					Toast({
						message:"您已经收藏过了",
						duration: 950
					})
				}
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
<template>
	<div class="home">
		<section>
		<div class="swipe">		
			<mt-swipe :auto="2000">
			  <mt-swipe-item v-for="(v,i) in datas.items" :key="v.id">
			  	<a href="v.href"><img :src="v.url"/></a>		  	
			  </mt-swipe-item>	  
			</mt-swipe>
		</div>
		<div class="search">
			<div class="search-bar" @click="show()">
				<form class="search-form">
					<input class="search-input search-icon" type="search" placeholder="搜索目的地/攻略/旅行资讯"/>
				</form>
			</div>
		</div>
		<div class="navbar-container">
			<div class="navbar">
				<router-link :to="v.path" href="#" v-for="(v,i) in datas.lists" :key="v.id">
					<p class="iconfont icon-style" v-bind:style="{background:v.color}">{{v.icon}}</p>
					<p>{{v.title}}</p>
				</router-link>
			</div>
		</div>
		<section class="news-container">
			<section class="list-title">
				<span class="header-line"></span>
				<span class="header-title">最新旅行资讯</span>
				<span class="subtitle">给你最新的旅行热点</span>
			</section>
			<div class="article-list list">
				<div class="newsitems flex-wrap" v-for="n in newsdata" @click="goNewsDetail(n.id)" :key="n.id">
					<img class="listimg" :src="n.newsImg"/>
					<div class="news-item flex-item">
						<p class="news-title">{{n.newsTitle}}</p>
						<p>
							<span>{{n.readNum}}</span>
							<span class="separate">/</span>
							<span>{{n.newsDate}}</span>
						</p>
					</div>
				</div>
			</div>
			<a class="getmore" href="">更多旅行资讯</a>
		</section>
		<section class="news-container">
			<section class="list-title">
				<span class="header-line"></span>
				<span class="header-title">当季特惠</span>
				<span class="subtitle">本季度最优惠的出游商品</span>
			</section>
			<div class="" v-for="s in proList">
				<div class="season-title dis-flex">
					<div class="font-12rem">{{s.areaTrip}}</div>
					<div class="sline flex-item"></div>
					<a class="smore font-12rem" href="">更多</a>
				</div>
				<div class="dome-lists list">
					<div class="dome domemar f-left" v-for="(todo,i) in s.areaDetail" :key="todo.id" @click="goProDetail(todo.id)">
						<!--<router-link class="dome f-left domemar" v-for="(todo,i) in s.areaDetail" :key="todo.id" :to="'/detail/'+todo.id">-->
							<img :src="todo.goodspic"/>
							<p class="product-title">{{todo.goodsName}}</p>
							<p class="product-area">{{todo.cityName}}</p>
							<p class="font-12rem">{{todo.price}}</p>
						<!--</router-link>-->	
					</div>					
				</div>
			</div>
		</section>
		<section class="news-container">
			<section class="list-title">
				<span class="header-line"></span>
				<span class="header-title">目的地推荐</span>
				<span class="subtitle">开启城市深度游攻略</span>
			</section>
			<div class="cities list">
				<a v-for="(v,i) in datas.citys" class="city f-left" href="">
					<div class="city-item">
						<img class="citypic" :src="v.imgsrc"/>
						<div class="layer font-14rem">{{v.cityName}}</div>	
					</div>					
				</a>
			</div>
			<a class="getmore" href="">更多目的地推荐</a>		
		</section>
		</section>
	    <div class="searchPage" v-bind:class="{show:showslide}">
	    	<div class="table-mode search-content">
	    		<div @click="hide()" class="iconfont icon-buoumaotubiao09 table-cell"></div>
	    		<div class="table-cell">
	    			<form class="search-input">
	    				<input class="search-text" type="text" placeholder="搜索目的地"/>
	    			</form>
	    		</div>
	    		<div class="table-cell">
	    			<a href="" class="search-btn">搜索</a>
	    		</div>
	    	</div>
			<div class="search-panel">
				<div class="search-wrap">
					<div class="recent-search txt-center">
						<span>-</span>
						<span>最近搜索</span>
						<span>-</span>
					</div>
					<div class=""></div>
				</div>
				<div class="search-wrap">
					<div class="recent-search txt-center">
						<span>-</span>
						<span>热门搜索</span>
						<span>-</span>
					</div>
					<div class="hot-tag">
						<a href="#">杭州</a>
						<a href="#">上海</a>
						<a href="#">苏州</a>
						<a href="#">莫干山</a>
						<a href="#">成都</a>
					</div>
				</div>
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
				datas:'',
				proList:'',
				newsdata:'',
				showslide:false
			}
		},
		methods:{
			show(){
				this.showslide=true;
			},
			hide(){
				this.showslide=false;
			},
			goProDetail(id){
				this.$router.push({path:"detail",query:{id: id}});
			},
			goNewsDetail(id){
				this.$router.push({path:"news",query:{id:id}});
			}
		},
		mounted(){
			var id = this.$route.query.id;
			this.$axios.get('src/assets/data/home.json').then((res)=>{
				this.datas=res.data;
				this.proList=res.data.season;
			});
			this.$axios.get('src/assets/data/articleDetail.json').then((res)=>{
				this.newsdata=res.data.data.news;
			});
		}
	}
</script>

<style scoped>
@import '../../assets/css/home.css';
@import '../../assets/css/search.css';
body,html{
	width: 100%;
}
</style>
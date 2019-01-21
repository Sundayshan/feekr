<template>
	<div class="guide_city">
		<div class="city_top">
			<img src="../../assets/img/guidecity1.jpg"/>
			<div class="font_up">
				<p class="city_name">{{cityDetail1.cityName}}</p>
			</div>
		</div>
		<div class="guide_city_nav">
			<ul>
				<li>
					<a href="">
						<div>
							<i class="iconfont icon-icon1"></i>
						</div>
						<p>美景</p>
					</a>
				</li>
				<li>
					<a href="">
						<div><i class="iconfont icon-meishi"></i></div>
						<p>美食</p>
					</a>
				</li>
				<li>
					<a href="">
						<div><i class="iconfont icon-house"></i></div>
						<p>美宿</p>
					</a>
				</li>
				<li>
					<a href="">
						<div><i class="iconfont icon-bag_icon"></i></div>
						<p>美物</p>
					</a>
				</li>
			</ul>
		</div>
		<div class="theme-intro txt-center">
			<div class="commonHeader">
				<span>-</span>
				<span>主题推荐</span>
				<span>-</span>
			</div>
			<a href="" v-for="(v,i) in cityDetail.themeList">
				<img :src="v.imgsrc"/>
				<div class="theme-desc">
					<div class="theme_name">{{v.themeName}}</div>
					<div class="theme_num">{{v.number}}大推荐</div>
				</div>
			    <div class="cover"></div>
			</a>
		    <div class="get_more_list txt-center">
		    	<p>更多主题推荐</p>
		    </div>
		</div>
		<div class="theme-intro">
			<div class="commonHeader txt-center">
				<span>-</span>
				<span>路线推荐</span>
				<span>-</span>
			</div>
			<div class="route-intro" v-for="(v,i) in cityDetail.routeList">
				<div class="route-img">
					<img v-for="s in v.routeImg" :src="s.imgurl"/>			
				</div>
				<div class="route-desc">
					<p class="font-12rem">{{v.routeName}}</p>
					<p class="mgtop">路线包括：{{v.routeDesc}}</p>
				</div>
			</div>
			<div class="get_more_list txt-center">
		    	<p>更多路线</p>
		    </div>
		</div>
		<div class="theme-intro txt-center">
			<div class="commonHeader txt-center">
				<span>-</span>
				<span>私藏资讯</span>
				<span>-</span>
			</div>
			<div class="article-intro" v-for="(v,i) in cityDetail.articleList">
				<img :src="v.imglink"/>
				<div class="article_desc">{{v.articleTitle}}</div>
			</div>
			<div class="get_more_list txt-center">
		    	<p>更多私藏资讯</p>
		    </div>
		</div>
		<div class="theme-intro txt-center">
			<div class="commonHeader txt-center">
				<span>-</span>
				<span>周边城市</span>
				<span>-</span>
			</div>
			<div class="nearby-intro">
				<div class="nearbycity" v-for="(v,i) in cityDetail.cityList">
					<img :src="v.imgsrc"/>
					<span>{{v.cityName}}</span>
					<p>距离&nbsp;{{v.distance}}&nbsp;公里 </p>
				</div>
			</div>			
		</div>
	</div>
</template>

<script>
	import '../../assets/css/city.css'
	export default{
		data(){
			return{
				cityDetail1:'',
				cityDetail:''
			}
		},
		mounted(){
			this.$axios.get('src/assets/data/city.json').then((res)=>{
				this.cityDetail=res.data;
//				console.log(res.data)
			})
		},
		created(){
			var _this = this;
			var id = this.$route.query.id;
			_this.$axios.get('src/assets/data/city.json').then((res)=>{
				
				for(var i=0;i<res.data.testcity.length;i++){
					
					if(res.data.testcity[i].id==id){
						alert()
						_this.cityDetail1.push(res.data.testcity[i]);
						console.log(_this.cityDetail1)
					}
				}
			})
		}
	}
</script>

<style>
	
</style>
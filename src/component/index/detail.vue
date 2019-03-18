<template>
	<div class="detail">
		<ul>
			<li v-for="(pro,index) in proDetail" :key="pro.id">
				<div class="detail-swiper">
					<mt-swipe :auto="0">
					  	<mt-swipe-item v-for="list in pro.swiper" :key="list.id">
					  		<img :src="list.url"/>
					  	</mt-swipe-item>
					</mt-swipe>
				</div>
				<!--<div class="swiper-container">
				    <div class="swiper-wrapper">
				        <div class="swiper-slide" v-for="(v,i) in proDetail.swiper" :key="v.id">
				        	<img :src="v.url"/>
				        </div>
				    </div>
				     <!--如果需要分页器--
				    <div class="swiper-pagination">
				    	<span class="swiper-pagination-current"></span>/
				    	<span class="swiper-pagination-total"></span>
				    </div>
				</div>-->
				<div class="detail-head">
					<h5 class="product-detail-art">{{pro.proTitle}}</h5>
					<h3 class="product-detail-name">{{pro.proName}}</h3>
					<p class="product-detail-price" style="color: rgb(26, 188, 156);">
						<b>{{pro.proPrice}} </b><span> 起/{{pro.proDay}}晚</span>
					</p>
				</div>
				<div class="product-detail-menu" style="color: rgb(26, 188, 156);">
				    <span>选择套餐/有效期</span>
				    <i class="iconfont icon-jiantou"></i>
				</div>
				<div class="product-detail-guide">
					<img :src="pro.guideImg"/>
					<p>旅游体验师 - echo</p>
					<h4>为你推荐</h4>
					<h5>
						{{pro.proDesc}}
					</h5>
				</div>
				<div>
					<ul class="product-detail-tab">
						<li v-for="(v,i) in pro.detail" v-bind:class="{current:selected==i}" @click="change(i)">{{v.detailName}}</li>
					</ul>
					<div class="product-detail-desc">
						<div v-for="(v,i) in pro.detail" v-if="selected==i" v-html="v.concrete"></div>
					</div>
				</div>
				<div class="detail-like">
					<p class="detail-guessULike">猜你喜欢</p>
					<ul class="like-lists">
						<li v-for="n in pro.uLike">
							<a class="like-item" href="">
								<img v-lazy="n.imgurl"/>
								<h3>{{n.proTitle}}</h3>
								<p>{{n.proPrice}}</p>
							</a>
						</li>
					</ul>
				</div>
				<div class="footer_fixed">
					<ul>
						<li>
							<i class="iconfont icon-shouye1"></i>
							<a href="">首页</a>
						</li>
						<li>
							<i class="iconfont icon-kefunv"></i>
							<a href="">客服</a>
						</li>
						<li>
							<i class="iconfont icon-shoucang1"></i>
							<span>收藏</span>
						</li>
						<li>立即预定</li>
					</ul>
				</div>
			</li>
		</ul>

	</div>
	
</template>
<script>
	import '../../assets/css/detail.css'
	import '../../assets/css/swiper.min.css'
	import Swiper from 'swiper'
	export default{
		data(){
			return{
				currentDetail:'',
				proDetail:[],
				selected:0,
//				n:0
			}
		},
		mounted(){
//			this.$axios.get('src/assets/data/proDetail.json').then((res)=>{
//				this.proDetail=res.data.gnProList[indexs];
//			})
//			this.$axios.get('src/assets/data/proDetail.json').then((res)=>{
//				this.n=this.$route.params.id;
//				this.proDetail=res.data.gnProList;
//			})
			
			this.$nextTick(function(){				
				    var mySwiper = new Swiper ('.swiper-container', {
//		  			autoplay:true,
				    loop: true, // 循环模式选项
				    initialSlide :0,
				    observer:true,//修改swiper自己或子元素时，自动初始化swiper
				    observeParents:true,//修改swiper的父元素时，自动初始化swiper
				    // 如果需要分页器
				    pagination:'.swiper-pagination',
				})
			
		    
			})
		},
		created(){
        	var _this = this;           
            var id = this.$route.query.id;
            this.$axios.get('src/assets/data/proDetail.json').then((res)=>{
            	for(var i = 0;i<res.data.gnProList.length;i++){
            		if(res.data.gnProList[i].id == id){
            			_this.proDetail.push(res.data.gnProList[i]);   
//          			console.log(_this.proDetail);
            		}
            	}
            })
        },
//		watch:{
//			n(){
//				for(var i=0;this.proDetail.length;i++){
//					for(var j=0;j<this.proDetail[i].gnProList[j].id;j++){
//						if(this.n==this.proDetail[i].gnProList[j].id){
//							this.currentDetail=this.proDetail[i].gnProList[j]
//						}
//					}
//				}
//			}
//		},

        
		methods:{
			change(str){
				this.selected=str
			}
		}
		
	}
</script>

<style>
</style>
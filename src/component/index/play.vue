<template>
	<div id="play">
		<div class="search-main">
			<form class="p-search-input">
				<label class="search-label">
					<i class="iconfont icon-sousuo"></i>
					<input type="" placeholder="搜素目的地/关键词"/>
				</label>				
			</form>
			<div class="select-box">
				<!--<button @click="extend()" class="select-item" v-bind:class="{'base-color':changeColor}">分类<i class="iconfont icon-down-trangle1"></i></button>
				<button @click="extend()" class="select-item">目的地<i class="iconfont icon-down-trangle1"></i></button>
				<button @click="extend()" class="select-item">排序<i class="iconfont icon-down-trangle1"></i></button>-->
				<button id="button" v-for="(v,i) in tabs" @click="extend(i)" class="select-item" v-bind:class="{'base-color':disp==i}">{{v}}<i class="iconfont icon-down-trangle1"></i></button>
			</div>
			<ul class="classify" v-show="togglec==0" ref="btn">
				<li v-for="(v,i) in selects">{{v.itemName}}</li>
			</ul>
			<ul class="classify" v-show="togglec==2" ref="btn">
				<li v-for="(v,i) in sort">{{v.sortItem}}</li>
			</ul>
			<div class="classify" v-show="togglec==1" ref="btn">第二</div>
			<section>
				<ul class="search-result-product">
					<li v-for="item in products">
						<a href="">
							<img :src="item.imgSrc"/>
							<h3>{{item.proTitle}}</h3>
							<h4>{{item.proDesc}}</h4>
							<span>{{item.price}}</span>
						</a>
					</li>
				</ul>
			</section>
			
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				tabs:['分类','目的地','排序'],
				selects:[
					{itemName:'全部分类'},{itemName:'国内酒店'},{itemName:'国外酒店'},{itemName:'周边游'}
					,{itemName:'品牌酒店'},{itemName:'精美民宿'},{itemName:'精品小团'},{itemName:'私家定制'}
					,{itemName:'玩乐体验'}
				],
				sort:[
					{sortItem:'综合排序'},{sortItem:'销量优先'},{sortItem:'价格从低到高'},{sortItem:'价格从高到低'}
				],
				products:[
				    {imgSrc:require('../../assets/img/product1.jpg'),proTitle:'免签直飞，种植珊瑚体验',proDesc:'巴厘岛PADI潜水课程+珊瑚种植7天6晚之旅',price:'￥9888'},
				    {imgSrc:require('../../assets/img/product2.jpg'),proTitle:'天涯双城记，在地球最南端等你',proDesc:'Feekrclub | 飞跃南极15天14夜奢华邮轮之旅',price:'¥119900'},
				    {imgSrc:require('../../assets/img/product3.jpg'),proTitle:'从世界尽头，到蓝色星球',proDesc:'爪哇岛火山探秘7天6晚深度体验',price:'¥3980'},
				    {imgSrc:require('../../assets/img/product4.jpg'),proTitle:'一次避世历险记，一次古镇探秘',proDesc:'桐洲岛+龙门古镇两天一晚飞行体验之旅',price:'¥1100'},
				    {imgSrc:require('../../assets/img/product5.jpg'),proTitle:'穿过老街，在翡翠海洋撒个欢',proDesc:'宜兴体验|紫砂壶+帆船+龙池山骑行两天一晚',price:'¥1250'},
				    {imgSrc:require('../../assets/img/product6.jpg'),proTitle:'西双版纳的冬天，有中国最温暖的自然课堂',proDesc:'冬季西双版纳7天6晚亲子旅拍团',price:'¥5330'},
				    {imgSrc:require('../../assets/img/product7.jpg'),proTitle:'搭上雪乡列车，看北国的浪漫与乐趣',proDesc:'Feekr独家|东北赏雪7天6晚深度体验之旅',price:'¥2580'},
				    {imgSrc:require('../../assets/img/product8.jpg'),proTitle:'慢下来的东北，从去掉旅行套路开始',proDesc:'旅拍|冰雪东北7天6晚轻奢亲子游',price:'¥3880'},
				    {imgSrc:require('../../assets/img/product9.jpg'),proTitle:'特有的海底景观，独一无二的体验',proDesc:'著名沉船点·菲律宾科隆6天5晚PADI潜水',price:'¥3660'},
				],
				togglec:"",
				disp:""
			}
			
		},
		methods:{
			extend(str){
				console.log(str)
				this.togglec=str;
//				this.disp=!this.disp
				this.disp=str;

				console.log(this.$refs.btn.style.display)
				var par = this.$refs.btn.style.display
				if(par == ''){
					this.$refs.btn.style.display='none'
				}else{
					this.$refs.btn.style.display=''
				}				
			}
		}
	}
</script>

<style>
	@import '../../assets/css/play.css';
</style>
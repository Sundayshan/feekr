<template>
	<div class="guidePage">
		<div class="guide-search">
			<div class="search-bar" @click="show()">
				<form class="search-form">
					<input class="search-input search-icon" type="search" placeholder="搜索目的地"/>
				</form>
			</div>
		</div>
		<div class="g-header">
			<div class="font-14rem txt-center season-rec">
				<span>-</span>
				<span class="section-title">当季小众推荐</span>
				<span>-</span>
			</div>
			<div class="cities list">
				<!--<router-link to="/city" v-for="(v,i) in citys" :key="v.id" class="city f-left" href="">-->
				<div to="/city" v-for="(v,i) in citys" :key="v.id" class="city f-left" @click="goCity(v.id)">
					<div class="g-cityItem">
						<img class="g-citypic" :src="v.imgsrc"/>		
						<div class="g-cityName txt-center font-12rem">{{v.cityName}}</div>		
						<div class="txt-center city-desc">{{v.citydesc}}</div>
					</div>	
				</div>
				<!--</router-link>-->
			</div>
		</div>		
		<section v-for="items in proItem" class="city-container">
			<div class="city-item-container">
				<div class="g-city-list txt-center">
					<div class="g-province txt-center">
						<span class="g-proName font-14rem">{{items.proName}}</span>
						<div class="g-proSub">{{items.proDesc}}</div>
					</div>
					<a v-for="item in items.cityDetail" href="" class="cityshi f-left font-12rem">
						<img :src="item.imgurl"/>
						<div class="city-name">{{item.cityInPro}}</div>
					</a>
				</div>
			</div>
		</section>
		<section class="city-container">
			<div class="city-item-container">
				<div class="g-city-list txt-center">
					<div class="g-province txt-center">
						<span class="g-proName font-14rem">国内其他</span>
						<div class="g-proSub">这里的山水人文，独好</div>
					</div>
					<a v-for="item in others" href="" class="other-city cityshi f-left font-12rem">
						<img :src="item.imgurl"/>
						<div class="item-title">{{item.name}}</div>
					</a>
				</div>
			</div>
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
	import '../../assets/css/guide.css'
	export default{
		data(){
			return{
				citys:[
					{
						cityName:'杭州',
						imgsrc:require('../../assets/img/citypic1.png'),
						citydesc:'西湖之春，杭城风光正好'
					},
					{
						cityName:'厦门',
						imgsrc:require('../../assets/img/citypic2.png'),
						citydesc:'满溢小清新气息的文艺之城'
					},
					{
						cityName:'上海',
						imgsrc:require('../../assets/img/citypic3.png'),
						citydesc:'魔都的春日风情'					
					},
					{
						cityName:'台北',
						imgsrc:require('../../assets/img/citypic4.jpg'),
						citydesc:'我來到你的城市，然後就不想走了。'
					}					
				],
				proItem:[
					{
						proName:'山东',
						proDesc:'孔子故里、齐鲁圣地',
						cityDetail:[
							{
								imgurl:require('../../assets/img/shandong1.jpg'),
								cityInPro:'青岛'
							},
							{
								imgurl:require('../../assets/img/shandong2.jpg'),
								cityInPro:'烟台'
							},
							{
								imgurl:require('../../assets/img/shandong3.jpg'),
								cityInPro:'威海'
							}
						]
					},
					{
						proName:'浙江',
						proDesc:'江南水乡、鱼米之乡',
						cityDetail:[
							{
								imgurl:require('../../assets/img/zhejiang1.jpg'),
								cityInPro:'宁波'
							},
							{
								imgurl:require('../../assets/img/zhejiang2.jpg'),
								cityInPro:'乌镇'
							},
							{
								imgurl:require('../../assets/img/zhejiang3.jpg'),
								cityInPro:'绍兴'
							}
						]
					},
					{
						proName:'江苏',
						proDesc:'玩过这些地方，才算来过江苏',
						cityDetail:[
							{
								imgurl:require('../../assets/img/jiangsu1.jpg'),
								cityInPro:'南京'
							},
							{
								imgurl:require('../../assets/img/jiangsu2.jpg'),
								cityInPro:'常州'
							},
							{
								imgurl:require('../../assets/img/jiangsu3.jpg'),
								cityInPro:'无锡'
							}
						]
					},
					{
						proName:'云南',
						proDesc:'鲜为人知的云南，每一处都让你念念不忘',
						cityDetail:[
							{
								imgurl:require('../../assets/img/yunnan1.jpg'),
								cityInPro:'大理'
							},
							{
								imgurl:require('../../assets/img/yunnan2.jpg'),
								cityInPro:'昆明'
							},
							{
								imgurl:require('../../assets/img/yunnan3.jpg'),
								cityInPro:'丽江'
							}
						]
					},
					{
						proName:'川渝',
						proDesc:'火锅冰粉、钟灵毓秀',
						cityDetail:[
							{
								imgurl:require('../../assets/img/chuanyu1.jpg'),
								cityInPro:'成都'
							},
							{
								imgurl:require('../../assets/img/chuanyu2.jpg'),
								cityInPro:'甘孜'
							},
							{
								imgurl:require('../../assets/img/chuanyu3.jpg'),
								cityInPro:'重庆'
							}
						]
					},
					{
						proName:'台湾',
						proDesc:'小吃夜市，海上明珠',
						cityDetail:[
							{
								imgurl:require('../../assets/img/taiwan1.jpg'),
								cityInPro:'台北'
							},
							{
								imgurl:require('../../assets/img/taiwan2.jpg'),
								cityInPro:'垦丁'
							},
							{
								imgurl:require('../../assets/img/taiwan3.jpg'),
								cityInPro:'花莲'
							}
						]
					},
					{
						proName:'广东',
						proDesc:'小蛮腰，客家文化',
						cityDetail:[
							{
								imgurl:require('../../assets/img/guangdong1.jpg'),
								cityInPro:'广州'
							},
							{
								imgurl:require('../../assets/img/guangdong2.jpg'),
								cityInPro:'深圳'
							},
							{
								imgurl:require('../../assets/img/guangdong3.jpg'),
								cityInPro:'佛山'
							}
						]
					},
					{
						proName:'西北',
						proDesc:'戈壁高原，沙漠绿洲',
						cityDetail:[
							{
								imgurl:require('../../assets/img/xibei1.jpg'),
								cityInPro:'西安'
							},
							{
								imgurl:require('../../assets/img/xibei2.jpg'),
								cityInPro:'乌鲁木齐'
							},
							{
								imgurl:require('../../assets/img/xibei3.jpg'),
								cityInPro:'西宁'
							}
						]
					},
					{
						proName:'东北',
						proDesc:'烤串儿',
						cityDetail:[
							{
								imgurl:require('../../assets/img/dongbei1.jpg'),
								cityInPro:'大连'
							},
							{
								imgurl:require('../../assets/img/dongbei2.jpg'),
								cityInPro:'沈阳'
							},
							{
								imgurl:require('../../assets/img/dongbei3.jpg'),
								cityInPro:'哈尔滨'
							}
						]
					}
				],
				others:[
					{
						name:'三亚',
						imgurl:require('../../assets/img/other1.png')
					},
					{
						name:'香港',
						imgurl:require('../../assets/img/other2.jpg')
					},
					{
						name:'澳门',
						imgurl:require('../../assets/img/other3.jpg')
					},
					{
						name:'武汉',
						imgurl:require('../../assets/img/other4.jpg')
					},
					{
						name:'天津',
						imgurl:require('../../assets/img/other5.jpg')
					},
					{
						name:'苏州',
						imgurl:require('../../assets/img/other6.jpg')
					}
				],
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
			goCity(id){
				this.$router.push({path:"city",query:{id:id}})
			}
		}
	}
</script>

<style>
body{
	background-color: #f6f6f6;
    color: #2d2d2d;
    -webkit-font-smoothing: antialiased;
    max-width: 640px;
    margin: 0 auto;
}
</style>
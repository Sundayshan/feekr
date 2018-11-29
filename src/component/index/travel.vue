<template>
	<div class="travel">
		<mt-swipe :auto="2000">
		  <mt-swipe-item v-for="(v,i) in banner" :key="v.id">
		  	<a href="v.href"><img :src="v.url"/></a>		  	
		  </mt-swipe-item>	  
		</mt-swipe>
		<ul class="nav-select">
			<li class="nav-detail txt-center" v-for="item in nav">
				<router-link :to="item.href" style="color: #333 !important;"><img :src="item.icon"/><p>{{item.decs}}</p></router-link>
			</li>
		</ul>
		<div class="travel-body">
			<div class="new-hot">
				<div class="pro-block" v-for="v in list">
					<div class="common-header-title">
						<span class="font-12rem">{{v.headTitle}}</span>
						<p class="common-header-line"></p>
						<a class="common-header-more" href="">更多</a>
					</div>
					<div class="newProduct">
						<a class="product" href="" v-for="str in v.product">
							<img :src="str.proImg"/>
							<h3>{{str.proTitle}}</h3>
							<p>{{str.proPrice}}</p>
						</a>
					</div>
				</div>
			</div>
			<div class="themepro">
				<div class="pro-block">
					<div class="theme-header">
						<span class="theme-line"></span>
						<span class="themehead">主题推荐</span>
						<span class="subtitle">给出最新的出游主题</span>
					</div>
					<a v-for="s in theme" class="theme-block">
						<img :src="s.themeImg"/>
						<p>{{s.themeName}}</p>
					</a>
				</div>
			</div>			
			<div class="new-hot pro-block">
				<div class="theme-header">
					<span class="theme-line"></span>
					<span class="themehead">攻略资讯</span>
					<span class="subtitle">推荐城市深度游攻略</span>
				</div>
				<ul class="guide-list">
					<li v-for="to in article">
						<a href="">
							<img :src="to.guideImg"/>
							<div class="detail-right">
								<h3>{{to.guideTitle}}</h3>
								<p>{{to.keywords}}</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
			<div class="new-hot pro-block">
				<div class="theme-header">
					<span class="theme-line"></span>
					<span class="themehead">猜你喜欢</span>
					<span class="subtitle">这些也许是你喜欢的</span>
				</div>
				<ul class="like-lists">
					<li v-for="n in like">
						<a class="like-item" href="">
							<img v-lazy="n.imgurl"/>
							<h3>{{n.likeTitle}}</h3>
							<p>{{n.likeDetail}}</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
		
	</div>
	
</template>

<script>
	import '../../assets/css/travel.css'
export default{
	data(){
		return{
			banner:[
				{url:require('../../assets/img/banner1.jpg')},
				{url:require('../../assets/img/banner2.jpg')},
				{url:require('../../assets/img/banner3.jpg')},
				{url:require('../../assets/img/banner4.jpg')},
				{url:require('../../assets/img/banner5.jpg')},
				{url:require('../../assets/img/banner6.jpg')}
			],
			nav:[
				{href:'',icon:require('../../assets/img/icon-guonei-n.png'),decs:'国内酒店'},
				{href:'',icon:require('../../assets/img/icon-guowai-n.png'),decs:'海外酒店'},
				{href:'',icon:require('../../assets/img/icon-pingpai-n.png'),decs:'品牌酒店'},
				{href:'/play',icon:require('../../assets/img/icon-wanle-n.png'),decs:'玩乐体验'},
				{href:'',icon:require('../../assets/img/icon-zhoubian-n.png'),decs:'周边游'},
				{href:'',icon:require('../../assets/img/icon-xiaotuan-n.png'),decs:'精品小团'},
				{href:'',icon:require('../../assets/img/icon-sijia-n.png'),decs:'私家定制'},
				{href:'',icon:require('../../assets/img/icon-gonglv-n.png'),decs:'攻略推荐'},
			],
			list:[
				{
					headTitle:'新品&独家',
					product:[
						{
							proImg:require('../../assets/img/newpro1.jpg'),
							proTitle:'大理丽江5天4晚酒店+用车自驾深度游',
							proPrice:'¥ 5199 起/4晚'
						},
						{
							proImg:require('../../assets/img/newpro2.jpg'),
							proTitle:'贝加尔湖的冬天7天6晚旅拍团',
							proPrice:'¥ 10480 起/6晚'
						},
						{
							proImg:require('../../assets/img/newpro3.jpg'),
							proTitle:'春节寒假精品小团丨北海道 7 天 6 晚道东温泉滑雪破冰船之旅',
							proPrice:'¥ 10799 起/6晚'
						}					
					]
				},
				{
					headTitle:'本周特卖',
					product:[
						{
							proImg:require('../../assets/img/week1.jpg'),
							proTitle:'7天5晚含机票圣莫里茨滑雪套餐',
							proPrice:'¥ 10999 起/5晚'
						},
						{
							proImg:require('../../assets/img/week2.jpg'),
							proTitle:'宜兴且听风吟丨买一赠一/多选一',
							proPrice:'¥ 880 起/晚'
						},
						{
							proImg:require('../../assets/img/week3.jpg'),
							proTitle:'套房买一赠一 | 杭州滨江世融艾美酒店开业特惠',
							proPrice:'¥ 1398 起/晚'
						}					
					]
				}
			],
			theme:[
				{themeImg:require('../../assets/img/theam1.jpg'),themeName:'限时特惠'},
				{themeImg:require('../../assets/img/theam2.jpg'),themeName:'周末出游·江浙沪'},
				{themeImg:require('../../assets/img/theam3.jpg'),themeName:'热卖排行榜'},
				{themeImg:require('../../assets/img/theam4.jpg'),themeName:'亲子精选'}
			],
			article:[
				{
					guideImg:require('../../assets/img/guide1.jpg'),
					guideTitle:'世界最难签的国家可以落地签了！曾被LP推荐，连霉霉都跑去拍MV，这个小国要火了！',
					keywords:'非洲 博茨瓦纳 落地签'
				},
				{
					guideImg:require('../../assets/img/guide2.jpg'),
					guideTitle:'在南京虚度了七年光阴，我终于整理出了这份最地道的城市漫步指南',
					keywords:'南京'
				},
				{
					guideImg:require('../../assets/img/guide3.jpg'),
					guideTitle:'超模刘雯“零片酬”出演家乡宣传片，原来她长大的地方这么美！',
					keywords:'刘雯 湖南 永州'
				}
			],
			like:[
				{imgurl:require('../../assets/img/like1.jpg'),
				likeTitle:'极北漠河6天5晚深度环线之旅',
				likeDetail:'￥2380 起/5晚'},
				{imgurl:require('../../assets/img/like2.jpg'),
				likeTitle:'限时抢购|丽江金茂凯悦臻选+璞修雪山酒店&两店联动3晚/4晚钜惠',
				likeDetail:'￥3399 起/3晚'},
				{imgurl:require('../../assets/img/like3.jpg'),
				likeTitle:'三亚·亚特兰蒂斯 全年预售 | 提前30天预约享优惠',
				likeDetail:'￥1899起/晚'},
				{imgurl:require('../../assets/img/like4.jpg'),
				likeTitle:'套房买一赠一 | 杭州滨江世融艾美酒店开业特惠',
				likeDetail:'￥1398 起/晚'},
				{imgurl:require('../../assets/img/like5.jpg'),
				likeTitle:'三亚艾迪逊酒店 上海出发5天4晚自由行 | 限量发售机票+酒店',
				likeDetail:'￥3699 起/4晚'},
				{imgurl:require('../../assets/img/like6.jpg'),
				likeTitle:'马来西亚美里PADI潜水6天/7天之旅',
				likeDetail:'￥4550 起/5晚'},
				{imgurl:require('../../assets/img/like7.jpg'),
				likeTitle:'千岛湖两天一晚湖畔戏水普丽/民宿体验',
				likeDetail:'￥703起/晚'},
				{imgurl:require('../../assets/img/like8.jpg'),
				likeTitle:'黄山脚下全新开业|黄山暖山町3天2晚套餐',
				likeDetail:'￥1699 起/2晚'},
				{imgurl:require('../../assets/img/like9.jpg'),
				likeTitle:'西塘陌野精品酒店|阡陌于野1晚套餐',
				likeDetail:'￥428 起/晚'},
				{imgurl:require('../../assets/img/like10.jpg'),
				likeTitle:'感恩特惠 | 安吉悦榕庄',
				likeDetail:'￥1118 起/晚'},
				{imgurl:require('../../assets/img/like11.jpg'),
				likeTitle:'独家钜惠2晚自由套餐 | 莫干山芝麻谷度假酒店+Discovery极限套餐',
				likeDetail:'￥1299 起/2晚'},
				{imgurl:require('../../assets/img/like12.jpg'),
				likeTitle:'三亚万丽度假酒店2晚券 下午茶+免费升级 | 海棠湾性价比挚选',
				likeDetail:'￥1650 起/2晚'},
				{imgurl:require('../../assets/img/like13.jpg'),
				likeTitle:'千年佛国，浪漫海岛--斯里兰卡全景深度精华8天7晚高端精品游',
				likeDetail:'￥11000 起/7晚'},
				{imgurl:require('../../assets/img/like14.jpg'),
				likeTitle:'仙本那6天5晚浮潜休闲之旅',
				likeDetail:'￥2380 起/5晚'},
			]
		}
	}
}
</script>

<style>
</style>
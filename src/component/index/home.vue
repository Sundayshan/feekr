<template>
	<div class="home">
		<div class="swipe">		
			<mt-swipe :auto="2000">
			  <mt-swipe-item v-for="(v,i) in items" :key="v.id">
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
				<router-link :to="v.path" href="#" v-for="(v,i) in lists" :key="v.id">
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
				<a class="newsitems flex-wrap" v-for="n in recentnew" href="">
					<img class="listimg" :src="n.newImg"/>
					<div class="news-item flex-item">
						<p class="news-title">{{n.newTitle}}</p>
						<p>
							<span>{{n.readNum}}</span>
							<span class="separate">/</span>
							<span>{{n.newsDate}}</span>
						</p>
					</div>
				</a>
			</div>
			<a class="getmore" href="">更多旅行资讯</a>
		</section>
		<section class="news-container">
			<section class="list-title">
				<span class="header-line"></span>
				<span class="header-title">当季特惠</span>
				<span class="subtitle">本季度最优惠的出游商品</span>
			</section>
			<div class="" v-for="s in season">
				<div class="season-title dis-flex">
					<div class="font-12rem">{{s.areaTrip}}</div>
					<div class="sline flex-item"></div>
					<a class="smore font-12rem" href="">更多</a>
				</div>
				<div class="dome-lists list">
					<a class="dome f-left" v-for="v in s.areaDetail" href="">
						<img :src="v.goodspic"/>
						<p class="product-title">{{v.goodsName}}</p>
						<p class="product-area">{{v.cityName}}</p>
						<p class="font-12rem">{{v.price}}</p>
					</a>	
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
				<a v-for="(v,i) in citys" class="city f-left" href="">
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

<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script type="text/javascript">

    var imgUrl = '../../assets/img/aboard1.jpg';  // 分享后展示的一张图片
	var lineLink = 'http://www.baidu.com'; // 点击分享后跳转的页面地址
	var descContent = "成立于2003年（前身是美晨集团信息部），一直致力与企业信息化管理，是国家高新技术企业，拥有10多个软件著作权，在SAP项目实施和维护方面有丰富项目经历。";  // 分享后的描述信息
	var shareTitle = '这是要分享的标题';  // 分享后的标题
	var appid = '';  // 应用id,如果有可以填，没有就留空
	function shareFriend() {
		WeixinJSBridge.invoke('sendAppMessage',{
			"appid": appid,
			"img_url": imgUrl,
			"img_width": "200",
			"img_height": "200",
			"link": lineLink,
			"desc": descContent,
			"title": shareTitle
		}, function(res) {
			//_report('send_msg', res.err_msg);  // 这是回调函数，必须注释掉
		})
	}
	function shareTimeline() {
		WeixinJSBridge.invoke('shareTimeline',{

			"img_url": imgUrl,

			"img_width": "200",

			"img_height": "200",

			"link": lineLink,

			"desc": descContent,

			"title": shareTitle

		}, function(res) {

				//_report('timeline', res.err_msg); // 这是回调函数，必须注释掉

		});

	}

	function shareWeibo() {

		WeixinJSBridge.invoke('shareWeibo',{

			"content": descContent,

			"url": lineLink,

		}, function(res) {

			//_report('weibo', res.err_msg);

		});

	}

	// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。

	document.addEventListener('WeixinJSBridgeReady', functiononBridgeReady() {

		// 发送给好友

		WeixinJSBridge.on('menu:share:appmessage', function(argv){

			shareFriend();

		});

		// 分享到朋友圈

		WeixinJSBridge.on('menu:share:timeline', function(argv){

			shareTimeline();

		});

		// 分享到微博

		WeixinJSBridge.on('menu:share:weibo', function(argv){

			shareWeibo();

		});

	}, false);

</script>
<script>
	import '../../assets/css/home.css'
	export default{
		components:{
			
		},
		data(){
			return{
				items:[
					{
						href:'#',url:require('../../assets/img/homeswipe1.jpg')						
					},
					{
						href:'#',url:require('../../assets/img/homeswipe2.jpg')	
					},
					{
						href:'#',url:require('../../assets/img/homeswipe3.jpg')
					},
					{
						href:'#',url:require('../../assets/img/homeswipe4.jpg')	
					}
				],
				lists:[
					{icon:'\ue617',title:'攻略',color:'#FCBC00',path:'/guide'},
					{icon:'\ue60c',title:'度假',color:'#51A5DC',path:'/travel'},
					{icon:'\uea7a',title:'玩乐',color:'#F15A62',path:'/play'},
					{icon:'\ue656',title:'美物',color:'#A5CE00',path:'/play'},
					{icon:'\ue68f',title:'研究所',color:'#00AC59',path:'/play'}
				],
				recentnew:[
					{
						newImg:require('../../assets/img/zixun1.jpg'),
						newTitle:'在南京虚度了七年光阴，我终于整理出了这份最地道的城市漫步指南',
						readNum:'17742人阅读',newsDate:'2018-11-27'
					},
					{
						newImg:require('../../assets/img/zixun2.jpg'),
						newTitle:'世界最难签的国家可以落地签了！曾被LP推荐，连霉霉都跑去拍MV，这个小国要火了！',
						readNum:'119227人阅读',newsDate:'2018-11-27'
					},
					{
						newImg:require('../../assets/img/zixun3.jpg'),
						newTitle:'超模刘雯“零片酬”出演家乡宣传片，原来她长大的地方这么美！',
						readNum:'445人阅读',newsDate:'2018-11-20'
					}
				],
				season:[
					{
						areaTrip:'国内度假',
						areaDetail:[
							{
								goodspic:require('../../assets/img/seasonpic1.jpg'),
								goodsName:'开业特惠|昆明古滇名城皇冠假日酒店3天2晚超值套餐',
								cityName:'云南 - 昆明',price:'￥1799 起'
							},
							{
								goodspic:require('../../assets/img/seasonpic2.jpg'),
								goodsName:'莫干山茶苑山庄 | 感受农家之味',
								cityName:'浙江 - 莫干山',price:'￥646 起'
							}
						]
					},
					{
						areaTrip:'国外度假',
						areaDetail:[
							{
								goodspic:require('../../assets/img/aboard1.jpg'),
								goodsName:'至尊柏悦，超值专享-柬埔寨暹粒柏悦酒店3晚度假套餐',
								cityName:'柬埔寨 - 暹粒',price:'￥4699 起'
							},
							{
								goodspic:require('../../assets/img/aboard2.jpg'),
								goodsName:'秋冬·滑雪抢先订 | 北海道星野Tomamu塔娃3晚套餐',
								cityName:'日本 - 北海道',price:'￥100 起'
							},
							{
								goodspic:require('../../assets/img/aboard3.jpg'),
								goodsName:'3晚|原罗莱夏朵-柬埔寨暹粒传承套房酒店套餐',
								cityName:'柬埔寨 - 暹粒',price:'￥2799 起'
							}
						]
					},
				],
				citys:[
					{
						cityName:'杭州',
						imgsrc:require('../../assets/img/citypic1.png')
					},
					{
						cityName:'厦门',
						imgsrc:require('../../assets/img/citypic2.png')
					},
					{
						cityName:'上海',
						imgsrc:require('../../assets/img/citypic3.png')
					},
					{
						cityName:'台北',
						imgsrc:require('../../assets/img/citypic4.jpg')
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
			}
		}
	}
</script>

<style>
body,html{
	width: 100%;
}
</style>
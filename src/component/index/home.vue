<template>
	<div class="home">
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
				<a class="newsitems flex-wrap" v-for="n in datas.recentnew" href="">
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
			<div class="" v-for="s in proList">
				<div class="season-title dis-flex">
					<div class="font-12rem">{{s.areaTrip}}</div>
					<div class="sline flex-item"></div>
					<a class="smore font-12rem" href="">更多</a>
				</div>
				<div class="dome-lists list">
					<div class="dome domemar f-left" v-for="(todo,i) in s.areaDetail" :key="todo.id" @click="enter(todo.id)">
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
<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script type="text/javascript">

	var imgUrl = 'http://www.baidu.com/images/share.jpg';  // 分享后展示的一张图片
	    var lineLink = 'http://www.baidu.com'; // 点击分享后跳转的页面地址

        var descContent = "这里相当于简介";  // 分享后的描述信息

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
				datas:'',
				showslide:false,
				proList:'',
			}
		},
		methods:{
			show(){
				this.showslide=true;
			},
			hide(){
				this.showslide=false;
			}
		},
		mounted(){
			this.$axios.get('src/assets/data/home.json').then((res)=>{
				this.datas=res.data;
				this.proList=res.data.season;
			})
		},
		methods:{
			enter(id){
				this.$router.push({path:"detail",query:{id: id}});
			}
		}
	}
</script>

<style>
body,html{
	width: 100%;
}
</style>
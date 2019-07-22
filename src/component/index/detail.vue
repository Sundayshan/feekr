<template>
	<div class="detail">
		<ul v-for="(pro,index) in proDetail" :key="pro.id">
			<li>
				<div class="detail-swiper">
					<mt-swipe :auto="0">
					  	<mt-swipe-item v-for="list in pro.swiper" :key="list.id">
					  		<img :src="list.url"/>
					  	</mt-swipe-item>
					</mt-swipe>
				</div>
				<div class="detail-head">
					<h5 class="product-detail-art">{{pro.proTitle}}</h5>
					<h3 class="product-detail-name">{{pro.proName}}</h3>
					<p class="product-detail-price" style="color: rgb(26, 188, 156);">
						<b>￥{{pro.proPrice}} </b><span> 起/{{pro.proDay}}晚</span>
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
						<li @click="kefu()">
							<i class="iconfont icon-kefunv"></i>
							<a href="javascript:;">客服</a>
						</li>
						<li @click="pickGoods(pro)">
							<div v-show="!isLight">
								<i class="iconfont icon-shoucang1"></i>
								<span>收藏</span>
							</div>
							<div v-show="isLight">
								<i class="iconfont icon-star__easyico" style="color: yellow;"></i>
								<span>收藏</span>
							</div>
						</li>
						<li @click="carting()">加入购物车</li>
						<li @click="booking()">立即预定</li>
					</ul>
				</div>
			</li>
			<li>
				<!--客服-->
				<mt-actionsheet :actions="actions" v-model="sheetVisible" cancelText="取消">
				</mt-actionsheet>
			</li>
			<li>
				<!--预定页面-->
				<transition name="show"> 
			        <section class="orderBooking show" v-if="bookingslide" @click="cancel()" @touchmove.prevent>
			        	<div class="combo" @click.stop>
			        		<div class="booking">
				        		<div class="booking-message">
				        			<div class="booking-name">
				        				<p>{{pro.proTitle}}</p>
				        				<i class="iconfont icon-guanbi" @click="cancel()"></i>
				        			</div>
				        			<div class="booking-room">
				        				<span class="room">{{pro.proRoom}}</span>
				        				<span class="price">￥{{pro.proPrice}}</span>
				        			</div>
				        		</div>
				        		<div class="bookingNum">
				        			<ul>
				        				<li>购买数量：</li>
				        				<li @click="reduce()">-</li>
				        				<li><input v-model="numValue" readonly/></li>
				        				<li @click="add()">+</li>
				        			</ul>
				        		</div>
				        		<div class="booking-date">{{pro.proDate}}</div>
				        	</div>
					        <footer>
					        	<div class="bookingBtn" v-if="cartBtn">
					        		<span class="totalfee">￥{{numValue*pro.proPrice}}</span>
				        			<div class="next" to="confirm" @click="nextMessage(pro.id,numValue)">下一步，填写信息</div>
					        	</div>
					        	<div class="cartBtn" v-else="cartBtn">
					        		<div @click="addCart(pro,numValue)">确定</div>
					        	</div>
				        	</footer>
			        	</div>
			        </section>
		        </transition>
			</li>
		</ul>
		
	</div>
</template>
<script>
	import {mapGetters,mapMutations} from 'vuex'
	import {Toast,MessageBox} from 'mint-ui'
	export default{
		data(){
			return{
				currentDetail:'',
				proDetail:[],
				selected:0,
				bookingslide:false,
				cartBtn:true,
				numValue:1,
				isLight:false,
				actions:[
					{
						name:'客服电话：123-123-0000'
					}
				],
				sheetVisible:false
			}
		},
		computed:{
			...mapGetters(["this.$store.state.goods"]),
			...mapGetters({
				isCollection:"getterIsCollection"
			})
		},
		created(){
        	var _this = this;           
            var id = this.$route.query.id;
            this.$axios.get('src/assets/data/proDetail.json').then((res)=>{
            	for(var i = 0;i<res.data.gnProList.length;i++){
            		if(res.data.gnProList[i].id == id){
            			_this.proDetail.push(res.data.gnProList[i]); 
            		}
            	}
            })
        },
		methods:{
			change(str){
				this.selected=str
			},
			booking(){
				this.cartBtn = true;
				this.bookingslide= true;
			},
			carting(){
				this.booking();
				this.cartBtn = false;
			},
			cancel(){
				this.bookingslide= false;
			},
			reduce(){
				if(this.numValue==1){
					this.numValue=1;
					
				}else{
					this.numValue--;
				}
			},
			add(){
				this.numValue++;
			},
			kefu(){
				this.sheetVisible=true;
			},
			nextMessage(id,value){
				this.$router.push({
					path:"confirm",
					query:{
						id:id,
						value:value
					}
				})
			},
			addCart(cart,cartNum){
				console.log(this.$route.query.value);
				var cartExist = this.$store.state.carts.find(cartData => {
					return cartData.id == cart.id;
				})
				console.log(cartExist)
				if(!cartExist){
					var cartData = {
						id: cart.id,
						goodsName:cart.proName,
						goodsPrice:cart.proPrice,
						goodsImg:cart.proImg,
						goodsNum:cartNum,
						pick:""
					};
					this.$store.dispatch('setCarts',cartData);
					this.bookingslide = false;
					Toast({
						message:"加购成功",
						duration:950
					})
				}else{
					MessageBox("提示", "商品已存在购物车");
				}
			},
			pickGoods(pro){
				this.isLight=!this.isLight;
				var idExist = this.$store.state.goods.find(data =>{
					return data.id == pro.id;
				});
				if(!idExist){ //没有收藏过
					var data = {
						id: pro.id,
						name:pro.proName,
						title:pro.proTitle,
						img:pro.proImg,
						price:pro.proPrice,
						day:pro.proDay
					}
					Toast({
						message:"收藏成功",
						duration:950
					})
					this.$store.dispatch("setGoods",data)
				}else{  //收藏过
					Toast({
						message:"您已经收藏过了",
						duration: 950
					})
				}
			}
		}
	}
</script>

<style>
	@import '../../assets/css/detail.css';
</style>
<style lang="scss" scoped>
	@import '../../assets/css/booking.scss';
</style>
<template>
	<div class="favor">
		<div class="header-tab">
			<my-Header title="我的收藏"></my-Header>
			<ul class="clear">
				<li v-for="(v,i) in list" @click="favorTab(i)">
					<span v-bind:class="{favorCurrent:favorIndex==i}">{{v.title}}</span>
				</li>
			</ul>
		</div>
		<div class="favortab">
			<div class="favor-content">
				<div class="goods_box" v-show="favorIndex===0" v-for="(list,index) in goods" @click="goDetail(list.id)">
					<div class="shop">
						<p class="left f-left">旅行，让自己变美好</p>
						<p class="right iconfont icon-shanchu f-right" @click.stop="cancel(index)"></p>
					</div>
					<div class="favor-goods">
						<img :src="list.img"/>
						<div class="text-right">
							<p class="title">{{list.name}}</p>
							<p class="desc">{{list.title}}</p>
							<p class="buy">
								<span class="price">
									<span>{{list.price}}</span><span>起/{{list.day}}晚</span>
								</span>
								<span class="booking">立即预定</span>
							</p>
						</div>
					</div>
				</div>
				<div class="article_box" v-show="favorIndex===1" v-for="(list,index) in article" @click="goNews(list.id)">
					<div class="favor-article">
						<img :src="'../'+list.img"/>
						<div class="text-right">
							<p class="title">{{list.title}}</p>
							<p class="time">
								<span>收藏时间：{{list.nowTime}}</span>
								<i class="iconfont icon-shanchu" @click.stop="del(index)"></i>
							</p>
						</div>
					</div>
				</div>	
			</div>
		</div>
	</div>
</template>

<script>
	import myHeader from '../common/myHeader.vue'
	import {mapState,mapMutations,mapGetters} from 'vuex'
	export default{
		name:'favor',
		data(){
			return{
				favorIndex:0,
				list:[{title:'商品'},{title:'资讯'}]
			}
		},
		computed:{
			article(){
				return this.$store.state.article;
			},
			goods(){
				return this.$store.state.goods;
			},
//			...mapGetters(
//				["this.$store.state.article"],
//				["this.$store.state.goods"]
//			)
		},
		components:{
			myHeader
		},
		methods:{
			...mapMutations(["del","cancel"]),
			favorTab(str){
				this.favorIndex=str;
			},
			goDetail(id){
				this.$router.push({
					path:'detail',
					query:{
						id:id
					}
				})
			},
			goNews(id){
				this.$router.push({
					path:'news',
					query:{
						id:id
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.favor{
	.header-tab{
		z-index: 1000;
		width:100%;
		position:fixed;
		ul:after{
			content: '';
			clear: both;
			display: block;
		}
		ul{
			background: #fff;
			margin-bottom: 1px;
			li{
				width: 50%;
				float: left;
				text-align: center;
				height: 3.5rem;
				line-height: 3.5rem;
				span{
					display: block;
					width: 25%;
					height: 100%;
					font-size: 1.33rem;
					margin: auto;
				}
			}
		}
	}
	.favorCurrent{
		color: #1abc9c;
		border-bottom: 2px solid #1abc9c;
	}
	.favortab{
		padding-top: 7.5rem;
		.favor-content{
			.goods_box{
				border-radius: 1.5rem;
			    padding: 0.8rem 0.8rem 0;
				.shop{
			        height: 3rem;
			        background: #ffffff;
			        border-top-left-radius: 1rem;
			        border-top-right-radius: 1rem;
			        padding: 0 1rem;
		            border-bottom: 1px solid #eee;
				    .left {
			            float: left;
			            line-height: 3rem;
			            font-size: 1.2rem;
			            color: #17af58;
			        }
			        .right {
			            float: right;
			            margin-right: 0.35rem;
			            line-height: 3rem;
			            font-size: 1.2rem;
			        }
				}
			}
			.favor-article,.favor-goods{
				padding: 1rem;
				background: #fff;
				border-bottom: 1px solid #eee;
				&:after{
					content: '';
					clear: both;
					display: block;
				}
				img{
					width: 25%;
					float: left;
				}
				.text-right{
					width: 73%;
					float: right;
					margin-left: 2%;
					p{
						width: 100%;
					}
					.title{
						font-size: 1.2rem;
						height:5.2rem
					}
					.desc{
						color: #aaaaaa;
						font-size: 1rem;
					}
					.price{
						color: #1ABC9C;
						font-size: 1.2rem;
					}
					.buy{
						height: 2.4rem;
						position: relative;
						margin-top: 0.2rem;
						.booking{
							text-align: center;
							display: block;
							font-size: 1.1rem;
							width: 6.5rem;
							height: 2.2rem;
							color: #FFF;
							line-height: 2.2rem;
							background-color: #1ABC9C;
							border-radius: 2.5rem;
							position: absolute;
							right: 0;
							bottom: 0;
						}
					}
					.time{
						&:after{
							content: '';
							clear: both;
							display: block;
						}
						font-size: 1.2rem;
						margin: 1.5rem 0 0;
						span{
							float: left;
						}
						i{
							float: right;
						}
					}
				}
			}
			.favor-goods{
				.title{
					height: 3.67rem !important;
					/*font-size: 1.2rem !important;*/
				}
			}
		}
	}
}

</style>
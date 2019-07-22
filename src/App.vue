<template>
  <div id="app" v-cloak>
  	<nav class="footer" v-show="$route.meta.isNavShow">
  		<ul>
	    	<li v-for="(v,i) in nav" class="v-link-active">
	    		<router-link :to="v.path" >
	    			<span class="iconfont">{{v.icon}}</span>
	    			<span>{{v.name}}</span>
	    		</router-link>
	    	</li>
	   </ul>
  	</nav>
    <router-view></router-view>
  </div>
</template>
  
<script>
export default {
  name: 'app',
  data () {
    return {
      nav:[
      	{
      		name:'首页',
      		icon:'\ue679',
      		path:'/home'
      	},
      	{
      		icon:'\ue89a',
      		name:'度假',
      		path:'/travel'
      	},
      	{
      		name:'攻略',
      		icon:'\ue60f',
      		path:'/guide'
      	},
      	{
      		name:'我的',
      		icon:'\ue605',
      		path:'/user'
      	}
      ]
    }
	},
}
</script>

<style>
@import './assets/css/common.css';
[v-cloak]{
	display: none;
}
#app {
  font-family: PingFangSC-Light, sans-serif;
  width: 100%;
	height: 100%;
	position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
}
body,html{
	width: 100%;
	height: 100%;
}
body{
    background-color: #f6f6f6;
    color: #2d2d2d;
    -webkit-font-smoothing: antialiased;
    max-width: 640px;
    margin: 0 auto;
}
.mint-msgbox-confirm{
	color: #1ABC9C;
}
.txt-center{
	text-align: center;
}
</style>

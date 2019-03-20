<template>
	<header class="user-head txt-center"><span>{{title}}</span></header>
</template>

<script>
	export default{
		props:{
	        title:{
	        	type:String,
	         	default:''
	      	}
	  	}
	}
</script>

<style>
.user-head{
	position: relative;
 	padding: 1rem;
	font-size: 1.45rem;
	background: #1abc9c;
	border-bottom: none;
	color: #fff;
}
</style>
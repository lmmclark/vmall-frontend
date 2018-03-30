<template>
	<div id="search_order">
		<Header :headTitle="headertitle"></Header>
		<div class="main_content">
			<h4>查询订单</h4>
			<form id="search_sub">
				<label>电子号码</label>
				<input type="text" placeholder="输入电子号码" />
				<label>验证码</label>
				<input type="text" placeholder="输入右边的验证码" />
				<button>查询订单</button>
				<button>手机号查询</button>
			</form>
		</div>
	</div>
</template>

<script>
	import { } from 'vux'
	import Header from '../../components/Header.vue'
	export default {
		data() {
			return {
				headertitle: '我的订单（未登录）',
				show: false,
			}
		},
		components: {
			Header
		},
		mounted() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	#search_order{
		.main_content{
			width: 100%;
			position: absolute;
			margin-top: 60px;
			overflow: hidden;
			margin-bottom: 67px;
				h4{
				width: 100%;
				height: 40px;
				line-height: 40px;
				text-align: center;
				margin: 5px auto;
				border-bottom: 1px solid #ccc;
			}
			#search_sub{
				label{
					display: block;
					margin: 10px;
				}
				input{
					display: block;
				    width: 80%;
				    margin: 0px 10px;
				    height: 30px;
				    border-radius: 6px;
				    border: 1px solid #ccc;
				    padding-left: 10px;
				    outline: none;
				}
				button{
					display: block;
				    height: 33px;
				    width: 83%;
				    margin: 10px;
				    border-radius: 5px;
				    border: none;
				}
			}
		}
	}
</style>
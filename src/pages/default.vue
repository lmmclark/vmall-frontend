<template>
	<div id="product_list">
		<Header :headTitle="headertitle"></Header>
		<div class="main_content">
			
		</div>
	</div>
</template>

<script>
	import { } from 'vux'
	import Header from '../../components/Header.vue'
	export default {
		data() {
			return {
				
			}
		},
		components: {
			
		},
		mounted() {
			
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	#product_list{
		.main_content{
			width: 100%;
			position: absolute;
			margin-top: 60px;
			overflow: hidden;
			margin-bottom: 67px;
				.head {
				width: 100%;
				height: 40px;
				line-height: 40px;
				padding: 10px 0;
			}
		}
	}
</style>
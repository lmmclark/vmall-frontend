<template>
	<div id="member">
		<Header :headTitle="headertitle"></Header>
		<div class="" style="padding-top: 60px;">
			<div class="chartImg"><img src="../../assets/chat.png"></div>
			<button>
				<img src="../../assets/chat.png" style="display: inline-block; width: 25px;height: 25px;vertical-align: middle;">
				<span>微信自动登录</span>
			</button>
			<div style="margin: 0 auto;width: 28%;">
				<p>老账号登录</p>
				<span class="phone">
					<img src="../../assets/手机.png" style="margin: 8px;" />
				</span>
				<p>手机登录</p>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '../../components/Header.vue'
	
	export default{
		data() {
			return {
				headertitle: '会员登录',
				show: false,
			}	
		},
		components: {
			Header
		}
	}
	
</script>

<style lang="less">
	#member{
		.chartImg{width: 100px;height: 100px;background: limegreen;margin: 50px auto;border-radius: 20px;padding: 10px;}
		button{display: block;width: 90%;height: 40px; background: red; border: none;border-radius: 5px; color: #fff;font-size: 16px; margin: 20px auto;}
		.phone{display: block;width: 50px;height: 50px; background: #ccc; border-radius: 30px;text-align: center;}
	}
	
</style>
<template>
	<div id="index" style="height: 100%; width: 100%;">
		<tabbar>
			<tabbar-item selected link="../home">
				<img slot="icon" src="../../src/assets/首页.png">
				<span slot="label">首页</span>
			</tabbar-item>
			<tabbar-item show-dot link="../order_nologin">
				<img slot="icon" src="../../src/assets/订单.png">
				<span slot="label">订单</span>
			</tabbar-item>
			<tabbar-item  @on-item-click="showlDialog">
					<img slot="icon" src="../../src/assets/客服.png">
					<span slot="label">客服</span>
			</tabbar-item>
			<tabbar-item badge="2" link="../member">
				<img slot="icon" src="../../src/assets/会员.png">
				<span slot="label">会员</span>
			</tabbar-item>
		</tabbar>
		<router-view></router-view>
		
			<Customer :invitor="isShow" @changingType="showlDialog">
				fsdfsf
			</Customer>
	</div>
</template>

<script>
	
	import { Tabbar, TabbarItem, Group, Cell } from 'vux'
	import Customer from '../components/Customer.vue' //引入子组件 
	export default {
		components: {
			Tabbar,
			TabbarItem,
			Group,
			Cell,
			Customer
		},
		data() {
			return {
				isShow: false,
			}
		},
		methods: {
			showlDialog(data){
				console.log(111111)
		          console.log(data)
		        if(data == 'false'){
		          this.isShow = false;
		        }else{
		          this.isShow = true;
		        }
		         console.log(this.isShow)
		      },
		},

	}
</script>
<style  lang="less">
@import url('../style/index.less'); 
	.weui-tabbar__item {
		padding: 10px 0 0 !important;
	}
	
	.weui-tabbar__label {
		line-height: 1 !important;
	}
	/*底部导航*/
	
	.weui-tabbar {
		position: fixed !important;
		bottom: 0px;
	}
</style>


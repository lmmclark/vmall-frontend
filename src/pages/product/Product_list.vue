<template>
	<div id="product_list">
		<Header :headTitle="headertitle"></Header>
		<div class="main_content">
			<!--头部搜索栏-->
			<div class="head">
				<input class="" @click="getArea" value="地区" readonly="readonly"></input>
				<input type="text" placeholder="输入景区/产品名称关键字" />
				<a class="searchBtn">搜索</a>
			</div>
			<!--侧滑地区栏-->
			<div class="">
				<popup v-model="show" position="right" style="margin-top: 60px;">
					<div style="width:250px;background-color: #eee;">
					</div>
				</popup>
			</div>
			<!--列表-->
			<div class="listContent">
				<ul id="lists">
					<li @click="toProductDetail">
						<img src="../../assets/p01.jpg"/>
						<div class="textContent">
							<div class="price_dec">
								<span id="">
									【产品介绍】该产品是什么什么什么什么
								</span>
							</div>
							<div>
								<div class="price_time">
									<span>提前多少天预定</span>
								</div>
								<div class="price">
									<span>￥521</span>
									<span>￥520</span>
								</div>
							</div>
						</div>
					</li>
					<li>
						<img src="../../assets/p01.jpg"/>
						<div class="textContent">
							<div class="price_dec">
								<span id="">
									【产品介绍】该产品是什么什么什么什么
								</span>
							</div>
							<div>
								<div class="price_time">
									<span>提前多少天预定</span>
								</div>
								<div class="price">
									<span>￥521</span>
									<span>￥520</span>
								</div>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import { Popup} from 'vux'
	import Header from '../../components/Header.vue'
	
	export default {
		data() {
			return {
				headertitle: '产品列表',
				show: false,
				
			}
		},
		components: {
			Header,
			Popup
		},
		mounted() {
			
		},
		methods: {
			/*获取地区列表*/
			getArea() {
				this.show = !this.show
			},
			toProductDetail(){
				this.$router.push({
					path:'/productdetail'
				})
			}
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
			.head{
				width: 100%;
				height: 40px;
				line-height: 40px;
				padding: 10px 0;
			}
			.head input:nth-child(1) {
				height: 86%;
				width: 15%;
				float: left;
				border: 1px solid #eee;
				border-radius: 5px;
				margin: 0px 10px;
				background: url(../../assets/icon_down.png) no-repeat;
				background-position-x: 95%;
				background-position-y: 50%;
				padding: 0 5px;
			}
			.head input:nth-child(2) {
				display: inline-block;
				width: 60%;
				height: 86%;
				float: left;
				border: 1px solid #EEE;
				border-radius: 10px;
				padding-left: 5px;
				outline: none;
			}
			.head .searchBtn {
				width: 11%;
				display: inline-block;
				float: right;
				font-size: 14px;
			}
			/*产品列表*/
			.listContent{
				width: 100%;
				#lists{
					width: 90%;
					padding: 0% 5%;
					li{
						list-style: none;
						width: 100%;
						height: 250px;
						background: #eee;
						margin-bottom: 10px;
						img{
							width: 100%;
							height: 75%;
						}
						.textContent{
							width: 100%;
							height: 25%;
							.price_time{
								display: inline-block;
								width: 65%;
								span{
									border: 1px solid red;
									font-size: 14px;
    								padding: 2px;
    								color: red;
								}
							}
							.price{
								display: inline-block;
								span:nth-child(1){
									color: #8C8C8C;
									font-size: 13px;
									text-decoration: line-through;
								}
								span:nth-child(2){
									color: red;
								}
							}
						}
					}
				}
			}
		}
	}
</style>
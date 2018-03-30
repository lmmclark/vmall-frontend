<template>
	<div id="home">
		<!--<Header :headTitle="headertitle"></Header>-->
		<VHeader :headerTitle = "headerTitle" :headerClose = "headerClose" :menus="menus"/>
		<div class="main_content">
				<!--头部搜索栏-->
			<div class="head">
				<input class="" @click="getArea" readonly="readonly" v-model="region"></input>
				<input type="text" placeholder="输入景区/产品名称关键字" />
				<a class="searchBtn">搜索</a>
			</div>
			<!--侧滑地区栏-->
			<div class="">
				<popup v-model="show" position="right" style="margin-top: 50px;">
					<div style="width:250px;background-color: #eee;">
						<template v-for='(item,index) in provinceList'>
							<cell :title = item.name
						      is-link
						      :border-intent="false"
						      @click.native="getCity(item.id)">
						   </cell>
					     </template> 
					</div>
				</popup>
				<popup v-model="shows" position="right" style="margin-top: 50px;">
					<div style="width:250px;background-color: #eee;">
						<template v-for='(item,index) in provinceList'>
							<cell :title = item.name
						      is-link
						      :border-intent="false"
						      @click.native="selectCity(item.name)">
						   </cell>
					     </template> 
					</div>
				</popup>
			</div>
			<!--轮播图-->
			<div class="banner">
				<!--<swiper :list="imgArr" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>-->
				<swiper :list="demo01_list" auto dots-class="custom-bottom" dots-position="center"></swiper>
			</div>
			<!--8宫格显示-->
			<div>
				<grid>
					<template v-for="item in imgList">
						<grid-item label="">
							<div class="info_item" style="text-align: center;">
								<img :src=item.iurl style="width: 70px;height: 70px;display: block;" />
								<span style="display: block;margin: 0 auto;">{{item.title}}</span>
							</div>
						</grid-item>
					</template>
				</grid>
				<grid>
					<template v-for="item in imgList">
						<grid-item label="">
							<div class="info_item" style="text-align: center;">
								<img :src=item.iurl style="width: 70px;height: 70px;display: block;" />
								<span style="display: block;margin: 0 auto;">{{item.title}}</span>
							</div>
						</grid-item>
					</template>
				</grid>
			</div>
			<!--限时抢购区-->
			<div>
				<div class="xsqg">
					<span>限时抢购</span>
					<span @click="getMore">查看更多</span>
				</div>
				<grid>
					<template v-for="item in imgList1">
						<grid-item label="">
							<div class="info_item" @click="toProductDetail" style="text-align: center;">
								<img :src=item.iurl style="width: 120px;height: 70px;display: block;margin: 0 auto;" />
								<span style="display: block;margin: 0 auto;">{{item.title}}</span>
							</div>
						</grid-item>
					</template>
				</grid>
			</div>
			<!--精选产品区-->
			<div>
				<div class="cpjx">
					<span>精选产品</span>
					<span>查看更多</span>
				</div>
				<grid>
					<template v-for="item in imgList1">
						<grid-item label="">
							<div class="info_item" style="text-align: center;">
								<img :src=item.iurl style="width: 120px;height: 70px;display: block;margin: 0 auto;" />
								<span style="display: block;margin: 0 auto;">{{item.title}}</span>
							</div>
						</grid-item>
					</template>
				</grid>
			</div>
			<!--推荐产品/我的附近-->
			<!--<div>
				<tab :line-width=2 active-color='#fc378c' v-model="index">
					<tab-item class="vux-center" :selected="demo2 === item" v-for="(item, index) in list2" @click="demo2 = item" :key="index">{{item}}</tab-item>
				</tab>
				<swiper v-model="index" height="100px" :show-dots="false">
					<swiper-item v-for="(item, index) in list2" :key="index">
						<div class="tab-swiper vux-center">{{item}} Container</div>
					</swiper-item>
				</swiper>
			</div>
			<div class="tjcp">
				<img src="../../assets/p01.jpg" style="display:inline-block;width: 50%;height: 100px;" />
				<div>产品名称 距离我xxx米</div>
			</div>
			<div class="tjcp">
				<img src="../../assets/p01.jpg" style="display:inline-block;width: 50%;height: 100px;" />
				<div>产品名称 距离我xxx米</div>
			</div>-->
			<!--底部信息-->
			<div style="text-align: center;">
				<div>公司名称</div>
				<div>技术支持</div>
				<div><img src="../../assets/no_data.jpg" style="display: inline-block;width: 100%;height: 220px;"></div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import { Swiper, SwiperItem, Popup, Grid, GridItem, Sticky, Tab, TabItem,Cell, CellBox } from 'vux'
	import Header from '../../components/Header.vue'
	import VHeader from '../../components/v-header'
	import defaultImg1 from '../../assets/book01.png';
	import defaultImg2 from '../../assets/book02.png';
	import defaultImg3 from '../../assets/book03.png';
	import defaultImg4 from '../../assets/book04.png';
	import defaultImg5 from '../../assets/banner01.jpg';
	import defaultImg6 from '../../assets/banner02.jpg';
	const imgList = [];
	const imgList1 = [];
	const list = () => ['推荐产品', '我的附近'];

	const demoList = imgList.map((one, index) => ({
		url: 'javascript:',
		img: one
	}))
	const demoList1 = imgList1.map((one, index) => ({
		url: 'javascript:',
		img: one
	}))
	const baseList = [{
		url: 'javascript:',
		img: 'https://static.vux.li/demo/1.jpg',
		title: '送你一朵fua'
	}, {
		url: 'javascript:',
		img: 'https://static.vux.li/demo/2.jpg',
		title: '送你一辆车'
	}, {
		url: 'javascript:',
		img: 'https://static.vux.li/demo/3.jpg',
		title: '送你一次旅行',
		fallbackImg: 'https://static.vux.li/demo/3.jpg'
	}]
	export default {
		data() {
			return {
				results: [],
				value: 'test',
				imgArr: demoList,
				demo01_list: baseList,
				headerTitle: '商城首页',
				headerClose: '关闭',
				 menus: {
			        menu1: "测试1",
			        menu2: "测试2",
					menu3: "测试3",			        
					menu4: "测试4",
					menu5: "测试5",
			      },
				show: false,
				shows:false,
				imgList: [{
						title: '门票',
						iurl: defaultImg1,
					},
					{
						title: '酒店',
						iurl: defaultImg2,
					},
					{
						title: '机票',
						iurl: defaultImg3,
					},
					{
						title: '线路',
						iurl: defaultImg4,
					},
				],
				imgList1: [{
						title: '限时抢购产品名称',
						iurl: defaultImg5,
					},
					{
						title: '限时抢购产品名称',
						iurl: defaultImg6,
					}
				],
				list2: list(),
				demo2: '我的附近',
				index: 0,
				showContent001: false,
				provinceList:[],
				sort:[],
				region:'地区'
			}
		},
		components: {
			Swiper,
			SwiperItem,
			Header,
			Popup,
			Grid,
			GridItem,
			Sticky,
			Tab,
			TabItem,
			Cell, 
			CellBox,
			VHeader
		},
		mounted() {
			this.init()
		},
		methods: {
			/*获取省名列表*/
			getArea() {
				this.show = !this.show;
				let that = this
				that.$http({
					method: 'get',
					url: 'vamll/distinct/parent?parentId=0',
				}).then(function(res) {
					console.log(res)
					if(res.status == 200) {
						if(res.data.errorCode == 'E_000') {
							that.provinceList = res.data.body
						}
					}
					
				}).catch(function(err){
					console.log(err)
				})
			},
			/*获取城市列表*/
			getCity(id) {
				let that = this
				that.$http({
					method: 'get',
					url: 'vamll/distinct/parent?parentId='+id,
				}).then(function(res) {
					if(res.status == 200) {
						if(res.data.errorCode == 'E_000') {
							console.log(111)
							that.provinceList = res.data.body
							that.show = false
							setTimeout(function(){
								that.shows = true
							},180)
						}
					}
					
				}).catch(function(err){
					console.log(err)
				})
			},
			selectCity(name){
				this.shows = false
				this.region = name
			},
			/*首页轮播图*/
			init() {
				let that = this
				var arrImg = []
				that.$http({
					method: 'post',
					url: 'advertisingPictures',
					data: {
						organizationId: 102,
						pType: "1",
						state: "1"
					}
				}).then(function(res) {
					if(res.data.errorCode == 'E_000') {
						let info = res.data.body
						for(let i = 0; i < info.length; i++) {
							let obj = {}
							obj['img'] = info[i].picture
							obj['title'] = info[i].title
							obj['url'] = 'javascript:'
							arrImg.push(obj)
						}
						that.demo01_list = arrImg
					}
				})
			},
			switchTabItem(index) {
				console.log('on-before-index-change', index)
				this.$vux.loading.show({
					text: 'loading'
				})
				setTimeout(() => {
					this.$vux.loading.hide()
					this.index01 = index
				}, 1000)
			},
			onItemClick(index) {
				console.log('on item click:', index)
			},
			addTab() {
				if(this.list2.length < 2) {
					this.list2 = list().slice(0, this.list2.length + 1)
				}
			},
			removeTab() {
				if(this.list2.length > 1) {
					this.list2 = list().slice(0, this.list2.length - 1)
				}
			},
			next() {
				if(this.index === this.list2.length - 1) {
					this.index = 0
				} else {
					++this.index
				}
			},
			prev() {
				if(this.index === 0) {
					this.index = this.list2.length - 1
				} else {
					--this.index
				}
			},
			getMore(){
				this.$router.push({
					path:'/productlist'
				})
			},
			toProductDetail(){
				this.$router.push({
					path:'/productdetail'
				})
			}
		},
		
	}
</script>

<style lang="less">
	#home{
		.main_content{
			width: 100%;
			position: absolute;
			margin-top: 50px;
			overflow: hidden;
			margin-bottom: 67px;
			.head {
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
		
		.vux-search-box {
			width: 80% !important;
		}
		
		/*p {
			margin: 5px 10px;
			color: #fff;
		}*/
		
		.vux-search-fixed {
			position: static !important;
		}
		
		.weui-search-bar.weui-search-bar_focusing .weui-search-bar__cancel-btn {
			display: none !important;
		}
		/*轮播图*/
		
		.banner {
			min-height: 50px;
		}
		
		.banner img {
			width: 100%;
			height: 100%;
			display: inline-block;
		}
		/*8宫格展示区*/
		
		.weui-grid {
			padding: 6px 10px !important;
		}
		
		.info_item span {
			color: #000;
		}
		
		.weui-grid:before {
			border-right: none !important;
		}
		
		.weui-grids:before {
			border-top: none !important;
		}
		
		.weui-grid:after {
			border-bottom: none !important;
		}
		
		a:-webkit-any-link {
			text-decoration: none;
		}
		/*限时抢购*/
		
		.cpjx,
		.xsqg {
			padding: 0px 10px;
			height: 30px;
			line-height: 30px;
			width: 100%;
			background: #eee;
		}
		
		.cpjx>span:nth-child(2),
		.xsqg>span:nth-child(2) {
			float: right;
			margin-right: 20px;
			text-decoration: underline;
		}
		/*推荐产品/我的附近*/
		
		.box {
			padding: 15px;
		}
		
		.active-6-1 {
			color: rgb(252, 55, 140) !important;
			border-color: rgb(252, 55, 140) !important;
		}
		
		.active-6-2 {
			color: #04be02 !important;
			border-color: #04be02 !important;
		}
		
		.active-6-3 {
			color: rgb(55, 174, 252) !important;
			border-color: rgb(55, 174, 252) !important;
		}
		
		.tab-swiper {
			background-color: #fff;
			height: 100px;
		}
		
		.tjcp {
			padding: 0 10px;
		}
		
		.tjcp>div {
			float: right;
			height: 100px;
			line-height: 100px;
		}
		.sub-item {
			  color: #888;
			}
		}
	}
	
</style>
import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Home from '@/pages/index/Home'
import Order_nologin from '@/pages/order/Order_nologin'
import Customer from '@/components/Customer'
import Member from '@/pages/member/Member'
import Product_detail from '@/pages/product/Product_detail'
import Product_list from '@/pages/product/Product_list'

import Header from '@/components/Header'
Vue.use(Router)
//我添加了注释
export default new Router({
	routes: [{
			path: '/',
			name: 'Index',
			component: Index,
			children: [ //子路由
				{
					path: '/home',
					name: 'Home',
					component: Home
				},
				{
					path: '/order_nologin',
					name: 'Order_nologin',
					component: Order_nologin
				},
				{
					path: '/customer',
					name: 'Customer',
					component: Customer
				},
				{
					path: '/member',
					name: 'Member',
					component: Member
				},
				{
					path: '/productlist',
					name: 'Productlist',
					component: Product_list
				},
			]
		},
		{
			path: '/productdetail',
			name: 'Productdetail',
			component: Product_detail
		}
		
	]
})
<template>
	 <div v-transfer-dom>
		<x-dialog class="invitorMask" hide-on-blur v-model="showing" @on-hide="hide">
			<div class="dialog_info">
				<span><p>呼叫</p></span>
				<span><p>复制</p></span>
				<span><p>添加到手机通讯录</p></span>
			</div>
		</x-dialog>
	</div>
</template>

<script>
	import { XDialog,TransferDomDirective as TransferDom } from 'vux'
	export default {
		 directives: {
		    TransferDom
		  },
		components: {
			XDialog
		},
		props: ['invitor'],
		data() {
			return {
				showing: this.invitor, //因为props是单向传值，所以需要新声明一个局部变量，并将invitor初值赋值给它
			}
		},
		watch: {
			invitor(cur) { //监听invitor值的变化
				console.log('currentVal:' + cur)
				if(cur == true) { //当父组件传递值为true是，则显示
					this.showing = true;
				}
			},
		},
		methods: {
			hide() { //弹层消失事件
				this.$emit('changingType', 'false'); //调用父组件的自定义事件，并传值
			}
		}
	}
</script>
<style >
	.dialog_info span{
		display: block;
	}
	.dialog_info span:not(:last-child){
		border-bottom: 1px dashed #ccc;
	}
</style>
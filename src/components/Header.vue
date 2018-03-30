<template>
	<div class="head_banner">
		<img style="display: inline-block !important;width: 30px;height: 30px;margin-left: 15px;vertical-align: middle !important;" src="../assets/close.png" />
		<p style="display: inline-block !important;">{{headTitle}}</p>
	</div>
</template>

<script>
	export default {
		props: {
			headTitle: String
		},
		data() {
			return {

			}
		},
		components: {

		},
		methods: {

		},

	}
</script>

<style>
	.head_banner {
		width: 100%;
		height: 60px;
		background-color: #5E5E5E;
		line-height: 25px !important;
		color: #fff;
		position: fixed;
		z-index: 100000;
		/*margin-bottom: 60px;*/
	}
</style>
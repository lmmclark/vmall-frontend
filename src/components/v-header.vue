<template>
	 <div class="v-header" style="position: ; top:0px;z-index: 10000;">
        <XHeader :right-options="{showMore: true}" @on-click-more="showMenus = true"><a slot="left">{{headerClose}}</a>{{headerTitle}}</XHeader>
        <div v-transfer-dom>
            <Actionsheet :menus="menus" v-model="showMenus" show-cancel></Actionsheet>
        </div>
    </div>
</template>

<script>
import { XHeader, Actionsheet, TransferDom } from "vux";
export default {
  name: "VHeader",
  directives: {
    TransferDom
  },
  components: {
    XHeader,
    Actionsheet
  },
  props:{
		headerTitle: String,
		headerClose: String,
		menus:Object
	},
  data() {
    return {
     
      showMenus: false
    };
  }
};
</script>

<style lang="less">
@import url('../style/index.less');
.v-header {
  .vux-header {
    background-color: @color-bg-black !important;
    color: @color-text-w;
    position: fixed;
    padding: 5px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #35495e;
    width: 100%;
    z-index: 1000;
    .vux-header-left{
    	top:16px;
    	font-size: 14px;
    	 .left-arrow:before{
    	 	width: 14px;
    	 	height: 14px;
    	 }
    }
  }
}
</style>
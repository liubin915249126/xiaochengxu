<template>
  <div class="wrap">
    <div class="imgwrap">
      <img :src="'/static/avatar/'+cashDetail.avatar" v-if="cashDetail.avatar"/>
    </div>
    <div class="apply">
      <div class="title">
        {{cashDetail.name}}-贷款攻略   
      </div>
      <div>
        贷款额度:
        <span>&nbsp;</span>
        {{cashDetail.minQuota+'--'+cashDetail.maxQuota}}
      </div>
      <div>
        借款利率:
        <span>&nbsp;</span>
        {{cashDetail.interest}}
      </div>
      <div>
        利率单位:
        <span>&nbsp;</span>
        {{interestDes[cashDetail.interestUnit]}}
      </div>
    </div>
    <div class="apply">
      <div class="title">
        {{cashDetail.name}}-申请条件
      </div>
      <div v-for="(item,index) in cashDetail.apply" :key="index">
        {{index+1+'.'+item}}
      </div>
    </div>
    <a @click="goToStore(cashDetail.launchUrl)" class="link">
      下载应用
    </a>
  </div>
</template>

<script>
import cashData, {interestDes} from '../data/cashdata'

export default {
  data () {
    return {
      cashDetail: {},
      interestDes: {}
    }
  },
  methods: {
    goToStore () {
      wx.navigateTo({url: '../store/main?url=' + this.cashDetail.launchUrl})
    }
  },
  created () {
    this.interestDes = interestDes
  },
  onShow () {
    const {$mp: {query: { id }}} = this
    this.cashDetail = cashData[id]
  }
}
</script>

<style>
  page{
    height:100%
  }
  .wrap{
   background:rgba(0,0,0,0.05);
   /* padding-top:10px; */
   font-size:15px;
   position: relative;
   height:100%;
   
  }
  .wrap .title{
    border-bottom:1px solid rgba(0,0,0,0.15);
    padding:5px 10px;
    margin: 0 -10px;
  }
  .wrap>div{
    background: #fff;
    margin-top: 10px;
    padding: 0 10px;
  }
  .imgwrap{
    text-align: center;
    padding:10px 0;
  }
  .imgwrap img{
    width:50px;
    height:50px;
  }
  .apply{
    padding-bottom: 10px;
  }
  .apply>div{
   margin-top:10px;
  }
  .link{
    position: absolute;
    bottom:15px;
    background:green;
    width:100%;
    padding:10px;
    text-align: center;
    color:#fff;
    border-radius: 3px;
  }
</style>

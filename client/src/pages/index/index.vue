<template>
  <div class="container">
    <len-carousel>
      <div v-for="(item,index) in 4" :key="index">
        <span>{{item}}</span>
      </div>
    </len-carousel>
    <div class="title" @click="goToRequest">
      热门推荐11
    </div>
    <div class="title" @click="goToTodos">
      todos
    </div>
    <div class="cashlistwrap">
      <div v-for="(cash, index) in cashData" :key="index" class="cashwrap" @click="bindViewTap(index)">
        <div class="left">
          <img :src="'/static/avatar/'+cash.avatar"/>
        </div>
        <div class="content">
          <div>{{cash.name}}</div>
          <div class="desc">{{cash.description}}</div>
          <div>
            <span>{{'额度:'+cash.minQuota+'--'+cash.maxQuota}}</span>
            <span>&nbsp;&nbsp;</span>
            <span>{{'利率:'+cash.interestDes}}</span>
          </div>
        </div>
        <div class="right">
          <img src="/static/icon/right.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import cashData from '../data/cashdata'
import lenCarousel from '../../components/len-carousel'

export default {
  data () {
    return {
      cashData: []
    }
  },
  methods: {
    bindViewTap (index) {
      const url = '../cashdetail/main?id=' + index
      wx.navigateTo({ url })
    },
    goToRequest () {
      const url = '../request/main'
      wx.navigateTo({ url })
    },
    goToTodos () {
      const url = '../todos/main'
      wx.navigateTo({ url })
    }
  },
  components: {
    'len-carousel': lenCarousel
  },
  created () {
    // this.cashData = cashData
  }
}
</script>

<style scoped lang="postcss">
  .container{
    padding:10px 10px 20px;
    align-items: flex-start;
  }
  .title{
      text-align: left;
  }
  .cashlistwrap{
    width:100%;
  }
  .cashwrap{
    display: flex;
    align-items:center;
    border-top:1px solid #eee;
    margin-top:10px;
    padding-top:10px;
    justify-content:space-around;

  }
  .cashwrap .left{
    padding:0 10px;
  }
  .cashwrap .left img{
    width:50px;
    height:50px;
  }
  .cashwrap .content{
     font-size:15px;
  }
  .cashwrap .content .desc{
    color:rgba(0,0,0,0.65);
    margin: 3px 0;
  }
  .cashwrap .right img{
    width:25px;
    height:25px;
  }
</style>

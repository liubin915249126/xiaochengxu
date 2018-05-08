<template>
  <div>
    <input type="button" value="request" @click="request"/> 
  </div>
</template>
<script>
// import request from '../../../utils/request'
import config from '../../../config/config'
const qcloud = require('../../vendor/wafer2-client-sdk/index')
import { showBusy, showSuccess, showModel } from '../../utils'

export default {
  data () {
    return {
      logged: false
    }
  },
  methods: {
    // async request () {
    //   try {
    //     const res = await request.get(config.login)
    //     console.log(res)
    //   } catch (err) {
    //     console.log(err)
    //   }
    // }
    request () {
      // if (this.data.logged) return
      showBusy('正在登录')
      var that = this

        // 调用登录接口
      qcloud.login({
        success (result) {
          if (result) {
            showSuccess('登录成功')
            that.setData({
              userInfo: result,
              logged: true
            })
          } else {
              // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
            qcloud.request({
              url: config.service.requestUrl,
              login: true,
              success (result) {
                showSuccess('登录成功')
                that.setData({
                  userInfo: result.data.data,
                  logged: true
                })
              },
              fail (error) {
                showModel('请求失败', error)
                console.log('request fail', error)
              }
            })
          }
        },
        fail (error) {
          showModel('登录失败', error)
          console.log('登录失败', error)
        }
      })
    }
  }
}
</script>
<style>

</style>

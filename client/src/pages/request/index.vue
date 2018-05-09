<template>
  <div>
    <input type="button" value="request" @click="request"/>
    <img :src='userInfo.avatarUrl' alt="avatar" v-if="userInfo.avatarUrl"/>
    <input type="button" value="cgi" @click="testCgi"/>
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
      logged: false,
      userInfo: {}
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
      if (this.logged) return
      console.log(this)
      showBusy('正在登录')
      var that = this
      qcloud.setLoginUrl(config.service.loginUrl)
        // 调用登录接口
      qcloud.login({
        success (result) {
          if (result) {
            showSuccess('登录成功')
            that.userInfo = result
            that.logged = true
          } else {
              // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
            qcloud.request({
              url: config.service.requestUrl,
              login: true,
              success (result) {
                showSuccess('登录成功')
                that.userInfo = result.data.data
                that.logged = true
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
    },
    testCgi () {
      showBusy('请求中...')
      // request.get(`${config.service.host}/weapp/demo`)
      // const that = this
      console.log(this)
      qcloud.request({
        url: `${config.service.host}/weapp/demo`,
        login: false,
        success (result) {
          showSuccess('请求成功完成')
          // that.setData({
          //   requestResult: JSON.stringify(result.data)
          // })
        },
        fail (error) {
          showModel('请求失败', error)
          console.log('request fail', error)
        }
      })
    }
  }
}
</script>
<style>

</style>

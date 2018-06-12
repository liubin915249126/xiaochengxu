#### mpvue 页面跳转传参
传参:
```js
   // 点击方法
   wx.navigateTo({url: '../store/main?url=' + url})
```
接受参数:
```js
  //特有的生命周期
   onShow () {
    const {$mp: {query: { url }}} = this
  }
```
#### 账号管理
18205556911@sina.cn //服务号
18205556911@163.com //个人小程序
liubin915249126@163.com //企业小程序

#### 分支管理
master:个人小程序mpvue
lb_dev:原始mpvue
server:node后台  
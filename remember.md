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


wx9ee7c8939a9eb945
wxa81a29b9a4bb18d2
wx99812e7b0c1f4338


gh_cffa5c9d1c08 liubin18205556911@gmail.com  wxa4009c486c34679e

gh_5945c84ff987

[mpvue 踩坑](http://www.bslxx.com/m/view.php?aid=1824)

#### branch 
master: 个人金融
cash：mpvue + server
server ：原始server
lb_dev: 原始mpvue

#### koa-bodyparser
```js
  var bodyParser = require('koa-bodyparser');
  app.use(bodyParser());
```
#### 
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
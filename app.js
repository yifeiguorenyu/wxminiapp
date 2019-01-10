//app.js
//程序注册
App({
  onLaunch: function () {
    console.log("小程序在后台 运行");
  },
  onShow(){
    console.log("小程序运行了");
  },
  onHide(){
    console.log("在后台运行");
  },
  globalData: {
    userInfo: null
  }
})
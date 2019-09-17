// pages/detail/detail.js
Page({
     data: {

     },
     onLoad: function (options) {
          console.log(options)
     },

     onUnload(){
          //1.获取首页的页面对象
          //获取所有栈页面
          const pages = getCurrentPages()
          const home = pages[pages.length - 2]

          home.setData({
               title:'呵呵'
          })
     },
     handleBackHome(){
          wx.navigateBack({
               delta:1
          })
     }
})
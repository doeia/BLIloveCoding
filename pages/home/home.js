// pages/home/home.js
Page({

     /**
      * 页面的初始数据
      */
     data: {
          message:'哈哈哈',
          list:[]
     },

     handleGetUserInfo(event){
          console.log(event)
     },

     /**
      * 生命周期函数--监听页面加载
      */
     onLoad: function (options) {
          const that = this;
          wx.request({
               url: 'http://123.207.32.32:8000/recommend',
               success:(res)=>{
                    console.log(res)
                    // const data = res.data.data.list;
                    // that.setData({
                    //      list:data
                    // })
               }
          })
     },

     /**
      * 生命周期函数--监听页面初次渲染完成
      */
     onReady: function () {

     },

     /**
      * 生命周期函数--监听页面显示
      */
     onShow: function () {

     },

     /**
      * 生命周期函数--监听页面隐藏
      */
     onHide: function () {

     },

     /**
      * 生命周期函数--监听页面卸载
      */
     onUnload: function () {

     },

     /**
      * 页面相关事件处理函数--监听用户下拉动作
      */
     onPullDownRefresh: function () {

     },

     /**
      * 页面上拉触底事件的处理函数
      */
     onReachBottom: function () {

     },

     /**
      * 用户点击右上角分享
      */
     onShareAppMessage: function () {

     },

     handleGetUserInfo(event) {
          console.log(event)
     }
})
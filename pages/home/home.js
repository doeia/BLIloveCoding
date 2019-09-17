// pages/home/home.js
Page({

     /**
      * 页面的初始数据
      */
     data: {

     },

     handleShowToast(){
          wx.showToast({
               title: '加载中',
               duration:3000,
               icon:'loading',
               //执行时，其它功能不可以用
               mask:true,
               success:function(){
                    console.log('展示弹窗成功')
               },
               fail:function(){
                    console.log('')
               }
          })
     },
     handleShowModal(){
          wx.showModal({
               title: '我是标题',
               content: '哈哈哈',
               cancelText:'退出',
               cancelColor:'red',
               success:function(res){
                    console.log(res)
                    if(res.cancel){
                         console.log('用户点击了取消按钮')
                    }
                    if(res.confirm){
                         console.log('用户点击了确定按钮')
                    }
               }
          })
     },
     handleShowLoading(){
          wx.showLoading({
               title: '加载...',
               mask:true
          })
          setTimeout(()=>{
               wx.hideLoading()
          },1000)
         
     },
     handleShowAction(){
          wx.showActionSheet({
               itemList: ['相册', '拍照'],
               itemColor:'red',
               success:function(res){
                    console.log(res)
                    
               }
          })
     },
     onShareAppMessage:function(options){
          return {
               title:'你好啊，',
               path:'/pages/about/about',
               imageUrl:      'http://s3.mogucdn.com/mlcdn/c45406/170915_0a93207ci28kelh617k4hh62l65lb_640x960.jpg'
          }
     }

})
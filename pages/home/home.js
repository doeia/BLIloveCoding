// pages/home/home.js
Page({

     /**
      * 页面的初始数据
      */
     data: {

     },
     handleBtnClick(){
          console.log('按钮发生')
     },
     onTouchStart(e){
          console.log('触摸开始手势', e)
     },
     onTouchMove(e) {
          console.log('触摸移动手势', e)
     },
     onTouchEnd(e) {
          console.log('触摸结束手势', e)
     },
     onTouchCancel(e){
          console.log('触摸取消', e)
     },
     onTap(e) {
          console.log('轻点', e)
     },
     onLongPress(e){
          console.log('长按手势', e)
     },

     handleEventClick(event){
          console.log('-------', event)
     }
})
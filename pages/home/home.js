// pages/home/home.js
import request from '../../service/network.js'

Page({
     data: {

     },
     onLoad: function (options) {
          //1. 原生的方式发送网络请求
          this.get_data_origin()

          //2. 使用封装的request发送网络请求
          //Promise最大的好处就是防止回调地狱
          request({
               url:'http://123.207.32.32:8000/api/v1/recommend'
          }).then(res =>{
               console.log(res)
          }).catch(err => {
               console.log(err)
          })
     },

     get_data_origin(){

     }
})
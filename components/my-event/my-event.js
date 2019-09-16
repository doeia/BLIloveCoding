// components/my-event/my-event.js
Component({
     /**
      * 组件的属性列表
      */
     properties: {

     },

     /**
      * 组件的初始数据
      */
     data: {

     },

     /**
      * 组件的方法列表
      */
     methods: {
          handleIncrement(){
               //发送事件(名，参数，)
               this.triggerEvent('increment',{name:'why',age:18},{})
          }
     }
})

//index.js
//获取应用实例
const app = getApp()
let arr1=[
 {
   id:Math.random(),
   name:"Motte"
 },
  {
    id: Math.random(),
    name: "Joe"
  },
  {
    id: Math.random(),
    name: "Hurley"
  }
]

let maN = Math.random();



Page({
  data: {
   name:"Matte",
   people:{
     n1:111,
     n2:222
   },
   names:"Matte,Joe,Hurley,Moli",
   score:89,
    color:"red",
    magicNumber:maN,
    num:Math.floor(maN*1000)
  },
  onLoad: function () {
    
  },
  tapName(event) {
    this.setData({
      magicNumber:Math.random()
    })
    let {magicNumber} =this.data
    this.setData({
      num:Math.floor(magicNumber*1000)
    })
  },
  inputChange(event){
    console.log(event.detail.value)
   // return Math.random()
  },
  onContainerTap(event){
    console.log(event)
  },
  onGetMagicNumber(event){
    this.setData({
      num: event.detail
    })
  },
  onGetUsrInfo(event){
    console.log(event)
  }
})

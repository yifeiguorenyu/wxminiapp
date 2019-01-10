Component({
  properties:{
    nowIn:String,
    
  },
  data:{
    magicNumber:Math.random()
  },
  attached(){//生命周期
    this.triggerEvent("getMagicNumber", Math.floor(this.data.magicNumber * 1000))

  },
  methods:{
    onTap(event) {
      this.setData({
        magicNumber: Math.random()
      })
      let {magicNumber}=this.data;

      this.triggerEvent("getMagicNumber",Math.floor(this.data.magicNumber*1000))

    } 
  }


 
})
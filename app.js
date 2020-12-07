new Vue({
  el:"#vue-app",
  data:{
    // name:"Qian",
    // job:"Learning",
    // website:"https://unpkg.com/vue",
    // websiteTag:'<a href="https://unpkg.com/vue">Vue</a>'
    // name:'',
    // age:20,
    // a:0,
    // b:0
    // x:0,
    // y:0
    // available:false,
    // nearby:false
    // error:false,
    // success:false
    characters:['Mario','Luigi','Yoshi','Browser'],
    ninjas:[
      {name:'Ryu',age:25},
      {name:'Yoshi',age:35},
      {name:'Ken',age:55},
    ]
  },
  methods:{
    // greet: function(time){
    //   // if use ()=>{} syntax, this keyword not working
    //   return "Good "+ time + ' !!!!!' + this.name;
    // }
    // add: function(inc){
    //   this.age+=inc
    // },
    // subtract:function(dec){
    //   this.age-=dec
    // },
    // updateXY:function(event){
    //   // console.log(event)
    //   this.x = event.offsetX;
    //   this.y = event.offsetY;
    // },
    // click: function(){
    //   alert('you clicked me')
    // }
    // addToA:function(){
    //   console.log('AAAA')
    //   return this.a + this.age
    // },
    //
    // addToB:function(){
    //   console.log('BBB')
    //   return this.b + this.age
    // }

  },
  computed:{
    // addToA:function(){
    //   console.log('AAAA')
    //   return this.a + this.age
    // },
    //
    // addToB:function(){
    //   console.log('BBB')
    //   return this.b + this.age
    // }
    compClasses:function(){
      return {
        nearby: this.nearby,
        available: this.available
      }
    }
  }
//TODO: check greet method
})

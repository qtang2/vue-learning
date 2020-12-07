new Vue({
  el:'#vue-app',
  data:{
    output: "Your fav food"
  },
  methods:{
    readRefs:function(){
      console.log(this.$refs.test.innerText)
      this.output = this.$refs.input.value
    }
  }
})
// Vue.component('greeting',{
//   template:'<p>Hey, there, re-usable component is {{name}} <button v-on:click="changeName">Change Name</button></p>',
//
//   // data is a function because we need to return a fresh obj for each component instance
//   // instead of sharing the same obj for all component instances
//   data:function(){
//     return {
//       name:"Yoshi"
//     }
//   },
//   methods:{
//     changeName:function(){
//       this.name= "Mario"
//     }
//   }
// })
//
// new Vue({
//   el:'#vue-app-one'
// })
//
// var two = new Vue({
//   el:'#vue-app-two'
// })
// var one = new Vue({
//   el:'#vue-app-one',
//   data:{
//     title:"Vue App One"
//   },
//   methods:{
//
//   },
//   computed:{
//     greet:function(){
//       return "Hello from App One"
//     }
//   }
// })
//
// var two = new Vue({
//   el:'#vue-app-two',
//   data:{
//     title:"Vue App Two"
//   },
//   methods:{
//     changeTitle:function(){
//       one.title = "Title Changed"
//     }
//   },
//   computed:{
//     greet:function(){
//       return "App Two Speaking"
//     }
//   }
// })
//
// two.title = "Changed from outside"

// new Vue({
//   el:"#vue-app",
//   data:{
//     // name:"Qian",
//     // job:"Learning",
//     // website:"https://unpkg.com/vue",
//     // websiteTag:'<a href="https://unpkg.com/vue">Vue</a>'
//     // name:'',
//     // age:20,
//     // a:0,
//     // b:0
//     // x:0,
//     // y:0
//     // available:false,
//     // nearby:false
//     // error:false,
//     // success:false
//     // characters:['Mario','Luigi','Yoshi','Browser'],
//     // ninjas:[
//     //   {name:'Ryu',age:25},
//     //   {name:'Yoshi',age:35},
//     //   {name:'Ken',age:55},
//     // ]
//     health: 100,
//     ended:false
//   },
//   methods:{
//     // greet: function(time){
//     //   // if use ()=>{} syntax, this keyword not working
//     //   return "Good "+ time + ' !!!!!' + this.name;
//     // }
//     // add: function(inc){
//     //   this.age+=inc
//     // },
//     // subtract:function(dec){
//     //   this.age-=dec
//     // },
//     // updateXY:function(event){
//     //   // console.log(event)
//     //   this.x = event.offsetX;
//     //   this.y = event.offsetY;
//     // },
//     // click: function(){
//     //   alert('you clicked me')
//     // }
//     // addToA:function(){
//     //   console.log('AAAA')
//     //   return this.a + this.age
//     // },
//     //
//     // addToB:function(){
//     //   console.log('BBB')
//     //   return this.b + this.age
//     // }
//
//     punch:function(){
//       this.health -=10
//       if(this.health<=0){
//         this.ended = true
//       }
//     },
//     restart: function(){
//       this.health= 100;
//       this.ended = false
//     }
//
//
//   },
//
//   computed:{
//     // addToA:function(){
//     //   console.log('AAAA')
//     //   return this.a + this.age
//     // },
//     //
//     // addToB:function(){
//     //   console.log('BBB')
//     //   return this.b + this.age
//     // }
//     // compClasses:function(){
//     //   return {
//     //     nearby: this.nearby,
//     //     available: this.available
//     //   }
//     // }
//   }
// //TODO: check greet method
// })

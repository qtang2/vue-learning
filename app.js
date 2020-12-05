new Vue({
  el:"#vue-app",
  data:{
    name:"Qian",
    job:"Learning"
  },
  methods:{
    greet: function(time){
      // if use ()=>{} syntax, this keyword not working
      return "Good "+ time + ' !!!!!' + this.name;
    }
  }
//TODO: check greet method
})

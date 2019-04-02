// We require state, callback array, reject and resolve

function myPromise(action) {
  this.thenCallBacks = [];
  this.value = null;
  this.status = "pending";
  this.onCatch = undefined;
  this.onFinally = undefined;
  this.finally = function(callback) {
     this.onFinally = callback;
     return this
  }
  
  this.reject = function(callback) {
    this.onCatch = callback;
    return this;
  }
  this.then = function(callB) {
    this.thenCallBacks.push(callB);
    return this;
    
  }
  action(resolve.bind(this), reject.bind(this));
  function resolve(value) {
    this.value = value;
    this.status = "Complete";
    console.log(this.thenCallBacks);
    this.thenCallBacks.map(function(func){
      func(this.value);
      
    });
    if(typeof this.onFinally == "function") {
      this.onFinally(value);
      
    }
  }
  
  function reject(value) {
    this.value = value;
    this.status = "Fail";
    if(typeof this.onCatch == "function") {
      this.onCatch(value);
    }
  }
}
var c = new myPromise(function(res,rej){
 
  setTimeout(()=>{
      res("l");
  },2000)
  
})


c.then(function(v){
  console.log("kk");
});
c.reject(function(){
  console.log("fail");
})
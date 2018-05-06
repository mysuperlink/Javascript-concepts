// Implement a function like sum(2)(3)

function sum(a){
	return function(b){
		return a+b;
	}
}
sum(2)(3) // 5

//Promise 
// It is used to execute async operations. It accepts two params resolve and reject

var promise = new Promise(function(resolve, reject){
	var actionComplete = false
	for(var k = 0; k < 100; k++){
		actionComplete = true;
	}
	if(actionComplete){
		resolve();
	}else{
		reject()
	}
	
})
// called when resolved 
promise.then(function(){
	console.log('completed')
})

// Bind 
// Bind is used to borrow method from objects. Bind returns a function
function makeCar(){
  this.name = "BMW";
  this.showColor = function(color){
    return color
  }
  this.carName = function(){
    return this.name
  }
}
var myCar = new makeCar(); // create an instance
myCar.showColor('red');

var mySonCar = myCar.showColor
console.log(mySonCar('Red'))  // red


//BIND returns a function 
//if you want to pass an external object
var diffObj = {
  name : "Aatif"
}
var mySonCar = myCar.showCarName.bind(diffObj);
mySonCar(); // Aatif


// Call 
// call will call that function instant first paramter as the reference object and 
// second fn param if required

var vC = {name: "Call Example"};
function callFn(arg){
  console.log(this.name + " by "+arg)
}
callFn.call(vC, "aatif") // call example by aatif

// APPLY 
// apply will also call that function instant first paramter as the reference object and 
// second as an array parameter
var vC = {name: "Call Example"};
callFn.showColor.apply(vC, ["White"])


// Callback 
// when we pass funtion as an argument

function addNumber(a, b, callback){
	let c = a + b;
	callback(c);
}

addNumber(2, 4, function(sum){
	console.log(sum)
})


//let is a variable whose value is known inside a block 
for(let i =0; i<3; i ++){}

//Iterators in ES6
var words = ['A', 'B', 'C'];
for(let word of words.entries())
  console.log(word); // it will return array like 
					 // [0, "A"], [1, "B"] .... 

for(let word of words.keys())
  console.log(word); // it will return array like 
					 // 0,1,2 .... 


//Generators in ES6 

// these functions are defined with * 
// they can be entered and exited at any time but saves the context
// it has a keyword called yeild which is used to pause and resume the fn

function* sayHello(){
  console.log('hey Generator')
  yield "Hello";
  yield "hello1";
  yield* callApi();
  return "abc";
}
let say = sayHello();

console.log(say.next()); // hello  -> returns object {value :hello, done:false }
console.log(say.next()) // hello1 -> returns object {value :hello1, done:false }
console.log(say.next()) // ->  returns object {value :data, done:true } // since returns terminates
//generator


function* calC(i){
  let x = yield + i;
  console.log(x);
  let y = yield + i;
  return i;
}

var say = calC(2);
console.log(say.next()); // ->{value : 2 , done:false}
console.log(say.next()); // ->{value : 2 , done:false}
console.log(say.next()); // -> {value : 2, done : true}


//Generators are not constructable
function* f() {}
var obj = new f; // throws "TypeError: f is not a constructor"


//Reverse a Linked List in groups of given size

var a = "abcdefghi";
var actualsize = 3;
let splitSt = a.split("");
let size = actualsize;
let b="";
let incV = 0;
for(let i = 0; i < splitSt.length; i++){
 
  if(incV == actualsize){
    size = 3 + incV;
    actualsize = size;
  }
  b+=splitSt[size - 1];
  incV = incV +1
  size = size - 1;
}



// write a function to capitalize fist letter of string
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

"hello world".capitalize();  =>  "Hello world" 


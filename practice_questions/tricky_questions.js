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
}
var myCar = new makeCar(); // create an instance
myCar.showColor('red');

// what if we want to use this method for some other variable without creating an instance
var mySonCar = myCar.showColor.bind(myCar)
console.log(mySonCar('Red'))



// Call 
// call will call that function instant first paramter as the reference object and 
// second fn param if required
myCar.showColor.call(myCar, "White")

var vC = {name: "Call Example"};
function callFn(arg){
  console.log(this.name + " by "+arg)
}
callFn.call(vC, "aatif")

// APPLY 
// apply will also call that function instant first paramter as the reference object and 
// second as an array parameter
myCar.showColor.apply(myCar, ["White"])


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
// they return an iterator and use next()
// method to call f(n)
function* sayHello(){
  console.log('hey Generator')
}
let say = sayHello();

console.log(say.next());



// Constructor Pattern
//As we know Javascript doesn’t support the concept of classes, 
//but it support special constructor functions that works with the object by defining keyword “new”.
// ES5
function makeCar(){
	this.name = “BMW”;
	this.color = “Blue”;
}
var myCar = new makeCar();
console.log(myCar.name)      		// BMW
console.log(myCar.color)		// Blue

//ES6
class makeCar(){
	constructor(props){
		super(props)
		this.name = “BMW”;
		this.color = "Blue"
	}
}

var myCar = new makeCar();
console.log(myCar.name)      		// BMW
console.log(myCar.color)		// Blue


// In the above example, we defined a constructor fn makeCar() and to access its object we created an instance myCar which is the child of makeCar.

// Note: if any object in JS doesn’t have the property of constructor it means its root object like Array, String
// Example
var a = [1,2,3];
console.log(a.constructor())  // Array
//a is the instance of Array

var b = “abc”;
console.log(b.constructor())  // String
//b is the instance of String

//Note : Check if the object is an array or string or number, we can check via instanceOf 


	
   


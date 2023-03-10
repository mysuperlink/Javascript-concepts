 	Explain Event Delegation
	
	Attaching an event to the parent. 
	Event delegation allows you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent. That event listener analyzes bubbled events to find a match on child elements
	
	lets say you have list of li elements
	<ul id='parent'>
		<li>A</li>
		<li>B</li>
	</ul>

	if you li is based upon some dynamic data so you can add an event listener on your parent and when you click li
	the bubble will propagate and you can find target element

	document.getElementById('parent').addEventListener('click', function(e){
		if(e.target.id == '1'){

		}
	})

	Another example is from jquery ".on"
	lets say u have a modal box which is not present in the dom when your page is loaded so you attach an event 
	on body and it binds click to the ul
	$(body).on('click', '#parent', function(){

	});

Check here   

Chaining in JQuery

	Chaining in Jquery is used to add method on a selected element
	Without Chaining
	$(div).css();
	$(div).click();

	With chaining
	$(div).css().click();


Event Bubbling
	Its the procedure how our event travels from child to parent node. It can be stopped by event.stopPropogation();


Explain difference between proto vs prototype
	Prototype is the property of the constructor function.
	_proto_ is the internal property of any object pointing to its prototype.

	Eg: function Point(x, y) {
	    this.x = x;
	    this.y = y;
	}
	Note :Point.prototype property is created internally once you declare above function
	Note : Every instance created using new has a __proto__ property which points to its prototype
	var myPoint = new Point(); // it will create a instance and can be said it creates a new object like Point{x:undefined}
	// since at the time of creating instance x and y was not defined.

	// the following are all true
	myPoint.__proto__ == Point.prototype
	console.log(Point.prototype)  // returns a object like. { constructor:function Point() }
	myPoint.__proto__.__proto__ == Object.prototype
	myPoint instanceof Point;
	myPoint instanceof Object;

	Note : Here Point is a constructor function, it builds an object (data structure) procedurally. myPoint is an object constructed by Point() so Point.prototype gets saved to myPoint.__proto__ at that time.

    EXAMPLE
      let arr = ["Aatif", "Mano"];

      if you console.log (arr) you can acess arr.length  or arr.concat etc
      these are methods available on array 
      so console.log(arr.__proto__) outputs an array of objects which is actuall Array.prototype
      and console.log(arr.__proto__.__proto__) outputs an object which is Object.prototype
      and console.log(arr.__proto__.__proto__.__proto__) outputs null since chain got over 
      
      FOR DETAILS : https://www.youtube.com/watch?v=wstwjQ1yqWQ&feature=youtu.be


Explain typeof instanceof and constructor ?
	Type of: 
	typeof is unary operator like ! operator. It returns a STRING 
	typeof 3  // number
	typeof "aatif"  // string
	typeof {} // object
	typeof null // object // Since its a bug in JS as null is primitive it should return null
	typeof function () {};  // function
	typeof // Raise an error


Constructor
	Constructor is an property available on all object's prototype. 
	Eg : [].constructor returns the Array  
		 ({}).constructor returns function

	function Person(name) {
  		this.name = name;
	}

	var dave = new Person('Dave');
	dave.constructor === Person; //true
	console.log(Person.constructor) // function Function()

	

	instanceof
	instanceof is a binary operator. So, to continue the above example:

	dave instanceof Person; //true

	Note : The difference between instanceof and the constructor property is that instanceof inspects the object???s prototype chain. So, going back to our friend dave again:

	dave instanceof Object; //true, 
	dave.constructor == Object // false
	function foo(){
	  return foo; 
	}
	var bar = new foo();
	// bar instance of foo is false here since foo returning foo (which again point to fn foo).
	
	Explain above in proto vs prototype dave.__proto__.__proto__ == Object.prototype
	
	This is because Person.prototype is an object, so Object is in dave???s prototype chain, therefore dave is an instance of Object.

Explain how "this" works in JS
	
this is a keyword in JS. It basically depends upon a function is called.

What the heck is Event loop?
https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=948s
Event loop has three major components
   - Stack 
   - WebApis // all set timeout and api call move to this component after stack
   - Task Que 

   	console.log("hi");

   	setTimeout(()=>{
   		console.log("hi timeout");
	}, 5000);
	console.log("done");

	Event loop works as Hi will go in stack and gets printed
	Event loop will pick setTimeout sends it to webApis and and after 5 second then moves it to taskQue and doesnt execute
	Event loop will print done
	and then will print HI timeout



Primary we have two context for this.

	Global context

	console.log(this.document == document) // true
	this.a = '2';
	console.log(window.a)  // 2

	Function context

	*if the function is not in the strict mode
	function f1(){
		return this
	}
	console.log(f1())  // document since we have return document	

	but if the function is in the strict mode

	function f2(){
		'use strict'
		return this
	}
	console.log(f2()) // UNDEFINED
	since when switch on the strict mode this will refer when its executed inside the function

	(function(){
		function f3(){
			return this;
		}
		console.log(f3())   // global context
		function f4(){
			console.log(this);  // function f4 context
		}

	})

Difference b/w if(something) or if(x === true)
	If(x) it means you are checking the value it can be non-zero, array, object and postive val
	if(x === true) you are checking boolean type which x should be boolean and equals to true

	var x = 0;
	console.log(x == true) // false
	console.log(x == false) // true

	var y = 0
	console.log(y == false ) // true
	console.log(y === 0) // false


Write an implementation of a function `value` which returns the value of the inner most function.
var innerPeace = function() {
  return function() {
    return function() {
      return function() {
        return function() {
          return function() {
            return function() {
              return function() {
                return function() {
                  return '42';
                };
              };
            };
          };
        };
      };
    };
  };
};
var returnedVal = innerPeace();
checkVal(returnedVal());

function checkVal (arg) {
  if(typeof arg === "function") {
    checkVal(arg())
  }else{
    console.log(arg)
  }
}

Iterate through object

var inputObj = {
        'name': 'jane',
        'last_name': 'doe',
        'profession': 'engineer',
        'characteristics': {
                'intelligent': true,
                'punctual': false,
                'experience': {
                        '2012': 'college passout',
                        '2014': 'mba passout',
                        '2016': 'employed'
                }
        }
};

let val = {};
let flatKey = "";
function parseObject(obj, keyName) {
  for (let key in obj) {
    if(typeof obj[key] == "object"){
      flatKey = flatKey +"."+ key;
      parseObject(obj[key], flatKey);
    } else {
      if(keyName) {
          val[keyName+key] = obj[key];
      } else {
       val[key] = obj[key];
      }
    }
  }
}



parseObject(inputObj);
console.log(flatObjecFinal); // characteristics.experience2012:college passout 

Execute a function called `sum` like so:

function sum(a, b) {
 console.log('Sum is: ', a + b);
}

Now you should be able to execute: 
sum.callAfter(5000, 8, 9);

function sum (a,b) {
    console.log(a+b);
}
Function.prototype.callAfter = function (time,a,b) {
    setTimeout(()=>{
        this(a,b);
    },time)
}

sum.callAfter(2000,4,5);

- Custom connect 
 import { store, dispatch } from ???react-redux???;???   
 const connect = (props) => {      
	 	const state = store.getState();       
	 	return function (Component){
		  return (<Component {..props} state={state} dispatch={dispatch} />)
		}
	}


What will the value for the function when we call
	
	function abc(){
		var c = 1;
	}
	console.log(abc())    // undefined as its not returning anything

Promises 
 Promises in javascript are the function which is used to perform aysnc operations and which accepts two params resolve and reject

	var promise1 = new Promise(function(resolve, reject) {
	    setTimeout(function(){
	      console.log("1");
	      resolve()
	    }, 500);
	});

	var promise2 = new Promise(function(resolve, reject) {
	    setTimeout(function(){
	      console.log("2")
	      resolve()
	    }, 200);
	});

	Promise.all([promise1, promise2]).then(function(value) {
	  console.log("gg");
	});

	//Output -> 2,1,gg (all will handle multiple promises)

Write custome promise
  /// We require state, callback array, reject and resolve

  REFER TO DRAFTS AT aatifbandey2009@gmail.com or customPromise.js in the folder



Ways to define a global variable
	
	k = 0;        		// or var k = 0;
	function inc(){
		k = k +1;
		console.log(k);  // 1
	}
	inc()  
Explain Generators in Javascript?
	
	Generators are functions* which can be exited and re-entered with last saved context (or last yeild used).
	Generators functions returns generator object. Generator object is an iterable protocol
	Syntax : 
	function* gen(){
		yeild 1;
		yeild 2;
	}
	var g = gen();

	Generator.prototype.next(): is a method returns a value yeilded by yeild expression.
	[Note : yeild is used to pause and resume generator function. Note if a return statement is reached it terminates the generator execution]

	Examples:

	function* exp(){
		yeild 1;
		yeild "Hi";
		return "abc";
		yeild "a";
	}
	var m = exp();
	console.log(m.next()) // 1 {value : 1 done: false}
	console.log(m.next()) // 1 {value : Hi done: true}
	console.log(m.next()) // 1 {value : undefined done: true}

	// done : false means when generator fn terminates


	function* anotherGenerator(i) {
	  yield i + 1;
	  yield i + 2;
	  yield i + 3;
	}

	function* generator(i) {
	  yield i;
	  yield* anotherGenerator(i);
	  yield i + 10;
	}

	var gen = generator(10);

	console.log(gen.next().value); // 10
	console.log(gen.next().value); // 11
	console.log(gen.next().value); // 12
	console.log(gen.next().value); // 13
	console.log(gen.next().value); // 20


	//Generators are not constructable
	function* f() {}
	var obj = new f; // throws "TypeError: f is not a constructor"

Closure
	Closure is a combination of a function and lexical environment within which that function is declared

	function init() {
	  var name = 'Mozilla'; // name is a local variable created by init
	  function displayName() { // displayName() is the inner function, a closure
	    alert(name); // use variable declared in the parent function    
	  }
	  displayName();    
	}
	init();


	function makeAdder(x) {
	  return function(y) {
	    return x + y;
	  };
	}

	var add5 = makeAdder(5);
	var add10 = makeAdder(10);

	console.log(add5(2));  // 7
	console.log(add10(2)); // 12

*****Note: Closure can update the values of variable from outside which is a drawback;
	function celebId(){
		var cid = 999;
		return {
			getID: function(){
				return cid;
			}
			setId: function(newVal){
				cid = newVal;
			}
		}
 	}
	function makeSizer(size) {
	  return function() {
	    document.body.style.fontSize = size + 'px';
	  };
	}
	var mjID = celebId(); // At this juncture, the celebId outer function has returned.???
	mjID.getID(); // 999???
	mjID.setID(567); // Changes the outer function's variable???
	mjID.getID(); // 567: //It returns the updated celebrityId variable???****
	console.log(cid) // is undefined

	var size12 = makeSizer(12);
	var size14 = makeSizer(14);
	var size16 = makeSizer(16);
	function test(){
	  return function(){
	    console.log(this);
	  }
	}
	var m = test();
	m(); // this will be window scope

PASS BY VALUE AND REFRENCE
	Javascript is always pass by value, but when a variable refers to an object (including arrays), the "value" is a reference to the object.
	Changing the value of a variable never changes the underlying primitive or object, it just points the variable to a new primitive or object.

	function f(a,b,c) {
	    // Argument a is re-assigned to a new value.
	    // The object or primitive referenced by the original a is unchanged.
	    a = 3;
	    // Calling b.push changes its properties - it adds
	    // a new property b[b.length] with the value "foo".
	    // So the object referenced by b has been changed.
	    b.push("foo");
	    // The "first" property of argument c has been changed.
	    // So the object referenced by c has been changed (unless c is a primitive)
	    c.first = false;
	}

	var x = 4;
	var y = ["eeny", "miny", "mo"];
	var z = {first: true};
	f(x,y,z);
	console.log(x, y, z.first); // 4, ["eeny", "miny", "mo", "foo"], false
Concept of Hoisting in JS

	var name = "ab";

	function care(){
		console.log("my name is "+name);  // undefined as var declaration goes on top
		var name = "Aatif";
		console.log("my name is "+name); // Aatif
	}
	care();

Primitive data types in JS
	
	undefined
	null
	boolean
	string
	number
	symbol

	what do we mean by primitive?.
	Primitive data types are immutable whose type cant be changed.
	Other than these 6 everything other than is an object 

// Bind 
// Bind is used to borrow method from objects. Bind returns a function

function makeCar(){
  this.name = "BMW";
  this.showColor = function(color){
    return color
  }
  this.carName = function(model){
    return this.name + "model"+model
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
var mySonCar = myCar.carName.bind(diffObj);
mySonCar("X1"); // Aatif model X1

let basic = {
  'name': 'shyam',
  'age': 24
};

function callMe(city) {
  console.log('Hi! my name is ' + this.name + ' and my age is ' + this.age + ' and my city is ' + arguments[0] + ' and state is ' + arguments[1]);
}
let callBinded = callMe.bind(basic, 'jammu');
let mycallBinded = callMe.mybind(basic, 'jammu');
callBinded('j&k'):
mycallBinded('j&k');

Pollyfill for bind, apply and call
Function.prototype.mybind = function (context) {
  let fn = this;
  return function () {
      fn.call(context)
  }
};

Function.prototype.mybind = function (context, ...args1) {
  let fn = this;
  return function (...arg2) {
      fn.apply(context, [...args1, ...arg2])
  }
};

// Call 
// call will call that function instant first paramter as the reference object and 
// second fn param if required

var vC = {name: "Call Example"};
function callFn(arg){
  console.log(this.name + " by "+arg)
}
callFn.call(vC, "aatif") // call example by aatif

// APPLY - apply will always take second param as array of arguments
// apply will also call that function instant first paramter as the reference object and  second as an array parameter
var vC = {name: "Call Example"};
callFn.showColor.apply(vC, ["White"])



what is null ?
	null is a type its not an object




QUICKY

	console.log(null) 			//will print null
	console.log(undefined)		// will print undefined
	null == undefined  			// will be true their value isnt same but they both mean nothing
	typeof null					// "object" SINCE THIS IS A BUG IN JS AS NULL IS PRIMITIVE IT SHUD BE NULL (typeof)
	typeof undefined 			// undefined
	null === undefined 			// false
	typeof NaN					// "number"
	typeof(undefined)           // "undefined"
	typeof typeof(undefined)    // "string"  since you are checking the typeof undefined which will return "undefined" (string) so typeof "undefined" equals string
	typeof typeof               // RAISES an error you cant check this 

	let number = 0;
	console.log(number++);  //0 The postfix unary operator ++: Returns the value (this returns 0) Increments the value (number is now 1)
	console.log(++number);  // 2  The prefix unary operator ++: Increments the value (number is now 2) Returns the value (this returns 2)
	console.log(number);		// 2

	const obj = { 1: 'a', 2: 'b', 3: 'c' };
	const set = new Set([1, 2, 3, 4, 5]);

	obj.hasOwnProperty('1'); // true
	obj.hasOwnProperty(1);   // true
	set.has('1');   // false since set check type too
	set.has(1);     // true

	const a = {};
	const b = { key: 'b' };
	const c = { key: 'c' };

	a[b] = 123;
	a[c] = 456;

	console.log(a[b]); // 456 a["[object Object]"] = 123 then we are doing a["[object Object]"] = 456

	// index.js
	console.log('running index.js');
	import { sum } from './sum.js';
	console.log(sum(1, 2));

	// sum.js
	console.log('running sum.js');
	export const sum = (a, b) => a + b; 
	 //ORDER WILL BE // running sum js, running index.js and 3

	count.js
	let count = 1;
	export default count

	a.js
	import count from "./count"
	count +=1 
	console.log(myCounter); // Error // imported module is read-only: you cannot modify the imported module
													//	Only the module that exports them can change its value.

	FOR MORE QUESTIONS: https://github.com/lydiahallie/javascript-questions START AFTER 45
	(function(){
		var a = 2, 
		b = 3;
	})			
	console.log(a,b)   // a and b not defined

	// PRINT 0,1,2,3
	function test(){
	  for (var k = 0; k< 4; k++){
	    (function(k){
	    	// k  will work as closure variable
	      setTimeout(function(){
	         console.log(k);
	      },1000)
	    })(k)
	  }
	}
	test();  // will print 0,1,2,3 also it will work if you change var to let since it scope level then no need of anonymous fn.
    // since we have anonymous function declared it will work like a closure

	function test(){
	  for (var k = 0; k< 4; k++){
	   setTimeout(function(){
	         console.log(k);
	      },1000)
	    }
	}
	test();  // will print 4,4,4,4

	var m = {name: "Hello1"};
	var n = {name: "Hello2"};
	var p = {name: "Hello3"};

	m[p] = "hello4" // since object property can be string or number 
	                //  { name: "Hello 1", "[Object object]": "hello4"}

	n[m] = "hello5" //  since object property can be string or number and m has a object object string
	                //  { name: "Hello 2", "[Object object]": "hello5"}

	p[m] = "hello6" //  since object property can be string or number and m has a object object string
	                //  { name: "Hello 3", "[Object object]": "hello6"}

	if (function() {
		console.log("hello") // it will print since true value
	})  
	if (+function() {
		console.log("hello") // it will not print its a false + function will try to add up which is NaN
	})     

	1 + "2"+"3"   // 123
	1 + +"2"+"3"  // 33 // since conversion will take place +"2" will convert number into 2    
	+"2"  // will output 2 as number
	1 - +"2" +"3" // -13
	1 - -"2" +"3" // 33

	if({} === {}) { console.log("hl1")} // false will not print comparision objects

	var y = 1, x = y = typeof x 	// value of x will be undefined since type of x is undefined
	+'dude' 					// NaN



How JSONP works for CORS

	its actually a hack browser sends request to foreign server with a tag <script>. The client creates a 
	script tag and put URL on it with an callback==xxxx the browser thinks its just some javascript file
	wants to download and allows data communication

	example
	if you want to make a JSONP call, you insert this script element into the DOM
	<script src="http://example.com/ajaxendpoint?jsonp=parseResponse"></script>
	The server's response will be something like this:

	parseResponse({"json":"value"}); 

Implement a function for add(3,5) and add(3)(5)
	
	we will make use of currying and closure
	function add(a){
		return function(b){
	      if(typeof b !== "undefined") {
	        a = a + b;
	        console.log(a);
	        return arguments.callee; // callee is used to exceute a fn within a function when fn name is unknown
	      } else {
	        console.log(a+b);
			return a + b;
	      }
	      
		}
	}
	var init = add(3);  // here we stored return function from a
	init(5);  	// 8
	init(7);	// 10
	add(3)(5);   	// 8
	add(3)(5)(2);   //10

What is the use of Strict mode ?

	It is used to throw run time errors like when you did not declare a variable or trying to delete a non existing property

Optimizing search or SEO
   	Responsive design is most recommended.
   	Use rel='canonical' + rel='alternate' for separate desktop/mobile sites. 
      // supoose if you have two web page purely same but with url can be diffrent you can use rel="canonical"
      // to help webmaster to identify and it wont be marked as duplicate
    Use Vary HTTP header for a single URL dynamically serving separate desktop/mobile HTMLs.
	Use noindex for pages you want to limit access to those who know the URL.

Difference between
	function test(){
		return {
			a : "hi"
		}
	}

	function test2(){
		return 
		{
			a : "hi"
		}
	}
	console.log(test())  // prints object
	console.log(test2())  // prints undefined as per behaviour of JS it explicity add semicolon after return


What it will alert?
	var x = 3;

	var foo = {
	    x: 2,
	    baz: {
	        x: 1,
	        bar: function() {
	            return this.x;
	        }
	    }
	}

	var go = foo.baz.bar;

	alert(go());   // 3 // since foo.baz.bar is not called we are just storing context of fn
	alert(foo.baz.bar());  // 1


	var x   = 4,
    obj = {
        x: 3,
        bar: function() {
            var x = 2;
            setTimeout(function() {
                var x = 1;
                alert(this.x);
            }, 1000);
        }
    };
	obj.bar();  // 4 
	// setTimeout() causes javascript to use the global scope

Check type

	var foo = function bar() {}; 
	alert(typeof bar); // undefined

What value it will alert ?

	var arr = [];
	arr[0]  = 'a';
	arr[1]  = 'b';
	arr.foo = 'c';
	alert(arr.length);  // it will alert 2


	function foo(a) {
	    arguments[0] = 2;
	    alert(a);
	}
	foo(1);   // it will alert 2 as it changed the argument


	function foo(){}
	delete foo.length;
	alert(typeof foo.length);   // it will print number because we are checking length
	alert(typeof foo);   // it will print function


	function foo(){}
	alert(typeof foo.length);   // it will print number because we are checking length
	alert(typeof foo);   // it will print function


	function aaa() {
	    return
	    {
	        test: 1
	    };
	}
	alert(typeof aaa());   // it will alert undefined

	(true + false) > 2 + true;   // False


	function bar() {
	    return foo;
	    foo = 10;
	    function foo() {}
	    var foo = '11';
	}
	alert(typeof bar());   // function

	new String("This is a string") instanceof String;  // true

	var myArr = ['foo', 'bar', 'baz'];
	myArr.length = 0;
	myArr.push('bin');
	console.log(myArr);   // ["bin"]


	String('Hello') === 'Hello';  // true

	var x = 0;
	function foo() {
	    x++;
	    this.x = x;
	    return foo;
	}
	var bar = new new foo;
	console.log(bar.x);   // undefined

How come true == 1 is true ?
	
	Since "==" converts between types to find a match so it true but true === 1 is false 
	Remember the CONVERSION IS FROM BOOLEAN TO NUMBER

Some really tricky ones

	var c = {a:1}
	var m = c;

	c.a =2;

	console.log(m); // {a:2} since the concept of pass by reference worked here 

	var c = {a:1}
	var m = c;

	delete c.a =2;

	console.log(m); // {} since the concept of pass by reference worked here 

	var a = 10;
	function x(){
	  var a = 20;
	}
	x();

	console.log(a)  // 10 


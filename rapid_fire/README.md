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
	var myPoint = new Point();

	// the following are all true
	myPoint.__proto__ == Point.prototype
	console.log(Point.prototype)  // myPoint.__proto__
	myPoint.__proto__.__proto__ == Object.prototype
	myPoint instanceof Point;
	myPoint instanceof Object;

	Note : Here Point is a constructor function, it builds an object (data structure) procedurally. myPoint is an object constructed by Point() so Point.prototype gets saved to myPoint.__proto__ at that time.

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

	Note : The difference between instanceof and the constructor property is that instanceof inspects the object’s prototype chain. So, going back to our friend dave again:

	dave instanceof Object; //true, 
	dave.constructor == Object // false
	Explain above in proto vs prototype dave.__proto__.__proto__ == Object.prototype
	
	This is because Person.prototype is an object, so Object is in dave‘s prototype chain, therefore dave is an instance of Object.

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
var flattenObject = function(ob) {
	var toReturn = {};
	
	for (var i in ob) {
		if (!ob.hasOwnProperty(i)) continue;
		
		if ((typeof ob[i]) == 'object') {
			var flatObject = flattenObject(ob[i]);
			for (var x in flatObject) {
				if (!flatObject.hasOwnProperty(x)) continue;
				
				toReturn[i + '.' + x] = flatObject[x];
			}
		} else {
			toReturn[i] = ob[i];
		}
	}
	return toReturn;
};

var flatNewObj = flattenObject(inputObj);
console.log(flatNewObj);

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



What will the value for the function when we call
	
	function abc(){
		var c = 1;
	}
	console.log(abc())    // undefined as its not returning anything

Promises 
 Promises in javascript are the function which is used to perform aysnce operations and which accepts two params resolve and reject

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
	var mjID = celebId(); // At this juncture, the celebId outer function has returned.​
	mjID.getID(); // 999​
	mjID.setID(567); // Changes the outer function's variable​
	mjID.getID(); // 567: //It returns the updated celebrityId variable ****

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
	(function(){
		var a = 2, b = 3;
	})			
	console.log(a,b)   // a = not defined and b = 3 since it is globally defined

	// PRINT 0,1,2,3
	function test(){
	  for (var k = 0; k< 4; k++){
	    (function(k){
	      setTimeout(function(){
	         console.log(k);
	      },1000)
	    })(k)
	  }
	}
	test();  // will print 0,1,2,3 also it will work if you change var to let since it scope level then no need of anonymous fn.


	function test(){
	  for (var k = 0; k< 4; k++){
	   setTimeout(function(){
	         console.log(k);
	      },1000)
	    }
	}
	test();  // will print 4,4,4,4


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
			return a + b;
		}
	}
	var init = add(3);  // here we stored return function from a
	init(5);  	// 8
	init(7);	// 10
	add(3)(5)   	// 8

What is the use of Strict mode ?

	It is used to throw run time errors like when you did not declare a variable or trying to delete a non existing property

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


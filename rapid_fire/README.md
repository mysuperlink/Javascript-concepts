Explain Event Delegation
	
	Attaching an event to the parent. lets say you have list of li elements
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

	})

Explain how "this" works in JS
	
this is a keyword in JS. It basically depends upon a function is called.

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
	console.log(f1())  // document

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

What will the value for the function when we call
	
	function abc(){
		var c = 1;
	}
	console.log(abc())    // undefined as its not returning anything

Ways to define a global variable
	
	k = 0;        		// or var k = 0;
	function inc(){
		k = k +1;
		console.log(k);  // 1
	}
	inc()  

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
	typeof null					// object
	typeof undefined 			// undefined
	null === undefined 			// false
	typeof NaN					// number
	var a = 2, b = 3				// a = 3 also b = 3
	var y = 1, x = y = typeof x 	// value of x will be undefined since type of x is undefined
	+'dude' 					// NaN

How JSONP works for CORS

	its actually a hack browser sends request to foreign server with a tag <script>. The client creates a 
	script tag and put URL on it with an callbak==xxxx the browser thinks its just some javascript file
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

	alert(go());   // 3
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


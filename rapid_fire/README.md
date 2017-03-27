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

Explain how "this" in JS
	
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





How does the browser rendering engine work?
	1. DOM
	2. Css object model (CSSOM) // Blocked
	3. Render
	4. Layout
	5. Paint

	Document Object Model & CSSOM: 
	the browser has to go through 4 steps:
	1. Convert bytes to characters
	2. Identify tokens
	3. Convert tokens to nodes
	4. Build DOM Tree

	The Render Tree
	This stage is where the browser combines the DOM and CSSOM

	Layout
	This stage is where the browser calculates the size and position of each visible element on the page

	Paint
	When we get to the paint stage, the browser has to pick up the layout result, and paint the pixels to the screen


	Make all Javascript async
	Async scripts don’t block DOM construction and don’t have the need to wait for the CSSOM event, this way your critical rendering path stays free from Javascript interference
	
# Javascript-concepts

	Design patterns
	Complex problems with array
	Rapid fire question
	Node Js / Express
	React Redux Concepts
	Jquery
	WEB ACCESSIBILITY
	Optimizing Web APP
	Grunt Gulp Webpack NPM

Javascript is loosely typed language unlike C++ where you need to defined type of variable, but JS understand type
from the value 
Eg : var a = 1    // number 

	Destructor in Javascript

	There is no destructor in JS and it has a garbage collector that runs at regular interval and cleans up the free objects and freeing up memory


Calculate time execution of Functions in JS

	We can achieve this by console.time() or perform.now() api

Hoisting 

	Its one of the most important part of JS. The variable and function expression are hoisted on top;

	Eg console.log(x === undefined)   // True
		var x = 1;

		baz()   // it will worsk
		funtion baz(){

		}
		
 		baz()    // baz is not a function  since function expression is hoisted 
 		var baz = function(){

 		}

Constants
	
	These are immutable their value doesn't change

Time Complexity

	It is depend on: 
		How many comparisons are made ?
		How many swaps are made ? [Mostly in sorting]

What is destructuring in JS
	When you export multiple classes in one file its called destructuring
	Eg:
		export class ABC {}
		export class DEF{}

		import {ABC, DEF} from './filename'; 


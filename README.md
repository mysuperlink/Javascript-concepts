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

    What is critical rendering path
    Its a process which can block rendering of UI so keeping  all Javascript async can can let go initial rendering faster.
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

/************************************************************************************************************/
ES2015 Features 
Let vs Const vs Var

    variables are declared by using three keywords 
Constants
    These are immutable their value doesn't change;
    const x = 1;
    const x = 2; // raises an error re-declaration is not allowed

    cosnt pi; // raises an error with you const you have to define the value 
    pi = 1;
    const myVar = "Nick";
    myVar = "John" // raises an error, reassignment is not allowed

    const myArray = ["a", "b", "c"];

    Without destructuring
    const x = myArray[0];
    const y = myArray[1];

    With destructuring
    const [x, y] = myArray; //

    console.log(x) // "a"
    console.log(y) // "b"

let
    let are block scoped
    they cant be re-declared within same scope

    console.log(myVar) // raises a ReferenceError !
    let myVar = 2; // hoisting concept doesnt work


Arrow function vs Function definition (normal)

    Arrow functions are implicit return 
    Function definitions are explicit return where return statement is used in body

    Explicit return
        An explicit return is a function where the return keyword is used in its body.

        function double(x) {
            return x * 2; // this function explicitly returns x * 2, *return* keyword is used
        }

    Implicit return
    const double = (x) => x * 2;



Function default parameter value
    With es2015 you can set default value to your function parameters using the following syntax:

    function myFunc(x = 10) {
      return x;
    }
    console.log(myFunc()) // 10 -- no value is provided so x default value 10 is assigned to x in myFunc
    console.log(myFunc(5)) // 5 -- a value is provided so x is equal to 5 in myFunc

    console.log(myFunc(undefined)) // 10 -- undefined value is provided so default value is assigned to x
    console.log(myFunc(null)) // null -- a value (null) is provided


Spread Operator

    Its an Es6(es2015) feature used to expand elements of an iterable (like array).
    const arr1 = ["a", "b", "c"];
    const arr2 = [...arr1, "d", "e", "f"]; // ["a", "b", "c", "d", "e", "f"]

    function myFunc(x, y, ...params) {
      console.log(x);
      console.log(y);
      console.log(params)
    }

    const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // { a: 3, b: 4 }


    myFunc("a", "b", "c", "d", "e", "f")
    // "a"
    // "b"
    // ["c", "d", "e", "f"]

Template literals
    its a string syntax use to define values for variables.

    const name = "Nick";
    `Hello ${name}, the following expression is equal to four : ${2+2}`;
    //Hello Nick, the following expression is equal to four: 4


Object.assign

    Its the feature of ES6. assign is a static for object which returns a new object
    Object.assign({}, {a:1}, {b:1});
    first param is target object
/************************************************************************************************************/

Extend Class in JS ES5

    function test(a){
      this.abc = a;
    }
    test.prototype.getD = function(){
      console.log('1')
    }


    function newChild(){
      test.call(this);
    }
    newChild.prototype = Object.create(test.prototype);

    newChild.prototype.getF = function(){
      console.log('12');
    }

    var b = new newChild();

    b.getD(); // 1
    b.getF()  // 12


WINDOW vs DOCUMENT

    Window is the root level element in web page
    All global variable are defined on window object like alert(), confirm()
    Also properties like document, location, window  are defined at window object


    Document is the direct child of window object. You can access it via window.document or document.
    document object has many use­ful meth­ods defined on it.
    For exam­ple, document.getElementById(), document.getElementByTagName(), document.createElement(), document.querySelector() and many more

window.onload vs document.onload

    window.onload will fire when the entire page is loaded including its content(like images, css, scripts);

    document.onload is fired when the DOM is ready which can be prior to images and other exter­nal con­tent is loaded

    In gen­eral, document.onload event is fired before the window.onload

ASYNC VS DEFER Scripts

    Lets start with a reg­u­lar script tag hav­ing no attributes.

    <script src="myfile.js"></script>
    When the browser comes across the above line in your markup, this is what happens.

    Pause pars­ing the document.
    Make a request to fetch the file.
    Exe­cute the script after it has been downloaded.
    Resume pars­ing the document.


    Async

    When you add the async attribute to your script tag, the fol­low­ing will happen.

    <script src="myfile1.js" async></script>
    <script src="myfile2.js" async></script>
    Make par­al­lel requests to fetch the files.
    Con­tinue pars­ing the doc­u­ment as if it was never interrupted.
    Exe­cute the indi­vid­ual scripts [the moment the files are downloaded].


    Defer

    Defer is very sim­i­lar to async with one major dif­fer­er­ence. Here’s what hap­pens when a browser encoun­ters a script with the defer attribute.

    <script src="myfile1.js" defer></script>
    <script src="myfile2.js" defer></script>
    Make par­al­lel requests to fetch the indi­vid­ual files.
    Con­tinue pars­ing the doc­u­ment as if it was never interrupted.
    Fin­ish pars­ing the doc­u­ment even if the script files have downloaded.
    Exe­cute each script in the order they were encoun­tered in the document. [Main difference]
    As you can tell, defer is pretty much what you want to do in your files. How­ever, due to lim­ited browser sup­port, its not a viable option at the time of writing.


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


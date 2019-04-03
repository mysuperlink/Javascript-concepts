https://docs.google.com/spreadsheets/d/1aMf6I6U1EQq6lIMADEa5gd_wqMRGpSStHtt2wcWvg3A/edit#gid=0
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
    3. Convert tokens to nodes // <head> <body> are generated
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
          // // THIS FUNCTION WILL BE CALLED AT PARSE TIME
        }
        
        baz()    // baz is not a function  since function expression is hoisted 
        var baz = function(){
          // THIS FUNCTION WILL BE CALLED AT RUN TIME
        }

        foo() // here foo is not a function
        var foo = function foo (){

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
    let myVar = 2; // HOISTING concept doesnt work


Arrow function vs Function definition (normal)

    Arrow functions are implicit return 
    Function definitions are explicit return where return statement is not used in body

    Explicit return
        An explicit return is a function where the return keyword is used in its body.

        function double(x) {
            return x * 2; // this function explicitly returns x * 2, *return* keyword is used
        }

    Implicit return
    const double = (x) => x * 2;
    Arrow function always take this as in parent context


Deep Copy vs Shallow Copy
    Deep copy is when you try to copy the complete object and its reference too
        Example
        var c = {a: 2};
        var b = {a : c.a};
        if you change "b" then "b" will change but not "c"
        b = {a : 9}
        console.log(c); //{a:2}
    
    Shahllow copy is when you try to copy the object and its reference address
        Example
        var c = {a: 2};
        var b = c;
        if you change "b" then "a" will also change
        b = {a : 9}
        console.log(c); //{a:9}

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

Write a debounce function
Debounce function is a function which will limit the rate at which function is called which helps in broswer 
performance like when you scroll and call a fucntion.
Its a function which will take function as a paramter and time when to call

    function debounce(func, wait, immediate){
        let timeout;

        return function() {
            if(immediate && !timeout){
                func.apply(this, args)
            }
            clearTimeout(timeout)

            timeout = setTimeout(()=>{
                timeout = null
                if(!immediate) {
                    func.apply(this, args)
                }
            },wait);
        }
    }
    var makeUseOfDebounce = debounce(()=>{
        console.log("CV")
    }, 250);

Memory leaks
    Memory leaks are the memory which is not required by application anymore and not returned to OS or free memory area. JS is a grabage
    collected language. The main cause for leaks in garbage collected languages are unwanted references.
    Reasons for memory leak
      - Accident global variable which is not of use.
      - setInterval if you have written code in setInterval to access dom node after every 100 sec may be that node doesnt exits after some time the function would still be called.
      

Extend Class in JS ES5

    function test(a){
      this.abc = a;
      this.def = "hello"
    }
    test.prototype.getD = function(){
      console.log('1')
    }


    function newChild(){
      test.call(this); // WE USED CALL HERE TO ACCESS VALUES OF test functon FOR "abc" and "def"
                       // IF we remove this we can only access getD fn [it will call abc , def properties here]

        OR 
       // if we want to set value for abc we should use 
       //test.call(this, "12");
    }
    newChild.prototype = Object.create(test.prototype);

    newChild.prototype.getF = function(){
      console.log('12');
    }

    var b = new newChild();
    console.log(b) // it will print object b : { abc : undefined, def:"hello", getD : function(), getF :func()}
    since abc == undefined if we want to give values we should use test.call(this, "12");

    b.getD(); // 1
    b.getF()  // 12

JSON vs Javascript object

Json is data interchange format which can be representation of ordered list or unodered map
JsObject is type related to Javascript 

WALKING THE DOM
    DOM operation starts with document object.
    We have three main properties 
     - document.documentElement -- Inside html
     - document.body -- Inside body 
     - document.head -- Inside head

     document.body is the parent node and it has childnodes
     JS does have a property to check child node exits or not i.e : hasChildNodes()

     Important ********
     elem.lastChild wont have any nextSibling but prevSibling will be true but elem.firstChild cannot be null since it might not have
     element node but may be text node
     Every XML element is an element node. The text in the XML elements are text nodes. Every attribute is an attribute node.

Recursive thinking: simplify the task and call self:
    
    function pow(x, n) {
      if (n == 1) {
        return x;
      } else {
        return x * pow(x, n - 1);
      }
    }

    alert( pow(2, 3) ); // 8


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


What are array like objects?
    Array like objects are similar document.getElementsByClassName , fucntion arguments etc
    Arrays are normal objects and their elements are properties with names 0, 1, .. etc.
    arrays also have a special properties lenght and many function that can manipulate the elements

    function abc() {
      console.log(arguments.length) 

      // here argumnets are array like objects but .sort , .map function wont work for same
    }

    when you define array with new Array method 
    var m = new Array(1,2,3);
    console.log(m); // it will print [1,2,3];

    var m = new Array(3);
    console.log(m); // it will print ['','',''];  empty string array with length 3

    var m = new Array("hello");
    console.log(m); // it will print ['hello'];  empty string array with length 1

    NOTE:
    use array literal to define array rather than array contructor
    the Array constructor behaves differently if its only argument is a number
    
    Detect an array with m instanceof Array // return true

How to enable chaining in JS
    Chaining is used to call multiple methods inside a fn.
    function calculate(a){
      this.value = a;
      this.add = function(b) {
        this.value = this.value + b;
        return this;
      }
      this.multiply = function(b) {
        this.value = this.value * b;
        return this;
      }
      this.print = function() {
        console.log(this.value);
      }
      
    };
    var calC = new calculate(2);
    console.log(calC);
    calC.add(2).multiply(2).print(); // prints 8;


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

querySelector vs getElementById
    The query selector methods fetch a static nodeList which was formed at the time of execution. The getelementById or class methods fetch a live nodeList. Fetching a live nodeList is much faster and more efficient.

    Mean­ing if you add or remove any ele­ment from the DOM the node list will update


Difference between class and function exp

Class are not hosited but functions do

example


  const f = new AV() // AV is nnot defined
  class A {
    constructor(doors){
       this.doors = doors
    }
  }

  var m = new D(); // creates m as an object m = { doors: undefined}
  function D() {
     this.doors = doors
  }

  class has static methods which are not available to object or the instance

  class A {
    constructor(doors){
       this.doors = doors
    }
    static getMyName (doors) {
       this.doors = doors; 
        const newD = doors;
        return this.doors + newD;
        
    }
  }
  const f = new A();
  f will have f: { doors : undefined} 
  but if you check f.__proto.constructor:{ getMyName: f()}

  therefore static methods not available to instance

  *** const m = A.getMyName(2); // if this.doors is not available at constutor then it will throw an erro cant merge objects

Higher Order functions
    HOF are the function which take fn as an arguments and return a new function
    function test(fn) {
      
      return function(a,b) {
        fn(a,b)
      }
    }
    function add(a,b) {
      return a+b;
    }
    var m = test(add);
    m(2,3);
    

EVENT EMITTER in plain JAVASCRIPT {before reading this please read nodeJS folder the basics of nodejs and event emitters}
class EventEmitter {
  constructor() {
    this.events = [];
  }
  on(actionName, cb){
    this.events.push({
      type : actionName,
      method : cb
    });
    
  }
  emit(actionName, obj){
     let eventFound = false;
     for(let k = 0; k < this.events.length; k++){
       if(this.events[k].type == actionName){
         eventFound = true;
         this.events[k].method(obj);
         console.log(obj);
         break;
       }
     }
    if(!eventFound){
       this.events.push(actionName);
    }
  }
}

class Logger extends EventEmitter {
  
  logMessage(msg){
    console.log(msg);
    this.emit("messageLogged", {id:1})
  }
}
var newLogger = new Logger();
newLogger.on("messageLogged", (arg)=>{
  console.log("Listener called "+arg.id)
});

newLogger.logMessage("hello");


Shadow DOM

    Shadow DOM provides encapsulation for DOM and CSS in a Web Component. Shadow DOM makes it so these things remain separate from the DOM of the main document. You can also use Shadow DOM by itself, outside of a web component.

    Shadow DOM must always be attached to an existing element. The element can be either a literal element in an HTML file, or an element created in the DOM by scripting. It can be a native element like <div> or <p>, or a custom element like <my-element>. You attach shadow DOM using Element.attachShadow() like in this example:

    <html>
      <head></head>
      <body>
        <p id="hostElement"></p>
        <script>
          // create shadow DOM on the <p> element above
          var shadow = document.querySelector('#hostElement')
            .attachShadow({mode: 'open'});
        </script>
      </body>
    </html>


Time Complexity

    It is depend on: 
        How many comparisons are made ?
        How many swaps are made ? [Mostly in sorting]

What is export default vs export name in JS
    When you export multiple classes in one file its called export name
    Eg:
        export class ABC {}
        export class DEF{}

        import {ABC, DEF} from './filename'; 


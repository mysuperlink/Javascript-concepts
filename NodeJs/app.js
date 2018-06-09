
function sayHello (name) {
	console.log("hello "+name);
}
sayHello("aatif");

/*
//********* NODE CORE **********

Node is a C++ programm it includes V8 Javascript engine
when we pass any file to node its gives the file to V8 to execute
In node we dont window or document objects 

NODE module system
  - OS (operating system)
  - FS (file system)
  - Events
  - HTTP

Global Objects available with node (like window is available in browser we have "global" as a keyword in node)
  - console.log()
  - setTimeout()
  - clearTimeout 
  - setInterval
  - clearInterval

*/

var message = "";
console.log(global.message); // undefined;
// it is undefined since the variable defined here are scoped to this file not globally

// In node every file is a module anything defined inside file is not available outside the module

// EXPORT A MODULE GLOBALLY
console.log(module);
//You can check module has a property exports
// Check logger.js


// now we can require logger.js
const logger = require("./logger");
console.log(logger);
// use const since we dony want our logger to get updated accidentally
// example logger = 1 // will throw an exception with assignment of const cant be changed

//logger.log("Hello world"); if module.exports.log is added 

logger("hello world");
/*
IMPORTANT
node wraps each module in a IIFE 
ex (function (exports , require, module, __fileName, __dirName))
SO require() is not a global function but an argument of IIFE which is a reference to that module only


There are various built in modules in node like
  - OS // get any info about operating system
  - PATH  // get the path of file and other propertoes
  - HTTP // make http calls
 other you can check on node site

Lets check event emitter one of core building block of node emitter,js
*/

const EventEmitter = require("events"); // class

const emitter = new EventEmitter();

// register an event
emitter.on("messageLogged", function(){
	console.log("Listener called");
});


// Raise an event
emitter.emit("messageLogged");  // if you change messageLogged to something else it wont emit 

/* 
you can also pass different argument to your event emitter
*/

emitter.on("messageLoggedAgain", (arg)=>{
	console.log("Listener called "+arg.id);
});


// Raise an event
//emitter.emit("messageLoggedAgain", {id:1,url:"abc.com"});  // to identify type of event

// NOW CHECK HOW CAN WE PASS EVENTS FROM A DIFFERENT FILE
//emitterLog.js
// and then check emitterForLog.js


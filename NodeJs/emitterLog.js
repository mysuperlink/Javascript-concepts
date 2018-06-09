const EventEmitter = require("events"); // class

// we will create a class called logger which will have all eventemitter methods like emit or on etc


class Logger extends EventEmitter {
	log (message) {
		console.log(message);

		// Raise an event
		this.emit("messageLoggedAgain", {id:1,url:"abc.com"});  
	}
}

module.exports = Logger;
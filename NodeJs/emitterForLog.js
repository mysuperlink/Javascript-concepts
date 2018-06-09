const Logger = require('./emitterLog');

const logger = new Logger();
logger.on("messageLoggedAgain", (arg)=>{
	console.log("Listener called "+arg.id);
});
logger.log("hello")
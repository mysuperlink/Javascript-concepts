var url = "abc.com";

function log (message) {
	console.log(message);
}
//module.exports.log = log;
// we can also do 
module.exports = log

//Here we export our log fundtion to use it globally
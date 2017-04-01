Node JS

	Node js is an event driven asynchronous model. It is a single thread so it based on async model.


Node JS Callbacks
	Node js is heavily dependent on callback. Every api of node is written to handle callbacks

	Eg
		Sync code
		var fs = require('fs');

		fs.readFile('main.txt');

		console.log('File read')

		In terminal run :  node main.txt  // it first reads content of file and then console File read;

		Aync code
		var fs = require('fs');
		fs.readFile('main.txt', function(err,data){
			console.log(err)
		});

		console.log('File read')

		In terminal run :  node main.txt  // it fist print File read and then content of file 

How Node maintain Events ?

	NodeJs maintain events via event loop. It keeps the stack of events and perform operation 
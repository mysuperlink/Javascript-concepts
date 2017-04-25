// Prototype is a property to extend constructor method

function case(){}

case.prototype.newName = function(){
	return "aatif";
}

//When you define methods via prototype, they are shared among all case instances. 
//As a result the total size of such instances is < than if you define methods in constructor; 
//There are tests that show how method definition via prototype decrease the total size of html page 
//and as a result a speed of its loading.
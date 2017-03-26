// Implement a map type functionality and push the elements into new array
// after multiplying it by 2

// lets defined an array on which newMap will iterate 

var no_cars = ["3","5","6","8"]

function multiply(i){
	return i * 2;
}
var no_cars_new  = [];
Array.prototype.newMap = function(arg){
	//console.log();
	for(var i = 0; i < no_cars.length; i++){
		no_cars_new.push(arg(no_cars[i]));
	}
}

// now call a function
no_cars.newMap(multiply);
console.log(no_cars_new);

//somearray.map(()=>{
	// () // this is a function which runs inside map
 //})
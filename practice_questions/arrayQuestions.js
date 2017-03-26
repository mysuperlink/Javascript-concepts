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

//SORTING ALGORITHM......................



// BUBLE SORT [Ascending array] in one array with module patten example or closure
// Sort an Array ascending order in IIFE
var myIife  = (function(){
	var sort_item = ["4", "2", "5", "1"];

	var sortAscending = function(){
  		for(var k = 0; k < sort_item.length; k++ ){
			for(var m = 0; m < sort_item.length; m++){
				if(sort_item[m] > sort_item[m + 1]){
				var temp = sort_item[m];  // 4
				sort_item[m] = sort_item[m + 1]; // 2
				sort_item[m+1] = temp;
				}
				
			}
		}
      	return sort_item;
	}
    return {
      test : sortAscending
    }
})()
console.log(myIife.test()); // [1,2,4,5]



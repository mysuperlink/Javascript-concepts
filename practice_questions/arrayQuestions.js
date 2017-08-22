 // Implement a map type functionality and push the elements into new array
// after multiplying it by 2
Go to geekforgeeks for best questions
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
var myIIfe  = (function(){
	var sort_item = ["4", "2", "5", "1"];

	var sortAscending = function(){
  		for(var k = 0; k < sort_item.length; k++ ){
			for(var m = 0; m < sort_item.length-1; m++){
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
      accessKey : sortAscending
    }
})()
console.log(myIIfe.accessKey()); // [1,2,4,5]


// Ascending order
var someArray = [2,8,5,0,13,3]
function ascendingSort(){
  for(var i =0; i<someArray.length; i++){
    for(var k=0; k <someArray.length; k++){
       if(someArray[i] > someArray[k]){
         //num = someArray[k];
         var temp = someArray[i]
         someArray[i] = someArray[k];
         someArray[k] = temp;
       }
    }
   
    
  }
}

ascendingSort();
console.log(someArray)
// Find second largest element in array
console.log(someArray[1])


// SELECTION SORT [Ascending array] 
// var sort_item = ["4", "2", "5", "1"]; //[2,4,5,1]
// function selectionSort(){
// 	for(var k = 0; k < sort_item.length; k++){
// 		var min = sort_item[k];  // 4
//         var index = k;
//       console.log(sort_item)
// 		for(var m = 0; m < sort_item.length; m++){
// 			if(sort_item[index] > sort_item[m]){
//                 //var d = sort_item[k]
// 				sort_item[index] = sort_item[m]; // 2
// 				sort_item[m] = min;
//                 index = m;
//                // min = sort_item[m];
//                 //index = m;
// 			}
        
// 		}
//       console.log(k)
//         console.log(sort_item)
		
// 	}
// }
// // [2,4,5,1]
// selectionSort();
// console.log(sort_item)

// Remove Duplicates in an array

var dupArray  = [2,6,7,5,2,8,6];
var someObj = {}
function dupArrayFn(){
	for(let k = 0; k < dupArray.length; k ++){
		if(!someObj.hasOwnProperty(dupArray[k])){
			someObj[dupArray[k]] = dupArray[k];
		}else{
			dupArray.splice(k, 1);
		}
	}
	
}
dupArrayFn();
console.log(dupArray);

// Find index of the element in array

var simpleArray = [3,4,5,7,9, "A", "C"];

var indexValue = null;

Array.prototype.newIndexOf = function(arg){
  for(let k = 0; k < simpleArray.length; k++){
    if(simpleArray[k] == arg){
      indexValue = k;
    }
  }
}

simpleArray.newIndexOf("A")
console.log(indexValue);

//OR BETTER WAY
function indexFoundFn(a){
  for(var i =0; i<simpleArray.length; i++){
    if(a == simpleArray[i]){
      return i;
    }
  }
}
var indexFound;
Array.prototype.newIndex = function(arg, arg1){
  indexFound = arg(arg1);
}

simpleArray.newIndex(indexFoundFn, 5)

//Find missing elements in array
var someArray = [2,8,5,0,13,3]
function findMissingElementInArray(){
  // sum of elements in array
  // lets say 2+8+5+0+13+3 == 31
  // lets say 5 is out
  // 31 - [2+8+0+13+3] = 31-26 = 5 
  // 
}

// Find the longest matching string 
var string = "aabbbccdddddeeefff" // dddd is the longest
var maxCount = 0, stringMatch;
function perform(){
  var split = string.split("");
  for(var i =0; i <split.length; i++){
    var charCount = 0, stringConcat="";
    for(var k=0; k<split.length - 1; k++){
      if(split[i] == split[k]){
        charCount = charCount + 1
        stringConcat += split[i]
      }else{
      }
    }
    if(charCount > maxCount){
      maxCount = charCount;
      stringMatch = stringConcat;
    }
  }
}
perform(string)
// Largest element in ARRAY....
var num = someArray[0];
function largestElemInArray(){
  for(var i =0; i<someArray.length; i++){
    for(var k=0; k <someArray.length; k++){
       if(num < someArray[k]){
         num = someArray[k];
       }
    }
   
    
  }
}

largestElemInArray();

// Program for array rotation by 2;

// Let us take the same example arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2
// Rotate arr[] by one 2 times
// We get [2, 3, 4, 5, 6, 7, 1] after first rotation and [ 3, 4, 5, 6, 7, 1, 2] after second rotation.

Array.prototype.rotateArray = function(){
  console.log(this);
  let newArr = [];
  let lastIdx = this.length - 1;
  if(this instanceof Array){
    let arr = this.length;
    for(let i = 0; i < 2; i++){

      for(let i = 0; i< arr.length; i++){
        let temp = this.length[0]
        newArr.push(this.length[i+1])
      }
      arr = newArr;

    }
  }
}
var arrayData = [1,2,3,4,5,6,7];
arrayData.rotateArray();

// Given an array of integers to find out the numbers which is equal to the sum X
// First of sort array in ascending order.

var c = [1,4,5,6,7];
var sum = 8;
var p1 = 0;
var p2 = c.length - 1;
function test(){
for(let i = 0; i<c.length; i++){
  
  if(c[p1] + c[p2] == sum){
    console.log(p1,p2);
    break;
  }else{
    if(c[p1]+ c[p2] < sum){
      p1 = i+1;
    }else if(c[p1] + c[p2] > sum){
      p2 = p2 - 1;
    }
  }

}
 
}
test();



// Loop over dynamic keys which you dont know how many it can be
  var a = {a: {b: {c:{

  }}}}




Module Pattern 

//A module is an important piece of a robust application. To implement this pattern there are various ways defined

	//Object Literal Pattern 
	//In this pattern you defined keys of the object and access the properties 
		
//Example
	var makeCar = {
		name : “BMW”,
		getCarName : function(){
			return this.name; 
		} 
	};
makeCar.getCarName();      // BMW

//Module Pattern 
//The module can also be implemented by IIFE . I will explain this via example 
	
//Example
	var makeCar = (function(){
		var counter = 0;
		return {
			incrementValue  : 1,
			increaseCounter : function(){
				counter = counter + 1;
			}
		}
	})();  
	makeCar.increaseCounter()    // 1

// Note : Above example is also can be put for closures as we have counter as private variable only available to private functions

//Example
	var makeCar = (function(){
		var counter = 0;
		function  resetCounterPrivateFn(){
			counter = 0;
		} 
		return {
			incrementValue  : 1,
			increaseCounter : function(){
				counter = counter + 1;
			},
			resetCounter : resetCounterPrivateFn
		}
	})();  
	makeCar.increaseCounter()    // 1
	makeCar.resetCounter()    // 0

// Note: the above example also tells us the concept of private functions “resetCounterPrivateFn” is the private function

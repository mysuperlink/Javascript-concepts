// Singleton Pattern 
// Singleton pattern is based on the concept of single instance. I will explain with the example below
//Example
	var  makeCar = (function(){
		var instance ;
		function init(){
				//all fn’s are defined inside init and return via getInstance
			function showCarName(){
				console.log("BMW");
			}
			function showCarValue(){
				console.log("10000$");
			}
			return{
				carName : showCarName,
				carValue : showCarValue
			}
		}
		return {
			getInstance : function(){
				instance = init();
				return instance;
			}
		}
 
})()
makeCar.getInstance();
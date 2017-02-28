//IIFE - Immediately invoked functional expressions
//We create and use functional expressions all the time!

//create a function that takes a name in console logs "Hello " + name

var greeting = function(name){
	console.log("Hello " + name);
}(); //()notifies Javascript to immediatley run this function when the application is started

var printValue = (function(value) {
	console.log(value);
})(18928); //Placing a value within the parenthesis
/*1: FUNCTION INVOCATION  */
/*
Return method is a function and therefore you can use it as you would a function.
To invoke a function, simply call it like this: plus1(); plus2();
 */

//Function Declarations
function plus1(a,b){
	return(a+b);
}

//Definition expression = Function literal = Anonymous function
//an expression that defines an unnamed function.
var plus2 = function(a,b){
	return(a+b);
};

console.log(plus1(3,5));		//8
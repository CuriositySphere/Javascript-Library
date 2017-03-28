// typeof operand
// operand is an expression representing the object or primitive whose value is to be returned

// types: undefined, obj, boolean, number, string, function, object, implementation-dependent

// examples:
console.log(typeof(37));					//number
console.log(typeof("Morgan"));				//string
console.log(typeof(""));					//string
console.log(typeof(true));					//boolean
console.log(typeof(Symbol));				//function
console.log(typeof(undeclaredVariable));	//undefined
console.log(typeof([1, 2, 3]));				//object 
console.log(typeof(new Date()));			//object
console.log(typeof(Math.random));			//function
// .apply lets you invoke a function with arguments as an array
// fun.apply(thisArg, [argsArray])
// you can use an array literal - fun.apply(this,["eat", "bananas"]) - or an array object - fun.apply(this, new Array("eat", "bananas"))
var numbers = [7, 9, 2, 8, 5];

var max = Math.max.apply(null, numbers);
console.log(max);			//9

var min = Math.min.apply(null, numbers);
console.log(min);			//2	


// .call requires all parameters be listed by itself
// fun.call(thisArg[, arg1[, arg2[, ...]]])
var myObject;
function myFunction(a, b) {
	return a*b;
}
myObject = myFunction.call(myObject, 10, 2);
console.log(myObject);			//20

// A for array --- C for comma
// they are very similar - their difference lies in the types of arguments they accept
var intArray = [6, 2, 5, 8, 10];
console.log(intArray);

intArray.sort();
//This puts 10 in first because of the 1. Not good.
//This turns the numbers to strings first and compares.
console.log(intArray);

// this will iterate over the array as many times as needed until they are all sorted
intArray.sort(function(a, b){
	return a-b;
});
console.log(intArray);

//How this works:
//  6-2 = 4 - if it's a (+) number, put b first
//  2-6 = -4 - if it's a (-) number, put a first

//Sorting a mixed array
var mixedArray = ['aa', 'bb', 'a', 'c', 'cc', 3, 4, 10];
mixedArray.sort();
console.log(mixedArray);
// numbers will come first when sorting a mixed array


mixedArray.sort(function(a, b){
	// if a&b are the same type and they are equal value
	// don't do anything, they don't need to be sorted
	// return 0 means neither index is changed
	if(a===b){
		return 0;
	}
	// if a&b are the same type, we can sort those together
	if(typeof a=== typeof b){
		// if a is less than b, move the index -1, but if a > b, move a's index 1
		return a < b ? -1 : 1;		//this is called ternary conditional
									// condition ? expr1 : expr2
									// condition is an expression that will evaluate true or false
									// if true, expr1 is returned
									// if false, expr2 is returned
	}
	// if none of the above conditions are true and the types don't match, moce one type
	// to one side and the other typw to the other side.
	return typeof a < typeof b ? -1 : 1;
});

console.log(mixedArray);
// exceptions interfere with the normal flow of a program, but we can program to handle them.

// throw will interrupt the execution of a function
// it should be gien an exception object containing a name that identifies the type of exception
// and a descriptive message - both will be in the console
var add = function(a, b) {
	if (typeof a !=="number" || typeof b !== "number") {
		throw {
			name: "TypeError",
			message: "add needs numbers"
		};
	}
	return a + b;
};

console.log(add(5,2));		//7
// console.log(add(seven, 9));	//TypeError

// if an exception is thrown within a try block, control will go to its catch clause
var try_it = function() {
	try {
		add("seven");
	} catch (e) {
		console.log(e.name + ": " + e.message);
	}
};

try_it();		//TypeError: add needs numbers
// whatn a function obj is created, the Function constructor that produces the function obj runs code like this:
this.prototype = { 
	constructor: this 
};

// the new function obj is given a prototype property whose value is an obj containing a constructor property whose 
// value is the new function obj
// Every function gets a prototype obj b/c JS does not provide a way of determining which functions are intended 
// to be used as constructors.  The constructor property is not useful - the prorotype obj is the important one

// if the new operator is a method instead of an operator, it looks like this:
// Function.method('new', function() {
// 	// create a new obj that inherits from the constructor's prototype
// 	var that = Object.create(this.prototype);

// 	// invoke the constructor, binding -this- to the new obj
// 	var other = this.apply(that, arguments);

// 	// if its return value isn't an obj, substitute the new obj
// 	return (typeof other === "object" && other) || that;
// });

// we can define a constructor and augment its prototype
var Mammal = function (name) {
	this.name = name;
};

Mammal.prototype.get_name = function() {
	return this.name;
};

Mammal.prototype.says = function() {
	return this.saying || "";
};

// now we can make an instance
var myMammal = new Mammal("Herb the Mammal");
var name = myMammal.get_name(); 	
console.log(myMammal.get_name());

// we can make another pseudoclass that inherits from MAmmal by defining its constructor function and replacing
// its prototype with an instance of Mammal
var Cat = function(name) {
	this.name = name;
	this.saying = "meow";
};

// replace Cat.prototype with a new instance of Mammal
Cat.prototype = new Mammal();

// augment the new prototype with purr and get_name methods
Cat.prototype.purr = function(n) {
	var i, s = "";
	for (i=0; i < n; i += 1) {
		if (s) {
			s+= "-";
		} s+= "r";
	}
	return s;
};
Cat.prototype.get_name = function() {
	return this.says() + " " + this.name + " " + this.says();
};

var myCat = new Cat("Henrietta");
var says = myCat.says();
var purr = myCat.purr(5);
var name = myCat.get_name();

console.log(says); //meow
console.log(purr); //r-r-r-r-r
console.log(name); //meow Henrietta meow

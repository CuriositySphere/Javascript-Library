/*------------------------------------------------------
3: CONSTRUCTOR INVOCATION */

//According to convention, constructor names should be capitalized.

var Calc = function() {
  var name, sign;
  return console.dir(this);
};

firstCalc = new Calc(); //You just invoked a function, yay!
firstCalc.name = "plus";
firstCalc.sign = "+";

secondCalc = new Calc();
secondCalc.name = "minus";
secondCalc.sign = "-";



var Cat = function() {
	var name, breed;
	return console.dir(this);
};

firstCat = new Cat();
firstCat.name = "Lily";
firstCat.breed = "DSH";
console.log(firstCat);

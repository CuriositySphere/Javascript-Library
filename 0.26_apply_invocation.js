/*------------------------------------------------------
4: CALL & APPLY INVOCATION */

/*
Indirect invocation
Define the value of this arguments
Control: this and arguments ("Call" passes a value, "Apply" passes an array)
*/

var calc = function(arg1,arg2) {
	console.log(arg1);
	console.log(arg2); 
	console.log(this); 
	console.log(this.minus); 
};

var doSomething = {plus: "+", minus: "-"};


calc.call(doSomething);  // undefined, undefined, {plus:"+", minus:"-"}, -
calc.call(doSomething,doSomething.plus); // +, undefined, {plus:"+", minus:"-"}, -
// .call (thisarg[, arg1[, arg2[...]]])  -- + is printed first because calc.call opens doSomething obj as thisarg, then 
// do something.plus is regarded as arg1
calc.apply(doSomething, ['minus']); // minus, undefined, {plus:"+",minus:"-"}, -
// .apply works similarly to call and will pass in the function to the object doSomething with same parameters
// (thisarg[,arg1[,arg2[...]]])
calc.apply(doSomething, ['minus','plus']); // minus, plus, {plus:"+", minus:"-"}, -


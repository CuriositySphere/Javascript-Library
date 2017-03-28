var a = [1,2,3,4,5];
//Print out the array as it is
console.log(a);

//The join method makes a string from an array.
//Concatenates them all togetherwith a separator
//Example 1
var c = a.join();
console.log(c);


//to take out the separtor, join with an empty string
var d = a.join('');
console.log(d);

// it also works for strings
var first = ["words", "without", "spaces"];
console.log(first);

var second = first.join();
console.log(second);

var third = first.join("");
console.log(third);
//Shift removes teh first element from an array
//returns it

var a = [1, 2, 3, 4, 5, 6];
console.log(a);

var b = a.shift();
console.log(b);

//Now 1 is gone from the array.
console.log(a);

var c = a.shift();
console.log(c);

// it also works with strings
var cats = ["Lily", "Monster", "Kaylie", "Ziva", "Luna"];
var x = cats.shift();
console.log(x);
console.log(cats);
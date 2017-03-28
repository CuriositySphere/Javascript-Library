//Notice the hole this leaves
var deleteNumberDemo = [1,2,3,4,5,6];
delete deleteNumberDemo[2];
console.log(deleteNumberDemo);
// it only removes the number, but keeps the index 

//Notice how this moves it
var spliceNumberDemo = [1,2,3,4,5];
spliceNumberDemo.splice(2,1);
	//The first number picks the spot in the array.
	//The second number says how many numbers to delete.
console.log(spliceNumberDemo);
// this removes the index in its entirety


//Another splice example
var anotherSpliceExample = [1,2,3,4,5,6];
anotherSpliceExample.splice(2,4);
	//Start at the second ordinal. 
	//Delete the next four spots.
	//Push everything back.
console.log(anotherSpliceExample);

var yetAnotherSplice = [1,2,3,4,5,6];
yetAnotherSplice.splice(2,3);
console.log(yetAnotherSplice);  	//[1,2,6]
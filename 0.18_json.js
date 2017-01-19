//JSON is an acronym for JavaScript Object Notation
//advantage of having an object is you can add extra information to it
//
/*var names = ["Gavin", "Tony", "Aurora", "Lindsey", 72, true, false];*/
/*console.log(names[2])  //square brackets dive into the index, 0 gives the first result, 1 the 2nd , etc
console.log("------------------------------")*/

var names = [["James", "Paul", "Cameron", "Christ"], ["Morgan", "Julie", "Abbey", "Brie"]];
/*console.log(names[1][2])*/ ///find the array in index 0, and find the first value in that array , a nested array
	

//creating json first item
var items = [
	{
		"id": 1,
		"name": "Green Door",
		"price": 12.50,
		"tags": ["home", "green", "vinyl"]
	},

	{
		"id": 2,
		"name": "Red Door",
		"price": 12.50,
		"tags": ["home", "red", "cheap wood"]   
	},

	{
		"id": 3,
		"name": "Pink Door",
		"price": 12.50,
		"tags": ["home", "red", "cheap wood"]   
	},
];
/*console.log(items)   //calls the object
console.log("-----------------")
console.log(items[0]);  */    //calls from the array
for (var i = 0; i<items.length; i++){     //i is the loop control variable
	console.log(items[i].name)               //successfull item list loop is successful, harhar
}
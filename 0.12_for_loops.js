// for (lcv = 0; lcv <10; lcv++) {
// 	console.log("Kenny G");
// }
//var lcv = 0;
//while (lcv <10) {
//	lcv++
//}
// console.log("--------------------------")
// var name = "Delicious";
// //console.log(name.length);
// for (lcv = 0; lcv < 9; lcv++) {
// 	console.log(name[lcv]);  //console.log(name[0]) and  then [this number is increased by one each time]
// }

var animal = "Norwegian Elkhound"
for (i = 0; i < animal.length; i++) {
	console.log(animal[i]);
}

//JSON

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


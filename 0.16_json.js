//JSON is an acronym for JavaScript Object Notation
//benefit to objects is they can contain properties

//Nested arrays
var names = [["James", "Paul","Cameron", "Chris" ],["Morgan", "Julie", "Abbey", "Brie"]];
console.log(names [0][0]);
//The console log will pull the 

//{} creating an object [] creating an array
//meta tag is a way to describe 


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
	"tags": ["home", "green", "vinyl"]
	}
];
console.log(items[0].tags[1]);

//create a loop that console logs each object's name

for (i = 0; i<items.length; i++){
	console.log(items[i].name);
}

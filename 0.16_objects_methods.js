/// object literals with methods
//functions inside of an object.

var player = {
	//properties
	name		: "",
	life		:100,
	damage		: 0,


	//Methods
	challenge : function(){
			console.log(this.name + " says , " + "Would anyone care to fight????");
		},
	challengeaccept : function(){
		console.log(this.name + " says , " + "Where are the dps? Healer is being focused down. Tank is afk getting doritos.")	
	},
	attack : function(){
		console.log("Yes I would like to fight!");
	}		


var melkor = Object.create(player);
melkor.name = "Melkor";

var miley = Object.create(player);
miley.name = "Miley" ;

// console.log(melkor.name);
// console.log(miley.name);

//access properties
melkor.challenge();


miley.challengeaccept();
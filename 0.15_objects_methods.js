//Object Literals with methods
//Methods are functions inside and object

var player = {
	//Properties
	name		: "",
	life		: 100,
	damage	: 0, 

	//Methods
			//This 
	challenge	: function(){
		console.log(this.name + " would anyone care to fight?");
	},
	response	: function(){
		console.log(this.name + " yes, I would like to fight!");
	},
	fight		:function(){
		console.log(this.name + " let's rumble");
	},
	attack		: function(target){
		console.log(this.name + "you will go down " + target.name);
	}
}

var melkor = Object.create(player); //To create another object i.e. numerous players.
melkor.name = "Melkor";

var miley = Object.create(player);
miley.name = "Miley";


console.log(melkor.name);
console.log(miley.name);


//Access methods
melkor.challenge();
miley.response();

var newplayer1 = Object.create(player);
newplayer1.name = "Sam";
var newplayer2 = Object.create(player);
newplayer2.name = "John";
var newplayer3 = Object.create(player);
newplayer3.name = "Jane";

newplayer1.response();
newplayer2.response();
newplayer3.response();
newplayer1.challenge();
miley.attack(melkor)
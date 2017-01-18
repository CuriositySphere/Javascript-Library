//Empty Object
var emptyObject = {

};
//Object with Properties
var facebookFriend = {
	name	: "",
	age		: 0,
	vocation: "",
	inRelationship :true
};

facebookFriend.name = "Jona";
console.log(facebookFriend.name);

facebookFriend.age = 40;
console.log(facebookFriend.age);
console.log(facebookFriend.name + " just turned " + facebookFriend.age + ".")

facebookFriend.inRelationship = true;





if(facebookFriend.inRelationship){
	console.log(facebookFriend.name + " is in a relationship");
}

facebookFriend.name = "Kenn"
console.log(facebookFriend.name);


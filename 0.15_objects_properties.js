//This is an object literal. The easiset way to create an object
//Empty Object
var  emptyObject = {};

//Object with Properties
var facebookFriend = {
	name		: "",   //Properties are separted by comma versus semi-colon
	age		: 0,
	vocation	: "",
	inRelationship	: true,
};

facebookFriend.name = "Jona"; // the . is giving you access to the property inside the oject
console.log(facebookFriend.name);

facebookFriend.age = 40;
facebookFriend.vocation = "Student";
facebookFriend.inRelationship = true;
console.log(facebookFriend.name + " just turned " + facebookFriend.age);

if (facebookFriend.inRelationship){
	console.log(facebookFriend.name + " is in a relationship");
}

var child = {
	name: "",
	age: 0,
	grade: 0,
	sports: ""
}

child.name = "Joeli";
child.age = 14;
child.grade = 9;
child.sports = "Softball, Volleyball"

var infor
console.log(child.name)
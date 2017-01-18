var age = 26;

if (age >= 21 && age < 25){
	console.log("You can drink");
}else if (age >= 18 && age < 21) {
	console.log("You can vote, but you can't drink");
}else if ( age >= 25) {
	console.log("You can rent a car")
}else {
	console.log("You can not drink")
}

if ( age >=21){
	console.log("You can drink");
}

if (age >= 18){
	console.log("You can vote")
}

if (age >= 25){
	console.log("You can rent a car")
}

var text;

var teamRating = prompt("On a scale of 1 to 5 , how do you feel your team did this season?");
switch(teamRating) {
  case "1":
    alert("Better luck next year!");
    break;
  case "2":
    alert("At least they tried y'know");
    break;
  case "3":
    alert("They did alright then");
    break;
  case "4":
  alert("Pretty good, maybe made the playoffs");
    break;
  case "5":
   alert("So ya think they'll make the superbowl?");
    break;
  default:
    alert("What?");
    break;
  
}
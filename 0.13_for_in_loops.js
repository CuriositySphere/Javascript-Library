// var footballTeam = "Falcons";
// //for (i = 0; i < footballTeam.length; i++)
// for (var letter in footballTeam) {
// 	console.log(footballTeam[letter]);
// }

//create a for in loop that prints each letter of your favorite show

var favoriteShow = "Vikings";
for (var letter in favoriteShow){
	console.log(favoriteShow[letter]);
}

//create a for in loop for your favorite food
//then can you count each vowel that occurse in that food
//1. we need a for in loops
//2. use a conditional to check if the letter at an index
//3. ? == "a" || "e" || "i" || "o" || "u"
//4. vowelCount = 0
var vowelCount = 0;
var favFood = "Turkey";
console.log(favFood.length);
for (letter in favFood) {
    if (favFood[letter].toLowerCase() === "a" || favFood[letter].toLowerCase() === "e" || favFood[letter].toLowerCase() === "i" || favFood[letter].toLowerCase() === "o" || favFood[letter].toLowerCase() === "u") {
        vowelCount++
    }
}
console.log("There are " + vowelCount + " vowels in " + favFood);

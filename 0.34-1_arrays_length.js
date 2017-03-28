var listOfHotPeppersEatenByContestants = [3, 4, 2, 10, 3, 5];

//Prints out the lenght of the array
console.log(listOfHotPeppersEatenByContestants.length);


listOfHotPeppersEatenByContestants[listOfHotPeppersEatenByContestants.length] = 12;  
// this adds 12 to the end because the index is found by listof....length

//You can append the array like this:
console.log(listOfHotPeppersEatenByContestants.length);
console.log(listOfHotPeppersEatenByContestants[6]);

console.log("");
//PUSH is easier though
listOfHotPeppersEatenByContestants.push(21);		// this also adds a number at the end of the array, but is much cleaner
console.log("7 is now the last spot: " + listOfHotPeppersEatenByContestants[7]);

console.log(listOfHotPeppersEatenByContestants.length);
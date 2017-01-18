//indexing
//to access the index we use [] and the index number inside of them
//DRY = Don't Repeat Yourself
//WET - Repeat Everything
var name = "Kenny G";
// console.log(name.length)
// console.log(name[0].toLowerCase() + name[1] + name[2] + name[3].toUpperCase() + name[4] + name[5] + name[6]);
// console.log(name[0])
// console.log(name[1])
// console.log(name[2])
// console.log(name[3])
// console.log(name[4])
// console.log(name[5])
// console.log(name[6])
var lcv = 0;  //loop control variable
while(lcv < 5) {   //conditional
	console.log(name.toUpperCase());
	lcv += 1; // THIS IS CRITICAL!!!! NO VAR LEADS TO INFINITY
}

console.log("-----------------");
//create a while loop that starts at zero and ends at 10
// this while loop should print each number of the lcv
// make yourl cv var count = 0
var count = 0
while(count <= 10) {
	console.log(count);
	count++; //++ is equal to count += 1             <<<< entire thing counts down
}
console.log("-----------------------")
var num = 10; //lcv but we named it num
while(num > 0) {
	console.log(num);
	num -= 1; //num --
}
console.log("----------------------")
var evenCount = 1;
while (evenCount < 20) {
	if (evenCount % 2 == 0) {
		console.log(evenCount + "Fizz")
	} else {
		console.log(evenCount + " is odd")
	}
	evenCount++;
}
console.log("--------------------------");
//create a while loop that will count to 50 by 5s
//use the lcv variable of countFive
var countFive = 0;
while (countFive <= 50) {
	if (countFive % 5 == 0) {
		console.log(countFive);
	}
	countFive++;
}

var countFive = 0;
while (countFive <= 50) {
	console.log(countFive);
}
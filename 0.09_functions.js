function hello(){
	return "Hello World"
}

hello();
//making a function with greeting 
// Challenge, create a personal greeting for 2 names
function greeting(name){
	var period = "."
	return "Good'ay " + name + period;
}

 var addGreeting = greeting("Paul") + ", how are you doing today";

 console.log(addGreeting);



// adding number to functions 
function printNumber(){
	console.log(1);
}

printNumber();

function sumNum(num1, num2){
	return num2 + num1;
}

function divNum(num1, num2){
	return num2 / num1;
}
console.log("****************************")
console.log(divNum(10,10))

function mulNum(num1, num2){
	return num2 * num1;
}

mulNum(5 , 5)

function subNum(num1, num2){
	return num2 - num1;
}

sumNum(1,4);

function calculatePriceIndiana(quantity, price){
	var tax = 0.07; 
	var totaltax = quantity * price * tax; 
	var totalPrice = totaltax + quantity * price;

	return totalPrice;
}

console.log(calculatePriceIndiana(17, 5))

// built in objects example
var today = new Date();
console.log(today.toDateString());


function checkOdd(num){
	if (num % 2 === 0){
		return "Yo dawg, this is even"          //code block within a code block
	}else{
		return "Naw dawg, it's odd"
	}
}	
console.log(checkOdd(13))

function divByThree(num){
	if (num % 3 === 0) {
		return "Yo dawg, " + num + "is divisible by 3"
	}else{
		return "Yo dawg, " + num + "is not divisible by 3"
 	}
}
console.log(divByThree(45))


function greeting(name){
	if (name == "Paul"){
		return "Hey man , looking good."
	} else if (name == "Jenn"){
		return "OMG HOW ARE YOU DOING TODAY!!!!"
	}else {
		return "don't talk to me I've coded all night >:("
	}
}

var addGreeting = greeting("Jenn");




// console.log("hello world")
// console.log("hello word")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")

setline();
function twoStrings(edgar, allen){
	return edgar + " " + allen 
}
console.log(twoStrings("nevermore", "nevermore"))
setline()
function billz(rent, water) {
	var billzTotal = rent + water
	return billzTotal 
}
console.log(billz(550,))
}
}
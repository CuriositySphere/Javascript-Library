var tired = false;
var hungry = true;

var isTrue = 1 === "1"; //=== evaluating not just the value but the type, double evaluates the type
var isFalse = 1 === "1";
console.log(isTrue)

var num3 = 3
var str3 = "3"

//		Operator 		Meaning
//		  ==            Equality -- makes sure the shit looks the same
//        ===           Strict Equality  -- makes sure its the exact same shit no variation
//       !=             Inequality -- makes sure the shit looks different
//       !==            Strict Inequality -- makes sure its completely different shit
//       >              Greater Than
//       >=             Greater than or Equal
//       <              Less than
//       <=             Less than or equal

//var num1 = 35
//var num2 = 34
//console.log( num1 != num2)
//console log says true


//var foo = true

//console.log(!foo)
// ! inverts variable

var isOn = true;
var isHot = true;

//1
if(isOn === true){
	console.log("This light is on, it's too bright dude.");
}

if (isOn) {
	console.log("Dude, turn that music off.");
}


/// &&=and
if (isOn && isHot){
	console.log("Dude, turn that music off.")
}

// || = or

if(isOn || isHot)
	console.log("Holy shit a fucking potato")

// ! = not
if(!isHot){
	console.log("It is not hot.")
}
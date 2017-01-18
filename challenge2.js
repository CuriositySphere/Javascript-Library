var currentage = 25 //current age
var maxage = 100 //estimated max age
var gpd = 4  // glasses per day
var remaininglife = maxage - currentage
var totaldays = remaininglife * 365 // number of years to calculate glasses for
var glassesneeded = (totaldays * gpd) //total number of glasses needed w/o leap years, which is 109500
var leapyear = (remaininglife/4) //determines how many leap year days//
var realtotal = (leapyear*4) //determines how many glasses from those leap year days which is 75
var okayactualtotalthistime = (glassesneeded+realtotal) //adds the leap year glasses to the total glasses
var part1 = ("You will need ") //first part of the sentence
var part2 = (" glasses of water to last the rest of your life") //second part of the sentence
console.log(part1 + okayactualtotalthistime + part2) //adds the string to either side of the total glasses
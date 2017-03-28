var prevDate = new Date(1871, 10, 25);
var futureDate = new Date(2105, 0, 1);
// date input is year, month index, date, hour, minute, seconds

console.log(prevDate);
console.log(futureDate);

var dateNow = new Date();		//this will default to today's date and time
var today = Date.now();

console.log(dateNow);
console.log(today);

console.log(today);
console.log(Date.now());
console.log(typeof(Date.now()));
// Date.now() shows the number of milliseconds since UNIX epoch (Jan1, 1970)

console.log(dateNow.getTime());  		//this also returns the number of milliseconds that has elapsed since UNIX epoch
console.log(dateNow.getDate());			//returns date
console.log(dateNow.getDay());			//returns day of the week
console.log(dateNow.getFullYear());		//returns year


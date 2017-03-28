console.log(this);		//will return empty obj
var myCar = {
	maxSpeed: 105,
	driver: "me",
	drive: function(speed, time) {
		console.log(speed * time / 45);
	},
	test: function() {
		console.log(this);		//
	}
};

myCar.drive(55, 60);
myCar.test();

var hisCar = new Object(myCar);
hisCar.maxSpeed = 50;
hisCar.driver = "him";
hisCar.test();
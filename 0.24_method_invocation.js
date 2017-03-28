/*------------------------------------------------------
2: METHOD INVOCATION */
/* 
+ The this argument points to the calc object. The binding of 
this happens at invocation time
+ Invoke the function using dot notation
*/

var calc={
  name: 'Plus',
  plus: function(a,b){
    return(
      console.log(this),
      console.log(arguments),
      console.log(a+b),
      console.log(this.name)
    );
  }
};
calc.plus(2,2);

var maths = {
	name: "Maths",
	product: function(a, b, c) {
		return(
			console.log(this), 	// { name: "Maths", product: [funcction: product]}
			console.log(a*b*c)
		);
	}
};
maths.product(5, 10, 3);
var helloArray = ['h', 'e', 'l','l','o'];
console.log(helloArray);

//the reverse method will put the array in reverse order
var reverseHelloArray = helloArray.reverse();
console.log(reverseHelloArray);

//Use the other methods that we've used to do other things
var joinRevHello = reverseHelloArray.join('');
console.log(joinRevHello);


//MORE PRACTICE
//Print name backwards...
var name = ['P','a','u','l'];
var revName = name.reverse().join('');
console.log(revName);

var me = ["m", "o", "r", "g", "a", "n"];
var revMe = me.reverse().join('');
console.log(revMe);

// it also works for numbers
var num = [1, 2, 3, 4, 5, 6];
var revNum = num.reverse();
console.log(revNum);
revNum = revNum.join('');
console.log(revNum);
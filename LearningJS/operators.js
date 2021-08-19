// Operators in Javascript


//**********************************************//

// Arithmetic Operators
// 1) Modulus Operator(%)
console.log(16 % 5);  //reminder is returned i.e. 1

// 2)  Increment Operator(++)
var x = 3;
console.log(++x);  //returns 4
console.log(x++);  //returns 4

// 3)  Decrement Operator(--)
var y = 4;
console.log(--y);  //returns 3
console.log(y--);  //returns 3

// 4)  Unary Operator(-)
var a = 10;
var b = -a;
console.log(b); // - infront of variable makes it negative


// **********************************************//

//Assignment Operators

//(Here) code works as mentioned in doc but if 4 print operations are executed one after another, then the new valur of a is used in next line

// var a = 20;
// var b = 10;

// console.log(a+=b);
// console.log(a-=b);
// console.log(a*=b);
// console.log(a/=b); This was supposed to be executed but it ran in another way.So, I have done them using function.Actually, I know a+=b is a=a+b so after each console, new value of a is used on next one.
 

function assign_op_1(){
    var a = 20;
    var b = 10;
    console.log(a+=b);

};
assign_op_1();

function assign_op_2(){
    var a = 20;
    var b = 10;
    console.log(a-=b);

};
assign_op_2();

function assign_op_3(){
    var a = 20;
    var b = 10;
    console.log(a*=b);

};
assign_op_3();

function assign_op_4(){
    var a = 20;
    var b = 10;
    console.log(a/=b);

};
assign_op_4();










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




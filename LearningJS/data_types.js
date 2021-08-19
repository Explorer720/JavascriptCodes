//Data Types concept is importnant for operating different things on JS as everything  is associated with some kind of data types.

let length = 16;                               // Number
let lastName = "Rooney";                      // String
let x = {firstName:"Mo", lastName:"Frank"};    // Object

console.log(typeof(length));
console.log(typeof(lastName));
console.log(typeof(x));

//Similar type of data types can be operated with each other
// 6 =9 work and "Ram " + "Sita" work but 6 +"Ram " doesnt work

console.log(6+9);
console.log("Ram "+ "Sita");   //string
// console.log("Ram " + 12) //Gives error

//In case of python, numbers are categorized into int , float and complex
// In javascript, its single number datatype

console.log(typeof(12));      //number
console.log(typeof(12.1212)); //number


console.log(5==12);  //boolean false
console.log(5!=12);  //boolean true  P.S :true and false all area small letters

//JavaScript arrays are written with square brackets.Array items are separated by commas.


const myarray = ['PulsarNS','Duke250','Royal Enfield Classic','Ducati'];

console.log(myarray);
console.log(typeof(myarray));

//JavaScript objects are written with curly braces {}.Object properties are written as name:value pairs, separated by commas.


myObject = {
    'name':'Binam',
    'age':20,
    'faculty':'BCA',
    'graduated':2025
}
console.log(myObject);
console.log(typeof(myObject));  //Object Data type 

const y = new Array(1,2,3);
console.log(typeof(y));



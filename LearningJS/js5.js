
// console.log("Hello\nHello\nHello");  //Escape Character ;Line Break

// function printNewArray(){
// 	console.log(Array[1,2,3,4,5,6]);
// }

// printNewArray();

// let array_1 = new Array(5);
// console.log(array_1);
// console.log(typeof(array_1));

// Arrays in Javascript
// const new_array = [1,2,3,4,5,"Ram",true,new Date()];
// console.log(new_array);

// console.log(new Date());
// console.log(new_array[0]);
// console.log(new_array[1]);
// console.log(new_array[2]);
// console.log(new_array[3]);
// console.log(new_array[4]);
// console.log(new_array[5]);
// console.log(new_array[6]);
// console.log(new_array[7]);
// console.log(new_array.sort());
// console.log(new_array.length);

// const fruits = ['Banana','Apple','Mango','Orange'];
// let flen = fruits.length;

// for(let i = 0;i<flen;i++){
// 	console.log(fruits);
// 	// console.log(i);
// }

// fruits.forEach(element => console.log(element));


// a = [2,4,3,5,6,3,2,4,6,.5,5,3,2,4,3,2,4,,4,4];
// console.log(a);

// b = a.sort();
// c = a.length;

// console.log(b);
// console.log(c);


// const phones = ['Apple', 'Vivo', 'Samsung', 'Xiaomi'];
// // const phones = new Array do the same, but above one is preferred


// phones[0] = "Changed";
// console.log(phones);
// console.log(Array.isArray(phones));

//Both creates empty array but first one is preferred
const new_array = ['NEP','IND','BAN','SL'];
// const new_array = new Array('NEP','IND','BAN','SL');

const a = new_array[0] //Accessing Array Elements

new_array[1] = 'CHI' //Changin Array Elements

//typeof() operator returns array as an object as array are special type of object with numberd index
console.log(Array.isArray(new_array)); //returns true

function hello(){
	return "Hello";} // array elemets can be functions, objects or even an array
const new_array2 = [hello(), new_array,new Date()];

console.log(new_array[0]); //Accessing First Element
console.log(new_array[new_array.length -1]); //Accessing Last Element

new_array.pop(); //Removes Last Element if not indexed
new_array.push("new"); //Add New Element to last if not indexed

console.log(new_array);

console.log(new_array.toString());








//ARRAY
//Both creates empty array but first one is preferred
const new_array = ['NEP','IND','BAN','SL',"USA","UK"];
// const new_array = new Array('NEP','IND','BAN','SL');

const a = new_array[0] //Accessing Array Elements

new_array[1] = 'CHI' //Changing Array Elements

//typeof() operator returns array as an object as array are special type of object with numberd index
console.log(Array.isArray(new_array)); //returns true

function hello(){
	return "Hello";} // array elemets can be functions, objects or even an array
const new_array2 = [hello(), new_array,new Date()];


console.log(new_array[0]); //Accessing First Element
console.log(new_array[new_array.length -1]); //Accessing Last Element


//METHODS
new_array.pop(); //Removes Last Element if not indexed and can return it
new_array.shift();  //Removes from beginning and can return it/Indexing is reset
//delete new_array[0] also removes elements but leaves undefined holes 
//splice method's parameter can be set to remove element without creating holes
new_array.splice(2,1); //Removes third element(only one)

new_array.push("BHU"); //Add New Element to last if not indexed
new_array.unshift("PAK"); //Add New Element to first if not indexed

new_array.toString(); //Converts Array to String(with comma seperator)
new_array.join("*"); //Converts Array to String with specified seperator

new_array.splice(0,0,'AUS','NZ'); //1st parameter defines the position, 2nd the no of elements to be removed and 3rd the elements
const sliced_array = new_array.slice(4); 
console.log(sliced_array);//new array is created from elements of new_array with index of 4 and greater

const x = [1,2,3];
const y = [4,5,6];
console.log(x.concat(y));//Two arrays are joined & new array is formed (old one still exists)
//Any number of arrays can be concatenated and even with values eg:(x.concat(y,10,"abc"))

console.log(new_array);
console.log(new_array.reverse()); //prints reversed array
console.log(new_array.sort()); //prints sorted/arranged array


//SORTING
//Sorting arranges strings in alphabetical order but in case of numbers, it takes them as string--
//--and compares only first number so at this: 4 is greater than 100 and 234 is samller than 78
const numbers = [13,98,100,4,5,78,234];
console.log(numbers.sort());
//So sorting along with this function gives exact ascending order
console.log(numbers.sort(function(a, b){return a - b}));
//it can be made descending by either reversing or changing function
console.log(numbers.sort(function(a, b){return b - a}));
console.log(numbers.sort(function(a, b){return a - b}).reverse());
//random order
console.log(numbers.sort(function(a, b){return 0.5 - Math.random()}));


//Finding Maximum & Minimum
//After the number is sorted in ascending order, max and min can be accessed as:
ascending_order = numbers.sort(function(a, b){return a - b});
console.log(ascending_order[0]); //min
console.log(ascending_order[ascending_order.length -1]); //max

// Math.max() and Math.min() can also be used for same
function myArrayMax(arr) {
  console.log(Math.min.apply(null, arr));
  console.log(Math.max.apply(null, arr));
}
myArrayMax(numbers);

//Home Made Function for finding max
// function myArrayMaxMin(arr) {
//   let len = arr.length;
//   let max = -Infinity;
//   let min = -Infinity;
//   while (len--) {
//     if (arr[len] > max) {
//       max = arr[len];
//     }
//   }
//   while (len--) {
//     if (arr[len] < min) {
//       min = arr[len];
//     }
//   }
//   console.log(max);
//   console.log(min);
// }
// myArrayMaxMin(numbers);

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + "<br>";
}
myFunction();


















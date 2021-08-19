// // Arrow Function
// abc = (a,b) => {console.log(a+b);};
// abc(2,3);

const numbers = [1,2,3,78,98,43];
const new_numbers = numbers.filter(my_function);

function my_function(numbers){
	return numbers <10;
}
console.log(new_numbers);
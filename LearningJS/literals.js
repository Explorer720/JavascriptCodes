// Array Literals 
// In javascript, array literals is the list of expression which represent an array element enclosed inside a square bracket

var car_brand = ['Ferrari','Lamborghini','Audi']

console.log(car_brand);
// It will print the array literals value
console.log(car_brand[0])
// It will print first arrary element i.e. 'Ferrari' of car_brand array iliteral


// Booleans
// booleans has two values -- true and false


// if the var name is true and true condition is mentioned , it executes
var isArray = true;
if (isArray) {
console.log('The var name is true, so its executed in Result');
}


// if the var name is false and false condition is mentioned , it doesnt  executes
// empty srtrings '', 0 number , null and undefined are flase
var myName = '';
if(myName){
    console.log("The var name is false, so it isnt executed");
}


// Object Literals
// pair of comma seperated list of property name associated with their values and enclosed inside a curly braces

var students = {
    student_name : 'Loki Laufison',
    student_address : 'Multiverse',
    studnet_gender : 'Fluid',
    studnet_glorious_purpose : {
        purpose_1 : 'The Truth of TVA',
        purpose_2 : 'King of Asgard',
        purpose_3 : 'Winning Battle of NewYork'
    },
    student_travel_history : {
        place1 : 'Lamentis',
        place2 : 'The Void',
        place3 : 'Mongolia'
    },
    student_love_interest : "Sylvie"
};

console.log(students.student_travel_history.place1);
// Lamentis

console.log(typeof(students));
// object

console.log('This is : ' + students.student_name +'.'+"He has been to "+ students.student_travel_history.place1 +','+ students.student_travel_history.place2 + ' and ' + students.student_travel_history.place3);
// This is : Loki Laufison.He has been to Lamentis,The Void and Mongolia
// .It works in this way


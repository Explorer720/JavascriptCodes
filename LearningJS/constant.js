// The const keyword was introduced in ES6 (2015).

// Variables defined with const cannot be Redeclared.

// Variables defined with const cannot be Reassigned.

// Variables defined with const have Block Scope.

// Cannot be Reassigned
// A const variable cannot be reassigned:

// Example
// const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error
// Must be Assigned
// JavaScript const variables must be assigned a value when they are declared:

// Correct
const PI = 3.14159265359;
// Incorrect
// const PI;
// PI = 3.14159265359;
// As a general rule, always declare a variables with const unless you know that the value will change.

// Always use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExpWhen to use JavaScript const?

// Constant Objects and Arrays
// The keyword const is a little misleading.

// It does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:

// Reassign a constant value
// Reassign a constant array
// Reassign a constant object
// But you CAN:

// Change a constant array
// Change a constant object
// Constant Arrays
// You can change the elements of a constant array:

// Example
// You can create a constant array:
const carss = ["Saab", "Volvo", "BMW"];

// You can change an element:
carss[0] = "Toyota";

// You can add an element:
carss.push("Audi");
// But you can NOT reassign the array:

// Example
const cars = ["Saab", "Volvo", "BMW"];

// cars = ["Toyota", "Volvo", "Audi"];    // ERROR
// Constant Objects
// You can change the properties of a constant object:

// Example
// You can create a const object:
const carr = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
carr.color = "red";

// You can add a property:
carr.owner = "Johnson";
// But you can NOT reassign the object:

// Example
const car = {type:"Fiat", model:"500", color:"white"};

// car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR


//
//Object in real life:
// Mobile Phone

// ******************
// **              **
// **              **
// **              **
// **              **
// **              **
// **              **
// **              **
// **              **
// **              **
// **              **
// ******************
// ******************

// If mobile is an object it has different properties and values.
//properties with values
// mobile.brand = "Apple"
// mobile.model = "iPhone 12 Pro"
// mobile.color = "Light Orange"
// mobile.weight = "230 gram"
// // All mobiles have same properties but different values

// It also have some methods such as:
//  mobile.boot()
//  mobile.call()
//  mobile.clickPhoto()
//  mobile.trackLocation()
// //All mobiles have same methods but works in different time and different way


//Javascript objects also work in same way
// Objects can be considerd as kind= of varibale but it can store many values

const mobile = {
    brand:"Apple",
    model:"Iphone X",
    storage: "256 GB",
    color_variant:{
        color1:"red",
        color2:"black"
    },
    price: "$1000"
}

console.log(mobile);

//accessing object properties
//way1

console.log(mobile.brand);
console.log(mobile.price);

//way2
console.log(mobile["brand"]);
console.log(mobile["price"]);


// Objects can also have methods.Methods are actions that can be performed on objects.Methods are stored in properties as function definitions.


// const User1 = {
//     firstName : "Binam",
//     lastName : "karki",
//     fullname : function(){return this.firstName +""+ this.fullname;},
    
// }

// console.log(User1.fullname());

const person = {
    firstName: "Sam",
    lastName : "Li",
    id       : 58766,
    fullName : function() {
      console.log (this.firstName + " " + this.lastName);
    }
  };

a = person.fullName();
console.log(a);
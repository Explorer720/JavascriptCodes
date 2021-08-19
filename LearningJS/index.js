// function find_greater(var a,var b){
//     if a > b{
//     console.log(a is greatest);
//     }
//     else{
//     console.log(b is greatest);
//     }


// };

// function a(x,y){
//     console.log((x+y)/2);
// }

// a(100,500);

// var a = 20;
// var b = 10;
// console.log(a);
// console.log(b);
// console.log(a & b);


//{ let a = 10;

// let a = 20;

// console.log(a);-- If same variable is let with two values via let, it is syntax error but by var it workd and recent value is called}

// var a = "Binam";

// var a = "Karki";

// console.log(a);


// if a variable is declared inside a block{} using let or const it cannot be accessed form outisde the block but if the variable is declared using var it can be accessed form outside
// {
//     let a = 12;
    
// }

// console.log(a);  //error(not declared)

// {
//     const a = 12;
    
// }
// console.log(a); //error(not declared)

// {
//     var a = 12; 
    
// }
// console.log(a);

// const cars = ['Audi','BMW','Bugati'];
// console.log(cars);
// console.log(cars[2]);

// cars.push("Lambo");
// console.log(cars);

// console.log(3**2);

// {var x = 5;}
// console.log(x+=5);

// console.log(5|1)
// console.log(~5)


// let x;

// x = 1;
// x = "John";

// console.log(x);

// console.log(typeof(true));


// class User{

// }

// class Menu{

// }

// function Hello(){
    
// }




// document


// console.log(Math.random());
// console.log(Math.random() * (10-1) + 1);
// console.log(Math.floor(5.389)); // 5
// console.log(Math.ceil(5.9)); // 5

// // input from the user
// const min = parseInt("Enter a min value: ");
// const max = parseInt("Enter a max value: ");

// // generating a random number
// const a = Math.floor(Math.random() * (max - min + 1)) + min;

// // display a random number
// console.log(`Random value between ${min} and ${max} is ${a}`);

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name ? ", function saveInput(name) {
  console.log(`His name is ${name}`);
  rl.close();
});

rl.on("close", function saveInput() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
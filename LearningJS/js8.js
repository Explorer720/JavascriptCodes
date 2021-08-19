const x = 10;
//Comparison
(x == 10); (x == '10'); //true
(x == 5); (x === '10'); //false
(x < 10); (x > 10); //false
(x <= 10); (x >= 10); //true 
(x !== '10'); (x != 5); //true
(x !== 10); //false

//Logical
(x == 10 && x != 5) //true
(x == 10 && x != 10) //false
(x == 10 || x != 5) //true
(!(x == 5)) //true
(!(x == 10)) //false

 //Tenary
age = 17
let voteable = (age < 18) ? "Too young":"Old enough";
console.log(voteable) //Too Young











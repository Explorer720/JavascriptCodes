var my_name = "Binam"
// This is global variable as it is not mentioned under any function or class
// It can be used in any function and be modified from any function

// Lets make a function
function func_my_name(){
    var my_name = "Explorer"
    console.log(my_name)
}

// calling a function
func_my_name();
// It will print "Explorer " as global variable is modified insode the function

// printing global variable
console.log(my_name);
// It will print "Binam" as it is outside local scope But if we declared varibale inside the function without var in front it will affect global variable and result of console.log(variable) will be the same modified in function.



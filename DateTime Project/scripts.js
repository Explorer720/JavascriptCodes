var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']; //array of days
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] //array of months
var date = new Date(); //creating Date object
var currentDay = days[date.getDay()]; //determining day using the array and method 
var currentMonth = months[date.getMonth()]; //determining month using the array and method
var currentDate = date.getDate(); //current date
var currentYear = date.getFullYear(); //current year
document.getElementById('date').innerHTML = "Current Date: " + currentDay + ", " + currentMonth + " " + currentDate + ", " + currentYear + "<br>";

var hrs = date.getHours(), min = date.getMinutes(); //current time (hours and minutes)
var suffix = 'AM';

if(hrs >= 12){
  hrs -= 12;
  suffix = 'PM';
}
if(hrs < 10){
  hrs = "0" + hrs;
}
if(min < 10){
  min = "0" + min;
}
document.getElementById('time').innerHTML = "Current Time: " + hrs + ": " + min + " " + suffix + "</br>";
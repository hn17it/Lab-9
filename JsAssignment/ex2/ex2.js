
function calculateAge(){
var age  = prompt("Enter Your Age.");
var d = new Date();
var n = d.getFullYear();

	var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    birthYear =  currentYear- age;
  document.getElementById("age").innerHTML =  birthYear;
}
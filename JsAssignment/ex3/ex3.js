function sum() {
    var num1  = parseInt(document.getElementById("number1").value);
    var num2  = parseInt(document.getElementById("number2").value);
    console.log(num1);
    if(!(num1)){
        alert("Please enter number 1");

    }
    if(!(num2)) {
        alert("Please enter number 2");
    }

    else {
    var sum  = num1 +num2;

    document.getElementById("output").innerHTML =  sum;}
}
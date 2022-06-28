//Q1
var input = +prompt("Enter Positive Integer");
if (input < 1) {
    alert("Enter positive number only");

}
else {
    document.write("Number=" + input);
    document.write("<br>");
    var round = Math.round(input);
    document.write("Round off value=" + round);
    document.write("<br>");
    var floor = Math.floor(input);
    document.write("Floor value=" + floor);
    document.write("<br>");
    var ceil = Math.ceil(input);
    document.write("Ciel value=" + ceil);
}
//Q2
var input = +prompt("Enter Negative Floating point Number");
if (input > 1) {
    alert("Enter Negative number only");

}
else {
    document.write("Number=" + input);
    document.write("<br>");
    var round = Math.round(input);
    document.write("Round off value=" + round);
    document.write("<br>");
    var floor = Math.floor(input);
    document.write("Floor value=" + floor);
    document.write("<br>");
    var ceil = Math.ceil(input);
    document.write("Ciel value=" + ceil);
}
//Q3
var input = +prompt("Enter Negative Number");
if (input > 1) {
    alert("Enter Negative Number Only");
}
else {
    var abs = Math.abs(input);
    alert("Absolute value of" + input + "=" + abs);
}
//Q4
var num = Math.floor(Math.random() * 6) + 1;
document.write("Dice Value=" + num);
//Q5
var num = Math.floor(Math.random() * 2) + 1;
if (num === 1) {
    document.write(num);
    document.write("<br>");
    document.write("Random Coin Value=Tails")
}
else {
    document.write(num);
    document.write("<br>");

    document.write("Random Coin Value=Heads")
}
//Q6
var num = Math.floor(Math.random() * 100) + 1;

document.write("Random Number B/W 1-100=" + num);
//Q7
var weight = prompt("Enter Your Weight in kgs");
alert("Your Weight =" + parseFloat(weight) + "Kilograms");
//Q8
var num = Math.floor(Math.random() * 10) + 1;
var input = +prompt("Guess Number b/w 1-10");
if (input === num) {
    alert("Congrats Right Answer");
}
else {
    alert("Try Again!");
}



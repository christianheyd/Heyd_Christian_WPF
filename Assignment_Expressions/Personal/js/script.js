// JavaScript Document

//Paycheck Calculator
var hourlyRate = prompt("We are calculating total pay per hour. \nEnter hourly rate."); //Prompt for hourly pay rate.

var hoursWorked = prompt("Please enter number of hours worked in a 2 week period."); //Prompt for number of hours worked in pay period.

var taxRate = prompt("Please enter tax rate.") //Prompt for desired tax rate.

//Converting tax rate to a percentage
var taxPercent = taxRate / 100;

var preTax = hourlyRate * hoursWorked; //Calculation of pre-tax pay.

var postTax = preTax - (preTax * taxPercent); //Calculation of post-tax pay.

alert("Your paycheck totals to $" + preTax + " before federal taxes and $" + postTax + " after taxes."); //Alert displaying totalled pay before and after taxes.


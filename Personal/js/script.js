// JavaScript Document

//Paycheck Calculator
var hourlyRate = prompt("We are calculating total pay per hour. \nEnter hourly rate."); //Prompt for hourly pay rate.

var hoursWorked = prompt("Please enter number of hours worked in a 2 week period."); //Prompt for number of hours worked in pay period.

var preTax = hourlyRate * hoursWorked; //Calculation of pre-tax pay.

var federalTax = preTax - (preTax * .23); //Calculation of post-tax pay.

alert("Your paycheck totals to $" + preTax + " before federal taxes and $" + federalTax + " after taxes."); //Alert displaying totalled pay before and after taxes.


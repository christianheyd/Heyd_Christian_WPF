// JavaScript Document
// Christian Heyd
// May 30th, 2013
// Functions - Wacky

/* I'm currently writing this code at an airport and thought it'd be cool to calculate how full the plane is.*/

alert("How full is your plane?");

var planeSize = prompt("How many seats are on the plane?"); /*Prompts user for number of seats on plane.*/

var passengers = prompt("How many passengers are on the plane?"); /*Prompts user for number of passengers on plane.*/

function planePercent(p, s){
	/*The first var converts the values from the previous prompts into a decimal, while the second one turns the decimal 
	into a whole number for display in the console.*/
	var percent = p / s; 
	var convert = percent * 100;
	return convert;
}

var askPercentDisplay = prompt("Would you like to see percent full or empty? \nEnter 1 for full and 2 for empty."); /*Prompts user for which percent they
wish to view. It all depends on whether they're an optimist or a pessimist!*/

if(askPercentDisplay == "1"){/*if else statement for displaying proper percent.*/
	var fullPercent = planePercent(passengers, planeSize);
	console.log("The plane is " + fullPercent + " percent full!");
}else{
	var emptyPercent = planePercent(passengers, planeSize);
	var empty = 100 - emptyPercent;
	console.log("The plane is " + empty + " percent empty!");
}
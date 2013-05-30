// JavaScript Document
// Christian Heyd
// May 30th, 2013
// Functions - Wacky

/* I'm currently writing this code at an airport and thought it'd be cool to calculate how full the plane is.*/

alert("How full is your plane?");
var planeSize = prompt("How many seats are on the plane?");
console.log(planeSize);

var passengers = prompt("How many passengers are on the plane?");

function planePercent(p, s){
	var percent = p / s;
	var convert = percent * 100;
	return convert;
}

var askPercentDisplay = prompt("Would you like to see percent full or empty? \nEnter 1 for full and 2 for empty.");

if(askPercentDisplay == "1")
// JavaScript Document
// Christian Heyd
// May 28th, 2013
// Functions Worksheet

//Circumference

var radius = prompt("Please enter radius of the circle."); //prompts the user for the radius of the circle

function circumference(r){//function to calculate circumference
	var diameter = r * 2; //finds diameter of circle
	var circ = 3.14 * diameter; //calculates cicumference
	return circ; //returns circumference
};
	
var circLog = circumference(radius); //return variable for circumference
console.log("The circumference of your circle is " + circLog + " inches."); //prints circumference to console.

// Stung!

var weight = prompt("Please enter your weight in pounds to see how many bee stings are fatal."); //prompts the user for their weight

function sting(w){ //function to calculate how many bee stings are fatal
	var stingsFatal = 8.666666667 * w;
	return stingsFatal; //returns value for console
};

var ouch = sting(weight); //return variable for fatal stings
console.log("You can take no more than " + Math.round(ouch) + " bee stings!"); //prints fatal number to console
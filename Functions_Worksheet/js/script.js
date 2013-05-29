// JavaScript Document
// Christian Heyd
// May 28th, 2013
// Functions Worksheet

//Circumference

var radius = prompt("Please enter radius of the circle.");

function circumference(r){//function to calculate circumference
	var diameter = r * 2; //finds diameter of circle
	var circ = 3.14 * diameter; //calculates cicumference
	return circ; //returns circumference
};
	
var circLog = circumference(radius); //return variable for circumference
console.log(circLog); //prints circumference to console.

// Stung!

var weight = prompt("Please enter your weight to see how many beestings are fatal.");

function sting(w){
	var stingsFatal = 8.666666667 * w;
	return stingsFatal;
};

var ouch = sting(weight);

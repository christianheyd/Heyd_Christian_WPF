// JavaScript Document
/*
Christian Heyd
May 23, 2013
Assignment: Conditionals - Wacky

This script is based on something I was trying to do in the prior assignment, but
abandoned the idea because I couldn't do what I wanted to yet. I decided to start over and 
make it work.

Space Weights
*/

alert("How much would you weight on another planet?");
var weight = prompt("How much do you weigh on Earth?");
console.log(weight);

var heavenlyBody = prompt("Please select an object of the solar system from this list. Case sensitive! \n- The Sun \n- Mercury \n- Venus \n- The Moon \n- Mars \n- Jupiter \n- Saturn \n- Uranus \n- Neptune \n- Pluto");
console.log(heavenlyBody);

if(heavenlyBody == "The Sun"){
	var sunPound = 27.072;
	var sunEarthConvert = weight * sunPound;
	console.log("You would weigh " + sunEarthConvert + " pounds on the Sun!");
}else if(heavenlyBody == "Mercury"){
	var mercPound = 0.378;
	var mercConvert = weight * mercPound;
	console.log("You would weigh " + mercConvert + " pounds on Mercury!");
}else if(heavenlyBody == "Venus"){
	var venusPound = 0.907;	
	var venusConvert = weight * venusPound;
	console.log("You would weigh " + venusConvert + " pounds on Venus!");
}else{}
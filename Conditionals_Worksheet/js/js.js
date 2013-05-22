// JavaScript Document
// Christian Heyd
// Conditionals Worksheet
// May 19th, 2013

// Stuff Your Face I

console.log("Enter competitor weight!");

var weight = prompt("Enter competitor weight.");
console.log("Competitor weight: " + weight);


//If greater than 250, qualify for heavyweight division.

if(weight > 250){
	console.log("The competitor qualifies for the heavyweight division.");
	alert("The competitor qualifies for the heavyweight division.");
	
	}
	else{
	console.log("The competitor needs to gain some weight!");
	alert("The competitor needs to gain some weight!");
		
	};
	

	

	
	
//Temperature Converter

var temp = prompt("This will convert a temperature from Fahrenheit to Celsius, or vice versa.\nPlease enter the temperature.");
console.log(temp);

var tempSystem = prompt("Please enter C or F.");

if(tempSystem == "C"){
	var conversionC = temp  *  9/5 + 32;
	
	console.log("The temperature in Fahrenheit is " + conversionC + (" degrees."));	
}
if(tempSystem == "F"){
	var conversionF = (temp  -  32)  *  5/9;
	
	console.log("The temperature in Celsius is " + conversionF + (" degrees."));
};


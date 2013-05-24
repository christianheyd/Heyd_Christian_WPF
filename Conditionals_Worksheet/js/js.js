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

// Grade Letter Calculator

var grade = prompt("Please enter your grade.");
if(parseInt(grade) <= 69){
	console.log("You got " + grade + " percent, so you got an F! :(");
}else if(grade <= 72){
	console.log("You got " + grade + " percent, so you got a D!");
}else if(grade <= 75){
	console.log("You got " + grade + " percent, so you got a C!");
}else if(grade <= 79){
	console.log("You got " + grade + " percent, so you got a C+!");
}else if(grade <= 84){
	console.log("You got " + grade + " percent, so you got a B!");
}else if(grade <= 89){
	console.log("You got " + grade + " percent, so you got a B+!");
}else if(grade <= 94){
	console.log("You got " + grade + " percent, so you got an A!");
}else if(grade <= 100){
	console.log("You got " + grade + " percent, so you got an A+!!")
};
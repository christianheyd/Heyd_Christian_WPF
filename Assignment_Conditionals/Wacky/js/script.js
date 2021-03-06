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

/*Sets the weight on Earth*/
var weight = prompt("How much do you weigh on Earth?");
console.log(weight);

/*Lists planets, as well as the Moon and Sun.*/
var heavenlyBody = prompt("Please select an object of the solar system from this list. Case sensitive! \n- The Sun \n- Mercury \n- Venus \n- The Moon \n- Mars \n- Jupiter \n- Saturn \n- Uranus \n- Neptune \n- Pluto");
console.log(heavenlyBody);

if(heavenlyBody == "The Sun"){/*Code performed if user chooses The Sun*/
	var sunPound = 27.072;
	var sunEarthConvert = weight * sunPound;
	console.log("You would weigh " + sunEarthConvert + " pounds on the Sun!");
}else if(heavenlyBody == "Mercury"){/*Code performed if user chooses Mercury*/
	var mercPound = 0.378;
	var mercConvert = weight * mercPound;
	console.log("You would weigh " + mercConvert + " pounds on Mercury!");
}else if(heavenlyBody == "Venus"){/*Code performed if user chooses Venus*/
	var venusPound = 0.907;	
	var venusConvert = weight * venusPound;
	console.log("You would weigh " + venusConvert + " pounds on Venus!");
}else if(heavenlyBody =="The Moon"){/*Code performed if user chooses The Moon*/
	var moonPound = 0.166;
	var moonConvert = weight * moonPound;
	console.log("You would weigh " + moonConvert + " pounds on The Moon!");
}else if(heavenlyBody == "Mars"){/*Code performed if user chooses Mars*/
	var marsPound = 0.377;
	var marsConvert = weight * marsPound;
	console.log("You would weigh " + marsConvert + " pounds on Mars!");
}else if(heavenlyBody == "Jupiter"){/*Code performed if user chooses Jupiter*/
	var jupPound = 2.364;
	var jupConvert = weight * jupPound;
	console.log("You would weigh " + jupConvert + " pounds on Jupiter!");
}else if(heavenlyBody =="Saturn"){/*Code performed if user chooses Saturn*/
	var satPound = 0.916;
	var satConvert = weight * satPound;
	console.log("You would weigh " + satConvert + " pounds on Saturn!");
}else if(heavenlyBody == "Uranus"){/*Code performed if user chooses Uranus*/
	var uraPound = 0.889;
	var uraConvert = weight * uraPound;
	console.log("You would weigh " + uraConvert + " pounds on Uranus!");
}else if(heavenlyBody == "Neptune"){/*Code performed if user chooses Neptune*/
	var nepPound = 1.125;
	var nepConvert = weight * nepPound;
	console.log("You would weigh " + nepConvert + " pounds on Neptune!");
}else if(heavenlyBody == "Pluto"){/*Code performed if user chooses Pluto*/
	var pluPound = 0.067;
	var pluConvert = weight * pluPound;
	console.log("Pluto isn't a planet, but you would weigh " + pluConvert + " pounds there!");
}else{/*Code performed if user does not select one of the above options.*/
	alert("Please check your spelling in the console and refresh the page.");
}
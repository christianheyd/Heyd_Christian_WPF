// JavaScript Document

//Weight on Mars

//Prompts for size of crew.
var crew = prompt("This tool calculates your total weight including any cargo you may have on Mars. \nPlease enter how many people are in your crew.");
console.log(crew);

//Prompts for the weight of each crew member.
var earthWeight = prompt("How much does each person weigh?");
console.log(earthWeight);

//Prompts for weight of cargo.
var cargo = prompt("How much does your cargo is each person carrying in pounds?");
console.log(cargo);

//Conversion rate for pounds on Mars.
var marsPound = .377;

//caluclation for totalling weight of the crew
var crewWeight = (crew * earthWeight);
console.log(crewWeight);

//totals the weight of each crew member's cargo.
var cargoWeight = crew * cargo;
console.log(totalWeight);

//adds the total cargo and crew weights
var totalWeight = crewWeight + cargoWeight;
console.log(totalWeight)

//converts Earth weight to Mars weight.
var marsWeight = totalWeight * marsPound ;
console.log(marsWeight);

alert("Your party will weigh " + marsWeight + " pounds on Mars.");
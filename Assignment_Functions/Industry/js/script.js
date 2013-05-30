// JavaScript Document
// Christian Heyd
// May 29th, 2013
// Functions - Industry

/* I came up with this idea to help me break up larger projects into smaller ones for time management, which
   I personally think is one of the most important skills to learn in the web design industry.*/
   
alert("How much have you done on your project for the client?"); //Informs user of what the tool is used for.

var tasksTotal = prompt("How many tasks are there in total to complete?"); //Prompts user for total number of tasks.
console.log(tasksTotal + " total tasks."); //Prints this number to console.

var tasksCompleted = prompt("How many tasks have been completed?"); //Prompts user for number of tasks completed.
console.log(tasksCompleted + " tasks completed."); //Prints this number to console.

function taskPercent(tT, tC){/*Function for calculating percentage of completion.*/
	/*The tasks var is the calculation for percentage. tC is tasks completed divided by tT, or tasks in total. */
	var tasks = tC / tT;
	/*The taskConvert var converts the decimal from the tasks var into a whole number for display in the console.*/
	var taskConvert = tasks * 100;
	return taskConvert;
}

/*Return variable and prints to console.*/
var taskPercentage = taskPercent(tasksTotal, tasksCompleted);
console.log(taskPercentage + " percent of the project is finished.");
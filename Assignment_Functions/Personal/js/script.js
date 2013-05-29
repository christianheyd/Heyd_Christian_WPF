// JavaScript Document
// Christian Heyd
// May 29th, 2013
// Assignment: Functions - Personal

/* I thought of creating this tool for my own personal use beyond this class because of a rule I was taught when I was
   younger related to saving money (something I've always had a tough time with). The rule is to never spend more than
   a quarter of your total amount available to save while earning. I will demonstrate this with code here. */
   
alert("This tool will help calculate if a purchase is within your budget.");

var totalBalance = prompt("Please enter your current balance.");
console.log("Balance: $" + totalBalance);

var purchaseAmount = prompt("Please enter the amount of your desired purchase.");
console.log("Purchase amount: $" + purchaseAmount);

function quarter(b){
	var quarterBalance = b / 4;
	return quarterBalance

};

var showQuarter = quarter(totalBalance);
console.log("$" + showQuarter + " is a quarter of your total balance.");

(showQuarter < purchaseAmount) ? console.log("This purchase is over your budget for this pay period!") : console.log("This purchase is within your budget.");
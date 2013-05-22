// JavaScript Document
/* 
Christian Heyd
May 22nd, 2013
Assignment - Conditionals (Personal)

I work at a grocery store near my home. This is something that we have to do regularly,
so I figured I could make something out of it. This script will verify if a customer is old
enough to buy alcohol.
*/

/*States what we are asking with the code*/
var customer = alert ("Is the customer old enough to buy alcohol?");

/*Asks for ID from customer*/
var askId = prompt("Does the customer have ID?"); 

/*If no ID, turn customer away*/
if(askId == "No"){console.log("Sorry, we need to see your driver's license!");
}else{/*Code performed if customer has ID*/
	var birthYear = prompt("What is the year of birth?");
	/*Calculation for age*/
	var age = 2013 - birthYear;
	
	/*Asks if the customer is 21 or over*/
	if(age >= 21){
		console.log("You're old enough! Cash or credit?");
		}else{
		console.log("Sorry, you've got a little waiting to do!");
		
		}
	
	
}


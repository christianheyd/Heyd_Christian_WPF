// JavaScript Document
// Christian Heyd, May 14th, 2013 //
// Expressions Worksheet //

//Dog Years

var sparkyAge = 1; //Sparky's age in human years.

var dogYears = 7; //Human years in dog years.
var sparkyDogAge = sparkyAge * dogYears;

console. log("Sparky is " + sparkyAge + " human years old which is " + sparkyDogAge + " in dog years.");

// Slices of Pie I
var slices = 8;  //Slices per pizza
var people = 8; //People at party
var pizza = 4; //Pizzas ordered

//defining value of slicesPerPerson
var slicesPerPerson = slices * pizza / people; 

console. log("Each person ate " + slicesPerPerson + " slices of pizza at the party");

//Slices of Pie II

var slicesConsumed = 3; //dictates how many were actually eaten as opposed to slices AVAILABLE
var sparkySlices = (slices * pizza) - (slicesConsumed * people); //calculation for leftovers

console. log("Sparky gets " + sparkySlices + " slices of pizza.");

//Average Shopping Bill

//defining value of shoppingBills
var shoppingBills = [50, 65, 80, 40, 100];

//Adding array numbers for total shopping over five weeks and defining new var for total
var shoppingTotal = shoppingBills[0]+shoppingBills[1]+shoppingBills[2]+shoppingBills[3]+shoppingBills[4];

//finding the average cost and defining new var for average cost
var shoppingAverage = (shoppingBills[0]+shoppingBills[1]+shoppingBills[2]+shoppingBills[3]+shoppingBills[4])/5;

console.log("You have spent a total of $" + shoppingTotal + " on groceries over 5 weeks. That's an average of $" + shoppingAverage + " per week.");

//Discounts

//Defining original price
var originalPrice = 2500;

//defining discount percentage
var discount = .15;

//defining item description
var purchaseDescription = "Macbook Pro";

//Defining price of item without tax
var noTax = originalPrice - (originalPrice * discount);

//Defining sales tax amount
var salesTax = 0.06;

//Defining price of item with discount and sales tax

var taxedPurchase = (noTax * salesTax) + noTax;

console.log("Your " + purchaseDescription + " was originally $" + originalPrice + ", but after a discount of " + discount + " percent, it is now $" + noTax + " with no tax and $" + taxedPurchase + " with sales tax.")
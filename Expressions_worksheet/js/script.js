// JavaScript Document
// Christian Heyd, May 14th, 2013 //
// Expressions Worksheet //

//Dog Years

var sparkyAge = 1; //Sparky's age in human years.

var dogYears = 7; //Human years in dog years.
var sparkyDogAge = sparkyAge * dogYears;

console. log("Sparky is " + sparkyAge + " human years old which is " + sparkyDogAge + " in dog years.")

// Slices of Pie I
var slices = 8;  //Slices per pizza
var people = 8; //People at party
var pizza = 4; //Pizzas ordered

var slicesPerPerson = slices * pizza / people;

console. log("Each person ate " + slicesPerPerson + " slices of pizza at the party")

//Slices of Pie II

var slicesConsumed = 3; //dictates how many were actually eaten as opposed to slices AVAILABLE
var sparkySlices = (slices * pizza) - (slicesConsumed * people); //calculation for leftovers

console. log("Spark gets " + sparkySlices + " slices of pizza.")

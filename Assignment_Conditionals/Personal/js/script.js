// JavaScript Document
/*Christian Heyd
 *May 22nd, 2013
 *Assignment: Conditionals - Personal*/
 
/*This script will tell you if you are getting a healthy amount of sleep.
  I chose this because I'm currently trying to fix my sleep schedule!*/

alert("Is it time for you to go to sleep?");
/*Sets the hour of time of sleep*/
var currentHour = prompt("Enter the current hour.");
console.log(currentHour + " currentHour var");

/*Sets the minutes of time of sleep*/
var currentMinute = prompt("Enter current minute");
console.log(currentMinute + " currentMinute var");

/*Sets the hour of time of waking*/
var wakeUpHour = prompt("Enter the hour you need to wake up at.");
console.log(wakeUpHour + " wakeUpHour var");

/*Sets the minutes of time of waking*/
var wakeUpMinute = prompt("Enter the minute you need to wake up at.");
console.log(wakeUpMinute + " wakeUpMinute var");

/*Converts hours to minutes, then adds the second set of minutes on.*/
var currentMinutesConvert = (currentHour * 60) + parseInt(currentMinute);
console.log(currentMinutesConvert + " minutes.");

var wakeUpMinutesConvert = (wakeUpHour * 60) + parseInt(wakeUpMinute);
console.log(wakeUpMinutesConvert + " minutes.");

/*Calculates minutes slept. Math.abs() value was added to operation to correct bug with negative hours of sleep.*/
var minSlept = Math.abs(wakeUpMinutesConvert - currentMinutesConvert);
console.log(minSlept + " minutes slept.");

/*Converts minutes slept back to hours slept.*/
var hoursSlept = minSlept / 60;
console.log(hoursSlept + " hours slept.");

/*Ternary for result.*/
(hoursSlept < 7) ? console.log("You went to bed too late! You need at least 7 hours of sleep!") : console.log("You've slept plenty!");
// JavaScript Document
/*Christian Heyd
 *May 22nd, 2013
 *Assignment: Conditionals - Personal*/
 
/*This script will tell you if you are getting a healthy amount of sleep.
  I chose this because I'm currently trying to fix my sleep schedule!*/

alert("Is it time for you to go to sleep?");
var currentHour = prompt("Enter the current hour.");
console.log(currentHour + " currentHour var");
var currentMinute = prompt("Enter current minute");
console.log(currentMinute + " currentMinute var");
var wakeUpHour = prompt("Enter the hour you need to wake up at.");
console.log(wakeUpHour + " wakeUpHour var");
var wakeUpMinute = prompt("Enter the minute you need to wake up at.");
console.log(wakeUpMinute + " wakeUpMinute var");


var currentMinutesConvert = (currentHour * 60) + parseInt(currentMinute);
console.log(currentMinutesConvert + " minutes.");

var wakeUpMinutesConvert = (wakeUpHour * 60) + parseInt(wakeUpMinute);
console.log(wakeUpMinutesConvert + " minutes.");

var minSlept = wakeUpMinutesConvert - currentMinutesConvert;
console.log(minSlept + " minutes slept.");

var hoursSlept = minSlept / 60;
console.log(hoursSlept + " hours slept.");

(hoursSlept < 7) ? console.log("You went to bed too late! You need at least 7 hours of sleep!") : console.log("You've slept plenty!");
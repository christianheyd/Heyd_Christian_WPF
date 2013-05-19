// JavaScript Document

//Download Time Calculator

//Defines number of downloaded files.
var files = prompt("This tool calculates estimated download times. \nPlease enter how many files you are downloading."); 

//Defines size of files.
var fileSize = prompt("What is the size of the files you are downloading?");

//Defines speed of download in megabits.
var downloadSpeed = prompt("Enter download speed in megabits per second."); 

var megabit = 0.125

//Converts megabits per second to megabytes per second.
var megabytesConversion = downloadSpeed * megabit; 

//Calculates download time. Added math.round to calculate to closest whole number.
var downloadTime = Math.round((files * fileSize) / megabytesConversion); 

//Alert displaying the download time in seconds.
alert("Your download will take approximately " + downloadTime + " seconds.");

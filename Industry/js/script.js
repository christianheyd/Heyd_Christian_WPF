// JavaScript Document

//Download Time Calculator

//Defines size of download in megabytes.
var fileSize = prompt("This tool calculates estimated download times. \nPlease enter size of file in megabytes."); 

//Defines speed of download in megabits.
var downloadSpeed = prompt("Enter download speed in megabits per second."); 

//Converts megabits per second to megabytes per second.
var megabytesConversion = downloadSpeed * 0.125; 

//Calculates download time. Added math.round to calculate to closest whole number.
var downloadTime = Math.round(fileSize / megabytesConversion); 

//Alert displaying the download time in seconds.
alert("Your download will take approximately " + downloadTime + " seconds.");

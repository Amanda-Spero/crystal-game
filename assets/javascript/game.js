

$(document).ready(function() {

var randomNumber = Math.floor(Math.random() * 120) + 19;
var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;
var wins = 0;
var losses = 0;
var total = 0;




//start game

//generate random number

//put number into box

//generate random numbers for each crystal

//when crystal clicked, add that amount to player's total, show in box

$("button").on("click", function() {
    randomNumber = $(this).attr("value");
    console.log("Your Pick: " + randomNumber);

//add random numbers for crystals clicked until equal random number or go over

//if equal to random number, win, wins++

//if over random number, lost, lose--

//in either case, restart game




//when do something, generate random number
$("#button").on("click", function() {
    
    $("#number-box").innerHTML(randomNumber);
    console.log(randomNumber)

})})})













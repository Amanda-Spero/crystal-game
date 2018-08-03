//start when DOM has loaded
$(document).ready(function() {
 
//user's total number guess so far
var yourMatchingNumber = 0;

//generate random number to guess
var randomNum = randomNumGen();

//starting variables
var wins = 0;
var losses = 0;
var crystals;

//function to generate random values for crystals and returns the crystals object

function randomNumCrystals(){
//crystals object
return{
    blue: {
        points: Math.floor(Math.random() * 12) +1,
        imageUrl: "assets/images/blue.png"
    },
    green: {
        points: Math.floor(Math.random() *12) +1,
        imageUrl: "assets/images/green.png"
    },
    pink: {
        points: Math.floor(Math.random() * 12) +1,
        imageUrl: "assets/images/pink.png"
    },
    red: {
        points: Math.floor(Math.random() * 12) +1,
        imageUrl: "assets/images/red.png"
    }
    };

}
//function to create the random number to try to reach
function randomNumGen() {
    return Math.floor(Math.random() * 102) +19;
}
 

function setGame(){
    //set users user's total to 0
    yourMatchingNumber = 0;
    //generate random numbers for the crystals
    crystals = randomNumCrystals();
    //generate the random number to try to reach and render it to the page
    randomNum = randomNumGen();
    $("#random-area").text(randomNum);
}

    //function to update the page when user wins or loses
    function updateDom(didUserWin) {
        $("#win-area").empty();

        //if the user wins
        if (didUserWin === true) {
            //show message, restart game, and render a new "current guess"
            $("#win-area").append($("<p>").text("You won!"));
            setGame();
            renderMatchingNumber();
        }

        else if (didUserWin === false) {
            //show defeat message, restart the game, render new "current guess" number
            $("#win-area").append($("<p>").text("You lost!"));
            setGame();
            renderMatchingNumber();
        }
        //building win/loss display and appending it to the page
        var wSpan = $("<span>").text(wins);
        var lSpan = $("<span>").text(losses);

        var pWins = $("<p>").text("Wins: ");
        var pLosses = $("<p>").text("Losses: ");

        pWins.append(wSpan);
        pLosses.append(lSpan)
        $("#win-area").append(pWins);
        $("#win-area").append(pLosses);
    }

//function to render crystals to the page
    function renderCrystals() {
        for (var key in crystals) {
            var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
            var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageUrl);
            crystalDiv.append(crystalImg);
            $("#crystal-area").append(crystalDiv);
        }
    }

 //function to add the crystal clicked to the user's current number guess
 function updateMatchingNumber(crystal) {

     yourMatchingNumber += crystals[crystal.attr("data-name")].points;
 }

//function to render user's current number guess to the page
function renderMatchingNumber() {
    var scoreNumDiv = $("<div id='score-number'>").text(yourMatchingNumber);
    $("#score-area").html(scoreNumDiv);
}

    //call the functions to start the game
    setGame();
    updateDom();
    renderCrystals();
    renderMatchingNumber();

//create click event for the crystals
$(".crystals-button").on("click", function(event) {
    updateMatchingNumber($(this));
    renderMatchingNumber();

    //see if user won or lost yet
    if (yourMatchingNumber === randomNum) {
        wins++;
        setGame();
        updateDom(true);
    }
    else if (yourMatchingNumber > randomNum) {
        //add one to the losses, restart the game, update the page
        losses++;
        setGame();
        updateDom(false);
    }

    });

});

  
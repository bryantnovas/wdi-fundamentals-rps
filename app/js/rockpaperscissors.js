////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // Howevr, if `move` is not specified / is null, your expression should equal `getInput()`.
   if (move > 0) {
    return move;
    } else {
    getInput();
}
    
}


function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    if (move > 0) {
        return move;
    } else {
        randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove === computerMove) {
        winner = "It's a tie"
    }
    else if (playerMove === "scissors" && computerMove === "paper") {
        winner = "player Wins"
    };
    else if (playerMove === "rock" && computerMove === "scissors") {
        winner = "player Wins"
    };
     else if (playerMove === "Paper" && computerMove === "rock") {
        winner = "player Wins"
    };
    else if (computerMove === "scissors" && playerMove === "paper") {
        winner = "computer Wins"
    };
    else if (computerMove === "rock" && playerMove === "scissors") {
        winner = "computer Wins"
    };
     else if (computerMove === "Paper" && playerMove === "rock") {
        winner = "computer Wins"
    };
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins <5 && computerWins < 5){   
        var winner = getWinner(getPlayerMove(), getComputerMove());
    
        if (winner == "player") {
        playerWins++;
        console.log([playerWins, computerWins]);
        }
        else if (winner == "computer") {
        computerWins++;
        console.log([playerWins, computerWins]);
        }
        else {
        console.log("No change in score.");
        }
        if (playerWins == 5) {
                console.log("Player wins 5 times");
            } 
        else {
                console.log("Computer wins 5 times");
            }

             return [playerWins, computerWins];  
            }
 playToFive();

var win = 0;
var lose = 0;
var remainingGuesses = 10;
var pickedGuess = [];
var winDisplay = document.getElementById("win");
var loseDisplay = document.getElementById("lose");
var remainingGuess = document.getElementById("remainingGuesses");
var displayPicked = document.getElementById("picked");
var gameOver = false;

var choice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var cpuGuess = choice[Math.floor(Math.random() * choice.length)];

document.onkeyup = function (event) {
  

    // user guess which key was pressed 
    var userGuess = event.key;
    // whatever user types, it will adds to user guess 
    pickedGuess.push(userGuess);
    // that will shows on display too 
    displayPicked.textContent = pickedGuess;
    // create random choice for computer 
    console.log("choice", choice);
    // userGuess vs. cpuGuess;
    console.log("User Guess: " + userGuess);
    console.log("Computer Guess " + cpuGuess);

    if (!gameOver) {
        // win situation
        if (userGuess === cpuGuess) {
            win++;
            alert("You guessed right!");
            // change display as well 
            winDisplay.textContent = win;
            remainingGuesses = 11;
            // computer has to pick a new letter after the result matches 
            cpuGuess = choice[Math.floor(Math.random() * choice.length)];
        }
        // lose situation 
        if (userGuess !== cpuGuess) {
            remainingGuesses--;
        }
        if (remainingGuesses === 0) {
            gameOver = false;
            alert("Game over!");
            lose++;
            loseDisplay.textContent = lose;
            remainingGuesses = 10;
        }
    }
    remainingGuess.innerText = remainingGuesses;
    // the picked array has to be cleaned up 
    pickedGuess = [];
    displayPicked = pickedGuess;
}


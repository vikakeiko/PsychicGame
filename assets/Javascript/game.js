var win = 0;
var lose = 0;
var remaningGuesses = 10;
var pickedGuess = [];
var winDisplay = document.getElementById("win");
var loseDisplay = document.getElementById("lose");
var remaningGuess = document.getElementById("remainingGuesses");
var displayPicked = document.getElementById("picked");
var gameOver = false;

var choice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var cpuGuess = choice[Math.floor(Math.random() * choice.length)];


// var pickLetter = prompt("Pick a letter from \"a\" to \"z\"?");

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
            if (userGuess === cpuGuess) {
                win++;
                alert("You guessed right!");
                winDisplay.textContent = win;
            }
            if (userGuess !== cpuGuess) {
                lose++;
                alert("WRONGGG!");
                pickedGuess.push(userGuess);
                loseDisplay.textContent = lose;
                remaningGuesses--;
            }
        }  else {
            gameOver = true;
            alert("Game over!");
        }
        remaningGuess.innerText = remaningGuesses;
    }
   



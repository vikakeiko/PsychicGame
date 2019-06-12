var win = 0;
var lose = 0;
var remaningGuesses = 9;
var pickedGuess = [];

var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// create random choice for computer 
var cpuGuess = options[Math.floor(Math.random() * options.length)];
var numberOfTries = 0;


document.onkeyup = function (event) {
    // user guess 
    var userGuess = event.key;
    console.log(event.key);
    console.log(cpuGuess);


    if (userGuess === cpuGuess) {
        // user win 
        win++;
    }

    if (userGuess !== cpuGuess) {
        // user lose 
        lose++;
    }

}

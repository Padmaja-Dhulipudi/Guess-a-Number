let numberToGuess = Math.floor(Math.random() * 100);
let chances = 7;
let guessCounter = 0;

function checkGuess() {
    let userGuess = document.getElementById('guess').value;
    let result = document.getElementById('result');
    let chancesLeft = document.getElementById('chancesLeft');
    guessCounter++;
    
    if (userGuess == numberToGuess) {
        result.innerHTML = `The number is ${numberToGuess} and you found it right!! in the ${guessCounter} attempt`;
        result.style.color = "green";
    } else if (guessCounter >= chances) {
        result.innerHTML = `Oops sorry, The number is ${numberToGuess}. Better luck next time!`;
        result.style.color = "red";
    } else if (userGuess > numberToGuess) {
        result.innerHTML = 'Your guess is higher';
        result.style.color = "orange";
    } else {
        result.innerHTML = 'Your guess is lesser';
        result.style.color = "orange";
    }
    
    chancesLeft.innerHTML = `Chances left: ${chances - guessCounter}`;
    result.classList.add("fade-in");
}

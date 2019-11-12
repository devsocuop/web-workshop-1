// Get the element objects
const playAgainBtn = document.getElementById('play-again-btn');
const btns = document.querySelectorAll('.button-item');
const answerContainer = document.getElementById('answer');

let winnerColour; // Integer of the winning button (corresponds to html name attribute of the element).
let gameOver = false; // if gameOver is true, game is over.

// Add event listener to each of the colour buttons for the click event
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function (event) {
        event.preventDefault();
        if (!gameOver) {
            // Do something here - for you to figure out as per the tasks :) 
        }
    });
}

function startGame() {
    // When the game starts this generates a random number between 
    // 0-5, the number is the winner (this corresponds to a 
    // button as per the 'name' attribute of the element).
    winnerColour = Math.floor(Math.random() * 6);

    // Resets the gameOver variable and the text content of the answer container.
    answerContainer.textContent = 'Answer: ';
    gameOver = false;
}

// Play again button click event listener
playAgainBtn.addEventListener('click', function (event) {
    event.preventDefault();
    
    // Add some code here.
});

// Start the game when the page is loaded
startGame();
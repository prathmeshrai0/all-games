const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessField').value);
    const message = document.getElementById('message');
    
    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    attempts++;

    if (attempts >= 5) {
        message.textContent = 'Game Over! You have reached the maximum number of attempts. please refresh the window to restart';
        disableInput();
        showRestartButton();
        return;
    }

    if (guess === randomNumber) {
        message.textContent = `Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`;
        disableInput();
        showRestartButton();
    } else if (guess < randomNumber) {
        message.textContent = 'Your number is low!';
    } else {
        message.textContent = 'Your number is high!';
    }
}

function disableInput() {
    document.getElementById('guessField').disabled = true;
    document.querySelector('button').disabled = true;
}

function showRestartButton() {
    const restartButton = document.getElementById('restartButton');
    restartButton.style.display = 'block';
}

function restartGame() {
    
    attempts = 0;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('message').textContent = '';
    document.getElementById('guessField').disabled = false;
    document.querySelector('button').disabled = false;
}


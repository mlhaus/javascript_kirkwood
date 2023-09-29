const guess_form = document.getElementById('guess-form');
const guess_input = document.getElementById('guess-input');
const guess_btn = document.getElementById('guess-btn');
const feedback = document.getElementById('feedback');
const play_again_btn = document.getElementById('play-again-btn');

let gamePlaying = false;
let randomNumber = 0;
let guessCount = 0;
const minNum = 1;
const maxNum = 50;

function stopPlay() {
    gamePlaying = false;
    play_again_btn.style.display = 'inline-block';
    guess_btn.style.display = 'none';
}

function newRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

function isANumber(str) {
    return !isNaN(str) && Number(str) % 1 == 0;
}

function isAValidNumber(str) {
    return isANumber && Number(str) >= minNum && Number(str) <= maxNum;
}

function startNewGame() {
    play_again_btn.style.display = 'none';
    guess_btn.style.display = 'inline-block';
    feedback.innerText = '';
    guess_input.value = '';
    guess_input.focus();
    guessCount = 0;
    gamePlaying = true;
    randomNumber = newRandomNumber();
}

function getReply(num) {
    let result = `${num} is `;
    if (num == randomNumber) {
        result += `correct! It took you ${guessCount} `;
        result += (guessCount === 1 ? 'guess.' : 'guesses.');
        stopPlay();
    } else if (num >= randomNumber) {
        result += 'too high';
    } else {
        result += 'too low';
    }
    return result;
}

function verifyGuess() {
    if (gamePlaying) {
        const guess = guess_input.value;
        if (isAValidNumber(guess)) {
            guessCount++;
            const p = document.createElement('p');
            p.innerText = getReply(guess);
            feedback.appendChild(p);
        }
    }
}

window.addEventListener('load', startNewGame);
guess_btn.addEventListener('click', verifyGuess);
guess_form.addEventListener('submit', event => event.preventDefault());
play_again_btn.addEventListener('click', startNewGame);
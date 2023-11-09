let wordsArr = [];

function loadCSVData() {
    Papa.parse('words.csv', {
        download: true,
        header: false,
        complete: results => {
            // wordsArr = results.data[0]; // use this with comma separated values
            // do this if the values are line separated
            results.data.forEach(el => {
                wordsArr.push(el[0]);
            });
        }
    });
}

window.addEventListener('load', loadCSVData);


const play_btn = document.getElementById('play-btn');
const wrong_letters_container = document.getElementById('wrong-letters-container');
const wordBlock = document.getElementById('word');
const modal = document.getElementById('modal');
const modal_message = document.getElementById('modal-message');
const notification = document.getElementById('notification');
const notification_letter = document.getElementById('notification-letter');
const hangmanParts = document.querySelectorAll('.hangman > *');
let randomWord = '';
const correctLetters = [];
const incorrectLetters = [];
let gamePlaying = false;

function gameLost() {
    if (incorrectLetters.length === hangmanParts.length) {
        gamePlaying = false;
        modal_message.innerHTML = `Unfortunately, you lost. 😞<br>The correct word was '${randomWord}'`;
        play_btn.innerText = 'Play again';
        modal.style.display = 'flex'; // display modal
        play_btn.focus();
    }
}

function gameWon() {
    const lettersInWord = wordBlock.innerText;
    if (lettersInWord === randomWord) {
        gamePlaying = false;
        modal_message.innerHTML = 'Congratulations!<br>You won! 😃';
        play_btn.innerText = 'Play again';
        modal.style.display = 'flex'; // display modal
        play_btn.focus();
    }
}

function displayWord() {
    let allSpanTags = '';
    for (let letter of randomWord) {
        allSpanTags += `<span class="letter">${correctLetters.includes(letter) ? letter : '&nbsp;'}</span>`;
    }
    wordBlock.innerHTML = allSpanTags;
    gameWon();
}

function hideElements() {
    modal.style.display = 'none'; // hide modal
    wrong_letters_container.style.display = 'none'; // hide wrong letters
    notification.style.transform = 'translate(0, 55px)';
}

function getRandomWord() {
    const randNum = Math.floor(Math.random() * wordsArr.length);
    randomWord = wordsArr[randNum].toLowerCase().trim();
    displayWord();
    hideElements();
}

function startGame(event) {
    event.preventDefault();
    getRandomWord();
    correctLetters.splice(0);
    incorrectLetters.splice(0);
    hangmanParts.forEach((part) => part.style.display = 'none');
    displayWord();
    gamePlaying = true;
}

// play_btn.addEventListener('click', startGame);
document.getElementById('button-wrapper').addEventListener('submit', startGame);

function displayNotification(keyPressed) {
    notification_letter.textContent = keyPressed;
    notification.style.cssText = 'transform: translateY(0); transition: transform 0.3s ease-in-out';
    window.setTimeout(() => {
        notification.style.cssText = 'transform: translateY(55px); transition: transform 0.3s ease-in-out';
    }, 2000);
}

function displayIncorrectLetters() {
    wrong_letters_container.style.display = 'block';
    wrong_letters_container.innerHTML = '<h3>Wrong letters</h3>';
    const paragraph = document.createElement('p');
    paragraph.textContent = incorrectLetters.toString();
    wrong_letters_container.append(paragraph);
    gameLost();
}

function showAnotherHangmanPart() {
    hangmanParts.forEach((part, index) => {
        if (index < incorrectLetters.length) {
            part.style.display = 'block';
        }
    });
}

function checkKeyPressed(event) {
    if (gamePlaying) {
        const keyPressed = event.key;
        if (/^[a-z]+$/.test(keyPressed)) {
            if (randomWord.includes(keyPressed)) {
                if (!correctLetters.includes(keyPressed)) {
                    correctLetters.push(keyPressed);
                    displayWord();
                } else {
                    displayNotification(keyPressed);
                }
            } else {
                if (!incorrectLetters.includes(keyPressed)) {
                    incorrectLetters.push(keyPressed);
                    displayIncorrectLetters();
                    showAnotherHangmanPart();
                } else {
                    displayNotification(keyPressed);
                }
            }
        }
    }
}

window.addEventListener('keydown', checkKeyPressed);
const card_number = document.querySelector('.card_number');
const card_quote = document.querySelector('.card_quote');
const card_dice = document.querySelector('.card_dice');

async function getNewQuote() {
    let response = await fetch(`https://api.adviceslip.com/advice`);
    response = await response.json();
    card_number.textContent = `Advice #${response.slip.id}`;
    card_quote.innerHTML = `&#8220${response.slip.advice}&#8221`;
}

//     fetch('https://api.adviceslip.com/advice')
//         .then((response) => {
//             return response.json();
//         })
//         .then((response) => {
//             card_number.textContent = `Advice #${response.slip.id}`;
//             card_quote.innerHTML = `&#8220${response.slip.advice}&#8221`;
//         });
// }

card_dice.addEventListener('click', getNewQuote);
window.addEventListener('load', getNewQuote);
// If Statement Syntax
if (true) {
    console.log('This is true');
}

if (false) {
    console.log('This is NOT true');
}

// Evaluation expressions
const x = 10;
const y = 5;

if (x >= y) {
    console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
    console.log(`${x} is equal to ${y}`);
} else {
    console.log(`${x} is NOT equal to ${y}`);
}

// Block scope
if (x !== y) {
    const z = 20;
    console.log(`${z} is 20`);
}

// console.log(z); // Throw error

// Shorthand If/Else
if (x >= y)
    console.log(`${x} is greater than or equal to ${y}`),
        console.log('This is true');
else console.log('This is false');

// const answer = parseInt(prompt('How many moons does Saturn have?'));
// if (answer === 31) {
//     console.log('Correct!');
// } else {
//     console.log('Incorrect. ');
// }

const budget = parseInt(prompt('How much money can you spend?'));
if (budget < 15) {
    console.log('You should stay home and watch TV');
} else if (budget < 35) {
    console.log('You should go to a movie');
} else if (budget < 50) {
    console.log('You should go to dinner');
} else {
    console.log('You should go to dinner and a movie');
}
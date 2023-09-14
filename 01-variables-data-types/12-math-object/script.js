// Square root
console.log(Math.sqrt(9));
// Exponent
console.log(Math.pow(2, 3));
// Find the length of a side of a right-triangle
let side1 = 3;
let side2 = 4;
let side3 = Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));
console.log(side1, side2, side3);

// Absolute value
console.log(Math.abs(-5));

// Round
console.log(Math.round(4.2));
console.log(Math.round(4.9));

// Round up
console.log(Math.ceil(4.2));

// Round down
console.log(Math.floor(4.9));

function rollDie(times, low, high) {
    for (let i = 0; i < times; i++) {
        console.log(Math.floor(Math.random() * (high - low + 1) + low));
    }
}

rollDie(20, 1, 6);
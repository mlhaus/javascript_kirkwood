function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}

let x = randomInt(0, 10);
let y = randomInt(0, 5);

let sumOutput = x + y;
let differenceOutput = x - y;
let productOutput = x * y;
let quotientOutput = x / y;
let rmOutput = x % y;

console.log(`${x} + ${y} = ${sumOutput}`);
console.log(`${x} - ${y} = ${differenceOutput}`);
console.log(`${x} * ${y} = ${productOutput}`);
console.log(`${x} / ${y} = ${quotientOutput}`);
console.log(`${x} % ${y} = ${rmOutput}`);
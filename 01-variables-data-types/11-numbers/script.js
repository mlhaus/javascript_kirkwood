const num = 1234.567;
let num2 = num.toString();
console.log(num2, typeof num2);
let num3 = Number(num2);
console.log(num3, typeof num3);
console.log(num3.toFixed(2)); // round
console.log(num3.toPrecision(3)); // keep 3 leftmost digits
console.log(num3.toLocaleString('en-US'));
console.log(num3.toLocaleString('de-DE'));
console.log(num3.toLocaleString('ja-JP'));
console.log(num3.toLocaleString('fr-FR'));

console.log(num3.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
console.log(num3.toLocaleString('fr-CA', {style: 'currency', currency: 'CAD'}));
console.log(num3.toLocaleString('en-GB', {style: 'currency', currency: 'GBP'}));
console.log(num3.toLocaleString('jp-JA', {style: 'currency', currency: 'JPY'}));
console.log(num3.toLocaleString('en-IN', {style: 'currency', currency: 'INR'}));

// Largest and smallest possible number
console.log(Number.MAX_VALUE); // Largest numeric value

console.log(Number.MAX_VALUE + 1); // Number.MAX_VALUE

console.log(Number.MAX_VALUE === Number.MAX_VALUE + 1); // true

console.log(Number.MAX_VALUE * 2); // Infinity

console.log(Number.MIN_VALUE); // Smallest positive numeric value

console.log(Number.MIN_VALUE - 1); // -1

console.log(Number.MIN_VALUE / 2); // 0
const numbers = [12, 45, 33, 29, 39, 102];
const fruits = ['apple', 'grape', 'orange'];
const mixed = [12, 'Hello', true, null];

console.log(fruits[0]);
console.log(`My favorite fruit is the ${fruits[fruits.length - 1]}`);

fruits[1] = 'pear';

fruits[fruits.length] = 'strawberry';
console.log(fruits);

fruits[10] = 'blueberry';
console.log(fruits);
console.log(fruits[7]);

fruits.length = 2;
console.log(fruits);
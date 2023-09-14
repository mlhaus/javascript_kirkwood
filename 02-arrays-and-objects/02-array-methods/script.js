const fruits = ['apple', 'cherry', 'banana'];
fruits.push('orange');
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift('orange');
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.reverse();
console.log(fruits);
fruits.sort();
console.log(fruits);

const numbers = [3, 1, 10, 2, 9, 100];
numbers.sort(); // the incorrect way to sort
console.log(numbers);
numbers.sort(function (a, b) {
    return a - b;
});
console.log(numbers);
numbers.reverse();
console.log(numbers);
numbers.sort((a, b) => b - a);
console.log(numbers);

console.log(fruits.includes('banana'));
console.log(fruits.includes('coconut'));
console.log(fruits.indexOf('banana'));
console.log(fruits.indexOf('coconut'));

fruits.push('orange', 'coconut', 'strawberry');
console.log(fruits);
console.log(fruits.slice(2, 5));
console.log(fruits);
console.log(fruits.splice(2, 3));
console.log(fruits);
console.log(fruits.splice(1, 1));
console.log(fruits);
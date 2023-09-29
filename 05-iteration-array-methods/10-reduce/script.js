const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // starts the accumulator at 0
console.log(sum);

const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);
console.log(sum2);

const houses = [
    {address: '', price: 100000, numBathrooms: 3},
    {address: '', price: 125000, numBathrooms: 2},
    {address: '', price: 141500, numBathrooms: 3}
];
const housesWith3Bathrooms = houses
    .filter(house => house.numBathrooms === 3);
const avgHousePriceWith3Bathrooms = housesWith3Bathrooms.reduce((acc, house) => {
    return house.price + acc;
}, 0) / housesWith3Bathrooms.length;
console.log(avgHousePriceWith3Bathrooms);


const people = [
    {name: 'Sarah', gender: 'female', age: 25},
    {name: 'Tom', gender: 'male', age: 18},
    {name: 'Tim', gender: 'male', age: 65},
    {name: 'Kim', gender: 'female', age: 58}
];

const females = people.filter(person => person.gender === 'female');
console.log(females);

const average = females.reduce((total, next) => total + next.age, 0) / females.length;

console.log(average);









